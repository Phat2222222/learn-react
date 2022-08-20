import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isLogin: false,
};

export const slice = createSlice({
  name: "login",
  initialState,

  reducers: {
    handleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
});

export const { handleOpen, setIsLogin } = slice.actions;

export const isOpen = (state) => state.login.isOpen;
export const isLogin = (state) => state.login.isLogin;

export default slice.reducer;
