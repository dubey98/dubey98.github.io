import React from "react";

function ProjectList({ projects, handleClick, index }) {
  return (
    <div className="space-y-6 pt-6 h-full flex flex-col justify-center">
      {projects.map((project, _index) => (
        <div className="w-full" key={_index}>
          <button
            className={
              "mx-auto block w-3/4 rounded-lg border py-2 px-6 " +
              "ring-custom-green ring-offset-0 focus:ring-1 " +
              " border-custom-gray hover:border-custom-green " +
              (_index === index - 1
                ? "bg-custom-green text-custom-black"
                : "text-custom-green")
            }
            onClick={() => handleClick(_index + 1)}
          >
            {project.title}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
