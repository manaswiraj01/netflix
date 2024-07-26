import React from "react";

const Footer = () => {
  return (
    <div className="h-1/2 bg-black absolute w-full text-white flex justify-evenly z-10 top-full">
      <div className="py-20">
        <p className="py-4 opacity-60">Questions? Call 000-800-919-1694</p>
        <p className="py-4 opacity-60">FAQ</p>
        <p className="py-4 underline cursor-pointer opacity-60">Cookie Preferences</p>
      </div>
      <div className="py-20">
        <p className="py-4 underline cursor-pointer opacity-60">Help Centre</p>
        <p className="py-4 underline cursor-pointer opacity-60">Corporate Information</p>
      </div>
      <div className="py-20">
        <p className="py-4 underline cursor-pointer opacity-60">Terms of Use</p>
      </div>
      <div className="py-20">
        <p className="py-4 underline cursor-pointer opacity-60">Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
