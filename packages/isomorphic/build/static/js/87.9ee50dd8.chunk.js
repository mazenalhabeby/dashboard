(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [87],
  {
    1245: function(n, e, t) {
      'use strict';
      t(855);
      var o = t(674);
      e.a = o.a;
    },
    1868: function(n, e, t) {
      'use strict';
      (function(n) {
        var o = t(107),
          a = t(0),
          i = t.n(a),
          r = t(933),
          l = t.n(r),
          c = new Set(),
          p = function() {
            return c.forEach(function(n) {
              return n();
            });
          };
        e.a = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.throttleMs,
            a = void 0 === t ? 100 : t,
            r = i.a.useState({
              width: n.browser && window.innerWidth,
              height: n.browser && window.innerHeight,
            }),
            d = Object(o.a)(r, 2),
            s = d[0],
            m = d[1],
            u = l()(function() {
              m({
                width: n.browser && window.innerWidth,
                height: n.browser && window.innerHeight,
              });
            }, a);
          return (
            i.a.useEffect(function() {
              return (
                0 === c.size && window.addEventListener('resize', p, !0),
                c.add(u),
                function() {
                  c.delete(u),
                    0 === c.size && window.removeEventListener('resize', p, !0);
                }
              );
            }, []),
            s
          );
        };
      }.call(this, t(139)));
    },
    1870: function(n, e, t) {
      n.exports = t.p + 'static/media/bucket.545fd26b.svg';
    },
    2664: function(n, e, t) {
      'use strict';
      t.r(e);
      t(836);
      var o = t(837),
        a = t(0),
        i = t.n(a),
        r = t(74),
        l = t(1868),
        c = t(68),
        p = t(180),
        d = t(560),
        s = function(n) {
          var e = n.config,
            t = n.changeTheme,
            o = n.selectedId,
            a = e.id,
            r = e.label,
            l = e.options;
          return i.a.createElement(
            'div',
            { className: 'themeSwitchBlock' },
            i.a.createElement('h4', null, i.a.createElement(d.a, { id: r })),
            i.a.createElement(
              'div',
              { className: 'themeSwitchBtnWrapper' },
              l.map(function(n) {
                var e = n.themeName,
                  r = n.buttonColor,
                  l = e === o ? 'selectedTheme' : '';
                return i.a.createElement('button', {
                  type: 'button',
                  key: e,
                  onClick: function() {
                    t(a, e);
                  },
                  className: l,
                  style: { backgroundColor: r },
                });
              })
            )
          );
        },
        m = t(181),
        u = t(249),
        h = t(250),
        f = t.n(h),
        b = t(251),
        x = t.n(b),
        g = t(252),
        y = t.n(g),
        w = t(253),
        j = t.n(w),
        v = t(254),
        O = t.n(v),
        k = {
          defaultLanguage: u.a,
          options: [
            { languageId: 'english', locale: 'en', text: 'English', icon: f.a },
            { languageId: 'chinese', locale: 'zh', text: 'Chinese', icon: x.a },
            { languageId: 'spanish', locale: 'es', text: 'Spanish', icon: y.a },
            { languageId: 'french', locale: 'fr', text: 'French', icon: j.a },
            { languageId: 'italian', locale: 'it', text: 'Italian', icon: O.a },
          ],
        };
      var E = k,
        z = m.a.changeLanguage;
      function C() {
        var n = Object(r.d)(function(n) {
            return n.LanguageSwitcher;
          }).language,
          e = Object(r.c)();
        return i.a.createElement(
          'div',
          { className: 'themeSwitchBlock' },
          i.a.createElement(
            'h4',
            null,
            i.a.createElement(d.a, { id: 'languageSwitcher.label' })
          ),
          i.a.createElement(
            'div',
            { className: 'themeSwitchBtnWrapper' },
            E.options.map(function(t) {
              var o = t.languageId,
                a = t.icon,
                r =
                  o === n.languageId
                    ? 'selectedTheme languageSwitch'
                    : 'languageSwitch';
              return i.a.createElement(
                'button',
                {
                  type: 'button',
                  className: r,
                  key: o,
                  onClick: function() {
                    e(z(o));
                  },
                },
                i.a.createElement('img', { src: a, alt: 'flag' })
              );
            })
          )
        );
      }
      var D = t(84),
        N = {
          changeThemes: {
            id: 'changeThemes',
            label: 'themeSwitcher',
            defaultTheme: D.b.theme,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#000',
                textColor: '#323332',
              },
              {
                themeName: 'theme2',
                buttonColor: '#000',
                textColor: '#323332',
              },
            ],
          },
          topbarTheme: {
            id: 'topbarTheme',
            label: 'themeSwitcher.Topbar',
            defaultTheme: D.b.topbar,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
              {
                themeName: 'theme1',
                buttonColor: '#000',
                backgroundColor: '#000',
                textColor: '#ffffff',
              },
            ],
          },
          sidebarTheme: {
            id: 'sidebarTheme',
            label: 'themeSwitcher.Sidebar',
            defaultTheme: D.b.sidebar,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#fff',
                backgroundColor: void 0,
                textColor: '#788195',
              },
              {
                themeName: 'theme1',
                buttonColor: '#000',
                backgroundColor: '#000',
                textColor: '#ffffff',
              },
            ],
          },
          layoutTheme: {
            id: 'layoutTheme',
            label: 'themeSwitcher.Background',
            defaultTheme: D.b.layout,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#fff',
                backgroundColor: '#F1F3F6',
                textColor: void 0,
              },
              {
                themeName: 'theme1',
                buttonColor: '#000',
                backgroundColor: '#000',
                textColor: '#323232',
              },
            ],
          },
        };
      var I = N,
        P = t(1870),
        T = t.n(P),
        L = t(28),
        A = t(22),
        S = t(6),
        B = t(35),
        M = t(59);
      function W() {
        var n = Object(L.a)([
          '\n  background-color: #ffffff;\n  width: 340px;\n  height: calc(100% - 70px);\n  padding: 0 0 50px;\n  flex-shrink: 0;\n  position: fixed;\n  top: 70px;\n  right: ',
          ';\n  left: ',
          ';\n  z-index: 1001;\n  ',
          ';\n  ',
          ';\n\n  @media only screen and (max-width: 767px) {\n    width: 270px;\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  &.active {\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  .switcher {\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  .componentTitleWrapper {\n    padding: 25px 15px;\n    height: 70px;\n    background-color: ',
          ';\n\n    .componentTitle {\n      font-size: 21px;\n      font-weight: 700;\n      color: #fff;\n      line-height: 1;\n      width: 100%;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .SwitcherBlockWrapper {\n    width: 100%;\n    height: 100%;\n    padding-bottom: 105px;\n    overflow: hidden;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n\n    .themeSwitchBlock {\n      width: 100%;\n      display: -webkit-flex;\n      display: -ms-flex;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n      margin-top: 30px;\n\n      h4 {\n        font-size: 14px;\n        font-weight: 700;\n        color: ',
          ';\n        line-height: 1.3;\n        margin-bottom: 0;\n        padding: 0 15px;\n        text-transform: uppercase;\n      }\n\n      .themeSwitchBtnWrapper {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 15px 20px;\n\n        button {\n          width: 20px;\n          height: 20px;\n          display: flex;\n          margin: ',
          ';\n          border: 1px solid #e4e4e4;\n          outline: 0;\n          padding: 0;\n          background: none;\n          justify-content: center;\n          position: relative;\n          cursor: pointer;\n          ',
          ';\n\n          &.languageSwitch {\n            border: 0;\n            width: 30px;\n            height: auto;\n\n            &.selectedTheme {\n              &:before,\n              &:after {\n                top: 2px;\n                left: ',
          ';\n                right: ',
          ";\n              }\n            }\n          }\n\n          img {\n            width: 100%;\n          }\n\n          &.selectedTheme {\n            &:before {\n              content: '';\n              width: 6px;\n              height: 6px;\n              display: -webkit-inline-flex;\n              display: -ms-inline-flex;\n              display: inline-flex;\n              background-color: ",
          ';\n              position: absolute;\n              top: -2px;\n              left: ',
          ';\n              right: ',
          ';\n              ',
          ";\n            }\n\n            &:after {\n              content: '';\n              width: 6px;\n              height: 6px;\n              display: -webkit-inline-flex;\n              display: -ms-inline-flex;\n              display: inline-flex;\n              border: 1px solid ",
          ';\n              background-color: ',
          ';\n              position: absolute;\n              top: -2px;\n              left: ',
          ';\n              right: ',
          ';\n              -webkit-animation: selectedAnimation 1.2s infinite ease-in-out;\n              animation: selectedAnimation 1.2s infinite ease-in-out;\n              ',
          ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .switcherToggleBtn {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #ffffff;\n    outline: 0;\n    border: 0;\n    position: absolute;\n    text-align: center;\n    top: 200px;\n    left: ',
          ';\n    right: ',
          ';\n    cursor: pointer;\n    border-radius: ',
          ';\n    ',
          ';\n\n    img {\n      width: 23px;\n    }\n  }\n\n  .purchaseBtnWrapper {\n    width: 100%;\n    padding: 25px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 0px;\n    position: absolute;\n    background-color: #ffffff;\n\n    .purchaseBtn {\n      width: calc(100% - 50px);\n      height: 42px;\n      font-size: 14px;\n      font-weight: 700;\n      color: #fff;\n      text-decoration: none;\n      background-color: ',
          ';\n      text-transform: uppercase;\n      line-height: 1;\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      ',
          ';\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n    }\n  }\n\n  @-webkit-keyframes selectedAnimation {\n    0% {\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8);\n      opacity: 0.5;\n    }\n    100% {\n      -webkit-transform: scale(2.4);\n      transform: scale(2.4);\n      opacity: 0;\n    }\n  }\n  @keyframes selectedAnimation {\n    0% {\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8);\n      opacity: 0.5;\n    }\n    100% {\n      -webkit-transform: scale(2.4);\n      transform: scale(2.4);\n      opacity: 0;\n    }\n  }\n',
        ]);
        return (
          (W = function() {
            return n;
          }),
          n
        );
      }
      var H = A.c.div(
          W(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-340px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-340px' : 'inherit';
          },
          Object(B.c)(),
          Object(B.b)('-1px 0 5px rgba(0,0,0,0.25)'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-270px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-270px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-98px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-98px';
          },
          Object(S.palette)('text', 0),
          Object(S.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 10px' : '0 10px 0 0';
          },
          Object(B.a)('3px'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-3px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-3px' : 'inherit';
          },
          Object(S.palette)('color', 13),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-2px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-2px' : 'inherit';
          },
          Object(B.a)('50%'),
          Object(S.palette)('color', 13),
          Object(S.palette)('color', 13),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-2px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-2px' : 'inherit';
          },
          Object(B.a)('50%'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-50px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-50px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 3px 3px 0' : '3px 0 0 3px';
          },
          Object(B.b)('-2px 0 5px rgba(0,0,0,0.2)'),
          Object(S.palette)('primary', 0),
          Object(B.a)('5px'),
          Object(B.c)(),
          Object(S.palette)('primary', 13)
        ),
        F = Object(M.a)(H),
        R = p.a.switchActivation,
        U = p.a.changeTheme;
      function _() {
        var n = Object(r.d)(function(n) {
            return n.ThemeSwitcher;
          }),
          e = n.isActivated,
          t = n.topbarTheme,
          o = n.sidebarTheme,
          a = n.layoutTheme,
          l = Object(r.c)(),
          c = { background: o.buttonColor };
        return i.a.createElement(
          F,
          { className: e ? 'isoThemeSwitcher active' : 'isoThemeSwitcher' },
          i.a.createElement(
            'div',
            { className: 'componentTitleWrapper', style: c },
            i.a.createElement(
              'h3',
              { className: 'componentTitle' },
              i.a.createElement(d.a, { id: 'themeSwitcher.settings' })
            )
          ),
          i.a.createElement(
            'div',
            { className: 'SwitcherBlockWrapper' },
            i.a.createElement(s, {
              config: I.sidebarTheme,
              changeTheme: function(n, e) {
                return l(U(n, e));
              },
              selectedId: o.themeName,
            }),
            i.a.createElement(s, {
              config: I.topbarTheme,
              changeTheme: function(n, e) {
                return l(U(n, e));
              },
              selectedId: t.themeName,
            }),
            i.a.createElement(s, {
              config: I.layoutTheme,
              changeTheme: function(n, e) {
                return l(U(n, e));
              },
              selectedId: a.themeName,
            }),
            i.a.createElement(C, null)
          ),
          i.a.createElement(
            'button',
            {
              type: 'primary',
              className: 'switcherToggleBtn',
              style: c,
              onClick: function() {
                l(R());
              },
            },
            i.a.createElement('img', { src: T.a, alt: 'bucket' })
          )
        );
      }
      var V = {
          siteName: 'LOP Dashboard',
          siteIcon: 'ion-flash',
          footerText: ' @ '.concat(
            new Date().getFullYear(),
            ' Created by League of Pharaohs'
          ),
          enableAnimatedRoute: !1,
          apiUrl: 'http://yoursite.com/api/',
          google: { analyticsKey: 'UA-xxxxxxxxx-1' },
          dashboard: '/dashboard',
        },
        Q = [
          {
            key: 'my-profile',
            label: 'sidebar.profile',
            leftIcon: 'ion-person',
          },
          {
            key: 'blank_page',
            label: 'sidebar.buylop',
            leftIcon: 'ion-document',
          },
          {
            key: 'invoice',
            label: 'sidebar.invoice',
            leftIcon: 'ion-clipboard',
          },
          {
            key: 'calendar',
            label: 'sidebar.calendar',
            leftIcon: 'ion-calendar',
          },
          { key: 'notes', label: 'sidebar.notes', leftIcon: 'ion-ios-paper' },
          {
            key: 'todo',
            label: 'sidebar.todos',
            leftIcon: 'ion-android-checkbox-outline',
          },
          {
            key: 'pages',
            label: 'sidebar.pages',
            leftIcon: 'ion-document-text',
            children: [
              { key: '404', label: 'sidebar.404', withoutDashboard: !0 },
              { key: '500', label: 'sidebar.500', withoutDashboard: !0 },
              { key: 'signin', label: 'sidebar.signIn', withoutDashboard: !0 },
              { key: 'signup', label: 'sidebar.signUp', withoutDashboard: !0 },
              {
                key: 'forgotpassword',
                label: 'sidebar.forgotPw',
                withoutDashboard: !0,
              },
              {
                key: 'resetpassword',
                label: 'sidebar.resetPw',
                withoutDashboard: !0,
              },
            ],
          },
        ],
        G = t(763),
        q = t(1245),
        K = t(199),
        X = function(n) {
          var e = n.collapsed;
          return i.a.createElement(
            'div',
            { className: 'isoLogoWrapper' },
            e
              ? i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(
                    'h3',
                    null,
                    i.a.createElement(
                      K.b,
                      { to: '/dashboard' },
                      i.a.createElement('i', { className: V.siteIcon })
                    )
                  )
                )
              : i.a.createElement(
                  'h3',
                  null,
                  i.a.createElement(K.b, { to: '/dashboard' }, V.siteName)
                )
          );
        };
      function J() {
        var n = Object(L.a)([
          '\n  .isomorphicSidebar {\n    z-index: 1000;\n    background: ',
          ';\n    width: 280px;\n    flex: 0 0 280px;\n\n    .scrollarea {\n      height: calc(100vh - 70px);\n    }\n\n    @media only screen and (max-width: 767px) {\n      width: 240px !important;\n      flex: 0 0 240px !important;\n    }\n\n    &.ant-layout-sider-collapsed {\n      @media only screen and (max-width: 767px) {\n        width: 0;\n        min-width: 0 !important;\n        max-width: 0 !important;\n        flex: 0 0 0 !important;\n      }\n    }\n\n    .isoLogoWrapper {\n      height: 70px;\n      background: rgba(0, 0, 0, 0.3);\n      margin: 0;\n      padding: 0 10px;\n      text-align: center;\n      overflow: hidden;\n      ',
          ';\n\n      h3 {\n        a {\n          font-size: 19px;\n          font-weight: 500;\n          line-height: 70px;\n          letter-spacing: 3px;\n          text-transform: uppercase;\n          color: #fde047;\n          display: block;\n          text-decoration: none;\n        }\n      }\n    }\n\n    &.ant-layout-sider-collapsed {\n      .isoLogoWrapper {\n        padding: 0;\n\n        h3 {\n          a {\n            font-size: 27px;\n            font-weight: 500;\n            letter-spacing: 0;\n          }\n        }\n      }\n    }\n\n    .isoDashboardMenu {\n      padding-top: 45px;\n      padding-bottom: 35px;\n      padding-left: 12px;\n      padding-right: 10px;\n      background: transparent;\n\n      a {\n        text-decoration: none;\n        font-weight: 400;\n      }\n\n      .ant-menu-item {\n        width: 95%;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n        align-items: center;\n        padding: 0 24px;\n        margin-top: 40px;\n        margin-bottom: 40px;\n        border-radius: 20px;\n      }\n\n      .ant-menu-item::before {\n        color: #1890ff;\n      }\n\n      .isoMenuHolder {\n        display: flex;\n        align-items: center;\n\n        i {\n          font-size: 19px;\n          color: inherit;\n          margin: ',
          ';\n          width: 8px;\n          ',
          ';\n        }\n      }\n\n      .anticon {\n        font-size: 18px;\n        margin-right: 30px;\n        color: inherit;\n        ',
          ';\n      }\n\n      .nav-text {\n        font-size: 20px;\n        color: inherit;\n        font-weight: 500;\n        ',
          ';\n      }\n\n      .ant-menu-item-selected {\n        background-color: #fde047;\n        padding-bottom: 33px;\n        padding-top: 33px;\n        border-radius: 40px !important;\n\n        .anticon {\n          color: #fff;\n        }\n\n        i {\n          color: #2d3446;\n          font-size: 35px;\n        }\n\n        .nav-text {\n          color: #2d3446;\n          font-size: 23px;\n          margin-left: 10px;\n        }\n      }\n\n      > li {\n        &:hover {\n          i,\n          .nav-text {\n            color: #ffffff;\n          }\n        }\n      }\n    }\n\n    .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n      background: ',
          ';\n    }\n\n    .ant-menu-submenu-inline,\n    .ant-menu-submenu-vertical {\n      > .ant-menu-submenu-title {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 0 24px;\n\n        > span {\n          display: flex;\n          align-items: center;\n        }\n\n        .ant-menu-submenu-arrow {\n          left: ',
          ';\n          right: ',
          ';\n\n          &:before,\n          &:after {\n            width: 8px;\n            ',
          ';\n          }\n\n          &:before {\n            transform: rotate(-45deg) translateX(3px);\n          }\n\n          &:after {\n            transform: rotate(45deg) translateX(-3px);\n          }\n\n          ',
          ';\n        }\n\n        &:hover {\n          .ant-menu-submenu-arrow {\n            &:before,\n            &:after {\n              color: #ffffff;\n            }\n          }\n        }\n      }\n\n      .ant-menu-inline,\n      .ant-menu-submenu-vertical {\n        > li:not(.ant-menu-item-group) {\n          padding-left: ',
          ';\n          padding-right: ',
          ';\n          font-size: 13px;\n          font-weight: 400;\n          margin: 0;\n\n          ',
          ';\n\n          &:hover {\n            a {\n              color: #ffffff !important;\n            }\n          }\n        }\n\n        .ant-menu-item-group {\n          padding-left: 0;\n\n          .ant-menu-item-group-title {\n            padding-left: 100px !important;\n          }\n          .ant-menu-item-group-list {\n            .ant-menu-item {\n              padding-left: 125px !important;\n            }\n          }\n        }\n      }\n\n      .ant-menu-sub {\n        box-shadow: none;\n        background-color: transparent !important;\n      }\n    }\n\n    &.ant-layout-sider-collapsed {\n      .nav-text {\n        display: none;\n      }\n\n      .ant-menu-submenu-inline > {\n        .ant-menu-submenu-title:after {\n          display: none;\n        }\n      }\n\n      .ant-menu-submenu-vertical {\n        > .ant-menu-submenu-title:after {\n          display: none;\n        }\n\n        .ant-menu-sub {\n          background-color: transparent !important;\n\n          .ant-menu-item {\n            height: 35px;\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var Y = A.c.div(
          J(),
          Object(S.palette)('secondary', 0),
          Object(B.a)(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 30px' : '0 30px 0 0';
          },
          Object(B.c)(),
          Object(B.c)(),
          Object(B.c)(),
          Object(S.palette)('secondary', 5),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '25px' : 'auto';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : '25px';
          },
          Object(B.c)(),
          '',
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0px !important'
              : '74px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '74px !important'
              : '0px !important';
          },
          Object(B.c)()
        ),
        $ = Object(M.a)(Y),
        Z = t(115),
        nn = t(70),
        en = q.a.SubMenu,
        tn = i.a.memo(function(n) {
          var e,
            t = n.singleOption,
            o = n.submenuStyle,
            a = n.submenuColor,
            r = Object(Z.a)(n, [
              'singleOption',
              'submenuStyle',
              'submenuColor',
            ]),
            l = Object(nn.j)(),
            c = t.key,
            p = t.label,
            s = t.leftIcon,
            m = t.children,
            u = '/' === (e = l.url).substr(-1) ? e.substr(0, e.length - 1) : e;
          return m
            ? i.a.createElement(
                en,
                Object.assign(
                  {
                    key: c,
                    title: i.a.createElement(
                      'span',
                      { className: 'isoMenuHolder', style: a },
                      i.a.createElement('i', { className: s }),
                      i.a.createElement(
                        'span',
                        { className: 'nav-text' },
                        i.a.createElement(d.a, { id: p })
                      )
                    ),
                  },
                  r
                ),
                m.map(function(n) {
                  var e = n.withoutDashboard
                    ? '/'.concat(n.key)
                    : ''.concat(u, '/').concat(n.key);
                  return i.a.createElement(
                    q.a.Item,
                    { style: o, key: n.key },
                    i.a.createElement(
                      K.b,
                      { style: a, to: e },
                      i.a.createElement(d.a, { id: n.label })
                    )
                  );
                })
              )
            : i.a.createElement(
                q.a.Item,
                Object.assign({ key: c }, r),
                i.a.createElement(
                  K.b,
                  { to: ''.concat(u, '/').concat(c) },
                  i.a.createElement(
                    'span',
                    { className: 'isoMenuHolder', style: a },
                    i.a.createElement('i', { className: s }),
                    i.a.createElement(
                      'span',
                      { className: 'nav-text' },
                      i.a.createElement(d.a, { id: p })
                    )
                  )
                )
              );
        }),
        on = (q.a.SubMenu, q.a.ItemGroup, o.a.Sider),
        an = c.a.toggleOpenDrawer,
        rn = c.a.changeOpenKeys,
        ln = c.a.changeCurrent,
        cn = c.a.toggleCollapsed;
      function pn() {
        var n = Object(r.c)(),
          e = Object(r.d)(function(n) {
            return n.App;
          }),
          t = e.view,
          o = e.openKeys,
          a = e.collapsed,
          l = e.openDrawer,
          c = e.current,
          p = e.height,
          d = Object(r.d)(function(n) {
            return n.ThemeSwitcher.sidebarTheme;
          });
        var s = function(n) {
            return { sub3: ['sub2'] }[n] || [];
          },
          m = a && !l,
          u = !0 === m ? 'vertical' : 'inline',
          h = { backgroundColor: d.backgroundColor },
          f = { backgroundColor: 'rgba(0,0,0,0.3)', color: d.textColor },
          b = { color: d.textColor };
        return i.a.createElement(
          $,
          null,
          i.a.createElement(
            on,
            {
              trigger: null,
              collapsible: !0,
              collapsed: m,
              width: 240,
              className: 'isomorphicSidebar',
              onMouseEnter: function(e) {
                a && !1 === l && n(an());
              },
              onMouseLeave: function() {
                a && !0 === l && n(an());
              },
              style: h,
            },
            i.a.createElement(X, { collapsed: m }),
            i.a.createElement(
              G.a,
              { style: { height: p - 70 } },
              i.a.createElement(
                q.a,
                {
                  onClick: function(e) {
                    n(ln([e.key])),
                      'MobileView' === t &&
                        setTimeout(function() {
                          n(cn());
                        }, 100);
                  },
                  theme: 'dark',
                  className: 'isoDashboardMenu',
                  mode: u,
                  openKeys: m ? [] : o,
                  selectedKeys: c,
                  onOpenChange: function(e) {
                    var t = e.find(function(n) {
                        return !(o.indexOf(n) > -1);
                      }),
                      a = o.find(function(n) {
                        return !(e.indexOf(n) > -1);
                      }),
                      i = [];
                    t && (i = s(t).concat(t)), a && (i = s(a)), n(rn(i));
                  },
                },
                Q.map(function(n) {
                  return i.a.createElement(tn, {
                    key: n.key,
                    submenuStyle: f,
                    submenuColor: b,
                    singleOption: n,
                  });
                })
              )
            )
          )
        );
      }
      var dn = t(107),
        sn = (t(331), t(935));
      function mn() {
        var n = Object(L.a)([
          '\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  margin: -12px -16px;\n  width: 360px;\n  min-width: 160px;\n  flex-shrink: 0;\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  cursor: pointer;\n  @media only screen and (max-width: 767px) {\n    width: 310px;\n  }\n\n  .isoDropdownHeader {\n    border-bottom: 1px solid #f1f1f1;\n    margin-bottom: 0px;\n    padding: 15px 30px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: ',
          ';\n      text-align: center;\n      text-transform: uppercase;\n      margin: 0;\n    }\n  }\n\n  .isoDropdownBody {\n    width: 100%;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    background-color: ',
          ';\n\n    a {\n      text-decoration: none;\n    }\n\n    .isoDropdownListItem {\n      padding: 15px 30px;\n      flex-shrink: 0;\n      text-decoration: none;\n      display: flex;\n      flex-direction: column;\n      text-decoration: none;\n      text-align: ',
          ';\n      width: 100%;\n      border-bottom: 1px solid ',
          ';\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n\n      .isoListHead {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 5px;\n      }\n\n      h5 {\n        font-size: 13px;\n        font-weight: 500;\n        color: ',
          ';\n        margin-top: 0;\n      }\n\n      p {\n        font-size: 12px;\n        font-weight: 400;\n        color: ',
          ';\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      .isoDate {\n        font-size: 11px;\n        color: ',
          ';\n        flex-shrink: 0;\n      }\n    }\n  }\n\n  .isoViewAllBtn {\n    font-size: 13px;\n    font-weight: 500;\n    color: ',
          ';\n    padding: 10px 15px 20px;\n    display: flex;\n    text-decoration: none;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    ',
          ';\n\n    &:hover {\n      color: ',
          ';\n    }\n  }\n\n  .isoDropdownFooterLinks {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 30px 20px;\n\n    a {\n      font-size: 13px;\n      font-weight: 500;\n      color: ',
          ';\n      text-decoration: none;\n      padding: 10px 20px;\n      line-height: 1;\n      border: 1px solid ',
          ';\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n        border-color: ',
          ';\n        color: #ffffff;\n      }\n    }\n\n    h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: ',
          ';\n      line-height: 1.3;\n    }\n  }\n\n  &.withImg {\n    .isoDropdownListItem {\n      display: flex;\n      flex-direction: row;\n\n      .isoImgWrapper {\n        width: 35px;\n        height: 35px;\n        overflow: hidden;\n        margin: ',
          ';\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background-color: ',
          ';\n        ',
          ';\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoListContent {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n\n        .isoListHead {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 10px;\n        }\n\n        h5 {\n          margin-bottom: 0;\n          padding: ',
          ';\n        }\n\n        .isoDate {\n          font-size: 11px;\n          color: ',
          ';\n          flex-shrink: 0;\n        }\n\n        p {\n          white-space: normal;\n          line-height: 1.5;\n        }\n      }\n    }\n  }\n\n  &.topbarMail {\n    @media only screen and (max-width: 519px) {\n      right: -170px;\n    }\n  }\n\n  &.topbarMessage {\n    @media only screen and (max-width: 500px) {\n      right: -69px;\n    }\n  }\n\n  &.topbarNotification {\n    @media only screen and (max-width: 500px) {\n      right: -120px;\n    }\n  }\n\n  &.topbarAddtoCart {\n    @media only screen and (max-width: 465px) {\n      right: -55px;\n    }\n\n    .isoDropdownHeader {\n      margin-bottom: 0;\n    }\n\n    .isoDropdownBody {\n      background-color: ',
          ';\n      display: flex;\n      flex-direction: column;\n\n      .isoNoItemMsg {\n        height: 100%;\n        min-height: 260px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        span {\n          font-size: 30px;\n          font-weight: 300;\n          color: ',
          ';\n          line-height: 1.2;\n        }\n      }\n    }\n  }\n\n  &.isoUserDropdown {\n    padding: 7px 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    width: 220px;\n    min-width: 160px;\n    flex-shrink: 0;\n    ',
          ';\n    ',
          ';\n    ',
          ';\n\n    .isoDropdownLink {\n      font-size: 13px;\n      color: ',
          ';\n      line-height: 1.1;\n      padding: 7px 15px;\n      background-color: transparent;\n      text-decoration: none;\n      display: flex;\n      justify-content: flex-start;\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n    }\n  }\n',
        ]);
        return (
          (mn = function() {
            return n;
          }),
          n
        );
      }
      var un = A.c.div(
          mn(),
          Object(B.a)('5px'),
          Object(B.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(B.c)(),
          Object(S.palette)('text', 0),
          Object(S.palette)('grayscale', 6),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(S.palette)('border', 2),
          Object(B.c)(),
          Object(S.palette)('grayscale', 3),
          Object(S.palette)('text', 0),
          Object(S.palette)('text', 2),
          Object(S.palette)('grayscale', 1),
          Object(S.palette)('text', 2),
          Object(B.c)(),
          Object(S.palette)('primary', 0),
          Object(S.palette)('text', 0),
          Object(S.palette)('border', 1),
          Object(B.c)(),
          Object(S.palette)('primary', 0),
          Object(S.palette)('primary', 0),
          Object(S.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(S.palette)('grayscale', 9),
          Object(B.a)('50%'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(S.palette)('grayscale', 1),
          Object(S.palette)('grayscale', 6),
          Object(S.palette)('grayscale', 1),
          Object(B.a)('5px'),
          Object(B.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(B.c)(),
          Object(S.palette)('text', 1),
          Object(B.c)(),
          Object(S.palette)('secondary', 6)
        ),
        hn = Object(M.a)(un),
        fn = [
          {
            id: 1,
            name: 'David Doe',
            notification:
              'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
          },
          {
            id: 2,
            name: 'Navis Doe',
            notification:
              'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
          },
          {
            id: 3,
            name: 'Emanual Doe',
            notification:
              'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
          },
          {
            id: 4,
            name: 'Dowain Doe',
            notification:
              'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
          },
        ];
      function bn() {
        var n = i.a.useState(!1),
          e = Object(dn.a)(n, 2),
          t = e[0],
          o = e[1],
          a = Object(r.d)(function(n) {
            return n.ThemeSwitcher.topbarTheme;
          });
        var l = i.a.createElement(
          hn,
          { className: 'topbarNotification' },
          i.a.createElement(
            'div',
            { className: 'isoDropdownHeader' },
            i.a.createElement(
              'h3',
              null,
              i.a.createElement(d.a, { id: 'sidebar.notification' })
            )
          ),
          i.a.createElement(
            'div',
            { className: 'isoDropdownBody' },
            fn.map(function(n) {
              return i.a.createElement(
                'a',
                { className: 'isoDropdownListItem', key: n.id, href: '# ' },
                i.a.createElement('h5', null, n.name),
                i.a.createElement('p', null, n.notification)
              );
            })
          ),
          i.a.createElement(
            'a',
            { className: 'isoViewAllBtn', href: '# ' },
            i.a.createElement(d.a, { id: 'topbar.viewAll' })
          )
        );
        return i.a.createElement(
          sn.a,
          {
            content: l,
            trigger: 'click',
            visible: t,
            onVisibleChange: function() {
              o(function(n) {
                return !n;
              });
            },
            placement: 'bottomLeft',
          },
          i.a.createElement(
            'div',
            { className: 'isoIconWrapper' },
            i.a.createElement('i', {
              className: 'ion-android-notifications',
              style: { color: a.textColor },
            }),
            i.a.createElement('span', null, fn.length)
          )
        );
      }
      t(108);
      var xn = t(637);
      function gn() {
        var n = Object(L.a)(
          [
            '\n  &.ant-modal {\n    top: 150px;\n    padding-bottom: 0;\n  }\n\n  .ant-modal-close-x {\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    display: none;\n  }\n\n  .ant-modal-content {\n    overflow: hidden;\n    border-radius: 5px;\n\n    .ant-modal-header {\n      display: none;\n    }\n\n    .ant-modal-body {\n      padding: 0px;\n\n      .isoSearchContainer {\n        .ant-input-search {\n          .ant-input {\n            border: 0;\n            border-radius: 0;\n            padding-left: ',
            ';\n            padding-right: ',
            ';\n            height: 60px;\n            font-size: 14px;\n\n            &::-webkit-input-placeholder {\n              color: ',
            ';\n            }\n\n            &:-moz-placeholder {\n              color: ',
            ';\n            }\n\n            &::-moz-placeholder {\n              color: ',
            ';\n            }\n            &:-ms-input-placeholder {\n              color: ',
            ';\n            }\n\n            &:focus {\n              outline: 0;\n              box-shadow: none;\n            }\n          }\n        }\n\n        .ant-input-suffix {\n          right: ',
            ';\n          left: ',
            ";\n          height: 0;\n\n          &:before {\n            content: '\f4a4';\n            font-family: 'ionicons';\n            font-size: 24px;\n            color: ",
            ';\n          }\n\n          .ant-input-search-icon {\n            display: none;\n          }\n        }\n      }\n    }\n  }\n',
          ],
          [
            '\n  &.ant-modal {\n    top: 150px;\n    padding-bottom: 0;\n  }\n\n  .ant-modal-close-x {\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    display: none;\n  }\n\n  .ant-modal-content {\n    overflow: hidden;\n    border-radius: 5px;\n\n    .ant-modal-header {\n      display: none;\n    }\n\n    .ant-modal-body {\n      padding: 0px;\n\n      .isoSearchContainer {\n        .ant-input-search {\n          .ant-input {\n            border: 0;\n            border-radius: 0;\n            padding-left: ',
            ';\n            padding-right: ',
            ';\n            height: 60px;\n            font-size: 14px;\n\n            &::-webkit-input-placeholder {\n              color: ',
            ';\n            }\n\n            &:-moz-placeholder {\n              color: ',
            ';\n            }\n\n            &::-moz-placeholder {\n              color: ',
            ';\n            }\n            &:-ms-input-placeholder {\n              color: ',
            ';\n            }\n\n            &:focus {\n              outline: 0;\n              box-shadow: none;\n            }\n          }\n        }\n\n        .ant-input-suffix {\n          right: ',
            ';\n          left: ',
            ";\n          height: 0;\n\n          &:before {\n            content: '\\f4a4';\n            font-family: 'ionicons';\n            font-size: 24px;\n            color: ",
            ';\n          }\n\n          .ant-input-search-icon {\n            display: none;\n          }\n        }\n      }\n    }\n  }\n',
          ]
        );
        return (
          (gn = function() {
            return n;
          }),
          n
        );
      }
      var yn = Object(A.c)(xn.a)(
        gn(),
        function(n) {
          return 'rtl' === n['data-rtl'] ? '15px' : '55px';
        },
        function(n) {
          return 'rtl' === n['data-rtl'] ? '55px' : '15px';
        },
        Object(S.palette)('grayscale', 0),
        Object(S.palette)('grayscale', 0),
        Object(S.palette)('grayscale', 0),
        Object(S.palette)('grayscale', 0),
        function(n) {
          return 'rtl' === n['data-rtl'] ? '20px' : 'auto';
        },
        function(n) {
          return 'rtl' === n['data-rtl'] ? 'auto' : '20px';
        },
        Object(S.palette)('text', 2)
      );
      Object(M.a)(yn);
      var wn = t(733),
        jn = t(40),
        vn = t.n(jn),
        On = t(32).a.logout;
      function kn() {
        var n = i.a.useState(!1),
          e = Object(dn.a)(n, 2),
          t = e[0],
          o = e[1],
          a = Object(r.c)();
        var l = i.a.createElement(
          hn,
          { className: 'isoUserDropdown' },
          i.a.createElement(
            K.b,
            { className: 'isoDropdownLink', to: '/dashboard/my-profile' },
            i.a.createElement(d.a, { id: 'topbar.myprofile' })
          ),
          i.a.createElement(
            'a',
            { className: 'isoDropdownLink', href: '# ' },
            i.a.createElement(d.a, { id: 'themeSwitcher.settings' })
          ),
          i.a.createElement(
            'a',
            { className: 'isoDropdownLink', href: '# ' },
            i.a.createElement(d.a, { id: 'sidebar.feedback' })
          ),
          i.a.createElement(
            'a',
            { className: 'isoDropdownLink', href: '# ' },
            i.a.createElement(d.a, { id: 'topbar.help' })
          ),
          i.a.createElement(
            'div',
            {
              className: 'isoDropdownLink',
              onClick: function() {
                return a(On());
              },
            },
            i.a.createElement(d.a, { id: 'topbar.logout' })
          )
        );
        return i.a.createElement(
          wn.a,
          {
            content: l,
            trigger: 'click',
            visible: t,
            onVisibleChange: function() {
              o(function(n) {
                return !n;
              });
            },
            arrowPointAtCenter: !0,
            placement: 'bottomLeft',
          },
          i.a.createElement(
            'div',
            { className: 'isoImgWrapper' },
            i.a.createElement('img', { alt: 'user', src: vn.a }),
            i.a.createElement('span', { className: 'userActivity online' })
          )
        );
      }
      function En() {
        var n = Object(L.a)([
          '\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 30px;\n  flex-shrink: 0;\n  position: relative;\n  border-bottom: 1px solid ',
          ';\n  ',
          ';\n\n  .isoItemImage {\n    width: 50px;\n    height: 50px;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .isoCartDetails {\n    width: 100%;\n    display: flex;\n    padding: ',
          ';\n    flex-direction: column;\n    text-align: ',
          ';\n\n    h3 {\n      margin: 0 0 5px;\n      line-height: 1;\n\n      a {\n        font-size: 13px;\n        font-weight: 500;\n        color: ',
          ';\n        line-height: 1.3;\n        text-decoration: none;\n      }\n    }\n\n    p {\n      display: flex;\n      margin: 0;\n\n      span {\n        font-size: 12px;\n        font-weight: 400;\n        color: ',
          ';\n        line-height: 1.2;\n\n        &.itemMultiplier {\n          padding: 0 3px;\n        }\n      }\n    }\n  }\n\n  .isoItemRemove {\n    position: absolute;\n    right: ',
          ';\n    left: ',
          ';\n    font-size: 13px;\n    font-weight: 500;\n    color: ',
          ' !important;\n    opacity: 0;\n    ',
          ';\n  }\n\n  &:hover {\n    background-color: ',
          ';\n\n    .isoItemRemove {\n      opacity: 1;\n    }\n  }\n',
        ]);
        return (
          (En = function() {
            return n;
          }),
          n
        );
      }
      var zn,
        Cn = A.c.div(
          En(),
          Object(S.palette)('border', 2),
          Object(B.c)(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 20px 0 0' : '0 0 0 20px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(S.palette)('text', 0),
          Object(S.palette)('text', 2),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '15px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '15px' : 'inherit';
          },
          Object(S.palette)('text', 0),
          Object(B.c)(),
          Object(S.palette)('grayscale', 3)
        ),
        Dn = Object(M.a)(Cn),
        Nn = function(n) {
          var e = n.price,
            t = n.quantity,
            o = n.image,
            a = n.objectID,
            r = n.cancelQuantity,
            l = n._highlightResult;
          return i.a.createElement(
            Dn,
            { className: 'isoCartItems' },
            i.a.createElement(
              'div',
              { className: 'isoItemImage' },
              i.a.createElement('img', { alt: '#', src: o })
            ),
            i.a.createElement(
              'div',
              { className: 'isoCartDetails' },
              i.a.createElement(
                'h3',
                null,
                i.a.createElement('a', { href: '#!' }, l.name.value)
              ),
              i.a.createElement(
                'p',
                { className: 'isoItemPriceQuantity' },
                i.a.createElement('span', null, '$'),
                i.a.createElement('span', null, e.toFixed(2)),
                i.a.createElement('span', { className: 'itemMultiplier' }, 'X'),
                i.a.createElement('span', { className: 'isoItemQuantity' }, t)
              )
            ),
            i.a.createElement(
              'a',
              {
                className: 'isoItemRemove',
                onClick: function() {
                  return r(a);
                },
                href: '#!',
              },
              i.a.createElement('i', { className: 'ion-android-close' })
            )
          );
        },
        In = t(38),
        Pn = In.a.initData,
        Tn = In.a.changeViewTopbarCart,
        Ln = In.a.changeProductQuantity;
      function An() {
        var n = Object(nn.j)().url,
          e = Object(r.c)(),
          t = Object(r.d)(function(n) {
            return n.ThemeSwitcher.topbarTheme;
          }),
          o = Object(r.d)(function(n) {
            return n.Ecommerce;
          }),
          a = o.productQuantity,
          l = o.products,
          c = o.loadingInitData,
          p = o.viewTopbarCart;
        function s(n, t) {
          var o = [];
          a.forEach(function(e) {
            e.objectID !== n ? o.push(e) : o.push({ objectID: n, quantity: t });
          }),
            e(Ln(o));
        }
        function m(n) {
          var t = [];
          a.forEach(function(e) {
            e.objectID !== n && t.push(e);
          }),
            e(Ln(t));
        }
        i.a.useEffect(
          function() {
            c || e(Pn());
          },
          [e, c]
        );
        var u = i.a.createElement(
          hn,
          { className: 'topbarAddtoCart' },
          i.a.createElement(
            'div',
            { className: 'isoDropdownHeader' },
            i.a.createElement(
              'h3',
              null,
              i.a.createElement(d.a, { id: 'sidebar.cart' })
            )
          ),
          i.a.createElement(
            'div',
            { className: 'isoDropdownBody isoCartItemsWrapper' },
            i.a.createElement(
              G.a,
              { style: { height: 300 } },
              ((zn = 0),
              a && 0 !== a.length
                ? a.map(function(n) {
                    return (
                      (zn += n.quantity * l[n.objectID].price),
                      i.a.createElement(
                        Nn,
                        Object.assign(
                          {
                            key: n.objectID,
                            quantity: n.quantity,
                            changeQuantity: s,
                            cancelQuantity: m,
                          },
                          l[n.objectID]
                        )
                      )
                    );
                  })
                : i.a.createElement(
                    'div',
                    { className: 'isoNoItemMsg' },
                    i.a.createElement('span', null, 'No item found')
                  ))
            )
          ),
          i.a.createElement(
            'div',
            { className: 'isoDropdownFooterLinks' },
            i.a.createElement(
              K.b,
              {
                to: ''.concat(n, '/cart'),
                onClick: function() {
                  e(Tn(!1));
                },
              },
              i.a.createElement(d.a, { id: 'topbar.viewCart' })
            ),
            i.a.createElement(
              'h3',
              null,
              i.a.createElement(d.a, { id: 'topbar.totalPrice' }),
              ':',
              ' ',
              i.a.createElement('span', null, '$', zn.toFixed(2))
            )
          )
        );
        return i.a.createElement(
          wn.a,
          {
            content: u,
            trigger: 'click',
            visible: p,
            onVisibleChange: function() {
              e(Tn(!p));
            },
            placement: 'bottomLeft',
          },
          i.a.createElement(
            'div',
            { className: 'isoIconWrapper' },
            i.a.createElement('i', {
              className: 'ion-android-cart',
              style: { color: t.textColor },
            }),
            0 === a.length ? '' : i.a.createElement('span', null, a.length)
          )
        );
      }
      function Sn() {
        var n = Object(L.a)(
          [
            '\n  .isomorphicTopbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #ffffff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: ',
            ';\n    z-index: 1000;\n    ',
            ';\n\n    @media only screen and (max-width: 767px) {\n      padding: ',
            ';\n    }\n\n    &.collapsed {\n      padding: ',
            ';\n      @media only screen and (max-width: 767px) {\n        padding: ',
            ';\n      }\n    }\n\n    .isoLeft {\n      display: flex;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        margin: ',
            ";\n      }\n\n      .triggerBtn {\n        width: 24px;\n        height: 100%;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background-color: transparent;\n        border: 0;\n        outline: 0;\n        position: relative;\n        cursor: pointer;\n\n        &:before {\n          content: '\f20e';\n          font-family: 'Ionicons';\n          font-size: 26px;\n          color: inherit;\n          line-height: 0;\n          position: absolute;\n        }\n      }\n    }\n\n    .isoRight {\n      display: flex;\n      align-items: center;\n\n      li {\n        margin-left: ",
            ';\n        margin-right: ',
            ';\n        cursor: pointer;\n        line-height: normal;\n        position: relative;\n        display: inline-block;\n\n        @media only screen and (max-width: 360px) {\n          margin-left: ',
            ';\n          margin-right: ',
            ';\n        }\n\n        &:last-child {\n          margin: 0;\n        }\n\n        i {\n          font-size: 24px;\n          color: ',
            ';\n          line-height: 1;\n        }\n\n        .isoIconWrapper {\n          position: relative;\n          line-height: normal;\n\n          span {\n            font-size: 12px;\n            color: #fff;\n            background-color: ',
            ';\n            width: 20px;\n            height: 20px;\n            display: -webkit-inline-flex;\n            display: -ms-inline-flex;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            line-height: 20px;\n            position: absolute;\n            top: -8px;\n            left: ',
            ';\n            right: ',
            ';\n            ',
            ';\n          }\n        }\n\n        &.isoMail {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoNotify {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoMsg {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoCart {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoUser {\n          .isoImgWrapper {\n            width: 40px;\n            height: 40px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            background-color: ',
            ';\n            ',
            ';\n\n            img {\n              height: 100%;\n              object-fit: cover;\n            }\n\n            .userActivity {\n              width: 10px;\n              height: 10px;\n              display: block;\n              background-color: ',
            ';\n              position: absolute;\n              bottom: 0;\n              right: 3px;\n              border: 1px solid #ffffff;\n              ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .isoUserDropdown {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoUserDropdownContent {\n          padding: 7px 0;\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 220px;\n          min-width: 160px;\n          flex-shrink: 0;\n          .isoBorderRadius(5px);\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          .isoDropdownLink {\n            font-size: 13px;\n            color: ',
            ';\n            line-height: 1.1;\n            padding: 7px 15px;\n            background-color: transparent;\n            text-decoration: none;\n            display: flex;\n            justify-content: flex-start;\n            ',
            ';\n\n            &:hover {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Dropdown\n  .ant-popover {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoDropdownContent {\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 360px;\n          min-width: 160px;\n          flex-shrink: 0;\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          @media only screen and (max-width: 767px) {\n            width: 310px;\n          }\n\n          .isoDropdownHeader {\n            border-bottom: 1px solid #f1f1f1;\n            margin-bottom: 0px;\n            padding: 15px 30px;\n            width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              text-align: center;\n              text-transform: uppercase;\n              margin: 0;\n            }\n          }\n\n          .isoDropdownBody {\n            width: 100%;\n            height: 300px;\n            overflow-y: auto;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 10px;\n            background-color: ',
            ';\n\n            .isoDropdownListItem {\n              padding: 15px 30px;\n              flex-shrink: 0;\n              text-decoration: none;\n              display: flex;\n              flex-direction: column;\n              text-decoration: none;\n              width: 100%;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n              }\n\n              .isoListHead {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 5px;\n              }\n\n              h5 {\n                font-size: 13px;\n                font-weight: 500;\n                color: ',
            ';\n                margin-top: 0;\n              }\n\n              p {\n                font-size: 12px;\n                font-weight: 400;\n                color: ',
            ';\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              }\n\n              .isoDate {\n                font-size: 11px;\n                color: ',
            ';\n                flex-shrink: 0;\n              }\n            }\n          }\n\n          .isoViewAllBtn {\n            font-size: 13px;\n            font-weight: 500;\n            color: ',
            ';\n            padding: 10px 15px 20px;\n            display: flex;\n            text-decoration: none;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            ',
            ';\n\n            &:hover {\n              color: ',
            ';\n            }\n          }\n\n          .isoDropdownFooterLinks {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 10px 30px 20px;\n\n            a {\n              font-size: 13px;\n              font-weight: 500;\n              color: ',
            ';\n              text-decoration: none;\n              padding: 10px 20px;\n              line-height: 1;\n              border: 1px solid ',
            ';\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n                border-color: ',
            ';\n                color: #ffffff;\n              }\n            }\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              line-height: 1.3;\n            }\n          }\n\n          &.withImg {\n            .isoDropdownListItem {\n              display: flex;\n              flex-direction: row;\n\n              .isoImgWrapper {\n                width: 35px;\n                height: 35px;\n                overflow: hidden;\n                margin-right: 15px;\n                display: -webkit-inline-flex;\n                display: -ms-inline-flex;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                flex-shrink: 0;\n                background-color: ',
            ';\n                ',
            ';\n\n                img {\n                  width: 100%;\n                  height: 100%;\n                  object-fit: cover;\n                }\n              }\n\n              .isoListContent {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n\n                .isoListHead {\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                  margin-bottom: 10px;\n                }\n\n                h5 {\n                  margin-bottom: 0;\n                  padding-right: 15px;\n                }\n\n                .isoDate {\n                  font-size: 11px;\n                  color: ',
            ';\n                  flex-shrink: 0;\n                }\n\n                p {\n                  white-space: normal;\n                  line-height: 1.5;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMail {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 519px) {\n              right: -170px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMessage {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -69px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarNotification {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -120px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarAddtoCart {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 465px) {\n              right: -55px;\n            }\n\n            .isoDropdownHeader {\n              margin-bottom: 0;\n            }\n\n            .isoDropdownBody {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n',
          ],
          [
            '\n  .isomorphicTopbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #ffffff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: ',
            ';\n    z-index: 1000;\n    ',
            ';\n\n    @media only screen and (max-width: 767px) {\n      padding: ',
            ';\n    }\n\n    &.collapsed {\n      padding: ',
            ';\n      @media only screen and (max-width: 767px) {\n        padding: ',
            ';\n      }\n    }\n\n    .isoLeft {\n      display: flex;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        margin: ',
            ";\n      }\n\n      .triggerBtn {\n        width: 24px;\n        height: 100%;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background-color: transparent;\n        border: 0;\n        outline: 0;\n        position: relative;\n        cursor: pointer;\n\n        &:before {\n          content: '\\f20e';\n          font-family: 'Ionicons';\n          font-size: 26px;\n          color: inherit;\n          line-height: 0;\n          position: absolute;\n        }\n      }\n    }\n\n    .isoRight {\n      display: flex;\n      align-items: center;\n\n      li {\n        margin-left: ",
            ';\n        margin-right: ',
            ';\n        cursor: pointer;\n        line-height: normal;\n        position: relative;\n        display: inline-block;\n\n        @media only screen and (max-width: 360px) {\n          margin-left: ',
            ';\n          margin-right: ',
            ';\n        }\n\n        &:last-child {\n          margin: 0;\n        }\n\n        i {\n          font-size: 24px;\n          color: ',
            ';\n          line-height: 1;\n        }\n\n        .isoIconWrapper {\n          position: relative;\n          line-height: normal;\n\n          span {\n            font-size: 12px;\n            color: #fff;\n            background-color: ',
            ';\n            width: 20px;\n            height: 20px;\n            display: -webkit-inline-flex;\n            display: -ms-inline-flex;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            line-height: 20px;\n            position: absolute;\n            top: -8px;\n            left: ',
            ';\n            right: ',
            ';\n            ',
            ';\n          }\n        }\n\n        &.isoMail {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoNotify {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoMsg {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoCart {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoUser {\n          .isoImgWrapper {\n            width: 40px;\n            height: 40px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            background-color: ',
            ';\n            ',
            ';\n\n            img {\n              height: 100%;\n              object-fit: cover;\n            }\n\n            .userActivity {\n              width: 10px;\n              height: 10px;\n              display: block;\n              background-color: ',
            ';\n              position: absolute;\n              bottom: 0;\n              right: 3px;\n              border: 1px solid #ffffff;\n              ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .isoUserDropdown {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoUserDropdownContent {\n          padding: 7px 0;\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 220px;\n          min-width: 160px;\n          flex-shrink: 0;\n          .isoBorderRadius(5px);\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          .isoDropdownLink {\n            font-size: 13px;\n            color: ',
            ';\n            line-height: 1.1;\n            padding: 7px 15px;\n            background-color: transparent;\n            text-decoration: none;\n            display: flex;\n            justify-content: flex-start;\n            ',
            ';\n\n            &:hover {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Dropdown\n  .ant-popover {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoDropdownContent {\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 360px;\n          min-width: 160px;\n          flex-shrink: 0;\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          @media only screen and (max-width: 767px) {\n            width: 310px;\n          }\n\n          .isoDropdownHeader {\n            border-bottom: 1px solid #f1f1f1;\n            margin-bottom: 0px;\n            padding: 15px 30px;\n            width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              text-align: center;\n              text-transform: uppercase;\n              margin: 0;\n            }\n          }\n\n          .isoDropdownBody {\n            width: 100%;\n            height: 300px;\n            overflow-y: auto;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 10px;\n            background-color: ',
            ';\n\n            .isoDropdownListItem {\n              padding: 15px 30px;\n              flex-shrink: 0;\n              text-decoration: none;\n              display: flex;\n              flex-direction: column;\n              text-decoration: none;\n              width: 100%;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n              }\n\n              .isoListHead {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 5px;\n              }\n\n              h5 {\n                font-size: 13px;\n                font-weight: 500;\n                color: ',
            ';\n                margin-top: 0;\n              }\n\n              p {\n                font-size: 12px;\n                font-weight: 400;\n                color: ',
            ';\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              }\n\n              .isoDate {\n                font-size: 11px;\n                color: ',
            ';\n                flex-shrink: 0;\n              }\n            }\n          }\n\n          .isoViewAllBtn {\n            font-size: 13px;\n            font-weight: 500;\n            color: ',
            ';\n            padding: 10px 15px 20px;\n            display: flex;\n            text-decoration: none;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            ',
            ';\n\n            &:hover {\n              color: ',
            ';\n            }\n          }\n\n          .isoDropdownFooterLinks {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 10px 30px 20px;\n\n            a {\n              font-size: 13px;\n              font-weight: 500;\n              color: ',
            ';\n              text-decoration: none;\n              padding: 10px 20px;\n              line-height: 1;\n              border: 1px solid ',
            ';\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n                border-color: ',
            ';\n                color: #ffffff;\n              }\n            }\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              line-height: 1.3;\n            }\n          }\n\n          &.withImg {\n            .isoDropdownListItem {\n              display: flex;\n              flex-direction: row;\n\n              .isoImgWrapper {\n                width: 35px;\n                height: 35px;\n                overflow: hidden;\n                margin-right: 15px;\n                display: -webkit-inline-flex;\n                display: -ms-inline-flex;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                flex-shrink: 0;\n                background-color: ',
            ';\n                ',
            ';\n\n                img {\n                  width: 100%;\n                  height: 100%;\n                  object-fit: cover;\n                }\n              }\n\n              .isoListContent {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n\n                .isoListHead {\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                  margin-bottom: 10px;\n                }\n\n                h5 {\n                  margin-bottom: 0;\n                  padding-right: 15px;\n                }\n\n                .isoDate {\n                  font-size: 11px;\n                  color: ',
            ';\n                  flex-shrink: 0;\n                }\n\n                p {\n                  white-space: normal;\n                  line-height: 1.5;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMail {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 519px) {\n              right: -170px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMessage {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -69px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarNotification {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -120px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarAddtoCart {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 465px) {\n              right: -55px;\n            }\n\n            .isoDropdownHeader {\n              margin-bottom: 0;\n            }\n\n            .isoDropdownBody {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n',
          ]
        );
        return (
          (Sn = function() {
            return n;
          }),
          n
        );
      }
      var Bn = A.c.div(
          Sn(),
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0 265px 0 31px'
              : '0 31px 0 265px';
          },
          Object(B.c)(),
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0px 260px 0px 15px !important'
              : '0px 15px 0px 260px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0 109px 0 31px'
              : '0 31px 0 109px';
          },
          function(n) {
            return n['data-rtl'], '0px 15px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 20px' : '0 20px 0 0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '35px' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : '35px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '25px' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : '25px';
          },
          Object(S.palette)('text', 0),
          Object(S.palette)('secondary', 1),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '10px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '10px' : 'inherit';
          },
          Object(B.a)('50%'),
          Object(S.palette)('color', 0),
          Object(S.palette)('primary', 2),
          Object(S.palette)('color', 1),
          Object(S.palette)('color', 2),
          Object(S.palette)('grayscale', 9),
          Object(B.a)('50%'),
          Object(S.palette)('color', 3),
          Object(B.a)('50%'),
          Object(B.a)('5px'),
          Object(B.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(B.c)(),
          Object(S.palette)('text', 1),
          Object(B.c)(),
          Object(S.palette)('secondary', 6),
          Object(B.a)('5px'),
          Object(B.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(B.c)(),
          Object(S.palette)('text', 0),
          Object(S.palette)('grayscale', 6),
          Object(B.c)(),
          Object(S.palette)('grayscale', 3),
          Object(S.palette)('text', 0),
          Object(S.palette)('text', 2),
          Object(S.palette)('grayscale', 1),
          Object(S.palette)('text', 2),
          Object(B.c)(),
          Object(S.palette)('primary', 0),
          Object(S.palette)('text', 0),
          Object(S.palette)('border', 1),
          Object(B.c)(),
          Object(S.palette)('primary', 0),
          Object(S.palette)('primary', 0),
          Object(S.palette)('text', 0),
          Object(S.palette)('grayscale', 9),
          Object(B.a)('50%'),
          Object(S.palette)('grayscale', 1),
          Object(S.palette)('grayscale', 6)
        ),
        Mn = Object(M.a)(Bn),
        Wn = o.a.Header,
        Hn = c.a.toggleCollapsed;
      function Fn() {
        var n = i.a.useState(''),
          e = Object(dn.a)(n, 2),
          t = e[0],
          o = e[1],
          a = Object(r.d)(function(n) {
            return n.ThemeSwitcher.topbarTheme;
          }),
          l = Object(r.d)(function(n) {
            return n.App;
          }),
          c = l.collapsed,
          p = l.openDrawer,
          d = Object(r.c)(),
          s = i.a.useCallback(
            function() {
              return d(Hn());
            },
            [d]
          ),
          m = c && !p,
          u = {
            background: a.backgroundColor,
            position: 'fixed',
            width: '100%',
            height: 70,
          };
        return i.a.createElement(
          Mn,
          null,
          i.a.createElement(
            Wn,
            {
              style: u,
              className: m ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar',
            },
            i.a.createElement(
              'div',
              { className: 'isoLeft' },
              i.a.createElement('button', {
                className: m
                  ? 'triggerBtn menuCollapsed'
                  : 'triggerBtn menuOpen',
                style: { color: a.textColor },
                onClick: s,
              })
            ),
            i.a.createElement(
              'ul',
              { className: 'isoRight' },
              i.a.createElement(
                'li',
                {
                  onClick: function() {
                    return o('notification');
                  },
                  className: t ? 'isoNotify active' : 'isoNotify',
                },
                i.a.createElement(bn, null)
              ),
              i.a.createElement(
                'li',
                {
                  onClick: function() {
                    return o('addToCart');
                  },
                  className: 'isoCart',
                },
                i.a.createElement(An, null)
              ),
              i.a.createElement(
                'li',
                {
                  onClick: function() {
                    return o('user');
                  },
                  className: 'isoUser',
                },
                i.a.createElement(kn, null)
              )
            )
          )
        );
      }
      var Rn = t(217),
        Un = [
          {
            path: '',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(3),
                t.e(2),
                t.e(29),
              ]).then(t.bind(null, 2666));
            }),
            exact: !0,
          },
          {
            path: 'inbox',
            component: Object(a.lazy)(function() {
              return t.e(25).then(t.bind(null, 2630));
            }),
          },
          {
            path: 'my-profile',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(19), t.e(99)]).then(t.bind(null, 2631));
            }),
          },
          {
            path: 'activation',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(19), t.e(111)]).then(t.bind(null, 2632));
            }),
          },
          {
            path: 'swiperslider',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(80), t.e(48)]).then(
                t.bind(null, 2665)
              );
            }),
          },
          {
            path: 'scrum-board',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(3),
                t.e(8),
                t.e(32),
              ]).then(t.bind(null, 2662));
            }),
            exact: !1,
          },
          {
            path: 'mailbox',
            component: Object(a.lazy)(function() {
              return t.e(25).then(t.bind(null, 2630));
            }),
          },
          {
            path: 'calendar',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(8), t.e(35), t.e(120)]).then(
                t.bind(null, 2676)
              );
            }),
          },
          {
            path: 'googlemap',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(49), t.e(76)]).then(
                t.bind(null, 2670)
              );
            }),
          },
          {
            path: 'leafletmap',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(113), t.e(68)]).then(
                t.bind(null, 2677)
              );
            }),
          },
          {
            path: 'table_ant',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(3),
                t.e(6),
                t.e(36),
              ]).then(t.bind(null, 1857));
            }),
          },
          {
            path: 'allFormComponent',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(3),
                t.e(6),
                t.e(8),
                t.e(30),
              ]).then(t.bind(null, 2663));
            }),
          },
          {
            path: 'InputField',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(3),
                t.e(8),
                t.e(23),
                t.e(60),
              ]).then(t.bind(null, 1684));
            }),
          },
          {
            path: 'editor',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(1), t.e(2), t.e(12), t.e(107)]).then(
                t.bind(null, 2633)
              );
            }),
          },
          {
            path: 'stepperForms',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(3),
                t.e(6),
                t.e(17),
                t.e(31),
              ]).then(t.bind(null, 2667));
            }),
          },
          {
            path: 'FormsWithValidation',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(16),
                t.e(98),
                t.e(106),
              ]).then(t.bind(null, 2700));
            }),
          },
          {
            path: 'progress',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(17), t.e(81)]).then(
                t.bind(null, 2634)
              );
            }),
          },
          {
            path: 'button',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(6), t.e(10), t.e(70)]).then(
                t.bind(null, 2635)
              );
            }),
          },
          {
            path: 'tab',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(3), t.e(24), t.e(108)]).then(
                t.bind(null, 2636)
              );
            }),
          },
          {
            path: 'autocomplete',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(3), t.e(66)]).then(
                t.bind(null, 1198)
              );
            }),
          },
          {
            path: 'checkbox',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(57)]).then(t.bind(null, 1197));
            }),
          },
          {
            path: 'radiobox',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(6), t.e(74)]).then(
                t.bind(null, 1199)
              );
            }),
          },
          {
            path: 'selectbox',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(3), t.e(84)]).then(
                t.bind(null, 1200)
              );
            }),
          },
          {
            path: 'transfer',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(47), t.e(85)]).then(t.bind(null, 1234));
            }),
          },
          {
            path: 'gridLayout',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(51), t.e(118)]).then(t.bind(null, 2682));
            }),
          },
          {
            path: 'notes',
            component: Object(a.lazy)(function() {
              return t.e(126).then(t.bind(null, 2683));
            }),
          },
          {
            path: 'todo',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(6), t.e(88)]).then(t.bind(null, 2684));
            }),
          },
          {
            path: 'articles',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(3),
                t.e(6),
                t.e(9),
                t.e(10),
                t.e(42),
              ]).then(t.bind(null, 2701));
            }),
          },
          {
            path: 'investors',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(3),
                t.e(6),
                t.e(9),
                t.e(10),
                t.e(44),
              ]).then(t.bind(null, 2702));
            }),
          },
          {
            path: 'contacts',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(17), t.e(41), t.e(114)]).then(
                t.bind(null, 2668)
              );
            }),
          },
          {
            path: 'alert',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(55)]).then(t.bind(null, 2637));
            }),
          },
          {
            path: 'modal',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(82)]).then(t.bind(null, 2703));
            }),
          },
          {
            path: 'message',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(62)]).then(t.bind(null, 2704));
            }),
          },
          {
            path: 'notification',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(71)]).then(t.bind(null, 2705));
            }),
          },
          {
            path: 'Popconfirm',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(63)]).then(t.bind(null, 2706));
            }),
          },
          {
            path: 'spin',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(52), t.e(90)]).then(
                t.bind(null, 2685)
              );
            }),
          },
          {
            path: 'shuffle',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(110), t.e(92)]).then(t.bind(null, 2674));
            }),
          },
          {
            path: 'affix',
            component: Object(a.lazy)(function() {
              return t.e(116).then(t.bind(null, 2675));
            }),
          },
          {
            path: 'breadcrumb',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(67), t.e(101)]).then(
                t.bind(null, 2686)
              );
            }),
          },
          {
            path: 'backToTop',
            component: Object(a.lazy)(function() {
              return t.e(93).then(t.bind(null, 2687));
            }),
          },
          {
            path: 'dropdown',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(10), t.e(58)]).then(
                t.bind(null, 2638)
              );
            }),
          },
          {
            path: 'op_badge',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(61)]).then(t.bind(null, 2688));
            }),
          },
          {
            path: 'op_card',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(24), t.e(65)]).then(
                t.bind(null, 2689)
              );
            }),
          },
          {
            path: 'op_carousel',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(50), t.e(102)]).then(
                t.bind(null, 2690)
              );
            }),
          },
          {
            path: 'op_collapse',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(89), t.e(103)]).then(
                t.bind(null, 2707)
              );
            }),
          },
          {
            path: 'op_tooltip',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(75)]).then(t.bind(null, 2639));
            }),
          },
          {
            path: 'rating',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(64)]).then(t.bind(null, 2640));
            }),
          },
          {
            path: 'tree',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(86), t.e(104)]).then(
                t.bind(null, 2669)
              );
            }),
          },
          {
            path: 'op_tag',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(59)]).then(t.bind(null, 2691));
            }),
          },
          {
            path: 'op_timeline',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(69)]).then(t.bind(null, 2671));
            }),
          },
          {
            path: 'pagination',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(3), t.e(9), t.e(72)]).then(
                t.bind(null, 2641)
              );
            }),
          },
          {
            path: 'op_popover',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(83)]).then(t.bind(null, 2708));
            }),
          },
          {
            path: 'googleChart',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(109), t.e(91)]).then(
                t.bind(null, 2642)
              );
            }),
          },
          {
            path: 'reecharts',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(77)]).then(t.bind(null, 2709));
            }),
          },
          {
            path: 'menu',
            component: Object(a.lazy)(function() {
              return t.e(94).then(t.bind(null, 2643));
            }),
          },
          {
            path: 'ReactChart2',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(97)]).then(t.bind(null, 2644));
            }),
          },
          {
            path: 'card',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(3),
                t.e(6),
                t.e(37),
              ]).then(t.bind(null, 2672));
            }),
          },
          {
            path: 'cart',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(23), t.e(115)]).then(t.bind(null, 2678));
            }),
          },
          {
            path: 'checkout',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(3), t.e(79)]).then(t.bind(null, 2673));
            }),
          },
          {
            path: 'shop',
            component: Object(a.lazy)(function() {
              return t.e(159).then(t.bind(null, 2645));
            }),
          },
          {
            path: 'reactDates',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(16),
                t.e(15),
                t.e(33),
              ]).then(t.bind(null, 2679));
            }),
          },
          {
            path: 'codeMirror',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(1),
                t.e(3),
                t.e(16),
                t.e(38),
              ]).then(t.bind(null, 2680));
            }),
          },
          {
            path: 'uppy',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(34), t.e(112)]).then(t.bind(null, 2646));
            }),
          },
          {
            path: 'dropzone',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(117), t.e(105)]).then(t.bind(null, 2692));
            }),
          },
          {
            path: 'youtubeSearch',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(54), t.e(96)]).then(
                t.bind(null, 2681)
              );
            }),
          },
          {
            path: 'frappeChart',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(95), t.e(100)]).then(
                t.bind(null, 2710)
              );
            }),
          },
          {
            path: 'invoice/:invoiceId',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(3),
                t.e(6),
                t.e(8),
                t.e(9),
                t.e(40),
              ]).then(t.bind(null, 2661));
            }),
          },
          {
            path: 'invoice',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(3),
                t.e(6),
                t.e(9),
                t.e(10),
                t.e(43),
              ]).then(t.bind(null, 2711));
            }),
          },
          {
            path: 'chat',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(53), t.e(140)]).then(t.bind(null, 2647));
            }),
          },
          {
            path: 'githubSearch',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(3), t.e(9), t.e(73)]).then(
                t.bind(null, 2693)
              );
            }),
          },
          {
            path: 'blank_page',
            component: Object(a.lazy)(function() {
              return t.e(125).then(t.bind(null, 2648));
            }),
          },
        ];
      function _n() {
        var n = Object(nn.j)().url;
        return i.a.createElement(
          a.Suspense,
          { fallback: i.a.createElement(Rn.a, null) },
          i.a.createElement(
            nn.d,
            null,
            Un.map(function(e, t) {
              return i.a.createElement(
                nn.b,
                {
                  exact: e.exact,
                  key: t,
                  path: ''.concat(n, '/').concat(e.path),
                },
                i.a.createElement(e.component, null)
              );
            })
          )
        );
      }
      function Vn() {
        var n = Object(L.a)([
          '\n  -webkit-overflow-scrolling: touch;\n  .trigger {\n    font-size: 18px;\n    line-height: 64px;\n    padding: 0 16px;\n    cursor: pointer;\n    transition: color 0.3s;\n  }\n\n  .trigger:hover {\n    color: ',
          ';\n  }\n\n  .ant-layout-sider-collapsed .anticon {\n    font-size: 16px;\n  }\n\n  .ant-layout-sider-collapsed .nav-text {\n    display: none;\n  }\n\n  .ant-layout {\n    background: ',
          ';\n\n    &.isoContentMainLayout {\n      overflow: auto;\n      overflow-x: hidden;\n      @media only screen and (min-width: 768px) and (max-width: 1220px) {\n        width: calc(100% - 80px);\n        flex-shrink: 0;\n      }\n\n      @media only screen and (max-width: 767px) {\n        width: 100%;\n        flex-shrink: 0;\n      }\n    }\n  }\n\n  .isoLayoutContent {\n    width: 100%;\n    padding: 35px;\n    background-color: #ffffff;\n    border: 1px solid ',
          ';\n    height: 100%;\n  }\n\n  .isomorphicLayout {\n    width: calc(100% - 240px);\n    flex-shrink: 0;\n    overflow-x: hidden !important;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n    }\n\n    @media only screen and (min-width: 768px) and (max-width: 1220px) {\n      width: calc(100% - 80px);\n      width: 100%;\n    }\n  }\n\n  .ant-layout-footer {\n    font-size: 13px;\n    @media (max-width: 767px) {\n      padding: 10px 20px;\n    }\n  }\n\n  ',
          ';\n',
        ]);
        return (
          (Vn = function() {
            return n;
          }),
          n
        );
      }
      function Qn() {
        var n = Object(L.a)([
          "\nbody {\n  -webkit-overflow-scrolling: touch;\n}\n\nhtml h1,\nhtml h2,\nhtml h3,\nhtml h4,\nhtml h5,\nhtml h6,\nhtml a,\nhtml p,\nhtml li,\ninput,\ntextarea,\nspan,\ndiv,\nhtml,\nbody,\nhtml a {\n  margin-bottom: 0;\n  font-family: 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\nhtml ul {\n  -webkit-padding-start: 0px;\n  list-style: none;\n  margin-bottom: 0;\n}\n\n.scrollbar-track-y,\n.scrollbar-thumb-y {\n  width: 5px !important;\n}\n\n.scrollbar-track-x,\n.scrollbar-thumb-x {\n  height: 5px !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n}\n\n.scrollbar-track {\n  background: rgba(222, 222, 222, 0.15) !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n  background: rgba(0, 0, 0, 0.5) !important;\n}\n\n.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-bottomLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-bottomRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-topLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-topRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after {\n  left: 0;\n  margin-left: -4px;\n}\n\n/* Instagram Modal */\n\n.ant-modal-wrap.instagram-modal .ant-modal {\n  max-width: 935px;\n  width: 100% !important;\n}\n\n@media only screen and (max-width: 991px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    padding: 0 60px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    max-width: 580px;\n  }\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content {\n  border-radius: 0;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {\n  position: fixed;\n  color: #fff;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {\n  font-size: 24px;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {\n  padding: 0;\n}\n\n/********** Add Your Global RTL CSS Here **********/\n\n/* Popover */\n\nhtml[dir='rtl'] .ant-popover {\n  text-align: right;\n}\n\n/* Ecommerce Card */\n\nhtml[dir='rtl'] .isoCardInfoForm .ant-input {\n  text-align: right;\n}\n\n/* Modal */\n\nhtml[dir='rtl'] .has-success.has-feedback:after,\nhtml[dir='rtl'] .has-warning.has-feedback:after,\nhtml[dir='rtl'] .has-error.has-feedback:after,\nhtml[dir='rtl'] .is-validating.has-feedback:after {\n  left: 0;\n  right: auto;\n}\n\nhtml[dir='rtl'] .ant-modal-close {\n  right: inherit;\n  left: 0;\n}\n\nhtml[dir='rtl'] .ant-modal-footer {\n  text-align: left;\n}\n\nhtml[dir='rtl'] .ant-modal-footer button + button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\nhtml[dir='rtl'] .ant-confirm-body .ant-confirm-content {\n  margin-right: 42px;\n}\n\nhtml[dir='rtl'] .ant-btn > .anticon + span,\nhtml[dir='rtl'] .ant-btn > span + .anticon {\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl'] .ant-btn-loading span {\n  margin-left: 0;\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {\n  padding-left: 25px;\n  padding-right: 29px;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)\n  .anticon {\n  margin-right: -14px;\n  margin-left: 0;\n}\n\n/* Confirm */\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {\n  margin-left: 16px;\n  margin-right: 0;\n  float: right;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {\n  float: left;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n/* Message */\n\nhtml[dir='rtl'] .ant-message .anticon {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n/* Pop Confirm */\n\nhtml[dir='rtl'] .ant-popover-message-title {\n  padding-right: 20px;\n  padding-left: 0;\n}\n\nhtml[dir='rtl'] .ant-popover-buttons {\n  text-align: left;\n}\n\n/* Notification */\n\nhtml[dir='rtl']\n  .ant-notification-notice-closable\n  .ant-notification-notice-message {\n  padding-left: 24px;\n  padding-right: 0;\n}\n\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-message,\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-description {\n  margin-right: 48px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-close {\n  right: auto;\n  left: 16px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-with-icon {\n  left: 0;\n}\n\n/* Dropzone */\n\nhtml[dir='rtl'] .dz-hidden-input {\n  display: none;\n}\n\n",
        ]);
        return (
          (Qn = function() {
            return n;
          }),
          n
        );
      }
      var Gn = Object(A.b)(Qn()),
        qn = A.c.div(
          Vn(),
          Object(S.palette)('primary', 0),
          Object(S.palette)('secondary', 1),
          Object(S.palette)('border', 0),
          ''
        );
      t.d(e, 'default', function() {
        return $n;
      });
      var Kn = o.a.Content,
        Xn = o.a.Footer,
        Jn = c.a.toggleAll,
        Yn = {
          layout: { flexDirection: 'row', overflowX: 'hidden' },
          content: {
            padding: '70px 0 0',
            flexShrink: '0',
            background: '#f1f3f6',
            position: 'relative',
          },
          footer: {
            background: '#0a101d',
            textAlign: 'center',
            borderTop: '1px solid #ededed',
            color: '#fff',
          },
        };
      function $n() {
        var n = Object(r.c)(),
          e = Object(r.d)(function(n) {
            return n.App.height;
          }),
          t = Object(l.a)(),
          a = t.width,
          c = t.height;
        return (
          i.a.useEffect(
            function() {
              n(Jn(a, c));
            },
            [a, c, n]
          ),
          i.a.createElement(
            qn,
            null,
            i.a.createElement(Gn, null),
            i.a.createElement(
              o.a,
              { style: { height: c } },
              i.a.createElement(Fn, null),
              i.a.createElement(
                o.a,
                { style: Yn.layout },
                i.a.createElement(pn, null),
                i.a.createElement(
                  o.a,
                  { className: 'isoContentMainLayout', style: { height: e } },
                  i.a.createElement(
                    Kn,
                    { className: 'isomorphicContent', style: Yn.content },
                    i.a.createElement(_n, null)
                  ),
                  i.a.createElement(Xn, { style: Yn.footer }, V.footerText)
                )
              ),
              i.a.createElement(_, null)
            )
          )
        );
      }
    },
    560: function(n, e, t) {
      'use strict';
      var o = t(0),
        a = t.n(o),
        i = t(55);
      e.a = Object(i.d)(
        function(n) {
          return a.a.createElement(i.a, n);
        },
        { withRef: !1 }
      );
    },
    637: function(n, e, t) {
      'use strict';
      t(1165);
      var o = t(1233);
      e.a = o.a;
    },
    733: function(n, e, t) {
      'use strict';
      t(331);
      var o = t(935);
      e.a = o.a;
    },
    763: function(n, e, t) {
      'use strict';
      var o = t(0),
        a = t.n(o),
        i = t(1164);
      e.a = function(n) {
        var e = n.id,
          t = n.style,
          o = n.children,
          r = n.className;
        return a.a.createElement(
          i.Scrollbars,
          {
            id: e,
            className: r,
            style: t,
            autoHide: !0,
            autoHideTimeout: 1e3,
            autoHideDuration: 200,
            autoHeightMin: 0,
            autoHeightMax: 200,
            thumbMinSize: 30,
            universal: !0,
          },
          o
        );
      };
    },
  },
]);
//# sourceMappingURL=87.9ee50dd8.chunk.js.map
