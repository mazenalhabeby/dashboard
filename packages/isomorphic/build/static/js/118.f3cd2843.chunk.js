(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [118],
  {
    2162: function(e, t, a) {},
    2682: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(5),
        r = (a(306), a(20)),
        i = a(43),
        o = a(44),
        s = a(192),
        c = a(191),
        l = a(206),
        p = a(193),
        u = a(0),
        h = a.n(u),
        m = a(74),
        x = a(2151),
        g = a(2158),
        b = a(179),
        d = {
          className: 'isoCardBoxLayout',
          autoSize: !0,
          verticalCompact: !0,
          cols: { lg: 96, md: 96, sm: 96, xs: 96, xxs: 96 },
          breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 200 },
          draggableHandle: '.isoDragBox',
          isResizable: !0,
          rowHeight: 1,
          margin: [0, 0],
        },
        y = 10,
        f = 10;
      function O(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(a, !0).forEach(function(t) {
                Object(n.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : O(a).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var z = function(e, t) {
        var a = -1;
        return (
          e.forEach(function(e, n) {
            e.uid.toString() === t.toString() && (a = n);
          }),
          a
        );
      };
      a(2160), a(2161), a(2162);
      function j(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var w = b.a.deleteBox,
        B = b.a.saveBox,
        C = Object(x.WidthProvider)(x.Responsive),
        E = (function(e) {
          function t(e) {
            var a;
            return (
              Object(i.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(c.a)(t).call(this, e)
              )).onLayoutChange = a.onLayoutChange.bind(Object(l.a)(a))),
              (a.breakPointChange = a.breakPointChange.bind(Object(l.a)(a))),
              (a.autoHeight = a.autoHeight.bind(Object(l.a)(a))),
              (a.state = { breakpoint: 'lg' }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(o.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.setState({ allBox: this.props.allBox });
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  e.reload && this.setState({ allBox: e.allBox });
                },
              },
              {
                key: 'onLayoutChange',
                value: function(e) {
                  var t = this,
                    a = this.state.allBox;
                  e.forEach(function(e) {
                    var n = z(a, e.i);
                    if (-1 !== n) {
                      var r = e.x,
                        i = e.y,
                        o = e.h,
                        s = e.w,
                        c = e.i;
                      a[n].size[t.state.breakpoint] = {
                        x: r,
                        y: i,
                        h: o,
                        w: s,
                        i: c,
                      };
                    }
                  }),
                    this.setState({ allBox: a }),
                    this.props.saveBox(a);
                },
              },
              {
                key: 'breakPointChange',
                value: function(e) {
                  this.setState({ breakpoint: e });
                },
              },
              {
                key: 'autoHeight',
                value: function(e, t) {
                  var a = t.height,
                    n = this.state,
                    r = n.allBox,
                    i = n.breakpoint,
                    o = this;
                  0 !== a &&
                    (r.map(function(t) {
                      var n = z(r, e);
                      return (
                        r[n].size[i].h !== Math.ceil(a / d.rowHeight) &&
                          (r[n].size[i].h = Math.ceil(a / d.rowHeight)),
                        null
                      );
                    }),
                    setTimeout(function() {
                      o.setState({ allBox: r });
                    }, 1));
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.allBox,
                    a = this.props.deleteBox,
                    i = (function(e) {
                      var t = [],
                        a = [],
                        n = [],
                        r = [],
                        i = [];
                      return (
                        e.forEach(function(e) {
                          t.push(
                            v({}, e, {
                              x: parseInt(e.size.md.x, 10),
                              y: parseInt(e.size.md.y, 10),
                              h: parseInt(e.size.md.h, 10),
                              w: parseInt(e.size.md.w, 10),
                              i: e.size.md.i.toString(),
                            })
                          ),
                            a.push(
                              v({}, e, {
                                x: parseInt(e.size.lg.x, 10),
                                y: parseInt(e.size.lg.y, 10),
                                h: parseInt(e.size.lg.h, 10),
                                w: parseInt(e.size.lg.w, 10),
                                i: e.size.lg.i.toString(),
                              })
                            ),
                            n.push(
                              v({}, e, {
                                x: parseInt(e.size.sm.x, 10),
                                y: parseInt(e.size.sm.y, 10),
                                h: parseInt(e.size.sm.h, 10),
                                w: parseInt(e.size.sm.w, 10),
                                i: e.size.sm.i.toString(),
                              })
                            ),
                            r.push(
                              v({}, e, {
                                x: parseInt(e.size.xs.x, 10),
                                y: parseInt(e.size.xs.y, 10),
                                h: parseInt(e.size.xs.h, 10),
                                w: parseInt(e.size.xs.w, 10),
                                i: e.size.xs.i.toString(),
                              })
                            ),
                            i.push(
                              v({}, e, {
                                x: parseInt(e.size.xxs.x, 10),
                                y: parseInt(e.size.xxs.y, 10),
                                h: parseInt(e.size.xxs.h, 10),
                                w: parseInt(e.size.xxs.w, 10),
                                i: e.size.xxs.i.toString(),
                              })
                            );
                        }),
                        { md: t, lg: a, sm: n, xs: r, xxs: i }
                      );
                    })(t),
                    o = (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? j(a, !0).forEach(function(t) {
                              Object(n.a)(e, t, a[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(a)
                            )
                          : j(a).forEach(function(t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(a, t)
                              );
                            });
                      }
                      return e;
                    })({}, d, {
                      layouts: i,
                      onDragStop: this.onLayoutChange,
                      onResizeStop: this.onLayoutChange,
                      onBreakpointChange: this.breakPointChange,
                    });
                  return h.a.createElement(
                    'div',
                    { className: 'isoCardBoxContentWrapper' },
                    h.a.createElement(
                      C,
                      o,
                      i.md.map(function(t) {
                        return h.a.createElement(
                          'div',
                          { className: 'isomorphicSingleCardHolder', key: t.i },
                          h.a.createElement(
                            g.ReactElementResize,
                            {
                              debounceTimeout: 200,
                              onResize: function(a) {
                                e.autoHeight(t.i, a);
                              },
                            },
                            function(e) {
                              return h.a.createElement(
                                'div',
                                {
                                  className: 'isomorphicSingleCard',
                                  style: {
                                    paddingRight: ''.concat(Math.ceil(y), 'px'),
                                    paddingBottom: ''.concat(
                                      Math.ceil(f),
                                      'px'
                                    ),
                                  },
                                },
                                h.a.createElement(
                                  'div',
                                  { className: 'isoCardBox' },
                                  h.a.createElement(
                                    'div',
                                    { className: 'isoCardBoxHeader' },
                                    h.a.createElement('h3', null, t.title),
                                    h.a.createElement(
                                      'div',
                                      { className: 'isoCardControl' },
                                      h.a.createElement(
                                        'button',
                                        {
                                          className: 'isoDeleteBtn',
                                          onClick: function() {
                                            return a(t.i);
                                          },
                                        },
                                        h.a.createElement(r.a, {
                                          type: 'delete',
                                        })
                                      ),
                                      h.a.createElement(
                                        'button',
                                        {
                                          className: 'isoDragBox',
                                          type: 'button',
                                        },
                                        h.a.createElement(r.a, { type: 'swap' })
                                      )
                                    )
                                  ),
                                  h.a.createElement(
                                    'div',
                                    { className: 'isoCardBoxBody' },
                                    h.a.createElement('p', null, t.content),
                                    t.reactComponent
                                      ? h.a.createElement(
                                          t.reactComponent,
                                          null
                                        )
                                      : null
                                  )
                                )
                              );
                            }
                          )
                        );
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      t.default = Object(m.b)(
        function(e) {
          return { allBox: e.Box.allBox, reload: e.Box.reload };
        },
        { saveBox: B, deleteBox: w }
      )(E);
    },
  },
]);
//# sourceMappingURL=118.f3cd2843.chunk.js.map
