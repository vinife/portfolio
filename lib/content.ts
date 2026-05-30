import { getSingletonBySlug, load } from "outstatic/server";

export type ProjectDocument = {
  collection: "projects";
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
  techStack?: string;
  liveUrl?: string;
  githubUrl?: string;
  publishedAt?: string;
  status: "published" | "draft";
  content?: string;
};

export type PostDocument = {
  collection: "posts";
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
  publishedAt?: string;
  status: "published" | "draft";
  content?: string;
};

export type ProfileDocument = {
  name?: string;
  title?: string;
  bio?: string;
};

type CollectionName = "projects" | "posts";

async function getDb() {
  try {
    return await load();
  } catch (error) {
    console.error("Erro ao carregar DB:", error);
    return null;
  }
}

export function splitTechStack(techStack?: string) {
  return (techStack ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export async function getProfile() {
  try {
    return getSingletonBySlug("profile", [
      "name",
      "title",
      "bio",
    ]) as ProfileDocument | null;
  } catch {
    return null;
  }
}

export async function getProjects(limit?: number) {
  const db = await getDb();
  if (!db) return [];
  // if (!db) {
  //   console.log("DB não carregou");
  //   return [];
  // }

  let query = db
    .find<ProjectDocument>(
      {
        collection: "projects",
        status: "published",
      },
      [
        "slug",
        "title",
        "description",
        "coverImage",
        "techStack",
        "liveUrl",
        "githubUrl",
        "publishedAt",
        "status",
      ],
    )
    .sort({ publishedAt: -1 });
  // .toArray();
  // console.log("Projetos encontrados:", query.length, query);

  if (limit) query = query.limit(limit);

  return query.toArray();
}

export async function getPosts(limit?: number) {
  const db = await getDb();
  if (!db) return [];
  const all = await db.find({}, ["slug", "title"]).toArray();
  console.log("TUDO no banco:", JSON.stringify(all, null, 2));

  let query = db
    .find<PostDocument>(
      {
        collection: "posts",
        status: "published",
      },
      ["slug", "title", "description", "coverImage", "publishedAt", "status"],
    )
    .sort({ publishedAt: -1 });

  if (limit) query = query.limit(limit);
  console.log("Post encontrados:", await query.toArray());

  return query.toArray();
}

export async function getProjectBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;

  return db
    .find<ProjectDocument>(
      { collection: "projects", slug, status: "published" },
      [
        "slug",
        "title",
        "description",
        "coverImage",
        "techStack",
        "liveUrl",
        "githubUrl",
        "publishedAt",
        "status",
        "content",
      ],
    )
    .first();
}

export async function getPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;

  return db
    .find<PostDocument>({ collection: "posts", slug, status: "published" }, [
      "slug",
      "title",
      "description",
      "coverImage",
      "publishedAt",
      "status",
      "content",
    ])
    .first();
}

export async function getStaticSlugs(collection: CollectionName) {
  const db = await getDb();
  if (!db) return [];

  const documents = await db
    .find<{ slug: string }>({ collection, status: "published" }, ["slug"])
    .toArray();

  return documents.map((document) => ({ slug: document.slug }));
}
