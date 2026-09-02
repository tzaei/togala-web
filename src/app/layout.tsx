import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

/* Fallback for the engraved display face on platforms without Copperplate. */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Togala Contractor Builder",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    images: ["/img/hero-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/img/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#093a22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <Script
          defer
          data-domain="togalacb.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-full flex-col bg-bone text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-clay focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to Main Content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
