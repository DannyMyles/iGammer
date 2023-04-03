import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';

const store = configureStore({
  reducer: {
    [gameapi.reducerPath]: api.reducer,
    // Add your other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
