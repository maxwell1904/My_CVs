import { afterEach, describe, expect, it, vi } from "vitest";
import { loadProducts } from "../src/api";

afterEach(() => vi.useRealTimers());
describe("local catalog service", () => {
  it("aborts an in-flight call", async () => {
    const controller = new AbortController();
    const promise = loadProducts("o", "slow", controller.signal);
    controller.abort();
    await expect(promise).rejects.toMatchObject({ name: "AbortError" });
  });
  it("handles an already aborted signal", async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(
      loadProducts("", "success", controller.signal),
    ).rejects.toMatchObject({ name: "AbortError" });
  });
  it("filters, returns empty, and rejects the error scenario", async () => {
    vi.useFakeTimers();
    const signal = new AbortController().signal;
    const filtered = loadProducts(" ORBITAL ", "success", signal);
    const empty = loadProducts("", "empty", signal);
    const failure = loadProducts("", "error", signal);
    const rejection = expect(failure).rejects.toThrow("unavailable");
    await vi.runAllTimersAsync();
    expect((await filtered).map((item) => item.id)).toEqual(["space"]);
    expect(await empty).toEqual([]);
    await rejection;
  });
});
