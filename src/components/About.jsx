import React, { useState, useEffect } from "react";
import TechTools from "./TechTools";

function About() {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    if (window.screen.height < 800) {
      setSmallScreen(true);
    }
  }, []);

  return (
    <div className="bg-custom-black h-full pl-6 p-2">
      <div className="flex items-center h-full sm:w-3/4 md:ml-auto">
        <div className="border border-l-custom-green h-5/6"></div>
        <div className="text-custom-green px-2 m-2 flex flex-col h-5/6 max-w-2xl">
          <div className="text-5xl uppercase font-semibold">About Me</div>
          <div className="max-w-4xl flex flex-col flex-grow justify-center">
            <div
              className={
                smallScreen
                  ? "italic font-serif space-y-1 text-sm pt-2"
                  : "italic font-serif space-y-2 pt-6"
              }
            >
              <p className="">
                I am a professional web developer from india currently working
                with Cardekho. I have worked on designing and developing web
                application and building robust infrastructure to support them.
              </p>
              <p className="">
                I love solving real world problems with technology, implementing
                innovative design and trying new things. I am currently working
                with react, firebase and nodejs to build some interesting apps.
              </p>
              <p className="">
                if you are looking to launch a website or have any interesting
                ideas (or if want you to grad a coffee anytime), be sure to hit
                me up.
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
                      "mongodb",
                      "tailwind",
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
