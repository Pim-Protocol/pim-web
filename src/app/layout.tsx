import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { StructuredData } from "@/components/seo/structured-data";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Pim Protocol",
    template: "%s | Pim Protocol",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Pim Global Limited",
    },
  ],

  creator: siteConfig.creator,

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteConfig.url,

    title: "Pim Protocol",

    description: siteConfig.description,

    siteName: "Pim Protocol",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Pim Protocol",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pim Protocol",

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
