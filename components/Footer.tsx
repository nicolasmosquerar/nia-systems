const columns = [
  {
    title: "Navegación",
    links: [
      { href: "#para-quien",  label: "Para quién trabajamos" },
      { href: "#servicios",   label: "Servicios" },
      { href: "#proceso",     label: "Proceso" },
      { href: "#entregables", label: "Entregables" },
      { href: "#resultados",  label: "Indicadores" },
      { href: "#nosotros",    label: "La firma" },
    ],
  },
  {
    title: "Áreas de trabajo",
    links: [
      { href: "#servicios", label: "Diagnóstico cloud" },
      { href: "#servicios", label: "Plataforma Kubernetes" },
      { href: "#servicios", label: "Observabilidad" },
      { href: "#servicios", label: "IA aplicada" },
      { href: "#servicios", label: "Formación y transferencia" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5" aria-label="NIA Systems — inicio">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-500" aria-hidden="true">
                <path
                  d="M20 80 Q20 20 35 20 Q50 20 50 55 Q50 80 65 80 Q80 80 80 20"
                  stroke="currentColor"
                  strokeWidth={8}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="h-6 w-px bg-brand-500/40" aria-hidden="true" />
              <span className="text-[17px] font-semibold tracking-tight">
                <span className="text-white">NIA </span>
                <span className="text-brand-400">Systems</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Consultoría independiente en cloud, Kubernetes e IA aplicada. Ordenamos
              infraestructura, reducimos coste y dejamos al equipo interno con autonomía
              operativa.
            </p>
            <a
              href="mailto:nimosquerar@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              nimosquerar@gmail.com
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="label text-slate-500 mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} NIA Systems. Todos los derechos reservados.
          </p>
          <p className="label text-slate-700">Consultoría pensada para producción</p>
        </div>
      </div>
    </footer>
  );
}
