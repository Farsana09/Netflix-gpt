import { useSelector } from "react-redux";
import type { RootState } from "../../../utils/appStore";
import MovieList from "../movieSecContainer/MovieList";
const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt,
  );
  if (!movieNames?.length || !movieResults?.length) return null;
  return (
    <div className="p-4 m-4 bg-black/90 text-white shrink-0">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]?.results || []}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
