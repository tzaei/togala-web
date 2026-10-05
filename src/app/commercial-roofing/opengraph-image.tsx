import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala commercial roofing";

export default function Image() {
  return renderOg({ kicker: "Inspections, replacements & oversight", title: "Commercial roofing" });
}
