(() => {
  var e = {
      561: (e, t, n) => {
        "use strict";
        function r(e = !0) {
          const t = window.getSelection();
          if (t.rangeCount > 0) {
            const n = document.createElement("span");
            n.textContent = "|";
            const r = t.getRangeAt(0).cloneRange();
            r.collapse(e), r.insertNode(n);
            const { x: o, y: s, height: i } = n.getBoundingClientRect(),
              a = window.scrollY + s + i + "px",
              c = window.scrollX + o + "px";
            return n.parentNode.removeChild(n), { top: a, left: c };
          }
        }
        function o() {
          const e = window.getSelection();
          return 0 === e.rangeCount ? "" : e.getRangeAt(0).toString();
        }
        function s(e) {
          const t = window.getSelection();
          if (0 === t.rangeCount) return "";
          const n = t.getRangeAt(0),
            r = document.createRange();
          return (
            r.selectNodeContents(e),
            r.setEnd(n.startContainer, n.startOffset),
            r.toString()
          );
        }
        function i(e) {
          const t = window.getSelection();
          if (0 === t.rangeCount) return "";
          const n = t.getRangeAt(0),
            r = document.createRange();
          return (
            r.selectNodeContents(e),
            r.setStart(n.endContainer, n.endOffset),
            r.toString()
          );
        }
        n.r(t),
          n.d(t, {
            cursorPosition: () => r,
            selectedText: () => o,
            textBeforeCursor: () => s,
            textAfterCursor: () => i,
          });
      },
      227: (e, t, n) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let r = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (r++, "%c" === e && (o = r));
          }),
            t.splice(o, 0, n);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(447)(t));
        const { formatters: r } = e.exports;
        r.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      447: (e, t, n) => {
        e.exports = function (e) {
          function t(e) {
            let n,
              o = null;
            function s(...e) {
              if (!s.enabled) return;
              const r = s,
                o = Number(new Date()),
                i = o - (n || o);
              (r.diff = i),
                (r.prev = n),
                (r.curr = o),
                (n = o),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let a = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
                if ("%%" === n) return "%";
                a++;
                const s = t.formatters[o];
                if ("function" == typeof s) {
                  const t = e[a];
                  (n = s.call(r, t)), e.splice(a, 1), a--;
                }
                return n;
              })),
                t.formatArgs.call(r, e),
                (r.log || t.log).apply(r, e);
            }
            return (
              (s.namespace = e),
              (s.useColors = t.useColors()),
              (s.color = t.selectColor(e)),
              (s.extend = r),
              (s.destroy = t.destroy),
              Object.defineProperty(s, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => (null === o ? t.enabled(e) : o),
                set: (e) => {
                  o = e;
                },
              }),
              "function" == typeof t.init && t.init(s),
              s
            );
          }
          function r(e, n) {
            const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return (r.log = this.log), r;
          }
          function o(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(o),
                ...t.skips.map(o).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let n;
              t.save(e), (t.names = []), (t.skips = []);
              const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                o = r.length;
              for (n = 0; n < o; n++)
                r[n] &&
                  ("-" === (e = r[n].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let n, r;
              for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
              return !1;
            }),
            (t.humanize = n(824)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(e).forEach((n) => {
              t[n] = e[n];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let n = 0;
              for (let t = 0; t < e.length; t++)
                (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return t.colors[Math.abs(n) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      898: (e, t, n) => {
        "use strict";
        const r = n(121).Z;
        e.exports = (e) => Boolean(e && e[r] && e === e[r]());
      },
      961: (e, t, n) => {
        var r,
          o = (function () {
            var e = String.fromCharCode,
              t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
              r = {};
            function o(e, t) {
              if (!r[e]) {
                r[e] = {};
                for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
              }
              return r[e][t];
            }
            var s = {
              compressToBase64: function (e) {
                if (null == e) return "";
                var n = s._compress(e, 6, function (e) {
                  return t.charAt(e);
                });
                switch (n.length % 4) {
                  default:
                  case 0:
                    return n;
                  case 1:
                    return n + "===";
                  case 2:
                    return n + "==";
                  case 3:
                    return n + "=";
                }
              },
              decompressFromBase64: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : s._decompress(e.length, 32, function (n) {
                      return o(t, e.charAt(n));
                    });
              },
              compressToUTF16: function (t) {
                return null == t
                  ? ""
                  : s._compress(t, 15, function (t) {
                      return e(t + 32);
                    }) + " ";
              },
              decompressFromUTF16: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : s._decompress(e.length, 16384, function (t) {
                      return e.charCodeAt(t) - 32;
                    });
              },
              compressToUint8Array: function (e) {
                for (
                  var t = s.compress(e),
                    n = new Uint8Array(2 * t.length),
                    r = 0,
                    o = t.length;
                  r < o;
                  r++
                ) {
                  var i = t.charCodeAt(r);
                  (n[2 * r] = i >>> 8), (n[2 * r + 1] = i % 256);
                }
                return n;
              },
              decompressFromUint8Array: function (t) {
                if (null == t) return s.decompress(t);
                for (
                  var n = new Array(t.length / 2), r = 0, o = n.length;
                  r < o;
                  r++
                )
                  n[r] = 256 * t[2 * r] + t[2 * r + 1];
                var i = [];
                return (
                  n.forEach(function (t) {
                    i.push(e(t));
                  }),
                  s.decompress(i.join(""))
                );
              },
              compressToEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : s._compress(e, 6, function (e) {
                      return n.charAt(e);
                    });
              },
              decompressFromEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : ((e = e.replace(/ /g, "+")),
                    s._decompress(e.length, 32, function (t) {
                      return o(n, e.charAt(t));
                    }));
              },
              compress: function (t) {
                return s._compress(t, 16, function (t) {
                  return e(t);
                });
              },
              _compress: function (e, t, n) {
                if (null == e) return "";
                var r,
                  o,
                  s,
                  i = {},
                  a = {},
                  c = "",
                  u = "",
                  l = "",
                  d = 2,
                  f = 3,
                  h = 2,
                  p = [],
                  g = 0,
                  m = 0;
                for (s = 0; s < e.length; s += 1)
                  if (
                    ((c = e.charAt(s)),
                    Object.prototype.hasOwnProperty.call(i, c) ||
                      ((i[c] = f++), (a[c] = !0)),
                    (u = l + c),
                    Object.prototype.hasOwnProperty.call(i, u))
                  )
                    l = u;
                  else {
                    if (Object.prototype.hasOwnProperty.call(a, l)) {
                      if (l.charCodeAt(0) < 256) {
                        for (r = 0; r < h; r++)
                          (g <<= 1),
                            m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++;
                        for (o = l.charCodeAt(0), r = 0; r < 8; r++)
                          (g = (g << 1) | (1 & o)),
                            m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                            (o >>= 1);
                      } else {
                        for (o = 1, r = 0; r < h; r++)
                          (g = (g << 1) | o),
                            m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                            (o = 0);
                        for (o = l.charCodeAt(0), r = 0; r < 16; r++)
                          (g = (g << 1) | (1 & o)),
                            m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                            (o >>= 1);
                      }
                      0 == --d && ((d = Math.pow(2, h)), h++), delete a[l];
                    } else
                      for (o = i[l], r = 0; r < h; r++)
                        (g = (g << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                          (o >>= 1);
                    0 == --d && ((d = Math.pow(2, h)), h++),
                      (i[u] = f++),
                      (l = String(c));
                  }
                if ("" !== l) {
                  if (Object.prototype.hasOwnProperty.call(a, l)) {
                    if (l.charCodeAt(0) < 256) {
                      for (r = 0; r < h; r++)
                        (g <<= 1),
                          m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++;
                      for (o = l.charCodeAt(0), r = 0; r < 8; r++)
                        (g = (g << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                          (o >>= 1);
                    } else {
                      for (o = 1, r = 0; r < h; r++)
                        (g = (g << 1) | o),
                          m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                          (o = 0);
                      for (o = l.charCodeAt(0), r = 0; r < 16; r++)
                        (g = (g << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                          (o >>= 1);
                    }
                    0 == --d && ((d = Math.pow(2, h)), h++), delete a[l];
                  } else
                    for (o = i[l], r = 0; r < h; r++)
                      (g = (g << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                        (o >>= 1);
                  0 == --d && ((d = Math.pow(2, h)), h++);
                }
                for (o = 2, r = 0; r < h; r++)
                  (g = (g << 1) | (1 & o)),
                    m == t - 1 ? ((m = 0), p.push(n(g)), (g = 0)) : m++,
                    (o >>= 1);
                for (;;) {
                  if (((g <<= 1), m == t - 1)) {
                    p.push(n(g));
                    break;
                  }
                  m++;
                }
                return p.join("");
              },
              decompress: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : s._decompress(e.length, 32768, function (t) {
                      return e.charCodeAt(t);
                    });
              },
              _decompress: function (t, n, r) {
                var o,
                  s,
                  i,
                  a,
                  c,
                  u,
                  l,
                  d = [],
                  f = 4,
                  h = 4,
                  p = 3,
                  g = "",
                  m = [],
                  y = { val: r(0), position: n, index: 1 };
                for (o = 0; o < 3; o += 1) d[o] = o;
                for (i = 0, c = Math.pow(2, 2), u = 1; u != c; )
                  (a = y.val & y.position),
                    (y.position >>= 1),
                    0 == y.position &&
                      ((y.position = n), (y.val = r(y.index++))),
                    (i |= (a > 0 ? 1 : 0) * u),
                    (u <<= 1);
                switch (i) {
                  case 0:
                    for (i = 0, c = Math.pow(2, 8), u = 1; u != c; )
                      (a = y.val & y.position),
                        (y.position >>= 1),
                        0 == y.position &&
                          ((y.position = n), (y.val = r(y.index++))),
                        (i |= (a > 0 ? 1 : 0) * u),
                        (u <<= 1);
                    l = e(i);
                    break;
                  case 1:
                    for (i = 0, c = Math.pow(2, 16), u = 1; u != c; )
                      (a = y.val & y.position),
                        (y.position >>= 1),
                        0 == y.position &&
                          ((y.position = n), (y.val = r(y.index++))),
                        (i |= (a > 0 ? 1 : 0) * u),
                        (u <<= 1);
                    l = e(i);
                    break;
                  case 2:
                    return "";
                }
                for (d[3] = l, s = l, m.push(l); ; ) {
                  if (y.index > t) return "";
                  for (i = 0, c = Math.pow(2, p), u = 1; u != c; )
                    (a = y.val & y.position),
                      (y.position >>= 1),
                      0 == y.position &&
                        ((y.position = n), (y.val = r(y.index++))),
                      (i |= (a > 0 ? 1 : 0) * u),
                      (u <<= 1);
                  switch ((l = i)) {
                    case 0:
                      for (i = 0, c = Math.pow(2, 8), u = 1; u != c; )
                        (a = y.val & y.position),
                          (y.position >>= 1),
                          0 == y.position &&
                            ((y.position = n), (y.val = r(y.index++))),
                          (i |= (a > 0 ? 1 : 0) * u),
                          (u <<= 1);
                      (d[h++] = e(i)), (l = h - 1), f--;
                      break;
                    case 1:
                      for (i = 0, c = Math.pow(2, 16), u = 1; u != c; )
                        (a = y.val & y.position),
                          (y.position >>= 1),
                          0 == y.position &&
                            ((y.position = n), (y.val = r(y.index++))),
                          (i |= (a > 0 ? 1 : 0) * u),
                          (u <<= 1);
                      (d[h++] = e(i)), (l = h - 1), f--;
                      break;
                    case 2:
                      return m.join("");
                  }
                  if ((0 == f && ((f = Math.pow(2, p)), p++), d[l])) g = d[l];
                  else {
                    if (l !== h) return null;
                    g = s + s.charAt(0);
                  }
                  m.push(g),
                    (d[h++] = s + g.charAt(0)),
                    (s = g),
                    0 == --f && ((f = Math.pow(2, p)), p++);
                }
              },
            };
            return s;
          })();
        void 0 ===
          (r = function () {
            return o;
          }.call(t, n, t, e)) || (e.exports = r);
      },
      677: () => {},
      824: (e) => {
        var t = 1e3,
          n = 60 * t,
          r = 60 * n,
          o = 24 * r;
        function s(e, t, n, r) {
          var o = t >= 1.5 * n;
          return Math.round(e / n) + " " + r + (o ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e
                );
                if (s) {
                  var i = parseFloat(s[1]);
                  switch ((s[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= o
                  ? s(a, c, o, "day")
                  : c >= r
                  ? s(a, c, r, "hour")
                  : c >= n
                  ? s(a, c, n, "minute")
                  : c >= t
                  ? s(a, c, t, "second")
                  : a + " ms")
              : (function (e) {
                  var s = Math.abs(e);
                  return s >= o
                    ? Math.round(e / o) + "d"
                    : s >= r
                    ? Math.round(e / r) + "h"
                    : s >= n
                    ? Math.round(e / n) + "m"
                    : s >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
      49: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Observable: () => C,
            Subject: () => R,
            filter: () => k,
            flatMap: () => x,
            interval: () => S,
            map: () => E,
            merge: () => P,
            multicast: () => M,
            scan: () => _,
            unsubscribe: () => T,
          });
        class r {
          constructor(e) {
            (this._baseObserver = e), (this._pendingPromises = new Set());
          }
          complete() {
            Promise.all(this._pendingPromises)
              .then(() => this._baseObserver.complete())
              .catch((e) => this._baseObserver.error(e));
          }
          error(e) {
            this._baseObserver.error(e);
          }
          schedule(e) {
            const t = Promise.all(this._pendingPromises),
              n = [],
              r = (e) => n.push(e),
              o = Promise.resolve()
                .then(() => {
                  return (
                    (s = this),
                    (i = void 0),
                    (c = function* () {
                      yield t, yield e(r), this._pendingPromises.delete(o);
                      for (const e of n) this._baseObserver.next(e);
                    }),
                    new ((a = void 0) || (a = Promise))(function (e, t) {
                      function n(e) {
                        try {
                          o(c.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function r(e) {
                        try {
                          o(c.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function o(t) {
                        t.done
                          ? e(t.value)
                          : new a(function (e) {
                              e(t.value);
                            }).then(n, r);
                      }
                      o((c = c.apply(s, i || [])).next());
                    })
                  );
                  var s, i, a, c;
                })
                .catch((e) => {
                  this._pendingPromises.delete(o), this._baseObserver.error(e);
                });
            this._pendingPromises.add(o);
          }
        }
        const o = () => "function" == typeof Symbol,
          s = (e) => o() && Boolean(Symbol[e]),
          i = (e) => (s(e) ? Symbol[e] : "@@" + e);
        s("asyncIterator") ||
          (Symbol.asyncIterator =
            Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator"));
        const a = i("iterator"),
          c = i("observable"),
          u = i("species");
        function l(e, t) {
          const n = e[t];
          if (null != n) {
            if ("function" != typeof n)
              throw new TypeError(n + " is not a function");
            return n;
          }
        }
        function d(e) {
          let t = e.constructor;
          return (
            void 0 !== t && ((t = t[u]), null === t && (t = void 0)),
            void 0 !== t ? t : w
          );
        }
        function f(e) {
          f.log
            ? f.log(e)
            : setTimeout(() => {
                throw e;
              }, 0);
        }
        function h(e) {
          Promise.resolve().then(() => {
            try {
              e();
            } catch (e) {
              f(e);
            }
          });
        }
        function p(e) {
          const t = e._cleanup;
          if (void 0 !== t && ((e._cleanup = void 0), t))
            try {
              if ("function" == typeof t) t();
              else {
                const e = l(t, "unsubscribe");
                e && e.call(t);
              }
            } catch (e) {
              f(e);
            }
        }
        function g(e) {
          (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
        }
        function m(e, t, n) {
          e._state = "running";
          const r = e._observer;
          try {
            const o = r ? l(r, t) : void 0;
            switch (t) {
              case "next":
                o && o.call(r, n);
                break;
              case "error":
                if ((g(e), !o)) throw n;
                o.call(r, n);
                break;
              case "complete":
                g(e), o && o.call(r);
            }
          } catch (e) {
            f(e);
          }
          "closed" === e._state
            ? p(e)
            : "running" === e._state && (e._state = "ready");
        }
        function y(e, t, n) {
          if ("closed" !== e._state)
            return "buffering" === e._state
              ? ((e._queue = e._queue || []),
                void e._queue.push({ type: t, value: n }))
              : "ready" !== e._state
              ? ((e._state = "buffering"),
                (e._queue = [{ type: t, value: n }]),
                void h(() =>
                  (function (e) {
                    const t = e._queue;
                    if (t) {
                      (e._queue = void 0), (e._state = "ready");
                      for (const n of t)
                        if ((m(e, n.type, n.value), "closed" === e._state))
                          break;
                    }
                  })(e)
                ))
              : void m(e, t, n);
        }
        class v {
          constructor(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            const n = new b(this);
            try {
              this._cleanup = t.call(void 0, n);
            } catch (e) {
              n.error(e);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          get closed() {
            return "closed" === this._state;
          }
          unsubscribe() {
            "closed" !== this._state && (g(this), p(this));
          }
        }
        class b {
          constructor(e) {
            this._subscription = e;
          }
          get closed() {
            return "closed" === this._subscription._state;
          }
          next(e) {
            y(this._subscription, "next", e);
          }
          error(e) {
            y(this._subscription, "error", e);
          }
          complete() {
            y(this._subscription, "complete");
          }
        }
        class w {
          constructor(e) {
            if (!(this instanceof w))
              throw new TypeError("Observable cannot be called as a function");
            if ("function" != typeof e)
              throw new TypeError("Observable initializer must be a function");
            this._subscriber = e;
          }
          subscribe(e, t, n) {
            return (
              ("object" == typeof e && null !== e) ||
                (e = { next: e, error: t, complete: n }),
              new v(e, this._subscriber)
            );
          }
          pipe(e, ...t) {
            let n = this;
            for (const r of [e, ...t]) n = r(n);
            return n;
          }
          tap(e, t, n) {
            const r =
              "object" != typeof e || null === e
                ? { next: e, error: t, complete: n }
                : e;
            return new w((e) =>
              this.subscribe({
                next(t) {
                  r.next && r.next(t), e.next(t);
                },
                error(t) {
                  r.error && r.error(t), e.error(t);
                },
                complete() {
                  r.complete && r.complete(), e.complete();
                },
                start(e) {
                  r.start && r.start(e);
                },
              })
            );
          }
          forEach(e) {
            return new Promise((t, n) => {
              if ("function" != typeof e)
                return void n(new TypeError(e + " is not a function"));
              function r() {
                o.unsubscribe(), t();
              }
              const o = this.subscribe({
                next(t) {
                  try {
                    e(t, r);
                  } catch (e) {
                    n(e), o.unsubscribe();
                  }
                },
                error: n,
                complete: t,
              });
            });
          }
          map(e) {
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            return new (d(this))((t) =>
              this.subscribe({
                next(n) {
                  let r = n;
                  try {
                    r = e(n);
                  } catch (e) {
                    return t.error(e);
                  }
                  t.next(r);
                },
                error(e) {
                  t.error(e);
                },
                complete() {
                  t.complete();
                },
              })
            );
          }
          filter(e) {
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            return new (d(this))((t) =>
              this.subscribe({
                next(n) {
                  try {
                    if (!e(n)) return;
                  } catch (e) {
                    return t.error(e);
                  }
                  t.next(n);
                },
                error(e) {
                  t.error(e);
                },
                complete() {
                  t.complete();
                },
              })
            );
          }
          reduce(e, t) {
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            const n = d(this),
              r = arguments.length > 1;
            let o = !1,
              s = t;
            return new n((t) =>
              this.subscribe({
                next(n) {
                  const i = !o;
                  if (((o = !0), !i || r))
                    try {
                      s = e(s, n);
                    } catch (e) {
                      return t.error(e);
                    }
                  else s = n;
                },
                error(e) {
                  t.error(e);
                },
                complete() {
                  if (!o && !r)
                    return t.error(
                      new TypeError("Cannot reduce an empty sequence")
                    );
                  t.next(s), t.complete();
                },
              })
            );
          }
          concat(...e) {
            const t = d(this);
            return new t((n) => {
              let r,
                o = 0;
              return (
                (function s(i) {
                  r = i.subscribe({
                    next(e) {
                      n.next(e);
                    },
                    error(e) {
                      n.error(e);
                    },
                    complete() {
                      o === e.length
                        ? ((r = void 0), n.complete())
                        : s(t.from(e[o++]));
                    },
                  });
                })(this),
                () => {
                  r && (r.unsubscribe(), (r = void 0));
                }
              );
            });
          }
          flatMap(e) {
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            const t = d(this);
            return new t((n) => {
              const r = [],
                o = this.subscribe({
                  next(o) {
                    let i;
                    if (e)
                      try {
                        i = e(o);
                      } catch (e) {
                        return n.error(e);
                      }
                    else i = o;
                    const a = t.from(i).subscribe({
                      next(e) {
                        n.next(e);
                      },
                      error(e) {
                        n.error(e);
                      },
                      complete() {
                        const e = r.indexOf(a);
                        e >= 0 && r.splice(e, 1), s();
                      },
                    });
                    r.push(a);
                  },
                  error(e) {
                    n.error(e);
                  },
                  complete() {
                    s();
                  },
                });
              function s() {
                o.closed && 0 === r.length && n.complete();
              }
              return () => {
                r.forEach((e) => e.unsubscribe()), o.unsubscribe();
              };
            });
          }
          [c]() {
            return this;
          }
          static from(e) {
            const t = "function" == typeof this ? this : w;
            if (null == e) throw new TypeError(e + " is not an object");
            const n = l(e, c);
            if (n) {
              const r = n.call(e);
              if (Object(r) !== r) throw new TypeError(r + " is not an object");
              return (function (e) {
                return e instanceof w;
              })(r) && r.constructor === t
                ? r
                : new t((e) => r.subscribe(e));
            }
            if (s("iterator")) {
              const n = l(e, a);
              if (n)
                return new t((t) => {
                  h(() => {
                    if (!t.closed) {
                      for (const r of n.call(e))
                        if ((t.next(r), t.closed)) return;
                      t.complete();
                    }
                  });
                });
            }
            if (Array.isArray(e))
              return new t((t) => {
                h(() => {
                  if (!t.closed) {
                    for (const n of e) if ((t.next(n), t.closed)) return;
                    t.complete();
                  }
                });
              });
            throw new TypeError(e + " is not observable");
          }
          static of(...e) {
            return new ("function" == typeof this ? this : w)((t) => {
              h(() => {
                if (!t.closed) {
                  for (const n of e) if ((t.next(n), t.closed)) return;
                  t.complete();
                }
              });
            });
          }
          static get [u]() {
            return this;
          }
        }
        o() &&
          Object.defineProperty(w, Symbol("extensions"), {
            value: { symbol: c, hostReportError: f },
            configurable: !0,
          });
        const C = w,
          T = function (e) {
            "function" == typeof e
              ? e()
              : e && "function" == typeof e.unsubscribe && e.unsubscribe();
          };
        const k = function (e) {
          return (t) =>
            new C((n) => {
              const o = new r(n),
                s = t.subscribe({
                  complete() {
                    o.complete();
                  },
                  error(e) {
                    o.error(e);
                  },
                  next(t) {
                    o.schedule((n) => {
                      return (
                        (r = this),
                        (o = void 0),
                        (i = function* () {
                          (yield e(t)) && n(t);
                        }),
                        new ((s = void 0) || (s = Promise))(function (e, t) {
                          function n(e) {
                            try {
                              c(i.next(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function a(e) {
                            try {
                              c(i.throw(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function c(t) {
                            t.done
                              ? e(t.value)
                              : new s(function (e) {
                                  e(t.value);
                                }).then(n, a);
                          }
                          c((i = i.apply(r, o || [])).next());
                        })
                      );
                      var r, o, s, i;
                    });
                  },
                });
              return () => T(s);
            });
        };
        const x = function (e) {
          return (t) =>
            new C((n) => {
              const o = new r(n),
                i = t.subscribe({
                  complete() {
                    o.complete();
                  },
                  error(e) {
                    o.error(e);
                  },
                  next(t) {
                    o.schedule((n) => {
                      return (
                        (r = this),
                        (o = void 0),
                        (a = function* () {
                          var r, o;
                          const i = yield e(t);
                          if (
                            ((u = i) && s("iterator") && u[Symbol.iterator]) ||
                            (function (e) {
                              return (
                                e &&
                                s("asyncIterator") &&
                                e[Symbol.asyncIterator]
                              );
                            })(i)
                          )
                            try {
                              for (
                                var a,
                                  c = (function (e) {
                                    if (!Symbol.asyncIterator)
                                      throw new TypeError(
                                        "Symbol.asyncIterator is not defined."
                                      );
                                    var t,
                                      n = e[Symbol.asyncIterator];
                                    return n
                                      ? n.call(e)
                                      : ((e =
                                          "function" == typeof __values
                                            ? __values(e)
                                            : e[Symbol.iterator]()),
                                        (t = {}),
                                        r("next"),
                                        r("throw"),
                                        r("return"),
                                        (t[Symbol.asyncIterator] = function () {
                                          return this;
                                        }),
                                        t);
                                    function r(n) {
                                      t[n] =
                                        e[n] &&
                                        function (t) {
                                          return new Promise(function (r, o) {
                                            !(function (e, t, n, r) {
                                              Promise.resolve(r).then(function (
                                                t
                                              ) {
                                                e({ value: t, done: n });
                                              },
                                              t);
                                            })(
                                              r,
                                              o,
                                              (t = e[n](t)).done,
                                              t.value
                                            );
                                          });
                                        };
                                    }
                                  })(i);
                                !(a = yield c.next()).done;

                              ) {
                                const e = a.value;
                                n(e);
                              }
                            } catch (e) {
                              r = { error: e };
                            } finally {
                              try {
                                a &&
                                  !a.done &&
                                  (o = c.return) &&
                                  (yield o.call(c));
                              } finally {
                                if (r) throw r.error;
                              }
                            }
                          else i.map((e) => n(e));
                          var u;
                        }),
                        new ((i = void 0) || (i = Promise))(function (e, t) {
                          function n(e) {
                            try {
                              c(a.next(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function s(e) {
                            try {
                              c(a.throw(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function c(t) {
                            t.done
                              ? e(t.value)
                              : new i(function (e) {
                                  e(t.value);
                                }).then(n, s);
                          }
                          c((a = a.apply(r, o || [])).next());
                        })
                      );
                      var r, o, i, a;
                    });
                  },
                });
              return () => T(i);
            });
        };
        function S(e) {
          return new w((t) => {
            let n = 0;
            const r = setInterval(() => {
              t.next(n++);
            }, e);
            return () => clearInterval(r);
          });
        }
        const E = function (e) {
            return (t) =>
              new C((n) => {
                const o = new r(n),
                  s = t.subscribe({
                    complete() {
                      o.complete();
                    },
                    error(e) {
                      o.error(e);
                    },
                    next(t) {
                      o.schedule((n) => {
                        return (
                          (r = this),
                          (o = void 0),
                          (i = function* () {
                            const r = yield e(t);
                            n(r);
                          }),
                          new ((s = void 0) || (s = Promise))(function (e, t) {
                            function n(e) {
                              try {
                                c(i.next(e));
                              } catch (e) {
                                t(e);
                              }
                            }
                            function a(e) {
                              try {
                                c(i.throw(e));
                              } catch (e) {
                                t(e);
                              }
                            }
                            function c(t) {
                              t.done
                                ? e(t.value)
                                : new s(function (e) {
                                    e(t.value);
                                  }).then(n, a);
                            }
                            c((i = i.apply(r, o || [])).next());
                          })
                        );
                        var r, o, s, i;
                      });
                    },
                  });
                return () => T(s);
              });
          },
          P = function (...e) {
            return 0 === e.length
              ? w.from([])
              : new w((t) => {
                  let n = 0;
                  const r = e.map((r) =>
                      r.subscribe({
                        error(e) {
                          t.error(e), o();
                        },
                        next(e) {
                          t.next(e);
                        },
                        complete() {
                          ++n === e.length && (t.complete(), o());
                        },
                      })
                    ),
                    o = () => {
                      r.forEach((e) => T(e));
                    };
                  return o;
                });
          },
          R = class extends C {
            constructor() {
              super(
                (e) => (this._observers.add(e), () => this._observers.delete(e))
              ),
                (this._observers = new Set());
            }
            next(e) {
              for (const t of this._observers) t.next(e);
            }
            error(e) {
              for (const t of this._observers) t.error(e);
            }
            complete() {
              for (const e of this._observers) e.complete();
            }
          },
          M = function (e) {
            const t = new R();
            let n,
              r = 0;
            return new C((o) => {
              n || (n = e.subscribe(t));
              const s = t.subscribe(o);
              return (
                r++,
                () => {
                  r--, s.unsubscribe(), 0 === r && (T(n), (n = void 0));
                }
              );
            });
          };
        const _ = function (e, t) {
          return (n) =>
            new C((o) => {
              let s,
                i = 0;
              const a = new r(o),
                c = n.subscribe({
                  complete() {
                    a.complete();
                  },
                  error(e) {
                    a.error(e);
                  },
                  next(n) {
                    a.schedule((r) => {
                      return (
                        (o = this),
                        (a = void 0),
                        (u = function* () {
                          const o = 0 === i ? (void 0 === t ? n : t) : s;
                          (s = yield e(o, n, i++)), r(s);
                        }),
                        new ((c = void 0) || (c = Promise))(function (e, t) {
                          function n(e) {
                            try {
                              s(u.next(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function r(e) {
                            try {
                              s(u.throw(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function s(t) {
                            t.done
                              ? e(t.value)
                              : new c(function (e) {
                                  e(t.value);
                                }).then(n, r);
                          }
                          s((u = u.apply(o, a || [])).next());
                        })
                      );
                      var o, a, c, u;
                    });
                  },
                });
              return () => T(c);
            });
        };
      },
      36: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a });
        var r = n(379),
          o = n.n(r),
          s = n(677),
          i = n.n(s);
        o()(i(), { insert: "head", singleton: !1 });
        const a = i().locals || {};
      },
      379: (e, t, n) => {
        "use strict";
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          s = [];
        function i(e) {
          for (var t = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function a(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var a = e[o],
              c = t.base ? a[0] + t.base : a[0],
              u = n[c] || 0,
              l = "".concat(c, " ").concat(u);
            n[c] = u + 1;
            var d = i(l),
              f = { css: a[1], media: a[2], sourceMap: a[3] };
            -1 !== d
              ? (s[d].references++, s[d].updater(f))
              : s.push({ identifier: l, updater: g(f, t), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function c(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var s = n.nc;
            s && (r.nonce = s);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(t);
          }
          return t;
        }
        var u,
          l =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join("\n");
            });
        function d(e, t, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = l(t, o);
          else {
            var s = document.createTextNode(o),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
          }
        }
        function f(e, t, n) {
          var r = n.css,
            o = n.media,
            s = n.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            s &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var h = null,
          p = 0;
        function g(e, t) {
          var n, r, o;
          if (t.singleton) {
            var s = p++;
            (n = h || (h = c(t))),
              (r = d.bind(null, n, s, !1)),
              (o = d.bind(null, n, s, !0));
          } else
            (n = c(t)),
              (r = f.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = a((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = i(n[r]);
                s[o].references--;
              }
              for (var c = a(e, t), u = 0; u < n.length; u++) {
                var l = i(n[u]);
                0 === s[l].references && (s[l].updater(), s.splice(l, 1));
              }
              n = c;
            }
          };
        };
      },
      121: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r }), (e = n.hmd(e));
        const r = (function (e) {
          var t,
            n = e.Symbol;
          return (
            "function" == typeof n
              ? n.observable
                ? (t = n.observable)
                : ((t = n("observable")), (n.observable = t))
              : (t = "@@observable"),
            t
          );
        })(
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : e
        );
      },
      467: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.serialize = t.deserialize = t.registerSerializer = void 0);
        const r = n(381);
        let o = r.DefaultSerializer;
        (t.registerSerializer = function (e) {
          o = r.extendSerializer(o, e);
        }),
          (t.deserialize = function (e) {
            return o.deserialize(e);
          }),
          (t.serialize = function (e) {
            return o.serialize(e);
          });
      },
      734: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n || t.hasOwnProperty(n) || r(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(467);
        Object.defineProperty(t, "registerSerializer", {
          enumerable: !0,
          get: function () {
            return s.registerSerializer;
          },
        }),
          o(n(63), t);
        var i = n(934);
        Object.defineProperty(t, "expose", {
          enumerable: !0,
          get: function () {
            return i.expose;
          },
        });
        var a = n(381);
        Object.defineProperty(t, "DefaultSerializer", {
          enumerable: !0,
          get: function () {
            return a.DefaultSerializer;
          },
        });
        var c = n(180);
        Object.defineProperty(t, "Transfer", {
          enumerable: !0,
          get: function () {
            return c.Transfer;
          },
        });
      },
      211: (e, t) => {
        "use strict";
        let n;
        function r(e) {
          return (
            ("" + e).replace(
              /^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,
              "$1"
            ) + "/"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getBundleURL = t.getBaseURL = void 0),
          (t.getBundleURL = function () {
            return (
              n ||
                (n = (function () {
                  try {
                    throw new Error();
                  } catch (e) {
                    const t = ("" + e.stack).match(
                      /(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g
                    );
                    if (t) return r(t[0]);
                  }
                  return "/";
                })()),
              n
            );
          }),
          (t.getBaseURL = r);
      },
      390: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isWorkerRuntime = t.getWorkerImplementation = t.defaultPoolSize = void 0);
        const r = n(211);
        t.defaultPoolSize =
          "undefined" != typeof navigator && navigator.hardwareConcurrency
            ? navigator.hardwareConcurrency
            : 4;
        const o = (e) => /^(file|https?:)?\/\//i.test(e);
        function s(e) {
          const t = new Blob([e], { type: "application/javascript" });
          return URL.createObjectURL(t);
        }
        let i;
        (t.getWorkerImplementation = function () {
          return (
            i ||
              (i = (function () {
                if ("undefined" == typeof Worker)
                  return class {
                    constructor() {
                      throw Error(
                        "No web worker implementation available. You might have tried to spawn a worker within a worker in a browser that doesn't support workers in workers."
                      );
                    }
                  };
                class e extends Worker {
                  constructor(e, t) {
                    "string" == typeof e && t && t._baseURL
                      ? (e = new URL(e, t._baseURL))
                      : "string" == typeof e &&
                        !o(e) &&
                        r.getBundleURL().match(/^file:\/\//i) &&
                        ((e = new URL(
                          e,
                          r.getBundleURL().replace(/\/[^\/]+$/, "/")
                        )),
                        (e = s(`importScripts(${JSON.stringify(e)});`))),
                      "string" == typeof e &&
                        o(e) &&
                        (e = s(`importScripts(${JSON.stringify(e)});`)),
                      super(e, t);
                  }
                }
                class t extends e {
                  constructor(e, t) {
                    super(window.URL.createObjectURL(e), t);
                  }
                  static fromText(e, n) {
                    const r = new window.Blob([e], { type: "text/javascript" });
                    return new t(r, n);
                  }
                }
                return { blob: t, default: e };
              })()),
            i
          );
        }),
          (t.isWorkerRuntime = function () {
            const e =
              "undefined" != typeof self &&
              "undefined" != typeof Window &&
              self instanceof Window;
            return !("undefined" == typeof self || !self.postMessage || e);
          });
      },
      63: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Worker = t.BlobWorker = t.isWorkerRuntime = void 0);
        const r = n(390);
        Object.defineProperty(t, "isWorkerRuntime", {
          enumerable: !0,
          get: function () {
            return r.isWorkerRuntime;
          },
        });
        var o = n(337);
        Object.defineProperty(t, "Pool", {
          enumerable: !0,
          get: function () {
            return o.Pool;
          },
        });
        var s = n(264);
        Object.defineProperty(t, "spawn", {
          enumerable: !0,
          get: function () {
            return s.spawn;
          },
        });
        var i = n(235);
        Object.defineProperty(t, "Thread", {
          enumerable: !0,
          get: function () {
            return i.Thread;
          },
        }),
          (t.BlobWorker = r.getWorkerImplementation().blob),
          (t.Worker = r.getWorkerImplementation().default);
      },
      891: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createProxyModule = t.createProxyFunction = void 0);
        const o = r(n(227)),
          s = n(49),
          i = n(467),
          a = n(15),
          c = n(180),
          u = n(229),
          l = o.default("threads:master:messages");
        let d = 1;
        function f(e, t) {
          return (...n) => {
            const r = d++,
              { args: o, transferables: f } = (function (e) {
                if (0 === e.length) return { args: [], transferables: [] };
                const t = [],
                  n = [];
                for (const r of e)
                  c.isTransferDescriptor(r)
                    ? (t.push(i.serialize(r.send)), n.push(...r.transferables))
                    : t.push(i.serialize(r));
                return {
                  args: t,
                  transferables:
                    0 === n.length ? n : ((r = n), Array.from(new Set(r))),
                };
                var r;
              })(n),
              h = { type: u.MasterMessageType.run, uid: r, method: t, args: o };
            l("Sending command to run function to worker:", h);
            try {
              e.postMessage(h, f);
            } catch (e) {
              return a.ObservablePromise.from(Promise.reject(e));
            }
            return a.ObservablePromise.from(
              s.multicast(
                (function (e, t) {
                  return new s.Observable((n) => {
                    let r;
                    const o = (s) => {
                      var a;
                      if (
                        (l("Message from worker:", s.data),
                        s.data && s.data.uid === t)
                      )
                        if (
                          (a = s.data) &&
                          a.type === u.WorkerMessageType.running
                        )
                          r = s.data.resultType;
                        else if (
                          ((e) => e && e.type === u.WorkerMessageType.result)(
                            s.data
                          )
                        )
                          "promise" === r
                            ? (void 0 !== s.data.payload &&
                                n.next(i.deserialize(s.data.payload)),
                              n.complete(),
                              e.removeEventListener("message", o))
                            : (s.data.payload &&
                                n.next(i.deserialize(s.data.payload)),
                              s.data.complete &&
                                (n.complete(),
                                e.removeEventListener("message", o)));
                        else if (
                          ((e) => e && e.type === u.WorkerMessageType.error)(
                            s.data
                          )
                        ) {
                          const t = i.deserialize(s.data.error);
                          n.error(t), e.removeEventListener("message", o);
                        }
                    };
                    return (
                      e.addEventListener("message", o),
                      () => {
                        if ("observable" === r || !r) {
                          const n = {
                            type: u.MasterMessageType.cancel,
                            uid: t,
                          };
                          e.postMessage(n);
                        }
                        e.removeEventListener("message", o);
                      }
                    );
                  });
                })(e, r)
              )
            );
          };
        }
        (t.createProxyFunction = f),
          (t.createProxyModule = function (e, t) {
            const n = {};
            for (const r of t) n[r] = f(e, r);
            return n;
          });
      },
      774: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PoolEventType = void 0),
          ((n = t.PoolEventType || (t.PoolEventType = {})).initialized =
            "initialized"),
          (n.taskCanceled = "taskCanceled"),
          (n.taskCompleted = "taskCompleted"),
          (n.taskFailed = "taskFailed"),
          (n.taskQueued = "taskQueued"),
          (n.taskQueueDrained = "taskQueueDrained"),
          (n.taskStart = "taskStart"),
          (n.terminated = "terminated");
      },
      337: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function i(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Pool = t.Thread = t.PoolEventType = void 0);
        const s = o(n(227)),
          i = n(49),
          a = n(531),
          c = n(390),
          u = n(774);
        Object.defineProperty(t, "PoolEventType", {
          enumerable: !0,
          get: function () {
            return u.PoolEventType;
          },
        });
        const l = n(235);
        Object.defineProperty(t, "Thread", {
          enumerable: !0,
          get: function () {
            return l.Thread;
          },
        });
        let d = 1;
        class f {
          constructor(e, t) {
            (this.eventSubject = new i.Subject()),
              (this.initErrors = []),
              (this.isClosing = !1),
              (this.nextTaskID = 1),
              (this.taskQueue = []);
            const n = "number" == typeof t ? { size: t } : t || {},
              { size: r = c.defaultPoolSize } = n;
            var o;
            (this.debug = s.default(
              `threads:pool:${
                ((o = n.name || String(d++)),
                o.replace(/\W/g, " ").trim().replace(/\s+/g, "-"))
              }`
            )),
              (this.options = n),
              (this.workers = (function (e, t) {
                return (function (e) {
                  const t = [];
                  for (let n = 0; n < e; n++) t.push(n);
                  return t;
                })(t).map(() => ({ init: e(), runningTasks: [] }));
              })(e, r)),
              (this.eventObservable = i.multicast(
                i.Observable.from(this.eventSubject)
              )),
              Promise.all(this.workers.map((e) => e.init)).then(
                () =>
                  this.eventSubject.next({
                    type: u.PoolEventType.initialized,
                    size: this.workers.length,
                  }),
                (e) => {
                  this.debug("Error while initializing pool worker:", e),
                    this.eventSubject.error(e),
                    this.initErrors.push(e);
                }
              );
          }
          findIdlingWorker() {
            const { concurrency: e = 1 } = this.options;
            return this.workers.find((t) => t.runningTasks.length < e);
          }
          runPoolTask(e, t) {
            return r(this, void 0, void 0, function* () {
              const n = this.workers.indexOf(e) + 1;
              this.debug(`Running task #${t.id} on worker #${n}...`),
                this.eventSubject.next({
                  type: u.PoolEventType.taskStart,
                  taskID: t.id,
                  workerID: n,
                });
              try {
                const r = yield t.run(yield e.init);
                this.debug(`Task #${t.id} completed successfully`),
                  this.eventSubject.next({
                    type: u.PoolEventType.taskCompleted,
                    returnValue: r,
                    taskID: t.id,
                    workerID: n,
                  });
              } catch (e) {
                this.debug(`Task #${t.id} failed`),
                  this.eventSubject.next({
                    type: u.PoolEventType.taskFailed,
                    taskID: t.id,
                    error: e,
                    workerID: n,
                  });
              }
            });
          }
          run(e, t) {
            return r(this, void 0, void 0, function* () {
              const n = (() =>
                r(this, void 0, void 0, function* () {
                  yield (0, new Promise((e) => setTimeout(e, 0)));
                  try {
                    yield this.runPoolTask(e, t);
                  } finally {
                    (e.runningTasks = e.runningTasks.filter((e) => e !== n)),
                      this.isClosing || this.scheduleWork();
                  }
                }))();
              e.runningTasks.push(n);
            });
          }
          scheduleWork() {
            this.debug("Attempt de-queueing a task in order to run it...");
            const e = this.findIdlingWorker();
            if (!e) return;
            const t = this.taskQueue.shift();
            if (!t)
              return (
                this.debug("Task queue is empty"),
                void this.eventSubject.next({
                  type: u.PoolEventType.taskQueueDrained,
                })
              );
            this.run(e, t);
          }
          taskCompletion(e) {
            return new Promise((t, n) => {
              const r = this.events().subscribe((o) => {
                o.type === u.PoolEventType.taskCompleted && o.taskID === e
                  ? (r.unsubscribe(), t(o.returnValue))
                  : o.type === u.PoolEventType.taskFailed && o.taskID === e
                  ? (r.unsubscribe(), n(o.error))
                  : o.type === u.PoolEventType.terminated &&
                    (r.unsubscribe(),
                    n(Error("Pool has been terminated before task was run.")));
              });
            });
          }
          settled(e = !1) {
            return r(this, void 0, void 0, function* () {
              const t = () => {
                  return (
                    (e = this.workers),
                    (t = (e) => e.runningTasks),
                    e.reduce((e, n) => [...e, ...t(n)], [])
                  );
                  var e, t;
                },
                n = [],
                r = this.eventObservable.subscribe((e) => {
                  e.type === u.PoolEventType.taskFailed && n.push(e.error);
                });
              return this.initErrors.length > 0
                ? Promise.reject(this.initErrors[0])
                : e && 0 === this.taskQueue.length
                ? (yield a.allSettled(t()), n)
                : (yield new Promise((e, t) => {
                    const n = this.eventObservable.subscribe({
                      next(t) {
                        t.type === u.PoolEventType.taskQueueDrained &&
                          (n.unsubscribe(), e());
                      },
                      error: t,
                    });
                  }),
                  yield a.allSettled(t()),
                  r.unsubscribe(),
                  n);
            });
          }
          completed(e = !1) {
            return r(this, void 0, void 0, function* () {
              const t = this.settled(e),
                n = new Promise((e, n) => {
                  const r = this.eventObservable.subscribe({
                    next(o) {
                      o.type === u.PoolEventType.taskQueueDrained
                        ? (r.unsubscribe(), e(t))
                        : o.type === u.PoolEventType.taskFailed &&
                          (r.unsubscribe(), n(o.error));
                    },
                    error: n,
                  });
                }),
                r = yield Promise.race([t, n]);
              if (r.length > 0) throw r[0];
            });
          }
          events() {
            return this.eventObservable;
          }
          queue(e) {
            const { maxQueuedJobs: t = 1 / 0 } = this.options;
            if (this.isClosing)
              throw Error(
                "Cannot schedule pool tasks after terminate() has been called."
              );
            if (this.initErrors.length > 0) throw this.initErrors[0];
            const n = this.nextTaskID++,
              r = this.taskCompletion(n);
            r.catch((e) => {
              this.debug(`Task #${n} errored:`, e);
            });
            const o = {
              id: n,
              run: e,
              cancel: () => {
                -1 !== this.taskQueue.indexOf(o) &&
                  ((this.taskQueue = this.taskQueue.filter((e) => e !== o)),
                  this.eventSubject.next({
                    type: u.PoolEventType.taskCanceled,
                    taskID: o.id,
                  }));
              },
              then: r.then.bind(r),
            };
            if (this.taskQueue.length >= t)
              throw Error(
                "Maximum number of pool tasks queued. Refusing to queue another one.\nThis usually happens for one of two reasons: We are either at peak workload right now or some tasks just won't finish, thus blocking the pool."
              );
            return (
              this.debug(`Queueing task #${o.id}...`),
              this.taskQueue.push(o),
              this.eventSubject.next({
                type: u.PoolEventType.taskQueued,
                taskID: o.id,
              }),
              this.scheduleWork(),
              o
            );
          }
          terminate(e) {
            return r(this, void 0, void 0, function* () {
              (this.isClosing = !0),
                e || (yield this.completed(!0)),
                this.eventSubject.next({
                  type: u.PoolEventType.terminated,
                  remainingQueue: [...this.taskQueue],
                }),
                this.eventSubject.complete(),
                yield Promise.all(
                  this.workers.map((e) =>
                    r(this, void 0, void 0, function* () {
                      return l.Thread.terminate(yield e.init);
                    })
                  )
                );
            });
          }
        }
        function h(e, t) {
          return new f(e, t);
        }
        (f.EventType = u.PoolEventType),
          (h.EventType = u.PoolEventType),
          (t.Pool = h);
      },
      264: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function i(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.spawn = void 0);
        const s = o(n(227)),
          i = n(49),
          a = n(467),
          c = n(104),
          u = n(258),
          l = n(356),
          d = n(891),
          f = s.default("threads:master:messages"),
          h = s.default("threads:master:spawn"),
          p = s.default("threads:master:thread-utils"),
          g =
            "undefined" != typeof process &&
            process.env.THREADS_WORKER_INIT_TIMEOUT
              ? Number.parseInt(process.env.THREADS_WORKER_INIT_TIMEOUT, 10)
              : 1e4;
        function m(e, t, n, r) {
          const o = n
            .filter((e) => e.type === l.WorkerEventType.internalError)
            .map((e) => e.error);
          return Object.assign(e, {
            [u.$errors]: o,
            [u.$events]: n,
            [u.$terminate]: r,
            [u.$worker]: t,
          });
        }
        t.spawn = function (e, t) {
          return r(this, void 0, void 0, function* () {
            h("Initializing new thread");
            const n = (yield (function (e, t, n) {
                return r(this, void 0, void 0, function* () {
                  let r;
                  const o = new Promise((e, o) => {
                      r = setTimeout(() => o(Error(n)), t);
                    }),
                    s = yield Promise.race([e, o]);
                  return clearTimeout(r), s;
                });
              })(
                (function (e) {
                  return new Promise((t, n) => {
                    const r = (o) => {
                      var s;
                      f(
                        "Message from worker before finishing initialization:",
                        o.data
                      ),
                        (s = o.data) && "init" === s.type
                          ? (e.removeEventListener("message", r), t(o.data))
                          : ((e) => e && "uncaughtError" === e.type)(o.data) &&
                            (e.removeEventListener("message", r),
                            n(a.deserialize(o.data.error)));
                    };
                    e.addEventListener("message", r);
                  });
                })(e),
                t && t.timeout ? t.timeout : g,
                `Timeout: Did not receive an init message from worker after ${g}ms. Make sure the worker calls expose().`
              )).exposed,
              { termination: o, terminate: s } = (function (e) {
                const [t, n] = c.createPromiseWithResolver();
                return {
                  terminate: () =>
                    r(this, void 0, void 0, function* () {
                      p("Terminating worker"), yield e.terminate(), n();
                    }),
                  termination: t,
                };
              })(e),
              u = (function (e, t) {
                return new i.Observable((n) => {
                  const r = (e) => {
                      const t = {
                        type: l.WorkerEventType.message,
                        data: e.data,
                      };
                      n.next(t);
                    },
                    o = (e) => {
                      p("Unhandled promise rejection event in thread:", e);
                      const t = {
                        type: l.WorkerEventType.internalError,
                        error: Error(e.reason),
                      };
                      n.next(t);
                    };
                  e.addEventListener("message", r),
                    e.addEventListener("unhandledrejection", o),
                    t.then(() => {
                      const t = { type: l.WorkerEventType.termination };
                      e.removeEventListener("message", r),
                        e.removeEventListener("unhandledrejection", o),
                        n.next(t),
                        n.complete();
                    });
                });
              })(e, o);
            if ("function" === n.type)
              return m(d.createProxyFunction(e), e, u, s);
            if ("module" === n.type)
              return m(d.createProxyModule(e, n.methods), e, u, s);
            {
              const e = n.type;
              throw Error(
                `Worker init message states unexpected type of expose(): ${e}`
              );
            }
          });
        };
      },
      235: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Thread = void 0);
        const r = n(258);
        function o(e) {
          throw Error(e);
        }
        t.Thread = {
          errors: (e) =>
            e[r.$errors] ||
            o(
              "Error observable not found. Make sure to pass a thread instance as returned by the spawn() promise."
            ),
          events: (e) =>
            e[r.$events] ||
            o(
              "Events observable not found. Make sure to pass a thread instance as returned by the spawn() promise."
            ),
          terminate: (e) => e[r.$terminate](),
        };
      },
      15: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ObservablePromise = void 0);
        const r = n(49),
          o = () => {},
          s = (e) => e,
          i = (e) => Promise.resolve().then(e);
        function a(e) {
          throw e;
        }
        class c extends r.Observable {
          constructor(e) {
            super((t) => {
              const n = this,
                r = Object.assign(Object.assign({}, t), {
                  complete() {
                    t.complete(), n.onCompletion();
                  },
                  error(e) {
                    t.error(e), n.onError(e);
                  },
                  next(e) {
                    t.next(e), n.onNext(e);
                  },
                });
              try {
                return (this.initHasRun = !0), e(r);
              } catch (e) {
                r.error(e);
              }
            }),
              (this.initHasRun = !1),
              (this.fulfillmentCallbacks = []),
              (this.rejectionCallbacks = []),
              (this.firstValueSet = !1),
              (this.state = "pending");
          }
          onNext(e) {
            this.firstValueSet ||
              ((this.firstValue = e), (this.firstValueSet = !0));
          }
          onError(e) {
            (this.state = "rejected"), (this.rejection = e);
            for (const t of this.rejectionCallbacks) i(() => t(e));
          }
          onCompletion() {
            this.state = "fulfilled";
            for (const e of this.fulfillmentCallbacks)
              i(() => e(this.firstValue));
          }
          then(e, t) {
            const n = e || s,
              r = t || a;
            let o = !1;
            return new Promise((e, t) => {
              const s = (n) => {
                if (!o) {
                  o = !0;
                  try {
                    e(r(n));
                  } catch (e) {
                    t(e);
                  }
                }
              };
              return (
                this.initHasRun || this.subscribe({ error: s }),
                "fulfilled" === this.state
                  ? e(n(this.firstValue))
                  : "rejected" === this.state
                  ? ((o = !0), e(r(this.rejection)))
                  : (this.fulfillmentCallbacks.push((t) => {
                      try {
                        e(n(t));
                      } catch (e) {
                        s(e);
                      }
                    }),
                    void this.rejectionCallbacks.push(s))
              );
            });
          }
          catch(e) {
            return this.then(void 0, e);
          }
          finally(e) {
            const t = e || o;
            return this.then(
              (e) => (t(), e),
              () => t()
            );
          }
          static from(e) {
            return (function (e) {
              return e && "function" == typeof e.then;
            })(e)
              ? new c((t) => {
                  e.then(
                    (e) => {
                      t.next(e), t.complete();
                    },
                    (e) => {
                      t.error(e);
                    }
                  );
                })
              : super.from(e);
          }
        }
        t.ObservablePromise = c;
      },
      531: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.allSettled = void 0),
          (t.allSettled = function (e) {
            return Promise.all(
              e.map((e) => {
                const t = (e) => ({ status: "fulfilled", value: e }),
                  n = (e) => ({ status: "rejected", reason: e }),
                  r = Promise.resolve(e);
                try {
                  return r.then(t, n);
                } catch (e) {
                  return Promise.reject(e);
                }
              })
            );
          });
      },
      104: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createPromiseWithResolver = void 0);
        const n = () => {};
        t.createPromiseWithResolver = function () {
          let e,
            t = !1,
            r = n;
          return [
            new Promise((n) => {
              t ? n(e) : (r = n);
            }),
            (n) => {
              (t = !0), (e = n), r();
            },
          ];
        };
      },
      381: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DefaultSerializer = t.extendSerializer = void 0),
          (t.extendSerializer = function (e, t) {
            const n = e.deserialize.bind(e),
              r = e.serialize.bind(e);
            return {
              deserialize: (e) => t.deserialize(e, n),
              serialize: (e) => t.serialize(e, r),
            };
          });
        const n = (e) =>
            Object.assign(Error(e.message), { name: e.name, stack: e.stack }),
          r = (e) => ({
            __error_marker: "$$error",
            message: e.message,
            name: e.name,
            stack: e.stack,
          });
        t.DefaultSerializer = {
          deserialize(e) {
            return (t = e) &&
              "object" == typeof t &&
              "__error_marker" in t &&
              "$$error" === t.__error_marker
              ? n(e)
              : e;
            var t;
          },
          serialize: (e) => (e instanceof Error ? r(e) : e),
        };
      },
      258: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.$worker = t.$transferable = t.$terminate = t.$events = t.$errors = void 0),
          (t.$errors = Symbol("thread.errors")),
          (t.$events = Symbol("thread.events")),
          (t.$terminate = Symbol("thread.terminate")),
          (t.$transferable = Symbol("thread.transferable")),
          (t.$worker = Symbol("thread.worker"));
      },
      180: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transfer = t.isTransferDescriptor = void 0);
        const r = n(258);
        (t.isTransferDescriptor = function (e) {
          return e && "object" == typeof e && e[r.$transferable];
        }),
          (t.Transfer = function (e, t) {
            if (!t) {
              if (!(n = e) || "object" != typeof n) throw Error();
              t = [e];
            }
            var n;
            return { [r.$transferable]: !0, send: e, transferables: t };
          });
      },
      356: (e, t, n) => {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WorkerEventType = void 0),
          n(258),
          ((r = t.WorkerEventType || (t.WorkerEventType = {})).internalError =
            "internalError"),
          (r.message = "message"),
          (r.termination = "termination");
      },
      229: (e, t) => {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WorkerMessageType = t.MasterMessageType = void 0),
          ((r = t.MasterMessageType || (t.MasterMessageType = {})).cancel =
            "cancel"),
          (r.run = "run"),
          ((n = t.WorkerMessageType || (t.WorkerMessageType = {})).error =
            "error"),
          (n.init = "init"),
          (n.result = "result"),
          (n.running = "running"),
          (n.uncaughtError = "uncaughtError");
      },
      398: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            isWorkerRuntime: function () {
              const e =
                "undefined" != typeof self &&
                "undefined" != typeof Window &&
                self instanceof Window;
              return !("undefined" == typeof self || !self.postMessage || e);
            },
            postMessageToMaster: function (e, t) {
              self.postMessage(e, t);
            },
            subscribeToMasterMessages: function (e) {
              const t = (t) => {
                e(t.data);
              };
              return (
                self.addEventListener("message", t),
                () => {
                  self.removeEventListener("message", t);
                }
              );
            },
          });
      },
      934: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function i(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.expose = t.isWorkerRuntime = void 0);
        const s = o(n(898)),
          i = n(467),
          a = n(180),
          c = n(229),
          u = o(n(398));
        var l = n(467);
        Object.defineProperty(t, "registerSerializer", {
          enumerable: !0,
          get: function () {
            return l.registerSerializer;
          },
        });
        var d = n(180);
        Object.defineProperty(t, "Transfer", {
          enumerable: !0,
          get: function () {
            return d.Transfer;
          },
        }),
          (t.isWorkerRuntime = u.default.isWorkerRuntime);
        let f = !1;
        const h = new Map(),
          p = (e) => e && e.type === c.MasterMessageType.run,
          g = (e) =>
            s.default(e) ||
            (function (e) {
              return (
                e && "object" == typeof e && "function" == typeof e.subscribe
              );
            })(e);
        function m(e) {
          return a.isTransferDescriptor(e)
            ? { payload: e.send, transferables: e.transferables }
            : { payload: e, transferables: void 0 };
        }
        function y(e, t) {
          const { payload: n, transferables: r } = m(t),
            o = {
              type: c.WorkerMessageType.error,
              uid: e,
              error: i.serialize(n),
            };
          u.default.postMessageToMaster(o, r);
        }
        function v(e, t, n) {
          const { payload: r, transferables: o } = m(n),
            s = {
              type: c.WorkerMessageType.result,
              uid: e,
              complete: !!t || void 0,
              payload: r,
            };
          u.default.postMessageToMaster(s, o);
        }
        function b(e) {
          try {
            const t = {
              type: c.WorkerMessageType.uncaughtError,
              error: i.serialize(e),
            };
            u.default.postMessageToMaster(t);
          } catch (t) {
            console.error(
              "Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",
              t,
              "\nOriginal error:",
              e
            );
          }
        }
        function w(e, t, n) {
          return r(this, void 0, void 0, function* () {
            let r;
            try {
              r = t(...n);
            } catch (t) {
              return y(e, t);
            }
            const o = g(r) ? "observable" : "promise";
            if (
              ((function (e, t) {
                const n = {
                  type: c.WorkerMessageType.running,
                  uid: e,
                  resultType: t,
                };
                u.default.postMessageToMaster(n);
              })(e, o),
              g(r))
            ) {
              const t = r.subscribe(
                (t) => v(e, !1, i.serialize(t)),
                (t) => {
                  y(e, i.serialize(t)), h.delete(e);
                },
                () => {
                  v(e, !0), h.delete(e);
                }
              );
              h.set(e, t);
            } else
              try {
                const t = yield r;
                v(e, !0, i.serialize(t));
              } catch (t) {
                y(e, i.serialize(t));
              }
          });
        }
        (t.expose = function (e) {
          if (!u.default.isWorkerRuntime())
            throw Error("expose() called in the master thread.");
          if (f)
            throw Error(
              "expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions."
            );
          if (((f = !0), "function" == typeof e))
            u.default.subscribeToMasterMessages((t) => {
              p(t) && !t.method && w(t.uid, e, t.args.map(i.deserialize));
            }),
              (function () {
                const e = {
                  type: c.WorkerMessageType.init,
                  exposed: { type: "function" },
                };
                u.default.postMessageToMaster(e);
              })();
          else {
            if ("object" != typeof e || !e)
              throw Error(
                `Invalid argument passed to expose(). Expected a function or an object, got: ${e}`
              );
            u.default.subscribeToMasterMessages((t) => {
              p(t) &&
                t.method &&
                w(t.uid, e[t.method], t.args.map(i.deserialize));
            }),
              (function (e) {
                const t = {
                  type: c.WorkerMessageType.init,
                  exposed: { type: "module", methods: e },
                };
                u.default.postMessageToMaster(t);
              })(Object.keys(e).filter((t) => "function" == typeof e[t]));
          }
          u.default.subscribeToMasterMessages((e) => {
            if ((t = e) && t.type === c.MasterMessageType.cancel) {
              const t = e.uid,
                n = h.get(t);
              n && (n.unsubscribe(), h.delete(t));
            }
            var t;
          });
        }),
          "undefined" != typeof self &&
            "function" == typeof self.addEventListener &&
            u.default.isWorkerRuntime() &&
            (self.addEventListener("error", (e) => {
              setTimeout(() => b(e.error || e), 250);
            }),
            self.addEventListener("unhandledrejection", (e) => {
              const t = e.reason;
              t && "string" == typeof t.message && setTimeout(() => b(t), 250);
            })),
          "undefined" != typeof process &&
            "function" == typeof process.on &&
            u.default.isWorkerRuntime() &&
            (process.on("uncaughtException", (e) => {
              setTimeout(() => b(e), 250);
            }),
            process.on("unhandledRejection", (e) => {
              e && "string" == typeof e.message && setTimeout(() => b(e), 250);
            }));
      },
      232: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CodeJar = void 0),
          (t.CodeJar = function (e, t, n = {}) {
            const r = Object.assign(
              {
                tab: "\t",
                indentOn: /{$/,
                spellcheck: !1,
                catchTab: !0,
                preserveIdent: !0,
                addClosing: !0,
                history: !0,
              },
              n
            );
            let o,
              s,
              i = [],
              a = [],
              c = -1,
              u = !1,
              l = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            e.setAttribute("contentEditable", l ? "true" : "plaintext-only"),
              e.setAttribute("spellcheck", r.spellcheck ? "true" : "false"),
              (e.style.outline = "none"),
              (e.style.overflowWrap = "break-word"),
              (e.style.overflowY = "auto"),
              (e.style.resize = "vertical"),
              (e.style.whiteSpace = "pre-wrap"),
              t(e);
            const d = P(() => {
              const n = m();
              t(e, n), y(n);
            }, 30);
            let f = !1;
            const h = (e) =>
                !x(e) &&
                !S(e) &&
                "Meta" !== e.key &&
                "Control" !== e.key &&
                "Alt" !== e.key &&
                !e.key.startsWith("Arrow"),
              p = P((e) => {
                h(e) && (C(), (f = !1));
              }, 300),
              g = (t, n) => {
                i.push([t, n]), e.addEventListener(t, n);
              };
            function m() {
              const t = window.getSelection(),
                n = { start: 0, end: 0, dir: void 0 };
              return (
                T(e, (e) => {
                  if (e === t.anchorNode && e === t.focusNode)
                    return (
                      (n.start += t.anchorOffset),
                      (n.end += t.focusOffset),
                      (n.dir = t.anchorOffset <= t.focusOffset ? "->" : "<-"),
                      "stop"
                    );
                  if (e === t.anchorNode) {
                    if (((n.start += t.anchorOffset), n.dir)) return "stop";
                    n.dir = "->";
                  } else if (e === t.focusNode) {
                    if (((n.end += t.focusOffset), n.dir)) return "stop";
                    n.dir = "<-";
                  }
                  e.nodeType === Node.TEXT_NODE &&
                    ("->" != n.dir && (n.start += e.nodeValue.length),
                    "<-" != n.dir && (n.end += e.nodeValue.length));
                }),
                n
              );
            }
            function y(t) {
              const n = window.getSelection();
              let r,
                o,
                s = 0,
                i = 0;
              if (
                (t.dir || (t.dir = "->"),
                t.start < 0 && (t.start = 0),
                t.end < 0 && (t.end = 0),
                "<-" == t.dir)
              ) {
                const { start: e, end: n } = t;
                (t.start = n), (t.end = e);
              }
              let a = 0;
              T(e, (e) => {
                if (e.nodeType !== Node.TEXT_NODE) return;
                const n = (e.nodeValue || "").length;
                if (
                  a + n >= t.start &&
                  (r || ((r = e), (s = t.start - a)), a + n >= t.end)
                )
                  return (o = e), (i = t.end - a), "stop";
                a += n;
              }),
                r || (r = e),
                o || (o = e),
                "<-" == t.dir && ([r, s, o, i] = [o, i, r, s]),
                n.setBaseAndExtent(r, s, o, i);
            }
            function v() {
              const t = window.getSelection().getRangeAt(0),
                n = document.createRange();
              return (
                n.selectNodeContents(e),
                n.setEnd(t.startContainer, t.startOffset),
                n.toString()
              );
            }
            function b() {
              const t = window.getSelection().getRangeAt(0),
                n = document.createRange();
              return (
                n.selectNodeContents(e),
                n.setStart(t.endContainer, t.endOffset),
                n.toString()
              );
            }
            function w(e) {
              if (l && "Enter" === e.key)
                if ((_(e), e.stopPropagation(), "" == b())) {
                  E("\n ");
                  const e = m();
                  (e.start = --e.end), y(e);
                } else E("\n");
            }
            function C() {
              if (!u) return;
              const t = e.innerHTML,
                n = m(),
                r = a[c];
              (r &&
                r.html === t &&
                r.pos.start === n.start &&
                r.pos.end === n.end) ||
                (c++,
                (a[c] = { html: t, pos: n }),
                a.splice(c + 1),
                c > 300 && ((c = 300), a.splice(0, 1)));
            }
            function T(e, t) {
              const n = [];
              e.firstChild && n.push(e.firstChild);
              let r = n.pop();
              for (; r && "stop" !== t(r); )
                r.nextSibling && n.push(r.nextSibling),
                  r.firstChild && n.push(r.firstChild),
                  (r = n.pop());
            }
            function k(e) {
              return e.metaKey || e.ctrlKey;
            }
            function x(e) {
              return k(e) && !e.shiftKey && "z" === e.key;
            }
            function S(e) {
              return k(e) && e.shiftKey && "z" === e.key;
            }
            function E(e) {
              (e = e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")),
                document.execCommand("insertHTML", !1, e);
            }
            function P(e, t) {
              let n = 0;
              return (...r) => {
                clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
              };
            }
            function R(e) {
              let t = e.length - 1;
              for (; t >= 0 && "\n" !== e[t]; ) t--;
              t++;
              let n = t;
              for (; n < e.length && /[ \t]/.test(e[n]); ) n++;
              return [e.substring(t, n) || "", t, n];
            }
            function M() {
              return e.textContent || "";
            }
            function _(e) {
              e.preventDefault();
            }
            return (
              g("keydown", (t) => {
                t.defaultPrevented ||
                  ((s = M()),
                  r.preserveIdent
                    ? (function (e) {
                        if ("Enter" === e.key) {
                          const t = v(),
                            n = b();
                          let [o] = R(t),
                            s = o;
                          if (
                            (r.indentOn.test(t) && (s += r.tab),
                            s.length > 0
                              ? (_(e), e.stopPropagation(), E("\n" + s))
                              : w(e),
                            s !== o && "}" === n[0])
                          ) {
                            const e = m();
                            E("\n" + o), y(e);
                          }
                        }
                      })(t)
                    : w(t),
                  r.catchTab &&
                    (function (e) {
                      if ("Tab" === e.key)
                        if ((_(e), e.shiftKey)) {
                          const e = v();
                          let [t, n] = R(e);
                          if (t.length > 0) {
                            const e = m(),
                              o = Math.min(r.tab.length, t.length);
                            y({ start: n, end: n + o }),
                              document.execCommand("delete"),
                              (e.start -= o),
                              (e.end -= o),
                              y(e);
                          }
                        } else E(r.tab);
                    })(t),
                  r.addClosing &&
                    (function (e) {
                      const t = "([{'\"",
                        n = ")]}'\"",
                        r = b(),
                        o = v(),
                        s = "\\" === o.substr(o.length - 1),
                        i = r.substr(0, 1);
                      if (n.includes(e.key) && !s && i === e.key) {
                        const t = m();
                        _(e), (t.start = ++t.end), y(t);
                      } else if (
                        t.includes(e.key) &&
                        !s &&
                        ("\"'".includes(e.key) || ["", " ", "\n"].includes(i))
                      ) {
                        const r = m();
                        _(e),
                          E(e.key + n[t.indexOf(e.key)]),
                          (r.start = ++r.end),
                          y(r);
                      }
                    })(t),
                  r.history &&
                    ((function (t) {
                      if (x(t)) {
                        _(t), c--;
                        const n = a[c];
                        n && ((e.innerHTML = n.html), y(n.pos)),
                          c < 0 && (c = 0);
                      }
                      if (S(t)) {
                        _(t), c++;
                        const n = a[c];
                        n && ((e.innerHTML = n.html), y(n.pos)),
                          c >= a.length && c--;
                      }
                    })(t),
                    h(t) && !f && (C(), (f = !0))));
              }),
              g("keyup", (e) => {
                e.defaultPrevented ||
                  e.isComposing ||
                  (s !== M() && d(), p(e), o && o(M()));
              }),
              g("focus", (e) => {
                u = !0;
              }),
              g("blur", (e) => {
                u = !1;
              }),
              g("paste", (n) => {
                C(),
                  (function (n) {
                    _(n);
                    const r = (n.originalEvent || n).clipboardData.getData(
                        "text/plain"
                      ),
                      o = m();
                    E(r),
                      t(e),
                      y({ start: o.start + r.length, end: o.start + r.length });
                  })(n),
                  C(),
                  o && o(M());
              }),
              {
                updateOptions(e) {
                  e = Object.assign(Object.assign({}, e), e);
                },
                updateCode(n) {
                  (e.textContent = n), t(e);
                },
                onUpdate(e) {
                  o = e;
                },
                toString: M,
                save: m,
                restore: y,
                recordHistory: C,
                destroy() {
                  for (let [t, n] of i) e.removeEventListener(t, n);
                },
              }
            );
          });
      },
      801: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cryptoCurrencies = t.currencies = t.currencyWords = t.currencyWordsToCode = t.currencySigns = t.currencySignsToCode = void 0),
          (t.currencySignsToCode = new Map()),
          t.currencySignsToCode.set("$", "USD"),
          t.currencySignsToCode.set("＄", "USD"),
          t.currencySignsToCode.set("﹩", "USD"),
          t.currencySignsToCode.set("₽", "RUB"),
          t.currencySignsToCode.set("€", "EUR"),
          t.currencySignsToCode.set("£", "GBP"),
          t.currencySignsToCode.set("฿", "THB"),
          t.currencySignsToCode.set("¥", "JPY"),
          t.currencySignsToCode.set("₣", "FRF"),
          t.currencySignsToCode.set("₩", "KRW"),
          (t.currencySigns = new Set(t.currencySignsToCode.keys())),
          (t.currencyWordsToCode = new Map()),
          t.currencyWordsToCode.set("DOLLAR", "USD"),
          t.currencyWordsToCode.set("DOLLARS", "USD"),
          t.currencyWordsToCode.set("ДОЛЛАРОВ", "USD"),
          t.currencyWordsToCode.set("ДОЛЛАР", "USD"),
          t.currencyWordsToCode.set("ДОЛЛАРЫ", "USD"),
          t.currencyWordsToCode.set("ROUBLE", "RUB"),
          t.currencyWordsToCode.set("ROUBLES", "RUB"),
          t.currencyWordsToCode.set("RUBL", "RUB"),
          t.currencyWordsToCode.set("RUBLE", "RUB"),
          t.currencyWordsToCode.set("RUBLES", "RUB"),
          t.currencyWordsToCode.set("РУБ", "RUB"),
          t.currencyWordsToCode.set("РУБЛ", "RUB"),
          t.currencyWordsToCode.set("РУБЛИ", "RUB"),
          t.currencyWordsToCode.set("РУБЛЕЙ", "RUB"),
          t.currencyWordsToCode.set("РУБЛЯХ", "RUB"),
          t.currencyWordsToCode.set("РУБЛЯМ", "RUB"),
          t.currencyWordsToCode.set("РУБЛЯМИ", "RUB"),
          t.currencyWordsToCode.set("РУБЛЬ", "RUB"),
          t.currencyWordsToCode.set("EURO", "EUR"),
          t.currencyWordsToCode.set("EUROS", "EUR"),
          t.currencyWordsToCode.set("BAHT", "THB"),
          t.currencyWordsToCode.set("БАТ", "THB"),
          t.currencyWordsToCode.set("BITCOIN", "BTC"),
          t.currencyWordsToCode.set("BITCOINS", "BTC"),
          t.currencyWordsToCode.set("БИТКОЙН", "BTC"),
          t.currencyWordsToCode.set("БИТКОИН", "BTC"),
          t.currencyWordsToCode.set("БИТКОЙНОВ", "BTC"),
          t.currencyWordsToCode.set("БИТКОИНОВ", "BTC"),
          t.currencyWordsToCode.set("БИТКОЙНАХ", "BTC"),
          t.currencyWordsToCode.set("БИТКОИНАХ", "BTC"),
          t.currencyWordsToCode.set("БИТКАХ", "BTC"),
          t.currencyWordsToCode.set("БИТКОВ", "BTC"),
          (t.currencyWords = new Set(t.currencyWordsToCode.keys())),
          (t.currencies = new Set([
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BHD",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BTN",
            "BWP",
            "BYN",
            "BYR",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLF",
            "CLP",
            "CNH",
            "CNY",
            "COP",
            "CRC",
            "CSK",
            "CUC",
            "CUP",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ERN",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GHS",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "IQD",
            "IRR",
            "ISK",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KPW",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LTL",
            "LVL",
            "LYD",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MRO",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RMB",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "SSP",
            "STD",
            "STN",
            "SVC",
            "SYP",
            "SZL",
            "THB",
            "TJS",
            "TMT",
            "TND",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XAG",
            "XAU",
            "XCD",
            "XDR",
            "XOF",
            "XPD",
            "XPF",
            "XPT",
            "YER",
            "ZAR",
            "ZMK",
            "ZMW",
            "ZWL",
            "DAI",
            "USDT",
            "USDC",
            "BTC",
            "BCH",
            "ETH",
            "LTC",
            "QTUM",
            "DOGE",
            "BNB",
            "EOS",
            "HUSD",
            "ZEC",
            "WAVES",
            "DASH",
          ])),
          (t.cryptoCurrencies = new Set([
            "ZWL",
            "DAI",
            "USDT",
            "USDC",
            "BTC",
            "BCH",
            "ETH",
            "LTC",
            "QTUM",
            "DOGE",
            "BNB",
            "EOS",
            "HUSD",
            "ZEC",
            "WAVES",
            "DASH",
          ]));
      },
      738: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.highlight = void 0);
        const r = n(841),
          o = n(630),
          s = n(215);
        t.highlight = function (e, t, n) {
          let i = t.split("\n"),
            a = [];
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (
              ((t = t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")),
              /^#/.test(t))
            )
              t = `<span class="header">${t}</span>`;
            else if (/^\t/.test(t))
              t = t.replace(
                /^\t(.*)/,
                '<span class="js">\t</span><span class="js-code">$1</span>'
              );
            else if (/^js/i.test(t))
              (t = t.replace(
                /^js(.*)/i,
                '<span class="js">\t</span><span class="js-code">$1</span>'
              )),
                n && (n.start = --n.end);
            else {
              let e = [...t],
                n = s.parse(r.lex(e)),
                i = o.mergeMarkup(n.highlight()),
                a = "",
                c = Array(e.length + 1).fill(0);
              for (let t = 0; t <= e.length; t++) {
                c[t] > 0 && (a += "</span>".repeat(c[t]));
                let n = i.get(t);
                if (n) {
                  n.sort((e, t) => e[0] - t[0]);
                  for (let [e, t] of n) (a += `<span class="${t}">`), c[e]++;
                }
                a += e[t] || "";
              }
              t = a;
            }
            (t = t.replace(
              /( ?)\[\[(-?\d+)]]( ?)/g,
              ' <span data-offset="$2" data-value=""></span> '
            )),
              (t = t.replace(
                /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g,
                '<a href="$1">$1</a>'
              )),
              a.push(t);
          }
          let c = a.join("\n");
          c.length > 2 &&
            "\n\n" != c.substring(c.length - 2, c.length) &&
            (c += "\n"),
            (e.innerHTML = c);
        };
      },
      841: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.lex = void 0);
        const r = n(801),
          o = n(702);
        t.lex = function (e) {
          let t = new s(Array.isArray(e) ? e : [...e]),
            n = t.code.indexOf(":");
          -1 != n && (t.start = t.end = n + 1);
          let r = i;
          for (; r; ) r = r(t);
          return (
            t.tokens.push({
              kind: "eof",
              value: "",
              start: t.start,
              end: t.end,
            }),
            t.tokens
          );
        };
        class s {
          constructor(e) {
            (this.start = 0),
              (this.end = 0),
              (this.tokens = []),
              (this.code = e);
          }
          next() {
            let e = this.end < this.code.length ? this.code[this.end] : "";
            return this.end++, e;
          }
          backup() {
            this.end--;
          }
          peek() {
            let e = this.next();
            return this.backup(), e;
          }
          word() {
            return this.code.slice(this.start, this.end).join("");
          }
          emit(e) {
            let t = this.word(),
              n = t.toLowerCase();
            "word" == e && o.operatorsSet.has(n) && ((e = "operator"), (t = n)),
              this.tokens.push({
                kind: e,
                value: t,
                start: this.start,
                end: this.end,
              }),
              (this.start = this.end);
          }
          drop() {
            this.start = this.end;
          }
          accept(e) {
            return !!e.test(this.next()) || (this.backup(), !1);
          }
          acceptRun(e) {
            for (; e.test(this.next()); );
            this.backup();
          }
        }
        function i(e) {
          let t = e.next();
          return "" == t
            ? null
            : "0" <= t && t <= "9"
            ? (e.backup(), a)
            : "()".includes(t)
            ? (e.emit("bracket"), i)
            : "+-*/%^".includes(t) || o.operators.multiply.includes(t)
            ? (e.emit("operator"), i)
            : "_" == t
            ? e.accept(/_/)
              ? (u(e), e.emit("var"), i)
              : (e.emit("word"), i)
            : "[" == t &&
              e.accept(/\[/) &&
              (e.accept(/-/), u(e), e.accept(/]/) && e.accept(/]/))
            ? (e.emit("var"), i)
            : r.currencySigns.has(t)
            ? (e.emit("word"), i)
            : l(t)
            ? (e.backup(), c)
            : (e.drop(), i);
        }
        function a(e) {
          return (
            u(e), e.accept(/%/) ? e.emit("percentage") : e.emit("number"), i
          );
        }
        function c(e) {
          for (; l(e.next()); );
          return e.backup(), e.emit("word"), i;
        }
        function u(e) {
          let t = /[0-9]/;
          for (e.acceptRun(t); e.accept(/[ ,]/); ) {
            if (!e.accept(t)) {
              e.backup();
              break;
            }
            e.acceptRun(t);
          }
          e.accept(/\./) && e.acceptRun(t), e.accept(/[kM]/);
        }
        function l(e) {
          return (
            (function (e) {
              return (
                "_" === e ||
                "$" === e ||
                /\p{Alphabetic}/u.test(e) ||
                r.currencySigns.has(e)
              );
            })(e) || /\d/.test(e)
          );
        }
      },
      519: (e, t, n) => {
        "use strict";
        const r = n(561),
          o = n(961),
          s = n(734),
          i = n(232),
          a = n(738);
        n(36);
        const c = n(562),
          u = n(593);
        function l(e, t, n = 0) {
          let r = n;
          u.visit(e, (e) => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              let n = e;
              if (n.dataset.offset) {
                let e = parseInt(n.dataset.offset);
                n.dataset.value = t[r + e];
              }
            }
            e.nodeType === Node.TEXT_NODE &&
              (r += ((e.textContent || "").match(/\n/g) || []).length);
          });
        }
        function d(e) {
          let t = "";
          return (
            u.visit(e, (e) => {
              if (e.nodeType === Node.ELEMENT_NODE) {
                let n = e;
                if (n.dataset.offset)
                  return (t += "[[" + n.dataset.offset + "]]"), "skip";
              }
              e.nodeType === Node.TEXT_NODE && (t += e.textContent);
            }),
            t
          );
        }
        function f(e) {
          e.startsWith("#")
            ? (document.title = "solnotr." + u.getFirstLine(e).substring(1))
            : (document.title = "solnotr");
        }
        console.log("solnotr v1.0"),
          u.domReady(async function () {
            c.ui(), u.$("#hero"), u.$(".app");
            let e = u.$("#editor"),
              t = u.$("#output"),
              n = u.$(".prober");
            const { eval: h } = await s.spawn(new s.Worker("worker.js")),
              p = u.debounce(300, () => {
                let t,
                  n = d(e);
                f(n),
                  (t =
                    "" == n || "\n" == n || "\n\n" == n
                      ? ""
                      : "#" + o.compressToBase64(n)),
                  history.replaceState(
                    null,
                    document.title,
                    location.pathname + t
                  );
              });
            let g = [];
            const m = i.CodeJar(
              e,
              async (e, t) => {
                let n = d(e);
                a.highlight(e, n, t), l(e, g), (g = await S()), l(e, g);
              },
              { preserveIdent: !1 }
            );
            async function y() {
              (g = await S()), l(e, g);
            }
            function v() {
              let e = "";
              try {
                e = o.decompressFromBase64(window.location.hash.slice(1)) || "";
              } catch (e) {}
              f(e), m.updateCode(e);
            }
            let b;
            if (
              (m.onUpdate(() => {
                p();
              }),
              window.addEventListener("resize", y),
              window.addEventListener("orientationchange", y),
              document.body.addEventListener("click", (t) => {
                t.target == document.body && e.focus();
              }),
              window.addEventListener("hashchange", () => {
                "" == location.hash
                  ? document.body.classList.add("preview")
                  : (document.body.classList.remove("preview"), v());
              }),
              e.addEventListener("keydown", async (t) => {
                if (t.shiftKey && "Enter" == t.key) {
                  t.preventDefault();
                  let n = m.save();
                  for (
                    ;
                    "\n" != (r.textAfterCursor(e).substring(0, 1) || "\n");

                  )
                    (n.start = ++n.end), m.restore(n);
                  document.execCommand("insertHTML", !1, "\n");
                  let o = u.insert(-1, "");
                  (n.start = n.end = n.end + o + 2),
                    m.restore(n),
                    m.recordHistory(),
                    p();
                  let s = await S();
                  l(e, s);
                }
              }),
              e.addEventListener("mouseover", (e) => {
                let t = E(e.target);
                if (void 0 !== t) {
                  const e = document.querySelector(
                    `#output [data-line="${t}"]`
                  );
                  e && e.classList.add("highlight");
                }
              }),
              e.addEventListener("mouseout", (e) => {
                let t = E(e.target);
                if (void 0 !== t) {
                  const e = document.querySelector(
                    `#output [data-line="${t}"]`
                  );
                  e && e.classList.remove("highlight");
                }
              }),
              e.addEventListener("click", (e) => {
                let t = e.target;
                "A" == t.tagName &&
                  window.open(t.getAttribute("href"), "_blank");
              }),
              t.addEventListener("mousedown", (e) => {
                b = m.save();
              }),
              t.addEventListener("mouseup", async (t) => {
                m.restore(b);
                let n = t.target;
                if ("A" == n.tagName && n.dataset.line) {
                  let t =
                      parseInt(n.dataset.line) -
                      (r.textBeforeCursor(e).split("\n").length - 1),
                    o = u.insert(t, n.textContent || "");
                  (b.start = b.end = b.end + o + 1),
                    m.recordHistory(),
                    p(),
                    a.highlight(e, d(e)),
                    m.restore(b);
                  let s = await S();
                  l(e, s);
                }
              }),
              "" != location.hash)
            )
              v(), (g = await S()), l(e, g);
            else {
              let t = 0,
                n = [
                  "Lunch was $85 + 25% tips",
                  "I spent 220 eur on tickets + 100 chf on presents in usd",
                  "Our project has $3140 income / 3 people\n& in BTC",
                  "100 USD in Bitcoin\n& in ETH",
                  "Yearly income is 280k dollars\nPer month & / 12\n& - 4300 euro rent price\nOn hands & in USD",
                  "1000$ in ₽\n35% of &\n& / 3\nsum",
                  "Inline JavaScript:¶\tMath.random() + Math.sin(.5)\n",
                  "# Pancakes¶Milk $3\nEggs $2\nSugar $1\nFlour $5¶Total",
                ];
              u.shuffle(n);
              let r = [],
                o = [],
                s = "";
              async function w() {
                a.highlight(e, s), l(e, g), (g = await S()), l(e, g);
              }
              function C() {
                n.length > 0 &&
                  ((r = [...n[t]]
                    .reverse()
                    .map((e) =>
                      "&" == e ? " [[-1]] " : "¶" == e ? "\n\n" : e
                    )),
                  (t = (t + 1) % n.length));
              }
              async function T() {
                if ("" == location.hash)
                  if (r.length > 0) {
                    let e = r.pop();
                    (s += e),
                      await w(),
                      setTimeout(T, "\n" == e ? 800 : 30 + 60 * Math.random());
                  } else (o = s.split(" ")), setTimeout(k, 4e3);
              }
              async function k() {
                "" == location.hash &&
                  (o.length > 0
                    ? (o.pop(),
                      (s = o.join(" ")),
                      await w(),
                      setTimeout(k, 10 + 200 * Math.random()))
                    : (C(), T()));
              }
              C(), T();
            }
            async function x() {
              0 == g.filter((e) => "" !== e).length &&
                ((g = await S()), l(e, g));
            }
            async function S() {
              let r = await h(d(e)),
                o = (function (t) {
                  let r = [],
                    o = getComputedStyle(e),
                    s = parseInt(o.paddingTop) + parseInt(o.paddingBottom);
                  (n.style.width = e.getBoundingClientRect().width + "px"),
                    (n.textContent = "1");
                  let i = n.getBoundingClientRect().height - s,
                    c = d(e).split("\n");
                  for (let e = 0; e < c.length; e++) {
                    if ("" == c[e]) {
                      r.push(1);
                      continue;
                    }
                    (n.textContent = c[e]), a.highlight(n, d(n)), l(n, t, e);
                    let o = n.getBoundingClientRect().height - s,
                      u = Math.round(o / i);
                    r.push(u);
                  }
                  return r;
                })(r);
              t.innerHTML = "";
              for (let e = 0; e < r.length; e++) {
                for (let n = 1; n < o[e]; n++) {
                  let e = document.createElement("div");
                  (e.innerHTML = "&nbsp;"), t.appendChild(e);
                }
                let n = document.createElement("div");
                if ("" == r[e] || null == r[e]) n.innerHTML = "&nbsp;";
                else {
                  let t = document.createElement("a");
                  (t.dataset.line = e.toString()),
                    (t.textContent = r[e]),
                    n.appendChild(t);
                }
                t.appendChild(n);
              }
              return r;
            }
            function E(t) {
              if (!t.dataset.offset) return;
              let n = parseInt(t.dataset.offset);
              return (
                u.visit(e, (e) => {
                  if (e.nodeType === Node.ELEMENT_NODE && e == t) return "stop";
                  e.nodeType === Node.TEXT_NODE &&
                    (n += ((e.textContent || "").match(/\n/g) || []).length);
                }),
                n
              );
            }
            setTimeout(x, 100), setTimeout(x, 500), setTimeout(x, 1e3);
          });
      },
      630: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fraction = t.Conversion = t.Binary = t.Unary = t.Sum = t.Variable = t.Percentage = t.Value = t.Nil = t.Tag = t.mergeMarkup = void 0);
        const r = n(801),
          o = n(702),
          s = n(81);
        (t.mergeMarkup = function (e) {
          let t = new Map();
          if (null == e) return t;
          for (let [n, r, o] of e) {
            let e = t.get(n);
            e || (e = []), e.push([r, o]), t.set(n, e);
          }
          return t;
        }),
          (t.Tag = class {
            constructor(e) {
              this.token = e;
            }
            evaluate(e) {
              return s.nothing();
            }
            toString() {
              let e = this.token.value.toUpperCase(),
                t = r.currencySignsToCode.get(e);
              return (
                t ||
                ((t = r.currencyWordsToCode.get(e)),
                t || (r.currencies.has(e) ? e : void 0))
              );
            }
            highlight() {
              let e = [];
              return e.push([this.token.start, this.token.end, "currency"]), e;
            }
          }),
          (t.Nil = class {
            constructor() {
              this.kind = "nil";
            }
            evaluate(e) {
              return s.nothing();
            }
            highlight() {
              return [];
            }
          });
        class i {
          constructor(e, t) {
            (this.value = e), (this.tag = t), (this.kind = "value");
          }
          evaluate(e) {
            var t;
            let n = this.value.value
              .replace(/[ ,]/g, "")
              .replace(/k$/, "000")
              .replace(/M$/, "000000");
            return s.val(
              Number(n),
              null === (t = this.tag) || void 0 === t ? void 0 : t.toString()
            );
          }
          highlight() {
            var e;
            let t = [];
            return (
              t.push([this.value.start, this.value.end, "number"]),
              t.push(
                ...((null === (e = this.tag) || void 0 === e
                  ? void 0
                  : e.highlight()) || [])
              ),
              t
            );
          }
        }
        function a(e, t, n, r, o) {
          return null == n.tag || null == r.tag
            ? new e(t(n.value, r.value), r.tag || n.tag)
            : n.tag == r.tag
            ? new e(t(n.value, r.value), r.tag)
            : null == o[n.tag] || null == o[r.tag]
            ? s.nothing()
            : new e(t((n.value * o[n.tag]) / o[r.tag], r.value), r.tag);
        }
        (t.Value = i),
          (t.Percentage = class {
            constructor(e, t) {
              (this.value = e), (this.tag = t), (this.kind = "percentage");
            }
            evaluate(e) {
              let t = this.value.value.substring(
                0,
                this.value.value.length - 1
              );
              return new s.RPercentage(Number(t));
            }
            highlight() {
              let e = [];
              return (
                e.push([this.value.start, this.value.end - 1, "number"]), e
              );
            }
          }),
          (t.Variable = class {
            constructor(e) {
              (this.name = e), (this.kind = "variable");
            }
            evaluate(e) {
              let t = globalThis[this.name.value];
              return Number.isFinite(t) ? s.val(t) : t;
            }
            highlight() {
              return [];
            }
          }),
          (t.Sum = class {
            constructor(e) {
              (this.token = e), (this.kind = "sum");
            }
            evaluate(e) {
              let { rates: t, answers: n, line: r } = e,
                o = new s.RNumber(0);
              for (let e = r - 1; e >= 0 && !(n[e] instanceof s.RHeader); e--)
                if (!(null == n[e] || n[e] instanceof s.Nothing)) {
                  if (!(n[e] instanceof s.RNumber)) return s.nothing();
                  o = a(s.RNumber, (e, t) => e + t, o, n[e], t);
                }
              return o;
            }
            highlight() {
              let e = [];
              return (
                e.push([this.token.start, this.token.end, "operator-word"]), e
              );
            }
          }),
          (t.Unary = class {
            constructor(e, t) {
              (this.op = e), (this.node = t), (this.kind = "unary");
            }
            evaluate(e) {
              let t = this.node.evaluate(e);
              return (
                "-" == this.op.value &&
                  (t instanceof s.RNumber && (t.value = -t.value),
                  t instanceof s.RPercentage && (t.value = -t.value)),
                t
              );
            }
            highlight() {
              let e = [];
              return (
                e.push([this.op.start, this.op.end, "operator"]),
                e.push(...this.node.highlight()),
                e
              );
            }
          }),
          (t.Binary = class {
            constructor(e, t, n) {
              (this.op = e),
                (this.left = t),
                (this.right = n),
                (this.kind = "binary");
            }
            evaluate(e) {
              let t = e.rates,
                n = this.left.evaluate(e),
                r = this.right.evaluate(e);
              if (r instanceof s.Nothing) return n;
              switch (this.op.value) {
                case "+":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e + t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => e * (1 + t / 100), n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e + t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "-":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e - t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => e * (1 - t / 100), n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e - t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "*":
                case "x":
                case "х":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e * t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => (e * t) / 100, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e * t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return a(s.RPercentage, (e, t) => e * t, n, r, t);
                  break;
                case "/":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e / t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return s.nothing();
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e / t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return a(s.RPercentage, (e, t) => e / t, n, r, t);
                  break;
                case "%":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e % t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return s.nothing();
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e % t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "^":
                  if (n instanceof s.RNumber && r instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e ** t, n, r, t);
                  if (n instanceof s.RNumber && r instanceof s.RPercentage)
                    return s.nothing();
                  if (n instanceof s.RPercentage && r instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e ** t, n, r, t);
                  if (n instanceof s.RPercentage && r instanceof s.RNumber)
                    return s.nothing();
              }
              return s.nothing();
            }
            highlight() {
              let e = [];
              return (
                "^" == this.op.value &&
                this.right instanceof i &&
                this.op.end == this.right.value.start
                  ? (e.push([
                      this.right.value.start,
                      this.right.value.end,
                      "exp",
                    ]),
                    e.push([this.op.start, this.op.end, "none"]))
                  : e.push([this.op.start, this.op.end, "operator"]),
                o.operators.multiply.includes(this.op.value) &&
                  e.push([this.op.start, this.op.end, "operator-word"]),
                e.push(...this.left.highlight()),
                e.push(...this.right.highlight()),
                e
              );
            }
          }),
          (t.Conversion = class {
            constructor(e, t, n) {
              (this.op = e),
                (this.node = t),
                (this.tag = n),
                (this.kind = "conversion");
            }
            evaluate(e) {
              let t = e.rates,
                n = this.node.evaluate(e),
                r = this.tag.toString();
              return n instanceof s.RNumber
                ? null == n.tag
                  ? new s.RNumber(n.value, r)
                  : null == r || null == t[n.tag] || null == t[r]
                  ? n
                  : new s.RNumber((n.value * t[n.tag]) / t[r], r)
                : n instanceof s.RPercentage
                ? new s.RPercentage(n.value, r)
                : s.nothing();
            }
            highlight() {
              let e = [];
              return (
                e.push([this.op.start, this.op.end, "operator-word"]),
                e.push(...this.node.highlight()),
                e.push(...this.tag.highlight()),
                e
              );
            }
          }),
          (t.Fraction = class {
            constructor(e, t, n) {
              (this.op = e),
                (this.left = t),
                (this.right = n),
                (this.kind = "fraction");
            }
            evaluate(e) {
              let t = this.left.evaluate(e),
                n = this.right.evaluate(e);
              return t instanceof s.RPercentage && n instanceof s.RNumber
                ? s.val((n.value * t.value) / 100, n.tag)
                : s.nothing();
            }
            highlight() {
              let e = [];
              return (
                e.push([this.op.start, this.op.end, "operator-word"]),
                e.push(...this.left.highlight()),
                e.push(...this.right.highlight()),
                e
              );
            }
          });
      },
      702: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.operatorsSet = t.operators = void 0),
          (t.operators = {
            multiply: ["x", "х"],
            into: ["in", "to", "в"],
            of: ["of", "от"],
            sum: ["sum", "total", "всего", "сумма"],
          }),
          (t.operatorsSet = new Set(Object.values(t.operators).flat()));
      },
      215: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parse = void 0);
        const r = n(801),
          o = n(630),
          s = n(702);
        t.parse = function (e) {
          return a(new i(e));
        };
        class i {
          constructor(e) {
            (this.stream = e), (this.pos = 0), (this.token = e[0]);
          }
          next() {
            this.pos < this.stream.length - 1 &&
              (this.pos++,
              (this.token = this.stream[this.pos]),
              (this.latestTagToken = void 0));
          }
          words() {
            for (; "word" == this.stream[this.pos].kind; )
              (this.latestTagToken = this.stream[this.pos]), this.pos++;
            this.token = this.stream[this.pos];
          }
          eof() {
            return "eof" == this.token.kind;
          }
          is(e, ...t) {
            return (
              this.token.kind == e &&
              (t.includes(this.token.value) || 0 == t.length)
            );
          }
        }
        function a(e) {
          return (
            e.words(),
            e.eof()
              ? new o.Nil()
              : (function (e) {
                  let t = c(e, u(e));
                  for (; e.is("operator", ...s.operators.into); ) {
                    let n = e.token;
                    if ((e.next(), e.eof())) return t;
                    if (e.is("word")) {
                      let r = f(e.token);
                      e.next(), null != r && (t = new o.Conversion(n, t, r));
                    }
                  }
                  return (
                    e.words(),
                    e.eof() ? t : e.is("operator", "+", "-") ? c(e, t) : t
                  );
                })(e)
          );
        }
        function c(e, t) {
          for (; e.is("operator", "+", "-"); ) {
            let n = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let r = u(e);
            t = new o.Binary(n, t, r);
          }
          return t;
        }
        function u(e) {
          let t = l(e);
          for (; e.is("operator", "*", "/", "%", ...s.operators.multiply); ) {
            let n = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let r = l(e);
            t = new o.Binary(n, t, r);
          }
          return t;
        }
        function l(e) {
          let t = (function (e) {
            let t = d(e);
            for (; e.is("operator", ...s.operators.of); ) {
              let n = e.token;
              if ((e.next(), e.eof())) return t;
              let r = d(e);
              t = new o.Fraction(n, t, r);
            }
            return t;
          })(e);
          if (e.is("operator", "^")) {
            let n = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let r = l(e);
            t = new o.Binary(n, t, r);
          }
          return t;
        }
        function d(e) {
          if (e.is("operator", "-", "+")) {
            let t = e.token;
            return (
              e.next(), e.words(), e.eof() ? new o.Nil() : new o.Unary(t, d(e))
            );
          }
          return (function (e) {
            if (e.is("bracket", "(")) {
              if ((e.next(), e.words(), e.eof())) return new o.Nil();
              let t = a(e);
              return e.is("bracket", ")") && (e.next(), e.words(), e.eof()), t;
            }
            return (function (e) {
              if ("number" == e.token.kind) {
                let t = new o.Value(e.token, f(e.latestTagToken));
                e.next();
                let n = f(e.token);
                return n && (t.tag = n), e.words(), e.eof(), t;
              }
              if (e.is("percentage")) {
                let t = new o.Percentage(e.token);
                return e.next(), e.words(), e.eof(), t;
              }
              if (e.is("var")) {
                let t = new o.Variable(e.token);
                return e.next(), e.words(), e.eof(), t;
              }
              if (e.is("operator", ...s.operators.sum)) {
                let t = new o.Sum(e.token);
                return e.next(), e.words(), e.eof(), t;
              }
              return e.next(), e.eof() ? new o.Nil() : a(e);
            })(e);
          })(e);
        }
        function f(e) {
          if (null == e) return;
          let t = e.value.toUpperCase(),
            n = r.currencySignsToCode.get(t);
          return n
            ? new o.Tag(e)
            : ((n = r.currencyWordsToCode.get(t)),
              n || r.currencies.has(t) ? new o.Tag(e) : void 0);
        }
      },
      81: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RHeader = t.RPercentage = t.val = t.RNumber = t.nothing = t.Nothing = void 0);
        class n {
          constructor() {
            this.kind = "nil";
          }
          valueOf() {
            throw "nope";
          }
        }
        (t.Nothing = n),
          (t.nothing = function () {
            return new n();
          });
        class r {
          constructor(e, t) {
            (this.value = e), (this.tag = t), (this.kind = "r_number");
          }
          valueOf() {
            return this.value;
          }
        }
        (t.RNumber = r),
          (t.val = function (e, t) {
            return new r(e, t);
          }),
          (t.RPercentage = class {
            constructor(e, t) {
              (this.value = e), (this.tag = t), (this.kind = "r_percentage");
            }
            valueOf() {
              throw "nope";
            }
          }),
          (t.RHeader = class {
            constructor(e) {
              (this.title = e), (this.kind = "r_header");
            }
            valueOf() {
              throw "nope";
            }
          });
      },
      562: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ui = void 0);
        const r = n(593);
        function o(e) {
          const t = e.currentTarget,
            n = document.createElement("span"),
            r = Math.max(t.clientWidth, t.clientHeight),
            o = r / 2;
          (n.style.width = n.style.height = `${r}px`),
            (n.style.left =
              (e.clientX || e.targetTouches[0].pageX) -
              t.offsetLeft -
              o +
              "px"),
            (n.style.top =
              (e.clientY || e.targetTouches[0].pageY) - t.offsetTop - o + "px"),
            n.classList.add("ripple");
          const s = t.getElementsByClassName("ripple")[0];
          s && s.remove(), t.appendChild(n);
        }
        t.ui = function () {
          let e = r.$("#menu"),
            t = r.$("#notification"),
            n = r.$("#cr-nw");
          function s() {
            e.classList.remove("visible");
          }
          let i = (e) => {
            e.preventDefault(),
              o(e),
              setTimeout(
                () =>
                  (location.href =
                    "#MQAgogHghgtgDgGwKYGcBQaAUASAjABnwGsQBqEAFnwFIBKEAehACY0QBtdgWlwF1eQIAJYA7EACEAKgGEQmAMoALIQDMALqTAi1SAE4g1AexABjQ3ACeBxUhBQRKAO56DxqCBFJHIBKKS0MIA=="),
                300
              );
          };
          n.addEventListener("click", i),
            n.addEventListener("touchstart", i),
            r.$("#button").addEventListener("click", (t) => {
              o(t), e.classList.toggle("visible");
            }),
            document.body.addEventListener("click", (e) => {
              let t = e.target;
              t.closest("#menu") ||
                t.closest("#button") ||
                t.closest(".ripple") ||
                s();
            }),
            r.$("#create-new").addEventListener("click", () => {
              s();
            }),
            r.$("#share-doc").addEventListener("click", () => {
              !(function (e) {
                const t = document.createElement("textarea");
                (t.value = e),
                  document.body.appendChild(t),
                  t.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(t);
              })(location.href),
                t.classList.add("visible"),
                (t.textContent = "Link copied"),
                setTimeout(() => {
                  t.classList.remove("visible");
                }, 2e3),
                s();
            });
        };
      },
      593: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.shuffle = t.postData = t.getFirstLine = t.insert = t.visit = t.numberWithSpaces = t.twoNonZeroDecimals = t.roundFloatingPointError = t.debounce = t.domReady = t.$ = void 0),
          (t.$ = function (e) {
            return document.querySelector(e);
          }),
          (t.domReady = function (e) {
            "complete" === document.readyState ||
            "interactive" === document.readyState
              ? e()
              : document.addEventListener("DOMContentLoaded", e);
          }),
          (t.debounce = function (e, t) {
            let n;
            return function (...r) {
              const o = !n;
              n && clearTimeout(n),
                (n = window.setTimeout(function () {
                  (n = null), t(...r);
                }, e)),
                o && t(...r);
            };
          }),
          (t.roundFloatingPointError = function (e, t) {
            return (t = Math.max(t, 0)), Math.round(e * 10 ** t) / 10 ** t;
          }),
          (t.twoNonZeroDecimals = function (e) {
            let t = e ? Math.floor(Math.log10(e)) : 0,
              n = t < 0 ? Math.pow(10, 1 - t) : 100;
            return Math.round(e * n) / n;
          }),
          (t.numberWithSpaces = function (e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          }),
          (t.visit = function (e, t) {
            const n = [];
            e.firstChild && n.push(e.firstChild);
            let r = n.pop();
            for (; r; ) {
              let e = t(r);
              if ("stop" == e) break;
              r.nextSibling && n.push(r.nextSibling),
                "skip" != e && r.firstChild && n.push(r.firstChild),
                (r = n.pop());
            }
          }),
          (t.insert = function (e, t) {
            let n = document.getSelection();
            if (n) {
              let r = n.getRangeAt(0);
              r.deleteContents();
              let o = document.createDocumentFragment(),
                s = document.createElement("span"),
                i = " ";
              return (
                0 == e && ((e = -1), (i = "\n ")),
                o.appendChild(document.createTextNode(i)),
                o.appendChild(s),
                o.appendChild(document.createTextNode(" ")),
                (s.dataset.offset = e.toString()),
                (s.dataset.value = t),
                r.insertNode(o),
                r.collapse(!1),
                i.length
              );
            }
            return 0;
          }),
          (t.getFirstLine = function (e) {
            let t = e.indexOf("\n");
            return -1 === t ? e : e.substr(0, t);
          }),
          (t.postData = async function (e = "", t = {}) {
            const n = await fetch(e, {
              method: "POST",
              mode: "no-cors",
              cache: "no-cache",
              credentials: "omit",
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(t),
            });
            return await n.text();
          }),
          (t.shuffle = function (e) {
            for (let t = e.length - 1; t > 0; t--) {
              const n = Math.floor(Math.random() * (t + 1));
              [e[t], e[n]] = [e[n], e[t]];
            }
            return e;
          });
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    n(519);
})();
//# sourceMappingURL=main.js.map
