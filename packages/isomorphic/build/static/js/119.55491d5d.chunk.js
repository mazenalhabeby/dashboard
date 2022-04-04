(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [119],
  {
    1152: function(e, t, o) {
      'use strict';
      var a = o(43),
        n = o(192),
        r = o(191),
        i = o(193),
        c = o(764),
        l = o(1167),
        s = o.n(l),
        u = o(33),
        h = Object(u.a)({ forceRefresh: !0 }),
        m = {
          clientID: '11',
          domain: 'dashboard.leagueofpharaohs.com',
          allowedConnections: ['Username-Password-Authentication'],
          rememberLastLogin: !0,
          language: 'en',
          closable: !0,
          options: {
            auth: {
              autoParseHash: !0,
              responseType: 'token id_token',
              redirect: !0,
              redirectUrl:
                'http://dashboard.leagueofpharaohs.com/auth0loginCallback',
            },
            languageDictionary: {
              title: 'Isomorphic',
              emailInputPlaceholder: 'demo@gmail.com',
              passwordInputPlaceholder: 'demodemo',
            },
            theme: {
              labeledSubmitButton: !0,
              logo: 'your_logo_url',
              primaryColor: '#E14615',
              authButtons: {
                connectionName: {
                  displayName: 'Log In',
                  primaryColor: '#b7b7b7',
                  foregroundColor: '#000000',
                },
              },
            },
          },
        },
        d = o(781),
        p = (function(e) {
          function t() {
            var e, o;
            Object(a.a)(this, t);
            for (var i = arguments.length, c = new Array(i), l = 0; l < i; l++)
              c[l] = arguments[l];
            return (
              ((o = Object(n.a)(
                this,
                (e = Object(r.a)(t)).call.apply(e, [this].concat(c))
              )).lock = new s.a(m.clientID, m.domain, m.options)),
              (o.login = function() {
                o.lock && o.lock.show();
              }),
              (o.handleAuthentication = function() {
                o.lock.on('authenticated', o.setSession),
                  o.lock.on('authorization_error', function(e) {
                    return Object(d.a)('error', 'Wrong mail or password');
                  });
              }),
              (o.setSession = function(e) {
                var t = JSON.stringify(
                  1e3 * e.expiresIn + new Date().getTime()
                );
                localStorage.setItem('access_token', e.accessToken),
                  localStorage.setItem('id_token', e.idToken),
                  localStorage.setItem('expires_at', t),
                  h.replace('/dashboard');
              }),
              (o.logout = function() {
                localStorage.removeItem('access_token'),
                  localStorage.removeItem('id_token'),
                  localStorage.removeItem('expires_at'),
                  h.replace('/');
              }),
              (o.isAuthenticated = function() {
                var e = JSON.parse(localStorage.getItem('expiresAt'));
                return new Date().getTime() < e;
              }),
              o
            );
          }
          return Object(i.a)(t, e), t;
        })(c.EventEmitter);
      t.a = new p();
    },
    2629: function(e, t, o) {
      'use strict';
      o.r(t);
      var a = o(0),
        n = o.n(a),
        r = o(1152),
        i = o(32);
      t.default = function() {
        return (
          Object(a.useEffect)(
            function() {
              r.a.handleAuthentication(), i.a.login();
            },
            [r.a.handleAuthentication]
          ),
          n.a.createElement('p', null, 'Loading ...')
        );
      };
    },
    781: function(e, t, o) {
      'use strict';
      o(339);
      var a = o(221);
      t.a = a.a;
    },
  },
]);
//# sourceMappingURL=119.55491d5d.chunk.js.map
