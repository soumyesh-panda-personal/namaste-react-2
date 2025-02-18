// This is the first redux store we created

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer: { // This is the main reducer of the store we can say. Real world eg be like,getting 40-50Kg rice barrel from warehouse and store it in the store. To be used at home.
        cart: cartReducer,
    },
});

export default appStore;