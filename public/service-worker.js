
// Service Worker for NextGen AI Tutors (Next.js version)
const CACHE_NAME = 'nextgen-ai-tutors-v1';

// Assets to cache on install
const staticAssets = [
  '/',
  '/offline',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/placeholder.svg',
  '/og-image.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  self.skipWaiting(); // Force activation on all clients
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(staticAssets);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim clients to ensure updates are applied immediately
      return self.clients.claim();
    })
  );
});

// Helper function to determine if a request is an asset that should be cached
const shouldCache = (url) => {
  // Cache static assets like images, fonts, css, js
  const assetExtensions = [
    '.css', '.js', '.jpg', '.jpeg', '.png', '.webp', 
    '.svg', '.woff', '.woff2', '.ttf', '.eot', '.ico'
  ];
  
  return assetExtensions.some(ext => url.pathname.endsWith(ext)) ||
         url.pathname.startsWith('/_next/static/') ||
         url.pathname.startsWith('/_next/image/') ||
         staticAssets.includes(url.pathname);
};

// Fetch event - network-first for HTML/JSON, cache-first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests and requests to other domains
  if (event.request.method !== 'GET' || 
      !url.origin.includes(self.location.origin)) {
    return;
  }
  
  // Skip analytics, APIs or other dynamic requests
  if (url.pathname.includes('/api/') || 
      url.pathname.includes('analytics') ||
      url.pathname.includes('socket')) {
    return;
  }
  
  // For page requests (HTML): network-first strategy
  if (event.request.mode === 'navigate' || 
      event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // If no cached version exists, return the offline page
              return caches.match('/');
            });
        })
    );
    return;
  }
  
  // For static assets: cache-first strategy
  if (shouldCache(url)) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Return cached response and fetch update in background
            const fetchPromise = fetch(event.request)
              .then(networkResponse => {
                // Update cache with fresh version
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
                return networkResponse;
              })
              .catch(() => {
                // Network error, fallback to cached version
                return cachedResponse;
              });
              
            return cachedResponse;
          }
          
          // No cache match, get from network and cache
          return fetch(event.request)
            .then(response => {
              // Check if we received a valid response
              if (!response || response.status !== 200) {
                return response;
              }
              
              // Clone the response
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            });
        })
    );
    return;
  }
  
  // Default fetch strategy for other requests
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
