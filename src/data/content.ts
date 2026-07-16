import type { Service, WorkItem, AboutContent, Stat, AboutHighlight } from "@/types";
import { catalogoUrl } from "@/config/links";

export const stats: Stat[] = [
  { id: "instalaciones", value: "+1500", label: "Instalaciones" },
  { id: "anios", value: "+15", label: "Años de experiencia" },
  { id: "zonas", value: "2", label: "Zonas — CABA y GBA" },
  { id: "matriculado", value: "★", label: "Gasista matriculado" },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Gasistas matriculados",
    subtitle: "Habilitados para presentaciones ante Metrogas y Naturgy",
  },
  {
    title: "Cobertura CABA y GBA",
    subtitle: "Atención en Capital Federal y Gran Buenos Aires",
  },
  {
    title: "Trabajo garantizado",
    subtitle: "Materiales de primera calidad y normativa vigente",
  },
];

export const services: Service[] = [
  {
    id: "rehabilitaciones",
    title: "Rehabilitaciones de gas",
    description:
      "Rehabilitación de servicios de gas cortados o suspendidos, dejando la instalación apta y habilitada nuevamente.",
    icon: "flame",
    cta: "Rehabilitar mi gas",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Rehabilitaciones de gas.",
  },
  {
    id: "venta-articulos",
    title: "Venta de artículos de gas",
    description:
      "Venta de piezas, repuestos y accesorios de gas de primeras marcas para tu hogar o comercio.",
    icon: "cart",
    cta: "Ver artículos",
    ctaUrl: catalogoUrl,
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Venta de artículos de gas.",
  },
  {
    id: "planos",
    title: "Planos",
    description:
      "Confección de planos de instalaciones de gas para presentar ante las distribuidoras y entes reguladores.",
    icon: "document",
    cta: "Pedir un plano",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Planos de gas.",
  },
  {
    id: "replanteos",
    title: "Replanteos",
    description:
      "Replanteo de instalaciones existentes o nuevas, definiendo recorridos y ubicación de artefactos.",
    icon: "ruler",
    cta: "Solicitar replanteo",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Replanteos.",
  },
  {
    id: "adecuaciones",
    title: "Adecuaciones",
    description:
      "Adecuación de instalaciones a la normativa vigente para garantizar seguridad y habilitación.",
    icon: "wrench",
    cta: "Adecuar mi instalación",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Adecuaciones de gas.",
  },
  {
    id: "colocacion-artefactos",
    title: "Colocación de artefactos",
    description:
      "Instalación y conexión de cocinas, termotanques, calefones, estufas y demás artefactos a gas.",
    icon: "settings",
    cta: "Colocar un artefacto",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Colocación de artefactos.",
  },
  {
    id: "tramites",
    title: "Trámites de gas",
    description:
      "Gestión integral de trámites ante Metrogas, Naturgy y entes reguladores: altas, habilitaciones y certificaciones.",
    icon: "clipboard",
    cta: "Gestionar mi trámite",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Trámites de gas.",
  },
  {
    id: "instalaciones",
    title: "Instalaciones",
    description:
      "Instalaciones de gas domiciliarias, comerciales e industriales. Trabajo garantizado con materiales de primera calidad.",
    icon: "building",
    cta: "Cotizar instalación",
    whatsappMessage: "Hola! Me comunico desde la web de Insagas. Quisiera consultar sobre Instalaciones domiciliarias, comerciales o industriales.",
  },
];

export const works: WorkItem[] = [
  {
    id: "1",
    title: "Colector para local gastronómico",
    place: "Mostaza Aeroparque",
    description:
      "Armado de colector de gas para local gastronómico en Aeroparque.",
    image: "/destacados/MostazaAeroparque.jpeg",
  },
  {
    id: "2",
    title: "Rehabilitación de edificio",
    place: "Edificio Caballito",
    description:
      "Rehabilitación de instalación para 15 departamentos con cañería exterior montada con silletero.",
    image: "/destacados/EdificioCaballito.jpeg",
  },
  {
    id: "3",
    title: "Cocina gastronómica",
    place: "Club Náutico Buchardo",
    description:
      "Colector en dos direcciones con llaves esféricas paso total y corte general con solenoide Jefferson de 2½\".",
    image: "/destacados/ClubNauticoBuchardo.jpeg",
  },
  {
    id: "4",
    title: "Habilitación de grupo generador",
    place: "Casa de campo · Del Viso",
    description:
      "Tren de válvulas de 1\" con solenoides, llaves de paso, flexible antivibratorio y manómetros.",
    image: "/destacados/Casadecampo.jpeg",
  },
];

// Fotos reales de trabajos realizados (en public/trabajosRealizados/)
export const workPhotos: string[] = Array.from(
  { length: 28 },
  (_, i) => `/trabajosRealizados/trabajo-${String(i + 1).padStart(2, "0")}.jpg`
);

export const aboutContent: AboutContent = {
  description:
    "Somos Insagas, empresa especializada en servicios integrales de gas para matriculados y particulares. Realizamos presentaciones ante Metrogas y Naturgy, asesoramiento y consultoría técnica, confección de planos y gestión de trámites ante distribuidoras. Además, ofrecemos venta de materiales para instalaciones de gas natural: piezas epoxi, reguladores y válvulas solenoides para uso comercial e industrial. Consultanos por presupuestos, asistencia técnica o catálogo de productos.",
  matricula: "XXXXXXXXX",
  zonaCobertura: "CABA y Gran Buenos Aires",
  copyrightYear: 2025,
  address: "Av. Rivadavia 9181, local en esquina (rejas grises)",
  horarios: "Lunes a Viernes: 09:30 – 13:30 hs / 14:30 – 17:00 hs",
  horarioAtencionPresencial: "Atención presencial (presentaciones o plano) SOLO CON TURNO",
};
