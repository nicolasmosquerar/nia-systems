"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#para-quien",   label: "Para quién" },
  { href: "#servicios",    label: "Servicios" },
  { href: "#proceso",      label: "Proceso" },
  { href: "#entregables",  label: "Entregables" },
  { href: "#resultados",   label: "Indicadores" },
  { href: "#nosotros",     label: "Firma" },
  { href: "#contacto",     label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="NIA Systems — inicio">
            <svg
              viewBox="0 0 100 100"
              className={`w-8 h-8 transition-colors duration-300 group-hover:scale-105 ${
                scrolled ? "text-brand-600" : "text-brand-400"
              }`}
              aria-hidden="true"
            >
              <path
                d="M20 80 Q20 20 35 20 Q50 20 50 55 Q50 80 65 80 Q80 80 80 20"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className={`hidden sm:inline-block h-6 w-px transition-colors duration-300 ${
              scrolled ? "bg-brand-600/30" : "bg-white/25"
            }`} aria-hidden="true" />
            <span className="text-[17px] font-semibold tracking-tight transition-colors duration-300">
              <span className={scrolled ? "text-neutral-900" : "text-white"}>Nia </span>
              <span className={scrolled ? "text-brand-600" : "text-brand-400"}>Systems</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}>
                {link.label}
              </a>
            ))}
            <div className={`ml-4 pl-4 border-l transition-colors duration-300 ${
              scrolled ? "border-neutral-200" : "border-white/15"
            }`}>
              <a href="#contacto"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "bg-white text-brand-600 border border-brand-200 hover:border-brand-300 hover:bg-brand-50"
                    : "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-white/30"
                }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse-soft ${
                  scrolled ? "bg-brand-500" : "bg-brand-300"
                }`} />
                Sesión inicial
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-neutral-500 hover:text-neutral-900" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-neutral-100">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="block py-2.5 px-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-all"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contacto"
              className="block mt-3 px-4 py-2.5 bg-white text-brand-600 text-sm font-medium rounded-lg border border-brand-200 text-center"
              onClick={() => setMenuOpen(false)}>
              Sesión inicial
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
