import React, { useEffect, useRef, useState } from "react";
import vastramImg from "./../static/vastram-1.png";
import Pagination from "./Pagination";
import CTAButtons from "./CTAButtons";
import ProjectList from "./ProjectList";
import Hammer from "hammerjs";

const defaultProps = {
  projects: [
    {
      images: [
        {
          src: vastramImg,
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
      ],
      projectNo: "01",
      title: "VASTRAM",
      description: [
        "Vastram is a complete e-commmerce site built for small businesses, the site provides excellent design and category display options.",
        "it is built with react and nodejs, the site uses bulma for implementing best in class design practices.",
        // "it has a complete authentication system with passport and JWT. we use mongoDB atlas for database which provides very flexible document structure for rapid developments and changing requirement structure.",
      ],
      demoLink: "https://www.google.com",
      githubLink: "",
    },
    {
      images: [
        {
          src: vastramImg,
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
      ],
      projectNo: "02",
      title: "KARMA",
      description: [
        "Built with react and firebase, karma is a modern planner app with support for projects, tasks and timeline.",
        "karma description 2",
        "karma description 3",
      ],
      demoLink: "https://dubey98.github.io/karma/",
      githubLink: "https://github.com/dubey98/karma",
    },
    {
      images: [
        {
          src: vastramImg,
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
        {
          src: "",
          alt: "vastram image 1",
        },
      ],
      projectNo: "03",
      title: "Hotel Website",
      description: [
        "this beautifull customer centric website is built with react and tailwind.",
        "Hotel description 2",
        "Hotel description 3",
      ],
      demoLink: "https://hotel-book-dev.web.app/",
      githubLink: "https://github.com/dubey98/fb-react-hotel",
    },
  ],
};

function getTranslateValues(index) {
  let value = "translate-x-0";
  switch (index) {
    case 2:
      value = "translate-x-[-100%]";
      break;
    case 3:
      value = "translate-x-[-200%]";
      break;
  }
  return value;
}

function Projects({ projects }) {
  const numProjects = projects.length;
  const [hammer, setHammer] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);
  const projectRef = useRef();

  const wait = 100;
  let time = Date.now();
  const handleSwipe = (e) => {
    if (time + wait - Date.now() < 0) {
      if (e.type === "panright") {
        if (currentProjectIndex > 1) {
          setCurrentProjectIndex(currentProjectIndex - 1);
        }
        time = Date.now();
      } else {
        if (currentProjectIndex < numProjects) {
          setCurrentProjectIndex(currentProjectIndex + 1);
        }
        time = Date.now();
      }
    }
  };

  useEffect(() => {
    if (projectRef && projectRef.current) {
      let h = hammer;
      if (!hammer) {
        h = new Hammer(projectRef.current);
        setHammer(h);
      }
      h.off("panleft panright", handleSwipe);
      h.on("panleft panright", handleSwipe);
    }
  }, [projectRef, numProjects, currentProjectIndex]);

  const handleClick = (_index) => {
    _index > 0 && setCurrentProjectIndex(_index);
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-hidden">
      <div className="box-border flex h-full p-2 pl-6 snap-center bg-custom-black">
        <div className="w-1/4 hidden sm:block">
          <ProjectList
            projects={projects}
            handleClick={handleClick}
            index={currentProjectIndex}
          />
        </div>
        <div
          className="w-full sm:w-3/4 pr-4 sm:pr-0 relative"
          // {...swipeHandlers}
          ref={projectRef}
        >
          <div className="pb-8 h-full whitespace-nowrap overflow-x-hidden">
            <div
              className={
                "h-full transition-all ease-in-out duration-300 " +
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
              totalPage={projects.length}
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
      <div className="m-2 flex flex-col h-full pl-4 py-0 sm:py-16 text-custom-green">
        <div className={" text-7xl font-semibold text-custom-gray"}>
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
        <div className="box-border h-32 rounded-lg bg-custom-green ring-4 ring-custom-green sm:hidden">
          <img
            src={vastramImg}
            alt={project.images[0].alt}
            className="object-cover h-full w-full object-center rounded-lg"
          />
        </div>
        <CTAButtons project={project} />
      </div>
    </div>
  );
}

Projects.defaultProps = defaultProps;
export default Projects;
