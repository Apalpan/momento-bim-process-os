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
