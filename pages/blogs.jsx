import Head from "next/head";
import Script from "next/script";
import BlogCard from "./../components/blogs/BlogCard";
import BlogFilter from "../components/blogs/BlogFilter";
import { getAllBlogs } from "../lib/api";
import Link from "next/link";

function blogs({ blogs }) {
  return (
    <div className="bg-custom-black">
      <Head>
        <title>Shiv Dubey - Blogs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#211E27" />
        <meta name="description" content="Programming blogs by Shiv Dubey" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/cf77766bad.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <main className="lg:ml-36 pt-10 text-custom-green min-h-screen">
        <nav className="p-2 text-xl">
          <div className=" cursor-pointer">
            <Link href={"/"} passHref>
              <span>
                <i className="fas fa-arrow-left"></i>
                <span className="ml-2">Back to Homepage</span>
              </span>
            </Link>
          </div>
        </nav>
        <section className="flex-grow max-w-2xl">
          <BlogFilter />
          <div className="space-y-2 p-2">
            {blogs.length > 0 ? (
              blogs.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })
            ) : (
              <ComingSoon />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

const ComingSoon = () => {
  return (
    <div className="w-full border border-dashed border-custom-green h-72 rounded-xl flex justify-center items-center">
      <span className="uppercase text-xl italic">Coming Soon...</span>
    </div>
  );
};

export async function getStaticProps() {
  const blogs = await getAllBlogs();

  const data = {
    blogs: [
      ...blogs.map((blog) => {
        return blog.data;
      }),
    ],
  };
  return { props: { blogs: data.blogs } };
}

export default blogs;
