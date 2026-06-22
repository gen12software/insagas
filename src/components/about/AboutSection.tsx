import Image from "next/image";
import { aboutContent } from "@/data/content";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="mb-2 text-center md:text-left">
          <p className="text-brand-yellow font-display font-semibold tracking-widest uppercase text-sm mb-2">
            Quiénes somos
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
            NOSOTROS
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

          {/* Photo */}
          <div className="relative rounded-lg overflow-hidden aspect-square border border-white/10">
            <Image src="/fotoPortada.jpeg" alt="Local Insagas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
