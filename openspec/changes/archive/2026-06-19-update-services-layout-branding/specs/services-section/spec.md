## MODIFIED Requirements

### Requirement: Grid de tarjetas de servicios
La sección SHALL mostrar las tarjetas de servicios en un grid de 3 columnas en desktop y 1 columna en mobile. Cada tarjeta SHALL contener: un ícono SVG, título del servicio, descripción breve y un botón CTA. El grid SHALL acomodar correctamente la cantidad real de servicios definidos (no limitada a 6), distribuyéndolos en las filas necesarias.

#### Scenario: Layout desktop
- **WHEN** el viewport es mayor o igual a 768px
- **THEN** las tarjetas se muestran en 3 columnas, en tantas filas como sean necesarias para todos los servicios

#### Scenario: Layout mobile
- **WHEN** el viewport es menor a 768px
- **THEN** las tarjetas se muestran en 1 columna, apiladas verticalmente

### Requirement: Servicios hardcodeados en content.ts
Los servicios SHALL estar definidos en `src/data/content.ts` con los campos: `id`, `title`, `description`, `icon` e `whatsappMessage`. Los servicios SHALL ser: Rehabilitaciones de gas, Venta de artículos de gas, Planos, Replanteos, Adecuaciones, Colocación de artefactos, Trámites de gas e Instalaciones (domiciliarias, comerciales e industriales). Cada servicio SHALL tener un ícono representativo definido en `src/components/services/icons.tsx`.

#### Scenario: Actualización de contenido
- **WHEN** se modifica el texto de un servicio en `content.ts`
- **THEN** el cambio se refleja en la tarjeta correspondiente sin modificar el componente React

#### Scenario: Lista de servicios reflejada
- **WHEN** el usuario visualiza la sección de servicios
- **THEN** se muestran exactamente los servicios definidos en `content.ts`, cada uno con su ícono, título, descripción y CTA a WhatsApp
