/* =============================================
   VerbQuest — Service Worker v6
   Estrategia: Cache-First con actualización en background
   ============================================= */

const CACHE_NAME = 'verbquest-v7';

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

/* URLs externas a cachear (fuentes Google) */
const EXTERNAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap',
];

/* ── Instalación: pre-cachear todos los assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      /* Assets propios — fallan si no hay red y abortan la instalación */
      return cache.addAll(ASSETS).then(() => {
        /* Fuentes externas — se intentan pero no bloquean la instalación */
        return Promise.allSettled(
          EXTERNAL_ASSETS.map(url =>
            fetch(url, { mode: 'cors' })
              .then(res => { if (res.ok) cache.put(url, res); })
              .catch(() => {})
          )
        );
      });
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

  /* Interceptar fuentes de Google Fonts (origen externo) con Cache-First */
  const isFont = url.hostname === 'fonts.googleapis.com' ||
                 url.hostname === 'fonts.gstatic.com';
  if (isFont) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request, { mode: 'cors' }).then(res => {
            if (res && res.status === 200) cache.put(event.request, res.clone());
            return res;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

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
