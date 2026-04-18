const fits = [
  {
    title: "Equipos técnicos de 20 a 300 personas",
    description:
      "Compañías SaaS, startups en crecimiento o áreas técnicas de empresas medianas que necesitan ordenar la plataforma para sostener el siguiente tramo.",
  },
  {
    title: "Coste cloud difícil de explicar",
    description:
      "El gasto mensual crece más rápido que el negocio y las etiquetas, los informes nativos del proveedor no alcanzan para decidir qué recortar.",
  },
  {
    title: "Dependencia excesiva de personas clave",
    description:
      "El conocimiento operativo vive en pocas cabezas. Los despliegues se bloquean si esas personas no están disponibles.",
  },
  {
    title: "Iniciativas de plataforma estancadas",
    description:
      "Hay plan de modernización, Kubernetes o IA aplicada, pero el ancho de banda interno no llega a arrancarlo ni a llevarlo a producción.",
  },
];

const notFits = [
  "Buscas solo horas de desarrollo sin enfoque de plataforma ni criterio operativo.",
  "Necesitas un proveedor que implemente sin discutir alcance ni prioridades.",
  "Esperas resultados sin instrumentar métricas ni cambiar procesos internos.",
  "La decisión técnica está fragmentada y no hay quien valide criterios de éxito.",
];

export default function Audience() {
  return (
    <section id="para-quien" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="label text-brand-600">Para quién trabajamos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
            Especializados en un perfil concreto.{" "}
            <em
              className="not-italic"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
            >
              No trabajamos con cualquier contexto.
            </em>
          </h2>
          <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
            Si encaja con la descripción de abajo, podemos aportar valor desde la primera
            sesión. Si no encaja, decimos claro que no y, si procede, derivamos a alguien
            mejor posicionado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="label text-brand-600 mb-5">Somos la opción adecuada si...</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fits.map((f) => (
                <div
                  key={f.title}
                  className="card p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-200 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
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
                      <h3 className="text-[15px] font-semibold text-neutral-900 leading-snug">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="label text-neutral-500 mb-5">No somos la opción adecuada si...</p>
            <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800">
              <ul className="space-y-4">
                {notFits.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-slate-500" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-500 leading-relaxed">
                Ser claros sobre cuándo no encajamos evita proyectos mal alineados y protege
                el tiempo de ambas partes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
