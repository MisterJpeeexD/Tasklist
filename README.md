# TaskList v1.0 🚀

Aplicación web interactiva para la gestión y priorización de tareas diarias en tiempo real. Este proyecto forma parte del proceso de especialización en desarrollo de software, enfocado en la manipulación avanzada del DOM, modularidad en JavaScript y maquetación web semántica.

---

### 📋 Características Técnicas

- **Arquitectura Frontend Pura:** Interfaz construida sin dependencias ni frameworks externos, utilizando HTML5 semántico, CSS3 estructurado y JavaScript Vanila (ES6+).
- **Diseño Tabular Simétrico:** Uso avanzado de estructuras de tablas (`<table>`) y atributos de combinación de celdas (`rowspan`) para optimizar el comportamiento elástico del formulario de ingreso.
- **Gestión Dinámica del DOM:** Inyección elástica de nodos mediante la instanciación de elementos independientes (`<tr>`, `<td>`, `<div>`) para garantizar el aislamiento de cada tarea creada.
- **Flujo Event-Driven:** Programación orientada a eventos para el control de triggers de creación y persistencia del borrado individual (aislamiento de alcance mediante selectores `.closest()`).

---

### ⚠️ Limitación Técnica Actual

> **Nota de Persistencia:** Esta versión (v1.0) opera estrictamente en la memoria volatil del navegador (Runtime de JavaScript). La aplicación **no almacena información de forma permanente**; al recargar o cerrar la pestaña, el listado de tareas se inicializará a su estado por defecto. 

---

### 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructuración semántica y formularios de captura.
- **CSS3:** Hoja de estilos con reseteo global, control de cajas (`box-sizing`) y transiciones de estado (`:hover`).
- **JavaScript (ES6):** Captura de flujos, validación de inputs (`.trim()`) y manipulación dinámica del árbol de nodos.

---

### 🚀 Instalación y Despliegue Local

Para ejecutar el entorno de desarrollo de forma local:

1. Clona este repositorio en tu máquina:
   ```bash
   git clone [https://github.com/MisterJpeeexD/about-me.git](https://github.com/MisterJpeeexD/about-me.git)
