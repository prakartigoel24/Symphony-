import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ShazamApi1_Key = import.meta.env.VITE_X_RAPID_API_KEY;

export const ShazamApi1 = createApi({
  reducerPath: "ShazamApi1",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        ShazamApi1_Key
      );
      return headers;
    },
  }),
  endpoints:(build) => ({
     getGlobalSongsData: build.query({
        query: ()=> ({url: '/charts/track'}),
     })
  })
});

export const {
    useGetGlobalSongsDataQuery,
} = ShazamApi1;     