import Link from "next/link";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import type { ProjectDocument } from "@/lib/content";

type FeaturedProjectsProps = {
  projects: ProjectDocument[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase text-muted">
            Portfolio
          </p>
          <h2 className="font-heading mt-2 text-4xl tracking-tight">
            Projetos em destaque
          </h2>
        </div>
        <Link className="text-sm font-medium" href="/projects">
          Ver todos
        </Link>
      </div>

      <ProjectGrid projects={projects} featured columns="three" />
    </section>
  );
}
