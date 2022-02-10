import {configureStore} from "@reduxjs/toolkit";
import CartUiSlice from "./CartUIslice";
import CartSlice from "./CartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
    reducer: {CartUiSlice, CartSlice ,productsSlice}
});

