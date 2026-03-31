import MovieCard from "../movieSecContainer/MovieCard";
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
type MovieListProps = {
  title: string;
  movies: Movie[];
};

const MovieList = ({ title, movies }: MovieListProps) => {
  if (!movies || movies.length === 0) return null;

  return (
    // in this the 'no-scrollbar" is not a tailwind cls its a custom ui
    <div className="px-6 ">
      <h1 className="text-2xl text-bold py-4 text-white">{title}</h1>

      <div className=" flex overflow-x-scroll no-scrollbar px-0.5 ">
        <div className="flex gap-6 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
