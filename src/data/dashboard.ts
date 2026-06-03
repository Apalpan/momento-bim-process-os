export type Tone = 'blue' | 'green' | 'amber' | 'rose' | 'violet' | 'slate';

export type Kpi = {
  label: string;
  value: string;
  detail: string;
  status: string;
  tone: Tone;
};

export type MappingStep = {
  id: string;
  title: string;
  teacher: string;
  output: string;
  prompt: string;
  example: string;
};

export type ProcessNode = {
  id: string;
  lane: string;
  title: string;
  type: 'start' | 'activity' | 'decision' | 'document' | 'deliverable' | 'end';
  summary: string;
  evidence: string[];
  risk: string;
};

export type Flow = {
  id: string;
  title: string;
  owner: string;
  priority: string;
  currentPain: string;
  targetOutcome: string;
  inputs: string[];
  activities: string[];
  decisions: string[];
  outputs: string[];
  metrics: string[];
  lanes: {
    lane: string;
    steps: string[];
  }[];
  instructorQuestions: string[];
};

export type CaseExample = {
  id: string;
  title: string;
  scope: string;
  trigger: string;
  objective: string;
  lanes: {
    lane: string;
    steps: string[];
  }[];
  documents: string[];
  deliverables: string[];
  mappingCriteria: string[];
  commonMistakes: string[];
  bimUse: string;
  cdeConfig: string;
  metrics: string[];
};

export const kpis: Kpi[] = [
  {
    label: 'Proceso principal',
    value: 'RFI',
    detail: 'Gestión de consultas técnicas como caso base para enseñar mapeo campo-oficina.',
    status: 'Caso rector',
    tone: 'blue',
  },
  {
    label: 'Pasos de mapeo',
    value: '10',
    detail: 'Alcance, carriles, inputs, actividades, decisiones, entregables, secuencia, flujo, validación y mejora.',
    status: 'Método de clase',
    tone: 'green',
  },
  {
    label: 'Meta de respuesta',
    value: '≤ 3 días',
    detail: 'Meta sugerida para consultas técnicas/RFI si el registro sale completo y con responsable.',
    status: 'Indicador objetivo',
    tone: 'amber',
  },
  {
    label: 'Evidencia requerida',
    value: '100%',
    detail: 'Toda consulta cerrada debe tener respuesta oficial, comunicación, registro y soporte documentado.',
    status: 'Control CDE',
    tone: 'rose',
  },
];

export const executiveSignals = [
  {
    title: 'Problema real',
    text: 'La obra no se detiene solo por falta de recursos. También se detiene por falta de información confiable, decisiones oportunas y procesos claros.',
  },
  {
    title: 'Cambio de enfoque',
    text: 'Mapear procesos no es hacer un diagrama bonito. Es entender cómo se trabaja realmente, dónde se pierde tiempo y qué evidencia queda.',
  },
  {
    title: 'Caso principal',
    text: 'La gestión de consultas técnicas/RFI permite ver todo el sistema: campo detecta, oficina técnica valida, especialista responde y CDE documenta.',
  },
  {
    title: 'Resultado esperado',
    text: 'Cada participante debe poder identificar inicio, fin, responsables, decisiones, evidencias, dolores, mejoras y métricas de control.',
  },
];

export const painSignals = [
  'Consultas enviadas por WhatsApp, llamada o correo sin registro oficial.',
  'La misma duda se repite porque nadie sabe si la respuesta anterior era oficial.',
  'Campo ejecuta con información no validada o con planos no vigentes.',
  'Oficina técnica recibe consultas incompletas y debe pedir más información.',
  'El proyectista responde tarde porque faltan ubicación, foto, plano o especialidad.',
  'El CDE se actualiza después del problema, no durante el flujo.',
  'El cierre depende de memoria personal y no de evidencia trazable.',
  'Gerencia se entera cuando el problema ya impactó costo, plazo o calidad.',
];

export const mappingSteps: MappingStep[] = [
  {
    id: 'alcance',
    title: 'Definir proceso, inicio y fin',
    teacher: 'Todo flujo necesita un evento que lo dispara y una condición observable de cierre.',
    output: 'Nombre del proceso, objetivo, alcance, inicio y fin.',
    prompt: '¿Dónde inicia realmente el trabajo y cuándo podemos decir que terminó correctamente?',
    example: 'Inicio: campo detecta una duda técnica. Fin: consulta cerrada con respuesta oficial, evidencia y comunicación al equipo.',
  },
  {
    id: 'carriles',
    title: 'Definir carriles por rol',
    teacher: 'Los carriles muestran quién participa. Deben ser roles, no nombres propios.',
    output: 'Campo/Producción, Oficina Técnica/BIM, Proyectista/Especialista, CDE/Documentación, Resumen.',
    prompt: '¿Quién inicia, quién valida, quién responde, quién documenta y quién cierra?',
    example: 'Campo detecta; Oficina Técnica registra y valida; Especialista responde; CDE conserva trazabilidad.',
  },
  {
    id: 'inputs',
    title: 'Identificar inputs',
    teacher: 'Un input incompleto genera espera, reproceso y decisiones débiles.',
    output: 'Lista de datos y documentos obligatorios.',
    prompt: '¿Qué información mínima necesita el siguiente rol para avanzar sin rebotar?',
    example: 'Código, fecha, frente, ubicación, especialidad, descripción, impacto, plano, foto y adjuntos.',
  },
  {
    id: 'actividades',
    title: 'Listar actividades',
    teacher: 'Cada actividad debe escribirse con verbo + objeto y quedar asignada a un carril.',
    output: 'Secuencia de tareas ejecutables.',
    prompt: '¿Qué acción ocurre, quién la realiza y qué produce?',
    example: 'Registrar consulta en CDE, validar completitud, solicitar respuesta, comunicar solución.',
  },
  {
    id: 'decisiones',
    title: 'Definir decisiones',
    teacher: 'Un rombo sin criterio solo traslada ambigüedad al mapa.',
    output: 'Decisiones con rutas sí/no y criterio claro.',
    prompt: '¿Qué pregunta cambia el camino del proceso?',
    example: '¿La duda se resuelve con información disponible? ¿La consulta está completa? ¿Requiere cambio formal o impacto mayor?',
  },
  {
    id: 'entregables',
    title: 'Definir entregables',
    teacher: 'El entregable demuestra que una etapa produjo valor y que el proceso puede auditarse.',
    output: 'Respuesta técnica, registro de consulta, evidencia, historial y cierre.',
    prompt: '¿Qué debe quedar al final de cada tramo?',
    example: 'Registro en CDE, respuesta técnica oficial, comunicación al equipo y cierre documentado.',
  },
  {
    id: 'secuencia',
    title: 'Ordenar la secuencia real',
    teacher: 'Primero se mapea cómo ocurre hoy. Luego se diseña cómo debería funcionar.',
    output: 'Mapa actual con retrabajos, esperas y canales informales.',
    prompt: '¿Esto ocurre así todos los días o solo cuando queremos explicarlo en una reunión?',
    example: 'Proceso real: WhatsApp, llamada, correo, plano desactualizado, reunión informal, documentación posterior.',
  },
  {
    id: 'dolores',
    title: 'Marcar puntos críticos',
    teacher: 'Los puntos críticos muestran dónde se detiene, duplica o degrada el flujo.',
    output: 'Dolores clasificados por espera, reproceso, información incompleta, decisión ambigua, canal informal o falta de evidencia.',
    prompt: '¿Dónde se pierde más tiempo o se genera más riesgo?',
    example: 'Consulta sin ubicación, sin plano, sin responsable o sin fecha de respuesta.',
  },
  {
    id: 'mejora',
    title: 'Rediseñar el proceso',
    teacher: 'El mapa mejorado debe reducir ambigüedad, no agregar burocracia.',
    output: 'Flujo objetivo con menos pasos, roles claros, campos obligatorios, SLA y CDE.',
    prompt: '¿Qué paso se elimina, simplifica, automatiza o convierte en regla?',
    example: 'Formulario único, campos obligatorios, responsable asignado, plazo, tablero y estado de cierre.',
  },
  {
    id: 'control',
    title: 'Definir controles y métricas',
    teacher: 'Si el proceso no se mide, vuelve a depender de memoria y urgencia.',
    output: 'Responsable del seguimiento, indicador principal, frecuencia y meta.',
    prompt: '¿Qué métrica probará que el proceso mejoró?',
    example: 'Tiempo promedio de respuesta, % consultas completas, % con evidencia, % cerradas, duplicadas y vencidas.',
  },
];

export const rfiNodes: ProcessNode[] = [
  {
    id: 'inicio',
    lane: 'Campo / Producción',
    title: 'Inicio del proceso',
    type: 'start',
    summary: 'Una cuadrilla, residente o responsable de campo detecta una duda técnica, inconsistencia o falta de información.',
    evidence: ['Ubicación/frente', 'Actividad afectada', 'Especialidad involucrada'],
    risk: 'Si el inicio no se registra, la consulta se vuelve conversación informal.',
  },
  {
    id: 'duda',
    lane: 'Campo / Producción',
    title: 'Detectar duda técnica',
    type: 'activity',
    summary: 'Se identifica una duda, interferencia, falta de detalle o contradicción entre plano, modelo, especificación y realidad de obra.',
    evidence: ['Descripción clara', 'Foto', 'Plano/modelo de referencia'],
    risk: 'La consulta puede llegar como mensaje suelto sin contexto suficiente.',
  },
  {
    id: 'revision',
    lane: 'Campo / Producción',
    title: 'Revisar información disponible',
    type: 'activity',
    summary: 'Antes de escalar, se revisan planos, especificaciones, reportes y documentos existentes.',
    evidence: ['Documento revisado', 'Versión consultada', 'Resultado de revisión'],
    risk: 'Se escalan dudas que ya estaban respondidas o se usa una versión obsoleta.',
  },
  {
    id: 'resuelve',
    lane: 'Campo / Producción',
    title: '¿Se resuelve con información disponible?',
    type: 'decision',
    summary: 'Si la información vigente responde la duda, se registra la solución. Si no, se crea consulta formal.',
    evidence: ['Sí: documento soporte', 'No: motivo de escalamiento'],
    risk: 'Sin criterio, todo se vuelve RFI o todo queda resuelto verbalmente.',
  },
  {
    id: 'registro',
    lane: 'Oficina Técnica / BIM',
    title: 'Registrar consulta en CDE/Build',
    type: 'activity',
    summary: 'La consulta se formaliza con código, fecha, frente, ubicación, especialidad, descripción, impacto y adjuntos.',
    evidence: ['Código', 'Fecha', 'Frente/ubicación', 'Especialidad', 'Adjuntos/fotos'],
    risk: 'Si faltan campos obligatorios, el flujo se detiene y se reprocesa.',
  },
  {
    id: 'validar',
    lane: 'Oficina Técnica / BIM',
    title: 'Validar consulta y asignar responsable',
    type: 'activity',
    summary: 'Oficina técnica revisa completitud, clasifica la consulta y asigna responsable y plazo de respuesta.',
    evidence: ['Responsable', 'SLA', 'Estado', 'Tipo de consulta'],
    risk: 'Sin responsable ni plazo, nadie gestiona la respuesta.',
  },
  {
    id: 'completa',
    lane: 'Oficina Técnica / BIM',
    title: '¿Consulta completa y válida?',
    type: 'decision',
    summary: 'Si faltan datos, se solicita información. Si está completa, pasa al análisis técnico.',
    evidence: ['Checklist de completitud', 'Motivo de observación'],
    risk: 'El especialista recibe consultas ambiguas y responde tarde o mal.',
  },
  {
    id: 'info',
    lane: 'Oficina Técnica / BIM',
    title: 'Solicitar respuesta o información',
    type: 'activity',
    summary: 'Se pide información faltante a campo o respuesta técnica al especialista, según corresponda.',
    evidence: ['Solicitud formal', 'Fecha límite', 'Destinatario'],
    risk: 'Una solicitud sin plazo se convierte en espera indefinida.',
  },
  {
    id: 'analisis',
    lane: 'Proyectista / Especialista',
    title: 'Analizar consulta y emitir respuesta técnica',
    type: 'activity',
    summary: 'El especialista revisa soporte, modelo, planos y criterios técnicos para emitir respuesta sustentada.',
    evidence: ['Respuesta técnica', 'Documento soporte', 'Restricciones'],
    risk: 'La respuesta puede ser técnicamente correcta, pero no trazable ni comunicada.',
  },
  {
    id: 'impacto',
    lane: 'Proyectista / Especialista',
    title: '¿Requiere cambio formal o impacto mayor?',
    type: 'decision',
    summary: 'Si impacta costo, plazo, diseño, calidad o seguridad, se deriva a RFI/SDI o cambio formal.',
    evidence: ['Criterio de impacto', 'Derivación', 'Aprobación requerida'],
    risk: 'Un cambio de diseño puede ejecutarse como simple consulta.',
  },
  {
    id: 'derivar',
    lane: 'Proyectista / Especialista',
    title: 'Derivar a flujo RFI/SDI',
    type: 'activity',
    summary: 'La consulta se transforma en flujo formal con control de impacto, aprobación y comunicación oficial.',
    evidence: ['ID RFI/SDI', 'Motivo de derivación', 'Responsable'],
    risk: 'Si no se deriva, el cambio queda sin control contractual.',
  },
  {
    id: 'resolucion',
    lane: 'CDE / Documentación',
    title: 'Registrar resolución para trazabilidad',
    type: 'document',
    summary: 'La respuesta, soporte, decisión y evidencias se guardan en el repositorio documental.',
    evidence: ['Respuesta adjunta', 'Historial', 'Estado actualizado'],
    risk: 'Responder sin registrar deja el conocimiento fuera del sistema.',
  },
  {
    id: 'comunicar',
    lane: 'CDE / Documentación',
    title: 'Comunicar solución al equipo',
    type: 'activity',
    summary: 'Se comunica oficialmente la respuesta a campo, producción y áreas afectadas.',
    evidence: ['Comunicación oficial', 'Lista de distribución', 'Fecha'],
    risk: 'La respuesta existe, pero el equipo afectado no se entera.',
  },
  {
    id: 'cierre',
    lane: 'Oficina Técnica / BIM',
    title: 'Cierre de consulta',
    type: 'end',
    summary: 'La consulta queda cerrada solo si tiene respuesta oficial, evidencia, comunicación y estado final.',
    evidence: ['Estado cerrado', 'Fecha de cierre', 'Responsable de cierre'],
    risk: 'Cerrar de palabra elimina trazabilidad y aprendizaje.',
  },
];

export const rfiMetrics = [
  { pain: 'Consultas lentas', metric: 'Tiempo promedio de respuesta', formula: 'Días desde registro hasta respuesta oficial', target: '≤ 3 días' },
  { pain: 'Consultas incompletas', metric: '% consultas completas al primer registro', formula: 'Consultas completas / total de consultas', target: '≥ 90%' },
  { pain: 'Falta de responsable', metric: '% consultas con responsable asignado', formula: 'Consultas con responsable / total', target: '100%' },
  { pain: 'Falta de trazabilidad', metric: '% consultas con evidencia en CDE', formula: 'Consultas con evidencia / total', target: '100%' },
  { pain: 'Consultas sin cierre', metric: '% consultas cerradas', formula: 'Consultas cerradas / total', target: '≥ 95%' },
  { pain: 'Duplicidad', metric: 'N° consultas duplicadas', formula: 'Conteo semanal', target: '0' },
  { pain: 'Impacto en obra', metric: 'Restricciones por consultas abiertas', formula: 'Restricciones asociadas a consultas', target: 'Tendencia a 0' },
  { pain: 'Reproceso', metric: 'Retrabajos asociados a consultas', formula: 'Conteo mensual', target: 'Tendencia a 0' },
];

export const processSheet = [
  ['Nombre del proceso', 'Gestión de consultas técnicas / RFI en obra'],
  ['Problema que resuelve', 'Demoras, pérdida de trazabilidad y respuestas informales ante dudas técnicas de campo.'],
  ['Inicio', 'Detección de duda técnica, inconsistencia, interferencia o falta de información en obra.'],
  ['Fin', 'Consulta cerrada con respuesta oficial, comunicación al equipo y evidencia registrada.'],
  ['Roles', 'Campo, Oficina Técnica/BIM, Proyectista/Especialista, CDE/Documentación, Supervisión/Gerencia.'],
  ['Documentos de entrada', 'Planos, especificaciones, fotos, reportes, modelo, documentos contractuales e historial de consultas.'],
  ['Entregables', 'Registro de consulta, respuesta técnica, evidencia, comunicación oficial y cierre documentado.'],
  ['Dolores actuales', 'Consultas incompletas, respuestas tardías, canales informales, falta de responsable y falta de cierre.'],
  ['Mejoras propuestas', 'Formulario único, campos obligatorios, responsable asignado, plazo de respuesta, registro CDE y tablero de seguimiento.'],
  ['Métrica principal', 'Tiempo promedio de respuesta de consultas técnicas.'],
  ['Meta', 'Responder el 90% de consultas dentro del plazo definido.'],
  ['Frecuencia de revisión', 'Semanal.'],
  ['Responsable del seguimiento', 'Oficina Técnica / Coordinador de documentación.'],
];

export const flows: Flow[] = [
  {
    id: 'consulta-rfi',
    title: 'Gestión de consultas técnicas / RFI',
    owner: 'Campo + Oficina Técnica/BIM + Especialista + CDE',
    priority: 'Caso principal',
    currentPain: 'Consultas incompletas, canales informales, respuestas no oficiales, falta de responsable, cierre verbal y poca trazabilidad.',
    targetOutcome: 'Consulta/RFI con código, datos mínimos, responsable, SLA, análisis técnico, decisión de impacto, respuesta oficial y cierre documentado.',
    inputs: ['Duda técnica', 'Plano/modelo', 'Especificación', 'Foto', 'Ubicación', 'Impacto esperado'],
    activities: ['Detectar duda', 'Revisar documentos', 'Registrar consulta', 'Validar completitud', 'Analizar respuesta', 'Comunicar solución', 'Cerrar'],
    decisions: ['¿Se resuelve con información disponible?', '¿Consulta completa y válida?', '¿Requiere cambio formal o impacto mayor?'],
    outputs: ['Respuesta técnica', 'Registro de consulta', 'Evidencia', 'Historial y control', 'RFI/SDI si aplica'],
    metrics: ['Tiempo de respuesta', '% consultas completas', '% con evidencia', '% cerradas', 'Duplicadas', 'Vencidas'],
    lanes: [
      { lane: 'Campo / Producción', steps: ['Detectar duda', 'Revisar planos/documentos', 'Confirmar si se resuelve'] },
      { lane: 'Oficina Técnica / BIM', steps: ['Registrar en CDE/Build', 'Validar y asignar plazo', 'Solicitar respuesta o información'] },
      { lane: 'Proyectista / Especialista', steps: ['Analizar consulta', 'Emitir respuesta técnica', 'Derivar a RFI/SDI si impacta'] },
      { lane: 'CDE / Documentación', steps: ['Registrar resolución', 'Comunicar al equipo', 'Cerrar con evidencia'] },
    ],
    instructorQuestions: [
      '¿Qué dato mínimo debe traer una consulta para no rebotar?',
      '¿Cuándo una duda se convierte en RFI formal?',
      '¿Qué evidencia prueba que la respuesta fue comunicada y aplicada?',
    ],
  },
  {
    id: 'planos',
    title: 'Control de planos y modelos vigentes',
    owner: 'BIM + Control documentario',
    priority: 'Crítico',
    currentPain: 'Nombres por fecha o versión manual generan riesgo de trabajar con información obsoleta.',
    targetOutcome: 'Planos/modelos con código, revisión, estado, aprobador, link oficial y control de obsolescencia.',
    inputs: ['Plano emitido', 'Modelo', 'Revisión', 'Paquete', 'Aprobador'],
    activities: ['Registrar emisión', 'Validar código', 'Publicar en CDE', 'Notificar cambio', 'Retirar obsoleto'],
    decisions: ['¿Cumple estándar?', '¿Aprobado para construcción?', '¿Impacta frentes relacionados?'],
    outputs: ['Plano vigente', 'Historial de revisión', 'Lista de distribución', 'Registro de cambios'],
    metrics: ['% planos vigentes', 'Planos obsoletos detectados', 'Tiempo de aprobación', 'Cambios por disciplina'],
    lanes: [
      { lane: 'Diseño / BIM', steps: ['Emite revisión', 'Responde observaciones', 'Confirma paquete'] },
      { lane: 'Control documentario', steps: ['Valida código', 'Publica en CDE', 'Marca obsoleto'] },
      { lane: 'Oficina Técnica', steps: ['Revisa impacto', 'Comunica cambios', 'Actualiza log'] },
      { lane: 'Campo', steps: ['Consulta vigente', 'Ejecuta con referencia', 'Reporta conflicto'] },
    ],
    instructorQuestions: [
      '¿Cuál es la fuente única de verdad de un plano vigente?',
      '¿Qué ocurre con la versión anterior?',
      '¿Cómo se comunica el cambio a producción?',
    ],
  },
];

export const caseExamples: CaseExample[] = [
  {
    id: 'rfi',
    title: 'Caso principal · Gestión de consultas técnicas / RFI',
    scope: 'Desde que campo detecta una duda técnica hasta que la respuesta queda registrada, comunicada y cerrada con evidencia.',
    trigger: 'Campo detecta una duda, inconsistencia, interferencia, falta de detalle o conflicto con plano/modelo.',
    objective: 'Evitar decisiones informales en obra y asegurar respuesta oficial, trazabilidad y aprendizaje organizacional.',
    lanes: flows[0].lanes,
    documents: ['Planos DWG/RVT/PDF', 'Especificaciones PDF', 'Fotos JPG/PNG', 'Reportes DOCX/XLSX', 'Modelo BIM si aplica'],
    deliverables: ['Respuesta técnica', 'Registro de consulta', 'Evidencia adjunta', 'Historial de decisión', 'Derivación RFI/SDI si aplica'],
    mappingCriteria: [
      'La consulta debe tener código, fecha, ubicación, especialidad, descripción, impacto y adjuntos.',
      'Si se resuelve con información disponible, se registra solución y soporte.',
      'Si requiere cambio formal o impacto mayor, se deriva a RFI/SDI.',
      'El cierre exige comunicación oficial y evidencia en CDE.',
    ],
    commonMistakes: [
      'Mapear el flujo ideal y no el real.',
      'No diferenciar consulta simple, RFI formal y cambio de diseño.',
      'No registrar quién comunicó la respuesta ni dónde quedó guardada.',
      'No definir qué pasa cuando falta información.',
    ],
    bimUse: 'Revisar plano/modelo para validar si la duda ya está respondida, si existe interferencia o si debe actualizarse información técnica.',
    cdeConfig: 'Formulario de consulta + log + estados: registrada, incompleta, en análisis, respondida, derivada a RFI/SDI, cerrada.',
    metrics: rfiMetrics.map((item) => item.metric),
  },
];
