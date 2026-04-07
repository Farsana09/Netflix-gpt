import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { API_OPTIONS } from "../../../utils/constatns";
import { addGptMovieResults } from "../../../utils/gptSlice";
import { useDispatch } from "react-redux";
// import client from "../../../utils/openAi";
const GptSearchbar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //
  // using useTranslation hook to get the t function for translation
  const { t } = useTranslation();
  const searchText = useRef<HTMLInputElement>(null);
  //
  // make this api call RTK query
  const searchMoviedetails = async (movieName: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,

      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);
    return json;
  };

  const handleGptSearchClick = async () => {
    const inputValue = searchText.current?.value;
    if (!inputValue) return;
    setLoading(true);
    //not needed now bcs the api call is not wokring
    // const gptQuery = `Act as a movie recommendation system and suggest some movies for query: ${inputValue}. Only give 5 movie names, comma separated.`;

    try {
      //
      //this api call will not work bcs the free trial is expired and have to enable billing
      // const response = await client.chat.completions.create({
      //   model: "gpt-4o-mini",
      //   messages: [{ role: "user", content: gptQuery }],
      // });
      //
      //so return the fake api response
      const fakeResponse = {
        choices: [
          {
            message: {
              content: "Inception, Interstellar, Avatar, Titanic, Gladiator",
            },
          },
        ],
      };

      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      //to make the string to array
      const gptMovies = fakeResponse.choices[0].message.content.split(",");
      //this will return a list of promises not give results immediately
      //the promise will take some time to resolve and then we will get the result
      const promiseArray = gptMovies.map((movie) => searchMoviedetails(movie));
      //
      //for each movies i will search tmdb api and get the details and show it in ui
      //
      //no use promise.all fcn
      const tmdbResults = await Promise.all(promiseArray);
      //in dispatch we are passing an object for the action bcs we have 2 fcns in the same action
      dispatch(
        addGptMovieResults({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error("API ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" pt-[50%] md:pt-[10%]  flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
        className=" bg-black rounded-xl w-full md:w-1/2 grid grid-cols-12"
        action=""
      >
        <input
          ref={searchText}
          className="p-4 m-4 bg-white rounded-lg col-span-9 "
          type="text"
          placeholder={t("whatToWatch")}
        />
        <button
          type="submit"
          disabled={loading}
          className={`py-2 px-4 m-4 text-white rounded-lg col-span-3 flex items-center justify-center cursor-pointer
    ${loading ? "bg-gray-500" : "bg-red-700"}`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            t("search")
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
