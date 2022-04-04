(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [93],
  {
    2179: function(e, t, n) {},
    2180: function(e, t, n) {},
    2687: function(e, t, n) {
      'use strict';
      n.r(t);
      n(87), n(2179);
      var o = n(0),
        r = n.n(o),
        i = n(89),
        l = n(77),
        c = n(12),
        a = n.n(c),
        u = n(52),
        s = n(86),
        f = n(638),
        p = n(662);
      function b(e) {
        return (b =
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
      function m() {
        return (m =
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
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function d(e, t) {
        return !t || ('object' !== b(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w() {
        return window;
      }
      var g = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = d(this, h(t).call(this, e))).scrollToTop = function(e) {
              var t = n.props,
                o = t.target,
                r = void 0 === o ? w : o,
                i = t.onClick;
              Object(p.a)(0, { getContainer: r }),
                'function' === typeof i && i(e);
            }),
            (n.handleScroll = function() {
              var e = n.props,
                t = e.visibilityHeight,
                o = e.target,
                r = void 0 === o ? w : o,
                i = Object(f.a)(r(), !0);
              n.setState({ visible: i > t });
            }),
            (n.renderBackTop = function(e) {
              var t = e.getPrefixCls,
                r = n.props,
                l = r.prefixCls,
                c = r.className,
                s = void 0 === c ? '' : c,
                f = r.children,
                p = t('back-top', l),
                b = a()(p, s),
                v = o.createElement(
                  'div',
                  { className: ''.concat(p, '-content') },
                  o.createElement('div', { className: ''.concat(p, '-icon') })
                ),
                d = Object(u.a)(n.props, [
                  'prefixCls',
                  'className',
                  'children',
                  'visibilityHeight',
                  'target',
                  'visible',
                ]),
                h = ('visible' in n.props
                ? n.props.visible
                : n.state.visible)
                  ? o.createElement(
                      'div',
                      m({}, d, { className: b, onClick: n.scrollToTop }),
                      f || v
                    )
                  : null;
              return o.createElement(
                i.a,
                { component: '', transitionName: 'fade' },
                h
              );
            }),
            (n.state = { visible: !1 }),
            n
          );
        }
        var n, r, c;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this.props.target || w;
                (this.scrollEvent = Object(l.a)(
                  e(),
                  'scroll',
                  this.handleScroll
                )),
                  this.handleScroll();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.scrollEvent && this.scrollEvent.remove();
              },
            },
            {
              key: 'render',
              value: function() {
                return o.createElement(s.a, null, this.renderBackTop);
              },
            },
          ]) && v(n.prototype, r),
          c && v(n, c),
          t
        );
      })(o.Component);
      g.defaultProps = { visibilityHeight: 400 };
      n(2180),
        (t.default = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'div',
              { className: 'isoContent' },
              r.a.createElement('h2', null, 'Back to top with Gray'),
              r.a.createElement(g, null),
              'Scroll down to see the bottom-right',
              r.a.createElement(
                'strong',
                { style: { color: 'rgba(64, 64, 64, 0.6)' } },
                ' gray '
              ),
              'button.'
            ),
            r.a.createElement('br', null),
            r.a.createElement('br', null),
            r.a.createElement('br', null),
            r.a.createElement('br', null),
            r.a.createElement(
              'div',
              { className: 'isoContent' },
              r.a.createElement('h2', null, 'Back to top with Blue'),
              r.a.createElement(
                g,
                null,
                r.a.createElement(
                  'div',
                  { className: 'ant-back-top-inner' },
                  'UP'
                )
              ),
              'Scroll down to see the bottom-right',
              r.a.createElement(
                'strong',
                { style: { color: '#1088e9' } },
                ' blue '
              ),
              'button.'
            )
          );
        });
    },
    638: function(e, t, n) {
      'use strict';
      function o(e, t) {
        if ('undefined' === typeof window) return 0;
        var n = t ? 'scrollTop' : 'scrollLeft',
          o = e === window,
          r = o ? e[t ? 'pageYOffset' : 'pageXOffset'] : e[n];
        return (
          o && 'number' !== typeof r && (r = document.documentElement[n]), r
        );
      }
      n.d(t, 'a', function() {
        return o;
      });
    },
    662: function(e, t, n) {
      'use strict';
      var o = n(109),
        r = n.n(o),
        i = n(638);
      function l(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.getContainer,
          o =
            void 0 === n
              ? function() {
                  return window;
                }
              : n,
          l = t.callback,
          c = t.duration,
          a = void 0 === c ? 450 : c,
          u = o(),
          s = Object(i.a)(u, !0),
          f = Date.now();
        r()(function t() {
          var n = Date.now() - f,
            o = (function(e, t, n, o) {
              var r = n - t;
              return (e /= o / 2) < 1
                ? (r / 2) * e * e * e + t
                : (r / 2) * ((e -= 2) * e * e + 2) + t;
            })(n > a ? a : n, s, e, a);
          u === window
            ? window.scrollTo(window.pageXOffset, o)
            : (u.scrollTop = o),
            n < a ? r()(t) : 'function' === typeof l && l();
        });
      }
      n.d(t, 'a', function() {
        return l;
      });
    },
  },
]);
//# sourceMappingURL=93.e478a9ba.chunk.js.map
