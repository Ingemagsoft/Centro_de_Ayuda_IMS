---
id_articulo: ventas_clientes
modulo: Ventas/Pedidos/Cotizaciones
submodulo: POS
titulo: Cómo crear clientes
version: v1
palabras_clave: crecion, clientes, proveedores, terceros 
nivel_usuario: todos
fecha_creacion: 2025-06-24
ultimo_update: 2025-08-12
url_relativa: /ventas/crear-clientes
---

# Cómo crear un nuevo cliente

## 1. Objetivo
En esta guía aprenderás a crear un cliente en el módulo de **Ventas/Pedidos/Cotizaciones**, ya sea desde la opción principal de “Creación de clientes” o directamente al emitir una factura electrónica (NDE) usando el botón **Crear tercero**.

## 2. Requisitos previos
- Usuario con rol de **[Nombre del rol]** o permisos de creación de clientes.  
- Conexión activa al sistema.  
- Datos básicos del cliente disponibles (NIT, nombre, dirección, etc.).

> **🛑 Advertencia crítica**  
> - La creación de clientes es **fundamental**: un cliente mal creado provoca errores en la facturación electrónica.  
> - **Campos imprescindibles**:  
>   - **NIT o Cédula**: sin ellos, la DIAN rechazará la factura.  
>   - **Correo electrónico**: obligatorio para notificaciones.  
> - Para **empresas**, se recomienda registrar siempre el **RUT** del cliente para validar la información tributaria.  
> - En los mensajes de error de la DIAN, si el problema está en el cliente, el texto indicará explícitamente “Error en tercero” o similar.  

## 3. Paso a paso

---

### Opción A: Desde **Ventas/Pedidos/Cotizaciones → Creación de clientes**

1. **Accede al módulo**  
   En el menú principal, haz clic en **Ventas/Pedidos/Cotizaciones** y luego, en el submenú, selecciona **Creación de Clientes**.  
   ![Paso A1: Menú Ventas/Pedidos/Cotizaciones y selección de "Creación de Clientes"](/mnt/data/1cf2f6ee-2d49-4ff7-8833-2d4c975d41ec.png)

2. **Se abrirá el formulario de Creación de Cliente**  
   La pantalla muestra el formulario completo para ingresar los datos del cliente.  
   ![Paso A2: Formulario de Creación de Cliente (sección superior)](/mnt/data/1aeb45ff-b5e0-4452-ab99-6d0976d57135.png)

3. **Completa los campos**  
   Rellena la información según esta tabla:

   | Campo                                    | Tipo               | Obligatorio/Opcional | Validación (si aplica)                                        |
   |------------------------------------------|--------------------|----------------------|---------------------------------------------------------------|
   | Código                                   | Alfanumérico       | Obligatorio          | Sin espacios ni caracteres especiales                         |
   | Tipo de cliente                          | Dropdown           | Obligatorio          | Automático (Cliente 1)                                        |
   | Tipo de documento                        | Dropdown           | Obligatorio          | Automático según DV                                           |
   | Nro NIT / CC / Otro                      | Numérico           | Obligatorio          | Sin espacios, puntos ni comas                                 |
   | DV (Dígito de verificación)              | Numérico           | Opcional             | Solo si el documento es “NIT”                                 |
   | Razón social / Nombre de establecimiento | Texto corto        | Opcional             | —                                                             |
   | Primer apellido                          | Texto corto        | Opcional             | —                                                             |
   | Segundo apellido                         | Texto corto        | Opcional             | —                                                             |
   | Primer nombre                            | Texto corto        | Opcional             | —                                                             |
   | Segundo nombre                           | Texto corto        | Opcional             | —                                                             |
   | Correo electrónico                       | Texto corto        | Obligatorio          | Sin espacios                                                  |
   | Dirección                                | Texto corto        | Obligatorio          | —                                                             |
   | Ciudad                                   | Dropdown           | Obligatorio          | “Pereira” por defecto                                        |
   | Teléfono fijo                            | Numérico           | Opcional             | Sin espacios ni comas                                         |
   | Celular                                  | Numérico           | Opcional             | Sin espacios ni comas                                         |

4. **Revisa y guarda**  
   Desplázate al final del formulario y haz clic en **Grabar**.  
   ![Paso A3: Sección Dirección y botón Grabar](/mnt/data/11ba3a1e-f8b3-4a11-a2e4-f4b0e4705d09.png)

5. **Verifica el mensaje de éxito**  
   Aparecerá una notificación verde confirmando la creación.  
   ![Paso A4: Confirmación “Tercero Creado”](/mnt/data/2029db65-1887-4e6d-9b5f-34757c90d2c3.png)

---

### Opción B: Desde **Ventas/Pedidos/Cotizaciones → Facturación/NDE → Crear tercero**

1. **Accede a Facturación NDE**  
   En el mismo menú de Ventas/Pedidos/Cotizaciones, selecciona **Facturación/NDE** y abre la pantalla de emisión de factura.  
   ![Paso B1: Menú con opción "Facturación / NDE"](/mnt/data/1cf2f6ee-2d49-4ff7-8833-2d4c975d41ec.png)

2. **Haz clic en “Crear tercero”**  
   En la sección **Datos del cliente**, pulsa el icono **+** junto al buscador.  
   ![Paso B2: Sección Datos del Cliente (buscar y botón Crear tercero)](/mnt/data/c1900dac-0da6-4626-acf3-2b4fa70d2908.png)

3. **Completa el formulario emergente**  
   Se abrirá una ventana modal idéntica al formulario de Creación de Clientes.  
   ![Paso B3: Ventana emergente “Crear Tercero”](/mnt/data/ea1adb55-bdf8-4cf3-85f8-1305aeccedaf.png)

4. **Graba el tercero**  
   Dentro de la modal, haz clic en **Grabar**.  
   ![Paso B4: Botones Grabar y Cerrar](/mnt/data/2e3e55ef-2828-465f-ac54-541bdc0dd6c0.png)

5. **Confirma y usa en factura**  
   Verás la notificación de éxito y el tercero quedará seleccionado para facturar.  
   ![Paso B5: Notificación “Tercero Creado”](/mnt/data/2029db65-1887-4e6d-9b5f-34757c90d2c3.png)

---

## 4. Preguntas frecuentes (FAQs)

- **¿Qué hago si el código ya está registrado?**  
  Usa la lupa de **Buscar** para encontrar y editar la ficha existente.  
- **¿Puedo importar varios clientes a la vez?**  
  No; para importaciones masivas, consulta la guía “Importación de clientes”.  
- **¿Cómo actualizo datos fiscales o de crédito luego de crear el cliente?**  
  Entra a **Historial de Clientes**, selecciona la ficha y pulsa **Editar**.