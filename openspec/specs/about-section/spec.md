## ADDED Requirements

### Requirement: Sección Nosotros con texto e imagen
La sección SHALL mostrar en desktop: texto a la izquierda e imagen placeholder a la derecha. En mobile SHALL apilarse verticalmente (imagen arriba o abajo del texto).

#### Scenario: Layout desktop
- **WHEN** el viewport es mayor o igual a 768px
- **THEN** el texto y la imagen se muestran en dos columnas lado a lado

#### Scenario: Layout mobile
- **WHEN** el viewport es menor a 768px
- **THEN** el contenido se apila verticalmente en una sola columna

### Requirement: Contenido de la sección Nosotros
La sección SHALL incluir: descripción de la empresa, mención a que son gasistas matriculados con campo para número de matrícula (placeholder), zona de cobertura y mención a que son vendedores Platinum de Mercado Libre. El contenido SHALL estar en `src/data/content.ts`.

#### Scenario: Número de matrícula configurable
- **WHEN** se actualiza el número de matrícula en `content.ts`
- **THEN** el número se muestra correctamente en la sección sin cambiar el componente

#### Scenario: Badge Platinum ML
- **WHEN** el usuario ve la sección Nosotros
- **THEN** hay una mención visible (badge o texto destacado) a que son vendedores Platinum de Mercado Libre
