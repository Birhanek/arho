import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductApi, ProductState } from "../../DataInterface/productInterface";
import { getAllProduct } from "../../DataInterface/productApi";


const initialState:ProductState = {
    products:{
        products:[],
        total:0,
        skip:0,
        limit:0
    },
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
        })
        builder.addCase(getAllProduct.fulfilled, (state,action:PayloadAction<ProductApi>) => {
            state.isLoading = false
            state.isError = false
            state.products = action.payload
            state.message = 'Data successfully fetched'
        })

        builder.addCase(getAllProduct.rejected, (state, action) =>{
            state.isError = true
            state.isLoading = false
            state.message = action.error.message?.toLocaleLowerCase()
        })

        
    },
})


export default productSlice.reducer