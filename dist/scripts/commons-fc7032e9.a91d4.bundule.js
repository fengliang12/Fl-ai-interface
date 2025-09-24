(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [569],
  {
    982: (t, e, n) => {
      'use strict';
      n.d(e, {
        Vw: () => u,
        Id: () => f,
        O8: () => s,
        po: () => d,
        Ow: () => a,
        ZJ: () => c,
        DH: () => i,
        ld: () => l,
      });
      const r =
          'object' == typeof globalThis && 'crypto' in globalThis
            ? globalThis.crypto
            : void 0,
        o = (t) => t instanceof Uint8Array,
        i = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        a = (t, e) => (t << (32 - e)) | (t >>> e);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw new Error('Non little-endian hardware is not supported');
      function c(t) {
        if (
          ('string' == typeof t &&
            (t = (function (t) {
              if ('string' != typeof t)
                throw new Error('utf8ToBytes expected string, got ' + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          !o(t))
        )
          throw new Error('expected Uint8Array, got ' + typeof t);
        return t;
      }
      function f(...t) {
        const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0));
        let n = 0;
        return (
          t.forEach((t) => {
            if (!o(t)) throw new Error('Uint8Array expected');
            (e.set(t, n), (n += t.length));
          }),
          e
        );
      }
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      function l(t) {
        const e = (e) => t().update(c(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function d(t = 32) {
        if (r && 'function' == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(t));
        throw new Error('crypto.getRandomValues must be defined');
      }
    },
    1035: (t, e, n) => {
      'use strict';
      var r = n(5959),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function c(t) {
        return r.isMemo(t) ? s : a[t.$$typeof] || o;
      }
      ((a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[r.Memo] = s));
      var f = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, n, r) {
        if ('string' != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && t(e, o, r);
          }
          var s = u(n);
          l && (s = s.concat(l(n)));
          for (var a = c(e), y = c(n), g = 0; g < s.length; ++g) {
            var b = s[g];
            if (!(i[b] || (r && r[b]) || (y && y[b]) || (a && a[b]))) {
              var w = d(n, b);
              try {
                f(e, b, w);
              } catch (m) {}
            }
          }
        }
        return e;
      };
    },
    1453: (t, e, n) => {
      'use strict';
      function r(t, e) {
        return t.unstable_is ? t.unstable_is(e) : e === t;
      }
      function o(t) {
        return 'init' in t;
      }
      function i(t) {
        return !!t.write;
      }
      function s(t) {
        return 'v' in t || 'e' in t;
      }
      function a(t) {
        if ('e' in t) throw t.e;
        if (!('v' in t)) throw new Error('[Bug] atom state is not initialized');
        return t.v;
      }
      n.d(e, { MO: () => u, ff: () => T });
      const c = new WeakMap();
      function f(t) {
        var e;
        return l(t) && !!(null == (e = c.get(t)) ? void 0 : e[0]);
      }
      function u(t, e) {
        let n = c.get(t);
        if (!n) {
          ((n = [!0, new Set()]), c.set(t, n));
          const e = () => {
            n[0] = !1;
          };
          t.then(e, e);
        }
        n[1].add(e);
      }
      function l(t) {
        return 'function' == typeof (null == t ? void 0 : t.then);
      }
      function d(t, e, n) {
        if (!n.p.has(t)) {
          n.p.add(t);
          const r = () => n.p.delete(t);
          e.then(r, r);
        }
      }
      function h(t, e, n) {
        var r;
        const o = new Set();
        for (const i of (null == (r = n.get(t)) ? void 0 : r.t) || [])
          n.has(i) && o.add(i);
        for (const i of e.p) o.add(i);
        return o;
      }
      const p = (t, e, ...n) => e.read(...n),
        y = (t, e, ...n) => e.write(...n),
        g = (t, e) => {
          var n;
          return null == (n = e.unstable_onInit) ? void 0 : n.call(e, t);
        },
        b = (t, e, n) => {
          var r;
          return null == (r = e.onMount) ? void 0 : r.call(e, n);
        },
        w = (t, e) => {
          const n = j(t),
            r = n[0],
            o = n[9];
          if (!e) throw new Error('Atom is undefined or null');
          let i = r.get(e);
          return (
            i ||
              ((i = { d: new Map(), p: new Set(), n: 0 }),
              r.set(e, i),
              null == o || o(t, e)),
            i
          );
        },
        m = (t) => {
          const e = j(t),
            n = e[1],
            r = e[3],
            o = e[4],
            i = e[5],
            s = e[6],
            a = e[13],
            c = [],
            f = (t) => {
              try {
                t();
              } catch (e) {
                c.push(e);
              }
            };
          do {
            s.f && f(s.f);
            const e = new Set(),
              c = e.add.bind(e);
            (r.forEach((t) => {
              var e;
              return null == (e = n.get(t)) ? void 0 : e.l.forEach(c);
            }),
              r.clear(),
              i.forEach(c),
              i.clear(),
              o.forEach(c),
              o.clear(),
              e.forEach(f),
              r.size && a(t));
          } while (r.size || i.size || o.size);
          if (c.length) throw new AggregateError(c);
        },
        v = (t) => {
          const e = j(t),
            n = e[1],
            r = e[2],
            o = e[3],
            i = e[11],
            s = e[14],
            a = e[17],
            c = [],
            f = new WeakSet(),
            u = new WeakSet(),
            l = Array.from(o);
          for (; l.length; ) {
            const e = l[l.length - 1],
              o = i(t, e);
            if (u.has(e)) l.pop();
            else if (f.has(e)) {
              if (r.get(e) === o.n) c.push([e, o]);
              else if (r.has(e))
                throw new Error('[Bug] invalidated atom exists');
              (u.add(e), l.pop());
            } else {
              f.add(e);
              for (const t of h(e, o, n)) f.has(t) || l.push(t);
            }
          }
          for (let d = c.length - 1; d >= 0; --d) {
            const [e, n] = c[d];
            let i = !1;
            for (const t of n.d.keys())
              if (t !== e && o.has(t)) {
                i = !0;
                break;
              }
            (i && (s(t, e), a(t, e)), r.delete(e));
          }
        },
        E = (t, e) => {
          var n;
          const c = j(t),
            h = c[1],
            p = c[2],
            y = c[3],
            g = c[6],
            b = c[7],
            w = c[11],
            m = c[12],
            v = c[13],
            E = c[14],
            x = c[16],
            A = c[17],
            O = w(t, e);
          if (s(O)) {
            if (h.has(e) && p.get(e) !== O.n) return O;
            if (Array.from(O.d).every(([e, n]) => E(t, e).n === n)) return O;
          }
          O.d.clear();
          let _,
            S,
            I = !0;
          function k() {
            h.has(e) && (A(t, e), v(t), m(t));
          }
          const L = {
              get signal() {
                return (_ || (_ = new AbortController()), _.signal);
              },
              get setSelf() {
                return (
                  i(e),
                  !S &&
                    i(e) &&
                    (S = (...n) => {
                      if (!I)
                        try {
                          return x(t, e, ...n);
                        } finally {
                          (v(t), m(t));
                        }
                    }),
                  S
                );
              },
            },
            P = O.n;
          try {
            const n = b(
              t,
              e,
              function (n) {
                var i;
                if (r(e, n)) {
                  const e = w(t, n);
                  if (!s(e)) {
                    if (!o(n)) throw new Error('no atom init');
                    B(t, n, n.init);
                  }
                  return a(e);
                }
                const c = E(t, n);
                try {
                  return a(c);
                } finally {
                  (O.d.set(n, c.n),
                    f(O.v) && d(e, O.v, c),
                    null == (i = h.get(n)) || i.t.add(e),
                    I || k());
                }
              },
              L
            );
            return (
              B(t, e, n),
              l(n) &&
                (u(n, () => (null == _ ? void 0 : _.abort())), n.then(k, k)),
              O
            );
          } catch (T) {
            return (delete O.v, (O.e = T), ++O.n, O);
          } finally {
            ((I = !1),
              P !== O.n &&
                p.get(e) === P &&
                (p.set(e, O.n), y.add(e), null == (n = g.c) || n.call(g, e)));
          }
        },
        x = (t, e) => {
          const n = j(t),
            r = n[1],
            o = n[2],
            i = n[11],
            s = [e];
          for (; s.length; ) {
            const e = s.pop(),
              n = i(t, e);
            for (const a of h(e, n, r)) {
              const e = i(t, a);
              (o.set(a, e.n), s.push(a));
            }
          }
        },
        A = (t, e, ...n) => {
          const i = j(t),
            s = i[3],
            c = i[6],
            f = i[8],
            u = i[11],
            l = i[12],
            d = i[13],
            h = i[14],
            p = i[15],
            y = i[17];
          let g = !0;
          const b = (e) => a(h(t, e)),
            w = (n, ...i) => {
              var a;
              const f = u(t, n);
              try {
                if (r(e, n)) {
                  if (!o(n)) throw new Error('atom not writable');
                  const e = f.n,
                    r = i[0];
                  return (
                    B(t, n, r),
                    y(t, n),
                    void (
                      e !== f.n &&
                      (s.add(n), null == (a = c.c) || a.call(c, n), p(t, n))
                    )
                  );
                }
                return A(t, n, ...i);
              } finally {
                g || (d(t), l(t));
              }
            };
          try {
            return f(t, e, b, w, ...n);
          } finally {
            g = !1;
          }
        },
        O = (t, e) => {
          var n;
          const r = j(t),
            o = r[1],
            i = r[3],
            s = r[6],
            a = r[11],
            c = r[15],
            u = r[18],
            l = r[19],
            d = a(t, e),
            h = o.get(e);
          if (h && !f(d.v)) {
            for (const [r, o] of d.d)
              if (!h.d.has(r)) {
                const f = a(t, r);
                (u(t, r).t.add(e),
                  h.d.add(r),
                  o !== f.n &&
                    (i.add(r), null == (n = s.c) || n.call(s, r), c(t, r)));
              }
            for (const n of h.d || [])
              if (!d.d.has(n)) {
                h.d.delete(n);
                const r = l(t, n);
                null == r || r.t.delete(e);
              }
          }
        },
        _ = (t, e) => {
          var n;
          const r = j(t),
            o = r[1],
            s = r[4],
            a = r[6],
            c = r[10],
            f = r[11],
            u = r[12],
            l = r[13],
            d = r[14],
            h = r[16],
            p = f(t, e);
          let y = o.get(e);
          if (!y) {
            d(t, e);
            for (const n of p.d.keys()) _(t, n).t.add(e);
            if (
              ((y = { l: new Set(), d: new Set(p.d.keys()), t: new Set() }),
              o.set(e, y),
              null == (n = a.m) || n.call(a, e),
              i(e))
            ) {
              const n = () => {
                let n = !0;
                const r = (...r) => {
                  try {
                    return h(t, e, ...r);
                  } finally {
                    n || (l(t), u(t));
                  }
                };
                try {
                  const o = c(t, e, r);
                  o &&
                    (y.u = () => {
                      n = !0;
                      try {
                        o();
                      } finally {
                        n = !1;
                      }
                    });
                } finally {
                  n = !1;
                }
              };
              s.add(n);
            }
          }
          return y;
        },
        S = (t, e) => {
          var n;
          const r = j(t),
            o = r[1],
            i = r[5],
            s = r[6],
            a = r[11],
            c = r[19],
            f = a(t, e);
          let u = o.get(e);
          if (
            !u ||
            u.l.size ||
            Array.from(u.t).some((t) => {
              var n;
              return null == (n = o.get(t)) ? void 0 : n.d.has(e);
            })
          )
            return u;
          (u.u && i.add(u.u),
            (u = void 0),
            o.delete(e),
            null == (n = s.u) || n.call(s, e));
          for (const l of f.d.keys()) {
            const n = c(t, l);
            null == n || n.t.delete(e);
          }
        },
        B = (t, e, n) => {
          const r = j(t)[11],
            o = r(t, e),
            i = 'v' in o,
            s = o.v;
          if (l(n)) for (const a of o.d.keys()) d(e, n, r(t, a));
          ((o.v = n),
            delete o.e,
            (i && Object.is(s, o.v)) ||
              (++o.n,
              l(s) &&
                (function (t) {
                  const e = c.get(t);
                  (null == e ? void 0 : e[0]) &&
                    ((e[0] = !1), e[1].forEach((t) => t()));
                })(s)));
        },
        I = (t, e) => a((0, j(t)[14])(t, e)),
        k = (t, e, ...n) => {
          const r = j(t),
            o = r[12],
            i = r[13],
            s = r[16];
          try {
            return s(t, e, ...n);
          } finally {
            (i(t), o(t));
          }
        },
        L = (t, e, n) => {
          const r = j(t),
            o = r[12],
            i = r[18],
            s = r[19],
            a = i(t, e).l;
          return (
            a.add(n),
            o(t),
            () => {
              (a.delete(n), s(t, e), o(t));
            }
          );
        },
        P = new WeakMap();
      function j(t) {
        const e = P.get(t);
        if (!e)
          throw new Error(
            'Store must be created by buildStore to read its building blocks'
          );
        return e;
      }
      function T(...t) {
        const e = {
            get: (t) => (0, j(e)[21])(e, t),
            set: (t, ...n) => (0, j(e)[22])(e, t, ...n),
            sub: (t, n) => (0, j(e)[23])(e, t, n),
          },
          n = [
            new WeakMap(),
            new WeakMap(),
            new WeakMap(),
            new Set(),
            new Set(),
            new Set(),
            {},
            p,
            y,
            g,
            b,
            w,
            m,
            v,
            E,
            x,
            A,
            O,
            _,
            S,
            B,
            I,
            k,
            L,
          ].map((e, n) => t[n] || e);
        return (P.set(e, Object.freeze(n)), e);
      }
    },
    2260: (t) => {
      t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    },
    2736: (t, e, n) => {
      var r = n(5959);
      t.exports = n(2858)(r.isElement, !0);
    },
    2858: (t, e, n) => {
      'use strict';
      var r,
        o = n(5959),
        i = n(4059),
        s = n(2985),
        a = n(2260),
        c = n(6720);
      function f() {
        return null;
      }
      ((r = function (t) {
        var e = 'Warning: ' + t;
        try {
          throw new Error(e);
        } catch (n) {}
      }),
        (t.exports = function (t, e) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            u = '<<anonymous>>',
            l = {
              array: y('array'),
              bigint: y('bigint'),
              bool: y('boolean'),
              func: y('function'),
              number: y('number'),
              object: y('object'),
              string: y('string'),
              symbol: y('symbol'),
              any: p(f),
              arrayOf: function (t) {
                return p(function (e, n, r, o, i) {
                  if ('function' != typeof t)
                    return new h(
                      'Property `' +
                        i +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside arrayOf.'
                    );
                  var a = e[n];
                  if (!Array.isArray(a))
                    return new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        w(a) +
                        '` supplied to `' +
                        r +
                        '`, expected an array.'
                    );
                  for (var c = 0; c < a.length; c++) {
                    var f = t(a, c, r, o, i + '[' + c + ']', s);
                    if (f instanceof Error) return f;
                  }
                  return null;
                });
              },
              element: p(function (e, n, r, o, i) {
                var s = e[n];
                return t(s)
                  ? null
                  : new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        w(s) +
                        '` supplied to `' +
                        r +
                        '`, expected a single ReactElement.'
                    );
              }),
              elementType: p(function (t, e, n, r, i) {
                var s = t[e];
                return o.isValidElementType(s)
                  ? null
                  : new h(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        w(s) +
                        '` supplied to `' +
                        n +
                        '`, expected a single ReactElement type.'
                    );
              }),
              instanceOf: function (t) {
                return p(function (e, n, r, o, i) {
                  if (!(e[n] instanceof t)) {
                    var s = t.name || u;
                    return new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        ((a = e[n]).constructor && a.constructor.name
                          ? a.constructor.name
                          : u) +
                        '` supplied to `' +
                        r +
                        '`, expected instance of `' +
                        s +
                        '`.'
                    );
                  }
                  var a;
                  return null;
                });
              },
              node: p(function (t, e, n, r, o) {
                return b(t[e])
                  ? null
                  : new h(
                      'Invalid ' +
                        r +
                        ' `' +
                        o +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.'
                    );
              }),
              objectOf: function (t) {
                return p(function (e, n, r, o, i) {
                  if ('function' != typeof t)
                    return new h(
                      'Property `' +
                        i +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside objectOf.'
                    );
                  var c = e[n],
                    f = w(c);
                  if ('object' !== f)
                    return new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        f +
                        '` supplied to `' +
                        r +
                        '`, expected an object.'
                    );
                  for (var u in c)
                    if (a(c, u)) {
                      var l = t(c, u, r, o, i + '.' + u, s);
                      if (l instanceof Error) return l;
                    }
                  return null;
                });
              },
              oneOf: function (t) {
                return Array.isArray(t)
                  ? p(function (e, n, r, o, i) {
                      for (var s = e[n], a = 0; a < t.length; a++)
                        if (d(s, t[a])) return null;
                      var c = JSON.stringify(t, function (t, e) {
                        return 'symbol' === m(e) ? String(e) : e;
                      });
                      return new h(
                        'Invalid ' +
                          o +
                          ' `' +
                          i +
                          '` of value `' +
                          String(s) +
                          '` supplied to `' +
                          r +
                          '`, expected one of ' +
                          c +
                          '.'
                      );
                    })
                  : (r(
                      arguments.length > 1
                        ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                            arguments.length +
                            ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                        : 'Invalid argument supplied to oneOf, expected an array.'
                    ),
                    f);
              },
              oneOfType: function (t) {
                if (!Array.isArray(t))
                  return (
                    r(
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    ),
                    f
                  );
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  if ('function' != typeof n)
                    return (
                      r(
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                          v(n) +
                          ' at index ' +
                          e +
                          '.'
                      ),
                      f
                    );
                }
                return p(function (e, n, r, o, i) {
                  for (var c = [], f = 0; f < t.length; f++) {
                    var u = (0, t[f])(e, n, r, o, i, s);
                    if (null == u) return null;
                    u.data &&
                      a(u.data, 'expectedType') &&
                      c.push(u.data.expectedType);
                  }
                  return new h(
                    'Invalid ' +
                      o +
                      ' `' +
                      i +
                      '` supplied to `' +
                      r +
                      '`' +
                      (c.length > 0
                        ? ', expected one of type [' + c.join(', ') + ']'
                        : '') +
                      '.'
                  );
                });
              },
              shape: function (t) {
                return p(function (e, n, r, o, i) {
                  var a = e[n],
                    c = w(a);
                  if ('object' !== c)
                    return new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  for (var f in t) {
                    var u = t[f];
                    if ('function' != typeof u) return g(r, o, i, f, m(u));
                    var l = u(a, f, r, o, i + '.' + f, s);
                    if (l) return l;
                  }
                  return null;
                });
              },
              exact: function (t) {
                return p(function (e, n, r, o, c) {
                  var f = e[n],
                    u = w(f);
                  if ('object' !== u)
                    return new h(
                      'Invalid ' +
                        o +
                        ' `' +
                        c +
                        '` of type `' +
                        u +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  var l = i({}, e[n], t);
                  for (var d in l) {
                    var p = t[d];
                    if (a(t, d) && 'function' != typeof p)
                      return g(r, o, c, d, m(p));
                    if (!p)
                      return new h(
                        'Invalid ' +
                          o +
                          ' `' +
                          c +
                          '` key `' +
                          d +
                          '` supplied to `' +
                          r +
                          '`.\nBad object: ' +
                          JSON.stringify(e[n], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(t), null, '  ')
                      );
                    var y = p(f, d, r, o, c + '.' + d, s);
                    if (y) return y;
                  }
                  return null;
                });
              },
            };
          function d(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
          }
          function h(t, e) {
            ((this.message = t),
              (this.data = e && 'object' == typeof e ? e : {}),
              (this.stack = ''));
          }
          function p(t) {
            var n = {},
              o = 0;
            function i(i, a, c, f, l, d, p) {
              if (((f = f || u), (d = d || c), p !== s)) {
                if (e) {
                  var y = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((y.name = 'Invariant Violation'), y);
                }
                if ('undefined' != typeof console) {
                  var g = f + ':' + c;
                  !n[g] &&
                    o < 3 &&
                    (r(
                      'You are manually calling a React.PropTypes validation function for the `' +
                        d +
                        '` prop on `' +
                        f +
                        '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                    ),
                    (n[g] = !0),
                    o++);
                }
              }
              return null == a[c]
                ? i
                  ? null === a[c]
                    ? new h(
                        'The ' +
                          l +
                          ' `' +
                          d +
                          '` is marked as required in `' +
                          f +
                          '`, but its value is `null`.'
                      )
                    : new h(
                        'The ' +
                          l +
                          ' `' +
                          d +
                          '` is marked as required in `' +
                          f +
                          '`, but its value is `undefined`.'
                      )
                  : null
                : t(a, c, f, l, d);
            }
            var a = i.bind(null, !1);
            return ((a.isRequired = i.bind(null, !0)), a);
          }
          function y(t) {
            return p(function (e, n, r, o, i, s) {
              var a = e[n];
              return w(a) !== t
                ? new h(
                    'Invalid ' +
                      o +
                      ' `' +
                      i +
                      '` of type `' +
                      m(a) +
                      '` supplied to `' +
                      r +
                      '`, expected `' +
                      t +
                      '`.',
                    { expectedType: t }
                  )
                : null;
            });
          }
          function g(t, e, n, r, o) {
            return new h(
              (t || 'React class') +
                ': ' +
                e +
                ' type `' +
                n +
                '.' +
                r +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                o +
                '`.'
            );
          }
          function b(e) {
            switch (typeof e) {
              case 'number':
              case 'string':
              case 'undefined':
                return !0;
              case 'boolean':
                return !e;
              case 'object':
                if (Array.isArray(e)) return e.every(b);
                if (null === e || t(e)) return !0;
                var r = (function (t) {
                  var e = t && ((n && t[n]) || t['@@iterator']);
                  if ('function' == typeof e) return e;
                })(e);
                if (!r) return !1;
                var o,
                  i = r.call(e);
                if (r !== e.entries) {
                  for (; !(o = i.next()).done; ) if (!b(o.value)) return !1;
                } else
                  for (; !(o = i.next()).done; ) {
                    var s = o.value;
                    if (s && !b(s[1])) return !1;
                  }
                return !0;
              default:
                return !1;
            }
          }
          function w(t) {
            var e = typeof t;
            return Array.isArray(t)
              ? 'array'
              : t instanceof RegExp
                ? 'object'
                : (function (t, e) {
                      return (
                        'symbol' === t ||
                        (!!e &&
                          ('Symbol' === e['@@toStringTag'] ||
                            ('function' == typeof Symbol &&
                              e instanceof Symbol)))
                      );
                    })(e, t)
                  ? 'symbol'
                  : e;
          }
          function m(t) {
            if (null == t) return '' + t;
            var e = w(t);
            if ('object' === e) {
              if (t instanceof Date) return 'date';
              if (t instanceof RegExp) return 'regexp';
            }
            return e;
          }
          function v(t) {
            var e = m(t);
            switch (e) {
              case 'array':
              case 'object':
                return 'an ' + e;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + e;
              default:
                return e;
            }
          }
          return (
            (h.prototype = Error.prototype),
            (l.checkPropTypes = c),
            (l.resetWarningCache = c.resetWarningCache),
            (l.PropTypes = l),
            l
          );
        }));
    },
    2985: (t) => {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    3226: (t, e, n) => {
      'use strict';
      n.d(e, { fp: () => y });
      var r = n(9729),
        o = n(4566),
        i = n(1453);
      const s = (0, r.createContext)(void 0);
      function a(t) {
        const e = (0, r.useContext)(s);
        return (null == t ? void 0 : t.store) || e || (0, o.zp)();
      }
      const c = (t) => 'function' == typeof (null == t ? void 0 : t.then),
        f = (t) => {
          t.status ||
            ((t.status = 'pending'),
            t.then(
              (e) => {
                ((t.status = 'fulfilled'), (t.value = e));
              },
              (e) => {
                ((t.status = 'rejected'), (t.reason = e));
              }
            ));
        },
        u =
          r.use ||
          ((t) => {
            if ('pending' === t.status) throw t;
            if ('fulfilled' === t.status) return t.value;
            throw 'rejected' === t.status ? t.reason : (f(t), t);
          }),
        l = new WeakMap(),
        d = (t, e) => {
          let n = l.get(t);
          return (
            n ||
              ((n = new Promise((r, o) => {
                let s = t;
                const a = (t) => (e) => {
                    s === t && r(e);
                  },
                  f = (t) => (e) => {
                    s === t && o(e);
                  },
                  u = () => {
                    try {
                      const t = e();
                      c(t)
                        ? (l.set(t, n),
                          (s = t),
                          t.then(a(t), f(t)),
                          (0, i.MO)(t, u))
                        : r(t);
                    } catch (t) {
                      o(t);
                    }
                  };
                (t.then(a(t), f(t)), (0, i.MO)(t, u));
              })),
              l.set(t, n)),
            n
          );
        };
      function h(t, e) {
        const { delay: n, unstable_promiseStatus: o = !r.use } = e || {},
          i = a(e),
          [[s, l, h], p] = (0, r.useReducer)(
            (e) => {
              const n = i.get(t);
              return Object.is(e[0], n) && e[1] === i && e[2] === t
                ? e
                : [n, i, t];
            },
            void 0,
            () => [i.get(t), i, t]
          );
        let y = s;
        if (
          ((l === i && h === t) || (p(), (y = i.get(t))),
          (0, r.useEffect)(() => {
            const e = i.sub(t, () => {
              if (o)
                try {
                  const e = i.get(t);
                  c(e) && f(d(e, () => i.get(t)));
                } catch (e) {}
              'number' != typeof n ? p() : setTimeout(p, n);
            });
            return (p(), e);
          }, [i, t, n, o]),
          (0, r.useDebugValue)(y),
          c(y))
        ) {
          const e = d(y, () => i.get(t));
          return (o && f(e), u(e));
        }
        return y;
      }
      function p(t, e) {
        const n = a(e);
        return (0, r.useCallback)(
          (...e) => {
            if (!('write' in t)) throw new Error('not writable atom');
            return n.set(t, ...e);
          },
          [n, t]
        );
      }
      function y(t, e) {
        return [h(t, e), p(t, e)];
      }
    },
    3526: (t, e, n) => {
      'use strict';
      function r(t) {
        var e,
          n,
          o = '';
        if ('string' == typeof t || 'number' == typeof t) o += t;
        else if ('object' == typeof t)
          if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++)
              t[e] && (n = r(t[e])) && (o && (o += ' '), (o += n));
          } else for (n in t) t[n] && (o && (o += ' '), (o += n));
        return o;
      }
      n.d(e, { A: () => o });
      const o = function () {
        for (var t, e, n = 0, o = '', i = arguments.length; n < i; n++)
          (t = arguments[n]) && (e = r(t)) && (o && (o += ' '), (o += e));
        return o;
      };
    },
    4059: (t) => {
      'use strict';
      var e = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      t.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function (t) {
                return e[t];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (t) {
              r[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, o) {
            for (
              var i,
                s,
                a = (function (t) {
                  if (null == t)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined'
                    );
                  return Object(t);
                })(t),
                c = 1;
              c < arguments.length;
              c++
            ) {
              for (var f in (i = Object(arguments[c])))
                n.call(i, f) && (a[f] = i[f]);
              if (e) {
                s = e(i);
                for (var u = 0; u < s.length; u++)
                  r.call(i, s[u]) && (a[s[u]] = i[s[u]]);
              }
            }
            return a;
          };
    },
    4486: (t, e, n) => {
      'use strict';
      n.d(e, {
        Ay: () => l,
        B4: () => c,
        P5: () => a,
        WM: () => f,
        im: () => u,
        lD: () => s,
      });
      const r = BigInt(2 ** 32 - 1),
        o = BigInt(32);
      function i(t, e = !1) {
        return e
          ? { h: Number(t & r), l: Number((t >> o) & r) }
          : { h: 0 | Number((t >> o) & r), l: 0 | Number(t & r) };
      }
      function s(t, e = !1) {
        let n = new Uint32Array(t.length),
          r = new Uint32Array(t.length);
        for (let o = 0; o < t.length; o++) {
          const { h: s, l: a } = i(t[o], e);
          [n[o], r[o]] = [s, a];
        }
        return [n, r];
      }
      const a = (t, e, n) => (t << n) | (e >>> (32 - n)),
        c = (t, e, n) => (e << n) | (t >>> (32 - n)),
        f = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        u = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
        l = {
          fromBig: i,
          split: s,
          toBig: (t, e) => (BigInt(t >>> 0) << o) | BigInt(e >>> 0),
          shrSH: (t, e, n) => t >>> n,
          shrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrSH: (t, e, n) => (t >>> n) | (e << (32 - n)),
          rotrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrBH: (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
          rotrBL: (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
          rotr32H: (t, e) => e,
          rotr32L: (t, e) => t,
          rotlSH: a,
          rotlSL: c,
          rotlBH: f,
          rotlBL: u,
          add: function (t, e, n, r) {
            const o = (e >>> 0) + (r >>> 0);
            return { h: (t + n + ((o / 2 ** 32) | 0)) | 0, l: 0 | o };
          },
          add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
          add3H: (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
          add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
          add4H: (t, e, n, r, o) => (e + n + r + o + ((t / 2 ** 32) | 0)) | 0,
          add5H: (t, e, n, r, o, i) =>
            (e + n + r + o + i + ((t / 2 ** 32) | 0)) | 0,
          add5L: (t, e, n, r, o) =>
            (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0),
        };
    },
    4566: (t, e, n) => {
      'use strict';
      n.d(e, { eU: () => a, zp: () => u });
      var r = n(1453);
      let o,
        i,
        s = 0;
      function a(t, e) {
        const n = 'atom' + ++s,
          r = {
            toString() {
              return this.debugLabel ? n + ':' + this.debugLabel : n;
            },
          };
        return (
          'function' == typeof t
            ? (r.read = t)
            : ((r.init = t), (r.read = c), (r.write = f)),
          e && (r.write = e),
          r
        );
      }
      function c(t) {
        return t(this);
      }
      function f(t, e, n) {
        return e(this, 'function' == typeof n ? n(t(this)) : n);
      }
      function u() {
        return (
          i ||
            ((i = o ? o() : (0, r.ff)()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = i),
            globalThis.__JOTAI_DEFAULT_STORE__),
          i
        );
      }
    },
    4711: (t, e, n) => {
      'use strict';
      n.d(e, { bI: () => st });
      var r = {};
      (n.r(r),
        n.d(r, {
          OG: () => w,
          My: () => f,
          Ph: () => d,
          lX: () => h,
          Id: () => b,
          fg: () => E,
          qj: () => g,
          aT: () => l,
          lq: () => p,
          z: () => y,
          Q5: () => A,
        }));
      var o = n(5671);
      BigInt(0);
      const i = BigInt(1),
        s = BigInt(2),
        a = (t) => t instanceof Uint8Array,
        c = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, '0')
        );
      function f(t) {
        if (!a(t)) throw new Error('Uint8Array expected');
        let e = '';
        for (let n = 0; n < t.length; n++) e += c[t[n]];
        return e;
      }
      function u(t) {
        if ('string' != typeof t)
          throw new Error('hex string expected, got ' + typeof t);
        return BigInt('' === t ? '0' : `0x${t}`);
      }
      function l(t) {
        if ('string' != typeof t)
          throw new Error('hex string expected, got ' + typeof t);
        const e = t.length;
        if (e % 2)
          throw new Error(
            'padded hex string expected, got unpadded hex of length ' + e
          );
        const n = new Uint8Array(e / 2);
        for (let r = 0; r < n.length; r++) {
          const e = 2 * r,
            o = t.slice(e, e + 2),
            i = Number.parseInt(o, 16);
          if (Number.isNaN(i) || i < 0)
            throw new Error('Invalid byte sequence');
          n[r] = i;
        }
        return n;
      }
      function d(t) {
        return u(f(t));
      }
      function h(t) {
        if (!a(t)) throw new Error('Uint8Array expected');
        return u(f(Uint8Array.from(t).reverse()));
      }
      function p(t, e) {
        return l(t.toString(16).padStart(2 * e, '0'));
      }
      function y(t, e) {
        return p(t, e).reverse();
      }
      function g(t, e, n) {
        let r;
        if ('string' == typeof e)
          try {
            r = l(e);
          } catch (i) {
            throw new Error(
              `${t} must be valid hex string, got "${e}". Cause: ${i}`
            );
          }
        else {
          if (!a(e)) throw new Error(`${t} must be hex string or Uint8Array`);
          r = Uint8Array.from(e);
        }
        const o = r.length;
        if ('number' == typeof n && o !== n)
          throw new Error(`${t} expected ${n} bytes, got ${o}`);
        return r;
      }
      function b(...t) {
        const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0));
        let n = 0;
        return (
          t.forEach((t) => {
            if (!a(t)) throw new Error('Uint8Array expected');
            (e.set(t, n), (n += t.length));
          }),
          e
        );
      }
      const w = (t) => (s << BigInt(t - 1)) - i,
        m = (t) => new Uint8Array(t),
        v = (t) => Uint8Array.from(t);
      function E(t, e, n) {
        if ('number' != typeof t || t < 2)
          throw new Error('hashLen must be a number');
        if ('number' != typeof e || e < 2)
          throw new Error('qByteLen must be a number');
        if ('function' != typeof n)
          throw new Error('hmacFn must be a function');
        let r = m(t),
          o = m(t),
          i = 0;
        const s = () => {
            (r.fill(1), o.fill(0), (i = 0));
          },
          a = (...t) => n(o, r, ...t),
          c = (t = m()) => {
            ((o = a(v([0]), t)),
              (r = a()),
              0 !== t.length && ((o = a(v([1]), t)), (r = a())));
          },
          f = () => {
            if (i++ >= 1e3) throw new Error('drbg: tried 1000 values');
            let t = 0;
            const n = [];
            for (; t < e; ) {
              r = a();
              const e = r.slice();
              (n.push(e), (t += r.length));
            }
            return b(...n);
          };
        return (t, e) => {
          let n;
          for (s(), c(t); !(n = e(f())); ) c();
          return (s(), n);
        };
      }
      const x = {
        bigint: (t) => 'bigint' == typeof t,
        function: (t) => 'function' == typeof t,
        boolean: (t) => 'boolean' == typeof t,
        string: (t) => 'string' == typeof t,
        stringOrUint8Array: (t) =>
          'string' == typeof t || t instanceof Uint8Array,
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          'function' == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function A(t, e, n = {}) {
        const r = (e, n, r) => {
          const o = x[n];
          if ('function' != typeof o)
            throw new Error(`Invalid validator "${n}", expected function`);
          const i = t[e];
          if (!((r && void 0 === i) || o(i, t)))
            throw new Error(
              `Invalid param ${String(e)}=${i} (${typeof i}), expected ${n}`
            );
        };
        for (const [o, i] of Object.entries(e)) r(o, i, !1);
        for (const [o, i] of Object.entries(n)) r(o, i, !0);
        return t;
      }
      const O = BigInt(0),
        _ = BigInt(1),
        S = BigInt(2),
        B = BigInt(3),
        I = BigInt(4),
        k = BigInt(5),
        L = BigInt(8);
      function P(t, e) {
        const n = t % e;
        return n >= O ? n : e + n;
      }
      function j(t, e, n) {
        if (n <= O || e < O) throw new Error('Expected power/modulo > 0');
        if (n === _) return O;
        let r = _;
        for (; e > O; )
          (e & _ && (r = (r * t) % n), (t = (t * t) % n), (e >>= _));
        return r;
      }
      function T(t, e, n) {
        let r = t;
        for (; e-- > O; ) ((r *= r), (r %= n));
        return r;
      }
      function H(t, e) {
        if (t === O || e <= O)
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let n = P(t, e),
          r = e,
          o = O,
          i = _,
          s = _,
          a = O;
        for (; n !== O; ) {
          const t = r / n,
            e = r % n,
            c = o - s * t,
            f = i - a * t;
          ((r = n), (n = e), (o = s), (i = a), (s = c), (a = f));
        }
        if (r !== _) throw new Error('invert: does not exist');
        return P(o, e);
      }
      (BigInt(9), BigInt(16));
      const R = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function N(t, e) {
        const n = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
      }
      function F(t) {
        if ('bigint' != typeof t) throw new Error('field order must be bigint');
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function U(t) {
        const e = F(t);
        return e + Math.ceil(e / 2);
      }
      var z = n(5789),
        C = n(982);
      class D extends C.Vw {
        constructor(t, e) {
          (super(), (this.finished = !1), (this.destroyed = !1), (0, z.tW)(t));
          const n = (0, C.ZJ)(e);
          if (
            ((this.iHash = t.create()), 'function' != typeof this.iHash.update)
          )
            throw new Error(
              'Expected instance of class which extends utils.Hash'
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const r = this.blockLen,
            o = new Uint8Array(r);
          o.set(n.length > r ? t.create().update(n).digest() : n);
          for (let i = 0; i < o.length; i++) o[i] ^= 54;
          (this.iHash.update(o), (this.oHash = t.create()));
          for (let i = 0; i < o.length; i++) o[i] ^= 106;
          (this.oHash.update(o), o.fill(0));
        }
        update(t) {
          return ((0, z.t2)(this), this.iHash.update(t), this);
        }
        digestInto(t) {
          ((0, z.t2)(this),
            (0, z.ee)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy());
        }
        digest() {
          const t = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(t), t);
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: n,
            finished: r,
            destroyed: o,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (t.finished = r),
            (t.destroyed = o),
            (t.blockLen = i),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = n._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const q = (t, e, n) => new D(t, e).update(n).digest();
      q.create = (t, e) => new D(t, e);
      const $ = BigInt(0),
        M = BigInt(1);
      function V(t) {
        return (
          A(
            t.Fp,
            R.reduce((t, e) => ((t[e] = 'function'), t), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            })
          ),
          A(
            t,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...N(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      const { Ph: W, aT: Z } = r,
        G = {
          Err: class extends Error {
            constructor(t = '') {
              super(t);
            }
          },
          _parseInt(t) {
            const { Err: e } = G;
            if (t.length < 2 || 2 !== t[0])
              throw new e('Invalid signature integer tag');
            const n = t[1],
              r = t.subarray(2, n + 2);
            if (!n || r.length !== n)
              throw new e('Invalid signature integer: wrong length');
            if (128 & r[0]) throw new e('Invalid signature integer: negative');
            if (0 === r[0] && !(128 & r[1]))
              throw new e(
                'Invalid signature integer: unnecessary leading zero'
              );
            return { d: W(r), l: t.subarray(n + 2) };
          },
          toSig(t) {
            const { Err: e } = G,
              n = 'string' == typeof t ? Z(t) : t;
            if (!(n instanceof Uint8Array)) throw new Error('ui8a expected');
            let r = n.length;
            if (r < 2 || 48 != n[0]) throw new e('Invalid signature tag');
            if (n[1] !== r - 2)
              throw new e('Invalid signature: incorrect length');
            const { d: o, l: i } = G._parseInt(n.subarray(2)),
              { d: s, l: a } = G._parseInt(i);
            if (a.length)
              throw new e('Invalid signature: left bytes after parsing');
            return { r: o, s };
          },
          hexFromSig(t) {
            const e = (t) => (8 & Number.parseInt(t[0], 16) ? '00' + t : t),
              n = (t) => {
                const e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              r = e(n(t.s)),
              o = e(n(t.r)),
              i = r.length / 2,
              s = o.length / 2,
              a = n(i),
              c = n(s);
            return `30${n(s + i + 4)}02${c}${o}02${a}${r}`;
          },
        },
        K = BigInt(0),
        Y = BigInt(1),
        J = (BigInt(2), BigInt(3));
      function X(t) {
        const e = (function (t) {
            const e = V(t);
            return (
              A(
                e,
                { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                {
                  bits2int: 'function',
                  bits2int_modN: 'function',
                  lowS: 'boolean',
                }
              ),
              Object.freeze({ lowS: !0, ...e })
            );
          })(t),
          { Fp: n, n: r } = e,
          o = n.BYTES + 1,
          i = 2 * n.BYTES + 1;
        function s(t) {
          return P(t, r);
        }
        function a(t) {
          return H(t, r);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: u,
            weierstrassEquation: m,
            isWithinCurveOrder: v,
          } = (function (t) {
            const e = (function (t) {
                const e = V(t);
                A(
                  e,
                  { a: 'field', b: 'field' },
                  {
                    allowedPrivateKeyLengths: 'array',
                    wrapPrivateKey: 'boolean',
                    isTorsionFree: 'function',
                    clearCofactor: 'function',
                    allowInfinityPoint: 'boolean',
                    fromBytes: 'function',
                    toBytes: 'function',
                  }
                );
                const { endo: n, Fp: r, a: o } = e;
                if (n) {
                  if (!r.eql(o, r.ZERO))
                    throw new Error(
                      'Endomorphism can only be defined for Koblitz curves that have a=0'
                    );
                  if (
                    'object' != typeof n ||
                    'bigint' != typeof n.beta ||
                    'function' != typeof n.splitScalar
                  )
                    throw new Error(
                      'Expected endomorphism with beta: bigint and splitScalar: function'
                    );
                }
                return Object.freeze({ ...e });
              })(t),
              { Fp: n } = e,
              r =
                e.toBytes ||
                ((t, e, r) => {
                  const o = e.toAffine();
                  return b(
                    Uint8Array.from([4]),
                    n.toBytes(o.x),
                    n.toBytes(o.y)
                  );
                }),
              o =
                e.fromBytes ||
                ((t) => {
                  const e = t.subarray(1);
                  return {
                    x: n.fromBytes(e.subarray(0, n.BYTES)),
                    y: n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES)),
                  };
                });
            function i(t) {
              const { a: r, b: o } = e,
                i = n.sqr(t),
                s = n.mul(i, t);
              return n.add(n.add(s, n.mul(t, r)), o);
            }
            if (!n.eql(n.sqr(e.Gy), i(e.Gx)))
              throw new Error('bad generator point: equation left != right');
            function s(t) {
              return 'bigint' == typeof t && K < t && t < e.n;
            }
            function a(t) {
              if (!s(t))
                throw new Error('Expected valid bigint: 0 < bigint < curve.n');
            }
            function c(t) {
              const {
                allowedPrivateKeyLengths: n,
                nByteLength: r,
                wrapPrivateKey: o,
                n: i,
              } = e;
              if (n && 'bigint' != typeof t) {
                if (
                  (t instanceof Uint8Array && (t = f(t)),
                  'string' != typeof t || !n.includes(t.length))
                )
                  throw new Error('Invalid key');
                t = t.padStart(2 * r, '0');
              }
              let s;
              try {
                s = 'bigint' == typeof t ? t : d(g('private key', t, r));
              } catch (c) {
                throw new Error(
                  `private key must be ${r} bytes, hex or bigint, not ${typeof t}`
                );
              }
              return (o && (s = P(s, i)), a(s), s);
            }
            const u = new Map();
            function l(t) {
              if (!(t instanceof h))
                throw new Error('ProjectivePoint expected');
            }
            class h {
              constructor(t, e, r) {
                if (
                  ((this.px = t),
                  (this.py = e),
                  (this.pz = r),
                  null == t || !n.isValid(t))
                )
                  throw new Error('x required');
                if (null == e || !n.isValid(e)) throw new Error('y required');
                if (null == r || !n.isValid(r)) throw new Error('z required');
              }
              static fromAffine(t) {
                const { x: e, y: r } = t || {};
                if (!t || !n.isValid(e) || !n.isValid(r))
                  throw new Error('invalid affine point');
                if (t instanceof h)
                  throw new Error('projective point not allowed');
                const o = (t) => n.eql(t, n.ZERO);
                return o(e) && o(r) ? h.ZERO : new h(e, r, n.ONE);
              }
              get x() {
                return this.toAffine().x;
              }
              get y() {
                return this.toAffine().y;
              }
              static normalizeZ(t) {
                const e = n.invertBatch(t.map((t) => t.pz));
                return t.map((t, n) => t.toAffine(e[n])).map(h.fromAffine);
              }
              static fromHex(t) {
                const e = h.fromAffine(o(g('pointHex', t)));
                return (e.assertValidity(), e);
              }
              static fromPrivateKey(t) {
                return h.BASE.multiply(c(t));
              }
              _setWindowSize(t) {
                ((this._WINDOW_SIZE = t), u.delete(this));
              }
              assertValidity() {
                if (this.is0()) {
                  if (e.allowInfinityPoint && !n.is0(this.py)) return;
                  throw new Error('bad point: ZERO');
                }
                const { x: t, y: r } = this.toAffine();
                if (!n.isValid(t) || !n.isValid(r))
                  throw new Error('bad point: x or y not FE');
                const o = n.sqr(r),
                  s = i(t);
                if (!n.eql(o, s))
                  throw new Error('bad point: equation left != right');
                if (!this.isTorsionFree())
                  throw new Error('bad point: not in prime-order subgroup');
              }
              hasEvenY() {
                const { y: t } = this.toAffine();
                if (n.isOdd) return !n.isOdd(t);
                throw new Error("Field doesn't support isOdd");
              }
              equals(t) {
                l(t);
                const { px: e, py: r, pz: o } = this,
                  { px: i, py: s, pz: a } = t,
                  c = n.eql(n.mul(e, a), n.mul(i, o)),
                  f = n.eql(n.mul(r, a), n.mul(s, o));
                return c && f;
              }
              negate() {
                return new h(this.px, n.neg(this.py), this.pz);
              }
              double() {
                const { a: t, b: r } = e,
                  o = n.mul(r, J),
                  { px: i, py: s, pz: a } = this;
                let c = n.ZERO,
                  f = n.ZERO,
                  u = n.ZERO,
                  l = n.mul(i, i),
                  d = n.mul(s, s),
                  p = n.mul(a, a),
                  y = n.mul(i, s);
                return (
                  (y = n.add(y, y)),
                  (u = n.mul(i, a)),
                  (u = n.add(u, u)),
                  (c = n.mul(t, u)),
                  (f = n.mul(o, p)),
                  (f = n.add(c, f)),
                  (c = n.sub(d, f)),
                  (f = n.add(d, f)),
                  (f = n.mul(c, f)),
                  (c = n.mul(y, c)),
                  (u = n.mul(o, u)),
                  (p = n.mul(t, p)),
                  (y = n.sub(l, p)),
                  (y = n.mul(t, y)),
                  (y = n.add(y, u)),
                  (u = n.add(l, l)),
                  (l = n.add(u, l)),
                  (l = n.add(l, p)),
                  (l = n.mul(l, y)),
                  (f = n.add(f, l)),
                  (p = n.mul(s, a)),
                  (p = n.add(p, p)),
                  (l = n.mul(p, y)),
                  (c = n.sub(c, l)),
                  (u = n.mul(p, d)),
                  (u = n.add(u, u)),
                  (u = n.add(u, u)),
                  new h(c, f, u)
                );
              }
              add(t) {
                l(t);
                const { px: r, py: o, pz: i } = this,
                  { px: s, py: a, pz: c } = t;
                let f = n.ZERO,
                  u = n.ZERO,
                  d = n.ZERO;
                const p = e.a,
                  y = n.mul(e.b, J);
                let g = n.mul(r, s),
                  b = n.mul(o, a),
                  w = n.mul(i, c),
                  m = n.add(r, o),
                  v = n.add(s, a);
                ((m = n.mul(m, v)),
                  (v = n.add(g, b)),
                  (m = n.sub(m, v)),
                  (v = n.add(r, i)));
                let E = n.add(s, c);
                return (
                  (v = n.mul(v, E)),
                  (E = n.add(g, w)),
                  (v = n.sub(v, E)),
                  (E = n.add(o, i)),
                  (f = n.add(a, c)),
                  (E = n.mul(E, f)),
                  (f = n.add(b, w)),
                  (E = n.sub(E, f)),
                  (d = n.mul(p, v)),
                  (f = n.mul(y, w)),
                  (d = n.add(f, d)),
                  (f = n.sub(b, d)),
                  (d = n.add(b, d)),
                  (u = n.mul(f, d)),
                  (b = n.add(g, g)),
                  (b = n.add(b, g)),
                  (w = n.mul(p, w)),
                  (v = n.mul(y, v)),
                  (b = n.add(b, w)),
                  (w = n.sub(g, w)),
                  (w = n.mul(p, w)),
                  (v = n.add(v, w)),
                  (g = n.mul(b, v)),
                  (u = n.add(u, g)),
                  (g = n.mul(E, v)),
                  (f = n.mul(m, f)),
                  (f = n.sub(f, g)),
                  (g = n.mul(m, b)),
                  (d = n.mul(E, d)),
                  (d = n.add(d, g)),
                  new h(f, u, d)
                );
              }
              subtract(t) {
                return this.add(t.negate());
              }
              is0() {
                return this.equals(h.ZERO);
              }
              wNAF(t) {
                return y.wNAFCached(this, u, t, (t) => {
                  const e = n.invertBatch(t.map((t) => t.pz));
                  return t.map((t, n) => t.toAffine(e[n])).map(h.fromAffine);
                });
              }
              multiplyUnsafe(t) {
                const r = h.ZERO;
                if (t === K) return r;
                if ((a(t), t === Y)) return this;
                const { endo: o } = e;
                if (!o) return y.unsafeLadder(this, t);
                let { k1neg: i, k1: s, k2neg: c, k2: f } = o.splitScalar(t),
                  u = r,
                  l = r,
                  d = this;
                for (; s > K || f > K; )
                  (s & Y && (u = u.add(d)),
                    f & Y && (l = l.add(d)),
                    (d = d.double()),
                    (s >>= Y),
                    (f >>= Y));
                return (
                  i && (u = u.negate()),
                  c && (l = l.negate()),
                  (l = new h(n.mul(l.px, o.beta), l.py, l.pz)),
                  u.add(l)
                );
              }
              multiply(t) {
                a(t);
                let r,
                  o,
                  i = t;
                const { endo: s } = e;
                if (s) {
                  const { k1neg: t, k1: e, k2neg: a, k2: c } = s.splitScalar(i);
                  let { p: f, f: u } = this.wNAF(e),
                    { p: l, f: d } = this.wNAF(c);
                  ((f = y.constTimeNegate(t, f)),
                    (l = y.constTimeNegate(a, l)),
                    (l = new h(n.mul(l.px, s.beta), l.py, l.pz)),
                    (r = f.add(l)),
                    (o = u.add(d)));
                } else {
                  const { p: t, f: e } = this.wNAF(i);
                  ((r = t), (o = e));
                }
                return h.normalizeZ([r, o])[0];
              }
              multiplyAndAddUnsafe(t, e, n) {
                const r = h.BASE,
                  o = (t, e) =>
                    e !== K && e !== Y && t.equals(r)
                      ? t.multiply(e)
                      : t.multiplyUnsafe(e),
                  i = o(this, e).add(o(t, n));
                return i.is0() ? void 0 : i;
              }
              toAffine(t) {
                const { px: e, py: r, pz: o } = this,
                  i = this.is0();
                null == t && (t = i ? n.ONE : n.inv(o));
                const s = n.mul(e, t),
                  a = n.mul(r, t),
                  c = n.mul(o, t);
                if (i) return { x: n.ZERO, y: n.ZERO };
                if (!n.eql(c, n.ONE)) throw new Error('invZ was invalid');
                return { x: s, y: a };
              }
              isTorsionFree() {
                const { h: t, isTorsionFree: n } = e;
                if (t === Y) return !0;
                if (n) return n(h, this);
                throw new Error(
                  'isTorsionFree() has not been declared for the elliptic curve'
                );
              }
              clearCofactor() {
                const { h: t, clearCofactor: n } = e;
                return t === Y
                  ? this
                  : n
                    ? n(h, this)
                    : this.multiplyUnsafe(e.h);
              }
              toRawBytes(t = !0) {
                return (this.assertValidity(), r(h, this, t));
              }
              toHex(t = !0) {
                return f(this.toRawBytes(t));
              }
            }
            ((h.BASE = new h(e.Gx, e.Gy, n.ONE)),
              (h.ZERO = new h(n.ZERO, n.ONE, n.ZERO)));
            const p = e.nBitLength,
              y = (function (t, e) {
                const n = (t, e) => {
                    const n = e.negate();
                    return t ? n : e;
                  },
                  r = (t) => ({
                    windows: Math.ceil(e / t) + 1,
                    windowSize: 2 ** (t - 1),
                  });
                return {
                  constTimeNegate: n,
                  unsafeLadder(e, n) {
                    let r = t.ZERO,
                      o = e;
                    for (; n > $; )
                      (n & M && (r = r.add(o)), (o = o.double()), (n >>= M));
                    return r;
                  },
                  precomputeWindow(t, e) {
                    const { windows: n, windowSize: o } = r(e),
                      i = [];
                    let s = t,
                      a = s;
                    for (let r = 0; r < n; r++) {
                      ((a = s), i.push(a));
                      for (let t = 1; t < o; t++) ((a = a.add(s)), i.push(a));
                      s = a.double();
                    }
                    return i;
                  },
                  wNAF(e, o, i) {
                    const { windows: s, windowSize: a } = r(e);
                    let c = t.ZERO,
                      f = t.BASE;
                    const u = BigInt(2 ** e - 1),
                      l = 2 ** e,
                      d = BigInt(e);
                    for (let t = 0; t < s; t++) {
                      const e = t * a;
                      let r = Number(i & u);
                      ((i >>= d), r > a && ((r -= l), (i += M)));
                      const s = e,
                        h = e + Math.abs(r) - 1,
                        p = t % 2 != 0,
                        y = r < 0;
                      0 === r
                        ? (f = f.add(n(p, o[s])))
                        : (c = c.add(n(y, o[h])));
                    }
                    return { p: c, f };
                  },
                  wNAFCached(t, e, n, r) {
                    const o = t._WINDOW_SIZE || 1;
                    let i = e.get(t);
                    return (
                      i ||
                        ((i = this.precomputeWindow(t, o)),
                        1 !== o && e.set(t, r(i))),
                      this.wNAF(o, i, n)
                    );
                  },
                };
              })(h, e.endo ? Math.ceil(p / 2) : p);
            return {
              CURVE: e,
              ProjectivePoint: h,
              normPrivateKeyToScalar: c,
              weierstrassEquation: i,
              isWithinCurveOrder: s,
            };
          })({
            ...e,
            toBytes(t, e, r) {
              const o = e.toAffine(),
                i = n.toBytes(o.x),
                s = b;
              return r
                ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), i)
                : s(Uint8Array.from([4]), i, n.toBytes(o.y));
            },
            fromBytes(t) {
              const e = t.length,
                r = t[0],
                s = t.subarray(1);
              if (e !== o || (2 !== r && 3 !== r)) {
                if (e === i && 4 === r)
                  return {
                    x: n.fromBytes(s.subarray(0, n.BYTES)),
                    y: n.fromBytes(s.subarray(n.BYTES, 2 * n.BYTES)),
                  };
                throw new Error(
                  `Point of length ${e} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`
                );
              }
              {
                const t = d(s);
                if (!(K < (a = t) && a < n.ORDER))
                  throw new Error('Point is not on curve');
                const e = m(t);
                let o = n.sqrt(e);
                return (
                  !(1 & ~r) != ((o & Y) === Y) && (o = n.neg(o)),
                  { x: t, y: o }
                );
              }
              var a;
            },
          }),
          x = (t) => f(p(t, e.nByteLength));
        function O(t) {
          return t > r >> Y;
        }
        const S = (t, e, n) => d(t.slice(e, n));
        class B {
          constructor(t, e, n) {
            ((this.r = t),
              (this.s = e),
              (this.recovery = n),
              this.assertValidity());
          }
          static fromCompact(t) {
            const n = e.nByteLength;
            return (
              (t = g('compactSignature', t, 2 * n)),
              new B(S(t, 0, n), S(t, n, 2 * n))
            );
          }
          static fromDER(t) {
            const { r: e, s: n } = G.toSig(g('DER', t));
            return new B(e, n);
          }
          assertValidity() {
            if (!v(this.r)) throw new Error('r must be 0 < r < CURVE.n');
            if (!v(this.s)) throw new Error('s must be 0 < s < CURVE.n');
          }
          addRecoveryBit(t) {
            return new B(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const { r, s: o, recovery: i } = this,
              f = j(g('msgHash', t));
            if (null == i || ![0, 1, 2, 3].includes(i))
              throw new Error('recovery id invalid');
            const u = 2 === i || 3 === i ? r + e.n : r;
            if (u >= n.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const l = 1 & i ? '03' : '02',
              d = c.fromHex(l + x(u)),
              h = a(u),
              p = s(-f * h),
              y = s(o * h),
              b = c.BASE.multiplyAndAddUnsafe(d, p, y);
            if (!b) throw new Error('point at infinify');
            return (b.assertValidity(), b);
          }
          hasHighS() {
            return O(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new B(this.r, s(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return l(this.toDERHex());
          }
          toDERHex() {
            return G.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return l(this.toCompactHex());
          }
          toCompactHex() {
            return x(this.r) + x(this.s);
          }
        }
        const I = {
          isValidPrivateKey(t) {
            try {
              return (u(t), !0);
            } catch (e) {
              return !1;
            }
          },
          normPrivateKeyToScalar: u,
          randomPrivateKey: () => {
            const t = U(e.n);
            return (function (t, e, n = !1) {
              const r = t.length,
                o = F(e),
                i = U(e);
              if (r < 16 || r < i || r > 1024)
                throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
              const s = P(n ? d(t) : h(t), e - _) + _;
              return n ? y(s, o) : p(s, o);
            })(e.randomBytes(t), e.n);
          },
          precompute: (t = 8, e = c.BASE) => (
            e._setWindowSize(t),
            e.multiply(BigInt(3)),
            e
          ),
        };
        function k(t) {
          const e = t instanceof Uint8Array,
            n = 'string' == typeof t,
            r = (e || n) && t.length;
          return e
            ? r === o || r === i
            : n
              ? r === 2 * o || r === 2 * i
              : t instanceof c;
        }
        const L =
            e.bits2int ||
            function (t) {
              const n = d(t),
                r = 8 * t.length - e.nBitLength;
              return r > 0 ? n >> BigInt(r) : n;
            },
          j =
            e.bits2int_modN ||
            function (t) {
              return s(L(t));
            },
          T = w(e.nBitLength);
        function R(t) {
          if ('bigint' != typeof t) throw new Error('bigint expected');
          if (!(K <= t && t < T))
            throw new Error(`bigint expected < 2^${e.nBitLength}`);
          return p(t, e.nByteLength);
        }
        const N = { lowS: e.lowS, prehash: !1 },
          z = { lowS: e.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: e,
            getPublicKey: function (t, e = !0) {
              return c.fromPrivateKey(t).toRawBytes(e);
            },
            getSharedSecret: function (t, e, n = !0) {
              if (k(t)) throw new Error('first arg must be private key');
              if (!k(e)) throw new Error('second arg must be public key');
              return c.fromHex(e).multiply(u(t)).toRawBytes(n);
            },
            sign: function (t, r, o = N) {
              const { seed: i, k2sig: f } = (function (t, r, o = N) {
                  if (['recovered', 'canonical'].some((t) => t in o))
                    throw new Error('sign() legacy options not supported');
                  const { hash: i, randomBytes: f } = e;
                  let { lowS: l, prehash: d, extraEntropy: h } = o;
                  (null == l && (l = !0),
                    (t = g('msgHash', t)),
                    d && (t = g('prehashed msgHash', i(t))));
                  const p = j(t),
                    y = u(r),
                    w = [R(y), R(p)];
                  if (null != h) {
                    const t = !0 === h ? f(n.BYTES) : h;
                    w.push(g('extraEntropy', t));
                  }
                  const m = b(...w),
                    E = p;
                  return {
                    seed: m,
                    k2sig: function (t) {
                      const e = L(t);
                      if (!v(e)) return;
                      const n = a(e),
                        r = c.BASE.multiply(e).toAffine(),
                        o = s(r.x);
                      if (o === K) return;
                      const i = s(n * s(E + o * y));
                      if (i === K) return;
                      let f = (r.x === o ? 0 : 2) | Number(r.y & Y),
                        u = i;
                      return (
                        l &&
                          O(i) &&
                          ((u = (function (t) {
                            return O(t) ? s(-t) : t;
                          })(i)),
                          (f ^= 1)),
                        new B(o, u, f)
                      );
                    },
                  };
                })(t, r, o),
                l = e;
              return E(l.hash.outputLen, l.nByteLength, l.hmac)(i, f);
            },
            verify: function (t, n, r, o = z) {
              const i = t;
              if (
                ((n = g('msgHash', n)), (r = g('publicKey', r)), 'strict' in o)
              )
                throw new Error('options.strict was renamed to lowS');
              const { lowS: f, prehash: u } = o;
              let l, d;
              try {
                if ('string' == typeof i || i instanceof Uint8Array)
                  try {
                    l = B.fromDER(i);
                  } catch (E) {
                    if (!(E instanceof G.Err)) throw E;
                    l = B.fromCompact(i);
                  }
                else {
                  if (
                    'object' != typeof i ||
                    'bigint' != typeof i.r ||
                    'bigint' != typeof i.s
                  )
                    throw new Error('PARSE');
                  {
                    const { r: t, s: e } = i;
                    l = new B(t, e);
                  }
                }
                d = c.fromHex(r);
              } catch (x) {
                if ('PARSE' === x.message)
                  throw new Error(
                    'signature must be Signature instance, Uint8Array or hex string'
                  );
                return !1;
              }
              if (f && l.hasHighS()) return !1;
              u && (n = e.hash(n));
              const { r: h, s: p } = l,
                y = j(n),
                b = a(p),
                w = s(y * b),
                m = s(h * b),
                v = c.BASE.multiplyAndAddUnsafe(d, w, m)?.toAffine();
              return !!v && s(v.x) === h;
            },
            ProjectivePoint: c,
            Signature: B,
            utils: I,
          }
        );
      }
      function Q(t) {
        return {
          hash: t,
          hmac: (e, ...n) => q(t, e, (0, C.Id)(...n)),
          randomBytes: C.po,
        };
      }
      BigInt(4);
      const tt = BigInt(
          '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
        ),
        et = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        nt = BigInt(1),
        rt = BigInt(2),
        ot = (t, e) => (t + e / rt) / e;
      const it = (function (t, e, n = !1, r = {}) {
          if (t <= O) throw new Error(`Expected Field ORDER > 0, got ${t}`);
          const { nBitLength: o, nByteLength: i } = N(t, e);
          if (i > 2048)
            throw new Error('Field lengths over 2048 bytes are not supported');
          const s = (function (t) {
              if (t % I === B) {
                const e = (t + _) / I;
                return function (t, n) {
                  const r = t.pow(n, e);
                  if (!t.eql(t.sqr(r), n))
                    throw new Error('Cannot find square root');
                  return r;
                };
              }
              if (t % L === k) {
                const e = (t - k) / L;
                return function (t, n) {
                  const r = t.mul(n, S),
                    o = t.pow(r, e),
                    i = t.mul(n, o),
                    s = t.mul(t.mul(i, S), o),
                    a = t.mul(i, t.sub(s, t.ONE));
                  if (!t.eql(t.sqr(a), n))
                    throw new Error('Cannot find square root');
                  return a;
                };
              }
              return (function (t) {
                const e = (t - _) / S;
                let n, r, o;
                for (n = t - _, r = 0; n % S === O; n /= S, r++);
                for (o = S; o < t && j(o, e, t) !== t - _; o++);
                if (1 === r) {
                  const e = (t + _) / I;
                  return function (t, n) {
                    const r = t.pow(n, e);
                    if (!t.eql(t.sqr(r), n))
                      throw new Error('Cannot find square root');
                    return r;
                  };
                }
                const i = (n + _) / S;
                return function (t, s) {
                  if (t.pow(s, e) === t.neg(t.ONE))
                    throw new Error('Cannot find square root');
                  let a = r,
                    c = t.pow(t.mul(t.ONE, o), n),
                    f = t.pow(s, i),
                    u = t.pow(s, n);
                  for (; !t.eql(u, t.ONE); ) {
                    if (t.eql(u, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(u); e < a && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    const n = t.pow(c, _ << BigInt(a - e - 1));
                    ((c = t.sqr(n)),
                      (f = t.mul(f, n)),
                      (u = t.mul(u, c)),
                      (a = e));
                  }
                  return f;
                };
              })(t);
            })(t),
            a = Object.freeze({
              ORDER: t,
              BITS: o,
              BYTES: i,
              MASK: w(o),
              ZERO: O,
              ONE: _,
              create: (e) => P(e, t),
              isValid: (e) => {
                if ('bigint' != typeof e)
                  throw new Error(
                    'Invalid field element: expected bigint, got ' + typeof e
                  );
                return O <= e && e < t;
              },
              is0: (t) => t === O,
              isOdd: (t) => (t & _) === _,
              neg: (e) => P(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => P(e * e, t),
              add: (e, n) => P(e + n, t),
              sub: (e, n) => P(e - n, t),
              mul: (e, n) => P(e * n, t),
              pow: (t, e) =>
                (function (t, e, n) {
                  if (n < O) throw new Error('Expected power > 0');
                  if (n === O) return t.ONE;
                  if (n === _) return e;
                  let r = t.ONE,
                    o = e;
                  for (; n > O; )
                    (n & _ && (r = t.mul(r, o)), (o = t.sqr(o)), (n >>= _));
                  return r;
                })(a, t, e),
              div: (e, n) => P(e * H(n, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => H(e, t),
              sqrt: r.sqrt || ((t) => s(a, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  const n = new Array(e.length),
                    r = e.reduce(
                      (e, r, o) => (t.is0(r) ? e : ((n[o] = e), t.mul(e, r))),
                      t.ONE
                    ),
                    o = t.inv(r);
                  return (
                    e.reduceRight(
                      (e, r, o) =>
                        t.is0(r) ? e : ((n[o] = t.mul(e, n[o])), t.mul(e, r)),
                      o
                    ),
                    n
                  );
                })(a, t),
              cmov: (t, e, n) => (n ? e : t),
              toBytes: (t) => (n ? y(t, i) : p(t, i)),
              fromBytes: (t) => {
                if (t.length !== i)
                  throw new Error(
                    `Fp.fromBytes: expected ${i}, got ${t.length}`
                  );
                return n ? h(t) : d(t);
              },
            });
          return Object.freeze(a);
        })(tt, void 0, void 0, {
          sqrt: function (t) {
            const e = tt,
              n = BigInt(3),
              r = BigInt(6),
              o = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              c = BigInt(88),
              f = (t * t * t) % e,
              u = (f * f * t) % e,
              l = (T(u, n, e) * u) % e,
              d = (T(l, n, e) * u) % e,
              h = (T(d, rt, e) * f) % e,
              p = (T(h, o, e) * h) % e,
              y = (T(p, i, e) * p) % e,
              g = (T(y, a, e) * y) % e,
              b = (T(g, c, e) * g) % e,
              w = (T(b, a, e) * y) % e,
              m = (T(w, n, e) * u) % e,
              v = (T(m, s, e) * p) % e,
              E = (T(v, r, e) * f) % e,
              x = T(E, rt, e);
            if (!it.eql(it.sqr(x), t))
              throw new Error('Cannot find square root');
            return x;
          },
        }),
        st = (function (t, e) {
          const n = (e) => X({ ...t, ...Q(e) });
          return Object.freeze({ ...n(e), create: n });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: it,
            n: et,
            Gx: BigInt(
              '55066263022277343669578718895168534326250603453777594175500187360389116729240'
            ),
            Gy: BigInt(
              '32670510020758816978083085130507043184471273380659243275938904335757337482424'
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'
              ),
              splitScalar: (t) => {
                const e = et,
                  n = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                  r = -nt * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                  o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  i = n,
                  s = BigInt('0x100000000000000000000000000000000'),
                  a = ot(i * t, e),
                  c = ot(-r * t, e);
                let f = P(t - a * n - c * o, e),
                  u = P(-a * r - c * i, e);
                const l = f > s,
                  d = u > s;
                if ((l && (f = e - f), d && (u = e - u), f > s || u > s))
                  throw new Error('splitScalar: Endomorphism failed, k=' + t);
                return { k1neg: l, k1: f, k2neg: d, k2: u };
              },
            },
          },
          o.s
        );
      (BigInt(0), st.ProjectivePoint);
    },
    5671: (t, e, n) => {
      'use strict';
      n.d(e, { s: () => l });
      var r = n(8571),
        o = n(982);
      const i = (t, e, n) => (t & e) ^ (~t & n),
        s = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
        a = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        c = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        f = new Uint32Array(64);
      class u extends r.D {
        constructor() {
          (super(64, 32, 8, !1),
            (this.A = 0 | c[0]),
            (this.B = 0 | c[1]),
            (this.C = 0 | c[2]),
            (this.D = 0 | c[3]),
            (this.E = 0 | c[4]),
            (this.F = 0 | c[5]),
            (this.G = 0 | c[6]),
            (this.H = 0 | c[7]));
        }
        get() {
          const { A: t, B: e, C: n, D: r, E: o, F: i, G: s, H: a } = this;
          return [t, e, n, r, o, i, s, a];
        }
        set(t, e, n, r, o, i, s, a) {
          ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | o),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(t, e) {
          for (let o = 0; o < 16; o++, e += 4) f[o] = t.getUint32(e, !1);
          for (let i = 16; i < 64; i++) {
            const t = f[i - 15],
              e = f[i - 2],
              n = (0, o.Ow)(t, 7) ^ (0, o.Ow)(t, 18) ^ (t >>> 3),
              r = (0, o.Ow)(e, 17) ^ (0, o.Ow)(e, 19) ^ (e >>> 10);
            f[i] = (r + f[i - 7] + n + f[i - 16]) | 0;
          }
          let { A: n, B: r, C: c, D: u, E: l, F: d, G: h, H: p } = this;
          for (let y = 0; y < 64; y++) {
            const t =
                (p +
                  ((0, o.Ow)(l, 6) ^ (0, o.Ow)(l, 11) ^ (0, o.Ow)(l, 25)) +
                  i(l, d, h) +
                  a[y] +
                  f[y]) |
                0,
              e =
                (((0, o.Ow)(n, 2) ^ (0, o.Ow)(n, 13) ^ (0, o.Ow)(n, 22)) +
                  s(n, r, c)) |
                0;
            ((p = h),
              (h = d),
              (d = l),
              (l = (u + t) | 0),
              (u = c),
              (c = r),
              (r = n),
              (n = (t + e) | 0));
          }
          ((n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (l = (l + this.E) | 0),
            (d = (d + this.F) | 0),
            (h = (h + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(n, r, c, u, l, d, h, p));
        }
        roundClean() {
          f.fill(0);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
        }
      }
      const l = (0, o.ld)(() => new u());
    },
    5699: (t, e, n) => {
      'use strict';
      n.d(e, { lY: () => v });
      var r = n(5789),
        o = n(4486),
        i = n(982);
      const [s, a, c] = [[], [], []],
        f = BigInt(0),
        u = BigInt(1),
        l = BigInt(2),
        d = BigInt(7),
        h = BigInt(256),
        p = BigInt(113);
      for (let E = 0, x = u, A = 1, O = 0; E < 24; E++) {
        (([A, O] = [O, (2 * A + 3 * O) % 5]),
          s.push(2 * (5 * O + A)),
          a.push((((E + 1) * (E + 2)) / 2) % 64));
        let t = f;
        for (let e = 0; e < 7; e++)
          ((x = ((x << u) ^ ((x >> d) * p)) % h),
            x & l && (t ^= u << ((u << BigInt(e)) - u)));
        c.push(t);
      }
      const [y, g] = (0, o.lD)(c, !0),
        b = (t, e, n) => (n > 32 ? (0, o.WM)(t, e, n) : (0, o.P5)(t, e, n)),
        w = (t, e, n) => (n > 32 ? (0, o.im)(t, e, n) : (0, o.B4)(t, e, n));
      class m extends i.Vw {
        constructor(t, e, n, o = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = o),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.ai)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function');
          ((this.state = new Uint8Array(200)),
            (this.state32 = (0, i.DH)(this.state)));
        }
        keccak() {
          (!(function (t, e = 24) {
            const n = new Uint32Array(10);
            for (let r = 24 - e; r < 24; r++) {
              for (let r = 0; r < 10; r++)
                n[r] = t[r] ^ t[r + 10] ^ t[r + 20] ^ t[r + 30] ^ t[r + 40];
              for (let r = 0; r < 10; r += 2) {
                const e = (r + 8) % 10,
                  o = (r + 2) % 10,
                  i = n[o],
                  s = n[o + 1],
                  a = b(i, s, 1) ^ n[e],
                  c = w(i, s, 1) ^ n[e + 1];
                for (let n = 0; n < 50; n += 10)
                  ((t[r + n] ^= a), (t[r + n + 1] ^= c));
              }
              let e = t[2],
                o = t[3];
              for (let n = 0; n < 24; n++) {
                const r = a[n],
                  i = b(e, o, r),
                  c = w(e, o, r),
                  f = s[n];
                ((e = t[f]), (o = t[f + 1]), (t[f] = i), (t[f + 1] = c));
              }
              for (let r = 0; r < 50; r += 10) {
                for (let e = 0; e < 10; e++) n[e] = t[r + e];
                for (let e = 0; e < 10; e++)
                  t[r + e] ^= ~n[(e + 2) % 10] & n[(e + 4) % 10];
              }
              ((t[0] ^= y[r]), (t[1] ^= g[r]));
            }
            n.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0));
        }
        update(t) {
          (0, r.t2)(this);
          const { blockLen: e, state: n } = this,
            o = (t = (0, i.ZJ)(t)).length;
          for (let r = 0; r < o; ) {
            const i = Math.min(e - this.pos, o - r);
            for (let e = 0; e < i; e++) n[this.pos++] ^= t[r++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: t, suffix: e, pos: n, blockLen: r } = this;
          ((t[n] ^= e),
            128 & e && n === r - 1 && this.keccak(),
            (t[r - 1] ^= 128),
            this.keccak());
        }
        writeInto(t) {
          ((0, r.t2)(this, !1), (0, r.ee)(t), this.finish());
          const e = this.state,
            { blockLen: n } = this;
          for (let r = 0, o = t.length; r < o; ) {
            this.posOut >= n && this.keccak();
            const i = Math.min(n - this.posOut, o - r);
            (t.set(e.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i));
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
          return this.writeInto(t);
        }
        xof(t) {
          return ((0, r.ai)(t), this.xofInto(new Uint8Array(t)));
        }
        digestInto(t) {
          if (((0, r.CG)(t, this), this.finished))
            throw new Error('digest() was already called');
          return (this.writeInto(t), this.destroy(), t);
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          ((this.destroyed = !0), this.state.fill(0));
        }
        _cloneInto(t) {
          const {
            blockLen: e,
            suffix: n,
            outputLen: r,
            rounds: o,
            enableXOF: i,
          } = this;
          return (
            t || (t = new m(e, n, r, i, o)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = o),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = i),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      const v = ((t, e, n) => (0, i.ld)(() => new m(e, t, n)))(1, 136, 32);
    },
    5789: (t, e, n) => {
      'use strict';
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error(`Wrong positive integer: ${t}`);
      }
      function o(t, ...e) {
        if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
        if (e.length > 0 && !e.includes(t.length))
          throw new Error(
            `Expected Uint8Array of length ${e}, not of length=${t.length}`
          );
      }
      function i(t) {
        if ('function' != typeof t || 'function' != typeof t.create)
          throw new Error('Hash should be wrapped by utils.wrapConstructor');
        (r(t.outputLen), r(t.blockLen));
      }
      function s(t, e = !0) {
        if (t.destroyed) throw new Error('Hash instance has been destroyed');
        if (e && t.finished)
          throw new Error('Hash#digest() has already been called');
      }
      function a(t, e) {
        o(t);
        const n = e.outputLen;
        if (t.length < n)
          throw new Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      n.d(e, {
        CG: () => a,
        ai: () => r,
        ee: () => o,
        t2: () => s,
        tW: () => i,
      });
    },
    6159: (t, e, n) => {
      'use strict';
      n.d(e, { CN: () => E, jM: () => V });
      var r = Symbol.for('immer-nothing'),
        o = Symbol.for('immer-draftable'),
        i = Symbol.for('immer-state'),
        s = [
          function (t) {
            return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
          },
          function (t) {
            return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
          },
          'This object has been frozen and should not be mutated',
          function (t) {
            return (
              'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? ' +
              t
            );
          },
          'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.',
          'Immer forbids circular references',
          'The first or second argument to `produce` must be a function',
          'The third argument to `produce` must be a function or undefined',
          'First argument to `createDraft` must be a plain object, an array, or an immerable object',
          'First argument to `finishDraft` must be a draft returned by `createDraft`',
          function (t) {
            return `'current' expects a draft, got: ${t}`;
          },
          'Object.defineProperty() cannot be used on an Immer draft',
          'Object.setPrototypeOf() cannot be used on an Immer draft',
          'Immer only supports deleting array indices',
          "Immer only supports setting array indices and the 'length' property",
          function (t) {
            return `'original' expects a draft, got: ${t}`;
          },
        ];
      function a(t, ...e) {
        {
          const n = s[t],
            r = 'function' == typeof n ? n.apply(null, e) : n;
          throw new Error(`[Immer] ${r}`);
        }
      }
      var c = Object.getPrototypeOf;
      function f(t) {
        return !!t && !!t[i];
      }
      function u(t) {
        return (
          !!t &&
          (d(t) ||
            Array.isArray(t) ||
            !!t[o] ||
            !!t.constructor?.[o] ||
            b(t) ||
            w(t))
        );
      }
      var l = Object.prototype.constructor.toString();
      function d(t) {
        if (!t || 'object' != typeof t) return !1;
        const e = c(t);
        if (null === e) return !0;
        const n = Object.hasOwnProperty.call(e, 'constructor') && e.constructor;
        return (
          n === Object ||
          ('function' == typeof n && Function.toString.call(n) === l)
        );
      }
      function h(t, e) {
        0 === p(t)
          ? Reflect.ownKeys(t).forEach((n) => {
              e(n, t[n], t);
            })
          : t.forEach((n, r) => e(r, n, t));
      }
      function p(t) {
        const e = t[i];
        return e ? e.type_ : Array.isArray(t) ? 1 : b(t) ? 2 : w(t) ? 3 : 0;
      }
      function y(t, e) {
        return 2 === p(t)
          ? t.has(e)
          : Object.prototype.hasOwnProperty.call(t, e);
      }
      function g(t, e, n) {
        const r = p(t);
        2 === r ? t.set(e, n) : 3 === r ? t.add(n) : (t[e] = n);
      }
      function b(t) {
        return t instanceof Map;
      }
      function w(t) {
        return t instanceof Set;
      }
      function m(t) {
        return t.copy_ || t.base_;
      }
      function v(t, e) {
        if (b(t)) return new Map(t);
        if (w(t)) return new Set(t);
        if (Array.isArray(t)) return Array.prototype.slice.call(t);
        const n = d(t);
        if (!0 === e || ('class_only' === e && !n)) {
          const e = Object.getOwnPropertyDescriptors(t);
          delete e[i];
          let n = Reflect.ownKeys(e);
          for (let r = 0; r < n.length; r++) {
            const o = n[r],
              i = e[o];
            (!1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
              (i.get || i.set) &&
                (e[o] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: i.enumerable,
                  value: t[o],
                }));
          }
          return Object.create(c(t), e);
        }
        {
          const e = c(t);
          if (null !== e && n) return { ...t };
          const r = Object.create(e);
          return Object.assign(r, t);
        }
      }
      function E(t, e = !1) {
        return (
          A(t) ||
            f(t) ||
            !u(t) ||
            (p(t) > 1 &&
              Object.defineProperties(t, {
                set: { value: x },
                add: { value: x },
                clear: { value: x },
                delete: { value: x },
              }),
            Object.freeze(t),
            e && Object.values(t).forEach((t) => E(t, !0))),
          t
        );
      }
      function x() {
        a(2);
      }
      function A(t) {
        return Object.isFrozen(t);
      }
      var O,
        _ = {};
      function S(t) {
        const e = _[t];
        return (e || a(0, t), e);
      }
      function B() {
        return O;
      }
      function I(t, e) {
        e &&
          (S('Patches'),
          (t.patches_ = []),
          (t.inversePatches_ = []),
          (t.patchListener_ = e));
      }
      function k(t) {
        (L(t), t.drafts_.forEach(j), (t.drafts_ = null));
      }
      function L(t) {
        t === O && (O = t.parent_);
      }
      function P(t) {
        return (O = {
          drafts_: [],
          parent_: O,
          immer_: t,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0,
        });
      }
      function j(t) {
        const e = t[i];
        0 === e.type_ || 1 === e.type_ ? e.revoke_() : (e.revoked_ = !0);
      }
      function T(t, e) {
        e.unfinalizedDrafts_ = e.drafts_.length;
        const n = e.drafts_[0];
        return (
          void 0 !== t && t !== n
            ? (n[i].modified_ && (k(e), a(4)),
              u(t) && ((t = H(e, t)), e.parent_ || N(e, t)),
              e.patches_ &&
                S('Patches').generateReplacementPatches_(
                  n[i].base_,
                  t,
                  e.patches_,
                  e.inversePatches_
                ))
            : (t = H(e, n, [])),
          k(e),
          e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
          t !== r ? t : void 0
        );
      }
      function H(t, e, n) {
        if (A(e)) return e;
        const r = e[i];
        if (!r) return (h(e, (o, i) => R(t, r, e, o, i, n)), e);
        if (r.scope_ !== t) return e;
        if (!r.modified_) return (N(t, r.base_, !0), r.base_);
        if (!r.finalized_) {
          ((r.finalized_ = !0), r.scope_.unfinalizedDrafts_--);
          const e = r.copy_;
          let o = e,
            i = !1;
          (3 === r.type_ && ((o = new Set(e)), e.clear(), (i = !0)),
            h(o, (o, s) => R(t, r, e, o, s, n, i)),
            N(t, e, !1),
            n &&
              t.patches_ &&
              S('Patches').generatePatches_(
                r,
                n,
                t.patches_,
                t.inversePatches_
              ));
        }
        return r.copy_;
      }
      function R(t, e, n, r, o, i, s) {
        if ((o === n && a(5), f(o))) {
          const s = H(
            t,
            o,
            i && e && 3 !== e.type_ && !y(e.assigned_, r) ? i.concat(r) : void 0
          );
          if ((g(n, r, s), !f(s))) return;
          t.canAutoFreeze_ = !1;
        } else s && n.add(o);
        if (u(o) && !A(o)) {
          if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
          (H(t, o),
            (e && e.scope_.parent_) ||
              'symbol' == typeof r ||
              !(b(n)
                ? n.has(r)
                : Object.prototype.propertyIsEnumerable.call(n, r)) ||
              N(t, o));
        }
      }
      function N(t, e, n = !1) {
        !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && E(e, n);
      }
      var F = {
          get(t, e) {
            if (e === i) return t;
            const n = m(t);
            if (!y(n, e))
              return (function (t, e, n) {
                const r = C(e, n);
                return r
                  ? 'value' in r
                    ? r.value
                    : r.get?.call(t.draft_)
                  : void 0;
              })(t, n, e);
            const r = n[e];
            return t.finalized_ || !u(r)
              ? r
              : r === z(t.base_, e)
                ? (q(t), (t.copy_[e] = $(r, t)))
                : r;
          },
          has: (t, e) => e in m(t),
          ownKeys: (t) => Reflect.ownKeys(m(t)),
          set(t, e, n) {
            const r = C(m(t), e);
            if (r?.set) return (r.set.call(t.draft_, n), !0);
            if (!t.modified_) {
              const r = z(m(t), e),
                a = r?.[i];
              if (a && a.base_ === n)
                return ((t.copy_[e] = n), (t.assigned_[e] = !1), !0);
              if (
                ((o = n) === (s = r)
                  ? 0 !== o || 1 / o == 1 / s
                  : o != o && s != s) &&
                (void 0 !== n || y(t.base_, e))
              )
                return !0;
              (q(t), D(t));
            }
            var o, s;
            return (
              (t.copy_[e] === n && (void 0 !== n || e in t.copy_)) ||
                (Number.isNaN(n) && Number.isNaN(t.copy_[e])) ||
                ((t.copy_[e] = n), (t.assigned_[e] = !0)),
              !0
            );
          },
          deleteProperty: (t, e) => (
            void 0 !== z(t.base_, e) || e in t.base_
              ? ((t.assigned_[e] = !1), q(t), D(t))
              : delete t.assigned_[e],
            t.copy_ && delete t.copy_[e],
            !0
          ),
          getOwnPropertyDescriptor(t, e) {
            const n = m(t),
              r = Reflect.getOwnPropertyDescriptor(n, e);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== t.type_ || 'length' !== e,
                  enumerable: r.enumerable,
                  value: n[e],
                }
              : r;
          },
          defineProperty() {
            a(11);
          },
          getPrototypeOf: (t) => c(t.base_),
          setPrototypeOf() {
            a(12);
          },
        },
        U = {};
      function z(t, e) {
        const n = t[i];
        return (n ? m(n) : t)[e];
      }
      function C(t, e) {
        if (!(e in t)) return;
        let n = c(t);
        for (; n; ) {
          const t = Object.getOwnPropertyDescriptor(n, e);
          if (t) return t;
          n = c(n);
        }
      }
      function D(t) {
        t.modified_ || ((t.modified_ = !0), t.parent_ && D(t.parent_));
      }
      function q(t) {
        t.copy_ ||
          (t.copy_ = v(t.base_, t.scope_.immer_.useStrictShallowCopy_));
      }
      function $(t, e) {
        const n = b(t)
          ? S('MapSet').proxyMap_(t, e)
          : w(t)
            ? S('MapSet').proxySet_(t, e)
            : (function (t, e) {
                const n = Array.isArray(t),
                  r = {
                    type_: n ? 1 : 0,
                    scope_: e ? e.scope_ : B(),
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: e,
                    base_: t,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1,
                  };
                let o = r,
                  i = F;
                n && ((o = [r]), (i = U));
                const { revoke: s, proxy: a } = Proxy.revocable(o, i);
                return ((r.draft_ = a), (r.revoke_ = s), a);
              })(t, e);
        return ((e ? e.scope_ : B()).drafts_.push(n), n);
      }
      function M(t) {
        if (!u(t) || A(t)) return t;
        const e = t[i];
        let n;
        if (e) {
          if (!e.modified_) return e.base_;
          ((e.finalized_ = !0),
            (n = v(t, e.scope_.immer_.useStrictShallowCopy_)));
        } else n = v(t, !0);
        return (
          h(n, (t, e) => {
            g(n, t, M(e));
          }),
          e && (e.finalized_ = !1),
          n
        );
      }
      (h(F, (t, e) => {
        U[t] = function () {
          return ((arguments[0] = arguments[0][0]), e.apply(this, arguments));
        };
      }),
        (U.deleteProperty = function (t, e) {
          return (isNaN(parseInt(e)) && a(13), U.set.call(this, t, e, void 0));
        }),
        (U.set = function (t, e, n) {
          return (
            'length' !== e && isNaN(parseInt(e)) && a(14),
            F.set.call(this, t[0], e, n, t[0])
          );
        }));
      var V = new (class {
        constructor(t) {
          ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.produce = (t, e, n) => {
              if ('function' == typeof t && 'function' != typeof e) {
                const n = e;
                e = t;
                const r = this;
                return function (t = n, ...o) {
                  return r.produce(t, (t) => e.call(this, t, ...o));
                };
              }
              let o;
              if (
                ('function' != typeof e && a(6),
                void 0 !== n && 'function' != typeof n && a(7),
                u(t))
              ) {
                const r = P(this),
                  i = $(t, void 0);
                let s = !0;
                try {
                  ((o = e(i)), (s = !1));
                } finally {
                  s ? k(r) : L(r);
                }
                return (I(r, n), T(o, r));
              }
              if (!t || 'object' != typeof t) {
                if (
                  ((o = e(t)),
                  void 0 === o && (o = t),
                  o === r && (o = void 0),
                  this.autoFreeze_ && E(o, !0),
                  n)
                ) {
                  const e = [],
                    r = [];
                  (S('Patches').generateReplacementPatches_(t, o, e, r),
                    n(e, r));
                }
                return o;
              }
              a(1, t);
            }),
            (this.produceWithPatches = (t, e) => {
              if ('function' == typeof t)
                return (e, ...n) =>
                  this.produceWithPatches(e, (e) => t(e, ...n));
              let n, r;
              return [
                this.produce(t, e, (t, e) => {
                  ((n = t), (r = e));
                }),
                n,
                r,
              ];
            }),
            'boolean' == typeof t?.autoFreeze &&
              this.setAutoFreeze(t.autoFreeze),
            'boolean' == typeof t?.useStrictShallowCopy &&
              this.setUseStrictShallowCopy(t.useStrictShallowCopy));
        }
        createDraft(t) {
          var e;
          (u(t) || a(8), f(t) && (f((e = t)) || a(10, e), (t = M(e))));
          const n = P(this),
            r = $(t, void 0);
          return ((r[i].isManual_ = !0), L(n), r);
        }
        finishDraft(t, e) {
          const n = t && t[i];
          (n && n.isManual_) || a(9);
          const { scope_: r } = n;
          return (I(r, e), T(void 0, r));
        }
        setAutoFreeze(t) {
          this.autoFreeze_ = t;
        }
        setUseStrictShallowCopy(t) {
          this.useStrictShallowCopy_ = t;
        }
        applyPatches(t, e) {
          let n;
          for (n = e.length - 1; n >= 0; n--) {
            const r = e[n];
            if (0 === r.path.length && 'replace' === r.op) {
              t = r.value;
              break;
            }
          }
          n > -1 && (e = e.slice(n + 1));
          const r = S('Patches').applyPatches_;
          return f(t) ? r(t, e) : this.produce(t, (t) => r(t, e));
        }
      })().produce;
    },
    6720: (t, e, n) => {
      'use strict';
      var r = function () {},
        o = n(2985),
        i = {},
        s = n(2260);
      function a(t, e, n, a, c) {
        for (var f in t)
          if (s(t, f)) {
            var u;
            try {
              if ('function' != typeof t[f]) {
                var l = Error(
                  (a || 'React class') +
                    ': ' +
                    n +
                    ' type `' +
                    f +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof t[f] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((l.name = 'Invariant Violation'), l);
              }
              u = t[f](e, f, a, n, null, o);
            } catch (h) {
              u = h;
            }
            if (
              (!u ||
                u instanceof Error ||
                r(
                  (a || 'React class') +
                    ': type specification of ' +
                    n +
                    ' `' +
                    f +
                    '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                    typeof u +
                    '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                ),
              u instanceof Error && !(u.message in i))
            ) {
              i[u.message] = !0;
              var d = c ? c() : '';
              r('Failed ' + n + ' type: ' + u.message + (null != d ? d : ''));
            }
          }
      }
      ((r = function (t) {
        var e = 'Warning: ' + t;
        try {
          throw new Error(e);
        } catch (n) {}
      }),
        (a.resetWarningCache = function () {
          i = {};
        }),
        (t.exports = a));
    },
    8571: (t, e, n) => {
      'use strict';
      n.d(e, { D: () => i });
      var r = n(5789),
        o = n(982);
      class i extends o.Vw {
        constructor(t, e, n, r) {
          (super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, o.O8)(this.buffer)));
        }
        update(t) {
          (0, r.t2)(this);
          const { view: e, buffer: n, blockLen: i } = this,
            s = (t = (0, o.ZJ)(t)).length;
          for (let r = 0; r < s; ) {
            const a = Math.min(i - this.pos, s - r);
            if (a === i) {
              const e = (0, o.O8)(t);
              for (; i <= s - r; r += i) this.process(e, r);
              continue;
            }
            (n.set(t.subarray(r, r + a), this.pos),
              (this.pos += a),
              (r += a),
              this.pos === i && (this.process(e, 0), (this.pos = 0)));
          }
          return ((this.length += t.length), this.roundClean(), this);
        }
        digestInto(t) {
          ((0, r.t2)(this), (0, r.CG)(t, this), (this.finished = !0));
          const { buffer: e, view: n, blockLen: i, isLE: s } = this;
          let { pos: a } = this;
          ((e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(n, 0), (a = 0)));
          for (let r = a; r < i; r++) e[r] = 0;
          (!(function (t, e, n, r) {
            if ('function' == typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            const o = BigInt(32),
              i = BigInt(4294967295),
              s = Number((n >> o) & i),
              a = Number(n & i),
              c = r ? 4 : 0,
              f = r ? 0 : 4;
            (t.setUint32(e + c, s, r), t.setUint32(e + f, a, r));
          })(n, i - 8, BigInt(8 * this.length), s),
            this.process(n, 0));
          const c = (0, o.O8)(t),
            f = this.outputLen;
          if (f % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
          const u = f / 4,
            l = this.get();
          if (u > l.length)
            throw new Error('_sha2: outputLen bigger than state');
          for (let r = 0; r < u; r++) c.setUint32(4 * r, l[r], s);
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const n = t.slice(0, e);
          return (this.destroy(), n);
        }
        _cloneInto(t) {
          (t || (t = new this.constructor()), t.set(...this.get()));
          const {
            blockLen: e,
            buffer: n,
            length: r,
            finished: o,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (t.length = r),
            (t.pos = s),
            (t.finished = o),
            (t.destroyed = i),
            r % e && t.buffer.set(n),
            t
          );
        }
      }
    },
    9806: (t, e, n) => {
      'use strict';
      n.d(e, { Zf: () => l });
      var r = n(8571),
        o = n(4486),
        i = n(982);
      const [s, a] = (() =>
          o.Ay.split(
            [
              '0x428a2f98d728ae22',
              '0x7137449123ef65cd',
              '0xb5c0fbcfec4d3b2f',
              '0xe9b5dba58189dbbc',
              '0x3956c25bf348b538',
              '0x59f111f1b605d019',
              '0x923f82a4af194f9b',
              '0xab1c5ed5da6d8118',
              '0xd807aa98a3030242',
              '0x12835b0145706fbe',
              '0x243185be4ee4b28c',
              '0x550c7dc3d5ffb4e2',
              '0x72be5d74f27b896f',
              '0x80deb1fe3b1696b1',
              '0x9bdc06a725c71235',
              '0xc19bf174cf692694',
              '0xe49b69c19ef14ad2',
              '0xefbe4786384f25e3',
              '0x0fc19dc68b8cd5b5',
              '0x240ca1cc77ac9c65',
              '0x2de92c6f592b0275',
              '0x4a7484aa6ea6e483',
              '0x5cb0a9dcbd41fbd4',
              '0x76f988da831153b5',
              '0x983e5152ee66dfab',
              '0xa831c66d2db43210',
              '0xb00327c898fb213f',
              '0xbf597fc7beef0ee4',
              '0xc6e00bf33da88fc2',
              '0xd5a79147930aa725',
              '0x06ca6351e003826f',
              '0x142929670a0e6e70',
              '0x27b70a8546d22ffc',
              '0x2e1b21385c26c926',
              '0x4d2c6dfc5ac42aed',
              '0x53380d139d95b3df',
              '0x650a73548baf63de',
              '0x766a0abb3c77b2a8',
              '0x81c2c92e47edaee6',
              '0x92722c851482353b',
              '0xa2bfe8a14cf10364',
              '0xa81a664bbc423001',
              '0xc24b8b70d0f89791',
              '0xc76c51a30654be30',
              '0xd192e819d6ef5218',
              '0xd69906245565a910',
              '0xf40e35855771202a',
              '0x106aa07032bbd1b8',
              '0x19a4c116b8d2d0c8',
              '0x1e376c085141ab53',
              '0x2748774cdf8eeb99',
              '0x34b0bcb5e19b48a8',
              '0x391c0cb3c5c95a63',
              '0x4ed8aa4ae3418acb',
              '0x5b9cca4f7763e373',
              '0x682e6ff3d6b2b8a3',
              '0x748f82ee5defb2fc',
              '0x78a5636f43172f60',
              '0x84c87814a1f0ab72',
              '0x8cc702081a6439ec',
              '0x90befffa23631e28',
              '0xa4506cebde82bde9',
              '0xbef9a3f7b2c67915',
              '0xc67178f2e372532b',
              '0xca273eceea26619c',
              '0xd186b8c721c0c207',
              '0xeada7dd6cde0eb1e',
              '0xf57d4f7fee6ed178',
              '0x06f067aa72176fba',
              '0x0a637dc5a2c898a6',
              '0x113f9804bef90dae',
              '0x1b710b35131c471b',
              '0x28db77f523047d84',
              '0x32caab7b40c72493',
              '0x3c9ebe0a15c9bebc',
              '0x431d67c49c100d4c',
              '0x4cc5d4becb3e42b6',
              '0x597f299cfc657e2a',
              '0x5fcb6fab3ad6faec',
              '0x6c44198c4a475817',
            ].map((t) => BigInt(t))
          ))(),
        c = new Uint32Array(80),
        f = new Uint32Array(80);
      class u extends r.D {
        constructor() {
          (super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209));
        }
        get() {
          const {
            Ah: t,
            Al: e,
            Bh: n,
            Bl: r,
            Ch: o,
            Cl: i,
            Dh: s,
            Dl: a,
            Eh: c,
            El: f,
            Fh: u,
            Fl: l,
            Gh: d,
            Gl: h,
            Hh: p,
            Hl: y,
          } = this;
          return [t, e, n, r, o, i, s, a, c, f, u, l, d, h, p, y];
        }
        set(t, e, n, r, o, i, s, a, c, f, u, l, d, h, p, y) {
          ((this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | o),
            (this.Cl = 0 | i),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | f),
            (this.Fh = 0 | u),
            (this.Fl = 0 | l),
            (this.Gh = 0 | d),
            (this.Gl = 0 | h),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y));
        }
        process(t, e) {
          for (let o = 0; o < 16; o++, e += 4)
            ((c[o] = t.getUint32(e)), (f[o] = t.getUint32((e += 4))));
          for (let s = 16; s < 80; s++) {
            const t = 0 | c[s - 15],
              e = 0 | f[s - 15],
              n =
                o.Ay.rotrSH(t, e, 1) ^
                o.Ay.rotrSH(t, e, 8) ^
                o.Ay.shrSH(t, e, 7),
              r =
                o.Ay.rotrSL(t, e, 1) ^
                o.Ay.rotrSL(t, e, 8) ^
                o.Ay.shrSL(t, e, 7),
              i = 0 | c[s - 2],
              a = 0 | f[s - 2],
              u =
                o.Ay.rotrSH(i, a, 19) ^
                o.Ay.rotrBH(i, a, 61) ^
                o.Ay.shrSH(i, a, 6),
              l =
                o.Ay.rotrSL(i, a, 19) ^
                o.Ay.rotrBL(i, a, 61) ^
                o.Ay.shrSL(i, a, 6),
              d = o.Ay.add4L(r, l, f[s - 7], f[s - 16]),
              h = o.Ay.add4H(d, n, u, c[s - 7], c[s - 16]);
            ((c[s] = 0 | h), (f[s] = 0 | d));
          }
          let {
            Ah: n,
            Al: r,
            Bh: i,
            Bl: u,
            Ch: l,
            Cl: d,
            Dh: h,
            Dl: p,
            Eh: y,
            El: g,
            Fh: b,
            Fl: w,
            Gh: m,
            Gl: v,
            Hh: E,
            Hl: x,
          } = this;
          for (let A = 0; A < 80; A++) {
            const t =
                o.Ay.rotrSH(y, g, 14) ^
                o.Ay.rotrSH(y, g, 18) ^
                o.Ay.rotrBH(y, g, 41),
              e =
                o.Ay.rotrSL(y, g, 14) ^
                o.Ay.rotrSL(y, g, 18) ^
                o.Ay.rotrBL(y, g, 41),
              O = (y & b) ^ (~y & m),
              _ = (g & w) ^ (~g & v),
              S = o.Ay.add5L(x, e, _, a[A], f[A]),
              B = o.Ay.add5H(S, E, t, O, s[A], c[A]),
              I = 0 | S,
              k =
                o.Ay.rotrSH(n, r, 28) ^
                o.Ay.rotrBH(n, r, 34) ^
                o.Ay.rotrBH(n, r, 39),
              L =
                o.Ay.rotrSL(n, r, 28) ^
                o.Ay.rotrBL(n, r, 34) ^
                o.Ay.rotrBL(n, r, 39),
              P = (n & i) ^ (n & l) ^ (i & l),
              j = (r & u) ^ (r & d) ^ (u & d);
            ((E = 0 | m),
              (x = 0 | v),
              (m = 0 | b),
              (v = 0 | w),
              (b = 0 | y),
              (w = 0 | g),
              ({ h: y, l: g } = o.Ay.add(0 | h, 0 | p, 0 | B, 0 | I)),
              (h = 0 | l),
              (p = 0 | d),
              (l = 0 | i),
              (d = 0 | u),
              (i = 0 | n),
              (u = 0 | r));
            const T = o.Ay.add3L(I, L, j);
            ((n = o.Ay.add3H(T, B, k, P)), (r = 0 | T));
          }
          (({ h: n, l: r } = o.Ay.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: i, l: u } = o.Ay.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | u)),
            ({ h: l, l: d } = o.Ay.add(0 | this.Ch, 0 | this.Cl, 0 | l, 0 | d)),
            ({ h, l: p } = o.Ay.add(0 | this.Dh, 0 | this.Dl, 0 | h, 0 | p)),
            ({ h: y, l: g } = o.Ay.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | g)),
            ({ h: b, l: w } = o.Ay.add(0 | this.Fh, 0 | this.Fl, 0 | b, 0 | w)),
            ({ h: m, l: v } = o.Ay.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | v)),
            ({ h: E, l: x } = o.Ay.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | x)),
            this.set(n, r, i, u, l, d, h, p, y, g, b, w, m, v, E, x));
        }
        roundClean() {
          (c.fill(0), f.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      const l = (0, i.ld)(() => new u());
    },
  },
]);
