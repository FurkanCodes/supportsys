import { configureStore } from "@reduxjs/toolkit";
import authRed from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authRed,
  },
  devTools: true,
});
