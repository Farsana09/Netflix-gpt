import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type ApiResponse = {
  results: Movie[];
};

//this is the latest way to call apis using RTK query
//no use of useEffect or customized hooks to call the api
//it automatically fetch the data and store it in the redux store and also gives us the loading and error state
//builder.query is used to define the query and it takes two type parameters one is the type of the response and other is the type of the argument that we pass to the query - used for get request
//builder.mutation is used to define the mutation and it takes two type parameters one is the type of the response and other is the type of the argument that we pass to the mutation - used for post/put/delete request
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery,
  //✅ endpoints must return object:
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query<Movie[], void>({
      query: () => "top_rated?page=1",
      transformResponse: (response: ApiResponse) => response.results,
    }),
    getUpcomingMovies: builder.query<Movie[], void>({
      query: () => "upcoming?page=1",
      transformResponse: (response: ApiResponse) => response.results,
    }),
  }),
});
export const { useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } =
  movieApi;
