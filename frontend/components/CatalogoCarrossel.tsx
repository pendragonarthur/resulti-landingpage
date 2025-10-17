"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Produto } from "@/helpers/produtos";
import { API_URL } from "@/helpers/api";

export default function CatalogoCarrossel({
  produtos,
}: {
  produtos: Produto[];
}) {
  const formatarPreco = (valor: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);

  const calcularPrecoPromocional = (preco: number, desconto: number) => {
    if (!desconto || desconto <= 0) return preco;
    return preco - (preco * desconto) / 100;
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {produtos.map((produto) => {
          const imageUrl = `${API_URL}${produto.Imagem.url}`;
          const imageAlt = produto.Imagem.alternativeText;

          return (
            <SwiperSlide key={produto.id}>
              <Link
                href={`/catalogo/${produto.Slug}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden group hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1E5A9A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full
                               bg-gradient-to-t from-[#1E5A9A] to-transparent opacity-0 group-hover:opacity-100
                               transition-all duration-500 ease-in-out flex flex-col items-start p-4"
                  >
                    <h4
                      className="text-[#122A43] text-2xl font-bold group-hover:scale-105 transition-transform duration-300 px-1"
                      style={{ fontFamily: "var(--font-exo2)" }}
                    >
                      {produto.Nome}
                    </h4>
                    <p
                      className="text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {produto.Descricao[0].children[0].text}
                    </p>
                    <button
                      className="flex items-center text-lg font-semibold mt-2 px-4 py-2 bg-[#F97316] text-white rounded-md w-fit
                                        transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                        transition-all duration-500 ease-in-out delay-400 hover:bg-[#E55F00]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Compre Agora! <FaArrowRight className="ml-2 text-base" />
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  {produto.Promocao > 0 ? (
                    <div className="items-center">
                      <p className="line-through text-gray-400">
                        {formatarPreco(produto.Preco)}
                      </p>
                      <p
                        className="text-red-600 font-bold text-xl"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {formatarPreco(
                          calcularPrecoPromocional(
                            produto.Preco,
                            produto.Promocao
                          )
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="items-center">
                      {" "}
                      <p className="text-xl font-semibold text-[#1E5A9A] mt-2">
                        {formatarPreco(produto.Preco)}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
