import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { RecentPosts } from "@/components/home/RecentPosts";
import { getPosts, getProfile, getProjects } from "@/lib/content";

export default async function Home() {
  const [profile, projects, posts] = await Promise.all([
    getProfile(),
    getProjects(3),
    getPosts(2),
  ]);

  return (
    <main>
      <Hero profile={profile} />
      <FeaturedProjects projects={projects} />
      <RecentPosts posts={posts} />
    </main>
  );
}
