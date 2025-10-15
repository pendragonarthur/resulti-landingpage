import FormCompra from "@/components/FormCompra";
import { getProdutos, Produto } from "@/helpers/produtos";

export default async function FormularioCompraPage({
  searchParams,
}: {
  searchParams: Promise<{ id: number }>;
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
  const item = produtos.find((p) => p.id === id);

  if (!item) {
    return (
      <section className="h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-600">
          Produto com ID &quot;{id}&quot; não encontrado.
        </p>
      </section>
    );
  }

  return <FormCompra initialProduct={item} searchParams={{ id }} />;
}
