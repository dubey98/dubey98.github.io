import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getBlogBySlug, getBlogSlugs } from "../../lib/api";

function Blog({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.shortDescription} />
        <meta
          name="keywords"
          content={blog.tags.map((tag) => tag.displayValue).join(" ,")}
        />
      </Head>
      <main className="bg-custom-black text-custom-green">
        <div className=" min-h-screen container max-w-4xl mx-auto">
          <div className="px-4 py-12">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="relative h-8 w-8 overflow-hidden rounded-full outline-2 outline-custom-green outline">
                  <Image
                    src={blog.authorImageSrc}
                    alt={blog.author + " image"}
                    fill
                  />
                </div>
              </div>
              <div className="ml-2 flex-grow pl-2">
                <h3 className="font-medium">{blog.author}</h3>
                <p className="text-xs">{blog.datePublished}</p>
              </div>
            </div>
            <h1 className="py-4 text-4xl font-semibold text-custom-peri">
              {blog.title}
            </h1>
            <div className="-ml-1 flex pb-2 flex-wrap">
              {blog.tags.map((tag, index) => {
                return (
                  <div
                    className="m-1 rounded-lg border border-black px-2 bg-custom-green text-custom-black"
                    key={index}
                  >
                    #{tag.displayValue}
                  </div>
                );
              })}
            </div>
            <div className="pt-6">
              <article
                className="prose"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
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
