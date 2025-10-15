import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Servico, getServicos } from "@/helpers/servicos";

export default async function Header() {
  const whatsappNumber = "5547999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const servicos = await getServicos();

  return (
    <header className="bg-[#F0F4F8] shadow-md sticky top-0 z-50 font-semibold">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/">
          <h1
            className="text-5xl font-bold text-[#0D2B4F]"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Resulti.
          </h1>
        </Link>

        <nav
          className="hidden md:flex items-center space-x-8 text-xl relative"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <Link
            href="/sobre"
            className="text-[#0D2B4F] hover:text-[#9CA3AF] transition-colors duration-300"
          >
            Sobre Nós
          </Link>

          <div className="relative group">
            <Link
              href="/#"
              className="text-[#0D2B4F] hover:text-[#9CA3AF] transition-colors duration-300"
            >
              Serviços
            </Link>

            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-hidden w-56 z-50">
              {servicos.length > 0 ? (
                servicos.map((servico) => (
                  <Link
                    key={servico.id}
                    href={`/servicos/${servico.Slug}`}
                    className="block text-lg px-4 py-3 text-[#0D2B4F] hover:bg-[#0D2B4F] hover:text-[#F0F4F8] transition-colors"
                  >
                    {servico.Nome}
                  </Link>
                ))
              ) : (
                <span className="block px-4 py-3 text-gray-500">
                  Nenhum serviço
                </span>
              )}
            </div>
          </div>

          <Link
            href="/blog"
            className="text-[#0D2B4F] hover:text-[#9CA3AF] transition-colors duration-300"
          >
            Conteúdos
          </Link>
          <Link
            href="/catalogo"
            className="text-[#0D2B4F] hover:text-[#9CA3AF] transition-colors duration-300"
          >
            Catálogo
          </Link>
          <Link
            href="/contato"
            className="text-[#0D2B4F] hover:text-[#9CA3AF] transition-colors duration-300"
          >
            Contato
          </Link>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-[#0D2B4F] hover:bg-[#F97316] text-white duration-300 rounded-lg font-bold py-2 px-5 transition-colors"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <FaWhatsapp className="mr-2 h-5 w-5" />
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
