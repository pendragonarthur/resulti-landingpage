"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    imageUrl: "/slider1.jpg",
    imageText: "Imagem 1",
    title: "RESULTI | Mais de 20 anos entregando compressores de ponta!",
    subtitle:
      "Especialistas em manutenções e vendas de compressores, peças e rede PPR.",
    buttonText: "Consulte nossas soluções!",
    buttonLink: "/servicos",
  },
  {
    imageUrl: "/slider2.jpeg",
    imageText: "Imagem 2",
    title: "Locação de Compressores Modernos",
    subtitle:
      "Soluções flexívveis e de alta performance para a sua necessidade de ar comprimido.",
    buttonText: "Ver Opções de Locação",
    buttonLink: "/catalogo",
  },
  {
    imageUrl: "/slider3.jpg",
    imageText: "Imagem 3",
    title: "Peças e Acessórios Originais",
    subtitle:
      "Um catálogo completo com as melhores peças para garantir a performance do seu sistema.",
    buttonText: "Consultar Peças",
    buttonLink: "/catalogo",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[900px] text-white bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full h-full bg-cover bg-center
            transition-opacity duration-1000 ease-in-out
            ${currentSlide === index ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.imageText}
            fill
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gray-900/50"></div>
        </div>
      ))}

      <div className="flex flex-col items-start justify-center relative container mx-auto px-4 h-full z-10 text-left space-y-4">
        <h1
          className="text-6xl font-semibold max-w-4xl text-white p-6 bg-[#F97316]/60 rounded-xl"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          {slides[currentSlide].title}
        </h1>
        <p className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
          {slides[currentSlide].subtitle}
        </p>
        <Link
          href={slides[currentSlide].buttonLink}
          className="text-xl font-bold bg-[#0D2B4F] rounded-lg hover:text-[#0D2B4F] hover:bg-white mt-8 transition-colors duration-300 px-6 py-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {slides[currentSlide].buttonText}
        </Link>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-colors
              ${currentSlide === index ? "bg-white" : "bg-white/50"}
            `}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
