import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio418.ca"),
  title: {
    default: "Studio 418 — Sites web modernes pour commerces de Québec",
    template: "%s | Studio 418",
  },
  description:
    "Studio 418 crée des sites web au design percutant, optimisés pour Google et ultra-rapides pour les PME et commerces de la grande région de Québec. Maquette gratuite en 48h.",
  keywords: [
    "agence web Québec",
    "création site web Québec",
    "site web commerce local",
    "refonte site web",
    "Studio 418",
    "site web PME Québec",
    "web design Québec",
  ],
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: "Studio 418",
    title: "Studio 418 — Sites web modernes pour commerces de Québec",
    description:
      "Design percutant, SEO local, ultra-rapide. Maquette gratuite en 48h, sans engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 418 — Sites web modernes pour commerces de Québec",
    description:
      "Design percutant, SEO local, ultra-rapide. Maquette gratuite en 48h, sans engagement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Studio 418",
    description:
      "Agence web spécialisée dans la création de sites web modernes pour les PME et commerces de la grande région de Québec.",
    url: "https://studio418.ca",
    areaServed: {
      "@type": "City",
      name: "Québec",
      "@id": "https://www.wikidata.org/wiki/Q2145",
    },
    priceRange: "$$",
    serviceType: ["Web Design", "Web Development", "SEO local"],
  };

  return (
    <html
      lang="fr-CA"
      className={`${geistSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
