'use strict';
(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [319],
  {
    475(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        }),
        'AccountBalanceWallet'
      );
    },
    1041(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }),
        'Send'
      );
    },
    2344(o, r, e) {
      e.d(r, { A: () => f });
      var t = e(9729),
        n = e(2736),
        s = e(3526),
        a = e(3140),
        l = e(7051),
        i = e(8554),
        c = e(1838),
        p = e(1790),
        d = e(5710),
        u = e(4006);
      function m(o) {
        return (0, u.Ay)('MuiBackdrop', o);
      }
      (0, d.A)('MuiBackdrop', ['root', 'invisible']);
      var v = e(5813);
      const g = (0, l.Ay)('div', {
          name: 'MuiBackdrop',
          slot: 'Root',
          overridesResolver(o, r) {
            const { ownerState: e } = o;
            return [r.root, e.invisible && r.invisible];
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
        h = t.forwardRef((o, r) => {
          const e = (0, i.b)({ props: o, name: 'MuiBackdrop' }),
            {
              children: t,
              className: n,
              component: l = 'div',
              invisible: d = !1,
              open: u,
              components: h = {},
              componentsProps: f = {},
              slotProps: b = {},
              slots: y = {},
              TransitionComponent: x,
              transitionDuration: k,
              ...A
            } = e,
            S = { ...e, component: l, invisible: d },
            C = ((o) => {
              const { classes: r, invisible: e } = o,
                t = { root: ['root', e && 'invisible'] };
              return (0, a.A)(t, m, r);
            })(S),
            w = {
              component: l,
              slots: { transition: x, root: h.Root, ...y },
              slotProps: { ...f, ...b },
            },
            [B, M] = (0, c.A)('root', {
              elementType: g,
              externalForwardedProps: w,
              className: (0, s.A)(C.root, n),
              ownerState: S,
            }),
            [P, I] = (0, c.A)('transition', {
              elementType: p.A,
              externalForwardedProps: w,
              ownerState: S,
            });
          return (0, v.jsx)(P, {
            in: u,
            timeout: k,
            ...A,
            ...I,
            children: (0, v.jsx)(B, {
              'aria-hidden': !0,
              ...M,
              classes: C,
              ref: r,
              children: t,
            }),
          });
        });
      h.propTypes = {
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
      const f = h;
    },
    2829(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z',
        }),
        'CardGiftcard'
      );
    },
    3403(o, r, e) {
      e.d(r, { A: () => $ });
      var t = e(9729),
        n = e(2736),
        s = e(3526),
        a = e(3140),
        l = e(7051),
        i = e(6586),
        c = e(8554),
        p = e(1838),
        d = e(2951),
        u = e(5137),
        m = e(1077),
        v = e(5710),
        g = e(4006);
      function h(o) {
        return (0, g.Ay)('MuiAlert', o);
      }
      const f = (0, v.A)('MuiAlert', [
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
      var b = e(8587),
        y = e(2754),
        x = e(8828),
        k = e(6903),
        A = e(5549),
        S = e(363),
        C = e(5813);
      const w = (0, l.Ay)(m.A, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver(o, r) {
            const { ownerState: e } = o;
            return [
              r.root,
              r[e.variant],
              r[`${e.variant}${(0, d.A)(e.color || e.severity)}`],
            ];
          },
        })(
          (0, i.A)(({ theme: o }) => {
            const r = 'light' === o.palette.mode ? o.darken : o.lighten,
              e = 'light' === o.palette.mode ? o.lighten : o.darken;
            return {
              ...o.typography.body2,
              backgroundColor: 'transparent',
              display: 'flex',
              padding: '6px 16px',
              variants: [
                ...Object.entries(o.palette)
                  .filter((0, u.A)(['light']))
                  .map(([t]) => ({
                    props: { colorSeverity: t, variant: 'standard' },
                    style: {
                      color: o.vars
                        ? o.vars.palette.Alert[`${t}Color`]
                        : r(o.palette[t].light, 0.6),
                      backgroundColor: o.vars
                        ? o.vars.palette.Alert[`${t}StandardBg`]
                        : e(o.palette[t].light, 0.9),
                      [`& .${f.icon}`]: o.vars
                        ? { color: o.vars.palette.Alert[`${t}IconColor`] }
                        : { color: o.palette[t].main },
                    },
                  })),
                ...Object.entries(o.palette)
                  .filter((0, u.A)(['light']))
                  .map(([e]) => ({
                    props: { colorSeverity: e, variant: 'outlined' },
                    style: {
                      color: o.vars
                        ? o.vars.palette.Alert[`${e}Color`]
                        : r(o.palette[e].light, 0.6),
                      border: `1px solid ${(o.vars || o).palette[e].light}`,
                      [`& .${f.icon}`]: o.vars
                        ? { color: o.vars.palette.Alert[`${e}IconColor`] }
                        : { color: o.palette[e].main },
                    },
                  })),
                ...Object.entries(o.palette)
                  .filter((0, u.A)(['dark']))
                  .map(([r]) => ({
                    props: { colorSeverity: r, variant: 'filled' },
                    style: {
                      fontWeight: o.typography.fontWeightMedium,
                      ...(o.vars
                        ? {
                            color: o.vars.palette.Alert[`${r}FilledColor`],
                            backgroundColor:
                              o.vars.palette.Alert[`${r}FilledBg`],
                          }
                        : {
                            backgroundColor:
                              'dark' === o.palette.mode
                                ? o.palette[r].dark
                                : o.palette[r].main,
                            color: o.palette.getContrastText(o.palette[r].main),
                          }),
                    },
                  })),
              ],
            };
          })
        ),
        B = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Icon' })({
          marginRight: 12,
          padding: '7px 0',
          display: 'flex',
          fontSize: 22,
          opacity: 0.9,
        }),
        M = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Message' })({
          padding: '8px 0',
          minWidth: 0,
          overflow: 'auto',
        }),
        P = (0, l.Ay)('div', { name: 'MuiAlert', slot: 'Action' })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8,
        }),
        I = {
          success: (0, C.jsx)(y.A, { fontSize: 'inherit' }),
          warning: (0, C.jsx)(x.A, { fontSize: 'inherit' }),
          error: (0, C.jsx)(k.A, { fontSize: 'inherit' }),
          info: (0, C.jsx)(A.A, { fontSize: 'inherit' }),
        },
        z = t.forwardRef((o, r) => {
          const e = (0, c.b)({ props: o, name: 'MuiAlert' }),
            {
              action: t,
              children: n,
              className: l,
              closeText: i = 'Close',
              color: u,
              components: m = {},
              componentsProps: v = {},
              icon: g,
              iconMapping: f = I,
              onClose: y,
              role: x = 'alert',
              severity: k = 'success',
              slotProps: A = {},
              slots: z = {},
              variant: $ = 'standard',
              ...F
            } = e,
            T = {
              ...e,
              color: u,
              severity: k,
              variant: $,
              colorSeverity: u || k,
            },
            N = ((o) => {
              const { variant: r, color: e, severity: t, classes: n } = o,
                s = {
                  root: [
                    'root',
                    `color${(0, d.A)(e || t)}`,
                    `${r}${(0, d.A)(e || t)}`,
                    `${r}`,
                  ],
                  icon: ['icon'],
                  message: ['message'],
                  action: ['action'],
                };
              return (0, a.A)(s, h, n);
            })(T),
            R = {
              slots: {
                closeButton: m.CloseButton,
                closeIcon: m.CloseIcon,
                ...z,
              },
              slotProps: { ...v, ...A },
            },
            [H, D] = (0, p.A)('root', {
              ref: r,
              shouldForwardComponentProp: !0,
              className: (0, s.A)(N.root, l),
              elementType: w,
              externalForwardedProps: { ...R, ...F },
              ownerState: T,
              additionalProps: { role: x, elevation: 0 },
            }),
            [W, V] = (0, p.A)('icon', {
              className: N.icon,
              elementType: B,
              externalForwardedProps: R,
              ownerState: T,
            }),
            [O, j] = (0, p.A)('message', {
              className: N.message,
              elementType: M,
              externalForwardedProps: R,
              ownerState: T,
            }),
            [E, L] = (0, p.A)('action', {
              className: N.action,
              elementType: P,
              externalForwardedProps: R,
              ownerState: T,
            }),
            [q, G] = (0, p.A)('closeButton', {
              elementType: b.A,
              externalForwardedProps: R,
              ownerState: T,
            }),
            [J, K] = (0, p.A)('closeIcon', {
              elementType: S.A,
              externalForwardedProps: R,
              ownerState: T,
            });
          return (0, C.jsxs)(H, {
            ...D,
            children: [
              !1 !== g
                ? (0, C.jsx)(W, { ...V, children: g || f[k] || I[k] })
                : null,
              (0, C.jsx)(O, { ...j, children: n }),
              null != t ? (0, C.jsx)(E, { ...L, children: t }) : null,
              null == t && y
                ? (0, C.jsx)(E, {
                    ...L,
                    children: (0, C.jsx)(q, {
                      size: 'small',
                      'aria-label': i,
                      title: i,
                      color: 'inherit',
                      onClick: y,
                      ...G,
                      children: (0, C.jsx)(J, { fontSize: 'small', ...K }),
                    }),
                  })
                : null,
            ],
          });
        });
      z.propTypes = {
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
      const $ = z;
    },
    5870(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2',
        }),
        'Wallet'
      );
    },
    6588(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20',
        }),
        'AccountCircle'
      );
    },
    8386(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
        }),
        'ExpandMore'
      );
    },
    8517(o, r, e) {
      e.d(r, { A: () => x });
      var t = e(9729),
        n = e(2736),
        s = e(3526),
        a = e(3140),
        l = e(7051),
        i = e(6586),
        c = e(8554),
        p = e(9566),
        d = e(5710),
        u = e(4006);
      function m(o) {
        return (0, u.Ay)('MuiAvatar', o);
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
      var v = e(1838),
        g = e(5813);
      const h = (0, l.Ay)('div', {
          name: 'MuiAvatar',
          slot: 'Root',
          overridesResolver(o, r) {
            const { ownerState: e } = o;
            return [r.root, r[e.variant], e.colorDefault && r.colorDefault];
          },
        })(
          (0, i.A)(({ theme: o }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 40,
            height: 40,
            fontFamily: o.typography.fontFamily,
            fontSize: o.typography.pxToRem(20),
            lineHeight: 1,
            borderRadius: '50%',
            overflow: 'hidden',
            userSelect: 'none',
            variants: [
              {
                props: { variant: 'rounded' },
                style: { borderRadius: (o.vars || o).shape.borderRadius },
              },
              { props: { variant: 'square' }, style: { borderRadius: 0 } },
              {
                props: { colorDefault: !0 },
                style: {
                  color: (o.vars || o).palette.background.default,
                  ...(o.vars
                    ? { backgroundColor: o.vars.palette.Avatar.defaultBg }
                    : {
                        backgroundColor: o.palette.grey[400],
                        ...o.applyStyles('dark', {
                          backgroundColor: o.palette.grey[600],
                        }),
                      }),
                },
              },
            ],
          }))
        ),
        f = (0, l.Ay)('img', { name: 'MuiAvatar', slot: 'Img' })({
          width: '100%',
          height: '100%',
          textAlign: 'center',
          objectFit: 'cover',
          color: 'transparent',
          textIndent: 1e4,
        }),
        b = (0, l.Ay)(p.A, { name: 'MuiAvatar', slot: 'Fallback' })({
          width: '75%',
          height: '75%',
        }),
        y = t.forwardRef((o, r) => {
          const e = (0, c.b)({ props: o, name: 'MuiAvatar' }),
            {
              alt: n,
              children: l,
              className: i,
              component: p = 'div',
              slots: d = {},
              slotProps: u = {},
              imgProps: y,
              sizes: x,
              src: k,
              srcSet: A,
              variant: S = 'circular',
              ...C
            } = e;
          let w = null;
          const B = { ...e, component: p, variant: S },
            M = (({ crossOrigin: o, referrerPolicy: r, src: e, srcSet: n }) => {
              const [s, a] = t.useState(!1);
              return (
                t.useEffect(() => {
                  if (!e && !n) return;
                  a(!1);
                  let t = !0;
                  const s = new Image();
                  return (
                    (s.onload = () => {
                      t && a('loaded');
                    }),
                    (s.onerror = () => {
                      t && a('error');
                    }),
                    (s.crossOrigin = o),
                    (s.referrerPolicy = r),
                    (s.src = e),
                    n && (s.srcset = n),
                    () => {
                      t = !1;
                    }
                  );
                }, [o, r, e, n]),
                s
              );
            })({
              ...y,
              ...('function' == typeof u.img ? u.img(B) : u.img),
              src: k,
              srcSet: A,
            }),
            P = k || A,
            I = P && 'error' !== M;
          ((B.colorDefault = !I), delete B.ownerState);
          const z = ((o) => {
              const { classes: r, variant: e, colorDefault: t } = o,
                n = {
                  root: ['root', e, t && 'colorDefault'],
                  img: ['img'],
                  fallback: ['fallback'],
                };
              return (0, a.A)(n, m, r);
            })(B),
            [$, F] = (0, v.A)('root', {
              ref: r,
              className: (0, s.A)(z.root, i),
              elementType: h,
              externalForwardedProps: {
                slots: d,
                slotProps: u,
                component: p,
                ...C,
              },
              ownerState: B,
            }),
            [T, N] = (0, v.A)('img', {
              className: z.img,
              elementType: f,
              externalForwardedProps: {
                slots: d,
                slotProps: { img: { ...y, ...u.img } },
              },
              additionalProps: { alt: n, src: k, srcSet: A, sizes: x },
              ownerState: B,
            }),
            [R, H] = (0, v.A)('fallback', {
              className: z.fallback,
              elementType: b,
              externalForwardedProps: { slots: d, slotProps: u },
              shouldForwardComponentProp: !0,
              ownerState: B,
            });
          return (
            (w = I
              ? (0, g.jsx)(T, { ...N })
              : l || 0 === l
                ? l
                : P && n
                  ? n[0]
                  : (0, g.jsx)(R, { ...H })),
            (0, g.jsx)($, { ...F, children: w })
          );
        });
      y.propTypes = {
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
      const x = y;
    },
    9336(o, r, e) {
      e.d(r, { A: () => x });
      var t = e(9729),
        n = e(2736),
        s = e(3526),
        a = e(3140),
        l = e(7051),
        i = e(6586),
        c = e(8554),
        p = e(2951),
        d = e(5137),
        u = e(1077),
        m = e(5710),
        v = e(4006);
      function g(o) {
        return (0, v.Ay)('MuiAppBar', o);
      }
      (0, m.A)('MuiAppBar', [
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
      var h = e(5813);
      const f = (o, r) => (o ? `${o?.replace(')', '')}, ${r})` : r),
        b = (0, l.Ay)(u.A, {
          name: 'MuiAppBar',
          slot: 'Root',
          overridesResolver(o, r) {
            const { ownerState: e } = o;
            return [
              r.root,
              r[`position${(0, p.A)(e.position)}`],
              r[`color${(0, p.A)(e.color)}`],
            ];
          },
        })(
          (0, i.A)(({ theme: o }) => ({
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
                  zIndex: (o.vars || o).zIndex.appBar,
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
                  zIndex: (o.vars || o).zIndex.appBar,
                  top: 0,
                  left: 'auto',
                  right: 0,
                },
              },
              {
                props: { position: 'sticky' },
                style: {
                  position: 'sticky',
                  zIndex: (o.vars || o).zIndex.appBar,
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
                  '--AppBar-background': o.vars
                    ? o.vars.palette.AppBar.defaultBg
                    : o.palette.grey[100],
                  '--AppBar-color': o.vars
                    ? o.vars.palette.text.primary
                    : o.palette.getContrastText(o.palette.grey[100]),
                  ...o.applyStyles('dark', {
                    '--AppBar-background': o.vars
                      ? o.vars.palette.AppBar.defaultBg
                      : o.palette.grey[900],
                    '--AppBar-color': o.vars
                      ? o.vars.palette.text.primary
                      : o.palette.getContrastText(o.palette.grey[900]),
                  }),
                },
              },
              ...Object.entries(o.palette)
                .filter((0, d.A)(['contrastText']))
                .map(([r]) => ({
                  props: { color: r },
                  style: {
                    '--AppBar-background': (o.vars ?? o).palette[r].main,
                    '--AppBar-color': (o.vars ?? o).palette[r].contrastText,
                  },
                })),
              {
                props: (o) =>
                  !0 === o.enableColorOnDark &&
                  !['inherit', 'transparent'].includes(o.color),
                style: {
                  backgroundColor: 'var(--AppBar-background)',
                  color: 'var(--AppBar-color)',
                },
              },
              {
                props: (o) =>
                  !1 === o.enableColorOnDark &&
                  !['inherit', 'transparent'].includes(o.color),
                style: {
                  backgroundColor: 'var(--AppBar-background)',
                  color: 'var(--AppBar-color)',
                  ...o.applyStyles('dark', {
                    backgroundColor: o.vars
                      ? f(
                          o.vars.palette.AppBar.darkBg,
                          'var(--AppBar-background)'
                        )
                      : null,
                    color: o.vars
                      ? f(
                          o.vars.palette.AppBar.darkColor,
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
                  ...o.applyStyles('dark', { backgroundImage: 'none' }),
                },
              },
            ],
          }))
        ),
        y = t.forwardRef((o, r) => {
          const e = (0, c.b)({ props: o, name: 'MuiAppBar' }),
            {
              className: t,
              color: n = 'primary',
              enableColorOnDark: l = !1,
              position: i = 'fixed',
              ...d
            } = e,
            u = { ...e, color: n, position: i, enableColorOnDark: l },
            m = ((o) => {
              const { color: r, position: e, classes: t } = o,
                n = {
                  root: [
                    'root',
                    `color${(0, p.A)(r)}`,
                    `position${(0, p.A)(e)}`,
                  ],
                };
              return (0, a.A)(n, g, t);
            })(u);
          return (0, h.jsx)(b, {
            square: !0,
            component: 'header',
            ownerState: u,
            elevation: 4,
            className: (0, s.A)(m.root, t, 'fixed' === i && 'mui-fixed'),
            ref: r,
            ...d,
          });
        });
      y.propTypes = {
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
      const x = y;
    },
    9432(o, r, e) {
      e.d(r, { A: () => s });
      var t = e(9704),
        n = e(5813);
      const s = (0, t.A)(
        (0, n.jsx)('path', {
          d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
        }),
        'ContentCopy'
      );
    },
  },
]);
