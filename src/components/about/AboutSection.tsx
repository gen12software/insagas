import { aboutContent } from "@/data/content";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="mb-3 text-center md:text-left">
          <p className="text-brand-yellow font-display font-semibold tracking-widest uppercase text-sm mb-2">
            Quiénes somos
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
            NOSOTROS
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="flex flex-col gap-6">
            <p className="text-white/70 font-body text-lg leading-relaxed">
              {aboutContent.description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                <p className="text-white/70 font-body text-base">
                  <span className="text-white font-semibold">Gasistas matriculados</span> — Matrícula N° {aboutContent.matricula}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                <p className="text-white/70 font-body text-base">
                  <span className="text-white font-semibold">Zona de cobertura:</span> {aboutContent.zonaCobertura}
                </p>
              </div>
            </div>

            {/* Platinum ML badge */}
            <div className="inline-flex items-center gap-3 bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg px-4 py-3 self-start">
              <svg className="w-6 h-6 text-brand-yellow shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-display font-bold text-brand-yellow tracking-wide text-sm uppercase">
                Vendedores Platinum — Mercado Libre
              </span>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-brand-dark-2 to-[#3a3a3a] rounded-lg aspect-square flex items-center justify-center border border-white/10">
            <div className="text-center">
              <svg className="w-16 h-16 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/30 font-body text-sm">Foto del local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
