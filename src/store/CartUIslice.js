import {createSlice} from "@reduxjs/toolkit";

const CartUiSlice = createSlice({
    name: "cartSlice",
    initialState: {cartIsVisible: true},
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});


export const {toggleCart} = CartUiSlice.actions;
export default CartUiSlice.reducer;