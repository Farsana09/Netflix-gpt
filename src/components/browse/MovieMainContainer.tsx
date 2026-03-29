import { useSelector } from "react-redux";
import type { RootState } from "../../utils/appStore";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MovieMainContainer = () => {
  //access the movies api resoponse from store
  //and here we need one mainmovie to show the main conatiner
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies,
  );
  //this is known as early return
  //if the movie is not present then return
  if (!movies) return;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overView={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MovieMainContainer;
