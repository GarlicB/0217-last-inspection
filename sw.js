/* 《02:17, 마지막 점검》 서비스 워커. 첫 방문 때 받은 파일을 모두 보관하고, 그다음부터는 보관본으로 연다(오프라인). 바깥 주소로는 아무 요청도 하지 않는다. */
const VERSION = 'c55c34f20b';
const CACHE = '0217-v3-' + VERSION;
const PRECACHE = ["./","index.html","app.js?v=c55c34f20b","app.css?v=c55c34f20b","manifest.webmanifest","icons/apple-touch-icon.png","icons/favicon-32.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png"];

self.addEventListener('install', event => {
  /* 설치 때는 HTTP 캐시를 건너뛰고 서버에서 새로 받는다(호스팅이 index.html을 몇 분씩 캐시해도 옛 판이 보관되지 않게). */
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE.map(u => new Request(u, {cache:'reload'})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('0217-v3-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    /* 앱 화면은 항상 보관본으로 연다. 새 판은 서비스 워커가 바뀔 때 함께 바뀐다. */
    event.respondWith(caches.open(CACHE).then(cache => cache.match('index.html')).then(hit => hit || fetch(req)));
    return;
  }
  event.respondWith(caches.open(CACHE).then(cache => cache.match(req)).then(hit => hit || fetch(req)));
});
