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
  title: "VibeCoding Enterprise AI | Elite Pricing & Features",
  description: "Next-generation enterprise AI platform. Transparent pricing, dynamic features, and unmatched performance.",
  metadataBase: new URL('https://vibe-coding-elite.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VibeCoding Enterprise AI | Elite Pricing & Features",
    description: "Next-generation enterprise AI platform. Transparent pricing, dynamic features, and unmatched performance.",
    url: "https://vibe-coding-elite.vercel.app",
    siteName: "VibeCoding Enterprise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VibeCoding Enterprise AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCoding Enterprise AI | Elite Pricing & Features",
    description: "Next-generation enterprise AI platform. Transparent pricing, dynamic features, and unmatched performance.",
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
              "name": "VibeCoding Enterprise AI",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "19.00",
                "highPrice": "99.00"
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
