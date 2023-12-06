import { configureStore } from '@reduxjs/toolkit'
import {ShazamApi1} from './APIs/ShazamApi1';

export const store = configureStore({
  reducer: {
    [ShazamApi1.reducerPath] : ShazamApi1.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamApi1.middleware),
})