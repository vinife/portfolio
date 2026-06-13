import { PostList } from "@/components/blog/PostList";
import { getPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 flex-1">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase text-muted">Blog</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          Posts
        </h1>
      </header>

      <PostList posts={posts} />
    </main>
  );
}
