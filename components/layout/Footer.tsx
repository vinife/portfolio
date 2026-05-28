import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <span>Conteudo gerenciado com Outstatic.</span>
        <div className="flex gap-5">
          <Link className="hover:text-zinc-950" href="/projects">
            Projetos
          </Link>
          <Link className="hover:text-zinc-950" href="/blog">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
