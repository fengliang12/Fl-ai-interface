'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [202],
  {
    4085: (t, e, s) => {
      s.d(e, { k: () => Ct });
      var r = s(536),
        n = s(2942),
        a = s(4922),
        i = s(5357),
        o = s(1883),
        c = s(7602),
        l = s(5303),
        u = s(8466),
        h = s(3536),
        d = s(8227),
        p = s(8848),
        g = s(9163),
        f = s(3227),
        m = s(3571),
        b = s(7387),
        w = s(5093),
        y = s(2598),
        v = s(9811);
      function k(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
              ? (t = t.substring(7))
              : (0, r.MR)(!1, 'unsupported IPFS format', 'link', t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      class P {
        name;
        constructor(t) {
          (0, u.n)(this, { name: t });
        }
        connect(t) {
          return this;
        }
        supportsCoinType(t) {
          return !1;
        }
        async encodeAddress(t, e) {
          throw new Error('unsupported coin');
        }
        async decodeAddress(t, e) {
          throw new Error('unsupported coin');
        }
      }
      const N = new RegExp('^(ipfs)://(.*)$', 'i'),
        T = [
          new RegExp('^(https)://(.*)$', 'i'),
          new RegExp('^(data):(.*)$', 'i'),
          N,
          new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
        ];
      class R {
        provider;
        address;
        name;
        #t;
        #e;
        constructor(t, e, s) {
          ((0, u.n)(this, { provider: t, address: e, name: s }),
            (this.#t = null),
            (this.#e = new m.NZ(
              e,
              [
                'function supportsInterface(bytes4) view returns (bool)',
                'function resolve(bytes, bytes) view returns (bytes)',
                'function addr(bytes32) view returns (address)',
                'function addr(bytes32, uint) view returns (bytes)',
                'function text(bytes32, string) view returns (string)',
                'function contenthash(bytes32) view returns (bytes)',
              ],
              t
            )));
        }
        async supportsWildcard() {
          return (
            null == this.#t &&
              (this.#t = (async () => {
                try {
                  return await this.#e.supportsInterface('0x9061b923');
                } catch (t) {
                  if ((0, r.bJ)(t, 'CALL_EXCEPTION')) return !1;
                  throw ((this.#t = null), t);
                }
              })()),
            await this.#t
          );
        }
        async #s(t, e) {
          e = (e || []).slice();
          const s = this.#e.interface;
          e.unshift((0, b.kM)(this.name));
          let n = null;
          ((await this.supportsWildcard()) &&
            ((n = s.getFunction(t)),
            (0, r.vA)(n, 'missing fragment', 'UNKNOWN_ERROR', {
              info: { funcName: t },
            }),
            (e = [(0, b.Wh)(this.name, 255), s.encodeFunctionData(n, e)]),
            (t = 'resolve(bytes,bytes)')),
            e.push({ enableCcipRead: !0 }));
          try {
            const r = await this.#e[t](...e);
            return n ? s.decodeFunctionResult(n, r)[0] : r;
          } catch (a) {
            if (!(0, r.bJ)(a, 'CALL_EXCEPTION')) throw a;
          }
          return null;
        }
        async getAddress(t) {
          if ((null == t && (t = 60), 60 === t))
            try {
              const t = await this.#s('addr(bytes32)');
              return null == t || t === f.j ? null : t;
            } catch (i) {
              if ((0, r.bJ)(i, 'CALL_EXCEPTION')) return null;
              throw i;
            }
          if (t >= 0 && t < 2147483648) {
            let e = t + 2147483648;
            const s = await this.#s('addr(bytes32,uint)', [e]);
            if ((0, d.Lo)(s, 20)) return (0, a.b)(s);
          }
          let e = null;
          for (const r of this.provider.plugins)
            if (r instanceof P && r.supportsCoinType(t)) {
              e = r;
              break;
            }
          if (null == e) return null;
          const s = await this.#s('addr(bytes32,uint)', [t]);
          if (null == s || '0x' === s) return null;
          const n = await e.decodeAddress(t, s);
          if (null != n) return n;
          (0, r.vA)(!1, 'invalid coin data', 'UNSUPPORTED_OPERATION', {
            operation: `getAddress(${t})`,
            info: { coinType: t, data: s },
          });
        }
        async getText(t) {
          const e = await this.#s('text(bytes32,string)', [t]);
          return null == e || '0x' === e ? null : e;
        }
        async getContentHash() {
          const t = await this.#s('contenthash(bytes32)');
          if (null == t || '0x' === t) return null;
          const e = t.match(
            /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
          );
          if (e) {
            const t = 'e3010170' === e[1] ? 'ipfs' : 'ipns',
              s = parseInt(e[4], 16);
            if (e[5].length === 2 * s) return `${t}://${(0, v.R)('0x' + e[2])}`;
          }
          const s = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
          if (s && 64 === s[1].length) return `bzz://${s[1]}`;
          (0, r.vA)(
            !1,
            'invalid or unsupported content hash data',
            'UNSUPPORTED_OPERATION',
            { operation: 'getContentHash()', info: { data: t } }
          );
        }
        async getAvatar() {
          return (await this._getAvatar()).url;
        }
        async _getAvatar() {
          const t = [{ type: 'name', value: this.name }];
          try {
            const s = await this.getText('avatar');
            if (null == s)
              return (
                t.push({ type: '!avatar', value: '' }),
                { url: null, linkage: t }
              );
            t.push({ type: 'avatar', value: s });
            for (let r = 0; r < T.length; r++) {
              const n = s.match(T[r]);
              if (null == n) continue;
              const a = n[1].toLowerCase();
              switch (a) {
                case 'https':
                case 'data':
                  return (
                    t.push({ type: 'url', value: s }),
                    { linkage: t, url: s }
                  );
                case 'ipfs': {
                  const e = k(s);
                  return (
                    t.push({ type: 'ipfs', value: s }),
                    t.push({ type: 'url', value: e }),
                    { linkage: t, url: e }
                  );
                }
                case 'erc721':
                case 'erc1155': {
                  const r =
                    'erc721' === a ? 'tokenURI(uint256)' : 'uri(uint256)';
                  t.push({ type: a, value: s });
                  const i = await this.getAddress();
                  if (null == i)
                    return (
                      t.push({ type: '!owner', value: '' }),
                      { url: null, linkage: t }
                    );
                  const o = (n[2] || '').split('/');
                  if (2 !== o.length)
                    return (
                      t.push({ type: `!${a}caip`, value: n[2] || '' }),
                      { url: null, linkage: t }
                    );
                  const c = o[1],
                    l = new m.NZ(
                      o[0],
                      [
                        'function tokenURI(uint) view returns (string)',
                        'function ownerOf(uint) view returns (address)',
                        'function uri(uint) view returns (string)',
                        'function balanceOf(address, uint256) view returns (uint)',
                      ],
                      this.provider
                    );
                  if ('erc721' === a) {
                    const e = await l.ownerOf(c);
                    if (i !== e)
                      return (
                        t.push({ type: '!owner', value: e }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: 'owner', value: e });
                  } else if ('erc1155' === a) {
                    const e = await l.balanceOf(i, c);
                    if (!e)
                      return (
                        t.push({ type: '!balance', value: '0' }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: 'balance', value: e.toString() });
                  }
                  let u = await l[r](c);
                  if (null == u || '0x' === u)
                    return (
                      t.push({ type: '!metadata-url', value: '' }),
                      { url: null, linkage: t }
                    );
                  (t.push({ type: 'metadata-url-base', value: u }),
                    'erc1155' === a &&
                      ((u = u.replace('{id}', (0, p.up)(c, 32).substring(2))),
                      t.push({ type: 'metadata-url-expanded', value: u })),
                    u.match(/^ipfs:/i) && (u = k(u)),
                    t.push({ type: 'metadata-url', value: u }));
                  let h = {};
                  const f = await new g.ui(u).send();
                  f.assertOk();
                  try {
                    h = f.bodyJson;
                  } catch (e) {
                    try {
                      t.push({ type: '!metadata', value: f.bodyText });
                    } catch (e) {
                      const s = f.body;
                      return (
                        s && t.push({ type: '!metadata', value: (0, d.c$)(s) }),
                        { url: null, linkage: t }
                      );
                    }
                    return { url: null, linkage: t };
                  }
                  if (!h)
                    return (
                      t.push({ type: '!metadata', value: '' }),
                      { url: null, linkage: t }
                    );
                  t.push({ type: 'metadata', value: JSON.stringify(h) });
                  let b = h.image;
                  if ('string' != typeof b)
                    return (
                      t.push({ type: '!imageUrl', value: '' }),
                      { url: null, linkage: t }
                    );
                  if (b.match(/^(https:\/\/|data:)/i));
                  else {
                    if (null == b.match(N))
                      return (
                        t.push({ type: '!imageUrl-ipfs', value: b }),
                        { url: null, linkage: t }
                      );
                    (t.push({ type: 'imageUrl-ipfs', value: b }), (b = k(b)));
                  }
                  return (
                    t.push({ type: 'url', value: b }),
                    { linkage: t, url: b }
                  );
                }
              }
            }
          } catch (e) {}
          return { linkage: t, url: null };
        }
        static async getEnsAddress(t) {
          const e = await t.getNetwork(),
            s = e.getPlugin('org.ethers.plugins.network.Ens');
          return (
            (0, r.vA)(
              s,
              'network does not support ENS',
              'UNSUPPORTED_OPERATION',
              { operation: 'getEnsAddress', info: { network: e } }
            ),
            s.address
          );
        }
        static async #r(t, e) {
          const s = await R.getEnsAddress(t);
          try {
            const r = new m.NZ(
                s,
                ['function resolver(bytes32) view returns (address)'],
                t
              ),
              n = await r.resolver((0, b.kM)(e), { enableCcipRead: !0 });
            return n === f.j ? null : n;
          } catch (r) {
            throw r;
          }
        }
        static async fromName(t, e) {
          let s = e;
          for (;;) {
            if ('' === s || '.' === s) return null;
            if ('eth' !== e && 'eth' === s) return null;
            const r = await R.#r(t, s);
            if (null != r) {
              const n = new R(t, r, e);
              return s === e || (await n.supportsWildcard()) ? n : null;
            }
            s = s.split('.').slice(1).join('.');
          }
        }
      }
      var A = s(2703),
        x = s(6533);
      const _ = BigInt(0);
      function O(t, e) {
        return function (s) {
          return null == s ? e : t(s);
        };
      }
      function E(t, e) {
        return (s) => {
          if (e && null == s) return null;
          if (!Array.isArray(s)) throw new Error('not an array');
          return s.map((e) => t(e));
        };
      }
      function I(t, e) {
        return (s) => {
          const n = {};
          for (const i in t) {
            let o = i;
            if (e && i in e && !(o in s))
              for (const t of e[i])
                if (t in s) {
                  o = t;
                  break;
                }
            try {
              const e = t[i](s[o]);
              void 0 !== e && (n[i] = e);
            } catch (a) {
              const t = a instanceof Error ? a.message : 'not-an-error';
              (0, r.vA)(!1, `invalid value for value.${i} (${t})`, 'BAD_DATA', {
                value: s,
              });
            }
          }
          return n;
        };
      }
      function F(t) {
        return ((0, r.MR)((0, d.Lo)(t, !0), 'invalid data', 'value', t), t);
      }
      function G(t) {
        return ((0, r.MR)((0, d.Lo)(t, 32), 'invalid hash', 'value', t), t);
      }
      const L = I(
          {
            address: a.b,
            blockHash: G,
            blockNumber: p.WZ,
            data: F,
            index: p.WZ,
            removed: O(function (t) {
              switch (t) {
                case !0:
                case 'true':
                  return !0;
                case !1:
                case 'false':
                  return !1;
              }
              (0, r.MR)(
                !1,
                `invalid boolean; ${JSON.stringify(t)}`,
                'value',
                t
              );
            }, !1),
            topics: E(G),
            transactionHash: G,
            transactionIndex: p.WZ,
          },
          { index: ['logIndex'] }
        ),
        C = I(
          {
            hash: O(G),
            parentHash: G,
            parentBeaconBlockRoot: O(G, null),
            number: p.WZ,
            timestamp: p.WZ,
            nonce: O(F),
            difficulty: p.Ab,
            gasLimit: p.Ab,
            gasUsed: p.Ab,
            stateRoot: O(G, null),
            receiptsRoot: O(G, null),
            blobGasUsed: O(p.Ab, null),
            excessBlobGas: O(p.Ab, null),
            miner: O(a.b),
            prevRandao: O(G, null),
            extraData: F,
            baseFeePerGas: O(p.Ab),
          },
          { prevRandao: ['mixHash'] }
        ),
        B = I(
          {
            transactionIndex: p.WZ,
            blockNumber: p.WZ,
            transactionHash: G,
            address: a.b,
            topics: E(G),
            data: F,
            index: p.WZ,
            blockHash: G,
          },
          { index: ['logIndex'] }
        ),
        S = I(
          {
            to: O(a.b, null),
            from: O(a.b, null),
            contractAddress: O(a.b, null),
            index: p.WZ,
            root: O(d.c$),
            gasUsed: p.Ab,
            blobGasUsed: O(p.Ab, null),
            logsBloom: O(F),
            blockHash: G,
            hash: G,
            logs: E(function (t) {
              return B(t);
            }),
            blockNumber: p.WZ,
            cumulativeGasUsed: p.Ab,
            effectiveGasPrice: O(p.Ab),
            blobGasPrice: O(p.Ab, null),
            status: O(p.WZ),
            type: O(p.WZ, 0),
          },
          {
            effectiveGasPrice: ['gasPrice'],
            hash: ['transactionHash'],
            index: ['transactionIndex'],
          }
        );
      function U(t) {
        t.to &&
          (0, p.Ab)(t.to) === _ &&
          (t.to = '0x0000000000000000000000000000000000000000');
        const e = I(
          {
            hash: G,
            index: O(p.WZ, void 0),
            type: (t) => ('0x' === t || null == t ? 0 : (0, p.WZ)(t)),
            accessList: O(c.$, null),
            blobVersionedHashes: O(E(G, !0), null),
            authorizationList: O(
              E((t) => {
                let e;
                if (t.signature) e = t.signature;
                else {
                  let s = t.yParity;
                  ('0x1b' === s ? (s = 0) : '0x1c' === s && (s = 1),
                    (e = Object.assign({}, t, { yParity: s })));
                }
                return {
                  address: (0, a.b)(t.address),
                  chainId: (0, p.Ab)(t.chainId),
                  nonce: (0, p.Ab)(t.nonce),
                  signature: x.t.from(e),
                };
              }, !1),
              null
            ),
            blockHash: O(G, null),
            blockNumber: O(p.WZ, null),
            transactionIndex: O(p.WZ, null),
            from: a.b,
            gasPrice: O(p.Ab),
            maxPriorityFeePerGas: O(p.Ab),
            maxFeePerGas: O(p.Ab),
            maxFeePerBlobGas: O(p.Ab, null),
            gasLimit: p.Ab,
            to: O(a.b, null),
            value: p.Ab,
            nonce: p.WZ,
            data: F,
            creates: O(a.b, null),
            chainId: O(p.Ab, null),
          },
          { data: ['input'], gasLimit: ['gas'], index: ['transactionIndex'] }
        )(t);
        if (
          (null == e.to && null == e.creates && (e.creates = (0, A.t)(e)),
          (1 !== t.type && 2 !== t.type) ||
            null != t.accessList ||
            (e.accessList = []),
          t.signature
            ? (e.signature = x.t.from(t.signature))
            : (e.signature = x.t.from(t)),
          null == e.chainId)
        ) {
          const t = e.signature.legacyChainId;
          null != t && (e.chainId = t);
        }
        return (
          e.blockHash && (0, p.Ab)(e.blockHash) === _ && (e.blockHash = null),
          e
        );
      }
      class D {
        name;
        constructor(t) {
          (0, u.n)(this, { name: t });
        }
        clone() {
          return new D(this.name);
        }
      }
      class H extends D {
        effectiveBlock;
        txBase;
        txCreate;
        txDataZero;
        txDataNonzero;
        txAccessListStorageKey;
        txAccessListAddress;
        constructor(t, e) {
          (null == t && (t = 0),
            super(`org.ethers.network.plugins.GasCost#${t || 0}`));
          const s = { effectiveBlock: t };
          function n(t, n) {
            let a = (e || {})[t];
            (null == a && (a = n),
              (0, r.MR)(
                'number' == typeof a,
                `invalud value for ${t}`,
                'costs',
                e
              ),
              (s[t] = a));
          }
          (n('txBase', 21e3),
            n('txCreate', 32e3),
            n('txDataZero', 4),
            n('txDataNonzero', 16),
            n('txAccessListStorageKey', 1900),
            n('txAccessListAddress', 2400),
            (0, u.n)(this, s));
        }
        clone() {
          return new H(this.effectiveBlock, this);
        }
      }
      class M extends D {
        address;
        targetNetwork;
        constructor(t, e) {
          (super('org.ethers.plugins.network.Ens'),
            (0, u.n)(this, {
              address: t || '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
              targetNetwork: null == e ? 1 : e,
            }));
        }
        clone() {
          return new M(this.address, this.targetNetwork);
        }
      }
      class z extends D {
        #n;
        #a;
        get url() {
          return this.#n;
        }
        get processFunc() {
          return this.#a;
        }
        constructor(t, e) {
          (super('org.ethers.plugins.network.FetchUrlFeeDataPlugin'),
            (this.#n = t),
            (this.#a = e));
        }
        clone() {
          return this;
        }
      }
      const $ = new Map();
      class Z {
        #i;
        #o;
        #c;
        constructor(t, e) {
          ((this.#i = t), (this.#o = (0, p.Ab)(e)), (this.#c = new Map()));
        }
        toJSON() {
          return { name: this.name, chainId: String(this.chainId) };
        }
        get name() {
          return this.#i;
        }
        set name(t) {
          this.#i = t;
        }
        get chainId() {
          return this.#o;
        }
        set chainId(t) {
          this.#o = (0, p.Ab)(t, 'chainId');
        }
        matches(t) {
          if (null == t) return !1;
          if ('string' == typeof t) {
            try {
              return this.chainId === (0, p.Ab)(t);
            } catch (e) {}
            return this.name === t;
          }
          if ('number' == typeof t || 'bigint' == typeof t) {
            try {
              return this.chainId === (0, p.Ab)(t);
            } catch (e) {}
            return !1;
          }
          if ('object' == typeof t) {
            if (null != t.chainId) {
              try {
                return this.chainId === (0, p.Ab)(t.chainId);
              } catch (e) {}
              return !1;
            }
            return null != t.name && this.name === t.name;
          }
          return !1;
        }
        get plugins() {
          return Array.from(this.#c.values());
        }
        attachPlugin(t) {
          if (this.#c.get(t.name))
            throw new Error(`cannot replace existing plugin: ${t.name} `);
          return (this.#c.set(t.name, t.clone()), this);
        }
        getPlugin(t) {
          return this.#c.get(t) || null;
        }
        getPlugins(t) {
          return this.plugins.filter((e) => e.name.split('#')[0] === t);
        }
        clone() {
          const t = new Z(this.name, this.chainId);
          return (
            this.plugins.forEach((e) => {
              t.attachPlugin(e.clone());
            }),
            t
          );
        }
        computeIntrinsicGas(t) {
          const e =
            this.getPlugin('org.ethers.plugins.network.GasCost') || new H();
          let s = e.txBase;
          if ((null == t.to && (s += e.txCreate), t.data))
            for (let r = 2; r < t.data.length; r += 2)
              '00' === t.data.substring(r, r + 2)
                ? (s += e.txDataZero)
                : (s += e.txDataNonzero);
          if (t.accessList) {
            const r = (0, c.$)(t.accessList);
            for (const t in r)
              s +=
                e.txAccessListAddress +
                e.txAccessListStorageKey * r[t].storageKeys.length;
          }
          return s;
        }
        static from(t) {
          if (
            ((function () {
              function t(t, e, s) {
                const r = function () {
                  const r = new Z(t, e);
                  return (
                    null != s.ensNetwork &&
                      r.attachPlugin(new M(null, s.ensNetwork)),
                    r.attachPlugin(new H()),
                    (s.plugins || []).forEach((t) => {
                      r.attachPlugin(t);
                    }),
                    r
                  );
                };
                (Z.register(t, r),
                  Z.register(e, r),
                  s.altNames &&
                    s.altNames.forEach((t) => {
                      Z.register(t, r);
                    }));
              }
              j ||
                ((j = !0),
                t('mainnet', 1, { ensNetwork: 1, altNames: ['homestead'] }),
                t('ropsten', 3, { ensNetwork: 3 }),
                t('rinkeby', 4, { ensNetwork: 4 }),
                t('goerli', 5, { ensNetwork: 5 }),
                t('kovan', 42, { ensNetwork: 42 }),
                t('sepolia', 11155111, { ensNetwork: 11155111 }),
                t('holesky', 17e3, { ensNetwork: 17e3 }),
                t('classic', 61, {}),
                t('classicKotti', 6, {}),
                t('arbitrum', 42161, { ensNetwork: 1 }),
                t('arbitrum-goerli', 421613, {}),
                t('arbitrum-sepolia', 421614, {}),
                t('base', 8453, { ensNetwork: 1 }),
                t('base-goerli', 84531, {}),
                t('base-sepolia', 84532, {}),
                t('bnb', 56, { ensNetwork: 1 }),
                t('bnbt', 97, {}),
                t('linea', 59144, { ensNetwork: 1 }),
                t('linea-goerli', 59140, {}),
                t('linea-sepolia', 59141, {}),
                t('matic', 137, {
                  ensNetwork: 1,
                  plugins: [W('https://gasstation.polygon.technology/v2')],
                }),
                t('matic-amoy', 80002, {}),
                t('matic-mumbai', 80001, {
                  altNames: ['maticMumbai', 'maticmum'],
                  plugins: [
                    W('https://gasstation-testnet.polygon.technology/v2'),
                  ],
                }),
                t('optimism', 10, { ensNetwork: 1, plugins: [] }),
                t('optimism-goerli', 420, {}),
                t('optimism-sepolia', 11155420, {}),
                t('xdai', 100, { ensNetwork: 1 }));
            })(),
            null == t)
          )
            return Z.from('mainnet');
          if (
            ('number' == typeof t && (t = BigInt(t)),
            'string' == typeof t || 'bigint' == typeof t)
          ) {
            const e = $.get(t);
            if (e) return e();
            if ('bigint' == typeof t) return new Z('unknown', t);
            (0, r.MR)(!1, 'unknown network', 'network', t);
          }
          if ('function' == typeof t.clone) return t.clone();
          if ('object' == typeof t) {
            (0, r.MR)(
              'string' == typeof t.name && 'number' == typeof t.chainId,
              'invalid network object name or chainId',
              'network',
              t
            );
            const e = new Z(t.name, t.chainId);
            return (
              (t.ensAddress || null != t.ensNetwork) &&
                e.attachPlugin(new M(t.ensAddress, t.ensNetwork)),
              e
            );
          }
          (0, r.MR)(!1, 'invalid network', 'network', t);
        }
        static register(t, e) {
          'number' == typeof t && (t = BigInt(t));
          const s = $.get(t);
          (s &&
            (0, r.MR)(
              !1,
              `conflicting network for ${JSON.stringify(s.name)}`,
              'nameOrChainId',
              t
            ),
            $.set(t, e));
        }
      }
      function J(t, e) {
        const s = String(t);
        if (!s.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`);
        const r = s.split('.');
        if ((1 === r.length && r.push(''), 2 !== r.length))
          throw new Error(`invalid gwei value: ${t}`);
        for (; r[1].length < e; ) r[1] += '0';
        if (r[1].length > 9) {
          let t = BigInt(r[1].substring(0, 9));
          (r[1].substring(9).match(/^0+$/) || t++, (r[1] = t.toString()));
        }
        return BigInt(r[0] + r[1]);
      }
      function W(t) {
        return new z(t, async (t, e, s) => {
          let n;
          s.setHeader('User-Agent', 'ethers');
          try {
            const [e, r] = await Promise.all([s.send(), t()]);
            n = e;
            const a = n.bodyJson.standard;
            return {
              gasPrice: r.gasPrice,
              maxFeePerGas: J(a.maxFee, 9),
              maxPriorityFeePerGas: J(a.maxPriorityFee, 9),
            };
          } catch (a) {
            (0, r.vA)(
              !1,
              `error encountered with polygon gas station (${JSON.stringify(s.url)})`,
              'SERVER_ERROR',
              { request: s, response: n, error: a }
            );
          }
        });
      }
      let j = !1;
      var q = s(8931);
      function V(t) {
        return JSON.parse(JSON.stringify(t));
      }
      class K {
        #l;
        #u;
        #h;
        #d;
        constructor(t) {
          ((this.#l = t), (this.#u = null), (this.#h = 4e3), (this.#d = -2));
        }
        get pollingInterval() {
          return this.#h;
        }
        set pollingInterval(t) {
          this.#h = t;
        }
        async #p() {
          try {
            const t = await this.#l.getBlockNumber();
            if (-2 === this.#d) return void (this.#d = t);
            if (t !== this.#d) {
              for (let e = this.#d + 1; e <= t; e++) {
                if (null == this.#u) return;
                await this.#l.emit('block', e);
              }
              this.#d = t;
            }
          } catch (t) {}
          null != this.#u &&
            (this.#u = this.#l._setTimeout(this.#p.bind(this), this.#h));
        }
        start() {
          this.#u ||
            ((this.#u = this.#l._setTimeout(this.#p.bind(this), this.#h)),
            this.#p());
        }
        stop() {
          this.#u && (this.#l._clearTimeout(this.#u), (this.#u = null));
        }
        pause(t) {
          (this.stop(), t && (this.#d = -2));
        }
        resume() {
          this.start();
        }
      }
      class X {
        #l;
        #p;
        #g;
        constructor(t) {
          ((this.#l = t),
            (this.#g = !1),
            (this.#p = (t) => {
              this._poll(t, this.#l);
            }));
        }
        async _poll(t, e) {
          throw new Error('sub-classes must override this');
        }
        start() {
          this.#g ||
            ((this.#g = !0), this.#p(-2), this.#l.on('block', this.#p));
        }
        stop() {
          this.#g && ((this.#g = !1), this.#l.off('block', this.#p));
        }
        pause(t) {
          this.stop();
        }
        resume() {
          this.start();
        }
      }
      class Y extends X {
        #f;
        #m;
        constructor(t, e) {
          (super(t), (this.#f = e), (this.#m = -2));
        }
        pause(t) {
          (t && (this.#m = -2), super.pause(t));
        }
        async _poll(t, e) {
          const s = await e.getBlock(this.#f);
          null != s &&
            (-2 === this.#m
              ? (this.#m = s.number)
              : s.number > this.#m &&
                (e.emit(this.#f, s.number), (this.#m = s.number)));
        }
      }
      class Q extends X {
        #b;
        constructor(t, e) {
          (super(t), (this.#b = V(e)));
        }
        async _poll(t, e) {
          throw new Error('@TODO');
        }
      }
      class tt extends X {
        #w;
        constructor(t, e) {
          (super(t), (this.#w = e));
        }
        async _poll(t, e) {
          const s = await e.getTransactionReceipt(this.#w);
          s && e.emit(this.#w, s);
        }
      }
      class et {
        #l;
        #b;
        #u;
        #g;
        #d;
        constructor(t, e) {
          ((this.#l = t),
            (this.#b = V(e)),
            (this.#u = this.#p.bind(this)),
            (this.#g = !1),
            (this.#d = -2));
        }
        async #p(t) {
          if (-2 === this.#d) return;
          const e = V(this.#b);
          ((e.fromBlock = this.#d + 1), (e.toBlock = t));
          const s = await this.#l.getLogs(e);
          if (0 !== s.length)
            for (const r of s)
              (this.#l.emit(this.#b, r), (this.#d = r.blockNumber));
          else this.#d < t - 60 && (this.#d = t - 60);
        }
        start() {
          this.#g ||
            ((this.#g = !0),
            -2 === this.#d &&
              this.#l.getBlockNumber().then((t) => {
                this.#d = t;
              }),
            this.#l.on('block', this.#u));
        }
        stop() {
          this.#g && ((this.#g = !1), this.#l.off('block', this.#u));
        }
        pause(t) {
          (this.stop(), t && (this.#d = -2));
        }
        resume() {
          this.start();
        }
      }
      const st = BigInt(2);
      function rt(t) {
        return t && 'function' == typeof t.then;
      }
      function nt(t, e) {
        return (
          t +
          ':' +
          JSON.stringify(e, (t, e) => {
            if (null == e) return 'null';
            if ('bigint' == typeof e) return `bigint:${e.toString()}`;
            if ('string' == typeof e) return e.toLowerCase();
            if ('object' == typeof e && !Array.isArray(e)) {
              const t = Object.keys(e);
              return (t.sort(), t.reduce((t, s) => ((t[s] = e[s]), t), {}));
            }
            return e;
          })
        );
      }
      class at {
        name;
        constructor(t) {
          (0, u.n)(this, { name: t });
        }
        start() {}
        stop() {}
        pause(t) {}
        resume() {}
      }
      function it(t) {
        return ((t = Array.from(new Set(t).values())).sort(), t);
      }
      async function ot(t, e) {
        if (null == t) throw new Error('invalid event');
        if ((Array.isArray(t) && (t = { topics: t }), 'string' == typeof t))
          switch (t) {
            case 'block':
            case 'debug':
            case 'error':
            case 'finalized':
            case 'network':
            case 'pending':
            case 'safe':
              return { type: t, tag: t };
          }
        if ((0, d.Lo)(t, 32)) {
          const e = t.toLowerCase();
          return { type: 'transaction', tag: nt('tx', { hash: e }), hash: e };
        }
        if (t.orphan) {
          const e = t;
          return {
            type: 'orphan',
            tag: nt('orphan', e),
            filter: ((s = e), JSON.parse(JSON.stringify(s))),
          };
        }
        var s;
        if (t.address || t.topics) {
          const s = t,
            r = {
              topics: (s.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                    ? it(t.map((t) => t.toLowerCase()))
                    : t.toLowerCase()
              ),
            };
          if (s.address) {
            const t = [],
              n = [],
              a = (s) => {
                (0, d.Lo)(s)
                  ? t.push(s)
                  : n.push(
                      (async () => {
                        t.push(await (0, i.tG)(s, e));
                      })()
                    );
              };
            (Array.isArray(s.address) ? s.address.forEach(a) : a(s.address),
              n.length && (await Promise.all(n)),
              (r.address = it(t.map((t) => t.toLowerCase()))));
          }
          return { filter: r, tag: nt('event', r), type: 'event' };
        }
        (0, r.MR)(!1, 'unknown ProviderEvent', 'event', t);
      }
      function ct() {
        return new Date().getTime();
      }
      const lt = { cacheTimeout: 250, pollingInterval: 4e3 };
      class ut {
        #y;
        #c;
        #v;
        #k;
        #P;
        #N;
        #T;
        #R;
        #A;
        #x;
        #_;
        #O;
        constructor(t, e) {
          if (((this.#O = Object.assign({}, lt, e || {})), 'any' === t))
            ((this.#N = !0), (this.#P = null));
          else if (t) {
            const e = Z.from(t);
            ((this.#N = !1),
              (this.#P = Promise.resolve(e)),
              setTimeout(() => {
                this.emit('network', e, null);
              }, 0));
          } else ((this.#N = !1), (this.#P = null));
          ((this.#R = -1),
            (this.#T = new Map()),
            (this.#y = new Map()),
            (this.#c = new Map()),
            (this.#v = null),
            (this.#k = !1),
            (this.#A = 1),
            (this.#x = new Map()),
            (this.#_ = !1));
        }
        get pollingInterval() {
          return this.#O.pollingInterval;
        }
        get provider() {
          return this;
        }
        get plugins() {
          return Array.from(this.#c.values());
        }
        attachPlugin(t) {
          if (this.#c.get(t.name))
            throw new Error(`cannot replace existing plugin: ${t.name} `);
          return (this.#c.set(t.name, t.connect(this)), this);
        }
        getPlugin(t) {
          return this.#c.get(t) || null;
        }
        get disableCcipRead() {
          return this.#_;
        }
        set disableCcipRead(t) {
          this.#_ = !!t;
        }
        async #E(t) {
          const e = this.#O.cacheTimeout;
          if (e < 0) return await this._perform(t);
          const s = nt(t.method, t);
          let r = this.#T.get(s);
          return (
            r ||
              ((r = this._perform(t)),
              this.#T.set(s, r),
              setTimeout(() => {
                this.#T.get(s) === r && this.#T.delete(s);
              }, e)),
            await r
          );
        }
        async ccipReadFetch(t, e, s) {
          if (this.disableCcipRead || 0 === s.length || null == t.to)
            return null;
          const n = t.to.toLowerCase(),
            a = e.toLowerCase(),
            i = [];
          for (let c = 0; c < s.length; c++) {
            const e = s[c],
              l = e.replace('{sender}', n).replace('{data}', a),
              u = new g.ui(l);
            (-1 === e.indexOf('{data}') && (u.body = { data: a, sender: n }),
              this.emit('debug', {
                action: 'sendCcipReadFetchRequest',
                request: u,
                index: c,
                urls: s,
              }));
            let h,
              d = 'unknown error';
            try {
              h = await u.send();
            } catch (o) {
              (i.push(o.message),
                this.emit('debug', {
                  action: 'receiveCcipReadFetchError',
                  request: u,
                  result: { error: o },
                }));
              continue;
            }
            try {
              const t = h.bodyJson;
              if (t.data)
                return (
                  this.emit('debug', {
                    action: 'receiveCcipReadFetchResult',
                    request: u,
                    result: t,
                  }),
                  t.data
                );
              (t.message && (d = t.message),
                this.emit('debug', {
                  action: 'receiveCcipReadFetchError',
                  request: u,
                  result: t,
                }));
            } catch (o) {}
            ((0, r.vA)(
              h.statusCode < 400 || h.statusCode >= 500,
              `response not found during CCIP fetch: ${d}`,
              'OFFCHAIN_FAULT',
              {
                reason: '404_MISSING_RESOURCE',
                transaction: t,
                info: { url: e, errorMessage: d },
              }
            ),
              i.push(d));
          }
          (0, r.vA)(
            !1,
            `error encountered during CCIP fetch: ${i.map((t) => JSON.stringify(t)).join(', ')}`,
            'OFFCHAIN_FAULT',
            {
              reason: '500_SERVER_ERROR',
              transaction: t,
              info: { urls: s, errorMessages: i },
            }
          );
        }
        _wrapBlock(t, e) {
          return new q.eB(
            (function (t) {
              const e = C(t);
              return (
                (e.transactions = t.transactions.map((t) =>
                  'string' == typeof t ? t : U(t)
                )),
                e
              );
            })(t),
            this
          );
        }
        _wrapLog(t, e) {
          return new q.tG(
            (function (t) {
              return L(t);
            })(t),
            this
          );
        }
        _wrapTransactionReceipt(t, e) {
          return new q.z5(
            (function (t) {
              return S(t);
            })(t),
            this
          );
        }
        _wrapTransactionResponse(t, e) {
          return new q.uI(U(t), this);
        }
        _detectNetwork() {
          (0, r.vA)(
            !1,
            'sub-classes must implement this',
            'UNSUPPORTED_OPERATION',
            { operation: '_detectNetwork' }
          );
        }
        async _perform(t) {
          (0, r.vA)(
            !1,
            `unsupported method: ${t.method}`,
            'UNSUPPORTED_OPERATION',
            { operation: t.method, info: t }
          );
        }
        async getBlockNumber() {
          const t = (0, p.WZ)(
            await this.#E({ method: 'getBlockNumber' }),
            '%response'
          );
          return (this.#R >= 0 && (this.#R = t), t);
        }
        _getAddress(t) {
          return (0, i.tG)(t, this);
        }
        _getBlockTag(t) {
          if (null == t) return 'latest';
          switch (t) {
            case 'earliest':
              return '0x0';
            case 'finalized':
            case 'latest':
            case 'pending':
            case 'safe':
              return t;
          }
          return (0, d.Lo)(t)
            ? (0, d.Lo)(t, 32)
              ? t
              : (0, p.nD)(t)
            : ('bigint' == typeof t && (t = (0, p.WZ)(t, 'blockTag')),
              'number' == typeof t
                ? t >= 0
                  ? (0, p.nD)(t)
                  : this.#R >= 0
                    ? (0, p.nD)(this.#R + t)
                    : this.getBlockNumber().then((e) => (0, p.nD)(e + t))
                : void (0, r.MR)(!1, 'invalid blockTag', 'blockTag', t));
        }
        _getFilter(t) {
          const e = (t.topics || []).map((t) =>
              null == t
                ? null
                : Array.isArray(t)
                  ? it(t.map((t) => t.toLowerCase()))
                  : t.toLowerCase()
            ),
            s = 'blockHash' in t ? t.blockHash : void 0,
            r = (t, r, n) => {
              let a;
              switch (t.length) {
                case 0:
                  break;
                case 1:
                  a = t[0];
                  break;
                default:
                  (t.sort(), (a = t));
              }
              if (s && (null != r || null != n))
                throw new Error('invalid filter');
              const i = {};
              return (
                a && (i.address = a),
                e.length && (i.topics = e),
                r && (i.fromBlock = r),
                n && (i.toBlock = n),
                s && (i.blockHash = s),
                i
              );
            };
          let n,
            a,
            i = [];
          if (t.address)
            if (Array.isArray(t.address))
              for (const o of t.address) i.push(this._getAddress(o));
            else i.push(this._getAddress(t.address));
          return (
            'fromBlock' in t && (n = this._getBlockTag(t.fromBlock)),
            'toBlock' in t && (a = this._getBlockTag(t.toBlock)),
            i.filter((t) => 'string' != typeof t).length ||
            (null != n && 'string' != typeof n) ||
            (null != a && 'string' != typeof a)
              ? Promise.all([Promise.all(i), n, a]).then((t) =>
                  r(t[0], t[1], t[2])
                )
              : r(i, n, a)
          );
        }
        _getTransactionRequest(t) {
          const e = (0, q.VS)(t),
            s = [];
          if (
            (['to', 'from'].forEach((t) => {
              if (null == e[t]) return;
              const r = (0, i.tG)(e[t], this);
              rt(r)
                ? s.push(
                    (async function () {
                      e[t] = await r;
                    })()
                  )
                : (e[t] = r);
            }),
            null != e.blockTag)
          ) {
            const t = this._getBlockTag(e.blockTag);
            rt(t)
              ? s.push(
                  (async function () {
                    e.blockTag = await t;
                  })()
                )
              : (e.blockTag = t);
          }
          return s.length
            ? (async function () {
                return (await Promise.all(s), e);
              })()
            : e;
        }
        async getNetwork() {
          if (null == this.#P) {
            const t = (async () => {
              try {
                const t = await this._detectNetwork();
                return (this.emit('network', t, null), t);
              } catch (e) {
                throw (this.#P === t && (this.#P = null), e);
              }
            })();
            return ((this.#P = t), (await t).clone());
          }
          const t = this.#P,
            [e, s] = await Promise.all([t, this._detectNetwork()]);
          return (
            e.chainId !== s.chainId &&
              (this.#N
                ? (this.emit('network', s, e),
                  this.#P === t && (this.#P = Promise.resolve(s)))
                : (0, r.vA)(
                    !1,
                    `network changed: ${e.chainId} => ${s.chainId} `,
                    'NETWORK_ERROR',
                    { event: 'changed' }
                  )),
            e.clone()
          );
        }
        async getFeeData() {
          const t = await this.getNetwork(),
            e = async () => {
              const {
                _block: e,
                gasPrice: s,
                priorityFee: r,
              } = await (0, u.k)({
                _block: this.#I('latest', !1),
                gasPrice: (async () => {
                  try {
                    const t = await this.#E({ method: 'getGasPrice' });
                    return (0, p.Ab)(t, '%response');
                  } catch (t) {}
                  return null;
                })(),
                priorityFee: (async () => {
                  try {
                    const t = await this.#E({ method: 'getPriorityFee' });
                    return (0, p.Ab)(t, '%response');
                  } catch (t) {}
                  return null;
                })(),
              });
              let n = null,
                a = null;
              const i = this._wrapBlock(e, t);
              return (
                i &&
                  i.baseFeePerGas &&
                  ((a = null != r ? r : BigInt('1000000000')),
                  (n = i.baseFeePerGas * st + a)),
                new q.J9(s, n, a)
              );
            },
            s = t.getPlugin('org.ethers.plugins.network.FetchUrlFeeDataPlugin');
          if (s) {
            const t = new g.ui(s.url),
              r = await s.processFunc(e, this, t);
            return new q.J9(r.gasPrice, r.maxFeePerGas, r.maxPriorityFeePerGas);
          }
          return await e();
        }
        async estimateGas(t) {
          let e = this._getTransactionRequest(t);
          return (
            rt(e) && (e = await e),
            (0, p.Ab)(
              await this.#E({ method: 'estimateGas', transaction: e }),
              '%response'
            )
          );
        }
        async #F(t, e, s) {
          (0, r.vA)(
            s < 10,
            'CCIP read exceeded maximum redirections',
            'OFFCHAIN_FAULT',
            {
              reason: 'TOO_MANY_REDIRECTS',
              transaction: Object.assign({}, t, {
                blockTag: e,
                enableCcipRead: !0,
              }),
            }
          );
          const n = (0, q.VS)(t);
          try {
            return (0, d.c$)(
              await this._perform({
                method: 'call',
                transaction: n,
                blockTag: e,
              })
            );
          } catch (a) {
            if (
              !this.disableCcipRead &&
              (0, r.E)(a) &&
              a.data &&
              s >= 0 &&
              'latest' === e &&
              null != n.to &&
              '0x556f1830' === (0, d.ZG)(a.data, 0, 4)
            ) {
              const t = a.data,
                o = await (0, i.tG)(n.to, this);
              let c;
              try {
                c = (function (t) {
                  const e = {
                    sender: '',
                    urls: [],
                    calldata: '',
                    selector: '',
                    extraData: '',
                    errorArgs: [],
                  };
                  (0, r.vA)(
                    (0, d.pO)(t) >= 160,
                    'insufficient OffchainLookup data',
                    'OFFCHAIN_FAULT',
                    { reason: 'insufficient OffchainLookup data' }
                  );
                  const s = (0, d.ZG)(t, 0, 32);
                  ((0, r.vA)(
                    (0, d.ZG)(s, 0, 12) === (0, d.ZG)(bt, 0, 12),
                    'corrupt OffchainLookup sender',
                    'OFFCHAIN_FAULT',
                    { reason: 'corrupt OffchainLookup sender' }
                  ),
                    (e.sender = (0, d.ZG)(s, 12)));
                  try {
                    const s = [],
                      r = (0, p.WZ)((0, d.ZG)(t, 32, 64)),
                      n = (0, p.WZ)((0, d.ZG)(t, r, r + 32)),
                      a = (0, d.ZG)(t, r + 32);
                    for (let t = 0; t < n; t++) {
                      const e = ht(a, 32 * t);
                      if (null == e) throw new Error('abort');
                      s.push(e);
                    }
                    e.urls = s;
                  } catch (a) {
                    (0, r.vA)(
                      !1,
                      'corrupt OffchainLookup urls',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup urls' }
                    );
                  }
                  try {
                    const s = dt(t, 64);
                    if (null == s) throw new Error('abort');
                    e.calldata = s;
                  } catch (a) {
                    (0, r.vA)(
                      !1,
                      'corrupt OffchainLookup calldata',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup calldata' }
                    );
                  }
                  ((0, r.vA)(
                    (0, d.ZG)(t, 100, 128) === (0, d.ZG)(bt, 0, 28),
                    'corrupt OffchainLookup callbaackSelector',
                    'OFFCHAIN_FAULT',
                    { reason: 'corrupt OffchainLookup callbaackSelector' }
                  ),
                    (e.selector = (0, d.ZG)(t, 96, 100)));
                  try {
                    const s = dt(t, 128);
                    if (null == s) throw new Error('abort');
                    e.extraData = s;
                  } catch (a) {
                    (0, r.vA)(
                      !1,
                      'corrupt OffchainLookup extraData',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup extraData' }
                    );
                  }
                  return (
                    (e.errorArgs = 'sender,urls,calldata,selector,extraData'
                      .split(/,/)
                      .map((t) => e[t])),
                    e
                  );
                })((0, d.ZG)(a.data, 4));
              } catch (a) {
                (0, r.vA)(!1, a.message, 'OFFCHAIN_FAULT', {
                  reason: 'BAD_DATA',
                  transaction: n,
                  info: { data: t },
                });
              }
              (0, r.vA)(
                c.sender.toLowerCase() === o.toLowerCase(),
                'CCIP Read sender mismatch',
                'CALL_EXCEPTION',
                {
                  action: 'call',
                  data: t,
                  reason: 'OffchainLookup',
                  transaction: n,
                  invocation: null,
                  revert: {
                    signature:
                      'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    name: 'OffchainLookup',
                    args: c.errorArgs,
                  },
                }
              );
              const l = await this.ccipReadFetch(n, c.calldata, c.urls);
              (0, r.vA)(
                null != l,
                'CCIP Read failed to fetch data',
                'OFFCHAIN_FAULT',
                {
                  reason: 'FETCH_FAILED',
                  transaction: n,
                  info: { data: a.data, errorArgs: c.errorArgs },
                }
              );
              const u = {
                to: o,
                data: (0, d.xW)([c.selector, mt([l, c.extraData])]),
              };
              this.emit('debug', {
                action: 'sendCcipReadCall',
                transaction: u,
              });
              try {
                const t = await this.#F(u, e, s + 1);
                return (
                  this.emit('debug', {
                    action: 'receiveCcipReadCallResult',
                    transaction: Object.assign({}, u),
                    result: t,
                  }),
                  t
                );
              } catch (a) {
                throw (
                  this.emit('debug', {
                    action: 'receiveCcipReadCallError',
                    transaction: Object.assign({}, u),
                    error: a,
                  }),
                  a
                );
              }
            }
            throw a;
          }
        }
        async #G(t) {
          const { value: e } = await (0, u.k)({
            network: this.getNetwork(),
            value: t,
          });
          return e;
        }
        async call(t) {
          const { tx: e, blockTag: s } = await (0, u.k)({
            tx: this._getTransactionRequest(t),
            blockTag: this._getBlockTag(t.blockTag),
          });
          return await this.#G(this.#F(e, s, t.enableCcipRead ? 0 : -1));
        }
        async #L(t, e, s) {
          let r = this._getAddress(e),
            n = this._getBlockTag(s);
          return (
            ('string' == typeof r && 'string' == typeof n) ||
              ([r, n] = await Promise.all([r, n])),
            await this.#G(
              this.#E(Object.assign(t, { address: r, blockTag: n }))
            )
          );
        }
        async getBalance(t, e) {
          return (0, p.Ab)(
            await this.#L({ method: 'getBalance' }, t, e),
            '%response'
          );
        }
        async getTransactionCount(t, e) {
          return (0, p.WZ)(
            await this.#L({ method: 'getTransactionCount' }, t, e),
            '%response'
          );
        }
        async getCode(t, e) {
          return (0, d.c$)(await this.#L({ method: 'getCode' }, t, e));
        }
        async getStorage(t, e, s) {
          const r = (0, p.Ab)(e, 'position');
          return (0, d.c$)(
            await this.#L({ method: 'getStorage', position: r }, t, s)
          );
        }
        async broadcastTransaction(t) {
          const {
              blockNumber: e,
              hash: s,
              network: r,
            } = await (0, u.k)({
              blockNumber: this.getBlockNumber(),
              hash: this._perform({
                method: 'broadcastTransaction',
                signedTransaction: t,
              }),
              network: this.getNetwork(),
            }),
            n = w.Z.from(t);
          if (n.hash !== s)
            throw new Error('@TODO: the returned hash did not match');
          return this._wrapTransactionResponse(n, r).replaceableTransaction(e);
        }
        async #I(t, e) {
          if ((0, d.Lo)(t, 32))
            return await this.#E({
              method: 'getBlock',
              blockHash: t,
              includeTransactions: e,
            });
          let s = this._getBlockTag(t);
          return (
            'string' != typeof s && (s = await s),
            await this.#E({
              method: 'getBlock',
              blockTag: s,
              includeTransactions: e,
            })
          );
        }
        async getBlock(t, e) {
          const { network: s, params: r } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#I(t, !!e),
          });
          return null == r ? null : this._wrapBlock(r, s);
        }
        async getTransaction(t) {
          const { network: e, params: s } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#E({ method: 'getTransaction', hash: t }),
          });
          return null == s ? null : this._wrapTransactionResponse(s, e);
        }
        async getTransactionReceipt(t) {
          const { network: e, params: s } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#E({ method: 'getTransactionReceipt', hash: t }),
          });
          if (null == s) return null;
          if (null == s.gasPrice && null == s.effectiveGasPrice) {
            const e = await this.#E({ method: 'getTransaction', hash: t });
            if (null == e)
              throw new Error(
                'report this; could not find tx or effectiveGasPrice'
              );
            s.effectiveGasPrice = e.gasPrice;
          }
          return this._wrapTransactionReceipt(s, e);
        }
        async getTransactionResult(t) {
          const { result: e } = await (0, u.k)({
            network: this.getNetwork(),
            result: this.#E({ method: 'getTransactionResult', hash: t }),
          });
          return null == e ? null : (0, d.c$)(e);
        }
        async getLogs(t) {
          let e = this._getFilter(t);
          rt(e) && (e = await e);
          const { network: s, params: r } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#E({ method: 'getLogs', filter: e }),
          });
          return r.map((t) => this._wrapLog(t, s));
        }
        _getProvider(t) {
          (0, r.vA)(
            !1,
            'provider cannot connect to target network',
            'UNSUPPORTED_OPERATION',
            { operation: '_getProvider()' }
          );
        }
        async getResolver(t) {
          return await R.fromName(this, t);
        }
        async getAvatar(t) {
          const e = await this.getResolver(t);
          return e ? await e.getAvatar() : null;
        }
        async resolveName(t) {
          const e = await this.getResolver(t);
          return e ? await e.getAddress() : null;
        }
        async lookupAddress(t) {
          t = (0, a.b)(t);
          const e = (0, b.kM)(t.substring(2).toLowerCase() + '.addr.reverse');
          try {
            const s = await R.getEnsAddress(this),
              r = new m.NZ(
                s,
                ['function resolver(bytes32) view returns (address)'],
                this
              ),
              n = await r.resolver(e);
            if (null == n || n === f.j) return null;
            const a = new m.NZ(
                n,
                ['function name(bytes32) view returns (string)'],
                this
              ),
              i = await a.name(e);
            return (await this.resolveName(i)) !== t ? null : i;
          } catch (s) {
            if ((0, r.bJ)(s, 'BAD_DATA') && '0x' === s.value) return null;
            if ((0, r.bJ)(s, 'CALL_EXCEPTION')) return null;
            throw s;
          }
        }
        async waitForTransaction(t, e, s) {
          const n = null != e ? e : 1;
          return 0 === n
            ? this.getTransactionReceipt(t)
            : new Promise(async (e, a) => {
                let i = null;
                const o = async (s) => {
                  try {
                    const r = await this.getTransactionReceipt(t);
                    if (null != r && s - r.blockNumber + 1 >= n)
                      return (e(r), void (i && (clearTimeout(i), (i = null))));
                  } catch (r) {}
                  this.once('block', o);
                };
                (null != s &&
                  (i = setTimeout(() => {
                    null != i &&
                      ((i = null),
                      this.off('block', o),
                      a(
                        (0, r.xz)('timeout', 'TIMEOUT', { reason: 'timeout' })
                      ));
                  }, s)),
                  o(await this.getBlockNumber()));
              });
        }
        async waitForBlock(t) {
          (0, r.vA)(!1, 'not implemented yet', 'NOT_IMPLEMENTED', {
            operation: 'waitForBlock',
          });
        }
        _clearTimeout(t) {
          const e = this.#x.get(t);
          e && (e.timer && clearTimeout(e.timer), this.#x.delete(t));
        }
        _setTimeout(t, e) {
          null == e && (e = 0);
          const s = this.#A++,
            r = () => {
              (this.#x.delete(s), t());
            };
          if (this.paused) this.#x.set(s, { timer: null, func: r, time: e });
          else {
            const t = setTimeout(r, e);
            this.#x.set(s, { timer: t, func: r, time: ct() });
          }
          return s;
        }
        _forEachSubscriber(t) {
          for (const e of this.#y.values()) t(e.subscriber);
        }
        _getSubscriber(t) {
          switch (t.type) {
            case 'debug':
            case 'error':
            case 'network':
              return new at(t.type);
            case 'block': {
              const t = new K(this);
              return ((t.pollingInterval = this.pollingInterval), t);
            }
            case 'safe':
            case 'finalized':
              return new Y(this, t.type);
            case 'event':
              return new et(this, t.filter);
            case 'transaction':
              return new tt(this, t.hash);
            case 'orphan':
              return new Q(this, t.filter);
          }
          throw new Error(`unsupported event: ${t.type}`);
        }
        _recoverSubscriber(t, e) {
          for (const s of this.#y.values())
            if (s.subscriber === t) {
              (s.started && s.subscriber.stop(),
                (s.subscriber = e),
                s.started && e.start(),
                null != this.#v && e.pause(this.#v));
              break;
            }
        }
        async #C(t, e) {
          let s = await ot(t, this);
          return (
            'event' === s.type &&
              e &&
              e.length > 0 &&
              !0 === e[0].removed &&
              (s = await ot({ orphan: 'drop-log', log: e[0] }, this)),
            this.#y.get(s.tag) || null
          );
        }
        async #B(t) {
          const e = await ot(t, this),
            s = e.tag;
          let r = this.#y.get(s);
          return (
            r ||
              ((r = {
                subscriber: this._getSubscriber(e),
                tag: s,
                addressableMap: new WeakMap(),
                nameMap: new Map(),
                started: !1,
                listeners: [],
              }),
              this.#y.set(s, r)),
            r
          );
        }
        async on(t, e) {
          const s = await this.#B(t);
          return (
            s.listeners.push({ listener: e, once: !1 }),
            s.started ||
              (s.subscriber.start(),
              (s.started = !0),
              null != this.#v && s.subscriber.pause(this.#v)),
            this
          );
        }
        async once(t, e) {
          const s = await this.#B(t);
          return (
            s.listeners.push({ listener: e, once: !0 }),
            s.started ||
              (s.subscriber.start(),
              (s.started = !0),
              null != this.#v && s.subscriber.pause(this.#v)),
            this
          );
        }
        async emit(t, ...e) {
          const s = await this.#C(t, e);
          if (!s || 0 === s.listeners.length) return !1;
          const r = s.listeners.length;
          return (
            (s.listeners = s.listeners.filter(({ listener: s, once: r }) => {
              const n = new y.z(this, r ? null : s, t);
              try {
                s.call(this, ...e, n);
              } catch (a) {}
              return !r;
            })),
            0 === s.listeners.length &&
              (s.started && s.subscriber.stop(), this.#y.delete(s.tag)),
            r > 0
          );
        }
        async listenerCount(t) {
          if (t) {
            const e = await this.#C(t);
            return e ? e.listeners.length : 0;
          }
          let e = 0;
          for (const { listeners: s } of this.#y.values()) e += s.length;
          return e;
        }
        async listeners(t) {
          if (t) {
            const e = await this.#C(t);
            return e ? e.listeners.map(({ listener: t }) => t) : [];
          }
          let e = [];
          for (const { listeners: s } of this.#y.values())
            e = e.concat(s.map(({ listener: t }) => t));
          return e;
        }
        async off(t, e) {
          const s = await this.#C(t);
          if (!s) return this;
          if (e) {
            const t = s.listeners.map(({ listener: t }) => t).indexOf(e);
            t >= 0 && s.listeners.splice(t, 1);
          }
          return (
            (e && 0 !== s.listeners.length) ||
              (s.started && s.subscriber.stop(), this.#y.delete(s.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            const { tag: e, started: s, subscriber: r } = await this.#B(t);
            (s && r.stop(), this.#y.delete(e));
          } else
            for (const [e, { started: s, subscriber: r }] of this.#y)
              (s && r.stop(), this.#y.delete(e));
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return this.off(t, e);
        }
        get destroyed() {
          return this.#k;
        }
        destroy() {
          this.removeAllListeners();
          for (const t of this.#x.keys()) this._clearTimeout(t);
          this.#k = !0;
        }
        get paused() {
          return null != this.#v;
        }
        set paused(t) {
          !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
        }
        pause(t) {
          if (((this.#R = -1), null != this.#v)) {
            if (this.#v == !!t) return;
            (0, r.vA)(
              !1,
              'cannot change pause type; resume first',
              'UNSUPPORTED_OPERATION',
              { operation: 'pause' }
            );
          }
          (this._forEachSubscriber((e) => e.pause(t)), (this.#v = !!t));
          for (const e of this.#x.values())
            (e.timer && clearTimeout(e.timer), (e.time = ct() - e.time));
        }
        resume() {
          if (null != this.#v) {
            (this._forEachSubscriber((t) => t.resume()), (this.#v = null));
            for (const t of this.#x.values()) {
              let e = t.time;
              (e < 0 && (e = 0), (t.time = ct()), setTimeout(t.func, e));
            }
          }
        }
      }
      function ht(t, e) {
        try {
          const s = dt(t, e);
          if (s) return (0, h._v)(s);
        } catch (s) {}
        return null;
      }
      function dt(t, e) {
        if ('0x' === t) return null;
        try {
          const s = (0, p.WZ)((0, d.ZG)(t, e, e + 32)),
            r = (0, p.WZ)((0, d.ZG)(t, s, s + 32));
          return (0, d.ZG)(t, s + 32, s + 32 + r);
        } catch (s) {}
        return null;
      }
      function pt(t) {
        const e = (0, p.c4)(t);
        if (e.length > 32) throw new Error('internal; should not happen');
        const s = new Uint8Array(32);
        return (s.set(e, 32 - e.length), s);
      }
      function gt(t) {
        if (t.length % 32 == 0) return t;
        const e = new Uint8Array(32 * Math.ceil(t.length / 32));
        return (e.set(t), e);
      }
      const ft = new Uint8Array([]);
      function mt(t) {
        const e = [];
        let s = 0;
        for (let r = 0; r < t.length; r++) (e.push(ft), (s += 32));
        for (let r = 0; r < t.length; r++) {
          const n = (0, d.q5)(t[r]);
          ((e[r] = pt(s)),
            e.push(pt(n.length)),
            e.push(gt(n)),
            (s += 32 + 32 * Math.ceil(n.length / 32)));
        }
        return (0, d.xW)(e);
      }
      const bt =
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      function wt(t, e) {
        if (t.provider) return t.provider;
        (0, r.vA)(!1, 'missing provider', 'UNSUPPORTED_OPERATION', {
          operation: e,
        });
      }
      async function yt(t, e) {
        let s = (0, q.VS)(e);
        if ((null != s.to && (s.to = (0, i.tG)(s.to, t)), null != s.from)) {
          const e = s.from;
          s.from = Promise.all([t.getAddress(), (0, i.tG)(e, t)]).then(
            ([t, e]) => (
              (0, r.MR)(
                t.toLowerCase() === e.toLowerCase(),
                'transaction from mismatch',
                'tx.from',
                e
              ),
              t
            )
          );
        } else s.from = t.getAddress();
        return await (0, u.k)(s);
      }
      class vt {
        provider;
        constructor(t) {
          (0, u.n)(this, { provider: t || null });
        }
        async getNonce(t) {
          return wt(this, 'getTransactionCount').getTransactionCount(
            await this.getAddress(),
            t
          );
        }
        async populateCall(t) {
          return await yt(this, t);
        }
        async populateTransaction(t) {
          const e = wt(this, 'populateTransaction'),
            s = await yt(this, t);
          (null == s.nonce && (s.nonce = await this.getNonce('pending')),
            null == s.gasLimit && (s.gasLimit = await this.estimateGas(s)));
          const n = await this.provider.getNetwork();
          if (null != s.chainId) {
            const e = (0, p.Ab)(s.chainId);
            (0, r.MR)(
              e === n.chainId,
              'transaction chainId mismatch',
              'tx.chainId',
              t.chainId
            );
          } else s.chainId = n.chainId;
          const a = null != s.maxFeePerGas || null != s.maxPriorityFeePerGas;
          if (
            (null == s.gasPrice || (2 !== s.type && !a)
              ? (0 !== s.type && 1 !== s.type) ||
                !a ||
                (0, r.MR)(
                  !1,
                  'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                  'tx',
                  t
                )
              : (0, r.MR)(
                  !1,
                  'eip-1559 transaction do not support gasPrice',
                  'tx',
                  t
                ),
            (2 !== s.type && null != s.type) ||
              null == s.maxFeePerGas ||
              null == s.maxPriorityFeePerGas)
          )
            if (0 === s.type || 1 === s.type) {
              const t = await e.getFeeData();
              ((0, r.vA)(
                null != t.gasPrice,
                'network does not support gasPrice',
                'UNSUPPORTED_OPERATION',
                { operation: 'getGasPrice' }
              ),
                null == s.gasPrice && (s.gasPrice = t.gasPrice));
            } else {
              const t = await e.getFeeData();
              if (null == s.type)
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                  if (
                    (s.authorizationList && s.authorizationList.length
                      ? (s.type = 4)
                      : (s.type = 2),
                    null != s.gasPrice)
                  ) {
                    const t = s.gasPrice;
                    (delete s.gasPrice,
                      (s.maxFeePerGas = t),
                      (s.maxPriorityFeePerGas = t));
                  } else
                    (null == s.maxFeePerGas &&
                      (s.maxFeePerGas = t.maxFeePerGas),
                      null == s.maxPriorityFeePerGas &&
                        (s.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
                else
                  null != t.gasPrice
                    ? ((0, r.vA)(
                        !a,
                        'network does not support EIP-1559',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'populateTransaction' }
                      ),
                      null == s.gasPrice && (s.gasPrice = t.gasPrice),
                      (s.type = 0))
                    : (0, r.vA)(
                        !1,
                        'failed to get consistent fee data',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'signer.getFeeData' }
                      );
              else
                (2 !== s.type && 3 !== s.type && 4 !== s.type) ||
                  (null == s.maxFeePerGas && (s.maxFeePerGas = t.maxFeePerGas),
                  null == s.maxPriorityFeePerGas &&
                    (s.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
          else s.type = 2;
          return await (0, u.k)(s);
        }
        async populateAuthorization(t) {
          const e = Object.assign({}, t);
          return (
            null == e.chainId &&
              (e.chainId = (await wt(this, 'getNetwork').getNetwork()).chainId),
            null == e.nonce && (e.nonce = await this.getNonce()),
            e
          );
        }
        async estimateGas(t) {
          return wt(this, 'estimateGas').estimateGas(
            await this.populateCall(t)
          );
        }
        async call(t) {
          return wt(this, 'call').call(await this.populateCall(t));
        }
        async resolveName(t) {
          const e = wt(this, 'resolveName');
          return await e.resolveName(t);
        }
        async sendTransaction(t) {
          const e = wt(this, 'sendTransaction'),
            s = await this.populateTransaction(t);
          delete s.from;
          const r = w.Z.from(s);
          return await e.broadcastTransaction(await this.signTransaction(r));
        }
        authorize(t) {
          (0, r.vA)(
            !1,
            'authorization not implemented for this signer',
            'UNSUPPORTED_OPERATION',
            { operation: 'authorize' }
          );
        }
      }
      class kt {
        #l;
        #S;
        #u;
        #g;
        #U;
        #D;
        constructor(t) {
          ((this.#l = t),
            (this.#S = null),
            (this.#u = this.#p.bind(this)),
            (this.#g = !1),
            (this.#U = null),
            (this.#D = !1));
        }
        _subscribe(t) {
          throw new Error('subclasses must override this');
        }
        _emitResults(t, e) {
          throw new Error('subclasses must override this');
        }
        _recover(t) {
          throw new Error('subclasses must override this');
        }
        async #p(t) {
          try {
            null == this.#S && (this.#S = this._subscribe(this.#l));
            let t = null;
            try {
              t = await this.#S;
            } catch (e) {
              if (
                !(0, r.bJ)(e, 'UNSUPPORTED_OPERATION') ||
                'eth_newFilter' !== e.operation
              )
                throw e;
            }
            if (null == t)
              return (
                (this.#S = null),
                void this.#l._recoverSubscriber(this, this._recover(this.#l))
              );
            const s = await this.#l.getNetwork();
            if ((this.#U || (this.#U = s), this.#U.chainId !== s.chainId))
              throw new Error('chaid changed');
            if (this.#D) return;
            const n = await this.#l.send('eth_getFilterChanges', [t]);
            await this._emitResults(this.#l, n);
          } catch (e) {}
          this.#l.once('block', this.#u);
        }
        #H() {
          const t = this.#S;
          t &&
            ((this.#S = null),
            t.then((t) => {
              this.#l.destroyed || this.#l.send('eth_uninstallFilter', [t]);
            }));
        }
        start() {
          this.#g || ((this.#g = !0), this.#p(-2));
        }
        stop() {
          this.#g &&
            ((this.#g = !1),
            (this.#D = !0),
            this.#H(),
            this.#l.off('block', this.#u));
        }
        pause(t) {
          (t && this.#H(), this.#l.off('block', this.#u));
        }
        resume() {
          this.start();
        }
      }
      class Pt extends kt {
        #M;
        constructor(t, e) {
          var s;
          (super(t), (this.#M = ((s = e), JSON.parse(JSON.stringify(s)))));
        }
        _recover(t) {
          return new et(t, this.#M);
        }
        async _subscribe(t) {
          return await t.send('eth_newFilter', [this.#M]);
        }
        async _emitResults(t, e) {
          for (const s of e) t.emit(this.#M, t._wrapLog(s, t._network));
        }
      }
      class Nt extends kt {
        async _subscribe(t) {
          return await t.send('eth_newPendingTransactionFilter', []);
        }
        async _emitResults(t, e) {
          for (const s of e) t.emit('pending', s);
        }
      }
      const Tt = 'bigint,boolean,function,number,string,symbol'.split(/,/g);
      function Rt(t) {
        if (null == t || Tt.indexOf(typeof t) >= 0) return t;
        if ('function' == typeof t.getAddress) return t;
        if (Array.isArray(t)) return t.map(Rt);
        if ('object' == typeof t)
          return Object.keys(t).reduce((e, s) => ((e[s] = t[s]), e), {});
        throw new Error(`should not happen: ${t} (${typeof t})`);
      }
      function At(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function xt(t) {
        return t ? t.toLowerCase() : t;
      }
      function _t(t) {
        return t && 'number' == typeof t.pollingInterval;
      }
      const Ot = {
        polling: !1,
        staticNetwork: null,
        batchStallTime: 10,
        batchMaxSize: 1 << 20,
        batchMaxCount: 100,
        cacheTimeout: 250,
        pollingInterval: 4e3,
      };
      class Et extends vt {
        address;
        constructor(t, e) {
          (super(t), (e = (0, a.b)(e)), (0, u.n)(this, { address: e }));
        }
        connect(t) {
          (0, r.vA)(
            !1,
            'cannot reconnect JsonRpcSigner',
            'UNSUPPORTED_OPERATION',
            { operation: 'signer.connect' }
          );
        }
        async getAddress() {
          return this.address;
        }
        async populateTransaction(t) {
          return await this.populateCall(t);
        }
        async sendUncheckedTransaction(t) {
          const e = Rt(t),
            s = [];
          if (e.from) {
            const n = e.from;
            s.push(
              (async () => {
                const s = await (0, i.tG)(n, this.provider);
                ((0, r.MR)(
                  null != s && s.toLowerCase() === this.address.toLowerCase(),
                  'from address mismatch',
                  'transaction',
                  t
                ),
                  (e.from = s));
              })()
            );
          } else e.from = this.address;
          if (
            (null == e.gasLimit &&
              s.push(
                (async () => {
                  e.gasLimit = await this.provider.estimateGas({
                    ...e,
                    from: this.address,
                  });
                })()
              ),
            null != e.to)
          ) {
            const t = e.to;
            s.push(
              (async () => {
                e.to = await (0, i.tG)(t, this.provider);
              })()
            );
          }
          s.length && (await Promise.all(s));
          const n = this.provider.getRpcTransaction(e);
          return this.provider.send('eth_sendTransaction', [n]);
        }
        async sendTransaction(t) {
          const e = await this.provider.getBlockNumber(),
            s = await this.sendUncheckedTransaction(t);
          return await new Promise((t, n) => {
            const a = [1e3, 100];
            let i = 0;
            const o = async () => {
              try {
                const r = await this.provider.getTransaction(s);
                if (null != r) return void t(r.replaceableTransaction(e));
              } catch (c) {
                if (
                  (0, r.bJ)(c, 'CANCELLED') ||
                  (0, r.bJ)(c, 'BAD_DATA') ||
                  (0, r.bJ)(c, 'NETWORK_ERROR') ||
                  (0, r.bJ)(c, 'UNSUPPORTED_OPERATION')
                )
                  return (
                    null == c.info && (c.info = {}),
                    (c.info.sendTransactionHash = s),
                    void n(c)
                  );
                if (
                  (0, r.bJ)(c, 'INVALID_ARGUMENT') &&
                  (i++,
                  null == c.info && (c.info = {}),
                  (c.info.sendTransactionHash = s),
                  i > 10)
                )
                  return void n(c);
                this.provider.emit(
                  'error',
                  (0, r.xz)(
                    'failed to fetch transation after sending (will try again)',
                    'UNKNOWN_ERROR',
                    { error: c }
                  )
                );
              }
              this.provider._setTimeout(() => {
                o();
              }, a.pop() || 4e3);
            };
            o();
          });
        }
        async signTransaction(t) {
          const e = Rt(t);
          if (e.from) {
            const s = await (0, i.tG)(e.from, this.provider);
            ((0, r.MR)(
              null != s && s.toLowerCase() === this.address.toLowerCase(),
              'from address mismatch',
              'transaction',
              t
            ),
              (e.from = s));
          } else e.from = this.address;
          const s = this.provider.getRpcTransaction(e);
          return await this.provider.send('eth_signTransaction', [s]);
        }
        async signMessage(t) {
          const e = 'string' == typeof t ? (0, h.YW)(t) : t;
          return await this.provider.send('personal_sign', [
            (0, d.c$)(e),
            this.address.toLowerCase(),
          ]);
        }
        async signTypedData(t, e, s) {
          const n = Rt(s),
            a = await o.z.resolveNames(t, e, n, async (t) => {
              const e = await (0, i.tG)(t);
              return (
                (0, r.MR)(
                  null != e,
                  'TypedData does not support null address',
                  'value',
                  t
                ),
                e
              );
            });
          return await this.provider.send('eth_signTypedData_v4', [
            this.address.toLowerCase(),
            JSON.stringify(o.z.getPayload(a.domain, e, a.value)),
          ]);
        }
        async unlock(t) {
          return this.provider.send('personal_unlockAccount', [
            this.address.toLowerCase(),
            t,
            null,
          ]);
        }
        async _legacySignMessage(t) {
          const e = 'string' == typeof t ? (0, h.YW)(t) : t;
          return await this.provider.send('eth_sign', [
            this.address.toLowerCase(),
            (0, d.c$)(e),
          ]);
        }
      }
      class It extends ut {
        #O;
        #z;
        #$;
        #Z;
        #J;
        #U;
        #W;
        #j() {
          if (this.#Z) return;
          const t =
            1 === this._getOption('batchMaxCount')
              ? 0
              : this._getOption('batchStallTime');
          this.#Z = setTimeout(() => {
            this.#Z = null;
            const t = this.#$;
            for (this.#$ = []; t.length; ) {
              const e = [t.shift()];
              for (; t.length && e.length !== this.#O.batchMaxCount; )
                if (
                  (e.push(t.shift()),
                  JSON.stringify(e.map((t) => t.payload)).length >
                    this.#O.batchMaxSize)
                ) {
                  t.unshift(e.pop());
                  break;
                }
              (async () => {
                const t =
                  1 === e.length ? e[0].payload : e.map((t) => t.payload);
                this.emit('debug', { action: 'sendRpcPayload', payload: t });
                try {
                  const s = await this._send(t);
                  this.emit('debug', { action: 'receiveRpcResult', result: s });
                  for (const { resolve: t, reject: n, payload: a } of e) {
                    if (this.destroyed) {
                      n(
                        (0, r.xz)(
                          'provider destroyed; cancelled request',
                          'UNSUPPORTED_OPERATION',
                          { operation: a.method }
                        )
                      );
                      continue;
                    }
                    const e = s.filter((t) => t.id === a.id)[0];
                    if (null == e) {
                      const t = (0, r.xz)(
                        'missing response for request',
                        'BAD_DATA',
                        { value: s, info: { payload: a } }
                      );
                      (this.emit('error', t), n(t));
                      continue;
                    }
                    'error' in e ? n(this.getRpcError(a, e)) : t(e.result);
                  }
                } catch (s) {
                  this.emit('debug', { action: 'receiveRpcError', error: s });
                  for (const { reject: t } of e) t(s);
                }
              })();
            }
          }, t);
        }
        constructor(t, e) {
          (super(t, e),
            (this.#z = 1),
            (this.#O = Object.assign({}, Ot, e || {})),
            (this.#$ = []),
            (this.#Z = null),
            (this.#U = null),
            (this.#W = null));
          {
            let t = null;
            const e = new Promise((e) => {
              t = e;
            });
            this.#J = { promise: e, resolve: t };
          }
          const s = this._getOption('staticNetwork');
          'boolean' == typeof s
            ? ((0, r.MR)(
                !s || 'any' !== t,
                "staticNetwork cannot be used on special network 'any'",
                'options',
                e
              ),
              s && null != t && (this.#U = Z.from(t)))
            : s &&
              ((0, r.MR)(
                null == t || s.matches(t),
                'staticNetwork MUST match network object',
                'options',
                e
              ),
              (this.#U = s));
        }
        _getOption(t) {
          return this.#O[t];
        }
        get _network() {
          return (
            (0, r.vA)(this.#U, 'network is not available yet', 'NETWORK_ERROR'),
            this.#U
          );
        }
        async _perform(t) {
          if ('call' === t.method || 'estimateGas' === t.method) {
            let e = t.transaction;
            if (
              e &&
              null != e.type &&
              (0, p.Ab)(e.type) &&
              null == e.maxFeePerGas &&
              null == e.maxPriorityFeePerGas
            ) {
              const s = await this.getFeeData();
              null == s.maxFeePerGas &&
                null == s.maxPriorityFeePerGas &&
                (t = Object.assign({}, t, {
                  transaction: Object.assign({}, e, { type: void 0 }),
                }));
            }
          }
          const e = this.getRpcRequest(t);
          return null != e
            ? await this.send(e.method, e.args)
            : super._perform(t);
        }
        async _detectNetwork() {
          const t = this._getOption('staticNetwork');
          if (t) {
            if (!0 !== t) return t;
            if (this.#U) return this.#U;
          }
          return this.#W
            ? await this.#W
            : this.ready
              ? ((this.#W = (async () => {
                  try {
                    const t = Z.from(
                      (0, p.Ab)(await this.send('eth_chainId', []))
                    );
                    return ((this.#W = null), t);
                  } catch (t) {
                    throw ((this.#W = null), t);
                  }
                })()),
                await this.#W)
              : ((this.#W = (async () => {
                  const t = {
                    id: this.#z++,
                    method: 'eth_chainId',
                    params: [],
                    jsonrpc: '2.0',
                  };
                  let e;
                  this.emit('debug', { action: 'sendRpcPayload', payload: t });
                  try {
                    ((e = (await this._send(t))[0]), (this.#W = null));
                  } catch (s) {
                    throw (
                      (this.#W = null),
                      this.emit('debug', {
                        action: 'receiveRpcError',
                        error: s,
                      }),
                      s
                    );
                  }
                  if (
                    (this.emit('debug', {
                      action: 'receiveRpcResult',
                      result: e,
                    }),
                    'result' in e)
                  )
                    return Z.from((0, p.Ab)(e.result));
                  throw this.getRpcError(t, e);
                })()),
                await this.#W);
        }
        _start() {
          null != this.#J &&
            null != this.#J.resolve &&
            (this.#J.resolve(),
            (this.#J = null),
            (async () => {
              for (; null == this.#U && !this.destroyed; )
                try {
                  this.#U = await this._detectNetwork();
                } catch (t) {
                  if (this.destroyed) break;
                  (this.emit(
                    'error',
                    (0, r.xz)(
                      'failed to bootstrap network detection',
                      'NETWORK_ERROR',
                      { event: 'initial-network-discovery', info: { error: t } }
                    )
                  ),
                    await At(1e3));
                }
              this.#j();
            })());
        }
        async _waitUntilReady() {
          if (null != this.#J) return await this.#J.promise;
        }
        _getSubscriber(t) {
          return 'pending' === t.type
            ? new Nt(this)
            : 'event' === t.type
              ? this._getOption('polling')
                ? new et(this, t.filter)
                : new Pt(this, t.filter)
              : 'orphan' === t.type && 'drop-log' === t.filter.orphan
                ? new at('orphan')
                : super._getSubscriber(t);
        }
        get ready() {
          return null == this.#J;
        }
        getRpcTransaction(t) {
          const e = {};
          return (
            [
              'chainId',
              'gasLimit',
              'gasPrice',
              'type',
              'maxFeePerGas',
              'maxPriorityFeePerGas',
              'nonce',
              'value',
            ].forEach((s) => {
              if (null == t[s]) return;
              let r = s;
              ('gasLimit' === s && (r = 'gas'),
                (e[r] = (0, p.nD)((0, p.Ab)(t[s], `tx.${s}`))));
            }),
            ['from', 'to', 'data'].forEach((s) => {
              null != t[s] && (e[s] = (0, d.c$)(t[s]));
            }),
            t.accessList && (e.accessList = (0, c.$)(t.accessList)),
            t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes.map((t) =>
                t.toLowerCase()
              )),
            t.authorizationList &&
              (e.authorizationList = t.authorizationList.map((t) => {
                const e = (0, l.M)(t);
                return {
                  address: e.address,
                  nonce: (0, p.nD)(e.nonce),
                  chainId: (0, p.nD)(e.chainId),
                  yParity: (0, p.nD)(e.signature.yParity),
                  r: (0, p.nD)(e.signature.r),
                  s: (0, p.nD)(e.signature.s),
                };
              })),
            e
          );
        }
        getRpcRequest(t) {
          switch (t.method) {
            case 'chainId':
              return { method: 'eth_chainId', args: [] };
            case 'getBlockNumber':
              return { method: 'eth_blockNumber', args: [] };
            case 'getGasPrice':
              return { method: 'eth_gasPrice', args: [] };
            case 'getPriorityFee':
              return { method: 'eth_maxPriorityFeePerGas', args: [] };
            case 'getBalance':
              return {
                method: 'eth_getBalance',
                args: [xt(t.address), t.blockTag],
              };
            case 'getTransactionCount':
              return {
                method: 'eth_getTransactionCount',
                args: [xt(t.address), t.blockTag],
              };
            case 'getCode':
              return {
                method: 'eth_getCode',
                args: [xt(t.address), t.blockTag],
              };
            case 'getStorage':
              return {
                method: 'eth_getStorageAt',
                args: [
                  xt(t.address),
                  '0x' + t.position.toString(16),
                  t.blockTag,
                ],
              };
            case 'broadcastTransaction':
              return {
                method: 'eth_sendRawTransaction',
                args: [t.signedTransaction],
              };
            case 'getBlock':
              if ('blockTag' in t)
                return {
                  method: 'eth_getBlockByNumber',
                  args: [t.blockTag, !!t.includeTransactions],
                };
              if ('blockHash' in t)
                return {
                  method: 'eth_getBlockByHash',
                  args: [t.blockHash, !!t.includeTransactions],
                };
              break;
            case 'getTransaction':
              return { method: 'eth_getTransactionByHash', args: [t.hash] };
            case 'getTransactionReceipt':
              return { method: 'eth_getTransactionReceipt', args: [t.hash] };
            case 'call':
              return {
                method: 'eth_call',
                args: [this.getRpcTransaction(t.transaction), t.blockTag],
              };
            case 'estimateGas':
              return {
                method: 'eth_estimateGas',
                args: [this.getRpcTransaction(t.transaction)],
              };
            case 'getLogs':
              return (
                t.filter &&
                  null != t.filter.address &&
                  (Array.isArray(t.filter.address)
                    ? (t.filter.address = t.filter.address.map(xt))
                    : (t.filter.address = xt(t.filter.address))),
                { method: 'eth_getLogs', args: [t.filter] }
              );
          }
          return null;
        }
        getRpcError(t, e) {
          const { method: s } = t,
            { error: a } = e;
          if ('eth_estimateGas' === s && a.message) {
            const e = a.message;
            if (!e.match(/revert/i) && e.match(/insufficient funds/i))
              return (0, r.xz)('insufficient funds', 'INSUFFICIENT_FUNDS', {
                transaction: t.params[0],
                info: { payload: t, error: a },
              });
            if (e.match(/nonce/i) && e.match(/too low/i))
              return (0, r.xz)('nonce has already been used', 'NONCE_EXPIRED', {
                transaction: t.params[0],
                info: { payload: t, error: a },
              });
          }
          if ('eth_call' === s || 'eth_estimateGas' === s) {
            const e = Gt(a),
              r = n.y.getBuiltinCallException(
                'eth_call' === s ? 'call' : 'estimateGas',
                t.params[0],
                e ? e.data : null
              );
            return ((r.info = { error: a, payload: t }), r);
          }
          const i = JSON.stringify(
            (function (t) {
              const e = [];
              return (Lt(t, e), e);
            })(a)
          );
          if (
            'string' == typeof a.message &&
            a.message.match(/user denied|ethers-user-denied/i)
          ) {
            const e = {
              eth_sign: 'signMessage',
              personal_sign: 'signMessage',
              eth_signTypedData_v4: 'signTypedData',
              eth_signTransaction: 'signTransaction',
              eth_sendTransaction: 'sendTransaction',
              eth_requestAccounts: 'requestAccess',
              wallet_requestAccounts: 'requestAccess',
            };
            return (0, r.xz)('user rejected action', 'ACTION_REJECTED', {
              action: e[s] || 'unknown',
              reason: 'rejected',
              info: { payload: t, error: a },
            });
          }
          if ('eth_sendRawTransaction' === s || 'eth_sendTransaction' === s) {
            const e = t.params[0];
            if (i.match(/insufficient funds|base fee exceeds gas limit/i))
              return (0, r.xz)(
                'insufficient funds for intrinsic transaction cost',
                'INSUFFICIENT_FUNDS',
                { transaction: e, info: { error: a } }
              );
            if (i.match(/nonce/i) && i.match(/too low/i))
              return (0, r.xz)('nonce has already been used', 'NONCE_EXPIRED', {
                transaction: e,
                info: { error: a },
              });
            if (i.match(/replacement transaction/i) && i.match(/underpriced/i))
              return (0, r.xz)(
                'replacement fee too low',
                'REPLACEMENT_UNDERPRICED',
                { transaction: e, info: { error: a } }
              );
            if (i.match(/only replay-protected/i))
              return (0, r.xz)(
                'legacy pre-eip-155 transactions not supported',
                'UNSUPPORTED_OPERATION',
                { operation: s, info: { transaction: e, info: { error: a } } }
              );
          }
          let o = !!i.match(/the method .* does not exist/i);
          return (
            o ||
              (a &&
                a.details &&
                a.details.startsWith('Unauthorized method:') &&
                (o = !0)),
            o
              ? (0, r.xz)('unsupported operation', 'UNSUPPORTED_OPERATION', {
                  operation: t.method,
                  info: { error: a, payload: t },
                })
              : (0, r.xz)('could not coalesce error', 'UNKNOWN_ERROR', {
                  error: a,
                  payload: t,
                })
          );
        }
        send(t, e) {
          if (this.destroyed)
            return Promise.reject(
              (0, r.xz)(
                'provider destroyed; cancelled request',
                'UNSUPPORTED_OPERATION',
                { operation: t }
              )
            );
          const s = this.#z++,
            n = new Promise((r, n) => {
              this.#$.push({
                resolve: r,
                reject: n,
                payload: { method: t, params: e, id: s, jsonrpc: '2.0' },
              });
            });
          return (this.#j(), n);
        }
        async getSigner(t) {
          null == t && (t = 0);
          const e = this.send('eth_accounts', []);
          if ('number' == typeof t) {
            const s = await e;
            if (t >= s.length) throw new Error('no such account');
            return new Et(this, s[t]);
          }
          const { accounts: s } = await (0, u.k)({
            network: this.getNetwork(),
            accounts: e,
          });
          t = (0, a.b)(t);
          for (const r of s) if ((0, a.b)(r) === t) return new Et(this, t);
          throw new Error('invalid account');
        }
        async listAccounts() {
          return (await this.send('eth_accounts', [])).map(
            (t) => new Et(this, t)
          );
        }
        destroy() {
          this.#Z && (clearTimeout(this.#Z), (this.#Z = null));
          for (const { payload: t, reject: e } of this.#$)
            e(
              (0, r.xz)(
                'provider destroyed; cancelled request',
                'UNSUPPORTED_OPERATION',
                { operation: t.method }
              )
            );
          ((this.#$ = []), super.destroy());
        }
      }
      class Ft extends It {
        #q;
        constructor(t, e) {
          super(t, e);
          let s = this._getOption('pollingInterval');
          (null == s && (s = Ot.pollingInterval), (this.#q = s));
        }
        _getSubscriber(t) {
          const e = super._getSubscriber(t);
          return (_t(e) && (e.pollingInterval = this.#q), e);
        }
        get pollingInterval() {
          return this.#q;
        }
        set pollingInterval(t) {
          if (!Number.isInteger(t) || t < 0)
            throw new Error('invalid interval');
          ((this.#q = t),
            this._forEachSubscriber((t) => {
              _t(t) && (t.pollingInterval = this.#q);
            }));
        }
      }
      function Gt(t) {
        if (null == t) return null;
        if (
          'string' == typeof t.message &&
          t.message.match(/revert/i) &&
          (0, d.Lo)(t.data)
        )
          return { message: t.message, data: t.data };
        if ('object' == typeof t) {
          for (const e in t) {
            const s = Gt(t[e]);
            if (s) return s;
          }
          return null;
        }
        if ('string' == typeof t)
          try {
            return Gt(JSON.parse(t));
          } catch (e) {}
        return null;
      }
      function Lt(t, e) {
        if (null != t) {
          if (
            ('string' == typeof t.message && e.push(t.message),
            'object' == typeof t)
          )
            for (const s in t) Lt(t[s], e);
          if ('string' == typeof t)
            try {
              return Lt(JSON.parse(t), e);
            } catch (s) {}
        }
      }
      class Ct extends Ft {
        #V;
        #K;
        constructor(t, e, s) {
          const n = Object.assign({}, null != s ? s : {}, { batchMaxCount: 1 });
          ((0, r.MR)(
            t && t.request,
            'invalid EIP-1193 provider',
            'ethereum',
            t
          ),
            super(e, n),
            (this.#K = null),
            s && s.providerInfo && (this.#K = s.providerInfo),
            (this.#V = async (e, s) => {
              const r = { method: e, params: s };
              this.emit('debug', { action: 'sendEip1193Request', payload: r });
              try {
                const e = await t.request(r);
                return (
                  this.emit('debug', {
                    action: 'receiveEip1193Result',
                    result: e,
                  }),
                  e
                );
              } catch (n) {
                const t = new Error(n.message);
                throw (
                  (t.code = n.code),
                  (t.data = n.data),
                  (t.payload = r),
                  this.emit('debug', {
                    action: 'receiveEip1193Error',
                    error: t,
                  }),
                  t
                );
              }
            }));
        }
        get providerInfo() {
          return this.#K;
        }
        async send(t, e) {
          return (await this._start(), await super.send(t, e));
        }
        async _send(t) {
          (0, r.MR)(
            !Array.isArray(t),
            'EIP-1193 does not support batch request',
            'payload',
            t
          );
          try {
            const e = await this.#V(t.method, t.params || []);
            return [{ id: t.id, result: e }];
          } catch (e) {
            return [
              {
                id: t.id,
                error: { code: e.code, data: e.data, message: e.message },
              },
            ];
          }
        }
        getRpcError(t, e) {
          switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
            case 4001:
              e.error.message = `ethers-user-denied: ${e.error.message}`;
              break;
            case 4200:
              e.error.message = `ethers-unsupported: ${e.error.message}`;
          }
          return super.getRpcError(t, e);
        }
        async hasSigner(t) {
          null == t && (t = 0);
          const e = await this.send('eth_accounts', []);
          return 'number' == typeof t
            ? e.length > t
            : ((t = t.toLowerCase()),
              0 !== e.filter((e) => e.toLowerCase() === t).length);
        }
        async getSigner(t) {
          if ((null == t && (t = 0), !(await this.hasSigner(t))))
            try {
              await this.#V('eth_requestAccounts', []);
            } catch (e) {
              const t = e.payload;
              throw this.getRpcError(t, { id: t.id, error: e });
            }
          return await super.getSigner(t);
        }
        static async discover(t) {
          if ((null == t && (t = {}), t.provider)) return new Ct(t.provider);
          const e = t.window
            ? t.window
            : 'undefined' != typeof window
              ? window
              : null;
          if (null == e) return null;
          const s = t.anyProvider;
          if (s && e.ethereum) return new Ct(e.ethereum);
          if (
            !(
              'addEventListener' in e &&
              'dispatchEvent' in e &&
              'removeEventListener' in e
            )
          )
            return null;
          const n = t.timeout ? t.timeout : 300;
          return 0 === n
            ? null
            : await new Promise((a, i) => {
                let o = [];
                const c = (t) => {
                    (o.push(t.detail), s && l());
                  },
                  l = () => {
                    if ((clearTimeout(u), o.length))
                      if (t && t.filter) {
                        const e = t.filter(
                          o.map((t) => Object.assign({}, t.info))
                        );
                        if (null == e) a(null);
                        else if (e instanceof Ct) a(e);
                        else {
                          let t = null;
                          if (
                            (e.uuid &&
                              (t = o.filter((t) => e.uuid === t.info.uuid)[0]),
                            t)
                          ) {
                            const { provider: e, info: s } = t;
                            a(new Ct(e, void 0, { providerInfo: s }));
                          } else
                            i(
                              (0, r.xz)(
                                'filter returned unknown info',
                                'UNSUPPORTED_OPERATION',
                                { value: e }
                              )
                            );
                        }
                      } else {
                        const { provider: t, info: e } = o[0];
                        a(new Ct(t, void 0, { providerInfo: e }));
                      }
                    else a(null);
                    e.removeEventListener('eip6963:announceProvider', c);
                  },
                  u = setTimeout(() => {
                    l();
                  }, n);
                (e.addEventListener('eip6963:announceProvider', c),
                  e.dispatchEvent(new Event('eip6963:requestProvider')));
              });
        }
      }
    },
    8931: (t, e, s) => {
      s.d(e, {
        J9: () => h,
        VS: () => d,
        eB: () => p,
        tG: () => g,
        uI: () => m,
        z5: () => f,
      });
      var r = s(8227),
        n = s(536),
        a = s(8848),
        i = s(8466),
        o = s(7602);
      const c = BigInt(0);
      function l(t) {
        return null == t ? null : t;
      }
      function u(t) {
        return null == t ? null : t.toString();
      }
      class h {
        gasPrice;
        maxFeePerGas;
        maxPriorityFeePerGas;
        constructor(t, e, s) {
          (0, i.n)(this, {
            gasPrice: l(t),
            maxFeePerGas: l(e),
            maxPriorityFeePerGas: l(s),
          });
        }
        toJSON() {
          const {
            gasPrice: t,
            maxFeePerGas: e,
            maxPriorityFeePerGas: s,
          } = this;
          return {
            _type: 'FeeData',
            gasPrice: u(t),
            maxFeePerGas: u(e),
            maxPriorityFeePerGas: u(s),
          };
        }
      }
      function d(t) {
        const e = {};
        (t.to && (e.to = t.to),
          t.from && (e.from = t.from),
          t.data && (e.data = (0, r.c$)(t.data)));
        const s =
          'chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value'.split(
            /,/
          );
        for (const r of s)
          r in t && null != t[r] && (e[r] = (0, a.Ab)(t[r], `request.${r}`));
        const n = 'type,nonce'.split(/,/);
        for (const r of n)
          r in t && null != t[r] && (e[r] = (0, a.WZ)(t[r], `request.${r}`));
        return (
          t.accessList && (e.accessList = (0, o.$)(t.accessList)),
          t.authorizationList &&
            (e.authorizationList = t.authorizationList.slice()),
          'blockTag' in t && (e.blockTag = t.blockTag),
          'enableCcipRead' in t && (e.enableCcipRead = !!t.enableCcipRead),
          'customData' in t && (e.customData = t.customData),
          'blobVersionedHashes' in t &&
            t.blobVersionedHashes &&
            (e.blobVersionedHashes = t.blobVersionedHashes.slice()),
          'kzg' in t && (e.kzg = t.kzg),
          'blobs' in t &&
            t.blobs &&
            (e.blobs = t.blobs.map((t) =>
              (0, r.f)(t) ? (0, r.c$)(t) : Object.assign({}, t)
            )),
          e
        );
      }
      class p {
        provider;
        number;
        hash;
        timestamp;
        parentHash;
        parentBeaconBlockRoot;
        nonce;
        difficulty;
        gasLimit;
        gasUsed;
        stateRoot;
        receiptsRoot;
        blobGasUsed;
        excessBlobGas;
        miner;
        prevRandao;
        extraData;
        baseFeePerGas;
        #X;
        constructor(t, e) {
          ((this.#X = t.transactions.map((t) =>
            'string' != typeof t ? new m(t, e) : t
          )),
            (0, i.n)(this, {
              provider: e,
              hash: l(t.hash),
              number: t.number,
              timestamp: t.timestamp,
              parentHash: t.parentHash,
              parentBeaconBlockRoot: t.parentBeaconBlockRoot,
              nonce: t.nonce,
              difficulty: t.difficulty,
              gasLimit: t.gasLimit,
              gasUsed: t.gasUsed,
              blobGasUsed: t.blobGasUsed,
              excessBlobGas: t.excessBlobGas,
              miner: t.miner,
              prevRandao: l(t.prevRandao),
              extraData: t.extraData,
              baseFeePerGas: l(t.baseFeePerGas),
              stateRoot: t.stateRoot,
              receiptsRoot: t.receiptsRoot,
            }));
        }
        get transactions() {
          return this.#X.map((t) => ('string' == typeof t ? t : t.hash));
        }
        get prefetchedTransactions() {
          const t = this.#X.slice();
          return 0 === t.length
            ? []
            : ((0, n.vA)(
                'object' == typeof t[0],
                'transactions were not prefetched with block request',
                'UNSUPPORTED_OPERATION',
                { operation: 'transactionResponses()' }
              ),
              t);
        }
        toJSON() {
          const {
            baseFeePerGas: t,
            difficulty: e,
            extraData: s,
            gasLimit: r,
            gasUsed: n,
            hash: a,
            miner: i,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: h,
            parentBeaconBlockRoot: d,
            stateRoot: p,
            receiptsRoot: g,
            timestamp: f,
            transactions: m,
          } = this;
          return {
            _type: 'Block',
            baseFeePerGas: u(t),
            difficulty: u(e),
            extraData: s,
            gasLimit: u(r),
            gasUsed: u(n),
            blobGasUsed: u(this.blobGasUsed),
            excessBlobGas: u(this.excessBlobGas),
            hash: a,
            miner: i,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: h,
            timestamp: f,
            parentBeaconBlockRoot: d,
            stateRoot: p,
            receiptsRoot: g,
            transactions: m,
          };
        }
        [Symbol.iterator]() {
          let t = 0;
          const e = this.transactions;
          return {
            next: () =>
              t < this.length
                ? { value: e[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get length() {
          return this.#X.length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(t) {
          let e;
          if ('number' == typeof t) e = this.#X[t];
          else {
            const s = t.toLowerCase();
            for (const t of this.#X) {
              if ('string' == typeof t) {
                if (t !== s) continue;
                e = t;
                break;
              }
              if (t.hash === s) {
                e = t;
                break;
              }
            }
          }
          if (null == e) throw new Error('no such tx');
          return 'string' == typeof e
            ? await this.provider.getTransaction(e)
            : e;
        }
        getPrefetchedTransaction(t) {
          const e = this.prefetchedTransactions;
          if ('number' == typeof t) return e[t];
          t = t.toLowerCase();
          for (const s of e) if (s.hash === t) return s;
          (0, n.MR)(!1, 'no matching transaction', 'indexOrHash', t);
        }
        isMined() {
          return !!this.hash;
        }
        isLondon() {
          return !!this.baseFeePerGas;
        }
        orphanedEvent() {
          if (!this.isMined()) throw new Error('');
          return { orphan: 'drop-block', hash: this.hash, number: this.number };
        }
      }
      class g {
        provider;
        transactionHash;
        blockHash;
        blockNumber;
        removed;
        address;
        data;
        topics;
        index;
        transactionIndex;
        constructor(t, e) {
          this.provider = e;
          const s = Object.freeze(t.topics.slice());
          (0, i.n)(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: s,
            index: t.index,
            transactionIndex: t.transactionIndex,
          });
        }
        toJSON() {
          const {
            address: t,
            blockHash: e,
            blockNumber: s,
            data: r,
            index: n,
            removed: a,
            topics: i,
            transactionHash: o,
            transactionIndex: c,
          } = this;
          return {
            _type: 'log',
            address: t,
            blockHash: e,
            blockNumber: s,
            data: r,
            index: n,
            removed: a,
            topics: i,
            transactionHash: o,
            transactionIndex: c,
          };
        }
        async getBlock() {
          const t = await this.provider.getBlock(this.blockHash);
          return (
            (0, n.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
            t
          );
        }
        async getTransaction() {
          const t = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, n.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
            t
          );
        }
        async getTransactionReceipt() {
          const t = await this.provider.getTransactionReceipt(
            this.transactionHash
          );
          return (
            (0, n.vA)(
              !!t,
              'failed to find transaction receipt',
              'UNKNOWN_ERROR',
              {}
            ),
            t
          );
        }
        removedEvent() {
          return {
            orphan: 'drop-log',
            log: {
              transactionHash: (t = this).transactionHash,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              address: t.address,
              data: t.data,
              topics: Object.freeze(t.topics.slice()),
              index: t.index,
            },
          };
          var t;
        }
      }
      class f {
        provider;
        to;
        from;
        contractAddress;
        hash;
        index;
        blockHash;
        blockNumber;
        logsBloom;
        gasUsed;
        blobGasUsed;
        cumulativeGasUsed;
        gasPrice;
        blobGasPrice;
        type;
        status;
        root;
        #Y;
        constructor(t, e) {
          this.#Y = Object.freeze(t.logs.map((t) => new g(t, e)));
          let s = c;
          (null != t.effectiveGasPrice
            ? (s = t.effectiveGasPrice)
            : null != t.gasPrice && (s = t.gasPrice),
            (0, i.n)(this, {
              provider: e,
              to: t.to,
              from: t.from,
              contractAddress: t.contractAddress,
              hash: t.hash,
              index: t.index,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              logsBloom: t.logsBloom,
              gasUsed: t.gasUsed,
              cumulativeGasUsed: t.cumulativeGasUsed,
              blobGasUsed: t.blobGasUsed,
              gasPrice: s,
              blobGasPrice: t.blobGasPrice,
              type: t.type,
              status: t.status,
              root: t.root,
            }));
        }
        get logs() {
          return this.#Y;
        }
        toJSON() {
          const {
            to: t,
            from: e,
            contractAddress: s,
            hash: r,
            index: n,
            blockHash: a,
            blockNumber: i,
            logsBloom: o,
            logs: c,
            status: l,
            root: h,
          } = this;
          return {
            _type: 'TransactionReceipt',
            blockHash: a,
            blockNumber: i,
            contractAddress: s,
            cumulativeGasUsed: u(this.cumulativeGasUsed),
            from: e,
            gasPrice: u(this.gasPrice),
            blobGasUsed: u(this.blobGasUsed),
            blobGasPrice: u(this.blobGasPrice),
            gasUsed: u(this.gasUsed),
            hash: r,
            index: n,
            logs: c,
            logsBloom: o,
            root: h,
            status: l,
            to: t,
          };
        }
        get length() {
          return this.logs.length;
        }
        [Symbol.iterator]() {
          let t = 0;
          return {
            next: () =>
              t < this.length
                ? { value: this.logs[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get fee() {
          return this.gasUsed * this.gasPrice;
        }
        async getBlock() {
          const t = await this.provider.getBlock(this.blockHash);
          if (null == t) throw new Error('TODO');
          return t;
        }
        async getTransaction() {
          const t = await this.provider.getTransaction(this.hash);
          if (null == t) throw new Error('TODO');
          return t;
        }
        async getResult() {
          return await this.provider.getTransactionResult(this.hash);
        }
        async confirmations() {
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        removedEvent() {
          return w(this);
        }
        reorderedEvent(t) {
          return (
            (0, n.vA)(
              !t || t.isMined(),
              "unmined 'other' transction cannot be orphaned",
              'UNSUPPORTED_OPERATION',
              { operation: 'reorderedEvent(other)' }
            ),
            b(this, t)
          );
        }
      }
      class m {
        provider;
        blockNumber;
        blockHash;
        index;
        hash;
        type;
        to;
        from;
        nonce;
        gasLimit;
        gasPrice;
        maxPriorityFeePerGas;
        maxFeePerGas;
        maxFeePerBlobGas;
        data;
        value;
        chainId;
        signature;
        accessList;
        blobVersionedHashes;
        authorizationList;
        #Q;
        constructor(t, e) {
          ((this.provider = e),
            (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
            (this.blockHash = null != t.blockHash ? t.blockHash : null),
            (this.hash = t.hash),
            (this.index = t.index),
            (this.type = t.type),
            (this.from = t.from),
            (this.to = t.to || null),
            (this.gasLimit = t.gasLimit),
            (this.nonce = t.nonce),
            (this.data = t.data),
            (this.value = t.value),
            (this.gasPrice = t.gasPrice),
            (this.maxPriorityFeePerGas =
              null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
            (this.maxFeePerGas =
              null != t.maxFeePerGas ? t.maxFeePerGas : null),
            (this.maxFeePerBlobGas =
              null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null),
            (this.chainId = t.chainId),
            (this.signature = t.signature),
            (this.accessList = null != t.accessList ? t.accessList : null),
            (this.blobVersionedHashes =
              null != t.blobVersionedHashes ? t.blobVersionedHashes : null),
            (this.authorizationList =
              null != t.authorizationList ? t.authorizationList : null),
            (this.#Q = -1));
        }
        toJSON() {
          const {
            blockNumber: t,
            blockHash: e,
            index: s,
            hash: r,
            type: n,
            to: a,
            from: i,
            nonce: o,
            data: c,
            signature: l,
            accessList: h,
            blobVersionedHashes: d,
          } = this;
          return {
            _type: 'TransactionResponse',
            accessList: h,
            blockNumber: t,
            blockHash: e,
            blobVersionedHashes: d,
            chainId: u(this.chainId),
            data: c,
            from: i,
            gasLimit: u(this.gasLimit),
            gasPrice: u(this.gasPrice),
            hash: r,
            maxFeePerGas: u(this.maxFeePerGas),
            maxPriorityFeePerGas: u(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: u(this.maxFeePerBlobGas),
            nonce: o,
            signature: l,
            to: a,
            index: s,
            type: n,
            value: u(this.value),
          };
        }
        async getBlock() {
          let t = this.blockNumber;
          if (null == t) {
            const e = await this.getTransaction();
            e && (t = e.blockNumber);
          }
          if (null == t) return null;
          const e = this.provider.getBlock(t);
          if (null == e) throw new Error('TODO');
          return e;
        }
        async getTransaction() {
          return this.provider.getTransaction(this.hash);
        }
        async confirmations() {
          if (null == this.blockNumber) {
            const { tx: t, blockNumber: e } = await (0, i.k)({
              tx: this.getTransaction(),
              blockNumber: this.provider.getBlockNumber(),
            });
            return null == t || null == t.blockNumber
              ? 0
              : e - t.blockNumber + 1;
          }
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        async wait(t, e) {
          const s = null == t ? 1 : t,
            r = null == e ? 0 : e;
          let a = this.#Q,
            o = -1,
            l = -1 === a;
          const u = async () => {
              if (l) return null;
              const { blockNumber: t, nonce: e } = await (0, i.k)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (e < this.nonce) return void (a = t);
              if (l) return null;
              const r = await this.getTransaction();
              if (!r || null == r.blockNumber)
                for (
                  -1 === o && ((o = a - 3), o < this.#Q && (o = this.#Q));
                  o <= t;

                ) {
                  if (l) return null;
                  const e = await this.provider.getBlock(o, !0);
                  if (null == e) return;
                  for (const t of e) if (t === this.hash) return;
                  for (let r = 0; r < e.length; r++) {
                    const i = await e.getTransaction(r);
                    if (i.from === this.from && i.nonce === this.nonce) {
                      if (l) return null;
                      const e = await this.provider.getTransactionReceipt(
                        i.hash
                      );
                      if (null == e) return;
                      if (t - e.blockNumber + 1 < s) return;
                      let r = 'replaced';
                      (i.data === this.data &&
                      i.to === this.to &&
                      i.value === this.value
                        ? (r = 'repriced')
                        : '0x' === i.data &&
                          i.from === i.to &&
                          i.value === c &&
                          (r = 'cancelled'),
                        (0, n.vA)(
                          !1,
                          'transaction was replaced',
                          'TRANSACTION_REPLACED',
                          {
                            cancelled: 'replaced' === r || 'cancelled' === r,
                            reason: r,
                            replacement: i.replaceableTransaction(a),
                            hash: i.hash,
                            receipt: e,
                          }
                        ));
                    }
                  }
                  o++;
                }
            },
            h = (t) => {
              if (null == t || 0 !== t.status) return t;
              (0, n.vA)(
                !1,
                'transaction execution reverted',
                'CALL_EXCEPTION',
                {
                  action: 'sendTransaction',
                  data: null,
                  reason: null,
                  invocation: null,
                  revert: null,
                  transaction: { to: t.to, from: t.from, data: '' },
                  receipt: t,
                }
              );
            },
            d = await this.provider.getTransactionReceipt(this.hash);
          if (0 === s) return h(d);
          if (d) {
            if (1 === s || (await d.confirmations()) >= s) return h(d);
          } else if ((await u(), 0 === s)) return null;
          const p = new Promise((t, e) => {
            const i = [],
              o = () => {
                i.forEach((t) => t());
              };
            if (
              (i.push(() => {
                l = !0;
              }),
              r > 0)
            ) {
              const t = setTimeout(() => {
                (o(), e((0, n.xz)('wait for transaction timeout', 'TIMEOUT')));
              }, r);
              i.push(() => {
                clearTimeout(t);
              });
            }
            const c = async (r) => {
              if ((await r.confirmations()) >= s) {
                o();
                try {
                  t(h(r));
                } catch (n) {
                  e(n);
                }
              }
            };
            if (
              (i.push(() => {
                this.provider.off(this.hash, c);
              }),
              this.provider.on(this.hash, c),
              a >= 0)
            ) {
              const t = async () => {
                try {
                  await u();
                } catch (s) {
                  if ((0, n.bJ)(s, 'TRANSACTION_REPLACED'))
                    return (o(), void e(s));
                }
                l || this.provider.once('block', t);
              };
              (i.push(() => {
                this.provider.off('block', t);
              }),
                this.provider.once('block', t));
            }
          });
          return await p;
        }
        isMined() {
          return null != this.blockHash;
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        removedEvent() {
          return (
            (0, n.vA)(
              this.isMined(),
              'unmined transaction canot be orphaned',
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            w(this)
          );
        }
        reorderedEvent(t) {
          return (
            (0, n.vA)(
              this.isMined(),
              'unmined transaction canot be orphaned',
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            (0, n.vA)(
              !t || t.isMined(),
              "unmined 'other' transaction canot be orphaned",
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            b(this, t)
          );
        }
        replaceableTransaction(t) {
          (0, n.MR)(
            Number.isInteger(t) && t >= 0,
            'invalid startBlock',
            'startBlock',
            t
          );
          const e = new m(this, this.provider);
          return ((e.#Q = t), e);
        }
      }
      function b(t, e) {
        return { orphan: 'reorder-transaction', tx: t, other: e };
      }
      function w(t) {
        return { orphan: 'drop-transaction', tx: t };
      }
    },
  },
]);
