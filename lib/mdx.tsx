import rehypeUnwrapImages from "rehype-unwrap-images";
import type { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";



export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeUnwrapImages],
  },
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
      "font-medium underline decoration-link-decoration underline-offset-4 transition hover:decoration-link-decoration-hover";

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
    <p className="mx-auto my-5 max-w-3xl px-6 text-lg leading-relaxed text-tertiary">{children}</p>
  ),
  h1: ({ children }: ComponentProps<"h1">) => (
    <h1 className="mx-auto mb-6 mt-14 max-w-3xl px-6 text-4xl font-semibold tracking-tight md:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }: ComponentProps<"h2">) => (
    <h2 className="mx-auto mb-5 mt-12 max-w-3xl px-6 text-3xl font-semibold tracking-tight md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentProps<"h3">) => (
    <h3 className="mx-auto mb-4 mt-10 max-w-3xl px-6 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  ul: ({ children }: ComponentProps<"ul">) => (
    <ul className="mx-auto my-6 max-w-3xl list-disc space-y-2 pl-12 pr-6 text-lg leading-relaxed text-tertiary">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentProps<"ol">) => (
    <ol className="mx-auto my-6 max-w-3xl list-decimal space-y-2 pl-12 pr-6 text-lg leading-relaxed text-tertiary">
      {children}
    </ol>
  ),
  blockquote: ({ children }: ComponentProps<"blockquote">) => (
    <blockquote className="mx-auto my-8 max-w-3xl border-l-2 border-strong pl-6 pr-6 text-xl leading-relaxed">
      {children}
    </blockquote>
  ),
};
