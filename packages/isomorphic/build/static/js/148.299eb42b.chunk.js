(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [148],
  {
    2472: function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function() {
          return b;
        });
      var a = n(43),
        o = n(44),
        r = n(192),
        c = n(191),
        u = n(193),
        i = n(0),
        s = n.n(i),
        f = n(761);
      function l(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }
      var h = function() {
          return {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
              {
                data: [l(50, 200), l(100, 150), l(150, 250)],
                backgroundColor: ['#ff6384', '#48A6F2', '#ffbf00'],
                hoverBackgroundColor: ['#FF6384', '#48A6F2', '#ffbf00'],
              },
            ],
          };
        },
        b = (function(t) {
          function e(t) {
            var n;
            return (
              Object(a.a)(this, e),
              ((n = Object(r.a)(
                this,
                Object(c.a)(e).call(this, t)
              )).state = h()),
              n
            );
          }
          return (
            Object(u.a)(e, t),
            Object(o.a)(e, [
              {
                key: 'componentWillMount',
                value: function() {
                  var t = this;
                  setInterval(function() {
                    t.setState(h());
                  }, 5e3);
                },
              },
              {
                key: 'render',
                value: function() {
                  return s.a.createElement(f.c, { data: this.state });
                },
              },
            ]),
            e
          );
        })(i.Component);
    },
  },
]);
//# sourceMappingURL=148.299eb42b.chunk.js.map
