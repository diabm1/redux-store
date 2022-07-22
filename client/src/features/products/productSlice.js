import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  currentCategory: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload.products;
    },
    updateCategories: (state, action) => {
        state.categories = action.payload;
      },
      updateCurrentCategory: (state, action) => {
        state.currentCategory = action.payload
      },

  },
});

// Action creators are generated for each case reducer function
export const { updateProducts, updateCategories, updateCurrentCategory } = productSlice.actions;

export default productSlice.reducer;
