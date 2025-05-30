import React from 'react'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import QueryProvider from '@/providers/query-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: "#1a365d",
}

export const metadata: Metadata = {
  title: "NextGen AI Tutors",
  description: "Personalized learning experiences powered by advanced artificial intelligence",
  authors: [{ name: "NextGen AI Tutors" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-16x16.png",
  },
  manifest: "/manifest.json",
  applicationName: "NextGen AI Tutors",
  openGraph: {
    type: "website",
    url: "https://yourdomain.com/",
    title: "NextGen AI Tutors",
    description: "Personalized learning experiences powered by advanced artificial intelligence",
    images: [{ url: "https://yourdomain.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen AI Tutors",
    description: "Personalized learning experiences powered by advanced artificial intelligence",
    images: ["https://yourdomain.com/og-image.png"],
  },
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#1a365d",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            <QueryProvider>
            <ServiceWorkerRegistration />
            <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            {children}
            <Footer />
            </TooltipProvider>
            </QueryProvider>
        </body>
    </html>
  )
}