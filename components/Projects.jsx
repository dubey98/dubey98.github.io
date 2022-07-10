import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import vastramImg from "./../public/vastram-1.png";
import karmaImg from "./../public/karma.png";
import hotelImg from "./../public/hotel.png";
import Pagination from "./Pagination";
import CTAButtons from "./CTAButtons";
import ProjectList from "./ProjectList";
import TechTools from "./TechTools";

function getTranslateValues(index) {
  let value = "";
  switch (index) {
    case 1:
      value = "translate-x-[-100%]";
      break;
    case 2:
      value = "translate-x-[-200%]";
      break;
    default:
      value = "translate-x-0";
      break;
  }
  return value;
}

function Projects({ projects }) {
  const numProjects = projects.length;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [timerStatus, setTimerStatus] = useState(true);
  const projectRef = useRef();

  useEffect(() => {
    let slideTimer = null;
    if (timerStatus) {
      slideTimer = setInterval(() => {
        setCurrentProjectIndex((currentProjectIndex + 1) % numProjects);
      }, 3000);
    } else {
      clearInterval(slideTimer);
    }
    return () => {
      clearInterval(slideTimer);
    };
  }, [currentProjectIndex, numProjects, timerStatus]);

  const handleClick = (_index) => {
    setTimerStatus(false);
    setCurrentProjectIndex(_index);
  };

  return (
    <div className="h-full snap-y snap-mandatory overflow-hidden flex flex-col justify-center">
      <div className="box-border flex  p-2 pl-6 snap-center bg-custom-black">
        <div className="w-1/4 hidden md:block">
          <ProjectList
            projects={projects}
            handleClick={handleClick}
            index={currentProjectIndex}
          />
        </div>
        <div className="w-full md:w-3/4 pr-4 sm:pr-0 relative" ref={projectRef}>
          <div className="pb-8 h-full whitespace-nowrap overflow-x-hidden">
            <div
              className={
                "h-full transition-all delay-100 ease-out duration-500 " +
                getTranslateValues(currentProjectIndex)
              }
            >
              {projects.map((project, i) => (
                <div className="inline-block h-full w-full" key={i}>
                  <ProjectDetails project={project} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <Pagination
              currentPage={currentProjectIndex}
              handleClick={handleClick}
              totalPage={numProjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="flex whitespace-normal h-full items-center">
      <div className={"h-[80vh] border border-l-custom-green"}></div>
      <div className="m-2 flex flex-col h-full pl-4 py-0 sm:py-6 text-custom-green">
        <div className={"text-7xl font-semibold text-custom-gray"}>
          {project.projectNo}
        </div>
        <div className={" text-3xl font-semibold text-custom-green "}>
          {project.title}
        </div>
        <div className="flex flex-grow flex-col justify-around text-custom-green">
          <div className="max-w-xl space-y-3 pt-2">
            {project.description.map((d, index) => (
              <p key={index}>{d}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap py-2">
          <TechTools toolsArray={project.toolsArray} containerCls="text-sm" />
        </div>
        <div className="box-border h-32 sm:h-56 rounded-lg ring-4 ring-custom-green relative">
          <Image
            className="object-center object-cover rounded-lg"
            layout="fill"
            src={project.images[0].src}
            alt={project.images[0].alt}
          />
        </div>
        <CTAButtons project={project} />
      </div>
    </div>
  );
}

export default Projects;
