'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [202],
  {
    4085(t, e, n) {
      n.d(e, { k: () => Ct });
      var s = n(536),
        r = n(2942),
        i = n(4922),
        a = n(5357),
        o = n(1883),
        c = n(7602),
        l = n(5303),
        u = n(8466),
        h = n(3536),
        d = n(8227),
        f = n(8848),
        p = n(9163),
        w = n(3227),
        g = n(3571),
        y = n(7387),
        m = n(5093),
        b = n(2598),
        v = n(9811);
      function k(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
              ? (t = t.substring(7))
              : (0, s.MR)(!1, 'unsupported IPFS format', 'link', t),
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
      class O {
        provider;
        address;
        name;
        #t;
        #e;
        constructor(t, e, n) {
          ((0, u.n)(this, { provider: t, address: e, name: n }),
            (this.#t = null),
            (this.#e = new g.NZ(
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
                  if ((0, s.bJ)(t, 'CALL_EXCEPTION')) return !1;
                  throw ((this.#t = null), t);
                }
              })()),
            await this.#t
          );
        }
        async #n(t, e) {
          e = (e || []).slice();
          const n = this.#e.interface;
          e.unshift((0, y.kM)(this.name));
          let r = null;
          ((await this.supportsWildcard()) &&
            ((r = n.getFunction(t)),
            (0, s.vA)(r, 'missing fragment', 'UNKNOWN_ERROR', {
              info: { funcName: t },
            }),
            (e = [(0, y.Wh)(this.name, 255), n.encodeFunctionData(r, e)]),
            (t = 'resolve(bytes,bytes)')),
            e.push({ enableCcipRead: !0 }));
          try {
            const s = await this.#e[t](...e);
            return r ? n.decodeFunctionResult(r, s)[0] : s;
          } catch (i) {
            if (!(0, s.bJ)(i, 'CALL_EXCEPTION')) throw i;
          }
          return null;
        }
        async getAddress(t) {
          if ((null == t && (t = 60), 60 === t))
            try {
              const t = await this.#n('addr(bytes32)');
              return null == t || t === w.j ? null : t;
            } catch (a) {
              if ((0, s.bJ)(a, 'CALL_EXCEPTION')) return null;
              throw a;
            }
          if (t >= 0 && t < 2147483648) {
            let e = t + 2147483648;
            const n = await this.#n('addr(bytes32,uint)', [e]);
            if ((0, d.Lo)(n, 20)) return (0, i.b)(n);
          }
          let e = null;
          for (const s of this.provider.plugins)
            if (s instanceof P && s.supportsCoinType(t)) {
              e = s;
              break;
            }
          if (null == e) return null;
          const n = await this.#n('addr(bytes32,uint)', [t]);
          if (null == n || '0x' === n) return null;
          const r = await e.decodeAddress(t, n);
          if (null != r) return r;
          (0, s.vA)(!1, 'invalid coin data', 'UNSUPPORTED_OPERATION', {
            operation: `getAddress(${t})`,
            info: { coinType: t, data: n },
          });
        }
        async getText(t) {
          const e = await this.#n('text(bytes32,string)', [t]);
          return null == e || '0x' === e ? null : e;
        }
        async getContentHash() {
          const t = await this.#n('contenthash(bytes32)');
          if (null == t || '0x' === t) return null;
          const e = t.match(
            /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
          );
          if (e) {
            const t = 'e3010170' === e[1] ? 'ipfs' : 'ipns',
              n = parseInt(e[4], 16);
            if (e[5].length === 2 * n) return `${t}://${(0, v.R)('0x' + e[2])}`;
          }
          const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
          if (n && 64 === n[1].length) return `bzz://${n[1]}`;
          (0, s.vA)(
            !1,
            'invalid or unsupported content hash data',
            'UNSUPPORTED_OPERATION',
            { operation: 'getContentHash()', info: { data: t } }
          );
        }
        async getAvatar() {
          return (await this.i()).url;
        }
        async i() {
          const t = [{ type: 'name', value: this.name }];
          try {
            const n = await this.getText('avatar');
            if (null == n)
              return (
                t.push({ type: '!avatar', value: '' }),
                { url: null, linkage: t }
              );
            t.push({ type: 'avatar', value: n });
            for (let s = 0; s < T.length; s++) {
              const r = n.match(T[s]);
              if (null == r) continue;
              const i = r[1].toLowerCase();
              switch (i) {
                case 'https':
                case 'data':
                  return (
                    t.push({ type: 'url', value: n }),
                    { linkage: t, url: n }
                  );
                case 'ipfs': {
                  const e = k(n);
                  return (
                    t.push({ type: 'ipfs', value: n }),
                    t.push({ type: 'url', value: e }),
                    { linkage: t, url: e }
                  );
                }
                case 'erc721':
                case 'erc1155': {
                  const s =
                    'erc721' === i ? 'tokenURI(uint256)' : 'uri(uint256)';
                  t.push({ type: i, value: n });
                  const a = await this.getAddress();
                  if (null == a)
                    return (
                      t.push({ type: '!owner', value: '' }),
                      { url: null, linkage: t }
                    );
                  const o = (r[2] || '').split('/');
                  if (2 !== o.length)
                    return (
                      t.push({ type: `!${i}caip`, value: r[2] || '' }),
                      { url: null, linkage: t }
                    );
                  const c = o[1],
                    l = new g.NZ(
                      o[0],
                      [
                        'function tokenURI(uint) view returns (string)',
                        'function ownerOf(uint) view returns (address)',
                        'function uri(uint) view returns (string)',
                        'function balanceOf(address, uint256) view returns (uint)',
                      ],
                      this.provider
                    );
                  if ('erc721' === i) {
                    const e = await l.ownerOf(c);
                    if (a !== e)
                      return (
                        t.push({ type: '!owner', value: e }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: 'owner', value: e });
                  } else if ('erc1155' === i) {
                    const e = await l.balanceOf(a, c);
                    if (!e)
                      return (
                        t.push({ type: '!balance', value: '0' }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: 'balance', value: e.toString() });
                  }
                  let u = await l[s](c);
                  if (null == u || '0x' === u)
                    return (
                      t.push({ type: '!metadata-url', value: '' }),
                      { url: null, linkage: t }
                    );
                  (t.push({ type: 'metadata-url-base', value: u }),
                    'erc1155' === i &&
                      ((u = u.replace('{id}', (0, f.up)(c, 32).substring(2))),
                      t.push({ type: 'metadata-url-expanded', value: u })),
                    u.match(/^ipfs:/i) && (u = k(u)),
                    t.push({ type: 'metadata-url', value: u }));
                  let h = {};
                  const w = await new p.ui(u).send();
                  w.assertOk();
                  try {
                    h = w.bodyJson;
                  } catch (e) {
                    try {
                      t.push({ type: '!metadata', value: w.bodyText });
                    } catch (e) {
                      const n = w.body;
                      return (
                        n && t.push({ type: '!metadata', value: (0, d.c$)(n) }),
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
                  let y = h.image;
                  if ('string' != typeof y)
                    return (
                      t.push({ type: '!imageUrl', value: '' }),
                      { url: null, linkage: t }
                    );
                  if (y.match(/^(https:\/\/|data:)/i));
                  else {
                    if (null == y.match(N))
                      return (
                        t.push({ type: '!imageUrl-ipfs', value: y }),
                        { url: null, linkage: t }
                      );
                    (t.push({ type: 'imageUrl-ipfs', value: y }), (y = k(y)));
                  }
                  return (
                    t.push({ type: 'url', value: y }),
                    { linkage: t, url: y }
                  );
                }
              }
            }
          } catch (e) {}
          return { linkage: t, url: null };
        }
        static async getEnsAddress(t) {
          const e = await t.getNetwork(),
            n = e.getPlugin('org.ethers.plugins.network.Ens');
          return (
            (0, s.vA)(
              n,
              'network does not support ENS',
              'UNSUPPORTED_OPERATION',
              { operation: 'getEnsAddress', info: { network: e } }
            ),
            n.address
          );
        }
        static async #s(t, e) {
          const n = await O.getEnsAddress(t);
          try {
            const s = new g.NZ(
                n,
                ['function resolver(bytes32) view returns (address)'],
                t
              ),
              r = await s.resolver((0, y.kM)(e), { enableCcipRead: !0 });
            return r === w.j ? null : r;
          } catch (s) {
            throw s;
          }
        }
        static async fromName(t, e) {
          let n = e;
          for (;;) {
            if ('' === n || '.' === n) return null;
            if ('eth' !== e && 'eth' === n) return null;
            const s = await O.#s(t, n);
            if (null != s) {
              const r = new O(t, s, e);
              return n === e || (await r.supportsWildcard()) ? r : null;
            }
            n = n.split('.').slice(1).join('.');
          }
        }
      }
      var R = n(2703),
        E = n(6533);
      const _ = BigInt(0);
      function x(t, e) {
        return (n) => (null == n ? e : t(n));
      }
      function A(t, e) {
        return (n) => {
          if (e && null == n) return null;
          if (!Array.isArray(n)) throw new Error('not an array');
          return n.map((e) => t(e));
        };
      }
      function I(t, e) {
        return (n) => {
          const r = {};
          for (const a in t) {
            let o = a;
            if (e && a in e && !(o in n))
              for (const t of e[a])
                if (t in n) {
                  o = t;
                  break;
                }
            try {
              const e = t[a](n[o]);
              void 0 !== e && (r[a] = e);
            } catch (i) {
              const t = i instanceof Error ? i.message : 'not-an-error';
              (0, s.vA)(!1, `invalid value for value.${a} (${t})`, 'BAD_DATA', {
                value: n,
              });
            }
          }
          return r;
        };
      }
      function U(t) {
        return ((0, s.MR)((0, d.Lo)(t, !0), 'invalid data', 'value', t), t);
      }
      function F(t) {
        return ((0, s.MR)((0, d.Lo)(t, 32), 'invalid hash', 'value', t), t);
      }
      const S = I(
          {
            address: i.b,
            blockHash: F,
            blockNumber: f.WZ,
            data: U,
            index: f.WZ,
            removed: x((t) => {
              switch (t) {
                case !0:
                case 'true':
                  return !0;
                case !1:
                case 'false':
                  return !1;
              }
              (0, s.MR)(
                !1,
                `invalid boolean; ${JSON.stringify(t)}`,
                'value',
                t
              );
            }, !1),
            topics: A(F),
            transactionHash: F,
            transactionIndex: f.WZ,
          },
          { index: ['logIndex'] }
        ),
        C = I(
          {
            hash: x(F),
            parentHash: F,
            parentBeaconBlockRoot: x(F, null),
            number: f.WZ,
            timestamp: f.WZ,
            nonce: x(U),
            difficulty: f.Ab,
            gasLimit: f.Ab,
            gasUsed: f.Ab,
            stateRoot: x(F, null),
            receiptsRoot: x(F, null),
            blobGasUsed: x(f.Ab, null),
            excessBlobGas: x(f.Ab, null),
            miner: x(i.b),
            prevRandao: x(F, null),
            extraData: U,
            baseFeePerGas: x(f.Ab),
          },
          { prevRandao: ['mixHash'] }
        ),
        D = I(
          {
            transactionIndex: f.WZ,
            blockNumber: f.WZ,
            transactionHash: F,
            address: i.b,
            topics: A(F),
            data: U,
            index: f.WZ,
            blockHash: F,
          },
          { index: ['logIndex'] }
        ),
        L = I(
          {
            to: x(i.b, null),
            from: x(i.b, null),
            contractAddress: x(i.b, null),
            index: f.WZ,
            root: x(d.c$),
            gasUsed: f.Ab,
            blobGasUsed: x(f.Ab, null),
            logsBloom: x(U),
            blockHash: F,
            hash: F,
            logs: A((t) => D(t)),
            blockNumber: f.WZ,
            cumulativeGasUsed: f.Ab,
            effectiveGasPrice: x(f.Ab),
            blobGasPrice: x(f.Ab, null),
            status: x(f.WZ),
            type: x(f.WZ, 0),
          },
          {
            effectiveGasPrice: ['gasPrice'],
            hash: ['transactionHash'],
            index: ['transactionIndex'],
          }
        );
      function B(t) {
        t.to &&
          (0, f.Ab)(t.to) === _ &&
          (t.to = '0x0000000000000000000000000000000000000000');
        const e = I(
          {
            hash: F,
            index: x(f.WZ, void 0),
            type: (t) => ('0x' === t || null == t ? 0 : (0, f.WZ)(t)),
            accessList: x(c.$, null),
            blobVersionedHashes: x(A(F, !0), null),
            authorizationList: x(
              A((t) => {
                let e;
                if (t.signature) e = t.signature;
                else {
                  let n = t.yParity;
                  ('0x1b' === n ? (n = 0) : '0x1c' === n && (n = 1),
                    (e = Object.assign({}, t, { yParity: n })));
                }
                return {
                  address: (0, i.b)(t.address),
                  chainId: (0, f.Ab)(t.chainId),
                  nonce: (0, f.Ab)(t.nonce),
                  signature: E.t.from(e),
                };
              }, !1),
              null
            ),
            blockHash: x(F, null),
            blockNumber: x(f.WZ, null),
            transactionIndex: x(f.WZ, null),
            from: i.b,
            gasPrice: x(f.Ab),
            maxPriorityFeePerGas: x(f.Ab),
            maxFeePerGas: x(f.Ab),
            maxFeePerBlobGas: x(f.Ab, null),
            gasLimit: f.Ab,
            to: x(i.b, null),
            value: f.Ab,
            nonce: f.WZ,
            data: U,
            creates: x(i.b, null),
            chainId: x(f.Ab, null),
          },
          { data: ['input'], gasLimit: ['gas'], index: ['transactionIndex'] }
        )(t);
        if (
          (null == e.to && null == e.creates && (e.creates = (0, R.t)(e)),
          (1 !== t.type && 2 !== t.type) ||
            null != t.accessList ||
            (e.accessList = []),
          t.signature
            ? (e.signature = E.t.from(t.signature))
            : (e.signature = E.t.from(t)),
          null == e.chainId)
        ) {
          const t = e.signature.legacyChainId;
          null != t && (e.chainId = t);
        }
        return (
          e.blockHash && (0, f.Ab)(e.blockHash) === _ && (e.blockHash = null),
          e
        );
      }
      class G {
        name;
        constructor(t) {
          (0, u.n)(this, { name: t });
        }
        clone() {
          return new G(this.name);
        }
      }
      class H extends G {
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
          const n = { effectiveBlock: t };
          function r(t, r) {
            let i = (e || {})[t];
            (null == i && (i = r),
              (0, s.MR)(
                'number' == typeof i,
                `invalud value for ${t}`,
                'costs',
                e
              ),
              (n[t] = i));
          }
          (r('txBase', 21e3),
            r('txCreate', 32e3),
            r('txDataZero', 4),
            r('txDataNonzero', 16),
            r('txAccessListStorageKey', 1900),
            r('txAccessListAddress', 2400),
            (0, u.n)(this, n));
        }
        clone() {
          return new H(this.effectiveBlock, this);
        }
      }
      class $ extends G {
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
          return new $(this.address, this.targetNetwork);
        }
      }
      class j extends G {
        #r;
        #i;
        get url() {
          return this.#r;
        }
        get processFunc() {
          return this.#i;
        }
        constructor(t, e) {
          (super('org.ethers.plugins.network.FetchUrlFeeDataPlugin'),
            (this.#r = t),
            (this.#i = e));
        }
        clone() {
          return this;
        }
      }
      const M = new Map();
      class J {
        #a;
        #o;
        #c;
        constructor(t, e) {
          ((this.#a = t), (this.#o = (0, f.Ab)(e)), (this.#c = new Map()));
        }
        toJSON() {
          return { name: this.name, chainId: String(this.chainId) };
        }
        get name() {
          return this.#a;
        }
        set name(t) {
          this.#a = t;
        }
        get chainId() {
          return this.#o;
        }
        set chainId(t) {
          this.#o = (0, f.Ab)(t, 'chainId');
        }
        matches(t) {
          if (null == t) return !1;
          if ('string' == typeof t) {
            try {
              return this.chainId === (0, f.Ab)(t);
            } catch (e) {}
            return this.name === t;
          }
          if ('number' == typeof t || 'bigint' == typeof t) {
            try {
              return this.chainId === (0, f.Ab)(t);
            } catch (e) {}
            return !1;
          }
          if ('object' == typeof t) {
            if (null != t.chainId) {
              try {
                return this.chainId === (0, f.Ab)(t.chainId);
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
          const t = new J(this.name, this.chainId);
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
          let n = e.txBase;
          if ((null == t.to && (n += e.txCreate), t.data))
            for (let s = 2; s < t.data.length; s += 2)
              '00' === t.data.substring(s, s + 2)
                ? (n += e.txDataZero)
                : (n += e.txDataNonzero);
          if (t.accessList) {
            const s = (0, c.$)(t.accessList);
            for (const t in s)
              n +=
                e.txAccessListAddress +
                e.txAccessListStorageKey * s[t].storageKeys.length;
          }
          return n;
        }
        static from(t) {
          if (
            ((() => {
              function t(t, e, n) {
                const s = () => {
                  const s = new J(t, e);
                  return (
                    null != n.ensNetwork &&
                      s.attachPlugin(new $(null, n.ensNetwork)),
                    s.attachPlugin(new H()),
                    (n.plugins || []).forEach((t) => {
                      s.attachPlugin(t);
                    }),
                    s
                  );
                };
                (J.register(t, s),
                  J.register(e, s),
                  n.altNames &&
                    n.altNames.forEach((t) => {
                      J.register(t, s);
                    }));
              }
              K ||
                ((K = !0),
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
                  plugins: [z('https://gasstation.polygon.technology/v2')],
                }),
                t('matic-amoy', 80002, {}),
                t('matic-mumbai', 80001, {
                  altNames: ['maticMumbai', 'maticmum'],
                  plugins: [
                    z('https://gasstation-testnet.polygon.technology/v2'),
                  ],
                }),
                t('optimism', 10, { ensNetwork: 1, plugins: [] }),
                t('optimism-goerli', 420, {}),
                t('optimism-sepolia', 11155420, {}),
                t('xdai', 100, { ensNetwork: 1 }));
            })(),
            null == t)
          )
            return J.from('mainnet');
          if (
            ('number' == typeof t && (t = BigInt(t)),
            'string' == typeof t || 'bigint' == typeof t)
          ) {
            const e = M.get(t);
            if (e) return e();
            if ('bigint' == typeof t) return new J('unknown', t);
            (0, s.MR)(!1, 'unknown network', 'network', t);
          }
          if ('function' == typeof t.clone) return t.clone();
          if ('object' == typeof t) {
            (0, s.MR)(
              'string' == typeof t.name && 'number' == typeof t.chainId,
              'invalid network object name or chainId',
              'network',
              t
            );
            const e = new J(t.name, t.chainId);
            return (
              (t.ensAddress || null != t.ensNetwork) &&
                e.attachPlugin(new $(t.ensAddress, t.ensNetwork)),
              e
            );
          }
          (0, s.MR)(!1, 'invalid network', 'network', t);
        }
        static register(t, e) {
          'number' == typeof t && (t = BigInt(t));
          const n = M.get(t);
          (n &&
            (0, s.MR)(
              !1,
              `conflicting network for ${JSON.stringify(n.name)}`,
              'nameOrChainId',
              t
            ),
            M.set(t, e));
        }
      }
      function q(t, e) {
        const n = String(t);
        if (!n.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`);
        const s = n.split('.');
        if ((1 === s.length && s.push(''), 2 !== s.length))
          throw new Error(`invalid gwei value: ${t}`);
        for (; s[1].length < e; ) s[1] += '0';
        if (s[1].length > 9) {
          let t = BigInt(s[1].substring(0, 9));
          (s[1].substring(9).match(/^0+$/) || t++, (s[1] = t.toString()));
        }
        return BigInt(s[0] + s[1]);
      }
      function z(t) {
        return new j(t, async (t, e, n) => {
          let r;
          n.setHeader('User-Agent', 'ethers');
          try {
            const [e, s] = await Promise.all([n.send(), t()]);
            r = e;
            const i = r.bodyJson.standard;
            return {
              gasPrice: s.gasPrice,
              maxFeePerGas: q(i.maxFee, 9),
              maxPriorityFeePerGas: q(i.maxPriorityFee, 9),
            };
          } catch (i) {
            (0, s.vA)(
              !1,
              `error encountered with polygon gas station (${JSON.stringify(n.url)})`,
              'SERVER_ERROR',
              { request: n, response: r, error: i }
            );
          }
        });
      }
      let K = !1;
      var W = n(8931);
      function V(t) {
        return JSON.parse(JSON.stringify(t));
      }
      class X {
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
        async #f() {
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
          null != this.#u && (this.#u = this.#l.o(this.#f.bind(this), this.#h));
        }
        start() {
          this.#u ||
            ((this.#u = this.#l.o(this.#f.bind(this), this.#h)), this.#f());
        }
        stop() {
          this.#u && (this.#l.l(this.#u), (this.#u = null));
        }
        pause(t) {
          (this.stop(), t && (this.#d = -2));
        }
        resume() {
          this.start();
        }
      }
      class Z {
        #l;
        #f;
        #p;
        constructor(t) {
          ((this.#l = t),
            (this.#p = !1),
            (this.#f = (t) => {
              this.u(t, this.#l);
            }));
        }
        async u(t, e) {
          throw new Error('sub-classes must override this');
        }
        start() {
          this.#p ||
            ((this.#p = !0), this.#f(-2), this.#l.on('block', this.#f));
        }
        stop() {
          this.#p && ((this.#p = !1), this.#l.off('block', this.#f));
        }
        pause(t) {
          this.stop();
        }
        resume() {
          this.start();
        }
      }
      class Y extends Z {
        #w;
        #g;
        constructor(t, e) {
          (super(t), (this.#w = e), (this.#g = -2));
        }
        pause(t) {
          (t && (this.#g = -2), super.pause(t));
        }
        async u(t, e) {
          const n = await e.getBlock(this.#w);
          null != n &&
            (-2 === this.#g
              ? (this.#g = n.number)
              : n.number > this.#g &&
                (e.emit(this.#w, n.number), (this.#g = n.number)));
        }
      }
      class Q extends Z {
        #y;
        constructor(t, e) {
          (super(t), (this.#y = V(e)));
        }
        async u(t, e) {
          throw new Error('@TODO');
        }
      }
      class tt extends Z {
        #m;
        constructor(t, e) {
          (super(t), (this.#m = e));
        }
        async u(t, e) {
          const n = await e.getTransactionReceipt(this.#m);
          n && e.emit(this.#m, n);
        }
      }
      class et {
        #l;
        #y;
        #u;
        #p;
        #d;
        constructor(t, e) {
          ((this.#l = t),
            (this.#y = V(e)),
            (this.#u = this.#f.bind(this)),
            (this.#p = !1),
            (this.#d = -2));
        }
        async #f(t) {
          if (-2 === this.#d) return;
          const e = V(this.#y);
          ((e.fromBlock = this.#d + 1), (e.toBlock = t));
          const n = await this.#l.getLogs(e);
          if (0 !== n.length)
            for (const s of n)
              (this.#l.emit(this.#y, s), (this.#d = s.blockNumber));
          else this.#d < t - 60 && (this.#d = t - 60);
        }
        start() {
          this.#p ||
            ((this.#p = !0),
            -2 === this.#d &&
              this.#l.getBlockNumber().then((t) => {
                this.#d = t;
              }),
            this.#l.on('block', this.#u));
        }
        stop() {
          this.#p && ((this.#p = !1), this.#l.off('block', this.#u));
        }
        pause(t) {
          (this.stop(), t && (this.#d = -2));
        }
        resume() {
          this.start();
        }
      }
      const nt = BigInt(2);
      function st(t) {
        return t && 'function' == typeof t.then;
      }
      function rt(t, e) {
        return (
          t +
          ':' +
          JSON.stringify(e, (t, e) => {
            if (null == e) return 'null';
            if ('bigint' == typeof e) return `bigint:${e.toString()}`;
            if ('string' == typeof e) return e.toLowerCase();
            if ('object' == typeof e && !Array.isArray(e)) {
              const t = Object.keys(e);
              return (t.sort(), t.reduce((t, n) => ((t[n] = e[n]), t), {}));
            }
            return e;
          })
        );
      }
      class it {
        name;
        constructor(t) {
          (0, u.n)(this, { name: t });
        }
        start() {}
        stop() {}
        pause(t) {}
        resume() {}
      }
      function at(t) {
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
          return { type: 'transaction', tag: rt('tx', { hash: e }), hash: e };
        }
        if (t.orphan) {
          const e = t;
          return {
            type: 'orphan',
            tag: rt('orphan', e),
            filter: ((n = e), JSON.parse(JSON.stringify(n))),
          };
        }
        var n;
        if (t.address || t.topics) {
          const n = t,
            s = {
              topics: (n.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                    ? at(t.map((t) => t.toLowerCase()))
                    : t.toLowerCase()
              ),
            };
          if (n.address) {
            const t = [],
              r = [],
              i = (n) => {
                (0, d.Lo)(n)
                  ? t.push(n)
                  : r.push(
                      (async () => {
                        t.push(await (0, a.tG)(n, e));
                      })()
                    );
              };
            (Array.isArray(n.address) ? n.address.forEach(i) : i(n.address),
              r.length && (await Promise.all(r)),
              (s.address = at(t.map((t) => t.toLowerCase()))));
          }
          return { filter: s, tag: rt('event', s), type: 'event' };
        }
        (0, s.MR)(!1, 'unknown ProviderEvent', 'event', t);
      }
      function ct() {
        return new Date().getTime();
      }
      const lt = { cacheTimeout: 250, pollingInterval: 4e3 };
      class ut {
        #b;
        #c;
        #v;
        #k;
        #P;
        #N;
        #T;
        #O;
        #R;
        #E;
        #_;
        #x;
        constructor(t, e) {
          if (((this.#x = Object.assign({}, lt, e || {})), 'any' === t))
            ((this.#N = !0), (this.#P = null));
          else if (t) {
            const e = J.from(t);
            ((this.#N = !1),
              (this.#P = Promise.resolve(e)),
              setTimeout(() => {
                this.emit('network', e, null);
              }, 0));
          } else ((this.#N = !1), (this.#P = null));
          ((this.#O = -1),
            (this.#T = new Map()),
            (this.#b = new Map()),
            (this.#c = new Map()),
            (this.#v = null),
            (this.#k = !1),
            (this.#R = 1),
            (this.#E = new Map()),
            (this.#_ = !1));
        }
        get pollingInterval() {
          return this.#x.pollingInterval;
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
        async #A(t) {
          const e = this.#x.cacheTimeout;
          if (e < 0) return await this.h(t);
          const n = rt(t.method, t);
          let s = this.#T.get(n);
          return (
            s ||
              ((s = this.h(t)),
              this.#T.set(n, s),
              setTimeout(() => {
                this.#T.get(n) === s && this.#T.delete(n);
              }, e)),
            await s
          );
        }
        async ccipReadFetch(t, e, n) {
          if (this.disableCcipRead || 0 === n.length || null == t.to)
            return null;
          const r = t.to.toLowerCase(),
            i = e.toLowerCase(),
            a = [];
          for (let c = 0; c < n.length; c++) {
            const e = n[c],
              l = e.replace('{sender}', r).replace('{data}', i),
              u = new p.ui(l);
            (-1 === e.indexOf('{data}') && (u.body = { data: i, sender: r }),
              this.emit('debug', {
                action: 'sendCcipReadFetchRequest',
                request: u,
                index: c,
                urls: n,
              }));
            let h,
              d = 'unknown error';
            try {
              h = await u.send();
            } catch (o) {
              (a.push(o.message),
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
            ((0, s.vA)(
              h.statusCode < 400 || h.statusCode >= 500,
              `response not found during CCIP fetch: ${d}`,
              'OFFCHAIN_FAULT',
              {
                reason: '404_MISSING_RESOURCE',
                transaction: t,
                info: { url: e, errorMessage: d },
              }
            ),
              a.push(d));
          }
          (0, s.vA)(
            !1,
            `error encountered during CCIP fetch: ${a.map((t) => JSON.stringify(t)).join(', ')}`,
            'OFFCHAIN_FAULT',
            {
              reason: '500_SERVER_ERROR',
              transaction: t,
              info: { urls: n, errorMessages: a },
            }
          );
        }
        p(t, e) {
          return new W.eB(
            ((t) => {
              const e = C(t);
              return (
                (e.transactions = t.transactions.map((t) =>
                  'string' == typeof t ? t : B(t)
                )),
                e
              );
            })(t),
            this
          );
        }
        m(t, e) {
          return new W.tG(((t) => S(t))(t), this);
        }
        v(t, e) {
          return new W.z5(((t) => L(t))(t), this);
        }
        P(t, e) {
          return new W.uI(B(t), this);
        }
        N() {
          (0, s.vA)(
            !1,
            'sub-classes must implement this',
            'UNSUPPORTED_OPERATION',
            { operation: '_detectNetwork' }
          );
        }
        async h(t) {
          (0, s.vA)(
            !1,
            `unsupported method: ${t.method}`,
            'UNSUPPORTED_OPERATION',
            { operation: t.method, info: t }
          );
        }
        async getBlockNumber() {
          const t = (0, f.WZ)(
            await this.#A({ method: 'getBlockNumber' }),
            '%response'
          );
          return (this.#O >= 0 && (this.#O = t), t);
        }
        T(t) {
          return (0, a.tG)(t, this);
        }
        O(t) {
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
              : (0, f.nD)(t)
            : ('bigint' == typeof t && (t = (0, f.WZ)(t, 'blockTag')),
              'number' == typeof t
                ? t >= 0
                  ? (0, f.nD)(t)
                  : this.#O >= 0
                    ? (0, f.nD)(this.#O + t)
                    : this.getBlockNumber().then((e) => (0, f.nD)(e + t))
                : void (0, s.MR)(!1, 'invalid blockTag', 'blockTag', t));
        }
        _(t) {
          const e = (t.topics || []).map((t) =>
              null == t
                ? null
                : Array.isArray(t)
                  ? at(t.map((t) => t.toLowerCase()))
                  : t.toLowerCase()
            ),
            n = 'blockHash' in t ? t.blockHash : void 0,
            s = (t, s, r) => {
              let i;
              switch (t.length) {
                case 0:
                  break;
                case 1:
                  i = t[0];
                  break;
                default:
                  (t.sort(), (i = t));
              }
              if (n && (null != s || null != r))
                throw new Error('invalid filter');
              const a = {};
              return (
                i && (a.address = i),
                e.length && (a.topics = e),
                s && (a.fromBlock = s),
                r && (a.toBlock = r),
                n && (a.blockHash = n),
                a
              );
            };
          let r,
            i,
            a = [];
          if (t.address)
            if (Array.isArray(t.address))
              for (const o of t.address) a.push(this.T(o));
            else a.push(this.T(t.address));
          return (
            'fromBlock' in t && (r = this.O(t.fromBlock)),
            'toBlock' in t && (i = this.O(t.toBlock)),
            a.filter((t) => 'string' != typeof t).length ||
            (null != r && 'string' != typeof r) ||
            (null != i && 'string' != typeof i)
              ? Promise.all([Promise.all(a), r, i]).then((t) =>
                  s(t[0], t[1], t[2])
                )
              : s(a, r, i)
          );
        }
        A(t) {
          const e = (0, W.VS)(t),
            n = [];
          if (
            (['to', 'from'].forEach((t) => {
              if (null == e[t]) return;
              const s = (0, a.tG)(e[t], this);
              st(s)
                ? n.push(
                    (async () => {
                      e[t] = await s;
                    })()
                  )
                : (e[t] = s);
            }),
            null != e.blockTag)
          ) {
            const t = this.O(e.blockTag);
            st(t)
              ? n.push(
                  (async () => {
                    e.blockTag = await t;
                  })()
                )
              : (e.blockTag = t);
          }
          return n.length ? (async () => (await Promise.all(n), e))() : e;
        }
        async getNetwork() {
          if (null == this.#P) {
            const t = (async () => {
              try {
                const t = await this.N();
                return (this.emit('network', t, null), t);
              } catch (e) {
                throw (this.#P === t && (this.#P = null), e);
              }
            })();
            return ((this.#P = t), (await t).clone());
          }
          const t = this.#P,
            [e, n] = await Promise.all([t, this.N()]);
          return (
            e.chainId !== n.chainId &&
              (this.#N
                ? (this.emit('network', n, e),
                  this.#P === t && (this.#P = Promise.resolve(n)))
                : (0, s.vA)(
                    !1,
                    `network changed: ${e.chainId} => ${n.chainId} `,
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
                I: e,
                gasPrice: n,
                priorityFee: s,
              } = await (0, u.k)({
                I: this.#I('latest', !1),
                gasPrice: (async () => {
                  try {
                    const t = await this.#A({ method: 'getGasPrice' });
                    return (0, f.Ab)(t, '%response');
                  } catch (t) {}
                  return null;
                })(),
                priorityFee: (async () => {
                  try {
                    const t = await this.#A({ method: 'getPriorityFee' });
                    return (0, f.Ab)(t, '%response');
                  } catch (t) {}
                  return null;
                })(),
              });
              let r = null,
                i = null;
              const a = this.p(e, t);
              return (
                a &&
                  a.baseFeePerGas &&
                  ((i = null != s ? s : BigInt('1000000000')),
                  (r = a.baseFeePerGas * nt + i)),
                new W.J9(n, r, i)
              );
            },
            n = t.getPlugin('org.ethers.plugins.network.FetchUrlFeeDataPlugin');
          if (n) {
            const t = new p.ui(n.url),
              s = await n.processFunc(e, this, t);
            return new W.J9(s.gasPrice, s.maxFeePerGas, s.maxPriorityFeePerGas);
          }
          return await e();
        }
        async estimateGas(t) {
          let e = this.A(t);
          return (
            st(e) && (e = await e),
            (0, f.Ab)(
              await this.#A({ method: 'estimateGas', transaction: e }),
              '%response'
            )
          );
        }
        async #U(t, e, n) {
          (0, s.vA)(
            n < 10,
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
          const r = (0, W.VS)(t);
          try {
            return (0, d.c$)(
              await this.h({ method: 'call', transaction: r, blockTag: e })
            );
          } catch (i) {
            if (
              !this.disableCcipRead &&
              (0, s.E)(i) &&
              i.data &&
              n >= 0 &&
              'latest' === e &&
              null != r.to &&
              '0x556f1830' === (0, d.ZG)(i.data, 0, 4)
            ) {
              const t = i.data,
                o = await (0, a.tG)(r.to, this);
              let c;
              try {
                c = ((t) => {
                  const e = {
                    sender: '',
                    urls: [],
                    calldata: '',
                    selector: '',
                    extraData: '',
                    errorArgs: [],
                  };
                  (0, s.vA)(
                    (0, d.pO)(t) >= 160,
                    'insufficient OffchainLookup data',
                    'OFFCHAIN_FAULT',
                    { reason: 'insufficient OffchainLookup data' }
                  );
                  const n = (0, d.ZG)(t, 0, 32);
                  ((0, s.vA)(
                    (0, d.ZG)(n, 0, 12) === (0, d.ZG)(yt, 0, 12),
                    'corrupt OffchainLookup sender',
                    'OFFCHAIN_FAULT',
                    { reason: 'corrupt OffchainLookup sender' }
                  ),
                    (e.sender = (0, d.ZG)(n, 12)));
                  try {
                    const n = [],
                      s = (0, f.WZ)((0, d.ZG)(t, 32, 64)),
                      r = (0, f.WZ)((0, d.ZG)(t, s, s + 32)),
                      i = (0, d.ZG)(t, s + 32);
                    for (let t = 0; t < r; t++) {
                      const e = ht(i, 32 * t);
                      if (null == e) throw new Error('abort');
                      n.push(e);
                    }
                    e.urls = n;
                  } catch (i) {
                    (0, s.vA)(
                      !1,
                      'corrupt OffchainLookup urls',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup urls' }
                    );
                  }
                  try {
                    const n = dt(t, 64);
                    if (null == n) throw new Error('abort');
                    e.calldata = n;
                  } catch (i) {
                    (0, s.vA)(
                      !1,
                      'corrupt OffchainLookup calldata',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup calldata' }
                    );
                  }
                  ((0, s.vA)(
                    (0, d.ZG)(t, 100, 128) === (0, d.ZG)(yt, 0, 28),
                    'corrupt OffchainLookup callbaackSelector',
                    'OFFCHAIN_FAULT',
                    { reason: 'corrupt OffchainLookup callbaackSelector' }
                  ),
                    (e.selector = (0, d.ZG)(t, 96, 100)));
                  try {
                    const n = dt(t, 128);
                    if (null == n) throw new Error('abort');
                    e.extraData = n;
                  } catch (i) {
                    (0, s.vA)(
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
                })((0, d.ZG)(i.data, 4));
              } catch (i) {
                (0, s.vA)(!1, i.message, 'OFFCHAIN_FAULT', {
                  reason: 'BAD_DATA',
                  transaction: r,
                  info: { data: t },
                });
              }
              (0, s.vA)(
                c.sender.toLowerCase() === o.toLowerCase(),
                'CCIP Read sender mismatch',
                'CALL_EXCEPTION',
                {
                  action: 'call',
                  data: t,
                  reason: 'OffchainLookup',
                  transaction: r,
                  invocation: null,
                  revert: {
                    signature:
                      'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    name: 'OffchainLookup',
                    args: c.errorArgs,
                  },
                }
              );
              const l = await this.ccipReadFetch(r, c.calldata, c.urls);
              (0, s.vA)(
                null != l,
                'CCIP Read failed to fetch data',
                'OFFCHAIN_FAULT',
                {
                  reason: 'FETCH_FAILED',
                  transaction: r,
                  info: { data: i.data, errorArgs: c.errorArgs },
                }
              );
              const u = {
                to: o,
                data: (0, d.xW)([c.selector, gt([l, c.extraData])]),
              };
              this.emit('debug', {
                action: 'sendCcipReadCall',
                transaction: u,
              });
              try {
                const t = await this.#U(u, e, n + 1);
                return (
                  this.emit('debug', {
                    action: 'receiveCcipReadCallResult',
                    transaction: Object.assign({}, u),
                    result: t,
                  }),
                  t
                );
              } catch (i) {
                throw (
                  this.emit('debug', {
                    action: 'receiveCcipReadCallError',
                    transaction: Object.assign({}, u),
                    error: i,
                  }),
                  i
                );
              }
            }
            throw i;
          }
        }
        async #F(t) {
          const { value: e } = await (0, u.k)({
            network: this.getNetwork(),
            value: t,
          });
          return e;
        }
        async call(t) {
          const { tx: e, blockTag: n } = await (0, u.k)({
            tx: this.A(t),
            blockTag: this.O(t.blockTag),
          });
          return await this.#F(this.#U(e, n, t.enableCcipRead ? 0 : -1));
        }
        async #S(t, e, n) {
          let s = this.T(e),
            r = this.O(n);
          return (
            ('string' == typeof s && 'string' == typeof r) ||
              ([s, r] = await Promise.all([s, r])),
            await this.#F(
              this.#A(Object.assign(t, { address: s, blockTag: r }))
            )
          );
        }
        async getBalance(t, e) {
          return (0, f.Ab)(
            await this.#S({ method: 'getBalance' }, t, e),
            '%response'
          );
        }
        async getTransactionCount(t, e) {
          return (0, f.WZ)(
            await this.#S({ method: 'getTransactionCount' }, t, e),
            '%response'
          );
        }
        async getCode(t, e) {
          return (0, d.c$)(await this.#S({ method: 'getCode' }, t, e));
        }
        async getStorage(t, e, n) {
          const s = (0, f.Ab)(e, 'position');
          return (0, d.c$)(
            await this.#S({ method: 'getStorage', position: s }, t, n)
          );
        }
        async broadcastTransaction(t) {
          const {
              blockNumber: e,
              hash: n,
              network: s,
            } = await (0, u.k)({
              blockNumber: this.getBlockNumber(),
              hash: this.h({
                method: 'broadcastTransaction',
                signedTransaction: t,
              }),
              network: this.getNetwork(),
            }),
            r = m.Z.from(t);
          if (r.hash !== n)
            throw new Error('@TODO: the returned hash did not match');
          return this.P(r, s).replaceableTransaction(e);
        }
        async #I(t, e) {
          if ((0, d.Lo)(t, 32))
            return await this.#A({
              method: 'getBlock',
              blockHash: t,
              includeTransactions: e,
            });
          let n = this.O(t);
          return (
            'string' != typeof n && (n = await n),
            await this.#A({
              method: 'getBlock',
              blockTag: n,
              includeTransactions: e,
            })
          );
        }
        async getBlock(t, e) {
          const { network: n, params: s } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#I(t, !!e),
          });
          return null == s ? null : this.p(s, n);
        }
        async getTransaction(t) {
          const { network: e, params: n } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#A({ method: 'getTransaction', hash: t }),
          });
          return null == n ? null : this.P(n, e);
        }
        async getTransactionReceipt(t) {
          const { network: e, params: n } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#A({ method: 'getTransactionReceipt', hash: t }),
          });
          if (null == n) return null;
          if (null == n.gasPrice && null == n.effectiveGasPrice) {
            const e = await this.#A({ method: 'getTransaction', hash: t });
            if (null == e)
              throw new Error(
                'report this; could not find tx or effectiveGasPrice'
              );
            n.effectiveGasPrice = e.gasPrice;
          }
          return this.v(n, e);
        }
        async getTransactionResult(t) {
          const { result: e } = await (0, u.k)({
            network: this.getNetwork(),
            result: this.#A({ method: 'getTransactionResult', hash: t }),
          });
          return null == e ? null : (0, d.c$)(e);
        }
        async getLogs(t) {
          let e = this._(t);
          st(e) && (e = await e);
          const { network: n, params: s } = await (0, u.k)({
            network: this.getNetwork(),
            params: this.#A({ method: 'getLogs', filter: e }),
          });
          return s.map((t) => this.m(t, n));
        }
        U(t) {
          (0, s.vA)(
            !1,
            'provider cannot connect to target network',
            'UNSUPPORTED_OPERATION',
            { operation: '_getProvider()' }
          );
        }
        async getResolver(t) {
          return await O.fromName(this, t);
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
          t = (0, i.b)(t);
          const e = (0, y.kM)(t.substring(2).toLowerCase() + '.addr.reverse');
          try {
            const n = await O.getEnsAddress(this),
              s = new g.NZ(
                n,
                ['function resolver(bytes32) view returns (address)'],
                this
              ),
              r = await s.resolver(e);
            if (null == r || r === w.j) return null;
            const i = new g.NZ(
                r,
                ['function name(bytes32) view returns (string)'],
                this
              ),
              a = await i.name(e);
            return (await this.resolveName(a)) !== t ? null : a;
          } catch (n) {
            if ((0, s.bJ)(n, 'BAD_DATA') && '0x' === n.value) return null;
            if ((0, s.bJ)(n, 'CALL_EXCEPTION')) return null;
            throw n;
          }
        }
        async waitForTransaction(t, e, n) {
          const r = null != e ? e : 1;
          return 0 === r
            ? this.getTransactionReceipt(t)
            : new Promise(async (e, i) => {
                let a = null;
                const o = async (n) => {
                  try {
                    const s = await this.getTransactionReceipt(t);
                    if (null != s && n - s.blockNumber + 1 >= r)
                      return (e(s), void (a && (clearTimeout(a), (a = null))));
                  } catch (s) {}
                  this.once('block', o);
                };
                (null != n &&
                  (a = setTimeout(() => {
                    null != a &&
                      ((a = null),
                      this.off('block', o),
                      i(
                        (0, s.xz)('timeout', 'TIMEOUT', { reason: 'timeout' })
                      ));
                  }, n)),
                  o(await this.getBlockNumber()));
              });
        }
        async waitForBlock(t) {
          (0, s.vA)(!1, 'not implemented yet', 'NOT_IMPLEMENTED', {
            operation: 'waitForBlock',
          });
        }
        l(t) {
          const e = this.#E.get(t);
          e && (e.timer && clearTimeout(e.timer), this.#E.delete(t));
        }
        o(t, e) {
          null == e && (e = 0);
          const n = this.#R++,
            s = () => {
              (this.#E.delete(n), t());
            };
          if (this.paused) this.#E.set(n, { timer: null, func: s, time: e });
          else {
            const t = setTimeout(s, e);
            this.#E.set(n, { timer: t, func: s, time: ct() });
          }
          return n;
        }
        F(t) {
          for (const e of this.#b.values()) t(e.subscriber);
        }
        S(t) {
          switch (t.type) {
            case 'debug':
            case 'error':
            case 'network':
              return new it(t.type);
            case 'block': {
              const t = new X(this);
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
        C(t, e) {
          for (const n of this.#b.values())
            if (n.subscriber === t) {
              (n.started && n.subscriber.stop(),
                (n.subscriber = e),
                n.started && e.start(),
                null != this.#v && e.pause(this.#v));
              break;
            }
        }
        async #C(t, e) {
          let n = await ot(t, this);
          return (
            'event' === n.type &&
              e &&
              e.length > 0 &&
              !0 === e[0].removed &&
              (n = await ot({ orphan: 'drop-log', log: e[0] }, this)),
            this.#b.get(n.tag) || null
          );
        }
        async #D(t) {
          const e = await ot(t, this),
            n = e.tag;
          let s = this.#b.get(n);
          return (
            s ||
              ((s = {
                subscriber: this.S(e),
                tag: n,
                addressableMap: new WeakMap(),
                nameMap: new Map(),
                started: !1,
                listeners: [],
              }),
              this.#b.set(n, s)),
            s
          );
        }
        async on(t, e) {
          const n = await this.#D(t);
          return (
            n.listeners.push({ listener: e, once: !1 }),
            n.started ||
              (n.subscriber.start(),
              (n.started = !0),
              null != this.#v && n.subscriber.pause(this.#v)),
            this
          );
        }
        async once(t, e) {
          const n = await this.#D(t);
          return (
            n.listeners.push({ listener: e, once: !0 }),
            n.started ||
              (n.subscriber.start(),
              (n.started = !0),
              null != this.#v && n.subscriber.pause(this.#v)),
            this
          );
        }
        async emit(t, ...e) {
          const n = await this.#C(t, e);
          if (!n || 0 === n.listeners.length) return !1;
          const s = n.listeners.length;
          return (
            (n.listeners = n.listeners.filter(({ listener: n, once: s }) => {
              const r = new b.z(this, s ? null : n, t);
              try {
                n.call(this, ...e, r);
              } catch (i) {}
              return !s;
            })),
            0 === n.listeners.length &&
              (n.started && n.subscriber.stop(), this.#b.delete(n.tag)),
            s > 0
          );
        }
        async listenerCount(t) {
          if (t) {
            const e = await this.#C(t);
            return e ? e.listeners.length : 0;
          }
          let e = 0;
          for (const { listeners: n } of this.#b.values()) e += n.length;
          return e;
        }
        async listeners(t) {
          if (t) {
            const e = await this.#C(t);
            return e ? e.listeners.map(({ listener: t }) => t) : [];
          }
          let e = [];
          for (const { listeners: n } of this.#b.values())
            e = e.concat(n.map(({ listener: t }) => t));
          return e;
        }
        async off(t, e) {
          const n = await this.#C(t);
          if (!n) return this;
          if (e) {
            const t = n.listeners.map(({ listener: t }) => t).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1);
          }
          return (
            (e && 0 !== n.listeners.length) ||
              (n.started && n.subscriber.stop(), this.#b.delete(n.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            const { tag: e, started: n, subscriber: s } = await this.#D(t);
            (n && s.stop(), this.#b.delete(e));
          } else
            for (const [e, { started: n, subscriber: s }] of this.#b)
              (n && s.stop(), this.#b.delete(e));
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
          for (const t of this.#E.keys()) this.l(t);
          this.#k = !0;
        }
        get paused() {
          return null != this.#v;
        }
        set paused(t) {
          !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
        }
        pause(t) {
          if (((this.#O = -1), null != this.#v)) {
            if (this.#v == !!t) return;
            (0, s.vA)(
              !1,
              'cannot change pause type; resume first',
              'UNSUPPORTED_OPERATION',
              { operation: 'pause' }
            );
          }
          (this.F((e) => e.pause(t)), (this.#v = !!t));
          for (const e of this.#E.values())
            (e.timer && clearTimeout(e.timer), (e.time = ct() - e.time));
        }
        resume() {
          if (null != this.#v) {
            (this.F((t) => t.resume()), (this.#v = null));
            for (const t of this.#E.values()) {
              let e = t.time;
              (e < 0 && (e = 0), (t.time = ct()), setTimeout(t.func, e));
            }
          }
        }
      }
      function ht(t, e) {
        try {
          const n = dt(t, e);
          if (n) return (0, h.D)(n);
        } catch (n) {}
        return null;
      }
      function dt(t, e) {
        if ('0x' === t) return null;
        try {
          const n = (0, f.WZ)((0, d.ZG)(t, e, e + 32)),
            s = (0, f.WZ)((0, d.ZG)(t, n, n + 32));
          return (0, d.ZG)(t, n + 32, n + 32 + s);
        } catch (n) {}
        return null;
      }
      function ft(t) {
        const e = (0, f.c4)(t);
        if (e.length > 32) throw new Error('internal; should not happen');
        const n = new Uint8Array(32);
        return (n.set(e, 32 - e.length), n);
      }
      function pt(t) {
        if (t.length % 32 == 0) return t;
        const e = new Uint8Array(32 * Math.ceil(t.length / 32));
        return (e.set(t), e);
      }
      const wt = new Uint8Array([]);
      function gt(t) {
        const e = [];
        let n = 0;
        for (let s = 0; s < t.length; s++) (e.push(wt), (n += 32));
        for (let s = 0; s < t.length; s++) {
          const r = (0, d.q5)(t[s]);
          ((e[s] = ft(n)),
            e.push(ft(r.length)),
            e.push(pt(r)),
            (n += 32 + 32 * Math.ceil(r.length / 32)));
        }
        return (0, d.xW)(e);
      }
      const yt =
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      function mt(t, e) {
        if (t.provider) return t.provider;
        (0, s.vA)(!1, 'missing provider', 'UNSUPPORTED_OPERATION', {
          operation: e,
        });
      }
      async function bt(t, e) {
        let n = (0, W.VS)(e);
        if ((null != n.to && (n.to = (0, a.tG)(n.to, t)), null != n.from)) {
          const e = n.from;
          n.from = Promise.all([t.getAddress(), (0, a.tG)(e, t)]).then(
            ([t, e]) => (
              (0, s.MR)(
                t.toLowerCase() === e.toLowerCase(),
                'transaction from mismatch',
                'tx.from',
                e
              ),
              t
            )
          );
        } else n.from = t.getAddress();
        return await (0, u.k)(n);
      }
      class vt {
        provider;
        constructor(t) {
          (0, u.n)(this, { provider: t || null });
        }
        async getNonce(t) {
          return mt(this, 'getTransactionCount').getTransactionCount(
            await this.getAddress(),
            t
          );
        }
        async populateCall(t) {
          return await bt(this, t);
        }
        async populateTransaction(t) {
          const e = mt(this, 'populateTransaction'),
            n = await bt(this, t);
          (null == n.nonce && (n.nonce = await this.getNonce('pending')),
            null == n.gasLimit && (n.gasLimit = await this.estimateGas(n)));
          const r = await this.provider.getNetwork();
          if (null != n.chainId) {
            const e = (0, f.Ab)(n.chainId);
            (0, s.MR)(
              e === r.chainId,
              'transaction chainId mismatch',
              'tx.chainId',
              t.chainId
            );
          } else n.chainId = r.chainId;
          const i = null != n.maxFeePerGas || null != n.maxPriorityFeePerGas;
          if (
            (null == n.gasPrice || (2 !== n.type && !i)
              ? (0 !== n.type && 1 !== n.type) ||
                !i ||
                (0, s.MR)(
                  !1,
                  'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                  'tx',
                  t
                )
              : (0, s.MR)(
                  !1,
                  'eip-1559 transaction do not support gasPrice',
                  'tx',
                  t
                ),
            (2 !== n.type && null != n.type) ||
              null == n.maxFeePerGas ||
              null == n.maxPriorityFeePerGas)
          )
            if (0 === n.type || 1 === n.type) {
              const t = await e.getFeeData();
              ((0, s.vA)(
                null != t.gasPrice,
                'network does not support gasPrice',
                'UNSUPPORTED_OPERATION',
                { operation: 'getGasPrice' }
              ),
                null == n.gasPrice && (n.gasPrice = t.gasPrice));
            } else {
              const t = await e.getFeeData();
              if (null == n.type)
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                  if (
                    (n.authorizationList && n.authorizationList.length
                      ? (n.type = 4)
                      : (n.type = 2),
                    null != n.gasPrice)
                  ) {
                    const t = n.gasPrice;
                    (delete n.gasPrice,
                      (n.maxFeePerGas = t),
                      (n.maxPriorityFeePerGas = t));
                  } else
                    (null == n.maxFeePerGas &&
                      (n.maxFeePerGas = t.maxFeePerGas),
                      null == n.maxPriorityFeePerGas &&
                        (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
                else
                  null != t.gasPrice
                    ? ((0, s.vA)(
                        !i,
                        'network does not support EIP-1559',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'populateTransaction' }
                      ),
                      null == n.gasPrice && (n.gasPrice = t.gasPrice),
                      (n.type = 0))
                    : (0, s.vA)(
                        !1,
                        'failed to get consistent fee data',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'signer.getFeeData' }
                      );
              else
                (2 !== n.type && 3 !== n.type && 4 !== n.type) ||
                  (null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas),
                  null == n.maxPriorityFeePerGas &&
                    (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
          else n.type = 2;
          return await (0, u.k)(n);
        }
        async populateAuthorization(t) {
          const e = Object.assign({}, t);
          return (
            null == e.chainId &&
              (e.chainId = (await mt(this, 'getNetwork').getNetwork()).chainId),
            null == e.nonce && (e.nonce = await this.getNonce()),
            e
          );
        }
        async estimateGas(t) {
          return mt(this, 'estimateGas').estimateGas(
            await this.populateCall(t)
          );
        }
        async call(t) {
          return mt(this, 'call').call(await this.populateCall(t));
        }
        async resolveName(t) {
          const e = mt(this, 'resolveName');
          return await e.resolveName(t);
        }
        async sendTransaction(t) {
          const e = mt(this, 'sendTransaction'),
            n = await this.populateTransaction(t);
          delete n.from;
          const s = m.Z.from(n);
          return await e.broadcastTransaction(await this.signTransaction(s));
        }
        authorize(t) {
          (0, s.vA)(
            !1,
            'authorization not implemented for this signer',
            'UNSUPPORTED_OPERATION',
            { operation: 'authorize' }
          );
        }
      }
      class kt {
        #l;
        #L;
        #u;
        #p;
        #B;
        #G;
        constructor(t) {
          ((this.#l = t),
            (this.#L = null),
            (this.#u = this.#f.bind(this)),
            (this.#p = !1),
            (this.#B = null),
            (this.#G = !1));
        }
        L(t) {
          throw new Error('subclasses must override this');
        }
        B(t, e) {
          throw new Error('subclasses must override this');
        }
        G(t) {
          throw new Error('subclasses must override this');
        }
        async #f(t) {
          try {
            null == this.#L && (this.#L = this.L(this.#l));
            let t = null;
            try {
              t = await this.#L;
            } catch (e) {
              if (
                !(0, s.bJ)(e, 'UNSUPPORTED_OPERATION') ||
                'eth_newFilter' !== e.operation
              )
                throw e;
            }
            if (null == t)
              return ((this.#L = null), void this.#l.C(this, this.G(this.#l)));
            const n = await this.#l.getNetwork();
            if ((this.#B || (this.#B = n), this.#B.chainId !== n.chainId))
              throw new Error('chaid changed');
            if (this.#G) return;
            const r = await this.#l.send('eth_getFilterChanges', [t]);
            await this.B(this.#l, r);
          } catch (e) {}
          this.#l.once('block', this.#u);
        }
        #H() {
          const t = this.#L;
          t &&
            ((this.#L = null),
            t.then((t) => {
              this.#l.destroyed || this.#l.send('eth_uninstallFilter', [t]);
            }));
        }
        start() {
          this.#p || ((this.#p = !0), this.#f(-2));
        }
        stop() {
          this.#p &&
            ((this.#p = !1),
            (this.#G = !0),
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
        #$;
        constructor(t, e) {
          var n;
          (super(t), (this.#$ = ((n = e), JSON.parse(JSON.stringify(n)))));
        }
        G(t) {
          return new et(t, this.#$);
        }
        async L(t) {
          return await t.send('eth_newFilter', [this.#$]);
        }
        async B(t, e) {
          for (const n of e) t.emit(this.#$, t.m(n, t.H));
        }
      }
      class Nt extends kt {
        async L(t) {
          return await t.send('eth_newPendingTransactionFilter', []);
        }
        async B(t, e) {
          for (const n of e) t.emit('pending', n);
        }
      }
      const Tt = 'bigint,boolean,function,number,string,symbol'.split(/,/g);
      function Ot(t) {
        if (null == t || Tt.indexOf(typeof t) >= 0) return t;
        if ('function' == typeof t.getAddress) return t;
        if (Array.isArray(t)) return t.map(Ot);
        if ('object' == typeof t)
          return Object.keys(t).reduce((e, n) => ((e[n] = t[n]), e), {});
        throw new Error(`should not happen: ${t} (${typeof t})`);
      }
      function Rt(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function Et(t) {
        return t ? t.toLowerCase() : t;
      }
      function _t(t) {
        return t && 'number' == typeof t.pollingInterval;
      }
      const xt = {
        polling: !1,
        staticNetwork: null,
        batchStallTime: 10,
        batchMaxSize: 1 << 20,
        batchMaxCount: 100,
        cacheTimeout: 250,
        pollingInterval: 4e3,
      };
      class At extends vt {
        address;
        constructor(t, e) {
          (super(t), (e = (0, i.b)(e)), (0, u.n)(this, { address: e }));
        }
        connect(t) {
          (0, s.vA)(
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
          const e = Ot(t),
            n = [];
          if (e.from) {
            const r = e.from;
            n.push(
              (async () => {
                const n = await (0, a.tG)(r, this.provider);
                ((0, s.MR)(
                  null != n && n.toLowerCase() === this.address.toLowerCase(),
                  'from address mismatch',
                  'transaction',
                  t
                ),
                  (e.from = n));
              })()
            );
          } else e.from = this.address;
          if (
            (null == e.gasLimit &&
              n.push(
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
            n.push(
              (async () => {
                e.to = await (0, a.tG)(t, this.provider);
              })()
            );
          }
          n.length && (await Promise.all(n));
          const r = this.provider.getRpcTransaction(e);
          return this.provider.send('eth_sendTransaction', [r]);
        }
        async sendTransaction(t) {
          const e = await this.provider.getBlockNumber(),
            n = await this.sendUncheckedTransaction(t);
          return await new Promise((t, r) => {
            const i = [1e3, 100];
            let a = 0;
            const o = async () => {
              try {
                const s = await this.provider.getTransaction(n);
                if (null != s) return void t(s.replaceableTransaction(e));
              } catch (c) {
                if (
                  (0, s.bJ)(c, 'CANCELLED') ||
                  (0, s.bJ)(c, 'BAD_DATA') ||
                  (0, s.bJ)(c, 'NETWORK_ERROR') ||
                  (0, s.bJ)(c, 'UNSUPPORTED_OPERATION')
                )
                  return (
                    null == c.info && (c.info = {}),
                    (c.info.sendTransactionHash = n),
                    void r(c)
                  );
                if (
                  (0, s.bJ)(c, 'INVALID_ARGUMENT') &&
                  (a++,
                  null == c.info && (c.info = {}),
                  (c.info.sendTransactionHash = n),
                  a > 10)
                )
                  return void r(c);
                this.provider.emit(
                  'error',
                  (0, s.xz)(
                    'failed to fetch transation after sending (will try again)',
                    'UNKNOWN_ERROR',
                    { error: c }
                  )
                );
              }
              this.provider.o(() => {
                o();
              }, i.pop() || 4e3);
            };
            o();
          });
        }
        async signTransaction(t) {
          const e = Ot(t);
          if (e.from) {
            const n = await (0, a.tG)(e.from, this.provider);
            ((0, s.MR)(
              null != n && n.toLowerCase() === this.address.toLowerCase(),
              'from address mismatch',
              'transaction',
              t
            ),
              (e.from = n));
          } else e.from = this.address;
          const n = this.provider.getRpcTransaction(e);
          return await this.provider.send('eth_signTransaction', [n]);
        }
        async signMessage(t) {
          const e = 'string' == typeof t ? (0, h.YW)(t) : t;
          return await this.provider.send('personal_sign', [
            (0, d.c$)(e),
            this.address.toLowerCase(),
          ]);
        }
        async signTypedData(t, e, n) {
          const r = Ot(n),
            i = await o.z.resolveNames(t, e, r, async (t) => {
              const e = await (0, a.tG)(t);
              return (
                (0, s.MR)(
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
            JSON.stringify(o.z.getPayload(i.domain, e, i.value)),
          ]);
        }
        async unlock(t) {
          return this.provider.send('personal_unlockAccount', [
            this.address.toLowerCase(),
            t,
            null,
          ]);
        }
        async J(t) {
          const e = 'string' == typeof t ? (0, h.YW)(t) : t;
          return await this.provider.send('eth_sign', [
            this.address.toLowerCase(),
            (0, d.c$)(e),
          ]);
        }
      }
      class It extends ut {
        #x;
        #j;
        #M;
        #J;
        #q;
        #B;
        #z;
        #K() {
          if (this.#J) return;
          const t =
            1 === this.q('batchMaxCount') ? 0 : this.q('batchStallTime');
          this.#J = setTimeout(() => {
            this.#J = null;
            const t = this.#M;
            for (this.#M = []; t.length; ) {
              const e = [t.shift()];
              for (; t.length && e.length !== this.#x.batchMaxCount; )
                if (
                  (e.push(t.shift()),
                  JSON.stringify(e.map((t) => t.payload)).length >
                    this.#x.batchMaxSize)
                ) {
                  t.unshift(e.pop());
                  break;
                }
              (async () => {
                const t =
                  1 === e.length ? e[0].payload : e.map((t) => t.payload);
                this.emit('debug', { action: 'sendRpcPayload', payload: t });
                try {
                  const n = await this.K(t);
                  this.emit('debug', { action: 'receiveRpcResult', result: n });
                  for (const { resolve: t, reject: r, payload: i } of e) {
                    if (this.destroyed) {
                      r(
                        (0, s.xz)(
                          'provider destroyed; cancelled request',
                          'UNSUPPORTED_OPERATION',
                          { operation: i.method }
                        )
                      );
                      continue;
                    }
                    const e = n.filter((t) => t.id === i.id)[0];
                    if (null == e) {
                      const t = (0, s.xz)(
                        'missing response for request',
                        'BAD_DATA',
                        { value: n, info: { payload: i } }
                      );
                      (this.emit('error', t), r(t));
                      continue;
                    }
                    'error' in e ? r(this.getRpcError(i, e)) : t(e.result);
                  }
                } catch (n) {
                  this.emit('debug', { action: 'receiveRpcError', error: n });
                  for (const { reject: t } of e) t(n);
                }
              })();
            }
          }, t);
        }
        constructor(t, e) {
          (super(t, e),
            (this.#j = 1),
            (this.#x = Object.assign({}, xt, e || {})),
            (this.#M = []),
            (this.#J = null),
            (this.#B = null),
            (this.#z = null));
          {
            let t = null;
            const e = new Promise((e) => {
              t = e;
            });
            this.#q = { promise: e, resolve: t };
          }
          const n = this.q('staticNetwork');
          'boolean' == typeof n
            ? ((0, s.MR)(
                !n || 'any' !== t,
                "staticNetwork cannot be used on special network 'any'",
                'options',
                e
              ),
              n && null != t && (this.#B = J.from(t)))
            : n &&
              ((0, s.MR)(
                null == t || n.matches(t),
                'staticNetwork MUST match network object',
                'options',
                e
              ),
              (this.#B = n));
        }
        q(t) {
          return this.#x[t];
        }
        get H() {
          return (
            (0, s.vA)(this.#B, 'network is not available yet', 'NETWORK_ERROR'),
            this.#B
          );
        }
        async h(t) {
          if ('call' === t.method || 'estimateGas' === t.method) {
            let e = t.transaction;
            if (
              e &&
              null != e.type &&
              (0, f.Ab)(e.type) &&
              null == e.maxFeePerGas &&
              null == e.maxPriorityFeePerGas
            ) {
              const n = await this.getFeeData();
              null == n.maxFeePerGas &&
                null == n.maxPriorityFeePerGas &&
                (t = Object.assign({}, t, {
                  transaction: Object.assign({}, e, { type: void 0 }),
                }));
            }
          }
          const e = this.getRpcRequest(t);
          return null != e ? await this.send(e.method, e.args) : super.h(t);
        }
        async N() {
          const t = this.q('staticNetwork');
          if (t) {
            if (!0 !== t) return t;
            if (this.#B) return this.#B;
          }
          return this.#z
            ? await this.#z
            : this.ready
              ? ((this.#z = (async () => {
                  try {
                    const t = J.from(
                      (0, f.Ab)(await this.send('eth_chainId', []))
                    );
                    return ((this.#z = null), t);
                  } catch (t) {
                    throw ((this.#z = null), t);
                  }
                })()),
                await this.#z)
              : ((this.#z = (async () => {
                  const t = {
                    id: this.#j++,
                    method: 'eth_chainId',
                    params: [],
                    jsonrpc: '2.0',
                  };
                  let e;
                  this.emit('debug', { action: 'sendRpcPayload', payload: t });
                  try {
                    ((e = (await this.K(t))[0]), (this.#z = null));
                  } catch (n) {
                    throw (
                      (this.#z = null),
                      this.emit('debug', {
                        action: 'receiveRpcError',
                        error: n,
                      }),
                      n
                    );
                  }
                  if (
                    (this.emit('debug', {
                      action: 'receiveRpcResult',
                      result: e,
                    }),
                    'result' in e)
                  )
                    return J.from((0, f.Ab)(e.result));
                  throw this.getRpcError(t, e);
                })()),
                await this.#z);
        }
        W() {
          null != this.#q &&
            null != this.#q.resolve &&
            (this.#q.resolve(),
            (this.#q = null),
            (async () => {
              for (; null == this.#B && !this.destroyed; )
                try {
                  this.#B = await this.N();
                } catch (t) {
                  if (this.destroyed) break;
                  (this.emit(
                    'error',
                    (0, s.xz)(
                      'failed to bootstrap network detection',
                      'NETWORK_ERROR',
                      { event: 'initial-network-discovery', info: { error: t } }
                    )
                  ),
                    await Rt(1e3));
                }
              this.#K();
            })());
        }
        async V() {
          if (null != this.#q) return await this.#q.promise;
        }
        S(t) {
          return 'pending' === t.type
            ? new Nt(this)
            : 'event' === t.type
              ? this.q('polling')
                ? new et(this, t.filter)
                : new Pt(this, t.filter)
              : 'orphan' === t.type && 'drop-log' === t.filter.orphan
                ? new it('orphan')
                : super.S(t);
        }
        get ready() {
          return null == this.#q;
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
            ].forEach((n) => {
              if (null == t[n]) return;
              let s = n;
              ('gasLimit' === n && (s = 'gas'),
                (e[s] = (0, f.nD)((0, f.Ab)(t[n], `tx.${n}`))));
            }),
            ['from', 'to', 'data'].forEach((n) => {
              null != t[n] && (e[n] = (0, d.c$)(t[n]));
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
                  nonce: (0, f.nD)(e.nonce),
                  chainId: (0, f.nD)(e.chainId),
                  yParity: (0, f.nD)(e.signature.yParity),
                  r: (0, f.nD)(e.signature.r),
                  s: (0, f.nD)(e.signature.s),
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
                args: [Et(t.address), t.blockTag],
              };
            case 'getTransactionCount':
              return {
                method: 'eth_getTransactionCount',
                args: [Et(t.address), t.blockTag],
              };
            case 'getCode':
              return {
                method: 'eth_getCode',
                args: [Et(t.address), t.blockTag],
              };
            case 'getStorage':
              return {
                method: 'eth_getStorageAt',
                args: [
                  Et(t.address),
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
                    ? (t.filter.address = t.filter.address.map(Et))
                    : (t.filter.address = Et(t.filter.address))),
                { method: 'eth_getLogs', args: [t.filter] }
              );
          }
          return null;
        }
        getRpcError(t, e) {
          const { method: n } = t,
            { error: i } = e;
          if ('eth_estimateGas' === n && i.message) {
            const e = i.message;
            if (!e.match(/revert/i) && e.match(/insufficient funds/i))
              return (0, s.xz)('insufficient funds', 'INSUFFICIENT_FUNDS', {
                transaction: t.params[0],
                info: { payload: t, error: i },
              });
            if (e.match(/nonce/i) && e.match(/too low/i))
              return (0, s.xz)('nonce has already been used', 'NONCE_EXPIRED', {
                transaction: t.params[0],
                info: { payload: t, error: i },
              });
          }
          if ('eth_call' === n || 'eth_estimateGas' === n) {
            const e = Ft(i),
              s = r.y.getBuiltinCallException(
                'eth_call' === n ? 'call' : 'estimateGas',
                t.params[0],
                e ? e.data : null
              );
            return ((s.info = { error: i, payload: t }), s);
          }
          const a = JSON.stringify(
            ((t) => {
              const e = [];
              return (St(t, e), e);
            })(i)
          );
          if (
            'string' == typeof i.message &&
            i.message.match(/user denied|ethers-user-denied/i)
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
            return (0, s.xz)('user rejected action', 'ACTION_REJECTED', {
              action: e[n] || 'unknown',
              reason: 'rejected',
              info: { payload: t, error: i },
            });
          }
          if ('eth_sendRawTransaction' === n || 'eth_sendTransaction' === n) {
            const e = t.params[0];
            if (a.match(/insufficient funds|base fee exceeds gas limit/i))
              return (0, s.xz)(
                'insufficient funds for intrinsic transaction cost',
                'INSUFFICIENT_FUNDS',
                { transaction: e, info: { error: i } }
              );
            if (a.match(/nonce/i) && a.match(/too low/i))
              return (0, s.xz)('nonce has already been used', 'NONCE_EXPIRED', {
                transaction: e,
                info: { error: i },
              });
            if (a.match(/replacement transaction/i) && a.match(/underpriced/i))
              return (0, s.xz)(
                'replacement fee too low',
                'REPLACEMENT_UNDERPRICED',
                { transaction: e, info: { error: i } }
              );
            if (a.match(/only replay-protected/i))
              return (0, s.xz)(
                'legacy pre-eip-155 transactions not supported',
                'UNSUPPORTED_OPERATION',
                { operation: n, info: { transaction: e, info: { error: i } } }
              );
          }
          let o = !!a.match(/the method .* does not exist/i);
          return (
            o ||
              (i &&
                i.details &&
                i.details.startsWith('Unauthorized method:') &&
                (o = !0)),
            o
              ? (0, s.xz)('unsupported operation', 'UNSUPPORTED_OPERATION', {
                  operation: t.method,
                  info: { error: i, payload: t },
                })
              : (0, s.xz)('could not coalesce error', 'UNKNOWN_ERROR', {
                  error: i,
                  payload: t,
                })
          );
        }
        send(t, e) {
          if (this.destroyed)
            return Promise.reject(
              (0, s.xz)(
                'provider destroyed; cancelled request',
                'UNSUPPORTED_OPERATION',
                { operation: t }
              )
            );
          const n = this.#j++,
            r = new Promise((s, r) => {
              this.#M.push({
                resolve: s,
                reject: r,
                payload: { method: t, params: e, id: n, jsonrpc: '2.0' },
              });
            });
          return (this.#K(), r);
        }
        async getSigner(t) {
          null == t && (t = 0);
          const e = this.send('eth_accounts', []);
          if ('number' == typeof t) {
            const n = await e;
            if (t >= n.length) throw new Error('no such account');
            return new At(this, n[t]);
          }
          const { accounts: n } = await (0, u.k)({
            network: this.getNetwork(),
            accounts: e,
          });
          t = (0, i.b)(t);
          for (const s of n) if ((0, i.b)(s) === t) return new At(this, t);
          throw new Error('invalid account');
        }
        async listAccounts() {
          return (await this.send('eth_accounts', [])).map(
            (t) => new At(this, t)
          );
        }
        destroy() {
          this.#J && (clearTimeout(this.#J), (this.#J = null));
          for (const { payload: t, reject: e } of this.#M)
            e(
              (0, s.xz)(
                'provider destroyed; cancelled request',
                'UNSUPPORTED_OPERATION',
                { operation: t.method }
              )
            );
          ((this.#M = []), super.destroy());
        }
      }
      class Ut extends It {
        #W;
        constructor(t, e) {
          super(t, e);
          let n = this.q('pollingInterval');
          (null == n && (n = xt.pollingInterval), (this.#W = n));
        }
        S(t) {
          const e = super.S(t);
          return (_t(e) && (e.pollingInterval = this.#W), e);
        }
        get pollingInterval() {
          return this.#W;
        }
        set pollingInterval(t) {
          if (!Number.isInteger(t) || t < 0)
            throw new Error('invalid interval');
          ((this.#W = t),
            this.F((t) => {
              _t(t) && (t.pollingInterval = this.#W);
            }));
        }
      }
      function Ft(t) {
        if (null == t) return null;
        if (
          'string' == typeof t.message &&
          t.message.match(/revert/i) &&
          (0, d.Lo)(t.data)
        )
          return { message: t.message, data: t.data };
        if ('object' == typeof t) {
          for (const e in t) {
            const n = Ft(t[e]);
            if (n) return n;
          }
          return null;
        }
        if ('string' == typeof t)
          try {
            return Ft(JSON.parse(t));
          } catch (e) {}
        return null;
      }
      function St(t, e) {
        if (null != t) {
          if (
            ('string' == typeof t.message && e.push(t.message),
            'object' == typeof t)
          )
            for (const n in t) St(t[n], e);
          if ('string' == typeof t)
            try {
              return St(JSON.parse(t), e);
            } catch (n) {}
        }
      }
      class Ct extends Ut {
        #V;
        #X;
        constructor(t, e, n) {
          const r = Object.assign({}, null != n ? n : {}, { batchMaxCount: 1 });
          ((0, s.MR)(
            t && t.request,
            'invalid EIP-1193 provider',
            'ethereum',
            t
          ),
            super(e, r),
            (this.#X = null),
            n && n.providerInfo && (this.#X = n.providerInfo),
            (this.#V = async (e, n) => {
              const s = { method: e, params: n };
              this.emit('debug', { action: 'sendEip1193Request', payload: s });
              try {
                const e = await t.request(s);
                return (
                  this.emit('debug', {
                    action: 'receiveEip1193Result',
                    result: e,
                  }),
                  e
                );
              } catch (r) {
                const t = new Error(r.message);
                throw (
                  (t.code = r.code),
                  (t.data = r.data),
                  (t.payload = s),
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
          return this.#X;
        }
        async send(t, e) {
          return (await this.W(), await super.send(t, e));
        }
        async K(t) {
          (0, s.MR)(
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
          const n = t.anyProvider;
          if (n && e.ethereum) return new Ct(e.ethereum);
          if (
            !(
              'addEventListener' in e &&
              'dispatchEvent' in e &&
              'removeEventListener' in e
            )
          )
            return null;
          const r = t.timeout ? t.timeout : 300;
          return 0 === r
            ? null
            : await new Promise((i, a) => {
                let o = [];
                const c = (t) => {
                    (o.push(t.detail), n && l());
                  },
                  l = () => {
                    if ((clearTimeout(u), o.length))
                      if (t && t.filter) {
                        const e = t.filter(
                          o.map((t) => Object.assign({}, t.info))
                        );
                        if (null == e) i(null);
                        else if (e instanceof Ct) i(e);
                        else {
                          let t = null;
                          if (
                            (e.uuid &&
                              (t = o.filter((t) => e.uuid === t.info.uuid)[0]),
                            t)
                          ) {
                            const { provider: e, info: n } = t;
                            i(new Ct(e, void 0, { providerInfo: n }));
                          } else
                            a(
                              (0, s.xz)(
                                'filter returned unknown info',
                                'UNSUPPORTED_OPERATION',
                                { value: e }
                              )
                            );
                        }
                      } else {
                        const { provider: t, info: e } = o[0];
                        i(new Ct(t, void 0, { providerInfo: e }));
                      }
                    else i(null);
                    e.removeEventListener('eip6963:announceProvider', c);
                  },
                  u = setTimeout(() => {
                    l();
                  }, r);
                (e.addEventListener('eip6963:announceProvider', c),
                  e.dispatchEvent(new Event('eip6963:requestProvider')));
              });
        }
      }
    },
    8931(t, e, n) {
      n.d(e, {
        J9: () => h,
        VS: () => d,
        eB: () => f,
        tG: () => p,
        uI: () => g,
        z5: () => w,
      });
      var s = n(8227),
        r = n(536),
        i = n(8848),
        a = n(8466),
        o = n(7602);
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
        constructor(t, e, n) {
          (0, a.n)(this, {
            gasPrice: l(t),
            maxFeePerGas: l(e),
            maxPriorityFeePerGas: l(n),
          });
        }
        toJSON() {
          const {
            gasPrice: t,
            maxFeePerGas: e,
            maxPriorityFeePerGas: n,
          } = this;
          return {
            X: 'FeeData',
            gasPrice: u(t),
            maxFeePerGas: u(e),
            maxPriorityFeePerGas: u(n),
          };
        }
      }
      function d(t) {
        const e = {};
        (t.to && (e.to = t.to),
          t.from && (e.from = t.from),
          t.data && (e.data = (0, s.c$)(t.data)));
        const n =
          'chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value'.split(
            /,/
          );
        for (const s of n)
          s in t && null != t[s] && (e[s] = (0, i.Ab)(t[s], `request.${s}`));
        const r = 'type,nonce'.split(/,/);
        for (const s of r)
          s in t && null != t[s] && (e[s] = (0, i.WZ)(t[s], `request.${s}`));
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
              (0, s.f)(t) ? (0, s.c$)(t) : Object.assign({}, t)
            )),
          e
        );
      }
      class f {
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
        #Z;
        constructor(t, e) {
          ((this.#Z = t.transactions.map((t) =>
            'string' != typeof t ? new g(t, e) : t
          )),
            (0, a.n)(this, {
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
          return this.#Z.map((t) => ('string' == typeof t ? t : t.hash));
        }
        get prefetchedTransactions() {
          const t = this.#Z.slice();
          return 0 === t.length
            ? []
            : ((0, r.vA)(
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
            extraData: n,
            gasLimit: s,
            gasUsed: r,
            hash: i,
            miner: a,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: h,
            parentBeaconBlockRoot: d,
            stateRoot: f,
            receiptsRoot: p,
            timestamp: w,
            transactions: g,
          } = this;
          return {
            X: 'Block',
            baseFeePerGas: u(t),
            difficulty: u(e),
            extraData: n,
            gasLimit: u(s),
            gasUsed: u(r),
            blobGasUsed: u(this.blobGasUsed),
            excessBlobGas: u(this.excessBlobGas),
            hash: i,
            miner: a,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: h,
            timestamp: w,
            parentBeaconBlockRoot: d,
            stateRoot: f,
            receiptsRoot: p,
            transactions: g,
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
          return this.#Z.length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(t) {
          let e;
          if ('number' == typeof t) e = this.#Z[t];
          else {
            const n = t.toLowerCase();
            for (const t of this.#Z) {
              if ('string' == typeof t) {
                if (t !== n) continue;
                e = t;
                break;
              }
              if (t.hash === n) {
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
          for (const n of e) if (n.hash === t) return n;
          (0, r.MR)(!1, 'no matching transaction', 'indexOrHash', t);
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
      class p {
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
          const n = Object.freeze(t.topics.slice());
          (0, a.n)(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: n,
            index: t.index,
            transactionIndex: t.transactionIndex,
          });
        }
        toJSON() {
          const {
            address: t,
            blockHash: e,
            blockNumber: n,
            data: s,
            index: r,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c,
          } = this;
          return {
            X: 'log',
            address: t,
            blockHash: e,
            blockNumber: n,
            data: s,
            index: r,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c,
          };
        }
        async getBlock() {
          const t = await this.provider.getBlock(this.blockHash);
          return (
            (0, r.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
            t
          );
        }
        async getTransaction() {
          const t = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, r.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
            t
          );
        }
        async getTransactionReceipt() {
          const t = await this.provider.getTransactionReceipt(
            this.transactionHash
          );
          return (
            (0, r.vA)(
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
      class w {
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
          this.#Y = Object.freeze(t.logs.map((t) => new p(t, e)));
          let n = c;
          (null != t.effectiveGasPrice
            ? (n = t.effectiveGasPrice)
            : null != t.gasPrice && (n = t.gasPrice),
            (0, a.n)(this, {
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
              gasPrice: n,
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
            contractAddress: n,
            hash: s,
            index: r,
            blockHash: i,
            blockNumber: a,
            logsBloom: o,
            logs: c,
            status: l,
            root: h,
          } = this;
          return {
            X: 'TransactionReceipt',
            blockHash: i,
            blockNumber: a,
            contractAddress: n,
            cumulativeGasUsed: u(this.cumulativeGasUsed),
            from: e,
            gasPrice: u(this.gasPrice),
            blobGasUsed: u(this.blobGasUsed),
            blobGasPrice: u(this.blobGasPrice),
            gasUsed: u(this.gasUsed),
            hash: s,
            index: r,
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
          return m(this);
        }
        reorderedEvent(t) {
          return (
            (0, r.vA)(
              !t || t.isMined(),
              "unmined 'other' transction cannot be orphaned",
              'UNSUPPORTED_OPERATION',
              { operation: 'reorderedEvent(other)' }
            ),
            y(this, t)
          );
        }
      }
      class g {
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
            index: n,
            hash: s,
            type: r,
            to: i,
            from: a,
            nonce: o,
            data: c,
            signature: l,
            accessList: h,
            blobVersionedHashes: d,
          } = this;
          return {
            X: 'TransactionResponse',
            accessList: h,
            blockNumber: t,
            blockHash: e,
            blobVersionedHashes: d,
            chainId: u(this.chainId),
            data: c,
            from: a,
            gasLimit: u(this.gasLimit),
            gasPrice: u(this.gasPrice),
            hash: s,
            maxFeePerGas: u(this.maxFeePerGas),
            maxPriorityFeePerGas: u(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: u(this.maxFeePerBlobGas),
            nonce: o,
            signature: l,
            to: i,
            index: n,
            type: r,
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
            const { tx: t, blockNumber: e } = await (0, a.k)({
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
          const n = null == t ? 1 : t,
            s = null == e ? 0 : e;
          let i = this.#Q,
            o = -1,
            l = -1 === i;
          const u = async () => {
              if (l) return null;
              const { blockNumber: t, nonce: e } = await (0, a.k)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (e < this.nonce) return void (i = t);
              if (l) return null;
              const s = await this.getTransaction();
              if (!s || null == s.blockNumber)
                for (
                  -1 === o && ((o = i - 3), o < this.#Q && (o = this.#Q));
                  o <= t;

                ) {
                  if (l) return null;
                  const e = await this.provider.getBlock(o, !0);
                  if (null == e) return;
                  for (const t of e) if (t === this.hash) return;
                  for (let s = 0; s < e.length; s++) {
                    const a = await e.getTransaction(s);
                    if (a.from === this.from && a.nonce === this.nonce) {
                      if (l) return null;
                      const e = await this.provider.getTransactionReceipt(
                        a.hash
                      );
                      if (null == e) return;
                      if (t - e.blockNumber + 1 < n) return;
                      let s = 'replaced';
                      (a.data === this.data &&
                      a.to === this.to &&
                      a.value === this.value
                        ? (s = 'repriced')
                        : '0x' === a.data &&
                          a.from === a.to &&
                          a.value === c &&
                          (s = 'cancelled'),
                        (0, r.vA)(
                          !1,
                          'transaction was replaced',
                          'TRANSACTION_REPLACED',
                          {
                            cancelled: 'replaced' === s || 'cancelled' === s,
                            reason: s,
                            replacement: a.replaceableTransaction(i),
                            hash: a.hash,
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
              (0, r.vA)(
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
          if (0 === n) return h(d);
          if (d) {
            if (1 === n || (await d.confirmations()) >= n) return h(d);
          } else if ((await u(), 0 === n)) return null;
          const f = new Promise((t, e) => {
            const a = [],
              o = () => {
                a.forEach((t) => t());
              };
            if (
              (a.push(() => {
                l = !0;
              }),
              s > 0)
            ) {
              const t = setTimeout(() => {
                (o(), e((0, r.xz)('wait for transaction timeout', 'TIMEOUT')));
              }, s);
              a.push(() => {
                clearTimeout(t);
              });
            }
            const c = async (s) => {
              if ((await s.confirmations()) >= n) {
                o();
                try {
                  t(h(s));
                } catch (r) {
                  e(r);
                }
              }
            };
            if (
              (a.push(() => {
                this.provider.off(this.hash, c);
              }),
              this.provider.on(this.hash, c),
              i >= 0)
            ) {
              const t = async () => {
                try {
                  await u();
                } catch (n) {
                  if ((0, r.bJ)(n, 'TRANSACTION_REPLACED'))
                    return (o(), void e(n));
                }
                l || this.provider.once('block', t);
              };
              (a.push(() => {
                this.provider.off('block', t);
              }),
                this.provider.once('block', t));
            }
          });
          return await f;
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
            (0, r.vA)(
              this.isMined(),
              'unmined transaction canot be orphaned',
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            m(this)
          );
        }
        reorderedEvent(t) {
          return (
            (0, r.vA)(
              this.isMined(),
              'unmined transaction canot be orphaned',
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            (0, r.vA)(
              !t || t.isMined(),
              "unmined 'other' transaction canot be orphaned",
              'UNSUPPORTED_OPERATION',
              { operation: 'removeEvent()' }
            ),
            y(this, t)
          );
        }
        replaceableTransaction(t) {
          (0, r.MR)(
            Number.isInteger(t) && t >= 0,
            'invalid startBlock',
            'startBlock',
            t
          );
          const e = new g(this, this.provider);
          return ((e.#Q = t), e);
        }
      }
      function y(t, e) {
        return { orphan: 'reorder-transaction', tx: t, other: e };
      }
      function m(t) {
        return { orphan: 'drop-transaction', tx: t };
      }
    },
  },
]);
