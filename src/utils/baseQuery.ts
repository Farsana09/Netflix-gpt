import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_OPTIONS } from "./constatns";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/movie/",
  headers: API_OPTIONS.headers,
});
