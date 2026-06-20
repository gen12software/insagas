## ADDED Requirements

### Requirement: Contenedor de contenido ensanchado
Todas las secciones principales (navbar, hero, servicios, trabajos, nosotros y footer) SHALL usar un contenedor de contenido con un ancho máximo mayor al actual de modo que el contenido aproveche mejor el viewport en monitores grandes y no quede excesivo margen vacío a los costados. El ancho máximo SHALL aplicarse de forma consistente en todas las secciones.

#### Scenario: Pantallas anchas
- **WHEN** el viewport es considerablemente más ancho que el contenedor actual (ej. ≥ 1536px)
- **THEN** el contenido se muestra más ancho que con el contenedor previo, reduciendo el margen vacío lateral, manteniendo un margen mínimo legible

#### Scenario: Consistencia entre secciones
- **WHEN** el usuario hace scroll a través de las distintas secciones
- **THEN** todas alinean su contenido al mismo ancho máximo y a los mismos márgenes laterales

### Requirement: Responsive preservado en mobile y tablet
El ensanchamiento del contenedor SHALL preservar el comportamiento responsive existente: en viewports chicos el contenido SHALL ocupar el ancho disponible con padding lateral y sin overflow horizontal.

#### Scenario: Mobile
- **WHEN** el viewport es menor a 768px
- **THEN** el contenido ocupa el ancho disponible con su padding lateral y no genera scroll horizontal

#### Scenario: Sin overflow horizontal
- **WHEN** el usuario visualiza cualquier sección en cualquier viewport
- **THEN** no se produce scroll horizontal indeseado a nivel de página
