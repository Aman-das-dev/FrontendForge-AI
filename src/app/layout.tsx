import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "NEXUS Data Ops | Distributed Telemetry Engine",
  description: "Next-generation enterprise data automation platform. Zero-latency edge routing, dynamic agent fine-tuning, and matrix telemetry.",
  metadataBase: new URL('https://frontend-forge-ai.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NEXUS Data Ops | Distributed Telemetry Engine",
    description: "Next-generation enterprise data automation platform. Zero-latency edge routing, dynamic agent fine-tuning, and matrix telemetry.",
    url: "https://frontend-forge-ai.vercel.app",
    siteName: "NEXUS Data Ops",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXUS Platform Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS Data Ops | Distributed Telemetry Engine",
    description: "Next-generation enterprise data automation platform. Zero-latency edge routing, dynamic agent fine-tuning, and matrix telemetry.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased overflow-x-hidden`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NEXUS Data Ops",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "29.00",
                "highPrice": "499.00"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-primary-dark text-light relative overflow-x-hidden overscroll-x-none">
        {/* Subtle grid lines background overlay */}
        <div className="fixed inset-0 pointer-events-none grid-lines opacity-40 z-[-1]" aria-hidden="true" />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
