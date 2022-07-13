import fs from "fs";
import { join } from "path";
import markdownToHtml from "./markdownToHtml";

const blogsDir = join(process.cwd(), "_blogs");

export async function getBlogBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, "");

  const fullPath = join(blogsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const parsedData = await markdownToHtml(fileContents);
  parsedData.data.slug = slug;

  return parsedData;
}

export function getBlogSlugs() {
  const slugs = fs.readdirSync(blogsDir);
  return slugs;
}

export async function getAllBlogs() {
  const blogSlugs = getBlogSlugs();
  const blogs = [];

  for (let blogSlug of blogSlugs) {
    const blog = await getBlogBySlug(blogSlug);
    blogs.push(blog);
  }
  return blogs;
}
