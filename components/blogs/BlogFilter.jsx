import React from "react";

function BlogFilter() {
  return (
    <nav className="px-4 py-2">
      <ul className="flex space-x-4 text-lg">
        <li className="border-b">Latest</li>
        <li>Top</li>
      </ul>
    </nav>
  );
}

export default BlogFilter;
