// InSync PWA: network-only service worker to avoid stale app and private data caches.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
