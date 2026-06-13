import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { getProjectBySlug, getStaticSlugs } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticSlugs("projects");
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="flex-1">
      <ProjectContent project={project} />
    </main>
  );
}
