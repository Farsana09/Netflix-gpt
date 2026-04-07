import { API_OPTIONS } from "../utils/constatns";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
//
//custom hook for fetch api for get movie list for browse component
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    //add the api response in redux store movieSlice
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
