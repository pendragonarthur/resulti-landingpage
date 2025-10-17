import HeroSlider from "@/components/HeroSlider";
import Form from "@/components/Form";
import CatalogoComponent from "@/components/Catalogo";
import ServicosComponent from "@/components/Servicos";

export default async function HomePage() {
  console.log("API: ", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main>
      <HeroSlider />
      <ServicosComponent />
      <CatalogoComponent />
      <Form />
    </main>
  );
}
