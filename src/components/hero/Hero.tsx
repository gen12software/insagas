import { catalogoUrl, mlUrl } from "@/config/links";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-dark"
    >
      {/* Placeholder background - replace with next/image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-2 to-[#0a0a0a]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 w-full">
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-brand-yellow font-display font-semibold text-lg tracking-widest uppercase mb-2">
            Gasista Matriculado · CABA y GBA
          </p>
          <h1 className="font-display font-bold text-6xl md:text-8xl leading-none tracking-tight text-white mb-4">
            INSAGAS
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-body mb-8 leading-relaxed">
            Soluciones en gas para tu hogar y empresa.
            <br className="hidden md:block" />
            Seguridad, calidad y experiencia garantizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={catalogoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-yellow text-brand-dark font-display font-bold text-lg tracking-wide rounded hover:bg-brand-yellow-light transition-colors duration-200"
            >
              Descargar Catálogo
            </a>
            <a
              href={mlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-display font-bold text-lg tracking-wide rounded hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-200"
            >
              Ver Productos en Mercado Libre
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
