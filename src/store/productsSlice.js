import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items:''
    },
    reducers: {
        setInitialState(state, action) {
            state.items = action.payload;
        }
    }
});



export const {setInitialState} = productsSlice.actions;
export const productActions=productsSlice.actions;
export default productsSlice.reducer;