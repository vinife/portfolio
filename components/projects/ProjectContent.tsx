import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import type { ProjectDocument } from "@/lib/content";
import { splitTechStack } from "@/lib/content";

type ProjectContentProps = {
  project: ProjectDocument;
};

export const mdxComponents = {
  img: ({
    src,
    alt,
  }: ComponentProps<"img"> & { src?: string; alt?: string }) => {
    if (!src) return null;

    return (
      <div className="my-10 flex w-full justify-center">
        <Image
          src={src}
          alt={alt ?? ""}
          width={900}
          height={600}
          className="h-auto w-full max-w-[900px] rounded-lg object-cover"
        />
      </div>
    );
  },
  a: ({ href, children }: ComponentProps<"a">) => {
    if (!href) return <>{children}</>;

    const className =
      "font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950";

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  },
  p: ({ children }: ComponentProps<"p">) => (
    <p className="my-5 text-lg leading-relaxed text-zinc-700">{children}</p>
  ),
  h1: ({ children }: ComponentProps<"h1">) => (
    <h1 className="mb-6 mt-14 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }: ComponentProps<"h2">) => (
    <h2 className="mb-5 mt-12 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentProps<"h3">) => (
    <h3 className="mb-4 mt-10 text-2xl font-semibold tracking-tight text-zinc-950">
      {children}
    </h3>
  ),
  ul: ({ children }: ComponentProps<"ul">) => (
    <ul className="my-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-zinc-700">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentProps<"ol">) => (
    <ol className="my-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-zinc-700">
      {children}
    </ol>
  ),
  blockquote: ({ children }: ComponentProps<"blockquote">) => (
    <blockquote className="my-8 border-l-2 border-zinc-950 pl-6 text-xl leading-relaxed text-zinc-800">
      {children}
    </blockquote>
  ),
};

export function ProjectContent({ project }: ProjectContentProps) {
  const techStack = splitTechStack(project.techStack);

  return (
    <article>
      <header className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-zinc-500">
            Projeto
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-xl leading-9 text-zinc-600">
            {project.description}
          </p>
        </div>

        {techStack.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700"
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
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-zinc-100">
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
        <div className="mx-auto w-full max-w-5xl py-12">
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>
      ) : null}
    </article>
  );
}
