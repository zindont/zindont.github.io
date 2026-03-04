import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const dynamic = "force-static";

export const alt = `${RESUME_DATA.name} Resume`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#f8fbff",
        backgroundImage:
          "radial-gradient(circle at 12% 12%, #dff4ff 0%, transparent 35%), radial-gradient(circle at 86% 10%, #def6f2 0%, transparent 30%)",
      }}
    >
      <div
        style={{
          width: "92%",
          height: "84%",
          borderRadius: "26px",
          background: "#ffffffdd",
          border: "1px solid #dce8f7",
          boxShadow: "0 14px 40px -24px rgba(16, 30, 63, 0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "75%",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#0b496f",
              letterSpacing: "0.03em",
            }}
          >
            Technical Lead · Backend Engineer
          </div>
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            {RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#334155",
            }}
          >
            {RESUME_DATA.about}
          </div>
        </div>
        <div
          style={{
            width: "190px",
            height: "190px",
            borderRadius: "24px",
            border: "2px solid #d7e7f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "72px",
            fontWeight: 800,
            color: "#0b496f",
            background:
              "linear-gradient(135deg, rgba(224,242,254,0.95), rgba(209,250,229,0.9))",
          }}
        >
          {RESUME_DATA.initials}
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
