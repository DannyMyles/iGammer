import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

const BASE_URL = 'https://api.example.com/';

export const gameapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Define your API endpoints here
  }),
});

export const {} = gameapi;