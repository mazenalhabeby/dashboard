(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [59, 141, 142, 143, 144],
  {
    1117: function(e, t, n) {
      'use strict';
      n(607);
      var r = n(200);
      t.a = r.a;
    },
    1444: function(e, t, n) {
      'use strict';
      n(87), n(1445);
    },
    1445: function(e, t, n) {},
    1599: function(e, t, n) {
      'use strict';
      var r = n(0),
        a = n(12),
        o = n.n(a),
        l = n(52),
        i = n(37),
        c = n(20),
        u = n(86);
      function s(e) {
        return (s =
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
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function p(e, t, n) {
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
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t) {
        return !t || ('object' !== s(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var h = function(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        y = (function(e) {
          function t() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              ((e = m(
                this,
                b(t).apply(this, arguments)
              )).handleClick = function() {
                var t = e.props,
                  n = t.checked,
                  r = t.onChange;
                r && r(!n);
              }),
              (e.renderCheckableTag = function(t) {
                var n,
                  a = t.getPrefixCls,
                  l = e.props,
                  i = l.prefixCls,
                  c = l.className,
                  u = l.checked,
                  s = h(l, ['prefixCls', 'className', 'checked']),
                  d = a('tag', i),
                  m = o()(
                    d,
                    (p((n = {}), ''.concat(d, '-checkable'), !0),
                    p(n, ''.concat(d, '-checkable-checked'), u),
                    n),
                    c
                  );
                return (
                  delete s.onChange,
                  r.createElement(
                    'span',
                    f({}, s, { className: m, onClick: e.handleClick })
                  )
                );
              }),
              e
            );
          }
          var n, a, l;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && g(e, t);
            })(t, e),
            (n = t),
            (a = [
              {
                key: 'render',
                value: function() {
                  return r.createElement(u.a, null, this.renderCheckableTag);
                },
              },
            ]) && d(n.prototype, a),
            l && d(n, l),
            t
          );
        })(r.Component),
        x = n(944),
        v = n(26),
        E = n(210);
      function O(e) {
        return (O =
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
      function w(e, t, n) {
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
      function j() {
        return (j =
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
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function C(e, t) {
        return !t || ('object' !== O(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, t) {
        return (P =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var T = function(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        N = new RegExp('^('.concat(x.a.join('|'), ')(-inverse)?$')),
        _ = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              ((n = C(this, S(t).call(this, e))).state = { visible: !0 }),
              (n.handleIconClick = function(e) {
                n.setVisible(!1, e);
              }),
              (n.renderTag = function(e) {
                var t = n.props,
                  a = t.children,
                  o = T(t, ['children']),
                  i = 'onClick' in o || (a && 'a' === a.type),
                  c = Object(l.a)(o, [
                    'onClose',
                    'afterClose',
                    'color',
                    'visible',
                    'closable',
                    'prefixCls',
                  ]);
                return i
                  ? r.createElement(
                      E.a,
                      null,
                      r.createElement(
                        'span',
                        j({}, c, {
                          className: n.getTagClassName(e),
                          style: n.getTagStyle(),
                        }),
                        a,
                        n.renderCloseIcon()
                      )
                    )
                  : r.createElement(
                      'span',
                      j({}, c, {
                        className: n.getTagClassName(e),
                        style: n.getTagStyle(),
                      }),
                      a,
                      n.renderCloseIcon()
                    );
              }),
              Object(v.a)(
                !('afterClose' in e),
                'Tag',
                "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."
              ),
              n
            );
          }
          var n, a, i;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && P(e, t);
            })(t, e),
            (n = t),
            (i = [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  return 'visible' in e ? { visible: e.visible } : null;
                },
              },
            ]),
            (a = [
              {
                key: 'getTagStyle',
                value: function() {
                  var e = this.props,
                    t = e.color,
                    n = e.style,
                    r = this.isPresetColor();
                  return j({ backgroundColor: t && !r ? t : void 0 }, n);
                },
              },
              {
                key: 'getTagClassName',
                value: function(e) {
                  var t,
                    n = e.getPrefixCls,
                    r = this.props,
                    a = r.prefixCls,
                    l = r.className,
                    i = r.color,
                    c = this.state.visible,
                    u = this.isPresetColor(),
                    s = n('tag', a);
                  return o()(
                    s,
                    (w((t = {}), ''.concat(s, '-').concat(i), u),
                    w(t, ''.concat(s, '-has-color'), i && !u),
                    w(t, ''.concat(s, '-hidden'), !c),
                    t),
                    l
                  );
                },
              },
              {
                key: 'setVisible',
                value: function(e, t) {
                  var n = this.props,
                    r = n.onClose,
                    a = n.afterClose;
                  r && r(t),
                    a && !r && a(),
                    t.defaultPrevented ||
                      'visible' in this.props ||
                      this.setState({ visible: e });
                },
              },
              {
                key: 'isPresetColor',
                value: function() {
                  var e = this.props.color;
                  return !!e && N.test(e);
                },
              },
              {
                key: 'renderCloseIcon',
                value: function() {
                  return this.props.closable
                    ? r.createElement(c.a, {
                        type: 'close',
                        onClick: this.handleIconClick,
                      })
                    : null;
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.createElement(u.a, null, this.renderTag);
                },
              },
            ]) && k(n.prototype, a),
            i && k(n, i),
            t
          );
        })(r.Component);
      (_.CheckableTag = y),
        (_.defaultProps = { closable: !1 }),
        Object(i.polyfill)(_);
      t.a = _;
    },
    2691: function(e, t, n) {
      'use strict';
      n.r(t);
      n(317);
      var r = n(100),
        a = (n(551), n(553)),
        o = (n(552), n(554)),
        l = n(21),
        i = n(107),
        c = n(0),
        u = n.n(c),
        s = (n(1444), n(1599).a),
        f = n(1117),
        p = n(194),
        d = n(548),
        m = n(547),
        b = n(546),
        g = n(550),
        h = n(560),
        y = n(558),
        x = n(28),
        v = n(22),
        E = n(6),
        O = n(35),
        w = n(59);
      function j() {
        var e = Object(x.a)([
          '\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ',
          ';\n    background: ',
          ';\n    font-size: 12px;\n    color: ',
          ';\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n    cursor: pointer;\n    white-space: nowrap;\n    ',
          ';\n\n    a {\n      color: ',
          ';\n\n      &:hover {\n        color: ',
          ';\n      }\n    }\n\n    .anticon-cross {\n      margin: ',
          ';\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ',
          ';\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ',
          ';\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ',
          ';\n        color: #ffffff;\n      }\n    }\n  }\n',
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      var k = v.c.div(
          j(),
          Object(E.palette)('border', 0),
          Object(E.palette)('grayscale', 6),
          Object(E.palette)('text', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : 'inherit';
          },
          Object(O.c)(),
          Object(E.palette)('text', 3),
          Object(E.palette)('text', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 3px 0 0' : '0 0 0 3px';
          },
          Object(E.palette)('primary', 0),
          Object(E.palette)('primary', 0),
          Object(E.palette)('primary', 0)
        ),
        C = Object(w.a)(k),
        S = s.CheckableTag,
        P = function(e) {
          return u.a.createElement(
            C,
            null,
            u.a.createElement(s, e, e.children)
          );
        },
        T = ['Movie', 'Books', 'Music'];
      t.default = function() {
        var e = u.a.useState([]),
          t = Object(i.a)(e, 2),
          n = t[0],
          c = t[1],
          s = u.a.useState(['Unremovable', 'Tag 2', 'Tag 3']),
          x = Object(i.a)(s, 2),
          v = x[0],
          E = x[1],
          O = u.a.useState(!1),
          w = Object(i.a)(O, 2),
          j = w[0],
          k = w[1],
          C = u.a.useState(''),
          N = Object(i.a)(C, 2),
          _ = N[0],
          F = N[1],
          B = u.a.useRef(null);
        u.a.useEffect(
          function() {
            j && B.current && B.current.focus();
          },
          [j]
        );
        var z = function() {
            var e;
            _ && -1 === v.indexOf(_) && (e = [].concat(Object(l.a)(v), [_])),
              E(e),
              k(!1),
              F('');
          },
          D = y.b.rowStyle,
          I = y.b.colStyle,
          R = y.b.gutter;
        return u.a.createElement(
          b.default,
          null,
          u.a.createElement(
            d.default,
            null,
            u.a.createElement(h.a, { id: 'uiElements.tags.tags' })
          ),
          u.a.createElement(
            a.a,
            { style: D, gutter: R, justify: 'start' },
            u.a.createElement(
              o.a,
              { md: 12, sm: 12, xs: 24, style: I },
              u.a.createElement(
                m.default,
                {
                  title: u.a.createElement(h.a, {
                    id: 'uiElements.tags.basicExample',
                  }),
                  subtitle: u.a.createElement(h.a, {
                    id: 'uiElements.tags.basicExampleSubTitle',
                  }),
                },
                u.a.createElement(
                  g.default,
                  null,
                  u.a.createElement(
                    P,
                    null,
                    u.a.createElement(h.a, { id: 'uiElements.tags.tagOne' })
                  ),
                  u.a.createElement(
                    P,
                    null,
                    u.a.createElement(
                      'a',
                      { href: 'https://isomorphic.redq.io/dashboard/op_tag' },
                      u.a.createElement(h.a, { id: 'uiElements.tags.link' })
                    )
                  ),
                  u.a.createElement(
                    P,
                    { closable: !0, onClose: function(e) {} },
                    u.a.createElement(h.a, { id: 'uiElements.tags.tagTwo' })
                  ),
                  u.a.createElement(
                    P,
                    {
                      closable: !0,
                      onClose: function(e) {
                        e.preventDefault();
                      },
                    },
                    u.a.createElement(h.a, {
                      id: 'uiElements.tags.preventDefault',
                    })
                  )
                )
              )
            ),
            u.a.createElement(
              o.a,
              { md: 12, sm: 12, xs: 24, style: I },
              u.a.createElement(
                m.default,
                {
                  title: u.a.createElement(h.a, {
                    id: 'uiElements.tags.colorfulTag',
                  }),
                },
                u.a.createElement(
                  g.default,
                  null,
                  u.a.createElement(P, { color: '#f50' }, '#f50'),
                  u.a.createElement(P, { color: '#2db7f5' }, '#2db7f5'),
                  u.a.createElement(P, { color: '#87d068' }, '#87d068'),
                  u.a.createElement(P, { color: '#108ee9' }, '#108ee9')
                )
              )
            )
          ),
          u.a.createElement(
            a.a,
            { style: D, gutter: R, justify: 'start' },
            u.a.createElement(
              o.a,
              { md: 12, sm: 12, xs: 24, style: I },
              u.a.createElement(
                m.default,
                {
                  title: u.a.createElement(h.a, {
                    id: 'uiElements.tags.hotTags',
                  }),
                  subtitle: u.a.createElement(h.a, {
                    id: 'uiElements.tags.hotTagsSubTitle',
                  }),
                },
                u.a.createElement(
                  g.default,
                  null,
                  u.a.createElement(
                    'strong',
                    null,
                    u.a.createElement(h.a, { id: 'uiElements.tags.hots' }),
                    ' '
                  ),
                  T.map(function(e) {
                    return u.a.createElement(
                      S,
                      {
                        key: e,
                        checked: n.indexOf(e) > -1,
                        onChange: function(t) {
                          return (function(e, t) {
                            var r = t
                              ? [].concat(Object(l.a)(n), [e])
                              : n.filter(function(t) {
                                  return t !== e;
                                });
                            c(r);
                          })(e, t);
                        },
                      },
                      e
                    );
                  })
                )
              )
            ),
            u.a.createElement(
              o.a,
              { md: 12, sm: 12, xs: 24, style: I },
              u.a.createElement(
                m.default,
                {
                  title: u.a.createElement(h.a, {
                    id: 'uiElements.tags.addRemoveDynamically',
                  }),
                  subtitle: u.a.createElement(h.a, {
                    id: 'uiElements.tags.addRemoveDynamicallySubTitle',
                  }),
                },
                u.a.createElement(
                  g.default,
                  null,
                  v.map(function(e, t) {
                    var n = e.length > 20,
                      r = u.a.createElement(
                        P,
                        {
                          key: e,
                          closable: 0 !== t,
                          onClose: function() {
                            return (function(e) {
                              var t = v.filter(function(t) {
                                return t !== e;
                              });
                              E(t);
                            })(e);
                          },
                        },
                        n ? ''.concat(e.slice(0, 20), '...') : e
                      );
                    return n ? u.a.createElement(f.a, { title: e }, r) : r;
                  }),
                  j &&
                    u.a.createElement(r.a, {
                      ref: B,
                      type: 'text',
                      size: 'small',
                      style: { width: 78 },
                      value: _,
                      onChange: function(e) {
                        F(e.target.value);
                      },
                      onBlur: z,
                      onPressEnter: z,
                    }),
                  !j &&
                    u.a.createElement(
                      p.b,
                      {
                        size: 'small',
                        type: 'dashed',
                        onClick: function() {
                          k(!0);
                        },
                      },
                      u.a.createElement(h.a, { id: 'uiElements.tags.newTag' })
                    )
                )
              )
            )
          )
        );
      };
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(28);
      function l() {
        var e = Object(o.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var i = n(22).c.div(l());
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
        o = n(28),
        l = n(22),
        i = n(6);
      function c() {
        var e = Object(o.a)([
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
        var e = Object(o.a)([
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
      var s = l.c.h3(u(), Object(i.palette)('text', 0)),
        f = l.c.p(c(), Object(i.palette)('text', 3)),
        p = function(e) {
          return a.a.createElement(
            'div',
            null,
            e.title
              ? a.a.createElement(
                  s,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? a.a.createElement(
                  f,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function d() {
        var e = Object(o.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      var m = l.c.div(d(), Object(i.palette)('border', 0), '');
      t.default = function(e) {
        return a.a.createElement(
          m,
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
        o = n(28),
        l = n(22),
        i = n(6),
        c = n(59);
      function u() {
        var e = Object(o.a)([
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
      var s = l.c.h1(
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
        f = Object(c.a)(s);
      t.default = function(e) {
        return a.a.createElement(
          f,
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
        o = n(28),
        l = n(22),
        i = n(6),
        c = n(59);
      function u() {
        var e = Object(o.a)([
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
      var s = l.c.div(
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
        f = Object(c.a)(s);
      t.default = function(e) {
        return a.a.createElement(
          f,
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
        o = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = o;
    },
    944: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n(75),
        a = Object(r.a)(
          'pink',
          'red',
          'yellow',
          'orange',
          'cyan',
          'green',
          'blue',
          'purple',
          'geekblue',
          'magenta',
          'volcano',
          'gold',
          'lime'
        );
    },
  },
]);
//# sourceMappingURL=59.b491f090.chunk.js.map
