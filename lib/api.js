import fs from "fs";
import { join } from "path";
import markdownToHtml from "./markdownToHtml";

const blogsDir = join(process.cwd(), "_blogs");

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsedData = markdownToHtml(fileContents);

  return parsedData;
}
