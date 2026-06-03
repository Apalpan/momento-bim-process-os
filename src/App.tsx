import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  FileText,
  Gauge,
  GitBranch,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Network,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Wrench,
  Workflow,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  caseExamples,
  executiveSignals,
  expertMappingInsights,
  improvementLevers,
  kpis,
  mappingSteps,
  mappingBrainstormIdeas,
  maturityLevels,
  painDiagnostics,
  painSignals,
  processSheet,
  rfiAreaFlows,
  rfiAreaLanes,
  rfiMetrics,
  rfiNodes,
  rfiReferenceSignals,
  rfiTargetPhases,
  standardLayers,
  workshopConsiderations,
  type ImprovementLever,
  type MappingStep,
  type PainDiagnostic,
  type ProcessNode,
  type StandardLayer,
  type Tone,
} from './data/dashboard';

type SectionId = 'resumen' | 'diagnostico' | 'mapeador' | 'rfi' | 'metodo' | 'mejora' | 'metricas' | 'taller';

const navItems: { id: SectionId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'resumen', label: 'Resumen', icon: LayoutDashboard },
  { id: 'diagnostico', label: 'Diagnóstico del dolor', icon: Search },
  { id: 'mapeador', label: 'Mapeador interactivo', icon: Workflow },
  { id: 'rfi', label: 'Caso RFI', icon: GitBranch },
  { id: 'metodo', label: 'Método de mapeo', icon: BookOpen },
  { id: 'mejora', label: 'Mejora y estándar', icon: Wrench },
  { id: 'metricas', label: 'Métricas y ficha', icon: BarChart3 },
  { id: 'taller', label: 'Guía de mapeo', icon: GraduationCap },
];

const toneIcon: Record<Tone, string> = {
  blue: 'bg-blue',
  green: 'bg-green',
  amber: 'bg-amber',
  rose: 'bg-rose',
  violet: 'bg-violet',
  slate: 'bg-slate',
};

const laneOrder = rfiAreaLanes;

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('resumen');
  const [activeStepId, setActiveStepId] = useState(mappingSteps[0].id);
  const [activeNodeId, setActiveNodeId] = useState(rfiNodes[0].id);
  const [activePainId, setActivePainId] = useState(painDiagnostics[0].id);
  const [activeLeverId, setActiveLeverId] = useState(improvementLevers[0].id);
  const [activeStandardId, setActiveStandardId] = useState(standardLayers[0].id);
  const [checkedStandards, setCheckedStandards] = useState<string[]>(['ficha', 'formulario']);

  const activeStep = useMemo(
    () => mappingSteps.find((step) => step.id === activeStepId) ?? mappingSteps[0],
    [activeStepId],
  );

  const activeNode = useMemo(
    () => rfiNodes.find((node) => node.id === activeNodeId) ?? rfiNodes[0],
    [activeNodeId],
  );

  const activePain = useMemo(
    () => painDiagnostics.find((pain) => pain.id === activePainId) ?? painDiagnostics[0],
    [activePainId],
  );

  const activeLever = useMemo(
    () => improvementLevers.find((lever) => lever.id === activeLeverId) ?? improvementLevers[0],
    [activeLeverId],
  );

  const activeStandard = useMemo(
    () => standardLayers.find((layer) => layer.id === activeStandardId) ?? standardLayers[0],
    [activeStandardId],
  );

  const standardProgress = Math.round((checkedStandards.length / standardLayers.length) * 100);

  const toggleStandard = (id: string) => {
    setCheckedStandards((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <span className="brand-mark">GEN+</span>
          <div>
            <strong>MOMENTO BIM Process OS</strong>
            <small>Mapeo · RFI · CDE · Campo-oficina</small>
          </div>
        </div>
        <nav className="nav-list" aria-label="Secciones del dashboard">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activeSection === item.id ? 'nav-item nav-item--active' : 'nav-item'}
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                type="button"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-panel">
          <span>Caso principal</span>
          <strong>Gestión de consultas técnicas / RFI</strong>
          <p>Usar este flujo para revisar inicio, carriles, decisiones, evidencia, CDE y métricas.</p>
        </div>
      </aside>

      <main className="main-area">
        <TopBar />
        {activeSection === 'resumen' && <ExecutiveOverview setActiveSection={setActiveSection} />}
        {activeSection === 'diagnostico' && (
          <PainDiagnosisSection activePain={activePain} activePainId={activePainId} setActivePainId={setActivePainId} />
        )}
        {activeSection === 'mapeador' && (
          <InteractiveMapper
            activeStep={activeStep}
            activeStepId={activeStepId}
            setActiveStepId={setActiveStepId}
            activeNode={activeNode}
            activeNodeId={activeNodeId}
            setActiveNodeId={setActiveNodeId}
            activePain={activePain}
            activePainId={activePainId}
            setActivePainId={setActivePainId}
          />
        )}
        {activeSection === 'rfi' && (
          <RfiCaseSection
            activeNode={activeNode}
            activeNodeId={activeNodeId}
            setActiveNodeId={setActiveNodeId}
          />
        )}
        {activeSection === 'metodo' && <MethodSection activeStepId={activeStepId} setActiveStepId={setActiveStepId} />}
        {activeSection === 'mejora' && (
          <ImprovementSection
            activeLever={activeLever}
            activeLeverId={activeLeverId}
            setActiveLeverId={setActiveLeverId}
            activeStandard={activeStandard}
            activeStandardId={activeStandardId}
            setActiveStandardId={setActiveStandardId}
            checkedStandards={checkedStandards}
            toggleStandard={toggleStandard}
            standardProgress={standardProgress}
          />
        )}
        {activeSection === 'metricas' && <MetricsSection />}
        {activeSection === 'taller' && <WorkshopSection />}
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">Repositorio independiente GEN+ / MOMENTO</span>
        <h1>Workbench de mapeo de procesos BIM y gestión de RFIs</h1>
      </div>
      <div className="status-strip">
        <span>Foco del taller</span>
        <strong>Procesos antes que software</strong>
      </div>
    </header>
  );
}

function ExecutiveOverview({ setActiveSection }: { setActiveSection: (section: SectionId) => void }) {
  return (
    <section className="section-stack">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Mapeo de procesos en obra</span>
          <h2>No podemos mejorar lo que no vemos.</h2>
          <p>
            Este workbench guía el mapeo de procesos reales de obra, usando la gestión de consultas
            técnicas/RFI como caso principal para convertir dudas, documentos, responsables y evidencias en flujo controlado.
          </p>
          <div className="action-row">
            <button className="primary-action" onClick={() => setActiveSection('diagnostico')} type="button">
              <Search size={18} />
              Diagnosticar dolor
            </button>
            <button className="secondary-action" onClick={() => setActiveSection('mapeador')} type="button">
              <Workflow size={18} />
              Abrir mapeador
            </button>
            <button className="secondary-action" onClick={() => setActiveSection('rfi')} type="button">
              <GitBranch size={18} />
              Analizar caso RFI
            </button>
            <button className="secondary-action" onClick={() => setActiveSection('metricas')} type="button">
              <BarChart3 size={18} />
              Ver métricas
            </button>
            <button className="secondary-action" onClick={() => setActiveSection('mejora')} type="button">
              <Wrench size={18} />
              Mejorar y estandarizar
            </button>
          </div>
        </div>
        <div className="control-visual" aria-label="Resumen visual del proceso RFI">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-node">
            <Network size={34} />
            <strong>Campo → CDE → Respuesta → Cierre</strong>
            <span>Trazabilidad BIM</span>
          </div>
          <div className="mini-node mini-node-a">Duda</div>
          <div className="mini-node mini-node-b">Validación</div>
          <div className="mini-node mini-node-c">RFI/SDI</div>
          <div className="mini-node mini-node-d">Evidencia</div>
        </div>
      </div>

      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <article className={`kpi-card ${toneIcon[kpi.tone]}`} key={kpi.label}>
            <span>{kpi.status}</span>
            <strong>{kpi.value}</strong>
            <h3>{kpi.label}</h3>
            <p>{kpi.detail}</p>
          </article>
        ))}
      </div>

      <div className="panel insight-panel">
        <PanelHeader icon={Lightbulb} label="Ideas clave" title="Criterios que elevan la calidad del mapeo" />
        <div className="insight-ribbon">
          {expertMappingInsights.map((insight) => (
            <article key={insight.id}>
              <span>{insight.principle}</span>
              <p>{insight.criterion}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="dashboard-grid dashboard-grid--two">
        <div className="panel">
          <PanelHeader icon={ShieldCheck} label="Lectura ejecutiva" title="Qué debe quedar claro" />
          <div className="signal-list">
            {executiveSignals.map((signal) => (
              <article key={signal.title}>
                <span />
                <div>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <PanelHeader icon={AlertTriangle} label="Dolor operativo" title="Síntomas de procesos no mapeados" />
          <div className="pain-list">
            {painSignals.map((pain) => (
              <article key={pain}>
                <AlertTriangle size={16} />
                <p>{pain}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PainDiagnosisSection({
  activePain,
  activePainId,
  setActivePainId,
}: {
  activePain: PainDiagnostic;
  activePainId: string;
  setActivePainId: (id: string) => void;
}) {
  return (
    <section className="section-stack">
      <SectionHero
        icon={Search}
        eyebrow="Antes de mapear"
        title="El mapa empieza cuando el equipo entiende el dolor"
        text="Un proceso no se mapea para documentar lo obvio. Se mapea para ver dónde se pierde tiempo, quién queda bloqueado, qué evidencia falta y qué decisión se está tomando fuera del sistema."
      />

      <div className="pain-lab">
        <div className="panel pain-selector">
          <PanelHeader icon={AlertTriangle} label="Dolores típicos" title="Selecciona el síntoma que aparece en obra" />
          {painDiagnostics.map((pain) => (
            <button
              className={pain.id === activePainId ? 'pain-button pain-button--active' : 'pain-button'}
              key={pain.id}
              onClick={() => setActivePainId(pain.id)}
              type="button"
            >
              <strong>{pain.pain}</strong>
              <span>{pain.symptom}</span>
            </button>
          ))}
        </div>

        <div className="panel pain-detail">
          <PanelHeader icon={Target} label="Lectura del dolor" title={activePain.pain} />
          <div className="pain-chain">
            <article>
              <span>Qué pasa</span>
              <p>{activePain.whatHappens}</p>
            </article>
            <article>
              <span>Por qué importa</span>
              <p>{activePain.whyItMatters}</p>
            </article>
            <article>
              <span>Señal en el mapa</span>
              <p>{activePain.mapSignal}</p>
            </article>
          </div>
          <div className="diagnosis-path" aria-label="Ruta de diagnóstico del dolor">
            {['Síntoma', 'Causa visible', 'Impacto', 'Regla', 'Control'].map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <PanelHeader icon={Lightbulb} label="De dolor a mejora" title="Qué debe producir el mapa" />
          <div className="improvement-brief">
            <article>
              <span>Mejora</span>
              <p>{activePain.improvement}</p>
            </article>
            <article>
              <span>Estándar</span>
              <p>{activePain.standard}</p>
            </article>
            <article>
              <span>Métrica</span>
              <p>{activePain.metric}</p>
            </article>
            <article>
              <span>Ejemplo RFI</span>
              <p>{activePain.rfiExample}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveMapper({
  activeStep,
  activeStepId,
  setActiveStepId,
  activeNode,
  activeNodeId,
  setActiveNodeId,
  activePain,
  activePainId,
  setActivePainId,
}: {
  activeStep: MappingStep;
  activeStepId: string;
  setActiveStepId: (id: string) => void;
  activeNode: ProcessNode;
  activeNodeId: string;
  setActiveNodeId: (id: string) => void;
  activePain: PainDiagnostic;
  activePainId: string;
  setActivePainId: (id: string) => void;
}) {
  return (
    <section className="section-stack">
      <SectionHero
        icon={Workflow}
        eyebrow="Mapeador interactivo"
        title="Haz clic en un paso del método y en un nodo del proceso"
        text="La dinámica muestra cómo mapear mejor: primero se entiende el método, luego se lee el flujo RFI y finalmente se conecta cada nodo con evidencia, riesgo y decisión."
      />

      <div className="learning-loop">
        {[
          ['01', 'Dolor', 'Qué falla, a quién bloquea y qué evidencia se pierde.'],
          ['02', 'Mapa actual', 'Cómo ocurre realmente: roles, inputs, decisiones y retrabajos.'],
          ['03', 'Mapa objetivo', 'Qué se elimina, simplifica, estandariza o digitaliza.'],
          ['04', 'Control', 'Qué métrica prueba que el proceso mejoró y se sostiene.'],
        ].map(([id, title, text]) => (
          <article key={id}>
            <span>{id}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="panel">
        <PanelHeader icon={Search} label="Dolor activo" title="Selecciona qué problema quieres perseguir dentro del mapa" />
        <div className="pain-chip-grid">
          {painDiagnostics.map((pain) => (
            <button
              className={pain.id === activePainId ? 'pain-chip pain-chip--active' : 'pain-chip'}
              key={pain.id}
              onClick={() => setActivePainId(pain.id)}
              type="button"
            >
              {pain.pain}
            </button>
          ))}
        </div>
        <div className="active-pain-summary">
          <AlertTriangle size={18} />
          <p>
            <strong>{activePain.pain}:</strong> {activePain.mapSignal}
          </p>
        </div>
      </div>

      <ActiveCriterionPanel activeNode={activeNode} activePain={activePain} activeStep={activeStep} />

      <div className="mapper-layout">
        <div className="panel">
          <PanelHeader icon={ListChecks} label="Paso activo" title={activeStep.title} />
          <div className="step-detail">
            <p>{activeStep.teacher}</p>
            <div>
              <span>Pregunta clave</span>
              <strong>{activeStep.prompt}</strong>
            </div>
            <div>
              <span>Salida esperada</span>
              <strong>{activeStep.output}</strong>
            </div>
            <div>
              <span>Ejemplo RFI</span>
              <strong>{activeStep.example}</strong>
            </div>
          </div>
          <div className="step-strip">
            {mappingSteps.map((step, index) => (
              <button
                className={step.id === activeStepId ? 'step-pill step-pill--active' : 'step-pill'}
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                type="button"
              >
                <span>{index + 1}</span>
                {step.title}
              </button>
            ))}
          </div>
        </div>

        <div className="panel">
          <PanelHeader icon={GitBranch} label="Nodo activo del flujo" title={activeNode.title} />
          <div className="node-detail">
            <span>{activeNode.lane} · {activeNode.type}</span>
            <p>{activeNode.summary}</p>
            <DetailList title="Evidencia requerida" items={activeNode.evidence} />
            <article>
              <h3>Riesgo si no se controla</h3>
              <p>{activeNode.risk}</p>
            </article>
          </div>
        </div>
      </div>

      <RfiProcessBoard activeNodeId={activeNodeId} setActiveNodeId={setActiveNodeId} />
    </section>
  );
}

function ActiveCriterionPanel({
  activeStep,
  activeNode,
  activePain,
}: {
  activeStep: MappingStep;
  activeNode: ProcessNode;
  activePain: PainDiagnostic;
}) {
  const closingCriterion =
    activeNode.type === 'end'
      ? 'Cerrar solo cuando exista respuesta oficial, soporte, comunicación, estado final y responsable.'
      : 'No avances al siguiente paso si falta responsable, evidencia mínima o criterio de decisión.';

  return (
    <div className="panel active-criterion-panel">
      <PanelHeader icon={Gauge} label="Criterio activo" title="Qué debes mirar ahora en el mapa" />
      <div className="criterion-command">
        <article>
          <span>Rol seleccionado</span>
          <strong>{activeNode.lane}</strong>
        </article>
        <article>
          <span>Paso del método</span>
          <strong>{activeStep.title}</strong>
        </article>
        <article>
          <span>Dolor perseguido</span>
          <strong>{activePain.pain}</strong>
        </article>
      </div>

      <div className="criterion-grid">
        <article className="criterion-card criterion-card--focus">
          <span>Pregunta clave</span>
          <p>{activeStep.prompt}</p>
        </article>
        <article className="criterion-card">
          <span>Evidencia mínima</span>
          <p>{activeNode.evidence.join(' · ')}</p>
        </article>
        <article className="criterion-card">
          <span>Riesgo si no se controla</span>
          <p>{activeNode.risk}</p>
        </article>
        <article className="criterion-card">
          <span>Mejora sugerida</span>
          <p>{activePain.improvement}</p>
        </article>
        <article className="criterion-card">
          <span>Métrica asociada</span>
          <p>{activePain.metric}</p>
        </article>
        <article className="criterion-card criterion-card--closure">
          <span>Criterio de cierre</span>
          <p>{closingCriterion}</p>
        </article>
      </div>

      <div className="criterion-note">
        <Lightbulb size={18} />
        <p>
          <strong>Nota de criterio:</strong> un buen mapa no busca verse ordenado; busca revelar dónde se pierde información,
          quién debe decidir y qué evidencia permite controlar el proceso.
        </p>
      </div>
    </div>
  );
}

function RfiCaseSection({
  activeNode,
  activeNodeId,
  setActiveNodeId,
}: {
  activeNode: ProcessNode;
  activeNodeId: string;
  setActiveNodeId: (id: string) => void;
}) {
  const mainCase = caseExamples[0];

  return (
    <section className="section-stack">
      <SectionHero
        icon={GitBranch}
        eyebrow="Caso principal"
        title="Análisis del proceso de gestión de consultas técnicas / RFI"
        text="El caso permite comparar cómo ocurre hoy una consulta técnica y cómo debería mejorar, distribuyendo responsabilidades entre Campo/Producción, Oficina Técnica, BIM, Diseño, Proyectos y Calidad."
      />

      <div className="dashboard-grid dashboard-grid--two">
        <div className="panel">
          <PanelHeader icon={FileText} label="Ficha del caso" title={mainCase.title} />
          <div className="case-summary-grid">
            <article>
              <span>Alcance</span>
              <p>{mainCase.scope}</p>
            </article>
            <article>
              <span>Disparador</span>
              <p>{mainCase.trigger}</p>
            </article>
            <article>
              <span>Objetivo operativo</span>
              <p>{mainCase.objective}</p>
            </article>
          </div>
        </div>

        <div className="panel">
          <PanelHeader icon={ClipboardCheck} label="Nodo seleccionado" title={activeNode.title} />
          <div className="node-detail">
            <span>{activeNode.lane}</span>
            <p>{activeNode.summary}</p>
            <p><strong>Riesgo:</strong> {activeNode.risk}</p>
          </div>
        </div>
      </div>

      <RfiTargetProposal />

      <AreaFlowComparison />

      <RfiProcessBoard activeNodeId={activeNodeId} setActiveNodeId={setActiveNodeId} />

      <div className="case-columns">
        <DetailList title="Documentos / soporte" items={mainCase.documents} />
        <DetailList title="Entregables" items={mainCase.deliverables} />
        <DetailList title="Criterios de mapeo" items={mainCase.mappingCriteria} />
        <DetailList title="Errores comunes" items={mainCase.commonMistakes} />
        <DetailList title="Indicadores" items={mainCase.metrics} />
      </div>

      <div className="dashboard-grid dashboard-grid--two">
        <article className="insight-card">
          <span>Uso BIM</span>
          <p>{mainCase.bimUse}</p>
        </article>
        <article className="insight-card">
          <span>Configuración CDE</span>
          <p>{mainCase.cdeConfig}</p>
        </article>
      </div>
    </section>
  );
}

function RfiTargetProposal() {
  return (
    <div className="panel target-proposal-panel">
      <PanelHeader
        icon={Target}
        label="Propuesta objetivo GEN+"
        title="Del mapa genérico al proceso RFI que debería implementarse"
      />
      <p className="proposal-intro">
        La referencia sirve para detectar ideas útiles, pero la propuesta no debe repetir actividades por cada área.
        El flujo correcto ordena la responsabilidad: Campo inicia con datos completos, Oficina Técnica gobierna el log,
        BIM produce soporte, Diseño responde, Proyectos decide impacto y Calidad cierra con evidencia.
      </p>

      <div className="reference-signal-grid">
        {rfiReferenceSignals.map((item) => (
          <article className="reference-signal-card" key={item.id}>
            <span>Señal de referencia</span>
            <h3>{item.signal}</h3>
            <div>
              <ArrowRight size={16} />
              <p>{item.proposalFocus}</p>
            </div>
            <small>{item.avoid}</small>
          </article>
        ))}
      </div>

      <div className="target-phase-grid">
        {rfiTargetPhases.map((phase) => (
          <article className="target-phase-card" key={phase.id}>
            <div className="target-phase-head">
              <span>{phase.number}</span>
              <div>
                <h3>{phase.title}</h3>
                <strong>{phase.owner}</strong>
              </div>
            </div>
            <p>{phase.focus}</p>
            <div className="target-phase-decision">
              <span>Decisión clave</span>
              <strong>{phase.decision}</strong>
            </div>
            <div className="target-phase-evidence">
              <span>Evidencia de control</span>
              <p>{phase.evidence}</p>
            </div>
            <div className="target-phase-actions">
              {phase.actions.map((action) => (
                <div key={`${phase.id}-${action.lane}`}>
                  <span>{action.lane}</span>
                  <p>{action.action}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AreaFlowComparison() {
  return (
    <div className="panel">
      <PanelHeader icon={Workflow} label="Comparación por áreas" title="Proceso actual vs. proceso propuesto como debe ser" />
      <div className="area-comparison-grid">
        {rfiAreaFlows.map((flow) => (
          <article className={`area-flow-card area-flow-card--${flow.id}`} key={flow.id}>
            <div className="area-flow-head">
              <span>{flow.label}</span>
              <h3>{flow.title}</h3>
              <p>{flow.intent}</p>
              <strong>{flow.riskOrControl}</strong>
            </div>
            <div className="area-lane-map">
              {flow.lanes.map((lane) => (
                <div className="area-lane-row" key={`${flow.id}-${lane.lane}`}>
                  <strong>{lane.lane}</strong>
                  <div className="area-step-list">
                    {lane.steps.map((step) => (
                      <article className="area-step" key={step.id}>
                        <h4>{step.title}</h4>
                        <p>{step.detail}</p>
                        <div>
                          <span>Herramienta</span>
                          <em>{step.tool}</em>
                        </div>
                        <div>
                          <span>Evidencia</span>
                          <em>{step.evidence}</em>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MethodSection({
  activeStepId,
  setActiveStepId,
}: {
  activeStepId: string;
  setActiveStepId: (id: string) => void;
}) {
  return (
    <section className="section-stack">
      <SectionHero
        icon={BookOpen}
        eyebrow="Método de mapeo"
        title="Cómo construir un flujo: 10 pasos de mapeo"
        text="El objetivo es pasar de una conversación desordenada a un flujo visible: proceso, swimlanes, pasos, roles, flechas, decisiones, herramientas, evidencias, cuello de botella y cierre."
      />

      <div className="panel flow-build-panel">
        <PanelHeader icon={ListChecks} label="Secuencia base GEN+" title="Cómo construir un flujo — 10 pasos" />
        <div className="flow-build-grid">
          {mappingSteps.map((step, index) => (
            <button
              className={step.id === activeStepId ? 'flow-build-step flow-build-step--active' : 'flow-build-step'}
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.title}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="panel method-active-panel">
        <PanelHeader icon={Target} label="Paso seleccionado" title={mappingSteps.find((step) => step.id === activeStepId)?.title ?? mappingSteps[0].title} />
        {mappingSteps
          .filter((step) => step.id === activeStepId)
          .map((step) => (
            <div className="method-active-grid" key={step.id}>
              <article>
                <span>Cómo explicarlo</span>
                <p>{step.teacher}</p>
              </article>
              <article>
                <span>Pregunta clave</span>
                <p>{step.prompt}</p>
              </article>
              <article>
                <span>Salida esperada</span>
                <p>{step.output}</p>
              </article>
              <article>
                <span>Aplicación al caso RFI</span>
                <p>{step.example}</p>
              </article>
            </div>
          ))}
      </div>

      <div className="method-grid">
        {mappingSteps.map((step, index) => (
          <button
            className={step.id === activeStepId ? 'method-card method-card--active' : 'method-card'}
            key={step.id}
            onClick={() => setActiveStepId(step.id)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.teacher}</p>
            <small>{step.output}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function ImprovementSection({
  activeLever,
  activeLeverId,
  setActiveLeverId,
  activeStandard,
  activeStandardId,
  setActiveStandardId,
  checkedStandards,
  toggleStandard,
  standardProgress,
}: {
  activeLever: ImprovementLever;
  activeLeverId: string;
  setActiveLeverId: (id: string) => void;
  activeStandard: StandardLayer;
  activeStandardId: string;
  setActiveStandardId: (id: string) => void;
  checkedStandards: string[];
  toggleStandard: (id: string) => void;
  standardProgress: number;
}) {
  return (
    <section className="section-stack">
      <SectionHero
        icon={Wrench}
        eyebrow="Mejora y estandarización"
        title="Mapear no basta: el mapa debe convertirse en una regla de trabajo"
        text="Después de identificar el dolor y dibujar el flujo real, el equipo debe decidir qué elimina, simplifica, estandariza, digitaliza, automatiza y controla. Ese rediseño se vuelve estándar cuando tiene ficha, roles, datos, estados, CDE y métrica."
      />

      <div className="improvement-layout">
        <div className="panel">
          <PanelHeader icon={Lightbulb} label="Palancas de mejora" title="Elige cómo intervenir el proceso" />
          <div className="lever-grid">
            {improvementLevers.map((lever) => (
              <button
                className={lever.id === activeLeverId ? 'lever-card lever-card--active' : 'lever-card'}
                key={lever.id}
                onClick={() => setActiveLeverId(lever.id)}
                type="button"
              >
                <span>{lever.title}</span>
                <p>{lever.intent}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="panel">
          <PanelHeader icon={Wrench} label="Rediseño activo" title={activeLever.title} />
          <div className="before-after">
            <article>
              <span>De</span>
              <p>{activeLever.from}</p>
            </article>
            <ArrowRight size={22} />
            <article>
              <span>A</span>
              <p>{activeLever.to}</p>
            </article>
          </div>
          <DetailList title="Cómo aplicarlo" items={activeLever.how} />
          <article className="rfi-example-card">
            <span>Aplicación en RFI</span>
            <p>{activeLever.rfiExample}</p>
          </article>
        </div>
      </div>

      <div className="standard-layout">
        <div className="panel standard-list">
          <PanelHeader icon={Layers} label="Capas de estándar" title="Qué debe quedar implementado" />
          {standardLayers.map((layer) => (
            <button
              className={layer.id === activeStandardId ? 'standard-button standard-button--active' : 'standard-button'}
              key={layer.id}
              onClick={() => setActiveStandardId(layer.id)}
              type="button"
            >
              <strong>{layer.title}</strong>
              <span>{layer.purpose}</span>
            </button>
          ))}
        </div>

        <div className="panel standard-detail">
          <PanelHeader icon={Settings2} label="Estándar activo" title={activeStandard.title} />
          <div className="standard-facts">
            <article>
              <span>Artefacto</span>
              <p>{activeStandard.artifact}</p>
            </article>
            <article>
              <span>Regla</span>
              <p>{activeStandard.rule}</p>
            </article>
            <article>
              <span>Owner</span>
              <p>{activeStandard.owner}</p>
            </article>
            <article>
              <span>Validación</span>
              <p>{activeStandard.validation}</p>
            </article>
          </div>
        </div>

        <div className="panel standard-checklist">
          <PanelHeader icon={Gauge} label="Checklist interactivo" title="Madurez del estándar" />
          <div className="readiness-meter">
            <strong>{standardProgress}%</strong>
            <div>
              <span style={{ width: `${standardProgress}%` }} />
            </div>
            <p>{standardProgress < 70 ? 'Todavía es un mapa de taller.' : 'Ya empieza a comportarse como estándar operativo.'}</p>
          </div>
          <div className="standard-checkboxes">
            {standardLayers.map((layer) => (
              <label key={layer.id}>
                <input
                  checked={checkedStandards.includes(layer.id)}
                  onChange={() => toggleStandard(layer.id)}
                  type="checkbox"
                />
                <span>{layer.title}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={Gauge} label="Ruta de madurez" title="Cómo evoluciona un proceso BIM mapeado" />
        <div className="maturity-grid">
          {maturityLevels.map((level) => (
            <article key={level.level}>
              <span>{level.level}</span>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
              <small>{level.evidence}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="section-stack">
      <SectionHero
        icon={BarChart3}
        eyebrow="Control del proceso"
        title="Un proceso mapeado debe poder medirse"
        text="Si no se mide, el flujo vuelve a depender de memoria, urgencia y personas clave. Estas métricas convierten RFI/consultas en gestión."
      />

      <div className="panel">
        <PanelHeader icon={BarChart3} label="Métricas RFI" title="Indicadores para controlar consultas técnicas" />
        <div className="metrics-table">
          <div className="table-head">
            <span>Dolor</span>
            <span>Métrica</span>
            <span>Fórmula</span>
            <span>Meta</span>
          </div>
          {rfiMetrics.map((metric) => (
            <div className="metric-row" key={metric.metric}>
              <strong>{metric.pain}</strong>
              <span>{metric.metric}</span>
              <p>{metric.formula}</p>
              <em>{metric.target}</em>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={FileText} label="Producto final del mapeo" title="Ficha de proceso que debe completar cada equipo" />
        <div className="sheet-grid">
          {processSheet.map(([field, value]) => (
            <article key={field}>
              <span>{field}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkshopSection() {
  return (
    <section className="section-stack">
      <SectionHero
        icon={GraduationCap}
        eyebrow="Guía de mapeo"
        title="Qué tener en cuenta para mapear y mejorar el proceso"
        text="El punto de partida debe ser un proceso real que el equipo vive todos los días. El valor aparece cuando se reconocen esperas, reprocesos, responsables difusos, decisiones informales y evidencia perdida."
      />

      <div className="workshop-grid">
        {[
          ['01', 'Preparar el caso', 'Se presenta el flujo RFI actual y se aclara que el objetivo no es dibujar bonito, sino encontrar espera, reproceso y pérdida de evidencia.'],
          ['02', 'Construir el flujo', 'Los equipos aplican los 10 pasos: proceso, swimlanes, pasos sin orden, roles, flechas, decisiones, herramientas, outputs, cuello y cierre.'],
          ['03', 'Leer el dolor', 'Cada grupo marca en rojo los pasos donde hay consulta incompleta, responsable ausente, herramienta dispersa o cierre débil.'],
          ['04', 'Diseñar mejora', 'Aplican palancas: eliminar, simplificar, estandarizar, digitalizar, automatizar y controlar.'],
          ['05', 'Convertir en estándar', 'Definen formulario, estados, owner, SLA, CDE, evidencias obligatorias y criterio de cierre.'],
          ['06', 'Definir adopción', 'Cierran con responsable, métrica, frecuencia de revisión, tablero y primera acción para implementar en obra.'],
        ].map(([id, title, text]) => (
          <article key={id}>
            <span>{id}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="panel">
        <PanelHeader icon={ClipboardCheck} label="Consideraciones de mapeo" title="Qué se debe tener en cuenta al mejorar el proceso" />
        <div className="consideration-grid">
          {workshopConsiderations.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.purpose}</p>
              <div>
                <span>Acción de mapeo</span>
                <strong>{item.mappingAction}</strong>
              </div>
              <div>
                <span>Foco RFI</span>
                <strong>{item.rfiFocus}</strong>
              </div>
              <small>{item.expectedEvidence}</small>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={Lightbulb} label="Brainstorming" title="Ideas y preguntas para mapear mejor el proceso" />
        <div className="brainstorm-grid">
          {mappingBrainstormIdeas.map((item) => (
            <article className="brainstorm-card" key={item.id}>
              <span>{item.title}</span>
              <h3>{item.question}</h3>
              <ul>
                {item.ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
              <div>
                <strong>Feedback esperado</strong>
                <p>{item.feedback}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={Gauge} label="Criterio experto" title="Reflexiones y tips para mejorar el juicio de mapeo" />
        <div className="expert-note-grid">
          {expertMappingInsights.map((insight) => (
            <article key={insight.id}>
              <h3>{insight.principle}</h3>
              <p>{insight.reflection}</p>
              <div>
                <span>Tip operativo</span>
                <strong>{insight.tip}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={Workflow} label="Entregable de grupo" title="Mapa mejorado del caso RFI" />
        <div className="case-improvement-board">
          {[
            ['Mapa actual', 'Flujo real por Campo, Oficina Técnica, BIM, Diseño, Proyectos y Calidad con chats, correos, retornos y responsables difusos.'],
            ['Mapa objetivo', 'Flujo mejorado con CDE como fuente oficial, campos obligatorios, estados, responsables y decisiones Sí/No por área.'],
            ['Estándar mínimo', 'Formulario de consulta, log, matriz RACI por área, nomenclatura, evidencia por paso y criterio de cierre.'],
            ['Control semanal', 'Revisión por Oficina Técnica/Proyectos/Calidad de abiertas, vencidas, incompletas, derivadas a RFI/SDI y restricciones.'],
          ].map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <PanelHeader icon={AlertTriangle} label="Preguntas guía" title="Preguntas para encontrar el proceso real" />
        <div className="question-bank">
          {[
            '¿Dónde empieza realmente el flujo y qué evento lo dispara?',
            '¿Qué información mínima necesita el siguiente rol para no detenerse?',
            '¿Quién decide si una consulta es simple, RFI/SDI o cambio formal?',
            '¿Qué documento, plano, modelo o evidencia demuestra que terminó?',
            '¿Dónde se usa WhatsApp, llamada o correo sin registro?',
            '¿Qué parte se puede convertir en formulario, log, tablero o estado CDE?',
            '¿Qué métrica probaría que el proceso mejoró?',
            '¿Qué excepción ocurre con frecuencia y nadie registra?',
          ].map((question) => (
            <article key={question}>
              <AlertTriangle size={16} />
              <p>{question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RfiProcessBoard({
  activeNodeId,
  setActiveNodeId,
}: {
  activeNodeId: string;
  setActiveNodeId: (id: string) => void;
}) {
  const grouped = laneOrder.map((lane) => ({
    lane,
    nodes: rfiNodes.filter((node) => node.lane === lane),
  }));

  return (
    <div className="panel">
      <PanelHeader icon={Workflow} label="Flujo interactivo" title="Procedimiento para la gestión de consultas técnicas / RFI" />
      <div className="rfi-board">
        {grouped.map((group) => (
          <div className="rfi-lane" key={group.lane}>
            <strong>{group.lane}</strong>
            <div>
              {group.nodes.map((node, index) => (
                <button
                  className={node.id === activeNodeId ? `rfi-node rfi-node--${node.type} rfi-node--active` : `rfi-node rfi-node--${node.type}`}
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  type="button"
                >
                  <span>{node.type}</span>
                  <p>{node.title}</p>
                  {index < group.nodes.length - 1 && <ArrowRight size={14} />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="summary-strip">
        {['Detección de duda', 'Revisión documental', 'Registro en CDE', 'Asignación y validación', 'Respuesta técnica', 'Comunicación oficial', 'Cierre de consulta'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function SectionHero({
  icon: Icon,
  eyebrow,
  title,
  text,
}: {
  icon: typeof ClipboardCheck;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-hero">
      <div className="hero-icon">
        <Icon size={26} />
      </div>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function PanelHeader({
  icon: Icon,
  label,
  title,
}: {
  icon: typeof ClipboardCheck;
  label: string;
  title: string;
}) {
  return (
    <div className="panel-header">
      <div>
        <Icon size={18} />
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="detail-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default App;
