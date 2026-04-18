const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    sub: "2 semanas · sin compromiso",
    description: "Auditamos tu infraestructura completa y te entregamos hallazgos priorizados por impacto — con el ROI estimado de cada cambio.",
    note: "Si después del diagnóstico no ves valor, no hay nada más que firmar. El informe es tuyo de todas formas.",
  },
  {
    num: "02",
    title: "Alcance y alineación",
    sub: "1 semana · antes de escribir código",
    description: "Definimos juntos el primer caso de alto impacto y bajo riesgo. Salís de esta semana con alcance, cronograma, responsables y métricas de éxito firmadas — sin sorpresas en el camino.",
    note: null,
  },
  {
    num: "03",
    title: "Implementación",
    sub: "3–6 semanas · entregas semanales",
    description: "Ciclos cortos: cada semana sabés cómo va y qué sigue. Tu equipo participa desde el día uno — no hereda un sistema que nadie entiende al final.",
    note: null,
  },
  {
    num: "04",
    title: "Cierre y transferencia",
    sub: "Al terminar · tu equipo opera solo",
    description: "Documentamos todo lo que implementamos y formamos a tu equipo sobre su propio stack. Medimos resultados contra las métricas del paso 2. Cuando nos vamos, no volvés a necesitarnos para lo que construimos.",
    note: null,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark" />
      <div className="absolute -top-20 right-0 w-96 h-96 orb bg-teal-500/10 animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="label text-teal-400">Proceso</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Sin propuestas de 6 meses.{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              Sin sorpresas en el camino.
            </em>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Cuatro pasos que van del diagnóstico al resultado, con métricas claras en cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {steps.map((step) => (
            <div key={step.num}
              className="group p-8 bg-slate-950 hover:bg-slate-900 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="label text-teal-500">{step.num}</span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-teal-500/20 transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
              <p className="label text-slate-600 mb-4">{step.sub}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              {step.note && (
                <p className="mt-3 text-xs text-slate-500 leading-relaxed border-t border-white/5 pt-3">
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 max-w-xl mx-auto">
          Trabajamos en paralelo a tu equipo — sin freezes de deploy,
          sin interrumpir lo que ya está en producción.
        </p>
      </div>
    </section>
  );
}
