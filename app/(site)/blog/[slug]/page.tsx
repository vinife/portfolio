import { notFound } from "next/navigation";
import { PostContent } from "@/components/blog/PostContent";
import { getPostBySlug, getStaticSlugs } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticSlugs("posts");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="flex-1">
      <PostContent post={post} />
    </main>
  );
}
