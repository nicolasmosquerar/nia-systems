"use client";

import { useState } from "react";

const perks = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Discovery gratuito",
    description:
      "30 minutos para entender tu situación y ver si podemos ayudarte.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Resultados rápidos",
    description:
      "Pilotos en 3-6 semanas con métricas claras desde el día uno.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Sin compromiso",
    description:
      "Empezamos con un diagnóstico acotado. Tú decides si seguimos.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log("Form data:", data);
    setSubmitted(true);
    form.reset();
  }

  const inputClasses =
    "mt-1.5 w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] outline-none transition-all duration-200";

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[var(--bg-primary)]">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column */}
          <div>
            <span className="section-label text-[var(--accent)]">Contacto</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight tracking-tight">
              Hablemos de{" "}
              <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
                tu proyecto
              </span>
            </h2>
            <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
              Cuéntanos qué desafío enfrenta tu empresa. Te respondemos en
              menos de 24 horas con una propuesta de cómo podemos ayudarte.
            </p>

            <div className="mt-10 space-y-5">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={perk.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {perk.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            {submitted ? (
              <div className="bg-[var(--accent-light)] border border-[var(--accent)]/20 rounded-[var(--radius-lg)] p-10 text-center animate-reveal">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[var(--accent)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                  Mensaje recibido
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Te contactaremos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] underline underline-offset-4 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[var(--bg-card)] rounded-[var(--radius-lg)] border border-[var(--border)] p-8 sm:p-10 shadow-sm"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)]">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClasses}
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)]">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClasses}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)]">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Cuéntanos qué desafío enfrenta tu empresa..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full group inline-flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-white font-medium rounded-[var(--radius)] hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-lg shadow-[var(--accent)]/15"
                >
                  Enviar mensaje
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
