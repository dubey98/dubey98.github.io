import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <div className="rounded-lg bg-custom-charcoal p-4">
      <div className="flex">
        <div className="flex items-center justify-center">
          <div className="mx-2 h-10 w-10 overflow-hidden rounded-full bg-custom-green relative">
            <Image
              src={blog.authorImageSrc}
              alt={blog.author + " profile image"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex-grow pl-2">
          <h3 className="text-lg font-medium">{blog.author}</h3>
          <p className="text-xs">{blog.datePublished}</p>
        </div>
        <div className="flex items-center pr-2">
          <button>
            <i className="fas fa-share-square"></i>
          </button>
        </div>
      </div>
      <div className="pl-16">
        <h1 className="py-1 sm:py-4 text-2xl sm:text-3xl font-semibold text-custom-peri">
          <Link href={"/blogs/" + blog.slug}>
            <a>{blog.title}</a>
          </Link>
        </h1>
        <div className="flex space-x-2 text-sm sm:text-base">
          {blog.tags.map((tag, index) => {
            return (
              <button className="border-1 rounded-xl border px-2" key={index}>
                #{tag.displayValue}
              </button>
            );
          })}
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex items-center space-x-2 py-1 text-sm">
            <div className="inline-block">
              <i className="fas fa-heart px-1"></i> {blog.numOfLikes} Likes
            </div>
            <div className="inline-block">
              <i className="fas fa-comments px-1"></i>
              {blog.numOfComments} Comments
            </div>
          </div>
          <div className="box-border text-sm sm:text-base">
            <button className="rounded-md border-2 border-custom-green px-4 py-1">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
