import Image from "next/image";
import Link from "next/link";
import type { PostDocument } from "@/lib/content";
import { formatDate } from "@/lib/content";

type PostCardProps = {
  post: PostDocument;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="grid gap-5 border-b border-primary py-8 last:border-b-0 md:grid-cols-[180px_1fr]">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted"
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
          <time className="text-sm text-muted" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        ) : null}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            {post.title}
          </h2>
        </Link>
        <p className="mt-3 leading-7">{post.description}</p>
      </div>
    </article>
  );
}
