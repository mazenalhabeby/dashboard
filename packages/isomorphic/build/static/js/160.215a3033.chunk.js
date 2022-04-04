(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [160],
  {
    2610: function(e, t, a) {
      'use strict';
      a.r(t);
      var r = a(5),
        c = a(107),
        n = a(0),
        o = a.n(n),
        l = a(194),
        s = a(1600),
        i = a(1143),
        p = a(1859),
        u = a(1861),
        b = a(230),
        O = a(1851),
        h = (a(1852), a(1853));
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
      function m(e) {
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
        var t = o.a.useState({ collapsed: !0, searchState: Object(b.b)() }),
          a = Object(c.a)(t, 2),
          r = a[0],
          n = a[1],
          f = r.collapsed,
          d = f ? '' : 'sidebarOpen',
          g = f ? 'Filter' : 'Hide',
          S = m({}, O.a, {
            indexName: 'default_search',
            searchState: r.searchState,
            urlSync: !0,
            onSearchStateChange: function(e) {
              n({ searchState: e }), Object(b.c)(e);
            },
          });
        return o.a.createElement(
          h.a,
          { className: ''.concat(d, ' isoAlgoliaSearchPage') },
          o.a.createElement(
            l.b,
            {
              className: 'ant-btn-primary isoAlgoliaSidebarToggle',
              onClick: function() {
                n({ collapsed: !r.collapsed });
              },
            },
            g
          ),
          O.a.appId
            ? o.a.createElement(
                i.InstantSearch,
                S,
                o.a.createElement(
                  'div',
                  { className: 'isoAlgoliaMainWrapper' },
                  o.a.createElement(p.b, {
                    setVoice: function(e) {
                      var t = m({}, r.searchState, { page: '1', query: e });
                      n({ searchState: t }), Object(b.c)(t);
                    },
                  }),
                  o.a.createElement(u.a, e)
                ),
                o.a.createElement(p.a, null)
              )
            : o.a.createElement(s.a, { value: 'Please include algolia appId' })
        );
      };
    },
  },
]);
//# sourceMappingURL=160.215a3033.chunk.js.map
