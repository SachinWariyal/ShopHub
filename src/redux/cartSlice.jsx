import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cartItems.push(item);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    calculateTotal: (state) => {
      state.totalPrice = state.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
