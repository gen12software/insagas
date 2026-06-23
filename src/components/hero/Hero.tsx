import Image from "next/image";
import { whatsappUrl, catalogoUrl } from "@/config/links";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grid min-h-[calc(100vh-64px)] grid-cols-1 bg-bg-base md:grid-cols-2"
    >
      {/* Left: text */}
      <div className="flex flex-col justify-center px-6 py-16 md:py-[88px] md:pl-20 md:pr-0">
        <p className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          Gasista matriculado · CABA y GBA
        </p>
        <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-white md:text-[96px]">
          Insagas
        </h1>
        <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-ink-body">
          Instalaciones, rehabilitaciones y trámites de gas. Seguridad, calidad
          y experiencia garantizadas para tu hogar o comercio.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-accent px-6 py-3 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-[#111] transition-colors duration-200 hover:bg-accent-hover"
          >
            Consultar por WhatsApp
          </a>
          <a
            href={catalogoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border border-white/[0.16] px-6 py-3 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-ink-primary transition-colors duration-200 hover:border-white/40"
          >
            Ver catálogo
          </a>
        </div>
      </div>

      {/* Right: photo con gradientes de fundido */}
      <div className="relative min-h-[320px] md:min-h-full">
        <Image
          src="/fotoPortada.jpeg"
          alt="Local de Insagas"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradiente izquierdo */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[180px]"
          style={{ background: "linear-gradient(to right, #161616, transparent)" }}
        />
        {/* Gradiente inferior */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px]"
          style={{ background: "linear-gradient(to top, #161616, transparent)" }}
        />
      </div>
    </section>
  );
}
