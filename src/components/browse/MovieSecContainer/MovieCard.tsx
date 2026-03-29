import { MOVIE_IMAGE_BASE_URL } from "../../../utils/constatns";

type MovieCardProps = {
  posterPath: string;
};
const MovieCard = ({ posterPath }: MovieCardProps) => {
  if (!posterPath) return null;

  return (
    <div className="w-50 cursor-pointer rounded-lg overflow-hidden h-72 ">
      <img src={`${MOVIE_IMAGE_BASE_URL}${posterPath}`} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
