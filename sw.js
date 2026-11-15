const CACHE_NAME = "poli-lunar-v1";

const FILES_TO_CACHE = [
  "/Poli-Lunar/",
  "/Poli-Lunar/index.html",
  "/Poli-Lunar/manifest.webmanifest",
  "/Poli-Lunar/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});
