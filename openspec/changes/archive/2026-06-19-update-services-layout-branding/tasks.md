## 1. Servicios

- [x] 1.1 Reescribir el array `services` en `src/data/content.ts` con los nuevos servicios (Rehabilitaciones de gas, Venta de artículos de gas, Planos, Replanteos, Adecuaciones, Colocación de artefactos, Trámites de gas, Instalaciones domiciliarias/comerciales/industriales), con `id`, `title`, `description`, `icon` y `whatsappMessage` por cada uno
- [x] 1.2 Agregar los íconos faltantes en `src/components/services/icons.tsx` (ej. carrito, plano/documento, regla) y mapearlos en `src/components/services/ServiceCard.tsx`
- [x] 1.3 Verificar en el navegador que la sección Servicios muestra todas las tarjetas con ícono, título, descripción y CTA a WhatsApp funcionando

## 2. Contenedor / ancho de layout

- [x] 2.1 Reemplazar `max-w-6xl` por `max-w-7xl` en `Navbar.tsx`, `Hero.tsx`, `ServicesSection.tsx`, `WorksCarousel.tsx`, `AboutSection.tsx` y `Footer.tsx`
- [x] 2.2 Verificar en desktop ancho (≥1536px) que el contenido aprovecha más el viewport y queda alineado de forma consistente entre secciones
- [x] 2.3 Verificar en mobile/tablet que no hay overflow horizontal ni regresiones de responsive (incluido el carrusel de trabajos)

## 3. Logo y branding

- [x] 3.1 Mover/renombrar `src/public/Insagas_logo .png` a `public/insagas-logo.png` (sin espacio) y confirmar que es accesible vía `/insagas-logo.png`
- [x] 3.2 Reemplazar el texto "INSAGAS" del `Navbar.tsx` por el logo usando `next/image` (alt "Insagas", altura acotada, manteniendo el link a `#inicio`)
- [x] 3.3 Reemplazar el texto de marca del `Footer.tsx` por el logo usando `next/image` con alt accesible
- [x] 3.4 Agregar `src/app/icon.png` (favicon) y `src/app/apple-icon.png` derivados del logo, y verificar que la pestaña del navegador muestra el ícono de Insagas
- [x] 3.5 Agregar `src/app/opengraph-image.png` (o configurar `metadata.openGraph.images`) y verificar la vista previa al compartir el enlace

## 4. Verificación final

- [x] 4.1 Ejecutar el build / dev server sin errores ni warnings relevantes
- [x] 4.2 Revisión visual completa de la página (todas las secciones) en desktop y mobile
