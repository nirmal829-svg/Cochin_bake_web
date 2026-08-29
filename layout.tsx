import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keraspice.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KerAspice — Authentic Kerala Spices, Fresh From Farm To Kitchen",
    template: "%s · KerAspice",
  },
  description:
    "100% natural, handpicked Kerala spices — black pepper, cardamom, turmeric, cinnamon and more. Sourced directly from Idukki, Wayanad, Kumily and Munnar farms. Lab-tested, eco-packed, delivered worldwide.",
  keywords: [
    "Kerala spices",
    "black pepper",
    "cardamom",
    "turmeric",
    "cinnamon",
    "organic spices",
    "premium spices",
    "farm to kitchen",
  ],
  authors: [{ name: "KerAspice" }],
  creator: "KerAspice",
  publisher: "KerAspice",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "KerAspice",
    title: "KerAspice — Authentic Kerala Spices",
    description:
      "Handpicked spices from Kerala farms, delivered to your kitchen. Pure, lab-tested, world-class.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "KerAspice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KerAspice — Authentic Kerala Spices",
    description: "Handpicked spices from Kerala farms, delivered to your kitchen.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KerAspice",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Authentic Kerala spices, handpicked and shipped fresh from farm to kitchen.",
  sameAs: [
    "https://instagram.com/keraspice",
    "https://facebook.com/keraspice",
    "https://twitter.com/keraspice",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{
          fontFamily:
            "var(--font-body-loaded), var(--font-body), system-ui, sans-serif",
        }}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2800,
            style: {
              background: "#17171c",
              color: "#ffffff",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontFamily: "var(--font-body-loaded), Inter, system-ui",
            },
          }}
        />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
