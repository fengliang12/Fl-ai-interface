'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [894],
  {
    5093: (e, t, s) => {
      s.d(t, { Z: () => w });
      var i = s(4922),
        a = s(3227),
        n = s(7043),
        r = s(6533),
        o = s(8757),
        l = s(5914),
        c = s(8227),
        u = s(536),
        h = s(8848),
        m = s(6088),
        g = s(3456),
        f = s(7602),
        d = s(5303);
      const y = BigInt(0),
        b = BigInt(2),
        P = BigInt(27),
        p = BigInt(28),
        x = BigInt(35),
        v = BigInt(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        ),
        G = 131072;
      function L(e, t) {
        let s = e.toString(16);
        for (; s.length < 2; ) s = '0' + s;
        return ((s += (0, n.s)(t).substring(4)), '0x' + s);
      }
      function F(e) {
        return '0x' === e ? null : (0, i.b)(e);
      }
      function A(e, t) {
        try {
          return (0, f.$)(e);
        } catch (s) {
          (0, u.MR)(!1, s.message, t, e);
        }
      }
      function I(e, t) {
        try {
          if (!Array.isArray(e))
            throw new Error('authorizationList: invalid array');
          const t = [];
          for (let s = 0; s < e.length; s++) {
            const i = e[s];
            if (!Array.isArray(i))
              throw new Error(`authorization[${s}]: invalid array`);
            if (6 !== i.length)
              throw new Error(`authorization[${s}]: wrong length`);
            if (!i[1]) throw new Error(`authorization[${s}]: null address`);
            t.push({
              address: F(i[1]),
              nonce: R(i[2], 'nonce'),
              chainId: R(i[0], 'chainId'),
              signature: r.t.from({
                yParity: z(i[3], 'yParity'),
                r: (0, c.nx)(i[4], 32),
                s: (0, c.nx)(i[5], 32),
              }),
            });
          }
          return t;
        } catch (s) {
          (0, u.MR)(!1, s.message, t, e);
        }
      }
      function z(e, t) {
        return '0x' === e ? 0 : (0, h.WZ)(e, t);
      }
      function R(e, t) {
        if ('0x' === e) return y;
        const s = (0, h.Ab)(e, t);
        return ((0, u.MR)(s <= v, 'value exceeds uint size', t, s), s);
      }
      function $(e, t) {
        const s = (0, h.Ab)(e, 'value'),
          i = (0, h.c4)(s);
        return ((0, u.MR)(i.length <= 32, 'value too large', `tx.${t}`, s), i);
      }
      function B(e) {
        return (0, f.$)(e).map((e) => [e.address, e.storageKeys]);
      }
      function M(e, t) {
        (0, u.MR)(Array.isArray(e), `invalid ${t}`, 'value', e);
        for (let s = 0; s < e.length; s++)
          (0, u.MR)(
            (0, c.Lo)(e[s], 32),
            'invalid ${ param } hash',
            `value[${s}]`,
            e[s]
          );
        return e;
      }
      function k(e, t) {
        let s;
        try {
          if (((s = z(t[0], 'yParity')), 0 !== s && 1 !== s))
            throw new Error('bad yParity');
        } catch (o) {
          (0, u.MR)(!1, 'invalid yParity', 'yParity', t[0]);
        }
        const i = (0, c.nx)(t[1], 32),
          a = (0, c.nx)(t[2], 32),
          n = r.t.from({ r: i, s: a, yParity: s });
        e.signature = n;
      }
      class w {
        #e;
        #t;
        #s;
        #i;
        #a;
        #n;
        #r;
        #o;
        #l;
        #c;
        #u;
        #h;
        #m;
        #g;
        #f;
        #d;
        #y;
        get type() {
          return this.#e;
        }
        set type(e) {
          switch (e) {
            case null:
              this.#e = null;
              break;
            case 0:
            case 'legacy':
              this.#e = 0;
              break;
            case 1:
            case 'berlin':
            case 'eip-2930':
              this.#e = 1;
              break;
            case 2:
            case 'london':
            case 'eip-1559':
              this.#e = 2;
              break;
            case 3:
            case 'cancun':
            case 'eip-4844':
              this.#e = 3;
              break;
            case 4:
            case 'pectra':
            case 'eip-7702':
              this.#e = 4;
              break;
            default:
              (0, u.MR)(!1, 'unsupported transaction type', 'type', e);
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
          const e = this.#t;
          return null == e && 3 === this.type ? a.j : e;
        }
        set to(e) {
          this.#t = null == e ? null : (0, i.b)(e);
        }
        get nonce() {
          return this.#i;
        }
        set nonce(e) {
          this.#i = (0, h.WZ)(e, 'value');
        }
        get gasLimit() {
          return this.#a;
        }
        set gasLimit(e) {
          this.#a = (0, h.Ab)(e);
        }
        get gasPrice() {
          const e = this.#n;
          return null != e || (0 !== this.type && 1 !== this.type) ? e : y;
        }
        set gasPrice(e) {
          this.#n = null == e ? null : (0, h.Ab)(e, 'gasPrice');
        }
        get maxPriorityFeePerGas() {
          const e = this.#r;
          return null == e
            ? 2 === this.type || 3 === this.type
              ? y
              : null
            : e;
        }
        set maxPriorityFeePerGas(e) {
          this.#r = null == e ? null : (0, h.Ab)(e, 'maxPriorityFeePerGas');
        }
        get maxFeePerGas() {
          const e = this.#o;
          return null == e
            ? 2 === this.type || 3 === this.type
              ? y
              : null
            : e;
        }
        set maxFeePerGas(e) {
          this.#o = null == e ? null : (0, h.Ab)(e, 'maxFeePerGas');
        }
        get data() {
          return this.#s;
        }
        set data(e) {
          this.#s = (0, c.c$)(e);
        }
        get value() {
          return this.#l;
        }
        set value(e) {
          this.#l = (0, h.Ab)(e, 'value');
        }
        get chainId() {
          return this.#c;
        }
        set chainId(e) {
          this.#c = (0, h.Ab)(e);
        }
        get signature() {
          return this.#u || null;
        }
        set signature(e) {
          this.#u = null == e ? null : r.t.from(e);
        }
        get accessList() {
          const e = this.#h || null;
          return null == e
            ? 1 === this.type || 2 === this.type || 3 === this.type
              ? []
              : null
            : e;
        }
        set accessList(e) {
          this.#h = null == e ? null : (0, f.$)(e);
        }
        get authorizationList() {
          const e = this.#y || null;
          return null == e && 4 === this.type ? [] : e;
        }
        set authorizationList(e) {
          this.#y = null == e ? null : e.map((e) => (0, d.M)(e));
        }
        get maxFeePerBlobGas() {
          const e = this.#m;
          return null == e && 3 === this.type ? y : e;
        }
        set maxFeePerBlobGas(e) {
          this.#m = null == e ? null : (0, h.Ab)(e, 'maxFeePerBlobGas');
        }
        get blobVersionedHashes() {
          let e = this.#g;
          return null == e && 3 === this.type ? [] : e;
        }
        set blobVersionedHashes(e) {
          if (null != e) {
            ((0, u.MR)(
              Array.isArray(e),
              'blobVersionedHashes must be an Array',
              'value',
              e
            ),
              (e = e.slice()));
            for (let t = 0; t < e.length; t++)
              (0, u.MR)(
                (0, c.Lo)(e[t], 32),
                'invalid blobVersionedHash',
                `value[${t}]`,
                e[t]
              );
          }
          this.#g = e;
        }
        get blobs() {
          return null == this.#d
            ? null
            : this.#d.map((e) => Object.assign({}, e));
        }
        set blobs(e) {
          if (null == e) return void (this.#d = null);
          const t = [],
            s = [];
          for (let i = 0; i < e.length; i++) {
            const a = e[i];
            if ((0, c.f)(a)) {
              (0, u.vA)(
                this.#f,
                'adding a raw blob requires a KZG library',
                'UNSUPPORTED_OPERATION',
                { operation: 'set blobs()' }
              );
              let e = (0, c.q5)(a);
              if (
                ((0, u.MR)(
                  e.length <= G,
                  'blob is too large',
                  `blobs[${i}]`,
                  a
                ),
                e.length !== G)
              ) {
                const t = new Uint8Array(G);
                (t.set(e), (e = t));
              }
              const n = this.#f.blobToKzgCommitment(e),
                r = (0, c.c$)(this.#f.computeBlobKzgProof(e, n));
              (t.push({
                data: (0, c.c$)(e),
                commitment: (0, c.c$)(n),
                proof: r,
              }),
                s.push(L(1, n)));
            } else {
              const e = (0, c.c$)(a.commitment);
              (t.push({
                data: (0, c.c$)(a.data),
                commitment: e,
                proof: (0, c.c$)(a.proof),
              }),
                s.push(L(1, e)));
            }
          }
          ((this.#d = t), (this.#g = s));
        }
        get kzg() {
          return this.#f;
        }
        set kzg(e) {
          this.#f =
            null == e
              ? null
              : (function (e) {
                  return {
                    blobToKzgCommitment: (t) => {
                      if ('computeBlobProof' in e) {
                        if (
                          'blobToKzgCommitment' in e &&
                          'function' == typeof e.blobToKzgCommitment
                        )
                          return (0, c.q5)(e.blobToKzgCommitment((0, c.c$)(t)));
                      } else if (
                        'blobToKzgCommitment' in e &&
                        'function' == typeof e.blobToKzgCommitment
                      )
                        return (0, c.q5)(e.blobToKzgCommitment(t));
                      if (
                        'blobToKZGCommitment' in e &&
                        'function' == typeof e.blobToKZGCommitment
                      )
                        return (0, c.q5)(e.blobToKZGCommitment((0, c.c$)(t)));
                      (0, u.MR)(!1, 'unsupported KZG library', 'kzg', e);
                    },
                    computeBlobKzgProof: (t, s) =>
                      'computeBlobProof' in e &&
                      'function' == typeof e.computeBlobProof
                        ? (0, c.q5)(
                            e.computeBlobProof((0, c.c$)(t), (0, c.c$)(s))
                          )
                        : 'computeBlobKzgProof' in e &&
                            'function' == typeof e.computeBlobKzgProof
                          ? e.computeBlobKzgProof(t, s)
                          : 'computeBlobKZGProof' in e &&
                              'function' == typeof e.computeBlobKZGProof
                            ? (0, c.q5)(
                                e.computeBlobKZGProof(
                                  (0, c.c$)(t),
                                  (0, c.c$)(s)
                                )
                              )
                            : void (0, u.MR)(
                                !1,
                                'unsupported KZG library',
                                'kzg',
                                e
                              ),
                  };
                })(e);
        }
        constructor() {
          ((this.#e = null),
            (this.#t = null),
            (this.#i = 0),
            (this.#a = y),
            (this.#n = null),
            (this.#r = null),
            (this.#o = null),
            (this.#s = '0x'),
            (this.#l = y),
            (this.#c = y),
            (this.#u = null),
            (this.#h = null),
            (this.#m = null),
            (this.#g = null),
            (this.#f = null),
            (this.#d = null),
            (this.#y = null));
        }
        get hash() {
          return null == this.signature ? null : (0, o.S)(this.#b(!0, !1));
        }
        get unsignedHash() {
          return (0, o.S)(this.unsignedSerialized);
        }
        get from() {
          return null == this.signature
            ? null
            : ((e = this.unsignedHash),
              (t = this.signature),
              (function (e) {
                let t;
                return (
                  (t =
                    'string' == typeof e
                      ? l.h.computePublicKey(e, !1)
                      : e.publicKey),
                  (0, i.b)((0, o.S)('0x' + t.substring(4)).substring(26))
                );
              })(l.h.recoverPublicKey(e, t)));
          var e, t;
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : l.h.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        #b(e, t) {
          (0, u.vA)(
            !e || null != this.signature,
            'cannot serialize unsigned transaction; maybe you meant .unsignedSerialized',
            'UNSUPPORTED_OPERATION',
            { operation: '.serialized' }
          );
          const s = e ? this.signature : null;
          switch (this.inferType()) {
            case 0:
              return (function (e, t) {
                const s = [
                  $(e.nonce, 'nonce'),
                  $(e.gasPrice || 0, 'gasPrice'),
                  $(e.gasLimit, 'gasLimit'),
                  e.to || '0x',
                  $(e.value, 'value'),
                  e.data,
                ];
                let i = y;
                if (e.chainId != y)
                  ((i = (0, h.Ab)(e.chainId, 'tx.chainId')),
                    (0, u.MR)(
                      !t || null == t.networkV || t.legacyChainId === i,
                      'tx.chainId/sig.v mismatch',
                      'sig',
                      t
                    ));
                else if (e.signature) {
                  const t = e.signature.legacyChainId;
                  null != t && (i = t);
                }
                if (!t)
                  return (
                    i !== y &&
                      (s.push((0, h.c4)(i)), s.push('0x'), s.push('0x')),
                    (0, g.R)(s)
                  );
                let a = BigInt(27 + t.yParity);
                return (
                  i !== y
                    ? (a = r.t.getChainIdV(i, t.v))
                    : BigInt(t.v) !== a &&
                      (0, u.MR)(!1, 'tx.chainId/sig.v mismatch', 'sig', t),
                  s.push((0, h.c4)(a)),
                  s.push((0, h.c4)(t.r)),
                  s.push((0, h.c4)(t.s)),
                  (0, g.R)(s)
                );
              })(this, s);
            case 1:
              return (function (e, t) {
                const s = [
                  $(e.chainId, 'chainId'),
                  $(e.nonce, 'nonce'),
                  $(e.gasPrice || 0, 'gasPrice'),
                  $(e.gasLimit, 'gasLimit'),
                  e.to || '0x',
                  $(e.value, 'value'),
                  e.data,
                  B(e.accessList || []),
                ];
                return (
                  t &&
                    (s.push($(t.yParity, 'recoveryParam')),
                    s.push((0, h.c4)(t.r)),
                    s.push((0, h.c4)(t.s))),
                  (0, c.xW)(['0x01', (0, g.R)(s)])
                );
              })(this, s);
            case 2:
              return (function (e, t) {
                const s = [
                  $(e.chainId, 'chainId'),
                  $(e.nonce, 'nonce'),
                  $(e.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  $(e.maxFeePerGas || 0, 'maxFeePerGas'),
                  $(e.gasLimit, 'gasLimit'),
                  e.to || '0x',
                  $(e.value, 'value'),
                  e.data,
                  B(e.accessList || []),
                ];
                return (
                  t &&
                    (s.push($(t.yParity, 'yParity')),
                    s.push((0, h.c4)(t.r)),
                    s.push((0, h.c4)(t.s))),
                  (0, c.xW)(['0x02', (0, g.R)(s)])
                );
              })(this, s);
            case 3:
              return (function (e, t, s) {
                const i = [
                  $(e.chainId, 'chainId'),
                  $(e.nonce, 'nonce'),
                  $(e.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  $(e.maxFeePerGas || 0, 'maxFeePerGas'),
                  $(e.gasLimit, 'gasLimit'),
                  e.to || a.j,
                  $(e.value, 'value'),
                  e.data,
                  B(e.accessList || []),
                  $(e.maxFeePerBlobGas || 0, 'maxFeePerBlobGas'),
                  M(e.blobVersionedHashes || [], 'blobVersionedHashes'),
                ];
                return t &&
                  (i.push($(t.yParity, 'yParity')),
                  i.push((0, h.c4)(t.r)),
                  i.push((0, h.c4)(t.s)),
                  s)
                  ? (0, c.xW)([
                      '0x03',
                      (0, g.R)([
                        i,
                        s.map((e) => e.data),
                        s.map((e) => e.commitment),
                        s.map((e) => e.proof),
                      ]),
                    ])
                  : (0, c.xW)(['0x03', (0, g.R)(i)]);
              })(this, s, t ? this.blobs : null);
            case 4:
              return (function (e, t) {
                const s = [
                  $(e.chainId, 'chainId'),
                  $(e.nonce, 'nonce'),
                  $(e.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                  $(e.maxFeePerGas || 0, 'maxFeePerGas'),
                  $(e.gasLimit, 'gasLimit'),
                  e.to || '0x',
                  $(e.value, 'value'),
                  e.data,
                  B(e.accessList || []),
                  ((i = e.authorizationList || []),
                  i.map((e) => [
                    $(e.chainId, 'chainId'),
                    e.address,
                    $(e.nonce, 'nonce'),
                    $(e.signature.yParity, 'yParity'),
                    (0, h.c4)(e.signature.r),
                    (0, h.c4)(e.signature.s),
                  ])),
                ];
                var i;
                return (
                  t &&
                    (s.push($(t.yParity, 'yParity')),
                    s.push((0, h.c4)(t.r)),
                    s.push((0, h.c4)(t.s))),
                  (0, c.xW)(['0x04', (0, g.R)(s)])
                );
              })(this, s);
          }
          (0, u.vA)(
            !1,
            'unsupported transaction type',
            'UNSUPPORTED_OPERATION',
            { operation: '.serialized' }
          );
        }
        get serialized() {
          return this.#b(!0, !0);
        }
        get unsignedSerialized() {
          return this.#b(!1, !1);
        }
        inferType() {
          const e = this.inferTypes();
          return e.indexOf(2) >= 0 ? 2 : e.pop();
        }
        inferTypes() {
          const e = null != this.gasPrice,
            t = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            s = null != this.accessList,
            i = null != this.#m || this.#g;
          (null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, u.vA)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              'priorityFee cannot be more than maxFee',
              'BAD_DATA',
              { value: this }
            ),
            (0, u.vA)(
              !t || (0 !== this.type && 1 !== this.type),
              'transaction type cannot have maxFeePerGas or maxPriorityFeePerGas',
              'BAD_DATA',
              { value: this }
            ),
            (0, u.vA)(
              0 !== this.type || !s,
              'legacy transaction cannot have accessList',
              'BAD_DATA',
              { value: this }
            ));
          const a = [];
          return (
            null != this.type
              ? a.push(this.type)
              : this.authorizationList && this.authorizationList.length
                ? a.push(4)
                : t
                  ? a.push(2)
                  : e
                    ? (a.push(1), s || a.push(0))
                    : s
                      ? (a.push(1), a.push(2))
                      : ((i && this.to) || (a.push(0), a.push(1), a.push(2)),
                        a.push(3)),
            a.sort(),
            a
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
          return w.from(this);
        }
        toJSON() {
          const e = (e) => (null == e ? null : e.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: e(this.gasLimit),
            gasPrice: e(this.gasPrice),
            maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
            maxFeePerGas: e(this.maxFeePerGas),
            value: e(this.value),
            chainId: e(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(e) {
          if (null == e) return new w();
          if ('string' == typeof e) {
            const t = (0, c.q5)(e);
            if (t[0] >= 127)
              return w.from(
                (function (e) {
                  const t = (0, m.J)(e);
                  (0, u.MR)(
                    Array.isArray(t) && (9 === t.length || 6 === t.length),
                    'invalid field count for legacy transaction',
                    'data',
                    e
                  );
                  const s = {
                    type: 0,
                    nonce: z(t[0], 'nonce'),
                    gasPrice: R(t[1], 'gasPrice'),
                    gasLimit: R(t[2], 'gasLimit'),
                    to: F(t[3]),
                    value: R(t[4], 'value'),
                    data: (0, c.c$)(t[5]),
                    chainId: y,
                  };
                  if (6 === t.length) return s;
                  const i = R(t[6], 'v'),
                    a = R(t[7], 'r'),
                    n = R(t[8], 's');
                  if (a === y && n === y) s.chainId = i;
                  else {
                    let e = (i - x) / b;
                    (e < y && (e = y),
                      (s.chainId = e),
                      (0, u.MR)(
                        e !== y || i === P || i === p,
                        'non-canonical legacy v',
                        'v',
                        t[6]
                      ),
                      (s.signature = r.t.from({
                        r: (0, c.nx)(t[7], 32),
                        s: (0, c.nx)(t[8], 32),
                        v: i,
                      })));
                  }
                  return s;
                })(t)
              );
            switch (t[0]) {
              case 1:
                return w.from(
                  (function (e) {
                    const t = (0, m.J)((0, c.q5)(e).slice(1));
                    (0, u.MR)(
                      Array.isArray(t) && (8 === t.length || 11 === t.length),
                      'invalid field count for transaction type: 1',
                      'data',
                      (0, c.c$)(e)
                    );
                    const s = {
                      type: 1,
                      chainId: R(t[0], 'chainId'),
                      nonce: z(t[1], 'nonce'),
                      gasPrice: R(t[2], 'gasPrice'),
                      gasLimit: R(t[3], 'gasLimit'),
                      to: F(t[4]),
                      value: R(t[5], 'value'),
                      data: (0, c.c$)(t[6]),
                      accessList: A(t[7], 'accessList'),
                    };
                    return (8 === t.length || k(s, t.slice(8)), s);
                  })(t)
                );
              case 2:
                return w.from(
                  (function (e) {
                    const t = (0, m.J)((0, c.q5)(e).slice(1));
                    (0, u.MR)(
                      Array.isArray(t) && (9 === t.length || 12 === t.length),
                      'invalid field count for transaction type: 2',
                      'data',
                      (0, c.c$)(e)
                    );
                    const s = {
                      type: 2,
                      chainId: R(t[0], 'chainId'),
                      nonce: z(t[1], 'nonce'),
                      maxPriorityFeePerGas: R(t[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: R(t[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: R(t[4], 'gasLimit'),
                      to: F(t[5]),
                      value: R(t[6], 'value'),
                      data: (0, c.c$)(t[7]),
                      accessList: A(t[8], 'accessList'),
                    };
                    return (9 === t.length || k(s, t.slice(9)), s);
                  })(t)
                );
              case 3:
                return w.from(
                  (function (e) {
                    let t = (0, m.J)((0, c.q5)(e).slice(1)),
                      s = '3',
                      i = null;
                    if (4 === t.length && Array.isArray(t[0])) {
                      s = '3 (network format)';
                      const e = t[1],
                        a = t[2],
                        n = t[3];
                      ((0, u.MR)(
                        Array.isArray(e),
                        'invalid network format: blobs not an array',
                        'fields[1]',
                        e
                      ),
                        (0, u.MR)(
                          Array.isArray(a),
                          'invalid network format: commitments not an array',
                          'fields[2]',
                          a
                        ),
                        (0, u.MR)(
                          Array.isArray(n),
                          'invalid network format: proofs not an array',
                          'fields[3]',
                          n
                        ),
                        (0, u.MR)(
                          e.length === a.length,
                          'invalid network format: blobs/commitments length mismatch',
                          'fields',
                          t
                        ),
                        (0, u.MR)(
                          e.length === n.length,
                          'invalid network format: blobs/proofs length mismatch',
                          'fields',
                          t
                        ),
                        (i = []));
                      for (let s = 0; s < t[1].length; s++)
                        i.push({ data: e[s], commitment: a[s], proof: n[s] });
                      t = t[0];
                    }
                    (0, u.MR)(
                      Array.isArray(t) && (11 === t.length || 14 === t.length),
                      `invalid field count for transaction type: ${s}`,
                      'data',
                      (0, c.c$)(e)
                    );
                    const a = {
                      type: 3,
                      chainId: R(t[0], 'chainId'),
                      nonce: z(t[1], 'nonce'),
                      maxPriorityFeePerGas: R(t[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: R(t[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: R(t[4], 'gasLimit'),
                      to: F(t[5]),
                      value: R(t[6], 'value'),
                      data: (0, c.c$)(t[7]),
                      accessList: A(t[8], 'accessList'),
                      maxFeePerBlobGas: R(t[9], 'maxFeePerBlobGas'),
                      blobVersionedHashes: t[10],
                    };
                    (i && (a.blobs = i),
                      (0, u.MR)(
                        null != a.to,
                        `invalid address for transaction type: ${s}`,
                        'data',
                        e
                      ),
                      (0, u.MR)(
                        Array.isArray(a.blobVersionedHashes),
                        'invalid blobVersionedHashes: must be an array',
                        'data',
                        e
                      ));
                    for (let n = 0; n < a.blobVersionedHashes.length; n++)
                      (0, u.MR)(
                        (0, c.Lo)(a.blobVersionedHashes[n], 32),
                        `invalid blobVersionedHash at index ${n}: must be length 32`,
                        'data',
                        e
                      );
                    return (11 === t.length || k(a, t.slice(11)), a);
                  })(t)
                );
              case 4:
                return w.from(
                  (function (e) {
                    const t = (0, m.J)((0, c.q5)(e).slice(1));
                    (0, u.MR)(
                      Array.isArray(t) && (10 === t.length || 13 === t.length),
                      'invalid field count for transaction type: 4',
                      'data',
                      (0, c.c$)(e)
                    );
                    const s = {
                      type: 4,
                      chainId: R(t[0], 'chainId'),
                      nonce: z(t[1], 'nonce'),
                      maxPriorityFeePerGas: R(t[2], 'maxPriorityFeePerGas'),
                      maxFeePerGas: R(t[3], 'maxFeePerGas'),
                      gasPrice: null,
                      gasLimit: R(t[4], 'gasLimit'),
                      to: F(t[5]),
                      value: R(t[6], 'value'),
                      data: (0, c.c$)(t[7]),
                      accessList: A(t[8], 'accessList'),
                      authorizationList: I(t[9], 'authorizationList'),
                    };
                    return (10 === t.length || k(s, t.slice(10)), s);
                  })(t)
                );
            }
            (0, u.vA)(
              !1,
              'unsupported transaction type',
              'UNSUPPORTED_OPERATION',
              { operation: 'from' }
            );
          }
          const t = new w();
          return (
            null != e.type && (t.type = e.type),
            null != e.to && (t.to = e.to),
            null != e.nonce && (t.nonce = e.nonce),
            null != e.gasLimit && (t.gasLimit = e.gasLimit),
            null != e.gasPrice && (t.gasPrice = e.gasPrice),
            null != e.maxPriorityFeePerGas &&
              (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas),
            null != e.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
            null != e.maxFeePerBlobGas &&
              (t.maxFeePerBlobGas = e.maxFeePerBlobGas),
            null != e.data && (t.data = e.data),
            null != e.value && (t.value = e.value),
            null != e.chainId && (t.chainId = e.chainId),
            null != e.signature && (t.signature = r.t.from(e.signature)),
            null != e.accessList && (t.accessList = e.accessList),
            null != e.authorizationList &&
              (t.authorizationList = e.authorizationList),
            null != e.blobVersionedHashes &&
              (t.blobVersionedHashes = e.blobVersionedHashes),
            null != e.kzg && (t.kzg = e.kzg),
            null != e.blobs && (t.blobs = e.blobs),
            null != e.hash &&
              ((0, u.MR)(
                t.isSigned(),
                "unsigned transaction cannot define '.hash'",
                'tx',
                e
              ),
              (0, u.MR)(t.hash === e.hash, 'hash mismatch', 'tx', e)),
            null != e.from &&
              ((0, u.MR)(
                t.isSigned(),
                "unsigned transaction cannot define '.from'",
                'tx',
                e
              ),
              (0, u.MR)(
                t.from.toLowerCase() === (e.from || '').toLowerCase(),
                'from mismatch',
                'tx',
                e
              )),
            t
          );
        }
      }
    },
    5303: (e, t, s) => {
      s.d(t, { M: () => r });
      var i = s(4922),
        a = s(6533),
        n = s(8848);
      function r(e) {
        return {
          address: (0, i.b)(e.address),
          nonce: (0, n.Ab)(null != e.nonce ? e.nonce : 0),
          chainId: (0, n.Ab)(null != e.chainId ? e.chainId : 0),
          signature: a.t.from(e.signature),
        };
      }
    },
    7602: (e, t, s) => {
      s.d(t, { $: () => o });
      var i = s(4922),
        a = s(8227),
        n = s(536);
      function r(e, t) {
        return {
          address: (0, i.b)(e),
          storageKeys: t.map(
            (e, t) => (
              (0, n.MR)(
                (0, a.Lo)(e, 32),
                'invalid slot',
                `storageKeys[${t}]`,
                e
              ),
              e.toLowerCase()
            )
          ),
        };
      }
      function o(e) {
        if (Array.isArray(e))
          return e.map((t, s) =>
            Array.isArray(t)
              ? ((0, n.MR)(
                  2 === t.length,
                  'invalid slot set',
                  `value[${s}]`,
                  t
                ),
                r(t[0], t[1]))
              : ((0, n.MR)(
                  null != t && 'object' == typeof t,
                  'invalid address-slot set',
                  'value',
                  e
                ),
                r(t.address, t.storageKeys))
          );
        (0, n.MR)(
          null != e && 'object' == typeof e,
          'invalid access list',
          'value',
          e
        );
        const t = Object.keys(e).map((t) => {
          const s = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return r(t, Object.keys(s).sort());
        });
        return (t.sort((e, t) => e.address.localeCompare(t.address)), t);
      }
    },
  },
]);
