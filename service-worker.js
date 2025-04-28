elf.addEventListener('install', (event) => {
    console.log('Service Worker zainstalowany');
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Na razie nic nie robimy, ale service worker jest zarejestrowany
});