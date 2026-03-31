import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MovieMainContainer from "./mainMovieContainer/MovieMainContainer";
import MovieSecContainer from "./movieSecContainer/MovieSecContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import {
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../utils/movieApi";
import GptSearch from "./gptSearch/GptSearchPage";
import { useSelector } from "react-redux";
import type { RootState } from "../../utils/appStore";

const Browse = () => {
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );
  useNowPlayingMovies();
  usePopularMovies();
  useGetTopRatedMoviesQuery();
  useGetUpcomingMoviesQuery();

  return (
    <div>
      <Header />
      {/*
       - Gpt search component will show and hide according to the toggle value in the store
       - we will have a button in the header to toggle the gpt search component
      */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MovieMainContainer />
          <MovieSecContainer />
        </>
      )}

      {/*
       MainContainer
         - video
         - video title
       secondaryContainer
         - movies List * n
         - movie card
      */}
    </div>
  );
};

export default Browse;
