(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [114],
  {
    1079: function(n, e, t) {
      'use strict';
      t(1080);
      var a = t(1147);
      e.a = a.a;
    },
    2163: function(n, e, t) {},
    2668: function(n, e, t) {
      'use strict';
      t.r(e);
      t(306);
      var a = t(20),
        i = (t(836), t(837)),
        r = t(0),
        o = t.n(r),
        c = t(74),
        l = t(51),
        s = t(194),
        m = t(43),
        d = t(44),
        u = t(192),
        p = t(191),
        f = t(206),
        h = t(193),
        x = t(560),
        b = t(108),
        g = t(212),
        v = t(308),
        w = function(n) {
          var e = n.contact,
            t = n.deleteContact,
            a = '';
          return (
            e.firstName && (a = ''.concat(e.firstName, ' ')),
            e.lastName && (a = ''.concat(a).concat(e.lastName)),
            a || (a = 'No Name'),
            o.a.createElement(
              g.a,
              {
                title: 'Sure to delete '.concat(a, '?'),
                okText: 'DELETE',
                cancelText: 'No',
                onConfirm: function() {
                  Object(v.a)('error', ''.concat(a, ' Deleted'), ''), t(e.id);
                },
              },
              o.a.createElement(s.b, {
                icon: 'close',
                type: 'default',
                className: 'isoDeleteBtn',
              })
            )
          );
        },
        y = t(1),
        j = t(28),
        N = t(22),
        C = t(6),
        O = t(35),
        E = t(59);
      function q() {
        var n = Object(j.a)([
          '\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .isoNoResultMsg {\n    padding: 15px 20px;\n    text-align: center;\n    color: ',
          ';\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  .isoSearchBar {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      line-height: inherit;\n      height: 69px;\n      padding: 0 20px;\n      padding-left: ',
          ';\n      padding-right: ',
          ';\n      border: 0;\n      border-bottom: 1px solid ',
          ';\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ',
          ';\n      ',
          ';\n      ',
          ';\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n\n      &:hover,\n      &:focus {\n        border-color: ',
          ' !important;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ',
          ';\n      }\n\n      &:-moz-placeholder {\n        color: ',
          ';\n      }\n\n      &::-moz-placeholder {\n        color: ',
          ';\n      }\n      &:-ms-input-placeholder {\n        color: ',
          ';\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: 10px;\n    right: auto;\n    color: ',
          ';\n  }\n\n  .isoContactList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .contactListScrollbar {\n      height: calc(100vh - 200px);\n\n      @media only screen and (max-width: 767px) {\n        max-height: 60vh;\n      }\n    }\n\n    .isoSingleContact {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 15px 20px;\n      padding-right: ',
          ';\n      padding-left: ',
          ';\n      border-bottom: 1px solid ',
          ';\n      text-align: ',
          ';\n      position: relative;\n      cursor: pointer;\n\n      &.active {\n        background-color: ',
          ';\n      }\n\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .isoAvatar {\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n        flex-shrink: 0;\n        overflow: hidden;\n        ',
          ';\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoContactName {\n        h3 {\n          font-size: 15px;\n        }\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ',
          ';\n          font-size: 12px;\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ',
          ';\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 20px;\n        right: ',
          ';\n        left: ',
          ';\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ',
          ';\n        ',
          ';\n\n        &:hover {\n          color: ',
          ';\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      line-height: inherit;\n      padding: 30px 0;\n    }\n  }\n',
        ]);
        return (
          (q = function() {
            return n;
          }),
          n
        );
      }
      var k = N.c.div(
          q(),
          Object(C.palette)('secondary', 2),
          Object(C.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '35px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '35px' : 'inherit';
          },
          Object(C.palette)('border', 0),
          Object(O.b)('none'),
          Object(O.a)(),
          Object(O.c)(),
          Object(C.palette)('border', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '20px' : '35px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '35px' : '20px';
          },
          Object(C.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(C.palette)('secondary', 1),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '15px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '15px' : 'inherit';
          },
          Object(O.a)('50%'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '20px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '20px' : 'inherit';
          },
          Object(C.palette)('secondary', 2),
          Object(C.palette)('grayscale', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '5px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '5px' : 'inherit';
          },
          Object(C.palette)('grayscale', 0),
          Object(O.c)(),
          Object(C.palette)('primary', 0),
          Object(C.palette)('grayscale', 0)
        ),
        z = Object(E.a)(k),
        I = t(763);
      var B = (function(n) {
        function e(n) {
          var t;
          return (
            Object(m.a)(this, e),
            ((t = Object(u.a)(
              this,
              Object(p.a)(e).call(this, n)
            )).singleContact = t.singleContact.bind(Object(f.a)(t))),
            (t.onChange = t.onChange.bind(Object(f.a)(t))),
            (t.state = { search: '' }),
            t
          );
        }
        return (
          Object(h.a)(e, n),
          Object(d.a)(e, [
            {
              key: 'singleContact',
              value: function(n) {
                var e = this.props,
                  t = e.seectedId,
                  a = e.deleteContact,
                  i = e.changeContact,
                  r = t === n.id ? 'active' : '';
                return o.a.createElement(
                  'div',
                  {
                    key: n.id,
                    className: ''.concat(r, ' isoSingleContact'),
                    onClick: function() {
                      return i(n.id);
                    },
                  },
                  o.a.createElement(
                    'div',
                    { className: 'isoAvatar' },
                    n.avatar
                      ? o.a.createElement('img', { alt: '#', src: n.avatar })
                      : ''
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'isoContactName' },
                    o.a.createElement('h3', null, n.name ? n.name : 'No Name')
                  ),
                  o.a.createElement(w, { deleteContact: a, contact: n })
                );
              },
            },
            {
              key: 'onChange',
              value: function(n) {
                this.setState({ search: n.target.value });
              },
            },
            {
              key: 'render',
              value: function() {
                var n = this,
                  e = this.state.search,
                  t = (function(n, e) {
                    return (e = e.toUpperCase())
                      ? n.filter(function(n) {
                          return n.name.toUpperCase().includes(e);
                        })
                      : n;
                  })(this.props.contacts, e);
                return o.a.createElement(
                  z,
                  { className: 'isoContactListWrapper' },
                  o.a.createElement(b.b, {
                    placeholder: this.context.intl.formatMessage({
                      id: 'contactlist.searchContacts',
                    }),
                    value: e,
                    onChange: this.onChange,
                    className: 'isoSearchBar',
                  }),
                  t && t.length > 0
                    ? o.a.createElement(
                        'div',
                        { className: 'isoContactList' },
                        o.a.createElement(
                          I.a,
                          {
                            className: 'contactListScrollbar',
                            style: { height: 'calc(100vh - 200px)' },
                          },
                          t.map(function(e) {
                            return n.singleContact(e);
                          })
                        )
                      )
                    : o.a.createElement(
                        'span',
                        { className: 'isoNoResultMsg' },
                        o.a.createElement(x.a, {
                          id: 'Component.contacts.noOption',
                        })
                      )
                );
              },
            },
          ]),
          e
        );
      })(r.Component);
      function L() {
        var n = Object(j.a)([
          '\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n    flex-shrink: 0;\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin-bottom: 20px;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 120px;\n      height: 120px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      ',
          ';\n\n      .avatar-uploader {\n        width: 100%;\n        height: 100%;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ',
          ';\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ',
          ';\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n        text-align: ',
          ';\n        min-width: 80px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ',
          ';\n          margin-left: ',
          ';\n          padding-right: ',
          ';\n          padding-left: ',
          ";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ",
          ';\n          left: ',
          ';\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ',
          ';\n        line-height: 1.5;\n        margin: 0;\n        text-align: ',
          ';\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ',
          ';\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ',
          ';\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ',
          ';\n        ',
          ';\n        ',
          ';\n\n        &:focus {\n          border-color: ',
          ';\n          ',
          ';\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ',
          ';\n        }\n\n        &::-webkit-input-placeholder {\n          color: ',
          ';\n        }\n\n        &:-moz-placeholder {\n          color: ',
          ';\n        }\n\n        &::-moz-placeholder {\n          color: ',
          ';\n        }\n        &:-ms-input-placeholder {\n          color: ',
          ';\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ',
          ';\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ',
          ';\n        outline: 0 !important;\n        background-color: #ffffff;\n        ',
          ';\n        ',
          ';\n        ',
          ';\n\n        &:focus {\n          border-color: ',
          ';\n          ',
          ';\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ',
          ';\n        }\n\n        &::-webkit-input-placeholder {\n          color: ',
          ';\n        }\n\n        &:-moz-placeholder {\n          color: ',
          ';\n        }\n\n        &::-moz-placeholder {\n          color: ',
          ';\n        }\n        &:-ms-input-placeholder {\n          color: ',
          ';\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      B.contextTypes = { intl: y.PropTypes.object.isRequired };
      var M = N.c.div(
          L(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '50px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '50px' : 'inherit';
          },
          Object(O.a)('5px'),
          Object(C.palette)('text', 0),
          Object(C.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '15px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '15px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '10px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '10px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          Object(C.palette)('text', 2),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(C.palette)('text', 2),
          Object(C.palette)('border', 0),
          Object(O.b)('none'),
          Object(O.a)('3px'),
          Object(O.c)(),
          Object(C.palette)('primary', 0),
          Object(O.b)('0 0 0 2px rgba(68, 130, 255, 0.2)'),
          Object(C.palette)('primary', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('text', 2),
          Object(C.palette)('border', 0),
          Object(O.b)('none'),
          Object(O.a)('3px'),
          Object(O.c)(),
          Object(C.palette)('primary', 0),
          Object(O.b)('0 0 0 2px rgba(68, 130, 255, 0.2)'),
          Object(C.palette)('primary', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0),
          Object(C.palette)('grayscale', 0)
        ),
        S = Object(E.a)(M),
        A = function(n) {
          var e = n.contact,
            t = n.otherAttributes,
            a = e.name ? e.name : 'No Name',
            i = [];
          return (
            t.forEach(function(n) {
              var t = e[n.value];
              t &&
                i.push(
                  o.a.createElement(
                    'div',
                    { className: 'isoContactCardInfos', key: n.value },
                    o.a.createElement(
                      'p',
                      { className: 'isoInfoLabel' },
                      ''.concat(n.title)
                    ),
                    o.a.createElement('p', { className: 'isoInfoDetails' }, t)
                  )
                );
            }),
            o.a.createElement(
              S,
              { className: 'isoContactCard' },
              o.a.createElement(
                'div',
                { className: 'isoContactCardHead' },
                o.a.createElement(
                  'div',
                  { className: 'isoPersonImage' },
                  e.avatar
                    ? o.a.createElement('img', { alt: '#', src: e.avatar })
                    : ''
                ),
                o.a.createElement('h1', { className: 'isoPersonName' }, a)
              ),
              o.a.createElement(
                'div',
                { className: 'isoContactInfoWrapper' },
                i
              )
            )
          );
        },
        D = t(21),
        G = t(1079);
      t(2163);
      function H(n) {
        return 'image/jpeg' === n.type
          ? n.size / 1024 / 1024 < 2
            ? (Object(v.a)('success', 'Image uploaded successfully!', ''), !0)
            : (Object(v.a)('error', 'Image must smaller than 2MB!', ''), !1)
          : (Object(v.a)('error', 'You can only upload JPG file!', ''), !1);
      }
      var W = function(n) {
          var e = n.contact,
            t = n.otherAttributes,
            i = n.editContact,
            r = e.name ? e.name : 'No Name',
            c = [];
          return (
            []
              .concat(
                [
                  { value: 'firstName', title: 'First Name' },
                  { value: 'lastName', title: 'Last Name' },
                ],
                Object(D.a)(t)
              )
              .forEach(function(n) {
                var t = e[n.value],
                  a = function(t) {
                    e[n.value] = t.target.value;
                    var a = '';
                    e.firstName && (a = ''.concat(e.firstName, ' ')),
                      e.lastName && (a = ''.concat(a).concat(e.lastName)),
                      (e.name = a),
                      i(e);
                  };
                'note' === n.value
                  ? c.push(
                      o.a.createElement(
                        'div',
                        { className: 'isoContactCardInfos', key: n.value },
                        o.a.createElement(
                          'p',
                          { className: 'isoInfoLabel' },
                          ''.concat(n.title)
                        ),
                        o.a.createElement(b.c, {
                          placeholder: ''.concat(n.title),
                          value: t,
                          type: 'textarea',
                          rows: 5,
                          onChange: a,
                        })
                      )
                    )
                  : c.push(
                      o.a.createElement(
                        'div',
                        { className: 'isoContactCardInfos', key: n.value },
                        o.a.createElement(
                          'p',
                          { className: 'isoInfoLabel' },
                          ''.concat(n.title)
                        ),
                        o.a.createElement(b.d, {
                          placeholder: ''.concat(n.title),
                          value: t,
                          onChange: a,
                        })
                      )
                    );
              }),
            o.a.createElement(
              S,
              { className: 'isoContactCard' },
              o.a.createElement(
                'div',
                { className: 'isoContactCardHead' },
                o.a.createElement(
                  'div',
                  { className: 'isoPersonImage' },
                  o.a.createElement(
                    G.a,
                    {
                      className: 'avatar-uploader',
                      name: 'avatar',
                      showUploadList: !1,
                      beforeUpload: H,
                      action: '',
                    },
                    e.avatar
                      ? o.a.createElement('img', {
                          src: e.avatar,
                          alt: '',
                          className: 'avatar',
                        })
                      : '',
                    o.a.createElement(a.a, {
                      type: 'plus',
                      className: 'avatar-uploader-trigger',
                    })
                  )
                ),
                o.a.createElement('h1', { className: 'isoPersonName' }, r)
              ),
              o.a.createElement(
                'div',
                { className: 'isoContactInfoWrapper' },
                c
              )
            )
          );
        },
        P = [
          { title: 'Mobile', value: 'mobile', type: 'phoneNumber' },
          { title: 'Home', value: 'home', type: 'phoneNumber' },
          { title: 'Company', value: 'company', type: 'company' },
          { title: 'Work', value: 'work', type: 'phoneNumber' },
          { title: 'Notes', value: 'note', type: 'paragraph' },
        ];
      JSON.parse(
        '[{\n  "id": 22143,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",\n  "firstName": "Benjamin",\n  "lastName": "Jacobi",\n  "name": "Benjamin Jacobi",\n  "mobile": "(023) 302-3161 x60451",\n  "home": "(136) 403-0476 x8388",\n  "company": "Casper Inc",\n  "work": "(399) 506-9438",\n  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."\n}, {\n  "id": 17385,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",\n  "firstName": "Clementina",\n  "lastName": "Hahn",\n  "name": "Clementina Hahn",\n  "mobile": "686.292.3548 x7219",\n  "home": "447-343-4864 x414",\n  "company": "Marquardt Inc",\n  "work": "299-721-6828 x856",\n  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."\n}, {\n  "id": 85838,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",\n  "firstName": "Clinton",\n  "lastName": "Goyette",\n  "name": "Clinton Goyette",\n  "mobile": "(913) 127-1563 x082",\n  "home": "(843) 501-8804",\n  "company": "Feil - Goodwin",\n  "work": "732.111.8883",\n  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."\n}, {\n  "id": 2791,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",\n  "firstName": "Forrest",\n  "lastName": "Klein",\n  "name": "Forrest Klein",\n  "mobile": "174-628-5802 x8324",\n  "home": "(047) 141-0247",\n  "company": "Wilkinson - Howe",\n  "work": "1-624-238-9252",\n  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."\n}, {\n  "id": 67493,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/salleedesign/128.jpg",\n  "firstName": "General",\n  "lastName": "Kub",\n  "name": "General Kub",\n  "mobile": "779.482.9824",\n  "home": "(698) 858-0337 x3273",\n  "company": "Moen Group",\n  "work": "881.768.7522",\n  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."\n}, {\n  "id": 75593,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg",\n  "firstName": "Lon",\n  "lastName": "Wunsch",\n  "name": "Lon Wunsch",\n  "mobile": "(792) 607-6366 x88975",\n  "home": "447.683.3799 x38668",\n  "company": "Johns, Gibson and Schinner",\n  "work": "(735) 859-7674",\n  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."\n}, {\n  "id": 90096,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",\n  "firstName": "Mabelle",\n  "lastName": "Kling",\n  "name": "Mabelle Kling",\n  "mobile": "499-736-0779 x2409",\n  "home": "1-910-529-7393 x222",\n  "company": "Bins, Murray and Ryan",\n  "work": "905.098.6372",\n  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."\n}, {\n  "id": 15783,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg",\n  "firstName": "Maryse",\n  "lastName": "Koss",\n  "name": "Maryse Koss",\n  "mobile": "668-920-9662 x610",\n  "home": "075.864.1819 x8265",\n  "company": "Smitham Inc",\n  "work": "468.534.0931",\n  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."\n}, {\n  "id": 42122,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",\n  "firstName": "Maude",\n  "lastName": "Grant",\n  "name": "Maude Grant",\n  "mobile": "1-077-505-0657",\n  "home": "062.968.4841 x62748",\n  "company": "Thiel, Bauch and Mosciski",\n  "work": "1-318-593-2619 x206",\n  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."\n}, {\n  "id": 5869,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/silv3rgvn/128.jpg",\n  "firstName": "Orrin",\n  "lastName": "Harris",\n  "name": "Orrin Harris",\n  "mobile": "871.567.4877",\n  "home": "(466) 574-3352",\n  "company": "Haag Group",\n  "work": "1-908-422-4964",\n  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."\n}]'
      );
      function K() {
        var n = Object(j.a)([
          '\n  padding: 50px 35px;\n  display: flex;\n  ',
          ' @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 30px;\n  }\n\n  .isoContactListBar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    background: #ffffff;\n    border: 1px solid ',
          ';\n    width: 320px;\n    overflow: hidden;\n    overflow-y: auto;\n\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      margin-bottom: 20px;\n      min-width: 0 !important;\n      max-width: 100% !important;\n      flex: 0 !important;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 270px !important;\n      flex: 0 0 270px !important;\n    }\n  }\n\n  .isoContactBoxWrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    background-color: #ffffff;\n    border: 1px solid ',
          ';\n    border-left: ',
          ';\n    border-right: ',
          ';\n    position: relative;\n\n    .isoContactBox {\n      width: 100%;\n      height: 100%;\n    }\n\n    .contactBoxScrollbar {\n      height: calc(100vh - 225px);\n    }\n\n    .isoContactControl {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 30px;\n      background-color: #ffffff;\n\n      @media only screen and (max-width: 767px) {\n        padding: 30px 20px;\n      }\n\n      button:not(.isoAddContactBtn) {\n        font-size: 16px;\n        color: ',
          ';\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ',
          ';\n        margin-left: ',
          ';\n        margin-right: ',
          ';\n        cursor: pointer;\n        ',
          ';\n        ',
          ';\n\n        i {\n          width: 100%;\n        }\n\n        span {\n          display: none;\n        }\n\n        &:first-child {\n          margin-left: ',
          ';\n          margin-right: ',
          ';\n        }\n\n        &:hover {\n          color: ',
          ';\n          background-color: ',
          ';\n        }\n      }\n\n      .isoAddContactBtn {\n        background-color: ',
          ';\n        border: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-left: ',
          ';\n        margin-right: ',
          ';\n        ',
          ';\n        ',
          ';\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ',
          ';\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (K = function() {
            return n;
          }),
          n
        );
      }
      var T = N.c.div(
          K(),
          '',
          Object(C.palette)('border', 0),
          Object(C.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          Object(C.palette)('secondary', 0),
          Object(C.palette)('border', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-1px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-1px' : 'inherit';
          },
          Object(O.a)(),
          Object(O.c)(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          Object(C.palette)('primary', 0),
          Object(C.palette)('grayscale', 7),
          Object(C.palette)('primary', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : 'auto';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : 'inherit';
          },
          Object(O.a)('3px'),
          Object(O.c)(),
          Object(C.palette)('primary', 1)
        ),
        J = Object(E.a)(T);
      t.d(e, 'default', function() {
        return _;
      });
      var U = l.a.changeContact,
        R = l.a.addContact,
        Q = l.a.editContact,
        F = l.a.deleteContact,
        V = l.a.viewChange,
        Y = i.a.Content;
      function _() {
        var n = Object(c.d)(function(n) {
            return n.Contacts;
          }),
          e = n.contacts,
          t = n.seectedId,
          r = n.editView,
          l = Object(c.c)(),
          m = t
            ? e.filter(function(n) {
                return n.id === t;
              })[0]
            : null;
        return o.a.createElement(
          J,
          { className: 'isomorphicContacts', style: { background: 'none' } },
          o.a.createElement(
            'div',
            { className: 'isoContactListBar' },
            o.a.createElement(B, {
              contacts: e,
              seectedId: t,
              changeContact: function(n) {
                return l(U(n));
              },
              deleteContact: function(n) {
                return l(F(n));
              },
            })
          ),
          o.a.createElement(
            i.a,
            { className: 'isoContactBoxWrapper' },
            m
              ? o.a.createElement(
                  Y,
                  { className: 'isoContactBox' },
                  o.a.createElement(
                    'div',
                    { className: 'isoContactControl' },
                    o.a.createElement(
                      s.b,
                      {
                        type: 'default',
                        onClick: function() {
                          return l(V(!r));
                        },
                      },
                      r
                        ? o.a.createElement(a.a, { type: 'check' })
                        : o.a.createElement(a.a, { type: 'edit' })
                    ),
                    o.a.createElement(w, {
                      deleteContact: function(n) {
                        return l(F(n));
                      },
                      contact: m,
                    }),
                    o.a.createElement(
                      s.b,
                      {
                        type: 'primary',
                        onClick: function() {
                          return l(R());
                        },
                        className: 'isoAddContactBtn',
                      },
                      o.a.createElement(x.a, {
                        id: 'contactlist.addNewContact',
                      })
                    )
                  ),
                  o.a.createElement(
                    I.a,
                    { className: 'contactBoxScrollbar' },
                    r
                      ? o.a.createElement(W, {
                          contact: m,
                          editContact: function(n) {
                            return l(Q(n));
                          },
                          otherAttributes: P,
                        })
                      : o.a.createElement(A, { contact: m, otherAttributes: P })
                  )
                )
              : o.a.createElement(
                  'div',
                  { className: 'isoContactControl' },
                  o.a.createElement(
                    s.b,
                    {
                      type: 'primary',
                      onClick: function() {
                        return l(R());
                      },
                      className: 'isoAddContactBtn',
                    },
                    o.a.createElement(x.a, { id: 'contactlist.addNewContact' })
                  )
                )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=114.696aabd1.chunk.js.map
