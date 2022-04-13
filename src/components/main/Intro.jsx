import React from "react";
import Img from "./../../static/developer.svg";
import developer from "./../../static/developer.png";

function Intro() {
  return (
    <div
      className="flex-grow flex flex-row bg-[#211E27] bg-contain bg-no-repeat bg-center"
      // style={{ backgroundImage: `url(${developer})` }}
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="h-fit pl-10 sm:pl-4 text-custom-green font-semibold text-4xl uppercase max-w-3xl">
          HI! I'm SHIV DUBEY, Passionate 
          <span className="hover:text-custom-gray"> full stack developer</span>,
          keen on developing
          <span className="hover:text-custom-gray"> scalable</span> and
          <div className="hover:text-custom-gray">maintainable</div> systems.
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <img className="h-full object-contain" src={developer} alt="Developer working beside a lamp" />
      </div>
    </div>
  );
}

export default Intro;
