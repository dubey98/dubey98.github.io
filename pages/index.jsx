import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Shiv Dubey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#211E27" />
        <meta
          name="description"
          content="PortFolio of Shiv Dubey, Full Stack Developer"
        />
        <meta
          name="keywords"
          content="Shiv Dubey,developer,full-stack,portfolio,dubey98"
        />
      </Head>
      <div className="box-border snap-y overflow-y-auto h-screen snap-mandatory bg-custom-black">
        <section
          id="intro"
          className="h-full flex snap-center flex-col max-w-7xl mx-auto"
        >
          <Navbar />
          <Intro />
        </section>
        <section id="projects" className="snap-start h-full max-w-7xl mx-auto">
          <Projects projects={data.projects} />
        </section>
        <section id="about" className="h-full snap-center max-w-7xl mx-auto">
          <About />
        </section>
        <section id="contact" className="snap-center h-full max-w-7xl mx-auto">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = {
    projects: [
      {
        images: [
          {
            src: "/vastram-1.png",
            alt: "Vastram demo image",
          },
        ],
        projectNo: "01",
        title: "VASTRAM",
        description: [
          "Vastram is a complete e-commmerce site built for small businesses, the site provides excellent design and category display options.",
          "it is built with react and nodejs, the site uses bulma for implementing best in class design practices.",
        ],
        demoLink: "https://shiv-vastram.herokuapp.com/",
        githubLink: "https://github.com/dubey98/vastram",
        toolsArray: ["react", "nodejs", "mongodb"],
      },
      {
        images: [
          {
            src: "/karma.png",
            alt: "Karma demo image",
          },
        ],
        projectNo: "02",
        title: "KARMA",
        description: [
          "Built with react and firebase, karma is a modern planner app with support for projects, tasks and timeline.",
          "Karma utilises firebase on the backend for authentication and managing data.",
        ],
        demoLink: "https://dubey98.github.io/karma/",
        githubLink: "https://github.com/dubey98/karma",
        toolsArray: ["react", "firebase"],
      },
      {
        images: [
          {
            src: "/hotel.png",
            alt: "Hotel Website snapshot",
          },
        ],
        projectNo: "03",
        title: "Hotel Website",
        description: [
          "This beautifull website is built for needs of a hotel chain supporting multiple locations and restaurant",
          "it's built with react and tailwind to provide faster load times and a smooth experience.",
        ],
        demoLink: "https://hotel-book-dev.web.app/",
        githubLink: "https://github.com/dubey98/fb-react-hotel",
        toolsArray: ["react", "tailwind"],
      },
    ],
  };
  // Props returned will be passed to the page component
  return { props: { data } };
}
