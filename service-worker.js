self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  clients.claim();
});

self.addEventListener('fetch', e => {
  // Modo online direto (não cacheia arquivos)
  e.respondWith(fetch(e.request));
});
