import type { Service } from "@/types";
import { whatsappNumber } from "@/config/links";
import { FlameIcon, WrenchIcon, SettingsIcon, ClipboardIcon, BuildingIcon, SearchIcon, CartIcon, DocumentIcon, RulerIcon } from "./icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  flame: FlameIcon,
  wrench: WrenchIcon,
  settings: SettingsIcon,
  clipboard: ClipboardIcon,
  building: BuildingIcon,
  search: SearchIcon,
  cart: CartIcon,
  document: DocumentIcon,
  ruler: RulerIcon,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? FlameIcon;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;
  const ctaHref = service.ctaUrl ?? waUrl;

  return (
    <div className="flex flex-col gap-0 border-l-2 border-transparent bg-bg-card px-7 py-8 transition-colors duration-[180ms] hover:border-accent">
      <Icon className="mb-5 h-7 w-7 text-accent" />
      <h3 className="font-display text-[17px] font-bold uppercase tracking-wide text-ink-primary">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[13px] leading-[1.65] text-ink-muted">
        {service.description}
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent transition-colors duration-200 hover:text-accent-hover"
      >
        {service.cta ?? "Consultar"} →
      </a>
    </div>
  );
}
