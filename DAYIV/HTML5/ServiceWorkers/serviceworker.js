self.addEventListener("install", function (event) {
  console.log("Service Worker: Installed");
  // configure the cache
  event.waitUntil(
    caches.open("MyCache").then(function (cache) {
      console.log("Service Worker: Caching Files");
      cache.addAll(["Home.html", "About.html"]).then(() => self.skipWaiting());
    }),
  );
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker: Activated");
});

self.addEventListener("fetch", function (event) {
  console.log("Service Worker: Fetching");
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
});
