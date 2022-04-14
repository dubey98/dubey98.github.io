import React from "react";

function About() {
  return (
    <div className="bg-custom-black h-screen pl-6 p-2">
      <div className="flex items-center h-full sm:w-3/4 md:ml-auto">
        <div className="border border-l-custom-green h-5/6"></div>
        <div className="text-custom-green px-2 m-2 flex flex-col h-5/6">
          <div className="max-w-3xl flex-grow">
            <div className="text-5xl uppercase font-semibold">About Me</div>
            <div className="italic font-serif space-y-2 pt-6">
              <p className="">
                I am a full stack developer and problem solver. i have a passion
                for building things that work and scale. i have worked in close
                relation with clients, understanding their expectations and
                making it a reality.
              </p>
              <div className="italic text-sm border-2 text-center py-3">
                First, solve the problem. Then, write the code.
              </div>
              <p className="">
                i love working on problems and trying to achieve the best
                solution possible. i believe softwares are written with pencils
                and a lot of work is cut out for erasers.
              </p>
            </div>
            <TechTools />
          </div>
          <div className="w-fit py-6" id="resume">
            <button className="border-2 px-4 py-2 rounded-md uppercase">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechTools() {
  return (
    <div className="p-2 pl-0">
      <span className="font-semibold">Technologies i have worked with:</span>
      <br />
      <div className="text-sm">
        <span className="">
          <i className="fab fa-react pr-1">
            <span className="hidden">React</span>
          </i>
          <i className="fab fa-node-js pl-1 pr-1"></i>
          <i className="fab fa-js pl-1 pr-1"></i>
          <i class="fab fa-css3 pl-1 pr-1"></i>
          Mongo Db, Sql Server, .NET, Tailwind, Bulma
        </span>
      </div>
    </div>
  );
}

export default About;
