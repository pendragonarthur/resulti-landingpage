import Link from "next/link";

export default function Form() {
  return (
    <section className="bg-[#0D2B4F] py-26 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Pronto para impulsionar sua indústria?
            </h2>
            <p
              className="text-lg mb-6 max-w-lg font-light text-left"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Nossa equipe de especialistas está à disposição para entender suas
              necessidades e apresentar soluções sob medida.
            </p>
            <p
              className="text-lg mb-8 max-w-lg font-light text-left"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Preencha o formulário ao lado ou fale conosco diretamente.
              Desejamos colaborar com você para o sucesso da sua empresa por
              meio da tecnologia e inovação.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-[#F97316] hover:bg-white text-white hover:text-[#0D2B4F] transition-colors duration-300 font-bold py-3 px-8 rounded-lg text-lg"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Fale com um Especialista!
            </Link>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl text-gray-800">
            <h3
              className="text-3xl font-bold mb-8 text-[#0D2B4F]"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Solicite seu Orçamento
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="sr-only">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Seu nome"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail corporativo"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="sr-only">
                  Whatsapp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  placeholder="(00) 9 0000-0000"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="sr-only">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  placeholder="Empresa"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
              </div>
              <div>
                <label htmlFor="cargo" className="sr-only">
                  Cargo
                </label>
                <select
                  id="cargo"
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316] text-gray-500"
                >
                  <option value="" disabled selected>
                    Selecione seu cargo
                  </option>
                  <option>CEO/Proprietário</option>
                  <option>Gerente</option>
                  <option>Analista</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="segmento" className="sr-only">
                  Segmento
                </label>
                <select
                  id="segmento"
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316] text-gray-500"
                >
                  <option value="" disabled selected>
                    Selecione seu segmento
                  </option>
                  <option>Agronegócio</option>
                  <option>Automotivo</option>
                  <option>Construção Civil</option>
                  <option>Mineração</option>
                  <option>Alimentos e Bebidas</option>
                  <option>Metalurgia</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="funcionarios" className="sr-only">
                  Número de funcionários
                </label>
                <select
                  id="funcionarios"
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316] text-gray-500"
                >
                  <option value="" disabled selected>
                    Nº de funcionários
                  </option>{" "}
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>Mais de 500</option>
                </select>
              </div>
              <div>
                <label htmlFor="area-interesse" className="sr-only">
                  Qual é sua área de interesse?
                </label>
                <select
                  id="area-interesse"
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316] text-gray-500"
                >
                  <option value="" disabled selected>
                    Sua área de interesse
                  </option>{" "}
                  <option>Venda de Compressores</option>
                  <option>Manutenção Preventiva/Corretiva</option>
                  <option>Peças e Acessórios</option>
                  <option>Consultoria e Projetos</option>
                  <option>Outro Serviço</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  placeholder="Sua mensagem..."
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="recaptcha"
                  className="form-checkbox h-5 w-5 text-[#F97316] rounded"
                />
                <label htmlFor="recaptcha" className="text-sm text-gray-700">
                  Eu não sou um robô
                </label>
              </div>
              <div className="md:col-span-2 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacidade"
                  className="form-checkbox h-5 w-5 text-[#F97316] rounded mt-1"
                />
                <label htmlFor="privacidade" className="text-xs text-gray-700">
                  Li e concordo com a{" "}
                  <Link
                    href="/politica-de-privacidade"
                    className="text-[#0D2B4F] hover:underline font-medium"
                  >
                    Política de Privacidade
                  </Link>
                  , que pode usar as informações fornecidas para entrar em
                  contato comigo para ações comerciais. Estou ciente de que
                  posso revogar meu consentimento a qualquer momento enviando um
                  e-mail para{" "}
                  <Link
                    href="mailto:dpo@resulti.com"
                    className="text-[#0D2B4F] hover:underline font-medium"
                  >
                    dpo@resulti.com
                  </Link>
                  .
                </label>
              </div>
              {/* Botão de Envio */}
              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="inline-block bg-[#0D2B4F] hover:bg-[#F97316] text-white hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-lg text-lg"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
