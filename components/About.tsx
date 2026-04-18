const differentiators = [
  { title: "Auditoría + Implementación + Formación",   description: "La mayoría ofrece solo una de las tres. Nosotros cubrimos el ciclo completo." },
  { title: "Cloud-agnostic por diseño",                description: "No estamos atados a ningún proveedor. Elegimos el stack que mejor funciona para tu negocio." },
  { title: "Kubernetes como control plane",            description: "Un solo modelo operativo, independiente de si corres en AWS, GCP, Azure o bare metal." },
  { title: "IA aplicada, no experimental",             description: "Trabajamos sobre problemas de negocio reales. Nada de demos que nadie usa en producción." },
  { title: "De piloto a producción",                   description: "Empezamos acotado y escalamos. Pilotos en 3–6 semanas con métricas claras desde el día uno." },
  { title: "Mirada práctica sobre seguridad",          description: "Sin promesas vacías. Criterios claros sobre datos, costos y operación en todo momento." },
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
                NIA Systems
              </em>
            </h2>
            <div className="mt-8 space-y-4 text-neutral-500 leading-relaxed">
              <p className="text-lg">
                No prometemos innovación — prometemos mejoras concretas. Equipos mid-market
                y enterprise que necesitan pasar de auditoría a producción sin sorpresas en el
                camino.
              </p>
              <p className="text-lg">
                Somos una consultora especializada en cloud, Kubernetes e IA aplicada.
                Auditamos, implementamos y formamos — cubriendo el ciclo completo que la mayoría
                no cubre.
              </p>
              <p>
                Nuestro enfoque es cloud-agnostic y Kubernetes-native. Trabajamos sobre
                cualquier provider y dejamos a los equipos con un modelo operativo unificado,
                independiente de dónde corra la infraestructura.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Case study */}
            <div className="mb-8 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
              <p className="label text-teal-600 mb-4">Un resultado reciente</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Empresa de tecnología financiera, 90 personas, AWS.
                Primera semana de auditoría: identificamos $3,800 USD/mes en recursos sin uso activo.
                Remediación: 2 semanas sin detener operaciones.
                ROI: cubierto en el primer mes.
              </p>
              <p className="mt-3 text-xs text-neutral-400">
                Compartimos detalles adicionales en la primera llamada.
              </p>
            </div>

            <p className="label text-neutral-400 mb-7">Lo que nos diferencia en la práctica</p>
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
