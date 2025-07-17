import React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/providers/theme-provider";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  themeColor: "#1a365d",
};

export const metadata: Metadata = {
  title: "NextGenAI Tutors",
  description:
    "Personalized learning experiences powered by advanced artificial intelligence",
  authors: [{ name: "NextGen AI Tutors" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-icon.png",
    shortcut: "/icons/web-app-manifest-192x192.png",
  },
  manifest: "/manifest.json",
  applicationName: "NextGen AI Tutors",
  openGraph: {
    type: "website",
    url: "https://nextgenaitutors.com/",
    title: "NextGen AI Tutors",
    description:
      "Personalized learning experiences powered by advanced artificial intelligence",
    images: [{ url: "https://nextgenaitutors.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen AI Tutors",
    description:
      "Personalized learning experiences powered by advanced artificial intelligence",
    images: ["https://nextgenaitutors.com/og-image.png"],
  },
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#1a365d",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-outfit">
        <QueryProvider>
          <ServiceWorkerRegistration />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Header />
              {/* <Tagline/> */}
              {children}
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
