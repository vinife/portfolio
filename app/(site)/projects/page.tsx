import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projetos",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase text-zinc-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-zinc-950">
          Projetos
        </h1>
      </header>

      <ProjectGrid projects={projects} />
    </main>
  );
}
