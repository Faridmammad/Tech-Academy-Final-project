import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthRegister, fetchAuthLogin } from "./authThunk";

const initialState = {
  token: "",
  userDatas: {},
  error: "",
  status: "nothing",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchAuthRegister.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAuthRegister.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.userDatas = payload.user;
    },
    [fetchAuthRegister.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },

    [fetchAuthLogin.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAuthLogin.fulfilled]: (state, { payload }) => {
      console.log(payload, "reduxxxxxx");
      state.status = "success";
    },
    [fetchAuthLogin.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default authReducer.reducer;
