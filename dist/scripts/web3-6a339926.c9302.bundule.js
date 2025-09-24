'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [72],
  {
    536(t, e, n) {
      n.d(e, {
        E: () => u,
        MR: () => c,
        SP: () => d,
        bJ: () => o,
        dd: () => h,
        gk: () => g,
        vA: () => a,
        xz: () => l,
      });
      var r = n(2622),
        i = n(8466);
      function s(t, e) {
        if (null == t) return 'null';
        if ((null == e && (e = new Set()), 'object' == typeof t)) {
          if (e.has(t)) return '[Circular]';
          e.add(t);
        }
        if (Array.isArray(t))
          return '[ ' + t.map((t) => s(t, e)).join(', ') + ' ]';
        if (t instanceof Uint8Array) {
          const e = '0123456789abcdef';
          let n = '0x';
          for (let r = 0; r < t.length; r++)
            ((n += e[t[r] >> 4]), (n += e[15 & t[r]]));
          return n;
        }
        if ('object' == typeof t && 'function' == typeof t.toJSON)
          return s(t.toJSON(), e);
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
              '{ ' + n.map((n) => `${s(n, e)}: ${s(t[n], e)}`).join(', ') + ' }'
            );
          }
        }
        return '[ COULD NOT SERIALIZE ]';
      }
      function o(t, e) {
        return t && t.code === e;
      }
      function u(t) {
        return o(t, 'CALL_EXCEPTION');
      }
      function l(t, e, n) {
        let o,
          u = t;
        {
          const i = [];
          if (n) {
            if ('message' in n || 'code' in n || 'name' in n)
              throw new Error(`value will overwrite populated values: ${s(n)}`);
            for (const t in n) {
              if ('shortMessage' === t) continue;
              const e = n[t];
              i.push(t + '=' + s(e));
            }
          }
          (i.push(`code=${e}`),
            i.push(`version=${r.r}`),
            i.length && (t += ' (' + i.join(', ') + ')'));
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
          (0, i.n)(o, { code: e }),
          n && Object.assign(o, n),
          null == o.shortMessage && (0, i.n)(o, { shortMessage: u }),
          o
        );
      }
      function a(t, e, n, r) {
        if (!t) throw l(e, n, r);
      }
      function c(t, e, n, r) {
        a(t, e, 'INVALID_ARGUMENT', { argument: n, value: r });
      }
      function h(t, e, n) {
        (null == n && (n = ''),
          n && (n = ': ' + n),
          a(t >= e, 'missing argument' + n, 'MISSING_ARGUMENT', {
            count: t,
            expectedCount: e,
          }),
          a(t <= e, 'too many arguments' + n, 'UNEXPECTED_ARGUMENT', {
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
        a(
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
            a(
              !1,
              `private constructor; use ${t}from* methods`,
              'UNSUPPORTED_OPERATION',
              { operation: e }
            ));
        }
      }
    },
    2598(t, e, n) {
      n.d(e, { z: () => i });
      var r = n(8466);
      class i {
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
    3456(t, e, n) {
      n.d(e, { R: () => u });
      var r = n(8227);
      function i(t) {
        const e = [];
        for (; t; ) (e.unshift(255 & t), (t >>= 8));
        return e;
      }
      function s(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach((t) => {
              e = e.concat(s(t));
            }),
            e.length <= 55)
          )
            return (e.unshift(192 + e.length), e);
          const n = i(e.length);
          return (n.unshift(247 + n.length), n.concat(e));
        }
        const e = [].slice.call((0, r.q5)(t, 'object'));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return (e.unshift(128 + e.length), e);
        const n = i(e.length);
        return (n.unshift(183 + n.length), n.concat(e));
      }
      const o = '0123456789abcdef';
      function u(t) {
        let e = '0x';
        for (const n of s(t)) ((e += o[n >> 4]), (e += o[15 & n]));
        return e;
      }
    },
    3536(t, e, n) {
      n.d(e, { YW: () => u, t: () => l });
      var r = n(8227),
        i = n(536);
      function s(t, e, n, r, i) {
        if ('BAD_PREFIX' === t || 'UNEXPECTED_CONTINUE' === t) {
          let t = 0;
          for (let r = e + 1; r < n.length && n[r] >> 6 == 2; r++) t++;
          return t;
        }
        return 'OVERRUN' === t ? n.length - e - 1 : 0;
      }
      const o = Object.freeze({
        error(t, e, n, r, s) {
          (0, i.MR)(!1, `invalid codepoint at offset ${e}; ${t}`, 'bytes', n);
        },
        ignore: s,
        replace: (t, e, n, r, o) =>
          'OVERLONG' === t
            ? ((0, i.MR)(
                'number' == typeof o,
                'invalid bad code point for replacement',
                'badCodepoint',
                o
              ),
              r.push(o),
              0)
            : (r.push(65533), s(t, e, n)),
      });
      function u(t, e) {
        ((0, i.MR)('string' == typeof t, 'invalid string value', 'str', t),
          null != e && ((0, i.SP)(e), (t = t.normalize(e))));
        let n = [];
        for (let r = 0; r < t.length; r++) {
          const e = t.charCodeAt(r);
          if (e < 128) n.push(e);
          else if (e < 2048) (n.push((e >> 6) | 192), n.push((63 & e) | 128));
          else if (55296 == (64512 & e)) {
            r++;
            const s = t.charCodeAt(r);
            (0, i.MR)(
              r < t.length && 56320 == (64512 & s),
              'invalid surrogate pair',
              'str',
              t
            );
            const o = 65536 + ((1023 & e) << 10) + (1023 & s);
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
            i = [];
          let s = 0;
          for (; s < n.length; ) {
            const t = n[s++];
            if (!(t >> 7)) {
              i.push(t);
              continue;
            }
            let r = null,
              o = null;
            if (192 == (224 & t)) ((r = 1), (o = 127));
            else if (224 == (240 & t)) ((r = 2), (o = 2047));
            else {
              if (240 != (248 & t)) {
                s += e(
                  128 == (192 & t) ? 'UNEXPECTED_CONTINUE' : 'BAD_PREFIX',
                  s - 1,
                  n,
                  i
                );
                continue;
              }
              ((r = 3), (o = 65535));
            }
            if (s - 1 + r >= n.length) {
              s += e('OVERRUN', s - 1, n, i);
              continue;
            }
            let u = t & ((1 << (8 - r - 1)) - 1);
            for (let l = 0; l < r; l++) {
              let t = n[s];
              if (128 != (192 & t)) {
                ((s += e('MISSING_CONTINUE', s, n, i)), (u = null));
                break;
              }
              ((u = (u << 6) | (63 & t)), s++);
            }
            null !== u &&
              (u > 1114111
                ? (s += e('OUT_OF_RANGE', s - 1 - r, n, i, u))
                : u >= 55296 && u <= 57343
                  ? (s += e('UTF16_SURROGATE', s - 1 - r, n, i, u))
                  : u <= o
                    ? (s += e('OVERLONG', s - 1 - r, n, i, u))
                    : i.push(u));
          }
          return i;
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
    6088(t, e, n) {
      n.d(e, { J: () => a });
      var r = n(8227),
        i = n(536);
      function s(t) {
        let e = t.toString(16);
        for (; e.length < 2; ) e = '0' + e;
        return '0x' + e;
      }
      function o(t, e, n) {
        let r = 0;
        for (let i = 0; i < n; i++) r = 256 * r + t[e + i];
        return r;
      }
      function u(t, e, n, r) {
        const s = [];
        for (; n < e + 1 + r; ) {
          const o = l(t, n);
          (s.push(o.result),
            (n += o.consumed),
            (0, i.vA)(
              n <= e + 1 + r,
              'child data too short',
              'BUFFER_OVERRUN',
              { buffer: t, length: r, offset: e }
            ));
        }
        return { consumed: 1 + r, result: s };
      }
      function l(t, e) {
        (0, i.vA)(0 !== t.length, 'data too short', 'BUFFER_OVERRUN', {
          buffer: t,
          length: 0,
          offset: 1,
        });
        const n = (e) => {
          (0, i.vA)(
            e <= t.length,
            'data short segment too short',
            'BUFFER_OVERRUN',
            { buffer: t, length: t.length, offset: e }
          );
        };
        if (t[e] >= 248) {
          const r = t[e] - 247;
          n(e + 1 + r);
          const i = o(t, e + 1, r);
          return (n(e + 1 + r + i), u(t, e, e + 1 + r, r + i));
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (n(e + 1 + r), u(t, e, e + 1, r));
        }
        if (t[e] >= 184) {
          const i = t[e] - 183;
          n(e + 1 + i);
          const s = o(t, e + 1, i);
          return (
            n(e + 1 + i + s),
            {
              consumed: 1 + i + s,
              result: (0, r.c$)(t.slice(e + 1 + i, e + 1 + i + s)),
            }
          );
        }
        if (t[e] >= 128) {
          const i = t[e] - 128;
          return (
            n(e + 1 + i),
            { consumed: 1 + i, result: (0, r.c$)(t.slice(e + 1, e + 1 + i)) }
          );
        }
        return { consumed: 1, result: s(t[e]) };
      }
      function a(t) {
        const e = (0, r.q5)(t, 'data'),
          n = l(e, 0);
        return (
          (0, i.MR)(
            n.consumed === e.length,
            'unexpected junk after rlp payload',
            'data',
            t
          ),
          n.result
        );
      }
    },
    8227(t, e, n) {
      n.d(e, {
        Lm: () => o,
        Lo: () => u,
        X_: () => w,
        ZG: () => d,
        c$: () => c,
        f: () => l,
        nx: () => p,
        pO: () => f,
        q5: () => s,
        xW: () => h,
      });
      var r = n(536);
      function i(t, e, n) {
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
      function s(t, e) {
        return i(t, e, !1);
      }
      function o(t, e) {
        return i(t, e, !0);
      }
      function u(t, e) {
        return !(
          'string' != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          ('number' == typeof e && t.length !== 2 + 2 * e) ||
          (!0 === e && t.length % 2 != 0)
        );
      }
      function l(t) {
        return u(t, !0) || t instanceof Uint8Array;
      }
      const a = '0123456789abcdef';
      function c(t) {
        const e = s(t);
        let n = '0x';
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          n += a[(240 & t) >> 4] + a[15 & t];
        }
        return n;
      }
      function h(t) {
        return '0x' + t.map((t) => c(t).substring(2)).join('');
      }
      function f(t) {
        return u(t, !0) ? (t.length - 2) / 2 : s(t).length;
      }
      function d(t, e, n) {
        const i = s(t);
        return (
          null != n &&
            n > i.length &&
            (0, r.vA)(!1, 'cannot slice beyond data bounds', 'BUFFER_OVERRUN', {
              buffer: i,
              length: i.length,
              offset: n,
            }),
          c(i.slice(null == e ? 0 : e, null == n ? i.length : n))
        );
      }
      function g(t, e, n) {
        const i = s(t);
        (0, r.vA)(
          e >= i.length,
          'padding exceeds data length',
          'BUFFER_OVERRUN',
          { buffer: new Uint8Array(i), length: e, offset: e + 1 }
        );
        const o = new Uint8Array(e);
        return (o.fill(0), n ? o.set(i, e - i.length) : o.set(i, 0), c(o));
      }
      function p(t, e) {
        return g(t, e, !0);
      }
      function w(t, e) {
        return g(t, e, !1);
      }
    },
    8466(t, e, n) {
      function r(t, e, n) {
        const r = e.split('|').map((t) => t.trim());
        for (let s = 0; s < r.length; s++)
          switch (e) {
            case 'any':
              return;
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
              if (typeof t === e) return;
          }
        const i = new Error(`invalid value for type ${e}`);
        throw (
          (i.code = 'INVALID_ARGUMENT'),
          (i.argument = `value.${n}`),
          (i.value = t),
          i
        );
      }
      async function i(t) {
        const e = Object.keys(t);
        return (await Promise.all(e.map((e) => Promise.resolve(t[e])))).reduce(
          (t, n, r) => ((t[e[r]] = n), t),
          {}
        );
      }
      function s(t, e, n) {
        for (let i in e) {
          let s = e[i];
          const o = n ? n[i] : null;
          (o && r(s, o, i),
            Object.defineProperty(t, i, {
              enumerable: !0,
              value: s,
              writable: !1,
            }));
        }
      }
      n.d(e, { k: () => i, n: () => s });
    },
    8848(t, e, n) {
      n.d(e, {
        Ab: () => h,
        Dg: () => g,
        JJ: () => a,
        Ro: () => w,
        ST: () => l,
        WZ: () => p,
        c4: () => v,
        dK: () => c,
        nD: () => E,
        up: () => m,
      });
      var r = n(8227),
        i = n(536);
      const s = BigInt(0),
        o = BigInt(1),
        u = 9007199254740991;
      function l(t, e) {
        const n = f(t, 'value'),
          r = BigInt(p(e, 'width'));
        return (
          (0, i.vA)(n >> r === s, 'overflow', 'NUMERIC_FAULT', {
            operation: 'fromTwos',
            fault: 'overflow',
            value: t,
          }),
          n >> (r - o) ? -((~n & ((o << r) - o)) + o) : n
        );
      }
      function a(t, e) {
        let n = h(t, 'value');
        const r = BigInt(p(e, 'width')),
          u = o << (r - o);
        return n < s
          ? ((n = -n),
            (0, i.vA)(n <= u, 'too low', 'NUMERIC_FAULT', {
              operation: 'toTwos',
              fault: 'overflow',
              value: t,
            }),
            (~n & ((o << r) - o)) + o)
          : ((0, i.vA)(n < u, 'too high', 'NUMERIC_FAULT', {
              operation: 'toTwos',
              fault: 'overflow',
              value: t,
            }),
            n);
      }
      function c(t, e) {
        const n = f(t, 'value'),
          r = BigInt(p(e, 'bits'));
        return n & ((o << r) - o);
      }
      function h(t, e) {
        switch (typeof t) {
          case 'bigint':
            return t;
          case 'number':
            return (
              (0, i.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
              (0, i.MR)(t >= -u && t <= u, 'overflow', e || 'value', t),
              BigInt(t)
            );
          case 'string':
            try {
              if ('' === t) throw new Error('empty string');
              return '-' === t[0] && '-' !== t[1]
                ? -BigInt(t.substring(1))
                : BigInt(t);
            } catch (n) {
              (0, i.MR)(
                !1,
                `invalid BigNumberish string: ${n.message}`,
                e || 'value',
                t
              );
            }
        }
        (0, i.MR)(!1, 'invalid BigNumberish value', e || 'value', t);
      }
      function f(t, e) {
        const n = h(t, e);
        return (
          (0, i.vA)(
            n >= s,
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
      function p(t, e) {
        switch (typeof t) {
          case 'bigint':
            return (
              (0, i.MR)(t >= -u && t <= u, 'overflow', e || 'value', t),
              Number(t)
            );
          case 'number':
            return (
              (0, i.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
              (0, i.MR)(t >= -u && t <= u, 'overflow', e || 'value', t),
              t
            );
          case 'string':
            try {
              if ('' === t) throw new Error('empty string');
              return p(BigInt(t), e);
            } catch (n) {
              (0, i.MR)(
                !1,
                `invalid numeric string: ${n.message}`,
                e || 'value',
                t
              );
            }
        }
        (0, i.MR)(!1, 'invalid numeric value', e || 'value', t);
      }
      function w(t) {
        return p(g(t));
      }
      function m(t, e) {
        let n = f(t, 'value').toString(16);
        if (null == e) n.length % 2 && (n = '0' + n);
        else {
          const r = p(e, 'width');
          for (
            (0, i.vA)(
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
      function v(t) {
        const e = f(t, 'value');
        if (e === s) return new Uint8Array([]);
        let n = e.toString(16);
        n.length % 2 && (n = '0' + n);
        const r = new Uint8Array(n.length / 2);
        for (let i = 0; i < r.length; i++) {
          const t = 2 * i;
          r[i] = parseInt(n.substring(t, t + 2), 16);
        }
        return r;
      }
      function E(t) {
        let e = (0, r.c$)((0, r.f)(t) ? t : v(t)).substring(2);
        for (; e.startsWith('0'); ) e = e.substring(1);
        return ('' === e && (e = '0'), '0x' + e);
      }
    },
    9105(t, e, n) {
      n.d(e, { ck: () => E, Js: () => v, g5: () => y });
      var r = n(536),
        i = n(8227),
        s = n(8848),
        o = n(8466);
      const u = BigInt(-1),
        l = BigInt(0),
        a = BigInt(1),
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
        const i = BigInt(e.width);
        if (e.signed) {
          const e = a << (i - a);
          ((0, r.vA)(
            null == n || (t >= -e && t < e),
            'overflow',
            'NUMERIC_FAULT',
            { operation: n, fault: 'overflow', value: t }
          ),
            (t =
              t > l
                ? (0, s.ST)((0, s.dK)(t, i), i)
                : -(0, s.ST)((0, s.dK)(-t, i), i)));
        } else {
          const e = a << i;
          ((0, r.vA)(
            null == n || (t >= 0 && t < e),
            'overflow',
            'NUMERIC_FAULT',
            { operation: n, fault: 'overflow', value: t }
          ),
            (t = ((t % e) + e) % e & (e - a)));
        }
        return t;
      }
      function p(t) {
        'number' == typeof t && (t = `fixed128x${t}`);
        let e = !0,
          n = 128,
          i = 18;
        if ('string' == typeof t)
          if ('fixed' === t);
          else if ('ufixed' === t) e = !1;
          else {
            const s = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            ((0, r.MR)(s, 'invalid fixed format', 'format', t),
              (e = 'u' !== s[1]),
              (n = parseInt(s[2])),
              (i = parseInt(s[3])));
          }
        else if (t) {
          const s = t,
            o = (t, e, n) =>
              null == s[t]
                ? n
                : ((0, r.MR)(
                    typeof s[t] === e,
                    'invalid fixed format (' + t + ' not ' + e + ')',
                    'format.' + t,
                    s[t]
                  ),
                  s[t]);
          ((e = o('signed', 'boolean', e)),
            (n = o('width', 'number', n)),
            (i = o('decimals', 'number', i)));
        }
        return (
          (0, r.MR)(
            n % 8 == 0,
            'invalid FixedNumber width (not byte aligned)',
            'format.width',
            n
          ),
          (0, r.MR)(
            i <= 80,
            'invalid FixedNumber decimals (too large)',
            'format.decimals',
            i
          ),
          {
            signed: e,
            width: n,
            decimals: i,
            name: (e ? '' : 'u') + 'fixed' + String(n) + 'x' + String(i),
          }
        );
      }
      class w {
        format;
        #e;
        #n;
        #r;
        i;
        constructor(t, e, n) {
          ((0, r.gk)(t, h, 'FixedNumber'), (this.#n = e), (this.#e = n));
          const i = ((t, e) => {
            let n = '';
            t < l && ((n = '-'), (t *= u));
            let r = t.toString();
            if (0 === e) return n + r;
            for (; r.length <= e; ) r = f + r;
            const i = r.length - e;
            for (
              r = r.substring(0, i) + '.' + r.substring(i);
              '0' === r[0] && '.' !== r[1];

            )
              r = r.substring(1);
            for (; '0' === r[r.length - 1] && '.' !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(e, n.decimals);
          ((0, o.n)(this, { format: n.name, i }), (this.#r = d(n.decimals)));
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
        #i(t) {
          (0, r.MR)(
            this.format === t.format,
            'incompatible format; use fixedNumber.toFormat',
            'other',
            t
          );
        }
        #s(t, e) {
          return ((t = g(t, this.#e, e)), new w(h, t, this.#e));
        }
        #o(t, e) {
          return (this.#i(t), this.#s(this.#n + t.#n, e));
        }
        addUnsafe(t) {
          return this.#o(t);
        }
        add(t) {
          return this.#o(t, 'add');
        }
        #u(t, e) {
          return (this.#i(t), this.#s(this.#n - t.#n, e));
        }
        subUnsafe(t) {
          return this.#u(t);
        }
        sub(t) {
          return this.#u(t, 'sub');
        }
        #l(t, e) {
          return (this.#i(t), this.#s((this.#n * t.#n) / this.#r, e));
        }
        mulUnsafe(t) {
          return this.#l(t);
        }
        mul(t) {
          return this.#l(t, 'mul');
        }
        mulSignal(t) {
          this.#i(t);
          const e = this.#n * t.#n;
          return (
            (0, r.vA)(
              e % this.#r === l,
              'precision lost during signalling mul',
              'NUMERIC_FAULT',
              { operation: 'mulSignal', fault: 'underflow', value: this }
            ),
            this.#s(e / this.#r, 'mulSignal')
          );
        }
        #a(t, e) {
          return (
            (0, r.vA)(t.#n !== l, 'division by zero', 'NUMERIC_FAULT', {
              operation: 'div',
              fault: 'divide-by-zero',
              value: this,
            }),
            this.#i(t),
            this.#s((this.#n * this.#r) / t.#n, e)
          );
        }
        divUnsafe(t) {
          return this.#a(t);
        }
        div(t) {
          return this.#a(t, 'div');
        }
        divSignal(t) {
          ((0, r.vA)(t.#n !== l, 'division by zero', 'NUMERIC_FAULT', {
            operation: 'div',
            fault: 'divide-by-zero',
            value: this,
          }),
            this.#i(t));
          const e = this.#n * this.#r;
          return (
            (0, r.vA)(
              e % t.#n === l,
              'precision lost during signalling div',
              'NUMERIC_FAULT',
              { operation: 'divSignal', fault: 'underflow', value: this }
            ),
            this.#s(e / t.#n, 'divSignal')
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
            this.#n < l && (t -= this.#r - a),
            (t = (this.#n / this.#r) * this.#r),
            this.#s(t, 'floor')
          );
        }
        ceiling() {
          let t = this.#n;
          return (
            this.#n > l && (t += this.#r - a),
            (t = (this.#n / this.#r) * this.#r),
            this.#s(t, 'ceiling')
          );
        }
        round(t) {
          if ((null == t && (t = 0), t >= this.decimals)) return this;
          const e = this.decimals - t,
            n = c * d(e - 1);
          let r = this.value + n;
          const i = d(e);
          return (
            (r = (r / i) * i),
            g(r, this.#e, 'round'),
            new w(h, r, this.#e)
          );
        }
        isZero() {
          return this.#n === l;
        }
        isNegative() {
          return this.#n < l;
        }
        toString() {
          return this.i;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return w.fromString(this.toString(), t);
        }
        static fromValue(t, e, n) {
          const i = null == e ? 0 : (0, s.WZ)(e),
            o = p(n);
          let u = (0, s.Ab)(t, 'value');
          const a = i - o.decimals;
          if (a > 0) {
            const e = d(a);
            ((0, r.vA)(
              u % e === l,
              'value loses precision for format',
              'NUMERIC_FAULT',
              { operation: 'fromValue', fault: 'underflow', value: t }
            ),
              (u /= e));
          } else a < 0 && (u *= d(-a));
          return (g(u, o, 'fromValue'), new w(h, u, o));
        }
        static fromString(t, e) {
          const n = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, r.MR)(
            n && n[2].length + n[3].length > 0,
            'invalid FixedNumber string value',
            'value',
            t
          );
          const i = p(e);
          let s = n[2] || '0',
            o = n[3] || '';
          for (; o.length < i.decimals; ) o += f;
          ((0, r.vA)(
            o.substring(i.decimals).match(/^0*$/),
            'too many decimals for format',
            'NUMERIC_FAULT',
            { operation: 'fromString', fault: 'underflow', value: t }
          ),
            (o = o.substring(0, i.decimals)));
          const u = BigInt(n[1] + s + o);
          return (g(u, i, 'fromString'), new w(h, u, i));
        }
        static fromBytes(t, e) {
          let n = (0, s.Dg)((0, i.q5)(t, 'value'));
          const r = p(e);
          return (
            r.signed && (n = (0, s.ST)(n, r.width)),
            g(n, r, 'fromBytes'),
            new w(h, n, r)
          );
        }
      }
      const m = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether'];
      function v(t, e) {
        let n = 18;
        if ('string' == typeof e) {
          const t = m.indexOf(e);
          ((0, r.MR)(t >= 0, 'invalid unit', 'unit', e), (n = 3 * t));
        } else null != e && (n = (0, s.WZ)(e, 'unit'));
        return w.fromValue(t, n, { decimals: n, width: 512 }).toString();
      }
      function E(t) {
        return v(t, 18);
      }
      function y(t) {
        return ((t) => {
          (0, r.MR)('string' == typeof t, 'value must be a string', 'value', t);
          let e = 18;
          return (
            (e = (0, s.WZ)(18, 'unit')),
            w.fromString(t, { decimals: e, width: 512 }).value
          );
        })(t);
      }
    },
    9163(t, e, n) {
      n.d(e, { ui: () => v });
      var r = n(8227),
        i = n(536),
        s = n(8466),
        o = n(3536);
      function u(t) {
        return async (e, n) => {
          (0, i.vA)(
            null == n || !n.cancelled,
            'request cancelled before sending',
            'CANCELLED'
          );
          const r = e.url.split(':')[0].toLowerCase();
          ((0, i.vA)(
            'http' === r || 'https' === r,
            `unsupported protocol ${r}`,
            'UNSUPPORTED_OPERATION',
            { info: { protocol: r }, operation: 'request' }
          ),
            (0, i.vA)(
              'https' === r || !e.credentials || e.allowInsecureAuthentication,
              'insecure authorized connections unsupported',
              'UNSUPPORTED_OPERATION',
              { operation: 'request' }
            ));
          let s = null;
          const o = new AbortController(),
            u = setTimeout(() => {
              ((s = (0, i.xz)('request timeout', 'TIMEOUT')), o.abort());
            }, e.timeout);
          n &&
            n.addListener(() => {
              ((s = (0, i.xz)('request cancelled', 'CANCELLED')), o.abort());
            });
          const l = Object.assign({}, t, {
            method: e.method,
            headers: new Headers(Array.from(e)),
            body: e.body || void 0,
            signal: o.signal,
          });
          let a;
          try {
            a = await fetch(e.url, l);
          } catch (d) {
            if ((clearTimeout(u), s)) throw s;
            throw d;
          }
          clearTimeout(u);
          const c = {};
          a.headers.forEach((t, e) => {
            c[e.toLowerCase()] = t;
          });
          const h = await a.arrayBuffer(),
            f = null == h ? null : new Uint8Array(h);
          return {
            statusCode: a.status,
            statusMessage: a.statusText,
            headers: c,
            body: f,
          };
        };
      }
      u({});
      let l = u();
      const a = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
        c = new RegExp('^ipfs://(ipfs/)?(.*)$', 'i');
      let h = !1;
      async function f(t, e) {
        try {
          const e = t.match(a);
          if (!e) throw new Error('invalid data');
          return new E(
            200,
            'OK',
            { 'content-type': e[1] || 'text/plain' },
            e[2]
              ? ((t) => {
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
        } catch (i) {
          return new E(
            599,
            'BAD REQUEST (invalid data: URI)',
            {},
            null,
            new v(t)
          );
        }
        var n;
      }
      function d(t) {
        return async (e, n) => {
          try {
            const n = e.match(c);
            if (!n) throw new Error('invalid link');
            return new v(`${t}${n[2]}`);
          } catch (r) {
            return new E(
              599,
              'BAD REQUEST (invalid IPFS URI)',
              {},
              null,
              new v(e)
            );
          }
        };
      }
      const g = { data: f, ipfs: d('https://gateway.ipfs.io/ipfs/') },
        p = new WeakMap();
      class w {
        #c;
        #h;
        constructor(t) {
          ((this.#c = []),
            (this.#h = !1),
            p.set(t, () => {
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
          ((0, i.vA)(
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
          (0, i.vA)(!this.cancelled, 'cancelled', 'CANCELLED', {});
        }
      }
      function m(t) {
        if (null == t) throw new Error('missing signal; should not happen');
        return (t.checkSignal(), t);
      }
      class v {
        #f;
        #d;
        #g;
        #p;
        #w;
        #m;
        #v;
        #E;
        #y;
        #b;
        #U;
        #R;
        #N;
        #O;
        #T;
        get url() {
          return this.#m;
        }
        set url(t) {
          this.#m = String(t);
        }
        get body() {
          return null == this.#v ? null : new Uint8Array(this.#v);
        }
        set body(t) {
          if (null == t) ((this.#v = void 0), (this.#E = void 0));
          else if ('string' == typeof t)
            ((this.#v = (0, o.YW)(t)), (this.#E = 'text/plain'));
          else if (t instanceof Uint8Array)
            ((this.#v = t), (this.#E = 'application/octet-stream'));
          else {
            if ('object' != typeof t) throw new Error('invalid body');
            ((this.#v = (0, o.YW)(JSON.stringify(t))),
              (this.#E = 'application/json'));
          }
        }
        hasBody() {
          return null != this.#v;
        }
        get method() {
          return this.#p ? this.#p : this.hasBody() ? 'POST' : 'GET';
        }
        set method(t) {
          (null == t && (t = ''), (this.#p = String(t).toUpperCase()));
        }
        get headers() {
          const t = Object.assign({}, this.#g);
          return (
            this.#y &&
              (t.authorization = `Basic ${((t) => {
                const e = (0, r.q5)(t);
                let n = '';
                for (let r = 0; r < e.length; r++)
                  n += String.fromCharCode(e[r]);
                return btoa(n);
              })((0, o.YW)(this.#y))}`),
            this.allowGzip && (t['accept-encoding'] = 'gzip'),
            null == t['content-type'] &&
              this.#E &&
              (t['content-type'] = this.#E),
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
            next() {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        get credentials() {
          return this.#y || null;
        }
        setCredentials(t, e) {
          ((0, i.MR)(
            !t.match(/:/),
            'invalid basic authentication username',
            'username',
            '[REDACTED]'
          ),
            (this.#y = `${t}:${e}`));
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
          return this.#w;
        }
        set timeout(t) {
          ((0, i.MR)(t >= 0, 'timeout must be non-zero', 'timeout', t),
            (this.#w = t));
        }
        get preflightFunc() {
          return this.#b || null;
        }
        set preflightFunc(t) {
          this.#b = t;
        }
        get processFunc() {
          return this.#U || null;
        }
        set processFunc(t) {
          this.#U = t;
        }
        get retryFunc() {
          return this.#R || null;
        }
        set retryFunc(t) {
          this.#R = t;
        }
        get getUrlFunc() {
          return this.#T || l;
        }
        set getUrlFunc(t) {
          this.#T = t;
        }
        constructor(t) {
          ((this.#m = String(t)),
            (this.#f = !1),
            (this.#d = !0),
            (this.#g = {}),
            (this.#p = ''),
            (this.#w = 3e5),
            (this.#O = { slotInterval: 250, maxAttempts: 12 }),
            (this.#T = null));
        }
        toString() {
          return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#v ? (0, r.c$)(this.#v) : 'null'}>`;
        }
        setThrottleParams(t) {
          (null != t.slotInterval && (this.#O.slotInterval = t.slotInterval),
            null != t.maxAttempts && (this.#O.maxAttempts = t.maxAttempts));
        }
        async #I(t, e, n, r, s) {
          if (t >= this.#O.maxAttempts)
            return s.makeServerError('exceeded maximum retry limit');
          ((0, i.vA)(y() <= e, 'timeout', 'TIMEOUT', {
            operation: 'request.send',
            reason: 'timeout',
            request: r,
          }),
            n > 0 && (await ((t) => new Promise((e) => setTimeout(e, t)))(n)));
          let o = this.clone();
          const u = (o.url.split(':')[0] || '').toLowerCase();
          if (u in g) {
            const t = await g[u](o.url, m(r.#N));
            if (t instanceof E) {
              let e = t;
              if (this.processFunc) {
                m(r.#N);
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
          const l = await this.getUrlFunc(o, m(r.#N));
          let a = new E(l.statusCode, l.statusMessage, l.headers, l.body, r);
          if (301 === a.statusCode || 302 === a.statusCode) {
            try {
              const n = a.headers.location || '';
              return o.redirect(n).#I(t + 1, e, 0, r, a);
            } catch (c) {}
            return a;
          }
          if (
            429 === a.statusCode &&
            (null == this.retryFunc || (await this.retryFunc(o, a, t)))
          ) {
            const n = a.headers['retry-after'];
            let i =
              this.#O.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
            return (
              'string' == typeof n &&
                n.match(/^[1-9][0-9]*$/) &&
                (i = parseInt(n)),
              o.clone().#I(t + 1, e, i, r, a)
            );
          }
          if (this.processFunc) {
            m(r.#N);
            try {
              a = await this.processFunc(o, a);
            } catch (c) {
              (null != c.throttle && 'number' == typeof c.stall) ||
                a
                  .makeServerError('error in post-processing function', c)
                  .assertOk();
              let n =
                this.#O.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t));
              return (
                c.stall >= 0 && (n = c.stall),
                o.clone().#I(t + 1, e, n, r, a)
              );
            }
          }
          return a;
        }
        send() {
          return (
            (0, i.vA)(
              null == this.#N,
              'request already sent',
              'UNSUPPORTED_OPERATION',
              { operation: 'fetchRequest.send' }
            ),
            (this.#N = new w(this)),
            this.#I(
              0,
              y() + this.timeout,
              0,
              this,
              new E(0, '', {}, null, this)
            )
          );
        }
        cancel() {
          (0, i.vA)(
            null != this.#N,
            'request has not been sent',
            'UNSUPPORTED_OPERATION',
            { operation: 'fetchRequest.cancel' }
          );
          const t = p.get(this);
          if (!t) throw new Error('missing signal; should not happen');
          t();
        }
        redirect(t) {
          const e = this.url.split(':')[0].toLowerCase(),
            n = t.split(':')[0].toLowerCase();
          (0, i.vA)(
            'GET' === this.method &&
              ('https' !== e || 'http' !== n) &&
              t.match(/^https?:/),
            'unsupported redirect',
            'UNSUPPORTED_OPERATION',
            {
              operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`,
            }
          );
          const r = new v(t);
          return (
            (r.method = 'GET'),
            (r.allowGzip = this.allowGzip),
            (r.timeout = this.timeout),
            (r.#g = Object.assign({}, this.#g)),
            this.#v && (r.#v = new Uint8Array(this.#v)),
            (r.#E = this.#E),
            r
          );
        }
        clone() {
          const t = new v(this.url);
          return (
            (t.#p = this.#p),
            this.#v && (t.#v = this.#v),
            (t.#E = this.#E),
            (t.#g = Object.assign({}, this.#g)),
            (t.#y = this.#y),
            this.allowGzip && (t.allowGzip = !0),
            (t.timeout = this.timeout),
            this.allowInsecureAuthentication &&
              (t.allowInsecureAuthentication = !0),
            (t.#b = this.#b),
            (t.#U = this.#U),
            (t.#R = this.#R),
            (t.#O = Object.assign({}, this.#O)),
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
          return u(t);
        }
        static createDataGateway() {
          return f;
        }
        static createIpfsGatewayFunc(t) {
          return d(t);
        }
      }
      class E {
        #A;
        #S;
        #g;
        #v;
        #F;
        #C;
        toString() {
          return `<FetchResponse status=${this.statusCode} body=${this.#v ? (0, r.c$)(this.#v) : 'null'}>`;
        }
        get statusCode() {
          return this.#A;
        }
        get statusMessage() {
          return this.#S;
        }
        get headers() {
          return Object.assign({}, this.#g);
        }
        get body() {
          return null == this.#v ? null : new Uint8Array(this.#v);
        }
        get bodyText() {
          try {
            return null == this.#v ? '' : (0, o.t)(this.#v);
          } catch (t) {
            (0, i.vA)(
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
            (0, i.vA)(
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
            next() {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        constructor(t, e, n, r, i) {
          ((this.#A = t),
            (this.#S = e),
            (this.#g = Object.keys(n).reduce(
              (t, e) => ((t[e.toLowerCase()] = String(n[e])), t),
              {}
            )),
            (this.#v = null == r ? null : new Uint8Array(r)),
            (this.#F = i || null),
            (this.#C = { message: '' }));
        }
        makeServerError(t, e) {
          let n;
          n = t
            ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`
            : `CLIENT ESCALATED SERVER ERROR (${(t = `${this.statusCode} ${this.statusMessage}`)})`;
          const r = new E(599, n, this.headers, this.body, this.#F || void 0);
          return ((r.#C = { message: t, error: e }), r);
        }
        throwThrottleError(t, e) {
          null == e
            ? (e = -1)
            : (0, i.MR)(
                Number.isInteger(e) && e >= 0,
                'invalid stall timeout',
                'stall',
                e
              );
          const n = new Error(t || 'throttling requests');
          throw ((0, s.n)(n, { stall: e, throttle: !0 }), n);
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        hasBody() {
          return null != this.#v;
        }
        get request() {
          return this.#F;
        }
        ok() {
          return (
            '' === this.#C.message &&
            this.statusCode >= 200 &&
            this.statusCode < 300
          );
        }
        assertOk() {
          if (this.ok()) return;
          let { message: t, error: e } = this.#C;
          '' === t &&
            (t = `server response ${this.statusCode} ${this.statusMessage}`);
          let n = null;
          this.request && (n = this.request.url);
          let r = null;
          try {
            this.#v && (r = (0, o.t)(this.#v));
          } catch (s) {}
          (0, i.vA)(!1, t, 'SERVER_ERROR', {
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
      function y() {
        return new Date().getTime();
      }
    },
    9811(t, e, n) {
      n.d(e, { R: () => u });
      var r = n(8227),
        i = n(8848);
      const s = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      BigInt(0);
      const o = BigInt(58);
      function u(t) {
        const e = (0, r.q5)(t);
        let n = (0, i.Dg)(e),
          u = '';
        for (; n; ) ((u = s[Number(n % o)] + u), (n /= o));
        for (let r = 0; r < e.length && !e[r]; r++) u = s[0] + u;
        return u;
      }
    },
  },
]);
