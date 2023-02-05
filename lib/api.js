import fs from "fs";
import { join } from "path";
import markdownToHtml from "./markdownToHtml";

const blogsDir = join(process.cwd(), "_blogs");

export async function getBlogBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, "");
  let parsedData = null;
  const fullPath = join(blogsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  parsedData = await markdownToHtml(fileContents);
  parsedData.data.slug = slug;
  return parsedData;
}

export function getBlogSlugs() {
  let slugs = [];
  if (fs.existsSync(blogsDir)) {
    slugs = fs.readdirSync(blogsDir);
  }
  return slugs.map((slug) => slug.replace(/\.md$/, ""));
}

export async function getAllBlogs() {
  let blogSlugs = getBlogSlugs();
  const blogs = [];

  for (let blogSlug of blogSlugs) {
    const blog = await getBlogBySlug(blogSlug);
    blogs.push(blog);
  }
  return blogs;
}
