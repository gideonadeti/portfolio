import Image from "next/image";
import { BlogDate } from "@/components/blog-date";
import { BlogComments } from "@/components/blog/blog-comments";
import { BlogStats } from "@/components/blog/blog-stats";
import { getBlogPostMetadatas, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function imageUrl(image: string | undefined): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${DATA.url}${image}`;
}

export async function generateStaticParams() {
  const posts = await getBlogPostMetadatas();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  let post;
  try {
    const { slug } = await params;
    post = await getPost(slug);
  } catch {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      ...(image && {
        images: [{ url: imageUrl(image)! }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [imageUrl(image)!],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  const allMetadatas = await getBlogPostMetadatas();
  const currentIndex = allMetadatas.findIndex((p) => p.slug === slug);

  const previousPost =
    currentIndex > 0 ? allMetadatas[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allMetadatas.length - 1
      ? allMetadatas[currentIndex + 1]
      : null;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: imageUrl(post.metadata.image) ?? `${DATA.url}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${DATA.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Blog"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Blog
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.metadata.title}
        </h1>
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <BlogDate publishedAt={post.metadata.publishedAt} />
          </p>
        </Suspense>
      </div>

      {post.metadata.image && (
        <div className="relative w-full aspect-[800/192] rounded-lg overflow-hidden my-6">
          <Image
            src={imageUrl(post.metadata.image)!}
            alt={post.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article
        className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
      <BlogStats slug={slug} />
      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.metadata.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.metadata.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
      <BlogComments slug={slug} />
    </section>
  );
}
