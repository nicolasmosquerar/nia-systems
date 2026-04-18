"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "intent" | "message", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const intent = String(formData.get("intent") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const source = String(formData.get("source") ?? "web").trim();
  const referrer = String(formData.get("referrer") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) {
    return { status: "success", message: "Recibido." };
  }

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Indica tu nombre completo.";
  if (!EMAIL_RE.test(email)) errors.email = "Introduce un email válido.";
  if (!intent) errors.intent = "Selecciona una opción.";
  if (message.length < 10) errors.message = "Describe tu contexto en al menos 10 caracteres.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados antes de enviar.",
      errors,
    };
  }

  const payload = {
    name,
    email,
    company,
    intent,
    message,
    source,
    referrer,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      if (!res.ok) {
        console.error("[contact-lead] webhook failed", res.status, await res.text().catch(() => ""));
        return {
          status: "error",
          message:
            "No hemos podido procesar tu mensaje. Escríbenos directamente a nimosquerar@gmail.com.",
        };
      }
    } catch (err) {
      console.error("[contact-lead] webhook error", err);
      return {
        status: "error",
        message:
          "No hemos podido procesar tu mensaje. Escríbenos directamente a nimosquerar@gmail.com.",
      };
    }
  } else {
    console.info("[contact-lead]", JSON.stringify(payload));
  }

  return {
    status: "success",
    message:
      "Recibido. Te responde un ingeniero, no un comercial, en menos de 24 horas hábiles.",
  };
}
