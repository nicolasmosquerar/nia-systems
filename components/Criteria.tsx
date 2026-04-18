const criteria = [
  {
    title: "Responsable interno designado",
    description:
      "No intervenimos sin un punto de contacto técnico con capacidad de decisión. Sin eso, el proyecto se estanca y la responsabilidad queda difusa.",
  },
  {
    title: "Criterios de éxito definidos",
    description:
      "Antes de empezar acordamos qué tiene que cambiar para considerar el trabajo terminado. Sin criterios medibles, no aceptamos el proyecto.",
  },
  {
    title: "Complejidad proporcional al problema",
    description:
      "No proponemos plataformas grandes para problemas pequeños. Si una mejora puntual resuelve lo que importa, esa es la recomendación.",
  },
  {
    title: "Cambios reversibles cuando aplica",
    description:
      "Priorizamos intervenciones que se puedan revertir si el contexto cambia. Evitamos decisiones irreversibles sin acuerdo explícito.",
  },
];

export default function Criteria() {
  return (
    <section className="py-24 sm:py-28 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <span className="label text-brand-600">Criterios de admisión</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Cuándo{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
              >
                decimos que no.
              </em>
            </h2>
            <p className="mt-5 text-neutral-500 leading-relaxed">
              Preferimos un buen proyecto a uno más. Estos son los criterios que aplicamos
              antes de aceptar un encargo. Si tu caso no encaja, lo decimos el mismo día.
            </p>
          </div>

          <div className="lg:col-span-2">
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {criteria.map((c, i) => (
                <li key={c.title} className="py-6 flex items-start gap-5">
                  <span className="shrink-0 label text-brand-500 pt-1 w-8 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-neutral-900 leading-snug">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
