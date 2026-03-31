import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { LOGO_URL } from "../utils/constatns";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constatns";

const Header = () => {
  const dispatch = useDispatch();
  //
  //only show in the chatgpt page
  //so access the showgptbool val from store
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );
  //
  //access the i18n object from the useTranslation hook
  const { i18n, t } = useTranslation();

  const handleGptOnclick = () => {
    //have tot store the gpt button toggle value
    //since we have a store and we have to access it from different component we can put the toggle value in the store
    dispatch(toggleGptSearchView());
  };

  //here we cant give like useSelector(store => store.user ); this
  //bcs ts gives error i.e is not defined the type of store
  //so we export type of store from appstore
  const user = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //naviagting login screen
        //and the remove user  deispatcjh action and navigation will happens on onAuthStateChanged fcn
      })
      .catch(() => {
        navigate("/error");
      });
  };
  //
  //👉 React.ChangeEvent<HTMLSelectElement> - 👉 This is TypeScript type
  //it tells This event comes from a <select> element
  const handleLangChnage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="Logo" />

      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-gray-900 my-6 text-white p-2 rounded-lg"
              onChange={handleLangChnage}
              value={i18n.language}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptOnclick}
            className="py-2 px-4 my-6 mx-6 bg-purple-500 text-white rounded-lg  cursor-pointer"
          >
            {showGptSearch ? t("homePage") : "GPT Search"}
          </button>
          <img
            className="w-10 py-6"
            alt="userIcon"
            src={user?.photoURL ?? ""}
          />
          <button
            onClick={handleSignOut}
            className="px-4 font-bold text-white cursor-pointer"
          >
            {t("signOut")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
