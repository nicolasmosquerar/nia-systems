const principles = [
  {
    title: "Alcance definido antes de intervenir",
    description:
      "Ningún trabajo relevante empieza sin objetivos, entregables y métricas acordadas. Evita expectativas desalineadas y presupuestos abiertos.",
  },
  {
    title: "Independientes del proveedor",
    description:
      "No vendemos herramientas ni licencias. Elegimos el stack adecuado para cada contexto, sin compromisos comerciales con ningún proveedor cloud.",
  },
  {
    title: "Kubernetes como modelo operativo",
    description:
      "Un único plano de control sobre cualquier cloud o infraestructura on-premise. Reduce la fragmentación y facilita la transferencia de conocimiento.",
  },
  {
    title: "IA aplicada, no experimental",
    description:
      "Asistentes y agentes diseñados para procesos reales, con alcance acotado y criterios de éxito medibles. Nada que no pueda llegar a producción.",
  },
  {
    title: "Transferencia como parte del trabajo",
    description:
      "Documentamos y formamos durante el proyecto, no al final. El equipo interno debe quedar con autonomía para operar y evolucionar la plataforma.",
  },
  {
    title: "Seguridad y operación como criterio base",
    description:
      "Datos, secretos, accesos y continuidad operativa se discuten desde la fase de alcance. No son un añadido posterior.",
  },
];

const focusAreas = [
  "Auditoría y optimización de coste cloud",
  "Plataforma interna basada en Kubernetes",
  "Observabilidad y fiabilidad operativa",
  "IA aplicada a procesos y operación",
  "Modelos locales e IA soberana",
  "Formación SRE y platform engineering",
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left — perfil */}
          <div className="lg:col-span-2">
            <span className="label text-brand-600">Sobre la firma</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Pequeña, especializada{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
              >
                y directa.
              </em>
            </h2>
            <div className="mt-8 space-y-4 text-neutral-500 leading-relaxed">
              <p className="text-lg">
                NIA Systems es una firma independiente de consultoría en cloud, Kubernetes e
                IA aplicada. Trabaja con equipos técnicos que necesitan ordenar su plataforma
                antes de crecer.
              </p>
              <p>
                El enfoque es el de una firma pequeña con criterio de operación real: alcance
                acotado, entregables revisables y transferencia como parte del trabajo. Nada
                de propuestas abiertas, nada de dependencia artificial.
              </p>
              <p>
                El consultor principal toma cada primera llamada y se involucra en el
                diagnóstico. Cuando el proyecto lo requiere, se suma un equipo especializado
                de colaboradores conocidos, con alcance definido y responsabilidades claras.
              </p>
            </div>

            <div className="mt-10 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
              <p className="label text-brand-600 mb-3">Ámbitos de especialización</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {focusAreas.map((f) => (
                  <li key={f} className="text-sm text-neutral-700 flex items-start gap-2">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — principios + forma de colaboración */}
          <div className="lg:col-span-3">
            <p className="label text-neutral-400 mb-7">Principios de trabajo</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="card group p-5 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-brand-200 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-200">
                      <svg
                        className="w-3 h-3 text-brand-600 group-hover:text-white transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-neutral-200">
                <p className="label text-neutral-400 mb-2">Tiempo de respuesta</p>
                <p className="text-sm font-semibold text-neutral-900">
                  &lt; 24 h hábiles
                </p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                  Respuesta directa, sin intermediación comercial.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-200">
                <p className="label text-neutral-400 mb-2">Contratación</p>
                <p className="text-sm font-semibold text-neutral-900">
                  Retainer o por proyecto
                </p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                  Alcance cerrado por defecto. Facturación profesional con IVA cuando aplica.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-200">
                <p className="label text-neutral-400 mb-2">Modalidad</p>
                <p className="text-sm font-semibold text-neutral-900">
                  Remoto · ES / EN
                </p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                  Trabajo distribuido con equipos en LATAM y Europa. Presencial puntual si el proyecto lo requiere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
