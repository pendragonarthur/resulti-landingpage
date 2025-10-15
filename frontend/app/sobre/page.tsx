import IconeEmpresa from "@/components/icons/IconeEmpresa";
import IconeFaturamento from "@/components/icons/IconeFaturamento";
import IconeContrato from "@/components/icons/IconeContrato";
import IconeColaboradores from "@/components/icons/IconeColaboradores";

import Image from "next/image";

import Form from "@/components/Form";

export default function SobrePage() {
  return (
    <main className="bg-white">
      <div>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1
            className="text-5xl font-bold text-[#0D2B4F]"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Quem Nós Somos?
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="font-bold text-3xl text-[#0D2B4F]"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              O AR QUE MOVE SUA EMPRESA COMEÇA AQUI.
            </h3>
            <p
              className="text-[#4B5563] font-semibold text-xl mt-6 leading-relaxed"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Na Resulti, acreditamos que eficiência é o motor de toda operação
              industrial. Por isso, há mais de 20 anos, nos especializamos em
              oferecer soluções completas em compressores industriais, peças e
              serviços que garantem a máxima performance, economia e segurança
              para o seu negócio.
              <br />
              <br /> Mais do que vender equipamentos, entregamos confiança e
              inovação. Atuamos com consultoria técnica, manutenção programada e
              planos personalizados que atendem às necessidades específicas de
              cada cliente. Nosso compromisso é assegurar que cada sistema opere
              com confiabilidade, produtividade e previsibilidade.
              <br />
              <br />
              Nosso diferencial está na forma de atender: unimos conhecimento
              técnico, experiência de mercado e proximidade com o cliente para
              construir relações sólidas e de longo prazo. Com visão de futuro,
              investimos constantemente em tecnologia e conectividade, trazendo
              ao mercado soluções modernas que acompanham a evolução da
              indústria. Se a sua empresa busca eficiência e confiança em ar
              comprimido, encontrou o parceiro certo.
            </p>
          </div>
          <div className="ml-20 w-full rounded-lg">
            <Image
              src={"/industry.jpg"}
              alt="Imagem da industria"
              width={600}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div
          className="flex text-black w-full gap-8 mt-40 justify-evenly mb-20"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div className="flex flex-col items-center shadow-lg bg-[#c0c2e270] rounded-lg p-8">
            <IconeColaboradores />
            <h1 className="font-bold text-4xl mt-5 text-[#0D2B4F]">
              1200 colaboradores
            </h1>
            <p className="text-xl">à disposição.</p>
          </div>
          <div className="flex flex-col items-center shadow-lg bg-[#c0c2e270] rounded-lg p-8 ">
            <IconeFaturamento />
            <h1 className="font-bold text-4xl mt-5 text-[#0D2B4F]">
              +20 milhões
            </h1>
            <p className="text-xl">de faturamento anual.</p>
          </div>
          <div className="flex flex-col items-center shadow-lg bg-[#c0c2e270] rounded-lg p-8">
            <IconeEmpresa />
            <h1 className="font-bold text-4xl mt-5 text-[#0D2B4F]">+50 mil</h1>
            <p className="text-xl">empresas atendidas.</p>
          </div>
          <div className="flex flex-col items-center shadow-lg bg-[#c0c2e270] rounded-lg p-8">
            <IconeContrato />
            <h1 className="font-bold text-4xl mt-5 text-[#0D2B4F]">
              +2000 contratos
            </h1>
            <p className="text-xl">ativos.</p>
          </div>
        </div>
      </div>
      <Form />
    </main>
  );
}
