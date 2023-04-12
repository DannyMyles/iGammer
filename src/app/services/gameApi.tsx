import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // API endpoints definition
    upload: builder.mutation({
      query:({id, ...rest}) => ({
        url:`/image/submit/${id}`,
        method:"POST",
        body: {...rest}
      })
    })
  }),
});

// eslint-disable-next-line
export const {} = gameApi;
