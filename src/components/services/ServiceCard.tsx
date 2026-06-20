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

  return (
    <div className="bg-brand-dark-2 border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-brand-yellow/40 transition-colors duration-200">
      <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-brand-yellow" />
      </div>
      <h3 className="font-display font-bold text-xl text-white tracking-wide">
        {service.title}
      </h3>
      <p className="text-white/60 font-body text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-display font-semibold text-brand-yellow hover:text-brand-yellow-light transition-colors duration-200 tracking-wide"
      >
        Consultar →
      </a>
    </div>
  );
}
