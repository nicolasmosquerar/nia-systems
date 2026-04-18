const links = [
  { href: "#servicios",  label: "Servicios" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#proceso",    label: "Proceso" },
  { href: "#resultados", label: "Resultados" },
  { href: "#nosotros",   label: "Nosotros" },
  { href: "#contacto",   label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none">N</span>
              </div>
              <span className="text-[17px] font-semibold text-white tracking-tight">NIA Systems</span>
            </a>
            <p className="mt-3 text-sm text-slate-500 max-w-xs leading-relaxed">
              Cloud, Kubernetes e IA útil. Auditoría, implementación y formación
              para equipos de plataforma.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} NIA Systems. Todos los derechos reservados.
          </p>
          <p className="label text-slate-700">Built for production.</p>
        </div>
      </div>
    </footer>
  );
}
