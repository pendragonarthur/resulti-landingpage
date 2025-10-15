import Link from "next/link";
import Image from "next/image";

import { getProdutos } from "@/helpers/produtos";
import { Produto } from "@/helpers/produtos";
import {
  formatarPreco,
  calcularPrecoPromocional,
  mostrarPrecoExibicao,
} from "@/helpers/precos";

export default async function CatalogoPage() {
  const produtos: Produto[] = await getProdutos();

  return (
    <main className="bg-gray-400 min-h-screen">
      <div>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1
            className="text-5xl font-bold text-[#0d2b4fff]"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Catálogo de Produtos
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => {
            const imageUrl = `http://localhost:1337${produto.Imagem.url}`;
            const imageText = produto.Imagem.alternativeText;

            return (
              <div
                key={produto.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={imageText}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h2
                    className="text-xl font-bold text-[#0D2B4F] group-hover:text-[#1E5A9A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {produto.Nome.toUpperCase()}
                  </h2>
                  {produto.Promocao > 0 ? (
                    <div>
                      <p className="line-through text-black">
                        {formatarPreco(produto.Preco)}
                      </p>
                      <p
                        className="text-red-600 font-bold text-lg"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {mostrarPrecoExibicao(produto.Preco, produto.Promocao)}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p
                        className="text-lg font-bold text-[#1E5A9A] mt-6"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {formatarPreco(produto.Preco)}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-4 justify-center items-center mt-20">
                    <Link
                      href={`/compra?id=${produto.id}`}
                      style={{ fontFamily: "var(--font-lato)" }}
                      className="px-5 py-2 rounded-full text-white bg-[#0D2B4F] font-semibold  shadow-md hover:bg-[#1E5A9A] hover:shadow-lg transition-all duration-300 mt-auto"
                    >
                      Compre já
                    </Link>
                    <Link
                      href={`/catalogo/${produto.Slug}`}
                      style={{ fontFamily: "var(--font-lato)" }}
                      className="px-5 py-2 text-white rounded-full bg-[#0D2B4F] font-semibold shadow-md hover:bg-[#F97316] hover:shadow-lg transition-all duration-300 mt-auto"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
