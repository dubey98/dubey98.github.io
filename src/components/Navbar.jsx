import React, { useRef } from "react";

function Navbar() {
  const hamburger = useRef(null);

  const handleHamburgerClick = () => {
    if (hamburger && hamburger.current) {
      hamburger.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="p-2 text-center">
      <div className="flex flex-row sm:hidden">
        <div
          className="flex h-6 flex-col justify-between sm:hidden"
          onClick={handleHamburgerClick}
        >
          <div className="w-8 border-2 border-black"></div>
          <div className="w-8 border-2 border-black"></div>
          <div className="w-8 border-2 border-black"></div>
        </div>
        <div className="flex-grow sm:flex text-xl items-center justify-center pr-9">
          SHIV DUBEY
        </div>
      </div>
      <div className="hidden pr-9 sm:pr-0 sm:flex pl-6 sm:pl-0" ref={hamburger}>
        <div className="sm:flex p-2 items-center">Projects</div>
        <div className="sm:flex p-2 items-center">Resume</div>
        <div className="flex-grow p-2 text-lg hidden sm:block">SHIV DUBEY</div>
        <div className="sm:flex p-2 items-center">About</div>
        <div className="sm:flex p-2 items-center">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
