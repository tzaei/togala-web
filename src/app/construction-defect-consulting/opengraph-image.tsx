import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala construction defect consulting";

export default function Image() {
  return renderOg({ kicker: "Forensic evaluation & repair planning", title: "Construction defect consulting" });
}
