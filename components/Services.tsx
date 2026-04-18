const services = [
  {
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    num: "01",
    title: "Auditoría Cloud",
    description: "En 2 semanas sabés exactamente dónde va tu dinero en la nube y qué lo frena. Hallazgos priorizados por impacto, plan de remediación y roadmap de 12 meses con el ROI de cada iniciativa.",
    price: "Desde $2,000 USD",
    tag: "Empezar aquí",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    num: "02",
    title: "Plataforma Kubernetes",
    description: "Tu equipo de producto deja de esperar a infra para desplegar. Plataforma production-ready con GitOps, observabilidad y seguridad — en AWS, GCP, Azure o donde ya estés. En 6 semanas.",
    price: "Desde $8,000 USD",
    tag: "Mayor demanda",
  },
  {
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    num: "03",
    title: "IA aplicada · RAG · Agents",
    description: "Tus datos internos dejan de ser un activo subutilizado. Asistentes y automatizaciones que realmente llegan a producción — sin demos que nunca escalan, sin dependencia de proveedores externos.",
    price: "Desde $5,000 USD",
    tag: "Alto impacto",
  },
  {
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    num: "04",
    title: "Formación SRE & Platform",
    description: "Tu equipo opera lo que construimos sin depender de nosotros. Talleres por rol (SRE, platform engineers, ingenieros de producto) sobre tu stack real, no sobre ejemplos de laboratorio.",
    price: "Desde $1,500 USD",
    tag: "Multiplica impacto",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="label text-teal-600">Servicios</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Lo que hacemos —{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
                y lo que obtenés.
              </em>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-base leading-relaxed lg:text-right">
            No vendemos proyectos. Entregamos resultados medibles en plazos definidos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title}
              className="card group bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-teal-200 hover:bg-white">
              <div className="flex items-start justify-between gap-4">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-500 group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white transition-all duration-250 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                {/* Tag + number */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-medium text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full label">
                    {s.tag}
                  </span>
                  <span className="label text-neutral-300">{s.num}</span>
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-3 text-neutral-500 leading-relaxed text-[15px]">{s.description}</p>

              <div className="mt-6 pt-5 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900">{s.price}</span>
                <svg className="w-5 h-5 text-neutral-300 group-hover:text-teal-500 transition-colors duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-400 max-w-lg mx-auto">
          También ofrecemos servicios avanzados: multi-cloud networking, IA soberana con modelos locales,
          sistemas multi-agente y formación para equipos de plataforma.
        </p>
      </div>
    </section>
  );
}
