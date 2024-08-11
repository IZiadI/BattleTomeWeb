'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bc6d0310f835c65c4b2df9aebcb1eb0d",
"assets/AssetManifest.bin.json": "bbb7c1dad44d7d4a8c05699e8e362069",
"assets/AssetManifest.json": "381bf125ba041e31ad6b626feb62a94d",
"assets/assets/icon/icon.png": "5de433741b4ffe2860a6bf5b9393f2d4",
"assets/assets/icons/bleeding%2520out.svg": "7c81e920acbb9b7c884dd7e719310ced",
"assets/assets/icons/blinded.svg": "e7b52d0873756e1405a49cad27dbe8b1",
"assets/assets/icons/charmed.svg": "efa29ffd8d1bdbc333719a63dbe613f8",
"assets/assets/icons/concentration.svg": "c33a85f840d9780cd6502b392f315906",
"assets/assets/icons/deafened.svg": "55c9a8f37522d3c6bef05a05935a7153",
"assets/assets/icons/exhausted.svg": "87e0c7bbe8a7770f9a402e9be82e762d",
"assets/assets/icons/eye.svg": "fe1cb1ae6477b2ee0951b6a6d6dd7473",
"assets/assets/icons/features.svg": "71693d94efc8624310d00b59fad72060",
"assets/assets/icons/frightened.svg": "e4ac91d0dd25fc600e96230a4773adf2",
"assets/assets/icons/grappled.svg": "2bd93a0f667dbdcd6c8ce59e1cc9f75b",
"assets/assets/icons/heart.svg": "e4bbe0c0174bd4b3ecdb456bbd8572d5",
"assets/assets/icons/incapacitated.svg": "1972c515f9390d1db46657d5ca81c8cc",
"assets/assets/icons/initiative.svg": "7001f18c3070b3ac9714936e676ac88f",
"assets/assets/icons/invisible.svg": "1f9ac6a2600cafc695f3a5d707edd890",
"assets/assets/icons/paralyzed.svg": "dc3c497b1fb8d79dfdfb7f0a811f7645",
"assets/assets/icons/petrified.svg": "68d29119ae821de1ec062c05f1c5db91",
"assets/assets/icons/poisoned.svg": "be85ae4afc79519341dcd23bd23dbf38",
"assets/assets/icons/prone.svg": "aa667b778752f327450fd3b672182d81",
"assets/assets/icons/restrained.svg": "9efb5c8b259e8b40a0ce76758907b136",
"assets/assets/icons/shield.svg": "42b58e4463ec5da166837186b0fc6036",
"assets/assets/icons/skull.svg": "09c868cfb683a33d3bb20d743e721828",
"assets/assets/icons/spellbook.svg": "ad78d2adea258db152d7f3a95cf1edd7",
"assets/assets/icons/stunned.svg": "6f39fc0c7574644ae058875e71b62334",
"assets/assets/jsonFiles/bestiarySources/bestiary-complete.json": "2da027f5ce67393fd07b45ff96663fa8",
"assets/assets/jsonFiles/characterSources/char-official.json": "053ee6dc9d8d4b0f8e855757f66afa51",
"assets/assets/jsonFiles/characterSources/char-ua.json": "70560b90509b2d5c9c6df53dea602464",
"assets/assets/jsonFiles/spellSources/spells-official.json": "9e25845af4f092448a7c0d435b8dd15e",
"assets/assets%255Cicon%255Cicon.png": "5de433741b4ffe2860a6bf5b9393f2d4",
"assets/assets%255Cicons%255Cbleeding%2520out.svg": "7c81e920acbb9b7c884dd7e719310ced",
"assets/assets%255Cicons%255Cblinded.svg": "e7b52d0873756e1405a49cad27dbe8b1",
"assets/assets%255Cicons%255Ccharmed.svg": "efa29ffd8d1bdbc333719a63dbe613f8",
"assets/assets%255Cicons%255Cconcentration.svg": "c33a85f840d9780cd6502b392f315906",
"assets/assets%255Cicons%255Cdeafened.svg": "55c9a8f37522d3c6bef05a05935a7153",
"assets/assets%255Cicons%255Cexhausted.svg": "87e0c7bbe8a7770f9a402e9be82e762d",
"assets/assets%255Cicons%255Ceye.svg": "fe1cb1ae6477b2ee0951b6a6d6dd7473",
"assets/assets%255Cicons%255Cfeatures.svg": "71693d94efc8624310d00b59fad72060",
"assets/assets%255Cicons%255Cfrightened.svg": "e4ac91d0dd25fc600e96230a4773adf2",
"assets/assets%255Cicons%255Cgrappled.svg": "2bd93a0f667dbdcd6c8ce59e1cc9f75b",
"assets/assets%255Cicons%255Cheart.svg": "e4bbe0c0174bd4b3ecdb456bbd8572d5",
"assets/assets%255Cicons%255Cincapacitated.svg": "1972c515f9390d1db46657d5ca81c8cc",
"assets/assets%255Cicons%255Cinitiative.svg": "7001f18c3070b3ac9714936e676ac88f",
"assets/assets%255Cicons%255Cinvisible.svg": "1f9ac6a2600cafc695f3a5d707edd890",
"assets/assets%255Cicons%255Cparalyzed.svg": "dc3c497b1fb8d79dfdfb7f0a811f7645",
"assets/assets%255Cicons%255Cpetrified.svg": "68d29119ae821de1ec062c05f1c5db91",
"assets/assets%255Cicons%255Cpoisoned.svg": "be85ae4afc79519341dcd23bd23dbf38",
"assets/assets%255Cicons%255Cprone.svg": "aa667b778752f327450fd3b672182d81",
"assets/assets%255Cicons%255Crestrained.svg": "9efb5c8b259e8b40a0ce76758907b136",
"assets/assets%255Cicons%255Cshield.svg": "42b58e4463ec5da166837186b0fc6036",
"assets/assets%255Cicons%255Cskull.svg": "09c868cfb683a33d3bb20d743e721828",
"assets/assets%255Cicons%255Cspellbook.svg": "ad78d2adea258db152d7f3a95cf1edd7",
"assets/assets%255Cicons%255Cstunned.svg": "6f39fc0c7574644ae058875e71b62334",
"assets/assets%255CjsonFiles%255CbestiarySources%255Cbestiary-complete.json": "2da027f5ce67393fd07b45ff96663fa8",
"assets/assets%255CjsonFiles%255CcharacterSources%255Cchar-official.json": "053ee6dc9d8d4b0f8e855757f66afa51",
"assets/assets%255CjsonFiles%255CcharacterSources%255Cchar-ua.json": "70560b90509b2d5c9c6df53dea602464",
"assets/assets%255CjsonFiles%255CspellSources%255Cspells-official.json": "9e25845af4f092448a7c0d435b8dd15e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ab839e296266c6738230bba908c20fc0",
"assets/NOTICES": "b9aecc7c35c9a00992f10889d6fa4f06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ec776d682218cc926269277d2bdf1cee",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "92c80358a70e189d5454ee93c99f3de9",
"icons/Icon-512.png": "289bef44c0bbeed59781cb3ac608a4a7",
"icons/Icon-maskable-192.png": "92c80358a70e189d5454ee93c99f3de9",
"icons/Icon-maskable-512.png": "289bef44c0bbeed59781cb3ac608a4a7",
"index.html": "92781a44a9ce18f1433e77fcc6920e97",
"/": "92781a44a9ce18f1433e77fcc6920e97",
"main.dart.js": "ed3da292faa58b44917e0c44323b3f7e",
"manifest.json": "0833b17c4e2ce54af1f5a023cd57a2d0",
"splash/img/dark-1x.png": "79b8d45b9c759533585176de7d072ec8",
"splash/img/dark-2x.png": "289bef44c0bbeed59781cb3ac608a4a7",
"splash/img/dark-3x.png": "b9e5e612c10818ebe041bb12e8da4552",
"splash/img/dark-4x.png": "f26d767c15fd3eb7cf070d8952c444e2",
"splash/img/light-1x.png": "79b8d45b9c759533585176de7d072ec8",
"splash/img/light-2x.png": "289bef44c0bbeed59781cb3ac608a4a7",
"splash/img/light-3x.png": "b9e5e612c10818ebe041bb12e8da4552",
"splash/img/light-4x.png": "f26d767c15fd3eb7cf070d8952c444e2",
"version.json": "074c09ad177a61328c34a67890187a39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
