import { useSelector } from "react-redux";
import type { RootState } from "../../utils/appStore";
import useMovieTrailer from "../../hooks/useMovieTrailer";

type videoProps = {
  movieId: string;
};

const VideoBg = ({ movieId }: videoProps) => {
  //
  //call the customised api call hook
  useMovieTrailer(movieId);
  //
  //access the trailor data from redux store
  const trailorVideo = useSelector(
    (store: RootState) => store.movies.trailorVideo,
  );
  //
  // inside div is embedd code and its get from youtube video share icon
  //the id copy and in the any youtube video url paste end paste the copied id
  //it will give the our video
  //
  //Param	Purpose
  // autoplay=1	auto start
  // mute=1	required for autoplay
  // loop=1	loop video
  // playlist=VIDEO_ID	needed for loop
  // controls=0	hide controls
  // showinfo=0	cleaner UI
  return (
    <div className="screen-full">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailorVideo?.key}&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
