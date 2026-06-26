import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS Data Ops | Distributed Telemetry Engine",
  description: "Next-generation enterprise data automation platform. Zero-latency edge routing, dynamic agent fine-tuning, and matrix telemetry.",
  metadataBase: new URL('https://nexus-data-ops.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NEXUS Data Ops | Distributed Telemetry Engine",
    description: "Next-generation enterprise data automation platform. Zero-latency edge routing, dynamic agent fine-tuning, and matrix telemetry.",
    url: "https://nexus-data-ops.vercel.app",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script
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
      <body className="min-h-full flex flex-col bg-primary-dark text-light relative overflow-x-hidden">
        {/* Subtle grid lines background overlay */}
        <div className="fixed inset-0 pointer-events-none grid-lines opacity-40 z-[-1]" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
