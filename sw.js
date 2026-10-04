const CACHE = "scai-me1-v12";
const CORE = [
  "./index.html",
  "./landing.html",
  "./growth.html",
  "./daily.html",
  "./data-courses.js",
  "./data-dual.js",
  "./data-china-textbooks.js",
  "./data-competitions.js",
  "./data-daily.js",
  "./data-ielts.js",
  "./data-pat.js",
  "./data-meta.js",
  "./lesson-extra.js",
  "./config.local.js",
  "./pdfs/index.json",
  "./mindmaps/思维导图预览.pdf",
  "./mindmaps/思维导图预览.html",
  "./manifest.webmanifest",
  "./ui-theme.css",
  "./daily-theme.css",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    try {
      const res = await fetch("./pdfs/index.json");
      if (res.ok) {
        const list = await res.json();
        await cache.addAll(list.map(item => "./" + item.file));
      }
    } catch (err) {
      console.warn("PDF pre-cache skipped", err);
    }
    self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    const url = new URL(event.request.url);
    const isCore = /\.(html|js|json|webmanifest)$/i.test(url.pathname);
    if (isCore) {
      const fresh = fetch(event.request).then(res => {
        if (res.ok && url.origin === self.location.origin) {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return res;
      }).catch(() => null);
      return cached || (await fresh) || Response.error();
    }
    if (cached) return cached;
    const res = await fetch(event.request);
    if (res.ok && url.origin === self.location.origin) {
      const clone = res.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, clone));
    }
    return res;
  })().catch(() => caches.match(event.request).then(c => c || Response.error())));
});
