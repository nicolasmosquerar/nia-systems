import { ImageResponse } from "next/og";

export const alt =
  "NIA Systems — Consultoría cloud, Kubernetes e IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(201,103,54,0.22) 0%, transparent 55%), radial-gradient(circle at 85% 90%, rgba(217,128,73,0.12) 0%, transparent 55%), #0f0f10",
          color: "#f6f3ee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 100 100">
            <path
              d="M20 80 Q20 20 35 20 Q50 20 50 55 Q50 80 65 80 Q80 80 80 20"
              stroke="#d98049"
              strokeWidth={8}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div
            style={{
              width: 1,
              height: 60,
              background: "rgba(217,128,73,0.4)",
            }}
          />
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: -1,
              display: "flex",
              gap: 12,
            }}
          >
            <span>NIA</span>
            <span style={{ color: "#d98049" }}>Systems</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Reducimos el coste, la complejidad</span>
            <span style={{ color: "#d98049" }}>
              y la fragilidad de tu plataforma cloud.
            </span>
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(246,243,238,0.6)",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Cloud · Kubernetes · IA aplicada
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
