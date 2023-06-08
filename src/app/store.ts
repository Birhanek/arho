import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice";
import wishListReducer from "../feature/wishList/wishListSlice";


const store = configureStore({
    reducer:{
        productR:productReducer,
        cartR:wishListReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store