(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [20],
  {
    1152: function(e, t, n) {
      'use strict';
      var r = n(43),
        o = n(192),
        a = n(191),
        i = n(193),
        c = n(764),
        s = n(1167),
        u = n.n(s),
        l = n(33),
        p = Object(l.a)({ forceRefresh: !0 }),
        f = {
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
        d = n(781),
        h = (function(e) {
          function t() {
            var e, n;
            Object(r.a)(this, t);
            for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++)
              c[s] = arguments[s];
            return (
              ((n = Object(o.a)(
                this,
                (e = Object(a.a)(t)).call.apply(e, [this].concat(c))
              )).lock = new u.a(f.clientID, f.domain, f.options)),
              (n.login = function() {
                n.lock && n.lock.show();
              }),
              (n.handleAuthentication = function() {
                n.lock.on('authenticated', n.setSession),
                  n.lock.on('authorization_error', function(e) {
                    return Object(d.a)('error', 'Wrong mail or password');
                  });
              }),
              (n.setSession = function(e) {
                var t = JSON.stringify(
                  1e3 * e.expiresIn + new Date().getTime()
                );
                localStorage.setItem('access_token', e.accessToken),
                  localStorage.setItem('id_token', e.idToken),
                  localStorage.setItem('expires_at', t),
                  p.replace('/dashboard');
              }),
              (n.logout = function() {
                localStorage.removeItem('access_token'),
                  localStorage.removeItem('id_token'),
                  localStorage.removeItem('expires_at'),
                  p.replace('/');
              }),
              (n.isAuthenticated = function() {
                var e = JSON.parse(localStorage.getItem('expiresAt'));
                return new Date().getTime() < e;
              }),
              n
            );
          }
          return Object(i.a)(t, e), t;
        })(c.EventEmitter);
      t.a = new h();
    },
    1166: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return s;
      }),
        n.d(t, 'c', function() {
          return u;
        }),
        n.d(t, 'a', function() {
          return l;
        });
      var r = n(2),
        o = n.n(r),
        a = n(31),
        i = n(15),
        c = new i.c.auth.GoogleAuthProvider();
      c.setCustomParameters({ prompt: 'select_account' });
      new i.c.auth.FacebookAuthProvider(),
        new i.c.auth.GithubAuthProvider(),
        new i.c.auth.TwitterAuthProvider();
      var s = (function() {
          var e = Object(a.a)(
            o.a.mark(function e(t, n) {
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.signInWithEmailAndPassword(t, n);
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function() {
          var e = Object(a.a)(
            o.a.mark(function e(t, n) {
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), i.a.createUserWithEmailAndPassword(t, n)
                      );
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        l = function(e) {
          return i.a.sendPasswordResetEmail(e);
        };
      i.a;
    },
    1246: function(e, t, n) {
      'use strict';
      n(2), n(31), n(5), n(107), n(0), n(194), n(108), n(637), n(781), n(1166);
    },
    2044: function(e, t, n) {
      e.exports = n.p + 'static/media/sign.adf5846b.jpg';
    },
    2694: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(5),
        o = n(107),
        a = n(0),
        i = n.n(a),
        c = n(70),
        s = n(199),
        u = n(74),
        l = n(108),
        p = n(661),
        f = n(194),
        d = n(560),
        h = (n(1246), n(32)),
        b = n(68),
        m = (n(1152), n(974)),
        g = (n(1166), n(28)),
        v = n(22),
        y = n(6),
        O = n(2044),
        x = n.n(O),
        k = n(59);
      function w() {
        var e = Object(g.a)([
          '\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(',
          ") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",
          ';\n    right: ',
          ';\n  }\n\n  .isoLoginContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoLoginContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ',
          ';\n      }\n    }\n\n    .isoSignInForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-of-type {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ',
          ';\n          }\n\n          &:-moz-placeholder {\n            color: ',
          ';\n          }\n\n          &::-moz-placeholder {\n            color: ',
          ';\n          }\n          &:-ms-input-placeholder {\n            color: ',
          ';\n          }\n        }\n      }\n\n      .isoHelperText {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.2;\n        color: ',
          ';\n        padding-left: ',
          ';\n        padding-right: ',
          ";\n        margin: 15px 0;\n        position: relative;\n        display: flex;\n        align-items: center;\n\n        &:before {\n          content: '*';\n          color: ",
          ';\n          padding-right: 3px;\n          font-size: 14px;\n          line-height: 1;\n          position: absolute;\n          top: 2px;\n          left: ',
          ';\n          right: ',
          ';\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoOtherLogin {\n        padding-top: 40px;\n        margin-top: 35px;\n        border-top: 1px dashed ',
          ';\n\n        > a {\n          display: flex;\n          margin-bottom: 10px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          width: 100%;\n          height: 42px;\n          border: 0;\n          font-weight: 500;\n\n          &.btnFacebook {\n            background-color: #3b5998;\n\n            &:hover {\n              background-color: darken(#3b5998, 5%);\n            }\n          }\n\n          &.btnGooglePlus {\n            background-color: #dd4b39;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#dd4b39, 5%);\n            }\n          }\n\n          &.btnAuthZero {\n            background-color: #e14615;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#e14615, 5%);\n            }\n          }\n\n          &.btnFirebase {\n            background-color: ',
          ';\n            margin-top: 15px;\n\n            &:hover {\n              background-color: ',
          ';\n            }\n          }\n\n          &.btnAccountKit {\n            ',
          '\n            margin-top: 15px;\n\n            &:hover {\n              ',
          '\n            }\n          }\n        }\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ',
          ';\n        margin-bottom: 10px;\n        text-decoration: none;\n\n        &:hover {\n          color: ',
          ';\n        }\n      }\n\n      button {\n        font-weight: 500;\n      }\n    }\n  }\n',
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var j = v.c.div(
          w(),
          x.a,
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(y.palette)('secondary', 2),
          Object(y.palette)('grayscale', 0),
          Object(y.palette)('grayscale', 0),
          Object(y.palette)('grayscale', 0),
          Object(y.palette)('grayscale', 0),
          Object(y.palette)('grayscale', 1),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '13px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '13px' : 'inherit';
          },
          Object(y.palette)('error', 0),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(y.palette)('grayscale', 2),
          Object(y.palette)('color', 5),
          Object(y.palette)('color', 6),
          '',
          '',
          Object(y.palette)('text', 3),
          Object(y.palette)('primary', 0)
        ),
        C = Object(k.a)(j);
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      n.d(t, 'default', function() {
        return I;
      });
      var S = h.a.login,
        P = b.a.clearMenu;
      function I() {
        var e = Object(a.useState)(null),
          t = Object(o.a)(e, 2),
          n = t[0],
          b = t[1],
          g = Object(c.g)(),
          v = Object(c.h)(),
          y = Object(a.useState)({}),
          O = Object(o.a)(y, 2),
          x = O[0],
          k = O[1],
          w = Object(u.c)(),
          j = Object(u.d)(function(e) {
            return e.Auth.idToken;
          }),
          I = i.a.useState(!1),
          N = Object(o.a)(I, 2),
          _ = N[0],
          T = N[1];
        i.a.useEffect(
          function() {
            j && T(!0);
          },
          [j]
        );
        var A = function(e) {
          var t = e.target.name,
            n = e.target.value;
          k(function(e) {
            return (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? E(n, !0).forEach(function(t) {
                      Object(r.a)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : E(n).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, e, Object(r.a)({}, t, n));
          });
        };
        var L = (v.state || { from: { pathname: '/dashboard' } }).from;
        return _
          ? i.a.createElement(c.a, { to: L })
          : i.a.createElement(
              C,
              { className: 'isoSignInPage' },
              i.a.createElement(
                'div',
                { className: 'isoLoginContentWrapper' },
                i.a.createElement(
                  'div',
                  { className: 'isoLoginContent' },
                  i.a.createElement(
                    'div',
                    { className: 'isoLogoWrapper' },
                    i.a.createElement(
                      s.b,
                      { to: '/dashboard' },
                      i.a.createElement(d.a, { id: 'page.signInTitle' })
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoSignInForm' },
                    i.a.createElement('h2', null, n || ''),
                    i.a.createElement(
                      'form',
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'isoInputWrapper' },
                        i.a.createElement(l.d, {
                          size: 'large',
                          placeholder: 'Username',
                          autoComplete: 'true',
                          name: 'username',
                          onChange: A,
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'isoInputWrapper' },
                        i.a.createElement(l.d, {
                          size: 'large',
                          type: 'password',
                          placeholder: 'Password',
                          name: 'password',
                          autoComplete: 'false',
                          onChange: A,
                        })
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'isoInputWrapper isoLeftRightComponent' },
                        i.a.createElement(
                          p.b,
                          null,
                          i.a.createElement(d.a, {
                            id: 'page.signInRememberMe',
                          })
                        ),
                        i.a.createElement(
                          f.b,
                          {
                            type: 'primary',
                            onClick: function() {
                              var e = h.a.LOGIN_API + 'login',
                                t = {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify(x),
                                };
                              fetch(e, t)
                                .then(function(e) {
                                  return e.json();
                                })
                                .then(
                                  function(e) {
                                    if (e.token) {
                                      var t = new m.a();
                                      t.set('username', e.user.username, {
                                        path: '/',
                                      }),
                                        t.set('name', e.user.name, {
                                          path: '/',
                                        }),
                                        t.set('email', e.user.email, {
                                          path: '/',
                                        }),
                                        t.set('token', e.token, { path: '/' }),
                                        w(S(e.token)),
                                        w(P()),
                                        g.push('/dashboard');
                                    }
                                    e.error && b(e.error);
                                  },
                                  function(e) {
                                    result.error && b(result.error);
                                  }
                                );
                            },
                          },
                          i.a.createElement(d.a, { id: 'page.signInButton' })
                        )
                      ),
                      i.a.createElement(
                        'p',
                        { className: 'isoHelperText' },
                        i.a.createElement(d.a, { id: 'page.signInPreview' })
                      )
                    ),
                    i.a.createElement('div', {
                      className: 'isoInputWrapper isoOtherLogin',
                    }),
                    i.a.createElement(
                      'div',
                      { className: 'isoCenterComponent isoHelperWrapper' },
                      i.a.createElement(
                        s.b,
                        { to: '/forgotpassword', className: 'isoForgotPass' },
                        i.a.createElement(d.a, { id: 'page.signInForgotPass' })
                      ),
                      i.a.createElement(
                        s.b,
                        { to: '/signup' },
                        i.a.createElement(d.a, {
                          id: 'page.signInCreateAccount',
                        })
                      )
                    )
                  )
                )
              )
            );
      }
    },
    560: function(e, t, n) {
      'use strict';
      var r = n(0),
        o = n.n(r),
        a = n(55);
      t.a = Object(a.d)(
        function(e) {
          return o.a.createElement(a.a, e);
        },
        { withRef: !1 }
      );
    },
    567: function(e, t, n) {
      'use strict';
      var r = n(0),
        o = n(1),
        a = n(37),
        i = n(12),
        c = n.n(i),
        s = n(586),
        u = n(557),
        l = n.n(u),
        p = n(86),
        f = n(26);
      function d(e) {
        return (d =
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
      function h(e, t, n) {
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
      function b() {
        return (b =
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
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
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
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var O = function(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        x = (function(e) {
          function t() {
            var e, n, o;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (n = this),
              (o = g(t).apply(this, arguments)),
              ((e =
                !o || ('object' !== d(o) && 'function' !== typeof o)
                  ? v(n)
                  : o).saveCheckbox = function(t) {
                e.rcCheckbox = t;
              }),
              (e.renderCheckbox = function(t) {
                var n,
                  o = t.getPrefixCls,
                  a = v(e),
                  i = a.props,
                  u = a.context,
                  l = i.prefixCls,
                  p = i.className,
                  f = i.children,
                  d = i.indeterminate,
                  m = i.style,
                  g = i.onMouseEnter,
                  y = i.onMouseLeave,
                  x = O(i, [
                    'prefixCls',
                    'className',
                    'children',
                    'indeterminate',
                    'style',
                    'onMouseEnter',
                    'onMouseLeave',
                  ]),
                  k = u.checkboxGroup,
                  w = o('checkbox', l),
                  j = b({}, x);
                k &&
                  ((j.onChange = function() {
                    x.onChange && x.onChange.apply(x, arguments),
                      k.toggleOption({ label: f, value: i.value });
                  }),
                  (j.name = k.name),
                  (j.checked = -1 !== k.value.indexOf(i.value)),
                  (j.disabled = i.disabled || k.disabled));
                var C = c()(
                    p,
                    (h((n = {}), ''.concat(w, '-wrapper'), !0),
                    h(n, ''.concat(w, '-wrapper-checked'), j.checked),
                    h(n, ''.concat(w, '-wrapper-disabled'), j.disabled),
                    n)
                  ),
                  E = c()(h({}, ''.concat(w, '-indeterminate'), d));
                return r.createElement(
                  'label',
                  { className: C, style: m, onMouseEnter: g, onMouseLeave: y },
                  r.createElement(
                    s.a,
                    b({}, j, {
                      prefixCls: w,
                      className: E,
                      ref: e.saveCheckbox,
                    })
                  ),
                  void 0 !== f && r.createElement('span', null, f)
                );
              }),
              e
            );
          }
          var n, o, a;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && y(e, t);
            })(t, e),
            (n = t),
            (o = [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.value,
                    t = (this.context || {}).checkboxGroup,
                    n = void 0 === t ? {} : t;
                  n.registerValue && n.registerValue(e),
                    Object(f.a)(
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
                value: function(e, t, n) {
                  return (
                    !l()(this.props, e) ||
                    !l()(this.state, t) ||
                    !l()(this.context.checkboxGroup, n.checkboxGroup)
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = e.value,
                    n = this.props.value,
                    r = (this.context || {}).checkboxGroup,
                    o = void 0 === r ? {} : r;
                  n !== t &&
                    o.registerValue &&
                    o.cancelValue &&
                    (o.cancelValue(t), o.registerValue(n));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.props.value,
                    t = (this.context || {}).checkboxGroup,
                    n = void 0 === t ? {} : t;
                  n.cancelValue && n.cancelValue(e);
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
                  return r.createElement(p.a, null, this.renderCheckbox);
                },
              },
            ]) && m(n.prototype, o),
            a && m(n, a),
            t
          );
        })(r.Component);
      (x.__ANT_CHECKBOX = !0),
        (x.defaultProps = { indeterminate: !1 }),
        (x.contextTypes = { checkboxGroup: o.any }),
        Object(a.polyfill)(x);
      var k = x,
        w = n(52);
      function j(e) {
        return (j =
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
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function E(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
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
      function S(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function I(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function N(e, t) {
        return (N =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var _ = function(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        T = (function(e) {
          function t(e) {
            var n, o, a;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (o = this),
              (a = P(t).call(this, e)),
              ((n =
                !a || ('object' !== j(a) && 'function' !== typeof a)
                  ? I(o)
                  : a).cancelValue = function(e) {
                n.setState(function(t) {
                  return {
                    registeredValues: t.registeredValues.filter(function(t) {
                      return t !== e;
                    }),
                  };
                });
              }),
              (n.registerValue = function(e) {
                n.setState(function(t) {
                  var n = t.registeredValues;
                  return { registeredValues: [].concat(E(n), [e]) };
                });
              }),
              (n.toggleOption = function(e) {
                var t = n.state.registeredValues,
                  r = n.state.value.indexOf(e.value),
                  o = E(n.state.value);
                -1 === r ? o.push(e.value) : o.splice(r, 1),
                  'value' in n.props || n.setState({ value: o });
                var a = n.props.onChange;
                if (a) {
                  var i = n.getOptions();
                  a(
                    o
                      .filter(function(e) {
                        return -1 !== t.indexOf(e);
                      })
                      .sort(function(e, t) {
                        return (
                          i.findIndex(function(t) {
                            return t.value === e;
                          }) -
                          i.findIndex(function(e) {
                            return e.value === t;
                          })
                        );
                      })
                  );
                }
              }),
              (n.renderGroup = function(e) {
                var t = e.getPrefixCls,
                  o = I(n),
                  a = o.props,
                  i = o.state,
                  s = a.prefixCls,
                  u = a.className,
                  l = a.style,
                  p = a.options,
                  f = _(a, ['prefixCls', 'className', 'style', 'options']),
                  d = t('checkbox', s),
                  h = ''.concat(d, '-group'),
                  b = Object(w.a)(f, [
                    'children',
                    'defaultValue',
                    'value',
                    'onChange',
                    'disabled',
                  ]),
                  m = a.children;
                p &&
                  p.length > 0 &&
                  (m = n.getOptions().map(function(e) {
                    return r.createElement(
                      k,
                      {
                        prefixCls: d,
                        key: e.value.toString(),
                        disabled: 'disabled' in e ? e.disabled : a.disabled,
                        value: e.value,
                        checked: -1 !== i.value.indexOf(e.value),
                        onChange: e.onChange,
                        className: ''.concat(h, '-item'),
                      },
                      e.label
                    );
                  }));
                var g = c()(h, u);
                return r.createElement(
                  'div',
                  C({ className: g, style: l }, b),
                  m
                );
              }),
              (n.state = {
                value: e.value || e.defaultValue || [],
                registeredValues: [],
              }),
              n
            );
          }
          var n, o, a;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && N(e, t);
            })(t, e),
            (n = t),
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
                value: function(e, t) {
                  return !l()(this.props, e) || !l()(this.state, t);
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
                  return r.createElement(p.a, null, this.renderGroup);
                },
              },
            ]) && S(n.prototype, o),
            a && S(n, a),
            t
          );
        })(r.Component);
      (T.defaultProps = { options: [] }),
        (T.propTypes = {
          defaultValue: o.array,
          value: o.array,
          options: o.array.isRequired,
          onChange: o.func,
        }),
        (T.childContextTypes = { checkboxGroup: o.any }),
        Object(a.polyfill)(T);
      var A = T;
      k.Group = A;
      t.a = k;
    },
    574: function(e, t, n) {
      'use strict';
      n(87), n(576);
    },
    576: function(e, t, n) {},
    586: function(e, t, n) {
      'use strict';
      var r = n(62),
        o = n.n(r),
        a = n(17),
        i = n.n(a),
        c = n(16),
        s = n.n(c),
        u = n(14),
        l = n.n(u),
        p = n(18),
        f = n.n(p),
        d = n(0),
        h = n.n(d),
        b = n(1),
        m = n.n(b),
        g = n(12),
        v = n.n(g),
        y = n(37),
        O = (function(e) {
          function t(n) {
            s()(this, t);
            var r = l()(this, e.call(this, n));
            (r.handleChange = function(e) {
              var t = r.props,
                n = t.disabled,
                o = t.onChange;
              n ||
                ('checked' in r.props ||
                  r.setState({ checked: e.target.checked }),
                o &&
                  o({
                    target: i()({}, r.props, { checked: e.target.checked }),
                    stopPropagation: function() {
                      e.stopPropagation();
                    },
                    preventDefault: function() {
                      e.preventDefault();
                    },
                    nativeEvent: e.nativeEvent,
                  }));
            }),
              (r.saveInput = function(e) {
                r.input = e;
              });
            var o = 'checked' in n ? n.checked : n.defaultChecked;
            return (r.state = { checked: o }), r;
          }
          return (
            f()(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              return 'checked' in e ? i()({}, t, { checked: e.checked }) : null;
            }),
            (t.prototype.focus = function() {
              this.input.focus();
            }),
            (t.prototype.blur = function() {
              this.input.blur();
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                n = t.prefixCls,
                r = t.className,
                a = t.style,
                c = t.name,
                s = t.id,
                u = t.type,
                l = t.disabled,
                p = t.readOnly,
                f = t.tabIndex,
                d = t.onClick,
                b = t.onFocus,
                m = t.onBlur,
                g = t.autoFocus,
                y = t.value,
                O = o()(t, [
                  'prefixCls',
                  'className',
                  'style',
                  'name',
                  'id',
                  'type',
                  'disabled',
                  'readOnly',
                  'tabIndex',
                  'onClick',
                  'onFocus',
                  'onBlur',
                  'autoFocus',
                  'value',
                ]),
                x = Object.keys(O).reduce(function(e, t) {
                  return (
                    ('aria-' !== t.substr(0, 5) &&
                      'data-' !== t.substr(0, 5) &&
                      'role' !== t) ||
                      (e[t] = O[t]),
                    e
                  );
                }, {}),
                k = this.state.checked,
                w = v()(
                  n,
                  r,
                  (((e = {})[n + '-checked'] = k), (e[n + '-disabled'] = l), e)
                );
              return h.a.createElement(
                'span',
                { className: w, style: a },
                h.a.createElement(
                  'input',
                  i()(
                    {
                      name: c,
                      id: s,
                      type: u,
                      readOnly: p,
                      disabled: l,
                      tabIndex: f,
                      className: n + '-input',
                      checked: !!k,
                      onClick: d,
                      onFocus: b,
                      onBlur: m,
                      onChange: this.handleChange,
                      autoFocus: g,
                      ref: this.saveInput,
                      value: y,
                    },
                    x
                  )
                ),
                h.a.createElement('span', { className: n + '-inner' })
              );
            }),
            t
          );
        })(d.Component);
      (O.propTypes = {
        prefixCls: m.a.string,
        className: m.a.string,
        style: m.a.object,
        name: m.a.string,
        id: m.a.string,
        type: m.a.string,
        defaultChecked: m.a.oneOfType([m.a.number, m.a.bool]),
        checked: m.a.oneOfType([m.a.number, m.a.bool]),
        disabled: m.a.bool,
        onFocus: m.a.func,
        onBlur: m.a.func,
        onChange: m.a.func,
        onClick: m.a.func,
        tabIndex: m.a.oneOfType([m.a.string, m.a.number]),
        readOnly: m.a.bool,
        autoFocus: m.a.bool,
        value: m.a.any,
      }),
        (O.defaultProps = {
          prefixCls: 'rc-checkbox',
          className: '',
          style: {},
          type: 'checkbox',
          defaultChecked: !1,
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
        }),
        Object(y.polyfill)(O);
      var x = O;
      t.a = x;
    },
    637: function(e, t, n) {
      'use strict';
      n(1165);
      var r = n(1233);
      t.a = r.a;
    },
    661: function(e, t, n) {
      'use strict';
      n(574);
      var r = n(567),
        o = n(28),
        a = n(22),
        i = n(6);
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
      var s = function(e) {
        return Object(a.c)(e)(c(), Object(i.palette)('text', 1));
      };
      n.d(t, 'a', function() {
        return l;
      });
      var u = s(r.a),
        l = r.a.Group;
      t.b = u;
    },
    781: function(e, t, n) {
      'use strict';
      n(339);
      var r = n(221);
      t.a = r.a;
    },
    842: function(e, t, n) {
      'use strict';
      (t.parse = function(e, t) {
        if ('string' !== typeof e)
          throw new TypeError('argument str must be a string');
        for (
          var n = {}, o = t || {}, i = e.split(a), s = o.decode || r, u = 0;
          u < i.length;
          u++
        ) {
          var l = i[u],
            p = l.indexOf('=');
          if (!(p < 0)) {
            var f = l.substr(0, p).trim(),
              d = l.substr(++p, l.length).trim();
            '"' == d[0] && (d = d.slice(1, -1)),
              void 0 == n[f] && (n[f] = c(d, s));
          }
        }
        return n;
      }),
        (t.serialize = function(e, t, n) {
          var r = n || {},
            a = r.encode || o;
          if ('function' !== typeof a)
            throw new TypeError('option encode is invalid');
          if (!i.test(e)) throw new TypeError('argument name is invalid');
          var c = a(t);
          if (c && !i.test(c)) throw new TypeError('argument val is invalid');
          var s = e + '=' + c;
          if (null != r.maxAge) {
            var u = r.maxAge - 0;
            if (isNaN(u)) throw new Error('maxAge should be a Number');
            s += '; Max-Age=' + Math.floor(u);
          }
          if (r.domain) {
            if (!i.test(r.domain))
              throw new TypeError('option domain is invalid');
            s += '; Domain=' + r.domain;
          }
          if (r.path) {
            if (!i.test(r.path)) throw new TypeError('option path is invalid');
            s += '; Path=' + r.path;
          }
          if (r.expires) {
            if ('function' !== typeof r.expires.toUTCString)
              throw new TypeError('option expires is invalid');
            s += '; Expires=' + r.expires.toUTCString();
          }
          r.httpOnly && (s += '; HttpOnly');
          r.secure && (s += '; Secure');
          if (r.sameSite) {
            switch (
              'string' === typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
                s += '; SameSite=Strict';
                break;
              case 'lax':
                s += '; SameSite=Lax';
                break;
              case 'strict':
                s += '; SameSite=Strict';
                break;
              case 'none':
                s += '; SameSite=None';
                break;
              default:
                throw new TypeError('option sameSite is invalid');
            }
          }
          return s;
        });
      var r = decodeURIComponent,
        o = encodeURIComponent,
        a = /; */,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function c(e, t) {
        try {
          return t(e);
        } catch (n) {
          return e;
        }
      }
    },
    974: function(e, t, n) {
      'use strict';
      var r = n(842);
      function o() {
        return (
          !(function() {
            if (
              'object' !== typeof navigator ||
              'string' !== typeof navigator.userAgent
            )
              return !1;
            return (
              navigator.userAgent.indexOf('Node.js') >= 0 ||
              navigator.userAgent.indexOf('jsdom') >= 0
            );
          })() &&
          ('object' === typeof document && 'string' === typeof document.cookie)
        );
      }
      function a(e, t) {
        void 0 === t && (t = {});
        var n = (function(e) {
          if (e && 'j' === e[0] && ':' === e[1]) return e.substr(2);
          return e;
        })(e);
        if (
          (function(e, t) {
            return (
              'undefined' === typeof t &&
                (t = !e || ('{' !== e[0] && '[' !== e[0] && '"' !== e[0])),
              !t
            );
          })(n, t.doNotParse)
        )
          try {
            return JSON.parse(n);
          } catch (r) {}
        return e;
      }
      var i = n(134),
        c = (function() {
          function e(e) {
            var t = this;
            (this.changeListeners = []),
              (this.HAS_DOCUMENT_COOKIE = !1),
              (this.cookies = (function(e) {
                return 'string' === typeof e
                  ? r.parse(e)
                  : 'object' === typeof e && null !== e
                  ? e
                  : {};
              })(e)),
              new Promise(function() {
                t.HAS_DOCUMENT_COOKIE = o();
              }).catch(function() {});
          }
          return (
            (e.prototype._updateBrowserValues = function() {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = r.parse(document.cookie));
            }),
            (e.prototype._emitChange = function(e) {
              for (var t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e);
            }),
            (e.prototype.get = function(e, t) {
              return (
                void 0 === t && (t = {}),
                this._updateBrowserValues(),
                a(this.cookies[e], t)
              );
            }),
            (e.prototype.getAll = function(e) {
              void 0 === e && (e = {}), this._updateBrowserValues();
              var t = {};
              for (var n in this.cookies) t[n] = a(this.cookies[n], e);
              return t;
            }),
            (e.prototype.set = function(e, t, n) {
              var o;
              'object' === typeof t && (t = JSON.stringify(t)),
                (this.cookies = i({}, this.cookies, (((o = {})[e] = t), o))),
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = r.serialize(e, t, n)),
                this._emitChange({ name: e, value: t, options: n });
            }),
            (e.prototype.remove = function(e, t) {
              var n = (t = i({}, t, {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }));
              (this.cookies = i({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = r.serialize(e, '', n)),
                this._emitChange({ name: e, value: void 0, options: t });
            }),
            (e.prototype.addChangeListener = function(e) {
              this.changeListeners.push(e);
            }),
            (e.prototype.removeChangeListener = function(e) {
              var t = this.changeListeners.indexOf(e);
              t >= 0 && this.changeListeners.splice(t, 1);
            }),
            e
          );
        })();
      t.a = c;
    },
  },
]);
//# sourceMappingURL=20.42fad1db.chunk.js.map
