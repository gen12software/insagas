## ADDED Requirements

### Requirement: Botón flotante de WhatsApp
La página SHALL tener un botón flotante de WhatsApp fijo en la esquina inferior derecha, visible en todas las secciones durante todo el scroll. El botón SHALL ser de color amarillo (#F5C400) con el ícono de WhatsApp en blanco o verde.

#### Scenario: Botón siempre visible
- **WHEN** el usuario hace scroll en cualquier parte de la página
- **THEN** el botón flotante de WhatsApp permanece visible en la esquina inferior derecha

### Requirement: URL de WhatsApp con mensaje predeterminado
Al hacer click en el botón flotante SHALL abrir WhatsApp usando `https://wa.me/<número>?text=<mensaje>`. El número y mensaje predeterminado SHALL obtenerse de `src/config/links.ts`.

#### Scenario: Click en botón flotante
- **WHEN** el usuario hace click en el botón flotante
- **THEN** se abre WhatsApp (web en desktop, app en mobile) con el número y mensaje configurados

### Requirement: Accesibilidad del botón flotante
El botón SHALL tener `aria-label="Contactar por WhatsApp"` para accesibilidad y `title` descriptivo.

#### Scenario: Atributos de accesibilidad
- **WHEN** un lector de pantalla encuentra el botón flotante
- **THEN** anuncia "Contactar por WhatsApp"
