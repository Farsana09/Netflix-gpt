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
  trailorVideo: VideoTease | null;
};

// ✅ Apply the type here
const initialState: MoviesState = {
  nowPlayingMovies: null,
  trailorVideo: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMoviies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailorVideo: (state, action: PayloadAction<VideoTease>) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMoviies, addTrailorVideo } = movieSlice.actions;
export default movieSlice.reducer;
