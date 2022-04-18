import React, { useEffect, useState } from "react";
import vastramImg from "./../static/vastram-1.png";

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
        "it has a complete authentication system with passport and JWT. we use mongoDB atlas for database which provides very flexible document structure for rapid developments and changing requirement structure.",
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

function Projects({ projects }) {
  const maxIndex = Array.isArray(projects) && projects.length - 1;
  const [mouseOver, setMouseOver] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scrollFunc = (e) => {
      const delta = e.wheelDelta;
      let listTraversed = false;
      if (delta < 0 && index < maxIndex) {
        setIndex(index + 1);
      } else if (delta > 0 && index > 0) {
        setIndex(index - 1);
      } else if (delta !== 0) {
        console.log("setting list traversed");
        listTraversed = true;
      }
      if (mouseOver && !listTraversed) {
        e.returnValue = false;
      }
      return false;
    };

    document.querySelector("#projects").addEventListener("wheel", scrollFunc);
    document.querySelector("#projects").addEventListener("touchstart", () => {
      console.log("touchstart");
    });
    document
      .querySelector("#projects")
      .addEventListener("touchend", () => console.log("touchend"));

    return () => {
      document.querySelector("#app").removeEventListener("wheel", scrollFunc);
    };
  }, [mouseOver, index]);

  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-hidden"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
}

function Project({ project }) {
  return (
    <div className="box-border flex h-screen bg-custom-black p-2 pl-6 snap-center">
      <div className="relative hidden w-1/4 justify-center sm:flex sm:flex-col sm:items-center">
        <div className="absolute ring-2 ring-custom-green ring-offset-2 z-0 h-72 w-96 rounded-lg transition-all ease-in-out hover:z-10 sm:-left-60 md:-left-36 hover:sm:left-2 ">
          <img
            src={vastramImg}
            alt={project.images[0].alt}
            className="object-cover h-full w-full object-center rounded-lg"
          />
        </div>
      </div>
      <div className="ml-auto flex h-full sm:w-3/4 items-center">
        <div className="h-4/5 border border-l-custom-green"></div>
        <div className="m-2 flex flex-grow flex-col py-0 sm:py-16 text-custom-green">
          <div className="px-2 text-7xl font-semibold text-custom-gray">
            {project.projectNo}
          </div>
          <div className="px-2 text-3xl font-semibold">{project.title}</div>
          <div className="flex flex-grow flex-col justify-around">
            <div className="max-w-xl space-y-3 px-2 pt-2">
              {project.description.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </div>
            <div className="mx-2 box-border h-32 rounded-lg bg-custom-green ring-4 ring-custom-gray sm:hidden"></div>
          </div>
          <div className="space-y-4 pt-4">
            <div className="relative w-fit">
              <a
                href={project.demoLink}
                target="_blank"
                className="rounded-lg block px-2 py-2 text-lg ring-custom-gray ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg before:bg-custom-gray before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-2"
              >
                View Demo
              </a>
            </div>
            <div className="relative w-fit">
              <a
                href={project.githubLink}
                target="_blank"
                className="rounded-lg block px-2 py-2 font-mono text-lg ring-custom-gray ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg before:bg-custom-gray before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-1"
              >
                Explore Code on Github
              </a>
            </div>
          </div>
          <div className="w-full bg-custom-green"></div>
        </div>
      </div>
    </div>
  );
}

Projects.defaultProps = defaultProps;
export default Projects;
