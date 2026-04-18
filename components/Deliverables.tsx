const deliverables = [
  {
    phase: "Diagnóstico",
    title: "Informe ejecutivo",
    description:
      "Resumen de hallazgos en lenguaje de negocio, priorizados por impacto y esfuerzo. Apto para dirección y para el equipo técnico.",
  },
  {
    phase: "Diagnóstico",
    title: "Mapa de problemas priorizados",
    description:
      "Inventario estructurado por área: coste, entrega, fiabilidad, seguridad, autonomía. Con criticidad y dependencias explícitas.",
  },
  {
    phase: "Diagnóstico",
    title: "Plan de remediación por fases",
    description:
      "Roadmap con fases, entregables y retorno estimado. Permite decidir qué intervenir primero y qué puede esperar.",
  },
  {
    phase: "Alcance",
    title: "Documento de alcance firmado",
    description:
      "Objetivos, entregables, responsables, cronograma, supuestos y criterios de éxito. Ninguna iniciativa avanza sin este documento cerrado.",
  },
  {
    phase: "Implementación",
    title: "Documentación de arquitectura",
    description:
      "Diagramas, decisiones de diseño y runbooks operativos generados junto con el equipo interno. Queda versionado en su repositorio.",
  },
  {
    phase: "Implementación",
    title: "Definición de métricas e instrumentación",
    description:
      "Métricas clave instrumentadas sobre el stack real, con tableros y alertas accionables. Base para evaluar el impacto del trabajo.",
  },
  {
    phase: "Cierre",
    title: "Sesiones de transferencia por rol",
    description:
      "Formación práctica sobre su propia plataforma. Materiales reutilizables por el equipo para incorporaciones futuras.",
  },
  {
    phase: "Cierre",
    title: "Informe de resultados contra métricas",
    description:
      "Revisión honesta de qué mejoró, qué no, y qué queda pendiente. Sin ornamentos. Base para planificar el siguiente ciclo si aplica.",
  },
];

const phaseStyles: Record<string, string> = {
  Diagnóstico: "bg-brand-50 text-brand-700 border-brand-100",
  Alcance: "bg-amber-50 text-amber-700 border-amber-100",
  Implementación: "bg-sky-50 text-sky-700 border-sky-100",
  Cierre: "bg-violet-50 text-violet-700 border-violet-100",
};

export default function Deliverables() {
  return (
    <section id="entregables" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="label text-brand-600">Qué recibes</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            Entregables concretos en cada fase.{" "}
            <em
              className="not-italic"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
            >
              Nada queda a interpretación.
            </em>
          </h2>
          <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
            Cada fase del proceso produce artefactos revisables. El equipo interno los valida
            y quedan en su poder, se siga o no con fases posteriores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="card p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-200 hover:bg-white flex flex-col"
            >
              <span
                className={`label inline-flex self-start px-2.5 py-1 rounded-full border ${phaseStyles[d.phase]}`}
              >
                {d.phase}
              </span>
              <h3 className="mt-5 text-[15px] font-semibold text-neutral-900 leading-snug">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">
                {d.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="max-w-xl">
            <p className="label text-brand-400 mb-2">Principio de trabajo</p>
            <p className="text-lg text-white leading-snug">
              Documentamos lo que implementamos y formamos a quien tiene que operarlo. Al
              cerrar el proyecto, la dependencia técnica hacia nosotros debería ser nula.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-white text-neutral-900 font-medium rounded-xl hover:bg-neutral-100 transition-colors text-sm"
          >
            Revisar entregables contigo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
