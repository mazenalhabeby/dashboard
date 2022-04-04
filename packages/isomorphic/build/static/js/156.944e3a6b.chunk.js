(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [156],
  {
    2628: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(74),
        l = a(1864),
        s = a(1854),
        c = a(1855),
        i = a(1865),
        u = a(1866),
        m = a(217),
        f = a(637),
        h = a(924);
      a(2), a(5), a(31), a(15);
      var E = a(19);
      a.d(t, 'default', function() {
        return C;
      });
      var p = E.a.toggleCompose,
        w = E.a.setComposedId,
        d = E.a.toggleViewProfile,
        g = E.a.chatInit;
      function C(e) {
        var t = e.className,
          a = Object(r.c)(),
          n = Object(r.d)(function(e) {
            return e.Chat;
          }),
          E = n.loading,
          C = n.users,
          v = n.userId,
          I = n.openCompose,
          b = n.selectedChatRoom,
          R = n.viewProfile;
        return (
          o.a.useEffect(
            function() {
              C || a(g(v));
            },
            [v]
          ),
          E
            ? o.a.createElement(m.a, null)
            : o.a.createElement(
                h.f,
                { className: 'ChatWindow' },
                o.a.createElement(l.a, null),
                o.a.createElement(
                  h.c,
                  { style: { height: '100%' } },
                  o.a.createElement(
                    f.a,
                    {
                      visible: I,
                      onCancel: function() {
                        return a(p());
                      },
                      title: 'Compose Message',
                      footer: null,
                    },
                    o.a.createElement(
                      h.m,
                      null,
                      o.a.createElement(
                        'h5',
                        null,
                        'Starting your chat with...'
                      ),
                      o.a.createElement(u.a, {
                        users: C,
                        setComposedId: function(e) {
                          return a(w(e));
                        },
                        className: t,
                      }),
                      o.a.createElement(c.a, {
                        autosize: { minRows: 5, maxRows: 9 },
                        showButton: !0,
                        rows: 8,
                      })
                    )
                  ),
                  b &&
                    o.a.createElement(
                      h.q,
                      null,
                      o.a.createElement(
                        'span',
                        {
                          onClick: function() {
                            return a(d(b.otherUserInfo));
                          },
                        },
                        b.otherUserInfo.name
                      )
                    ),
                  o.a.createElement(s.a, null),
                  o.a.createElement(c.a, {
                    autosize: { minRows: 2, maxRows: 6 },
                  })
                ),
                !1 !== R
                  ? o.a.createElement(i.a, {
                      user: b.otherUserInfo,
                      toggleViewProfile: function() {
                        return a(d());
                      },
                      viewProfile: R,
                    })
                  : null
              )
        );
      }
    },
  },
]);
//# sourceMappingURL=156.944e3a6b.chunk.js.map
