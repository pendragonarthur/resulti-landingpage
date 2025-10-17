/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";

import { getServicoPorSlug, Servico } from "@/helpers/servicos";
import { API_URL } from "@/helpers/api";

export default async function ServicoDetalhesPage({
  params,
}: {
  params: { slug: string };
}) {
  const servico: Servico = await getServicoPorSlug(params.slug);

  if (!servico) {
    return (
      <main className="bg-[#0D2B4F] flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <p className="text-xl">
            O serviço que você procura não existe ou foi removido.
          </p>
          <Link
            href="/servicos"
            className="mt-8 inline-block bg-white text-[#0D2B4F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Voltar para Serviços
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0D2B4F]">
      {servico.Imagem && (
        <div className="relative w-full  md:h-[300px] lg:h-[600px] mb-12 rounded-lg">
          <Image
            src={`${API_URL}${servico.Imagem.url}`}
            alt={servico.Imagem.alternativeText || servico.Nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-white text-7xl font-bold text-center"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          {servico.Nome.toUpperCase()}
        </h1>
      </div>
      <div className="container mx-auto w-full px-4 text-white">
        <div
          className="columns-1 md:columns-2  gap-20 mx-auto py-16"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          {servico.Descricao.map((bloco: any, index: number) => {
            return (
              <p
                key={index}
                className="text-xl text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {bloco.children[0].text} <br />
              </p>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contato"
            className="inline-block bg-[#F97316] text-white hover:text-[#F97316] px-8 py-4 rounded-lg font-bold text-xl hover:bg-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Solicite um Orçamento
          </Link>
        </div>
      </div>
    </main>
  );
}
