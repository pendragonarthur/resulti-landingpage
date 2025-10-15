export interface Produto {
  id: number;
  Nome: string;
  Slug: string;
  Descricao: any[];
  Imagem: {
    url: string;
    alternativeText: string;
  };
  Preco: number;
  Promocao: number;
}

// ----------------------

export async function getProdutos() {
  const query = new URLSearchParams({
    populate: "Imagem",
  }).toString();
  const url = `http://localhost:1337/api/produtos?${query}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Falha ao encontrar produtos.");
  }
  const dados = await res.json();
  return dados.data;
}

// ----------------------

export async function getProdutoPorSlug(slug: string): Promise<Produto> {
  const query = new URLSearchParams({
    "filters[Slug][$eq]": slug,
    populate: "*",
  }).toString();

  const url = `http://localhost:1337/api/produtos?${query}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.log(
      `Erro ao buscar produto com slug "${slug}": ${res.status} ${res.statusText}`
    );
    throw new Error("Falha ao buscar o produto");
  }

  const dados = await res.json();
  return dados.data[0];
}
