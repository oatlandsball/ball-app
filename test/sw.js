// Generated at build time by build/pwa.js. Caches the app shell only: never API replies,
// never other websites, never anything but GET requests on this site.
const VERSION = "20261009174042";
const CACHE = 'ball-shell-' + VERSION;
const SCOPE = self.registration.scope;
const SHELL = ["./","assets/committee-DMMZYAN1.js","assets/guest-Dc0bRwzS.js","assets/modules-CyBSRW-n.js","assets/modules-i6FJx-FD.css","committee/","committee/manifest.webmanifest","icons/apple-touch-icon.png","icons/favicon.svg","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","manifest.webmanifest"].map((f) => new URL(f, SCOPE).href);
const EXCLUDE = [].map((p) => new URL(p, SCOPE).href);

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('ball-shell-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = req.url.split('#')[0];
  if (!url.startsWith(SCOPE)) return;
  if (EXCLUDE.some((p) => url.startsWith(p))) return;
  if (req.mode === 'navigate') {
    // Pages: network first so a new build shows at once; the cached shell when offline.
    e.respondWith(fetch(req).catch(() => caches.match(req, { ignoreSearch: true })
      .then((r) => r || caches.match(new URL(url.includes('/committee/') ? 'committee/' : './', SCOPE).href))));
    return;
  }
  const clean = url.split('?')[0];
  if (!SHELL.includes(clean)) return;
  // Built files have hashed names, so cache first is safe.
  e.respondWith(caches.match(clean).then((r) => r || fetch(req)));
});
