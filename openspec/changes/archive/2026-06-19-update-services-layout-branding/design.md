## Context

Sitio one-page de Insagas hecho con Next.js (App Router) + Tailwind. Cada sección (`Navbar`, `Hero`, `ServicesSection`, `WorksCarousel`, `AboutSection`, `Footer`) define su propio contenedor con `max-w-6xl mx-auto px-4` (1152px). Los servicios están hardcodeados en `src/data/content.ts` con íconos SVG en `src/components/services/icons.tsx`. El logo de la marca fue dejado en `src/public/Insagas_logo .png` (carpeta no servida por Next.js, nombre con espacio). El navbar y el footer muestran la marca como texto "INSAGAS". No hay favicon ni imagen de Open Graph configurados.

## Goals / Non-Goals

**Goals:**
- Reflejar la lista real de servicios de Insagas.
- Que el contenido aproveche mejor las pantallas anchas, de forma consistente y responsive.
- Mostrar el logo de marca en navbar y footer, y configurar favicon + imagen de compartir.

**Non-Goals:**
- Rediseñar el layout o la estética de las secciones más allá del ancho del contenedor.
- Reemplazar las imágenes placeholder de los trabajos realizados.
- Hacer las listas de servicios/trabajos editables desde un CMS (siguen hardcodeadas).

## Decisions

### Ancho de contenedor
Subir de `max-w-6xl` (1152px) a `max-w-7xl` (1280px) en todas las secciones, manteniendo `mx-auto px-4`. Es el siguiente breakpoint estándar de Tailwind, mejora el aprovechamiento sin que las líneas de texto queden demasiado largas.
- **Alternativa considerada**: contenedor full-bleed (`max-w-screen-2xl` o sin tope con padding grande) — descartado por riesgo de líneas de texto excesivamente anchas y cambios mayores de diseño.
- **Implementación**: como el valor se repite en 6 archivos, se reemplaza `max-w-6xl` por `max-w-7xl` en cada uno. Se mantiene la duplicación de clases (patrón actual del repo) en lugar de introducir un componente `Container` para no expandir el alcance; si se prefiere, puede centralizarse luego.

### Servicios e íconos
Reescribir el array `services` en `content.ts` con los nuevos ítems, cada uno con `id`, `title`, `description`, `icon`, `whatsappMessage`. Agregar los íconos faltantes en `icons.tsx` y mapearlos en `ServiceCard`. Mapeo de íconos propuesto (reusando los existentes donde aplica):
- Rehabilitaciones de gas → `flame` (existente)
- Venta de artículos de gas → `cart` (nuevo) / fallback `building`
- Planos → `document`/`map` (nuevo)
- Replanteos → `ruler` (nuevo) / fallback `settings`
- Adecuaciones → `wrench` (existente)
- Colocación de artefactos → `settings` (existente)
- Trámites de gas → `clipboard` (existente)
- Instalaciones (domiciliarias/comerciales/industriales) → `building` (existente)

El grid actual (`grid-cols-1 md:grid-cols-3`) ya acomoda cualquier cantidad; con 8 servicios quedan 3 filas (3+3+2). No requiere cambios estructurales.

### Logo y branding
- Mover `src/public/Insagas_logo .png` → `public/insagas-logo.png` (sin espacio).
- Navbar y Footer: reemplazar el `<span>INSAGAS</span>` por `next/image` apuntando al logo, con `alt="Insagas"` y altura acotada (`h-8`/`h-10`), manteniendo el link a `#inicio` en el navbar.
- Favicon e íconos: usar las convenciones de archivo del App Router. Colocar `src/app/icon.png` (favicon), `src/app/apple-icon.png` y `src/app/opengraph-image.png` derivados del logo; Next.js los cablea automáticamente en `<head>` y en metadata OG. Alternativa: declararlos en `metadata.icons`/`metadata.openGraph.images` apuntando a `/insagas-logo.png` — se prefiere la convención de archivos por simplicidad y cache-busting automático.

## Risks / Trade-offs

- [El logo PNG sobre fondo oscuro puede no tener buen contraste o tener fondo blanco] → verificar que el PNG sea transparente; si no, ajustar tamaño/fondo o pedir versión adecuada.
- [`opengraph-image.png` idealmente 1200×630; el logo cuadrado puede verse pequeño] → aceptable como primer paso; se puede crear una imagen OG dedicada después.
- [Duplicar `max-w-7xl` en 6 archivos puede divergir a futuro] → riesgo bajo; se documenta y queda la opción de extraer un `Container`.
- [El nombre del archivo del logo tiene un espacio] → al moverlo se normaliza; verificar que ninguna referencia previa apunte al nombre viejo.

## Open Questions

- ¿Las descripciones de cada nuevo servicio las define el cliente o se redactan textos breves placeholder? (Por defecto se redactan textos breves y claros, ajustables luego en `content.ts`.)
- ¿"Instalaciones" debe ser una sola tarjeta que englobe domiciliarias/comerciales/industriales, o tres tarjetas separadas? (Por defecto: una sola tarjeta que las menciona en la descripción.)
