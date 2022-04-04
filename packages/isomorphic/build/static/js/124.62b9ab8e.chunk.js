(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [124],
  {
    2699: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        i = t(199),
        o = t(108),
        s = t(194),
        l = t(560),
        c = t(28),
        p = t(22),
        d = t(6),
        m = t(986),
        h = t.n(m),
        u = t(59);
      function f() {
        var e = Object(c.a)([
          '\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(',
          ") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: auto;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",
          ';\n    right: ',
          ';\n  }\n\n  .isoFormContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoFormContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 70px;\n      justify-content: center;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ',
          ';\n      }\n    }\n\n    .isoFormHeadText {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      justify-content: center;\n\n      h3 {\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1.2;\n        margin: 0 0 7px;\n        color: ',
          ';\n      }\n\n      p {\n        font-size: 13px;\n        font-weight: 400;\n        line-height: 1.2;\n        margin: 0;\n        color: ',
          ';\n      }\n    }\n\n    .isoResetPassForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 10px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ',
          ';\n          }\n\n          &:-moz-placeholder {\n            color: ',
          ';\n          }\n\n          &::-moz-placeholder {\n            color: ',
          ';\n          }\n          &:-ms-input-placeholder {\n            color: ',
          ';\n          }\n        }\n\n        button {\n          height: 42px;\n          width: 100%;\n          font-weight: 500;\n          font-size: 13px;\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var g = p.c.div(
          f(),
          h.a,
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'inherit' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : 'inherit';
          },
          Object(d.palette)('secondary', 2),
          Object(d.palette)('text', 0),
          Object(d.palette)('text', 2),
          Object(d.palette)('grayscale', 0),
          Object(d.palette)('grayscale', 0),
          Object(d.palette)('grayscale', 0),
          Object(d.palette)('grayscale', 0)
        ),
        x = Object(u.a)(g);
      n.default = function() {
        return r.a.createElement(
          x,
          { className: 'isoResetPassPage' },
          r.a.createElement(
            'div',
            { className: 'isoFormContentWrapper' },
            r.a.createElement(
              'div',
              { className: 'isoFormContent' },
              r.a.createElement(
                'div',
                { className: 'isoLogoWrapper' },
                r.a.createElement(
                  i.b,
                  { to: '/dashboard' },
                  r.a.createElement(l.a, { id: 'page.resetPassTitle' })
                )
              ),
              r.a.createElement(
                'div',
                { className: 'isoFormHeadText' },
                r.a.createElement(
                  'h3',
                  null,
                  r.a.createElement(l.a, { id: 'page.resetPassSubTitle' })
                ),
                r.a.createElement(
                  'p',
                  null,
                  r.a.createElement(l.a, { id: 'page.resetPassDescription' })
                )
              ),
              r.a.createElement(
                'div',
                { className: 'isoResetPassForm' },
                r.a.createElement(
                  'div',
                  { className: 'isoInputWrapper' },
                  r.a.createElement(o.d, {
                    size: 'large',
                    type: 'password',
                    placeholder: 'New Password',
                  })
                ),
                r.a.createElement(
                  'div',
                  { className: 'isoInputWrapper' },
                  r.a.createElement(o.d, {
                    size: 'large',
                    type: 'password',
                    placeholder: 'Confirm Password',
                  })
                ),
                r.a.createElement(
                  'div',
                  { className: 'isoInputWrapper' },
                  r.a.createElement(
                    s.b,
                    { type: 'primary' },
                    r.a.createElement(l.a, { id: 'page.resetPassSave' })
                  )
                )
              )
            )
          )
        );
      };
    },
    560: function(e, n, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        i = t(55);
      n.a = Object(i.d)(
        function(e) {
          return r.a.createElement(i.a, e);
        },
        { withRef: !1 }
      );
    },
    986: function(e, n, t) {
      e.exports = t.p + 'static/media/image5.603427e6.jpg';
    },
  },
]);
//# sourceMappingURL=124.62b9ab8e.chunk.js.map
