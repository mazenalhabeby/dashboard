(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [157],
  {
    2611: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function() {
          return I;
        });
      var n = a(0),
        o = a.n(n),
        l = a(74),
        r = a(637),
        i = a(1866),
        c = a(1864),
        s = a(1854),
        u = a(1855),
        m = a(1865),
        f = a(217),
        g = a(924),
        E = a(19),
        h = E.a.toggleCompose,
        p = E.a.setComposedId,
        b = E.a.toggleViewProfile,
        d = E.a.chatInit,
        w = E.a.mobileActiveList,
        C = E.a.mobileActiveProfile,
        v = E.a.toggleMobileList,
        P = E.a.toggleMobileProfile;
      function I(e) {
        var t = e.className,
          a = Object(l.c)(),
          n = Object(l.d)(function(e) {
            return e.Chat;
          }),
          E = n.loading,
          I = n.users,
          M = n.userId,
          N = n.openCompose,
          k = n.selectedChatRoom,
          L = n.viewProfile;
        if (
          (o.a.useEffect(function() {
            I || a(d(M));
          }),
          E)
        )
          return o.a.createElement(f.a, null);
        var R = o.a.createElement(f.a, null);
        return (
          (R = w
            ? o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  r.a,
                  {
                    visible: N,
                    onCancel: function() {
                      return a(h());
                    },
                    title: 'Compose Message',
                    footer: null,
                  },
                  o.a.createElement(
                    g.m,
                    null,
                    o.a.createElement('h5', null, 'Starting your chat with...'),
                    o.a.createElement(i.a, {
                      users: I,
                      setComposedId: function() {
                        return a(p());
                      },
                      className: t,
                    }),
                    o.a.createElement(u.a, {
                      autosize: { minRows: 5, maxRows: 9 },
                      showButton: !0,
                      rows: 8,
                    })
                  )
                ),
                o.a.createElement(c.a, {
                  toggleMobileList: function() {
                    return a(v());
                  },
                })
              )
            : C
            ? o.a.createElement(m.a, {
                viewProfile: L,
                toggleViewProfile: function() {
                  return a(b());
                },
                toggleMobileProfile: function() {
                  return a(P());
                },
              })
            : o.a.createElement(
                g.c,
                { className: 'ChatBox' },
                k &&
                  o.a.createElement(
                    g.q,
                    null,
                    o.a.createElement(
                      g.b,
                      {
                        onClick: function() {
                          return a(v(!0));
                        },
                      },
                      o.a.createElement('i', { className: 'ion-chevron-left' })
                    ),
                    o.a.createElement(
                      'span',
                      {
                        onClick: function() {
                          a(b(k.otherUserInfo)), a(P(!0));
                        },
                      },
                      k.otherUserInfo.name
                    )
                  ),
                o.a.createElement(s.a, {
                  toggleMobileProfile: function() {
                    return a(P());
                  },
                }),
                o.a.createElement(u.a, { InputProps: { disableUnderline: !0 } })
              )),
          o.a.createElement(g.f, { className: 'ChatWindow' }, R)
        );
      }
    },
  },
]);
//# sourceMappingURL=157.b2c5cb86.chunk.js.map
