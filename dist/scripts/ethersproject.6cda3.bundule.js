'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [999],
  {
    7(t, e, r) {
      r.d(e, { gH: () => S });
      var n = r(4072),
        i = r.n(n);
      let s = !1,
        o = !1;
      const u = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = u.default,
        c = null;
      const l = (() => {
        try {
          const t = [];
          if (
            (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((e) => {
              try {
                if ('test' !== 'test'.normalize(e))
                  throw new Error('bad normalize');
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error('missing ' + t.join(', '));
          if (
            String.fromCharCode(233).normalize('NFD') !==
            String.fromCharCode(101, 769)
          )
            throw new Error('broken implementation');
        } catch (t) {
          return t.message;
        }
        return null;
      })();
      var h, f;
      (((t) => {
        ((t.DEBUG = 'DEBUG'),
          (t.INFO = 'INFO'),
          (t.WARNING = 'WARNING'),
          (t.ERROR = 'ERROR'),
          (t.OFF = 'OFF'));
      })(h || (h = {})),
        ((t) => {
          ((t.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
            (t.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
            (t.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
            (t.NETWORK_ERROR = 'NETWORK_ERROR'),
            (t.SERVER_ERROR = 'SERVER_ERROR'),
            (t.TIMEOUT = 'TIMEOUT'),
            (t.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
            (t.NUMERIC_FAULT = 'NUMERIC_FAULT'),
            (t.MISSING_NEW = 'MISSING_NEW'),
            (t.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
            (t.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
            (t.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
            (t.CALL_EXCEPTION = 'CALL_EXCEPTION'),
            (t.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
            (t.NONCE_EXPIRED = 'NONCE_EXPIRED'),
            (t.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
            (t.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
            (t.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
            (t.ACTION_REJECTED = 'ACTION_REJECTED'));
        })(f || (f = {})));
      const g = '0123456789abcdef';
      class m {
        constructor(t) {
          Object.defineProperty(this, 'version', {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        t(t, e) {
          const r = t.toLowerCase();
          null == u[r] &&
            this.throwArgumentError('invalid log level name', 'logLevel', t);
        }
        debug(...t) {
          this.t(m.levels.DEBUG, t);
        }
        info(...t) {
          this.t(m.levels.INFO, t);
        }
        warn(...t) {
          this.t(m.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (o) return this.makeError('censored error', e, {});
          (e || (e = m.errors.UNKNOWN_ERROR), r || (r = {}));
          const n = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = '';
                for (let t = 0; t < e.length; t++)
                  ((r += g[e[t] >> 4]), (r += g[15 & e[t]]));
                n.push(t + '=Uint8Array(0x' + r + ')');
              } else n.push(t + '=' + JSON.stringify(e));
            } catch (u) {
              n.push(t + '=' + JSON.stringify(r[t].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`));
          const i = t;
          let s = '';
          switch (e) {
            case f.NUMERIC_FAULT: {
              s = 'NUMERIC_FAULT';
              const e = t;
              switch (e) {
                case 'overflow':
                case 'underflow':
                case 'division-by-zero':
                  s += '-' + e;
                  break;
                case 'negative-power':
                case 'negative-width':
                  s += '-unsupported';
                  break;
                case 'unbound-bitwise-result':
                  s += '-unbound-result';
              }
              break;
            }
            case f.CALL_EXCEPTION:
            case f.INSUFFICIENT_FUNDS:
            case f.MISSING_NEW:
            case f.NONCE_EXPIRED:
            case f.REPLACEMENT_UNDERPRICED:
            case f.TRANSACTION_REPLACED:
            case f.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          (s && (t += ' [ See: https://links.ethers.org/v5-errors-' + s + ' ]'),
            n.length && (t += ' (' + n.join(', ') + ')'));
          const u = new Error(t);
          return (
            (u.reason = i),
            (u.code = e),
            Object.keys(r).forEach((t) => {
              u[t] = r[t];
            }),
            u
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, m.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          (null == t && (t = 'platform missing String.prototype.normalize'),
            l &&
              this.throwError(
                'platform missing String.prototype.normalize',
                m.errors.UNSUPPORTED_OPERATION,
                { operation: 'String.prototype.normalize', form: l }
              ));
        }
        checkSafeUint53(t, e) {
          'number' == typeof t &&
            (null == e && (e = 'value not safe'),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, m.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: t,
              }),
            t % 1 &&
              this.throwError(e, m.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ': ' + r : ''),
            t < e &&
              this.throwError(
                'missing argument' + r,
                m.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e }
              ),
            t > e &&
              this.throwError(
                'too many arguments' + r,
                m.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e }
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError('missing new', m.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                'cannot instantiate abstract class ' +
                  JSON.stringify(e.name) +
                  ' directly; use a sub-class',
                m.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: 'new' }
              )
            : (t !== Object && null != t) ||
              this.throwError('missing new', m.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (c || (c = new m('logger/5.8.0')), c);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                'cannot permanently disable censorship',
                m.errors.UNSUPPORTED_OPERATION,
                { operation: 'setCensorship' }
              ),
            s)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              'error censorship permanent',
              m.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' }
            );
          }
          ((o = !!t), (s = !!e));
        }
        static setLogLevel(t) {
          const e = u[t.toLowerCase()];
          null != e
            ? (a = e)
            : m.globalLogger().warn('invalid log level - ' + t);
        }
        static from(t) {
          return new m(t);
        }
      }
      ((m.errors = f), (m.levels = h));
      const b = new m('bytes/5.8.0');
      function N(t) {
        return 'number' == typeof t && t == t && t % 1 == 0;
      }
      function p(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ('string' == typeof t) return !1;
        if (!N(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!N(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function d(t, e) {
        return !(
          'string' != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          (e && t.length !== 2 + 2 * e)
        );
      }
      const E = '0123456789abcdef';
      var w = i().BN;
      const v = new m('bignumber/5.8.0'),
        y = {},
        R = 9007199254740991;
      let x = !1;
      class S {
        constructor(t, e) {
          (t !== y &&
            v.throwError(
              'cannot call constructor directly; use BigNumber.from',
              m.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' }
            ),
            (this.i = e),
            (this.o = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return O(A(this).fromTwos(t));
        }
        toTwos(t) {
          return O(A(this).toTwos(t));
        }
        abs() {
          return '-' === this.i[0] ? S.from(this.i.substring(1)) : this;
        }
        add(t) {
          return O(A(this).add(A(t)));
        }
        sub(t) {
          return O(A(this).sub(A(t)));
        }
        div(t) {
          return (
            S.from(t).isZero() && T('division-by-zero', 'div'),
            O(A(this).div(A(t)))
          );
        }
        mul(t) {
          return O(A(this).mul(A(t)));
        }
        mod(t) {
          const e = A(t);
          return (
            e.isNeg() && T('division-by-zero', 'mod'),
            O(A(this).umod(e))
          );
        }
        pow(t) {
          const e = A(t);
          return (e.isNeg() && T('negative-power', 'pow'), O(A(this).pow(e)));
        }
        and(t) {
          const e = A(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              T('unbound-bitwise-result', 'and'),
            O(A(this).and(e))
          );
        }
        or(t) {
          const e = A(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              T('unbound-bitwise-result', 'or'),
            O(A(this).or(e))
          );
        }
        xor(t) {
          const e = A(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              T('unbound-bitwise-result', 'xor'),
            O(A(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && T('negative-width', 'mask'),
            O(A(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && T('negative-width', 'shl'),
            O(A(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && T('negative-width', 'shr'),
            O(A(this).shrn(t))
          );
        }
        eq(t) {
          return A(this).eq(A(t));
        }
        lt(t) {
          return A(this).lt(A(t));
        }
        lte(t) {
          return A(this).lte(A(t));
        }
        gt(t) {
          return A(this).gt(A(t));
        }
        gte(t) {
          return A(this).gte(A(t));
        }
        isNegative() {
          return '-' === this.i[0];
        }
        isZero() {
          return A(this).isZero();
        }
        toNumber() {
          try {
            return A(this).toNumber();
          } catch (t) {
            T('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return v.throwError(
            'this platform does not support BigInt',
            m.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? x ||
                  ((x = !0),
                  v.warn(
                    'BigNumber.toString does not accept any parameters; base-10 is assumed'
                  ))
                : 16 === arguments[0]
                  ? v.throwError(
                      'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                      m.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : v.throwError(
                      'BigNumber.toString does not accept parameters',
                      m.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
            A(this).toString(10)
          );
        }
        toHexString() {
          return this.i;
        }
        toJSON(t) {
          return { type: 'BigNumber', hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof S) return t;
          if ('string' == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new S(y, I(t))
              : t.match(/^-?[0-9]+$/)
                ? new S(y, I(new w(t)))
                : v.throwArgumentError('invalid BigNumber string', 'value', t);
          if ('number' == typeof t)
            return (
              t % 1 && T('underflow', 'BigNumber.from', t),
              (t >= R || t <= -R) && T('overflow', 'BigNumber.from', t),
              S.from(String(t))
            );
          const e = t;
          if ('bigint' == typeof e) return S.from(e.toString());
          if (p(e))
            return S.from(
              (function (t, e) {
                if ((e || (e = {}), 'number' == typeof t)) {
                  b.checkSafeUint53(t, 'invalid hexlify value');
                  let e = '';
                  for (; t; ) ((e = E[15 & t] + e), (t = Math.floor(t / 16)));
                  return e.length
                    ? (e.length % 2 && (e = '0' + e), '0x' + e)
                    : '0x00';
                }
                if ('bigint' == typeof t)
                  return (t = t.toString(16)).length % 2 ? '0x0' + t : '0x' + t;
                if (
                  (e.allowMissingPrefix &&
                    'string' == typeof t &&
                    '0x' !== t.substring(0, 2) &&
                    (t = '0x' + t),
                  ((t) => !!t.toHexString)(t))
                )
                  return t.toHexString();
                if (d(t))
                  return (
                    t.length % 2 &&
                      ('left' === e.hexPad
                        ? (t = '0x0' + t.substring(2))
                        : 'right' === e.hexPad
                          ? (t += '0')
                          : b.throwArgumentError(
                              'hex data is odd-length',
                              'value',
                              t
                            )),
                    t.toLowerCase()
                  );
                if (p(t)) {
                  let e = '0x';
                  for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    e += E[(240 & n) >> 4] + E[15 & n];
                  }
                  return e;
                }
                return b.throwArgumentError(
                  'invalid hexlify value',
                  'value',
                  t
                );
              })(e)
            );
          if (e)
            if (e.toHexString) {
              const t = e.toHexString();
              if ('string' == typeof t) return S.from(t);
            } else {
              let t = e.i;
              if (
                (null == t && 'BigNumber' === e.type && (t = e.hex),
                'string' == typeof t &&
                  (d(t) || ('-' === t[0] && d(t.substring(1)))))
              )
                return S.from(t);
            }
          return v.throwArgumentError('invalid BigNumber value', 'value', t);
        }
        static isBigNumber(t) {
          return !(!t || !t.o);
        }
      }
      function I(t) {
        if ('string' != typeof t) return I(t.toString(16));
        if ('-' === t[0])
          return (
            '-' === (t = t.substring(1))[0] &&
              v.throwArgumentError('invalid hex', 'value', t),
            '0x00' === (t = I(t)) ? t : '-' + t
          );
        if (('0x' !== t.substring(0, 2) && (t = '0x' + t), '0x' === t))
          return '0x00';
        for (
          t.length % 2 && (t = '0x0' + t.substring(2));
          t.length > 4 && '0x00' === t.substring(0, 4);

        )
          t = '0x' + t.substring(4);
        return t;
      }
      function O(t) {
        return S.from(I(t));
      }
      function A(t) {
        const e = S.from(t).toHexString();
        return '-' === e[0]
          ? new w('-' + e.substring(3), 16)
          : new w(e.substring(2), 16);
      }
      function T(t, e, r) {
        const n = { fault: t, operation: e };
        return (
          null != r && (n.value = r),
          v.throwError(t, m.errors.NUMERIC_FAULT, n)
        );
      }
    },
  },
]);
