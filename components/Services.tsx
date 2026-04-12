const services = [
  {
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    number: "01",
    title: "Diagnóstico y Roadmap",
    description:
      "Identificamos dónde aplicar IA primero. Entregamos un plan priorizado con quick wins, ROI estimado y recomendación de primer piloto.",
    price: "Desde $800",
    tag: "Servicio de entrada",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    number: "02",
    title: "Automatización con IA",
    description:
      "Automatizamos documentos, correos, reportes, onboarding y más. Flujos conectados a las herramientas que ya usas.",
    price: "Desde $1,500",
    tag: "Mayor demanda",
  },
  {
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    number: "03",
    title: "Asistentes y RAG",
    description:
      "Tu empresa habla con su propia información. Asistentes que consultan documentos internos, responden preguntas y ejecutan tareas.",
    price: "Desde $3,000",
    tag: "Alto impacto",
  },
  {
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    number: "04",
    title: "Formación y Adopción",
    description:
      "Talleres prácticos por rol: directivos, operaciones, desarrolladores. No solo prompts — nuevas formas de trabajo con IA.",
    price: "Desde $500",
    tag: "Multiplica impacto",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32 bg-[var(--bg-muted)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-label text-[var(--accent)]">Servicios</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight tracking-tight">
              Cuatro líneas de servicio{" "}
              <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
                claras
              </span>
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md text-base leading-relaxed">
            Empezamos simple y escalamos según lo que tu negocio necesite. Sin
            complejidad innecesaria.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover group relative bg-[var(--bg-card)] p-8 sm:p-10 rounded-[var(--radius-lg)] border border-[var(--border)] hover:border-[var(--accent)]/30 overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -top-4 -right-2 text-[120px] font-bold text-[var(--bg-muted)] select-none leading-none pointer-events-none transition-colors duration-300 group-hover:text-[var(--accent-light)]">
                {service.number}
              </span>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-muted)] text-[var(--text-secondary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-light)] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-mono), monospace" }}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {service.price}{" "}
                    <span className="font-normal text-[var(--text-tertiary)]">USD</span>
                  </span>
                  <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-tertiary)] max-w-lg mx-auto">
            También ofrecemos servicios avanzados: integraciones con sistemas
            internos, modelos locales, sistemas multi-agente y configuración de
            IA para equipos de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}
