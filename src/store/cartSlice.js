import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.items.find((item) => item.id === action.payload.id);
      if (index !== -1) state.items.splice(index, 1);
    },
    clearCart: (state) => {
      return { ...state, items: [] };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
