(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [116],
  {
    2176: function(e, t, n) {},
    2675: function(e, t, n) {
      'use strict';
      n.r(t);
      n(87), n(2176);
      var o = n(0),
        r = n.n(o),
        i = n(37),
        a = n(12),
        f = n.n(a),
        l = n(52),
        u = n(248),
        c = n.n(u),
        s = n(86),
        p = n(109),
        d = n.n(p);
      function h(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function m() {
        return function(e, t, n) {
          var o = n.value,
            r = !1;
          return {
            configurable: !0,
            get: function() {
              if (r || this === e.prototype || this.hasOwnProperty(t)) return o;
              var n = (function(e) {
                var t,
                  n = function(n) {
                    return function() {
                      (t = null), e.apply(void 0, h(n));
                    };
                  },
                  o = function() {
                    if (null == t) {
                      for (
                        var e = arguments.length, o = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        o[r] = arguments[r];
                      t = d()(n(o));
                    }
                  };
                return (
                  (o.cancel = function() {
                    return d.a.cancel(t);
                  }),
                  o
                );
              })(o.bind(this));
              return (
                (r = !0),
                Object.defineProperty(this, t, {
                  value: n,
                  configurable: !0,
                  writable: !0,
                }),
                (r = !1),
                n
              );
            },
          };
        };
      }
      var y = n(26),
        v = n(77);
      function b(e) {
        return e !== window
          ? e.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight };
      }
      function g(e, t, n) {
        if (void 0 !== n && t.top > e.top - n) return n + t.top;
      }
      function x(e, t, n) {
        if (void 0 !== n && t.bottom < e.bottom + n)
          return n + (window.innerHeight - t.bottom);
      }
      var E = [
          'resize',
          'scroll',
          'touchstart',
          'touchmove',
          'touchend',
          'pageshow',
          'load',
        ],
        w = [];
      function O(e, t) {
        if (e) {
          var n = w.find(function(t) {
            return t.target === e;
          });
          n
            ? n.affixList.push(t)
            : ((n = { target: e, affixList: [t], eventHandlers: {} }),
              w.push(n),
              E.forEach(function(t) {
                n.eventHandlers[t] = Object(v.a)(e, t, function() {
                  n.affixList.forEach(function(e) {
                    e.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function P(e) {
        var t = w.find(function(t) {
          var n = t.affixList.some(function(t) {
            return t === e;
          });
          return (
            n &&
              (t.affixList = t.affixList.filter(function(t) {
                return t !== e;
              })),
            n
          );
        });
        t &&
          0 === t.affixList.length &&
          ((w = w.filter(function(e) {
            return e !== t;
          })),
          E.forEach(function(e) {
            var n = t.eventHandlers[e];
            n && n.remove && n.remove();
          }));
      }
      function S() {
        return (S =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function j(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function A(e, t) {
        return !t || ('object' !== k(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function T(e, t) {
        return (T =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function k(e) {
        return (k =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var B,
        C = function(e, t, n, o) {
          var r,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
          if (
            'object' ===
              ('undefined' === typeof Reflect ? 'undefined' : k(Reflect)) &&
            'function' === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, o);
          else
            for (var f = e.length - 1; f >= 0; f--)
              (r = e[f]) &&
                (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        };
      !(function(e) {
        (e[(e.None = 0)] = 'None'), (e[(e.Prepare = 1)] = 'Prepare');
      })(B || (B = {}));
      var R = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((e = A(this, N(t).apply(this, arguments))).state = {
              status: B.None,
              lastAffix: !1,
              prevTarget: null,
            }),
            (e.getOffsetTop = function() {
              var t = e.props,
                n = t.offset,
                o = t.offsetBottom,
                r = e.props.offsetTop;
              return (
                'undefined' === typeof r &&
                  ((r = n),
                  Object(y.a)(
                    'undefined' === typeof n,
                    'Affix',
                    '`offset` is deprecated. Please use `offsetTop` instead.'
                  )),
                void 0 === o && void 0 === r && (r = 0),
                r
              );
            }),
            (e.getOffsetBottom = function() {
              return e.props.offsetBottom;
            }),
            (e.savePlaceholderNode = function(t) {
              e.placeholderNode = t;
            }),
            (e.saveFixedNode = function(t) {
              e.fixedNode = t;
            }),
            (e.measure = function() {
              var t = e.state,
                n = t.status,
                o = t.lastAffix,
                r = e.props,
                i = r.target,
                a = r.onChange;
              if (n === B.Prepare && e.fixedNode && e.placeholderNode && i) {
                var f = e.getOffsetTop(),
                  l = e.getOffsetBottom(),
                  u = i();
                if (u) {
                  var c = { status: B.None },
                    s = b(u),
                    p = b(e.placeholderNode),
                    d = g(p, s, f),
                    h = x(p, s, l);
                  void 0 !== d
                    ? ((c.affixStyle = {
                        position: 'fixed',
                        top: d,
                        width: p.width,
                        height: p.height,
                      }),
                      (c.placeholderStyle = {
                        width: p.width,
                        height: p.height,
                      }))
                    : void 0 !== h &&
                      ((c.affixStyle = {
                        position: 'fixed',
                        bottom: h,
                        width: p.width,
                        height: p.height,
                      }),
                      (c.placeholderStyle = {
                        width: p.width,
                        height: p.height,
                      })),
                    (c.lastAffix = !!c.affixStyle),
                    a && o !== c.lastAffix && a(c.lastAffix),
                    e.setState(c);
                }
              }
            }),
            (e.prepareMeasure = function() {
              e.setState({
                status: B.Prepare,
                affixStyle: void 0,
                placeholderStyle: void 0,
              });
            }),
            (e.renderAffix = function(t) {
              var n,
                r,
                i,
                a = t.getPrefixCls,
                u = e.state,
                s = u.affixStyle,
                p = u.placeholderStyle,
                d = e.props,
                h = d.prefixCls,
                m = d.children,
                y = f()(
                  ((n = {}),
                  (r = a('affix', h)),
                  (i = s),
                  r in n
                    ? Object.defineProperty(n, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[r] = i),
                  n)
                ),
                v = Object(l.a)(e.props, [
                  'prefixCls',
                  'offsetTop',
                  'offsetBottom',
                  'target',
                  'onChange',
                ]);
              return o.createElement(
                c.a,
                {
                  onResize: function() {
                    e.updatePosition();
                  },
                },
                o.createElement(
                  'div',
                  S({}, v, { ref: e.savePlaceholderNode }),
                  s &&
                    o.createElement('div', { style: p, 'aria-hidden': 'true' }),
                  o.createElement(
                    'div',
                    { className: y, ref: e.saveFixedNode, style: s },
                    o.createElement(
                      c.a,
                      {
                        onResize: function() {
                          e.updatePosition();
                        },
                      },
                      m
                    )
                  )
                )
              );
            }),
            e
          );
        }
        var n, r, i;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && T(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this,
                  t = this.props.target;
                t &&
                  (this.timeout = setTimeout(function() {
                    O(t(), e), e.updatePosition();
                  }));
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this.state.prevTarget,
                  n = this.props.target,
                  o = null;
                n && (o = n() || null),
                  t !== o &&
                    (P(this),
                    o && (O(o, this), this.updatePosition()),
                    this.setState({ prevTarget: o })),
                  (e.offsetTop === this.props.offsetTop &&
                    e.offsetBottom === this.props.offsetBottom) ||
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                clearTimeout(this.timeout),
                  P(this),
                  this.updatePosition.cancel();
              },
            },
            {
              key: 'updatePosition',
              value: function() {
                this.prepareMeasure();
              },
            },
            {
              key: 'lazyUpdatePosition',
              value: function() {
                var e = this.props.target,
                  t = this.state.affixStyle;
                if (e && t) {
                  var n = this.getOffsetTop(),
                    o = this.getOffsetBottom(),
                    r = e();
                  if (r) {
                    var i = b(r),
                      a = b(this.placeholderNode),
                      f = g(a, i, n),
                      l = x(a, i, o);
                    if (
                      (void 0 !== f && t.top === f) ||
                      (void 0 !== l && t.bottom === l)
                    )
                      return;
                  }
                }
                this.prepareMeasure();
              },
            },
            {
              key: 'render',
              value: function() {
                return o.createElement(s.a, null, this.renderAffix);
              },
            },
          ]) && j(n.prototype, r),
          i && j(n, i),
          t
        );
      })(o.Component);
      (R.defaultProps = {
        target: function() {
          return 'undefined' !== typeof window ? window : null;
        },
      }),
        C([m()], R.prototype, 'updatePosition', null),
        C([m()], R.prototype, 'lazyUpdatePosition', null),
        Object(i.polyfill)(R);
      var _ = R,
        L = (n(137), n(54));
      t.default = function() {
        var e = this;
        return r.a.createElement(
          'div',
          null,
          r.a.createElement('h2', null, ' Basic Affix '),
          r.a.createElement(
            _,
            null,
            r.a.createElement(L.a, { type: 'primary' }, 'Affix top')
          ),
          r.a.createElement('br', null),
          r.a.createElement(
            _,
            { offsetBottom: 0 },
            r.a.createElement(L.a, { type: 'primary' }, 'Affix bottom')
          ),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('h2', null, ' Containter to Scroll Affix '),
          r.a.createElement(
            'div',
            {
              className: 'scrollable-container',
              ref: function(t) {
                e.container = t;
              },
            },
            r.a.createElement(
              'div',
              { className: 'background' },
              r.a.createElement(
                _,
                {
                  target: function() {
                    return e.container;
                  },
                },
                r.a.createElement(
                  L.a,
                  { type: 'primary' },
                  'Fixed at the top of container'
                )
              )
            )
          ),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('h2', null, ' Affix with Callback '),
          r.a.createElement(
            _,
            { offsetTop: 120, onChange: function(e) {} },
            r.a.createElement(L.a, null, '120px to affix top')
          ),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null),
          r.a.createElement('br', null)
        );
      };
    },
  },
]);
//# sourceMappingURL=116.16c6beb8.chunk.js.map
