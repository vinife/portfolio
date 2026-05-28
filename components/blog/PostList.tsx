import { PostCard } from "@/components/blog/PostCard";
import type { PostDocument } from "@/lib/content";

type PostListProps = {
  posts: PostDocument[];
};

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) return null;

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </>
  );
}
