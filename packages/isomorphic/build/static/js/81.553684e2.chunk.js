(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [81, 141, 143, 144],
  {
    1235: function(e, t, a) {
      'use strict';
      a(787);
      var n = a(830),
        r = a(28),
        l = a(22);
      function c() {
        var e = Object(r.a)([
          '\n  &.ant-progress-line {\n    .ant-progress-outer {\n      padding-right: calc(2em + 16px);\n      margin-right: calc(-2em - 16px);\n    }\n\n    .ant-progress-text {\n      text-align: ',
          ';\n      margin: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var i = function(e) {
          return Object(l.c)(e)(
            c(),
            function(e) {
              return 'rtl' === e['data-rtl'] ? 'right' : 'left';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? '0 0.75em 0 0' : '0 0 0 0.75em';
            }
          );
        },
        s = a(59),
        o = i(n.a),
        u = Object(s.a)(o);
      t.a = u;
    },
    2634: function(e, t, a) {
      'use strict';
      a.r(t);
      a(551);
      var n = a(553),
        r = (a(552), a(554)),
        l = a(107),
        c = a(0),
        i = a.n(c),
        s = a(194),
        o = a(1235),
        u = a(548),
        m = a(546),
        p = a(547),
        d = a(560),
        f = a(558),
        E = a(59);
      t.default = function() {
        var e = i.a.useState(0),
          t = Object(l.a)(e, 2),
          a = t[0],
          c = t[1],
          g = f.b.rowStyle,
          x = f.b.colStyle,
          b = f.b.gutter,
          y = { margin: 'rtl' === E.b ? '0 0 10px 10px' : '0 10px 10px 0' };
        return i.a.createElement(
          m.default,
          null,
          i.a.createElement(
            u.default,
            null,
            i.a.createElement(d.a, { id: 'forms.progressBar.header' })
          ),
          i.a.createElement(
            n.a,
            { style: g, gutter: b, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 12, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.standardTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.standardSubTitle',
                  }),
                },
                i.a.createElement(o.a, { percent: 30, style: y }),
                i.a.createElement(o.a, {
                  percent: 50,
                  status: 'active',
                  style: y,
                }),
                i.a.createElement(o.a, {
                  percent: 70,
                  status: 'exception',
                  style: y,
                }),
                i.a.createElement(o.a, { percent: 100, style: y }),
                i.a.createElement(o.a, { percent: 50, showInfo: !1, style: y })
              )
            ),
            i.a.createElement(
              r.a,
              { md: 12, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.circularTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.circularSubTitle',
                  }),
                },
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 75,
                  style: y,
                }),
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 70,
                  status: 'exception',
                  style: y,
                }),
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 100,
                  style: y,
                })
              )
            )
          ),
          i.a.createElement(
            n.a,
            { style: g, gutter: b, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 8, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.miniTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.miniSubTitle',
                  }),
                },
                i.a.createElement(o.a, {
                  percent: 30,
                  strokeWidth: 5,
                  style: y,
                }),
                i.a.createElement(o.a, {
                  percent: 50,
                  strokeWidth: 5,
                  status: 'active',
                  style: y,
                }),
                i.a.createElement(o.a, {
                  percent: 70,
                  strokeWidth: 5,
                  status: 'exception',
                  style: y,
                }),
                i.a.createElement(o.a, {
                  percent: 100,
                  strokeWidth: 5,
                  style: y,
                })
              )
            ),
            i.a.createElement(
              r.a,
              { md: 8, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.miniCircularTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.miniCircularTitle',
                  }),
                },
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 30,
                  width: 80,
                  style: y,
                }),
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 70,
                  width: 80,
                  status: 'exception',
                  style: y,
                }),
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 100,
                  width: 80,
                  style: y,
                })
              )
            ),
            i.a.createElement(
              r.a,
              { md: 8, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.dynamicCircularTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.dynamicCircularSubTitle',
                  }),
                },
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: a,
                  style: y,
                }),
                i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(s.b, {
                    onClick: function() {
                      var e = a - 10;
                      e < 0 && (e = 0), c(e);
                    },
                    icon: 'minus',
                  }),
                  i.a.createElement(s.b, {
                    onClick: function() {
                      var e = a + 10;
                      e > 100 && (e = 100), c(e);
                    },
                    icon: 'plus',
                  })
                )
              )
            )
          ),
          i.a.createElement(
            n.a,
            { style: g, gutter: b, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.customTextTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.customTextSubTitle',
                  }),
                },
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 75,
                  format: function(e) {
                    return ''.concat(e, ' Days');
                  },
                  style: y,
                }),
                i.a.createElement(o.a, {
                  type: 'circle',
                  percent: 100,
                  format: function() {
                    return 'Done';
                  },
                  style: y,
                })
              )
            ),
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: x },
              i.a.createElement(
                p.default,
                {
                  title: i.a.createElement(d.a, {
                    id: 'forms.progressBar.dashboardTitle',
                  }),
                  subtitle: i.a.createElement(d.a, {
                    id: 'forms.progressBar.dashboardSubTitle',
                  }),
                },
                i.a.createElement(o.a, { type: 'dashboard', percent: 75 })
              )
            )
          )
        );
      };
    },
    546: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(28);
      function c() {
        var e = Object(l.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var i = a(22).c.div(c());
      t.default = function(e) {
        return r.a.createElement(
          i,
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
    547: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(28),
        c = a(22),
        i = a(6);
      function s() {
        var e = Object(l.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = Object(l.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var u = c.c.h3(o(), Object(i.palette)('text', 0)),
        m = c.c.p(s(), Object(i.palette)('text', 3)),
        p = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  u,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  m,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function d() {
        var e = Object(l.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      var f = c.c.div(d(), Object(i.palette)('border', 0), '');
      t.default = function(e) {
        return r.a.createElement(
          f,
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
    548: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(28),
        c = a(22),
        i = a(6),
        s = a(59);
      function o() {
        var e = Object(l.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var u = c.c.h1(
          o(),
          Object(i.palette)('secondary', 2),
          Object(i.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(i.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        m = Object(s.a)(u);
      t.default = function(e) {
        return r.a.createElement(
          m,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    551: function(e, t, a) {
      'use strict';
      a(87), a(555);
    },
    552: function(e, t, a) {
      'use strict';
      a(87), a(555);
    },
    553: function(e, t, a) {
      'use strict';
      var n = a(1159);
      t.a = n.a;
    },
    554: function(e, t, a) {
      'use strict';
      var n = a(987);
      t.a = n.a;
    },
    558: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return n;
      }),
        a.d(t, 'c', function() {
          return r;
        });
      var n = {
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
      t.b = l;
    },
  },
]);
//# sourceMappingURL=81.553684e2.chunk.js.map
