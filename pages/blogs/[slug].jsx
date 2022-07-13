import React from "react";
import { getPostBySlug } from "../../lib/api";

function Blog({ blog, data }) {
  return (
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
        <div className="space-y-2 pt-6">{blog.content}</div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostBySlug(params.slug);

  return {
    props: {
      data: JSON.stringify(data),
      blog: {
        id: 1,
        author: "Shiv Dubey",
        authorImageSrc: "https://bulma.io/images/placeholders/128x128.png",
        datePublished: new Date().toJSON(),
        title: "How to Learn Programming",
        numOfLikes: 24,
        numOfComments: 7,
        tags: [
          { displayValue: "programming" },
          { displayValue: "react" },
          { displayValue: "next" },
          { displayValue: "js" },
        ],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, atque facilis iure soluta dicta aliquam corporis eligendi quisquam sint nihil, in officia vel, consequuntur doloremque autem veniam. Consectetur, esse nihil",
      },
    },
  };
}

export async function getStaticPaths() {
  const data = [];
  return {
    paths: [
      {
        params: {
          slug: "my-first-blog",
        },
      },
      {
        params: {
          slug: "my-second-blog",
        },
      },
    ],
    fallback: true,
  };
}

export default Blog;
