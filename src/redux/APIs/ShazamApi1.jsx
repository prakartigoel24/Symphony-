import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ShazamApi1_Key = import.meta.env.VITE_X_RAPID_API_KEY;

export const ShazamApi1 = createApi({
  reducerPath: "ShazamApi1",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", ShazamApi1_Key);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopSongs: build.query({
      query: () => ({ url: "/charts/track" }),
    }),
    getTopSongsByGenre: build.query({
      query: (listId) => ({ url: `/charts/track?listId=${listId}` }),
    }),
    getTopSongsByCountry: build.query({
      query: (countryCode) => ({
        url: `/charts/track?listId=ip-country-chart-${countryCode}`,
      }),
    }),
  }),
});

export const {
  useGetTopSongsQuery,
  useGetTopSongsByGenreQuery,
  useGetTopSongsByCountryQuery,
} = ShazamApi1;
