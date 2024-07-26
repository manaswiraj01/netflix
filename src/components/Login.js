import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          name.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div>
      <Header />
      <div className="absolute brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black text-white mx-auto p-12 my-36 right-0 left-0 rounded-sm bg-opacity-80"
      >
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-700">{errorMessage}</p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-gray-50 p-2 my-2 w-full rounded-md bg-opacity-10 h-14"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="bg-gray-50 p-2 my-2 w-full rounded-md bg-opacity-10 h-14"
        />

        <input
          ref={password}
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="p-2 my-2 w-full rounded-md bg-gray-50 bg-opacity-10 h-14"
        />

        <button
          onClick={handleButtonClick}
          className="bg-red-700 p-2 font-bold my-2 w-full rounded-md h-14"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-2  underline" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?  Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
