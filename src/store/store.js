// to create store from redux toolkit, need to import configure store method
import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducers from "./cartSlice"  //default export, so name alias can be done directly, if it is named export the should use "as" for aliasing

export const store = configureStore({
    reducer: {              // here a reducer is called that is received from cartSlice.js, so need to export the reducer from cartSlice.js
        cart : cartSliceReducers
    }
    
}) 

console.log(cartSliceReducers);
