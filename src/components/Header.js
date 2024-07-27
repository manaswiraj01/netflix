import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const toggleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChangeLanguages = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-10 bg-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="p-2 m-4 rounded-md bg-red-600 text-white"
              onChange={handleChangeLanguages}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 m-4 px-4 text-white rounded-md text-lg"
            onClick={toggleGptSearchClick}
          >
            Gpt Search
          </button>
          <img
            className="w-12 h-12 mt-4 rounded-md"
            src={user?.photoURL}
            alt="usericon"
          />
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
