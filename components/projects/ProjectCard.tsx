import Image from "next/image";
import Link from "next/link";
import type { ProjectDocument } from "@/lib/content";
import { splitTechStack } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectDocument;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const techStack = splitTechStack(project.techStack);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
      >
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt=""
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
          {project.description}
        </p>

        {techStack.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          <Link href={`/projects/${project.slug}`}>Detalhes</Link>
        </div>
      </div>
    </article>
  );
}
