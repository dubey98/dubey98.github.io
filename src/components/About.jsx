import React from "react";

function About() {
  return (
    <div className="bg-red-300 flex flex-col justify-center h-screen ">
      <div className="text-red-800">
        <div className="mx-auto w-4/5 max-w-4xl p-2">
          <div className="text-4xl uppercase text-center">About Me</div>
          <div className="italic font-serif mt-2">
            <p className="text-red-600">
              I am a full stack developer and problem solver. i have a passion
              for building things that work and scale. i have worked in close
              relation with clients, understanding their expectations and making
              it a reality.
            </p>
            <div className="my-2 italic text-sm border-red-400 border-2 border-l-2 text-center py-3">
              First, solve the problem. Then, write the code.
            </div>
            <p className="text-red-600">
              i love working on problems and trying to achieve the best solution
              possible. i believe softwares are written with pencils and a lot
              of work is cut out for erasers.
            </p>
          </div>
          <TechTools />
        </div>
        <div className="mx-auto w-fit pt-6" id="resume">
          <button className="border-2 border-red-100 px-4 py-2 rounded-md shadow-sm uppercase">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

function TechTools() {
  return (
    <div className="p-2 pl-0">
      <span className="font-semibold text-red-700">Technologies i have worked with:</span>
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
