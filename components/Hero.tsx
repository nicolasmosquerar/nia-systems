export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[92vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-dark" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] orb bg-teal-500/20 animate-float" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 orb bg-sky-600/15 animate-float-delay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/80" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-36">
        <div className="max-w-4xl">

          {/* Label */}
          <div className="animate-reveal">
            <span className="label text-teal-400 inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-soft" />
              Consultoría · Implementación · Formación
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-7 animate-reveal-1">
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] tracking-tight">
              Implementamos IA útil
            </span>
            <em className="block mt-3 text-4xl sm:text-6xl lg:text-7xl text-slate-400 leading-[1.08] tracking-tight not-italic"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              para que tu empresa
            </em>
            <span className="block mt-3 text-4xl sm:text-6xl lg:text-7xl font-semibold text-teal-400 leading-[1.08] tracking-tight">
              trabaje mejor.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-xl text-lg text-slate-400 leading-relaxed animate-reveal-2">
            Automatización de procesos, asistentes inteligentes y capacitación
            práctica. Con modelos en la nube o locales, según lo que tu negocio necesite.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-3 animate-reveal-3">
            <a href="#contacto"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-500 transition-all duration-200 shadow-lg shadow-teal-900/40">
              Agenda un diagnóstico
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/10 text-white/70 font-medium rounded-xl hover:border-white/20 hover:text-white transition-all duration-200">
              Ver servicios
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 pt-10 border-t border-white/[0.07] animate-reveal-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {[
              { value: "3–6", unit: "sem", label: "por piloto" },
              { value: "70%", unit: "",    label: "menos tareas manuales" },
              { value: "100%", unit: "",   label: "local si lo necesitas" },
              { value: "4+",   unit: "",   label: "líneas de servicio" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{s.value}</span>
                  {s.unit && <span className="text-sm text-slate-500 font-medium">{s.unit}</span>}
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
