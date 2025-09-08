---
id_articulo: ventas_nce_hub
modulo: Ventas/Pedidos/Cotizaciones
submodulo: Devolución Facturación / NCE
titulo: NCE – Elige el tipo de nota crédito
version: v1
palabras_clave: nce, nota crédito, devolucion, dian, contado, credito, sin referencia
nivel_usuario: todos
fecha_creacion: 2025-08-29
ultimo_update: 2025-08-29
url_relativa: /ventas/nce
---

# Nota Crédito Electrónica (NCE) – ¿cuál guía uso?

Una **NCE** revierte total o parcialmente una factura **y** se reporta a la **DIAN**.  
Primero identifica dos cosas:

1. **Condición de pago** de la factura original: **Contado** o **Crédito**.  
2. ¿La NCE **referenciará** una factura específica?  
   - **Sí, con referencia**: se envía a DIAN enlazada a la factura (número/CUFE).  
   - **No, sin referencia**: solo cuando la DIAN **ya no acepta** asociar a esa factura (se afecta el **período**, no un documento puntual).

!!! warning "Cuándo usar *sin referencia*"
    Úsalo **solo** si la ventana de aceptación DIAN ya no permite vincular la NCE con la factura original. En ese caso, la nota impacta ventas/impuestos del **período actual**, sin modificar la factura histórica.

---

## Elige tu ruta

<div class="grid cards" markdown>

-   :material-cash: **Contado – Con referencia a la factura**  
    Cliente pagó al contado. La NCE *enlaza* a la factura y puede implicar **devolución de dinero**.  
    [:octicons-arrow-right-24: Abrir guía »](contado-ref.md)

-   :material-cash: **Contado – Sin referencia**  
    Para ajustes de período cuando no se puede enlazar. Revisa política de **caja/egresos**.  
    [:octicons-arrow-right-24: Abrir guía »](contado-sin-ref.md)

-   :material-bank: **Crédito – Con referencia a la factura**  
    Disminuye **cartera** del cliente; revisa si hay abonos.  
    [:octicons-arrow-right-24: Abrir guía »](credito-ref.md)

-   :material-bank: **Crédito – Sin referencia**  
    Ajuste por período; afecta ventas/impuestos y **cartera**, sin tocar la factura histórica.  
    [:octicons-arrow-right-24: Abrir guía »](credito-sin-ref.md)

</div>

---

## Decisor rápido

```mermaid
flowchart TD
A[¿Factura base existe y puede referenciarse?] -->|Sí| B{Condición de pago de la factura}
A -->|No / Ventana DIAN vencida| E[Sin referencia]
B -->|Contado| C[Contado + Referencia]
B -->|Crédito| D[Crédito + Referencia]
E --> F[(Contado o Crédito sin referencia)]
C --> G[Ir a guía: contado-ref.md]
D --> H[Ir a guía: credito-ref.md]
F --> I[Ir a guías: contado-sin-ref / credito-sin-ref]
```