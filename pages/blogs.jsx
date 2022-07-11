import Head from "next/head";
import Script from "next/script";
import BlogCard from "./../components/blogs/BlogCard";
import BlogFilter from "../components/blogs/BlogFilter";

function blogs({ data }) {
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
      <div className="md:ml-36 pt-10 max-w-3xl text-custom-green min-h-screen">
        <BlogFilter />
        <div className="space-y-2 p-2">
          {data.blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = {
    blogs: [
      {
        id: 1,
        author: "Shiv Dubey",
        authorImageSrc: "https://bulma.io/images/placeholders/128x128.png",
        datePublished: new Date().toJSON(),
        title: "How to Learn Programming",
        numOfLikes: 24,
        numOfComments: 7,
      },
      {
        id: 2,
        author: "Shiv Dubey",
        authorImageSrc: "https://bulma.io/images/placeholders/128x128.png",
        datePublished: new Date().toJSON(),
        title: "How to Learn Programming",
        numOfLikes: 24,
        numOfComments: 7,
      },
    ],
  };
  return { props: { data } };
}

export default blogs;
