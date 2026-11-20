/* 《02:17, 마지막 점검》 서비스 워커. 첫 방문 때 받은 파일을 모두 보관하고, 그다음부터는 보관본으로 연다(오프라인). 바깥 주소로는 아무 요청도 하지 않는다. */
const VERSION = '3c54875d5e';
const CACHE = '0217-v3-' + VERSION;
const PRECACHE = ["./","index.html","app.js?v=3c54875d5e","app.css?v=3c54875d5e","manifest.webmanifest","icons/apple-touch-icon.png","icons/favicon-32.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","px/doyun.png","px/min.png","px/scene-s1.png","px/scene-s2.png","px/scene-s3.png","px/sera.png","px/yujin.png","voice/doyun/01.mp3","voice/doyun/02.mp3","voice/doyun/03.mp3","voice/doyun/04.mp3","voice/doyun/05.mp3","voice/doyun/06.mp3","voice/doyun/07.mp3","voice/doyun/08.mp3","voice/doyun/09.mp3","voice/doyun/10.mp3","voice/doyun/11.mp3","voice/doyun/12.mp3","voice/doyun/13.mp3","voice/doyun/14.mp3","voice/doyun/15.mp3","voice/doyun/16.mp3","voice/doyun/17.mp3","voice/doyun/18.mp3","voice/doyun/19.mp3","voice/doyun/20.mp3","voice/doyun/21.mp3","voice/doyun/22.mp3","voice/doyun/23.mp3","voice/index.json","voice/min/01.mp3","voice/min/02.mp3","voice/min/03.mp3","voice/min/04.mp3","voice/min/05.mp3","voice/min/06.mp3","voice/min/07.mp3","voice/min/08.mp3","voice/min/09.mp3","voice/min/10.mp3","voice/min/11.mp3","voice/min/12.mp3","voice/min/13.mp3","voice/min/14.mp3","voice/min/15.mp3","voice/min/16.mp3","voice/min/17.mp3","voice/min/18.mp3","voice/min/19.mp3","voice/narrator/01.mp3","voice/narrator/02.mp3","voice/narrator/03.mp3","voice/narrator/04.mp3","voice/narrator/05.mp3","voice/narrator/06.mp3","voice/narrator/07.mp3","voice/narrator/08.mp3","voice/narrator/09.mp3","voice/narrator/10.mp3","voice/narrator/11.mp3","voice/narrator/12.mp3","voice/narrator/13.mp3","voice/narrator/14.mp3","voice/narrator/15.mp3","voice/sera/01.mp3","voice/sera/02.mp3","voice/sera/03.mp3","voice/sera/04.mp3","voice/sera/05.mp3","voice/sera/06.mp3","voice/sera/07.mp3","voice/sera/08.mp3","voice/sera/09.mp3","voice/sera/10.mp3","voice/sera/11.mp3","voice/sera/12.mp3","voice/sera/13.mp3","voice/sera/14.mp3","voice/sera/15.mp3","voice/sera/16.mp3","voice/sera/17.mp3","voice/sera/18.mp3","voice/sera/19.mp3","voice/sera/20.mp3","voice/sera/21.mp3","voice/sera/22.mp3","voice/sera/23.mp3","voice/yujin/01.mp3","voice/yujin/02.mp3","voice/yujin/03.mp3","voice/yujin/04.mp3","voice/yujin/05.mp3","voice/yujin/06.mp3","voice/yujin/07.mp3","voice/yujin/08.mp3","voice/yujin/09.mp3","voice/yujin/10.mp3","voice/yujin/11.mp3","voice/yujin/12.mp3","voice/yujin/13.mp3","voice/yujin/14.mp3","voice/yujin/15.mp3","voice/yujin/16.mp3","voice/yujin/17.mp3","voice/yujin/18.mp3","voice/yujin/19.mp3","voice/yujin/20.mp3","voice/yujin/21.mp3"];

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
