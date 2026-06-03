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

export type PainDiagnostic = {
  id: string;
  pain: string;
  symptom: string;
  whatHappens: string;
  whyItMatters: string;
  mapSignal: string;
  improvement: string;
  standard: string;
  metric: string;
  rfiExample: string;
};

export type ImprovementLever = {
  id: string;
  title: string;
  intent: string;
  from: string;
  to: string;
  how: string[];
  rfiExample: string;
};

export type StandardLayer = {
  id: string;
  title: string;
  purpose: string;
  artifact: string;
  rule: string;
  owner: string;
  validation: string;
};

export type MaturityLevel = {
  level: string;
  title: string;
  description: string;
  evidence: string;
};

export type WorkshopConsideration = {
  id: string;
  title: string;
  purpose: string;
  mappingAction: string;
  rfiFocus: string;
  expectedEvidence: string;
};

export type BrainstormIdea = {
  id: string;
  title: string;
  question: string;
  ideas: string[];
  feedback: string;
};

export type ExpertMappingInsight = {
  id: string;
  principle: string;
  criterion: string;
  reflection: string;
  tip: string;
};

export type AreaProcessStep = {
  id: string;
  title: string;
  detail: string;
  tool: string;
  evidence: string;
};

export type AreaProcessFlow = {
  id: string;
  label: string;
  title: string;
  intent: string;
  riskOrControl: string;
  lanes: {
    lane: string;
    steps: AreaProcessStep[];
  }[];
};

export type RfiReferenceSignal = {
  id: string;
  signal: string;
  proposalFocus: string;
  avoid: string;
};

export type RfiTargetPhase = {
  id: string;
  number: string;
  title: string;
  owner: string;
  focus: string;
  decision: string;
  evidence: string;
  actions: {
    lane: string;
    action: string;
  }[];
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
  mappingQuestions: string[];
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
    detail: 'Gestión de consultas técnicas como caso base para practicar mapeo campo-oficina.',
    status: 'Caso rector',
    tone: 'blue',
  },
  {
    label: 'Pasos de mapeo',
    value: '10',
    detail: 'Elegir proceso, swimlanes, pasos sin orden, rol, flechas, decisiones, herramientas, evidencia, cuello de botella y cierre.',
    status: 'Método práctico',
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

export const painDiagnostics: PainDiagnostic[] = [
  {
    id: 'canal-informal',
    pain: 'Canales informales',
    symptom: 'La consulta nace en WhatsApp, llamada o pasillo y luego nadie sabe cuál fue la respuesta oficial.',
    whatHappens: 'El proceso existe, pero vive fuera del sistema. La información se mueve más rápido que la trazabilidad.',
    whyItMatters: 'Una decisión informal puede convertirse en reproceso, reclamo contractual, ejecución con plano incorrecto o pérdida de aprendizaje.',
    mapSignal: 'Flechas que salen del flujo formal, actividades sin documento de soporte y cierres que dependen de una persona.',
    improvement: 'Crear un único punto de entrada: formulario de consulta técnica con código, adjuntos y responsable.',
    standard: 'Toda consulta que impacte ejecución debe registrarse en CDE antes de ser respondida.',
    metric: '% consultas registradas en CDE vs. consultas detectadas en campo.',
    rfiExample: 'El residente pregunta por chat si puede modificar un detalle. El mapa debe obligar registro antes de ejecutar.',
  },
  {
    id: 'input-incompleto',
    pain: 'Información incompleta',
    symptom: 'La oficina técnica devuelve la consulta porque falta ubicación, foto, plano, especialidad o descripción del impacto.',
    whatHappens: 'La consulta avanza y retrocede. El especialista pierde tiempo interpretando el problema en vez de resolverlo.',
    whyItMatters: 'Cada rebote aumenta plazo, baja confianza y puede detener una cuadrilla completa.',
    mapSignal: 'Bucles de retorno, esperas y decisiones del tipo: ¿consulta completa y válida?',
    improvement: 'Definir campos obligatorios y checklist de completitud antes de asignar responsable.',
    standard: 'Sin ubicación, especialidad, documento de referencia, descripción y evidencia, la consulta no cambia a estado “en análisis”.',
    metric: '% consultas completas al primer registro.',
    rfiExample: 'Consulta estructural sin eje/nivel ni foto. El flujo debe volver a campo antes de llegar al proyectista.',
  },
  {
    id: 'responsable-ausente',
    pain: 'Responsable difuso',
    symptom: 'Todos saben que hay una duda, pero nadie tiene dueño, plazo ni siguiente acción.',
    whatHappens: 'La consulta queda abierta por inercia. El seguimiento depende de urgencias o memoria.',
    whyItMatters: 'Sin dueño no hay gestión, escalamiento ni rendición de cuentas.',
    mapSignal: 'Actividades sin carril claro, decisiones sin aprobador y tareas que cruzan roles sin handoff.',
    improvement: 'Asignar responsable, plazo de respuesta y ruta de escalamiento desde el registro.',
    standard: 'Toda consulta debe tener owner, SLA, estado y fecha de revisión.',
    metric: '% consultas con responsable y plazo asignado.',
    rfiExample: 'Oficina técnica registra la duda, pero no define si responde BIM, proyectista o supervisión.',
  },
  {
    id: 'version-obsoleta',
    pain: 'Información no vigente',
    symptom: 'Campo consulta o ejecuta con una versión de plano/modelo diferente a la publicada oficialmente.',
    whatHappens: 'El proceso de consulta se contamina porque la fuente de información inicial no es confiable.',
    whyItMatters: 'Una respuesta correcta sobre un documento obsoleto sigue siendo una mala decisión.',
    mapSignal: 'Inputs sin versión, revisión documental sin fuente única y ausencia de control de obsolescencia.',
    improvement: 'Conectar el flujo RFI con control documental: versión, estado, paquete y link oficial.',
    standard: 'Toda consulta debe referenciar documento vigente desde CDE; si usa otra fuente, se marca como riesgo.',
    metric: 'N° consultas asociadas a documentos obsoletos.',
    rfiExample: 'La duda se genera por un plano impreso antiguo. El mapa debe capturar versión consultada.',
  },
  {
    id: 'cierre-debil',
    pain: 'Cierre sin evidencia',
    symptom: 'La respuesta se comunica, pero no queda claro si fue aplicada, difundida ni cerrada oficialmente.',
    whatHappens: 'El proceso termina en conversación, no en aprendizaje trazable.',
    whyItMatters: 'La misma duda vuelve a aparecer y gerencia no puede auditar decisiones técnicas.',
    mapSignal: 'Fin del proceso sin entregable, sin repositorio, sin estado cerrado y sin comunicación oficial.',
    improvement: 'Definir criterios de cierre: respuesta, soporte, comunicación, estado y responsable.',
    standard: 'Una consulta solo se cierra si tiene evidencia completa y fecha de comunicación al equipo afectado.',
    metric: '% consultas cerradas con evidencia completa.',
    rfiExample: 'El especialista respondió por correo, pero la solución no se guardó ni se comunicó al frente afectado.',
  },
  {
    id: 'mejora-no-sostenida',
    pain: 'Mejora que no se sostiene',
    symptom: 'El equipo acuerda mejorar el flujo, pero a las dos semanas vuelve al hábito anterior.',
    whatHappens: 'El mapa se queda como taller, no como sistema operativo.',
    whyItMatters: 'Sin estándar, métrica y dueño, la adopción BIM se vuelve capacitación sin cambio operativo.',
    mapSignal: 'No existen indicadores, frecuencia de revisión, tablero, propietario del proceso ni acciones correctivas.',
    improvement: 'Convertir el mapa en estándar: log, estados, roles, formularios, tablero y revisión semanal.',
    standard: 'Todo proceso crítico debe tener ficha, métrica principal, owner y ritual de control.',
    metric: 'Cumplimiento semanal del flujo estándar.',
    rfiExample: 'Se define el flujo RFI, pero nadie revisa vencidas, incompletas, duplicadas ni restricciones abiertas.',
  },
];

export const improvementLevers: ImprovementLever[] = [
  {
    id: 'eliminar',
    title: 'Eliminar',
    intent: 'Quitar pasos que no agregan valor ni reducen riesgo.',
    from: 'Revisiones duplicadas, envíos paralelos, aprobaciones informales.',
    to: 'Un solo registro, una ruta de validación y una fuente oficial.',
    how: ['Eliminar canales paralelos', 'Eliminar campos que nadie usa', 'Eliminar aprobaciones sin criterio'],
    rfiExample: 'No duplicar la consulta en correo, Excel y chat; el CDE es el registro maestro.',
  },
  {
    id: 'simplificar',
    title: 'Simplificar',
    intent: 'Reducir fricción para que el equipo sí use el proceso.',
    from: 'Formulario largo, estados confusos y responsables ambiguos.',
    to: 'Campos mínimos, estados entendibles y decisión simple de escalamiento.',
    how: ['Agrupar campos por decisión', 'Reducir estados a los necesarios', 'Usar lenguaje de obra'],
    rfiExample: 'Separar consulta simple, RFI formal y cambio mayor con tres criterios visibles.',
  },
  {
    id: 'estandarizar',
    title: 'Estandarizar',
    intent: 'Convertir buenas prácticas en reglas repetibles.',
    from: 'Cada frente registra y responde de una manera diferente.',
    to: 'Código, plantilla, estados, roles, SLA y evidencia obligatoria.',
    how: ['Crear ficha de proceso', 'Definir nomenclatura', 'Definir checklist de completitud'],
    rfiExample: 'Todo RFI debe tener código, ubicación, especialidad, documento fuente, impacto y adjuntos.',
  },
  {
    id: 'digitalizar',
    title: 'Digitalizar',
    intent: 'Llevar el estándar al CDE para hacerlo visible y auditable.',
    from: 'Registro manual disperso y seguimiento por memoria.',
    to: 'Formulario, log, tablero de estados, repositorio y alertas.',
    how: ['Configurar formulario en CDE/Build', 'Crear log de consultas', 'Publicar tablero de vencidas'],
    rfiExample: 'Estado automático: registrada, incompleta, en análisis, respondida, derivada, cerrada.',
  },
  {
    id: 'automatizar',
    title: 'Automatizar',
    intent: 'Acelerar seguimiento sin perder control humano.',
    from: 'Recordatorios manuales y búsqueda de responsables.',
    to: 'Alertas por SLA, campos obligatorios, asignación sugerida y reportes periódicos.',
    how: ['Alertas de vencimiento', 'Validaciones de campos', 'Resumen semanal de RFIs abiertas'],
    rfiExample: 'Si una consulta pasa 48 horas sin responsable, se marca en riesgo y se escala.',
  },
  {
    id: 'controlar',
    title: 'Controlar',
    intent: 'Hacer que el proceso mejore con datos, no con percepciones.',
    from: 'Reuniones donde se habla de problemas sin evidencia.',
    to: 'Métricas, tendencias, responsables y acciones correctivas.',
    how: ['Medir lead time', 'Revisar vencidas', 'Identificar causa raíz de duplicadas'],
    rfiExample: 'Revisión semanal: abiertas, vencidas, incompletas, derivadas y restricciones asociadas.',
  },
];

export const standardLayers: StandardLayer[] = [
  {
    id: 'ficha',
    title: 'Ficha del proceso',
    purpose: 'Alinear nombre, objetivo, alcance, inicio, fin y dueño del proceso.',
    artifact: 'Documento breve de proceso + versión vigente.',
    rule: 'Ningún flujo se implementa sin inicio, fin, owner y criterio de cierre.',
    owner: 'Líder BIM / Oficina técnica',
    validation: 'El equipo puede explicar el flujo en menos de 3 minutos usando la misma definición.',
  },
  {
    id: 'formulario',
    title: 'Formulario y datos mínimos',
    purpose: 'Evitar consultas incompletas y rebotes innecesarios.',
    artifact: 'Formulario CDE/Build + campos obligatorios.',
    rule: 'Si falta dato crítico, la consulta queda incompleta y no pasa a análisis.',
    owner: 'Oficina técnica / CDE',
    validation: 'Más del 90% de consultas entran completas al primer registro.',
  },
  {
    id: 'estados',
    title: 'Estados del flujo',
    purpose: 'Hacer visible dónde está cada consulta y qué falta para cerrarla.',
    artifact: 'Estados: registrada, incompleta, en análisis, respondida, derivada, cerrada.',
    rule: 'Cada estado debe tener responsable, entrada, salida y condición de cambio.',
    owner: 'CDE / Control documentario',
    validation: 'No existen consultas abiertas sin estado actualizado.',
  },
  {
    id: 'raci',
    title: 'Roles y matriz RACI',
    purpose: 'Evitar confusión entre quien registra, valida, responde, aprueba y comunica.',
    artifact: 'Matriz RACI por etapa del flujo.',
    rule: 'Cada actividad crítica tiene un responsable único y roles de apoyo definidos.',
    owner: 'Gerencia de proyecto / Oficina técnica',
    validation: 'Toda consulta tiene responsable y plazo dentro del día de registro.',
  },
  {
    id: 'cde',
    title: 'Repositorio CDE',
    purpose: 'Centralizar evidencia, historial, soporte y comunicación oficial.',
    artifact: 'Carpetas, permisos, nomenclatura, log y tablero.',
    rule: 'La fuente oficial es el CDE; los canales externos solo notifican, no sustituyen registro.',
    owner: 'CDE Manager / BIM Manager',
    validation: '100% de consultas cerradas tienen soporte y respuesta archivada.',
  },
  {
    id: 'gobierno',
    title: 'Gobierno y mejora continua',
    purpose: 'Mantener vivo el estándar después del taller.',
    artifact: 'Ritual semanal, tablero KPI, lista de acciones y control de cambios.',
    rule: 'Cada desviación repetida genera ajuste de estándar, capacitación o automatización.',
    owner: 'PM / BIM Manager / Oficina técnica',
    validation: 'Se revisan vencidas, duplicadas, causa raíz y acciones de mejora cada semana.',
  },
];

export const maturityLevels: MaturityLevel[] = [
  {
    level: '0',
    title: 'Invisible',
    description: 'El proceso ocurre, pero nadie puede explicarlo igual ni auditarlo.',
    evidence: 'Chats, correos sueltos, memoria personal y urgencias.',
  },
  {
    level: '1',
    title: 'Dibujado',
    description: 'Existe un mapa inicial, pero todavía no gobierna el trabajo diario.',
    evidence: 'Diagrama, roles preliminares y dolores identificados.',
  },
  {
    level: '2',
    title: 'Estandarizado',
    description: 'El flujo tiene ficha, campos, estados, responsables y entregables definidos.',
    evidence: 'Ficha de proceso, formulario, RACI y criterios de cierre.',
  },
  {
    level: '3',
    title: 'Digitalizado',
    description: 'El estándar vive en el CDE, se registra y puede monitorearse.',
    evidence: 'Log, tablero, permisos, estados y evidencia centralizada.',
  },
  {
    level: '4',
    title: 'Medido y mejorado',
    description: 'El equipo revisa datos, corrige causas raíz y actualiza el estándar.',
    evidence: 'KPIs, revisión semanal, acciones correctivas y trazabilidad histórica.',
  },
];

export const workshopConsiderations: WorkshopConsideration[] = [
  {
    id: 'no-partir-del-ideal',
    title: 'Mapear primero el flujo real',
    purpose: 'Evitar que el equipo dibuje el proceso que “debería” existir y no el que realmente usa en obra.',
    mappingAction: 'Tomar un caso reciente y reconstruirlo con hechos: quién detectó, por dónde se envió, quién respondió, qué evidencia quedó y dónde se cerró.',
    rfiFocus: 'Diferenciar consulta verbal, consulta registrada, RFI formal y cambio con impacto.',
    expectedEvidence: 'Mapa actual con canales informales, retornos, esperas y puntos sin evidencia.',
  },
  {
    id: 'listar-sin-orden',
    title: 'Listar sin ordenar para revelar omisiones',
    purpose: 'Capturar todas las acciones antes de imponer secuencia. Esto muestra pasos invisibles como buscar versión, pedir foto o perseguir responsables.',
    mappingAction: 'Usar notas rápidas: una actividad por tarjeta, con verbo + objeto. Primero capturar todo; luego ordenar, filtrar y mejorar.',
    rfiFocus: 'Incluir pasos ocultos: revisar plano vigente, pedir ubicación, confirmar especialidad, buscar historial y validar impacto.',
    expectedEvidence: 'Inventario bruto de actividades y dolores asociados a cada paso.',
  },
  {
    id: 'roles-no-personas',
    title: 'Asignar roles, no nombres',
    purpose: 'Hacer que el estándar funcione aunque cambien personas o equipos.',
    mappingAction: 'Cambiar nombres propios por roles y áreas: Campo, Oficina Técnica, BIM, Diseño, Proyectos y Calidad.',
    rfiFocus: 'Definir quién registra, quién valida completitud, quién responde, quién aprueba impacto y quién cierra.',
    expectedEvidence: 'Swimlanes claros y matriz mínima de responsabilidad por etapa.',
  },
  {
    id: 'decision-con-criterio',
    title: 'Toda decisión necesita criterio',
    purpose: 'Evitar rombos decorativos que no cambian el camino o que nadie sabe responder.',
    mappingAction: 'Convertir cada decisión en una pregunta Sí/No con criterio, responsable, evidencia y ruta siguiente.',
    rfiFocus: 'Las tres decisiones críticas son: se resuelve con información disponible, está completa y requiere cambio formal o impacto mayor.',
    expectedEvidence: 'Decisiones con rutas Sí/No, criterio de evaluación y responsable de decisión.',
  },
  {
    id: 'herramientas-trazabilidad',
    title: 'Las herramientas revelan trazabilidad',
    purpose: 'Ver si la información vive en CDE o se dispersa entre WhatsApp, correo, Excel, planos locales y reuniones.',
    mappingAction: 'Marcar en cada paso qué herramienta se usa, si deja evidencia auditable y si debe migrar al CDE.',
    rfiFocus: 'CDE/Build debe ser el registro maestro; chats o correos solo pueden notificar o complementar.',
    expectedEvidence: 'Mapa con herramienta por paso y riesgos de dispersión documental.',
  },
  {
    id: 'cierre-auditable',
    title: 'El cierre debe ser auditable',
    purpose: 'Evitar que el proceso termine cuando alguien “ya respondió” pero nadie puede probar comunicación, aplicación o archivo.',
    mappingAction: 'Definir documento, estado, responsable y evidencia mínima para probar que el proceso terminó correctamente.',
    rfiFocus: 'Una RFI/consulta se cierra solo con respuesta oficial, soporte, comunicación al equipo y estado actualizado en CDE.',
    expectedEvidence: 'Criterio de cierre, evidencias obligatorias y métrica de control.',
  },
];

export const mappingBrainstormIdeas: BrainstormIdea[] = [
  {
    id: 'entradas',
    title: 'Entradas mínimas',
    question: '¿Qué información debe existir para que la consulta no rebote?',
    ideas: [
      'Código de consulta, fecha, frente, ubicación, nivel/eje y especialidad.',
      'Plano/modelo/especificación vigente con revisión visible.',
      'Foto, descripción del problema e impacto esperado en producción.',
    ],
    feedback: 'Si una consulta puede registrarse sin estos datos, el proceso está diseñado para generar retrabajo.',
  },
  {
    id: 'roles',
    title: 'Responsables y handoffs',
    question: '¿Dónde cambia la responsabilidad entre áreas?',
    ideas: [
      'Campo levanta evidencia; Oficina Técnica valida y clasifica.',
      'BIM verifica modelo y versión; Diseño responde técnicamente.',
      'Proyectos evalúa impacto; Calidad controla evidencia y cierre.',
    ],
    feedback: 'Cada handoff debe tener entrada, salida, responsable, plazo y evidencia. Si falta uno, aparecerá espera.',
  },
  {
    id: 'decisiones',
    title: 'Decisiones críticas',
    question: '¿Qué preguntas cambian el camino del flujo?',
    ideas: [
      '¿Se resuelve con información disponible?',
      '¿La consulta está completa y válida?',
      '¿Requiere cambio formal, RFI/SDI o evaluación de impacto?',
    ],
    feedback: 'Una decisión sin criterio no ayuda a mapear; solo traslada la ambigüedad al diagrama.',
  },
  {
    id: 'herramientas',
    title: 'Herramientas y trazabilidad',
    question: '¿Dónde vive la información y cuál es la fuente oficial?',
    ideas: [
      'Separar canal de notificación de repositorio oficial.',
      'Usar CDE/Build como registro maestro del flujo.',
      'Evitar que WhatsApp, correo o Excel sean la única evidencia.',
    ],
    feedback: 'Si una respuesta existe pero no se puede encontrar, el proceso no está controlado.',
  },
  {
    id: 'cuellos',
    title: 'Cuellos de botella',
    question: '¿Dónde se detiene, rebota o duplica el trabajo?',
    ideas: [
      'Consultas incompletas que vuelven a Campo.',
      'BIM revisa versiones sin link oficial.',
      'Diseño responde sin criterio de impacto y Proyectos se entera tarde.',
    ],
    feedback: 'El cuello de botella debe convertirse en regla, campo obligatorio, SLA, automatización o control semanal.',
  },
  {
    id: 'cierre',
    title: 'Cierre verificable',
    question: '¿Qué prueba que la consulta terminó bien?',
    ideas: [
      'Respuesta oficial vinculada al código de consulta.',
      'Soporte técnico/documental guardado en CDE.',
      'Comunicación al frente afectado, estado cerrado y responsable de cierre.',
    ],
    feedback: 'El cierre no es “ya respondieron”; el cierre es evidencia completa, trazable y comunicada.',
  },
];

export const expertMappingInsights: ExpertMappingInsight[] = [
  {
    id: 'decisiones',
    principle: 'No mapees tareas: mapea decisiones, transferencias y evidencia.',
    criterion: 'Una actividad aporta valor si cambia estado, produce evidencia o habilita una decisión.',
    reflection: 'Si solo describes acciones, el mapa se vuelve narrativo; si describes decisiones, el mapa se vuelve gestionable.',
    tip: 'Marca con color cada punto donde el flujo puede seguir por más de una ruta.',
  },
  {
    id: 'owner',
    principle: 'Un proceso sin owner es una conversación distribuida.',
    criterion: 'Cada paso crítico necesita responsable, plazo, entrada mínima y salida verificable.',
    reflection: 'La ambigüedad no aparece en el diagrama; aparece cuando nadie sabe quién debe cerrar el siguiente paso.',
    tip: 'Si un paso empieza con “alguien revisa”, todavía no está mapeado.',
  },
  {
    id: 'cierre',
    principle: 'El cierre no es responder; es respuesta + evidencia + comunicación + estado.',
    criterion: 'Un cierre válido debe poder auditarse sin preguntarle a la persona que participó.',
    reflection: 'La trazabilidad se pierde cuando el equipo confunde avance operativo con cierre documental.',
    tip: 'Define el evento final antes de discutir herramientas.',
  },
  {
    id: 'cde',
    principle: 'Si la información vive solo en WhatsApp, el proceso no está gobernado.',
    criterion: 'El canal puede notificar, pero la fuente oficial debe ser CDE, log o repositorio controlado.',
    reflection: 'Digitalizar no es usar más herramientas; es reducir fuentes paralelas de verdad.',
    tip: 'Separa canal de comunicación, repositorio oficial y evidencia auditable.',
  },
  {
    id: 'handoff',
    principle: 'Cada handoff debe tener entrada, salida, responsable y SLA.',
    criterion: 'Una transferencia débil crea espera, retrabajo o doble interpretación.',
    reflection: 'El cuello de botella casi siempre vive entre áreas, no dentro de una sola tarea.',
    tip: 'Revisa qué necesita el siguiente rol para no devolver la consulta.',
  },
  {
    id: 'criterio',
    principle: 'Una decisión sin criterio solo traslada la ambigüedad al diagrama.',
    criterion: 'Todo rombo debe tener pregunta Sí/No, criterio, responsable y evidencia de decisión.',
    reflection: 'El mapa mejora cuando reduce interpretaciones, no cuando agrega más símbolos.',
    tip: 'Si no puedes escribir la pregunta de decisión, no dibujes el rombo.',
  },
];

export const rfiAreaLanes = [
  'Campo / Producción',
  'Oficina Técnica',
  'Área BIM',
  'Área de Diseño',
  'Área de Proyectos',
  'Área de Calidad',
];

export const rfiAreaFlows: AreaProcessFlow[] = [
  {
    id: 'actual',
    label: 'Proceso ejemplo actual',
    title: 'Gestión RFI / consulta técnica como suele ocurrir',
    intent: 'Mostrar el flujo real con fricción: canales informales, validación incompleta, respuestas dispersas y cierre débil.',
    riskOrControl: 'Riesgo dominante: la respuesta puede existir, pero no queda trazada, validada ni comunicada como decisión oficial.',
    lanes: [
      {
        lane: 'Campo / Producción',
        steps: [
          {
            id: 'actual-campo-1',
            title: 'Detecta duda en frente de obra',
            detail: 'El residente o responsable de frente encuentra una incompatibilidad, falta de detalle o interferencia durante la ejecución.',
            tool: 'Observación en campo, foto, plano impreso o PDF local.',
            evidence: 'Foto y descripción parcial, muchas veces sin ubicación completa.',
          },
          {
            id: 'actual-campo-2',
            title: 'Consulta por canal informal',
            detail: 'La duda se envía por WhatsApp, llamada o correo directo para resolver rápido.',
            tool: 'WhatsApp / llamada / correo.',
            evidence: 'Mensaje no estructurado; difícil de auditar o reutilizar.',
          },
        ],
      },
      {
        lane: 'Oficina Técnica',
        steps: [
          {
            id: 'actual-ot-1',
            title: 'Recibe consulta incompleta',
            detail: 'Revisa si la duda tiene plano, ubicación, especialidad, impacto, frente y foto suficiente.',
            tool: 'Correo, Excel, carpeta compartida o conversación previa.',
            evidence: 'Registro parcial o reenvío de mensaje.',
          },
          {
            id: 'actual-ot-2',
            title: 'Reenvía a área técnica',
            detail: 'Escala a BIM, Diseño o Proyectos sin siempre definir SLA, prioridad ni responsable único.',
            tool: 'Correo o mensaje directo.',
            evidence: 'Cadena de correos sin estado único.',
          },
        ],
      },
      {
        lane: 'Área BIM',
        steps: [
          {
            id: 'actual-bim-1',
            title: 'Busca modelo o plano vigente',
            detail: 'Verifica si el modelo, planos o interferencias explican la duda, pero puede no quedar conectado al log.',
            tool: 'Modelo BIM, planos, Autodesk Docs o archivos locales.',
            evidence: 'Captura o comentario técnico no necesariamente centralizado.',
          },
          {
            id: 'actual-bim-2',
            title: 'Responde hallazgo técnico',
            detail: 'Indica si hay interferencia, versión incorrecta o necesidad de consultar diseño.',
            tool: 'Captura BIM, correo o reunión rápida.',
            evidence: 'Evidencia BIM dispersa o sin código de consulta.',
          },
        ],
      },
      {
        lane: 'Área de Diseño',
        steps: [
          {
            id: 'actual-diseno-1',
            title: 'Analiza consulta con contexto variable',
            detail: 'Recibe la duda con información desigual y debe reconstruir el problema antes de responder.',
            tool: 'Correo, planos, especificaciones, modelo o reunión.',
            evidence: 'Respuesta técnica sin plantilla uniforme.',
          },
          {
            id: 'actual-diseno-2',
            title: 'Emite respuesta técnica',
            detail: 'Responde por correo o mensaje; no siempre queda claro si es consulta simple, RFI o cambio formal.',
            tool: 'Correo / PDF / comentario sobre plano.',
            evidence: 'Respuesta no siempre asociada a código, estado o criterio de impacto.',
          },
        ],
      },
      {
        lane: 'Área de Proyectos',
        steps: [
          {
            id: 'actual-proyectos-1',
            title: 'Evalúa impacto tarde',
            detail: 'Proyectos puede enterarse cuando la duda ya generó espera, restricción, retrabajo o impacto de plazo/costo.',
            tool: 'Reunión, reporte semanal o escalamiento puntual.',
            evidence: 'Acuerdo verbal o acción correctiva no siempre ligada al RFI.',
          },
        ],
      },
      {
        lane: 'Área de Calidad',
        steps: [
          {
            id: 'actual-calidad-1',
            title: 'Recibe evidencia después',
            detail: 'Calidad revisa registros, fotos o cierre cuando el problema ya fue atendido operativamente.',
            tool: 'Carpeta documental, reportes, protocolos o evidencias sueltas.',
            evidence: 'Archivo parcial; difícil comprobar trazabilidad completa.',
          },
          {
            id: 'actual-calidad-2',
            title: 'Cierre débil',
            detail: 'La consulta se da por cerrada porque alguien respondió, no porque exista criterio auditable de cierre.',
            tool: 'Excel, correo o memoria de reunión.',
            evidence: 'Estado final ambiguo o sin comunicación oficial al frente.',
          },
        ],
      },
    ],
  },
  {
    id: 'mejorado',
    label: 'Proceso propuesto como debe ser',
    title: 'Gestión RFI / consulta técnica gobernada por CDE',
    intent: 'Tomar las ideas útiles del mapeo genérico y ordenarlas como proceso implementable: gate de información, triage, soporte BIM, respuesta técnica, impacto y cierre.',
    riskOrControl: 'Control dominante: la consulta no se repite en cada área; avanza por estados, responsables, evidencia, SLA y criterio de cierre.',
    lanes: [
      {
        lane: 'Campo / Producción',
        steps: [
          {
            id: 'mejorado-campo-1',
            title: 'Detecta la duda y verifica datos mínimos',
            detail: 'Campo confirma que la consulta tiene ubicación, frente, actividad, especialidad, documento de referencia, foto y descripción del impacto antes de enviarla.',
            tool: 'Checklist móvil de consulta técnica.',
            evidence: 'Datos mínimos completos: frente, ubicación, especialidad, plano/modelo, foto y actividad afectada.',
          },
          {
            id: 'mejorado-campo-2',
            title: 'Registra consulta en CDE/Build',
            detail: 'La duda se convierte en solicitud trazable con código, fecha, responsable solicitante, prioridad tentativa y soporte adjunto.',
            tool: 'Formulario CDE/Build desde obra.',
            evidence: 'Código de consulta, adjuntos, descripción del problema e impacto esperado en producción.',
          },
          {
            id: 'mejorado-campo-3',
            title: 'Soporta la respuesta en obra',
            detail: 'Cuando recibe la respuesta oficial, Campo valida que sea aplicable al frente y reporta si requiere aclaración adicional.',
            tool: 'CDE/Build + evidencia de aplicación.',
            evidence: 'Confirmación de recepción, foto o comentario de aplicación en campo.',
          },
        ],
      },
      {
        lane: 'Oficina Técnica',
        steps: [
          {
            id: 'mejorado-ot-1',
            title: 'Valida completitud y necesidad de RFI',
            detail: 'Revisa si la información está completa, si la duda se resuelve con documentos vigentes o si debe formularse como RFI/SDI.',
            tool: 'Log maestro de consultas / CDE.',
            evidence: 'Estado de completitud, decisión de clasificación, prioridad y motivo de escalamiento.',
          },
          {
            id: 'mejorado-ot-2',
            title: 'Revisa documentos técnicos y especificaciones',
            detail: 'Contrasta planos, especificaciones, EETT, historial y consultas previas para evitar duplicados o respuestas ya disponibles.',
            tool: 'Autodesk Docs / CDE + log RFI.',
            evidence: 'Documento revisado, versión vigente, consulta relacionada y resultado de revisión documental.',
          },
          {
            id: 'mejorado-ot-3',
            title: 'Asigna responsable, prioridad y SLA',
            detail: 'Deriva a BIM, Diseño o Proyectos con responsable claro, plazo de respuesta y ruta de escalamiento si vence.',
            tool: 'Tablero de estados, log RFI y alertas.',
            evidence: 'Owner asignado, prioridad, SLA, fecha objetivo y estado actualizado en el log.',
          },
        ],
      },
      {
        lane: 'Área BIM',
        steps: [
          {
            id: 'mejorado-bim-1',
            title: 'Revisa modelo BIM según consulta de campo',
            detail: 'Verifica modelo, plano vinculado, coordenada/frente, versión y posibles interferencias asociadas a la consulta.',
            tool: 'Modelo BIM, Autodesk Docs, visor/model coordination.',
            evidence: 'Captura BIM, versión consultada, coordenada/frente y hallazgo técnico.',
          },
          {
            id: 'mejorado-bim-2',
            title: 'Genera incidencia, redline o soporte BIM',
            detail: 'Cuando corresponde, crea incidencia en modelo, redline en plano o soporte visual para que Diseño responda con contexto suficiente.',
            tool: 'Issue BIM / redline / captura vinculada al CDE.',
            evidence: 'Issue, redline, vista 3D, comentario técnico y enlace al modelo/documento.',
          },
          {
            id: 'mejorado-bim-3',
            title: 'Actualiza modelo si la respuesta lo exige',
            detail: 'Si la respuesta aprobada modifica el modelo o condición as-built, BIM registra la acción pendiente o ejecutada con control de versión.',
            tool: 'Modelo coordinado + control de revisiones.',
            evidence: 'Registro de actualización, versión del modelo y vínculo a la respuesta oficial.',
          },
        ],
      },
      {
        lane: 'Área de Diseño',
        steps: [
          {
            id: 'mejorado-diseno-1',
            title: 'Valida la consulta técnica',
            detail: 'Diseño revisa la necesidad formulada, el soporte BIM/documental y el contexto de campo antes de emitir criterio.',
            tool: 'Plantilla de respuesta técnica.',
            evidence: 'Criterio técnico, documento base, alcance de respuesta y restricciones de aplicación.',
          },
          {
            id: 'mejorado-diseno-2',
            title: 'Emite respuesta oficial sustentada',
            detail: 'La respuesta queda asociada al código de consulta, con plano, especificación, croquis, redline o criterio técnico aplicable.',
            tool: 'Respuesta técnica en CDE / transmittal.',
            evidence: 'Respuesta oficial, soporte técnico, referencia documental y condición de aplicación.',
          },
          {
            id: 'mejorado-diseno-3',
            title: 'Define cambio de diseño o especificación',
            detail: 'Si la solución cambia diseño, especificación o procedimiento, se marca para evaluación formal de Proyectos.',
            tool: 'Criterio de cambio técnico.',
            evidence: 'Decisión explícita: consulta simple, RFI/SDI, cambio de diseño o cambio contractual.',
          },
        ],
      },
      {
        lane: 'Área de Proyectos',
        steps: [
          {
            id: 'mejorado-proyectos-1',
            title: 'Verifica impacto técnico y contractual',
            detail: 'Evalúa si la respuesta afecta alcance, costo, plazo, seguridad, calidad, productividad o condiciones contractuales.',
            tool: 'Matriz de impacto y tablero de restricciones.',
            evidence: 'Impacto registrado, decisión de escalamiento y aprobación si aplica.',
          },
          {
            id: 'mejorado-proyectos-2',
            title: 'Determina procedimiento constructivo o cambio formal',
            detail: 'Si la solución requiere ajustar método, secuencia o procedimiento constructivo, define ruta de aprobación y control.',
            tool: 'Matriz de cambio / procedimiento constructivo.',
            evidence: 'Decisión de procedimiento, responsable de aprobación y condición para ejecutar.',
          },
          {
            id: 'mejorado-proyectos-3',
            title: 'Autoriza derivación formal',
            detail: 'Cuando corresponde, deriva a RFI/SDI/cambio formal con control contractual, responsable y fecha compromiso.',
            tool: 'Flujo formal de cambios / RFI.',
            evidence: 'ID RFI/SDI, aprobador, responsable y fecha de compromiso.',
          },
        ],
      },
      {
        lane: 'Área de Calidad',
        steps: [
          {
            id: 'mejorado-calidad-1',
            title: 'Compatibiliza evidencia, planos y formatos',
            detail: 'Revisa que la respuesta tenga soporte suficiente, documentos compatibles, formato correcto y evidencia lista para auditoría.',
            tool: 'Checklist de calidad + repositorio CDE.',
            evidence: 'Formato validado, documentos soporte, trazabilidad y observaciones cerradas.',
          },
          {
            id: 'mejorado-calidad-2',
            title: 'Controla comunicación oficial y cierre',
            detail: 'Confirma que la solución fue comunicada al frente correcto, que el log está actualizado y que el estado final es auditable.',
            tool: 'Log RFI / tablero KPI semanal.',
            evidence: 'Comunicación oficial, lista de distribución, estado cerrado y responsable de cierre.',
          },
          {
            id: 'mejorado-calidad-3',
            title: 'Define herramientas y formatos de control',
            detail: 'Convierte el aprendizaje del caso en mejora del formulario, checklist, log, codificación, métrica o estándar de evidencia.',
            tool: 'Lecciones aprendidas + estándar de proceso.',
            evidence: 'Mejora aprobada, campo obligatorio, métrica ajustada o regla incorporada al estándar.',
          },
          {
            id: 'mejorado-calidad-4',
            title: 'Cierra y mide el proceso',
            detail: 'Cierra solo si hay respuesta, soporte, comunicación, estado final, tiempo de respuesta y responsable de cierre.',
            tool: 'Tablero KPI semanal.',
            evidence: 'Estado cerrado, fecha, responsable, tiempo de respuesta y causa raíz si hubo demora.',
          },
        ],
      },
    ],
  },
];

export const rfiReferenceSignals: RfiReferenceSignal[] = [
  {
    id: 'completitud',
    signal: 'Verificar si la información está completa',
    proposalFocus: 'Convertirlo en gate de entrada con campos obligatorios antes de escalar a Oficina Técnica, BIM o Diseño.',
    avoid: 'Evitar que cada área vuelva a pedir lo mismo y el flujo se llene de retornos.',
  },
  {
    id: 'necesidad-rfi',
    signal: 'Identificar necesidad de formular RFI',
    proposalFocus: 'Hacer que Oficina Técnica clasifique: consulta simple, RFI/SDI, cambio de diseño o cambio con impacto.',
    avoid: 'Evitar que cualquier duda sea RFI o que un cambio real se trate como consulta informal.',
  },
  {
    id: 'documentos',
    signal: 'Revisar especificaciones, planos y documentos técnicos',
    proposalFocus: 'Usar CDE como fuente única de verdad y registrar versión consultada, documento soporte y resultado de revisión.',
    avoid: 'Evitar respuestas basadas en PDFs locales, planos obsoletos o memoria de reuniones.',
  },
  {
    id: 'bim-redlines',
    signal: 'Soporte BIM, incidencias, redlines y modelo as-built',
    proposalFocus: 'Vincular issue, redline, captura o actualización BIM al código de consulta y a la respuesta oficial.',
    avoid: 'Evitar capturas sueltas sin relación con log, versión, responsable o cierre.',
  },
  {
    id: 'impacto',
    signal: 'Evaluación de impacto y procedimiento constructivo',
    proposalFocus: 'Ubicar la decisión en Proyectos: costo, plazo, alcance, seguridad, calidad, productividad y ruta formal si aplica.',
    avoid: 'Evitar que Diseño resuelva técnicamente sin que el impacto operativo/contractual quede evaluado.',
  },
  {
    id: 'control',
    signal: 'Actualización del log, formatos y herramientas de control',
    proposalFocus: 'Cerrar con Calidad y Oficina Técnica: log actualizado, comunicación oficial, evidencia, métrica y mejora del estándar.',
    avoid: 'Evitar cierres verbales que no dejan aprendizaje ni trazabilidad para el siguiente caso.',
  },
];

export const rfiTargetPhases: RfiTargetPhase[] = [
  {
    id: 'entrada',
    number: '01',
    title: 'Entrada controlada',
    owner: 'Campo / Producción',
    focus: 'La duda nace en obra, pero no debe llegar como mensaje suelto. Debe entrar con datos mínimos y soporte verificable.',
    decision: '¿La consulta tiene información suficiente para no rebotar?',
    evidence: 'Código, fecha, frente, ubicación, actividad afectada, plano/modelo, foto, especialidad e impacto esperado.',
    actions: [
      { lane: 'Campo', action: 'Detecta la duda y completa el formulario.' },
      { lane: 'Calidad', action: 'Define checklist mínimo de evidencia.' },
      { lane: 'Oficina Técnica', action: 'Recibe solo consultas con datos mínimos.' },
    ],
  },
  {
    id: 'triage',
    number: '02',
    title: 'Triage técnico y prioridad',
    owner: 'Oficina Técnica',
    focus: 'La consulta se revisa contra información vigente antes de formular RFI. Aquí se decide si se resuelve, se observa o se escala.',
    decision: '¿Se resuelve con información disponible o requiere RFI/SDI?',
    evidence: 'Log actualizado, prioridad, responsable, SLA, documento revisado, versión vigente y motivo de clasificación.',
    actions: [
      { lane: 'Oficina Técnica', action: 'Valida completitud, revisa documentos y asigna responsable.' },
      { lane: 'BIM', action: 'Confirma versión del modelo/plano si la duda tiene componente espacial.' },
      { lane: 'Proyectos', action: 'Recibe alerta temprana si hay riesgo de restricción o impacto.' },
    ],
  },
  {
    id: 'bim',
    number: '03',
    title: 'Soporte BIM y documental',
    owner: 'Área BIM',
    focus: 'BIM no solo “revisa el modelo”; debe producir soporte trazable para decidir y responder con evidencia.',
    decision: '¿El modelo/plano confirma, contradice o requiere ajuste?',
    evidence: 'Issue BIM, redline, vista 3D, coordenada, versión consultada, interferencia y enlace al CDE.',
    actions: [
      { lane: 'BIM', action: 'Revisa modelo, interferencias, redlines y condición as-built.' },
      { lane: 'Diseño', action: 'Recibe soporte técnico listo para emitir criterio.' },
      { lane: 'Oficina Técnica', action: 'Actualiza log con hallazgo y siguiente responsable.' },
    ],
  },
  {
    id: 'respuesta',
    number: '04',
    title: 'Respuesta técnica oficial',
    owner: 'Área de Diseño',
    focus: 'La respuesta debe ser aplicable, sustentada y vinculada al expediente; no basta una indicación por correo.',
    decision: '¿La solución cambia diseño, especificación o criterio aprobado?',
    evidence: 'Respuesta oficial, documento soporte, croquis/redline, especificación, restricción y condición de aplicación.',
    actions: [
      { lane: 'Diseño', action: 'Emite criterio técnico y define si hay cambio.' },
      { lane: 'BIM', action: 'Prepara actualización de modelo si corresponde.' },
      { lane: 'Campo', action: 'Confirma si la respuesta resuelve la condición de obra.' },
    ],
  },
  {
    id: 'impacto',
    number: '05',
    title: 'Impacto y formalización',
    owner: 'Área de Proyectos',
    focus: 'Toda solución con impacto debe salir del circuito informal y entrar a una ruta de aprobación controlada.',
    decision: '¿Afecta costo, plazo, alcance, seguridad, calidad o productividad?',
    evidence: 'Matriz de impacto, ruta RFI/SDI/cambio, aprobador, responsable, fecha compromiso y restricción asociada.',
    actions: [
      { lane: 'Proyectos', action: 'Evalúa impacto y autoriza ruta formal.' },
      { lane: 'Oficina Técnica', action: 'Actualiza estado y mantiene trazabilidad contractual.' },
      { lane: 'Calidad', action: 'Verifica que la decisión tenga soporte auditable.' },
    ],
  },
  {
    id: 'cierre',
    number: '06',
    title: 'Cierre verificable y mejora',
    owner: 'Calidad + Oficina Técnica',
    focus: 'El cierre ocurre cuando la respuesta está comunicada, registrada, aplicada y convertida en aprendizaje para el estándar.',
    decision: '¿Quedó comunicada, aplicada y actualizada en CDE/log/modelo?',
    evidence: 'Estado cerrado, comunicación oficial, lista de distribución, soporte CDE, actualización BIM/log y métrica de tiempo.',
    actions: [
      { lane: 'Calidad', action: 'Valida evidencia, formato, comunicación y cierre.' },
      { lane: 'Oficina Técnica', action: 'Controla KPI, vencidos, causa raíz y mejora del log.' },
      { lane: 'Todos', action: 'Actualizan estándar, formulario o regla para evitar repetición.' },
    ],
  },
];

export const mappingSteps: MappingStep[] = [
  {
    id: 'elegir-proceso',
    title: 'Elegir el proceso a mapear',
    teacher: 'El proceso debe ser real, frecuente y doloroso. No se elige por importancia teórica, sino porque afecta plazo, calidad, costo, coordinación o trazabilidad.',
    output: 'Nombre del proceso, problema principal, alcance del taller y razón de mejora.',
    prompt: '¿Qué proceso está generando más espera, reproceso, dudas o decisiones informales en obra?',
    example: 'Proceso elegido: gestión de consultas técnicas/RFI porque una duda de campo puede detener producción o generar ejecución con información no validada.',
  },
  {
    id: 'swimlanes',
    title: 'Definir swimlanes o involucrados',
    teacher: 'Los swimlanes ordenan la responsabilidad. Deben representar roles funcionales, no personas sueltas ni áreas ambiguas.',
    output: 'Lista de carriles: Campo/Producción, Oficina Técnica, Área BIM, Área de Diseño, Área de Proyectos y Área de Calidad.',
    prompt: '¿Qué rol inicia, recibe, valida, decide, responde, comunica y cierra?',
    example: 'Campo detecta; Oficina Técnica valida; BIM verifica modelo; Diseño responde; Proyectos evalúa impacto; Calidad verifica evidencia y cierre.',
  },
  {
    id: 'pasos-sin-orden',
    title: 'Listar todos los pasos sin orden',
    teacher: 'Primero se captura cómo trabaja el equipo sin corregirlo. Si se ordena demasiado pronto, se esconde el proceso real.',
    output: 'Inventario bruto de actividades, mensajes, revisiones, registros, aprobaciones, esperas y retrabajos.',
    prompt: '¿Qué ocurre desde que aparece la duda hasta que alguien la da por cerrada, aunque hoy pase por chat, llamada o correo?',
    example: 'Detectar duda, revisar plano, preguntar por WhatsApp, buscar versión, registrar consulta, pedir foto, asignar responsable, responder, comunicar y cerrar.',
  },
  {
    id: 'asignar-rol',
    title: 'Asignar cada paso a un rol',
    teacher: 'Un paso sin rol no se puede gestionar. El mapa debe mostrar handoffs claros entre quien solicita, valida, responde y documenta.',
    output: 'Cada actividad ubicada en su swimlane correspondiente.',
    prompt: '¿Quién hace realmente este paso hoy y quién debería hacerlo en el flujo estándar?',
    example: '“Registrar consulta” pertenece a Oficina Técnica; “verificar modelo” al Área BIM; “emitir respuesta técnica” al Área de Diseño; “cerrar con evidencia” al Área de Calidad.',
  },
  {
    id: 'ordenar-flechas',
    title: 'Ordenar y conectar con flechas',
    teacher: 'Las flechas muestran dependencia, espera y transferencia de información. No deben dibujarse solo para que el mapa se vea limpio.',
    output: 'Secuencia del flujo actual con entradas, salidas y retornos visibles.',
    prompt: '¿Qué debe ocurrir antes de este paso y qué paso queda bloqueado si no ocurre?',
    example: 'La consulta no pasa al especialista hasta que Oficina Técnica valida completitud y asigna responsable/plazo.',
  },
  {
    id: 'decisiones-si-no',
    title: 'Identificar decisiones (¿Sí o No?)',
    teacher: 'Cada decisión debe formularse como una pregunta que cambia el camino. Si no cambia el flujo, no es decisión.',
    output: 'Rombos de decisión con criterios claros y rutas Sí/No.',
    prompt: '¿Qué pregunta obliga a tomar un camino distinto y quién puede responderla?',
    example: '¿Se resuelve con información disponible? ¿Consulta completa y válida? ¿Requiere cambio formal o impacto mayor?',
  },
  {
    id: 'herramientas',
    title: 'Marcar herramientas usadas en cada paso',
    teacher: 'Las herramientas muestran dónde vive la información. Si el flujo usa demasiados canales, hay riesgo de pérdida de trazabilidad.',
    output: 'Herramienta por actividad: CDE/Autodesk Docs/Build, correo, Excel/log, modelo BIM, planos, WhatsApp, reuniones.',
    prompt: '¿Dónde se registra, dónde se consulta, dónde se responde y dónde queda la evidencia?',
    example: 'La detección puede venir de campo, pero el registro oficial debe quedar en CDE/Build; la respuesta y sus soportes deben quedar en el repositorio documental.',
  },
  {
    id: 'output-evidencia',
    title: 'Definir output / evidencia de cada paso',
    teacher: 'Un paso sin output verificable es difícil de auditar. La evidencia demuestra avance, decisión y trazabilidad.',
    output: 'Entregable por paso: registro, checklist, respuesta, foto, plano, historial, comunicación, cierre.',
    prompt: '¿Qué queda producido al terminar este paso y dónde se puede revisar?',
    example: 'Registro de consulta con código, checklist de completitud, respuesta técnica, soporte adjunto, comunicación oficial y estado cerrado.',
  },
  {
    id: 'cuello-botella',
    title: 'Señalar cuello de botella',
    teacher: 'El cuello de botella no siempre es la actividad más lenta; a veces es el paso con información incompleta, responsable ambiguo o decisión informal.',
    output: 'Puntos críticos marcados por espera, reproceso, duplicidad, falta de responsable, herramienta dispersa o evidencia ausente.',
    prompt: '¿Dónde se detiene el flujo, dónde rebota, dónde se duplican tareas y dónde aumenta el riesgo?',
    example: 'Cuellos de botella RFI: consulta incompleta, falta de versión vigente, especialista sin plazo, decisión de impacto no escalada o cierre sin evidencia.',
  },
  {
    id: 'fin-cierre',
    title: 'Definir el FIN y criterio de cierre',
    teacher: 'El fin no es “alguien respondió”. El fin debe tener una condición auditable de cierre.',
    output: 'Evento final, criterio de cierre, evidencia mínima, responsable de cierre y métrica de control.',
    prompt: '¿Qué evidencia prueba que el proceso terminó bien y que la respuesta fue comunicada al equipo correcto?',
    example: 'Fin: consulta cerrada en CDE con respuesta oficial, soporte adjunto, comunicación al equipo afectado, fecha de cierre y responsable.',
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
    lane: 'Área BIM',
    title: 'Revisar información disponible',
    type: 'activity',
    summary: 'BIM revisa modelo, planos, especificaciones, reportes y documentos vigentes para confirmar si la duda ya tiene respuesta.',
    evidence: ['Documento revisado', 'Versión consultada', 'Resultado de revisión'],
    risk: 'Se escalan dudas que ya estaban respondidas o se usa una versión obsoleta.',
  },
  {
    id: 'resuelve',
    lane: 'Oficina Técnica',
    title: '¿Se resuelve con información disponible?',
    type: 'decision',
    summary: 'Si la información vigente responde la duda, se registra la solución. Si no, se crea consulta formal.',
    evidence: ['Sí: documento soporte', 'No: motivo de escalamiento'],
    risk: 'Sin criterio, todo se vuelve RFI o todo queda resuelto verbalmente.',
  },
  {
    id: 'registro',
    lane: 'Oficina Técnica',
    title: 'Registrar consulta en CDE/Build',
    type: 'activity',
    summary: 'La consulta se formaliza con código, fecha, frente, ubicación, especialidad, descripción, impacto y adjuntos.',
    evidence: ['Código', 'Fecha', 'Frente/ubicación', 'Especialidad', 'Adjuntos/fotos'],
    risk: 'Si faltan campos obligatorios, el flujo se detiene y se reprocesa.',
  },
  {
    id: 'validar',
    lane: 'Oficina Técnica',
    title: 'Validar consulta y asignar responsable',
    type: 'activity',
    summary: 'Oficina técnica revisa completitud, clasifica la consulta y asigna responsable y plazo de respuesta.',
    evidence: ['Responsable', 'SLA', 'Estado', 'Tipo de consulta'],
    risk: 'Sin responsable ni plazo, nadie gestiona la respuesta.',
  },
  {
    id: 'completa',
    lane: 'Oficina Técnica',
    title: '¿Consulta completa y válida?',
    type: 'decision',
    summary: 'Si faltan datos, se solicita información. Si está completa, pasa al análisis técnico.',
    evidence: ['Checklist de completitud', 'Motivo de observación'],
    risk: 'El especialista recibe consultas ambiguas y responde tarde o mal.',
  },
  {
    id: 'info',
    lane: 'Oficina Técnica',
    title: 'Solicitar respuesta o información',
    type: 'activity',
    summary: 'Se pide información faltante a campo o respuesta técnica al especialista, según corresponda.',
    evidence: ['Solicitud formal', 'Fecha límite', 'Destinatario'],
    risk: 'Una solicitud sin plazo se convierte en espera indefinida.',
  },
  {
    id: 'analisis',
    lane: 'Área de Diseño',
    title: 'Analizar consulta y emitir respuesta técnica',
    type: 'activity',
    summary: 'Diseño revisa soporte, modelo, planos y criterios técnicos para emitir una respuesta sustentada.',
    evidence: ['Respuesta técnica', 'Documento soporte', 'Restricciones'],
    risk: 'La respuesta puede ser técnicamente correcta, pero no trazable ni comunicada.',
  },
  {
    id: 'impacto',
    lane: 'Área de Proyectos',
    title: '¿Requiere cambio formal o impacto mayor?',
    type: 'decision',
    summary: 'Proyectos evalúa si la respuesta impacta costo, plazo, alcance, diseño, calidad o seguridad.',
    evidence: ['Criterio de impacto', 'Derivación', 'Aprobación requerida'],
    risk: 'Un cambio de diseño puede ejecutarse como simple consulta.',
  },
  {
    id: 'derivar',
    lane: 'Área de Proyectos',
    title: 'Derivar a flujo RFI/SDI',
    type: 'activity',
    summary: 'La consulta se transforma en flujo formal con control de impacto, aprobación y comunicación oficial.',
    evidence: ['ID RFI/SDI', 'Motivo de derivación', 'Responsable'],
    risk: 'Si no se deriva, el cambio queda sin control contractual.',
  },
  {
    id: 'resolucion',
    lane: 'Área de Calidad',
    title: 'Registrar resolución para trazabilidad',
    type: 'document',
    summary: 'Calidad verifica que la respuesta, soporte, decisión y evidencias queden guardadas en el repositorio documental.',
    evidence: ['Respuesta adjunta', 'Historial', 'Estado actualizado'],
    risk: 'Responder sin registrar deja el conocimiento fuera del sistema.',
  },
  {
    id: 'comunicar',
    lane: 'Área de Calidad',
    title: 'Comunicar solución al equipo',
    type: 'activity',
    summary: 'Se comunica oficialmente la respuesta a campo, producción y áreas afectadas.',
    evidence: ['Comunicación oficial', 'Lista de distribución', 'Fecha'],
    risk: 'La respuesta existe, pero el equipo afectado no se entera.',
  },
  {
    id: 'cierre',
    lane: 'Área de Calidad',
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
  ['Roles', 'Campo/Producción, Oficina Técnica, Área BIM, Área de Diseño, Área de Proyectos y Área de Calidad.'],
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
    owner: 'Campo + Oficina Técnica + BIM + Diseño + Proyectos + Calidad',
    priority: 'Caso principal',
    currentPain: 'Consultas incompletas, canales informales, respuestas no oficiales, falta de responsable, cierre verbal y poca trazabilidad.',
    targetOutcome: 'Consulta/RFI con código, datos mínimos, responsable, SLA, análisis técnico, decisión de impacto, respuesta oficial y cierre documentado.',
    inputs: ['Duda técnica', 'Plano/modelo', 'Especificación', 'Foto', 'Ubicación', 'Impacto esperado'],
    activities: ['Detectar duda', 'Revisar documentos', 'Registrar consulta', 'Validar completitud', 'Analizar respuesta', 'Comunicar solución', 'Cerrar'],
    decisions: ['¿Se resuelve con información disponible?', '¿Consulta completa y válida?', '¿Requiere cambio formal o impacto mayor?'],
    outputs: ['Respuesta técnica', 'Registro de consulta', 'Evidencia', 'Historial y control', 'RFI/SDI si aplica'],
    metrics: ['Tiempo de respuesta', '% consultas completas', '% con evidencia', '% cerradas', 'Duplicadas', 'Vencidas'],
    lanes: [
      { lane: 'Campo / Producción', steps: ['Detectar duda', 'Levantar evidencia', 'Registrar solicitud inicial'] },
      { lane: 'Oficina Técnica', steps: ['Validar completitud', 'Clasificar consulta', 'Asignar responsable y SLA'] },
      { lane: 'Área BIM', steps: ['Verificar modelo/plano vigente', 'Revisar interferencias', 'Adjuntar soporte BIM'] },
      { lane: 'Área de Diseño', steps: ['Analizar técnicamente', 'Emitir respuesta sustentada', 'Definir si cambia diseño'] },
      { lane: 'Área de Proyectos', steps: ['Evaluar impacto costo/plazo/alcance', 'Autorizar RFI/SDI si aplica', 'Gestionar escalamiento'] },
      { lane: 'Área de Calidad', steps: ['Verificar evidencia', 'Comunicar solución oficial', 'Cerrar y medir'] },
    ],
    mappingQuestions: [
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
      { lane: 'Campo / Producción', steps: ['Consulta vigente', 'Ejecuta con referencia', 'Reporta conflicto'] },
      { lane: 'Oficina Técnica', steps: ['Revisa impacto', 'Comunica cambios', 'Actualiza log'] },
      { lane: 'Área BIM', steps: ['Valida modelo', 'Coordina interferencias', 'Publica soporte'] },
      { lane: 'Área de Diseño', steps: ['Emite revisión', 'Responde observaciones', 'Confirma paquete'] },
      { lane: 'Área de Proyectos', steps: ['Evalúa impacto', 'Autoriza emisión', 'Controla plazo'] },
      { lane: 'Área de Calidad', steps: ['Valida código', 'Publica en CDE', 'Marca obsoleto'] },
    ],
    mappingQuestions: [
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
