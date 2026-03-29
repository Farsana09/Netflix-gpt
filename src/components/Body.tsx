import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //we want to setup this event listner for once thats why we use useEffect
  useEffect(() => {
    //this fcn can listen all the auth changes eg- user signin, sign up, signOut
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is Signed In/ Sign up
        const { uid, email, displayName, photoURL } = user;
        //adding the user object to the store
        //as much data we want we can put it to the store
        //from here the photourl and display name is not get updated so we again call the dispatch action in login
        //update user section its not gets updated bcs the value gets update user not get in sign in thats why photo url and display name not get update form here
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe is a fcn firebase gives u to stop to the continous listening when component get unattached
    //onAuthSTateChange works like a event listener
    //it suscribe again when the user effect runs again
    return () => unsubscribe();
  }, [dispatch, navigate]);
  return <Outlet />;
};

export default Body;
