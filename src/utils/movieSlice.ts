import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

//
//this redux slice is used to add the mvie fetching api response
//we handle the nowPlayingMovies section all fncs here
// now  store the api response in nowPlayingMovies variable

type VideoTease = {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  type: string;
};

// ✅ Define state type properly
type MoviesState = {
  nowPlayingMovies: null; // you said ignore this for now
  popularMovies: null;
  trailorVideo: VideoTease | null;
};

// ✅ Apply the type here
const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  trailorVideo: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMoviies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTrailorVideo: (state, action: PayloadAction<VideoTease>) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMoviies, addTrailorVideo, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
