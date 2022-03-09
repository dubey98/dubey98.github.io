import React from "react";

function About() {
  return (
    <div className="bg-red-300 flex flex-col justify-center h-screen ">
      <div className="text-red-800">
        <div class="mx-auto w-4/5 max-w-4xl p-2">
          <span class="text-4xl uppercase">About me</span> <br />
          <div class="p-3 pl-0 italic font-serif">
            <div class="">First, solve the problem. Then, write the code.</div>
          </div>
          <span class="italic">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur eos rerum voluptas. Similique rem, nisi consectetur,
            molestiae delectus, aliquid consequatur fugiat quae qui doloremque
            voluptatum velit veritatis iste voluptates eaque?{" "}
          </span>
          <div class="p-2 pl-0">
            <span class="font-semibold">Technologies i have worked with:</span>
            <br />
            <span className="text-lg">
              <i className="fab fa-react pr-1">
                <span className="hidden">React</span>
              </i>
              <i className="fab fa-node-js pl-1 pr-1"></i>
              <i className="fab fa-js pl-1 pr-1"></i>
              <i class="fab fa-css3 pl-1 pr-1"></i>
              Mongo Db, Sql Server, .NET, Tailwind, Bulma
            </span>
          </div>
        </div>
        <div className="mx-auto w-fit pt-6">
          <button className="border-2 border-red-100 p-2">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
