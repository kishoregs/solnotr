(() => {
  var e = {
      898: (e, t, r) => {
        "use strict";
        const n = r(121).Z;
        e.exports = (e) => Boolean(e && e[n] && e === e[n]());
      },
      121: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n }), (e = r.hmd(e));
        const n = (function (e) {
          var t,
            r = e.Symbol;
          return (
            "function" == typeof r
              ? r.observable
                ? (t = r.observable)
                : ((t = r("observable")), (r.observable = t))
              : (t = "@@observable"),
            t
          );
        })(
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : e
        );
      },
      467: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.serialize = t.deserialize = t.registerSerializer = void 0);
        const n = r(381);
        let o = n.DefaultSerializer;
        (t.registerSerializer = function (e) {
          o = n.extendSerializer(o, e);
        }),
          (t.deserialize = function (e) {
            return o.deserialize(e);
          }),
          (t.serialize = function (e) {
            return o.serialize(e);
          });
      },
      381: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DefaultSerializer = t.extendSerializer = void 0),
          (t.extendSerializer = function (e, t) {
            const r = e.deserialize.bind(e),
              n = e.serialize.bind(e);
            return {
              deserialize: (e) => t.deserialize(e, r),
              serialize: (e) => t.serialize(e, n),
            };
          });
        const r = (e) =>
            Object.assign(Error(e.message), { name: e.name, stack: e.stack }),
          n = (e) => ({
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
              ? r(e)
              : e;
            var t;
          },
          serialize: (e) => (e instanceof Error ? n(e) : e),
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
      180: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transfer = t.isTransferDescriptor = void 0);
        const n = r(258);
        (t.isTransferDescriptor = function (e) {
          return e && "object" == typeof e && e[n.$transferable];
        }),
          (t.Transfer = function (e, t) {
            if (!t) {
              if (!(r = e) || "object" != typeof r) throw Error();
              t = [e];
            }
            var r;
            return { [n.$transferable]: !0, send: e, transferables: t };
          });
      },
      229: (e, t) => {
        "use strict";
        var r, n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WorkerMessageType = t.MasterMessageType = void 0),
          ((n = t.MasterMessageType || (t.MasterMessageType = {})).cancel =
            "cancel"),
          (n.run = "run"),
          ((r = t.WorkerMessageType || (t.WorkerMessageType = {})).error =
            "error"),
          (r.init = "init"),
          (r.result = "result"),
          (r.running = "running"),
          (r.uncaughtError = "uncaughtError");
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
      934: function (e, t, r) {
        "use strict";
        var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, s) {
                function i(e) {
                  try {
                    u(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    u(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(i, a);
                }
                u((n = n.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.expose = t.isWorkerRuntime = void 0);
        const s = o(r(898)),
          i = r(467),
          a = r(180),
          u = r(229),
          c = o(r(398));
        var l = r(467);
        Object.defineProperty(t, "registerSerializer", {
          enumerable: !0,
          get: function () {
            return l.registerSerializer;
          },
        });
        var d = r(180);
        Object.defineProperty(t, "Transfer", {
          enumerable: !0,
          get: function () {
            return d.Transfer;
          },
        }),
          (t.isWorkerRuntime = c.default.isWorkerRuntime);
        let f = !1;
        const h = new Map(),
          p = (e) => e && e.type === u.MasterMessageType.run,
          g = (e) =>
            s.default(e) ||
            (function (e) {
              return (
                e && "object" == typeof e && "function" == typeof e.subscribe
              );
            })(e);
        function R(e) {
          return a.isTransferDescriptor(e)
            ? { payload: e.send, transferables: e.transferables }
            : { payload: e, transferables: void 0 };
        }
        function T(e, t) {
          const { payload: r, transferables: n } = R(t),
            o = {
              type: u.WorkerMessageType.error,
              uid: e,
              error: i.serialize(r),
            };
          c.default.postMessageToMaster(o, n);
        }
        function y(e, t, r) {
          const { payload: n, transferables: o } = R(r),
            s = {
              type: u.WorkerMessageType.result,
              uid: e,
              complete: !!t || void 0,
              payload: n,
            };
          c.default.postMessageToMaster(s, o);
        }
        function b(e) {
          try {
            const t = {
              type: u.WorkerMessageType.uncaughtError,
              error: i.serialize(e),
            };
            c.default.postMessageToMaster(t);
          } catch (t) {
            console.error(
              "Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",
              t,
              "\nOriginal error:",
              e
            );
          }
        }
        function m(e, t, r) {
          return n(this, void 0, void 0, function* () {
            let n;
            try {
              n = t(...r);
            } catch (t) {
              return T(e, t);
            }
            const o = g(n) ? "observable" : "promise";
            if (
              ((function (e, t) {
                const r = {
                  type: u.WorkerMessageType.running,
                  uid: e,
                  resultType: t,
                };
                c.default.postMessageToMaster(r);
              })(e, o),
              g(n))
            ) {
              const t = n.subscribe(
                (t) => y(e, !1, i.serialize(t)),
                (t) => {
                  T(e, i.serialize(t)), h.delete(e);
                },
                () => {
                  y(e, !0), h.delete(e);
                }
              );
              h.set(e, t);
            } else
              try {
                const t = yield n;
                y(e, !0, i.serialize(t));
              } catch (t) {
                T(e, i.serialize(t));
              }
          });
        }
        (t.expose = function (e) {
          if (!c.default.isWorkerRuntime())
            throw Error("expose() called in the master thread.");
          if (f)
            throw Error(
              "expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions."
            );
          if (((f = !0), "function" == typeof e))
            c.default.subscribeToMasterMessages((t) => {
              p(t) && !t.method && m(t.uid, e, t.args.map(i.deserialize));
            }),
              (function () {
                const e = {
                  type: u.WorkerMessageType.init,
                  exposed: { type: "function" },
                };
                c.default.postMessageToMaster(e);
              })();
          else {
            if ("object" != typeof e || !e)
              throw Error(
                `Invalid argument passed to expose(). Expected a function or an object, got: ${e}`
              );
            c.default.subscribeToMasterMessages((t) => {
              p(t) &&
                t.method &&
                m(t.uid, e[t.method], t.args.map(i.deserialize));
            }),
              (function (e) {
                const t = {
                  type: u.WorkerMessageType.init,
                  exposed: { type: "module", methods: e },
                };
                c.default.postMessageToMaster(t);
              })(Object.keys(e).filter((t) => "function" == typeof e[t]));
          }
          c.default.subscribeToMasterMessages((e) => {
            if ((t = e) && t.type === u.MasterMessageType.cancel) {
              const t = e.uid,
                r = h.get(t);
              r && (r.unsubscribe(), h.delete(t));
            }
            var t;
          });
        }),
          "undefined" != typeof self &&
            "function" == typeof self.addEventListener &&
            c.default.isWorkerRuntime() &&
            (self.addEventListener("error", (e) => {
              setTimeout(() => b(e.error || e), 250);
            }),
            self.addEventListener("unhandledrejection", (e) => {
              const t = e.reason;
              t && "string" == typeof t.message && setTimeout(() => b(t), 250);
            })),
          "undefined" != typeof process &&
            "function" == typeof process.on &&
            c.default.isWorkerRuntime() &&
            (process.on("uncaughtException", (e) => {
              setTimeout(() => b(e), 250);
            }),
            process.on("unhandledRejection", (e) => {
              e && "string" == typeof e.message && setTimeout(() => b(e), 250);
            }));
      },
      169: (e, t, r) => {
        e.exports = r(934);
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
      841: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.lex = void 0);
        const n = r(801),
          o = r(702);
        t.lex = function (e) {
          let t = new s(Array.isArray(e) ? e : [...e]),
            r = t.code.indexOf(":");
          -1 != r && (t.start = t.end = r + 1);
          let n = i;
          for (; n; ) n = n(t);
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
              r = t.toLowerCase();
            "word" == e && o.operatorsSet.has(r) && ((e = "operator"), (t = r)),
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
              ? (c(e), e.emit("var"), i)
              : (e.emit("word"), i)
            : "[" == t &&
              e.accept(/\[/) &&
              (e.accept(/-/), c(e), e.accept(/]/) && e.accept(/]/))
            ? (e.emit("var"), i)
            : n.currencySigns.has(t)
            ? (e.emit("word"), i)
            : l(t)
            ? (e.backup(), u)
            : (e.drop(), i);
        }
        function a(e) {
          return (
            c(e), e.accept(/%/) ? e.emit("percentage") : e.emit("number"), i
          );
        }
        function u(e) {
          for (; l(e.next()); );
          return e.backup(), e.emit("word"), i;
        }
        function c(e) {
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
                n.currencySigns.has(e)
              );
            })(e) || /\d/.test(e)
          );
        }
      },
      630: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fraction = t.Conversion = t.Binary = t.Unary = t.Sum = t.Variable = t.Percentage = t.Value = t.Nil = t.Tag = t.mergeMarkup = void 0);
        const n = r(801),
          o = r(702),
          s = r(81);
        (t.mergeMarkup = function (e) {
          let t = new Map();
          if (null == e) return t;
          for (let [r, n, o] of e) {
            let e = t.get(r);
            e || (e = []), e.push([n, o]), t.set(r, e);
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
                t = n.currencySignsToCode.get(e);
              return (
                t ||
                ((t = n.currencyWordsToCode.get(e)),
                t || (n.currencies.has(e) ? e : void 0))
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
            let r = this.value.value
              .replace(/[ ,]/g, "")
              .replace(/k$/, "000")
              .replace(/M$/, "000000");
            return s.val(
              Number(r),
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
        function a(e, t, r, n, o) {
          return null == r.tag || null == n.tag
            ? new e(t(r.value, n.value), n.tag || r.tag)
            : r.tag == n.tag
            ? new e(t(r.value, n.value), n.tag)
            : null == o[r.tag] || null == o[n.tag]
            ? s.nothing()
            : new e(t((r.value * o[r.tag]) / o[n.tag], n.value), n.tag);
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
              let { rates: t, answers: r, line: n } = e,
                o = new s.RNumber(0);
              for (let e = n - 1; e >= 0 && !(r[e] instanceof s.RHeader); e--)
                if (!(null == r[e] || r[e] instanceof s.Nothing)) {
                  if (!(r[e] instanceof s.RNumber)) return s.nothing();
                  o = a(s.RNumber, (e, t) => e + t, o, r[e], t);
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
            constructor(e, t, r) {
              (this.op = e),
                (this.left = t),
                (this.right = r),
                (this.kind = "binary");
            }
            evaluate(e) {
              let t = e.rates,
                r = this.left.evaluate(e),
                n = this.right.evaluate(e);
              if (n instanceof s.Nothing) return r;
              switch (this.op.value) {
                case "+":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e + t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => e * (1 + t / 100), r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e + t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "-":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e - t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => e * (1 - t / 100), r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e - t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "*":
                case "x":
                case "х":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e * t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return a(s.RNumber, (e, t) => (e * t) / 100, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e * t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
                    return a(s.RPercentage, (e, t) => e * t, r, n, t);
                  break;
                case "/":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e / t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return s.nothing();
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e / t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
                    return a(s.RPercentage, (e, t) => e / t, r, n, t);
                  break;
                case "%":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e % t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return s.nothing();
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e % t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
                    return s.nothing();
                  break;
                case "^":
                  if (r instanceof s.RNumber && n instanceof s.RNumber)
                    return a(s.RNumber, (e, t) => e ** t, r, n, t);
                  if (r instanceof s.RNumber && n instanceof s.RPercentage)
                    return s.nothing();
                  if (r instanceof s.RPercentage && n instanceof s.RPercentage)
                    return a(s.RPercentage, (e, t) => e ** t, r, n, t);
                  if (r instanceof s.RPercentage && n instanceof s.RNumber)
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
            constructor(e, t, r) {
              (this.op = e),
                (this.node = t),
                (this.tag = r),
                (this.kind = "conversion");
            }
            evaluate(e) {
              let t = e.rates,
                r = this.node.evaluate(e),
                n = this.tag.toString();
              return r instanceof s.RNumber
                ? null == r.tag
                  ? new s.RNumber(r.value, n)
                  : null == n || null == t[r.tag] || null == t[n]
                  ? r
                  : new s.RNumber((r.value * t[r.tag]) / t[n], n)
                : r instanceof s.RPercentage
                ? new s.RPercentage(r.value, n)
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
            constructor(e, t, r) {
              (this.op = e),
                (this.left = t),
                (this.right = r),
                (this.kind = "fraction");
            }
            evaluate(e) {
              let t = this.left.evaluate(e),
                r = this.right.evaluate(e);
              return t instanceof s.RPercentage && r instanceof s.RNumber
                ? s.val((r.value * t.value) / 100, r.tag)
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
      215: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parse = void 0);
        const n = r(801),
          o = r(630),
          s = r(702);
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
                  let t = u(e, c(e));
                  for (; e.is("operator", ...s.operators.into); ) {
                    let r = e.token;
                    if ((e.next(), e.eof())) return t;
                    if (e.is("word")) {
                      let n = f(e.token);
                      e.next(), null != n && (t = new o.Conversion(r, t, n));
                    }
                  }
                  return (
                    e.words(),
                    e.eof() ? t : e.is("operator", "+", "-") ? u(e, t) : t
                  );
                })(e)
          );
        }
        function u(e, t) {
          for (; e.is("operator", "+", "-"); ) {
            let r = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let n = c(e);
            t = new o.Binary(r, t, n);
          }
          return t;
        }
        function c(e) {
          let t = l(e);
          for (; e.is("operator", "*", "/", "%", ...s.operators.multiply); ) {
            let r = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let n = l(e);
            t = new o.Binary(r, t, n);
          }
          return t;
        }
        function l(e) {
          let t = (function (e) {
            let t = d(e);
            for (; e.is("operator", ...s.operators.of); ) {
              let r = e.token;
              if ((e.next(), e.eof())) return t;
              let n = d(e);
              t = new o.Fraction(r, t, n);
            }
            return t;
          })(e);
          if (e.is("operator", "^")) {
            let r = e.token;
            if ((e.next(), e.words(), e.eof())) return t;
            let n = l(e);
            t = new o.Binary(r, t, n);
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
                let r = f(e.token);
                return r && (t.tag = r), e.words(), e.eof(), t;
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
            r = n.currencySignsToCode.get(t);
          return r
            ? new o.Tag(e)
            : ((r = n.currencyWordsToCode.get(t)),
              r || n.currencies.has(t) ? new o.Tag(e) : void 0);
        }
      },
      81: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RHeader = t.RPercentage = t.val = t.RNumber = t.nothing = t.Nothing = void 0);
        class r {
          constructor() {
            this.kind = "nil";
          }
          valueOf() {
            throw "nope";
          }
        }
        (t.Nothing = r),
          (t.nothing = function () {
            return new r();
          });
        class n {
          constructor(e, t) {
            (this.value = e), (this.tag = t), (this.kind = "r_number");
          }
          valueOf() {
            return this.value;
          }
        }
        (t.RNumber = n),
          (t.val = function (e, t) {
            return new n(e, t);
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
            let r;
            return function (...n) {
              const o = !r;
              r && clearTimeout(r),
                (r = window.setTimeout(function () {
                  (r = null), t(...n);
                }, e)),
                o && t(...n);
            };
          }),
          (t.roundFloatingPointError = function (e, t) {
            return (t = Math.max(t, 0)), Math.round(e * 10 ** t) / 10 ** t;
          }),
          (t.twoNonZeroDecimals = function (e) {
            let t = e ? Math.floor(Math.log10(e)) : 0,
              r = t < 0 ? Math.pow(10, 1 - t) : 100;
            return Math.round(e * r) / r;
          }),
          (t.numberWithSpaces = function (e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          }),
          (t.visit = function (e, t) {
            const r = [];
            e.firstChild && r.push(e.firstChild);
            let n = r.pop();
            for (; n; ) {
              let e = t(n);
              if ("stop" == e) break;
              n.nextSibling && r.push(n.nextSibling),
                "skip" != e && n.firstChild && r.push(n.firstChild),
                (n = r.pop());
            }
          }),
          (t.insert = function (e, t) {
            let r = document.getSelection();
            if (r) {
              let n = r.getRangeAt(0);
              n.deleteContents();
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
                n.insertNode(o),
                n.collapse(!1),
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
            const r = await fetch(e, {
              method: "POST",
              mode: "no-cors",
              cache: "no-cache",
              credentials: "omit",
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(t),
            });
            return await r.text();
          }),
          (t.shuffle = function (e) {
            for (let t = e.length - 1; t > 0; t--) {
              const r = Math.floor(Math.random() * (t + 1));
              [e[t], e[r]] = [e[r], e[t]];
            }
            return e;
          });
      },
      827: (e, t, r) => {
        "use strict";
        const n = r(169),
          o = r(801),
          s = r(841),
          i = r(215),
          a = r(81),
          u = r(593);
        let c = r(65),
          l = !1;
        const d = eval,
          f = {
            async eval(e) {
              if (((self.precision = 2), !l)) {
                let e = await fetch("./rates.json");
                (c = await e.json()), (l = !0);
              }
              let t = (e = e.replace(/\u200B/g, "")).split("\n"),
                r = Array(t.length),
                n = Math.min((e.match(/\[\[\d+]]/g) || []).length, 100);
              do {
                for (let e = 0; e < t.length; e++) {
                  let n,
                    o = t[e];
                  if (o.startsWith("#"))
                    globalThis["__" + e] = r[e] = new a.RHeader(o.substring(1));
                  else {
                    if (
                      ((o = o.replace(/\[\[(-?\d+)]]/g, (t, r) => {
                        let n = parseInt(r);
                        return "__" + (e + n).toString();
                      })),
                      o.startsWith("\t"))
                    )
                      try {
                        n = d(o);
                      } catch (e) {
                        console.log(o, ":", e.message), (n = void 0);
                      }
                    else
                      n = i
                        .parse(s.lex(o))
                        .evaluate({ rates: c || {}, answers: r, line: e });
                    globalThis["__" + e] = r[e] = n;
                  }
                }
              } while (n-- > 0);
              return r.map(h);
            },
          };
        function h(e) {
          if (e instanceof a.RNumber) {
            if (null != e.tag) {
              let t = e.value;
              return o.cryptoCurrencies.has(e.tag)
                ? u.twoNonZeroDecimals(t) + " " + e.tag
                : ((t > 1e3 || t < -1e3) && (t = Math.round(t)),
                  h(t) + " " + e.tag);
            }
            return h(e.value);
          }
          return e instanceof a.RPercentage
            ? e.value + "%"
            : e instanceof a.Nothing || e instanceof a.RHeader || void 0 === e
            ? ""
            : "number" == typeof e
            ? Number.isNaN(e)
              ? ""
              : Number.isInteger(e)
              ? u.numberWithSpaces(e).toString()
              : u.roundFloatingPointError(e, self.precision).toString()
            : JSON.stringify(e);
        }
        n.expose(f);
      },
      65: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"AED":20.6791,"AFN":0.9832,"ALL":0.7458,"AMD":0.1462,"ANG":42.3657,"AOA":0.1158,"ARS":0.87,"AUD":58.045,"AWG":42.1977,"AZN":44.6588,"BAM":47.152,"BBD":37.978,"BCH":31275.971734257706,"BDT":0.8958,"BGN":47.1254,"BHD":201.4504,"BIF":0.0388,"BMD":75.9532,"BNB":3391.998639615424,"BND":57.2246,"BOB":11.0133,"BRL":13.9055,"BSD":75.9532,"BTC":2607310.660157834,"BTN":1.0432,"BWP":6.8854,"BYN":29.0419,"BYR":0.003122,"BZD":37.7273,"CAD":59.4495,"CDF":0.0384,"CHF":85.2878,"CLF":2849.0028,"CLP":0.1034,"CNH":11.7816,"CNY":11.8168,"COP":0.0214,"CRC":0.124,"CSK":3.026894,"CUC":75.9532,"CUP":2.9497,"CVE":0.8335,"CZK":3.5397,"DAI":75.96700643729805,"DASH":7992.413048158658,"DJF":0.4267,"DKK":12.3937,"DOGE":2.0416523121433667,"DOP":1.3089,"DZD":0.5711,"EGP":4.8353,"EOS":221.56775940786267,"ERN":5.0637,"ETB":1.9278,"ETH":104508.04150710629,"EUR":92.1914,"FJD":37.255,"FKP":104.1558,"GBP":104.1558,"GEL":22.9816,"GHS":12.9949,"GIP":104.1558,"GMD":1.4749,"GNF":0.0075,"GTQ":9.7747,"GYD":0.3641,"HKD":9.7966,"HNL":3.1283,"HRK":12.1809,"HTG":1.0483,"HUF":0.2579,"HUSD":75.9532,"IDR":0.0054,"ILS":23.1922,"INR":1.0418,"IQD":0.0519,"IRR":0.0018,"ISK":0.5906,"JMD":0.52,"JOD":107.1352,"JPY":0.7255,"KES":0.6896,"KGS":0.9049,"KHR":0.0187,"KMF":0.1872,"KPW":0.0844,"KRW":0.0679,"KWD":250.8151,"KYD":91.2575,"KZT":0.1794,"LAK":0.0081,"LBP":0.05,"LKR":0.3987,"LRD":0.4455,"LSL":5.0235,"LTC":10141.042882247075,"LTL":22.210916,"LVL":109.119826,"LYD":17.0465,"MAD":8.4866,"MDL":4.3982,"MGA":0.0201,"MKD":1.4937,"MMK":0.0572,"MNT":0.0266,"MOP":9.5225,"MRO":0.2128,"MUR":1.9182,"MVR":4.9321,"MWK":0.0977,"MXN":3.6889,"MYR":18.7892,"MZN":1.0094,"NAD":5.0235,"NGN":0.1996,"NIO":2.1689,"NOK":8.8737,"NPR":0.652,"NZD":54.6269,"OMR":197.3165,"PAB":75.9532,"PEN":20.8812,"PGK":21.4864,"PHP":1.5802,"PKR":0.474,"PLN":20.3849,"PYG":0.0109,"QAR":20.8625,"QTUM":250.56878826710872,"RMB":11.8168,"RON":18.915,"RSD":0.7842,"RUB":1,"RWF":0.0775,"SAR":20.2511,"SBD":9.4692,"SCR":3.5822,"SDG":1.3741,"SEK":9.0859,"SGD":57.1429,"SHP":104.1558,"SLL":0.0075,"SOS":0.1301,"SRD":5.3663,"SSP":0.5831,"STD":0.0037,"STN":3.7142,"SVC":8.6911,"SYP":0.1481,"SZL":5.0235,"THB":2.5433,"TJS":6.674,"TMT":21.6394,"TND":28.1057,"TOP":33.0589,"TRY":10.3836,"TTD":11.1769,"TWD":2.7112,"TZS":0.0328,"UAH":2.6972,"UGX":0.0206,"USD":75.9532,"USDC":75.9532,"USDT":76.0111086750003,"UYU":1.8023,"UZS":0.0072,"VEF":0.0003,"VND":0.0033,"VUV":0.7026,"WAVES":511.5146503949018,"WST":30.077,"XAF":0.1405,"XAG":2050.3988,"XAU":140056.0224,"XCD":28.1049,"XDR":109.4212,"XOF":0.1405,"XPD":169491.5254,"XPF":0.7726,"XPT":81833.0606,"YER":0.3033,"ZAR":5.008,"ZEC":6466.663879704528,"ZMK":0.011666,"ZMW":3.5503,"ZWL":0.2359}'
        );
      },
    },
    t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  (r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.hmd = (e) => (
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
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    r(827);
})();
//# sourceMappingURL=worker.js.map
