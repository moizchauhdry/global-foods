import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { company } from "@/src/data/company";
import "./globals.css";

const body = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Montserrat({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `Premium Halal Meat Exporter from Pakistan | ${company.legalName}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    title: `Premium Halal Meat Exporter from Pakistan | ${company.legalName}`,
    description: company.description,
    url: company.website,
    siteName: company.legalName,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Premium Halal Meat Exporter from Pakistan | ${company.legalName}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: company.website,
    description: company.description,
    logo: `${company.website}${company.logo}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: company.headquarters,
      streetAddress: company.address,
    },
    email: company.email,
    telephone: company.phone,
  };

  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
