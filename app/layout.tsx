import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AdSenseScript } from "@/components/AdSenseScript";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BijliHelp PK - MEPCO Bill, PITC Complaint and Feeder Help",
    template: "%s | BijliHelp PK",
  },
  description: site.description,
  keywords: [
    "MEPCO bill",
    "MEPCO duplicate bill",
    "MEPCO bill online check",
    "print MEPCO bill",
    "PITC duplicate bill",
    "PITC complaint registration",
    "track complaint by reference number",
    "track complaint by ticket number",
    "MEPCO feeder details",
    "Pakistan electricity bill",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "BijliHelp PK",
    description: site.description,
    url: site.url,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BijliHelp PK",
    description: site.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AdSenseScript />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
