/* eslint-disable @typescript-eslint/no-explicit-any */

import { Artigo, getArtigoPorSlug } from "@/helpers/conteudo";
import Link from "next/link";
import Image from "next/image";

export default async function ArtigoPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const artigo: Artigo = await getArtigoPorSlug(params.slug);

  if (!artigo) {
    return (
      <main className="bg-[#0D2B4F] flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-xl">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block bg-white text-[#0D2B4F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Voltar para o Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {artigo.Imagem && (
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
          <Image
            src={`http://localhost:1337${artigo.Imagem.url}`}
            alt={artigo.Imagem.alternativeText || artigo.Titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg max-w-4xl"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              {artigo.Titulo}
            </h1>
            <p
              className="text-lg md:text-xl text-gray-200 drop-shadow-md"
              style={{ fontFamily: "var(--font-lato)" }}
            ></p>
          </div>
        </div>
      )}
      <article className="container mx-auto px-4 py-16 md:py-20">
        <div
          className="prose lg:prose-xl max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          {artigo.Conteudo &&
            artigo.Conteudo.map((bloco: any, index: number) => {
              if (bloco.type === "paragraph") {
                return (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {bloco.children.map((child: any, childIndex: number) => (
                      <span
                        key={childIndex}
                        className={child.bold ? "font-bold" : ""}
                      >
                        {child.text}
                      </span>
                    ))}
                  </p>
                );
              } else if (bloco.type === "heading" && bloco.level === 2) {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold text-[#0D2B4F] mt-10 mb-6"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    {bloco.children.map((child: any, childIndex: number) => (
                      <span
                        key={childIndex}
                        className={child.bold ? "font-bold" : ""}
                      >
                        {child.text}
                      </span>
                    ))}
                  </h2>
                );
              } else if (bloco.type === "heading" && bloco.level === 3) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-semibold text-[#0D2B4F] mt-8 mb-4"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    {bloco.children.map((child: any, childIndex: number) => (
                      <span
                        key={childIndex}
                        className={child.bold ? "font-bold" : ""}
                      >
                        {child.text}
                      </span>
                    ))}
                  </h3>
                );
              }
              return null;
            })}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-block bg-[#0D2B4F] hover:bg-[#F97316] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            &#x2190; Voltar para todos os artigos
          </Link>
        </div>
      </article>
    </main>
  );
}
