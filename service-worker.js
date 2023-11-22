// This is a basic service worker that caches the app shell
const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});