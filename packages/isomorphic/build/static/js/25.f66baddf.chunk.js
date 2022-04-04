(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [25],
  {
    2630: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return o;
        });
      var i = n(0),
        r = n.n(i),
        l = n(74),
        c = Object(i.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(12), n.e(14), n.e(78)]).then(
            n.bind(null, 2402)
          );
        }),
        u = Object(i.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(12), n.e(14), n.e(45)]).then(
            n.bind(null, 2466)
          );
        }),
        a = Object(i.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(12), n.e(14), n.e(46)]).then(
            n.bind(null, 2467)
          );
        });
      function o() {
        var e = Object(l.d)(function(e) {
            return e.App;
          }),
          t = e.view,
          n = e.height;
        return r.a.createElement(
          'div',
          { style: { height: '100%' } },
          (function(e, t) {
            return 'MobileView' === e
              ? r.a.createElement(u, { height: t })
              : 'DesktopView' === e
              ? r.a.createElement(c, { height: t })
              : 'TabView' === e
              ? r.a.createElement(a, { height: t })
              : void 0;
          })(t, n)
        );
      }
    },
  },
]);
//# sourceMappingURL=25.f66baddf.chunk.js.map
