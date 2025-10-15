/* eslint-disable @typescript-eslint/no-explicit-any */

import { Servico, getServicos } from "@/helpers/servicos";

export default async function ServicosPage() {
  const servicos: Servico[] = await getServicos();

  return (
    <main className="bg-[#0D2B4F]">
      <div>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1
            className="text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Nossos Serviços
          </h1>
        </div>
      </div>

      <div className="container flex px-4 py-16">
        <div className="w-full grid grid-cols-2">
          <div className="flex min-w-350 gap-12">
            {servicos.map((servico) => (
              <section
                key={servico.id}
                className="bg-white p-8 md:p-10 rounded-lg shadow-lg"
              >
                <h2
                  className="text-3xl font-bold mb-6 text-[#1E5A9A]"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {servico.Nome}
                </h2>
                <div
                  className=" lg:prose-xl max-w-none"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {servico.Descricao.map((bloco: any, index: number) => (
                    <p key={index} className="text-black">
                      {bloco.children.map((child: any) => child.text).join("")}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
