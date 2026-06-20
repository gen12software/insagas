## Context

Insagas es una empresa gasista y distribuidora de productos de gas sin presencia web propia. La landing page es el primer proyecto digital: página estática de marketing con scroll suave, sin autenticación ni base de datos. El único canal de conversión es WhatsApp.

El proyecto se inicializa desde cero en un repositorio nuevo. No hay código existente que migrar.

## Goals / Non-Goals

**Goals:**
- Landing page de una sola página (SPA-style) completamente responsive (mobile-first)
- Contenido 100% hardcodeado en archivos de configuración para facilitar actualizaciones futuras sin tocar componentes
- Identidad visual industrial: gris oscuro + amarillo vibrante
- WhatsApp como canal de contacto principal (floating button + CTAs en servicios)
- Carrusel de trabajos con autoplay y swipe en mobile
- SEO básico (metadata, lang="es")
- Despliegue fácil en Vercel

**Non-Goals:**
- CMS ni panel de administración
- Formulario de contacto (solo links sociales)
- Autenticación de usuarios
- Internacionalización
- Blog ni páginas adicionales

## Decisions

### 1. Next.js 15 con App Router
**Decisión**: Usar Next.js 15 App Router con componentes de servidor por defecto.  
**Rationale**: Mejor SEO out-of-the-box con SSR/SSG, deploy trivial en Vercel, integración nativa de `next/font` y `next/image` para performance. Los componentes interactivos (navbar mobile, carrusel) se marcan con `"use client"` solo donde hace falta.  
**Alternativa descartada**: Create React App / Vite + SPA — peor SEO y más configuración manual.

### 2. Tailwind CSS para estilos
**Decisión**: Tailwind CSS v3 como único sistema de estilos, sin CSS Modules ni styled-components.  
**Rationale**: Velocity de desarrollo alta, clases utilitarias permiten mantener el sistema de colores personalizado (amarillo #F5C400, grises) en `tailwind.config.ts` como tokens reutilizables.  
**Alternativa descartada**: shadcn/ui completo — demasiado overhead para una landing; se puede incorporar puntualmente si se necesita algún componente específico.

### 3. Contenido centralizado en `src/data/content.ts`
**Decisión**: Todo el texto, imágenes placeholder e ítems del carrusel viven en un único archivo de datos exportado como constantes TypeScript.  
**Rationale**: Permite que el cliente (o un dev junior) actualice textos sin entender los componentes React. URLs de WhatsApp, ML, Instagram en `src/config/links.ts` separado para distinguir "contenido" de "configuración".  
**Alternativa descartada**: Variables de entorno para URLs — innecesario para una landing estática sin secrets.

### 4. Embla Carousel para el carrusel de trabajos
**Decisión**: Usar `embla-carousel-react` con el plugin de autoplay.  
**Rationale**: Liviano (~4KB gzip), soporte nativo de swipe en mobile, API simple, sin dependencia de jQuery. Autoplay pausable en hover.  
**Alternativa descartada**: Swiper.js — más potente pero más pesado (70KB+); Keen Slider — menos mantenido.

### 5. Estructura de carpetas
```
src/
  app/
    layout.tsx          # metadata SEO, fuentes
    page.tsx            # imports todas las secciones
  components/
    navbar/
    hero/
    services/
    works/
    about/
    footer/
    ui/                 # WhatsAppFloat, etc.
  data/
    content.ts          # todo el contenido hardcodeado
  config/
    links.ts            # URLs centralizadas
```

### 6. Fuentes via `next/font`
**Decisión**: Barlow Condensed (display/headings) + Inter (body) cargadas con `next/font/google`.  
**Rationale**: Zero layout shift, auto-optimización, sin requests externos en runtime.

### 7. Animaciones con Tailwind + Intersection Observer
**Decisión**: Fade-in suave al entrar al viewport implementado con un custom hook `useInView` + clases de Tailwind (`transition-opacity duration-700`).  
**Rationale**: Sin librerías adicionales (Framer Motion sería overkill para efectos simples). Solo opacidad y translate-y para no impactar performance.

## Risks / Trade-offs

- **Imágenes placeholder** → Las imágenes reales pueden tener proporciones distintas a los placeholders, rompiendo layouts. Mitigación: usar `next/image` con `fill` y `object-cover` desde el inicio para que las imágenes siempre llenen el contenedor sin importar aspecto.
- **URL de WhatsApp hardcodeada** → Si cambia el número hay que redesplegar. Mitigación: el número está en `config/links.ts` en un solo lugar, cambio en 30 segundos.
- **Carrusel autoplay en mobile** → Puede interferir con el scroll vertical. Mitigación: Embla tiene modo `watchDrag` que distingue gestos horizontales de verticales.
- **Google Maps iframe** → Puede bloquearse en algunos navegadores con strict privacy settings. Mitigación: mostrar dirección como texto también, el iframe es complementario.

## Migration Plan

1. `npx create-next-app@latest` con TypeScript, Tailwind, App Router
2. Configurar tokens de color en `tailwind.config.ts`
3. Instalar `embla-carousel-react` y `embla-carousel-autoplay`
4. Crear estructura de carpetas y archivos base
5. Implementar secciones de arriba a abajo
6. Deploy en Vercel conectando el repo de GitHub

No hay rollback necesario: es un proyecto nuevo sin usuarios ni datos existentes.

## Open Questions

- ¿El cliente quiere Google Analytics o algún pixel de seguimiento? (no incluido en el alcance actual)
- ¿Se necesita un dominio propio (insagas.com.ar) o se despliega en el subdominio de Vercel temporalmente?
