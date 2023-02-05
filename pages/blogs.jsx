import Head from "next/head";
import BlogCard from "./../components/blogs/BlogCard";
import { getAllBlogs } from "../lib/api";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function blogs({ blogs }) {
  return (
    <div className="bg-custom-black">
      <Head>
        <title>Shiv Dubey - Blogs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#211E27" />
        <meta name="description" content="Programming blogs by Shiv Dubey" />s
      </Head>

      <main className="lg:ml-36 pt-10 text-custom-green min-h-screen container m-auto">
        <nav className="p-2 text-xl">
          <div className=" cursor-pointer">
            <Link href={"/"} passHref>
              <span className="flex items-center">
                <FaArrowLeft className="pr-1" />
                <span className="ml-2">Back to Homepage</span>
              </span>
            </Link>
          </div>
        </nav>
        <div className="py-12">
          <div className="px-6  md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Sharing is Caring
              </h2>
              <p className=" lg:mx-auto lg:w-6/12">
                Hi there! Thank you for checking out my website
                <br />
                I@apos;m working on some blogs that i will soon publish here.
              </p>
            </div>

            {blogs.length > 0 ? (
              blogs.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })
            ) : (
              <ComingSoon />
            )}
          </div>
        </div>
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
