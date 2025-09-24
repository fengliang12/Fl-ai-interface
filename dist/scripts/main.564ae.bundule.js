(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [792],
  {
    93(e, t, n) {
      'use strict';
      var r = n(7964),
        a = n(3512),
        i = n(237),
        o = n(9729),
        u = n.n(o),
        l = n(4066),
        c = n(9336),
        s = n(5620),
        f = n(8388),
        d = n(9788),
        y = n(2844),
        m = n(3269),
        b = n(5242),
        v = n(475),
        p = n(1041),
        h = n(1077),
        w = n(3403),
        g = n(52),
        x = n(6058),
        N = n(9604),
        O = n(433),
        j = n(8935),
        k = n(7269),
        E = n(3571),
        S = n(9105),
        A = n(4566),
        I = n(3226);
      const C = [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'Already',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'depositor',
              type: 'address',
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'count',
              type: 'uint256',
            },
            {
              indexed: !1,
              internalType: 'bool',
              name: 'isEqual',
              type: 'bool',
            },
          ],
          name: 'DepositMade',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'NoAmount',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
            {
              indexed: !1,
              internalType: 'uint256',
              name: 'count',
              type: 'uint256',
            },
          ],
          name: 'NoRedPacket',
          type: 'event',
        },
        {
          inputs: [],
          name: 'count',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'uint256', name: 'c', type: 'uint256' },
            { internalType: 'bool', name: '_isEqual', type: 'bool' },
          ],
          name: 'deposit',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'getBalance',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'isEqual',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'owner',
          outputs: [
            { internalType: 'address payable', name: '', type: 'address' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'sendRedPacket',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'totalAmount',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
      ];
      var T = n(4085),
        M = {
          mainnet: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
            rpcUrls: [
              'https://eth.llamarpc.com',
              'https://rpc.ankr.com/eth',
              'https://ethereum.publicnode.com',
            ],
            blockExplorerUrls: ['https://etherscan.io'],
          },
          sepolia: {
            chainId: '0xaa36a7',
            chainName: 'Sepolia Test Network',
            nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
            rpcUrls: [
              'https://sepolia.gateway.tenderly.co',
              'https://eth-sepolia.public.blastapi.io',
              'https://api.zan.top/eth-sepolia',
            ],
            blockExplorerUrls: ['https://sepolia.etherscan.io'],
          },
        };
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function W(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function z(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise((r, a) => {
            var i = e.apply(t, n);
            function o(e) {
              W(i, r, a, o, u, 'next', e);
            }
            function u(e) {
              W(i, r, a, o, u, 'throw', e);
            }
            o(void 0);
          });
        };
      }
      function U(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(
                (e) => Object.getOwnPropertyDescriptor(n, e).enumerable
              )
            )),
            r.forEach((t) => {
              U(e, t, n[t]);
            }));
        }
        return e;
      }
      function R(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ((e) => {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n);
                }
                return t;
              })(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      function _(e, t) {
        return (
          ((e) => {
            if (Array.isArray(e)) return e;
          })(e) ||
          ((e, t) => {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ((u = !0), (a = l));
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ((e, t) => {
            if (e) {
              if ('string' == typeof e) return P(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? P(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (() => {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function D(e, t) {
        var n,
          r,
          a,
          i = {
            label: 0,
            sent() {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          o = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (o.next = u(0)),
          (o.throw = u(1)),
          (o.return = u(2)),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return (l) =>
            ((u) => {
              if (n) throw new TypeError('Generator is already executing.');
              for (; o && ((o = 0), u[0] && (i = 0)), i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & u[0]
                          ? r.return
                          : u[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, u[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (u = [2 & u[0], a.value]), u[0])) {
                    case 0:
                    case 1:
                      a = u;
                      break;
                    case 4:
                      return (i.label++, { value: u[1], done: !1 });
                    case 5:
                      (i.label++, (r = u[1]), (u = [0]));
                      continue;
                    case 7:
                      ((u = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0])
                        )
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === u[0] && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                        i.label = u[1];
                        break;
                      }
                      if (6 === u[0] && i.label < a[1]) {
                        ((i.label = a[1]), (a = u));
                        break;
                      }
                      if (a && i.label < a[2]) {
                        ((i.label = a[2]), i.ops.push(u));
                        break;
                      }
                      (a[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  u = t.call(e, i);
                } catch (l) {
                  ((u = [6, l]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
        }
      }
      function H(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(
                (e) => Object.getOwnPropertyDescriptor(n, e).enumerable
              )
            )),
            r.forEach((t) => {
              H(e, t, n[t]);
            }));
        }
        return e;
      }
      var B = (0, o.createContext)(void 0);
      const G = function (e) {
        var t = e.children,
          n = (function () {
            var e = _(
                (0, o.useState)({
                  isConnected: !1,
                  address: null,
                  balance: null,
                  chainId: null,
                  networkName: null,
                  provider: null,
                  signer: null,
                  account: null,
                  networks: M,
                }),
                2
              ),
              t = e[0],
              n = e[1],
              r = _((0, o.useState)(!1), 2),
              a = r[0],
              i = r[1],
              u = _((0, o.useState)(''), 2),
              l = u[0],
              c = u[1],
              s = (e) => {
                var t = Object.entries(M).find((t) => _(t, 2)[1].chainId === e);
                return t ? t[1].chainName : 'Unknown Network';
              },
              f = (0, o.useCallback)(function (e) {
                return z(function () {
                  var t, r, a, i, o, u, l, f;
                  return D(this, (d) => {
                    switch (d.label) {
                      case 0:
                        return (d.trys.push([0, 5, , 6]), [4, e.getSigner()]);
                      case 1:
                        return [4, (t = d.sent()).getAddress()];
                      case 2:
                        return ((r = d.sent()), [4, e.getBalance(r)]);
                      case 3:
                        return ((a = d.sent()), [4, e.getNetwork()]);
                      case 4:
                        return (
                          (i = d.sent()),
                          (o = '0x'.concat(i.chainId.toString(16))),
                          n((n) =>
                            R(q({}, n), {
                              isConnected: !0,
                              address: r,
                              balance: S.ck(a),
                              chainId: o,
                              networkName: s(o),
                              provider: e,
                              signer: t,
                              account: r,
                            })
                          ),
                          c(''),
                          [3, 6]
                        );
                      case 5:
                        return 'NETWORK_ERROR' ===
                          (null == (u = d.sent()) ? void 0 : u.code) ||
                          (null == u || null === (l = u.message) || void 0 === l
                            ? void 0
                            : l.includes('network changed'))
                          ? [2]
                          : (-32603 === (null == u ? void 0 : u.code)
                              ? c('网络连接问题，请稍后重试')
                              : (
                                    null == u ||
                                    null === (f = u.message) ||
                                    void 0 === f
                                      ? void 0
                                      : f.includes('circuit breaker')
                                  )
                                ? c('网络请求过于频繁，请稍后重试')
                                : 4001 === (null == u ? void 0 : u.code)
                                  ? c('用户拒绝了连接请求')
                                  : c('钱包连接失败，请检查网络连接'),
                            [3, 6]);
                      case 6:
                        return [2];
                    }
                  });
                })();
              }, []),
              d = (0, o.useCallback)(function (e) {
                return z(function () {
                  var t, n;
                  return D(this, (r) => {
                    switch (r.label) {
                      case 0:
                        if (!window.ethereum)
                          return (c('请安装 MetaMask 或其他 Web3 钱包'), [2]);
                        ((t = M[e]), c(''), (r.label = 1));
                      case 1:
                        return (
                          r.trys.push([1, 3, , 10]),
                          [
                            4,
                            window.ethereum.request({
                              method: 'wallet_switchEthereumChain',
                              params: [{ chainId: t.chainId }],
                            }),
                          ]
                        );
                      case 2:
                        return (r.sent(), [3, 10]);
                      case 3:
                        if (4902 !== (n = r.sent()).code) return [3, 8];
                        r.label = 4;
                      case 4:
                        return (
                          r.trys.push([4, 6, , 7]),
                          [
                            4,
                            window.ethereum.request({
                              method: 'wallet_addEthereumChain',
                              params: [t],
                            }),
                          ]
                        );
                      case 5:
                        return (r.sent(), [3, 7]);
                      case 6:
                        return (
                          4001 === r.sent().code
                            ? c('用户拒绝了添加网络的请求')
                            : c('添加网络失败，请手动添加'),
                          [3, 7]
                        );
                      case 7:
                        return [3, 9];
                      case 8:
                        (4001 === n.code
                          ? c('用户拒绝了切换网络的请求')
                          : c('网络切换失败，请重试'),
                          (r.label = 9));
                      case 9:
                        return [3, 10];
                      case 10:
                        return [2];
                    }
                  });
                })();
              }, []),
              y = (0, o.useCallback)(function () {
                return z(function () {
                  var e;
                  return D(this, (t) => {
                    switch (t.label) {
                      case 0:
                        if ((i(!0), c(''), !window.ethereum))
                          return (
                            c('请安装 MetaMask 或其他 Web3 钱包'),
                            i(!1),
                            [2]
                          );
                        t.label = 1;
                      case 1:
                        return (
                          t.trys.push([1, 4, 5, 6]),
                          [
                            4,
                            window.ethereum.request({
                              method: 'eth_requestAccounts',
                            }),
                          ]
                        );
                      case 2:
                        return (
                          t.sent(),
                          (e = new T.k(window.ethereum)),
                          [4, f(e)]
                        );
                      case 3:
                        return (t.sent(), [3, 6]);
                      case 4:
                        return (
                          4001 === t.sent().code
                            ? c('用户拒绝了连接请求')
                            : c('钱包连接失败，请重试'),
                          [3, 6]
                        );
                      case 5:
                        return (i(!1), [7]);
                      case 6:
                        return [2];
                    }
                  });
                })();
              }, []);
            (0, o.useEffect)(
              function () {
                if (t.provider) {
                  var e = (e) => {
                    0 === e.length
                      ? m()
                      : e[0] !== t.account &&
                        (n(R(q({}, t), { account: e[0] })),
                        t.provider && f(t.provider));
                  };
                  window.ethereum.on('accountsChanged', e);
                  var r = function () {
                    return z(function () {
                      var e;
                      return D(this, (t) => {
                        switch (t.label) {
                          case 0:
                            return (
                              t.trys.push([0, 2, , 3]),
                              (e = new T.k(window.ethereum)),
                              [4, f(e)]
                            );
                          case 1:
                            return (t.sent(), [3, 3]);
                          case 2:
                            return (
                              t.sent(),
                              c('网络切换失败，请重新连接钱包'),
                              [3, 3]
                            );
                          case 3:
                            return [2];
                        }
                      });
                    })();
                  };
                  return (
                    window.ethereum.on('chainChanged', r),
                    () => {
                      (window.ethereum.removeListener('chainChanged', r),
                        window.ethereum.removeListener('accountsChanged', e));
                    }
                  );
                }
              },
              [t.provider]
            );
            var m = (0, o.useCallback)(() => {
              (n({
                isConnected: !1,
                address: null,
                balance: null,
                chainId: null,
                networkName: null,
                provider: null,
                signer: null,
                account: null,
                networks: M,
              }),
                c(''));
            }, []);
            return (
              (0, o.useEffect)(function () {
                z(function () {
                  var e;
                  return D(this, (t) => {
                    switch (t.label) {
                      case 0:
                        if (!window.ethereum) return [2];
                        t.label = 1;
                      case 1:
                        return (
                          t.trys.push([1, 5, , 6]),
                          [
                            4,
                            window.ethereum.request({ method: 'eth_accounts' }),
                          ]
                        );
                      case 2:
                        return t.sent().length > 0
                          ? ((e = new T.k(window.ethereum)), [4, f(e)])
                          : [3, 4];
                      case 3:
                        (t.sent(), (t.label = 4));
                      case 4:
                        return [3, 6];
                      case 5:
                        return (t.sent(), [3, 6]);
                      case 6:
                        return [2];
                    }
                  });
                })();
              }, []),
              R(q({}, t), {
                isConnecting: a,
                error: l,
                connectWallet: y,
                disconnectWallet: m,
                switchNetwork: d,
              })
            );
          })();
        return u().createElement(B.Provider, { value: $({}, n) }, t);
      };
      var F = () => {
        var e = (0, o.useContext)(B);
        if (void 0 === e)
          throw new Error(
            'useWalletContext must be used within a WalletProvider'
          );
        return e;
      };
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function L(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function J(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise((r, a) => {
            var i = e.apply(t, n);
            function o(e) {
              L(i, r, a, o, u, 'next', e);
            }
            function u(e) {
              L(i, r, a, o, u, 'throw', e);
            }
            o(void 0);
          });
        };
      }
      function Q(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function V(e, t) {
        return (
          ((e) => {
            if (Array.isArray(e)) return e;
          })(e) ||
          ((e, t) => {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ((u = !0), (a = l));
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ((e, t) => {
            if (e) {
              if ('string' == typeof e) return K(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? K(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (() => {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function X(e, t) {
        var n,
          r,
          a,
          i = {
            label: 0,
            sent() {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          o = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (o.next = u(0)),
          (o.throw = u(1)),
          (o.return = u(2)),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return (l) =>
            ((u) => {
              if (n) throw new TypeError('Generator is already executing.');
              for (; o && ((o = 0), u[0] && (i = 0)), i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & u[0]
                          ? r.return
                          : u[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, u[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (u = [2 & u[0], a.value]), u[0])) {
                    case 0:
                    case 1:
                      a = u;
                      break;
                    case 4:
                      return (i.label++, { value: u[1], done: !1 });
                    case 5:
                      (i.label++, (r = u[1]), (u = [0]));
                      continue;
                    case 7:
                      ((u = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0])
                        )
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === u[0] && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                        i.label = u[1];
                        break;
                      }
                      if (6 === u[0] && i.label < a[1]) {
                        ((i.label = a[1]), (a = u));
                        break;
                      }
                      if (a && i.label < a[2]) {
                        ((i.label = a[2]), i.ops.push(u));
                        break;
                      }
                      (a[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  u = t.call(e, i);
                } catch (l) {
                  ((u = [6, l]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
        }
      }
      var Y = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99',
        Z = C,
        ee = (0, A.eU)({ count: '', isEqual: !0, balance: '', address: '' });
      const te = function () {
        var e = F(),
          t = e.isConnected,
          n = e.signer,
          r = V((0, I.fp)(ee), 2),
          a = r[0],
          i = r[1],
          l = V((0, o.useState)(''), 2),
          c = l[0],
          s = l[1],
          f = V((0, o.useState)(!0), 2),
          d = f[0],
          b = f[1],
          A = V((0, o.useState)(''), 2),
          C = A[0],
          T = A[1],
          M = V((0, o.useState)(!1), 2),
          P = M[0],
          W = M[1],
          z = V((0, o.useState)(null), 2),
          U = z[0],
          q = z[1],
          R = V((0, o.useState)(null), 2),
          _ = R[0],
          D = R[1],
          H = function () {
            return J(function () {
              var e, t, r, o;
              return X(this, (u) => {
                switch (u.label) {
                  case 0:
                    if (!n) return [2];
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 5, , 6]),
                      [4, (e = new E.NZ(Y, Z, n)).getBalance()]
                    );
                  case 2:
                    return ((t = u.sent()), [4, e.count()]);
                  case 3:
                    return ((r = u.sent()), [4, e.isEqual()]);
                  case 4:
                    return (
                      (o = u.sent()),
                      i(
                        ((l = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            ('function' ==
                              typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  (e) =>
                                    Object.getOwnPropertyDescriptor(n, e)
                                      .enumerable
                                )
                              )),
                              r.forEach((t) => {
                                Q(e, t, n[t]);
                              }));
                          }
                          return e;
                        })({}, a)),
                        (c =
                          null !=
                          (c = {
                            count: S.Js(r, 0),
                            address: Y,
                            isEqual: o,
                            balance: S.ck(t),
                          })
                            ? c
                            : {}),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              l,
                              Object.getOwnPropertyDescriptors(c)
                            )
                          : ((e) => {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, n);
                              }
                              return t;
                            })(Object(c)).forEach((e) => {
                              Object.defineProperty(
                                l,
                                e,
                                Object.getOwnPropertyDescriptor(c, e)
                              );
                            }),
                        l)
                      ),
                      [3, 6]
                    );
                  case 5:
                    return (u.sent(), [3, 6]);
                  case 6:
                    return [2];
                }
                var l, c;
              });
            })();
          };
        return (
          (0, o.useEffect)(() => {
            t && n && H();
          }, [t, n]),
          u().createElement(
            h.A,
            { className: 'p-6 hover:shadow-lg transition-shadow duration-300' },
            u().createElement(
              m.A,
              { className: 'text-center mb-6' },
              u().createElement(v.A, {
                className: 'text-primary-500 mb-2',
                sx: { fontSize: 48 },
              }),
              u().createElement(
                y.A,
                { variant: 'h5', className: 'mb-2 font-semibold' },
                '红包充值'
              )
            ),
            U &&
              u().createElement(
                w.A,
                { severity: 'error', className: 'mb-4' },
                U
              ),
            _ &&
              u().createElement(
                w.A,
                { severity: 'success', className: 'mb-4' },
                _
              ),
            t
              ? u().createElement(
                  m.A,
                  null,
                  u().createElement(g.A, { className: 'mb-4' }),
                  u().createElement(
                    m.A,
                    { className: 'space-y-4' },
                    u().createElement(x.A, {
                      fullWidth: !0,
                      label: '红包数量',
                      type: 'number',
                      value: c,
                      onChange: (e) => s(e.target.value),
                      placeholder: '请输入红包数量',
                      inputProps: { min: 1 },
                    }),
                    u().createElement(N.A, {
                      control: u().createElement(O.A, {
                        checked: d,
                        onChange: (e) => b(e.target.checked),
                        color: 'primary',
                      }),
                      label: d ? '等额发放' : '随机金额',
                    }),
                    u().createElement(x.A, {
                      fullWidth: !0,
                      label: '充值金额 (ETH)',
                      type: 'number',
                      value: C,
                      onChange: (e) => T(e.target.value),
                      placeholder: '请输入充值金额',
                      inputProps: { min: 0, step: 0.001 },
                    }),
                    u().createElement(
                      j.A,
                      {
                        variant: 'contained',
                        color: 'primary',
                        fullWidth: !0,
                        size: 'large',
                        onClick: () =>
                          J(function () {
                            var e, t, r, a;
                            return X(this, (i) => {
                              switch (i.label) {
                                case 0:
                                  if (!n || !c || !C)
                                    return (q('请填写完整信息'), [2]);
                                  if (
                                    ((e = Number.parseInt(c)),
                                    (t = Number.parseFloat(C)),
                                    e <= 0 || t <= 0)
                                  )
                                    return (
                                      q('红包数量和充值金额必须大于0'),
                                      [2]
                                    );
                                  (W(!0), q(null), D(null), (i.label = 1));
                                case 1:
                                  return (
                                    i.trys.push([1, 5, 6, 7]),
                                    [
                                      4,
                                      new E.NZ(Y, Z, n).deposit(e, d, {
                                        value: S.g5(C),
                                      }),
                                    ]
                                  );
                                case 2:
                                  return [4, i.sent().wait()];
                                case 3:
                                  return (
                                    i.sent(),
                                    D(
                                      '成功充值 '
                                        .concat(C, ' ETH，创建 ')
                                        .concat(e, ' 个红包！')
                                    ),
                                    [4, H()]
                                  );
                                case 4:
                                  return (i.sent(), s(''), T(''), [3, 7]);
                                case 5:
                                  return (
                                    4001 === (r = i.sent()).code
                                      ? q('用户取消了交易')
                                      : (
                                            null === (a = r.message) ||
                                            void 0 === a
                                              ? void 0
                                              : a.includes('insufficient funds')
                                          )
                                        ? q('余额不足')
                                        : q('充值失败，请重试'),
                                    [3, 7]
                                  );
                                case 6:
                                  return (W(!1), [7]);
                                case 7:
                                  return [2];
                              }
                            });
                          })(),
                        disabled: P || !c || !C,
                        startIcon: P
                          ? u().createElement(k.A, { size: 20 })
                          : u().createElement(p.A, null),
                      },
                      P ? '充值中...' : '充值红包'
                    )
                  )
                )
              : u().createElement(
                  m.A,
                  { className: 'text-center' },
                  u().createElement(
                    y.A,
                    { variant: 'h6', className: 'mb-4' },
                    '请先连接钱包'
                  )
                )
          )
        );
      };
      function ne(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const re = () => {
        var e,
          t,
          n,
          r,
          a = ((n = (0, I.fp)(ee)),
          (r = 1),
          ((e) => {
            if (Array.isArray(e)) return e;
          })(n) ||
            ((e, t) => {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
              if (null != n) {
                var r,
                  a,
                  i = [],
                  o = !0,
                  u = !1;
                try {
                  for (
                    n = n.call(e);
                    !(o = (r = n.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    o = !0
                  );
                } catch (l) {
                  ((u = !0), (a = l));
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (u) throw a;
                  }
                }
                return i;
              }
            })(n, r) ||
            ((e, t) => {
              if (e) {
                if ('string' == typeof e) return ne(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(n)
                    : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? ne(e, t)
                      : void 0
                );
              }
            })(n, r) ||
            (() => {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })())[0];
        return u().createElement(
          'div',
          { className: 'Dashboard' },
          u().createElement(
            y.A,
            { variant: 'h5', className: '!mb-6 font-semibold text-center' },
            '平台统计'
          ),
          u().createElement(
            'div',
            {
              className:
                'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6',
            },
            u().createElement(
              h.A,
              { className: 'p-4 text-center h-full' },
              u().createElement(
                y.A,
                { variant: 'h4', className: 'font-bold text-primary-600' },
                null == a ? void 0 : a.count
              ),
              u().createElement(
                y.A,
                { variant: 'body2', className: 'text-gray-600' },
                '总红包数'
              )
            ),
            u().createElement(
              h.A,
              { className: 'p-4 text-center h-full' },
              u().createElement(
                y.A,
                { variant: 'h4', className: 'font-bold text-secondary-600' },
                (null == a ? void 0 : a.isEqual) ? '是' : '否'
              ),
              u().createElement(
                y.A,
                { variant: 'body2', className: 'text-gray-600' },
                '是否等额发放'
              )
            ),
            u().createElement(
              h.A,
              { className: 'p-4 text-center h-full' },
              u().createElement(
                y.A,
                { variant: 'h4', className: 'font-bold text-green-600' },
                Number(null == a ? void 0 : a.balance).toFixed(6)
              ),
              u().createElement(
                y.A,
                { variant: 'body2', className: 'text-gray-600' },
                '总金额 (ETH)'
              )
            ),
            u().createElement(
              h.A,
              {
                className:
                  'p-4 text-center h-full cursor-pointer hover:shadow-lg transition-shadow',
                onClick: () =>
                  window.open(
                    'https://sepolia.etherscan.io/address/'.concat(
                      null == a ? void 0 : a.address
                    ),
                    '_blank'
                  ),
              },
              u().createElement(
                y.A,
                {
                  variant: 'h4',
                  className:
                    'font-bold text-orange-600 hover:text-orange-700 transition-colors',
                  title: '点击查看合约详情',
                },
                null == a || null === (e = a.address) || void 0 === e
                  ? void 0
                  : e.slice(0, 4),
                '...',
                null == a || null === (t = a.address) || void 0 === t
                  ? void 0
                  : t.slice(-4)
              ),
              u().createElement(
                y.A,
                { variant: 'body2', className: 'text-gray-600' },
                '红包合约地址（点击查看）'
              )
            )
          )
        );
      };
      var ae = n(2829),
        ie = n(7);
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ue(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function le(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise((r, a) => {
            var i = e.apply(t, n);
            function o(e) {
              ue(i, r, a, o, u, 'next', e);
            }
            function u(e) {
              ue(i, r, a, o, u, 'throw', e);
            }
            o(void 0);
          });
        };
      }
      function ce(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function se(e, t) {
        return (
          ((e) => {
            if (Array.isArray(e)) return e;
          })(e) ||
          ((e, t) => {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ((u = !0), (a = l));
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ((e, t) => {
            if (e) {
              if ('string' == typeof e) return oe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? oe(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (() => {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function fe(e, t) {
        var n,
          r,
          a,
          i = {
            label: 0,
            sent() {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          o = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (o.next = u(0)),
          (o.throw = u(1)),
          (o.return = u(2)),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return (l) =>
            ((u) => {
              if (n) throw new TypeError('Generator is already executing.');
              for (; o && ((o = 0), u[0] && (i = 0)), i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & u[0]
                          ? r.return
                          : u[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, u[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (u = [2 & u[0], a.value]), u[0])) {
                    case 0:
                    case 1:
                      a = u;
                      break;
                    case 4:
                      return (i.label++, { value: u[1], done: !1 });
                    case 5:
                      (i.label++, (r = u[1]), (u = [0]));
                      continue;
                    case 7:
                      ((u = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0])
                        )
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === u[0] && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                        i.label = u[1];
                        break;
                      }
                      if (6 === u[0] && i.label < a[1]) {
                        ((i.label = a[1]), (a = u));
                        break;
                      }
                      if (a && i.label < a[2]) {
                        ((i.label = a[2]), i.ops.push(u));
                        break;
                      }
                      (a[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  u = t.call(e, i);
                } catch (l) {
                  ((u = [6, l]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
        }
      }
      var de = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99',
        ye = ie.gH.from('0'),
        me = C;
      const be = function () {
        var e = F(),
          t = e.isConnected,
          n = e.signer,
          r = e.provider,
          a = e.address,
          i = se((0, I.fp)(ee), 2),
          l = i[0],
          c = i[1],
          s = se((0, o.useState)(null), 2),
          f = s[0],
          d = s[1],
          b = se((0, o.useState)(!1), 2),
          v = b[0],
          x = b[1],
          N = se((0, o.useState)(null), 2),
          O = N[0],
          A = N[1],
          C = function () {
            return le(function () {
              var e, t, r, a;
              return fe(this, (i) => {
                switch (i.label) {
                  case 0:
                    if (!n) return [2];
                    i.label = 1;
                  case 1:
                    return (
                      i.trys.push([1, 5, , 6]),
                      [4, (e = new E.NZ(de, me, n)).getBalance()]
                    );
                  case 2:
                    return ((t = i.sent()), [4, e.count()]);
                  case 3:
                    return ((r = i.sent()), [4, e.isEqual()]);
                  case 4:
                    return (
                      (a = i.sent()),
                      c(
                        ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            ('function' ==
                              typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  (e) =>
                                    Object.getOwnPropertyDescriptor(n, e)
                                      .enumerable
                                )
                              )),
                              r.forEach((t) => {
                                ce(e, t, n[t]);
                              }));
                          }
                          return e;
                        })({}, l)),
                        (u =
                          null !=
                          (u = {
                            count: S.Js(r, 0),
                            address: de,
                            isEqual: a,
                            balance: S.ck(t),
                          })
                            ? u
                            : {}),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              o,
                              Object.getOwnPropertyDescriptors(u)
                            )
                          : ((e) => {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, n);
                              }
                              return t;
                            })(Object(u)).forEach((e) => {
                              Object.defineProperty(
                                o,
                                e,
                                Object.getOwnPropertyDescriptor(u, e)
                              );
                            }),
                        o)
                      ),
                      [3, 6]
                    );
                  case 5:
                    return (i.sent(), [3, 6]);
                  case 6:
                    return [2];
                }
                var o, u;
              });
            })();
          };
        return u().createElement(
          h.A,
          {
            className:
              'p-6 text-center hover:shadow-lg transition-shadow duration-300',
          },
          u().createElement(ae.A, {
            className: 'text-secondary-500 mb-4',
            sx: { fontSize: 48 },
          }),
          u().createElement(
            y.A,
            { variant: 'h6', className: 'mb-2 font-semibold' },
            '发红包'
          ),
          u().createElement(
            y.A,
            {
              variant: 'body2',
              className: 'text-gray-600',
              style: { marginBottom: '0px' },
            },
            '创建新的红包，与朋友分享快乐'
          ),
          f &&
            u().createElement(w.A, { severity: 'error', className: 'mb-4' }, f),
          O &&
            u().createElement(
              w.A,
              { severity: 'success', className: 'mb-4' },
              O
            ),
          t
            ? u().createElement(
                m.A,
                null,
                u().createElement(g.A, { className: 'mb-4' }),
                u().createElement(
                  m.A,
                  { className: 'space-y-4' },
                  u().createElement(
                    j.A,
                    {
                      variant: 'contained',
                      color: 'primary',
                      fullWidth: !0,
                      size: 'large',
                      onClick: () =>
                        le(function () {
                          var e, t, i, o, u;
                          return fe(this, (l) => {
                            switch (l.label) {
                              case 0:
                                (x(!0), d(null), A(null), (l.label = 1));
                              case 1:
                                return (
                                  l.trys.push([1, 11, 12, 13]),
                                  [4, (e = new E.NZ(de, me, n)).count()]
                                );
                              case 2:
                                if (l.sent() == ye)
                                  return (d('红包已抢完~'), [2]);
                                ((t = ((e) => {
                                  var t = !1,
                                    n = !0,
                                    r = (e) => {
                                      e.toLowerCase() ===
                                        (null == a
                                          ? void 0
                                          : a.toLowerCase()) &&
                                        n &&
                                        ((t = !0),
                                        d(
                                          '您已经抢过红包了（事件监听检测到）~'
                                        ));
                                    };
                                  return (
                                    e.on('Already', r),
                                    {
                                      isTriggered() {
                                        return t;
                                      },
                                      cleanup() {
                                        ((n = !1), e.off('Already', r));
                                      },
                                    }
                                  );
                                })(e)),
                                  (l.label = 3));
                              case 3:
                                return (
                                  l.trys.push([3, , 9, 10]),
                                  [4, e.sendRedPacket()]
                                );
                              case 4:
                                return (
                                  (i = l.sent()),
                                  [
                                    4,
                                    null == r
                                      ? void 0
                                      : r.waitForTransaction(i.hash),
                                  ]
                                );
                              case 5:
                                return 1 !==
                                  (null == (o = l.sent()) ? void 0 : o.status)
                                  ? [3, 7]
                                  : [4, new Promise((e) => setTimeout(e, 1e3))];
                              case 6:
                                return (
                                  l.sent(),
                                  t.isTriggered() ||
                                    ((e, t) => {
                                      var n = !0,
                                        r = !1,
                                        i = void 0;
                                      try {
                                        for (
                                          var o, l = t.logs[Symbol.iterator]();
                                          !(n = (o = l.next()).done);
                                          n = !0
                                        ) {
                                          var c = o.value;
                                          try {
                                            var s = e.interface.parseLog(c);
                                            if (
                                              'Already' ===
                                              (null == s ? void 0 : s.name)
                                            ) {
                                              var f,
                                                y =
                                                  null === (f = s.args) ||
                                                  void 0 === f
                                                    ? void 0
                                                    : f.sender;
                                              if (
                                                y &&
                                                y.toLowerCase() ===
                                                  (null == a
                                                    ? void 0
                                                    : a.toLowerCase())
                                              )
                                                return (
                                                  d(
                                                    '您已经抢过红包了（交易日志检测到）~'
                                                  ),
                                                  !0
                                                );
                                            }
                                          } catch (u) {}
                                        }
                                      } catch (m) {
                                        ((r = !0), (i = m));
                                      } finally {
                                        try {
                                          n || null == l.return || l.return();
                                        } finally {
                                          if (r) throw i;
                                        }
                                      }
                                      return !1;
                                    })(e, o) ||
                                    (A('抢红包成功，请查看余额！'), C()),
                                  [3, 8]
                                );
                              case 7:
                                (d('交易失败，请重试'), (l.label = 8));
                              case 8:
                                return [3, 10];
                              case 9:
                                return (t.cleanup(), [7]);
                              case 10:
                                return [3, 13];
                              case 11:
                                return (
                                  'Already grabbed' === (u = l.sent()).reason ||
                                  (u.message && u.message.includes('Already'))
                                    ? d('您已经抢过红包了~')
                                    : d(
                                        '抢红包失败: '.concat(
                                          u.message || u.reason || u
                                        )
                                      ),
                                  [3, 13]
                                );
                              case 12:
                                return (x(!1), [7]);
                              case 13:
                                return [2];
                            }
                          });
                        })(),
                      disabled: !t || v,
                      startIcon: v
                        ? u().createElement(k.A, { size: 20 })
                        : u().createElement(p.A, null),
                    },
                    v ? '抢红包中...' : '抢红包'
                  )
                )
              )
            : u().createElement(
                m.A,
                { className: 'text-center' },
                u().createElement(
                  y.A,
                  { variant: 'h6', className: 'mb-4' },
                  '请先连接钱包'
                )
              )
        );
      };
      var ve = n(8386),
        pe = n(5870),
        he = n(6588),
        we = n(9432),
        ge = n(5944),
        xe = n(8517),
        Ne = n(4830),
        Oe = n(4978),
        je = n(5226);
      function ke(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ee(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Se(e, t) {
        return (
          ((e) => {
            if (Array.isArray(e)) return e;
          })(e) ||
          ((e, t) => {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ((u = !0), (a = l));
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ((e, t) => {
            if (e) {
              if ('string' == typeof e) return ke(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ke(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (() => {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var Ae = function (e, t) {
        var n = Se((0, o.useState)(null), 2),
          r = n[0],
          a = n[1],
          i = Se((0, o.useState)(null), 2),
          u = i[0],
          l = i[1],
          c = Se((0, o.useState)(!1), 2),
          s = c[0],
          f = c[1],
          d = Se((0, o.useState)(null), 2),
          y = d[0],
          m = d[1];
        return (
          (0, o.useEffect)(
            function () {
              var n;
              ((n = function () {
                var n, r, i;
                return (function (e, t) {
                  var n,
                    r,
                    a,
                    i = {
                      label: 0,
                      sent() {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    },
                    o = Object.create(
                      ('function' == typeof Iterator ? Iterator : Object)
                        .prototype
                    );
                  return (
                    (o.next = u(0)),
                    (o.throw = u(1)),
                    (o.return = u(2)),
                    'function' == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function u(u) {
                    return (l) =>
                      ((u) => {
                        if (n)
                          throw new TypeError(
                            'Generator is already executing.'
                          );
                        for (; o && ((o = 0), u[0] && (i = 0)), i; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (a =
                                  2 & u[0]
                                    ? r.return
                                    : u[0]
                                      ? r.throw ||
                                        ((a = r.return) && a.call(r), 0)
                                      : r.next) &&
                                !(a = a.call(r, u[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (u = [2 & u[0], a.value]), u[0])
                            ) {
                              case 0:
                              case 1:
                                a = u;
                                break;
                              case 4:
                                return (i.label++, { value: u[1], done: !1 });
                              case 5:
                                (i.label++, (r = u[1]), (u = [0]));
                                continue;
                              case 7:
                                ((u = i.ops.pop()), i.trys.pop());
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = i.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== u[0] && 2 !== u[0])
                                  )
                                ) {
                                  i = 0;
                                  continue;
                                }
                                if (
                                  3 === u[0] &&
                                  (!a || (u[1] > a[0] && u[1] < a[3]))
                                ) {
                                  i.label = u[1];
                                  break;
                                }
                                if (6 === u[0] && i.label < a[1]) {
                                  ((i.label = a[1]), (a = u));
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  ((i.label = a[2]), i.ops.push(u));
                                  break;
                                }
                                (a[2] && i.ops.pop(), i.trys.pop());
                                continue;
                            }
                            u = t.call(e, i);
                          } catch (l) {
                            ((u = [6, l]), (r = 0));
                          } finally {
                            n = a = 0;
                          }
                        if (5 & u[0]) throw u[1];
                        return { value: u[0] ? u[1] : void 0, done: !0 };
                      })([u, l]);
                  }
                })(this, (o) => {
                  switch (o.label) {
                    case 0:
                      if (!e || !t) return (a(null), l(null), m(null), [2]);
                      (f(!0), m(null), (o.label = 1));
                    case 1:
                      return (
                        o.trys.push([1, 11, 12, 13]),
                        [4, t.lookupAddress(e)]
                      );
                    case 2:
                      if (((n = o.sent()), a(n), !n)) return [3, 9];
                      o.label = 3;
                    case 3:
                      return (o.trys.push([3, 7, , 8]), [4, t.getResolver(n)]);
                    case 4:
                      return (r = o.sent()) ? [4, r.getAvatar()] : [3, 6];
                    case 5:
                      ((i = o.sent()), l(i || null), (o.label = 6));
                    case 6:
                      return [3, 8];
                    case 7:
                      return (o.sent(), l(null), [3, 8]);
                    case 8:
                      return [3, 10];
                    case 9:
                      (l(null), (o.label = 10));
                    case 10:
                      return [3, 13];
                    case 11:
                      return (
                        o.sent(),
                        m('ENS解析失败'),
                        a(null),
                        l(null),
                        [3, 13]
                      );
                    case 12:
                      return (f(!1), [7]);
                    case 13:
                      return [2];
                  }
                });
              }),
              function () {
                var e = this,
                  t = arguments;
                return new Promise((r, a) => {
                  var i = n.apply(e, t);
                  function o(e) {
                    Ee(i, r, a, o, u, 'next', e);
                  }
                  function u(e) {
                    Ee(i, r, a, o, u, 'throw', e);
                  }
                  o(void 0);
                });
              })();
            },
            [e, t]
          ),
          { ensName: r, ensAvatar: u, isLoading: s, error: y }
        );
      };
      function Ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ce(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Te(e, t) {
        return (
          ((e) => {
            if (Array.isArray(e)) return e;
          })(e) ||
          ((e, t) => {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                ((u = !0), (a = l));
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ((e, t) => {
            if (e) {
              if ('string' == typeof e) return Ie(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ie(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (() => {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      const Me = function () {
          var e = F(),
            t = e.isConnected,
            n = e.address,
            r = e.balance,
            a = e.networkName,
            i = e.chainId,
            l = e.isConnecting,
            s = e.error,
            f = e.connectWallet,
            d = e.disconnectWallet,
            b = e.switchNetwork,
            v = e.networks,
            p = e.provider,
            h = Ae(n, p),
            x = h.ensName,
            N = h.ensAvatar,
            O = h.isLoading,
            E = Te(u().useState(null), 2),
            S = E[0],
            A = E[1],
            I = Te(u().useState(null), 2),
            C = I[0],
            T = I[1],
            M = () => {
              T(null);
            },
            P = function (e) {
              return ((t = function () {
                return (function (e, t) {
                  var n,
                    r,
                    a,
                    i = {
                      label: 0,
                      sent() {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    },
                    o = Object.create(
                      ('function' == typeof Iterator ? Iterator : Object)
                        .prototype
                    );
                  return (
                    (o.next = u(0)),
                    (o.throw = u(1)),
                    (o.return = u(2)),
                    'function' == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function u(u) {
                    return (l) =>
                      ((u) => {
                        if (n)
                          throw new TypeError(
                            'Generator is already executing.'
                          );
                        for (; o && ((o = 0), u[0] && (i = 0)), i; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (a =
                                  2 & u[0]
                                    ? r.return
                                    : u[0]
                                      ? r.throw ||
                                        ((a = r.return) && a.call(r), 0)
                                      : r.next) &&
                                !(a = a.call(r, u[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (u = [2 & u[0], a.value]), u[0])
                            ) {
                              case 0:
                              case 1:
                                a = u;
                                break;
                              case 4:
                                return (i.label++, { value: u[1], done: !1 });
                              case 5:
                                (i.label++, (r = u[1]), (u = [0]));
                                continue;
                              case 7:
                                ((u = i.ops.pop()), i.trys.pop());
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = i.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== u[0] && 2 !== u[0])
                                  )
                                ) {
                                  i = 0;
                                  continue;
                                }
                                if (
                                  3 === u[0] &&
                                  (!a || (u[1] > a[0] && u[1] < a[3]))
                                ) {
                                  i.label = u[1];
                                  break;
                                }
                                if (6 === u[0] && i.label < a[1]) {
                                  ((i.label = a[1]), (a = u));
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  ((i.label = a[2]), i.ops.push(u));
                                  break;
                                }
                                (a[2] && i.ops.pop(), i.trys.pop());
                                continue;
                            }
                            u = t.call(e, i);
                          } catch (l) {
                            ((u = [6, l]), (r = 0));
                          } finally {
                            n = a = 0;
                          }
                        if (5 & u[0]) throw u[1];
                        return { value: u[0] ? u[1] : void 0, done: !0 };
                      })([u, l]);
                  }
                })(this, (t) => {
                  switch (t.label) {
                    case 0:
                      return [4, b(e)];
                    case 1:
                      return (t.sent(), M(), [2]);
                  }
                });
              }),
              function () {
                var e = this,
                  n = arguments;
                return new Promise((r, a) => {
                  var i = t.apply(e, n);
                  function o(e) {
                    Ce(i, r, a, o, u, 'next', e);
                  }
                  function u(e) {
                    Ce(i, r, a, o, u, 'throw', e);
                  }
                  o(void 0);
                });
              })();
              var t;
            },
            W = (0, o.useMemo)(
              () =>
                ((e, t) =>
                  e
                    ? t || ''.concat(e.slice(0, 6), '...').concat(e.slice(-4))
                    : '')(n, x),
              [n, x]
            ),
            z = (0, o.useMemo)(
              () => (r ? Number.parseFloat(r).toFixed(4) : '0'),
              [r]
            );
          return u().createElement(
            u().Fragment,
            null,
            u().createElement(
              c.A,
              { position: 'static', className: 'bg-gray-100 text-gray-800' },
              u().createElement(
                ge.A,
                null,
                u().createElement(
                  y.A,
                  {
                    variant: 'h6',
                    component: 'div',
                    className: 'flex-grow text-white',
                  },
                  '红包合约'
                ),
                s &&
                  u().createElement(
                    w.A,
                    { severity: 'error', className: 'mr-4 py-0' },
                    s
                  ),
                u().createElement(
                  m.A,
                  { className: 'flex items-center gap-4' },
                  t &&
                    u().createElement(
                      j.A,
                      {
                        variant: 'contained',
                        size: 'small',
                        onClick(e) {
                          T(e.currentTarget);
                        },
                        endIcon: u().createElement(ve.A, null),
                        className:
                          'min-w-[120px] normal-case border-gray-300 text-gray-800',
                      },
                      a || 'Unknown'
                    ),
                  t
                    ? u().createElement(
                        u().Fragment,
                        null,
                        u().createElement(
                          m.A,
                          {
                            className:
                              'flex flex-col items-center border border-gray-300 rounded p-2 min-w-[80px] bg-white',
                          },
                          u().createElement(
                            y.A,
                            { variant: 'caption', className: 'text-gray-600' },
                            '余额'
                          ),
                          u().createElement(
                            y.A,
                            {
                              variant: 'body2',
                              className: 'font-bold text-black',
                            },
                            z,
                            ' ETH'
                          )
                        ),
                        u().createElement(
                          j.A,
                          {
                            onClick(e) {
                              A(e.currentTarget);
                            },
                            className:
                              'flex items-center gap-2 normal-case text-gray-800',
                            'data-testid': 'wallet-info-button',
                          },
                          u().createElement(
                            xe.A,
                            { className: 'w-8 h-8', src: N || void 0 },
                            !N && u().createElement(he.A, null)
                          ),
                          u().createElement(
                            m.A,
                            { className: 'flex flex-col items-start' },
                            u().createElement(
                              y.A,
                              {
                                variant: 'body2',
                                className: 'font-bold text-black',
                              },
                              O ? '解析中...' : W
                            ),
                            u().createElement(
                              y.A,
                              {
                                variant: 'caption',
                                className: 'text-gray-600',
                              },
                              x ? '已连接 (ENS)' : '已连接'
                            )
                          ),
                          u().createElement(ve.A, null)
                        )
                      )
                    : u().createElement(
                        j.A,
                        {
                          variant: 'contained',
                          startIcon: l
                            ? u().createElement(k.A, { size: 16 })
                            : u().createElement(pe.A, null),
                          onClick: f,
                          disabled: l,
                          className: 'normal-case',
                          'data-testid': 'connect-wallet-button',
                        },
                        l ? '连接中...' : '连接钱包'
                      )
                )
              )
            ),
            u().createElement(
              Ne.A,
              {
                anchorEl: C,
                open: Boolean(C),
                onClose: M,
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
              },
              Object.entries(v).map((e) => {
                var t = Te(e, 2),
                  n = t[0],
                  r = t[1];
                return u().createElement(
                  Oe.A,
                  { key: n, onClick: () => P(n), selected: i === r.chainId },
                  u().createElement(je.A, { primary: r.chainName })
                );
              })
            ),
            u().createElement(
              Ne.A,
              {
                anchorEl: S,
                open: Boolean(S),
                onClose() {
                  A(null);
                },
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
              },
              u().createElement(
                Oe.A,
                {
                  onClick() {
                    n && navigator.clipboard.writeText(n);
                  },
                },
                u().createElement(we.A, { className: 'mr-2' }),
                u().createElement(je.A, { primary: '复制地址' })
              ),
              u().createElement(g.A, null),
              u().createElement(
                Oe.A,
                { onClick: d },
                u().createElement(je.A, { primary: '断开连接' })
              )
            )
          );
        },
        Pe = () =>
          u().createElement(
            'div',
            { className: 'min-h-screen bg-gray-50' },
            u().createElement(
              c.A,
              {
                position: 'static',
                elevation: 0,
                className: 'bg-white border-b',
              },
              u().createElement(Me, null)
            ),
            u().createElement(
              s.A,
              { maxWidth: 'lg', className: 'py-8' },
              u().createElement(
                f.A,
                { className: 'mb-8 bg-gradient-to-r text-black' },
                u().createElement(
                  d.A,
                  { className: 'text-black' },
                  u().createElement(
                    y.A,
                    {
                      variant: 'h4',
                      component: 'h1',
                      className: 'mb-2 font-bold',
                    },
                    '欢迎11使用红包应用 🧧'
                  ),
                  u().createElement(
                    y.A,
                    { variant: 'body1', className: 'opacity-90' },
                    '基于区块链技术的去中心化红包系统，安全、透明、公平'
                  )
                )
              ),
              u().createElement(
                m.A,
                { className: 'mt-8' },
                u().createElement(re, null)
              ),
              u().createElement(
                b.A,
                { container: !0, spacing: 4, className: 'mt-[100px]' },
                u().createElement(
                  b.A,
                  { size: 6 },
                  u().createElement(te, null)
                ),
                u().createElement(b.A, { size: 6 }, u().createElement(be, null))
              )
            )
          );
      var We = (0, a.A)({
        palette: {
          mode: 'light',
          primary: { main: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
          secondary: { main: '#ec4899', light: '#f472b6', dark: '#be185d' },
          background: { default: '#f8fafc', paper: '#ffffff' },
        },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 600 },
          h3: { fontWeight: 600 },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { textTransform: 'none', fontWeight: 500 },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow:
                  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              },
            },
          },
        },
      });
      l.createRoot(document.getElementById('app')).render(
        u().createElement(
          u().StrictMode,
          null,
          u().createElement(
            G,
            null,
            u().createElement(
              i.A,
              { theme: We },
              u().createElement(r.Ay, null),
              u().createElement(Pe, null)
            )
          )
        )
      );
    },
    3514() {},
  },
  (e) => {
    (e.O(
      0,
      [
        757, 223, 999, 392, 885, 914, 202, 894, 72, 319, 124, 482, 704, 719,
        607, 762, 110, 569, 685,
      ],
      () => e((e.s = 93))
    ),
      e.O());
  },
]);
