export async function generateStaticParams() {
  const url = `http://localhost:1337/api/servicos?fields[0]=Slug`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.log("Falha ao buscar slugs para generateStaticParams");
    throw new Error("Falha na função generateStaticParams");
  }

  const dados = await res.json();
  return dados.data.map((servico: any) => ({
    slug: String(servico.Slug),
  }));
}
