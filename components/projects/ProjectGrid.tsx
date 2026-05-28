import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ProjectDocument } from "@/lib/content";

type ProjectGridProps = {
  projects: ProjectDocument[];
  featured?: boolean;
  columns?: "two" | "three";
};

export function ProjectGrid({
  projects,
  featured = false,
  columns = "two",
}: ProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <div
      className={
        columns === "three"
          ? "grid gap-6 md:grid-cols-3"
          : "grid gap-6 md:grid-cols-2"
      }
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} featured={featured} />
      ))}
    </div>
  );
}
