'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [719],
  {
    176: (e, t, r) => {
      function n(e = '') {
        function t(...r) {
          if (!r.length) return '';
          const n = r[0];
          return 'string' != typeof n ||
            n.match(
              /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
            )
            ? `, ${n}`
            : `, var(--${e ? `${e}-` : ''}${n}${t(...r.slice(1))})`;
        }
        return (r, ...n) => `var(--${e ? `${e}-` : ''}${r}${t(...n)})`;
      }
      r.d(t, { A: () => n });
    },
    369: (e, t, r) => {
      r.d(t, { EU: () => c, NI: () => a, vf: () => l, zu: () => o });
      var n = r(4353);
      const o = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        s = {
          keys: ['xs', 'sm', 'md', 'lg', 'xl'],
          up: (e) => `@media (min-width:${o[e]}px)`,
        },
        i = {
          containerQueries: (e) => ({
            up: (t) => {
              let r = 'number' == typeof t ? t : o[t] || t;
              return (
                'number' == typeof r && (r = `${r}px`),
                e
                  ? `@container ${e} (min-width:${r})`
                  : `@container (min-width:${r})`
              );
            },
          }),
        };
      function a(e, t, r) {
        const a = e.theme || {};
        if (Array.isArray(t)) {
          const e = a.breakpoints || s;
          return t.reduce((n, o, s) => ((n[e.up(e.keys[s])] = r(t[s])), n), {});
        }
        if ('object' == typeof t) {
          const e = a.breakpoints || s;
          return Object.keys(t).reduce((s, c) => {
            if ((0, n.ob)(e.keys, c)) {
              const e = (0, n.CT)(a.containerQueries ? a : i, c);
              e && (s[e] = r(t[c], c));
            } else if (Object.keys(e.values || o).includes(c))
              s[e.up(c)] = r(t[c], c);
            else {
              const e = c;
              s[e] = t[e];
            }
            return s;
          }, {});
        }
        return r(t);
      }
      function c(e = {}) {
        const t = e.keys?.reduce((t, r) => ((t[e.up(r)] = {}), t), {});
        return t || {};
      }
      function l(e, t) {
        return e.reduce((e, t) => {
          const r = e[t];
          return ((!r || 0 === Object.keys(r).length) && delete e[t], e);
        }, t);
      }
    },
    573: (e, t, r) => {
      r.d(t, { A: () => n });
      const n = (0, r(3781).Ay)();
    },
    712: (e, t, r) => {
      r.d(t, { A: () => s });
      var n = r(9729),
        o = r(4932);
      function s() {
        const e = n.useContext(o.A);
        return (n.useDebugValue(e), e);
      }
    },
    1516: (e, t, r) => {
      function n(e) {
        const t = {};
        return (
          Object.entries(e).forEach((e) => {
            const [r, n] = e;
            'object' == typeof n &&
              (t[r] =
                `${n.fontStyle ? `${n.fontStyle} ` : ''}${n.fontVariant ? `${n.fontVariant} ` : ''}${n.fontWeight ? `${n.fontWeight} ` : ''}${n.fontStretch ? `${n.fontStretch} ` : ''}${n.fontSize || ''}${n.lineHeight ? `/${n.lineHeight} ` : ''}${n.fontFamily || ''}`);
          }),
          t
        );
      }
      r.d(t, { A: () => n });
    },
    1569: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(2736);
      const o = n.oneOfType([n.number, n.string, n.object, n.array]);
    },
    1803: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(6966);
      const o = (e, t, r, n = []) => {
        let o = e;
        t.forEach((e, s) => {
          s === t.length - 1
            ? Array.isArray(o)
              ? (o[Number(e)] = r)
              : o && 'object' == typeof o && (o[e] = r)
            : o &&
              'object' == typeof o &&
              (o[e] || (o[e] = n.includes(e) ? [] : {}), (o = o[e]));
        });
      };
      function s(e, t) {
        const { prefix: r, shouldSkipGeneratingVar: n } = t || {},
          s = {},
          i = {},
          a = {};
        var c, l;
        return (
          (c = (e, t, c) => {
            if (
              !(
                ('string' != typeof t && 'number' != typeof t) ||
                (n && n(e, t))
              )
            ) {
              const n = `--${r ? `${r}-` : ''}${e.join('-')}`,
                l = ((e, t) =>
                  'number' == typeof t
                    ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(
                        (t) => e.includes(t)
                      ) || e[e.length - 1].toLowerCase().includes('opacity')
                      ? t
                      : `${t}px`
                    : t)(e, t);
              (Object.assign(s, { [n]: l }),
                o(i, e, `var(${n})`, c),
                o(a, e, `var(${n}, ${l})`, c));
            }
          }),
          (l = (e) => 'vars' === e[0]),
          (function e(t, r = [], n = []) {
            Object.entries(t).forEach(([t, o]) => {
              (!l || (l && !l([...r, t]))) &&
                null != o &&
                ('object' == typeof o && Object.keys(o).length > 0
                  ? e(o, [...r, t], Array.isArray(o) ? [...n, t] : n)
                  : c([...r, t], o, n));
            });
          })(e),
          { css: s, vars: i, varsWithDefaults: a }
        );
      }
      const i = function (e, t = {}) {
        const {
            getSelector: r = v,
            disableCssColorScheme: o,
            colorSchemeSelector: i,
            enableContrastVars: a,
          } = t,
          {
            colorSchemes: c = {},
            components: l,
            defaultColorScheme: u = 'light',
            ...d
          } = e,
          { vars: p, css: m, varsWithDefaults: f } = s(d, t);
        let h = f;
        const y = {},
          { [u]: g, ...b } = c;
        if (
          (Object.entries(b || {}).forEach(([e, r]) => {
            const { vars: o, css: i, varsWithDefaults: a } = s(r, t);
            ((h = (0, n.A)(h, a)), (y[e] = { css: i, vars: o }));
          }),
          g)
        ) {
          const { css: e, vars: r, varsWithDefaults: o } = s(g, t);
          ((h = (0, n.A)(h, o)), (y[u] = { css: e, vars: r }));
        }
        function v(t, r) {
          let n = i;
          if (
            ('class' === i && (n = '.%s'),
            'data' === i && (n = '[data-%s]'),
            i?.startsWith('data-') && !i.includes('%s') && (n = `[${i}="%s"]`),
            t)
          ) {
            if ('media' === n) {
              if (e.defaultColorScheme === t) return ':root';
              const n = c[t]?.palette?.mode || t;
              return {
                [`@media (prefers-color-scheme: ${n})`]: { ':root': r },
              };
            }
            if (n)
              return e.defaultColorScheme === t
                ? `:root, ${n.replace('%s', String(t))}`
                : n.replace('%s', String(t));
          }
          return ':root';
        }
        return {
          vars: h,
          generateThemeVars: () => {
            let e = { ...p };
            return (
              Object.entries(y).forEach(([, { vars: t }]) => {
                e = (0, n.A)(e, t);
              }),
              e
            );
          },
          generateStyleSheets: () => {
            const t = [],
              n = e.defaultColorScheme || 'light';
            function s(e, r) {
              Object.keys(r).length &&
                t.push('string' == typeof e ? { [e]: { ...r } } : e);
            }
            s(r(void 0, { ...m }), m);
            const { [n]: i, ...l } = y;
            if (i) {
              const { css: e } = i,
                t = c[n]?.palette?.mode,
                a = !o && t ? { colorScheme: t, ...e } : { ...e };
              s(r(n, { ...a }), a);
            }
            return (
              Object.entries(l).forEach(([e, { css: t }]) => {
                const n = c[e]?.palette?.mode,
                  i = !o && n ? { colorScheme: n, ...t } : { ...t };
                s(r(e, { ...i }), i);
              }),
              a &&
                t.push({
                  ':root': {
                    '--__l-threshold': '0.7',
                    '--__l':
                      'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
                    '--__a':
                      'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
                  },
                }),
              t
            );
          },
        };
      };
    },
    2085: (e, t, r) => {
      r.d(t, { A: () => x });
      var n = r(9729),
        o = r(2736),
        s = r(712),
        i = r(7250),
        a = r(4932);
      const c =
        'function' == typeof Symbol && Symbol.for
          ? Symbol.for('mui.nested')
          : '__THEME_NESTED__';
      var l = r(5813);
      function u(e) {
        const { children: t, theme: r } = e,
          o = (0, s.A)(),
          i = n.useMemo(() => {
            const e =
              null === o
                ? { ...r }
                : (function (e, t) {
                    return 'function' == typeof t ? t(e) : { ...e, ...t };
                  })(o, r);
            return (null != e && (e[c] = null !== o), e);
          }, [r, o]);
        return (0, l.jsx)(a.A.Provider, { value: i, children: t });
      }
      ((u.propTypes = {
        children: o.node,
        theme: o.oneOfType([o.object, o.func]).isRequired,
      }),
        (u.propTypes = (0, i.A)(u.propTypes)));
      const d = u;
      var p = r(9065),
        m = r(4109),
        f = r(9754),
        h = r(6891),
        y = r(3058),
        g = r(1182),
        b = r(6173);
      const v = {};
      function S(e, t, r, o = !1) {
        return n.useMemo(() => {
          const n = (e && t[e]) || t;
          if ('function' == typeof r) {
            const s = r(n),
              i = e ? { ...t, [e]: s } : s;
            return o ? () => i : i;
          }
          return e ? { ...t, [e]: r } : { ...t, ...r };
        }, [e, t, r, o]);
      }
      function A(e) {
        const { children: t, theme: r, themeId: n } = e,
          o = (0, m.A)(v),
          i = (0, s.A)() || v;
        (null === o && 'function' == typeof r) || (n && o && o[n]);
        const a = S(n, o, r),
          c = S(n, i, r, !0),
          u = 'rtl' === (n ? a[n] : a).direction,
          A = (function (e) {
            const t = (0, m.A)(),
              r = (0, g.A)() || '',
              { modularCssLayers: n } = e;
            let o = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
            return (
              (o =
                n && null === t
                  ? 'string' == typeof n
                    ? n.replace(/mui(?!\.)/g, o)
                    : `@layer ${o};`
                  : ''),
              (0, y.A)(() => {
                const e = document.querySelector('head');
                if (!e) return;
                const t = e.firstChild;
                if (o) {
                  if (
                    t &&
                    t.hasAttribute?.('data-mui-layer-order') &&
                    t.getAttribute('data-mui-layer-order') === r
                  )
                    return;
                  const n = document.createElement('style');
                  (n.setAttribute('data-mui-layer-order', r),
                    (n.textContent = o),
                    e.prepend(n));
                } else
                  e.querySelector(
                    `style[data-mui-layer-order="${r}"]`
                  )?.remove();
              }, [o, r]),
              o ? (0, l.jsx)(b.A, { styles: o }) : null
            );
          })(a);
        return (0, l.jsx)(d, {
          theme: c,
          children: (0, l.jsx)(p.T.Provider, {
            value: a,
            children: (0, l.jsx)(f.A, {
              value: u,
              children: (0, l.jsxs)(h.A, {
                value: n ? a[n].components : a.components,
                children: [A, t],
              }),
            }),
          }),
        });
      }
      ((A.propTypes = {
        children: o.node,
        theme: o.oneOfType([o.func, o.object]).isRequired,
        themeId: o.string,
      }),
        (A.propTypes = (0, i.A)(A.propTypes)));
      const x = A;
    },
    2893: (e, t, r) => {
      r.d(t, { A: () => I });
      var n = r(9729),
        o = r(2736),
        s = r(3526),
        i = r(5830),
        a = r(4006),
        c = r(3140),
        l = r(573),
        u = r(8196),
        d = r(3843),
        p = r(4093),
        m = r(9740);
      const f = (e, t, r) => {
        const n = e.keys[0];
        var o, s;
        Array.isArray(t)
          ? t.forEach((t, n) => {
              r((t, r) => {
                n <= e.keys.length - 1 &&
                  (0 === n ? Object.assign(t, r) : (t[e.up(e.keys[n])] = r));
              }, t);
            })
          : t && 'object' == typeof t
            ? (Object.keys(t).length > e.keys.length
                ? e.keys
                : ((o = e.keys),
                  (s = Object.keys(t)),
                  o.filter((e) => s.includes(e)))
              ).forEach((o) => {
                if (e.keys.includes(o)) {
                  const s = t[o];
                  void 0 !== s &&
                    r((t, r) => {
                      n === o ? Object.assign(t, r) : (t[e.up(o)] = r);
                    }, s);
                }
              })
            : ('number' != typeof t && 'string' != typeof t) ||
              r((e, t) => {
                Object.assign(e, t);
              }, t);
      };
      function h(e) {
        return `--Grid-${e}Spacing`;
      }
      function y(e) {
        return `--Grid-parent-${e}Spacing`;
      }
      const g = '--Grid-columns',
        b = '--Grid-parent-columns',
        v = ({ theme: e, ownerState: t }) => {
          const r = {};
          return (
            f(e.breakpoints, t.size, (e, t) => {
              let n = {};
              ('grow' === t &&
                (n = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' }),
                'auto' === t &&
                  (n = {
                    flexBasis: 'auto',
                    flexGrow: 0,
                    flexShrink: 0,
                    maxWidth: 'none',
                    width: 'auto',
                  }),
                'number' == typeof t &&
                  (n = {
                    flexGrow: 0,
                    flexBasis: 'auto',
                    width: `calc(100% * ${t} / var(${b}) - (var(${b}) - ${t}) * (var(${y('column')}) / var(${b})))`,
                  }),
                e(r, n));
            }),
            r
          );
        },
        S = ({ theme: e, ownerState: t }) => {
          const r = {};
          return (
            f(e.breakpoints, t.offset, (e, t) => {
              let n = {};
              ('auto' === t && (n = { marginLeft: 'auto' }),
                'number' == typeof t &&
                  (n = {
                    marginLeft:
                      0 === t
                        ? '0px'
                        : `calc(100% * ${t} / var(${b}) + var(${y('column')}) * ${t} / var(${b}))`,
                  }),
                e(r, n));
            }),
            r
          );
        },
        A = ({ theme: e, ownerState: t }) => {
          if (!t.container) return {};
          const r = { [g]: 12 };
          return (
            f(e.breakpoints, t.columns, (e, t) => {
              const n = t ?? 12;
              e(r, { [g]: n, '> *': { [b]: n } });
            }),
            r
          );
        },
        x = ({ theme: e, ownerState: t }) => {
          if (!t.container) return {};
          const r = {};
          return (
            f(e.breakpoints, t.rowSpacing, (t, n) => {
              const o = 'string' == typeof n ? n : e.spacing?.(n);
              t(r, { [h('row')]: o, '> *': { [y('row')]: o } });
            }),
            r
          );
        },
        w = ({ theme: e, ownerState: t }) => {
          if (!t.container) return {};
          const r = {};
          return (
            f(e.breakpoints, t.columnSpacing, (t, n) => {
              const o = 'string' == typeof n ? n : e.spacing?.(n);
              t(r, { [h('column')]: o, '> *': { [y('column')]: o } });
            }),
            r
          );
        },
        $ = ({ theme: e, ownerState: t }) => {
          if (!t.container) return {};
          const r = {};
          return (
            f(e.breakpoints, t.direction, (e, t) => {
              e(r, { flexDirection: t });
            }),
            r
          );
        },
        k = ({ ownerState: e }) => ({
          minWidth: 0,
          boxSizing: 'border-box',
          ...(e.container && {
            display: 'flex',
            flexWrap: 'wrap',
            ...(e.wrap && 'wrap' !== e.wrap && { flexWrap: e.wrap }),
            gap: `var(${h('row')}) var(${h('column')})`,
          }),
        }),
        C = (e) => {
          const t = [];
          return (
            Object.entries(e).forEach(([e, r]) => {
              !1 !== r && void 0 !== r && t.push(`grid-${e}-${String(r)}`);
            }),
            t
          );
        },
        T = (e, t = 'xs') => {
          function r(e) {
            return (
              void 0 !== e &&
              (('string' == typeof e && !Number.isNaN(Number(e))) ||
                ('number' == typeof e && e > 0))
            );
          }
          if (r(e)) return [`spacing-${t}-${String(e)}`];
          if ('object' == typeof e && !Array.isArray(e)) {
            const t = [];
            return (
              Object.entries(e).forEach(([e, n]) => {
                r(n) && t.push(`spacing-${e}-${String(n)}`);
              }),
              t
            );
          }
          return [];
        },
        j = (e) =>
          void 0 === e
            ? []
            : 'object' == typeof e
              ? Object.entries(e).map(([e, t]) => `direction-${e}-${t}`)
              : [`direction-xs-${String(e)}`],
        M = [];
      var O = r(5813);
      const W = (0, m.A)(),
        L = (0, l.A)('div', { name: 'MuiGrid', slot: 'Root' });
      function E(e) {
        return (0, u.A)({ props: e, name: 'MuiGrid', defaultTheme: W });
      }
      function I(e = {}) {
        const {
          createStyledComponent: t = L,
          useThemeProps: r = E,
          useTheme: l = d.A,
          componentName: u = 'MuiGrid',
        } = e;
        function m(e, t, r = () => !0) {
          const n = {};
          return (
            null === e ||
              (Array.isArray(e)
                ? e.forEach((e, o) => {
                    null !== e && r(e) && t.keys[o] && (n[t.keys[o]] = e);
                  })
                : 'object' == typeof e
                  ? Object.keys(e).forEach((t) => {
                      const o = e[t];
                      null != o && r(o) && (n[t] = o);
                    })
                  : (n[t.keys[0]] = e)),
            n
          );
        }
        const f = t(A, w, x, v, $, k, S),
          h = n.forwardRef(function (e, t) {
            const o = l(),
              d = r(e),
              h = (0, p.A)(d);
            !(function (e, t) {
              const r = [];
              (void 0 !== e.item && (delete e.item, r.push('item')),
                void 0 !== e.zeroMinWidth &&
                  (delete e.zeroMinWidth, r.push('zeroMinWidth')),
                t.keys.forEach((t) => {
                  void 0 !== e[t] && (r.push(t), delete e[t]);
                }),
                r.forEach((e) => {
                  M.includes(e) || M.push(e);
                }));
            })(h, o.breakpoints);
            const {
                className: y,
                children: g,
                columns: b = 12,
                container: v = !1,
                component: S = 'div',
                direction: A = 'row',
                wrap: x = 'wrap',
                size: w = {},
                offset: $ = {},
                spacing: k = 0,
                rowSpacing: W = k,
                columnSpacing: L = k,
                unstable_level: E = 0,
                ...I
              } = h,
              N = m(w, o.breakpoints, (e) => !1 !== e),
              P = m($, o.breakpoints),
              _ = e.columns ?? (E ? void 0 : b),
              R = e.spacing ?? (E ? void 0 : k),
              K = e.rowSpacing ?? e.spacing ?? (E ? void 0 : W),
              G = e.columnSpacing ?? e.spacing ?? (E ? void 0 : L),
              B = {
                ...h,
                level: E,
                columns: _,
                container: v,
                direction: A,
                wrap: x,
                spacing: R,
                rowSpacing: K,
                columnSpacing: G,
                size: N,
                offset: P,
              },
              z = ((e, t) => {
                const {
                    container: r,
                    direction: n,
                    spacing: o,
                    wrap: s,
                    size: i,
                  } = e,
                  l = {
                    root: [
                      'root',
                      r && 'container',
                      'wrap' !== s && `wrap-xs-${String(s)}`,
                      ...j(n),
                      ...C(i),
                      ...(r ? T(o, t.breakpoints.keys[0]) : []),
                    ],
                  };
                return (0, c.A)(l, (e) => (0, a.Ay)(u, e), {});
              })(B, o);
            return (0, O.jsx)(f, {
              ref: t,
              as: S,
              ownerState: B,
              className: (0, s.A)(z.root, y),
              ...I,
              children: n.Children.map(g, (e) =>
                n.isValidElement(e) &&
                (0, i.A)(e, ['Grid']) &&
                v &&
                e.props.container
                  ? n.cloneElement(e, {
                      unstable_level: e.props?.unstable_level ?? E + 1,
                    })
                  : e
              ),
            });
          });
        return (
          (h.propTypes = {
            children: o.node,
            className: o.string,
            columns: o.oneOfType([o.arrayOf(o.number), o.number, o.object]),
            columnSpacing: o.oneOfType([
              o.arrayOf(o.oneOfType([o.number, o.string])),
              o.number,
              o.object,
              o.string,
            ]),
            component: o.elementType,
            container: o.bool,
            direction: o.oneOfType([
              o.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
              o.arrayOf(
                o.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])
              ),
              o.object,
            ]),
            offset: o.oneOfType([
              o.string,
              o.number,
              o.arrayOf(o.oneOfType([o.string, o.number])),
              o.object,
            ]),
            rowSpacing: o.oneOfType([
              o.arrayOf(o.oneOfType([o.number, o.string])),
              o.number,
              o.object,
              o.string,
            ]),
            size: o.oneOfType([
              o.string,
              o.bool,
              o.number,
              o.arrayOf(o.oneOfType([o.string, o.bool, o.number])),
              o.object,
            ]),
            spacing: o.oneOfType([
              o.arrayOf(o.oneOfType([o.number, o.string])),
              o.number,
              o.object,
              o.string,
            ]),
            sx: o.oneOfType([
              o.arrayOf(o.oneOfType([o.func, o.object, o.bool])),
              o.func,
              o.object,
            ]),
            wrap: o.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
          }),
          (h.muiName = 'Grid'),
          h
        );
      }
    },
    3461: (e, t, r) => {
      (r.d(t, { Ay: () => a, EU: () => s, a$: () => o }), r(9729));
      var n = r(5813);
      const o = 'mode',
        s = 'color-scheme',
        i = 'data-color-scheme';
      function a(e) {
        const {
          defaultMode: t = 'system',
          defaultLightColorScheme: r = 'light',
          defaultDarkColorScheme: a = 'dark',
          modeStorageKey: c = o,
          colorSchemeStorageKey: l = s,
          attribute: u = i,
          colorSchemeNode: d = 'document.documentElement',
          nonce: p,
        } = e || {};
        let m = '',
          f = u;
        if (
          ('class' === u && (f = '.%s'),
          'data' === u && (f = '[data-%s]'),
          f.startsWith('.'))
        ) {
          const e = f.substring(1);
          m += `${d}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));\n      ${d}.classList.add('${e}'.replace('%s', colorScheme));`;
        }
        const h = f.match(/\[([^[\]]+)\]/);
        if (h) {
          const [e, t] = h[1].split('=');
          (t ||
            (m += `${d}.removeAttribute('${e}'.replace('%s', light));\n      ${d}.removeAttribute('${e}'.replace('%s', dark));`),
            (m += `\n      ${d}.setAttribute('${e}'.replace('%s', colorScheme), ${t ? `${t}.replace('%s', colorScheme)` : '""'});`));
        } else m += `${d}.setAttribute('${f}', colorScheme);`;
        return (0, n.jsx)(
          'script',
          {
            suppressHydrationWarning: !0,
            nonce: 'undefined' == typeof window ? p : '',
            dangerouslySetInnerHTML: {
              __html: `(function() {\ntry {\n  let colorScheme = '';\n  const mode = localStorage.getItem('${c}') || '${t}';\n  const dark = localStorage.getItem('${l}-dark') || '${a}';\n  const light = localStorage.getItem('${l}-light') || '${r}';\n  if (mode === 'system') {\n    // handle system mode\n    const mql = window.matchMedia('(prefers-color-scheme: dark)');\n    if (mql.matches) {\n      colorScheme = dark\n    } else {\n      colorScheme = light\n    }\n  }\n  if (mode === 'light') {\n    colorScheme = light;\n  }\n  if (mode === 'dark') {\n    colorScheme = dark;\n  }\n  if (colorScheme) {\n    ${m}\n  }\n} catch(e){}})();`,
            },
          },
          'mui-color-scheme-init'
        );
      }
    },
    3781: (e, t, r) => {
      r.d(t, { Ay: () => y });
      var n = r(7682),
        o = r(6966),
        s = r(5120),
        i = r(6334),
        a = r(9740),
        c = r(5625),
        l = r(6060);
      const u = (0, a.A)();
      function d(e) {
        return 'ownerState' !== e && 'theme' !== e && 'sx' !== e && 'as' !== e;
      }
      function p(e, t) {
        return (
          t &&
            e &&
            'object' == typeof e &&
            e.styles &&
            !e.styles.startsWith('@layer') &&
            (e.styles = `@layer ${t}{${String(e.styles)}}`),
          e
        );
      }
      function m(e) {
        return e ? (t, r) => r[e] : null;
      }
      function f(e, t, r) {
        const o = 'function' == typeof t ? t(e) : t;
        if (Array.isArray(o)) return o.flatMap((t) => f(e, t, r));
        if (Array.isArray(o?.variants)) {
          let t;
          if (o.isProcessed) t = r ? p(o.style, r) : o.style;
          else {
            const { variants: e, ...s } = o;
            t = r ? p((0, n.tT)(s), r) : s;
          }
          return h(e, o.variants, [t], r);
        }
        return o?.isProcessed
          ? r
            ? p((0, n.tT)(o.style), r)
            : o.style
          : r
            ? p((0, n.tT)(o), r)
            : o;
      }
      function h(e, t, r = [], o = void 0) {
        let s;
        e: for (let i = 0; i < t.length; i += 1) {
          const a = t[i];
          if ('function' == typeof a.props) {
            if (
              ((s ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
              !a.props(s))
            )
              continue;
          } else
            for (const t in a.props)
              if (e[t] !== a.props[t] && e.ownerState?.[t] !== a.props[t])
                continue e;
          'function' == typeof a.style
            ? ((s ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
              r.push(o ? p((0, n.tT)(a.style(s)), o) : a.style(s)))
            : r.push(o ? p((0, n.tT)(a.style), o) : a.style);
        }
        return r;
      }
      function y(e = {}) {
        const {
          themeId: t,
          defaultTheme: r = u,
          rootShouldForwardProp: a = d,
          slotShouldForwardProp: y = d,
        } = e;
        function v(e) {
          !(function (e, t, r) {
            e.theme = (function (e) {
              for (const t in e) return !1;
              return !0;
            })(e.theme)
              ? r
              : e.theme[t] || e.theme;
          })(e, t, r);
        }
        return (e, t = {}) => {
          (0, n.HX)(e, (e) => e.filter((e) => e !== c.A));
          const {
              name: r,
              slot: u,
              skipVariantsResolver: S,
              skipSx: A,
              overridesResolver: x = m(b(u)),
              ...w
            } = t,
            $ = (r && r.startsWith('Mui')) || u ? 'components' : 'custom',
            k = void 0 !== S ? S : (u && 'Root' !== u && 'root' !== u) || !1,
            C = A || !1;
          let T = d;
          'Root' === u || 'root' === u
            ? (T = a)
            : u
              ? (T = y)
              : (function (e) {
                  return 'string' == typeof e && e.charCodeAt(0) > 96;
                })(e) && (T = void 0);
          const j = (0, n.Ay)(e, {
              shouldForwardProp: T,
              label: g(r, u),
              ...w,
            }),
            M = (e) => {
              if (e.__emotion_real === e) return e;
              if ('function' == typeof e)
                return function (t) {
                  return f(t, e, t.theme.modularCssLayers ? $ : void 0);
                };
              if ((0, o.Q)(e)) {
                const t = (0, l.A)(e);
                return function (e) {
                  return t.variants
                    ? f(e, t, e.theme.modularCssLayers ? $ : void 0)
                    : e.theme.modularCssLayers
                      ? p(t.style, $)
                      : t.style;
                };
              }
              return e;
            },
            O = (...t) => {
              const n = [],
                o = t.map(M),
                a = [];
              if (
                (n.push(v),
                r &&
                  x &&
                  a.push(function (e) {
                    const t = e.theme,
                      n = t.components?.[r]?.styleOverrides;
                    if (!n) return null;
                    const o = {};
                    for (const r in n)
                      o[r] = f(
                        e,
                        n[r],
                        e.theme.modularCssLayers ? 'theme' : void 0
                      );
                    return x(e, o);
                  }),
                r &&
                  !k &&
                  a.push(function (e) {
                    const t = e.theme,
                      n = t?.components?.[r]?.variants;
                    return n
                      ? h(e, n, [], e.theme.modularCssLayers ? 'theme' : void 0)
                      : null;
                  }),
                C || a.push(c.A),
                Array.isArray(o[0]))
              ) {
                const e = o.shift(),
                  t = new Array(n.length).fill(''),
                  r = new Array(a.length).fill('');
                let s;
                ((s = [...t, ...e, ...r]),
                  (s.raw = [...t, ...e.raw, ...r]),
                  n.unshift(s));
              }
              const l = [...n, ...o, ...a],
                d = j(...l);
              return (
                e.muiName && (d.muiName = e.muiName),
                (d.displayName = (function (e, t, r) {
                  return e
                    ? `${e}${(0, s.A)(t || '')}`
                    : `Styled(${(0, i.A)(r)})`;
                })(r, u, e)),
                d
              );
            };
          return (j.withConfig && (O.withConfig = j.withConfig), O);
        };
      }
      function g(e, t) {
        let r;
        return (e && (r = `${e}-${b(t || 'Root')}`), r);
      }
      function b(e) {
        return e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
      }
    },
    3843: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(9740),
        o = r(4109);
      const s = (0, n.A)(),
        i = function (e = s) {
          return (0, o.A)(e);
        };
    },
    4093: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(6966),
        o = r(5577);
      const s = (e) => {
        const t = { systemProps: {}, otherProps: {} },
          r = e?.theme?.unstable_sxConfig ?? o.A;
        return (
          Object.keys(e).forEach((n) => {
            r[n] ? (t.systemProps[n] = e[n]) : (t.otherProps[n] = e[n]);
          }),
          t
        );
      };
      function i(e) {
        const { sx: t, ...r } = e,
          { systemProps: o, otherProps: i } = s(r);
        let a;
        return (
          (a = Array.isArray(t)
            ? [o, ...t]
            : 'function' == typeof t
              ? (...e) => {
                  const r = t(...e);
                  return (0, n.Q)(r) ? { ...o, ...r } : o;
                }
              : { ...o, ...t }),
          { ...i, sx: a }
        );
      }
    },
    4109: (e, t, r) => {
      r.d(t, { A: () => s });
      var n = r(9729),
        o = r(9065);
      const s = function (e = null) {
        const t = n.useContext(o.T);
        return t && ((r = t), 0 !== Object.keys(r).length) ? t : e;
        var r;
      };
    },
    4353: (e, t, r) => {
      function n(e, t) {
        if (!e.containerQueries) return t;
        const r = Object.keys(t)
          .filter((e) => e.startsWith('@container'))
          .sort((e, t) => {
            const r = /min-width:\s*([0-9.]+)/;
            return +(e.match(r)?.[1] || 0) - +(t.match(r)?.[1] || 0);
          });
        return r.length
          ? r.reduce(
              (e, r) => {
                const n = t[r];
                return (delete e[r], (e[r] = n), e);
              },
              { ...t }
            )
          : t;
      }
      function o(e, t) {
        return (
          '@' === t ||
          (t.startsWith('@') &&
            (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/)))
        );
      }
      function s(e, t) {
        const r = t.match(/^@([^/]+)?\/?(.+)?$/);
        if (!r)
          throw new Error(
            `MUI: The provided shorthand (${t}) is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\nFor example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`
          );
        const [, n, o] = r,
          s = Number.isNaN(+n) ? n || 0 : +n;
        return e.containerQueries(o).up(s);
      }
      function i(e) {
        const t = (e, t) =>
          e.replace('@media', t ? `@container ${t}` : '@container');
        function r(r, n) {
          ((r.up = (...r) => t(e.breakpoints.up(...r), n)),
            (r.down = (...r) => t(e.breakpoints.down(...r), n)),
            (r.between = (...r) => t(e.breakpoints.between(...r), n)),
            (r.only = (...r) => t(e.breakpoints.only(...r), n)),
            (r.not = (...r) => {
              const o = t(e.breakpoints.not(...r), n);
              return o.includes('not all and')
                ? o
                    .replace('not all and ', '')
                    .replace('min-width:', 'width<')
                    .replace('max-width:', 'width>')
                    .replace('and', 'or')
                : o;
            }));
        }
        const n = {},
          o = (e) => (r(n, e), n);
        return (r(o), { ...e, containerQueries: o });
      }
      r.d(t, { Ay: () => i, CT: () => s, _S: () => n, ob: () => o });
    },
    4865: (e, t, r) => {
      r.d(t, { A: () => s });
      var n = r(6060);
      const o = { theme: void 0 };
      function s(e) {
        let t, r;
        return function (s) {
          let i = t;
          return (
            (void 0 !== i && s.theme === r) ||
              ((o.theme = s.theme),
              (i = (0, n.A)(e(o))),
              (t = i),
              (r = s.theme)),
            i
          );
        };
      }
    },
    4932: (e, t, r) => {
      r.d(t, { A: () => o });
      const n = r(9729).createContext(null);
      n.displayName = 'ThemeContext';
      const o = n;
    },
    5563: (e, t, r) => {
      r.d(t, { A: () => g });
      var n = r(9729),
        o = r(2736),
        s = r(6297),
        i = r(712),
        a = r(3058),
        c = r(2085),
        l = r(3461);
      function u() {}
      const d = ({ key: e, storageWindow: t }) => (
        t || 'undefined' == typeof window || (t = window),
        {
          get(r) {
            if ('undefined' == typeof window) return;
            if (!t) return r;
            let n;
            try {
              n = t.localStorage.getItem(e);
            } catch {}
            return n || r;
          },
          set: (r) => {
            if (t)
              try {
                t.localStorage.setItem(e, r);
              } catch {}
          },
          subscribe: (r) => {
            if (!t) return u;
            const n = (t) => {
              const n = t.newValue;
              t.key === e && r(n);
            };
            return (
              t.addEventListener('storage', n),
              () => {
                t.removeEventListener('storage', n);
              }
            );
          },
        }
      );
      function p() {}
      function m(e) {
        if (
          'undefined' != typeof window &&
          'function' == typeof window.matchMedia &&
          'system' === e
        )
          return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
      }
      function f(e, t) {
        return 'light' === e.mode ||
          ('system' === e.mode && 'light' === e.systemMode)
          ? t('light')
          : 'dark' === e.mode ||
              ('system' === e.mode && 'dark' === e.systemMode)
            ? t('dark')
            : void 0;
      }
      var h = r(5813);
      const y =
        '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
      function g(e) {
        const {
            themeId: t,
            theme: r = {},
            modeStorageKey: u = l.a$,
            colorSchemeStorageKey: g = l.EU,
            disableTransitionOnChange: b = !1,
            defaultColorScheme: v,
            resolveTheme: S,
          } = e,
          A = {
            allColorSchemes: [],
            colorScheme: void 0,
            darkColorScheme: void 0,
            lightColorScheme: void 0,
            mode: void 0,
            setColorScheme: () => {},
            setMode: () => {},
            systemMode: void 0,
          },
          x = n.createContext(void 0);
        x.displayName = 'ColorSchemeContext';
        const w = {},
          $ = {};
        function k(e) {
          const {
              children: o,
              theme: A,
              modeStorageKey: k = u,
              colorSchemeStorageKey: C = g,
              disableTransitionOnChange: T = b,
              storageManager: j,
              storageWindow: M = 'undefined' == typeof window ? void 0 : window,
              documentNode: O = 'undefined' == typeof document
                ? void 0
                : document,
              colorSchemeNode: W = 'undefined' == typeof document
                ? void 0
                : document.documentElement,
              disableNestedContext: L = !1,
              disableStyleSheetGeneration: E = !1,
              defaultMode: I = 'system',
              forceThemeRerender: N = !1,
              noSsr: P,
            } = e,
            _ = n.useRef(!1),
            R = (0, i.A)(),
            K = n.useContext(x),
            G = !!K && !L,
            B = n.useMemo(() => A || ('function' == typeof r ? r() : r), [A]),
            z = B[t],
            V = z || B,
            { colorSchemes: F = w, components: H = $, cssVarPrefix: D } = V,
            X = Object.keys(F)
              .filter((e) => !!F[e])
              .join(','),
            Y = n.useMemo(() => X.split(','), [X]),
            U = 'string' == typeof v ? v : v.light,
            Q = 'string' == typeof v ? v : v.dark,
            q =
              F[U] && F[Q]
                ? I
                : F[V.defaultColorScheme]?.palette?.mode || V.palette?.mode,
            {
              mode: J,
              setMode: Z,
              systemMode: ee,
              lightColorScheme: te,
              darkColorScheme: re,
              colorScheme: ne,
              setColorScheme: oe,
            } = (function (e) {
              const {
                  defaultMode: t = 'light',
                  defaultLightColorScheme: r,
                  defaultDarkColorScheme: o,
                  supportedColorSchemes: s = [],
                  modeStorageKey: i = l.a$,
                  colorSchemeStorageKey: a = l.EU,
                  storageWindow: c = 'undefined' == typeof window
                    ? void 0
                    : window,
                  storageManager: u = d,
                  noSsr: h = !1,
                } = e,
                y = s.join(','),
                g = s.length > 1,
                b = n.useMemo(
                  () => u?.({ key: i, storageWindow: c }),
                  [u, i, c]
                ),
                v = n.useMemo(
                  () => u?.({ key: `${a}-light`, storageWindow: c }),
                  [u, a, c]
                ),
                S = n.useMemo(
                  () => u?.({ key: `${a}-dark`, storageWindow: c }),
                  [u, a, c]
                ),
                [A, x] = n.useState(() => {
                  const e = b?.get(t) || t,
                    n = v?.get(r) || r,
                    s = S?.get(o) || o;
                  return {
                    mode: e,
                    systemMode: m(e),
                    lightColorScheme: n,
                    darkColorScheme: s,
                  };
                }),
                [w, $] = n.useState(h || !g);
              n.useEffect(() => {
                $(!0);
              }, []);
              const k = (function (e) {
                  return f(e, (t) =>
                    'light' === t
                      ? e.lightColorScheme
                      : 'dark' === t
                        ? e.darkColorScheme
                        : void 0
                  );
                })(A),
                C = n.useCallback(
                  (e) => {
                    x((r) => {
                      if (e === r.mode) return r;
                      const n = e ?? t;
                      return (b?.set(n), { ...r, mode: n, systemMode: m(n) });
                    });
                  },
                  [b, t]
                ),
                T = n.useCallback(
                  (e) => {
                    e
                      ? 'string' == typeof e
                        ? (e && !y.includes(e)) ||
                          x((t) => {
                            const r = { ...t };
                            return (
                              f(t, (t) => {
                                ('light' === t &&
                                  (v?.set(e), (r.lightColorScheme = e)),
                                  'dark' === t &&
                                    (S?.set(e), (r.darkColorScheme = e)));
                              }),
                              r
                            );
                          })
                        : x((t) => {
                            const n = { ...t },
                              s = null === e.light ? r : e.light,
                              i = null === e.dark ? o : e.dark;
                            return (
                              s &&
                                y.includes(s) &&
                                ((n.lightColorScheme = s), v?.set(s)),
                              i &&
                                y.includes(i) &&
                                ((n.darkColorScheme = i), S?.set(i)),
                              n
                            );
                          })
                      : x(
                          (e) => (
                            v?.set(r),
                            S?.set(o),
                            { ...e, lightColorScheme: r, darkColorScheme: o }
                          )
                        );
                  },
                  [y, v, S, r, o]
                ),
                j = n.useCallback(
                  (e) => {
                    'system' === A.mode &&
                      x((t) => {
                        const r = e?.matches ? 'dark' : 'light';
                        return t.systemMode === r ? t : { ...t, systemMode: r };
                      });
                  },
                  [A.mode]
                ),
                M = n.useRef(j);
              return (
                (M.current = j),
                n.useEffect(() => {
                  if ('function' != typeof window.matchMedia || !g) return;
                  const e = (...e) => M.current(...e),
                    t = window.matchMedia('(prefers-color-scheme: dark)');
                  return (
                    t.addListener(e),
                    e(t),
                    () => {
                      t.removeListener(e);
                    }
                  );
                }, [g]),
                n.useEffect(() => {
                  if (g) {
                    const e =
                        b?.subscribe((e) => {
                          (e && !['light', 'dark', 'system'].includes(e)) ||
                            C(e || t);
                        }) || p,
                      r =
                        v?.subscribe((e) => {
                          (e && !y.match(e)) || T({ light: e });
                        }) || p,
                      n =
                        S?.subscribe((e) => {
                          (e && !y.match(e)) || T({ dark: e });
                        }) || p;
                    return () => {
                      (e(), r(), n());
                    };
                  }
                }, [T, C, y, t, c, g, b, v, S]),
                {
                  ...A,
                  mode: w ? A.mode : void 0,
                  systemMode: w ? A.systemMode : void 0,
                  colorScheme: w ? k : void 0,
                  setMode: C,
                  setColorScheme: T,
                }
              );
            })({
              supportedColorSchemes: Y,
              defaultLightColorScheme: U,
              defaultDarkColorScheme: Q,
              modeStorageKey: k,
              colorSchemeStorageKey: C,
              defaultMode: q,
              storageManager: j,
              storageWindow: M,
              noSsr: P,
            });
          let se = J,
            ie = ne;
          (G && ((se = K.mode), (ie = K.colorScheme)), N && V.vars);
          let ae = ie || V.defaultColorScheme;
          V.vars && !N && (ae = V.defaultColorScheme);
          const ce = n.useMemo(() => {
              const e = V.generateThemeVars?.() || V.vars,
                t = {
                  ...V,
                  components: H,
                  colorSchemes: F,
                  cssVarPrefix: D,
                  vars: e,
                };
              if (
                ('function' == typeof t.generateSpacing &&
                  (t.spacing = t.generateSpacing()),
                ae)
              ) {
                const e = F[ae];
                e &&
                  'object' == typeof e &&
                  Object.keys(e).forEach((r) => {
                    e[r] && 'object' == typeof e[r]
                      ? (t[r] = { ...t[r], ...e[r] })
                      : (t[r] = e[r]);
                  });
              }
              return S ? S(t) : t;
            }, [V, ae, H, F, D]),
            le = V.colorSchemeSelector;
          ((0, a.A)(() => {
            if (ie && W && le && 'media' !== le) {
              const e = le;
              let t = le;
              if (
                ('class' === e && (t = '.%s'),
                'data' === e && (t = '[data-%s]'),
                e?.startsWith('data-') &&
                  !e.includes('%s') &&
                  (t = `[${e}="%s"]`),
                t.startsWith('.'))
              )
                (W.classList.remove(
                  ...Y.map((e) => t.substring(1).replace('%s', e))
                ),
                  W.classList.add(t.substring(1).replace('%s', ie)));
              else {
                const e = t.replace('%s', ie).match(/\[([^\]]+)\]/);
                if (e) {
                  const [t, r] = e[1].split('=');
                  (r ||
                    Y.forEach((e) => {
                      W.removeAttribute(t.replace(ie, e));
                    }),
                    W.setAttribute(t, r ? r.replace(/"|'/g, '') : ''));
                } else W.setAttribute(t, ie);
              }
            }
          }, [ie, le, W, Y]),
            n.useEffect(() => {
              let e;
              if (T && _.current && O) {
                const t = O.createElement('style');
                (t.appendChild(O.createTextNode(y)),
                  O.head.appendChild(t),
                  window.getComputedStyle(O.body),
                  (e = setTimeout(() => {
                    O.head.removeChild(t);
                  }, 1)));
              }
              return () => {
                clearTimeout(e);
              };
            }, [ie, T, O]),
            n.useEffect(
              () => (
                (_.current = !0),
                () => {
                  _.current = !1;
                }
              ),
              []
            ));
          const ue = n.useMemo(
            () => ({
              allColorSchemes: Y,
              colorScheme: ie,
              darkColorScheme: re,
              lightColorScheme: te,
              mode: se,
              setColorScheme: oe,
              setMode: (e) => {
                (ce.colorSchemeSelector, Z(e));
              },
              systemMode: ee,
            }),
            [Y, ie, re, te, se, oe, Z, ee, ce.colorSchemeSelector]
          );
          let de = !0;
          (E || !1 === V.cssVariables || (G && R?.cssVarPrefix === D)) &&
            (de = !1);
          const pe = (0, h.jsxs)(n.Fragment, {
            children: [
              (0, h.jsx)(c.A, {
                themeId: z ? t : void 0,
                theme: ce,
                children: o,
              }),
              de &&
                (0, h.jsx)(s.A, { styles: ce.generateStyleSheets?.() || [] }),
            ],
          });
          return G ? pe : (0, h.jsx)(x.Provider, { value: ue, children: pe });
        }
        k.propTypes = {
          children: o.node,
          colorSchemeNode: o.any,
          colorSchemeStorageKey: o.string,
          defaultMode: o.string,
          disableNestedContext: o.bool,
          disableStyleSheetGeneration: o.bool,
          disableTransitionOnChange: o.bool,
          documentNode: o.any,
          forceThemeRerender: o.bool,
          modeStorageKey: o.string,
          noSsr: o.bool,
          storageManager: o.func,
          storageWindow: o.any,
          theme: o.object,
        };
        const C = 'string' == typeof v ? v : v.light,
          T = 'string' == typeof v ? v : v.dark;
        return {
          CssVarsProvider: k,
          useColorScheme: () => n.useContext(x) || A,
          getInitColorSchemeScript: (e) =>
            (0, l.Ay)({
              colorSchemeStorageKey: g,
              defaultLightColorScheme: C,
              defaultDarkColorScheme: T,
              modeStorageKey: u,
              ...e,
            }),
        };
      }
    },
    5577: (e, t, r) => {
      r.d(t, { A: () => N });
      var n = r(7782),
        o = r(1569),
        s = r(8809),
        i = r(6073);
      const a = function (...e) {
        const t = e.reduce(
            (e, t) => (
              t.filterProps.forEach((r) => {
                e[r] = t;
              }),
              e
            ),
            {}
          ),
          r = (e) =>
            Object.keys(e).reduce(
              (r, n) => (t[n] ? (0, i.A)(r, t[n](e)) : r),
              {}
            );
        return (
          (r.propTypes = e.reduce((e, t) => Object.assign(e, t.propTypes), {})),
          (r.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
          r
        );
      };
      var c = r(369);
      function l(e) {
        return 'number' != typeof e ? e : `${e}px solid`;
      }
      function u(e, t) {
        return (0, s.Ay)({ prop: e, themeKey: 'borders', transform: t });
      }
      const d = u('border', l),
        p = u('borderTop', l),
        m = u('borderRight', l),
        f = u('borderBottom', l),
        h = u('borderLeft', l),
        y = u('borderColor'),
        g = u('borderTopColor'),
        b = u('borderRightColor'),
        v = u('borderBottomColor'),
        S = u('borderLeftColor'),
        A = u('outline', l),
        x = u('outlineColor'),
        w = (e) => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            const t = (0, n.MA)(
                e.theme,
                'shape.borderRadius',
                4,
                'borderRadius'
              ),
              r = (e) => ({ borderRadius: (0, n._W)(t, e) });
            return (0, c.NI)(e, e.borderRadius, r);
          }
          return null;
        };
      ((w.propTypes = { borderRadius: o.A }),
        (w.filterProps = ['borderRadius']),
        a(d, p, m, f, h, y, g, b, v, S, w, A, x));
      const $ = (e) => {
        if (void 0 !== e.gap && null !== e.gap) {
          const t = (0, n.MA)(e.theme, 'spacing', 8, 'gap'),
            r = (e) => ({ gap: (0, n._W)(t, e) });
          return (0, c.NI)(e, e.gap, r);
        }
        return null;
      };
      (($.propTypes = { gap: o.A }), ($.filterProps = ['gap']));
      const k = (e) => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = (0, n.MA)(e.theme, 'spacing', 8, 'columnGap'),
            r = (e) => ({ columnGap: (0, n._W)(t, e) });
          return (0, c.NI)(e, e.columnGap, r);
        }
        return null;
      };
      ((k.propTypes = { columnGap: o.A }), (k.filterProps = ['columnGap']));
      const C = (e) => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = (0, n.MA)(e.theme, 'spacing', 8, 'rowGap'),
            r = (e) => ({ rowGap: (0, n._W)(t, e) });
          return (0, c.NI)(e, e.rowGap, r);
        }
        return null;
      };
      function T(e, t) {
        return 'grey' === t ? t : e;
      }
      function j(e) {
        return e <= 1 && 0 !== e ? 100 * e + '%' : e;
      }
      ((C.propTypes = { rowGap: o.A }),
        (C.filterProps = ['rowGap']),
        a(
          $,
          k,
          C,
          (0, s.Ay)({ prop: 'gridColumn' }),
          (0, s.Ay)({ prop: 'gridRow' }),
          (0, s.Ay)({ prop: 'gridAutoFlow' }),
          (0, s.Ay)({ prop: 'gridAutoColumns' }),
          (0, s.Ay)({ prop: 'gridAutoRows' }),
          (0, s.Ay)({ prop: 'gridTemplateColumns' }),
          (0, s.Ay)({ prop: 'gridTemplateRows' }),
          (0, s.Ay)({ prop: 'gridTemplateAreas' }),
          (0, s.Ay)({ prop: 'gridArea' })
        ),
        a(
          (0, s.Ay)({ prop: 'color', themeKey: 'palette', transform: T }),
          (0, s.Ay)({
            prop: 'bgcolor',
            cssProperty: 'backgroundColor',
            themeKey: 'palette',
            transform: T,
          }),
          (0, s.Ay)({
            prop: 'backgroundColor',
            themeKey: 'palette',
            transform: T,
          })
        ));
      const M = (0, s.Ay)({ prop: 'width', transform: j }),
        O = (e) => {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            const t = (t) => {
              const r = e.theme?.breakpoints?.values?.[t] || c.zu[t];
              return r
                ? 'px' !== e.theme?.breakpoints?.unit
                  ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
                  : { maxWidth: r }
                : { maxWidth: j(t) };
            };
            return (0, c.NI)(e, e.maxWidth, t);
          }
          return null;
        };
      O.filterProps = ['maxWidth'];
      const W = (0, s.Ay)({ prop: 'minWidth', transform: j }),
        L = (0, s.Ay)({ prop: 'height', transform: j }),
        E = (0, s.Ay)({ prop: 'maxHeight', transform: j }),
        I = (0, s.Ay)({ prop: 'minHeight', transform: j }),
        N =
          ((0, s.Ay)({ prop: 'size', cssProperty: 'width', transform: j }),
          (0, s.Ay)({ prop: 'size', cssProperty: 'height', transform: j }),
          a(M, O, W, L, E, I, (0, s.Ay)({ prop: 'boxSizing' })),
          {
            border: { themeKey: 'borders', transform: l },
            borderTop: { themeKey: 'borders', transform: l },
            borderRight: { themeKey: 'borders', transform: l },
            borderBottom: { themeKey: 'borders', transform: l },
            borderLeft: { themeKey: 'borders', transform: l },
            borderColor: { themeKey: 'palette' },
            borderTopColor: { themeKey: 'palette' },
            borderRightColor: { themeKey: 'palette' },
            borderBottomColor: { themeKey: 'palette' },
            borderLeftColor: { themeKey: 'palette' },
            outline: { themeKey: 'borders', transform: l },
            outlineColor: { themeKey: 'palette' },
            borderRadius: { themeKey: 'shape.borderRadius', style: w },
            color: { themeKey: 'palette', transform: T },
            bgcolor: {
              themeKey: 'palette',
              cssProperty: 'backgroundColor',
              transform: T,
            },
            backgroundColor: { themeKey: 'palette', transform: T },
            p: { style: n.Ms },
            pt: { style: n.Ms },
            pr: { style: n.Ms },
            pb: { style: n.Ms },
            pl: { style: n.Ms },
            px: { style: n.Ms },
            py: { style: n.Ms },
            padding: { style: n.Ms },
            paddingTop: { style: n.Ms },
            paddingRight: { style: n.Ms },
            paddingBottom: { style: n.Ms },
            paddingLeft: { style: n.Ms },
            paddingX: { style: n.Ms },
            paddingY: { style: n.Ms },
            paddingInline: { style: n.Ms },
            paddingInlineStart: { style: n.Ms },
            paddingInlineEnd: { style: n.Ms },
            paddingBlock: { style: n.Ms },
            paddingBlockStart: { style: n.Ms },
            paddingBlockEnd: { style: n.Ms },
            m: { style: n.Lc },
            mt: { style: n.Lc },
            mr: { style: n.Lc },
            mb: { style: n.Lc },
            ml: { style: n.Lc },
            mx: { style: n.Lc },
            my: { style: n.Lc },
            margin: { style: n.Lc },
            marginTop: { style: n.Lc },
            marginRight: { style: n.Lc },
            marginBottom: { style: n.Lc },
            marginLeft: { style: n.Lc },
            marginX: { style: n.Lc },
            marginY: { style: n.Lc },
            marginInline: { style: n.Lc },
            marginInlineStart: { style: n.Lc },
            marginInlineEnd: { style: n.Lc },
            marginBlock: { style: n.Lc },
            marginBlockStart: { style: n.Lc },
            marginBlockEnd: { style: n.Lc },
            displayPrint: {
              cssProperty: !1,
              transform: (e) => ({ '@media print': { display: e } }),
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: { style: $ },
            rowGap: { style: C },
            columnGap: { style: k },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: { themeKey: 'zIndex' },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: { themeKey: 'shadows' },
            width: { transform: j },
            maxWidth: { style: O },
            minWidth: { transform: j },
            height: { transform: j },
            maxHeight: { transform: j },
            minHeight: { transform: j },
            boxSizing: {},
            font: { themeKey: 'font' },
            fontFamily: { themeKey: 'typography' },
            fontSize: { themeKey: 'typography' },
            fontStyle: { themeKey: 'typography' },
            fontWeight: { themeKey: 'typography' },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: { cssProperty: !1, themeKey: 'typography' },
          });
    },
    5625: (e, t, r) => {
      r.d(t, { A: () => u });
      var n = r(5120),
        o = r(6073),
        s = r(8809),
        i = r(369),
        a = r(4353),
        c = r(5577);
      const l = (function () {
        function e(e, t, r, o) {
          const a = { [e]: t, theme: r },
            c = o[e];
          if (!c) return { [e]: t };
          const { cssProperty: l = e, themeKey: u, transform: d, style: p } = c;
          if (null == t) return null;
          if ('typography' === u && 'inherit' === t) return { [e]: t };
          const m = (0, s.Yn)(r, u) || {};
          return p
            ? p(a)
            : (0, i.NI)(a, t, (t) => {
                let r = (0, s.BO)(m, d, t);
                return (
                  t === r &&
                    'string' == typeof t &&
                    (r = (0, s.BO)(
                      m,
                      d,
                      `${e}${'default' === t ? '' : (0, n.A)(t)}`,
                      t
                    )),
                  !1 === l ? r : { [l]: r }
                );
              });
        }
        return function t(r) {
          const { sx: n, theme: s = {}, nested: l } = r || {};
          if (!n) return null;
          const u = s.unstable_sxConfig ?? c.A;
          function d(r) {
            let n = r;
            if ('function' == typeof r) n = r(s);
            else if ('object' != typeof r) return r;
            if (!n) return null;
            const c = (0, i.EU)(s.breakpoints),
              d = Object.keys(c);
            let p = c;
            return (
              Object.keys(n).forEach((r) => {
                const a = 'function' == typeof (c = n[r]) ? c(s) : c;
                var c;
                if (null != a)
                  if ('object' == typeof a)
                    if (u[r]) p = (0, o.A)(p, e(r, a, s, u));
                    else {
                      const e = (0, i.NI)({ theme: s }, a, (e) => ({ [r]: e }));
                      !(function (...e) {
                        const t = e.reduce(
                            (e, t) => e.concat(Object.keys(t)),
                            []
                          ),
                          r = new Set(t);
                        return e.every((e) => r.size === Object.keys(e).length);
                      })(e, a)
                        ? (p = (0, o.A)(p, e))
                        : (p[r] = t({ sx: a, theme: s, nested: !0 }));
                    }
                  else p = (0, o.A)(p, e(r, a, s, u));
              }),
              !l && s.modularCssLayers
                ? { '@layer sx': (0, a._S)(s, (0, i.vf)(d, p)) }
                : (0, a._S)(s, (0, i.vf)(d, p))
            );
          }
          return Array.isArray(n) ? n.map(d) : d(n);
        };
      })();
      l.filterProps = ['sx'];
      const u = l;
    },
    6060: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(7682);
      function o(e) {
        const { variants: t, ...r } = e,
          o = { variants: t, style: (0, n.tT)(r), isProcessed: !0 };
        return (
          o.style === r ||
            (t &&
              t.forEach((e) => {
                'function' != typeof e.style && (e.style = (0, n.tT)(e.style));
              })),
          o
        );
      }
    },
    6073: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(6966);
      const o = function (e, t) {
        return t ? (0, n.A)(e, t, { clone: !1 }) : e;
      };
    },
    6173: (e, t, r) => {
      (r.d(t, { A: () => u }), r(9729));
      var n = r(2736),
        o = r(7682),
        s = r(6297),
        i = r(3843),
        a = r(5813);
      function c(e) {
        const t = (0, o.tT)(e);
        return e !== t && t.styles
          ? (t.styles.match(/^@layer\s+[^{]*$/) ||
              (t.styles = `@layer global{${t.styles}}`),
            t)
          : e;
      }
      function l({ styles: e, themeId: t, defaultTheme: r = {} }) {
        const n = (0, i.A)(r),
          o = (t && n[t]) || n;
        let l = 'function' == typeof e ? e(o) : e;
        return (
          o.modularCssLayers &&
            (l = Array.isArray(l)
              ? l.map((e) => c('function' == typeof e ? e(o) : e))
              : c(l)),
          (0, a.jsx)(s.A, { styles: l })
        );
      }
      l.propTypes = {
        defaultTheme: n.object,
        styles: n.oneOfType([
          n.array,
          n.func,
          n.number,
          n.object,
          n.string,
          n.bool,
        ]),
        themeId: n.string,
      };
      const u = l;
    },
    6297: (e, t, r) => {
      (r.d(t, { A: () => i }), r(9729));
      var n = r(2736),
        o = r(6458),
        s = r(5813);
      function i(e) {
        const { styles: t, defaultTheme: r = {} } = e,
          n =
            'function' == typeof t
              ? (e) => {
                  return t(
                    null == (n = e) || 0 === Object.keys(n).length ? r : e
                  );
                  var n;
                }
              : t;
        return (0, s.jsx)(o.mL, { styles: n });
      }
      i.propTypes = {
        defaultTheme: n.object,
        styles: n.oneOfType([n.array, n.string, n.object, n.func]),
      };
    },
    6749: (e, t, r) => {
      r.d(t, { A: () => g });
      var n = r(9729),
        o = r(2736),
        s = r(3526),
        i = r(4006),
        a = r(3140),
        c = r(5120),
        l = r(8196),
        u = r(573),
        d = r(9740),
        p = r(5813);
      const m = (0, d.A)(),
        f = (0, u.A)('div', {
          name: 'MuiContainer',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              t[`maxWidth${(0, c.A)(String(r.maxWidth))}`],
              r.fixed && t.fixed,
              r.disableGutters && t.disableGutters,
            ];
          },
        }),
        h = (e) =>
          (0, l.A)({ props: e, name: 'MuiContainer', defaultTheme: m }),
        y = (e, t) => {
          const { classes: r, fixed: n, disableGutters: o, maxWidth: s } = e,
            l = {
              root: [
                'root',
                s && `maxWidth${(0, c.A)(String(s))}`,
                n && 'fixed',
                o && 'disableGutters',
              ],
            };
          return (0, a.A)(l, (e) => (0, i.Ay)(t, e), r);
        };
      function g(e = {}) {
        const {
            createStyledComponent: t = f,
            useThemeProps: r = h,
            componentName: i = 'MuiContainer',
          } = e,
          a = t(
            ({ theme: e, ownerState: t }) => ({
              width: '100%',
              marginLeft: 'auto',
              boxSizing: 'border-box',
              marginRight: 'auto',
              ...(!t.disableGutters && {
                paddingLeft: e.spacing(2),
                paddingRight: e.spacing(2),
                [e.breakpoints.up('sm')]: {
                  paddingLeft: e.spacing(3),
                  paddingRight: e.spacing(3),
                },
              }),
            }),
            ({ theme: e, ownerState: t }) =>
              t.fixed &&
              Object.keys(e.breakpoints.values).reduce((t, r) => {
                const n = r,
                  o = e.breakpoints.values[n];
                return (
                  0 !== o &&
                    (t[e.breakpoints.up(n)] = {
                      maxWidth: `${o}${e.breakpoints.unit}`,
                    }),
                  t
                );
              }, {}),
            ({ theme: e, ownerState: t }) => ({
              ...('xs' === t.maxWidth && {
                [e.breakpoints.up('xs')]: {
                  maxWidth: Math.max(e.breakpoints.values.xs, 444),
                },
              }),
              ...(t.maxWidth &&
                'xs' !== t.maxWidth && {
                  [e.breakpoints.up(t.maxWidth)]: {
                    maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
                  },
                }),
            })
          ),
          c = n.forwardRef(function (e, t) {
            const n = r(e),
              {
                className: o,
                component: c = 'div',
                disableGutters: l = !1,
                fixed: u = !1,
                maxWidth: d = 'lg',
                classes: m,
                ...f
              } = n,
              h = {
                ...n,
                component: c,
                disableGutters: l,
                fixed: u,
                maxWidth: d,
              },
              g = y(h, i);
            return (0, p.jsx)(a, {
              as: c,
              ownerState: h,
              className: (0, s.A)(g.root, o),
              ref: t,
              ...f,
            });
          });
        return (
          (c.propTypes = {
            children: o.node,
            classes: o.object,
            className: o.string,
            component: o.elementType,
            disableGutters: o.bool,
            fixed: o.bool,
            maxWidth: o.oneOfType([
              o.oneOf(['xs', 'sm', 'md', 'lg', 'xl', !1]),
              o.string,
            ]),
            sx: o.oneOfType([
              o.arrayOf(o.oneOfType([o.func, o.object, o.bool])),
              o.func,
              o.object,
            ]),
          }),
          c
        );
      }
    },
    6891: (e, t, r) => {
      r.d(t, { A: () => u, b: () => l });
      var n = r(9729),
        o = r(2736),
        s = r(7416),
        i = r(5813);
      const a = n.createContext(void 0);
      function c({ value: e, children: t }) {
        return (0, i.jsx)(a.Provider, { value: e, children: t });
      }
      function l({ props: e, name: t }) {
        return (function (e) {
          const { theme: t, name: r, props: n } = e;
          if (!t || !t.components || !t.components[r]) return n;
          const o = t.components[r];
          return o.defaultProps
            ? (0, s.A)(o.defaultProps, n, t.components.mergeClassNameAndStyle)
            : o.styleOverrides || o.variants
              ? n
              : (0, s.A)(o, n, t.components.mergeClassNameAndStyle);
        })({ props: e, name: t, theme: { components: n.useContext(a) } });
      }
      c.propTypes = { children: o.node, value: o.object };
      const u = c;
    },
    7005: (e, t, r) => {
      r.d(t, {
        Cg: () => p,
        Me: () => i,
        Nd: () => f,
        X4: () => d,
        Y9: () => g,
        YL: () => c,
        a: () => h,
        e$: () => m,
        eM: () => u,
        j4: () => y,
      });
      var n = r(7894);
      function o(e, t = 0, r = 1) {
        return (0, n.A)(e, t, r);
      }
      function s(e) {
        if (e.type) return e;
        if ('#' === e.charAt(0))
          return s(
            (function (e) {
              e = e.slice(1);
              const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
              let r = e.match(t);
              return (
                r && 1 === r[0].length && (r = r.map((e) => e + e)),
                e.length,
                e.trim().length,
                r
                  ? `rgb${4 === r.length ? 'a' : ''}(${r.map((e, t) => (t < 3 ? parseInt(e, 16) : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3)).join(', ')})`
                  : ''
              );
            })(e)
          );
        const t = e.indexOf('('),
          r = e.substring(0, t);
        if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(r))
          throw new Error(
            `MUI: Unsupported \`${e}\` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
          );
        let n,
          o = e.substring(t + 1, e.length - 1);
        if ('color' === r) {
          if (
            ((o = o.split(' ')),
            (n = o.shift()),
            4 === o.length && '/' === o[3].charAt(0) && (o[3] = o[3].slice(1)),
            ![
              'srgb',
              'display-p3',
              'a98-rgb',
              'prophoto-rgb',
              'rec-2020',
            ].includes(n))
          )
            throw new Error(
              `MUI: unsupported \`${n}\` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
            );
        } else o = o.split(',');
        return (
          (o = o.map((e) => parseFloat(e))),
          { type: r, values: o, colorSpace: n }
        );
      }
      const i = (e, t) => {
        try {
          return ((e) => {
            const t = s(e);
            return t.values
              .slice(0, 3)
              .map((e, r) => (t.type.includes('hsl') && 0 !== r ? `${e}%` : e))
              .join(' ');
          })(e);
        } catch (r) {
          return e;
        }
      };
      function a(e) {
        const { type: t, colorSpace: r } = e;
        let { values: n } = e;
        return (
          t.includes('rgb')
            ? (n = n.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : t.includes('hsl') && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
          (n = t.includes('color') ? `${r} ${n.join(' ')}` : `${n.join(', ')}`),
          `${t}(${n})`
        );
      }
      function c(e) {
        e = s(e);
        const { values: t } = e,
          r = t[0],
          n = t[1] / 100,
          o = t[2] / 100,
          i = n * Math.min(o, 1 - o),
          c = (e, t = (e + r / 30) % 12) =>
            o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
        let l = 'rgb';
        const u = [
          Math.round(255 * c(0)),
          Math.round(255 * c(8)),
          Math.round(255 * c(4)),
        ];
        return (
          'hsla' === e.type && ((l += 'a'), u.push(t[3])),
          a({ type: l, values: u })
        );
      }
      function l(e) {
        let t =
          'hsl' === (e = s(e)).type || 'hsla' === e.type
            ? s(c(e)).values
            : e.values;
        return (
          (t = t.map(
            (t) => (
              'color' !== e.type && (t /= 255),
              t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
            )
          )),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        );
      }
      function u(e, t) {
        const r = l(e),
          n = l(t);
        return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
      }
      function d(e, t) {
        return (
          (e = s(e)),
          (t = o(t)),
          ('rgb' !== e.type && 'hsl' !== e.type) || (e.type += 'a'),
          'color' === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
          a(e)
        );
      }
      function p(e, t, r) {
        try {
          return d(e, t);
        } catch (n) {
          return e;
        }
      }
      function m(e, t) {
        if (((e = s(e)), (t = o(t)), e.type.includes('hsl')))
          e.values[2] *= 1 - t;
        else if (e.type.includes('rgb') || e.type.includes('color'))
          for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
        return a(e);
      }
      function f(e, t, r) {
        try {
          return m(e, t);
        } catch (n) {
          return e;
        }
      }
      function h(e, t) {
        if (((e = s(e)), (t = o(t)), e.type.includes('hsl')))
          e.values[2] += (100 - e.values[2]) * t;
        else if (e.type.includes('rgb'))
          for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
        else if (e.type.includes('color'))
          for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
        return a(e);
      }
      function y(e, t, r) {
        try {
          return h(e, t);
        } catch (n) {
          return e;
        }
      }
      function g(e, t, r) {
        try {
          return (function (e, t = 0.15) {
            return l(e) > 0.5 ? m(e, t) : h(e, t);
          })(e, t);
        } catch (n) {
          return e;
        }
      }
    },
    7663: (e, t, r) => {
      function n(e) {
        return function (t) {
          return 'media' === e
            ? `@media (prefers-color-scheme: ${t})`
            : e
              ? e.startsWith('data-') && !e.includes('%s')
                ? `[${e}="${t}"] &`
                : 'class' === e
                  ? `.${t} &`
                  : 'data' === e
                    ? `[data-${t}] &`
                    : `${e.replace('%s', t)} &`
              : '&';
        };
      }
      r.d(t, { E: () => n });
    },
    7682: (e, t, r) => {
      r.d(t, { Ay: () => s, HX: () => i, tT: () => c });
      var n = r(7820),
        o = r(8976);
      function s(e, t) {
        const r = (0, n.A)(e, t);
        return (...e) => (
          0 === e.length || e.some((e) => void 0 === e),
          r(...e)
        );
      }
      function i(e, t) {
        Array.isArray(e.__emotion_styles) &&
          (e.__emotion_styles = t(e.__emotion_styles));
      }
      const a = [];
      function c(e) {
        return ((a[0] = e), (0, o.J)(a));
      }
    },
    7782: (e, t, r) => {
      r.d(t, {
        LX: () => h,
        MA: () => f,
        _W: () => y,
        Lc: () => b,
        Ms: () => v,
      });
      var n = r(1569),
        o = r(369),
        s = r(8809),
        i = r(6073);
      const a = { m: 'margin', p: 'padding' },
        c = {
          t: 'Top',
          r: 'Right',
          b: 'Bottom',
          l: 'Left',
          x: ['Left', 'Right'],
          y: ['Top', 'Bottom'],
        },
        l = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
        u = (function () {
          const e = {};
          return (t) => (
            void 0 === e[t] &&
              (e[t] = ((e) => {
                if (e.length > 2) {
                  if (!l[e]) return [e];
                  e = l[e];
                }
                const [t, r] = e.split(''),
                  n = a[t],
                  o = c[r] || '';
                return Array.isArray(o) ? o.map((e) => n + e) : [n + o];
              })(t)),
            e[t]
          );
        })(),
        d = [
          'm',
          'mt',
          'mr',
          'mb',
          'ml',
          'mx',
          'my',
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'marginInline',
          'marginInlineStart',
          'marginInlineEnd',
          'marginBlock',
          'marginBlockStart',
          'marginBlockEnd',
        ],
        p = [
          'p',
          'pt',
          'pr',
          'pb',
          'pl',
          'px',
          'py',
          'padding',
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft',
          'paddingX',
          'paddingY',
          'paddingInline',
          'paddingInlineStart',
          'paddingInlineEnd',
          'paddingBlock',
          'paddingBlockStart',
          'paddingBlockEnd',
        ],
        m = [...d, ...p];
      function f(e, t, r, n) {
        const o = (0, s.Yn)(e, t, !0) ?? r;
        return 'number' == typeof o || 'string' == typeof o
          ? (e) =>
              'string' == typeof e
                ? e
                : 'string' == typeof o
                  ? o.startsWith('var(') && 0 === e
                    ? 0
                    : o.startsWith('var(') && 1 === e
                      ? o
                      : `calc(${e} * ${o})`
                  : o * e
          : Array.isArray(o)
            ? (e) => {
                if ('string' == typeof e) return e;
                const t = Math.abs(e);
                Number.isInteger(t) && o.length;
                const r = o[t];
                return e >= 0
                  ? r
                  : 'number' == typeof r
                    ? -r
                    : 'string' == typeof r && r.startsWith('var(')
                      ? `calc(-1 * ${r})`
                      : `-${r}`;
              }
            : 'function' == typeof o
              ? o
              : () => {};
      }
      function h(e) {
        return f(e, 'spacing', 8);
      }
      function y(e, t) {
        return 'string' == typeof t || null == t ? t : e(t);
      }
      function g(e, t) {
        const r = h(e.theme);
        return Object.keys(e)
          .map((n) =>
            (function (e, t, r, n) {
              if (!t.includes(r)) return null;
              const s = (function (e, t) {
                  return (r) => e.reduce((e, n) => ((e[n] = y(t, r)), e), {});
                })(u(r), n),
                i = e[r];
              return (0, o.NI)(e, i, s);
            })(e, t, n, r)
          )
          .reduce(i.A, {});
      }
      function b(e) {
        return g(e, d);
      }
      function v(e) {
        return g(e, p);
      }
      function S(e) {
        return g(e, m);
      }
      ((b.propTypes = d.reduce((e, t) => ((e[t] = n.A), e), {})),
        (b.filterProps = d),
        (v.propTypes = p.reduce((e, t) => ((e[t] = n.A), e), {})),
        (v.filterProps = p),
        (S.propTypes = m.reduce((e, t) => ((e[t] = n.A), e), {})),
        (S.filterProps = m));
    },
    8196: (e, t, r) => {
      r.d(t, { A: () => s });
      var n = r(7416),
        o = r(3843);
      function s({ props: e, name: t, defaultTheme: r, themeId: s }) {
        let i = (0, o.A)(r);
        return (
          s && (i = i[s] || i),
          (function (e) {
            const { theme: t, name: r, props: o } = e;
            return t &&
              t.components &&
              t.components[r] &&
              t.components[r].defaultProps
              ? (0, n.A)(t.components[r].defaultProps, o)
              : o;
          })({ theme: i, name: t, props: e })
        );
      }
    },
    8641: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(7782);
      function o(e = 8, t = (0, n.LX)({ spacing: e })) {
        if (e.mui) return e;
        const r = (...e) => (
          e.length,
          (0 === e.length ? [1] : e)
            .map((e) => {
              const r = t(e);
              return 'number' == typeof r ? `${r}px` : r;
            })
            .join(' ')
        );
        return ((r.mui = !0), r);
      }
    },
    8749: (e, t, r) => {
      r.d(t, { A: () => u });
      var n = r(9729),
        o = r(3526),
        s = r(7682),
        i = r(5625),
        a = r(4093),
        c = r(3843),
        l = r(5813);
      function u(e = {}) {
        const {
            themeId: t,
            defaultTheme: r,
            defaultClassName: u = 'MuiBox-root',
            generateClassName: d,
          } = e,
          p = (0, s.Ay)('div', {
            shouldForwardProp: (e) => 'theme' !== e && 'sx' !== e && 'as' !== e,
          })(i.A);
        return n.forwardRef(function (e, n) {
          const s = (0, c.A)(r),
            { className: i, component: m = 'div', ...f } = (0, a.A)(e);
          return (0, l.jsx)(p, {
            as: m,
            ref: n,
            className: (0, o.A)(i, d ? d(u) : u),
            theme: (t && s[t]) || s,
            ...f,
          });
        });
      }
    },
    8809: (e, t, r) => {
      r.d(t, { Ay: () => c, BO: () => a, Yn: () => i });
      var n = r(5120),
        o = r(1569),
        s = r(369);
      function i(e, t, r = !0) {
        if (!t || 'string' != typeof t) return null;
        if (e && e.vars && r) {
          const r = `vars.${t}`
            .split('.')
            .reduce((e, t) => (e && e[t] ? e[t] : null), e);
          if (null != r) return r;
        }
        return t
          .split('.')
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
      }
      function a(e, t, r, n = r) {
        let o;
        return (
          (o =
            'function' == typeof e
              ? e(r)
              : Array.isArray(e)
                ? e[r] || n
                : i(e, r) || n),
          t && (o = t(o, n, e)),
          o
        );
      }
      const c = function (e) {
        const {
            prop: t,
            cssProperty: r = e.prop,
            themeKey: c,
            transform: l,
          } = e,
          u = (e) => {
            if (null == e[t]) return null;
            const o = e[t],
              u = i(e.theme, c) || {};
            return (0, s.NI)(e, o, (e) => {
              let o = a(u, l, e);
              return (
                e === o &&
                  'string' == typeof e &&
                  (o = a(u, l, `${t}${'default' === e ? '' : (0, n.A)(e)}`, e)),
                !1 === r ? o : { [r]: o }
              );
            });
          };
        return ((u.propTypes = { [t]: o.A }), (u.filterProps = [t]), u);
      };
    },
    9740: (e, t, r) => {
      r.d(t, { A: () => u });
      var n = r(6966);
      var o = r(4353);
      const s = { borderRadius: 4 };
      var i = r(8641),
        a = r(5625),
        c = r(5577);
      function l(e, t) {
        const r = this;
        if (r.vars) {
          if (
            !r.colorSchemes?.[e] ||
            'function' != typeof r.getColorSchemeSelector
          )
            return {};
          let n = r.getColorSchemeSelector(e);
          return '&' === n
            ? t
            : ((n.includes('data-') || n.includes('.')) &&
                (n = `*:where(${n.replace(/\s*&$/, '')}) &`),
              { [n]: t });
        }
        return r.palette.mode === e ? t : {};
      }
      const u = function (e = {}, ...t) {
        const {
            breakpoints: r = {},
            palette: u = {},
            spacing: d,
            shape: p = {},
            ...m
          } = e,
          f = (function (e) {
            const {
                values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
                unit: r = 'px',
                step: n = 5,
                ...o
              } = e,
              s = ((e) => {
                const t =
                  Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
                return (
                  t.sort((e, t) => e.val - t.val),
                  t.reduce((e, t) => ({ ...e, [t.key]: t.val }), {})
                );
              })(t),
              i = Object.keys(s);
            function a(e) {
              return `@media (min-width:${'number' == typeof t[e] ? t[e] : e}${r})`;
            }
            function c(e) {
              return `@media (max-width:${('number' == typeof t[e] ? t[e] : e) - n / 100}${r})`;
            }
            function l(e, o) {
              const s = i.indexOf(o);
              return `@media (min-width:${'number' == typeof t[e] ? t[e] : e}${r}) and (max-width:${(-1 !== s && 'number' == typeof t[i[s]] ? t[i[s]] : o) - n / 100}${r})`;
            }
            return {
              keys: i,
              values: s,
              up: a,
              down: c,
              between: l,
              only: function (e) {
                return i.indexOf(e) + 1 < i.length
                  ? l(e, i[i.indexOf(e) + 1])
                  : a(e);
              },
              not: function (e) {
                const t = i.indexOf(e);
                return 0 === t
                  ? a(i[1])
                  : t === i.length - 1
                    ? c(i[t])
                    : l(e, i[i.indexOf(e) + 1]).replace(
                        '@media',
                        '@media not all and'
                      );
              },
              unit: r,
              ...o,
            };
          })(r),
          h = (0, i.A)(d);
        let y = (0, n.A)(
          {
            breakpoints: f,
            direction: 'ltr',
            components: {},
            palette: { mode: 'light', ...u },
            spacing: h,
            shape: { ...s, ...p },
          },
          m
        );
        return (
          (y = (0, o.Ay)(y)),
          (y.applyStyles = l),
          (y = t.reduce((e, t) => (0, n.A)(e, t), y)),
          (y.unstable_sxConfig = { ...c.A, ...m?.unstable_sxConfig }),
          (y.unstable_sx = function (e) {
            return (0, a.A)({ sx: e, theme: this });
          }),
          y
        );
      };
    },
    9754: (e, t, r) => {
      r.d(t, { A: () => l, I: () => c });
      var n = r(9729),
        o = r(2736),
        s = r(5813);
      const i = n.createContext();
      function a({ value: e, ...t }) {
        return (0, s.jsx)(i.Provider, { value: e ?? !0, ...t });
      }
      a.propTypes = { children: o.node, value: o.bool };
      const c = () => n.useContext(i) ?? !1,
        l = a;
    },
  },
]);
