(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [48, 141, 142, 143, 144],
  {
    2067: function(e, t, n) {
      e.exports = n.p + 'static/media/1.cd65101a.png';
    },
    2068: function(e, t, n) {
      e.exports = n.p + 'static/media/2.59fab119.png';
    },
    2069: function(e, t, n) {
      e.exports = n.p + 'static/media/3.5e2f61a4.png';
    },
    2070: function(e, t, n) {
      e.exports = n.p + 'static/media/4.cdc5ef75.png';
    },
    2071: function(e, t, n) {
      e.exports = n.p + 'static/media/5.980b44e8.png';
    },
    2072: function(e, t, n) {
      e.exports = n.p + 'static/media/6.22b03704.png';
    },
    2073: function(e, t, n) {
      e.exports = n.p + 'static/media/7.c357584a.png';
    },
    2074: function(e, t, n) {
      e.exports = n.p + 'static/media/8.c85b836c.png';
    },
    2075: function(e, t, n) {
      e.exports = n.p + 'static/media/9.25a395eb.png';
    },
    2076: function(e, t, n) {
      e.exports = n.p + 'static/media/10.961c892b.png';
    },
    2077: function(e, t, n) {
      e.exports = n.p + 'static/media/11.15ea81b7.png';
    },
    2078: function(e, t, n) {
      e.exports = n.p + 'static/media/12.19226436.png';
    },
    2079: function(e, t, n) {
      e.exports = n.p + 'static/media/13.ba2c4ce5.png';
    },
    2080: function(e, t, n) {
      e.exports = n.p + 'static/media/14.2b309c44.png';
    },
    2081: function(e, t, n) {
      e.exports = n.p + 'static/media/15.eaeb5efd.png';
    },
    2665: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(548),
        i = n(546),
        u = n(550),
        c = n(547),
        m = n(560),
        o = (n(551), n(553).a),
        s = (n(552), n(554).a),
        d = n(622),
        p = n.n(d);
      function h(e) {
        var t = e.children;
        return r.a.createElement(p.a, null, t);
      }
      function b(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          t
        );
      }
      var f = n(107),
        g = n(28),
        E = n(22),
        x = (n(137), n(54).a);
      function w() {
        var e = Object(g.a)([
          '\n  position: relative;\n  .ant-btn {\n    position: absolute;\n    top: calc(50% - 32px / 2);\n    z-index: 1;\n    &.prev {\n      left: 15px;\n    }\n    &.next {\n      right: 15px;\n    }\n  }\n',
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var y = E.c.div(w());
      function T(e) {
        var t = Object(a.useState)(null),
          n = Object(f.a)(t, 2),
          l = n[0],
          i = n[1],
          u = e.children;
        return r.a.createElement(
          y,
          null,
          r.a.createElement(p.a, { getSwiper: i }, u),
          r.a.createElement(
            x,
            {
              className: 'prev',
              type: 'primary',
              onClick: function() {
                null !== l && l.slidePrev();
              },
            },
            'Prev'
          ),
          r.a.createElement(
            x,
            {
              className: 'next',
              type: 'primary',
              onClick: function() {
                null !== l && l.slideNext();
              },
            },
            'Next'
          )
        );
      }
      function _(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          { pagination: { el: '.swiper-pagination', clickable: !0 } },
          t
        );
      }
      function v(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            pagination: { el: '.swiper-pagination', type: 'progressbar' },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          t
        );
      }
      function k(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            pagination: { el: '.swiper-pagination', type: 'fraction' },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          t
        );
      }
      function S(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            pagination: {
              el: '.swiper-pagination',
              clickable: !0,
              renderBullet: function(e, t) {
                return '<span className="' + t + '">' + (e + 1) + '</span>';
              },
            },
          },
          t
        );
      }
      function j(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          { scrollbar: { el: '.swiper-scrollbar', hide: !1 } },
          t
        );
      }
      function B(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            direction: 'vertical',
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function O(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function N(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function P(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function z(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 4,
            centeredSlides: !0,
            spaceBetween: 30,
            grabCursor: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function C(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          t
        );
      }
      function F(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function I(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            spaceBetween: 30,
            centeredSlides: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: { el: '.swiper-pagination', clickable: !0 },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          t
        );
      }
      function M(e) {
        var t = e.children;
        return r.a.createElement(
          p.a,
          {
            slidesPerView: 4,
            centeredSlides: !0,
            spaceBetween: 30,
            grabCursor: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
          },
          t
        );
      }
      function R(e) {
        var t = Object(a.useState)(!1),
          n = Object(f.a)(t, 2),
          l = (n[0], n[1]),
          i = e.children,
          u = {
            ContainerEl: 'section',
            WrapperEl: 'section',
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            scrollbar: { el: '.swiper-scrollbar', hide: !1 },
            renderSrollbar: function() {
              return r.a.createElement(
                CustomScrollbar,
                null,
                r.a.createElement('hr', null)
              );
            },
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(p.a, Object.assign({ getSwiper: l }, u), i)
        );
      }
      n(2066);
      var L = n(558);
      function V() {
        var e = Object(g.a)([
          '\n  .swiper-container {\n    &.swiper-container-vertical {\n      .swiper-wrapper {\n        img {\n          height: auto !important;\n        }\n      }\n    }\n    &.swiper-container-multirow {\n      &.swiper-container-multirow-column {\n        .swiper-wrapper {\n          img {\n            margin-top: 0 !important;\n            margin-bottom: 30px !important;\n          }\n        }\n      }\n    }\n    .lazy-item {\n      img {\n        height: 450px !important;\n        @media only screen and (max-width: 1200px) {\n          height: 350px !important;\n        }\n        @media only screen and (max-width: 991px) {\n          height: 270px !important;\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      var W = E.c.div(V()),
        G = n(263),
        D = n.n(G),
        J = n(182),
        q = n.n(J),
        A = n(264),
        H = n.n(A),
        K = n(265),
        Q = n.n(K),
        U = n(183),
        X = n.n(U),
        Y = n(266),
        Z = n.n(Y),
        $ = n(184),
        ee = n.n($),
        te = n(267),
        ne = n.n(te),
        ae = n(185),
        re = n.n(ae),
        le = n(268),
        ie = n.n(le),
        ue = n(269),
        ce = n.n(ue),
        me = n(2067),
        oe = n.n(me),
        se = n(2068),
        de = n.n(se),
        pe = n(2069),
        he = n.n(pe),
        be = n(2070),
        fe = n.n(be),
        ge = n(2071),
        Ee = n.n(ge),
        xe = n(2072),
        we = n.n(xe),
        ye = n(2073),
        Te = n.n(ye),
        _e = n(2074),
        ve = n.n(_e),
        ke = n(2075),
        Se = n.n(ke),
        je = n(2076),
        Be = n.n(je),
        Oe = n(2077),
        Ne = n.n(Oe),
        Pe = n(2078),
        ze = n.n(Pe),
        Ce = n(2079),
        Fe = n.n(Ce),
        Ie = n(2080),
        Me = n.n(Ie),
        Re = n(2081),
        Le = n.n(Re),
        Ve = [
          { id: 1, thumb_url: oe.a, title: 'Basic Thumb' },
          { id: 2, thumb_url: de.a, title: 'Basic Thumb' },
          { id: 3, thumb_url: he.a, title: 'Basic Thumb' },
        ],
        We = [
          { id: 1, thumb_url: fe.a, title: 'Bullet Thumb' },
          { id: 2, thumb_url: Ee.a, title: 'bullet Thumb' },
          { id: 3, thumb_url: we.a, title: 'Bullet Thumb' },
        ],
        Ge = [
          { id: 1, thumb_url: Te.a, title: 'Progress Thumb' },
          { id: 2, thumb_url: ve.a, title: 'Progress Thumb' },
          { id: 3, thumb_url: Se.a, title: 'Progress Thumb' },
        ],
        De = [
          { id: 1, thumb_url: de.a, title: 'Progress Thumb' },
          { id: 2, thumb_url: he.a, title: 'Progress Thumb' },
          { id: 3, thumb_url: fe.a, title: 'Progress Thumb' },
        ],
        Je = [
          { id: 1, thumb_url: he.a, title: 'Progress Thumb' },
          { id: 2, thumb_url: fe.a, title: 'Progress Thumb' },
          { id: 3, thumb_url: Ee.a, title: 'Progress Thumb' },
        ],
        qe = [
          { id: 1, thumb_url: Le.a, title: 'Scroll Thumb' },
          { id: 2, thumb_url: Me.a, title: 'Scroll Thumb' },
          { id: 3, thumb_url: Fe.a, title: 'Scroll Thumb' },
        ],
        Ae = [
          { id: 1, thumb_url: Be.a, title: 'Verticle Thumb' },
          { id: 2, thumb_url: Ne.a, title: 'Verticle Thumb' },
          { id: 3, thumb_url: ze.a, title: 'Verticle Thumb' },
        ],
        He = [
          { id: 1, thumb_url: H.a, title: 'Grid Thumb' },
          { id: 2, thumb_url: q.a, title: 'Grid Thumb' },
          { id: 3, thumb_url: D.a, title: 'Grid Thumb' },
          { id: 4, thumb_url: Q.a, title: 'Grid Thumb' },
        ],
        Ke = [
          { id: 1, thumb_url: X.a, title: 'Free Mode Thumb' },
          { id: 2, thumb_url: Z.a, title: 'Free Mode Thumb' },
          { id: 3, thumb_url: ee.a, title: 'Free Mode Thumb' },
          { id: 4, thumb_url: ne.a, title: 'Free Mode Thumb' },
        ],
        Qe = [
          { id: 1, thumb_url: re.a, title: 'Multiple Row Thumb' },
          { id: 2, thumb_url: ie.a, title: 'Multiple Row Thumb' },
          { id: 3, thumb_url: ce.a, title: 'Multiple Row Thumb' },
          { id: 4, thumb_url: D.a, title: 'Multiple Row Thumb' },
          { id: 5, thumb_url: q.a, title: 'Multiple Row Thumb' },
          { id: 6, thumb_url: H.a, title: 'Multiple Row Thumb' },
          { id: 7, thumb_url: Q.a, title: 'Multiple Row Thumb' },
          { id: 8, thumb_url: X.a, title: 'Multiple Row Thumb' },
          { id: 9, thumb_url: Z.a, title: 'Multiple Row Thumb' },
          { id: 10, thumb_url: ee.a, title: 'Multiple Row Thumb' },
        ],
        Ue = [
          { id: 1, thumb_url: Le.a, title: 'Infinite Thumb' },
          { id: 2, thumb_url: Me.a, title: 'Infinite Thumb' },
          { id: 3, thumb_url: Fe.a, title: 'Infinite Thumb' },
          { id: 4, thumb_url: ze.a, title: 'Infinite Thumb' },
          { id: 5, thumb_url: Ne.a, title: 'Infinite Thumb' },
          { id: 6, thumb_url: Be.a, title: 'Infinite Thumb' },
        ],
        Xe = [
          { id: 1, thumb_url: Se.a, title: 'Infinite Thumb' },
          { id: 2, thumb_url: ve.a, title: 'Infinite Thumb' },
          { id: 3, thumb_url: Te.a, title: 'Infinite Thumb' },
          { id: 4, thumb_url: we.a, title: 'Infinite Thumb' },
          { id: 5, thumb_url: Ee.a, title: 'Infinite Thumb' },
        ],
        Ye = [
          { id: 1, thumb_url: oe.a, title: 'Infinite Thumb' },
          { id: 2, thumb_url: de.a, title: 'Infinite Thumb' },
          { id: 3, thumb_url: he.a, title: 'Infinite Thumb' },
          { id: 4, thumb_url: fe.a, title: 'Infinite Thumb' },
          { id: 5, thumb_url: Ee.a, title: 'Infinite Thumb' },
        ],
        Ze = [
          { id: 1, thumb_url: H.a, title: 'Lazy Thumb' },
          { id: 2, thumb_url: q.a, title: 'Lazy Thumb' },
          { id: 3, thumb_url: D.a, title: 'Lazy Thumb' },
          { id: 4, thumb_url: Q.a, title: 'Lazy Thumb' },
          { id: 5, thumb_url: X.a, title: 'Lazy Thumb' },
          { id: 6, thumb_url: Z.a, title: 'Lazy Thumb' },
          { id: 7, thumb_url: ee.a, title: 'Lazy Thumb' },
          { id: 8, thumb_url: ne.a, title: 'Lazy Thumb' },
        ],
        $e = [
          { id: 1, thumb_url: Te.a, title: 'custom Thumb' },
          { id: 2, thumb_url: ve.a, title: 'custom Thumb' },
          { id: 3, thumb_url: we.a, title: 'custom Thumb' },
          { id: 4, thumb_url: Ee.a, title: 'custom Thumb' },
          { id: 5, thumb_url: Se.a, title: 'custom Thumb' },
          { id: 6, thumb_url: fe.a, title: 'custom Thumb' },
        ],
        et = [
          { id: 1, thumb_url: Le.a, title: 'Nav Thumb' },
          { id: 2, thumb_url: Me.a, title: 'Nav Thumb' },
          { id: 3, thumb_url: Fe.a, title: 'Nav Thumb' },
        ],
        tt = [
          { id: 1, thumb_url: fe.a, title: 'Custom Scroll Thumb' },
          { id: 2, thumb_url: Ee.a, title: 'Custom Scroll Thumb' },
          { id: 3, thumb_url: we.a, title: 'Custom Scroll Thumb' },
        ];
      t.default = function() {
        var e = L.b.rowStyle,
          t = L.b.colStyle,
          n = L.b.gutter;
        return r.a.createElement(
          W,
          null,
          r.a.createElement(
            i.default,
            null,
            r.a.createElement(l.default, null, 'Swiper Slider'),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.basic.basicTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      h,
                      null,
                      Ve.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'basic-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.bullet.bulletTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      _,
                      null,
                      We.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'bullet-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.progress.progressTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      v,
                      null,
                      Ge.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'progress-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.fraction.fractionTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      k,
                      null,
                      De.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'fraction-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.numbered.numberedTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      S,
                      null,
                      Je.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'numbered-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.scroll.scrollTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      j,
                      null,
                      qe.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'scroll-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.verticle.verticleTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      B,
                      null,
                      Ae.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'scroll-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.multiple.multipleGridTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      O,
                      null,
                      He.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'grid-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.free.freeTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      N,
                      null,
                      Ke.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'freeMode-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.multirow.multirowTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      P,
                      null,
                      Qe.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'multiRow-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.cursor.cursorTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      z,
                      null,
                      He.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'cursor-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.loop.infiniteTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      C,
                      null,
                      Ue.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'infinite-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.wheel.wheelTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      F,
                      null,
                      Xe.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'wheel-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.auto.autoPlayTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      I,
                      null,
                      Ye.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'auto-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.lazy.lazyTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      M,
                      null,
                      Ze.map(function(e) {
                        return r.a.createElement(
                          'div',
                          {
                            className: 'lazy-item',
                            key: 'lazy-slider--key'.concat(e.id),
                          },
                          r.a.createElement('img', {
                            src: e.thumb_url,
                            alt: e.title,
                          }),
                          r.a.createElement('div', {
                            className:
                              'swiper-lazy-preloader swiper-lazy-preloader-white',
                          })
                        );
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.custom.basicNavTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      b,
                      null,
                      $e.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'custom-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.custom.buttonNavTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      T,
                      null,
                      et.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'customnav-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              o,
              { style: e, gutter: n, justify: 'start' },
              r.a.createElement(
                s,
                { md: 24, sm: 24, xs: 24, style: t },
                r.a.createElement(
                  c.default,
                  {
                    title: r.a.createElement(m.a, {
                      id: 'Swiper.custom.customScrollTitle',
                    }),
                  },
                  r.a.createElement(
                    u.default,
                    null,
                    r.a.createElement(
                      R,
                      null,
                      tt.map(function(e) {
                        return r.a.createElement('img', {
                          key: 'customScroll-slider--key'.concat(e.id),
                          src: e.thumb_url,
                          alt: e.title,
                        });
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    546: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28);
      function i() {
        var e = Object(l.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var u = n(22).c.div(i());
      t.default = function(e) {
        return r.a.createElement(
          u,
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
    547: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        u = n(6);
      function c() {
        var e = Object(l.a)([
          '\n  font-size: 13px;\n  font-weight: 400;\n  color: ',
          ';\n  line-height: 24px;\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(l.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var o = i.c.h3(m(), Object(u.palette)('text', 0)),
        s = i.c.p(c(), Object(u.palette)('text', 3)),
        d = function(e) {
          return r.a.createElement(
            'div',
            null,
            e.title
              ? r.a.createElement(
                  o,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? r.a.createElement(
                  s,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function p() {
        var e = Object(l.a)([
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
      var h = i.c.div(p(), Object(u.palette)('border', 0), '');
      t.default = function(e) {
        return r.a.createElement(
          h,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          r.a.createElement(d, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        u = n(6),
        c = n(59);
      function m() {
        var e = Object(l.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var o = i.c.h1(
          m(),
          Object(u.palette)('secondary', 2),
          Object(u.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(u.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        s = Object(c.a)(o);
      t.default = function(e) {
        return r.a.createElement(
          s,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(28),
        i = n(22),
        u = n(6),
        c = n(59);
      function m() {
        var e = Object(l.a)([
          '\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ',
          ';\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n    }\n\n    &:nth-child(4) {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ',
          ';\n      white-space: nowrap;\n      margin-right: ',
          ';\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ',
          ';\n      margin-left: ',
          ';\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ',
          ';\n    margin-right: ',
          ';\n    margin-left: ',
          ';\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ',
          ';\n      margin-left: ',
          ';\n\n      &:last-child {\n        margin-right: ',
          ';\n        margin-left: ',
          ';\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var o = i.c.div(
          m(),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '10px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '10px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'right' : 'left';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '295px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '295px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '70px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '70px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0 !important';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 !important' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '8px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '8px' : '0';
          },
          Object(u.palette)('secondary', 1),
          function(e) {
            return 'rtl' === e['data-rtl'] ? 'auto' : '6px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '6px' : '0';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0' : '15px';
          },
          function(e) {
            return 'rtl' === e['data-rtl'] ? '15px' : '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          },
          function(e) {
            return e['data-rtl'], '0';
          }
        ),
        s = Object(c.a)(o);
      t.default = function(e) {
        return r.a.createElement(
          s,
          { className: 'isoExampleWrapper', style: e.style },
          e.children
        );
      };
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'c', function() {
          return r;
        });
      var a = {
          blue: {
            deep: 'rgb(0, 121, 191)',
            light: 'lightblue',
            lighter: '#d9fcff',
            soft: '#E6FCFF',
          },
          black: '#4d4d4d',
          shadow: 'rgba(0,0,0,0.2)',
          grey: {
            darker: '#C1C7D0',
            dark: '#E2E4E6',
            medium: '#DFE1E5',
            N30: '#EBECF0',
            light: '#F4F5F7',
          },
          green: 'rgb(185, 244, 188)',
          white: 'white',
          purple: 'rebeccapurple',
          orange: '#FF991F',
        },
        r = 8,
        l = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = l;
    },
  },
]);
//# sourceMappingURL=48.c48a2391.chunk.js.map
