(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [125, 143],
  {
    1153: function(n, e, t) {
      'use strict';
      var a = t(28),
        r = t(22),
        c = t(6);
      function i() {
        var n = Object(a.a)([
          '\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  height: 100%;\n',
        ]);
        return (
          (i = function() {
            return n;
          }),
          n
        );
      }
      var o = r.c.div(i(), Object(c.palette)('border', 0));
      e.a = o;
    },
    2648: function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'default', function() {
          return d;
        });
      var a = t(43),
        r = t(44),
        c = t(192),
        i = t(191),
        o = t(193),
        u = t(0),
        l = t.n(u),
        p = t(546),
        s = t(1153),
        d = (function(n) {
          function e() {
            return (
              Object(a.a)(this, e),
              Object(c.a)(this, Object(i.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(e, n),
            Object(r.a)(e, [
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(
                    p.default,
                    { style: { height: '100vh' } },
                    l.a.createElement(
                      s.a,
                      null,
                      l.a.createElement('h1', null, 'Buy LOP'),
                      l.a.createElement(
                        'p',
                        null,
                        'You can buy here LOP tokens, our current price is 0.015$ BUSD per 1 LOP token.'
                      ),
                      l.a.createElement('button', null, 'Buy Now')
                    )
                  );
                },
              },
            ]),
            e
          );
        })(u.Component);
    },
    546: function(n, e, t) {
      'use strict';
      t.r(e);
      var a = t(0),
        r = t.n(a),
        c = t(28);
      function i() {
        var n = Object(c.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (i = function() {
            return n;
          }),
          n
        );
      }
      var o = t(22).c.div(i());
      e.default = function(n) {
        return r.a.createElement(
          o,
          Object.assign(
            {
              className:
                null != n.className
                  ? ''.concat(n.className, ' isoLayoutContentWrapper')
                  : 'isoLayoutContentWrapper',
            },
            n
          ),
          n.children
        );
      };
    },
  },
]);
//# sourceMappingURL=125.8b5f38d5.chunk.js.map
