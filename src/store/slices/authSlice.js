import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../actions/authActions";

const initialState = {
  currentUser: localStorage.getItem("email"),
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [logout.fulfilled]: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
