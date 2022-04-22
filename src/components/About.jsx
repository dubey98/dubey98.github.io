import React from "react";

function About() {
  return (
    <div className="bg-custom-black h-screen pl-6 p-2">
      <div className="flex items-center h-full sm:w-3/4 md:ml-auto">
        <div className="border border-l-custom-green h-5/6"></div>
        <div className="text-custom-green px-2 m-2 flex flex-col h-5/6">
          <div className="text-5xl uppercase font-semibold">About Me</div>
          <div className="max-w-4xl flex flex-col flex-grow justify-center">
            <div className="italic font-serif space-y-2 pt-6">
              <p className="">
                I am a full stack developer and problem solver. i have a passion
                for building things that work and scale. i have worked in close
                relation with clients, understanding their expectations and
                making it a reality.
              </p>
              {/* <div className="italic text-sm border-2 text-center py-3">
                First, solve the problem. Then, write the code.
              </div> */}
              <p className="">
                I have previously worked with <strong>Nagarro</strong> as a
                software engineer, i am currently working at{" "}
                <strong>CarDekho</strong> building awesome systems and expanding
                my skillset.
              </p>
            </div>
            <div className="pt-12">
              <TechTools />
            </div>
          </div>
          <div className="w-fit py-6" id="resume">
            <button className="border-2 px-4 py-2 rounded-md uppercase">
              <a
                href="https://drive.google.com/file/d/18DjZiwQi_uJ-UKY9o1hAp27tXd4AlK_g/view?usp=sharing"
                target={"_blank"}
                rel="noreferrer"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechTools() {
  return (
    <div className="p-2 pl-0">
      <span className="font-semibold">Technologies i have worked with:</span>
      <br />
      <div className="text-lg">
        <span className="">
          <i className="fab fa-react pr-1">
            <span className="hidden">React</span>
          </i>
          <i className="fab fa-node-js pl-1 pr-1"></i>
          <i className="fab fa-js pl-1 pr-1"></i>
          <i className="fab fa-css3 pl-1 pr-1"></i>
          Mongo Db, Sql Server, .NET, Tailwind, Bulma
        </span>
      </div>
    </div>
  );
}

export default About;
