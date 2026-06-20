## Why

Insagas necesita presencia digital propia: actualmente no tiene sitio web, por lo que los clientes no pueden conocer sus servicios, ver trabajos realizados ni contactarlos fácilmente fuera de Mercado Libre. Una landing page profesional les da credibilidad, facilita el contacto vía WhatsApp y amplía su alcance comercial.

## What Changes

- Nueva aplicación Next.js 15 (App Router) que sirve la landing page de Insagas
- Single-page con scroll suave entre secciones: Navbar, Hero, Servicios, Trabajos, Nosotros, Contacto/Footer
- Navbar fija con links de navegación, ícono de WhatsApp y menú hamburguesa en mobile
- Hero fullscreen con imagen de fondo, eslogan y dos CTAs (catálogo y Mercado Libre)
- WhatsApp floating button fijo en toda la página
- Grid de servicios con 6 tarjetas (instalación, reparaciones, mantenimiento, habilitaciones, consorcio, diagnóstico)
- Carrusel de trabajos realizados con autoplay, flechas, dots y swipe en mobile
- Sección Nosotros con texto e imagen
- Footer con íconos de redes sociales, mapa embed y copyright
- Archivo `data/content.ts` con todo el contenido hardcodeado para fácil reemplazo
- Archivo `config/links.ts` con URLs centralizadas (WhatsApp, Mercado Libre, Instagram, catálogo)
- SEO básico con metadata en `layout.tsx`

## Capabilities

### New Capabilities

- `navbar`: Barra de navegación fija con links, WhatsApp y hamburger menu mobile
- `hero-section`: Sección hero fullscreen con CTAs y overlay
- `services-section`: Grid de tarjetas de servicios con CTAs a WhatsApp
- `works-carousel`: Carrusel de trabajos realizados con autoplay y swipe
- `about-section`: Sección Nosotros con texto e imagen placeholder
- `contact-footer`: Footer con redes sociales, mapa embed y copyright
- `whatsapp-float`: Botón flotante de WhatsApp fijo en toda la página
- `content-config`: Archivo centralizado de contenido y URLs configurables

### Modified Capabilities

## Impact

- Nueva aplicación Next.js 15, no modifica ningún código existente
- Dependencias nuevas: Next.js 15, Tailwind CSS, TypeScript, posiblemente shadcn/ui para componentes puntuales, Embla Carousel o similar para el carrusel
- Fuentes via `next/font` (Barlow Condensed + Inter)
- Sin backend ni base de datos; todo estático
