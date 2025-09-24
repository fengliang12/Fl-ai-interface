(self.webpackChunkFl_ai_interface =
  self.webpackChunkFl_ai_interface || []).push([
  [792],
  {
    1231: (e, t, n) => {
      'use strict';
      var r = n(7964),
        a = n(3512),
        o = n(237),
        l = n(9729),
        c = n.n(l),
        i = n(4066),
        u = n(9336),
        s = n(5620),
        f = n(8388),
        m = n(9788),
        p = n(2844),
        d = n(3269),
        y = n(5242),
        b = n(475),
        h = n(1041),
        v = n(1077),
        w = n(3403),
        g = n(52),
        E = n(6058),
        A = n(9604),
        O = n(433),
        x = n(8935),
        N = n(7269),
        S = n(3571),
        k = n(9105),
        j = n(4566),
        C = n(3226);
      const P = [
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
      var I = n(4085),
        T = {
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
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D(e, t, n, r, a, o, l) {
        try {
          var c = e[o](l),
            i = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function W(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              D(o, r, a, l, c, 'next', e);
            }
            function c(e) {
              D(o, r, a, l, c, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      function z(e, t, n) {
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
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              z(e, t, n[t]);
            }));
        }
        return e;
      }
      function U(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n);
                }
                return t;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (i) {
                ((c = !0), (a = i));
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return M(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? M(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, t) {
        var n,
          r,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          l = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (l.next = c(0)),
          (l.throw = c(1)),
          (l.return = c(2)),
          'function' == typeof Symbol &&
            (l[Symbol.iterator] = function () {
              return this;
            }),
          l
        );
        function c(c) {
          return function (i) {
            return (function (c) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; l && ((l = 0), c[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & c[0]
                          ? r.return
                          : c[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, c[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (c = [2 & c[0], a.value]), c[0])) {
                    case 0:
                    case 1:
                      a = c;
                      break;
                    case 4:
                      return (o.label++, { value: c[1], done: !1 });
                    case 5:
                      (o.label++, (r = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = o.ops.pop()), o.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = o.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === c[0] && (!a || (c[1] > a[0] && c[1] < a[3]))) {
                        o.label = c[1];
                        break;
                      }
                      if (6 === c[0] && o.label < a[1]) {
                        ((o.label = a[1]), (a = c));
                        break;
                      }
                      if (a && o.label < a[2]) {
                        ((o.label = a[2]), o.ops.push(c));
                        break;
                      }
                      (a[2] && o.ops.pop(), o.trys.pop());
                      continue;
                  }
                  c = t.call(e, o);
                } catch (i) {
                  ((c = [6, i]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, i]);
          };
        }
      }
      function B(e, t, n) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              B(e, t, n[t]);
            }));
        }
        return e;
      }
      var L = (0, l.createContext)(void 0);
      const H = function (e) {
        var t = e.children,
          n = (function () {
            var e = F(
                (0, l.useState)({
                  isConnected: !1,
                  address: null,
                  balance: null,
                  chainId: null,
                  networkName: null,
                  provider: null,
                  signer: null,
                  account: null,
                  networks: T,
                }),
                2
              ),
              t = e[0],
              n = e[1],
              r = F((0, l.useState)(!1), 2),
              a = r[0],
              o = r[1],
              c = F((0, l.useState)(''), 2),
              i = c[0],
              u = c[1],
              s = function (e) {
                var t = Object.entries(T).find(function (t) {
                  return F(t, 2)[1].chainId === e;
                });
                return t ? t[1].chainName : 'Unknown Network';
              },
              f = (0, l.useCallback)(function (e) {
                return W(function () {
                  var t, r, a, o, l, c, i, f;
                  return _(this, function (m) {
                    switch (m.label) {
                      case 0:
                        return (m.trys.push([0, 5, , 6]), [4, e.getSigner()]);
                      case 1:
                        return [4, (t = m.sent()).getAddress()];
                      case 2:
                        return ((r = m.sent()), [4, e.getBalance(r)]);
                      case 3:
                        return ((a = m.sent()), [4, e.getNetwork()]);
                      case 4:
                        return (
                          (o = m.sent()),
                          (l = '0x'.concat(o.chainId.toString(16))),
                          n(function (n) {
                            return U(q({}, n), {
                              isConnected: !0,
                              address: r,
                              balance: k.ck(a),
                              chainId: l,
                              networkName: s(l),
                              provider: e,
                              signer: t,
                              account: r,
                            });
                          }),
                          u(''),
                          [3, 6]
                        );
                      case 5:
                        return 'NETWORK_ERROR' ===
                          (null == (c = m.sent()) ? void 0 : c.code) ||
                          (null == c || null === (i = c.message) || void 0 === i
                            ? void 0
                            : i.includes('network changed'))
                          ? [2]
                          : (-32603 === (null == c ? void 0 : c.code)
                              ? u('网络连接问题，请稍后重试')
                              : (
                                    null == c ||
                                    null === (f = c.message) ||
                                    void 0 === f
                                      ? void 0
                                      : f.includes('circuit breaker')
                                  )
                                ? u('网络请求过于频繁，请稍后重试')
                                : 4001 === (null == c ? void 0 : c.code)
                                  ? u('用户拒绝了连接请求')
                                  : u('钱包连接失败，请检查网络连接'),
                            [3, 6]);
                      case 6:
                        return [2];
                    }
                  });
                })();
              }, []),
              m = (0, l.useCallback)(function (e) {
                return W(function () {
                  var t, n;
                  return _(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!window.ethereum)
                          return (u('请安装 MetaMask 或其他 Web3 钱包'), [2]);
                        ((t = T[e]), u(''), (r.label = 1));
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
                            ? u('用户拒绝了添加网络的请求')
                            : u('添加网络失败，请手动添加'),
                          [3, 7]
                        );
                      case 7:
                        return [3, 9];
                      case 8:
                        (4001 === n.code
                          ? u('用户拒绝了切换网络的请求')
                          : u('网络切换失败，请重试'),
                          (r.label = 9));
                      case 9:
                        return [3, 10];
                      case 10:
                        return [2];
                    }
                  });
                })();
              }, []),
              p = (0, l.useCallback)(function () {
                return W(function () {
                  var e;
                  return _(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if ((o(!0), u(''), !window.ethereum))
                          return (
                            u('请安装 MetaMask 或其他 Web3 钱包'),
                            o(!1),
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
                          (e = new I.k(window.ethereum)),
                          [4, f(e)]
                        );
                      case 3:
                        return (t.sent(), [3, 6]);
                      case 4:
                        return (
                          4001 === t.sent().code
                            ? u('用户拒绝了连接请求')
                            : u('钱包连接失败，请重试'),
                          [3, 6]
                        );
                      case 5:
                        return (o(!1), [7]);
                      case 6:
                        return [2];
                    }
                  });
                })();
              }, []);
            (0, l.useEffect)(
              function () {
                if (t.provider) {
                  var e = function (e) {
                    0 === e.length
                      ? d()
                      : e[0] !== t.account &&
                        (n(U(q({}, t), { account: e[0] })),
                        t.provider && f(t.provider));
                  };
                  window.ethereum.on('accountsChanged', e);
                  var r = function () {
                    return W(function () {
                      var e;
                      return _(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              t.trys.push([0, 2, , 3]),
                              (e = new I.k(window.ethereum)),
                              [4, f(e)]
                            );
                          case 1:
                            return (t.sent(), [3, 3]);
                          case 2:
                            return (
                              t.sent(),
                              u('网络切换失败，请重新连接钱包'),
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
                    function () {
                      (window.ethereum.removeListener('chainChanged', r),
                        window.ethereum.removeListener('accountsChanged', e));
                    }
                  );
                }
              },
              [t.provider]
            );
            var d = (0, l.useCallback)(function () {
              (n({
                isConnected: !1,
                address: null,
                balance: null,
                chainId: null,
                networkName: null,
                provider: null,
                signer: null,
                account: null,
                networks: T,
              }),
                u(''));
            }, []);
            return (
              (0, l.useEffect)(function () {
                W(function () {
                  var e;
                  return _(this, function (t) {
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
                          ? ((e = new I.k(window.ethereum)), [4, f(e)])
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
              U(q({}, t), {
                isConnecting: a,
                error: i,
                connectWallet: p,
                disconnectWallet: d,
                switchNetwork: m,
              })
            );
          })();
        return c().createElement(L.Provider, { value: R({}, n) }, t);
      };
      var $ = function () {
        var e = (0, l.useContext)(L);
        if (void 0 === e)
          throw new Error(
            'useWalletContext must be used within a WalletProvider'
          );
        return e;
      };
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Z(e, t, n, r, a, o, l) {
        try {
          var c = e[o](l),
            i = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function J(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              Z(o, r, a, l, c, 'next', e);
            }
            function c(e) {
              Z(o, r, a, l, c, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      function K(e, t, n) {
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
      function Q(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (i) {
                ((c = !0), (a = i));
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return G(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? G(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function V(e, t) {
        var n,
          r,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          l = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (l.next = c(0)),
          (l.throw = c(1)),
          (l.return = c(2)),
          'function' == typeof Symbol &&
            (l[Symbol.iterator] = function () {
              return this;
            }),
          l
        );
        function c(c) {
          return function (i) {
            return (function (c) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; l && ((l = 0), c[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & c[0]
                          ? r.return
                          : c[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, c[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (c = [2 & c[0], a.value]), c[0])) {
                    case 0:
                    case 1:
                      a = c;
                      break;
                    case 4:
                      return (o.label++, { value: c[1], done: !1 });
                    case 5:
                      (o.label++, (r = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = o.ops.pop()), o.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = o.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === c[0] && (!a || (c[1] > a[0] && c[1] < a[3]))) {
                        o.label = c[1];
                        break;
                      }
                      if (6 === c[0] && o.label < a[1]) {
                        ((o.label = a[1]), (a = c));
                        break;
                      }
                      if (a && o.label < a[2]) {
                        ((o.label = a[2]), o.ops.push(c));
                        break;
                      }
                      (a[2] && o.ops.pop(), o.trys.pop());
                      continue;
                  }
                  c = t.call(e, o);
                } catch (i) {
                  ((c = [6, i]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, i]);
          };
        }
      }
      var X = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99',
        Y = P,
        ee = (0, j.eU)({ count: '', isEqual: !0, balance: '', address: '' });
      const te = function () {
        var e = $(),
          t = e.isConnected,
          n = e.signer,
          r = Q((0, C.fp)(ee), 2),
          a = r[0],
          o = r[1],
          i = Q((0, l.useState)(''), 2),
          u = i[0],
          s = i[1],
          f = Q((0, l.useState)(!0), 2),
          m = f[0],
          y = f[1],
          j = Q((0, l.useState)(''), 2),
          P = j[0],
          I = j[1],
          T = Q((0, l.useState)(!1), 2),
          M = T[0],
          D = T[1],
          W = Q((0, l.useState)(null), 2),
          z = W[0],
          q = W[1],
          U = Q((0, l.useState)(null), 2),
          F = U[0],
          _ = U[1],
          B = function () {
            return J(function () {
              var e, t, r, l;
              return V(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (!n) return [2];
                    c.label = 1;
                  case 1:
                    return (
                      c.trys.push([1, 5, , 6]),
                      [4, (e = new S.NZ(X, Y, n)).getBalance()]
                    );
                  case 2:
                    return ((t = c.sent()), [4, e.count()]);
                  case 3:
                    return ((r = c.sent()), [4, e.isEqual()]);
                  case 4:
                    return (
                      (l = c.sent()),
                      o(
                        ((i = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            ('function' ==
                              typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e)
                                      .enumerable;
                                  }
                                )
                              )),
                              r.forEach(function (t) {
                                K(e, t, n[t]);
                              }));
                          }
                          return e;
                        })({}, a)),
                        (u =
                          null !=
                          (u = {
                            count: k.Js(r, 0),
                            address: X,
                            isEqual: l,
                            balance: k.ck(t),
                          })
                            ? u
                            : {}),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              i,
                              Object.getOwnPropertyDescriptors(u)
                            )
                          : (function (e) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, n);
                              }
                              return t;
                            })(Object(u)).forEach(function (e) {
                              Object.defineProperty(
                                i,
                                e,
                                Object.getOwnPropertyDescriptor(u, e)
                              );
                            }),
                        i)
                      ),
                      [3, 6]
                    );
                  case 5:
                    return (c.sent(), [3, 6]);
                  case 6:
                    return [2];
                }
                var i, u;
              });
            })();
          };
        return (
          (0, l.useEffect)(
            function () {
              t && n && B();
            },
            [t, n]
          ),
          c().createElement(
            v.A,
            { className: 'p-6 hover:shadow-lg transition-shadow duration-300' },
            c().createElement(
              d.A,
              { className: 'text-center mb-6' },
              c().createElement(b.A, {
                className: 'text-primary-500 mb-2',
                sx: { fontSize: 48 },
              }),
              c().createElement(
                p.A,
                { variant: 'h5', className: 'mb-2 font-semibold' },
                '红包充值'
              )
            ),
            z &&
              c().createElement(
                w.A,
                { severity: 'error', className: 'mb-4' },
                z
              ),
            F &&
              c().createElement(
                w.A,
                { severity: 'success', className: 'mb-4' },
                F
              ),
            t
              ? c().createElement(
                  d.A,
                  null,
                  c().createElement(g.A, { className: 'mb-4' }),
                  c().createElement(
                    d.A,
                    { className: 'space-y-4' },
                    c().createElement(E.A, {
                      fullWidth: !0,
                      label: '红包数量',
                      type: 'number',
                      value: u,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                      placeholder: '请输入红包数量',
                      inputProps: { min: 1 },
                    }),
                    c().createElement(A.A, {
                      control: c().createElement(O.A, {
                        checked: m,
                        onChange: function (e) {
                          return y(e.target.checked);
                        },
                        color: 'primary',
                      }),
                      label: m ? '等额发放' : '随机金额',
                    }),
                    c().createElement(E.A, {
                      fullWidth: !0,
                      label: '充值金额 (ETH)',
                      type: 'number',
                      value: P,
                      onChange: function (e) {
                        return I(e.target.value);
                      },
                      placeholder: '请输入充值金额',
                      inputProps: { min: 0, step: 0.001 },
                    }),
                    c().createElement(
                      x.A,
                      {
                        variant: 'contained',
                        color: 'primary',
                        fullWidth: !0,
                        size: 'large',
                        onClick: function () {
                          return J(function () {
                            var e, t, r, a;
                            return V(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  if (!n || !u || !P)
                                    return (q('请填写完整信息'), [2]);
                                  if (
                                    ((e = Number.parseInt(u)),
                                    (t = Number.parseFloat(P)),
                                    e <= 0 || t <= 0)
                                  )
                                    return (
                                      q('红包数量和充值金额必须大于0'),
                                      [2]
                                    );
                                  (D(!0), q(null), _(null), (o.label = 1));
                                case 1:
                                  return (
                                    o.trys.push([1, 5, 6, 7]),
                                    [
                                      4,
                                      new S.NZ(X, Y, n).deposit(e, m, {
                                        value: k.g5(P),
                                      }),
                                    ]
                                  );
                                case 2:
                                  return [4, o.sent().wait()];
                                case 3:
                                  return (
                                    o.sent(),
                                    _(
                                      '成功充值 '
                                        .concat(P, ' ETH，创建 ')
                                        .concat(e, ' 个红包！')
                                    ),
                                    [4, B()]
                                  );
                                case 4:
                                  return (o.sent(), s(''), I(''), [3, 7]);
                                case 5:
                                  return (
                                    4001 === (r = o.sent()).code
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
                                  return (D(!1), [7]);
                                case 7:
                                  return [2];
                              }
                            });
                          })();
                        },
                        disabled: M || !u || !P,
                        startIcon: M
                          ? c().createElement(N.A, { size: 20 })
                          : c().createElement(h.A, null),
                      },
                      M ? '充值中...' : '充值红包'
                    )
                  )
                )
              : c().createElement(
                  d.A,
                  { className: 'text-center' },
                  c().createElement(
                    p.A,
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
      const re = function () {
        var e,
          t,
          n,
          r,
          a = ((n = (0, C.fp)(ee)),
          (r = 1),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(n) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
              if (null != n) {
                var r,
                  a,
                  o = [],
                  l = !0,
                  c = !1;
                try {
                  for (
                    n = n.call(e);
                    !(l = (r = n.next()).done) &&
                    (o.push(r.value), !t || o.length !== t);
                    l = !0
                  );
                } catch (i) {
                  ((c = !0), (a = i));
                } finally {
                  try {
                    l || null == n.return || n.return();
                  } finally {
                    if (c) throw a;
                  }
                }
                return o;
              }
            })(n, r) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return ne(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
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
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })())[0];
        return c().createElement(
          'div',
          { className: 'Dashboard' },
          c().createElement(
            p.A,
            { variant: 'h5', className: '!mb-6 font-semibold text-center' },
            '平台统计'
          ),
          c().createElement(
            'div',
            {
              className:
                'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6',
            },
            c().createElement(
              v.A,
              { className: 'p-4 text-center h-full' },
              c().createElement(
                p.A,
                { variant: 'h4', className: 'font-bold text-primary-600' },
                null == a ? void 0 : a.count
              ),
              c().createElement(
                p.A,
                { variant: 'body2', className: 'text-gray-600' },
                '总红包数'
              )
            ),
            c().createElement(
              v.A,
              { className: 'p-4 text-center h-full' },
              c().createElement(
                p.A,
                { variant: 'h4', className: 'font-bold text-secondary-600' },
                (null == a ? void 0 : a.isEqual) ? '是' : '否'
              ),
              c().createElement(
                p.A,
                { variant: 'body2', className: 'text-gray-600' },
                '是否等额发放'
              )
            ),
            c().createElement(
              v.A,
              { className: 'p-4 text-center h-full' },
              c().createElement(
                p.A,
                { variant: 'h4', className: 'font-bold text-green-600' },
                Number(null == a ? void 0 : a.balance).toFixed(6)
              ),
              c().createElement(
                p.A,
                { variant: 'body2', className: 'text-gray-600' },
                '总金额 (ETH)'
              )
            ),
            c().createElement(
              v.A,
              {
                className:
                  'p-4 text-center h-full cursor-pointer hover:shadow-lg transition-shadow',
                onClick: function () {
                  return window.open(
                    'https://sepolia.etherscan.io/address/'.concat(
                      null == a ? void 0 : a.address
                    ),
                    '_blank'
                  );
                },
              },
              c().createElement(
                p.A,
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
              c().createElement(
                p.A,
                { variant: 'body2', className: 'text-gray-600' },
                '红包合约地址（点击查看）'
              )
            )
          )
        );
      };
      var ae = n(2829),
        oe = n(7);
      function le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ce(e, t, n, r, a, o, l) {
        try {
          var c = e[o](l),
            i = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function ie(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              ce(o, r, a, l, c, 'next', e);
            }
            function c(e) {
              ce(o, r, a, l, c, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      function ue(e, t, n) {
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
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (i) {
                ((c = !0), (a = i));
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return le(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? le(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
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
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          l = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (l.next = c(0)),
          (l.throw = c(1)),
          (l.return = c(2)),
          'function' == typeof Symbol &&
            (l[Symbol.iterator] = function () {
              return this;
            }),
          l
        );
        function c(c) {
          return function (i) {
            return (function (c) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; l && ((l = 0), c[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & c[0]
                          ? r.return
                          : c[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                      !(a = a.call(r, c[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (c = [2 & c[0], a.value]), c[0])) {
                    case 0:
                    case 1:
                      a = c;
                      break;
                    case 4:
                      return (o.label++, { value: c[1], done: !1 });
                    case 5:
                      (o.label++, (r = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = o.ops.pop()), o.trys.pop());
                      continue;
                    default:
                      if (
                        !(
                          (a = (a = o.trys).length > 0 && a[a.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === c[0] && (!a || (c[1] > a[0] && c[1] < a[3]))) {
                        o.label = c[1];
                        break;
                      }
                      if (6 === c[0] && o.label < a[1]) {
                        ((o.label = a[1]), (a = c));
                        break;
                      }
                      if (a && o.label < a[2]) {
                        ((o.label = a[2]), o.ops.push(c));
                        break;
                      }
                      (a[2] && o.ops.pop(), o.trys.pop());
                      continue;
                  }
                  c = t.call(e, o);
                } catch (i) {
                  ((c = [6, i]), (r = 0));
                } finally {
                  n = a = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, i]);
          };
        }
      }
      var me = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99',
        pe = oe.gH.from('0'),
        de = P;
      const ye = function () {
        var e = $(),
          t = e.isConnected,
          n = e.signer,
          r = e.provider,
          a = e.address,
          o = se((0, C.fp)(ee), 2),
          i = o[0],
          u = o[1],
          s = se((0, l.useState)(null), 2),
          f = s[0],
          m = s[1],
          y = se((0, l.useState)(!1), 2),
          b = y[0],
          E = y[1],
          A = se((0, l.useState)(null), 2),
          O = A[0],
          j = A[1],
          P = function () {
            return ie(function () {
              var e, t, r, a;
              return fe(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!n) return [2];
                    o.label = 1;
                  case 1:
                    return (
                      o.trys.push([1, 5, , 6]),
                      [4, (e = new S.NZ(me, de, n)).getBalance()]
                    );
                  case 2:
                    return ((t = o.sent()), [4, e.count()]);
                  case 3:
                    return ((r = o.sent()), [4, e.isEqual()]);
                  case 4:
                    return (
                      (a = o.sent()),
                      u(
                        ((l = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            ('function' ==
                              typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e)
                                      .enumerable;
                                  }
                                )
                              )),
                              r.forEach(function (t) {
                                ue(e, t, n[t]);
                              }));
                          }
                          return e;
                        })({}, i)),
                        (c =
                          null !=
                          (c = {
                            count: k.Js(r, 0),
                            address: me,
                            isEqual: a,
                            balance: k.ck(t),
                          })
                            ? c
                            : {}),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              l,
                              Object.getOwnPropertyDescriptors(c)
                            )
                          : (function (e) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, n);
                              }
                              return t;
                            })(Object(c)).forEach(function (e) {
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
                    return (o.sent(), [3, 6]);
                  case 6:
                    return [2];
                }
                var l, c;
              });
            })();
          };
        return c().createElement(
          v.A,
          {
            className:
              'p-6 text-center hover:shadow-lg transition-shadow duration-300',
          },
          c().createElement(ae.A, {
            className: 'text-secondary-500 mb-4',
            sx: { fontSize: 48 },
          }),
          c().createElement(
            p.A,
            { variant: 'h6', className: 'mb-2 font-semibold' },
            '发红包'
          ),
          c().createElement(
            p.A,
            {
              variant: 'body2',
              className: 'text-gray-600',
              style: { marginBottom: '0px' },
            },
            '创建新的红包，与朋友分享快乐'
          ),
          f &&
            c().createElement(w.A, { severity: 'error', className: 'mb-4' }, f),
          O &&
            c().createElement(
              w.A,
              { severity: 'success', className: 'mb-4' },
              O
            ),
          t
            ? c().createElement(
                d.A,
                null,
                c().createElement(g.A, { className: 'mb-4' }),
                c().createElement(
                  d.A,
                  { className: 'space-y-4' },
                  c().createElement(
                    x.A,
                    {
                      variant: 'contained',
                      color: 'primary',
                      fullWidth: !0,
                      size: 'large',
                      onClick: function () {
                        return ie(function () {
                          var e, t, o, l, c;
                          return fe(this, function (i) {
                            switch (i.label) {
                              case 0:
                                (E(!0), m(null), j(null), (i.label = 1));
                              case 1:
                                return (
                                  i.trys.push([1, 11, 12, 13]),
                                  [4, (e = new S.NZ(me, de, n)).count()]
                                );
                              case 2:
                                if (i.sent() == pe)
                                  return (m('红包已抢完~'), [2]);
                                ((t = (function (e) {
                                  var t = !1,
                                    n = !0,
                                    r = function (e) {
                                      e.toLowerCase() ===
                                        (null == a
                                          ? void 0
                                          : a.toLowerCase()) &&
                                        n &&
                                        ((t = !0),
                                        m(
                                          '您已经抢过红包了（事件监听检测到）~'
                                        ));
                                    };
                                  return (
                                    e.on('Already', r),
                                    {
                                      isTriggered: function () {
                                        return t;
                                      },
                                      cleanup: function () {
                                        ((n = !1), e.off('Already', r));
                                      },
                                    }
                                  );
                                })(e)),
                                  (i.label = 3));
                              case 3:
                                return (
                                  i.trys.push([3, , 9, 10]),
                                  [4, e.sendRedPacket()]
                                );
                              case 4:
                                return (
                                  (o = i.sent()),
                                  [
                                    4,
                                    null == r
                                      ? void 0
                                      : r.waitForTransaction(o.hash),
                                  ]
                                );
                              case 5:
                                return 1 !==
                                  (null == (l = i.sent()) ? void 0 : l.status)
                                  ? [3, 7]
                                  : [
                                      4,
                                      new Promise(function (e) {
                                        return setTimeout(e, 1e3);
                                      }),
                                    ];
                              case 6:
                                return (
                                  i.sent(),
                                  t.isTriggered() ||
                                    (function (e, t) {
                                      var n = !0,
                                        r = !1,
                                        o = void 0;
                                      try {
                                        for (
                                          var l, i = t.logs[Symbol.iterator]();
                                          !(n = (l = i.next()).done);
                                          n = !0
                                        ) {
                                          var u = l.value;
                                          try {
                                            var s = e.interface.parseLog(u);
                                            if (
                                              'Already' ===
                                              (null == s ? void 0 : s.name)
                                            ) {
                                              var f,
                                                p =
                                                  null === (f = s.args) ||
                                                  void 0 === f
                                                    ? void 0
                                                    : f.sender;
                                              if (
                                                p &&
                                                p.toLowerCase() ===
                                                  (null == a
                                                    ? void 0
                                                    : a.toLowerCase())
                                              )
                                                return (
                                                  m(
                                                    '您已经抢过红包了（交易日志检测到）~'
                                                  ),
                                                  !0
                                                );
                                            }
                                          } catch (c) {}
                                        }
                                      } catch (d) {
                                        ((r = !0), (o = d));
                                      } finally {
                                        try {
                                          n || null == i.return || i.return();
                                        } finally {
                                          if (r) throw o;
                                        }
                                      }
                                      return !1;
                                    })(e, l) ||
                                    (j('抢红包成功，请查看余额！'), P()),
                                  [3, 8]
                                );
                              case 7:
                                (m('交易失败，请重试'), (i.label = 8));
                              case 8:
                                return [3, 10];
                              case 9:
                                return (t.cleanup(), [7]);
                              case 10:
                                return [3, 13];
                              case 11:
                                return (
                                  'Already grabbed' === (c = i.sent()).reason ||
                                  (c.message && c.message.includes('Already'))
                                    ? m('您已经抢过红包了~')
                                    : m(
                                        '抢红包失败: '.concat(
                                          c.message || c.reason || c
                                        )
                                      ),
                                  [3, 13]
                                );
                              case 12:
                                return (E(!1), [7]);
                              case 13:
                                return [2];
                            }
                          });
                        })();
                      },
                      disabled: !t || b,
                      startIcon: b
                        ? c().createElement(N.A, { size: 20 })
                        : c().createElement(h.A, null),
                    },
                    b ? '抢红包中...' : '抢红包'
                  )
                )
              )
            : c().createElement(
                d.A,
                { className: 'text-center' },
                c().createElement(
                  p.A,
                  { variant: 'h6', className: 'mb-4' },
                  '请先连接钱包'
                )
              )
        );
      };
      var be = n(8386),
        he = n(5870),
        ve = n(6588),
        we = n(9432),
        ge = n(5944),
        Ee = n(8517),
        Ae = n(4830),
        Oe = n(4978),
        xe = n(5226);
      function Ne(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Se(e, t, n, r, a, o, l) {
        try {
          var c = e[o](l),
            i = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function ke(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (i) {
                ((c = !0), (a = i));
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Ne(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ne(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var je = function (e, t) {
        var n = ke((0, l.useState)(null), 2),
          r = n[0],
          a = n[1],
          o = ke((0, l.useState)(null), 2),
          c = o[0],
          i = o[1],
          u = ke((0, l.useState)(!1), 2),
          s = u[0],
          f = u[1],
          m = ke((0, l.useState)(null), 2),
          p = m[0],
          d = m[1];
        return (
          (0, l.useEffect)(
            function () {
              var n;
              ((n = function () {
                var n, r, o;
                return (function (e, t) {
                  var n,
                    r,
                    a,
                    o = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    },
                    l = Object.create(
                      ('function' == typeof Iterator ? Iterator : Object)
                        .prototype
                    );
                  return (
                    (l.next = c(0)),
                    (l.throw = c(1)),
                    (l.return = c(2)),
                    'function' == typeof Symbol &&
                      (l[Symbol.iterator] = function () {
                        return this;
                      }),
                    l
                  );
                  function c(c) {
                    return function (i) {
                      return (function (c) {
                        if (n)
                          throw new TypeError(
                            'Generator is already executing.'
                          );
                        for (; l && ((l = 0), c[0] && (o = 0)), o; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (a =
                                  2 & c[0]
                                    ? r.return
                                    : c[0]
                                      ? r.throw ||
                                        ((a = r.return) && a.call(r), 0)
                                      : r.next) &&
                                !(a = a.call(r, c[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (c = [2 & c[0], a.value]), c[0])
                            ) {
                              case 0:
                              case 1:
                                a = c;
                                break;
                              case 4:
                                return (o.label++, { value: c[1], done: !1 });
                              case 5:
                                (o.label++, (r = c[1]), (c = [0]));
                                continue;
                              case 7:
                                ((c = o.ops.pop()), o.trys.pop());
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = o.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== c[0] && 2 !== c[0])
                                  )
                                ) {
                                  o = 0;
                                  continue;
                                }
                                if (
                                  3 === c[0] &&
                                  (!a || (c[1] > a[0] && c[1] < a[3]))
                                ) {
                                  o.label = c[1];
                                  break;
                                }
                                if (6 === c[0] && o.label < a[1]) {
                                  ((o.label = a[1]), (a = c));
                                  break;
                                }
                                if (a && o.label < a[2]) {
                                  ((o.label = a[2]), o.ops.push(c));
                                  break;
                                }
                                (a[2] && o.ops.pop(), o.trys.pop());
                                continue;
                            }
                            c = t.call(e, o);
                          } catch (i) {
                            ((c = [6, i]), (r = 0));
                          } finally {
                            n = a = 0;
                          }
                        if (5 & c[0]) throw c[1];
                        return { value: c[0] ? c[1] : void 0, done: !0 };
                      })([c, i]);
                    };
                  }
                })(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (!e || !t) return (a(null), i(null), d(null), [2]);
                      (f(!0), d(null), (l.label = 1));
                    case 1:
                      return (
                        l.trys.push([1, 11, 12, 13]),
                        [4, t.lookupAddress(e)]
                      );
                    case 2:
                      if (((n = l.sent()), a(n), !n)) return [3, 9];
                      l.label = 3;
                    case 3:
                      return (l.trys.push([3, 7, , 8]), [4, t.getResolver(n)]);
                    case 4:
                      return (r = l.sent()) ? [4, r.getAvatar()] : [3, 6];
                    case 5:
                      ((o = l.sent()), i(o || null), (l.label = 6));
                    case 6:
                      return [3, 8];
                    case 7:
                      return (l.sent(), i(null), [3, 8]);
                    case 8:
                      return [3, 10];
                    case 9:
                      (i(null), (l.label = 10));
                    case 10:
                      return [3, 13];
                    case 11:
                      return (
                        l.sent(),
                        d('ENS解析失败'),
                        a(null),
                        i(null),
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
                return new Promise(function (r, a) {
                  var o = n.apply(e, t);
                  function l(e) {
                    Se(o, r, a, l, c, 'next', e);
                  }
                  function c(e) {
                    Se(o, r, a, l, c, 'throw', e);
                  }
                  l(void 0);
                });
              })();
            },
            [e, t]
          ),
          { ensName: r, ensAvatar: c, isLoading: s, error: p }
        );
      };
      function Ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Pe(e, t, n, r, a, o, l) {
        try {
          var c = e[o](l),
            i = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function Ie(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (i) {
                ((c = !0), (a = i));
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Ce(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ce(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      const Te = function () {
        var e = $(),
          t = e.isConnected,
          n = e.address,
          r = e.balance,
          a = e.networkName,
          o = e.chainId,
          i = e.isConnecting,
          s = e.error,
          f = e.connectWallet,
          m = e.disconnectWallet,
          y = e.switchNetwork,
          b = e.networks,
          h = e.provider,
          v = je(n, h),
          E = v.ensName,
          A = v.ensAvatar,
          O = v.isLoading,
          S = Ie(c().useState(null), 2),
          k = S[0],
          j = S[1],
          C = Ie(c().useState(null), 2),
          P = C[0],
          I = C[1],
          T = function () {
            I(null);
          },
          M = function (e) {
            return ((t = function () {
              return (function (e, t) {
                var n,
                  r,
                  a,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  l = Object.create(
                    ('function' == typeof Iterator ? Iterator : Object)
                      .prototype
                  );
                return (
                  (l.next = c(0)),
                  (l.throw = c(1)),
                  (l.return = c(2)),
                  'function' == typeof Symbol &&
                    (l[Symbol.iterator] = function () {
                      return this;
                    }),
                  l
                );
                function c(c) {
                  return function (i) {
                    return (function (c) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; l && ((l = 0), c[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & c[0]
                                  ? r.return
                                  : c[0]
                                    ? r.throw ||
                                      ((a = r.return) && a.call(r), 0)
                                    : r.next) &&
                              !(a = a.call(r, c[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (c = [2 & c[0], a.value]), c[0])
                          ) {
                            case 0:
                            case 1:
                              a = c;
                              break;
                            case 4:
                              return (o.label++, { value: c[1], done: !1 });
                            case 5:
                              (o.label++, (r = c[1]), (c = [0]));
                              continue;
                            case 7:
                              ((c = o.ops.pop()), o.trys.pop());
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = o.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== c[0] && 2 !== c[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === c[0] &&
                                (!a || (c[1] > a[0] && c[1] < a[3]))
                              ) {
                                o.label = c[1];
                                break;
                              }
                              if (6 === c[0] && o.label < a[1]) {
                                ((o.label = a[1]), (a = c));
                                break;
                              }
                              if (a && o.label < a[2]) {
                                ((o.label = a[2]), o.ops.push(c));
                                break;
                              }
                              (a[2] && o.ops.pop(), o.trys.pop());
                              continue;
                          }
                          c = t.call(e, o);
                        } catch (i) {
                          ((c = [6, i]), (r = 0));
                        } finally {
                          n = a = 0;
                        }
                      if (5 & c[0]) throw c[1];
                      return { value: c[0] ? c[1] : void 0, done: !0 };
                    })([c, i]);
                  };
                }
              })(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, y(e)];
                  case 1:
                    return (t.sent(), T(), [2]);
                }
              });
            }),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = t.apply(e, n);
                function l(e) {
                  Pe(o, r, a, l, c, 'next', e);
                }
                function c(e) {
                  Pe(o, r, a, l, c, 'throw', e);
                }
                l(void 0);
              });
            })();
            var t;
          },
          D = (0, l.useMemo)(
            function () {
              return (function (e, t) {
                return e
                  ? t || ''.concat(e.slice(0, 6), '...').concat(e.slice(-4))
                  : '';
              })(n, E);
            },
            [n, E]
          ),
          W = (0, l.useMemo)(
            function () {
              return r ? Number.parseFloat(r).toFixed(4) : '0';
            },
            [r]
          );
        return c().createElement(
          c().Fragment,
          null,
          c().createElement(
            u.A,
            { position: 'static', className: 'bg-gray-100 text-gray-800' },
            c().createElement(
              ge.A,
              null,
              c().createElement(
                p.A,
                {
                  variant: 'h6',
                  component: 'div',
                  className: 'flex-grow text-white',
                },
                '红包合约'
              ),
              s &&
                c().createElement(
                  w.A,
                  { severity: 'error', className: 'mr-4 py-0' },
                  s
                ),
              c().createElement(
                d.A,
                { className: 'flex items-center gap-4' },
                t &&
                  c().createElement(
                    x.A,
                    {
                      variant: 'contained',
                      size: 'small',
                      onClick: function (e) {
                        I(e.currentTarget);
                      },
                      endIcon: c().createElement(be.A, null),
                      className:
                        'min-w-[120px] normal-case border-gray-300 text-gray-800',
                    },
                    a || 'Unknown'
                  ),
                t
                  ? c().createElement(
                      c().Fragment,
                      null,
                      c().createElement(
                        d.A,
                        {
                          className:
                            'flex flex-col items-center border border-gray-300 rounded p-2 min-w-[80px] bg-white',
                        },
                        c().createElement(
                          p.A,
                          { variant: 'caption', className: 'text-gray-600' },
                          '余额'
                        ),
                        c().createElement(
                          p.A,
                          {
                            variant: 'body2',
                            className: 'font-bold text-black',
                          },
                          W,
                          ' ETH'
                        )
                      ),
                      c().createElement(
                        x.A,
                        {
                          onClick: function (e) {
                            j(e.currentTarget);
                          },
                          className:
                            'flex items-center gap-2 normal-case text-gray-800',
                          'data-testid': 'wallet-info-button',
                        },
                        c().createElement(
                          Ee.A,
                          { className: 'w-8 h-8', src: A || void 0 },
                          !A && c().createElement(ve.A, null)
                        ),
                        c().createElement(
                          d.A,
                          { className: 'flex flex-col items-start' },
                          c().createElement(
                            p.A,
                            {
                              variant: 'body2',
                              className: 'font-bold text-black',
                            },
                            O ? '解析中...' : D
                          ),
                          c().createElement(
                            p.A,
                            { variant: 'caption', className: 'text-gray-600' },
                            E ? '已连接 (ENS)' : '已连接'
                          )
                        ),
                        c().createElement(be.A, null)
                      )
                    )
                  : c().createElement(
                      x.A,
                      {
                        variant: 'contained',
                        startIcon: i
                          ? c().createElement(N.A, { size: 16 })
                          : c().createElement(he.A, null),
                        onClick: f,
                        disabled: i,
                        className: 'normal-case',
                        'data-testid': 'connect-wallet-button',
                      },
                      i ? '连接中...' : '连接钱包'
                    )
              )
            )
          ),
          c().createElement(
            Ae.A,
            {
              anchorEl: P,
              open: Boolean(P),
              onClose: T,
              anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
              transformOrigin: { vertical: 'top', horizontal: 'right' },
            },
            Object.entries(b).map(function (e) {
              var t = Ie(e, 2),
                n = t[0],
                r = t[1];
              return c().createElement(
                Oe.A,
                {
                  key: n,
                  onClick: function () {
                    return M(n);
                  },
                  selected: o === r.chainId,
                },
                c().createElement(xe.A, { primary: r.chainName })
              );
            })
          ),
          c().createElement(
            Ae.A,
            {
              anchorEl: k,
              open: Boolean(k),
              onClose: function () {
                j(null);
              },
              anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
              transformOrigin: { vertical: 'top', horizontal: 'right' },
            },
            c().createElement(
              Oe.A,
              {
                onClick: function () {
                  n && navigator.clipboard.writeText(n);
                },
              },
              c().createElement(we.A, { className: 'mr-2' }),
              c().createElement(xe.A, { primary: '复制地址' })
            ),
            c().createElement(g.A, null),
            c().createElement(
              Oe.A,
              { onClick: m },
              c().createElement(xe.A, { primary: '断开连接' })
            )
          )
        );
      };
      var Me = n(6153),
        De = n(5813),
        We = function () {
          return (
            c().useEffect(function () {}, []),
            (0, De.jsx)('div', { className: 'ButtonCva', children: '111' })
          );
        };
      function ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const qe = function () {
        var e,
          t,
          n =
            ((e = (0, Me.e)('1111')),
            (t = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator'];
                if (null != n) {
                  var r,
                    a,
                    o = [],
                    l = !0,
                    c = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(l = (r = n.next()).done) &&
                      (o.push(r.value), !t || o.length !== t);
                      l = !0
                    );
                  } catch (i) {
                    ((c = !0), (a = i));
                  } finally {
                    try {
                      l || null == n.return || n.return();
                    } finally {
                      if (c) throw a;
                    }
                  }
                  return o;
                }
              })(e, t) ||
              (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return ze(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(n)
                      : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ze(e, t)
                        : void 0
                  );
                }
              })(e, t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()),
          r = n[0];
        return (
          n[1],
          c().createElement(
            'div',
            { className: 'min-h-screen bg-gray-50' },
            c().createElement(
              u.A,
              {
                position: 'static',
                elevation: 0,
                className: 'bg-white border-b',
              },
              c().createElement(Te, null)
            ),
            c().createElement(
              s.A,
              { maxWidth: 'lg', className: 'py-8' },
              c().createElement(
                f.A,
                { className: 'mb-8 bg-gradient-to-r text-black' },
                c().createElement(
                  m.A,
                  { className: 'text-black' },
                  c().createElement(
                    p.A,
                    {
                      variant: 'h4',
                      component: 'h1',
                      className: 'mb-2 font-bold',
                    },
                    '欢迎使用红包应用 🧧',
                    r,
                    c().createElement(We, null)
                  ),
                  c().createElement(
                    p.A,
                    { variant: 'body1', className: 'opacity-90' },
                    '基于区块链技术的去中心化红包系统，安全、透明、公平'
                  )
                )
              ),
              c().createElement(
                d.A,
                { className: 'mt-8' },
                c().createElement(re, null)
              ),
              c().createElement(
                y.A,
                { container: !0, spacing: 4, className: 'mt-[100px]' },
                c().createElement(
                  y.A,
                  { size: 6 },
                  c().createElement(te, null)
                ),
                c().createElement(y.A, { size: 6 }, c().createElement(ye, null))
              )
            )
          )
        );
      };
      var Ue = (0, a.A)({
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
      i.createRoot(document.getElementById('app')).render(
        c().createElement(
          c().StrictMode,
          null,
          c().createElement(
            H,
            null,
            c().createElement(
              o.A,
              { theme: Ue },
              c().createElement(r.Ay, null),
              c().createElement(qe, null)
            )
          )
        )
      );
    },
    3514: () => {},
  },
  (e) => {
    (e.O(
      0,
      [
        757, 223, 999, 392, 885, 914, 202, 894, 72, 319, 124, 482, 704, 719,
        607, 762, 562, 569, 685,
      ],
      () => e((e.s = 1231))
    ),
      e.O());
  },
]);
