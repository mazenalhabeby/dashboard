(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [77, 141, 142, 143, 144],
  {
    1284: function(e, t, n) {
      'use strict';
      n.d(t, 'j', function() {
        return o;
      }),
        n.d(t, 'd', function() {
          return u;
        }),
        n.d(t, 'i', function() {
          return m;
        }),
        n.d(t, 'g', function() {
          return s;
        }),
        n.d(t, 'c', function() {
          return d;
        }),
        n.d(t, 'a', function() {
          return f;
        }),
        n.d(t, 'h', function() {
          return p;
        }),
        n.d(t, 'm', function() {
          return h;
        }),
        n.d(t, 'f', function() {
          return g;
        }),
        n.d(t, 'b', function() {
          return b;
        }),
        n.d(t, 'l', function() {
          return x;
        }),
        n.d(t, 'k', function() {
          return y;
        }),
        n.d(t, 'e', function() {
          return v;
        });
      var a = n(5);
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(n, !0).forEach(function(t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var i = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'],
        c = [
          { name: 'Page A', uv: 4e3, pv: 2400, amt: 2400 },
          { name: 'Page B', uv: 3e3, pv: 1398, amt: 2210 },
          { name: 'Page C', uv: 2e3, pv: 9800, amt: 2290 },
          { name: 'Page D', uv: 2780, pv: 3908, amt: 2e3 },
          { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
          { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
          { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ],
        o = {
          componentName: 'SimpleLineCharts',
          key: 'SimpleLineCharts',
          title: 'Simple Line Charts',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        u = {
          componentName: 'CustomizedDotLineChart',
          key: 'CustomizedDotLineChart',
          title: 'Customized Dot Line Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: [
            l({}, c[0], {
              fillColor: '#48A6F2',
              svg:
                'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z',
            }),
            l({}, c[1], {
              fillColor: '#ff6384',
              svg:
                'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z',
            }),
            l({}, c[2], {
              fillColor: '#48A6F2',
              svg:
                'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z',
            }),
            l({}, c[3], {
              fillColor: '#ff6384',
              svg:
                'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z',
            }),
            l({}, c[4], {
              fillColor: '#48A6F2',
              svg:
                'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z',
            }),
            l({}, c[5], {
              fillColor: '#ff6384',
              svg:
                'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z',
            }),
            l({}, c[6], {
              fillColor: '#48A6F2',
              svg:
                'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z',
            }),
          ],
        },
        m = {
          componentName: 'SimpleBarChart',
          key: 'SimpleBarChart',
          title: 'Simple Bar Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        s = {
          componentName: 'MixBarChart',
          key: 'MixBarChart',
          title: 'Mix Bar Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: [
            { name: 'Page A', uv: 4e3, female: 2400, male: 2400 },
            { name: 'Page B', uv: 3e3, female: 1398, male: 2210 },
            { name: 'Page C', uv: 2e3, female: 9800, male: 2290 },
            { name: 'Page D', uv: 2780, female: 3908, male: 2e3 },
            { name: 'Page E', uv: 1890, female: 4800, male: 2181 },
            { name: 'Page F', uv: 2390, female: 3800, male: 2500 },
            { name: 'Page G', uv: 3490, female: 4300, male: 2100 },
          ],
        },
        d = {
          componentName: 'CustomShapeBarChart',
          key: 'CustomShapeBarChart',
          title: 'Custom Shape Bar Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: s.datas,
        },
        f = {
          componentName: 'BiaxialBarChart',
          key: 'BiaxialBarChart',
          title: 'Biaxial Bar Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        p = {
          componentName: 'SimpleAreaChart',
          key: 'SimpleAreaChart',
          title: 'Simple Area Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        h = {
          componentName: 'StackedAreaChart',
          key: 'StackedAreaChart',
          title: 'Stacked Area Chart',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        g = {
          componentName: 'LineBarAreaComposedChart',
          key: 'LineBarAreaComposedChart',
          title: 'Line Bar Area ComposedChart',
          width: 350,
          height: 350,
          colors: i,
          datas: c,
        },
        b = {
          componentName: 'CustomActiveShapePieChart',
          key: 'CustomActiveShapePieChart',
          title: 'Custom Active Shape Pie Chart',
          width: 600,
          height: 350,
          colors: i,
          dataKey: 'value',
          datas: [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
          ],
        },
        x = {
          componentName: 'SpecifiedDomainRadarChart',
          key: 'SpecifiedDomainRadarChart',
          title: 'Specified Domain Radar Chart',
          width: 600,
          height: 500,
          colors: i,
          angle: 30,
          domain: [0, 150],
          cx: 300,
          cy: 250,
          outerRadius: 150,
          datas: [
            { subject: 'Math', A: 120, B: 110, fullMark: 150 },
            { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
            { subject: 'English', A: 86, B: 130, fullMark: 150 },
            { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
            { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
            { subject: 'History', A: 65, B: 85, fullMark: 150 },
          ],
        },
        y = {
          componentName: 'SimpleRadialBarChart',
          key: 'SimpleRadialBarChart',
          title: 'Simple Radial Bar Chart',
          width: 600,
          height: 300,
          datas: [
            { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
            { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
            { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
            { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
            { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
            { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
            { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
          ],
        },
        v = {
          componentName: 'LegendEffectOpacity',
          key: 'LegendEffectOpacity',
          title: 'Legend Effect Opacity',
          width: 600,
          height: 350,
          colors: i,
          datas: c,
        };
    },
    2709: function(e, t, n) {
      'use strict';
      n.r(t);
      n(551);
      var a = n(553),
        r = (n(552), n(554)),
        l = n(43),
        i = n(44),
        c = n(192),
        o = n(191),
        u = n(193),
        m = n(0),
        s = n.n(m),
        d = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(136)]).then(
            n.bind(null, 2649)
          );
        }),
        f = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(130)]).then(
            n.bind(null, 2650)
          );
        }),
        p = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(135)]).then(
            n.bind(null, 2651)
          );
        }),
        h = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(133)]).then(
            n.bind(null, 2652)
          );
        }),
        g = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(129)]).then(
            n.bind(null, 2653)
          );
        }),
        b = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(127)]).then(
            n.bind(null, 2654)
          );
        }),
        x = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(134)]).then(
            n.bind(null, 2655)
          );
        }),
        y = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(139)]).then(
            n.bind(null, 1662)
          );
        }),
        v = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(132)]).then(
            n.bind(null, 2656)
          );
        }),
        E = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(128)]).then(
            n.bind(null, 2657)
          );
        }),
        C = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(138)]).then(
            n.bind(null, 2658)
          );
        }),
        w = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(137)]).then(
            n.bind(null, 2659)
          );
        }),
        j = Object(m.lazy)(function() {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(5), n.e(131)]).then(
            n.bind(null, 2660)
          );
        }),
        O = n(548),
        z = n(547),
        B = n(546),
        P = n(550),
        k = n(558),
        M = n(1284);
      n.d(t, 'default', function() {
        return q;
      });
      var q = (function(e) {
        function t() {
          return (
            Object(l.a)(this, t),
            Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(u.a)(t, e),
          Object(i.a)(t, [
            {
              key: 'render',
              value: function() {
                var e = k.b.rowStyle,
                  t = k.b.colStyle,
                  n = k.b.gutter;
                return s.a.createElement(
                  B.default,
                  { className: 'isoMapPage' },
                  s.a.createElement(O.default, null, 'Re-Charts'),
                  s.a.createElement(
                    a.a,
                    { style: e, gutter: n, justify: 'start' },
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.j.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(d, M.j)
                        )
                      )
                    ),
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.d.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(f, M.d)
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    a.a,
                    { style: e, gutter: n, justify: 'start' },
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.i.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(p, M.i)
                        )
                      )
                    ),
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.g.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(h, M.g)
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    a.a,
                    { style: e, gutter: n, justify: 'start' },
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.c.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(g, M.c)
                        )
                      )
                    ),
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.a.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(b, M.a)
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    a.a,
                    { style: e, gutter: n, justify: 'start' },
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.h.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(x, M.h)
                        )
                      )
                    ),
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.m.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(y, M.m)
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    a.a,
                    { style: e, gutter: n, justify: 'start' },
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.f.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(v, M.f)
                        )
                      )
                    ),
                    s.a.createElement(
                      r.a,
                      { md: 12, xs: 24, style: t },
                      s.a.createElement(
                        z.default,
                        { title: M.b.title },
                        s.a.createElement(
                          P.default,
                          null,
                          s.a.createElement(E, M.b)
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    z.default,
                    { title: M.l.title },
                    s.a.createElement(
                      P.default,
                      null,
                      s.a.createElement(C, M.l)
                    )
                  ),
                  s.a.createElement(
                    z.default,
                    { title: M.k.title },
                    s.a.createElement(
                      P.default,
                      null,
                      s.a.createElement(w, M.k)
                    )
                  ),
                  s.a.createElement(
                    z.default,
                    { title: M.e.title },
                    s.a.createElement(
                      P.default,
                      null,
                      s.a.createElement(j, M.e)
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(m.Component);
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28);
      function i() {
        var e = Object(l.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var c = n(22).c.div(i());
      t.default = function(e) {
        return r.a.createElement(
          c,
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
    547: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        c = n(6);
      function o() {
        var e = Object(l.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = Object(l.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var m = i.c.h3(u(), Object(c.palette)('text', 0)),
        s = i.c.p(o(), Object(c.palette)('text', 3)),
        d = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  m,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  s,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function f() {
        var e = Object(l.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var p = i.c.div(f(), Object(c.palette)('border', 0), '');
      t.default = function(e) {
        return r.a.createElement(
          p,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          r.a.createElement(d, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        c = n(6),
        o = n(59);
      function u() {
        var e = Object(l.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var m = i.c.h1(
          u(),
          Object(c.palette)('secondary', 2),
          Object(c.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(c.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        s = Object(o.a)(m);
      t.default = function(e) {
        return r.a.createElement(
          s,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        c = n(6),
        o = n(59);
      function u() {
        var e = Object(l.a)([
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
          (u = function() {
            return e;
          }),
          e
        );
      }
      var m = i.c.div(
          u(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '10px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '10px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'right' : 'left';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '295px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '295px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0 !important';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 !important' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0';
          },
          Object(c.palette)('secondary', 1),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'auto' : '6px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '6px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          }
        ),
        s = Object(o.a)(m);
      t.default = function(e) {
        return r.a.createElement(
          s,
          { className: 'isoExampleWrapper', style: e.style },
          e.children
        );
      };
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
      var a = n(1159);
      t.a = a.a;
    },
    554: function(e, t, n) {
      'use strict';
      var a = n(987);
      t.a = a.a;
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'c', function() {
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
        l = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = l;
    },
  },
]);
//# sourceMappingURL=77.54bd8789.chunk.js.map
