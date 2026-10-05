import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala large loss reconstruction management";

export default function Image() {
  return renderOg({ kicker: "From first response to full rebuild", title: "Large loss reconstruction management" });
}
