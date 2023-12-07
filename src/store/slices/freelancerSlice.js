import { createSlice } from "@reduxjs/toolkit";
import { getFreelancer, getOneFreelancer } from "../actions/freelancerActions";
import { getCategories } from "../actions/authActionsFreeLance";

const initialState = {
  loading: false,
  error: null,
  categories: [],
  productList: [],
  oneProduct: null,
  pages: 1,
};

export const freelancerSlice = createSlice({
  name: "freelancer",
  initialState,
  reducers: {},
  extraReducers: {
    [getFreelancer.fulfilled]: (state, action) => {
      state.loading = false;
      state.productList = action.payload.results;
      state.pages = Math.ceil(action.payload.count / 6);
    },
    [getFreelancer.pending]: (state) => {
      state.loading = true;
    },
    [getFreelancer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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

    [getOneFreelancer.pending]: (state) => {
      state.loading = true;
    },
    [getOneFreelancer.fulfilled]: (state, action) => {
      state.loading = false;
      state.oneProduct = action.payload;
    },
    [getOneFreelancer.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = freelancerSlice.actions;

export const freelancerReducer = freelancerSlice.reducer;
