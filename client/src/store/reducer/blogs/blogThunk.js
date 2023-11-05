import {createAsyncThunk} from "@reduxjs/toolkit";
import {getBlogs} from "../../../api/blogs";


export const fetchBlogs = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (_, { rejectWithValue }) => {
      try {
        const result = await getBlogs();
  
        return result;
      } catch (error) {
        return rejectWithValue("Something happened");
      }
    }
  );