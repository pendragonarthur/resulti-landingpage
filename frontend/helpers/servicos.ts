import { API_URL } from "./api";

export interface Servico {
  id: number;
  Nome: string;
  Descricao: any[];
  Resumo: string;
  Slug: string;
  Imagem: {
    url: string;
    alternativeText: string;
  };
}

export async function getServicoPorSlug(slug: string): Promise<Servico> {
  const query = new URLSearchParams({
    "filters[Slug][$eq]": slug,
    populate: "*",
  }).toString();

  const url = `${API_URL}/api/servicos?${query}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.log(
      `Erro ao buscar serviço com slug "${slug}": ${res.status} ${res.statusText}`
    );
    throw new Error("Falha ao encontrar serviços");
  }
  const dados = await res.json();
  return dados.data[0];
}

export async function getServicos(): Promise<Servico[]> {
  const url = `${API_URL}/api/servicos?fields[0]=Nome&fields[1]=Slug`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.log("Erro ao carregar serviços para o Header");
    return [];
  }

  const dados = await res.json();
  return dados.data.map((servico: any) => ({
    id: servico.id,
    Nome: servico.Nome,
    Slug: servico.Slug,
  }));
}
