import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { productReducer } from "./slices/productSlice";
import { freelancerReducer } from "./slices/freelancerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    freelancers: freelancerReducer,
  },
});
