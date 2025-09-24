'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [72],
  {
    536: (t, e, n) => {
      n.d(e, {
        E: () => a,
        MR: () => c,
        SP: () => d,
        bJ: () => o,
        dd: () => h,
        gk: () => g,
        vA: () => u,
        xz: () => l,
      });
      var r = n(2622),
        s = n(8466);
      function i(t, e) {
        if (null == t) return 'null';
        if ((null == e && (e = new Set()), 'object' == typeof t)) {
          if (e.has(t)) return '[Circular]';
          e.add(t);
        }
        if (Array.isArray(t))
          return '[ ' + t.map((t) => i(t, e)).join(', ') + ' ]';
        if (t instanceof Uint8Array) {
          const e = '0123456789abcdef';
          let n = '0x';
          for (let r = 0; r < t.length; r++)
            ((n += e[t[r] >> 4]), (n += e[15 & t[r]]));
          return n;
        }
        if ('object' == typeof t && 'function' == typeof t.toJSON)
          return i(t.toJSON(), e);
        switch (typeof t) {
          case 'boolean':
          case 'number':
          case 'symbol':
            return t.toString();
          case 'bigint':
            return BigInt(t).toString();
          case 'string':
            return JSON.stringify(t);
          case 'object': {
            const n = Object.keys(t);
            return (
              n.sort(),
              '{ ' + n.map((n) => `${i(n, e)}: ${i(t[n], e)}`).join(', ') + ' }'
            );
          }
        }
        return '[ COULD NOT SERIALIZE ]';
      }
      function o(t, e) {
        return t && t.code === e;
      }
      function a(t) {
        return o(t, 'CALL_EXCEPTION');
      }
      function l(t, e, n) {
        let o,
          a = t;
        {
          const s = [];
          if (n) {
            if ('message' in n || 'code' in n || 'name' in n)
              throw new Error(`value will overwrite populated values: ${i(n)}`);
            for (const t in n) {
              if ('shortMessage' === t) continue;
              const e = n[t];
              s.push(t + '=' + i(e));
            }
          }
          (s.push(`code=${e}`),
            s.push(`version=${r.r}`),
            s.length && (t += ' (' + s.join(', ') + ')'));
        }
        switch (e) {
          case 'INVALID_ARGUMENT':
            o = new TypeError(t);
            break;
          case 'NUMERIC_FAULT':
          case 'BUFFER_OVERRUN':
            o = new RangeError(t);
            break;
          default:
            o = new Error(t);
        }
        return (
          (0, s.n)(o, { code: e }),
          n && Object.assign(o, n),
          null == o.shortMessage && (0, s.n)(o, { shortMessage: a }),
          o
        );
      }
      function u(t, e, n, r) {
        if (!t) throw l(e, n, r);
      }
      function c(t, e, n, r) {
        u(t, e, 'INVALID_ARGUMENT', { argument: n, value: r });
      }
      function h(t, e, n) {
        (null == n && (n = ''),
          n && (n = ': ' + n),
          u(t >= e, 'missing argument' + n, 'MISSING_ARGUMENT', {
            count: t,
            expectedCount: e,
          }),
          u(t <= e, 'too many arguments' + n, 'UNEXPECTED_ARGUMENT', {
            count: t,
            expectedCount: e,
          }));
      }
      const f = ['NFD', 'NFC', 'NFKD', 'NFKC'].reduce((t, e) => {
        try {
          if ('test' !== 'test'.normalize(e)) throw new Error('bad');
          if ('NFD' === e) {
            if (
              String.fromCharCode(233).normalize('NFD') !==
              String.fromCharCode(101, 769)
            )
              throw new Error('broken');
          }
          t.push(e);
        } catch (n) {}
        return t;
      }, []);
      function d(t) {
        u(
          f.indexOf(t) >= 0,
          'platform missing String.prototype.normalize',
          'UNSUPPORTED_OPERATION',
          { operation: 'String.prototype.normalize', info: { form: t } }
        );
      }
      function g(t, e, n) {
        if ((null == n && (n = ''), t !== e)) {
          let t = n,
            e = 'new';
          (n && ((t += '.'), (e += ' ' + n)),
            u(
              !1,
              `private constructor; use ${t}from* methods`,
              'UNSUPPORTED_OPERATION',
              { operation: e }
            ));
        }
      }
    },
    2598: (t, e, n) => {
      n.d(e, { z: () => s });
      var r = n(8466);
      class s {
        filter;
        emitter;
        #t;
        constructor(t, e, n) {
          ((this.#t = e), (0, r.n)(this, { emitter: t, filter: n }));
        }
        async removeListener() {
          null != this.#t && (await this.emitter.off(this.filter, this.#t));
        }
      }
    },
    3456: (t, e, n) => {
      n.d(e, { R: () => a });
      var r = n(8227);
      function s(t) {
        const e = [];
        for (; t; ) (e.unshift(255 & t), (t >>= 8));
        return e;
      }
      function i(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(i(t));
            }),
            e.length <= 55)
          )
            return (e.unshift(192 + e.length), e);
          const n = s(e.length);
          return (n.unshift(247 + n.length), n.concat(e));
        }
        const e = Array.prototype.slice.call((0, r.q5)(t, 'object'));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return (e.unshift(128 + e.length), e);
        const n = s(e.length);
        return (n.unshift(183 + n.length), n.concat(e));
      }
      const o = '0123456789abcdef';
      function a(t) {
        let e = '0x';
        for (const n of i(t)) ((e += o[n >> 4]), (e += o[15 & n]));
        return e;
      }
    },
    3536: (t, e, n) => {
      n.d(e, { YW: () => a, _v: () => l });
      var r = n(8227),
        s = n(536);
      function i(t, e, n, r, s) {
        if ('BAD_PREFIX' === t || 'UNEXPECTED_CONTINUE' === t) {
          let t = 0;
          for (let r = e + 1; r < n.length && n[r] >> 6 == 2; r++) t++;
          return t;
        }
        return 'OVERRUN' === t ? n.length - e - 1 : 0;
      }
      const o = Object.freeze({
        error: function (t, e, n, r, i) {
          (0, s.MR)(!1, `invalid codepoint at offset ${e}; ${t}`, 'bytes', n);
        },
        ignore: i,
        replace: function (t, e, n, r, o) {
          return 'OVERLONG' === t
            ? ((0, s.MR)(
                'number' == typeof o,
                'invalid bad code point for replacement',
                'badCodepoint',
                o
              ),
              r.push(o),
              0)
            : (r.push(65533), i(t, e, n));
        },
      });
      function a(t, e) {
        ((0, s.MR)('string' == typeof t, 'invalid string value', 'str', t),
          null != e && ((0, s.SP)(e), (t = t.normalize(e))));
        let n = [];
        for (let r = 0; r < t.length; r++) {
          const e = t.charCodeAt(r);
          if (e < 128) n.push(e);
          else if (e < 2048) (n.push((e >> 6) | 192), n.push((63 & e) | 128));
          else if (55296 == (64512 & e)) {
            r++;
            const i = t.charCodeAt(r);
            (0, s.MR)(
              r < t.length && 56320 == (64512 & i),
              'invalid surrogate pair',
              'str',
              t
            );
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            (n.push((o >> 18) | 240),
              n.push(((o >> 12) & 63) | 128),
              n.push(((o >> 6) & 63) | 128),
              n.push((63 & o) | 128));
          } else
            (n.push((e >> 12) | 224),
              n.push(((e >> 6) & 63) | 128),
              n.push((63 & e) | 128));
        }
        return new Uint8Array(n);
      }
      function l(t, e) {
        return (function (t, e) {
          null == e && (e = o.error);
          const n = (0, r.q5)(t, 'bytes'),
            s = [];
          let i = 0;
          for (; i < n.length; ) {
            const t = n[i++];
            if (!(t >> 7)) {
              s.push(t);
              continue;
            }
            let r = null,
              o = null;
            if (192 == (224 & t)) ((r = 1), (o = 127));
            else if (224 == (240 & t)) ((r = 2), (o = 2047));
            else {
              if (240 != (248 & t)) {
                i += e(
                  128 == (192 & t) ? 'UNEXPECTED_CONTINUE' : 'BAD_PREFIX',
                  i - 1,
                  n,
                  s
                );
                continue;
              }
              ((r = 3), (o = 65535));
            }
            if (i - 1 + r >= n.length) {
              i += e('OVERRUN', i - 1, n, s);
              continue;
            }
            let a = t & ((1 << (8 - r - 1)) - 1);
            for (let l = 0; l < r; l++) {
              let t = n[i];
              if (128 != (192 & t)) {
                ((i += e('MISSING_CONTINUE', i, n, s)), (a = null));
                break;
              }
              ((a = (a << 6) | (63 & t)), i++);
            }
            null !== a &&
              (a > 1114111
                ? (i += e('OUT_OF_RANGE', i - 1 - r, n, s, a))
                : a >= 55296 && a <= 57343
                  ? (i += e('UTF16_SURROGATE', i - 1 - r, n, s, a))
                  : a <= o
                    ? (i += e('OVERLONG', i - 1 - r, n, s, a))
                    : s.push(a));
          }
          return s;
        })(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t)
                ))
          )
          .join('');
      }
    },
    6088: (t, e, n) => {
      n.d(e, { J: () => u });
      var r = n(8227),
        s = n(536);
      function i(t) {
        let e = t.toString(16);
        for (; e.length < 2; ) e = '0' + e;
        return '0x' + e;
      }
      function o(t, e, n) {
        let r = 0;
        for (let s = 0; s < n; s++) r = 256 * r + t[e + s];
        return r;
      }
      function a(t, e, n, r) {
        const i = [];
        for (; n < e + 1 + r; ) {
          const o = l(t, n);
          (i.push(o.result),
            (n += o.consumed),
            (0, s.vA)(
              n <= e + 1 + r,
              'child data too short',
              'BUFFER_OVERRUN',
              { buffer: t, length: r, offset: e }
            ));
        }
        return { consumed: 1 + r, result: i };
      }
      function l(t, e) {
        (0, s.vA)(0 !== t.length, 'data too short', 'BUFFER_OVERRUN', {
          buffer: t,
          length: 0,
          offset: 1,
        });
        const n = (e) => {
          (0, s.vA)(
            e <= t.length,
            'data short segment too short',
            'BUFFER_OVERRUN',
            { buffer: t, length: t.length, offset: e }
          );
        };
        if (t[e] >= 248) {
          const r = t[e] - 247;
          n(e + 1 + r);
          const s = o(t, e + 1, r);
          return (n(e + 1 + r + s), a(t, e, e + 1 + r, r + s));
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (n(e + 1 + r), a(t, e, e + 1, r));
        }
        if (t[e] >= 184) {
          const s = t[e] - 183;
          n(e + 1 + s);
          const i = o(t, e + 1, s);
          return (
            n(e + 1 + s + i),
            {
              consumed: 1 + s + i,
              result: (0, r.c$)(t.slice(e + 1 + s, e + 1 + s + i)),
            }
          );
        }
        if (t[e] >= 128) {
          const s = t[e] - 128;
          return (
            n(e + 1 + s),
            { consumed: 1 + s, result: (0, r.c$)(t.slice(e + 1, e + 1 + s)) }
          );
        }
        return { consumed: 1, result: i(t[e]) };
      }
      function u(t) {
        const e = (0, r.q5)(t, 'data'),
          n = l(e, 0);
        return (
          (0, s.MR)(
            n.consumed === e.length,
            'unexpected junk after rlp payload',
            'data',
            t
          ),
          n.result
        );
      }
    },
    8227: (t, e, n) => {
      n.d(e, {
        Lm: () => o,
        Lo: () => a,
        X_: () => p,
        ZG: () => d,
        c$: () => c,
        f: () => l,
        nx: () => m,
        pO: () => f,
        q5: () => i,
        xW: () => h,
      });
      var r = n(536);
      function s(t, e, n) {
        if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
        if ('string' == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
          const e = new Uint8Array((t.length - 2) / 2);
          let n = 2;
          for (let r = 0; r < e.length; r++)
            ((e[r] = parseInt(t.substring(n, n + 2), 16)), (n += 2));
          return e;
        }
        (0, r.MR)(!1, 'invalid BytesLike value', e || 'value', t);
      }
      function i(t, e) {
        return s(t, e, !1);
      }
      function o(t, e) {
        return s(t, e, !0);
      }
      function a(t, e) {
        return !(
          'string' != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          ('number' == typeof e && t.length !== 2 + 2 * e) ||
          (!0 === e && t.length % 2 != 0)
        );
      }
      function l(t) {
        return a(t, !0) || t instanceof Uint8Array;
      }
      const u = '0123456789abcdef';
      function c(t) {
        const e = i(t);
        let n = '0x';
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          n += u[(240 & t) >> 4] + u[15 & t];
        }
        return n;
      }
      function h(t) {
        return '0x' + t.map((t) => c(t).substring(2)).join('');
      }
      function f(t) {
        return a(t, !0) ? (t.length - 2) / 2 : i(t).length;
      }
      function d(t, e, n) {
        const s = i(t);
        return (
          null != n &&
            n > s.length &&
            (0, r.vA)(!1, 'cannot slice beyond data bounds', 'BUFFER_OVERRUN', {
              buffer: s,
              length: s.length,
              offset: n,
            }),
          c(s.slice(null == e ? 0 : e, null == n ? s.length : n))
        );
      }
      function g(t, e, n) {
        const s = i(t);
        (0, r.vA)(
          e >= s.length,
          'padding exceeds data length',
          'BUFFER_OVERRUN',
          { buffer: new Uint8Array(s), length: e, offset: e + 1 }
        );
        const o = new Uint8Array(e);
        return (o.fill(0), n ? o.set(s, e - s.length) : o.set(s, 0), c(o));
      }
      function m(t, e) {
        return g(t, e, !0);
      }
      function p(t, e) {
        return g(t, e, !1);
      }
    },
    8466: (t, e, n) => {
      function r(t, e, n) {
        const r = e.split('|').map((t) => t.trim());
        for (let i = 0; i < r.length; i++)
          switch (e) {
            case 'any':
              return;
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
              if (typeof t === e) return;
          }
        const s = new Error(`invalid value for type ${e}`);
        throw (
          (s.code = 'INVALID_ARGUMENT'),
          (s.argument = `value.${n}`),
          (s.value = t),
          s
        );
      }
      async function s(t) {
        const e = Object.keys(t);
        return (await Promise.all(e.map((e) => Promise.resolve(t[e])))).reduce(
          (t, n, r) => ((t[e[r]] = n), t),
          {}
        );
      }
      function i(t, e, n) {
        for (let s in e) {
          let i = e[s];
          const o = n ? n[s] : null;
          (o && r(i, o, s),
            Object.defineProperty(t, s, {
              enumerable: !0,
              value: i,
              writable: !1,
            }));
        }
      }
      n.d(e, { k: () => s, n: () => i });
    },
    8848: (t, e, n) => {
      n.d(e, {
        Ab: () => h,
        Dg: () => g,
        JJ: () => u,
        Ro: () => p,
        ST: () => l,
        WZ: () => m,
        c4: () => y,
        dK: () => c,
        nD: () => b,
        up: () => v,
      });
      var r = n(8227),
        s = n(536);
      const i = BigInt(0),
        o = BigInt(1),
        a = 9007199254740991;
      function l(t, e) {
        const n = f(t, 'value'),
          r = BigInt(m(e, 'width'));
        return (
          (0, s.vA)(n >> r === i, 'overflow', 'NUMERIC_FAULT', {
            operation: 'fromTwos',
            fault: 'overflow',
            value: t,
          }),
          n >> (r - o) ? -((~n & ((o << r) - o)) + o) : n
        );
      }
      function u(t, e) {
        let n = h(t, 'value');
        const r = BigInt(m(e, 'width')),
          a = o << (r - o);
        return n < i
          ? ((n = -n),
            (0, s.vA)(n <= a, 'too low', 'NUMERIC_FAULT', {
              operation: 'toTwos',
              fault: 'overflow',
              value: t,
            }),
            (~n & ((o << r) - o)) + o)
          : ((0, s.vA)(n < a, 'too high', 'NUMERIC_FAULT', {
              operation: 'toTwos',
              fault: 'overflow',
              value: t,
            }),
            n);
      }
      function c(t, e) {
        const n = f(t, 'value'),
          r = BigInt(m(e, 'bits'));
        return n & ((o << r) - o);
      }
      function h(t, e) {
        switch (typeof t) {
          case 'bigint':
            return t;
          case 'number':
            return (
              (0, s.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
              (0, s.MR)(t >= -a && t <= a, 'overflow', e || 'value', t),
              BigInt(t)
            );
          case 'string':
            try {
              if ('' === t) throw new Error('empty string');
              return '-' === t[0] && '-' !== t[1]
                ? -BigInt(t.substring(1))
                : BigInt(t);
            } catch (n) {
              (0, s.MR)(
                !1,
                `invalid BigNumberish string: ${n.message}`,
                e || 'value',
                t
              );
            }
        }
        (0, s.MR)(!1, 'invalid BigNumberish value', e || 'value', t);
      }
      function f(t, e) {
        const n = h(t, e);
        return (
          (0, s.vA)(
            n >= i,
            'unsigned value cannot be negative',
            'NUMERIC_FAULT',
            { fault: 'overflow', operation: 'getUint', value: t }
          ),
          n
        );
      }
      const d = '0123456789abcdef';
      function g(t) {
        if (t instanceof Uint8Array) {
          let e = '0x0';
          for (const n of t) ((e += d[n >> 4]), (e += d[15 & n]));
          return BigInt(e);
        }
        return h(t);
      }
      function m(t, e) {
        switch (typeof t) {
          case 'bigint':
            return (
              (0, s.MR)(t >= -a && t <= a, 'overflow', e || 'value', t),
              Number(t)
            );
          case 'number':
            return (
              (0, s.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
              (0, s.MR)(t >= -a && t <= a, 'overflow', e || 'value', t),
              t
            );
          case 'string':
            try {
              if ('' === t) throw new Error('empty string');
              return m(BigInt(t), e);
            } catch (n) {
              (0, s.MR)(
                !1,
                `invalid numeric string: ${n.message}`,
                e || 'value',
                t
              );
            }
        }
        (0, s.MR)(!1, 'invalid numeric value', e || 'value', t);
      }
      function p(t) {
        return m(g(t));
      }
      function v(t, e) {
        let n = f(t, 'value').toString(16);
        if (null == e) n.length % 2 && (n = '0' + n);
        else {
          const r = m(e, 'width');
          for (
            (0, s.vA)(
              2 * r >= n.length,
              `value exceeds width (${r} bytes)`,
              'NUMERIC_FAULT',
              { operation: 'toBeHex', fault: 'overflow', value: t }
            );
            n.length < 2 * r;

          )
            n = '0' + n;
        }
        return '0x' + n;
      }
      function y(t) {
        const e = f(t, 'value');
        if (e === i) return new Uint8Array([]);
        let n = e.toString(16);
        n.length % 2 && (n = '0' + n);
        const r = new Uint8Array(n.length / 2);
        for (let s = 0; s < r.length; s++) {
          const t = 2 * s;
          r[s] = parseInt(n.substring(t, t + 2), 16);
        }
        return r;
      }
      function b(t) {
        let e = (0, r.c$)((0, r.f)(t) ? t : y(t)).substring(2);
        for (; e.startsWith('0'); ) e = e.substring(1);
        return ('' === e && (e = '0'), '0x' + e);
      }
    },
    9105: (t, e, n) => {
      n.d(e, { ck: () => b, Js: () => y, g5: () => w });
      var r = n(536),
        s = n(8227),
        i = n(8848),
        o = n(8466);
      const a = BigInt(-1),
        l = BigInt(0),
        u = BigInt(1),
        c = BigInt(5),
        h = {};
      let f = '0000';
      for (; f.length < 80; ) f += f;
      function d(t) {
        let e = f;
        for (; e.length < t; ) e += e;
        return BigInt('1' + e.substring(0, t));
      }
      function g(t, e, n) {
        const s = BigInt(e.width);
        if (e.signed) {
          const e = u << (s - u);
          ((0, r.vA)(
            null == n || (t >= -e && t < e),
            'overflow',
            'NUMERIC_FAULT',
            { operation: n, fault: 'overflow', value: t }
          ),
            (t =
              t > l
                ? (0, i.ST)((0, i.dK)(t, s), s)
                : -(0, i.ST)((0, i.dK)(-t, s), s)));
        } else {
          const e = u << s;
          ((0, r.vA)(
            null == n || (t >= 0 && t < e),
            'overflow',
            'NUMERIC_FAULT',
            { operation: n, fault: 'overflow', value: t }
          ),
            (t = ((t % e) + e) % e & (e - u)));
        }
        return t;
      }
      function m(t) {
        'number' == typeof t && (t = `fixed128x${t}`);
        let e = !0,
          n = 128,
          s = 18;
        if ('string' == typeof t)
          if ('fixed' === t);
          else if ('ufixed' === t) e = !1;
          else {
            const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            ((0, r.MR)(i, 'invalid fixed format', 'format', t),
              (e = 'u' !== i[1]),
              (n = parseInt(i[2])),
              (s = parseInt(i[3])));
          }
        else if (t) {
          const i = t,
            o = (t, e, n) =>
              null == i[t]
                ? n
                : ((0, r.MR)(
                    typeof i[t] === e,
                    'invalid fixed format (' + t + ' not ' + e + ')',
                    'format.' + t,
                    i[t]
                  ),
                  i[t]);
          ((e = o('signed', 'boolean', e)),
            (n = o('width', 'number', n)),
            (s = o('decimals', 'number', s)));
        }
        return (
          (0, r.MR)(
            n % 8 == 0,
            'invalid FixedNumber width (not byte aligned)',
            'format.width',
            n
          ),
          (0, r.MR)(
            s <= 80,
            'invalid FixedNumber decimals (too large)',
            'format.decimals',
            s
          ),
          {
            signed: e,
            width: n,
            decimals: s,
            name: (e ? '' : 'u') + 'fixed' + String(n) + 'x' + String(s),
          }
        );
      }
      class p {
        format;
        #e;
        #n;
        #r;
        _value;
        constructor(t, e, n) {
          ((0, r.gk)(t, h, 'FixedNumber'), (this.#n = e), (this.#e = n));
          const s = (function (t, e) {
            let n = '';
            t < l && ((n = '-'), (t *= a));
            let r = t.toString();
            if (0 === e) return n + r;
            for (; r.length <= e; ) r = f + r;
            const s = r.length - e;
            for (
              r = r.substring(0, s) + '.' + r.substring(s);
              '0' === r[0] && '.' !== r[1];

            )
              r = r.substring(1);
            for (; '0' === r[r.length - 1] && '.' !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(e, n.decimals);
          ((0, o.n)(this, { format: n.name, _value: s }),
            (this.#r = d(n.decimals)));
        }
        get signed() {
          return this.#e.signed;
        }
        get width() {
          return this.#e.width;
        }
        get decimals() {
          return this.#e.decimals;
        }
        get value() {
          return this.#n;
        }
        #s(t) {
          (0, r.MR)(
            this.format === t.format,
            'incompatible format; use fixedNumber.toFormat',
            'other',
            t
          );
        }
        #i(t, e) {
          return ((t = g(t, this.#e, e)), new p(h, t, this.#e));
        }
        #o(t, e) {
          return (this.#s(t), this.#i(this.#n + t.#n, e));
        }
        addUnsafe(t) {
          return this.#o(t);
        }
        add(t) {
          return this.#o(t, 'add');
        }
        #a(t, e) {
          return (this.#s(t), this.#i(this.#n - t.#n, e));
        }
        subUnsafe(t) {
          return this.#a(t);
        }
        sub(t) {
          return this.#a(t, 'sub');
        }
        #l(t, e) {
          return (this.#s(t), this.#i((this.#n * t.#n) / this.#r, e));
        }
        mulUnsafe(t) {
          return this.#l(t);
        }
        mul(t) {
          return this.#l(t, 'mul');
        }
        mulSignal(t) {
          this.#s(t);
          const e = this.#n * t.#n;
          return (
            (0, r.vA)(
              e % this.#r === l,
              'precision lost during signalling mul',
              'NUMERIC_FAULT',
              { operation: 'mulSignal', fault: 'underflow', value: this }
            ),
            this.#i(e / this.#r, 'mulSignal')
          );
        }
        #u(t, e) {
          return (
            (0, r.vA)(t.#n !== l, 'division by zero', 'NUMERIC_FAULT', {
              operation: 'div',
              fault: 'divide-by-zero',
              value: this,
            }),
            this.#s(t),
            this.#i((this.#n * this.#r) / t.#n, e)
          );
        }
        divUnsafe(t) {
          return this.#u(t);
        }
        div(t) {
          return this.#u(t, 'div');
        }
        divSignal(t) {
          ((0, r.vA)(t.#n !== l, 'division by zero', 'NUMERIC_FAULT', {
            operation: 'div',
            fault: 'divide-by-zero',
            value: this,
          }),
            this.#s(t));
          const e = this.#n * this.#r;
          return (
            (0, r.vA)(
              e % t.#n === l,
              'precision lost during signalling div',
              'NUMERIC_FAULT',
              { operation: 'divSignal', fault: 'underflow', value: this }
            ),
            this.#i(e / t.#n, 'divSignal')
          );
        }
        cmp(t) {
          let e = this.value,
            n = t.value;
          const r = this.decimals - t.decimals;
          return (
            r > 0 ? (n *= d(r)) : r < 0 && (e *= d(-r)),
            e < n ? -1 : e > n ? 1 : 0
          );
        }
        eq(t) {
          return 0 === this.cmp(t);
        }
        lt(t) {
          return this.cmp(t) < 0;
        }
        lte(t) {
          return this.cmp(t) <= 0;
        }
        gt(t) {
          return this.cmp(t) > 0;
        }
        gte(t) {
          return this.cmp(t) >= 0;
        }
        floor() {
          let t = this.#n;
          return (
            this.#n < l && (t -= this.#r - u),
            (t = (this.#n / this.#r) * this.#r),
            this.#i(t, 'floor')
          );
        }
        ceiling() {
          let t = this.#n;
          return (
            this.#n > l && (t += this.#r - u),
            (t = (this.#n / this.#r) * this.#r),
            this.#i(t, 'ceiling')
          );
        }
        round(t) {
          if ((null == t && (t = 0), t >= this.decimals)) return this;
          const e = this.decimals - t,
            n = c * d(e - 1);
          let r = this.value + n;
          const s = d(e);
          return (
            (r = (r / s) * s),
            g(r, this.#e, 'round'),
            new p(h, r, this.#e)
          );
        }
        isZero() {
          return this.#n === l;
        }
        isNegative() {
          return this.#n < l;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return p.fromString(this.toString(), t);
        }
        static fromValue(t, e, n) {
          const s = null == e ? 0 : (0, i.WZ)(e),
            o = m(n);
          let a = (0, i.Ab)(t, 'value');
          const u = s - o.decimals;
          if (u > 0) {
            const e = d(u);
            ((0, r.vA)(
              a % e === l,
              'value loses precision for format',
              'NUMERIC_FAULT',
              { operation: 'fromValue', fault: 'underflow', value: t }
            ),
              (a /= e));
          } else u < 0 && (a *= d(-u));
          return (g(a, o, 'fromValue'), new p(h, a, o));
        }
        static fromString(t, e) {
          const n = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, r.MR)(
            n && n[2].length + n[3].length > 0,
            'invalid FixedNumber string value',
            'value',
            t
          );
          const s = m(e);
          let i = n[2] || '0',
            o = n[3] || '';
          for (; o.length < s.decimals; ) o += f;
          ((0, r.vA)(
            o.substring(s.decimals).match(/^0*$/),
            'too many decimals for format',
            'NUMERIC_FAULT',
            { operation: 'fromString', fault: 'underflow', value: t }
          ),
            (o = o.substring(0, s.decimals)));
          const a = BigInt(n[1] + i + o);
          return (g(a, s, 'fromString'), new p(h, a, s));
        }
        static fromBytes(t, e) {
          let n = (0, i.Dg)((0, s.q5)(t, 'value'));
          const r = m(e);
          return (
            r.signed && (n = (0, i.ST)(n, r.width)),
            g(n, r, 'fromBytes'),
            new p(h, n, r)
          );
        }
      }
      const v = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether'];
      function y(t, e) {
        let n = 18;
        if ('string' == typeof e) {
          const t = v.indexOf(e);
          ((0, r.MR)(t >= 0, 'invalid unit', 'unit', e), (n = 3 * t));
        } else null != e && (n = (0, i.WZ)(e, 'unit'));
        return p.fromValue(t, n, { decimals: n, width: 512 }).toString();
      }
      function b(t) {
        return y(t, 18);
      }
      function w(t) {
        return (function (t) {
          (0, r.MR)('string' == typeof t, 'value must be a string', 'value', t);
          let e = 18;
          return (
            (e = (0, i.WZ)(18, 'unit')),
            p.fromString(t, { decimals: e, width: 512 }).value
          );
        })(t);
      }
    },
    9163: (t, e, n) => {
      n.d(e, { ui: () => y });
      var r = n(8227),
        s = n(536),
        i = n(8466),
        o = n(3536);
      function a(t) {
        return async function (e, n) {
          (0, s.vA)(
            null == n || !n.cancelled,
            'request cancelled before sending',
            'CANCELLED'
          );
          const r = e.url.split(':')[0].toLowerCase();
          ((0, s.vA)(
            'http' === r || 'https' === r,
            `unsupported protocol ${r}`,
            'UNSUPPORTED_OPERATION',
            { info: { protocol: r }, operation: 'request' }
          ),
            (0, s.vA)(
              'https' === r || !e.credentials || e.allowInsecureAuthentication,
              'insecure authorized connections unsupported',
              'UNSUPPORTED_OPERATION',
              { operation: 'request' }
            ));
          let i = null;
          const o = new AbortController(),
            a = setTimeout(() => {
              ((i = (0, s.xz)('request timeout', 'TIMEOUT')), o.abort());
            }, e.timeout);
          n &&
            n.addListener(() => {
              ((i = (0, s.xz)('request cancelled', 'CANCELLED')), o.abort());
            });
          const l = Object.assign({}, t, {
            method: e.method,
            headers: new Headers(Array.from(e)),
            body: e.body || void 0,
            signal: o.signal,
          });
          let u;
          try {
            u = await fetch(e.url, l);
          } catch (d) {
            if ((clearTimeout(a), i)) throw i;
            throw d;
          }
          clearTimeout(a);
          const c = {};
          u.headers.forEach((t, e) => {
            c[e.toLowerCase()] = t;
          });
          const h = await u.arrayBuffer(),
            f = null == h ? null : new Uint8Array(h);
          return {
            statusCode: u.status,
            statusMessage: u.statusText,
            headers: c,
            body: f,
          };
        };
      }
      a({});
      let l = a();
      const u = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
        c = new RegExp('^ipfs://(ipfs/)?(.*)$', 'i');
      let h = !1;
      async function f(t, e) {
        try {
          const e = t.match(u);
          if (!e) throw new Error('invalid data');
          return new b(
            200,
            'OK',
            { 'content-type': e[1] || 'text/plain' },
            e[2]
              ? (function (t) {
                  t = atob(t);
                  const e = new Uint8Array(t.length);
                  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                  return (0, r.q5)(e);
                })(e[3])
              : ((n = e[3]),
                (0, o.YW)(
                  n.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                    String.fromCharCode(parseInt(e, 16))
                  )
                ))
          );
        } catch (s) {
          return new b(
            599,
            'BAD REQUEST (invalid data: URI)',
            {},
            null,
            new y(t)
          );
        }
        var n;
      }
      function d(t) {
        return async function (e, n) {
          try {
            const n = e.match(c);
            if (!n) throw new Error('invalid link');
            return new y(`${t}${n[2]}`);
          } catch (r) {
            return new b(
              599,
              'BAD REQUEST (invalid IPFS URI)',
              {},
              null,
              new y(e)
            );
          }
        };
      }
      const g = { data: f, ipfs: d('https://gateway.ipfs.io/ipfs/') },
        m = new WeakMap();
      class p {
        #c;
        #h;
        constructor(t) {
          ((this.#c = []),
            (this.#h = !1),
            m.set(t, () => {
              if (!this.#h) {
                this.#h = !0;
                for (const t of this.#c)
                  setTimeout(() => {
                    t();
                  }, 0);
                this.#c = [];
              }
            }));
        }
        addListener(t) {
          ((0, s.vA)(
            !this.#h,
            'singal already cancelled',
            'UNSUPPORTED_OPERATION',
            { operation: 'fetchCancelSignal.addCancelListener' }
          ),
            this.#c.push(t));
        }
        get cancelled() {
          return this.#h;
        }
        checkSignal() {
          (0, s.vA)(!this.cancelled, 'cancelled', 'CANCELLED', {});
        }
      }
      function v(t) {
        if (null == t) throw new Error('missing signal; should not happen');
        return (t.checkSignal(), t);
      }
      class y {
        #f;
        #d;
        #g;
        #m;
        #p;
        #v;
        #y;
        #b;
        #w;
        #E;
        #R;
        #U;
        #A;
        #N;
        #T;
        get url() {
          return this.#v;
        }
        set url(t) {
          this.#v = String(t);
        }
        get body() {
          return null == this.#y ? null : new Uint8Array(this.#y);
        }
        set body(t) {
          if (null == t) ((this.#y = void 0), (this.#b = void 0));
          else if ('string' == typeof t)
            ((this.#y = (0, o.YW)(t)), (this.#b = 'text/plain'));
          else if (t instanceof Uint8Array)
            ((this.#y = t), (this.#b = 'application/octet-stream'));
          else {
            if ('object' != typeof t) throw new Error('invalid body');
            ((this.#y = (0, o.YW)(JSON.stringify(t))),
              (this.#b = 'application/json'));
          }
        }
        hasBody() {
          return null != this.#y;
        }
        get method() {
          return this.#m ? this.#m : this.hasBody() ? 'POST' : 'GET';
        }
        set method(t) {
          (null == t && (t = ''), (this.#m = String(t).toUpperCase()));
        }
        get headers() {
          const t = Object.assign({}, this.#g);
          return (
            this.#w &&
              (t.authorization = `Basic ${(function (t) {
                const e = (0, r.q5)(t);
                let n = '';
                for (let r = 0; r < e.length; r++)
                  n += String.fromCharCode(e[r]);
                return btoa(n);
              })((0, o.YW)(this.#w))}`),
            this.allowGzip && (t['accept-encoding'] = 'gzip'),
            null == t['content-type'] &&
              this.#b &&
              (t['content-type'] = this.#b),
            this.body && (t['content-length'] = String(this.body.length)),
            t
          );
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        setHeader(t, e) {
          this.#g[String(t).toLowerCase()] = String(e);
        }
        clearHeaders() {
          this.#g = {};
        }
        [Symbol.iterator]() {
          const t = this.headers,
            e = Object.keys(t);
          let n = 0;
          return {
            next: () => {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        get credentials() {
          return this.#w || null;
        }
        setCredentials(t, e) {
          ((0, s.MR)(
            !t.match(/:/),
            'invalid basic authentication username',
            'username',
            '[REDACTED]'
          ),
            (this.#w = `${t}:${e}`));
        }
        get allowGzip() {
          return this.#d;
        }
        set allowGzip(t) {
          this.#d = !!t;
        }
        get allowInsecureAuthentication() {
          return !!this.#f;
        }
        set allowInsecureAuthentication(t) {
          this.#f = !!t;
        }
        get timeout() {
          return this.#p;
        }
        set timeout(t) {
          ((0, s.MR)(t >= 0, 'timeout must be non-zero', 'timeout', t),
            (this.#p = t));
        }
        get preflightFunc() {
          return this.#E || null;
        }
        set preflightFunc(t) {
          this.#E = t;
        }
        get processFunc() {
          return this.#R || null;
        }
        set processFunc(t) {
          this.#R = t;
        }
        get retryFunc() {
          return this.#U || null;
        }
        set retryFunc(t) {
          this.#U = t;
        }
        get getUrlFunc() {
          return this.#T || l;
        }
        set getUrlFunc(t) {
          this.#T = t;
        }
        constructor(t) {
          ((this.#v = String(t)),
            (this.#f = !1),
            (this.#d = !0),
            (this.#g = {}),
            (this.#m = ''),
            (this.#p = 3e5),
            (this.#N = { slotInterval: 250, maxAttempts: 12 }),
            (this.#T = null));
        }
        toString() {
          return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#y ? (0, r.c$)(this.#y) : 'null'}>`;
        }
        setThrottleParams(t) {
          (null != t.slotInterval && (this.#N.slotInterval = t.slotInterval),
            null != t.maxAttempts && (this.#N.maxAttempts = t.maxAttempts));
        }
        async #I(t, e, n, r, i) {
          if (t >= this.#N.maxAttempts)
            return i.makeServerError('exceeded maximum retry limit');
          ((0, s.vA)(w() <= e, 'timeout', 'TIMEOUT', {
            operation: 'request.send',
            reason: 'timeout',
            request: r,
          }),
            n > 0 &&
              (await (function (t) {
                return new Promise((e) => setTimeout(e, t));
              })(n)));
          let o = this.clone();
          const a = (o.url.split(':')[0] || '').toLowerCase();
          if (a in g) {
            const t = await g[a](o.url, v(r.#A));
            if (t instanceof b) {
              let e = t;
              if (this.processFunc) {
                v(r.#A);
                try {
                  e = await this.processFunc(o, e);
                } catch (c) {
                  (null != c.throttle && 'number' == typeof c.stall) ||
                    e
                      .makeServerError('error in post-processing function', c)
                      .assertOk();
                }
              }
              return e;
            }
            o = t;
          }
          this.preflightFunc && (o = await this.preflightFunc(o));
          const l = await this.getUrlFunc(o, v(r.#A));
          let u = new b(l.statusCode, l.statusMessage, l.headers, l.body, r);
          if (301 === u.statusCode || 302 === u.statusCode) {
            try {
              const n = u.headers.location || '';
              return o.redirect(n).#I(t + 1, e, 0, r, u);
            } catch (c) {}
            return u;
          }
          if (
            429 === u.statusCode &&
            (null == this.retryFunc || (await this.retryFunc(o, u, t)))
          ) {
            const n = u.headers['retry-after'];
            let s =
              this.#N.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
            return (
              'string' == typeof n &&
                n.match(/^[1-9][0-9]*$/) &&
                (s = parseInt(n)),
              o.clone().#I(t + 1, e, s, r, u)
            );
          }
          if (this.processFunc) {
            v(r.#A);
            try {
              u = await this.processFunc(o, u);
            } catch (c) {
              (null != c.throttle && 'number' == typeof c.stall) ||
                u
                  .makeServerError('error in post-processing function', c)
                  .assertOk();
              let n =
                this.#N.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t));
              return (
                c.stall >= 0 && (n = c.stall),
                o.clone().#I(t + 1, e, n, r, u)
              );
            }
          }
          return u;
        }
        send() {
          return (
            (0, s.vA)(
              null == this.#A,
              'request already sent',
              'UNSUPPORTED_OPERATION',
              { operation: 'fetchRequest.send' }
            ),
            (this.#A = new p(this)),
            this.#I(
              0,
              w() + this.timeout,
              0,
              this,
              new b(0, '', {}, null, this)
            )
          );
        }
        cancel() {
          (0, s.vA)(
            null != this.#A,
            'request has not been sent',
            'UNSUPPORTED_OPERATION',
            { operation: 'fetchRequest.cancel' }
          );
          const t = m.get(this);
          if (!t) throw new Error('missing signal; should not happen');
          t();
        }
        redirect(t) {
          const e = this.url.split(':')[0].toLowerCase(),
            n = t.split(':')[0].toLowerCase();
          (0, s.vA)(
            'GET' === this.method &&
              ('https' !== e || 'http' !== n) &&
              t.match(/^https?:/),
            'unsupported redirect',
            'UNSUPPORTED_OPERATION',
            {
              operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`,
            }
          );
          const r = new y(t);
          return (
            (r.method = 'GET'),
            (r.allowGzip = this.allowGzip),
            (r.timeout = this.timeout),
            (r.#g = Object.assign({}, this.#g)),
            this.#y && (r.#y = new Uint8Array(this.#y)),
            (r.#b = this.#b),
            r
          );
        }
        clone() {
          const t = new y(this.url);
          return (
            (t.#m = this.#m),
            this.#y && (t.#y = this.#y),
            (t.#b = this.#b),
            (t.#g = Object.assign({}, this.#g)),
            (t.#w = this.#w),
            this.allowGzip && (t.allowGzip = !0),
            (t.timeout = this.timeout),
            this.allowInsecureAuthentication &&
              (t.allowInsecureAuthentication = !0),
            (t.#E = this.#E),
            (t.#R = this.#R),
            (t.#U = this.#U),
            (t.#N = Object.assign({}, this.#N)),
            (t.#T = this.#T),
            t
          );
        }
        static lockConfig() {
          h = !0;
        }
        static getGateway(t) {
          return g[t.toLowerCase()] || null;
        }
        static registerGateway(t, e) {
          if ('http' === (t = t.toLowerCase()) || 'https' === t)
            throw new Error(`cannot intercept ${t}; use registerGetUrl`);
          if (h) throw new Error('gateways locked');
          g[t] = e;
        }
        static registerGetUrl(t) {
          if (h) throw new Error('gateways locked');
          l = t;
        }
        static createGetUrlFunc(t) {
          return a(t);
        }
        static createDataGateway() {
          return f;
        }
        static createIpfsGatewayFunc(t) {
          return d(t);
        }
      }
      class b {
        #S;
        #C;
        #g;
        #y;
        #O;
        #F;
        toString() {
          return `<FetchResponse status=${this.statusCode} body=${this.#y ? (0, r.c$)(this.#y) : 'null'}>`;
        }
        get statusCode() {
          return this.#S;
        }
        get statusMessage() {
          return this.#C;
        }
        get headers() {
          return Object.assign({}, this.#g);
        }
        get body() {
          return null == this.#y ? null : new Uint8Array(this.#y);
        }
        get bodyText() {
          try {
            return null == this.#y ? '' : (0, o._v)(this.#y);
          } catch (t) {
            (0, s.vA)(
              !1,
              'response body is not valid UTF-8 data',
              'UNSUPPORTED_OPERATION',
              { operation: 'bodyText', info: { response: this } }
            );
          }
        }
        get bodyJson() {
          try {
            return JSON.parse(this.bodyText);
          } catch (t) {
            (0, s.vA)(
              !1,
              'response body is not valid JSON',
              'UNSUPPORTED_OPERATION',
              { operation: 'bodyJson', info: { response: this } }
            );
          }
        }
        [Symbol.iterator]() {
          const t = this.headers,
            e = Object.keys(t);
          let n = 0;
          return {
            next: () => {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        constructor(t, e, n, r, s) {
          ((this.#S = t),
            (this.#C = e),
            (this.#g = Object.keys(n).reduce(
              (t, e) => ((t[e.toLowerCase()] = String(n[e])), t),
              {}
            )),
            (this.#y = null == r ? null : new Uint8Array(r)),
            (this.#O = s || null),
            (this.#F = { message: '' }));
        }
        makeServerError(t, e) {
          let n;
          n = t
            ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`
            : `CLIENT ESCALATED SERVER ERROR (${(t = `${this.statusCode} ${this.statusMessage}`)})`;
          const r = new b(599, n, this.headers, this.body, this.#O || void 0);
          return ((r.#F = { message: t, error: e }), r);
        }
        throwThrottleError(t, e) {
          null == e
            ? (e = -1)
            : (0, s.MR)(
                Number.isInteger(e) && e >= 0,
                'invalid stall timeout',
                'stall',
                e
              );
          const n = new Error(t || 'throttling requests');
          throw ((0, i.n)(n, { stall: e, throttle: !0 }), n);
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        hasBody() {
          return null != this.#y;
        }
        get request() {
          return this.#O;
        }
        ok() {
          return (
            '' === this.#F.message &&
            this.statusCode >= 200 &&
            this.statusCode < 300
          );
        }
        assertOk() {
          if (this.ok()) return;
          let { message: t, error: e } = this.#F;
          '' === t &&
            (t = `server response ${this.statusCode} ${this.statusMessage}`);
          let n = null;
          this.request && (n = this.request.url);
          let r = null;
          try {
            this.#y && (r = (0, o._v)(this.#y));
          } catch (i) {}
          (0, s.vA)(!1, t, 'SERVER_ERROR', {
            request: this.request || 'unknown request',
            response: this,
            error: e,
            info: {
              requestUrl: n,
              responseBody: r,
              responseStatus: `${this.statusCode} ${this.statusMessage}`,
            },
          });
        }
      }
      function w() {
        return new Date().getTime();
      }
    },
    9811: (t, e, n) => {
      n.d(e, { R: () => a });
      var r = n(8227),
        s = n(8848);
      const i = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      BigInt(0);
      const o = BigInt(58);
      function a(t) {
        const e = (0, r.q5)(t);
        let n = (0, s.Dg)(e),
          a = '';
        for (; n; ) ((a = i[Number(n % o)] + a), (n /= o));
        for (let r = 0; r < e.length && !e[r]; r++) a = i[0] + a;
        return a;
      }
    },
  },
]);
