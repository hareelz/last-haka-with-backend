import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { getFreelancers, getOneFreelancer } from "../actions/freelancerActions";
=======
import { getFreelancer, getOneFreelancer } from "../actions/freelancerActions";
import { getCategories } from "../actions/authActionsFreeLance";
>>>>>>> 525116f8d07e56ad20fca0f5cc85bcabca89bb15

const initialState = {
  loading: false,
  error: null,
<<<<<<< HEAD
  freelancerList: [],
  oneFreelancer: null,
=======
  categories: [],
  freelancerList: [],
  oneProduct: null,
>>>>>>> 525116f8d07e56ad20fca0f5cc85bcabca89bb15
  pages: 1,
};

export const freelancerSlice = createSlice({
<<<<<<< HEAD
  name: "freelancers",
  initialState,
  reducers: {},
  extraReducers: {
    [getFreelancers.fulfilled]: (state, action) => {
      state.loading = false;
      state.freelancerList = action.payload.results;
    },
    [getFreelancers.pending]: (state) => {
      state.loading = true;
    },
    [getFreelancers.rejected]: (state, action) => {
=======
  name: "freelancer",
  initialState,
  reducers: {},
  extraReducers: {
    [getFreelancer.fulfilled]: (state, action) => {
      state.loading = false;
      state.freelancerList = action.payload.results;
      state.pages = Math.ceil(action.payload.count / 1);
    },
    [getFreelancer.pending]: (state) => {
      state.loading = true;
    },
    [getFreelancer.rejected]: (state, action) => {
>>>>>>> 525116f8d07e56ad20fca0f5cc85bcabca89bb15
      state.loading = false;
      state.error = action.payload;
    },

<<<<<<< HEAD
    [getOneFreelancer.fulfilled]: (state, action) => {
      state.loading = false;
      state.oneFreelancer = action.payload;
    },
    [getOneFreelancer.pending]: (state) => {
      state.loading = true;
    },
=======
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
>>>>>>> 525116f8d07e56ad20fca0f5cc85bcabca89bb15
    [getOneFreelancer.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = freelancerSlice.actions;

export const freelancerReducer = freelancerSlice.reducer;
