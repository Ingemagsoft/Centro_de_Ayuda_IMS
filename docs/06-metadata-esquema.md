# Esquema de metadatos

## Campos
- `id_articulo` (único, snake_case)
- `modulo`, `submodulo`
- `titulo`
- `version` (v1 | v2)
- `palabras_clave` (CSV)
- `nivel_usuario` (nuevo | avanzado | todos)
- `fecha_creacion`, `ultimo_update` (YYYY-MM-DD)
- `url_relativa`

## Front-matter de ejemplo
```yaml
---
id_articulo: ventas_pos_facturar
modulo: Ventas/Pedidos/Cotizaciones
submodulo: POS
titulo: Cómo facturar en POS (Mostrador)
version: v1
palabras_clave: pos, mostrador, caja, pagos mixtos, factura
nivel_usuario: todos
fecha_creacion: 2025-08-12
ultimo_update: 2025-08-12
url_relativa: /ventas/pos/facturar
---