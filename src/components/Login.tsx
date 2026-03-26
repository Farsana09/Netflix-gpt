import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen">
      <Header />
      <div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d825497c-4678-4f25-90da-6637ec2cf892/web/IN-en-20260316-TRIFECTA-perspective_b65994ee-c5aa-4a5e-99ff-d137eebb94ef_small.jpg"
          alt="Bg image"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 w-3/12 p-10 text-white m-6   rounded-sm ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "SIgn In" : "SIgn Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 px-3 my-2 border border-white rounded-sm w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="py-2 px-3 my-2 border border-white rounded-sm w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-3 my-2 border border-white rounded-sm w-full"
        />
        <button className="py-2 my-2 bg-red-700 w-full rounded-sm cursor-pointer">
          {isSignInForm ? "SIgn In" : "SIgn Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already an user? Sign IN now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
