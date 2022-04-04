(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [111, 143],
  {
    1153: function(e, t, n) {
      'use strict';
      var a = n(28),
        i = n(22),
        s = n(6);
      function o() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  height: 100%;\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var c = i.c.div(o(), Object(s.palette)('border', 0));
      t.a = c;
    },
    2063: function(e, t, n) {},
    2632: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return m;
        });
      var a = n(43),
        i = n(192),
        s = n(191),
        o = n(206),
        c = n(44),
        l = n(193),
        d = n(0),
        r = n.n(d),
        h = (n(546), n(1153), n(1856), n(1664)),
        p = n.n(h),
        u = (n(1665), n(2063), n(199)),
        b = new (n(974)).a(),
        m = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(i.a)(
                this,
                Object(s.a)(t).call(this, e)
              )).loadBlockpassWidget = function() {
                var e = new window.BlockpassKYCConnect(
                  'league_of_pharaohs_ef112',
                  { refId: Date.now() }
                );
                e.startKYCConnect(),
                  e.on('KYCConnectSuccess', function() {
                    alert('Success!'),
                      b.set('status', 'Success', { path: '/' }),
                      console.log(b.get('status'));
                  }),
                  e.on('KYCConnectClose', function() {}),
                  e.on('KYCConnectCancel', function() {
                    b.set('status', 'Success', { path: '/' }),
                      console.log(b.get('status'));
                  });
              }),
              (n.handleChange = function(e) {
                var t = e.target,
                  a = t.name;
                t.value;
                e.target.checked
                  ? ('lop' == a && (n.lop = 1), 'kyc' == a && (n.kyc = 1))
                  : ('lop' == a && (n.lop = 0), 'kyc' == a && (n.kyc = 0));
              }),
              (n.step = 0),
              (n.lop = 0),
              (n.kyc = 0),
              (n.handleClick = n.handleClick.bind(Object(o.a)(n))),
              (n.handlHideStepOneHide = n.handlHideStepOneHide.bind(
                Object(o.a)(n)
              )),
              (n.handlHideStepTwoHide = n.handlHideStepTwoHide.bind(
                Object(o.a)(n)
              )),
              (n.handlHideStepFinalHide = n.handlHideStepFinalHide.bind(
                Object(o.a)(n)
              )),
              (n.handltepTwoHide = n.handltepTwoHide.bind(Object(o.a)(n))),
              (n.setErrorMessage = n.setErrorMessage.bind(Object(o.a)(n))),
              (n.confirmUpload = n.confirmUpload.bind(Object(o.a)(n))),
              (n.handelBack = n.handelBack.bind(Object(o.a)(n))),
              (n.state = {
                hideStepOne: !1,
                hideStepTwo: !1,
                hideStepFinal: !1,
                errors: '',
              }),
              n
            );
          }
          return (
            Object(l.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.loadBlockpassWidget();
                },
              },
            ]),
            Object(c.a)(t, [
              {
                key: 'setErrorMessage',
                value: function(e) {
                  this.setState({ errors: e });
                },
              },
              {
                key: 'handlHideStepOneHide',
                value: function(e) {
                  this.setState({ hideStepOne: e });
                },
              },
              {
                key: 'handlHideStepTwoHide',
                value: function(e) {
                  this.setState({ hideStepTwo: e });
                },
              },
              {
                key: 'handltepTwoHide',
                value: function(e) {
                  this.setState({ hideStepTwo: e });
                },
              },
              {
                key: 'handlHideStepFinalHide',
                value: function(e) {
                  this.setState({ hideStepFinal: e });
                },
              },
              {
                key: 'confirmUpload',
                value: function() {
                  this.handlHideStepOneHide(!0),
                    this.handlHideStepTwoHide(!1),
                    this.handlHideStepFinalHide(!0),
                    this.setErrorMessage(''),
                    (this.step = this.step + 1);
                },
              },
              {
                key: 'handleClick',
                value: function() {
                  0 == this.step
                    ? 1 == this.lop && 1 == this.kyc
                      ? (this.handlHideStepOneHide(!0),
                        this.handlHideStepTwoHide(!0),
                        (this.step = this.step + 1),
                        this.setErrorMessage(''))
                      : this.setErrorMessage(
                          'Please accept terms and conditions !'
                        )
                    : (1 == this.step &&
                        this.setErrorMessage('Confirm docuemnt upload !'),
                      2 == this.step &&
                        (this.handlHideStepOneHide(!0),
                        this.setErrorMessage(''),
                        this.handltepTwoHide(!1),
                        (this.step = this.step + 1)));
                },
              },
              {
                key: 'handelBack',
                value: function() {
                  1 == this.step &&
                    (this.handlHideStepTwoHide(!1),
                    this.handlHideStepOneHide(!1),
                    this.handlHideStepFinalHide(!1),
                    (this.step = this.step - 1)),
                    2 == this.step &&
                      (this.handlHideStepTwoHide(!1),
                      this.handlHideStepOneHide(!1),
                      this.handlHideStepFinalHide(!1),
                      (this.step = this.step - 1)),
                    3 == this.step &&
                      (this.handlHideStepTwoHide(!0),
                      this.handlHideStepFinalHide(!1),
                      this.handlHideStepOneHide(!0),
                      (this.step = this.step - 1));
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this;
                  return (
                    (e =
                      2 != this.step
                        ? r.a.createElement(
                            'button',
                            {
                              type: 'button',
                              class: 'btn btn-primary btn-lg ActivationButton',
                              onClick: this.handleClick,
                            },
                            'Next'
                          )
                        : ''),
                    r.a.createElement(
                      'div',
                      { class: 'ActivationText' },
                      r.a.createElement(p.a, {
                        title: 'Activation',
                        steps: ['Step One', 'Step Two ', 'Activation'],
                        disabled: this.stepsToggole,
                        current: this.step,
                      }),
                      r.a.createElement(
                        'div',
                        {
                          className:
                            'card-body ' +
                            (this.state.hideStepOne ? 'hidden' : 'show'),
                        },
                        r.a.createElement(
                          'h5',
                          { class: 'card-title terms1' },
                          ' ',
                          'Please read the following terms and conditions and accept'
                        ),
                        r.a.createElement(
                          'h6',
                          { class: 'card-subtitle mb-2  errorMsg' },
                          this.state.errors
                        ),
                        r.a.createElement(
                          'div',
                          { class: 'input-group mb-3 ' },
                          r.a.createElement(
                            'div',
                            { class: 'input-group-prepend ' },
                            r.a.createElement(
                              'div',
                              { class: 'input-group-text ActivationTerms' },
                              r.a.createElement('input', {
                                class: 'VerificationCheckbox',
                                type: 'checkbox',
                                value: 'lop',
                                name: 'lop',
                                onChange: this.handleChange,
                                'aria-label':
                                  'Checkbox for following text input',
                              }),
                              r.a.createElement(
                                'label',
                                null,
                                'I agree on the terms and conditions of LOP'
                              )
                            ),
                            r.a.createElement(
                              'div',
                              { class: 'input-group-text ActivationTerms' },
                              r.a.createElement('input', {
                                class: 'VerificationCheckbox',
                                type: 'checkbox',
                                value: 'kyc',
                                name: 'kyc',
                                onChange: this.handleChange,
                                'aria-label':
                                  'Checkbox for following text input',
                              }),
                              r.a.createElement(
                                'p',
                                null,
                                'Agree to verify by documents for KYC'
                              )
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        'div',
                        {
                          className:
                            'card-body ' +
                            (this.state.hideStepTwo ? 'show' : 'hidden'),
                        },
                        r.a.createElement(
                          'h5',
                          { class: 'card-title' },
                          ' Attach Documents'
                        ),
                        r.a.createElement(
                          'h6',
                          { class: 'card-subtitle mb-2  errorMsg' },
                          ' ',
                          this.state.errors,
                          ' '
                        ),
                        r.a.createElement(
                          'button',
                          {
                            id: 'blockpass-kyc-connect',
                            type: 'button',
                            class: 'btn btn-success btn-lg ActivationTerms',
                          },
                          'Upload Documents'
                        ),
                        r.a.createElement(
                          'p',
                          null,
                          'Did you Upload documents !?'
                        ),
                        r.a.createElement(
                          'button',
                          {
                            type: 'button',
                            class: 'btn btn-danger btn',
                            onClick: function() {
                              return t.setErrorMessage(
                                'Please upload your documents !'
                              );
                            },
                          },
                          'No'
                        ),
                        r.a.createElement('span', null, ' '),
                        r.a.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: this.confirmUpload,
                            class: 'btn btn-success btn',
                          },
                          'Yes'
                        )
                      ),
                      r.a.createElement(
                        'div',
                        {
                          className:
                            'card-body ' +
                            (this.state.hideStepFinal ? 'show' : 'hidden'),
                        },
                        r.a.createElement(
                          'h5',
                          { class: 'card-title ' },
                          ' Activation'
                        ),
                        r.a.createElement(
                          'h6',
                          { class: 'card-subtitle mb-2 text-muted danger' },
                          ' '
                        ),
                        r.a.createElement(
                          'p',
                          null,
                          ' Waiting for activation '
                        ),
                        r.a.createElement(
                          u.b,
                          { to: '/dashboard/my-profile' },
                          r.a.createElement(
                            'button',
                            {
                              class: 'btn btn-primary profile-button',
                              type: 'button',
                            },
                            'Go to profile'
                          )
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { class: 'container' },
                        r.a.createElement(
                          'div',
                          { class: 'row' },
                          r.a.createElement(
                            'div',
                            { class: 'col text-center ' },
                            e
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(d.Component);
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        i = n.n(a),
        s = n(28);
      function o() {
        var e = Object(s.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var c = n(22).c.div(o());
      t.default = function(e) {
        return i.a.createElement(
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
  },
]);
//# sourceMappingURL=111.0cd64488.chunk.js.map
