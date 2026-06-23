import Image from "next/image";
import { aboutContent, aboutHighlights } from "@/data/content";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-bg-base py-section">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-20">
        {/* Text column */}
        <FadeIn className="flex flex-col">
          <p className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Quiénes somos
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white md:text-[54px]">
            Nosotros
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-ink-body">
            {aboutContent.description}
          </p>

          <div className="mt-8 flex flex-col">
            {aboutHighlights.map((h, i) => (
              <div
                key={h.title}
                className={`flex items-start gap-4 py-4 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="mt-1 min-h-[36px] w-[2px] shrink-0 bg-accent" />
                <div>
                  <p className="font-display text-[15px] font-bold text-ink-primary">
                    {h.title}
                  </p>
                  <p className="mt-1 text-[13px] text-ink-dim">{h.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-ink-muted">
            Gasista matriculado N° {aboutContent.matricula} · {aboutContent.zonaCobertura}
          </p>
        </FadeIn>

        {/* Photo portrait 4:5 */}
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <Image
            src="/fotoPortada.jpeg"
            alt="Local de Insagas"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
