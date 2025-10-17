import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/helpers/api";

import { Artigo, getArtigos } from "@/helpers/conteudo";

export default async function BlogPage() {
  const artigos: Artigo[] = await getArtigos();

  return (
    <main className="min-h-screen bg-[#0D2B4F] py-20">
      <div className="container mx-auto px-4">
        <h1
          className="text-6xl text-white font-bold text-center mb-12"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Blog
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-black">
          {artigos.map((artigo) => {
            const articleDate = new Date(artigo.publishedAt).toLocaleDateString(
              "pt-BR",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            );

            const imageUrl = `${API_URL}${artigo.Imagem.url}`;

            const imageAlt = `Imagem para o artigo ${artigo.Titulo}`;

            return (
              <Link
                href={`/blog/${artigo.Slug}`}
                key={artigo.id}
                className="block bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6" style={{ fontFamily: "var(--font-lato)" }}>
                  <span
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {articleDate}
                  </span>
                  <h2 className="text-2xl font-semibold mt-2 text-[#0D2B4F] group-hover:text-resoluti-secondary transition-colors duration-300">
                    {artigo.Titulo.toUpperCase()}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
