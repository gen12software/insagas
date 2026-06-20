## ADDED Requirements

### Requirement: Carrusel de trabajos con autoplay
La sección SHALL mostrar un carrusel horizontal con ~8 cards de trabajos realizados. El carrusel SHALL tener autoplay activado por defecto y SHALL pausar el autoplay cuando el usuario hace hover sobre él.

#### Scenario: Autoplay al cargar
- **WHEN** el usuario llega a la sección de trabajos (scroll o carga inicial)
- **THEN** el carrusel comienza a avanzar automáticamente entre slides

#### Scenario: Pausa en hover
- **WHEN** el usuario pone el cursor sobre el carrusel (desktop)
- **THEN** el autoplay se pausa mientras el cursor está sobre el carrusel

### Requirement: Navegación del carrusel
El carrusel SHALL tener botones de flecha izquierda/derecha para navegación manual y dots indicadores de slide actual en la parte inferior.

#### Scenario: Navegación con flechas
- **WHEN** el usuario hace click en la flecha derecha
- **THEN** el carrusel avanza al siguiente slide

#### Scenario: Indicadores activos
- **WHEN** el carrusel está en el slide N
- **THEN** el dot N está visualmente activo/destacado

### Requirement: Swipe en mobile
El carrusel SHALL ser swipeable horizontalmente en dispositivos táctiles.

#### Scenario: Swipe en mobile
- **WHEN** el usuario hace swipe horizontal en el carrusel en un dispositivo táctil
- **THEN** el carrusel avanza o retrocede al slide siguiente/anterior según la dirección del swipe

### Requirement: Cards de trabajos
Cada card SHALL mostrar: imagen del trabajo (placeholder), título del trabajo y fecha/descripción breve. Los datos SHALL estar en `src/data/content.ts`.

#### Scenario: Card con datos de content.ts
- **WHEN** se renderiza el carrusel
- **THEN** cada card muestra la imagen, título y descripción definidos en `content.ts`
