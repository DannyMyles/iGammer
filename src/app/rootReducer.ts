import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi, gameApi } from "./services";
import gameReducer from './services/gameApi'

const rootReducer = combineReducers({
  auth: authReducer,
  games: gameReducer,
  [authApi.reducerPath]: authApi.reducer,
  [gameApi.reducerPath]: gameApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
