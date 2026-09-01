import { ImageResponse } from "next/og";
import { person, hero } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#5EEAD4", marginBottom: 24 }}>{person.name}</div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15 }}>
          {hero.headingLine1}
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15 }}>
          {hero.headingLine2}
        </div>
      </div>
    ),
    { ...size }
  );
}
