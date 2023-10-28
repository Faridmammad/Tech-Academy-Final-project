import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './productThunk';


const initialState = {
    products: [],
    status: "nothing",
    error: ""
}

export const productsReducer = createSlice({
  name: 'product',
  initialState,
  extraReducers: {

    [fetchProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
/* export const { increment, decrement, incrementByAmount } = counterSlice.actions */

export default productsReducer.reducer;