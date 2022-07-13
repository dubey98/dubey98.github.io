import React from "react";
import { getBlogBySlug, getBlogSlugs } from "../../lib/api";
import markdownStyles from "./markdown.module.scss";

function Blog({ blog, data }) {
  return blog ? (
    <div className="bg-custom-black text-custom-green min-h-screen">
      <div className="px-4 py-12 max-w-4xl mx-auto">
        <div className="flex">
          <div className="flex items-center justify-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-custom-green"></div>
          </div>
          <div className="ml-2 flex-grow pl-2">
            <h3 className="text-lg font-medium">{blog.author}</h3>
            <p className="text-xs">{blog.datePublished}</p>
          </div>
        </div>
        <h1 className="py-4 text-5xl font-semibold text-custom-peri">
          {blog.title}
        </h1>
        <div className="-ml-1 flex pb-2">
          {blog.tags.map((tag, index) => {
            return (
              <div
                className="mx-1 rounded-lg border border-black px-2 bg-custom-green text-custom-black"
                key={index}
              >
                {tag.displayValue}
              </div>
            );
          })}
        </div>
        <div className="pt-6">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </div>
    </div>
  ) : null;
}

export async function getStaticProps({ params }) {
  const fileContent = await getBlogBySlug(params.slug);
  return {
    props: {
      blog: {
        ...fileContent.data,
        content: fileContent.value,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = getBlogSlugs();
  return {
    paths: blogSlugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: true,
  };
}

export default Blog;
