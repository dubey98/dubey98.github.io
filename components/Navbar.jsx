import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleHamburgerClick = () => {
    setActive(!active);
  };

  return (
    <div className="p-4 text-center bg-custom-black text-custom-green uppercase w-full relative">
      <div onClick={handleHamburgerClick} className="absolute sm:hidden">
        <button className={"relative " + (active ? "group" : "")}>
          <div
            className={
              "relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-[#211E27] shadow-md ring-0 ring-[#BBC3A5] ring-opacity-30 transition-all duration-200  " +
              (active ? "ring-4" : "")
            }
          >
            <div
              className={
                "flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 " +
                (active ? "translate-x-1.5" : "")
              }
            >
              <div
                className={
                  "h-[2px] w-7 origin-left transform bg-[#BBC3A5] transition-all delay-150 duration-300 " +
                  (active ? "w-2/3 rotate-[42deg]" : "")
                }
              ></div>
              <div
                className={
                  "h-[2px] w-7 transform rounded bg-[#BBC3A5] transition-all duration-300 " +
                  (active ? "translate-x-10" : "")
                }
              ></div>
              <div
                className={
                  "h-[2px] w-7 origin-left transform bg-[#BBC3A5] transition-all delay-150 duration-300 " +
                  (active ? "w-2/3 -rotate-[42deg]" : "")
                }
              ></div>
            </div>
          </div>
        </button>
      </div>
      <div className="h-[50px] flex items-center justify-center">
        <div className="hidden sm:block border flex-grow max-w-[200px] border-custom-green"></div>
        <div className="px-6 font-light opacity-80 hover:opacity-100 border-box hidden sm:block ">
          <a href="#projects">Projects</a>
        </div>
        <div className="px-6 font-light opacity-80 hover:opacity-100 border-box hidden sm:block ">
          <a href="#about">Resume</a>
        </div>
        <div className="text-2xl px-6 whitespace-nowrap">
          <a href="#">SHIV DUBEY</a>
        </div>
        <div className="px-6 font-light opacity-80 hover:opacity-100 border-box hidden sm:block ">
          <a href="#about">About</a>
        </div>
        <div className="px-6 font-light opacity-80 hover:opacity-100 border-box hidden sm:block ">
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden sm:block border flex-grow max-w-[200px] border-custom-green"></div>
      </div>
      <div
        className={
          "z-10 absolute flex flex-col bg-custom-black w-full transition-all ease-in-out duration-200 text-xl left-0 mt-2 sm:hidden " +
          (active ? "opacity-100" : "h-0 opacity-0 overflow-hidden")
        }
      >
        <div className="p-4" onClick={handleHamburgerClick}>
          <a href="#projects">Projects</a>
        </div>
        <div className="p-4" onClick={handleHamburgerClick}>
          <a href="#about">Resume</a>
        </div>
        <div className="p-4" onClick={handleHamburgerClick}>
          <a href="#about">About</a>
        </div>
        <div className="p-4" onClick={handleHamburgerClick}>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
