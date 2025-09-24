'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [607],
  {
    398: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(5590);
      function o(e) {
        return (0, r.A)(e).defaultView || window;
      }
    },
    1070: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(9729);
      function o(e) {
        const { controlled: t, default: n, name: o, state: c = 'value' } = e,
          { current: u } = r.useRef(void 0 !== t),
          [s, i] = r.useState(n),
          l = u ? t : s;
        {
          r.useEffect(() => {}, [c, o, t]);
          const { current: e } = r.useRef(n);
          r.useEffect(() => {
            !u && (JSON.stringify(n), JSON.stringify(e));
          }, [JSON.stringify(n)]);
        }
        return [
          l,
          r.useCallback((e) => {
            u || i(e);
          }, []),
        ];
      }
    },
    1182: (e, t, n) => {
      var r;
      n.d(t, { A: () => s });
      var o = n(9729);
      let c = 0;
      const u = { ...(r || (r = n.t(o, 2))) }.useId;
      function s(e) {
        if (void 0 !== u) {
          const t = u();
          return e ?? t;
        }
        return (function (e) {
          const [t, n] = o.useState(e),
            r = e || t;
          return (
            o.useEffect(() => {
              null == t && ((c += 1), n(`mui-${c}`));
            }, [t]),
            r
          );
        })(e);
      }
    },
    1403: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(3446);
      const o = function (e, t, n) {
        return void 0 === e || (0, r.A)(e)
          ? t
          : { ...t, ownerState: { ...t.ownerState, ...n } };
      };
    },
    1590: (e, t, n) => {
      function r(e, t, n, r) {
        const o = e[t];
        if (null == o || !Number.isInteger(o)) {
          const e = (function (e) {
            const t = typeof e;
            switch (t) {
              case 'number':
                return Number.isNaN(e)
                  ? 'NaN'
                  : Number.isFinite(e)
                    ? e !== Math.floor(e)
                      ? 'float'
                      : 'number'
                    : 'Infinity';
              case 'object':
                return null === e ? 'null' : e.constructor.name;
              default:
                return t;
            }
          })(o);
          return new RangeError(
            `Invalid ${r} \`${t}\` of type \`${e}\` supplied to \`${n}\`, expected \`integer\`.`
          );
        }
        return null;
      }
      function o(e, t, n, o) {
        return void 0 === e[t] ? null : r(e, t, n, o);
      }
      function c() {
        return null;
      }
      (n.d(t, { A: () => u }), (o.isRequired = r), (c.isRequired = c));
      const u = o;
    },
    3058: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(9729);
      const o = 'undefined' != typeof window ? r.useLayoutEffect : r.useEffect;
    },
    3088: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(9729);
      function o(e) {
        return parseInt(r.version, 10) >= 19
          ? e?.props?.ref || null
          : e?.ref || null;
      }
    },
    3140: (e, t, n) => {
      function r(e, t, n = void 0) {
        const r = {};
        for (const o in e) {
          const c = e[o];
          let u = '',
            s = !0;
          for (let e = 0; e < c.length; e += 1) {
            const r = c[e];
            r &&
              ((u += (!0 === s ? '' : ' ') + t(r)),
              (s = !1),
              n && n[r] && (u += ' ' + n[r]));
          }
          r[o] = u;
        }
        return r;
      }
      n.d(t, { A: () => r });
    },
    3252: (e, t, n) => {
      n.d(t, { A: () => o });
      const r = (e) => e,
        o = (() => {
          let e = r;
          return {
            configure(t) {
              e = t;
            },
            generate: (t) => e(t),
            reset() {
              e = r;
            },
          };
        })();
    },
    3262: (e, t, n) => {
      function r(e, t = 166) {
        let n;
        function r(...r) {
          (clearTimeout(n),
            (n = setTimeout(() => {
              e.apply(this, r);
            }, t)));
        }
        return (
          (r.clear = () => {
            clearTimeout(n);
          }),
          r
        );
      }
      n.d(t, { A: () => r });
    },
    3380: (e, t, n) => {
      function r(e, t) {
        const n = t ? { ...t.propTypes } : null;
        return (t) =>
          (r, o, c, u, s, ...i) => {
            const l = s || o,
              a = n?.[l];
            if (a) {
              const e = a(r, o, c, u, s, ...i);
              if (e) return e;
            }
            return void 0 === r[o] || r[t]
              ? null
              : new Error(
                  `The prop \`${l}\` of \`${e}\` can only be used together with the \`${t}\` prop.`
                );
          };
      }
      n.d(t, { A: () => r });
    },
    3446: (e, t, n) => {
      n.d(t, { A: () => r });
      const r = function (e) {
        return 'string' == typeof e;
      };
    },
    3784: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(9729);
      function o(...e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null == e) return null;
              if ('function' == typeof e) {
                const n = e,
                  r = n(t);
                return 'function' == typeof r
                  ? r
                  : () => {
                      n(null);
                    };
              }
              return (
                (e.current = t),
                () => {
                  e.current = null;
                }
              );
            });
            return () => {
              n.forEach((e) => e?.());
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  (t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e)));
                },
          e
        );
      }
    },
    4006: (e, t, n) => {
      n.d(t, { Ay: () => c });
      var r = n(3252);
      const o = {
        active: 'active',
        checked: 'checked',
        completed: 'completed',
        disabled: 'disabled',
        error: 'error',
        expanded: 'expanded',
        focused: 'focused',
        focusVisible: 'focusVisible',
        open: 'open',
        readOnly: 'readOnly',
        required: 'required',
        selected: 'selected',
      };
      function c(e, t, n = 'Mui') {
        const c = o[t];
        return c ? `${n}-${c}` : `${r.A.generate(e)}-${t}`;
      }
    },
    4150: (e, t, n) => {
      function r(e, t) {
        'function' == typeof e ? e(t) : e && (e.current = t);
      }
      n.d(t, { A: () => r });
    },
    4222: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(3784),
        o = n(1403),
        c = n(5925),
        u = n(6126);
      const s = function (e) {
        const {
            elementType: t,
            externalSlotProps: n,
            ownerState: s,
            skipResolvingSlotProps: i = !1,
            ...l
          } = e,
          a = i ? {} : (0, u.A)(n, s),
          { props: f, internalRef: d } = (0, c.A)({
            ...l,
            externalSlotProps: a,
          }),
          p = (0, r.A)(d, a?.ref, e.additionalProps?.ref);
        return (0, o.A)(t, { ...f, ref: p }, s);
      };
    },
    4728: (e, t, n) => {
      n.d(t, { A: () => c });
      var r = n(9729),
        o = n(3058);
      const c = function (e) {
        const t = r.useRef(e);
        return (
          (0, o.A)(() => {
            t.current = e;
          }),
          r.useRef((...e) => (0, t.current)(...e)).current
        );
      };
    },
    5120: (e, t, n) => {
      function r(e) {
        if ('string' != typeof e)
          throw new Error(
            'MUI: `capitalize(string)` expects a string argument.'
          );
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      n.d(t, { A: () => r });
    },
    5466: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(2736);
      const o = (0, n(8766).A)(r.elementType, function (e, t, n, r, o) {
        const c = e[t],
          u = o || t;
        if (null == c || 'undefined' == typeof window) return null;
        let s;
        return (
          'function' != typeof c ||
            (function (e) {
              const { prototype: t = {} } = e;
              return Boolean(t.isReactComponent);
            })(c) ||
            (s =
              'Did you accidentally provide a plain function component instead?'),
          void 0 !== s
            ? new Error(
                `Invalid ${r} \`${u}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`
              )
            : null
        );
      });
    },
    5590: (e, t, n) => {
      function r(e) {
        return (e && e.ownerDocument) || document;
      }
      n.d(t, { A: () => r });
    },
    5710: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(4006);
      function o(e, t, n = 'Mui') {
        const o = {};
        return (
          t.forEach((t) => {
            o[t] = (0, r.Ay)(e, t, n);
          }),
          o
        );
      }
    },
    5830: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(9729);
      function o(e, t) {
        return (
          r.isValidElement(e) &&
          -1 !== t.indexOf(e.type.muiName ?? e.type?._payload?.value?.muiName)
        );
      }
    },
    5925: (e, t, n) => {
      n.d(t, { A: () => u });
      var r = n(3526),
        o = n(9716);
      const c = function (e) {
          if (void 0 === e) return {};
          const t = {};
          return (
            Object.keys(e)
              .filter(
                (t) => !(t.match(/^on[A-Z]/) && 'function' == typeof e[t])
              )
              .forEach((n) => {
                t[n] = e[n];
              }),
            t
          );
        },
        u = function (e) {
          const {
            getSlotProps: t,
            additionalProps: n,
            externalSlotProps: u,
            externalForwardedProps: s,
            className: i,
          } = e;
          if (!t) {
            const e = (0, r.A)(n?.className, i, s?.className, u?.className),
              t = { ...n?.style, ...s?.style, ...u?.style },
              o = { ...n, ...s, ...u };
            return (
              e.length > 0 && (o.className = e),
              Object.keys(t).length > 0 && (o.style = t),
              { props: o, internalRef: void 0 }
            );
          }
          const l = (0, o.A)({ ...s, ...u }),
            a = c(u),
            f = c(s),
            d = t(l),
            p = (0, r.A)(
              d?.className,
              n?.className,
              i,
              s?.className,
              u?.className
            ),
            y = { ...d?.style, ...n?.style, ...s?.style, ...u?.style },
            m = { ...d, ...n, ...f, ...a };
          return (
            p.length > 0 && (m.className = p),
            Object.keys(y).length > 0 && (m.style = y),
            { props: m, internalRef: d.ref }
          );
        };
    },
    6126: (e, t, n) => {
      n.d(t, { A: () => r });
      const r = function (e, t, n) {
        return 'function' == typeof e ? e(t, n) : e;
      };
    },
    6278: (e, t, n) => {
      function r(e, t, n, r, o) {
        const c = e[t],
          u = o || t;
        return null == c
          ? null
          : c && 1 !== c.nodeType
            ? new Error(
                `Invalid ${r} \`${u}\` supplied to \`${n}\`. Expected an HTMLElement.`
              )
            : null;
      }
      n.d(t, { A: () => r });
    },
    6334: (e, t, n) => {
      n.d(t, { A: () => u });
      var r = n(5395);
      function o(e, t = '') {
        return e.displayName || e.name || t;
      }
      function c(e, t, n) {
        const r = o(t);
        return e.displayName || ('' !== r ? `${n}(${r})` : n);
      }
      function u(e) {
        if (null != e) {
          if ('string' == typeof e) return e;
          if ('function' == typeof e) return o(e, 'Component');
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case r.vM:
                return c(e, e.render, 'ForwardRef');
              case r.lD:
                return c(e, e.type, 'memo');
              default:
                return;
            }
        }
      }
    },
    6382: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(2736);
      const o = r.oneOfType([r.func, r.object]);
    },
    6394: (e, t, n) => {
      function r(...e) {
        return e.reduce(
          (e, t) =>
            null == t
              ? e
              : function (...n) {
                  (e.apply(this, n), t.apply(this, n));
                },
          () => {}
        );
      }
      n.d(t, { A: () => r });
    },
    6580: (e, t, n) => {
      function r(e) {
        try {
          return e.matches(':focus-visible');
        } catch (t) {
          /jsdom/.test(window.navigator.userAgent);
        }
        return !1;
      }
      n.d(t, { A: () => r });
    },
    6966: (e, t, n) => {
      n.d(t, { A: () => s, Q: () => c });
      var r = n(9729),
        o = n(5395);
      function c(e) {
        if ('object' != typeof e || null === e) return !1;
        const t = Object.getPrototypeOf(e);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      }
      function u(e) {
        if (r.isValidElement(e) || (0, o.Hy)(e) || !c(e)) return e;
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            t[n] = u(e[n]);
          }),
          t
        );
      }
      function s(e, t, n = { clone: !0 }) {
        const i = n.clone ? { ...e } : e;
        return (
          c(e) &&
            c(t) &&
            Object.keys(t).forEach((l) => {
              r.isValidElement(t[l]) || (0, o.Hy)(t[l])
                ? (i[l] = t[l])
                : c(t[l]) &&
                    Object.prototype.hasOwnProperty.call(e, l) &&
                    c(e[l])
                  ? (i[l] = s(e[l], t[l], n))
                  : n.clone
                    ? (i[l] = c(t[l]) ? u(t[l]) : t[l])
                    : (i[l] = t[l]);
            }),
          i
        );
      }
    },
    7250: (e, t, n) => {
      n.d(t, { A: () => o });
      const r = 'exact-prop: ​';
      function o(e) {
        return {
          ...e,
          [r]: (t) => {
            const n = Object.keys(t).filter((t) => !e.hasOwnProperty(t));
            return n.length > 0
              ? new Error(
                  `The following props are not supported: ${n.map((e) => `\`${e}\``).join(', ')}. Please remove them.`
                )
              : null;
          },
        };
      }
    },
    7416: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(3526);
      function o(e, t, n = !1) {
        const c = { ...t };
        for (const u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            const s = u;
            if ('components' === s || 'slots' === s)
              c[s] = { ...e[s], ...c[s] };
            else if ('componentsProps' === s || 'slotProps' === s) {
              const r = e[s],
                u = t[s];
              if (u)
                if (r) {
                  c[s] = { ...u };
                  for (const e in r)
                    if (Object.prototype.hasOwnProperty.call(r, e)) {
                      const t = e;
                      c[s][t] = o(r[t], u[t], n);
                    }
                } else c[s] = u;
              else c[s] = r || {};
            } else
              'className' === s && n && t.className
                ? (c.className = (0, r.A)(e?.className, t?.className))
                : 'style' === s && n && t.style
                  ? (c.style = { ...e?.style, ...t?.style })
                  : void 0 === c[s] && (c[s] = e[s]);
          }
        return c;
      }
    },
    7526: (e, t, n) => {
      function r(e = window) {
        const t = e.document.documentElement.clientWidth;
        return e.innerWidth - t;
      }
      n.d(t, { A: () => r });
    },
    7576: (e, t, n) => {
      n.d(t, { A: () => c });
      var r = n(9729);
      const o = {};
      function c(e, t) {
        const n = r.useRef(o);
        return (n.current === o && (n.current = e(t)), n);
      }
    },
    7894: (e, t, n) => {
      n.d(t, { A: () => r });
      const r = function (
        e,
        t = Number.MIN_SAFE_INTEGER,
        n = Number.MAX_SAFE_INTEGER
      ) {
        return Math.max(t, Math.min(e, n));
      };
    },
    8098: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(2736),
        o = n(8766);
      function c(e, t, n, r, o) {
        const c = e[t],
          u = o || t;
        if (null == c || 'undefined' == typeof window) return null;
        let s;
        const i = c.type;
        return (
          'function' != typeof i ||
            (function (e) {
              const { prototype: t = {} } = e;
              return Boolean(t.isReactComponent);
            })(i) ||
            (s =
              'Did you accidentally use a plain function component for an element instead?'),
          void 0 !== s
            ? new Error(
                `Invalid ${r} \`${u}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`
              )
            : null
        );
      }
      const u = (0, o.A)(r.element, c);
      u.isRequired = (0, o.A)(r.element.isRequired, c);
      const s = u;
    },
    8766: (e, t, n) => {
      function r(e, t) {
        return function (...n) {
          return e(...n) || t(...n);
        };
      }
      n.d(t, { A: () => r });
    },
    9716: (e, t, n) => {
      n.d(t, { A: () => r });
      const r = function (e, t = []) {
        if (void 0 === e) return {};
        const n = {};
        return (
          Object.keys(e)
            .filter(
              (n) =>
                n.match(/^on[A-Z]/) &&
                'function' == typeof e[n] &&
                !t.includes(n)
            )
            .forEach((t) => {
              n[t] = e[t];
            }),
          n
        );
      };
    },
    9863: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(7576),
        o = n(9729);
      const c = [];
      class u {
        static create() {
          return new u();
        }
        currentId = null;
        start(e, t) {
          (this.clear(),
            (this.currentId = setTimeout(() => {
              ((this.currentId = null), t());
            }, e)));
        }
        clear = () => {
          null !== this.currentId &&
            (clearTimeout(this.currentId), (this.currentId = null));
        };
        disposeEffect = () => this.clear;
      }
      function s() {
        const e = (0, r.A)(u.create).current;
        var t;
        return ((t = e.disposeEffect), o.useEffect(t, c), e);
      }
    },
  },
]);
