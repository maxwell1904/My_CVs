import { describe, expect, it } from "vitest";
import {
  addItem,
  cartReducer,
  changeQuantity,
  clearCart,
  makeStore,
  removeItem,
  selectTotal,
} from "../src/store";
import { products } from "../src/domain";

describe("cart transitions", () => {
  it("merges duplicate IDs and preserves the earlier state", () => {
    const before = cartReducer(undefined, addItem(products[0]));
    const after = cartReducer(before, addItem(products[0]));
    expect(before.items[0].quantity).toBe(1);
    expect(after.items).toHaveLength(1);
    expect(after.items[0].quantity).toBe(2);
  });
  it("caps repeated add at 10", () => {
    const store = makeStore();
    for (let index = 0; index < 12; index += 1)
      store.dispatch(addItem(products[0]));
    expect(store.getState().cart.items[0].quantity).toBe(10);
  });
  it("ignores invalid quantities and missing IDs", () => {
    const before = cartReducer(undefined, addItem(products[0]));
    expect(
      cartReducer(before, changeQuantity({ id: "city", quantity: 0 })),
    ).toEqual(before);
    expect(
      cartReducer(before, changeQuantity({ id: "missing", quantity: 3 })),
    ).toEqual(before);
  });
  it("recalculates total after quantity change and removal", () => {
    const store = makeStore();
    store.dispatch(addItem(products[0]));
    store.dispatch(addItem(products[1]));
    store.dispatch(changeQuantity({ id: "city", quantity: 2 }));
    expect(selectTotal(store.getState())).toBe(1730000);
    store.dispatch(removeItem("space"));
    expect(selectTotal(store.getState())).toBe(840000);
    store.dispatch(clearCart());
    expect(selectTotal(store.getState())).toBe(0);
  });
});
