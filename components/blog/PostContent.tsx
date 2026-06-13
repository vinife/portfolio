import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/lib/content";
import type { PostDocument } from "@/lib/content";

import { mdxOptions, mdxComponents } from "@/lib/mdx";

type PostContentProps = {
  post: PostDocument;
};

export function PostContent({ post }: PostContentProps) {
  return (
    <article>
      <header className="mx-auto w-full max-w-4xl px-6 py-16">
        {post.publishedAt ? (
          <time className="text-sm text-muted" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        ) : null}
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-tertiary">
          {post.description}
        </p>
      </header>

      {post.coverImage ? (
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <Image
              src={post.coverImage}
              alt=""
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}

      {post.content ? (
        <div className="mx-auto w-full max-w-3xl py-10">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={mdxOptions}
          />
        </div>
      ) : null}
    </article>
  );
}
