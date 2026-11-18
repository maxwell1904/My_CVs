import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  isQuantity,
  type CartItem,
  type Product,
} from "./domain";

const initialState: { items: CartItem[] } = { items: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
        return;
      }
      existing.quantity = Math.min(10, existing.quantity + 1);
    },
    changeQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      if (!isQuantity(action.payload.quantity)) return;
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) existing.quantity = action.payload.quantity;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, changeQuantity, removeItem, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const makeStore = () =>
  configureStore({ reducer: { cart: cartReducer } });
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const selectTotal = (state: RootState) =>
  calculateTotal(state.cart.items);
export const selectCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
