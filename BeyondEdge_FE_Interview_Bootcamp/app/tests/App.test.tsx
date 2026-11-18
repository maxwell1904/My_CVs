import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { describe, expect, it, vi } from "vitest";
import App from "../src/App";
import { makeStore } from "../src/store";
import { products } from "../src/domain";
import * as api from "../src/api";

function renderApp() {
  const store = makeStore();
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  return { user, store };
}

function mockCatalog() {
  vi.spyOn(api, "loadProducts").mockResolvedValue(products);
}

describe("user flows", () => {
  it("keeps the cart after a failed order so the user can retry", async () => {
    mockCatalog();
    vi.spyOn(api, "submitPracticeOrder").mockRejectedValue(
      new Error("Unavailable"),
    );
    const { user, store } = renderApp();
    await user.click(
      await screen.findByRole("button", { name: "Add City workshop" }),
    );
    await user.type(
      screen.getByLabelText("Email for practice order"),
      "an@example.test",
    );
    await user.click(
      screen.getByRole("button", { name: "Create practice order" }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "could not be created",
    );
    expect(store.getState().cart.items).toHaveLength(1);
    expect(
      screen.getByRole("button", { name: "Create practice order" }),
    ).toBeEnabled();
    expect(
      screen.getByRole("button", { name: "Add City workshop" }),
    ).toBeEnabled();
  });

  it("shows loading and renders loaded products", async () => {
    mockCatalog();
    renderApp();
    expect(screen.getByText("Loading collection...")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Add Orbital station" }),
    ).toBeInTheDocument();
  });
  it("combines category filtering with returned results", async () => {
    mockCatalog();
    const { user } = renderApp();
    await screen.findByRole("button", { name: "Add Orbital station" });
    await user.selectOptions(screen.getByLabelText("Category"), "Nature");
    expect(
      screen.queryByRole("button", { name: "Add Orbital station" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Botanical garden" }),
    ).toBeInTheDocument();
  });
  it("supports add, quantity change and remove from the visible UI", async () => {
    mockCatalog();
    const { user } = renderApp();
    const add = await screen.findByRole("button", {
      name: "Add City workshop",
    });
    await user.click(add);
    await user.click(add);
    const cart = within(screen.getByRole("complementary", { name: "Cart" }));
    expect(cart.getByText("2 items")).toBeInTheDocument();
    await user.selectOptions(
      cart.getByLabelText("Quantity for City workshop"),
      "3",
    );
    expect(cart.getByText(/1\.260\.000/)).toBeInTheDocument();
    await user.click(
      cart.getByRole("button", { name: "Remove City workshop" }),
    );
    expect(cart.getByText(/Your cart is empty/)).toBeInTheDocument();
  });
  it("distinguishes a service error from empty data and retries", async () => {
    vi.spyOn(api, "loadProducts")
      .mockRejectedValueOnce(new Error("Temporary failure"))
      .mockResolvedValueOnce([]);
    const { user } = renderApp();
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Temporary failure",
    );
    expect(
      screen.queryByText("No sets match your filters."),
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Retry catalog" }));
    expect(
      await screen.findByText("No sets match your filters."),
    ).toBeInTheDocument();
  });
  it("keeps the latest search even when an older response resolves late", async () => {
    const resolvers: ((value: typeof products) => void)[] = [];
    vi.spyOn(api, "loadProducts").mockImplementation(
      () => new Promise((resolve) => resolvers.push(resolve)),
    );
    const { user } = renderApp();
    await user.type(screen.getByLabelText("Search sets"), "o");
    await act(async () => {
      resolvers[1]([products[1]]);
    });
    expect(
      screen.getByRole("button", { name: "Add Orbital station" }),
    ).toBeInTheDocument();
    await act(async () => {
      resolvers[0]([products[0]]);
    });
    expect(
      screen.queryByRole("button", { name: "Add City workshop" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Orbital station" }),
    ).toBeInTheDocument();
  });
  it("validates checkout and protects a pending order from double submit", async () => {
    mockCatalog();
    let resolveOrder: (result: { id: string }) => void = () => {};
    const submit = vi.spyOn(api, "submitPracticeOrder").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveOrder = resolve;
        }),
    );
    const { user } = renderApp();
    await user.click(
      await screen.findByRole("button", { name: "Add City workshop" }),
    );
    await user.click(
      screen.getByRole("button", { name: "Create practice order" }),
    );
    expect(screen.getByRole("alert")).toHaveTextContent("valid email");
    expect(submit).not.toHaveBeenCalled();
    await user.type(
      screen.getByLabelText("Email for practice order"),
      "an@example.test",
    );
    await user.dblClick(
      screen.getByRole("button", { name: "Create practice order" }),
    );
    expect(submit).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole("button", { name: "Add City workshop" }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Creating order..." }),
    ).toBeDisabled();
    await act(async () => {
      resolveOrder({ id: "LAB-TEST" });
    });
    await waitFor(() =>
      expect(
        screen.getByText(/Practice order LAB-TEST created/),
      ).toBeInTheDocument(),
    );
    expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  });
});
