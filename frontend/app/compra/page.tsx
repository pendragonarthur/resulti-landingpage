import FormCompra from "@/components/FormCompra";
import { getProdutos, Produto } from "@/helpers/produtos";

export default async function FormularioCompraPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;
  if (!id) {
    return (
      <section className="h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-600">
          ID do produto não fornecido.
        </p>
      </section>
    );
  }

  const produtos: Produto[] = await getProdutos();
  const item = produtos.find((p) => p.id.toString() === id);

  if (!item) {
    return (
      <section className="h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-600">
          Produto com ID "{id}" não encontrado.
        </p>
      </section>
    );
  }

  return <FormCompra initialProduct={item} />;
}
