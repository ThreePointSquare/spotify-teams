"use strict";var precacheConfig=[["/index.html","66cf30760263138b7f3e310dc45afeef"],["/static/css/main.29266132.css","291b7c703eff1eb45671bed973045228"],["/static/js/main.d1e5cb66.js","d14a839c4d33a4289a02729f80beaf07"],["/static/media/TeamsAssets-Light.03c2e862.eot","03c2e8629c48ab3a4791f8354a902dd0"],["/static/media/TeamsAssets-Light.4521ef7e.woff","4521ef7e401ab922adbe6019d2c1b015"],["/static/media/TeamsAssets-Light.5c50f55f.ttf","5c50f55fa067736aabd6a0248fa193f2"],["/static/media/TeamsAssets-Light.9c0b4d34.svg","9c0b4d34e890dee987096be52b499ce5"],["/static/media/TeamsAssets-Light.d7d7eb79.woff2","d7d7eb79c2b2c8d705bd24e50090817b"],["/static/media/TeamsAssets-Regular.2de16aab.woff2","2de16aabf919bce6480fe5be06fd5928"],["/static/media/TeamsAssets-Regular.2ed5eaea.woff","2ed5eaeaa85b5ae4fcb6fa9451934437"],["/static/media/TeamsAssets-Regular.76f7e592.ttf","76f7e5927a28f5177c391e872afca92d"],["/static/media/TeamsAssets-Regular.c5a2112b.eot","c5a2112b4020146201ccb443a2adfacc"],["/static/media/TeamsAssets-Regular.de8a9eb1.svg","de8a9eb155049912556a1e3d9000709a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var s="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});