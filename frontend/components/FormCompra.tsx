"use client";

import { useState, useEffect, FocusEvent, ChangeEvent } from "react";
import { Produto } from "@/helpers/produtos";
import {
  formatarPreco,
  mostrarPrecoExibicao,
  calcularPrecoPromocional,
} from "@/helpers/precos";

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export default function FormCompra({
  searchParams,
  initialProduct,
}: {
  searchParams: { id?: string };
  initialProduct?: Produto;
}) {
  const [userData, setUserData] = useState<UserData>({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [quantidade, setQuantidade] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);

  const item = initialProduct;

  useEffect(() => {
    if (item && item.Preco) {
      const precoUnitario = parseFloat(item.Preco.toString());
      setTotal(precoUnitario * quantidade);
    }
  }, [quantidade, item]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 10) {
      value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d\d)(\d+)/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }
    setUserData((prev) => ({ ...prev, telefone: value }));
  };

  const handleCepBlur = async (e: FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();

        if (data.erro) {
          alert("CEP não encontrado.");
          return;
        }

        setUserData((prev) => ({
          ...prev,
          logradouro: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          estado: data.uf || "",
        }));
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Erro ao buscar CEP. Tente novamente.");
      }
    }
  };

  if (!item) {
    return (
      <section className="py-20 bg-gray-400 flex justify-center items-center h-screen">
        <p className="text-xl font-bold text-red-700">
          Produto não encontrado.
        </p>
      </section>
    );
  }

  const precoExibicao = mostrarPrecoExibicao(item.Preco);

  return (
    <section
      className="py-20 bg-gray-400"
      style={{ fontFamily: "var(--font-lato)" }}
    >
      <form className="container mx-auto max-w-[75%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 px-4 ">
        <div className="flex flex-col space-y-4">
          <h2 className="font-poppins text-2xl font-semibold text-resoluti-primary border-b pb-2 mb-2">
            Seus Dados
          </h2>

          <div>
            <label
              htmlFor="nome"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              value={userData.nome}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              value={userData.telefone}
              onChange={handlePhoneChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div className="pt-4">
            <h3 className="font-poppins text-xl font-semibold text-resoluti-primary mb-2">
              Endereço de Entrega
            </h3>
          </div>

          <div>
            <label
              htmlFor="cep"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              CEP
            </label>
            <input
              type="text"
              id="cep"
              value={userData.cep}
              onChange={handleChange}
              onBlur={handleCepBlur}
              placeholder="00000-000"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div>
            <label
              htmlFor="logradouro"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Rua / Logradouro
            </label>
            <input
              type="text"
              id="logradouro"
              value={userData.logradouro}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="numero"
                className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
              >
                Número
              </label>
              <input
                type="text"
                id="numero"
                value={userData.numero}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="complemento"
                className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
              >
                Complemento (Opcional)
              </label>
              <input
                type="text"
                id="complemento"
                value={userData.complemento}
                onChange={handleChange}
                placeholder="Apto, Bloco, etc."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="bairro"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              value={userData.bairro}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cidade"
                className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
              >
                Cidade
              </label>
              <input
                type="text"
                id="cidade"
                value={userData.cidade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
              />
            </div>
            <div>
              <label
                htmlFor="estado"
                className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
              >
                Estado
              </label>
              <select
                id="estado"
                value={userData.estado}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary bg-white"
              >
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="font-poppins text-2xl font-semibold text-resoluti-primary border-b pb-2 mb-2">
            Detalhes do Pedido
          </h2>

          <p className="font-lato">
            Você está comprando:{" "}
            <span className="font-semibold">{item.Nome}</span>
          </p>

          <div>
            <label
              htmlFor="produto"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Produto
            </label>
            <input
              type="text"
              id="produto"
              value={item.Nome}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="quantidade"
              className="block font-lato text-sm font-medium text-resoluti-text-light mb-1"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
              min="1"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resoluti-secondary"
            />
          </div>

          <div className="pt-4">
            <p className="font-poppins text-xl font-bold text-resoluti-primary">
              Total: {formatarPreco(total)}
            </p>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="inline-block bg-[#0D2B4F] cursor-pointer hover:opacity-90 text-white font-poppins font-bold py-3 px-12 rounded-lg transition-opacity duration-300 text-lg"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
