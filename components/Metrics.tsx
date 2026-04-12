const metrics = [
  {
    process: "Procesamiento de facturas",
    before: "20 min/factura",
    after: "< 2 min",
    improvement: "90",
  },
  {
    process: "Atención al cliente",
    before: "4 horas de espera",
    after: "< 5 minutos",
    improvement: "98",
  },
  {
    process: "Generación de reportes",
    before: "1 día/semana",
    after: "15 minutos",
    improvement: "97",
  },
  {
    process: "Due diligence",
    before: "5 días/expediente",
    after: "4 horas",
    improvement: "90",
  },
  {
    process: "Onboarding de empleados",
    before: "3 semanas",
    after: "1 semana",
    improvement: "66",
  },
  {
    process: "Búsqueda en documentación",
    before: "30 min buscando",
    after: "30 segundos",
    improvement: "99",
  },
];

export default function Metrics() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32 bg-[var(--bg-primary)]">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label text-[var(--accent)]">Resultados</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight tracking-tight">
            Resultados que puedes{" "}
            <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
              medir
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            Cada proyecto se evalúa con métricas claras. No prometemos
            innovación — prometemos mejoras concretas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.process}
              className="card-hover group bg-[var(--bg-card)] rounded-[var(--radius-lg)] border border-[var(--border)] hover:border-[var(--accent)]/30 overflow-hidden"
            >
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                    {metric.process}
                  </h3>
                  <div className="shrink-0 flex items-baseline">
                    <span className="text-2xl font-bold text-[var(--accent)] tracking-tight">
                      {metric.improvement}
                    </span>
                    <span className="text-sm font-semibold text-[var(--accent)]">%</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[10px] font-medium tracking-wider uppercase text-[var(--text-tertiary)] mb-1.5"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      Antes
                    </div>
                    <div className="text-sm text-[var(--text-tertiary)] line-through decoration-red-300/60">
                      {metric.before}
                    </div>
                  </div>

                  <div className="shrink-0 w-8 flex justify-center">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[10px] font-medium tracking-wider uppercase text-[var(--accent)] mb-1.5"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      Después
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {metric.after}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-[var(--bg-muted)]">
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-700 group-hover:opacity-100 opacity-60"
                  style={{ width: `${metric.improvement}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
