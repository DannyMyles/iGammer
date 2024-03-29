import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage';
import { authApi, gameApi } from './services';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loadState } from './localStorage';
import rootReducer, { RootState } from './rootReducer';
const persistedState = loadState()

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(authApi.middleware, gameApi.middleware),

});

export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
export default store;
