(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [62, 141, 142, 143, 144],
  {
    1553: function(t, n, e) {
      'use strict';
      e(918);
      var a = e(920);
      n.a = a.a;
    },
    2704: function(t, n, e) {
      'use strict';
      e.r(n);
      e(551);
      var a = e(553),
        r = (e(552), e(554)),
        i = e(0),
        l = e.n(i),
        o = e(1553),
        c = e(194),
        u = e(548),
        s = e(547),
        d = e(546),
        f = e(550),
        m = e(560),
        p = e(558),
        g = e(28);
      function x() {
        var t = Object(g.a)([
          '\n  display: inline-block;\n  font-size: 13px;\n',
        ]);
        return (
          (x = function() {
            return t;
          }),
          t
        );
      }
      var h = e(22).c.p(x()),
        b = function() {
          o.a.success(
            l.a.createElement(
              h,
              null,
              'This is a message of success will dessapear after 3 seconds'
            ),
            3
          );
        },
        y = function() {
          o.a.error(
            l.a.createElement(h, null, 'This is a message of error'),
            10
          );
        },
        E = function() {
          o.a.warning(l.a.createElement(h, null, 'This is message of warning'));
        },
        w = function() {
          var t = o.a.loading(
            l.a.createElement(h, null, 'Action in progress..'),
            0
          );
          setTimeout(t, 2500);
        },
        v = function() {
          o.a.success(
            l.a.createElement(
              h,
              null,
              'This is a prompt message for success, and it will disappear in 10 seconds'
            ),
            10
          );
        };
      n.default = function() {
        var t = p.b.rowStyle,
          n = p.b.colStyle,
          e = p.b.gutter,
          i = { marginRight: '5px', marginBottom: '5px' };
        return l.a.createElement(
          d.default,
          null,
          l.a.createElement(
            u.default,
            null,
            l.a.createElement(m.a, { id: 'feedback.alert.message' })
          ),
          l.a.createElement(
            a.a,
            { style: t, gutter: e, justify: 'start' },
            l.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: n },
              l.a.createElement(
                s.default,
                {
                  title: l.a.createElement(m.a, {
                    id: 'feedback.alert.normalMessageTitle',
                  }),
                  subtitle: l.a.createElement(m.a, {
                    id: 'feedback.alert.normalMessageSubtitle',
                  }),
                },
                l.a.createElement(
                  f.default,
                  null,
                  l.a.createElement(
                    c.b,
                    {
                      type: 'primary',
                      onClick: function() {
                        o.a.info('This is a normal message');
                      },
                    },
                    l.a.createElement(m.a, {
                      id: 'feedback.alert.displayMessage',
                    })
                  )
                )
              )
            ),
            l.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: n },
              l.a.createElement(
                s.default,
                {
                  title: l.a.createElement(m.a, {
                    id: 'feedback.alert.displayOtherTypeMessageTitle',
                  }),
                  subtitle: l.a.createElement(m.a, {
                    id: 'feedback.alert.displayOtherTypeMessageSubTitle',
                  }),
                },
                l.a.createElement(
                  f.default,
                  null,
                  l.a.createElement(
                    c.b,
                    { onClick: b, style: i },
                    l.a.createElement(m.a, { id: 'feedback.alert.successText' })
                  ),
                  l.a.createElement(
                    c.b,
                    { onClick: y, style: i },
                    l.a.createElement(m.a, { id: 'feedback.alert.errorText' })
                  ),
                  l.a.createElement(
                    c.b,
                    { onClick: E },
                    l.a.createElement(m.a, { id: 'feedback.alert.warningText' })
                  )
                )
              )
            )
          ),
          l.a.createElement(
            a.a,
            { style: t, gutter: e, justify: 'start' },
            l.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: n },
              l.a.createElement(
                s.default,
                {
                  title: l.a.createElement(m.a, {
                    id: 'feedback.alert.customizeDurationTitle',
                  }),
                  subtitle: l.a.createElement(m.a, {
                    id: 'feedback.alert.customizeDurationSubTitle',
                  }),
                },
                l.a.createElement(
                  f.default,
                  null,
                  l.a.createElement(
                    c.b,
                    { onClick: v },
                    l.a.createElement(m.a, {
                      id: 'feedback.alert.customizeDurationButton',
                    })
                  )
                )
              )
            ),
            l.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: n },
              l.a.createElement(
                s.default,
                {
                  title: l.a.createElement(m.a, {
                    id: 'feedback.alert.messageLoadingTitle',
                  }),
                  subtitle: l.a.createElement(m.a, {
                    id: 'feedback.alert.messageLoadingSubTitle',
                  }),
                },
                l.a.createElement(
                  f.default,
                  null,
                  l.a.createElement(
                    c.b,
                    { onClick: w },
                    l.a.createElement(m.a, {
                      id: 'feedback.alert.displayLoadIndicator',
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    546: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        i = e(28);
      function l() {
        var t = Object(i.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      var o = e(22).c.div(l());
      n.default = function(t) {
        return r.a.createElement(
          o,
          Object.assign(
            {
              className:
                null != t.className
                  ? ''.concat(t.className, ' isoLayoutContentWrapper')
                  : 'isoLayoutContentWrapper',
            },
            t
          ),
          t.children
        );
      };
    },
    547: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        i = e(28),
        l = e(22),
        o = e(6);
      function c() {
        var t = Object(i.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (c = function() {
            return t;
          }),
          t
        );
      }
      function u() {
        var t = Object(i.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      var s = l.c.h3(u(), Object(o.palette)('text', 0)),
        d = l.c.p(c(), Object(o.palette)('text', 3)),
        f = function(t) {
          return r.a.createElement(
            'div',
            null,
            t.title
              ? r.a.createElement(
                  s,
                  { className: 'isoBoxTitle' },
                  ' ',
                  t.title,
                  ' '
                )
              : '',
            t.subtitle
              ? r.a.createElement(
                  d,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  t.subtitle,
                  ' '
                )
              : ''
          );
        };
      function m() {
        var t = Object(i.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (m = function() {
            return t;
          }),
          t
        );
      }
      var p = l.c.div(m(), Object(o.palette)('border', 0), '');
      n.default = function(t) {
        return r.a.createElement(
          p,
          {
            className: ''.concat(
              t.className ? t.className : '',
              ' isoBoxWrapper'
            ),
            style: t.style,
          },
          r.a.createElement(f, { title: t.title, subtitle: t.subtitle }),
          t.children
        );
      };
    },
    548: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        i = e(28),
        l = e(22),
        o = e(6),
        c = e(59);
      function u() {
        var t = Object(i.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      var s = l.c.h1(
          u(),
          Object(o.palette)('secondary', 2),
          Object(o.palette)('secondary', 3),
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(o.palette)('secondary', 3),
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        d = Object(c.a)(s);
      n.default = function(t) {
        return r.a.createElement(
          d,
          { className: 'isoComponentTitle' },
          t.children
        );
      };
    },
    550: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        i = e(28),
        l = e(22),
        o = e(6),
        c = e(59);
      function u() {
        var t = Object(i.a)([
          '\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ',
          ';\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n    }\n\n    &:nth-child(4) {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ',
          ';\n      white-space: nowrap;\n      margin-right: ',
          ';\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ',
          ';\n      margin-left: ',
          ';\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ',
          ';\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ',
          ';\n      margin-left: ',
          ';\n\n      &:last-child {\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n',
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      var s = l.c.div(
          u(),
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '10px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '10px' : '0';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '70px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '70px' : '0';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? 'right' : 'left';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '295px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '295px' : '0';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '70px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '70px' : '0';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '8px' : '0 !important';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0 !important' : '8px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '8px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '8px' : '0';
          },
          Object(o.palette)('secondary', 1),
          function(t) {
            return 'rtl' === t['data-rtl'] ? 'auto' : '6px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '6px' : '0';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0' : '15px';
          },
          function(t) {
            return 'rtl' === t['data-rtl'] ? '15px' : '0';
          },
          function(t) {
            return t['data-rtl'], '0';
          },
          function(t) {
            return t['data-rtl'], '0';
          }
        ),
        d = Object(c.a)(s);
      n.default = function(t) {
        return r.a.createElement(
          d,
          { className: 'isoExampleWrapper', style: t.style },
          t.children
        );
      };
    },
    551: function(t, n, e) {
      'use strict';
      e(87), e(555);
    },
    552: function(t, n, e) {
      'use strict';
      e(87), e(555);
    },
    553: function(t, n, e) {
      'use strict';
      var a = e(1159);
      n.a = a.a;
    },
    554: function(t, n, e) {
      'use strict';
      var a = e(987);
      n.a = a.a;
    },
    558: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return a;
      }),
        e.d(n, 'c', function() {
          return r;
        });
      var a = {
          blue: {
            deep: 'rgb(0, 121, 191)',
            light: 'lightblue',
            lighter: '#d9fcff',
            soft: '#E6FCFF',
          },
          black: '#4d4d4d',
          shadow: 'rgba(0,0,0,0.2)',
          grey: {
            darker: '#C1C7D0',
            dark: '#E2E4E6',
            medium: '#DFE1E5',
            N30: '#EBECF0',
            light: '#F4F5F7',
          },
          green: 'rgb(185, 244, 188)',
          white: 'white',
          purple: 'rebeccapurple',
          orange: '#FF991F',
        },
        r = 8,
        i = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      n.b = i;
    },
    918: function(t, n, e) {
      'use strict';
      e(87), e(919);
    },
    919: function(t, n, e) {},
    920: function(t, n, e) {
      'use strict';
      var a = e(0),
        r = e(222),
        i = e(20);
      function l() {
        return (l =
          Object.assign ||
          function(t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        return (o =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var c,
        u,
        s,
        d,
        f = 3,
        m = 1,
        p = 'ant-message',
        g = 'move-up';
      var x = {
        open: function(t) {
          var n = void 0 !== t.duration ? t.duration : f,
            e = {
              info: 'info-circle',
              success: 'check-circle',
              error: 'close-circle',
              warning: 'exclamation-circle',
              loading: 'loading',
            }[t.type],
            l = m++,
            o = new Promise(function(o) {
              var f = function() {
                return 'function' === typeof t.onClose && t.onClose(), o(!0);
              };
              !(function(t) {
                u
                  ? t(u)
                  : r.a.newInstance(
                      {
                        prefixCls: p,
                        transitionName: g,
                        style: { top: c },
                        getContainer: s,
                        maxCount: d,
                      },
                      function(n) {
                        u ? t(u) : ((u = n), t(n));
                      }
                    );
              })(function(r) {
                var o = a.createElement(i.a, {
                    type: e,
                    theme: 'loading' === e ? 'outlined' : 'filled',
                  }),
                  c = e ? o : '';
                r.notice({
                  key: t.key || l,
                  duration: n,
                  style: {},
                  content: a.createElement(
                    'div',
                    {
                      className: ''
                        .concat(p, '-custom-content')
                        .concat(
                          t.type ? ' '.concat(p, '-').concat(t.type) : ''
                        ),
                    },
                    t.icon ? t.icon : c,
                    a.createElement('span', null, t.content)
                  ),
                  onClose: f,
                });
              });
            }),
            x = function() {
              u && u.removeNotice(l);
            };
          return (
            (x.then = function(t, n) {
              return o.then(t, n);
            }),
            (x.promise = o),
            x
          );
        },
        config: function(t) {
          void 0 !== t.top && ((c = t.top), (u = null)),
            void 0 !== t.duration && (f = t.duration),
            void 0 !== t.prefixCls && (p = t.prefixCls),
            void 0 !== t.getContainer && (s = t.getContainer),
            void 0 !== t.transitionName && ((g = t.transitionName), (u = null)),
            void 0 !== t.maxCount && ((d = t.maxCount), (u = null));
        },
        destroy: function() {
          u && (u.destroy(), (u = null));
        },
      };
      ['success', 'info', 'warning', 'error', 'loading'].forEach(function(t) {
        x[t] = function(n, e, a) {
          return (function(t) {
            return 'object' === o(t) && !!t.content;
          })(n)
            ? x.open(l(l({}, n), { type: t }))
            : ('function' === typeof e && ((a = e), (e = void 0)),
              x.open({ content: n, duration: e, type: t, onClose: a }));
        };
      }),
        (x.warn = x.warning),
        (n.a = x);
    },
  },
]);
//# sourceMappingURL=62.f13d33e6.chunk.js.map
