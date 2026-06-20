## MODIFIED Requirements

### Requirement: Navbar fija con navegación
La navbar SHALL estar fija en la parte superior de la pantalla durante todo el scroll. SHALL contener el logo de Insagas como imagen (asset de marca, no texto placeholder), links de navegación (Inicio, Trabajos, Servicios, Nosotros, Contacto) y un ícono de WhatsApp con el número configurado. El logo SHALL linkear a la sección de inicio y SHALL incluir texto alternativo accesible.

#### Scenario: Navbar visible durante scroll
- **WHEN** el usuario hace scroll hacia abajo en la página
- **THEN** la navbar permanece fija en la parte superior y no desaparece

#### Scenario: Logo como imagen
- **WHEN** el usuario visualiza la navbar
- **THEN** ve el logo de Insagas renderizado como imagen (no como texto), con alt text descriptivo

#### Scenario: Click en link de navegación
- **WHEN** el usuario hace click en un link del nav (ej. "Servicios")
- **THEN** la página hace scroll suave hasta la sección correspondiente
