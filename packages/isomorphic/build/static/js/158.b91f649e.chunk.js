(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [158],
  {
    2473: function(e, t, a) {
      'use strict';
      a.r(t);
      var r = a(5),
        c = a(107),
        n = a(0),
        o = a.n(n),
        i = a(1143),
        s = a(1859),
        l = a(1600),
        p = a(1861),
        u = a(1851),
        b = a(230),
        O = (a(1852), a(1853));
      function f(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(a, !0).forEach(function(t) {
                Object(r.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : f(a).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      t.default = function(e) {
        var t = o.a.useState(Object(b.b)()),
          a = Object(c.a)(t, 2),
          r = a[0],
          n = a[1],
          f = h({}, u.a, {
            indexName: 'default_search',
            searchState: r,
            urlSync: !0,
            onSearchStateChange: function(e) {
              n(e), Object(b.c)(e);
            },
          });
        return o.a.createElement(
          O.a,
          { className: 'isoAlgoliaSearchPage' },
          u.a.appId
            ? o.a.createElement(
                i.InstantSearch,
                f,
                o.a.createElement(
                  'div',
                  { className: 'isoAlgoliaMainWrapper' },
                  o.a.createElement(s.b, {
                    setVoice: function(e) {
                      n(h({}, r, { page: '1', query: e })), Object(b.c)(r);
                    },
                  }),
                  o.a.createElement(p.a, e)
                ),
                o.a.createElement(s.a, null)
              )
            : o.a.createElement(l.a, { value: 'Please include algolia appId' })
        );
      };
    },
  },
]);
//# sourceMappingURL=158.b91f649e.chunk.js.map
