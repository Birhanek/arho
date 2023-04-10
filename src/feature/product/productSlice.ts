import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product, { ProductState } from "../../DataInterface/productInterface";
import { getAllProduct } from "../../DataInterface/productApi";


const initialState:ProductState = {
    product:[],
    isLoading:false,
    isError:false,
    message:''
}

const productSlice = createSlice({
    name:'Mobile store',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getAllProduct.pending,(state)=>{
            state.isLoading = true
            state.isError = false
            state.message = '',
            state.product = []
        })
        builder.addCase(getAllProduct.fulfilled, (state,action:PayloadAction<Product[]>) => {
            state.isLoading = false
            state.isError = false
            state.product = action.payload
            state.message = 'Data successfully fetched'
        })

        
    },
})


export default productSlice.reducer