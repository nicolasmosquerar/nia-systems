const metrics = [
  { process: "Gasto cloud mensual",                  before: "$18,000/mes",    after: "$10,400/mes",    pct: 42 },
  { process: "Tiempo de deploy a producción",        before: "2–3 días",       after: "< 20 min",       pct: 93 },
  { process: "MTTR en incidentes de infra",          before: "4 horas",        after: "< 35 min",       pct: 85 },
  { process: "Onboarding de un ingeniero nuevo",     before: "3 semanas",      after: "2 días",         pct: 76 },
  { process: "Alertas sin contexto por semana",      before: "180+ alertas",   after: "11 accionables", pct: 94 },
  { process: "Incidentes en producción por mes",     before: "6–8",            after: "0–1",            pct: 88 },
];

export default function Metrics() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <span className="label text-teal-600">Resultados</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            Resultados que podés{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              medir
            </em>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            Cada proyecto se evalúa con métricas claras. No prometemos innovación — prometemos mejoras concretas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.process}
              className="card group bg-white rounded-2xl border border-neutral-200 hover:border-teal-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <h3 className="text-[15px] font-semibold text-neutral-900 leading-snug">{m.process}</h3>
                  <span className="shrink-0 text-2xl font-bold text-teal-600 leading-none">
                    {m.pct}%
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="label text-neutral-400 mb-1">Antes</p>
                    <p className="text-sm text-neutral-400 line-through decoration-red-300">{m.before}</p>
                  </div>
                  <svg className="w-4 h-4 text-neutral-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="flex-1">
                    <p className="label text-teal-600 mb-1">Después</p>
                    <p className="text-sm font-semibold text-neutral-900">{m.after}</p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-neutral-100">
                <div className="h-full bg-teal-500 transition-all duration-500 group-hover:opacity-100 opacity-50"
                  style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-neutral-400 max-w-2xl mx-auto">
          Rangos basados en proyectos completados. Los números varían según tamaño, cloud provider y estado inicial de la infraestructura.
        </p>
      </div>
    </section>
  );
}
