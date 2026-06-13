import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ProjectDocument } from "@/lib/content";
import { splitTechStack } from "@/lib/content";

import { mdxOptions, mdxComponents } from "@/lib/mdx";

type ProjectContentProps = {
  project: ProjectDocument;
};

export function ProjectContent({ project }: ProjectContentProps) {
  const techStack = splitTechStack(project.techStack);

  return (
    <article>
      <header className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-muted">Projeto</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-xl leading-9">{project.description}</p>
        </div>

        {techStack.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary px-3 py-1 text-sm font-medium text-tertiary"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver online
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </header>

      {project.coverImage ? (
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <Image
              src={project.coverImage}
              alt=""
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}

      {project.content ? (
        <div className="mx-auto w-full max-w-5xl py-12 ">
          <MDXRemote
            source={project.content}
            components={mdxComponents}
            options={mdxOptions}
          />
        </div>
      ) : null}
    </article>
  );
}
