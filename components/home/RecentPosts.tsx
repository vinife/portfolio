import Link from "next/link";
import { PostList } from "@/components/blog/PostList";
import type { PostDocument } from "@/lib/content";

type RecentPostsProps = {
  posts: PostDocument[];
};

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mb-2 flex items-end justify-between gap-6">
        <div>
          <p className="font-sans text-sm font-semibold uppercase text-muted">
            Blog
          </p>
          <h2 className="font-heading mt-2 text-4xl tracking-tight">
            Posts recentes
          </h2>
        </div>
        <Link className="text-sm font-medium" href="/blog">
          Ver todos
        </Link>
      </div>

      <PostList posts={posts} />
    </section>
  );
}
