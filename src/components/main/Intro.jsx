import React from "react";
import Img from "./../../static/developer.svg";

function Intro() {
  return (
    <div className="flex-grow flex flex-row">
      <div className="flex-1 flex flex-col justify-center">
        <div className="h-fit pl-10 sm:pl-4">
          <span className="font-light text-3xl">HI, I'm Shiv Dubey</span>
          <br />
          <span className="font-extralight text-xl">
            A passionate Full Stack Developer
          </span>
        </div>
      </div>
      <div className="flex-1 hidden sm:block">
        <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
        </div>
      </div>
    </div>
  );
}

export default Intro;
