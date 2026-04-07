import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constatns";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/movieSlice";
//
//
//type of the api response
//type script throw error according to the type of video/items inside results array when we try to filter this array
//thats why giving the type of response
type VideoTease = {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  type: string;
};

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    const results = json.results as VideoTease[];

    //
    //find the item that type is trailer
    const trailer =
      results.find((video) => video.type === "Trailer") || results[0];
    //added the trailer in redux store in movie slice
    //so we can access it anywhere
    if (trailer) {
      dispatch(addTrailorVideo(trailer));
    }
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
