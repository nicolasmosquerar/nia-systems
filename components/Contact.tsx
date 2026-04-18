"use client";

import { useActionState, useEffect, useRef } from "react";
import { initialContactState, submitContact } from "@/app/actions";

const perks = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Respuesta en menos de 24 horas hábiles",
    description:
      "Si hay encaje, lo confirmamos en el mismo día hábil. Sin seguimientos automáticos ni formularios perdidos.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Hablas directamente con quien hace el trabajo",
    description:
      "La primera llamada la toma el ingeniero que revisará tu infraestructura. No hay intermediación comercial.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "La primera llamada no te compromete a nada",
    description:
      "Sesión inicial gratuita de 30 minutos. Revisamos tu contexto, detectamos si hay encaje y te indicamos qué priorizar primero.",
  },
];

const inputCls =
  "mt-1.5 w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 outline-none transition-all duration-200";
const inputErrCls = "border-red-300 bg-red-50/40 focus:border-red-500 focus:ring-red-500/10";

export default function Contact() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);
  const referrerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (referrerRef.current) {
      referrerRef.current.value = document.referrer || "";
    }
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const errors = state.errors ?? {};

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <span className="label text-brand-600">Sesión inicial · 30 minutos</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Hablemos de tu plataforma.{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" }}
              >
                Sin compromiso.
              </em>
            </h2>
            <p className="mt-5 text-neutral-500 leading-relaxed">
              Revisamos tu contexto, detectamos si hay encaje y te indicamos qué priorizar
              primero. Si no hay encaje, lo decimos claro el mismo día.
            </p>

            <div className="mt-10 space-y-6">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={perk.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{perk.title}</p>
                    <p className="mt-0.5 text-sm text-neutral-500">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-200">
              <p className="label text-neutral-400 mb-3">Prefieres el correo directo</p>
              <a
                href="mailto:nimosquerar@gmail.com?subject=Consulta%20NIA%20Systems"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-brand-600 transition-colors"
              >
                nimosquerar@gmail.com
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <p className="mt-3 text-xs text-neutral-400 leading-relaxed max-w-sm">
                Tus datos se usan únicamente para responder a esta solicitud. No compartimos
                información con terceros ni enviamos comunicaciones comerciales no solicitadas.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            {state.status === "success" ? (
              <div
                className="bg-brand-50 border border-brand-200 rounded-2xl p-10 text-center animate-reveal"
                aria-live="polite"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-brand-600 shadow-lg shadow-brand-200">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">Solicitud recibida.</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{state.message}</p>
                <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                  En la primera llamada revisamos tu contexto y acordamos cómo continuar. Sin
                  propuesta preparada, sin presentación comercial.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                action={formAction}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 space-y-5"
                noValidate
              >
                <input type="hidden" name="source" value="web" />
                <input ref={referrerRef} type="hidden" name="referrer" defaultValue="" />
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-err" : undefined}
                    className={`${inputCls} ${errors.name ? inputErrCls : ""}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p id="name-err" className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Email corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-err" : undefined}
                    className={`${inputCls} ${errors.email ? inputErrCls : ""}`}
                    placeholder="tu@empresa.com"
                  />
                  {errors.email && (
                    <p id="email-err" className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
                    Empresa <span className="text-neutral-400 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className={inputCls}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="intent" className="block text-sm font-medium text-neutral-700">
                    ¿Qué necesitas resolver?
                  </label>
                  <select
                    id="intent"
                    name="intent"
                    required
                    defaultValue=""
                    aria-invalid={Boolean(errors.intent)}
                    aria-describedby={errors.intent ? "intent-err" : undefined}
                    className={`${inputCls} cursor-pointer ${errors.intent ? inputErrCls : ""}`}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="cost">Coste cloud alto o poco transparente</option>
                    <option value="deploys">Despliegues lentos o dependientes de personas clave</option>
                    <option value="platform">Plataforma Kubernetes y modelo operativo</option>
                    <option value="observability">Observabilidad y fiabilidad</option>
                    <option value="ai">IA aplicada a procesos y operación</option>
                    <option value="unsure">No sé por dónde empezar</option>
                  </select>
                  {errors.intent && (
                    <p id="intent-err" className="mt-1 text-xs text-red-600">
                      {errors.intent}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                    Contexto breve
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-err" : undefined}
                    className={`${inputCls} resize-none ${errors.message ? inputErrCls : ""}`}
                    placeholder="Dos o tres frases sobre tu contexto y qué priorizarías revisar."
                  />
                  {errors.message && (
                    <p id="message-err" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {state.status === "error" && !errors && (
                  <p className="text-sm text-red-600" aria-live="polite">
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="group w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-500 disabled:bg-brand-600/70 disabled:cursor-not-allowed transition-colors duration-200 shadow-md shadow-brand-600/15"
                >
                  {pending ? "Enviando..." : "Solicitar sesión inicial"}
                  {!pending && (
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-500 pt-1">
                  Al enviar, te responde un ingeniero en menos de 24 horas hábiles para coordinar
                  una sesión de 30 minutos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
