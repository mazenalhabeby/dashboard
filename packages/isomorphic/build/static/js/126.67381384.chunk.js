(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [126],
  {
    2683: function(n, e, t) {
      'use strict';
      t.r(e);
      t(836);
      var a = t(837),
        r = t(0),
        o = t.n(r),
        i = t(74),
        l = t(39),
        c = t(107),
        d = t(146),
        s = t(194),
        p = t(108),
        u = t(28),
        f = t(22),
        x = t(6),
        h = t(35),
        m = t(59);
      function g() {
        var n = Object(u.a)([
          '\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 160px);\n\n  @media only screen and (max-width: 767px) {\n    max-height: 60vh;\n  }\n\n  .isoSearchNotes {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      line-height: inherit;\n      height: 77px;\n      padding: 0 15px;\n      padding-left: ',
          ';\n      padding-right: ',
          ';\n      border: 0;\n      border-bottom: 1px solid rgba(230, 230, 230, 0.7);\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      -webkit-box-shadow: none;\n      -moz-box-shadow: none;\n      border-radius: 0;\n      box-shadow: none;\n      ',
          ';\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .ant-input {\n        border-color: rgba(230, 230, 230, 0.7) !important;\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: ',
          ';\n    right: ',
          ';\n    color: ',
          ';\n  }\n\n  .isoNoteList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .isoList {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 0;\n      border-bottom: 1px solid ',
          ';\n      text-align: ',
          ';\n      position: relative;\n\n      &.active {\n        background-color: ',
          ';\n      }\n\n      .isoNoteBGColor {\n        width: 5px;\n        display: flex;\n        margin: ',
          ';\n        flex-shrink: 0;\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin: ',
          ';\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          font-size: 16px;\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ',
          ';\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ',
          ';\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 5px;\n        right: ',
          ';\n        left: ',
          ';\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ',
          ';\n        ',
          ';\n\n        &:hover {\n          color: ',
          ';\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      line-height: inherit;\n      padding: 30px 20px;\n    }\n\n    .isoNoResultMsg {\n      padding: 15px 20px;\n      text-align: center;\n      color: ',
          ';\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n',
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = Object(u.a)([
          '\n  padding: 50px 35px;\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background: none;\n\n  @media only screen and (max-width: 767px) {\n    padding: 40px 20px;\n    height: auto;\n    flex-direction: column;\n\n    &.ant-layout.ant-layout-has-sider {\n      flex-direction: column;\n    }\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 50px 20px;\n  }\n\n  .isoNoteListSidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    ',
          ' background: #ffffff;\n    border-right: ',
          'px solid\n      ',
          ';\n    border-left: ',
          'px solid\n      ',
          ';\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 260px !important;\n      flex: 0 0 260px !important;\n      max-width: none !important;\n      min-width: 0 !important;\n    }\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      max-width: 100% !important;\n      min-width: 0 !important;\n      margin-bottom: 30px;\n      flex: 0 !important;\n      overflow: hidden;\n      overflow-y: auto;\n    }\n  }\n\n  .isoNotepadWrapper {\n    background: #ffffff;\n\n    .isoHeader {\n      height: auto;\n      line-height: inherit;\n      padding: 20px 30px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      flex-direction: row;\n      background-color: #ffffff;\n      border-bottom: 1px solid ',
          ';\n\n      @media only screen and (max-width: 480px) {\n        padding: 20px;\n      }\n\n      @media only screen and (max-width: 400px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .isoColorChooseWrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        flex-direction: row;\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n\n        span {\n          font-size: 13px;\n          color: ',
          ';\n        }\n\n        .isoColorChooser {\n          width: 20px;\n          height: 20px;\n          cursor: pointer;\n          border: 0;\n          margin: ',
          ';\n          padding: 0;\n          ',
          ';\n        }\n      }\n\n      .isoAddNoteBtn {\n        background-color: ',
          ';\n        border: 0;\n        padding: 5px 15px;\n        margin-left: ',
          ';\n        margin-right: ',
          ';\n        ',
          ';\n        ',
          ';\n\n        @media only screen and (max-width: 400px) {\n          margin: ',
          ';\n        }\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ',
          ';\n        }\n      }\n    }\n\n    .isoNoteEditingArea {\n      display: flex;\n      height: 100%;\n\n      @media (max-width: 800px) {\n        height: 300px;\n      }\n\n      .isoNoteTextbox {\n        font-size: 14px;\n        color: ',
          ';\n        line-height: 24px;\n        width: 100%;\n        height: calc(100% - 30px);\n        border: 0;\n        outline: 0;\n        padding: 20px 30px;\n        resize: none;\n\n        &:focus {\n          box-shadow: none;\n        }\n\n        @media only screen and (max-width: 480px) {\n          padding: 20px;\n        }\n      }\n    }\n\n    @media (max-width: 767px) {\n      .isoNoteListSidebar.ant-layout-sider {\n        width: auto !important;\n        margin-bottom: 30px;\n        flex: 0 0 450px !important;\n      }\n    }\n  }\n',
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      var w = f.c.div(
          b(),
          '',
          function(n) {
            return 'rtl' === n['data-rtl'] ? 0 : 1;
          },
          Object(x.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 1 : 0;
          },
          Object(x.palette)('border', 0),
          Object(x.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : 'auto';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : 'inherit';
          },
          Object(x.palette)('grayscale', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(h.a)('3px'),
          Object(x.palette)('primary', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : 'auto';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : 'inherit';
          },
          Object(h.a)('3px'),
          Object(h.c)(),
          function(n) {
            return n['data-rtl'], '15px 0 0 0';
          },
          Object(x.palette)('primary', 1),
          Object(x.palette)('text', 2)
        ),
        N = f.c.div(
          g(),
          Object(x.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '15px' : '35px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '35px' : '15px';
          },
          Object(h.c)(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : '10px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '10px' : 'auto';
          },
          Object(x.palette)('grayscale', 0),
          Object(x.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(x.palette)('secondary', 1),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 20px' : '0 20px 0 0';
          },
          Object(x.palette)('secondary', 2),
          Object(x.palette)('grayscale', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '5px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '5px' : 'inherit';
          },
          Object(x.palette)('grayscale', 0),
          Object(h.c)(),
          Object(x.palette)('primary', 0),
          Object(x.palette)('grayscale', 0),
          Object(x.palette)('secondary', 2)
        ),
        v = Object(m.a)(w),
        y = Object(m.a)(N),
        O = t(763);
      var j = function(n) {
          var e = o.a.useState(''),
            t = Object(c.a)(e, 2),
            a = t[0],
            r = t[1];
          var i = (function(n, e) {
            return (e = e.toUpperCase())
              ? n.filter(function(n) {
                  return n.note.toUpperCase().includes(e);
                })
              : n;
          })(n.notes, a);
          return o.a.createElement(
            y,
            { className: 'isoNoteListWrapper' },
            o.a.createElement(p.b, {
              placeholder: 'Search Notes',
              className: 'isoSearchNotes',
              value: a,
              onChange: function(n) {
                r(n.target.value);
              },
            }),
            o.a.createElement(
              'div',
              { className: 'isoNoteList' },
              i && i.length > 0
                ? o.a.createElement(
                    O.a,
                    { style: { height: 'calc(100vh - 70px)' } },
                    i.map(function(e) {
                      return (function(e) {
                        var t = n.selectedId,
                          a = n.deleteNote,
                          r = n.changeNote,
                          i = n.colors,
                          l = t === e.id ? 'active' : '';
                        return o.a.createElement(
                          'div',
                          { className: 'isoList '.concat(l), key: e.id },
                          o.a.createElement('div', {
                            className: 'isoNoteBGColor',
                            style: { width: '5px', background: i[e.color] },
                          }),
                          o.a.createElement(
                            'div',
                            {
                              className: 'isoNoteText',
                              onClick: function() {
                                return r(e.id);
                              },
                            },
                            o.a.createElement('h3', null, e.note),
                            o.a.createElement(
                              'span',
                              { className: 'isoNoteCreatedDate' },
                              Object(d.d)(e.createTime)
                            )
                          ),
                          o.a.createElement(s.b, {
                            className: 'isoDeleteBtn',
                            icon: 'close',
                            type: 'default',
                            onClick: function() {
                              return a(e.id);
                            },
                          })
                        );
                      })(e);
                    })
                  )
                : o.a.createElement(
                    'span',
                    { className: 'isoNoResultMsg' },
                    'No note found'
                  )
            )
          );
        },
        E = t(832),
        C = t(560);
      t.d(e, 'default', function() {
        return B;
      });
      var k = l.a.changeNote,
        z = l.a.addNote,
        S = l.a.editNote,
        P = l.a.deleteNote,
        D = l.a.changeColor,
        L = a.a.Header,
        W = a.a.Content;
      function B() {
        var n = Object(i.d)(function(n) {
            return n.Notes;
          }),
          e = n.notes,
          t = n.selectedId,
          r = n.colors,
          l = n.seectedColor,
          c = Object(i.c)();
        var d =
          void 0 !== t
            ? e.filter(function(n) {
                return n.id === t;
              })[0]
            : null;
        return o.a.createElement(
          v,
          { className: 'isomorphicNoteComponent' },
          o.a.createElement(
            'div',
            { style: { width: '340px' }, className: 'isoNoteListSidebar' },
            o.a.createElement(j, {
              notes: e,
              selectedId: t,
              changeNote: function(n) {
                return c(k(n));
              },
              deleteNote: function(n) {
                return c(P(n));
              },
              colors: r,
            })
          ),
          o.a.createElement(
            a.a,
            { className: 'isoNotepadWrapper' },
            o.a.createElement(
              L,
              { className: 'isoHeader' },
              void 0 !== t
                ? o.a.createElement(
                    'div',
                    { className: 'isoColorChooseWrapper' },
                    o.a.createElement(E.a, {
                      colors: r,
                      changeColor: function(n) {
                        return c(D(n));
                      },
                      seectedColor: l,
                    }),
                    ' ',
                    o.a.createElement(
                      'span',
                      null,
                      o.a.createElement(C.a, { id: 'notes.ChoseColor' })
                    )
                  )
                : '',
              o.a.createElement(
                s.b,
                {
                  type: 'primary',
                  className: 'isoAddNoteBtn',
                  onClick: function() {
                    return c(z());
                  },
                },
                o.a.createElement(C.a, { id: 'notes.addNote' })
              )
            ),
            o.a.createElement(
              W,
              { className: 'isoNoteEditingArea' },
              void 0 !== t
                ? o.a.createElement(p.c, {
                    className: 'isoNoteTextbox',
                    value: d.note,
                    onChange: function(n) {
                      c(S(t, n.target.value));
                    },
                    autoFocus: !0,
                  })
                : ''
            )
          )
        );
      }
    },
    832: function(n, e, t) {
      'use strict';
      var a = t(308),
        r = t(107),
        o = t(0),
        i = t.n(o),
        l = t(194),
        c = t(733),
        d = t(28),
        s = t(22),
        p = t(35),
        u = t(59);
      function f() {
        var n = Object(d.a)([
          '\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 160px;\n\n  .ant-btn {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: ',
          ';\n    ',
          ';\n\n    &:last-child {\n      margin: 0;\n    }\n\n    &:nth-child(n + 6) {\n      margin-top: 15px;\n    }\n\n    &:nth-child(5n) {\n      margin-right: 0;\n      margin-left: 0;\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      var x = s.c.div(
          f(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(p.a)('3px')
        ),
        h = Object(u.a)(x),
        m = function(n) {
          var e = n.colors,
            t = n.seectedColor,
            a = n.changeColor,
            o = i.a.useState(!1),
            d = Object(r.a)(o, 2),
            s = d[0],
            p = d[1];
          return i.a.createElement(
            c.a,
            {
              content: i.a.createElement(
                h,
                { className: 'isoColorOptions' },
                e.map(function(n, e) {
                  var t = { background: n };
                  return i.a.createElement(l.b, {
                    key: e,
                    onClick: function() {
                      p(!1), a(e);
                    },
                    style: t,
                  });
                })
              ),
              trigger: 'click',
              visible: s,
              onVisibleChange: function() {
                p(function(n) {
                  return !n;
                });
              },
            },
            i.a.createElement(l.b, {
              style: { backgroundColor: e[t] },
              className: 'isoColorChooser',
            })
          );
        },
        g = (t(306), t(20)),
        b = t(5),
        w = t(108);
      function N(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(n);
          e &&
            (a = a.filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function v(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(t, !0).forEach(function(e) {
                Object(b.a)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : N(t).forEach(function(e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return n;
      }
      function y(n) {
        var e = i.a.useState({ value: n.value, editable: !1 }),
          t = Object(r.a)(e, 2),
          a = t[0],
          o = t[1];
        function l() {
          o(v({}, a, { editable: !1 })),
            n.onChange && n.onChange(n.itemKey, a.value);
        }
        var c = a.value,
          d = a.editable;
        return i.a.createElement(
          'div',
          { className: 'isoNoteContent' },
          d
            ? i.a.createElement(
                'div',
                { className: 'isoNoteEditWrapper' },
                i.a.createElement(w.c, {
                  rows: 3,
                  value: c,
                  onChange: function(n) {
                    var e = n.target.value;
                    o(v({}, a, { value: e }));
                  },
                  onPressEnter: l,
                }),
                i.a.createElement(g.a, {
                  type: 'check',
                  className: 'isoNoteEditIcon',
                  onClick: l,
                })
              )
            : i.a.createElement(
                'p',
                {
                  className: 'isoNoteTextWrapper',
                  onClick: function() {
                    o(v({}, a, { editable: !0 }));
                  },
                },
                c || ' ',
                i.a.createElement(g.a, {
                  type: 'edit',
                  className: 'isoNoteEditIcon',
                })
              )
        );
      }
      t.d(e, 'c', function() {
        return a.a;
      }),
        t.d(e, 'a', function() {
          return m;
        }),
        t.d(e, 'b', function() {
          return y;
        });
    },
  },
]);
//# sourceMappingURL=126.67381384.chunk.js.map
