import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala capital improvement strategy";

export default function Image() {
  return renderOg({ kicker: "Lifecycle-driven planning", title: "Capital improvement strategy" });
}
