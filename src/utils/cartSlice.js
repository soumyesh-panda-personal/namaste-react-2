import { createSlice } from "@reduxjs/toolkit";
//Actions are kind of small API's, or as the name suggests just some operations we do over the slice. In cart slice, for eg: adding prod, removing product etc.
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
//export const { addItem, removeItem, clearCart } = createSlice.actions;
export default cartSlice.reducer;