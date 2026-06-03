# MOMENTO BIM Process OS

Workbench GEN+ para mapeo de procesos BIM, diagnostico del dolor operativo, gestion de RFIs/consultas tecnicas y estandarizacion CDE/ECD en MOMENTO.

## Producto

Este repo no pertenece a TrainerMath. Es un producto independiente para:

- explicar por que se mapean procesos en obra;
- mostrar que el mapa no es un diagrama bonito, sino una herramienta para detectar dolor, riesgo, espera, reproceso y falta de evidencia;
- diagnosticar dolores tipicos: canales informales, informacion incompleta, responsable difuso, versiones no vigentes, cierre debil y mejora no sostenida;
- analizar el caso principal de gestion de consultas tecnicas / RFI;
- guiar paso a paso como mapear un proceso;
- convertir dolores operativos en flujos, responsables, documentos, evidencias, reglas y metricas;
- explicar como mejorar un proceso con palancas de eliminar, simplificar, estandarizar, digitalizar, automatizar y controlar;
- guiar la estandarizacion con ficha de proceso, formulario, estados, matriz RACI, CDE y gobierno semanal;
- preparar la configuracion posterior en Autodesk Docs / Build / CDE.

## Modulos interactivos

- Diagnostico del dolor: seleccion de sintomas y lectura de impacto, senal en el mapa, mejora, estandar y metrica.
- Mapeador interactivo: metodo de 10 pasos conectado con el flujo RFI y nodos clickeables por carril.
- Caso RFI: procedimiento completo de gestion de consultas tecnicas en obra.
- Caso RFI por areas: proceso ejemplo actual y proceso propuesto mejorado usando Campo/Produccion, Oficina Tecnica, Area BIM, Area de Diseno, Area de Proyectos y Area de Calidad.
- Mejora y estandar: laboratorio de rediseño, checklist de madurez y capas minimas para implementar el estandar.
- Metricas y ficha: indicadores de control y ficha final que debe entregar cada equipo.
- Guia de mapeo: consideraciones, brainstorming, feedback esperado y dinamica para que participantes mapeen procesos reales y propongan mejora del caso.

## Metodo de flujo en 10 pasos

1. Elegir el proceso a mapear.
2. Definir los swimlanes o involucrados.
3. Listar todos los pasos sin orden.
4. Asignar cada paso a un rol o swimlane.
5. Ordenar y conectar con flechas.
6. Identificar decisiones de tipo Si/No.
7. Marcar herramientas usadas en cada paso.
8. Definir el output o evidencia de cada paso.
9. Senalar cuello de botella.
10. Definir el FIN y criterio de cierre.

## Taller de mejora del caso RFI

El taller guia al equipo para comparar mapa actual vs. mapa objetivo, identificar dolores, proponer mejoras y convertirlas en estandar operativo:

- mapa actual con canales informales, retornos y esperas;
- mapa objetivo con CDE como fuente oficial y responsabilidades claras por area;
- formulario, log, estados, matriz RACI y evidencia obligatoria;
- control semanal de abiertas, vencidas, incompletas, duplicadas, derivadas a RFI/SDI y restricciones asociadas.

Areas usadas en el caso:

- Campo / Produccion.
- Oficina Tecnica.
- Area BIM.
- Area de Diseno.
- Area de Proyectos.
- Area de Calidad.

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

GitHub Pages:

```text
https://apalpan.github.io/momento-bim-process-os/
```

## Stack

- React
- TypeScript
- Vite
- Tailwind
- Lucide icons

## Nota de datos

La app usa contenido curado y ejemplos operativos. No incluye informacion sensible de MOMENTO.
