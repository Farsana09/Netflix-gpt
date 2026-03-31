import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { USER_AVATAR } from "../utils/constatns";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE_URL } from "../utils/constatns";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMsg] = useState<string | null>(null);
  //give ref to the input box
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };

  //submit Button click
  const onHandleButtonClick = () => {
    //It checks whether the input element exists or not,
    //if it exist we can access the value
    if (!email.current || !password.current) return;

    //validate form data
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    );
    setErrorMsg(message);
    //if there is nay mesg return
    if (message) return;

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          if (auth.currentUser) {
            //update profile all thesse signup/signIn/update profile apis code block are form firebase
            updateProfile(user, {
              displayName: name.current?.value ?? "",
              photoURL: USER_AVATAR,
            })
              .then(() => {
                //here we are again calling add user bcs when we call it body authstatechange
                //it does not update the photourl and display name
                //fetching the value from update value of user
                const user = auth.currentUser;

                if (user) {
                  const { uid, email, displayName, photoURL } = user;

                  dispatch(
                    addUser({
                      uid,
                      email,
                      displayName,
                      photoURL,
                    }),
                  );
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //set the error msg
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="h-screen">
      <Header />
      <div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={BG_IMAGE_URL}
          alt="Bg image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 w-3/12 p-10 text-white m-6   rounded-sm "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "SIgn In" : "SIgn Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-2 px-3 my-2 border border-white rounded-sm w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="py-2 px-3 my-2 border border-white rounded-sm w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 px-3 my-2 border border-white rounded-sm w-full"
        />
        <p className="text-red-600 py-2">{errorMessage}</p>
        <button
          className="py-2 my-2 bg-red-700 w-full rounded-sm cursor-pointer"
          onClick={onHandleButtonClick}
        >
          {isSignInForm ? "SIgn In" : "SIgn Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already an user? Sign IN Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
