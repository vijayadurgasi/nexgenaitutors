'use client'

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration.scope);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 1000 * 60 * 60); // Check every hour
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
    
    // Listen for offline/online status changes
    window.addEventListener('online', () => {
      document.documentElement.classList.remove('offline');
    });
    
    window.addEventListener('offline', () => {
      document.documentElement.classList.add('offline');
    });
  }
}