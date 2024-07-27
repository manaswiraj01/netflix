import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggetions from "./GptSearchSuggetions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearchPage = () => {
  return <div>
    <div className="absolute -z-10">
        <img
          src= {BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
    <GptSearchBar />
    <GptSearchSuggetions />
  </div>;
};

export default GptSearchPage;
