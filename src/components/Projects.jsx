import React from "react";
import vastramImg from "./../static/vastram-1.png";

function Projects() {
  return (
    <div class="h-screen bg-red-300 md:flex md:flex-row border-2">
      <div class="h-2/4 sm:pt-10 md:pt-0 md:h-full md:w-full flex flex-row justify-center">
        <div class="bg-cover bg-no-repeat mt-auto h-3/4 sm:h-full md:h-3/4 md:my-auto md:w-4/5 md:ml-auto w-3/4"
        style={{backgroundImage: `url(${vastramImg})`}}></div>
      </div>
      <div class="h-2/4 md:h-full md:w-2/4 pb-6 flex flex-row justify-center">
        <div class="w-3/4 text-center p-4 flex flex-col justify-center">
          <div>
            <span class="text-2xl font-bold">Vastram</span>
            <br />
            <span class="text-sm font-thin">An E-commerce Site</span>
            <br />
            <span class="text-sm font-light">
              Built with nodejs and react vastram is a fantastic site, that can
              cater to the needs for a small business/{" "}
            </span>
            <br />
            <span class="font-thin cursor-pointer">
              <span class="p-1">Live Demo</span>
              &bull;
              <span class="p-1">Github Link</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
