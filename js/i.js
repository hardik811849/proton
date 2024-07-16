try {
  (function (w, d) {
    !(function (c, d, e, f) {
      if (c.zaraz) console.error("zaraz is loaded twice");
      else {
        c[e] = c[e] || {};
        c[e].executed = [];
        c.zaraz = { deferred: [], listeners: [] };
        c.zaraz._v = "5714";
        c.zaraz.q = [];
        c.zaraz._f = function (g) {
          return async function () {
            var h = Array.prototype.slice.call(arguments);
            c.zaraz.q.push({ m: g, a: h });
          };
        };
        for (const i of ["track", "set", "debug"]) c.zaraz[i] = c.zaraz._f(i);
        c.zaraz.init = () => {
          var j = d.getElementsByTagName(f)[0],
            k = d.createElement(f),
            l = d.getElementsByTagName("title")[0];
          c[e].c = d.cookie;
          l && (c[e].t = d.getElementsByTagName("title")[0].text);
          c[e].x = Math.random();
          c[e].w = c.screen.width;
          c[e].h = c.screen.height;
          c[e].j = c.innerHeight;
          c[e].e = c.innerWidth;
          c[e].l = c.location.href;
          c[e].r = d.referrer;
          c[e].k = c.screen.colorDepth;
          c[e].n = d.characterSet;
          c[e].o = new Date().getTimezoneOffset();
          if (c.dataLayer)
            for (const p of Object.entries(
              Object.entries(dataLayer).reduce(
                (q, r) => ({ ...q[1], ...r[1] }),
                {}
              )
            ))
              zaraz.set(p[0], p[1], { scope: "page" });
          c[e].q = [];
          for (; c.zaraz.q.length; ) {
            const s = c.zaraz.q.shift();
            c[e].q.push(s);
          }
          k.defer = !0;
          for (const t of [localStorage, sessionStorage])
            Object.keys(t || {})
              .filter((v) => v.startsWith("_zaraz_"))
              .forEach((u) => {
                try {
                  c[e]["z_" + u.slice(7)] = JSON.parse(t.getItem(u));
                } catch {
                  c[e]["z_" + u.slice(7)] = t.getItem(u);
                }
              });
          k.referrerPolicy = "origin";
          k.src =
            "https://app.BinaryX.com/hoho/s.js?z=" +
            btoa(encodeURIComponent(JSON.stringify(c[e])));
          j.parentNode.insertBefore(k, j);
        };
        ["complete", "interactive"].includes(d.readyState)
          ? zaraz.init()
          : c.addEventListener("DOMContentLoaded", zaraz.init);
      }
    })(w, d, "zarazData", "script");
    window.zaraz._p = async (bk) =>
      new Promise((bl) => {
        if (bk) {
          bk.e &&
            bk.e.forEach((bm) => {
              try {
                new Function(bm)();
              } catch (bn) {
                console.error(`Error executing script: ${bm}\n`, bn);
              }
            });
          Promise.allSettled((bk.f || []).map((bo) => fetch(bo[0], bo[1])));
        }
        bl();
      });
    zaraz._p({ e: ["(function(w,d){})(window, document)"] });
  })(window, document);
} catch (e) {
  throw (fetch("https://app.BinaryX.com/hoho/t"), e);
}
