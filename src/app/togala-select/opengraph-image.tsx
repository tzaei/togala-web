import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala Select emergency response program";

export default function Image() {
  return renderOg({ kicker: "Confidence on call", title: "Togala Select 24/7 emergency response" });
}
