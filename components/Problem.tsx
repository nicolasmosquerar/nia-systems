const problems = [
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Procesos manuales y lentos",
    description: "Tareas repetitivas que consumen horas de trabajo y generan errores evitables.",
  },
  {
    icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
    title: "No saben por dónde empezar",
    description: "Quieren usar IA pero no identifican dónde aplicarla con retorno real.",
  },
  {
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    title: "Herramientas sin adopción",
    description: "Prueban soluciones sueltas pero los equipos no las integran a su trabajo diario.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Dudas sobre privacidad y costos",
    description: "Preocupaciones legítimas sobre dónde van los datos y cuánto cuesta mantener la IA.",
  },
  {
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    title: "Equipos sin formación en IA",
    description: "Necesitan que sus personas aprendan a trabajar con IA de forma efectiva y responsable.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl">
          <span className="label text-teal-600">El problema</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            Problemas que{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              resolvemos
            </em>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            Si tu empresa enfrenta alguno de estos desafíos, podemos ayudarte.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div key={p.title}
              className="card group bg-white p-7 rounded-2xl border border-neutral-200 hover:border-teal-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-neutral-900 leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
