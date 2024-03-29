import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthUser } from "../../@types";
import { RootState } from "../../app/rootReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    error: "",
  } as AuthState,

  reducers: {
    setCredentials: (
      state,
      {
        payload: { data },
      }: PayloadAction<{ data: AuthUser; }>
    ) => {
      state.user = data;
      state.accessToken = data.accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
