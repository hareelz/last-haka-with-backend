import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { freelancerReducer, productReducer } from "./slices/freelancerSlice";
import { authReducerFree } from "./slices/authSliceFreeLance";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authFreeLancer: authReducerFree,
    freelancer: freelancerReducer,
  },
});
