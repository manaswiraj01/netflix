import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const lanKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-red-700 grid grid-cols-12 w-1/2 rounded-lg ">
        <input
          className="rounded-md col-span-10 m-2 p-2"
          type="text"
          placeholder={lang[lanKey].gptSearchPlachholder}
        />
        <button className="bg-black text-white m-2 p-2 rounded-md col-span-2">
          {lang[lanKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
