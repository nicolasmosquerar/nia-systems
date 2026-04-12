const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#resultados", label: "Resultados" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                NexusAI
              </span>
            </a>
            <p className="mt-3 text-sm text-[var(--text-on-dark-muted)] max-w-xs leading-relaxed">
              IA útil para empresas que quieren trabajar mejor. Consultoría,
              implementación y formación.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-on-dark-muted)] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-on-dark-muted)]">
            &copy; {new Date().getFullYear()} NexusAI. Todos los derechos
            reservados.
          </p>
          <p
            className="text-xs text-white/20"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Diseñado con precisión.
          </p>
        </div>
      </div>
    </footer>
  );
}
