(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [141],
  {
    547: function(t, n, e) {
      'use strict';
      e.r(n);
      var i = e(0),
        a = e.n(i),
        r = e(28),
        c = e(22),
        o = e(6);
      function l() {
        var t = Object(r.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      function s() {
        var t = Object(r.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (s = function() {
            return t;
          }),
          t
        );
      }
      var u = c.c.h3(s(), Object(o.palette)('text', 0)),
        p = c.c.p(l(), Object(o.palette)('text', 3)),
        m = function(t) {
          return a.a.createElement(
            'div',
            null,
            t.title
              ? a.a.createElement(
                  u,
                  { className: 'isoBoxTitle' },
                  ' ',
                  t.title,
                  ' '
                )
              : '',
            t.subtitle
              ? a.a.createElement(
                  p,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  t.subtitle,
                  ' '
                )
              : ''
          );
        };
      function d() {
        var t = Object(r.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
        );
      }
      var f = c.c.div(d(), Object(o.palette)('border', 0), '');
      n.default = function(t) {
        return a.a.createElement(
          f,
          {
            className: ''.concat(
              t.className ? t.className : '',
              ' isoBoxWrapper'
            ),
            style: t.style,
          },
          a.a.createElement(m, { title: t.title, subtitle: t.subtitle }),
          t.children
        );
      };
    },
  },
]);
//# sourceMappingURL=141.c324db1e.chunk.js.map
