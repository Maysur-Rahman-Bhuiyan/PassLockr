import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-800 flex flex-col justify-center items-center text-white mt-20">
      <div>
      <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span><span className="text-green-500">Op/</span>
          <span className="text-green-500">&gt;</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span>Created with </span>
        <img className="mx-2" width={30} src="icons/heart.png" alt="Love" />
        <span>by Maysur Rahman</span>
      </div>
    </footer>
  );
};

export default Footer;
