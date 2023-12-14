import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { productReducer } from "./slices/productSlice";
import {
  authReducerFree,
  freelancerReducer,
} from "./slices/authSliceFreeLance";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authFreeLancer: authReducerFree,
    freelancers: freelancerReducer,
    freelancer: freelancerReducer,

    product: productReducer,
  },
});
