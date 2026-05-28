import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Portfolio
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link className="transition hover:text-zinc-950" href="/projects">
            Projetos
          </Link>
          <Link className="transition hover:text-zinc-950" href="/blog">
            Blog
          </Link>
          <Link className="transition hover:text-zinc-950" href="/outstatic">
            CMS
          </Link>
        </div>
      </nav>
    </header>
  );
}
