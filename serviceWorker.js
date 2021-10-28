const cacheName = "cache-app-v1";

const recursosCacheados = ["./",
    "./compra.html",
    "./minhaconta.html",
    "./manifest.json",
    "./index.html",
    "./contato.html",
    "./pesquisar.html",
    "./style.css",
    "./favicon.ico",
    "./index.js",
    "./icons/apple-icon-57x57.png",
    "./icons/apple-icon-60x60.png",
    "./icons/apple-icon-72x72.png",
    "./icons/apple-icon-76x76.png",
    "./icons/apple-icon-114x114.png",
    "./icons/apple-icon-120x120.png",
    "./icons/apple-icon-144x144.png",
    "./icons/apple-icon-152x152.png",
    "./icons/apple-icon-180x180.png",
    "./icons/android-icon-192x192.png",
    "./icons/ms-icon-144x144.png",
    "./icons/favicon-32x32.png",
    "./icons/favicon-96x96.png",
    "./icons/favicon-16x16.png",
    "./icons/icon-512x512.png",
    "./img/m_1025ca.jpg",
    "./img/m_976ca.jpg",
    "./img/Feliz-Da-Vida.jpg",
    "./img/R-7338706-1464893930-8894.jpeg-300x300.jpg"
    ];

self.addEventListener("install", function (event) {
    console.log("Service Worker instalado!");
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll(recursosCacheados);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(`Request para o recurso ${event.request.url}`);

    event.respondWith(
        caches.match(event.request).then(function(response){
            if (response){
                console.log(`Recurso encontrado no cache: ${event.request.url}`)
                return response;
            } else {
                console.log(`Recurso não encontrado no cache.
                 Fazendo request para ${event.request.url}`);
                 return fetch(event.request);
            }
        })
    );
});

