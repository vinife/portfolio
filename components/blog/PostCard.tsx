import Image from "next/image";
import Link from "next/link";
import type { PostDocument } from "@/lib/content";
import { formatDate } from "@/lib/content";

type PostCardProps = {
  post: PostDocument;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="grid gap-5 border-b border-zinc-200 py-8 md:grid-cols-[180px_1fr]">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-100"
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 180px"
            className="object-cover"
          />
        ) : null}
      </Link>
      <div>
        {post.publishedAt ? (
          <time className="text-sm text-zinc-500" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        ) : null}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            {post.title}
          </h2>
        </Link>
        <p className="mt-3 leading-7 text-zinc-600">{post.description}</p>
      </div>
    </article>
  );
}
