import React, { useRef, useState } from "react";
import { loginImage } from "../utils/constant";
import { validate } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase"; 
import Header from "./Header";

const LoginAuth = () => {
  const [isSignin, SetisSignin] = useState(true);
  const [errMessage, SeterrMessage] = useState(null);
  const [succMessage, SetsuccMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignin = () => {
    SetisSignin(!isSignin);
  };

  const handleSubmit = () => {
    const Message = validate(email.current.value, password.current.value);
    SeterrMessage(Message);

    if (Message) return; 

    const auth = getAuth(app); // Used to the initialized firebase app

    if (!isSignin) {
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // const user=userCredential.user
          SetsuccMessage("Woho ! Account sucessfully created.");
        })
        .catch((error) => {
          SeterrMessage("Account Already Exist");
        });
    }
    else {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          SeterrMessage("Wrong Username or Password");
        });
    }
  };

  return (
    <>
      <Header />
      <div className="transition-all ">
        <div className="fixed ">
          <img
            src={loginImage}
            alt="img"
            className="h-screen object-cover md:h-full w-screen"
          ></img>
        </div>

        <div className="absolute z-10 text-white text-center w-full md:top-24 top-36 text-4xl font-extrabold">
          Unlimited movies, TV shows Recommendations
        </div>

        <div className="absolute z-10 text-white  text-center w-full top-[270px] md:top-[135px] text-xl font-extrabold animate-pulse ">Powered By
          <b className="text-red-500 text-3xl bg-black bg-opacity-70 rounded-xl px-2">GeminiAI</b>
        </div>

        <form onSubmit={(e) => e.preventDefault()}  className="absolute top-[50%] md:top-[53%] left-1/2 -translate-x-1/2 -translate-y-32 bg-black w-96 flex flex-col text-white rounded-xl bg-opacity-75 ">
          <p className="p-3 text-white font-bold text-3xl text-center">
            {isSignin ? "Sign In" : "Sign up"}
          </p>

          {!isSignin && (
            <input
              type="text"
              placeholder="Enter Name"
              className="m-4 mt-3 px-2 py-3 bg-black border border-2 border-gray-500 rounded-md"
            ></input>)}

          <input
            type="email"
            placeholder="Enter E-mail"
            ref={email}
            className="m-4 mt-3 px-2 py-3 bg-black border border-2 border-gray-500 rounded-md"
          ></input>

          <input
            type="password"
            placeholder={isSignin ? "Enter Password" : "Create Password"}
            ref={password}
            className="m-4 px-2 py-3 bg-black border border-2 border-gray-500 rounded-md"
          ></input>

          {errMessage && <p className="text-red-500 text-center animate-pulse">{errMessage}</p>}

          {succMessage && <p className="text-green-500 text-center font-bold animate-pulse">{succMessage}</p>}

          <button
            onClick={handleSubmit}
            className="m-4 px-2 py-3 bg-red-600 hover:bg-red-700 rounded-md"
          >{isSignin ? "Sign In" : "Register"}
          </button>

          <p className="text-gray-400 m-4 px-2 text-center -mt-1">
            {isSignin ? "New to CineGPT?  " : "Already Registered?  "}
            <b className="hover:text-red-500 transition-all cursor-pointer text-white"
              onClick={handleSignin}
            > {isSignin ? "Sign-up now" : "Sign-In now"}
            </b>
          </p>

          <p className="text-gray-400 m-4 px-2 -mt-1 text-center">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot
          </p>
        </form>

      </div>
    </>
  );
};

export default LoginAuth;
