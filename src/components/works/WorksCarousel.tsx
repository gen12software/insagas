"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { works } from "@/data/content";
import WorkCard from "./WorkCard";

export default function WorksCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.play();
  }, [emblaApi]);

  return (
    <section id="trabajos" className="py-20 bg-brand-dark-2">
      {/* Encabezado dentro del contenedor */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <p className="text-brand-yellow font-display font-semibold tracking-widest uppercase text-sm mb-2">
            Experiencia comprobada
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
            TRABAJOS REALIZADOS
          </h2>
        </div>
      </div>

      {/* Carrusel full-width */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex gap-4">
            {works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-dark border border-white/20 rounded-full items-center justify-center text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-200 hidden md:flex"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-dark border border-white/20 rounded-full items-center justify-center text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-200 hidden md:flex"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {works.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === selectedIndex
                ? "bg-brand-yellow w-6"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
