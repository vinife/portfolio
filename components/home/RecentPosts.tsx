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
          <p className="text-sm font-semibold uppercase text-zinc-500">Blog</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            Posts recentes
          </h2>
        </div>
        <Link className="text-sm font-medium text-zinc-950" href="/blog">
          Ver todos
        </Link>
      </div>

      <PostList posts={posts} />
    </section>
  );
}
