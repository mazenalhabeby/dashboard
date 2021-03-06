(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [94],
  {
    2643: function(e, t, n) {
      'use strict';
      n.r(t);
      n(682);
      var a = n(684),
        l = (n(306), n(20)),
        r = n(107),
        c = (n(855), n(674)),
        i = n(0),
        o = n.n(i),
        m = c.a.SubMenu,
        u = c.a.ItemGroup;
      t.default = function() {
        var e = o.a.useState({
            current: '1',
            openKeys: [],
            theme: 'dark',
            mode: 'inline',
          }),
          t = Object(r.a)(e, 2),
          n = t[0],
          i = t[1],
          s = function(e) {
            i({ current: e.key });
          },
          p = function(e) {
            return { sub3: ['sub2'] }[e] || [];
          };
        return o.a.createElement(
          'div',
          null,
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement('h2', null, 'Top Navigation'),
            o.a.createElement(
              c.a,
              { onClick: s, selectedKeys: [n.current], mode: 'horizontal' },
              o.a.createElement(
                c.a.Item,
                { key: 'mail' },
                o.a.createElement(l.a, { type: 'mail' }),
                'Navigation One'
              ),
              o.a.createElement(
                c.a.Item,
                { key: 'app', disabled: !0 },
                o.a.createElement(l.a, { type: 'appstore' }),
                'Navigation Two'
              ),
              o.a.createElement(
                m,
                {
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'setting' }),
                    'Navigation Three - Submenu'
                  ),
                },
                o.a.createElement(
                  u,
                  { title: 'Item 1' },
                  o.a.createElement(c.a.Item, { key: 'setting:1' }, 'Option 1'),
                  o.a.createElement(c.a.Item, { key: 'setting:2' }, 'Option 2')
                ),
                o.a.createElement(
                  u,
                  { title: 'Item 2' },
                  o.a.createElement(c.a.Item, { key: 'setting:3' }, 'Option 3'),
                  o.a.createElement(c.a.Item, { key: 'setting:4' }, 'Option 4')
                )
              ),
              o.a.createElement(
                c.a.Item,
                { key: 'alipay' },
                o.a.createElement(
                  'a',
                  {
                    href: 'https://ant.design',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'Navigation Four - Link'
                )
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement('h2', null, 'Vertical menu with inline children'),
            o.a.createElement(
              c.a,
              {
                onClick: s,
                style: { width: 240 },
                defaultSelectedKeys: ['1'],
                defaultOpenKeys: ['sub1'],
                mode: 'inline',
              },
              o.a.createElement(
                m,
                {
                  key: 'sub1',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'mail' }),
                    o.a.createElement('span', null, 'Navigation One')
                  ),
                },
                o.a.createElement(
                  u,
                  { key: 'g1', title: 'Item 1' },
                  o.a.createElement(c.a.Item, { key: '1' }, 'Option 1'),
                  o.a.createElement(c.a.Item, { key: '2' }, 'Option 2')
                ),
                o.a.createElement(
                  u,
                  { key: 'g2', title: 'Item 2' },
                  o.a.createElement(c.a.Item, { key: '3' }, 'Option 3'),
                  o.a.createElement(c.a.Item, { key: '4' }, 'Option 4')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub2',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'appstore' }),
                    o.a.createElement('span', null, 'Navigation Two')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '5' }, 'Option 5'),
                o.a.createElement(c.a.Item, { key: '6' }, 'Option 6'),
                o.a.createElement(
                  m,
                  { key: 'sub3', title: 'Submenu' },
                  o.a.createElement(c.a.Item, { key: '7' }, 'Option 7'),
                  o.a.createElement(c.a.Item, { key: '8' }, 'Option 8')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub4',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'setting' }),
                    o.a.createElement('span', null, 'Navigation Three')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '9' }, 'Option 9'),
                o.a.createElement(c.a.Item, { key: '10' }, 'Option 10'),
                o.a.createElement(c.a.Item, { key: '11' }, 'Option 11'),
                o.a.createElement(c.a.Item, { key: '12' }, 'Option 12')
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement('h2', null, 'Open current submenu only'),
            o.a.createElement(
              c.a,
              {
                mode: 'inline',
                openKeys: n.openKeys,
                selectedKeys: [n.current],
                style: { width: 240 },
                onOpenChange: function(e) {
                  var t = e.find(function(e) {
                      return !(n.openKeys.indexOf(e) > -1);
                    }),
                    a = n.openKeys.find(function(t) {
                      return !(e.indexOf(t) > -1);
                    }),
                    l = [];
                  t && (l = p(t).concat(t)),
                    a && (l = p(a)),
                    i({ openKeys: l });
                },
                onClick: s,
              },
              o.a.createElement(
                m,
                {
                  key: 'sub1',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'mail' }),
                    o.a.createElement('span', null, 'Navigation One')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '1' }, 'Option 1'),
                o.a.createElement(c.a.Item, { key: '2' }, 'Option 2'),
                o.a.createElement(c.a.Item, { key: '3' }, 'Option 3'),
                o.a.createElement(c.a.Item, { key: '4' }, 'Option 4')
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub2',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'appstore' }),
                    o.a.createElement('span', null, 'Navigation Two')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '5' }, 'Option 5'),
                o.a.createElement(c.a.Item, { key: '6' }, 'Option 6'),
                o.a.createElement(
                  m,
                  { key: 'sub3', title: 'Submenu' },
                  o.a.createElement(c.a.Item, { key: '7' }, 'Option 7'),
                  o.a.createElement(c.a.Item, { key: '8' }, 'Option 8')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub4',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'setting' }),
                    o.a.createElement('span', null, 'Navigation Three')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '9' }, 'Option 9'),
                o.a.createElement(c.a.Item, { key: '10' }, 'Option 10'),
                o.a.createElement(c.a.Item, { key: '11' }, 'Option 11'),
                o.a.createElement(c.a.Item, { key: '12' }, 'Option 12')
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement('h2', null, 'Vertical menu'),
            o.a.createElement(
              c.a,
              { onClick: s, style: { width: 240 }, mode: 'vertical' },
              o.a.createElement(
                m,
                {
                  key: 'sub1',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'mail' }),
                    o.a.createElement('span', null, 'Navigation One')
                  ),
                },
                o.a.createElement(
                  u,
                  { title: 'Item 1' },
                  o.a.createElement(c.a.Item, { key: '1' }, 'Option 1'),
                  o.a.createElement(c.a.Item, { key: '2' }, 'Option 2')
                ),
                o.a.createElement(
                  u,
                  { title: 'Iteom 2' },
                  o.a.createElement(c.a.Item, { key: '3' }, 'Option 3'),
                  o.a.createElement(c.a.Item, { key: '4' }, 'Option 4')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub2',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'appstore' }),
                    o.a.createElement('span', null, 'Navigation Two')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '5' }, 'Option 5'),
                o.a.createElement(c.a.Item, { key: '6' }, 'Option 6'),
                o.a.createElement(
                  m,
                  { key: 'sub3', title: 'Submenu' },
                  o.a.createElement(c.a.Item, { key: '7' }, 'Option 7'),
                  o.a.createElement(c.a.Item, { key: '8' }, 'Option 8')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub4',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement('icon', { type: 'setting' }),
                    o.a.createElement('span', null, 'Navigation Three')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '9' }, 'Option 9'),
                o.a.createElement(c.a.Item, { key: '10' }, 'Option 10'),
                o.a.createElement(c.a.Item, { key: '11' }, 'Option 11'),
                o.a.createElement(c.a.Item, { key: '12' }, 'Option 12')
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement('h2', null, 'Menu Themes'),
            o.a.createElement(
              'div',
              null,
              o.a.createElement(a.a, {
                checked: 'dark' === n.theme,
                onChange: function(e) {
                  i({ theme: e ? 'dark' : 'light' });
                },
                checkedChildren: 'Dark',
                unCheckedChildren: 'Light',
              }),
              o.a.createElement('br', null),
              o.a.createElement('br', null),
              o.a.createElement(
                c.a,
                {
                  theme: n.theme,
                  onClick: s,
                  style: { width: 240 },
                  defaultOpenKeys: ['sub1'],
                  selectedKeys: [n.current],
                  mode: 'inline',
                },
                o.a.createElement(
                  m,
                  {
                    key: 'sub1',
                    title: o.a.createElement(
                      'span',
                      null,
                      o.a.createElement(l.a, { type: 'mail' }),
                      o.a.createElement('span', null, 'Navigation One')
                    ),
                  },
                  o.a.createElement(c.a.Item, { key: '1' }, 'Option 1'),
                  o.a.createElement(c.a.Item, { key: '2' }, 'Option 2'),
                  o.a.createElement(c.a.Item, { key: '3' }, 'Option 3'),
                  o.a.createElement(c.a.Item, { key: '4' }, 'Option 4')
                ),
                o.a.createElement(
                  m,
                  {
                    key: 'sub2',
                    title: o.a.createElement(
                      'span',
                      null,
                      o.a.createElement(l.a, { type: 'appstore' }),
                      o.a.createElement('span', null, 'Navigtion Two')
                    ),
                  },
                  o.a.createElement(c.a.Item, { key: '5' }, 'Option 5'),
                  o.a.createElement(c.a.Item, { key: '6' }, 'Option 6'),
                  o.a.createElement(
                    m,
                    { key: 'sub3', title: 'Submenu' },
                    o.a.createElement(c.a.Item, { key: '7' }, 'Option 7'),
                    o.a.createElement(c.a.Item, { key: '8' }, 'Option 8')
                  )
                ),
                o.a.createElement(
                  m,
                  {
                    key: 'sub4',
                    title: o.a.createElement(
                      'span',
                      null,
                      o.a.createElement(l.a, { type: 'setting' }),
                      o.a.createElement('span', null, 'Navigation Three')
                    ),
                  },
                  o.a.createElement(c.a.Item, { key: '9' }, 'Option 9'),
                  o.a.createElement(c.a.Item, { key: '10' }, 'Option 10'),
                  o.a.createElement(c.a.Item, { key: '11' }, 'Option 11'),
                  o.a.createElement(c.a.Item, { key: '12' }, 'Option 12')
                )
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement(
            'div',
            { className: 'isoContent' },
            o.a.createElement(a.a, {
              onChange: function(e) {
                i({ mode: e ? 'vertical' : 'inline' });
              },
            }),
            o.a.createElement('br', null),
            o.a.createElement('br', null),
            o.a.createElement(
              c.a,
              {
                style: { width: 240 },
                defaultOpenKeys: ['sub1'],
                mode: n.mode,
              },
              o.a.createElement(
                m,
                {
                  key: 'sub1',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'mail' }),
                    o.a.createElement('span', null, 'Navigation One')
                  ),
                },
                o.a.createElement(
                  u,
                  { title: 'Item 1' },
                  o.a.createElement(c.a.Item, { key: '1' }, 'Option 1'),
                  o.a.createElement(c.a.Item, { key: '2' }, 'Option 2')
                ),
                o.a.createElement(
                  u,
                  { title: 'Item 2' },
                  o.a.createElement(c.a.Item, { key: '3' }, 'Option 3'),
                  o.a.createElement(c.a.Item, { key: '4' }, 'Option 4')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub2',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'appstore' }),
                    o.a.createElement('span', null, 'Navigation Two')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '5' }, 'Option 5'),
                o.a.createElement(c.a.Item, { key: '6' }, 'Option 6'),
                o.a.createElement(
                  m,
                  { key: 'sub3', title: 'Submenu' },
                  o.a.createElement(c.a.Item, { key: '7' }, 'Option 7'),
                  o.a.createElement(c.a.Item, { key: '8' }, 'Option 8')
                )
              ),
              o.a.createElement(
                m,
                {
                  key: 'sub4',
                  title: o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(l.a, { type: 'setting' }),
                    o.a.createElement('span', null, 'Navigation Three')
                  ),
                },
                o.a.createElement(c.a.Item, { key: '9' }, 'Option 9'),
                o.a.createElement(c.a.Item, { key: '10' }, 'Option 10'),
                o.a.createElement(c.a.Item, { key: '11' }, 'Option 11'),
                o.a.createElement(c.a.Item, { key: '12' }, 'Option 12')
              )
            )
          ),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null),
          o.a.createElement('br', null)
        );
      };
    },
    682: function(e, t, n) {
      'use strict';
      n(87), n(683);
    },
    683: function(e, t, n) {},
    684: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return v;
      });
      var a = n(0),
        l = n(1),
        r = n(685),
        c = n.n(r),
        i = n(12),
        o = n.n(i),
        m = n(52),
        u = n(210),
        s = n(20),
        p = n(86),
        E = n(26);
      function y(e) {
        return (y =
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
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function b(e, t) {
        return !t || ('object' !== y(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var v = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = b(this, h(t).call(this, e))).saveSwitch = function(e) {
              n.rcSwitch = e;
            }),
            (n.renderSwitch = function(e) {
              var t,
                l = e.getPrefixCls,
                r = n.props,
                i = r.prefixCls,
                p = r.size,
                E = r.loading,
                y = r.className,
                k = void 0 === y ? '' : y,
                b = r.disabled,
                h = l('switch', i),
                O = o()(
                  k,
                  (d((t = {}), ''.concat(h, '-small'), 'small' === p),
                  d(t, ''.concat(h, '-loading'), E),
                  t)
                ),
                v = E
                  ? a.createElement(s.a, {
                      type: 'loading',
                      className: ''.concat(h, '-loading-icon'),
                    })
                  : null;
              return a.createElement(
                u.a,
                { insertExtraNode: !0 },
                a.createElement(
                  c.a,
                  f({}, Object(m.a)(n.props, ['loading']), {
                    prefixCls: h,
                    className: O,
                    disabled: b || E,
                    ref: n.saveSwitch,
                    loadingIcon: v,
                  })
                )
              );
            }),
            Object(E.a)(
              'checked' in e || !('value' in e),
              'Switch',
              '`value` is not validate prop, do you mean `checked`?'
            ),
            n
          );
        }
        var n, l, r;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && O(e, t);
          })(t, e),
          (n = t),
          (l = [
            {
              key: 'focus',
              value: function() {
                this.rcSwitch.focus();
              },
            },
            {
              key: 'blur',
              value: function() {
                this.rcSwitch.blur();
              },
            },
            {
              key: 'render',
              value: function() {
                return a.createElement(p.a, null, this.renderSwitch);
              },
            },
          ]) && k(n.prototype, l),
          r && k(n, r),
          t
        );
      })(a.Component);
      (v.__ANT_SWITCH = !0),
        (v.propTypes = {
          prefixCls: l.string,
          size: l.oneOf(['small', 'default', 'large']),
          className: l.string,
        });
    },
    685: function(e, t, n) {
      e.exports = n(686);
    },
    686: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        l = n.n(a),
        r = n(1),
        c = n.n(r),
        i = n(37);
      function o() {
        return (o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          a,
          l = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              l = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function E(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var f = n(12),
        d = (function(e) {
          function t(e) {
            var n, a, l;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (a = this),
              (l = s(t).call(this, e)),
              (n =
                !l || ('object' !== typeof l && 'function' !== typeof l)
                  ? E(a)
                  : l),
              y(E(E(n)), 'handleClick', function(e) {
                var t = n.state.checked,
                  a = n.props.onClick,
                  l = !t;
                n.setChecked(l, e), a && a(l, e);
              }),
              y(E(E(n)), 'handleKeyDown', function(e) {
                37 === e.keyCode
                  ? n.setChecked(!1, e)
                  : 39 === e.keyCode && n.setChecked(!0, e);
              }),
              y(E(E(n)), 'handleMouseUp', function(e) {
                var t = n.props.onMouseUp;
                n.node && n.node.blur(), t && t(e);
              }),
              y(E(E(n)), 'saveNode', function(e) {
                n.node = e;
              });
            var r = !1;
            return (
              (r = 'checked' in e ? !!e.checked : !!e.defaultChecked),
              (n.state = { checked: r }),
              n
            );
          }
          var n, a, r;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && p(e, t);
            })(t, e),
            (n = t),
            (r = [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  var t = {},
                    n = e.checked;
                  return 'checked' in e && (t.checked = !!n), t;
                },
              },
            ]),
            (a = [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.disabled;
                  t && !n && this.focus();
                },
              },
              {
                key: 'setChecked',
                value: function(e, t) {
                  var n = this.props,
                    a = n.disabled,
                    l = n.onChange;
                  a ||
                    ('checked' in this.props || this.setState({ checked: e }),
                    l && l(e, t));
                },
              },
              {
                key: 'focus',
                value: function() {
                  this.node.focus();
                },
              },
              {
                key: 'blur',
                value: function() {
                  this.node.blur();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    n = t.className,
                    a = t.prefixCls,
                    r = t.disabled,
                    c = t.loadingIcon,
                    i = t.checkedChildren,
                    u = t.unCheckedChildren,
                    s = m(t, [
                      'className',
                      'prefixCls',
                      'disabled',
                      'loadingIcon',
                      'checkedChildren',
                      'unCheckedChildren',
                    ]),
                    p = this.state.checked,
                    E = f(
                      (y((e = {}), n, !!n),
                      y(e, a, !0),
                      y(e, ''.concat(a, '-checked'), p),
                      y(e, ''.concat(a, '-disabled'), r),
                      e)
                    );
                  return l.a.createElement(
                    'button',
                    o({}, s, {
                      type: 'button',
                      role: 'switch',
                      'aria-checked': p,
                      disabled: r,
                      className: E,
                      ref: this.saveNode,
                      onKeyDown: this.handleKeyDown,
                      onClick: this.handleClick,
                      onMouseUp: this.handleMouseUp,
                    }),
                    c,
                    l.a.createElement(
                      'span',
                      { className: ''.concat(a, '-inner') },
                      p ? i : u
                    )
                  );
                },
              },
            ]) && u(n.prototype, a),
            r && u(n, r),
            t
          );
        })(a.Component);
      (d.propTypes = {
        className: c.a.string,
        prefixCls: c.a.string,
        disabled: c.a.bool,
        checkedChildren: c.a.any,
        unCheckedChildren: c.a.any,
        onChange: c.a.func,
        onMouseUp: c.a.func,
        onClick: c.a.func,
        tabIndex: c.a.number,
        checked: c.a.bool,
        defaultChecked: c.a.bool,
        autoFocus: c.a.bool,
        loadingIcon: c.a.node,
      }),
        (d.defaultProps = {
          prefixCls: 'rc-switch',
          checkedChildren: null,
          unCheckedChildren: null,
          className: '',
          defaultChecked: !1,
        }),
        Object(i.polyfill)(d),
        (t.default = d);
    },
  },
]);
//# sourceMappingURL=94.466f8940.chunk.js.map
