import { aboutContent } from "@/data/content";
import {
  whatsappUrl,
  instagramUrl,
  mlUrl,
  contactEmailVentas,
  contactEmailInstalaciones,
  phone,
  mapsEmbedUrl,
} from "@/config/links";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-bg-deep py-section">
      <div className="mx-auto max-w-content px-6 md:px-20">
        <div className="mb-12 text-center md:text-left">
          <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Estamos para ayudarte
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white md:text-[54px]">
            Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3">
          {/* Col 1: Ubicación y horarios */}
          <div className="bg-bg-card p-8">
            <p className="mb-4 font-display text-[13px] font-bold uppercase tracking-wide text-ink-primary">
              Ubicación y horarios
            </p>
            <p className="text-[13px] leading-[1.65] text-ink-muted">
              {aboutContent.address}
            </p>
            <p className="mt-4 text-[13px] leading-[1.65] text-ink-muted">
              {aboutContent.horarios}
            </p>
            <p className="mt-2 text-[12px] font-semibold text-accent">
              ⚠ {aboutContent.horarioAtencionPresencial}
            </p>
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="mt-4 inline-block text-[13px] text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              Tel: {phone}
            </a>
          </div>

          {/* Col 2: Emails */}
          <div className="bg-bg-card p-8">
            <p className="mb-4 font-display text-[13px] font-bold uppercase tracking-wide text-ink-primary">
              Emails
            </p>
            <a
              href={`mailto:${contactEmailVentas}`}
              className="block text-[13px] text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              <span className="mb-1 block text-[11px] uppercase tracking-wide text-ink-dim">
                Ventas
              </span>
              {contactEmailVentas}
            </a>
            <a
              href={`mailto:${contactEmailInstalaciones}`}
              className="mt-4 block text-[13px] text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              <span className="mb-1 block text-[11px] uppercase tracking-wide text-ink-dim">
                Obras y gestiones
              </span>
              {contactEmailInstalaciones}
            </a>
          </div>

          {/* Col 3: Redes + CTA */}
          <div className="flex flex-col bg-bg-card p-8">
            <p className="mb-4 font-display text-[13px] font-bold uppercase tracking-wide text-ink-primary">
              Seguinos
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={mlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-[13px] text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              Mercado Libre
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center rounded bg-accent px-6 py-3 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-black transition-colors duration-200 hover:bg-accent-hover"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-[2px] h-[300px] w-full overflow-hidden">
          {/* TODO producción: reemplazar por el embed definitivo de Google Maps */}
          <iframe
            src={mapsEmbedUrl}
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Insagas"
          />
        </div>
      </div>
    </section>
  );
}
