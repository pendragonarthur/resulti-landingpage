export function formatarPreco(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function calcularPrecoPromocional(preco: number, desconto: number) {
  if (!desconto || desconto <= 0) return preco;
  return preco - (preco * desconto) / 100;
}

export function mostrarPrecoExibicao(preco: number, desconto?: number) {
  const precoFinal = desconto
    ? calcularPrecoPromocional(preco, desconto)
    : preco;
  return formatarPreco(precoFinal);
}
