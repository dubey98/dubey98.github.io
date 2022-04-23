import React from "react";
import TechTools from "./TechTools";

function About() {
  return (
    <div className="bg-custom-black h-full pl-6 p-2">
      <div className="flex items-center h-full sm:w-3/4 md:ml-auto">
        <div className="border border-l-custom-green h-5/6"></div>
        <div className="text-custom-green px-2 m-2 flex flex-col h-5/6 max-w-2xl">
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
            <div className="pt-0 md:pt-12">
              <div className="p-2 pl-0">
                <div className="">
                  Languages :
                  <TechTools
                    toolsArray={["js", "c++", "c#", "sql"]}
                    containerCls="text-md"
                  />
                </div>
                <div className="">
                  Technologies :
                  <TechTools
                    toolsArray={[
                      "react",
                      "nodejs",
                      "firebase",
                      ".net",
                      "sqlserver",
                      "mongoDb",
                    ]}
                    containerCls="text-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit py-2 sm:py-6" id="resume">
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

export default About;
