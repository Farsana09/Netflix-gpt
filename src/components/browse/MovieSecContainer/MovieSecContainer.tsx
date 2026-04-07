import MovieList from "./MovieList";
import type { RootState } from "../../../utils/appStore";
import { useSelector } from "react-redux";
import {
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../../utils/movieApi";

{
  /* 
  MovieList -Popupar
  MovieList -Now playing
  MovieList -Top rated
  MovieList -Horror
  Each list as an horizontal scrollable list
  and each item have a movie card
  */
}
const MovieSecContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery();

  return (
    movies && (
      <div className=" bg-black">
        <div className="mt-0 sm:-mt-50 relative z-20 pl-2 sm:pl-8">
          <MovieList
            title="Now Playing"
            movies={movies?.nowPlayingMovies ?? []}
          />

          <MovieList title="Top Rated" movies={topRatedMovies ?? []} />
          <MovieList title="Upcoming" movies={upcomingMovies ?? []} />
          <MovieList title="Popular" movies={movies?.popularMovies ?? []} />
        </div>
      </div>
    )
  );
};

export default MovieSecContainer;
