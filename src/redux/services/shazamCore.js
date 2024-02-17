import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Headers } from 'whatwg-fetch';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: () => {
      const headers = new Headers();
      headers.set('X-RapidAPI-Key', '3ba754518amsh12eee2feca0cc36p12b945jsnb1cb76548f4e');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in_world_by_genre?genre=POP&limit=50' }),
    getSongsByGenre: builder.query({ query: () => '/charts/get-top-songs-in_world_by_genre?genre=HIP_HOP_RAP&limit=50' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get_details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?id=${songid}` }),
    getArtistDetails: builder.query({ query: ({ artistId }) => `/artist/get-details?id=${artistId}` }),
    getSongsByCountry: builder.query({ query: () => '/charts/get-top-songs-in_country_by_genre?country_code=US&genre=POP&limit=50' }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?locale=en-US&offset=0&limit=5&term=${searchTerm}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,

} = shazamCoreApi;
