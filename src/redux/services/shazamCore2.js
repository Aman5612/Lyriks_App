import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Headers } from 'whatwg-fetch';

export const shazamCoreAPI = createApi({
  reducerPath: 'shazamCoreAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: () => {
      const headers = new Headers();
      headers.set('X-RapidAPI-Key', '3ba754518amsh12eee2feca0cc36p12b945jsnb1cb76548f4e');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?locale=en-US&offset=0&limit=5&term=${searchTerm}` }),
  }),
});

export const {
  useGetSongsBySearchQuery,
} = shazamCoreAPI;
