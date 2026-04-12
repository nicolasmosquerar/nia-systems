"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#resultados", label: "Resultados" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
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
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span className="text-white font-bold text-sm leading-none">N</span>
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-neutral-900">
              NexusAI
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all duration-150">
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-neutral-200">
              <a href="#contacto"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white text-[13px] font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-200">
                Hablemos
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
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
              className="block mt-3 px-4 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg text-center"
              onClick={() => setMenuOpen(false)}>
              Hablemos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
