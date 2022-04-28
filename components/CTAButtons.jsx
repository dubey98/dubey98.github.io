import React from "react";

function CTAButtons({ project }) {
  return (
    <div className="py-4 flex space-x-4">
      <div className="relative w-fit">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noreferrer"
          className={
            "rounded-lg block px-2 py-2 text-lg ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg  before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-2 " +
            "before:bg-custom-gray text-custom-green ring-custom-gray border border-custom-green"
          }
        >
          View Demo
        </a>
      </div>
      <div className="relative w-fit">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className={
            "rounded-lg block px-2 py-2 font-mono text-lg ring-offset-2 before:absolute before:inset-0 before:origin-right before:scale-x-0 before:rounded-lg before:opacity-50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 focus:ring-1 " +
            "before:bg-custom-gray text-custom-green ring-custom-gray border border-custom-green"
          }
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default CTAButtons;
