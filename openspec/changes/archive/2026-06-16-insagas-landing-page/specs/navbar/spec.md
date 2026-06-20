## ADDED Requirements

### Requirement: Navbar fija con navegación
La navbar SHALL estar fija en la parte superior de la pantalla durante todo el scroll. SHALL contener el logo de Insagas (placeholder SVG con texto "INSAGAS"), links de navegación (Inicio, Trabajos, Servicios, Nosotros, Contacto) y un ícono de WhatsApp con el número configurado.

#### Scenario: Navbar visible durante scroll
- **WHEN** el usuario hace scroll hacia abajo en la página
- **THEN** la navbar permanece fija en la parte superior y no desaparece

#### Scenario: Click en link de navegación
- **WHEN** el usuario hace click en un link del nav (ej. "Servicios")
- **THEN** la página hace scroll suave hasta la sección correspondiente

### Requirement: Menú hamburguesa en mobile
En viewports menores a `md` (768px) la navbar SHALL ocultar los links de navegación y mostrar un ícono hamburguesa. Al hacer click, SHALL desplegar un menú vertical con todos los links.

#### Scenario: Abrir menú mobile
- **WHEN** el usuario toca el ícono hamburguesa en mobile
- **THEN** se despliega el menú con todos los links de navegación visibles

#### Scenario: Cerrar menú al navegar
- **WHEN** el usuario toca un link dentro del menú mobile
- **THEN** el menú se cierra y la página hace scroll hasta la sección correspondiente
