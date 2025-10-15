import Image from "next/image";
import Link from "next/link";

import { getProdutoPorSlug, Produto } from "@/helpers/produtos";

export default async function ProdutoSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const produto: Produto = await getProdutoPorSlug(params.slug);

  if (!produto) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Produto não encontrado.</h1>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/">Home</Link> &gt; <Link href="/produtos">Produtos</Link>{" "}
          &gt; <span className="font-semibold">{produto.Nome}</span>
        </nav>

        <section className="bg-white rounded-xl shadow-xl p-8 lg:p-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative w-full aspect-video md:aspect-square overflow-hidden rounded-lg">
            <Image
              src={`http://localhost:1337${produto.Imagem.url}`}
              alt={produto.Imagem.alternativeText || produto.Nome}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#0D2B4F] mb-6"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              {produto.Nome}
            </h1>
            <p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {produto.Descricao[0].children[0].text}
            </p>

            <Link
              href="/contato"
              className="inline-block bg-[#0D2B4F] text-white hover:bg-[#F97316] px-10 py-4 rounded-lg font-bold text-xl transition-colors duration-300"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Solicite um Orçamento
            </Link>
          </div>
        </section>

        {produto.Descricao && (
          <section className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-16">
            <h2
              className="text-3xl font-bold text-[#0D2B4F] border-b-2  pb-3 mb-8"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Detalhes e Especificações
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start text-lg text-gray-700">
                <svg
                  className="w-6 h-6 mr-3 text-resoluti-secondary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Motor potente para trabalho contínuo em ambientes industriais.
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <svg
                  className="w-6 h-6 mr-3 text-resoluti-secondary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Reservatório de alta capacidade, ideal para grandes demandas de
                ar.
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <svg
                  className="w-6 h-6 mr-3 text-resoluti-secondary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Construção robusta em ferro fundido para maior durabilidade.
              </li>
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
