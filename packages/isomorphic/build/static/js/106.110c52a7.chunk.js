(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [106, 141, 143, 144],
  {
    2700: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(723),
        l = t(108),
        c = t(548),
        s = t(547),
        o = t(546),
        d = t(560),
        m = (t(317), t(100)),
        u = t(107),
        p = t(661),
        f = t(194),
        b = t(308),
        h = i.a.Item;
      var g = i.a.create()(function(e) {
          var a = r.a.useState(!1),
            t = Object(u.a)(a, 2),
            n = t[0],
            l = t[1],
            c = e.form.getFieldDecorator,
            s = {
              labelCol: { xs: { span: 24 }, sm: { span: 6 } },
              wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
            },
            o = {
              wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 14, offset: 6 },
              },
            };
          return r.a.createElement(
            i.a,
            {
              onSubmit: function(a) {
                a.preventDefault(),
                  e.form.validateFieldsAndScroll(function(e, a) {
                    e ||
                      Object(b.a)(
                        'success',
                        'Received values of form',
                        JSON.stringify(a)
                      );
                  });
              },
            },
            r.a.createElement(
              h,
              Object.assign({}, s, { label: 'E-mail', hasFeedback: !0 }),
              c('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: !0, message: 'Please input your E-mail!' },
                ],
              })(r.a.createElement(m.a, { name: 'email', id: 'email' }))
            ),
            r.a.createElement(
              h,
              Object.assign({}, s, { label: 'Password', hasFeedback: !0 }),
              c('password', {
                rules: [
                  { required: !0, message: 'Please input your password!' },
                  {
                    validator: function(a, t, r) {
                      var i = e.form;
                      t && n && i.validateFields(['confirm'], { force: !0 }),
                        r();
                    },
                  },
                ],
              })(r.a.createElement(m.a, { type: 'password' }))
            ),
            r.a.createElement(
              h,
              Object.assign({}, s, {
                label: 'Confirm Password',
                hasFeedback: !0,
              }),
              c('confirm', {
                rules: [
                  { required: !0, message: 'Please confirm your password!' },
                  {
                    validator: function(a, t, n) {
                      var r = e.form;
                      t && t !== r.getFieldValue('password')
                        ? n('Two passwords that you enter is inconsistent!')
                        : n();
                    },
                  },
                ],
              })(
                r.a.createElement(m.a, {
                  type: 'password',
                  onBlur: function(e) {
                    var a = e.target.value;
                    l(function(e) {
                      return e || !!a;
                    });
                  },
                })
              )
            ),
            r.a.createElement(
              h,
              Object.assign({}, o, { style: { marginBottom: 8 } }),
              c('agreement', {
                valuePropName: 'checked',
                rules: [{ message: 'Please input your E-mail!', required: !0 }],
              })(
                r.a.createElement(
                  p.b,
                  null,
                  'I have read the ',
                  r.a.createElement('a', { href: '# ' }, 'agreement')
                )
              )
            ),
            r.a.createElement(
              h,
              o,
              r.a.createElement(
                f.b,
                { type: 'primary', htmlType: 'submit' },
                'Register'
              )
            )
          );
        }),
        x = i.a.Item,
        E = {
          labelCol: { xs: { span: 24 }, sm: { span: 5 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
        };
      a.default = function() {
        return r.a.createElement(
          o.default,
          null,
          r.a.createElement(
            c.default,
            null,
            r.a.createElement(d.a, { id: 'forms.formsWithValidation.header' })
          ),
          r.a.createElement(
            s.default,
            null,
            r.a.createElement(
              i.a,
              null,
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.failLabel',
                  }),
                  validateStatus: 'error',
                  help: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.failHelp',
                  }),
                }),
                r.a.createElement(l.d, {
                  placeholder: 'unavailable choice',
                  id: 'error',
                })
              ),
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.warningLabel',
                  }),
                  validateStatus: 'warning',
                }),
                r.a.createElement(l.d, {
                  placeholder: 'Warning',
                  id: 'warning',
                })
              ),
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.ValidatingLabel',
                  }),
                  hasFeedback: !0,
                  validateStatus: 'validating',
                  help: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.ValidatingHelp',
                  }),
                }),
                r.a.createElement(l.d, {
                  placeholder: "I'm the content is being validated",
                  id: 'validating',
                })
              ),
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.SuccessLabel',
                  }),
                  hasFeedback: !0,
                  validateStatus: 'success',
                }),
                r.a.createElement(l.d, {
                  placeholder: "I'm the content",
                  id: 'success',
                })
              ),
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.WarninghasFeedbackLabel',
                  }),
                  hasFeedback: !0,
                  validateStatus: 'warning',
                }),
                r.a.createElement(l.d, {
                  placeholder: 'Warning',
                  id: 'warning1',
                })
              ),
              r.a.createElement(
                x,
                Object.assign({}, E, {
                  label: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.FailhasFeedbackLabel',
                  }),
                  hasFeedback: !0,
                  validateStatus: 'error',
                  help: r.a.createElement(d.a, {
                    id: 'forms.formsWithValidation.FailhasFeedbackHelp',
                  }),
                }),
                r.a.createElement(l.d, {
                  placeholder: 'unavailable choice',
                  id: 'error1',
                })
              )
            )
          ),
          r.a.createElement(c.default, null, 'Form Submit Validation'),
          r.a.createElement(s.default, null, r.a.createElement(g, null))
        );
      };
    },
    546: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(28);
      function l() {
        var e = Object(i.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var c = t(22).c.div(l());
      a.default = function(e) {
        return r.a.createElement(
          c,
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
    547: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(28),
        l = t(22),
        c = t(6);
      function s() {
        var e = Object(i.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = Object(i.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var d = l.c.h3(o(), Object(c.palette)('text', 0)),
        m = l.c.p(s(), Object(c.palette)('text', 3)),
        u = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  d,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  m,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function p() {
        var e = Object(i.a)([
          '\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ',
          ';\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      var f = l.c.div(p(), Object(c.palette)('border', 0), '');
      a.default = function(e) {
        return r.a.createElement(
          f,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          r.a.createElement(u, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(28),
        l = t(22),
        c = t(6),
        s = t(59);
      function o() {
        var e = Object(i.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var d = l.c.h1(
          o(),
          Object(c.palette)('secondary', 2),
          Object(c.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(c.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        m = Object(s.a)(d);
      a.default = function(e) {
        return r.a.createElement(
          m,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    661: function(e, a, t) {
      'use strict';
      t(574);
      var n = t(567),
        r = t(28),
        i = t(22),
        l = t(6);
      function c() {
        var e = Object(r.a)([
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
        return Object(i.c)(e)(c(), Object(l.palette)('text', 1));
      };
      t.d(a, 'a', function() {
        return d;
      });
      var o = s(n.a),
        d = n.a.Group;
      a.b = o;
    },
    723: function(e, a, t) {
      'use strict';
      t(724);
      var n = t(729);
      a.a = n.a;
    },
  },
]);
//# sourceMappingURL=106.110c52a7.chunk.js.map
