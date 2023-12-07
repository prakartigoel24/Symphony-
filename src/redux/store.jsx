import { configureStore } from "@reduxjs/toolkit";
import { ShazamApi1 } from "./APIs/ShazamApi1";
import searchReducer from "./Slices/Search";

export const store = configureStore({
  reducer: {
    [ShazamApi1.reducerPath]: ShazamApi1.reducer,
    searchTerm: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamApi1.middleware),
});
