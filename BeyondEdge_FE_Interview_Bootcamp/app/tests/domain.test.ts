import { describe, expect, it } from "vitest";
import {
  calculateTotal,
  filterProducts,
  isQuantity,
  products,
} from "../src/domain";

describe("catalog and money", () => {
  it("normalizes search and combines category", () => {
    expect(
      filterProducts(products, "  ORBITAL ", "Space").map((item) => item.id),
    ).toEqual(["space"]);
    expect(filterProducts(products, "orbital", "City")).toEqual([]);
  });
  it("handles empty and unmatched queries without changing the source", () => {
    expect(filterProducts(products, "")).toHaveLength(6);
    expect(filterProducts(products, "missing")).toEqual([]);
    expect(products).toHaveLength(6);
  });
  it("derives total from quantity using integer VND", () => {
    expect(calculateTotal([])).toBe(0);
    expect(
      calculateTotal([
        { ...products[0], quantity: 2 },
        { ...products[1], quantity: 1 },
      ]),
    ).toBe(1730000);
  });
  it.each([0, -1, 11, 1.5, NaN, Infinity])(
    "rejects invalid quantity %s",
    (quantity) => {
      expect(isQuantity(quantity)).toBe(false);
    },
  );
  it.each([1, 10])("accepts boundary quantity %s", (quantity) => {
    expect(isQuantity(quantity)).toBe(true);
  });
});
