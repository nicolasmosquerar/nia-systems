const problems = [
  {
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75",
    title: "El coste de la infraestructura cloud sube sin explicación clara",
    description:
      "Los informes del proveedor no son accionables. El gasto crece, los recursos están subutilizados y el equipo no tiene tiempo para auditarlo en profundidad.",
  },
  {
    icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
    title: "Los despliegues dependen de una o dos personas clave",
    description:
      "Si esas personas no están disponibles, nada avanza. El modelo operativo vive en la cabeza de alguien, no en documentación ni en una plataforma compartida.",
  },
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "El onboarding técnico tarda semanas, no días",
    description:
      "Cada equipo configuró su entorno de forma distinta. No existe una plataforma común que estandarice el proceso, así que incorporar a alguien nuevo consume más tiempo del equipo del que ahorra.",
  },
  {
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    title: "Los incidentes los detectan los clientes antes que el sistema",
    description:
      "No hay observabilidad accionable. Cuando algo falla, llega primero por soporte. El tiempo medio de recuperación depende de quién esté despierto.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "La modernización lleva meses en la hoja de ruta y no arranca",
    description:
      "El plan existe. El ancho de banda no. El equipo de plataforma siempre tiene una prioridad más urgente que le impide avanzar con lo estratégico.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Hay iniciativas de IA que no terminan de llegar a producción",
    description:
      "Se probaron herramientas de IA, modelos o agentes, pero siguen en entornos de prueba. El salto a producción depende de una base operativa que todavía no está lista.",
  },
];

export default function Problem() {
  return (
    <section id="problemas" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="label text-brand-600">Problemas que resolvemos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            Si alguno de estos{" "}
            <em
              className="not-italic"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
            >
              describe tu situación,
            </em>{" "}
            podemos ayudarte.
          </h2>
          <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
            Situaciones habituales en equipos técnicos de 20 a 300 personas que crecieron
            más rápido que su capacidad de estandarizar la plataforma.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="card group bg-white p-7 rounded-2xl border border-neutral-200 hover:border-brand-200"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={p.icon}
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-neutral-900 leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#para-quien"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-500 transition-colors duration-200"
          >
            Ver si somos la opción adecuada para tu equipo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
