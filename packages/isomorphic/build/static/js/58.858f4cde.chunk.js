(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [58, 141, 142, 143, 144],
  {
    1155: function(e, t, n) {
      'use strict';
      n(855);
      var r = n(674),
        a = (n(621), n(596)),
        l = n(28),
        o = n(22),
        i = n(6);
      function c() {
        var e = Object(l.a)([
          '\n  .ant-dropdown-menu-item {\n    a {\n      font-size: 13px;\n      color: ',
          ';\n    }\n  }\n\n  .ant-dropdown-menu-item,\n  .ant-dropdown-menu-submenu-title {\n    a {\n      font-size: 13px;\n      color: ',
          ';\n    }\n\n    &:hover {\n      background-color: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = Object(l.a)([
          '\n  display: inline-block;\n\n  &.ant-dropdown-button {\n    &.ant-btn-group > .ant-btn:first-child:not(:last-child) {\n      border-radius: ',
          ';\n    }\n\n    &.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n      border-radius: ',
          ';\n    }\n\n    &.ant-btn-group .ant-btn + .ant-btn {\n      margin: ',
          ';\n    }\n  }\n\n  .ant-dropdown-link {\n    font-size: 13px;\n    color: ',
          ';\n\n    &:hover {\n      color: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var m = function(e) {
          return Object(o.c)(e)(
            c(),
            Object(i.palette)('text', 1),
            Object(i.palette)('text', 1),
            Object(i.palette)('secondary', 1)
          );
        },
        d = function(e) {
          return Object(o.c)(e)(
            u(),
            function(e) {
              return 'rtl' === e['data-rtl'] ? '0 4px 4px 0' : '4px 0  0 4px';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? '4px 0 0 4px' : '0 4px 4px 0';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? '0 -1px 0 0' : '0 0 0 -1px';
            },
            Object(i.palette)('primary', 0),
            Object(i.palette)('primary', 2)
          );
        },
        p = n(59);
      n.d(t, 'a', function() {
        return h;
      }),
        n.d(t, 'b', function() {
          return x;
        }),
        n.d(t, 'c', function() {
          return b;
        }),
        n.d(t, 'd', function() {
          return E;
        });
      var s = d(a.a),
        f = Object(p.a)(s),
        g = d(a.a.Button),
        h = Object(p.a)(g),
        x = m(r.a),
        b = m(r.a.Item),
        E = m(r.a.SubMenu);
      t.e = f;
    },
    1549: function(e, t, n) {
      'use strict';
      n(918);
      var r = n(920);
      t.a = r.a;
    },
    2638: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return k;
        });
      n(551);
      var r = n(553),
        a = (n(552), n(554)),
        l = (n(306), n(20)),
        o = n(107),
        i = n(0),
        c = n.n(i),
        u = n(1245),
        m = n(1155),
        d = n(194),
        p = n(1549),
        s = n(548),
        f = n(547),
        g = n(546),
        h = n(550),
        x = n(560),
        b = n(558),
        E = n(59),
        y = u.a.Divider,
        w = m.a,
        v = d.b;
      function k() {
        var e = c.a.useState(!1),
          t = Object(o.a)(e, 2),
          n =
            (t[0],
            t[1],
            function(e) {
              p.a.info('Click on left button.');
            }),
          i = b.b.rowStyle,
          u = b.b.colStyle,
          d = b.b.gutter,
          k = { marginBottom: '8px', marginRight: '8px' },
          j = c.a.createElement(
            m.b,
            null,
            c.a.createElement(
              m.c,
              null,
              c.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'http://redq.io/',
                },
                '1st menu item'
              )
            ),
            c.a.createElement(
              m.c,
              null,
              c.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'http://redq.io/',
                },
                '2nd menu item'
              )
            ),
            c.a.createElement(
              m.c,
              null,
              c.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'http://redq.io/',
                },
                '3d menu item'
              )
            )
          ),
          C = c.a.createElement(
            m.b,
            null,
            c.a.createElement(
              m.c,
              { key: '0' },
              c.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'http://redq.io/',
                },
                '1st menu item'
              )
            ),
            c.a.createElement(
              m.c,
              { key: '1' },
              c.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'http://redq.io/',
                },
                '2nd menu item'
              )
            ),
            c.a.createElement(y, null),
            c.a.createElement(
              m.c,
              { key: '3', disabled: !0 },
              '3d menu item\uff08disabled\uff09'
            )
          ),
          O = c.a.createElement(
            m.b,
            {
              onClick: function(e) {
                p.a.info('Click on menu item.');
              },
            },
            c.a.createElement(m.c, { key: '1' }, '1st menu item'),
            c.a.createElement(m.c, { key: '2' }, '2nd menu item'),
            c.a.createElement(m.c, { key: '3' }, '3d menu item')
          ),
          N = c.a.createElement(
            m.b,
            null,
            c.a.createElement(m.c, null, '1st menu item'),
            c.a.createElement(m.c, null, '2nd menu item'),
            c.a.createElement(
              m.d,
              { title: 'sub menu' },
              c.a.createElement(m.c, null, '3d menu item'),
              c.a.createElement(m.c, null, '4th menu item')
            )
          );
        return c.a.createElement(
          g.default,
          null,
          c.a.createElement(
            s.default,
            null,
            c.a.createElement(x.a, { id: 'uiElements.dropdown.dropdown' })
          ),
          c.a.createElement(
            r.a,
            { style: i, gutter: d, justify: 'start' },
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.hoverDropdown',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(
                    m.e,
                    { overlay: j },
                    c.a.createElement(
                      'a',
                      { className: 'ant-dropdown-link', href: '# ' },
                      c.a.createElement(x.a, {
                        id: 'uiElements.dropdown.hoverMe',
                      }),
                      ' ',
                      c.a.createElement(l.a, { type: 'down' })
                    )
                  )
                )
              )
            ),
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.hoverPlacement',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'bottomLeft' },
                    c.a.createElement(v, { style: k }, 'bottomLeft')
                  ),
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'bottomCenter' },
                    c.a.createElement(v, { style: k }, 'bottomCenter')
                  ),
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'bottomRight' },
                    c.a.createElement(v, { style: k }, 'bottomRight')
                  ),
                  c.a.createElement('br', null),
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'topLeft' },
                    c.a.createElement(v, { style: k }, 'topLeft')
                  ),
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'topCenter' },
                    c.a.createElement(v, { style: k }, 'topCenter')
                  ),
                  c.a.createElement(
                    m.e,
                    { overlay: j, placement: 'topRight' },
                    c.a.createElement(v, { style: k }, 'topRight')
                  )
                )
              )
            )
          ),
          c.a.createElement(
            r.a,
            { style: i, gutter: d, justify: 'start' },
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.hoverDisableLink',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(
                    m.e,
                    { overlay: C },
                    c.a.createElement(
                      'a',
                      { className: 'ant-dropdown-link', href: '# ' },
                      'Hover me ',
                      c.a.createElement(l.a, { type: 'down' })
                    )
                  )
                )
              )
            ),
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.clickedDropdown',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(
                    m.e,
                    { overlay: j, trigger: ['click'] },
                    c.a.createElement(
                      'a',
                      { className: 'ant-dropdown-link', href: '# ' },
                      'Click me ',
                      c.a.createElement(l.a, { type: 'down' })
                    )
                  )
                )
              )
            )
          ),
          c.a.createElement(
            r.a,
            { style: i, gutter: d, justify: 'start' },
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.buttonDropdown',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(w, { onClick: n, overlay: O }, 'Dropdown'),
                  c.a.createElement(
                    w,
                    {
                      onClick: n,
                      overlay: O,
                      disabled: !0,
                      style: {
                        margin: 'rtl' === E.b ? '0 8px 0 0' : '0 0 0 8px',
                      },
                    },
                    'Dropdown'
                  ),
                  c.a.createElement(
                    m.e,
                    { overlay: O },
                    c.a.createElement(
                      v,
                      {
                        style: {
                          margin: 'rtl' === E.b ? '0 8px 0 0' : '0 0 0 8px',
                        },
                      },
                      'Button ',
                      c.a.createElement(l.a, { type: 'down' })
                    )
                  )
                )
              )
            ),
            c.a.createElement(
              a.a,
              { md: 12, sm: 12, xs: 24, style: u },
              c.a.createElement(
                f.default,
                {
                  title: c.a.createElement(x.a, {
                    id: 'uiElements.dropdown.clickedDropdown',
                  }),
                },
                c.a.createElement(
                  h.default,
                  null,
                  c.a.createElement(
                    m.e,
                    { overlay: N },
                    c.a.createElement(
                      'a',
                      { className: 'ant-dropdown-link', href: '# ' },
                      'Cascading menu ',
                      c.a.createElement(l.a, { type: 'down' })
                    )
                  )
                )
              )
            )
          )
        );
      }
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        l = n(28);
      function o() {
        var e = Object(l.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var i = n(22).c.div(o());
      t.default = function(e) {
        return a.a.createElement(
          i,
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
      var r = n(0),
        a = n.n(r),
        l = n(28),
        o = n(22),
        i = n(6);
      function c() {
        var e = Object(l.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (c = function() {
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
      var m = o.c.h3(u(), Object(i.palette)('text', 0)),
        d = o.c.p(c(), Object(i.palette)('text', 3)),
        p = function(e) {
          return a.a.createElement(
            'div',
            null,
            e.title
              ? a.a.createElement(
                  m,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? a.a.createElement(
                  d,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function s() {
        var e = Object(l.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var f = o.c.div(s(), Object(i.palette)('border', 0), '');
      t.default = function(e) {
        return a.a.createElement(
          f,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          a.a.createElement(p, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        l = n(28),
        o = n(22),
        i = n(6),
        c = n(59);
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
      var m = o.c.h1(
          u(),
          Object(i.palette)('secondary', 2),
          Object(i.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(i.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        d = Object(c.a)(m);
      t.default = function(e) {
        return a.a.createElement(
          d,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        l = n(28),
        o = n(22),
        i = n(6),
        c = n(59);
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
      var m = o.c.div(
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
          Object(i.palette)('secondary', 1),
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
        d = Object(c.a)(m);
      t.default = function(e) {
        return a.a.createElement(
          d,
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
      var r = n(1159);
      t.a = r.a;
    },
    554: function(e, t, n) {
      'use strict';
      var r = n(987);
      t.a = r.a;
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      }),
        n.d(t, 'c', function() {
          return a;
        });
      var r = {
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
        a = 8,
        l = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = l;
    },
    918: function(e, t, n) {
      'use strict';
      n(87), n(919);
    },
    919: function(e, t, n) {},
    920: function(e, t, n) {
      'use strict';
      var r = n(0),
        a = n(222),
        l = n(20);
      function o() {
        return (o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e) {
        return (i =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var c,
        u,
        m,
        d,
        p = 3,
        s = 1,
        f = 'ant-message',
        g = 'move-up';
      var h = {
        open: function(e) {
          var t = void 0 !== e.duration ? e.duration : p,
            n = {
              info: 'info-circle',
              success: 'check-circle',
              error: 'close-circle',
              warning: 'exclamation-circle',
              loading: 'loading',
            }[e.type],
            o = s++,
            i = new Promise(function(i) {
              var p = function() {
                return 'function' === typeof e.onClose && e.onClose(), i(!0);
              };
              !(function(e) {
                u
                  ? e(u)
                  : a.a.newInstance(
                      {
                        prefixCls: f,
                        transitionName: g,
                        style: { top: c },
                        getContainer: m,
                        maxCount: d,
                      },
                      function(t) {
                        u ? e(u) : ((u = t), e(t));
                      }
                    );
              })(function(a) {
                var i = r.createElement(l.a, {
                    type: n,
                    theme: 'loading' === n ? 'outlined' : 'filled',
                  }),
                  c = n ? i : '';
                a.notice({
                  key: e.key || o,
                  duration: t,
                  style: {},
                  content: r.createElement(
                    'div',
                    {
                      className: ''
                        .concat(f, '-custom-content')
                        .concat(
                          e.type ? ' '.concat(f, '-').concat(e.type) : ''
                        ),
                    },
                    e.icon ? e.icon : c,
                    r.createElement('span', null, e.content)
                  ),
                  onClose: p,
                });
              });
            }),
            h = function() {
              u && u.removeNotice(o);
            };
          return (
            (h.then = function(e, t) {
              return i.then(e, t);
            }),
            (h.promise = i),
            h
          );
        },
        config: function(e) {
          void 0 !== e.top && ((c = e.top), (u = null)),
            void 0 !== e.duration && (p = e.duration),
            void 0 !== e.prefixCls && (f = e.prefixCls),
            void 0 !== e.getContainer && (m = e.getContainer),
            void 0 !== e.transitionName && ((g = e.transitionName), (u = null)),
            void 0 !== e.maxCount && ((d = e.maxCount), (u = null));
        },
        destroy: function() {
          u && (u.destroy(), (u = null));
        },
      };
      ['success', 'info', 'warning', 'error', 'loading'].forEach(function(e) {
        h[e] = function(t, n, r) {
          return (function(e) {
            return 'object' === i(e) && !!e.content;
          })(t)
            ? h.open(o(o({}, t), { type: e }))
            : ('function' === typeof n && ((r = n), (n = void 0)),
              h.open({ content: t, duration: n, type: e, onClose: r }));
        };
      }),
        (h.warn = h.warning),
        (t.a = h);
    },
  },
]);
//# sourceMappingURL=58.858f4cde.chunk.js.map
