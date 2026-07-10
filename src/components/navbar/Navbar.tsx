"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { whatsappUrl } from "@/config/links";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  const handleLinkClick = () => setIsOpen(false);

  // Scrollspy: marca el link de la sección visible mientras se scrollea
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Banda angosta cerca del tope: la sección que la cruza es la activa
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-line-mid bg-[rgba(22,22,22,0.94)] backdrop-blur-[16px]">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6 md:px-12">
        {/* Logo lockup */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center"
          aria-label="Insagas - Inicio"
        >
          <Image
            src="/insagas-logo.png"
            alt="Insagas"
            width={1119}
            height={569}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop nav — centrado */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-[15px] font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 hover:text-ink-primary hover:after:w-full ${
                  isActive
                    ? "text-ink-primary after:w-full"
                    : "text-[rgba(240,237,232,0.6)] after:w-0"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA WhatsApp — derecha */}
        <div className="hidden items-center md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-accent px-[22px] py-[11px] font-display text-[14px] font-bold uppercase tracking-wide text-black transition-colors duration-200 hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedí presupuesto
          </a>
        </div>

        {/* Mobile: WhatsApp icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-accent"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="p-1 text-ink-primary"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-line-mid bg-bg-base px-6 py-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                aria-current={isActive ? "page" : undefined}
                className={`border-l-2 py-1 pl-3 text-base font-medium transition-colors duration-200 hover:text-ink-primary ${
                  isActive
                    ? "border-accent text-ink-primary"
                    : "border-transparent text-[rgba(240,237,232,0.55)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
