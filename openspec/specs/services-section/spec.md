## ADDED Requirements

### Requirement: Grid de tarjetas de servicios
La sección SHALL mostrar las tarjetas de servicios en un grid de 3 columnas en desktop y 1 columna en mobile. Cada tarjeta SHALL contener: un ícono SVG, título del servicio, descripción breve y un botón CTA. El grid SHALL acomodar correctamente la cantidad real de servicios definidos, distribuyéndolos en las filas necesarias.

#### Scenario: Layout desktop
- **WHEN** el viewport es mayor o igual a 768px
- **THEN** las tarjetas se muestran en 3 columnas, en tantas filas como sean necesarias para todos los servicios

#### Scenario: Layout mobile
- **WHEN** el viewport es menor a 768px
- **THEN** las tarjetas se muestran en 1 columna, apiladas verticalmente

### Requirement: CTA de servicios linkea a WhatsApp
El botón CTA de cada tarjeta de servicio SHALL abrir WhatsApp con un mensaje predeterminado que incluya el nombre del servicio. El número y mensaje base se obtienen de la config centralizada.

#### Scenario: Click en CTA de tarjeta de servicio
- **WHEN** el usuario hace click en el botón CTA de una tarjeta (ej. "Instalación de Gas")
- **THEN** se abre WhatsApp (web o app) con el número configurado y un mensaje predeterminado mencionando el servicio

### Requirement: Servicios hardcodeados en content.ts
Los servicios SHALL estar definidos en `src/data/content.ts` con los campos: `id`, `title`, `description`, `icon` e `whatsappMessage`. Los servicios son: Rehabilitaciones de gas, Venta de artículos de gas, Planos, Replanteos, Adecuaciones, Colocación de artefactos, Trámites de gas, Instalaciones (domiciliarias, comerciales e industriales). Cada servicio SHALL tener un ícono representativo definido en `src/components/services/icons.tsx`.

#### Scenario: Actualización de contenido
- **WHEN** se modifica el texto de un servicio en `content.ts`
- **THEN** el cambio se refleja en la tarjeta correspondiente sin modificar el componente React

#### Scenario: Lista de servicios reflejada
- **WHEN** el usuario visualiza la sección de servicios
- **THEN** se muestran exactamente los servicios definidos en `content.ts`, cada uno con su ícono, título, descripción y CTA a WhatsApp
