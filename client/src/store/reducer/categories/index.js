import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    status: "nothing",
}

export const categoriesReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
/* export const { increment, decrement, incrementByAmount } = counterSlice.actions */

export default categoriesReducer.reducer;