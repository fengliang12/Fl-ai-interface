'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [319],
  {
    475: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        }),
        'AccountBalanceWallet'
      );
    },
    1041: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }),
        'Send'
      );
    },
    2344: (e, o, r) => {
      r.d(o, { A: () => g });
      var t = r(9729),
        n = r(2736),
        a = r(3526),
        s = r(3140),
        l = r(7051),
        i = r(8554),
        c = r(1838),
        p = r(1790),
        d = r(5710),
        u = r(4006);
      function f(e) {
        return (0, u.Ay)('MuiBackdrop', e);
      }
      (0, d.A)('MuiBackdrop', ['root', 'invisible']);
      var m = r(5813);
      const y = (0, l.Ay)('div', {
          name: 'MuiBackdrop',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [o.root, r.invisible && o.invisible];
          },
        })({
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          WebkitTapHighlightColor: 'transparent',
          variants: [
            {
              props: { invisible: !0 },
              style: { backgroundColor: 'transparent' },
            },
          ],
        }),
        v = t.forwardRef(function (e, o) {
          const r = (0, i.b)({ props: e, name: 'MuiBackdrop' }),
            {
              children: t,
              className: n,
              component: l = 'div',
              invisible: d = !1,
              open: u,
              components: v = {},
              componentsProps: g = {},
              slotProps: A = {},
              slots: b = {},
              TransitionComponent: h,
              transitionDuration: x,
              ...T
            } = r,
            k = { ...r, component: l, invisible: d },
            j = ((e) => {
              const { classes: o, invisible: r } = e,
                t = { root: ['root', r && 'invisible'] };
              return (0, s.A)(t, f, o);
            })(k),
            S = {
              component: l,
              slots: { transition: h, root: v.Root, ...b },
              slotProps: { ...g, ...A },
            },
            [C, w] = (0, c.A)('root', {
              elementType: y,
              externalForwardedProps: S,
              className: (0, a.A)(j.root, n),
              ownerState: k,
            }),
            [B, O] = (0, c.A)('transition', {
              elementType: p.A,
              externalForwardedProps: S,
              ownerState: k,
            });
          return (0, m.jsx)(B, {
            in: u,
            timeout: x,
            ...T,
            ...O,
            children: (0, m.jsx)(C, {
              'aria-hidden': !0,
              ...w,
              classes: j,
              ref: o,
              children: t,
            }),
          });
        });
      v.propTypes = {
        children: n.node,
        classes: n.object,
        className: n.string,
        component: n.elementType,
        components: n.shape({ Root: n.elementType }),
        componentsProps: n.shape({ root: n.object }),
        invisible: n.bool,
        open: n.bool.isRequired,
        slotProps: n.shape({
          root: n.oneOfType([n.func, n.object]),
          transition: n.oneOfType([n.func, n.object]),
        }),
        slots: n.shape({ root: n.elementType, transition: n.elementType }),
        sx: n.oneOfType([
          n.arrayOf(n.oneOfType([n.func, n.object, n.bool])),
          n.func,
          n.object,
        ]),
        TransitionComponent: n.elementType,
        transitionDuration: n.oneOfType([
          n.number,
          n.shape({ appear: n.number, enter: n.number, exit: n.number }),
        ]),
      };
      const g = v;
    },
    2829: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z',
        }),
        'CardGiftcard'
      );
    },
    3403: (e, o, r) => {
      r.d(o, { A: () => P });
      var t = r(9729),
        n = r(2736),
        a = r(3526),
        s = r(3140),
        l = r(7051),
        i = r(6586),
        c = r(8554),
        p = r(1838),
        d = r(2951),
        u = r(5137),
        f = r(1077),
        m = r(5710),
        y = r(4006);
      function v(e) {
        return (0, y.Ay)('MuiAlert', e);
      }
      const g = (0, m.A)('MuiAlert', [
        'root',
        'action',
        'icon',
        'message',
        'filled',
        'colorSuccess',
        'colorInfo',
        'colorWarning',
        'colorError',
        'filledSuccess',
        'filledInfo',
        'filledWarning',
        'filledError',
        'outlined',
        'outlinedSuccess',
        'outlinedInfo',
        'outlinedWarning',
        'outlinedError',
        'standard',
        'standardSuccess',
        'standardInfo',
        'standardWarning',
        'standardError',
      ]);
      var A = r(8587),
        b = r(2754),
        h = r(8828),
        x = r(6903),
        T = r(5549),
        k = r(363),
        j = r(5813);
      const S = (0, l.Ay)(f.A, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [
              o.root,
              o[r.variant],
              o[`${r.variant}${(0, d.A)(r.color || r.severity)}`],
            ];
          },
        })(
          (0, i.A)(({ theme: e }) => {
            const o = 'light' === e.palette.mode ? e.darken : e.lighten,
              r = 'light' === e.palette.mode ? e.lighten : e.darken;
            return {
              ...e.typography.body2,
              backgroundColor: 'transparent',
              display: 'flex',
              padding: '6px 16px',
              variants: [
                ...Object.entries(e.palette)
                  .filter((0, u.A)(['light']))
                  .map(([t]) => ({
                    props: { colorSeverity: t, variant: 'standard' },
                    style: {
                      color: e.vars
                        ? e.vars.palette.Alert[`${t}Color`]
                        : o(e.palette[t].light, 0.6),
                      backgroundColor: e.vars
                        ? e.vars.palette.Alert[`${t}StandardBg`]
                        : r(e.palette[t].light, 0.9),
                      [`& .${g.icon}`]: e.vars
                        ? { color: e.vars.palette.Alert[`${t}IconColor`] }
                        : { color: e.palette[t].main },
                    },
                  })),
                ...Object.entries(e.palette)
                  .filter((0, u.A)(['light']))
                  .map(([r]) => ({
                    props: { colorSeverity: r, variant: 'outlined' },
                    style: {
                      color: e.vars
                        ? e.vars.palette.Alert[`${r}Color`]
                        : o(e.palette[r].light, 0.6),
                      border: `1px solid ${(e.vars || e).palette[r].light}`,
                      [`& .${g.icon}`]: e.vars
                        ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                        : { color: e.palette[r].main },
                    },
                  })),
                ...Object.entries(e.palette)
                  .filter((0, u.A)(['dark']))
                  .map(([o]) => ({
                    props: { colorSeverity: o, variant: 'filled' },
                    style: {
                      fontWeight: e.typography.fontWeightMedium,
                      ...(e.vars
                        ? {
                            color: e.vars.palette.Alert[`${o}FilledColor`],
                            backgroundColor:
                              e.vars.palette.Alert[`${o}FilledBg`],
                          }
                        : {
                            backgroundColor:
                              'dark' === e.palette.mode
                                ? e.palette[o].dark
                                : e.palette[o].main,
                            color: e.palette.getContrastText(e.palette[o].main),
                          }),
                    },
                  })),
              ],
            };
          })
        ),
        C = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Icon' })({
          marginRight: 12,
          padding: '7px 0',
          display: 'flex',
          fontSize: 22,
          opacity: 0.9,
        }),
        w = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Message' })({
          padding: '8px 0',
          minWidth: 0,
          overflow: 'auto',
        }),
        B = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Action' })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8,
        }),
        O = {
          success: (0, j.jsx)(b.A, { fontSize: 'inherit' }),
          warning: (0, j.jsx)(h.A, { fontSize: 'inherit' }),
          error: (0, j.jsx)(x.A, { fontSize: 'inherit' }),
          info: (0, j.jsx)(T.A, { fontSize: 'inherit' }),
        },
        M = t.forwardRef(function (e, o) {
          const r = (0, c.b)({ props: e, name: 'MuiAlert' }),
            {
              action: t,
              children: n,
              className: l,
              closeText: i = 'Close',
              color: u,
              components: f = {},
              componentsProps: m = {},
              icon: y,
              iconMapping: g = O,
              onClose: b,
              role: h = 'alert',
              severity: x = 'success',
              slotProps: T = {},
              slots: M = {},
              variant: P = 'standard',
              ...I
            } = r,
            z = {
              ...r,
              color: u,
              severity: x,
              variant: P,
              colorSeverity: u || x,
            },
            R = ((e) => {
              const { variant: o, color: r, severity: t, classes: n } = e,
                a = {
                  root: [
                    'root',
                    `color${(0, d.A)(r || t)}`,
                    `${o}${(0, d.A)(r || t)}`,
                    `${o}`,
                  ],
                  icon: ['icon'],
                  message: ['message'],
                  action: ['action'],
                };
              return (0, s.A)(a, v, n);
            })(z),
            F = {
              slots: {
                closeButton: f.CloseButton,
                closeIcon: f.CloseIcon,
                ...M,
              },
              slotProps: { ...m, ...T },
            },
            [$, N] = (0, p.A)('root', {
              ref: o,
              shouldForwardComponentProp: !0,
              className: (0, a.A)(R.root, l),
              elementType: S,
              externalForwardedProps: { ...F, ...I },
              ownerState: z,
              additionalProps: { role: h, elevation: 0 },
            }),
            [D, H] = (0, p.A)('icon', {
              className: R.icon,
              elementType: C,
              externalForwardedProps: F,
              ownerState: z,
            }),
            [W, V] = (0, p.A)('message', {
              className: R.message,
              elementType: w,
              externalForwardedProps: F,
              ownerState: z,
            }),
            [E, q] = (0, p.A)('action', {
              className: R.action,
              elementType: B,
              externalForwardedProps: F,
              ownerState: z,
            }),
            [L, _] = (0, p.A)('closeButton', {
              elementType: A.A,
              externalForwardedProps: F,
              ownerState: z,
            }),
            [G, J] = (0, p.A)('closeIcon', {
              elementType: k.A,
              externalForwardedProps: F,
              ownerState: z,
            });
          return (0, j.jsxs)($, {
            ...N,
            children: [
              !1 !== y
                ? (0, j.jsx)(D, { ...H, children: y || g[x] || O[x] })
                : null,
              (0, j.jsx)(W, { ...V, children: n }),
              null != t ? (0, j.jsx)(E, { ...q, children: t }) : null,
              null == t && b
                ? (0, j.jsx)(E, {
                    ...q,
                    children: (0, j.jsx)(L, {
                      size: 'small',
                      'aria-label': i,
                      title: i,
                      color: 'inherit',
                      onClick: b,
                      ..._,
                      children: (0, j.jsx)(G, { fontSize: 'small', ...J }),
                    }),
                  })
                : null,
            ],
          });
        });
      M.propTypes = {
        action: n.node,
        children: n.node,
        classes: n.object,
        className: n.string,
        closeText: n.string,
        color: n.oneOfType([
          n.oneOf(['error', 'info', 'success', 'warning']),
          n.string,
        ]),
        components: n.shape({
          CloseButton: n.elementType,
          CloseIcon: n.elementType,
        }),
        componentsProps: n.shape({
          closeButton: n.object,
          closeIcon: n.object,
        }),
        icon: n.node,
        iconMapping: n.shape({
          error: n.node,
          info: n.node,
          success: n.node,
          warning: n.node,
        }),
        onClose: n.func,
        role: n.string,
        severity: n.oneOfType([
          n.oneOf(['error', 'info', 'success', 'warning']),
          n.string,
        ]),
        slotProps: n.shape({
          action: n.oneOfType([n.func, n.object]),
          closeButton: n.oneOfType([n.func, n.object]),
          closeIcon: n.oneOfType([n.func, n.object]),
          icon: n.oneOfType([n.func, n.object]),
          message: n.oneOfType([n.func, n.object]),
          root: n.oneOfType([n.func, n.object]),
        }),
        slots: n.shape({
          action: n.elementType,
          closeButton: n.elementType,
          closeIcon: n.elementType,
          icon: n.elementType,
          message: n.elementType,
          root: n.elementType,
        }),
        sx: n.oneOfType([
          n.arrayOf(n.oneOfType([n.func, n.object, n.bool])),
          n.func,
          n.object,
        ]),
        variant: n.oneOfType([
          n.oneOf(['filled', 'outlined', 'standard']),
          n.string,
        ]),
      };
      const P = M;
    },
    5870: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2',
        }),
        'Wallet'
      );
    },
    6588: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20',
        }),
        'AccountCircle'
      );
    },
    8386: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
        }),
        'ExpandMore'
      );
    },
    8517: (e, o, r) => {
      r.d(o, { A: () => h });
      var t = r(9729),
        n = r(2736),
        a = r(3526),
        s = r(3140),
        l = r(7051),
        i = r(6586),
        c = r(8554),
        p = r(9566),
        d = r(5710),
        u = r(4006);
      function f(e) {
        return (0, u.Ay)('MuiAvatar', e);
      }
      (0, d.A)('MuiAvatar', [
        'root',
        'colorDefault',
        'circular',
        'rounded',
        'square',
        'img',
        'fallback',
      ]);
      var m = r(1838),
        y = r(5813);
      const v = (0, l.Ay)('div', {
          name: 'MuiAvatar',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [o.root, o[r.variant], r.colorDefault && o.colorDefault];
          },
        })(
          (0, i.A)(({ theme: e }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 40,
            height: 40,
            fontFamily: e.typography.fontFamily,
            fontSize: e.typography.pxToRem(20),
            lineHeight: 1,
            borderRadius: '50%',
            overflow: 'hidden',
            userSelect: 'none',
            variants: [
              {
                props: { variant: 'rounded' },
                style: { borderRadius: (e.vars || e).shape.borderRadius },
              },
              { props: { variant: 'square' }, style: { borderRadius: 0 } },
              {
                props: { colorDefault: !0 },
                style: {
                  color: (e.vars || e).palette.background.default,
                  ...(e.vars
                    ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
                    : {
                        backgroundColor: e.palette.grey[400],
                        ...e.applyStyles('dark', {
                          backgroundColor: e.palette.grey[600],
                        }),
                      }),
                },
              },
            ],
          }))
        ),
        g = (0, l.Ay)('img', { name: 'MuiAvatar', slot: 'Img' })({
          width: '100%',
          height: '100%',
          textAlign: 'center',
          objectFit: 'cover',
          color: 'transparent',
          textIndent: 1e4,
        }),
        A = (0, l.Ay)(p.A, { name: 'MuiAvatar', slot: 'Fallback' })({
          width: '75%',
          height: '75%',
        }),
        b = t.forwardRef(function (e, o) {
          const r = (0, c.b)({ props: e, name: 'MuiAvatar' }),
            {
              alt: n,
              children: l,
              className: i,
              component: p = 'div',
              slots: d = {},
              slotProps: u = {},
              imgProps: b,
              sizes: h,
              src: x,
              srcSet: T,
              variant: k = 'circular',
              ...j
            } = r;
          let S = null;
          const C = { ...r, component: p, variant: k },
            w = (function ({
              crossOrigin: e,
              referrerPolicy: o,
              src: r,
              srcSet: n,
            }) {
              const [a, s] = t.useState(!1);
              return (
                t.useEffect(() => {
                  if (!r && !n) return;
                  s(!1);
                  let t = !0;
                  const a = new Image();
                  return (
                    (a.onload = () => {
                      t && s('loaded');
                    }),
                    (a.onerror = () => {
                      t && s('error');
                    }),
                    (a.crossOrigin = e),
                    (a.referrerPolicy = o),
                    (a.src = r),
                    n && (a.srcset = n),
                    () => {
                      t = !1;
                    }
                  );
                }, [e, o, r, n]),
                a
              );
            })({
              ...b,
              ...('function' == typeof u.img ? u.img(C) : u.img),
              src: x,
              srcSet: T,
            }),
            B = x || T,
            O = B && 'error' !== w;
          ((C.colorDefault = !O), delete C.ownerState);
          const M = ((e) => {
              const { classes: o, variant: r, colorDefault: t } = e,
                n = {
                  root: ['root', r, t && 'colorDefault'],
                  img: ['img'],
                  fallback: ['fallback'],
                };
              return (0, s.A)(n, f, o);
            })(C),
            [P, I] = (0, m.A)('root', {
              ref: o,
              className: (0, a.A)(M.root, i),
              elementType: v,
              externalForwardedProps: {
                slots: d,
                slotProps: u,
                component: p,
                ...j,
              },
              ownerState: C,
            }),
            [z, R] = (0, m.A)('img', {
              className: M.img,
              elementType: g,
              externalForwardedProps: {
                slots: d,
                slotProps: { img: { ...b, ...u.img } },
              },
              additionalProps: { alt: n, src: x, srcSet: T, sizes: h },
              ownerState: C,
            }),
            [F, $] = (0, m.A)('fallback', {
              className: M.fallback,
              elementType: A,
              externalForwardedProps: { slots: d, slotProps: u },
              shouldForwardComponentProp: !0,
              ownerState: C,
            });
          return (
            (S = O
              ? (0, y.jsx)(z, { ...R })
              : l || 0 === l
                ? l
                : B && n
                  ? n[0]
                  : (0, y.jsx)(F, { ...$ })),
            (0, y.jsx)(P, { ...I, children: S })
          );
        });
      b.propTypes = {
        alt: n.string,
        children: n.node,
        classes: n.object,
        className: n.string,
        component: n.elementType,
        imgProps: n.object,
        sizes: n.string,
        slotProps: n.shape({
          fallback: n.oneOfType([n.func, n.object]),
          img: n.oneOfType([n.func, n.object]),
          root: n.oneOfType([n.func, n.object]),
        }),
        slots: n.shape({
          fallback: n.elementType,
          img: n.elementType,
          root: n.elementType,
        }),
        src: n.string,
        srcSet: n.string,
        sx: n.oneOfType([
          n.arrayOf(n.oneOfType([n.func, n.object, n.bool])),
          n.func,
          n.object,
        ]),
        variant: n.oneOfType([
          n.oneOf(['circular', 'rounded', 'square']),
          n.string,
        ]),
      };
      const h = b;
    },
    9336: (e, o, r) => {
      r.d(o, { A: () => h });
      var t = r(9729),
        n = r(2736),
        a = r(3526),
        s = r(3140),
        l = r(7051),
        i = r(6586),
        c = r(8554),
        p = r(2951),
        d = r(5137),
        u = r(1077),
        f = r(5710),
        m = r(4006);
      function y(e) {
        return (0, m.Ay)('MuiAppBar', e);
      }
      (0, f.A)('MuiAppBar', [
        'root',
        'positionFixed',
        'positionAbsolute',
        'positionSticky',
        'positionStatic',
        'positionRelative',
        'colorDefault',
        'colorPrimary',
        'colorSecondary',
        'colorInherit',
        'colorTransparent',
        'colorError',
        'colorInfo',
        'colorSuccess',
        'colorWarning',
      ]);
      var v = r(5813);
      const g = (e, o) => (e ? `${e?.replace(')', '')}, ${o})` : o),
        A = (0, l.Ay)(u.A, {
          name: 'MuiAppBar',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [
              o.root,
              o[`position${(0, p.A)(r.position)}`],
              o[`color${(0, p.A)(r.color)}`],
            ];
          },
        })(
          (0, i.A)(({ theme: e }) => ({
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box',
            flexShrink: 0,
            variants: [
              {
                props: { position: 'fixed' },
                style: {
                  position: 'fixed',
                  zIndex: (e.vars || e).zIndex.appBar,
                  top: 0,
                  left: 'auto',
                  right: 0,
                  '@media print': { position: 'absolute' },
                },
              },
              {
                props: { position: 'absolute' },
                style: {
                  position: 'absolute',
                  zIndex: (e.vars || e).zIndex.appBar,
                  top: 0,
                  left: 'auto',
                  right: 0,
                },
              },
              {
                props: { position: 'sticky' },
                style: {
                  position: 'sticky',
                  zIndex: (e.vars || e).zIndex.appBar,
                  top: 0,
                  left: 'auto',
                  right: 0,
                },
              },
              { props: { position: 'static' }, style: { position: 'static' } },
              {
                props: { position: 'relative' },
                style: { position: 'relative' },
              },
              {
                props: { color: 'inherit' },
                style: { '--AppBar-color': 'inherit' },
              },
              {
                props: { color: 'default' },
                style: {
                  '--AppBar-background': e.vars
                    ? e.vars.palette.AppBar.defaultBg
                    : e.palette.grey[100],
                  '--AppBar-color': e.vars
                    ? e.vars.palette.text.primary
                    : e.palette.getContrastText(e.palette.grey[100]),
                  ...e.applyStyles('dark', {
                    '--AppBar-background': e.vars
                      ? e.vars.palette.AppBar.defaultBg
                      : e.palette.grey[900],
                    '--AppBar-color': e.vars
                      ? e.vars.palette.text.primary
                      : e.palette.getContrastText(e.palette.grey[900]),
                  }),
                },
              },
              ...Object.entries(e.palette)
                .filter((0, d.A)(['contrastText']))
                .map(([o]) => ({
                  props: { color: o },
                  style: {
                    '--AppBar-background': (e.vars ?? e).palette[o].main,
                    '--AppBar-color': (e.vars ?? e).palette[o].contrastText,
                  },
                })),
              {
                props: (e) =>
                  !0 === e.enableColorOnDark &&
                  !['inherit', 'transparent'].includes(e.color),
                style: {
                  backgroundColor: 'var(--AppBar-background)',
                  color: 'var(--AppBar-color)',
                },
              },
              {
                props: (e) =>
                  !1 === e.enableColorOnDark &&
                  !['inherit', 'transparent'].includes(e.color),
                style: {
                  backgroundColor: 'var(--AppBar-background)',
                  color: 'var(--AppBar-color)',
                  ...e.applyStyles('dark', {
                    backgroundColor: e.vars
                      ? g(
                          e.vars.palette.AppBar.darkBg,
                          'var(--AppBar-background)'
                        )
                      : null,
                    color: e.vars
                      ? g(
                          e.vars.palette.AppBar.darkColor,
                          'var(--AppBar-color)'
                        )
                      : null,
                  }),
                },
              },
              {
                props: { color: 'transparent' },
                style: {
                  '--AppBar-background': 'transparent',
                  '--AppBar-color': 'inherit',
                  backgroundColor: 'var(--AppBar-background)',
                  color: 'var(--AppBar-color)',
                  ...e.applyStyles('dark', { backgroundImage: 'none' }),
                },
              },
            ],
          }))
        ),
        b = t.forwardRef(function (e, o) {
          const r = (0, c.b)({ props: e, name: 'MuiAppBar' }),
            {
              className: t,
              color: n = 'primary',
              enableColorOnDark: l = !1,
              position: i = 'fixed',
              ...d
            } = r,
            u = { ...r, color: n, position: i, enableColorOnDark: l },
            f = ((e) => {
              const { color: o, position: r, classes: t } = e,
                n = {
                  root: [
                    'root',
                    `color${(0, p.A)(o)}`,
                    `position${(0, p.A)(r)}`,
                  ],
                };
              return (0, s.A)(n, y, t);
            })(u);
          return (0, v.jsx)(A, {
            square: !0,
            component: 'header',
            ownerState: u,
            elevation: 4,
            className: (0, a.A)(f.root, t, 'fixed' === i && 'mui-fixed'),
            ref: o,
            ...d,
          });
        });
      b.propTypes = {
        children: n.node,
        classes: n.object,
        className: n.string,
        color: n.oneOfType([
          n.oneOf([
            'default',
            'inherit',
            'primary',
            'secondary',
            'transparent',
            'error',
            'info',
            'success',
            'warning',
          ]),
          n.string,
        ]),
        enableColorOnDark: n.bool,
        position: n.oneOf([
          'absolute',
          'fixed',
          'relative',
          'static',
          'sticky',
        ]),
        sx: n.oneOfType([
          n.arrayOf(n.oneOfType([n.func, n.object, n.bool])),
          n.func,
          n.object,
        ]),
      };
      const h = b;
    },
    9432: (e, o, r) => {
      r.d(o, { A: () => a });
      var t = r(9704),
        n = r(5813);
      const a = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
        }),
        'ContentCopy'
      );
    },
  },
]);
