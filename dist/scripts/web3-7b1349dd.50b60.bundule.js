'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [885],
  {
    2622: (t, e, n) => {
      n.d(e, { r: () => r });
      const r = '6.15.0';
    },
    2703: (t, e, n) => {
      n.d(e, { t: () => c });
      var r = n(8757),
        s = n(8227),
        i = n(8848),
        a = n(3456),
        o = n(4922);
      function c(t) {
        const e = (0, o.b)(t.from);
        let n = (0, i.Ab)(t.nonce, 'tx.nonce').toString(16);
        return (
          (n = '0' === n ? '0x' : n.length % 2 ? '0x0' + n : '0x' + n),
          (0, o.b)((0, s.ZG)((0, r.S)((0, a.R)([e, n])), 12))
        );
      }
    },
    2942: (t, e, n) => {
      n.d(e, { y: () => $ });
      var r = n(536),
        s = n(9665),
        i = n(4922),
        a = n(8848),
        o = n(4684);
      class c extends s.Ue {
        constructor(t) {
          super('address', 'address', t, !1);
        }
        defaultValue() {
          return '0x0000000000000000000000000000000000000000';
        }
        encode(t, e) {
          let n = o.V.dereference(e, 'string');
          try {
            n = (0, i.b)(n);
          } catch (r) {
            return this._throwError(r.message, e);
          }
          return t.writeValue(n);
        }
        decode(t) {
          return (0, i.b)((0, a.up)(t.readValue(), 20));
        }
      }
      var u = n(8466);
      class l extends s.Ue {
        coder;
        constructor(t) {
          (super(t.name, t.type, '_', t.dynamic), (this.coder = t));
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(t, e) {
          return this.coder.encode(t, e);
        }
        decode(t) {
          return this.coder.decode(t);
        }
      }
      function f(t, e, n) {
        let i = [];
        if (Array.isArray(n)) i = n;
        else if (n && 'object' == typeof n) {
          let t = {};
          i = e.map((e) => {
            const s = e.localName;
            return (
              (0, r.vA)(
                s,
                'cannot encode object for signature with missing names',
                'INVALID_ARGUMENT',
                { argument: 'values', info: { coder: e }, value: n }
              ),
              (0, r.vA)(
                !t[s],
                'cannot encode object for signature with duplicate names',
                'INVALID_ARGUMENT',
                { argument: 'values', info: { coder: e }, value: n }
              ),
              (t[s] = !0),
              n[s]
            );
          });
        } else (0, r.MR)(!1, 'invalid tuple value', 'tuple', n);
        (0, r.MR)(
          e.length === i.length,
          'types/value length mismatch',
          'tuple',
          n
        );
        let a = new s.AU(),
          o = new s.AU(),
          c = [];
        (e.forEach((t, e) => {
          let n = i[e];
          if (t.dynamic) {
            let e = o.length;
            t.encode(o, n);
            let r = a.writeUpdatableValue();
            c.push((t) => {
              r(t + e);
            });
          } else t.encode(a, n);
        }),
          c.forEach((t) => {
            t(a.length);
          }));
        let u = t.appendWriter(a);
        return ((u += t.appendWriter(o)), u);
      }
      function h(t, e) {
        let n = [],
          i = [],
          a = t.subReader(0);
        return (
          e.forEach((e) => {
            let s = null;
            if (e.dynamic) {
              let n = t.readIndex(),
                i = a.subReader(n);
              try {
                s = e.decode(i);
              } catch (o) {
                if ((0, r.bJ)(o, 'BUFFER_OVERRUN')) throw o;
                ((s = o),
                  (s.baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type));
              }
            } else
              try {
                s = e.decode(t);
              } catch (o) {
                if ((0, r.bJ)(o, 'BUFFER_OVERRUN')) throw o;
                ((s = o),
                  (s.baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type));
              }
            if (null == s) throw new Error('investigate');
            (n.push(s), i.push(e.localName || null));
          }),
          s.Q7.fromItems(n, i)
        );
      }
      class p extends s.Ue {
        coder;
        length;
        constructor(t, e, n) {
          (super(
            'array',
            t.type + '[' + (e >= 0 ? e : '') + ']',
            n,
            -1 === e || t.dynamic
          ),
            (0, u.n)(this, { coder: t, length: e }));
        }
        defaultValue() {
          const t = this.coder.defaultValue(),
            e = [];
          for (let n = 0; n < this.length; n++) e.push(t);
          return e;
        }
        encode(t, e) {
          const n = o.V.dereference(e, 'array');
          Array.isArray(n) || this._throwError('expected array value', n);
          let s = this.length;
          (-1 === s && ((s = n.length), t.writeValue(n.length)),
            (0, r.dd)(
              n.length,
              s,
              'coder array' + (this.localName ? ' ' + this.localName : '')
            ));
          let i = [];
          for (let r = 0; r < n.length; r++) i.push(this.coder);
          return f(t, i, n);
        }
        decode(t) {
          let e = this.length;
          -1 === e &&
            ((e = t.readIndex()),
            (0, r.vA)(
              e * s.Yx <= t.dataLength,
              'insufficient data length',
              'BUFFER_OVERRUN',
              { buffer: t.bytes, offset: e * s.Yx, length: t.dataLength }
            ));
          let n = [];
          for (let r = 0; r < e; r++) n.push(new l(this.coder));
          return h(t, n);
        }
      }
      class d extends s.Ue {
        constructor(t) {
          super('bool', 'bool', t, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(t, e) {
          const n = o.V.dereference(e, 'bool');
          return t.writeValue(n ? 1 : 0);
        }
        decode(t) {
          return !!t.readValue();
        }
      }
      var g = n(8227);
      class y extends s.Ue {
        constructor(t, e) {
          super(t, t, e, !0);
        }
        defaultValue() {
          return '0x';
        }
        encode(t, e) {
          e = (0, g.Lm)(e);
          let n = t.writeValue(e.length);
          return ((n += t.writeBytes(e)), n);
        }
        decode(t) {
          return t.readBytes(t.readIndex(), !0);
        }
      }
      class m extends y {
        constructor(t) {
          super('bytes', t);
        }
        decode(t) {
          return (0, g.c$)(super.decode(t));
        }
      }
      class b extends s.Ue {
        size;
        constructor(t, e) {
          let n = 'bytes' + String(t);
          (super(n, n, e, !1), (0, u.n)(this, { size: t }, { size: 'number' }));
        }
        defaultValue() {
          return '0x0000000000000000000000000000000000000000000000000000000000000000'.substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(t, e) {
          let n = (0, g.Lm)(o.V.dereference(e, this.type));
          return (
            n.length !== this.size &&
              this._throwError('incorrect data length', e),
            t.writeBytes(n)
          );
        }
        decode(t) {
          return (0, g.c$)(t.readBytes(this.size));
        }
      }
      const w = new Uint8Array([]);
      class v extends s.Ue {
        constructor(t) {
          super('null', '', t, !1);
        }
        defaultValue() {
          return null;
        }
        encode(t, e) {
          return (
            null != e && this._throwError('not null', e),
            t.writeBytes(w)
          );
        }
        decode(t) {
          return (t.readBytes(0), null);
        }
      }
      const E = BigInt(0),
        R = BigInt(1),
        x = BigInt(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        );
      class A extends s.Ue {
        size;
        signed;
        constructor(t, e, n) {
          const r = (e ? 'int' : 'uint') + 8 * t;
          (super(r, r, n, !1),
            (0, u.n)(
              this,
              { size: t, signed: e },
              { size: 'number', signed: 'boolean' }
            ));
        }
        defaultValue() {
          return 0;
        }
        encode(t, e) {
          let n = (0, a.Ab)(o.V.dereference(e, this.type)),
            r = (0, a.dK)(x, 8 * s.Yx);
          if (this.signed) {
            let t = (0, a.dK)(r, 8 * this.size - 1);
            ((n > t || n < -(t + R)) &&
              this._throwError('value out-of-bounds', e),
              (n = (0, a.JJ)(n, 8 * s.Yx)));
          } else
            (n < E || n > (0, a.dK)(r, 8 * this.size)) &&
              this._throwError('value out-of-bounds', e);
          return t.writeValue(n);
        }
        decode(t) {
          let e = (0, a.dK)(t.readValue(), 8 * this.size);
          return (this.signed && (e = (0, a.ST)(e, 8 * this.size)), e);
        }
      }
      var k = n(3536);
      class O extends y {
        constructor(t) {
          super('string', t);
        }
        defaultValue() {
          return '';
        }
        encode(t, e) {
          return super.encode(t, (0, k.YW)(o.V.dereference(e, 'string')));
        }
        decode(t) {
          return (0, k._v)(super.decode(t));
        }
      }
      class P extends s.Ue {
        coders;
        constructor(t, e) {
          let n = !1;
          const r = [];
          (t.forEach((t) => {
            (t.dynamic && (n = !0), r.push(t.type));
          }),
            super('tuple', 'tuple(' + r.join(',') + ')', e, n),
            (0, u.n)(this, { coders: Object.freeze(t.slice()) }));
        }
        defaultValue() {
          const t = [];
          this.coders.forEach((e) => {
            t.push(e.defaultValue());
          });
          const e = this.coders.reduce((t, e) => {
            const n = e.localName;
            return (n && (t[n] || (t[n] = 0), t[n]++), t);
          }, {});
          return (
            this.coders.forEach((n, r) => {
              let s = n.localName;
              s &&
                1 === e[s] &&
                ('length' === s && (s = '_length'),
                null == t[s] && (t[s] = t[r]));
            }),
            Object.freeze(t)
          );
        }
        encode(t, e) {
          const n = o.V.dereference(e, 'tuple');
          return f(t, this.coders, n);
        }
        decode(t) {
          return h(t, this.coders);
        }
      }
      var N = n(4793);
      const T = new Map();
      (T.set(0, 'GENERIC_PANIC'),
        T.set(1, 'ASSERT_FALSE'),
        T.set(17, 'OVERFLOW'),
        T.set(18, 'DIVIDE_BY_ZERO'),
        T.set(33, 'ENUM_RANGE_ERROR'),
        T.set(34, 'BAD_STORAGE_DATA'),
        T.set(49, 'STACK_UNDERFLOW'),
        T.set(50, 'ARRAY_RANGE_ERROR'),
        T.set(65, 'OUT_OF_MEMORY'),
        T.set(81, 'UNINITIALIZED_FUNCTION_CALL'));
      const S = new RegExp(/^bytes([0-9]*)$/),
        _ = new RegExp(/^(u?int)([0-9]*)$/);
      let M = null,
        I = 1024;
      class $ {
        #t(t) {
          if (t.isArray())
            return new p(this.#t(t.arrayChildren), t.arrayLength, t.name);
          if (t.isTuple())
            return new P(
              t.components.map((t) => this.#t(t)),
              t.name
            );
          switch (t.baseType) {
            case 'address':
              return new c(t.name);
            case 'bool':
              return new d(t.name);
            case 'string':
              return new O(t.name);
            case 'bytes':
              return new m(t.name);
            case '':
              return new v(t.name);
          }
          let e = t.type.match(_);
          if (e) {
            let n = parseInt(e[2] || '256');
            return (
              (0, r.MR)(
                0 !== n && n <= 256 && n % 8 == 0,
                'invalid ' + e[1] + ' bit length',
                'param',
                t
              ),
              new A(n / 8, 'int' === e[1], t.name)
            );
          }
          if (((e = t.type.match(S)), e)) {
            let n = parseInt(e[1]);
            return (
              (0, r.MR)(0 !== n && n <= 32, 'invalid bytes length', 'param', t),
              new b(n, t.name)
            );
          }
          (0, r.MR)(!1, 'invalid type', 'type', t.type);
        }
        getDefaultValue(t) {
          const e = t.map((t) => this.#t(N.aX.from(t)));
          return new P(e, '_').defaultValue();
        }
        encode(t, e) {
          (0, r.dd)(e.length, t.length, 'types/values length mismatch');
          const n = t.map((t) => this.#t(N.aX.from(t))),
            i = new P(n, '_'),
            a = new s.AU();
          return (i.encode(a, e), a.data);
        }
        decode(t, e, n) {
          const r = t.map((t) => this.#t(N.aX.from(t)));
          return new P(r, '_').decode(new s.mP(e, n, I));
        }
        static _setDefaultMaxInflation(t) {
          ((0, r.MR)(
            'number' == typeof t && Number.isInteger(t),
            'invalid defaultMaxInflation factor',
            'value',
            t
          ),
            (I = t));
        }
        static defaultAbiCoder() {
          return (null == M && (M = new $()), M);
        }
        static getBuiltinCallException(t, e, n) {
          return (function (t, e, n, s) {
            let a = 'missing revert data',
              o = null,
              c = null;
            if (n) {
              a = 'execution reverted';
              const t = (0, g.q5)(n);
              if (((n = (0, g.c$)(n)), 0 === t.length))
                ((a += ' (no data present; likely require(false) occurred'),
                  (o = 'require(false)'));
              else if (t.length % 32 != 4)
                a += ' (could not decode reason; invalid data length)';
              else if ('0x08c379a0' === (0, g.c$)(t.slice(0, 4)))
                try {
                  ((o = s.decode(['string'], t.slice(4))[0]),
                    (c = {
                      signature: 'Error(string)',
                      name: 'Error',
                      args: [o],
                    }),
                    (a += `: ${JSON.stringify(o)}`));
                } catch (l) {
                  a += ' (could not decode reason; invalid string data)';
                }
              else if ('0x4e487b71' === (0, g.c$)(t.slice(0, 4)))
                try {
                  const e = Number(s.decode(['uint256'], t.slice(4))[0]);
                  ((c = {
                    signature: 'Panic(uint256)',
                    name: 'Panic',
                    args: [e],
                  }),
                    (o = `Panic due to ${T.get(e) || 'UNKNOWN'}(${e})`),
                    (a += `: ${o}`));
                } catch (l) {
                  a += ' (could not decode panic code)';
                }
              else a += ' (unknown custom error)';
            }
            const u = {
              to: e.to ? (0, i.b)(e.to) : null,
              data: e.data || '0x',
            };
            return (
              e.from && (u.from = (0, i.b)(e.from)),
              (0, r.xz)(a, 'CALL_EXCEPTION', {
                action: t,
                data: n,
                reason: o,
                transaction: u,
                invocation: null,
                revert: c,
              })
            );
          })(t, e, n, $.defaultAbiCoder());
        }
      }
    },
    3227: (t, e, n) => {
      n.d(e, { j: () => r });
      const r = '0x0000000000000000000000000000000000000000';
    },
    3571: (t, e, n) => {
      n.d(e, { NZ: () => H });
      var r = n(4684),
        s = n(8757),
        i = n(6637),
        a = n(8466),
        o = n(536),
        c = n(8227),
        u = n(8848),
        l = n(2942),
        f = n(9665),
        h = n(4793);
      class p {
        fragment;
        name;
        signature;
        topic;
        args;
        constructor(t, e, n) {
          const r = t.name,
            s = t.format();
          (0, a.n)(this, {
            fragment: t,
            name: r,
            signature: s,
            topic: e,
            args: n,
          });
        }
      }
      class d {
        fragment;
        name;
        args;
        signature;
        selector;
        value;
        constructor(t, e, n, r) {
          const s = t.name,
            i = t.format();
          (0, a.n)(this, {
            fragment: t,
            name: s,
            args: n,
            signature: i,
            selector: e,
            value: r,
          });
        }
      }
      class g {
        fragment;
        name;
        args;
        signature;
        selector;
        constructor(t, e, n) {
          const r = t.name,
            s = t.format();
          (0, a.n)(this, {
            fragment: t,
            name: r,
            args: n,
            signature: s,
            selector: e,
          });
        }
      }
      class y {
        hash;
        _isIndexed;
        static isIndexed(t) {
          return !(!t || !t._isIndexed);
        }
        constructor(t) {
          (0, a.n)(this, { hash: t, _isIndexed: !0 });
        }
      }
      const m = {
          0: 'generic panic',
          1: 'assert(false)',
          17: 'arithmetic overflow',
          18: 'division or modulo by zero',
          33: 'enum overflow',
          34: 'invalid encoded storage byte array accessed',
          49: 'out-of-bounds array access; popping on an empty array',
          50: 'out-of-bounds access of an array or bytesN',
          65: 'out of memory',
          81: 'uninitialized function',
        },
        b = {
          '0x08c379a0': {
            signature: 'Error(string)',
            name: 'Error',
            inputs: ['string'],
            reason: (t) => `reverted with reason string ${JSON.stringify(t)}`,
          },
          '0x4e487b71': {
            signature: 'Panic(uint256)',
            name: 'Panic',
            inputs: ['uint256'],
            reason: (t) => {
              let e = 'unknown panic code';
              return (
                t >= 0 && t <= 255 && m[t.toString()] && (e = m[t.toString()]),
                `reverted with panic code 0x${t.toString(16)} (${e})`
              );
            },
          },
        };
      class w {
        fragments;
        deploy;
        fallback;
        receive;
        #e;
        #n;
        #r;
        #s;
        constructor(t) {
          let e = [];
          ((e = 'string' == typeof t ? JSON.parse(t) : t),
            (this.#r = new Map()),
            (this.#e = new Map()),
            (this.#n = new Map()));
          const n = [];
          for (const a of e)
            try {
              n.push(h.FK.from(a));
            } catch (i) {}
          (0, a.n)(this, { fragments: Object.freeze(n) });
          let r = null,
            s = !1;
          ((this.#s = this.getAbiCoder()),
            this.fragments.forEach((t, e) => {
              let n;
              switch (t.type) {
                case 'constructor':
                  if (this.deploy) return;
                  return void (0, a.n)(this, { deploy: t });
                case 'fallback':
                  return void (0 === t.inputs.length
                    ? (s = !0)
                    : ((0, o.MR)(
                        !r || t.payable !== r.payable,
                        'conflicting fallback fragments',
                        `fragments[${e}]`,
                        t
                      ),
                      (r = t),
                      (s = r.payable)));
                case 'function':
                  n = this.#r;
                  break;
                case 'event':
                  n = this.#n;
                  break;
                case 'error':
                  n = this.#e;
                  break;
                default:
                  return;
              }
              const i = t.format();
              n.has(i) || n.set(i, t);
            }),
            this.deploy ||
              (0, a.n)(this, { deploy: h.Pw.from('constructor()') }),
            (0, a.n)(this, { fallback: r, receive: s }));
        }
        format(t) {
          const e = t ? 'minimal' : 'full';
          return this.fragments.map((t) => t.format(e));
        }
        formatJson() {
          const t = this.fragments.map((t) => t.format('json'));
          return JSON.stringify(t.map((t) => JSON.parse(t)));
        }
        getAbiCoder() {
          return l.y.defaultAbiCoder();
        }
        #i(t, e, n) {
          if ((0, c.Lo)(t)) {
            const e = t.toLowerCase();
            for (const t of this.#r.values()) if (e === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf('(')) {
            const s = [];
            for (const [e, n] of this.#r) e.split('(')[0] === t && s.push(n);
            if (e) {
              const t = e.length > 0 ? e[e.length - 1] : null;
              let n = e.length,
                i = !0;
              r.V.isTyped(t) && 'overrides' === t.type && ((i = !1), n--);
              for (let e = s.length - 1; e >= 0; e--) {
                const t = s[e].inputs.length;
                t === n || (i && t === n - 1) || s.splice(e, 1);
              }
              for (let a = s.length - 1; a >= 0; a--) {
                const t = s[a].inputs;
                for (let n = 0; n < e.length; n++)
                  if (r.V.isTyped(e[n])) {
                    if (n >= t.length) {
                      if ('overrides' === e[n].type) continue;
                      s.splice(a, 1);
                      break;
                    }
                    if (e[n].type !== t[n].baseType) {
                      s.splice(a, 1);
                      break;
                    }
                  }
              }
            }
            if (1 === s.length && e && e.length !== s[0].inputs.length) {
              const t = e[e.length - 1];
              (null == t || Array.isArray(t) || 'object' != typeof t) &&
                s.splice(0, 1);
            }
            if (0 === s.length) return null;
            if (s.length > 1 && n) {
              const e = s.map((t) => JSON.stringify(t.format())).join(', ');
              (0, o.MR)(
                !1,
                `ambiguous function description (i.e. matches ${e})`,
                'key',
                t
              );
            }
            return s[0];
          }
          return this.#r.get(h.hc.from(t).format()) || null;
        }
        getFunctionName(t) {
          const e = this.#i(t, null, !1);
          return ((0, o.MR)(e, 'no matching function', 'key', t), e.name);
        }
        hasFunction(t) {
          return !!this.#i(t, null, !1);
        }
        getFunction(t, e) {
          return this.#i(t, e || null, !0);
        }
        forEachFunction(t) {
          const e = Array.from(this.#r.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#r.get(r), n);
          }
        }
        #a(t, e, n) {
          if ((0, c.Lo)(t)) {
            const e = t.toLowerCase();
            for (const t of this.#n.values()) if (e === t.topicHash) return t;
            return null;
          }
          if (-1 === t.indexOf('(')) {
            const s = [];
            for (const [e, n] of this.#n) e.split('(')[0] === t && s.push(n);
            if (e) {
              for (let t = s.length - 1; t >= 0; t--)
                s[t].inputs.length < e.length && s.splice(t, 1);
              for (let t = s.length - 1; t >= 0; t--) {
                const n = s[t].inputs;
                for (let i = 0; i < e.length; i++)
                  if (r.V.isTyped(e[i]) && e[i].type !== n[i].baseType) {
                    s.splice(t, 1);
                    break;
                  }
              }
            }
            if (0 === s.length) return null;
            if (s.length > 1 && n) {
              const e = s.map((t) => JSON.stringify(t.format())).join(', ');
              (0, o.MR)(
                !1,
                `ambiguous event description (i.e. matches ${e})`,
                'key',
                t
              );
            }
            return s[0];
          }
          return this.#n.get(h.Zp.from(t).format()) || null;
        }
        getEventName(t) {
          const e = this.#a(t, null, !1);
          return ((0, o.MR)(e, 'no matching event', 'key', t), e.name);
        }
        hasEvent(t) {
          return !!this.#a(t, null, !1);
        }
        getEvent(t, e) {
          return this.#a(t, e || null, !0);
        }
        forEachEvent(t) {
          const e = Array.from(this.#n.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#n.get(r), n);
          }
        }
        getError(t, e) {
          if ((0, c.Lo)(t)) {
            const e = t.toLowerCase();
            if (b[e]) return h.bp.from(b[e].signature);
            for (const t of this.#e.values()) if (e === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf('(')) {
            const e = [];
            for (const [n, r] of this.#e) n.split('(')[0] === t && e.push(r);
            if (0 === e.length)
              return 'Error' === t
                ? h.bp.from('error Error(string)')
                : 'Panic' === t
                  ? h.bp.from('error Panic(uint256)')
                  : null;
            if (e.length > 1) {
              const n = e.map((t) => JSON.stringify(t.format())).join(', ');
              (0, o.MR)(
                !1,
                `ambiguous error description (i.e. ${n})`,
                'name',
                t
              );
            }
            return e[0];
          }
          if ('Error(string)' === (t = h.bp.from(t).format()))
            return h.bp.from('error Error(string)');
          if ('Panic(uint256)' === t) return h.bp.from('error Panic(uint256)');
          return this.#e.get(t) || null;
        }
        forEachError(t) {
          const e = Array.from(this.#e.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#e.get(r), n);
          }
        }
        _decodeParams(t, e) {
          return this.#s.decode(t, e);
        }
        _encodeParams(t, e) {
          return this.#s.encode(t, e);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          if ('string' == typeof t) {
            const e = this.getError(t);
            ((0, o.MR)(e, 'unknown error', 'fragment', t), (t = e));
          }
          return (
            (0, o.MR)(
              (0, c.ZG)(e, 0, 4) === t.selector,
              `data signature does not match error ${t.name}.`,
              'data',
              e
            ),
            this._decodeParams(t.inputs, (0, c.ZG)(e, 4))
          );
        }
        encodeErrorResult(t, e) {
          if ('string' == typeof t) {
            const e = this.getError(t);
            ((0, o.MR)(e, 'unknown error', 'fragment', t), (t = e));
          }
          return (0, c.xW)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionData(t, e) {
          if ('string' == typeof t) {
            const e = this.getFunction(t);
            ((0, o.MR)(e, 'unknown function', 'fragment', t), (t = e));
          }
          return (
            (0, o.MR)(
              (0, c.ZG)(e, 0, 4) === t.selector,
              `data signature does not match function ${t.name}.`,
              'data',
              e
            ),
            this._decodeParams(t.inputs, (0, c.ZG)(e, 4))
          );
        }
        encodeFunctionData(t, e) {
          if ('string' == typeof t) {
            const e = this.getFunction(t);
            ((0, o.MR)(e, 'unknown function', 'fragment', t), (t = e));
          }
          return (0, c.xW)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionResult(t, e) {
          if ('string' == typeof t) {
            const e = this.getFunction(t);
            ((0, o.MR)(e, 'unknown function', 'fragment', t), (t = e));
          }
          let n = 'invalid length for result data';
          const r = (0, c.Lm)(e);
          if (r.length % 32 == 0)
            try {
              return this.#s.decode(t.outputs, r);
            } catch (s) {
              n = 'could not decode result data';
            }
          (0, o.vA)(!1, n, 'BAD_DATA', {
            value: (0, c.c$)(r),
            info: { method: t.name, signature: t.format() },
          });
        }
        makeError(t, e) {
          const n = (0, c.q5)(t, 'data'),
            r = l.y.getBuiltinCallException('call', e, n);
          if (
            r.message.startsWith('execution reverted (unknown custom error)')
          ) {
            const t = (0, c.c$)(n.slice(0, 4)),
              e = this.getError(t);
            if (e)
              try {
                const t = this.#s.decode(e.inputs, n.slice(4));
                ((r.revert = { name: e.name, signature: e.format(), args: t }),
                  (r.reason = r.revert.signature),
                  (r.message = `execution reverted: ${r.reason}`));
              } catch (i) {
                r.message =
                  'execution reverted (coult not decode custom error)';
              }
          }
          const s = this.parseTransaction(e);
          return (
            s &&
              (r.invocation = {
                method: s.name,
                signature: s.signature,
                args: s.args,
              }),
            r
          );
        }
        encodeFunctionResult(t, e) {
          if ('string' == typeof t) {
            const e = this.getFunction(t);
            ((0, o.MR)(e, 'unknown function', 'fragment', t), (t = e));
          }
          return (0, c.c$)(this.#s.encode(t.outputs, e || []));
        }
        encodeFilterTopics(t, e) {
          if ('string' == typeof t) {
            const e = this.getEvent(t);
            ((0, o.MR)(e, 'unknown event', 'eventFragment', t), (t = e));
          }
          (0, o.vA)(
            e.length <= t.inputs.length,
            `too many arguments for ${t.format()}`,
            'UNEXPECTED_ARGUMENT',
            { count: e.length, expectedCount: t.inputs.length }
          );
          const n = [];
          t.anonymous || n.push(t.topicHash);
          const r = (t, e) =>
            'string' === t.type
              ? (0, i.id)(e)
              : 'bytes' === t.type
                ? (0, s.S)((0, c.c$)(e))
                : ('bool' === t.type && 'boolean' == typeof e
                    ? (e = e ? '0x01' : '0x00')
                    : t.type.match(/^u?int/)
                      ? (e = (0, u.up)(e))
                      : t.type.match(/^bytes/)
                        ? (e = (0, c.X_)(e, 32))
                        : 'address' === t.type &&
                          this.#s.encode(['address'], [e]),
                  (0, c.nx)((0, c.c$)(e), 32));
          for (
            e.forEach((e, s) => {
              const i = t.inputs[s];
              i.indexed
                ? null == e
                  ? n.push(null)
                  : 'array' === i.baseType || 'tuple' === i.baseType
                    ? (0, o.MR)(
                        !1,
                        'filtering with tuples or arrays not supported',
                        'contract.' + i.name,
                        e
                      )
                    : Array.isArray(e)
                      ? n.push(e.map((t) => r(i, t)))
                      : n.push(r(i, e))
                : (0, o.MR)(
                    null == e,
                    'cannot filter non-indexed parameters; must be null',
                    'contract.' + i.name,
                    e
                  );
            });
            n.length && null === n[n.length - 1];

          )
            n.pop();
          return n;
        }
        encodeEventLog(t, e) {
          if ('string' == typeof t) {
            const e = this.getEvent(t);
            ((0, o.MR)(e, 'unknown event', 'eventFragment', t), (t = e));
          }
          const n = [],
            r = [],
            a = [];
          return (
            t.anonymous || n.push(t.topicHash),
            (0, o.MR)(
              e.length === t.inputs.length,
              'event arguments/values mismatch',
              'values',
              e
            ),
            t.inputs.forEach((t, o) => {
              const c = e[o];
              if (t.indexed)
                if ('string' === t.type) n.push((0, i.id)(c));
                else if ('bytes' === t.type) n.push((0, s.S)(c));
                else {
                  if ('tuple' === t.baseType || 'array' === t.baseType)
                    throw new Error('not implemented');
                  n.push(this.#s.encode([t.type], [c]));
                }
              else (r.push(t), a.push(c));
            }),
            { data: this.#s.encode(r, a), topics: n }
          );
        }
        decodeEventLog(t, e, n) {
          if ('string' == typeof t) {
            const e = this.getEvent(t);
            ((0, o.MR)(e, 'unknown event', 'eventFragment', t), (t = e));
          }
          if (null != n && !t.anonymous) {
            const e = t.topicHash;
            ((0, o.MR)(
              (0, c.Lo)(n[0], 32) && n[0].toLowerCase() === e,
              'fragment/topic mismatch',
              'topics[0]',
              n[0]
            ),
              (n = n.slice(1)));
          }
          const r = [],
            s = [],
            i = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? 'string' === t.type ||
                'bytes' === t.type ||
                'tuple' === t.baseType ||
                'array' === t.baseType
                ? (r.push(h.aX.from({ type: 'bytes32', name: t.name })),
                  i.push(!0))
                : (r.push(t), i.push(!1))
              : (s.push(t), i.push(!1));
          });
          const a = null != n ? this.#s.decode(r, (0, c.xW)(n)) : null,
            u = this.#s.decode(s, e, !0),
            l = [],
            p = [];
          let d = 0,
            g = 0;
          return (
            t.inputs.forEach((t, e) => {
              let n = null;
              if (t.indexed)
                if (null == a) n = new y(null);
                else if (i[e]) n = new y(a[g++]);
                else
                  try {
                    n = a[g++];
                  } catch (r) {
                    n = r;
                  }
              else
                try {
                  n = u[d++];
                } catch (r) {
                  n = r;
                }
              (l.push(n), p.push(t.name || null));
            }),
            f.Q7.fromItems(l, p)
          );
        }
        parseTransaction(t) {
          const e = (0, c.q5)(t.data, 'tx.data'),
            n = (0, u.Ab)(null != t.value ? t.value : 0, 'tx.value'),
            r = this.getFunction((0, c.c$)(e.slice(0, 4)));
          if (!r) return null;
          const s = this.#s.decode(r.inputs, e.slice(4));
          return new d(r, r.selector, s, n);
        }
        parseCallResult(t) {
          throw new Error('@TODO');
        }
        parseLog(t) {
          const e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new p(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
        }
        parseError(t) {
          const e = (0, c.c$)(t),
            n = this.getError((0, c.ZG)(e, 0, 4));
          if (!n) return null;
          const r = this.#s.decode(n.inputs, (0, c.ZG)(e, 4));
          return new g(n, n.selector, r);
        }
        static from(t) {
          return t instanceof w
            ? t
            : 'string' == typeof t
              ? new w(JSON.parse(t))
              : 'function' == typeof t.formatJson
                ? new w(t.formatJson())
                : 'function' == typeof t.format
                  ? new w(t.format('json'))
                  : new w(t);
        }
      }
      var v = n(5357),
        E = n(8931),
        R = n(2598);
      class x extends E.tG {
        interface;
        fragment;
        args;
        constructor(t, e, n) {
          super(t, t.provider);
          const r = e.decodeEventLog(n, t.data, t.topics);
          (0, a.n)(this, { args: r, fragment: n, interface: e });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
      class A extends E.tG {
        error;
        constructor(t, e) {
          (super(t, t.provider), (0, a.n)(this, { error: e }));
        }
      }
      class k extends E.z5 {
        #o;
        constructor(t, e, n) {
          (super(n, e), (this.#o = t));
        }
        get logs() {
          return super.logs.map((t) => {
            const e = t.topics.length ? this.#o.getEvent(t.topics[0]) : null;
            if (e)
              try {
                return new x(t, this.#o, e);
              } catch (n) {
                return new A(t, n);
              }
            return t;
          });
        }
      }
      class O extends E.uI {
        #o;
        constructor(t, e, n) {
          (super(n, e), (this.#o = t));
        }
        async wait(t, e) {
          const n = await super.wait(t, e);
          return null == n ? null : new k(this.#o, this.provider, n);
        }
      }
      class P extends R.z {
        log;
        constructor(t, e, n, r) {
          (super(t, e, n), (0, a.n)(this, { log: r }));
        }
        async getBlock() {
          return await this.log.getBlock();
        }
        async getTransaction() {
          return await this.log.getTransaction();
        }
        async getTransactionReceipt() {
          return await this.log.getTransactionReceipt();
        }
      }
      class N extends P {
        constructor(t, e, n, r, s) {
          super(t, e, n, new x(s, t.interface, r));
          const i = t.interface.decodeEventLog(
            r,
            this.log.data,
            this.log.topics
          );
          (0, a.n)(this, { args: i, fragment: r });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
      const T = BigInt(0);
      function S(t) {
        return t && 'function' == typeof t.call;
      }
      function _(t) {
        return t && 'function' == typeof t.estimateGas;
      }
      function M(t) {
        return t && 'function' == typeof t.resolveName;
      }
      function I(t) {
        return t && 'function' == typeof t.sendTransaction;
      }
      function $(t) {
        if (null != t) {
          if (M(t)) return t;
          if (t.provider) return t.provider;
        }
      }
      class C {
        #c;
        fragment;
        constructor(t, e, n) {
          if (((0, a.n)(this, { fragment: e }), e.inputs.length < n.length))
            throw new Error('too many arguments');
          const r = j(t.runner, 'resolveName'),
            s = M(r) ? r : null;
          this.#c = (async function () {
            const r = await Promise.all(
              e.inputs.map((t, e) =>
                null == n[e]
                  ? null
                  : t.walkAsync(n[e], (t, e) =>
                      'address' === t
                        ? Array.isArray(e)
                          ? Promise.all(e.map((t) => (0, v.tG)(t, s)))
                          : (0, v.tG)(e, s)
                        : e
                    )
              )
            );
            return t.interface.encodeFilterTopics(e, r);
          })();
        }
        getTopicFilter() {
          return this.#c;
        }
      }
      function j(t, e) {
        return null == t
          ? null
          : 'function' == typeof t[e]
            ? t
            : t.provider && 'function' == typeof t.provider[e]
              ? t.provider
              : null;
      }
      function U(t) {
        return null == t ? null : t.provider || null;
      }
      async function F(t, e) {
        const n = r.V.dereference(t, 'overrides');
        (0, o.MR)(
          'object' == typeof n,
          'invalid overrides parameter',
          'overrides',
          t
        );
        const s = (0, E.VS)(n);
        return (
          (0, o.MR)(
            null == s.to || (e || []).indexOf('to') >= 0,
            'cannot override to',
            'overrides.to',
            s.to
          ),
          (0, o.MR)(
            null == s.data || (e || []).indexOf('data') >= 0,
            'cannot override data',
            'overrides.data',
            s.data
          ),
          s.from && (s.from = s.from),
          s
        );
      }
      function L(t) {
        const e = async function (e) {
            const n = await F(e, ['data']);
            ((n.to = await t.getAddress()),
              n.from && (n.from = await (0, v.tG)(n.from, $(t.runner))));
            const r = t.interface,
              s = (0, u.Ab)(n.value || T, 'overrides.value') === T,
              i = '0x' === (n.data || '0x');
            (!r.fallback ||
              r.fallback.payable ||
              !r.receive ||
              i ||
              s ||
              (0, o.MR)(
                !1,
                'cannot send data to receive or send value to non-payable fallback',
                'overrides',
                e
              ),
              (0, o.MR)(
                r.fallback || i,
                'cannot send data to receive-only contract',
                'overrides.data',
                n.data
              ));
            const a = r.receive || (r.fallback && r.fallback.payable);
            return (
              (0, o.MR)(
                a || s,
                'cannot send value to non-payable fallback',
                'overrides.value',
                n.value
              ),
              (0, o.MR)(
                r.fallback || i,
                'cannot send data to receive-only contract',
                'overrides.data',
                n.data
              ),
              n
            );
          },
          n = async function (n) {
            const r = t.runner;
            (0, o.vA)(
              I(r),
              'contract runner does not support sending transactions',
              'UNSUPPORTED_OPERATION',
              { operation: 'sendTransaction' }
            );
            const s = await r.sendTransaction(await e(n)),
              i = U(t.runner);
            return new O(t.interface, i, s);
          },
          r = async (t) => await n(t);
        return (
          (0, a.n)(r, {
            _contract: t,
            estimateGas: async function (n) {
              const r = j(t.runner, 'estimateGas');
              return (
                (0, o.vA)(
                  _(r),
                  'contract runner does not support gas estimation',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'estimateGas' }
                ),
                await r.estimateGas(await e(n))
              );
            },
            populateTransaction: e,
            send: n,
            staticCall: async function (n) {
              const r = j(t.runner, 'call');
              (0, o.vA)(
                S(r),
                'contract runner does not support calling',
                'UNSUPPORTED_OPERATION',
                { operation: 'call' }
              );
              const s = await e(n);
              try {
                return await r.call(s);
              } catch (i) {
                if ((0, o.E)(i) && i.data)
                  throw t.interface.makeError(i.data, s);
                throw i;
              }
            },
          }),
          r
        );
      }
      const V = Symbol.for('_ethersInternal_contract'),
        B = new WeakMap();
      function D(t) {
        return B.get(t[V]);
      }
      async function z(t, e) {
        let n,
          r = null;
        if (Array.isArray(e)) {
          const r = function (e) {
            if ((0, c.Lo)(e, 32)) return e;
            const n = t.interface.getEvent(e);
            return ((0, o.MR)(n, 'unknown fragment', 'name', e), n.topicHash);
          };
          n = e.map((t) =>
            null == t ? null : Array.isArray(t) ? t.map(r) : r(t)
          );
        } else
          '*' === e
            ? (n = [null])
            : 'string' == typeof e
              ? (0, c.Lo)(e, 32)
                ? (n = [e])
                : ((r = t.interface.getEvent(e)),
                  (0, o.MR)(r, 'unknown fragment', 'event', e),
                  (n = [r.topicHash]))
              : (s = e) &&
                  'object' == typeof s &&
                  'getTopicFilter' in s &&
                  'function' == typeof s.getTopicFilter &&
                  s.fragment
                ? (n = await e.getTopicFilter())
                : 'fragment' in e
                  ? ((r = e.fragment), (n = [r.topicHash]))
                  : (0, o.MR)(!1, 'unknown event name', 'event', e);
        var s;
        return (
          (n = n.map((t) => {
            if (null == t) return null;
            if (Array.isArray(t)) {
              const e = Array.from(
                new Set(t.map((t) => t.toLowerCase())).values()
              );
              return 1 === e.length ? e[0] : (e.sort(), e);
            }
            return t.toLowerCase();
          })),
          {
            fragment: r,
            tag: n
              .map((t) =>
                null == t ? 'null' : Array.isArray(t) ? t.join('|') : t
              )
              .join('&'),
            topics: n,
          }
        );
      }
      async function K(t, e) {
        const { subs: n } = D(t);
        return n.get((await z(t, e)).tag) || null;
      }
      async function J(t, e, n) {
        const r = U(t.runner);
        (0, o.vA)(
          r,
          'contract runner does not support subscribing',
          'UNSUPPORTED_OPERATION',
          { operation: e }
        );
        const { fragment: s, tag: i, topics: a } = await z(t, n),
          { addr: c, subs: u } = D(t);
        let l = u.get(i);
        if (!l) {
          const e = { address: c || t, topics: a },
            o = (e) => {
              let r = s;
              if (null == r)
                try {
                  r = t.interface.getEvent(e.topics[0]);
                } catch (i) {}
              if (r) {
                const i = r,
                  a = s ? t.interface.decodeEventLog(s, e.data, e.topics) : [];
                W(t, n, a, (r) => new N(t, r, n, i, e));
              } else W(t, n, [], (r) => new P(t, r, n, e));
            };
          let f = [];
          ((l = {
            tag: i,
            listeners: [],
            start: () => {
              f.length || f.push(r.on(e, o));
            },
            stop: async () => {
              if (0 == f.length) return;
              let t = f;
              ((f = []), await Promise.all(t), r.off(e, o));
            },
          }),
            u.set(i, l));
        }
        return l;
      }
      let G = Promise.resolve();
      async function W(t, e, n, r) {
        try {
          await G;
        } catch (i) {}
        const s = (async function (t, e, n, r) {
          await G;
          const s = await K(t, e);
          if (!s) return !1;
          const a = s.listeners.length;
          return (
            (s.listeners = s.listeners.filter(({ listener: e, once: s }) => {
              const a = Array.from(n);
              r && a.push(r(s ? null : e));
              try {
                e.call(t, ...a);
              } catch (i) {}
              return !s;
            })),
            0 === s.listeners.length && (s.stop(), D(t).subs.delete(s.tag)),
            a > 0
          );
        })(t, e, n, r);
        return ((G = s), await s);
      }
      const Z = ['then'];
      class q {
        target;
        interface;
        runner;
        filters;
        [V];
        fallback;
        constructor(t, e, n, r) {
          ((0, o.MR)(
            'string' == typeof t || (0, v.$C)(t),
            'invalid value for Contract target',
            'target',
            t
          ),
            null == n && (n = null));
          const s = w.from(e);
          let i;
          ((0, a.n)(this, { target: t, runner: n, interface: s }),
            Object.defineProperty(this, V, { value: {} }));
          let u = null,
            l = null;
          if (r) {
            const t = U(n);
            l = new O(this.interface, t, r);
          }
          let f = new Map();
          if ('string' == typeof t)
            if ((0, c.Lo)(t)) ((u = t), (i = Promise.resolve(t)));
            else {
              const e = j(n, 'resolveName');
              if (!M(e))
                throw (0, o.xz)(
                  'contract runner does not support name resolution',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'resolveName' }
                );
              i = e.resolveName(t).then((e) => {
                if (null == e)
                  throw (0, o.xz)(
                    'an ENS name used for a contract target must be correctly configured',
                    'UNCONFIGURED_NAME',
                    { value: t }
                  );
                return ((D(this).addr = e), e);
              });
            }
          else
            i = t.getAddress().then((t) => {
              if (null == t) throw new Error('TODO');
              return ((D(this).addr = t), t);
            });
          var h;
          ((h = { addrPromise: i, addr: u, deployTx: l, subs: f }),
            B.set(this[V], h));
          const p = new Proxy(
            {},
            {
              get: (t, e, n) => {
                if ('symbol' == typeof e || Z.indexOf(e) >= 0)
                  return Reflect.get(t, e, n);
                try {
                  return this.getEvent(e);
                } catch (r) {
                  if (!(0, o.bJ)(r, 'INVALID_ARGUMENT') || 'key' !== r.argument)
                    throw r;
                }
              },
              has: (t, e) =>
                Z.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : Reflect.has(t, e) || this.interface.hasEvent(String(e)),
            }
          );
          return (
            (0, a.n)(this, { filters: p }),
            (0, a.n)(this, {
              fallback: s.receive || s.fallback ? L(this) : null,
            }),
            new Proxy(this, {
              get: (t, e, n) => {
                if ('symbol' == typeof e || e in t || Z.indexOf(e) >= 0)
                  return Reflect.get(t, e, n);
                try {
                  return t.getFunction(e);
                } catch (r) {
                  if (!(0, o.bJ)(r, 'INVALID_ARGUMENT') || 'key' !== r.argument)
                    throw r;
                }
              },
              has: (t, e) =>
                'symbol' == typeof e || e in t || Z.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : t.interface.hasFunction(e),
            })
          );
        }
        connect(t) {
          return new q(this.target, this.interface, t);
        }
        attach(t) {
          return new q(t, this.interface, this.runner);
        }
        async getAddress() {
          return await D(this).addrPromise;
        }
        async getDeployedCode() {
          const t = U(this.runner);
          (0, o.vA)(
            t,
            'runner does not support .provider',
            'UNSUPPORTED_OPERATION',
            { operation: 'getDeployedCode' }
          );
          const e = await t.getCode(await this.getAddress());
          return '0x' === e ? null : e;
        }
        async waitForDeployment() {
          const t = this.deploymentTransaction();
          if (t) return (await t.wait(), this);
          if (null != (await this.getDeployedCode())) return this;
          const e = U(this.runner);
          return (
            (0, o.vA)(
              null != e,
              'contract runner does not support .provider',
              'UNSUPPORTED_OPERATION',
              { operation: 'waitForDeployment' }
            ),
            new Promise((t, n) => {
              const r = async () => {
                try {
                  if (null != (await this.getDeployedCode())) return t(this);
                  e.once('block', r);
                } catch (s) {
                  n(s);
                }
              };
              r();
            })
          );
        }
        deploymentTransaction() {
          return D(this).deployTx;
        }
        getFunction(t) {
          return (
            'string' != typeof t && (t = t.format()),
            (function (t, e) {
              const n = function (...n) {
                  const r = t.interface.getFunction(e, n);
                  return (
                    (0, o.vA)(
                      r,
                      'no matching fragment',
                      'UNSUPPORTED_OPERATION',
                      { operation: 'fragment', info: { key: e, args: n } }
                    ),
                    r
                  );
                },
                s = async function (...e) {
                  const s = n(...e);
                  let i = {};
                  if (
                    (s.inputs.length + 1 === e.length &&
                      ((i = await F(e.pop())),
                      i.from &&
                        (i.from = await (0, v.tG)(i.from, $(t.runner)))),
                    s.inputs.length !== e.length)
                  )
                    throw new Error(
                      "internal error: fragment inputs doesn't match arguments; should not happen"
                    );
                  const o = await (async function (t, e, n) {
                    const s = j(t, 'resolveName'),
                      i = M(s) ? s : null;
                    return await Promise.all(
                      e.map((t, e) =>
                        t.walkAsync(
                          n[e],
                          (t, e) => (
                            (e = r.V.dereference(e, t)),
                            'address' === t ? (0, v.tG)(e, i) : e
                          )
                        )
                      )
                    );
                  })(t.runner, s.inputs, e);
                  return Object.assign(
                    {},
                    i,
                    await (0, a.k)({
                      to: t.getAddress(),
                      data: t.interface.encodeFunctionData(s, o),
                    })
                  );
                },
                i = async function (...t) {
                  const e = await u(...t);
                  return 1 === e.length ? e[0] : e;
                },
                c = async function (...e) {
                  const n = t.runner;
                  (0, o.vA)(
                    I(n),
                    'contract runner does not support sending transactions',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'sendTransaction' }
                  );
                  const r = await n.sendTransaction(await s(...e)),
                    i = U(t.runner);
                  return new O(t.interface, i, r);
                },
                u = async function (...e) {
                  const r = j(t.runner, 'call');
                  (0, o.vA)(
                    S(r),
                    'contract runner does not support calling',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'call' }
                  );
                  const i = await s(...e);
                  let a = '0x';
                  try {
                    a = await r.call(i);
                  } catch (u) {
                    if ((0, o.E)(u) && u.data)
                      throw t.interface.makeError(u.data, i);
                    throw u;
                  }
                  const c = n(...e);
                  return t.interface.decodeFunctionResult(c, a);
                },
                l = async (...t) =>
                  n(...t).constant ? await i(...t) : await c(...t);
              return (
                (0, a.n)(l, {
                  name: t.interface.getFunctionName(e),
                  _contract: t,
                  _key: e,
                  getFragment: n,
                  estimateGas: async function (...e) {
                    const n = j(t.runner, 'estimateGas');
                    return (
                      (0, o.vA)(
                        _(n),
                        'contract runner does not support gas estimation',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'estimateGas' }
                      ),
                      await n.estimateGas(await s(...e))
                    );
                  },
                  populateTransaction: s,
                  send: c,
                  staticCall: i,
                  staticCallResult: u,
                }),
                Object.defineProperty(l, 'fragment', {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    const n = t.interface.getFunction(e);
                    return (
                      (0, o.vA)(
                        n,
                        'no matching fragment',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'fragment', info: { key: e } }
                      ),
                      n
                    );
                  },
                }),
                l
              );
            })(this, t)
          );
        }
        getEvent(t) {
          return (
            'string' != typeof t && (t = t.format()),
            (function (t, e) {
              const n = function (...n) {
                  const r = t.interface.getEvent(e, n);
                  return (
                    (0, o.vA)(
                      r,
                      'no matching fragment',
                      'UNSUPPORTED_OPERATION',
                      { operation: 'fragment', info: { key: e, args: n } }
                    ),
                    r
                  );
                },
                r = function (...e) {
                  return new C(t, n(...e), e);
                };
              return (
                (0, a.n)(r, {
                  name: t.interface.getEventName(e),
                  _contract: t,
                  _key: e,
                  getFragment: n,
                }),
                Object.defineProperty(r, 'fragment', {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    const n = t.interface.getEvent(e);
                    return (
                      (0, o.vA)(
                        n,
                        'no matching fragment',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'fragment', info: { key: e } }
                      ),
                      n
                    );
                  },
                }),
                r
              );
            })(this, t)
          );
        }
        async queryTransaction(t) {
          throw new Error('@TODO');
        }
        async queryFilter(t, e, n) {
          (null == e && (e = 0), null == n && (n = 'latest'));
          const { addr: r, addrPromise: s } = D(this),
            i = r || (await s),
            { fragment: a, topics: c } = await z(this, t),
            u = { address: i, topics: c, fromBlock: e, toBlock: n },
            l = U(this.runner);
          return (
            (0, o.vA)(
              l,
              'contract runner does not have a provider',
              'UNSUPPORTED_OPERATION',
              { operation: 'queryFilter' }
            ),
            (await l.getLogs(u)).map((t) => {
              let e = a;
              if (null == e)
                try {
                  e = this.interface.getEvent(t.topics[0]);
                } catch (n) {}
              if (e)
                try {
                  return new x(t, this.interface, e);
                } catch (n) {
                  return new A(t, n);
                }
              return new E.tG(t, l);
            })
          );
        }
        async on(t, e) {
          const n = await J(this, 'on', t);
          return (n.listeners.push({ listener: e, once: !1 }), n.start(), this);
        }
        async once(t, e) {
          const n = await J(this, 'once', t);
          return (n.listeners.push({ listener: e, once: !0 }), n.start(), this);
        }
        async emit(t, ...e) {
          return await W(this, t, e, null);
        }
        async listenerCount(t) {
          if (t) {
            const e = await K(this, t);
            return e ? e.listeners.length : 0;
          }
          const { subs: e } = D(this);
          let n = 0;
          for (const { listeners: r } of e.values()) n += r.length;
          return n;
        }
        async listeners(t) {
          if (t) {
            const e = await K(this, t);
            return e ? e.listeners.map(({ listener: t }) => t) : [];
          }
          const { subs: e } = D(this);
          let n = [];
          for (const { listeners: r } of e.values())
            n = n.concat(r.map(({ listener: t }) => t));
          return n;
        }
        async off(t, e) {
          const n = await K(this, t);
          if (!n) return this;
          if (e) {
            const t = n.listeners.map(({ listener: t }) => t).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1);
          }
          return (
            (null != e && 0 !== n.listeners.length) ||
              (n.stop(), D(this).subs.delete(n.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            const e = await K(this, t);
            if (!e) return this;
            (e.stop(), D(this).subs.delete(e.tag));
          } else {
            const { subs: t } = D(this);
            for (const { tag: e, stop: n } of t.values()) (n(), t.delete(e));
          }
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return await this.off(t, e);
        }
        static buildClass(t) {
          return class extends q {
            constructor(e, n = null) {
              super(e, t, n);
            }
          };
        }
        static from(t, e, n) {
          return (null == n && (n = null), new this(t, e, n));
        }
      }
      class H extends (function () {
        return q;
      })() {}
    },
    4684: (t, e, n) => {
      n.d(e, { V: () => u });
      var r = n(536),
        s = n(8466);
      const i = {};
      function a(t, e) {
        let n = !1;
        return (
          e < 0 && ((n = !0), (e *= -1)),
          new u(i, `${n ? '' : 'u'}int${e}`, t, { signed: n, width: e })
        );
      }
      function o(t, e) {
        return new u(i, `bytes${e || ''}`, t, { size: e });
      }
      const c = Symbol.for('_ethers_typed');
      class u {
        type;
        value;
        #u;
        _typedSymbol;
        constructor(t, e, n, a) {
          (null == a && (a = null),
            (0, r.gk)(i, t, 'Typed'),
            (0, s.n)(this, { _typedSymbol: c, type: e, value: n }),
            (this.#u = a),
            this.format());
        }
        format() {
          if ('array' === this.type) throw new Error('');
          if ('dynamicArray' === this.type) throw new Error('');
          return 'tuple' === this.type
            ? `tuple(${this.value.map((t) => t.format()).join(',')})`
            : this.type;
        }
        defaultValue() {
          return 0;
        }
        minValue() {
          return 0;
        }
        maxValue() {
          return 0;
        }
        isBigInt() {
          return !!this.type.match(/^u?int[0-9]+$/);
        }
        isData() {
          return this.type.startsWith('bytes');
        }
        isString() {
          return 'string' === this.type;
        }
        get tupleName() {
          if ('tuple' !== this.type) throw TypeError('not a tuple');
          return this.#u;
        }
        get arrayLength() {
          if ('array' !== this.type) throw TypeError('not an array');
          return !0 === this.#u
            ? -1
            : !1 === this.#u
              ? this.value.length
              : null;
        }
        static from(t, e) {
          return new u(i, t, e);
        }
        static uint8(t) {
          return a(t, 8);
        }
        static uint16(t) {
          return a(t, 16);
        }
        static uint24(t) {
          return a(t, 24);
        }
        static uint32(t) {
          return a(t, 32);
        }
        static uint40(t) {
          return a(t, 40);
        }
        static uint48(t) {
          return a(t, 48);
        }
        static uint56(t) {
          return a(t, 56);
        }
        static uint64(t) {
          return a(t, 64);
        }
        static uint72(t) {
          return a(t, 72);
        }
        static uint80(t) {
          return a(t, 80);
        }
        static uint88(t) {
          return a(t, 88);
        }
        static uint96(t) {
          return a(t, 96);
        }
        static uint104(t) {
          return a(t, 104);
        }
        static uint112(t) {
          return a(t, 112);
        }
        static uint120(t) {
          return a(t, 120);
        }
        static uint128(t) {
          return a(t, 128);
        }
        static uint136(t) {
          return a(t, 136);
        }
        static uint144(t) {
          return a(t, 144);
        }
        static uint152(t) {
          return a(t, 152);
        }
        static uint160(t) {
          return a(t, 160);
        }
        static uint168(t) {
          return a(t, 168);
        }
        static uint176(t) {
          return a(t, 176);
        }
        static uint184(t) {
          return a(t, 184);
        }
        static uint192(t) {
          return a(t, 192);
        }
        static uint200(t) {
          return a(t, 200);
        }
        static uint208(t) {
          return a(t, 208);
        }
        static uint216(t) {
          return a(t, 216);
        }
        static uint224(t) {
          return a(t, 224);
        }
        static uint232(t) {
          return a(t, 232);
        }
        static uint240(t) {
          return a(t, 240);
        }
        static uint248(t) {
          return a(t, 248);
        }
        static uint256(t) {
          return a(t, 256);
        }
        static uint(t) {
          return a(t, 256);
        }
        static int8(t) {
          return a(t, -8);
        }
        static int16(t) {
          return a(t, -16);
        }
        static int24(t) {
          return a(t, -24);
        }
        static int32(t) {
          return a(t, -32);
        }
        static int40(t) {
          return a(t, -40);
        }
        static int48(t) {
          return a(t, -48);
        }
        static int56(t) {
          return a(t, -56);
        }
        static int64(t) {
          return a(t, -64);
        }
        static int72(t) {
          return a(t, -72);
        }
        static int80(t) {
          return a(t, -80);
        }
        static int88(t) {
          return a(t, -88);
        }
        static int96(t) {
          return a(t, -96);
        }
        static int104(t) {
          return a(t, -104);
        }
        static int112(t) {
          return a(t, -112);
        }
        static int120(t) {
          return a(t, -120);
        }
        static int128(t) {
          return a(t, -128);
        }
        static int136(t) {
          return a(t, -136);
        }
        static int144(t) {
          return a(t, -144);
        }
        static int152(t) {
          return a(t, -152);
        }
        static int160(t) {
          return a(t, -160);
        }
        static int168(t) {
          return a(t, -168);
        }
        static int176(t) {
          return a(t, -176);
        }
        static int184(t) {
          return a(t, -184);
        }
        static int192(t) {
          return a(t, -192);
        }
        static int200(t) {
          return a(t, -200);
        }
        static int208(t) {
          return a(t, -208);
        }
        static int216(t) {
          return a(t, -216);
        }
        static int224(t) {
          return a(t, -224);
        }
        static int232(t) {
          return a(t, -232);
        }
        static int240(t) {
          return a(t, -240);
        }
        static int248(t) {
          return a(t, -248);
        }
        static int256(t) {
          return a(t, -256);
        }
        static int(t) {
          return a(t, -256);
        }
        static bytes1(t) {
          return o(t, 1);
        }
        static bytes2(t) {
          return o(t, 2);
        }
        static bytes3(t) {
          return o(t, 3);
        }
        static bytes4(t) {
          return o(t, 4);
        }
        static bytes5(t) {
          return o(t, 5);
        }
        static bytes6(t) {
          return o(t, 6);
        }
        static bytes7(t) {
          return o(t, 7);
        }
        static bytes8(t) {
          return o(t, 8);
        }
        static bytes9(t) {
          return o(t, 9);
        }
        static bytes10(t) {
          return o(t, 10);
        }
        static bytes11(t) {
          return o(t, 11);
        }
        static bytes12(t) {
          return o(t, 12);
        }
        static bytes13(t) {
          return o(t, 13);
        }
        static bytes14(t) {
          return o(t, 14);
        }
        static bytes15(t) {
          return o(t, 15);
        }
        static bytes16(t) {
          return o(t, 16);
        }
        static bytes17(t) {
          return o(t, 17);
        }
        static bytes18(t) {
          return o(t, 18);
        }
        static bytes19(t) {
          return o(t, 19);
        }
        static bytes20(t) {
          return o(t, 20);
        }
        static bytes21(t) {
          return o(t, 21);
        }
        static bytes22(t) {
          return o(t, 22);
        }
        static bytes23(t) {
          return o(t, 23);
        }
        static bytes24(t) {
          return o(t, 24);
        }
        static bytes25(t) {
          return o(t, 25);
        }
        static bytes26(t) {
          return o(t, 26);
        }
        static bytes27(t) {
          return o(t, 27);
        }
        static bytes28(t) {
          return o(t, 28);
        }
        static bytes29(t) {
          return o(t, 29);
        }
        static bytes30(t) {
          return o(t, 30);
        }
        static bytes31(t) {
          return o(t, 31);
        }
        static bytes32(t) {
          return o(t, 32);
        }
        static address(t) {
          return new u(i, 'address', t);
        }
        static bool(t) {
          return new u(i, 'bool', !!t);
        }
        static bytes(t) {
          return new u(i, 'bytes', t);
        }
        static string(t) {
          return new u(i, 'string', t);
        }
        static array(t, e) {
          throw new Error('not implemented yet');
        }
        static tuple(t, e) {
          throw new Error('not implemented yet');
        }
        static overrides(t) {
          return new u(i, 'overrides', Object.assign({}, t));
        }
        static isTyped(t) {
          return (
            t &&
            'object' == typeof t &&
            '_typedSymbol' in t &&
            t._typedSymbol === c
          );
        }
        static dereference(t, e) {
          if (u.isTyped(t)) {
            if (t.type !== e)
              throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
            return t.value;
          }
          return t;
        }
      }
    },
    4793: (t, e, n) => {
      n.d(e, {
        FK: () => z,
        Pw: () => Z,
        Zp: () => W,
        aX: () => D,
        bp: () => G,
        hc: () => H,
      });
      var r = n(536),
        s = n(8848),
        i = n(8466),
        a = n(6637);
      function o(t) {
        const e = new Set();
        return (t.forEach((t) => e.add(t)), Object.freeze(e));
      }
      const c = o('external public payable override'.split(' ')),
        u =
          'constant external internal payable private public pure view override',
        l = o(u.split(' ')),
        f = 'constructor error event fallback function receive struct',
        h = o(f.split(' ')),
        p = 'calldata memory storage payable indexed',
        d = o(p.split(' ')),
        g = o([f, p, 'tuple returns', u].join(' ').split(' ')),
        y = {
          '(': 'OPEN_PAREN',
          ')': 'CLOSE_PAREN',
          '[': 'OPEN_BRACKET',
          ']': 'CLOSE_BRACKET',
          ',': 'COMMA',
          '@': 'AT',
        },
        m = new RegExp('^(\\s*)'),
        b = new RegExp('^([0-9]+)'),
        w = new RegExp('^([a-zA-Z$_][a-zA-Z0-9$_]*)'),
        v = new RegExp('^([a-zA-Z$_][a-zA-Z0-9$_]*)$'),
        E = new RegExp('^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$');
      class R {
        #l;
        #f;
        get offset() {
          return this.#l;
        }
        get length() {
          return this.#f.length - this.#l;
        }
        constructor(t) {
          ((this.#l = 0), (this.#f = t.slice()));
        }
        clone() {
          return new R(this.#f);
        }
        reset() {
          this.#l = 0;
        }
        #h(t = 0, e = 0) {
          return new R(
            this.#f
              .slice(t, e)
              .map((e) =>
                Object.freeze(
                  Object.assign({}, e, {
                    match: e.match - t,
                    linkBack: e.linkBack - t,
                    linkNext: e.linkNext - t,
                  })
                )
              )
          );
        }
        popKeyword(t) {
          const e = this.peek();
          if ('KEYWORD' !== e.type || !t.has(e.text))
            throw new Error(`expected keyword ${e.text}`);
          return this.pop().text;
        }
        popType(t) {
          if (this.peek().type !== t) {
            const e = this.peek();
            throw new Error(
              `expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`
            );
          }
          return this.pop().text;
        }
        popParen() {
          const t = this.peek();
          if ('OPEN_PAREN' !== t.type) throw new Error('bad start');
          const e = this.#h(this.#l + 1, t.match + 1);
          return ((this.#l = t.match + 1), e);
        }
        popParams() {
          const t = this.peek();
          if ('OPEN_PAREN' !== t.type) throw new Error('bad start');
          const e = [];
          for (; this.#l < t.match - 1; ) {
            const t = this.peek().linkNext;
            (e.push(this.#h(this.#l + 1, t)), (this.#l = t));
          }
          return ((this.#l = t.match + 1), e);
        }
        peek() {
          if (this.#l >= this.#f.length) throw new Error('out-of-bounds');
          return this.#f[this.#l];
        }
        peekKeyword(t) {
          const e = this.peekType('KEYWORD');
          return null != e && t.has(e) ? e : null;
        }
        peekType(t) {
          if (0 === this.length) return null;
          const e = this.peek();
          return e.type === t ? e.text : null;
        }
        pop() {
          const t = this.peek();
          return (this.#l++, t);
        }
        toString() {
          const t = [];
          for (let e = this.#l; e < this.#f.length; e++) {
            const n = this.#f[e];
            t.push(`${n.type}:${n.text}`);
          }
          return `<TokenString ${t.join(' ')}>`;
        }
      }
      function x(t) {
        const e = [],
          n = (e) => {
            const n = a < t.length ? JSON.stringify(t[a]) : '$EOI';
            throw new Error(`invalid token ${n} at ${a}: ${e}`);
          };
        let r = [],
          i = [],
          a = 0;
        for (; a < t.length; ) {
          let o = t.substring(a),
            c = o.match(m);
          c && ((a += c[1].length), (o = t.substring(a)));
          const u = {
            depth: r.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: '',
            text: '',
            offset: a,
            value: -1,
          };
          e.push(u);
          let l = y[o[0]] || '';
          if (l) {
            if (((u.type = l), (u.text = o[0]), a++, 'OPEN_PAREN' === l))
              (r.push(e.length - 1), i.push(e.length - 1));
            else if ('CLOSE_PAREN' == l)
              (0 === r.length && n('no matching open bracket'),
                (u.match = r.pop()),
                (e[u.match].match = e.length - 1),
                u.depth--,
                (u.linkBack = i.pop()),
                (e[u.linkBack].linkNext = e.length - 1));
            else if ('COMMA' === l)
              ((u.linkBack = i.pop()),
                (e[u.linkBack].linkNext = e.length - 1),
                i.push(e.length - 1));
            else if ('OPEN_BRACKET' === l) u.type = 'BRACKET';
            else if ('CLOSE_BRACKET' === l) {
              let t = e.pop().text;
              if (e.length > 0 && 'NUMBER' === e[e.length - 1].type) {
                const n = e.pop().text;
                ((t = n + t), (e[e.length - 1].value = (0, s.WZ)(n)));
              }
              if (0 === e.length || 'BRACKET' !== e[e.length - 1].type)
                throw new Error('missing opening bracket');
              e[e.length - 1].text += t;
            }
          } else if (((c = o.match(w)), c)) {
            if (((u.text = c[1]), (a += u.text.length), g.has(u.text))) {
              u.type = 'KEYWORD';
              continue;
            }
            if (u.text.match(E)) {
              u.type = 'TYPE';
              continue;
            }
            u.type = 'ID';
          } else {
            if (((c = o.match(b)), !c))
              throw new Error(
                `unexpected token ${JSON.stringify(o[0])} at position ${a}`
              );
            ((u.text = c[1]), (u.type = 'NUMBER'), (a += u.text.length));
          }
        }
        return new R(e.map((t) => Object.freeze(t)));
      }
      function A(t, e) {
        let n = [];
        for (const r in e.keys()) t.has(r) && n.push(r);
        if (n.length > 1) throw new Error(`conflicting types: ${n.join(', ')}`);
      }
      function k(t, e) {
        if (e.peekKeyword(h)) {
          const n = e.pop().text;
          if (n !== t) throw new Error(`expected ${t}, got ${n}`);
        }
        return e.popType('ID');
      }
      function O(t, e) {
        const n = new Set();
        for (;;) {
          const r = t.peekType('KEYWORD');
          if (null == r || (e && !e.has(r))) break;
          if ((t.pop(), n.has(r)))
            throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
          n.add(r);
        }
        return Object.freeze(n);
      }
      function P(t) {
        let e = O(t, l);
        return (
          A(e, o('constant payable nonpayable'.split(' '))),
          A(e, o('pure view payable nonpayable'.split(' '))),
          e.has('view')
            ? 'view'
            : e.has('pure')
              ? 'pure'
              : e.has('payable')
                ? 'payable'
                : e.has('nonpayable')
                  ? 'nonpayable'
                  : e.has('constant')
                    ? 'view'
                    : 'nonpayable'
        );
      }
      function N(t, e) {
        return t.popParams().map((t) => D.from(t, e));
      }
      function T(t) {
        if (t.peekType('AT')) {
          if ((t.pop(), t.peekType('NUMBER'))) return (0, s.Ab)(t.pop().text);
          throw new Error('invalid gas');
        }
        return null;
      }
      function S(t) {
        if (t.length)
          throw new Error(
            `unexpected tokens at offset ${t.offset}: ${t.toString()}`
          );
      }
      const _ = new RegExp(/^(.*)\[([0-9]*)\]$/);
      function M(t) {
        const e = t.match(E);
        if (((0, r.MR)(e, 'invalid type', 'type', t), 'uint' === t))
          return 'uint256';
        if ('int' === t) return 'int256';
        if (e[2]) {
          const n = parseInt(e[2]);
          (0, r.MR)(0 !== n && n <= 32, 'invalid bytes length', 'type', t);
        } else if (e[3]) {
          const n = parseInt(e[3]);
          (0, r.MR)(
            0 !== n && n <= 256 && n % 8 == 0,
            'invalid numeric width',
            'type',
            t
          );
        }
        return t;
      }
      const I = {},
        $ = Symbol.for('_ethers_internal'),
        C = '_ParamTypeInternal',
        j = '_ErrorInternal',
        U = '_EventInternal',
        F = '_ConstructorInternal',
        L = '_FallbackInternal',
        V = '_FunctionInternal',
        B = '_StructInternal';
      class D {
        name;
        type;
        baseType;
        indexed;
        components;
        arrayLength;
        arrayChildren;
        constructor(t, e, n, s, a, o, c, u) {
          if (
            ((0, r.gk)(t, I, 'ParamType'),
            Object.defineProperty(this, $, { value: C }),
            o && (o = Object.freeze(o.slice())),
            'array' === s)
          ) {
            if (null == c || null == u) throw new Error('');
          } else if (null != c || null != u) throw new Error('');
          if ('tuple' === s) {
            if (null == o) throw new Error('');
          } else if (null != o) throw new Error('');
          (0, i.n)(this, {
            name: e,
            type: n,
            baseType: s,
            indexed: a,
            components: o,
            arrayLength: c,
            arrayChildren: u,
          });
        }
        format(t) {
          if ((null == t && (t = 'sighash'), 'json' === t)) {
            const e = this.name || '';
            if (this.isArray()) {
              const t = JSON.parse(this.arrayChildren.format('json'));
              return (
                (t.name = e),
                (t.type += `[${this.arrayLength < 0 ? '' : String(this.arrayLength)}]`),
                JSON.stringify(t)
              );
            }
            const n = {
              type: 'tuple' === this.baseType ? 'tuple' : this.type,
              name: e,
            };
            return (
              'boolean' == typeof this.indexed && (n.indexed = this.indexed),
              this.isTuple() &&
                (n.components = this.components.map((e) =>
                  JSON.parse(e.format(t))
                )),
              JSON.stringify(n)
            );
          }
          let e = '';
          return (
            this.isArray()
              ? ((e += this.arrayChildren.format(t)),
                (e += `[${this.arrayLength < 0 ? '' : String(this.arrayLength)}]`))
              : this.isTuple()
                ? (e +=
                    '(' +
                    this.components
                      .map((e) => e.format(t))
                      .join('full' === t ? ', ' : ',') +
                    ')')
                : (e += this.type),
            'sighash' !== t &&
              (!0 === this.indexed && (e += ' indexed'),
              'full' === t && this.name && (e += ' ' + this.name)),
            e
          );
        }
        isArray() {
          return 'array' === this.baseType;
        }
        isTuple() {
          return 'tuple' === this.baseType;
        }
        isIndexable() {
          return null != this.indexed;
        }
        walk(t, e) {
          if (this.isArray()) {
            if (!Array.isArray(t)) throw new Error('invalid array value');
            if (-1 !== this.arrayLength && t.length !== this.arrayLength)
              throw new Error('array is wrong length');
            const n = this;
            return t.map((t) => n.arrayChildren.walk(t, e));
          }
          if (this.isTuple()) {
            if (!Array.isArray(t)) throw new Error('invalid tuple value');
            if (t.length !== this.components.length)
              throw new Error('array is wrong length');
            const n = this;
            return t.map((t, r) => n.components[r].walk(t, e));
          }
          return e(this.type, t);
        }
        #p(t, e, n, r) {
          if (this.isArray()) {
            if (!Array.isArray(e)) throw new Error('invalid array value');
            if (-1 !== this.arrayLength && e.length !== this.arrayLength)
              throw new Error('array is wrong length');
            const s = this.arrayChildren,
              i = e.slice();
            return (
              i.forEach((e, r) => {
                s.#p(t, e, n, (t) => {
                  i[r] = t;
                });
              }),
              void r(i)
            );
          }
          if (this.isTuple()) {
            const s = this.components;
            let i;
            if (Array.isArray(e)) i = e.slice();
            else {
              if (null == e || 'object' != typeof e)
                throw new Error('invalid tuple value');
              i = s.map((t) => {
                if (!t.name)
                  throw new Error(
                    'cannot use object value with unnamed components'
                  );
                if (!(t.name in e))
                  throw new Error(`missing value for component ${t.name}`);
                return e[t.name];
              });
            }
            if (i.length !== this.components.length)
              throw new Error('array is wrong length');
            return (
              i.forEach((e, r) => {
                s[r].#p(t, e, n, (t) => {
                  i[r] = t;
                });
              }),
              void r(i)
            );
          }
          const s = n(this.type, e);
          s.then
            ? t.push(
                (async function () {
                  r(await s);
                })()
              )
            : r(s);
        }
        async walkAsync(t, e) {
          const n = [],
            r = [t];
          return (
            this.#p(n, t, e, (t) => {
              r[0] = t;
            }),
            n.length && (await Promise.all(n)),
            r[0]
          );
        }
        static from(t, e) {
          if (D.isParamType(t)) return t;
          if ('string' == typeof t)
            try {
              return D.from(x(t), e);
            } catch (c) {
              (0, r.MR)(!1, 'invalid param type', 'obj', t);
            }
          else if (t instanceof R) {
            let n = '',
              r = '',
              s = null;
            O(t, o(['tuple'])).has('tuple') || t.peekType('OPEN_PAREN')
              ? ((r = 'tuple'),
                (s = t.popParams().map((t) => D.from(t))),
                (n = `tuple(${s.map((t) => t.format()).join(',')})`))
              : ((n = M(t.popType('TYPE'))), (r = n));
            let i = null,
              a = null;
            for (; t.length && t.peekType('BRACKET'); ) {
              const e = t.pop();
              ((i = new D(I, '', n, r, null, s, a, i)),
                (a = e.value),
                (n += e.text),
                (r = 'array'),
                (s = null));
            }
            let c = null;
            if (O(t, d).has('indexed')) {
              if (!e) throw new Error('');
              c = !0;
            }
            const u = t.peekType('ID') ? t.pop().text : '';
            if (t.length) throw new Error('leftover tokens');
            return new D(I, u, n, r, c, s, a, i);
          }
          const n = t.name;
          (0, r.MR)(
            !n || ('string' == typeof n && n.match(v)),
            'invalid name',
            'obj.name',
            n
          );
          let s = t.indexed;
          null != s &&
            ((0, r.MR)(
              e,
              'parameter cannot be indexed',
              'obj.indexed',
              t.indexed
            ),
            (s = !!s));
          let i = t.type,
            a = i.match(_);
          if (a) {
            const e = parseInt(a[2] || '-1'),
              r = D.from({ type: a[1], components: t.components });
            return new D(I, n || '', i, 'array', s, null, e, r);
          }
          if ('tuple' === i || i.startsWith('tuple(') || i.startsWith('(')) {
            const e =
              null != t.components ? t.components.map((t) => D.from(t)) : null;
            return new D(I, n || '', i, 'tuple', s, e, null, null);
          }
          return (
            (i = M(t.type)),
            new D(I, n || '', i, i, s, null, null, null)
          );
        }
        static isParamType(t) {
          return t && t[$] === C;
        }
      }
      class z {
        type;
        inputs;
        constructor(t, e, n) {
          ((0, r.gk)(t, I, 'Fragment'),
            (n = Object.freeze(n.slice())),
            (0, i.n)(this, { type: e, inputs: n }));
        }
        static from(t) {
          if ('string' == typeof t) {
            try {
              z.from(JSON.parse(t));
            } catch (e) {}
            return z.from(x(t));
          }
          if (t instanceof R)
            switch (t.peekKeyword(h)) {
              case 'constructor':
                return Z.from(t);
              case 'error':
                return G.from(t);
              case 'event':
                return W.from(t);
              case 'fallback':
              case 'receive':
                return q.from(t);
              case 'function':
                return H.from(t);
              case 'struct':
                return Y.from(t);
            }
          else if ('object' == typeof t) {
            switch (t.type) {
              case 'constructor':
                return Z.from(t);
              case 'error':
                return G.from(t);
              case 'event':
                return W.from(t);
              case 'fallback':
              case 'receive':
                return q.from(t);
              case 'function':
                return H.from(t);
              case 'struct':
                return Y.from(t);
            }
            (0, r.vA)(
              !1,
              `unsupported type: ${t.type}`,
              'UNSUPPORTED_OPERATION',
              { operation: 'Fragment.from' }
            );
          }
          (0, r.MR)(!1, 'unsupported frgament object', 'obj', t);
        }
        static isConstructor(t) {
          return Z.isFragment(t);
        }
        static isError(t) {
          return G.isFragment(t);
        }
        static isEvent(t) {
          return W.isFragment(t);
        }
        static isFunction(t) {
          return H.isFragment(t);
        }
        static isStruct(t) {
          return Y.isFragment(t);
        }
      }
      class K extends z {
        name;
        constructor(t, e, n, s) {
          (super(t, e, s),
            (0, r.MR)(
              'string' == typeof n && n.match(v),
              'invalid identifier',
              'name',
              n
            ),
            (s = Object.freeze(s.slice())),
            (0, i.n)(this, { name: n }));
        }
      }
      function J(t, e) {
        return (
          '(' + e.map((e) => e.format(t)).join('full' === t ? ', ' : ',') + ')'
        );
      }
      class G extends K {
        constructor(t, e, n) {
          (super(t, 'error', e, n),
            Object.defineProperty(this, $, { value: j }));
        }
        get selector() {
          return (0, a.id)(this.format('sighash')).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = 'sighash'), 'json' === t))
            return JSON.stringify({
              type: 'error',
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            'sighash' !== t && e.push('error'),
            e.push(this.name + J(t, this.inputs)),
            e.join(' ')
          );
        }
        static from(t) {
          if (G.isFragment(t)) return t;
          if ('string' == typeof t) return G.from(x(t));
          if (t instanceof R) {
            const e = k('error', t),
              n = N(t);
            return (S(t), new G(I, e, n));
          }
          return new G(I, t.name, t.inputs ? t.inputs.map(D.from) : []);
        }
        static isFragment(t) {
          return t && t[$] === j;
        }
      }
      class W extends K {
        anonymous;
        constructor(t, e, n, r) {
          (super(t, 'event', e, n),
            Object.defineProperty(this, $, { value: U }),
            (0, i.n)(this, { anonymous: r }));
        }
        get topicHash() {
          return (0, a.id)(this.format('sighash'));
        }
        format(t) {
          if ((null == t && (t = 'sighash'), 'json' === t))
            return JSON.stringify({
              type: 'event',
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            'sighash' !== t && e.push('event'),
            e.push(this.name + J(t, this.inputs)),
            'sighash' !== t && this.anonymous && e.push('anonymous'),
            e.join(' ')
          );
        }
        static getTopicHash(t, e) {
          return (
            (e = (e || []).map((t) => D.from(t))),
            new W(I, t, e, !1).topicHash
          );
        }
        static from(t) {
          if (W.isFragment(t)) return t;
          if ('string' == typeof t)
            try {
              return W.from(x(t));
            } catch (e) {
              (0, r.MR)(!1, 'invalid event fragment', 'obj', t);
            }
          else if (t instanceof R) {
            const e = k('event', t),
              n = N(t, !0),
              r = !!O(t, o(['anonymous'])).has('anonymous');
            return (S(t), new W(I, e, n, r));
          }
          return new W(
            I,
            t.name,
            t.inputs ? t.inputs.map((t) => D.from(t, !0)) : [],
            !!t.anonymous
          );
        }
        static isFragment(t) {
          return t && t[$] === U;
        }
      }
      class Z extends z {
        payable;
        gas;
        constructor(t, e, n, r, s) {
          (super(t, e, n),
            Object.defineProperty(this, $, { value: F }),
            (0, i.n)(this, { payable: r, gas: s }));
        }
        format(t) {
          if (
            ((0, r.vA)(
              null != t && 'sighash' !== t,
              'cannot format a constructor for sighash',
              'UNSUPPORTED_OPERATION',
              { operation: 'format(sighash)' }
            ),
            'json' === t)
          )
            return JSON.stringify({
              type: 'constructor',
              stateMutability: this.payable ? 'payable' : 'undefined',
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [`constructor${J(t, this.inputs)}`];
          return (
            this.payable && e.push('payable'),
            null != this.gas && e.push(`@${this.gas.toString()}`),
            e.join(' ')
          );
        }
        static from(t) {
          if (Z.isFragment(t)) return t;
          if ('string' == typeof t)
            try {
              return Z.from(x(t));
            } catch (e) {
              (0, r.MR)(!1, 'invalid constuctor fragment', 'obj', t);
            }
          else if (t instanceof R) {
            O(t, o(['constructor']));
            const e = N(t),
              n = !!O(t, c).has('payable'),
              r = T(t);
            return (S(t), new Z(I, 'constructor', e, n, r));
          }
          return new Z(
            I,
            'constructor',
            t.inputs ? t.inputs.map(D.from) : [],
            !!t.payable,
            null != t.gas ? t.gas : null
          );
        }
        static isFragment(t) {
          return t && t[$] === F;
        }
      }
      class q extends z {
        payable;
        constructor(t, e, n) {
          (super(t, 'fallback', e),
            Object.defineProperty(this, $, { value: L }),
            (0, i.n)(this, { payable: n }));
        }
        format(t) {
          const e = 0 === this.inputs.length ? 'receive' : 'fallback';
          if ('json' === t) {
            const t = this.payable ? 'payable' : 'nonpayable';
            return JSON.stringify({ type: e, stateMutability: t });
          }
          return `${e}()${this.payable ? ' payable' : ''}`;
        }
        static from(t) {
          if (q.isFragment(t)) return t;
          if ('string' == typeof t)
            try {
              return q.from(x(t));
            } catch (e) {
              (0, r.MR)(!1, 'invalid fallback fragment', 'obj', t);
            }
          else if (t instanceof R) {
            const e = t.toString(),
              n = t.peekKeyword(o(['fallback', 'receive']));
            if (
              ((0, r.MR)(n, 'type must be fallback or receive', 'obj', e),
              'receive' === t.popKeyword(o(['fallback', 'receive'])))
            ) {
              const e = N(t);
              return (
                (0, r.MR)(
                  0 === e.length,
                  'receive cannot have arguments',
                  'obj.inputs',
                  e
                ),
                O(t, o(['payable'])),
                S(t),
                new q(I, [], !0)
              );
            }
            let s = N(t);
            s.length
              ? (0, r.MR)(
                  1 === s.length && 'bytes' === s[0].type,
                  'invalid fallback inputs',
                  'obj.inputs',
                  s.map((t) => t.format('minimal')).join(', ')
                )
              : (s = [D.from('bytes')]);
            const i = P(t);
            if (
              ((0, r.MR)(
                'nonpayable' === i || 'payable' === i,
                'fallback cannot be constants',
                'obj.stateMutability',
                i
              ),
              O(t, o(['returns'])).has('returns'))
            ) {
              const e = N(t);
              (0, r.MR)(
                1 === e.length && 'bytes' === e[0].type,
                'invalid fallback outputs',
                'obj.outputs',
                e.map((t) => t.format('minimal')).join(', ')
              );
            }
            return (S(t), new q(I, s, 'payable' === i));
          }
          if ('receive' === t.type) return new q(I, [], !0);
          if ('fallback' === t.type) {
            const e = [D.from('bytes')],
              n = 'payable' === t.stateMutability;
            return new q(I, e, n);
          }
          (0, r.MR)(!1, 'invalid fallback description', 'obj', t);
        }
        static isFragment(t) {
          return t && t[$] === L;
        }
      }
      class H extends K {
        constant;
        outputs;
        stateMutability;
        payable;
        gas;
        constructor(t, e, n, r, s, a) {
          (super(t, 'function', e, r),
            Object.defineProperty(this, $, { value: V }),
            (s = Object.freeze(s.slice())));
          const o = 'view' === n || 'pure' === n,
            c = 'payable' === n;
          (0, i.n)(this, {
            constant: o,
            gas: a,
            outputs: s,
            payable: c,
            stateMutability: n,
          });
        }
        get selector() {
          return (0, a.id)(this.format('sighash')).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = 'sighash'), 'json' === t))
            return JSON.stringify({
              type: 'function',
              name: this.name,
              constant: this.constant,
              stateMutability:
                'nonpayable' !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            'sighash' !== t && e.push('function'),
            e.push(this.name + J(t, this.inputs)),
            'sighash' !== t &&
              ('nonpayable' !== this.stateMutability &&
                e.push(this.stateMutability),
              this.outputs &&
                this.outputs.length &&
                (e.push('returns'), e.push(J(t, this.outputs))),
              null != this.gas && e.push(`@${this.gas.toString()}`)),
            e.join(' ')
          );
        }
        static getSelector(t, e) {
          return (
            (e = (e || []).map((t) => D.from(t))),
            new H(I, t, 'view', e, [], null).selector
          );
        }
        static from(t) {
          if (H.isFragment(t)) return t;
          if ('string' == typeof t)
            try {
              return H.from(x(t));
            } catch (n) {
              (0, r.MR)(!1, 'invalid function fragment', 'obj', t);
            }
          else if (t instanceof R) {
            const e = k('function', t),
              n = N(t),
              r = P(t);
            let s = [];
            O(t, o(['returns'])).has('returns') && (s = N(t));
            const i = T(t);
            return (S(t), new H(I, e, r, n, s, i));
          }
          let e = t.stateMutability;
          return (
            null == e &&
              ((e = 'payable'),
              'boolean' == typeof t.constant
                ? ((e = 'view'),
                  t.constant ||
                    ((e = 'payable'),
                    'boolean' != typeof t.payable ||
                      t.payable ||
                      (e = 'nonpayable')))
                : 'boolean' != typeof t.payable ||
                  t.payable ||
                  (e = 'nonpayable')),
            new H(
              I,
              t.name,
              e,
              t.inputs ? t.inputs.map(D.from) : [],
              t.outputs ? t.outputs.map(D.from) : [],
              null != t.gas ? t.gas : null
            )
          );
        }
        static isFragment(t) {
          return t && t[$] === V;
        }
      }
      class Y extends K {
        constructor(t, e, n) {
          (super(t, 'struct', e, n),
            Object.defineProperty(this, $, { value: B }));
        }
        format() {
          throw new Error('@TODO');
        }
        static from(t) {
          if ('string' == typeof t)
            try {
              return Y.from(x(t));
            } catch (e) {
              (0, r.MR)(!1, 'invalid struct fragment', 'obj', t);
            }
          else if (t instanceof R) {
            const e = k('struct', t),
              n = N(t);
            return (S(t), new Y(I, e, n));
          }
          return new Y(I, t.name, t.inputs ? t.inputs.map(D.from) : []);
        }
        static isFragment(t) {
          return t && t[$] === B;
        }
      }
    },
    4922: (t, e, n) => {
      n.d(e, { b: () => h });
      var r = n(8757),
        s = n(8227),
        i = n(536);
      const a = BigInt(0),
        o = BigInt(36);
      function c(t) {
        const e = (t = t.toLowerCase()).substring(2).split(''),
          n = new Uint8Array(40);
        for (let r = 0; r < 40; r++) n[r] = e[r].charCodeAt(0);
        const i = (0, s.q5)((0, r.S)(n));
        for (let r = 0; r < 40; r += 2)
          (i[r >> 1] >> 4 >= 8 && (e[r] = e[r].toUpperCase()),
            (15 & i[r >> 1]) >= 8 && (e[r + 1] = e[r + 1].toUpperCase()));
        return '0x' + e.join('');
      }
      const u = {};
      for (let p = 0; p < 10; p++) u[String(p)] = String(p);
      for (let p = 0; p < 26; p++)
        u[String.fromCharCode(65 + p)] = String(10 + p);
      const l = 15;
      const f = (function () {
        const t = {};
        for (let e = 0; e < 36; e++)
          t['0123456789abcdefghijklmnopqrstuvwxyz'[e]] = BigInt(e);
        return t;
      })();
      function h(t) {
        if (
          ((0, i.MR)('string' == typeof t, 'invalid address', 'address', t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        ) {
          t.startsWith('0x') || (t = '0x' + t);
          const e = c(t);
          return (
            (0, i.MR)(
              !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
              'bad address checksum',
              'address',
              t
            ),
            e
          );
        }
        if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (0, i.MR)(
            t.substring(2, 4) ===
              (function (t) {
                let e = (t =
                  (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + '00')
                  .split('')
                  .map((t) => u[t])
                  .join('');
                for (; e.length >= l; ) {
                  let t = e.substring(0, l);
                  e = (parseInt(t, 10) % 97) + e.substring(t.length);
                }
                let n = String(98 - (parseInt(e, 10) % 97));
                for (; n.length < 2; ) n = '0' + n;
                return n;
              })(t),
            'bad icap checksum',
            'address',
            t
          );
          let e = (function (t) {
            t = t.toLowerCase();
            let e = a;
            for (let n = 0; n < t.length; n++) e = e * o + f[t[n]];
            return e;
          })(t.substring(4)).toString(16);
          for (; e.length < 40; ) e = '0' + e;
          return c('0x' + e);
        }
        (0, i.MR)(!1, 'invalid address', 'address', t);
      }
    },
    5357: (t, e, n) => {
      n.d(e, { $C: () => i, tG: () => o });
      var r = n(536),
        s = n(4922);
      function i(t) {
        return t && 'function' == typeof t.getAddress;
      }
      async function a(t, e) {
        const n = await e;
        return (
          (null != n && '0x0000000000000000000000000000000000000000' !== n) ||
            ((0, r.vA)(
              'string' != typeof t,
              'unconfigured name',
              'UNCONFIGURED_NAME',
              { value: t }
            ),
            (0, r.MR)(
              !1,
              'invalid AddressLike value; did not resolve to a value address',
              'target',
              t
            )),
          (0, s.b)(n)
        );
      }
      function o(t, e) {
        return 'string' == typeof t
          ? t.match(/^0x[0-9a-f]{40}$/i)
            ? (0, s.b)(t)
            : ((0, r.vA)(
                null != e,
                'ENS resolution requires a provider',
                'UNSUPPORTED_OPERATION',
                { operation: 'resolveName' }
              ),
              a(t, e.resolveName(t)))
          : i(t)
            ? a(t, t.getAddress())
            : t && 'function' == typeof t.then
              ? a(t, t)
              : void (0, r.MR)(
                  !1,
                  'unsupported addressable value',
                  'target',
                  t
                );
      }
    },
    5914: (t, e, n) => {
      n.d(e, { h: () => c });
      var r = n(4711),
        s = n(8227),
        i = n(536),
        a = n(8848),
        o = n(6533);
      class c {
        #d;
        constructor(t) {
          ((0, i.MR)(
            32 === (0, s.pO)(t),
            'invalid private key',
            'privateKey',
            '[REDACTED]'
          ),
            (this.#d = (0, s.c$)(t)));
        }
        get privateKey() {
          return this.#d;
        }
        get publicKey() {
          return c.computePublicKey(this.#d);
        }
        get compressedPublicKey() {
          return c.computePublicKey(this.#d, !0);
        }
        sign(t) {
          (0, i.MR)(32 === (0, s.pO)(t), 'invalid digest length', 'digest', t);
          const e = r.bI.sign((0, s.Lm)(t), (0, s.Lm)(this.#d), { lowS: !0 });
          return o.t.from({
            r: (0, a.up)(e.r, 32),
            s: (0, a.up)(e.s, 32),
            v: e.recovery ? 28 : 27,
          });
        }
        computeSharedSecret(t) {
          const e = c.computePublicKey(t);
          return (0, s.c$)(
            r.bI.getSharedSecret((0, s.Lm)(this.#d), (0, s.q5)(e), !1)
          );
        }
        static computePublicKey(t, e) {
          let n = (0, s.q5)(t, 'key');
          if (32 === n.length) {
            const t = r.bI.getPublicKey(n, !!e);
            return (0, s.c$)(t);
          }
          if (64 === n.length) {
            const t = new Uint8Array(65);
            ((t[0] = 4), t.set(n, 1), (n = t));
          }
          const i = r.bI.ProjectivePoint.fromHex(n);
          return (0, s.c$)(i.toRawBytes(e));
        }
        static recoverPublicKey(t, e) {
          (0, i.MR)(32 === (0, s.pO)(t), 'invalid digest length', 'digest', t);
          const n = o.t.from(e);
          let a = r.bI.Signature.fromCompact((0, s.Lm)((0, s.xW)([n.r, n.s])));
          a = a.addRecoveryBit(n.yParity);
          const c = a.recoverPublicKey((0, s.Lm)(t));
          return (
            (0, i.MR)(
              null != c,
              'invalid signature for digest',
              'signature',
              e
            ),
            '0x' + c.toHex(!1)
          );
        }
        static addPoints(t, e, n) {
          const s = r.bI.ProjectivePoint.fromHex(
              c.computePublicKey(t).substring(2)
            ),
            i = r.bI.ProjectivePoint.fromHex(
              c.computePublicKey(e).substring(2)
            );
          return '0x' + s.add(i).toHex(!!n);
        }
      }
    },
    6533: (t, e, n) => {
      n.d(e, { t: () => g });
      const r =
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      var s = n(8227),
        i = n(8848),
        a = n(536);
      const o = BigInt(0),
        c = BigInt(1),
        u = BigInt(2),
        l = BigInt(27),
        f = BigInt(28),
        h = BigInt(35),
        p = {};
      function d(t) {
        return (0, s.nx)((0, i.c4)(t), 32);
      }
      class g {
        #g;
        #y;
        #m;
        #b;
        get r() {
          return this.#g;
        }
        set r(t) {
          ((0, a.MR)(32 === (0, s.pO)(t), 'invalid r', 'value', t),
            (this.#g = (0, s.c$)(t)));
        }
        get s() {
          return (
            (0, a.MR)(
              parseInt(this.#y.substring(0, 3)) < 8,
              'non-canonical s; use ._s',
              's',
              this.#y
            ),
            this.#y
          );
        }
        set s(t) {
          ((0, a.MR)(32 === (0, s.pO)(t), 'invalid s', 'value', t),
            (this.#y = (0, s.c$)(t)));
        }
        get _s() {
          return this.#y;
        }
        isValid() {
          return parseInt(this.#y.substring(0, 3)) < 8;
        }
        get v() {
          return this.#m;
        }
        set v(t) {
          const e = (0, i.WZ)(t, 'value');
          ((0, a.MR)(27 === e || 28 === e, 'invalid v', 'v', t), (this.#m = e));
        }
        get networkV() {
          return this.#b;
        }
        get legacyChainId() {
          const t = this.networkV;
          return null == t ? null : g.getChainId(t);
        }
        get yParity() {
          return 27 === this.v ? 0 : 1;
        }
        get yParityAndS() {
          const t = (0, s.q5)(this.s);
          return (this.yParity && (t[0] |= 128), (0, s.c$)(t));
        }
        get compactSerialized() {
          return (0, s.xW)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, s.xW)([this.r, this.s, this.yParity ? '0x1c' : '0x1b']);
        }
        constructor(t, e, n, r) {
          ((0, a.gk)(t, p, 'Signature'),
            (this.#g = e),
            (this.#y = n),
            (this.#m = r),
            (this.#b = null));
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return `Signature { r: "${this.r}", s: "${this._s}"${this.isValid() ? '' : ', valid: "false"'}, yParity: ${this.yParity}, networkV: ${this.networkV} }`;
        }
        clone() {
          const t = new g(p, this.r, this._s, this.v);
          return (this.networkV && (t.#b = this.networkV), t);
        }
        toJSON() {
          const t = this.networkV;
          return {
            _type: 'signature',
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this._s,
            v: this.v,
          };
        }
        static getChainId(t) {
          const e = (0, i.Ab)(t, 'v');
          return e == l || e == f
            ? o
            : ((0, a.MR)(e >= h, 'invalid EIP-155 v', 'v', t), (e - h) / u);
        }
        static getChainIdV(t, e) {
          return (0, i.Ab)(t) * u + BigInt(35 + e - 27);
        }
        static getNormalizedV(t) {
          const e = (0, i.Ab)(t);
          return e === o || e === l
            ? 27
            : e === c || e === f
              ? 28
              : ((0, a.MR)(e >= h, 'invalid v', 'v', t), e & c ? 27 : 28);
        }
        static from(t) {
          function e(e, n) {
            (0, a.MR)(e, n, 'signature', t);
          }
          if (null == t) return new g(p, r, r, 27);
          if ('string' == typeof t) {
            const n = (0, s.q5)(t, 'signature');
            if (64 === n.length) {
              const t = (0, s.c$)(n.slice(0, 32)),
                e = n.slice(32, 64),
                r = 128 & e[0] ? 28 : 27;
              return ((e[0] &= 127), new g(p, t, (0, s.c$)(e), r));
            }
            if (65 === n.length) {
              const t = (0, s.c$)(n.slice(0, 32)),
                e = (0, s.c$)(n.slice(32, 64)),
                r = g.getNormalizedV(n[64]);
              return new g(p, t, e, r);
            }
            e(!1, 'invalid raw signature length');
          }
          if (t instanceof g) return t.clone();
          const n = t.r;
          e(null != n, 'missing r');
          const o = d(n),
            c = (function (t, n) {
              if (null != t) return d(t);
              if (null != n) {
                e((0, s.Lo)(n, 32), 'invalid yParityAndS');
                const t = (0, s.q5)(n);
                return ((t[0] &= 127), (0, s.c$)(t));
              }
              e(!1, 'missing s');
            })(t.s, t.yParityAndS),
            { networkV: u, v: l } = (function (t, n, r) {
              if (null != t) {
                const e = (0, i.Ab)(t);
                return {
                  networkV: e >= h ? e : void 0,
                  v: g.getNormalizedV(e),
                };
              }
              if (null != n)
                return (
                  e((0, s.Lo)(n, 32), 'invalid yParityAndS'),
                  { v: 128 & (0, s.q5)(n)[0] ? 28 : 27 }
                );
              if (null != r) {
                switch ((0, i.WZ)(r, 'sig.yParity')) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                e(!1, 'invalid yParity');
              }
              e(!1, 'missing v');
            })(t.v, t.yParityAndS, t.yParity),
            f = new g(p, o, c, l);
          return (
            u && (f.#b = u),
            e(
              null == t.yParity ||
                (0, i.WZ)(t.yParity, 'sig.yParity') === f.yParity,
              'yParity mismatch'
            ),
            e(
              null == t.yParityAndS || t.yParityAndS === f.yParityAndS,
              'yParityAndS mismatch'
            ),
            f
          );
        }
      }
    },
    7043: (t, e, n) => {
      n.d(e, { s: () => g });
      var r = n(5671),
        s = n(9806),
        i = n(536);
      const a = (function () {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if ('undefined' != typeof global) return global;
        throw new Error('unable to locate global object');
      })();
      function o(t) {
        switch (t) {
          case 'sha256':
            return r.s.create();
          case 'sha512':
            return s.Zf.create();
        }
        (0, i.MR)(!1, 'invalid hashing algorithm name', 'algorithm', t);
      }
      a.crypto || a.msCrypto;
      var c = n(8227);
      const u = function (t) {
          return o('sha256').update(t).digest();
        },
        l = function (t) {
          return o('sha512').update(t).digest();
        };
      let f = u,
        h = l,
        p = !1,
        d = !1;
      function g(t) {
        const e = (0, c.q5)(t, 'data');
        return (0, c.c$)(f(e));
      }
      function y(t) {
        const e = (0, c.q5)(t, 'data');
        return (0, c.c$)(h(e));
      }
      ((g._ = u),
        (g.lock = function () {
          p = !0;
        }),
        (g.register = function (t) {
          if (p) throw new Error('sha256 is locked');
          f = t;
        }),
        Object.freeze(g),
        (y._ = l),
        (y.lock = function () {
          d = !0;
        }),
        (y.register = function (t) {
          if (d) throw new Error('sha512 is locked');
          h = t;
        }),
        Object.freeze(g));
    },
    8757: (t, e, n) => {
      n.d(e, { S: () => c });
      var r = n(5699),
        s = n(8227);
      let i = !1;
      const a = function (t) {
        return (0, r.lY)(t);
      };
      let o = a;
      function c(t) {
        const e = (0, s.q5)(t, 'data');
        return (0, s.c$)(o(e));
      }
      ((c._ = a),
        (c.lock = function () {
          i = !0;
        }),
        (c.register = function (t) {
          if (i) throw new TypeError('keccak256 is locked');
          o = t;
        }),
        Object.freeze(c));
    },
    9665: (t, e, n) => {
      n.d(e, {
        AU: () => w,
        Q7: () => y,
        Ue: () => b,
        Yx: () => o,
        mP: () => v,
      });
      var r = n(8227),
        s = n(536),
        i = n(8848),
        a = n(8466);
      const o = 32,
        c = new Uint8Array(o),
        u = ['then'],
        l = {},
        f = new WeakMap();
      function h(t) {
        return f.get(t);
      }
      function p(t, e) {
        f.set(t, e);
      }
      function d(t, e) {
        const n = new Error(
          `deferred error during ABI decoding triggered accessing ${t}`
        );
        throw ((n.error = e), n);
      }
      function g(t, e, n) {
        return t.indexOf(null) >= 0
          ? e.map((t, e) => (t instanceof y ? g(h(t), t, n) : t))
          : t.reduce((t, r, s) => {
              let i = e.getValue(r);
              return (
                r in t ||
                  (n && i instanceof y && (i = g(h(i), i, n)), (t[r] = i)),
                t
              );
            }, {});
      }
      class y extends Array {
        #w;
        constructor(...t) {
          const e = t[0];
          let n = t[1],
            r = (t[2] || []).slice(),
            s = !0;
          (e !== l && ((n = t), (r = []), (s = !1)),
            super(n.length),
            n.forEach((t, e) => {
              this[e] = t;
            }));
          const a = r.reduce(
            (t, e) => (
              'string' == typeof e && t.set(e, (t.get(e) || 0) + 1),
              t
            ),
            new Map()
          );
          if (
            (p(
              this,
              Object.freeze(
                n.map((t, e) => {
                  const n = r[e];
                  return null != n && 1 === a.get(n) ? n : null;
                })
              )
            ),
            (this.#w = []),
            null == this.#w && this.#w,
            !s)
          )
            return;
          Object.freeze(this);
          const o = new Proxy(this, {
            get: (t, e, n) => {
              if ('string' == typeof e) {
                if (e.match(/^[0-9]+$/)) {
                  const n = (0, i.WZ)(e, '%index');
                  if (n < 0 || n >= this.length)
                    throw new RangeError('out of result range');
                  const r = t[n];
                  return (r instanceof Error && d(`index ${n}`, r), r);
                }
                if (u.indexOf(e) >= 0) return Reflect.get(t, e, n);
                const r = t[e];
                if (r instanceof Function)
                  return function (...e) {
                    return r.apply(this === n ? t : this, e);
                  };
                if (!(e in t))
                  return t.getValue.apply(this === n ? t : this, [e]);
              }
              return Reflect.get(t, e, n);
            },
          });
          return (p(o, h(this)), o);
        }
        toArray(t) {
          const e = [];
          return (
            this.forEach((n, r) => {
              (n instanceof Error && d(`index ${r}`, n),
                t && n instanceof y && (n = n.toArray(t)),
                e.push(n));
            }),
            e
          );
        }
        toObject(t) {
          const e = h(this);
          return e.reduce(
            (n, r, i) => (
              (0, s.vA)(
                null != r,
                `value at index ${i} unnamed`,
                'UNSUPPORTED_OPERATION',
                { operation: 'toObject()' }
              ),
              g(e, this, t)
            ),
            {}
          );
        }
        slice(t, e) {
          (null == t && (t = 0),
            t < 0 && (t += this.length) < 0 && (t = 0),
            null == e && (e = this.length),
            e < 0 && (e += this.length) < 0 && (e = 0),
            e > this.length && (e = this.length));
          const n = h(this),
            r = [],
            s = [];
          for (let i = t; i < e; i++) (r.push(this[i]), s.push(n[i]));
          return new y(l, r, s);
        }
        filter(t, e) {
          const n = h(this),
            r = [],
            s = [];
          for (let i = 0; i < this.length; i++) {
            const a = this[i];
            (a instanceof Error && d(`index ${i}`, a),
              t.call(e, a, i, this) && (r.push(a), s.push(n[i])));
          }
          return new y(l, r, s);
        }
        map(t, e) {
          const n = [];
          for (let r = 0; r < this.length; r++) {
            const s = this[r];
            (s instanceof Error && d(`index ${r}`, s),
              n.push(t.call(e, s, r, this)));
          }
          return n;
        }
        getValue(t) {
          const e = h(this).indexOf(t);
          if (-1 === e) return;
          const n = this[e];
          return (
            n instanceof Error && d(`property ${JSON.stringify(t)}`, n.error),
            n
          );
        }
        static fromItems(t, e) {
          return new y(l, t, e);
        }
      }
      function m(t) {
        let e = (0, i.c4)(t);
        return (
          (0, s.vA)(e.length <= o, 'value out-of-bounds', 'BUFFER_OVERRUN', {
            buffer: e,
            length: o,
            offset: e.length,
          }),
          e.length !== o &&
            (e = (0, r.Lm)((0, r.xW)([c.slice(e.length % o), e]))),
          e
        );
      }
      class b {
        name;
        type;
        localName;
        dynamic;
        constructor(t, e, n, r) {
          (0, a.n)(
            this,
            { name: t, type: e, localName: n, dynamic: r },
            {
              name: 'string',
              type: 'string',
              localName: 'string',
              dynamic: 'boolean',
            }
          );
        }
        _throwError(t, e) {
          (0, s.MR)(!1, t, this.localName, e);
        }
      }
      class w {
        #v;
        #E;
        constructor() {
          ((this.#v = []), (this.#E = 0));
        }
        get data() {
          return (0, r.xW)(this.#v);
        }
        get length() {
          return this.#E;
        }
        #R(t) {
          return (this.#v.push(t), (this.#E += t.length), t.length);
        }
        appendWriter(t) {
          return this.#R((0, r.Lm)(t.data));
        }
        writeBytes(t) {
          let e = (0, r.Lm)(t);
          const n = e.length % o;
          return (n && (e = (0, r.Lm)((0, r.xW)([e, c.slice(n)]))), this.#R(e));
        }
        writeValue(t) {
          return this.#R(m(t));
        }
        writeUpdatableValue() {
          const t = this.#v.length;
          return (
            this.#v.push(c),
            (this.#E += o),
            (e) => {
              this.#v[t] = m(e);
            }
          );
        }
      }
      class v {
        allowLoose;
        #v;
        #l;
        #x;
        #A;
        #k;
        constructor(t, e, n) {
          ((0, a.n)(this, { allowLoose: !!e }),
            (this.#v = (0, r.Lm)(t)),
            (this.#x = 0),
            (this.#A = null),
            (this.#k = null != n ? n : 1024),
            (this.#l = 0));
        }
        get data() {
          return (0, r.c$)(this.#v);
        }
        get dataLength() {
          return this.#v.length;
        }
        get consumed() {
          return this.#l;
        }
        get bytes() {
          return new Uint8Array(this.#v);
        }
        #O(t) {
          if (this.#A) return this.#A.#O(t);
          ((this.#x += t),
            (0, s.vA)(
              this.#k < 1 || this.#x <= this.#k * this.dataLength,
              `compressed ABI data exceeds inflation ratio of ${this.#k} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,
              'BUFFER_OVERRUN',
              {
                buffer: (0, r.Lm)(this.#v),
                offset: this.#l,
                length: t,
                info: { bytesRead: this.#x, dataLength: this.dataLength },
              }
            ));
        }
        #P(t, e, n) {
          let i = Math.ceil(e / o) * o;
          return (
            this.#l + i > this.#v.length &&
              (this.allowLoose && n && this.#l + e <= this.#v.length
                ? (i = e)
                : (0, s.vA)(!1, 'data out-of-bounds', 'BUFFER_OVERRUN', {
                    buffer: (0, r.Lm)(this.#v),
                    length: this.#v.length,
                    offset: this.#l + i,
                  })),
            this.#v.slice(this.#l, this.#l + i)
          );
        }
        subReader(t) {
          const e = new v(this.#v.slice(this.#l + t), this.allowLoose, this.#k);
          return ((e.#A = this), e);
        }
        readBytes(t, e) {
          let n = this.#P(0, t, !!e);
          return (this.#O(t), (this.#l += n.length), n.slice(0, t));
        }
        readValue() {
          return (0, i.Dg)(this.readBytes(o));
        }
        readIndex() {
          return (0, i.Ro)(this.readBytes(o));
        }
      }
    },
  },
]);
