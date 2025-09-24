'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [607],
  {
    398(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(5590);
      function o(n) {
        return (0, r.A)(n).defaultView || window;
      }
    },
    1070(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(9729);
      function o(n) {
        const { controlled: t, default: e, name: o, state: u = 'value' } = n,
          { current: c } = r.useRef(void 0 !== t),
          [i, s] = r.useState(e),
          l = c ? t : i;
        {
          r.useEffect(() => {}, [u, o, t]);
          const { current: n } = r.useRef(e);
          r.useEffect(() => {
            !c && (JSON.stringify(e), JSON.stringify(n));
          }, [JSON.stringify(e)]);
        }
        return [
          l,
          r.useCallback((n) => {
            c || s(n);
          }, []),
        ];
      }
    },
    1182(n, t, e) {
      var r;
      e.d(t, { A: () => i });
      var o = e(9729);
      let u = 0;
      const c = { ...(r || (r = e.t(o, 2))) }.useId;
      function i(n) {
        if (void 0 !== c) {
          const t = c();
          return n ?? t;
        }
        return ((n) => {
          const [t, e] = o.useState(n),
            r = n || t;
          return (
            o.useEffect(() => {
              null == t && ((u += 1), e(`mui-${u}`));
            }, [t]),
            r
          );
        })(n);
      }
    },
    1403(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(3446);
      const o = (n, t, e) =>
        void 0 === n || (0, r.A)(n)
          ? t
          : { ...t, ownerState: { ...t.ownerState, ...e } };
    },
    1590(n, t, e) {
      function r(n, t, e, r) {
        const o = n[t];
        if (null == o || !Number.isInteger(o)) {
          const n = ((n) => {
            const t = typeof n;
            switch (t) {
              case 'number':
                return Number.isNaN(n)
                  ? 'NaN'
                  : Number.isFinite(n)
                    ? n !== Math.floor(n)
                      ? 'float'
                      : 'number'
                    : 'Infinity';
              case 'object':
                return null === n ? 'null' : n.constructor.name;
              default:
                return t;
            }
          })(o);
          return new RangeError(
            `Invalid ${r} \`${t}\` of type \`${n}\` supplied to \`${e}\`, expected \`integer\`.`
          );
        }
        return null;
      }
      function o(n, t, e, o) {
        return void 0 === n[t] ? null : r(n, t, e, o);
      }
      function u() {
        return null;
      }
      (e.d(t, { A: () => c }), (o.isRequired = r), (u.isRequired = u));
      const c = o;
    },
    3058(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(9729);
      const o = 'undefined' != typeof window ? r.useLayoutEffect : r.useEffect;
    },
    3088(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(9729);
      function o(n) {
        return parseInt(r.version, 10) >= 19
          ? n?.props?.ref || null
          : n?.ref || null;
      }
    },
    3140(n, t, e) {
      function r(n, t, e = void 0) {
        const r = {};
        for (const o in n) {
          const u = n[o];
          let c = '',
            i = !0;
          for (let n = 0; n < u.length; n += 1) {
            const r = u[n];
            r &&
              ((c += (!0 === i ? '' : ' ') + t(r)),
              (i = !1),
              e && e[r] && (c += ' ' + e[r]));
          }
          r[o] = c;
        }
        return r;
      }
      e.d(t, { A: () => r });
    },
    3252(n, t, e) {
      e.d(t, { A: () => o });
      const r = (n) => n,
        o = (() => {
          let n = r;
          return {
            configure(t) {
              n = t;
            },
            generate(t) {
              return n(t);
            },
            reset() {
              n = r;
            },
          };
        })();
    },
    3262(n, t, e) {
      function r(n, t = 166) {
        let e;
        function r(...r) {
          (clearTimeout(e),
            (e = setTimeout(() => {
              n.apply(this, r);
            }, t)));
        }
        return (
          (r.clear = () => {
            clearTimeout(e);
          }),
          r
        );
      }
      e.d(t, { A: () => r });
    },
    3380(n, t, e) {
      function r(n, t) {
        const e = t ? { ...t.propTypes } : null;
        return (t) =>
          (r, o, u, c, i, ...s) => {
            const l = i || o,
              f = e?.[l];
            if (f) {
              const n = f(r, o, u, c, i, ...s);
              if (n) return n;
            }
            return void 0 === r[o] || r[t]
              ? null
              : new Error(
                  `The prop \`${l}\` of \`${n}\` can only be used together with the \`${t}\` prop.`
                );
          };
      }
      e.d(t, { A: () => r });
    },
    3446(n, t, e) {
      e.d(t, { A: () => r });
      const r = (n) => 'string' == typeof n;
    },
    3784(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(9729);
      function o(...n) {
        const t = r.useRef(void 0),
          e = r.useCallback((t) => {
            const e = n.map((n) => {
              if (null == n) return null;
              if ('function' == typeof n) {
                const e = n,
                  r = e(t);
                return 'function' == typeof r
                  ? r
                  : () => {
                      e(null);
                    };
              }
              return (
                (n.current = t),
                () => {
                  n.current = null;
                }
              );
            });
            return () => {
              e.forEach((n) => n?.());
            };
          }, n);
        return r.useMemo(
          () =>
            n.every((n) => null == n)
              ? null
              : (n) => {
                  (t.current && (t.current(), (t.current = void 0)),
                    null != n && (t.current = e(n)));
                },
          n
        );
      }
    },
    4006(n, t, e) {
      e.d(t, { Ay: () => u });
      var r = e(3252);
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
      function u(n, t, e = 'Mui') {
        const u = o[t];
        return u ? `${e}-${u}` : `${r.A.generate(n)}-${t}`;
      }
    },
    4150(n, t, e) {
      function r(n, t) {
        'function' == typeof n ? n(t) : n && (n.current = t);
      }
      e.d(t, { A: () => r });
    },
    4222(n, t, e) {
      e.d(t, { A: () => i });
      var r = e(3784),
        o = e(1403),
        u = e(5925),
        c = e(6126);
      const i = (n) => {
        const {
            elementType: t,
            externalSlotProps: e,
            ownerState: i,
            skipResolvingSlotProps: s = !1,
            ...l
          } = n,
          f = s ? {} : (0, c.A)(e, i),
          { props: a, internalRef: d } = (0, u.A)({
            ...l,
            externalSlotProps: f,
          }),
          p = (0, r.A)(d, f?.ref, n.additionalProps?.ref);
        return (0, o.A)(t, { ...a, ref: p }, i);
      };
    },
    4728(n, t, e) {
      e.d(t, { A: () => u });
      var r = e(9729),
        o = e(3058);
      const u = (n) => {
        const t = r.useRef(n);
        return (
          (0, o.A)(() => {
            t.current = n;
          }),
          r.useRef((...n) => (0, t.current)(...n)).current
        );
      };
    },
    5120(n, t, e) {
      function r(n) {
        if ('string' != typeof n)
          throw new Error(
            'MUI: `capitalize(string)` expects a string argument.'
          );
        return n.charAt(0).toUpperCase() + n.slice(1);
      }
      e.d(t, { A: () => r });
    },
    5466(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(2736);
      const o = (0, e(8766).A)(r.elementType, (n, t, e, r, o) => {
        const u = n[t],
          c = o || t;
        if (null == u || 'undefined' == typeof window) return null;
        let i;
        return (
          'function' != typeof u ||
            ((n) => {
              const { prototype: t = {} } = n;
              return Boolean(t.isReactComponent);
            })(u) ||
            (i =
              'Did you accidentally provide a plain function component instead?'),
          void 0 !== i
            ? new Error(
                `Invalid ${r} \`${c}\` supplied to \`${e}\`. Expected an element type that can hold a ref. ${i} For more information see https://mui.com/r/caveat-with-refs-guide`
              )
            : null
        );
      });
    },
    5590(n, t, e) {
      function r(n) {
        return (n && n.ownerDocument) || document;
      }
      e.d(t, { A: () => r });
    },
    5710(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(4006);
      function o(n, t, e = 'Mui') {
        const o = {};
        return (
          t.forEach((t) => {
            o[t] = (0, r.Ay)(n, t, e);
          }),
          o
        );
      }
    },
    5830(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(9729);
      function o(n, t) {
        return (
          r.isValidElement(n) &&
          -1 !== t.indexOf(n.type.muiName ?? n.type?.o?.value?.muiName)
        );
      }
    },
    5925(n, t, e) {
      e.d(t, { A: () => c });
      var r = e(3526),
        o = e(9716);
      const u = (n) => {
          if (void 0 === n) return {};
          const t = {};
          return (
            Object.keys(n)
              .filter(
                (t) => !(t.match(/^on[A-Z]/) && 'function' == typeof n[t])
              )
              .forEach((e) => {
                t[e] = n[e];
              }),
            t
          );
        },
        c = (n) => {
          const {
            getSlotProps: t,
            additionalProps: e,
            externalSlotProps: c,
            externalForwardedProps: i,
            className: s,
          } = n;
          if (!t) {
            const n = (0, r.A)(e?.className, s, i?.className, c?.className),
              t = { ...e?.style, ...i?.style, ...c?.style },
              o = { ...e, ...i, ...c };
            return (
              n.length > 0 && (o.className = n),
              Object.keys(t).length > 0 && (o.style = t),
              { props: o, internalRef: void 0 }
            );
          }
          const l = (0, o.A)({ ...i, ...c }),
            f = u(c),
            a = u(i),
            d = t(l),
            p = (0, r.A)(
              d?.className,
              e?.className,
              s,
              i?.className,
              c?.className
            ),
            v = { ...d?.style, ...e?.style, ...i?.style, ...c?.style },
            m = { ...d, ...e, ...a, ...f };
          return (
            p.length > 0 && (m.className = p),
            Object.keys(v).length > 0 && (m.style = v),
            { props: m, internalRef: d.ref }
          );
        };
    },
    6126(n, t, e) {
      e.d(t, { A: () => r });
      const r = (n, t, e) => ('function' == typeof n ? n(t, e) : n);
    },
    6278(n, t, e) {
      function r(n, t, e, r, o) {
        const u = n[t],
          c = o || t;
        return null == u
          ? null
          : u && 1 !== u.nodeType
            ? new Error(
                `Invalid ${r} \`${c}\` supplied to \`${e}\`. Expected an HTMLElement.`
              )
            : null;
      }
      e.d(t, { A: () => r });
    },
    6334(n, t, e) {
      e.d(t, { A: () => c });
      var r = e(5395);
      function o(n, t = '') {
        return n.displayName || n.name || t;
      }
      function u(n, t, e) {
        const r = o(t);
        return n.displayName || ('' !== r ? `${e}(${r})` : e);
      }
      function c(n) {
        if (null != n) {
          if ('string' == typeof n) return n;
          if ('function' == typeof n) return o(n, 'Component');
          if ('object' == typeof n)
            switch (n.$$typeof) {
              case r.vM:
                return u(n, n.render, 'ForwardRef');
              case r.lD:
                return u(n, n.type, 'memo');
              default:
                return;
            }
        }
      }
    },
    6382(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(2736);
      const o = r.oneOfType([r.func, r.object]);
    },
    6394(n, t, e) {
      function r(...n) {
        return n.reduce(
          (n, t) =>
            null == t
              ? n
              : function (...e) {
                  (n.apply(this, e), t.apply(this, e));
                },
          () => {}
        );
      }
      e.d(t, { A: () => r });
    },
    6580(n, t, e) {
      function r(n) {
        try {
          return n.matches(':focus-visible');
        } catch (t) {
          /jsdom/.test(window.navigator.userAgent);
        }
        return !1;
      }
      e.d(t, { A: () => r });
    },
    6966(n, t, e) {
      e.d(t, { A: () => i, Q: () => u });
      var r = e(9729),
        o = e(5395);
      function u(n) {
        if ('object' != typeof n || null === n) return !1;
        const t = Object.getPrototypeOf(n);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in n ||
          Symbol.iterator in n
        );
      }
      function c(n) {
        if (r.isValidElement(n) || (0, o.Hy)(n) || !u(n)) return n;
        const t = {};
        return (
          Object.keys(n).forEach((e) => {
            t[e] = c(n[e]);
          }),
          t
        );
      }
      function i(n, t, e = { clone: !0 }) {
        const s = e.clone ? { ...n } : n;
        return (
          u(n) &&
            u(t) &&
            Object.keys(t).forEach((l) => {
              r.isValidElement(t[l]) || (0, o.Hy)(t[l])
                ? (s[l] = t[l])
                : u(t[l]) && {}.hasOwnProperty.call(n, l) && u(n[l])
                  ? (s[l] = i(n[l], t[l], e))
                  : e.clone
                    ? (s[l] = u(t[l]) ? c(t[l]) : t[l])
                    : (s[l] = t[l]);
            }),
          s
        );
      }
    },
    7250(n, t, e) {
      e.d(t, { A: () => o });
      const r = 'exact-prop: ​';
      function o(n) {
        return {
          ...n,
          [r](t) {
            const e = Object.keys(t).filter((t) => !n.hasOwnProperty(t));
            return e.length > 0
              ? new Error(
                  `The following props are not supported: ${e.map((n) => `\`${n}\``).join(', ')}. Please remove them.`
                )
              : null;
          },
        };
      }
    },
    7416(n, t, e) {
      e.d(t, { A: () => o });
      var r = e(3526);
      function o(n, t, e = !1) {
        const u = { ...t };
        for (const c in n)
          if ({}.hasOwnProperty.call(n, c)) {
            const i = c;
            if ('components' === i || 'slots' === i)
              u[i] = { ...n[i], ...u[i] };
            else if ('componentsProps' === i || 'slotProps' === i) {
              const r = n[i],
                c = t[i];
              if (c)
                if (r) {
                  u[i] = { ...c };
                  for (const n in r)
                    if ({}.hasOwnProperty.call(r, n)) {
                      const t = n;
                      u[i][t] = o(r[t], c[t], e);
                    }
                } else u[i] = c;
              else u[i] = r || {};
            } else
              'className' === i && e && t.className
                ? (u.className = (0, r.A)(n?.className, t?.className))
                : 'style' === i && e && t.style
                  ? (u.style = { ...n?.style, ...t?.style })
                  : void 0 === u[i] && (u[i] = n[i]);
          }
        return u;
      }
    },
    7526(n, t, e) {
      function r(n = window) {
        const t = n.document.documentElement.clientWidth;
        return n.innerWidth - t;
      }
      e.d(t, { A: () => r });
    },
    7576(n, t, e) {
      e.d(t, { A: () => u });
      var r = e(9729);
      const o = {};
      function u(n, t) {
        const e = r.useRef(o);
        return (e.current === o && (e.current = n(t)), e);
      }
    },
    7894(n, t, e) {
      e.d(t, { A: () => r });
      const r = (n, t = Number.MIN_SAFE_INTEGER, e = Number.MAX_SAFE_INTEGER) =>
        Math.max(t, Math.min(n, e));
    },
    8098(n, t, e) {
      e.d(t, { A: () => i });
      var r = e(2736),
        o = e(8766);
      function u(n, t, e, r, o) {
        const u = n[t],
          c = o || t;
        if (null == u || 'undefined' == typeof window) return null;
        let i;
        const s = u.type;
        return (
          'function' != typeof s ||
            ((n) => {
              const { prototype: t = {} } = n;
              return Boolean(t.isReactComponent);
            })(s) ||
            (i =
              'Did you accidentally use a plain function component for an element instead?'),
          void 0 !== i
            ? new Error(
                `Invalid ${r} \`${c}\` supplied to \`${e}\`. Expected an element that can hold a ref. ${i} For more information see https://mui.com/r/caveat-with-refs-guide`
              )
            : null
        );
      }
      const c = (0, o.A)(r.element, u);
      c.isRequired = (0, o.A)(r.element.isRequired, u);
      const i = c;
    },
    8766(n, t, e) {
      function r(n, t) {
        return (...e) => n(...e) || t(...e);
      }
      e.d(t, { A: () => r });
    },
    9716(n, t, e) {
      e.d(t, { A: () => r });
      const r = (n, t = []) => {
        if (void 0 === n) return {};
        const e = {};
        return (
          Object.keys(n)
            .filter(
              (e) =>
                e.match(/^on[A-Z]/) &&
                'function' == typeof n[e] &&
                !t.includes(e)
            )
            .forEach((t) => {
              e[t] = n[t];
            }),
          e
        );
      };
    },
    9863(n, t, e) {
      e.d(t, { A: () => i });
      var r = e(7576),
        o = e(9729);
      const u = [];
      class c {
        static create() {
          return new c();
        }
        currentId = null;
        start(n, t) {
          (this.clear(),
            (this.currentId = setTimeout(() => {
              ((this.currentId = null), t());
            }, n)));
        }
        clear = () => {
          null !== this.currentId &&
            (clearTimeout(this.currentId), (this.currentId = null));
        };
        disposeEffect = () => this.clear;
      }
      function i() {
        const n = (0, r.A)(c.create).current;
        var t;
        return ((t = n.disposeEffect), o.useEffect(t, u), n);
      }
    },
  },
]);
