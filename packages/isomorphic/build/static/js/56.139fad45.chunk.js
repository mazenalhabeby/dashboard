(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [56],
  {
    1152: function(e, t, n) {
      'use strict';
      var r = n(43),
        o = n(192),
        a = n(191),
        i = n(193),
        c = n(764),
        s = n(1167),
        l = n.n(s),
        u = n(33),
        p = Object(u.a)({ forceRefresh: !0 }),
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
              )).lock = new l.a(f.clientID, f.domain, f.options)),
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
          return l;
        }),
        n.d(t, 'a', function() {
          return u;
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
        l = (function() {
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
        u = function(e) {
          return i.a.sendPasswordResetEmail(e);
        };
      i.a;
    },
    1246: function(e, t, n) {
      'use strict';
      n(2), n(31), n(5), n(107), n(0), n(194), n(108), n(637), n(781), n(1166);
    },
    2045: function(e, t, n) {
      e.exports = n.p + 'static/media/work.56bf9122.jpg';
    },
    2697: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(5),
        o = n(107),
        a = n(0),
        i = n.n(a),
        c = n(70),
        s = n(199),
        l = n(74),
        u = n(108),
        p = n(661),
        f = n(194),
        d = (n(1246), n(32)),
        h = n(68),
        m = (n(1152), n(974)),
        b = n(560),
        g = n(28),
        v = n(22),
        y = n(6),
        O = n(2045),
        k = n.n(O),
        x = n(59);
      function w() {
        var e = Object(g.a)([
          '\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(',
          ") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",
          ';\n    right: ',
          ';\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ',
          ';\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ',
          ';\n          }\n\n          &:-moz-placeholder {\n            color: ',
          ';\n          }\n\n          &::-moz-placeholder {\n            color: ',
          ';\n          }\n          &:-ms-input-placeholder {\n            color: ',
          ';\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ',
          ';\n            margin-left: ',
          ';\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ',
          ';\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ',
          ';\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ',
          ';\n\n          &:hover {\n            background-color: ',
          ';\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ',
          ';\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ',
          ';\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ',
          ';\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ',
          ';\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ',
          ';\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ',
          ';\n          }\n        }\n\n        &.btnAccountKit {\n          ',
          '\n          margin-top: 15px;\n\n          &:hover {\n            ',
          '\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var C = v.c.div(
          w(),
          k.a,
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
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '20px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '20px' : 'inherit';
          },
          Object(y.palette)('text', 2),
          Object(y.palette)('primary', 0),
          Object(y.palette)('color', 7),
          Object(y.palette)('color', 8),
          Object(y.palette)('color', 9),
          Object(y.palette)('color', 10),
          Object(y.palette)('color', 11),
          Object(y.palette)('color', 12),
          Object(y.palette)('color', 5),
          Object(y.palette)('color', 6),
          '',
          ''
        ),
        j = Object(x.a)(C);
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
        return N;
      });
      var S = d.a.login,
        P = h.a.clearMenu;
      function N() {
        var e = Object(a.useState)(null),
          t = Object(o.a)(e, 2),
          n = t[0],
          h = t[1],
          g = Object(a.useState)({}),
          v = Object(o.a)(g, 2),
          y = v[0],
          O = v[1],
          k = Object(l.c)(),
          x = Object(c.g)();
        var w = function(e) {
          var t = e.target.name,
            n = e.target.value;
          O(function(e) {
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
        return i.a.createElement(
          j,
          { className: 'isoSignUpPage' },
          i.a.createElement(
            'form',
            null,
            i.a.createElement(
              'div',
              { className: 'isoSignUpContentWrapper' },
              i.a.createElement(
                'div',
                { className: 'isoSignUpContent' },
                i.a.createElement(
                  'div',
                  { className: 'isoLogoWrapper' },
                  i.a.createElement(
                    'h1',
                    null,
                    i.a.createElement(b.a, { id: 'page.signUpTitle' })
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'isoSignUpForm' },
                  i.a.createElement('br', null),
                  i.a.createElement('h2', null, n || ''),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper isoLeftRightComponent' },
                    i.a.createElement(u.d, {
                      size: 'large',
                      placeholder: 'First name',
                      name: 'fname',
                      onChange: w,
                    }),
                    i.a.createElement(u.d, {
                      size: 'large',
                      placeholder: 'Last name',
                      name: 'lname',
                      onChange: w,
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper' },
                    i.a.createElement(u.d, {
                      size: 'large',
                      placeholder: 'Username',
                      name: 'username',
                      onChange: w,
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper' },
                    i.a.createElement(u.d, {
                      size: 'large',
                      placeholder: 'Email',
                      name: 'email',
                      onChange: w,
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper' },
                    i.a.createElement(u.d, {
                      size: 'large',
                      type: 'password',
                      placeholder: 'Password',
                      name: 'password',
                      onChange: w,
                    })
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper' },
                    i.a.createElement(u.d, {
                      size: 'large',
                      type: 'password',
                      placeholder: 'Confirm Password',
                    })
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className: 'isoInputWrapper',
                      style: { marginBottom: '50px' },
                    },
                    i.a.createElement(
                      p.b,
                      null,
                      i.a.createElement(b.a, {
                        id: 'page.signUpTermsConditions',
                      })
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'isoInputWrapper' },
                    i.a.createElement(
                      f.b,
                      {
                        type: 'primary',
                        onClick: function() {
                          var e = d.a.LOGIN_API + 'register';
                          console.log(y);
                          var t = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(y),
                          };
                          fetch(e, t)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              if ((e.error && h(e.error), 1 == e.result)) {
                                var t = new m.a();
                                t.set('username', e.data.username, {
                                  path: '/',
                                }),
                                  t.set('name', e.data.name, { path: '/' }),
                                  t.set('email', e.data.email, { path: '/' }),
                                  t.set('token', e.data.token, { path: '/' }),
                                  k(S(e.token)),
                                  k(P()),
                                  x.push('/dashboard');
                              }
                              e.errorInfo && h(e.errorInfo), console.log(e);
                            });
                        },
                      },
                      i.a.createElement(b.a, { id: 'page.signUpButton' })
                    )
                  ),
                  i.a.createElement('div', {
                    className: 'isoInputWrapper isoOtherLogin',
                  }),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'isoInputWrapper isoCenterComponent isoHelperWrapper',
                    },
                    i.a.createElement(
                      s.b,
                      { to: '/signin' },
                      i.a.createElement(b.a, {
                        id: 'page.signUpAlreadyAccount',
                      })
                    )
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
        l = n(557),
        u = n.n(l),
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
      function m() {
        return (m =
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
      function b(e, t) {
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
        k = (function(e) {
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
                  l = a.context,
                  u = i.prefixCls,
                  p = i.className,
                  f = i.children,
                  d = i.indeterminate,
                  b = i.style,
                  g = i.onMouseEnter,
                  y = i.onMouseLeave,
                  k = O(i, [
                    'prefixCls',
                    'className',
                    'children',
                    'indeterminate',
                    'style',
                    'onMouseEnter',
                    'onMouseLeave',
                  ]),
                  x = l.checkboxGroup,
                  w = o('checkbox', u),
                  C = m({}, k);
                x &&
                  ((C.onChange = function() {
                    k.onChange && k.onChange.apply(k, arguments),
                      x.toggleOption({ label: f, value: i.value });
                  }),
                  (C.name = x.name),
                  (C.checked = -1 !== x.value.indexOf(i.value)),
                  (C.disabled = i.disabled || x.disabled));
                var j = c()(
                    p,
                    (h((n = {}), ''.concat(w, '-wrapper'), !0),
                    h(n, ''.concat(w, '-wrapper-checked'), C.checked),
                    h(n, ''.concat(w, '-wrapper-disabled'), C.disabled),
                    n)
                  ),
                  E = c()(h({}, ''.concat(w, '-indeterminate'), d));
                return r.createElement(
                  'label',
                  { className: j, style: b, onMouseEnter: g, onMouseLeave: y },
                  r.createElement(
                    s.a,
                    m({}, C, {
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
                    !u()(this.props, e) ||
                    !u()(this.state, t) ||
                    !u()(this.context.checkboxGroup, n.checkboxGroup)
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
            ]) && b(n.prototype, o),
            a && b(n, a),
            t
          );
        })(r.Component);
      (k.__ANT_CHECKBOX = !0),
        (k.defaultProps = { indeterminate: !1 }),
        (k.contextTypes = { checkboxGroup: o.any }),
        Object(a.polyfill)(k);
      var x = k,
        w = n(52);
      function C(e) {
        return (C =
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
      function N(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function I(e, t) {
        return (I =
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
                !a || ('object' !== C(a) && 'function' !== typeof a)
                  ? N(o)
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
                  o = N(n),
                  a = o.props,
                  i = o.state,
                  s = a.prefixCls,
                  l = a.className,
                  u = a.style,
                  p = a.options,
                  f = _(a, ['prefixCls', 'className', 'style', 'options']),
                  d = t('checkbox', s),
                  h = ''.concat(d, '-group'),
                  m = Object(w.a)(f, [
                    'children',
                    'defaultValue',
                    'value',
                    'onChange',
                    'disabled',
                  ]),
                  b = a.children;
                p &&
                  p.length > 0 &&
                  (b = n.getOptions().map(function(e) {
                    return r.createElement(
                      x,
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
                var g = c()(h, l);
                return r.createElement(
                  'div',
                  j({ className: g, style: u }, m),
                  b
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
                t && I(e, t);
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
                  return !u()(this.props, e) || !u()(this.state, t);
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
      x.Group = A;
      t.a = x;
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
        l = n(14),
        u = n.n(l),
        p = n(18),
        f = n.n(p),
        d = n(0),
        h = n.n(d),
        m = n(1),
        b = n.n(m),
        g = n(12),
        v = n.n(g),
        y = n(37),
        O = (function(e) {
          function t(n) {
            s()(this, t);
            var r = u()(this, e.call(this, n));
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
                l = t.type,
                u = t.disabled,
                p = t.readOnly,
                f = t.tabIndex,
                d = t.onClick,
                m = t.onFocus,
                b = t.onBlur,
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
                k = Object.keys(O).reduce(function(e, t) {
                  return (
                    ('aria-' !== t.substr(0, 5) &&
                      'data-' !== t.substr(0, 5) &&
                      'role' !== t) ||
                      (e[t] = O[t]),
                    e
                  );
                }, {}),
                x = this.state.checked,
                w = v()(
                  n,
                  r,
                  (((e = {})[n + '-checked'] = x), (e[n + '-disabled'] = u), e)
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
                      type: l,
                      readOnly: p,
                      disabled: u,
                      tabIndex: f,
                      className: n + '-input',
                      checked: !!x,
                      onClick: d,
                      onFocus: m,
                      onBlur: b,
                      onChange: this.handleChange,
                      autoFocus: g,
                      ref: this.saveInput,
                      value: y,
                    },
                    k
                  )
                ),
                h.a.createElement('span', { className: n + '-inner' })
              );
            }),
            t
          );
        })(d.Component);
      (O.propTypes = {
        prefixCls: b.a.string,
        className: b.a.string,
        style: b.a.object,
        name: b.a.string,
        id: b.a.string,
        type: b.a.string,
        defaultChecked: b.a.oneOfType([b.a.number, b.a.bool]),
        checked: b.a.oneOfType([b.a.number, b.a.bool]),
        disabled: b.a.bool,
        onFocus: b.a.func,
        onBlur: b.a.func,
        onChange: b.a.func,
        onClick: b.a.func,
        tabIndex: b.a.oneOfType([b.a.string, b.a.number]),
        readOnly: b.a.bool,
        autoFocus: b.a.bool,
        value: b.a.any,
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
      var k = O;
      t.a = k;
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
        return u;
      });
      var l = s(r.a),
        u = r.a.Group;
      t.b = l;
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
          var n = {}, o = t || {}, i = e.split(a), s = o.decode || r, l = 0;
          l < i.length;
          l++
        ) {
          var u = i[l],
            p = u.indexOf('=');
          if (!(p < 0)) {
            var f = u.substr(0, p).trim(),
              d = u.substr(++p, u.length).trim();
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
            var l = r.maxAge - 0;
            if (isNaN(l)) throw new Error('maxAge should be a Number');
            s += '; Max-Age=' + Math.floor(l);
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
//# sourceMappingURL=56.139fad45.chunk.js.map
