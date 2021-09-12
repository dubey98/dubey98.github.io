import React from "react";
import Layout from "../components/Layout";

import ProjectPanel from "../components/ProjectPanel";

function index() {
  return (
    <Layout>
      <main className="flex-1 block">
        <section className="grid sm:grid-cols-2 grid-cols-1 h-screen">
          <div className="flex items-center justify-center pl-2">
            <div className="flex-0 leading-8">
              <span className="text-5xl font-semibold">HI!!</span> <br />
              <span className="text-4xl">
                I'm <span className="font-semibold uppercase">Shiv Dubey</span>
              </span>
              <br />
              <span className="text-xl uppercase">
                A passionate full stack developer.
              </span>
            </div>
          </div>
          <div className="bg-developer"></div>
        </section>
        <section
          className="container sm:mx-auto mx-1 flex flex-col"
          id="projects"
        >
          <div className="text-5xl uppercase font-semibold py-2">#Projects</div>
          <ProjectPanel />
        </section>
      </main>
    </Layout>
  );
}

export default index;
