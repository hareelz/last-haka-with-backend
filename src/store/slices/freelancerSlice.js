import { createSlice } from "@reduxjs/toolkit";
import { getFreelancers, getOneFreelancer } from "../actions/freelancerActions";

const initialState = {
  loading: false,
  error: null,
  freelancerList: [],
  oneFreelancer: null,
  pages: 1,
};

export const freelancerSlice = createSlice({
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
      state.loading = false;
      state.error = action.payload;
    },

    [getOneFreelancer.fulfilled]: (state, action) => {
      state.loading = false;
      state.oneFreelancer = action.payload;
    },
    [getOneFreelancer.pending]: (state) => {
      state.loading = true;
    },
    [getOneFreelancer.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = freelancerSlice.actions;

export const freelancerReducer = freelancerSlice.reducer;
