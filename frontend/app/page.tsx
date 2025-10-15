import HeroSlider from "@/components/HeroSlider";
import Form from "@/components/Form";
import CatalogoComponent from "@/components/Catalogo";
import ServicosComponent from "@/components/Servicos";

export default async function HomePage() {
  return (
    <main>
      <HeroSlider />
      <ServicosComponent />
      <CatalogoComponent />
      <Form />
    </main>
  );
}
