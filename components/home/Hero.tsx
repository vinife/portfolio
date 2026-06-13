import type { ProfileDocument } from "@/lib/content";

type HeroProps = {
  profile: ProfileDocument | null;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section className="border-b border-primary bg-bg-secondary">
      <div className="mx-auto grid min-h-[72svh] w-full max-w-6xl content-center gap-8 px-6 py-24">
        {profile?.name ? (
          <p className="text-sm font-semibold uppercase text-muted">
            {profile.name}
          </p>
        ) : null}
        <div className="max-w-4xl">
          {profile?.title ? (
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              {profile.title}
            </h1>
          ) : null}
          {profile?.bio ? (
            <p className="mt-8 max-w-2xl text-xl leading-9">{profile.bio}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
