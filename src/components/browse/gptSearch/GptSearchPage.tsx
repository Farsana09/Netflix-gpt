import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";
import { BG_IMAGE_URL } from "../../../utils/constatns";

const GptSearch = () => {
  return (
    <>
      <img
        className=" top-0 left-0 w-full h-full object-cover -z-10 fixed"
        src={BG_IMAGE_URL}
        alt="Bg image"
      />

      <div className="">
        <GptSearchbar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
