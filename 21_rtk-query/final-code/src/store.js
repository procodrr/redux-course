import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
});
