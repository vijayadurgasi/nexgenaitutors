import React from 'react'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import QueryProvider from '@/providers/query-provider';
// import meta from './metadata';


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
            {children}
            </TooltipProvider>
            </QueryProvider>
        </body>
    </html>
  )
}