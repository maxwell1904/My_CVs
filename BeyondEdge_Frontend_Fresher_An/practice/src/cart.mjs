import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addItem(state, { payload: product }) {
      const item = state.items.find(item => item.id === product.id);
      if (item) { if (item.quantity < 10) item.quantity += 1; }
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
    changeQuantity(state, { payload: { id, quantity } }) {
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) return;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    }
  }
});
export const { addItem, removeItem, changeQuantity } = slice.actions;
export const cartReducer = slice.reducer;
export const selectTotal = state => state.cart.items.reduce((sum,item) => sum + item.price * item.quantity,0);
