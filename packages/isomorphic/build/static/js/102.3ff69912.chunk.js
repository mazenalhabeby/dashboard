(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [102, 141, 142, 143, 144],
  {
    2690: function(e, n, t) {
      'use strict';
      t.r(n);
      t(551);
      var a = t(553),
        r = (t(552), t(554)),
        l = t(0),
        i = t.n(l),
        c = (t(2181), t(2183).a),
        u = t(548),
        o = t(547),
        d = t(546),
        m = t(550),
        s = t(560),
        p = t(558),
        f = t(28),
        h = t(22),
        g = t(6),
        x = t(59);
      function E() {
        var e = Object(f.a)([
          '\n  .isoCarousalDemoContainer {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .ant-carousel {\n    .slick-slider {\n      direction: ',
          ';\n      .slick-track {\n        left: auto;\n        right: 0;\n\n        .slick-slide {\n          text-align: center;\n          height: 160px;\n          line-height: 160px;\n          background: ',
          ';\n          color: #fff;\n          overflow: hidden;\n          float: left !important;\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      var b = h.c.div(
          E(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'ltr' : 'inherit';
          },
          Object(g.palette)('secondary', 4)
        ),
        w = Object(x.a)(b),
        v = function(e) {
          return i.a.createElement(w, null, i.a.createElement(c, e));
        };
      n.default = function() {
        var e = function(e, n, t) {},
          n = p.b.rowStyle,
          t = p.b.colStyle,
          l = p.b.gutter;
        return i.a.createElement(
          d.default,
          null,
          i.a.createElement(
            u.default,
            null,
            i.a.createElement(s.a, { id: 'uiElements.carousel.carousel' })
          ),
          i.a.createElement(
            a.a,
            { style: n, gutter: l, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                o.default,
                {
                  title: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.basicCarousel',
                  }),
                  subtitle: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.basicCarouselSubTitle',
                  }),
                },
                i.a.createElement(
                  m.default,
                  null,
                  i.a.createElement(
                    v,
                    { afterChange: e },
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '1')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '2')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '3')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '4')
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                o.default,
                {
                  title: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.verticalCarousel',
                  }),
                  subtitle: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.verticalCarouselSubTitle',
                  }),
                },
                i.a.createElement(
                  m.default,
                  null,
                  i.a.createElement(
                    v,
                    { afterChange: e, vertical: !0 },
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '1')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '2')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '3')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '4')
                    )
                  )
                )
              )
            )
          ),
          i.a.createElement(
            a.a,
            { style: n, gutter: l, justify: 'start' },
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                o.default,
                {
                  title: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.fadeInTransition',
                  }),
                  subtitle: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.fadeInTransitionSubTitle',
                  }),
                },
                i.a.createElement(
                  m.default,
                  null,
                  i.a.createElement(
                    v,
                    { effect: 'fade' },
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '1')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '2')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '3')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '4')
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              r.a,
              { md: 12, sm: 12, xs: 24, style: t },
              i.a.createElement(
                o.default,
                {
                  title: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.scrollAutomatically',
                  }),
                  subtitle: i.a.createElement(s.a, {
                    id: 'uiElements.carousel.scrollAutomaticallySubTitle',
                  }),
                },
                i.a.createElement(
                  m.default,
                  null,
                  i.a.createElement(
                    v,
                    { autoplay: !0, rtl: !0 },
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '1')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '2')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '3')
                    ),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('h3', null, '4')
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    546: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        l = t(28);
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
      var c = t(22).c.div(i());
      n.default = function(e) {
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
    547: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        l = t(28),
        i = t(22),
        c = t(6);
      function u() {
        var e = Object(l.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = Object(l.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var d = i.c.h3(o(), Object(c.palette)('text', 0)),
        m = i.c.p(u(), Object(c.palette)('text', 3)),
        s = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  d,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  m,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function p() {
        var e = Object(l.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      var f = i.c.div(p(), Object(c.palette)('border', 0), '');
      n.default = function(e) {
        return r.a.createElement(
          f,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          r.a.createElement(s, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        l = t(28),
        i = t(22),
        c = t(6),
        u = t(59);
      function o() {
        var e = Object(l.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var d = i.c.h1(
          o(),
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
        m = Object(u.a)(d);
      n.default = function(e) {
        return r.a.createElement(
          m,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        l = t(28),
        i = t(22),
        c = t(6),
        u = t(59);
      function o() {
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
          (o = function() {
            return e;
          }),
          e
        );
      }
      var d = i.c.div(
          o(),
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
        m = Object(u.a)(d);
      n.default = function(e) {
        return r.a.createElement(
          m,
          { className: 'isoExampleWrapper', style: e.style },
          e.children
        );
      };
    },
    558: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return a;
      }),
        t.d(n, 'c', function() {
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
      n.b = l;
    },
  },
]);
//# sourceMappingURL=102.3ff69912.chunk.js.map
