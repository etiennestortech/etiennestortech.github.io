// TC Storage Service Worker - Enhanced Caching Strategy
const CACHE_NAME = 'tc-storage-v1.0.0';
const STATIC_CACHE_NAME = 'tc-static-v1.0.0';

// Cache static assets for long periods
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  // Images that rarely change
  '/tc-logo.png',
  '/tc-logo.jpg',
  '/logo192.png',
  '/logo512.png',
  '/fulfilling-hearts-logo.svg',
  // CSS and JS will be cached automatically by React's build process
];

// Cache images for medium periods (these might change occasionally)
const IMAGE_ASSETS = [
  '/enhanced-hero-image.jpg',
  '/facility-exterior.jpg',
  '/community-hero.jpg',
  '/business-storage.jpg',
  '/aerial-hero.jpg',
  '/hero-bg.jpg',
  '/community-dog.jpg',
  '/tc-truck.jpg',
  '/security-keypad.jpg',
  '/fulfilling-hearts-dog-mat.jpg',
  '/Large Units TC.png',
  '/Medium Units TC.png', 
  '/Small Units TC.png',
  '/Xlarge Units TC.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(IMAGE_ASSETS);
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request);
      })
    );
    return;
  }

  // Handle static assets with long cache strategy
  if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((fetchResponse) => {
          const responseToCache = fetchResponse.clone();
          caches.open(STATIC_CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle images with medium cache strategy
  if (request.destination === 'image' || IMAGE_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version but also fetch fresh version in background
          fetch(request).then((fetchResponse) => {
            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }).catch(() => {
            // Ignore network errors in background fetch
          });
          return cachedResponse;
        }
        
        // Not in cache, fetch and cache
        return fetch(request).then((fetchResponse) => {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle CSS and JS files with cache-first strategy
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((fetchResponse) => {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Default: network first, cache fallback
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});