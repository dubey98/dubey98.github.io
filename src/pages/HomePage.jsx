import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/main/Intro";
import Projects from "../components/Projects";
import AdditionalProjects from "../components/AdditionalProjects";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div className="box-border text-red-700">
      <section id="intro" className="h-screen flex flex-col">
        <Navbar />
        <Intro />
      </section>
      <section id="projects" className="flex flex-col">
        <Projects />
        <AdditionalProjects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
