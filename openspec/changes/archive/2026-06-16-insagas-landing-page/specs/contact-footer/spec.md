## ADDED Requirements

### Requirement: Footer con íconos de contacto y redes
El footer SHALL mostrar íconos con links a: WhatsApp, Instagram y Mercado Libre. Cada link SHALL abrir en nueva pestaña. Los URLs SHALL obtenerse de `src/config/links.ts`. También SHALL mostrar el mail de contacto (placeholder).

#### Scenario: Click en ícono de WhatsApp en footer
- **WHEN** el usuario hace click en el ícono de WhatsApp del footer
- **THEN** se abre WhatsApp con el número configurado en `links.ts`

#### Scenario: Links abren en nueva pestaña
- **WHEN** el usuario hace click en cualquier ícono social del footer
- **THEN** el link se abre en una nueva pestaña del navegador

### Requirement: Google Maps embed en footer
El footer SHALL incluir un iframe de Google Maps con la ubicación de Insagas (placeholder de dirección/coordenadas). El iframe SHALL ser responsive.

#### Scenario: Mapa visible en desktop y mobile
- **WHEN** el usuario hace scroll hasta el footer en cualquier viewport
- **THEN** el mapa de Google Maps es visible y correctamente dimensionado

### Requirement: Copyright y matrícula en footer
Al pie del footer SHALL mostrarse: "© 2025 Insagas. Todos los derechos reservados." y el número de matrícula de gasista (placeholder). El año y matrícula SHALL ser configurables desde `content.ts`.

#### Scenario: Texto de copyright
- **WHEN** el usuario ve el footer
- **THEN** el texto de copyright y la matrícula son visibles en la parte inferior
