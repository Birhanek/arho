import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wishListState } from "../../DataInterface/wishListInterface";
import Product from "../../DataInterface/productInterface";

const data:Product[] = localStorage.getItem('wishList') !=='null'? JSON.parse(String(localStorage.getItem('wishList'))) :[]

const initialState:wishListState = {
    wishListProduct:data
}

const wishListSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            let count = 0
            state.wishListProduct.forEach((product)=>{
                if(product.id === action.payload.id){
                    count++
                }
            })

            if(count === 0){
                state.wishListProduct.push(action.payload)
            }
            localStorage.setItem('wishList',JSON.stringify(state.wishListProduct))
            
        },

        removeFromCart:(state,action:PayloadAction<Product>)=>{
           state.wishListProduct = state.wishListProduct.filter((product)=>product.id !==action.payload.id)
           localStorage.setItem('wishList',JSON.stringify(state.wishListProduct))
        },
        deleteAllFromCart:(state)=>{
            state.wishListProduct = []
            localStorage.setItem('wishList',JSON.stringify(state.wishListProduct))
        }
    }
})

export const {deleteAllFromCart,removeFromCart,addToCart} = wishListSlice.actions

export default wishListSlice.reducer