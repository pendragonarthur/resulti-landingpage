import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import IconeSuporte from "./icons/IconeSuporte";
import IconeCompressor from "./icons/IconeCompressor";
import IconeEntrega from "./icons/IconeEntrega";
import IconeServicos from "./icons/IconeServicos";
import { Servico, getServicos } from "@/helpers/servicos";

const iconMap: { [key: number]: React.ComponentType<{ className?: string }> } =
  {
    24: IconeSuporte,
    25: IconeCompressor,
    26: IconeEntrega,
    27: IconeServicos,
  };

export default async function ServicosComponent() {
  const [servicos] = await Promise.all([getServicos() as Promise<Servico[]>]);

  return (
    <section className="bg-[#F4F7FB] py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl font-bold text-center mb-12 text-[#122A43]"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Nossas <br /> Soluções
        </h2>
        <div className="p-8 flex w-full items-center gap-8">
          <p
            className="text-[#4B5563] text-xl font-semibold"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            quisquam consequatur, non enim iusto molestiae voluptas nam, neque
            ipsa temporibus soluta deserunt sit! Quod tempore, minus natus
            reiciendis amet deleniti officia temporibus doloremque cumque, error
            voluptatem! Nihil ipsam illo iusto amet iure. Dolor veniam debitis
            sequi provident voluptates ea fugiat? <br /> <br /> Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Earum qui, provident
            voluptas asperiores voluptatum iure assumenda at culpa! Quisquam
            porro nulla repellat perferendis mollitia necessitatibus nihil
            veritatis eligendi ipsa. Adipisci?
          </p>
          <Image
            src={`/serviceimage.jpg`}
            alt="Alternative text"
            width={720}
            height={720}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {servicos.map((servico) => {
            const IconComponent = iconMap[servico.id];
            return (
              <div
                key={servico.id}
                className="bg-[#F0F4F8] gap-2 p-12 shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center hover:cursor-pointer 
                       after:content-[''] after:mb-[-12px] after:absolute after:bottom-0 after:left-0 
                       after:w-full after:h-0.5 after:bg-[#0D2B4F] rounded-lg
                       after:origin-center after:scale-x-0 hover:after:scale-x-100
                       after:transition-transform after:duration-300"
              >
                {IconComponent && (
                  <IconComponent className="w-24 h-24 text-[#0D2B4F]" />
                )}
                <h3
                  className="mt-6 text-xl font-semibold text-[#122A43] "
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {servico.Nome}
                </h3>
                <p
                  className="text-md text-[#4B5563]"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {servico.Resumo}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/servicos"
            className="text-[#F97316] font-semibold hover:underline inline-flex items-center text-xl "
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Ver todos os serviços <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
