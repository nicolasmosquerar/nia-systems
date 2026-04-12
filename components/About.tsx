const differentiators = [
  { title: "Consultoría + Implementación + Formación", description: "La mayoría ofrece solo una de las tres. Nosotros cubrimos el ciclo completo." },
  { title: "IA de pago o local, según el caso",        description: "No estamos atados a un proveedor. Elegimos lo que funciona mejor para tu negocio." },
  { title: "Foco en adopción real",                    description: "No entregamos solo una demo. Nos aseguramos de que los equipos realmente la usen." },
  { title: "Proyectos en procesos de negocio",         description: "Trabajamos sobre problemas reales, no tecnología por la tecnología." },
  { title: "De simple a sofisticado",                  description: "Empezamos con una automatización y escalamos hasta sistemas multi-agente." },
  { title: "Mirada práctica sobre seguridad",          description: "Sin promesas vacías. Criterios claros sobre datos, costos y operación." },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left */}
          <div>
            <span className="label text-teal-600">Nosotros</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Sobre{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
                NexusAI
              </em>
            </h2>
            <div className="mt-8 space-y-4 text-neutral-500 leading-relaxed">
              <p className="text-lg">
                Somos una consultora especializada en ayudar a empresas a incorporar
                inteligencia artificial de forma práctica, segura y con resultados medibles.
              </p>
              <p>
                Nuestro enfoque combina diagnóstico estratégico, implementación técnica y
                formación de equipos. No creemos en demos que nadie usa — creemos en
                soluciones que los equipos adoptan y que transforman cómo trabajan día a día.
              </p>
              <p>
                Trabajamos con empresas de todos los tamaños, desde PYMEs que necesitan
                automatizar sus primeros procesos hasta organizaciones que buscan integrar
                IA con sus sistemas internos.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="label text-neutral-400 mb-7">Por qué elegirnos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentiators.map((d) => (
                <div key={d.title}
                  className="card group p-5 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-teal-200 hover:bg-white">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-200">
                      <svg className="w-3 h-3 text-teal-600 group-hover:text-white transition-colors duration-200"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">{d.title}</p>
                      <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{d.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
