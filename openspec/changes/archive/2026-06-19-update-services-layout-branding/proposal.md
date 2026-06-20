## Why

La lista de servicios actual no refleja los servicios reales que ofrece Insagas, el contenido de toda la app queda angosto y "cortado" en pantallas anchas (mucho margen vacío a los costados), y la marca no tiene logo ni favicon configurados, por lo que la pestaña del navegador y las vistas previas al compartir no muestran la identidad de Insagas.

## What Changes

- Reemplazar los 6 servicios actuales por la lista real de servicios de Insagas: Rehabilitaciones de gas, Venta de artículos de gas, Planos, Replanteos, Adecuaciones, Colocación de artefactos, Trámites de gas, e Instalaciones (domiciliarias, comerciales e industriales).
- Ensanchar el contenedor de contenido global para que las secciones aprovechen mejor el ancho de pantalla en monitores grandes, manteniendo el comportamiento responsive en mobile/tablet. Aplica a navbar, hero, servicios, trabajos, nosotros y footer.
- Incorporar el logo de la marca (`Insagas_logo.png`) en la app: reemplazar el texto "INSAGAS" del navbar y footer por el logo, configurar el favicon del navegador, y configurar la imagen de Open Graph para las vistas previas al compartir el link.
- Mover el asset del logo a la ubicación de assets públicos que sirve Next.js (hoy está en `src/public/`, que Next.js no expone) y normalizar el nombre del archivo (quitar el espacio).

## Capabilities

### New Capabilities
- `site-branding`: gestión del logo de la marca y los íconos del sitio (favicon del navegador, apple-icon e imagen de Open Graph para compartir), incluyendo la ubicación canónica del asset del logo.
- `responsive-container`: ancho y márgenes del contenedor de contenido compartido por todas las secciones, garantizando un mejor aprovechamiento del viewport en desktop sin romper el responsive.

### Modified Capabilities
- `services-section`: cambia la lista y la cantidad de servicios mostrados, y el contenido hardcodeado en `content.ts`.
- `navbar`: el logo deja de ser texto placeholder y pasa a ser la imagen del logo de la marca.
- `contact-footer`: el nombre de marca en el footer pasa a mostrarse como imagen del logo.

## Impact

- **Código**: `src/data/content.ts` (lista de servicios), `src/components/services/icons.tsx` (íconos nuevos), `src/components/navbar/Navbar.tsx`, `src/components/footer/Footer.tsx`, `src/components/hero/Hero.tsx`, `src/components/services/ServicesSection.tsx`, `src/components/works/WorksCarousel.tsx`, `src/components/about/AboutSection.tsx` (contenedor), `src/app/layout.tsx` (metadata/íconos).
- **Assets**: mover `src/public/Insagas_logo .png` a `public/` con nombre normalizado; agregar `icon`/`apple-icon`/`opengraph-image` (App Router) o referencias en metadata.
- **Dependencias**: ninguna nueva (se usa `next/image` ya disponible).
- **Sin breaking changes** funcionales para el usuario final.
