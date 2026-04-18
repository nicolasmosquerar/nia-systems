"use client";

import { useState } from "react";

type Provider = {
  name: string;
  tag: string;
  color: string;
  glyph: React.ReactNode;
};

const providers: Provider[] = [
  {
    name: "AWS",
    tag: "Amazon Web Services",
    color: "#ff9900",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
        <path d="M20 32c0 2.5.3 4.5 1 6-.1.2-.2.5-.2.8 0 .4.2.8.6 1.2l2 1.4c.3.2.6.3.9.3.3 0 .7-.2 1-.6 1-1.1 1.9-2.3 2.6-3.6 2.4 2.9 5.3 4.3 8.7 4.3 2.5 0 4.4-.7 5.8-2.2 1.4-1.5 2.1-3.4 2.1-5.8 0-1.3-.2-2.5-.7-3.5s-1.2-2-2.1-2.7c-1-.8-2.1-1.5-3.4-2.2-1.4-.7-2.7-1.3-4.1-1.8-1.3-.5-2.4-1-3.3-1.5-.8-.5-1.4-1-1.8-1.7-.4-.7-.5-1.4-.5-2.3 0-1.4.5-2.5 1.5-3.3 1-.7 2.4-1.1 4.2-1.1 1.9 0 3.9.4 6 1.2.8.3 1.4.5 1.7.5.7 0 1-.4 1-1.3v-2c0-.5-.1-.9-.3-1.2-.2-.3-.5-.5-1-.8-1.6-.8-3.9-1.2-6.9-1.2-2.6 0-4.7.7-6.3 2-1.6 1.3-2.4 3.1-2.4 5.2 0 2.1.6 3.8 1.7 5.1 1.2 1.3 3 2.4 5.5 3.3l4 1.4c1.4.5 2.3 1 2.9 1.6.6.6.9 1.3.9 2.2 0 1.4-.5 2.5-1.6 3.3-1.1.8-2.6 1.2-4.5 1.2-2.2 0-4.4-.5-6.5-1.5z" fill="#232f3e"/>
        <path d="M56 46c-6.4 4.7-15.7 7.2-23.7 7.2-11.2 0-21.3-4.1-28.9-11-.6-.5-.1-1.3.7-.9C12.3 45 22.5 48 33 48c7.1 0 15-1.5 22.2-4.5 1.1-.5 2 .7 1 1.5z" fill="#ff9900"/>
        <path d="M58.7 43c-.8-1-5.4-.5-7.4-.2-.6.1-.7-.5-.2-.9 3.6-2.5 9.6-1.8 10.3-1 .7.9-.2 6.9-3.6 9.8-.5.4-1 .2-.8-.4.8-1.9 2.5-6.3 1.7-7.3z" fill="#ff9900"/>
      </svg>
    ),
  },
  {
    name: "GCP",
    tag: "Google Cloud",
    color: "#4285f4",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
        <path d="M41 22l5-5 .3-2c-9.1-8.3-23.6-7.4-31.8 1.8a23 23 0 0 0-4.6 7.8l1.7-.2 10-1.7.8-.8c4.4-4.9 11.9-5.5 17-1.4z" fill="#ea4335"/>
        <path d="M52.3 24.4a23 23 0 0 0-7-11.3l-7 7a12.7 12.7 0 0 1 4.7 10.1v1.3a6.4 6.4 0 0 1 0 12.7H30l-1.3 1.3v7.6l1.3 1.2H43a16.6 16.6 0 0 0 9.3-30z" fill="#4285f4"/>
        <path d="M17 54h13V43.7H17a6.3 6.3 0 0 1-2.6-.6l-1.8.6-5 5-.5 1.8A16.5 16.5 0 0 0 17 54z" fill="#34a853"/>
        <path d="M17 20.7A16.5 16.5 0 0 0 7.1 50.4l7.3-7.3a6.4 6.4 0 0 1 8.4-8.4l7.3-7.3A16.5 16.5 0 0 0 17 20.7z" fill="#fbbc05"/>
      </svg>
    ),
  },
  {
    name: "Azure",
    tag: "Microsoft Azure",
    color: "#0078d4",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
        <path d="M23 9h17L22 55H9z" fill="url(#az1)"/>
        <path d="M32 9h8L55 55H32l15-26-7-12z" fill="#0078d4"/>
        <defs>
          <linearGradient id="az1" x1="24.5" y1="9" x2="16" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#114a8b"/><stop offset="1" stopColor="#0669bc"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "DigitalOcean",
    tag: "DigitalOcean",
    color: "#0080ff",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
        <path d="M32 56V44c12 0 21.3-11.8 16.6-24.3A16.9 16.9 0 0 0 38 8.3C25.5 3.5 14 12.8 14 25H2C2 5.7 21.1-9.3 41.7-3.1A28.4 28.4 0 0 1 60.4 15.2C67.3 35.8 53.2 56 33 56h-1z" fill="#0080ff"/>
        <path d="M32 44H21V33h11z" fill="#0080ff"/>
        <path d="M21 53H13V45h8z" fill="#0080ff"/>
        <path d="M13 45H6.5V38H13z" fill="#0080ff"/>
      </svg>
    ),
  },
  {
    name: "Hetzner",
    tag: "Hetzner Cloud",
    color: "#d50c2d",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
        <rect x="6" y="6" width="52" height="52" rx="4" fill="#d50c2d"/>
        <path d="M20 18h5v12h14V18h5v28h-5V34H25v12h-5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "On-prem",
    tag: "Bare metal e híbrido",
    color: "#14b8a6",
    glyph: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="#14b8a6" strokeWidth="2.5">
        <rect x="10" y="12" width="44" height="12" rx="2"/>
        <rect x="10" y="28" width="44" height="12" rx="2"/>
        <rect x="10" y="44" width="44" height="12" rx="2"/>
        <circle cx="16" cy="18" r="1.5" fill="#14b8a6" stroke="none"/>
        <circle cx="16" cy="34" r="1.5" fill="#14b8a6" stroke="none"/>
        <circle cx="16" cy="50" r="1.5" fill="#14b8a6" stroke="none"/>
        <path d="M44 18h6M44 34h6M44 50h6"/>
      </svg>
    ),
  },
];

function ProviderCard({ p, index }: { p: Provider; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: 32,
        minHeight: 200,
        background: hovered
          ? `linear-gradient(155deg, ${p.color}18 0%, #0b1220 60%)`
          : "#0b1220",
        border: `1px solid ${hovered ? p.color + "55" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 300ms cubic-bezier(.2,.8,.2,1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px -20px ${p.color}66`
          : "0 1px 0 rgba(255,255,255,0.02) inset",
        cursor: "pointer",
      }}
    >
      {/* glow orb */}
      <div style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 180,
        height: 180,
        borderRadius: "50%",
        filter: "blur(50px)",
        background: p.color,
        opacity: hovered ? 0.28 : 0.12,
        transition: "opacity 300ms",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 136,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered ? p.color + "44" : "rgba(255,255,255,0.08)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 300ms",
          }}>
            {p.glyph}
          </div>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: hovered ? p.color : "#475569",
            fontWeight: 600,
            transition: "color 300ms",
          }}>
            {String(index + 1).padStart(2, "0")} / 06
          </span>
        </div>

        <div style={{ marginTop: 24 }}>
          <h3 style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 600,
            color: "white",
            letterSpacing: "-0.02em",
          }}>
            {p.name}
          </h3>
          <div style={{ marginTop: 6, fontSize: 13, color: "#94a3b8" }}>{p.tag}</div>
          <div style={{
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: p.color,
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 10px ${p.color}`,
            }} />
            Listo para producción
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="plataforma" className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark" />
      <div className="absolute -top-20 right-0 w-96 h-96 orb bg-brand-500/10 animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="label text-brand-400">Compatibilidad de stack</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Trabajamos sobre lo que ya tienes.{" "}
            <em style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
              Independiente del proveedor.
            </em>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            No hay migraciones forzadas. Llevamos el mismo modelo operativo a AWS, GCP, Azure,
            DigitalOcean, Hetzner o infraestructura on-premise, sin reescribir lo que ya
            funciona.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {providers.map((p, i) => (
            <ProviderCard key={p.name} p={p} index={i} />
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.07]">
          <p className="text-slate-400 text-base max-w-md">
            ¿Dudas sobre si tu stack encaja con este modelo?{" "}
            <span className="text-white font-medium">
              Lo revisamos contigo en la sesión inicial.
            </span>
          </p>
          <a href="#contacto"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm">
            Agendar sesión inicial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
