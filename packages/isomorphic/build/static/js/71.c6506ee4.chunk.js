(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [71, 141, 142, 143, 144],
  {
    2705: function(t, e, n) {
      'use strict';
      n.r(e);
      n(551);
      var a = n(553),
        i = (n(552), n(554)),
        r = (n(306), n(20)),
        l = n(0),
        c = n.n(l),
        o = n(781),
        u = n(194),
        s = n(548),
        f = n(547),
        d = n(546),
        m = n(550),
        p = n(560),
        h = n(558),
        b = n(28);
      function g() {
        var t = Object(b.a)([
          '\n  display: inline-block;\n  font-size: 13px;\n',
        ]);
        return (
          (g = function() {
            return t;
          }),
          t
        );
      }
      var x = n(22).c.div(g()),
        E = function() {
          var t = {
            message: 'Notification Title',
            description: c.a.createElement(
              x,
              null,
              'I will close after 2 seconds automatically. I will be close automatically. I will never close automatically.'
            ),
          };
          o.a.open(t);
        },
        w = function() {
          o.a.open({
            message: 'Notification Title',
            description:
              'I will never close automatically. Click the close button. I will be close automatically. I will never close automatically.',
            duration: 0,
          });
        },
        y = function(t) {
          o.a[t]({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        },
        k = function() {
          o.a.open({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: c.a.createElement(r.a, {
              type: 'smile-circle',
              style: { color: '#4482FF' },
            }),
          });
        },
        v = function() {},
        T = function() {
          var t = 'open'.concat(Date.now()),
            e = c.a.createElement(
              u.b,
              {
                type: 'primary',
                size: 'small',
                onClick: function() {
                  o.a.close(t);
                },
              },
              'Confirm'
            );
          o.a.open({
            message: 'Notification Title',
            description:
              'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn: e,
            key: t,
            onClose: v,
          });
        };
      e.default = function() {
        var t = h.b.rowStyle,
          e = h.b.colStyle,
          n = h.b.gutter,
          r = { marginRight: '5px' };
        return c.a.createElement(
          d.default,
          null,
          c.a.createElement(
            s.default,
            null,
            c.a.createElement(p.a, { id: 'feedback.alert.notification' })
          ),
          c.a.createElement(
            a.a,
            { style: t, gutter: n, justify: 'start' },
            c.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: e },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationBasicTitle',
                  }),
                  subtitle: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationBasicSubTitle',
                  }),
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    u.b,
                    { type: 'primary', onClick: E },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.notificationBasicDescription',
                    })
                  )
                )
              )
            ),
            c.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: e },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationDurationTitle',
                  }),
                  subtitle: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationDurationSubTitle',
                  }),
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    u.b,
                    { type: 'primary', onClick: w },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.notificationBasicDescription',
                    })
                  )
                )
              )
            )
          ),
          c.a.createElement(
            a.a,
            { style: t, gutter: n, justify: 'start' },
            c.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: e },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithIconTitle',
                  }),
                  subtitle: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithIconSubTitle',
                  }),
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    u.b,
                    {
                      onClick: function() {
                        return y('success');
                      },
                      style: r,
                    },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.successTitle',
                    })
                  ),
                  c.a.createElement(
                    u.b,
                    {
                      onClick: function() {
                        return y('info');
                      },
                      style: r,
                    },
                    c.a.createElement(p.a, { id: 'feedback.alert.infoTitle' })
                  ),
                  c.a.createElement(
                    u.b,
                    {
                      onClick: function() {
                        return y('warning');
                      },
                      style: r,
                    },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.warningTitle',
                    })
                  ),
                  c.a.createElement(
                    u.b,
                    {
                      onClick: function() {
                        return y('error');
                      },
                    },
                    c.a.createElement(p.a, { id: 'feedback.alert.errorTitle' })
                  )
                )
              )
            ),
            c.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: e },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithCustomIconTitle',
                  }),
                  subtitle: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithCustomIconSubTitle',
                  }),
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    u.b,
                    { type: 'primary', onClick: k },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.notificationBasicDescription',
                    })
                  )
                )
              )
            )
          ),
          c.a.createElement(
            a.a,
            { style: t, gutter: n, justify: 'start' },
            c.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: e },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithCustomButtonTitle',
                  }),
                  subtitle: c.a.createElement(p.a, {
                    id: 'feedback.alert.notificationwithCustomButtonSubTitle',
                  }),
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    u.b,
                    { type: 'primary', onClick: T },
                    c.a.createElement(p.a, {
                      id: 'feedback.alert.notificationBasicDescription',
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    546: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        i = n.n(a),
        r = n(28);
      function l() {
        var t = Object(r.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      var c = n(22).c.div(l());
      e.default = function(t) {
        return i.a.createElement(
          c,
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
    547: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        i = n.n(a),
        r = n(28),
        l = n(22),
        c = n(6);
      function o() {
        var t = Object(r.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function u() {
        var t = Object(r.a)([
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
      var s = l.c.h3(u(), Object(c.palette)('text', 0)),
        f = l.c.p(o(), Object(c.palette)('text', 3)),
        d = function(t) {
          return i.a.createElement(
            'div',
            null,
            t.title
              ? i.a.createElement(
                  s,
                  { className: 'isoBoxTitle' },
                  ' ',
                  t.title,
                  ' '
                )
              : '',
            t.subtitle
              ? i.a.createElement(
                  f,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  t.subtitle,
                  ' '
                )
              : ''
          );
        };
      function m() {
        var t = Object(r.a)([
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
      var p = l.c.div(m(), Object(c.palette)('border', 0), '');
      e.default = function(t) {
        return i.a.createElement(
          p,
          {
            className: ''.concat(
              t.className ? t.className : '',
              ' isoBoxWrapper'
            ),
            style: t.style,
          },
          i.a.createElement(d, { title: t.title, subtitle: t.subtitle }),
          t.children
        );
      };
    },
    548: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        i = n.n(a),
        r = n(28),
        l = n(22),
        c = n(6),
        o = n(59);
      function u() {
        var t = Object(r.a)([
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
          Object(c.palette)('secondary', 2),
          Object(c.palette)('secondary', 3),
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(c.palette)('secondary', 3),
          function(t) {
            return 'rtl' === t['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        f = Object(o.a)(s);
      e.default = function(t) {
        return i.a.createElement(
          f,
          { className: 'isoComponentTitle' },
          t.children
        );
      };
    },
    550: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        i = n.n(a),
        r = n(28),
        l = n(22),
        c = n(6),
        o = n(59);
      function u() {
        var t = Object(r.a)([
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
          Object(c.palette)('secondary', 1),
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
        f = Object(o.a)(s);
      e.default = function(t) {
        return i.a.createElement(
          f,
          { className: 'isoExampleWrapper', style: t.style },
          t.children
        );
      };
    },
    551: function(t, e, n) {
      'use strict';
      n(87), n(555);
    },
    552: function(t, e, n) {
      'use strict';
      n(87), n(555);
    },
    553: function(t, e, n) {
      'use strict';
      var a = n(1159);
      e.a = a.a;
    },
    554: function(t, e, n) {
      'use strict';
      var a = n(987);
      e.a = a.a;
    },
    558: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      }),
        n.d(e, 'c', function() {
          return i;
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
        i = 8,
        r = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      e.b = r;
    },
    781: function(t, e, n) {
      'use strict';
      n(339);
      var a = n(221);
      e.a = a.a;
    },
  },
]);
//# sourceMappingURL=71.c6506ee4.chunk.js.map
