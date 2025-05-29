'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="mb-8 relative w-24 h-24 mx-auto">
          <Image 
            src="/placeholder.svg" 
            alt="Offline" 
            fill 
            className="object-contain"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-navy-600">You&apos;re Offline</h1>
        
        <p className="mb-8 text-gray-600">
          It seems you&apos;ve lost your internet connection. Some features may be unavailable until you&apos;re back online.
        </p>
        
        <div className="space-y-4">
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-navy-600 hover:bg-navy-700"
          >
            Try Again
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
          >
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Some previously visited pages may still be available while you&apos;re offline.
        </p>
      </div>
    </div>
  )
}
