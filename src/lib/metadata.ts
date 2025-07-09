import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "NextGenAI Tutors",
  description: "Personalized learning experiences powered by advanced artificial intelligence",
  authors: [{ name: "NextGen AI Tutors" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-16x16.png",
  },
  manifest: "/manifest.json",
  applicationName: "NextGenAI Tutors",
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
