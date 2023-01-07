import { configureStore } from "@reduxjs/toolkit";
import authRed from "../features/auth/authSlice";
import ticketRed from "../features/tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authRed,
    tickets: ticketRed,
  },
  devTools: true,
});
