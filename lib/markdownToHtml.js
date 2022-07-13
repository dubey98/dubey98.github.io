import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import extract from "remark-extract-frontmatter";
import yaml from "yaml";

export default async function markdownToHtml(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(extract, { yaml: yaml.parse })
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return file;
}
