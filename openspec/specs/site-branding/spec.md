## ADDED Requirements

### Requirement: Asset canónico del logo
El logo de la marca SHALL almacenarse en el directorio público que Next.js sirve (`public/`) con un nombre de archivo sin espacios (ej. `insagas-logo.png`), de modo que sea accesible vía URL estática y utilizable por `next/image`.

#### Scenario: Asset accesible públicamente
- **WHEN** se solicita la ruta estática del logo (ej. `/insagas-logo.png`)
- **THEN** el servidor responde con la imagen del logo

#### Scenario: Asset fuera de carpeta servida
- **WHEN** el logo se encuentra únicamente en `src/public/`
- **THEN** se considera incorrecto, ya que Next.js no expone esa ruta, y el asset SHALL moverse a `public/`

### Requirement: Favicon del navegador
El sitio SHALL exponer un favicon basado en el logo de la marca, de modo que la pestaña del navegador muestre la identidad de Insagas.

#### Scenario: Pestaña del navegador
- **WHEN** el usuario abre el sitio en una pestaña del navegador
- **THEN** la pestaña muestra el ícono de Insagas en lugar del ícono por defecto

#### Scenario: Ícono en dispositivos Apple
- **WHEN** el usuario agrega el sitio a la pantalla de inicio en iOS
- **THEN** se utiliza el apple-icon basado en el logo de la marca

### Requirement: Imagen de vista previa al compartir
El sitio SHALL definir una imagen de Open Graph basada en la marca, de modo que al compartir el enlace en redes o mensajería se muestre una vista previa con el logo/identidad de Insagas.

#### Scenario: Compartir el enlace
- **WHEN** el usuario comparte la URL del sitio en una plataforma que soporta Open Graph
- **THEN** la vista previa muestra la imagen de Open Graph de Insagas junto al título y descripción configurados
