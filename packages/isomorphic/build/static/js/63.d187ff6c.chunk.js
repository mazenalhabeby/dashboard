(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [63, 141, 142, 143, 144],
  {
    1553: function(e, t, n) {
      'use strict';
      n(918);
      var a = n(920);
      t.a = a.a;
    },
    2706: function(e, t, n) {
      'use strict';
      n.r(t);
      n(551);
      var a = n(553),
        r = (n(552), n(554)),
        o = n(0),
        i = n.n(o),
        l = n(212),
        c = n(1553),
        m = n(194),
        s = n(548),
        u = n(547),
        p = n(546),
        f = n(550),
        d = n(560),
        x = n(558),
        g = n(28);
      function b() {
        var e = Object(g.a)(['\n  display: inline-block;\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      var h = n(22).c.div(b()),
        E = function(e) {
          return i.a.createElement(h, null, i.a.createElement(l.a, e));
        },
        y = 'Are you sure delete this task?';
      function v(e) {
        c.a.success('Click on Yes');
      }
      function w(e) {
        c.a.error('Click on No');
      }
      t.default = function() {
        var e = x.b.rowStyle,
          t = x.b.colStyle,
          n = x.b.gutter;
        return i.a.createElement(
          p.default,
          null,
          i.a.createElement(
            s.default,
            null,
            i.a.createElement(d.a, { id: 'feedback.alert.popConfirm' })
          ),
          i.a.createElement(
            a.a,
            { style: e, gutter: n, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                u.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'feedback.alert.popConfirm.basicTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'feedback.alert.popConfirm.basicSubTitle',
                  }),
                },
                i.a.createElement(
                  f.default,
                  null,
                  i.a.createElement(
                    E,
                    {
                      title: 'Are you sure\uff1f',
                      okText: 'Yes',
                      cancelText: 'No',
                      onConfirm: v,
                      onCancel: w,
                    },
                    i.a.createElement(
                      'a',
                      { href: '# ' },
                      i.a.createElement(d.a, {
                        id: 'feedback.alert.popConfirm.delete',
                      })
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                u.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'feedback.alert.popConfirm.notiWithIconTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'feedback.alert.popConfirm.notiWithIconSubTitle',
                  }),
                },
                i.a.createElement(
                  f.default,
                  null,
                  i.a.createElement(
                    'div',
                    { className: 'demoBtnsWrapper' },
                    i.a.createElement(
                      E,
                      {
                        placement: 'topLeft',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.TL',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'top',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.top',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'topRight',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.TR',
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'demoBtnsWrapper' },
                    i.a.createElement(
                      E,
                      {
                        placement: 'leftTop',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.LT',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'left',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.left',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'leftBottom',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.LB',
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'demoBtnsWrapper' },
                    i.a.createElement(
                      E,
                      {
                        placement: 'rightTop',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.RT',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'right',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.right',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'rightBottom',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.RB',
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'demoBtnsWrapper' },
                    i.a.createElement(
                      E,
                      {
                        placement: 'bottomLeft',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.Bl',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'bottom',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.bottom',
                        })
                      )
                    ),
                    i.a.createElement(
                      E,
                      {
                        placement: 'bottomRight',
                        title: y,
                        onConfirm: v,
                        okText: 'Yes',
                        cancelText: 'No',
                      },
                      i.a.createElement(
                        m.b,
                        { className: 'demoPosBtn' },
                        i.a.createElement(d.a, {
                          id: 'feedback.alert.popConfirm.BR',
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(28);
      function i() {
        var e = Object(o.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var l = n(22).c.div(i());
      t.default = function(e) {
        return r.a.createElement(
          l,
          Object.assign(
            {
              className:
                null != e.className
                  ? ''.concat(e.className, ' isoLayoutContentWrapper')
                  : 'isoLayoutContentWrapper',
            },
            e
          ),
          e.children
        );
      };
    },
    547: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(28),
        i = n(22),
        l = n(6);
      function c() {
        var e = Object(o.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(o.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var s = i.c.h3(m(), Object(l.palette)('text', 0)),
        u = i.c.p(c(), Object(l.palette)('text', 3)),
        p = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  s,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  u,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function f() {
        var e = Object(o.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var d = i.c.div(f(), Object(l.palette)('border', 0), '');
      t.default = function(e) {
        return r.a.createElement(
          d,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          r.a.createElement(p, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(28),
        i = n(22),
        l = n(6),
        c = n(59);
      function m() {
        var e = Object(o.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var s = i.c.h1(
          m(),
          Object(l.palette)('secondary', 2),
          Object(l.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(l.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        u = Object(c.a)(s);
      t.default = function(e) {
        return r.a.createElement(
          u,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(28),
        i = n(22),
        l = n(6),
        c = n(59);
      function m() {
        var e = Object(o.a)([
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
          (m = function() {
            return e;
          }),
          e
        );
      }
      var s = i.c.div(
          m(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '10px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '10px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'right' : 'left';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '295px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '295px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0 !important';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 !important' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0';
          },
          Object(l.palette)('secondary', 1),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'auto' : '6px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '6px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          }
        ),
        u = Object(c.a)(s);
      t.default = function(e) {
        return r.a.createElement(
          u,
          { className: 'isoExampleWrapper', style: e.style },
          e.children
        );
      };
    },
    551: function(e, t, n) {
      'use strict';
      n(87), n(555);
    },
    552: function(e, t, n) {
      'use strict';
      n(87), n(555);
    },
    553: function(e, t, n) {
      'use strict';
      var a = n(1159);
      t.a = a.a;
    },
    554: function(e, t, n) {
      'use strict';
      var a = n(987);
      t.a = a.a;
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'c', function() {
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
        o = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = o;
    },
    918: function(e, t, n) {
      'use strict';
      n(87), n(919);
    },
    919: function(e, t, n) {},
    920: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n(222),
        o = n(20);
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e) {
        return (l =
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
      var c,
        m,
        s,
        u,
        p = 3,
        f = 1,
        d = 'ant-message',
        x = 'move-up';
      var g = {
        open: function(e) {
          var t = void 0 !== e.duration ? e.duration : p,
            n = {
              info: 'info-circle',
              success: 'check-circle',
              error: 'close-circle',
              warning: 'exclamation-circle',
              loading: 'loading',
            }[e.type],
            i = f++,
            l = new Promise(function(l) {
              var p = function() {
                return 'function' === typeof e.onClose && e.onClose(), l(!0);
              };
              !(function(e) {
                m
                  ? e(m)
                  : r.a.newInstance(
                      {
                        prefixCls: d,
                        transitionName: x,
                        style: { top: c },
                        getContainer: s,
                        maxCount: u,
                      },
                      function(t) {
                        m ? e(m) : ((m = t), e(t));
                      }
                    );
              })(function(r) {
                var l = a.createElement(o.a, {
                    type: n,
                    theme: 'loading' === n ? 'outlined' : 'filled',
                  }),
                  c = n ? l : '';
                r.notice({
                  key: e.key || i,
                  duration: t,
                  style: {},
                  content: a.createElement(
                    'div',
                    {
                      className: ''
                        .concat(d, '-custom-content')
                        .concat(
                          e.type ? ' '.concat(d, '-').concat(e.type) : ''
                        ),
                    },
                    e.icon ? e.icon : c,
                    a.createElement('span', null, e.content)
                  ),
                  onClose: p,
                });
              });
            }),
            g = function() {
              m && m.removeNotice(i);
            };
          return (
            (g.then = function(e, t) {
              return l.then(e, t);
            }),
            (g.promise = l),
            g
          );
        },
        config: function(e) {
          void 0 !== e.top && ((c = e.top), (m = null)),
            void 0 !== e.duration && (p = e.duration),
            void 0 !== e.prefixCls && (d = e.prefixCls),
            void 0 !== e.getContainer && (s = e.getContainer),
            void 0 !== e.transitionName && ((x = e.transitionName), (m = null)),
            void 0 !== e.maxCount && ((u = e.maxCount), (m = null));
        },
        destroy: function() {
          m && (m.destroy(), (m = null));
        },
      };
      ['success', 'info', 'warning', 'error', 'loading'].forEach(function(e) {
        g[e] = function(t, n, a) {
          return (function(e) {
            return 'object' === l(e) && !!e.content;
          })(t)
            ? g.open(i(i({}, t), { type: e }))
            : ('function' === typeof n && ((a = n), (n = void 0)),
              g.open({ content: t, duration: n, type: e, onClose: a }));
        };
      }),
        (g.warn = g.warning),
        (t.a = g);
    },
  },
]);
//# sourceMappingURL=63.d187ff6c.chunk.js.map
