import React from "react";
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
  const handleScroll = (e) => {
    console.log(e);
  };

  return (
    <div
      class="h-screen snap-y snap-mandatory overflow-y-auto"
      onScroll={handleScroll}
    >
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
}

function Project({ project }) {
  return (
    <div class="box-border flex h-screen bg-custom-black p-2 pl-6 snap-center">
      <div class="relative hidden w-1/4 justify-center sm:flex sm:flex-col sm:items-center">
        <div class="absolute ring-2 ring-custom-green ring-offset-2 z-0 h-72 w-96 rounded-lg transition-all ease-in-out hover:z-10 sm:-left-60 md:-left-36 hover:sm:left-2 ">
          <img
            src={vastramImg}
            alt={project.images[0].alt}
            className="object-cover h-full w-full object-center rounded-lg"
          />
        </div>
      </div>
      <div class="ml-auto flex h-full sm:w-3/4 items-center">
        <div class="h-4/5 border border-l-custom-green"></div>
        <div class="m-2 flex flex-grow flex-col py-0 sm:py-16 text-custom-green">
          <div class="px-2 text-7xl font-semibold text-custom-gray">{project.projectNo}</div>
          <div class="px-2 text-3xl font-semibold">{project.title}</div>
          <div class="flex flex-grow flex-col justify-around">
            <div class="max-w-xl space-y-3 px-2 pt-2">
              {project.description.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </div>
            <div class="mx-2 box-border h-32 rounded-lg bg-custom-green ring-4 ring-custom-gray sm:hidden"></div>
          </div>
          <div class="space-y-4 pt-4">
            <div class="relative w-fit">
              <a
                href={project.demoLink}
                target="_blank"
                class="rounded-lg block px-2 py-2 text-lg ring-custom-gray ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg before:bg-custom-gray before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-2"
              >
                View Demo
              </a>
            </div>
            <div class="relative w-fit">
              <a
                href={project.githubLink}
                target="_blank"
                class="rounded-lg block px-2 py-2 font-mono text-lg ring-custom-gray ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg before:bg-custom-gray before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-1"
              >
                Explore Code on Github
              </a>
            </div>
          </div>
          <div class="w-full bg-custom-green"></div>
        </div>
      </div>
    </div>
  );
}

Projects.defaultProps = defaultProps;
export default Projects;
