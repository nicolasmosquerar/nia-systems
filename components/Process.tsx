const steps = [
  { num: "01", title: "Descubrimiento",     description: "Entendemos tu negocio, identificamos el problema principal y detectamos restricciones de datos y herramientas." },
  { num: "02", title: "Priorización",        description: "Evaluamos impacto vs facilidad y seleccionamos un caso inicial de alto valor y bajo riesgo." },
  { num: "03", title: "Diseño del piloto",   description: "Definimos alcance acotado, responsables, cronograma y métricas de éxito antes de empezar." },
  { num: "04", title: "Implementación",      description: "Construimos la solución, integramos herramientas, probamos con usuarios reales e iteramos." },
  { num: "05", title: "Capacitación",        description: "Entrenamos a los usuarios por rol, dejamos guías y establecemos buenas prácticas de uso." },
  { num: "06", title: "Escalamiento",        description: "Medimos resultados, documentamos el caso y diseñamos el roadmap para ampliar a otras áreas." },
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
            Cómo{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              trabajamos
            </em>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Un proceso probado que va del diagnóstico al resultado, sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {steps.map((step) => (
            <div key={step.num}
              className="group p-8 bg-slate-950 hover:bg-slate-900 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="label text-teal-500">{step.num}</span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-teal-500/20 transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
