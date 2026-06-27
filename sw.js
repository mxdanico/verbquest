/* =============================================
   VerbQuest — Service Worker v6
   Estrategia: Cache-First con actualización en background
   ============================================= */

const CACHE_NAME = 'verbquest-v6';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/style.css',
  './assets/js/script.js',
  './assets/icons/favicon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
];

/* ── Instalación: pre-cachear todos los assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

/* ── Activación: limpiar cachés viejos ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: Cache-First para assets propios, Network-First para el resto ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* Solo interceptar peticiones del mismo origen */
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        /* Lanzar fetch en background para mantener caché fresco */
        const fetchPromise = fetch(event.request)
          .then(response => {
            if (response && response.status === 200 && response.type !== 'opaque') {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => cached); /* si no hay red, usar caché */

        /* Devolver caché inmediatamente si existe, si no esperar red */
        return cached || fetchPromise;
      })
    )
  );
});
