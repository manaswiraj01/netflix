import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-10 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user && (
        <div className="flex">
          <img className="w-12 h-12 my-4" src={user?.photoURL} alt="usericon" />
          <button
            onClick={handleButtonClick}
            className="py-2 px-4 m-4 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
