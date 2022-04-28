import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shiv Dubey - Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#211E27" />
        <meta
          name="description"
          content="Shiv Dubey: Full Stack Web Developer"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/cf77766bad.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <div className="box-border snap-y overflow-y-auto h-screen snap-mandatory bg-custom-black">
        <section id="intro" className="h-full flex snap-center flex-col">
          <Navbar />
          <Intro />
        </section>
        <section id="projects" className="snap-start h-full">
          <Projects />
          {/* <AdditionalProjects /> */}
        </section>
        <section id="about" className="h-full snap-center">
          <About />
        </section>
        <section id="contact" className="snap-center h-full">
          <Contact />
        </section>
      </div>
    </div>
  );
}
