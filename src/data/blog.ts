import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeSlug)
    .use(
      rehypeAutolinkHeadings as any,
      {
        behavior: "append" as const,
        properties: {
          class: "anchor",
          ariaHidden: true,
          tabIndex: -1,
        },
      },
    )
    .use(rehypeExternalLinks as any, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
    })
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        a: [
          ...(defaultSchema.attributes?.a ?? []),
          ["href"],
          ["target"],
          ["rel"],
          ["ariaHidden"],
          ["tabIndex"],
        ],
        "*": [
          ...(defaultSchema.attributes?.["*"] ?? []),
          ["className"],
          ["id"],
          ["class"],
          ["ariaHidden"],
          ["tabIndex"],
        ],
        code: [
          ...(defaultSchema.attributes?.code ?? []),
          ["className"],
          ["data-theme"],
          ["data-line-numbers"],
          ["data-line-numbers-max-digits"],
        ],
        span: [
          ...(defaultSchema.attributes?.span ?? []),
          ["className"],
          ["data-theme"],
          ["data-line"],
        ],
      },
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

export async function getBlogPostMetadatas(): Promise<
  Array<{ metadata: Metadata; slug: string }>
> {
  const dir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles
    .map((file) => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data: metadata } = matter(source);
      return { metadata: metadata as Metadata, slug };
    })
    .sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt).getTime();
      const dateB = new Date(b.metadata.publishedAt).getTime();
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return a.metadata.title.localeCompare(b.metadata.title);
    });
}
