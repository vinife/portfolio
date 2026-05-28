import { PostList } from "@/components/blog/PostList";
import { getPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase text-zinc-500">Blog</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-zinc-950">
          Posts
        </h1>
      </header>

      <PostList posts={posts} />
    </main>
  );
}
