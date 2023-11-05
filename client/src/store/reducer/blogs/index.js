import { createSlice } from '@reduxjs/toolkit'
import { fetchBlogs } from './blogThunk';


const initialState = {
    blogs: [],
    status: "nothing",
    error: ""
}

export const blogsReducer = createSlice({
  name: 'blog',
  initialState,
  extraReducers: {

    [fetchBlogs.pending]: (state) => {
      state.status = "pending";
    },
    [fetchBlogs.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.blogs = payload;
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
})

export default blogsReducer.reducer;