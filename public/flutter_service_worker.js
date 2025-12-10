'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99ac8012ddff9df2823af7638fb84ac4",
"assets/AssetManifest.bin.json": "d4198a97ac15b8179187d79635996137",
"assets/assets/data/caliph1/chapter1.json": "6a9c0dc7e719c53c65940e35ca27c37c",
"assets/assets/data/caliph1/chapter10.json": "29a23d5f10ec627411a4a8dc48fb9d65",
"assets/assets/data/caliph1/chapter11.json": "0d3d27fd4b5d6fc510a4ffb46ba83e5d",
"assets/assets/data/caliph1/chapter12.json": "e41f1bd879a7b3b2e5404819d4e3edfb",
"assets/assets/data/caliph1/chapter2.json": "92c186f413e27c235da0d551af931dc1",
"assets/assets/data/caliph1/chapter3.json": "91a1e2a52675bb26d52ad839e428516b",
"assets/assets/data/caliph1/chapter4.json": "b7f46da0e6771f5bc9bc3a534bbd8fdf",
"assets/assets/data/caliph1/chapter5.json": "efd7c18c0d519e18ed020ed64e123105",
"assets/assets/data/caliph1/chapter6.json": "a580c2f215a282e852062991608d9bf3",
"assets/assets/data/caliph1/chapter7.json": "ef81e346dd9caa3f2769b29d2f6759eb",
"assets/assets/data/caliph1/chapter8.json": "675ccc8f49802845c9361c523c3770e4",
"assets/assets/data/caliph1/chapter9.json": "ff0b85d29edc635180360993f894d6a4",
"assets/assets/fonts/abdo.ttf": "d912c66a1a93b3b104c1ede30cf1737b",
"assets/assets/fonts/alquranalkareem.ttf": "60b9f9d3674a0dd451e7a483edaafad3",
"assets/assets/fonts/amiri.ttf": "a0eaf4f9024ba05c091e59d5eaccccee",
"assets/assets/fonts/dinnext.ttf": "61b1e04ff205cd324350749648fe16fc",
"assets/assets/fonts/droid.ttf": "791f577ddc8e608ef0d842d070bcac23",
"assets/assets/fonts/ibmplexarabic.ttf": "76b0d039397c1d22ed2e38e5d7af9ae7",
"assets/assets/fonts/rosemery.ttf": "21711cf526c25c8b30262ba6510828e1",
"assets/assets/fonts/swissra.otf": "f447a4e8356eb47017ac6377b049e366",
"assets/assets/fonts/uthmanic.otf": "43269f118299246de0cf264e04ae2680",
"assets/assets/fonts/wessam.ttf": "047a33f5a9a3c1490b0e0382d5b07ccd",
"assets/assets/fonts/wessam2.ttf": "192942ddc1f9a0db79a4137539bac8fe",
"assets/assets/icon/icon.png": "c9078d83d6089988e6abe8b56e727cae",
"assets/assets/images/azkar/cloud.png": "42547b0ba113e052d868623f79cd7d3d",
"assets/assets/images/azkar/cloud_blue.png": "3b4ccbd9fd8cab9978416654c839142f",
"assets/assets/images/azkar/masjid_nabawi.png": "b19de734a97332e69014185e6255af78",
"assets/assets/images/azkar/moon.png": "ca4e61554f43ca62c69bb722d18f7b3a",
"assets/assets/images/azkar/moon2.png": "c9826ebd53b8cc56be130fca156060fe",
"assets/assets/images/azkar/nayaa.png": "56d5516ea4576056f180e2fdef6fc4ef",
"assets/assets/images/azkar/nayaa2.png": "412a702e0e490b405b678c4bf7c868fc",
"assets/assets/images/azkar/one.png": "4f2db0ab68c373d3d90a566bdcd6be6f",
"assets/assets/images/azkar/palm.png": "04a530f2fc2c58611a1e7e17c92b7d9e",
"assets/assets/images/azkar/plant.png": "2fb93c3be4aa76707f3b7afd25211a05",
"assets/assets/images/azkar/praise.png": "b48b7adbb1bd773de36a3356c1d860f0",
"assets/assets/images/azkar/praying.png": "58be7b155ac4c4cebaae555ebb6a4f55",
"assets/assets/images/azkar/quran.png": "2e1fb315a20a5f8d3992d3331c1949e4",
"assets/assets/images/azkar/tasbih-green.png": "03728a4bf637e18c105d574eda521475",
"assets/assets/images/azkar/treasure-chest.png": "a5560e1d72a01a574a0e4451b558e80b",
"assets/assets/images/bookmark1.png": "9f4d6108ca8b797cfb90fac96c2148c2",
"assets/assets/images/bookmark2.png": "e4b85ecd271540c36b87233ac70e00a3",
"assets/assets/images/camera.png": "3fe1fac22dcbe6318b858df907026352",
"assets/assets/images/checkmark1.png": "1cbe3a8beb9a68d638f5961d2824e590",
"assets/assets/images/checkmark2.png": "395020429e471c4d4863a1a67f699ac4",
"assets/assets/images/etiquette.png": "a1c9c854f53f33a00ec1832b49f96149",
"assets/assets/images/fasting_rules/boy.png": "7ba5f4d57f634b7065261e5cc8bb7dff",
"assets/assets/images/fasting_rules/correct-light.png": "43149f746f16a26249925a0ab7dc2193",
"assets/assets/images/fasting_rules/destination.png": "5ffe8cc1c10245d266d5c78fef84a0f4",
"assets/assets/images/fasting_rules/framedown.png": "1a25f93c21046ef540ff3b6d1abaed2e",
"assets/assets/images/fasting_rules/hijab.png": "b2d399880c4f4984f9ac45731c85ac83",
"assets/assets/images/fasting_rules/iftar.png": "c08efefa206cc4794ab6c297ccf613a1",
"assets/assets/images/fasting_rules/lamp_ramadan.png": "0ca45abf08427396beef0404efc1086b",
"assets/assets/images/fasting_rules/lantern.png": "3746df8bcf3531cfb484b69308c8ebcd",
"assets/assets/images/fasting_rules/medical-records.png": "6c4ac7037c68ed843be097882ec54a50",
"assets/assets/images/fasting_rules/moon-mosq.png": "61aab4cff6036d138a7e80cd769df6e8",
"assets/assets/images/fasting_rules/nawafel.png": "8fd5ca261ab19609f019471256939e75",
"assets/assets/images/fasting_rules/nayaa.png": "56d5516ea4576056f180e2fdef6fc4ef",
"assets/assets/images/fasting_rules/prayer-rug.png": "e65c74531ebdc827d43ff5b4122d717b",
"assets/assets/images/fasting_rules/ramadan.png": "53a89fab515b476744023382342860e7",
"assets/assets/images/fasting_rules/ramadan2.png": "74682c1c4d2d76178d13af3b4e8fa202",
"assets/assets/images/fasting_rules/ramadan_book.png": "6ebfe0424c336540a8118bc1f82916b7",
"assets/assets/images/fasting_rules/ramadan_calendar.png": "8f7c852c77079c16a9a16f552cecf89f",
"assets/assets/images/fasting_rules/ramadan_fast_mark1.png": "04f4e593896d83f661bdf7aa7eba0ccf",
"assets/assets/images/fasting_rules/ramadan_fast_mark2.png": "be4aa81f51e34c6df8f11008a886bd7c",
"assets/assets/images/fasting_rules/ramadan_fast_mark3.png": "a5cd6a42950c612c33c49f456922385d",
"assets/assets/images/fasting_rules/shalat.png": "3b636750a055183113da3e56343f79c5",
"assets/assets/images/fasting_rules/sohour.png": "61e74d76f88c64fa8391934df0a06e6a",
"assets/assets/images/fasting_rules/telescope.png": "7b05e3ba609464a9c00cefe7051a187f",
"assets/assets/images/flag.png": "a08fed542acbfe2fc97c0e8f2f51c6f9",
"assets/assets/images/hadith/ablution.png": "f9f6bd4366a8bd957de21367f5987ffa",
"assets/assets/images/hadith/bukhari.png": "064ac17c80200a98c171240e66708e1a",
"assets/assets/images/hadith/call-to-prayer.png": "6de16e798c40602c885b33564bb2cd57",
"assets/assets/images/hadith/carpat.png": "196817c54b9ba2f74ad7a34bd47d60d6",
"assets/assets/images/hadith/duha.png": "bf342af8a206a26aefe5fdbf18b4b5c0",
"assets/assets/images/hadith/fajr.png": "f81e1786de378e708fc422435b8759b5",
"assets/assets/images/hadith/fajr_asr.png": "7e2691e59df321bf1fb41afa5e8580b2",
"assets/assets/images/hadith/five-prayers.png": "35b08f4036f61e08a3d45f26e9f43595",
"assets/assets/images/hadith/hand.png": "573711add20bfc9c86920d9c1d28f7d9",
"assets/assets/images/hadith/hands-dua.png": "71d285cbd26ef2257255e78d3d8757c3",
"assets/assets/images/hadith/icon_prayer.png": "fcd890c67f1397ef2c51be66761360c5",
"assets/assets/images/hadith/isha_fajr.png": "4d5029cf4f0f0579905d7dbddf0ead6f",
"assets/assets/images/hadith/mosque-tower.png": "14b2ccfd77a96699eaea3035114cbee7",
"assets/assets/images/hadith/mosque.png": "1d5cfa16b9cc76c3b118a4bea0b37d10",
"assets/assets/images/hadith/mosque2.png": "d35019dded6abb0f00af2114268203e0",
"assets/assets/images/hadith/night-prayer.png": "b7527a9ff25737013ab533076a71b262",
"assets/assets/images/hadith/prayer-row.png": "3da83f6f0ab2580b73a2947a95fa7462",
"assets/assets/images/hadith/rostrum.png": "ad9f78f6010ba4ddab3ad87a27c0fabf",
"assets/assets/images/hadith/salat-together.png": "c60b74bca79f34cbf648f7c7dabcf7a6",
"assets/assets/images/hadith/sholat-wake-up.png": "e801a06644a9bb3e02c8282ce04c8838",
"assets/assets/images/hadith/sonnan.png": "455d9d38ddf7f1d38fb813e7bf60f1a2",
"assets/assets/images/hadith/sujud.png": "adea065b65b966be8dcbd902c0f20e87",
"assets/assets/images/hadith/walking-man.png": "5f1d300f5396e3cbbe35fd6835a4ffa1",
"assets/assets/images/hadith/witr.png": "e2560b75e14b864fcdc45ef5925cc739",
"assets/assets/images/hadith/woman_praying.png": "70fd9403152cf6b2c7e0c44f11b9c75b",
"assets/assets/images/hizb.png": "41a232b5edd708425a5fc0e1984c8025",
"assets/assets/images/home-dark.png": "1fc6929528d4d2fb4c87460d738b18f4",
"assets/assets/images/home-light.png": "4e8139266555d662694619c2e3f0af33",
"assets/assets/images/ibn-al-jawzi.png": "bad45bb99da93e57b455d7aa5a8ddde0",
"assets/assets/images/info.png": "617e981290739552a724e460ec69abeb",
"assets/assets/images/islamic-frame.png": "74682c1c4d2d76178d13af3b4e8fa202",
"assets/assets/images/launcher_icon.png": "52c56756715896d929863cb0c01ff6be",
"assets/assets/images/life.png": "7efbf66a77f888052ae3bf860b1e00cc",
"assets/assets/images/mobile.png": "07a9dce226e6e930853ab55ed1dce0c3",
"assets/assets/images/more.png": "e26093e718f30307346ef4da0283c171",
"assets/assets/images/notebook1.png": "0a787d673c22eee6a9dcdd614b95b783",
"assets/assets/images/notebook2.png": "3d41b66f41ae912dbff67472f7b5cfa6",
"assets/assets/images/open-book.png": "6f5330b70fcffc34275e52aecc6dc368",
"assets/assets/images/open-book2.png": "00b9ee3672f6d74c8e964e0b2ccda2ee",
"assets/assets/images/prophet_mohamed.png": "52c56756715896d929863cb0c01ff6be",
"assets/assets/images/question.png": "c8d4d372bb0b6534f2fe598ec49ffd28",
"assets/assets/images/quran.png": "54e56b39bc79df76a5395159cc70e969",
"assets/assets/images/ramadan-lantern-design.png": "75338928887944df23e6f7d740c8c3a1",
"assets/assets/images/rashiduns/abobakr.png": "4bb1bba13cf37c98da1f1e707300dd8d",
"assets/assets/images/rashiduns.png": "3746df8bcf3531cfb484b69308c8ebcd",
"assets/assets/images/red-shape.png": "4a87ef9187420428ebf4ea5e51ebdee2",
"assets/assets/images/settings-white.png": "ff64671d365c63597f4737bf0f7261ed",
"assets/assets/images/settings.png": "47ab9927edb3d0491fb2f2ba94cc6423",
"assets/assets/images/telfaznet.png": "c16bcbebc13086f200b7fd01b697ae4a",
"assets/FontManifest.json": "25645be6b60ced416257a97dda1b38a5",
"assets/fonts/MaterialIcons-Regular.otf": "33678800147024f9a8455d9efe4a73dc",
"assets/NOTICES": "91d22b33e8613335111ebb9930fb0a5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fb9cf14ed37ebdc128ad2943864d9631",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "50962679b1792642e95944855a626648",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "9660e8b9c35162f5c5605b27f117556e",
"icons/Icon-192.png": "244df704cbbd206bbb3090d1cbaae1fe",
"icons/Icon-512.png": "3123210297ec557de55d4bbf4654f6e1",
"icons/Icon-maskable-192.png": "244df704cbbd206bbb3090d1cbaae1fe",
"icons/Icon-maskable-512.png": "3123210297ec557de55d4bbf4654f6e1",
"index.html": "e8f7bd86b71f0c319c66ccfa508c7e76",
"/": "e8f7bd86b71f0c319c66ccfa508c7e76",
"main.dart.js": "8db5ccbe2106f5ba3352b706e84dd5e8",
"manifest.json": "e599b71775a3d3827a5f20d9aac42ed2",
"version.json": "26cea99c6e2de4b48e66403801b0b231"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
