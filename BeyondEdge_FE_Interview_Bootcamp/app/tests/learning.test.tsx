import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Quantity, SharedName } from "../src/learning/PropsStateExample";

describe("book examples: props, state and lifting state", () => {
  it("uses props for the product and local state for quantity", async () => {
    const user = userEvent.setup();
    render(<Quantity name="Keyboard" price={200} />);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
    expect(screen.getByText("Total: 200")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Add one" }));
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Total: 400")).toBeInTheDocument();
  });
  it("keeps state when props change at the same tree position", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Quantity name="Keyboard" price={200} />);
    await user.click(screen.getByRole("button", { name: "Add one" }));
    rerender(<Quantity name="Keyboard" price={300} />);
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Total: 600")).toBeInTheDocument();
  });
  it("keeps each component instance's state separate", async () => {
    const user = userEvent.setup();
    render(<><Quantity name="Keyboard" price={200} /><Quantity name="Mouse" price={100} /></>);
    await user.click(within(screen.getByRole("region", { name: "Keyboard" }))
      .getByRole("button", { name: "Add one" }));
    expect(within(screen.getByRole("region", { name: "Mouse" }))
      .getByText("Quantity: 1")).toBeInTheDocument();
  });
  it("resets state when the component key changes", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Quantity key="a" name="Keyboard" price={200} />);
    await user.click(screen.getByRole("button", { name: "Add one" }));
    rerender(<Quantity key="b" name="Keyboard" price={200} />);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });
  it("lets a child request a parent state update through a callback prop", async () => {
    const user = userEvent.setup();
    render(<SharedName />);
    await user.type(screen.getByRole("textbox", { name: "Name" }), "An");
    expect(screen.getByLabelText("Greeting")).toHaveTextContent("Hello An");
    await user.clear(screen.getByRole("textbox", { name: "Name" }));
    expect(screen.getByLabelText("Greeting")).toHaveTextContent("Hello");
  });
});
