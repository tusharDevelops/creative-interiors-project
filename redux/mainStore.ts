import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combinedReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
