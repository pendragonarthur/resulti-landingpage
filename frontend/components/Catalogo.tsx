import CatalogoCarrossel from "@/components/CatalogoCarrossel";
import { Produto, getProdutos } from "@/helpers/produtos";

export default async function CatalogoComponent() {
  const produtos: Produto = await getProdutos();

  return (
    <section className="bg-[#F4F7FB] py-20">
      <div className=" container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-[#122A43]"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Compressores de Ponta Exclusivos
        </h2>
        <CatalogoCarrossel produtos={[produtos]} />
      </div>
    </section>
  );
}
