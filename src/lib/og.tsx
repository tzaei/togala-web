import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function dataUri(file: string, mime: string) {
  const buf = await readFile(join(process.cwd(), "public", file));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

/** Branded 1200×630 share card: logo, kicker, page title, contact line, swoosh. */
export async function renderOg({ kicker, title }: { kicker: string; title: string }) {
  const [logo, swoosh] = await Promise.all([
    dataUri("img/togala-logo-stacked.png", "image/png"),
    dataUri("img/togala-swoosh.svg", "image/svg+xml"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#093a22",
          padding: "64px 72px",
          color: "#f5f6f6",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={swoosh}
          alt=""
          width={620}
          height={248}
          style={{ position: "absolute", right: -70, bottom: -40 }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <img src={logo} alt="" width={111} height={120} />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div style={{ fontSize: 24, letterSpacing: 6, color: "#00b042", fontWeight: 700 }}>
              {kicker.toUpperCase()}
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: title.length > 34 ? 60 : 72,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
            <div style={{ marginTop: 26, width: 96, height: 4, backgroundColor: "#f36e48" }} />
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "rgba(245,246,246,0.75)", letterSpacing: 1 }}>
            {`${site.url.replace("https://", "")}  ·  ${site.phone}`}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
