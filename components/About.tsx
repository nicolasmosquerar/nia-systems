const differentiators = [
  {
    title: "Consultoría + Implementación + Formación",
    description:
      "La mayoría ofrece solo una de las tres. Nosotros cubrimos el ciclo completo.",
  },
  {
    title: "IA de pago o local, según el caso",
    description:
      "No estamos atados a un proveedor. Elegimos lo que funciona mejor para tu negocio.",
  },
  {
    title: "Foco en adopción real",
    description:
      "No entregamos solo una demo. Nos aseguramos de que los equipos realmente la usen.",
  },
  {
    title: "Proyectos en procesos de negocio",
    description:
      "Trabajamos sobre problemas reales, no tecnología por la tecnología.",
  },
  {
    title: "De simple a sofisticado",
    description:
      "Empezamos con una automatización y escalamos hasta sistemas multi-agente.",
  },
  {
    title: "Mirada práctica sobre seguridad",
    description:
      "Sin promesas vacías. Criterios claros sobre datos, costos y operación.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-[var(--bg-muted)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <span className="section-label text-[var(--accent)]">Nosotros</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight tracking-tight">
              Sobre{" "}
              <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
                NexusAI
              </span>
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Somos una consultora especializada en ayudar a empresas a
                incorporar inteligencia artificial de forma práctica, segura y
                con resultados medibles.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Nuestro enfoque combina diagnóstico estratégico, implementación
                técnica y formación de equipos. No creemos en demos que nadie
                usa — creemos en soluciones que los equipos adoptan y que
                transforman cómo trabajan día a día.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Trabajamos con empresas de todos los tamaños, desde PYMEs que
                necesitan automatizar sus primeros procesos hasta organizaciones
                que buscan integrar IA con sus sistemas internos.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="lg:pl-8 lg:border-l border-[var(--border)]">
              <h3
                className="text-xs font-medium tracking-wider uppercase text-[var(--text-tertiary)] mb-8"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                Por qué elegirnos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {differentiators.map((item, i) => (
                  <div
                    key={item.title}
                    className="group p-5 bg-[var(--bg-card)] rounded-[var(--radius)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                        <svg
                          className="w-3 h-3 text-[var(--accent)] group-hover:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[13px] text-[var(--text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
