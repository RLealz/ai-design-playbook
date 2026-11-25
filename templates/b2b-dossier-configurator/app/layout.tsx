import React from "react";
import "./globals.css";

export const metadata = {
  title: "Meridian Studio — B2B Production, Dossiers & Programme",
  description: "Verified capabilities, transparent scope diagnostics, and audited project dossiers.",
};

const verifiedOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meridian Studio",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressCountry: "CH",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(verifiedOrgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
