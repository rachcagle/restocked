const CACHE = 'restocked-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('periodicsync', e => {
  if (e.tag === 'restock-daily') {
    e.waitUntil(
      self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
        if (clients.length > 0) return; // app is open, let it handle notification
        return self.registration.showNotification('Restocked', {
          body: 'Time to check what needs restocking.',
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
          tag: 'restock',
        });
      })
    );
  }
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
