import Image from "next/image";
import { whatsappUrl, catalogoUrl } from "@/config/links";

const heroStats = [
  { value: "+1500", label: "Instalaciones" },
  { value: "+15", label: "Años de experiencia" },
  { value: "CABA / GBA", label: "Zona de cobertura" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid min-h-[calc(100vh-64px)] grid-cols-1 overflow-hidden bg-bg-base md:grid-cols-2"
    >
      {/* Glow de acento para dar profundidad al fondo */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(245,197,24,0.22), transparent 70%)" }}
      />

      {/* Left: text */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:py-[88px] md:pl-20 md:pr-0">
        <p className="mb-5 flex items-center gap-3 font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Distribuidora y gasista matriculado
        </p>
        <h1 className="font-display text-7xl font-extrabold uppercase leading-[0.86] tracking-[-0.02em] text-white md:text-[104px]">
          Insagas
        </h1>
        <p className="mt-7 max-w-[460px] text-[18px] leading-relaxed text-ink-body">
          Brindamos servicios y ventas: instalaciones, rehabilitaciones y
          trámites de gas. Seguridad, calidad y experiencia garantizadas para tu
          hogar o comercio.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-accent px-8 py-[18px] font-display text-[15px] font-bold uppercase tracking-[0.06em] text-[#111] shadow-[0_8px_28px_-8px_rgba(245,197,24,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Consultar por WhatsApp
          </a>
          <a
            href={catalogoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border border-white/[0.18] px-8 py-[18px] font-display text-[15px] font-bold uppercase tracking-[0.06em] text-ink-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Ver catálogo
          </a>
        </div>

        {/* Fila de credenciales */}
        <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line-mid pt-8">
          {heroStats.map((s) => (
            <li key={s.label} className="flex flex-col">
              <span className="font-display text-3xl font-extrabold leading-none text-accent">
                {s.value}
              </span>
              <span className="mt-1.5 text-[12px] uppercase tracking-[0.08em] text-ink-muted">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: photo con gradientes de fundido */}
      <div className="relative min-h-[320px] md:min-h-full">
        <Image
          src="/fotoPortada.jpeg"
          alt="Local de Insagas"
          fill
          priority
          loading="eager"
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
