(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [569],
  {
    982: (t, e, n) => {
      'use strict';
      n.d(e, {
        Vw: () => u,
        Id: () => c,
        O8: () => s,
        po: () => h,
        Ow: () => a,
        ZJ: () => f,
        DH: () => o,
        ld: () => l,
      });
      const r =
          'object' == typeof globalThis && 'crypto' in globalThis
            ? globalThis.crypto
            : void 0,
        i = (t) => t instanceof Uint8Array,
        o = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        a = (t, e) => (t << (32 - e)) | (t >>> e);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw new Error('Non little-endian hardware is not supported');
      function f(t) {
        if (
          ('string' == typeof t &&
            (t = (function (t) {
              if ('string' != typeof t)
                throw new Error('utf8ToBytes expected string, got ' + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          !i(t))
        )
          throw new Error('expected Uint8Array, got ' + typeof t);
        return t;
      }
      function c(...t) {
        const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0));
        let n = 0;
        return (
          t.forEach((t) => {
            if (!i(t)) throw new Error('Uint8Array expected');
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
        const e = (e) => t().update(f(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function h(t = 32) {
        if (r && 'function' == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(t));
        throw new Error('crypto.getRandomValues must be defined');
      }
    },
    1035: (t, e, n) => {
      'use strict';
      var r = n(5959),
        i = {
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
        o = {
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
      function f(t) {
        return r.isMemo(t) ? s : a[t.$$typeof] || i;
      }
      ((a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[r.Memo] = s));
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, n, r) {
        if ('string' != typeof n) {
          if (p) {
            var i = d(n);
            i && i !== p && t(e, i, r);
          }
          var s = u(n);
          l && (s = s.concat(l(n)));
          for (var a = f(e), y = f(n), g = 0; g < s.length; ++g) {
            var w = s[g];
            if (!(o[w] || (r && r[w]) || (y && y[w]) || (a && a[w]))) {
              var b = h(n, w);
              try {
                c(e, w, b);
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
      function i(t) {
        return 'init' in t;
      }
      function o(t) {
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
      n.d(e, { MO: () => u, ff: () => U });
      const f = new WeakMap();
      function c(t) {
        var e;
        return l(t) && !!(null == (e = f.get(t)) ? void 0 : e[0]);
      }
      function u(t, e) {
        let n = f.get(t);
        if (!n) {
          ((n = [!0, new Set()]), f.set(t, n));
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
      function h(t, e, n) {
        if (!n.p.has(t)) {
          n.p.add(t);
          const r = () => n.p.delete(t);
          e.then(r, r);
        }
      }
      function d(t, e, n) {
        var r;
        const i = new Set();
        for (const o of (null == (r = n.get(t)) ? void 0 : r.t) || [])
          n.has(o) && i.add(o);
        for (const o of e.p) i.add(o);
        return i;
      }
      const p = (t, e, ...n) => e.read(...n),
        y = (t, e, ...n) => e.write(...n),
        g = (t, e) => {
          var n;
          return null == (n = e.unstable_onInit) ? void 0 : n.call(e, t);
        },
        w = (t, e, n) => {
          var r;
          return null == (r = e.onMount) ? void 0 : r.call(e, n);
        },
        b = (t, e) => {
          const n = R(t),
            r = n[0],
            i = n[9];
          if (!e) throw new Error('Atom is undefined or null');
          let o = r.get(e);
          return (
            o ||
              ((o = { d: new Map(), p: new Set(), n: 0 }),
              r.set(e, o),
              null == i || i(t, e)),
            o
          );
        },
        m = (t) => {
          const e = R(t),
            n = e[1],
            r = e[3],
            i = e[4],
            o = e[5],
            s = e[6],
            a = e[13],
            f = [],
            c = (t) => {
              try {
                t();
              } catch (e) {
                f.push(e);
              }
            };
          do {
            s.f && c(s.f);
            const e = new Set(),
              f = e.add.bind(e);
            (r.forEach((t) => {
              var e;
              return null == (e = n.get(t)) ? void 0 : e.l.forEach(f);
            }),
              r.clear(),
              o.forEach(f),
              o.clear(),
              i.forEach(f),
              i.clear(),
              e.forEach(c),
              r.size && a(t));
          } while (r.size || o.size || i.size);
          if (f.length) throw new AggregateError(f);
        },
        E = (t) => {
          const e = R(t),
            n = e[1],
            r = e[2],
            i = e[3],
            o = e[11],
            s = e[14],
            a = e[17],
            f = [],
            c = new WeakSet(),
            u = new WeakSet(),
            l = Array.from(i);
          for (; l.length; ) {
            const e = l[l.length - 1],
              i = o(t, e);
            if (u.has(e)) l.pop();
            else if (c.has(e)) {
              if (r.get(e) === i.n) f.push([e, i]);
              else if (r.has(e))
                throw new Error('[Bug] invalidated atom exists');
              (u.add(e), l.pop());
            } else {
              c.add(e);
              for (const t of d(e, i, n)) c.has(t) || l.push(t);
            }
          }
          for (let h = f.length - 1; h >= 0; --h) {
            const [e, n] = f[h];
            let o = !1;
            for (const t of n.d.keys())
              if (t !== e && i.has(t)) {
                o = !0;
                break;
              }
            (o && (s(t, e), a(t, e)), r.delete(e));
          }
        },
        v = (t, e) => {
          var n;
          const f = R(t),
            d = f[1],
            p = f[2],
            y = f[3],
            g = f[6],
            w = f[7],
            b = f[11],
            m = f[12],
            E = f[13],
            v = f[14],
            x = f[16],
            A = f[17],
            B = b(t, e);
          if (s(B)) {
            if (d.has(e) && p.get(e) !== B.n) return B;
            if (Array.from(B.d).every(([e, n]) => v(t, e).n === n)) return B;
          }
          B.d.clear();
          let O,
            S,
            L = !0;
          function k() {
            d.has(e) && (A(t, e), E(t), m(t));
          }
          const H = {
              get signal() {
                return (O || (O = new AbortController()), O.signal);
              },
              get setSelf() {
                return (
                  o(e),
                  !S &&
                    o(e) &&
                    (S = (...n) => {
                      if (!L)
                        try {
                          return x(t, e, ...n);
                        } finally {
                          (E(t), m(t));
                        }
                    }),
                  S
                );
              },
            },
            T = B.n;
          try {
            const n = w(
              t,
              e,
              function (n) {
                var o;
                if (r(e, n)) {
                  const e = b(t, n);
                  if (!s(e)) {
                    if (!i(n)) throw new Error('no atom init');
                    I(t, n, n.init);
                  }
                  return a(e);
                }
                const f = v(t, n);
                try {
                  return a(f);
                } finally {
                  (B.d.set(n, f.n),
                    c(B.v) && h(e, B.v, f),
                    null == (o = d.get(n)) || o.t.add(e),
                    L || k());
                }
              },
              H
            );
            return (
              I(t, e, n),
              l(n) &&
                (u(n, () => (null == O ? void 0 : O.abort())), n.then(k, k)),
              B
            );
          } catch (U) {
            return (delete B.v, (B.e = U), ++B.n, B);
          } finally {
            ((L = !1),
              T !== B.n &&
                p.get(e) === T &&
                (p.set(e, B.n), y.add(e), null == (n = g.c) || n.call(g, e)));
          }
        },
        x = (t, e) => {
          const n = R(t),
            r = n[1],
            i = n[2],
            o = n[11],
            s = [e];
          for (; s.length; ) {
            const e = s.pop(),
              n = o(t, e);
            for (const a of d(e, n, r)) {
              const e = o(t, a);
              (i.set(a, e.n), s.push(a));
            }
          }
        },
        A = (t, e, ...n) => {
          const o = R(t),
            s = o[3],
            f = o[6],
            c = o[8],
            u = o[11],
            l = o[12],
            h = o[13],
            d = o[14],
            p = o[15],
            y = o[17];
          let g = !0;
          const w = (e) => a(d(t, e)),
            b = (n, ...o) => {
              var a;
              const c = u(t, n);
              try {
                if (r(e, n)) {
                  if (!i(n)) throw new Error('atom not writable');
                  const e = c.n,
                    r = o[0];
                  return (
                    I(t, n, r),
                    y(t, n),
                    void (
                      e !== c.n &&
                      (s.add(n), null == (a = f.c) || a.call(f, n), p(t, n))
                    )
                  );
                }
                return A(t, n, ...o);
              } finally {
                g || (h(t), l(t));
              }
            };
          try {
            return c(t, e, w, b, ...n);
          } finally {
            g = !1;
          }
        },
        B = (t, e) => {
          var n;
          const r = R(t),
            i = r[1],
            o = r[3],
            s = r[6],
            a = r[11],
            f = r[15],
            u = r[18],
            l = r[19],
            h = a(t, e),
            d = i.get(e);
          if (d && !c(h.v)) {
            for (const [r, i] of h.d)
              if (!d.d.has(r)) {
                const c = a(t, r);
                (u(t, r).t.add(e),
                  d.d.add(r),
                  i !== c.n &&
                    (o.add(r), null == (n = s.c) || n.call(s, r), f(t, r)));
              }
            for (const n of d.d || [])
              if (!h.d.has(n)) {
                d.d.delete(n);
                const r = l(t, n);
                null == r || r.t.delete(e);
              }
          }
        },
        O = (t, e) => {
          var n;
          const r = R(t),
            i = r[1],
            s = r[4],
            a = r[6],
            f = r[10],
            c = r[11],
            u = r[12],
            l = r[13],
            h = r[14],
            d = r[16],
            p = c(t, e);
          let y = i.get(e);
          if (!y) {
            h(t, e);
            for (const n of p.d.keys()) O(t, n).t.add(e);
            if (
              ((y = { l: new Set(), d: new Set(p.d.keys()), t: new Set() }),
              i.set(e, y),
              null == (n = a.m) || n.call(a, e),
              o(e))
            ) {
              const n = () => {
                let n = !0;
                const r = (...r) => {
                  try {
                    return d(t, e, ...r);
                  } finally {
                    n || (l(t), u(t));
                  }
                };
                try {
                  const i = f(t, e, r);
                  i &&
                    (y.u = () => {
                      n = !0;
                      try {
                        i();
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
          const r = R(t),
            i = r[1],
            o = r[5],
            s = r[6],
            a = r[11],
            f = r[19],
            c = a(t, e);
          let u = i.get(e);
          if (
            !u ||
            u.l.size ||
            Array.from(u.t).some((t) => {
              var n;
              return null == (n = i.get(t)) ? void 0 : n.d.has(e);
            })
          )
            return u;
          (u.u && o.add(u.u),
            (u = void 0),
            i.delete(e),
            null == (n = s.u) || n.call(s, e));
          for (const l of c.d.keys()) {
            const n = f(t, l);
            null == n || n.t.delete(e);
          }
        },
        I = (t, e, n) => {
          const r = R(t)[11],
            i = r(t, e),
            o = 'v' in i,
            s = i.v;
          if (l(n)) for (const a of i.d.keys()) h(e, n, r(t, a));
          ((i.v = n),
            delete i.e,
            (o && Object.is(s, i.v)) ||
              (++i.n,
              l(s) &&
                (function (t) {
                  const e = f.get(t);
                  (null == e ? void 0 : e[0]) &&
                    ((e[0] = !1), e[1].forEach((t) => t()));
                })(s)));
        },
        L = (t, e) => a((0, R(t)[14])(t, e)),
        k = (t, e, ...n) => {
          const r = R(t),
            i = r[12],
            o = r[13],
            s = r[16];
          try {
            return s(t, e, ...n);
          } finally {
            (o(t), i(t));
          }
        },
        H = (t, e, n) => {
          const r = R(t),
            i = r[12],
            o = r[18],
            s = r[19],
            a = o(t, e).l;
          return (
            a.add(n),
            i(t),
            () => {
              (a.delete(n), s(t, e), i(t));
            }
          );
        },
        T = new WeakMap();
      function R(t) {
        const e = T.get(t);
        if (!e)
          throw new Error(
            'Store must be created by buildStore to read its building blocks'
          );
        return e;
      }
      function U(...t) {
        const e = {
            get: (t) => (0, R(e)[21])(e, t),
            set: (t, ...n) => (0, R(e)[22])(e, t, ...n),
            sub: (t, n) => (0, R(e)[23])(e, t, n),
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
            w,
            b,
            m,
            E,
            v,
            x,
            A,
            B,
            O,
            S,
            I,
            L,
            k,
            H,
          ].map((e, n) => t[n] || e);
        return (T.set(e, Object.freeze(n)), e);
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
        i = n(5959),
        o = n(4059),
        s = n(2985),
        a = n(2260),
        f = n(6720);
      function c() {
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
              any: p(c),
              arrayOf: function (t) {
                return p(function (e, n, r, i, o) {
                  if ('function' != typeof t)
                    return new d(
                      'Property `' +
                        o +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside arrayOf.'
                    );
                  var a = e[n];
                  if (!Array.isArray(a))
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        b(a) +
                        '` supplied to `' +
                        r +
                        '`, expected an array.'
                    );
                  for (var f = 0; f < a.length; f++) {
                    var c = t(a, f, r, i, o + '[' + f + ']', s);
                    if (c instanceof Error) return c;
                  }
                  return null;
                });
              },
              element: p(function (e, n, r, i, o) {
                var s = e[n];
                return t(s)
                  ? null
                  : new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        b(s) +
                        '` supplied to `' +
                        r +
                        '`, expected a single ReactElement.'
                    );
              }),
              elementType: p(function (t, e, n, r, o) {
                var s = t[e];
                return i.isValidElementType(s)
                  ? null
                  : new d(
                      'Invalid ' +
                        r +
                        ' `' +
                        o +
                        '` of type `' +
                        b(s) +
                        '` supplied to `' +
                        n +
                        '`, expected a single ReactElement type.'
                    );
              }),
              instanceOf: function (t) {
                return p(function (e, n, r, i, o) {
                  if (!(e[n] instanceof t)) {
                    var s = t.name || u;
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
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
              node: p(function (t, e, n, r, i) {
                return w(t[e])
                  ? null
                  : new d(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.'
                    );
              }),
              objectOf: function (t) {
                return p(function (e, n, r, i, o) {
                  if ('function' != typeof t)
                    return new d(
                      'Property `' +
                        o +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside objectOf.'
                    );
                  var f = e[n],
                    c = b(f);
                  if ('object' !== c)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected an object.'
                    );
                  for (var u in f)
                    if (a(f, u)) {
                      var l = t(f, u, r, i, o + '.' + u, s);
                      if (l instanceof Error) return l;
                    }
                  return null;
                });
              },
              oneOf: function (t) {
                return Array.isArray(t)
                  ? p(function (e, n, r, i, o) {
                      for (var s = e[n], a = 0; a < t.length; a++)
                        if (h(s, t[a])) return null;
                      var f = JSON.stringify(t, function (t, e) {
                        return 'symbol' === m(e) ? String(e) : e;
                      });
                      return new d(
                        'Invalid ' +
                          i +
                          ' `' +
                          o +
                          '` of value `' +
                          String(s) +
                          '` supplied to `' +
                          r +
                          '`, expected one of ' +
                          f +
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
                    c);
              },
              oneOfType: function (t) {
                if (!Array.isArray(t))
                  return (
                    r(
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    ),
                    c
                  );
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  if ('function' != typeof n)
                    return (
                      r(
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                          E(n) +
                          ' at index ' +
                          e +
                          '.'
                      ),
                      c
                    );
                }
                return p(function (e, n, r, i, o) {
                  for (var f = [], c = 0; c < t.length; c++) {
                    var u = (0, t[c])(e, n, r, i, o, s);
                    if (null == u) return null;
                    u.data &&
                      a(u.data, 'expectedType') &&
                      f.push(u.data.expectedType);
                  }
                  return new d(
                    'Invalid ' +
                      i +
                      ' `' +
                      o +
                      '` supplied to `' +
                      r +
                      '`' +
                      (f.length > 0
                        ? ', expected one of type [' + f.join(', ') + ']'
                        : '') +
                      '.'
                  );
                });
              },
              shape: function (t) {
                return p(function (e, n, r, i, o) {
                  var a = e[n],
                    f = b(a);
                  if ('object' !== f)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        f +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  for (var c in t) {
                    var u = t[c];
                    if ('function' != typeof u) return g(r, i, o, c, m(u));
                    var l = u(a, c, r, i, o + '.' + c, s);
                    if (l) return l;
                  }
                  return null;
                });
              },
              exact: function (t) {
                return p(function (e, n, r, i, f) {
                  var c = e[n],
                    u = b(c);
                  if ('object' !== u)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        f +
                        '` of type `' +
                        u +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  var l = o({}, e[n], t);
                  for (var h in l) {
                    var p = t[h];
                    if (a(t, h) && 'function' != typeof p)
                      return g(r, i, f, h, m(p));
                    if (!p)
                      return new d(
                        'Invalid ' +
                          i +
                          ' `' +
                          f +
                          '` key `' +
                          h +
                          '` supplied to `' +
                          r +
                          '`.\nBad object: ' +
                          JSON.stringify(e[n], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(t), null, '  ')
                      );
                    var y = p(c, h, r, i, f + '.' + h, s);
                    if (y) return y;
                  }
                  return null;
                });
              },
            };
          function h(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
          }
          function d(t, e) {
            ((this.message = t),
              (this.data = e && 'object' == typeof e ? e : {}),
              (this.stack = ''));
          }
          function p(t) {
            var n = {},
              i = 0;
            function o(o, a, f, c, l, h, p) {
              if (((c = c || u), (h = h || f), p !== s)) {
                if (e) {
                  var y = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((y.name = 'Invariant Violation'), y);
                }
                if ('undefined' != typeof console) {
                  var g = c + ':' + f;
                  !n[g] &&
                    i < 3 &&
                    (r(
                      'You are manually calling a React.PropTypes validation function for the `' +
                        h +
                        '` prop on `' +
                        c +
                        '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                    ),
                    (n[g] = !0),
                    i++);
                }
              }
              return null == a[f]
                ? o
                  ? null === a[f]
                    ? new d(
                        'The ' +
                          l +
                          ' `' +
                          h +
                          '` is marked as required in `' +
                          c +
                          '`, but its value is `null`.'
                      )
                    : new d(
                        'The ' +
                          l +
                          ' `' +
                          h +
                          '` is marked as required in `' +
                          c +
                          '`, but its value is `undefined`.'
                      )
                  : null
                : t(a, f, c, l, h);
            }
            var a = o.bind(null, !1);
            return ((a.isRequired = o.bind(null, !0)), a);
          }
          function y(t) {
            return p(function (e, n, r, i, o, s) {
              var a = e[n];
              return b(a) !== t
                ? new d(
                    'Invalid ' +
                      i +
                      ' `' +
                      o +
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
          function g(t, e, n, r, i) {
            return new d(
              (t || 'React class') +
                ': ' +
                e +
                ' type `' +
                n +
                '.' +
                r +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                i +
                '`.'
            );
          }
          function w(e) {
            switch (typeof e) {
              case 'number':
              case 'string':
              case 'undefined':
                return !0;
              case 'boolean':
                return !e;
              case 'object':
                if (Array.isArray(e)) return e.every(w);
                if (null === e || t(e)) return !0;
                var r = (function (t) {
                  var e = t && ((n && t[n]) || t['@@iterator']);
                  if ('function' == typeof e) return e;
                })(e);
                if (!r) return !1;
                var i,
                  o = r.call(e);
                if (r !== e.entries) {
                  for (; !(i = o.next()).done; ) if (!w(i.value)) return !1;
                } else
                  for (; !(i = o.next()).done; ) {
                    var s = i.value;
                    if (s && !w(s[1])) return !1;
                  }
                return !0;
              default:
                return !1;
            }
          }
          function b(t) {
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
            var e = b(t);
            if ('object' === e) {
              if (t instanceof Date) return 'date';
              if (t instanceof RegExp) return 'regexp';
            }
            return e;
          }
          function E(t) {
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
            (d.prototype = Error.prototype),
            (l.checkPropTypes = f),
            (l.resetWarningCache = f.resetWarningCache),
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
        i = n(4566),
        o = n(1453);
      const s = (0, r.createContext)(void 0);
      function a(t) {
        const e = (0, r.useContext)(s);
        return (null == t ? void 0 : t.store) || e || (0, i.zp)();
      }
      const f = (t) => 'function' == typeof (null == t ? void 0 : t.then),
        c = (t) => {
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
            throw 'rejected' === t.status ? t.reason : (c(t), t);
          }),
        l = new WeakMap(),
        h = (t, e) => {
          let n = l.get(t);
          return (
            n ||
              ((n = new Promise((r, i) => {
                let s = t;
                const a = (t) => (e) => {
                    s === t && r(e);
                  },
                  c = (t) => (e) => {
                    s === t && i(e);
                  },
                  u = () => {
                    try {
                      const t = e();
                      f(t)
                        ? (l.set(t, n),
                          (s = t),
                          t.then(a(t), c(t)),
                          (0, o.MO)(t, u))
                        : r(t);
                    } catch (t) {
                      i(t);
                    }
                  };
                (t.then(a(t), c(t)), (0, o.MO)(t, u));
              })),
              l.set(t, n)),
            n
          );
        };
      function d(t, e) {
        const { delay: n, unstable_promiseStatus: i = !r.use } = e || {},
          o = a(e),
          [[s, l, d], p] = (0, r.useReducer)(
            (e) => {
              const n = o.get(t);
              return Object.is(e[0], n) && e[1] === o && e[2] === t
                ? e
                : [n, o, t];
            },
            void 0,
            () => [o.get(t), o, t]
          );
        let y = s;
        if (
          ((l === o && d === t) || (p(), (y = o.get(t))),
          (0, r.useEffect)(() => {
            const e = o.sub(t, () => {
              if (i)
                try {
                  const e = o.get(t);
                  f(e) && c(h(e, () => o.get(t)));
                } catch (e) {}
              'number' != typeof n ? p() : setTimeout(p, n);
            });
            return (p(), e);
          }, [o, t, n, i]),
          (0, r.useDebugValue)(y),
          f(y))
        ) {
          const e = h(y, () => o.get(t));
          return (i && c(e), u(e));
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
        return [d(t, e), p(t, e)];
      }
    },
    3526: (t, e, n) => {
      'use strict';
      function r(t) {
        var e,
          n,
          i = '';
        if ('string' == typeof t || 'number' == typeof t) i += t;
        else if ('object' == typeof t)
          if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
              t[e] && (n = r(t[e])) && (i && (i += ' '), (i += n));
          } else for (n in t) t[n] && (i && (i += ' '), (i += n));
        return i;
      }
      n.d(e, { A: () => i });
      const i = function () {
        for (var t, e, n = 0, i = '', o = arguments.length; n < o; n++)
          (t = arguments[n]) && (e = r(t)) && (i && (i += ' '), (i += e));
        return i;
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
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, i) {
            for (
              var o,
                s,
                a = (function (t) {
                  if (null == t)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined'
                    );
                  return Object(t);
                })(t),
                f = 1;
              f < arguments.length;
              f++
            ) {
              for (var c in (o = Object(arguments[f])))
                n.call(o, c) && (a[c] = o[c]);
              if (e) {
                s = e(o);
                for (var u = 0; u < s.length; u++)
                  r.call(o, s[u]) && (a[s[u]] = o[s[u]]);
              }
            }
            return a;
          };
    },
    4486: (t, e, n) => {
      'use strict';
      n.d(e, {
        Ay: () => l,
        B4: () => f,
        P5: () => a,
        WM: () => c,
        im: () => u,
        lD: () => s,
      });
      const r = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(t, e = !1) {
        return e
          ? { h: Number(t & r), l: Number((t >> i) & r) }
          : { h: 0 | Number((t >> i) & r), l: 0 | Number(t & r) };
      }
      function s(t, e = !1) {
        let n = new Uint32Array(t.length),
          r = new Uint32Array(t.length);
        for (let i = 0; i < t.length; i++) {
          const { h: s, l: a } = o(t[i], e);
          [n[i], r[i]] = [s, a];
        }
        return [n, r];
      }
      const a = (t, e, n) => (t << n) | (e >>> (32 - n)),
        f = (t, e, n) => (e << n) | (t >>> (32 - n)),
        c = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        u = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
        l = {
          fromBig: o,
          split: s,
          toBig: (t, e) => (BigInt(t >>> 0) << i) | BigInt(e >>> 0),
          shrSH: (t, e, n) => t >>> n,
          shrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrSH: (t, e, n) => (t >>> n) | (e << (32 - n)),
          rotrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrBH: (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
          rotrBL: (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
          rotr32H: (t, e) => e,
          rotr32L: (t, e) => t,
          rotlSH: a,
          rotlSL: f,
          rotlBH: c,
          rotlBL: u,
          add: function (t, e, n, r) {
            const i = (e >>> 0) + (r >>> 0);
            return { h: (t + n + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
          },
          add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
          add3H: (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
          add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
          add4H: (t, e, n, r, i) => (e + n + r + i + ((t / 2 ** 32) | 0)) | 0,
          add5H: (t, e, n, r, i, o) =>
            (e + n + r + i + o + ((t / 2 ** 32) | 0)) | 0,
          add5L: (t, e, n, r, i) =>
            (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        };
    },
    4566: (t, e, n) => {
      'use strict';
      n.d(e, { eU: () => a, zp: () => u });
      var r = n(1453);
      let i,
        o,
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
            : ((r.init = t), (r.read = f), (r.write = c)),
          e && (r.write = e),
          r
        );
      }
      function f(t) {
        return t(this);
      }
      function c(t, e, n) {
        return e(this, 'function' == typeof n ? n(t(this)) : n);
      }
      function u() {
        return (
          o ||
            ((o = i ? i() : (0, r.ff)()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = o),
            globalThis.__JOTAI_DEFAULT_STORE__),
          o
        );
      }
    },
    4711: (t, e, n) => {
      'use strict';
      n.d(e, { bI: () => st });
      var r = {};
      (n.r(r),
        n.d(r, {
          OG: () => b,
          My: () => c,
          Ph: () => h,
          lX: () => d,
          Id: () => w,
          fg: () => v,
          qj: () => g,
          aT: () => l,
          lq: () => p,
          z: () => y,
          Q5: () => A,
        }));
      var i = n(5671);
      BigInt(0);
      const o = BigInt(1),
        s = BigInt(2),
        a = (t) => t instanceof Uint8Array,
        f = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, '0')
        );
      function c(t) {
        if (!a(t)) throw new Error('Uint8Array expected');
        let e = '';
        for (let n = 0; n < t.length; n++) e += f[t[n]];
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
            i = t.slice(e, e + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error('Invalid byte sequence');
          n[r] = o;
        }
        return n;
      }
      function h(t) {
        return u(c(t));
      }
      function d(t) {
        if (!a(t)) throw new Error('Uint8Array expected');
        return u(c(Uint8Array.from(t).reverse()));
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
          } catch (o) {
            throw new Error(
              `${t} must be valid hex string, got "${e}". Cause: ${o}`
            );
          }
        else {
          if (!a(e)) throw new Error(`${t} must be hex string or Uint8Array`);
          r = Uint8Array.from(e);
        }
        const i = r.length;
        if ('number' == typeof n && i !== n)
          throw new Error(`${t} expected ${n} bytes, got ${i}`);
        return r;
      }
      function w(...t) {
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
      const b = (t) => (s << BigInt(t - 1)) - o,
        m = (t) => new Uint8Array(t),
        E = (t) => Uint8Array.from(t);
      function v(t, e, n) {
        if ('number' != typeof t || t < 2)
          throw new Error('hashLen must be a number');
        if ('number' != typeof e || e < 2)
          throw new Error('qByteLen must be a number');
        if ('function' != typeof n)
          throw new Error('hmacFn must be a function');
        let r = m(t),
          i = m(t),
          o = 0;
        const s = () => {
            (r.fill(1), i.fill(0), (o = 0));
          },
          a = (...t) => n(i, r, ...t),
          f = (t = m()) => {
            ((i = a(E([0]), t)),
              (r = a()),
              0 !== t.length && ((i = a(E([1]), t)), (r = a())));
          },
          c = () => {
            if (o++ >= 1e3) throw new Error('drbg: tried 1000 values');
            let t = 0;
            const n = [];
            for (; t < e; ) {
              r = a();
              const e = r.slice();
              (n.push(e), (t += r.length));
            }
            return w(...n);
          };
        return (t, e) => {
          let n;
          for (s(), f(t); !(n = e(c())); ) f();
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
          const i = x[n];
          if ('function' != typeof i)
            throw new Error(`Invalid validator "${n}", expected function`);
          const o = t[e];
          if (!((r && void 0 === o) || i(o, t)))
            throw new Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${n}`
            );
        };
        for (const [i, o] of Object.entries(e)) r(i, o, !1);
        for (const [i, o] of Object.entries(n)) r(i, o, !0);
        return t;
      }
      const B = BigInt(0),
        O = BigInt(1),
        S = BigInt(2),
        I = BigInt(3),
        L = BigInt(4),
        k = BigInt(5),
        H = BigInt(8);
      function T(t, e) {
        const n = t % e;
        return n >= B ? n : e + n;
      }
      function R(t, e, n) {
        if (n <= B || e < B) throw new Error('Expected power/modulo > 0');
        if (n === O) return B;
        let r = O;
        for (; e > B; )
          (e & O && (r = (r * t) % n), (t = (t * t) % n), (e >>= O));
        return r;
      }
      function U(t, e, n) {
        let r = t;
        for (; e-- > B; ) ((r *= r), (r %= n));
        return r;
      }
      function j(t, e) {
        if (t === B || e <= B)
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let n = T(t, e),
          r = e,
          i = B,
          o = O,
          s = O,
          a = B;
        for (; n !== B; ) {
          const t = r / n,
            e = r % n,
            f = i - s * t,
            c = o - a * t;
          ((r = n), (n = e), (i = s), (o = a), (s = f), (a = c));
        }
        if (r !== O) throw new Error('invert: does not exist');
        return T(i, e);
      }
      (BigInt(9), BigInt(16));
      const N = [
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
      function P(t, e) {
        const n = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
      }
      function q(t) {
        if ('bigint' != typeof t) throw new Error('field order must be bigint');
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function F(t) {
        const e = q(t);
        return e + Math.ceil(e / 2);
      }
      var C = n(5789),
        _ = n(982);
      class D extends _.Vw {
        constructor(t, e) {
          (super(), (this.finished = !1), (this.destroyed = !1), (0, C.tW)(t));
          const n = (0, _.ZJ)(e);
          if (
            ((this.iHash = t.create()), 'function' != typeof this.iHash.update)
          )
            throw new Error(
              'Expected instance of class which extends utils.Hash'
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const r = this.blockLen,
            i = new Uint8Array(r);
          i.set(n.length > r ? t.create().update(n).digest() : n);
          for (let o = 0; o < i.length; o++) i[o] ^= 54;
          (this.iHash.update(i), (this.oHash = t.create()));
          for (let o = 0; o < i.length; o++) i[o] ^= 106;
          (this.oHash.update(i), i.fill(0));
        }
        update(t) {
          return ((0, C.t2)(this), this.iHash.update(t), this);
        }
        digestInto(t) {
          ((0, C.t2)(this),
            (0, C.ee)(t, this.outputLen),
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
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = r),
            (t.destroyed = i),
            (t.blockLen = o),
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
      const z = (t, e, n) => new D(t, e).update(n).digest();
      z.create = (t, e) => new D(t, e);
      const $ = BigInt(0),
        V = BigInt(1);
      function Z(t) {
        return (
          A(
            t.Fp,
            N.reduce((t, e) => ((t[e] = 'function'), t), {
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
          Object.freeze({ ...P(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      const { Ph: W, aT: M } = r,
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
              n = 'string' == typeof t ? M(t) : t;
            if (!(n instanceof Uint8Array)) throw new Error('ui8a expected');
            let r = n.length;
            if (r < 2 || 48 != n[0]) throw new e('Invalid signature tag');
            if (n[1] !== r - 2)
              throw new e('Invalid signature: incorrect length');
            const { d: i, l: o } = G._parseInt(n.subarray(2)),
              { d: s, l: a } = G._parseInt(o);
            if (a.length)
              throw new e('Invalid signature: left bytes after parsing');
            return { r: i, s };
          },
          hexFromSig(t) {
            const e = (t) => (8 & Number.parseInt(t[0], 16) ? '00' + t : t),
              n = (t) => {
                const e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              r = e(n(t.s)),
              i = e(n(t.r)),
              o = r.length / 2,
              s = i.length / 2,
              a = n(o),
              f = n(s);
            return `30${n(s + o + 4)}02${f}${i}02${a}${r}`;
          },
        },
        Y = BigInt(0),
        K = BigInt(1),
        J = (BigInt(2), BigInt(3));
      function X(t) {
        const e = (function (t) {
            const e = Z(t);
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
          i = n.BYTES + 1,
          o = 2 * n.BYTES + 1;
        function s(t) {
          return T(t, r);
        }
        function a(t) {
          return j(t, r);
        }
        const {
            ProjectivePoint: f,
            normPrivateKeyToScalar: u,
            weierstrassEquation: m,
            isWithinCurveOrder: E,
          } = (function (t) {
            const e = (function (t) {
                const e = Z(t);
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
                const { endo: n, Fp: r, a: i } = e;
                if (n) {
                  if (!r.eql(i, r.ZERO))
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
                  const i = e.toAffine();
                  return w(
                    Uint8Array.from([4]),
                    n.toBytes(i.x),
                    n.toBytes(i.y)
                  );
                }),
              i =
                e.fromBytes ||
                ((t) => {
                  const e = t.subarray(1);
                  return {
                    x: n.fromBytes(e.subarray(0, n.BYTES)),
                    y: n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES)),
                  };
                });
            function o(t) {
              const { a: r, b: i } = e,
                o = n.sqr(t),
                s = n.mul(o, t);
              return n.add(n.add(s, n.mul(t, r)), i);
            }
            if (!n.eql(n.sqr(e.Gy), o(e.Gx)))
              throw new Error('bad generator point: equation left != right');
            function s(t) {
              return 'bigint' == typeof t && Y < t && t < e.n;
            }
            function a(t) {
              if (!s(t))
                throw new Error('Expected valid bigint: 0 < bigint < curve.n');
            }
            function f(t) {
              const {
                allowedPrivateKeyLengths: n,
                nByteLength: r,
                wrapPrivateKey: i,
                n: o,
              } = e;
              if (n && 'bigint' != typeof t) {
                if (
                  (t instanceof Uint8Array && (t = c(t)),
                  'string' != typeof t || !n.includes(t.length))
                )
                  throw new Error('Invalid key');
                t = t.padStart(2 * r, '0');
              }
              let s;
              try {
                s = 'bigint' == typeof t ? t : h(g('private key', t, r));
              } catch (f) {
                throw new Error(
                  `private key must be ${r} bytes, hex or bigint, not ${typeof t}`
                );
              }
              return (i && (s = T(s, o)), a(s), s);
            }
            const u = new Map();
            function l(t) {
              if (!(t instanceof d))
                throw new Error('ProjectivePoint expected');
            }
            class d {
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
                if (t instanceof d)
                  throw new Error('projective point not allowed');
                const i = (t) => n.eql(t, n.ZERO);
                return i(e) && i(r) ? d.ZERO : new d(e, r, n.ONE);
              }
              get x() {
                return this.toAffine().x;
              }
              get y() {
                return this.toAffine().y;
              }
              static normalizeZ(t) {
                const e = n.invertBatch(t.map((t) => t.pz));
                return t.map((t, n) => t.toAffine(e[n])).map(d.fromAffine);
              }
              static fromHex(t) {
                const e = d.fromAffine(i(g('pointHex', t)));
                return (e.assertValidity(), e);
              }
              static fromPrivateKey(t) {
                return d.BASE.multiply(f(t));
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
                const i = n.sqr(r),
                  s = o(t);
                if (!n.eql(i, s))
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
                const { px: e, py: r, pz: i } = this,
                  { px: o, py: s, pz: a } = t,
                  f = n.eql(n.mul(e, a), n.mul(o, i)),
                  c = n.eql(n.mul(r, a), n.mul(s, i));
                return f && c;
              }
              negate() {
                return new d(this.px, n.neg(this.py), this.pz);
              }
              double() {
                const { a: t, b: r } = e,
                  i = n.mul(r, J),
                  { px: o, py: s, pz: a } = this;
                let f = n.ZERO,
                  c = n.ZERO,
                  u = n.ZERO,
                  l = n.mul(o, o),
                  h = n.mul(s, s),
                  p = n.mul(a, a),
                  y = n.mul(o, s);
                return (
                  (y = n.add(y, y)),
                  (u = n.mul(o, a)),
                  (u = n.add(u, u)),
                  (f = n.mul(t, u)),
                  (c = n.mul(i, p)),
                  (c = n.add(f, c)),
                  (f = n.sub(h, c)),
                  (c = n.add(h, c)),
                  (c = n.mul(f, c)),
                  (f = n.mul(y, f)),
                  (u = n.mul(i, u)),
                  (p = n.mul(t, p)),
                  (y = n.sub(l, p)),
                  (y = n.mul(t, y)),
                  (y = n.add(y, u)),
                  (u = n.add(l, l)),
                  (l = n.add(u, l)),
                  (l = n.add(l, p)),
                  (l = n.mul(l, y)),
                  (c = n.add(c, l)),
                  (p = n.mul(s, a)),
                  (p = n.add(p, p)),
                  (l = n.mul(p, y)),
                  (f = n.sub(f, l)),
                  (u = n.mul(p, h)),
                  (u = n.add(u, u)),
                  (u = n.add(u, u)),
                  new d(f, c, u)
                );
              }
              add(t) {
                l(t);
                const { px: r, py: i, pz: o } = this,
                  { px: s, py: a, pz: f } = t;
                let c = n.ZERO,
                  u = n.ZERO,
                  h = n.ZERO;
                const p = e.a,
                  y = n.mul(e.b, J);
                let g = n.mul(r, s),
                  w = n.mul(i, a),
                  b = n.mul(o, f),
                  m = n.add(r, i),
                  E = n.add(s, a);
                ((m = n.mul(m, E)),
                  (E = n.add(g, w)),
                  (m = n.sub(m, E)),
                  (E = n.add(r, o)));
                let v = n.add(s, f);
                return (
                  (E = n.mul(E, v)),
                  (v = n.add(g, b)),
                  (E = n.sub(E, v)),
                  (v = n.add(i, o)),
                  (c = n.add(a, f)),
                  (v = n.mul(v, c)),
                  (c = n.add(w, b)),
                  (v = n.sub(v, c)),
                  (h = n.mul(p, E)),
                  (c = n.mul(y, b)),
                  (h = n.add(c, h)),
                  (c = n.sub(w, h)),
                  (h = n.add(w, h)),
                  (u = n.mul(c, h)),
                  (w = n.add(g, g)),
                  (w = n.add(w, g)),
                  (b = n.mul(p, b)),
                  (E = n.mul(y, E)),
                  (w = n.add(w, b)),
                  (b = n.sub(g, b)),
                  (b = n.mul(p, b)),
                  (E = n.add(E, b)),
                  (g = n.mul(w, E)),
                  (u = n.add(u, g)),
                  (g = n.mul(v, E)),
                  (c = n.mul(m, c)),
                  (c = n.sub(c, g)),
                  (g = n.mul(m, w)),
                  (h = n.mul(v, h)),
                  (h = n.add(h, g)),
                  new d(c, u, h)
                );
              }
              subtract(t) {
                return this.add(t.negate());
              }
              is0() {
                return this.equals(d.ZERO);
              }
              wNAF(t) {
                return y.wNAFCached(this, u, t, (t) => {
                  const e = n.invertBatch(t.map((t) => t.pz));
                  return t.map((t, n) => t.toAffine(e[n])).map(d.fromAffine);
                });
              }
              multiplyUnsafe(t) {
                const r = d.ZERO;
                if (t === Y) return r;
                if ((a(t), t === K)) return this;
                const { endo: i } = e;
                if (!i) return y.unsafeLadder(this, t);
                let { k1neg: o, k1: s, k2neg: f, k2: c } = i.splitScalar(t),
                  u = r,
                  l = r,
                  h = this;
                for (; s > Y || c > Y; )
                  (s & K && (u = u.add(h)),
                    c & K && (l = l.add(h)),
                    (h = h.double()),
                    (s >>= K),
                    (c >>= K));
                return (
                  o && (u = u.negate()),
                  f && (l = l.negate()),
                  (l = new d(n.mul(l.px, i.beta), l.py, l.pz)),
                  u.add(l)
                );
              }
              multiply(t) {
                a(t);
                let r,
                  i,
                  o = t;
                const { endo: s } = e;
                if (s) {
                  const { k1neg: t, k1: e, k2neg: a, k2: f } = s.splitScalar(o);
                  let { p: c, f: u } = this.wNAF(e),
                    { p: l, f: h } = this.wNAF(f);
                  ((c = y.constTimeNegate(t, c)),
                    (l = y.constTimeNegate(a, l)),
                    (l = new d(n.mul(l.px, s.beta), l.py, l.pz)),
                    (r = c.add(l)),
                    (i = u.add(h)));
                } else {
                  const { p: t, f: e } = this.wNAF(o);
                  ((r = t), (i = e));
                }
                return d.normalizeZ([r, i])[0];
              }
              multiplyAndAddUnsafe(t, e, n) {
                const r = d.BASE,
                  i = (t, e) =>
                    e !== Y && e !== K && t.equals(r)
                      ? t.multiply(e)
                      : t.multiplyUnsafe(e),
                  o = i(this, e).add(i(t, n));
                return o.is0() ? void 0 : o;
              }
              toAffine(t) {
                const { px: e, py: r, pz: i } = this,
                  o = this.is0();
                null == t && (t = o ? n.ONE : n.inv(i));
                const s = n.mul(e, t),
                  a = n.mul(r, t),
                  f = n.mul(i, t);
                if (o) return { x: n.ZERO, y: n.ZERO };
                if (!n.eql(f, n.ONE)) throw new Error('invZ was invalid');
                return { x: s, y: a };
              }
              isTorsionFree() {
                const { h: t, isTorsionFree: n } = e;
                if (t === K) return !0;
                if (n) return n(d, this);
                throw new Error(
                  'isTorsionFree() has not been declared for the elliptic curve'
                );
              }
              clearCofactor() {
                const { h: t, clearCofactor: n } = e;
                return t === K
                  ? this
                  : n
                    ? n(d, this)
                    : this.multiplyUnsafe(e.h);
              }
              toRawBytes(t = !0) {
                return (this.assertValidity(), r(d, this, t));
              }
              toHex(t = !0) {
                return c(this.toRawBytes(t));
              }
            }
            ((d.BASE = new d(e.Gx, e.Gy, n.ONE)),
              (d.ZERO = new d(n.ZERO, n.ONE, n.ZERO)));
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
                      i = e;
                    for (; n > $; )
                      (n & V && (r = r.add(i)), (i = i.double()), (n >>= V));
                    return r;
                  },
                  precomputeWindow(t, e) {
                    const { windows: n, windowSize: i } = r(e),
                      o = [];
                    let s = t,
                      a = s;
                    for (let r = 0; r < n; r++) {
                      ((a = s), o.push(a));
                      for (let t = 1; t < i; t++) ((a = a.add(s)), o.push(a));
                      s = a.double();
                    }
                    return o;
                  },
                  wNAF(e, i, o) {
                    const { windows: s, windowSize: a } = r(e);
                    let f = t.ZERO,
                      c = t.BASE;
                    const u = BigInt(2 ** e - 1),
                      l = 2 ** e,
                      h = BigInt(e);
                    for (let t = 0; t < s; t++) {
                      const e = t * a;
                      let r = Number(o & u);
                      ((o >>= h), r > a && ((r -= l), (o += V)));
                      const s = e,
                        d = e + Math.abs(r) - 1,
                        p = t % 2 != 0,
                        y = r < 0;
                      0 === r
                        ? (c = c.add(n(p, i[s])))
                        : (f = f.add(n(y, i[d])));
                    }
                    return { p: f, f: c };
                  },
                  wNAFCached(t, e, n, r) {
                    const i = t._WINDOW_SIZE || 1;
                    let o = e.get(t);
                    return (
                      o ||
                        ((o = this.precomputeWindow(t, i)),
                        1 !== i && e.set(t, r(o))),
                      this.wNAF(i, o, n)
                    );
                  },
                };
              })(d, e.endo ? Math.ceil(p / 2) : p);
            return {
              CURVE: e,
              ProjectivePoint: d,
              normPrivateKeyToScalar: f,
              weierstrassEquation: o,
              isWithinCurveOrder: s,
            };
          })({
            ...e,
            toBytes(t, e, r) {
              const i = e.toAffine(),
                o = n.toBytes(i.x),
                s = w;
              return r
                ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                : s(Uint8Array.from([4]), o, n.toBytes(i.y));
            },
            fromBytes(t) {
              const e = t.length,
                r = t[0],
                s = t.subarray(1);
              if (e !== i || (2 !== r && 3 !== r)) {
                if (e === o && 4 === r)
                  return {
                    x: n.fromBytes(s.subarray(0, n.BYTES)),
                    y: n.fromBytes(s.subarray(n.BYTES, 2 * n.BYTES)),
                  };
                throw new Error(
                  `Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
                );
              }
              {
                const t = h(s);
                if (!(Y < (a = t) && a < n.ORDER))
                  throw new Error('Point is not on curve');
                const e = m(t);
                let i = n.sqrt(e);
                return (
                  !(1 & ~r) != ((i & K) === K) && (i = n.neg(i)),
                  { x: t, y: i }
                );
              }
              var a;
            },
          }),
          x = (t) => c(p(t, e.nByteLength));
        function B(t) {
          return t > r >> K;
        }
        const S = (t, e, n) => h(t.slice(e, n));
        class I {
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
              new I(S(t, 0, n), S(t, n, 2 * n))
            );
          }
          static fromDER(t) {
            const { r: e, s: n } = G.toSig(g('DER', t));
            return new I(e, n);
          }
          assertValidity() {
            if (!E(this.r)) throw new Error('r must be 0 < r < CURVE.n');
            if (!E(this.s)) throw new Error('s must be 0 < s < CURVE.n');
          }
          addRecoveryBit(t) {
            return new I(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const { r, s: i, recovery: o } = this,
              c = R(g('msgHash', t));
            if (null == o || ![0, 1, 2, 3].includes(o))
              throw new Error('recovery id invalid');
            const u = 2 === o || 3 === o ? r + e.n : r;
            if (u >= n.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const l = 1 & o ? '03' : '02',
              h = f.fromHex(l + x(u)),
              d = a(u),
              p = s(-c * d),
              y = s(i * d),
              w = f.BASE.multiplyAndAddUnsafe(h, p, y);
            if (!w) throw new Error('point at infinify');
            return (w.assertValidity(), w);
          }
          hasHighS() {
            return B(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new I(this.r, s(-this.s), this.recovery)
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
        const L = {
          isValidPrivateKey(t) {
            try {
              return (u(t), !0);
            } catch (e) {
              return !1;
            }
          },
          normPrivateKeyToScalar: u,
          randomPrivateKey: () => {
            const t = F(e.n);
            return (function (t, e, n = !1) {
              const r = t.length,
                i = q(e),
                o = F(e);
              if (r < 16 || r < o || r > 1024)
                throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
              const s = T(n ? h(t) : d(t), e - O) + O;
              return n ? y(s, i) : p(s, i);
            })(e.randomBytes(t), e.n);
          },
          precompute: (t = 8, e = f.BASE) => (
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
            ? r === i || r === o
            : n
              ? r === 2 * i || r === 2 * o
              : t instanceof f;
        }
        const H =
            e.bits2int ||
            function (t) {
              const n = h(t),
                r = 8 * t.length - e.nBitLength;
              return r > 0 ? n >> BigInt(r) : n;
            },
          R =
            e.bits2int_modN ||
            function (t) {
              return s(H(t));
            },
          U = b(e.nBitLength);
        function N(t) {
          if ('bigint' != typeof t) throw new Error('bigint expected');
          if (!(Y <= t && t < U))
            throw new Error(`bigint expected < 2^${e.nBitLength}`);
          return p(t, e.nByteLength);
        }
        const P = { lowS: e.lowS, prehash: !1 },
          C = { lowS: e.lowS, prehash: !1 };
        return (
          f.BASE._setWindowSize(8),
          {
            CURVE: e,
            getPublicKey: function (t, e = !0) {
              return f.fromPrivateKey(t).toRawBytes(e);
            },
            getSharedSecret: function (t, e, n = !0) {
              if (k(t)) throw new Error('first arg must be private key');
              if (!k(e)) throw new Error('second arg must be public key');
              return f.fromHex(e).multiply(u(t)).toRawBytes(n);
            },
            sign: function (t, r, i = P) {
              const { seed: o, k2sig: c } = (function (t, r, i = P) {
                  if (['recovered', 'canonical'].some((t) => t in i))
                    throw new Error('sign() legacy options not supported');
                  const { hash: o, randomBytes: c } = e;
                  let { lowS: l, prehash: h, extraEntropy: d } = i;
                  (null == l && (l = !0),
                    (t = g('msgHash', t)),
                    h && (t = g('prehashed msgHash', o(t))));
                  const p = R(t),
                    y = u(r),
                    b = [N(y), N(p)];
                  if (null != d) {
                    const t = !0 === d ? c(n.BYTES) : d;
                    b.push(g('extraEntropy', t));
                  }
                  const m = w(...b),
                    v = p;
                  return {
                    seed: m,
                    k2sig: function (t) {
                      const e = H(t);
                      if (!E(e)) return;
                      const n = a(e),
                        r = f.BASE.multiply(e).toAffine(),
                        i = s(r.x);
                      if (i === Y) return;
                      const o = s(n * s(v + i * y));
                      if (o === Y) return;
                      let c = (r.x === i ? 0 : 2) | Number(r.y & K),
                        u = o;
                      return (
                        l &&
                          B(o) &&
                          ((u = (function (t) {
                            return B(t) ? s(-t) : t;
                          })(o)),
                          (c ^= 1)),
                        new I(i, u, c)
                      );
                    },
                  };
                })(t, r, i),
                l = e;
              return v(l.hash.outputLen, l.nByteLength, l.hmac)(o, c);
            },
            verify: function (t, n, r, i = C) {
              const o = t;
              if (
                ((n = g('msgHash', n)), (r = g('publicKey', r)), 'strict' in i)
              )
                throw new Error('options.strict was renamed to lowS');
              const { lowS: c, prehash: u } = i;
              let l, h;
              try {
                if ('string' == typeof o || o instanceof Uint8Array)
                  try {
                    l = I.fromDER(o);
                  } catch (v) {
                    if (!(v instanceof G.Err)) throw v;
                    l = I.fromCompact(o);
                  }
                else {
                  if (
                    'object' != typeof o ||
                    'bigint' != typeof o.r ||
                    'bigint' != typeof o.s
                  )
                    throw new Error('PARSE');
                  {
                    const { r: t, s: e } = o;
                    l = new I(t, e);
                  }
                }
                h = f.fromHex(r);
              } catch (x) {
                if ('PARSE' === x.message)
                  throw new Error(
                    'signature must be Signature instance, Uint8Array or hex string'
                  );
                return !1;
              }
              if (c && l.hasHighS()) return !1;
              u && (n = e.hash(n));
              const { r: d, s: p } = l,
                y = R(n),
                w = a(p),
                b = s(y * w),
                m = s(d * w),
                E = f.BASE.multiplyAndAddUnsafe(h, b, m)?.toAffine();
              return !!E && s(E.x) === d;
            },
            ProjectivePoint: f,
            Signature: I,
            utils: L,
          }
        );
      }
      function Q(t) {
        return {
          hash: t,
          hmac: (e, ...n) => z(t, e, (0, _.Id)(...n)),
          randomBytes: _.po,
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
        it = (t, e) => (t + e / rt) / e;
      const ot = (function (t, e, n = !1, r = {}) {
          if (t <= B) throw new Error(`Expected Field ORDER > 0, got ${t}`);
          const { nBitLength: i, nByteLength: o } = P(t, e);
          if (o > 2048)
            throw new Error('Field lengths over 2048 bytes are not supported');
          const s = (function (t) {
              if (t % L === I) {
                const e = (t + O) / L;
                return function (t, n) {
                  const r = t.pow(n, e);
                  if (!t.eql(t.sqr(r), n))
                    throw new Error('Cannot find square root');
                  return r;
                };
              }
              if (t % H === k) {
                const e = (t - k) / H;
                return function (t, n) {
                  const r = t.mul(n, S),
                    i = t.pow(r, e),
                    o = t.mul(n, i),
                    s = t.mul(t.mul(o, S), i),
                    a = t.mul(o, t.sub(s, t.ONE));
                  if (!t.eql(t.sqr(a), n))
                    throw new Error('Cannot find square root');
                  return a;
                };
              }
              return (function (t) {
                const e = (t - O) / S;
                let n, r, i;
                for (n = t - O, r = 0; n % S === B; n /= S, r++);
                for (i = S; i < t && R(i, e, t) !== t - O; i++);
                if (1 === r) {
                  const e = (t + O) / L;
                  return function (t, n) {
                    const r = t.pow(n, e);
                    if (!t.eql(t.sqr(r), n))
                      throw new Error('Cannot find square root');
                    return r;
                  };
                }
                const o = (n + O) / S;
                return function (t, s) {
                  if (t.pow(s, e) === t.neg(t.ONE))
                    throw new Error('Cannot find square root');
                  let a = r,
                    f = t.pow(t.mul(t.ONE, i), n),
                    c = t.pow(s, o),
                    u = t.pow(s, n);
                  for (; !t.eql(u, t.ONE); ) {
                    if (t.eql(u, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(u); e < a && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    const n = t.pow(f, O << BigInt(a - e - 1));
                    ((f = t.sqr(n)),
                      (c = t.mul(c, n)),
                      (u = t.mul(u, f)),
                      (a = e));
                  }
                  return c;
                };
              })(t);
            })(t),
            a = Object.freeze({
              ORDER: t,
              BITS: i,
              BYTES: o,
              MASK: b(i),
              ZERO: B,
              ONE: O,
              create: (e) => T(e, t),
              isValid: (e) => {
                if ('bigint' != typeof e)
                  throw new Error(
                    'Invalid field element: expected bigint, got ' + typeof e
                  );
                return B <= e && e < t;
              },
              is0: (t) => t === B,
              isOdd: (t) => (t & O) === O,
              neg: (e) => T(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => T(e * e, t),
              add: (e, n) => T(e + n, t),
              sub: (e, n) => T(e - n, t),
              mul: (e, n) => T(e * n, t),
              pow: (t, e) =>
                (function (t, e, n) {
                  if (n < B) throw new Error('Expected power > 0');
                  if (n === B) return t.ONE;
                  if (n === O) return e;
                  let r = t.ONE,
                    i = e;
                  for (; n > B; )
                    (n & O && (r = t.mul(r, i)), (i = t.sqr(i)), (n >>= O));
                  return r;
                })(a, t, e),
              div: (e, n) => T(e * j(n, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => j(e, t),
              sqrt: r.sqrt || ((t) => s(a, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  const n = new Array(e.length),
                    r = e.reduce(
                      (e, r, i) => (t.is0(r) ? e : ((n[i] = e), t.mul(e, r))),
                      t.ONE
                    ),
                    i = t.inv(r);
                  return (
                    e.reduceRight(
                      (e, r, i) =>
                        t.is0(r) ? e : ((n[i] = t.mul(e, n[i])), t.mul(e, r)),
                      i
                    ),
                    n
                  );
                })(a, t),
              cmov: (t, e, n) => (n ? e : t),
              toBytes: (t) => (n ? y(t, o) : p(t, o)),
              fromBytes: (t) => {
                if (t.length !== o)
                  throw new Error(
                    `Fp.fromBytes: expected ${o}, got ${t.length}`
                  );
                return n ? d(t) : h(t);
              },
            });
          return Object.freeze(a);
        })(tt, void 0, void 0, {
          sqrt: function (t) {
            const e = tt,
              n = BigInt(3),
              r = BigInt(6),
              i = BigInt(11),
              o = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              f = BigInt(88),
              c = (t * t * t) % e,
              u = (c * c * t) % e,
              l = (U(u, n, e) * u) % e,
              h = (U(l, n, e) * u) % e,
              d = (U(h, rt, e) * c) % e,
              p = (U(d, i, e) * d) % e,
              y = (U(p, o, e) * p) % e,
              g = (U(y, a, e) * y) % e,
              w = (U(g, f, e) * g) % e,
              b = (U(w, a, e) * y) % e,
              m = (U(b, n, e) * u) % e,
              E = (U(m, s, e) * p) % e,
              v = (U(E, r, e) * c) % e,
              x = U(v, rt, e);
            if (!ot.eql(ot.sqr(x), t))
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
            Fp: ot,
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
                  i = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  o = n,
                  s = BigInt('0x100000000000000000000000000000000'),
                  a = it(o * t, e),
                  f = it(-r * t, e);
                let c = T(t - a * n - f * i, e),
                  u = T(-a * r - f * o, e);
                const l = c > s,
                  h = u > s;
                if ((l && (c = e - c), h && (u = e - u), c > s || u > s))
                  throw new Error('splitScalar: Endomorphism failed, k=' + t);
                return { k1neg: l, k1: c, k2neg: h, k2: u };
              },
            },
          },
          i.s
        );
      (BigInt(0), st.ProjectivePoint);
    },
    5671: (t, e, n) => {
      'use strict';
      n.d(e, { s: () => l });
      var r = n(8571),
        i = n(982);
      const o = (t, e, n) => (t & e) ^ (~t & n),
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
        f = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        c = new Uint32Array(64);
      class u extends r.D {
        constructor() {
          (super(64, 32, 8, !1),
            (this.A = 0 | f[0]),
            (this.B = 0 | f[1]),
            (this.C = 0 | f[2]),
            (this.D = 0 | f[3]),
            (this.E = 0 | f[4]),
            (this.F = 0 | f[5]),
            (this.G = 0 | f[6]),
            (this.H = 0 | f[7]));
        }
        get() {
          const { A: t, B: e, C: n, D: r, E: i, F: o, G: s, H: a } = this;
          return [t, e, n, r, i, o, s, a];
        }
        set(t, e, n, r, i, o, s, a) {
          ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(t, e) {
          for (let i = 0; i < 16; i++, e += 4) c[i] = t.getUint32(e, !1);
          for (let o = 16; o < 64; o++) {
            const t = c[o - 15],
              e = c[o - 2],
              n = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              r = (0, i.Ow)(e, 17) ^ (0, i.Ow)(e, 19) ^ (e >>> 10);
            c[o] = (r + c[o - 7] + n + c[o - 16]) | 0;
          }
          let { A: n, B: r, C: f, D: u, E: l, F: h, G: d, H: p } = this;
          for (let y = 0; y < 64; y++) {
            const t =
                (p +
                  ((0, i.Ow)(l, 6) ^ (0, i.Ow)(l, 11) ^ (0, i.Ow)(l, 25)) +
                  o(l, h, d) +
                  a[y] +
                  c[y]) |
                0,
              e =
                (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) +
                  s(n, r, f)) |
                0;
            ((p = d),
              (d = h),
              (h = l),
              (l = (u + t) | 0),
              (u = f),
              (f = r),
              (r = n),
              (n = (t + e) | 0));
          }
          ((n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (f = (f + this.C) | 0),
            (u = (u + this.D) | 0),
            (l = (l + this.E) | 0),
            (h = (h + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(n, r, f, u, l, h, d, p));
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
        }
      }
      const l = (0, i.ld)(() => new u());
    },
    5699: (t, e, n) => {
      'use strict';
      n.d(e, { lY: () => E });
      var r = n(5789),
        i = n(4486),
        o = n(982);
      const [s, a, f] = [[], [], []],
        c = BigInt(0),
        u = BigInt(1),
        l = BigInt(2),
        h = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let v = 0, x = u, A = 1, B = 0; v < 24; v++) {
        (([A, B] = [B, (2 * A + 3 * B) % 5]),
          s.push(2 * (5 * B + A)),
          a.push((((v + 1) * (v + 2)) / 2) % 64));
        let t = c;
        for (let e = 0; e < 7; e++)
          ((x = ((x << u) ^ ((x >> h) * p)) % d),
            x & l && (t ^= u << ((u << BigInt(e)) - u)));
        f.push(t);
      }
      const [y, g] = (0, i.lD)(f, !0),
        w = (t, e, n) => (n > 32 ? (0, i.WM)(t, e, n) : (0, i.P5)(t, e, n)),
        b = (t, e, n) => (n > 32 ? (0, i.im)(t, e, n) : (0, i.B4)(t, e, n));
      class m extends o.Vw {
        constructor(t, e, n, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = i),
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
            (this.state32 = (0, o.DH)(this.state)));
        }
        keccak() {
          (!(function (t, e = 24) {
            const n = new Uint32Array(10);
            for (let r = 24 - e; r < 24; r++) {
              for (let r = 0; r < 10; r++)
                n[r] = t[r] ^ t[r + 10] ^ t[r + 20] ^ t[r + 30] ^ t[r + 40];
              for (let r = 0; r < 10; r += 2) {
                const e = (r + 8) % 10,
                  i = (r + 2) % 10,
                  o = n[i],
                  s = n[i + 1],
                  a = w(o, s, 1) ^ n[e],
                  f = b(o, s, 1) ^ n[e + 1];
                for (let n = 0; n < 50; n += 10)
                  ((t[r + n] ^= a), (t[r + n + 1] ^= f));
              }
              let e = t[2],
                i = t[3];
              for (let n = 0; n < 24; n++) {
                const r = a[n],
                  o = w(e, i, r),
                  f = b(e, i, r),
                  c = s[n];
                ((e = t[c]), (i = t[c + 1]), (t[c] = o), (t[c + 1] = f));
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
            i = (t = (0, o.ZJ)(t)).length;
          for (let r = 0; r < i; ) {
            const o = Math.min(e - this.pos, i - r);
            for (let e = 0; e < o; e++) n[this.pos++] ^= t[r++];
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
          for (let r = 0, i = t.length; r < i; ) {
            this.posOut >= n && this.keccak();
            const o = Math.min(n - this.posOut, i - r);
            (t.set(e.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o));
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
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new m(e, n, r, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      const E = ((t, e, n) => (0, o.ld)(() => new m(e, t, n)))(1, 136, 32);
    },
    5789: (t, e, n) => {
      'use strict';
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error(`Wrong positive integer: ${t}`);
      }
      function i(t, ...e) {
        if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
        if (e.length > 0 && !e.includes(t.length))
          throw new Error(
            `Expected Uint8Array of length ${e}, not of length=${t.length}`
          );
      }
      function o(t) {
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
        i(t);
        const n = e.outputLen;
        if (t.length < n)
          throw new Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      n.d(e, {
        CG: () => a,
        ai: () => r,
        ee: () => i,
        t2: () => s,
        tW: () => o,
      });
    },
    6720: (t, e, n) => {
      'use strict';
      var r = function () {},
        i = n(2985),
        o = {},
        s = n(2260);
      function a(t, e, n, a, f) {
        for (var c in t)
          if (s(t, c)) {
            var u;
            try {
              if ('function' != typeof t[c]) {
                var l = Error(
                  (a || 'React class') +
                    ': ' +
                    n +
                    ' type `' +
                    c +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof t[c] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((l.name = 'Invariant Violation'), l);
              }
              u = t[c](e, c, a, n, null, i);
            } catch (d) {
              u = d;
            }
            if (
              (!u ||
                u instanceof Error ||
                r(
                  (a || 'React class') +
                    ': type specification of ' +
                    n +
                    ' `' +
                    c +
                    '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                    typeof u +
                    '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                ),
              u instanceof Error && !(u.message in o))
            ) {
              o[u.message] = !0;
              var h = f ? f() : '';
              r('Failed ' + n + ' type: ' + u.message + (null != h ? h : ''));
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
          o = {};
        }),
        (t.exports = a));
    },
    8571: (t, e, n) => {
      'use strict';
      n.d(e, { D: () => o });
      var r = n(5789),
        i = n(982);
      class o extends i.Vw {
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
            (this.view = (0, i.O8)(this.buffer)));
        }
        update(t) {
          (0, r.t2)(this);
          const { view: e, buffer: n, blockLen: o } = this,
            s = (t = (0, i.ZJ)(t)).length;
          for (let r = 0; r < s; ) {
            const a = Math.min(o - this.pos, s - r);
            if (a === o) {
              const e = (0, i.O8)(t);
              for (; o <= s - r; r += o) this.process(e, r);
              continue;
            }
            (n.set(t.subarray(r, r + a), this.pos),
              (this.pos += a),
              (r += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0)));
          }
          return ((this.length += t.length), this.roundClean(), this);
        }
        digestInto(t) {
          ((0, r.t2)(this), (0, r.CG)(t, this), (this.finished = !0));
          const { buffer: e, view: n, blockLen: o, isLE: s } = this;
          let { pos: a } = this;
          ((e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(n, 0), (a = 0)));
          for (let r = a; r < o; r++) e[r] = 0;
          (!(function (t, e, n, r) {
            if ('function' == typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((n >> i) & o),
              a = Number(n & o),
              f = r ? 4 : 0,
              c = r ? 0 : 4;
            (t.setUint32(e + f, s, r), t.setUint32(e + c, a, r));
          })(n, o - 8, BigInt(8 * this.length), s),
            this.process(n, 0));
          const f = (0, i.O8)(t),
            c = this.outputLen;
          if (c % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
          const u = c / 4,
            l = this.get();
          if (u > l.length)
            throw new Error('_sha2: outputLen bigger than state');
          for (let r = 0; r < u; r++) f.setUint32(4 * r, l[r], s);
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
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = r),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
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
        i = n(4486),
        o = n(982);
      const [s, a] = (() =>
          i.Ay.split(
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
        f = new Uint32Array(80),
        c = new Uint32Array(80);
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
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: f,
            El: c,
            Fh: u,
            Fl: l,
            Gh: h,
            Gl: d,
            Hh: p,
            Hl: y,
          } = this;
          return [t, e, n, r, i, o, s, a, f, c, u, l, h, d, p, y];
        }
        set(t, e, n, r, i, o, s, a, f, c, u, l, h, d, p, y) {
          ((this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | f),
            (this.El = 0 | c),
            (this.Fh = 0 | u),
            (this.Fl = 0 | l),
            (this.Gh = 0 | h),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y));
        }
        process(t, e) {
          for (let i = 0; i < 16; i++, e += 4)
            ((f[i] = t.getUint32(e)), (c[i] = t.getUint32((e += 4))));
          for (let s = 16; s < 80; s++) {
            const t = 0 | f[s - 15],
              e = 0 | c[s - 15],
              n =
                i.Ay.rotrSH(t, e, 1) ^
                i.Ay.rotrSH(t, e, 8) ^
                i.Ay.shrSH(t, e, 7),
              r =
                i.Ay.rotrSL(t, e, 1) ^
                i.Ay.rotrSL(t, e, 8) ^
                i.Ay.shrSL(t, e, 7),
              o = 0 | f[s - 2],
              a = 0 | c[s - 2],
              u =
                i.Ay.rotrSH(o, a, 19) ^
                i.Ay.rotrBH(o, a, 61) ^
                i.Ay.shrSH(o, a, 6),
              l =
                i.Ay.rotrSL(o, a, 19) ^
                i.Ay.rotrBL(o, a, 61) ^
                i.Ay.shrSL(o, a, 6),
              h = i.Ay.add4L(r, l, c[s - 7], c[s - 16]),
              d = i.Ay.add4H(h, n, u, f[s - 7], f[s - 16]);
            ((f[s] = 0 | d), (c[s] = 0 | h));
          }
          let {
            Ah: n,
            Al: r,
            Bh: o,
            Bl: u,
            Ch: l,
            Cl: h,
            Dh: d,
            Dl: p,
            Eh: y,
            El: g,
            Fh: w,
            Fl: b,
            Gh: m,
            Gl: E,
            Hh: v,
            Hl: x,
          } = this;
          for (let A = 0; A < 80; A++) {
            const t =
                i.Ay.rotrSH(y, g, 14) ^
                i.Ay.rotrSH(y, g, 18) ^
                i.Ay.rotrBH(y, g, 41),
              e =
                i.Ay.rotrSL(y, g, 14) ^
                i.Ay.rotrSL(y, g, 18) ^
                i.Ay.rotrBL(y, g, 41),
              B = (y & w) ^ (~y & m),
              O = (g & b) ^ (~g & E),
              S = i.Ay.add5L(x, e, O, a[A], c[A]),
              I = i.Ay.add5H(S, v, t, B, s[A], f[A]),
              L = 0 | S,
              k =
                i.Ay.rotrSH(n, r, 28) ^
                i.Ay.rotrBH(n, r, 34) ^
                i.Ay.rotrBH(n, r, 39),
              H =
                i.Ay.rotrSL(n, r, 28) ^
                i.Ay.rotrBL(n, r, 34) ^
                i.Ay.rotrBL(n, r, 39),
              T = (n & o) ^ (n & l) ^ (o & l),
              R = (r & u) ^ (r & h) ^ (u & h);
            ((v = 0 | m),
              (x = 0 | E),
              (m = 0 | w),
              (E = 0 | b),
              (w = 0 | y),
              (b = 0 | g),
              ({ h: y, l: g } = i.Ay.add(0 | d, 0 | p, 0 | I, 0 | L)),
              (d = 0 | l),
              (p = 0 | h),
              (l = 0 | o),
              (h = 0 | u),
              (o = 0 | n),
              (u = 0 | r));
            const U = i.Ay.add3L(L, H, R);
            ((n = i.Ay.add3H(U, I, k, T)), (r = 0 | U));
          }
          (({ h: n, l: r } = i.Ay.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: o, l: u } = i.Ay.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | u)),
            ({ h: l, l: h } = i.Ay.add(0 | this.Ch, 0 | this.Cl, 0 | l, 0 | h)),
            ({ h: d, l: p } = i.Ay.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: y, l: g } = i.Ay.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | g)),
            ({ h: w, l: b } = i.Ay.add(0 | this.Fh, 0 | this.Fl, 0 | w, 0 | b)),
            ({ h: m, l: E } = i.Ay.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | E)),
            ({ h: v, l: x } = i.Ay.add(0 | this.Hh, 0 | this.Hl, 0 | v, 0 | x)),
            this.set(n, r, o, u, l, h, d, p, y, g, w, b, m, E, v, x));
        }
        roundClean() {
          (f.fill(0), c.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      const l = (0, o.ld)(() => new u());
    },
  },
]);
