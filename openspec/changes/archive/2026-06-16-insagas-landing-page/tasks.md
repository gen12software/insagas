## 1. Inicialización del Proyecto

- [x] 1.1 Crear la app con `npx create-next-app@latest` (TypeScript, Tailwind CSS, App Router, sin `src/` prefix, alias `@/*`)
- [x] 1.2 Agregar dependencias: `embla-carousel-react`, `embla-carousel-autoplay`
- [x] 1.3 Configurar tokens de color en `tailwind.config.ts`: amarillo `#F5C400`/`#FFD700`, grises `#1C1C1C`/`#2A2A2A`/`#6B6B6B`, blanco
- [x] 1.4 Configurar fuentes en `app/layout.tsx` con `next/font/google`: Barlow Condensed (display) + Inter (body)
- [x] 1.5 Crear estructura de carpetas: `src/components/navbar`, `hero`, `services`, `works`, `about`, `footer`, `ui`; `src/data/`, `src/config/`, `src/types/`

## 2. Configuración y Contenido

- [x] 2.1 Crear `src/types/index.ts` con interfaces: `Service`, `WorkItem`, `AboutContent`
- [x] 2.2 Crear `src/config/links.ts` con constantes: `whatsappNumber`, `whatsappMessage`, `whatsappUrl`, `mlUrl`, `instagramUrl`, `catalogoUrl`, `contactEmail`, `mapsEmbedUrl`
- [x] 2.3 Crear `src/data/content.ts` con array de 6 servicios (id, title, description, icon, whatsappMessage), array de 8 trabajos (id, title, date, description, image), y objeto `aboutContent` (descripción, matrícula, zonaCobertura, copyright year)

## 3. Layout y SEO

- [x] 3.1 Actualizar `app/layout.tsx`: metadata con título "Insagas | Gasista y Distribuidora", descripción, keywords, `lang="es"`, fuentes aplicadas al body
- [x] 3.2 Crear `app/page.tsx` que importe y renderice todas las secciones en orden: Navbar, Hero, Services, Works, About, Footer, WhatsAppFloat

## 4. Navbar

- [x] 4.1 Crear `src/components/navbar/Navbar.tsx` (componente `"use client"` por el estado del menú mobile)
- [x] 4.2 Implementar logo placeholder SVG con texto "INSAGAS" en tipografía Barlow Condensed, color amarillo
- [x] 4.3 Implementar links de nav desktop con smooth scroll (`href="#seccion"`) y estilos hover en amarillo
- [x] 4.4 Implementar ícono de WhatsApp en navbar que linkea a `whatsappUrl` de config
- [x] 4.5 Implementar hamburger button y menú mobile desplegable con estado `isOpen`; cerrar al hacer click en link

## 5. Hero

- [x] 5.1 Crear `src/components/hero/Hero.tsx` (Server Component)
- [x] 5.2 Implementar fondo fullscreen `min-h-screen` con color oscuro placeholder (`bg-[#1C1C1C]`) y overlay semitransparente preparado para reemplazar con `next/image`
- [x] 5.3 Implementar texto: nombre "INSAGAS" en Barlow Condensed tamaño XL, eslogan placeholder, alineado a la izquierda en desktop y centrado en mobile
- [x] 5.4 Implementar botón "Descargar Catálogo" (amarillo sólido) con `href={catalogoUrl}` target `_blank`
- [x] 5.5 Implementar botón "Ver Productos en Mercado Libre" (outline blanco) con `href={mlUrl}` target `_blank`

## 6. WhatsApp Floating Button

- [x] 6.1 Crear `src/components/ui/WhatsAppFloat.tsx` con posición `fixed bottom-6 right-6 z-50`
- [x] 6.2 Implementar botón circular amarillo con ícono WhatsApp SVG, `href` a `whatsappUrl`, `target="_blank"`, `aria-label="Contactar por WhatsApp"`
- [x] 6.3 Agregar animación de pulse/bounce suave al botón para llamar la atención

## 7. Sección Servicios

- [x] 7.1 Crear `src/components/services/ServicesSection.tsx` (Server Component)
- [x] 7.2 Implementar grid responsivo: `grid-cols-1 md:grid-cols-3 gap-6`
- [x] 7.3 Crear `src/components/services/ServiceCard.tsx` con: ícono (SVG inline o heroicons), título, descripción y botón CTA
- [x] 7.4 Implementar íconos SVG inline para los 6 servicios (gas flame, wrench, settings, clipboard, building, search)
- [x] 7.5 Implementar CTA de cada card generando URL de WhatsApp con mensaje específico del servicio: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`

## 8. Carrusel de Trabajos

- [x] 8.1 Crear `src/components/works/WorksCarousel.tsx` (componente `"use client"`)
- [x] 8.2 Inicializar Embla Carousel con `useEmblaCarousel` y plugin de autoplay (interval 3000ms, `stopOnInteraction: false`)
- [x] 8.3 Implementar pausa en hover con `autoplay.stop()` / `autoplay.play()` en los eventos del contenedor
- [x] 8.4 Crear `src/components/works/WorkCard.tsx` con imagen placeholder (div con `bg-gray-700` + `aspect-video`), título y fecha/descripción
- [x] 8.5 Implementar botones de flecha izquierda/derecha con `scrollPrev`/`scrollNext`
- [x] 8.6 Implementar dots indicadores: array de índices, dot activo resaltado en amarillo, click en dot navega al slide

## 9. Sección Nosotros

- [x] 9.1 Crear `src/components/about/AboutSection.tsx` (Server Component)
- [x] 9.2 Implementar layout dos columnas desktop (`md:grid-cols-2`) y una columna mobile
- [x] 9.3 Implementar columna izquierda: título, descripción de la empresa, número de matrícula, zona de cobertura
- [x] 9.4 Implementar badge/texto "Vendedores Platinum de Mercado Libre" con estilo destacado (fondo amarillo o borde dorado)
- [x] 9.5 Implementar columna derecha: imagen placeholder (`div` con `bg-gray-700 rounded-lg aspect-square`) preparada para `next/image`

## 10. Footer y Contacto

- [x] 10.1 Crear `src/components/footer/Footer.tsx` (Server Component)
- [x] 10.2 Implementar fila de íconos sociales: WhatsApp, Instagram, Mercado Libre con links de `links.ts` y `target="_blank"`
- [x] 10.3 Implementar mail de contacto con `mailto:` link
- [x] 10.4 Implementar iframe de Google Maps responsive (placeholder URL de embed); envolver en `div` con `aspect-video` o altura fija
- [x] 10.5 Implementar barra inferior de copyright con texto "© {year} Insagas. Todos los derechos reservados." y matrícula de gasista

## 11. Animaciones y Pulido

- [x] 11.1 Crear custom hook `src/hooks/useInView.ts` con `IntersectionObserver` que retorna `isVisible` cuando el elemento entra al viewport
- [x] 11.2 Aplicar fade-in (`transition-opacity duration-700 ease-in`) a las secciones principales al entrar al viewport
- [x] 11.3 Verificar smooth scroll en todos los links del nav (agregar `scroll-smooth` a `html` en el layout)
- [x] 11.4 Revisar contraste de colores en mobile, especialmente botones CTA y texto sobre fondos oscuros
- [x] 11.5 Testear en Chrome mobile (DevTools) y Safari iOS (si disponible): navbar, carrusel swipe, botón flotante

## 12. Build y Deploy

- [x] 12.1 Correr `npm run build` y resolver todos los errores de TypeScript y warnings de Next.js
- [x] 12.2 Verificar que no haya imágenes sin `alt`, links sin texto accesible ni errores de consola
- [x] 12.3 Crear repositorio en GitHub y hacer push del código
- [x] 12.4 Conectar el repo a Vercel y hacer deploy inicial
- [x] 12.5 Verificar que el deploy en Vercel funcione correctamente en móvil y desktop
