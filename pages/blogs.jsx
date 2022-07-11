import Head from "next/head";
import Script from "next/script";
import BlogCard from "./../components/blogs/BlogCard";
import BlogFilter from "../components/blogs/BlogFilter";

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
      <main className="lg:ml-36 pt-10 text-custom-green min-h-screen flex">
        <section className="flex-grow max-w-3xl">
          <BlogFilter />
          <div className="space-y-2 p-2">
            {blogs.map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })}
          </div>
        </section>
        <aside className="hidden md:block flex-grow max-w-sm mt-12">
          <div className="bg-custom-charcoal rounded-lg mt-1">
            <h1 className="px-4 py-2 font-semibold text-lg">Other Topics</h1>
            <div className="flex p-2 flex-wrap">
              <div className="px-4 m-1 py-1 border border-custom-green rounded-2xl">Programming</div>
              <div className="px-4 m-1 py-1 border border-custom-green rounded-2xl">React</div>
              <div className="px-4 m-1 py-1 border border-custom-green rounded-2xl">Next</div>
              <div className="px-4 m-1 py-1 border border-custom-green rounded-2xl">JavaScript</div>
            </div>
          </div>
        </aside>
      </main>
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
        tags: [
          { displayValue: "programming" },
          { displayValue: "react" },
          { displayValue: "next" },
          { displayValue: "js" },
        ],
      },
      {
        id: 2,
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
      },
    ],
  };
  return { props: { blogs: data.blogs } };
}

export default blogs;
