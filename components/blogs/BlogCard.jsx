import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <div className="border-b border-custom-peri">
      <div className="rounded-lg px-4 py-2">
        <div className="flex">
          <div className="flex items-center justify-center">
            <div className="mx-2 h-8 w-8 overflow-hidden rounded-full bg-custom-green relative">
              <Image
                src={blog.authorImageSrc}
                alt={blog.author + " profile image"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex-grow pl-2">
            <h3 className="">{blog.author}</h3>
            <p className="text-xs">{blog.datePublished}</p>
          </div>
          <div className="flex items-center pr-2">
            <button>
              <i className="fas fa-share-square"></i>
            </button>
          </div>
        </div>
        <div className="pl-2">
          <h1 className="py-1 sm:py-2 text-xl text-custom-peri">
            <Link href={"/blogs/" + blog.slug}>
              <a>{blog.title}</a>
            </Link>
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
          <div className="flex justify-between pt-2">
            {/* <div className="flex items-center space-x-2 py-1 text-sm"> */}
            <div className="inline-block">
              <i className="fas fa-heart pr-2"></i> {blog.numOfLikes} Likes
            </div>
            <div className="inline-block">
              <i className="fas fa-comments px-2"></i>
              {blog.numOfComments} Comments
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
