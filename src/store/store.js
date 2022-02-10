import {configureStore} from "@reduxjs/toolkit";
import CartUiSlice from "./CartUIslice";
import CartSlice from "./CartSlice";

export const store = configureStore({
    reducer: {CartUiSlice, CartSlice}
});

