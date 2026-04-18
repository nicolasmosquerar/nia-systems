const indicators = [
  {
    area: "Coste cloud",
    metric: "Gasto mensual imputable",
    description:
      "Visibilidad por entorno, equipo y servicio. Reducción del gasto innecesario sobre recursos subutilizados, infrautilizados o duplicados.",
    expectation: "Rango habitual 15–40 %",
  },
  {
    area: "Entrega",
    metric: "Tiempo de despliegue a producción",
    description:
      "Desde commit a producción, medido de forma automática. Reducción por estandarización de pipelines y plataforma interna.",
    expectation: "Objetivo horas → minutos",
  },
  {
    area: "Fiabilidad",
    metric: "MTTR en incidentes de infraestructura",
    description:
      "Tiempo medio de recuperación sobre incidentes relevantes. Reducción por observabilidad accionable y procedimientos operativos documentados.",
    expectation: "Objetivo halving por ciclo",
  },
  {
    area: "Autonomía",
    metric: "Onboarding técnico completo",
    description:
      "Tiempo hasta que una persona técnica puede desplegar y depurar en el stack real. Mejora por estandarización y documentación operativa.",
    expectation: "Objetivo semanas → días",
  },
  {
    area: "Observabilidad",
    metric: "Ruido en alertas",
    description:
      "Porcentaje de alertas accionables sobre total generado. Reducción mediante revisión de umbrales, deduplicación y correlación.",
    expectation: "Objetivo > 80 % accionables",
  },
  {
    area: "Dependencia",
    metric: "Cuellos de botella por persona clave",
    description:
      "Número de procesos operativos que requieren a una persona específica para avanzar. Reducción por documentación y plataforma compartida.",
    expectation: "Objetivo cero bloqueantes",
  },
];

export default function Metrics() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="label text-brand-600">Indicadores que seguimos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            El impacto se mide.{" "}
            <em
              className="not-italic"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
            >
              No se promete.
            </em>
          </h2>
          <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
            Cada proyecto se evalúa con indicadores acordados en la fase de alcance. Los
            rangos objetivo son orientativos y dependen del punto de partida, del proveedor
            cloud y del alcance real del trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {indicators.map((i) => (
            <div
              key={i.metric}
              className="card group bg-white rounded-2xl border border-neutral-200 hover:border-brand-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="label text-brand-600">{i.area}</span>
                  <span className="label text-neutral-300">
                    {i.expectation}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-neutral-900 leading-snug">
                  {i.metric}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {i.description}
                </p>
              </div>
              <div className="h-1 bg-brand-500/20 group-hover:bg-brand-500/60 transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-500 leading-relaxed">
            Los indicadores se definen antes de intervenir y se revisan en cada entrega.
            En la sesión inicial explicamos qué instrumentación requiere cada métrica y qué
            es razonable esperar en tu contexto.
          </p>
          <p className="mt-3 text-xs text-neutral-400">
            No publicamos porcentajes de casos pasados hasta poder respaldarlos con datos
            verificables. Las mejoras reales se discuten con referencias concretas.
          </p>
        </div>
      </div>
    </section>
  );
}
