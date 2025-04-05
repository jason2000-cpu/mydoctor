const CACHE_NAME = 'mydoctor-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'manifext.json',
    '/icon-192x192.png',
    'icon-512x512.png'
]


// Install event
self.addEventListener('install', event => {
    console.log('[sw] Install');
    event.waitUntill(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    )
})

// Activate Event
self.addEventListener('activate', event => {
    console.log('[SW] Activate');
    event.waitUntill(
        caches.keys().then(keyList => 
            Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key)
                    }
                })
            )
        )
    );
    return self.clients.claim();
});


// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => 
            response || fetch(event.request)
        )
    );
})