import { services } from "@/data/content";
import ServiceCard from "./ServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-bg-base py-section">
      <div className="mx-auto max-w-content px-6 md:px-20">
        <FadeIn className="mb-12 text-center md:text-left">
          <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Lo que hacemos
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white md:text-[54px]">
            Servicios
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
