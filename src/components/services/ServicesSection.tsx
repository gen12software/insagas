import { services } from "@/data/content";
import ServiceCard from "./ServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="mb-12 text-center md:text-left">
          <p className="text-brand-yellow font-display font-semibold tracking-widest uppercase text-sm mb-2">
            Lo que hacemos
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
            SERVICIOS
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
