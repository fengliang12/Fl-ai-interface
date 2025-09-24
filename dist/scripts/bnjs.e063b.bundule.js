(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [762],
  {
    4072(t, h, i) {
      !(function (t, h) {
        'use strict';
        function r(t, h) {
          if (!t) throw new Error(h || 'Assertion failed');
        }
        function s(t, h) {
          t.super_ = h;
          var i = () => {};
          ((i.prototype = h.prototype),
            (t.prototype = new i()),
            (t.prototype.constructor = t));
        }
        function n(t, h, i) {
          if (n.isBN(t)) return t;
          ((this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' !== h && 'be' !== h) || ((i = h), (h = 10)),
              this.t(t || 0, h || 10, i || 'be')));
        }
        var a;
        ('object' == typeof t ? (t.exports = n) : (h.BN = n),
          (n.BN = n),
          (n.wordSize = 26));
        try {
          a =
            'undefined' != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : i(3514).Buffer;
        } catch (j) {}
        function f(t, h) {
          var i = t.charCodeAt(h);
          return i >= 48 && i <= 57
            ? i - 48
            : i >= 65 && i <= 70
              ? i - 55
              : i >= 97 && i <= 102
                ? i - 87
                : void r(!1, 'Invalid character in ' + t);
        }
        function u(t, h, i) {
          var r = f(t, i);
          return (i - 1 >= h && (r |= f(t, i - 1) << 4), r);
        }
        function e(t, h, i, s) {
          for (var n = 0, a = 0, f = Math.min(t.length, i), u = h; u < f; u++) {
            var e = t.charCodeAt(u) - 48;
            ((n *= s),
              (a = e >= 49 ? e - 49 + 10 : e >= 17 ? e - 17 + 10 : e),
              r(e >= 0 && a < s, 'Invalid character'),
              (n += a));
          }
          return n;
        }
        function M(t, h) {
          ((t.words = h.words),
            (t.length = h.length),
            (t.negative = h.negative),
            (t.red = h.red));
        }
        if (
          ((n.isBN = (t) =>
            t instanceof n ||
            (null !== t &&
              'object' == typeof t &&
              t.constructor.wordSize === n.wordSize &&
              Array.isArray(t.words))),
          (n.max = (t, h) => (t.cmp(h) > 0 ? t : h)),
          (n.min = (t, h) => (t.cmp(h) < 0 ? t : h)),
          (n.prototype.t = function (t, h, i) {
            if ('number' == typeof t) return this.h(t, h, i);
            if ('object' == typeof t) return this.i(t, h, i);
            ('hex' === h && (h = 16), r(h === (0 | h) && h >= 2 && h <= 36));
            var s = 0;
            ('-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (s++, (this.negative = 1)),
              s < t.length &&
                (16 === h
                  ? this.u(t, s, i)
                  : (this.M(t, h, s),
                    'le' === i && this.i(this.toArray(), h, i))));
          }),
          (n.prototype.h = function (t, h, i) {
            (t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
              'le' === i && this.i(this.toArray(), h, i));
          }),
          (n.prototype.i = function (t, h, i) {
            if ((r('number' == typeof t.length), t.length <= 0))
              return ((this.words = [0]), (this.length = 1), this);
            ((this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length)));
            for (var s = 0; s < this.length; s++) this.words[s] = 0;
            var n,
              a,
              f = 0;
            if ('be' === i)
              for (s = t.length - 1, n = 0; s >= 0; s -= 3)
                ((a = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[n] |= (a << f) & 67108863),
                  (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                  (f += 24) >= 26 && ((f -= 26), n++));
            else if ('le' === i)
              for (s = 0, n = 0; s < t.length; s += 3)
                ((a = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[n] |= (a << f) & 67108863),
                  (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                  (f += 24) >= 26 && ((f -= 26), n++));
            return this.o();
          }),
          (n.prototype.u = function (t, h, i) {
            ((this.length = Math.ceil((t.length - h) / 6)),
              (this.words = new Array(this.length)));
            for (var r = 0; r < this.length; r++) this.words[r] = 0;
            var s,
              n = 0,
              a = 0;
            if ('be' === i)
              for (r = t.length - 1; r >= h; r -= 2)
                ((s = u(t, h, r) << n),
                  (this.words[a] |= 67108863 & s),
                  n >= 18
                    ? ((n -= 18), (a += 1), (this.words[a] |= s >>> 26))
                    : (n += 8));
            else
              for (
                r = (t.length - h) % 2 == 0 ? h + 1 : h;
                r < t.length;
                r += 2
              )
                ((s = u(t, h, r) << n),
                  (this.words[a] |= 67108863 & s),
                  n >= 18
                    ? ((n -= 18), (a += 1), (this.words[a] |= s >>> 26))
                    : (n += 8));
            this.o();
          }),
          (n.prototype.M = function (t, h, i) {
            ((this.words = [0]), (this.length = 1));
            for (var r = 0, s = 1; s <= 67108863; s *= h) r++;
            (r--, (s = (s / h) | 0));
            for (
              var n = t.length - i,
                a = n % r,
                f = Math.min(n, n - a) + i,
                u = 0,
                M = i;
              M < f;
              M += r
            )
              ((u = e(t, M, M + r, h)),
                this.imuln(s),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this.v(u));
            if (0 !== a) {
              var o = 1;
              for (u = e(t, M, t.length, h), M = 0; M < a; M++) o *= h;
              (this.imuln(o),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this.v(u));
            }
            this.o();
          }),
          (n.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var h = 0; h < this.length; h++) t.words[h] = this.words[h];
            ((t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red));
          }),
          (n.prototype.l = function (t) {
            M(t, this);
          }),
          (n.prototype.clone = function () {
            var t = new n(null);
            return (this.copy(t), t);
          }),
          (n.prototype.A = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (n.prototype.o = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this.S();
          }),
          (n.prototype.S = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
        )
          try {
            n.prototype[Symbol.for('nodejs.util.inspect.custom')] = o;
          } catch (j) {
            n.prototype.inspect = o;
          }
        else n.prototype.inspect = o;
        function o() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        }
        var v = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000',
          ],
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          w = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(t, h, i) {
          i.negative = h.negative ^ t.negative;
          var r = (t.length + h.length) | 0;
          ((i.length = r), (r = (r - 1) | 0));
          var s = 0 | t.words[0],
            n = 0 | h.words[0],
            a = s * n,
            f = 67108863 & a,
            u = (a / 67108864) | 0;
          i.words[0] = f;
          for (var e = 1; e < r; e++) {
            for (
              var M = u >>> 26,
                o = 67108863 & u,
                v = Math.min(e, h.length - 1),
                c = Math.max(0, e - t.length + 1);
              c <= v;
              c++
            ) {
              var w = (e - c) | 0;
              ((M +=
                ((a = (s = 0 | t.words[w]) * (n = 0 | h.words[c]) + o) /
                  67108864) |
                0),
                (o = 67108863 & a));
            }
            ((i.words[e] = 0 | o), (u = 0 | M));
          }
          return (0 !== u ? (i.words[e] = 0 | u) : i.length--, i.o());
        }
        ((n.prototype.toString = function (t, h) {
          var i;
          if (((h = 0 | h || 1), 16 === (t = t || 10) || 'hex' === t)) {
            i = '';
            for (var s = 0, n = 0, a = 0; a < this.length; a++) {
              var f = this.words[a],
                u = (16777215 & ((f << s) | n)).toString(16);
              ((n = (f >>> (24 - s)) & 16777215),
                (s += 2) >= 26 && ((s -= 26), a--),
                (i =
                  0 !== n || a !== this.length - 1
                    ? v[6 - u.length] + u + i
                    : u + i));
            }
            for (0 !== n && (i = n.toString(16) + i); i.length % h !== 0; )
              i = '0' + i;
            return (0 !== this.negative && (i = '-' + i), i);
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var e = c[t],
              M = w[t];
            i = '';
            var o = this.clone();
            for (o.negative = 0; !o.isZero(); ) {
              var l = o.modrn(M).toString(t);
              i = (o = o.idivn(M)).isZero() ? l + i : v[e - l.length] + l + i;
            }
            for (this.isZero() && (i = '0' + i); i.length % h !== 0; )
              i = '0' + i;
            return (0 !== this.negative && (i = '-' + i), i);
          }
          r(!1, 'Base should be between 2 and 36');
        }),
          (n.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            );
          }),
          (n.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (n.prototype.toBuffer = function (t, h) {
              return this.toArrayLike(a, t, h);
            }),
          (n.prototype.toArray = function (t, h) {
            return this.toArrayLike(Array, t, h);
          }),
          (n.prototype.toArrayLike = function (t, h, i) {
            this.o();
            var s = this.byteLength(),
              n = i || Math.max(1, s);
            (r(s <= n, 'byte array longer than desired length'),
              r(n > 0, 'Requested array length <= 0'));
            var a = ((t, h) => (t.allocUnsafe ? t.allocUnsafe(h) : new t(h)))(
              t,
              n
            );
            return (this['_toArrayLike' + ('le' === h ? 'LE' : 'BE')](a, s), a);
          }),
          (n.prototype.I = function (t, h) {
            for (var i = 0, r = 0, s = 0, n = 0; s < this.length; s++) {
              var a = (this.words[s] << n) | r;
              ((t[i++] = 255 & a),
                i < t.length && (t[i++] = (a >> 8) & 255),
                i < t.length && (t[i++] = (a >> 16) & 255),
                6 === n
                  ? (i < t.length && (t[i++] = (a >> 24) & 255),
                    (r = 0),
                    (n = 0))
                  : ((r = a >>> 24), (n += 2)));
            }
            if (i < t.length) for (t[i++] = r; i < t.length; ) t[i++] = 0;
          }),
          (n.prototype.N = function (t, h) {
            for (
              var i = t.length - 1, r = 0, s = 0, n = 0;
              s < this.length;
              s++
            ) {
              var a = (this.words[s] << n) | r;
              ((t[i--] = 255 & a),
                i >= 0 && (t[i--] = (a >> 8) & 255),
                i >= 0 && (t[i--] = (a >> 16) & 255),
                6 === n
                  ? (i >= 0 && (t[i--] = (a >> 24) & 255), (r = 0), (n = 0))
                  : ((r = a >>> 24), (n += 2)));
            }
            if (i >= 0) for (t[i--] = r; i >= 0; ) t[i--] = 0;
          }),
          Math.clz32
            ? (n.prototype.j = (t) => 32 - Math.clz32(t))
            : (n.prototype.j = (t) => {
                var h = t,
                  i = 0;
                return (
                  h >= 4096 && ((i += 13), (h >>>= 13)),
                  h >= 64 && ((i += 7), (h >>>= 7)),
                  h >= 8 && ((i += 4), (h >>>= 4)),
                  h >= 2 && ((i += 2), (h >>>= 2)),
                  i + h
                );
              }),
          (n.prototype.q = (t) => {
            if (0 === t) return 26;
            var h = t,
              i = 0;
            return (
              8191 & h || ((i += 13), (h >>>= 13)),
              127 & h || ((i += 7), (h >>>= 7)),
              15 & h || ((i += 4), (h >>>= 4)),
              3 & h || ((i += 2), (h >>>= 2)),
              1 & h || i++,
              i
            );
          }),
          (n.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              h = this.j(t);
            return 26 * (this.length - 1) + h;
          }),
          (n.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, h = 0; h < this.length; h++) {
              var i = this.q(this.words[h]);
              if (((t += i), 26 !== i)) break;
            }
            return t;
          }),
          (n.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (n.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (n.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (n.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (n.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (n.prototype.ineg = function () {
            return (this.isZero() || (this.negative ^= 1), this);
          }),
          (n.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var h = 0; h < t.length; h++)
              this.words[h] = this.words[h] | t.words[h];
            return this.o();
          }),
          (n.prototype.ior = function (t) {
            return (r(0 === (this.negative | t.negative)), this.iuor(t));
          }),
          (n.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (n.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (n.prototype.iuand = function (t) {
            var h;
            h = this.length > t.length ? t : this;
            for (var i = 0; i < h.length; i++)
              this.words[i] = this.words[i] & t.words[i];
            return ((this.length = h.length), this.o());
          }),
          (n.prototype.iand = function (t) {
            return (r(0 === (this.negative | t.negative)), this.iuand(t));
          }),
          (n.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (n.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (n.prototype.iuxor = function (t) {
            var h, i;
            this.length > t.length
              ? ((h = this), (i = t))
              : ((h = t), (i = this));
            for (var r = 0; r < i.length; r++)
              this.words[r] = h.words[r] ^ i.words[r];
            if (this !== h)
              for (; r < h.length; r++) this.words[r] = h.words[r];
            return ((this.length = h.length), this.o());
          }),
          (n.prototype.ixor = function (t) {
            return (r(0 === (this.negative | t.negative)), this.iuxor(t));
          }),
          (n.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (n.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (n.prototype.inotn = function (t) {
            r('number' == typeof t && t >= 0);
            var h = 0 | Math.ceil(t / 26),
              i = t % 26;
            (this.A(h), i > 0 && h--);
            for (var s = 0; s < h; s++)
              this.words[s] = 67108863 & ~this.words[s];
            return (
              i > 0 &&
                (this.words[s] = ~this.words[s] & (67108863 >> (26 - i))),
              this.o()
            );
          }),
          (n.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (n.prototype.setn = function (t, h) {
            r('number' == typeof t && t >= 0);
            var i = (t / 26) | 0,
              s = t % 26;
            return (
              this.A(i + 1),
              (this.words[i] = h
                ? this.words[i] | (1 << s)
                : this.words[i] & ~(1 << s)),
              this.o()
            );
          }),
          (n.prototype.iadd = function (t) {
            var h, i, r;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (h = this.isub(t)),
                (this.negative ^= 1),
                this.S()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (h = this.isub(t)),
                (t.negative = 1),
                h.S()
              );
            this.length > t.length
              ? ((i = this), (r = t))
              : ((i = t), (r = this));
            for (var s = 0, n = 0; n < r.length; n++)
              ((h = (0 | i.words[n]) + (0 | r.words[n]) + s),
                (this.words[n] = 67108863 & h),
                (s = h >>> 26));
            for (; 0 !== s && n < i.length; n++)
              ((h = (0 | i.words[n]) + s),
                (this.words[n] = 67108863 & h),
                (s = h >>> 26));
            if (((this.length = i.length), 0 !== s))
              ((this.words[this.length] = s), this.length++);
            else if (i !== this)
              for (; n < i.length; n++) this.words[n] = i.words[n];
            return this;
          }),
          (n.prototype.add = function (t) {
            var h;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (h = this.sub(t)), (t.negative ^= 1), h)
              : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (h = t.sub(this)),
                  (this.negative = 1),
                  h)
                : this.length > t.length
                  ? this.clone().iadd(t)
                  : t.clone().iadd(this);
          }),
          (n.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var h = this.iadd(t);
              return ((t.negative = 1), h.S());
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this.S()
              );
            var i,
              r,
              s = this.cmp(t);
            if (0 === s)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            s > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
            for (var n = 0, a = 0; a < r.length; a++)
              ((n = (h = (0 | i.words[a]) - (0 | r.words[a]) + n) >> 26),
                (this.words[a] = 67108863 & h));
            for (; 0 !== n && a < i.length; a++)
              ((n = (h = (0 | i.words[a]) + n) >> 26),
                (this.words[a] = 67108863 & h));
            if (0 === n && a < i.length && i !== this)
              for (; a < i.length; a++) this.words[a] = i.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              i !== this && (this.negative = 1),
              this.o()
            );
          }),
          (n.prototype.sub = function (t) {
            return this.clone().isub(t);
          }));
        var d = (t, h, i) => {
          var r,
            s,
            n,
            a = t.words,
            f = h.words,
            u = i.words,
            e = 0,
            M = 0 | a[0],
            o = 8191 & M,
            v = M >>> 13,
            c = 0 | a[1],
            w = 8191 & c,
            l = c >>> 13,
            d = 0 | a[2],
            y = 8191 & d,
            m = d >>> 13,
            b = 0 | a[3],
            p = 8191 & b,
            k = b >>> 13,
            A = 0 | a[4],
            g = 8191 & A,
            S = A >>> 13,
            I = 0 | a[5],
            N = 8191 & I,
            x = I >>> 13,
            j = 0 | a[6],
            q = 8191 & j,
            B = j >>> 13,
            E = 0 | a[7],
            R = 8191 & E,
            L = E >>> 13,
            P = 0 | a[8],
            U = 8191 & P,
            _ = P >>> 13,
            z = 0 | a[9],
            C = 8191 & z,
            D = z >>> 13,
            F = 0 | f[0],
            G = 8191 & F,
            H = F >>> 13,
            J = 0 | f[1],
            K = 8191 & J,
            O = J >>> 13,
            Q = 0 | f[2],
            T = 8191 & Q,
            V = Q >>> 13,
            W = 0 | f[3],
            X = 8191 & W,
            Y = W >>> 13,
            Z = 0 | f[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            ht = 0 | f[5],
            it = 8191 & ht,
            rt = ht >>> 13,
            st = 0 | f[6],
            nt = 8191 & st,
            at = st >>> 13,
            ft = 0 | f[7],
            ut = 8191 & ft,
            et = ft >>> 13,
            Mt = 0 | f[8],
            ot = 8191 & Mt,
            vt = Mt >>> 13,
            ct = 0 | f[9],
            wt = 8191 & ct,
            lt = ct >>> 13;
          ((i.negative = t.negative ^ h.negative), (i.length = 19));
          var dt =
            (((e + (r = Math.imul(o, G))) | 0) +
              ((8191 & (s = ((s = Math.imul(o, H)) + Math.imul(v, G)) | 0)) <<
                13)) |
            0;
          ((e = ((((n = Math.imul(v, H)) + (s >>> 13)) | 0) + (dt >>> 26)) | 0),
            (dt &= 67108863),
            (r = Math.imul(w, G)),
            (s = ((s = Math.imul(w, H)) + Math.imul(l, G)) | 0),
            (n = Math.imul(l, H)));
          var yt =
            (((e + (r = (r + Math.imul(o, K)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, O)) | 0) + Math.imul(v, K)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, O)) | 0) + (s >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (r = Math.imul(y, G)),
            (s = ((s = Math.imul(y, H)) + Math.imul(m, G)) | 0),
            (n = Math.imul(m, H)),
            (r = (r + Math.imul(w, K)) | 0),
            (s = ((s = (s + Math.imul(w, O)) | 0) + Math.imul(l, K)) | 0),
            (n = (n + Math.imul(l, O)) | 0));
          var mt =
            (((e + (r = (r + Math.imul(o, T)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, V)) | 0) + Math.imul(v, T)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, V)) | 0) + (s >>> 13)) | 0) +
              (mt >>> 26)) |
            0),
            (mt &= 67108863),
            (r = Math.imul(p, G)),
            (s = ((s = Math.imul(p, H)) + Math.imul(k, G)) | 0),
            (n = Math.imul(k, H)),
            (r = (r + Math.imul(y, K)) | 0),
            (s = ((s = (s + Math.imul(y, O)) | 0) + Math.imul(m, K)) | 0),
            (n = (n + Math.imul(m, O)) | 0),
            (r = (r + Math.imul(w, T)) | 0),
            (s = ((s = (s + Math.imul(w, V)) | 0) + Math.imul(l, T)) | 0),
            (n = (n + Math.imul(l, V)) | 0));
          var bt =
            (((e + (r = (r + Math.imul(o, X)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, Y)) | 0) + Math.imul(v, X)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, Y)) | 0) + (s >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (r = Math.imul(g, G)),
            (s = ((s = Math.imul(g, H)) + Math.imul(S, G)) | 0),
            (n = Math.imul(S, H)),
            (r = (r + Math.imul(p, K)) | 0),
            (s = ((s = (s + Math.imul(p, O)) | 0) + Math.imul(k, K)) | 0),
            (n = (n + Math.imul(k, O)) | 0),
            (r = (r + Math.imul(y, T)) | 0),
            (s = ((s = (s + Math.imul(y, V)) | 0) + Math.imul(m, T)) | 0),
            (n = (n + Math.imul(m, V)) | 0),
            (r = (r + Math.imul(w, X)) | 0),
            (s = ((s = (s + Math.imul(w, Y)) | 0) + Math.imul(l, X)) | 0),
            (n = (n + Math.imul(l, Y)) | 0));
          var pt =
            (((e + (r = (r + Math.imul(o, $)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, tt)) | 0) + Math.imul(v, $)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, tt)) | 0) + (s >>> 13)) | 0) +
              (pt >>> 26)) |
            0),
            (pt &= 67108863),
            (r = Math.imul(N, G)),
            (s = ((s = Math.imul(N, H)) + Math.imul(x, G)) | 0),
            (n = Math.imul(x, H)),
            (r = (r + Math.imul(g, K)) | 0),
            (s = ((s = (s + Math.imul(g, O)) | 0) + Math.imul(S, K)) | 0),
            (n = (n + Math.imul(S, O)) | 0),
            (r = (r + Math.imul(p, T)) | 0),
            (s = ((s = (s + Math.imul(p, V)) | 0) + Math.imul(k, T)) | 0),
            (n = (n + Math.imul(k, V)) | 0),
            (r = (r + Math.imul(y, X)) | 0),
            (s = ((s = (s + Math.imul(y, Y)) | 0) + Math.imul(m, X)) | 0),
            (n = (n + Math.imul(m, Y)) | 0),
            (r = (r + Math.imul(w, $)) | 0),
            (s = ((s = (s + Math.imul(w, tt)) | 0) + Math.imul(l, $)) | 0),
            (n = (n + Math.imul(l, tt)) | 0));
          var kt =
            (((e + (r = (r + Math.imul(o, it)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, rt)) | 0) + Math.imul(v, it)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, rt)) | 0) + (s >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (r = Math.imul(q, G)),
            (s = ((s = Math.imul(q, H)) + Math.imul(B, G)) | 0),
            (n = Math.imul(B, H)),
            (r = (r + Math.imul(N, K)) | 0),
            (s = ((s = (s + Math.imul(N, O)) | 0) + Math.imul(x, K)) | 0),
            (n = (n + Math.imul(x, O)) | 0),
            (r = (r + Math.imul(g, T)) | 0),
            (s = ((s = (s + Math.imul(g, V)) | 0) + Math.imul(S, T)) | 0),
            (n = (n + Math.imul(S, V)) | 0),
            (r = (r + Math.imul(p, X)) | 0),
            (s = ((s = (s + Math.imul(p, Y)) | 0) + Math.imul(k, X)) | 0),
            (n = (n + Math.imul(k, Y)) | 0),
            (r = (r + Math.imul(y, $)) | 0),
            (s = ((s = (s + Math.imul(y, tt)) | 0) + Math.imul(m, $)) | 0),
            (n = (n + Math.imul(m, tt)) | 0),
            (r = (r + Math.imul(w, it)) | 0),
            (s = ((s = (s + Math.imul(w, rt)) | 0) + Math.imul(l, it)) | 0),
            (n = (n + Math.imul(l, rt)) | 0));
          var At =
            (((e + (r = (r + Math.imul(o, nt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, at)) | 0) + Math.imul(v, nt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, at)) | 0) + (s >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (r = Math.imul(R, G)),
            (s = ((s = Math.imul(R, H)) + Math.imul(L, G)) | 0),
            (n = Math.imul(L, H)),
            (r = (r + Math.imul(q, K)) | 0),
            (s = ((s = (s + Math.imul(q, O)) | 0) + Math.imul(B, K)) | 0),
            (n = (n + Math.imul(B, O)) | 0),
            (r = (r + Math.imul(N, T)) | 0),
            (s = ((s = (s + Math.imul(N, V)) | 0) + Math.imul(x, T)) | 0),
            (n = (n + Math.imul(x, V)) | 0),
            (r = (r + Math.imul(g, X)) | 0),
            (s = ((s = (s + Math.imul(g, Y)) | 0) + Math.imul(S, X)) | 0),
            (n = (n + Math.imul(S, Y)) | 0),
            (r = (r + Math.imul(p, $)) | 0),
            (s = ((s = (s + Math.imul(p, tt)) | 0) + Math.imul(k, $)) | 0),
            (n = (n + Math.imul(k, tt)) | 0),
            (r = (r + Math.imul(y, it)) | 0),
            (s = ((s = (s + Math.imul(y, rt)) | 0) + Math.imul(m, it)) | 0),
            (n = (n + Math.imul(m, rt)) | 0),
            (r = (r + Math.imul(w, nt)) | 0),
            (s = ((s = (s + Math.imul(w, at)) | 0) + Math.imul(l, nt)) | 0),
            (n = (n + Math.imul(l, at)) | 0));
          var gt =
            (((e + (r = (r + Math.imul(o, ut)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, et)) | 0) + Math.imul(v, ut)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, et)) | 0) + (s >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (r = Math.imul(U, G)),
            (s = ((s = Math.imul(U, H)) + Math.imul(_, G)) | 0),
            (n = Math.imul(_, H)),
            (r = (r + Math.imul(R, K)) | 0),
            (s = ((s = (s + Math.imul(R, O)) | 0) + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(L, O)) | 0),
            (r = (r + Math.imul(q, T)) | 0),
            (s = ((s = (s + Math.imul(q, V)) | 0) + Math.imul(B, T)) | 0),
            (n = (n + Math.imul(B, V)) | 0),
            (r = (r + Math.imul(N, X)) | 0),
            (s = ((s = (s + Math.imul(N, Y)) | 0) + Math.imul(x, X)) | 0),
            (n = (n + Math.imul(x, Y)) | 0),
            (r = (r + Math.imul(g, $)) | 0),
            (s = ((s = (s + Math.imul(g, tt)) | 0) + Math.imul(S, $)) | 0),
            (n = (n + Math.imul(S, tt)) | 0),
            (r = (r + Math.imul(p, it)) | 0),
            (s = ((s = (s + Math.imul(p, rt)) | 0) + Math.imul(k, it)) | 0),
            (n = (n + Math.imul(k, rt)) | 0),
            (r = (r + Math.imul(y, nt)) | 0),
            (s = ((s = (s + Math.imul(y, at)) | 0) + Math.imul(m, nt)) | 0),
            (n = (n + Math.imul(m, at)) | 0),
            (r = (r + Math.imul(w, ut)) | 0),
            (s = ((s = (s + Math.imul(w, et)) | 0) + Math.imul(l, ut)) | 0),
            (n = (n + Math.imul(l, et)) | 0));
          var St =
            (((e + (r = (r + Math.imul(o, ot)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, vt)) | 0) + Math.imul(v, ot)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, vt)) | 0) + (s >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (r = Math.imul(C, G)),
            (s = ((s = Math.imul(C, H)) + Math.imul(D, G)) | 0),
            (n = Math.imul(D, H)),
            (r = (r + Math.imul(U, K)) | 0),
            (s = ((s = (s + Math.imul(U, O)) | 0) + Math.imul(_, K)) | 0),
            (n = (n + Math.imul(_, O)) | 0),
            (r = (r + Math.imul(R, T)) | 0),
            (s = ((s = (s + Math.imul(R, V)) | 0) + Math.imul(L, T)) | 0),
            (n = (n + Math.imul(L, V)) | 0),
            (r = (r + Math.imul(q, X)) | 0),
            (s = ((s = (s + Math.imul(q, Y)) | 0) + Math.imul(B, X)) | 0),
            (n = (n + Math.imul(B, Y)) | 0),
            (r = (r + Math.imul(N, $)) | 0),
            (s = ((s = (s + Math.imul(N, tt)) | 0) + Math.imul(x, $)) | 0),
            (n = (n + Math.imul(x, tt)) | 0),
            (r = (r + Math.imul(g, it)) | 0),
            (s = ((s = (s + Math.imul(g, rt)) | 0) + Math.imul(S, it)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (r = (r + Math.imul(p, nt)) | 0),
            (s = ((s = (s + Math.imul(p, at)) | 0) + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(k, at)) | 0),
            (r = (r + Math.imul(y, ut)) | 0),
            (s = ((s = (s + Math.imul(y, et)) | 0) + Math.imul(m, ut)) | 0),
            (n = (n + Math.imul(m, et)) | 0),
            (r = (r + Math.imul(w, ot)) | 0),
            (s = ((s = (s + Math.imul(w, vt)) | 0) + Math.imul(l, ot)) | 0),
            (n = (n + Math.imul(l, vt)) | 0));
          var It =
            (((e + (r = (r + Math.imul(o, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(o, lt)) | 0) + Math.imul(v, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(v, lt)) | 0) + (s >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (r = Math.imul(C, K)),
            (s = ((s = Math.imul(C, O)) + Math.imul(D, K)) | 0),
            (n = Math.imul(D, O)),
            (r = (r + Math.imul(U, T)) | 0),
            (s = ((s = (s + Math.imul(U, V)) | 0) + Math.imul(_, T)) | 0),
            (n = (n + Math.imul(_, V)) | 0),
            (r = (r + Math.imul(R, X)) | 0),
            (s = ((s = (s + Math.imul(R, Y)) | 0) + Math.imul(L, X)) | 0),
            (n = (n + Math.imul(L, Y)) | 0),
            (r = (r + Math.imul(q, $)) | 0),
            (s = ((s = (s + Math.imul(q, tt)) | 0) + Math.imul(B, $)) | 0),
            (n = (n + Math.imul(B, tt)) | 0),
            (r = (r + Math.imul(N, it)) | 0),
            (s = ((s = (s + Math.imul(N, rt)) | 0) + Math.imul(x, it)) | 0),
            (n = (n + Math.imul(x, rt)) | 0),
            (r = (r + Math.imul(g, nt)) | 0),
            (s = ((s = (s + Math.imul(g, at)) | 0) + Math.imul(S, nt)) | 0),
            (n = (n + Math.imul(S, at)) | 0),
            (r = (r + Math.imul(p, ut)) | 0),
            (s = ((s = (s + Math.imul(p, et)) | 0) + Math.imul(k, ut)) | 0),
            (n = (n + Math.imul(k, et)) | 0),
            (r = (r + Math.imul(y, ot)) | 0),
            (s = ((s = (s + Math.imul(y, vt)) | 0) + Math.imul(m, ot)) | 0),
            (n = (n + Math.imul(m, vt)) | 0));
          var Nt =
            (((e + (r = (r + Math.imul(w, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(w, lt)) | 0) + Math.imul(l, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(l, lt)) | 0) + (s >>> 13)) | 0) +
              (Nt >>> 26)) |
            0),
            (Nt &= 67108863),
            (r = Math.imul(C, T)),
            (s = ((s = Math.imul(C, V)) + Math.imul(D, T)) | 0),
            (n = Math.imul(D, V)),
            (r = (r + Math.imul(U, X)) | 0),
            (s = ((s = (s + Math.imul(U, Y)) | 0) + Math.imul(_, X)) | 0),
            (n = (n + Math.imul(_, Y)) | 0),
            (r = (r + Math.imul(R, $)) | 0),
            (s = ((s = (s + Math.imul(R, tt)) | 0) + Math.imul(L, $)) | 0),
            (n = (n + Math.imul(L, tt)) | 0),
            (r = (r + Math.imul(q, it)) | 0),
            (s = ((s = (s + Math.imul(q, rt)) | 0) + Math.imul(B, it)) | 0),
            (n = (n + Math.imul(B, rt)) | 0),
            (r = (r + Math.imul(N, nt)) | 0),
            (s = ((s = (s + Math.imul(N, at)) | 0) + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(x, at)) | 0),
            (r = (r + Math.imul(g, ut)) | 0),
            (s = ((s = (s + Math.imul(g, et)) | 0) + Math.imul(S, ut)) | 0),
            (n = (n + Math.imul(S, et)) | 0),
            (r = (r + Math.imul(p, ot)) | 0),
            (s = ((s = (s + Math.imul(p, vt)) | 0) + Math.imul(k, ot)) | 0),
            (n = (n + Math.imul(k, vt)) | 0));
          var xt =
            (((e + (r = (r + Math.imul(y, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(y, lt)) | 0) + Math.imul(m, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(m, lt)) | 0) + (s >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (r = Math.imul(C, X)),
            (s = ((s = Math.imul(C, Y)) + Math.imul(D, X)) | 0),
            (n = Math.imul(D, Y)),
            (r = (r + Math.imul(U, $)) | 0),
            (s = ((s = (s + Math.imul(U, tt)) | 0) + Math.imul(_, $)) | 0),
            (n = (n + Math.imul(_, tt)) | 0),
            (r = (r + Math.imul(R, it)) | 0),
            (s = ((s = (s + Math.imul(R, rt)) | 0) + Math.imul(L, it)) | 0),
            (n = (n + Math.imul(L, rt)) | 0),
            (r = (r + Math.imul(q, nt)) | 0),
            (s = ((s = (s + Math.imul(q, at)) | 0) + Math.imul(B, nt)) | 0),
            (n = (n + Math.imul(B, at)) | 0),
            (r = (r + Math.imul(N, ut)) | 0),
            (s = ((s = (s + Math.imul(N, et)) | 0) + Math.imul(x, ut)) | 0),
            (n = (n + Math.imul(x, et)) | 0),
            (r = (r + Math.imul(g, ot)) | 0),
            (s = ((s = (s + Math.imul(g, vt)) | 0) + Math.imul(S, ot)) | 0),
            (n = (n + Math.imul(S, vt)) | 0));
          var jt =
            (((e + (r = (r + Math.imul(p, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(p, lt)) | 0) + Math.imul(k, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(k, lt)) | 0) + (s >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863),
            (r = Math.imul(C, $)),
            (s = ((s = Math.imul(C, tt)) + Math.imul(D, $)) | 0),
            (n = Math.imul(D, tt)),
            (r = (r + Math.imul(U, it)) | 0),
            (s = ((s = (s + Math.imul(U, rt)) | 0) + Math.imul(_, it)) | 0),
            (n = (n + Math.imul(_, rt)) | 0),
            (r = (r + Math.imul(R, nt)) | 0),
            (s = ((s = (s + Math.imul(R, at)) | 0) + Math.imul(L, nt)) | 0),
            (n = (n + Math.imul(L, at)) | 0),
            (r = (r + Math.imul(q, ut)) | 0),
            (s = ((s = (s + Math.imul(q, et)) | 0) + Math.imul(B, ut)) | 0),
            (n = (n + Math.imul(B, et)) | 0),
            (r = (r + Math.imul(N, ot)) | 0),
            (s = ((s = (s + Math.imul(N, vt)) | 0) + Math.imul(x, ot)) | 0),
            (n = (n + Math.imul(x, vt)) | 0));
          var qt =
            (((e + (r = (r + Math.imul(g, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(g, lt)) | 0) + Math.imul(S, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(S, lt)) | 0) + (s >>> 13)) | 0) +
              (qt >>> 26)) |
            0),
            (qt &= 67108863),
            (r = Math.imul(C, it)),
            (s = ((s = Math.imul(C, rt)) + Math.imul(D, it)) | 0),
            (n = Math.imul(D, rt)),
            (r = (r + Math.imul(U, nt)) | 0),
            (s = ((s = (s + Math.imul(U, at)) | 0) + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(_, at)) | 0),
            (r = (r + Math.imul(R, ut)) | 0),
            (s = ((s = (s + Math.imul(R, et)) | 0) + Math.imul(L, ut)) | 0),
            (n = (n + Math.imul(L, et)) | 0),
            (r = (r + Math.imul(q, ot)) | 0),
            (s = ((s = (s + Math.imul(q, vt)) | 0) + Math.imul(B, ot)) | 0),
            (n = (n + Math.imul(B, vt)) | 0));
          var Bt =
            (((e + (r = (r + Math.imul(N, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(N, lt)) | 0) + Math.imul(x, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(x, lt)) | 0) + (s >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (r = Math.imul(C, nt)),
            (s = ((s = Math.imul(C, at)) + Math.imul(D, nt)) | 0),
            (n = Math.imul(D, at)),
            (r = (r + Math.imul(U, ut)) | 0),
            (s = ((s = (s + Math.imul(U, et)) | 0) + Math.imul(_, ut)) | 0),
            (n = (n + Math.imul(_, et)) | 0),
            (r = (r + Math.imul(R, ot)) | 0),
            (s = ((s = (s + Math.imul(R, vt)) | 0) + Math.imul(L, ot)) | 0),
            (n = (n + Math.imul(L, vt)) | 0));
          var Et =
            (((e + (r = (r + Math.imul(q, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(q, lt)) | 0) + Math.imul(B, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(B, lt)) | 0) + (s >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (r = Math.imul(C, ut)),
            (s = ((s = Math.imul(C, et)) + Math.imul(D, ut)) | 0),
            (n = Math.imul(D, et)),
            (r = (r + Math.imul(U, ot)) | 0),
            (s = ((s = (s + Math.imul(U, vt)) | 0) + Math.imul(_, ot)) | 0),
            (n = (n + Math.imul(_, vt)) | 0));
          var Rt =
            (((e + (r = (r + Math.imul(R, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(R, lt)) | 0) + Math.imul(L, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(L, lt)) | 0) + (s >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (r = Math.imul(C, ot)),
            (s = ((s = Math.imul(C, vt)) + Math.imul(D, ot)) | 0),
            (n = Math.imul(D, vt)));
          var Lt =
            (((e + (r = (r + Math.imul(U, wt)) | 0)) | 0) +
              ((8191 &
                (s =
                  ((s = (s + Math.imul(U, lt)) | 0) + Math.imul(_, wt)) | 0)) <<
                13)) |
            0;
          ((e =
            ((((n = (n + Math.imul(_, lt)) | 0) + (s >>> 13)) | 0) +
              (Lt >>> 26)) |
            0),
            (Lt &= 67108863));
          var Pt =
            (((e + (r = Math.imul(C, wt))) | 0) +
              ((8191 & (s = ((s = Math.imul(C, lt)) + Math.imul(D, wt)) | 0)) <<
                13)) |
            0;
          return (
            (e =
              ((((n = Math.imul(D, lt)) + (s >>> 13)) | 0) + (Pt >>> 26)) | 0),
            (Pt &= 67108863),
            (u[0] = dt),
            (u[1] = yt),
            (u[2] = mt),
            (u[3] = bt),
            (u[4] = pt),
            (u[5] = kt),
            (u[6] = At),
            (u[7] = gt),
            (u[8] = St),
            (u[9] = It),
            (u[10] = Nt),
            (u[11] = xt),
            (u[12] = jt),
            (u[13] = qt),
            (u[14] = Bt),
            (u[15] = Et),
            (u[16] = Rt),
            (u[17] = Lt),
            (u[18] = Pt),
            0 !== e && ((u[19] = e), i.length++),
            i
          );
        };
        function y(t, h, i) {
          ((i.negative = h.negative ^ t.negative),
            (i.length = t.length + h.length));
          for (var r = 0, s = 0, n = 0; n < i.length - 1; n++) {
            var a = s;
            s = 0;
            for (
              var f = 67108863 & r,
                u = Math.min(n, h.length - 1),
                e = Math.max(0, n - t.length + 1);
              e <= u;
              e++
            ) {
              var M = n - e,
                o = (0 | t.words[M]) * (0 | h.words[e]),
                v = 67108863 & o;
              ((f = 67108863 & (v = (v + f) | 0)),
                (s +=
                  (a =
                    ((a = (a + ((o / 67108864) | 0)) | 0) + (v >>> 26)) | 0) >>>
                  26),
                (a &= 67108863));
            }
            ((i.words[n] = f), (r = a), (a = s));
          }
          return (0 !== r ? (i.words[n] = r) : i.length--, i.o());
        }
        function m(t, h, i) {
          return y(t, h, i);
        }
        function b(t, h) {
          ((this.x = t), (this.y = h));
        }
        (Math.imul || (d = l),
          (n.prototype.mulTo = function (t, h) {
            var i = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? d(this, t, h)
              : i < 63
                ? l(this, t, h)
                : i < 1024
                  ? y(this, t, h)
                  : m(this, t, h);
          }),
          (b.prototype.makeRBT = function (t) {
            for (
              var h = new Array(t), i = n.prototype.j(t) - 1, r = 0;
              r < t;
              r++
            )
              h[r] = this.revBin(r, i, t);
            return h;
          }),
          (b.prototype.revBin = (t, h, i) => {
            if (0 === t || t === i - 1) return t;
            for (var r = 0, s = 0; s < h; s++)
              ((r |= (1 & t) << (h - s - 1)), (t >>= 1));
            return r;
          }),
          (b.prototype.permute = (t, h, i, r, s, n) => {
            for (var a = 0; a < n; a++) ((r[a] = h[t[a]]), (s[a] = i[t[a]]));
          }),
          (b.prototype.transform = function (t, h, i, r, s, n) {
            this.permute(n, t, h, i, r, s);
            for (var a = 1; a < s; a <<= 1)
              for (
                var f = a << 1,
                  u = Math.cos((2 * Math.PI) / f),
                  e = Math.sin((2 * Math.PI) / f),
                  M = 0;
                M < s;
                M += f
              )
                for (var o = u, v = e, c = 0; c < a; c++) {
                  var w = i[M + c],
                    l = r[M + c],
                    d = i[M + c + a],
                    y = r[M + c + a],
                    m = o * d - v * y;
                  ((y = o * y + v * d),
                    (d = m),
                    (i[M + c] = w + d),
                    (r[M + c] = l + y),
                    (i[M + c + a] = w - d),
                    (r[M + c + a] = l - y),
                    c !== f &&
                      ((m = u * o - e * v), (v = u * v + e * o), (o = m)));
                }
          }),
          (b.prototype.guessLen13b = (t, h) => {
            var i = 1 | Math.max(h, t),
              r = 1 & i,
              s = 0;
            for (i = (i / 2) | 0; i; i >>>= 1) s++;
            return 1 << (s + 1 + r);
          }),
          (b.prototype.conjugate = (t, h, i) => {
            if (!(i <= 1))
              for (var r = 0; r < i / 2; r++) {
                var s = t[r];
                ((t[r] = t[i - r - 1]),
                  (t[i - r - 1] = s),
                  (s = h[r]),
                  (h[r] = -h[i - r - 1]),
                  (h[i - r - 1] = -s));
              }
          }),
          (b.prototype.normalize13b = (t, h) => {
            for (var i = 0, r = 0; r < h / 2; r++) {
              var s =
                8192 * Math.round(t[2 * r + 1] / h) +
                Math.round(t[2 * r] / h) +
                i;
              ((t[r] = 67108863 & s),
                (i = s < 67108864 ? 0 : (s / 67108864) | 0));
            }
            return t;
          }),
          (b.prototype.convert13b = (t, h, i, s) => {
            for (var n = 0, a = 0; a < h; a++)
              ((n += 0 | t[a]),
                (i[2 * a] = 8191 & n),
                (n >>>= 13),
                (i[2 * a + 1] = 8191 & n),
                (n >>>= 13));
            for (a = 2 * h; a < s; ++a) i[a] = 0;
            (r(0 === n), r(!(-8192 & n)));
          }),
          (b.prototype.stub = (t) => {
            for (var h = new Array(t), i = 0; i < t; i++) h[i] = 0;
            return h;
          }),
          (b.prototype.mulp = function (t, h, i) {
            var r = 2 * this.guessLen13b(t.length, h.length),
              s = this.makeRBT(r),
              n = this.stub(r),
              a = new Array(r),
              f = new Array(r),
              u = new Array(r),
              e = new Array(r),
              M = new Array(r),
              o = new Array(r),
              v = i.words;
            ((v.length = r),
              this.convert13b(t.words, t.length, a, r),
              this.convert13b(h.words, h.length, e, r),
              this.transform(a, n, f, u, r, s),
              this.transform(e, n, M, o, r, s));
            for (var c = 0; c < r; c++) {
              var w = f[c] * M[c] - u[c] * o[c];
              ((u[c] = f[c] * o[c] + u[c] * M[c]), (f[c] = w));
            }
            return (
              this.conjugate(f, u, r),
              this.transform(f, u, v, n, r, s),
              this.conjugate(v, n, r),
              this.normalize13b(v, r),
              (i.negative = t.negative ^ h.negative),
              (i.length = t.length + h.length),
              i.o()
            );
          }),
          (n.prototype.mul = function (t) {
            var h = new n(null);
            return (
              (h.words = new Array(this.length + t.length)),
              this.mulTo(t, h)
            );
          }),
          (n.prototype.mulf = function (t) {
            var h = new n(null);
            return (
              (h.words = new Array(this.length + t.length)),
              m(this, t, h)
            );
          }),
          (n.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (n.prototype.imuln = function (t) {
            var h = t < 0;
            (h && (t = -t), r('number' == typeof t), r(t < 67108864));
            for (var i = 0, s = 0; s < this.length; s++) {
              var n = (0 | this.words[s]) * t,
                a = (67108863 & n) + (67108863 & i);
              ((i >>= 26),
                (i += (n / 67108864) | 0),
                (i += a >>> 26),
                (this.words[s] = 67108863 & a));
            }
            return (
              0 !== i && ((this.words[s] = i), this.length++),
              (this.length = 0 === t ? 1 : this.length),
              h ? this.ineg() : this
            );
          }),
          (n.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (n.prototype.sqr = function () {
            return this.mul(this);
          }),
          (n.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (n.prototype.pow = function (t) {
            var h = ((t) => {
              for (var h = new Array(t.bitLength()), i = 0; i < h.length; i++) {
                var r = (i / 26) | 0,
                  s = i % 26;
                h[i] = (t.words[r] >>> s) & 1;
              }
              return h;
            })(t);
            if (0 === h.length) return new n(1);
            for (
              var i = this, r = 0;
              r < h.length && 0 === h[r];
              r++, i = i.sqr()
            );
            if (++r < h.length)
              for (var s = i.sqr(); r < h.length; r++, s = s.sqr())
                0 !== h[r] && (i = i.mul(s));
            return i;
          }),
          (n.prototype.iushln = function (t) {
            r('number' == typeof t && t >= 0);
            var h,
              i = t % 26,
              s = (t - i) / 26,
              n = (67108863 >>> (26 - i)) << (26 - i);
            if (0 !== i) {
              var a = 0;
              for (h = 0; h < this.length; h++) {
                var f = this.words[h] & n,
                  u = ((0 | this.words[h]) - f) << i;
                ((this.words[h] = u | a), (a = f >>> (26 - i)));
              }
              a && ((this.words[h] = a), this.length++);
            }
            if (0 !== s) {
              for (h = this.length - 1; h >= 0; h--)
                this.words[h + s] = this.words[h];
              for (h = 0; h < s; h++) this.words[h] = 0;
              this.length += s;
            }
            return this.o();
          }),
          (n.prototype.ishln = function (t) {
            return (r(0 === this.negative), this.iushln(t));
          }),
          (n.prototype.iushrn = function (t, h, i) {
            var s;
            (r('number' == typeof t && t >= 0),
              (s = h ? (h - (h % 26)) / 26 : 0));
            var n = t % 26,
              a = Math.min((t - n) / 26, this.length),
              f = 67108863 ^ ((67108863 >>> n) << n),
              u = i;
            if (((s -= a), (s = Math.max(0, s)), u)) {
              for (var e = 0; e < a; e++) u.words[e] = this.words[e];
              u.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, e = 0; e < this.length; e++)
                this.words[e] = this.words[e + a];
            else ((this.words[0] = 0), (this.length = 1));
            var M = 0;
            for (e = this.length - 1; e >= 0 && (0 !== M || e >= s); e--) {
              var o = 0 | this.words[e];
              ((this.words[e] = (M << (26 - n)) | (o >>> n)), (M = o & f));
            }
            return (
              u && 0 !== M && (u.words[u.length++] = M),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.o()
            );
          }),
          (n.prototype.ishrn = function (t, h, i) {
            return (r(0 === this.negative), this.iushrn(t, h, i));
          }),
          (n.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (n.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (n.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (n.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (n.prototype.testn = function (t) {
            r('number' == typeof t && t >= 0);
            var h = t % 26,
              i = (t - h) / 26,
              s = 1 << h;
            return !(this.length <= i || !(this.words[i] & s));
          }),
          (n.prototype.imaskn = function (t) {
            r('number' == typeof t && t >= 0);
            var h = t % 26,
              i = (t - h) / 26;
            if (
              (r(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= i)
            )
              return this;
            if (
              (0 !== h && i++,
              (this.length = Math.min(i, this.length)),
              0 !== h)
            ) {
              var s = 67108863 ^ ((67108863 >>> h) << h);
              this.words[this.length - 1] &= s;
            }
            return this.o();
          }),
          (n.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (n.prototype.iaddn = function (t) {
            return (
              r('number' == typeof t),
              r(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this.v(t)
            );
          }),
          (n.prototype.v = function (t) {
            this.words[0] += t;
            for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
              ((this.words[h] -= 67108864),
                h === this.length - 1
                  ? (this.words[h + 1] = 1)
                  : this.words[h + 1]++);
            return ((this.length = Math.max(this.length, h + 1)), this);
          }),
          (n.prototype.isubn = function (t) {
            if ((r('number' == typeof t), r(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iaddn(t),
                (this.negative = 1),
                this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              ((this.words[0] = -this.words[0]), (this.negative = 1));
            else
              for (var h = 0; h < this.length && this.words[h] < 0; h++)
                ((this.words[h] += 67108864), (this.words[h + 1] -= 1));
            return this.o();
          }),
          (n.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (n.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (n.prototype.iabs = function () {
            return ((this.negative = 0), this);
          }),
          (n.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (n.prototype.B = function (t, h, i) {
            var s,
              n,
              a = t.length + i;
            this.A(a);
            var f = 0;
            for (s = 0; s < t.length; s++) {
              n = (0 | this.words[s + i]) + f;
              var u = (0 | t.words[s]) * h;
              ((f = ((n -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[s + i] = 67108863 & n));
            }
            for (; s < this.length - i; s++)
              ((f = (n = (0 | this.words[s + i]) + f) >> 26),
                (this.words[s + i] = 67108863 & n));
            if (0 === f) return this.o();
            for (r(-1 === f), f = 0, s = 0; s < this.length; s++)
              ((f = (n = -(0 | this.words[s]) + f) >> 26),
                (this.words[s] = 67108863 & n));
            return ((this.negative = 1), this.o());
          }),
          (n.prototype.R = function (t, h) {
            var i = (this.length, t.length),
              r = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (i = 26 - this.j(a)) &&
              ((s = s.ushln(i)), r.iushln(i), (a = 0 | s.words[s.length - 1]));
            var f,
              u = r.length - s.length;
            if ('mod' !== h) {
              (((f = new n(null)).length = u + 1),
                (f.words = new Array(f.length)));
              for (var e = 0; e < f.length; e++) f.words[e] = 0;
            }
            var M = r.clone().B(s, 1, u);
            0 === M.negative && ((r = M), f && (f.words[u] = 1));
            for (var o = u - 1; o >= 0; o--) {
              var v =
                67108864 * (0 | r.words[s.length + o]) +
                (0 | r.words[s.length + o - 1]);
              for (
                v = Math.min((v / a) | 0, 67108863), r.B(s, v, o);
                0 !== r.negative;

              )
                (v--,
                  (r.negative = 0),
                  r.B(s, 1, o),
                  r.isZero() || (r.negative ^= 1));
              f && (f.words[o] = v);
            }
            return (
              f && f.o(),
              r.o(),
              'div' !== h && 0 !== i && r.iushrn(i),
              { div: f || null, mod: r }
            );
          }),
          (n.prototype.divmod = function (t, h, i) {
            return (
              r(!t.isZero()),
              this.isZero()
                ? { div: new n(0), mod: new n(0) }
                : 0 !== this.negative && 0 === t.negative
                  ? ((f = this.neg().divmod(t, h)),
                    'mod' !== h && (s = f.div.neg()),
                    'div' !== h &&
                      ((a = f.mod.neg()), i && 0 !== a.negative && a.iadd(t)),
                    { div: s, mod: a })
                  : 0 === this.negative && 0 !== t.negative
                    ? ((f = this.divmod(t.neg(), h)),
                      'mod' !== h && (s = f.div.neg()),
                      { div: s, mod: f.mod })
                    : 0 !== (this.negative & t.negative)
                      ? ((f = this.neg().divmod(t.neg(), h)),
                        'div' !== h &&
                          ((a = f.mod.neg()),
                          i && 0 !== a.negative && a.isub(t)),
                        { div: f.div, mod: a })
                      : t.length > this.length || this.cmp(t) < 0
                        ? { div: new n(0), mod: this }
                        : 1 === t.length
                          ? 'div' === h
                            ? { div: this.divn(t.words[0]), mod: null }
                            : 'mod' === h
                              ? {
                                  div: null,
                                  mod: new n(this.modrn(t.words[0])),
                                }
                              : {
                                  div: this.divn(t.words[0]),
                                  mod: new n(this.modrn(t.words[0])),
                                }
                          : this.R(t, h)
            );
            var s, a, f;
          }),
          (n.prototype.div = function (t) {
            return this.divmod(t, 'div', !1).div;
          }),
          (n.prototype.mod = function (t) {
            return this.divmod(t, 'mod', !1).mod;
          }),
          (n.prototype.umod = function (t) {
            return this.divmod(t, 'mod', !0).mod;
          }),
          (n.prototype.divRound = function (t) {
            var h = this.divmod(t);
            if (h.mod.isZero()) return h.div;
            var i = 0 !== h.div.negative ? h.mod.isub(t) : h.mod,
              r = t.ushrn(1),
              s = t.andln(1),
              n = i.cmp(r);
            return n < 0 || (1 === s && 0 === n)
              ? h.div
              : 0 !== h.div.negative
                ? h.div.isubn(1)
                : h.div.iaddn(1);
          }),
          (n.prototype.modrn = function (t) {
            var h = t < 0;
            (h && (t = -t), r(t <= 67108863));
            for (var i = (1 << 26) % t, s = 0, n = this.length - 1; n >= 0; n--)
              s = (i * s + (0 | this.words[n])) % t;
            return h ? -s : s;
          }),
          (n.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (n.prototype.idivn = function (t) {
            var h = t < 0;
            (h && (t = -t), r(t <= 67108863));
            for (var i = 0, s = this.length - 1; s >= 0; s--) {
              var n = (0 | this.words[s]) + 67108864 * i;
              ((this.words[s] = (n / t) | 0), (i = n % t));
            }
            return (this.o(), h ? this.ineg() : this);
          }),
          (n.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (n.prototype.egcd = function (t) {
            (r(0 === t.negative), r(!t.isZero()));
            var h = this,
              i = t.clone();
            h = 0 !== h.negative ? h.umod(t) : h.clone();
            for (
              var s = new n(1), a = new n(0), f = new n(0), u = new n(1), e = 0;
              h.isEven() && i.isEven();

            )
              (h.iushrn(1), i.iushrn(1), ++e);
            for (var M = i.clone(), o = h.clone(); !h.isZero(); ) {
              for (
                var v = 0, c = 1;
                0 === (h.words[0] & c) && v < 26;
                ++v, c <<= 1
              );
              if (v > 0)
                for (h.iushrn(v); v-- > 0; )
                  ((s.isOdd() || a.isOdd()) && (s.iadd(M), a.isub(o)),
                    s.iushrn(1),
                    a.iushrn(1));
              for (
                var w = 0, l = 1;
                0 === (i.words[0] & l) && w < 26;
                ++w, l <<= 1
              );
              if (w > 0)
                for (i.iushrn(w); w-- > 0; )
                  ((f.isOdd() || u.isOdd()) && (f.iadd(M), u.isub(o)),
                    f.iushrn(1),
                    u.iushrn(1));
              h.cmp(i) >= 0
                ? (h.isub(i), s.isub(f), a.isub(u))
                : (i.isub(h), f.isub(s), u.isub(a));
            }
            return { a: f, b: u, gcd: i.iushln(e) };
          }),
          (n.prototype.L = function (t) {
            (r(0 === t.negative), r(!t.isZero()));
            var h = this,
              i = t.clone();
            h = 0 !== h.negative ? h.umod(t) : h.clone();
            for (
              var s, a = new n(1), f = new n(0), u = i.clone();
              h.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var e = 0, M = 1;
                0 === (h.words[0] & M) && e < 26;
                ++e, M <<= 1
              );
              if (e > 0)
                for (h.iushrn(e); e-- > 0; )
                  (a.isOdd() && a.iadd(u), a.iushrn(1));
              for (
                var o = 0, v = 1;
                0 === (i.words[0] & v) && o < 26;
                ++o, v <<= 1
              );
              if (o > 0)
                for (i.iushrn(o); o-- > 0; )
                  (f.isOdd() && f.iadd(u), f.iushrn(1));
              h.cmp(i) >= 0 ? (h.isub(i), a.isub(f)) : (i.isub(h), f.isub(a));
            }
            return ((s = 0 === h.cmpn(1) ? a : f).cmpn(0) < 0 && s.iadd(t), s);
          }),
          (n.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var h = this.clone(),
              i = t.clone();
            ((h.negative = 0), (i.negative = 0));
            for (var r = 0; h.isEven() && i.isEven(); r++)
              (h.iushrn(1), i.iushrn(1));
            for (;;) {
              for (; h.isEven(); ) h.iushrn(1);
              for (; i.isEven(); ) i.iushrn(1);
              var s = h.cmp(i);
              if (s < 0) {
                var n = h;
                ((h = i), (i = n));
              } else if (0 === s || 0 === i.cmpn(1)) break;
              h.isub(i);
            }
            return i.iushln(r);
          }),
          (n.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (n.prototype.isEven = function () {
            return !(1 & this.words[0]);
          }),
          (n.prototype.isOdd = function () {
            return !(1 & ~this.words[0]);
          }),
          (n.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (n.prototype.bincn = function (t) {
            r('number' == typeof t);
            var h = t % 26,
              i = (t - h) / 26,
              s = 1 << h;
            if (this.length <= i)
              return (this.A(i + 1), (this.words[i] |= s), this);
            for (var n = s, a = i; 0 !== n && a < this.length; a++) {
              var f = 0 | this.words[a];
              ((n = (f += n) >>> 26), (f &= 67108863), (this.words[a] = f));
            }
            return (0 !== n && ((this.words[a] = n), this.length++), this);
          }),
          (n.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (n.prototype.cmpn = function (t) {
            var h,
              i = t < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if ((this.o(), this.length > 1)) h = 1;
            else {
              (i && (t = -t), r(t <= 67108863, 'Number is too big'));
              var s = 0 | this.words[0];
              h = s === t ? 0 : s < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -h : h;
          }),
          (n.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var h = this.ucmp(t);
            return 0 !== this.negative ? 0 | -h : h;
          }),
          (n.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var h = 0, i = this.length - 1; i >= 0; i--) {
              var r = 0 | this.words[i],
                s = 0 | t.words[i];
              if (r !== s) {
                r < s ? (h = -1) : r > s && (h = 1);
                break;
              }
            }
            return h;
          }),
          (n.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (n.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (n.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (n.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (n.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (n.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (n.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (n.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (n.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (n.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (n.red = (t) => new N(t)),
          (n.prototype.toRed = function (t) {
            return (
              r(!this.red, 'Already a number in reduction context'),
              r(0 === this.negative, 'red works only with positives'),
              t.convertTo(this).P(t)
            );
          }),
          (n.prototype.fromRed = function () {
            return (
              r(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            );
          }),
          (n.prototype.P = function (t) {
            return ((this.red = t), this);
          }),
          (n.prototype.forceRed = function (t) {
            return (
              r(!this.red, 'Already a number in reduction context'),
              this.P(t)
            );
          }),
          (n.prototype.redAdd = function (t) {
            return (
              r(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            );
          }),
          (n.prototype.redIAdd = function (t) {
            return (
              r(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            );
          }),
          (n.prototype.redSub = function (t) {
            return (
              r(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            );
          }),
          (n.prototype.redISub = function (t) {
            return (
              r(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            );
          }),
          (n.prototype.redShl = function (t) {
            return (
              r(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            );
          }),
          (n.prototype.redMul = function (t) {
            return (
              r(this.red, 'redMul works only with red numbers'),
              this.red.U(this, t),
              this.red.mul(this, t)
            );
          }),
          (n.prototype.redIMul = function (t) {
            return (
              r(this.red, 'redMul works only with red numbers'),
              this.red.U(this, t),
              this.red.imul(this, t)
            );
          }),
          (n.prototype.redSqr = function () {
            return (
              r(this.red, 'redSqr works only with red numbers'),
              this.red._(this),
              this.red.sqr(this)
            );
          }),
          (n.prototype.redISqr = function () {
            return (
              r(this.red, 'redISqr works only with red numbers'),
              this.red._(this),
              this.red.isqr(this)
            );
          }),
          (n.prototype.redSqrt = function () {
            return (
              r(this.red, 'redSqrt works only with red numbers'),
              this.red._(this),
              this.red.sqrt(this)
            );
          }),
          (n.prototype.redInvm = function () {
            return (
              r(this.red, 'redInvm works only with red numbers'),
              this.red._(this),
              this.red.invm(this)
            );
          }),
          (n.prototype.redNeg = function () {
            return (
              r(this.red, 'redNeg works only with red numbers'),
              this.red._(this),
              this.red.neg(this)
            );
          }),
          (n.prototype.redPow = function (t) {
            return (
              r(this.red && !t.red, 'redPow(normalNum)'),
              this.red._(this),
              this.red.pow(this, t)
            );
          }));
        var p = { k256: null, p224: null, p192: null, p25519: null };
        function k(t, h) {
          ((this.name = t),
            (this.p = new n(h, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new n(1).iushln(this.n).isub(this.p)),
            (this.tmp = this.C()));
        }
        function A() {
          k.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          );
        }
        function g() {
          k.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          );
        }
        function S() {
          k.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          );
        }
        function I() {
          k.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          );
        }
        function N(t) {
          if ('string' == typeof t) {
            var h = n.D(t);
            ((this.m = h.p), (this.prime = h));
          } else
            (r(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null));
        }
        function x(t) {
          (N.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new n(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r.L(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv)));
        }
        ((k.prototype.C = function () {
          var t = new n(null);
          return ((t.words = new Array(Math.ceil(this.n / 13))), t);
        }),
          (k.prototype.ireduce = function (t) {
            var h,
              i = t;
            do {
              (this.split(i, this.tmp),
                (h = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()));
            } while (h > this.n);
            var r = h < this.n ? -1 : i.ucmp(this.p);
            return (
              0 === r
                ? ((i.words[0] = 0), (i.length = 1))
                : r > 0
                  ? i.isub(this.p)
                  : void 0 !== i.strip
                    ? i.strip()
                    : i.o(),
              i
            );
          }),
          (k.prototype.split = function (t, h) {
            t.iushrn(this.n, 0, h);
          }),
          (k.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          s(A, k),
          (A.prototype.split = (t, h) => {
            for (var i = 4194303, r = Math.min(t.length, 9), s = 0; s < r; s++)
              h.words[s] = t.words[s];
            if (((h.length = r), t.length <= 9))
              return ((t.words[0] = 0), void (t.length = 1));
            var n = t.words[9];
            for (h.words[h.length++] = n & i, s = 10; s < t.length; s++) {
              var a = 0 | t.words[s];
              ((t.words[s - 10] = ((a & i) << 4) | (n >>> 22)), (n = a));
            }
            ((n >>>= 22),
              (t.words[s - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
          }),
          (A.prototype.imulK = (t) => {
            ((t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2));
            for (var h = 0, i = 0; i < t.length; i++) {
              var r = 0 | t.words[i];
              ((h += 977 * r),
                (t.words[i] = 67108863 & h),
                (h = 64 * r + ((h / 67108864) | 0)));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          s(g, k),
          s(S, k),
          s(I, k),
          (I.prototype.imulK = (t) => {
            for (var h = 0, i = 0; i < t.length; i++) {
              var r = 19 * (0 | t.words[i]) + h,
                s = 67108863 & r;
              ((r >>>= 26), (t.words[i] = s), (h = r));
            }
            return (0 !== h && (t.words[t.length++] = h), t);
          }),
          (n.D = (t) => {
            if (p[t]) return p[t];
            var h;
            if ('k256' === t) h = new A();
            else if ('p224' === t) h = new g();
            else if ('p192' === t) h = new S();
            else {
              if ('p25519' !== t) throw new Error('Unknown prime ' + t);
              h = new I();
            }
            return ((p[t] = h), h);
          }),
          (N.prototype._ = (t) => {
            (r(0 === t.negative, 'red works only with positives'),
              r(t.red, 'red works only with red numbers'));
          }),
          (N.prototype.U = (t, h) => {
            (r(
              0 === (t.negative | h.negative),
              'red works only with positives'
            ),
              r(t.red && t.red === h.red, 'red works only with red numbers'));
          }),
          (N.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t).P(this)
              : (M(t, t.umod(this.m).P(this)), t);
          }),
          (N.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t).P(this);
          }),
          (N.prototype.add = function (t, h) {
            this.U(t, h);
            var i = t.add(h);
            return (i.cmp(this.m) >= 0 && i.isub(this.m), i.P(this));
          }),
          (N.prototype.iadd = function (t, h) {
            this.U(t, h);
            var i = t.iadd(h);
            return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
          }),
          (N.prototype.sub = function (t, h) {
            this.U(t, h);
            var i = t.sub(h);
            return (i.cmpn(0) < 0 && i.iadd(this.m), i.P(this));
          }),
          (N.prototype.isub = function (t, h) {
            this.U(t, h);
            var i = t.isub(h);
            return (i.cmpn(0) < 0 && i.iadd(this.m), i);
          }),
          (N.prototype.shl = function (t, h) {
            return (this._(t), this.imod(t.ushln(h)));
          }),
          (N.prototype.imul = function (t, h) {
            return (this.U(t, h), this.imod(t.imul(h)));
          }),
          (N.prototype.mul = function (t, h) {
            return (this.U(t, h), this.imod(t.mul(h)));
          }),
          (N.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (N.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (N.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var h = this.m.andln(3);
            if ((r(h % 2 == 1), 3 === h)) {
              var i = this.m.add(new n(1)).iushrn(2);
              return this.pow(t, i);
            }
            for (
              var s = this.m.subn(1), a = 0;
              !s.isZero() && 0 === s.andln(1);

            )
              (a++, s.iushrn(1));
            r(!s.isZero());
            var f = new n(1).toRed(this),
              u = f.redNeg(),
              e = this.m.subn(1).iushrn(1),
              M = this.m.bitLength();
            for (
              M = new n(2 * M * M).toRed(this);
              0 !== this.pow(M, e).cmp(u);

            )
              M.redIAdd(u);
            for (
              var o = this.pow(M, s),
                v = this.pow(t, s.addn(1).iushrn(1)),
                c = this.pow(t, s),
                w = a;
              0 !== c.cmp(f);

            ) {
              for (var l = c, d = 0; 0 !== l.cmp(f); d++) l = l.redSqr();
              r(d < w);
              var y = this.pow(o, new n(1).iushln(w - d - 1));
              ((v = v.redMul(y)), (o = y.redSqr()), (c = c.redMul(o)), (w = d));
            }
            return v;
          }),
          (N.prototype.invm = function (t) {
            var h = t.L(this.m);
            return 0 !== h.negative
              ? ((h.negative = 0), this.imod(h).redNeg())
              : this.imod(h);
          }),
          (N.prototype.pow = function (t, h) {
            if (h.isZero()) return new n(1).toRed(this);
            if (0 === h.cmpn(1)) return t.clone();
            var i = new Array(16);
            ((i[0] = new n(1).toRed(this)), (i[1] = t));
            for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], t);
            var s = i[0],
              a = 0,
              f = 0,
              u = h.bitLength() % 26;
            for (0 === u && (u = 26), r = h.length - 1; r >= 0; r--) {
              for (var e = h.words[r], M = u - 1; M >= 0; M--) {
                var o = (e >> M) & 1;
                (s !== i[0] && (s = this.sqr(s)),
                  0 !== o || 0 !== a
                    ? ((a <<= 1),
                      (a |= o),
                      (4 === ++f || (0 === r && 0 === M)) &&
                        ((s = this.mul(s, i[a])), (f = 0), (a = 0)))
                    : (f = 0));
              }
              u = 26;
            }
            return s;
          }),
          (N.prototype.convertTo = function (t) {
            var h = t.umod(this.m);
            return h === t ? h.clone() : h;
          }),
          (N.prototype.convertFrom = (t) => {
            var h = t.clone();
            return ((h.red = null), h);
          }),
          (n.mont = (t) => new x(t)),
          s(x, N),
          (x.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (x.prototype.convertFrom = function (t) {
            var h = this.imod(t.mul(this.rinv));
            return ((h.red = null), h);
          }),
          (x.prototype.imul = function (t, h) {
            if (t.isZero() || h.isZero())
              return ((t.words[0] = 0), (t.length = 1), t);
            var i = t.imul(h),
              r = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              s = i.isub(r).iushrn(this.shift),
              n = s;
            return (
              s.cmp(this.m) >= 0
                ? (n = s.isub(this.m))
                : s.cmpn(0) < 0 && (n = s.iadd(this.m)),
              n.P(this)
            );
          }),
          (x.prototype.mul = function (t, h) {
            if (t.isZero() || h.isZero()) return new n(0).P(this);
            var i = t.mul(h),
              r = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              s = i.isub(r).iushrn(this.shift),
              a = s;
            return (
              s.cmp(this.m) >= 0
                ? (a = s.isub(this.m))
                : s.cmpn(0) < 0 && (a = s.iadd(this.m)),
              a.P(this)
            );
          }),
          (x.prototype.invm = function (t) {
            return this.imod(t.L(this.m).mul(this.r2)).P(this);
          }));
      })((t = i.nmd(t)), this);
    },
  },
]);
