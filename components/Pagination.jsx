import React from "react";

function Pagination({ currentPage, totalPage, handleClick }) {
  const generatePages = () => {
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
      pages.push(
        <div
          className={
            "border-custom-green h-4 w-4 rounded-full border " +
            (currentPage === i ? "bg-custom-green" : "")
          }
          onClick={() => handleClick(i)}
          key={i}
        ></div>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center space-x-4 p-2 w-full">
      {generatePages()}
    </div>
  );
}

export default Pagination;
