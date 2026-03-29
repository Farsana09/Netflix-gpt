import React from "react";

type videoTitleProps = {
  title: string;
  overView: string;
};
const VideoTitle = ({ title, overView }: videoTitleProps) => {
  return (
    //giving the w-full screen and aspect video actually making the same height as video thats why the same css giving here

    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overView}</p>
      <div className="">
        <button className="bg-white text-black px-12 py-4 text-xl rounded-lg hover:bg-white/90 cursor-pointer ">
          ▶️ Play
        </button>
        <button className="bg-gray-500/50 text-white mx-2 px-12 py-4 text-xl rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
