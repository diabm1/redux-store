import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map((product) => {
        if (action.payload._id === product._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload.products];
    },
    toggleCart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCartQuantity, addToCart, addMultipleToCart, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
