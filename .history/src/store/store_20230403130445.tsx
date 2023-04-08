import { configureStore } from '@reduxjs/toolkit';
import { gameapi } from '../services/gameApi';

const store = configureStore({
  reducer: {
    [gameapi.reducerPath]: gameapi.reducer,
    // Add your other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameapi.middleware),
});

export default store;
