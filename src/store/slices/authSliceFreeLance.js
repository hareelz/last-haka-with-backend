import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  loginFreeLance,
  logoutFreeLance,
  registerFreelance,
} from "../actions/authActionsFreeLance";

const initialState = {
  currentUserFree: localStorage.getItem("email"),
  error: null,
  categories: [],
  loading: false,
};

export const authSliceFreeLance = createSlice({
  name: "authFreelancer",
  initialState,
  reducers: {
    setCurrentUserFree: (state) => {
      state.currentUserFree = null;
    },
  },
  extraReducers: {
    [registerFreelance.pending]: (state) => {
      state.loading = true;
    },
    [registerFreelance.fulfilled]: (state) => {
      state.loading = false;
    },
    [registerFreelance.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state) => {
      state.loading = false;
    },
    [loginFreeLance.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [loginFreeLance.pending]: (state) => {
      state.loading = true;
    },
    [loginFreeLance.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [logoutFreeLance.fulfilled]: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUserFree } = authSliceFreeLance.actions;
export const authReducerFree = authSliceFreeLance.reducer;
