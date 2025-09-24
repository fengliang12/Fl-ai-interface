'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [914],
  {
    1883(t, n, e) {
      e.d(n, { z: () => I });
      var r = e(4922),
        i = e(8757),
        s = e(8227),
        a = e(536),
        o = e(8848),
        c = e(8466),
        f = e(6637);
      const u = new Uint8Array(32);
      u.fill(0);
      const y = BigInt(-1),
        l = BigInt(0),
        d = BigInt(1),
        p = BigInt(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        ),
        m = (0, o.up)(d, 32),
        h = (0, o.up)(l, 32),
        v = {
          name: 'string',
          version: 'string',
          chainId: 'uint256',
          verifyingContract: 'address',
          salt: 'bytes32',
        },
        g = ['name', 'version', 'chainId', 'verifyingContract', 'salt'];
      function b(t) {
        return (n) => (
          (0, a.MR)(
            'string' == typeof n,
            `invalid domain value for ${JSON.stringify(t)}`,
            `domain.${t}`,
            n
          ),
          n
        );
      }
      const S = {
        name: b('name'),
        version: b('version'),
        chainId(t) {
          const n = (0, o.Ab)(t, 'domain.chainId');
          return (
            (0, a.MR)(n >= 0, 'invalid chain ID', 'domain.chainId', t),
            Number.isSafeInteger(n) ? Number(n) : (0, o.nD)(n)
          );
        },
        verifyingContract(t) {
          try {
            return (0, r.b)(t).toLowerCase();
          } catch (n) {}
          (0, a.MR)(
            !1,
            'invalid domain value "verifyingContract"',
            'domain.verifyingContract',
            t
          );
        },
        salt(t) {
          const n = (0, s.q5)(t, 'domain.salt');
          return (
            (0, a.MR)(
              32 === n.length,
              'invalid domain value "salt"',
              'domain.salt',
              t
            ),
            (0, s.c$)(n)
          );
        },
      };
      function w(t) {
        {
          const n = t.match(/^(u?)int(\d+)$/);
          if (n) {
            const e = '' === n[1],
              r = parseInt(n[2]);
            (0, a.MR)(
              r % 8 == 0 && 0 !== r && r <= 256 && n[2] === String(r),
              'invalid numeric width',
              'type',
              t
            );
            const i = (0, o.dK)(p, e ? r - 1 : r),
              s = e ? (i + d) * y : l;
            return (n) => {
              const r = (0, o.Ab)(n, 'value');
              return (
                (0, a.MR)(
                  r >= s && r <= i,
                  `value out-of-bounds for ${t}`,
                  'value',
                  r
                ),
                (0, o.up)(e ? (0, o.JJ)(r, 256) : r, 32)
              );
            };
          }
        }
        {
          const n = t.match(/^bytes(\d+)$/);
          if (n) {
            const e = parseInt(n[1]);
            return (
              (0, a.MR)(
                0 !== e && e <= 32 && n[1] === String(e),
                'invalid bytes width',
                'type',
                t
              ),
              (n) => {
                const r = (0, s.q5)(n);
                return (
                  (0, a.MR)(
                    r.length === e,
                    `invalid length for ${t}`,
                    'value',
                    n
                  ),
                  ((t) => {
                    const n = (0, s.q5)(t),
                      e = n.length % 32;
                    return e ? (0, s.xW)([n, u.slice(e)]) : (0, s.c$)(n);
                  })(n)
                );
              }
            );
          }
        }
        switch (t) {
          case 'address':
            return (t) => (0, s.nx)((0, r.b)(t), 32);
          case 'bool':
            return (t) => (t ? m : h);
          case 'bytes':
            return (t) => (0, i.S)(t);
          case 'string':
            return (t) => (0, f.id)(t);
        }
        return null;
      }
      function $(t, n) {
        return `${t}(${n.map(({ name: t, type: n }) => n + ' ' + t).join(',')})`;
      }
      function N(t) {
        const n = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
        return n
          ? {
              base: n[1],
              index: n[2] + n[4],
              array: {
                base: n[1],
                prefix: n[1] + n[2],
                count: n[5] ? parseInt(n[5]) : -1,
              },
            }
          : { base: t };
      }
      class I {
        primaryType;
        #t;
        get types() {
          return JSON.parse(this.#t);
        }
        #n;
        #e;
        constructor(t) {
          ((this.#n = new Map()), (this.#e = new Map()));
          const n = new Map(),
            e = new Map(),
            r = new Map(),
            i = {};
          (Object.keys(t).forEach((s) => {
            ((i[s] = t[s].map(({ name: n, type: e }) => {
              let { base: r, index: i } = N(e);
              return (
                'int' !== r || t.int || (r = 'int256'),
                'uint' !== r || t.uint || (r = 'uint256'),
                { name: n, type: r + (i || '') }
              );
            })),
              n.set(s, new Set()),
              e.set(s, []),
              r.set(s, new Set()));
          }),
            (this.#t = JSON.stringify(i)));
          for (const o in i) {
            const r = new Set();
            for (const s of i[o]) {
              ((0, a.MR)(
                !r.has(s.name),
                `duplicate variable name ${JSON.stringify(s.name)} in ${JSON.stringify(o)}`,
                'types',
                t
              ),
                r.add(s.name));
              const i = N(s.type).base;
              ((0, a.MR)(
                i !== o,
                `circular type reference to ${JSON.stringify(i)}`,
                'types',
                t
              ),
                w(i) ||
                  ((0, a.MR)(
                    e.has(i),
                    `unknown type ${JSON.stringify(i)}`,
                    'types',
                    t
                  ),
                  e.get(i).push(o),
                  n.get(o).add(i)));
            }
          }
          const s = Array.from(e.keys()).filter((t) => 0 === e.get(t).length);
          ((0, a.MR)(0 !== s.length, 'missing primary type', 'types', t),
            (0, a.MR)(
              1 === s.length,
              `ambiguous primary types or unused types: ${s.map((t) => JSON.stringify(t)).join(', ')}`,
              'types',
              t
            ),
            (0, c.n)(this, { primaryType: s[0] }),
            (function i(s, o) {
              ((0, a.MR)(
                !o.has(s),
                `circular type reference to ${JSON.stringify(s)}`,
                'types',
                t
              ),
                o.add(s));
              for (const t of n.get(s))
                if (e.has(t)) {
                  i(t, o);
                  for (const n of o) r.get(n).add(t);
                }
              o.delete(s);
            })(this.primaryType, new Set()));
          for (const [a, o] of r) {
            const t = Array.from(o);
            (t.sort(),
              this.#n.set(a, $(a, i[a]) + t.map((t) => $(t, i[t])).join('')));
          }
        }
        getEncoder(t) {
          let n = this.#e.get(t);
          return (n || ((n = this.#r(t)), this.#e.set(t, n)), n);
        }
        #r(t) {
          {
            const n = w(t);
            if (n) return n;
          }
          const n = N(t).array;
          if (n) {
            const t = n.prefix,
              e = this.getEncoder(t);
            return (r) => {
              (0, a.MR)(
                -1 === n.count || n.count === r.length,
                `array length mismatch; expected length ${n.count}`,
                'value',
                r
              );
              let o = r.map(e);
              return (
                this.#n.has(t) && (o = o.map(i.S)),
                (0, i.S)((0, s.xW)(o))
              );
            };
          }
          const e = this.types[t];
          if (e) {
            const n = (0, f.id)(this.#n.get(t));
            return (t) => {
              const r = e.map(({ name: n, type: e }) => {
                const r = this.getEncoder(e)(t[n]);
                return this.#n.has(e) ? (0, i.S)(r) : r;
              });
              return (r.unshift(n), (0, s.xW)(r));
            };
          }
          (0, a.MR)(!1, `unknown type: ${t}`, 'type', t);
        }
        encodeType(t) {
          const n = this.#n.get(t);
          return (
            (0, a.MR)(n, `unknown type: ${JSON.stringify(t)}`, 'name', t),
            n
          );
        }
        encodeData(t, n) {
          return this.getEncoder(t)(n);
        }
        hashStruct(t, n) {
          return (0, i.S)(this.encodeData(t, n));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        t(t, n, e) {
          if (w(t)) return e(t, n);
          const r = N(t).array;
          if (r)
            return (
              (0, a.MR)(
                -1 === r.count || r.count === n.length,
                `array length mismatch; expected length ${r.count}`,
                'value',
                n
              ),
              n.map((t) => this.t(r.prefix, t, e))
            );
          const i = this.types[t];
          if (i)
            return i.reduce(
              (t, { name: r, type: i }) => ((t[r] = this.t(i, n[r], e)), t),
              {}
            );
          (0, a.MR)(!1, `unknown type: ${t}`, 'type', t);
        }
        visit(t, n) {
          return this.t(this.primaryType, t, n);
        }
        static from(t) {
          return new I(t);
        }
        static getPrimaryType(t) {
          return I.from(t).primaryType;
        }
        static hashStruct(t, n, e) {
          return I.from(n).hashStruct(t, e);
        }
        static hashDomain(t) {
          const n = [];
          for (const e in t) {
            if (null == t[e]) continue;
            const r = v[e];
            ((0, a.MR)(
              r,
              `invalid typed-data domain key: ${JSON.stringify(e)}`,
              'domain',
              t
            ),
              n.push({ name: e, type: r }));
          }
          return (
            n.sort((t, n) => g.indexOf(t.name) - g.indexOf(n.name)),
            I.hashStruct('EIP712Domain', { EIP712Domain: n }, t)
          );
        }
        static encode(t, n, e) {
          return (0, s.xW)(['0x1901', I.hashDomain(t), I.from(n).hash(e)]);
        }
        static hash(t, n, e) {
          return (0, i.S)(I.encode(t, n, e));
        }
        static async resolveNames(t, n, e, r) {
          t = Object.assign({}, t);
          for (const s in t) null == t[s] && delete t[s];
          const i = {};
          t.verifyingContract &&
            !(0, s.Lo)(t.verifyingContract, 20) &&
            (i[t.verifyingContract] = '0x');
          const a = I.from(n);
          a.visit(
            e,
            (t, n) => ('address' !== t || (0, s.Lo)(n, 20) || (i[n] = '0x'), n)
          );
          for (const s in i) i[s] = await r(s);
          return (
            t.verifyingContract &&
              i[t.verifyingContract] &&
              (t.verifyingContract = i[t.verifyingContract]),
            {
              domain: t,
              value: (e = a.visit(e, (t, n) =>
                'address' === t && i[n] ? i[n] : n
              )),
            }
          );
        }
        static getPayload(t, n, e) {
          I.hashDomain(t);
          const r = {},
            i = [];
          g.forEach((n) => {
            const e = t[n];
            null != e && ((r[n] = S[n](e)), i.push({ name: n, type: v[n] }));
          });
          const c = I.from(n);
          n = c.types;
          const f = Object.assign({}, n);
          return (
            (0, a.MR)(
              null == f.EIP712Domain,
              'types must not contain EIP712Domain type',
              'types.EIP712Domain',
              n
            ),
            (f.EIP712Domain = i),
            c.encode(e),
            {
              types: f,
              domain: r,
              primaryType: c.primaryType,
              message: c.visit(e, (t, n) => {
                if (t.match(/^bytes(\d*)/)) return (0, s.c$)((0, s.q5)(n));
                if (t.match(/^u?int/)) return (0, o.Ab)(n).toString();
                switch (t) {
                  case 'address':
                    return n.toLowerCase();
                  case 'bool':
                    return !!n;
                  case 'string':
                    return (
                      (0, a.MR)(
                        'string' == typeof n,
                        'invalid string',
                        'value',
                        n
                      ),
                      n
                    );
                }
                (0, a.MR)(!1, 'unsupported type', 'type', t);
              }),
            }
          );
        }
      }
    },
    6637(t, n, e) {
      e.d(n, { id: () => s });
      var r = e(8757),
        i = e(3536);
      function s(t) {
        return (0, r.S)((0, i.YW)(t));
      }
    },
    7387(t, n, e) {
      e.d(n, { Wh: () => l, kM: () => y });
      var r = e(8757),
        i = e(8227),
        s = e(536),
        a = e(3536),
        o = e(1651);
      const c = new Uint8Array(32);
      function f(t) {
        return (
          (0, s.MR)(
            0 !== t.length,
            'invalid ENS name; empty component',
            'comp',
            t
          ),
          t
        );
      }
      function u(t) {
        const n = (0, a.YW)(
            ((t) => {
              try {
                if (0 === t.length) throw new Error('empty label');
                return (0, o.tt)(t);
              } catch (n) {
                (0, s.MR)(!1, `invalid ENS name (${n.message})`, 'name', t);
              }
            })(t)
          ),
          e = [];
        if (0 === t.length) return e;
        let r = 0;
        for (let i = 0; i < n.length; i++)
          46 === n[i] && (e.push(f(n.slice(r, i))), (r = i + 1));
        return (
          (0, s.MR)(
            r < n.length,
            'invalid ENS name; empty component',
            'name',
            t
          ),
          e.push(f(n.slice(r))),
          e
        );
      }
      function y(t) {
        ((0, s.MR)(
          'string' == typeof t,
          'invalid ENS name; not a string',
          'name',
          t
        ),
          (0, s.MR)(t.length, 'invalid ENS name (empty label)', 'name', t));
        let n = c;
        const e = u(t);
        for (; e.length; ) n = (0, r.S)((0, i.xW)([n, (0, r.S)(e.pop())]));
        return (0, i.c$)(n);
      }
      function l(t, n) {
        const e = null != n ? n : 63;
        return (
          (0, s.MR)(
            e <= 255,
            'DNS encoded label cannot exceed 255',
            'length',
            e
          ),
          (0, i.c$)(
            (0, i.xW)(
              u(t).map((n) => {
                (0, s.MR)(
                  n.length <= e,
                  `label ${JSON.stringify(t)} exceeds ${e} bytes`,
                  'name',
                  t
                );
                const r = new Uint8Array(n.length + 1);
                return (r.set(n, 1), (r[0] = r.length - 1), r);
              })
            )
          ) + '00'
        );
      }
      c.fill(0);
    },
  },
]);
