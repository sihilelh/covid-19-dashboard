"use strict";

var CACHE_NAME = 'covid-19-dash-sh';
var urlsToCache = ['/', '/completed']; // Install a service worker

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
  }));
}); // Cache and return requests

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    // Cache hit - return response
    if (response) {
      return response;
    }

    return fetch(event.request);
  }));
}); // Update a service worker

self.addEventListener('activate', function (event) {
  var cacheWhitelist = ['covid-19-dash-sh'];
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cacheName) {
      if (cacheWhitelist.indexOf(cacheName) === -1) {
        return caches["delete"](cacheName);
      }
    }));
  }));
});