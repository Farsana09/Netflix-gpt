import { createSlice } from "@reduxjs/toolkit";
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
type TMDBResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: [] as TMDBResponse[],
    movieNames: [] as string[],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      //tis is how we add multiple action in one action
      //here this action will add the movie names and movie results
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptMovieResults: (state) => {
      state.movieNames = [];
      state.movieResults = [];
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResults,
  removeGptMovieResults,
} = gptSlice.actions;
export default gptSlice.reducer;
