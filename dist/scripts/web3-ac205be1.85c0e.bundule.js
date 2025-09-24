'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [894],
  {
    5093(t, e, n) {
      n.d(e, { Z: () => $ });
      var i = n(4922),
        s = n(3227),
        r = n(7043),
        a = n(6533),
        l = n(8757),
        o = n(5914),
        u = n(8227),
        c = n(536),
        h = n(8848),
        f = n(6088),
        d = n(3456),
        m = n(7602),
        y = n(5303);
      const g = BigInt(0),
        P = BigInt(2),
        b = BigInt(27),
        v = BigInt(28),
        p = BigInt(35),
        x = BigInt(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        ),
        G = 131072;
      function F(t, e) {
        let n = t.toString(16);
        for (; n.length < 2; ) n = '0' + n;
        return ((n += (0, r.s)(e).substring(4)), '0x' + n);
      }
      function L(t) {
        return '0x' === t ? null : (0, i.b)(t);
      }
      function I(t, e) {
        try {
          return (0, m.$)(t);
        } catch (n) {
          (0, c.MR)(!1, n.message, e, t);
        }
      }
      function A(t, e) {
        try {
          if (!Array.isArray(t))
            throw new Error('authorizationList: invalid array');
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            if (!Array.isArray(i))
              throw new Error(`authorization[${n}]: invalid array`);
            if (6 !== i.length)
              throw new Error(`authorization[${n}]: wrong length`);
            if (!i[1]) throw new Error(`authorization[${n}]: null address`);
            e.push({
              address: L(i[1]),
              nonce: w(i[2], 'nonce'),
              chainId: w(i[0], 'chainId'),
              signature: a.t.from({
                yParity: z(i[3], 'yParity'),
                r: (0, u.nx)(i[4], 32),
                s: (0, u.nx)(i[5], 32),
              }),
            });
          }
          return e;
        } catch (n) {
          (0, c.MR)(!1, n.message, e, t);
        }
      }
      function z(t, e) {
        return '0x' === t ? 0 : (0, h.WZ)(t, e);
      }
      function w(t, e) {
        if ('0x' === t) return g;
        const n = (0, h.Ab)(t, e);
        return ((0, c.MR)(n <= x, 'value exceeds uint size', e, n), n);
      }
      function B(t, e) {
        const n = (0, h.Ab)(t, 'value'),
          i = (0, h.c4)(n);
        return ((0, c.MR)(i.length <= 32, 'value too large', `tx.${e}`, n), i);
      }
      function k(t) {
        return (0, m.$)(t).map((t) => [t.address, t.storageKeys]);
      }
      function T(t, e) {
        (0, c.MR)(Array.isArray(t), `invalid ${e}`, 'value', t);
        for (let n = 0; n < t.length; n++)
          (0, c.MR)(
            (0, u.Lo)(t[n], 32),
            'invalid ${ param } hash',
            `value[${n}]`,
            t[n]
          );
        return t;
      }
      function O(t, e) {
        let n;
        try {
          if (((n = z(e[0], 'yParity')), 0 !== n && 1 !== n))
            throw new Error('bad yParity');
        } catch (l) {
          (0, c.MR)(!1, 'invalid yParity', 'yParity', e[0]);
        }
        const i = (0, u.nx)(e[1], 32),
          s = (0, u.nx)(e[2], 32),
          r = a.t.from({ r: i, s, yParity: n });
        t.signature = r;
      }
      class $ {
        #t;
        #e;
        #n;
        #i;
        #s;
        #r;
        #a;
        #l;
        #o;
        #u;
        #c;
        #h;
        #f;
        #d;
        #m;
        #y;
        #g;
        get type() {
          return this.#t;
        }
        set type(t) {
          switch (t) {
            case null:
              this.#t = null;
              break;
            case 0:
            case 'legacy':
              this.#t = 0;
              break;
            case 1:
            case 'berlin':
            case 'eip-2930':
              this.#t = 1;
              break;
            case 2:
            case 'london':
            case 'eip-1559':
              this.#t = 2;
              break;
            case 3:
            case 'cancun':
            case 'eip-4844':
              this.#t = 3;
              break;
            case 4:
            case 'pectra':
            case 'eip-7702':
              this.#t = 4;
              break;
            default:
              (0, c.MR)(!1, 'unsupported transaction type', 'type', t);
          }
        }
        get typeName() {
          switch (this.type) {
            case 0:
              return 'legacy';
            case 1:
              return 'eip-2930';
            case 2:
              return 'eip-1559';
            case 3:
              return 'eip-4844';
            case 4:
              return 'eip-7702';
          }
          return null;
        }
        get to() {
          const t = this.#e;
          return null == t && 3 === this.type ? s.j : t;
        }
        set to(t) {
          this.#e = null == t ? null : (0, i.b)(t);
        }
        get nonce() {
          return this.#i;
        }
        set nonce(t) {
          this.#i = (0, h.WZ)(t, 'value');
        }
        get gasLimit() {
          return this.#s;
        }
        set gasLimit(t) {
          this.#s = (0, h.Ab)(t);
        }
        get gasPrice() {
          const t = this.#r;
          return null != t || (0 !== this.type && 1 !== this.type) ? t : g;
        }
        set gasPrice(t) {
          this.#r = null == t ? null : (0, h.Ab)(t, 'gasPrice');
        }
        get maxPriorityFeePerGas() {
          const t = this.#a;
          return null == t
            ? 2 === this.type || 3 === this.type
              ? g
              : null
            : t;
        }
        set maxPriorityFeePerGas(t) {
          this.#a = null == t ? null : (0, h.Ab)(t, 'maxPriorityFeePerGas');
        }
        get maxFeePerGas() {
          const t = this.#l;
          return null == t
            ? 2 === this.type || 3 === this.type
              ? g
              : null
            : t;
        }
        set maxFeePerGas(t) {
          this.#l = null == t ? null : (0, h.Ab)(t, 'maxFeePerGas');
        }
        get data() {
          return this.#n;
        }
        set data(t) {
          this.#n = (0, u.c$)(t);
        }
        get value() {
          return this.#o;
        }
        set value(t) {
          this.#o = (0, h.Ab)(t, 'value');
        }
        get chainId() {
          return this.#u;
        }
        set chainId(t) {
          this.#u = (0, h.Ab)(t);
        }
        get signature() {
          return this.#c || null;
        }
        set signature(t) {
          this.#c = null == t ? null : a.t.from(t);
        }
        get accessList() {
          const t = this.#h || null;
          return null == t
            ? 1 === this.type || 2 === this.type || 3 === this.type
              ? []
              : null
            : t;
        }
        set accessList(t) {
          this.#h = null == t ? null : (0, m.$)(t);
        }
        get authorizationList() {
          const t = this.#g || null;
          return null == t && 4 === this.type ? [] : t;
        }
        set authorizationList(t) {
          this.#g = null == t ? null : t.map((t) => (0, y.M)(t));
        }
        get maxFeePerBlobGas() {
          const t = this.#f;
          return null == t && 3 === this.type ? g : t;
        }
        set maxFeePerBlobGas(t) {
          this.#f = null == t ? null : (0, h.Ab)(t, 'maxFeePerBlobGas');
        }
        get blobVersionedHashes() {
          let t = this.#d;
          return null == t && 3 === this.type ? [] : t;
        }
        set blobVersionedHashes(t) {
          if (null != t) {
            ((0, c.MR)(
              Array.isArray(t),
              'blobVersionedHashes must be an Array',
              'value',
              t
            ),
              (t = t.slice()));
            for (let e = 0; e < t.length; e++)
              (0, c.MR)(
                (0, u.Lo)(t[e], 32),
                'invalid blobVersionedHash',
                `value[${e}]`,
                t[e]
              );
          }
          this.#d = t;
        }
        get blobs() {
          return null == this.#y
            ? null
            : this.#y.map((t) => Object.assign({}, t));
        }
        set blobs(t) {
          if (null == t) return void (this.#y = null);
          const e = [],
            n = [];
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            if ((0, u.f)(s)) {
              (0, c.vA)(
                this.#m,
                'adding a raw blob requires a KZG library',
                'UNSUPPORTED_OPERATION',
                { operation: 'set blobs()' }
              );
              let t = (0, u.q5)(s);
              if (
                ((0, c.MR)(
                  t.length <= G,
                  'blob is too large',
                  `blobs[${i}]`,
                  s
                ),
                t.length !== G)
              ) {
                const e = new Uint8Array(G);
                (e.set(t), (t = e));
              }
              const r = this.#m.blobToKzgCommitment(t),
                a = (0, u.c$)(this.#m.computeBlobKzgProof(t, r));
              (e.push({
                data: (0, u.c$)(t),
                commitment: (0, u.c$)(r),
                proof: a,
              }),
                n.push(F(1, r)));
            } else {
              const t = (0, u.c$)(s.commitment);
              (e.push({
                data: (0, u.c$)(s.data),
                commitment: t,
                proof: (0, u.c$)(s.proof),
              }),
                n.push(F(1, t)));
            }
          }
          ((this.#y = e), (this.#d = n));
        }
        get kzg() {
          return this.#m;
        }
        set kzg(t) {
          this.#m =
            null == t
              ? null
              : ((t) => ({
                  blobToKzgCommitment(e) {
                    if ('computeBlobProof' in t) {
                      if (
                        'blobToKzgCommitment' in t &&
                        'function' == typeof t.blobToKzgCommitment
                      )
                        return (0, u.q5)(t.blobToKzgCommitment((0, u.c$)(e)));
                    } else if (
                      'blobToKzgCommitment' in t &&
                      'function' == typeof t.blobToKzgCommitment
                    )
                      return (0, u.q5)(t.blobToKzgCommitment(e));
                    if (
                      'blobToKZGCommitment' in t &&
                      'function' == typeof t.blobToKZGCommitment
                    )
                      return (0, u.q5)(t.blobToKZGCommitment((0, u.c$)(e)));
                    (0, c.MR)(!1, 'unsupported KZG library', 'kzg', t);
                  },
                  computeBlobKzgProof(e, n) {
                    return 'computeBlobProof' in t &&
                      'function' == typeof t.computeBlobProof
                      ? (0, u.q5)(
                          t.computeBlobProof((0, u.c$)(e), (0, u.c$)(n))
                        )
                      : 'computeBlobKzgProof' in t &&
                          'function' == typeof t.computeBlobKzgProof
                        ? t.computeBlobKzgProof(e, n)
                        : 'computeBlobKZGProof' in t &&
                            'function' == typeof t.computeBlobKZGProof
                          ? (0, u.q5)(
                              t.computeBlobKZGProof((0, u.c$)(e), (0, u.c$)(n))
                            )
                          : void (0, c.MR)(
                              !1,
                              'unsupported KZG library',
                              'kzg',
                              t
                            );
                  },
                }))(t);
        }
        constructor() {
          ((this.#t = null),
            (this.#e = null),
            (this.#i = 0),
            (this.#s = g),
            (this.#r = null),
            (this.#a = null),
            (this.#l = null),
            (this.#n = '0x'),
            (this.#o = g),
            (this.#u = g),
            (this.#c = null),
            (this.#h = null),
            (this.#f = null),
            (this.#d = null),
            (this.#m = null),
            (this.#y = null),
            (this.#g = null));
        }
        get hash() {
          return null == this.signature ? null : (0, l.S)(this.#P(!0, !1));
        }
        get unsignedHash() {
          return (0, l.S)(this.unsignedSerialized);
        }
        get from() {
          return null == this.signature
            ? null
            : ((t = this.unsignedHash),
              (e = this.signature),
              ((t) => {
                let e;
                return (
                  (e =
                    'string' == typeof t
                      ? o.h.computePublicKey(t, !1)
                      : t.publicKey),
                  (0, i.b)((0, l.S)('0x' + e.substring(4)).substring(26))
                );
              })(o.h.recoverPublicKey(t, e)));
          var t, e;
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : o.h.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        #P(t, e) {
          (0, c.vA)(
            !t || null != this.signature,
            'cannot serialize unsigned transaction; maybe you meant .unsignedSerialized',
            'UNSUPPORTED_OPERATION',
            { operation: '.serialized' }
          );
          const n = t ? this.signature : null;
          switch (this.inferType()) {
            case 0:
              return ((t, e) => {
                const n = [
                  B(t.nonce, 'nonce'),
                  B(t.gasPrice || 0, 'gasPrice'),
                  B(t.gasLimit, 'gasLimit'),
                  t.to || '0x',
                  B(t.value, 'value'),
                  t.data,
                ];
                let i = g;
                if (t.chainId != g)
                  ((i = (0, h.Ab)(t.chainId, 'tx.chainId')),
                    (0, c.MR)(
                      !e || null == e.networkV || e.legacyChainId === i,
                      'tx.chainId/sig.v mismatch',
                      'sig',
                      e
                    ));
                else if (t.signature) {
                  const e = t.signature.legacyChainId;
                  null != e && (i = e);
                }
                if (!e)
                  return (
                    i !== g &&
                      (n.push((0, h.c4)(i)), n.push('0x'), n.push('0x')),
                    (0, d.R)(n)
                  );
                let s = BigInt(27 + e.yParity);
                return (
                  i !== g
                    ? (s = a.t.getChainIdV(i, e.v))
                    : BigInt(e.v) !== s &&
                      (0, c.MR)(!1, 'tx.chainId/sig.v mismatch', 'sig', e),
                  n.push((0, h.c4)(s)),
                  n.push((0, h.c4)(e.r)),
                  n.push((0, h.c4)(e.s)),
                  (0, d.R)(n)
                );
              })(this, n);
            case 1:
              return ((t, e) => {
                const n = [
                  B(t.chainId, 'chainId'),
                  B(t.nonce, 'nonce'),
                  B(t.gasPrice || 0, 'gasPrice'),
                  B(t.gasLimit, 'gasLimit'),
                  t.to || '0x',
                  B(t.value, 'value'),
                  t.data,
                  k(t.accessList || []),
                ];
                return (
                  e &&
                    (n.push(B(e.yParity, 'recoveryParam')),
                    n.push((0, h.c4)(e.r)),
                    n.push((0, h.c4)(e.s))),
                  (0, u.xW)(['0x01', (0, d.R)(n)])
                );
              })(this, n);
            case 2:
              return ((t, e) => {
                const n = [
                  B(t.chainId, 'chainId'),
                  B(t.nonce, 'nonce'),
                  B(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  B(t.maxFeePerGas || 0, 'maxFeePerGas'),
                  B(t.gasLimit, 'gasLimit'),
                  t.to || '0x',
                  B(t.value, 'value'),
                  t.data,
                  k(t.accessList || []),
                ];
                return (
                  e &&
                    (n.push(B(e.yParity, 'yParity')),
                    n.push((0, h.c4)(e.r)),
                    n.push((0, h.c4)(e.s))),
                  (0, u.xW)(['0x02', (0, d.R)(n)])
                );
              })(this, n);
            case 3:
              return ((t, e, n) => {
                const i = [
                  B(t.chainId, 'chainId'),
                  B(t.nonce, 'nonce'),
                  B(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  B(t.maxFeePerGas || 0, 'maxFeePerGas'),
                  B(t.gasLimit, 'gasLimit'),
                  t.to || s.j,
                  B(t.value, 'value'),
                  t.data,
                  k(t.accessList || []),
                  B(t.maxFeePerBlobGas || 0, 'maxFeePerBlobGas'),
                  T(t.blobVersionedHashes || [], 'blobVersionedHashes'),
                ];
                return e &&
                  (i.push(B(e.yParity, 'yParity')),
                  i.push((0, h.c4)(e.r)),
                  i.push((0, h.c4)(e.s)),
                  n)
                  ? (0, u.xW)([
                      '0x03',
                      (0, d.R)([
                        i,
                        n.map((t) => t.data),
                        n.map((t) => t.commitment),
                        n.map((t) => t.proof),
                      ]),
                    ])
                  : (0, u.xW)(['0x03', (0, d.R)(i)]);
              })(this, n, e ? this.blobs : null);
            case 4:
              return ((t, e) => {
                const n = [
                  B(t.chainId, 'chainId'),
                  B(t.nonce, 'nonce'),
                  B(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  B(t.maxFeePerGas || 0, 'maxFeePerGas'),
                  B(t.gasLimit, 'gasLimit'),
                  t.to || '0x',
                  B(t.value, 'value'),
                  t.data,
                  k(t.accessList || []),
                  ((i = t.authorizationList || []),
                  i.map((t) => [
                    B(t.chainId, 'chainId'),
                    t.address,
                    B(t.nonce, 'nonce'),
                    B(t.signature.yParity, 'yParity'),
                    (0, h.c4)(t.signature.r),
                    (0, h.c4)(t.signature.s),
                  ])),
                ];
                var i;
                return (
                  e &&
                    (n.push(B(e.yParity, 'yParity')),
                    n.push((0, h.c4)(e.r)),
                    n.push((0, h.c4)(e.s))),
                  (0, u.xW)(['0x04', (0, d.R)(n)])
                );
              })(this, n);
          }
          (0, c.vA)(
            !1,
            'unsupported transaction type',
            'UNSUPPORTED_OPERATION',
            { operation: '.serialized' }
          );
        }
        get serialized() {
          return this.#P(!0, !0);
        }
        get unsignedSerialized() {
          return this.#P(!1, !1);
        }
        inferType() {
          const t = this.inferTypes();
          return t.indexOf(2) >= 0 ? 2 : t.pop();
        }
        inferTypes() {
          const t = null != this.gasPrice,
            e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            n = null != this.accessList,
            i = null != this.#f || this.#d;
          (null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, c.vA)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              'priorityFee cannot be more than maxFee',
              'BAD_DATA',
              { value: this }
            ),
            (0, c.vA)(
              !e || (0 !== this.type && 1 !== this.type),
              'transaction type cannot have maxFeePerGas or maxPriorityFeePerGas',
              'BAD_DATA',
              { value: this }
            ),
            (0, c.vA)(
              0 !== this.type || !n,
              'legacy transaction cannot have accessList',
              'BAD_DATA',
              { value: this }
            ));
          const s = [];
          return (
            null != this.type
              ? s.push(this.type)
              : this.authorizationList && this.authorizationList.length
                ? s.push(4)
                : e
                  ? s.push(2)
                  : t
                    ? (s.push(1), n || s.push(0))
                    : n
                      ? (s.push(1), s.push(2))
                      : ((i && this.to) || (s.push(0), s.push(1), s.push(2)),
                        s.push(3)),
            s.sort(),
            s
          );
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
        clone() {
          return $.from(this);
        }
        toJSON() {
          const t = (t) => (null == t ? null : t.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: t(this.gasLimit),
            gasPrice: t(this.gasPrice),
            maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
            maxFeePerGas: t(this.maxFeePerGas),
            value: t(this.value),
            chainId: t(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(t) {
          if (null == t) return new $();
          if ('string' == typeof t) {
            const e = (0, u.q5)(t);
            if (e[0] >= 127)
              return $.from(
                ((t) => {
                  const e = (0, f.J)(t);
                  (0, c.MR)(
                    Array.isArray(e) && (9 === e.length || 6 === e.length),
                    'invalid field count for legacy transaction',
                    'data',
                    t
                  );
                  const n = {
                    type: 0,
                    nonce: z(e[0], 'nonce'),
                    gasPrice: w(e[1], 'gasPrice'),
                    gasLimit: w(e[2], 'gasLimit'),
                    to: L(e[3]),
                    value: w(e[4], 'value'),
                    data: (0, u.c$)(e[5]),
                    chainId: g,
                  };
                  if (6 === e.length) return n;
                  const i = w(e[6], 'v'),
                    s = w(e[7], 'r'),
                    r = w(e[8], 's');
                  if (s === g && r === g) n.chainId = i;
                  else {
                    let t = (i - p) / P;
                    (t < g && (t = g),
                      (n.chainId = t),
                      (0, c.MR)(
                        t !== g || i === b || i === v,
                        'non-canonical legacy v',
                        'v',
                        e[6]
                      ),
                      (n.signature = a.t.from({
                        r: (0, u.nx)(e[7], 32),
                        s: (0, u.nx)(e[8], 32),
                        v: i,
                      })));
                  }
                  return n;
                })(e)
              );
            switch (e[0]) {
              case 1:
                return $.from(
                  ((t) => {
                    const e = (0, f.J)((0, u.q5)(t).slice(1));
                    (0, c.MR)(
                      Array.isArray(e) && (8 === e.length || 11 === e.length),
                      'invalid field count for transaction type: 1',
                      'data',
                      (0, u.c$)(t)
                    );
                    const n = {
                      type: 1,
                      chainId: w(e[0], 'chainId'),
                      nonce: z(e[1], 'nonce'),
                      gasPrice: w(e[2], 'gasPrice'),
                      gasLimit: w(e[3], 'gasLimit'),
                      to: L(e[4]),
                      value: w(e[5], 'value'),
                      data: (0, u.c$)(e[6]),
                      accessList: I(e[7], 'accessList'),
                    };
                    return (8 === e.length || O(n, e.slice(8)), n);
                  })(e)
                );
              case 2:
                return $.from(
                  ((t) => {
                    const e = (0, f.J)((0, u.q5)(t).slice(1));
                    (0, c.MR)(
                      Array.isArray(e) && (9 === e.length || 12 === e.length),
                      'invalid field count for transaction type: 2',
                      'data',
                      (0, u.c$)(t)
                    );
                    const n = {
                      type: 2,
                      chainId: w(e[0], 'chainId'),
                      nonce: z(e[1], 'nonce'),
                      maxPriorityFeePerGas: w(e[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: w(e[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: w(e[4], 'gasLimit'),
                      to: L(e[5]),
                      value: w(e[6], 'value'),
                      data: (0, u.c$)(e[7]),
                      accessList: I(e[8], 'accessList'),
                    };
                    return (9 === e.length || O(n, e.slice(9)), n);
                  })(e)
                );
              case 3:
                return $.from(
                  ((t) => {
                    let e = (0, f.J)((0, u.q5)(t).slice(1)),
                      n = '3',
                      i = null;
                    if (4 === e.length && Array.isArray(e[0])) {
                      n = '3 (network format)';
                      const t = e[1],
                        s = e[2],
                        r = e[3];
                      ((0, c.MR)(
                        Array.isArray(t),
                        'invalid network format: blobs not an array',
                        'fields[1]',
                        t
                      ),
                        (0, c.MR)(
                          Array.isArray(s),
                          'invalid network format: commitments not an array',
                          'fields[2]',
                          s
                        ),
                        (0, c.MR)(
                          Array.isArray(r),
                          'invalid network format: proofs not an array',
                          'fields[3]',
                          r
                        ),
                        (0, c.MR)(
                          t.length === s.length,
                          'invalid network format: blobs/commitments length mismatch',
                          'fields',
                          e
                        ),
                        (0, c.MR)(
                          t.length === r.length,
                          'invalid network format: blobs/proofs length mismatch',
                          'fields',
                          e
                        ),
                        (i = []));
                      for (let n = 0; n < e[1].length; n++)
                        i.push({ data: t[n], commitment: s[n], proof: r[n] });
                      e = e[0];
                    }
                    (0, c.MR)(
                      Array.isArray(e) && (11 === e.length || 14 === e.length),
                      `invalid field count for transaction type: ${n}`,
                      'data',
                      (0, u.c$)(t)
                    );
                    const s = {
                      type: 3,
                      chainId: w(e[0], 'chainId'),
                      nonce: z(e[1], 'nonce'),
                      maxPriorityFeePerGas: w(e[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: w(e[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: w(e[4], 'gasLimit'),
                      to: L(e[5]),
                      value: w(e[6], 'value'),
                      data: (0, u.c$)(e[7]),
                      accessList: I(e[8], 'accessList'),
                      maxFeePerBlobGas: w(e[9], 'maxFeePerBlobGas'),
                      blobVersionedHashes: e[10],
                    };
                    (i && (s.blobs = i),
                      (0, c.MR)(
                        null != s.to,
                        `invalid address for transaction type: ${n}`,
                        'data',
                        t
                      ),
                      (0, c.MR)(
                        Array.isArray(s.blobVersionedHashes),
                        'invalid blobVersionedHashes: must be an array',
                        'data',
                        t
                      ));
                    for (let r = 0; r < s.blobVersionedHashes.length; r++)
                      (0, c.MR)(
                        (0, u.Lo)(s.blobVersionedHashes[r], 32),
                        `invalid blobVersionedHash at index ${r}: must be length 32`,
                        'data',
                        t
                      );
                    return (11 === e.length || O(s, e.slice(11)), s);
                  })(e)
                );
              case 4:
                return $.from(
                  ((t) => {
                    const e = (0, f.J)((0, u.q5)(t).slice(1));
                    (0, c.MR)(
                      Array.isArray(e) && (10 === e.length || 13 === e.length),
                      'invalid field count for transaction type: 4',
                      'data',
                      (0, u.c$)(t)
                    );
                    const n = {
                      type: 4,
                      chainId: w(e[0], 'chainId'),
                      nonce: z(e[1], 'nonce'),
                      maxPriorityFeePerGas: w(e[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: w(e[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: w(e[4], 'gasLimit'),
                      to: L(e[5]),
                      value: w(e[6], 'value'),
                      data: (0, u.c$)(e[7]),
                      accessList: I(e[8], 'accessList'),
                      authorizationList: A(e[9], 'authorizationList'),
                    };
                    return (10 === e.length || O(n, e.slice(10)), n);
                  })(e)
                );
            }
            (0, c.vA)(
              !1,
              'unsupported transaction type',
              'UNSUPPORTED_OPERATION',
              { operation: 'from' }
            );
          }
          const e = new $();
          return (
            null != t.type && (e.type = t.type),
            null != t.to && (e.to = t.to),
            null != t.nonce && (e.nonce = t.nonce),
            null != t.gasLimit && (e.gasLimit = t.gasLimit),
            null != t.gasPrice && (e.gasPrice = t.gasPrice),
            null != t.maxPriorityFeePerGas &&
              (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
            null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
            null != t.maxFeePerBlobGas &&
              (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
            null != t.data && (e.data = t.data),
            null != t.value && (e.value = t.value),
            null != t.chainId && (e.chainId = t.chainId),
            null != t.signature && (e.signature = a.t.from(t.signature)),
            null != t.accessList && (e.accessList = t.accessList),
            null != t.authorizationList &&
              (e.authorizationList = t.authorizationList),
            null != t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes),
            null != t.kzg && (e.kzg = t.kzg),
            null != t.blobs && (e.blobs = t.blobs),
            null != t.hash &&
              ((0, c.MR)(
                e.isSigned(),
                "unsigned transaction cannot define '.hash'",
                'tx',
                t
              ),
              (0, c.MR)(e.hash === t.hash, 'hash mismatch', 'tx', t)),
            null != t.from &&
              ((0, c.MR)(
                e.isSigned(),
                "unsigned transaction cannot define '.from'",
                'tx',
                t
              ),
              (0, c.MR)(
                e.from.toLowerCase() === (t.from || '').toLowerCase(),
                'from mismatch',
                'tx',
                t
              )),
            e
          );
        }
      }
    },
    5303(t, e, n) {
      n.d(e, { M: () => a });
      var i = n(4922),
        s = n(6533),
        r = n(8848);
      function a(t) {
        return {
          address: (0, i.b)(t.address),
          nonce: (0, r.Ab)(null != t.nonce ? t.nonce : 0),
          chainId: (0, r.Ab)(null != t.chainId ? t.chainId : 0),
          signature: s.t.from(t.signature),
        };
      }
    },
    7602(t, e, n) {
      n.d(e, { $: () => l });
      var i = n(4922),
        s = n(8227),
        r = n(536);
      function a(t, e) {
        return {
          address: (0, i.b)(t),
          storageKeys: e.map(
            (t, e) => (
              (0, r.MR)(
                (0, s.Lo)(t, 32),
                'invalid slot',
                `storageKeys[${e}]`,
                t
              ),
              t.toLowerCase()
            )
          ),
        };
      }
      function l(t) {
        if (Array.isArray(t))
          return t.map((e, n) =>
            Array.isArray(e)
              ? ((0, r.MR)(
                  2 === e.length,
                  'invalid slot set',
                  `value[${n}]`,
                  e
                ),
                a(e[0], e[1]))
              : ((0, r.MR)(
                  null != e && 'object' == typeof e,
                  'invalid address-slot set',
                  'value',
                  t
                ),
                a(e.address, e.storageKeys))
          );
        (0, r.MR)(
          null != t && 'object' == typeof t,
          'invalid access list',
          'value',
          t
        );
        const e = Object.keys(t).map((e) => {
          const n = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return a(e, Object.keys(n).sort());
        });
        return (e.sort((t, e) => t.address.localeCompare(e.address)), e);
      }
    },
  },
]);
