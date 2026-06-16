// ============================================
// SERVICE WORKER — OPOTEST
// Estrategia:
//   - Navegación (HTML): network-first → así el usuario SIEMPRE recibe la
//     última versión si tiene red; si no hay red, cae al index.html cacheado.
//   - Estáticos propios (css/js/img): stale-while-revalidate → carga rápido
//     desde caché y actualiza en segundo plano.
//   - Supabase y cualquier petición que no sea GET de mismo origen: se ignoran
//     (van siempre a la red, nunca se cachean).
//
// 👉 IMPORTANTE: sube CACHE_VERSION cada vez que despliegues cambios
//    (v1 → v2 → v3...). Eso invalida la caché vieja y obliga a refrescar.
// ============================================

const CACHE_VERSION = 'opotest-v2';
const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/parche-supuestos.css',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/manifest.json'
];

// --- INSTALL: precachear el app shell ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()) // activa la nueva versión sin esperar
  );
});

// --- ACTIVATE: borrar cachés viejas ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves
          .filter((c) => c !== CACHE_VERSION)
          .map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim()) // toma control de las pestañas abiertas
  );
});

// --- FETCH ---
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Solo GET de mismo origen. El resto (Supabase, CDN, POST...) va directo a red.
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // ignora Supabase y CDNs

  // Navegación (cargar la página): network-first
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((resp) => {
          const copia = resp.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('/index.html', copia));
          return resp;
        })
        .catch(() => caches.match('/index.html').then((r) => r || caches.match('/')))
    );
    return;
  }

  // Estáticos propios: stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cacheada) => {
      const red = fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            const copia = resp.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copia));
          }
          return resp;
        })
        .catch(() => cacheada); // sin red → lo que haya en caché
      return cacheada || red;
    })
  );
});
