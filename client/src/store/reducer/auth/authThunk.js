import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, register} from "../../../api/auth";


export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, { rejectWithValue }) => {
      try {
        const result = await register(regObj);
  
        return result;
      } catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    }
  );


export const fetchAuthLogin = createAsyncThunk (
    "auth/fetchAuthLogin",
    async (logObj, {rejectWithValue}) => {
        try {
            const result = await login(logObj);

            return result;

        } catch (error) {
            return rejectWithValue("Something happened");
        }
    }
);