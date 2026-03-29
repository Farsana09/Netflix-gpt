import MovieList from "./MovieList";
import type { RootState } from "../../../utils/appStore";
import { useSelector } from "react-redux";

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
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies,
  );

  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-55 relative z-20 pl-8">
          <MovieList title="Now Playing" movies={movies ?? []} />
          <MovieList title="Trending" movies={movies ?? []} />
          <MovieList title="Top Rated" movies={movies ?? []} />
          <MovieList title="Horror" movies={movies ?? []} />
        </div>
      </div>
    )
  );
};

export default MovieSecContainer;
