export interface Artigo {
  id: number;
  Titulo: string;
  Slug: string;
  publishedAt: string;
  Imagem: {
    url: string;
    alternativeText: string | null;
  };
  Conteudo: any[];
}

export async function getArtigos() {
  const query = new URLSearchParams({
    populate: "Imagem",
    "sort[0]": "publishedAt:desc",
  }).toString();

  const url = `http://localhost:1337/api/artigos?${query}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Falha ao buscar artigos");
  }
  const dados = await res.json();
  return dados.data;
}

export async function getArtigoPorSlug(slug: string) {
  const query = new URLSearchParams({
    "filters[Slug][$eq]": slug,
    populate: "*",
  }).toString();

  const url = `http://localhost:1337/api/artigos?${query}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao buscar o artigo");

  const dados = await res.json();
  return dados.data[0];
}
