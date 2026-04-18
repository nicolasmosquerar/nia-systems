"use client";

import { useState } from "react";

const perks = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Respondemos en menos de 24h",
    description: "No tenés que esperar 3 días para saber si podemos ayudarte. Si hay fit, lo sabés rápido.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Hablás con quien va a trabajar en tu proyecto",
    description: "No con un account manager. Directo con el ingeniero que va a hacer el trabajo.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "No firmás nada antes de ver el diagnóstico",
    description: "El primer paso es gratuito. Si después de 30 minutos no ves valor, no hay nada más que pagar.",
  },
];

const inputCls = "mt-1.5 w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10 outline-none transition-all duration-200";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Form data:", data);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left */}
          <div>
            <span className="label text-teal-600">Diagnóstico gratuito</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Empezamos con 30 minutos.{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}>
                Sin propuestas, sin compromiso.
              </em>
            </h2>
            <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
              Empezamos con una conversación de 30 minutos. Sin presentaciones largas,
              sin propuestas genéricas. Te decimos si podemos ayudarte y cómo — gratis.
            </p>

            <div className="mt-10 space-y-6">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={perk.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{perk.title}</p>
                    <p className="mt-0.5 text-sm text-neutral-500">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center animate-reveal">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-teal-600 shadow-lg shadow-teal-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">Tu diagnóstico está en camino.</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Te responde un ingeniero — no un SDR. En menos de 24h coordinamos
                  30 minutos para entender tu situación. Sin presentación, sin propuesta, sin presión.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-teal-600 hover:text-teal-700 underline underline-offset-4 transition-colors">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Nombre</label>
                  <input type="text" id="name" name="name" required className={inputCls} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" id="email" name="email" required className={inputCls} placeholder="tu@empresa.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700">Empresa</label>
                  <input type="text" id="company" name="company" className={inputCls} placeholder="Nombre de tu empresa" />
                </div>
                <div>
                  <label htmlFor="intent" className="block text-sm font-medium text-neutral-700">¿Qué te trajo acá?</label>
                  <select id="intent" name="intent" required
                    className={`${inputCls} cursor-pointer`}>
                    <option value="" disabled selected>Seleccioná una opción</option>
                    <option value="cloud-cost">Gasto cloud alto o inexplicable</option>
                    <option value="deployments">Deployments lentos o frágiles</option>
                    <option value="kubernetes">Modernización / plataforma Kubernetes</option>
                    <option value="ai">AI aplicada — quiero llevarlo a producción</option>
                    <option value="unsure">No sé por dónde empezar</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">¿Cuál es tu problema más urgente?</label>
                  <textarea id="message" name="message" required rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="¿Cuál es el problema más urgente que enfrenta tu equipo hoy?" />
                </div>
                <button type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 py-3.5 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-500 transition-colors duration-200 shadow-md shadow-teal-600/15">
                  Agenda diagnóstico gratuito
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-center text-xs text-neutral-400 pt-1">
                  Sin compromiso. Si no hay fit, te lo decimos en esa primera llamada.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
