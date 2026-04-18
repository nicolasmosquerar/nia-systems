import type { Metadata } from "next";
import { DM_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteDescription =
  "Consultoría cloud, Kubernetes e IA aplicada. Reducimos el coste, la complejidad y la fragilidad de tu plataforma. Auditoría, implementación y transferencia con alcance, entregables y métricas definidos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://niasystems.com"),
  title: {
    default: "NIA Systems — Consultoría cloud, Kubernetes e IA aplicada",
    template: "%s · NIA Systems",
  },
  description: siteDescription,
  keywords: [
    "consultoría cloud",
    "optimización de costes cloud",
    "Kubernetes para empresas",
    "plataforma cloud",
    "observabilidad",
    "modernización de infraestructura",
    "IA aplicada a operaciones",
    "consultor de infraestructura cloud",
    "consultoría DevOps",
    "platform engineering",
  ],
  authors: [{ name: "NIA Systems" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://niasystems.com",
    siteName: "NIA Systems",
    title: "NIA Systems — Consultoría cloud, Kubernetes e IA aplicada",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "NIA Systems — Consultoría cloud, Kubernetes e IA aplicada",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
