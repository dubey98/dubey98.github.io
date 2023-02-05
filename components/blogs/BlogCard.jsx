import React from "react";
import Image from "next/image";
import Link from "next/link";
import { myLoader } from "../../helpers/nextHelpers";

function BlogCard({ blog }) {
  return (
    <div className="border-b border-custom-peri">
      <div className="rounded-lg px-4 py-2 sm:py-4">
        <div className="flex">
          <div className="flex items-center justify-center">
            <div className="mx-2 h-8 w-8 overflow-hidden rounded-full bg-custom-green relative outline-2 outline-custom-green outline">
              <Image
                src={blog.authorImageSrc}
                alt={blog.author + " profile image"}
                layout="fill"
                objectFit="contain"
                loader={myLoader}
              />
            </div>
          </div>
          <div className="flex-grow pl-2">
            <h3 className="">{blog.author}</h3>
            <p className="text-xs">{blog.datePublished}</p>
          </div>
        </div>
        <div className="pl-2">
          <h1 className="py-1 sm:py-2 text-xl sm:text-2xl text-custom-peri">
            <Link href={"/blogs/" + blog.slug}>{blog.title}</Link>
          </h1>
          <div className="flex text-xs sm:text-base flex-wrap -ml-2">
            {blog.tags.map((tag, index) => {
              return (
                <button className="mx-2 my-1 rounded-xl" key={index}>
                  # {tag.displayValue}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
