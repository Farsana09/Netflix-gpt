import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MovieMainContainer from "./MovieMainContainer";
import MovieSecContainer from "./MovieSecContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/*
       MainContainer
         - video
         - video title
       secondaryContainer
         - movies List * n
         - movie card
      */}
      <MovieMainContainer />
      <MovieSecContainer />
    </div>
  );
};

export default Browse;
