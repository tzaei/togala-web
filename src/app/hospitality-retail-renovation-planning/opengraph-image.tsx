import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala hospitality and retail renovation planning";

export default function Image() {
  return renderOg({ kicker: "Renovations without lost revenue", title: "Hospitality & retail renovation planning" });
}
