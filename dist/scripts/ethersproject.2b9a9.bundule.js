'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [999],
  {
    7: (r, t, e) => {
      e.d(t, { gH: () => A });
      var n = e(4072),
        o = e.n(n);
      let i = !1,
        s = !1;
      const u = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = u.default,
        h = null;
      const E = (function () {
        try {
          const r = [];
          if (
            (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((t) => {
              try {
                if ('test' !== 'test'.normalize(t))
                  throw new Error('bad normalize');
              } catch (e) {
                r.push(t);
              }
            }),
            r.length)
          )
            throw new Error('missing ' + r.join(', '));
          if (
            String.fromCharCode(233).normalize('NFD') !==
            String.fromCharCode(101, 769)
          )
            throw new Error('broken implementation');
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var l, g;
      (!(function (r) {
        ((r.DEBUG = 'DEBUG'),
          (r.INFO = 'INFO'),
          (r.WARNING = 'WARNING'),
          (r.ERROR = 'ERROR'),
          (r.OFF = 'OFF'));
      })(l || (l = {})),
        (function (r) {
          ((r.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
            (r.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
            (r.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
            (r.NETWORK_ERROR = 'NETWORK_ERROR'),
            (r.SERVER_ERROR = 'SERVER_ERROR'),
            (r.TIMEOUT = 'TIMEOUT'),
            (r.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
            (r.NUMERIC_FAULT = 'NUMERIC_FAULT'),
            (r.MISSING_NEW = 'MISSING_NEW'),
            (r.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
            (r.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
            (r.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
            (r.CALL_EXCEPTION = 'CALL_EXCEPTION'),
            (r.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
            (r.NONCE_EXPIRED = 'NONCE_EXPIRED'),
            (r.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
            (r.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
            (r.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
            (r.ACTION_REJECTED = 'ACTION_REJECTED'));
        })(g || (g = {})));
      const N = '0123456789abcdef';
      class c {
        constructor(r) {
          Object.defineProperty(this, 'version', {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, t) {
          const e = r.toLowerCase();
          null == u[e] &&
            this.throwArgumentError('invalid log level name', 'logLevel', r);
        }
        debug(...r) {
          this._log(c.levels.DEBUG, r);
        }
        info(...r) {
          this._log(c.levels.INFO, r);
        }
        warn(...r) {
          this._log(c.levels.WARNING, r);
        }
        makeError(r, t, e) {
          if (s) return this.makeError('censored error', t, {});
          (t || (t = c.errors.UNKNOWN_ERROR), e || (e = {}));
          const n = [];
          (Object.keys(e).forEach((r) => {
            const t = e[r];
            try {
              if (t instanceof Uint8Array) {
                let e = '';
                for (let r = 0; r < t.length; r++)
                  ((e += N[t[r] >> 4]), (e += N[15 & t[r]]));
                n.push(r + '=Uint8Array(0x' + e + ')');
              } else n.push(r + '=' + JSON.stringify(t));
            } catch (u) {
              n.push(r + '=' + JSON.stringify(e[r].toString()));
            }
          }),
            n.push(`code=${t}`),
            n.push(`version=${this.version}`));
          const o = r;
          let i = '';
          switch (t) {
            case g.NUMERIC_FAULT: {
              i = 'NUMERIC_FAULT';
              const t = r;
              switch (t) {
                case 'overflow':
                case 'underflow':
                case 'division-by-zero':
                  i += '-' + t;
                  break;
                case 'negative-power':
                case 'negative-width':
                  i += '-unsupported';
                  break;
                case 'unbound-bitwise-result':
                  i += '-unbound-result';
              }
              break;
            }
            case g.CALL_EXCEPTION:
            case g.INSUFFICIENT_FUNDS:
            case g.MISSING_NEW:
            case g.NONCE_EXPIRED:
            case g.REPLACEMENT_UNDERPRICED:
            case g.TRANSACTION_REPLACED:
            case g.UNPREDICTABLE_GAS_LIMIT:
              i = t;
          }
          (i && (r += ' [ See: https://links.ethers.org/v5-errors-' + i + ' ]'),
            n.length && (r += ' (' + n.join(', ') + ')'));
          const u = new Error(r);
          return (
            (u.reason = o),
            (u.code = t),
            Object.keys(e).forEach(function (r) {
              u[r] = e[r];
            }),
            u
          );
        }
        throwError(r, t, e) {
          throw this.makeError(r, t, e);
        }
        throwArgumentError(r, t, e) {
          return this.throwError(r, c.errors.INVALID_ARGUMENT, {
            argument: t,
            value: e,
          });
        }
        assert(r, t, e, n) {
          r || this.throwError(t, e, n);
        }
        assertArgument(r, t, e, n) {
          r || this.throwArgumentError(t, e, n);
        }
        checkNormalize(r) {
          (null == r && (r = 'platform missing String.prototype.normalize'),
            E &&
              this.throwError(
                'platform missing String.prototype.normalize',
                c.errors.UNSUPPORTED_OPERATION,
                { operation: 'String.prototype.normalize', form: E }
              ));
        }
        checkSafeUint53(r, t) {
          'number' == typeof r &&
            (null == t && (t = 'value not safe'),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(t, c.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: r,
              }),
            r % 1 &&
              this.throwError(t, c.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: r,
              }));
        }
        checkArgumentCount(r, t, e) {
          ((e = e ? ': ' + e : ''),
            r < t &&
              this.throwError(
                'missing argument' + e,
                c.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: t }
              ),
            r > t &&
              this.throwError(
                'too many arguments' + e,
                c.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: t }
              ));
        }
        checkNew(r, t) {
          (r !== Object && null != r) ||
            this.throwError('missing new', c.errors.MISSING_NEW, {
              name: t.name,
            });
        }
        checkAbstract(r, t) {
          r === t
            ? this.throwError(
                'cannot instantiate abstract class ' +
                  JSON.stringify(t.name) +
                  ' directly; use a sub-class',
                c.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: 'new' }
              )
            : (r !== Object && null != r) ||
              this.throwError('missing new', c.errors.MISSING_NEW, {
                name: t.name,
              });
        }
        static globalLogger() {
          return (h || (h = new c('logger/5.8.0')), h);
        }
        static setCensorship(r, t) {
          if (
            (!r &&
              t &&
              this.globalLogger().throwError(
                'cannot permanently disable censorship',
                c.errors.UNSUPPORTED_OPERATION,
                { operation: 'setCensorship' }
              ),
            i)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              'error censorship permanent',
              c.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' }
            );
          }
          ((s = !!r), (i = !!t));
        }
        static setLogLevel(r) {
          const t = u[r.toLowerCase()];
          null != t
            ? (a = t)
            : c.globalLogger().warn('invalid log level - ' + r);
        }
        static from(r) {
          return new c(r);
        }
      }
      ((c.errors = g), (c.levels = l));
      const f = new c('bytes/5.8.0');
      function m(r) {
        return 'number' == typeof r && r == r && r % 1 == 0;
      }
      function R(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ('string' == typeof r) return !1;
        if (!m(r.length) || r.length < 0) return !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t];
          if (!m(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function I(r, t) {
        return !(
          'string' != typeof r ||
          !r.match(/^0x[0-9A-Fa-f]*$/) ||
          (t && r.length !== 2 + 2 * t)
        );
      }
      const w = '0123456789abcdef';
      var b = o().BN;
      const _ = new c('bignumber/5.8.0'),
        T = {},
        U = 9007199254740991;
      let S = !1;
      class A {
        constructor(r, t) {
          (r !== T &&
            _.throwError(
              'cannot call constructor directly; use BigNumber.from',
              c.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' }
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(r) {
          return p(d(this).fromTwos(r));
        }
        toTwos(r) {
          return p(d(this).toTwos(r));
        }
        abs() {
          return '-' === this._hex[0] ? A.from(this._hex.substring(1)) : this;
        }
        add(r) {
          return p(d(this).add(d(r)));
        }
        sub(r) {
          return p(d(this).sub(d(r)));
        }
        div(r) {
          return (
            A.from(r).isZero() && C('division-by-zero', 'div'),
            p(d(this).div(d(r)))
          );
        }
        mul(r) {
          return p(d(this).mul(d(r)));
        }
        mod(r) {
          const t = d(r);
          return (
            t.isNeg() && C('division-by-zero', 'mod'),
            p(d(this).umod(t))
          );
        }
        pow(r) {
          const t = d(r);
          return (t.isNeg() && C('negative-power', 'pow'), p(d(this).pow(t)));
        }
        and(r) {
          const t = d(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              C('unbound-bitwise-result', 'and'),
            p(d(this).and(t))
          );
        }
        or(r) {
          const t = d(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              C('unbound-bitwise-result', 'or'),
            p(d(this).or(t))
          );
        }
        xor(r) {
          const t = d(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              C('unbound-bitwise-result', 'xor'),
            p(d(this).xor(t))
          );
        }
        mask(r) {
          return (
            (this.isNegative() || r < 0) && C('negative-width', 'mask'),
            p(d(this).maskn(r))
          );
        }
        shl(r) {
          return (
            (this.isNegative() || r < 0) && C('negative-width', 'shl'),
            p(d(this).shln(r))
          );
        }
        shr(r) {
          return (
            (this.isNegative() || r < 0) && C('negative-width', 'shr'),
            p(d(this).shrn(r))
          );
        }
        eq(r) {
          return d(this).eq(d(r));
        }
        lt(r) {
          return d(this).lt(d(r));
        }
        lte(r) {
          return d(this).lte(d(r));
        }
        gt(r) {
          return d(this).gt(d(r));
        }
        gte(r) {
          return d(this).gte(d(r));
        }
        isNegative() {
          return '-' === this._hex[0];
        }
        isZero() {
          return d(this).isZero();
        }
        toNumber() {
          try {
            return d(this).toNumber();
          } catch (r) {
            C('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (r) {}
          return _.throwError(
            'this platform does not support BigInt',
            c.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? S ||
                  ((S = !0),
                  _.warn(
                    'BigNumber.toString does not accept any parameters; base-10 is assumed'
                  ))
                : 16 === arguments[0]
                  ? _.throwError(
                      'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                      c.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : _.throwError(
                      'BigNumber.toString does not accept parameters',
                      c.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
            d(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(r) {
          return { type: 'BigNumber', hex: this.toHexString() };
        }
        static from(r) {
          if (r instanceof A) return r;
          if ('string' == typeof r)
            return r.match(/^-?0x[0-9a-f]+$/i)
              ? new A(T, O(r))
              : r.match(/^-?[0-9]+$/)
                ? new A(T, O(new b(r)))
                : _.throwArgumentError('invalid BigNumber string', 'value', r);
          if ('number' == typeof r)
            return (
              r % 1 && C('underflow', 'BigNumber.from', r),
              (r >= U || r <= -U) && C('overflow', 'BigNumber.from', r),
              A.from(String(r))
            );
          const t = r;
          if ('bigint' == typeof t) return A.from(t.toString());
          if (R(t))
            return A.from(
              (function (r, t) {
                if ((t || (t = {}), 'number' == typeof r)) {
                  f.checkSafeUint53(r, 'invalid hexlify value');
                  let t = '';
                  for (; r; ) ((t = w[15 & r] + t), (r = Math.floor(r / 16)));
                  return t.length
                    ? (t.length % 2 && (t = '0' + t), '0x' + t)
                    : '0x00';
                }
                if ('bigint' == typeof r)
                  return (r = r.toString(16)).length % 2 ? '0x0' + r : '0x' + r;
                if (
                  (t.allowMissingPrefix &&
                    'string' == typeof r &&
                    '0x' !== r.substring(0, 2) &&
                    (r = '0x' + r),
                  (function (r) {
                    return !!r.toHexString;
                  })(r))
                )
                  return r.toHexString();
                if (I(r))
                  return (
                    r.length % 2 &&
                      ('left' === t.hexPad
                        ? (r = '0x0' + r.substring(2))
                        : 'right' === t.hexPad
                          ? (r += '0')
                          : f.throwArgumentError(
                              'hex data is odd-length',
                              'value',
                              r
                            )),
                    r.toLowerCase()
                  );
                if (R(r)) {
                  let t = '0x';
                  for (let e = 0; e < r.length; e++) {
                    let n = r[e];
                    t += w[(240 & n) >> 4] + w[15 & n];
                  }
                  return t;
                }
                return f.throwArgumentError(
                  'invalid hexlify value',
                  'value',
                  r
                );
              })(t)
            );
          if (t)
            if (t.toHexString) {
              const r = t.toHexString();
              if ('string' == typeof r) return A.from(r);
            } else {
              let r = t._hex;
              if (
                (null == r && 'BigNumber' === t.type && (r = t.hex),
                'string' == typeof r &&
                  (I(r) || ('-' === r[0] && I(r.substring(1)))))
              )
                return A.from(r);
            }
          return _.throwArgumentError('invalid BigNumber value', 'value', r);
        }
        static isBigNumber(r) {
          return !(!r || !r._isBigNumber);
        }
      }
      function O(r) {
        if ('string' != typeof r) return O(r.toString(16));
        if ('-' === r[0])
          return (
            '-' === (r = r.substring(1))[0] &&
              _.throwArgumentError('invalid hex', 'value', r),
            '0x00' === (r = O(r)) ? r : '-' + r
          );
        if (('0x' !== r.substring(0, 2) && (r = '0x' + r), '0x' === r))
          return '0x00';
        for (
          r.length % 2 && (r = '0x0' + r.substring(2));
          r.length > 4 && '0x00' === r.substring(0, 4);

        )
          r = '0x' + r.substring(4);
        return r;
      }
      function p(r) {
        return A.from(O(r));
      }
      function d(r) {
        const t = A.from(r).toHexString();
        return '-' === t[0]
          ? new b('-' + t.substring(3), 16)
          : new b(t.substring(2), 16);
      }
      function C(r, t, e) {
        const n = { fault: r, operation: t };
        return (
          null != e && (n.value = e),
          _.throwError(r, c.errors.NUMERIC_FAULT, n)
        );
      }
    },
  },
]);
