(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [38, 141, 142, 143, 144],
  {
    1115: function(e, t, n) {
      (function(e, n) {
        var r = 200,
          i = '__lodash_hash_undefined__',
          o = 1,
          a = 2,
          l = 9007199254740991,
          s = '[object Arguments]',
          c = '[object Array]',
          u = '[object AsyncFunction]',
          d = '[object Boolean]',
          f = '[object Date]',
          p = '[object Error]',
          h = '[object Function]',
          m = '[object GeneratorFunction]',
          g = '[object Map]',
          v = '[object Number]',
          y = '[object Null]',
          b = '[object Object]',
          x = '[object Proxy]',
          w = '[object RegExp]',
          k = '[object Set]',
          _ = '[object String]',
          C = '[object Symbol]',
          S = '[object Undefined]',
          M = '[object ArrayBuffer]',
          T = '[object DataView]',
          L = /^\[object .+?Constructor\]$/,
          O = /^(?:0|[1-9]\d*)$/,
          D = {};
        (D['[object Float32Array]'] = D['[object Float64Array]'] = D[
          '[object Int8Array]'
        ] = D['[object Int16Array]'] = D['[object Int32Array]'] = D[
          '[object Uint8Array]'
        ] = D['[object Uint8ClampedArray]'] = D['[object Uint16Array]'] = D[
          '[object Uint32Array]'
        ] = !0),
          (D[s] = D[c] = D[M] = D[d] = D[T] = D[f] = D[p] = D[h] = D[g] = D[
            v
          ] = D[b] = D[w] = D[k] = D[_] = D['[object WeakMap]'] = !1);
        var E = 'object' == typeof e && e && e.Object === Object && e,
          A = 'object' == typeof self && self && self.Object === Object && self,
          N = E || A || Function('return this')(),
          F = t && !t.nodeType && t,
          z = F && 'object' == typeof n && n && !n.nodeType && n,
          j = z && z.exports === F,
          P = j && E.process,
          I = (function() {
            try {
              return P && P.binding && P.binding('util');
            } catch (e) {}
          })(),
          q = I && I.isTypedArray;
        function W(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        }
        function B(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function R(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++t] = e;
            }),
            n
          );
        }
        var H,
          U,
          $ = Array.prototype,
          V = Function.prototype,
          K = Object.prototype,
          G = N['__core-js_shared__'],
          X = V.toString,
          Y = K.hasOwnProperty,
          Z = (function() {
            var e = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || '');
            return e ? 'Symbol(src)_1.' + e : '';
          })(),
          Q = K.toString,
          J = RegExp(
            '^' +
              X.call(Y)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          ee = j ? N.Buffer : void 0,
          te = N.Symbol,
          ne = N.Uint8Array,
          re = K.propertyIsEnumerable,
          ie = $.splice,
          oe = te ? te.toStringTag : void 0,
          ae = Object.getOwnPropertySymbols,
          le = ee ? ee.isBuffer : void 0,
          se =
            ((H = Object.keys),
            (U = Object),
            function(e) {
              return H(U(e));
            }),
          ce = Pe(N, 'DataView'),
          ue = Pe(N, 'Map'),
          de = Pe(N, 'Promise'),
          fe = Pe(N, 'Set'),
          pe = Pe(N, 'WeakMap'),
          he = Pe(Object, 'create'),
          me = Be(ce),
          ge = Be(ue),
          ve = Be(de),
          ye = Be(fe),
          be = Be(pe),
          xe = te ? te.prototype : void 0,
          we = xe ? xe.valueOf : void 0;
        function ke(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function _e(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Ce(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Se(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new Ce(); ++t < n; ) this.add(e[t]);
        }
        function Me(e) {
          var t = (this.__data__ = new _e(e));
          this.size = t.size;
        }
        function Te(e, t) {
          var n = Ue(e),
            r = !n && He(e),
            i = !n && !r && $e(e),
            o = !n && !r && !i && Ye(e),
            a = n || r || i || o,
            l = a
              ? (function(e, t) {
                  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                  return r;
                })(e.length, String)
              : [],
            s = l.length;
          for (var c in e)
            (!t && !Y.call(e, c)) ||
              (a &&
                ('length' == c ||
                  (i && ('offset' == c || 'parent' == c)) ||
                  (o &&
                    ('buffer' == c ||
                      'byteLength' == c ||
                      'byteOffset' == c)) ||
                  We(c, s))) ||
              l.push(c);
          return l;
        }
        function Le(e, t) {
          for (var n = e.length; n--; ) if (Re(e[n][0], t)) return n;
          return -1;
        }
        function Oe(e) {
          return null == e
            ? void 0 === e
              ? S
              : y
            : oe && oe in Object(e)
            ? (function(e) {
                var t = Y.call(e, oe),
                  n = e[oe];
                try {
                  e[oe] = void 0;
                  var r = !0;
                } catch (o) {}
                var i = Q.call(e);
                r && (t ? (e[oe] = n) : delete e[oe]);
                return i;
              })(e)
            : (function(e) {
                return Q.call(e);
              })(e);
        }
        function De(e) {
          return Xe(e) && Oe(e) == s;
        }
        function Ee(e, t, n, r, i) {
          return (
            e === t ||
            (null == e || null == t || (!Xe(e) && !Xe(t))
              ? e !== e && t !== t
              : (function(e, t, n, r, i, l) {
                  var u = Ue(e),
                    h = Ue(t),
                    m = u ? c : qe(e),
                    y = h ? c : qe(t),
                    x = (m = m == s ? b : m) == b,
                    S = (y = y == s ? b : y) == b,
                    L = m == y;
                  if (L && $e(e)) {
                    if (!$e(t)) return !1;
                    (u = !0), (x = !1);
                  }
                  if (L && !x)
                    return (
                      l || (l = new Me()),
                      u || Ye(e)
                        ? Fe(e, t, n, r, i, l)
                        : (function(e, t, n, r, i, l, s) {
                            switch (n) {
                              case T:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                )
                                  return !1;
                                (e = e.buffer), (t = t.buffer);
                              case M:
                                return !(
                                  e.byteLength != t.byteLength ||
                                  !l(new ne(e), new ne(t))
                                );
                              case d:
                              case f:
                              case v:
                                return Re(+e, +t);
                              case p:
                                return (
                                  e.name == t.name && e.message == t.message
                                );
                              case w:
                              case _:
                                return e == t + '';
                              case g:
                                var c = B;
                              case k:
                                var u = r & o;
                                if ((c || (c = R), e.size != t.size && !u))
                                  return !1;
                                var h = s.get(e);
                                if (h) return h == t;
                                (r |= a), s.set(e, t);
                                var m = Fe(c(e), c(t), r, i, l, s);
                                return s.delete(e), m;
                              case C:
                                if (we) return we.call(e) == we.call(t);
                            }
                            return !1;
                          })(e, t, m, n, r, i, l)
                    );
                  if (!(n & o)) {
                    var O = x && Y.call(e, '__wrapped__'),
                      D = S && Y.call(t, '__wrapped__');
                    if (O || D) {
                      var E = O ? e.value() : e,
                        A = D ? t.value() : t;
                      return l || (l = new Me()), i(E, A, n, r, l);
                    }
                  }
                  if (!L) return !1;
                  return (
                    l || (l = new Me()),
                    (function(e, t, n, r, i, a) {
                      var l = n & o,
                        s = ze(e),
                        c = s.length,
                        u = ze(t).length;
                      if (c != u && !l) return !1;
                      var d = c;
                      for (; d--; ) {
                        var f = s[d];
                        if (!(l ? f in t : Y.call(t, f))) return !1;
                      }
                      var p = a.get(e);
                      if (p && a.get(t)) return p == t;
                      var h = !0;
                      a.set(e, t), a.set(t, e);
                      var m = l;
                      for (; ++d < c; ) {
                        f = s[d];
                        var g = e[f],
                          v = t[f];
                        if (r)
                          var y = l ? r(v, g, f, t, e, a) : r(g, v, f, e, t, a);
                        if (!(void 0 === y ? g === v || i(g, v, n, r, a) : y)) {
                          h = !1;
                          break;
                        }
                        m || (m = 'constructor' == f);
                      }
                      if (h && !m) {
                        var b = e.constructor,
                          x = t.constructor;
                        b != x &&
                          'constructor' in e &&
                          'constructor' in t &&
                          !(
                            'function' == typeof b &&
                            b instanceof b &&
                            'function' == typeof x &&
                            x instanceof x
                          ) &&
                          (h = !1);
                      }
                      return a.delete(e), a.delete(t), h;
                    })(e, t, n, r, i, l)
                  );
                })(e, t, n, r, Ee, i))
          );
        }
        function Ae(e) {
          return (
            !(
              !Ge(e) ||
              (function(e) {
                return !!Z && Z in e;
              })(e)
            ) && (Ve(e) ? J : L).test(Be(e))
          );
        }
        function Ne(e) {
          if (
            !(function(e) {
              var t = e && e.constructor,
                n = ('function' == typeof t && t.prototype) || K;
              return e === n;
            })(e)
          )
            return se(e);
          var t = [];
          for (var n in Object(e))
            Y.call(e, n) && 'constructor' != n && t.push(n);
          return t;
        }
        function Fe(e, t, n, r, i, l) {
          var s = n & o,
            c = e.length,
            u = t.length;
          if (c != u && !(s && u > c)) return !1;
          var d = l.get(e);
          if (d && l.get(t)) return d == t;
          var f = -1,
            p = !0,
            h = n & a ? new Se() : void 0;
          for (l.set(e, t), l.set(t, e); ++f < c; ) {
            var m = e[f],
              g = t[f];
            if (r) var v = s ? r(g, m, f, t, e, l) : r(m, g, f, e, t, l);
            if (void 0 !== v) {
              if (v) continue;
              p = !1;
              break;
            }
            if (h) {
              if (
                !W(t, function(e, t) {
                  if (((o = t), !h.has(o) && (m === e || i(m, e, n, r, l))))
                    return h.push(t);
                  var o;
                })
              ) {
                p = !1;
                break;
              }
            } else if (m !== g && !i(m, g, n, r, l)) {
              p = !1;
              break;
            }
          }
          return l.delete(e), l.delete(t), p;
        }
        function ze(e) {
          return (function(e, t, n) {
            var r = t(e);
            return Ue(e)
              ? r
              : (function(e, t) {
                  for (var n = -1, r = t.length, i = e.length; ++n < r; )
                    e[i + n] = t[n];
                  return e;
                })(r, n(e));
          })(e, Ze, Ie);
        }
        function je(e, t) {
          var n = e.__data__;
          return (function(e) {
            var t = typeof e;
            return 'string' == t ||
              'number' == t ||
              'symbol' == t ||
              'boolean' == t
              ? '__proto__' !== e
              : null === e;
          })(t)
            ? n['string' == typeof t ? 'string' : 'hash']
            : n.map;
        }
        function Pe(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return Ae(n) ? n : void 0;
        }
        (ke.prototype.clear = function() {
          (this.__data__ = he ? he(null) : {}), (this.size = 0);
        }),
          (ke.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }),
          (ke.prototype.get = function(e) {
            var t = this.__data__;
            if (he) {
              var n = t[e];
              return n === i ? void 0 : n;
            }
            return Y.call(t, e) ? t[e] : void 0;
          }),
          (ke.prototype.has = function(e) {
            var t = this.__data__;
            return he ? void 0 !== t[e] : Y.call(t, e);
          }),
          (ke.prototype.set = function(e, t) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = he && void 0 === t ? i : t),
              this
            );
          }),
          (_e.prototype.clear = function() {
            (this.__data__ = []), (this.size = 0);
          }),
          (_e.prototype.delete = function(e) {
            var t = this.__data__,
              n = Le(t, e);
            return (
              !(n < 0) &&
              (n == t.length - 1 ? t.pop() : ie.call(t, n, 1), --this.size, !0)
            );
          }),
          (_e.prototype.get = function(e) {
            var t = this.__data__,
              n = Le(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (_e.prototype.has = function(e) {
            return Le(this.__data__, e) > -1;
          }),
          (_e.prototype.set = function(e, t) {
            var n = this.__data__,
              r = Le(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
          }),
          (Ce.prototype.clear = function() {
            (this.size = 0),
              (this.__data__ = {
                hash: new ke(),
                map: new (ue || _e)(),
                string: new ke(),
              });
          }),
          (Ce.prototype.delete = function(e) {
            var t = je(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          }),
          (Ce.prototype.get = function(e) {
            return je(this, e).get(e);
          }),
          (Ce.prototype.has = function(e) {
            return je(this, e).has(e);
          }),
          (Ce.prototype.set = function(e, t) {
            var n = je(this, e),
              r = n.size;
            return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
          }),
          (Se.prototype.add = Se.prototype.push = function(e) {
            return this.__data__.set(e, i), this;
          }),
          (Se.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (Me.prototype.clear = function() {
            (this.__data__ = new _e()), (this.size = 0);
          }),
          (Me.prototype.delete = function(e) {
            var t = this.__data__,
              n = t.delete(e);
            return (this.size = t.size), n;
          }),
          (Me.prototype.get = function(e) {
            return this.__data__.get(e);
          }),
          (Me.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (Me.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof _e) {
              var i = n.__data__;
              if (!ue || i.length < r - 1)
                return i.push([e, t]), (this.size = ++n.size), this;
              n = this.__data__ = new Ce(i);
            }
            return n.set(e, t), (this.size = n.size), this;
          });
        var Ie = ae
            ? function(e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    (function(e, t) {
                      for (
                        var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                        ++n < r;

                      ) {
                        var a = e[n];
                        t(a, n, e) && (o[i++] = a);
                      }
                      return o;
                    })(ae(e), function(t) {
                      return re.call(e, t);
                    }));
              }
            : function() {
                return [];
              },
          qe = Oe;
        function We(e, t) {
          return (
            !!(t = null == t ? l : t) &&
            ('number' == typeof e || O.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function Be(e) {
          if (null != e) {
            try {
              return X.call(e);
            } catch (t) {}
            try {
              return e + '';
            } catch (t) {}
          }
          return '';
        }
        function Re(e, t) {
          return e === t || (e !== e && t !== t);
        }
        ((ce && qe(new ce(new ArrayBuffer(1))) != T) ||
          (ue && qe(new ue()) != g) ||
          (de && '[object Promise]' != qe(de.resolve())) ||
          (fe && qe(new fe()) != k) ||
          (pe && '[object WeakMap]' != qe(new pe()))) &&
          (qe = function(e) {
            var t = Oe(e),
              n = t == b ? e.constructor : void 0,
              r = n ? Be(n) : '';
            if (r)
              switch (r) {
                case me:
                  return T;
                case ge:
                  return g;
                case ve:
                  return '[object Promise]';
                case ye:
                  return k;
                case be:
                  return '[object WeakMap]';
              }
            return t;
          });
        var He = De(
            (function() {
              return arguments;
            })()
          )
            ? De
            : function(e) {
                return Xe(e) && Y.call(e, 'callee') && !re.call(e, 'callee');
              },
          Ue = Array.isArray;
        var $e =
          le ||
          function() {
            return !1;
          };
        function Ve(e) {
          if (!Ge(e)) return !1;
          var t = Oe(e);
          return t == h || t == m || t == u || t == x;
        }
        function Ke(e) {
          return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= l;
        }
        function Ge(e) {
          var t = typeof e;
          return null != e && ('object' == t || 'function' == t);
        }
        function Xe(e) {
          return null != e && 'object' == typeof e;
        }
        var Ye = q
          ? (function(e) {
              return function(t) {
                return e(t);
              };
            })(q)
          : function(e) {
              return Xe(e) && Ke(e.length) && !!D[Oe(e)];
            };
        function Ze(e) {
          return null != (t = e) && Ke(t.length) && !Ve(t) ? Te(e) : Ne(e);
          var t;
        }
        n.exports = function(e, t) {
          return Ee(e, t);
        };
      }.call(this, n(53), n(116)(e)));
    },
    1566: function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0,
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0,
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0,
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
          },
          n = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1,
          };
        e.defineMode('xml', function(r, i) {
          var o,
            a,
            l = r.indentUnit,
            s = {},
            c = i.htmlMode ? t : n;
          for (var u in c) s[u] = c[u];
          for (var u in i) s[u] = i[u];
          function d(e, t) {
            function n(n) {
              return (t.tokenize = n), n(e, t);
            }
            var r = e.next();
            return '<' == r
              ? e.eat('!')
                ? e.eat('[')
                  ? e.match('CDATA[')
                    ? n(p('atom', ']]>'))
                    : null
                  : e.match('--')
                  ? n(p('comment', '--\x3e'))
                  : e.match('DOCTYPE', !0, !0)
                  ? (e.eatWhile(/[\w\._\-]/),
                    n(
                      (function e(t) {
                        return function(n, r) {
                          for (var i; null != (i = n.next()); ) {
                            if ('<' == i)
                              return (r.tokenize = e(t + 1)), r.tokenize(n, r);
                            if ('>' == i) {
                              if (1 == t) {
                                r.tokenize = d;
                                break;
                              }
                              return (r.tokenize = e(t - 1)), r.tokenize(n, r);
                            }
                          }
                          return 'meta';
                        };
                      })(1)
                    ))
                  : null
                : e.eat('?')
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = p('meta', '?>')),
                  'meta')
                : ((o = e.eat('/') ? 'closeTag' : 'openTag'),
                  (t.tokenize = f),
                  'tag bracket')
              : '&' == r
              ? (e.eat('#')
                ? e.eat('x')
                  ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
                  : e.eatWhile(/[\d]/) && e.eat(';')
                : e.eatWhile(/[\w\.\-:]/) && e.eat(';'))
                ? 'atom'
                : 'error'
              : (e.eatWhile(/[^&<]/), null);
          }
          function f(e, t) {
            var n = e.next();
            if ('>' == n || ('/' == n && e.eat('>')))
              return (
                (t.tokenize = d),
                (o = '>' == n ? 'endTag' : 'selfcloseTag'),
                'tag bracket'
              );
            if ('=' == n) return (o = 'equals'), null;
            if ('<' == n) {
              (t.tokenize = d), (t.state = v), (t.tagName = t.tagStart = null);
              var r = t.tokenize(e, t);
              return r ? r + ' tag error' : 'tag error';
            }
            return /[\'\"]/.test(n)
              ? ((t.tokenize = (function(e) {
                  var t = function(t, n) {
                    for (; !t.eol(); )
                      if (t.next() == e) {
                        n.tokenize = f;
                        break;
                      }
                    return 'string';
                  };
                  return (t.isInAttribute = !0), t;
                })(n)),
                (t.stringStartCol = e.column()),
                t.tokenize(e, t))
              : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
          }
          function p(e, t) {
            return function(n, r) {
              for (; !n.eol(); ) {
                if (n.match(t)) {
                  r.tokenize = d;
                  break;
                }
                n.next();
              }
              return e;
            };
          }
          function h(e, t, n) {
            (this.prev = e.context),
              (this.tagName = t),
              (this.indent = e.indented),
              (this.startOfLine = n),
              (s.doNotIndent.hasOwnProperty(t) ||
                (e.context && e.context.noIndent)) &&
                (this.noIndent = !0);
          }
          function m(e) {
            e.context && (e.context = e.context.prev);
          }
          function g(e, t) {
            for (var n; ; ) {
              if (!e.context) return;
              if (
                ((n = e.context.tagName),
                !s.contextGrabbers.hasOwnProperty(n) ||
                  !s.contextGrabbers[n].hasOwnProperty(t))
              )
                return;
              m(e);
            }
          }
          function v(e, t, n) {
            return 'openTag' == e
              ? ((n.tagStart = t.column()), y)
              : 'closeTag' == e
              ? b
              : v;
          }
          function y(e, t, n) {
            return 'word' == e
              ? ((n.tagName = t.current()), (a = 'tag'), k)
              : s.allowMissingTagName && 'endTag' == e
              ? ((a = 'tag bracket'), k(e, 0, n))
              : ((a = 'error'), y);
          }
          function b(e, t, n) {
            if ('word' == e) {
              var r = t.current();
              return (
                n.context &&
                  n.context.tagName != r &&
                  s.implicitlyClosed.hasOwnProperty(n.context.tagName) &&
                  m(n),
                (n.context && n.context.tagName == r) || !1 === s.matchClosing
                  ? ((a = 'tag'), x)
                  : ((a = 'tag error'), w)
              );
            }
            return s.allowMissingTagName && 'endTag' == e
              ? ((a = 'tag bracket'), x(e, 0, n))
              : ((a = 'error'), w);
          }
          function x(e, t, n) {
            return 'endTag' != e ? ((a = 'error'), x) : (m(n), v);
          }
          function w(e, t, n) {
            return (a = 'error'), x(e, 0, n);
          }
          function k(e, t, n) {
            if ('word' == e) return (a = 'attribute'), _;
            if ('endTag' == e || 'selfcloseTag' == e) {
              var r = n.tagName,
                i = n.tagStart;
              return (
                (n.tagName = n.tagStart = null),
                'selfcloseTag' == e || s.autoSelfClosers.hasOwnProperty(r)
                  ? g(n, r)
                  : (g(n, r), (n.context = new h(n, r, i == n.indented))),
                v
              );
            }
            return (a = 'error'), k;
          }
          function _(e, t, n) {
            return 'equals' == e
              ? C
              : (s.allowMissing || (a = 'error'), k(e, 0, n));
          }
          function C(e, t, n) {
            return 'string' == e
              ? S
              : 'word' == e && s.allowUnquoted
              ? ((a = 'string'), k)
              : ((a = 'error'), k(e, 0, n));
          }
          function S(e, t, n) {
            return 'string' == e ? S : k(e, 0, n);
          }
          return (
            (d.isInText = !0),
            {
              startState: function(e) {
                var t = {
                  tokenize: d,
                  state: v,
                  indented: e || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return null != e && (t.baseIndent = e), t;
              },
              token: function(e, t) {
                if (
                  (!t.tagName && e.sol() && (t.indented = e.indentation()),
                  e.eatSpace())
                )
                  return null;
                o = null;
                var n = t.tokenize(e, t);
                return (
                  (n || o) &&
                    'comment' != n &&
                    ((a = null),
                    (t.state = t.state(o || n, e, t)),
                    a && (n = 'error' == a ? n + ' error' : a)),
                  n
                );
              },
              indent: function(t, n, r) {
                var i = t.context;
                if (t.tokenize.isInAttribute)
                  return t.tagStart == t.indented
                    ? t.stringStartCol + 1
                    : t.indented + l;
                if (i && i.noIndent) return e.Pass;
                if (t.tokenize != f && t.tokenize != d)
                  return r ? r.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                  return !1 !== s.multilineTagIndentPastTag
                    ? t.tagStart + t.tagName.length + 2
                    : t.tagStart + l * (s.multilineTagIndentFactor || 1);
                if (s.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                if (o && o[1])
                  for (; i; ) {
                    if (i.tagName == o[2]) {
                      i = i.prev;
                      break;
                    }
                    if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                    i = i.prev;
                  }
                else if (o)
                  for (; i; ) {
                    var a = s.contextGrabbers[i.tagName];
                    if (!a || !a.hasOwnProperty(o[2])) break;
                    i = i.prev;
                  }
                for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                return i ? i.indent + l : t.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: '\x3c!--',
              blockCommentEnd: '--\x3e',
              configuration: s.htmlMode ? 'html' : 'xml',
              helperType: s.htmlMode ? 'html' : 'xml',
              skipAttribute: function(e) {
                e.state == C && (e.state = k);
              },
              xmlCurrentTag: function(e) {
                return e.tagName
                  ? { name: e.tagName, close: 'closeTag' == e.type }
                  : null;
              },
              xmlCurrentContext: function(e) {
                for (var t = [], n = e.context; n; n = n.prev)
                  n.tagName && t.push(n.tagName);
                return t.reverse();
              },
            }
          );
        }),
          e.defineMIME('text/xml', 'xml'),
          e.defineMIME('application/xml', 'xml'),
          e.mimeModes.hasOwnProperty('text/html') ||
            e.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
      })(n(777));
    },
    1757: function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineMode('javascript', function(t, n) {
          var r,
            i,
            o = t.indentUnit,
            a = n.statementIndent,
            l = n.jsonld,
            s = n.json || l,
            c = n.typescript,
            u = n.wordCharacters || /[\w$\xa1-\uffff]/,
            d = (function() {
              function e(e) {
                return { type: e, style: 'keyword' };
              }
              var t = e('keyword a'),
                n = e('keyword b'),
                r = e('keyword c'),
                i = e('keyword d'),
                o = e('operator'),
                a = { type: 'atom', style: 'atom' };
              return {
                if: e('if'),
                while: t,
                with: t,
                else: n,
                do: n,
                try: n,
                finally: n,
                return: i,
                break: i,
                continue: i,
                new: e('new'),
                delete: r,
                void: r,
                throw: r,
                debugger: e('debugger'),
                var: e('var'),
                const: e('var'),
                let: e('var'),
                function: e('function'),
                catch: e('catch'),
                for: e('for'),
                switch: e('switch'),
                case: e('case'),
                default: e('default'),
                in: o,
                typeof: o,
                instanceof: o,
                true: a,
                false: a,
                null: a,
                undefined: a,
                NaN: a,
                Infinity: a,
                this: e('this'),
                class: e('class'),
                super: e('atom'),
                yield: r,
                export: e('export'),
                import: e('import'),
                extends: r,
                await: r,
              };
            })(),
            f = /[+\-*&%=<>!?|~^@]/,
            p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function h(e, t, n) {
            return (r = e), (i = n), t;
          }
          function m(e, t) {
            var n,
              r = e.next();
            if ('"' == r || "'" == r)
              return (
                (t.tokenize =
                  ((n = r),
                  function(e, t) {
                    var r,
                      i = !1;
                    if (l && '@' == e.peek() && e.match(p))
                      return (t.tokenize = m), h('jsonld-keyword', 'meta');
                    for (; null != (r = e.next()) && (r != n || i); )
                      i = !i && '\\' == r;
                    return i || (t.tokenize = m), h('string', 'string');
                  })),
                t.tokenize(e, t)
              );
            if ('.' == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
              return h('number', 'number');
            if ('.' == r && e.match('..')) return h('spread', 'meta');
            if (/[\[\]{}\(\),;\:\.]/.test(r)) return h(r);
            if ('=' == r && e.eat('>')) return h('=>', 'operator');
            if ('0' == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
              return h('number', 'number');
            if (/\d/.test(r))
              return (
                e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                h('number', 'number')
              );
            if ('/' == r)
              return e.eat('*')
                ? ((t.tokenize = g), g(e, t))
                : e.eat('/')
                ? (e.skipToEnd(), h('comment', 'comment'))
                : Ge(e, t, 1)
                ? ((function(e) {
                    for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                      if (!n) {
                        if ('/' == t && !r) return;
                        '[' == t ? (r = !0) : r && ']' == t && (r = !1);
                      }
                      n = !n && '\\' == t;
                    }
                  })(e),
                  e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                  h('regexp', 'string-2'))
                : (e.eat('='), h('operator', 'operator', e.current()));
            if ('`' == r) return (t.tokenize = v), v(e, t);
            if ('#' == r) return e.skipToEnd(), h('error', 'error');
            if (('<' == r && e.match('!--')) || ('-' == r && e.match('->')))
              return e.skipToEnd(), h('comment', 'comment');
            if (f.test(r))
              return (
                ('>' == r && t.lexical && '>' == t.lexical.type) ||
                  (e.eat('=')
                    ? ('!' != r && '=' != r) || e.eat('=')
                    : /[<>*+\-]/.test(r) && (e.eat(r), '>' == r && e.eat(r))),
                h('operator', 'operator', e.current())
              );
            if (u.test(r)) {
              e.eatWhile(u);
              var i = e.current();
              if ('.' != t.lastType) {
                if (d.propertyIsEnumerable(i)) {
                  var o = d[i];
                  return h(o.type, o.style, i);
                }
                if ('async' == i && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1))
                  return h('async', 'keyword', i);
              }
              return h('variable', 'variable', i);
            }
          }
          function g(e, t) {
            for (var n, r = !1; (n = e.next()); ) {
              if ('/' == n && r) {
                t.tokenize = m;
                break;
              }
              r = '*' == n;
            }
            return h('comment', 'comment');
          }
          function v(e, t) {
            for (var n, r = !1; null != (n = e.next()); ) {
              if (!r && ('`' == n || ('$' == n && e.eat('{')))) {
                t.tokenize = m;
                break;
              }
              r = !r && '\\' == n;
            }
            return h('quasi', 'string-2', e.current());
          }
          var y = '([{}])';
          function b(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var n = e.string.indexOf('=>', e.start);
            if (!(n < 0)) {
              if (c) {
                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                  e.string.slice(e.start, n)
                );
                r && (n = r.index);
              }
              for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                var l = e.string.charAt(a),
                  s = y.indexOf(l);
                if (s >= 0 && s < 3) {
                  if (!i) {
                    ++a;
                    break;
                  }
                  if (0 == --i) {
                    '(' == l && (o = !0);
                    break;
                  }
                } else if (s >= 3 && s < 6) ++i;
                else if (u.test(l)) o = !0;
                else if (/["'\/`]/.test(l))
                  for (; ; --a) {
                    if (0 == a) return;
                    if (
                      e.string.charAt(a - 1) == l &&
                      '\\' != e.string.charAt(a - 2)
                    ) {
                      a--;
                      break;
                    }
                  }
                else if (o && !i) {
                  ++a;
                  break;
                }
              }
              o && !i && (t.fatArrowAt = a);
            }
          }
          var x = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            'jsonld-keyword': !0,
          };
          function w(e, t, n, r, i, o) {
            (this.indented = e),
              (this.column = t),
              (this.type = n),
              (this.prev = i),
              (this.info = o),
              null != r && (this.align = r);
          }
          function k(e, t) {
            for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
            for (var r = e.context; r; r = r.prev)
              for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
          }
          var _ = { state: null, column: null, marked: null, cc: null };
          function C() {
            for (var e = arguments.length - 1; e >= 0; e--)
              _.cc.push(arguments[e]);
          }
          function S() {
            return C.apply(null, arguments), !0;
          }
          function M(e, t) {
            for (var n = t; n; n = n.next) if (n.name == e) return !0;
            return !1;
          }
          function T(e) {
            var t = _.state;
            if (((_.marked = 'def'), t.context))
              if ('var' == t.lexical.info && t.context && t.context.block) {
                var r = (function e(t, n) {
                  if (n) {
                    if (n.block) {
                      var r = e(t, n.prev);
                      return r
                        ? r == n.prev
                          ? n
                          : new O(r, n.vars, !0)
                        : null;
                    }
                    return M(t, n.vars)
                      ? n
                      : new O(n.prev, new D(t, n.vars), !1);
                  }
                  return null;
                })(e, t.context);
                if (null != r) return void (t.context = r);
              } else if (!M(e, t.localVars))
                return void (t.localVars = new D(e, t.localVars));
            n.globalVars &&
              !M(e, t.globalVars) &&
              (t.globalVars = new D(e, t.globalVars));
          }
          function L(e) {
            return (
              'public' == e ||
              'private' == e ||
              'protected' == e ||
              'abstract' == e ||
              'readonly' == e
            );
          }
          function O(e, t, n) {
            (this.prev = e), (this.vars = t), (this.block = n);
          }
          function D(e, t) {
            (this.name = e), (this.next = t);
          }
          var E = new D('this', new D('arguments', null));
          function A() {
            (_.state.context = new O(_.state.context, _.state.localVars, !1)),
              (_.state.localVars = E);
          }
          function N() {
            (_.state.context = new O(_.state.context, _.state.localVars, !0)),
              (_.state.localVars = null);
          }
          function F() {
            (_.state.localVars = _.state.context.vars),
              (_.state.context = _.state.context.prev);
          }
          function z(e, t) {
            var n = function() {
              var n = _.state,
                r = n.indented;
              if ('stat' == n.lexical.type) r = n.lexical.indented;
              else
                for (
                  var i = n.lexical;
                  i && ')' == i.type && i.align;
                  i = i.prev
                )
                  r = i.indented;
              n.lexical = new w(r, _.stream.column(), e, null, n.lexical, t);
            };
            return (n.lex = !0), n;
          }
          function j() {
            var e = _.state;
            e.lexical.prev &&
              (')' == e.lexical.type && (e.indented = e.lexical.indented),
              (e.lexical = e.lexical.prev));
          }
          function P(e) {
            return function t(n) {
              return n == e
                ? S()
                : ';' == e || '}' == n || ')' == n || ']' == n
                ? C()
                : S(t);
            };
          }
          function I(e, t) {
            return 'var' == e
              ? S(z('vardef', t), be, P(';'), j)
              : 'keyword a' == e
              ? S(z('form'), R, I, j)
              : 'keyword b' == e
              ? S(z('form'), I, j)
              : 'keyword d' == e
              ? _.stream.match(/^\s*$/, !1)
                ? S()
                : S(z('stat'), U, P(';'), j)
              : 'debugger' == e
              ? S(P(';'))
              : '{' == e
              ? S(z('}'), N, ae, j, F)
              : ';' == e
              ? S()
              : 'if' == e
              ? ('else' == _.state.lexical.info &&
                  _.state.cc[_.state.cc.length - 1] == j &&
                  _.state.cc.pop()(),
                S(z('form'), R, I, j, Se))
              : 'function' == e
              ? S(Oe)
              : 'for' == e
              ? S(z('form'), Me, I, j)
              : 'class' == e || (c && 'interface' == t)
              ? ((_.marked = 'keyword'),
                S(z('form', 'class' == e ? e : t), Fe, j))
              : 'variable' == e
              ? c && 'declare' == t
                ? ((_.marked = 'keyword'), S(I))
                : c &&
                  ('module' == t || 'enum' == t || 'type' == t) &&
                  _.stream.match(/^\s*\w/, !1)
                ? ((_.marked = 'keyword'),
                  'enum' == t
                    ? S(Ve)
                    : 'type' == t
                    ? S(Ee, P('operator'), de, P(';'))
                    : S(z('form'), xe, P('{'), z('}'), ae, j, j))
                : c && 'namespace' == t
                ? ((_.marked = 'keyword'), S(z('form'), W, I, j))
                : c && 'abstract' == t
                ? ((_.marked = 'keyword'), S(I))
                : S(z('stat'), J)
              : 'switch' == e
              ? S(z('form'), R, P('{'), z('}', 'switch'), N, ae, j, j, F)
              : 'case' == e
              ? S(W, P(':'))
              : 'default' == e
              ? S(P(':'))
              : 'catch' == e
              ? S(z('form'), A, q, I, j, F)
              : 'export' == e
              ? S(z('stat'), Ie, j)
              : 'import' == e
              ? S(z('stat'), We, j)
              : 'async' == e
              ? S(I)
              : '@' == t
              ? S(W, I)
              : C(z('stat'), W, P(';'), j);
          }
          function q(e) {
            if ('(' == e) return S(Ae, P(')'));
          }
          function W(e, t) {
            return H(e, t, !1);
          }
          function B(e, t) {
            return H(e, t, !0);
          }
          function R(e) {
            return '(' != e ? C() : S(z(')'), W, P(')'), j);
          }
          function H(e, t, n) {
            if (_.state.fatArrowAt == _.stream.start) {
              var r = n ? Y : X;
              if ('(' == e) return S(A, z(')'), ie(Ae, ')'), j, P('=>'), r, F);
              if ('variable' == e) return C(A, xe, P('=>'), r, F);
            }
            var i = n ? V : $;
            return x.hasOwnProperty(e)
              ? S(i)
              : 'function' == e
              ? S(Oe, i)
              : 'class' == e || (c && 'interface' == t)
              ? ((_.marked = 'keyword'), S(z('form'), Ne, j))
              : 'keyword c' == e || 'async' == e
              ? S(n ? B : W)
              : '(' == e
              ? S(z(')'), U, P(')'), j, i)
              : 'operator' == e || 'spread' == e
              ? S(n ? B : W)
              : '[' == e
              ? S(z(']'), $e, j, i)
              : '{' == e
              ? oe(te, '}', null, i)
              : 'quasi' == e
              ? C(K, i)
              : 'new' == e
              ? S(
                  (function(e) {
                    return function(t) {
                      return '.' == t
                        ? S(e ? Q : Z)
                        : 'variable' == t && c
                        ? S(ge, e ? V : $)
                        : C(e ? B : W);
                    };
                  })(n)
                )
              : 'import' == e
              ? S(W)
              : S();
          }
          function U(e) {
            return e.match(/[;\}\)\],]/) ? C() : C(W);
          }
          function $(e, t) {
            return ',' == e ? S(W) : V(e, t, !1);
          }
          function V(e, t, n) {
            var r = 0 == n ? $ : V,
              i = 0 == n ? W : B;
            return '=>' == e
              ? S(A, n ? Y : X, F)
              : 'operator' == e
              ? /\+\+|--/.test(t) || (c && '!' == t)
                ? S(r)
                : c && '<' == t && _.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                ? S(z('>'), ie(de, '>'), j, r)
                : '?' == t
                ? S(W, P(':'), i)
                : S(i)
              : 'quasi' == e
              ? C(K, r)
              : ';' != e
              ? '(' == e
                ? oe(B, ')', 'call', r)
                : '.' == e
                ? S(ee, r)
                : '[' == e
                ? S(z(']'), U, P(']'), j, r)
                : c && 'as' == t
                ? ((_.marked = 'keyword'), S(de, r))
                : 'regexp' == e
                ? ((_.state.lastType = _.marked = 'operator'),
                  _.stream.backUp(_.stream.pos - _.stream.start - 1),
                  S(i))
                : void 0
              : void 0;
          }
          function K(e, t) {
            return 'quasi' != e
              ? C()
              : '${' != t.slice(t.length - 2)
              ? S(K)
              : S(W, G);
          }
          function G(e) {
            if ('}' == e)
              return (_.marked = 'string-2'), (_.state.tokenize = v), S(K);
          }
          function X(e) {
            return b(_.stream, _.state), C('{' == e ? I : W);
          }
          function Y(e) {
            return b(_.stream, _.state), C('{' == e ? I : B);
          }
          function Z(e, t) {
            if ('target' == t) return (_.marked = 'keyword'), S($);
          }
          function Q(e, t) {
            if ('target' == t) return (_.marked = 'keyword'), S(V);
          }
          function J(e) {
            return ':' == e ? S(j, I) : C($, P(';'), j);
          }
          function ee(e) {
            if ('variable' == e) return (_.marked = 'property'), S();
          }
          function te(e, t) {
            return 'async' == e
              ? ((_.marked = 'property'), S(te))
              : 'variable' == e || 'keyword' == _.style
              ? ((_.marked = 'property'),
                'get' == t || 'set' == t
                  ? S(ne)
                  : (c &&
                      _.state.fatArrowAt == _.stream.start &&
                      (n = _.stream.match(/^\s*:\s*/, !1)) &&
                      (_.state.fatArrowAt = _.stream.pos + n[0].length),
                    S(re)))
              : 'number' == e || 'string' == e
              ? ((_.marked = l ? 'property' : _.style + ' property'), S(re))
              : 'jsonld-keyword' == e
              ? S(re)
              : c && L(t)
              ? ((_.marked = 'keyword'), S(te))
              : '[' == e
              ? S(W, le, P(']'), re)
              : 'spread' == e
              ? S(B, re)
              : '*' == t
              ? ((_.marked = 'keyword'), S(te))
              : ':' == e
              ? C(re)
              : void 0;
            var n;
          }
          function ne(e) {
            return 'variable' != e ? C(re) : ((_.marked = 'property'), S(Oe));
          }
          function re(e) {
            return ':' == e ? S(B) : '(' == e ? C(Oe) : void 0;
          }
          function ie(e, t, n) {
            function r(i, o) {
              if (n ? n.indexOf(i) > -1 : ',' == i) {
                var a = _.state.lexical;
                return (
                  'call' == a.info && (a.pos = (a.pos || 0) + 1),
                  S(function(n, r) {
                    return n == t || r == t ? C() : C(e);
                  }, r)
                );
              }
              return i == t || o == t
                ? S()
                : n && n.indexOf(';') > -1
                ? C(e)
                : S(P(t));
            }
            return function(n, i) {
              return n == t || i == t ? S() : C(e, r);
            };
          }
          function oe(e, t, n) {
            for (var r = 3; r < arguments.length; r++) _.cc.push(arguments[r]);
            return S(z(t, n), ie(e, t), j);
          }
          function ae(e) {
            return '}' == e ? S() : C(I, ae);
          }
          function le(e, t) {
            if (c) {
              if (':' == e) return S(de);
              if ('?' == t) return S(le);
            }
          }
          function se(e, t) {
            if (c && (':' == e || 'in' == t)) return S(de);
          }
          function ce(e) {
            if (c && ':' == e)
              return _.stream.match(/^\s*\w+\s+is\b/, !1)
                ? S(W, ue, de)
                : S(de);
          }
          function ue(e, t) {
            if ('is' == t) return (_.marked = 'keyword'), S();
          }
          function de(e, t) {
            return 'keyof' == t || 'typeof' == t || 'infer' == t
              ? ((_.marked = 'keyword'), S('typeof' == t ? B : de))
              : 'variable' == e || 'void' == t
              ? ((_.marked = 'type'), S(me))
              : '|' == t || '&' == t
              ? S(de)
              : 'string' == e || 'number' == e || 'atom' == e
              ? S(me)
              : '[' == e
              ? S(z(']'), ie(de, ']', ','), j, me)
              : '{' == e
              ? S(z('}'), ie(pe, '}', ',;'), j, me)
              : '(' == e
              ? S(ie(he, ')'), fe, me)
              : '<' == e
              ? S(ie(de, '>'), de)
              : void 0;
          }
          function fe(e) {
            if ('=>' == e) return S(de);
          }
          function pe(e, t) {
            return 'variable' == e || 'keyword' == _.style
              ? ((_.marked = 'property'), S(pe))
              : '?' == t || 'number' == e || 'string' == e
              ? S(pe)
              : ':' == e
              ? S(de)
              : '[' == e
              ? S(P('variable'), se, P(']'), pe)
              : '(' == e
              ? C(De, pe)
              : void 0;
          }
          function he(e, t) {
            return ('variable' == e && _.stream.match(/^\s*[?:]/, !1)) ||
              '?' == t
              ? S(he)
              : ':' == e
              ? S(de)
              : 'spread' == e
              ? S(he)
              : C(de);
          }
          function me(e, t) {
            return '<' == t
              ? S(z('>'), ie(de, '>'), j, me)
              : '|' == t || '.' == e || '&' == t
              ? S(de)
              : '[' == e
              ? S(de, P(']'), me)
              : 'extends' == t || 'implements' == t
              ? ((_.marked = 'keyword'), S(de))
              : '?' == t
              ? S(de, P(':'), de)
              : void 0;
          }
          function ge(e, t) {
            if ('<' == t) return S(z('>'), ie(de, '>'), j, me);
          }
          function ve() {
            return C(de, ye);
          }
          function ye(e, t) {
            if ('=' == t) return S(de);
          }
          function be(e, t) {
            return 'enum' == t
              ? ((_.marked = 'keyword'), S(Ve))
              : C(xe, le, _e, Ce);
          }
          function xe(e, t) {
            return c && L(t)
              ? ((_.marked = 'keyword'), S(xe))
              : 'variable' == e
              ? (T(t), S())
              : 'spread' == e
              ? S(xe)
              : '[' == e
              ? oe(ke, ']')
              : '{' == e
              ? oe(we, '}')
              : void 0;
          }
          function we(e, t) {
            return 'variable' != e || _.stream.match(/^\s*:/, !1)
              ? ('variable' == e && (_.marked = 'property'),
                'spread' == e
                  ? S(xe)
                  : '}' == e
                  ? C()
                  : '[' == e
                  ? S(W, P(']'), P(':'), we)
                  : S(P(':'), xe, _e))
              : (T(t), S(_e));
          }
          function ke() {
            return C(xe, _e);
          }
          function _e(e, t) {
            if ('=' == t) return S(B);
          }
          function Ce(e) {
            if (',' == e) return S(be);
          }
          function Se(e, t) {
            if ('keyword b' == e && 'else' == t)
              return S(z('form', 'else'), I, j);
          }
          function Me(e, t) {
            return 'await' == t ? S(Me) : '(' == e ? S(z(')'), Te, j) : void 0;
          }
          function Te(e) {
            return 'var' == e ? S(be, Le) : 'variable' == e ? S(Le) : C(Le);
          }
          function Le(e, t) {
            return ')' == e
              ? S()
              : ';' == e
              ? S(Le)
              : 'in' == t || 'of' == t
              ? ((_.marked = 'keyword'), S(W, Le))
              : C(W, Le);
          }
          function Oe(e, t) {
            return '*' == t
              ? ((_.marked = 'keyword'), S(Oe))
              : 'variable' == e
              ? (T(t), S(Oe))
              : '(' == e
              ? S(A, z(')'), ie(Ae, ')'), j, ce, I, F)
              : c && '<' == t
              ? S(z('>'), ie(ve, '>'), j, Oe)
              : void 0;
          }
          function De(e, t) {
            return '*' == t
              ? ((_.marked = 'keyword'), S(De))
              : 'variable' == e
              ? (T(t), S(De))
              : '(' == e
              ? S(A, z(')'), ie(Ae, ')'), j, ce, F)
              : c && '<' == t
              ? S(z('>'), ie(ve, '>'), j, De)
              : void 0;
          }
          function Ee(e, t) {
            return 'keyword' == e || 'variable' == e
              ? ((_.marked = 'type'), S(Ee))
              : '<' == t
              ? S(z('>'), ie(ve, '>'), j)
              : void 0;
          }
          function Ae(e, t) {
            return (
              '@' == t && S(W, Ae),
              'spread' == e
                ? S(Ae)
                : c && L(t)
                ? ((_.marked = 'keyword'), S(Ae))
                : c && 'this' == e
                ? S(le, _e)
                : C(xe, le, _e)
            );
          }
          function Ne(e, t) {
            return 'variable' == e ? Fe(e, t) : ze(e, t);
          }
          function Fe(e, t) {
            if ('variable' == e) return T(t), S(ze);
          }
          function ze(e, t) {
            return '<' == t
              ? S(z('>'), ie(ve, '>'), j, ze)
              : 'extends' == t || 'implements' == t || (c && ',' == e)
              ? ('implements' == t && (_.marked = 'keyword'), S(c ? de : W, ze))
              : '{' == e
              ? S(z('}'), je, j)
              : void 0;
          }
          function je(e, t) {
            return 'async' == e ||
              ('variable' == e &&
                ('static' == t || 'get' == t || 'set' == t || (c && L(t))) &&
                _.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
              ? ((_.marked = 'keyword'), S(je))
              : 'variable' == e || 'keyword' == _.style
              ? ((_.marked = 'property'), S(c ? Pe : Oe, je))
              : 'number' == e || 'string' == e
              ? S(c ? Pe : Oe, je)
              : '[' == e
              ? S(W, le, P(']'), c ? Pe : Oe, je)
              : '*' == t
              ? ((_.marked = 'keyword'), S(je))
              : c && '(' == e
              ? C(De, je)
              : ';' == e || ',' == e
              ? S(je)
              : '}' == e
              ? S()
              : '@' == t
              ? S(W, je)
              : void 0;
          }
          function Pe(e, t) {
            if ('?' == t) return S(Pe);
            if (':' == e) return S(de, _e);
            if ('=' == t) return S(B);
            var n = _.state.lexical.prev;
            return C(n && 'interface' == n.info ? De : Oe);
          }
          function Ie(e, t) {
            return '*' == t
              ? ((_.marked = 'keyword'), S(Ue, P(';')))
              : 'default' == t
              ? ((_.marked = 'keyword'), S(W, P(';')))
              : '{' == e
              ? S(ie(qe, '}'), Ue, P(';'))
              : C(I);
          }
          function qe(e, t) {
            return 'as' == t
              ? ((_.marked = 'keyword'), S(P('variable')))
              : 'variable' == e
              ? C(B, qe)
              : void 0;
          }
          function We(e) {
            return 'string' == e ? S() : '(' == e ? C(W) : C(Be, Re, Ue);
          }
          function Be(e, t) {
            return '{' == e
              ? oe(Be, '}')
              : ('variable' == e && T(t),
                '*' == t && (_.marked = 'keyword'),
                S(He));
          }
          function Re(e) {
            if (',' == e) return S(Be, Re);
          }
          function He(e, t) {
            if ('as' == t) return (_.marked = 'keyword'), S(Be);
          }
          function Ue(e, t) {
            if ('from' == t) return (_.marked = 'keyword'), S(W);
          }
          function $e(e) {
            return ']' == e ? S() : C(ie(B, ']'));
          }
          function Ve() {
            return C(z('form'), xe, P('{'), z('}'), ie(Ke, '}'), j, j);
          }
          function Ke() {
            return C(xe, _e);
          }
          function Ge(e, t, n) {
            return (
              (t.tokenize == m &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  t.lastType
                )) ||
              ('quasi' == t.lastType &&
                /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
            );
          }
          return (
            (F.lex = !0),
            (j.lex = !0),
            {
              startState: function(e) {
                var t = {
                  tokenize: m,
                  lastType: 'sof',
                  cc: [],
                  lexical: new w((e || 0) - o, 0, 'block', !1),
                  localVars: n.localVars,
                  context: n.localVars && new O(null, null, !1),
                  indented: e || 0,
                };
                return (
                  n.globalVars &&
                    'object' == typeof n.globalVars &&
                    (t.globalVars = n.globalVars),
                  t
                );
              },
              token: function(e, t) {
                if (
                  (e.sol() &&
                    (t.lexical.hasOwnProperty('align') ||
                      (t.lexical.align = !1),
                    (t.indented = e.indentation()),
                    b(e, t)),
                  t.tokenize != g && e.eatSpace())
                )
                  return null;
                var n = t.tokenize(e, t);
                return 'comment' == r
                  ? n
                  : ((t.lastType =
                      'operator' != r || ('++' != i && '--' != i)
                        ? r
                        : 'incdec'),
                    (function(e, t, n, r, i) {
                      var o = e.cc;
                      for (
                        _.state = e,
                          _.stream = i,
                          _.marked = null,
                          _.cc = o,
                          _.style = t,
                          e.lexical.hasOwnProperty('align') ||
                            (e.lexical.align = !0);
                        ;

                      )
                        if ((o.length ? o.pop() : s ? W : I)(n, r)) {
                          for (; o.length && o[o.length - 1].lex; ) o.pop()();
                          return _.marked
                            ? _.marked
                            : 'variable' == n && k(e, r)
                            ? 'variable-2'
                            : t;
                        }
                    })(t, n, r, i, e));
              },
              indent: function(t, r) {
                if (t.tokenize == g) return e.Pass;
                if (t.tokenize != m) return 0;
                var i,
                  l = r && r.charAt(0),
                  s = t.lexical;
                if (!/^\s*else\b/.test(r))
                  for (var c = t.cc.length - 1; c >= 0; --c) {
                    var u = t.cc[c];
                    if (u == j) s = s.prev;
                    else if (u != Se) break;
                  }
                for (
                  ;
                  ('stat' == s.type || 'form' == s.type) &&
                  ('}' == l ||
                    ((i = t.cc[t.cc.length - 1]) &&
                      (i == $ || i == V) &&
                      !/^[,\.=+\-*:?[\(]/.test(r)));

                )
                  s = s.prev;
                a && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
                var d = s.type,
                  p = l == d;
                return 'vardef' == d
                  ? s.indented +
                      ('operator' == t.lastType || ',' == t.lastType
                        ? s.info.length + 1
                        : 0)
                  : 'form' == d && '{' == l
                  ? s.indented
                  : 'form' == d
                  ? s.indented + o
                  : 'stat' == d
                  ? s.indented +
                    ((function(e, t) {
                      return (
                        'operator' == e.lastType ||
                        ',' == e.lastType ||
                        f.test(t.charAt(0)) ||
                        /[,.]/.test(t.charAt(0))
                      );
                    })(t, r)
                      ? a || o
                      : 0)
                  : 'switch' != s.info || p || 0 == n.doubleIndentSwitch
                  ? s.align
                    ? s.column + (p ? 0 : 1)
                    : s.indented + (p ? 0 : o)
                  : s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: s ? null : '/*',
              blockCommentEnd: s ? null : '*/',
              blockCommentContinue: s ? null : ' * ',
              lineComment: s ? null : '//',
              fold: 'brace',
              closeBrackets: '()[]{}\'\'""``',
              helperType: s ? 'json' : 'javascript',
              jsonldMode: l,
              jsonMode: s,
              expressionAllowed: Ge,
              skipExpression: function(e) {
                var t = e.cc[e.cc.length - 1];
                (t != W && t != B) || e.cc.pop();
              },
            }
          );
        }),
          e.registerHelper('wordChars', 'javascript', /[\w$]/),
          e.defineMIME('text/javascript', 'javascript'),
          e.defineMIME('text/ecmascript', 'javascript'),
          e.defineMIME('application/javascript', 'javascript'),
          e.defineMIME('application/x-javascript', 'javascript'),
          e.defineMIME('application/ecmascript', 'javascript'),
          e.defineMIME('application/json', { name: 'javascript', json: !0 }),
          e.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
          e.defineMIME('application/ld+json', {
            name: 'javascript',
            jsonld: !0,
          }),
          e.defineMIME('text/typescript', {
            name: 'javascript',
            typescript: !0,
          }),
          e.defineMIME('application/typescript', {
            name: 'javascript',
            typescript: !0,
          });
      })(n(777));
    },
    2276: function(e, t, n) {
      'use strict';
      var r = n(0),
        i = (n(13), n(1)),
        o = n(12),
        a = n(715),
        l = n(1115);
      function s(e) {
        return e ? e.replace(/\r\n|\r/g, '\n') : e;
      }
      var c = n(695)({
        propTypes: {
          autoFocus: i.bool,
          className: i.any,
          codeMirrorInstance: i.func,
          defaultValue: i.string,
          name: i.string,
          onChange: i.func,
          onCursorActivity: i.func,
          onFocusChange: i.func,
          onScroll: i.func,
          options: i.object,
          path: i.string,
          value: i.string,
          preserveScrollPosition: i.bool,
        },
        getDefaultProps: function() {
          return { preserveScrollPosition: !1 };
        },
        getCodeMirrorInstance: function() {
          return this.props.codeMirrorInstance || n(777);
        },
        getInitialState: function() {
          return { isFocused: !1 };
        },
        componentWillMount: function() {
          (this.componentWillReceiveProps = a(
            this.componentWillReceiveProps,
            0
          )),
            this.props.path &&
              console.error(
                'Warning: react-codemirror: the `path` prop has been changed to `name`'
              );
        },
        componentDidMount: function() {
          var e = this.getCodeMirrorInstance();
          (this.codeMirror = e.fromTextArea(
            this.textareaNode,
            this.props.options
          )),
            this.codeMirror.on('change', this.codemirrorValueChanged),
            this.codeMirror.on('cursorActivity', this.cursorActivity),
            this.codeMirror.on('focus', this.focusChanged.bind(this, !0)),
            this.codeMirror.on('blur', this.focusChanged.bind(this, !1)),
            this.codeMirror.on('scroll', this.scrollChanged),
            this.codeMirror.setValue(
              this.props.defaultValue || this.props.value || ''
            );
        },
        componentWillUnmount: function() {
          this.codeMirror && this.codeMirror.toTextArea();
        },
        componentWillReceiveProps: function(e) {
          if (
            this.codeMirror &&
            void 0 !== e.value &&
            e.value !== this.props.value &&
            s(this.codeMirror.getValue()) !== s(e.value)
          )
            if (this.props.preserveScrollPosition) {
              var t = this.codeMirror.getScrollInfo();
              this.codeMirror.setValue(e.value),
                this.codeMirror.scrollTo(t.left, t.top);
            } else this.codeMirror.setValue(e.value);
          if ('object' === typeof e.options)
            for (var n in e.options)
              e.options.hasOwnProperty(n) &&
                this.setOptionIfChanged(n, e.options[n]);
        },
        setOptionIfChanged: function(e, t) {
          var n = this.codeMirror.getOption(e);
          l(n, t) || this.codeMirror.setOption(e, t);
        },
        getCodeMirror: function() {
          return this.codeMirror;
        },
        focus: function() {
          this.codeMirror && this.codeMirror.focus();
        },
        focusChanged: function(e) {
          this.setState({ isFocused: e }),
            this.props.onFocusChange && this.props.onFocusChange(e);
        },
        cursorActivity: function(e) {
          this.props.onCursorActivity && this.props.onCursorActivity(e);
        },
        scrollChanged: function(e) {
          this.props.onScroll && this.props.onScroll(e.getScrollInfo());
        },
        codemirrorValueChanged: function(e, t) {
          this.props.onChange &&
            'setValue' !== t.origin &&
            this.props.onChange(e.getValue(), t);
        },
        render: function() {
          var e = this,
            t = o(
              'ReactCodeMirror',
              this.state.isFocused ? 'ReactCodeMirror--focused' : null,
              this.props.className
            );
          return r.createElement(
            'div',
            { className: t },
            r.createElement('textarea', {
              ref: function(t) {
                return (e.textareaNode = t);
              },
              name: this.props.name || this.props.path,
              defaultValue: this.props.value,
              autoComplete: 'off',
              autoFocus: this.props.autoFocus,
            })
          );
        },
      });
      e.exports = c;
    },
    2277: function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineMode(
          'markdown',
          function(t, n) {
            var r = e.getMode(t, 'text/html'),
              i = 'null' == r.name;
            void 0 === n.highlightFormatting && (n.highlightFormatting = !1),
              void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0),
              void 0 === n.taskLists && (n.taskLists = !1),
              void 0 === n.strikethrough && (n.strikethrough = !1),
              void 0 === n.emoji && (n.emoji = !1),
              void 0 === n.fencedCodeBlockHighlighting &&
                (n.fencedCodeBlockHighlighting = !0),
              void 0 === n.xml && (n.xml = !0),
              void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
            var o = {
              header: 'header',
              code: 'comment',
              quote: 'quote',
              list1: 'variable-2',
              list2: 'variable-3',
              list3: 'keyword',
              hr: 'hr',
              image: 'image',
              imageAltText: 'image-alt-text',
              imageMarker: 'image-marker',
              formatting: 'formatting',
              linkInline: 'link',
              linkEmail: 'link',
              linkText: 'link',
              linkHref: 'string',
              em: 'em',
              strong: 'strong',
              strikethrough: 'strikethrough',
              emoji: 'builtin',
            };
            for (var a in o)
              o.hasOwnProperty(a) &&
                n.tokenTypeOverrides[a] &&
                (o[a] = n.tokenTypeOverrides[a]);
            var l = /^([*\-_])(?:\s*\1){2,}\s*$/,
              s = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              c = /^\[(x| )\](?=\s)/i,
              u = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              d = /^ *(?:\={1,}|-{1,})\s*$/,
              f = /^[^#!\[\]*_\\<>` "'(~:]+/,
              p = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
              h = /^\s*\[[^\]]+?\]:.*$/,
              m = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;
            function g(e, t, n) {
              return (t.f = t.inline = n), n(e, t);
            }
            function v(e, t, n) {
              return (t.f = t.block = n), n(e, t);
            }
            function y(t) {
              if (
                ((t.linkTitle = !1),
                (t.linkHref = !1),
                (t.linkText = !1),
                (t.em = !1),
                (t.strong = !1),
                (t.strikethrough = !1),
                (t.quote = 0),
                (t.indentedCode = !1),
                t.f == x)
              ) {
                var n = i;
                if (!n) {
                  var o = e.innerMode(r, t.htmlState);
                  n =
                    'xml' == o.mode.name &&
                    null === o.state.tagStart &&
                    !o.state.context &&
                    o.state.tokenize.isInText;
                }
                n && ((t.f = C), (t.block = b), (t.htmlState = null));
              }
              return (
                (t.trailingSpace = 0),
                (t.trailingSpaceNewLine = !1),
                (t.prevLine = t.thisLine),
                (t.thisLine = { stream: null }),
                null
              );
            }
            function b(r, i) {
              var a,
                f = r.column() === i.indentation,
                m = !(a = i.prevLine.stream) || !/\S/.test(a.string),
                v = i.indentedCode,
                y = i.prevLine.hr,
                b = !1 !== i.list,
                x = (i.listStack[i.listStack.length - 1] || 0) + 3;
              i.indentedCode = !1;
              var _ = i.indentation;
              if (
                null === i.indentationDiff &&
                ((i.indentationDiff = i.indentation), b)
              ) {
                for (
                  i.em = !1,
                    i.strong = !1,
                    i.code = !1,
                    i.strikethrough = !1,
                    i.list = null;
                  _ < i.listStack[i.listStack.length - 1];

                )
                  i.listStack.pop(),
                    i.listStack.length
                      ? (i.indentation = i.listStack[i.listStack.length - 1])
                      : (i.list = !1);
                !1 !== i.list &&
                  (i.indentationDiff = _ - i.listStack[i.listStack.length - 1]);
              }
              var C =
                  !m &&
                  !y &&
                  !i.prevLine.header &&
                  (!b || !v) &&
                  !i.prevLine.fencedCodeEnd,
                S =
                  (!1 === i.list || y || m) && i.indentation <= x && r.match(l),
                M = null;
              if (
                i.indentationDiff >= 4 &&
                (v || i.prevLine.fencedCodeEnd || i.prevLine.header || m)
              )
                return r.skipToEnd(), (i.indentedCode = !0), o.code;
              if (r.eatSpace()) return null;
              if (
                f &&
                i.indentation <= x &&
                (M = r.match(u)) &&
                M[1].length <= 6
              )
                return (
                  (i.quote = 0),
                  (i.header = M[1].length),
                  (i.thisLine.header = !0),
                  n.highlightFormatting && (i.formatting = 'header'),
                  (i.f = i.inline),
                  k(i)
                );
              if (i.indentation <= x && r.eat('>'))
                return (
                  (i.quote = f ? 1 : i.quote + 1),
                  n.highlightFormatting && (i.formatting = 'quote'),
                  r.eatSpace(),
                  k(i)
                );
              if (
                !S &&
                !i.setext &&
                f &&
                i.indentation <= x &&
                (M = r.match(s))
              ) {
                var T = M[1] ? 'ol' : 'ul';
                return (
                  (i.indentation = _ + r.current().length),
                  (i.list = !0),
                  (i.quote = 0),
                  i.listStack.push(i.indentation),
                  n.taskLists && r.match(c, !1) && (i.taskList = !0),
                  (i.f = i.inline),
                  n.highlightFormatting &&
                    (i.formatting = ['list', 'list-' + T]),
                  k(i)
                );
              }
              return f && i.indentation <= x && (M = r.match(p, !0))
                ? ((i.quote = 0),
                  (i.fencedEndRE = new RegExp(M[1] + '+ *$')),
                  (i.localMode =
                    n.fencedCodeBlockHighlighting &&
                    (function(n) {
                      if (e.findModeByName) {
                        var r = e.findModeByName(n);
                        r && (n = r.mime || r.mimes[0]);
                      }
                      var i = e.getMode(t, n);
                      return 'null' == i.name ? null : i;
                    })(M[2])),
                  i.localMode && (i.localState = e.startState(i.localMode)),
                  (i.f = i.block = w),
                  n.highlightFormatting && (i.formatting = 'code-block'),
                  (i.code = -1),
                  k(i))
                : i.setext ||
                  (!(
                    (C && b) ||
                    i.quote ||
                    !1 !== i.list ||
                    i.code ||
                    S ||
                    h.test(r.string)
                  ) &&
                    (M = r.lookAhead(1)) &&
                    (M = M.match(d)))
                ? (i.setext
                    ? ((i.header = i.setext),
                      (i.setext = 0),
                      r.skipToEnd(),
                      n.highlightFormatting && (i.formatting = 'header'))
                    : ((i.header = '=' == M[0].charAt(0) ? 1 : 2),
                      (i.setext = i.header)),
                  (i.thisLine.header = !0),
                  (i.f = i.inline),
                  k(i))
                : S
                ? (r.skipToEnd(), (i.hr = !0), (i.thisLine.hr = !0), o.hr)
                : '[' === r.peek()
                ? g(r, i, L)
                : g(r, i, i.inline);
            }
            function x(t, n) {
              var o = r.token(t, n.htmlState);
              if (!i) {
                var a = e.innerMode(r, n.htmlState);
                (('xml' == a.mode.name &&
                  null === a.state.tagStart &&
                  !a.state.context &&
                  a.state.tokenize.isInText) ||
                  (n.md_inside && t.current().indexOf('>') > -1)) &&
                  ((n.f = C), (n.block = b), (n.htmlState = null));
              }
              return o;
            }
            function w(e, t) {
              var r,
                i = t.listStack[t.listStack.length - 1] || 0,
                a = t.indentation < i,
                l = i + 3;
              return t.fencedEndRE &&
                t.indentation <= l &&
                (a || e.match(t.fencedEndRE))
                ? (n.highlightFormatting && (t.formatting = 'code-block'),
                  a || (r = k(t)),
                  (t.localMode = t.localState = null),
                  (t.block = b),
                  (t.f = C),
                  (t.fencedEndRE = null),
                  (t.code = 0),
                  (t.thisLine.fencedCodeEnd = !0),
                  a ? v(e, t, t.block) : r)
                : t.localMode
                ? t.localMode.token(e, t.localState)
                : (e.skipToEnd(), o.code);
            }
            function k(e) {
              var t = [];
              if (e.formatting) {
                t.push(o.formatting),
                  'string' === typeof e.formatting &&
                    (e.formatting = [e.formatting]);
                for (var r = 0; r < e.formatting.length; r++)
                  t.push(o.formatting + '-' + e.formatting[r]),
                    'header' === e.formatting[r] &&
                      t.push(
                        o.formatting + '-' + e.formatting[r] + '-' + e.header
                      ),
                    'quote' === e.formatting[r] &&
                      (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                        ? t.push(
                            o.formatting + '-' + e.formatting[r] + '-' + e.quote
                          )
                        : t.push('error'));
              }
              if (e.taskOpen)
                return t.push('meta'), t.length ? t.join(' ') : null;
              if (e.taskClosed)
                return t.push('property'), t.length ? t.join(' ') : null;
              if (
                (e.linkHref
                  ? t.push(o.linkHref, 'url')
                  : (e.strong && t.push(o.strong),
                    e.em && t.push(o.em),
                    e.strikethrough && t.push(o.strikethrough),
                    e.emoji && t.push(o.emoji),
                    e.linkText && t.push(o.linkText),
                    e.code && t.push(o.code),
                    e.image && t.push(o.image),
                    e.imageAltText && t.push(o.imageAltText, 'link'),
                    e.imageMarker && t.push(o.imageMarker)),
                e.header && t.push(o.header, o.header + '-' + e.header),
                e.quote &&
                  (t.push(o.quote),
                  !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                    ? t.push(o.quote + '-' + e.quote)
                    : t.push(o.quote + '-' + n.maxBlockquoteDepth)),
                !1 !== e.list)
              ) {
                var i = (e.listStack.length - 1) % 3;
                i
                  ? 1 === i
                    ? t.push(o.list2)
                    : t.push(o.list3)
                  : t.push(o.list1);
              }
              return (
                e.trailingSpaceNewLine
                  ? t.push('trailing-space-new-line')
                  : e.trailingSpace &&
                    t.push(
                      'trailing-space-' + (e.trailingSpace % 2 ? 'a' : 'b')
                    ),
                t.length ? t.join(' ') : null
              );
            }
            function _(e, t) {
              if (e.match(f, !0)) return k(t);
            }
            function C(t, i) {
              var a = i.text(t, i);
              if ('undefined' !== typeof a) return a;
              if (i.list) return (i.list = null), k(i);
              if (i.taskList)
                return (
                  ' ' === t.match(c, !0)[1]
                    ? (i.taskOpen = !0)
                    : (i.taskClosed = !0),
                  n.highlightFormatting && (i.formatting = 'task'),
                  (i.taskList = !1),
                  k(i)
                );
              if (
                ((i.taskOpen = !1),
                (i.taskClosed = !1),
                i.header && t.match(/^#+$/, !0))
              )
                return n.highlightFormatting && (i.formatting = 'header'), k(i);
              var l = t.next();
              if (i.linkTitle) {
                i.linkTitle = !1;
                var s = l;
                '(' === l && (s = ')');
                var u =
                  '^\\s*(?:[^' +
                  (s = (s + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1')) +
                  '\\\\]+|\\\\\\\\|\\\\.)' +
                  s;
                if (t.match(new RegExp(u), !0)) return o.linkHref;
              }
              if ('`' === l) {
                var d = i.formatting;
                n.highlightFormatting && (i.formatting = 'code'),
                  t.eatWhile('`');
                var f = t.current().length;
                if (0 != i.code || (i.quote && 1 != f)) {
                  if (f == i.code) {
                    var p = k(i);
                    return (i.code = 0), p;
                  }
                  return (i.formatting = d), k(i);
                }
                return (i.code = f), k(i);
              }
              if (i.code) return k(i);
              if ('\\' === l && (t.next(), n.highlightFormatting)) {
                var h = k(i),
                  g = o.formatting + '-escape';
                return h ? h + ' ' + g : g;
              }
              if ('!' === l && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return (
                  (i.imageMarker = !0),
                  (i.image = !0),
                  n.highlightFormatting && (i.formatting = 'image'),
                  k(i)
                );
              if (
                '[' === l &&
                i.imageMarker &&
                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
              )
                return (
                  (i.imageMarker = !1),
                  (i.imageAltText = !0),
                  n.highlightFormatting && (i.formatting = 'image'),
                  k(i)
                );
              if (']' === l && i.imageAltText) {
                n.highlightFormatting && (i.formatting = 'image');
                var h = k(i);
                return (
                  (i.imageAltText = !1), (i.image = !1), (i.inline = i.f = M), h
                );
              }
              if ('[' === l && !i.image)
                return i.linkText && t.match(/^.*?\]/)
                  ? k(i)
                  : ((i.linkText = !0),
                    n.highlightFormatting && (i.formatting = 'link'),
                    k(i));
              if (']' === l && i.linkText) {
                n.highlightFormatting && (i.formatting = 'link');
                var h = k(i);
                return (
                  (i.linkText = !1),
                  (i.inline = i.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? M : C),
                  h
                );
              }
              if (
                '<' === l &&
                t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
              )
                return (
                  (i.f = i.inline = S),
                  n.highlightFormatting && (i.formatting = 'link'),
                  (h = k(i)) ? (h += ' ') : (h = ''),
                  h + o.linkInline
                );
              if ('<' === l && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1))
                return (
                  (i.f = i.inline = S),
                  n.highlightFormatting && (i.formatting = 'link'),
                  (h = k(i)) ? (h += ' ') : (h = ''),
                  h + o.linkEmail
                );
              if (
                n.xml &&
                '<' === l &&
                t.match(
                  /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                  !1
                )
              ) {
                var y = t.string.indexOf('>', t.pos);
                if (-1 != y) {
                  var b = t.string.substring(t.start, y);
                  /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(b) &&
                    (i.md_inside = !0);
                }
                return t.backUp(1), (i.htmlState = e.startState(r)), v(t, i, x);
              }
              if (n.xml && '<' === l && t.match(/^\/\w*?>/))
                return (i.md_inside = !1), 'tag';
              if ('*' === l || '_' === l) {
                for (
                  var w = 1, _ = 1 == t.pos ? ' ' : t.string.charAt(t.pos - 2);
                  w < 3 && t.eat(l);

                )
                  w++;
                var T = t.peek() || ' ',
                  L =
                    !/\s/.test(T) && (!m.test(T) || /\s/.test(_) || m.test(_)),
                  O =
                    !/\s/.test(_) && (!m.test(_) || /\s/.test(T) || m.test(T)),
                  D = null,
                  E = null;
                if (
                  (w % 2 &&
                    (i.em || !L || ('*' !== l && O && !m.test(_))
                      ? i.em != l ||
                        !O ||
                        ('*' !== l && L && !m.test(T)) ||
                        (D = !1)
                      : (D = !0)),
                  w > 1 &&
                    (i.strong || !L || ('*' !== l && O && !m.test(_))
                      ? i.strong != l ||
                        !O ||
                        ('*' !== l && L && !m.test(T)) ||
                        (E = !1)
                      : (E = !0)),
                  null != E || null != D)
                )
                  return (
                    n.highlightFormatting &&
                      (i.formatting =
                        null == D ? 'strong' : null == E ? 'em' : 'strong em'),
                    !0 === D && (i.em = l),
                    !0 === E && (i.strong = l),
                    (p = k(i)),
                    !1 === D && (i.em = !1),
                    !1 === E && (i.strong = !1),
                    p
                  );
              } else if (' ' === l && (t.eat('*') || t.eat('_'))) {
                if (' ' === t.peek()) return k(i);
                t.backUp(1);
              }
              if (n.strikethrough)
                if ('~' === l && t.eatWhile(l)) {
                  if (i.strikethrough)
                    return (
                      n.highlightFormatting && (i.formatting = 'strikethrough'),
                      (p = k(i)),
                      (i.strikethrough = !1),
                      p
                    );
                  if (t.match(/^[^\s]/, !1))
                    return (
                      (i.strikethrough = !0),
                      n.highlightFormatting && (i.formatting = 'strikethrough'),
                      k(i)
                    );
                } else if (' ' === l && t.match(/^~~/, !0)) {
                  if (' ' === t.peek()) return k(i);
                  t.backUp(2);
                }
              if (
                n.emoji &&
                ':' === l &&
                t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
              ) {
                (i.emoji = !0),
                  n.highlightFormatting && (i.formatting = 'emoji');
                var A = k(i);
                return (i.emoji = !1), A;
              }
              return (
                ' ' === l &&
                  (t.match(/^ +$/, !1)
                    ? i.trailingSpace++
                    : i.trailingSpace && (i.trailingSpaceNewLine = !0)),
                k(i)
              );
            }
            function S(e, t) {
              if ('>' === e.next()) {
                (t.f = t.inline = C),
                  n.highlightFormatting && (t.formatting = 'link');
                var r = k(t);
                return r ? (r += ' ') : (r = ''), r + o.linkInline;
              }
              return e.match(/^[^>]+/, !0), o.linkInline;
            }
            function M(e, t) {
              if (e.eatSpace()) return null;
              var r,
                i = e.next();
              return '(' === i || '[' === i
                ? ((t.f = t.inline =
                    ((r = '(' === i ? ')' : ']'),
                    function(e, t) {
                      if (e.next() === r) {
                        (t.f = t.inline = C),
                          n.highlightFormatting &&
                            (t.formatting = 'link-string');
                        var i = k(t);
                        return (t.linkHref = !1), i;
                      }
                      return e.match(T[r]), (t.linkHref = !0), k(t);
                    })),
                  n.highlightFormatting && (t.formatting = 'link-string'),
                  (t.linkHref = !0),
                  k(t))
                : 'error';
            }
            var T = {
              ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
            };
            function L(e, t) {
              return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                ? ((t.f = O),
                  e.next(),
                  n.highlightFormatting && (t.formatting = 'link'),
                  (t.linkText = !0),
                  k(t))
                : g(e, t, C);
            }
            function O(e, t) {
              if (e.match(/^\]:/, !0)) {
                (t.f = t.inline = D),
                  n.highlightFormatting && (t.formatting = 'link');
                var r = k(t);
                return (t.linkText = !1), r;
              }
              return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
            }
            function D(e, t) {
              return e.eatSpace()
                ? null
                : (e.match(/^[^\s]+/, !0),
                  void 0 === e.peek()
                    ? (t.linkTitle = !0)
                    : e.match(
                        /^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,
                        !0
                      ),
                  (t.f = t.inline = C),
                  o.linkHref + ' url');
            }
            var E = {
              startState: function() {
                return {
                  f: b,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: b,
                  htmlState: null,
                  indentation: 0,
                  inline: C,
                  text: _,
                  formatting: !1,
                  linkText: !1,
                  linkHref: !1,
                  linkTitle: !1,
                  code: 0,
                  em: !1,
                  strong: !1,
                  header: 0,
                  setext: 0,
                  hr: !1,
                  taskList: !1,
                  list: !1,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: !1,
                  strikethrough: !1,
                  emoji: !1,
                  fencedEndRE: null,
                };
              },
              copyState: function(t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(r, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode
                    ? e.copyState(t.localMode, t.localState)
                    : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: !1,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE,
                };
              },
              token: function(e, t) {
                if (((t.formatting = !1), e != t.thisLine.stream)) {
                  if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0)))
                    return y(t), null;
                  if (
                    ((t.prevLine = t.thisLine),
                    (t.thisLine = { stream: e }),
                    (t.taskList = !1),
                    (t.trailingSpace = 0),
                    (t.trailingSpaceNewLine = !1),
                    !t.localState && ((t.f = t.block), t.f != x))
                  ) {
                    var n = e.match(/^\s*/, !0)[0].replace(/\t/g, '    ')
                      .length;
                    if (
                      ((t.indentation = n), (t.indentationDiff = null), n > 0)
                    )
                      return null;
                  }
                }
                return t.f(e, t);
              },
              innerMode: function(e) {
                return e.block == x
                  ? { state: e.htmlState, mode: r }
                  : e.localState
                  ? { state: e.localState, mode: e.localMode }
                  : { state: e, mode: E };
              },
              indent: function(t, n, i) {
                return t.block == x && r.indent
                  ? r.indent(t.htmlState, n, i)
                  : t.localState && t.localMode.indent
                  ? t.localMode.indent(t.localState, n, i)
                  : e.Pass;
              },
              blankLine: y,
              getType: k,
              blockCommentStart: '\x3c!--',
              blockCommentEnd: '--\x3e',
              closeBrackets: '()[]{}\'\'""``',
              fold: 'markdown',
            };
            return E;
          },
          'xml'
        ),
          e.defineMIME('text/markdown', 'markdown'),
          e.defineMIME('text/x-markdown', 'markdown');
      })(n(777), n(1566), n(2278));
    },
    2278: function(e, t, n) {
      !(function(e) {
        'use strict';
        e.modeInfo = [
          {
            name: 'APL',
            mime: 'text/apl',
            mode: 'apl',
            ext: ['dyalog', 'apl'],
          },
          {
            name: 'PGP',
            mimes: [
              'application/pgp',
              'application/pgp-encrypted',
              'application/pgp-keys',
              'application/pgp-signature',
            ],
            mode: 'asciiarmor',
            ext: ['asc', 'pgp', 'sig'],
          },
          {
            name: 'ASN.1',
            mime: 'text/x-ttcn-asn',
            mode: 'asn.1',
            ext: ['asn', 'asn1'],
          },
          {
            name: 'Asterisk',
            mime: 'text/x-asterisk',
            mode: 'asterisk',
            file: /^extensions\.conf$/i,
          },
          {
            name: 'Brainfuck',
            mime: 'text/x-brainfuck',
            mode: 'brainfuck',
            ext: ['b', 'bf'],
          },
          {
            name: 'C',
            mime: 'text/x-csrc',
            mode: 'clike',
            ext: ['c', 'h', 'ino'],
          },
          {
            name: 'C++',
            mime: 'text/x-c++src',
            mode: 'clike',
            ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
            alias: ['cpp'],
          },
          {
            name: 'Cobol',
            mime: 'text/x-cobol',
            mode: 'cobol',
            ext: ['cob', 'cpy'],
          },
          {
            name: 'C#',
            mime: 'text/x-csharp',
            mode: 'clike',
            ext: ['cs'],
            alias: ['csharp', 'cs'],
          },
          {
            name: 'Clojure',
            mime: 'text/x-clojure',
            mode: 'clojure',
            ext: ['clj', 'cljc', 'cljx'],
          },
          {
            name: 'ClojureScript',
            mime: 'text/x-clojurescript',
            mode: 'clojure',
            ext: ['cljs'],
          },
          {
            name: 'Closure Stylesheets (GSS)',
            mime: 'text/x-gss',
            mode: 'css',
            ext: ['gss'],
          },
          {
            name: 'CMake',
            mime: 'text/x-cmake',
            mode: 'cmake',
            ext: ['cmake', 'cmake.in'],
            file: /^CMakeLists.txt$/,
          },
          {
            name: 'CoffeeScript',
            mimes: [
              'application/vnd.coffeescript',
              'text/coffeescript',
              'text/x-coffeescript',
            ],
            mode: 'coffeescript',
            ext: ['coffee'],
            alias: ['coffee', 'coffee-script'],
          },
          {
            name: 'Common Lisp',
            mime: 'text/x-common-lisp',
            mode: 'commonlisp',
            ext: ['cl', 'lisp', 'el'],
            alias: ['lisp'],
          },
          {
            name: 'Cypher',
            mime: 'application/x-cypher-query',
            mode: 'cypher',
            ext: ['cyp', 'cypher'],
          },
          {
            name: 'Cython',
            mime: 'text/x-cython',
            mode: 'python',
            ext: ['pyx', 'pxd', 'pxi'],
          },
          {
            name: 'Crystal',
            mime: 'text/x-crystal',
            mode: 'crystal',
            ext: ['cr'],
          },
          { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
          { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
          { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
          {
            name: 'Dart',
            mimes: ['application/dart', 'text/x-dart'],
            mode: 'dart',
            ext: ['dart'],
          },
          {
            name: 'diff',
            mime: 'text/x-diff',
            mode: 'diff',
            ext: ['diff', 'patch'],
          },
          { name: 'Django', mime: 'text/x-django', mode: 'django' },
          {
            name: 'Dockerfile',
            mime: 'text/x-dockerfile',
            mode: 'dockerfile',
            file: /^Dockerfile$/,
          },
          {
            name: 'DTD',
            mime: 'application/xml-dtd',
            mode: 'dtd',
            ext: ['dtd'],
          },
          {
            name: 'Dylan',
            mime: 'text/x-dylan',
            mode: 'dylan',
            ext: ['dylan', 'dyl', 'intr'],
          },
          { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
          { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
          {
            name: 'edn',
            mime: 'application/edn',
            mode: 'clojure',
            ext: ['edn'],
          },
          { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
          { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
          {
            name: 'Embedded Javascript',
            mime: 'application/x-ejs',
            mode: 'htmlembedded',
            ext: ['ejs'],
          },
          {
            name: 'Embedded Ruby',
            mime: 'application/x-erb',
            mode: 'htmlembedded',
            ext: ['erb'],
          },
          {
            name: 'Erlang',
            mime: 'text/x-erlang',
            mode: 'erlang',
            ext: ['erl'],
          },
          { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
          {
            name: 'Factor',
            mime: 'text/x-factor',
            mode: 'factor',
            ext: ['factor'],
          },
          { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
          {
            name: 'Forth',
            mime: 'text/x-forth',
            mode: 'forth',
            ext: ['forth', 'fth', '4th'],
          },
          {
            name: 'Fortran',
            mime: 'text/x-fortran',
            mode: 'fortran',
            ext: ['f', 'for', 'f77', 'f90', 'f95'],
          },
          {
            name: 'F#',
            mime: 'text/x-fsharp',
            mode: 'mllike',
            ext: ['fs'],
            alias: ['fsharp'],
          },
          { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
          {
            name: 'Gherkin',
            mime: 'text/x-feature',
            mode: 'gherkin',
            ext: ['feature'],
          },
          {
            name: 'GitHub Flavored Markdown',
            mime: 'text/x-gfm',
            mode: 'gfm',
            file: /^(readme|contributing|history).md$/i,
          },
          { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
          {
            name: 'Groovy',
            mime: 'text/x-groovy',
            mode: 'groovy',
            ext: ['groovy', 'gradle'],
            file: /^Jenkinsfile$/,
          },
          { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
          {
            name: 'Haskell',
            mime: 'text/x-haskell',
            mode: 'haskell',
            ext: ['hs'],
          },
          {
            name: 'Haskell (Literate)',
            mime: 'text/x-literate-haskell',
            mode: 'haskell-literate',
            ext: ['lhs'],
          },
          { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
          { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
          {
            name: 'ASP.NET',
            mime: 'application/x-aspx',
            mode: 'htmlembedded',
            ext: ['aspx'],
            alias: ['asp', 'aspx'],
          },
          {
            name: 'HTML',
            mime: 'text/html',
            mode: 'htmlmixed',
            ext: ['html', 'htm', 'handlebars', 'hbs'],
            alias: ['xhtml'],
          },
          { name: 'HTTP', mime: 'message/http', mode: 'http' },
          { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
          {
            name: 'Pug',
            mime: 'text/x-pug',
            mode: 'pug',
            ext: ['jade', 'pug'],
            alias: ['jade'],
          },
          { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
          {
            name: 'Java Server Pages',
            mime: 'application/x-jsp',
            mode: 'htmlembedded',
            ext: ['jsp'],
            alias: ['jsp'],
          },
          {
            name: 'JavaScript',
            mimes: [
              'text/javascript',
              'text/ecmascript',
              'application/javascript',
              'application/x-javascript',
              'application/ecmascript',
            ],
            mode: 'javascript',
            ext: ['js'],
            alias: ['ecmascript', 'js', 'node'],
          },
          {
            name: 'JSON',
            mimes: ['application/json', 'application/x-json'],
            mode: 'javascript',
            ext: ['json', 'map'],
            alias: ['json5'],
          },
          {
            name: 'JSON-LD',
            mime: 'application/ld+json',
            mode: 'javascript',
            ext: ['jsonld'],
            alias: ['jsonld'],
          },
          { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
          {
            name: 'Jinja2',
            mime: 'text/jinja2',
            mode: 'jinja2',
            ext: ['j2', 'jinja', 'jinja2'],
          },
          { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'] },
          { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
          { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
          {
            name: 'LiveScript',
            mime: 'text/x-livescript',
            mode: 'livescript',
            ext: ['ls'],
            alias: ['ls'],
          },
          { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
          {
            name: 'Markdown',
            mime: 'text/x-markdown',
            mode: 'markdown',
            ext: ['markdown', 'md', 'mkd'],
          },
          { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
          { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
          {
            name: 'Mathematica',
            mime: 'text/x-mathematica',
            mode: 'mathematica',
            ext: ['m', 'nb', 'wl', 'wls'],
          },
          {
            name: 'Modelica',
            mime: 'text/x-modelica',
            mode: 'modelica',
            ext: ['mo'],
          },
          { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
          { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
          {
            name: 'mbox',
            mime: 'application/mbox',
            mode: 'mbox',
            ext: ['mbox'],
          },
          { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
          {
            name: 'Nginx',
            mime: 'text/x-nginx-conf',
            mode: 'nginx',
            file: /nginx.*\.conf$/i,
          },
          {
            name: 'NSIS',
            mime: 'text/x-nsis',
            mode: 'nsis',
            ext: ['nsh', 'nsi'],
          },
          {
            name: 'NTriples',
            mimes: [
              'application/n-triples',
              'application/n-quads',
              'text/n-triples',
            ],
            mode: 'ntriples',
            ext: ['nt', 'nq'],
          },
          {
            name: 'Objective-C',
            mime: 'text/x-objectivec',
            mode: 'clike',
            ext: ['m', 'mm'],
            alias: ['objective-c', 'objc'],
          },
          {
            name: 'OCaml',
            mime: 'text/x-ocaml',
            mode: 'mllike',
            ext: ['ml', 'mli', 'mll', 'mly'],
          },
          { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
          { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
          {
            name: 'Pascal',
            mime: 'text/x-pascal',
            mode: 'pascal',
            ext: ['p', 'pas'],
          },
          { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
          {
            name: 'Perl',
            mime: 'text/x-perl',
            mode: 'perl',
            ext: ['pl', 'pm'],
          },
          {
            name: 'PHP',
            mimes: [
              'text/x-php',
              'application/x-httpd-php',
              'application/x-httpd-php-open',
            ],
            mode: 'php',
            ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
          },
          { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
          {
            name: 'Plain Text',
            mime: 'text/plain',
            mode: 'null',
            ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
          },
          { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
          { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
          {
            name: 'PowerShell',
            mime: 'application/x-powershell',
            mode: 'powershell',
            ext: ['ps1', 'psd1', 'psm1'],
          },
          {
            name: 'Properties files',
            mime: 'text/x-properties',
            mode: 'properties',
            ext: ['properties', 'ini', 'in'],
            alias: ['ini', 'properties'],
          },
          {
            name: 'ProtoBuf',
            mime: 'text/x-protobuf',
            mode: 'protobuf',
            ext: ['proto'],
          },
          {
            name: 'Python',
            mime: 'text/x-python',
            mode: 'python',
            ext: ['BUILD', 'bzl', 'py', 'pyw'],
            file: /^(BUCK|BUILD)$/,
          },
          {
            name: 'Puppet',
            mime: 'text/x-puppet',
            mode: 'puppet',
            ext: ['pp'],
          },
          { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
          {
            name: 'R',
            mime: 'text/x-rsrc',
            mode: 'r',
            ext: ['r', 'R'],
            alias: ['rscript'],
          },
          {
            name: 'reStructuredText',
            mime: 'text/x-rst',
            mode: 'rst',
            ext: ['rst'],
            alias: ['rst'],
          },
          { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
          {
            name: 'RPM Spec',
            mime: 'text/x-rpm-spec',
            mode: 'rpm',
            ext: ['spec'],
          },
          {
            name: 'Ruby',
            mime: 'text/x-ruby',
            mode: 'ruby',
            ext: ['rb'],
            alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
          },
          { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
          { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
          { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
          {
            name: 'Scala',
            mime: 'text/x-scala',
            mode: 'clike',
            ext: ['scala'],
          },
          {
            name: 'Scheme',
            mime: 'text/x-scheme',
            mode: 'scheme',
            ext: ['scm', 'ss'],
          },
          { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
          {
            name: 'Shell',
            mimes: ['text/x-sh', 'application/x-sh'],
            mode: 'shell',
            ext: ['sh', 'ksh', 'bash'],
            alias: ['bash', 'sh', 'zsh'],
            file: /^PKGBUILD$/,
          },
          {
            name: 'Sieve',
            mime: 'application/sieve',
            mode: 'sieve',
            ext: ['siv', 'sieve'],
          },
          {
            name: 'Slim',
            mimes: ['text/x-slim', 'application/x-slim'],
            mode: 'slim',
            ext: ['slim'],
          },
          {
            name: 'Smalltalk',
            mime: 'text/x-stsrc',
            mode: 'smalltalk',
            ext: ['st'],
          },
          {
            name: 'Smarty',
            mime: 'text/x-smarty',
            mode: 'smarty',
            ext: ['tpl'],
          },
          { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
          {
            name: 'SML',
            mime: 'text/x-sml',
            mode: 'mllike',
            ext: ['sml', 'sig', 'fun', 'smackspec'],
          },
          {
            name: 'Soy',
            mime: 'text/x-soy',
            mode: 'soy',
            ext: ['soy'],
            alias: ['closure template'],
          },
          {
            name: 'SPARQL',
            mime: 'application/sparql-query',
            mode: 'sparql',
            ext: ['rq', 'sparql'],
            alias: ['sparul'],
          },
          {
            name: 'Spreadsheet',
            mime: 'text/x-spreadsheet',
            mode: 'spreadsheet',
            alias: ['excel', 'formula'],
          },
          { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
          { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
          {
            name: 'Squirrel',
            mime: 'text/x-squirrel',
            mode: 'clike',
            ext: ['nut'],
          },
          {
            name: 'Stylus',
            mime: 'text/x-styl',
            mode: 'stylus',
            ext: ['styl'],
          },
          {
            name: 'Swift',
            mime: 'text/x-swift',
            mode: 'swift',
            ext: ['swift'],
          },
          { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
          {
            name: 'LaTeX',
            mime: 'text/x-latex',
            mode: 'stex',
            ext: ['text', 'ltx', 'tex'],
            alias: ['tex'],
          },
          {
            name: 'SystemVerilog',
            mime: 'text/x-systemverilog',
            mode: 'verilog',
            ext: ['v', 'sv', 'svh'],
          },
          { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
          {
            name: 'Textile',
            mime: 'text/x-textile',
            mode: 'textile',
            ext: ['textile'],
          },
          {
            name: 'TiddlyWiki ',
            mime: 'text/x-tiddlywiki',
            mode: 'tiddlywiki',
          },
          { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
          { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
          { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
          {
            name: 'troff',
            mime: 'text/troff',
            mode: 'troff',
            ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          },
          {
            name: 'TTCN',
            mime: 'text/x-ttcn',
            mode: 'ttcn',
            ext: ['ttcn', 'ttcn3', 'ttcnpp'],
          },
          {
            name: 'TTCN_CFG',
            mime: 'text/x-ttcn-cfg',
            mode: 'ttcn-cfg',
            ext: ['cfg'],
          },
          { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
          {
            name: 'TypeScript',
            mime: 'application/typescript',
            mode: 'javascript',
            ext: ['ts'],
            alias: ['ts'],
          },
          {
            name: 'TypeScript-JSX',
            mime: 'text/typescript-jsx',
            mode: 'jsx',
            ext: ['tsx'],
            alias: ['tsx'],
          },
          { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
          {
            name: 'Web IDL',
            mime: 'text/x-webidl',
            mode: 'webidl',
            ext: ['webidl'],
          },
          { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
          {
            name: 'VBScript',
            mime: 'text/vbscript',
            mode: 'vbscript',
            ext: ['vbs'],
          },
          {
            name: 'Velocity',
            mime: 'text/velocity',
            mode: 'velocity',
            ext: ['vtl'],
          },
          {
            name: 'Verilog',
            mime: 'text/x-verilog',
            mode: 'verilog',
            ext: ['v'],
          },
          {
            name: 'VHDL',
            mime: 'text/x-vhdl',
            mode: 'vhdl',
            ext: ['vhd', 'vhdl'],
          },
          {
            name: 'Vue.js Component',
            mimes: ['script/x-vue', 'text/x-vue'],
            mode: 'vue',
            ext: ['vue'],
          },
          {
            name: 'XML',
            mimes: ['application/xml', 'text/xml'],
            mode: 'xml',
            ext: ['xml', 'xsl', 'xsd', 'svg'],
            alias: ['rss', 'wsdl', 'xsd'],
          },
          {
            name: 'XQuery',
            mime: 'application/xquery',
            mode: 'xquery',
            ext: ['xy', 'xquery'],
          },
          { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
          {
            name: 'YAML',
            mimes: ['text/x-yaml', 'text/yaml'],
            mode: 'yaml',
            ext: ['yaml', 'yml'],
            alias: ['yml'],
          },
          { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
          {
            name: 'mscgen',
            mime: 'text/x-mscgen',
            mode: 'mscgen',
            ext: ['mscgen', 'mscin', 'msc'],
          },
          { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
          {
            name: 'msgenny',
            mime: 'text/x-msgenny',
            mode: 'mscgen',
            ext: ['msgenny'],
          },
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var n = e.modeInfo[t];
          n.mimes && (n.mime = n.mimes[0]);
        }
        (e.findModeByMIME = function(t) {
          t = t.toLowerCase();
          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.mime == t) return r;
            if (r.mimes)
              for (var i = 0; i < r.mimes.length; i++)
                if (r.mimes[i] == t) return r;
          }
          return /\+xml$/.test(t)
            ? e.findModeByMIME('application/xml')
            : /\+json$/.test(t)
            ? e.findModeByMIME('application/json')
            : void 0;
        }),
          (e.findModeByExtension = function(t) {
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.ext)
                for (var i = 0; i < r.ext.length; i++)
                  if (r.ext[i] == t) return r;
            }
          }),
          (e.findModeByFileName = function(t) {
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.file && r.file.test(t)) return r;
            }
            var i = t.lastIndexOf('.'),
              o = i > -1 && t.substring(i + 1, t.length);
            if (o) return e.findModeByExtension(o);
          }),
          (e.findModeByName = function(t) {
            t = t.toLowerCase();
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.name.toLowerCase() == t) return r;
              if (r.alias)
                for (var i = 0; i < r.alias.length; i++)
                  if (r.alias[i].toLowerCase() == t) return r;
            }
          });
      })(n(777));
    },
    2279: function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e) {
          for (var t = {}, n = e.split(' '), r = 0; r < n.length; ++r)
            t[n[r]] = !0;
          return t;
        }
        function n(e, t, i) {
          return 0 == e.length
            ? r(t)
            : function(o, a) {
                for (var l = e[0], s = 0; s < l.length; s++)
                  if (o.match(l[s][0]))
                    return (a.tokenize = n(e.slice(1), t)), l[s][1];
                return (a.tokenize = r(t, i)), 'string';
              };
        }
        function r(e, t) {
          return function(r, i) {
            return (function(e, t, r, i) {
              if ((!1 !== i && e.match('${', !1)) || e.match('{$', !1))
                return (t.tokenize = null), 'string';
              if (!1 !== i && e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))
                return (
                  e.match('[', !1) &&
                    (t.tokenize = n(
                      [
                        [['[', null]],
                        [
                          [/\d[\w\.]*/, 'number'],
                          [/\$[a-zA-Z_][a-zA-Z0-9_]*/, 'variable-2'],
                          [/[\w\$]+/, 'variable'],
                        ],
                        [[']', null]],
                      ],
                      r,
                      i
                    )),
                  e.match(/\-\>\w/, !1) &&
                    (t.tokenize = n(
                      [[['->', null]], [[/[\w]+/, 'variable']]],
                      r,
                      i
                    )),
                  'variable-2'
                );
              for (
                var o = !1;
                !e.eol() &&
                (o ||
                  !1 === i ||
                  (!e.match('{$', !1) &&
                    !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)));

              ) {
                if (!o && e.match(r)) {
                  (t.tokenize = null), t.tokStack.pop(), t.tokStack.pop();
                  break;
                }
                o = '\\' == e.next() && !o;
              }
              return 'string';
            })(r, i, e, t);
          };
        }
        var i =
            'abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally',
          o =
            'true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__',
          a =
            'func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count';
        e.registerHelper('hintWords', 'php', [i, o, a].join(' ').split(' ')),
          e.registerHelper('wordChars', 'php', /[\w$]/);
        var l = {
          name: 'clike',
          helperType: 'php',
          keywords: t(i),
          blockKeywords: t(
            'catch do else elseif for foreach if switch try while finally'
          ),
          defKeywords: t('class function interface namespace trait'),
          atoms: t(o),
          builtin: t(a),
          multiLineStrings: !0,
          hooks: {
            $: function(e) {
              return e.eatWhile(/[\w\$_]/), 'variable-2';
            },
            '<': function(e, t) {
              var n;
              if ((n = e.match(/<<\s*/))) {
                var i = e.eat(/['"]/);
                e.eatWhile(/[\w\.]/);
                var o = e.current().slice(n[0].length + (i ? 2 : 1));
                if ((i && e.eat(i), o))
                  return (
                    (t.tokStack || (t.tokStack = [])).push(o, 0),
                    (t.tokenize = r(o, "'" != i)),
                    'string'
                  );
              }
              return !1;
            },
            '#': function(e) {
              for (; !e.eol() && !e.match('?>', !1); ) e.next();
              return 'comment';
            },
            '/': function(e) {
              if (e.eat('/')) {
                for (; !e.eol() && !e.match('?>', !1); ) e.next();
                return 'comment';
              }
              return !1;
            },
            '"': function(e, t) {
              return (
                (t.tokStack || (t.tokStack = [])).push('"', 0),
                (t.tokenize = r('"')),
                'string'
              );
            },
            '{': function(e, t) {
              return (
                t.tokStack &&
                  t.tokStack.length &&
                  t.tokStack[t.tokStack.length - 1]++,
                !1
              );
            },
            '}': function(e, t) {
              return (
                t.tokStack &&
                  t.tokStack.length > 0 &&
                  !--t.tokStack[t.tokStack.length - 1] &&
                  (t.tokenize = r(t.tokStack[t.tokStack.length - 2])),
                !1
              );
            },
          },
        };
        e.defineMode(
          'php',
          function(t, n) {
            var r = e.getMode(t, (n && n.htmlMode) || 'text/html'),
              i = e.getMode(t, l);
            return {
              startState: function() {
                var t = e.startState(r),
                  o = n.startOpen ? e.startState(i) : null;
                return {
                  html: t,
                  php: o,
                  curMode: n.startOpen ? i : r,
                  curState: n.startOpen ? o : t,
                  pending: null,
                };
              },
              copyState: function(t) {
                var n,
                  o = t.html,
                  a = e.copyState(r, o),
                  l = t.php,
                  s = l && e.copyState(i, l);
                return (
                  (n = t.curMode == r ? a : s),
                  {
                    html: a,
                    php: s,
                    curMode: t.curMode,
                    curState: n,
                    pending: t.pending,
                  }
                );
              },
              token: function(t, n) {
                var o = n.curMode == i;
                if (
                  (t.sol() &&
                    n.pending &&
                    '"' != n.pending &&
                    "'" != n.pending &&
                    (n.pending = null),
                  o)
                )
                  return o && null == n.php.tokenize && t.match('?>')
                    ? ((n.curMode = r),
                      (n.curState = n.html),
                      n.php.context.prev || (n.php = null),
                      'meta')
                    : i.token(t, n.curState);
                if (t.match(/^<\?\w*/))
                  return (
                    (n.curMode = i),
                    n.php ||
                      (n.php = e.startState(i, r.indent(n.html, '', ''))),
                    (n.curState = n.php),
                    'meta'
                  );
                if ('"' == n.pending || "'" == n.pending) {
                  for (; !t.eol() && t.next() != n.pending; );
                  var a = 'string';
                } else
                  n.pending && t.pos < n.pending.end
                    ? ((t.pos = n.pending.end), (a = n.pending.style))
                    : (a = r.token(t, n.curState));
                n.pending && (n.pending = null);
                var l,
                  s = t.current(),
                  c = s.search(/<\?/);
                return (
                  -1 != c &&
                    ('string' == a && (l = s.match(/[\'\"]$/)) && !/\?>/.test(s)
                      ? (n.pending = l[0])
                      : (n.pending = { end: t.pos, style: a }),
                    t.backUp(s.length - c)),
                  a
                );
              },
              indent: function(e, t, n) {
                return (e.curMode != i && /^\s*<\//.test(t)) ||
                  (e.curMode == i && /^\?>/.test(t))
                  ? r.indent(e.html, t, n)
                  : e.curMode.indent(e.curState, t, n);
              },
              blockCommentStart: '/*',
              blockCommentEnd: '*/',
              lineComment: '//',
              innerMode: function(e) {
                return { state: e.curState, mode: e.curMode };
              },
            };
          },
          'htmlmixed',
          'clike'
        ),
          e.defineMIME('application/x-httpd-php', 'php'),
          e.defineMIME('application/x-httpd-php-open', {
            name: 'php',
            startOpen: !0,
          }),
          e.defineMIME('text/x-php', l);
      })(n(777), n(2280), n(2282));
    },
    2280: function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            script: [
              ['lang', /(javascript|babel)/i, 'javascript'],
              [
                'type',
                /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
                'javascript',
              ],
              ['type', /./, 'text/plain'],
              [null, null, 'javascript'],
            ],
            style: [
              ['lang', /^css$/i, 'css'],
              ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
              ['type', /./, 'text/plain'],
              [null, null, 'css'],
            ],
          },
          n = {};
        function r(e, t) {
          var r = e.match(
            (function(e) {
              var t = n[e];
              return (
                t ||
                (n[e] = new RegExp(
                  '\\s+' + e + '\\s*=\\s*(\'|")?([^\'"]+)(\'|")?\\s*'
                ))
              );
            })(t)
          );
          return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : '';
        }
        function i(e, t) {
          return new RegExp((t ? '^' : '') + '</s*' + e + 's*>', 'i');
        }
        function o(e, t) {
          for (var n in e)
            for (
              var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1;
              o >= 0;
              o--
            )
              r.unshift(i[o]);
        }
        e.defineMode(
          'htmlmixed',
          function(n, a) {
            var l = e.getMode(n, {
                name: 'xml',
                htmlMode: !0,
                multilineTagIndentFactor: a.multilineTagIndentFactor,
                multilineTagIndentPastTag: a.multilineTagIndentPastTag,
              }),
              s = {},
              c = a && a.tags,
              u = a && a.scriptTypes;
            if ((o(t, s), c && o(c, s), u))
              for (var d = u.length - 1; d >= 0; d--)
                s.script.unshift(['type', u[d].matches, u[d].mode]);
            function f(t, o) {
              var a,
                c = l.token(t, o.htmlState),
                u = /\btag\b/.test(c);
              if (
                u &&
                !/[<>\s\/]/.test(t.current()) &&
                (a =
                  o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) &&
                s.hasOwnProperty(a)
              )
                o.inTag = a + ' ';
              else if (o.inTag && u && />$/.test(t.current())) {
                var d = /^([\S]+) (.*)/.exec(o.inTag);
                o.inTag = null;
                var p =
                    '>' == t.current() &&
                    (function(e, t) {
                      for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (!i[0] || i[1].test(r(t, i[0]))) return i[2];
                      }
                    })(s[d[1]], d[2]),
                  h = e.getMode(n, p),
                  m = i(d[1], !0),
                  g = i(d[1], !1);
                (o.token = function(e, t) {
                  return e.match(m, !1)
                    ? ((t.token = f), (t.localState = t.localMode = null), null)
                    : (function(e, t, n) {
                        var r = e.current(),
                          i = r.search(t);
                        return (
                          i > -1
                            ? e.backUp(r.length - i)
                            : r.match(/<\/?$/) &&
                              (e.backUp(r.length),
                              e.match(t, !1) || e.match(r)),
                          n
                        );
                      })(e, g, t.localMode.token(e, t.localState));
                }),
                  (o.localMode = h),
                  (o.localState = e.startState(
                    h,
                    l.indent(o.htmlState, '', '')
                  ));
              } else
                o.inTag &&
                  ((o.inTag += t.current()), t.eol() && (o.inTag += ' '));
              return c;
            }
            return {
              startState: function() {
                return {
                  token: f,
                  inTag: null,
                  localMode: null,
                  localState: null,
                  htmlState: e.startState(l),
                };
              },
              copyState: function(t) {
                var n;
                return (
                  t.localState && (n = e.copyState(t.localMode, t.localState)),
                  {
                    token: t.token,
                    inTag: t.inTag,
                    localMode: t.localMode,
                    localState: n,
                    htmlState: e.copyState(l, t.htmlState),
                  }
                );
              },
              token: function(e, t) {
                return t.token(e, t);
              },
              indent: function(t, n, r) {
                return !t.localMode || /^\s*<\//.test(n)
                  ? l.indent(t.htmlState, n, r)
                  : t.localMode.indent
                  ? t.localMode.indent(t.localState, n, r)
                  : e.Pass;
              },
              innerMode: function(e) {
                return {
                  state: e.localState || e.htmlState,
                  mode: e.localMode || l,
                };
              },
            };
          },
          'xml',
          'javascript',
          'css'
        ),
          e.defineMIME('text/html', 'htmlmixed');
      })(n(777), n(1566), n(1757), n(2281));
    },
    2281: function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e) {
          for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
          return t;
        }
        e.defineMode('css', function(t, n) {
          var r = n.inline;
          n.propertyKeywords || (n = e.resolveMode('text/css'));
          var i,
            o,
            a = t.indentUnit,
            l = n.tokenHooks,
            s = n.documentTypes || {},
            c = n.mediaTypes || {},
            u = n.mediaFeatures || {},
            d = n.mediaValueKeywords || {},
            f = n.propertyKeywords || {},
            p = n.nonStandardPropertyKeywords || {},
            h = n.fontProperties || {},
            m = n.counterDescriptors || {},
            g = n.colorKeywords || {},
            v = n.valueKeywords || {},
            y = n.allowNested,
            b = n.lineComment,
            x = !0 === n.supportsAtComponent;
          function w(e, t) {
            return (i = t), e;
          }
          function k(e, t) {
            var n = e.next();
            if (l[n]) {
              var r = l[n](e, t);
              if (!1 !== r) return r;
            }
            return '@' == n
              ? (e.eatWhile(/[\w\\\-]/), w('def', e.current()))
              : '=' == n || (('~' == n || '|' == n) && e.eat('='))
              ? w(null, 'compare')
              : '"' == n || "'" == n
              ? ((t.tokenize = _(n)), t.tokenize(e, t))
              : '#' == n
              ? (e.eatWhile(/[\w\\\-]/), w('atom', 'hash'))
              : '!' == n
              ? (e.match(/^\s*\w*/), w('keyword', 'important'))
              : /\d/.test(n) || ('.' == n && e.eat(/\d/))
              ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
              : '-' !== n
              ? /[,+>*\/]/.test(n)
                ? w(null, 'select-op')
                : '.' == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                ? w('qualifier', 'qualifier')
                : /[:;{}\[\]\(\)]/.test(n)
                ? w(null, n)
                : e.match(/[\w-.]+(?=\()/)
                ? (/^(url(-prefix)?|domain|regexp)$/.test(
                    e.current().toLowerCase()
                  ) && (t.tokenize = C),
                  w('variable callee', 'variable'))
                : /[\w\\\-]/.test(n)
                ? (e.eatWhile(/[\w\\\-]/), w('property', 'word'))
                : w(null, null)
              : /[\d.]/.test(e.peek())
              ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
              : e.match(/^-[\w\\\-]*/)
              ? (e.eatWhile(/[\w\\\-]/),
                e.match(/^\s*:/, !1)
                  ? w('variable-2', 'variable-definition')
                  : w('variable-2', 'variable'))
              : e.match(/^\w+-/)
              ? w('meta', 'meta')
              : void 0;
          }
          function _(e) {
            return function(t, n) {
              for (var r, i = !1; null != (r = t.next()); ) {
                if (r == e && !i) {
                  ')' == e && t.backUp(1);
                  break;
                }
                i = !i && '\\' == r;
              }
              return (
                (r == e || (!i && ')' != e)) && (n.tokenize = null),
                w('string', 'string')
              );
            };
          }
          function C(e, t) {
            return (
              e.next(),
              e.match(/\s*[\"\')]/, !1)
                ? (t.tokenize = null)
                : (t.tokenize = _(')')),
              w(null, '(')
            );
          }
          function S(e, t, n) {
            (this.type = e), (this.indent = t), (this.prev = n);
          }
          function M(e, t, n, r) {
            return (
              (e.context = new S(
                n,
                t.indentation() + (!1 === r ? 0 : a),
                e.context
              )),
              n
            );
          }
          function T(e) {
            return (
              e.context.prev && (e.context = e.context.prev), e.context.type
            );
          }
          function L(e, t, n) {
            return E[n.context.type](e, t, n);
          }
          function O(e, t, n, r) {
            for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
            return L(e, t, n);
          }
          function D(e) {
            var t = e.current().toLowerCase();
            o = v.hasOwnProperty(t)
              ? 'atom'
              : g.hasOwnProperty(t)
              ? 'keyword'
              : 'variable';
          }
          var E = {
            top: function(e, t, n) {
              if ('{' == e) return M(n, t, 'block');
              if ('}' == e && n.context.prev) return T(n);
              if (x && /@component/i.test(e))
                return M(n, t, 'atComponentBlock');
              if (/^@(-moz-)?document$/i.test(e))
                return M(n, t, 'documentTypes');
              if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
                return M(n, t, 'atBlock');
              if (/^@(font-face|counter-style)/i.test(e))
                return (n.stateArg = e), 'restricted_atBlock_before';
              if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
                return 'keyframes';
              if (e && '@' == e.charAt(0)) return M(n, t, 'at');
              if ('hash' == e) o = 'builtin';
              else if ('word' == e) o = 'tag';
              else {
                if ('variable-definition' == e) return 'maybeprop';
                if ('interpolation' == e) return M(n, t, 'interpolation');
                if (':' == e) return 'pseudo';
                if (y && '(' == e) return M(n, t, 'parens');
              }
              return n.context.type;
            },
            block: function(e, t, n) {
              if ('word' == e) {
                var r = t.current().toLowerCase();
                return f.hasOwnProperty(r)
                  ? ((o = 'property'), 'maybeprop')
                  : p.hasOwnProperty(r)
                  ? ((o = 'string-2'), 'maybeprop')
                  : y
                  ? ((o = t.match(/^\s*:(?:\s|$)/, !1) ? 'property' : 'tag'),
                    'block')
                  : ((o += ' error'), 'maybeprop');
              }
              return 'meta' == e
                ? 'block'
                : y || ('hash' != e && 'qualifier' != e)
                ? E.top(e, t, n)
                : ((o = 'error'), 'block');
            },
            maybeprop: function(e, t, n) {
              return ':' == e ? M(n, t, 'prop') : L(e, t, n);
            },
            prop: function(e, t, n) {
              if (';' == e) return T(n);
              if ('{' == e && y) return M(n, t, 'propBlock');
              if ('}' == e || '{' == e) return O(e, t, n);
              if ('(' == e) return M(n, t, 'parens');
              if (
                'hash' != e ||
                /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
                  t.current()
                )
              ) {
                if ('word' == e) D(t);
                else if ('interpolation' == e) return M(n, t, 'interpolation');
              } else o += ' error';
              return 'prop';
            },
            propBlock: function(e, t, n) {
              return '}' == e
                ? T(n)
                : 'word' == e
                ? ((o = 'property'), 'maybeprop')
                : n.context.type;
            },
            parens: function(e, t, n) {
              return '{' == e || '}' == e
                ? O(e, t, n)
                : ')' == e
                ? T(n)
                : '(' == e
                ? M(n, t, 'parens')
                : 'interpolation' == e
                ? M(n, t, 'interpolation')
                : ('word' == e && D(t), 'parens');
            },
            pseudo: function(e, t, n) {
              return 'meta' == e
                ? 'pseudo'
                : 'word' == e
                ? ((o = 'variable-3'), n.context.type)
                : L(e, t, n);
            },
            documentTypes: function(e, t, n) {
              return 'word' == e && s.hasOwnProperty(t.current())
                ? ((o = 'tag'), n.context.type)
                : E.atBlock(e, t, n);
            },
            atBlock: function(e, t, n) {
              if ('(' == e) return M(n, t, 'atBlock_parens');
              if ('}' == e || ';' == e) return O(e, t, n);
              if ('{' == e) return T(n) && M(n, t, y ? 'block' : 'top');
              if ('interpolation' == e) return M(n, t, 'interpolation');
              if ('word' == e) {
                var r = t.current().toLowerCase();
                o =
                  'only' == r || 'not' == r || 'and' == r || 'or' == r
                    ? 'keyword'
                    : c.hasOwnProperty(r)
                    ? 'attribute'
                    : u.hasOwnProperty(r)
                    ? 'property'
                    : d.hasOwnProperty(r)
                    ? 'keyword'
                    : f.hasOwnProperty(r)
                    ? 'property'
                    : p.hasOwnProperty(r)
                    ? 'string-2'
                    : v.hasOwnProperty(r)
                    ? 'atom'
                    : g.hasOwnProperty(r)
                    ? 'keyword'
                    : 'error';
              }
              return n.context.type;
            },
            atComponentBlock: function(e, t, n) {
              return '}' == e
                ? O(e, t, n)
                : '{' == e
                ? T(n) && M(n, t, y ? 'block' : 'top', !1)
                : ('word' == e && (o = 'error'), n.context.type);
            },
            atBlock_parens: function(e, t, n) {
              return ')' == e
                ? T(n)
                : '{' == e || '}' == e
                ? O(e, t, n, 2)
                : E.atBlock(e, t, n);
            },
            restricted_atBlock_before: function(e, t, n) {
              return '{' == e
                ? M(n, t, 'restricted_atBlock')
                : 'word' == e && '@counter-style' == n.stateArg
                ? ((o = 'variable'), 'restricted_atBlock_before')
                : L(e, t, n);
            },
            restricted_atBlock: function(e, t, n) {
              return '}' == e
                ? ((n.stateArg = null), T(n))
                : 'word' == e
                ? ((o =
                    ('@font-face' == n.stateArg &&
                      !h.hasOwnProperty(t.current().toLowerCase())) ||
                    ('@counter-style' == n.stateArg &&
                      !m.hasOwnProperty(t.current().toLowerCase()))
                      ? 'error'
                      : 'property'),
                  'maybeprop')
                : 'restricted_atBlock';
            },
            keyframes: function(e, t, n) {
              return 'word' == e
                ? ((o = 'variable'), 'keyframes')
                : '{' == e
                ? M(n, t, 'top')
                : L(e, t, n);
            },
            at: function(e, t, n) {
              return ';' == e
                ? T(n)
                : '{' == e || '}' == e
                ? O(e, t, n)
                : ('word' == e ? (o = 'tag') : 'hash' == e && (o = 'builtin'),
                  'at');
            },
            interpolation: function(e, t, n) {
              return '}' == e
                ? T(n)
                : '{' == e || ';' == e
                ? O(e, t, n)
                : ('word' == e
                    ? (o = 'variable')
                    : 'variable' != e && '(' != e && ')' != e && (o = 'error'),
                  'interpolation');
            },
          };
          return {
            startState: function(e) {
              return {
                tokenize: null,
                state: r ? 'block' : 'top',
                stateArg: null,
                context: new S(r ? 'block' : 'top', e || 0, null),
              };
            },
            token: function(e, t) {
              if (!t.tokenize && e.eatSpace()) return null;
              var n = (t.tokenize || k)(e, t);
              return (
                n && 'object' == typeof n && ((i = n[1]), (n = n[0])),
                (o = n),
                'comment' != i && (t.state = E[t.state](i, e, t)),
                o
              );
            },
            indent: function(e, t) {
              var n = e.context,
                r = t && t.charAt(0),
                i = n.indent;
              return (
                'prop' != n.type || ('}' != r && ')' != r) || (n = n.prev),
                n.prev &&
                  ('}' != r ||
                  ('block' != n.type &&
                    'top' != n.type &&
                    'interpolation' != n.type &&
                    'restricted_atBlock' != n.type)
                    ? ((')' != r ||
                        ('parens' != n.type && 'atBlock_parens' != n.type)) &&
                        ('{' != r ||
                          ('at' != n.type && 'atBlock' != n.type))) ||
                      (i = Math.max(0, n.indent - a))
                    : (i = (n = n.prev).indent)),
                i
              );
            },
            electricChars: '}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: b,
            fold: 'brace',
          };
        });
        var n = ['domain', 'regexp', 'url', 'url-prefix'],
          r = t(n),
          i = [
            'all',
            'aural',
            'braille',
            'handheld',
            'print',
            'projection',
            'screen',
            'tty',
            'tv',
            'embossed',
          ],
          o = t(i),
          a = [
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'device-width',
            'min-device-width',
            'max-device-width',
            'device-height',
            'min-device-height',
            'max-device-height',
            'aspect-ratio',
            'min-aspect-ratio',
            'max-aspect-ratio',
            'device-aspect-ratio',
            'min-device-aspect-ratio',
            'max-device-aspect-ratio',
            'color',
            'min-color',
            'max-color',
            'color-index',
            'min-color-index',
            'max-color-index',
            'monochrome',
            'min-monochrome',
            'max-monochrome',
            'resolution',
            'min-resolution',
            'max-resolution',
            'scan',
            'grid',
            'orientation',
            'device-pixel-ratio',
            'min-device-pixel-ratio',
            'max-device-pixel-ratio',
            'pointer',
            'any-pointer',
            'hover',
            'any-hover',
          ],
          l = t(a),
          s = [
            'landscape',
            'portrait',
            'none',
            'coarse',
            'fine',
            'on-demand',
            'hover',
            'interlace',
            'progressive',
          ],
          c = t(s),
          u = [
            'align-content',
            'align-items',
            'align-self',
            'alignment-adjust',
            'alignment-baseline',
            'anchor-point',
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'appearance',
            'azimuth',
            'backface-visibility',
            'background',
            'background-attachment',
            'background-blend-mode',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',
            'baseline-shift',
            'binding',
            'bleed',
            'bookmark-label',
            'bookmark-level',
            'bookmark-state',
            'bookmark-target',
            'border',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-collapse',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-radius',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-spacing',
            'border-style',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-width',
            'bottom',
            'box-decoration-break',
            'box-shadow',
            'box-sizing',
            'break-after',
            'break-before',
            'break-inside',
            'caption-side',
            'caret-color',
            'clear',
            'clip',
            'color',
            'color-profile',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'content',
            'counter-increment',
            'counter-reset',
            'crop',
            'cue',
            'cue-after',
            'cue-before',
            'cursor',
            'direction',
            'display',
            'dominant-baseline',
            'drop-initial-after-adjust',
            'drop-initial-after-align',
            'drop-initial-before-adjust',
            'drop-initial-before-align',
            'drop-initial-size',
            'drop-initial-value',
            'elevation',
            'empty-cells',
            'fit',
            'fit-position',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'float',
            'float-offset',
            'flow-from',
            'flow-into',
            'font',
            'font-feature-settings',
            'font-family',
            'font-kerning',
            'font-language-override',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-alternates',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-weight',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-gap',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-gap',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'hanging-punctuation',
            'height',
            'hyphens',
            'icon',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'inline-box-align',
            'justify-content',
            'justify-items',
            'justify-self',
            'left',
            'letter-spacing',
            'line-break',
            'line-height',
            'line-stacking',
            'line-stacking-ruby',
            'line-stacking-shift',
            'line-stacking-strategy',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'marks',
            'marquee-direction',
            'marquee-loop',
            'marquee-play-count',
            'marquee-speed',
            'marquee-style',
            'max-height',
            'max-width',
            'min-height',
            'min-width',
            'mix-blend-mode',
            'move-to',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'object-fit',
            'object-position',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'overflow',
            'overflow-style',
            'overflow-wrap',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'page',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'page-policy',
            'pause',
            'pause-after',
            'pause-before',
            'perspective',
            'perspective-origin',
            'pitch',
            'pitch-range',
            'place-content',
            'place-items',
            'place-self',
            'play-during',
            'position',
            'presentation-level',
            'punctuation-trim',
            'quotes',
            'region-break-after',
            'region-break-before',
            'region-break-inside',
            'region-fragment',
            'rendering-intent',
            'resize',
            'rest',
            'rest-after',
            'rest-before',
            'richness',
            'right',
            'rotation',
            'rotation-point',
            'ruby-align',
            'ruby-overhang',
            'ruby-position',
            'ruby-span',
            'shape-image-threshold',
            'shape-inside',
            'shape-margin',
            'shape-outside',
            'size',
            'speak',
            'speak-as',
            'speak-header',
            'speak-numeral',
            'speak-punctuation',
            'speech-rate',
            'stress',
            'string-set',
            'tab-size',
            'table-layout',
            'target',
            'target-name',
            'target-new',
            'target-position',
            'text-align',
            'text-align-last',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-skip',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-height',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-overflow',
            'text-shadow',
            'text-size-adjust',
            'text-space-collapse',
            'text-transform',
            'text-underline-position',
            'text-wrap',
            'top',
            'transform',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'unicode-bidi',
            'user-select',
            'vertical-align',
            'visibility',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'volume',
            'white-space',
            'widows',
            'width',
            'will-change',
            'word-break',
            'word-spacing',
            'word-wrap',
            'z-index',
            'clip-path',
            'clip-rule',
            'mask',
            'enable-background',
            'filter',
            'flood-color',
            'flood-opacity',
            'lighting-color',
            'stop-color',
            'stop-opacity',
            'pointer-events',
            'color-interpolation',
            'color-interpolation-filters',
            'color-rendering',
            'fill',
            'fill-opacity',
            'fill-rule',
            'image-rendering',
            'marker',
            'marker-end',
            'marker-mid',
            'marker-start',
            'shape-rendering',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-rendering',
            'baseline-shift',
            'dominant-baseline',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'text-anchor',
            'writing-mode',
          ],
          d = t(u),
          f = [
            'scrollbar-arrow-color',
            'scrollbar-base-color',
            'scrollbar-dark-shadow-color',
            'scrollbar-face-color',
            'scrollbar-highlight-color',
            'scrollbar-shadow-color',
            'scrollbar-3d-light-color',
            'scrollbar-track-color',
            'shape-inside',
            'searchfield-cancel-button',
            'searchfield-decoration',
            'searchfield-results-button',
            'searchfield-results-decoration',
            'zoom',
          ],
          p = t(f),
          h = t([
            'font-family',
            'src',
            'unicode-range',
            'font-variant',
            'font-feature-settings',
            'font-stretch',
            'font-weight',
            'font-style',
          ]),
          m = t([
            'additive-symbols',
            'fallback',
            'negative',
            'pad',
            'prefix',
            'range',
            'speak-as',
            'suffix',
            'symbols',
            'system',
          ]),
          g = [
            'aliceblue',
            'antiquewhite',
            'aqua',
            'aquamarine',
            'azure',
            'beige',
            'bisque',
            'black',
            'blanchedalmond',
            'blue',
            'blueviolet',
            'brown',
            'burlywood',
            'cadetblue',
            'chartreuse',
            'chocolate',
            'coral',
            'cornflowerblue',
            'cornsilk',
            'crimson',
            'cyan',
            'darkblue',
            'darkcyan',
            'darkgoldenrod',
            'darkgray',
            'darkgreen',
            'darkkhaki',
            'darkmagenta',
            'darkolivegreen',
            'darkorange',
            'darkorchid',
            'darkred',
            'darksalmon',
            'darkseagreen',
            'darkslateblue',
            'darkslategray',
            'darkturquoise',
            'darkviolet',
            'deeppink',
            'deepskyblue',
            'dimgray',
            'dodgerblue',
            'firebrick',
            'floralwhite',
            'forestgreen',
            'fuchsia',
            'gainsboro',
            'ghostwhite',
            'gold',
            'goldenrod',
            'gray',
            'grey',
            'green',
            'greenyellow',
            'honeydew',
            'hotpink',
            'indianred',
            'indigo',
            'ivory',
            'khaki',
            'lavender',
            'lavenderblush',
            'lawngreen',
            'lemonchiffon',
            'lightblue',
            'lightcoral',
            'lightcyan',
            'lightgoldenrodyellow',
            'lightgray',
            'lightgreen',
            'lightpink',
            'lightsalmon',
            'lightseagreen',
            'lightskyblue',
            'lightslategray',
            'lightsteelblue',
            'lightyellow',
            'lime',
            'limegreen',
            'linen',
            'magenta',
            'maroon',
            'mediumaquamarine',
            'mediumblue',
            'mediumorchid',
            'mediumpurple',
            'mediumseagreen',
            'mediumslateblue',
            'mediumspringgreen',
            'mediumturquoise',
            'mediumvioletred',
            'midnightblue',
            'mintcream',
            'mistyrose',
            'moccasin',
            'navajowhite',
            'navy',
            'oldlace',
            'olive',
            'olivedrab',
            'orange',
            'orangered',
            'orchid',
            'palegoldenrod',
            'palegreen',
            'paleturquoise',
            'palevioletred',
            'papayawhip',
            'peachpuff',
            'peru',
            'pink',
            'plum',
            'powderblue',
            'purple',
            'rebeccapurple',
            'red',
            'rosybrown',
            'royalblue',
            'saddlebrown',
            'salmon',
            'sandybrown',
            'seagreen',
            'seashell',
            'sienna',
            'silver',
            'skyblue',
            'slateblue',
            'slategray',
            'snow',
            'springgreen',
            'steelblue',
            'tan',
            'teal',
            'thistle',
            'tomato',
            'turquoise',
            'violet',
            'wheat',
            'white',
            'whitesmoke',
            'yellow',
            'yellowgreen',
          ],
          v = t(g),
          y = [
            'above',
            'absolute',
            'activeborder',
            'additive',
            'activecaption',
            'afar',
            'after-white-space',
            'ahead',
            'alias',
            'all',
            'all-scroll',
            'alphabetic',
            'alternate',
            'always',
            'amharic',
            'amharic-abegede',
            'antialiased',
            'appworkspace',
            'arabic-indic',
            'armenian',
            'asterisks',
            'attr',
            'auto',
            'auto-flow',
            'avoid',
            'avoid-column',
            'avoid-page',
            'avoid-region',
            'background',
            'backwards',
            'baseline',
            'below',
            'bidi-override',
            'binary',
            'bengali',
            'blink',
            'block',
            'block-axis',
            'bold',
            'bolder',
            'border',
            'border-box',
            'both',
            'bottom',
            'break',
            'break-all',
            'break-word',
            'bullets',
            'button',
            'button-bevel',
            'buttonface',
            'buttonhighlight',
            'buttonshadow',
            'buttontext',
            'calc',
            'cambodian',
            'capitalize',
            'caps-lock-indicator',
            'caption',
            'captiontext',
            'caret',
            'cell',
            'center',
            'checkbox',
            'circle',
            'cjk-decimal',
            'cjk-earthly-branch',
            'cjk-heavenly-stem',
            'cjk-ideographic',
            'clear',
            'clip',
            'close-quote',
            'col-resize',
            'collapse',
            'color',
            'color-burn',
            'color-dodge',
            'column',
            'column-reverse',
            'compact',
            'condensed',
            'contain',
            'content',
            'contents',
            'content-box',
            'context-menu',
            'continuous',
            'copy',
            'counter',
            'counters',
            'cover',
            'crop',
            'cross',
            'crosshair',
            'currentcolor',
            'cursive',
            'cyclic',
            'darken',
            'dashed',
            'decimal',
            'decimal-leading-zero',
            'default',
            'default-button',
            'dense',
            'destination-atop',
            'destination-in',
            'destination-out',
            'destination-over',
            'devanagari',
            'difference',
            'disc',
            'discard',
            'disclosure-closed',
            'disclosure-open',
            'document',
            'dot-dash',
            'dot-dot-dash',
            'dotted',
            'double',
            'down',
            'e-resize',
            'ease',
            'ease-in',
            'ease-in-out',
            'ease-out',
            'element',
            'ellipse',
            'ellipsis',
            'embed',
            'end',
            'ethiopic',
            'ethiopic-abegede',
            'ethiopic-abegede-am-et',
            'ethiopic-abegede-gez',
            'ethiopic-abegede-ti-er',
            'ethiopic-abegede-ti-et',
            'ethiopic-halehame-aa-er',
            'ethiopic-halehame-aa-et',
            'ethiopic-halehame-am-et',
            'ethiopic-halehame-gez',
            'ethiopic-halehame-om-et',
            'ethiopic-halehame-sid-et',
            'ethiopic-halehame-so-et',
            'ethiopic-halehame-ti-er',
            'ethiopic-halehame-ti-et',
            'ethiopic-halehame-tig',
            'ethiopic-numeric',
            'ew-resize',
            'exclusion',
            'expanded',
            'extends',
            'extra-condensed',
            'extra-expanded',
            'fantasy',
            'fast',
            'fill',
            'fixed',
            'flat',
            'flex',
            'flex-end',
            'flex-start',
            'footnotes',
            'forwards',
            'from',
            'geometricPrecision',
            'georgian',
            'graytext',
            'grid',
            'groove',
            'gujarati',
            'gurmukhi',
            'hand',
            'hangul',
            'hangul-consonant',
            'hard-light',
            'hebrew',
            'help',
            'hidden',
            'hide',
            'higher',
            'highlight',
            'highlighttext',
            'hiragana',
            'hiragana-iroha',
            'horizontal',
            'hsl',
            'hsla',
            'hue',
            'icon',
            'ignore',
            'inactiveborder',
            'inactivecaption',
            'inactivecaptiontext',
            'infinite',
            'infobackground',
            'infotext',
            'inherit',
            'initial',
            'inline',
            'inline-axis',
            'inline-block',
            'inline-flex',
            'inline-grid',
            'inline-table',
            'inset',
            'inside',
            'intrinsic',
            'invert',
            'italic',
            'japanese-formal',
            'japanese-informal',
            'justify',
            'kannada',
            'katakana',
            'katakana-iroha',
            'keep-all',
            'khmer',
            'korean-hangul-formal',
            'korean-hanja-formal',
            'korean-hanja-informal',
            'landscape',
            'lao',
            'large',
            'larger',
            'left',
            'level',
            'lighter',
            'lighten',
            'line-through',
            'linear',
            'linear-gradient',
            'lines',
            'list-item',
            'listbox',
            'listitem',
            'local',
            'logical',
            'loud',
            'lower',
            'lower-alpha',
            'lower-armenian',
            'lower-greek',
            'lower-hexadecimal',
            'lower-latin',
            'lower-norwegian',
            'lower-roman',
            'lowercase',
            'ltr',
            'luminosity',
            'malayalam',
            'match',
            'matrix',
            'matrix3d',
            'media-controls-background',
            'media-current-time-display',
            'media-fullscreen-button',
            'media-mute-button',
            'media-play-button',
            'media-return-to-realtime-button',
            'media-rewind-button',
            'media-seek-back-button',
            'media-seek-forward-button',
            'media-slider',
            'media-sliderthumb',
            'media-time-remaining-display',
            'media-volume-slider',
            'media-volume-slider-container',
            'media-volume-sliderthumb',
            'medium',
            'menu',
            'menulist',
            'menulist-button',
            'menulist-text',
            'menulist-textfield',
            'menutext',
            'message-box',
            'middle',
            'min-intrinsic',
            'mix',
            'mongolian',
            'monospace',
            'move',
            'multiple',
            'multiply',
            'myanmar',
            'n-resize',
            'narrower',
            'ne-resize',
            'nesw-resize',
            'no-close-quote',
            'no-drop',
            'no-open-quote',
            'no-repeat',
            'none',
            'normal',
            'not-allowed',
            'nowrap',
            'ns-resize',
            'numbers',
            'numeric',
            'nw-resize',
            'nwse-resize',
            'oblique',
            'octal',
            'opacity',
            'open-quote',
            'optimizeLegibility',
            'optimizeSpeed',
            'oriya',
            'oromo',
            'outset',
            'outside',
            'outside-shape',
            'overlay',
            'overline',
            'padding',
            'padding-box',
            'painted',
            'page',
            'paused',
            'persian',
            'perspective',
            'plus-darker',
            'plus-lighter',
            'pointer',
            'polygon',
            'portrait',
            'pre',
            'pre-line',
            'pre-wrap',
            'preserve-3d',
            'progress',
            'push-button',
            'radial-gradient',
            'radio',
            'read-only',
            'read-write',
            'read-write-plaintext-only',
            'rectangle',
            'region',
            'relative',
            'repeat',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
            'repeat-x',
            'repeat-y',
            'reset',
            'reverse',
            'rgb',
            'rgba',
            'ridge',
            'right',
            'rotate',
            'rotate3d',
            'rotateX',
            'rotateY',
            'rotateZ',
            'round',
            'row',
            'row-resize',
            'row-reverse',
            'rtl',
            'run-in',
            'running',
            's-resize',
            'sans-serif',
            'saturation',
            'scale',
            'scale3d',
            'scaleX',
            'scaleY',
            'scaleZ',
            'screen',
            'scroll',
            'scrollbar',
            'scroll-position',
            'se-resize',
            'searchfield',
            'searchfield-cancel-button',
            'searchfield-decoration',
            'searchfield-results-button',
            'searchfield-results-decoration',
            'self-start',
            'self-end',
            'semi-condensed',
            'semi-expanded',
            'separate',
            'serif',
            'show',
            'sidama',
            'simp-chinese-formal',
            'simp-chinese-informal',
            'single',
            'skew',
            'skewX',
            'skewY',
            'skip-white-space',
            'slide',
            'slider-horizontal',
            'slider-vertical',
            'sliderthumb-horizontal',
            'sliderthumb-vertical',
            'slow',
            'small',
            'small-caps',
            'small-caption',
            'smaller',
            'soft-light',
            'solid',
            'somali',
            'source-atop',
            'source-in',
            'source-out',
            'source-over',
            'space',
            'space-around',
            'space-between',
            'space-evenly',
            'spell-out',
            'square',
            'square-button',
            'start',
            'static',
            'status-bar',
            'stretch',
            'stroke',
            'sub',
            'subpixel-antialiased',
            'super',
            'sw-resize',
            'symbolic',
            'symbols',
            'system-ui',
            'table',
            'table-caption',
            'table-cell',
            'table-column',
            'table-column-group',
            'table-footer-group',
            'table-header-group',
            'table-row',
            'table-row-group',
            'tamil',
            'telugu',
            'text',
            'text-bottom',
            'text-top',
            'textarea',
            'textfield',
            'thai',
            'thick',
            'thin',
            'threeddarkshadow',
            'threedface',
            'threedhighlight',
            'threedlightshadow',
            'threedshadow',
            'tibetan',
            'tigre',
            'tigrinya-er',
            'tigrinya-er-abegede',
            'tigrinya-et',
            'tigrinya-et-abegede',
            'to',
            'top',
            'trad-chinese-formal',
            'trad-chinese-informal',
            'transform',
            'translate',
            'translate3d',
            'translateX',
            'translateY',
            'translateZ',
            'transparent',
            'ultra-condensed',
            'ultra-expanded',
            'underline',
            'unset',
            'up',
            'upper-alpha',
            'upper-armenian',
            'upper-greek',
            'upper-hexadecimal',
            'upper-latin',
            'upper-norwegian',
            'upper-roman',
            'uppercase',
            'urdu',
            'url',
            'var',
            'vertical',
            'vertical-text',
            'visible',
            'visibleFill',
            'visiblePainted',
            'visibleStroke',
            'visual',
            'w-resize',
            'wait',
            'wave',
            'wider',
            'window',
            'windowframe',
            'windowtext',
            'words',
            'wrap',
            'wrap-reverse',
            'x-large',
            'x-small',
            'xor',
            'xx-large',
            'xx-small',
          ],
          b = t(y),
          x = n
            .concat(i)
            .concat(a)
            .concat(s)
            .concat(u)
            .concat(f)
            .concat(g)
            .concat(y);
        function w(e, t) {
          for (var n, r = !1; null != (n = e.next()); ) {
            if (r && '/' == n) {
              t.tokenize = null;
              break;
            }
            r = '*' == n;
          }
          return ['comment', 'comment'];
        }
        e.registerHelper('hintWords', 'css', x),
          e.defineMIME('text/css', {
            documentTypes: r,
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: p,
            fontProperties: h,
            counterDescriptors: m,
            colorKeywords: v,
            valueKeywords: b,
            tokenHooks: {
              '/': function(e, t) {
                return !!e.eat('*') && ((t.tokenize = w), w(e, t));
              },
            },
            name: 'css',
          }),
          e.defineMIME('text/x-scss', {
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: p,
            colorKeywords: v,
            valueKeywords: b,
            fontProperties: h,
            allowNested: !0,
            lineComment: '//',
            tokenHooks: {
              '/': function(e, t) {
                return e.eat('/')
                  ? (e.skipToEnd(), ['comment', 'comment'])
                  : e.eat('*')
                  ? ((t.tokenize = w), w(e, t))
                  : ['operator', 'operator'];
              },
              ':': function(e) {
                return !!e.match(/\s*\{/, !1) && [null, null];
              },
              $: function(e) {
                return (
                  e.match(/^[\w-]+/),
                  e.match(/^\s*:/, !1)
                    ? ['variable-2', 'variable-definition']
                    : ['variable-2', 'variable']
                );
              },
              '#': function(e) {
                return !!e.eat('{') && [null, 'interpolation'];
              },
            },
            name: 'css',
            helperType: 'scss',
          }),
          e.defineMIME('text/x-less', {
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: p,
            colorKeywords: v,
            valueKeywords: b,
            fontProperties: h,
            allowNested: !0,
            lineComment: '//',
            tokenHooks: {
              '/': function(e, t) {
                return e.eat('/')
                  ? (e.skipToEnd(), ['comment', 'comment'])
                  : e.eat('*')
                  ? ((t.tokenize = w), w(e, t))
                  : ['operator', 'operator'];
              },
              '@': function(e) {
                return e.eat('{')
                  ? [null, 'interpolation']
                  : !e.match(
                      /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                      !1
                    ) &&
                      (e.eatWhile(/[\w\\\-]/),
                      e.match(/^\s*:/, !1)
                        ? ['variable-2', 'variable-definition']
                        : ['variable-2', 'variable']);
              },
              '&': function() {
                return ['atom', 'atom'];
              },
            },
            name: 'css',
            helperType: 'less',
          }),
          e.defineMIME('text/x-gss', {
            documentTypes: r,
            mediaTypes: o,
            mediaFeatures: l,
            propertyKeywords: d,
            nonStandardPropertyKeywords: p,
            fontProperties: h,
            counterDescriptors: m,
            colorKeywords: v,
            valueKeywords: b,
            supportsAtComponent: !0,
            tokenHooks: {
              '/': function(e, t) {
                return !!e.eat('*') && ((t.tokenize = w), w(e, t));
              },
            },
            name: 'css',
            helperType: 'gss',
          });
      })(n(777));
    },
    2282: function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, r, i, o) {
          (this.indented = e),
            (this.column = t),
            (this.type = n),
            (this.info = r),
            (this.align = i),
            (this.prev = o);
        }
        function n(e, n, r, i) {
          var o = e.indented;
          return (
            e.context &&
              'statement' == e.context.type &&
              'statement' != r &&
              (o = e.context.indented),
            (e.context = new t(o, n, r, i, null, e.context))
          );
        }
        function r(e) {
          var t = e.context.type;
          return (
            (')' != t && ']' != t && '}' != t) ||
              (e.indented = e.context.indented),
            (e.context = e.context.prev)
          );
        }
        function i(e, t, n) {
          return (
            'variable' == t.prevToken ||
            'type' == t.prevToken ||
            !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, n)) ||
            !(!t.typeAtEndOfLine || e.column() != e.indentation()) ||
            void 0
          );
        }
        function o(e) {
          for (;;) {
            if (!e || 'top' == e.type) return !0;
            if ('}' == e.type && 'namespace' != e.prev.info) return !1;
            e = e.prev;
          }
        }
        function a(e) {
          for (var t = {}, n = e.split(' '), r = 0; r < n.length; ++r)
            t[n[r]] = !0;
          return t;
        }
        function l(e, t) {
          return 'function' === typeof e ? e(t) : e.propertyIsEnumerable(t);
        }
        e.defineMode('clike', function(a, s) {
          var c,
            u,
            d = a.indentUnit,
            f = s.statementIndentUnit || d,
            p = s.dontAlignCalls,
            h = s.keywords || {},
            m = s.types || {},
            g = s.builtin || {},
            v = s.blockKeywords || {},
            y = s.defKeywords || {},
            b = s.atoms || {},
            x = s.hooks || {},
            w = s.multiLineStrings,
            k = !1 !== s.indentStatements,
            _ = !1 !== s.indentSwitch,
            C = s.namespaceSeparator,
            S = s.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
            M = s.numberStart || /[\d\.]/,
            T =
              s.number ||
              /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
            L = s.isOperatorChar || /[+\-*&%=<>!?|\/]/,
            O = s.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
            D = s.isReservedIdentifier || !1;
          function E(e, t) {
            var n,
              r = e.next();
            if (x[r]) {
              var i = x[r](e, t);
              if (!1 !== i) return i;
            }
            if ('"' == r || "'" == r)
              return (
                (t.tokenize =
                  ((n = r),
                  function(e, t) {
                    for (var r, i = !1, o = !1; null != (r = e.next()); ) {
                      if (r == n && !i) {
                        o = !0;
                        break;
                      }
                      i = !i && '\\' == r;
                    }
                    return (o || (!i && !w)) && (t.tokenize = null), 'string';
                  })),
                t.tokenize(e, t)
              );
            if (S.test(r)) return (c = r), null;
            if (M.test(r)) {
              if ((e.backUp(1), e.match(T))) return 'number';
              e.next();
            }
            if ('/' == r) {
              if (e.eat('*')) return (t.tokenize = A), A(e, t);
              if (e.eat('/')) return e.skipToEnd(), 'comment';
            }
            if (L.test(r)) {
              for (; !e.match(/^\/[\/*]/, !1) && e.eat(L); );
              return 'operator';
            }
            if ((e.eatWhile(O), C)) for (; e.match(C); ) e.eatWhile(O);
            var o = e.current();
            return l(h, o)
              ? (l(v, o) && (c = 'newstatement'),
                l(y, o) && (u = !0),
                'keyword')
              : l(m, o)
              ? 'type'
              : l(g, o) || (D && D(o))
              ? (l(v, o) && (c = 'newstatement'), 'builtin')
              : l(b, o)
              ? 'atom'
              : 'variable';
          }
          function A(e, t) {
            for (var n, r = !1; (n = e.next()); ) {
              if ('/' == n && r) {
                t.tokenize = null;
                break;
              }
              r = '*' == n;
            }
            return 'comment';
          }
          function N(e, t) {
            s.typeFirstDefinitions &&
              e.eol() &&
              o(t.context) &&
              (t.typeAtEndOfLine = i(e, t, e.pos));
          }
          return {
            startState: function(e) {
              return {
                tokenize: null,
                context: new t((e || 0) - d, 0, 'top', null, !1),
                indented: 0,
                startOfLine: !0,
                prevToken: null,
              };
            },
            token: function(e, t) {
              var a = t.context;
              if (
                (e.sol() &&
                  (null == a.align && (a.align = !1),
                  (t.indented = e.indentation()),
                  (t.startOfLine = !0)),
                e.eatSpace())
              )
                return N(e, t), null;
              c = u = null;
              var l = (t.tokenize || E)(e, t);
              if ('comment' == l || 'meta' == l) return l;
              if (
                (null == a.align && (a.align = !0),
                ';' == c ||
                  ':' == c ||
                  (',' == c && e.match(/^\s*(?:\/\/.*)?$/, !1)))
              )
                for (; 'statement' == t.context.type; ) r(t);
              else if ('{' == c) n(t, e.column(), '}');
              else if ('[' == c) n(t, e.column(), ']');
              else if ('(' == c) n(t, e.column(), ')');
              else if ('}' == c) {
                for (; 'statement' == a.type; ) a = r(t);
                for ('}' == a.type && (a = r(t)); 'statement' == a.type; )
                  a = r(t);
              } else
                c == a.type
                  ? r(t)
                  : k &&
                    ((('}' == a.type || 'top' == a.type) && ';' != c) ||
                      ('statement' == a.type && 'newstatement' == c)) &&
                    n(t, e.column(), 'statement', e.current());
              if (
                ('variable' == l &&
                  ('def' == t.prevToken ||
                    (s.typeFirstDefinitions &&
                      i(e, t, e.start) &&
                      o(t.context) &&
                      e.match(/^\s*\(/, !1))) &&
                  (l = 'def'),
                x.token)
              ) {
                var d = x.token(e, t, l);
                void 0 !== d && (l = d);
              }
              return (
                'def' == l && !1 === s.styleDefs && (l = 'variable'),
                (t.startOfLine = !1),
                (t.prevToken = u ? 'def' : l || c),
                N(e, t),
                l
              );
            },
            indent: function(t, n) {
              if ((t.tokenize != E && null != t.tokenize) || t.typeAtEndOfLine)
                return e.Pass;
              var r = t.context,
                i = n && n.charAt(0),
                o = i == r.type;
              if (
                ('statement' == r.type && '}' == i && (r = r.prev),
                s.dontIndentStatements)
              )
                for (
                  ;
                  'statement' == r.type && s.dontIndentStatements.test(r.info);

                )
                  r = r.prev;
              if (x.indent) {
                var a = x.indent(t, r, n, d);
                if ('number' == typeof a) return a;
              }
              var l = r.prev && 'switch' == r.prev.info;
              if (s.allmanIndentation && /[{(]/.test(i)) {
                for (; 'top' != r.type && '}' != r.type; ) r = r.prev;
                return r.indented;
              }
              return 'statement' == r.type
                ? r.indented + ('{' == i ? 0 : f)
                : !r.align || (p && ')' == r.type)
                ? ')' != r.type || o
                  ? r.indented +
                    (o ? 0 : d) +
                    (o || !l || /^(?:case|default)\b/.test(n) ? 0 : d)
                  : r.indented + f
                : r.column + (o ? 0 : 1);
            },
            electricInput: _
              ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
              : /^\s*[{}]$/,
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: '//',
            fold: 'brace',
          };
        });
        var s =
            'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
          c = a('int long char short double float unsigned signed void bool'),
          u = a('SEL instancetype id Class Protocol BOOL');
        function d(e) {
          return l(c, e) || /.+_t$/.test(e);
        }
        var f = 'case do else for if switch while struct enum union';
        function p(e, t) {
          if (!t.startOfLine) return !1;
          for (var n, r = null; (n = e.peek()); ) {
            if ('\\' == n && e.match(/^.$/)) {
              r = p;
              break;
            }
            if ('/' == n && e.match(/^\/[\/\*]/, !1)) break;
            e.next();
          }
          return (t.tokenize = r), 'meta';
        }
        function h(e, t) {
          return 'type' == t.prevToken && 'type';
        }
        function m(e) {
          return (
            !(!e || e.length < 2) &&
            '_' == e[0] &&
            ('_' == e[1] || e[1] !== e[1].toLowerCase())
          );
        }
        function g(e) {
          return e.eatWhile(/[\w\.']/), 'number';
        }
        function v(e, t) {
          if ((e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/))) {
            var n = e.match(/"([^\s\\()]{0,16})\(/);
            return (
              !!n && ((t.cpp11RawStringDelim = n[1]), (t.tokenize = b), b(e, t))
            );
          }
          return e.match(/(u8|u|U|L)/)
            ? !!e.match(/["']/, !1) && 'string'
            : (e.next(), !1);
        }
        function y(e, t) {
          for (var n; null != (n = e.next()); )
            if ('"' == n && !e.eat('"')) {
              t.tokenize = null;
              break;
            }
          return 'string';
        }
        function b(e, t) {
          var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
          return (
            e.match(new RegExp('.*?\\)' + n + '"'))
              ? (t.tokenize = null)
              : e.skipToEnd(),
            'string'
          );
        }
        function x(t, n) {
          'string' == typeof t && (t = [t]);
          var r = [];
          function i(e) {
            if (e) for (var t in e) e.hasOwnProperty(t) && r.push(t);
          }
          i(n.keywords),
            i(n.types),
            i(n.builtin),
            i(n.atoms),
            r.length &&
              ((n.helperType = t[0]), e.registerHelper('hintWords', t[0], r));
          for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], n);
        }
        function w(e, t) {
          for (var n = !1; !e.eol(); ) {
            if (!n && e.match('"""')) {
              t.tokenize = null;
              break;
            }
            n = '\\' == e.next() && !n;
          }
          return 'string';
        }
        function k(e) {
          return function(t, n) {
            for (var r; (r = t.next()); ) {
              if ('*' == r && t.eat('/')) {
                if (1 == e) {
                  n.tokenize = null;
                  break;
                }
                return (n.tokenize = k(e - 1)), n.tokenize(t, n);
              }
              if ('/' == r && t.eat('*'))
                return (n.tokenize = k(e + 1)), n.tokenize(t, n);
            }
            return 'comment';
          };
        }
        x(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
          name: 'clike',
          keywords: a(s),
          types: d,
          blockKeywords: a(f),
          defKeywords: a('struct enum union'),
          typeFirstDefinitions: !0,
          atoms: a('NULL true false'),
          isReservedIdentifier: m,
          hooks: { '#': p, '*': h },
          modeProps: { fold: ['brace', 'include'] },
        }),
          x(['text/x-c++src', 'text/x-c++hdr'], {
            name: 'clike',
            keywords: a(
              s +
                'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq'
            ),
            types: d,
            blockKeywords: a(f + ' class try catch'),
            defKeywords: a('struct enum union class namespace'),
            typeFirstDefinitions: !0,
            atoms: a('true false NULL nullptr'),
            dontIndentStatements: /^template$/,
            isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
            isReservedIdentifier: m,
            hooks: {
              '#': p,
              '*': h,
              u: v,
              U: v,
              L: v,
              R: v,
              0: g,
              1: g,
              2: g,
              3: g,
              4: g,
              5: g,
              6: g,
              7: g,
              8: g,
              9: g,
              token: function(e, t, n) {
                if (
                  'variable' == n &&
                  '(' == e.peek() &&
                  (';' == t.prevToken ||
                    null == t.prevToken ||
                    '}' == t.prevToken) &&
                  (function(e) {
                    var t = /(\w+)::~?(\w+)$/.exec(e);
                    return t && t[1] == t[2];
                  })(e.current())
                )
                  return 'def';
              },
            },
            namespaceSeparator: '::',
            modeProps: { fold: ['brace', 'include'] },
          }),
          x('text/x-java', {
            name: 'clike',
            keywords: a(
              'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface'
            ),
            types: a(
              'byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void'
            ),
            blockKeywords: a(
              'catch class do else finally for if switch try while'
            ),
            defKeywords: a('class interface enum @interface'),
            typeFirstDefinitions: !0,
            atoms: a('true false null'),
            number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            hooks: {
              '@': function(e) {
                return (
                  !e.match('interface', !1) && (e.eatWhile(/[\w\$_]/), 'meta')
                );
              },
            },
            modeProps: { fold: ['brace', 'import'] },
          }),
          x('text/x-csharp', {
            name: 'clike',
            keywords: a(
              'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield'
            ),
            types: a(
              'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong'
            ),
            blockKeywords: a(
              'catch class do else finally for foreach if struct switch try while'
            ),
            defKeywords: a('class interface namespace struct var'),
            typeFirstDefinitions: !0,
            atoms: a('true false null'),
            hooks: {
              '@': function(e, t) {
                return e.eat('"')
                  ? ((t.tokenize = y), y(e, t))
                  : (e.eatWhile(/[\w\$_]/), 'meta');
              },
            },
          }),
          x('text/x-scala', {
            name: 'clike',
            keywords: a(
              'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble'
            ),
            types: a(
              'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
            ),
            multiLineStrings: !0,
            blockKeywords: a(
              'catch class enum do else finally for forSome if match switch try while'
            ),
            defKeywords: a('class enum def object package trait type val var'),
            atoms: a('true false null'),
            indentStatements: !1,
            indentSwitch: !1,
            isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
            hooks: {
              '@': function(e) {
                return e.eatWhile(/[\w\$_]/), 'meta';
              },
              '"': function(e, t) {
                return !!e.match('""') && ((t.tokenize = w), t.tokenize(e, t));
              },
              "'": function(e) {
                return e.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
              },
              '=': function(e, n) {
                var r = n.context;
                return (
                  !('}' != r.type || !r.align || !e.eat('>')) &&
                  ((n.context = new t(
                    r.indented,
                    r.column,
                    r.type,
                    r.info,
                    null,
                    r.prev
                  )),
                  'operator')
                );
              },
              '/': function(e, t) {
                return !!e.eat('*') && ((t.tokenize = k(1)), t.tokenize(e, t));
              },
            },
            modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
          }),
          x('text/x-kotlin', {
            name: 'clike',
            keywords: a(
              'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam'
            ),
            types: a(
              'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
            ),
            intendSwitch: !1,
            indentStatements: !1,
            multiLineStrings: !0,
            number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            blockKeywords: a(
              'catch class do else finally for if where try while enum'
            ),
            defKeywords: a('class val var object interface fun'),
            atoms: a('true false null this'),
            hooks: {
              '@': function(e) {
                return e.eatWhile(/[\w\$_]/), 'meta';
              },
              '*': function(e, t) {
                return '.' == t.prevToken ? 'variable' : 'operator';
              },
              '"': function(e, t) {
                var n;
                return (
                  (t.tokenize =
                    ((n = e.match('""')),
                    function(e, t) {
                      for (var r, i = !1, o = !1; !e.eol(); ) {
                        if (!n && !i && e.match('"')) {
                          o = !0;
                          break;
                        }
                        if (n && e.match('"""')) {
                          o = !0;
                          break;
                        }
                        (r = e.next()),
                          !i && '$' == r && e.match('{') && e.skipTo('}'),
                          (i = !i && '\\' == r && !n);
                      }
                      return (!o && n) || (t.tokenize = null), 'string';
                    })),
                  t.tokenize(e, t)
                );
              },
              '/': function(e, t) {
                return !!e.eat('*') && ((t.tokenize = k(1)), t.tokenize(e, t));
              },
              indent: function(e, t, n, r) {
                var i = n && n.charAt(0);
                return ('}' != e.prevToken && ')' != e.prevToken) || '' != n
                  ? ('operator' == e.prevToken &&
                      '}' != n &&
                      '}' != e.context.type) ||
                    ('variable' == e.prevToken && '.' == i) ||
                    (('}' == e.prevToken || ')' == e.prevToken) && '.' == i)
                    ? 2 * r + t.indented
                    : t.align && '}' == t.type
                    ? t.indented +
                      (e.context.type == (n || '').charAt(0) ? 0 : r)
                    : void 0
                  : e.indented;
              },
            },
            modeProps: { closeBrackets: { triples: '"' } },
          }),
          x(['x-shader/x-vertex', 'x-shader/x-fragment'], {
            name: 'clike',
            keywords: a(
              'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout'
            ),
            types: a(
              'float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'
            ),
            blockKeywords: a('for while do if else struct'),
            builtin: a(
              'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4'
            ),
            atoms: a(
              'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers'
            ),
            indentSwitch: !1,
            hooks: { '#': p },
            modeProps: { fold: ['brace', 'include'] },
          }),
          x('text/x-nesc', {
            name: 'clike',
            keywords: a(
              s +
                ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends'
            ),
            types: d,
            blockKeywords: a(f),
            atoms: a('null true false'),
            hooks: { '#': p },
            modeProps: { fold: ['brace', 'include'] },
          }),
          x('text/x-objectivec', {
            name: 'clike',
            keywords: a(
              s +
                ' bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available'
            ),
            types: function(e) {
              return d(e) || l(u, e);
            },
            builtin: a(
              'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION NS_RETURNS_RETAINED NS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT'
            ),
            blockKeywords: a(
              f +
                ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
            ),
            defKeywords: a(
              'struct enum union @interface @implementation @protocol @class'
            ),
            dontIndentStatements: /^@.*$/,
            typeFirstDefinitions: !0,
            atoms: a('YES NO NULL Nil nil true false nullptr'),
            isReservedIdentifier: m,
            hooks: { '#': p, '*': h },
            modeProps: { fold: ['brace', 'include'] },
          }),
          x('text/x-squirrel', {
            name: 'clike',
            keywords: a(
              'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static'
            ),
            types: d,
            blockKeywords: a(
              'case catch class else for foreach if switch try while'
            ),
            defKeywords: a('function local class'),
            typeFirstDefinitions: !0,
            atoms: a('true false null'),
            hooks: { '#': p },
            modeProps: { fold: ['brace', 'include'] },
          });
        var _ = null;
        x('text/x-ceylon', {
          name: 'clike',
          keywords: a(
            'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while'
          ),
          types: function(e) {
            var t = e.charAt(0);
            return t === t.toUpperCase() && t !== t.toLowerCase();
          },
          blockKeywords: a(
            'case catch class dynamic else finally for function if interface module new object switch try while'
          ),
          defKeywords: a(
            'class dynamic function interface module object package value'
          ),
          builtin: a(
            'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable'
          ),
          isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
          isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
          numberStart: /[\d#$]/,
          number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
          multiLineStrings: !0,
          typeFirstDefinitions: !0,
          atoms: a('true false null larger smaller equal empty finished'),
          indentSwitch: !1,
          styleDefs: !1,
          hooks: {
            '@': function(e) {
              return e.eatWhile(/[\w\$_]/), 'meta';
            },
            '"': function(e, t) {
              return (
                (t.tokenize = (function e(t) {
                  return function(n, r) {
                    for (var i, o = !1, a = !1; !n.eol(); ) {
                      if (
                        !o &&
                        n.match('"') &&
                        ('single' == t || n.match('""'))
                      ) {
                        a = !0;
                        break;
                      }
                      if (!o && n.match('``')) {
                        (_ = e(t)), (a = !0);
                        break;
                      }
                      (i = n.next()), (o = 'single' == t && !o && '\\' == i);
                    }
                    return a && (r.tokenize = null), 'string';
                  };
                })(e.match('""') ? 'triple' : 'single')),
                t.tokenize(e, t)
              );
            },
            '`': function(e, t) {
              return (
                !(!_ || !e.match('`')) &&
                ((t.tokenize = _), (_ = null), t.tokenize(e, t))
              );
            },
            "'": function(e) {
              return e.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
            },
            token: function(e, t, n) {
              if (('variable' == n || 'type' == n) && '.' == t.prevToken)
                return 'variable-2';
            },
          },
          modeProps: {
            fold: ['brace', 'import'],
            closeBrackets: { triples: '"' },
          },
        });
      })(n(777));
    },
    2283: function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e) {
          return new RegExp('^((' + e.join(')|(') + '))\\b');
        }
        var n,
          r = t(['and', 'or', 'not', 'is']),
          i = [
            'as',
            'assert',
            'break',
            'class',
            'continue',
            'def',
            'del',
            'elif',
            'else',
            'except',
            'finally',
            'for',
            'from',
            'global',
            'if',
            'import',
            'lambda',
            'pass',
            'raise',
            'return',
            'try',
            'while',
            'with',
            'yield',
            'in',
          ],
          o = [
            'abs',
            'all',
            'any',
            'bin',
            'bool',
            'bytearray',
            'callable',
            'chr',
            'classmethod',
            'compile',
            'complex',
            'delattr',
            'dict',
            'dir',
            'divmod',
            'enumerate',
            'eval',
            'filter',
            'float',
            'format',
            'frozenset',
            'getattr',
            'globals',
            'hasattr',
            'hash',
            'help',
            'hex',
            'id',
            'input',
            'int',
            'isinstance',
            'issubclass',
            'iter',
            'len',
            'list',
            'locals',
            'map',
            'max',
            'memoryview',
            'min',
            'next',
            'object',
            'oct',
            'open',
            'ord',
            'pow',
            'property',
            'range',
            'repr',
            'reversed',
            'round',
            'set',
            'setattr',
            'slice',
            'sorted',
            'staticmethod',
            'str',
            'sum',
            'super',
            'tuple',
            'type',
            'vars',
            'zip',
            '__import__',
            'NotImplemented',
            'Ellipsis',
            '__debug__',
          ];
        function a(e) {
          return e.scopes[e.scopes.length - 1];
        }
        e.registerHelper('hintWords', 'python', i.concat(o)),
          e.defineMode('python', function(n, l) {
            for (
              var s = 'error',
                c =
                  l.delimiters ||
                  l.singleDelimiters ||
                  /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                u = [
                  l.singleOperators,
                  l.doubleOperators,
                  l.doubleDelimiters,
                  l.tripleDelimiters,
                  l.operators ||
                    /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
                ],
                d = 0;
              d < u.length;
              d++
            )
              u[d] || u.splice(d--, 1);
            var f = l.hangingIndent || n.indentUnit,
              p = i,
              h = o;
            void 0 != l.extra_keywords && (p = p.concat(l.extra_keywords)),
              void 0 != l.extra_builtins && (h = h.concat(l.extra_builtins));
            var m = !(l.version && Number(l.version) < 3);
            if (m) {
              var g =
                l.identifiers ||
                /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
              (p = p.concat([
                'nonlocal',
                'False',
                'True',
                'None',
                'async',
                'await',
              ])),
                (h = h.concat(['ascii', 'bytes', 'exec', 'print']));
              var v = new RegExp(
                '^(([rbuf]|(br)|(fr))?(\'{3}|"{3}|[\'"]))',
                'i'
              );
            } else (g = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/), (p = p.concat(['exec', 'print'])), (h = h.concat(['apply', 'basestring', 'buffer', 'cmp', 'coerce', 'execfile', 'file', 'intern', 'long', 'raw_input', 'reduce', 'reload', 'unichr', 'unicode', 'xrange', 'False', 'True', 'None'])), (v = new RegExp('^(([rubf]|(ur)|(br))?(\'{3}|"{3}|[\'"]))', 'i'));
            var y = t(p),
              b = t(h);
            function x(e, t) {
              var n = e.sol() && '\\' != t.lastToken;
              if ((n && (t.indent = e.indentation()), n && 'py' == a(t).type)) {
                var r = a(t).offset;
                if (e.eatSpace()) {
                  var i = e.indentation();
                  return (
                    i > r
                      ? k(t)
                      : i < r &&
                        _(e, t) &&
                        '#' != e.peek() &&
                        (t.errorToken = !0),
                    null
                  );
                }
                var o = w(e, t);
                return r > 0 && _(e, t) && (o += ' ' + s), o;
              }
              return w(e, t);
            }
            function w(e, t) {
              if (e.eatSpace()) return null;
              if (e.match(/^#.*/)) return 'comment';
              if (e.match(/^[0-9\.]/, !1)) {
                var n = !1;
                if (
                  (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (n = !0),
                  e.match(/^[\d_]+\.\d*/) && (n = !0),
                  e.match(/^\.\d+/) && (n = !0),
                  n)
                )
                  return e.eat(/J/i), 'number';
                var i = !1;
                if (
                  (e.match(/^0x[0-9a-f_]+/i) && (i = !0),
                  e.match(/^0b[01_]+/i) && (i = !0),
                  e.match(/^0o[0-7_]+/i) && (i = !0),
                  e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) &&
                    (e.eat(/J/i), (i = !0)),
                  e.match(/^0(?![\dx])/i) && (i = !0),
                  i)
                )
                  return e.eat(/L/i), 'number';
              }
              if (e.match(v))
                return -1 !==
                  e
                    .current()
                    .toLowerCase()
                    .indexOf('f')
                  ? ((t.tokenize = (function(e, t) {
                      for (; 'rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0; )
                        e = e.substr(1);
                      var n = 1 == e.length,
                        r = 'string';
                      function i(e) {
                        return function(t, n) {
                          var r = w(t, n);
                          return (
                            'punctuation' == r &&
                              ('{' == t.current()
                                ? (n.tokenize = i(e + 1))
                                : '}' == t.current() &&
                                  (n.tokenize = e > 1 ? i(e - 1) : o)),
                            r
                          );
                        };
                      }
                      function o(o, a) {
                        for (; !o.eol(); )
                          if ((o.eatWhile(/[^'"\{\}\\]/), o.eat('\\'))) {
                            if ((o.next(), n && o.eol())) return r;
                          } else {
                            if (o.match(e)) return (a.tokenize = t), r;
                            if (o.match('{{')) return r;
                            if (o.match('{', !1))
                              return (
                                (a.tokenize = i(0)),
                                o.current() ? r : a.tokenize(o, a)
                              );
                            if (o.match('}}')) return r;
                            if (o.match('}')) return s;
                            o.eat(/['"]/);
                          }
                        if (n) {
                          if (l.singleLineStringErrors) return s;
                          a.tokenize = t;
                        }
                        return r;
                      }
                      return (o.isString = !0), o;
                    })(e.current(), t.tokenize)),
                    t.tokenize(e, t))
                  : ((t.tokenize = (function(e, t) {
                      for (; 'rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0; )
                        e = e.substr(1);
                      var n = 1 == e.length,
                        r = 'string';
                      function i(i, o) {
                        for (; !i.eol(); )
                          if ((i.eatWhile(/[^'"\\]/), i.eat('\\'))) {
                            if ((i.next(), n && i.eol())) return r;
                          } else {
                            if (i.match(e)) return (o.tokenize = t), r;
                            i.eat(/['"]/);
                          }
                        if (n) {
                          if (l.singleLineStringErrors) return s;
                          o.tokenize = t;
                        }
                        return r;
                      }
                      return (i.isString = !0), i;
                    })(e.current(), t.tokenize)),
                    t.tokenize(e, t));
              for (var o = 0; o < u.length; o++)
                if (e.match(u[o])) return 'operator';
              return e.match(c)
                ? 'punctuation'
                : '.' == t.lastToken && e.match(g)
                ? 'property'
                : e.match(y) || e.match(r)
                ? 'keyword'
                : e.match(b)
                ? 'builtin'
                : e.match(/^(self|cls)\b/)
                ? 'variable-2'
                : e.match(g)
                ? 'def' == t.lastToken || 'class' == t.lastToken
                  ? 'def'
                  : 'variable'
                : (e.next(), s);
            }
            function k(e) {
              for (; 'py' != a(e).type; ) e.scopes.pop();
              e.scopes.push({
                offset: a(e).offset + n.indentUnit,
                type: 'py',
                align: null,
              });
            }
            function _(e, t) {
              for (
                var n = e.indentation();
                t.scopes.length > 1 && a(t).offset > n;

              ) {
                if ('py' != a(t).type) return !0;
                t.scopes.pop();
              }
              return a(t).offset != n;
            }
            function C(e, t) {
              e.sol() && (t.beginningOfLine = !0);
              var n = t.tokenize(e, t),
                r = e.current();
              if (t.beginningOfLine && '@' == r)
                return e.match(g, !1) ? 'meta' : m ? 'operator' : s;
              if (
                (/\S/.test(r) && (t.beginningOfLine = !1),
                ('variable' != n && 'builtin' != n) ||
                  'meta' != t.lastToken ||
                  (n = 'meta'),
                ('pass' != r && 'return' != r) || (t.dedent += 1),
                'lambda' == r && (t.lambda = !0),
                ':' != r || t.lambda || 'py' != a(t).type || k(t),
                1 == r.length && !/string|comment/.test(n))
              ) {
                var i = '[({'.indexOf(r);
                if (
                  (-1 != i &&
                    (function(e, t, n) {
                      var r = e.match(/^([\s\[\{\(]|#.*)*$/, !1)
                        ? null
                        : e.column() + 1;
                      t.scopes.push({
                        offset: t.indent + f,
                        type: n,
                        align: r,
                      });
                    })(e, t, '])}'.slice(i, i + 1)),
                  -1 != (i = '])}'.indexOf(r)))
                ) {
                  if (a(t).type != r) return s;
                  t.indent = t.scopes.pop().offset - f;
                }
              }
              return (
                t.dedent > 0 &&
                  e.eol() &&
                  'py' == a(t).type &&
                  (t.scopes.length > 1 && t.scopes.pop(), (t.dedent -= 1)),
                n
              );
            }
            return {
              startState: function(e) {
                return {
                  tokenize: x,
                  scopes: [{ offset: e || 0, type: 'py', align: null }],
                  indent: e || 0,
                  lastToken: null,
                  lambda: !1,
                  dedent: 0,
                };
              },
              token: function(e, t) {
                var n = t.errorToken;
                n && (t.errorToken = !1);
                var r = C(e, t);
                return (
                  r &&
                    'comment' != r &&
                    (t.lastToken =
                      'keyword' == r || 'punctuation' == r ? e.current() : r),
                  'punctuation' == r && (r = null),
                  e.eol() && t.lambda && (t.lambda = !1),
                  n ? r + ' ' + s : r
                );
              },
              indent: function(t, n) {
                if (t.tokenize != x) return t.tokenize.isString ? e.Pass : 0;
                var r = a(t),
                  i = r.type == n.charAt(0);
                return null != r.align
                  ? r.align - (i ? 1 : 0)
                  : r.offset - (i ? f : 0);
              },
              electricInput: /^\s*[\}\]\)]$/,
              closeBrackets: { triples: '\'"' },
              lineComment: '#',
              fold: 'indent',
            };
          }),
          e.defineMIME('text/x-python', 'python'),
          e.defineMIME('text/x-cython', {
            name: 'python',
            extra_keywords:
              ((n =
                'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'),
              n.split(' ')),
          });
      })(n(777));
    },
    2284: function(e, t, n) {},
    2285: function(e, t, n) {},
    2286: function(e, t, n) {},
    2287: function(e, t, n) {},
    2288: function(e, t, n) {},
    2289: function(e, t, n) {},
    2290: function(e, t, n) {},
    2291: function(e, t, n) {},
    2292: function(e, t, n) {},
    2293: function(e, t, n) {},
    2680: function(e, t, n) {
      'use strict';
      n.r(t);
      n(551);
      var r = n(553),
        i = (n(552), n(554)),
        o = n(5),
        a = n(107),
        l = n(0),
        s = n.n(l),
        c = n(834),
        u = n(642),
        d = n(723),
        f = n(548),
        p = n(547),
        h = n(546),
        m = n(550),
        g = n(558),
        v = [
          {
            id: 'lineNumbers',
            title: 'Line Numbers',
            trueValue: !0,
            falseValue: !1,
            value: !0,
          },
          {
            id: 'readOnly',
            title: 'Read Only',
            trueValue: !1,
            falseValue: !0,
            value: !0,
          },
        ],
        y = [
          {
            id: 'tabSize',
            title: 'Tab Size',
            options: ['2', '4', '6', '8'],
            value: 2,
          },
          {
            id: 'mode',
            title: 'Language',
            options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
            value: 'javascript',
          },
          {
            id: 'theme',
            title: 'Select themes',
            options: [
              'default',
              'zenburn',
              'solarized',
              'rubyblue',
              'paraiso-dark',
              'midnight',
              'material',
              'hopscotch',
              'twilight',
            ],
            value: 'zenburn',
          },
        ],
        b = {
          basic:
            "const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",
          javascript:
            "const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",
          markdown:
            '# Isomorphic\n###This is a RedQ Team production\n[have a look](https://isomorphic.redq.io/)\n  ',
          xml:
            '<isomprphic>\n    <to>Tove</to>\n    <name>Isomorphic</name>\n    <author>RedQ Team</author>\n    <website>isomorphic.redq.io</website>\n</isomprphic>',
          php:
            '<html>\n <head>\n  <title> v</title>\n </head>\n <body>\n <h1>https://isomorphic.redq.io/</h1>\n <p>This is a RedQ Team production</p>\n <a href="https://isomorphic.redq.io/">visit ou site</a>\n </body>\n</html>\n',
          python:
            '\nprint("Isomorphic")\nprint("This is a RedQ Team production")\nprint("visit us https://isomorphic.redq.io ")\n',
          ruby:
            'rint "Isomorphic"\nprint "This is a RedQ Team production"\nprint "visit us https://isomorphic.redq.io "\n',
        },
        x = n(28),
        w = n(2276),
        k = n.n(w),
        _ =
          (n(1757),
          n(1566),
          n(2277),
          n(2279),
          n(2283),
          n(2284),
          n(2285),
          n(2286),
          n(2287),
          n(2288),
          n(2289),
          n(2290),
          n(2291),
          n(2292),
          n(2293),
          k.a),
        C = n(22);
      function S() {
        var e = Object(x.a)([
          '\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n\n  .ant-form-item {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n',
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = Object(x.a)([
          "\n  .CodeMirror {\n    font-family: monospace;\n    height: 300px;\n    position: relative;\n    overflow: hidden;\n    pre {\n      padding: 0 4px;\n      -moz-border-radius: 0;\n      -webkit-border-radius: 0;\n      border-radius: 0;\n      border-width: 0;\n      background: transparent;\n      font-family: inherit;\n      font-size: inherit;\n      margin: 0;\n      white-space: pre;\n      word-wrap: normal;\n      line-height: inherit;\n      color: inherit;\n      z-index: 2;\n      position: relative;\n      overflow: visible;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-font-variant-ligatures: contextual;\n      font-variant-ligatures: contextual;\n    }\n    div.CodeMirror-secondarycursor {\n      border-left: 1px solid silver;\n    }\n  }\n  .CodeMirror-lines {\n    padding: 4px 0;\n    cursor: text;\n    min-height: 1px;\n  }\n  .CodeMirror-scrollbar-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutter-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    left: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutters {\n    border-right: 1px solid #dddddd;\n    background-color: #f7f7f7;\n    white-space: nowrap;\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-height: 100%;\n    z-index: 3;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-linenumbers {\n  }\n  .CodeMirror-linenumber {\n    padding: 0 3px 0 5px;\n    min-width: 20px;\n    text-align: right;\n    color: #999999;\n    white-space: nowrap;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-guttermarker {\n    color: black;\n  }\n  .CodeMirror-guttermarker-subtle {\n    color: #999999;\n  }\n  .CodeMirror-cursor {\n    border-left: 1px solid black;\n    border-right: none;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n  .cm-fat-cursor .CodeMirror-cursor {\n    width: auto;\n    border: 0 !important;\n    background: #77ee77;\n  }\n  .cm-fat-cursor div.CodeMirror-cursors {\n    z-index: 1;\n  }\n  .cm-animate-fat-cursor {\n    width: auto;\n    border: 0;\n    -webkit-animation: blink 1.06s steps(1) infinite;\n    -moz-animation: blink 1.06s steps(1) infinite;\n    animation: blink 1.06s steps(1) infinite;\n    background-color: #77ee77;\n  }\n  .CodeMirror-overwrite .CodeMirror-cursor {\n  }\n  .cm-tab {\n    display: inline-block;\n    text-decoration: inherit;\n  }\n  .CodeMirror-rulers {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -50px;\n    bottom: -20px;\n    overflow: hidden;\n  }\n  .CodeMirror-ruler {\n    border-left: 1px solid #cccccc;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n  }\n  .cm-s-default {\n    .cm-variable,\n    .cm-punctuation,\n    .cm-property,\n    .cm-operator {\n    }\n    .cm-variable-3,\n    .cm-type {\n      color: #008855;\n    }\n    .cm-header {\n      color: blue;\n    }\n    .cm-quote {\n      color: #009900;\n    }\n    .cm-keyword {\n      color: #770088;\n    }\n    .cm-atom {\n      color: #221199;\n    }\n    .cm-number {\n      color: #116644;\n    }\n    .cm-def {\n      color: #0000ff;\n    }\n    .cm-variable-2 {\n      color: #0055aa;\n    }\n    .cm-comment {\n      color: #aa5500;\n    }\n    .cm-string {\n      color: #aa1111;\n    }\n    .cm-string-2 {\n      color: #ff5500;\n    }\n    .cm-meta {\n      color: #555555;\n    }\n    .cm-qualifier {\n      color: #555555;\n    }\n    .cm-builtin {\n      color: #3300aa;\n    }\n    .cm-bracket {\n      color: #999977;\n    }\n    .cm-tag {\n      color: #117700;\n    }\n    .cm-attribute {\n      color: #0000cc;\n    }\n    .cm-hr {\n      color: #999999;\n    }\n    .cm-link {\n      color: #0000cc;\n    }\n    .cm-error {\n      color: #ff0000;\n    }\n  }\n  .cm-negative {\n    color: #dd4444;\n  }\n  .cm-positive {\n    color: #229922;\n  }\n  .cm-header,\n  .cm-strong {\n    font-weight: bold;\n  }\n  .cm-em {\n    font-style: italic;\n  }\n  .cm-link {\n    text-decoration: underline;\n  }\n  .cm-strikethrough {\n    text-decoration: line-through;\n  }\n  .cm-invalidchar {\n    color: #ff0000;\n  }\n  .CodeMirror-composing {\n    border-bottom: 2px solid;\n  }\n  div.CodeMirror span.CodeMirror-matchingbracket {\n    color: #00ff00;\n  }\n  div.CodeMirror span.CodeMirror-nonmatchingbracket {\n    color: #ff2222;\n  }\n  .CodeMirror-matchingtag {\n    background: rgba(255, 150, 0, 0.3);\n  }\n  .CodeMirror-activeline-background {\n    background: #e8f2ff;\n  }\n  .CodeMirror-scroll {\n    overflow: scroll !important;\n    margin-bottom: -30px;\n    margin-right: -30px;\n    padding-bottom: 30px;\n    height: 100%;\n    outline: none;\n    position: relative;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-sizer {\n    position: relative;\n    border-right: 30px solid transparent;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-vscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .CodeMirror-hscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n    overflow-x: scroll;\n  }\n  .CodeMirror-gutter {\n    white-space: normal;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    margin-bottom: -30px;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-gutter-wrapper {\n    position: absolute;\n    z-index: 4;\n    background: none !important;\n    border: none !important;\n    ::selection {\n      background-color: transparent;\n    }\n    ::-moz-selection {\n      background-color: transparent;\n    }\n  }\n  .CodeMirror-gutter-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 4;\n  }\n  .CodeMirror-gutter-elt {\n    position: absolute;\n    cursor: default;\n    z-index: 4;\n  }\n  .CodeMirror-wrap pre {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: normal;\n  }\n  .CodeMirror-linebackground {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 0;\n  }\n  .CodeMirror-linewidget {\n    position: relative;\n    z-index: 2;\n    overflow: auto;\n  }\n  .CodeMirror-widget {\n  }\n  .CodeMirror-rtl pre {\n    direction: rtl;\n  }\n  .CodeMirror-code {\n    outline: none;\n  }\n  .CodeMirror-measure {\n    position: absolute;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    pre {\n      position: static;\n    }\n  }\n  div.CodeMirror-cursors {\n    visibility: hidden;\n    position: relative;\n    z-index: 3;\n  }\n  div.CodeMirror-dragcursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused div.CodeMirror-cursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused .CodeMirror-selected {\n    background: #d7d4f0;\n  }\n  .CodeMirror-selected {\n    background: #d9d9d9;\n  }\n  .CodeMirror-crosshair {\n    cursor: crosshair;\n  }\n  .CodeMirror-line::selection,\n  .CodeMirror-line > span::selection,\n  .CodeMirror-line > span > span::selection {\n    background: #d7d4f0;\n  }\n  .CodeMirror-line::-moz-selection,\n  .CodeMirror-line > span::-moz-selection,\n  .CodeMirror-line > span > span::-moz-selection {\n    background: #d7d4f0;\n  }\n  .cm-searching {\n    background: #ffffaa;\n    background: rgba(255, 255, 0, 0.4);\n  }\n  .cm-force-border {\n    padding-right: 0.1px;\n  }\n  .cm-tab-wrap-hack:after {\n    content: '';\n  }\n  span.CodeMirror-selectedtext {\n    background: none;\n  }\n",
        ]);
        return (
          (M = function() {
            return e;
          }),
          e
        );
      }
      var T = Object(C.c)(function(e) {
          return s.a.createElement(_, e);
        })(M()),
        L = C.c.div(S()),
        O = T;
      function D(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(n, !0).forEach(function(t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var A = d.a.Item,
        N = u.a;
      t.default = function() {
        var e = s.a.useState(
            E({}, b, {
              basicOptions: {
                lineNumbers: !0,
                readOnly: !1,
                tabSize: 4,
                mode: 'javascript',
                theme: 'zenburn',
              },
            })
          ),
          t = Object(a.a)(e, 2),
          n = t[0],
          l = t[1];
        function d(e, t) {
          l(E({}, n, Object(o.a)({}, e, t)));
        }
        var x = g.b.rowStyle,
          w = g.b.colStyle,
          k = g.b.gutter;
        return s.a.createElement(
          h.default,
          null,
          s.a.createElement(f.default, null, 'Code Mirror'),
          s.a.createElement(
            r.a,
            { style: x, gutter: k, justify: 'start' },
            s.a.createElement(
              i.a,
              { md: 24, sm: 24, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'Basic Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(
                    L,
                    { className: 'isoOptionWrapper' },
                    (function() {
                      var e = n.basicOptions;
                      return v.map(function(t, r) {
                        var i = t.id;
                        return s.a.createElement(
                          A,
                          { label: t.title, key: t.id },
                          s.a.createElement(c.a, {
                            checked: t.value === e[i],
                            onChange: function() {
                              (e[i] = !e[i]), l(E({}, n, { basicOptions: e }));
                            },
                          })
                        );
                      });
                    })(),
                    (function() {
                      var e = n.basicOptions;
                      return y.map(function(t, r) {
                        var i = t.id;
                        return s.a.createElement(
                          A,
                          { label: t.title, key: t.id },
                          s.a.createElement(
                            u.b,
                            {
                              defaultValue: ''.concat(e[i]),
                              onChange: function(t) {
                                (e[i] = isNaN(t) ? t : parseInt(t, 10)),
                                  l(E({}, n, { basicOptions: e }));
                              },
                            },
                            t.options.map(function(e) {
                              return s.a.createElement(
                                N,
                                { value: e, key: e },
                                e
                              );
                            })
                          )
                        );
                      });
                    })()
                  ),
                  s.a.createElement(O, {
                    value: n.basic,
                    onChange: function(e) {
                      return d('basic', e);
                    },
                    options: n.basicOptions,
                  })
                )
              )
            )
          ),
          s.a.createElement(
            r.a,
            { style: x, gutter: k, justify: 'start' },
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'Ruby Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.ruby,
                    onChange: function(e) {
                      return d('ruby', e);
                    },
                    options: { lineNumbers: !0, theme: 'hopscotch' },
                  })
                )
              )
            ),
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'Javascript Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.javascript,
                    onChange: function(e) {
                      return d('javascript', e);
                    },
                    options: { lineNumbers: !0, theme: 'twilight' },
                  })
                )
              )
            )
          ),
          s.a.createElement(
            r.a,
            { style: x, gutter: k, justify: 'start' },
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'Markdown Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.markdown,
                    onChange: function(e) {
                      return d('markdown', e);
                    },
                    options: { lineNumbers: !0, theme: 'rubyblue' },
                  })
                )
              )
            ),
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'XML Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.xml,
                    onChange: function(e) {
                      return d('xml', e);
                    },
                    options: { lineNumbers: !0, theme: 'paraiso-dark' },
                  })
                )
              )
            )
          ),
          s.a.createElement(
            r.a,
            { style: x, gutter: k, justify: 'start' },
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'PHP Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.php,
                    onChange: function(e) {
                      return d('php', e);
                    },
                    options: { lineNumbers: !0, theme: 'midnight' },
                  })
                )
              )
            ),
            s.a.createElement(
              i.a,
              { md: 12, sm: 12, xs: 24, style: w },
              s.a.createElement(
                p.default,
                { title: 'Python Example' },
                s.a.createElement(
                  m.default,
                  null,
                  s.a.createElement(O, {
                    value: n.python,
                    onChange: function(e) {
                      return d('python', e);
                    },
                    options: { lineNumbers: !0, theme: 'material' },
                  })
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
      var r = n(0),
        i = n.n(r),
        o = n(28);
      function a() {
        var e = Object(o.a)([
          '\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var l = n(22).c.div(a());
      t.default = function(e) {
        return i.a.createElement(
          l,
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
      var r = n(0),
        i = n.n(r),
        o = n(28),
        a = n(22),
        l = n(6);
      function s() {
        var e = Object(o.a)([
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
      function c() {
        var e = Object(o.a)([
          '\n  font-size: 14px;\n  font-weight: 500;\n  color: ',
          ';\n  margin: 0;\n  margin-bottom: 5px;\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var u = a.c.h3(c(), Object(l.palette)('text', 0)),
        d = a.c.p(s(), Object(l.palette)('text', 3)),
        f = function(e) {
          return i.a.createElement(
            'div',
            null,
            e.title
              ? i.a.createElement(
                  u,
                  { className: 'isoBoxTitle' },
                  ' ',
                  e.title,
                  ' '
                )
              : '',
            e.subtitle
              ? i.a.createElement(
                  d,
                  { className: 'isoBoxSubTitle' },
                  ' ',
                  e.subtitle,
                  ' '
                )
              : ''
          );
        };
      function p() {
        var e = Object(o.a)([
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
      var h = a.c.div(p(), Object(l.palette)('border', 0), '');
      t.default = function(e) {
        return i.a.createElement(
          h,
          {
            className: ''.concat(
              e.className ? e.className : '',
              ' isoBoxWrapper'
            ),
            style: e.style,
          },
          i.a.createElement(f, { title: e.title, subtitle: e.subtitle }),
          e.children
        );
      };
    },
    548: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        i = n.n(r),
        o = n(28),
        a = n(22),
        l = n(6),
        s = n(59);
      function c() {
        var e = Object(o.a)([
          '\n  font-size: 19px;\n  font-weight: 500;\n  color: ',
          ";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",
          ';\n    display: flex;\n    margin: ',
          ';\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var u = a.c.h1(
          c(),
          Object(l.palette)('secondary', 2),
          Object(l.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(l.palette)('secondary', 3),
          function(e) {
            return 'rtl' === e['data-rtl'] ? '0 15px 0 0' : '0 0 0 15px';
          }
        ),
        d = Object(s.a)(u);
      t.default = function(e) {
        return i.a.createElement(
          d,
          { className: 'isoComponentTitle' },
          e.children
        );
      };
    },
    550: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        i = n.n(r),
        o = n(28),
        a = n(22),
        l = n(6),
        s = n(59);
      function c() {
        var e = Object(o.a)([
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
          (c = function() {
            return e;
          }),
          e
        );
      }
      var u = a.c.div(
          c(),
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
          Object(l.palette)('secondary', 1),
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
        d = Object(s.a)(u);
      t.default = function(e) {
        return i.a.createElement(
          d,
          { className: 'isoExampleWrapper', style: e.style },
          e.children
        );
      };
    },
    551: function(e, t, n) {
      'use strict';
      n(87), n(555);
    },
    552: function(e, t, n) {
      'use strict';
      n(87), n(555);
    },
    553: function(e, t, n) {
      'use strict';
      var r = n(1159);
      t.a = r.a;
    },
    554: function(e, t, n) {
      'use strict';
      var r = n(987);
      t.a = r.a;
    },
    558: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      }),
        n.d(t, 'c', function() {
          return i;
        });
      var r = {
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
        i = 8,
        o = {
          rowStyle: { width: '100%', display: 'flex', flexFlow: 'row wrap' },
          colStyle: { marginBottom: '16px' },
          gutter: 16,
        };
      t.b = o;
    },
    591: function(e, t, n) {
      var r = n(138),
        i = n(198),
        o = n(73),
        a = n(307),
        l = n(207),
        s = n(195);
      e.exports = function(e, t, n) {
        for (var c = -1, u = (t = r(t, e)).length, d = !1; ++c < u; ) {
          var f = s(t[c]);
          if (!(d = null != e && n(e, f))) break;
          e = e[f];
        }
        return d || ++c != u
          ? d
          : !!(u = null == e ? 0 : e.length) &&
              l(u) &&
              a(f, u) &&
              (o(e) || i(e));
      };
    },
    642: function(e, t, n) {
      'use strict';
      n(609);
      var r = n(590),
        i = n(28),
        o = n(22),
        a = n(6),
        l = n(35);
      function s() {
        var e = Object(i.a)([
          '\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ',
          ';\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ',
          ';\n      ',
          ';\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ',
          ';\n          padding: ',
          ';\n        }\n      }\n\n      .ant-select-arrow {\n        right: ',
          ';\n        left: ',
          ';\n      }\n\n      &:hover {\n        border-color: ',
          ';\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ',
          ';\n          outline: 0;\n          box-shadow: 0 0 0 2px ',
          ';\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ',
          ';\n        outline: 0;\n        box-shadow: 0 0 0 2px ',
          ';\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ',
          ';\n      color: ',
          ';\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var c = n(59);
      n.d(t, 'a', function() {
        return p;
      });
      var u,
        d =
          ((u = r.a),
          Object(o.c)(u)(
            s(),
            Object(a.palette)('text', 1),
            Object(a.palette)('border', 0),
            Object(l.c)(),
            function(e) {
              return 'rtl' === e['data-rtl'] ? 'right' : 'left';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? '0 0 0 14px' : '0 14px 0 0';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? 'inherit' : '7px';
            },
            function(e) {
              return 'rtl' === e['data-rtl'] ? '7px' : 'inherit';
            },
            Object(a.palette)('primary', 0),
            Object(a.palette)('primary', 0),
            Object(a.palette)('primary', 3),
            Object(a.palette)('primary', 0),
            Object(a.palette)('primary', 3),
            Object(a.palette)('grayscale', 4),
            Object(a.palette)('text', 1),
            Object(a.palette)('text', 1)
          )),
        f = Object(c.a)(d),
        p = r.a.Option;
      t.b = f;
    },
    682: function(e, t, n) {
      'use strict';
      n(87), n(683);
    },
    683: function(e, t, n) {},
    684: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return w;
      });
      var r = n(0),
        i = n(1),
        o = n(685),
        a = n.n(o),
        l = n(12),
        s = n.n(l),
        c = n(52),
        u = n(210),
        d = n(20),
        f = n(86),
        p = n(26);
      function h(e) {
        return (h =
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
      function g(e, t, n) {
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
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return !t || ('object' !== h(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var w = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = y(this, b(t).call(this, e))).saveSwitch = function(e) {
              n.rcSwitch = e;
            }),
            (n.renderSwitch = function(e) {
              var t,
                i = e.getPrefixCls,
                o = n.props,
                l = o.prefixCls,
                f = o.size,
                p = o.loading,
                h = o.className,
                v = void 0 === h ? '' : h,
                y = o.disabled,
                b = i('switch', l),
                x = s()(
                  v,
                  (g((t = {}), ''.concat(b, '-small'), 'small' === f),
                  g(t, ''.concat(b, '-loading'), p),
                  t)
                ),
                w = p
                  ? r.createElement(d.a, {
                      type: 'loading',
                      className: ''.concat(b, '-loading-icon'),
                    })
                  : null;
              return r.createElement(
                u.a,
                { insertExtraNode: !0 },
                r.createElement(
                  a.a,
                  m({}, Object(c.a)(n.props, ['loading']), {
                    prefixCls: b,
                    className: x,
                    disabled: y || p,
                    ref: n.saveSwitch,
                    loadingIcon: w,
                  })
                )
              );
            }),
            Object(p.a)(
              'checked' in e || !('value' in e),
              'Switch',
              '`value` is not validate prop, do you mean `checked`?'
            ),
            n
          );
        }
        var n, i, o;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && x(e, t);
          })(t, e),
          (n = t),
          (i = [
            {
              key: 'focus',
              value: function() {
                this.rcSwitch.focus();
              },
            },
            {
              key: 'blur',
              value: function() {
                this.rcSwitch.blur();
              },
            },
            {
              key: 'render',
              value: function() {
                return r.createElement(f.a, null, this.renderSwitch);
              },
            },
          ]) && v(n.prototype, i),
          o && v(n, o),
          t
        );
      })(r.Component);
      (w.__ANT_SWITCH = !0),
        (w.propTypes = {
          prefixCls: i.string,
          size: i.oneOf(['small', 'default', 'large']),
          className: i.string,
        });
    },
    685: function(e, t, n) {
      e.exports = n(686);
    },
    686: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        i = n.n(r),
        o = n(1),
        a = n.n(o),
        l = n(37);
      function s() {
        return (s =
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
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
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
      var m = n(12),
        g = (function(e) {
          function t(e) {
            var n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (n = (function(e, t) {
                return !t || ('object' !== typeof t && 'function' !== typeof t)
                  ? p(e)
                  : t;
              })(this, d(t).call(this, e))),
              h(p(p(n)), 'handleClick', function(e) {
                var t = n.state.checked,
                  r = n.props.onClick,
                  i = !t;
                n.setChecked(i, e), r && r(i, e);
              }),
              h(p(p(n)), 'handleKeyDown', function(e) {
                37 === e.keyCode
                  ? n.setChecked(!1, e)
                  : 39 === e.keyCode && n.setChecked(!0, e);
              }),
              h(p(p(n)), 'handleMouseUp', function(e) {
                var t = n.props.onMouseUp;
                n.node && n.node.blur(), t && t(e);
              }),
              h(p(p(n)), 'saveNode', function(e) {
                n.node = e;
              });
            var r = !1;
            return (
              (r = 'checked' in e ? !!e.checked : !!e.defaultChecked),
              (n.state = { checked: r }),
              n
            );
          }
          var n, r, o;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && f(e, t);
            })(t, e),
            (n = t),
            (o = [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  var t = {},
                    n = e.checked;
                  return 'checked' in e && (t.checked = !!n), t;
                },
              },
            ]),
            (r = [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.disabled;
                  t && !n && this.focus();
                },
              },
              {
                key: 'setChecked',
                value: function(e, t) {
                  var n = this.props,
                    r = n.disabled,
                    i = n.onChange;
                  r ||
                    ('checked' in this.props || this.setState({ checked: e }),
                    i && i(e, t));
                },
              },
              {
                key: 'focus',
                value: function() {
                  this.node.focus();
                },
              },
              {
                key: 'blur',
                value: function() {
                  this.node.blur();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    n = t.className,
                    r = t.prefixCls,
                    o = t.disabled,
                    a = t.loadingIcon,
                    l = t.checkedChildren,
                    u = t.unCheckedChildren,
                    d = c(t, [
                      'className',
                      'prefixCls',
                      'disabled',
                      'loadingIcon',
                      'checkedChildren',
                      'unCheckedChildren',
                    ]),
                    f = this.state.checked,
                    p = m(
                      (h((e = {}), n, !!n),
                      h(e, r, !0),
                      h(e, ''.concat(r, '-checked'), f),
                      h(e, ''.concat(r, '-disabled'), o),
                      e)
                    );
                  return i.a.createElement(
                    'button',
                    s({}, d, {
                      type: 'button',
                      role: 'switch',
                      'aria-checked': f,
                      disabled: o,
                      className: p,
                      ref: this.saveNode,
                      onKeyDown: this.handleKeyDown,
                      onClick: this.handleClick,
                      onMouseUp: this.handleMouseUp,
                    }),
                    a,
                    i.a.createElement(
                      'span',
                      { className: ''.concat(r, '-inner') },
                      f ? l : u
                    )
                  );
                },
              },
            ]) && u(n.prototype, r),
            o && u(n, o),
            t
          );
        })(r.Component);
      (g.propTypes = {
        className: a.a.string,
        prefixCls: a.a.string,
        disabled: a.a.bool,
        checkedChildren: a.a.any,
        unCheckedChildren: a.a.any,
        onChange: a.a.func,
        onMouseUp: a.a.func,
        onClick: a.a.func,
        tabIndex: a.a.number,
        checked: a.a.bool,
        defaultChecked: a.a.bool,
        autoFocus: a.a.bool,
        loadingIcon: a.a.node,
      }),
        (g.defaultProps = {
          prefixCls: 'rc-switch',
          checkedChildren: null,
          unCheckedChildren: null,
          className: '',
          defaultChecked: !1,
        }),
        Object(l.polyfill)(g),
        (t.default = g);
    },
    715: function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = NaN,
          i = '[object Symbol]',
          o = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          u = 'object' == typeof t && t && t.Object === Object && t,
          d = 'object' == typeof self && self && self.Object === Object && self,
          f = u || d || Function('return this')(),
          p = Object.prototype.toString,
          h = Math.max,
          m = Math.min,
          g = function() {
            return f.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function y(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == typeof e ||
                ((function(e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  p.call(e) == i)
              );
            })(e)
          )
            return r;
          if (v(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, '');
          var n = l.test(e);
          return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
        }
        e.exports = function(e, t, r) {
          var i,
            o,
            a,
            l,
            s,
            c,
            u = 0,
            d = !1,
            f = !1,
            p = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function b(t) {
            var n = i,
              r = o;
            return (i = o = void 0), (u = t), (l = e.apply(r, n));
          }
          function x(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (f && e - u >= a);
          }
          function w() {
            var e = g();
            if (x(e)) return k(e);
            s = setTimeout(
              w,
              (function(e) {
                var n = t - (e - c);
                return f ? m(n, a - (e - u)) : n;
              })(e)
            );
          }
          function k(e) {
            return (s = void 0), p && i ? b(e) : ((i = o = void 0), l);
          }
          function _() {
            var e = g(),
              n = x(e);
            if (((i = arguments), (o = this), (c = e), n)) {
              if (void 0 === s)
                return (function(e) {
                  return (u = e), (s = setTimeout(w, t)), d ? b(e) : l;
                })(c);
              if (f) return (s = setTimeout(w, t)), b(c);
            }
            return void 0 === s && (s = setTimeout(w, t)), l;
          }
          return (
            (t = y(t) || 0),
            v(r) &&
              ((d = !!r.leading),
              (a = (f = 'maxWait' in r) ? h(y(r.maxWait) || 0, t) : a),
              (p = 'trailing' in r ? !!r.trailing : p)),
            (_.cancel = function() {
              void 0 !== s && clearTimeout(s),
                (u = 0),
                (i = c = o = s = void 0);
            }),
            (_.flush = function() {
              return void 0 === s ? l : k(g());
            }),
            _
          );
        };
      }.call(this, n(53)));
    },
    723: function(e, t, n) {
      'use strict';
      n(724);
      var r = n(729);
      t.a = r.a;
    },
    777: function(e, t, n) {
      e.exports = (function() {
        'use strict';
        var e = navigator.userAgent,
          t = navigator.platform,
          n = /gecko\/\d/i.test(e),
          r = /MSIE \d/.test(e),
          i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
          o = /Edge\/(\d+)/.exec(e),
          a = r || i || o,
          l = a && (r ? document.documentMode || 6 : +(o || i)[1]),
          s = !o && /WebKit\//.test(e),
          c = s && /Qt\/\d+\.\d+/.test(e),
          u = !o && /Chrome\//.test(e),
          d = /Opera\//.test(e),
          f = /Apple Computer/.test(navigator.vendor),
          p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
          h = /PhantomJS/.test(e),
          m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
          g = /Android/.test(e),
          v =
            m ||
            g ||
            /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
          y = m || /Mac/.test(t),
          b = /\bCrOS\b/.test(e),
          x = /win/i.test(t),
          w = d && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && ((d = !1), (s = !0));
        var k = y && (c || (d && (null == w || w < 12.11))),
          _ = n || (a && l >= 9);
        function C(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var S,
          M = function(e, t) {
            var n = e.className,
              r = C(t).exec(n);
            if (r) {
              var i = n.slice(r.index + r[0].length);
              e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
            }
          };
        function T(e) {
          for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
          return e;
        }
        function L(e, t) {
          return T(e).appendChild(t);
        }
        function O(e, t, n, r) {
          var i = document.createElement(e);
          if (
            (n && (i.className = n),
            r && (i.style.cssText = r),
            'string' == typeof t)
          )
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function D(e, t, n, r) {
          var i = O(e, t, n, r);
          return i.setAttribute('role', 'presentation'), i;
        }
        function E(e, t) {
          if ((3 == t.nodeType && (t = t.parentNode), e.contains))
            return e.contains(t);
          do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
          } while ((t = t.parentNode));
        }
        function A() {
          var e;
          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
            e = e.shadowRoot.activeElement;
          return e;
        }
        function N(e, t) {
          var n = e.className;
          C(t).test(n) || (e.className += (n ? ' ' : '') + t);
        }
        function F(e, t) {
          for (var n = e.split(' '), r = 0; r < n.length; r++)
            n[r] && !C(n[r]).test(t) && (t += ' ' + n[r]);
          return t;
        }
        S = document.createRange
          ? function(e, t, n, r) {
              var i = document.createRange();
              return i.setEnd(r || e, n), i.setStart(e, t), i;
            }
          : function(e, t, n) {
              var r = document.body.createTextRange();
              try {
                r.moveToElementText(e.parentNode);
              } catch (i) {
                return r;
              }
              return (
                r.collapse(!0),
                r.moveEnd('character', n),
                r.moveStart('character', t),
                r
              );
            };
        var z = function(e) {
          e.select();
        };
        function j(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() {
            return e.apply(null, t);
          };
        }
        function P(e, t, n) {
          for (var r in (t || (t = {}), e))
            !e.hasOwnProperty(r) ||
              (!1 === n && t.hasOwnProperty(r)) ||
              (t[r] = e[r]);
          return t;
        }
        function I(e, t, n, r, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
          for (var o = r || 0, a = i || 0; ; ) {
            var l = e.indexOf('\t', o);
            if (l < 0 || l >= t) return a + (t - o);
            (a += l - o), (a += n - (a % n)), (o = l + 1);
          }
        }
        m
          ? (z = function(e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
            })
          : a &&
            (z = function(e) {
              try {
                e.select();
              } catch (t) {}
            });
        var q = function() {
          this.id = null;
        };
        function W(e, t) {
          for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
          return -1;
        }
        q.prototype.set = function(e, t) {
          clearTimeout(this.id), (this.id = setTimeout(t, e));
        };
        var B = 30,
          R = {
            toString: function() {
              return 'CodeMirror.Pass';
            },
          },
          H = { scroll: !1 },
          U = { origin: '*mouse' },
          $ = { origin: '+move' };
        function V(e, t, n) {
          for (var r = 0, i = 0; ; ) {
            var o = e.indexOf('\t', r);
            -1 == o && (o = e.length);
            var a = o - r;
            if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
            if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
          }
        }
        var K = [''];
        function G(e) {
          for (; K.length <= e; ) K.push(X(K) + ' ');
          return K[e];
        }
        function X(e) {
          return e[e.length - 1];
        }
        function Y(e, t) {
          for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
          return n;
        }
        function Z() {}
        function Q(e, t) {
          var n;
          return (
            Object.create
              ? (n = Object.create(e))
              : ((Z.prototype = e), (n = new Z())),
            t && P(t, n),
            n
          );
        }
        var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function ee(e) {
          return (
            /\w/.test(e) ||
            (e > '\x80' && (e.toUpperCase() != e.toLowerCase() || J.test(e)))
          );
        }
        function te(e, t) {
          return t
            ? !!(t.source.indexOf('\\w') > -1 && ee(e)) || t.test(e)
            : ee(e);
        }
        function ne(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function ie(e) {
          return e.charCodeAt(0) >= 768 && re.test(e);
        }
        function oe(e, t, n) {
          for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t)); ) t += n;
          return t;
        }
        function ae(e, t, n) {
          for (var r = t > n ? -1 : 1; ; ) {
            if (t == n) return t;
            var i = (t + n) / 2,
              o = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : n;
            e(o) ? (n = o) : (t = o + r);
          }
        }
        var le = null;
        function se(e, t, n) {
          var r;
          le = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && 'before' == n ? (r = i) : (le = i)),
              o.from == t &&
                (o.from != o.to && 'before' != n ? (r = i) : (le = i));
          }
          return null != r ? r : le;
        }
        var ce = (function() {
          var e =
              'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
            t =
              'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111',
            n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            r = /[stwN]/,
            i = /[LRr]/,
            o = /[Lb1n]/,
            a = /[1n]/;
          function l(e, t, n) {
            (this.level = e), (this.from = t), (this.to = n);
          }
          return function(s, c) {
            var u = 'ltr' == c ? 'L' : 'R';
            if (0 == s.length || ('ltr' == c && !n.test(s))) return !1;
            for (var d, f = s.length, p = [], h = 0; h < f; ++h)
              p.push(
                (d = s.charCodeAt(h)) <= 247
                  ? e.charAt(d)
                  : 1424 <= d && d <= 1524
                  ? 'R'
                  : 1536 <= d && d <= 1785
                  ? t.charAt(d - 1536)
                  : 1774 <= d && d <= 2220
                  ? 'r'
                  : 8192 <= d && d <= 8203
                  ? 'w'
                  : 8204 == d
                  ? 'b'
                  : 'L'
              );
            for (var m = 0, g = u; m < f; ++m) {
              var v = p[m];
              'm' == v ? (p[m] = g) : (g = v);
            }
            for (var y = 0, b = u; y < f; ++y) {
              var x = p[y];
              '1' == x && 'r' == b
                ? (p[y] = 'n')
                : i.test(x) && ((b = x), 'r' == x && (p[y] = 'R'));
            }
            for (var w = 1, k = p[0]; w < f - 1; ++w) {
              var _ = p[w];
              '+' == _ && '1' == k && '1' == p[w + 1]
                ? (p[w] = '1')
                : ',' != _ ||
                  k != p[w + 1] ||
                  ('1' != k && 'n' != k) ||
                  (p[w] = k),
                (k = _);
            }
            for (var C = 0; C < f; ++C) {
              var S = p[C];
              if (',' == S) p[C] = 'N';
              else if ('%' == S) {
                var M = void 0;
                for (M = C + 1; M < f && '%' == p[M]; ++M);
                for (
                  var T =
                      (C && '!' == p[C - 1]) || (M < f && '1' == p[M])
                        ? '1'
                        : 'N',
                    L = C;
                  L < M;
                  ++L
                )
                  p[L] = T;
                C = M - 1;
              }
            }
            for (var O = 0, D = u; O < f; ++O) {
              var E = p[O];
              'L' == D && '1' == E ? (p[O] = 'L') : i.test(E) && (D = E);
            }
            for (var A = 0; A < f; ++A)
              if (r.test(p[A])) {
                var N = void 0;
                for (N = A + 1; N < f && r.test(p[N]); ++N);
                for (
                  var F = 'L' == (A ? p[A - 1] : u),
                    z = F == ('L' == (N < f ? p[N] : u)) ? (F ? 'L' : 'R') : u,
                    j = A;
                  j < N;
                  ++j
                )
                  p[j] = z;
                A = N - 1;
              }
            for (var P, I = [], q = 0; q < f; )
              if (o.test(p[q])) {
                var W = q;
                for (++q; q < f && o.test(p[q]); ++q);
                I.push(new l(0, W, q));
              } else {
                var B = q,
                  R = I.length;
                for (++q; q < f && 'L' != p[q]; ++q);
                for (var H = B; H < q; )
                  if (a.test(p[H])) {
                    B < H && I.splice(R, 0, new l(1, B, H));
                    var U = H;
                    for (++H; H < q && a.test(p[H]); ++H);
                    I.splice(R, 0, new l(2, U, H)), (B = H);
                  } else ++H;
                B < q && I.splice(R, 0, new l(1, B, q));
              }
            return (
              'ltr' == c &&
                (1 == I[0].level &&
                  (P = s.match(/^\s+/)) &&
                  ((I[0].from = P[0].length),
                  I.unshift(new l(0, 0, P[0].length))),
                1 == X(I).level &&
                  (P = s.match(/\s+$/)) &&
                  ((X(I).to -= P[0].length),
                  I.push(new l(0, f - P[0].length, f)))),
              'rtl' == c ? I.reverse() : I
            );
          };
        })();
        function ue(e, t) {
          var n = e.order;
          return null == n && (n = e.order = ce(e.text, t)), n;
        }
        var de = [],
          fe = function(e, t, n) {
            if (e.addEventListener) e.addEventListener(t, n, !1);
            else if (e.attachEvent) e.attachEvent('on' + t, n);
            else {
              var r = e._handlers || (e._handlers = {});
              r[t] = (r[t] || de).concat(n);
            }
          };
        function pe(e, t) {
          return (e._handlers && e._handlers[t]) || de;
        }
        function he(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);
          else if (e.detachEvent) e.detachEvent('on' + t, n);
          else {
            var r = e._handlers,
              i = r && r[t];
            if (i) {
              var o = W(i, n);
              o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function me(e, t) {
          var n = pe(e, t);
          if (n.length)
            for (
              var r = Array.prototype.slice.call(arguments, 2), i = 0;
              i < n.length;
              ++i
            )
              n[i].apply(null, r);
        }
        function ge(e, t, n) {
          return (
            'string' == typeof t &&
              (t = {
                type: t,
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
              }),
            me(e, n || t.type, e, t),
            ke(t) || t.codemirrorIgnore
          );
        }
        function ve(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (
              var n =
                  e.curOp.cursorActivityHandlers ||
                  (e.curOp.cursorActivityHandlers = []),
                r = 0;
              r < t.length;
              ++r
            )
              -1 == W(n, t[r]) && n.push(t[r]);
        }
        function ye(e, t) {
          return pe(e, t).length > 0;
        }
        function be(e) {
          (e.prototype.on = function(e, t) {
            fe(this, e, t);
          }),
            (e.prototype.off = function(e, t) {
              he(this, e, t);
            });
        }
        function xe(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function we(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function ke(e) {
          return null != e.defaultPrevented
            ? e.defaultPrevented
            : 0 == e.returnValue;
        }
        function _e(e) {
          xe(e), we(e);
        }
        function Ce(e) {
          return e.target || e.srcElement;
        }
        function Se(e) {
          var t = e.which;
          return (
            null == t &&
              (1 & e.button
                ? (t = 1)
                : 2 & e.button
                ? (t = 3)
                : 4 & e.button && (t = 2)),
            y && e.ctrlKey && 1 == t && (t = 3),
            t
          );
        }
        var Me,
          Te,
          Le = (function() {
            if (a && l < 9) return !1;
            var e = O('div');
            return 'draggable' in e || 'dragDrop' in e;
          })();
        function Oe(e) {
          if (null == Me) {
            var t = O('span', '\u200b');
            L(e, O('span', [t, document.createTextNode('x')])),
              0 != e.firstChild.offsetHeight &&
                (Me =
                  t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
          }
          var n = Me
            ? O('span', '\u200b')
            : O(
                'span',
                '\xa0',
                null,
                'display: inline-block; width: 1px; margin-right: -1px'
              );
          return n.setAttribute('cm-text', ''), n;
        }
        function De(e) {
          if (null != Te) return Te;
          var t = L(e, document.createTextNode('A\u062eA')),
            n = S(t, 0, 1).getBoundingClientRect(),
            r = S(t, 1, 2).getBoundingClientRect();
          return (
            T(e), !(!n || n.left == n.right) && (Te = r.right - n.right < 3)
          );
        }
        var Ee =
            3 != '\n\nb'.split(/\n/).length
              ? function(e) {
                  for (var t = 0, n = [], r = e.length; t <= r; ) {
                    var i = e.indexOf('\n', t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                      a = o.indexOf('\r');
                    -1 != a
                      ? (n.push(o.slice(0, a)), (t += a + 1))
                      : (n.push(o), (t = i + 1));
                  }
                  return n;
                }
              : function(e) {
                  return e.split(/\r\n?|\n/);
                },
          Ae = window.getSelection
            ? function(e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (t) {
                  return !1;
                }
              }
            : function(e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (n) {}
                return (
                  !(!t || t.parentElement() != e) &&
                  0 != t.compareEndPoints('StartToEnd', t)
                );
              },
          Ne = (function() {
            var e = O('div');
            return (
              'oncopy' in e ||
              (e.setAttribute('oncopy', 'return;'),
              'function' == typeof e.oncopy)
            );
          })(),
          Fe = null,
          ze = {},
          je = {};
        function Pe(e, t) {
          arguments.length > 2 &&
            (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            (ze[e] = t);
        }
        function Ie(e) {
          if ('string' == typeof e && je.hasOwnProperty(e)) e = je[e];
          else if (
            e &&
            'string' == typeof e.name &&
            je.hasOwnProperty(e.name)
          ) {
            var t = je[e.name];
            'string' == typeof t && (t = { name: t }),
              ((e = Q(t, e)).name = t.name);
          } else {
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return Ie('application/xml');
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return Ie('application/json');
          }
          return 'string' == typeof e ? { name: e } : e || { name: 'null' };
        }
        function qe(e, t) {
          t = Ie(t);
          var n = ze[t.name];
          if (!n) return qe(e, 'text/plain');
          var r = n(e, t);
          if (We.hasOwnProperty(t.name)) {
            var i = We[t.name];
            for (var o in i)
              i.hasOwnProperty(o) &&
                (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
          }
          if (
            ((r.name = t.name),
            t.helperType && (r.helperType = t.helperType),
            t.modeProps)
          )
            for (var a in t.modeProps) r[a] = t.modeProps[a];
          return r;
        }
        var We = {};
        function Be(e, t) {
          P(t, We.hasOwnProperty(e) ? We[e] : (We[e] = {}));
        }
        function Re(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};
          for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), (n[r] = i);
          }
          return n;
        }
        function He(e, t) {
          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
            (t = n.state), (e = n.mode);
          return n || { mode: e, state: t };
        }
        function Ue(e, t, n) {
          return !e.startState || e.startState(t, n);
        }
        var $e = function(e, t, n) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
        function Ve(e, t) {
          if ((t -= e.first) < 0 || t >= e.size)
            throw new Error(
              'There is no line ' + (t + e.first) + ' in the document.'
            );
          for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
              var i = n.children[r],
                o = i.chunkSize();
              if (t < o) {
                n = i;
                break;
              }
              t -= o;
            }
          return n.lines[t];
        }
        function Ke(e, t, n) {
          var r = [],
            i = t.line;
          return (
            e.iter(t.line, n.line + 1, function(e) {
              var o = e.text;
              i == n.line && (o = o.slice(0, n.ch)),
                i == t.line && (o = o.slice(t.ch)),
                r.push(o),
                ++i;
            }),
            r
          );
        }
        function Ge(e, t, n) {
          var r = [];
          return (
            e.iter(t, n, function(e) {
              r.push(e.text);
            }),
            r
          );
        }
        function Xe(e, t) {
          var n = t - e.height;
          if (n) for (var r = e; r; r = r.parent) r.height += n;
        }
        function Ye(e) {
          if (null == e.parent) return null;
          for (
            var t = e.parent, n = W(t.lines, e), r = t.parent;
            r;
            t = r, r = r.parent
          )
            for (var i = 0; r.children[i] != t; ++i)
              n += r.children[i].chunkSize();
          return n + t.first;
        }
        function Ze(e, t) {
          var n = e.first;
          e: do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (n += i.chunkSize());
            }
            return n;
          } while (!e.lines);
          for (var a = 0; a < e.lines.length; ++a) {
            var l = e.lines[a].height;
            if (t < l) break;
            t -= l;
          }
          return n + a;
        }
        function Qe(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function Je(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function et(e, t, n) {
          if ((void 0 === n && (n = null), !(this instanceof et)))
            return new et(e, t, n);
          (this.line = e), (this.ch = t), (this.sticky = n);
        }
        function tt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function nt(e, t) {
          return e.sticky == t.sticky && 0 == tt(e, t);
        }
        function rt(e) {
          return et(e.line, e.ch);
        }
        function it(e, t) {
          return tt(e, t) < 0 ? t : e;
        }
        function ot(e, t) {
          return tt(e, t) < 0 ? e : t;
        }
        function at(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function lt(e, t) {
          if (t.line < e.first) return et(e.first, 0);
          var n = e.first + e.size - 1;
          return t.line > n
            ? et(n, Ve(e, n).text.length)
            : (function(e, t) {
                var n = e.ch;
                return null == n || n > t
                  ? et(e.line, t)
                  : n < 0
                  ? et(e.line, 0)
                  : e;
              })(t, Ve(e, t.line).text.length);
        }
        function st(e, t) {
          for (var n = [], r = 0; r < t.length; r++) n[r] = lt(e, t[r]);
          return n;
        }
        ($e.prototype.eol = function() {
          return this.pos >= this.string.length;
        }),
          ($e.prototype.sol = function() {
            return this.pos == this.lineStart;
          }),
          ($e.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0;
          }),
          ($e.prototype.next = function() {
            if (this.pos < this.string.length)
              return this.string.charAt(this.pos++);
          }),
          ($e.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos);
            if (
              'string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))
            )
              return ++this.pos, t;
          }),
          ($e.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
          }),
          ($e.prototype.eatSpace = function() {
            for (
              var e = this.pos;
              /[\s\u00a0]/.test(this.string.charAt(this.pos));

            )
              ++this.pos;
            return this.pos > e;
          }),
          ($e.prototype.skipToEnd = function() {
            this.pos = this.string.length;
          }),
          ($e.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          ($e.prototype.backUp = function(e) {
            this.pos -= e;
          }),
          ($e.prototype.column = function() {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = I(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart
                  ? I(this.string, this.lineStart, this.tabSize)
                  : 0)
            );
          }),
          ($e.prototype.indentation = function() {
            return (
              I(this.string, null, this.tabSize) -
              (this.lineStart
                ? I(this.string, this.lineStart, this.tabSize)
                : 0)
            );
          }),
          ($e.prototype.match = function(e, t, n) {
            if ('string' != typeof e) {
              var r = this.string.slice(this.pos).match(e);
              return r && r.index > 0
                ? null
                : (r && !1 !== t && (this.pos += r[0].length), r);
            }
            var i = function(e) {
              return n ? e.toLowerCase() : e;
            };
            if (i(this.string.substr(this.pos, e.length)) == i(e))
              return !1 !== t && (this.pos += e.length), !0;
          }),
          ($e.prototype.current = function() {
            return this.string.slice(this.start, this.pos);
          }),
          ($e.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          ($e.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          ($e.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        var ct = function(e, t) {
            (this.state = e), (this.lookAhead = t);
          },
          ut = function(e, t, n, r) {
            (this.state = t),
              (this.doc = e),
              (this.line = n),
              (this.maxLookAhead = r || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function dt(e, t, n, r) {
          var i = [e.state.modeGen],
            o = {};
          xt(
            e,
            t.text,
            e.doc.mode,
            n,
            function(e, t) {
              return i.push(e, t);
            },
            o,
            r
          );
          for (
            var a = n.state,
              l = function(r) {
                n.baseTokens = i;
                var l = e.state.overlays[r],
                  s = 1,
                  c = 0;
                (n.state = !0),
                  xt(
                    e,
                    t.text,
                    l.mode,
                    n,
                    function(e, t) {
                      for (var n = s; c < e; ) {
                        var r = i[s];
                        r > e && i.splice(s, 1, e, i[s + 1], r),
                          (s += 2),
                          (c = Math.min(e, r));
                      }
                      if (t)
                        if (l.opaque)
                          i.splice(n, s - n, e, 'overlay ' + t), (s = n + 2);
                        else
                          for (; n < s; n += 2) {
                            var o = i[n + 1];
                            i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                          }
                    },
                    o
                  ),
                  (n.state = a),
                  (n.baseTokens = null),
                  (n.baseTokenPos = 1);
              },
              s = 0;
            s < e.state.overlays.length;
            ++s
          )
            l(s);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function ft(e, t, n) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = pt(e, Ye(t)),
              i =
                t.text.length > e.options.maxHighlightLength &&
                Re(e.doc.mode, r.state),
              o = dt(e, t, r);
            i && (r.state = i),
              (t.stateAfter = r.save(!i)),
              (t.styles = o.styles),
              o.classes
                ? (t.styleClasses = o.classes)
                : t.styleClasses && (t.styleClasses = null),
              n === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(
                  e.doc.modeFrontier,
                  ++e.doc.highlightFrontier
                ));
          }
          return t.styles;
        }
        function pt(e, t, n) {
          var r = e.doc,
            i = e.display;
          if (!r.mode.startState) return new ut(r, !0, t);
          var o = (function(e, t, n) {
              for (
                var r,
                  i,
                  o = e.doc,
                  a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                  l = t;
                l > a;
                --l
              ) {
                if (l <= o.first) return o.first;
                var s = Ve(o, l - 1),
                  c = s.stateAfter;
                if (
                  c &&
                  (!n ||
                    l + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)
                )
                  return l;
                var u = I(s.text, null, e.options.tabSize);
                (null == i || r > u) && ((i = l - 1), (r = u));
              }
              return i;
            })(e, t, n),
            a = o > r.first && Ve(r, o - 1).stateAfter,
            l = a ? ut.fromSaved(r, a, o) : new ut(r, Ue(r.mode), o);
          return (
            r.iter(o, t, function(n) {
              ht(e, n.text, l);
              var r = l.line;
              (n.stateAfter =
                r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                  ? l.save()
                  : null),
                l.nextLine();
            }),
            n && (r.modeFrontier = l.line),
            l
          );
        }
        function ht(e, t, n, r) {
          var i = e.doc.mode,
            o = new $e(t, e.options.tabSize, n);
          for (o.start = o.pos = r || 0, '' == t && mt(i, n.state); !o.eol(); )
            gt(i, o, n.state), (o.start = o.pos);
        }
        function mt(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (e.innerMode) {
            var n = He(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }
        function gt(e, t, n, r) {
          for (var i = 0; i < 10; i++) {
            r && (r[0] = He(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
          }
          throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        (ut.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return (
            null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
          );
        }),
          (ut.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; )
              this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: t && t.replace(/( |^)overlay .*/, ''),
              size: this.baseTokens[this.baseTokenPos] - e,
            };
          }),
          (ut.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (ut.fromSaved = function(e, t, n) {
            return t instanceof ct
              ? new ut(e, Re(e.mode, t.state), n, t.lookAhead)
              : new ut(e, Re(e.mode, t), n);
          }),
          (ut.prototype.save = function(e) {
            var t = !1 !== e ? Re(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
          });
        var vt = function(e, t, n) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = n);
        };
        function yt(e, t, n, r) {
          var i,
            o,
            a = e.doc,
            l = a.mode,
            s = Ve(a, (t = lt(a, t)).line),
            c = pt(e, t.line, n),
            u = new $e(s.text, e.options.tabSize, c);
          for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
            (u.start = u.pos),
              (i = gt(l, u, c.state)),
              r && o.push(new vt(u, i, Re(a.mode, c.state)));
          return r ? o : new vt(u, i, c.state);
        }
        function bt(e, t) {
          if (e)
            for (;;) {
              var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!n) break;
              e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
              var r = n[1] ? 'bgClass' : 'textClass';
              null == t[r]
                ? (t[r] = n[2])
                : new RegExp('(?:^|s)' + n[2] + '(?:$|s)').test(t[r]) ||
                  (t[r] += ' ' + n[2]);
            }
          return e;
        }
        function xt(e, t, n, r, i, o, a) {
          var l = n.flattenSpans;
          null == l && (l = e.options.flattenSpans);
          var s,
            c = 0,
            u = null,
            d = new $e(t, e.options.tabSize, r),
            f = e.options.addModeClass && [null];
          for ('' == t && bt(mt(n, r.state), o); !d.eol(); ) {
            if (
              (d.pos > e.options.maxHighlightLength
                ? ((l = !1),
                  a && ht(e, t, r, d.pos),
                  (d.pos = t.length),
                  (s = null))
                : (s = bt(gt(n, d, r.state, f), o)),
              f)
            ) {
              var p = f[0].name;
              p && (s = 'm-' + (s ? p + ' ' + s : p));
            }
            if (!l || u != s) {
              for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
              u = s;
            }
            d.start = d.pos;
          }
          for (; c < d.pos; ) {
            var h = Math.min(d.pos, c + 5e3);
            i(h, u), (c = h);
          }
        }
        var wt = !1,
          kt = !1;
        function _t(e, t, n) {
          (this.marker = e), (this.from = t), (this.to = n);
        }
        function Ct(e, t) {
          if (e)
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              if (r.marker == t) return r;
            }
        }
        function St(e, t) {
          for (var n, r = 0; r < e.length; ++r)
            e[r] != t && (n || (n = [])).push(e[r]);
          return n;
        }
        function Mt(e, t) {
          if (t.full) return null;
          var n = Qe(e, t.from.line) && Ve(e, t.from.line).markedSpans,
            r = Qe(e, t.to.line) && Ve(e, t.to.line).markedSpans;
          if (!n && !r) return null;
          var i = t.from.ch,
            o = t.to.ch,
            a = 0 == tt(t.from, t.to),
            l = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker;
                  if (
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                    (o.from == t &&
                      'bookmark' == a.type &&
                      (!n || !o.marker.insertLeft))
                  ) {
                    var l =
                      null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                    (r || (r = [])).push(new _t(a, o.from, l ? null : o.to));
                  }
                }
              return r;
            })(n, i, a),
            s = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker;
                  if (
                    null == o.to ||
                    (a.inclusiveRight ? o.to >= t : o.to > t) ||
                    (o.from == t &&
                      'bookmark' == a.type &&
                      (!n || o.marker.insertLeft))
                  ) {
                    var l =
                      null == o.from ||
                      (a.inclusiveLeft ? o.from <= t : o.from < t);
                    (r || (r = [])).push(
                      new _t(
                        a,
                        l ? null : o.from - t,
                        null == o.to ? null : o.to - t
                      )
                    );
                  }
                }
              return r;
            })(r, o, a),
            c = 1 == t.text.length,
            u = X(t.text).length + (c ? i : 0);
          if (l)
            for (var d = 0; d < l.length; ++d) {
              var f = l[d];
              if (null == f.to) {
                var p = Ct(s, f.marker);
                p ? c && (f.to = null == p.to ? null : p.to + u) : (f.to = i);
              }
            }
          if (s)
            for (var h = 0; h < s.length; ++h) {
              var m = s[h];
              null != m.to && (m.to += u),
                null == m.from
                  ? Ct(l, m.marker) ||
                    ((m.from = u), c && (l || (l = [])).push(m))
                  : ((m.from += u), c && (l || (l = [])).push(m));
            }
          l && (l = Tt(l)), s && s != l && (s = Tt(s));
          var g = [l];
          if (!c) {
            var v,
              y = t.text.length - 2;
            if (y > 0 && l)
              for (var b = 0; b < l.length; ++b)
                null == l[b].to &&
                  (v || (v = [])).push(new _t(l[b].marker, null, null));
            for (var x = 0; x < y; ++x) g.push(v);
            g.push(s);
          }
          return g;
        }
        function Tt(e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from &&
              n.from == n.to &&
              !1 !== n.marker.clearWhenEmpty &&
              e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function Lt(e) {
          var t = e.markedSpans;
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
            e.markedSpans = null;
          }
        }
        function Ot(e, t) {
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
            e.markedSpans = t;
          }
        }
        function Dt(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Et(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function At(e, t) {
          var n = e.lines.length - t.lines.length;
          if (0 != n) return n;
          var r = e.find(),
            i = t.find(),
            o = tt(r.from, i.from) || Dt(e) - Dt(t);
          if (o) return -o;
          var a = tt(r.to, i.to) || Et(e) - Et(t);
          return a || t.id - e.id;
        }
        function Nt(e, t) {
          var n,
            r = kt && e.markedSpans;
          if (r)
            for (var i = void 0, o = 0; o < r.length; ++o)
              (i = r[o]).marker.collapsed &&
                null == (t ? i.from : i.to) &&
                (!n || At(n, i.marker) < 0) &&
                (n = i.marker);
          return n;
        }
        function Ft(e) {
          return Nt(e, !0);
        }
        function zt(e) {
          return Nt(e, !1);
        }
        function jt(e, t) {
          var n,
            r = kt && e.markedSpans;
          if (r)
            for (var i = 0; i < r.length; ++i) {
              var o = r[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!n || At(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        }
        function Pt(e, t, n, r, i) {
          var o = Ve(e, t),
            a = kt && o.markedSpans;
          if (a)
            for (var l = 0; l < a.length; ++l) {
              var s = a[l];
              if (s.marker.collapsed) {
                var c = s.marker.find(0),
                  u = tt(c.from, n) || Dt(s.marker) - Dt(i),
                  d = tt(c.to, r) || Et(s.marker) - Et(i);
                if (
                  !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                  ((u <= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? tt(c.to, n) >= 0
                      : tt(c.to, n) > 0)) ||
                    (u >= 0 &&
                      (s.marker.inclusiveRight && i.inclusiveLeft
                        ? tt(c.from, r) <= 0
                        : tt(c.from, r) < 0)))
                )
                  return !0;
              }
            }
        }
        function It(e) {
          for (var t; (t = Ft(e)); ) e = t.find(-1, !0).line;
          return e;
        }
        function qt(e, t) {
          var n = Ve(e, t),
            r = It(n);
          return n == r ? t : Ye(r);
        }
        function Wt(e, t) {
          if (t > e.lastLine()) return t;
          var n,
            r = Ve(e, t);
          if (!Bt(e, r)) return t;
          for (; (n = zt(r)); ) r = n.find(1, !0).line;
          return Ye(r) + 1;
        }
        function Bt(e, t) {
          var n = kt && t.markedSpans;
          if (n)
            for (var r = void 0, i = 0; i < n.length; ++i)
              if ((r = n[i]).marker.collapsed) {
                if (null == r.from) return !0;
                if (
                  !r.marker.widgetNode &&
                  0 == r.from &&
                  r.marker.inclusiveLeft &&
                  Rt(e, t, r)
                )
                  return !0;
              }
        }
        function Rt(e, t, n) {
          if (null == n.to) {
            var r = n.marker.find(1, !0);
            return Rt(e, r.line, Ct(r.line.markedSpans, n.marker));
          }
          if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              (i = t.markedSpans[o]).marker.collapsed &&
              !i.marker.widgetNode &&
              i.from == n.to &&
              (null == i.to || i.to != n.from) &&
              (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
              Rt(e, t, i)
            )
              return !0;
        }
        function Ht(e) {
          for (
            var t = 0, n = (e = It(e)).parent, r = 0;
            r < n.lines.length;
            ++r
          ) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
          }
          for (var o = n.parent; o; o = (n = o).parent)
            for (var a = 0; a < o.children.length; ++a) {
              var l = o.children[a];
              if (l == n) break;
              t += l.height;
            }
          return t;
        }
        function Ut(e) {
          if (0 == e.height) return 0;
          for (var t, n = e.text.length, r = e; (t = Ft(r)); ) {
            var i = t.find(0, !0);
            (r = i.from.line), (n += i.from.ch - i.to.ch);
          }
          for (r = e; (t = zt(r)); ) {
            var o = t.find(0, !0);
            (n -= r.text.length - o.from.ch),
              (n += (r = o.to.line).text.length - o.to.ch);
          }
          return n;
        }
        function $t(e) {
          var t = e.display,
            n = e.doc;
          (t.maxLine = Ve(n, n.first)),
            (t.maxLineLength = Ut(t.maxLine)),
            (t.maxLineChanged = !0),
            n.iter(function(e) {
              var n = Ut(e);
              n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
            });
        }
        var Vt = function(e, t, n) {
          (this.text = e), Ot(this, t), (this.height = n ? n(this) : 1);
        };
        function Kt(e) {
          (e.parent = null), Lt(e);
        }
        (Vt.prototype.lineNo = function() {
          return Ye(this);
        }),
          be(Vt);
        var Gt = {},
          Xt = {};
        function Yt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var n = t.addModeClass ? Xt : Gt;
          return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function Zt(e, t) {
          var n = D('span', null, null, s ? 'padding-right: .1px' : null),
            r = {
              pre: D('pre', [n], 'CodeMirror-line'),
              content: n,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption('lineWrapping'),
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              a = void 0;
            (r.pos = 0),
              (r.addToken = Jt),
              De(e.display.measure) &&
                (a = ue(o, e.doc.direction)) &&
                (r.addToken = en(r.addToken, a)),
              (r.map = []),
              nn(o, r, ft(e, o, t != e.display.externalMeasured && Ye(o))),
              o.styleClasses &&
                (o.styleClasses.bgClass &&
                  (r.bgClass = F(o.styleClasses.bgClass, r.bgClass || '')),
                o.styleClasses.textClass &&
                  (r.textClass = F(
                    o.styleClasses.textClass,
                    r.textClass || ''
                  ))),
              0 == r.map.length &&
                r.map.push(0, 0, r.content.appendChild(Oe(e.display.measure))),
              0 == i
                ? ((t.measure.map = r.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (s) {
            var l = r.content.lastChild;
            (/\bcm-tab\b/.test(l.className) ||
              (l.querySelector && l.querySelector('.cm-tab'))) &&
              (r.content.className = 'cm-tab-wrap-hack');
          }
          return (
            me(e, 'renderLine', e, t.line, r.pre),
            r.pre.className &&
              (r.textClass = F(r.pre.className, r.textClass || '')),
            r
          );
        }
        function Qt(e) {
          var t = O('span', '\u2022', 'cm-invalidchar');
          return (
            (t.title = '\\u' + e.charCodeAt(0).toString(16)),
            t.setAttribute('aria-label', t.title),
            t
          );
        }
        function Jt(e, t, n, r, i, o, s) {
          if (t) {
            var c,
              u = e.splitSpaces
                ? (function(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var n = t, r = '', i = 0; i < e.length; i++) {
                      var o = e.charAt(i);
                      ' ' != o ||
                        !n ||
                        (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                        (o = '\xa0'),
                        (r += o),
                        (n = ' ' == o);
                    }
                    return r;
                  })(t, e.trailingSpace)
                : t,
              d = e.cm.state.specialChars,
              f = !1;
            if (d.test(t)) {
              c = document.createDocumentFragment();
              for (var p = 0; ; ) {
                d.lastIndex = p;
                var h = d.exec(t),
                  m = h ? h.index - p : t.length - p;
                if (m) {
                  var g = document.createTextNode(u.slice(p, p + m));
                  a && l < 9 ? c.appendChild(O('span', [g])) : c.appendChild(g),
                    e.map.push(e.pos, e.pos + m, g),
                    (e.col += m),
                    (e.pos += m);
                }
                if (!h) break;
                p += m + 1;
                var v = void 0;
                if ('\t' == h[0]) {
                  var y = e.cm.options.tabSize,
                    b = y - (e.col % y);
                  (v = c.appendChild(O('span', G(b), 'cm-tab'))).setAttribute(
                    'role',
                    'presentation'
                  ),
                    v.setAttribute('cm-text', '\t'),
                    (e.col += b);
                } else
                  '\r' == h[0] || '\n' == h[0]
                    ? ((v = c.appendChild(
                        O(
                          'span',
                          '\r' == h[0] ? '\u240d' : '\u2424',
                          'cm-invalidchar'
                        )
                      )).setAttribute('cm-text', h[0]),
                      (e.col += 1))
                    : ((v = e.cm.options.specialCharPlaceholder(
                        h[0]
                      )).setAttribute('cm-text', h[0]),
                      a && l < 9
                        ? c.appendChild(O('span', [v]))
                        : c.appendChild(v),
                      (e.col += 1));
                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else
              (e.col += t.length),
                (c = document.createTextNode(u)),
                e.map.push(e.pos, e.pos + t.length, c),
                a && l < 9 && (f = !0),
                (e.pos += t.length);
            if (
              ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
              n || r || i || f || o)
            ) {
              var x = n || '';
              r && (x += r), i && (x += i);
              var w = O('span', [c], x, o);
              if (s)
                for (var k in s)
                  s.hasOwnProperty(k) &&
                    'style' != k &&
                    'class' != k &&
                    w.setAttribute(k, s[k]);
              return e.content.appendChild(w);
            }
            e.content.appendChild(c);
          }
        }
        function en(e, t) {
          return function(n, r, i, o, a, l, s) {
            i = i ? i + ' cm-force-border' : 'cm-force-border';
            for (var c = n.pos, u = c + r.length; ; ) {
              for (
                var d = void 0, f = 0;
                f < t.length && !((d = t[f]).to > c && d.from <= c);
                f++
              );
              if (d.to >= u) return e(n, r, i, o, a, l, s);
              e(n, r.slice(0, d.to - c), i, o, null, l, s),
                (o = null),
                (r = r.slice(d.to - c)),
                (c = d.to);
            }
          };
        }
        function tn(e, t, n, r) {
          var i = !r && n.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !r &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement('span'))),
              i.setAttribute('cm-marker', n.id)),
            i &&
              (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function nn(e, t, n) {
          var r = e.markedSpans,
            i = e.text,
            o = 0;
          if (r)
            for (
              var a,
                l,
                s,
                c,
                u,
                d,
                f,
                p = i.length,
                h = 0,
                m = 1,
                g = '',
                v = 0;
              ;

            ) {
              if (v == h) {
                (s = c = u = l = ''), (f = null), (d = null), (v = 1 / 0);
                for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                  var w = r[x],
                    k = w.marker;
                  if ('bookmark' == k.type && w.from == h && k.widgetNode)
                    y.push(k);
                  else if (
                    w.from <= h &&
                    (null == w.to ||
                      w.to > h ||
                      (k.collapsed && w.to == h && w.from == h))
                  ) {
                    if (
                      (null != w.to &&
                        w.to != h &&
                        v > w.to &&
                        ((v = w.to), (c = '')),
                      k.className && (s += ' ' + k.className),
                      k.css && (l = (l ? l + ';' : '') + k.css),
                      k.startStyle && w.from == h && (u += ' ' + k.startStyle),
                      k.endStyle &&
                        w.to == v &&
                        (b || (b = [])).push(k.endStyle, w.to),
                      k.title && ((f || (f = {})).title = k.title),
                      k.attributes)
                    )
                      for (var _ in k.attributes)
                        (f || (f = {}))[_] = k.attributes[_];
                    k.collapsed && (!d || At(d.marker, k) < 0) && (d = w);
                  } else w.from > h && v > w.from && (v = w.from);
                }
                if (b)
                  for (var C = 0; C < b.length; C += 2)
                    b[C + 1] == v && (c += ' ' + b[C]);
                if (!d || d.from == h)
                  for (var S = 0; S < y.length; ++S) tn(t, 0, y[S]);
                if (d && (d.from || 0) == h) {
                  if (
                    (tn(
                      t,
                      (null == d.to ? p + 1 : d.to) - h,
                      d.marker,
                      null == d.from
                    ),
                    null == d.to)
                  )
                    return;
                  d.to == h && (d = !1);
                }
              }
              if (h >= p) break;
              for (var M = Math.min(p, v); ; ) {
                if (g) {
                  var T = h + g.length;
                  if (!d) {
                    var L = T > M ? g.slice(0, M - h) : g;
                    t.addToken(
                      t,
                      L,
                      a ? a + s : s,
                      u,
                      h + L.length == v ? c : '',
                      l,
                      f
                    );
                  }
                  if (T >= M) {
                    (g = g.slice(M - h)), (h = M);
                    break;
                  }
                  (h = T), (u = '');
                }
                (g = i.slice(o, (o = n[m++]))), (a = Yt(n[m++], t.cm.options));
              }
            }
          else
            for (var O = 1; O < n.length; O += 2)
              t.addToken(t, i.slice(o, (o = n[O])), Yt(n[O + 1], t.cm.options));
        }
        function rn(e, t, n) {
          (this.line = t),
            (this.rest = (function(e) {
              for (var t, n; (t = zt(e)); )
                (e = t.find(1, !0).line), (n || (n = [])).push(e);
              return n;
            })(t)),
            (this.size = this.rest ? Ye(X(this.rest)) - n + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = Bt(e, t));
        }
        function on(e, t, n) {
          for (var r, i = [], o = t; o < n; o = r) {
            var a = new rn(e.doc, Ve(e.doc, o), o);
            (r = o + a.size), i.push(a);
          }
          return i;
        }
        var an = null,
          ln = null;
        function sn(e, t) {
          var n = pe(e, t);
          if (n.length) {
            var r,
              i = Array.prototype.slice.call(arguments, 2);
            an
              ? (r = an.delayedCallbacks)
              : ln
              ? (r = ln)
              : ((r = ln = []), setTimeout(cn, 0));
            for (
              var o = function(e) {
                  r.push(function() {
                    return n[e].apply(null, i);
                  });
                },
                a = 0;
              a < n.length;
              ++a
            )
              o(a);
          }
        }
        function cn() {
          var e = ln;
          ln = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function un(e, t, n, r) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            'text' == o
              ? pn(e, t)
              : 'gutter' == o
              ? mn(e, t, n, r)
              : 'class' == o
              ? hn(e, t)
              : 'widget' == o && gn(e, t, r);
          }
          t.changes = null;
        }
        function dn(e) {
          return (
            e.node == e.text &&
              ((e.node = O('div', null, null, 'position: relative')),
              e.text.parentNode &&
                e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              a && l < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function fn(e, t) {
          var n = e.display.externalMeasured;
          return n && n.line == t.line
            ? ((e.display.externalMeasured = null),
              (t.measure = n.measure),
              n.built)
            : Zt(e, t);
        }
        function pn(e, t) {
          var n = t.text.className,
            r = fn(e, t);
          t.text == t.node && (t.node = r.pre),
            t.text.parentNode.replaceChild(r.pre, t.text),
            (t.text = r.pre),
            r.bgClass != t.bgClass || r.textClass != t.textClass
              ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), hn(e, t))
              : n && (t.text.className = n);
        }
        function hn(e, t) {
          !(function(e, t) {
            var n = t.bgClass
              ? t.bgClass + ' ' + (t.line.bgClass || '')
              : t.line.bgClass;
            if ((n && (n += ' CodeMirror-linebackground'), t.background))
              n
                ? (t.background.className = n)
                : (t.background.parentNode.removeChild(t.background),
                  (t.background = null));
            else if (n) {
              var r = dn(t);
              (t.background = r.insertBefore(O('div', null, n), r.firstChild)),
                e.display.input.setUneditable(t.background);
            }
          })(e, t),
            t.line.wrapClass
              ? (dn(t).className = t.line.wrapClass)
              : t.node != t.text && (t.node.className = '');
          var n = t.textClass
            ? t.textClass + ' ' + (t.line.textClass || '')
            : t.line.textClass;
          t.text.className = n || '';
        }
        function mn(e, t, n, r) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
              (t.node.removeChild(t.gutterBackground),
              (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = dn(t);
            (t.gutterBackground = O(
              'div',
              null,
              'CodeMirror-gutter-background ' + t.line.gutterClass,
              'left: ' +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                'px; width: ' +
                r.gutterTotalWidth +
                'px'
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var a = dn(t),
              l = (t.gutter = O(
                'div',
                null,
                'CodeMirror-gutter-wrapper',
                'left: ' +
                  (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                  'px'
              ));
            if (
              (e.display.input.setUneditable(l),
              a.insertBefore(l, t.text),
              t.line.gutterClass && (l.className += ' ' + t.line.gutterClass),
              !e.options.lineNumbers ||
                (o && o['CodeMirror-linenumbers']) ||
                (t.lineNumber = l.appendChild(
                  O(
                    'div',
                    Je(e.options, n),
                    'CodeMirror-linenumber CodeMirror-gutter-elt',
                    'left: ' +
                      r.gutterLeft['CodeMirror-linenumbers'] +
                      'px; width: ' +
                      e.display.lineNumInnerWidth +
                      'px'
                  )
                )),
              o)
            )
              for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var c = e.display.gutterSpecs[s].className,
                  u = o.hasOwnProperty(c) && o[c];
                u &&
                  l.appendChild(
                    O(
                      'div',
                      [u],
                      'CodeMirror-gutter-elt',
                      'left: ' +
                        r.gutterLeft[c] +
                        'px; width: ' +
                        r.gutterWidth[c] +
                        'px'
                    )
                  );
              }
          }
        }
        function gn(e, t, n) {
          t.alignable && (t.alignable = null);
          for (var r = t.node.firstChild, i = void 0; r; r = i)
            (i = r.nextSibling),
              'CodeMirror-linewidget' == r.className && t.node.removeChild(r);
          yn(e, t, n);
        }
        function vn(e, t, n, r) {
          var i = fn(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            hn(e, t),
            mn(e, t, n, r),
            yn(e, t, r),
            t.node
          );
        }
        function yn(e, t, n) {
          if ((bn(e, t.line, t, n, !0), t.rest))
            for (var r = 0; r < t.rest.length; r++) bn(e, t.rest[r], t, n, !1);
        }
        function bn(e, t, n, r, i) {
          if (t.widgets)
            for (var o = dn(n), a = 0, l = t.widgets; a < l.length; ++a) {
              var s = l[a],
                c = O('div', [s.node], 'CodeMirror-linewidget');
              s.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
                xn(s, c, n, r),
                e.display.input.setUneditable(c),
                i && s.above
                  ? o.insertBefore(c, n.gutter || n.text)
                  : o.appendChild(c),
                sn(s, 'redraw');
            }
        }
        function xn(e, t, n, r) {
          if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            (t.style.left = r.fixedPos + 'px'),
              e.coverGutter ||
                ((i -= r.gutterTotalWidth),
                (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
              (t.style.width = i + 'px');
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = 'relative'),
            e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
        }
        function wn(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!E(document.body, e.node)) {
            var n = 'position: relative;';
            e.coverGutter &&
              (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
              e.noHScroll &&
                (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
              L(t.display.measure, O('div', [e.node], null, n));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function kn(e, t) {
          for (var n = Ce(t); n != e.wrapper; n = n.parentNode)
            if (
              !n ||
              (1 == n.nodeType &&
                'true' == n.getAttribute('cm-ignore-events')) ||
              (n.parentNode == e.sizer && n != e.mover)
            )
              return !0;
        }
        function _n(e) {
          return e.lineSpace.offsetTop;
        }
        function Cn(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Sn(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = L(e.measure, O('pre', 'x', 'CodeMirror-line-like')),
            n = window.getComputedStyle
              ? window.getComputedStyle(t)
              : t.currentStyle,
            r = {
              left: parseInt(n.paddingLeft),
              right: parseInt(n.paddingRight),
            };
          return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }
        function Mn(e) {
          return B - e.display.nativeBarWidth;
        }
        function Tn(e) {
          return e.display.scroller.clientWidth - Mn(e) - e.display.barWidth;
        }
        function Ln(e) {
          return e.display.scroller.clientHeight - Mn(e) - e.display.barHeight;
        }
        function On(e, t, n) {
          if (e.line == t)
            return { map: e.measure.map, cache: e.measure.cache };
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (Ye(e.rest[i]) > n)
              return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0,
              };
        }
        function Dn(e, t, n, r) {
          return Nn(e, An(e, t), n, r);
        }
        function En(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[ur(e, t)];
          var n = e.display.externalMeasured;
          return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }
        function An(e, t) {
          var n = Ye(t),
            r = En(e, n);
          r && !r.text
            ? (r = null)
            : r &&
              r.changes &&
              (un(e, r, n, or(e)), (e.curOp.forceUpdate = !0)),
            r ||
              (r = (function(e, t) {
                var n = Ye((t = It(t))),
                  r = (e.display.externalMeasured = new rn(e.doc, t, n));
                r.lineN = n;
                var i = (r.built = Zt(e, r));
                return (r.text = i.pre), L(e.display.lineMeasure, i.pre), r;
              })(e, t));
          var i = On(r, t, n);
          return {
            line: t,
            view: r,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1,
          };
        }
        function Nn(e, t, n, r, i) {
          t.before && (n = -1);
          var o,
            s = n + (r || '');
          return (
            t.cache.hasOwnProperty(s)
              ? (o = t.cache[s])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights ||
                  ((function(e, t, n) {
                    var r = e.options.lineWrapping,
                      i = r && Tn(e);
                    if (!t.measure.heights || (r && t.measure.width != i)) {
                      var o = (t.measure.heights = []);
                      if (r) {
                        t.measure.width = i;
                        for (
                          var a = t.text.firstChild.getClientRects(), l = 0;
                          l < a.length - 1;
                          l++
                        ) {
                          var s = a[l],
                            c = a[l + 1];
                          Math.abs(s.bottom - c.bottom) > 2 &&
                            o.push((s.bottom + c.top) / 2 - n.top);
                        }
                      }
                      o.push(n.bottom - n.top);
                    }
                  })(e, t.view, t.rect),
                  (t.hasHeights = !0)),
                (o = (function(e, t, n, r) {
                  var i,
                    o = jn(t.map, n, r),
                    s = o.node,
                    c = o.start,
                    u = o.end,
                    d = o.collapse;
                  if (3 == s.nodeType) {
                    for (var f = 0; f < 4; f++) {
                      for (; c && ie(t.line.text.charAt(o.coverStart + c)); )
                        --c;
                      for (
                        ;
                        o.coverStart + u < o.coverEnd &&
                        ie(t.line.text.charAt(o.coverStart + u));

                      )
                        ++u;
                      if (
                        (i =
                          a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart
                            ? s.parentNode.getBoundingClientRect()
                            : Pn(S(s, c, u).getClientRects(), r)).left ||
                        i.right ||
                        0 == c
                      )
                        break;
                      (u = c), (c -= 1), (d = 'right');
                    }
                    a &&
                      l < 11 &&
                      (i = (function(e, t) {
                        if (
                          !window.screen ||
                          null == screen.logicalXDPI ||
                          screen.logicalXDPI == screen.deviceXDPI ||
                          !(function(e) {
                            if (null != Fe) return Fe;
                            var t = L(e, O('span', 'x')),
                              n = t.getBoundingClientRect(),
                              r = S(t, 0, 1).getBoundingClientRect();
                            return (Fe = Math.abs(n.left - r.left) > 1);
                          })(e)
                        )
                          return t;
                        var n = screen.logicalXDPI / screen.deviceXDPI,
                          r = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                          left: t.left * n,
                          right: t.right * n,
                          top: t.top * r,
                          bottom: t.bottom * r,
                        };
                      })(e.display.measure, i));
                  } else {
                    var p;
                    c > 0 && (d = r = 'right'),
                      (i =
                        e.options.lineWrapping &&
                        (p = s.getClientRects()).length > 1
                          ? p['right' == r ? p.length - 1 : 0]
                          : s.getBoundingClientRect());
                  }
                  if (a && l < 9 && !c && (!i || (!i.left && !i.right))) {
                    var h = s.parentNode.getClientRects()[0];
                    i = h
                      ? {
                          left: h.left,
                          right: h.left + ir(e.display),
                          top: h.top,
                          bottom: h.bottom,
                        }
                      : zn;
                  }
                  for (
                    var m = i.top - t.rect.top,
                      g = i.bottom - t.rect.top,
                      v = (m + g) / 2,
                      y = t.view.measure.heights,
                      b = 0;
                    b < y.length - 1 && !(v < y[b]);
                    b++
                  );
                  var x = b ? y[b - 1] : 0,
                    w = y[b],
                    k = {
                      left: ('right' == d ? i.right : i.left) - t.rect.left,
                      right: ('left' == d ? i.left : i.right) - t.rect.left,
                      top: x,
                      bottom: w,
                    };
                  return (
                    i.left || i.right || (k.bogus = !0),
                    e.options.singleCursorHeightPerLine ||
                      ((k.rtop = m), (k.rbottom = g)),
                    k
                  );
                })(e, t, n, r)).bogus || (t.cache[s] = o)),
            {
              left: o.left,
              right: o.right,
              top: i ? o.rtop : o.top,
              bottom: i ? o.rbottom : o.bottom,
            }
          );
        }
        var Fn,
          zn = { left: 0, right: 0, top: 0, bottom: 0 };
        function jn(e, t, n) {
          for (var r, i, o, a, l, s, c = 0; c < e.length; c += 3)
            if (
              ((l = e[c]),
              (s = e[c + 1]),
              t < l
                ? ((i = 0), (o = 1), (a = 'left'))
                : t < s
                ? (o = 1 + (i = t - l))
                : (c == e.length - 3 || (t == s && e[c + 3] > t)) &&
                  ((i = (o = s - l) - 1), t >= s && (a = 'right')),
              null != i)
            ) {
              if (
                ((r = e[c + 2]),
                l == s && n == (r.insertLeft ? 'left' : 'right') && (a = n),
                'left' == n && 0 == i)
              )
                for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                  (r = e[2 + (c -= 3)]), (a = 'left');
              if ('right' == n && i == s - l)
                for (
                  ;
                  c < e.length - 3 &&
                  e[c + 3] == e[c + 4] &&
                  !e[c + 5].insertLeft;

                )
                  (r = e[(c += 3) + 2]), (a = 'right');
              break;
            }
          return {
            node: r,
            start: i,
            end: o,
            collapse: a,
            coverStart: l,
            coverEnd: s,
          };
        }
        function Pn(e, t) {
          var n = zn;
          if ('left' == t)
            for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
          else
            for (
              var i = e.length - 1;
              i >= 0 && (n = e[i]).left == n.right;
              i--
            );
          return n;
        }
        function In(e) {
          if (
            e.measure &&
            ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
          )
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function qn(e) {
          (e.display.externalMeasure = null), T(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) In(e.display.view[t]);
        }
        function Wn(e) {
          qn(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function Bn() {
          return u && g
            ? -(
                document.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(document.body).marginLeft)
              )
            : window.pageXOffset ||
                (document.documentElement || document.body).scrollLeft;
        }
        function Rn() {
          return u && g
            ? -(
                document.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(document.body).marginTop)
              )
            : window.pageYOffset ||
                (document.documentElement || document.body).scrollTop;
        }
        function Hn(e) {
          var t = 0;
          if (e.widgets)
            for (var n = 0; n < e.widgets.length; ++n)
              e.widgets[n].above && (t += wn(e.widgets[n]));
          return t;
        }
        function Un(e, t, n, r, i) {
          if (!i) {
            var o = Hn(t);
            (n.top += o), (n.bottom += o);
          }
          if ('line' == r) return n;
          r || (r = 'local');
          var a = Ht(t);
          if (
            ('local' == r ? (a += _n(e.display)) : (a -= e.display.viewOffset),
            'page' == r || 'window' == r)
          ) {
            var l = e.display.lineSpace.getBoundingClientRect();
            a += l.top + ('window' == r ? 0 : Rn());
            var s = l.left + ('window' == r ? 0 : Bn());
            (n.left += s), (n.right += s);
          }
          return (n.top += a), (n.bottom += a), n;
        }
        function $n(e, t, n) {
          if ('div' == n) return t;
          var r = t.left,
            i = t.top;
          if ('page' == n) (r -= Bn()), (i -= Rn());
          else if ('local' == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            (r += o.left), (i += o.top);
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return { left: r - a.left, top: i - a.top };
        }
        function Vn(e, t, n, r, i) {
          return r || (r = Ve(e.doc, t.line)), Un(e, r, Dn(e, r, t.ch, i), n);
        }
        function Kn(e, t, n, r, i, o) {
          function a(t, a) {
            var l = Nn(e, i, t, a ? 'right' : 'left', o);
            return a ? (l.left = l.right) : (l.right = l.left), Un(e, r, l, n);
          }
          (r = r || Ve(e.doc, t.line)), i || (i = An(e, r));
          var l = ue(r, e.doc.direction),
            s = t.ch,
            c = t.sticky;
          if (
            (s >= r.text.length
              ? ((s = r.text.length), (c = 'before'))
              : s <= 0 && ((s = 0), (c = 'after')),
            !l)
          )
            return a('before' == c ? s - 1 : s, 'before' == c);
          function u(e, t, n) {
            return a(n ? e - 1 : e, (1 == l[t].level) != n);
          }
          var d = se(l, s, c),
            f = le,
            p = u(s, d, 'before' == c);
          return null != f && (p.other = u(s, f, 'before' != c)), p;
        }
        function Gn(e, t) {
          var n = 0;
          (t = lt(e.doc, t)),
            e.options.lineWrapping || (n = ir(e.display) * t.ch);
          var r = Ve(e.doc, t.line),
            i = Ht(r) + _n(e.display);
          return { left: n, right: n, top: i, bottom: i + r.height };
        }
        function Xn(e, t, n, r, i) {
          var o = et(e, t, n);
          return (o.xRel = i), r && (o.outside = r), o;
        }
        function Yn(e, t, n) {
          var r = e.doc;
          if ((n += e.display.viewOffset) < 0)
            return Xn(r.first, 0, null, -1, -1);
          var i = Ze(r, n),
            o = r.first + r.size - 1;
          if (i > o)
            return Xn(r.first + r.size - 1, Ve(r, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var a = Ve(r, i); ; ) {
            var l = er(e, a, i, t, n),
              s = jt(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
            if (!s) return l;
            var c = s.find(1);
            if (c.line == i) return c;
            a = Ve(r, (i = c.line));
          }
        }
        function Zn(e, t, n, r) {
          r -= Hn(t);
          var i = t.text.length,
            o = ae(
              function(t) {
                return Nn(e, n, t - 1).bottom <= r;
              },
              i,
              0
            );
          return {
            begin: o,
            end: (i = ae(
              function(t) {
                return Nn(e, n, t).top > r;
              },
              o,
              i
            )),
          };
        }
        function Qn(e, t, n, r) {
          return (
            n || (n = An(e, t)), Zn(e, t, n, Un(e, t, Nn(e, n, r), 'line').top)
          );
        }
        function Jn(e, t, n, r) {
          return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }
        function er(e, t, n, r, i) {
          i -= Ht(t);
          var o = An(e, t),
            a = Hn(t),
            l = 0,
            s = t.text.length,
            c = !0,
            u = ue(t, e.doc.direction);
          if (u) {
            var d = (e.options.lineWrapping ? nr : tr)(e, t, n, o, u, r, i);
            (l = (c = 1 != d.level) ? d.from : d.to - 1),
              (s = c ? d.to : d.from - 1);
          }
          var f,
            p,
            h = null,
            m = null,
            g = ae(
              function(t) {
                var n = Nn(e, o, t);
                return (
                  (n.top += a),
                  (n.bottom += a),
                  !!Jn(n, r, i, !1) &&
                    (n.top <= i && n.left <= r && ((h = t), (m = n)), !0)
                );
              },
              l,
              s
            ),
            v = !1;
          if (m) {
            var y = r - m.left < m.right - r,
              b = y == c;
            (g = h + (b ? 0 : 1)),
              (p = b ? 'after' : 'before'),
              (f = y ? m.left : m.right);
          } else {
            c || (g != s && g != l) || g++,
              (p =
                0 == g
                  ? 'after'
                  : g == t.text.length
                  ? 'before'
                  : Nn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                  ? 'after'
                  : 'before');
            var x = Kn(e, et(n, g, p), 'line', t, o);
            (f = x.left), (v = i < x.top ? -1 : i >= x.bottom ? 1 : 0);
          }
          return Xn(n, (g = oe(t.text, g, 1)), p, v, r - f);
        }
        function tr(e, t, n, r, i, o, a) {
          var l = ae(
              function(l) {
                var s = i[l],
                  c = 1 != s.level;
                return Jn(
                  Kn(
                    e,
                    et(n, c ? s.to : s.from, c ? 'before' : 'after'),
                    'line',
                    t,
                    r
                  ),
                  o,
                  a,
                  !0
                );
              },
              0,
              i.length - 1
            ),
            s = i[l];
          if (l > 0) {
            var c = 1 != s.level,
              u = Kn(
                e,
                et(n, c ? s.from : s.to, c ? 'after' : 'before'),
                'line',
                t,
                r
              );
            Jn(u, o, a, !0) && u.top > a && (s = i[l - 1]);
          }
          return s;
        }
        function nr(e, t, n, r, i, o, a) {
          var l = Zn(e, t, r, a),
            s = l.begin,
            c = l.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;
          for (var u = null, d = null, f = 0; f < i.length; f++) {
            var p = i[f];
            if (!(p.from >= c || p.to <= s)) {
              var h = Nn(
                  e,
                  r,
                  1 != p.level ? Math.min(c, p.to) - 1 : Math.max(s, p.from)
                ).right,
                m = h < o ? o - h + 1e9 : h - o;
              (!u || d > m) && ((u = p), (d = m));
            }
          }
          return (
            u || (u = i[i.length - 1]),
            u.from < s && (u = { from: s, to: u.to, level: u.level }),
            u.to > c && (u = { from: u.from, to: c, level: u.level }),
            u
          );
        }
        function rr(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;
          if (null == Fn) {
            Fn = O('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t)
              Fn.appendChild(document.createTextNode('x')),
                Fn.appendChild(O('br'));
            Fn.appendChild(document.createTextNode('x'));
          }
          L(e.measure, Fn);
          var n = Fn.offsetHeight / 50;
          return n > 3 && (e.cachedTextHeight = n), T(e.measure), n || 1;
        }
        function ir(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = O('span', 'xxxxxxxxxx'),
            n = O('pre', [t], 'CodeMirror-line-like');
          L(e.measure, n);
          var r = t.getBoundingClientRect(),
            i = (r.right - r.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function or(e) {
          for (
            var t = e.display,
              n = {},
              r = {},
              i = t.gutters.clientLeft,
              o = t.gutters.firstChild,
              a = 0;
            o;
            o = o.nextSibling, ++a
          ) {
            var l = e.display.gutterSpecs[a].className;
            (n[l] = o.offsetLeft + o.clientLeft + i), (r[l] = o.clientWidth);
          }
          return {
            fixedPos: ar(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function ar(e) {
          return (
            e.scroller.getBoundingClientRect().left -
            e.sizer.getBoundingClientRect().left
          );
        }
        function lr(e) {
          var t = rr(e.display),
            n = e.options.lineWrapping,
            r =
              n &&
              Math.max(5, e.display.scroller.clientWidth / ir(e.display) - 3);
          return function(i) {
            if (Bt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets)
              for (var a = 0; a < i.widgets.length; a++)
                i.widgets[a].height && (o += i.widgets[a].height);
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
          };
        }
        function sr(e) {
          var t = e.doc,
            n = lr(e);
          t.iter(function(e) {
            var t = n(e);
            t != e.height && Xe(e, t);
          });
        }
        function cr(e, t, n, r) {
          var i = e.display;
          if (!n && 'true' == Ce(t).getAttribute('cm-not-content')) return null;
          var o,
            a,
            l = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - l.left), (a = t.clientY - l.top);
          } catch (t) {
            return null;
          }
          var s,
            c = Yn(e, o, a);
          if (r && 1 == c.xRel && (s = Ve(e.doc, c.line).text).length == c.ch) {
            var u = I(s, s.length, e.options.tabSize) - s.length;
            c = et(
              c.line,
              Math.max(
                0,
                Math.round((o - Sn(e.display).left) / ir(e.display)) - u
              )
            );
          }
          return c;
        }
        function ur(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;
          for (var n = e.display.view, r = 0; r < n.length; r++)
            if ((t -= n[r].size) < 0) return r;
        }
        function dr(e, t, n, r) {
          null == t && (t = e.doc.first),
            null == n && (n = e.doc.first + e.doc.size),
            r || (r = 0);
          var i = e.display;
          if (
            (r &&
              n < i.viewTo &&
              (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
              (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            kt && qt(e.doc, t) < i.viewTo && pr(e);
          else if (n <= i.viewFrom)
            kt && Wt(e.doc, n + r) > i.viewFrom
              ? pr(e)
              : ((i.viewFrom += r), (i.viewTo += r));
          else if (t <= i.viewFrom && n >= i.viewTo) pr(e);
          else if (t <= i.viewFrom) {
            var o = hr(e, n, n + r, 1);
            o
              ? ((i.view = i.view.slice(o.index)),
                (i.viewFrom = o.lineN),
                (i.viewTo += r))
              : pr(e);
          } else if (n >= i.viewTo) {
            var a = hr(e, t, t, -1);
            a
              ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
              : pr(e);
          } else {
            var l = hr(e, t, t, -1),
              s = hr(e, n, n + r, 1);
            l && s
              ? ((i.view = i.view
                  .slice(0, l.index)
                  .concat(on(e, l.lineN, s.lineN))
                  .concat(i.view.slice(s.index))),
                (i.viewTo += r))
              : pr(e);
          }
          var c = i.externalMeasured;
          c &&
            (n < c.lineN
              ? (c.lineN += r)
              : t < c.lineN + c.size && (i.externalMeasured = null));
        }
        function fr(e, t, n) {
          e.curOp.viewChanged = !0;
          var r = e.display,
            i = e.display.externalMeasured;
          if (
            (i &&
              t >= i.lineN &&
              t < i.lineN + i.size &&
              (r.externalMeasured = null),
            !(t < r.viewFrom || t >= r.viewTo))
          ) {
            var o = r.view[ur(e, t)];
            if (null != o.node) {
              var a = o.changes || (o.changes = []);
              -1 == W(a, n) && a.push(n);
            }
          }
        }
        function pr(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
        }
        function hr(e, t, n, r) {
          var i,
            o = ur(e, t),
            a = e.display.view;
          if (!kt || n == e.doc.first + e.doc.size)
            return { index: o, lineN: n };
          for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
          if (l != t) {
            if (r > 0) {
              if (o == a.length - 1) return null;
              (i = l + a[o].size - t), o++;
            } else i = l - t;
            (t += i), (n += i);
          }
          for (; qt(e.doc, n) != n; ) {
            if (o == (r < 0 ? 0 : a.length - 1)) return null;
            (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
          }
          return { index: o, lineN: n };
        }
        function mr(e) {
          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || (i.node && !i.changes) || ++n;
          }
          return n;
        }
        function gr(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function vr(e, t) {
          void 0 === t && (t = !0);
          for (
            var n = e.doc,
              r = {},
              i = (r.cursors = document.createDocumentFragment()),
              o = (r.selection = document.createDocumentFragment()),
              a = 0;
            a < n.sel.ranges.length;
            a++
          )
            if (t || a != n.sel.primIndex) {
              var l = n.sel.ranges[a];
              if (
                !(
                  l.from().line >= e.display.viewTo ||
                  l.to().line < e.display.viewFrom
                )
              ) {
                var s = l.empty();
                (s || e.options.showCursorWhenSelecting) && yr(e, l.head, i),
                  s || xr(e, l, o);
              }
            }
          return r;
        }
        function yr(e, t, n) {
          var r = Kn(
              e,
              t,
              'div',
              null,
              null,
              !e.options.singleCursorHeightPerLine
            ),
            i = n.appendChild(O('div', '\xa0', 'CodeMirror-cursor'));
          if (
            ((i.style.left = r.left + 'px'),
            (i.style.top = r.top + 'px'),
            (i.style.height =
              Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
            r.other)
          ) {
            var o = n.appendChild(
              O('div', '\xa0', 'CodeMirror-cursor CodeMirror-secondarycursor')
            );
            (o.style.display = ''),
              (o.style.left = r.other.left + 'px'),
              (o.style.top = r.other.top + 'px'),
              (o.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px');
          }
        }
        function br(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function xr(e, t, n) {
          var r = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            a = Sn(e.display),
            l = a.left,
            s = Math.max(r.sizerWidth, Tn(e) - r.sizer.offsetLeft) - a.right,
            c = 'ltr' == i.direction;
          function u(e, t, n, r) {
            t < 0 && (t = 0),
              (t = Math.round(t)),
              (r = Math.round(r)),
              o.appendChild(
                O(
                  'div',
                  null,
                  'CodeMirror-selected',
                  'position: absolute; left: ' +
                    e +
                    'px;\n                             top: ' +
                    t +
                    'px; width: ' +
                    (null == n ? s - e : n) +
                    'px;\n                             height: ' +
                    (r - t) +
                    'px'
                )
              );
          }
          function d(t, n, r) {
            var o,
              a,
              d = Ve(i, t),
              f = d.text.length;
            function p(n, r) {
              return Vn(e, et(t, n), 'div', d, r);
            }
            function h(t, n, r) {
              var i = Qn(e, d, null, t),
                o = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
              return p(
                'after' == r
                  ? i.begin
                  : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1),
                o
              )[o];
            }
            var m = ue(d, i.direction);
            return (
              (function(e, t, n, r) {
                if (!e) return r(t, n, 'ltr', 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                  var a = e[o];
                  ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                    (r(
                      Math.max(a.from, t),
                      Math.min(a.to, n),
                      1 == a.level ? 'rtl' : 'ltr',
                      o
                    ),
                    (i = !0));
                }
                i || r(t, n, 'ltr');
              })(m, n || 0, null == r ? f : r, function(e, t, i, d) {
                var g = 'ltr' == i,
                  v = p(e, g ? 'left' : 'right'),
                  y = p(t - 1, g ? 'right' : 'left'),
                  b = null == n && 0 == e,
                  x = null == r && t == f,
                  w = 0 == d,
                  k = !m || d == m.length - 1;
                if (y.top - v.top <= 3) {
                  var _ = (c ? x : b) && k,
                    C = (c ? b : x) && w ? l : (g ? v : y).left,
                    S = _ ? s : (g ? y : v).right;
                  u(C, v.top, S - C, v.bottom);
                } else {
                  var M, T, L, O;
                  g
                    ? ((M = c && b && w ? l : v.left),
                      (T = c ? s : h(e, i, 'before')),
                      (L = c ? l : h(t, i, 'after')),
                      (O = c && x && k ? s : y.right))
                    : ((M = c ? h(e, i, 'before') : l),
                      (T = !c && b && w ? s : v.right),
                      (L = !c && x && k ? l : y.left),
                      (O = c ? h(t, i, 'after') : s)),
                    u(M, v.top, T - M, v.bottom),
                    v.bottom < y.top && u(l, v.bottom, null, y.top),
                    u(L, y.top, O - L, y.bottom);
                }
                (!o || br(v, o) < 0) && (o = v),
                  br(y, o) < 0 && (o = y),
                  (!a || br(v, a) < 0) && (a = v),
                  br(y, a) < 0 && (a = y);
              }),
              { start: o, end: a }
            );
          }
          var f = t.from(),
            p = t.to();
          if (f.line == p.line) d(f.line, f.ch, p.ch);
          else {
            var h = Ve(i, f.line),
              m = Ve(i, p.line),
              g = It(h) == It(m),
              v = d(f.line, f.ch, g ? h.text.length + 1 : null).end,
              y = d(p.line, g ? 0 : null, p.ch).start;
            g &&
              (v.top < y.top - 2
                ? (u(v.right, v.top, null, v.bottom),
                  u(l, y.top, y.left, y.bottom))
                : u(v.right, v.top, y.left - v.right, v.bottom)),
              v.bottom < y.top && u(l, v.bottom, null, y.top);
          }
          n.appendChild(o);
        }
        function wr(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            (t.cursorDiv.style.visibility = ''),
              e.options.cursorBlinkRate > 0
                ? (t.blinker = setInterval(function() {
                    return (t.cursorDiv.style.visibility = (n = !n)
                      ? ''
                      : 'hidden');
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 &&
                  (t.cursorDiv.style.visibility = 'hidden');
          }
        }
        function kr(e) {
          e.state.focused || (e.display.input.focus(), Cr(e));
        }
        function _r(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              e.state.delayingBlurEvent &&
                ((e.state.delayingBlurEvent = !1), Sr(e));
            }, 100);
        }
        function Cr(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            'nocursor' != e.options.readOnly &&
              (e.state.focused ||
                (me(e, 'focus', e, t),
                (e.state.focused = !0),
                N(e.display.wrapper, 'CodeMirror-focused'),
                e.curOp ||
                  e.display.selForContextMenu == e.doc.sel ||
                  (e.display.input.reset(),
                  s &&
                    setTimeout(function() {
                      return e.display.input.reset(!0);
                    }, 20)),
                e.display.input.receivedFocus()),
              wr(e));
        }
        function Sr(e, t) {
          e.state.delayingBlurEvent ||
            (e.state.focused &&
              (me(e, 'blur', e, t),
              (e.state.focused = !1),
              M(e.display.wrapper, 'CodeMirror-focused')),
            clearInterval(e.display.blinker),
            setTimeout(function() {
              e.state.focused || (e.display.shift = !1);
            }, 150));
        }
        function Mr(e) {
          for (
            var t = e.display, n = t.lineDiv.offsetTop, r = 0;
            r < t.view.length;
            r++
          ) {
            var i = t.view[r],
              o = e.options.lineWrapping,
              s = void 0,
              c = 0;
            if (!i.hidden) {
              if (a && l < 8) {
                var u = i.node.offsetTop + i.node.offsetHeight;
                (s = u - n), (n = u);
              } else {
                var d = i.node.getBoundingClientRect();
                (s = d.bottom - d.top),
                  !o &&
                    i.text.firstChild &&
                    (c =
                      i.text.firstChild.getBoundingClientRect().right -
                      d.left -
                      1);
              }
              var f = i.line.height - s;
              if (
                (f > 0.005 || f < -0.005) &&
                (Xe(i.line, s), Tr(i.line), i.rest)
              )
                for (var p = 0; p < i.rest.length; p++) Tr(i.rest[p]);
              if (c > e.display.sizerWidth) {
                var h = Math.ceil(c / ir(e.display));
                h > e.display.maxLineLength &&
                  ((e.display.maxLineLength = h),
                  (e.display.maxLine = i.line),
                  (e.display.maxLineChanged = !0));
              }
            }
          }
        }
        function Tr(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var n = e.widgets[t],
                r = n.node.parentNode;
              r && (n.height = r.offsetHeight);
            }
        }
        function Lr(e, t, n) {
          var r =
            n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
          r = Math.floor(r - _n(e));
          var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
            o = Ze(t, r),
            a = Ze(t, i);
          if (n && n.ensure) {
            var l = n.ensure.from.line,
              s = n.ensure.to.line;
            l < o
              ? ((o = l), (a = Ze(t, Ht(Ve(t, l)) + e.wrapper.clientHeight)))
              : Math.min(s, t.lastLine()) >= a &&
                ((o = Ze(t, Ht(Ve(t, s)) - e.wrapper.clientHeight)), (a = s));
          }
          return { from: o, to: Math.max(a, o + 1) };
        }
        function Or(e, t) {
          var n = e.display,
            r = rr(e.display);
          t.top < 0 && (t.top = 0);
          var i =
              e.curOp && null != e.curOp.scrollTop
                ? e.curOp.scrollTop
                : n.scroller.scrollTop,
            o = Ln(e),
            a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var l = e.doc.height + Cn(n),
            s = t.top < r,
            c = t.bottom > l - r;
          if (t.top < i) a.scrollTop = s ? 0 : t.top;
          else if (t.bottom > i + o) {
            var u = Math.min(t.top, (c ? l : t.bottom) - o);
            u != i && (a.scrollTop = u);
          }
          var d =
              e.curOp && null != e.curOp.scrollLeft
                ? e.curOp.scrollLeft
                : n.scroller.scrollLeft,
            f = Tn(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
            p = t.right - t.left > f;
          return (
            p && (t.right = t.left + f),
            t.left < 10
              ? (a.scrollLeft = 0)
              : t.left < d
              ? (a.scrollLeft = Math.max(0, t.left - (p ? 0 : 10)))
              : t.right > f + d - 3 &&
                (a.scrollLeft = t.right + (p ? 0 : 10) - f),
            a
          );
        }
        function Dr(e, t) {
          null != t &&
            (Nr(e),
            (e.curOp.scrollTop =
              (null == e.curOp.scrollTop
                ? e.doc.scrollTop
                : e.curOp.scrollTop) + t));
        }
        function Er(e) {
          Nr(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin,
          };
        }
        function Ar(e, t, n) {
          (null == t && null == n) || Nr(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n);
        }
        function Nr(e) {
          var t = e.curOp.scrollToPos;
          t &&
            ((e.curOp.scrollToPos = null),
            Fr(e, Gn(e, t.from), Gn(e, t.to), t.margin));
        }
        function Fr(e, t, n, r) {
          var i = Or(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r,
          });
          Ar(e, i.scrollLeft, i.scrollTop);
        }
        function zr(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 ||
            (n || li(e, { top: t }), jr(e, t, !0), n && li(e), ni(e, 100));
        }
        function jr(e, t, n) {
          (t = Math.min(
            e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
            t
          )),
            (e.display.scroller.scrollTop != t || n) &&
              ((e.doc.scrollTop = t),
              e.display.scrollbars.setScrollTop(t),
              e.display.scroller.scrollTop != t &&
                (e.display.scroller.scrollTop = t));
        }
        function Pr(e, t, n, r) {
          (t = Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )),
            ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
              !r) ||
              ((e.doc.scrollLeft = t),
              ui(e),
              e.display.scroller.scrollLeft != t &&
                (e.display.scroller.scrollLeft = t),
              e.display.scrollbars.setScrollLeft(t));
        }
        function Ir(e) {
          var t = e.display,
            n = t.gutters.offsetWidth,
            r = Math.round(e.doc.height + Cn(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Mn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n,
          };
        }
        var qr = function(e, t, n) {
          this.cm = n;
          var r = (this.vert = O(
              'div',
              [O('div', null, null, 'min-width: 1px')],
              'CodeMirror-vscrollbar'
            )),
            i = (this.horiz = O(
              'div',
              [O('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar'
            ));
          (r.tabIndex = i.tabIndex = -1),
            e(r),
            e(i),
            fe(r, 'scroll', function() {
              r.clientHeight && t(r.scrollTop, 'vertical');
            }),
            fe(i, 'scroll', function() {
              i.clientWidth && t(i.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            a &&
              l < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
        (qr.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            n = e.scrollHeight > e.clientHeight + 1,
            r = e.nativeBarWidth;
          if (n) {
            (this.vert.style.display = 'block'),
              (this.vert.style.bottom = t ? r + 'px' : '0');
            var i = e.viewHeight - (t ? r : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
          } else
            (this.vert.style.display = ''),
              (this.vert.firstChild.style.height = '0');
          if (t) {
            (this.horiz.style.display = 'block'),
              (this.horiz.style.right = n ? r + 'px' : '0'),
              (this.horiz.style.left = e.barLeft + 'px');
            var o = e.viewWidth - e.barLeft - (n ? r : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
          } else
            (this.horiz.style.display = ''),
              (this.horiz.firstChild.style.width = '0');
          return (
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: n ? r : 0, bottom: t ? r : 0 }
          );
        }),
          (qr.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz &&
                this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
          }),
          (qr.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert &&
                this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
          }),
          (qr.prototype.zeroWidthHack = function() {
            var e = y && !p ? '12px' : '18px';
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
                'none'),
              (this.disableHoriz = new q()),
              (this.disableVert = new q());
          }),
          (qr.prototype.enableZeroWidthBar = function(e, t, n) {
            (e.style.pointerEvents = 'auto'),
              t.set(1e3, function r() {
                var i = e.getBoundingClientRect();
                ('vert' == n
                  ? document.elementFromPoint(
                      i.right - 1,
                      (i.top + i.bottom) / 2
                    )
                  : document.elementFromPoint(
                      (i.right + i.left) / 2,
                      i.bottom - 1
                    )) != e
                  ? (e.style.pointerEvents = 'none')
                  : t.set(1e3, r);
              });
          }),
          (qr.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var Wr = function() {};
        function Br(e, t) {
          t || (t = Ir(e));
          var n = e.display.barWidth,
            r = e.display.barHeight;
          Rr(e, t);
          for (
            var i = 0;
            (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
            i++
          )
            n != e.display.barWidth && e.options.lineWrapping && Mr(e),
              Rr(e, Ir(e)),
              (n = e.display.barWidth),
              (r = e.display.barHeight);
        }
        function Rr(e, t) {
          var n = e.display,
            r = n.scrollbars.update(t);
          (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
            (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
            (n.heightForcer.style.borderBottom =
              r.bottom + 'px solid transparent'),
            r.right && r.bottom
              ? ((n.scrollbarFiller.style.display = 'block'),
                (n.scrollbarFiller.style.height = r.bottom + 'px'),
                (n.scrollbarFiller.style.width = r.right + 'px'))
              : (n.scrollbarFiller.style.display = ''),
            r.bottom &&
            e.options.coverGutterNextToScrollbar &&
            e.options.fixedGutter
              ? ((n.gutterFiller.style.display = 'block'),
                (n.gutterFiller.style.height = r.bottom + 'px'),
                (n.gutterFiller.style.width = t.gutterWidth + 'px'))
              : (n.gutterFiller.style.display = '');
        }
        (Wr.prototype.update = function() {
          return { bottom: 0, right: 0 };
        }),
          (Wr.prototype.setScrollLeft = function() {}),
          (Wr.prototype.setScrollTop = function() {}),
          (Wr.prototype.clear = function() {});
        var Hr = { native: qr, null: Wr };
        function Ur(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass &&
              M(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new Hr[e.options.scrollbarStyle](
              function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  fe(t, 'mousedown', function() {
                    e.state.focused &&
                      setTimeout(function() {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute('cm-not-content', 'true');
              },
              function(t, n) {
                'horizontal' == n ? Pr(e, t) : zr(e, t);
              },
              e
            )),
            e.display.scrollbars.addClass &&
              N(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var $r = 0;
        function Vr(e) {
          var t;
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++$r,
          }),
            (t = e.curOp),
            an
              ? an.ops.push(t)
              : (t.ownsGroup = an = { ops: [t], delayedCallbacks: [] });
        }
        function Kr(e) {
          var t = e.curOp;
          t &&
            (function(e, t) {
              var n = e.ownsGroup;
              if (n)
                try {
                  !(function(e) {
                    var t = e.delayedCallbacks,
                      n = 0;
                    do {
                      for (; n < t.length; n++) t[n].call(null);
                      for (var r = 0; r < e.ops.length; r++) {
                        var i = e.ops[r];
                        if (i.cursorActivityHandlers)
                          for (
                            ;
                            i.cursorActivityCalled <
                            i.cursorActivityHandlers.length;

                          )
                            i.cursorActivityHandlers[
                              i.cursorActivityCalled++
                            ].call(null, i.cm);
                      }
                    } while (n < t.length);
                  })(n);
                } finally {
                  (an = null), t(n);
                }
            })(t, function(e) {
              for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
              !(function(e) {
                for (var t = e.ops, n = 0; n < t.length; n++) Gr(t[n]);
                for (var r = 0; r < t.length; r++)
                  (i = t[r]).updatedDisplay =
                    i.mustUpdate && oi(i.cm, i.update);
                for (var i, o = 0; o < t.length; o++) Xr(t[o]);
                for (var a = 0; a < t.length; a++) Yr(t[a]);
                for (var l = 0; l < t.length; l++) Zr(t[l]);
              })(e);
            });
        }
        function Gr(e) {
          var t = e.cm,
            n = t.display;
          !(function(e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth =
                t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = Mn(e) + 'px'),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
              (t.sizer.style.borderRightWidth = Mn(e) + 'px'),
              (t.scrollbarsClipped = !0));
          })(t),
            e.updateMaxLine && $t(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < n.viewFrom ||
                  e.scrollToPos.to.line >= n.viewTo)) ||
              (n.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate &&
              new ii(
                t,
                e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                e.forceUpdate
              ));
        }
        function Xr(e) {
          var t = e.cm,
            n = t.display;
          e.updatedDisplay && Mr(t),
            (e.barMeasure = Ir(t)),
            n.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo =
                Dn(t, n.maxLine, n.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                n.scroller.clientWidth,
                n.sizer.offsetLeft +
                  e.adjustWidthTo +
                  Mn(t) +
                  t.display.barWidth
              )),
              (e.maxScrollLeft = Math.max(
                0,
                n.sizer.offsetLeft + e.adjustWidthTo - Tn(t)
              ))),
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = n.input.prepareSelection());
        }
        function Yr(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
            e.maxScrollLeft < t.doc.scrollLeft &&
              Pr(
                t,
                Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                !0
              ),
            (t.display.maxLineChanged = !1));
          var n = e.focus && e.focus == A();
          e.preparedSelection &&
            t.display.input.showSelection(e.preparedSelection, n),
            (e.updatedDisplay || e.startHeight != t.doc.height) &&
              Br(t, e.barMeasure),
            e.updatedDisplay && ci(t, e.barMeasure),
            e.selectionChanged && wr(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            n && kr(e.cm);
        }
        function Zr(e) {
          var t = e.cm,
            n = t.display,
            r = t.doc;
          e.updatedDisplay && ai(t, e.update),
            null == n.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (n.wheelStartX = n.wheelStartY = null),
            null != e.scrollTop && jr(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && Pr(t, e.scrollLeft, !0, !0),
            e.scrollToPos &&
              (function(e, t) {
                if (!ge(e, 'scrollCursorIntoView')) {
                  var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    i = null;
                  if (
                    (t.top + r.top < 0
                      ? (i = !0)
                      : t.bottom + r.top >
                          (window.innerHeight ||
                            document.documentElement.clientHeight) && (i = !1),
                    null != i && !h)
                  ) {
                    var o = O(
                      'div',
                      '\u200b',
                      null,
                      'position: absolute;\n                         top: ' +
                        (t.top - n.viewOffset - _n(e.display)) +
                        'px;\n                         height: ' +
                        (t.bottom - t.top + Mn(e) + n.barHeight) +
                        'px;\n                         left: ' +
                        t.left +
                        'px; width: ' +
                        Math.max(2, t.right - t.left) +
                        'px;'
                    );
                    e.display.lineSpace.appendChild(o),
                      o.scrollIntoView(i),
                      e.display.lineSpace.removeChild(o);
                  }
                }
              })(
                t,
                (function(e, t, n, r) {
                  var i;
                  null == r && (r = 0),
                    e.options.lineWrapping ||
                      t != n ||
                      (n =
                        'before' ==
                        (t = t.ch
                          ? et(
                              t.line,
                              'before' == t.sticky ? t.ch - 1 : t.ch,
                              'after'
                            )
                          : t).sticky
                          ? et(t.line, t.ch + 1, 'before')
                          : t);
                  for (var o = 0; o < 5; o++) {
                    var a = !1,
                      l = Kn(e, t),
                      s = n && n != t ? Kn(e, n) : l,
                      c = Or(
                        e,
                        (i = {
                          left: Math.min(l.left, s.left),
                          top: Math.min(l.top, s.top) - r,
                          right: Math.max(l.left, s.left),
                          bottom: Math.max(l.bottom, s.bottom) + r,
                        })
                      ),
                      u = e.doc.scrollTop,
                      d = e.doc.scrollLeft;
                    if (
                      (null != c.scrollTop &&
                        (zr(e, c.scrollTop),
                        Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                      null != c.scrollLeft &&
                        (Pr(e, c.scrollLeft),
                        Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                      !a)
                    )
                      break;
                  }
                  return i;
                })(
                  t,
                  lt(r, e.scrollToPos.from),
                  lt(r, e.scrollToPos.to),
                  e.scrollToPos.margin
                )
              );
          var i = e.maybeHiddenMarkers,
            o = e.maybeUnhiddenMarkers;
          if (i)
            for (var a = 0; a < i.length; ++a)
              i[a].lines.length || me(i[a], 'hide');
          if (o)
            for (var l = 0; l < o.length; ++l)
              o[l].lines.length && me(o[l], 'unhide');
          n.wrapper.offsetHeight &&
            (r.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && me(t, 'changes', t, e.changeObjs),
            e.update && e.update.finish();
        }
        function Qr(e, t) {
          if (e.curOp) return t();
          Vr(e);
          try {
            return t();
          } finally {
            Kr(e);
          }
        }
        function Jr(e, t) {
          return function() {
            if (e.curOp) return t.apply(e, arguments);
            Vr(e);
            try {
              return t.apply(e, arguments);
            } finally {
              Kr(e);
            }
          };
        }
        function ei(e) {
          return function() {
            if (this.curOp) return e.apply(this, arguments);
            Vr(this);
            try {
              return e.apply(this, arguments);
            } finally {
              Kr(this);
            }
          };
        }
        function ti(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Vr(t);
            try {
              return e.apply(this, arguments);
            } finally {
              Kr(t);
            }
          };
        }
        function ni(e, t) {
          e.doc.highlightFrontier < e.display.viewTo &&
            e.state.highlight.set(t, j(ri, e));
        }
        function ri(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date() + e.options.workTime,
              r = pt(e, t.highlightFrontier),
              i = [];
            t.iter(
              r.line,
              Math.min(t.first + t.size, e.display.viewTo + 500),
              function(o) {
                if (r.line >= e.display.viewFrom) {
                  var a = o.styles,
                    l =
                      o.text.length > e.options.maxHighlightLength
                        ? Re(t.mode, r.state)
                        : null,
                    s = dt(e, o, r, !0);
                  l && (r.state = l), (o.styles = s.styles);
                  var c = o.styleClasses,
                    u = s.classes;
                  u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                  for (
                    var d =
                        !a ||
                        a.length != o.styles.length ||
                        (c != u &&
                          (!c ||
                            !u ||
                            c.bgClass != u.bgClass ||
                            c.textClass != u.textClass)),
                      f = 0;
                    !d && f < a.length;
                    ++f
                  )
                    d = a[f] != o.styles[f];
                  d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                } else
                  o.text.length <= e.options.maxHighlightLength &&
                    ht(e, o.text, r),
                    (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                    r.nextLine();
                if (+new Date() > n) return ni(e, e.options.workDelay), !0;
              }
            ),
              (t.highlightFrontier = r.line),
              (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
              i.length &&
                Qr(e, function() {
                  for (var t = 0; t < i.length; t++) fr(e, i[t], 'text');
                });
          }
        }
        var ii = function(e, t, n) {
          var r = e.display;
          (this.viewport = t),
            (this.visible = Lr(r, e.doc, t)),
            (this.editorIsHidden = !r.wrapper.offsetWidth),
            (this.wrapperHeight = r.wrapper.clientHeight),
            (this.wrapperWidth = r.wrapper.clientWidth),
            (this.oldDisplayWidth = Tn(e)),
            (this.force = n),
            (this.dims = or(e)),
            (this.events = []);
        };
        function oi(e, t) {
          var n = e.display,
            r = e.doc;
          if (t.editorIsHidden) return pr(e), !1;
          if (
            !t.force &&
            t.visible.from >= n.viewFrom &&
            t.visible.to <= n.viewTo &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
            n.renderedView == n.view &&
            0 == mr(e)
          )
            return !1;
          di(e) && (pr(e), (t.dims = or(e)));
          var i = r.first + r.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
            a = Math.min(i, t.visible.to + e.options.viewportMargin);
          n.viewFrom < o &&
            o - n.viewFrom < 20 &&
            (o = Math.max(r.first, n.viewFrom)),
            n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
            kt && ((o = qt(e.doc, o)), (a = Wt(e.doc, a)));
          var l =
            o != n.viewFrom ||
            a != n.viewTo ||
            n.lastWrapHeight != t.wrapperHeight ||
            n.lastWrapWidth != t.wrapperWidth;
          !(function(e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
              ? ((r.view = on(e, t, n)), (r.viewFrom = t))
              : (r.viewFrom > t
                  ? (r.view = on(e, t, r.viewFrom).concat(r.view))
                  : r.viewFrom < t && (r.view = r.view.slice(ur(e, t))),
                (r.viewFrom = t),
                r.viewTo < n
                  ? (r.view = r.view.concat(on(e, r.viewTo, n)))
                  : r.viewTo > n && (r.view = r.view.slice(0, ur(e, n)))),
              (r.viewTo = n);
          })(e, o, a),
            (n.viewOffset = Ht(Ve(e.doc, n.viewFrom))),
            (e.display.mover.style.top = n.viewOffset + 'px');
          var c = mr(e);
          if (
            !l &&
            0 == c &&
            !t.force &&
            n.renderedView == n.view &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
          )
            return !1;
          var u = (function(e) {
            if (e.hasFocus()) return null;
            var t = A();
            if (!t || !E(e.display.lineDiv, t)) return null;
            var n = { activeElt: t };
            if (window.getSelection) {
              var r = window.getSelection();
              r.anchorNode &&
                r.extend &&
                E(e.display.lineDiv, r.anchorNode) &&
                ((n.anchorNode = r.anchorNode),
                (n.anchorOffset = r.anchorOffset),
                (n.focusNode = r.focusNode),
                (n.focusOffset = r.focusOffset));
            }
            return n;
          })(e);
          return (
            c > 4 && (n.lineDiv.style.display = 'none'),
            (function(e, t, n) {
              var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                a = o.firstChild;
              function l(t) {
                var n = t.nextSibling;
                return (
                  s && y && e.display.currentWheelTarget == t
                    ? (t.style.display = 'none')
                    : t.parentNode.removeChild(t),
                  n
                );
              }
              for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
                var f = c[d];
                if (f.hidden);
                else if (f.node && f.node.parentNode == o) {
                  for (; a != f.node; ) a = l(a);
                  var p = i && null != t && t <= u && f.lineNumber;
                  f.changes &&
                    (W(f.changes, 'gutter') > -1 && (p = !1), un(e, f, u, n)),
                    p &&
                      (T(f.lineNumber),
                      f.lineNumber.appendChild(
                        document.createTextNode(Je(e.options, u))
                      )),
                    (a = f.node.nextSibling);
                } else {
                  var h = vn(e, f, u, n);
                  o.insertBefore(h, a);
                }
                u += f.size;
              }
              for (; a; ) a = l(a);
            })(e, n.updateLineNumbers, t.dims),
            c > 4 && (n.lineDiv.style.display = ''),
            (n.renderedView = n.view),
            (function(e) {
              if (
                e &&
                e.activeElt &&
                e.activeElt != A() &&
                (e.activeElt.focus(),
                e.anchorNode &&
                  E(document.body, e.anchorNode) &&
                  E(document.body, e.focusNode))
              ) {
                var t = window.getSelection(),
                  n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset),
                  n.collapse(!1),
                  t.removeAllRanges(),
                  t.addRange(n),
                  t.extend(e.focusNode, e.focusOffset);
              }
            })(u),
            T(n.cursorDiv),
            T(n.selectionDiv),
            (n.gutters.style.height = n.sizer.style.minHeight = 0),
            l &&
              ((n.lastWrapHeight = t.wrapperHeight),
              (n.lastWrapWidth = t.wrapperWidth),
              ni(e, 400)),
            (n.updateLineNumbers = null),
            !0
          );
        }
        function ai(e, t) {
          for (
            var n = t.viewport, r = !0;
            ((r && e.options.lineWrapping && t.oldDisplayWidth != Tn(e)) ||
              (n &&
                null != n.top &&
                (n = {
                  top: Math.min(e.doc.height + Cn(e.display) - Ln(e), n.top),
                }),
              (t.visible = Lr(e.display, e.doc, n)),
              !(
                t.visible.from >= e.display.viewFrom &&
                t.visible.to <= e.display.viewTo
              ))) &&
            oi(e, t);
            r = !1
          ) {
            Mr(e);
            var i = Ir(e);
            gr(e), Br(e, i), ci(e, i), (t.force = !1);
          }
          t.signal(e, 'update', e),
            (e.display.viewFrom == e.display.reportedViewFrom &&
              e.display.viewTo == e.display.reportedViewTo) ||
              (t.signal(
                e,
                'viewportChange',
                e,
                e.display.viewFrom,
                e.display.viewTo
              ),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function li(e, t) {
          var n = new ii(e, t);
          if (oi(e, n)) {
            Mr(e), ai(e, n);
            var r = Ir(e);
            gr(e), Br(e, r), ci(e, r), n.finish();
          }
        }
        function si(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + 'px';
        }
        function ci(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + 'px'),
            (e.display.heightForcer.style.top = t.docHeight + 'px'),
            (e.display.gutters.style.height =
              t.docHeight + e.display.barHeight + Mn(e) + 'px');
        }
        function ui(e) {
          var t = e.display,
            n = t.view;
          if (
            t.alignWidgets ||
            (t.gutters.firstChild && e.options.fixedGutter)
          ) {
            for (
              var r = ar(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                i = t.gutters.offsetWidth,
                o = r + 'px',
                a = 0;
              a < n.length;
              a++
            )
              if (!n[a].hidden) {
                e.options.fixedGutter &&
                  (n[a].gutter && (n[a].gutter.style.left = o),
                  n[a].gutterBackground &&
                    (n[a].gutterBackground.style.left = o));
                var l = n[a].alignable;
                if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
              }
            e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
          }
        }
        function di(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            n = Je(e.options, t.first + t.size - 1),
            r = e.display;
          if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(
                O(
                  'div',
                  [O('div', n)],
                  'CodeMirror-linenumber CodeMirror-gutter-elt'
                )
              ),
              o = i.firstChild.offsetWidth,
              a = i.offsetWidth - o;
            return (
              (r.lineGutter.style.width = ''),
              (r.lineNumInnerWidth =
                Math.max(o, r.lineGutter.offsetWidth - a) + 1),
              (r.lineNumWidth = r.lineNumInnerWidth + a),
              (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
              (r.lineGutter.style.width = r.lineNumWidth + 'px'),
              si(e.display),
              !0
            );
          }
          return !1;
        }
        function fi(e, t) {
          for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i],
              a = null;
            if (
              ('string' != typeof o && ((a = o.style), (o = o.className)),
              'CodeMirror-linenumbers' == o)
            ) {
              if (!t) continue;
              r = !0;
            }
            n.push({ className: o, style: a });
          }
          return (
            t &&
              !r &&
              n.push({ className: 'CodeMirror-linenumbers', style: null }),
            n
          );
        }
        function pi(e) {
          var t = e.gutters,
            n = e.gutterSpecs;
          T(t), (e.lineGutter = null);
          for (var r = 0; r < n.length; ++r) {
            var i = n[r],
              o = i.className,
              a = i.style,
              l = t.appendChild(O('div', null, 'CodeMirror-gutter ' + o));
            a && (l.style.cssText = a),
              'CodeMirror-linenumbers' == o &&
                ((e.lineGutter = l),
                (l.style.width = (e.lineNumWidth || 1) + 'px'));
          }
          (t.style.display = n.length ? '' : 'none'), si(e);
        }
        function hi(e) {
          pi(e.display), dr(e), ui(e);
        }
        function mi(e, t, r, i) {
          var o = this;
          (this.input = r),
            (o.scrollbarFiller = O('div', null, 'CodeMirror-scrollbar-filler')),
            o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
            (o.gutterFiller = O('div', null, 'CodeMirror-gutter-filler')),
            o.gutterFiller.setAttribute('cm-not-content', 'true'),
            (o.lineDiv = D('div', null, 'CodeMirror-code')),
            (o.selectionDiv = O(
              'div',
              null,
              null,
              'position: relative; z-index: 1'
            )),
            (o.cursorDiv = O('div', null, 'CodeMirror-cursors')),
            (o.measure = O('div', null, 'CodeMirror-measure')),
            (o.lineMeasure = O('div', null, 'CodeMirror-measure')),
            (o.lineSpace = D(
              'div',
              [
                o.measure,
                o.lineMeasure,
                o.selectionDiv,
                o.cursorDiv,
                o.lineDiv,
              ],
              null,
              'position: relative; outline: none'
            ));
          var c = D('div', [o.lineSpace], 'CodeMirror-lines');
          (o.mover = O('div', [c], null, 'position: relative')),
            (o.sizer = O('div', [o.mover], 'CodeMirror-sizer')),
            (o.sizerWidth = null),
            (o.heightForcer = O(
              'div',
              null,
              null,
              'position: absolute; height: ' + B + 'px; width: 1px;'
            )),
            (o.gutters = O('div', null, 'CodeMirror-gutters')),
            (o.lineGutter = null),
            (o.scroller = O(
              'div',
              [o.sizer, o.heightForcer, o.gutters],
              'CodeMirror-scroll'
            )),
            o.scroller.setAttribute('tabIndex', '-1'),
            (o.wrapper = O(
              'div',
              [o.scrollbarFiller, o.gutterFiller, o.scroller],
              'CodeMirror'
            )),
            a &&
              l < 8 &&
              ((o.gutters.style.zIndex = -1),
              (o.scroller.style.paddingRight = 0)),
            s || (n && v) || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            (o.viewFrom = o.viewTo = t.first),
            (o.reportedViewFrom = o.reportedViewTo = t.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = fi(i.gutters, i.lineNumbers)),
            pi(o),
            r.init(o);
        }
        (ii.prototype.signal = function(e, t) {
          ye(e, t) && this.events.push(arguments);
        }),
          (ii.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++)
              me.apply(null, this.events[e]);
          });
        var gi = 0,
          vi = null;
        function yi(e) {
          var t = e.wheelDeltaX,
            n = e.wheelDeltaY;
          return (
            null == t &&
              e.detail &&
              e.axis == e.HORIZONTAL_AXIS &&
              (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS
              ? (n = e.detail)
              : null == n && (n = e.wheelDelta),
            { x: t, y: n }
          );
        }
        function bi(e) {
          var t = yi(e);
          return (t.x *= vi), (t.y *= vi), t;
        }
        function xi(e, t) {
          var r = yi(t),
            i = r.x,
            o = r.y,
            a = e.display,
            l = a.scroller,
            c = l.scrollWidth > l.clientWidth,
            u = l.scrollHeight > l.clientHeight;
          if ((i && c) || (o && u)) {
            if (o && y && s)
              e: for (var f = t.target, p = a.view; f != l; f = f.parentNode)
                for (var h = 0; h < p.length; h++)
                  if (p[h].node == f) {
                    e.display.currentWheelTarget = f;
                    break e;
                  }
            if (i && !n && !d && null != vi)
              return (
                o && u && zr(e, Math.max(0, l.scrollTop + o * vi)),
                Pr(e, Math.max(0, l.scrollLeft + i * vi)),
                (!o || (o && u)) && xe(t),
                void (a.wheelStartX = null)
              );
            if (o && null != vi) {
              var m = o * vi,
                g = e.doc.scrollTop,
                v = g + a.wrapper.clientHeight;
              m < 0
                ? (g = Math.max(0, g + m - 50))
                : (v = Math.min(e.doc.height, v + m + 50)),
                li(e, { top: g, bottom: v });
            }
            gi < 20 &&
              (null == a.wheelStartX
                ? ((a.wheelStartX = l.scrollLeft),
                  (a.wheelStartY = l.scrollTop),
                  (a.wheelDX = i),
                  (a.wheelDY = o),
                  setTimeout(function() {
                    if (null != a.wheelStartX) {
                      var e = l.scrollLeft - a.wheelStartX,
                        t = l.scrollTop - a.wheelStartY,
                        n =
                          (t && a.wheelDY && t / a.wheelDY) ||
                          (e && a.wheelDX && e / a.wheelDX);
                      (a.wheelStartX = a.wheelStartY = null),
                        n && ((vi = (vi * gi + n) / (gi + 1)), ++gi);
                    }
                  }, 200))
                : ((a.wheelDX += i), (a.wheelDY += o)));
          }
        }
        a ? (vi = -0.53) : n ? (vi = 15) : u ? (vi = -0.7) : f && (vi = -1 / 3);
        var wi = function(e, t) {
          (this.ranges = e), (this.primIndex = t);
        };
        (wi.prototype.primary = function() {
          return this.ranges[this.primIndex];
        }),
          (wi.prototype.equals = function(e) {
            if (e == this) return !0;
            if (
              e.primIndex != this.primIndex ||
              e.ranges.length != this.ranges.length
            )
              return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var n = this.ranges[t],
                r = e.ranges[t];
              if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1;
            }
            return !0;
          }),
          (wi.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new ki(rt(this.ranges[t].anchor), rt(this.ranges[t].head));
            return new wi(e, this.primIndex);
          }),
          (wi.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++)
              if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (wi.prototype.contains = function(e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
              var r = this.ranges[n];
              if (tt(t, r.from()) >= 0 && tt(e, r.to()) <= 0) return n;
            }
            return -1;
          });
        var ki = function(e, t) {
          (this.anchor = e), (this.head = t);
        };
        function _i(e, t, n) {
          var r = e && e.options.selectionsMayTouch,
            i = t[n];
          t.sort(function(e, t) {
            return tt(e.from(), t.from());
          }),
            (n = W(t, i));
          for (var o = 1; o < t.length; o++) {
            var a = t[o],
              l = t[o - 1],
              s = tt(l.to(), a.from());
            if (r && !a.empty() ? s > 0 : s >= 0) {
              var c = ot(l.from(), a.from()),
                u = it(l.to(), a.to()),
                d = l.empty() ? a.from() == a.head : l.from() == l.head;
              o <= n && --n, t.splice(--o, 2, new ki(d ? u : c, d ? c : u));
            }
          }
          return new wi(t, n);
        }
        function Ci(e, t) {
          return new wi([new ki(e, t || e)], 0);
        }
        function Si(e) {
          return e.text
            ? et(
                e.from.line + e.text.length - 1,
                X(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
        }
        function Mi(e, t) {
          if (tt(e, t.from) < 0) return e;
          if (tt(e, t.to) <= 0) return Si(t);
          var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            r = e.ch;
          return e.line == t.to.line && (r += Si(t).ch - t.to.ch), et(n, r);
        }
        function Ti(e, t) {
          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new ki(Mi(i.anchor, t), Mi(i.head, t)));
          }
          return _i(e.cm, n, e.sel.primIndex);
        }
        function Li(e, t, n) {
          return e.line == t.line
            ? et(n.line, e.ch - t.ch + n.ch)
            : et(n.line + (e.line - t.line), e.ch);
        }
        function Oi(e) {
          (e.doc.mode = qe(e.options, e.doc.modeOption)), Di(e);
        }
        function Di(e) {
          e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            ni(e, 100),
            e.state.modeGen++,
            e.curOp && dr(e);
        }
        function Ei(e, t) {
          return (
            0 == t.from.ch &&
            0 == t.to.ch &&
            '' == X(t.text) &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function Ai(e, t, n, r) {
          function i(e) {
            return n ? n[e] : null;
          }
          function o(e, n, i) {
            !(function(e, t, n, r) {
              (e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Lt(e),
                Ot(e, n);
              var i = r ? r(e) : 1;
              i != e.height && Xe(e, i);
            })(e, n, i, r),
              sn(e, 'change', e, t);
          }
          function a(e, t) {
            for (var n = [], o = e; o < t; ++o) n.push(new Vt(c[o], i(o), r));
            return n;
          }
          var l = t.from,
            s = t.to,
            c = t.text,
            u = Ve(e, l.line),
            d = Ve(e, s.line),
            f = X(c),
            p = i(c.length - 1),
            h = s.line - l.line;
          if (t.full)
            e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
          else if (Ei(e, t)) {
            var m = a(0, c.length - 1);
            o(d, d.text, p),
              h && e.remove(l.line, h),
              m.length && e.insert(l.line, m);
          } else if (u == d)
            if (1 == c.length)
              o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), p);
            else {
              var g = a(1, c.length - 1);
              g.push(new Vt(f + u.text.slice(s.ch), p, r)),
                o(u, u.text.slice(0, l.ch) + c[0], i(0)),
                e.insert(l.line + 1, g);
            }
          else if (1 == c.length)
            o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)),
              e.remove(l.line + 1, h);
          else {
            o(u, u.text.slice(0, l.ch) + c[0], i(0)),
              o(d, f + d.text.slice(s.ch), p);
            var v = a(1, c.length - 1);
            h > 1 && e.remove(l.line + 1, h - 1), e.insert(l.line + 1, v);
          }
          sn(e, 'change', e, t);
        }
        function Ni(e, t, n) {
          !(function e(r, i, o) {
            if (r.linked)
              for (var a = 0; a < r.linked.length; ++a) {
                var l = r.linked[a];
                if (l.doc != i) {
                  var s = o && l.sharedHist;
                  (n && !s) || (t(l.doc, s), e(l.doc, r, s));
                }
              }
          })(e, null, !0);
        }
        function Fi(e, t) {
          if (t.cm) throw new Error('This document is already in use.');
          (e.doc = t),
            (t.cm = e),
            sr(e),
            Oi(e),
            zi(e),
            e.options.lineWrapping || $t(e),
            (e.options.mode = t.modeOption),
            dr(e);
        }
        function zi(e) {
          ('rtl' == e.doc.direction ? N : M)(
            e.display.lineDiv,
            'CodeMirror-rtl'
          );
        }
        function ji(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e || 1);
        }
        function Pi(e, t) {
          var n = { from: rt(t.from), to: Si(t), text: Ke(e, t.from, t.to) };
          return (
            Ri(e, n, t.from.line, t.to.line + 1),
            Ni(
              e,
              function(e) {
                return Ri(e, n, t.from.line, t.to.line + 1);
              },
              !0
            ),
            n
          );
        }
        function Ii(e) {
          for (; e.length && X(e).ranges; ) e.pop();
        }
        function qi(e, t, n, r) {
          var i = e.history;
          i.undone.length = 0;
          var o,
            a,
            l = +new Date();
          if (
            (i.lastOp == r ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                (('+' == t.origin.charAt(0) &&
                  i.lastModTime >
                    l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  '*' == t.origin.charAt(0)))) &&
            (o = (function(e, t) {
              return t
                ? (Ii(e.done), X(e.done))
                : e.done.length && !X(e.done).ranges
                ? X(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                ? (e.done.pop(), X(e.done))
                : void 0;
            })(i, i.lastOp == r))
          )
            (a = X(o.changes)),
              0 == tt(t.from, t.to) && 0 == tt(t.from, a.to)
                ? (a.to = Si(t))
                : o.changes.push(Pi(e, t));
          else {
            var s = X(i.done);
            for (
              (s && s.ranges) || Bi(e.sel, i.done),
                o = { changes: [Pi(e, t)], generation: i.generation },
                i.done.push(o);
              i.done.length > i.undoDepth;

            )
              i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(n),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = l),
            (i.lastOp = i.lastSelOp = r),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            a || me(e, 'historyAdded');
        }
        function Wi(e, t, n, r) {
          var i = e.history,
            o = r && r.origin;
          n == i.lastSelOp ||
          (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
              (function(e, t, n, r) {
                var i = t.charAt(0);
                return (
                  '*' == i ||
                  ('+' == i &&
                    n.ranges.length == r.ranges.length &&
                    n.somethingSelected() == r.somethingSelected() &&
                    new Date() - e.history.lastSelTime <=
                      (e.cm ? e.cm.options.historyEventDelay : 500))
                );
              })(e, o, X(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : Bi(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = n),
            r && !1 !== r.clearRedo && Ii(i.undone);
        }
        function Bi(e, t) {
          var n = X(t);
          (n && n.ranges && n.equals(e)) || t.push(e);
        }
        function Ri(e, t, n, r) {
          var i = t['spans_' + e.id],
            o = 0;
          e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(
            n
          ) {
            n.markedSpans &&
              ((i || (i = t['spans_' + e.id] = {}))[o] = n.markedSpans),
              ++o;
          });
        }
        function Hi(e) {
          if (!e) return null;
          for (var t, n = 0; n < e.length; ++n)
            e[n].marker.explicitlyCleared
              ? t || (t = e.slice(0, n))
              : t && t.push(e[n]);
          return t ? (t.length ? t : null) : e;
        }
        function Ui(e, t) {
          var n = (function(e, t) {
              var n = t['spans_' + e.id];
              if (!n) return null;
              for (var r = [], i = 0; i < t.text.length; ++i) r.push(Hi(n[i]));
              return r;
            })(e, t),
            r = Mt(e, t);
          if (!n) return r;
          if (!r) return n;
          for (var i = 0; i < n.length; ++i) {
            var o = n[i],
              a = r[i];
            if (o && a)
              e: for (var l = 0; l < a.length; ++l) {
                for (var s = a[l], c = 0; c < o.length; ++c)
                  if (o[c].marker == s.marker) continue e;
                o.push(s);
              }
            else a && (n[i] = a);
          }
          return n;
        }
        function $i(e, t, n) {
          for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? wi.prototype.deepCopy.call(o) : o);
            else {
              var a = o.changes,
                l = [];
              r.push({ changes: l });
              for (var s = 0; s < a.length; ++s) {
                var c = a[s],
                  u = void 0;
                if ((l.push({ from: c.from, to: c.to, text: c.text }), t))
                  for (var d in c)
                    (u = d.match(/^spans_(\d+)$/)) &&
                      W(t, Number(u[1])) > -1 &&
                      ((X(l)[d] = c[d]), delete c[d]);
              }
            }
          }
          return r;
        }
        function Vi(e, t, n, r) {
          if (r) {
            var i = e.anchor;
            if (n) {
              var o = tt(t, i) < 0;
              o != tt(n, i) < 0
                ? ((i = t), (t = n))
                : o != tt(t, n) < 0 && (t = n);
            }
            return new ki(i, t);
          }
          return new ki(n || t, t);
        }
        function Ki(e, t, n, r, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Qi(e, new wi([Vi(e.sel.primary(), t, n, i)], 0), r);
        }
        function Gi(e, t, n) {
          for (
            var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
          )
            r[o] = Vi(e.sel.ranges[o], t[o], null, i);
          Qi(e, _i(e.cm, r, e.sel.primIndex), n);
        }
        function Xi(e, t, n, r) {
          var i = e.sel.ranges.slice(0);
          (i[t] = n), Qi(e, _i(e.cm, i, e.sel.primIndex), r);
        }
        function Yi(e, t, n, r) {
          Qi(e, Ci(t, n), r);
        }
        function Zi(e, t, n) {
          var r = e.history.done,
            i = X(r);
          i && i.ranges ? ((r[r.length - 1] = t), Ji(e, t, n)) : Qi(e, t, n);
        }
        function Qi(e, t, n) {
          Ji(e, t, n), Wi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }
        function Ji(e, t, n) {
          (ye(e, 'beforeSelectionChange') ||
            (e.cm && ye(e.cm, 'beforeSelectionChange'))) &&
            (t = (function(e, t, n) {
              var r = {
                ranges: t.ranges,
                update: function(t) {
                  this.ranges = [];
                  for (var n = 0; n < t.length; n++)
                    this.ranges[n] = new ki(
                      lt(e, t[n].anchor),
                      lt(e, t[n].head)
                    );
                },
                origin: n && n.origin,
              };
              return (
                me(e, 'beforeSelectionChange', e, r),
                e.cm && me(e.cm, 'beforeSelectionChange', e.cm, r),
                r.ranges != t.ranges
                  ? _i(e.cm, r.ranges, r.ranges.length - 1)
                  : t
              );
            })(e, t, n));
          var r =
            (n && n.bias) ||
            (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          eo(e, no(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || Er(e.cm);
        }
        function eo(e, t) {
          t.equals(e.sel) ||
            ((e.sel = t),
            e.cm &&
              ((e.cm.curOp.updateInput = 1),
              (e.cm.curOp.selectionChanged = !0),
              ve(e.cm)),
            sn(e, 'cursorActivity', e));
        }
        function to(e) {
          eo(e, no(e, e.sel, null, !1));
        }
        function no(e, t, n, r) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
              l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              s = io(e, a.anchor, l && l.anchor, n, r),
              c = io(e, a.head, l && l.head, n, r);
            (i || s != a.anchor || c != a.head) &&
              (i || (i = t.ranges.slice(0, o)), (i[o] = new ki(s, c)));
          }
          return i ? _i(e.cm, i, t.primIndex) : t;
        }
        function ro(e, t, n, r, i) {
          var o = Ve(e, t.line);
          if (o.markedSpans)
            for (var a = 0; a < o.markedSpans.length; ++a) {
              var l = o.markedSpans[a],
                s = l.marker,
                c = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
                u = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
              if (
                (null == l.from || (c ? l.from <= t.ch : l.from < t.ch)) &&
                (null == l.to || (u ? l.to >= t.ch : l.to > t.ch))
              ) {
                if (i && (me(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --a;
                    continue;
                  }
                  break;
                }
                if (!s.atomic) continue;
                if (n) {
                  var d = s.find(r < 0 ? 1 : -1),
                    f = void 0;
                  if (
                    ((r < 0 ? u : c) &&
                      (d = oo(e, d, -r, d && d.line == t.line ? o : null)),
                    d &&
                      d.line == t.line &&
                      (f = tt(d, n)) &&
                      (r < 0 ? f < 0 : f > 0))
                  )
                    return ro(e, d, t, r, i);
                }
                var p = s.find(r < 0 ? -1 : 1);
                return (
                  (r < 0 ? c : u) &&
                    (p = oo(e, p, r, p.line == t.line ? o : null)),
                  p ? ro(e, p, t, r, i) : null
                );
              }
            }
          return t;
        }
        function io(e, t, n, r, i) {
          var o = r || 1,
            a =
              ro(e, t, n, o, i) ||
              (!i && ro(e, t, n, o, !0)) ||
              ro(e, t, n, -o, i) ||
              (!i && ro(e, t, n, -o, !0));
          return a || ((e.cantEdit = !0), et(e.first, 0));
        }
        function oo(e, t, n, r) {
          return n < 0 && 0 == t.ch
            ? t.line > e.first
              ? lt(e, et(t.line - 1))
              : null
            : n > 0 && t.ch == (r || Ve(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? et(t.line + 1, 0)
              : null
            : new et(t.line, t.ch + n);
        }
        function ao(e) {
          e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), H);
        }
        function lo(e, t, n) {
          var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
              return (r.canceled = !0);
            },
          };
          return (
            n &&
              (r.update = function(t, n, i, o) {
                t && (r.from = lt(e, t)),
                  n && (r.to = lt(e, n)),
                  i && (r.text = i),
                  void 0 !== o && (r.origin = o);
              }),
            me(e, 'beforeChange', e, r),
            e.cm && me(e.cm, 'beforeChange', e.cm, r),
            r.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: r.from, to: r.to, text: r.text, origin: r.origin }
          );
        }
        function so(e, t, n) {
          if (e.cm) {
            if (!e.cm.curOp) return Jr(e.cm, so)(e, t, n);
            if (e.cm.state.suppressEdits) return;
          }
          if (
            !(ye(e, 'beforeChange') || (e.cm && ye(e.cm, 'beforeChange'))) ||
            (t = lo(e, t, !0))
          ) {
            var r =
              wt &&
              !n &&
              (function(e, t, n) {
                var r = null;
                if (
                  (e.iter(t.line, n.line + 1, function(e) {
                    if (e.markedSpans)
                      for (var t = 0; t < e.markedSpans.length; ++t) {
                        var n = e.markedSpans[t].marker;
                        !n.readOnly ||
                          (r && -1 != W(r, n)) ||
                          (r || (r = [])).push(n);
                      }
                  }),
                  !r)
                )
                  return null;
                for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                  for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!(tt(c.to, l.from) < 0 || tt(c.from, l.to) > 0)) {
                      var u = [s, 1],
                        d = tt(c.from, l.from),
                        f = tt(c.to, l.to);
                      (d < 0 || (!a.inclusiveLeft && !d)) &&
                        u.push({ from: c.from, to: l.from }),
                        (f > 0 || (!a.inclusiveRight && !f)) &&
                          u.push({ from: l.to, to: c.to }),
                        i.splice.apply(i, u),
                        (s += u.length - 3);
                    }
                  }
                return i;
              })(e, t.from, t.to);
            if (r)
              for (var i = r.length - 1; i >= 0; --i)
                co(e, {
                  from: r[i].from,
                  to: r[i].to,
                  text: i ? [''] : t.text,
                  origin: t.origin,
                });
            else co(e, t);
          }
        }
        function co(e, t) {
          if (1 != t.text.length || '' != t.text[0] || 0 != tt(t.from, t.to)) {
            var n = Ti(e, t);
            qi(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Mt(e, t));
            var r = [];
            Ni(e, function(e, n) {
              n ||
                -1 != W(r, e.history) ||
                (vo(e.history, t), r.push(e.history)),
                po(e, t, null, Mt(e, t));
            });
          }
        }
        function uo(e, t, n) {
          var r = e.cm && e.cm.state.suppressEdits;
          if (!r || n) {
            for (
              var i,
                o = e.history,
                a = e.sel,
                l = 'undo' == t ? o.done : o.undone,
                s = 'undo' == t ? o.undone : o.done,
                c = 0;
              c < l.length &&
              ((i = l[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
              c++
            );
            if (c != l.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (!(i = l.pop()).ranges) {
                  if (r) return void l.push(i);
                  break;
                }
                if ((Bi(i, s), n && !i.equals(e.sel)))
                  return void Qi(e, i, { clearRedo: !1 });
                a = i;
              }
              var u = [];
              Bi(a, s),
                s.push({ changes: u, generation: o.generation }),
                (o.generation = i.generation || ++o.maxGeneration);
              for (
                var d =
                    ye(e, 'beforeChange') || (e.cm && ye(e.cm, 'beforeChange')),
                  f = function(n) {
                    var r = i.changes[n];
                    if (((r.origin = t), d && !lo(e, r, !1)))
                      return (l.length = 0), {};
                    u.push(Pi(e, r));
                    var o = n ? Ti(e, r) : X(l);
                    po(e, r, o, Ui(e, r)),
                      !n &&
                        e.cm &&
                        e.cm.scrollIntoView({ from: r.from, to: Si(r) });
                    var a = [];
                    Ni(e, function(e, t) {
                      t ||
                        -1 != W(a, e.history) ||
                        (vo(e.history, r), a.push(e.history)),
                        po(e, r, null, Ui(e, r));
                    });
                  },
                  p = i.changes.length - 1;
                p >= 0;
                --p
              ) {
                var h = f(p);
                if (h) return h.v;
              }
            }
          }
        }
        function fo(e, t) {
          if (
            0 != t &&
            ((e.first += t),
            (e.sel = new wi(
              Y(e.sel.ranges, function(e) {
                return new ki(
                  et(e.anchor.line + t, e.anchor.ch),
                  et(e.head.line + t, e.head.ch)
                );
              }),
              e.sel.primIndex
            )),
            e.cm)
          ) {
            dr(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
              fr(e.cm, r, 'gutter');
          }
        }
        function po(e, t, n, r) {
          if (e.cm && !e.cm.curOp) return Jr(e.cm, po)(e, t, n, r);
          if (t.to.line < e.first)
            fo(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              fo(e, i),
                (t = {
                  from: et(e.first, 0),
                  to: et(t.to.line + i, t.to.ch),
                  text: [X(t.text)],
                  origin: t.origin,
                });
            }
            var o = e.lastLine();
            t.to.line > o &&
              (t = {
                from: t.from,
                to: et(o, Ve(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin,
              }),
              (t.removed = Ke(e, t.from, t.to)),
              n || (n = Ti(e, t)),
              e.cm
                ? (function(e, t, n) {
                    var r = e.doc,
                      i = e.display,
                      o = t.from,
                      a = t.to,
                      l = !1,
                      s = o.line;
                    e.options.lineWrapping ||
                      ((s = Ye(It(Ve(r, o.line)))),
                      r.iter(s, a.line + 1, function(e) {
                        if (e == i.maxLine) return (l = !0), !0;
                      })),
                      r.sel.contains(t.from, t.to) > -1 && ve(e),
                      Ai(r, t, n, lr(e)),
                      e.options.lineWrapping ||
                        (r.iter(s, o.line + t.text.length, function(e) {
                          var t = Ut(e);
                          t > i.maxLineLength &&
                            ((i.maxLine = e),
                            (i.maxLineLength = t),
                            (i.maxLineChanged = !0),
                            (l = !1));
                        }),
                        l && (e.curOp.updateMaxLine = !0)),
                      (function(e, t) {
                        if (
                          ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                          !(e.highlightFrontier < t - 10))
                        ) {
                          for (var n = e.first, r = t - 1; r > n; r--) {
                            var i = Ve(e, r).stateAfter;
                            if (
                              i &&
                              (!(i instanceof ct) || r + i.lookAhead < t)
                            ) {
                              n = r + 1;
                              break;
                            }
                          }
                          e.highlightFrontier = Math.min(
                            e.highlightFrontier,
                            n
                          );
                        }
                      })(r, o.line),
                      ni(e, 400);
                    var c = t.text.length - (a.line - o.line) - 1;
                    t.full
                      ? dr(e)
                      : o.line != a.line || 1 != t.text.length || Ei(e.doc, t)
                      ? dr(e, o.line, a.line + 1, c)
                      : fr(e, o.line, 'text');
                    var u = ye(e, 'changes'),
                      d = ye(e, 'change');
                    if (d || u) {
                      var f = {
                        from: o,
                        to: a,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin,
                      };
                      d && sn(e, 'change', e, f),
                        u &&
                          (
                            e.curOp.changeObjs || (e.curOp.changeObjs = [])
                          ).push(f);
                    }
                    e.display.selForContextMenu = null;
                  })(e.cm, t, r)
                : Ai(e, t, r),
              Ji(e, n, H),
              e.cantEdit && io(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }
        function ho(e, t, n, r, i) {
          var o;
          r || (r = n),
            tt(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
            'string' == typeof t && (t = e.splitLines(t)),
            so(e, { from: n, to: r, text: t, origin: i });
        }
        function mo(e, t, n, r) {
          n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function go(e, t, n, r) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              a = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var l = 0; l < o.ranges.length; l++)
                mo(o.ranges[l].anchor, t, n, r), mo(o.ranges[l].head, t, n, r);
            } else {
              for (var s = 0; s < o.changes.length; ++s) {
                var c = o.changes[s];
                if (n < c.from.line)
                  (c.from = et(c.from.line + r, c.from.ch)),
                    (c.to = et(c.to.line + r, c.to.ch));
                else if (t <= c.to.line) {
                  a = !1;
                  break;
                }
              }
              a || (e.splice(0, i + 1), (i = 0));
            }
          }
        }
        function vo(e, t) {
          var n = t.from.line,
            r = t.to.line,
            i = t.text.length - (r - n) - 1;
          go(e.done, n, r, i), go(e.undone, n, r, i);
        }
        function yo(e, t, n, r) {
          var i = t,
            o = t;
          return (
            'number' == typeof t ? (o = Ve(e, at(e, t))) : (i = Ye(t)),
            null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o)
          );
        }
        function bo(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, n = 0; n < e.length; ++n)
            (e[n].parent = this), (t += e[n].height);
          this.height = t;
        }
        function xo(e) {
          this.children = e;
          for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            (t += i.chunkSize()), (n += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = n), (this.parent = null);
        }
        (ki.prototype.from = function() {
          return ot(this.anchor, this.head);
        }),
          (ki.prototype.to = function() {
            return it(this.anchor, this.head);
          }),
          (ki.prototype.empty = function() {
            return (
              this.head.line == this.anchor.line &&
              this.head.ch == this.anchor.ch
            );
          }),
          (bo.prototype = {
            chunkSize: function() {
              return this.lines.length;
            },
            removeInner: function(e, t) {
              for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                (this.height -= i.height), Kt(i), sn(i, 'delete');
              }
              this.lines.splice(e, t);
            },
            collapse: function(e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function(e, t, n) {
              (this.height += n),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e)));
              for (var r = 0; r < t.length; ++r) t[r].parent = this;
            },
            iterN: function(e, t, n) {
              for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
            },
          }),
          (xo.prototype = {
            chunkSize: function() {
              return this.size;
            },
            removeInner: function(e, t) {
              this.size -= t;
              for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n],
                  i = r.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    a = r.height;
                  if (
                    (r.removeInner(e, o),
                    (this.height -= a - r.height),
                    i == o && (this.children.splice(n--, 1), (r.parent = null)),
                    0 == (t -= o))
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (
                this.size - t < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof bo))
              ) {
                var l = [];
                this.collapse(l),
                  (this.children = [new bo(l)]),
                  (this.children[0].parent = this);
              }
            },
            collapse: function(e) {
              for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e);
            },
            insertInner: function(e, t, n) {
              (this.size += t.length), (this.height += n);
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e <= o) {
                  if (
                    (i.insertInner(e, t, n), i.lines && i.lines.length > 50)
                  ) {
                    for (
                      var a = (i.lines.length % 25) + 25, l = a;
                      l < i.lines.length;

                    ) {
                      var s = new bo(i.lines.slice(l, (l += 25)));
                      (i.height -= s.height),
                        this.children.splice(++r, 0, s),
                        (s.parent = this);
                    }
                    (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function() {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = new xo(e.children.splice(e.children.length - 5, 5));
                  if (e.parent) {
                    (e.size -= t.size), (e.height -= t.height);
                    var n = W(e.parent.children, e);
                    e.parent.children.splice(n + 1, 0, t);
                  } else {
                    var r = new xo(e.children);
                    (r.parent = e), (e.children = [r, t]), (e = r);
                  }
                  t.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function(e, t, n) {
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e < o) {
                  var a = Math.min(t, o - e);
                  if (i.iterN(e, a, n)) return !0;
                  if (0 == (t -= a)) break;
                  e = 0;
                } else e -= o;
              }
            },
          });
        var wo = function(e, t, n) {
          if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
          (this.doc = e), (this.node = t);
        };
        function ko(e, t, n) {
          Ht(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
            Dr(e, n);
        }
        (wo.prototype.clear = function() {
          var e = this.doc.cm,
            t = this.line.widgets,
            n = this.line,
            r = Ye(n);
          if (null != r && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = wn(this);
            Xe(n, Math.max(0, n.height - o)),
              e &&
                (Qr(e, function() {
                  ko(e, n, -o), fr(e, r, 'widget');
                }),
                sn(e, 'lineWidgetCleared', e, this, r));
          }
        }),
          (wo.prototype.changed = function() {
            var e = this,
              t = this.height,
              n = this.doc.cm,
              r = this.line;
            this.height = null;
            var i = wn(this) - t;
            i &&
              (Bt(this.doc, r) || Xe(r, r.height + i),
              n &&
                Qr(n, function() {
                  (n.curOp.forceUpdate = !0),
                    ko(n, r, i),
                    sn(n, 'lineWidgetChanged', n, e, Ye(r));
                }));
          }),
          be(wo);
        var _o = 0,
          Co = function(e, t) {
            (this.lines = []),
              (this.type = t),
              (this.doc = e),
              (this.id = ++_o);
          };
        function So(e, t, n, r, i) {
          if (r && r.shared)
            return (function(e, t, n, r, i) {
              (r = P(r)).shared = !1;
              var o = [So(e, t, n, r, i)],
                a = o[0],
                l = r.widgetNode;
              return (
                Ni(e, function(e) {
                  l && (r.widgetNode = l.cloneNode(!0)),
                    o.push(So(e, lt(e, t), lt(e, n), r, i));
                  for (var s = 0; s < e.linked.length; ++s)
                    if (e.linked[s].isParent) return;
                  a = X(o);
                }),
                new Mo(o, a)
              );
            })(e, t, n, r, i);
          if (e.cm && !e.cm.curOp) return Jr(e.cm, So)(e, t, n, r, i);
          var o = new Co(e, i),
            a = tt(t, n);
          if ((r && P(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
            return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = D('span', [o.replacedWith], 'CodeMirror-widget')),
              r.handleMouseEvents ||
                o.widgetNode.setAttribute('cm-ignore-events', 'true'),
              r.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (
              Pt(e, t.line, t, n, o) ||
              (t.line != n.line && Pt(e, n.line, t, n, o))
            )
              throw new Error(
                'Inserting collapsed marker partially overlapping an existing one'
              );
            kt = !0;
          }
          o.addToHistory &&
            qi(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
          var l,
            s = t.line,
            c = e.cm;
          if (
            (e.iter(s, n.line + 1, function(e) {
              c &&
                o.collapsed &&
                !c.options.lineWrapping &&
                It(e) == c.display.maxLine &&
                (l = !0),
                o.collapsed && s != t.line && Xe(e, 0),
                (function(e, t) {
                  (e.markedSpans = e.markedSpans
                    ? e.markedSpans.concat([t])
                    : [t]),
                    t.marker.attachLine(e);
                })(
                  e,
                  new _t(
                    o,
                    s == t.line ? t.ch : null,
                    s == n.line ? n.ch : null
                  )
                ),
                ++s;
            }),
            o.collapsed &&
              e.iter(t.line, n.line + 1, function(t) {
                Bt(e, t) && Xe(t, 0);
              }),
            o.clearOnEnter &&
              fe(o, 'beforeCursorEnter', function() {
                return o.clear();
              }),
            o.readOnly &&
              ((wt = !0),
              (e.history.done.length || e.history.undone.length) &&
                e.clearHistory()),
            o.collapsed && ((o.id = ++_o), (o.atomic = !0)),
            c)
          ) {
            if ((l && (c.curOp.updateMaxLine = !0), o.collapsed))
              dr(c, t.line, n.line + 1);
            else if (
              o.className ||
              o.startStyle ||
              o.endStyle ||
              o.css ||
              o.attributes ||
              o.title
            )
              for (var u = t.line; u <= n.line; u++) fr(c, u, 'text');
            o.atomic && to(c.doc), sn(c, 'markerAdded', c, o);
          }
          return o;
        }
        (Co.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && Vr(e), ye(this, 'clear'))) {
              var n = this.find();
              n && sn(this, 'clear', n.from, n.to);
            }
            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
              var a = this.lines[o],
                l = Ct(a.markedSpans, this);
              e && !this.collapsed
                ? fr(e, Ye(a), 'text')
                : e &&
                  (null != l.to && (i = Ye(a)), null != l.from && (r = Ye(a))),
                (a.markedSpans = St(a.markedSpans, l)),
                null == l.from &&
                  this.collapsed &&
                  !Bt(this.doc, a) &&
                  e &&
                  Xe(a, rr(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var s = 0; s < this.lines.length; ++s) {
                var c = It(this.lines[s]),
                  u = Ut(c);
                u > e.display.maxLineLength &&
                  ((e.display.maxLine = c),
                  (e.display.maxLineLength = u),
                  (e.display.maxLineChanged = !0));
              }
            null != r && e && this.collapsed && dr(e, r, i + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic &&
                this.doc.cantEdit &&
                ((this.doc.cantEdit = !1), e && to(e.doc)),
              e && sn(e, 'markerCleared', e, this, r, i),
              t && Kr(e),
              this.parent && this.parent.clear();
          }
        }),
          (Co.prototype.find = function(e, t) {
            var n, r;
            null == e && 'bookmark' == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                a = Ct(o.markedSpans, this);
              if (null != a.from && ((n = et(t ? o : Ye(o), a.from)), -1 == e))
                return n;
              if (null != a.to && ((r = et(t ? o : Ye(o), a.to)), 1 == e))
                return r;
            }
            return n && { from: n, to: r };
          }),
          (Co.prototype.changed = function() {
            var e = this,
              t = this.find(-1, !0),
              n = this,
              r = this.doc.cm;
            t &&
              r &&
              Qr(r, function() {
                var i = t.line,
                  o = Ye(t.line),
                  a = En(r, o);
                if (
                  (a &&
                    (In(a),
                    (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                  (r.curOp.updateMaxLine = !0),
                  !Bt(n.doc, i) && null != n.height)
                ) {
                  var l = n.height;
                  n.height = null;
                  var s = wn(n) - l;
                  s && Xe(i, i.height + s);
                }
                sn(r, 'markerChanged', r, e);
              });
          }),
          (Co.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers && -1 != W(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                  this
                );
            }
            this.lines.push(e);
          }),
          (Co.prototype.detachLine = function(e) {
            if (
              (this.lines.splice(W(this.lines, e), 1),
              !this.lines.length && this.doc.cm)
            ) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          be(Co);
        var Mo = function(e, t) {
          (this.markers = e), (this.primary = t);
          for (var n = 0; n < e.length; ++n) e[n].parent = this;
        };
        function To(e) {
          return e.findMarks(
            et(e.first, 0),
            e.clipPos(et(e.lastLine())),
            function(e) {
              return e.parent;
            }
          );
        }
        function Lo(e) {
          for (
            var t = function(t) {
                var n = e[t],
                  r = [n.primary.doc];
                Ni(n.primary.doc, function(e) {
                  return r.push(e);
                });
                for (var i = 0; i < n.markers.length; i++) {
                  var o = n.markers[i];
                  -1 == W(r, o.doc) &&
                    ((o.parent = null), n.markers.splice(i--, 1));
                }
              },
              n = 0;
            n < e.length;
            n++
          )
            t(n);
        }
        (Mo.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
            sn(this, 'clear');
          }
        }),
          (Mo.prototype.find = function(e, t) {
            return this.primary.find(e, t);
          }),
          be(Mo);
        var Oo = 0,
          Do = function e(t, n, r, i, o) {
            if (!(this instanceof e)) return new e(t, n, r, i, o);
            null == r && (r = 0),
              xo.call(this, [new bo([new Vt('', null)])]),
              (this.first = r),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = r);
            var a = et(r, 0);
            (this.sel = Ci(a)),
              (this.history = new ji(null)),
              (this.id = ++Oo),
              (this.modeOption = n),
              (this.lineSep = i),
              (this.direction = 'rtl' == o ? 'rtl' : 'ltr'),
              (this.extend = !1),
              'string' == typeof t && (t = this.splitLines(t)),
              Ai(this, { from: a, to: a, text: t }),
              Qi(this, Ci(a), H);
          };
        (Do.prototype = Q(xo.prototype, {
          constructor: Do,
          iter: function(e, t, n) {
            n
              ? this.iterN(e - this.first, t - e, n)
              : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
            this.insertInner(e - this.first, t, n);
          },
          remove: function(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function(e) {
            var t = Ge(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: ti(function(e) {
            var t = et(this.first, 0),
              n = this.first + this.size - 1;
            so(
              this,
              {
                from: t,
                to: et(n, Ve(this, n).text.length),
                text: this.splitLines(e),
                origin: 'setValue',
                full: !0,
              },
              !0
            ),
              this.cm && Ar(this.cm, 0, 0),
              Qi(this, Ci(t), H);
          }),
          replaceRange: function(e, t, n, r) {
            ho(this, e, (t = lt(this, t)), (n = n ? lt(this, n) : t), r);
          },
          getRange: function(e, t, n) {
            var r = Ke(this, lt(this, e), lt(this, t));
            return !1 === n ? r : r.join(n || this.lineSeparator());
          },
          getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function(e) {
            if (Qe(this, e)) return Ve(this, e);
          },
          getLineNumber: function(e) {
            return Ye(e);
          },
          getLineHandleVisualStart: function(e) {
            return 'number' == typeof e && (e = Ve(this, e)), It(e);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(e) {
            return lt(this, e);
          },
          getCursor: function(e) {
            var t = this.sel.primary();
            return null == e || 'head' == e
              ? t.head
              : 'anchor' == e
              ? t.anchor
              : 'end' == e || 'to' == e || !1 === e
              ? t.to()
              : t.from();
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: ti(function(e, t, n) {
            Yi(
              this,
              lt(this, 'number' == typeof e ? et(e, t || 0) : e),
              null,
              n
            );
          }),
          setSelection: ti(function(e, t, n) {
            Yi(this, lt(this, e), lt(this, t || e), n);
          }),
          extendSelection: ti(function(e, t, n) {
            Ki(this, lt(this, e), t && lt(this, t), n);
          }),
          extendSelections: ti(function(e, t) {
            Gi(this, st(this, e), t);
          }),
          extendSelectionsBy: ti(function(e, t) {
            Gi(this, st(this, Y(this.sel.ranges, e)), t);
          }),
          setSelections: ti(function(e, t, n) {
            if (e.length) {
              for (var r = [], i = 0; i < e.length; i++)
                r[i] = new ki(lt(this, e[i].anchor), lt(this, e[i].head));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                Qi(this, _i(this.cm, r, t), n);
            }
          }),
          addSelection: ti(function(e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new ki(lt(this, e), lt(this, t || e))),
              Qi(this, _i(this.cm, r, r.length - 1), n);
          }),
          getSelection: function(e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Ke(this, n[r].from(), n[r].to());
              t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function(e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Ke(this, n[r].from(), n[r].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
            }
            return t;
          },
          replaceSelection: function(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
            this.replaceSelections(r, t, n || '+input');
          },
          replaceSelections: ti(function(e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              r[o] = {
                from: a.from(),
                to: a.to(),
                text: this.splitLines(e[o]),
                origin: n,
              };
            }
            for (
              var l =
                  t &&
                  'end' != t &&
                  (function(e, t, n) {
                    for (
                      var r = [], i = et(e.first, 0), o = i, a = 0;
                      a < t.length;
                      a++
                    ) {
                      var l = t[a],
                        s = Li(l.from, i, o),
                        c = Li(Si(l), i, o);
                      if (((i = l.to), (o = c), 'around' == n)) {
                        var u = e.sel.ranges[a],
                          d = tt(u.head, u.anchor) < 0;
                        r[a] = new ki(d ? c : s, d ? s : c);
                      } else r[a] = new ki(s, s);
                    }
                    return new wi(r, e.sel.primIndex);
                  })(this, r, t),
                s = r.length - 1;
              s >= 0;
              s--
            )
              so(this, r[s]);
            l ? Zi(this, l) : this.cm && Er(this.cm);
          }),
          undo: ti(function() {
            uo(this, 'undo');
          }),
          redo: ti(function() {
            uo(this, 'redo');
          }),
          undoSelection: ti(function() {
            uo(this, 'undo', !0);
          }),
          redoSelection: ti(function() {
            uo(this, 'redo', !0);
          }),
          setExtending: function(e) {
            this.extend = e;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            for (
              var e = this.history, t = 0, n = 0, r = 0;
              r < e.done.length;
              r++
            )
              e.done[r].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
            return { undo: t, redo: n };
          },
          clearHistory: function() {
            this.history = new ji(this.history.maxGeneration);
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function(e) {
            return (
              e &&
                (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
              this.history.generation
            );
          },
          isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function() {
            return {
              done: $i(this.history.done),
              undone: $i(this.history.undone),
            };
          },
          setHistory: function(e) {
            var t = (this.history = new ji(this.history.maxGeneration));
            (t.done = $i(e.done.slice(0), null, !0)),
              (t.undone = $i(e.undone.slice(0), null, !0));
          },
          setGutterMarker: ti(function(e, t, n) {
            return yo(this, e, 'gutter', function(e) {
              var r = e.gutterMarkers || (e.gutterMarkers = {});
              return (r[t] = n), !n && ne(r) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: ti(function(e) {
            var t = this;
            this.iter(function(n) {
              n.gutterMarkers &&
                n.gutterMarkers[e] &&
                yo(t, n, 'gutter', function() {
                  return (
                    (n.gutterMarkers[e] = null),
                    ne(n.gutterMarkers) && (n.gutterMarkers = null),
                    !0
                  );
                });
            });
          }),
          lineInfo: function(e) {
            var t;
            if ('number' == typeof e) {
              if (!Qe(this, e)) return null;
              if (((t = e), !(e = Ve(this, e)))) return null;
            } else if (null == (t = Ye(e))) return null;
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets,
            };
          },
          addLineClass: ti(function(e, t, n) {
            return yo(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var r =
                'text' == t
                  ? 'textClass'
                  : 'background' == t
                  ? 'bgClass'
                  : 'gutter' == t
                  ? 'gutterClass'
                  : 'wrapClass';
              if (e[r]) {
                if (C(n).test(e[r])) return !1;
                e[r] += ' ' + n;
              } else e[r] = n;
              return !0;
            });
          }),
          removeLineClass: ti(function(e, t, n) {
            return yo(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var r =
                  'text' == t
                    ? 'textClass'
                    : 'background' == t
                    ? 'bgClass'
                    : 'gutter' == t
                    ? 'gutterClass'
                    : 'wrapClass',
                i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;
              else {
                var o = i.match(C(n));
                if (!o) return !1;
                var a = o.index + o[0].length;
                e[r] =
                  i.slice(0, o.index) +
                    (o.index && a != i.length ? ' ' : '') +
                    i.slice(a) || null;
              }
              return !0;
            });
          }),
          addLineWidget: ti(function(e, t, n) {
            return (function(e, t, n, r) {
              var i = new wo(e, n, r),
                o = e.cm;
              return (
                o && i.noHScroll && (o.display.alignWidgets = !0),
                yo(e, t, 'widget', function(t) {
                  var n = t.widgets || (t.widgets = []);
                  if (
                    (null == i.insertAt
                      ? n.push(i)
                      : n.splice(
                          Math.min(n.length - 1, Math.max(0, i.insertAt)),
                          0,
                          i
                        ),
                    (i.line = t),
                    o && !Bt(e, t))
                  ) {
                    var r = Ht(t) < e.scrollTop;
                    Xe(t, t.height + wn(i)),
                      r && Dr(o, i.height),
                      (o.curOp.forceUpdate = !0);
                  }
                  return !0;
                }),
                o &&
                  sn(
                    o,
                    'lineWidgetAdded',
                    o,
                    i,
                    'number' == typeof t ? t : Ye(t)
                  ),
                i
              );
            })(this, e, t, n);
          }),
          removeLineWidget: function(e) {
            e.clear();
          },
          markText: function(e, t, n) {
            return So(
              this,
              lt(this, e),
              lt(this, t),
              n,
              (n && n.type) || 'range'
            );
          },
          setBookmark: function(e, t) {
            var n = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents,
            };
            return So(this, (e = lt(this, e)), e, n, 'bookmark');
          },
          findMarksAt: function(e) {
            var t = [],
              n = Ve(this, (e = lt(this, e)).line).markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r) {
                var i = n[r];
                (null == i.from || i.from <= e.ch) &&
                  (null == i.to || i.to >= e.ch) &&
                  t.push(i.marker.parent || i.marker);
              }
            return t;
          },
          findMarks: function(e, t, n) {
            (e = lt(this, e)), (t = lt(this, t));
            var r = [],
              i = e.line;
            return (
              this.iter(e.line, t.line + 1, function(o) {
                var a = o.markedSpans;
                if (a)
                  for (var l = 0; l < a.length; l++) {
                    var s = a[l];
                    (null != s.to && i == e.line && e.ch >= s.to) ||
                      (null == s.from && i != e.line) ||
                      (null != s.from && i == t.line && s.from >= t.ch) ||
                      (n && !n(s.marker)) ||
                      r.push(s.marker.parent || s.marker);
                  }
                ++i;
              }),
              r
            );
          },
          getAllMarks: function() {
            var e = [];
            return (
              this.iter(function(t) {
                var n = t.markedSpans;
                if (n)
                  for (var r = 0; r < n.length; ++r)
                    null != n[r].from && e.push(n[r].marker);
              }),
              e
            );
          },
          posFromIndex: function(e) {
            var t,
              n = this.first,
              r = this.lineSeparator().length;
            return (
              this.iter(function(i) {
                var o = i.text.length + r;
                if (o > e) return (t = e), !0;
                (e -= o), ++n;
              }),
              lt(this, et(n, t))
            );
          },
          indexFromPos: function(e) {
            var t = (e = lt(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return (
              this.iter(this.first, e.line, function(e) {
                t += e.text.length + n;
              }),
              t
            );
          },
          copy: function(e) {
            var t = new Do(
              Ge(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            return (
              (t.scrollTop = this.scrollTop),
              (t.scrollLeft = this.scrollLeft),
              (t.sel = this.sel),
              (t.extend = !1),
              e &&
                ((t.history.undoDepth = this.history.undoDepth),
                t.setHistory(this.getHistory())),
              t
            );
          },
          linkedDoc: function(e) {
            e || (e = {});
            var t = this.first,
              n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
              null != e.to && e.to < n && (n = e.to);
            var r = new Do(
              Ge(this, t, n),
              e.mode || this.modeOption,
              t,
              this.lineSep,
              this.direction
            );
            return (
              e.sharedHist && (r.history = this.history),
              (this.linked || (this.linked = [])).push({
                doc: r,
                sharedHist: e.sharedHist,
              }),
              (r.linked = [
                { doc: this, isParent: !0, sharedHist: e.sharedHist },
              ]),
              (function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);
                  if (tt(o, a)) {
                    var l = So(e, o, a, r.primary, r.primary.type);
                    r.markers.push(l), (l.parent = r);
                  }
                }
              })(r, To(this)),
              r
            );
          },
          unlinkDoc: function(e) {
            if ((e instanceof Ma && (e = e.doc), this.linked))
              for (var t = 0; t < this.linked.length; ++t)
                if (this.linked[t].doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), Lo(To(this));
                  break;
                }
            if (e.history == this.history) {
              var n = [e.id];
              Ni(
                e,
                function(e) {
                  return n.push(e.id);
                },
                !0
              ),
                (e.history = new ji(null)),
                (e.history.done = $i(this.history.done, n)),
                (e.history.undone = $i(this.history.undone, n));
            }
          },
          iterLinkedDocs: function(e) {
            Ni(this, e);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : Ee(e);
          },
          lineSeparator: function() {
            return this.lineSep || '\n';
          },
          setDirection: ti(function(e) {
            var t;
            'rtl' != e && (e = 'ltr'),
              e != this.direction &&
                ((this.direction = e),
                this.iter(function(e) {
                  return (e.order = null);
                }),
                this.cm &&
                  Qr((t = this.cm), function() {
                    zi(t), dr(t);
                  }));
          }),
        })),
          (Do.prototype.eachLine = Do.prototype.iter);
        var Eo = 0;
        function Ao(e) {
          var t = this;
          if ((No(t), !ge(t, e) && !kn(t.display, e))) {
            xe(e), a && (Eo = +new Date());
            var n = cr(t, e, !0),
              r = e.dataTransfer.files;
            if (n && !t.isReadOnly())
              if (r && r.length && window.FileReader && window.File)
                for (
                  var i = r.length,
                    o = Array(i),
                    l = 0,
                    s = function(e, r) {
                      if (
                        !t.options.allowDropFileTypes ||
                        -1 != W(t.options.allowDropFileTypes, e.type)
                      ) {
                        var a = new FileReader();
                        (a.onload = Jr(t, function() {
                          var e = a.result;
                          if (
                            (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ''),
                            (o[r] = e),
                            ++l == i)
                          ) {
                            var s = {
                              from: (n = lt(t.doc, n)),
                              to: n,
                              text: t.doc.splitLines(
                                o.join(t.doc.lineSeparator())
                              ),
                              origin: 'paste',
                            };
                            so(t.doc, s), Zi(t.doc, Ci(n, Si(s)));
                          }
                        })),
                          a.readAsText(e);
                      }
                    },
                    c = 0;
                  c < i;
                  ++c
                )
                  s(r[c], c);
              else {
                if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                  return (
                    t.state.draggingText(e),
                    void setTimeout(function() {
                      return t.display.input.focus();
                    }, 20)
                  );
                try {
                  var u = e.dataTransfer.getData('Text');
                  if (u) {
                    var d;
                    if (
                      (t.state.draggingText &&
                        !t.state.draggingText.copy &&
                        (d = t.listSelections()),
                      Ji(t.doc, Ci(n, n)),
                      d)
                    )
                      for (var f = 0; f < d.length; ++f)
                        ho(t.doc, '', d[f].anchor, d[f].head, 'drag');
                    t.replaceSelection(u, 'around', 'paste'),
                      t.display.input.focus();
                  }
                } catch (e) {}
              }
          }
        }
        function No(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor),
            (e.display.dragCursor = null));
        }
        function Fo(e) {
          if (document.getElementsByClassName) {
            for (
              var t = document.getElementsByClassName('CodeMirror'),
                n = [],
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].CodeMirror;
              i && n.push(i);
            }
            n.length &&
              n[0].operation(function() {
                for (var t = 0; t < n.length; t++) e(n[t]);
              });
          }
        }
        var zo = !1;
        function jo() {
          zo ||
            ((function() {
              var e;
              fe(window, 'resize', function() {
                null == e &&
                  (e = setTimeout(function() {
                    (e = null), Fo(Po);
                  }, 100));
              }),
                fe(window, 'blur', function() {
                  return Fo(Sr);
                });
            })(),
            (zo = !0));
        }
        function Po(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
        }
        for (
          var Io = {
              3: 'Pause',
              8: 'Backspace',
              9: 'Tab',
              13: 'Enter',
              16: 'Shift',
              17: 'Ctrl',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Esc',
              32: 'Space',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'Left',
              38: 'Up',
              39: 'Right',
              40: 'Down',
              44: 'PrintScrn',
              45: 'Insert',
              46: 'Delete',
              59: ';',
              61: '=',
              91: 'Mod',
              92: 'Mod',
              93: 'Mod',
              106: '*',
              107: '=',
              109: '-',
              110: '.',
              111: '/',
              145: 'ScrollLock',
              173: '-',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: "'",
              63232: 'Up',
              63233: 'Down',
              63234: 'Left',
              63235: 'Right',
              63272: 'Delete',
              63273: 'Home',
              63275: 'End',
              63276: 'PageUp',
              63277: 'PageDown',
              63302: 'Insert',
            },
            qo = 0;
          qo < 10;
          qo++
        )
          Io[qo + 48] = Io[qo + 96] = String(qo);
        for (var Wo = 65; Wo <= 90; Wo++) Io[Wo] = String.fromCharCode(Wo);
        for (var Bo = 1; Bo <= 12; Bo++)
          Io[Bo + 111] = Io[Bo + 63235] = 'F' + Bo;
        var Ro = {};
        function Ho(e) {
          var t,
            n,
            r,
            i,
            o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var a = 0; a < o.length - 1; a++) {
            var l = o[a];
            if (/^(cmd|meta|m)$/i.test(l)) i = !0;
            else if (/^a(lt)?$/i.test(l)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
            else {
              if (!/^s(hift)?$/i.test(l))
                throw new Error('Unrecognized modifier name: ' + l);
              r = !0;
            }
          }
          return (
            t && (e = 'Alt-' + e),
            n && (e = 'Ctrl-' + e),
            i && (e = 'Cmd-' + e),
            r && (e = 'Shift-' + e),
            e
          );
        }
        function Uo(e) {
          var t = {};
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
              if ('...' == r) {
                delete e[n];
                continue;
              }
              for (var i = Y(n.split(' '), Ho), o = 0; o < i.length; o++) {
                var a = void 0,
                  l = void 0;
                o == i.length - 1
                  ? ((l = i.join(' ')), (a = r))
                  : ((l = i.slice(0, o + 1).join(' ')), (a = '...'));
                var s = t[l];
                if (s) {
                  if (s != a) throw new Error('Inconsistent bindings for ' + l);
                } else t[l] = a;
              }
              delete e[n];
            }
          for (var c in t) e[c] = t[c];
          return e;
        }
        function $o(e, t, n, r) {
          var i = (t = Xo(t)).call ? t.call(e, r) : t[e];
          if (!1 === i) return 'nothing';
          if ('...' === i) return 'multi';
          if (null != i && n(i)) return 'handled';
          if (t.fallthrough) {
            if (
              '[object Array]' != Object.prototype.toString.call(t.fallthrough)
            )
              return $o(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = $o(e, t.fallthrough[o], n, r);
              if (a) return a;
            }
          }
        }
        function Vo(e) {
          var t = 'string' == typeof e ? e : Io[e.keyCode];
          return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
        }
        function Ko(e, t, n) {
          var r = e;
          return (
            t.altKey && 'Alt' != r && (e = 'Alt-' + e),
            (k ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
            (k ? t.ctrlKey : t.metaKey) && 'Cmd' != r && (e = 'Cmd-' + e),
            !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
            e
          );
        }
        function Go(e, t) {
          if (d && 34 == e.keyCode && e.char) return !1;
          var n = Io[e.keyCode];
          return (
            null != n &&
            !e.altGraphKey &&
            (3 == e.keyCode && e.code && (n = e.code), Ko(n, e, t))
          );
        }
        function Xo(e) {
          return 'string' == typeof e ? Ro[e] : e;
        }
        function Yo(e, t) {
          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && tt(o.from, X(r).to) <= 0; ) {
              var a = r.pop();
              if (tt(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }
            r.push(o);
          }
          Qr(e, function() {
            for (var t = r.length - 1; t >= 0; t--)
              ho(e.doc, '', r[t].from, r[t].to, '+delete');
            Er(e);
          });
        }
        function Zo(e, t, n) {
          var r = oe(e.text, t + n, n);
          return r < 0 || r > e.text.length ? null : r;
        }
        function Qo(e, t, n) {
          var r = Zo(e, t.ch, n);
          return null == r
            ? null
            : new et(t.line, r, n < 0 ? 'after' : 'before');
        }
        function Jo(e, t, n, r, i) {
          if (e) {
            var o = ue(n, t.doc.direction);
            if (o) {
              var a,
                l = i < 0 ? X(o) : o[0],
                s = i < 0 == (1 == l.level) ? 'after' : 'before';
              if (l.level > 0 || 'rtl' == t.doc.direction) {
                var c = An(t, n);
                a = i < 0 ? n.text.length - 1 : 0;
                var u = Nn(t, c, a).top;
                (a = ae(
                  function(e) {
                    return Nn(t, c, e).top == u;
                  },
                  i < 0 == (1 == l.level) ? l.from : l.to - 1,
                  a
                )),
                  'before' == s && (a = Zo(n, a, 1));
              } else a = i < 0 ? l.to : l.from;
              return new et(r, a, s);
            }
          }
          return new et(
            r,
            i < 0 ? n.text.length : 0,
            i < 0 ? 'before' : 'after'
          );
        }
        (Ro.basic = {
          Left: 'goCharLeft',
          Right: 'goCharRight',
          Up: 'goLineUp',
          Down: 'goLineDown',
          End: 'goLineEnd',
          Home: 'goLineStartSmart',
          PageUp: 'goPageUp',
          PageDown: 'goPageDown',
          Delete: 'delCharAfter',
          Backspace: 'delCharBefore',
          'Shift-Backspace': 'delCharBefore',
          Tab: 'defaultTab',
          'Shift-Tab': 'indentAuto',
          Enter: 'newlineAndIndent',
          Insert: 'toggleOverwrite',
          Esc: 'singleSelection',
        }),
          (Ro.pcDefault = {
            'Ctrl-A': 'selectAll',
            'Ctrl-D': 'deleteLine',
            'Ctrl-Z': 'undo',
            'Shift-Ctrl-Z': 'redo',
            'Ctrl-Y': 'redo',
            'Ctrl-Home': 'goDocStart',
            'Ctrl-End': 'goDocEnd',
            'Ctrl-Up': 'goLineUp',
            'Ctrl-Down': 'goLineDown',
            'Ctrl-Left': 'goGroupLeft',
            'Ctrl-Right': 'goGroupRight',
            'Alt-Left': 'goLineStart',
            'Alt-Right': 'goLineEnd',
            'Ctrl-Backspace': 'delGroupBefore',
            'Ctrl-Delete': 'delGroupAfter',
            'Ctrl-S': 'save',
            'Ctrl-F': 'find',
            'Ctrl-G': 'findNext',
            'Shift-Ctrl-G': 'findPrev',
            'Shift-Ctrl-F': 'replace',
            'Shift-Ctrl-R': 'replaceAll',
            'Ctrl-[': 'indentLess',
            'Ctrl-]': 'indentMore',
            'Ctrl-U': 'undoSelection',
            'Shift-Ctrl-U': 'redoSelection',
            'Alt-U': 'redoSelection',
            fallthrough: 'basic',
          }),
          (Ro.emacsy = {
            'Ctrl-F': 'goCharRight',
            'Ctrl-B': 'goCharLeft',
            'Ctrl-P': 'goLineUp',
            'Ctrl-N': 'goLineDown',
            'Alt-F': 'goWordRight',
            'Alt-B': 'goWordLeft',
            'Ctrl-A': 'goLineStart',
            'Ctrl-E': 'goLineEnd',
            'Ctrl-V': 'goPageDown',
            'Shift-Ctrl-V': 'goPageUp',
            'Ctrl-D': 'delCharAfter',
            'Ctrl-H': 'delCharBefore',
            'Alt-D': 'delWordAfter',
            'Alt-Backspace': 'delWordBefore',
            'Ctrl-K': 'killLine',
            'Ctrl-T': 'transposeChars',
            'Ctrl-O': 'openLine',
          }),
          (Ro.macDefault = {
            'Cmd-A': 'selectAll',
            'Cmd-D': 'deleteLine',
            'Cmd-Z': 'undo',
            'Shift-Cmd-Z': 'redo',
            'Cmd-Y': 'redo',
            'Cmd-Home': 'goDocStart',
            'Cmd-Up': 'goDocStart',
            'Cmd-End': 'goDocEnd',
            'Cmd-Down': 'goDocEnd',
            'Alt-Left': 'goGroupLeft',
            'Alt-Right': 'goGroupRight',
            'Cmd-Left': 'goLineLeft',
            'Cmd-Right': 'goLineRight',
            'Alt-Backspace': 'delGroupBefore',
            'Ctrl-Alt-Backspace': 'delGroupAfter',
            'Alt-Delete': 'delGroupAfter',
            'Cmd-S': 'save',
            'Cmd-F': 'find',
            'Cmd-G': 'findNext',
            'Shift-Cmd-G': 'findPrev',
            'Cmd-Alt-F': 'replace',
            'Shift-Cmd-Alt-F': 'replaceAll',
            'Cmd-[': 'indentLess',
            'Cmd-]': 'indentMore',
            'Cmd-Backspace': 'delWrappedLineLeft',
            'Cmd-Delete': 'delWrappedLineRight',
            'Cmd-U': 'undoSelection',
            'Shift-Cmd-U': 'redoSelection',
            'Ctrl-Up': 'goDocStart',
            'Ctrl-Down': 'goDocEnd',
            fallthrough: ['basic', 'emacsy'],
          }),
          (Ro.default = y ? Ro.macDefault : Ro.pcDefault);
        var ea = {
          selectAll: ao,
          singleSelection: function(e) {
            return e.setSelection(
              e.getCursor('anchor'),
              e.getCursor('head'),
              H
            );
          },
          killLine: function(e) {
            return Yo(e, function(t) {
              if (t.empty()) {
                var n = Ve(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine()
                  ? { from: t.head, to: et(t.head.line + 1, 0) }
                  : { from: t.head, to: et(t.head.line, n) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function(e) {
            return Yo(e, function(t) {
              return {
                from: et(t.from().line, 0),
                to: lt(e.doc, et(t.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function(e) {
            return Yo(e, function(e) {
              return { from: et(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function(e) {
            return Yo(e, function(t) {
              var n = e.charCoords(t.head, 'div').top + 5;
              return {
                from: e.coordsChar({ left: 0, top: n }, 'div'),
                to: t.from(),
              };
            });
          },
          delWrappedLineRight: function(e) {
            return Yo(e, function(t) {
              var n = e.charCoords(t.head, 'div').top + 5,
                r = e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: n },
                  'div'
                );
              return { from: t.from(), to: r };
            });
          },
          undo: function(e) {
            return e.undo();
          },
          redo: function(e) {
            return e.redo();
          },
          undoSelection: function(e) {
            return e.undoSelection();
          },
          redoSelection: function(e) {
            return e.redoSelection();
          },
          goDocStart: function(e) {
            return e.extendSelection(et(e.firstLine(), 0));
          },
          goDocEnd: function(e) {
            return e.extendSelection(et(e.lastLine()));
          },
          goLineStart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return ta(e, t.head.line);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineStartSmart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return na(e, t.head);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineEnd: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return (function(e, t) {
                  var n = Ve(e.doc, t),
                    r = (function(e) {
                      for (var t; (t = zt(e)); ) e = t.find(1, !0).line;
                      return e;
                    })(n);
                  return r != n && (t = Ye(r)), Jo(!0, e, n, t, -1);
                })(e, t.head.line);
              },
              { origin: '+move', bias: -1 }
            );
          },
          goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: n },
                'div'
              );
            }, $);
          },
          goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: 0, top: n }, 'div');
            }, $);
          },
          goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5,
                r = e.coordsChar({ left: 0, top: n }, 'div');
              return r.ch < e.getLine(r.line).search(/\S/) ? na(e, t.head) : r;
            }, $);
          },
          goLineUp: function(e) {
            return e.moveV(-1, 'line');
          },
          goLineDown: function(e) {
            return e.moveV(1, 'line');
          },
          goPageUp: function(e) {
            return e.moveV(-1, 'page');
          },
          goPageDown: function(e) {
            return e.moveV(1, 'page');
          },
          goCharLeft: function(e) {
            return e.moveH(-1, 'char');
          },
          goCharRight: function(e) {
            return e.moveH(1, 'char');
          },
          goColumnLeft: function(e) {
            return e.moveH(-1, 'column');
          },
          goColumnRight: function(e) {
            return e.moveH(1, 'column');
          },
          goWordLeft: function(e) {
            return e.moveH(-1, 'word');
          },
          goGroupRight: function(e) {
            return e.moveH(1, 'group');
          },
          goGroupLeft: function(e) {
            return e.moveH(-1, 'group');
          },
          goWordRight: function(e) {
            return e.moveH(1, 'word');
          },
          delCharBefore: function(e) {
            return e.deleteH(-1, 'char');
          },
          delCharAfter: function(e) {
            return e.deleteH(1, 'char');
          },
          delWordBefore: function(e) {
            return e.deleteH(-1, 'word');
          },
          delWordAfter: function(e) {
            return e.deleteH(1, 'word');
          },
          delGroupBefore: function(e) {
            return e.deleteH(-1, 'group');
          },
          delGroupAfter: function(e) {
            return e.deleteH(1, 'group');
          },
          indentAuto: function(e) {
            return e.indentSelection('smart');
          },
          indentMore: function(e) {
            return e.indentSelection('add');
          },
          indentLess: function(e) {
            return e.indentSelection('subtract');
          },
          insertTab: function(e) {
            return e.replaceSelection('\t');
          },
          insertSoftTab: function(e) {
            for (
              var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i].from(),
                a = I(e.getLine(o.line), o.ch, r);
              t.push(G(r - (a % r)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function(e) {
            e.somethingSelected()
              ? e.indentSelection('add')
              : e.execCommand('insertTab');
          },
          transposeChars: function(e) {
            return Qr(e, function() {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                if (t[r].empty()) {
                  var i = t[r].head,
                    o = Ve(e.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new et(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new et(i.line, i.ch + 1)),
                        e.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          et(i.line, i.ch - 2),
                          i,
                          '+transpose'
                        );
                    else if (i.line > e.doc.first) {
                      var a = Ve(e.doc, i.line - 1).text;
                      a &&
                        ((i = new et(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) +
                            e.doc.lineSeparator() +
                            a.charAt(a.length - 1),
                          et(i.line - 1, a.length - 1),
                          i,
                          '+transpose'
                        ));
                    }
                  n.push(new ki(i, i));
                }
              e.setSelections(n);
            });
          },
          newlineAndIndent: function(e) {
            return Qr(e, function() {
              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                e.replaceRange(
                  e.doc.lineSeparator(),
                  t[n].anchor,
                  t[n].head,
                  '+input'
                );
              t = e.listSelections();
              for (var r = 0; r < t.length; r++)
                e.indentLine(t[r].from().line, null, !0);
              Er(e);
            });
          },
          openLine: function(e) {
            return e.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function(e) {
            return e.toggleOverwrite();
          },
        };
        function ta(e, t) {
          var n = Ve(e.doc, t),
            r = It(n);
          return r != n && (t = Ye(r)), Jo(!0, e, r, t, 1);
        }
        function na(e, t) {
          var n = ta(e, t.line),
            r = Ve(e.doc, n.line),
            i = ue(r, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(0, r.text.search(/\S/)),
              a = t.line == n.line && t.ch <= o && t.ch;
            return et(n.line, a ? 0 : o, n.sticky);
          }
          return n;
        }
        function ra(e, t, n) {
          if ('string' == typeof t && !(t = ea[t])) return !1;
          e.display.input.ensurePolled();
          var r = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
              n && (e.display.shift = !1),
              (i = t(e) != R);
          } finally {
            (e.display.shift = r), (e.state.suppressEdits = !1);
          }
          return i;
        }
        var ia = new q();
        function oa(e, t, n, r) {
          var i = e.state.keySeq;
          if (i) {
            if (Vo(t)) return 'handled';
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : ia.set(50, function() {
                    e.state.keySeq == i &&
                      ((e.state.keySeq = null), e.display.input.reset());
                  }),
              aa(e, i + ' ' + t, n, r))
            )
              return !0;
          }
          return aa(e, t, n, r);
        }
        function aa(e, t, n, r) {
          var i = (function(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = $o(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }
            return (
              (e.options.extraKeys && $o(t, e.options.extraKeys, n, e)) ||
              $o(t, e.options.keyMap, n, e)
            );
          })(e, t, r);
          return (
            'multi' == i && (e.state.keySeq = t),
            'handled' == i && sn(e, 'keyHandled', e, t, n),
            ('handled' != i && 'multi' != i) || (xe(n), wr(e)),
            !!i
          );
        }
        function la(e, t) {
          var n = Go(t, !0);
          return (
            !!n &&
            (t.shiftKey && !e.state.keySeq
              ? oa(e, 'Shift-' + n, t, function(t) {
                  return ra(e, t, !0);
                }) ||
                oa(e, n, t, function(t) {
                  if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                    return ra(e, t);
                })
              : oa(e, n, t, function(t) {
                  return ra(e, t);
                }))
          );
        }
        var sa = null;
        function ca(e) {
          var t = this;
          if (((t.curOp.focus = A()), !ge(t, e))) {
            a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var r = la(t, e);
            d &&
              ((sa = r ? n : null),
              !r &&
                88 == n &&
                !Ne &&
                (y ? e.metaKey : e.ctrlKey) &&
                t.replaceSelection('', null, 'cut')),
              18 != n ||
                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                (function(e) {
                  var t = e.display.lineDiv;
                  function n(e) {
                    (18 != e.keyCode && e.altKey) ||
                      (M(t, 'CodeMirror-crosshair'),
                      he(document, 'keyup', n),
                      he(document, 'mouseover', n));
                  }
                  N(t, 'CodeMirror-crosshair'),
                    fe(document, 'keyup', n),
                    fe(document, 'mouseover', n);
                })(t);
          }
        }
        function ua(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
        }
        function da(e) {
          var t = this;
          if (
            !(
              kn(t.display, e) ||
              ge(t, e) ||
              (e.ctrlKey && !e.altKey) ||
              (y && e.metaKey)
            )
          ) {
            var n = e.keyCode,
              r = e.charCode;
            if (d && n == sa) return (sa = null), void xe(e);
            if (!d || (e.which && !(e.which < 10)) || !la(t, e)) {
              var i = String.fromCharCode(null == r ? n : r);
              '\b' != i &&
                ((function(e, t, n) {
                  return oa(e, "'" + n + "'", t, function(t) {
                    return ra(e, t, !0);
                  });
                })(t, e, i) ||
                  t.display.input.onKeyPress(e));
            }
          }
        }
        var fa,
          pa,
          ha = function(e, t, n) {
            (this.time = e), (this.pos = t), (this.button = n);
          };
        function ma(e) {
          var t = this,
            n = t.display;
          if (!(ge(t, e) || (n.activeTouch && n.input.supportsTouch())))
            if ((n.input.ensurePolled(), (n.shift = e.shiftKey), kn(n, e)))
              s ||
                ((n.scroller.draggable = !1),
                setTimeout(function() {
                  return (n.scroller.draggable = !0);
                }, 100));
            else if (!ya(t, e)) {
              var r = cr(t, e),
                i = Se(e),
                o = r
                  ? (function(e, t) {
                      var n = +new Date();
                      return pa && pa.compare(n, e, t)
                        ? ((fa = pa = null), 'triple')
                        : fa && fa.compare(n, e, t)
                        ? ((pa = new ha(n, e, t)), (fa = null), 'double')
                        : ((fa = new ha(n, e, t)), (pa = null), 'single');
                    })(r, i)
                  : 'single';
              window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                (r &&
                  (function(e, t, n, r, i) {
                    var o = 'Click';
                    return (
                      'double' == r
                        ? (o = 'Double' + o)
                        : 'triple' == r && (o = 'Triple' + o),
                      oa(
                        e,
                        Ko(
                          (o =
                            (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') +
                            o),
                          i
                        ),
                        i,
                        function(t) {
                          if (('string' == typeof t && (t = ea[t]), !t))
                            return !1;
                          var r = !1;
                          try {
                            e.isReadOnly() && (e.state.suppressEdits = !0),
                              (r = t(e, n) != R);
                          } finally {
                            e.state.suppressEdits = !1;
                          }
                          return r;
                        }
                      )
                    );
                  })(t, i, r, o, e)) ||
                  (1 == i
                    ? r
                      ? (function(e, t, n, r) {
                          a ? setTimeout(j(kr, e), 0) : (e.curOp.focus = A());
                          var i,
                            o = (function(e, t, n) {
                              var r = e.getOption('configureMouse'),
                                i = r ? r(e, t, n) : {};
                              if (null == i.unit) {
                                var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = o
                                  ? 'rectangle'
                                  : 'single' == t
                                  ? 'char'
                                  : 'double' == t
                                  ? 'word'
                                  : 'line';
                              }
                              return (
                                (null == i.extend || e.doc.extend) &&
                                  (i.extend = e.doc.extend || n.shiftKey),
                                null == i.addNew &&
                                  (i.addNew = y ? n.metaKey : n.ctrlKey),
                                null == i.moveOnDrag &&
                                  (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                                i
                              );
                            })(e, n, r),
                            c = e.doc.sel;
                          e.options.dragDrop &&
                          Le &&
                          !e.isReadOnly() &&
                          'single' == n &&
                          (i = c.contains(t)) > -1 &&
                          (tt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                          (tt(i.to(), t) > 0 || t.xRel < 0)
                            ? (function(e, t, n, r) {
                                var i = e.display,
                                  o = !1,
                                  c = Jr(e, function(t) {
                                    s && (i.scroller.draggable = !1),
                                      (e.state.draggingText = !1),
                                      he(i.wrapper.ownerDocument, 'mouseup', c),
                                      he(
                                        i.wrapper.ownerDocument,
                                        'mousemove',
                                        u
                                      ),
                                      he(i.scroller, 'dragstart', d),
                                      he(i.scroller, 'drop', c),
                                      o ||
                                        (xe(t),
                                        r.addNew ||
                                          Ki(e.doc, n, null, null, r.extend),
                                        s || (a && 9 == l)
                                          ? setTimeout(function() {
                                              i.wrapper.ownerDocument.body.focus(),
                                                i.input.focus();
                                            }, 20)
                                          : i.input.focus());
                                  }),
                                  u = function(e) {
                                    o =
                                      o ||
                                      Math.abs(t.clientX - e.clientX) +
                                        Math.abs(t.clientY - e.clientY) >=
                                        10;
                                  },
                                  d = function() {
                                    return (o = !0);
                                  };
                                s && (i.scroller.draggable = !0),
                                  (e.state.draggingText = c),
                                  (c.copy = !r.moveOnDrag),
                                  i.scroller.dragDrop && i.scroller.dragDrop(),
                                  fe(i.wrapper.ownerDocument, 'mouseup', c),
                                  fe(i.wrapper.ownerDocument, 'mousemove', u),
                                  fe(i.scroller, 'dragstart', d),
                                  fe(i.scroller, 'drop', c),
                                  _r(e),
                                  setTimeout(function() {
                                    return i.input.focus();
                                  }, 20);
                              })(e, r, t, o)
                            : (function(e, t, n, r) {
                                var i = e.display,
                                  o = e.doc;
                                xe(t);
                                var a,
                                  l,
                                  s = o.sel,
                                  c = s.ranges;
                                if (
                                  (r.addNew && !r.extend
                                    ? ((l = o.sel.contains(n)),
                                      (a = l > -1 ? c[l] : new ki(n, n)))
                                    : ((a = o.sel.primary()),
                                      (l = o.sel.primIndex)),
                                  'rectangle' == r.unit)
                                )
                                  r.addNew || (a = new ki(n, n)),
                                    (n = cr(e, t, !0, !0)),
                                    (l = -1);
                                else {
                                  var u = ga(e, n, r.unit);
                                  a = r.extend
                                    ? Vi(a, u.anchor, u.head, r.extend)
                                    : u;
                                }
                                r.addNew
                                  ? -1 == l
                                    ? ((l = c.length),
                                      Qi(o, _i(e, c.concat([a]), l), {
                                        scroll: !1,
                                        origin: '*mouse',
                                      }))
                                    : c.length > 1 &&
                                      c[l].empty() &&
                                      'char' == r.unit &&
                                      !r.extend
                                    ? (Qi(
                                        o,
                                        _i(
                                          e,
                                          c.slice(0, l).concat(c.slice(l + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: '*mouse' }
                                      ),
                                      (s = o.sel))
                                    : Xi(o, l, a, U)
                                  : ((l = 0),
                                    Qi(o, new wi([a], 0), U),
                                    (s = o.sel));
                                var d = n;
                                function f(t) {
                                  if (0 != tt(d, t))
                                    if (((d = t), 'rectangle' == r.unit)) {
                                      for (
                                        var i = [],
                                          c = e.options.tabSize,
                                          u = I(Ve(o, n.line).text, n.ch, c),
                                          f = I(Ve(o, t.line).text, t.ch, c),
                                          p = Math.min(u, f),
                                          h = Math.max(u, f),
                                          m = Math.min(n.line, t.line),
                                          g = Math.min(
                                            e.lastLine(),
                                            Math.max(n.line, t.line)
                                          );
                                        m <= g;
                                        m++
                                      ) {
                                        var v = Ve(o, m).text,
                                          y = V(v, p, c);
                                        p == h
                                          ? i.push(new ki(et(m, y), et(m, y)))
                                          : v.length > y &&
                                            i.push(
                                              new ki(
                                                et(m, y),
                                                et(m, V(v, h, c))
                                              )
                                            );
                                      }
                                      i.length || i.push(new ki(n, n)),
                                        Qi(
                                          o,
                                          _i(
                                            e,
                                            s.ranges.slice(0, l).concat(i),
                                            l
                                          ),
                                          { origin: '*mouse', scroll: !1 }
                                        ),
                                        e.scrollIntoView(t);
                                    } else {
                                      var b,
                                        x = a,
                                        w = ga(e, t, r.unit),
                                        k = x.anchor;
                                      tt(w.anchor, k) > 0
                                        ? ((b = w.head),
                                          (k = ot(x.from(), w.anchor)))
                                        : ((b = w.anchor),
                                          (k = it(x.to(), w.head)));
                                      var _ = s.ranges.slice(0);
                                      (_[l] = (function(e, t) {
                                        var n = t.anchor,
                                          r = t.head,
                                          i = Ve(e.doc, n.line);
                                        if (
                                          0 == tt(n, r) &&
                                          n.sticky == r.sticky
                                        )
                                          return t;
                                        var o = ue(i);
                                        if (!o) return t;
                                        var a = se(o, n.ch, n.sticky),
                                          l = o[a];
                                        if (l.from != n.ch && l.to != n.ch)
                                          return t;
                                        var s,
                                          c =
                                            a +
                                            ((l.from == n.ch) == (1 != l.level)
                                              ? 0
                                              : 1);
                                        if (0 == c || c == o.length) return t;
                                        if (r.line != n.line)
                                          s =
                                            (r.line - n.line) *
                                              ('ltr' == e.doc.direction
                                                ? 1
                                                : -1) >
                                            0;
                                        else {
                                          var u = se(o, r.ch, r.sticky),
                                            d =
                                              u - a ||
                                              (r.ch - n.ch) *
                                                (1 == l.level ? -1 : 1);
                                          s =
                                            u == c - 1 || u == c
                                              ? d < 0
                                              : d > 0;
                                        }
                                        var f = o[c + (s ? -1 : 0)],
                                          p = s == (1 == f.level),
                                          h = p ? f.from : f.to,
                                          m = p ? 'after' : 'before';
                                        return n.ch == h && n.sticky == m
                                          ? t
                                          : new ki(new et(n.line, h, m), r);
                                      })(e, new ki(lt(o, k), b))),
                                        Qi(o, _i(e, _, l), U);
                                    }
                                }
                                var p = i.wrapper.getBoundingClientRect(),
                                  h = 0;
                                function m(t) {
                                  (e.state.selectingText = !1),
                                    (h = 1 / 0),
                                    t && (xe(t), i.input.focus()),
                                    he(i.wrapper.ownerDocument, 'mousemove', g),
                                    he(i.wrapper.ownerDocument, 'mouseup', v),
                                    (o.history.lastSelOrigin = null);
                                }
                                var g = Jr(e, function(t) {
                                    0 !== t.buttons && Se(t)
                                      ? (function t(n) {
                                          var a = ++h,
                                            l = cr(
                                              e,
                                              n,
                                              !0,
                                              'rectangle' == r.unit
                                            );
                                          if (l)
                                            if (0 != tt(l, d)) {
                                              (e.curOp.focus = A()), f(l);
                                              var s = Lr(i, o);
                                              (l.line >= s.to ||
                                                l.line < s.from) &&
                                                setTimeout(
                                                  Jr(e, function() {
                                                    h == a && t(n);
                                                  }),
                                                  150
                                                );
                                            } else {
                                              var c =
                                                n.clientY < p.top
                                                  ? -20
                                                  : n.clientY > p.bottom
                                                  ? 20
                                                  : 0;
                                              c &&
                                                setTimeout(
                                                  Jr(e, function() {
                                                    h == a &&
                                                      ((i.scroller.scrollTop += c),
                                                      t(n));
                                                  }),
                                                  50
                                                );
                                            }
                                        })(t)
                                      : m(t);
                                  }),
                                  v = Jr(e, m);
                                (e.state.selectingText = v),
                                  fe(i.wrapper.ownerDocument, 'mousemove', g),
                                  fe(i.wrapper.ownerDocument, 'mouseup', v);
                              })(e, r, t, o);
                        })(t, r, o, e)
                      : Ce(e) == n.scroller && xe(e)
                    : 2 == i
                    ? (r && Ki(t.doc, r),
                      setTimeout(function() {
                        return n.input.focus();
                      }, 20))
                    : 3 == i && (_ ? t.display.input.onContextMenu(e) : _r(t)));
            }
        }
        function ga(e, t, n) {
          if ('char' == n) return new ki(t, t);
          if ('word' == n) return e.findWordAt(t);
          if ('line' == n)
            return new ki(et(t.line, 0), lt(e.doc, et(t.line + 1, 0)));
          var r = n(e, t);
          return new ki(r.from, r.to);
        }
        function va(e, t, n, r) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (t) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
          r && xe(t);
          var a = e.display,
            l = a.lineDiv.getBoundingClientRect();
          if (o > l.bottom || !ye(e, n)) return ke(t);
          o -= l.top - a.viewOffset;
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var c = a.gutters.childNodes[s];
            if (c && c.getBoundingClientRect().right >= i)
              return (
                me(
                  e,
                  n,
                  e,
                  Ze(e.doc, o),
                  e.display.gutterSpecs[s].className,
                  t
                ),
                ke(t)
              );
          }
        }
        function ya(e, t) {
          return va(e, t, 'gutterClick', !0);
        }
        function ba(e, t) {
          kn(e.display, t) ||
            (function(e, t) {
              return (
                !!ye(e, 'gutterContextMenu') &&
                va(e, t, 'gutterContextMenu', !1)
              );
            })(e, t) ||
            ge(e, t, 'contextmenu') ||
            _ ||
            e.display.input.onContextMenu(t);
        }
        function xa(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
            e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
            Wn(e);
        }
        ha.prototype.compare = function(e, t, n) {
          return (
            this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button
          );
        };
        var wa = {
            toString: function() {
              return 'CodeMirror.Init';
            },
          },
          ka = {},
          _a = {};
        function Ca(e, t, n) {
          if (!t != !(n && n != wa)) {
            var r = e.display.dragFunctions,
              i = t ? fe : he;
            i(e.display.scroller, 'dragstart', r.start),
              i(e.display.scroller, 'dragenter', r.enter),
              i(e.display.scroller, 'dragover', r.over),
              i(e.display.scroller, 'dragleave', r.leave),
              i(e.display.scroller, 'drop', r.drop);
          }
        }
        function Sa(e) {
          e.options.lineWrapping
            ? (N(e.display.wrapper, 'CodeMirror-wrap'),
              (e.display.sizer.style.minWidth = ''),
              (e.display.sizerWidth = null))
            : (M(e.display.wrapper, 'CodeMirror-wrap'), $t(e)),
            sr(e),
            dr(e),
            Wn(e),
            setTimeout(function() {
              return Br(e);
            }, 100);
        }
        function Ma(e, t) {
          var n = this;
          if (!(this instanceof Ma)) return new Ma(e, t);
          (this.options = t = t ? P(t) : {}), P(ka, t, !1);
          var r = t.value;
          'string' == typeof r
            ? (r = new Do(r, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (r.modeOption = t.mode),
            (this.doc = r);
          var i = new Ma.inputStyles[t.inputStyle](this),
            o = (this.display = new mi(e, r, i, t));
          for (var c in ((o.wrapper.CodeMirror = this),
          xa(this),
          t.lineWrapping &&
            (this.display.wrapper.className += ' CodeMirror-wrap'),
          Ur(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new q(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && o.input.focus(),
          a &&
            l < 11 &&
            setTimeout(function() {
              return n.display.input.reset(!0);
            }, 20),
          (function(e) {
            var t = e.display;
            fe(t.scroller, 'mousedown', Jr(e, ma)),
              fe(
                t.scroller,
                'dblclick',
                a && l < 11
                  ? Jr(e, function(t) {
                      if (!ge(e, t)) {
                        var n = cr(e, t);
                        if (n && !ya(e, t) && !kn(e.display, t)) {
                          xe(t);
                          var r = e.findWordAt(n);
                          Ki(e.doc, r.anchor, r.head);
                        }
                      }
                    })
                  : function(t) {
                      return ge(e, t) || xe(t);
                    }
              ),
              fe(t.scroller, 'contextmenu', function(t) {
                return ba(e, t);
              });
            var n,
              r = { end: 0 };
            function i() {
              t.activeTouch &&
                ((n = setTimeout(function() {
                  return (t.activeTouch = null);
                }, 1e3)),
                ((r = t.activeTouch).end = +new Date()));
            }
            function o(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                r = t.top - e.top;
              return n * n + r * r > 400;
            }
            fe(t.scroller, 'touchstart', function(i) {
              if (
                !ge(e, i) &&
                !(function(e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(i) &&
                !ya(e, i)
              ) {
                t.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                (t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - r.end <= 300 ? r : null,
                }),
                  1 == i.touches.length &&
                    ((t.activeTouch.left = i.touches[0].pageX),
                    (t.activeTouch.top = i.touches[0].pageY));
              }
            }),
              fe(t.scroller, 'touchmove', function() {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              fe(t.scroller, 'touchend', function(n) {
                var r = t.activeTouch;
                if (
                  r &&
                  !kn(t, n) &&
                  null != r.left &&
                  !r.moved &&
                  new Date() - r.start < 300
                ) {
                  var a,
                    l = e.coordsChar(t.activeTouch, 'page');
                  (a =
                    !r.prev || o(r, r.prev)
                      ? new ki(l, l)
                      : !r.prev.prev || o(r, r.prev.prev)
                      ? e.findWordAt(l)
                      : new ki(et(l.line, 0), lt(e.doc, et(l.line + 1, 0)))),
                    e.setSelection(a.anchor, a.head),
                    e.focus(),
                    xe(n);
                }
                i();
              }),
              fe(t.scroller, 'touchcancel', i),
              fe(t.scroller, 'scroll', function() {
                t.scroller.clientHeight &&
                  (zr(e, t.scroller.scrollTop),
                  Pr(e, t.scroller.scrollLeft, !0),
                  me(e, 'scroll', e));
              }),
              fe(t.scroller, 'mousewheel', function(t) {
                return xi(e, t);
              }),
              fe(t.scroller, 'DOMMouseScroll', function(t) {
                return xi(e, t);
              }),
              fe(t.wrapper, 'scroll', function() {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function(t) {
                  ge(e, t) || _e(t);
                },
                over: function(t) {
                  ge(e, t) ||
                    ((function(e, t) {
                      var n = cr(e, t);
                      if (n) {
                        var r = document.createDocumentFragment();
                        yr(e, n, r),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = O(
                              'div',
                              null,
                              'CodeMirror-cursors CodeMirror-dragcursors'
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv
                            )),
                          L(e.display.dragCursor, r);
                      }
                    })(e, t),
                    _e(t));
                },
                start: function(t) {
                  return (function(e, t) {
                    if (a && (!e.state.draggingText || +new Date() - Eo < 100))
                      _e(t);
                    else if (
                      !ge(e, t) &&
                      !kn(e.display, t) &&
                      (t.dataTransfer.setData('Text', e.getSelection()),
                      (t.dataTransfer.effectAllowed = 'copyMove'),
                      t.dataTransfer.setDragImage && !f)
                    ) {
                      var n = O(
                        'img',
                        null,
                        null,
                        'position: fixed; left: 0; top: 0;'
                      );
                      (n.src =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        d &&
                          ((n.width = n.height = 1),
                          e.display.wrapper.appendChild(n),
                          (n._top = n.offsetTop)),
                        t.dataTransfer.setDragImage(n, 0, 0),
                        d && n.parentNode.removeChild(n);
                    }
                  })(e, t);
                },
                drop: Jr(e, Ao),
                leave: function(t) {
                  ge(e, t) || No(e);
                },
              });
            var s = t.input.getField();
            fe(s, 'keyup', function(t) {
              return ua.call(e, t);
            }),
              fe(s, 'keydown', Jr(e, ca)),
              fe(s, 'keypress', Jr(e, da)),
              fe(s, 'focus', function(t) {
                return Cr(e, t);
              }),
              fe(s, 'blur', function(t) {
                return Sr(e, t);
              });
          })(this),
          jo(),
          Vr(this),
          (this.curOp.forceUpdate = !0),
          Fi(this, r),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(j(Cr, this), 20)
            : Sr(this),
          _a))
            _a.hasOwnProperty(c) && _a[c](n, t[c], wa);
          di(this), t.finishInit && t.finishInit(this);
          for (var u = 0; u < Ta.length; ++u) Ta[u](n);
          Kr(this),
            s &&
              t.lineWrapping &&
              'optimizelegibility' ==
                getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = 'auto');
        }
        (Ma.defaults = ka), (Ma.optionHandlers = _a);
        var Ta = [];
        function La(e, t, n, r) {
          var i,
            o = e.doc;
          null == n && (n = 'add'),
            'smart' == n &&
              (o.mode.indent ? (i = pt(e, t).state) : (n = 'prev'));
          var a = e.options.tabSize,
            l = Ve(o, t),
            s = I(l.text, null, a);
          l.stateAfter && (l.stateAfter = null);
          var c,
            u = l.text.match(/^\s*/)[0];
          if (r || /\S/.test(l.text)) {
            if (
              'smart' == n &&
              ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == R ||
                c > 150)
            ) {
              if (!r) return;
              n = 'prev';
            }
          } else (c = 0), (n = 'not');
          'prev' == n
            ? (c = t > o.first ? I(Ve(o, t - 1).text, null, a) : 0)
            : 'add' == n
            ? (c = s + e.options.indentUnit)
            : 'subtract' == n
            ? (c = s - e.options.indentUnit)
            : 'number' == typeof n && (c = s + n),
            (c = Math.max(0, c));
          var d = '',
            f = 0;
          if (e.options.indentWithTabs)
            for (var p = Math.floor(c / a); p; --p) (f += a), (d += '\t');
          if ((f < c && (d += G(c - f)), d != u))
            return (
              ho(o, d, et(t, 0), et(t, u.length), '+input'),
              (l.stateAfter = null),
              !0
            );
          for (var h = 0; h < o.sel.ranges.length; h++) {
            var m = o.sel.ranges[h];
            if (m.head.line == t && m.head.ch < u.length) {
              var g = et(t, u.length);
              Xi(o, h, new ki(g, g));
              break;
            }
          }
        }
        Ma.defineInitHook = function(e) {
          return Ta.push(e);
        };
        var Oa = null;
        function Da(e) {
          Oa = e;
        }
        function Ea(e, t, n, r, i) {
          var o = e.doc;
          (e.display.shift = !1), r || (r = o.sel);
          var a = +new Date() - 200,
            l = 'paste' == i || e.state.pasteIncoming > a,
            s = Ee(t),
            c = null;
          if (l && r.ranges.length > 1)
            if (Oa && Oa.text.join('\n') == t) {
              if (r.ranges.length % Oa.text.length == 0) {
                c = [];
                for (var u = 0; u < Oa.text.length; u++)
                  c.push(o.splitLines(Oa.text[u]));
              }
            } else
              s.length == r.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (c = Y(s, function(e) {
                  return [e];
                }));
          for (
            var d = e.curOp.updateInput, f = r.ranges.length - 1;
            f >= 0;
            f--
          ) {
            var p = r.ranges[f],
              h = p.from(),
              m = p.to();
            p.empty() &&
              (n && n > 0
                ? (h = et(h.line, h.ch - n))
                : e.state.overwrite && !l
                ? (m = et(
                    m.line,
                    Math.min(Ve(o, m.line).text.length, m.ch + X(s).length)
                  ))
                : l &&
                  Oa &&
                  Oa.lineWise &&
                  Oa.text.join('\n') == t &&
                  (h = m = et(h.line, 0)));
            var g = {
              from: h,
              to: m,
              text: c ? c[f % c.length] : s,
              origin:
                i || (l ? 'paste' : e.state.cutIncoming > a ? 'cut' : '+input'),
            };
            so(e.doc, g), sn(e, 'inputRead', e, g);
          }
          t && !l && Na(e, t),
            Er(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function Aa(e, t) {
          var n = e.clipboardData && e.clipboardData.getData('Text');
          if (n)
            return (
              e.preventDefault(),
              t.isReadOnly() ||
                t.options.disableInput ||
                Qr(t, function() {
                  return Ea(t, n, 0, null, 'paste');
                }),
              !0
            );
        }
        function Na(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
              var i = n.ranges[r];
              if (
                !(
                  i.head.ch > 100 ||
                  (r && n.ranges[r - 1].head.line == i.head.line)
                )
              ) {
                var o = e.getModeAt(i.head),
                  a = !1;
                if (o.electricChars) {
                  for (var l = 0; l < o.electricChars.length; l++)
                    if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                      a = La(e, i.head.line, 'smart');
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test(
                      Ve(e.doc, i.head.line).text.slice(0, i.head.ch)
                    ) &&
                    (a = La(e, i.head.line, 'smart'));
                a && sn(e, 'electricInput', e, i.head.line);
              }
            }
        }
        function Fa(e) {
          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
              o = { anchor: et(i, 0), head: et(i + 1, 0) };
            n.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: n };
        }
        function za(e, t, n, r) {
          e.setAttribute('autocorrect', n ? '' : 'off'),
            e.setAttribute('autocapitalize', r ? '' : 'off'),
            e.setAttribute('spellcheck', !!t);
        }
        function ja() {
          var e = O(
              'textarea',
              null,
              null,
              'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
            ),
            t = O(
              'div',
              [e],
              null,
              'overflow: hidden; position: relative; width: 3px; height: 0px;'
            );
          return (
            s ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
            m && (e.style.border = '1px solid black'),
            za(e),
            t
          );
        }
        function Pa(e, t, n, r, i) {
          var o = t,
            a = n,
            l = Ve(e, t.line);
          function s(r) {
            var o;
            if (
              null ==
              (o = i
                ? (function(e, t, n, r) {
                    var i = ue(t, e.doc.direction);
                    if (!i) return Qo(t, n, r);
                    n.ch >= t.text.length
                      ? ((n.ch = t.text.length), (n.sticky = 'before'))
                      : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
                    var o = se(i, n.ch, n.sticky),
                      a = i[o];
                    if (
                      'ltr' == e.doc.direction &&
                      a.level % 2 == 0 &&
                      (r > 0 ? a.to > n.ch : a.from < n.ch)
                    )
                      return Qo(t, n, r);
                    var l,
                      s = function(e, n) {
                        return Zo(t, e instanceof et ? e.ch : e, n);
                      },
                      c = function(n) {
                        return e.options.lineWrapping
                          ? ((l = l || An(e, t)), Qn(e, t, l, n))
                          : { begin: 0, end: t.text.length };
                      },
                      u = c('before' == n.sticky ? s(n, -1) : n.ch);
                    if ('rtl' == e.doc.direction || 1 == a.level) {
                      var d = (1 == a.level) == r < 0,
                        f = s(n, d ? 1 : -1);
                      if (
                        null != f &&
                        (d
                          ? f <= a.to && f <= u.end
                          : f >= a.from && f >= u.begin)
                      ) {
                        var p = d ? 'before' : 'after';
                        return new et(n.line, f, p);
                      }
                    }
                    var h = function(e, t, r) {
                        for (
                          var o = function(e, t) {
                            return t
                              ? new et(n.line, s(e, 1), 'before')
                              : new et(n.line, e, 'after');
                          };
                          e >= 0 && e < i.length;
                          e += t
                        ) {
                          var a = i[e],
                            l = t > 0 == (1 != a.level),
                            c = l ? r.begin : s(r.end, -1);
                          if (a.from <= c && c < a.to) return o(c, l);
                          if (
                            ((c = l ? a.from : s(a.to, -1)),
                            r.begin <= c && c < r.end)
                          )
                            return o(c, l);
                        }
                      },
                      m = h(o + r, r, u);
                    if (m) return m;
                    var g = r > 0 ? u.end : s(u.begin, -1);
                    return null == g ||
                      (r > 0 && g == t.text.length) ||
                      !(m = h(r > 0 ? 0 : i.length - 1, r, c(g)))
                      ? null
                      : m;
                  })(e.cm, l, t, n)
                : Qo(l, t, n))
            ) {
              if (
                r ||
                !(function() {
                  var r = t.line + n;
                  return (
                    !(r < e.first || r >= e.first + e.size) &&
                    ((t = new et(r, t.ch, t.sticky)), (l = Ve(e, r)))
                  );
                })()
              )
                return !1;
              t = Jo(i, e.cm, l, t.line, n);
            } else t = o;
            return !0;
          }
          if ('char' == r) s();
          else if ('column' == r) s(!0);
          else if ('word' == r || 'group' == r)
            for (
              var c = null,
                u = 'group' == r,
                d = e.cm && e.cm.getHelper(t, 'wordChars'),
                f = !0;
              !(n < 0) || s(!f);
              f = !1
            ) {
              var p = l.text.charAt(t.ch) || '\n',
                h = te(p, d)
                  ? 'w'
                  : u && '\n' == p
                  ? 'n'
                  : !u || /\s/.test(p)
                  ? null
                  : 'p';
              if ((!u || f || h || (h = 's'), c && c != h)) {
                n < 0 && ((n = 1), s(), (t.sticky = 'after'));
                break;
              }
              if ((h && (c = h), n > 0 && !s(!f))) break;
            }
          var m = io(e, t, o, a, !0);
          return nt(o, m) && (m.hitSide = !0), m;
        }
        function Ia(e, t, n, r) {
          var i,
            o,
            a = e.doc,
            l = t.left;
          if ('page' == r) {
            var s = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight
              ),
              c = Math.max(s - 0.5 * rr(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * c;
          } else 'line' == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
          for (; (o = Yn(e, l, i)).outside; ) {
            if (n < 0 ? i <= 0 : i >= a.height) {
              o.hitSide = !0;
              break;
            }
            i += 5 * n;
          }
          return o;
        }
        var qa = function(e) {
          (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new q()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function Wa(e, t) {
          var n = En(e, t.line);
          if (!n || n.hidden) return null;
          var r = Ve(e.doc, t.line),
            i = On(n, r, t.line),
            o = ue(r, e.doc.direction),
            a = 'left';
          o && (a = se(o, t.ch) % 2 ? 'right' : 'left');
          var l = jn(i.map, t.ch, a);
          return (l.offset = 'right' == l.collapse ? l.end : l.start), l;
        }
        function Ba(e, t) {
          return t && (e.bad = !0), e;
        }
        function Ra(e, t, n) {
          var r;
          if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n]))
              return Ba(e.clipPos(et(e.display.viewTo - 1)), !0);
            (t = null), (n = 0);
          } else
            for (r = t; ; r = r.parentNode) {
              if (!r || r == e.display.lineDiv) return null;
              if (r.parentNode && r.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) return Ha(o, t, n);
          }
        }
        function Ha(e, t, n) {
          var r = e.text.firstChild,
            i = !1;
          if (!t || !E(r, t)) return Ba(et(Ye(e.line), 0), !0);
          if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
            var o = e.rest ? X(e.rest) : e.line;
            return Ba(et(Ye(o), o.text.length), i);
          }
          var a = 3 == t.nodeType ? t : null,
            l = t;
          for (
            a ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((a = t.firstChild), n && (n = a.nodeValue.length));
            l.parentNode != r;

          )
            l = l.parentNode;
          var s = e.measure,
            c = s.maps;
          function u(t, n, r) {
            for (var i = -1; i < (c ? c.length : 0); i++)
              for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
                var l = o[a + 2];
                if (l == t || l == n) {
                  var u = Ye(i < 0 ? e.line : e.rest[i]),
                    d = o[a] + r;
                  return (
                    (r < 0 || l != t) && (d = o[a + (r ? 1 : 0)]), et(u, d)
                  );
                }
              }
          }
          var d = u(a, l, n);
          if (d) return Ba(d, i);
          for (
            var f = l.nextSibling, p = a ? a.nodeValue.length - n : 0;
            f;
            f = f.nextSibling
          ) {
            if ((d = u(f, f.firstChild, 0))) return Ba(et(d.line, d.ch - p), i);
            p += f.textContent.length;
          }
          for (var h = l.previousSibling, m = n; h; h = h.previousSibling) {
            if ((d = u(h, h.firstChild, -1)))
              return Ba(et(d.line, d.ch + m), i);
            m += h.textContent.length;
          }
        }
        (qa.prototype.init = function(e) {
          var t = this,
            n = this,
            r = n.cm,
            i = (n.div = e.lineDiv);
          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected())
                Da({ lineWise: !1, text: r.getSelections() }),
                  'cut' == e.type && r.replaceSelection('', null, 'cut');
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Fa(r);
                Da({ lineWise: !0, text: t.text }),
                  'cut' == e.type &&
                    r.operation(function() {
                      r.setSelections(t.ranges, 0, H),
                        r.replaceSelection('', null, 'cut');
                    });
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = Oa.text.join('\n');
                if (
                  (e.clipboardData.setData('Text', o),
                  e.clipboardData.getData('Text') == o)
                )
                  return void e.preventDefault();
              }
              var a = ja(),
                l = a.firstChild;
              r.display.lineSpace.insertBefore(
                a,
                r.display.lineSpace.firstChild
              ),
                (l.value = Oa.text.join('\n'));
              var s = document.activeElement;
              z(l),
                setTimeout(function() {
                  r.display.lineSpace.removeChild(a),
                    s.focus(),
                    s == i && n.showPrimarySelection();
                }, 50);
            }
          }
          za(
            i,
            r.options.spellcheck,
            r.options.autocorrect,
            r.options.autocapitalize
          ),
            fe(i, 'paste', function(e) {
              ge(r, e) ||
                Aa(e, r) ||
                (l <= 11 &&
                  setTimeout(
                    Jr(r, function() {
                      return t.updateFromDOM();
                    }),
                    20
                  ));
            }),
            fe(i, 'compositionstart', function(e) {
              t.composing = { data: e.data, done: !1 };
            }),
            fe(i, 'compositionupdate', function(e) {
              t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            fe(i, 'compositionend', function(e) {
              t.composing &&
                (e.data != t.composing.data && t.readFromDOMSoon(),
                (t.composing.done = !0));
            }),
            fe(i, 'touchstart', function() {
              return n.forceCompositionEnd();
            }),
            fe(i, 'input', function() {
              t.composing || t.readFromDOMSoon();
            }),
            fe(i, 'copy', o),
            fe(i, 'cut', o);
        }),
          (qa.prototype.prepareSelection = function() {
            var e = vr(this.cm, !1);
            return (e.focus = this.cm.state.focused), e;
          }),
          (qa.prototype.showSelection = function(e, t) {
            e &&
              this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(),
              this.showMultipleSelections(e));
          }),
          (qa.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (qa.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              i = r.from(),
              o = r.to();
            if (
              t.display.viewTo == t.display.viewFrom ||
              i.line >= t.display.viewTo ||
              o.line < t.display.viewFrom
            )
              e.removeAllRanges();
            else {
              var a = Ra(t, e.anchorNode, e.anchorOffset),
                l = Ra(t, e.focusNode, e.focusOffset);
              if (
                !a ||
                a.bad ||
                !l ||
                l.bad ||
                0 != tt(ot(a, l), i) ||
                0 != tt(it(a, l), o)
              ) {
                var s = t.display.view,
                  c = (i.line >= t.display.viewFrom && Wa(t, i)) || {
                    node: s[0].measure.map[2],
                    offset: 0,
                  },
                  u = o.line < t.display.viewTo && Wa(t, o);
                if (!u) {
                  var d = s[s.length - 1].measure,
                    f = d.maps ? d.maps[d.maps.length - 1] : d.map;
                  u = {
                    node: f[f.length - 1],
                    offset: f[f.length - 2] - f[f.length - 3],
                  };
                }
                if (c && u) {
                  var p,
                    h = e.rangeCount && e.getRangeAt(0);
                  try {
                    p = S(c.node, c.offset, u.offset, u.node);
                  } catch (m) {}
                  p &&
                    (!n && t.state.focused
                      ? (e.collapse(c.node, c.offset),
                        p.collapsed || (e.removeAllRanges(), e.addRange(p)))
                      : (e.removeAllRanges(), e.addRange(p)),
                    h && null == e.anchorNode
                      ? e.addRange(h)
                      : n && this.startGracePeriod()),
                    this.rememberSelection();
                } else e.removeAllRanges();
              }
            }
          }),
          (qa.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function() {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function() {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (qa.prototype.showMultipleSelections = function(e) {
            L(this.cm.display.cursorDiv, e.cursors),
              L(this.cm.display.selectionDiv, e.selection);
          }),
          (qa.prototype.rememberSelection = function() {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (qa.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return E(this.div, t);
          }),
          (qa.prototype.focus = function() {
            'nocursor' != this.cm.options.readOnly &&
              (this.selectionInEditor() ||
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (qa.prototype.blur = function() {
            this.div.blur();
          }),
          (qa.prototype.getField = function() {
            return this.div;
          }),
          (qa.prototype.supportsTouch = function() {
            return !0;
          }),
          (qa.prototype.receivedFocus = function() {
            var e = this;
            this.selectionInEditor()
              ? this.pollSelection()
              : Qr(this.cm, function() {
                  return (e.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused &&
                  (e.pollSelection(),
                  e.polling.set(e.cm.options.pollInterval, t));
              });
          }),
          (qa.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (qa.prototype.pollSelection = function() {
            if (
              null == this.readDOMTimeout &&
              !this.gracePeriod &&
              this.selectionChanged()
            ) {
              var e = this.getSelection(),
                t = this.cm;
              if (
                g &&
                u &&
                this.cm.display.gutterSpecs.length &&
                (function(e) {
                  for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className))
                      return !0;
                  return !1;
                })(e.anchorNode)
              )
                return (
                  this.cm.triggerOnKeyDown({
                    type: 'keydown',
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var n = Ra(t, e.anchorNode, e.anchorOffset),
                  r = Ra(t, e.focusNode, e.focusOffset);
                n &&
                  r &&
                  Qr(t, function() {
                    Qi(t.doc, Ci(n, r), H),
                      (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (qa.prototype.pollContent = function() {
            null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
              t,
              n,
              r = this.cm,
              i = r.display,
              o = r.doc.sel.primary(),
              a = o.from(),
              l = o.to();
            if (
              (0 == a.ch &&
                a.line > r.firstLine() &&
                (a = et(a.line - 1, Ve(r.doc, a.line - 1).length)),
              l.ch == Ve(r.doc, l.line).text.length &&
                l.line < r.lastLine() &&
                (l = et(l.line + 1, 0)),
              a.line < i.viewFrom || l.line > i.viewTo - 1)
            )
              return !1;
            a.line == i.viewFrom || 0 == (e = ur(r, a.line))
              ? ((t = Ye(i.view[0].line)), (n = i.view[0].node))
              : ((t = Ye(i.view[e].line)),
                (n = i.view[e - 1].node.nextSibling));
            var s,
              c,
              u = ur(r, l.line);
            if (
              (u == i.view.length - 1
                ? ((s = i.viewTo - 1), (c = i.lineDiv.lastChild))
                : ((s = Ye(i.view[u + 1].line) - 1),
                  (c = i.view[u + 1].node.previousSibling)),
              !n)
            )
              return !1;
            for (
              var d = r.doc.splitLines(
                  (function(e, t, n, r, i) {
                    var o = '',
                      a = !1,
                      l = e.doc.lineSeparator(),
                      s = !1;
                    function c() {
                      a && ((o += l), s && (o += l), (a = s = !1));
                    }
                    function u(e) {
                      e && (c(), (o += e));
                    }
                    function d(t) {
                      if (1 == t.nodeType) {
                        var n = t.getAttribute('cm-text');
                        if (n) return void u(n);
                        var o,
                          f = t.getAttribute('cm-marker');
                        if (f) {
                          var p = e.findMarks(
                            et(r, 0),
                            et(i + 1, 0),
                            ((g = +f),
                            function(e) {
                              return e.id == g;
                            })
                          );
                          return void (
                            p.length &&
                            (o = p[0].find(0)) &&
                            u(Ke(e.doc, o.from, o.to).join(l))
                          );
                        }
                        if ('false' == t.getAttribute('contenteditable'))
                          return;
                        var h = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (
                          !/^br$/i.test(t.nodeName) &&
                          0 == t.textContent.length
                        )
                          return;
                        h && c();
                        for (var m = 0; m < t.childNodes.length; m++)
                          d(t.childNodes[m]);
                        /^(pre|p)$/i.test(t.nodeName) && (s = !0),
                          h && (a = !0);
                      } else
                        3 == t.nodeType &&
                          u(
                            t.nodeValue
                              .replace(/\u200b/g, '')
                              .replace(/\u00a0/g, ' ')
                          );
                      var g;
                    }
                    for (; d(t), t != n; ) (t = t.nextSibling), (s = !1);
                    return o;
                  })(r, n, c, t, s)
                ),
                f = Ke(r.doc, et(t, 0), et(s, Ve(r.doc, s).text.length));
              d.length > 1 && f.length > 1;

            )
              if (X(d) == X(f)) d.pop(), f.pop(), s--;
              else {
                if (d[0] != f[0]) break;
                d.shift(), f.shift(), t++;
              }
            for (
              var p = 0,
                h = 0,
                m = d[0],
                g = f[0],
                v = Math.min(m.length, g.length);
              p < v && m.charCodeAt(p) == g.charCodeAt(p);

            )
              ++p;
            for (
              var y = X(d),
                b = X(f),
                x = Math.min(
                  y.length - (1 == d.length ? p : 0),
                  b.length - (1 == f.length ? p : 0)
                );
              h < x &&
              y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);

            )
              ++h;
            if (1 == d.length && 1 == f.length && t == a.line)
              for (
                ;
                p &&
                p > a.ch &&
                y.charCodeAt(y.length - h - 1) ==
                  b.charCodeAt(b.length - h - 1);

              )
                p--, h++;
            (d[d.length - 1] = y
              .slice(0, y.length - h)
              .replace(/^\u200b+/, '')),
              (d[0] = d[0].slice(p).replace(/\u200b+$/, ''));
            var w = et(t, p),
              k = et(s, f.length ? X(f).length - h : 0);
            return d.length > 1 || d[0] || tt(w, k)
              ? (ho(r.doc, d, w, k, '+input'), !0)
              : void 0;
          }),
          (qa.prototype.ensurePolled = function() {
            this.forceCompositionEnd();
          }),
          (qa.prototype.reset = function() {
            this.forceCompositionEnd();
          }),
          (qa.prototype.forceCompositionEnd = function() {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (qa.prototype.readFromDOMSoon = function() {
            var e = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function() {
                if (((e.readDOMTimeout = null), e.composing)) {
                  if (!e.composing.done) return;
                  e.composing = null;
                }
                e.updateFromDOM();
              }, 80));
          }),
          (qa.prototype.updateFromDOM = function() {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              Qr(this.cm, function() {
                return dr(e.cm);
              });
          }),
          (qa.prototype.setUneditable = function(e) {
            e.contentEditable = 'false';
          }),
          (qa.prototype.onKeyPress = function(e) {
            0 == e.charCode ||
              this.composing ||
              (e.preventDefault(),
              this.cm.isReadOnly() ||
                Jr(this.cm, Ea)(
                  this.cm,
                  String.fromCharCode(
                    null == e.charCode ? e.keyCode : e.charCode
                  ),
                  0
                ));
          }),
          (qa.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String('nocursor' != e);
          }),
          (qa.prototype.onContextMenu = function() {}),
          (qa.prototype.resetPosition = function() {}),
          (qa.prototype.needsContentAttribute = !0);
        var Ua = function(e) {
          (this.cm = e),
            (this.prevInput = ''),
            (this.pollingFast = !1),
            (this.polling = new q()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        (Ua.prototype.init = function(e) {
          var t = this,
            n = this,
            r = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected())
                Da({ lineWise: !1, text: r.getSelections() });
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Fa(r);
                Da({ lineWise: !0, text: t.text }),
                  'cut' == e.type
                    ? r.setSelections(t.ranges, null, H)
                    : ((n.prevInput = ''), (i.value = t.text.join('\n')), z(i));
              }
              'cut' == e.type && (r.state.cutIncoming = +new Date());
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            m && (i.style.width = '0px'),
            fe(i, 'input', function() {
              a && l >= 9 && t.hasSelection && (t.hasSelection = null),
                n.poll();
            }),
            fe(i, 'paste', function(e) {
              ge(r, e) ||
                Aa(e, r) ||
                ((r.state.pasteIncoming = +new Date()), n.fastPoll());
            }),
            fe(i, 'cut', o),
            fe(i, 'copy', o),
            fe(e.scroller, 'paste', function(t) {
              if (!kn(e, t) && !ge(r, t)) {
                if (!i.dispatchEvent)
                  return (r.state.pasteIncoming = +new Date()), void n.focus();
                var o = new Event('paste');
                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
              }
            }),
            fe(e.lineSpace, 'selectstart', function(t) {
              kn(e, t) || xe(t);
            }),
            fe(i, 'compositionstart', function() {
              var e = r.getCursor('from');
              n.composing && n.composing.range.clear(),
                (n.composing = {
                  start: e,
                  range: r.markText(e, r.getCursor('to'), {
                    className: 'CodeMirror-composing',
                  }),
                });
            }),
            fe(i, 'compositionend', function() {
              n.composing &&
                (n.poll(), n.composing.range.clear(), (n.composing = null));
            });
        }),
          (Ua.prototype.createField = function(e) {
            (this.wrapper = ja()), (this.textarea = this.wrapper.firstChild);
          }),
          (Ua.prototype.prepareSelection = function() {
            var e = this.cm,
              t = e.display,
              n = e.doc,
              r = vr(e);
            if (e.options.moveInputWithCursor) {
              var i = Kn(e, n.sel.primary().head, 'div'),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
              (r.teTop = Math.max(
                0,
                Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
              )),
                (r.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)
                ));
            }
            return r;
          }),
          (Ua.prototype.showSelection = function(e) {
            var t = this.cm.display;
            L(t.cursorDiv, e.cursors),
              L(t.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + 'px'),
                (this.wrapper.style.left = e.teLeft + 'px'));
          }),
          (Ua.prototype.reset = function(e) {
            if (!this.contextMenuPending && !this.composing) {
              var t = this.cm;
              if (t.somethingSelected()) {
                this.prevInput = '';
                var n = t.getSelection();
                (this.textarea.value = n),
                  t.state.focused && z(this.textarea),
                  a && l >= 9 && (this.hasSelection = n);
              } else
                e ||
                  ((this.prevInput = this.textarea.value = ''),
                  a && l >= 9 && (this.hasSelection = null));
            }
          }),
          (Ua.prototype.getField = function() {
            return this.textarea;
          }),
          (Ua.prototype.supportsTouch = function() {
            return !1;
          }),
          (Ua.prototype.focus = function() {
            if (
              'nocursor' != this.cm.options.readOnly &&
              (!v || A() != this.textarea)
            )
              try {
                this.textarea.focus();
              } catch (e) {}
          }),
          (Ua.prototype.blur = function() {
            this.textarea.blur();
          }),
          (Ua.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (Ua.prototype.receivedFocus = function() {
            this.slowPoll();
          }),
          (Ua.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          }),
          (Ua.prototype.fastPoll = function() {
            var e = !1,
              t = this;
            (t.pollingFast = !0),
              t.polling.set(20, function n() {
                t.poll() || e
                  ? ((t.pollingFast = !1), t.slowPoll())
                  : ((e = !0), t.polling.set(60, n));
              });
          }),
          (Ua.prototype.poll = function() {
            var e = this,
              t = this.cm,
              n = this.textarea,
              r = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (Ae(n) && !r && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if (
              (a && l >= 9 && this.hasSelection === i) ||
              (y && /[\uf700-\uf7ff]/.test(i))
            )
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((8203 != o || r || (r = '\u200b'), 8666 == o))
                return this.reset(), this.cm.execCommand('undo');
            }
            for (
              var s = 0, c = Math.min(r.length, i.length);
              s < c && r.charCodeAt(s) == i.charCodeAt(s);

            )
              ++s;
            return (
              Qr(t, function() {
                Ea(
                  t,
                  i.slice(s),
                  r.length - s,
                  null,
                  e.composing ? '*compose' : null
                ),
                  i.length > 1e3 || i.indexOf('\n') > -1
                    ? (n.value = e.prevInput = '')
                    : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(
                      e.composing.start,
                      t.getCursor('to'),
                      { className: 'CodeMirror-composing' }
                    )));
              }),
              !0
            );
          }),
          (Ua.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (Ua.prototype.onKeyPress = function() {
            a && l >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (Ua.prototype.onContextMenu = function(e) {
            var t = this,
              n = t.cm,
              r = n.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = cr(n, e),
              c = r.scroller.scrollTop;
            if (o && !d) {
              n.options.resetSelectionOnContextMenu &&
                -1 == n.doc.sel.contains(o) &&
                Jr(n, Qi)(n.doc, Ci(o), H);
              var u,
                f = i.style.cssText,
                p = t.wrapper.style.cssText,
                h = t.wrapper.offsetParent.getBoundingClientRect();
              (t.wrapper.style.cssText = 'position: static'),
                (i.style.cssText =
                  'position: absolute; width: 30px; height: 30px;\n      top: ' +
                  (e.clientY - h.top - 5) +
                  'px; left: ' +
                  (e.clientX - h.left - 5) +
                  'px;\n      z-index: 1000; background: ' +
                  (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                  ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
                s && (u = window.scrollY),
                r.input.focus(),
                s && window.scrollTo(null, u),
                r.input.reset(),
                n.somethingSelected() || (i.value = t.prevInput = ' '),
                (t.contextMenuPending = g),
                (r.selForContextMenu = n.doc.sel),
                clearTimeout(r.detectingSelectAll),
                a && l >= 9 && m(),
                _
                  ? (_e(e),
                    fe(window, 'mouseup', function e() {
                      he(window, 'mouseup', e), setTimeout(g, 20);
                    }))
                  : setTimeout(g, 50);
            }
            function m() {
              if (null != i.selectionStart) {
                var e = n.somethingSelected(),
                  o = '\u200b' + (e ? i.value : '');
                (i.value = '\u21da'),
                  (i.value = o),
                  (t.prevInput = e ? '' : '\u200b'),
                  (i.selectionStart = 1),
                  (i.selectionEnd = o.length),
                  (r.selForContextMenu = n.doc.sel);
              }
            }
            function g() {
              if (
                t.contextMenuPending == g &&
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = p),
                (i.style.cssText = f),
                a &&
                  l < 9 &&
                  r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
                null != i.selectionStart)
              ) {
                (!a || (a && l < 9)) && m();
                var e = 0;
                r.detectingSelectAll = setTimeout(function o() {
                  r.selForContextMenu == n.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  '\u200b' == t.prevInput
                    ? Jr(n, ao)(n)
                    : e++ < 10
                    ? (r.detectingSelectAll = setTimeout(o, 500))
                    : ((r.selForContextMenu = null), r.input.reset());
                }, 200);
              }
            }
          }),
          (Ua.prototype.readOnlyChanged = function(e) {
            e || this.reset(), (this.textarea.disabled = 'nocursor' == e);
          }),
          (Ua.prototype.setUneditable = function() {}),
          (Ua.prototype.needsContentAttribute = !1),
          (function(e) {
            var t = e.optionHandlers;
            function n(n, r, i, o) {
              (e.defaults[n] = r),
                i &&
                  (t[n] = o
                    ? function(e, t, n) {
                        n != wa && i(e, t, n);
                      }
                    : i);
            }
            (e.defineOption = n),
              (e.Init = wa),
              n(
                'value',
                '',
                function(e, t) {
                  return e.setValue(t);
                },
                !0
              ),
              n(
                'mode',
                null,
                function(e, t) {
                  (e.doc.modeOption = t), Oi(e);
                },
                !0
              ),
              n('indentUnit', 2, Oi, !0),
              n('indentWithTabs', !1),
              n('smartIndent', !0),
              n(
                'tabSize',
                4,
                function(e) {
                  Di(e), Wn(e), dr(e);
                },
                !0
              ),
              n('lineSeparator', null, function(e, t) {
                if (((e.doc.lineSep = t), t)) {
                  var n = [],
                    r = e.doc.first;
                  e.doc.iter(function(e) {
                    for (var i = 0; ; ) {
                      var o = e.text.indexOf(t, i);
                      if (-1 == o) break;
                      (i = o + t.length), n.push(et(r, o));
                    }
                    r++;
                  });
                  for (var i = n.length - 1; i >= 0; i--)
                    ho(e.doc, t, n[i], et(n[i].line, n[i].ch + t.length));
                }
              }),
              n(
                'specialChars',
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                function(e, t, n) {
                  (e.state.specialChars = new RegExp(
                    t.source + (t.test('\t') ? '' : '|\t'),
                    'g'
                  )),
                    n != wa && e.refresh();
                }
              ),
              n(
                'specialCharPlaceholder',
                Qt,
                function(e) {
                  return e.refresh();
                },
                !0
              ),
              n('electricChars', !0),
              n(
                'inputStyle',
                v ? 'contenteditable' : 'textarea',
                function() {
                  throw new Error(
                    'inputStyle can not (yet) be changed in a running editor'
                  );
                },
                !0
              ),
              n(
                'spellcheck',
                !1,
                function(e, t) {
                  return (e.getInputField().spellcheck = t);
                },
                !0
              ),
              n(
                'autocorrect',
                !1,
                function(e, t) {
                  return (e.getInputField().autocorrect = t);
                },
                !0
              ),
              n(
                'autocapitalize',
                !1,
                function(e, t) {
                  return (e.getInputField().autocapitalize = t);
                },
                !0
              ),
              n('rtlMoveVisually', !x),
              n('wholeLineUpdateBefore', !0),
              n(
                'theme',
                'default',
                function(e) {
                  xa(e), hi(e);
                },
                !0
              ),
              n('keyMap', 'default', function(e, t, n) {
                var r = Xo(t),
                  i = n != wa && Xo(n);
                i && i.detach && i.detach(e, r),
                  r.attach && r.attach(e, i || null);
              }),
              n('extraKeys', null),
              n('configureMouse', null),
              n('lineWrapping', !1, Sa, !0),
              n(
                'gutters',
                [],
                function(e, t) {
                  (e.display.gutterSpecs = fi(t, e.options.lineNumbers)), hi(e);
                },
                !0
              ),
              n(
                'fixedGutter',
                !0,
                function(e, t) {
                  (e.display.gutters.style.left = t
                    ? ar(e.display) + 'px'
                    : '0'),
                    e.refresh();
                },
                !0
              ),
              n(
                'coverGutterNextToScrollbar',
                !1,
                function(e) {
                  return Br(e);
                },
                !0
              ),
              n(
                'scrollbarStyle',
                'native',
                function(e) {
                  Ur(e),
                    Br(e),
                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                },
                !0
              ),
              n(
                'lineNumbers',
                !1,
                function(e, t) {
                  (e.display.gutterSpecs = fi(e.options.gutters, t)), hi(e);
                },
                !0
              ),
              n('firstLineNumber', 1, hi, !0),
              n(
                'lineNumberFormatter',
                function(e) {
                  return e;
                },
                hi,
                !0
              ),
              n('showCursorWhenSelecting', !1, gr, !0),
              n('resetSelectionOnContextMenu', !0),
              n('lineWiseCopyCut', !0),
              n('pasteLinesPerSelection', !0),
              n('selectionsMayTouch', !1),
              n('readOnly', !1, function(e, t) {
                'nocursor' == t && (Sr(e), e.display.input.blur()),
                  e.display.input.readOnlyChanged(t);
              }),
              n(
                'disableInput',
                !1,
                function(e, t) {
                  t || e.display.input.reset();
                },
                !0
              ),
              n('dragDrop', !0, Ca),
              n('allowDropFileTypes', null),
              n('cursorBlinkRate', 530),
              n('cursorScrollMargin', 0),
              n('cursorHeight', 1, gr, !0),
              n('singleCursorHeightPerLine', !0, gr, !0),
              n('workTime', 100),
              n('workDelay', 100),
              n('flattenSpans', !0, Di, !0),
              n('addModeClass', !1, Di, !0),
              n('pollInterval', 100),
              n('undoDepth', 200, function(e, t) {
                return (e.doc.history.undoDepth = t);
              }),
              n('historyEventDelay', 1250),
              n(
                'viewportMargin',
                10,
                function(e) {
                  return e.refresh();
                },
                !0
              ),
              n('maxHighlightLength', 1e4, Di, !0),
              n('moveInputWithCursor', !0, function(e, t) {
                t || e.display.input.resetPosition();
              }),
              n('tabindex', null, function(e, t) {
                return (e.display.input.getField().tabIndex = t || '');
              }),
              n('autofocus', null),
              n(
                'direction',
                'ltr',
                function(e, t) {
                  return e.doc.setDirection(t);
                },
                !0
              ),
              n('phrases', null);
          })(Ma),
          (function(e) {
            var t = e.optionHandlers,
              n = (e.helpers = {});
            (e.prototype = {
              constructor: e,
              focus: function() {
                window.focus(), this.display.input.focus();
              },
              setOption: function(e, n) {
                var r = this.options,
                  i = r[e];
                (r[e] == n && 'mode' != e) ||
                  ((r[e] = n),
                  t.hasOwnProperty(e) && Jr(this, t[e])(this, n, i),
                  me(this, 'optionChange', this, e));
              },
              getOption: function(e) {
                return this.options[e];
              },
              getDoc: function() {
                return this.doc;
              },
              addKeyMap: function(e, t) {
                this.state.keyMaps[t ? 'push' : 'unshift'](Xo(e));
              },
              removeKeyMap: function(e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                  if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
              },
              addOverlay: ei(function(t, n) {
                var r = t.token ? t : e.getMode(this.options, t);
                if (r.startState)
                  throw new Error('Overlays may not be stateful.');
                !(function(e, t, n) {
                  for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                  e.splice(r, 0, t);
                })(
                  this.state.overlays,
                  {
                    mode: r,
                    modeSpec: t,
                    opaque: n && n.opaque,
                    priority: (n && n.priority) || 0,
                  },
                  function(e) {
                    return e.priority;
                  }
                ),
                  this.state.modeGen++,
                  dr(this);
              }),
              removeOverlay: ei(function(e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                  var r = t[n].modeSpec;
                  if (r == e || ('string' == typeof e && r.name == e))
                    return t.splice(n, 1), this.state.modeGen++, void dr(this);
                }
              }),
              indentLine: ei(function(e, t, n) {
                'string' != typeof t &&
                  'number' != typeof t &&
                  (t =
                    null == t
                      ? this.options.smartIndent
                        ? 'smart'
                        : 'prev'
                      : t
                      ? 'add'
                      : 'subtract'),
                  Qe(this.doc, e) && La(this, e, t, n);
              }),
              indentSelection: ei(function(e) {
                for (
                  var t = this.doc.sel.ranges, n = -1, r = 0;
                  r < t.length;
                  r++
                ) {
                  var i = t[r];
                  if (i.empty())
                    i.head.line > n &&
                      (La(this, i.head.line, e, !0),
                      (n = i.head.line),
                      r == this.doc.sel.primIndex && Er(this));
                  else {
                    var o = i.from(),
                      a = i.to(),
                      l = Math.max(n, o.line);
                    n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                    for (var s = l; s < n; ++s) La(this, s, e);
                    var c = this.doc.sel.ranges;
                    0 == o.ch &&
                      t.length == c.length &&
                      c[r].from().ch > 0 &&
                      Xi(this.doc, r, new ki(o, c[r].to()), H);
                  }
                }
              }),
              getTokenAt: function(e, t) {
                return yt(this, e, t);
              },
              getLineTokens: function(e, t) {
                return yt(this, et(e), t, !0);
              },
              getTokenTypeAt: function(e) {
                e = lt(this.doc, e);
                var t,
                  n = ft(this, Ve(this.doc, e.line)),
                  r = 0,
                  i = (n.length - 1) / 2,
                  o = e.ch;
                if (0 == o) t = n[2];
                else
                  for (;;) {
                    var a = (r + i) >> 1;
                    if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                    else {
                      if (!(n[2 * a + 1] < o)) {
                        t = n[2 * a + 2];
                        break;
                      }
                      r = a + 1;
                    }
                  }
                var l = t ? t.indexOf('overlay ') : -1;
                return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
              },
              getModeAt: function(t) {
                var n = this.doc.mode;
                return n.innerMode
                  ? e.innerMode(n, this.getTokenAt(t).state).mode
                  : n;
              },
              getHelper: function(e, t) {
                return this.getHelpers(e, t)[0];
              },
              getHelpers: function(e, t) {
                var r = [];
                if (!n.hasOwnProperty(t)) return r;
                var i = n[t],
                  o = this.getModeAt(e);
                if ('string' == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                else if (o[t])
                  for (var a = 0; a < o[t].length; a++) {
                    var l = i[o[t][a]];
                    l && r.push(l);
                  }
                else
                  o.helperType && i[o.helperType]
                    ? r.push(i[o.helperType])
                    : i[o.name] && r.push(i[o.name]);
                for (var s = 0; s < i._global.length; s++) {
                  var c = i._global[s];
                  c.pred(o, this) && -1 == W(r, c.val) && r.push(c.val);
                }
                return r;
              },
              getStateAfter: function(e, t) {
                var n = this.doc;
                return pt(
                  this,
                  (e = at(n, null == e ? n.first + n.size - 1 : e)) + 1,
                  t
                ).state;
              },
              cursorCoords: function(e, t) {
                var n = this.doc.sel.primary();
                return Kn(
                  this,
                  null == e
                    ? n.head
                    : 'object' == typeof e
                    ? lt(this.doc, e)
                    : e
                    ? n.from()
                    : n.to(),
                  t || 'page'
                );
              },
              charCoords: function(e, t) {
                return Vn(this, lt(this.doc, e), t || 'page');
              },
              coordsChar: function(e, t) {
                return Yn(this, (e = $n(this, e, t || 'page')).left, e.top);
              },
              lineAtHeight: function(e, t) {
                return (
                  (e = $n(this, { top: e, left: 0 }, t || 'page').top),
                  Ze(this.doc, e + this.display.viewOffset)
                );
              },
              heightAtLine: function(e, t, n) {
                var r,
                  i = !1;
                if ('number' == typeof e) {
                  var o = this.doc.first + this.doc.size - 1;
                  e < this.doc.first
                    ? (e = this.doc.first)
                    : e > o && ((e = o), (i = !0)),
                    (r = Ve(this.doc, e));
                } else r = e;
                return (
                  Un(this, r, { top: 0, left: 0 }, t || 'page', n || i).top +
                  (i ? this.doc.height - Ht(r) : 0)
                );
              },
              defaultTextHeight: function() {
                return rr(this.display);
              },
              defaultCharWidth: function() {
                return ir(this.display);
              },
              getViewport: function() {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function(e, t, n, r, i) {
                var o = this.display,
                  a = (e = Kn(this, lt(this.doc, e))).bottom,
                  l = e.left;
                if (
                  ((t.style.position = 'absolute'),
                  t.setAttribute('cm-ignore-events', 'true'),
                  this.display.input.setUneditable(t),
                  o.sizer.appendChild(t),
                  'over' == r)
                )
                  a = e.top;
                else if ('above' == r || 'near' == r) {
                  var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                    c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                  ('above' == r || e.bottom + t.offsetHeight > s) &&
                  e.top > t.offsetHeight
                    ? (a = e.top - t.offsetHeight)
                    : e.bottom + t.offsetHeight <= s && (a = e.bottom),
                    l + t.offsetWidth > c && (l = c - t.offsetWidth);
                }
                (t.style.top = a + 'px'),
                  (t.style.left = t.style.right = ''),
                  'right' == i
                    ? ((l = o.sizer.clientWidth - t.offsetWidth),
                      (t.style.right = '0px'))
                    : ('left' == i
                        ? (l = 0)
                        : 'middle' == i &&
                          (l = (o.sizer.clientWidth - t.offsetWidth) / 2),
                      (t.style.left = l + 'px')),
                  n &&
                    (function(e, t) {
                      var n = Or(e, t);
                      null != n.scrollTop && zr(e, n.scrollTop),
                        null != n.scrollLeft && Pr(e, n.scrollLeft);
                    })(this, {
                      left: l,
                      top: a,
                      right: l + t.offsetWidth,
                      bottom: a + t.offsetHeight,
                    });
              },
              triggerOnKeyDown: ei(ca),
              triggerOnKeyPress: ei(da),
              triggerOnKeyUp: ua,
              triggerOnMouseDown: ei(ma),
              execCommand: function(e) {
                if (ea.hasOwnProperty(e)) return ea[e].call(null, this);
              },
              triggerElectric: ei(function(e) {
                Na(this, e);
              }),
              findPosH: function(e, t, n, r) {
                var i = 1;
                t < 0 && ((i = -1), (t = -t));
                for (
                  var o = lt(this.doc, e), a = 0;
                  a < t && !(o = Pa(this.doc, o, i, n, r)).hitSide;
                  ++a
                );
                return o;
              },
              moveH: ei(function(e, t) {
                var n = this;
                this.extendSelectionsBy(function(r) {
                  return n.display.shift || n.doc.extend || r.empty()
                    ? Pa(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                    : e < 0
                    ? r.from()
                    : r.to();
                }, $);
              }),
              deleteH: ei(function(e, t) {
                var n = this.doc.sel,
                  r = this.doc;
                n.somethingSelected()
                  ? r.replaceSelection('', null, '+delete')
                  : Yo(this, function(n) {
                      var i = Pa(r, n.head, e, t, !1);
                      return e < 0
                        ? { from: i, to: n.head }
                        : { from: n.head, to: i };
                    });
              }),
              findPosV: function(e, t, n, r) {
                var i = 1,
                  o = r;
                t < 0 && ((i = -1), (t = -t));
                for (var a = lt(this.doc, e), l = 0; l < t; ++l) {
                  var s = Kn(this, a, 'div');
                  if (
                    (null == o ? (o = s.left) : (s.left = o),
                    (a = Ia(this, s, i, n)).hitSide)
                  )
                    break;
                }
                return a;
              },
              moveV: ei(function(e, t) {
                var n = this,
                  r = this.doc,
                  i = [],
                  o =
                    !this.display.shift &&
                    !r.extend &&
                    r.sel.somethingSelected();
                if (
                  (r.extendSelectionsBy(function(a) {
                    if (o) return e < 0 ? a.from() : a.to();
                    var l = Kn(n, a.head, 'div');
                    null != a.goalColumn && (l.left = a.goalColumn),
                      i.push(l.left);
                    var s = Ia(n, l, e, t);
                    return (
                      'page' == t &&
                        a == r.sel.primary() &&
                        Dr(n, Vn(n, s, 'div').top - l.top),
                      s
                    );
                  }, $),
                  i.length)
                )
                  for (var a = 0; a < r.sel.ranges.length; a++)
                    r.sel.ranges[a].goalColumn = i[a];
              }),
              findWordAt: function(e) {
                var t = Ve(this.doc, e.line).text,
                  n = e.ch,
                  r = e.ch;
                if (t) {
                  var i = this.getHelper(e, 'wordChars');
                  ('before' != e.sticky && r != t.length) || !n ? ++r : --n;
                  for (
                    var o = t.charAt(n),
                      a = te(o, i)
                        ? function(e) {
                            return te(e, i);
                          }
                        : /\s/.test(o)
                        ? function(e) {
                            return /\s/.test(e);
                          }
                        : function(e) {
                            return !/\s/.test(e) && !te(e);
                          };
                    n > 0 && a(t.charAt(n - 1));

                  )
                    --n;
                  for (; r < t.length && a(t.charAt(r)); ) ++r;
                }
                return new ki(et(e.line, n), et(e.line, r));
              },
              toggleOverwrite: function(e) {
                (null != e && e == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? N(this.display.cursorDiv, 'CodeMirror-overwrite')
                    : M(this.display.cursorDiv, 'CodeMirror-overwrite'),
                  me(this, 'overwriteToggle', this, this.state.overwrite));
              },
              hasFocus: function() {
                return this.display.input.getField() == A();
              },
              isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              },
              scrollTo: ei(function(e, t) {
                Ar(this, e, t);
              }),
              getScrollInfo: function() {
                var e = this.display.scroller;
                return {
                  left: e.scrollLeft,
                  top: e.scrollTop,
                  height: e.scrollHeight - Mn(this) - this.display.barHeight,
                  width: e.scrollWidth - Mn(this) - this.display.barWidth,
                  clientHeight: Ln(this),
                  clientWidth: Tn(this),
                };
              },
              scrollIntoView: ei(function(e, t) {
                null == e
                  ? ((e = { from: this.doc.sel.primary().head, to: null }),
                    null == t && (t = this.options.cursorScrollMargin))
                  : 'number' == typeof e
                  ? (e = { from: et(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                  e.to || (e.to = e.from),
                  (e.margin = t || 0),
                  null != e.from.line
                    ? (function(e, t) {
                        Nr(e), (e.curOp.scrollToPos = t);
                      })(this, e)
                    : Fr(this, e.from, e.to, e.margin);
              }),
              setSize: ei(function(e, t) {
                var n = this,
                  r = function(e) {
                    return 'number' == typeof e || /^\d+$/.test(String(e))
                      ? e + 'px'
                      : e;
                  };
                null != e && (this.display.wrapper.style.width = r(e)),
                  null != t && (this.display.wrapper.style.height = r(t)),
                  this.options.lineWrapping && qn(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function(e) {
                  if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                      if (e.widgets[t].noHScroll) {
                        fr(n, i, 'widget');
                        break;
                      }
                  ++i;
                }),
                  (this.curOp.forceUpdate = !0),
                  me(this, 'refresh', this);
              }),
              operation: function(e) {
                return Qr(this, e);
              },
              startOperation: function() {
                return Vr(this);
              },
              endOperation: function() {
                return Kr(this);
              },
              refresh: ei(function() {
                var e = this.display.cachedTextHeight;
                dr(this),
                  (this.curOp.forceUpdate = !0),
                  Wn(this),
                  Ar(this, this.doc.scrollLeft, this.doc.scrollTop),
                  si(this.display),
                  (null == e || Math.abs(e - rr(this.display)) > 0.5) &&
                    sr(this),
                  me(this, 'refresh', this);
              }),
              swapDoc: ei(function(e) {
                var t = this.doc;
                return (
                  (t.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  Fi(this, e),
                  Wn(this),
                  this.display.input.reset(),
                  Ar(this, e.scrollLeft, e.scrollTop),
                  (this.curOp.forceScroll = !0),
                  sn(this, 'swapDoc', this, t),
                  t
                );
              }),
              phrase: function(e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e)
                  ? t[e]
                  : e;
              },
              getInputField: function() {
                return this.display.input.getField();
              },
              getWrapperElement: function() {
                return this.display.wrapper;
              },
              getScrollerElement: function() {
                return this.display.scroller;
              },
              getGutterElement: function() {
                return this.display.gutters;
              },
            }),
              be(e),
              (e.registerHelper = function(t, r, i) {
                n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }),
                  (n[t][r] = i);
              }),
              (e.registerGlobalHelper = function(t, r, i, o) {
                e.registerHelper(t, r, o),
                  n[t]._global.push({ pred: i, val: o });
              });
          })(Ma);
        var $a = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var Va in Do.prototype)
          Do.prototype.hasOwnProperty(Va) &&
            W($a, Va) < 0 &&
            (Ma.prototype[Va] = (function(e) {
              return function() {
                return e.apply(this.doc, arguments);
              };
            })(Do.prototype[Va]));
        return (
          be(Do),
          (Ma.inputStyles = { textarea: Ua, contenteditable: qa }),
          (Ma.defineMode = function(e) {
            Ma.defaults.mode || 'null' == e || (Ma.defaults.mode = e),
              Pe.apply(this, arguments);
          }),
          (Ma.defineMIME = function(e, t) {
            je[e] = t;
          }),
          Ma.defineMode('null', function() {
            return {
              token: function(e) {
                return e.skipToEnd();
              },
            };
          }),
          Ma.defineMIME('text/plain', 'null'),
          (Ma.defineExtension = function(e, t) {
            Ma.prototype[e] = t;
          }),
          (Ma.defineDocExtension = function(e, t) {
            Do.prototype[e] = t;
          }),
          (Ma.fromTextArea = function(e, t) {
            if (
              (((t = t ? P(t) : {}).value = e.value),
              !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
              !t.placeholder &&
                e.placeholder &&
                (t.placeholder = e.placeholder),
              null == t.autofocus)
            ) {
              var n = A();
              t.autofocus =
                n == e ||
                (null != e.getAttribute('autofocus') && n == document.body);
            }
            function r() {
              e.value = l.getValue();
            }
            var i;
            if (
              e.form &&
              (fe(e.form, 'submit', r), !t.leaveSubmitMethodAlone)
            ) {
              var o = e.form;
              i = o.submit;
              try {
                var a = (o.submit = function() {
                  r(), (o.submit = i), o.submit(), (o.submit = a);
                });
              } catch (s) {}
            }
            (t.finishInit = function(n) {
              (n.save = r),
                (n.getTextArea = function() {
                  return e;
                }),
                (n.toTextArea = function() {
                  (n.toTextArea = isNaN),
                    r(),
                    e.parentNode.removeChild(n.getWrapperElement()),
                    (e.style.display = ''),
                    e.form &&
                      (he(e.form, 'submit', r),
                      t.leaveSubmitMethodAlone ||
                        'function' != typeof e.form.submit ||
                        (e.form.submit = i));
                });
            }),
              (e.style.display = 'none');
            var l = Ma(function(t) {
              return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return l;
          }),
          (function(e) {
            (e.off = he),
              (e.on = fe),
              (e.wheelEventPixels = bi),
              (e.Doc = Do),
              (e.splitLines = Ee),
              (e.countColumn = I),
              (e.findColumn = V),
              (e.isWordChar = ee),
              (e.Pass = R),
              (e.signal = me),
              (e.Line = Vt),
              (e.changeEnd = Si),
              (e.scrollbarModel = Hr),
              (e.Pos = et),
              (e.cmpPos = tt),
              (e.modes = ze),
              (e.mimeModes = je),
              (e.resolveMode = Ie),
              (e.getMode = qe),
              (e.modeExtensions = We),
              (e.extendMode = Be),
              (e.copyState = Re),
              (e.startState = Ue),
              (e.innerMode = He),
              (e.commands = ea),
              (e.keyMap = Ro),
              (e.keyName = Go),
              (e.isModifierKey = Vo),
              (e.lookupKey = $o),
              (e.normalizeKeyMap = Uo),
              (e.StringStream = $e),
              (e.SharedTextMarker = Mo),
              (e.TextMarker = Co),
              (e.LineWidget = wo),
              (e.e_preventDefault = xe),
              (e.e_stopPropagation = we),
              (e.e_stop = _e),
              (e.addClass = N),
              (e.contains = E),
              (e.rmClass = M),
              (e.keyNames = Io);
          })(Ma),
          (Ma.version = '5.49.0'),
          Ma
        );
      })();
    },
    834: function(e, t, n) {
      'use strict';
      n(682);
      var r = n(684),
        i = n(28),
        o = n(22),
        a = n(6);
      function l() {
        var e = Object(i.a)([
          '\n  &.ant-switch-checked {\n    border-color: ',
          ';\n    background-color: ',
          ';\n  }\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var s = (function(e) {
        return Object(o.c)(e)(
          l(),
          Object(a.palette)('primary', 0),
          Object(a.palette)('primary', 0)
        );
      })(r.a);
      t.a = s;
    },
  },
]);
//# sourceMappingURL=38.8519685a.chunk.js.map
