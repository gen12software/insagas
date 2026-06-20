## ADDED Requirements

### Requirement: Archivo centralizado de contenido
El archivo `src/data/content.ts` SHALL exportar como constantes TypeScript todo el contenido de la landing: servicios (array), trabajos realizados (array), textos de la sección Nosotros, número de matrícula y año de copyright. Ningún texto de marketing SHALL estar hardcodeado dentro de los componentes React.

#### Scenario: Actualización de texto de servicio
- **WHEN** se edita la descripción de un servicio en `content.ts`
- **THEN** el cambio se refleja en la card correspondiente sin modificar ningún componente

#### Scenario: Actualización de trabajos
- **WHEN** se agrega un nuevo trabajo al array en `content.ts`
- **THEN** el nuevo trabajo aparece en el carrusel automáticamente

### Requirement: Archivo centralizado de links/URLs
El archivo `src/config/links.ts` SHALL exportar las constantes: `whatsappUrl` (URL completa `https://wa.me/...`), `whatsappMessage` (mensaje por defecto), `mlUrl` (tienda Mercado Libre), `instagramUrl`, `catalogoUrl`, `contactEmail`, `mapsEmbedUrl`. Ninguna URL SHALL estar hardcodeada en componentes.

#### Scenario: Actualización del número de WhatsApp
- **WHEN** se actualiza `whatsappUrl` en `links.ts`
- **THEN** el nuevo número es usado en el botón flotante, los CTAs de servicios y el footer sin cambios en componentes

### Requirement: Tipos TypeScript para el contenido
Los arrays de servicios y trabajos SHALL tener interfaces TypeScript definidas en `src/data/content.ts` o en `src/types/`. Esto previene errores al agregar nuevo contenido.

#### Scenario: Error de tipo al agregar contenido incompleto
- **WHEN** se agrega un servicio al array sin todos los campos requeridos
- **THEN** TypeScript muestra un error de compilación indicando el campo faltante
