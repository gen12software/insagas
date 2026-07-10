import { works } from "@/data/content";
import { whatsappUrl } from "@/config/links";
import WorkCard from "./WorkCard";
import WorksPhotoCarousel from "./WorksPhotoCarousel";
import FadeIn from "@/components/ui/FadeIn";

export default function WorksSection() {
  // Grid de 6 ítems: 5 trabajos + 1 card de CTA
  const items = works.slice(0, 5);

  return (
    <section id="trabajos" className="bg-bg-deep py-section">
      <div className="mx-auto max-w-content px-6 md:px-20">
        <FadeIn className="mb-12 text-center md:text-left">
          <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Experiencia comprobada
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white md:text-[54px]">
            Trabajos destacados
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((work, i) => (
            <WorkCard key={work.id} work={work} recent={i < 3} />
          ))}

          {/* Card de CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between border-t-2 border-accent-dim bg-bg-card p-8 transition-colors duration-200 hover:bg-bg-card-alt"
          >
            <p className="text-[13px] leading-[1.65] text-ink-muted">
              ¿Tenés un proyecto? Pedinos un presupuesto sin cargo.
            </p>
            <span className="mt-6 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-accent">
              Pedir presupuesto →
            </span>
          </a>
        </div>

        <FadeIn className="mb-10 mt-24 flex items-center gap-4 text-center md:text-left">
          <h3 className="shrink-0 font-display text-2xl font-extrabold uppercase leading-none tracking-[-0.01em] text-white md:text-[28px]">
            Galería
          </h3>
          <span className="hidden h-px flex-1 bg-line-mid md:block" />
        </FadeIn>

        <WorksPhotoCarousel />
      </div>
    </section>
  );
}
