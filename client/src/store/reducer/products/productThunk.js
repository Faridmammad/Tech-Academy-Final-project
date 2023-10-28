import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProducts} from "../../../api/products";


export const fetchProducts = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (_, { rejectWithValue }) => {
      try {
        const result = await getProducts();
  
        return result;
      } catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    }
  );