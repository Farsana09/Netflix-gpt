import { MOVIE_IMAGE_BASE_URL } from "../../../utils/constatns";

type MovieCardProps = {
  posterPath: string;
};
const MovieCard = ({ posterPath }: MovieCardProps) => {
  if (!posterPath) return null;

  return (
    <div className="w-30 sm:w-40 cursor-pointer rounded-lg overflow-hidden  h-50 sm:h-72 ">
      <img src={`${MOVIE_IMAGE_BASE_URL}${posterPath}`} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
