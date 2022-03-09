import React from "react";
import KarmaHomePage from "./../static/karma-1.png";

function AdditionalProjects() {
  return (
    <div className="min-h-screen">
      <div className="p-8 sm:flex sm:flex-col max-w-5xl min-w-4xl mx-auto">
        <div className="mb-8 sm:mb-0 sm:flex project">
          <ProjectImage />
          <div className="h-40 sm:w-1/2 sm:h-64 bg-red-400">
            <ProjectDetail />
          </div>
        </div>
        <div className="mb-8 sm:mb-0 sm:flex project">
          <div className="h-64 sm:w-1/2 bg-red-200"></div>
          <div className="h-40 bg-red-400 sm:w-1/2 sm:h-64"></div>
        </div>
      </div>
    </div>
  );
}

function ProjectImage() {
  return (
    <div
      className="h-64 sm:w-1/2 bg-cover bg-center"
      style={{ backgroundImage: `url(${KarmaHomePage})` }}
    ></div>
  );
}

function ProjectDetail() {
  return (
    <div className="text-center p-4 h-full flex flex-col justify-center text-red-100">
      <div>
        <span className="text-2xl font-bold">KARMA</span>
        <br />
        <span className="text-sm font-thin">Planning App</span>
        <br />
        <span className="text-sm font-light">
          Built with react and firebase, karma is a modern planner app with
          support for projects, tasks and timeline.
        </span>
        <br />
        <span className="font-thin cursor-pointer">
          <span className="p-1">Live Demo</span>
          &bull;
          <span className="p-1">Github Link</span>
        </span>
      </div>
    </div>
  );
}

export default AdditionalProjects;
