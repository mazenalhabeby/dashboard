(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [159],
  {
    2645: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'default', function() {
          return s;
        });
      var n = r(5),
        c = r(0),
        i = r.n(c),
        o = r(74),
        u = r(38);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var p = Object(c.lazy)(function() {
          return Promise.all([
            r.e(2),
            r.e(15),
            r.e(18),
            r.e(22),
            r.e(158),
          ]).then(r.bind(null, 2473));
        }),
        l = Object(c.lazy)(function() {
          return Promise.all([
            r.e(2),
            r.e(15),
            r.e(18),
            r.e(22),
            r.e(160),
          ]).then(r.bind(null, 2610));
        });
      function s() {
        var e = Object(o.d)(function(e) {
            return e.App;
          }).view,
          t = Object(o.d)(function(e) {
            return e.Ecommerce;
          }),
          r = (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(r, !0).forEach(function(t) {
                    Object(n.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : a(r).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })(
            {
              view: e,
              ecommerceView: t.view,
              productQuantity: t.productQuantity,
            },
            u.a
          ),
          c = 'MobileView' !== e ? p : l;
        return i.a.createElement(
          'div',
          { style: { height: '100%' } },
          i.a.createElement(c, r)
        );
      }
    },
  },
]);
//# sourceMappingURL=159.cac5e3e3.chunk.js.map
