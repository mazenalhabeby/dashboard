(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [99, 143],
  {
    1153: function(e, t, n) {
      'use strict';
      var a = n(28),
        r = n(22),
        c = n(6);
      function l() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ',
          ';\n  height: 100%;\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var s = r.c.div(l(), Object(c.palette)('border', 0));
      t.a = s;
    },
    2061: function(e, t, n) {},
    2062: function(e, t) {},
    2631: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return p;
        });
      var a = n(43),
        r = n(192),
        c = n(191),
        l = n(44),
        s = n(193),
        o = n(0),
        i = n.n(o),
        m = (n(74), n(199)),
        u =
          (n(546),
          n(1153),
          n(1856),
          n(1664),
          n(1665),
          n(2061),
          n(2062),
          n(257),
          n(85)),
        d = n.n(u),
        b = (n(356), new (n(974)).a()),
        p = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(r.a)(this, Object(c.a)(t).call(this))).state = {
                currentUser: '',
              }),
              n
            );
          }
          return (
            Object(s.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  d.a.auth().onAuthStateChanged(function(t) {
                    t && (console.log(t), e.setState({ currentUser: t.email }));
                  });
                },
              },
            ]),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e;
                  return (
                    console.log(b.get('status')),
                    (e =
                      'Success' == b.get('status')
                        ? i.a.createElement(
                            'button',
                            {
                              class:
                                'btn btn-outline-info bbtn-sm profile-button',
                              type: 'button',
                            },
                            'Success'
                          )
                        : i.a.createElement(
                            m.b,
                            { to: '/dashboard/activation' },
                            i.a.createElement(
                              'button',
                              {
                                class:
                                  'btn btn-outline-warning bbtn-sm profile-button',
                                type: 'button',
                              },
                              'Pending'
                            )
                          )),
                    i.a.createElement(
                      'div',
                      { className: 'instructions' },
                      i.a.createElement(
                        'div',
                        { class: 'container rounded bg-white mt-5 mb-5' },
                        i.a.createElement(
                          'div',
                          { class: 'row' },
                          i.a.createElement(
                            'div',
                            { class: 'col-md-3 border-right' },
                            i.a.createElement(
                              'div',
                              {
                                class:
                                  'd-flex flex-column align-items-center text-center p-3 py-5',
                              },
                              i.a.createElement('img', {
                                class: 'rounded-circle mt-5',
                                width: '150px',
                                src:
                                  'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { class: 'col-md-5 border-right' },
                            i.a.createElement(
                              'div',
                              { class: 'p-3 py-5' },
                              i.a.createElement(
                                'div',
                                {
                                  class:
                                    'd-flex justify-content-between align-items-center mb-3',
                                },
                                i.a.createElement(
                                  'h4',
                                  { class: 'text-right' },
                                  'Profile'
                                )
                              ),
                              i.a.createElement(
                                'div',
                                { class: 'row mt-' },
                                i.a.createElement(
                                  'div',
                                  { class: 'col-md-12' },
                                  i.a.createElement(
                                    'label',
                                    { class: 'labels' },
                                    'Username : ',
                                    b.get('username'),
                                    ' '
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                { class: 'row mt-' },
                                i.a.createElement(
                                  'div',
                                  { class: 'col-md-10' },
                                  i.a.createElement(
                                    'label',
                                    { class: 'labels' },
                                    'Activation Status '
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { class: 'col-md-2' },
                                  e
                                )
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { class: 'row mt-' },
                                i.a.createElement(
                                  'div',
                                  { class: 'col-md-10' },
                                  i.a.createElement(
                                    'label',
                                    { class: 'labels' },
                                    'Email ',
                                    b.get('email'),
                                    ' '
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  { class: 'col-md-2' },
                                  i.a.createElement(
                                    'button',
                                    {
                                      class:
                                        'btn btn-outline-primary bbtn-sm profile-button',
                                      type: 'button',
                                    },
                                    'Change'
                                  )
                                )
                              ),
                              i.a.createElement('br', null),
                              i.a.createElement(
                                'div',
                                { class: 'row mt-' },
                                i.a.createElement(
                                  m.b,
                                  { to: '/resetpassword' },
                                  i.a.createElement(
                                    'button',
                                    {
                                      class: 'btn btn-primary profile-button',
                                      type: 'button',
                                    },
                                    'Change Password'
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                { class: 'mt-5 text-center' },
                                i.a.createElement(
                                  'button',
                                  {
                                    class: 'btn btn-primary profile-button',
                                    type: 'button',
                                  },
                                  'Save Profile'
                                )
                              )
                            )
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
        })(o.Component);
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(28);
      function l() {
        var e = Object(c.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var s = n(22).c.div(l());
      t.default = function(e) {
        return r.a.createElement(
          s,
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
//# sourceMappingURL=99.6cf5cfd1.chunk.js.map
