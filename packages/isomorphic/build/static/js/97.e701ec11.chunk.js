(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [97],
  {
    2644: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return C;
        });
      n(551);
      var l = n(553),
        a = (n(552), n(554)),
        r = n(43),
        i = n(44),
        c = n(192),
        u = n(191),
        m = n(193),
        o = n(0),
        s = n.n(o),
        d = n(558),
        b =
          (n(578),
          Object(o.lazy)(function() {
            return Promise.all([n.e(7), n.e(147)]).then(n.bind(null, 2618));
          })),
        E = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(148)]).then(n.bind(null, 2472));
        }),
        f = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(152)]).then(n.bind(null, 2619));
        }),
        y = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(150)]).then(n.bind(null, 2620));
        }),
        h = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(145)]).then(n.bind(null, 2621));
        }),
        p = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(149)]).then(n.bind(null, 2622));
        }),
        g = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(154)]).then(n.bind(null, 2623));
        }),
        j = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(153)]).then(n.bind(null, 2624));
        }),
        x = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(146)]).then(n.bind(null, 2625));
        }),
        O = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(151)]).then(n.bind(null, 2626));
        }),
        z = Object(o.lazy)(function() {
          return Promise.all([n.e(7), n.e(155)]).then(n.bind(null, 2627));
        }),
        P = Object(o.lazy)(function() {
          return n.e(144).then(n.bind(null, 548));
        }),
        v = Object(o.lazy)(function() {
          return n.e(141).then(n.bind(null, 547));
        }),
        w = Object(o.lazy)(function() {
          return n.e(143).then(n.bind(null, 546));
        }),
        F = Object(o.lazy)(function() {
          return n.e(142).then(n.bind(null, 550));
        }),
        C = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = d.b.rowStyle,
                    t = d.b.colStyle,
                    n = d.b.gutter;
                  return s.a.createElement(
                    w,
                    { className: 'isoMapPage' },
                    s.a.createElement(P, null, 'React Charts 2'),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Doughnut' },
                          s.a.createElement(F, null, s.a.createElement(b, null))
                        )
                      ),
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Dynamicly refreshed Doughnut' },
                          s.a.createElement(F, null, s.a.createElement(E, null))
                        )
                      )
                    ),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Pie' },
                          s.a.createElement(F, null, s.a.createElement(f, null))
                        )
                      ),
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Line' },
                          s.a.createElement(F, null, s.a.createElement(y, null))
                        )
                      )
                    ),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Bar (custom size)' },
                          s.a.createElement(F, null, s.a.createElement(h, null))
                        )
                      ),
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Horizontal Bar Example' },
                          s.a.createElement(F, null, s.a.createElement(p, null))
                        )
                      )
                    ),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Radar' },
                          s.a.createElement(F, null, s.a.createElement(g, null))
                        )
                      ),
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Polar' },
                          s.a.createElement(F, null, s.a.createElement(j, null))
                        )
                      )
                    ),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Bubble' },
                          s.a.createElement(F, null, s.a.createElement(x, null))
                        )
                      ),
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Mixed Data' },
                          s.a.createElement(F, null, s.a.createElement(O, null))
                        )
                      )
                    ),
                    s.a.createElement(
                      l.a,
                      { style: e, gutter: n, justify: 'start' },
                      s.a.createElement(
                        a.a,
                        { md: 12, xs: 24, style: t },
                        s.a.createElement(
                          v,
                          { title: 'Random Animated' },
                          s.a.createElement(F, null, s.a.createElement(z, null))
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
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
      var l = n(1159);
      t.a = l.a;
    },
    554: function(e, t, n) {
      'use strict';
      var l = n(987);
      t.a = l.a;
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      }),
        n.d(t, 'c', function() {
          return a;
        });
      var l = {
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
        a = 8,
        r = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = r;
    },
    578: function(e, t, n) {
      'use strict';
      var l = n(28),
        a = n(22),
        r = n(6),
        i = n(59);
      function c() {
        var e = Object(l.a)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ',
          ';\n    margin-right: ',
          ';\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ',
          ';\n      font-weight: 400;\n      margin-right: ',
          ';\n      margin-left: ',
          ';\n    }\n\n    button {\n      border: 1px solid ',
          ';\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ',
          ';\n        margin-right: ',
          ';\n      }\n\n      &:hover {\n        color: ',
          ';\n        border-color: ',
          ';\n        z-index: 1;\n\n        span {\n          color: ',
          ';\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var u = a.c.div(
        c(),
        function(e) {
          return 'rtl' === e['data-rtl'] ? 'inherit' : 'auto';
        },
        function(e) {
          return 'rtl' === e['data-rtl'] ? 'auto' : 'inherit';
        },
        Object(r.palette)('text', 1),
        function(e) {
          return 'rtl' === e['data-rtl'] ? 'inherit' : '15px';
        },
        function(e) {
          return 'rtl' === e['data-rtl'] ? '15px' : 'inherit';
        },
        Object(r.palette)('border', 0),
        function(e) {
          return 'rtl' === e['data-rtl'] ? 'inherit' : '-1px';
        },
        function(e) {
          return 'rtl' === e['data-rtl'] ? '-1px' : 'inherit';
        },
        Object(r.palette)('primary', 0),
        Object(r.palette)('primary', 0),
        Object(r.palette)('primary', 0)
      );
      t.a = Object(i.a)(u);
    },
  },
]);
//# sourceMappingURL=97.e701ec11.chunk.js.map
