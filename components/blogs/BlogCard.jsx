import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto space-y-4">
      <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl dark:bg-transparent border border-transparent hover:border-custom-green dark:shadow-none shadow-2xl shadow-transparent hover:shadow-custom-green sm:gap-8 sm:flex transition duration-300 hover:z-10">
        <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
          <Image
            src={blog.coverImg}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="sm:p-2 sm:pl-0 sm:w-4/6">
          <span className="mt-4 mb-2 inline-block font-medium sm:mt-0 text-custom-gray">
            {blog.datePublished}
          </span>
          <h3 className="text-2xl font-semibold">
            <Link href={"/blogs/" + blog.slug}>{blog.title}</Link>
          </h3>
          <p className="my-6 text-custom-gray">{blog.shortDescription}</p>

          <div className="flex gap-4">
            {blog.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full border border-custom-green text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-custom-green hover:text-custom-black"
                >
                  Tailwindcss
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
