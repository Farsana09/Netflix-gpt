import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

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
        //and the remove user deispatcjh action will happens on onAuthStateChanged fcn
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
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
