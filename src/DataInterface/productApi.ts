import {createAsyncThunk} from '@reduxjs/toolkit'
import { ProductApi } from './productInterface'
import axios from 'axios'

const Product_API = 'https://dummyjson.com'

export const getAllProduct =  createAsyncThunk('Mobile store/getAllProduct', async(_,thunkApi)=>{

    const response = await axios(`${Product_API}/products`)

    const data:ProductApi= await response.data

    return data
})