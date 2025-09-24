(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [569],
  {
    982(t, e, r) {
      'use strict';
      r.d(e, {
        Vw: () => u,
        Id: () => a,
        O8: () => s,
        po: () => l,
        Ow: () => f,
        ZJ: () => c,
        DH: () => o,
        ld: () => h,
      });
      const n =
          'object' == typeof globalThis && 'crypto' in globalThis
            ? globalThis.crypto
            : void 0,
        i = (t) => t instanceof Uint8Array,
        o = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        f = (t, e) => (t << (32 - e)) | (t >>> e);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw new Error('Non little-endian hardware is not supported');
      function c(t) {
        if (
          ('string' == typeof t &&
            (t = ((t) => {
              if ('string' != typeof t)
                throw new Error('utf8ToBytes expected string, got ' + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          !i(t))
        )
          throw new Error('expected Uint8Array, got ' + typeof t);
        return t;
      }
      function a(...t) {
        const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0));
        let r = 0;
        return (
          t.forEach((t) => {
            if (!i(t)) throw new Error('Uint8Array expected');
            (e.set(t, r), (r += t.length));
          }),
          e
        );
      }
      class u {
        clone() {
          return this.i();
        }
      }
      function h(t) {
        const e = (e) => t().update(c(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function l(t = 32) {
        if (n && 'function' == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        throw new Error('crypto.getRandomValues must be defined');
      }
    },
    1035(t, e, r) {
      'use strict';
      var n = r(5959),
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
        f = {};
      function c(t) {
        return n.isMemo(t) ? s : f[t.$$typeof] || i;
      }
      ((f[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (f[n.Memo] = s));
      var a = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        l = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, r, n) {
        if ('string' != typeof r) {
          if (p) {
            var i = d(r);
            i && i !== p && t(e, i, n);
          }
          var s = u(r);
          h && (s = s.concat(h(r)));
          for (var f = c(e), w = c(r), y = 0; y < s.length; ++y) {
            var b = s[y];
            if (!(o[b] || (n && n[b]) || (w && w[b]) || (f && f[b]))) {
              var g = l(r, b);
              try {
                a(e, b, g);
              } catch (v) {}
            }
          }
        }
        return e;
      };
    },
    1453(t, e, r) {
      'use strict';
      function n(t, e) {
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
      function f(t) {
        if ('e' in t) throw t.e;
        if (!('v' in t)) throw new Error('[Bug] atom state is not initialized');
        return t.v;
      }
      r.d(e, { MO: () => u, ff: () => $ });
      const c = new WeakMap();
      function a(t) {
        var e;
        return h(t) && !!(null == (e = c.get(t)) ? void 0 : e[0]);
      }
      function u(t, e) {
        let r = c.get(t);
        if (!r) {
          ((r = [!0, new Set()]), c.set(t, r));
          const e = () => {
            r[0] = !1;
          };
          t.then(e, e);
        }
        r[1].add(e);
      }
      function h(t) {
        return 'function' == typeof (null == t ? void 0 : t.then);
      }
      function l(t, e, r) {
        if (!r.p.has(t)) {
          r.p.add(t);
          const n = () => r.p.delete(t);
          e.then(n, n);
        }
      }
      function d(t, e, r) {
        var n;
        const i = new Set();
        for (const o of (null == (n = r.get(t)) ? void 0 : n.t) || [])
          r.has(o) && i.add(o);
        for (const o of e.p) i.add(o);
        return i;
      }
      const p = (t, e, ...r) => e.read(...r),
        w = (t, e, ...r) => e.write(...r),
        y = (t, e) => {
          var r;
          return null == (r = e.unstable_onInit) ? void 0 : r.call(e, t);
        },
        b = (t, e, r) => {
          var n;
          return null == (n = e.onMount) ? void 0 : n.call(e, r);
        },
        g = (t, e) => {
          const r = P(t),
            n = r[0],
            i = r[9];
          if (!e) throw new Error('Atom is undefined or null');
          let o = n.get(e);
          return (
            o ||
              ((o = { d: new Map(), p: new Set(), n: 0 }),
              n.set(e, o),
              null == i || i(t, e)),
            o
          );
        },
        v = (t) => {
          const e = P(t),
            r = e[1],
            n = e[3],
            i = e[4],
            o = e[5],
            s = e[6],
            f = e[13],
            c = [],
            a = (t) => {
              try {
                t();
              } catch (e) {
                c.push(e);
              }
            };
          do {
            s.f && a(s.f);
            const e = new Set(),
              c = e.add.bind(e);
            (n.forEach((t) => {
              var e;
              return null == (e = r.get(t)) ? void 0 : e.l.forEach(c);
            }),
              n.clear(),
              o.forEach(c),
              o.clear(),
              i.forEach(c),
              i.clear(),
              e.forEach(a),
              n.size && f(t));
          } while (n.size || o.size || i.size);
          if (c.length) throw new AggregateError(c);
        },
        x = (t) => {
          const e = P(t),
            r = e[1],
            n = e[2],
            i = e[3],
            o = e[11],
            s = e[14],
            f = e[17],
            c = [],
            a = new WeakSet(),
            u = new WeakSet(),
            h = Array.from(i);
          for (; h.length; ) {
            const e = h[h.length - 1],
              i = o(t, e);
            if (u.has(e)) h.pop();
            else if (a.has(e)) {
              if (n.get(e) === i.n) c.push([e, i]);
              else if (n.has(e))
                throw new Error('[Bug] invalidated atom exists');
              (u.add(e), h.pop());
            } else {
              a.add(e);
              for (const t of d(e, i, r)) a.has(t) || h.push(t);
            }
          }
          for (let l = c.length - 1; l >= 0; --l) {
            const [e, r] = c[l];
            let o = !1;
            for (const t of r.d.keys())
              if (t !== e && i.has(t)) {
                o = !0;
                break;
              }
            (o && (s(t, e), f(t, e)), n.delete(e));
          }
        },
        E = (t, e) => {
          var r;
          const c = P(t),
            d = c[1],
            p = c[2],
            w = c[3],
            y = c[6],
            b = c[7],
            g = c[11],
            v = c[12],
            x = c[13],
            E = c[14],
            m = c[16],
            I = c[17],
            B = g(t, e);
          if (s(B)) {
            if (d.has(e) && p.get(e) !== B.n) return B;
            if (Array.from(B.d).every(([e, r]) => E(t, e).n === r)) return B;
          }
          B.d.clear();
          let S,
            A,
            j = !0;
          function k() {
            d.has(e) && (I(t, e), x(t), v(t));
          }
          const U = {
              get signal() {
                return (S || (S = new AbortController()), S.signal);
              },
              get setSelf() {
                return (
                  o(e),
                  !A &&
                    o(e) &&
                    (A = (...r) => {
                      if (!j)
                        try {
                          return m(t, e, ...r);
                        } finally {
                          (x(t), v(t));
                        }
                    }),
                  A
                );
              },
            },
            T = B.n;
          try {
            const r = b(
              t,
              e,
              (r) => {
                var o;
                if (n(e, r)) {
                  const e = g(t, r);
                  if (!s(e)) {
                    if (!i(r)) throw new Error('no atom init');
                    O(t, r, r.init);
                  }
                  return f(e);
                }
                const c = E(t, r);
                try {
                  return f(c);
                } finally {
                  (B.d.set(r, c.n),
                    a(B.v) && l(e, B.v, c),
                    null == (o = d.get(r)) || o.t.add(e),
                    j || k());
                }
              },
              U
            );
            return (
              O(t, e, r),
              h(r) &&
                (u(r, () => (null == S ? void 0 : S.abort())), r.then(k, k)),
              B
            );
          } catch ($) {
            return (delete B.v, (B.e = $), ++B.n, B);
          } finally {
            ((j = !1),
              T !== B.n &&
                p.get(e) === T &&
                (p.set(e, B.n), w.add(e), null == (r = y.c) || r.call(y, e)));
          }
        },
        m = (t, e) => {
          const r = P(t),
            n = r[1],
            i = r[2],
            o = r[11],
            s = [e];
          for (; s.length; ) {
            const e = s.pop(),
              r = o(t, e);
            for (const f of d(e, r, n)) {
              const e = o(t, f);
              (i.set(f, e.n), s.push(f));
            }
          }
        },
        I = (t, e, ...r) => {
          const o = P(t),
            s = o[3],
            c = o[6],
            a = o[8],
            u = o[11],
            h = o[12],
            l = o[13],
            d = o[14],
            p = o[15],
            w = o[17];
          let y = !0;
          const b = (e) => f(d(t, e)),
            g = (r, ...o) => {
              var f;
              const a = u(t, r);
              try {
                if (n(e, r)) {
                  if (!i(r)) throw new Error('atom not writable');
                  const e = a.n,
                    n = o[0];
                  return (
                    O(t, r, n),
                    w(t, r),
                    void (
                      e !== a.n &&
                      (s.add(r), null == (f = c.c) || f.call(c, r), p(t, r))
                    )
                  );
                }
                return I(t, r, ...o);
              } finally {
                y || (l(t), h(t));
              }
            };
          try {
            return a(t, e, b, g, ...r);
          } finally {
            y = !1;
          }
        },
        B = (t, e) => {
          var r;
          const n = P(t),
            i = n[1],
            o = n[3],
            s = n[6],
            f = n[11],
            c = n[15],
            u = n[18],
            h = n[19],
            l = f(t, e),
            d = i.get(e);
          if (d && !a(l.v)) {
            for (const [n, i] of l.d)
              if (!d.d.has(n)) {
                const a = f(t, n);
                (u(t, n).t.add(e),
                  d.d.add(n),
                  i !== a.n &&
                    (o.add(n), null == (r = s.c) || r.call(s, n), c(t, n)));
              }
            for (const r of d.d || [])
              if (!l.d.has(r)) {
                d.d.delete(r);
                const n = h(t, r);
                null == n || n.t.delete(e);
              }
          }
        },
        S = (t, e) => {
          var r;
          const n = P(t),
            i = n[1],
            s = n[4],
            f = n[6],
            c = n[10],
            a = n[11],
            u = n[12],
            h = n[13],
            l = n[14],
            d = n[16],
            p = a(t, e);
          let w = i.get(e);
          if (!w) {
            l(t, e);
            for (const r of p.d.keys()) S(t, r).t.add(e);
            if (
              ((w = { l: new Set(), d: new Set(p.d.keys()), t: new Set() }),
              i.set(e, w),
              null == (r = f.m) || r.call(f, e),
              o(e))
            ) {
              const r = () => {
                let r = !0;
                const n = (...n) => {
                  try {
                    return d(t, e, ...n);
                  } finally {
                    r || (h(t), u(t));
                  }
                };
                try {
                  const i = c(t, e, n);
                  i &&
                    (w.u = () => {
                      r = !0;
                      try {
                        i();
                      } finally {
                        r = !1;
                      }
                    });
                } finally {
                  r = !1;
                }
              };
              s.add(r);
            }
          }
          return w;
        },
        A = (t, e) => {
          var r;
          const n = P(t),
            i = n[1],
            o = n[5],
            s = n[6],
            f = n[11],
            c = n[19],
            a = f(t, e);
          let u = i.get(e);
          if (
            !u ||
            u.l.size ||
            Array.from(u.t).some((t) => {
              var r;
              return null == (r = i.get(t)) ? void 0 : r.d.has(e);
            })
          )
            return u;
          (u.u && o.add(u.u),
            (u = void 0),
            i.delete(e),
            null == (r = s.u) || r.call(s, e));
          for (const h of a.d.keys()) {
            const r = c(t, h);
            null == r || r.t.delete(e);
          }
        },
        O = (t, e, r) => {
          const n = P(t)[11],
            i = n(t, e),
            o = 'v' in i,
            s = i.v;
          if (h(r)) for (const f of i.d.keys()) l(e, r, n(t, f));
          ((i.v = r),
            delete i.e,
            (o && Object.is(s, i.v)) ||
              (++i.n,
              h(s) &&
                ((t) => {
                  const e = c.get(t);
                  (null == e ? void 0 : e[0]) &&
                    ((e[0] = !1), e[1].forEach((t) => t()));
                })(s)));
        },
        j = (t, e) => f((0, P(t)[14])(t, e)),
        k = (t, e, ...r) => {
          const n = P(t),
            i = n[12],
            o = n[13],
            s = n[16];
          try {
            return s(t, e, ...r);
          } finally {
            (o(t), i(t));
          }
        },
        U = (t, e, r) => {
          const n = P(t),
            i = n[12],
            o = n[18],
            s = n[19],
            f = o(t, e).l;
          return (
            f.add(r),
            i(t),
            () => {
              (f.delete(r), s(t, e), i(t));
            }
          );
        },
        T = new WeakMap();
      function P(t) {
        const e = T.get(t);
        if (!e)
          throw new Error(
            'Store must be created by buildStore to read its building blocks'
          );
        return e;
      }
      function $(...t) {
        const e = {
            get(t) {
              return (0, P(e)[21])(e, t);
            },
            set(t, ...r) {
              return (0, P(e)[22])(e, t, ...r);
            },
            sub(t, r) {
              return (0, P(e)[23])(e, t, r);
            },
          },
          r = [
            new WeakMap(),
            new WeakMap(),
            new WeakMap(),
            new Set(),
            new Set(),
            new Set(),
            {},
            p,
            w,
            y,
            b,
            g,
            v,
            x,
            E,
            m,
            I,
            B,
            S,
            A,
            O,
            j,
            k,
            U,
          ].map((e, r) => t[r] || e);
        return (T.set(e, Object.freeze(r)), e);
      }
    },
    2260(t) {
      t.exports = Function.call.bind({}.hasOwnProperty);
    },
    2736(t, e, r) {
      var n = r(5959);
      t.exports = r(2858)(n.isElement, !0);
    },
    2858(t, e, r) {
      'use strict';
      var n,
        i = r(5959),
        o = r(4059),
        s = r(2985),
        f = r(2260),
        c = r(6720);
      function a() {
        return null;
      }
      ((n = (t) => {
        var e = 'Warning: ' + t;
        try {
          throw new Error(e);
        } catch (r) {}
      }),
        (t.exports = function (t, e) {
          var r = 'function' == typeof Symbol && Symbol.iterator,
            u = '<<anonymous>>',
            h = {
              array: w('array'),
              bigint: w('bigint'),
              bool: w('boolean'),
              func: w('function'),
              number: w('number'),
              object: w('object'),
              string: w('string'),
              symbol: w('symbol'),
              any: p(a),
              arrayOf: (t) =>
                p((e, r, n, i, o) => {
                  if ('function' != typeof t)
                    return new d(
                      'Property `' +
                        o +
                        '` of component `' +
                        n +
                        '` has invalid PropType notation inside arrayOf.'
                    );
                  var f = e[r];
                  if (!Array.isArray(f))
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        g(f) +
                        '` supplied to `' +
                        n +
                        '`, expected an array.'
                    );
                  for (var c = 0; c < f.length; c++) {
                    var a = t(f, c, n, i, o + '[' + c + ']', s);
                    if (a instanceof Error) return a;
                  }
                  return null;
                }),
              element: p((e, r, n, i, o) => {
                var s = e[r];
                return t(s)
                  ? null
                  : new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        g(s) +
                        '` supplied to `' +
                        n +
                        '`, expected a single ReactElement.'
                    );
              }),
              elementType: p((t, e, r, n, o) => {
                var s = t[e];
                return i.isValidElementType(s)
                  ? null
                  : new d(
                      'Invalid ' +
                        n +
                        ' `' +
                        o +
                        '` of type `' +
                        g(s) +
                        '` supplied to `' +
                        r +
                        '`, expected a single ReactElement type.'
                    );
              }),
              instanceOf: (t) =>
                p((e, r, n, i, o) => {
                  if (!(e[r] instanceof t)) {
                    var s = t.name || u;
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        ((f = e[r]).constructor && f.constructor.name
                          ? f.constructor.name
                          : u) +
                        '` supplied to `' +
                        n +
                        '`, expected instance of `' +
                        s +
                        '`.'
                    );
                  }
                  var f;
                  return null;
                }),
              node: p((t, e, r, n, i) =>
                b(t[e])
                  ? null
                  : new d(
                      'Invalid ' +
                        n +
                        ' `' +
                        i +
                        '` supplied to `' +
                        r +
                        '`, expected a ReactNode.'
                    )
              ),
              objectOf: (t) =>
                p((e, r, n, i, o) => {
                  if ('function' != typeof t)
                    return new d(
                      'Property `' +
                        o +
                        '` of component `' +
                        n +
                        '` has invalid PropType notation inside objectOf.'
                    );
                  var c = e[r],
                    a = g(c);
                  if ('object' !== a)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        a +
                        '` supplied to `' +
                        n +
                        '`, expected an object.'
                    );
                  for (var u in c)
                    if (f(c, u)) {
                      var h = t(c, u, n, i, o + '.' + u, s);
                      if (h instanceof Error) return h;
                    }
                  return null;
                }),
              oneOf(t) {
                return Array.isArray(t)
                  ? p((e, r, n, i, o) => {
                      for (var s = e[r], f = 0; f < t.length; f++)
                        if (l(s, t[f])) return null;
                      var c = JSON.stringify(t, (t, e) =>
                        'symbol' === v(e) ? String(e) : e
                      );
                      return new d(
                        'Invalid ' +
                          i +
                          ' `' +
                          o +
                          '` of value `' +
                          String(s) +
                          '` supplied to `' +
                          n +
                          '`, expected one of ' +
                          c +
                          '.'
                      );
                    })
                  : (n(
                      arguments.length > 1
                        ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                            arguments.length +
                            ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                        : 'Invalid argument supplied to oneOf, expected an array.'
                    ),
                    a);
              },
              oneOfType(t) {
                if (!Array.isArray(t))
                  return (
                    n(
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    ),
                    a
                  );
                for (var e = 0; e < t.length; e++) {
                  var r = t[e];
                  if ('function' != typeof r)
                    return (
                      n(
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                          x(r) +
                          ' at index ' +
                          e +
                          '.'
                      ),
                      a
                    );
                }
                return p((e, r, n, i, o) => {
                  for (var c = [], a = 0; a < t.length; a++) {
                    var u = (0, t[a])(e, r, n, i, o, s);
                    if (null == u) return null;
                    u.data &&
                      f(u.data, 'expectedType') &&
                      c.push(u.data.expectedType);
                  }
                  return new d(
                    'Invalid ' +
                      i +
                      ' `' +
                      o +
                      '` supplied to `' +
                      n +
                      '`' +
                      (c.length > 0
                        ? ', expected one of type [' + c.join(', ') + ']'
                        : '') +
                      '.'
                  );
                });
              },
              shape: (t) =>
                p((e, r, n, i, o) => {
                  var f = e[r],
                    c = g(f);
                  if ('object' !== c)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        n +
                        '`, expected `object`.'
                    );
                  for (var a in t) {
                    var u = t[a];
                    if ('function' != typeof u) return y(n, i, o, a, v(u));
                    var h = u(f, a, n, i, o + '.' + a, s);
                    if (h) return h;
                  }
                  return null;
                }),
              exact: (t) =>
                p((e, r, n, i, c) => {
                  var a = e[r],
                    u = g(a);
                  if ('object' !== u)
                    return new d(
                      'Invalid ' +
                        i +
                        ' `' +
                        c +
                        '` of type `' +
                        u +
                        '` supplied to `' +
                        n +
                        '`, expected `object`.'
                    );
                  var h = o({}, e[r], t);
                  for (var l in h) {
                    var p = t[l];
                    if (f(t, l) && 'function' != typeof p)
                      return y(n, i, c, l, v(p));
                    if (!p)
                      return new d(
                        'Invalid ' +
                          i +
                          ' `' +
                          c +
                          '` key `' +
                          l +
                          '` supplied to `' +
                          n +
                          '`.\nBad object: ' +
                          JSON.stringify(e[r], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(t), null, '  ')
                      );
                    var w = p(a, l, n, i, c + '.' + l, s);
                    if (w) return w;
                  }
                  return null;
                }),
            };
          function l(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
          }
          function d(t, e) {
            ((this.message = t),
              (this.data = e && 'object' == typeof e ? e : {}),
              (this.stack = ''));
          }
          function p(t) {
            var r = {},
              i = 0;
            function o(o, f, c, a, h, l, p) {
              if (((a = a || u), (l = l || c), p !== s)) {
                if (e) {
                  var w = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((w.name = 'Invariant Violation'), w);
                }
                if ('undefined' != typeof console) {
                  var y = a + ':' + c;
                  !r[y] &&
                    i < 3 &&
                    (n(
                      'You are manually calling a React.PropTypes validation function for the `' +
                        l +
                        '` prop on `' +
                        a +
                        '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                    ),
                    (r[y] = !0),
                    i++);
                }
              }
              return null == f[c]
                ? o
                  ? null === f[c]
                    ? new d(
                        'The ' +
                          h +
                          ' `' +
                          l +
                          '` is marked as required in `' +
                          a +
                          '`, but its value is `null`.'
                      )
                    : new d(
                        'The ' +
                          h +
                          ' `' +
                          l +
                          '` is marked as required in `' +
                          a +
                          '`, but its value is `undefined`.'
                      )
                  : null
                : t(f, c, a, h, l);
            }
            var f = o.bind(null, !1);
            return ((f.isRequired = o.bind(null, !0)), f);
          }
          function w(t) {
            return p((e, r, n, i, o, s) => {
              var f = e[r];
              return g(f) !== t
                ? new d(
                    'Invalid ' +
                      i +
                      ' `' +
                      o +
                      '` of type `' +
                      v(f) +
                      '` supplied to `' +
                      n +
                      '`, expected `' +
                      t +
                      '`.',
                    { expectedType: t }
                  )
                : null;
            });
          }
          function y(t, e, r, n, i) {
            return new d(
              (t || 'React class') +
                ': ' +
                e +
                ' type `' +
                r +
                '.' +
                n +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                i +
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
                var n = ((t) => {
                  var e = t && ((r && t[r]) || t['@@iterator']);
                  if ('function' == typeof e) return e;
                })(e);
                if (!n) return !1;
                var i,
                  o = n.call(e);
                if (n !== e.entries) {
                  for (; !(i = o.next()).done; ) if (!b(i.value)) return !1;
                } else
                  for (; !(i = o.next()).done; ) {
                    var s = i.value;
                    if (s && !b(s[1])) return !1;
                  }
                return !0;
              default:
                return !1;
            }
          }
          function g(t) {
            var e = typeof t;
            return Array.isArray(t)
              ? 'array'
              : t instanceof RegExp
                ? 'object'
                : ((t, e) =>
                      'symbol' === t ||
                      (!!e &&
                        ('Symbol' === e['@@toStringTag'] ||
                          ('function' == typeof Symbol &&
                            e instanceof Symbol))))(e, t)
                  ? 'symbol'
                  : e;
          }
          function v(t) {
            if (null == t) return '' + t;
            var e = g(t);
            if ('object' === e) {
              if (t instanceof Date) return 'date';
              if (t instanceof RegExp) return 'regexp';
            }
            return e;
          }
          function x(t) {
            var e = v(t);
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
            (h.checkPropTypes = c),
            (h.resetWarningCache = c.resetWarningCache),
            (h.PropTypes = h),
            h
          );
        }));
    },
    2985(t) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    3226(t, e, r) {
      'use strict';
      r.d(e, { fp: () => w });
      var n = r(9729),
        i = r(4566),
        o = r(1453);
      const s = (0, n.createContext)(void 0);
      function f(t) {
        const e = (0, n.useContext)(s);
        return (null == t ? void 0 : t.store) || e || (0, i.zp)();
      }
      const c = (t) => 'function' == typeof (null == t ? void 0 : t.then),
        a = (t) => {
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
          n.use ||
          ((t) => {
            if ('pending' === t.status) throw t;
            if ('fulfilled' === t.status) return t.value;
            throw 'rejected' === t.status ? t.reason : (a(t), t);
          }),
        h = new WeakMap(),
        l = (t, e) => {
          let r = h.get(t);
          return (
            r ||
              ((r = new Promise((n, i) => {
                let s = t;
                const f = (t) => (e) => {
                    s === t && n(e);
                  },
                  a = (t) => (e) => {
                    s === t && i(e);
                  },
                  u = () => {
                    try {
                      const t = e();
                      c(t)
                        ? (h.set(t, r),
                          (s = t),
                          t.then(f(t), a(t)),
                          (0, o.MO)(t, u))
                        : n(t);
                    } catch (t) {
                      i(t);
                    }
                  };
                (t.then(f(t), a(t)), (0, o.MO)(t, u));
              })),
              h.set(t, r)),
            r
          );
        };
      function d(t, e) {
        const { delay: r, unstable_promiseStatus: i = !n.use } = e || {},
          o = f(e),
          [[s, h, d], p] = (0, n.useReducer)(
            (e) => {
              const r = o.get(t);
              return Object.is(e[0], r) && e[1] === o && e[2] === t
                ? e
                : [r, o, t];
            },
            void 0,
            () => [o.get(t), o, t]
          );
        let w = s;
        if (
          ((h === o && d === t) || (p(), (w = o.get(t))),
          (0, n.useEffect)(() => {
            const e = o.sub(t, () => {
              if (i)
                try {
                  const e = o.get(t);
                  c(e) && a(l(e, () => o.get(t)));
                } catch (e) {}
              'number' != typeof r ? p() : setTimeout(p, r);
            });
            return (p(), e);
          }, [o, t, r, i]),
          (0, n.useDebugValue)(w),
          c(w))
        ) {
          const e = l(w, () => o.get(t));
          return (i && a(e), u(e));
        }
        return w;
      }
      function p(t, e) {
        const r = f(e);
        return (0, n.useCallback)(
          (...e) => {
            if (!('write' in t)) throw new Error('not writable atom');
            return r.set(t, ...e);
          },
          [r, t]
        );
      }
      function w(t, e) {
        return [d(t, e), p(t, e)];
      }
    },
    3526(t, e, r) {
      'use strict';
      function n(t) {
        var e,
          r,
          i = '';
        if ('string' == typeof t || 'number' == typeof t) i += t;
        else if ('object' == typeof t)
          if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
              t[e] && (r = n(t[e])) && (i && (i += ' '), (i += r));
          } else for (r in t) t[r] && (i && (i += ' '), (i += r));
        return i;
      }
      r.d(e, { A: () => i });
      const i = function () {
        for (var t, e, r = 0, i = '', o = arguments.length; r < o; r++)
          (t = arguments[r]) && (e = n(t)) && (i && (i += ' '), (i += e));
        return i;
      };
    },
    4059(t) {
      'use strict';
      var e = Object.getOwnPropertySymbols,
        r = {}.hasOwnProperty,
        n = {}.propertyIsEnumerable;
      t.exports = (() => {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, r = 0; r < 10; r++)
            e['_' + String.fromCharCode(r)] = r;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map((t) => e[t])
              .join('')
          )
            return !1;
          var n = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach((t) => {
              n[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
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
                f = ((t) => {
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
              for (var a in (o = Object(arguments[c])))
                r.call(o, a) && (f[a] = o[a]);
              if (e) {
                s = e(o);
                for (var u = 0; u < s.length; u++)
                  n.call(o, s[u]) && (f[s[u]] = o[s[u]]);
              }
            }
            return f;
          };
    },
    4486(t, e, r) {
      'use strict';
      r.d(e, {
        Ay: () => h,
        B4: () => c,
        P5: () => f,
        WM: () => a,
        im: () => u,
        lD: () => s,
      });
      const n = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(t, e = !1) {
        return e
          ? { h: Number(t & n), l: Number((t >> i) & n) }
          : { h: 0 | Number((t >> i) & n), l: 0 | Number(t & n) };
      }
      function s(t, e = !1) {
        let r = new Uint32Array(t.length),
          n = new Uint32Array(t.length);
        for (let i = 0; i < t.length; i++) {
          const { h: s, l: f } = o(t[i], e);
          [r[i], n[i]] = [s, f];
        }
        return [r, n];
      }
      const f = (t, e, r) => (t << r) | (e >>> (32 - r)),
        c = (t, e, r) => (e << r) | (t >>> (32 - r)),
        a = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        u = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r)),
        h = {
          fromBig: o,
          split: s,
          toBig: (t, e) => (BigInt(t >>> 0) << i) | BigInt(e >>> 0),
          shrSH: (t, e, r) => t >>> r,
          shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
          rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
          rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
          rotr32H: (t, e) => e,
          rotr32L: (t, e) => t,
          rotlSH: f,
          rotlSL: c,
          rotlBH: a,
          rotlBL: u,
          add(t, e, r, n) {
            const i = (e >>> 0) + (n >>> 0);
            return { h: (t + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
          },
          add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
          add3H: (t, e, r, n) => (e + r + n + ((t / 2 ** 32) | 0)) | 0,
          add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (t, e, r, n, i) => (e + r + n + i + ((t / 2 ** 32) | 0)) | 0,
          add5H: (t, e, r, n, i, o) =>
            (e + r + n + i + o + ((t / 2 ** 32) | 0)) | 0,
          add5L: (t, e, r, n, i) =>
            (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        };
    },
    4566(t, e, r) {
      'use strict';
      r.d(e, { eU: () => s, zp: () => a });
      var n = r(1453);
      let i,
        o = 0;
      function s(t, e) {
        const r = 'atom' + ++o,
          n = {
            toString() {
              return this.debugLabel ? r + ':' + this.debugLabel : r;
            },
          };
        return (
          'function' == typeof t
            ? (n.read = t)
            : ((n.init = t), (n.read = f), (n.write = c)),
          e && (n.write = e),
          n
        );
      }
      function f(t) {
        return t(this);
      }
      function c(t, e, r) {
        return e(this, 'function' == typeof r ? r(t(this)) : r);
      }
      function a() {
        return (
          i ||
            ((i = (0, n.ff)()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = i),
            globalThis.__JOTAI_DEFAULT_STORE__),
          i
        );
      }
    },
    4711(t, e, r) {
      'use strict';
      r.d(e, { bI: () => st });
      var n = {};
      (r.r(n),
        r.d(n, {
          OG: () => g,
          My: () => a,
          Ph: () => l,
          lX: () => d,
          Id: () => b,
          fg: () => E,
          qj: () => y,
          aT: () => h,
          lq: () => p,
          z: () => w,
          Q5: () => I,
        }));
      var i = r(5671);
      BigInt(0);
      const o = BigInt(1),
        s = BigInt(2),
        f = (t) => t instanceof Uint8Array,
        c = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, '0')
        );
      function a(t) {
        if (!f(t)) throw new Error('Uint8Array expected');
        let e = '';
        for (let r = 0; r < t.length; r++) e += c[t[r]];
        return e;
      }
      function u(t) {
        if ('string' != typeof t)
          throw new Error('hex string expected, got ' + typeof t);
        return BigInt('' === t ? '0' : `0x${t}`);
      }
      function h(t) {
        if ('string' != typeof t)
          throw new Error('hex string expected, got ' + typeof t);
        const e = t.length;
        if (e % 2)
          throw new Error(
            'padded hex string expected, got unpadded hex of length ' + e
          );
        const r = new Uint8Array(e / 2);
        for (let n = 0; n < r.length; n++) {
          const e = 2 * n,
            i = t.slice(e, e + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error('Invalid byte sequence');
          r[n] = o;
        }
        return r;
      }
      function l(t) {
        return u(a(t));
      }
      function d(t) {
        if (!f(t)) throw new Error('Uint8Array expected');
        return u(a(Uint8Array.from(t).reverse()));
      }
      function p(t, e) {
        return h(t.toString(16).padStart(2 * e, '0'));
      }
      function w(t, e) {
        return p(t, e).reverse();
      }
      function y(t, e, r) {
        let n;
        if ('string' == typeof e)
          try {
            n = h(e);
          } catch (o) {
            throw new Error(
              `${t} must be valid hex string, got "${e}". Cause: ${o}`
            );
          }
        else {
          if (!f(e)) throw new Error(`${t} must be hex string or Uint8Array`);
          n = Uint8Array.from(e);
        }
        const i = n.length;
        if ('number' == typeof r && i !== r)
          throw new Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function b(...t) {
        const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0));
        let r = 0;
        return (
          t.forEach((t) => {
            if (!f(t)) throw new Error('Uint8Array expected');
            (e.set(t, r), (r += t.length));
          }),
          e
        );
      }
      const g = (t) => (s << BigInt(t - 1)) - o,
        v = (t) => new Uint8Array(t),
        x = (t) => Uint8Array.from(t);
      function E(t, e, r) {
        if ('number' != typeof t || t < 2)
          throw new Error('hashLen must be a number');
        if ('number' != typeof e || e < 2)
          throw new Error('qByteLen must be a number');
        if ('function' != typeof r)
          throw new Error('hmacFn must be a function');
        let n = v(t),
          i = v(t),
          o = 0;
        const s = () => {
            (n.fill(1), i.fill(0), (o = 0));
          },
          f = (...t) => r(i, n, ...t),
          c = (t = v()) => {
            ((i = f(x([0]), t)),
              (n = f()),
              0 !== t.length && ((i = f(x([1]), t)), (n = f())));
          },
          a = () => {
            if (o++ >= 1e3) throw new Error('drbg: tried 1000 values');
            let t = 0;
            const r = [];
            for (; t < e; ) {
              n = f();
              const e = n.slice();
              (r.push(e), (t += n.length));
            }
            return b(...r);
          };
        return (t, e) => {
          let r;
          for (s(), c(t); !(r = e(a())); ) c();
          return (s(), r);
        };
      }
      const m = {
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
      function I(t, e, r = {}) {
        const n = (e, r, n) => {
          const i = m[r];
          if ('function' != typeof i)
            throw new Error(`Invalid validator "${r}", expected function`);
          const o = t[e];
          if (!((n && void 0 === o) || i(o, t)))
            throw new Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (const [i, o] of Object.entries(e)) n(i, o, !1);
        for (const [i, o] of Object.entries(r)) n(i, o, !0);
        return t;
      }
      const B = BigInt(0),
        S = BigInt(1),
        A = BigInt(2),
        O = BigInt(3),
        j = BigInt(4),
        k = BigInt(5),
        U = BigInt(8);
      function T(t, e) {
        const r = t % e;
        return r >= B ? r : e + r;
      }
      function P(t, e, r) {
        if (r <= B || e < B) throw new Error('Expected power/modulo > 0');
        if (r === S) return B;
        let n = S;
        for (; e > B; )
          (e & S && (n = (n * t) % r), (t = (t * t) % r), (e >>= S));
        return n;
      }
      function $(t, e, r) {
        let n = t;
        for (; e-- > B; ) ((n *= n), (n %= r));
        return n;
      }
      function L(t, e) {
        if (t === B || e <= B)
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = T(t, e),
          n = e,
          i = B,
          o = S,
          s = S,
          f = B;
        for (; r !== B; ) {
          const t = n / r,
            e = n % r,
            c = i - s * t,
            a = o - f * t;
          ((n = r), (r = e), (i = s), (o = f), (s = c), (f = a));
        }
        if (n !== S) throw new Error('invert: does not exist');
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
      function R(t, e) {
        const r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function C(t) {
        if ('bigint' != typeof t) throw new Error('field order must be bigint');
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function H(t) {
        const e = C(t);
        return e + Math.ceil(e / 2);
      }
      var q = r(5789),
        F = r(982);
      class D extends F.Vw {
        constructor(t, e) {
          (super(), (this.finished = !1), (this.destroyed = !1), (0, q.tW)(t));
          const r = (0, F.ZJ)(e);
          if (
            ((this.iHash = t.create()), 'function' != typeof this.iHash.update)
          )
            throw new Error(
              'Expected instance of class which extends utils.Hash'
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? t.create().update(r).digest() : r);
          for (let o = 0; o < i.length; o++) i[o] ^= 54;
          (this.iHash.update(i), (this.oHash = t.create()));
          for (let o = 0; o < i.length; o++) i[o] ^= 106;
          (this.oHash.update(i), i.fill(0));
        }
        update(t) {
          return ((0, q.t2)(this), this.iHash.update(t), this);
        }
        digestInto(t) {
          ((0, q.t2)(this),
            (0, q.ee)(t, this.outputLen),
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
        i(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e.i(t.oHash)),
            (t.iHash = r.i(t.iHash)),
            t
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const M = (t, e, r) => new D(t, e).update(r).digest();
      M.create = (t, e) => new D(t, e);
      const z = BigInt(0),
        _ = BigInt(1);
      function W(t) {
        return (
          I(
            t.Fp,
            N.reduce((t, e) => ((t[e] = 'function'), t), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            })
          ),
          I(
            t,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...R(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      const { Ph: K, aT: V } = n,
        G = {
          Err: class extends Error {
            constructor(t = '') {
              super(t);
            }
          },
          o(t) {
            const { Err: e } = G;
            if (t.length < 2 || 2 !== t[0])
              throw new e('Invalid signature integer tag');
            const r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e('Invalid signature integer: wrong length');
            if (128 & n[0]) throw new e('Invalid signature integer: negative');
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                'Invalid signature integer: unnecessary leading zero'
              );
            return { d: K(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            const { Err: e } = G,
              r = 'string' == typeof t ? V(t) : t;
            if (!(r instanceof Uint8Array)) throw new Error('ui8a expected');
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e('Invalid signature tag');
            if (r[1] !== n - 2)
              throw new e('Invalid signature: incorrect length');
            const { d: i, l: o } = G.o(r.subarray(2)),
              { d: s, l: f } = G.o(o);
            if (f.length)
              throw new e('Invalid signature: left bytes after parsing');
            return { r: i, s };
          },
          hexFromSig(t) {
            const e = (t) => (8 & Number.parseInt(t[0], 16) ? '00' + t : t),
              r = (t) => {
                const e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              o = n.length / 2,
              s = i.length / 2,
              f = r(o),
              c = r(s);
            return `30${r(s + o + 4)}02${c}${i}02${f}${n}`;
          },
        },
        Y = BigInt(0),
        Z = BigInt(1),
        J = (BigInt(2), BigInt(3));
      function X(t) {
        const e = ((t) => {
            const e = W(t);
            return (
              I(
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
          { Fp: r, n } = e,
          i = r.BYTES + 1,
          o = 2 * r.BYTES + 1;
        function s(t) {
          return T(t, n);
        }
        function f(t) {
          return L(t, n);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: u,
            weierstrassEquation: v,
            isWithinCurveOrder: x,
          } = (function (t) {
            const e = ((t) => {
                const e = W(t);
                I(
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
                const { endo: r, Fp: n, a: i } = e;
                if (r) {
                  if (!n.eql(i, n.ZERO))
                    throw new Error(
                      'Endomorphism can only be defined for Koblitz curves that have a=0'
                    );
                  if (
                    'object' != typeof r ||
                    'bigint' != typeof r.beta ||
                    'function' != typeof r.splitScalar
                  )
                    throw new Error(
                      'Expected endomorphism with beta: bigint and splitScalar: function'
                    );
                }
                return Object.freeze({ ...e });
              })(t),
              { Fp: r } = e,
              n =
                e.toBytes ||
                ((t, e, n) => {
                  const i = e.toAffine();
                  return b(
                    Uint8Array.from([4]),
                    r.toBytes(i.x),
                    r.toBytes(i.y)
                  );
                }),
              i =
                e.fromBytes ||
                ((t) => {
                  const e = t.subarray(1);
                  return {
                    x: r.fromBytes(e.subarray(0, r.BYTES)),
                    y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                });
            function o(t) {
              const { a: n, b: i } = e,
                o = r.sqr(t),
                s = r.mul(o, t);
              return r.add(r.add(s, r.mul(t, n)), i);
            }
            if (!r.eql(r.sqr(e.Gy), o(e.Gx)))
              throw new Error('bad generator point: equation left != right');
            function s(t) {
              return 'bigint' == typeof t && Y < t && t < e.n;
            }
            function f(t) {
              if (!s(t))
                throw new Error('Expected valid bigint: 0 < bigint < curve.n');
            }
            function c(t) {
              const {
                allowedPrivateKeyLengths: r,
                nByteLength: n,
                wrapPrivateKey: i,
                n: o,
              } = e;
              if (r && 'bigint' != typeof t) {
                if (
                  (t instanceof Uint8Array && (t = a(t)),
                  'string' != typeof t || !r.includes(t.length))
                )
                  throw new Error('Invalid key');
                t = t.padStart(2 * n, '0');
              }
              let s;
              try {
                s = 'bigint' == typeof t ? t : l(y('private key', t, n));
              } catch (c) {
                throw new Error(
                  `private key must be ${n} bytes, hex or bigint, not ${typeof t}`
                );
              }
              return (i && (s = T(s, o)), f(s), s);
            }
            const u = new Map();
            function h(t) {
              if (!(t instanceof d))
                throw new Error('ProjectivePoint expected');
            }
            class d {
              constructor(t, e, n) {
                if (
                  ((this.px = t),
                  (this.py = e),
                  (this.pz = n),
                  null == t || !r.isValid(t))
                )
                  throw new Error('x required');
                if (null == e || !r.isValid(e)) throw new Error('y required');
                if (null == n || !r.isValid(n)) throw new Error('z required');
              }
              static fromAffine(t) {
                const { x: e, y: n } = t || {};
                if (!t || !r.isValid(e) || !r.isValid(n))
                  throw new Error('invalid affine point');
                if (t instanceof d)
                  throw new Error('projective point not allowed');
                const i = (t) => r.eql(t, r.ZERO);
                return i(e) && i(n) ? d.ZERO : new d(e, n, r.ONE);
              }
              get x() {
                return this.toAffine().x;
              }
              get y() {
                return this.toAffine().y;
              }
              static normalizeZ(t) {
                const e = r.invertBatch(t.map((t) => t.pz));
                return t.map((t, r) => t.toAffine(e[r])).map(d.fromAffine);
              }
              static fromHex(t) {
                const e = d.fromAffine(i(y('pointHex', t)));
                return (e.assertValidity(), e);
              }
              static fromPrivateKey(t) {
                return d.BASE.multiply(c(t));
              }
              I(t) {
                ((this.S = t), u.delete(this));
              }
              assertValidity() {
                if (this.is0()) {
                  if (e.allowInfinityPoint && !r.is0(this.py)) return;
                  throw new Error('bad point: ZERO');
                }
                const { x: t, y: n } = this.toAffine();
                if (!r.isValid(t) || !r.isValid(n))
                  throw new Error('bad point: x or y not FE');
                const i = r.sqr(n),
                  s = o(t);
                if (!r.eql(i, s))
                  throw new Error('bad point: equation left != right');
                if (!this.isTorsionFree())
                  throw new Error('bad point: not in prime-order subgroup');
              }
              hasEvenY() {
                const { y: t } = this.toAffine();
                if (r.isOdd) return !r.isOdd(t);
                throw new Error("Field doesn't support isOdd");
              }
              equals(t) {
                h(t);
                const { px: e, py: n, pz: i } = this,
                  { px: o, py: s, pz: f } = t,
                  c = r.eql(r.mul(e, f), r.mul(o, i)),
                  a = r.eql(r.mul(n, f), r.mul(s, i));
                return c && a;
              }
              negate() {
                return new d(this.px, r.neg(this.py), this.pz);
              }
              double() {
                const { a: t, b: n } = e,
                  i = r.mul(n, J),
                  { px: o, py: s, pz: f } = this;
                let c = r.ZERO,
                  a = r.ZERO,
                  u = r.ZERO,
                  h = r.mul(o, o),
                  l = r.mul(s, s),
                  p = r.mul(f, f),
                  w = r.mul(o, s);
                return (
                  (w = r.add(w, w)),
                  (u = r.mul(o, f)),
                  (u = r.add(u, u)),
                  (c = r.mul(t, u)),
                  (a = r.mul(i, p)),
                  (a = r.add(c, a)),
                  (c = r.sub(l, a)),
                  (a = r.add(l, a)),
                  (a = r.mul(c, a)),
                  (c = r.mul(w, c)),
                  (u = r.mul(i, u)),
                  (p = r.mul(t, p)),
                  (w = r.sub(h, p)),
                  (w = r.mul(t, w)),
                  (w = r.add(w, u)),
                  (u = r.add(h, h)),
                  (h = r.add(u, h)),
                  (h = r.add(h, p)),
                  (h = r.mul(h, w)),
                  (a = r.add(a, h)),
                  (p = r.mul(s, f)),
                  (p = r.add(p, p)),
                  (h = r.mul(p, w)),
                  (c = r.sub(c, h)),
                  (u = r.mul(p, l)),
                  (u = r.add(u, u)),
                  (u = r.add(u, u)),
                  new d(c, a, u)
                );
              }
              add(t) {
                h(t);
                const { px: n, py: i, pz: o } = this,
                  { px: s, py: f, pz: c } = t;
                let a = r.ZERO,
                  u = r.ZERO,
                  l = r.ZERO;
                const p = e.a,
                  w = r.mul(e.b, J);
                let y = r.mul(n, s),
                  b = r.mul(i, f),
                  g = r.mul(o, c),
                  v = r.add(n, i),
                  x = r.add(s, f);
                ((v = r.mul(v, x)),
                  (x = r.add(y, b)),
                  (v = r.sub(v, x)),
                  (x = r.add(n, o)));
                let E = r.add(s, c);
                return (
                  (x = r.mul(x, E)),
                  (E = r.add(y, g)),
                  (x = r.sub(x, E)),
                  (E = r.add(i, o)),
                  (a = r.add(f, c)),
                  (E = r.mul(E, a)),
                  (a = r.add(b, g)),
                  (E = r.sub(E, a)),
                  (l = r.mul(p, x)),
                  (a = r.mul(w, g)),
                  (l = r.add(a, l)),
                  (a = r.sub(b, l)),
                  (l = r.add(b, l)),
                  (u = r.mul(a, l)),
                  (b = r.add(y, y)),
                  (b = r.add(b, y)),
                  (g = r.mul(p, g)),
                  (x = r.mul(w, x)),
                  (b = r.add(b, g)),
                  (g = r.sub(y, g)),
                  (g = r.mul(p, g)),
                  (x = r.add(x, g)),
                  (y = r.mul(b, x)),
                  (u = r.add(u, y)),
                  (y = r.mul(E, x)),
                  (a = r.mul(v, a)),
                  (a = r.sub(a, y)),
                  (y = r.mul(v, b)),
                  (l = r.mul(E, l)),
                  (l = r.add(l, y)),
                  new d(a, u, l)
                );
              }
              subtract(t) {
                return this.add(t.negate());
              }
              is0() {
                return this.equals(d.ZERO);
              }
              wNAF(t) {
                return w.wNAFCached(this, u, t, (t) => {
                  const e = r.invertBatch(t.map((t) => t.pz));
                  return t.map((t, r) => t.toAffine(e[r])).map(d.fromAffine);
                });
              }
              multiplyUnsafe(t) {
                const n = d.ZERO;
                if (t === Y) return n;
                if ((f(t), t === Z)) return this;
                const { endo: i } = e;
                if (!i) return w.unsafeLadder(this, t);
                let { k1neg: o, k1: s, k2neg: c, k2: a } = i.splitScalar(t),
                  u = n,
                  h = n,
                  l = this;
                for (; s > Y || a > Y; )
                  (s & Z && (u = u.add(l)),
                    a & Z && (h = h.add(l)),
                    (l = l.double()),
                    (s >>= Z),
                    (a >>= Z));
                return (
                  o && (u = u.negate()),
                  c && (h = h.negate()),
                  (h = new d(r.mul(h.px, i.beta), h.py, h.pz)),
                  u.add(h)
                );
              }
              multiply(t) {
                f(t);
                let n,
                  i,
                  o = t;
                const { endo: s } = e;
                if (s) {
                  const { k1neg: t, k1: e, k2neg: f, k2: c } = s.splitScalar(o);
                  let { p: a, f: u } = this.wNAF(e),
                    { p: h, f: l } = this.wNAF(c);
                  ((a = w.constTimeNegate(t, a)),
                    (h = w.constTimeNegate(f, h)),
                    (h = new d(r.mul(h.px, s.beta), h.py, h.pz)),
                    (n = a.add(h)),
                    (i = u.add(l)));
                } else {
                  const { p: t, f: e } = this.wNAF(o);
                  ((n = t), (i = e));
                }
                return d.normalizeZ([n, i])[0];
              }
              multiplyAndAddUnsafe(t, e, r) {
                const n = d.BASE,
                  i = (t, e) =>
                    e !== Y && e !== Z && t.equals(n)
                      ? t.multiply(e)
                      : t.multiplyUnsafe(e),
                  o = i(this, e).add(i(t, r));
                return o.is0() ? void 0 : o;
              }
              toAffine(t) {
                const { px: e, py: n, pz: i } = this,
                  o = this.is0();
                null == t && (t = o ? r.ONE : r.inv(i));
                const s = r.mul(e, t),
                  f = r.mul(n, t),
                  c = r.mul(i, t);
                if (o) return { x: r.ZERO, y: r.ZERO };
                if (!r.eql(c, r.ONE)) throw new Error('invZ was invalid');
                return { x: s, y: f };
              }
              isTorsionFree() {
                const { h: t, isTorsionFree: r } = e;
                if (t === Z) return !0;
                if (r) return r(d, this);
                throw new Error(
                  'isTorsionFree() has not been declared for the elliptic curve'
                );
              }
              clearCofactor() {
                const { h: t, clearCofactor: r } = e;
                return t === Z
                  ? this
                  : r
                    ? r(d, this)
                    : this.multiplyUnsafe(e.h);
              }
              toRawBytes(t = !0) {
                return (this.assertValidity(), n(d, this, t));
              }
              toHex(t = !0) {
                return a(this.toRawBytes(t));
              }
            }
            ((d.BASE = new d(e.Gx, e.Gy, r.ONE)),
              (d.ZERO = new d(r.ZERO, r.ONE, r.ZERO)));
            const p = e.nBitLength,
              w = (function (t, e) {
                const r = (t, e) => {
                    const r = e.negate();
                    return t ? r : e;
                  },
                  n = (t) => ({
                    windows: Math.ceil(e / t) + 1,
                    windowSize: 2 ** (t - 1),
                  });
                return {
                  constTimeNegate: r,
                  unsafeLadder(e, r) {
                    let n = t.ZERO,
                      i = e;
                    for (; r > z; )
                      (r & _ && (n = n.add(i)), (i = i.double()), (r >>= _));
                    return n;
                  },
                  precomputeWindow(t, e) {
                    const { windows: r, windowSize: i } = n(e),
                      o = [];
                    let s = t,
                      f = s;
                    for (let n = 0; n < r; n++) {
                      ((f = s), o.push(f));
                      for (let t = 1; t < i; t++) ((f = f.add(s)), o.push(f));
                      s = f.double();
                    }
                    return o;
                  },
                  wNAF(e, i, o) {
                    const { windows: s, windowSize: f } = n(e);
                    let c = t.ZERO,
                      a = t.BASE;
                    const u = BigInt(2 ** e - 1),
                      h = 2 ** e,
                      l = BigInt(e);
                    for (let t = 0; t < s; t++) {
                      const e = t * f;
                      let n = Number(o & u);
                      ((o >>= l), n > f && ((n -= h), (o += _)));
                      const s = e,
                        d = e + Math.abs(n) - 1,
                        p = t % 2 != 0,
                        w = n < 0;
                      0 === n
                        ? (a = a.add(r(p, i[s])))
                        : (c = c.add(r(w, i[d])));
                    }
                    return { p: c, f: a };
                  },
                  wNAFCached(t, e, r, n) {
                    const i = t.S || 1;
                    let o = e.get(t);
                    return (
                      o ||
                        ((o = this.precomputeWindow(t, i)),
                        1 !== i && e.set(t, n(o))),
                      this.wNAF(i, o, r)
                    );
                  },
                };
              })(d, e.endo ? Math.ceil(p / 2) : p);
            return {
              CURVE: e,
              ProjectivePoint: d,
              normPrivateKeyToScalar: c,
              weierstrassEquation: o,
              isWithinCurveOrder: s,
            };
          })({
            ...e,
            toBytes(t, e, n) {
              const i = e.toAffine(),
                o = r.toBytes(i.x),
                s = b;
              return n
                ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                : s(Uint8Array.from([4]), o, r.toBytes(i.y));
            },
            fromBytes(t) {
              const e = t.length,
                n = t[0],
                s = t.subarray(1);
              if (e !== i || (2 !== n && 3 !== n)) {
                if (e === o && 4 === n)
                  return {
                    x: r.fromBytes(s.subarray(0, r.BYTES)),
                    y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                throw new Error(
                  `Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
                );
              }
              {
                const t = l(s);
                if (!(Y < (f = t) && f < r.ORDER))
                  throw new Error('Point is not on curve');
                const e = v(t);
                let i = r.sqrt(e);
                return (
                  !(1 & ~n) != ((i & Z) === Z) && (i = r.neg(i)),
                  { x: t, y: i }
                );
              }
              var f;
            },
          }),
          m = (t) => a(p(t, e.nByteLength));
        function B(t) {
          return t > n >> Z;
        }
        const A = (t, e, r) => l(t.slice(e, r));
        class O {
          constructor(t, e, r) {
            ((this.r = t),
              (this.s = e),
              (this.recovery = r),
              this.assertValidity());
          }
          static fromCompact(t) {
            const r = e.nByteLength;
            return (
              (t = y('compactSignature', t, 2 * r)),
              new O(A(t, 0, r), A(t, r, 2 * r))
            );
          }
          static fromDER(t) {
            const { r: e, s: r } = G.toSig(y('DER', t));
            return new O(e, r);
          }
          assertValidity() {
            if (!x(this.r)) throw new Error('r must be 0 < r < CURVE.n');
            if (!x(this.s)) throw new Error('s must be 0 < s < CURVE.n');
          }
          addRecoveryBit(t) {
            return new O(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const { r: n, s: i, recovery: o } = this,
              a = P(y('msgHash', t));
            if (null == o || ![0, 1, 2, 3].includes(o))
              throw new Error('recovery id invalid');
            const u = 2 === o || 3 === o ? n + e.n : n;
            if (u >= r.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const h = 1 & o ? '03' : '02',
              l = c.fromHex(h + m(u)),
              d = f(u),
              p = s(-a * d),
              w = s(i * d),
              b = c.BASE.multiplyAndAddUnsafe(l, p, w);
            if (!b) throw new Error('point at infinify');
            return (b.assertValidity(), b);
          }
          hasHighS() {
            return B(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new O(this.r, s(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return h(this.toDERHex());
          }
          toDERHex() {
            return G.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return h(this.toCompactHex());
          }
          toCompactHex() {
            return m(this.r) + m(this.s);
          }
        }
        const j = {
          isValidPrivateKey(t) {
            try {
              return (u(t), !0);
            } catch (e) {
              return !1;
            }
          },
          normPrivateKeyToScalar: u,
          randomPrivateKey() {
            const t = H(e.n);
            return ((t, e, r = !1) => {
              const n = t.length,
                i = C(e),
                o = H(e);
              if (n < 16 || n < o || n > 1024)
                throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);
              const s = T(r ? l(t) : d(t), e - S) + S;
              return r ? w(s, i) : p(s, i);
            })(e.randomBytes(t), e.n);
          },
          precompute(t = 8, e = c.BASE) {
            return (e.I(t), e.multiply(BigInt(3)), e);
          },
        };
        function k(t) {
          const e = t instanceof Uint8Array,
            r = 'string' == typeof t,
            n = (e || r) && t.length;
          return e
            ? n === i || n === o
            : r
              ? n === 2 * i || n === 2 * o
              : t instanceof c;
        }
        const U =
            e.bits2int ||
            ((t) => {
              const r = l(t),
                n = 8 * t.length - e.nBitLength;
              return n > 0 ? r >> BigInt(n) : r;
            }),
          P = e.bits2int_modN || ((t) => s(U(t))),
          $ = g(e.nBitLength);
        function N(t) {
          if ('bigint' != typeof t) throw new Error('bigint expected');
          if (!(Y <= t && t < $))
            throw new Error(`bigint expected < 2^${e.nBitLength}`);
          return p(t, e.nByteLength);
        }
        const R = { lowS: e.lowS, prehash: !1 },
          q = { lowS: e.lowS, prehash: !1 };
        return (
          c.BASE.I(8),
          {
            CURVE: e,
            getPublicKey: (t, e = !0) => c.fromPrivateKey(t).toRawBytes(e),
            getSharedSecret(t, e, r = !0) {
              if (k(t)) throw new Error('first arg must be private key');
              if (!k(e)) throw new Error('second arg must be public key');
              return c.fromHex(e).multiply(u(t)).toRawBytes(r);
            },
            sign(t, n, i = R) {
              const { seed: o, k2sig: a } = (function (t, n, i = R) {
                  if (['recovered', 'canonical'].some((t) => t in i))
                    throw new Error('sign() legacy options not supported');
                  const { hash: o, randomBytes: a } = e;
                  let { lowS: h, prehash: l, extraEntropy: d } = i;
                  (null == h && (h = !0),
                    (t = y('msgHash', t)),
                    l && (t = y('prehashed msgHash', o(t))));
                  const p = P(t),
                    w = u(n),
                    g = [N(w), N(p)];
                  if (null != d) {
                    const t = !0 === d ? a(r.BYTES) : d;
                    g.push(y('extraEntropy', t));
                  }
                  const v = b(...g),
                    E = p;
                  return {
                    seed: v,
                    k2sig(t) {
                      const e = U(t);
                      if (!x(e)) return;
                      const r = f(e),
                        n = c.BASE.multiply(e).toAffine(),
                        i = s(n.x);
                      if (i === Y) return;
                      const o = s(r * s(E + i * w));
                      if (o === Y) return;
                      let a = (n.x === i ? 0 : 2) | Number(n.y & Z),
                        u = o;
                      return (
                        h &&
                          B(o) &&
                          ((u = ((t) => (B(t) ? s(-t) : t))(o)), (a ^= 1)),
                        new O(i, u, a)
                      );
                    },
                  };
                })(t, n, i),
                h = e;
              return E(h.hash.outputLen, h.nByteLength, h.hmac)(o, a);
            },
            verify(t, r, n, i = q) {
              const o = t;
              if (
                ((r = y('msgHash', r)), (n = y('publicKey', n)), 'strict' in i)
              )
                throw new Error('options.strict was renamed to lowS');
              const { lowS: a, prehash: u } = i;
              let h, l;
              try {
                if ('string' == typeof o || o instanceof Uint8Array)
                  try {
                    h = O.fromDER(o);
                  } catch (E) {
                    if (!(E instanceof G.Err)) throw E;
                    h = O.fromCompact(o);
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
                    h = new O(t, e);
                  }
                }
                l = c.fromHex(n);
              } catch (m) {
                if ('PARSE' === m.message)
                  throw new Error(
                    'signature must be Signature instance, Uint8Array or hex string'
                  );
                return !1;
              }
              if (a && h.hasHighS()) return !1;
              u && (r = e.hash(r));
              const { r: d, s: p } = h,
                w = P(r),
                b = f(p),
                g = s(w * b),
                v = s(d * b),
                x = c.BASE.multiplyAndAddUnsafe(l, g, v)?.toAffine();
              return !!x && s(x.x) === d;
            },
            ProjectivePoint: c,
            Signature: O,
            utils: j,
          }
        );
      }
      function Q(t) {
        return {
          hash: t,
          hmac: (e, ...r) => M(t, e, (0, F.Id)(...r)),
          randomBytes: F.po,
        };
      }
      BigInt(4);
      const tt = BigInt(
          '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
        ),
        et = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        rt = BigInt(1),
        nt = BigInt(2),
        it = (t, e) => (t + e / nt) / e;
      const ot = ((t, e, r = !1, n = {}) => {
          if (t <= B) throw new Error(`Expected Field ORDER > 0, got ${t}`);
          const { nBitLength: i, nByteLength: o } = R(t, e);
          if (o > 2048)
            throw new Error('Field lengths over 2048 bytes are not supported');
          const s = (function (t) {
              if (t % j === O) {
                const e = (t + S) / j;
                return (t, r) => {
                  const n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw new Error('Cannot find square root');
                  return n;
                };
              }
              if (t % U === k) {
                const e = (t - k) / U;
                return (t, r) => {
                  const n = t.mul(r, A),
                    i = t.pow(n, e),
                    o = t.mul(r, i),
                    s = t.mul(t.mul(o, A), i),
                    f = t.mul(o, t.sub(s, t.ONE));
                  if (!t.eql(t.sqr(f), r))
                    throw new Error('Cannot find square root');
                  return f;
                };
              }
              return ((t) => {
                const e = (t - S) / A;
                let r, n, i;
                for (r = t - S, n = 0; r % A === B; r /= A, n++);
                for (i = A; i < t && P(i, e, t) !== t - S; i++);
                if (1 === n) {
                  const e = (t + S) / j;
                  return (t, r) => {
                    const n = t.pow(r, e);
                    if (!t.eql(t.sqr(n), r))
                      throw new Error('Cannot find square root');
                    return n;
                  };
                }
                const o = (r + S) / A;
                return (t, s) => {
                  if (t.pow(s, e) === t.neg(t.ONE))
                    throw new Error('Cannot find square root');
                  let f = n,
                    c = t.pow(t.mul(t.ONE, i), r),
                    a = t.pow(s, o),
                    u = t.pow(s, r);
                  for (; !t.eql(u, t.ONE); ) {
                    if (t.eql(u, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let n = t.sqr(u); e < f && !t.eql(n, t.ONE); e++)
                      n = t.sqr(n);
                    const r = t.pow(c, S << BigInt(f - e - 1));
                    ((c = t.sqr(r)),
                      (a = t.mul(a, r)),
                      (u = t.mul(u, c)),
                      (f = e));
                  }
                  return a;
                };
              })(t);
            })(t),
            f = Object.freeze({
              ORDER: t,
              BITS: i,
              BYTES: o,
              MASK: g(i),
              ZERO: B,
              ONE: S,
              create: (e) => T(e, t),
              isValid(e) {
                if ('bigint' != typeof e)
                  throw new Error(
                    'Invalid field element: expected bigint, got ' + typeof e
                  );
                return B <= e && e < t;
              },
              is0: (t) => t === B,
              isOdd: (t) => (t & S) === S,
              neg: (e) => T(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => T(e * e, t),
              add: (e, r) => T(e + r, t),
              sub: (e, r) => T(e - r, t),
              mul: (e, r) => T(e * r, t),
              pow: (t, e) =>
                ((t, e, r) => {
                  if (r < B) throw new Error('Expected power > 0');
                  if (r === B) return t.ONE;
                  if (r === S) return e;
                  let n = t.ONE,
                    i = e;
                  for (; r > B; )
                    (r & S && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= S));
                  return n;
                })(f, t, e),
              div: (e, r) => T(e * L(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => L(e, t),
              sqrt: n.sqrt || ((t) => s(f, t)),
              invertBatch: (t) =>
                ((t, e) => {
                  const r = new Array(e.length),
                    n = e.reduce(
                      (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                      t.ONE
                    ),
                    i = t.inv(n);
                  return (
                    e.reduceRight(
                      (e, n, i) =>
                        t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                      i
                    ),
                    r
                  );
                })(f, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) => (r ? w(t, o) : p(t, o)),
              fromBytes(t) {
                if (t.length !== o)
                  throw new Error(
                    `Fp.fromBytes: expected ${o}, got ${t.length}`
                  );
                return r ? d(t) : l(t);
              },
            });
          return Object.freeze(f);
        })(tt, void 0, void 0, {
          sqrt(t) {
            const e = tt,
              r = BigInt(3),
              n = BigInt(6),
              i = BigInt(11),
              o = BigInt(22),
              s = BigInt(23),
              f = BigInt(44),
              c = BigInt(88),
              a = (t * t * t) % e,
              u = (a * a * t) % e,
              h = ($(u, r, e) * u) % e,
              l = ($(h, r, e) * u) % e,
              d = ($(l, nt, e) * a) % e,
              p = ($(d, i, e) * d) % e,
              w = ($(p, o, e) * p) % e,
              y = ($(w, f, e) * w) % e,
              b = ($(y, c, e) * y) % e,
              g = ($(b, f, e) * w) % e,
              v = ($(g, r, e) * u) % e,
              x = ($(v, s, e) * p) % e,
              E = ($(x, n, e) * a) % e,
              m = $(E, nt, e);
            if (!ot.eql(ot.sqr(m), t))
              throw new Error('Cannot find square root');
            return m;
          },
        }),
        st = ((t, e) => {
          const r = (e) => X({ ...t, ...Q(e) });
          return Object.freeze({ ...r(e), create: r });
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
              splitScalar(t) {
                const e = et,
                  r = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                  n = -rt * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                  i = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  o = r,
                  s = BigInt('0x100000000000000000000000000000000'),
                  f = it(o * t, e),
                  c = it(-n * t, e);
                let a = T(t - f * r - c * i, e),
                  u = T(-f * n - c * o, e);
                const h = a > s,
                  l = u > s;
                if ((h && (a = e - a), l && (u = e - u), a > s || u > s))
                  throw new Error('splitScalar: Endomorphism failed, k=' + t);
                return { k1neg: h, k1: a, k2neg: l, k2: u };
              },
            },
          },
          i.s
        );
      (BigInt(0), st.ProjectivePoint);
    },
    5671(t, e, r) {
      'use strict';
      r.d(e, { s: () => h });
      var n = r(8571),
        i = r(982);
      const o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
        f = new Uint32Array([
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
        a = new Uint32Array(64);
      class u extends n.D {
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
          const { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: f } = this;
          return [t, e, r, n, i, o, s, f];
        }
        set(t, e, r, n, i, o, s, f) {
          ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | f));
        }
        process(t, e) {
          for (let i = 0; i < 16; i++, e += 4) a[i] = t.getUint32(e, !1);
          for (let o = 16; o < 64; o++) {
            const t = a[o - 15],
              e = a[o - 2],
              r = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              n = (0, i.Ow)(e, 17) ^ (0, i.Ow)(e, 19) ^ (e >>> 10);
            a[o] = (n + a[o - 7] + r + a[o - 16]) | 0;
          }
          let { A: r, B: n, C: c, D: u, E: h, F: l, G: d, H: p } = this;
          for (let w = 0; w < 64; w++) {
            const t =
                (p +
                  ((0, i.Ow)(h, 6) ^ (0, i.Ow)(h, 11) ^ (0, i.Ow)(h, 25)) +
                  o(h, l, d) +
                  f[w] +
                  a[w]) |
                0,
              e =
                (((0, i.Ow)(r, 2) ^ (0, i.Ow)(r, 13) ^ (0, i.Ow)(r, 22)) +
                  s(r, n, c)) |
                0;
            ((p = d),
              (d = l),
              (l = h),
              (h = (u + t) | 0),
              (u = c),
              (c = n),
              (n = r),
              (r = (t + e) | 0));
          }
          ((r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (h = (h + this.E) | 0),
            (l = (l + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, c, u, h, l, d, p));
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
        }
      }
      const h = (0, i.ld)(() => new u());
    },
    5699(t, e, r) {
      'use strict';
      r.d(e, { lY: () => x });
      var n = r(5789),
        i = r(4486),
        o = r(982);
      const [s, f, c] = [[], [], []],
        a = BigInt(0),
        u = BigInt(1),
        h = BigInt(2),
        l = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let E = 0, m = u, I = 1, B = 0; E < 24; E++) {
        (([I, B] = [B, (2 * I + 3 * B) % 5]),
          s.push(2 * (5 * B + I)),
          f.push((((E + 1) * (E + 2)) / 2) % 64));
        let t = a;
        for (let e = 0; e < 7; e++)
          ((m = ((m << u) ^ ((m >> l) * p)) % d),
            m & h && (t ^= u << ((u << BigInt(e)) - u)));
        c.push(t);
      }
      const [w, y] = (0, i.lD)(c, !0),
        b = (t, e, r) => (r > 32 ? (0, i.WM)(t, e, r) : (0, i.P5)(t, e, r)),
        g = (t, e, r) => (r > 32 ? (0, i.im)(t, e, r) : (0, i.B4)(t, e, r));
      class v extends o.Vw {
        constructor(t, e, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.ai)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function');
          ((this.state = new Uint8Array(200)),
            (this.state32 = (0, o.DH)(this.state)));
        }
        keccak() {
          (((t, e = 24) => {
            const r = new Uint32Array(10);
            for (let n = 24 - e; n < 24; n++) {
              for (let n = 0; n < 10; n++)
                r[n] = t[n] ^ t[n + 10] ^ t[n + 20] ^ t[n + 30] ^ t[n + 40];
              for (let n = 0; n < 10; n += 2) {
                const e = (n + 8) % 10,
                  i = (n + 2) % 10,
                  o = r[i],
                  s = r[i + 1],
                  f = b(o, s, 1) ^ r[e],
                  c = g(o, s, 1) ^ r[e + 1];
                for (let r = 0; r < 50; r += 10)
                  ((t[n + r] ^= f), (t[n + r + 1] ^= c));
              }
              let e = t[2],
                i = t[3];
              for (let r = 0; r < 24; r++) {
                const n = f[r],
                  o = b(e, i, n),
                  c = g(e, i, n),
                  a = s[r];
                ((e = t[a]), (i = t[a + 1]), (t[a] = o), (t[a + 1] = c));
              }
              for (let n = 0; n < 50; n += 10) {
                for (let e = 0; e < 10; e++) r[e] = t[n + e];
                for (let e = 0; e < 10; e++)
                  t[n + e] ^= ~r[(e + 2) % 10] & r[(e + 4) % 10];
              }
              ((t[0] ^= w[n]), (t[1] ^= y[n]));
            }
            r.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0));
        }
        update(t) {
          (0, n.t2)(this);
          const { blockLen: e, state: r } = this,
            i = (t = (0, o.ZJ)(t)).length;
          for (let n = 0; n < i; ) {
            const o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: t, suffix: e, pos: r, blockLen: n } = this;
          ((t[r] ^= e),
            128 & e && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak());
        }
        writeInto(t) {
          ((0, n.t2)(this, !1), (0, n.ee)(t), this.finish());
          const e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, i - n);
            (t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o));
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
          return this.writeInto(t);
        }
        xof(t) {
          return ((0, n.ai)(t), this.xofInto(new Uint8Array(t)));
        }
        digestInto(t) {
          if (((0, n.CG)(t, this), this.finished))
            throw new Error('digest() was already called');
          return (this.writeInto(t), this.destroy(), t);
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          ((this.destroyed = !0), this.state.fill(0));
        }
        i(t) {
          const {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new v(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      const x = ((t, e, r) => (0, o.ld)(() => new v(e, t, r)))(1, 136, 32);
    },
    5789(t, e, r) {
      'use strict';
      function n(t) {
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
        (n(t.outputLen), n(t.blockLen));
      }
      function s(t, e = !0) {
        if (t.destroyed) throw new Error('Hash instance has been destroyed');
        if (e && t.finished)
          throw new Error('Hash#digest() has already been called');
      }
      function f(t, e) {
        i(t);
        const r = e.outputLen;
        if (t.length < r)
          throw new Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        CG: () => f,
        ai: () => n,
        ee: () => i,
        t2: () => s,
        tW: () => o,
      });
    },
    6720(t, e, r) {
      'use strict';
      var n = () => {},
        i = r(2985),
        o = {},
        s = r(2260);
      function f(t, e, r, f, c) {
        for (var a in t)
          if (s(t, a)) {
            var u;
            try {
              if ('function' != typeof t[a]) {
                var h = Error(
                  (f || 'React class') +
                    ': ' +
                    r +
                    ' type `' +
                    a +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof t[a] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((h.name = 'Invariant Violation'), h);
              }
              u = t[a](e, a, f, r, null, i);
            } catch (d) {
              u = d;
            }
            if (
              (!u ||
                u instanceof Error ||
                n(
                  (f || 'React class') +
                    ': type specification of ' +
                    r +
                    ' `' +
                    a +
                    '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                    typeof u +
                    '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                ),
              u instanceof Error && !(u.message in o))
            ) {
              o[u.message] = !0;
              var l = c ? c() : '';
              n('Failed ' + r + ' type: ' + u.message + (null != l ? l : ''));
            }
          }
      }
      ((n = (t) => {
        var e = 'Warning: ' + t;
        try {
          throw new Error(e);
        } catch (r) {}
      }),
        (f.resetWarningCache = () => {
          o = {};
        }),
        (t.exports = f));
    },
    8571(t, e, r) {
      'use strict';
      r.d(e, { D: () => o });
      var n = r(5789),
        i = r(982);
      class o extends i.Vw {
        constructor(t, e, r, n) {
          (super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.O8)(this.buffer)));
        }
        update(t) {
          (0, n.t2)(this);
          const { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.ZJ)(t)).length;
          for (let n = 0; n < s; ) {
            const f = Math.min(o - this.pos, s - n);
            if (f === o) {
              const e = (0, i.O8)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            (r.set(t.subarray(n, n + f), this.pos),
              (this.pos += f),
              (n += f),
              this.pos === o && (this.process(e, 0), (this.pos = 0)));
          }
          return ((this.length += t.length), this.roundClean(), this);
        }
        digestInto(t) {
          ((0, n.t2)(this), (0, n.CG)(t, this), (this.finished = !0));
          const { buffer: e, view: r, blockLen: o, isLE: s } = this;
          let { pos: f } = this;
          ((e[f++] = 128),
            this.buffer.subarray(f).fill(0),
            this.padOffset > o - f && (this.process(r, 0), (f = 0)));
          for (let n = f; n < o; n++) e[n] = 0;
          (((t, e, r, n) => {
            if ('function' == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              f = Number(r & o),
              c = n ? 4 : 0,
              a = n ? 0 : 4;
            (t.setUint32(e + c, s, n), t.setUint32(e + a, f, n));
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0));
          const c = (0, i.O8)(t),
            a = this.outputLen;
          if (a % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
          const u = a / 4,
            h = this.get();
          if (u > h.length)
            throw new Error('_sha2: outputLen bigger than state');
          for (let n = 0; n < u; n++) c.setUint32(4 * n, h[n], s);
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const r = t.slice(0, e);
          return (this.destroy(), r);
        }
        i(t) {
          (t || (t = new this.constructor()), t.set(...this.get()));
          const {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    9806(t, e, r) {
      'use strict';
      r.d(e, { Zf: () => h });
      var n = r(8571),
        i = r(4486),
        o = r(982);
      const [s, f] = (() =>
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
        c = new Uint32Array(80),
        a = new Uint32Array(80);
      class u extends n.D {
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
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: f,
            Eh: c,
            El: a,
            Fh: u,
            Fl: h,
            Gh: l,
            Gl: d,
            Hh: p,
            Hl: w,
          } = this;
          return [t, e, r, n, i, o, s, f, c, a, u, h, l, d, p, w];
        }
        set(t, e, r, n, i, o, s, f, c, a, u, h, l, d, p, w) {
          ((this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | f),
            (this.Eh = 0 | c),
            (this.El = 0 | a),
            (this.Fh = 0 | u),
            (this.Fl = 0 | h),
            (this.Gh = 0 | l),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | w));
        }
        process(t, e) {
          for (let i = 0; i < 16; i++, e += 4)
            ((c[i] = t.getUint32(e)), (a[i] = t.getUint32((e += 4))));
          for (let s = 16; s < 80; s++) {
            const t = 0 | c[s - 15],
              e = 0 | a[s - 15],
              r =
                i.Ay.rotrSH(t, e, 1) ^
                i.Ay.rotrSH(t, e, 8) ^
                i.Ay.shrSH(t, e, 7),
              n =
                i.Ay.rotrSL(t, e, 1) ^
                i.Ay.rotrSL(t, e, 8) ^
                i.Ay.shrSL(t, e, 7),
              o = 0 | c[s - 2],
              f = 0 | a[s - 2],
              u =
                i.Ay.rotrSH(o, f, 19) ^
                i.Ay.rotrBH(o, f, 61) ^
                i.Ay.shrSH(o, f, 6),
              h =
                i.Ay.rotrSL(o, f, 19) ^
                i.Ay.rotrBL(o, f, 61) ^
                i.Ay.shrSL(o, f, 6),
              l = i.Ay.add4L(n, h, a[s - 7], a[s - 16]),
              d = i.Ay.add4H(l, r, u, c[s - 7], c[s - 16]);
            ((c[s] = 0 | d), (a[s] = 0 | l));
          }
          let {
            Ah: r,
            Al: n,
            Bh: o,
            Bl: u,
            Ch: h,
            Cl: l,
            Dh: d,
            Dl: p,
            Eh: w,
            El: y,
            Fh: b,
            Fl: g,
            Gh: v,
            Gl: x,
            Hh: E,
            Hl: m,
          } = this;
          for (let I = 0; I < 80; I++) {
            const t =
                i.Ay.rotrSH(w, y, 14) ^
                i.Ay.rotrSH(w, y, 18) ^
                i.Ay.rotrBH(w, y, 41),
              e =
                i.Ay.rotrSL(w, y, 14) ^
                i.Ay.rotrSL(w, y, 18) ^
                i.Ay.rotrBL(w, y, 41),
              B = (w & b) ^ (~w & v),
              S = (y & g) ^ (~y & x),
              A = i.Ay.add5L(m, e, S, f[I], a[I]),
              O = i.Ay.add5H(A, E, t, B, s[I], c[I]),
              j = 0 | A,
              k =
                i.Ay.rotrSH(r, n, 28) ^
                i.Ay.rotrBH(r, n, 34) ^
                i.Ay.rotrBH(r, n, 39),
              U =
                i.Ay.rotrSL(r, n, 28) ^
                i.Ay.rotrBL(r, n, 34) ^
                i.Ay.rotrBL(r, n, 39),
              T = (r & o) ^ (r & h) ^ (o & h),
              P = (n & u) ^ (n & l) ^ (u & l);
            ((E = 0 | v),
              (m = 0 | x),
              (v = 0 | b),
              (x = 0 | g),
              (b = 0 | w),
              (g = 0 | y),
              ({ h: w, l: y } = i.Ay.add(0 | d, 0 | p, 0 | O, 0 | j)),
              (d = 0 | h),
              (p = 0 | l),
              (h = 0 | o),
              (l = 0 | u),
              (o = 0 | r),
              (u = 0 | n));
            const $ = i.Ay.add3L(j, U, P);
            ((r = i.Ay.add3H($, O, k, T)), (n = 0 | $));
          }
          (({ h: r, l: n } = i.Ay.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: o, l: u } = i.Ay.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | u)),
            ({ h, l } = i.Ay.add(0 | this.Ch, 0 | this.Cl, 0 | h, 0 | l)),
            ({ h: d, l: p } = i.Ay.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: w, l: y } = i.Ay.add(0 | this.Eh, 0 | this.El, 0 | w, 0 | y)),
            ({ h: b, l: g } = i.Ay.add(0 | this.Fh, 0 | this.Fl, 0 | b, 0 | g)),
            ({ h: v, l: x } = i.Ay.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | x)),
            ({ h: E, l: m } = i.Ay.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | m)),
            this.set(r, n, o, u, h, l, d, p, w, y, b, g, v, x, E, m));
        }
        roundClean() {
          (c.fill(0), a.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      const h = (0, o.ld)(() => new u());
    },
  },
]);
