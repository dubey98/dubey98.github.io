import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/main/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div className="box-border snap-y overflow-y-auto h-screen snap-mandatory">
      <section id="intro" className="h-screen flex snap-center flex-col">
        <Navbar />
        <Intro />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
        {/* <AdditionalProjects /> */}
      </section>
      <section id="about" className="h-screen snap-center">
        <About />
      </section>
      <section id="contact" className="snap-center h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
