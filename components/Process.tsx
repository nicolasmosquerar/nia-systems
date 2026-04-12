const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, identificamos el problema principal y detectamos restricciones de datos y herramientas.",
  },
  {
    number: "02",
    title: "Priorización",
    description:
      "Evaluamos impacto vs facilidad y seleccionamos un caso inicial de alto valor y bajo riesgo.",
  },
  {
    number: "03",
    title: "Diseño del piloto",
    description:
      "Definimos alcance acotado, responsables, cronograma y métricas de éxito antes de empezar.",
  },
  {
    number: "04",
    title: "Implementación",
    description:
      "Construimos la solución, integramos herramientas, probamos con usuarios reales e iteramos.",
  },
  {
    number: "05",
    title: "Capacitación",
    description:
      "Entrenamos a los usuarios por rol, dejamos guías y establecemos buenas prácticas de uso.",
  },
  {
    number: "06",
    title: "Escalamiento",
    description:
      "Medimos resultados, documentamos el caso y diseñamos el roadmap para ampliar a otras áreas.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 bg-[var(--bg-dark)] overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark" />
      <div className="absolute top-0 right-0 w-96 h-96 orb bg-[var(--accent)]/[0.06]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label text-[var(--accent)]">Proceso</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Cómo{" "}
            <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
              trabajamos
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--text-on-dark-muted)] leading-relaxed">
            Un proceso probado que va del diagnóstico al resultado, sin
            sorpresas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-[var(--radius-lg)] overflow-hidden border border-white/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative p-8 bg-[var(--bg-dark)] hover:bg-[var(--bg-dark-subtle)] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-medium text-[var(--accent)] tracking-wider"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/[0.06] group-hover:bg-[var(--accent)]/30 transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-on-dark-muted)] leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-8 -translate-y-1/2 bg-white/[0.08]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
