import KarmaHomePage from "./../static/karma.png";
import hotelImage from "./../static/hotel.png"

const defaultProps = {
  projects: [
    {
      title: "KARMA",
      shortDescription: "A Planning App",
      longDescription:
        "Built with react and firebase, karma is a modern planner app with support for projects, tasks and timeline.",
      demoLink: "https://dubey98.github.io/karma/",
      githubLink: "https://github.com/dubey98/karma",
      imageSrc: KarmaHomePage,
    },
    {
      title: "Hotel Website",
      shortDescription: "A Hotel Website",
      longDescription:
        "this beautifull customer centric website is built with react and tailwind.",
      demoLink: "https://hotel-book-dev.web.app/",
      githubLink: "https://github.com/dubey98/fb-react-hotel",
      imageSrc: hotelImage,
    },
  ],
};

function AdditionalProjects({ projects }) {
  return (
    <div className="min-h-screen">
      <div className="p-8 sm:flex sm:flex-col max-w-5xl min-w-4xl mx-auto">
        {projects.map((project, index) => {
          return (
            <div className="mb-8 sm:mb-0 sm:flex project" key={index}>
              <ProjectImage imageSrc={project.imageSrc} />
              <div className="h-40 sm:w-1/2 sm:h-64 bg-red-400">
                <ProjectDetail project={project} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectImage({ imageSrc }) {
  return (
    <div
      className="h-64 sm:w-1/2 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>
  );
}

function ProjectDetail({ project }) {
  return (
    <div className="text-center p-4 h-full flex flex-col justify-center text-red-100">
      <div>
        <span className="text-2xl font-bold">{project.title}</span>
        <br />
        <span className="text-sm font-thin">{project.shortDescription}</span>
        <br />
        <span className="text-sm font-light">{project.longDescription}</span>
        <br />
        <span className="font-thin cursor-pointer">
          <span className="p-1">
            <a href={project.demoLink} target="_blank">
              Live Demo
            </a>
          </span>
          &bull;
          <span className="p-1">
            <a href={project.githubLink} target="_blank">
              Github Link
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

AdditionalProjects.defaultProps = defaultProps;
export default AdditionalProjects;
