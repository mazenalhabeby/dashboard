(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [88],
  {
    2684: function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t(107),
        o = (t(836), t(837)),
        a = t(0),
        i = t.n(a),
        c = t(74),
        l = t(108),
        u = t(96),
        p = t(194),
        s = t(661),
        d = t(762),
        f = t(146),
        b = t(832),
        h = t(28),
        m = t(22),
        g = t(6),
        y = t(35),
        x = t(59);
      function v() {
        var e = Object(h.a)([
          '\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoTodoStatusTab {\n    margin-bottom: 20px;\n    display: flex;\n\n    .isoTodoStatus {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n\n      .ant-radio-button-wrapper {\n        margin: 0;\n        height: auto;\n        line-height: 1.5;\n        color: rgba(0, 0, 0, 0.65);\n        display: inline-block;\n        transition: all 0.3s ease;\n        cursor: pointer;\n        border: 0;\n        background: transparent;\n        padding: 0 15px;\n        box-shadow: none;\n        outline: 0;\n        &:last-child {\n          padding-right: ',
          ';\n          padding-left: ',
          ';\n        }\n\n        &:first-child {\n          padding-left: ',
          ';\n          padding-right: ',
          ';\n        }\n\n        &:not(:first-child)::before {\n          left: ',
          ';\n          right: ',
          ';\n        }\n\n        span {\n          font-size: 14px;\n          font-weight: 400;\n          color: ',
          ';\n        }\n      }\n\n      .ant-radio-button-wrapper-checked {\n        span {\n          color: ',
          ';\n        }\n      }\n    }\n  }\n\n  .isoTodoListWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    .isoTodoList {\n      width: 100%;\n      padding: ',
          ';\n      overflow: hidden;\n      margin: 0 0 15px;\n      background: #ffffff;\n      border: 1px solid ',
          ';\n      display: flex;\n      align-items: flex-start;\n      text-align: ',
          ';\n      position: relative;\n\n      .isoColorChooser {\n        width: 5px;\n        height: 100%;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        flex-shrink: 0;\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n        position: absolute;\n        top: 0;\n        left: ',
          ';\n        right: ',
          ';\n        ',
          ';\n        ',
          ';\n      }\n\n      .ant-checkbox-wrapper {\n        line-height: 1;\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n      }\n\n      .isoTodoContentWrapper {\n        width: 100%;\n        padding: ',
          ';\n        position: relative;\n\n        .isoTodoDate {\n          font-size: 12px;\n          font-weight: 400;\n          color: ',
          ';\n          line-height: inherit;\n          display: flex;\n          margin-bottom: 10px;\n          text-transform: capitalize;\n        }\n\n        .isoNoteContent {\n          width: 100%;\n          display: flex;\n\n          .isoNoteTextWrapper {\n            font-size: 14px;\n            font-weight: 400;\n            color: ',
          ';\n            line-height: 24px;\n          }\n\n          .isoNoteEditWrapper {\n            width: 100%;\n            display: flex;\n\n            textarea {\n              font-size: 14px;\n              font-weight: 400;\n              color: ',
          ';\n              line-height: 24px;\n              height: 210px;\n              padding: 10px 15px;\n              margin: 0;\n              border: 0;\n              outline: 0 !important;\n              background-color: #ffffff;\n              ',
          ';\n              ',
          ';\n              box-sizing: content-box;\n              resize: vertical;\n              ',
          ';\n\n              &:focus {\n                border: 1px solid ',
          ';\n                outline: 0;\n                ',
          ';\n              }\n\n              &:hover {\n                border-color: ',
          ';\n              }\n\n              &::-webkit-input-placeholder {\n                color: ',
          ';\n              }\n\n              &:-moz-placeholder {\n                color: ',
          ';\n              }\n\n              &::-moz-placeholder {\n                color: ',
          ';\n              }\n              &:-ms-input-placeholder {\n                color: ',
          ';\n              }\n            }\n          }\n        }\n      }\n\n      .isoTodoDelete,\n      .isoNoteEditIcon {\n        font-size: 16px;\n        color: ',
          ';\n        width: 30px;\n        height: 30px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ',
          ';\n        margin-left: ',
          ';\n        margin-right: ',
          ';\n        cursor: pointer;\n        ',
          ';\n        ',
          ';\n\n        &:first-child {\n          margin-left: ',
          ';\n          margin-right: ',
          ';\n        }\n\n        &:hover {\n          color: ',
          ';\n          background-color: ',
          ';\n        }\n      }\n\n      .isoNoteEditIcon {\n        position: absolute;\n        top: 0;\n        right: ',
          ';\n        left: ',
          ';\n      }\n    }\n\n    .isoNoTodoFound {\n      font-size: 21px;\n      font-weight: 300;\n      padding: 0;\n      text-transform: uppercase;\n      color: ',
          ';\n      width: 100%;\n      text-align: center;\n      margin: 50px 0;\n    }\n  }\n\n  .isoTodoFooter {\n    margin-top: 5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    .isoTodoCheckAll {\n      display: inline-flex;\n      align-items: center;\n\n      .ant-checkbox {\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n\n        &.ant-checkbox-disabled {\n          .ant-checkbox-inner {\n            border-color: ',
          ';\n\n            &:after {\n              border-color: ',
          ';\n            }\n          }\n        }\n      }\n\n      span {\n        font-size: 13px;\n        line-height: 1;\n        color: ',
          ';\n      }\n    }\n\n    .isoDeleteAll {\n      background-color: ',
          ';\n      border: 0;\n      height: 30px;\n      padding: 0 15px;\n      ',
          ';\n      ',
          ';\n\n      span {\n        font-size: 12px;\n        font-weight: 400;\n        padding: 0;\n        text-transform: uppercase;\n        color: #ffffff;\n      }\n\n      &:hover {\n        background-color: ',
          ';\n      }\n    }\n  }\n',
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(h.a)([
          '\n  padding: 50px 35px;\n\n  @media only screen and (max-width: 767px) {\n    padding: 30px 20px;\n  }\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 20px;\n  }\n\n  .isoTodoHeader {\n    height: auto;\n    line-height: inherit;\n    padding: 0;\n    margin-bottom: 40px;\n    background: none;\n\n    @media only screen and (max-width: 767px) {\n      margin-bottom: 20px;\n    }\n\n    .isoTodoInput {\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      line-height: inherit;\n      height: 50px;\n      padding: 0 15px;\n      margin: 0;\n      border: 1px solid ',
          ';\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ',
          ';\n      ',
          ';\n      ',
          ';\n\n      &:focus {\n        border-color: ',
          ';\n        ',
          ';\n        outline: 0;\n      }\n\n      &:hover {\n        border-color: ',
          ';\n      }\n\n      &::-webkit-input-placeholder {\n        color: ',
          ';\n      }\n\n      &:-moz-placeholder {\n        color: ',
          ';\n      }\n\n      &::-moz-placeholder {\n        color: ',
          ';\n      }\n      &:-ms-input-placeholder {\n        color: ',
          ';\n      }\n    }\n  }\n\n  .isoTodoContentBody {\n    width: 100%;\n  }\n',
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      var j = m.c.div(
          O(),
          Object(g.palette)('text', 2),
          Object(g.palette)('border', 0),
          Object(y.b)('none'),
          Object(y.a)('3px'),
          Object(y.c)(),
          Object(g.palette)('primary', 0),
          Object(y.b)('0 0 0 2px rgba(68, 130, 255, 0.2)'),
          Object(g.palette)('primary', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0)
        ),
        k = m.c.div(
          v(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : 'auto';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'auto' : 'inherit';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '-1px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '-1px' : 'inherit';
          },
          Object(g.palette)('text', 3),
          Object(g.palette)('primary', 0),
          function(e) {
            return 'rtl' === e['data-rtl']
              ? '20px 0 20px 15px'
              : '20px 15px 20px 0';
          },
          Object(g.palette)('border', 0),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'right' : 'left';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '10px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '10px' : 'inherit';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(y.a)(0),
          Object(y.c)(0.25),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '25px' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '25px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 30px' : '0 30px 0 0';
          },
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('text', 4),
          Object(g.palette)('text', 4),
          Object(y.b)('none'),
          Object(y.a)('3px'),
          Object(y.c)(),
          Object(g.palette)('primary', 0),
          Object(y.b)('0 0 0 2px rgba(68, 130, 255, 0.2)'),
          Object(g.palette)('primary', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('grayscale', 0),
          Object(g.palette)('secondary', 0),
          Object(g.palette)('border', 0),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '-1px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '-1px' : 'inherit';
          },
          Object(y.c)(),
          Object(y.a)(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(g.palette)('primary', 0),
          Object(g.palette)('grayscale', 7),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(g.palette)('text', 3),
          Object(g.palette)('grayscale', 2),
          Object(g.palette)('grayscale', 2),
          Object(g.palette)('text', 3),
          Object(g.palette)('primary', 0),
          Object(y.a)('3px'),
          Object(y.c)(),
          Object(g.palette)('primary', 1)
        ),
        w = Object(x.a)(j),
        C = Object(x.a)(k);
      function E(e) {
        var n = i.a.useState('All'),
          t = Object(r.a)(n, 2),
          o = t[0],
          a = t[1];
        var c = (function(e, n) {
            var t =
                'All' === n
                  ? e
                  : e.filter(function(e) {
                      return e.completed === ('Completed' === n);
                    }),
              r = 0;
            return (
              t.forEach(function(e) {
                e.completed && (r += 1);
              }),
              { selectedTodos: t, completed: r }
            );
          })(e.todos, o),
          l = c.selectedTodos,
          u = c.completed;
        return i.a.createElement(
          C,
          { className: 'isoTodoContent' },
          i.a.createElement(
            'div',
            { className: 'isoTodoStatusTab' },
            i.a.createElement(
              d.b,
              {
                value: o,
                onChange: function(e) {
                  a(e.target.value);
                },
                className: 'isoTodoStatus',
              },
              i.a.createElement(d.a, { value: 'All' }, 'All'),
              i.a.createElement(d.a, { value: 'Uncompleted' }, 'Uncompleted'),
              i.a.createElement(d.a, { value: 'Completed' }, 'Completed')
            )
          ),
          i.a.createElement(
            'div',
            { className: 'isoTodoListWrapper' },
            l.length > 0
              ? l.map(function(n) {
                  return (function(n) {
                    var t = e.deleteTodo,
                      r = e.colors,
                      o = function(t, r) {
                        (n[t] = r), e.edittodo(n);
                      };
                    return i.a.createElement(
                      'div',
                      { className: 'isoTodoList', key: n.id },
                      i.a.createElement(b.a, {
                        colors: r,
                        changeColor: function(e) {
                          return o('color', e);
                        },
                        seectedColor: n.color,
                      }),
                      i.a.createElement(s.b, {
                        className: 'isoTodoCheck',
                        checked: n.completed,
                        onChange: function() {
                          return o('completed', !n.completed);
                        },
                      }),
                      i.a.createElement(
                        'div',
                        { className: 'isoTodoContentWrapper' },
                        i.a.createElement(
                          'span',
                          { className: 'isoTodoDate' },
                          Object(f.d)(n.createTime)
                        ),
                        i.a.createElement(b.b, {
                          value: n.todo,
                          itemKey: 'todo',
                          onChange: o,
                        })
                      ),
                      i.a.createElement(p.b, {
                        className: 'isoTodoDelete',
                        icon: 'close',
                        type: 'default',
                        onClick: function() {
                          return t(n.id);
                        },
                      })
                    );
                  })(n);
                })
              : i.a.createElement(
                  'h3',
                  { className: 'isoNoTodoFound' },
                  'No todo found'
                )
          ),
          i.a.createElement(
            'div',
            { className: 'isoTodoFooter' },
            i.a.createElement(
              s.b,
              {
                className: 'isoTodoCheckAll',
                checked: u === l.length,
                disabled: u === l.length,
                onChange: function() {
                  Object(b.c)('success', 'All Todos are Completed!!!', ''),
                    e.allCompleted();
                },
              },
              'Mark all as completed'
            ),
            l.length > 0 && u === l.length
              ? i.a.createElement(
                  p.b,
                  {
                    type: 'button',
                    className: 'isoDeleteAll',
                    onClick: function() {
                      Object(b.c)(
                        'success',
                        'All Completed Todos are Deleted',
                        ''
                      ),
                        e.deleteCompleted();
                    },
                  },
                  'Delete Completed ('.concat(u, ')')
                )
              : ''
          )
        );
      }
      t.d(n, 'default', function() {
        return A;
      });
      var T = u.a.addTodo,
        N = u.a.edittodo,
        P = u.a.deleteTodo,
        S = u.a.allCompleted,
        V = u.a.deleteCompleted,
        _ = o.a.Header,
        z = o.a.Content;
      function A() {
        var e = i.a.useState(''),
          n = Object(r.a)(e, 2),
          t = n[0],
          a = n[1],
          u = Object(c.d)(function(e) {
            return e.Todos;
          }),
          p = u.todos,
          s = u.colors,
          d = Object(c.c)();
        return i.a.createElement(
          o.a,
          { style: { background: 'none' } },
          i.a.createElement(
            w,
            { className: 'isomorphicTodoComponent' },
            i.a.createElement(
              _,
              { className: 'isoTodoHeader' },
              i.a.createElement(l.d, {
                placeholder: 'Type here for add a new todo',
                value: t,
                className: 'isoTodoInput',
                onChange: function(e) {
                  return a(e.target.value);
                },
                onPressEnter: function(e) {
                  a(''), d(T(e.target.value));
                },
              })
            ),
            i.a.createElement(
              z,
              { className: 'isoTodoContentBody' },
              i.a.createElement(E, {
                todos: p,
                deleteTodo: function(e) {
                  return d(P(e));
                },
                edittodo: function(e) {
                  return d(N(e));
                },
                colors: s,
                allCompleted: function() {
                  return d(S());
                },
                deleteCompleted: function() {
                  return d(V());
                },
              })
            )
          )
        );
      }
    },
    567: function(e, n, t) {
      'use strict';
      var r = t(0),
        o = t(1),
        a = t(37),
        i = t(12),
        c = t.n(i),
        l = t(586),
        u = t(557),
        p = t.n(u),
        s = t(86),
        d = t(26);
      function f(e) {
        return (f =
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
      function b(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function h() {
        return (h =
          Object.assign ||
          function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function m(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, n) {
        return (x =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var v = function(e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        O = (function(e) {
          function n() {
            var e, t, o;
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              (t = this),
              (o = g(n).apply(this, arguments)),
              ((e =
                !o || ('object' !== f(o) && 'function' !== typeof o)
                  ? y(t)
                  : o).saveCheckbox = function(n) {
                e.rcCheckbox = n;
              }),
              (e.renderCheckbox = function(n) {
                var t,
                  o = n.getPrefixCls,
                  a = y(e),
                  i = a.props,
                  u = a.context,
                  p = i.prefixCls,
                  s = i.className,
                  d = i.children,
                  f = i.indeterminate,
                  m = i.style,
                  g = i.onMouseEnter,
                  x = i.onMouseLeave,
                  O = v(i, [
                    'prefixCls',
                    'className',
                    'children',
                    'indeterminate',
                    'style',
                    'onMouseEnter',
                    'onMouseLeave',
                  ]),
                  j = u.checkboxGroup,
                  k = o('checkbox', p),
                  w = h({}, O);
                j &&
                  ((w.onChange = function() {
                    O.onChange && O.onChange.apply(O, arguments),
                      j.toggleOption({ label: d, value: i.value });
                  }),
                  (w.name = j.name),
                  (w.checked = -1 !== j.value.indexOf(i.value)),
                  (w.disabled = i.disabled || j.disabled));
                var C = c()(
                    s,
                    (b((t = {}), ''.concat(k, '-wrapper'), !0),
                    b(t, ''.concat(k, '-wrapper-checked'), w.checked),
                    b(t, ''.concat(k, '-wrapper-disabled'), w.disabled),
                    t)
                  ),
                  E = c()(b({}, ''.concat(k, '-indeterminate'), f));
                return r.createElement(
                  'label',
                  { className: C, style: m, onMouseEnter: g, onMouseLeave: x },
                  r.createElement(
                    l.a,
                    h({}, w, {
                      prefixCls: k,
                      className: E,
                      ref: e.saveCheckbox,
                    })
                  ),
                  void 0 !== d && r.createElement('span', null, d)
                );
              }),
              e
            );
          }
          var t, o, a;
          return (
            (function(e, n) {
              if ('function' !== typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && x(e, n);
            })(n, e),
            (t = n),
            (o = [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.value,
                    n = (this.context || {}).checkboxGroup,
                    t = void 0 === n ? {} : n;
                  t.registerValue && t.registerValue(e),
                    Object(d.a)(
                      'checked' in this.props ||
                        (this.context || {}).checkboxGroup ||
                        !('value' in this.props),
                      'Checkbox',
                      '`value` is not validate prop, do you mean `checked`?'
                    );
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(e, n, t) {
                  return (
                    !p()(this.props, e) ||
                    !p()(this.state, n) ||
                    !p()(this.context.checkboxGroup, t.checkboxGroup)
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var n = e.value,
                    t = this.props.value,
                    r = (this.context || {}).checkboxGroup,
                    o = void 0 === r ? {} : r;
                  t !== n &&
                    o.registerValue &&
                    o.cancelValue &&
                    (o.cancelValue(n), o.registerValue(t));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.props.value,
                    n = (this.context || {}).checkboxGroup,
                    t = void 0 === n ? {} : n;
                  t.cancelValue && t.cancelValue(e);
                },
              },
              {
                key: 'focus',
                value: function() {
                  this.rcCheckbox.focus();
                },
              },
              {
                key: 'blur',
                value: function() {
                  this.rcCheckbox.blur();
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.createElement(s.a, null, this.renderCheckbox);
                },
              },
            ]) && m(t.prototype, o),
            a && m(t, a),
            n
          );
        })(r.Component);
      (O.__ANT_CHECKBOX = !0),
        (O.defaultProps = { indeterminate: !1 }),
        (O.contextTypes = { checkboxGroup: o.any }),
        Object(a.polyfill)(O);
      var j = O,
        k = t(52);
      function w(e) {
        return (w =
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
      function C() {
        return (C =
          Object.assign ||
          function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function E(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var n = 0, t = new Array(e.length); n < e.length; n++)
                t[n] = e[n];
              return t;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function T(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e, n) {
        return (S =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var V = function(e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        _ = (function(e) {
          function n(e) {
            var t, o, a;
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              (o = this),
              (a = N(n).call(this, e)),
              ((t =
                !a || ('object' !== w(a) && 'function' !== typeof a)
                  ? P(o)
                  : a).cancelValue = function(e) {
                t.setState(function(n) {
                  return {
                    registeredValues: n.registeredValues.filter(function(n) {
                      return n !== e;
                    }),
                  };
                });
              }),
              (t.registerValue = function(e) {
                t.setState(function(n) {
                  var t = n.registeredValues;
                  return { registeredValues: [].concat(E(t), [e]) };
                });
              }),
              (t.toggleOption = function(e) {
                var n = t.state.registeredValues,
                  r = t.state.value.indexOf(e.value),
                  o = E(t.state.value);
                -1 === r ? o.push(e.value) : o.splice(r, 1),
                  'value' in t.props || t.setState({ value: o });
                var a = t.props.onChange;
                if (a) {
                  var i = t.getOptions();
                  a(
                    o
                      .filter(function(e) {
                        return -1 !== n.indexOf(e);
                      })
                      .sort(function(e, n) {
                        return (
                          i.findIndex(function(n) {
                            return n.value === e;
                          }) -
                          i.findIndex(function(e) {
                            return e.value === n;
                          })
                        );
                      })
                  );
                }
              }),
              (t.renderGroup = function(e) {
                var n = e.getPrefixCls,
                  o = P(t),
                  a = o.props,
                  i = o.state,
                  l = a.prefixCls,
                  u = a.className,
                  p = a.style,
                  s = a.options,
                  d = V(a, ['prefixCls', 'className', 'style', 'options']),
                  f = n('checkbox', l),
                  b = ''.concat(f, '-group'),
                  h = Object(k.a)(d, [
                    'children',
                    'defaultValue',
                    'value',
                    'onChange',
                    'disabled',
                  ]),
                  m = a.children;
                s &&
                  s.length > 0 &&
                  (m = t.getOptions().map(function(e) {
                    return r.createElement(
                      j,
                      {
                        prefixCls: f,
                        key: e.value.toString(),
                        disabled: 'disabled' in e ? e.disabled : a.disabled,
                        value: e.value,
                        checked: -1 !== i.value.indexOf(e.value),
                        onChange: e.onChange,
                        className: ''.concat(b, '-item'),
                      },
                      e.label
                    );
                  }));
                var g = c()(b, u);
                return r.createElement(
                  'div',
                  C({ className: g, style: p }, h),
                  m
                );
              }),
              (t.state = {
                value: e.value || e.defaultValue || [],
                registeredValues: [],
              }),
              t
            );
          }
          var t, o, a;
          return (
            (function(e, n) {
              if ('function' !== typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && S(e, n);
            })(n, e),
            (t = n),
            (a = [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  return 'value' in e ? { value: e.value || [] } : null;
                },
              },
            ]),
            (o = [
              {
                key: 'getChildContext',
                value: function() {
                  return {
                    checkboxGroup: {
                      toggleOption: this.toggleOption,
                      value: this.state.value,
                      disabled: this.props.disabled,
                      name: this.props.name,
                      registerValue: this.registerValue,
                      cancelValue: this.cancelValue,
                    },
                  };
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(e, n) {
                  return !p()(this.props, e) || !p()(this.state, n);
                },
              },
              {
                key: 'getOptions',
                value: function() {
                  return this.props.options.map(function(e) {
                    return 'string' === typeof e ? { label: e, value: e } : e;
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.createElement(s.a, null, this.renderGroup);
                },
              },
            ]) && T(t.prototype, o),
            a && T(t, a),
            n
          );
        })(r.Component);
      (_.defaultProps = { options: [] }),
        (_.propTypes = {
          defaultValue: o.array,
          value: o.array,
          options: o.array.isRequired,
          onChange: o.func,
        }),
        (_.childContextTypes = { checkboxGroup: o.any }),
        Object(a.polyfill)(_);
      var z = _;
      j.Group = z;
      n.a = j;
    },
    574: function(e, n, t) {
      'use strict';
      t(87), t(576);
    },
    576: function(e, n, t) {},
    661: function(e, n, t) {
      'use strict';
      t(574);
      var r = t(567),
        o = t(28),
        a = t(22),
        i = t(6);
      function c() {
        var e = Object(o.a)([
          '\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ',
          ';\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var l = function(e) {
        return Object(a.c)(e)(c(), Object(i.palette)('text', 1));
      };
      t.d(n, 'a', function() {
        return p;
      });
      var u = l(r.a),
        p = r.a.Group;
      n.b = u;
    },
    762: function(e, n, t) {
      'use strict';
      t(664);
      var r = t(606),
        o = t(28),
        a = t(22),
        i = t(6);
      function c() {
        var e = Object(o.a)([
          '\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper,\n  &.ant-radio-button-wrapper {\n    font-size: 13px;\n    color: ',
          ';\n   \n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ',
          ';\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ',
          ';\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ',
          ';\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ',
          ';\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  .ant-radio-button-wrapper {\n    &.ant-radio-button-wrapper-checked {\n      background-color: ',
          ';\n      border-color: ',
          ';\n\n      &:not(.ant-radio-button-wrapper-disabled) {\n        /* background-color: ',
          '; */\n        border-color: ',
          ';\n\n        &:hover {\n          /* background-color: ',
          '; */\n          border-color: ',
          ';\n        }\n      }\n      \n    }\n    :focus{\n      outline:none;\n    }\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var l = function(e) {
        return Object(a.c)(e)(
          c(),
          Object(i.palette)('text', 1),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0),
          Object(i.palette)('primary', 0)
        );
      };
      t.d(n, 'b', function() {
        return p;
      }),
        t.d(n, 'a', function() {
          return s;
        });
      var u = l(r.a),
        p = l(r.a.Group),
        s = l(r.a.Button);
      n.c = u;
    },
    832: function(e, n, t) {
      'use strict';
      var r = t(308),
        o = t(107),
        a = t(0),
        i = t.n(a),
        c = t(194),
        l = t(733),
        u = t(28),
        p = t(22),
        s = t(35),
        d = t(59);
      function f() {
        var e = Object(u.a)([
          '\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 160px;\n\n  .ant-btn {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: ',
          ';\n    ',
          ';\n\n    &:last-child {\n      margin: 0;\n    }\n\n    &:nth-child(n + 6) {\n      margin-top: 15px;\n    }\n\n    &:nth-child(5n) {\n      margin-right: 0;\n      margin-left: 0;\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var b = p.c.div(
          f(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(s.a)('3px')
        ),
        h = Object(d.a)(b),
        m = function(e) {
          var n = e.colors,
            t = e.seectedColor,
            r = e.changeColor,
            a = i.a.useState(!1),
            u = Object(o.a)(a, 2),
            p = u[0],
            s = u[1];
          return i.a.createElement(
            l.a,
            {
              content: i.a.createElement(
                h,
                { className: 'isoColorOptions' },
                n.map(function(e, n) {
                  var t = { background: e };
                  return i.a.createElement(c.b, {
                    key: n,
                    onClick: function() {
                      s(!1), r(n);
                    },
                    style: t,
                  });
                })
              ),
              trigger: 'click',
              visible: p,
              onVisibleChange: function() {
                s(function(e) {
                  return !e;
                });
              },
            },
            i.a.createElement(c.b, {
              style: { backgroundColor: n[t] },
              className: 'isoColorChooser',
            })
          );
        },
        g = (t(306), t(20)),
        y = t(5),
        x = t(108);
      function v(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function O(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? v(t, !0).forEach(function(n) {
                Object(y.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(t).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function j(e) {
        var n = i.a.useState({ value: e.value, editable: !1 }),
          t = Object(o.a)(n, 2),
          r = t[0],
          a = t[1];
        function c() {
          a(O({}, r, { editable: !1 })),
            e.onChange && e.onChange(e.itemKey, r.value);
        }
        var l = r.value,
          u = r.editable;
        return i.a.createElement(
          'div',
          { className: 'isoNoteContent' },
          u
            ? i.a.createElement(
                'div',
                { className: 'isoNoteEditWrapper' },
                i.a.createElement(x.c, {
                  rows: 3,
                  value: l,
                  onChange: function(e) {
                    var n = e.target.value;
                    a(O({}, r, { value: n }));
                  },
                  onPressEnter: c,
                }),
                i.a.createElement(g.a, {
                  type: 'check',
                  className: 'isoNoteEditIcon',
                  onClick: c,
                })
              )
            : i.a.createElement(
                'p',
                {
                  className: 'isoNoteTextWrapper',
                  onClick: function() {
                    a(O({}, r, { editable: !0 }));
                  },
                },
                l || ' ',
                i.a.createElement(g.a, {
                  type: 'edit',
                  className: 'isoNoteEditIcon',
                })
              )
        );
      }
      t.d(n, 'c', function() {
        return r.a;
      }),
        t.d(n, 'a', function() {
          return m;
        }),
        t.d(n, 'b', function() {
          return j;
        });
    },
  },
]);
//# sourceMappingURL=88.e5a9a07f.chunk.js.map
