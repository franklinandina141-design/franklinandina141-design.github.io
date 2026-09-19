if (!self.define) {
  let e,
    i = {};
  const n = (n, r) =>
    (n = new URL(n + ".js", r).href,
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      }));
  self.define = (r, s) => {
    const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (i[c]) return;
    let l = {},
      d = (e) => n(e, c);
    i[c] = Promise.all(r.map((e) => l[e] || d(e))).then((e) => (s(...e), l));
  };
}

define(["./workbox-9c191d2f"], function (e) {
  "use strict";
  self.skipWaiting();
  e.clientsClaim();
  e.precacheAndRoute(
    [
      { url: "index.html", revision: "sync-merge-v7-20260919" },
      { url: "assets/index-1ede68b63587b0e5.js", revision: "1ede68b63587b0e5" },
      { url: "assets/index-BDXVDP49.css", revision: null },
      { url: "assets/workbox-window.prod.es5-Bd17z0YL.js", revision: null },
      { url: "paper-texture.png", revision: "031d59948b05ded1b4ade8c980e02ddb" },
      { url: "icons.svg", revision: "3b4fcfcf393eca4d264dca4a4663bc37" },
      { url: "favicon.svg", revision: "7e840862101341271697daa99a40d76b" },
      { url: "favicon.png", revision: "24142b685d46e7aef1891d4001b9e4da" },
      { url: "manifest.webmanifest", revision: "fixed-family-20260919" },
      { url: "icons/icon-192.png", revision: "1213dcbd0936756e38f4f79a290201ba" },
      { url: "icons/icon-512.png", revision: "52cf45410c581f147ef57105e94954bc" },
      { url: "icons/apple-touch-icon.png", revision: "aabf9c20637921e88aa1771ecdeb5c0b" },
      { url: "illust/star.png", revision: "4530d80ff6cdcbc4c450b44d9fa1b498" },
      { url: "illust/speak.png", revision: "f21a66e37eeb917c9cbf4b3f1208ccea" },
      { url: "illust/sleep.png", revision: "50d4f482101b9cab1daf5018c4446702" },
      { url: "illust/run-dog.png", revision: "88df769c717593099831a4e1bdd02f60" },
      { url: "illust/rainbow.png", revision: "c6f6c47f59e9f8e2b4a21a025335d9ab" },
      { url: "illust/rain.png", revision: "329c203a1e82cacffa9b5e09c779183f" },
      { url: "illust/kind.png", revision: "2320cdfee8ac289d4c3f8e5022eb8884" },
      { url: "illust/hero.png", revision: "6a2ddfd6d6adde719cbff09e667ef084" },
      { url: "illust/girl-run.png", revision: "f5d655d4852fbec8833609c0b796771d" },
      { url: "illust/finish.png", revision: "a31b26815b69a7f9e51e3b37e64bbe4f" },
      { url: "illust/dog-run.png", revision: "b3e97d26f13c3703145396e2f4fc32eb" },
      { url: "illust/clock.png", revision: "e77b7c868f50edf6957d13e1487223ba" },
      { url: "illust/broom.png", revision: "fbbfb4f8b4d1d9727965600d96310dde" },
      { url: "illust/books.png", revision: "cbefd035814b6a16538b0ee48b9c0407" },
      { url: "illust/bear.png", revision: "ae6a340faebc580dfc3de966a6f620ec" },
      { url: "illust/bath.png", revision: "d6e0ec2132304d4b94a9351971d1a8a1" },
    ],
    {},
  );
  e.cleanupOutdatedCaches();
  e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")));
});
