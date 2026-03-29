import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { LOGO_URL } from "../utils/constatns";

const Header = () => {
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex">
          <img
            className="w-10 py-6"
            alt="userIcon"
            src={user?.photoURL ?? ""}
          />
          <button
            onClick={handleSignOut}
            className="px-4 font-bold text-white cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
