import { API_OPTIONS } from "../utils/constatns";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviies } from "../utils/movieSlice";
//
//custom hook for fetch api for get movie list for browse component
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    //add the api response in redux store movieSlice
    dispatch(addNowPlayingMoviies(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
