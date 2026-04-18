const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    sub: "2 semanas · alcance acotado",
    description:
      "Auditamos la infraestructura y la operación en su estado actual. Entregamos hallazgos priorizados por impacto, criterios de decisión y un plan de remediación con el retorno estimado de cada iniciativa.",
    note: "El informe final queda en tu poder. Si no ves encaje para continuar, no hay compromiso.",
  },
  {
    num: "02",
    title: "Alcance y alineación",
    sub: "1 semana · antes de intervenir",
    description:
      "Definimos contigo el primer caso de alto impacto y bajo riesgo. Cerramos alcance, cronograma, responsables, criterios de éxito y métricas de seguimiento. Ninguna iniciativa avanza sin esta alineación firmada.",
    note: null,
  },
  {
    num: "03",
    title: "Implementación",
    sub: "3–6 semanas · entregas semanales",
    description:
      "Ciclos cortos con entregas incrementales y demos semanales. El equipo interno participa desde el primer día para evitar heredar un sistema que nadie entiende al final del proyecto.",
    note: null,
  },
  {
    num: "04",
    title: "Cierre y transferencia",
    sub: "Al finalizar · el equipo opera con autonomía",
    description:
      "Documentamos arquitectura, procedimientos y criterios operativos. Formamos al equipo sobre su propio stack y medimos el resultado contra las métricas acordadas en la fase 02. Al cerrar, no deberías depender de nosotros para operar lo implementado.",
    note: null,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark" />
      <div className="absolute -top-20 right-0 w-96 h-96 orb bg-brand-500/10 animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="label text-brand-400">Proceso</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Con alcance, entregables y métricas{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              definidos desde el inicio.
            </em>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Cuatro fases que van del diagnóstico al cierre, con criterios de éxito acordados
            y puntos de decisión explícitos en cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {steps.map((step) => (
            <div key={step.num}
              className="group p-8 bg-slate-950 hover:bg-slate-900 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="label text-brand-500">{step.num}</span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-brand-500/20 transition-colors duration-300" />
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
          Trabajamos en paralelo al equipo interno, sin congelar despliegues ni interrumpir
          lo que ya está operando en producción.
        </p>
      </div>
    </section>
  );
}
