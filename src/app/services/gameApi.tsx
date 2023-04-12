import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../rootReducer";
import { selectCurrentToken } from "../../features/auth/authSlice";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // retrieve token from redux store
      const token = selectCurrentToken(getState() as RootState);
      console.log("Token from redux store", token);
      // if it exists, add it to the request headers
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // API endpoints definition
    getAllImagesByUser: builder.query({
      query: (id) => `image/user/${id}`,
    }),
    uploadImage: builder.mutation({
      query: ({ id, image }) => ({
        url: `image/submit/${id}`,
        method: "POST",
        body: image,
      }),
    }),
  }),
});


export const { useUploadImageMutation, useGetAllImagesByUserQuery } = gameApi;
export default gameApi.reducer;