const CACHE_NAME = 'luisterspoor-v2';

const APP_SHELL = [
  './',
  'index.html',
  'tracks.json',
  'manifest.webmanifest',
  'icons/favicon-32.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-192.png',
  'icons/maskable-512.png'
];

async function trackAssets() {
  const response = await fetch('tracks.json', { cache: 'reload' });
  const index = await response.json();
  const assets = new Set();
  for (const track of index.tracks || []) {
    assets.add(track.audio);
    assets.add(track.manifest);
    assets.add(track.text_manifest);
  }
  return [...assets];
}

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(APP_SHELL);
  const assets = await trackAssets();
  await cache.addAll(assets);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

function rangeResponse(request, response) {
  const rangeHeader = request.headers.get('range');
  if (!rangeHeader) return response;
  const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
  if (!match) return response;
  return response.arrayBuffer().then((buffer) => {
    const size = buffer.byteLength;
    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : size - 1;
    const safeEnd = Math.min(end, size - 1);
    const chunk = buffer.slice(start, safeEnd + 1);
    return new Response(chunk, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
        'Content-Length': String(chunk.byteLength),
        'Content-Range': `bytes ${start}-${safeEnd}/${size}`,
        'Accept-Ranges': 'bytes'
      }
    });
  });
}

async function cachedOrNetwork(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request.url);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) await cache.put(request.url, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  if (request.headers.has('range')) {
    event.respondWith(cachedOrNetwork(new Request(request.url)).then((response) => rangeResponse(request, response)));
    return;
  }

  event.respondWith(
    cachedOrNetwork(request).catch(() => caches.match('index.html'))
  );
});
