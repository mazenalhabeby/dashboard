(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [101, 141, 142, 143, 144],
  {
    2686: function(t, n, e) {
      'use strict';
      e.r(n);
      e(551);
      var a = e(553),
        r = (e(306), e(20)),
        l = (e(552), e(554)),
        i = e(0),
        c = e.n(i),
        o = e(548),
        u = e(547),
        p = e(546),
        m = e(550),
        s = e(558),
        d = e(28),
        f = (e(2177), e(2615).a),
        h = e(22),
        g = e(6);
      function x() {
        var t = Object(d.a)([
          '\n  color: ',
          ';\n  font-size: 13px;\n\n  a {\n    color: ',
          ';\n    font-size: 13px;\n  }\n\n  > span:last-child {\n    font-weight: 700;\n    color: ',
          ';\n  }\n',
        ]);
        return (
          (x = function() {
            return t;
          }),
          t
        );
      }
      var b = Object(h.c)(function(t) {
        return c.a.createElement(f, t);
      })(
        x(),
        Object(g.palette)('text', 3),
        Object(g.palette)('text', 3),
        Object(g.palette)('text', 1)
      );
      n.default = function() {
        var t = s.b.rowStyle,
          n = s.b.colStyle,
          e = s.b.gutter;
        return c.a.createElement(
          p.default,
          null,
          c.a.createElement(o.default, null, 'BreadCrumb'),
          c.a.createElement(
            a.a,
            { style: t, gutter: e, justify: 'start' },
            c.a.createElement(
              l.a,
              { span: 12, style: n },
              c.a.createElement(
                u.default,
                {
                  title: 'Basic BreadCrumb',
                  subtitle:
                    'The simplest usage that close the notification box after 4.5s.',
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    b,
                    null,
                    c.a.createElement(b.Item, null, 'Home'),
                    c.a.createElement(
                      b.Item,
                      null,
                      c.a.createElement(
                        'a',
                        { href: '# ' },
                        'Application Center'
                      )
                    ),
                    c.a.createElement(
                      b.Item,
                      null,
                      c.a.createElement('a', { href: '# ' }, 'Application List')
                    ),
                    c.a.createElement(b.Item, null, 'An Application')
                  )
                )
              )
            ),
            c.a.createElement(
              l.a,
              { span: 12, style: n },
              c.a.createElement(
                u.default,
                {
                  title: 'Breadcrumb with Icon',
                  subtitle:
                    'The simplest usage that close the notification box after 4.5s.',
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    b,
                    null,
                    c.a.createElement(
                      b.Item,
                      { href: '# ' },
                      c.a.createElement(r.a, { type: 'home' })
                    ),
                    c.a.createElement(
                      b.Item,
                      { href: '# ' },
                      c.a.createElement(r.a, { type: 'user' }),
                      c.a.createElement('span', null, 'Application List')
                    ),
                    c.a.createElement(b.Item, null, 'Application')
                  )
                )
              )
            )
          ),
          c.a.createElement(
            a.a,
            { style: t, gutter: e, justify: 'start' },
            c.a.createElement(
              l.a,
              { span: 12, style: n },
              c.a.createElement(
                u.default,
                {
                  title: 'Breadcrumb Configuring the Separator',
                  subtitle:
                    'The simplest usage that close the notification box after 4.5s.',
                },
                c.a.createElement(
                  m.default,
                  null,
                  c.a.createElement(
                    b,
                    { separator: '>' },
                    c.a.createElement(b.Item, null, 'Home'),
                    c.a.createElement(
                      b.Item,
                      { href: '# ' },
                      'Application Center'
                    ),
                    c.a.createElement(
                      b.Item,
                      { href: '# ' },
                      'Application List'
                    ),
                    c.a.createElement(b.Item, null, 'An Application')
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
        l = e(28);
      function i() {
        var t = Object(l.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (i = function() {
            return t;
          }),
          t
        );
      }
      var c = e(22).c.div(i());
      n.default = function(t) {
        return r.a.createElement(
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
    547: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        l = e(28),
        i = e(22),
        c = e(6);
      function o() {
        var t = Object(l.a)([
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
        var t = Object(l.a)([
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
      var p = i.c.h3(u(), Object(c.palette)('text', 0)),
        m = i.c.p(o(), Object(c.palette)('text', 3)),
        s = function(t) {
          return r.a.createElement(
            'div',
            null,
            t.title
              ? r.a.createElement(
                  p,
                  { className: 'isoBoxTitle' },
                  ' ',
                  t.title,
                  ' '
                )
              : '',
            t.subtitle
              ? r.a.createElement(
                  m,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  t.subtitle,
                  ' '
                )
              : ''
          );
        };
      function d() {
        var t = Object(l.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
        );
      }
      var f = i.c.div(d(), Object(c.palette)('border', 0), '');
      n.default = function(t) {
        return r.a.createElement(
          f,
          {
            className: ''.concat(
              t.className ? t.className : '',
              ' isoBoxWrapper'
            ),
            style: t.style,
          },
          r.a.createElement(s, { title: t.title, subtitle: t.subtitle }),
          t.children
        );
      };
    },
    548: function(t, n, e) {
      'use strict';
      e.r(n);
      var a = e(0),
        r = e.n(a),
        l = e(28),
        i = e(22),
        c = e(6),
        o = e(59);
      function u() {
        var t = Object(l.a)([
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
      var p = i.c.h1(
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
        m = Object(o.a)(p);
      n.default = function(t) {
        return r.a.createElement(
          m,
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
        l = e(28),
        i = e(22),
        c = e(6),
        o = e(59);
      function u() {
        var t = Object(l.a)([
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
      var p = i.c.div(
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
        m = Object(o.a)(p);
      n.default = function(t) {
        return r.a.createElement(
          m,
          { className: 'isoExampleWrapper', style: t.style },
          t.children
        );
      };
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
        l = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      n.b = l;
    },
  },
]);
//# sourceMappingURL=101.f84bacb1.chunk.js.map
