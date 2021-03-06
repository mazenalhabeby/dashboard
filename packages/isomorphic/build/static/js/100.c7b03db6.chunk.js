(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [100, 141, 142, 143, 144],
  {
    2710: function(t, e, n) {
      'use strict';
      n.r(e);
      n(551);
      var a = n(553),
        r = (n(552), n(554)),
        i = n(43),
        l = n(44),
        o = n(192),
        c = n(191),
        d = n(193),
        p = n(0),
        u = n.n(p),
        s = n(1784),
        f = n(548),
        m = n(547),
        h = n(546),
        g = n(550),
        x = n(194),
        b = n(558),
        y = n(5);
      function w(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(n, !0).forEach(function(e) {
                Object(y.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : w(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var E = {
          labels: [
            '12am-3am',
            '3am-6am',
            '6am-9am',
            '9am-12pm',
            '12pm-3pm',
            '3pm-6pm',
            '6pm-9pm',
            '9pm-12am',
          ],
          datasets: [
            {
              title: 'Some Data',
              color: 'light-blue',
              values: [25, 40, 30, 35, 8, 52, 17, -4],
            },
            {
              title: 'Another Set',
              color: 'violet',
              values: [25, 50, -10, 15, 18, 32, 27, 14],
            },
            {
              title: 'Yet Another',
              color: 'blue',
              values: [15, 20, -3, -15, 58, 12, -17, 37],
            },
          ],
        },
        j = {},
        O = new Date(),
        C = (new Date(new Date().setMonth(1, 1)), O.getTime() / 1e3);
      C = Math.floor(C - (C % 86400)).toFixed(1);
      for (var I = 0; I < 375; I++)
        (j[C] = Math.floor(6 * Math.random()) + 1),
          (C = Math.floor(C - 86400).toFixed(1));
      var P = {
          height: 250,
          format_tooltip_x: function(t) {
            return (t + '').toUpperCase();
          },
          format_tooltip_y: function(t) {
            return t + ' pts';
          },
        },
        k = v(
          {
            header: 'Bar Chart',
            title: '',
            parent: '#frappeBarChart',
            parentId: 'frappeBarChart',
            type: 'bar',
            data: E,
          },
          P
        ),
        F = v(
          {
            header: 'Line Chart',
            title: '',
            parent: '#frappeLineChart',
            parentId: 'frappeLineChart',
            type: 'line',
            data: E,
            show_dots: 0,
            heatline: 1,
            region_fill: 1,
          },
          P
        ),
        D = v(
          {
            header: 'Scatter Chart',
            title: '',
            parent: '#frappeScatterChart',
            parentId: 'frappeScatterChart',
            type: 'scatter',
            data: E,
          },
          P
        ),
        S = v(
          {
            header: 'Pie Chart',
            title: '',
            parent: '#frappePieChart',
            parentId: 'frappePieChart',
            type: 'pie',
            data: E,
          },
          P
        ),
        B = v(
          {
            header: 'Percentage Chart',
            title: '',
            parent: '#frappePercentageChart',
            parentId: 'frappePercentageChart',
            type: 'percentage',
            data: E,
          },
          P
        ),
        N = {
          header: 'Updateable Chart',
          title: '',
          parent: '#frappeupdatedChart',
          parentId: 'frappeupdatedChart',
          data: E,
          type: 'line',
          show_dots: 0,
          heatline: 1,
        };
      n(2400);
      n.d(e, 'default', function() {
        return _;
      }),
        n.d(e, 'FrappeChart', function() {
          return s.a;
        });
      var _ = (function(t) {
        function e() {
          var t, n;
          Object(i.a)(this, e);
          for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
            r[l] = arguments[l];
          return (
            ((n = Object(o.a)(
              this,
              (t = Object(c.a)(e)).call.apply(t, [this].concat(r))
            )).state = { currentIndex: 2 }),
            (n.addData = function() {
              var t = n.state.currentIndex;
              t += 1;
              var e = E.datasets[t % 3];
              n.updatedChart.add_data_point(e.values, e.title),
                n.setState({ currentIndex: t });
            }),
            (n.removeData = function() {
              var t = n.state.currentIndex;
              t > 0 &&
                (n.updatedChart.remove_data_point(t),
                n.setState({ currentIndex: t - 1 }));
            }),
            n
          );
        }
        return (
          Object(d.a)(e, t),
          Object(l.a)(e, [
            {
              key: 'componentDidMount',
              value: function() {
                new s.a(k),
                  new s.a(F),
                  new s.a(D),
                  new s.a(S),
                  new s.a(B),
                  (this.updatedChart = new s.a(N));
              },
            },
            {
              key: 'render',
              value: function() {
                var t = b.b.rowStyle,
                  e = b.b.colStyle,
                  n = b.b.gutter;
                return u.a.createElement(
                  h.default,
                  { className: 'isoMapPage' },
                  u.a.createElement(f.default, null, 'Frappe Charts'),
                  u.a.createElement(
                    a.a,
                    { style: t, gutter: n, justify: 'start' },
                    u.a.createElement(
                      r.a,
                      { md: 24, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: N.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement(
                            'div',
                            {
                              style: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                              },
                            },
                            u.a.createElement(
                              x.b,
                              {
                                onClick: this.addData,
                                style: { marginRight: '10px' },
                              },
                              '+ Add Value'
                            ),
                            u.a.createElement(
                              x.b,
                              { onClick: this.removeData },
                              'Remove Value'
                            )
                          ),
                          u.a.createElement('div', { id: N.parentId })
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    a.a,
                    { style: t, gutter: n, justify: 'start' },
                    u.a.createElement(
                      r.a,
                      { md: 24, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: k.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement('div', { id: k.parentId })
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    a.a,
                    { style: t, gutter: n, justify: 'start' },
                    u.a.createElement(
                      r.a,
                      { md: 24, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: F.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement('div', { id: F.parentId })
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    a.a,
                    { style: t, gutter: n, justify: 'start' },
                    u.a.createElement(
                      r.a,
                      { md: 24, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: D.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement('div', { id: D.parentId })
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    a.a,
                    { style: t, gutter: n, justify: 'start' },
                    u.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: S.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement('div', { id: S.parentId })
                        )
                      )
                    ),
                    u.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: e },
                      u.a.createElement(
                        m.default,
                        { title: B.header },
                        u.a.createElement(
                          g.default,
                          null,
                          u.a.createElement('div', { id: B.parentId })
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          e
        );
      })(p.Component);
    },
    546: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        r = n.n(a),
        i = n(28);
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
      var o = n(22).c.div(l());
      e.default = function(t) {
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
    547: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        r = n.n(a),
        i = n(28),
        l = n(22),
        o = n(6);
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
      function d() {
        var t = Object(i.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
        );
      }
      var p = l.c.h3(d(), Object(o.palette)('text', 0)),
        u = l.c.p(c(), Object(o.palette)('text', 3)),
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
                  u,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  t.subtitle,
                  ' '
                )
              : ''
          );
        };
      function f() {
        var t = Object(i.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return t;
          }),
          t
        );
      }
      var m = l.c.div(f(), Object(o.palette)('border', 0), '');
      e.default = function(t) {
        return r.a.createElement(
          m,
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
    548: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        r = n.n(a),
        i = n(28),
        l = n(22),
        o = n(6),
        c = n(59);
      function d() {
        var t = Object(i.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
        );
      }
      var p = l.c.h1(
          d(),
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
        u = Object(c.a)(p);
      e.default = function(t) {
        return r.a.createElement(
          u,
          { className: 'isoComponentTitle' },
          t.children
        );
      };
    },
    550: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        r = n.n(a),
        i = n(28),
        l = n(22),
        o = n(6),
        c = n(59);
      function d() {
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
          (d = function() {
            return t;
          }),
          t
        );
      }
      var p = l.c.div(
          d(),
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
        u = Object(c.a)(p);
      e.default = function(t) {
        return r.a.createElement(
          u,
          { className: 'isoExampleWrapper', style: t.style },
          t.children
        );
      };
    },
    558: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      }),
        n.d(e, 'c', function() {
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
      e.b = i;
    },
  },
]);
//# sourceMappingURL=100.c7b03db6.chunk.js.map
