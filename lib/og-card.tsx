import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Shared programmatic social-card renderer (re-audit finding F2 fix,
 * 3 Nov 2026). Every tool page and the nine static pages get their own
 * 1200x630 card — tool name / page title + category or section eyebrow +
 * a one-line subtitle — in the site's soft palette. Text only: no imagery,
 * nothing fabricated. Served by app/og/tool/[slug] and app/og/page/[key];
 * wired into page metadata by buildMetadata in lib/seo.ts.
 */
export function renderOgCard({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const titleSize = title.length > 38 ? 48 : title.length > 27 ? 56 : 64;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8FCFA",
          padding: "60px 72px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#08745A" }}>
            BIGThreeAstrology
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#2C473F",
              border: "2px solid #A9EAD1",
              backgroundColor: "#DFF5EC",
              borderRadius: 999,
              padding: "8px 20px"
            }}
          >
            Free · No sign-up
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 23,
              fontWeight: 600,
              color: "#08745A",
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 20
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 800,
              color: "#042F2A",
              lineHeight: 1.12
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#2C473F", marginTop: 22, lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid #A9EAD1",
            paddingTop: 24
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#075433", fontWeight: 600 }}>
            bigthreeastrology.online
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#2C473F" }}>
            Vedic + Western Astrology Calculators
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable"
      }
    }
  );
}
