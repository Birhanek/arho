import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wishListState } from "../../DataInterface/wishListInterface";
import IProduct from "../../DataInterface/productInterface";

const data: IProduct[] =
  localStorage.getItem("wishList") !== null
    ? JSON.parse(String(localStorage.getItem("wishList")))
    : [];

const initialState: wishListState = {
  wishListProduct: data,
};

const wishListSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      let count = 0;
      if (state.wishListProduct.length === 0) {
        state.wishListProduct.push(action.payload);
      } else {
        state.wishListProduct.forEach((product) => {
          if (product.id === action.payload.id) {
            count++;
          }
        });

        if (count === 0) {
          state.wishListProduct.push(action.payload);
        }
      }

      localStorage.setItem("wishList", JSON.stringify(state.wishListProduct));
    },

    removeFromCart: (state, action: PayloadAction<String>) => {
      state.wishListProduct = state.wishListProduct.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("wishList", JSON.stringify(state.wishListProduct));
    },
    deleteAllFromCart: (state) => {
      state.wishListProduct = [];
      localStorage.setItem("wishList", JSON.stringify(state.wishListProduct));
    },
  },
});

export const { deleteAllFromCart, removeFromCart, addToCart } =
  wishListSlice.actions;

export default wishListSlice.reducer;
