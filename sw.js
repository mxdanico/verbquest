/* =============================================
   VerbQuest — Service Worker v8
   Estrategia: Cache-First con actualización en background
   + Periodic Background Sync para notificaciones de errores
   ============================================= */

const CACHE_NAME = 'verbquest-v8';

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

/* Tiempo mínimo sin practicar para notificar (5 horas en ms) */
const REMINDER_THRESHOLD_MS = 5 * 60 * 60 * 1000;
const SYNC_TAG = 'vq-errors-reminder';

/* ── Instalación: pre-cachear todos los assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).then(() => {
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
        const fetchPromise = fetch(event.request)
          .then(response => {
            if (response && response.status === 200 && response.type !== 'opaque') {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    )
  );
});

/* ── Periodic Background Sync: recordatorio de errores pendientes ── */
self.addEventListener('periodicsync', event => {
  if (event.tag === SYNC_TAG) {
    event.waitUntil(checkAndNotifyErrors());
  }
});

async function checkAndNotifyErrors() {
  /* Leer datos desde todos los clientes activos vía IDB o mensaje */
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });

  /* Leer desde IndexedDB el timestamp y errores guardados */
  const data = await readVQData();
  if (!data) return;

  const { errors, lastPractice } = data;
  if (!errors || errors.length === 0) return;

  const now        = Date.now();
  const elapsed    = now - (lastPractice || 0);
  if (elapsed < REMINDER_THRESHOLD_MS) return;

  /* No molestar si la app está abierta en primer plano */
  const focused = allClients.some(c => c.visibilityState === 'visible');
  if (focused) return;

  /* Lanzar notificación */
  const n = errors.length;
  await self.registration.showNotification('VerbQuest · Errores pendientes 📚', {
    body: `Tienes ${n} verbo${n === 1 ? '' : 's'} por repasar. ¡Llevas más de 5h sin practicarlos!`,
    icon: './assets/icons/icon-192.png',
    badge: './assets/icons/icon-192.png',
    tag: 'vq-reminder',          /* evita duplicados */
    renotify: false,
    vibrate: [200, 100, 200],
    data: { url: self.location.origin + self.registration.scope },
    actions: [
      { action: 'practice', title: '📖 Practicar ahora' },
      { action: 'dismiss',  title: 'Más tarde'          },
    ],
  });
}

/* ── Leer vq-errors y vq-errors-ts desde IndexedDB ── */
function readVQData() {
  return new Promise(resolve => {
    try {
      const req = indexedDB.open('verbquest-store', 1);
      req.onupgradeneeded = e => {
        e.target.result.createObjectStore('kv', { keyPath: 'k' });
      };
      req.onsuccess = e => {
        const db  = e.target.result;
        const tx  = db.transaction('kv', 'readonly');
        const st  = tx.objectStore('kv');
        let errors = null, lastPractice = null;
        const r1  = st.get('vq-errors');
        const r2  = st.get('vq-errors-ts');
        r1.onsuccess = () => { errors = r1.result ? r1.result.v : null; };
        r2.onsuccess = () => { lastPractice = r2.result ? r2.result.v : null; };
        tx.oncomplete = () => resolve({ errors, lastPractice });
        tx.onerror    = () => resolve(null);
      };
      req.onerror = () => resolve(null);
    } catch(e) { resolve(null); }
  });
}

/* ── Tap en la notificación: abrir la app ── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;

  const targetUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : self.location.origin;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      /* Si ya hay una ventana abierta, enfocarla */
      const existing = clients.find(c => c.url.startsWith(targetUrl));
      if (existing) return existing.focus();
      return self.clients.openWindow(targetUrl);
    })
  );
});
