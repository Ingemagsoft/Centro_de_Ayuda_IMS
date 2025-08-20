---
id_articulo: ventas_crear_cliente
modulo: Ventas/Pedidos/Cotizaciones
submodulo: Creación de clientes
titulo: Cómo crear un cliente (tercero)
version: v1
palabras_clave: cliente, tercero, nit, dv, correo, direccion, condiciones de venta
nivel_usuario: todos
fecha_creacion: 2025-08-20
ultimo_update: 2025-08-20
url_relativa: /ventas/terceros/crear
---

# Cómo crear un cliente (tercero)

## 1) Objetivo
Registrar correctamente un **tercero** (cliente/proveedor/contable) para evitar rechazos de **factura electrónica** y agilizar ventas.

!!! tip "¿Dónde se usa este tercero?"
    - 💡 **Facturación POS** → [Facturar en POS](./factura-pos.md)  
    - 📨 **Factura electrónica (NDE)** → [Emitir NDE](./factura-nde.md)  
    - ↩️ **Devolución / Nota crédito** → [NCE](./nota-credito-nce.md)

> Si creas el tercero desde NDE o POS con **Crear tercero**, es el **mismo formulario** y se guarda en la **misma base**.

## 2) Requisitos previos
- Tener a mano **NIT/CC** (y **DV** si aplica) y **correo electrónico** válido.
- Si es empresa, validar con el **RUT**.

!!! warning "Campos críticos para DIAN"
    - **NIT/CC + DV (si aplica)**  
    - **Correo electrónico**  
    Errores en estos datos provocan *rechazo DIAN* al facturar.

---

## 3) Acceso y rutas alternativas

- Menú: **Ventas/Pedidos/Cotizaciones → Creación de clientes**  
  ![Acceso](../../../assets/img/clientes/01-menu-creacion-cliente.png)

- Alternativas: **Crear tercero** (abre el mismo formulario en ventana modal).  
  ![Crear tercero desde NDE](../../../assets/img/clientes/10-acceso-creacion-ventana.png)

---

## 4) Paso a paso

### A) Encabezado
1. **Código** *(obligatorio)*: alfanumérico, **sin espacios ni caracteres especiales**. Te permite identificar al cliente.  
2. **Tipo de cliente** *(obligatorio)*: se **autorrellena** (ej. *Cliente 1*). Cambia si no corresponde.  
3. **Tipo de documento** *(obligatorio)*: menú (NIT, Cédula, etc.).  
4. **Nro NIT/CC/Otro** *(obligatorio)*: numérico, **sin puntos ni comas**.  
5. **Con DV** *(opcional)*: visible solo con **NIT**; numérico.  
6. **Razón social / Nombre de establecimiento** *(opcional)*: solo si hay **DV** (empresas).  
7. **Nombres y apellidos**: requeridos si *no hay DV* (persona natural).  
8. **Correo electrónico** *(obligatorio)*: sin espacios.  

> **Regla práctica:** 

> - **Con DV (empresa)** → usa **Razón social**.
   ![Encabezado](../../../assets/img/clientes/02-encabezado-sin-DV.png)

> - **Sin DV (persona)** → usa **Nombres y Apellidos**.
   ![Encabezado](../../../assets/img/clientes/03-encabezado-con-DV.png)

---

### B) Pestaña **Dirección** (facturación)
- **Dirección** *(obligatorio)*  
- **Ciudad** *(obligatorio)*: por defecto **Pereira** (ajústala).  
- **Teléfono fijo** *(opcional)*, **Celular** *(opcional)*.  
![Dirección](../../../assets/img/clientes/04-tab-direccion.png)

---

### C) Pestaña **Otros datos** (personalización)
- **Fecha de cumpleaños** *(opcional)*  
- **Contacto**, **Observaciones**, **Ocupación** *(opcionales)*  
![Otros datos](../../../assets/img/clientes/05-tab-otros-datos.png)

---

### D) Pestaña **Condiciones de venta**
- **Forma de pago** *(obligatoria)*: por defecto **Contado**.  
- **Lista de precios** *(obligatoria)*: por defecto **Lista principal**.  
- **Vendedor** *(obligatorio)*: por defecto **SIN**.  

!!! info "Impacto en facturación"
    - Si la condición es **Crédito**, al facturar se crea automáticamente **“Por cancelar”** (no se puede borrar).  
    - Con **Contado**, se pueden registrar **medios de pago** (incluye pagos mixtos).

![Condiciones de venta](../../../assets/img/clientes/06-tab-condicion-venta.png)

---

### E) Pestaña **Datos de control de crédito**
- **Cupo** *(opcional)*  
- **Fecha de crédito** *(opcional)*  
- **Restringido** *(opcional, por defecto No)*  
- **Autorretenedor** / **Mayorista** *(opcionales)*  
![Control de crédito](../../../assets/img/clientes/07-tab-credito.png)

---

### F) **Datos fiscales**
- **Tributos** *(opcional)*  
- **Obligaciones fiscales** *(opcional, por defecto No responsable)*  
- **Régimen IVA** *(opcional, por defecto Responsable)*  
- **Régimen renta** *(opcional, por defecto Ordinario)*  

![Datos fiscales](../../../assets/img/clientes/08-tab-fiscales.png)

> Ajusta estos campos según el **RUT** del cliente para coherencia con DIAN.

---

### G) Grabar / Salir
- **Grabar**: guarda y **refresca** el formulario para un nuevo registro.  
- **Salir**: cierra el módulo **sin guardar**.  
![Confirmación](../../../assets/img/clientes/09-tercero-creado.png)

---

## 5) Buscar y editar un tercero
- Clic en **Buscar** → localiza por código/NIT/nombre → **abrir** y editar.  
- Tras corregir **correo/NIT/DV**, vuelve a emitir documentos rechazados por DIAN.
![Buscar tercero](../../../assets/img/clientes/11-buscar-tercero.png)

---

## 6) Tabla técnica completa de campos

??? info "Ver tabla completa de campos (detalle técnico)"
    | Campo | Tipo | Obligatorio/Opcional | Autorelleno | Validación (si aplica) | Descripción |
    |---|---|---|---|---|---|
    | **Buscar** | Botón | — | — | — | Buscar/editar un tercero existente. |
    | **Código** | Alfanumérico | **Obligatorio** | — | Sin espacios ni caracteres especiales | Identificador único del tercero. |
    | **Tipo de cliente** | Dropdown | **Obligatorio** | Automático (p. ej. *Cliente 1*) | — | Depende del módulo origen. |
    | **Tipo de documento** | Dropdown | **Obligatorio** | — | — | NIT, Cédula, TI, CE, etc. |
    | **Nro NIT/CC/Otro** | Numérico | **Obligatorio** | Puede copiar **Código** | Sin puntos/comas/espacios | Identificación nacional/internacional. |
    | **Con DV** | Numérico | Opcional | — | Solo con **NIT**; sin puntos/comas | Dígito de verificación. |
    | **Razón social / Establecimiento** | Texto | Opcional | — | — | Visible/útil con **DV** (empresa). |
    | **Primer/Segundo Apellido** | Texto corto | Opcional\* | — | — | \*Obligatorios si **no hay DV** (persona). |
    | **Primer/Segundo Nombre** | Texto corto | Opcional\* | — | — | \*Obligatorios si **no hay DV** (persona). |
    | **Correo electrónico** | Texto | **Obligatorio** | — | Sin espacios; formato válido | Para envío de FE. |
    | **Dirección** | Texto | **Obligatorio** | — | — | Domicilio fiscal/comercial. |
    | **Ciudad** | Dropdown | **Obligatorio** | **Pereira** por defecto | — | Ciudad de residencia. |
    | **Teléfono fijo / Celular** | Numérico | Opcional | — | Sin comas/espacios | Contacto. |
    | **Fecha de cumpleaños / Contacto / Observaciones / Ocupación** | Varios | Opcional | — | — | Personalización del tercero. |
    | **Forma de pago** | Dropdown | **Obligatorio** | **Contado** por defecto | — | Impacta el flujo de pagos al facturar. |
    | **Lista de precios** | Dropdown | **Obligatorio** | **Lista principal** por defecto | — | Recalcula precios en ventas. |
    | **Vendedor** | Dropdown | **Obligatorio** | **SIN** por defecto | — | Vendedor asignado por defecto. |
    | **Cupo / Fecha de crédito / Restringido** | Varios | Opcional | — | — | Control de crédito. |
    | **Autorretenedor / Mayorista** | Check | Opcional | — | — | Condición fiscal/comercial. |
    | **Tributos / Obligaciones fiscales / Régimen IVA / Régimen renta** | Dropdown | Opcional | Por defecto (No responsable / Responsable / Ordinario) | — | Coherencia con RUT. |
    | **Grabar** | Acción | — | — | — | Guarda y refresca para nuevo registro. |
    | **Salir** | Acción | — | — | — | Cierra sin guardar. |

---

## 7) FAQs
- **¿Empresa o persona?**  
  - **Empresa**: NIT + **DV**, usa **Razón social**.  
  - **Persona**: Cédula **sin DV**, usa **Nombres y Apellidos**.

- **¿Puedo cambiar el tipo de cliente luego?**  
  Sí, pero revisa **condiciones de venta** y **datos fiscales** para mantener coherencia.

- **¿No me deja facturar?**  
  Revisa que **correo, NIT/DV y ciudad** estén completos. Los errores de DIAN suelen indicar qué campo falta.

---

## Relacionados
- 💡 [Facturar en POS](./factura-pos.md)
- 📨 [Factura electrónica (NDE)](./factura-nde.md)
- ↩️ [Nota crédito electrónica (NCE)](./nota-credito-nce.md)
