(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [155],
  {
    2627: function(t, r, o) {
      'use strict';
      o.r(r);
      var e = o(43),
        a = o(44),
        n = o(192),
        i = o(191),
        d = o(193),
        s = o(0),
        l = o.n(s),
        u = o(761),
        b = {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'My First dataset',
              fill: !1,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
              label: 'My Second dataset',
              fill: !1,
              lineTension: 0.1,
              backgroundColor: 'rgba(72,166,242,0.4)',
              borderColor: 'rgba(72,166,242,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(72,166,242,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(72,166,242,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [55, 49, 70, 71, 46, 45, 30],
            },
          ],
        };
      o.d(r, 'default', function() {
        return p;
      });
      var c = (function(t) {
          function r() {
            return (
              Object(e.a)(this, r),
              Object(n.a)(this, Object(i.a)(r).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(r, t),
            Object(a.a)(r, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.setState(b);
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var t = this;
                  setInterval(function() {
                    for (
                      var r = t.state.datasets, o = [], e = [], a = 0;
                      a < t.state.labels.length;
                      a++
                    )
                      o.push(Math.floor(100 * Math.random())),
                        e.push(Math.floor(100 * Math.random()));
                    (r[0].data = o),
                      (r[1].data = e),
                      t.setState({ datasets: r });
                  }, 3e3);
                },
              },
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(u.e, { data: this.state });
                },
              },
            ]),
            r
          );
        })(s.Component),
        p = (function(t) {
          function r() {
            return (
              Object(e.a)(this, r),
              Object(n.a)(this, Object(i.a)(r).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(r, t),
            Object(a.a)(r, [
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(c, null);
                },
              },
            ]),
            r
          );
        })(s.Component);
    },
  },
]);
//# sourceMappingURL=155.7c3299ac.chunk.js.map
