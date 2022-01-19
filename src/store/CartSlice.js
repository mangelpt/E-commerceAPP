import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                        id: newItem.id,
                        name: newItem.name,
                        imageUrl: newItem.imageUrl,
                        price: newItem.price,
                        totalPrice: newItem.price,
                        quantity: 1
                    }
                );
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const {addItemToCart, removeItemToCart} = CartSlice.actions;
export default CartSlice.reducer;
