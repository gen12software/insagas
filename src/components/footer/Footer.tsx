import { aboutContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-bg-footer">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-[12px] text-[#333] sm:flex-row md:px-20">
        <span>
          © {aboutContent.copyrightYear} Insagas. Todos los derechos reservados.
        </span>
        <span>Gasista Matriculado</span>
      </div>
    </footer>
  );
}
