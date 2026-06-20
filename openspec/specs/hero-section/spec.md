## ADDED Requirements

### Requirement: Hero fullscreen con overlay
La sección hero SHALL ocupar el 100% del viewport height (`100vh`) con una imagen de fondo (placeholder de color oscuro) y un overlay semitransparente para garantizar legibilidad del texto.

#### Scenario: Renderizado inicial
- **WHEN** el usuario carga la página
- **THEN** el hero ocupa toda la pantalla con imagen de fondo oscura y texto legible sobre el overlay

### Requirement: Contenido del hero con CTAs
El hero SHALL mostrar a la izquierda: el nombre "INSAGAS", el eslogan placeholder y dos botones CTA. El primero "Descargar Catálogo" SHALL linkear a `catalogoUrl` de la config. El segundo "Ver Productos en Mercado Libre" SHALL linkear a `mlUrl` de la config. Ambos SHALL abrir en nueva pestaña.

#### Scenario: Click en CTA Catálogo
- **WHEN** el usuario hace click en "Descargar Catálogo"
- **THEN** se abre en nueva pestaña el link configurado en `catalogoUrl`

#### Scenario: Click en CTA Mercado Libre
- **WHEN** el usuario hace click en "Ver Productos en Mercado Libre"
- **THEN** se abre en nueva pestaña el link configurado en `mlUrl`

### Requirement: Diseño responsive del hero
En mobile el contenido del hero SHALL estar centrado y el tamaño de tipografía SHALL adaptarse para ser legible sin overflow horizontal.

#### Scenario: Vista mobile del hero
- **WHEN** el viewport es menor a 768px
- **THEN** el texto y botones están centrados y son completamente legibles sin scroll horizontal
