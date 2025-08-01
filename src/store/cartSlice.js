// cartSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

// Using "cart" as the key for consistency
let datafromWeb = JSON.parse(localStorage.getItem("cart"));

// If localStorage is empty, initialize with an empty array
const initialState = datafromWeb ? datafromWeb : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState, // Use the sanitized initial state
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      // Using "cart" as the key
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem(state, action) {
      let newProducts = state.filter((cartProduct) => cartProduct.id !== action.payload);
      // Using "cart" as the key
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    },
  },
});

export default cartSlice.reducer;
export let { addItem, removeItem } = cartSlice.actions;