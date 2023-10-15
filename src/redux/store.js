import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import productReducer from "../redux/features/product/productSlice";
import brandReducer from "./features/brand/brandSlice";
import CartReducer from "./features/product/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: CartReducer,
    brand: brandReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(productService),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
