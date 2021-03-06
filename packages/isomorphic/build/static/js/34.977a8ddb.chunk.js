(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [34],
  {
    1125: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(2296);
      e.exports = (function() {
        function e(e) {
          var t = this;
          (this.locale = {
            strings: {},
            pluralize: function(e) {
              return 1 === e ? 0 : 1;
            },
          }),
            Array.isArray(e)
              ? e.forEach(function(e) {
                  return t._apply(e);
                })
              : this._apply(e);
        }
        var t = e.prototype;
        return (
          (t._apply = function(e) {
            if (e && e.strings) {
              var t = this.locale;
              (this.locale = r({}, t, {
                strings: r({}, t.strings, e.strings),
              })),
                (this.locale.pluralize = e.pluralize || t.pluralize);
            }
          }),
          (t.interpolate = function(e, t) {
            var n = String.prototype,
              r = n.split,
              o = n.replace,
              s = /\$/g,
              a = [e];
            for (var l in t)
              if ('_' !== l && i(t, l)) {
                var u = t[l];
                'string' === typeof u && (u = o.call(t[l], s, '$$$$')),
                  (a = p(a, new RegExp('%\\{' + l + '\\}', 'g'), u));
              }
            return a;
            function p(e, t, n) {
              var i = [];
              return (
                e.forEach(function(e) {
                  r.call(e, t).forEach(function(e, t, r) {
                    '' !== e && i.push(e), t < r.length - 1 && i.push(n);
                  });
                }),
                i
              );
            }
          }),
          (t.translate = function(e, t) {
            return this.translateArray(e, t).join('');
          }),
          (t.translateArray = function(e, t) {
            if (t && 'undefined' !== typeof t.smart_count) {
              var n = this.locale.pluralize(t.smart_count);
              return this.interpolate(this.locale.strings[e][n], t);
            }
            return this.interpolate(this.locale.strings[e], t);
          }),
          e
        );
      })();
    },
    1126: function(e, t) {
      e.exports = function(e) {
        return Array.prototype.slice.call(e || [], 0);
      };
    },
    1127: function(e, t, n) {
      var r = n(1),
        i = n(728).Uppy,
        o = r.instanceOf(i).isRequired,
        s = r.arrayOf(r.string),
        a = r.shape({ strings: r.object, pluralize: r.func }),
        l = r.shape({
          id: r.string.isRequired,
          name: r.string.isRequired,
          placeholder: r.string,
        }),
        u = r.arrayOf(l),
        p = r.oneOfType([r.string, r.number]),
        c = {
          uppy: o,
          inline: r.bool,
          plugins: s,
          width: p,
          height: p,
          showProgressDetails: r.bool,
          hideUploadButton: r.bool,
          hideProgressAfterFinish: r.bool,
          note: r.string,
          metaFields: u,
          proudlyDisplayPoweredByUppy: r.bool,
          disableStatusBar: r.bool,
          disableInformer: r.bool,
          disableThumbnailGenerator: r.bool,
          thumbnailWidth: r.number,
          locale: a,
        };
      e.exports = { uppy: o, locale: a, dashboard: c };
    },
    1215: function(e, t, n) {
      'use strict';
      var r = n(1768),
        i = n(2323),
        o = n(2325);
      e.exports = { RequestClient: r, Provider: i, Socket: o };
    },
    1567: function(e, t) {
      e.exports = function(e) {
        if ('number' !== typeof e || isNaN(e))
          throw new TypeError('Expected a number, got ' + typeof e);
        var t = e < 0,
          n = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        t && (e = -e);
        if (e < 1) return (t ? '-' : '') + e + ' B';
        var r = Math.min(
          Math.floor(Math.log(e) / Math.log(1024)),
          n.length - 1
        );
        e = Number(e / Math.pow(1024, r));
        var i = n[r];
        return e >= 10 || e % 1 === 0
          ? (t ? '-' : '') + e.toFixed(0) + ' ' + i
          : (t ? '-' : '') + e.toFixed(1) + ' ' + i;
      };
    },
    1568: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      var s = n(573),
        a = s.h,
        l = s.Component,
        u = n(2334),
        p = n(2335),
        c = n(2344),
        d = n(1763),
        h = n(1761),
        f = n(1769);
      var g = (function(e) {
        var t, n;
        function r() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var i = r.prototype;
        return (
          (i.componentWillUnmount = function() {
            this.props.onUnmount();
          }),
          (i.render = function() {
            return this.props.children[0];
          }),
          r
        );
      })(l);
      e.exports =
        ((i = r = (function() {
          function e(e, t) {
            (this.plugin = e), (this.provider = t.provider);
            (this.opts = o(
              {},
              {
                viewType: 'list',
                showTitles: !0,
                showFilter: !0,
                showBreadcrumbs: !0,
              },
              {},
              t
            )),
              (this.addFile = this.addFile.bind(this)),
              (this.filterItems = this.filterItems.bind(this)),
              (this.filterQuery = this.filterQuery.bind(this)),
              (this.toggleSearch = this.toggleSearch.bind(this)),
              (this.getFolder = this.getFolder.bind(this)),
              (this.getNextFolder = this.getNextFolder.bind(this)),
              (this.logout = this.logout.bind(this)),
              (this.preFirstRender = this.preFirstRender.bind(this)),
              (this.handleAuth = this.handleAuth.bind(this)),
              (this.sortByTitle = this.sortByTitle.bind(this)),
              (this.sortByDate = this.sortByDate.bind(this)),
              (this.isActiveRow = this.isActiveRow.bind(this)),
              (this.isChecked = this.isChecked.bind(this)),
              (this.toggleCheckbox = this.toggleCheckbox.bind(this)),
              (this.handleError = this.handleError.bind(this)),
              (this.handleScroll = this.handleScroll.bind(this)),
              (this.listAllFiles = this.listAllFiles.bind(this)),
              (this.donePicking = this.donePicking.bind(this)),
              (this.cancelPicking = this.cancelPicking.bind(this)),
              (this.clearSelection = this.clearSelection.bind(this)),
              (this.render = this.render.bind(this)),
              this.clearSelection();
          }
          var t = e.prototype;
          return (
            (t.tearDown = function() {}),
            (t._updateFilesAndFolders = function(e, t, n) {
              (this.nextPagePath = e.nextPagePath),
                e.items.forEach(function(e) {
                  e.isFolder ? n.push(e) : t.push(e);
                }),
                this.plugin.setPluginState({ folders: n, files: t });
            }),
            (t.preFirstRender = function() {
              this.plugin.setPluginState({ didFirstRender: !0 }),
                this.plugin.onFirstRender();
            }),
            (t.getFolder = function(e, t) {
              var n = this;
              return this._loaderWrapper(
                this.provider.list(e),
                function(r) {
                  var i,
                    o = n.plugin.getPluginState(),
                    s = (function(e, t) {
                      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
                      return -1;
                    })(o.directories, function(t) {
                      return e === t.id;
                    });
                  (i =
                    -1 !== s
                      ? o.directories.slice(0, s + 1)
                      : o.directories.concat([{ id: e, title: t }])),
                    (n.username = n.username ? n.username : r.username),
                    n._updateFilesAndFolders(r, [], []),
                    n.plugin.setPluginState({ directories: i });
                },
                this.handleError
              );
            }),
            (t.getNextFolder = function(e) {
              this.getFolder(e.requestPath, e.name),
                (this.lastCheckbox = void 0);
            }),
            (t.addFile = function(e) {
              var t = {
                  id: this.providerFileToId(e),
                  source: this.plugin.id,
                  data: e,
                  name: e.name || e.id,
                  type: e.mimeType,
                  isRemote: !0,
                  body: { fileId: e.id },
                  remote: {
                    companionUrl: this.plugin.opts.companionUrl,
                    url: '' + this.provider.fileUrl(e.requestPath),
                    body: { fileId: e.id },
                    providerOptions: this.provider.opts,
                  },
                },
                n = h(t);
              n && f(n) && (t.preview = e.thumbnail),
                this.plugin.uppy.log('Adding remote file');
              try {
                this.plugin.uppy.addFile(t);
              } catch (r) {
                r.isRestriction || this.plugin.uppy.log(r);
              }
            }),
            (t.removeFile = function(e) {
              var t = this.plugin.getPluginState().currentSelection;
              this.plugin.setPluginState({
                currentSelection: t.filter(function(t) {
                  return t.id !== e;
                }),
              });
            }),
            (t.logout = function() {
              var e = this;
              this.provider
                .logout()
                .then(function(t) {
                  if (t.ok) {
                    if (!t.revoked) {
                      var n = e.plugin.uppy.i18n('companionUnauthorizeHint', {
                        provider: e.plugin.title,
                        url: t.manual_revoke_url,
                      });
                      e.plugin.uppy.info(n, 'info', 7e3);
                    }
                    e.plugin.setPluginState({
                      authenticated: !1,
                      files: [],
                      folders: [],
                      directories: [],
                    });
                  }
                })
                .catch(this.handleError);
            }),
            (t.filterQuery = function(e) {
              var t = this.plugin.getPluginState();
              this.plugin.setPluginState(
                o({}, t, { filterInput: e ? e.target.value : '' })
              );
            }),
            (t.toggleSearch = function(e) {
              var t = this.plugin.getPluginState();
              this.plugin.setPluginState({
                isSearchVisible: !t.isSearchVisible,
                filterInput: '',
              });
            }),
            (t.filterItems = function(e) {
              var t = this.plugin.getPluginState();
              return t.filterInput && '' !== t.filterInput
                ? e.filter(function(e) {
                    return (
                      -1 !==
                      e.name.toLowerCase().indexOf(t.filterInput.toLowerCase())
                    );
                  })
                : e;
            }),
            (t.sortByTitle = function() {
              var e = o({}, this.plugin.getPluginState()),
                t = e.files,
                n = e.folders,
                r = e.sorting,
                i = t.sort(function(e, t) {
                  return 'titleDescending' === r
                    ? t.name.localeCompare(e.name)
                    : e.name.localeCompare(t.name);
                }),
                s = n.sort(function(e, t) {
                  return 'titleDescending' === r
                    ? t.name.localeCompare(e.name)
                    : e.name.localeCompare(t.name);
                });
              this.plugin.setPluginState(
                o({}, e, {
                  files: i,
                  folders: s,
                  sorting:
                    'titleDescending' === r
                      ? 'titleAscending'
                      : 'titleDescending',
                })
              );
            }),
            (t.sortByDate = function() {
              var e = o({}, this.plugin.getPluginState()),
                t = e.files,
                n = e.folders,
                r = e.sorting,
                i = t.sort(function(e, t) {
                  var n = new Date(e.modifiedDate),
                    i = new Date(t.modifiedDate);
                  return 'dateDescending' === r
                    ? n > i
                      ? -1
                      : n < i
                      ? 1
                      : 0
                    : n > i
                    ? 1
                    : n < i
                    ? -1
                    : 0;
                }),
                s = n.sort(function(e, t) {
                  var n = new Date(e.modifiedDate),
                    i = new Date(t.modifiedDate);
                  return 'dateDescending' === r
                    ? n > i
                      ? -1
                      : n < i
                      ? 1
                      : 0
                    : n > i
                    ? 1
                    : n < i
                    ? -1
                    : 0;
                });
              this.plugin.setPluginState(
                o({}, e, {
                  files: i,
                  folders: s,
                  sorting:
                    'dateDescending' === r ? 'dateAscending' : 'dateDescending',
                })
              );
            }),
            (t.sortBySize = function() {
              var e = o({}, this.plugin.getPluginState()),
                t = e.files,
                n = e.sorting;
              if (t.length && this.plugin.getItemData(t[0]).size) {
                var r = t.sort(function(e, t) {
                  var r = e.size,
                    i = t.size;
                  return 'sizeDescending' === n
                    ? r > i
                      ? -1
                      : r < i
                      ? 1
                      : 0
                    : r > i
                    ? 1
                    : r < i
                    ? -1
                    : 0;
                });
                this.plugin.setPluginState(
                  o({}, e, {
                    files: r,
                    sorting:
                      'sizeDescending' === n
                        ? 'sizeAscending'
                        : 'sizeDescending',
                  })
                );
              }
            }),
            (t.isActiveRow = function(e) {
              return (
                this.plugin.getPluginState().activeRow ===
                this.plugin.getItemId(e)
              );
            }),
            (t.isChecked = function(e) {
              return this.plugin
                .getPluginState()
                .currentSelection.some(function(t) {
                  return t.id === e.id;
                });
            }),
            (t.addFolder = function(e) {
              var t = this,
                n = this.providerFileToId(e),
                r = this.plugin.getPluginState(),
                i = r.selectedFolders || {};
              if (!(n in i && i[n].loading))
                return (
                  (i[n] = { loading: !0, files: [] }),
                  this.plugin.setPluginState({ selectedFolders: i }),
                  this.listAllFiles(e.requestPath)
                    .then(function(o) {
                      o.forEach(function(e) {
                        t.addFile(e);
                      });
                      var s,
                        a = o.map(t.providerFileToId);
                      ((r = t.plugin.getPluginState()).selectedFolders[n] = {
                        loading: !1,
                        files: a,
                      }),
                        t.plugin.setPluginState({ selectedFolders: i }),
                        (s = o.length
                          ? t.plugin.uppy.i18n('folderAdded', {
                              smart_count: o.length,
                              folder: e.name,
                            })
                          : t.plugin.uppy.i18n('emptyFolderAdded')),
                        t.plugin.uppy.info(s);
                    })
                    .catch(function(e) {
                      delete (r = t.plugin.getPluginState()).selectedFolders[n],
                        t.plugin.setPluginState({
                          selectedFolders: r.selectedFolders,
                        }),
                        t.handleError(e);
                    })
                );
            }),
            (t.toggleCheckbox = function(e, t) {
              e.stopPropagation(), e.preventDefault(), e.currentTarget.focus();
              var n = this.plugin.getPluginState(),
                r = n.folders,
                i = n.files,
                o = this.filterItems(r.concat(i));
              if (this.lastCheckbox && e.shiftKey) {
                var s,
                  a = o.indexOf(this.lastCheckbox),
                  l = o.indexOf(t);
                return (
                  (s = a < l ? o.slice(a, l + 1) : o.slice(l, a + 1)),
                  void this.plugin.setPluginState({ currentSelection: s })
                );
              }
              this.lastCheckbox = t;
              var u = this.plugin.getPluginState().currentSelection;
              this.isChecked(t)
                ? this.plugin.setPluginState({
                    currentSelection: u.filter(function(e) {
                      return e.id !== t.id;
                    }),
                  })
                : this.plugin.setPluginState({
                    currentSelection: u.concat([t]),
                  });
            }),
            (t.providerFileToId = function(e) {
              return d({ data: e, name: e.name || e.id, type: e.mimeType });
            }),
            (t.handleAuth = function() {
              var t = this,
                n = btoa(
                  JSON.stringify({
                    origin:
                      'origin' in location
                        ? location.origin
                        : location.protocol +
                          '//' +
                          location.hostname +
                          (location.port ? ':' + location.port : ''),
                  })
                ),
                r = encodeURIComponent('@uppy/provider-views=' + e.VERSION),
                i =
                  this.provider.authUrl() +
                  '?state=' +
                  n +
                  '&uppyVersions=' +
                  r,
                o = window.open(i, '_blank');
              window.addEventListener('message', function e(n) {
                if (
                  t._isOriginAllowed(
                    n.origin,
                    t.plugin.opts.companionAllowedHosts
                  ) &&
                  n.source === o
                ) {
                  var r =
                    'string' === typeof n.data ? JSON.parse(n.data) : n.data;
                  r.token
                    ? (o.close(),
                      window.removeEventListener('message', e),
                      t.provider.setAuthToken(r.token),
                      t.preFirstRender())
                    : t.plugin.uppy.log(
                        'did not receive token from auth window'
                      );
                } else t.plugin.uppy.log('rejecting event from ' + n.origin + ' vs allowed pattern ' + t.plugin.opts.companionAllowedHosts);
              });
            }),
            (t._isOriginAllowed = function(e, t) {
              var n = function(e) {
                return 'string' === typeof e
                  ? new RegExp('^' + e + '$')
                  : e instanceof RegExp
                  ? e
                  : void 0;
              };
              return (Array.isArray(t) ? t.map(n) : [n(t)])
                .filter(function(e) {
                  return null != e;
                })
                .some(function(t) {
                  return t.test(e) || t.test(e + '/');
                });
            }),
            (t.handleError = function(e) {
              var t = this.plugin.uppy;
              if ((t.log(e.toString()), !e.isAuthError)) {
                var n = t.i18n('companionError');
                t.info({ message: n, details: e.toString() }, 'error', 5e3);
              }
            }),
            (t.handleScroll = function(e) {
              var t = this,
                n =
                  e.target.scrollHeight -
                  (e.target.scrollTop + e.target.offsetHeight),
                r = this.nextPagePath || null;
              n < 50 &&
                r &&
                !this._isHandlingScroll &&
                (this.provider
                  .list(r)
                  .then(function(e) {
                    var n = t.plugin.getPluginState(),
                      r = n.files,
                      i = n.folders;
                    t._updateFilesAndFolders(e, r, i);
                  })
                  .catch(this.handleError)
                  .then(function() {
                    t._isHandlingScroll = !1;
                  }),
                (this._isHandlingScroll = !0));
            }),
            (t.listAllFiles = function(e, t) {
              var n = this;
              return (
                void 0 === t && (t = null),
                (t = t || []),
                new Promise(function(r, i) {
                  n.provider
                    .list(e)
                    .then(function(e) {
                      e.items.forEach(function(e) {
                        e.isFolder || t.push(e);
                      });
                      var o = e.nextPagePath || null;
                      return o
                        ? n
                            .listAllFiles(o, t)
                            .then(function(e) {
                              return r(e);
                            })
                            .catch(function(e) {
                              return i(e);
                            })
                        : r(t);
                    })
                    .catch(function(e) {
                      return i(e);
                    });
                })
              );
            }),
            (t.donePicking = function() {
              var e = this,
                t = this.plugin
                  .getPluginState()
                  .currentSelection.map(function(t) {
                    return t.isFolder ? e.addFolder(t) : e.addFile(t);
                  });
              this._loaderWrapper(
                Promise.all(t),
                function() {
                  e.clearSelection();
                },
                function() {}
              );
            }),
            (t.cancelPicking = function() {
              this.clearSelection();
              var e = this.plugin.uppy.getPlugin('Dashboard');
              e && e.hideAllPanels();
            }),
            (t.clearSelection = function() {
              this.plugin.setPluginState({ currentSelection: [] });
            }),
            (t._loaderWrapper = function(e, t, n) {
              var r = this;
              e
                .then(function(e) {
                  r.plugin.setPluginState({ loading: !1 }), t(e);
                })
                .catch(function(e) {
                  r.plugin.setPluginState({ loading: !1 }), n(e);
                }),
                this.plugin.setPluginState({ loading: !0 });
            }),
            (t.render = function(e) {
              var t = this.plugin.getPluginState(),
                n = t.authenticated;
              if (
                (t.didFirstRender || this.preFirstRender(),
                this.plugin.getPluginState().loading)
              )
                return a(
                  g,
                  { onUnmount: this.clearSelection },
                  a(c, { i18n: this.plugin.uppy.i18n })
                );
              if (!n)
                return a(
                  g,
                  { onUnmount: this.clearSelection },
                  a(u, {
                    pluginName: this.plugin.title,
                    pluginIcon: this.plugin.icon,
                    handleAuth: this.handleAuth,
                    i18n: this.plugin.uppy.i18n,
                    i18nArray: this.plugin.uppy.i18nArray,
                  })
                );
              var r = o({}, this.plugin.getPluginState(), {
                username: this.username,
                getNextFolder: this.getNextFolder,
                getFolder: this.getFolder,
                filterItems: this.filterItems,
                filterQuery: this.filterQuery,
                toggleSearch: this.toggleSearch,
                sortByTitle: this.sortByTitle,
                sortByDate: this.sortByDate,
                logout: this.logout,
                isActiveRow: this.isActiveRow,
                isChecked: this.isChecked,
                toggleCheckbox: this.toggleCheckbox,
                handleScroll: this.handleScroll,
                listAllFiles: this.listAllFiles,
                done: this.donePicking,
                cancel: this.cancelPicking,
                title: this.plugin.title,
                viewType: this.opts.viewType,
                showTitles: this.opts.showTitles,
                showFilter: this.opts.showFilter,
                showBreadcrumbs: this.opts.showBreadcrumbs,
                pluginIcon: this.plugin.icon,
                i18n: this.plugin.uppy.i18n,
              });
              return a(g, { onUnmount: this.clearSelection }, a(p, r));
            }),
            e
          );
        })()),
        (r.VERSION = '1.4.0'),
        i);
    },
    1569: function(e, t, n) {
      var r = n(960),
        i = r.iconFile,
        o = r.iconText,
        s = r.iconAudio,
        a = r.iconVideo,
        l = r.iconPDF;
      e.exports = function(e) {
        var t = { color: '#838999', icon: i() };
        if (!e) return t;
        var n = e.split('/')[0],
          r = e.split('/')[1];
        return 'text' === n
          ? { color: '#5a5e69', icon: o() }
          : 'audio' === n
          ? { color: '#068dbb', icon: s() }
          : 'video' === n
          ? { color: '#19af67', icon: a() }
          : 'application' === n && 'pdf' === r
          ? { color: '#e25149', icon: l() }
          : 'image' === n
          ? { color: '#f2f2f2', icon: '' }
          : t;
      };
    },
    1758: function(e, t) {
      e.exports = function() {
        var e = {},
          t = (e._fns = {});
        return (
          (e.emit = function(e, n, r, i, o, s, a) {
            var l = (function(e) {
              var n = t[e] ? t[e] : [],
                r = e.indexOf(':'),
                i = -1 === r ? [e] : [e.substring(0, r), e.substring(r + 1)],
                o = Object.keys(t),
                s = 0,
                a = o.length;
              for (; s < a; s++) {
                var l = o[s];
                if (
                  ('*' === l && (n = n.concat(t[l])),
                  2 === i.length && i[0] === l)
                ) {
                  n = n.concat(t[l]);
                  break;
                }
              }
              return n;
            })(e);
            l.length &&
              (function(e, t, n) {
                var r = 0,
                  i = t.length;
                for (; r < i && t[r]; r++)
                  (t[r].event = e), t[r].apply(t[r], n);
              })(e, l, [n, r, i, o, s, a]);
          }),
          (e.on = function(e, n) {
            t[e] || (t[e] = []), t[e].push(n);
          }),
          (e.once = function(t, n) {
            this.on(t, function r() {
              n.apply(this, arguments), e.off(t, r);
            });
          }),
          (e.off = function(e, t) {
            var n = [];
            if (e && t)
              for (
                var r = this._fns[e], i = 0, o = r ? r.length : 0;
                i < o;
                i++
              )
                r[i] !== t && n.push(r[i]);
            n.length ? (this._fns[e] = n) : delete this._fns[e];
          }),
          e
        );
      };
    },
    1759: function(e, t, n) {
      var r = n(2297),
        i = n(1760),
        o = n(2298),
        s = 0,
        a = 4,
        l = 36,
        u = Math.pow(l, a);
      function p() {
        return i(((o() * u) << 0).toString(l), a);
      }
      function c() {
        return (s = s < u ? s : 0), ++s - 1;
      }
      function d() {
        return (
          'c' +
          new Date().getTime().toString(l) +
          i(c().toString(l), a) +
          r() +
          (p() + p())
        );
      }
      (d.slug = function() {
        var e = new Date().getTime().toString(36),
          t = c()
            .toString(36)
            .slice(-4),
          n = r().slice(0, 1) + r().slice(-1),
          i = p().slice(-2);
        return e.slice(-2) + t + n + i;
      }),
        (d.isCuid = function(e) {
          return 'string' === typeof e && !!e.startsWith('c');
        }),
        (d.isSlug = function(e) {
          if ('string' !== typeof e) return !1;
          var t = e.length;
          return t >= 7 && t <= 10;
        }),
        (d.fingerprint = r),
        (e.exports = d);
    },
    1760: function(e, t) {
      e.exports = function(e, t) {
        var n = '000000000' + e;
        return n.substr(n.length - t);
      };
    },
    1761: function(e, t, n) {
      var r = n(1762),
        i = n(2302);
      e.exports = function(e) {
        var t = e.name ? r(e.name).extension : null;
        return (
          (t = t ? t.toLowerCase() : null),
          e.type ? e.type : t && i[t] ? i[t] : 'application/octet-stream'
        );
      };
    },
    1762: function(e, t) {
      e.exports = function(e) {
        var t = /(?:\.([^.]+))?$/.exec(e)[1];
        return { name: e.replace('.' + t, ''), extension: t };
      };
    },
    1763: function(e, t) {
      function n(e) {
        var t = '';
        return (
          e.replace(/[^A-Z0-9]/gi, function(e) {
            return (
              (t +=
                '-' +
                (function(e) {
                  return e.charCodeAt(0).toString(32);
                })(e)),
              '/'
            );
          }) + t
        );
      }
      e.exports = function(e) {
        return [
          'uppy',
          e.name ? n(e.name.toLowerCase()) : '',
          e.type,
          e.meta && e.meta.relativePath
            ? n(e.meta.relativePath.toLowerCase())
            : '',
          e.data.size,
          e.data.lastModified,
        ]
          .filter(function(e) {
            return e;
          })
          .join('-');
      };
    },
    1764: function(e, t) {
      e.exports = function(e) {
        return e && 'object' === typeof e && e.nodeType === Node.ELEMENT_NODE;
      };
    },
    1765: function(e, t, n) {
      'use strict';
      var r,
        i = n(2309),
        o = (r = i) && r.__esModule ? r : { default: r },
        s = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(1767));
      var a = o.default.defaultOptions,
        l = {
          Upload: o.default,
          canStoreURLs: s.canStoreURLs,
          defaultOptions: a,
        };
      if ('undefined' !== typeof window) {
        var u = window,
          p = u.XMLHttpRequest,
          c = u.Blob;
        l.isSupported = p && c && 'function' === typeof c.prototype.slice;
      } else (l.isSupported = !0), (l.FileStorage = s.FileStorage);
      e.exports = l;
    },
    1766: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = function() {
        return (
          'undefined' !== typeof navigator &&
          'string' === typeof navigator.product &&
          'reactnative' === navigator.product.toLowerCase()
        );
      };
    },
    1767: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.getStorage = function() {
        return i ? new s() : null;
      };
      var i = !1;
      try {
        i = 'localStorage' in window;
        var o = 'tusSupport';
        localStorage.setItem(o, localStorage.getItem(o));
      } catch (a) {
        if (a.code !== a.SECURITY_ERR && a.code !== a.QUOTA_EXCEEDED_ERR)
          throw a;
        i = !1;
      }
      t.canStoreURLs = i;
      var s = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
        }
        return (
          r(e, [
            {
              key: 'setItem',
              value: function(e, t, n) {
                n(null, localStorage.setItem(e, t));
              },
            },
            {
              key: 'getItem',
              value: function(e, t) {
                t(null, localStorage.getItem(e));
              },
            },
            {
              key: 'removeItem',
              value: function(e, t) {
                t(null, localStorage.removeItem(e));
              },
            },
          ]),
          e
        );
      })();
    },
    1768: function(e, t, n) {
      'use strict';
      var r, i;
      function o() {
        return (o =
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
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = n(2322);
      e.exports =
        ((i = r = (function() {
          function e(e, t) {
            (this.uppy = e),
              (this.opts = t),
              (this.onReceiveResponse = this.onReceiveResponse.bind(this)),
              (this.allowedHeaders = [
                'accept',
                'content-type',
                'uppy-auth-token',
              ]),
              (this.preflightDone = !1);
          }
          var t,
            n,
            r,
            i = e.prototype;
          return (
            (i.headers = function() {
              var e =
                this.opts.companionHeaders || this.opts.serverHeaders || {};
              return Promise.resolve(o({}, this.defaultHeaders, {}, e));
            }),
            (i._getPostResponseFunc = function(e) {
              var t = this;
              return function(n) {
                return e ? n : t.onReceiveResponse(n);
              };
            }),
            (i.onReceiveResponse = function(e) {
              var t,
                n = this.uppy.getState().companion || {},
                r = this.opts.companionUrl,
                i = e.headers;
              i.has('i-am') &&
                i.get('i-am') !== n[r] &&
                this.uppy.setState({
                  companion: o({}, n, ((t = {}), (t[r] = i.get('i-am')), t)),
                });
              return e;
            }),
            (i._getUrl = function(e) {
              return /^(https?:|)\/\//.test(e) ? e : this.hostname + '/' + e;
            }),
            (i._json = function(e) {
              if (401 === e.status) throw new a();
              if (e.status < 200 || e.status > 300) {
                var t =
                  'Failed request with status: ' +
                  e.status +
                  '. ' +
                  e.statusText;
                return e
                  .json()
                  .then(function(e) {
                    throw ((t = e.message ? t + ' message: ' + e.message : t),
                    (t = e.requestId ? t + ' request-Id: ' + e.requestId : t),
                    new Error(t));
                  })
                  .catch(function() {
                    throw new Error(t);
                  });
              }
              return e.json();
            }),
            (i.preflight = function(e) {
              var t = this;
              return new Promise(function(n, r) {
                if (t.preflightDone) return n(t.allowedHeaders.slice());
                fetch(t._getUrl(e), { method: 'OPTIONS' })
                  .then(function(e) {
                    e.headers.has('access-control-allow-headers') &&
                      (t.allowedHeaders = e.headers
                        .get('access-control-allow-headers')
                        .split(',')
                        .map(function(e) {
                          return e.trim().toLowerCase();
                        })),
                      (t.preflightDone = !0),
                      n(t.allowedHeaders.slice());
                  })
                  .catch(function(e) {
                    t.uppy.log(
                      '[CompanionClient] unable to make preflight request ' + e,
                      'warning'
                    ),
                      (t.preflightDone = !0),
                      n(t.allowedHeaders.slice());
                  });
              });
            }),
            (i.preflightAndHeaders = function(e) {
              var t = this;
              return Promise.all([this.preflight(e), this.headers()]).then(
                function(e) {
                  var n = e[0],
                    r = e[1];
                  return (
                    Object.keys(r).forEach(function(e) {
                      -1 === n.indexOf(e.toLowerCase()) &&
                        (t.uppy.log(
                          '[CompanionClient] excluding unallowed header ' + e
                        ),
                        delete r[e]);
                    }),
                    r
                  );
                }
              );
            }),
            (i.get = function(e, t) {
              var n = this;
              return new Promise(function(r, i) {
                n.preflightAndHeaders(e)
                  .then(function(o) {
                    fetch(n._getUrl(e), {
                      method: 'get',
                      headers: o,
                      credentials: 'same-origin',
                    })
                      .then(n._getPostResponseFunc(t))
                      .then(function(e) {
                        return n._json(e).then(r);
                      })
                      .catch(function(t) {
                        (t = t.isAuthError
                          ? t
                          : new Error(
                              'Could not get ' + n._getUrl(e) + '. ' + t
                            )),
                          i(t);
                      });
                  })
                  .catch(i);
              });
            }),
            (i.post = function(e, t, n) {
              var r = this;
              return new Promise(function(i, o) {
                r.preflightAndHeaders(e)
                  .then(function(s) {
                    fetch(r._getUrl(e), {
                      method: 'post',
                      headers: s,
                      credentials: 'same-origin',
                      body: JSON.stringify(t),
                    })
                      .then(r._getPostResponseFunc(n))
                      .then(function(e) {
                        return r._json(e).then(i);
                      })
                      .catch(function(t) {
                        (t = t.isAuthError
                          ? t
                          : new Error(
                              'Could not post ' + r._getUrl(e) + '. ' + t
                            )),
                          o(t);
                      });
                  })
                  .catch(o);
              });
            }),
            (i.delete = function(e, t, n) {
              var r = this;
              return new Promise(function(i, o) {
                r.preflightAndHeaders(e)
                  .then(function(s) {
                    fetch(r.hostname + '/' + e, {
                      method: 'delete',
                      headers: s,
                      credentials: 'same-origin',
                      body: t ? JSON.stringify(t) : null,
                    })
                      .then(r._getPostResponseFunc(n))
                      .then(function(e) {
                        return r._json(e).then(i);
                      })
                      .catch(function(t) {
                        (t = t.isAuthError
                          ? t
                          : new Error(
                              'Could not delete ' + r._getUrl(e) + '. ' + t
                            )),
                          o(t);
                      });
                  })
                  .catch(o);
              });
            }),
            (t = e),
            (n = [
              {
                key: 'hostname',
                get: function() {
                  var e = this.uppy.getState().companion,
                    t = this.opts.companionUrl;
                  return (e && e[t] ? e[t] : t).replace(/\/$/, '');
                },
              },
              {
                key: 'defaultHeaders',
                get: function() {
                  return {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Uppy-Versions': '@uppy/companion-client=' + e.VERSION,
                  };
                },
              },
            ]) && s(t.prototype, n),
            r && s(t, r),
            e
          );
        })()),
        (r.VERSION = '1.4.1'),
        i);
    },
    1769: function(e, t) {
      e.exports = function(e) {
        if (!e) return !1;
        var t = e.split('/')[1];
        return !!/^(jpe?g|gif|png|svg|svg\+xml|bmp)$/.test(t);
      };
    },
    1770: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(0),
        o = n(1771),
        s = n(1127).dashboard,
        a = i.createElement,
        l = (function(e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var s = i.prototype;
          return (
            (s.componentDidMount = function() {
              this.installPlugin();
            }),
            (s.componentDidUpdate = function(e) {
              e.uppy !== this.props.uppy &&
                (this.uninstallPlugin(e), this.installPlugin());
            }),
            (s.componentWillUnmount = function() {
              this.uninstallPlugin();
            }),
            (s.installPlugin = function() {
              var e = this.props.uppy,
                t = r({ id: 'react:Dashboard' }, this.props, {
                  target: this.container,
                });
              delete t.uppy, e.use(o, t), (this.plugin = e.getPlugin(t.id));
            }),
            (s.uninstallPlugin = function(e) {
              void 0 === e && (e = this.props),
                e.uppy.removePlugin(this.plugin);
            }),
            (s.render = function() {
              var e = this;
              return a('div', {
                ref: function(t) {
                  e.container = t;
                },
              });
            }),
            i
          );
        })(i.Component);
      (l.propTypes = s), (l.defaultProps = { inline: !0 }), (e.exports = l);
    },
    1771: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var a = n(728).Plugin,
        l = n(1125),
        u = n(2348),
        p = n(1775),
        c = n(2371),
        d = n(2372),
        h = n(2377),
        f = n(1126),
        g = n(1777),
        v = n(2382),
        m = n(1759),
        y = n(321).default || n(321),
        b = n(960).defaultPickerIcon,
        w = n(2383),
        P = n(151).default || n(151);
      function S() {
        var e = {};
        return (
          (e.promise = new Promise(function(t, n) {
            (e.resolve = t), (e.reject = n);
          })),
          e
        );
      }
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).cancelUpload = function(e) {
              r.uppy.removeFile(e);
            }),
              (r.saveFileCard = function(e, t) {
                r.uppy.setFileMeta(t, e), r.toggleFileCard();
              }),
              (r._attachRenderFunctionToTarget = function(e) {
                var t = r.uppy.getPlugin(e.id);
                return o({}, e, {
                  icon: t.icon || r.opts.defaultPickerIcon,
                  render: t.render,
                });
              }),
              (r._isTargetSupported = function(e) {
                var t = r.uppy.getPlugin(e.id);
                return 'function' !== typeof t.isSupported || t.isSupported();
              }),
              (r._getAcquirers = P(function(e) {
                return e
                  .filter(function(e) {
                    return 'acquirer' === e.type && r._isTargetSupported(e);
                  })
                  .map(r._attachRenderFunctionToTarget);
              })),
              (r._getProgressIndicators = P(function(e) {
                return e
                  .filter(function(e) {
                    return 'progressindicator' === e.type;
                  })
                  .map(r._attachRenderFunctionToTarget);
              })),
              (r.id = r.opts.id || 'Dashboard'),
              (r.title = 'Dashboard'),
              (r.type = 'orchestrator'),
              (r.modalName = 'uppy-Dashboard-' + m()),
              (r.defaultLocale = {
                strings: {
                  closeModal: 'Close Modal',
                  importFrom: 'Import from %{name}',
                  addingMoreFiles: 'Adding more files',
                  addMoreFiles: 'Add more files',
                  dashboardWindowTitle:
                    'File Uploader Window (Press escape to close)',
                  dashboardTitle: 'File Uploader',
                  copyLinkToClipboardSuccess: 'Link copied to clipboard',
                  copyLinkToClipboardFallback: 'Copy the URL below',
                  copyLink: 'Copy link',
                  link: 'Link',
                  fileSource: 'File source: %{name}',
                  done: 'Done',
                  back: 'Back',
                  addMore: 'Add more',
                  removeFile: 'Remove file',
                  editFile: 'Edit file',
                  editing: 'Editing %{file}',
                  edit: 'Edit',
                  finishEditingFile: 'Finish editing file',
                  saveChanges: 'Save changes',
                  cancel: 'Cancel',
                  myDevice: 'My Device',
                  dropPasteImport:
                    'Drop files here, paste, %{browse} or import from',
                  dropPaste: 'Drop files here, paste or %{browse}',
                  dropHint: 'Drop your files here',
                  browse: 'browse',
                  uploadComplete: 'Upload complete',
                  uploadPaused: 'Upload paused',
                  resumeUpload: 'Resume upload',
                  pauseUpload: 'Pause upload',
                  retryUpload: 'Retry upload',
                  cancelUpload: 'Cancel upload',
                  xFilesSelected: {
                    0: '%{smart_count} file selected',
                    1: '%{smart_count} files selected',
                    2: '%{smart_count} files selected',
                  },
                  uploadingXFiles: {
                    0: 'Uploading %{smart_count} file',
                    1: 'Uploading %{smart_count} files',
                    2: 'Uploading %{smart_count} files',
                  },
                  processingXFiles: {
                    0: 'Processing %{smart_count} file',
                    1: 'Processing %{smart_count} files',
                    2: 'Processing %{smart_count} files',
                  },
                  poweredBy: 'Powered by',
                },
              });
            var i = {
              target: 'body',
              metaFields: [],
              trigger: '#uppy-select-files',
              inline: !1,
              width: 750,
              height: 550,
              thumbnailWidth: 280,
              waitForThumbnailsBeforeUpload: !1,
              defaultPickerIcon: b,
              showLinkToFileUploadResult: !0,
              showProgressDetails: !1,
              hideUploadButton: !1,
              hideRetryButton: !1,
              hidePauseResumeCancelButtons: !1,
              hideProgressAfterFinish: !1,
              note: null,
              closeModalOnClickOutside: !1,
              closeAfterFinish: !1,
              disableStatusBar: !1,
              disableInformer: !1,
              disableThumbnailGenerator: !1,
              disablePageScrollWhenModalOpen: !0,
              animateOpenClose: !0,
              proudlyDisplayPoweredByUppy: !0,
              onRequestCloseModal: function() {
                return r.closeModal();
              },
              showSelectedFiles: !0,
              browserBackButtonClose: !1,
            };
            return (
              (r.opts = o({}, i, {}, n)),
              (r.translator = new l([
                r.defaultLocale,
                r.uppy.locale,
                r.opts.locale,
              ])),
              (r.i18n = r.translator.translate.bind(r.translator)),
              (r.i18nArray = r.translator.translateArray.bind(r.translator)),
              (r.openModal = r.openModal.bind(s(r))),
              (r.closeModal = r.closeModal.bind(s(r))),
              (r.requestCloseModal = r.requestCloseModal.bind(s(r))),
              (r.isModalOpen = r.isModalOpen.bind(s(r))),
              (r.addTarget = r.addTarget.bind(s(r))),
              (r.removeTarget = r.removeTarget.bind(s(r))),
              (r.hideAllPanels = r.hideAllPanels.bind(s(r))),
              (r.showPanel = r.showPanel.bind(s(r))),
              (r.toggleFileCard = r.toggleFileCard.bind(s(r))),
              (r.toggleAddFilesPanel = r.toggleAddFilesPanel.bind(s(r))),
              (r.initEvents = r.initEvents.bind(s(r))),
              (r.handlePopState = r.handlePopState.bind(s(r))),
              (r.handleKeyDownInModal = r.handleKeyDownInModal.bind(s(r))),
              (r.handleKeyDownInInline = r.handleKeyDownInInline.bind(s(r))),
              (r.handleComplete = r.handleComplete.bind(s(r))),
              (r.handleClickOutside = r.handleClickOutside.bind(s(r))),
              (r.handlePaste = r.handlePaste.bind(s(r))),
              (r.handlePasteOnBody = r.handlePasteOnBody.bind(s(r))),
              (r.handleInputChange = r.handleInputChange.bind(s(r))),
              (r.handleDragOver = r.handleDragOver.bind(s(r))),
              (r.handleDragLeave = r.handleDragLeave.bind(s(r))),
              (r.handleDrop = r.handleDrop.bind(s(r))),
              (r.superFocusOnEachUpdate = r.superFocusOnEachUpdate.bind(s(r))),
              (r.recordIfFocusedOnUppyRecently = r.recordIfFocusedOnUppyRecently.bind(
                s(r)
              )),
              (r.render = r.render.bind(s(r))),
              (r.install = r.install.bind(s(r))),
              (r.superFocus = w()),
              (r.ifFocusedOnUppyRecently = !1),
              (r.makeDashboardInsidesVisibleAnywayTimeout = null),
              (r.removeDragOverClassTimeout = null),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.removeTarget = function(e) {
              var t = this.getPluginState().targets.filter(function(t) {
                return t.id !== e.id;
              });
              this.setPluginState({ targets: t });
            }),
            (i.addTarget = function(e) {
              var t = e.id || e.constructor.name,
                n = e.title || t,
                r = e.type;
              if (
                'acquirer' === r ||
                'progressindicator' === r ||
                'presenter' === r
              ) {
                var i = { id: t, name: n, type: r },
                  o = this.getPluginState().targets.slice();
                return o.push(i), this.setPluginState({ targets: o }), this.el;
              }
              this.uppy.log(
                'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter'
              );
            }),
            (i.hideAllPanels = function() {
              this.setPluginState({
                activePickerPanel: !1,
                showAddFilesPanel: !1,
                activeOverlayType: null,
              });
            }),
            (i.showPanel = function(e) {
              var t = this.getPluginState().targets.filter(function(t) {
                return 'acquirer' === t.type && t.id === e;
              })[0];
              this.setPluginState({
                activePickerPanel: t,
                activeOverlayType: 'PickerPanel',
              });
            }),
            (i.openModal = function() {
              var e = this,
                t = S(),
                n = t.promise,
                r = t.resolve;
              if (
                ((this.savedScrollPosition = window.pageYOffset),
                (this.savedActiveElement = document.activeElement),
                this.opts.disablePageScrollWhenModalOpen &&
                  document.body.classList.add('uppy-Dashboard-isFixed'),
                this.opts.animateOpenClose && this.getPluginState().isClosing)
              ) {
                this.el.addEventListener(
                  'animationend',
                  function t() {
                    e.setPluginState({ isHidden: !1 }),
                      e.el.removeEventListener('animationend', t, !1),
                      r();
                  },
                  !1
                );
              } else this.setPluginState({ isHidden: !1 }), r();
              return (
                this.opts.browserBackButtonClose && this.updateBrowserHistory(),
                document.addEventListener('keydown', this.handleKeyDownInModal),
                this.uppy.emit('dashboard:modal-open'),
                n
              );
            }),
            (i.closeModal = function(e) {
              var t = this;
              void 0 === e && (e = {});
              var n = e.manualClose,
                r = void 0 === n || n,
                i = this.getPluginState(),
                o = i.isHidden,
                s = i.isClosing;
              if (!o && !s) {
                var a = S(),
                  l = a.promise,
                  u = a.resolve;
                if (
                  (this.opts.disablePageScrollWhenModalOpen &&
                    document.body.classList.remove('uppy-Dashboard-isFixed'),
                  this.opts.animateOpenClose)
                ) {
                  this.setPluginState({ isClosing: !0 });
                  this.el.addEventListener(
                    'animationend',
                    function e() {
                      t.setPluginState({ isHidden: !0, isClosing: !1 }),
                        t.superFocus.cancel(),
                        t.savedActiveElement.focus(),
                        t.el.removeEventListener('animationend', e, !1),
                        u();
                    },
                    !1
                  );
                } else
                  this.setPluginState({ isHidden: !0 }),
                    this.superFocus.cancel(),
                    this.savedActiveElement.focus(),
                    u();
                return (
                  document.removeEventListener(
                    'keydown',
                    this.handleKeyDownInModal
                  ),
                  r &&
                    this.opts.browserBackButtonClose &&
                    history.state &&
                    history.state[this.modalName] &&
                    history.go(-1),
                  this.uppy.emit('dashboard:modal-closed'),
                  l
                );
              }
            }),
            (i.isModalOpen = function() {
              return !this.getPluginState().isHidden || !1;
            }),
            (i.requestCloseModal = function() {
              return this.opts.onRequestCloseModal
                ? this.opts.onRequestCloseModal()
                : this.closeModal();
            }),
            (i.toggleFileCard = function(e) {
              e
                ? this.uppy.emit('dashboard:file-edit-start')
                : this.uppy.emit('dashboard:file-edit-complete'),
                this.setPluginState({
                  fileCardFor: e || null,
                  activeOverlayType: e ? 'FileCard' : null,
                });
            }),
            (i.toggleAddFilesPanel = function(e) {
              this.setPluginState({
                showAddFilesPanel: e,
                activeOverlayType: e ? 'AddFiles' : null,
              });
            }),
            (i.addFile = function(e) {
              try {
                this.uppy.addFile({
                  source: this.id,
                  name: e.name,
                  type: e.type,
                  data: e,
                  meta: { relativePath: e.relativePath || null },
                });
              } catch (t) {
                t.isRestriction || this.uppy.log(t);
              }
            }),
            (i.startListeningToResize = function() {
              var e = this;
              (this.resizeObserver = new y(function(t, n) {
                var r = t[0].contentRect,
                  i = r.width,
                  o = r.height;
                e.uppy.log('[Dashboard] resized: ' + i + ' / ' + o, 'debug'),
                  e.setPluginState({
                    containerWidth: i,
                    containerHeight: o,
                    areInsidesReadyToBeVisible: !0,
                  });
              })),
                this.resizeObserver.observe(
                  this.el.querySelector('.uppy-Dashboard-inner')
                ),
                (this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(
                  function() {
                    var t = e.getPluginState(),
                      n = !e.opts.inline && t.isHidden;
                    t.areInsidesReadyToBeVisible ||
                      n ||
                      (e.uppy.log(
                        "[Dashboard] resize event didn't fire on time: defaulted to mobile layout",
                        'debug'
                      ),
                      e.setPluginState({ areInsidesReadyToBeVisible: !0 }));
                  },
                  1e3
                ));
            }),
            (i.stopListeningToResize = function() {
              this.resizeObserver.disconnect(),
                clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
            }),
            (i.recordIfFocusedOnUppyRecently = function(e) {
              this.el.contains(e.target)
                ? (this.ifFocusedOnUppyRecently = !0)
                : ((this.ifFocusedOnUppyRecently = !1),
                  this.superFocus.cancel());
            }),
            (i.updateBrowserHistory = function() {
              var e;
              (history.state && history.state[this.modalName]) ||
                history.pushState(
                  o({}, history.state, (((e = {})[this.modalName] = !0), e)),
                  ''
                );
              window.addEventListener('popstate', this.handlePopState, !1);
            }),
            (i.handlePopState = function(e) {
              !this.isModalOpen() ||
                (e.state && e.state[this.modalName]) ||
                this.closeModal({ manualClose: !1 }),
                !this.isModalOpen() &&
                  e.state &&
                  e.state[this.modalName] &&
                  history.go(-1);
            }),
            (i.handleKeyDownInModal = function(e) {
              27 === e.keyCode && this.requestCloseModal(e),
                9 === e.keyCode &&
                  v.forModal(
                    e,
                    this.getPluginState().activeOverlayType,
                    this.el
                  );
            }),
            (i.handleClickOutside = function() {
              this.opts.closeModalOnClickOutside && this.requestCloseModal();
            }),
            (i.handlePaste = function(e) {
              var t = this;
              this.uppy.iteratePlugins(function(t) {
                'acquirer' === t.type &&
                  t.handleRootPaste &&
                  t.handleRootPaste(e);
              }),
                f(e.clipboardData.files).forEach(function(e) {
                  t.uppy.log('[Dashboard] File pasted'), t.addFile(e);
                });
            }),
            (i.handleInputChange = function(e) {
              var t = this;
              e.preventDefault(),
                f(e.target.files).forEach(function(e) {
                  return t.addFile(e);
                });
            }),
            (i.handleDragOver = function(e) {
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !0 });
            }),
            (i.handleDragLeave = function(e) {
              var t = this;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (this.removeDragOverClassTimeout = setTimeout(function() {
                  t.setPluginState({ isDraggingOver: !1 });
                }, 50));
            }),
            (i.handleDrop = function(e, t) {
              var n = this;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (e.dataTransfer.dropEffect = 'copy'),
                this.setPluginState({ isDraggingOver: !1 }),
                this.uppy.iteratePlugins(function(t) {
                  'acquirer' === t.type &&
                    t.handleRootDrop &&
                    t.handleRootDrop(e);
                });
              var r = !1;
              g(e.dataTransfer, {
                logDropError: function(e) {
                  n.uppy.log(e, 'error'),
                    r || (n.uppy.info(e.message, 'error'), (r = !0));
                },
              }).then(function(e) {
                e.length > 0 &&
                  (n.uppy.log('[Dashboard] Files were dropped'),
                  e.forEach(function(e) {
                    return n.addFile(e);
                  }));
              });
            }),
            (i.handleKeyDownInInline = function(e) {
              9 === e.keyCode &&
                v.forInline(
                  e,
                  this.getPluginState().activeOverlayType,
                  this.el
                );
            }),
            (i.handlePasteOnBody = function(e) {
              this.el.contains(document.activeElement) && this.handlePaste(e);
            }),
            (i.handleComplete = function(e) {
              var t = e.failed;
              e.uploadID;
              this.opts.closeAfterFinish &&
                0 === t.length &&
                this.requestCloseModal();
            }),
            (i.initEvents = function() {
              var e = this,
                t = h(this.opts.trigger);
              !this.opts.inline &&
                t &&
                t.forEach(function(t) {
                  return t.addEventListener('click', e.openModal);
                }),
                this.opts.inline ||
                  t ||
                  this.uppy.log(
                    'Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options unless you are planning to call openModal() method yourself',
                    'error'
                  ),
                this.startListeningToResize(),
                document.addEventListener('paste', this.handlePasteOnBody),
                this.uppy.on('plugin-remove', this.removeTarget),
                this.uppy.on('file-added', this.hideAllPanels),
                this.uppy.on('dashboard:modal-closed', this.hideAllPanels),
                this.uppy.on('complete', this.handleComplete),
                document.addEventListener(
                  'focus',
                  this.recordIfFocusedOnUppyRecently,
                  !0
                ),
                document.addEventListener(
                  'click',
                  this.recordIfFocusedOnUppyRecently,
                  !0
                ),
                this.opts.inline &&
                  this.el.addEventListener(
                    'keydown',
                    this.handleKeyDownInInline
                  );
            }),
            (i.removeEvents = function() {
              var e = this,
                t = h(this.opts.trigger);
              !this.opts.inline &&
                t &&
                t.forEach(function(t) {
                  return t.removeEventListener('click', e.openModal);
                }),
                this.stopListeningToResize(),
                document.removeEventListener('paste', this.handlePasteOnBody),
                window.removeEventListener('popstate', this.handlePopState, !1),
                this.uppy.off('plugin-remove', this.removeTarget),
                this.uppy.off('file-added', this.hideAllPanels),
                this.uppy.off('dashboard:modal-closed', this.hideAllPanels),
                this.uppy.off('complete', this.handleComplete),
                document.removeEventListener(
                  'focus',
                  this.recordIfFocusedOnUppyRecently
                ),
                document.removeEventListener(
                  'click',
                  this.recordIfFocusedOnUppyRecently
                ),
                this.opts.inline &&
                  this.el.removeEventListener(
                    'keydown',
                    this.handleKeyDownInInline
                  );
            }),
            (i.superFocusOnEachUpdate = function() {
              var e = this.el.contains(document.activeElement),
                t =
                  document.activeElement === document.querySelector('body') ||
                  null === document.activeElement,
                n = this.uppy.getState().info.isHidden,
                r = !this.opts.inline;
              n && (r || e || (t && this.ifFocusedOnUppyRecently))
                ? this.superFocus(
                    this.el,
                    this.getPluginState().activeOverlayType
                  )
                : this.superFocus.cancel();
            }),
            (i.afterUpdate = function() {
              this.superFocusOnEachUpdate();
            }),
            (i.render = function(e) {
              var t = this.getPluginState(),
                n = e.files,
                r = e.capabilities,
                i = e.allowNewUpload,
                o = Object.keys(n).filter(function(e) {
                  return !n[e].progress.uploadStarted;
                }),
                s = Object.keys(n).filter(function(e) {
                  return n[e].progress.uploadStarted;
                }),
                a = Object.keys(n).filter(function(e) {
                  return n[e].isPaused;
                }),
                l = Object.keys(n).filter(function(e) {
                  return n[e].progress.uploadComplete;
                }),
                p = Object.keys(n).filter(function(e) {
                  return n[e].error;
                }),
                c = Object.keys(n).filter(function(e) {
                  return (
                    !n[e].progress.uploadComplete && n[e].progress.uploadStarted
                  );
                }),
                d = c.filter(function(e) {
                  return !n[e].isPaused;
                }),
                h = Object.keys(n).filter(function(e) {
                  return n[e].progress.preprocess || n[e].progress.postprocess;
                }),
                f = s.length > 0,
                g =
                  100 === e.totalProgress &&
                  l.length === Object.keys(n).length &&
                  0 === h.length,
                v = f && p.length === s.length,
                m = 0 !== c.length && a.length === c.length,
                y = this._getAcquirers(t.targets),
                b = this._getProgressIndicators(t.targets);
              return u({
                state: e,
                isHidden: t.isHidden,
                files: n,
                newFiles: o,
                uploadStartedFiles: s,
                completeFiles: l,
                erroredFiles: p,
                inProgressFiles: c,
                inProgressNotPausedFiles: d,
                processingFiles: h,
                isUploadStarted: f,
                isAllComplete: g,
                isAllErrored: v,
                isAllPaused: m,
                totalFileCount: Object.keys(n).length,
                totalProgress: e.totalProgress,
                allowNewUpload: i,
                acquirers: y,
                activePickerPanel: t.activePickerPanel,
                animateOpenClose: this.opts.animateOpenClose,
                isClosing: t.isClosing,
                getPlugin: this.uppy.getPlugin,
                progressindicators: b,
                autoProceed: this.uppy.opts.autoProceed,
                id: this.id,
                closeModal: this.requestCloseModal,
                handleClickOutside: this.handleClickOutside,
                handleInputChange: this.handleInputChange,
                handlePaste: this.handlePaste,
                inline: this.opts.inline,
                showPanel: this.showPanel,
                hideAllPanels: this.hideAllPanels,
                log: this.uppy.log,
                i18n: this.i18n,
                i18nArray: this.i18nArray,
                addFile: this.uppy.addFile,
                removeFile: this.uppy.removeFile,
                info: this.uppy.info,
                note: this.opts.note,
                metaFields: t.metaFields,
                resumableUploads: r.resumableUploads || !1,
                individualCancellation: r.individualCancellation,
                pauseUpload: this.uppy.pauseResume,
                retryUpload: this.uppy.retryUpload,
                cancelUpload: this.cancelUpload,
                cancelAll: this.uppy.cancelAll,
                fileCardFor: t.fileCardFor,
                toggleFileCard: this.toggleFileCard,
                toggleAddFilesPanel: this.toggleAddFilesPanel,
                showAddFilesPanel: t.showAddFilesPanel,
                saveFileCard: this.saveFileCard,
                width: this.opts.width,
                height: this.opts.height,
                showLinkToFileUploadResult: this.opts
                  .showLinkToFileUploadResult,
                proudlyDisplayPoweredByUppy: this.opts
                  .proudlyDisplayPoweredByUppy,
                containerWidth: t.containerWidth,
                areInsidesReadyToBeVisible: t.areInsidesReadyToBeVisible,
                isTargetDOMEl: this.isTargetDOMEl,
                parentElement: this.el,
                allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
                maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
                showSelectedFiles: this.opts.showSelectedFiles,
                isDraggingOver: t.isDraggingOver,
                handleDragOver: this.handleDragOver,
                handleDragLeave: this.handleDragLeave,
                handleDrop: this.handleDrop,
              });
            }),
            (i.discoverProviderPlugins = function() {
              var e = this;
              this.uppy.iteratePlugins(function(t) {
                t &&
                  !t.target &&
                  t.opts &&
                  t.opts.target === e.constructor &&
                  e.addTarget(t);
              });
            }),
            (i.install = function() {
              var e = this;
              this.setPluginState({
                isHidden: !0,
                fileCardFor: null,
                activeOverlayType: null,
                showAddFilesPanel: !1,
                activePickerPanel: !1,
                metaFields: this.opts.metaFields,
                targets: [],
                areInsidesReadyToBeVisible: !1,
                isDraggingOver: !1,
              });
              var t = this.opts,
                n = t.inline,
                r = t.closeAfterFinish;
              if (n && r)
                throw new Error(
                  '[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.'
                );
              this.uppy.opts.allowMultipleUploads &&
                r &&
                this.uppy.log(
                  '[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true',
                  'warning'
                );
              var i = this.opts.target;
              i && this.mount(i, this),
                (this.opts.plugins || []).forEach(function(t) {
                  var n = e.uppy.getPlugin(t);
                  n && n.mount(e, n);
                }),
                this.opts.disableStatusBar ||
                  this.uppy.use(p, {
                    id: this.id + ':StatusBar',
                    target: this,
                    hideUploadButton: this.opts.hideUploadButton,
                    hideRetryButton: this.opts.hideRetryButton,
                    hidePauseResumeButton: this.opts.hidePauseResumeButton,
                    hideCancelButton: this.opts.hideCancelButton,
                    showProgressDetails: this.opts.showProgressDetails,
                    hideAfterFinish: this.opts.hideProgressAfterFinish,
                    locale: this.opts.locale,
                  }),
                this.opts.disableInformer ||
                  this.uppy.use(c, { id: this.id + ':Informer', target: this }),
                this.opts.disableThumbnailGenerator ||
                  this.uppy.use(d, {
                    id: this.id + ':ThumbnailGenerator',
                    thumbnailWidth: this.opts.thumbnailWidth,
                    waitForThumbnailsBeforeUpload: this.opts
                      .waitForThumbnailsBeforeUpload,
                  }),
                this.discoverProviderPlugins(),
                this.initEvents();
            }),
            (i.uninstall = function() {
              var e = this;
              if (!this.opts.disableInformer) {
                var t = this.uppy.getPlugin(this.id + ':Informer');
                t && this.uppy.removePlugin(t);
              }
              if (!this.opts.disableStatusBar) {
                var n = this.uppy.getPlugin(this.id + ':StatusBar');
                n && this.uppy.removePlugin(n);
              }
              if (!this.opts.disableThumbnailGenerator) {
                var r = this.uppy.getPlugin(this.id + ':ThumbnailGenerator');
                r && this.uppy.removePlugin(r);
              }
              (this.opts.plugins || []).forEach(function(t) {
                var n = e.uppy.getPlugin(t);
                n && n.unmount();
              }),
                this.unmount(),
                this.removeEvents();
            }),
            r
          );
        })(a)),
        (r.VERSION = '1.4.1'),
        i);
    },
    1772: function(e, t, n) {
      var r = n(1569),
        i = n(573).h;
      e.exports = function(e) {
        var t = e.file;
        if (t.preview)
          return i('img', {
            class: 'uppy-DashboardItem-previewImg',
            alt: t.name,
            src: t.preview,
          });
        var n = r(t.type),
          o = n.color,
          s = n.icon;
        return i(
          'div',
          { class: 'uppy-DashboardItem-previewIconWrap' },
          i(
            'span',
            { class: 'uppy-DashboardItem-previewIcon', style: { color: o } },
            s
          ),
          i(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'uppy-DashboardItem-previewIconBg',
              width: '58',
              height: '76',
              viewBox: '0 0 58 76',
            },
            i('rect', {
              fill: '#FFF',
              width: '58',
              height: '76',
              rx: '3',
              'fill-rule': 'evenodd',
            })
          )
        );
      };
    },
    1773: function(e, t, n) {
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var i = n(960).localIcon,
        o = n(573),
        s = o.h,
        a = (function(e) {
          var t, n;
          function o(t) {
            var n;
            return (
              ((n =
                e.call(this, t) ||
                this).triggerFileInputClick = n.triggerFileInputClick.bind(
                r(n)
              )),
              (n.handleFileInputChange = n.handleFileInputChange.bind(r(n))),
              (n.renderPoweredByUppy = n.renderPoweredByUppy.bind(r(n))),
              (n.renderHiddenFileInput = n.renderHiddenFileInput.bind(r(n))),
              (n.renderDropPasteBrowseTagline = n.renderDropPasteBrowseTagline.bind(
                r(n)
              )),
              (n.renderMyDeviceAcquirer = n.renderMyDeviceAcquirer.bind(r(n))),
              (n.renderAcquirer = n.renderAcquirer.bind(r(n))),
              n
            );
          }
          (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var a = o.prototype;
          return (
            (a.triggerFileInputClick = function() {
              this.fileInput.click();
            }),
            (a.handleFileInputChange = function(e) {
              this.props.handleInputChange(e), (e.target.value = null);
            }),
            (a.renderPoweredByUppy = function() {
              return s(
                'a',
                {
                  tabindex: '-1',
                  href: 'https://uppy.io',
                  rel: 'noreferrer noopener',
                  target: '_blank',
                  class: 'uppy-Dashboard-poweredBy',
                },
                this.props.i18n('poweredBy') + ' ',
                s(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    class: 'UppyIcon uppy-Dashboard-poweredByIcon',
                    width: '11',
                    height: '11',
                    viewBox: '0 0 11 11',
                  },
                  s('path', {
                    d:
                      'M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z',
                    'fill-rule': 'evenodd',
                  })
                ),
                s('span', { class: 'uppy-Dashboard-poweredByUppy' }, 'Uppy')
              );
            }),
            (a.renderHiddenFileInput = function() {
              var e = this;
              return s('input', {
                class: 'uppy-Dashboard-input',
                hidden: !0,
                'aria-hidden': 'true',
                tabindex: -1,
                type: 'file',
                name: 'files[]',
                multiple: 1 !== this.props.maxNumberOfFiles,
                onchange: this.handleFileInputChange,
                accept: this.props.allowedFileTypes,
                ref: function(t) {
                  e.fileInput = t;
                },
              });
            }),
            (a.renderDropPasteBrowseTagline = function() {
              var e = s(
                'button',
                {
                  type: 'button',
                  class: 'uppy-u-reset uppy-Dashboard-browse',
                  onclick: this.triggerFileInputClick,
                },
                this.props.i18n('browse')
              );
              return s(
                'div',
                { class: 'uppy-Dashboard-dropFilesTitle' },
                0 === this.props.acquirers.length
                  ? this.props.i18nArray('dropPaste', { browse: e })
                  : this.props.i18nArray('dropPasteImport', { browse: e })
              );
            }),
            (a.renderMyDeviceAcquirer = function() {
              return s(
                'div',
                { class: 'uppy-DashboardTab', role: 'presentation' },
                s(
                  'button',
                  {
                    type: 'button',
                    class: 'uppy-DashboardTab-btn',
                    role: 'tab',
                    tabindex: 0,
                    'data-uppy-super-focusable': !0,
                    onclick: this.triggerFileInputClick,
                  },
                  i(),
                  s(
                    'div',
                    { class: 'uppy-DashboardTab-name' },
                    this.props.i18n('myDevice')
                  )
                )
              );
            }),
            (a.renderAcquirer = function(e) {
              var t = this;
              return s(
                'div',
                { class: 'uppy-DashboardTab', role: 'presentation' },
                s(
                  'button',
                  {
                    type: 'button',
                    class: 'uppy-DashboardTab-btn',
                    role: 'tab',
                    tabindex: 0,
                    'aria-controls': 'uppy-DashboardContent-panel--' + e.id,
                    'aria-selected': this.props.activePickerPanel.id === e.id,
                    'data-uppy-super-focusable': !0,
                    onclick: function() {
                      return t.props.showPanel(e.id);
                    },
                  },
                  e.icon(),
                  s('div', { class: 'uppy-DashboardTab-name' }, e.name)
                )
              );
            }),
            (a.render = function() {
              var e = this;
              return s(
                'div',
                { class: 'uppy-DashboardAddFiles' },
                this.renderHiddenFileInput(),
                s(
                  'div',
                  { class: 'uppy-DashboardTabs' },
                  this.renderDropPasteBrowseTagline(),
                  this.props.acquirers.length > 0 &&
                    s(
                      'div',
                      { class: 'uppy-DashboardTabs-list', role: 'tablist' },
                      this.renderMyDeviceAcquirer(),
                      this.props.acquirers.map(function(t) {
                        return e.renderAcquirer(t);
                      })
                    )
                ),
                s(
                  'div',
                  { class: 'uppy-DashboardAddFiles-info' },
                  this.props.note &&
                    s('div', { class: 'uppy-Dashboard-note' }, this.props.note),
                  this.props.proudlyDisplayPoweredByUppy &&
                    this.renderPoweredByUppy(this.props)
                )
              );
            }),
            o
          );
        })(o.Component);
      e.exports = a;
    },
    1774: function(e, t) {
      e.exports = function(e) {
        var t = e.target.tagName;
        'INPUT' !== t && 'TEXTAREA' !== t
          ? (e.preventDefault(), e.stopPropagation())
          : e.stopPropagation();
      };
    },
    1775: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var a = n(728).Plugin,
        l = n(1125),
        u = n(2366),
        p = n(1776),
        c = n(2369),
        d = n(2370);
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).startUpload = function() {
              return r.uppy.upload().catch(function(e) {
                e.isRestriction || r.uppy.log(e.stack || e.message || e);
              });
            }),
              (r.id = r.opts.id || 'StatusBar'),
              (r.title = 'StatusBar'),
              (r.type = 'progressindicator'),
              (r.defaultLocale = {
                strings: {
                  uploading: 'Uploading',
                  upload: 'Upload',
                  complete: 'Complete',
                  uploadFailed: 'Upload failed',
                  paused: 'Paused',
                  retry: 'Retry',
                  cancel: 'Cancel',
                  pause: 'Pause',
                  resume: 'Resume',
                  filesUploadedOfTotal: {
                    0: '%{complete} of %{smart_count} file uploaded',
                    1: '%{complete} of %{smart_count} files uploaded',
                    2: '%{complete} of %{smart_count} files uploaded',
                  },
                  dataUploadedOfTotal: '%{complete} of %{total}',
                  xTimeLeft: '%{time} left',
                  uploadXFiles: {
                    0: 'Upload %{smart_count} file',
                    1: 'Upload %{smart_count} files',
                    2: 'Upload %{smart_count} files',
                  },
                  uploadXNewFiles: {
                    0: 'Upload +%{smart_count} file',
                    1: 'Upload +%{smart_count} files',
                    2: 'Upload +%{smart_count} files',
                  },
                  xMoreFilesAdded: {
                    0: '%{smart_count} more file added',
                    1: '%{smart_count} more files added',
                    2: '%{smart_count} more files added',
                  },
                },
              });
            return (
              (r.opts = o(
                {},
                {
                  target: 'body',
                  hideUploadButton: !1,
                  hideRetryButton: !1,
                  hidePauseResumeButton: !1,
                  hideCancelButton: !1,
                  showProgressDetails: !1,
                  hideAfterFinish: !0,
                },
                n
              )),
              (r.translator = new l([
                r.defaultLocale,
                r.uppy.locale,
                r.opts.locale,
              ])),
              (r.i18n = r.translator.translate.bind(r.translator)),
              (r.render = r.render.bind(s(r))),
              (r.install = r.install.bind(s(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.getTotalSpeed = function(e) {
              var t = 0;
              return (
                e.forEach(function(e) {
                  t += c(e.progress);
                }),
                t
              );
            }),
            (i.getTotalETA = function(e) {
              var t = this.getTotalSpeed(e);
              if (0 === t) return 0;
              var n = e.reduce(function(e, t) {
                return e + d(t.progress);
              }, 0);
              return Math.round((n / t) * 10) / 10;
            }),
            (i.getUploadingState = function(e, t, n) {
              if (e) return p.STATE_ERROR;
              if (t) return p.STATE_COMPLETE;
              for (
                var r = p.STATE_WAITING, i = Object.keys(n), o = 0;
                o < i.length;
                o++
              ) {
                var s = n[i[o]].progress;
                if (s.uploadStarted && !s.uploadComplete)
                  return p.STATE_UPLOADING;
                s.preprocess &&
                  r !== p.STATE_UPLOADING &&
                  (r = p.STATE_PREPROCESSING),
                  s.postprocess &&
                    r !== p.STATE_UPLOADING &&
                    r !== p.STATE_PREPROCESSING &&
                    (r = p.STATE_POSTPROCESSING);
              }
              return r;
            }),
            (i.render = function(e) {
              var t = e.capabilities,
                n = e.files,
                r = e.allowNewUpload,
                i = e.totalProgress,
                o = e.error,
                s = Object.keys(n).map(function(e) {
                  return n[e];
                }),
                a = s.filter(function(e) {
                  return (
                    !e.progress.uploadStarted &&
                    !e.progress.preprocess &&
                    !e.progress.postprocess
                  );
                }),
                l = s.filter(function(e) {
                  return e.progress.uploadStarted;
                }),
                p = l.filter(function(e) {
                  return e.isPaused;
                }),
                c = s.filter(function(e) {
                  return e.progress.uploadComplete;
                }),
                d = s.filter(function(e) {
                  return e.error;
                }),
                h = s.filter(function(e) {
                  return !e.progress.uploadComplete && e.progress.uploadStarted;
                }),
                f = h.filter(function(e) {
                  return !e.isPaused;
                }),
                g = s.filter(function(e) {
                  return (
                    e.progress.uploadStarted ||
                    e.progress.preprocess ||
                    e.progress.postprocess
                  );
                }),
                v = s.filter(function(e) {
                  return e.progress.preprocess || e.progress.postprocess;
                }),
                m = this.getTotalETA(f),
                y = 0,
                b = 0;
              l.forEach(function(e) {
                (y += e.progress.bytesTotal || 0),
                  (b += e.progress.bytesUploaded || 0);
              });
              var w = l.length > 0,
                P =
                  100 === i &&
                  c.length === Object.keys(n).length &&
                  0 === v.length,
                S = w && d.length === l.length,
                _ = 0 !== h.length && p.length === h.length,
                C = h.length > 0,
                F = t.resumableUploads || !1,
                T = !1 !== t.uploadProgress;
              return u({
                error: o,
                uploadState: this.getUploadingState(S, P, e.files || {}),
                allowNewUpload: r,
                totalProgress: i,
                totalSize: y,
                totalUploadedSize: b,
                isAllComplete: P,
                isAllPaused: _,
                isAllErrored: S,
                isUploadStarted: w,
                isUploadInProgress: C,
                complete: c.length,
                newFiles: a.length,
                numUploads: g.length,
                totalETA: m,
                files: n,
                i18n: this.i18n,
                pauseAll: this.uppy.pauseAll,
                resumeAll: this.uppy.resumeAll,
                retryAll: this.uppy.retryAll,
                cancelAll: this.uppy.cancelAll,
                startUpload: this.startUpload,
                resumableUploads: F,
                supportsUploadProgress: T,
                showProgressDetails: this.opts.showProgressDetails,
                hideUploadButton: this.opts.hideUploadButton,
                hideRetryButton: this.opts.hideRetryButton,
                hidePauseResumeButton: this.opts.hidePauseResumeButton,
                hideCancelButton: this.opts.hideCancelButton,
                hideAfterFinish: this.opts.hideAfterFinish,
                isTargetDOMEl: this.isTargetDOMEl,
              });
            }),
            (i.install = function() {
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.unmount();
            }),
            r
          );
        })(a)),
        (r.VERSION = '1.3.1'),
        i);
    },
    1776: function(e, t) {
      e.exports = {
        STATE_ERROR: 'error',
        STATE_WAITING: 'waiting',
        STATE_PREPROCESSING: 'preprocessing',
        STATE_UPLOADING: 'uploading',
        STATE_POSTPROCESSING: 'postprocessing',
        STATE_COMPLETE: 'complete',
      };
    },
    1777: function(e, t, n) {
      var r = n(2378),
        i = n(2381);
      e.exports = function(e, t) {
        var n = (void 0 === t ? {} : t).logDropError,
          o = void 0 === n ? function() {} : n;
        return e.items && e.items[0] && 'webkitGetAsEntry' in e.items[0]
          ? r(e, o)
          : i(e);
      };
    },
    1778: function(e, t) {
      e.exports = function(e, t) {
        if (t) {
          var n = e.querySelector('[data-uppy-paneltype="' + t + '"]');
          if (n) return n;
        }
        return e;
      };
    },
    1779: function(e, t) {
      e.exports = [
        'a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'input:not([disabled]):not([inert]):not([aria-hidden])',
        'select:not([disabled]):not([inert]):not([aria-hidden])',
        'textarea:not([disabled]):not([inert]):not([aria-hidden])',
        'button:not([disabled]):not([inert]):not([aria-hidden])',
        'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
      ];
    },
    1780: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(0),
        o = n(1),
        s = n(1771),
        a = n(1127).dashboard,
        l = i.createElement,
        u = (function(e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = i.prototype;
          return (
            (o.componentDidMount = function() {
              this.installPlugin();
            }),
            (o.componentDidUpdate = function(e) {
              e.uppy !== this.props.uppy &&
                (this.uninstallPlugin(e), this.installPlugin());
            }),
            (o.componentWillUnmount = function() {
              this.uninstallPlugin();
            }),
            (o.installPlugin = function() {
              var e = this.props.uppy,
                t = r({ id: 'react:DashboardModal' }, this.props, {
                  onRequestCloseModal: this.props.onRequestClose,
                });
              t.target || (t.target = this.container),
                delete t.uppy,
                e.use(s, t),
                (this.plugin = e.getPlugin(t.id)),
                this.props.open && this.plugin.openModal();
            }),
            (o.uninstallPlugin = function(e) {
              void 0 === e && (e = this.props),
                e.uppy.removePlugin(this.plugin);
            }),
            (o.componentWillReceiveProps = function(e) {
              this.props.open && !e.open
                ? this.plugin.closeModal()
                : !this.props.open && e.open && this.plugin.openModal();
            }),
            (o.render = function() {
              var e = this;
              return l('div', {
                ref: function(t) {
                  e.container = t;
                },
              });
            }),
            i
          );
        })(i.Component);
      (u.propTypes = r(
        {
          target:
            'undefined' !== typeof window
              ? o.instanceOf(window.HTMLElement)
              : o.any,
          open: o.bool,
          onRequestClose: o.func,
          closeModalOnClickOutside: o.bool,
          disablePageScrollWhenModalOpen: o.bool,
        },
        a
      )),
        (u.defaultProps = {}),
        (e.exports = u);
    },
    1781: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(0),
        o = n(2384),
        s = n(1127),
        a = i.createElement,
        l = (function(e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var s = i.prototype;
          return (
            (s.componentDidMount = function() {
              this.installPlugin();
            }),
            (s.componentDidUpdate = function(e) {
              e.uppy !== this.props.uppy &&
                (this.uninstallPlugin(e), this.installPlugin());
            }),
            (s.componentWillUnmount = function() {
              this.uninstallPlugin();
            }),
            (s.installPlugin = function() {
              var e = this.props.uppy,
                t = r({ id: 'react:DragDrop' }, this.props, {
                  target: this.container,
                });
              delete t.uppy, e.use(o, t), (this.plugin = e.getPlugin(t.id));
            }),
            (s.uninstallPlugin = function(e) {
              void 0 === e && (e = this.props),
                e.uppy.removePlugin(this.plugin);
            }),
            (s.render = function() {
              var e = this;
              return a('div', {
                ref: function(t) {
                  e.container = t;
                },
              });
            }),
            i
          );
        })(i.Component);
      (l.propTypes = { uppy: s.uppy, locale: s.locale }),
        (l.defaultProps = {}),
        (e.exports = l);
    },
    1782: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(0),
        o = n(1),
        s = n(2386),
        a = n(1127).uppy,
        l = i.createElement,
        u = (function(e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = i.prototype;
          return (
            (o.componentDidMount = function() {
              this.installPlugin();
            }),
            (o.componentDidUpdate = function(e) {
              e.uppy !== this.props.uppy &&
                (this.uninstallPlugin(e), this.installPlugin());
            }),
            (o.componentWillUnmount = function() {
              this.uninstallPlugin();
            }),
            (o.installPlugin = function() {
              var e = this.props.uppy,
                t = r({ id: 'react:ProgressBar' }, this.props, {
                  target: this.container,
                });
              delete t.uppy, e.use(s, t), (this.plugin = e.getPlugin(t.id));
            }),
            (o.uninstallPlugin = function(e) {
              void 0 === e && (e = this.props),
                e.uppy.removePlugin(this.plugin);
            }),
            (o.render = function() {
              var e = this;
              return l('div', {
                ref: function(t) {
                  e.container = t;
                },
              });
            }),
            i
          );
        })(i.Component);
      (u.propTypes = { uppy: a, fixed: o.bool, hideAfterFinish: o.bool }),
        (u.defaultProps = {}),
        (e.exports = u);
    },
    1783: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(0),
        o = n(1),
        s = n(1775),
        a = n(1127).uppy,
        l = i.createElement,
        u = (function(e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = i.prototype;
          return (
            (o.componentDidMount = function() {
              this.installPlugin();
            }),
            (o.componentDidUpdate = function(e) {
              e.uppy !== this.props.uppy &&
                (this.uninstallPlugin(e), this.installPlugin());
            }),
            (o.componentWillUnmount = function() {
              this.uninstallPlugin();
            }),
            (o.installPlugin = function() {
              var e = this.props.uppy,
                t = r({ id: 'react:StatusBar' }, this.props, {
                  target: this.container,
                });
              delete t.uppy, e.use(s, t), (this.plugin = e.getPlugin(t.id));
            }),
            (o.uninstallPlugin = function(e) {
              void 0 === e && (e = this.props),
                e.uppy.removePlugin(this.plugin);
            }),
            (o.render = function() {
              var e = this;
              return l('div', {
                ref: function(t) {
                  e.container = t;
                },
              });
            }),
            i
          );
        })(i.Component);
      (u.propTypes = {
        uppy: a,
        hideAfterFinish: o.bool,
        showProgressDetails: o.bool,
      }),
        (u.defaultProps = {}),
        (e.exports = u);
    },
    2294: function(e, t, n) {},
    2295: function(e, t, n) {},
    2296: function(e, t) {
      e.exports = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    },
    2297: function(e, t, n) {
      var r = n(1760),
        i = 'object' === typeof window ? window : self,
        o = Object.keys(i).length,
        s = r(
          (
            (navigator.mimeTypes ? navigator.mimeTypes.length : 0) +
            navigator.userAgent.length
          ).toString(36) + o.toString(36),
          4
        );
      e.exports = function() {
        return s;
      };
    },
    2298: function(e, t) {
      var n,
        r = window.crypto || window.msCrypto;
      if (r) {
        var i = Math.pow(2, 32) - 1;
        n = function() {
          return Math.abs(r.getRandomValues(new Uint32Array(1))[0] / i);
        };
      } else n = Math.random;
      e.exports = n;
    },
    2299: function(e, t, n) {
      var r = n(2300),
        i = /[\/\+\.]/;
      e.exports = function(e, t) {
        function n(t) {
          var n = r(t, e, i);
          return n && n.length >= 2;
        }
        return t ? n(t.split(';')[0]) : n;
      };
    },
    2300: function(e, t, n) {
      'use strict';
      function r(e, t) {
        (this.text = e = e || ''),
          (this.hasWild = ~e.indexOf('*')),
          (this.separator = t),
          (this.parts = e.split(t));
      }
      (r.prototype.match = function(e) {
        var t,
          n,
          r = !0,
          i = this.parts,
          o = i.length;
        if ('string' == typeof e || e instanceof String)
          if (this.hasWild || this.text == e) {
            for (n = (e || '').split(this.separator), t = 0; r && t < o; t++)
              '*' !== i[t] && (r = t < n.length && i[t] === n[t]);
            r = r && n;
          } else r = !1;
        else if ('function' == typeof e.splice)
          for (r = [], t = e.length; t--; )
            this.match(e[t]) && (r[r.length] = e[t]);
        else if ('object' == typeof e)
          for (var s in ((r = {}), e)) this.match(s) && (r[s] = e[s]);
        return r;
      }),
        (e.exports = function(e, t, n) {
          var i = new r(e, n || /[\/\.]/);
          return 'undefined' != typeof t ? i.match(t) : i;
        });
    },
    2301: function(e, t) {
      function n() {
        return (n =
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
      var r = (function() {
        function e() {
          (this.state = {}), (this.callbacks = []);
        }
        var t = e.prototype;
        return (
          (t.getState = function() {
            return this.state;
          }),
          (t.setState = function(e) {
            var t = n({}, this.state),
              r = n({}, this.state, e);
            (this.state = r), this._publish(t, r, e);
          }),
          (t.subscribe = function(e) {
            var t = this;
            return (
              this.callbacks.push(e),
              function() {
                t.callbacks.splice(t.callbacks.indexOf(e), 1);
              }
            );
          }),
          (t._publish = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.callbacks.forEach(function(e) {
              e.apply(void 0, t);
            });
          }),
          e
        );
      })();
      (r.VERSION = '1.2.0'),
        (e.exports = function() {
          return new r();
        });
    },
    2302: function(e, t) {
      e.exports = {
        md: 'text/markdown',
        markdown: 'text/markdown',
        mp4: 'video/mp4',
        mp3: 'audio/mp3',
        svg: 'image/svg+xml',
        jpg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        heic: 'image/heic',
        heif: 'image/heif',
        yaml: 'text/yaml',
        yml: 'text/yaml',
        csv: 'text/csv',
        avi: 'video/x-msvideo',
        mks: 'video/x-matroska',
        mkv: 'video/x-matroska',
        mov: 'video/quicktime',
        doc: 'application/msword',
        docm: 'application/vnd.ms-word.document.macroenabled.12',
        docx:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        dot: 'application/msword',
        dotm: 'application/vnd.ms-word.template.macroenabled.12',
        dotx:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        xla: 'application/vnd.ms-excel',
        xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
        xlc: 'application/vnd.ms-excel',
        xlf: 'application/x-xliff+xml',
        xlm: 'application/vnd.ms-excel',
        xls: 'application/vnd.ms-excel',
        xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
        xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
        xlsx:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        xlt: 'application/vnd.ms-excel',
        xltm: 'application/vnd.ms-excel.template.macroenabled.12',
        xltx:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        xlw: 'application/vnd.ms-excel',
        txt: 'text/plain',
        text: 'text/plain',
        conf: 'text/plain',
        log: 'text/plain',
        pdf: 'application/pdf',
      };
    },
    2303: function(e, t) {
      e.exports = function(e) {
        if (
          (null == e &&
            (e = 'undefined' !== typeof navigator ? navigator.userAgent : null),
          !e)
        )
          return !0;
        var t = /Edge\/(\d+\.\d+)/.exec(e);
        if (!t) return !0;
        var n = t[1].split('.'),
          r = n[0],
          i = n[1];
        return (
          (r = parseInt(r, 10)),
          (i = parseInt(i, 10)),
          r < 15 ||
            (15 === r && i < 15063) ||
            (r > 18 || (18 === r && i >= 18218))
        );
      };
    },
    2304: function(e, t, n) {
      var r = n(2305),
        i = {
          debug: function() {
            for (
              var e = console.debug || console.log,
                t = arguments.length,
                n = new Array(t),
                i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            e.call.apply(e, [console, '[Uppy] [' + r() + ']'].concat(n));
          },
          warn: function() {
            for (
              var e, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (e = console).warn.apply(
              e,
              ['[Uppy] [' + r() + ']'].concat(n)
            );
          },
          error: function() {
            for (
              var e, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (e = console).error.apply(
              e,
              ['[Uppy] [' + r() + ']'].concat(n)
            );
          },
        };
      e.exports = {
        nullLogger: {
          debug: function() {},
          warn: function() {},
          error: function() {},
        },
        debugLogger: i,
      };
    },
    2305: function(e, t) {
      function n(e) {
        return 2 !== e.length ? 0 + e : e;
      }
      e.exports = function() {
        var e = new Date();
        return (
          n(e.getHours().toString()) +
          ':' +
          n(e.getMinutes().toString()) +
          ':' +
          n(e.getSeconds().toString())
        );
      };
    },
    2306: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(573),
        o = n(2307);
      e.exports = (function() {
        function e(e, t) {
          (this.uppy = e),
            (this.opts = t || {}),
            (this.update = this.update.bind(this)),
            (this.mount = this.mount.bind(this)),
            (this.install = this.install.bind(this)),
            (this.uninstall = this.uninstall.bind(this));
        }
        var t = e.prototype;
        return (
          (t.getPluginState = function() {
            return this.uppy.getState().plugins[this.id] || {};
          }),
          (t.setPluginState = function(e) {
            var t,
              n = this.uppy.getState().plugins;
            this.uppy.setState({
              plugins: r(
                {},
                n,
                ((t = {}), (t[this.id] = r({}, n[this.id], {}, e)), t)
              ),
            });
          }),
          (t.update = function(e) {
            'undefined' !== typeof this.el &&
              this._updateUI &&
              this._updateUI(e);
          }),
          (t.afterUpdate = function() {}),
          (t.onMount = function() {}),
          (t.mount = function(t, n) {
            var r,
              s = this,
              a = n.id,
              l = o(t);
            if (l)
              return (
                (this.isTargetDOMEl = !0),
                (this.rerender = function(e) {
                  s.uppy.getPlugin(s.id) &&
                    ((s.el = i.render(s.render(e), l, s.el)), s.afterUpdate());
                }),
                (this._updateUI = (function(e) {
                  var t = null,
                    n = null;
                  return function() {
                    for (
                      var r = arguments.length, i = new Array(r), o = 0;
                      o < r;
                      o++
                    )
                      i[o] = arguments[o];
                    return (
                      (n = i),
                      t ||
                        (t = Promise.resolve().then(function() {
                          return (t = null), e.apply(void 0, n);
                        })),
                      t
                    );
                  };
                })(this.rerender)),
                this.uppy.log(
                  'Installing ' + a + " to a DOM element '" + t + "'"
                ),
                this.opts.replaceTargetContent && (l.innerHTML = ''),
                (this.el = i.render(this.render(this.uppy.getState()), l)),
                this.onMount(),
                this.el
              );
            if ('object' === typeof t && t instanceof e) r = t;
            else if ('function' === typeof t) {
              var u = t;
              this.uppy.iteratePlugins(function(e) {
                if (e instanceof u) return (r = e), !1;
              });
            }
            if (r)
              return (
                this.uppy.log('Installing ' + a + ' to ' + r.id),
                (this.parent = r),
                (this.el = r.addTarget(n)),
                this.onMount(),
                this.el
              );
            throw (this.uppy.log('Not installing ' + a),
            new Error(
              'Invalid target option given to ' +
                a +
                '. Please make sure that the element\n      exists on the page, or that the plugin you are targeting has been installed. Check that the <script> tag initializing Uppy\n      comes at the bottom of the page, before the closing </body> tag (see https://github.com/transloadit/uppy/issues/1042).'
            ));
          }),
          (t.render = function(e) {
            throw new Error(
              'Extend the render method to add your plugin to a DOM element'
            );
          }),
          (t.addTarget = function(e) {
            throw new Error(
              "Extend the addTarget method to add your plugin to another plugin's target"
            );
          }),
          (t.unmount = function() {
            this.isTargetDOMEl &&
              this.el &&
              this.el.parentNode &&
              this.el.parentNode.removeChild(this.el);
          }),
          (t.install = function() {}),
          (t.uninstall = function() {
            this.unmount();
          }),
          e
        );
      })();
    },
    2307: function(e, t, n) {
      var r = n(1764);
      e.exports = function(e, t) {
        return (
          void 0 === t && (t = document),
          'string' === typeof e
            ? t.querySelector(e)
            : 'object' === typeof e && r(e)
            ? e
            : void 0
        );
      };
    },
    2308: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var a = n(728).Plugin,
        l = n(1765),
        u = n(1215),
        p = u.Provider,
        c = u.RequestClient,
        d = u.Socket,
        h = n(2326),
        f = n(2327),
        g = n(2328),
        v = n(2329),
        m = n(2330),
        y = n(2331),
        b = {
          endpoint: '',
          resume: !0,
          onProgress: null,
          onChunkComplete: null,
          onSuccess: null,
          onError: null,
          headers: {},
          chunkSize: 1 / 0,
          withCredentials: !1,
          uploadUrl: null,
          uploadSize: null,
          overridePatchMethod: !1,
          retryDelays: null,
        };
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).type = 'uploader'),
              (r.id = r.opts.id || 'Tus'),
              (r.title = 'Tus');
            return (
              (r.opts = o(
                {},
                {
                  resume: !0,
                  autoRetry: !0,
                  useFastRemoteRetry: !0,
                  limit: 0,
                  retryDelays: [0, 1e3, 3e3, 5e3],
                },
                n
              )),
              (r.requests = new m(r.opts.limit)),
              (r.uploaders = Object.create(null)),
              (r.uploaderEvents = Object.create(null)),
              (r.uploaderSockets = Object.create(null)),
              (r.handleResetProgress = r.handleResetProgress.bind(s(r))),
              (r.handleUpload = r.handleUpload.bind(s(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.handleResetProgress = function() {
              var e = o({}, this.uppy.getState().files);
              Object.keys(e).forEach(function(t) {
                if (e[t].tus && e[t].tus.uploadUrl) {
                  var n = o({}, e[t].tus);
                  delete n.uploadUrl, (e[t] = o({}, e[t], { tus: n }));
                }
              }),
                this.uppy.setState({ files: e });
            }),
            (i.resetUploaderReferences = function(e) {
              this.uploaders[e] &&
                (this.uploaders[e].abort(), (this.uploaders[e] = null)),
                this.uploaderEvents[e] &&
                  (this.uploaderEvents[e].remove(),
                  (this.uploaderEvents[e] = null)),
                this.uploaderSockets[e] &&
                  (this.uploaderSockets[e].close(),
                  (this.uploaderSockets[e] = null));
            }),
            (i.upload = function(e, t, n) {
              var r = this;
              return (
                this.resetUploaderReferences(e.id),
                new Promise(function(t, n) {
                  r.uppy.emit('upload-started', e);
                  var i = o({}, b, r.opts, e.tus || {});
                  (i.fingerprint = y(e)),
                    (i.onError = function(t) {
                      r.uppy.log(t),
                        r.uppy.emit('upload-error', e, t),
                        (t.message = 'Failed because: ' + t.message),
                        r.resetUploaderReferences(e.id),
                        p.done(),
                        n(t);
                    }),
                    (i.onProgress = function(t, n) {
                      r.onReceiveUploadUrl(e, u.url),
                        r.uppy.emit('upload-progress', e, {
                          uploader: r,
                          bytesUploaded: t,
                          bytesTotal: n,
                        });
                    }),
                    (i.onSuccess = function() {
                      var n = { uploadURL: u.url };
                      r.uppy.emit('upload-success', e, n),
                        u.url &&
                          r.uppy.log(
                            'Download ' + u.file.name + ' from ' + u.url
                          ),
                        r.resetUploaderReferences(e.id),
                        p.done(),
                        t(u);
                    });
                  var s = function(e, t, n) {
                      Object.prototype.hasOwnProperty.call(e, t) &&
                        !Object.prototype.hasOwnProperty.call(e, n) &&
                        (e[n] = e[t]);
                    },
                    a = {};
                  (Array.isArray(i.metaFields)
                    ? i.metaFields
                    : Object.keys(e.meta)
                  ).forEach(function(t) {
                    a[t] = e.meta[t];
                  }),
                    s(a, 'type', 'filetype'),
                    s(a, 'name', 'filename'),
                    (i.metadata = a);
                  var u = new l.Upload(e.data, i);
                  (r.uploaders[e.id] = u),
                    (r.uploaderEvents[e.id] = new v(r.uppy));
                  var p = r.requests.run(function() {
                    return e.isPaused || u.start(), function() {};
                  });
                  r.onFileRemove(e.id, function(n) {
                    p.abort(),
                      r.resetUploaderReferences(e.id),
                      t('upload ' + n + ' was removed');
                  }),
                    r.onPause(e.id, function(e) {
                      e
                        ? (p.abort(), u.abort())
                        : (p.abort(),
                          (p = r.requests.run(function() {
                            return u.start(), function() {};
                          })));
                    }),
                    r.onPauseAll(e.id, function() {
                      p.abort(), u.abort();
                    }),
                    r.onCancelAll(e.id, function() {
                      p.abort(),
                        r.resetUploaderReferences(e.id),
                        t('upload ' + e.id + ' was canceled');
                    }),
                    r.onResumeAll(e.id, function() {
                      p.abort(),
                        e.error && u.abort(),
                        (p = r.requests.run(function() {
                          return u.start(), function() {};
                        }));
                    });
                }).catch(function(t) {
                  throw (r.uppy.emit('upload-error', e, t), t);
                })
              );
            }),
            (i.uploadRemote = function(e, t, n) {
              var r = this;
              this.resetUploaderReferences(e.id);
              var i = o({}, this.opts);
              return (
                e.tus && o(i, e.tus),
                this.uppy.emit('upload-started', e),
                this.uppy.log(e.remote.url),
                e.serverToken
                  ? this.connectToServerSocket(e)
                  : new Promise(function(t, n) {
                      new (e.remote.providerOptions.provider ? p : c)(
                        r.uppy,
                        e.remote.providerOptions
                      )
                        .post(
                          e.remote.url,
                          o({}, e.remote.body, {
                            endpoint: i.endpoint,
                            uploadUrl: i.uploadUrl,
                            protocol: 'tus',
                            size: e.data.size,
                            metadata: e.meta,
                          })
                        )
                        .then(function(t) {
                          return (
                            r.uppy.setFileState(e.id, { serverToken: t.token }),
                            (e = r.uppy.getFile(e.id)),
                            r.connectToServerSocket(e)
                          );
                        })
                        .then(function() {
                          t();
                        })
                        .catch(function(e) {
                          n(new Error(e));
                        });
                    })
              );
            }),
            (i.connectToServerSocket = function(e) {
              var t = this;
              return new Promise(function(n, r) {
                var i = e.serverToken,
                  s = f(e.remote.companionUrl),
                  a = new d({ target: s + '/api/' + i, autoOpen: !1 });
                (t.uploaderSockets[e.id] = a),
                  (t.uploaderEvents[e.id] = new v(t.uppy)),
                  t.onFileRemove(e.id, function() {
                    l.abort(),
                      a.send('pause', {}),
                      t.resetUploaderReferences(e.id),
                      n('upload ' + e.id + ' was removed');
                  }),
                  t.onPause(e.id, function(e) {
                    e
                      ? (l.abort(), a.send('pause', {}))
                      : (l.abort(),
                        (l = t.requests.run(function() {
                          return a.send('resume', {}), function() {};
                        })));
                  }),
                  t.onPauseAll(e.id, function() {
                    l.abort(), a.send('pause', {});
                  }),
                  t.onCancelAll(e.id, function() {
                    l.abort(),
                      a.send('pause', {}),
                      t.resetUploaderReferences(e.id),
                      n('upload ' + e.id + ' was canceled');
                  }),
                  t.onResumeAll(e.id, function() {
                    l.abort(),
                      e.error && a.send('pause', {}),
                      (l = t.requests.run(function() {
                        return a.send('resume', {}), function() {};
                      }));
                  }),
                  t.onRetry(e.id, function() {
                    a.isOpen && (a.send('pause', {}), a.send('resume', {}));
                  }),
                  t.onRetryAll(e.id, function() {
                    a.isOpen && (a.send('pause', {}), a.send('resume', {}));
                  }),
                  a.on('progress', function(n) {
                    return h(t, n, e);
                  }),
                  a.on('error', function(n) {
                    var i = n.error.message,
                      s = o(new Error(i), { cause: n.error });
                    t.opts.useFastRemoteRetry
                      ? a.close()
                      : (t.resetUploaderReferences(e.id),
                        t.uppy.setFileState(e.id, { serverToken: null })),
                      t.uppy.emit('upload-error', e, s),
                      l.done(),
                      r(s);
                  }),
                  a.on('success', function(r) {
                    var i = { uploadURL: r.url };
                    t.uppy.emit('upload-success', e, i),
                      t.resetUploaderReferences(e.id),
                      l.done(),
                      n();
                  });
                var l = t.requests.run(function() {
                  return (
                    a.open(), e.isPaused && a.send('pause', {}), function() {}
                  );
                });
              });
            }),
            (i.onReceiveUploadUrl = function(e, t) {
              var n = this.uppy.getFile(e.id);
              n &&
                ((n.tus && n.tus.uploadUrl === t) ||
                  (this.uppy.log('[Tus] Storing upload url'),
                  this.uppy.setFileState(n.id, {
                    tus: o({}, n.tus, { uploadUrl: t }),
                  })));
            }),
            (i.onFileRemove = function(e, t) {
              this.uploaderEvents[e].on('file-removed', function(n) {
                e === n.id && t(n.id);
              });
            }),
            (i.onPause = function(e, t) {
              this.uploaderEvents[e].on('upload-pause', function(n, r) {
                e === n && t(r);
              });
            }),
            (i.onRetry = function(e, t) {
              this.uploaderEvents[e].on('upload-retry', function(n) {
                e === n && t();
              });
            }),
            (i.onRetryAll = function(e, t) {
              var n = this;
              this.uploaderEvents[e].on('retry-all', function(r) {
                n.uppy.getFile(e) && t();
              });
            }),
            (i.onPauseAll = function(e, t) {
              var n = this;
              this.uploaderEvents[e].on('pause-all', function() {
                n.uppy.getFile(e) && t();
              });
            }),
            (i.onCancelAll = function(e, t) {
              var n = this;
              this.uploaderEvents[e].on('cancel-all', function() {
                n.uppy.getFile(e) && t();
              });
            }),
            (i.onResumeAll = function(e, t) {
              var n = this;
              this.uploaderEvents[e].on('resume-all', function() {
                n.uppy.getFile(e) && t();
              });
            }),
            (i.uploadFiles = function(e) {
              var t = this,
                n = e.map(function(n, r) {
                  var i = r + 1,
                    o = e.length;
                  return 'error' in n && n.error
                    ? Promise.reject(new Error(n.error))
                    : n.isRemote
                    ? t.uploadRemote(n, i, o)
                    : t.upload(n, i, o);
                });
              return g(n);
            }),
            (i.handleUpload = function(e) {
              var t = this;
              if (0 === e.length)
                return (
                  this.uppy.log('[Tus] No files to upload'), Promise.resolve()
                );
              0 === this.opts.limit &&
                this.uppy.log(
                  '[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0',
                  'warning'
                ),
                this.uppy.log('[Tus] Uploading...');
              var n = e.map(function(e) {
                return t.uppy.getFile(e);
              });
              return this.uploadFiles(n).then(function() {
                return null;
              });
            }),
            (i.install = function() {
              this.uppy.setState({
                capabilities: o({}, this.uppy.getState().capabilities, {
                  resumableUploads: !0,
                }),
              }),
                this.uppy.addUploader(this.handleUpload),
                this.uppy.on('reset-progress', this.handleResetProgress),
                this.opts.autoRetry &&
                  this.uppy.on('back-online', this.uppy.retryAll);
            }),
            (i.uninstall = function() {
              this.uppy.setState({
                capabilities: o({}, this.uppy.getState().capabilities, {
                  resumableUploads: !1,
                }),
              }),
                this.uppy.removeUploader(this.handleUpload),
                this.opts.autoRetry &&
                  this.uppy.off('back-online', this.uppy.retryAll);
            }),
            r
          );
        })(a)),
        (r.VERSION = '1.4.2'),
        i);
    },
    2309: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = p(n(2310)),
        o = p(n(2311)),
        s = n(2312),
        a = n(2313),
        l = n(2317),
        u = n(1767);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = {
          endpoint: null,
          fingerprint: p(n(2321)).default,
          resume: !0,
          onProgress: null,
          onChunkComplete: null,
          onSuccess: null,
          onError: null,
          headers: {},
          chunkSize: 1 / 0,
          withCredentials: !1,
          uploadUrl: null,
          uploadSize: null,
          overridePatchMethod: !1,
          retryDelays: null,
          removeFingerprintOnSuccess: !1,
          uploadLengthDeferred: !1,
          urlStorage: null,
          fileReader: null,
          uploadDataDuringCreation: !1,
        },
        d = (function() {
          function e(t, n) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.options = (0, o.default)(!0, {}, c, n)),
              (this._storage = this.options.urlStorage),
              (this.file = t),
              (this.url = null),
              (this._xhr = null),
              (this._fingerprint = null),
              (this._offset = null),
              (this._aborted = !1),
              (this._size = null),
              (this._source = null),
              (this._retryAttempt = 0),
              (this._retryTimeout = null),
              (this._offsetBeforeRetry = 0);
          }
          return (
            r(
              e,
              [
                {
                  key: 'start',
                  value: function() {
                    var e = this,
                      t = this.file;
                    t
                      ? this.options.endpoint || this.options.uploadUrl
                        ? (this.options.resume &&
                            null == this._storage &&
                            (this._storage = (0, u.getStorage)()),
                          this._source
                            ? this._start(this._source)
                            : (this.options.fileReader || l.getSource)(
                                t,
                                this.options.chunkSize,
                                function(t, n) {
                                  t
                                    ? e._emitError(t)
                                    : ((e._source = n), e._start(n));
                                }
                              ))
                        : this._emitError(
                            new Error(
                              'tus: neither an endpoint or an upload URL is provided'
                            )
                          )
                      : this._emitError(
                          new Error('tus: no file or stream to upload provided')
                        );
                  },
                },
                {
                  key: '_start',
                  value: function(e) {
                    var t = this,
                      n = this.file;
                    if (this.options.uploadLengthDeferred) this._size = null;
                    else if (null != this.options.uploadSize) {
                      if (
                        ((this._size = +this.options.uploadSize),
                        isNaN(this._size))
                      )
                        return void this._emitError(
                          new Error(
                            'tus: cannot convert `uploadSize` option into a number'
                          )
                        );
                    } else if (((this._size = e.size), null == this._size))
                      return void this._emitError(
                        new Error(
                          "tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"
                        )
                      );
                    var r = this.options.retryDelays;
                    if (null != r) {
                      if (
                        '[object Array]' !== Object.prototype.toString.call(r)
                      )
                        return void this._emitError(
                          new Error(
                            'tus: the `retryDelays` option must either be an array or null'
                          )
                        );
                      var i = this.options.onError;
                      this.options.onError = function(e) {
                        (t.options.onError = i),
                          null != t._offset &&
                            t._offset > t._offsetBeforeRetry &&
                            (t._retryAttempt = 0);
                        var n = !0;
                        'undefined' !== typeof window &&
                          'navigator' in window &&
                          !1 === window.navigator.onLine &&
                          (n = !1);
                        var o = e.originalRequest
                            ? e.originalRequest.status
                            : 0,
                          s = !h(o, 400) || 409 === o || 423 === o;
                        if (
                          t._retryAttempt < r.length &&
                          null != e.originalRequest &&
                          s &&
                          n
                        ) {
                          var a = r[t._retryAttempt++];
                          (t._offsetBeforeRetry = t._offset),
                            (t.options.uploadUrl = t.url),
                            (t._retryTimeout = setTimeout(function() {
                              t.start();
                            }, a));
                        } else t._emitError(e);
                      };
                    }
                    if (((this._aborted = !1), null == this.url))
                      return null != this.options.uploadUrl
                        ? ((this.url = this.options.uploadUrl),
                          void this._resumeUpload())
                        : void (this._hasStorage()
                            ? this.options.fingerprint(
                                n,
                                this.options,
                                function(e, n) {
                                  e
                                    ? t._emitError(e)
                                    : ((t._fingerprint = n),
                                      t._storage.getItem(
                                        t._fingerprint,
                                        function(e, n) {
                                          e
                                            ? t._emitError(e)
                                            : null != n
                                            ? ((t.url = n), t._resumeUpload())
                                            : t._createUpload();
                                        }
                                      ));
                                }
                              )
                            : this._createUpload());
                    this._resumeUpload();
                  },
                },
                {
                  key: 'abort',
                  value: function(t, n) {
                    var r = this;
                    null !== this._xhr &&
                      (this._xhr.abort(), this._source.close()),
                      (this._aborted = !0),
                      null != this._retryTimeout &&
                        (clearTimeout(this._retryTimeout),
                        (this._retryTimeout = null)),
                      (n = n || function() {}),
                      t
                        ? e.terminate(this.url, this.options, function(e, t) {
                            if (e) return n(e, t);
                            r._hasStorage()
                              ? r._storage.removeItem(r._fingerprint, n)
                              : n();
                          })
                        : n();
                  },
                },
                {
                  key: '_hasStorage',
                  value: function() {
                    return this.options.resume && this._storage;
                  },
                },
                {
                  key: '_emitXhrError',
                  value: function(e, t, n) {
                    this._emitError(new i.default(t, n, e));
                  },
                },
                {
                  key: '_emitError',
                  value: function(e) {
                    if ('function' !== typeof this.options.onError) throw e;
                    this.options.onError(e);
                  },
                },
                {
                  key: '_emitSuccess',
                  value: function() {
                    'function' === typeof this.options.onSuccess &&
                      this.options.onSuccess();
                  },
                },
                {
                  key: '_emitProgress',
                  value: function(e, t) {
                    'function' === typeof this.options.onProgress &&
                      this.options.onProgress(e, t);
                  },
                },
                {
                  key: '_emitChunkComplete',
                  value: function(e, t, n) {
                    'function' === typeof this.options.onChunkComplete &&
                      this.options.onChunkComplete(e, t, n);
                  },
                },
                {
                  key: '_setupXHR',
                  value: function(e) {
                    (this._xhr = e), f(e, this.options);
                  },
                },
                {
                  key: '_createUpload',
                  value: function() {
                    var e = this;
                    if (this.options.endpoint) {
                      var t = (0, a.newRequest)();
                      t.open('POST', this.options.endpoint, !0),
                        (t.onload = function() {
                          if (h(t.status, 200)) {
                            var n = t.getResponseHeader('Location');
                            if (null != n) {
                              if (
                                ((e.url = (0, a.resolveUrl)(
                                  e.options.endpoint,
                                  n
                                )),
                                0 === e._size)
                              )
                                return e._emitSuccess(), void e._source.close();
                              e._hasStorage() &&
                                e._storage.setItem(
                                  e._fingerprint,
                                  e.url,
                                  function(t) {
                                    t && e._emitError(t);
                                  }
                                ),
                                e.options.uploadDataDuringCreation
                                  ? e._handleUploadResponse(t)
                                  : ((e._offset = 0), e._startUpload());
                            } else
                              e._emitXhrError(
                                t,
                                new Error(
                                  'tus: invalid or missing Location header'
                                )
                              );
                          } else
                            e._emitXhrError(
                              t,
                              new Error(
                                'tus: unexpected response while creating upload'
                              )
                            );
                        }),
                        (t.onerror = function(n) {
                          e._emitXhrError(
                            t,
                            new Error('tus: failed to create upload'),
                            n
                          );
                        }),
                        this._setupXHR(t),
                        this.options.uploadLengthDeferred
                          ? t.setRequestHeader('Upload-Defer-Length', 1)
                          : t.setRequestHeader('Upload-Length', this._size);
                      var n = (function(e) {
                        var t = [];
                        for (var n in e)
                          t.push(n + ' ' + s.Base64.encode(e[n]));
                        return t.join(',');
                      })(this.options.metadata);
                      '' !== n && t.setRequestHeader('Upload-Metadata', n),
                        this.options.uploadDataDuringCreation &&
                        !this.options.uploadLengthDeferred
                          ? ((this._offset = 0), this._addChunkToRequest(t))
                          : t.send(null);
                    } else
                      this._emitError(
                        new Error(
                          'tus: unable to create upload because no endpoint is provided'
                        )
                      );
                  },
                },
                {
                  key: '_resumeUpload',
                  value: function() {
                    var e = this,
                      t = (0, a.newRequest)();
                    t.open('HEAD', this.url, !0),
                      (t.onload = function() {
                        if (!h(t.status, 200))
                          return (
                            e._hasStorage() &&
                              h(t.status, 400) &&
                              e._storage.removeItem(e._fingerprint, function(
                                t
                              ) {
                                t && e._emitError(t);
                              }),
                            423 === t.status
                              ? void e._emitXhrError(
                                  t,
                                  new Error(
                                    'tus: upload is currently locked; retry later'
                                  )
                                )
                              : e.options.endpoint
                              ? ((e.url = null), void e._createUpload())
                              : void e._emitXhrError(
                                  t,
                                  new Error(
                                    'tus: unable to resume upload (new upload cannot be created without an endpoint)'
                                  )
                                )
                          );
                        var n = parseInt(
                          t.getResponseHeader('Upload-Offset'),
                          10
                        );
                        if (isNaN(n))
                          e._emitXhrError(
                            t,
                            new Error('tus: invalid or missing offset value')
                          );
                        else {
                          var r = parseInt(
                            t.getResponseHeader('Upload-Length'),
                            10
                          );
                          if (!isNaN(r) || e.options.uploadLengthDeferred) {
                            if (n === r)
                              return (
                                e._emitProgress(r, r), void e._emitSuccess()
                              );
                            (e._offset = n), e._startUpload();
                          } else
                            e._emitXhrError(
                              t,
                              new Error('tus: invalid or missing length value')
                            );
                        }
                      }),
                      (t.onerror = function(n) {
                        e._emitXhrError(
                          t,
                          new Error('tus: failed to resume upload'),
                          n
                        );
                      }),
                      this._setupXHR(t),
                      t.send(null);
                  },
                },
                {
                  key: '_startUpload',
                  value: function() {
                    var e = this;
                    if (!this._aborted) {
                      var t = (0, a.newRequest)();
                      this.options.overridePatchMethod
                        ? (t.open('POST', this.url, !0),
                          t.setRequestHeader('X-HTTP-Method-Override', 'PATCH'))
                        : t.open('PATCH', this.url, !0),
                        (t.onload = function() {
                          h(t.status, 200)
                            ? e._handleUploadResponse(t)
                            : e._emitXhrError(
                                t,
                                new Error(
                                  'tus: unexpected response while uploading chunk'
                                )
                              );
                        }),
                        (t.onerror = function(n) {
                          e._aborted ||
                            e._emitXhrError(
                              t,
                              new Error(
                                'tus: failed to upload chunk at offset ' +
                                  e._offset
                              ),
                              n
                            );
                        }),
                        this._setupXHR(t),
                        t.setRequestHeader('Upload-Offset', this._offset),
                        this._addChunkToRequest(t);
                    }
                  },
                },
                {
                  key: '_addChunkToRequest',
                  value: function(e) {
                    var t = this;
                    'upload' in e &&
                      (e.upload.onprogress = function(e) {
                        e.lengthComputable &&
                          t._emitProgress(n + e.loaded, t._size);
                      }),
                      e.setRequestHeader(
                        'Content-Type',
                        'application/offset+octet-stream'
                      );
                    var n = this._offset,
                      r = this._offset + this.options.chunkSize;
                    (r === 1 / 0 || r > this._size) &&
                      !this.options.uploadLengthDeferred &&
                      (r = this._size),
                      this._source.slice(n, r, function(n, r, i) {
                        n
                          ? t._emitError(n)
                          : (t.options.uploadLengthDeferred &&
                              i &&
                              ((t._size =
                                t._offset + (r && r.size ? r.size : 0)),
                              e.setRequestHeader('Upload-Length', t._size)),
                            null === r
                              ? e.send()
                              : (e.send(r),
                                t._emitProgress(t._offset, t._size)));
                      });
                  },
                },
                {
                  key: '_handleUploadResponse',
                  value: function(e) {
                    var t = this,
                      n = parseInt(e.getResponseHeader('Upload-Offset'), 10);
                    if (isNaN(n))
                      this._emitXhrError(
                        e,
                        new Error('tus: invalid or missing offset value')
                      );
                    else {
                      if (
                        (this._emitProgress(n, this._size),
                        this._emitChunkComplete(
                          n - this._offset,
                          n,
                          this._size
                        ),
                        (this._offset = n),
                        n == this._size)
                      )
                        return (
                          this.options.removeFingerprintOnSuccess &&
                            this.options.resume &&
                            this._storage.removeItem(
                              this._fingerprint,
                              function(e) {
                                e && t._emitError(e);
                              }
                            ),
                          this._emitSuccess(),
                          void this._source.close()
                        );
                      this._startUpload();
                    }
                  },
                },
              ],
              [
                {
                  key: 'terminate',
                  value: function(e, t, n) {
                    if ('function' !== typeof t && 'function' !== typeof n)
                      throw new Error(
                        'tus: a callback function must be specified'
                      );
                    'function' === typeof t && ((n = t), (t = {}));
                    var r = (0, a.newRequest)();
                    r.open('DELETE', e, !0),
                      (r.onload = function() {
                        204 === r.status
                          ? n()
                          : n(
                              new i.default(
                                new Error(
                                  'tus: unexpected response while terminating upload'
                                ),
                                null,
                                r
                              )
                            );
                      }),
                      (r.onerror = function(e) {
                        n(
                          new i.default(
                            e,
                            new Error('tus: failed to terminate upload'),
                            r
                          )
                        );
                      }),
                      f(r, t),
                      r.send(null);
                  },
                },
              ]
            ),
            e
          );
        })();
      function h(e, t) {
        return e >= t && e < t + 100;
      }
      function f(e, t) {
        e.setRequestHeader('Tus-Resumable', '1.0.0');
        var n = t.headers || {};
        for (var r in n) e.setRequestHeader(r, n[r]);
        e.withCredentials = t.withCredentials;
      }
      (d.defaultOptions = c), (t.default = d);
    },
    2310: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function(e) {
        function t(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var i = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' !== typeof t && 'function' !== typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.message)
          );
          (i.originalRequest = r), (i.causingError = n);
          var o = e.message;
          return (
            null != n && (o += ', caused by ' + n.toString()),
            null != r &&
              (o +=
                ', originated from request (response code: ' +
                r.status +
                ', response text: ' +
                r.responseText +
                ')'),
            (i.message = o),
            i
          );
        }
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, Error),
          t
        );
      })();
      t.default = r;
    },
    2311: function(e, t, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty,
        i = Object.prototype.toString,
        o = Object.defineProperty,
        s = Object.getOwnPropertyDescriptor,
        a = function(e) {
          return 'function' === typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === i.call(e);
        },
        l = function(e) {
          if (!e || '[object Object]' !== i.call(e)) return !1;
          var t,
            n = r.call(e, 'constructor'),
            o =
              e.constructor &&
              e.constructor.prototype &&
              r.call(e.constructor.prototype, 'isPrototypeOf');
          if (e.constructor && !n && !o) return !1;
          for (t in e);
          return 'undefined' === typeof t || r.call(e, t);
        },
        u = function(e, t) {
          o && '__proto__' === t.name
            ? o(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        p = function(e, t) {
          if ('__proto__' === t) {
            if (!r.call(e, t)) return;
            if (s) return s(e, t).value;
          }
          return e[t];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          o,
          s,
          c = arguments[0],
          d = 1,
          h = arguments.length,
          f = !1;
        for (
          'boolean' === typeof c &&
            ((f = c), (c = arguments[1] || {}), (d = 2)),
            (null == c || ('object' !== typeof c && 'function' !== typeof c)) &&
              (c = {});
          d < h;
          ++d
        )
          if (null != (t = arguments[d]))
            for (n in t)
              (r = p(c, n)),
                c !== (i = p(t, n)) &&
                  (f && i && (l(i) || (o = a(i)))
                    ? (o
                        ? ((o = !1), (s = r && a(r) ? r : []))
                        : (s = r && l(r) ? r : {}),
                      u(c, { name: n, newValue: e(f, s, i) }))
                    : 'undefined' !== typeof i &&
                      u(c, { name: n, newValue: i }));
        return c;
      };
    },
    2312: function(module, exports, __webpack_require__) {
      (function(global) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(function(e, t) {
          module.exports = t(e);
        })(
          'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof global
            ? global
            : this,
          function(global) {
            'use strict';
            global = global || {};
            var _Base64 = global.Base64,
              version = '2.5.1',
              buffer;
            if (module.exports)
              try {
                buffer = eval("require('buffer').Buffer");
              } catch (err) {
                buffer = void 0;
              }
            var b64chars =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              b64tab = (function(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++)
                  t[e.charAt(n)] = n;
                return t;
              })(b64chars),
              fromCharCode = String.fromCharCode,
              cb_utob = function(e) {
                if (e.length < 2)
                  return (t = e.charCodeAt(0)) < 128
                    ? e
                    : t < 2048
                    ? fromCharCode(192 | (t >>> 6)) +
                      fromCharCode(128 | (63 & t))
                    : fromCharCode(224 | ((t >>> 12) & 15)) +
                      fromCharCode(128 | ((t >>> 6) & 63)) +
                      fromCharCode(128 | (63 & t));
                var t =
                  65536 +
                  1024 * (e.charCodeAt(0) - 55296) +
                  (e.charCodeAt(1) - 56320);
                return (
                  fromCharCode(240 | ((t >>> 18) & 7)) +
                  fromCharCode(128 | ((t >>> 12) & 63)) +
                  fromCharCode(128 | ((t >>> 6) & 63)) +
                  fromCharCode(128 | (63 & t))
                );
              },
              re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
              utob = function(e) {
                return e.replace(re_utob, cb_utob);
              },
              cb_encode = function(e) {
                var t = [0, 2, 1][e.length % 3],
                  n =
                    (e.charCodeAt(0) << 16) |
                    ((e.length > 1 ? e.charCodeAt(1) : 0) << 8) |
                    (e.length > 2 ? e.charCodeAt(2) : 0);
                return [
                  b64chars.charAt(n >>> 18),
                  b64chars.charAt((n >>> 12) & 63),
                  t >= 2 ? '=' : b64chars.charAt((n >>> 6) & 63),
                  t >= 1 ? '=' : b64chars.charAt(63 & n),
                ].join('');
              },
              btoa = global.btoa
                ? function(e) {
                    return global.btoa(e);
                  }
                : function(e) {
                    return e.replace(/[\s\S]{1,3}/g, cb_encode);
                  },
              _encode = buffer
                ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                  ? function(e) {
                      return (e.constructor === buffer.constructor
                        ? e
                        : buffer.from(e)
                      ).toString('base64');
                    }
                  : function(e) {
                      return (e.constructor === buffer.constructor
                        ? e
                        : new buffer(e)
                      ).toString('base64');
                    }
                : function(e) {
                    return btoa(utob(e));
                  },
              encode = function(e, t) {
                return t
                  ? _encode(String(e))
                      .replace(/[+\/]/g, function(e) {
                        return '+' == e ? '-' : '_';
                      })
                      .replace(/=/g, '')
                  : _encode(String(e));
              },
              encodeURI = function(e) {
                return encode(e, !0);
              },
              re_btou = new RegExp(
                [
                  '[\xc0-\xdf][\x80-\xbf]',
                  '[\xe0-\xef][\x80-\xbf]{2}',
                  '[\xf0-\xf7][\x80-\xbf]{3}',
                ].join('|'),
                'g'
              ),
              cb_btou = function(e) {
                switch (e.length) {
                  case 4:
                    var t =
                      (((7 & e.charCodeAt(0)) << 18) |
                        ((63 & e.charCodeAt(1)) << 12) |
                        ((63 & e.charCodeAt(2)) << 6) |
                        (63 & e.charCodeAt(3))) -
                      65536;
                    return (
                      fromCharCode(55296 + (t >>> 10)) +
                      fromCharCode(56320 + (1023 & t))
                    );
                  case 3:
                    return fromCharCode(
                      ((15 & e.charCodeAt(0)) << 12) |
                        ((63 & e.charCodeAt(1)) << 6) |
                        (63 & e.charCodeAt(2))
                    );
                  default:
                    return fromCharCode(
                      ((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1))
                    );
                }
              },
              btou = function(e) {
                return e.replace(re_btou, cb_btou);
              },
              cb_decode = function(e) {
                var t = e.length,
                  n = t % 4,
                  r =
                    (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) |
                    (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) |
                    (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) |
                    (t > 3 ? b64tab[e.charAt(3)] : 0),
                  i = [
                    fromCharCode(r >>> 16),
                    fromCharCode((r >>> 8) & 255),
                    fromCharCode(255 & r),
                  ];
                return (i.length -= [0, 0, 2, 1][n]), i.join('');
              },
              _atob = global.atob
                ? function(e) {
                    return global.atob(e);
                  }
                : function(e) {
                    return e.replace(/\S{1,4}/g, cb_decode);
                  },
              atob = function(e) {
                return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ''));
              },
              _decode = buffer
                ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                  ? function(e) {
                      return (e.constructor === buffer.constructor
                        ? e
                        : buffer.from(e, 'base64')
                      ).toString();
                    }
                  : function(e) {
                      return (e.constructor === buffer.constructor
                        ? e
                        : new buffer(e, 'base64')
                      ).toString();
                    }
                : function(e) {
                    return btou(_atob(e));
                  },
              decode = function(e) {
                return _decode(
                  String(e)
                    .replace(/[-_]/g, function(e) {
                      return '-' == e ? '+' : '/';
                    })
                    .replace(/[^A-Za-z0-9\+\/]/g, '')
                );
              },
              noConflict = function() {
                var e = global.Base64;
                return (global.Base64 = _Base64), e;
              };
            if (
              ((global.Base64 = {
                VERSION: version,
                atob: atob,
                btoa: btoa,
                fromBase64: decode,
                toBase64: encode,
                utob: utob,
                encode: encode,
                encodeURI: encodeURI,
                btou: btou,
                decode: decode,
                noConflict: noConflict,
                __buffer__: buffer,
              }),
              'function' === typeof Object.defineProperty)
            ) {
              var noEnum = function(e) {
                return {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                };
              };
              global.Base64.extendString = function() {
                Object.defineProperty(
                  String.prototype,
                  'fromBase64',
                  noEnum(function() {
                    return decode(this);
                  })
                ),
                  Object.defineProperty(
                    String.prototype,
                    'toBase64',
                    noEnum(function(e) {
                      return encode(this, e);
                    })
                  ),
                  Object.defineProperty(
                    String.prototype,
                    'toBase64URI',
                    noEnum(function() {
                      return encode(this, !0);
                    })
                  );
              };
            }
            return (
              global.Meteor && (Base64 = global.Base64),
              module.exports
                ? (module.exports.Base64 = global.Base64)
                : ((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                  (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return global.Base64;
                  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                  void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                    (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),
              { Base64: global.Base64 }
            );
          }
        );
      }.call(this, __webpack_require__(53)));
    },
    2313: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.newRequest = function() {
          return new window.XMLHttpRequest();
        }),
        (t.resolveUrl = function(e, t) {
          return new o.default(t, e).toString();
        });
      var r,
        i = n(2314),
        o = (r = i) && r.__esModule ? r : { default: r };
    },
    2314: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n(2315),
          i = n(2316),
          o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
          a = new RegExp(
            '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
          );
        function l(e) {
          return (e || '').toString().replace(a, '');
        }
        var u = [
            ['#', 'hash'],
            ['?', 'query'],
            function(e) {
              return e.replace('\\', '/');
            },
            ['/', 'pathname'],
            ['@', 'auth', 1],
            [NaN, 'host', void 0, 1, 1],
            [/:(\d+)$/, 'port', void 0, 1],
            [NaN, 'hostname', void 0, 1, 1],
          ],
          p = { hash: 1, query: 1 };
        function c(e) {
          var n,
            r =
              ('undefined' !== typeof window
                ? window
                : 'undefined' !== typeof t
                ? t
                : 'undefined' !== typeof self
                ? self
                : {}
              ).location || {},
            i = {},
            s = typeof (e = e || r);
          if ('blob:' === e.protocol) i = new h(unescape(e.pathname), {});
          else if ('string' === s)
            for (n in ((i = new h(e, {})), p)) delete i[n];
          else if ('object' === s) {
            for (n in e) n in p || (i[n] = e[n]);
            void 0 === i.slashes && (i.slashes = o.test(e.href));
          }
          return i;
        }
        function d(e) {
          e = l(e);
          var t = s.exec(e);
          return {
            protocol: t[1] ? t[1].toLowerCase() : '',
            slashes: !!t[2],
            rest: t[3],
          };
        }
        function h(e, t, n) {
          if (((e = l(e)), !(this instanceof h))) return new h(e, t, n);
          var o,
            s,
            a,
            p,
            f,
            g,
            v = u.slice(),
            m = typeof t,
            y = this,
            b = 0;
          for (
            'object' !== m && 'string' !== m && ((n = t), (t = null)),
              n && 'function' !== typeof n && (n = i.parse),
              t = c(t),
              o = !(s = d(e || '')).protocol && !s.slashes,
              y.slashes = s.slashes || (o && t.slashes),
              y.protocol = s.protocol || t.protocol || '',
              e = s.rest,
              s.slashes || (v[3] = [/(.*)/, 'pathname']);
            b < v.length;
            b++
          )
            'function' !== typeof (p = v[b])
              ? ((a = p[0]),
                (g = p[1]),
                a !== a
                  ? (y[g] = e)
                  : 'string' === typeof a
                  ? ~(f = e.indexOf(a)) &&
                    ('number' === typeof p[2]
                      ? ((y[g] = e.slice(0, f)), (e = e.slice(f + p[2])))
                      : ((y[g] = e.slice(f)), (e = e.slice(0, f))))
                  : (f = a.exec(e)) &&
                    ((y[g] = f[1]), (e = e.slice(0, f.index))),
                (y[g] = y[g] || (o && p[3] && t[g]) || ''),
                p[4] && (y[g] = y[g].toLowerCase()))
              : (e = p(e));
          n && (y.query = n(y.query)),
            o &&
              t.slashes &&
              '/' !== y.pathname.charAt(0) &&
              ('' !== y.pathname || '' !== t.pathname) &&
              (y.pathname = (function(e, t) {
                if ('' === e) return t;
                for (
                  var n = (t || '/')
                      .split('/')
                      .slice(0, -1)
                      .concat(e.split('/')),
                    r = n.length,
                    i = n[r - 1],
                    o = !1,
                    s = 0;
                  r--;

                )
                  '.' === n[r]
                    ? n.splice(r, 1)
                    : '..' === n[r]
                    ? (n.splice(r, 1), s++)
                    : s && (0 === r && (o = !0), n.splice(r, 1), s--);
                return (
                  o && n.unshift(''),
                  ('.' !== i && '..' !== i) || n.push(''),
                  n.join('/')
                );
              })(y.pathname, t.pathname)),
            r(y.port, y.protocol) || ((y.host = y.hostname), (y.port = '')),
            (y.username = y.password = ''),
            y.auth &&
              ((p = y.auth.split(':')),
              (y.username = p[0] || ''),
              (y.password = p[1] || '')),
            (y.origin =
              y.protocol && y.host && 'file:' !== y.protocol
                ? y.protocol + '//' + y.host
                : 'null'),
            (y.href = y.toString());
        }
        (h.prototype = {
          set: function(e, t, n) {
            var o = this;
            switch (e) {
              case 'query':
                'string' === typeof t && t.length && (t = (n || i.parse)(t)),
                  (o[e] = t);
                break;
              case 'port':
                (o[e] = t),
                  r(t, o.protocol)
                    ? t && (o.host = o.hostname + ':' + t)
                    : ((o.host = o.hostname), (o[e] = ''));
                break;
              case 'hostname':
                (o[e] = t), o.port && (t += ':' + o.port), (o.host = t);
                break;
              case 'host':
                (o[e] = t),
                  /:\d+$/.test(t)
                    ? ((t = t.split(':')),
                      (o.port = t.pop()),
                      (o.hostname = t.join(':')))
                    : ((o.hostname = t), (o.port = ''));
                break;
              case 'protocol':
                (o.protocol = t.toLowerCase()), (o.slashes = !n);
                break;
              case 'pathname':
              case 'hash':
                if (t) {
                  var s = 'pathname' === e ? '/' : '#';
                  o[e] = t.charAt(0) !== s ? s + t : t;
                } else o[e] = t;
                break;
              default:
                o[e] = t;
            }
            for (var a = 0; a < u.length; a++) {
              var l = u[a];
              l[4] && (o[l[1]] = o[l[1]].toLowerCase());
            }
            return (
              (o.origin =
                o.protocol && o.host && 'file:' !== o.protocol
                  ? o.protocol + '//' + o.host
                  : 'null'),
              (o.href = o.toString()),
              o
            );
          },
          toString: function(e) {
            (e && 'function' === typeof e) || (e = i.stringify);
            var t,
              n = this,
              r = n.protocol;
            r && ':' !== r.charAt(r.length - 1) && (r += ':');
            var o = r + (n.slashes ? '//' : '');
            return (
              n.username &&
                ((o += n.username),
                n.password && (o += ':' + n.password),
                (o += '@')),
              (o += n.host + n.pathname),
              (t = 'object' === typeof n.query ? e(n.query) : n.query) &&
                (o += '?' !== t.charAt(0) ? '?' + t : t),
              n.hash && (o += n.hash),
              o
            );
          },
        }),
          (h.extractProtocol = d),
          (h.location = c),
          (h.trimLeft = l),
          (h.qs = i),
          (e.exports = h);
      }.call(this, n(53)));
    },
    2315: function(e, t, n) {
      'use strict';
      e.exports = function(e, t) {
        if (((t = t.split(':')[0]), !(e = +e))) return !1;
        switch (t) {
          case 'http':
          case 'ws':
            return 80 !== e;
          case 'https':
          case 'wss':
            return 443 !== e;
          case 'ftp':
            return 21 !== e;
          case 'gopher':
            return 70 !== e;
          case 'file':
            return !1;
        }
        return 0 !== e;
      };
    },
    2316: function(e, t, n) {
      'use strict';
      var r,
        i = Object.prototype.hasOwnProperty;
      function o(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, ' '));
        } catch (t) {
          return null;
        }
      }
      (t.stringify = function(e, t) {
        t = t || '';
        var n,
          o,
          s = [];
        for (o in ('string' !== typeof t && (t = '?'), e))
          if (i.call(e, o)) {
            if (
              ((n = e[o]) || (null !== n && n !== r && !isNaN(n)) || (n = ''),
              (o = encodeURIComponent(o)),
              (n = encodeURIComponent(n)),
              null === o || null === n)
            )
              continue;
            s.push(o + '=' + n);
          }
        return s.length ? t + s.join('&') : '';
      }),
        (t.parse = function(e) {
          for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; (t = n.exec(e)); ) {
            var i = o(t[1]),
              s = o(t[2]);
            null === i || null === s || i in r || (r[i] = s);
          }
          return r;
        });
    },
    2317: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.getSource = function(e, t, n) {
        if ((0, i.default)() && e && 'undefined' !== typeof e.uri)
          return void (0, o.default)(e.uri, function(e, t) {
            if (e)
              return n(
                new Error(
                  'tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ' +
                    e
                )
              );
            n(null, new p(t));
          });
        if ('function' === typeof e.slice && 'undefined' !== typeof e.size)
          return void n(null, new p(e));
        if ('function' === typeof e.read)
          return (
            (t = +t),
            isFinite(t)
              ? void n(null, new c(e, t))
              : void n(
                  new Error(
                    'cannot create source for stream without a finite value for the `chunkSize` option'
                  )
                )
          );
        n(
          new Error(
            'source object may only be an instance of File, Blob, or Reader in this environment'
          )
        );
      };
      var i = l(n(1766)),
        o = l(n(2318)),
        s = l(n(2319)),
        a = l(n(2320));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var p = (function() {
          function e(t) {
            u(this, e), (this._file = t), (this.size = t.size);
          }
          return (
            r(e, [
              {
                key: 'slice',
                value: function(e, t, n) {
                  (0, s.default)()
                    ? (0, a.default)(this._file.slice(e, t), function(e, t) {
                        if (e) return n(e);
                        n(null, t);
                      })
                    : n(null, this._file.slice(e, t));
                },
              },
              { key: 'close', value: function() {} },
            ]),
            e
          );
        })(),
        c = (function() {
          function e(t, n) {
            u(this, e),
              (this._chunkSize = n),
              (this._buffer = void 0),
              (this._bufferOffset = 0),
              (this._reader = t),
              (this._done = !1);
          }
          return (
            r(e, [
              {
                key: 'slice',
                value: function(e, t, n) {
                  if (!(e < this._bufferOffset))
                    return this._readUntilEnoughDataOrDone(e, t, n);
                  n(
                    new Error(
                      "Requested data is before the reader's current offset"
                    )
                  );
                },
              },
              {
                key: '_readUntilEnoughDataOrDone',
                value: function(e, t, n) {
                  var r = this,
                    i = t <= this._bufferOffset + d(this._buffer);
                  if (this._done || i) {
                    var o = this._getDataFromBuffer(e, t);
                    n(null, o, null == o && this._done);
                  } else
                    this._reader
                      .read()
                      .then(function(i) {
                        var o = i.value;
                        i.done
                          ? (r._done = !0)
                          : void 0 === r._buffer
                          ? (r._buffer = o)
                          : (r._buffer = (function(e, t) {
                              if (e.concat) return e.concat(t);
                              if (e instanceof Blob)
                                return new Blob([e, t], { type: e.type });
                              if (e.set) {
                                var n = new e.constructor(e.length + t.length);
                                return n.set(e), n.set(t, e.length), n;
                              }
                              throw new Error('Unknown data type');
                            })(r._buffer, o)),
                          r._readUntilEnoughDataOrDone(e, t, n);
                      })
                      .catch(function(e) {
                        n(new Error('Error during read: ' + e));
                      });
                },
              },
              {
                key: '_getDataFromBuffer',
                value: function(e, t) {
                  e > this._bufferOffset &&
                    ((this._buffer = this._buffer.slice(
                      e - this._bufferOffset
                    )),
                    (this._bufferOffset = e));
                  var n = 0 === d(this._buffer);
                  return this._done && n ? null : this._buffer.slice(0, t - e);
                },
              },
              {
                key: 'close',
                value: function() {
                  this._reader.cancel && this._reader.cancel();
                },
              },
            ]),
            e
          );
        })();
      function d(e) {
        return void 0 === e ? 0 : void 0 !== e.size ? e.size : e.length;
      }
    },
    2318: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = new XMLHttpRequest();
          (n.responseType = 'blob'),
            (n.onload = function() {
              var e = n.response;
              t(null, e);
            }),
            (n.onerror = function(e) {
              t(e);
            }),
            n.open('GET', e),
            n.send();
        });
    },
    2319: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = function() {
        return (
          'undefined' != typeof window &&
          ('undefined' != typeof window.PhoneGap ||
            'undefined' != typeof window.Cordova ||
            'undefined' != typeof window.cordova)
        );
      };
    },
    2320: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = new FileReader();
          (n.onload = function() {
            t(null, new Uint8Array(n.result));
          }),
            (n.onerror = function(e) {
              t(e);
            }),
            n.readAsArrayBuffer(e);
        });
    },
    2321: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, n) {
          if ((0, o.default)())
            return n(
              null,
              (function(e, t) {
                var n = e.exif
                  ? (function(e) {
                      var t = 0;
                      if (0 === e.length) return t;
                      for (var n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        (t = (t << 5) - t + r), (t &= t);
                      }
                      return t;
                    })(JSON.stringify(e.exif))
                  : 'noexif';
                return [
                  'tus-rn',
                  e.name || 'noname',
                  e.size || 'nosize',
                  n,
                  t.endpoint,
                ].join('/');
              })(e, t)
            );
          return n(
            null,
            ['tus-br', e.name, e.type, e.size, e.lastModified, t.endpoint].join(
              '-'
            )
          );
        });
      var r,
        i = n(1766),
        o = (r = i) && r.__esModule ? r : { default: r };
    },
    2322: function(e, t, n) {
      'use strict';
      function r(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (r = function(e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))
          )
            return e;
          var n;
          if ('function' !== typeof e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if ('undefined' !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return i(e, arguments, s(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(r, e)
          );
        })(e);
      }
      function i(e, t, n) {
        return (i = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && o(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var a = (function(e) {
        var t, n;
        function r() {
          var t;
          return (
            ((t = e.call(this, 'Authorization required') || this).name =
              'AuthError'),
            (t.isAuthError = !0),
            t
          );
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          r
        );
      })(r(Error));
      e.exports = a;
    },
    2323: function(e, t, n) {
      'use strict';
      function r() {
        return (r =
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
      var i = n(1768),
        o = n(2324),
        s = function(e) {
          return e
            .split('-')
            .map(function(e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            })
            .join(' ');
        };
      e.exports = (function(e) {
        var t, n;
        function i(t, n) {
          var r;
          return (
            ((r = e.call(this, t, n) || this).provider = n.provider),
            (r.id = r.provider),
            (r.authProvider = n.authProvider || r.provider),
            (r.name = r.opts.name || s(r.id)),
            (r.pluginId = r.opts.pluginId),
            (r.tokenKey = 'companion-' + r.pluginId + '-auth-token'),
            r
          );
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var a = i.prototype;
        return (
          (a.headers = function() {
            var t = this;
            return new Promise(function(n, i) {
              e.prototype.headers
                .call(t)
                .then(function(e) {
                  t.getAuthToken().then(function(t) {
                    n(r({}, e, { 'uppy-auth-token': t }));
                  });
                })
                .catch(i);
            });
          }),
          (a.onReceiveResponse = function(t) {
            t = e.prototype.onReceiveResponse.call(this, t);
            var n = this.uppy.getPlugin(this.pluginId),
              r = n.getPluginState().authenticated
                ? 401 !== t.status
                : t.status < 400;
            return n.setPluginState({ authenticated: r }), t;
          }),
          (a.setAuthToken = function(e) {
            return this.uppy
              .getPlugin(this.pluginId)
              .storage.setItem(this.tokenKey, e);
          }),
          (a.getAuthToken = function() {
            return this.uppy
              .getPlugin(this.pluginId)
              .storage.getItem(this.tokenKey);
          }),
          (a.authUrl = function() {
            return this.hostname + '/' + this.id + '/connect';
          }),
          (a.fileUrl = function(e) {
            return this.hostname + '/' + this.id + '/get/' + e;
          }),
          (a.list = function(e) {
            return this.get(this.id + '/list/' + (e || ''));
          }),
          (a.logout = function() {
            var e = this;
            return new Promise(function(t, n) {
              e.get(e.id + '/logout')
                .then(function(r) {
                  e.uppy
                    .getPlugin(e.pluginId)
                    .storage.removeItem(e.tokenKey)
                    .then(function() {
                      return t(r);
                    })
                    .catch(n);
                })
                .catch(n);
            });
          }),
          (i.initPlugin = function(e, t, n) {
            if (
              ((e.type = 'acquirer'),
              (e.files = []),
              n && (e.opts = r({}, n, t)),
              t.serverUrl || t.serverPattern)
            )
              throw new Error(
                '`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`'
              );
            if (t.companionAllowedHosts) {
              var i = t.companionAllowedHosts;
              if (
                'string' !== typeof i &&
                !Array.isArray(i) &&
                !(i instanceof RegExp)
              )
                throw new TypeError(
                  e.id +
                    ': the option "companionAllowedHosts" must be one of string, Array, RegExp'
                );
              e.opts.companionAllowedHosts = i;
            } else
              /^(?!https?:\/\/).*$/i.test(t.companionUrl)
                ? (e.opts.companionAllowedHosts =
                    'https://' + t.companionUrl.replace(/^\/\//, ''))
                : (e.opts.companionAllowedHosts = t.companionUrl);
            e.storage = e.opts.storage || o;
          }),
          i
        );
      })(i);
    },
    2324: function(e, t, n) {
      'use strict';
      (e.exports.setItem = function(e, t) {
        return new Promise(function(n) {
          localStorage.setItem(e, t), n();
        });
      }),
        (e.exports.getItem = function(e) {
          return Promise.resolve(localStorage.getItem(e));
        }),
        (e.exports.removeItem = function(e) {
          return new Promise(function(t) {
            localStorage.removeItem(e), t();
          });
        });
    },
    2325: function(e, t, n) {
      var r = n(1758);
      e.exports = (function() {
        function e(e) {
          (this.opts = e),
            (this._queued = []),
            (this.isOpen = !1),
            (this.emitter = r()),
            (this._handleMessage = this._handleMessage.bind(this)),
            (this.close = this.close.bind(this)),
            (this.emit = this.emit.bind(this)),
            (this.on = this.on.bind(this)),
            (this.once = this.once.bind(this)),
            (this.send = this.send.bind(this)),
            (e && !1 === e.autoOpen) || this.open();
        }
        var t = e.prototype;
        return (
          (t.open = function() {
            var e = this;
            (this.socket = new WebSocket(this.opts.target)),
              (this.socket.onopen = function(t) {
                for (e.isOpen = !0; e._queued.length > 0 && e.isOpen; ) {
                  var n = e._queued[0];
                  e.send(n.action, n.payload), (e._queued = e._queued.slice(1));
                }
              }),
              (this.socket.onclose = function(t) {
                e.isOpen = !1;
              }),
              (this.socket.onmessage = this._handleMessage);
          }),
          (t.close = function() {
            this.socket && this.socket.close();
          }),
          (t.send = function(e, t) {
            this.isOpen
              ? this.socket.send(JSON.stringify({ action: e, payload: t }))
              : this._queued.push({ action: e, payload: t });
          }),
          (t.on = function(e, t) {
            this.emitter.on(e, t);
          }),
          (t.emit = function(e, t) {
            this.emitter.emit(e, t);
          }),
          (t.once = function(e, t) {
            this.emitter.once(e, t);
          }),
          (t._handleMessage = function(e) {
            try {
              var t = JSON.parse(e.data);
              this.emit(t.action, t.payload);
            } catch (n) {
              console.log(n);
            }
          }),
          e
        );
      })();
    },
    2326: function(e, t, n) {
      var r = n(826);
      e.exports = r(
        function(e, t, n) {
          var r = t.progress,
            i = t.bytesUploaded,
            o = t.bytesTotal;
          r &&
            (e.uppy.log('Upload progress: ' + r),
            e.uppy.emit('upload-progress', n, {
              uploader: e,
              bytesUploaded: i,
              bytesTotal: o,
            }));
        },
        300,
        { leading: !0, trailing: !0 }
      );
    },
    2327: function(e, t) {
      e.exports = function(e) {
        var t = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(
          e
        )[1];
        return (/^http:\/\//i.test(e) ? 'ws' : 'wss') + '://' + t;
      };
    },
    2328: function(e, t) {
      e.exports = function(e) {
        var t = [],
          n = [];
        function r(e) {
          t.push(e);
        }
        function i(e) {
          n.push(e);
        }
        return Promise.all(
          e.map(function(e) {
            return e.then(r, i);
          })
        ).then(function() {
          return { successful: t, failed: n };
        });
      };
    },
    2329: function(e, t) {
      e.exports = (function() {
        function e(e) {
          (this._events = []), (this._emitter = e);
        }
        var t = e.prototype;
        return (
          (t.on = function(e, t) {
            return this._events.push([e, t]), this._emitter.on(e, t);
          }),
          (t.remove = function() {
            var e = this;
            this._events.forEach(function(t) {
              var n = t[0],
                r = t[1];
              e._emitter.off(n, r);
            });
          }),
          e
        );
      })();
    },
    2330: function(e, t) {
      e.exports = (function() {
        function e(e) {
          (this.limit = 'number' !== typeof e || 0 === e ? 1 / 0 : e),
            (this.activeRequests = 0),
            (this.queuedHandlers = []);
        }
        var t = e.prototype;
        return (
          (t._call = function(e) {
            var t = this;
            this.activeRequests += 1;
            var n,
              r = !1;
            try {
              n = e();
            } catch (i) {
              throw ((this.activeRequests -= 1), i);
            }
            return {
              abort: function() {
                r || ((r = !0), (t.activeRequests -= 1), n(), t._queueNext());
              },
              done: function() {
                r || ((r = !0), (t.activeRequests -= 1), t._queueNext());
              },
            };
          }),
          (t._queueNext = function() {
            var e = this;
            Promise.resolve().then(function() {
              e._next();
            });
          }),
          (t._next = function() {
            if (
              !(this.activeRequests >= this.limit) &&
              0 !== this.queuedHandlers.length
            ) {
              var e = this.queuedHandlers.shift(),
                t = this._call(e.fn);
              (e.abort = t.abort), (e.done = t.done);
            }
          }),
          (t._queue = function(e) {
            var t = this,
              n = {
                fn: e,
                abort: function() {
                  t._dequeue(n);
                },
                done: function() {
                  throw new Error(
                    'Cannot mark a queued request as done: this indicates a bug'
                  );
                },
              };
            return this.queuedHandlers.push(n), n;
          }),
          (t._dequeue = function(e) {
            var t = this.queuedHandlers.indexOf(e);
            -1 !== t && this.queuedHandlers.splice(t, 1);
          }),
          (t.run = function(e) {
            return this.activeRequests < this.limit
              ? this._call(e)
              : this._queue(e);
          }),
          (t.wrapPromiseFunction = function(e) {
            var t = this;
            return function() {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              return new Promise(function(n, i) {
                var o = t.run(function() {
                  var t;
                  return (
                    e.apply(void 0, r).then(
                      function(e) {
                        t ? i(t) : (o.done(), n(e));
                      },
                      function(e) {
                        t ? i(t) : (o.done(), i(e));
                      }
                    ),
                    function() {
                      t = new Error('Cancelled');
                    }
                  );
                });
              });
            };
          }),
          e
        );
      })();
    },
    2331: function(e, t, n) {
      var r = n(1765);
      e.exports = function(e) {
        return function(t, n, i) {
          return ('undefined' !== typeof window &&
            ('undefined' !== typeof window.PhoneGap ||
              'undefined' !== typeof window.Cordova ||
              'undefined' !== typeof window.cordova)) ||
            ('undefined' !== typeof navigator &&
              'string' === typeof navigator.product &&
              'reactnative' === navigator.product.toLowerCase())
            ? r.Upload.defaultOptions.fingerprint(t, n, i)
            : i(null, ['tus', e.id, n.endpoint].join('-'));
        };
      };
    },
    2332: function(e, t, n) {
      var r, i;
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var s = n(728).Plugin,
        a = n(1215).Provider,
        l = n(2333),
        u = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            return (
              ((r = e.call(this, t, n) || this).id =
                r.opts.id || 'GoogleDrive'),
              (r.title = r.opts.title || 'Google Drive'),
              a.initPlugin(o(r), n),
              (r.title = r.opts.title || 'Google Drive'),
              (r.icon = function() {
                return u(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    width: '18px',
                    height: '16px',
                    viewBox: '0 0 18 16',
                    version: '1.1',
                  },
                  u(
                    'g',
                    { 'fill-rule': 'evenodd' },
                    u('polygon', {
                      fill: '#3089FC',
                      points:
                        '6.32475 10.2 18 10.2 14.999625 15.3 3.324375 15.3',
                    }),
                    u('polygon', {
                      fill: '#00A85D',
                      points:
                        '3.000375 15.3 0 10.2 5.83875 0.275974026 8.838 5.37597403 5.999625 10.2',
                    }),
                    u('polygon', {
                      fill: '#FFD024',
                      points:
                        '11.838375 9.92402597 5.999625 0 12.000375 0 17.839125 9.92402597',
                    })
                  )
                );
              }),
              (r.provider = new a(t, {
                companionUrl: r.opts.companionUrl,
                companionHeaders:
                  r.opts.companionHeaders || r.opts.serverHeaders,
                storage: r.opts.storage,
                provider: 'drive',
                authProvider: 'google',
                pluginId: r.id,
              })),
              (r.onFirstRender = r.onFirstRender.bind(o(r))),
              (r.render = r.render.bind(o(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.install = function() {
              (this.view = new l(this, { provider: this.provider })),
                this.setPluginState({
                  authenticated: !1,
                  files: [],
                  folders: [],
                  directories: [],
                  activeRow: -1,
                  filterInput: '',
                  isSearchVisible: !1,
                  hasTeamDrives: !1,
                  teamDrives: [],
                  teamDriveId: '',
                });
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.view.tearDown(), this.unmount();
            }),
            (i.onFirstRender = function() {
              return this.view.getFolder('root', '/');
            }),
            (i.render = function(e) {
              return this.view.render(e);
            }),
            r
          );
        })(s)),
        (r.VERSION = '1.3.2'),
        i);
    },
    2333: function(e, t, n) {
      var r = n(1568);
      e.exports = (function(e) {
        var t, n;
        function r() {
          return e.apply(this, arguments) || this;
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (r.prototype.toggleCheckbox = function(t, n) {
            t.stopPropagation(),
              t.preventDefault(),
              n.custom.isTeamDrive ||
                n.custom.isSharedDrive ||
                e.prototype.toggleCheckbox.call(this, t, n);
          }),
          r
        );
      })(r);
    },
    2334: function(e, t, n) {
      var r = n(573),
        i = r.h,
        o = (function(e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function() {
              var e = i(
                'span',
                { class: 'uppy-Provider-authTitleName' },
                this.props.pluginName,
                i('br', null)
              );
              return i(
                'div',
                { class: 'uppy-Provider-auth' },
                i(
                  'div',
                  { class: 'uppy-Provider-authIcon' },
                  this.props.pluginIcon()
                ),
                i(
                  'div',
                  { class: 'uppy-Provider-authTitle' },
                  this.props.i18nArray('authenticateWithTitle', {
                    pluginName: e,
                  })
                ),
                i(
                  'button',
                  {
                    type: 'button',
                    class:
                      'uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn',
                    onclick: this.props.handleAuth,
                    'data-uppy-super-focusable': !0,
                  },
                  this.props.i18nArray('authenticateWith', {
                    pluginName: this.props.pluginName,
                  })
                )
              );
            }),
            r
          );
        })(r.Component);
      e.exports = o;
    },
    2335: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(12),
        o = n(2336),
        s = n(2337),
        a = n(2338),
        l = n(2343),
        u = n(573).h;
      e.exports = function(e) {
        var t = e.folders,
          n = e.files;
        '' !== e.filterInput &&
          ((t = e.filterItems(e.folders)), (n = e.filterItems(e.files)));
        var p = e.currentSelection.length;
        return u(
          'div',
          {
            class: i(
              'uppy-ProviderBrowser',
              'uppy-ProviderBrowser-viewType--' + e.viewType
            ),
          },
          u(
            'div',
            { class: 'uppy-ProviderBrowser-header' },
            u(
              'div',
              {
                class: i(
                  'uppy-ProviderBrowser-headerBar',
                  !e.showBreadcrumbs && 'uppy-ProviderBrowser-headerBar--simple'
                ),
              },
              e.showBreadcrumbs &&
                o({
                  getFolder: e.getFolder,
                  directories: e.directories,
                  breadcrumbsIcon: e.pluginIcon && e.pluginIcon(),
                  title: e.title,
                }),
              u('span', { class: 'uppy-ProviderBrowser-user' }, e.username),
              u(
                'button',
                {
                  type: 'button',
                  onclick: e.logout,
                  class: 'uppy-u-reset uppy-ProviderBrowser-userLogout',
                },
                e.i18n('logOut')
              )
            )
          ),
          e.showFilter && u(s, e),
          u(a, {
            columns: [{ name: 'Name', key: 'title' }],
            folders: t,
            files: n,
            activeRow: e.isActiveRow,
            sortByTitle: e.sortByTitle,
            sortByDate: e.sortByDate,
            isChecked: e.isChecked,
            handleFolderClick: e.getNextFolder,
            toggleCheckbox: e.toggleCheckbox,
            handleScroll: e.handleScroll,
            title: e.title,
            showTitles: e.showTitles,
            i18n: e.i18n,
            viewType: e.viewType,
          }),
          p > 0 && u(l, r({ selected: p }, e))
        );
      };
    },
    2336: function(e, t, n) {
      var r = n(573).h,
        i = function(e) {
          return [
            r(
              'button',
              { type: 'button', class: 'uppy-u-reset', onclick: e.getFolder },
              e.title
            ),
            e.isLast ? '' : ' / ',
          ];
        };
      e.exports = function(e) {
        return r(
          'div',
          { class: 'uppy-Provider-breadcrumbs' },
          r(
            'div',
            { class: 'uppy-Provider-breadcrumbsIcon' },
            e.breadcrumbsIcon
          ),
          e.directories.map(function(t, n) {
            return r(i, {
              key: t.id,
              getFolder: function() {
                return e.getFolder(t.id);
              },
              title: 0 === n ? e.title : t.title,
              isLast: n + 1 === e.directories.length,
            });
          })
        );
      };
    },
    2337: function(e, t, n) {
      var r = n(573),
        i = r.h,
        o = r.Component;
      e.exports = (function(e) {
        var t, n;
        function r(t) {
          var n;
          return (
            ((n =
              e.call(this, t) ||
              this).preventEnterPress = n.preventEnterPress.bind(
              (function(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(n)
            )),
            n
          );
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var o = r.prototype;
        return (
          (o.preventEnterPress = function(e) {
            13 === e.keyCode && (e.stopPropagation(), e.preventDefault());
          }),
          (o.render = function() {
            var e = this;
            return i(
              'div',
              { class: 'uppy-ProviderBrowser-search' },
              i('input', {
                class: 'uppy-u-reset uppy-ProviderBrowser-searchInput',
                type: 'text',
                placeholder: this.props.i18n('filter'),
                'aria-label': this.props.i18n('filter'),
                onkeyup: this.preventEnterPress,
                onkeydown: this.preventEnterPress,
                onkeypress: this.preventEnterPress,
                oninput: function(t) {
                  return e.props.filterQuery(t);
                },
                value: this.props.filterInput,
              }),
              i(
                'svg',
                {
                  'aria-hidden': 'true',
                  focusable: 'false',
                  class: 'UppyIcon uppy-ProviderBrowser-searchIcon',
                  width: '12',
                  height: '12',
                  viewBox: '0 0 12 12',
                },
                i('path', {
                  d:
                    'M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z',
                })
              ),
              this.props.filterInput &&
                i(
                  'button',
                  {
                    class: 'uppy-u-reset uppy-ProviderBrowser-searchClose',
                    type: 'button',
                    'aria-label': this.props.i18n('resetFilter'),
                    title: this.props.i18n('resetFilter'),
                    onclick: this.props.filterQuery,
                  },
                  i(
                    'svg',
                    {
                      'aria-hidden': 'true',
                      focusable: 'false',
                      class: 'UppyIcon',
                      viewBox: '0 0 19 19',
                    },
                    i('path', {
                      d:
                        'M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z',
                    })
                  )
                )
            );
          }),
          r
        );
      })(o);
    },
    2338: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(573).h,
        o = n(2339),
        s = function(e, t) {
          return {
            id: e.id,
            title: e.name,
            getItemIcon: function() {
              return e.icon;
            },
            isChecked: t.isChecked(e),
            toggleCheckbox: function(n) {
              return t.toggleCheckbox(n, e);
            },
            columns: t.columns,
            showTitles: t.showTitles,
            viewType: t.viewType,
            i18n: t.i18n,
          };
        };
      e.exports = function(e) {
        return e.folders.length || e.files.length
          ? i(
              'div',
              { class: 'uppy-ProviderBrowser-body' },
              i(
                'ul',
                {
                  class: 'uppy-ProviderBrowser-list',
                  onscroll: e.handleScroll,
                  role: 'listbox',
                  tabindex: '-1',
                },
                e.folders.map(function(t) {
                  return o(
                    r({}, s(t, e), {
                      type: 'folder',
                      isDisabled: !!e.isChecked(t) && e.isChecked(t).loading,
                      handleFolderClick: function() {
                        return e.handleFolderClick(t);
                      },
                    })
                  );
                }),
                e.files.map(function(t) {
                  return o(r({}, s(t, e), { type: 'file', isDisabled: !1 }));
                })
              )
            )
          : i('div', { class: 'uppy-Provider-empty' }, e.i18n('noFilesFound'));
      };
    },
    2339: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(573).h,
        o = n(12),
        s = n(2340),
        a = n(2341),
        l = n(2342);
      e.exports = function(e) {
        var t = e.getItemIcon(),
          n = o(
            'uppy-ProviderBrowserItem',
            { 'uppy-ProviderBrowserItem--selected': e.isChecked },
            { 'uppy-ProviderBrowserItem--noPreview': 'video' === t }
          ),
          u = i(s, { itemIconString: t });
        switch (e.viewType) {
          case 'grid':
            return i(a, r({}, e, { className: n, itemIconEl: u }));
          case 'list':
            return i(l, r({}, e, { className: n, itemIconEl: u }));
          default:
            throw new Error('There is no such type ' + e.viewType);
        }
      };
    },
    2340: function(e, t, n) {
      var r = n(573).h;
      function i() {
        return r(
          'svg',
          {
            'aria-hidden': 'true',
            focusable: 'false',
            class: 'UppyIcon',
            width: 11,
            height: 14.5,
            viewBox: '0 0 44 58',
          },
          r('path', {
            d:
              'M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z',
          })
        );
      }
      function o() {
        return r(
          'svg',
          {
            'aria-hidden': 'true',
            focusable: 'false',
            class: 'UppyIcon',
            style: { width: 16, marginRight: 3 },
            viewBox: '0 0 276.157 276.157',
          },
          r('path', {
            d:
              'M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z',
          })
        );
      }
      function s() {
        return r(
          'svg',
          { 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 58 58' },
          r('path', {
            d:
              'M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z',
          }),
          r('path', {
            d:
              'M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z',
          })
        );
      }
      e.exports = function(e) {
        if (null !== e.itemIconString)
          switch (e.itemIconString) {
            case 'file':
              return r(i, null);
            case 'folder':
              return r(o, null);
            case 'video':
              return r(s, null);
            default:
              return r('img', { src: e.itemIconString });
          }
      };
    },
    2341: function(e, t, n) {
      var r = n(573).h;
      e.exports = function(e) {
        return r(
          'li',
          { class: e.className },
          r('div', {
            'aria-hidden': !0,
            class:
              'uppy-ProviderBrowserItem-fakeCheckbox ' +
              (e.isChecked
                ? 'uppy-ProviderBrowserItem-fakeCheckbox--is-checked'
                : ''),
          }),
          r(
            'button',
            {
              type: 'button',
              class: 'uppy-u-reset uppy-ProviderBrowserItem-inner',
              onclick: e.toggleCheckbox,
              role: 'option',
              'aria-label': e.isChecked
                ? e.i18n('unselectFileNamed', { name: e.title })
                : e.i18n('selectFileNamed', { name: e.title }),
              'aria-selected': e.isChecked,
              'aria-disabled': e.isDisabled,
              'data-uppy-super-focusable': !0,
            },
            e.itemIconEl,
            e.showTitles && e.title
          )
        );
      };
    },
    2342: function(e, t, n) {
      var r = n(573).h,
        i = function(e) {
          return 'folder' === e.type
            ? e.isChecked
              ? e.i18n('unselectAllFilesFromFolderNamed', { name: e.title })
              : e.i18n('selectAllFilesFromFolderNamed', { name: e.title })
            : e.isChecked
            ? e.i18n('unselectFileNamed', { name: e.title })
            : e.i18n('selectFileNamed', { name: e.title });
        };
      e.exports = function(e) {
        return r(
          'li',
          { class: e.className },
          r('button', {
            type: 'button',
            class:
              'uppy-u-reset uppy-ProviderBrowserItem-fakeCheckbox ' +
              (e.isChecked
                ? 'uppy-ProviderBrowserItem-fakeCheckbox--is-checked'
                : ''),
            onClick: e.toggleCheckbox,
            id: e.id,
            role: 'option',
            'aria-label': i(e),
            'aria-selected': e.isChecked,
            'aria-disabled': e.isDisabled,
            'data-uppy-super-focusable': !0,
          }),
          'file' === e.type
            ? r(
                'label',
                {
                  for: e.id,
                  className: 'uppy-u-reset uppy-ProviderBrowserItem-inner',
                },
                e.itemIconEl,
                e.showTitles && e.title
              )
            : r(
                'button',
                {
                  type: 'button',
                  class: 'uppy-u-reset uppy-ProviderBrowserItem-inner',
                  onclick: e.handleFolderClick,
                  'aria-label': e.i18n('openFolderNamed', { name: e.title }),
                },
                e.itemIconEl,
                e.showTitles && e.title
              )
        );
      };
    },
    2343: function(e, t, n) {
      var r = n(573).h;
      e.exports = function(e) {
        return r(
          'div',
          { class: 'uppy-ProviderBrowser-footer' },
          r(
            'button',
            {
              class: 'uppy-u-reset uppy-c-btn uppy-c-btn-primary',
              onclick: e.done,
            },
            e.i18n('selectX', { smart_count: e.selected })
          ),
          r(
            'button',
            {
              class: 'uppy-u-reset uppy-c-btn uppy-c-btn-link',
              onclick: e.cancel,
            },
            e.i18n('cancel')
          )
        );
      };
    },
    2344: function(e, t, n) {
      var r = n(573).h;
      e.exports = function(e) {
        return r(
          'div',
          { class: 'uppy-Provider-loading' },
          r('span', null, e.i18n('loading'))
        );
      };
    },
    2345: function(e, t, n) {
      var r, i;
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var s = n(728).Plugin,
        a = n(1215).Provider,
        l = n(1568),
        u = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            return (
              ((r = e.call(this, t, n) || this).id = r.opts.id || 'Dropbox'),
              a.initPlugin(o(r), n),
              (r.title = r.opts.title || 'Dropbox'),
              (r.icon = function() {
                return u(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    width: '128',
                    height: '128',
                    viewBox: '0 0 128 128',
                  },
                  u('path', {
                    d:
                      'M31.997 11L64 31.825 31.997 52.651 0 31.825 31.997 11zM96 11l32 20.825-32 20.826-32-20.826L96 11zM0 73.476l31.997-20.825L64 73.476 31.997 94.302 0 73.476zm96-20.825l32 20.825-32 20.826-32-20.826 32-20.825zm-64.508 48.254l32.003-20.826 31.997 20.826-31.997 20.825-32.003-20.825z',
                    fill: '#0260FF',
                    'fill-rule': 'nonzero',
                  })
                );
              }),
              (r.provider = new a(t, {
                companionUrl: r.opts.companionUrl,
                companionHeaders:
                  r.opts.companionHeaders || r.opts.serverHeaders,
                storage: r.opts.storage,
                provider: 'dropbox',
                pluginId: r.id,
              })),
              (r.onFirstRender = r.onFirstRender.bind(o(r))),
              (r.render = r.render.bind(o(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.install = function() {
              (this.view = new l(this, { provider: this.provider })),
                this.setPluginState({
                  authenticated: !1,
                  files: [],
                  folders: [],
                  directories: [],
                  activeRow: -1,
                  filterInput: '',
                  isSearchVisible: !1,
                });
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.view.tearDown(), this.unmount();
            }),
            (i.onFirstRender = function() {
              return this.view.getFolder();
            }),
            (i.render = function(e) {
              return this.view.render(e);
            }),
            r
          );
        })(s)),
        (r.VERSION = '1.3.2'),
        i);
    },
    2346: function(e, t, n) {
      var r, i;
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var s = n(728).Plugin,
        a = n(1215).Provider,
        l = n(1568),
        u = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            return (
              ((r = e.call(this, t, n) || this).id = r.opts.id || 'Instagram'),
              a.initPlugin(o(r), n),
              (r.title = r.opts.title || 'Instagram'),
              (r.icon = function() {
                return u(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    fill: '#DE3573',
                    width: '28',
                    height: '28',
                    viewBox: '0 0 512 512',
                  },
                  u('path', {
                    d:
                      'M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z',
                  }),
                  u('path', {
                    d:
                      'M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z',
                  }),
                  u('circle', { cx: '390.476', cy: '121.524', r: '30.23' })
                );
              }),
              (r.provider = new a(t, {
                companionUrl: r.opts.companionUrl,
                companionHeaders:
                  r.opts.companionHeaders || r.opts.serverHeaders,
                storage: r.opts.storage,
                provider: 'instagram',
                authProvider: 'instagram',
                pluginId: r.id,
              })),
              (r.onFirstRender = r.onFirstRender.bind(o(r))),
              (r.render = r.render.bind(o(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.install = function() {
              (this.view = new l(this, {
                provider: this.provider,
                viewType: 'grid',
                showTitles: !1,
                showFilter: !1,
                showBreadcrumbs: !1,
              })),
                this.setPluginState({
                  authenticated: !1,
                  files: [],
                  folders: [],
                  directories: [],
                  activeRow: -1,
                  filterInput: '',
                  isSearchVisible: !1,
                });
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.view.tearDown(), this.unmount();
            }),
            (i.onFirstRender = function() {
              this.view.getFolder('recent');
            }),
            (i.render = function(e) {
              return this.view.render(e);
            }),
            r
          );
        })(s)),
        (r.VERSION = '1.3.2'),
        i);
    },
    2347: function(e, t, n) {
      'use strict';
      var r = n(1770);
      n.d(t, 'a', function() {
        return r;
      });
      n(1780), n(1781), n(1782), n(1783);
    },
    2348: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(2349),
        o = n(1773),
        s = n(2360),
        a = n(2361),
        l = n(2362),
        u = n(2363),
        p = n(12),
        c = n(2364),
        d = n(573).h,
        h = n(2365);
      function f(e) {
        return d(
          h,
          {
            transitionName: 'uppy-transition-slideDownUp',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250,
          },
          e.children
        );
      }
      e.exports = function(e) {
        var t = 0 === e.totalFileCount,
          n = p(
            { 'uppy-Root': e.isTargetDOMEl },
            'uppy-Dashboard',
            { 'Uppy--isTouchDevice': c() },
            { 'uppy-Dashboard--animateOpenClose': e.animateOpenClose },
            { 'uppy-Dashboard--isClosing': e.isClosing },
            { 'uppy-Dashboard--isDraggingOver': e.isDraggingOver },
            { 'uppy-Dashboard--modal': !e.inline },
            { 'uppy-size--md': e.containerWidth > 576 },
            { 'uppy-size--lg': e.containerWidth > 700 },
            { 'uppy-size--xl': e.containerWidth > 900 },
            { 'uppy-Dashboard--isAddFilesPanelVisible': e.showAddFilesPanel },
            {
              'uppy-Dashboard--isInnerWrapVisible':
                e.areInsidesReadyToBeVisible,
            }
          );
        return d(
          'div',
          {
            class: n,
            'aria-hidden': e.inline ? 'false' : e.isHidden,
            'aria-label': e.inline
              ? e.i18n('dashboardTitle')
              : e.i18n('dashboardWindowTitle'),
            onpaste: e.handlePaste,
            onDragOver: e.handleDragOver,
            onDragLeave: e.handleDragLeave,
            onDrop: e.handleDrop,
          },
          d('div', {
            class: 'uppy-Dashboard-overlay',
            tabindex: -1,
            onclick: e.handleClickOutside,
          }),
          d(
            'div',
            {
              class: 'uppy-Dashboard-inner',
              'aria-modal': !e.inline && 'true',
              role: !e.inline && 'dialog',
              style: {
                width: e.inline && e.width ? e.width : '',
                height: e.inline && e.height ? e.height : '',
              },
            },
            e.inline
              ? null
              : d(
                  'button',
                  {
                    class: 'uppy-u-reset uppy-Dashboard-close',
                    type: 'button',
                    'aria-label': e.i18n('closeModal'),
                    title: e.i18n('closeModal'),
                    onclick: e.closeModal,
                  },
                  d('span', { 'aria-hidden': 'true' }, '\xd7')
                ),
            d(
              'div',
              { class: 'uppy-Dashboard-innerWrap' },
              d(
                'div',
                { class: 'uppy-Dashboard-dropFilesHereHint' },
                e.i18n('dropHint')
              ),
              !t && e.showSelectedFiles && d(l, e),
              e.showSelectedFiles ? d(t ? o : i, e) : d(o, e),
              d(
                f,
                null,
                e.showAddFilesPanel
                  ? d(s, r({ key: 'AddFilesPanel' }, e))
                  : null
              ),
              d(
                f,
                null,
                e.fileCardFor ? d(u, r({ key: 'FileCard' }, e)) : null
              ),
              d(
                f,
                null,
                e.activePickerPanel
                  ? d(a, r({ key: 'PickerPanelContent' }, e))
                  : null
              ),
              d(
                'div',
                { class: 'uppy-Dashboard-progressindicators' },
                e.progressindicators.map(function(t) {
                  return e.getPlugin(t.id).render(e.state);
                })
              )
            )
          )
        );
      };
    },
    2349: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(2350),
        o = n(12),
        s = n(573).h;
      e.exports = function(e) {
        var t = 0 === e.totalFileCount,
          n = o('uppy-Dashboard-files', { 'uppy-Dashboard-files--noFiles': t }),
          a = {
            id: e.id,
            error: e.error,
            i18n: e.i18n,
            log: e.log,
            info: e.info,
            acquirers: e.acquirers,
            resumableUploads: e.resumableUploads,
            individualCancellation: e.individualCancellation,
            hideRetryButton: e.hideRetryButton,
            hidePauseResumeCancelButtons: e.hidePauseResumeCancelButtons,
            showLinkToFileUploadResult: e.showLinkToFileUploadResult,
            isWide: e.isWide,
            metaFields: e.metaFields,
            retryUpload: e.retryUpload,
            pauseUpload: e.pauseUpload,
            cancelUpload: e.cancelUpload,
            toggleFileCard: e.toggleFileCard,
            removeFile: e.removeFile,
          };
        return s(
          'ul',
          { class: n, tabindex: '-1' },
          Object.keys(e.files).map(function(t) {
            return s(i, r({ key: t }, a, { file: e.files[t] }));
          })
        );
      };
    },
    2350: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(573).h,
        o = n(12),
        s = n(2351),
        a = n(2353),
        l = n(2354),
        u = n(2356),
        p = n(2358);
      e.exports = s(function(e) {
        var t = e.file,
          n = t.progress.preprocess || t.progress.postprocess,
          s = t.progress.uploadComplete && !n && !t.error,
          c = t.progress.uploadStarted || n,
          d = (t.progress.uploadStarted && !t.progress.uploadComplete) || n,
          h = t.isPaused || !1,
          f = t.error || !1,
          g = e.individualCancellation ? !s : !d && !s,
          v = o(
            'uppy-u-reset',
            'uppy-DashboardItem',
            { 'is-inprogress': d },
            { 'is-processing': n },
            { 'is-complete': s },
            { 'is-paused': h },
            { 'is-error': !!f },
            { 'is-resumable': e.resumableUploads },
            { 'is-noIndividualCancellation': !e.individualCancellation }
          );
        return i(
          'li',
          { class: v, id: 'uppy_' + t.id },
          i(
            'div',
            { class: 'uppy-DashboardItem-preview' },
            i(a, {
              file: t,
              showLinkToFileUploadResult: e.showLinkToFileUploadResult,
            }),
            i(l, r({}, e, { file: t, error: f, isUploaded: s }))
          ),
          i(
            'div',
            { class: 'uppy-DashboardItem-fileInfoAndButtons' },
            i(u, {
              file: t,
              id: e.id,
              acquirers: e.acquirers,
              containerWidth: e.containerWidth,
              i18n: e.i18n,
            }),
            i(p, {
              file: t,
              metaFields: e.metaFields,
              showLinkToFileUploadResult: e.showLinkToFileUploadResult,
              showRemoveButton: g,
              uploadInProgressOrComplete: c,
              removeFile: e.removeFile,
              toggleFileCard: e.toggleFileCard,
              i18n: e.i18n,
              log: e.log,
              info: e.info,
            })
          )
        );
      });
    },
    2351: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(2352),
        o = n(573),
        s = o.h,
        a = o.Component;
      e.exports = function(e) {
        return (function(t) {
          var n, o;
          function a() {
            return t.apply(this, arguments) || this;
          }
          (o = t),
            ((n = a).prototype = Object.create(o.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = o);
          var l = a.prototype;
          return (
            (l.shouldComponentUpdate = function(e) {
              return !i(this.props, e);
            }),
            (l.render = function() {
              var t = r({}, this.props);
              return s(e, t);
            }),
            a
          );
        })(a);
      };
    },
    2352: function(e, t) {
      e.exports = function(e, t) {
        if (e === t) return !0;
        for (var n in e) if (!(n in t)) return !1;
        for (var n in t) if (e[n] !== t[n]) return !1;
        return !0;
      };
    },
    2353: function(e, t, n) {
      var r = n(573).h,
        i = n(1772),
        o = n(1569);
      e.exports = function(e) {
        return r(
          'div',
          {
            class: 'uppy-DashboardItem-previewInnerWrap',
            style: { backgroundColor: o(e.file.type).color },
          },
          e.showLinkToFileUploadResult &&
            e.file.uploadURL &&
            r('a', {
              class: 'uppy-DashboardItem-previewLink',
              href: e.file.uploadURL,
              rel: 'noreferrer noopener',
              target: '_blank',
              'aria-label': e.file.meta.name,
            }),
          r(i, { file: e.file })
        );
      };
    },
    2354: function(e, t, n) {
      var r = n(573).h,
        i = n(960).iconRetry,
        o = n(2355);
      function s(e) {
        return e.isUploaded
          ? e.i18n('uploadComplete')
          : e.error
          ? e.i18n('retryUpload')
          : e.resumableUploads
          ? e.file.isPaused
            ? e.i18n('resumeUpload')
            : e.i18n('pauseUpload')
          : e.individualCancellation
          ? e.i18n('cancelUpload')
          : '';
      }
      e.exports = function(e) {
        return e.hideRetryButton && e.error
          ? r('div', { class: 'uppy-DashboardItem-progress' })
          : e.isUploaded || (e.hidePauseResumeCancelButtons && !e.error)
          ? r(
              'div',
              { class: 'uppy-DashboardItem-progress' },
              r(
                'div',
                { class: 'uppy-DashboardItem-progressIndicator' },
                r(o, {
                  progress: e.file.progress.percentage,
                  hidePauseResumeCancelButtons: e.hidePauseResumeCancelButtons,
                })
              )
            )
          : r(
              'div',
              { class: 'uppy-DashboardItem-progress' },
              r(
                'button',
                {
                  class: 'uppy-u-reset uppy-DashboardItem-progressIndicator',
                  type: 'button',
                  'aria-label': s(e),
                  title: s(e),
                  onclick: function() {
                    return (function(e) {
                      e.isUploaded ||
                        (!e.error || e.hideRetryButton
                          ? e.hidePauseResumeCancelButtons ||
                            (e.resumableUploads
                              ? e.pauseUpload(e.file.id)
                              : e.individualCancellation &&
                                e.cancelUpload(e.file.id))
                          : e.retryUpload(e.file.id));
                    })(e);
                  },
                },
                e.error
                  ? e.hideRetryButton
                    ? null
                    : i()
                  : r(o, {
                      progress: e.file.progress.percentage,
                      hidePauseResumeCancelButtons:
                        e.hidePauseResumeCancelButtons,
                    })
              )
            );
      };
    },
    2355: function(e, t, n) {
      var r = n(573).h,
        i = 2 * Math.PI * 15;
      e.exports = function(e) {
        return r(
          'svg',
          {
            'aria-hidden': 'true',
            focusable: 'false',
            width: '70',
            height: '70',
            viewBox: '0 0 36 36',
            class: 'UppyIcon UppyIcon-progressCircle',
          },
          r(
            'g',
            { class: 'progress-group' },
            r('circle', {
              class: 'bg',
              r: '15',
              cx: '18',
              cy: '18',
              'stroke-width': '2',
              fill: 'none',
            }),
            r('circle', {
              class: 'progress',
              r: '15',
              cx: '18',
              cy: '18',
              transform: 'rotate(-90, 18, 18)',
              'stroke-width': '2',
              fill: 'none',
              'stroke-dasharray': i,
              'stroke-dashoffset': i - (i / 100) * e.progress,
            })
          ),
          !e.hidePauseResumeCancelButtons &&
            r(
              'g',
              null,
              r('polygon', {
                class: 'play',
                transform: 'translate(3, 3)',
                points: '12 20 12 10 20 15',
              }),
              r(
                'g',
                { class: 'pause', transform: 'translate(14.5, 13)' },
                r('rect', {
                  x: '0',
                  y: '0',
                  width: '2',
                  height: '10',
                  rx: '0',
                }),
                r('rect', { x: '5', y: '0', width: '2', height: '10', rx: '0' })
              ),
              r('polygon', {
                class: 'cancel',
                transform: 'translate(2, 2)',
                points:
                  '19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12',
              })
            ),
          r('polygon', {
            class: 'check',
            transform: 'translate(2, 3)',
            points:
              '14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634',
          })
        );
      };
    },
    2356: function(e, t, n) {
      var r = n(573).h,
        i = n(1567),
        o = n(2357),
        s = function(e) {
          return (
            e.file.source &&
            e.file.source !== e.id &&
            r(
              'div',
              { class: 'uppy-DashboardItem-sourceIcon' },
              e.acquirers.map(function(t) {
                if (t.id === e.file.source)
                  return (function(e, t) {
                    return r(
                      'span',
                      { title: t.i18n('fileSource', { name: e.name }) },
                      e.icon()
                    );
                  })(t, e);
              })
            )
          );
        };
      e.exports = function(e) {
        return r(
          'div',
          {
            class: 'uppy-DashboardItem-fileInfo',
            'data-uppy-file-source': e.file.source,
          },
          (function(e) {
            var t;
            return (
              (t =
                e.containerWidth <= 352
                  ? 35
                  : e.containerWidth <= 576
                  ? 60
                  : 30),
              r(
                'div',
                { class: 'uppy-DashboardItem-name', title: e.file.meta.name },
                o(e.file.meta.name, t)
              )
            );
          })(e),
          r(
            'div',
            { class: 'uppy-DashboardItem-status' },
            (function(e) {
              return (
                e.file.data.size &&
                r(
                  'div',
                  { class: 'uppy-DashboardItem-statusSize' },
                  i(e.file.data.size)
                )
              );
            })(e),
            s(e)
          )
        );
      };
    },
    2357: function(e, t) {
      e.exports = function(e, t) {
        if (e.length <= t) return e;
        if (t <= '...'.length) return e.substr(0, t);
        var n = t - '...'.length,
          r = Math.ceil(n / 2),
          i = Math.floor(n / 2);
        return e.substr(0, r) + '...' + e.substr(e.length - i);
      };
    },
    2358: function(e, t, n) {
      var r = n(573).h,
        i = n(2359),
        o = n(960),
        s = o.iconPencil,
        a = o.iconCross,
        l = o.iconCopyLink,
        u = function(e) {
          return (
            e.showLinkToFileUploadResult &&
            e.file.uploadURL &&
            r(
              'button',
              {
                class:
                  'uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--copyLink',
                type: 'button',
                'aria-label': e.i18n('copyLink'),
                title: e.i18n('copyLink'),
                onclick: function(t) {
                  return (function(e, t) {
                    return i(
                      t.file.uploadURL,
                      t.i18n('copyLinkToClipboardFallback')
                    )
                      .then(function() {
                        t.log('Link copied to clipboard.'),
                          t.info(
                            t.i18n('copyLinkToClipboardSuccess'),
                            'info',
                            3e3
                          );
                      })
                      .catch(t.log)
                      .then(function() {
                        return e.target.focus({ preventScroll: !0 });
                      });
                  })(t, e);
                },
              },
              l()
            )
          );
        };
      e.exports = function(e) {
        return r(
          'div',
          { className: 'uppy-DashboardItem-actionWrapper' },
          (function(e) {
            return (
              !e.uploadInProgressOrComplete &&
              e.metaFields &&
              e.metaFields.length > 0 &&
              r(
                'button',
                {
                  class:
                    'uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--edit',
                  type: 'button',
                  'aria-label': e.i18n('editFile') + ' ' + e.file.meta.name,
                  title: e.i18n('editFile'),
                  onclick: function(t) {
                    return e.toggleFileCard(e.file.id);
                  },
                },
                s()
              )
            );
          })(e),
          u(e),
          (function(e) {
            return (
              e.showRemoveButton &&
              r(
                'button',
                {
                  class:
                    'uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--remove',
                  type: 'button',
                  'aria-label': e.i18n('removeFile'),
                  title: e.i18n('removeFile'),
                  onclick: function() {
                    return e.removeFile(e.file.id);
                  },
                },
                a()
              )
            );
          })(e)
        );
      };
    },
    2359: function(e, t) {
      e.exports = function(e, t) {
        return (
          (t = t || 'Copy the URL below'),
          new Promise(function(n) {
            var r = document.createElement('textarea');
            r.setAttribute('style', {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '2em',
              height: '2em',
              padding: 0,
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              background: 'transparent',
            }),
              (r.value = e),
              document.body.appendChild(r),
              r.select();
            var i = function() {
              document.body.removeChild(r), window.prompt(t, e), n();
            };
            try {
              return document.execCommand('copy')
                ? (document.body.removeChild(r), n())
                : i();
            } catch (o) {
              return document.body.removeChild(r), i();
            }
          })
        );
      };
    },
    2360: function(e, t, n) {
      var r = n(573).h,
        i = n(1773);
      e.exports = function(e) {
        return r(
          'div',
          {
            class: 'uppy-Dashboard-AddFilesPanel',
            'data-uppy-panelType': 'AddFiles',
            'aria-hidden': e.showAddFilesPanel,
          },
          r(
            'div',
            { class: 'uppy-DashboardContent-bar' },
            r(
              'div',
              {
                class: 'uppy-DashboardContent-title',
                role: 'heading',
                'aria-level': 'h1',
              },
              e.i18n('addingMoreFiles')
            ),
            r(
              'button',
              {
                class: 'uppy-DashboardContent-back',
                type: 'button',
                onclick: function(t) {
                  return e.toggleAddFilesPanel(!1);
                },
              },
              e.i18n('back')
            )
          ),
          r(i, e)
        );
      };
    },
    2361: function(e, t, n) {
      var r = n(573).h,
        i = n(1774);
      e.exports = function(e) {
        return r(
          'div',
          {
            class: 'uppy-DashboardContent-panel',
            role: 'tabpanel',
            'data-uppy-panelType': 'PickerPanel',
            id: 'uppy-DashboardContent-panel--' + e.activePickerPanel.id,
            onDragOver: i,
            onDragLeave: i,
            onDrop: i,
            onPaste: i,
          },
          r(
            'div',
            { class: 'uppy-DashboardContent-bar' },
            r(
              'div',
              {
                class: 'uppy-DashboardContent-title',
                role: 'heading',
                'aria-level': 'h1',
              },
              e.i18n('importFrom', { name: e.activePickerPanel.name })
            ),
            r(
              'button',
              {
                class: 'uppy-DashboardContent-back',
                type: 'button',
                onclick: e.hideAllPanels,
              },
              e.i18n('done')
            )
          ),
          r(
            'div',
            { class: 'uppy-DashboardContent-panelBody' },
            e.getPlugin(e.activePickerPanel.id).render(e.state)
          )
        );
      };
    },
    2362: function(e, t, n) {
      var r = n(573).h,
        i = n(960).iconPlus,
        o = {
          STATE_ERROR: 'error',
          STATE_WAITING: 'waiting',
          STATE_PREPROCESSING: 'preprocessing',
          STATE_UPLOADING: 'uploading',
          STATE_POSTPROCESSING: 'postprocessing',
          STATE_COMPLETE: 'complete',
          STATE_PAUSED: 'paused',
        };
      function s(e) {
        switch (
          (function(e, t, n, r) {
            if ((void 0 === r && (r = {}), e)) return o.STATE_ERROR;
            if (t) return o.STATE_COMPLETE;
            if (n) return o.STATE_PAUSED;
            for (
              var i = o.STATE_WAITING, s = Object.keys(r), a = 0;
              a < s.length;
              a++
            ) {
              var l = r[s[a]].progress;
              if (l.uploadStarted && !l.uploadComplete)
                return o.STATE_UPLOADING;
              l.preprocess &&
                i !== o.STATE_UPLOADING &&
                (i = o.STATE_PREPROCESSING),
                l.postprocess &&
                  i !== o.STATE_UPLOADING &&
                  i !== o.STATE_PREPROCESSING &&
                  (i = o.STATE_POSTPROCESSING);
            }
            return i;
          })(e.isAllErrored, e.isAllComplete, e.isAllPaused, e.files)
        ) {
          case 'uploading':
            return e.i18n('uploadingXFiles', {
              smart_count: e.inProgressNotPausedFiles.length,
            });
          case 'preprocessing':
          case 'postprocessing':
            return e.i18n('processingXFiles', {
              smart_count: e.processingFiles.length,
            });
          case 'paused':
            return e.i18n('uploadPaused');
          case 'waiting':
            return e.i18n('xFilesSelected', { smart_count: e.newFiles.length });
          case 'complete':
            return e.i18n('uploadComplete');
        }
      }
      e.exports = function(e) {
        var t = e.allowNewUpload;
        return (
          t &&
            e.maxNumberOfFiles &&
            (t = e.totalFileCount < e.maxNumberOfFiles),
          r(
            'div',
            { class: 'uppy-DashboardContent-bar' },
            e.isAllComplete
              ? r('div', null)
              : r(
                  'button',
                  {
                    class: 'uppy-DashboardContent-back',
                    type: 'button',
                    onclick: e.cancelAll,
                  },
                  e.i18n('cancel')
                ),
            r(
              'div',
              {
                class: 'uppy-DashboardContent-title',
                role: 'heading',
                'aria-level': 'h1',
              },
              r(s, e)
            ),
            t
              ? r(
                  'button',
                  {
                    class: 'uppy-DashboardContent-addMore',
                    type: 'button',
                    'aria-label': e.i18n('addMoreFiles'),
                    title: e.i18n('addMoreFiles'),
                    onclick: function() {
                      return e.toggleAddFilesPanel(!0);
                    },
                  },
                  i(),
                  r(
                    'span',
                    { class: 'uppy-DashboardContent-addMoreCaption' },
                    e.i18n('addMore')
                  )
                )
              : r('div', null)
          )
        );
      };
    },
    2363: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(573),
        o = i.h,
        s = i.Component,
        a = n(1569),
        l = n(1774),
        u = n(1772),
        p = (function(e) {
          var t, n;
          function i(t) {
            var n;
            ((n = e.call(this, t) || this).saveOnEnter = function(e) {
              if (13 === e.keyCode) {
                e.stopPropagation(), e.preventDefault();
                var t = n.props.files[n.props.fileCardFor];
                n.props.saveFileCard(n.state.formState, t.id);
              }
            }),
              (n.tempStoreMeta = function(e, t) {
                var i;
                n.setState({
                  formState: r(
                    {},
                    n.state.formState,
                    ((i = {}), (i[t] = e.target.value), i)
                  ),
                });
              }),
              (n.handleSave = function() {
                var e = n.props.fileCardFor;
                n.props.saveFileCard(n.state.formState, e);
              }),
              (n.handleCancel = function() {
                n.props.toggleFileCard();
              }),
              (n.renderMetaFields = function() {
                return (n.props.metaFields || []).map(function(e) {
                  var t = 'uppy-Dashboard-FileCard-input-' + e.id;
                  return o(
                    'fieldset',
                    { key: e.id, class: 'uppy-Dashboard-FileCard-fieldset' },
                    o(
                      'label',
                      { class: 'uppy-Dashboard-FileCard-label', for: t },
                      e.name
                    ),
                    o('input', {
                      class:
                        'uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input',
                      id: t,
                      type: 'text',
                      value: n.state.formState[e.id],
                      placeholder: e.placeholder,
                      onkeyup: n.saveOnEnter,
                      onkeydown: n.saveOnEnter,
                      onkeypress: n.saveOnEnter,
                      oninput: function(t) {
                        return n.tempStoreMeta(t, e.id);
                      },
                      'data-uppy-super-focusable': !0,
                    })
                  );
                });
              });
            var i = n.props.files[n.props.fileCardFor],
              s = n.props.metaFields || [],
              a = {};
            return (
              s.forEach(function(e) {
                a[e.id] = i.meta[e.id] || '';
              }),
              (n.state = { formState: a }),
              n
            );
          }
          return (
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (i.prototype.render = function() {
              var e = this.props.files[this.props.fileCardFor];
              return o(
                'div',
                {
                  class: 'uppy-Dashboard-FileCard',
                  'data-uppy-panelType': 'FileCard',
                  onDragOver: l,
                  onDragLeave: l,
                  onDrop: l,
                  onPaste: l,
                },
                o(
                  'div',
                  { class: 'uppy-DashboardContent-bar' },
                  o(
                    'div',
                    {
                      class: 'uppy-DashboardContent-title',
                      role: 'heading',
                      'aria-level': 'h1',
                    },
                    this.props.i18nArray('editing', {
                      file: o(
                        'span',
                        { class: 'uppy-DashboardContent-titleFile' },
                        e.meta ? e.meta.name : e.name
                      ),
                    })
                  ),
                  o(
                    'button',
                    {
                      class: 'uppy-DashboardContent-back',
                      type: 'button',
                      title: this.props.i18n('finishEditingFile'),
                      onclick: this.handleSave,
                    },
                    this.props.i18n('done')
                  )
                ),
                o(
                  'div',
                  { class: 'uppy-Dashboard-FileCard-inner' },
                  o(
                    'div',
                    {
                      class: 'uppy-Dashboard-FileCard-preview',
                      style: { backgroundColor: a(e.type).color },
                    },
                    o(u, { file: e })
                  ),
                  o(
                    'div',
                    { class: 'uppy-Dashboard-FileCard-info' },
                    this.renderMetaFields()
                  ),
                  o(
                    'div',
                    { class: 'uppy-Dashboard-FileCard-actions' },
                    o(
                      'button',
                      {
                        class:
                          'uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn',
                        type: 'button',
                        onclick: this.handleSave,
                      },
                      this.props.i18n('saveChanges')
                    ),
                    o(
                      'button',
                      {
                        class:
                          'uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn',
                        type: 'button',
                        onclick: this.handleCancel,
                      },
                      this.props.i18n('cancel')
                    )
                  )
                )
              );
            }),
            i
          );
        })(s);
      e.exports = p;
    },
    2364: function(e, t) {
      e.exports = function() {
        return 'ontouchstart' in window || !!navigator.maxTouchPoints;
      };
    },
    2365: function(e, t, n) {
      e.exports = (function(e) {
        'use strict';
        function t(e) {
          return e.attributes && e.attributes.key;
        }
        function n(e) {
          return e.base;
        }
        function r(e) {
          return (
            e &&
            e.filter(function(e) {
              return null !== e;
            })
          );
        }
        function i(e, t) {
          for (var n = e.length; n--; ) if (t(e[n])) return !0;
          return !1;
        }
        function o(e, n) {
          return i(e, function(e) {
            return t(e) === n;
          });
        }
        function s(e, n) {
          return o(e, t(n));
        }
        function a(e, n, r) {
          return i(e, function(e) {
            return t(e) === n && e.props[r];
          });
        }
        function l(e, n, r) {
          return a(e, t(n), r);
        }
        var u = ' ',
          p = /[\n\t\r]+/g,
          c = function(e) {
            return (u + e + u).replace(p, u);
          };
        function d(e, t) {
          var n;
          e.classList
            ? (n = e.classList).add.apply(n, t.split(' '))
            : (e.className += ' ' + t);
        }
        function h(e, t) {
          if (((t = t.trim()), e.classList)) {
            var n;
            (n = e.classList).remove.apply(n, t.split(' '));
          } else {
            var r = e.className.trim(),
              i = c(r);
            for (t = u + t + u; i.indexOf(t) >= 0; ) i = i.replace(t, u);
            e.className = i.trim();
          }
        }
        var f = {
            transitionend: {
              transition: 'transitionend',
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'mozTransitionEnd',
              OTransition: 'oTransitionEnd',
              msTransition: 'MSTransitionEnd',
            },
            animationend: {
              animation: 'animationend',
              WebkitAnimation: 'webkitAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              OAnimation: 'oAnimationEnd',
              msAnimation: 'MSAnimationEnd',
            },
          },
          g = [];
        'undefined' !== typeof window &&
          (function() {
            var e = document.createElement('div').style;
            for (var t in ('AnimationEvent' in window ||
              delete f.animationend.animation,
            'TransitionEvent' in window || delete f.transitionend.transition,
            f)) {
              var n = f[t];
              for (var r in n)
                if (r in e) {
                  g.push(n[r]);
                  break;
                }
            }
          })();
        var v = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          m = function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          },
          y = function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' !== typeof t && 'function' !== typeof t)
              ? e
              : t;
          },
          b = (function(e) {
            function t() {
              var r, i;
              v(this, t);
              for (var o = arguments.length, s = Array(o), a = 0; a < o; a++)
                s[a] = arguments[a];
              return (
                (r = i = y(this, e.call.apply(e, [this].concat(s)))),
                (i.flushClassNameQueue = function() {
                  n(i) && d(n(i), i.classNameQueue.join(' ')),
                    (i.classNameQueue.length = 0),
                    (i.timeout = null);
                }),
                y(i, r)
              );
            }
            return (
              m(t, e),
              (t.prototype.transition = function(e, t, r) {
                var i = this,
                  o = n(this),
                  s = this.props.name[e] || this.props.name + '-' + e,
                  a = this.props.name[e + 'Active'] || s + '-active',
                  l = null;
                this.endListener && this.endListener(),
                  (this.endListener = function(e) {
                    (e && e.target !== o) ||
                      (clearTimeout(l),
                      h(o, s),
                      h(o, a),
                      (function(e, t) {
                        g.length &&
                          g.forEach(function(n) {
                            e.removeEventListener(n, t, !1);
                          });
                      })(o, i.endListener),
                      (i.endListener = null),
                      t && t());
                  }),
                  r
                    ? ((l = setTimeout(this.endListener, r)),
                      this.transitionTimeouts.push(l))
                    : (function(e, t) {
                        if (!g.length) return window.setTimeout(t, 0);
                        g.forEach(function(n) {
                          e.addEventListener(n, t, !1);
                        });
                      })(o, this.endListener),
                  d(o, s),
                  this.queueClass(a);
              }),
              (t.prototype.queueClass = function(e) {
                this.classNameQueue.push(e),
                  this.timeout ||
                    (this.timeout = setTimeout(this.flushClassNameQueue, 17));
              }),
              (t.prototype.stop = function() {
                this.timeout &&
                  (clearTimeout(this.timeout),
                  (this.classNameQueue.length = 0),
                  (this.timeout = null)),
                  this.endListener && this.endListener();
              }),
              (t.prototype.componentWillMount = function() {
                (this.classNameQueue = []), (this.transitionTimeouts = []);
              }),
              (t.prototype.componentWillUnmount = function() {
                this.timeout && clearTimeout(this.timeout),
                  this.transitionTimeouts.forEach(function(e) {
                    clearTimeout(e);
                  });
              }),
              (t.prototype.componentWillEnter = function(e) {
                this.props.enter
                  ? this.transition('enter', e, this.props.enterTimeout)
                  : e();
              }),
              (t.prototype.componentWillLeave = function(e) {
                this.props.leave
                  ? this.transition('leave', e, this.props.leaveTimeout)
                  : e();
              }),
              (t.prototype.render = function() {
                return (e = this.props.children) && e[0];
                var e;
              }),
              t
            );
          })(e.Component),
          w = (function(n) {
            function i(r) {
              v(this, i);
              var o = y(this, n.call(this));
              return (
                (o.renderChild = function(n) {
                  var r = o.props,
                    i = r.transitionName,
                    s = r.transitionEnter,
                    a = r.transitionLeave,
                    l = r.transitionEnterTimeout,
                    u = r.transitionLeaveTimeout,
                    p = t(n);
                  return e.h(
                    b,
                    {
                      key: p,
                      ref: function(e) {
                        (o.refs[p] = e) || (n = null);
                      },
                      name: i,
                      enter: s,
                      leave: a,
                      enterTimeout: l,
                      leaveTimeout: u,
                    },
                    n
                  );
                }),
                (o.refs = {}),
                (o.state = { children: (r.children || []).slice() }),
                o
              );
            }
            return (
              m(i, n),
              (i.prototype.shouldComponentUpdate = function(e, t) {
                return t.children !== this.state.children;
              }),
              (i.prototype.componentWillMount = function() {
                (this.currentlyTransitioningKeys = {}),
                  (this.keysToEnter = []),
                  (this.keysToLeave = []);
              }),
              (i.prototype.componentWillReceiveProps = function(n) {
                var i = this,
                  a = n.children,
                  u = n.exclusive,
                  p = n.showProp,
                  c = r(a || []).slice(),
                  d = r(u ? this.props.children : this.state.children),
                  h = (function(e, n) {
                    var r = [],
                      i = {},
                      s = [];
                    return (
                      e.forEach(function(e) {
                        var r = t(e);
                        o(n, r)
                          ? s.length && ((i[r] = s), (s = []))
                          : s.push(e);
                      }),
                      n.forEach(function(e) {
                        var n = t(e);
                        i.hasOwnProperty(n) && (r = r.concat(i[n])), r.push(e);
                      }),
                      r.concat(s)
                    );
                  })(d, c);
                p &&
                  (h = h.map(function(t) {
                    var n;
                    return (
                      !t.props[p] &&
                        l(d, t, p) &&
                        (t = e.cloneElement(t, (((n = {})[p] = !0), n))),
                      t
                    );
                  })),
                  u &&
                    h.forEach(function(e) {
                      return i.stop(t(e));
                    }),
                  this.setState({ children: h }),
                  this.forceUpdate(),
                  c.forEach(function(e) {
                    var t = e.key,
                      n = d && s(d, e);
                    if (p) {
                      if (n) {
                        var r = l(d, e, p),
                          o = e.props[p];
                        r ||
                          !o ||
                          i.currentlyTransitioningKeys[t] ||
                          i.keysToEnter.push(t);
                      }
                    } else n || i.currentlyTransitioningKeys[t] || i.keysToEnter.push(t);
                  }),
                  d.forEach(function(e) {
                    var t = e.key,
                      n = c && s(c, e);
                    if (p) {
                      if (n) {
                        var r = l(c, e, p),
                          o = e.props[p];
                        r ||
                          !o ||
                          i.currentlyTransitioningKeys[t] ||
                          i.keysToLeave.push(t);
                      }
                    } else n || i.currentlyTransitioningKeys[t] || i.keysToLeave.push(t);
                  });
              }),
              (i.prototype.performEnter = function(e) {
                var t = this;
                this.currentlyTransitioningKeys[e] = !0;
                var n = this.refs[e];
                n.componentWillEnter
                  ? n.componentWillEnter(function() {
                      return t._handleDoneEntering(e);
                    })
                  : this._handleDoneEntering(e);
              }),
              (i.prototype._handleDoneEntering = function(e) {
                delete this.currentlyTransitioningKeys[e];
                var t = r(this.props.children),
                  n = this.props.showProp;
                !t || (!n && !o(t, e)) || (n && !a(t, e, n))
                  ? this.performLeave(e)
                  : this.setState({ children: t });
              }),
              (i.prototype.stop = function(e) {
                delete this.currentlyTransitioningKeys[e];
                var t = this.refs[e];
                t && t.stop();
              }),
              (i.prototype.performLeave = function(e) {
                var t = this;
                this.currentlyTransitioningKeys[e] = !0;
                var n = this.refs[e];
                n && n.componentWillLeave
                  ? n.componentWillLeave(function() {
                      return t._handleDoneLeaving(e);
                    })
                  : this._handleDoneLeaving(e);
              }),
              (i.prototype._handleDoneLeaving = function(e) {
                delete this.currentlyTransitioningKeys[e];
                var t = this.props.showProp,
                  n = r(this.props.children);
                t && n && a(n, e, t)
                  ? this.performEnter(e)
                  : !t && n && o(n, e)
                  ? this.performEnter(e)
                  : this.setState({ children: n });
              }),
              (i.prototype.componentDidUpdate = function() {
                var e = this,
                  t = this.keysToEnter,
                  n = this.keysToLeave;
                (this.keysToEnter = []),
                  t.forEach(function(t) {
                    return e.performEnter(t);
                  }),
                  (this.keysToLeave = []),
                  n.forEach(function(t) {
                    return e.performLeave(t);
                  });
              }),
              (i.prototype.render = function(t, n) {
                var i = t.component,
                  o =
                    (t.transitionName,
                    t.transitionEnter,
                    t.transitionLeave,
                    t.transitionEnterTimeout,
                    t.transitionLeaveTimeout,
                    t.children,
                    (function(e, t) {
                      var n = {};
                      for (var r in e)
                        t.indexOf(r) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r]));
                      return n;
                    })(t, [
                      'component',
                      'transitionName',
                      'transitionEnter',
                      'transitionLeave',
                      'transitionEnterTimeout',
                      'transitionLeaveTimeout',
                      'children',
                    ])),
                  s = n.children;
                return e.h(i, o, r(s).map(this.renderChild));
              }),
              i
            );
          })(e.Component);
        return (
          (w.defaultProps = {
            component: 'span',
            transitionEnter: !0,
            transitionLeave: !0,
          }),
          w
        );
      })(n(573));
    },
    2366: function(e, t, n) {
      function r() {
        return (r =
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
      var i = n(826),
        o = n(12),
        s = n(1776),
        a = n(1567),
        l = n(2367),
        u = n(573).h;
      e.exports = function(e) {
        var t,
          n,
          i = (e = e || {}),
          a = i.newFiles,
          l = i.allowNewUpload,
          f = i.isUploadInProgress,
          v = i.isAllPaused,
          m = i.resumableUploads,
          y = i.error,
          S = i.hideUploadButton,
          _ = i.hidePauseResumeButton,
          C = i.hideCancelButton,
          F = i.hideRetryButton,
          T = e.uploadState,
          E = e.totalProgress;
        if (T === s.STATE_PREPROCESSING || T === s.STATE_POSTPROCESSING) {
          var O = (function(e) {
            var t = [];
            Object.keys(e).forEach(function(n) {
              var r = e[n].progress;
              r.preprocess && t.push(r.preprocess),
                r.postprocess && t.push(r.postprocess);
            });
            var n = t[0];
            return {
              mode: n.mode,
              message: n.message,
              value: t
                .filter(function(e) {
                  return 'determinate' === e.mode;
                })
                .reduce(function(e, t, n, r) {
                  return e + t.value / r.length;
                }, 0),
            };
          })(e.files);
          'determinate' === (t = O.mode) && (E = 100 * O.value), (n = g(O));
        } else
          T === s.STATE_COMPLETE
            ? (n = w(e))
            : T === s.STATE_UPLOADING
            ? (e.supportsUploadProgress || ((t = 'indeterminate'), (E = null)),
              (n = b(e)))
            : T === s.STATE_ERROR && ((E = void 0), (n = P(e)));
        var x = 'number' === typeof E ? E : 100,
          U =
            (T === s.STATE_WAITING && e.hideUploadButton) ||
            (T === s.STATE_WAITING && !e.newFiles > 0) ||
            (T === s.STATE_COMPLETE && e.hideAfterFinish),
          D = !y && a && !f && !v && l && !S,
          A = !C && T !== s.STATE_WAITING && T !== s.STATE_COMPLETE,
          I =
            m &&
            !_ &&
            T !== s.STATE_WAITING &&
            T !== s.STATE_PREPROCESSING &&
            T !== s.STATE_POSTPROCESSING &&
            T !== s.STATE_COMPLETE,
          R = y && !F,
          k =
            'uppy-StatusBar-progress\n                           ' +
            (t ? 'is-' + t : ''),
          B = o({ 'uppy-Root': e.isTargetDOMEl }, 'uppy-StatusBar', 'is-' + T);
        return u(
          'div',
          { class: B, 'aria-hidden': U },
          u('div', {
            class: k,
            style: { width: x + '%' },
            role: 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            'aria-valuenow': E,
          }),
          n,
          u(
            'div',
            { class: 'uppy-StatusBar-actions' },
            D ? u(p, r({}, e, { uploadState: T })) : null,
            R ? u(c, e) : null,
            I ? u(h, e) : null,
            A ? u(d, e) : null
          )
        );
      };
      var p = function(e) {
          var t = o(
            'uppy-u-reset',
            'uppy-c-btn',
            'uppy-StatusBar-actionBtn',
            'uppy-StatusBar-actionBtn--upload',
            { 'uppy-c-btn-primary': e.uploadState === s.STATE_WAITING }
          );
          return u(
            'button',
            {
              type: 'button',
              class: t,
              'aria-label': e.i18n('uploadXFiles', { smart_count: e.newFiles }),
              onclick: e.startUpload,
              'data-uppy-super-focusable': !0,
            },
            e.newFiles && e.isUploadStarted
              ? e.i18n('uploadXNewFiles', { smart_count: e.newFiles })
              : e.i18n('uploadXFiles', { smart_count: e.newFiles })
          );
        },
        c = function(e) {
          return u(
            'button',
            {
              type: 'button',
              class:
                'uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry',
              'aria-label': e.i18n('retryUpload'),
              onclick: e.retryAll,
              'data-uppy-super-focusable': !0,
            },
            u(
              'svg',
              {
                'aria-hidden': 'true',
                focusable: 'false',
                class: 'UppyIcon',
                width: '8',
                height: '10',
                viewBox: '0 0 8 10',
              },
              u('path', {
                d:
                  'M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z',
              })
            ),
            e.i18n('retry')
          );
        },
        d = function(e) {
          return u(
            'button',
            {
              type: 'button',
              class: 'uppy-u-reset uppy-StatusBar-actionCircleBtn',
              title: e.i18n('cancel'),
              'aria-label': e.i18n('cancel'),
              onclick: e.cancelAll,
              'data-uppy-super-focusable': !0,
            },
            u(
              'svg',
              {
                'aria-hidden': 'true',
                focusable: 'false',
                class: 'UppyIcon',
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
              },
              u(
                'g',
                { fill: 'none', 'fill-rule': 'evenodd' },
                u('circle', { fill: '#888', cx: '8', cy: '8', r: '8' }),
                u('path', {
                  fill: '#FFF',
                  d:
                    'M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z',
                })
              )
            )
          );
        },
        h = function(e) {
          var t = e.isAllPaused,
            n = e.i18n,
            r = n(t ? 'resume' : 'pause');
          return u(
            'button',
            {
              title: r,
              'aria-label': r,
              class: 'uppy-u-reset uppy-StatusBar-actionCircleBtn',
              type: 'button',
              onclick: function() {
                return (function(e) {
                  if (!e.isAllComplete)
                    return e.resumableUploads
                      ? e.isAllPaused
                        ? e.resumeAll()
                        : e.pauseAll()
                      : e.cancelAll();
                })(e);
              },
              'data-uppy-super-focusable': !0,
            },
            u(
              'svg',
              {
                'aria-hidden': 'true',
                focusable: 'false',
                class: 'UppyIcon',
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
              },
              u(
                'g',
                { fill: 'none', 'fill-rule': 'evenodd' },
                u('circle', { fill: '#888', cx: '8', cy: '8', r: '8' }),
                u(
                  'path',
                  t
                    ? { fill: '#FFF', d: 'M6 4.25L11.5 8 6 11.75z' }
                    : { d: 'M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z', fill: '#FFF' }
                )
              )
            )
          );
        },
        f = function() {
          return u(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'uppy-StatusBar-spinner',
              width: '14',
              height: '14',
            },
            u('path', {
              d:
                'M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0',
              'fill-rule': 'evenodd',
            })
          );
        },
        g = function(e) {
          var t = Math.round(100 * e.value);
          return u(
            'div',
            { class: 'uppy-StatusBar-content' },
            u(f, null),
            'determinate' === e.mode ? t + '% \xb7 ' : '',
            e.message
          );
        },
        v = function(e) {
          return u(
            'div',
            { class: 'uppy-StatusBar-statusSecondary' },
            e.i18n('filesUploadedOfTotal', {
              complete: e.complete,
              smart_count: e.numUploads,
            })
          );
        },
        m = function(e) {
          var t = o(
            'uppy-u-reset',
            'uppy-c-btn',
            'uppy-StatusBar-actionBtn',
            'uppy-StatusBar-actionBtn--uploadNewlyAdded'
          );
          return u(
            'div',
            { class: 'uppy-StatusBar-statusSecondary' },
            u(
              'div',
              { class: 'uppy-StatusBar-statusSecondaryHint' },
              e.i18n('xMoreFilesAdded', { smart_count: e.newFiles })
            ),
            u(
              'button',
              {
                type: 'button',
                class: t,
                'aria-label': e.i18n('uploadXFiles', {
                  smart_count: e.newFiles,
                }),
                onclick: e.startUpload,
              },
              e.i18n('upload')
            )
          );
        },
        y = i(
          function(e) {
            var t = e.numUploads > 1;
            return u(
              'div',
              { class: 'uppy-StatusBar-statusSecondary' },
              t &&
                e.i18n('filesUploadedOfTotal', {
                  complete: e.complete,
                  smart_count: e.numUploads,
                }),
              u(
                'span',
                { class: 'uppy-StatusBar-additionalInfo' },
                t && ' \xb7 ',
                e.i18n('dataUploadedOfTotal', {
                  complete: a(e.totalUploadedSize),
                  total: a(e.totalSize),
                }),
                ' \xb7 ',
                e.i18n('xTimeLeft', { time: l(e.totalETA) })
              )
            );
          },
          500,
          { leading: !0, trailing: !0 }
        ),
        b = function(e) {
          if (!e.isUploadStarted || e.isAllComplete) return null;
          var t = e.isAllPaused ? e.i18n('paused') : e.i18n('uploading'),
            n = e.newFiles && e.isUploadStarted;
          return u(
            'div',
            { class: 'uppy-StatusBar-content', 'aria-label': t, title: t },
            e.isAllPaused ? null : u(f, null),
            u(
              'div',
              { class: 'uppy-StatusBar-status' },
              u(
                'div',
                { class: 'uppy-StatusBar-statusPrimary' },
                e.supportsUploadProgress ? t + ': ' + e.totalProgress + '%' : t
              ),
              e.isAllPaused || n || !e.showProgressDetails
                ? null
                : e.supportsUploadProgress
                ? u(y, e)
                : u(v, e),
              n ? u(m, e) : null
            )
          );
        },
        w = function(e) {
          e.totalProgress;
          var t = e.i18n;
          return u(
            'div',
            {
              class: 'uppy-StatusBar-content',
              role: 'status',
              title: t('complete'),
            },
            u(
              'div',
              { class: 'uppy-StatusBar-status' },
              u(
                'div',
                { class: 'uppy-StatusBar-statusPrimary' },
                u(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    class: 'uppy-StatusBar-statusIndicator UppyIcon',
                    width: '15',
                    height: '11',
                    viewBox: '0 0 15 11',
                  },
                  u('path', {
                    d:
                      'M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z',
                  })
                ),
                t('complete')
              )
            )
          );
        },
        P = function(e) {
          var t = e.error,
            n = (e.retryAll, e.hideRetryButton, e.i18n);
          return u(
            'div',
            {
              class: 'uppy-StatusBar-content',
              role: 'alert',
              title: n('uploadFailed'),
            },
            u(
              'div',
              { class: 'uppy-StatusBar-status' },
              u(
                'div',
                { class: 'uppy-StatusBar-statusPrimary' },
                u(
                  'svg',
                  {
                    'aria-hidden': 'true',
                    focusable: 'false',
                    class: 'uppy-StatusBar-statusIndicator UppyIcon',
                    width: '11',
                    height: '11',
                    viewBox: '0 0 11 11',
                  },
                  u('path', {
                    d:
                      'M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z',
                  })
                ),
                n('uploadFailed')
              )
            ),
            u(
              'span',
              {
                class: 'uppy-StatusBar-details',
                'aria-label': t,
                'data-microtip-position': 'top-right',
                'data-microtip-size': 'medium',
                role: 'tooltip',
              },
              '?'
            )
          );
        };
    },
    2367: function(e, t, n) {
      var r = n(2368);
      e.exports = function(e) {
        var t = r(e),
          n = t.hours ? t.hours + 'h ' : '',
          i = t.hours ? ('0' + t.minutes).substr(-2) : t.minutes,
          o = i ? i + 'm' : '',
          s = i ? ('0' + t.seconds).substr(-2) : t.seconds;
        return '' + n + o + (t.hours ? '' : i ? ' ' + s + 's' : s + 's');
      };
    },
    2368: function(e, t) {
      e.exports = function(e) {
        return {
          hours: Math.floor(e / 3600) % 24,
          minutes: Math.floor(e / 60) % 60,
          seconds: Math.floor(e % 60),
        };
      };
    },
    2369: function(e, t) {
      e.exports = function(e) {
        if (!e.bytesUploaded) return 0;
        var t = new Date() - e.uploadStarted;
        return e.bytesUploaded / (t / 1e3);
      };
    },
    2370: function(e, t) {
      e.exports = function(e) {
        return e.bytesTotal - e.bytesUploaded;
      };
    },
    2371: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      var s = n(728).Plugin,
        a = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).type = 'progressindicator'),
              (r.id = r.opts.id || 'Informer'),
              (r.title = 'Informer');
            return (
              (r.opts = o({}, {}, n)),
              (r.render = r.render.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              )),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.render = function(e) {
              var t = e.info,
                n = t.isHidden,
                r = t.message,
                i = t.details;
              return a(
                'div',
                { class: 'uppy uppy-Informer', 'aria-hidden': n },
                a(
                  'p',
                  { role: 'alert' },
                  r,
                  ' ',
                  i &&
                    a(
                      'span',
                      {
                        'aria-label': i,
                        'data-microtip-position': 'top-left',
                        'data-microtip-size': 'medium',
                        role: 'tooltip',
                      },
                      '?'
                    )
                )
              );
            }),
            (i.install = function() {
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            r
          );
        })(s)),
        (r.VERSION = '1.3.1'),
        i);
    },
    2372: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      var s = n(2373),
        a = n(728).Plugin,
        l = n(1125),
        u = n(2374),
        p = n(2375),
        c = n(1769),
        d = n(2376);
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).onFileAdded = function(e) {
              e.preview || r.addToQueue(e);
            }),
              (r.onFileRemoved = function(e) {
                var t = r.queue.indexOf(e);
                -1 !== t && r.queue.splice(t, 1),
                  e.preview && p(e.preview) && URL.revokeObjectURL(e.preview);
              }),
              (r.onRestored = function() {
                var e = r.uppy.getState().files;
                Object.keys(e).forEach(function(e) {
                  var t = r.uppy.getFile(e);
                  t.isRestored &&
                    ((t.preview && !p(t.preview)) || r.addToQueue(t));
                });
              }),
              (r.waitUntilAllProcessed = function(e) {
                return (
                  e.forEach(function(e) {
                    var t = r.uppy.getFile(e);
                    r.uppy.emit('preprocess-progress', t, {
                      mode: 'indeterminate',
                      message: r.i18n('generatingThumbnails'),
                    });
                  }),
                  new Promise(function(e, t) {
                    r.queueProcessing
                      ? r.uppy.once('thumbnail:all-generated', function() {
                          e();
                        })
                      : e();
                  })
                );
              }),
              (r.type = 'modifier'),
              (r.id = r.opts.id || 'ThumbnailGenerator'),
              (r.title = 'Thumbnail Generator'),
              (r.queue = []),
              (r.queueProcessing = !1),
              (r.defaultThumbnailDimension = 200),
              (r.defaultLocale = {
                strings: { generatingThumbnails: 'Generating thumbnails...' },
              });
            return (
              (r.opts = o(
                {},
                {
                  thumbnailWidth: null,
                  thumbnailHeight: null,
                  waitForThumbnailsBeforeUpload: !1,
                },
                {},
                n
              )),
              (r.translator = new l([
                r.defaultLocale,
                r.uppy.locale,
                r.opts.locale,
              ])),
              (r.i18n = r.translator.translate.bind(r.translator)),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.createThumbnail = function(e, t, n) {
              var r = this,
                i = URL.createObjectURL(e.data),
                o = new Promise(function(e, t) {
                  var n = new Image();
                  (n.src = i),
                    n.addEventListener('load', function() {
                      URL.revokeObjectURL(i), e(n);
                    }),
                    n.addEventListener('error', function(e) {
                      URL.revokeObjectURL(i),
                        t(e.error || new Error('Could not create thumbnail'));
                    });
                });
              return Promise.all([o, this.getOrientation(e)])
                .then(function(e) {
                  var i = e[0],
                    o = e[1],
                    s = r.getProportionalDimensions(i, t, n, o.rotation),
                    a = r.rotateImage(i, o),
                    l = r.resizeImage(a, s.width, s.height);
                  return r.canvasToBlob(l, 'image/png');
                })
                .then(function(e) {
                  return URL.createObjectURL(e);
                });
            }),
            (i.getProportionalDimensions = function(e, t, n, r) {
              var i = e.width / e.height;
              return (
                (90 !== r && 270 !== r) || (i = e.height / e.width),
                null != t
                  ? { width: t, height: Math.round(t / i) }
                  : null != n
                  ? { width: Math.round(n * i), height: n }
                  : {
                      width: this.defaultThumbnailDimension,
                      height: Math.round(this.defaultThumbnailDimension / i),
                    }
              );
            }),
            (i.getOrientation = function(e) {
              var t = this;
              return new Promise(function(n) {
                var r = t.uppy;
                s.getData(e.data, function() {
                  var t = s.getAllTags(this);
                  delete t.thumbnail, r.setFileMeta(e.id, { exifdata: t });
                  var i = s.getTag(this, 'Orientation') || 1;
                  n(d[i]);
                });
              });
            }),
            (i.protect = function(e) {
              var t = e.width / e.height,
                n = Math.floor(Math.sqrt(5e6 * t)),
                r = Math.floor(5e6 / Math.sqrt(5e6 * t));
              if (
                (n > 4096 && ((n = 4096), (r = Math.round(n / t))),
                r > 4096 && ((r = 4096), (n = Math.round(t * r))),
                e.width > n)
              ) {
                var i = document.createElement('canvas');
                (i.width = n),
                  (i.height = r),
                  i.getContext('2d').drawImage(e, 0, 0, n, r),
                  (e = i);
              }
              return e;
            }),
            (i.resizeImage = function(e, t, n) {
              e = this.protect(e);
              var r = Math.ceil(Math.log(e.width / t) * Math.LOG2E);
              r < 1 && (r = 1);
              for (
                var i = t * Math.pow(2, r - 1), o = n * Math.pow(2, r - 1);
                r--;

              ) {
                var s = document.createElement('canvas');
                (s.width = i),
                  (s.height = o),
                  s.getContext('2d').drawImage(e, 0, 0, i, o),
                  (e = s),
                  (i = Math.round(i / 2)),
                  (o = Math.round(o / 2));
              }
              return e;
            }),
            (i.rotateImage = function(e, t) {
              var n = e.width,
                r = e.height;
              (90 !== t.rotation && 270 !== t.rotation) ||
                ((n = e.height), (r = e.width));
              var i = document.createElement('canvas');
              (i.width = n), (i.height = r);
              var o = i.getContext('2d');
              return (
                o.translate(n / 2, r / 2),
                o.rotate((t.rotation * Math.PI) / 180),
                o.scale(t.xScale, t.yScale),
                o.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                i
              );
            }),
            (i.canvasToBlob = function(e, t, n) {
              try {
                e.getContext('2d').getImageData(0, 0, 1, 1);
              } catch (r) {
                if (18 === r.code)
                  return Promise.reject(
                    new Error(
                      'cannot read image, probably an svg with external resources'
                    )
                  );
              }
              return e.toBlob
                ? new Promise(function(r) {
                    e.toBlob(r, t, n);
                  }).then(function(e) {
                    if (null === e)
                      throw new Error(
                        'cannot read image, probably an svg with external resources'
                      );
                    return e;
                  })
                : Promise.resolve()
                    .then(function() {
                      return u(e.toDataURL(t, n), {});
                    })
                    .then(function(e) {
                      if (null === e)
                        throw new Error(
                          'could not extract blob, probably an old browser'
                        );
                      return e;
                    });
            }),
            (i.setPreviewURL = function(e, t) {
              this.uppy.setFileState(e, { preview: t });
            }),
            (i.addToQueue = function(e) {
              this.queue.push(e),
                !1 === this.queueProcessing && this.processQueue();
            }),
            (i.processQueue = function() {
              var e = this;
              if (((this.queueProcessing = !0), this.queue.length > 0)) {
                var t = this.queue.shift();
                return this.requestThumbnail(t)
                  .catch(function(e) {})
                  .then(function() {
                    return e.processQueue();
                  });
              }
              (this.queueProcessing = !1),
                this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue'),
                this.uppy.emit('thumbnail:all-generated');
            }),
            (i.requestThumbnail = function(e) {
              var t = this;
              return c(e.type) && !e.isRemote
                ? this.createThumbnail(
                    e,
                    this.opts.thumbnailWidth,
                    this.opts.thumbnailHeight
                  )
                    .then(function(n) {
                      t.setPreviewURL(e.id, n),
                        t.uppy.log(
                          '[ThumbnailGenerator] Generated thumbnail for ' + e.id
                        ),
                        t.uppy.emit(
                          'thumbnail:generated',
                          t.uppy.getFile(e.id),
                          n
                        );
                    })
                    .catch(function(n) {
                      t.uppy.log(
                        '[ThumbnailGenerator] Failed thumbnail for ' +
                          e.id +
                          ':',
                        'warning'
                      ),
                        t.uppy.log(n, 'warning'),
                        t.uppy.emit('thumbnail:error', t.uppy.getFile(e.id), n);
                    })
                : Promise.resolve();
            }),
            (i.install = function() {
              this.uppy.on('file-added', this.onFileAdded),
                this.uppy.on('file-removed', this.onFileRemoved),
                this.uppy.on('restored', this.onRestored),
                this.opts.waitForThumbnailsBeforeUpload &&
                  this.uppy.addPreProcessor(this.waitUntilAllProcessed);
            }),
            (i.uninstall = function() {
              this.uppy.off('file-added', this.onFileAdded),
                this.uppy.off('file-removed', this.onFileRemoved),
                this.uppy.off('restored', this.onRestored),
                this.opts.waitForThumbnailsBeforeUpload &&
                  this.uppy.removePreProcessor(this.waitUntilAllProcessed);
            }),
            r
          );
        })(a)),
        (r.VERSION = '1.4.0'),
        i);
    },
    2373: function(e, t, r) {
      var i;
      (function() {
        var r = !1,
          o = function e(t) {
            return t instanceof e
              ? t
              : this instanceof e
              ? void (this.EXIFwrapped = t)
              : new e(t);
          };
        e.exports && (t = e.exports = o), (t.EXIF = o);
        var s = (o.Tags = {
            36864: 'ExifVersion',
            40960: 'FlashpixVersion',
            40961: 'ColorSpace',
            40962: 'PixelXDimension',
            40963: 'PixelYDimension',
            37121: 'ComponentsConfiguration',
            37122: 'CompressedBitsPerPixel',
            37500: 'MakerNote',
            37510: 'UserComment',
            40964: 'RelatedSoundFile',
            36867: 'DateTimeOriginal',
            36868: 'DateTimeDigitized',
            37520: 'SubsecTime',
            37521: 'SubsecTimeOriginal',
            37522: 'SubsecTimeDigitized',
            33434: 'ExposureTime',
            33437: 'FNumber',
            34850: 'ExposureProgram',
            34852: 'SpectralSensitivity',
            34855: 'ISOSpeedRatings',
            34856: 'OECF',
            37377: 'ShutterSpeedValue',
            37378: 'ApertureValue',
            37379: 'BrightnessValue',
            37380: 'ExposureBias',
            37381: 'MaxApertureValue',
            37382: 'SubjectDistance',
            37383: 'MeteringMode',
            37384: 'LightSource',
            37385: 'Flash',
            37396: 'SubjectArea',
            37386: 'FocalLength',
            41483: 'FlashEnergy',
            41484: 'SpatialFrequencyResponse',
            41486: 'FocalPlaneXResolution',
            41487: 'FocalPlaneYResolution',
            41488: 'FocalPlaneResolutionUnit',
            41492: 'SubjectLocation',
            41493: 'ExposureIndex',
            41495: 'SensingMethod',
            41728: 'FileSource',
            41729: 'SceneType',
            41730: 'CFAPattern',
            41985: 'CustomRendered',
            41986: 'ExposureMode',
            41987: 'WhiteBalance',
            41988: 'DigitalZoomRation',
            41989: 'FocalLengthIn35mmFilm',
            41990: 'SceneCaptureType',
            41991: 'GainControl',
            41992: 'Contrast',
            41993: 'Saturation',
            41994: 'Sharpness',
            41995: 'DeviceSettingDescription',
            41996: 'SubjectDistanceRange',
            40965: 'InteroperabilityIFDPointer',
            42016: 'ImageUniqueID',
          }),
          a = (o.TiffTags = {
            256: 'ImageWidth',
            257: 'ImageHeight',
            34665: 'ExifIFDPointer',
            34853: 'GPSInfoIFDPointer',
            40965: 'InteroperabilityIFDPointer',
            258: 'BitsPerSample',
            259: 'Compression',
            262: 'PhotometricInterpretation',
            274: 'Orientation',
            277: 'SamplesPerPixel',
            284: 'PlanarConfiguration',
            530: 'YCbCrSubSampling',
            531: 'YCbCrPositioning',
            282: 'XResolution',
            283: 'YResolution',
            296: 'ResolutionUnit',
            273: 'StripOffsets',
            278: 'RowsPerStrip',
            279: 'StripByteCounts',
            513: 'JPEGInterchangeFormat',
            514: 'JPEGInterchangeFormatLength',
            301: 'TransferFunction',
            318: 'WhitePoint',
            319: 'PrimaryChromaticities',
            529: 'YCbCrCoefficients',
            532: 'ReferenceBlackWhite',
            306: 'DateTime',
            270: 'ImageDescription',
            271: 'Make',
            272: 'Model',
            305: 'Software',
            315: 'Artist',
            33432: 'Copyright',
          }),
          l = (o.GPSTags = {
            0: 'GPSVersionID',
            1: 'GPSLatitudeRef',
            2: 'GPSLatitude',
            3: 'GPSLongitudeRef',
            4: 'GPSLongitude',
            5: 'GPSAltitudeRef',
            6: 'GPSAltitude',
            7: 'GPSTimeStamp',
            8: 'GPSSatellites',
            9: 'GPSStatus',
            10: 'GPSMeasureMode',
            11: 'GPSDOP',
            12: 'GPSSpeedRef',
            13: 'GPSSpeed',
            14: 'GPSTrackRef',
            15: 'GPSTrack',
            16: 'GPSImgDirectionRef',
            17: 'GPSImgDirection',
            18: 'GPSMapDatum',
            19: 'GPSDestLatitudeRef',
            20: 'GPSDestLatitude',
            21: 'GPSDestLongitudeRef',
            22: 'GPSDestLongitude',
            23: 'GPSDestBearingRef',
            24: 'GPSDestBearing',
            25: 'GPSDestDistanceRef',
            26: 'GPSDestDistance',
            27: 'GPSProcessingMethod',
            28: 'GPSAreaInformation',
            29: 'GPSDateStamp',
            30: 'GPSDifferential',
          }),
          u = (o.IFD1Tags = {
            256: 'ImageWidth',
            257: 'ImageHeight',
            258: 'BitsPerSample',
            259: 'Compression',
            262: 'PhotometricInterpretation',
            273: 'StripOffsets',
            274: 'Orientation',
            277: 'SamplesPerPixel',
            278: 'RowsPerStrip',
            279: 'StripByteCounts',
            282: 'XResolution',
            283: 'YResolution',
            284: 'PlanarConfiguration',
            296: 'ResolutionUnit',
            513: 'JpegIFOffset',
            514: 'JpegIFByteCount',
            529: 'YCbCrCoefficients',
            530: 'YCbCrSubSampling',
            531: 'YCbCrPositioning',
            532: 'ReferenceBlackWhite',
          }),
          p = (o.StringValues = {
            ExposureProgram: {
              0: 'Not defined',
              1: 'Manual',
              2: 'Normal program',
              3: 'Aperture priority',
              4: 'Shutter priority',
              5: 'Creative program',
              6: 'Action program',
              7: 'Portrait mode',
              8: 'Landscape mode',
            },
            MeteringMode: {
              0: 'Unknown',
              1: 'Average',
              2: 'CenterWeightedAverage',
              3: 'Spot',
              4: 'MultiSpot',
              5: 'Pattern',
              6: 'Partial',
              255: 'Other',
            },
            LightSource: {
              0: 'Unknown',
              1: 'Daylight',
              2: 'Fluorescent',
              3: 'Tungsten (incandescent light)',
              4: 'Flash',
              9: 'Fine weather',
              10: 'Cloudy weather',
              11: 'Shade',
              12: 'Daylight fluorescent (D 5700 - 7100K)',
              13: 'Day white fluorescent (N 4600 - 5400K)',
              14: 'Cool white fluorescent (W 3900 - 4500K)',
              15: 'White fluorescent (WW 3200 - 3700K)',
              17: 'Standard light A',
              18: 'Standard light B',
              19: 'Standard light C',
              20: 'D55',
              21: 'D65',
              22: 'D75',
              23: 'D50',
              24: 'ISO studio tungsten',
              255: 'Other',
            },
            Flash: {
              0: 'Flash did not fire',
              1: 'Flash fired',
              5: 'Strobe return light not detected',
              7: 'Strobe return light detected',
              9: 'Flash fired, compulsory flash mode',
              13: 'Flash fired, compulsory flash mode, return light not detected',
              15: 'Flash fired, compulsory flash mode, return light detected',
              16: 'Flash did not fire, compulsory flash mode',
              24: 'Flash did not fire, auto mode',
              25: 'Flash fired, auto mode',
              29: 'Flash fired, auto mode, return light not detected',
              31: 'Flash fired, auto mode, return light detected',
              32: 'No flash function',
              65: 'Flash fired, red-eye reduction mode',
              69: 'Flash fired, red-eye reduction mode, return light not detected',
              71: 'Flash fired, red-eye reduction mode, return light detected',
              73: 'Flash fired, compulsory flash mode, red-eye reduction mode',
              77: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
              79: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
              89: 'Flash fired, auto mode, red-eye reduction mode',
              93: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
              95: 'Flash fired, auto mode, return light detected, red-eye reduction mode',
            },
            SensingMethod: {
              1: 'Not defined',
              2: 'One-chip color area sensor',
              3: 'Two-chip color area sensor',
              4: 'Three-chip color area sensor',
              5: 'Color sequential area sensor',
              7: 'Trilinear sensor',
              8: 'Color sequential linear sensor',
            },
            SceneCaptureType: {
              0: 'Standard',
              1: 'Landscape',
              2: 'Portrait',
              3: 'Night scene',
            },
            SceneType: { 1: 'Directly photographed' },
            CustomRendered: { 0: 'Normal process', 1: 'Custom process' },
            WhiteBalance: {
              0: 'Auto white balance',
              1: 'Manual white balance',
            },
            GainControl: {
              0: 'None',
              1: 'Low gain up',
              2: 'High gain up',
              3: 'Low gain down',
              4: 'High gain down',
            },
            Contrast: { 0: 'Normal', 1: 'Soft', 2: 'Hard' },
            Saturation: {
              0: 'Normal',
              1: 'Low saturation',
              2: 'High saturation',
            },
            Sharpness: { 0: 'Normal', 1: 'Soft', 2: 'Hard' },
            SubjectDistanceRange: {
              0: 'Unknown',
              1: 'Macro',
              2: 'Close view',
              3: 'Distant view',
            },
            FileSource: { 3: 'DSC' },
            Components: {
              0: '',
              1: 'Y',
              2: 'Cb',
              3: 'Cr',
              4: 'R',
              5: 'G',
              6: 'B',
            },
          });
        function c(e) {
          return !!e.exifdata;
        }
        function d(e, t) {
          function n(n) {
            var i = h(n);
            e.exifdata = i || {};
            var s = (function(e) {
              var t = new DataView(e);
              r && console.log('Got file of length ' + e.byteLength);
              if (255 != t.getUint8(0) || 216 != t.getUint8(1))
                return r && console.log('Not a valid JPEG'), !1;
              var n = 2,
                i = e.byteLength,
                o = function(e, t) {
                  return (
                    56 === e.getUint8(t) &&
                    66 === e.getUint8(t + 1) &&
                    73 === e.getUint8(t + 2) &&
                    77 === e.getUint8(t + 3) &&
                    4 === e.getUint8(t + 4) &&
                    4 === e.getUint8(t + 5)
                  );
                };
              for (; n < i; ) {
                if (o(t, n)) {
                  var s = t.getUint8(n + 7);
                  s % 2 !== 0 && (s += 1), 0 === s && (s = 4);
                  var a = n + 8 + s,
                    l = t.getUint16(n + 6 + s);
                  return g(e, a, l);
                }
                n++;
              }
            })(n);
            if (((e.iptcdata = s || {}), o.isXmpEnabled)) {
              var a = (function(e) {
                if (!('DOMParser' in self)) return;
                var t = new DataView(e);
                r && console.log('Got file of length ' + e.byteLength);
                if (255 != t.getUint8(0) || 216 != t.getUint8(1))
                  return r && console.log('Not a valid JPEG'), !1;
                var n = 2,
                  i = e.byteLength,
                  o = new DOMParser();
                for (; n < i - 4; ) {
                  if ('http' == y(t, n, 4)) {
                    var s = n - 1,
                      a = t.getUint16(n - 2) - 1,
                      l = y(t, s, a),
                      u = l.indexOf('xmpmeta>') + 8,
                      p =
                        (l = l.substring(l.indexOf('<x:xmpmeta'), u)).indexOf(
                          'x:xmpmeta'
                        ) + 10;
                    return (
                      (l =
                        l.slice(0, p) +
                        'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                        l.slice(p)),
                      P(o.parseFromString(l, 'text/xml'))
                    );
                  }
                  n++;
                }
              })(n);
              e.xmpdata = a || {};
            }
            t && t.call(e);
          }
          if (e.src)
            if (/^data\:/i.test(e.src))
              n(
                (function(e, t) {
                  (t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || ''),
                    (e = e.replace(/^data\:([^\;]+)\;base64,/gim, ''));
                  for (
                    var n = atob(e),
                      r = n.length,
                      i = new ArrayBuffer(r),
                      o = new Uint8Array(i),
                      s = 0;
                    s < r;
                    s++
                  )
                    o[s] = n.charCodeAt(s);
                  return i;
                })(e.src)
              );
            else if (/^blob\:/i.test(e.src)) {
              ((s = new FileReader()).onload = function(e) {
                n(e.target.result);
              }),
                (function(e, t) {
                  var n = new XMLHttpRequest();
                  n.open('GET', e, !0),
                    (n.responseType = 'blob'),
                    (n.onload = function(e) {
                      (200 != this.status && 0 !== this.status) ||
                        t(this.response);
                    }),
                    n.send();
                })(e.src, function(e) {
                  s.readAsArrayBuffer(e);
                });
            } else {
              var i = new XMLHttpRequest();
              (i.onload = function() {
                if (200 != this.status && 0 !== this.status)
                  throw 'Could not load image';
                n(i.response), (i = null);
              }),
                i.open('GET', e.src, !0),
                (i.responseType = 'arraybuffer'),
                i.send(null);
            }
          else if (
            self.FileReader &&
            (e instanceof self.Blob || e instanceof self.File)
          ) {
            var s;
            ((s = new FileReader()).onload = function(e) {
              r &&
                console.log('Got file of length ' + e.target.result.byteLength),
                n(e.target.result);
            }),
              s.readAsArrayBuffer(e);
          }
        }
        function h(e) {
          var t = new DataView(e);
          if (
            (r && console.log('Got file of length ' + e.byteLength),
            255 != t.getUint8(0) || 216 != t.getUint8(1))
          )
            return r && console.log('Not a valid JPEG'), !1;
          for (var n, i = 2, o = e.byteLength; i < o; ) {
            if (255 != t.getUint8(i))
              return (
                r &&
                  console.log(
                    'Not a valid marker at offset ' +
                      i +
                      ', found: ' +
                      t.getUint8(i)
                  ),
                !1
              );
            if (((n = t.getUint8(i + 1)), r && console.log(n), 225 == n))
              return (
                r && console.log('Found 0xFFE1 marker'),
                b(t, i + 4, t.getUint16(i + 2))
              );
            i += 2 + t.getUint16(i + 2);
          }
        }
        var f = {
          120: 'caption',
          110: 'credit',
          25: 'keywords',
          55: 'dateCreated',
          80: 'byline',
          85: 'bylineTitle',
          122: 'captionWriter',
          105: 'headline',
          116: 'copyright',
          15: 'category',
        };
        function g(e, t, n) {
          for (var r, i, o, s, a = new DataView(e), l = {}, u = t; u < t + n; )
            28 === a.getUint8(u) &&
              2 === a.getUint8(u + 1) &&
              (s = a.getUint8(u + 2)) in f &&
              ((o = a.getInt16(u + 3)) + 5,
              (i = f[s]),
              (r = y(a, u + 5, o)),
              l.hasOwnProperty(i)
                ? l[i] instanceof Array
                  ? l[i].push(r)
                  : (l[i] = [l[i], r])
                : (l[i] = r)),
              u++;
          return l;
        }
        function v(e, t, n, i, o) {
          var s,
            a,
            l,
            u = e.getUint16(n, !o),
            p = {};
          for (l = 0; l < u; l++)
            (s = n + 12 * l + 2),
              !(a = i[e.getUint16(s, !o)]) &&
                r &&
                console.log('Unknown tag: ' + e.getUint16(s, !o)),
              (p[a] = m(e, s, t, n, o));
          return p;
        }
        function m(e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            p,
            c = e.getUint16(t + 2, !i),
            d = e.getUint32(t + 4, !i),
            h = e.getUint32(t + 8, !i) + n;
          switch (c) {
            case 1:
            case 7:
              if (1 == d) return e.getUint8(t + 8, !i);
              for (o = d > 4 ? h : t + 8, s = [], l = 0; l < d; l++)
                s[l] = e.getUint8(o + l);
              return s;
            case 2:
              return y(e, (o = d > 4 ? h : t + 8), d - 1);
            case 3:
              if (1 == d) return e.getUint16(t + 8, !i);
              for (o = d > 2 ? h : t + 8, s = [], l = 0; l < d; l++)
                s[l] = e.getUint16(o + 2 * l, !i);
              return s;
            case 4:
              if (1 == d) return e.getUint32(t + 8, !i);
              for (s = [], l = 0; l < d; l++) s[l] = e.getUint32(h + 4 * l, !i);
              return s;
            case 5:
              if (1 == d)
                return (
                  (u = e.getUint32(h, !i)),
                  (p = e.getUint32(h + 4, !i)),
                  ((a = new Number(u / p)).numerator = u),
                  (a.denominator = p),
                  a
                );
              for (s = [], l = 0; l < d; l++)
                (u = e.getUint32(h + 8 * l, !i)),
                  (p = e.getUint32(h + 4 + 8 * l, !i)),
                  (s[l] = new Number(u / p)),
                  (s[l].numerator = u),
                  (s[l].denominator = p);
              return s;
            case 9:
              if (1 == d) return e.getInt32(t + 8, !i);
              for (s = [], l = 0; l < d; l++) s[l] = e.getInt32(h + 4 * l, !i);
              return s;
            case 10:
              if (1 == d) return e.getInt32(h, !i) / e.getInt32(h + 4, !i);
              for (s = [], l = 0; l < d; l++)
                s[l] =
                  e.getInt32(h + 8 * l, !i) / e.getInt32(h + 4 + 8 * l, !i);
              return s;
          }
        }
        function y(e, t, r) {
          var i = '';
          for (n = t; n < t + r; n++) i += String.fromCharCode(e.getUint8(n));
          return i;
        }
        function b(e, t) {
          if ('Exif' != y(e, t, 4))
            return r && console.log('Not valid EXIF data! ' + y(e, t, 4)), !1;
          var n,
            i,
            o,
            c,
            d,
            h = t + 6;
          if (18761 == e.getUint16(h)) n = !1;
          else {
            if (19789 != e.getUint16(h))
              return (
                r && console.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)'),
                !1
              );
            n = !0;
          }
          if (42 != e.getUint16(h + 2, !n))
            return r && console.log('Not valid TIFF data! (no 0x002A)'), !1;
          var f = e.getUint32(h + 4, !n);
          if (f < 8)
            return (
              r &&
                console.log(
                  'Not valid TIFF data! (First offset less than 8)',
                  e.getUint32(h + 4, !n)
                ),
              !1
            );
          if ((i = v(e, h, h + f, a, n)).ExifIFDPointer)
            for (o in (c = v(e, h, h + i.ExifIFDPointer, s, n))) {
              switch (o) {
                case 'LightSource':
                case 'Flash':
                case 'MeteringMode':
                case 'ExposureProgram':
                case 'SensingMethod':
                case 'SceneCaptureType':
                case 'SceneType':
                case 'CustomRendered':
                case 'WhiteBalance':
                case 'GainControl':
                case 'Contrast':
                case 'Saturation':
                case 'Sharpness':
                case 'SubjectDistanceRange':
                case 'FileSource':
                  c[o] = p[o][c[o]];
                  break;
                case 'ExifVersion':
                case 'FlashpixVersion':
                  c[o] = String.fromCharCode(
                    c[o][0],
                    c[o][1],
                    c[o][2],
                    c[o][3]
                  );
                  break;
                case 'ComponentsConfiguration':
                  c[o] =
                    p.Components[c[o][0]] +
                    p.Components[c[o][1]] +
                    p.Components[c[o][2]] +
                    p.Components[c[o][3]];
              }
              i[o] = c[o];
            }
          if (i.GPSInfoIFDPointer)
            for (o in (d = v(e, h, h + i.GPSInfoIFDPointer, l, n))) {
              switch (o) {
                case 'GPSVersionID':
                  d[o] =
                    d[o][0] + '.' + d[o][1] + '.' + d[o][2] + '.' + d[o][3];
              }
              i[o] = d[o];
            }
          return (
            (i.thumbnail = (function(e, t, n, r) {
              var i = (function(e, t, n) {
                var r = e.getUint16(t, !n);
                return e.getUint32(t + 2 + 12 * r, !n);
              })(e, t + n, r);
              if (!i) return {};
              if (i > e.byteLength) return {};
              var o = v(e, t, t + i, u, r);
              if (o.Compression)
                switch (o.Compression) {
                  case 6:
                    if (o.JpegIFOffset && o.JpegIFByteCount) {
                      var s = t + o.JpegIFOffset,
                        a = o.JpegIFByteCount;
                      o.blob = new Blob([new Uint8Array(e.buffer, s, a)], {
                        type: 'image/jpeg',
                      });
                    }
                    break;
                  case 1:
                    console.log(
                      'Thumbnail image format is TIFF, which is not implemented.'
                    );
                    break;
                  default:
                    console.log(
                      "Unknown thumbnail image format '%s'",
                      o.Compression
                    );
                }
              else
                2 == o.PhotometricInterpretation &&
                  console.log(
                    'Thumbnail image format is RGB, which is not implemented.'
                  );
              return o;
            })(e, h, f, n)),
            i
          );
        }
        function w(e) {
          var t = {};
          if (1 == e.nodeType) {
            if (e.attributes.length > 0) {
              t['@attributes'] = {};
              for (var n = 0; n < e.attributes.length; n++) {
                var r = e.attributes.item(n);
                t['@attributes'][r.nodeName] = r.nodeValue;
              }
            }
          } else if (3 == e.nodeType) return e.nodeValue;
          if (e.hasChildNodes())
            for (var i = 0; i < e.childNodes.length; i++) {
              var o = e.childNodes.item(i),
                s = o.nodeName;
              if (null == t[s]) t[s] = w(o);
              else {
                if (null == t[s].push) {
                  var a = t[s];
                  (t[s] = []), t[s].push(a);
                }
                t[s].push(w(o));
              }
            }
          return t;
        }
        function P(e) {
          try {
            var t = {};
            if (e.children.length > 0)
              for (var n = 0; n < e.children.length; n++) {
                var r = e.children.item(n),
                  i = r.attributes;
                for (var o in i) {
                  var s = i[o],
                    a = s.nodeName,
                    l = s.nodeValue;
                  void 0 !== a && (t[a] = l);
                }
                var u = r.nodeName;
                if ('undefined' == typeof t[u]) t[u] = w(r);
                else {
                  if ('undefined' == typeof t[u].push) {
                    var p = t[u];
                    (t[u] = []), t[u].push(p);
                  }
                  t[u].push(w(r));
                }
              }
            else t = e.textContent;
            return t;
          } catch (c) {
            console.log(c.message);
          }
        }
        (o.enableXmp = function() {
          o.isXmpEnabled = !0;
        }),
          (o.disableXmp = function() {
            o.isXmpEnabled = !1;
          }),
          (o.getData = function(e, t) {
            return (
              !(
                ((self.Image && e instanceof self.Image) ||
                  (self.HTMLImageElement &&
                    e instanceof self.HTMLImageElement)) &&
                !e.complete
              ) && (c(e) ? t && t.call(e) : d(e, t), !0)
            );
          }),
          (o.getTag = function(e, t) {
            if (c(e)) return e.exifdata[t];
          }),
          (o.getIptcTag = function(e, t) {
            if (c(e)) return e.iptcdata[t];
          }),
          (o.getAllTags = function(e) {
            if (!c(e)) return {};
            var t,
              n = e.exifdata,
              r = {};
            for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
            return r;
          }),
          (o.getAllIptcTags = function(e) {
            if (!c(e)) return {};
            var t,
              n = e.iptcdata,
              r = {};
            for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
            return r;
          }),
          (o.pretty = function(e) {
            if (!c(e)) return '';
            var t,
              n = e.exifdata,
              r = '';
            for (t in n)
              n.hasOwnProperty(t) &&
                ('object' == typeof n[t]
                  ? n[t] instanceof Number
                    ? (r +=
                        t +
                        ' : ' +
                        n[t] +
                        ' [' +
                        n[t].numerator +
                        '/' +
                        n[t].denominator +
                        ']\r\n')
                    : (r += t + ' : [' + n[t].length + ' values]\r\n')
                  : (r += t + ' : ' + n[t] + '\r\n'));
            return r;
          }),
          (o.readFromBinaryFile = function(e) {
            return h(e);
          }),
          void 0 ===
            (i = function() {
              return o;
            }.apply(t, [])) || (e.exports = i);
      }.call(this));
    },
    2374: function(e, t) {
      e.exports = function(e, t, n) {
        var r = e.split(',')[1],
          i =
            t.mimeType ||
            e
              .split(',')[0]
              .split(':')[1]
              .split(';')[0];
        null == i && (i = 'plain/text');
        for (var o, s = atob(r), a = [], l = 0; l < s.length; l++)
          a.push(s.charCodeAt(l));
        try {
          o = new Uint8Array(a);
        } catch (u) {
          return null;
        }
        return n
          ? new File([o], t.name || '', { type: i })
          : new Blob([o], { type: i });
      };
    },
    2375: function(e, t) {
      e.exports = function(e) {
        return 0 === e.indexOf('blob:');
      };
    },
    2376: function(e, t) {
      e.exports = {
        1: { rotation: 0, xScale: 1, yScale: 1 },
        2: { rotation: 0, xScale: -1, yScale: 1 },
        3: { rotation: 180, xScale: 1, yScale: 1 },
        4: { rotation: 180, xScale: -1, yScale: 1 },
        5: { rotation: 90, xScale: 1, yScale: -1 },
        6: { rotation: 90, xScale: 1, yScale: 1 },
        7: { rotation: 270, xScale: 1, yScale: -1 },
        8: { rotation: 270, xScale: 1, yScale: 1 },
      };
    },
    2377: function(e, t, n) {
      var r = n(1764);
      e.exports = function(e) {
        if ('string' === typeof e) {
          var t = [].slice.call(document.querySelectorAll(e));
          return t.length > 0 ? t : null;
        }
        if ('object' === typeof e && r(e)) return [e];
      };
    },
    2378: function(e, t, n) {
      var r = n(1126),
        i = n(2379),
        o = n(2380);
      e.exports = function(e, t) {
        var n = [],
          s = [];
        return (
          r(e.items).forEach(function(e) {
            var r = e.webkitGetAsEntry();
            r &&
              s.push(
                (function e(r) {
                  return new Promise(function(s) {
                    if (r.isFile)
                      r.file(
                        function(e) {
                          (e.relativePath = i(r)), n.push(e), s();
                        },
                        function(e) {
                          t(e), s();
                        }
                      );
                    else if (r.isDirectory) {
                      var a = r.createReader();
                      o(a, [], t, {
                        onSuccess: function(t) {
                          var n = t.map(function(t) {
                            return e(t);
                          });
                          Promise.all(n).then(function() {
                            return s();
                          });
                        },
                      });
                    }
                  });
                })(r)
              );
          }),
          Promise.all(s).then(function() {
            return n;
          })
        );
      };
    },
    2379: function(e, t) {
      e.exports = function(e) {
        return e.fullPath && e.fullPath !== '/' + e.name ? e.fullPath : null;
      };
    },
    2380: function(e, t) {
      e.exports = function e(t, n, r, i) {
        var o = i.onSuccess;
        t.readEntries(
          function(i) {
            var s = [].concat(n, i);
            i.length
              ? setTimeout(function() {
                  e(t, s, r, { onSuccess: o });
                }, 0)
              : o(s);
          },
          function(e) {
            r(e), o(n);
          }
        );
      };
    },
    2381: function(e, t, n) {
      var r = n(1126);
      e.exports = function(e) {
        var t = r(e.files);
        return Promise.resolve(t);
      };
    },
    2382: function(e, t, n) {
      var r = n(1126),
        i = n(1778),
        o = n(1779);
      function s(e, t) {
        var n = t[0];
        n && (n.focus(), e.preventDefault());
      }
      function a(e, t, n) {
        var a = i(n, t),
          l = r(a.querySelectorAll(o)),
          u = l.indexOf(document.activeElement);
        !(function(e) {
          return e.contains(document.activeElement);
        })(a)
          ? s(e, l)
          : e.shiftKey && 0 === u
          ? (function(e, t) {
              var n = t[t.length - 1];
              n && (n.focus(), e.preventDefault());
            })(e, l)
          : e.shiftKey || u !== l.length - 1 || s(e, l);
      }
      e.exports = {
        forModal: function(e, t, n) {
          a(e, t, n);
        },
        forInline: function(e, t, n) {
          null === t || a(e, t, n);
        },
      };
    },
    2383: function(e, t, n) {
      var r = n(715),
        i = n(1779),
        o = n(1778);
      e.exports = function() {
        var e = !1;
        return r(function(t, n) {
          var r = o(t, n),
            s = r.contains(document.activeElement);
          if (!s || !e) {
            var a = r.querySelector('[data-uppy-super-focusable]');
            if (!s || a)
              if (a) a.focus({ preventScroll: !0 }), (e = !0);
              else {
                var l = r.querySelector(i);
                l && l.focus({ preventScroll: !0 }), (e = !1);
              }
          }
        }, 260);
      };
    },
    2384: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var a = n(728).Plugin,
        l = n(1125),
        u = n(1126),
        p = n(2385),
        c = n(1777),
        d = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).type = 'acquirer'),
              (r.id = r.opts.id || 'DragDrop'),
              (r.title = 'Drag & Drop'),
              (r.defaultLocale = {
                strings: {
                  dropHereOr: 'Drop files here or %{browse}',
                  browse: 'browse',
                },
              });
            return (
              (r.opts = o(
                {},
                {
                  target: null,
                  inputName: 'files[]',
                  width: '100%',
                  height: '100%',
                  note: null,
                },
                n
              )),
              (r.isDragDropSupported = p()),
              (r.removeDragOverClassTimeout = null),
              (r.translator = new l([
                r.defaultLocale,
                r.uppy.locale,
                r.opts.locale,
              ])),
              (r.i18n = r.translator.translate.bind(r.translator)),
              (r.i18nArray = r.translator.translateArray.bind(r.translator)),
              (r.handleInputChange = r.handleInputChange.bind(s(r))),
              (r.handleDragOver = r.handleDragOver.bind(s(r))),
              (r.handleDragLeave = r.handleDragLeave.bind(s(r))),
              (r.handleDrop = r.handleDrop.bind(s(r))),
              (r.addFile = r.addFile.bind(s(r))),
              (r.render = r.render.bind(s(r))),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.addFile = function(e) {
              try {
                this.uppy.addFile({
                  source: this.id,
                  name: e.name,
                  type: e.type,
                  data: e,
                  meta: { relativePath: e.relativePath || null },
                });
              } catch (t) {
                t.isRestriction || this.uppy.log(t);
              }
            }),
            (i.handleInputChange = function(e) {
              this.uppy.log('[DragDrop] Files selected through input'),
                u(e.target.files).forEach(this.addFile),
                (e.target.value = null);
            }),
            (i.handleDrop = function(e, t) {
              var n = this;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (e.dataTransfer.dropEffect = 'copy'),
                this.setPluginState({ isDraggingOver: !1 }),
                this.uppy.log('[DragDrop] Files were dropped');
              c(e.dataTransfer, {
                logDropError: function(e) {
                  n.uppy.log(e, 'error');
                },
              }).then(function(e) {
                e.forEach(n.addFile);
              });
            }),
            (i.handleDragOver = function(e) {
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !0 });
            }),
            (i.handleDragLeave = function(e) {
              var t = this;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (this.removeDragOverClassTimeout = setTimeout(function() {
                  t.setPluginState({ isDraggingOver: !1 });
                }, 50));
            }),
            (i.renderHiddenFileInput = function() {
              var e = this,
                t = this.uppy.opts.restrictions;
              return d('input', {
                class: 'uppy-DragDrop-input',
                type: 'file',
                tabindex: -1,
                focusable: 'false',
                ref: function(t) {
                  e.fileInputRef = t;
                },
                name: this.opts.inputName,
                multiple: 1 !== t.maxNumberOfFiles,
                accept: t.allowedFileTypes,
                onchange: this.handleInputChange,
              });
            }),
            (i.renderArrowSvg = function() {
              return d(
                'svg',
                {
                  'aria-hidden': 'true',
                  focusable: 'false',
                  class: 'UppyIcon uppy-DragDrop-arrow',
                  width: '16',
                  height: '16',
                  viewBox: '0 0 16 16',
                },
                d('path', {
                  d: 'M11 10V0H5v10H2l6 6 6-6h-3zm0 0',
                  'fill-rule': 'evenodd',
                })
              );
            }),
            (i.renderLabel = function() {
              return d(
                'div',
                { class: 'uppy-DragDrop-label' },
                this.i18nArray('dropHereOr', {
                  browse: d(
                    'span',
                    { class: 'uppy-DragDrop-browse' },
                    this.i18n('browse')
                  ),
                })
              );
            }),
            (i.renderNote = function() {
              return d('span', { class: 'uppy-DragDrop-note' }, this.opts.note);
            }),
            (i.render = function(e) {
              var t = this,
                n =
                  '\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      ' +
                  (this.isDragDropSupported
                    ? 'uppy-DragDrop--is-dragdrop-supported'
                    : '') +
                  '\n      ' +
                  (this.getPluginState().isDraggingOver
                    ? 'uppy-DragDrop--isDraggingOver'
                    : '') +
                  '\n    ',
                r = { width: this.opts.width, height: this.opts.height };
              return d(
                'button',
                {
                  type: 'button',
                  class: n,
                  style: r,
                  onClick: function() {
                    return t.fileInputRef.click();
                  },
                  onDragOver: this.handleDragOver,
                  onDragLeave: this.handleDragLeave,
                  onDrop: this.handleDrop,
                },
                this.renderHiddenFileInput(),
                d(
                  'div',
                  { class: 'uppy-DragDrop-inner' },
                  this.renderArrowSvg(),
                  this.renderLabel(),
                  this.renderNote()
                )
              );
            }),
            (i.install = function() {
              this.setPluginState({ isDraggingOver: !1 });
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.unmount();
            }),
            r
          );
        })(a)),
        (r.VERSION = '1.3.1'),
        i);
    },
    2385: function(e, t) {
      e.exports = function() {
        var e = document.createElement('div');
        return (
          'draggable' in e &&
          'ondragstart' in e &&
          'ondrop' in e &&
          ('FormData' in window && 'FileReader' in window)
        );
      };
    },
    2386: function(e, t, n) {
      var r, i;
      function o() {
        return (o =
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
      var s = n(728).Plugin,
        a = n(573).h;
      e.exports =
        ((i = r = (function(e) {
          var t, n;
          function r(t, n) {
            var r;
            ((r = e.call(this, t, n) || this).id = r.opts.id || 'ProgressBar'),
              (r.title = 'Progress Bar'),
              (r.type = 'progressindicator');
            return (
              (r.opts = o(
                {},
                {
                  target: 'body',
                  replaceTargetContent: !1,
                  fixed: !1,
                  hideAfterFinish: !0,
                },
                n
              )),
              (r.render = r.render.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              )),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.render = function(e) {
              var t = e.totalProgress || 0,
                n = 100 === t && this.opts.hideAfterFinish;
              return a(
                'div',
                {
                  class: 'uppy uppy-ProgressBar',
                  style: { position: this.opts.fixed ? 'fixed' : 'initial' },
                  'aria-hidden': n,
                },
                a('div', {
                  class: 'uppy-ProgressBar-inner',
                  style: { width: t + '%' },
                }),
                a('div', { class: 'uppy-ProgressBar-percentage' }, t)
              );
            }),
            (i.install = function() {
              var e = this.opts.target;
              e && this.mount(e, this);
            }),
            (i.uninstall = function() {
              this.unmount();
            }),
            r
          );
        })(s)),
        (r.VERSION = '1.3.1'),
        i);
    },
    573: function(e, t, n) {
      'use strict';
      function r() {}
      n.r(t),
        n.d(t, 'h', function() {
          return a;
        }),
        n.d(t, 'createElement', function() {
          return a;
        }),
        n.d(t, 'cloneElement', function() {
          return p;
        }),
        n.d(t, 'Component', function() {
          return B;
        }),
        n.d(t, 'render', function() {
          return L;
        }),
        n.d(t, 'rerender', function() {
          return f;
        }),
        n.d(t, 'options', function() {
          return i;
        });
      var i = {},
        o = [],
        s = [];
      function a(e, t) {
        var n,
          a,
          l,
          u,
          p = s;
        for (u = arguments.length; u-- > 2; ) o.push(arguments[u]);
        for (
          t &&
          null != t.children &&
          (o.length || o.push(t.children), delete t.children);
          o.length;

        )
          if ((a = o.pop()) && void 0 !== a.pop)
            for (u = a.length; u--; ) o.push(a[u]);
          else
            'boolean' === typeof a && (a = null),
              (l = 'function' !== typeof e) &&
                (null == a
                  ? (a = '')
                  : 'number' === typeof a
                  ? (a = String(a))
                  : 'string' !== typeof a && (l = !1)),
              l && n ? (p[p.length - 1] += a) : p === s ? (p = [a]) : p.push(a),
              (n = l);
        var c = new r();
        return (
          (c.nodeName = e),
          (c.children = p),
          (c.attributes = null == t ? void 0 : t),
          (c.key = null == t ? void 0 : t.key),
          void 0 !== i.vnode && i.vnode(c),
          c
        );
      }
      function l(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      var u =
        'function' == typeof Promise
          ? Promise.resolve().then.bind(Promise.resolve())
          : setTimeout;
      function p(e, t) {
        return a(
          e.nodeName,
          l(l({}, e.attributes), t),
          arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
        );
      }
      var c = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        d = [];
      function h(e) {
        !e._dirty &&
          (e._dirty = !0) &&
          1 == d.push(e) &&
          (i.debounceRendering || u)(f);
      }
      function f() {
        var e,
          t = d;
        for (d = []; (e = t.pop()); ) e._dirty && R(e);
      }
      function g(e, t, n) {
        return 'string' === typeof t || 'number' === typeof t
          ? void 0 !== e.splitText
          : 'string' === typeof t.nodeName
          ? !e._componentConstructor && v(e, t.nodeName)
          : n || e._componentConstructor === t.nodeName;
      }
      function v(e, t) {
        return (
          e.normalizedNodeName === t ||
          e.nodeName.toLowerCase() === t.toLowerCase()
        );
      }
      function m(e) {
        var t = l({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t;
      }
      function y(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function b(e, t, n, r, i) {
        if (('className' === t && (t = 'class'), 'key' === t));
        else if ('ref' === t) n && n(null), r && r(e);
        else if ('class' !== t || i)
          if ('style' === t) {
            if (
              ((r && 'string' !== typeof r && 'string' !== typeof n) ||
                (e.style.cssText = r || ''),
              r && 'object' === typeof r)
            ) {
              if ('string' !== typeof n)
                for (var o in n) o in r || (e.style[o] = '');
              for (var o in r)
                e.style[o] =
                  'number' === typeof r[o] && !1 === c.test(o)
                    ? r[o] + 'px'
                    : r[o];
            }
          } else if ('dangerouslySetInnerHTML' === t)
            r && (e.innerHTML = r.__html || '');
          else if ('o' == t[0] && 'n' == t[1]) {
            var s = t !== (t = t.replace(/Capture$/, ''));
            (t = t.toLowerCase().substring(2)),
              r
                ? n || e.addEventListener(t, w, s)
                : e.removeEventListener(t, w, s),
              ((e._listeners || (e._listeners = {}))[t] = r);
          } else if ('list' !== t && 'type' !== t && !i && t in e)
            !(function(e, t, n) {
              try {
                e[t] = n;
              } catch (r) {}
            })(e, t, null == r ? '' : r),
              (null != r && !1 !== r) || e.removeAttribute(t);
          else {
            var a = i && t !== (t = t.replace(/^xlink:?/, ''));
            null == r || !1 === r
              ? a
                ? e.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase()
                  )
                : e.removeAttribute(t)
              : 'function' !== typeof r &&
                (a
                  ? e.setAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      t.toLowerCase(),
                      r
                    )
                  : e.setAttribute(t, r));
          }
        else e.className = r || '';
      }
      function w(e) {
        return this._listeners[e.type]((i.event && i.event(e)) || e);
      }
      var P = [],
        S = 0,
        _ = !1,
        C = !1;
      function F() {
        for (var e; (e = P.pop()); )
          i.afterMount && i.afterMount(e),
            e.componentDidMount && e.componentDidMount();
      }
      function T(e, t, n, r, i, o) {
        S++ ||
          ((_ = null != i && void 0 !== i.ownerSVGElement),
          (C = null != e && !('__preactattr_' in e)));
        var s = E(e, t, n, r, o);
        return (
          i && s.parentNode !== i && i.appendChild(s),
          --S || ((C = !1), o || F()),
          s
        );
      }
      function E(e, t, n, r, i) {
        var o = e,
          s = _;
        if (
          ((null != t && 'boolean' !== typeof t) || (t = ''),
          'string' === typeof t || 'number' === typeof t)
        )
          return (
            e && void 0 !== e.splitText && e.parentNode && (!e._component || i)
              ? e.nodeValue != t && (e.nodeValue = t)
              : ((o = document.createTextNode(t)),
                e &&
                  (e.parentNode && e.parentNode.replaceChild(o, e), O(e, !0))),
            (o.__preactattr_ = !0),
            o
          );
        var a = t.nodeName;
        if ('function' === typeof a)
          return (function(e, t, n, r) {
            var i = e && e._component,
              o = i,
              s = e,
              a = i && e._componentConstructor === t.nodeName,
              l = a,
              u = m(t);
            for (; i && !l && (i = i._parentComponent); )
              l = i.constructor === t.nodeName;
            i && l && (!r || i._component)
              ? (I(i, u, 3, n, r), (e = i.base))
              : (o && !a && (k(o), (e = s = null)),
                (i = D(t.nodeName, u, n)),
                e && !i.nextBase && ((i.nextBase = e), (s = null)),
                I(i, u, 1, n, r),
                (e = i.base),
                s && e !== s && ((s._component = null), O(s, !1)));
            return e;
          })(e, t, n, r);
        if (
          ((_ = 'svg' === a || ('foreignObject' !== a && _)),
          (a = String(a)),
          (!e || !v(e, a)) &&
            ((o = (function(e, t) {
              var n = t
                ? document.createElementNS('http://www.w3.org/2000/svg', e)
                : document.createElement(e);
              return (n.normalizedNodeName = e), n;
            })(a, _)),
            e))
        ) {
          for (; e.firstChild; ) o.appendChild(e.firstChild);
          e.parentNode && e.parentNode.replaceChild(o, e), O(e, !0);
        }
        var l = o.firstChild,
          u = o.__preactattr_,
          p = t.children;
        if (null == u) {
          u = o.__preactattr_ = {};
          for (var c = o.attributes, d = c.length; d--; )
            u[c[d].name] = c[d].value;
        }
        return (
          !C &&
          p &&
          1 === p.length &&
          'string' === typeof p[0] &&
          null != l &&
          void 0 !== l.splitText &&
          null == l.nextSibling
            ? l.nodeValue != p[0] && (l.nodeValue = p[0])
            : ((p && p.length) || null != l) &&
              (function(e, t, n, r, i) {
                var o,
                  s,
                  a,
                  l,
                  u,
                  p = e.childNodes,
                  c = [],
                  d = {},
                  h = 0,
                  f = 0,
                  v = p.length,
                  m = 0,
                  b = t ? t.length : 0;
                if (0 !== v)
                  for (var w = 0; w < v; w++) {
                    var P = p[w],
                      S = P.__preactattr_;
                    null !=
                    (_ =
                      b && S
                        ? P._component
                          ? P._component.__key
                          : S.key
                        : null)
                      ? (h++, (d[_] = P))
                      : (S ||
                          (void 0 !== P.splitText
                            ? !i || P.nodeValue.trim()
                            : i)) &&
                        (c[m++] = P);
                  }
                if (0 !== b)
                  for (w = 0; w < b; w++) {
                    var _;
                    if (((l = t[w]), (u = null), null != (_ = l.key)))
                      h &&
                        void 0 !== d[_] &&
                        ((u = d[_]), (d[_] = void 0), h--);
                    else if (!u && f < m)
                      for (o = f; o < m; o++)
                        if (void 0 !== c[o] && g((s = c[o]), l, i)) {
                          (u = s),
                            (c[o] = void 0),
                            o === m - 1 && m--,
                            o === f && f++;
                          break;
                        }
                    (u = E(u, l, n, r)),
                      (a = p[w]),
                      u &&
                        u !== e &&
                        u !== a &&
                        (null == a
                          ? e.appendChild(u)
                          : u === a.nextSibling
                          ? y(a)
                          : e.insertBefore(u, a));
                  }
                if (h) for (var w in d) void 0 !== d[w] && O(d[w], !1);
                for (; f <= m; ) void 0 !== (u = c[m--]) && O(u, !1);
              })(o, p, n, r, C || null != u.dangerouslySetInnerHTML),
          (function(e, t, n) {
            var r;
            for (r in n)
              (t && null != t[r]) ||
                null == n[r] ||
                b(e, r, n[r], (n[r] = void 0), _);
            for (r in t)
              'children' === r ||
                'innerHTML' === r ||
                (r in n &&
                  t[r] === ('value' === r || 'checked' === r ? e[r] : n[r])) ||
                b(e, r, n[r], (n[r] = t[r]), _);
          })(o, t.attributes, u),
          (_ = s),
          o
        );
      }
      function O(e, t) {
        var n = e._component;
        n
          ? k(n)
          : (null != e.__preactattr_ &&
              e.__preactattr_.ref &&
              e.__preactattr_.ref(null),
            (!1 !== t && null != e.__preactattr_) || y(e),
            x(e));
      }
      function x(e) {
        for (e = e.lastChild; e; ) {
          var t = e.previousSibling;
          O(e, !0), (e = t);
        }
      }
      var U = {};
      function D(e, t, n) {
        var r,
          i = U[e.name];
        if (
          (e.prototype && e.prototype.render
            ? ((r = new e(t, n)), B.call(r, t, n))
            : (((r = new B(t, n)).constructor = e), (r.render = A)),
          i)
        )
          for (var o = i.length; o--; )
            if (i[o].constructor === e) {
              (r.nextBase = i[o].nextBase), i.splice(o, 1);
              break;
            }
        return r;
      }
      function A(e, t, n) {
        return this.constructor(e, n);
      }
      function I(e, t, n, r, o) {
        e._disable ||
          ((e._disable = !0),
          (e.__ref = t.ref) && delete t.ref,
          (e.__key = t.key) && delete t.key,
          !e.base || o
            ? e.componentWillMount && e.componentWillMount()
            : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
          r &&
            r !== e.context &&
            (e.prevContext || (e.prevContext = e.context), (e.context = r)),
          e.prevProps || (e.prevProps = e.props),
          (e.props = t),
          (e._disable = !1),
          0 !== n &&
            (1 !== n && !1 === i.syncComponentUpdates && e.base
              ? h(e)
              : R(e, 1, o)),
          e.__ref && e.__ref(e));
      }
      function R(e, t, n, r) {
        if (!e._disable) {
          var o,
            s,
            a,
            u = e.props,
            p = e.state,
            c = e.context,
            d = e.prevProps || u,
            h = e.prevState || p,
            f = e.prevContext || c,
            g = e.base,
            v = e.nextBase,
            y = g || v,
            b = e._component,
            w = !1;
          if (
            (g &&
              ((e.props = d),
              (e.state = h),
              (e.context = f),
              2 !== t &&
              e.shouldComponentUpdate &&
              !1 === e.shouldComponentUpdate(u, p, c)
                ? (w = !0)
                : e.componentWillUpdate && e.componentWillUpdate(u, p, c),
              (e.props = u),
              (e.state = p),
              (e.context = c)),
            (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
            (e._dirty = !1),
            !w)
          ) {
            (o = e.render(u, p, c)),
              e.getChildContext && (c = l(l({}, c), e.getChildContext()));
            var _,
              C,
              E = o && o.nodeName;
            if ('function' === typeof E) {
              var x = m(o);
              (s = b) && s.constructor === E && x.key == s.__key
                ? I(s, x, 1, c, !1)
                : ((_ = s),
                  (e._component = s = D(E, x, c)),
                  (s.nextBase = s.nextBase || v),
                  (s._parentComponent = e),
                  I(s, x, 0, c, !1),
                  R(s, 1, n, !0)),
                (C = s.base);
            } else
              (a = y),
                (_ = b) && (a = e._component = null),
                (y || 1 === t) &&
                  (a && (a._component = null),
                  (C = T(a, o, c, n || !g, y && y.parentNode, !0)));
            if (y && C !== y && s !== b) {
              var U = y.parentNode;
              U &&
                C !== U &&
                (U.replaceChild(C, y), _ || ((y._component = null), O(y, !1)));
            }
            if ((_ && k(_), (e.base = C), C && !r)) {
              for (var A = e, B = e; (B = B._parentComponent); )
                (A = B).base = C;
              (C._component = A), (C._componentConstructor = A.constructor);
            }
          }
          if (
            (!g || n
              ? P.unshift(e)
              : w ||
                (e.componentDidUpdate && e.componentDidUpdate(d, h, f),
                i.afterUpdate && i.afterUpdate(e)),
            null != e._renderCallbacks)
          )
            for (; e._renderCallbacks.length; )
              e._renderCallbacks.pop().call(e);
          S || r || F();
        }
      }
      function k(e) {
        i.beforeUnmount && i.beforeUnmount(e);
        var t = e.base;
        (e._disable = !0),
          e.componentWillUnmount && e.componentWillUnmount(),
          (e.base = null);
        var n = e._component;
        n
          ? k(n)
          : t &&
            (t.__preactattr_ &&
              t.__preactattr_.ref &&
              t.__preactattr_.ref(null),
            (e.nextBase = t),
            y(t),
            (function(e) {
              var t = e.constructor.name;
              (U[t] || (U[t] = [])).push(e);
            })(e),
            x(t)),
          e.__ref && e.__ref(null);
      }
      function B(e, t) {
        (this._dirty = !0),
          (this.context = t),
          (this.props = e),
          (this.state = this.state || {});
      }
      function L(e, t, n) {
        return T(n, e, {}, !1, t, !1);
      }
      l(B.prototype, {
        setState: function(e, t) {
          var n = this.state;
          this.prevState || (this.prevState = l({}, n)),
            l(n, 'function' === typeof e ? e(n, this.props) : e),
            t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
            h(this);
        },
        forceUpdate: function(e) {
          e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
            R(this, 2);
        },
        render: function() {},
      });
      var M = {
        h: a,
        createElement: a,
        cloneElement: p,
        Component: B,
        render: L,
        rerender: f,
        options: i,
      };
      t.default = M;
    },
    715: function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = NaN,
          i = '[object Symbol]',
          o = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          u = parseInt,
          p = 'object' == typeof t && t && t.Object === Object && t,
          c = 'object' == typeof self && self && self.Object === Object && self,
          d = p || c || Function('return this')(),
          h = Object.prototype.toString,
          f = Math.max,
          g = Math.min,
          v = function() {
            return d.Date.now();
          };
        function m(e) {
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
                  h.call(e) == i)
              );
            })(e)
          )
            return r;
          if (m(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = m(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, '');
          var n = a.test(e);
          return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? r : +e;
        }
        e.exports = function(e, t, r) {
          var i,
            o,
            s,
            a,
            l,
            u,
            p = 0,
            c = !1,
            d = !1,
            h = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function b(t) {
            var n = i,
              r = o;
            return (i = o = void 0), (p = t), (a = e.apply(r, n));
          }
          function w(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (d && e - p >= s);
          }
          function P() {
            var e = v();
            if (w(e)) return S(e);
            l = setTimeout(
              P,
              (function(e) {
                var n = t - (e - u);
                return d ? g(n, s - (e - p)) : n;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), h && i ? b(e) : ((i = o = void 0), a);
          }
          function _() {
            var e = v(),
              n = w(e);
            if (((i = arguments), (o = this), (u = e), n)) {
              if (void 0 === l)
                return (function(e) {
                  return (p = e), (l = setTimeout(P, t)), c ? b(e) : a;
                })(u);
              if (d) return (l = setTimeout(P, t)), b(u);
            }
            return void 0 === l && (l = setTimeout(P, t)), a;
          }
          return (
            (t = y(t) || 0),
            m(r) &&
              ((c = !!r.leading),
              (s = (d = 'maxWait' in r) ? f(y(r.maxWait) || 0, t) : s),
              (h = 'trailing' in r ? !!r.trailing : h)),
            (_.cancel = function() {
              void 0 !== l && clearTimeout(l),
                (p = 0),
                (i = u = o = l = void 0);
            }),
            (_.flush = function() {
              return void 0 === l ? a : S(v());
            }),
            _
          );
        };
      }.call(this, n(53)));
    },
    728: function(e, t, n) {
      function r() {
        return (r =
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (o = function(e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))
          )
            return e;
          var n;
          if ('function' !== typeof e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if ('undefined' !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return s(e, arguments, l(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            a(r, e)
          );
        })(e);
      }
      function s(e, t, n) {
        return (s = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function(e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && a(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var u = n(1125),
        p = n(1758),
        c = n(1759),
        d = n(826),
        h = n(1567),
        f = n(2299),
        g = n(2301),
        v = n(1761),
        m = n(1762),
        y = n(1763),
        b = n(2303),
        w = n(2304),
        P = w.nullLogger,
        S = w.debugLogger,
        _ = n(2306),
        C = (function(e) {
          var t, n;
          function r() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((t =
                e.call.apply(e, [this].concat(r)) || this).isRestriction = !0),
              t
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            r
          );
        })(o(Error)),
        F = (function() {
          function e(e) {
            var t = this;
            this.defaultLocale = {
              strings: {
                youCanOnlyUploadX: {
                  0: 'You can only upload %{smart_count} file',
                  1: 'You can only upload %{smart_count} files',
                  2: 'You can only upload %{smart_count} files',
                },
                youHaveToAtLeastSelectX: {
                  0: 'You have to select at least %{smart_count} file',
                  1: 'You have to select at least %{smart_count} files',
                  2: 'You have to select at least %{smart_count} files',
                },
                exceedsSize: 'This file exceeds maximum allowed size of',
                youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
                companionError: 'Connection with Companion failed',
                companionAuthError: 'Authorization required',
                companionUnauthorizeHint:
                  'To unauthorize to your %{provider} account, please go to %{url}',
                failedToUpload: 'Failed to upload %{file}',
                noInternetConnection: 'No Internet connection',
                connectedToInternet: 'Connected to the Internet',
                noFilesFound: 'You have no files or folders here',
                selectX: {
                  0: 'Select %{smart_count}',
                  1: 'Select %{smart_count}',
                  2: 'Select %{smart_count}',
                },
                selectAllFilesFromFolderNamed:
                  'Select all files from folder %{name}',
                unselectAllFilesFromFolderNamed:
                  'Unselect all files from folder %{name}',
                selectFileNamed: 'Select file %{name}',
                unselectFileNamed: 'Unselect file %{name}',
                openFolderNamed: 'Open folder %{name}',
                cancel: 'Cancel',
                logOut: 'Log out',
                filter: 'Filter',
                resetFilter: 'Reset filter',
                loading: 'Loading...',
                authenticateWithTitle:
                  'Please authenticate with %{pluginName} to select files',
                authenticateWith: 'Connect to %{pluginName}',
                emptyFolderAdded: 'No files were added from empty folder',
                folderAdded: {
                  0: 'Added %{smart_count} file from %{folder}',
                  1: 'Added %{smart_count} files from %{folder}',
                  2: 'Added %{smart_count} files from %{folder}',
                },
              },
            };
            var n = {
              id: 'uppy',
              autoProceed: !1,
              allowMultipleUploads: !0,
              debug: !1,
              restrictions: {
                maxFileSize: null,
                maxNumberOfFiles: null,
                minNumberOfFiles: null,
                allowedFileTypes: null,
              },
              meta: {},
              onBeforeFileAdded: function(e, t) {
                return e;
              },
              onBeforeUpload: function(e) {
                return e;
              },
              store: g(),
              logger: P,
            };
            if (
              ((this.opts = r({}, n, e)),
              (this.opts.restrictions = r(
                {},
                n.restrictions,
                this.opts.restrictions
              )),
              e && e.logger && e.debug
                ? this.log(
                    'You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.',
                    'warning'
                  )
                : e && e.debug && (this.opts.logger = S),
              this.log('Using Core v' + this.constructor.VERSION),
              this.opts.restrictions.allowedFileTypes &&
                null !== this.opts.restrictions.allowedFileTypes &&
                !Array.isArray(this.opts.restrictions.allowedFileTypes))
            )
              throw new TypeError(
                '`restrictions.allowedFileTypes` must be an array'
              );
            (this.translator = new u([this.defaultLocale, this.opts.locale])),
              (this.locale = this.translator.locale),
              (this.i18n = this.translator.translate.bind(this.translator)),
              (this.i18nArray = this.translator.translateArray.bind(
                this.translator
              )),
              (this.plugins = {}),
              (this.getState = this.getState.bind(this)),
              (this.getPlugin = this.getPlugin.bind(this)),
              (this.setFileMeta = this.setFileMeta.bind(this)),
              (this.setFileState = this.setFileState.bind(this)),
              (this.log = this.log.bind(this)),
              (this.info = this.info.bind(this)),
              (this.hideInfo = this.hideInfo.bind(this)),
              (this.addFile = this.addFile.bind(this)),
              (this.removeFile = this.removeFile.bind(this)),
              (this.pauseResume = this.pauseResume.bind(this)),
              (this._calculateProgress = d(
                this._calculateProgress.bind(this),
                500,
                { leading: !0, trailing: !0 }
              )),
              (this.updateOnlineStatus = this.updateOnlineStatus.bind(this)),
              (this.resetProgress = this.resetProgress.bind(this)),
              (this.pauseAll = this.pauseAll.bind(this)),
              (this.resumeAll = this.resumeAll.bind(this)),
              (this.retryAll = this.retryAll.bind(this)),
              (this.cancelAll = this.cancelAll.bind(this)),
              (this.retryUpload = this.retryUpload.bind(this)),
              (this.upload = this.upload.bind(this)),
              (this.emitter = p()),
              (this.on = this.on.bind(this)),
              (this.off = this.off.bind(this)),
              (this.once = this.emitter.once.bind(this.emitter)),
              (this.emit = this.emitter.emit.bind(this.emitter)),
              (this.preProcessors = []),
              (this.uploaders = []),
              (this.postProcessors = []),
              (this.store = this.opts.store),
              this.setState({
                plugins: {},
                files: {},
                currentUploads: {},
                allowNewUpload: !0,
                capabilities: {
                  uploadProgress: b(),
                  individualCancellation: !0,
                  resumableUploads: !1,
                },
                totalProgress: 0,
                meta: r({}, this.opts.meta),
                info: { isHidden: !0, type: 'info', message: '' },
              }),
              (this._storeUnsubscribe = this.store.subscribe(function(e, n, r) {
                t.emit('state-update', e, n, r), t.updateAll(n);
              })),
              this.opts.debug &&
                'undefined' !== typeof window &&
                (window[this.opts.id] = this),
              this._addListeners();
          }
          var t,
            n,
            o,
            s = e.prototype;
          return (
            (s.on = function(e, t) {
              return this.emitter.on(e, t), this;
            }),
            (s.off = function(e, t) {
              return this.emitter.off(e, t), this;
            }),
            (s.updateAll = function(e) {
              this.iteratePlugins(function(t) {
                t.update(e);
              });
            }),
            (s.setState = function(e) {
              this.store.setState(e);
            }),
            (s.getState = function() {
              return this.store.getState();
            }),
            (s.setFileState = function(e, t) {
              var n;
              if (!this.getState().files[e])
                throw new Error(
                  'Can\u2019t set state for ' +
                    e +
                    ' (the file could have been removed)'
                );
              this.setState({
                files: r(
                  {},
                  this.getState().files,
                  ((n = {}), (n[e] = r({}, this.getState().files[e], t)), n)
                ),
              });
            }),
            (s.resetProgress = function() {
              var e = {
                  percentage: 0,
                  bytesUploaded: 0,
                  uploadComplete: !1,
                  uploadStarted: null,
                },
                t = r({}, this.getState().files),
                n = {};
              Object.keys(t).forEach(function(i) {
                var o = r({}, t[i]);
                (o.progress = r({}, o.progress, e)), (n[i] = o);
              }),
                this.setState({ files: n, totalProgress: 0 }),
                this.emit('reset-progress');
            }),
            (s.addPreProcessor = function(e) {
              this.preProcessors.push(e);
            }),
            (s.removePreProcessor = function(e) {
              var t = this.preProcessors.indexOf(e);
              -1 !== t && this.preProcessors.splice(t, 1);
            }),
            (s.addPostProcessor = function(e) {
              this.postProcessors.push(e);
            }),
            (s.removePostProcessor = function(e) {
              var t = this.postProcessors.indexOf(e);
              -1 !== t && this.postProcessors.splice(t, 1);
            }),
            (s.addUploader = function(e) {
              this.uploaders.push(e);
            }),
            (s.removeUploader = function(e) {
              var t = this.uploaders.indexOf(e);
              -1 !== t && this.uploaders.splice(t, 1);
            }),
            (s.setMeta = function(e) {
              var t = r({}, this.getState().meta, e),
                n = r({}, this.getState().files);
              Object.keys(n).forEach(function(t) {
                n[t] = r({}, n[t], { meta: r({}, n[t].meta, e) });
              }),
                this.log('Adding metadata:'),
                this.log(e),
                this.setState({ meta: t, files: n });
            }),
            (s.setFileMeta = function(e, t) {
              var n = r({}, this.getState().files);
              if (n[e]) {
                var i = r({}, n[e].meta, t);
                (n[e] = r({}, n[e], { meta: i })), this.setState({ files: n });
              } else
                this.log(
                  'Was trying to set metadata for a file that has been removed: ',
                  e
                );
            }),
            (s.getFile = function(e) {
              return this.getState().files[e];
            }),
            (s.getFiles = function() {
              var e = this.getState().files;
              return Object.keys(e).map(function(t) {
                return e[t];
              });
            }),
            (s._checkMinNumberOfFiles = function(e) {
              var t = this.opts.restrictions.minNumberOfFiles;
              if (Object.keys(e).length < t)
                throw new C(
                  '' + this.i18n('youHaveToAtLeastSelectX', { smart_count: t })
                );
            }),
            (s._checkRestrictions = function(e) {
              var t = this.opts.restrictions,
                n = t.maxFileSize,
                r = t.maxNumberOfFiles,
                i = t.allowedFileTypes;
              if (r && Object.keys(this.getState().files).length + 1 > r)
                throw new C(
                  '' + this.i18n('youCanOnlyUploadX', { smart_count: r })
                );
              if (
                i &&
                !i.some(function(t) {
                  return t.indexOf('/') > -1
                    ? !!e.type && f(e.type, t)
                    : '.' === t[0] &&
                        e.extension.toLowerCase() === t.substr(1).toLowerCase();
                })
              ) {
                var o = i.join(', ');
                throw new C(
                  this.i18n('youCanOnlyUploadFileTypes', { types: o })
                );
              }
              if (n && null != e.data.size && e.data.size > n)
                throw new C(this.i18n('exceedsSize') + ' ' + h(n));
            }),
            (s._showOrLogErrorAndThrow = function(e, t) {
              var n = void 0 === t ? {} : t,
                r = n.showInformer,
                i = void 0 === r || r,
                o = n.file,
                s = void 0 === o ? null : o,
                a = 'object' === typeof e ? e.message : e,
                l = 'object' === typeof e && e.details ? e.details : '';
              throw (e.isRestriction
                ? (this.log(a + ' ' + l), this.emit('restriction-failed', s, e))
                : this.log(a + ' ' + l, 'error'),
              i && this.info({ message: a, details: l }, 'error', 5e3),
              'object' === typeof e ? e : new Error(e));
            }),
            (s.addFile = function(e) {
              var t,
                n = this,
                i = this.getState(),
                o = i.files;
              !1 === i.allowNewUpload &&
                this._showOrLogErrorAndThrow(
                  new C('Cannot add new files: already uploading.'),
                  { file: e }
                );
              var s = v(e);
              e.type = s;
              var a,
                l = this.opts.onBeforeFileAdded(e, o);
              !1 === l &&
                this._showOrLogErrorAndThrow(
                  new C(
                    'Cannot add the file because onBeforeFileAdded returned false.'
                  ),
                  { showInformer: !1, file: e }
                ),
                'object' === typeof l && l && (e = l),
                (a = e.name
                  ? e.name
                  : 'image' === s.split('/')[0]
                  ? s.split('/')[0] + '.' + s.split('/')[1]
                  : 'noname');
              var u = m(a).extension,
                p = e.isRemote || !1,
                c = y(e);
              o[c] &&
                this._showOrLogErrorAndThrow(
                  new C(
                    "Cannot add the duplicate file '" +
                      a +
                      "', it already exists."
                  ),
                  { file: e }
                );
              var d = e.meta || {};
              (d.name = a), (d.type = s);
              var h = isFinite(e.data.size) ? e.data.size : null,
                f = {
                  source: e.source || '',
                  id: c,
                  name: a,
                  extension: u || '',
                  meta: r({}, this.getState().meta, d),
                  type: s,
                  data: e.data,
                  progress: {
                    percentage: 0,
                    bytesUploaded: 0,
                    bytesTotal: h,
                    uploadComplete: !1,
                    uploadStarted: null,
                  },
                  size: h,
                  isRemote: p,
                  remote: e.remote || '',
                  preview: e.preview,
                };
              try {
                this._checkRestrictions(f);
              } catch (g) {
                this._showOrLogErrorAndThrow(g, { file: f });
              }
              return (
                this.setState({ files: r({}, o, ((t = {}), (t[c] = f), t)) }),
                this.emit('file-added', f),
                this.log('Added file: ' + a + ', ' + c + ', mime type: ' + s),
                this.opts.autoProceed &&
                  !this.scheduledAutoProceed &&
                  (this.scheduledAutoProceed = setTimeout(function() {
                    (n.scheduledAutoProceed = null),
                      n.upload().catch(function(e) {
                        e.isRestriction || n.log(e.stack || e.message || e);
                      });
                  }, 4)),
                c
              );
            }),
            (s.removeFile = function(e) {
              var t = this,
                n = this.getState(),
                i = n.files,
                o = n.currentUploads,
                s = r({}, i),
                a = s[e];
              delete s[e];
              var l = r({}, o),
                u = [];
              Object.keys(l).forEach(function(t) {
                var n = o[t].fileIDs.filter(function(t) {
                  return t !== e;
                });
                0 !== n.length
                  ? (l[t] = r({}, o[t], { fileIDs: n }))
                  : u.push(t);
              }),
                this.setState(
                  r(
                    { currentUploads: l, files: s },
                    0 === Object.keys(s).length && { allowNewUpload: !0 }
                  )
                ),
                u.forEach(function(e) {
                  t._removeUpload(e);
                }),
                this._calculateTotalProgress(),
                this.emit('file-removed', a),
                this.log('File removed: ' + a.id);
            }),
            (s.pauseResume = function(e) {
              if (
                this.getState().capabilities.resumableUploads &&
                !this.getFile(e).uploadComplete
              ) {
                var t = !(this.getFile(e).isPaused || !1);
                return (
                  this.setFileState(e, { isPaused: t }),
                  this.emit('upload-pause', e, t),
                  t
                );
              }
            }),
            (s.pauseAll = function() {
              var e = r({}, this.getState().files);
              Object.keys(e)
                .filter(function(t) {
                  return (
                    !e[t].progress.uploadComplete && e[t].progress.uploadStarted
                  );
                })
                .forEach(function(t) {
                  var n = r({}, e[t], { isPaused: !0 });
                  e[t] = n;
                }),
                this.setState({ files: e }),
                this.emit('pause-all');
            }),
            (s.resumeAll = function() {
              var e = r({}, this.getState().files);
              Object.keys(e)
                .filter(function(t) {
                  return (
                    !e[t].progress.uploadComplete && e[t].progress.uploadStarted
                  );
                })
                .forEach(function(t) {
                  var n = r({}, e[t], { isPaused: !1, error: null });
                  e[t] = n;
                }),
                this.setState({ files: e }),
                this.emit('resume-all');
            }),
            (s.retryAll = function() {
              var e = r({}, this.getState().files),
                t = Object.keys(e).filter(function(t) {
                  return e[t].error;
                });
              t.forEach(function(t) {
                var n = r({}, e[t], { isPaused: !1, error: null });
                e[t] = n;
              }),
                this.setState({ files: e, error: null }),
                this.emit('retry-all', t);
              var n = this._createUpload(t);
              return this._runUpload(n);
            }),
            (s.cancelAll = function() {
              var e = this;
              this.emit('cancel-all'),
                Object.keys(this.getState().files).forEach(function(t) {
                  e.removeFile(t);
                }),
                this.setState({ totalProgress: 0, error: null });
            }),
            (s.retryUpload = function(e) {
              this.setFileState(e, { error: null, isPaused: !1 }),
                this.emit('upload-retry', e);
              var t = this._createUpload([e]);
              return this._runUpload(t);
            }),
            (s.reset = function() {
              this.cancelAll();
            }),
            (s._calculateProgress = function(e, t) {
              if (this.getFile(e.id)) {
                var n = isFinite(t.bytesTotal) && t.bytesTotal > 0;
                this.setFileState(e.id, {
                  progress: r({}, this.getFile(e.id).progress, {
                    bytesUploaded: t.bytesUploaded,
                    bytesTotal: t.bytesTotal,
                    percentage: n
                      ? Math.round((t.bytesUploaded / t.bytesTotal) * 100)
                      : 0,
                  }),
                }),
                  this._calculateTotalProgress();
              } else
                this.log(
                  'Not setting progress for a file that has been removed: ' +
                    e.id
                );
            }),
            (s._calculateTotalProgress = function() {
              var e = this.getFiles().filter(function(e) {
                return e.progress.uploadStarted;
              });
              if (0 === e.length)
                return (
                  this.emit('progress', 0),
                  void this.setState({ totalProgress: 0 })
                );
              var t = e.filter(function(e) {
                  return null != e.progress.bytesTotal;
                }),
                n = e.filter(function(e) {
                  return null == e.progress.bytesTotal;
                });
              if (0 !== t.length) {
                var r = t.reduce(function(e, t) {
                    return e + t.progress.bytesTotal;
                  }, 0),
                  i = r / t.length;
                r += i * n.length;
                var o = 0;
                t.forEach(function(e) {
                  o += e.progress.bytesUploaded;
                }),
                  n.forEach(function(e) {
                    o += (i * (e.progress.percentage || 0)) / 100;
                  });
                var s = 0 === r ? 0 : Math.round((o / r) * 100);
                s > 100 && (s = 100),
                  this.setState({ totalProgress: s }),
                  this.emit('progress', s);
              } else {
                var a = 100 * e.length,
                  l = n.reduce(function(e, t) {
                    return e + t.progress.percentage;
                  }, 0),
                  u = Math.round((l / a) * 100);
                this.setState({ totalProgress: u });
              }
            }),
            (s._addListeners = function() {
              var e = this;
              this.on('error', function(t) {
                e.setState({ error: t.message || 'Unknown error' });
              }),
                this.on('upload-error', function(t, n, r) {
                  e.setFileState(t.id, {
                    error: n.message || 'Unknown error',
                    response: r,
                  }),
                    e.setState({ error: n.message });
                  var i = e.i18n('failedToUpload', { file: t.name });
                  'object' === typeof n &&
                    n.message &&
                    (i = { message: i, details: n.message }),
                    e.info(i, 'error', 5e3);
                }),
                this.on('upload', function() {
                  e.setState({ error: null });
                }),
                this.on('upload-started', function(t, n) {
                  e.getFile(t.id)
                    ? e.setFileState(t.id, {
                        progress: {
                          uploadStarted: Date.now(),
                          uploadComplete: !1,
                          percentage: 0,
                          bytesUploaded: 0,
                          bytesTotal: t.size,
                        },
                      })
                    : e.log(
                        'Not setting progress for a file that has been removed: ' +
                          t.id
                      );
                }),
                this.on('upload-progress', this._calculateProgress),
                this.on('upload-success', function(t, n) {
                  var i = e.getFile(t.id).progress;
                  e.setFileState(t.id, {
                    progress: r({}, i, {
                      uploadComplete: !0,
                      percentage: 100,
                      bytesUploaded: i.bytesTotal,
                    }),
                    response: n,
                    uploadURL: n.uploadURL,
                    isPaused: !1,
                  }),
                    e._calculateTotalProgress();
                }),
                this.on('preprocess-progress', function(t, n) {
                  e.getFile(t.id)
                    ? e.setFileState(t.id, {
                        progress: r({}, e.getFile(t.id).progress, {
                          preprocess: n,
                        }),
                      })
                    : e.log(
                        'Not setting progress for a file that has been removed: ' +
                          t.id
                      );
                }),
                this.on('preprocess-complete', function(t) {
                  if (e.getFile(t.id)) {
                    var n = r({}, e.getState().files);
                    (n[t.id] = r({}, n[t.id], {
                      progress: r({}, n[t.id].progress),
                    })),
                      delete n[t.id].progress.preprocess,
                      e.setState({ files: n });
                  } else e.log('Not setting progress for a file that has been removed: ' + t.id);
                }),
                this.on('postprocess-progress', function(t, n) {
                  e.getFile(t.id)
                    ? e.setFileState(t.id, {
                        progress: r({}, e.getState().files[t.id].progress, {
                          postprocess: n,
                        }),
                      })
                    : e.log(
                        'Not setting progress for a file that has been removed: ' +
                          t.id
                      );
                }),
                this.on('postprocess-complete', function(t) {
                  if (e.getFile(t.id)) {
                    var n = r({}, e.getState().files);
                    (n[t.id] = r({}, n[t.id], {
                      progress: r({}, n[t.id].progress),
                    })),
                      delete n[t.id].progress.postprocess,
                      e.setState({ files: n });
                  } else e.log('Not setting progress for a file that has been removed: ' + t.id);
                }),
                this.on('restored', function() {
                  e._calculateTotalProgress();
                }),
                'undefined' !== typeof window &&
                  window.addEventListener &&
                  (window.addEventListener('online', function() {
                    return e.updateOnlineStatus();
                  }),
                  window.addEventListener('offline', function() {
                    return e.updateOnlineStatus();
                  }),
                  setTimeout(function() {
                    return e.updateOnlineStatus();
                  }, 3e3));
            }),
            (s.updateOnlineStatus = function() {
              'undefined' === typeof window.navigator.onLine ||
              window.navigator.onLine
                ? (this.emit('is-online'),
                  this.wasOffline &&
                    (this.emit('back-online'),
                    this.info(this.i18n('connectedToInternet'), 'success', 3e3),
                    (this.wasOffline = !1)))
                : (this.emit('is-offline'),
                  this.info(this.i18n('noInternetConnection'), 'error', 0),
                  (this.wasOffline = !0));
            }),
            (s.getID = function() {
              return this.opts.id;
            }),
            (s.use = function(e, t) {
              if ('function' !== typeof e)
                throw new TypeError(
                  'Expected a plugin class, but got ' +
                    (null === e ? 'null' : typeof e) +
                    '. Please verify that the plugin was imported and spelled correctly.'
                );
              var n = new e(this, t),
                r = n.id;
              if (((this.plugins[n.type] = this.plugins[n.type] || []), !r))
                throw new Error('Your plugin must have an id');
              if (!n.type) throw new Error('Your plugin must have a type');
              var i = this.getPlugin(r);
              if (i) {
                var o =
                  "Already found a plugin named '" +
                  i.id +
                  "'. Tried to use: '" +
                  r +
                  "'.\nUppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.";
                throw new Error(o);
              }
              return (
                e.VERSION && this.log('Using ' + r + ' v' + e.VERSION),
                this.plugins[n.type].push(n),
                n.install(),
                this
              );
            }),
            (s.getPlugin = function(e) {
              var t = null;
              return (
                this.iteratePlugins(function(n) {
                  if (n.id === e) return (t = n), !1;
                }),
                t
              );
            }),
            (s.iteratePlugins = function(e) {
              var t = this;
              Object.keys(this.plugins).forEach(function(n) {
                t.plugins[n].forEach(e);
              });
            }),
            (s.removePlugin = function(e) {
              this.log('Removing plugin ' + e.id),
                this.emit('plugin-remove', e),
                e.uninstall && e.uninstall();
              var t = this.plugins[e.type].slice(),
                n = t.indexOf(e);
              -1 !== n && (t.splice(n, 1), (this.plugins[e.type] = t));
              var r = this.getState();
              delete r.plugins[e.id], this.setState(r);
            }),
            (s.close = function() {
              var e = this;
              this.log(
                'Closing Uppy instance ' +
                  this.opts.id +
                  ': removing all files and uninstalling plugins'
              ),
                this.reset(),
                this._storeUnsubscribe(),
                this.iteratePlugins(function(t) {
                  e.removePlugin(t);
                });
            }),
            (s.info = function(e, t, n) {
              void 0 === t && (t = 'info'), void 0 === n && (n = 3e3);
              var r = 'object' === typeof e;
              this.setState({
                info: {
                  isHidden: !1,
                  type: t,
                  message: r ? e.message : e,
                  details: r ? e.details : null,
                },
              }),
                this.emit('info-visible'),
                clearTimeout(this.infoTimeoutID),
                (this.infoTimeoutID =
                  0 !== n ? setTimeout(this.hideInfo, n) : void 0);
            }),
            (s.hideInfo = function() {
              var e = r({}, this.getState().info, { isHidden: !0 });
              this.setState({ info: e }), this.emit('info-hidden');
            }),
            (s.log = function(e, t) {
              var n = this.opts.logger;
              switch (t) {
                case 'error':
                  n.error(e);
                  break;
                case 'warning':
                  n.warn(e);
                  break;
                default:
                  n.debug(e);
              }
            }),
            (s.run = function() {
              return (
                this.log('Calling run() is no longer necessary.', 'warning'),
                this
              );
            }),
            (s.restore = function(e) {
              return (
                this.log('Core: attempting to restore upload "' + e + '"'),
                this.getState().currentUploads[e]
                  ? this._runUpload(e)
                  : (this._removeUpload(e),
                    Promise.reject(new Error('Nonexistent upload')))
              );
            }),
            (s._createUpload = function(e) {
              var t,
                n = this.getState(),
                i = n.allowNewUpload,
                o = n.currentUploads;
              if (!i)
                throw new Error(
                  'Cannot create a new upload: already uploading.'
                );
              var s = c();
              return (
                this.emit('upload', { id: s, fileIDs: e }),
                this.setState({
                  allowNewUpload: !1 !== this.opts.allowMultipleUploads,
                  currentUploads: r(
                    {},
                    o,
                    ((t = {}), (t[s] = { fileIDs: e, step: 0, result: {} }), t)
                  ),
                }),
                s
              );
            }),
            (s._getUpload = function(e) {
              return this.getState().currentUploads[e];
            }),
            (s.addResultData = function(e, t) {
              var n;
              if (this._getUpload(e)) {
                var i = this.getState().currentUploads,
                  o = r({}, i[e], { result: r({}, i[e].result, t) });
                this.setState({
                  currentUploads: r({}, i, ((n = {}), (n[e] = o), n)),
                });
              } else
                this.log(
                  'Not setting result for an upload that has been removed: ' + e
                );
            }),
            (s._removeUpload = function(e) {
              var t = r({}, this.getState().currentUploads);
              delete t[e], this.setState({ currentUploads: t });
            }),
            (s._runUpload = function(e) {
              var t = this,
                n = this.getState().currentUploads[e].step,
                i = [].concat(
                  this.preProcessors,
                  this.uploaders,
                  this.postProcessors
                ),
                o = Promise.resolve();
              return (
                i.forEach(function(i, s) {
                  s < n ||
                    (o = o
                      .then(function() {
                        var n,
                          o = t.getState().currentUploads,
                          a = o[e];
                        if (a) {
                          var l = r({}, a, { step: s });
                          return (
                            t.setState({
                              currentUploads: r(
                                {},
                                o,
                                ((n = {}), (n[e] = l), n)
                              ),
                            }),
                            i(l.fileIDs, e)
                          );
                        }
                      })
                      .then(function(e) {
                        return null;
                      }));
                }),
                o.catch(function(n) {
                  t.emit('error', n, e), t._removeUpload(e);
                }),
                o
                  .then(function() {
                    var n = t.getState().currentUploads[e];
                    if (n) {
                      var r = n.fileIDs.map(function(e) {
                          return t.getFile(e);
                        }),
                        i = r.filter(function(e) {
                          return !e.error;
                        }),
                        o = r.filter(function(e) {
                          return e.error;
                        });
                      t.addResultData(e, {
                        successful: i,
                        failed: o,
                        uploadID: e,
                      });
                    }
                  })
                  .then(function() {
                    var n = t.getState().currentUploads;
                    if (n[e]) {
                      var r = n[e].result;
                      return t.emit('complete', r), t._removeUpload(e), r;
                    }
                  })
                  .then(function(n) {
                    return (
                      null == n &&
                        t.log(
                          'Not setting result for an upload that has been removed: ' +
                            e
                        ),
                      n
                    );
                  })
              );
            }),
            (s.upload = function() {
              var e = this;
              this.plugins.uploader ||
                this.log('No uploader type plugins are used', 'warning');
              var t = this.getState().files,
                n = this.opts.onBeforeUpload(t);
              return !1 === n
                ? Promise.reject(
                    new Error(
                      'Not starting the upload because onBeforeUpload returned false'
                    )
                  )
                : (n && 'object' === typeof n && (t = n),
                  Promise.resolve()
                    .then(function() {
                      return e._checkMinNumberOfFiles(t);
                    })
                    .then(function() {
                      var n = e.getState().currentUploads,
                        r = Object.keys(n).reduce(function(e, t) {
                          return e.concat(n[t].fileIDs);
                        }, []),
                        i = [];
                      Object.keys(t).forEach(function(t) {
                        var n = e.getFile(t);
                        n.progress.uploadStarted ||
                          -1 !== r.indexOf(t) ||
                          i.push(n.id);
                      });
                      var o = e._createUpload(i);
                      return e._runUpload(o);
                    })
                    .catch(function(t) {
                      e._showOrLogErrorAndThrow(t);
                    }));
            }),
            (t = e),
            (n = [
              {
                key: 'state',
                get: function() {
                  return this.getState();
                },
              },
            ]) && i(t.prototype, n),
            o && i(t, o),
            e
          );
        })();
      (F.VERSION = '1.5.1'),
        (e.exports = function(e) {
          return new F(e);
        }),
        (e.exports.Uppy = F),
        (e.exports.Plugin = _),
        (e.exports.debugLogger = S);
    },
    826: function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = NaN,
          i = '[object Symbol]',
          o = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          u = parseInt,
          p = 'object' == typeof t && t && t.Object === Object && t,
          c = 'object' == typeof self && self && self.Object === Object && self,
          d = p || c || Function('return this')(),
          h = Object.prototype.toString,
          f = Math.max,
          g = Math.min,
          v = function() {
            return d.Date.now();
          };
        function m(e, t, r) {
          var i,
            o,
            s,
            a,
            l,
            u,
            p = 0,
            c = !1,
            d = !1,
            h = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function m(t) {
            var n = i,
              r = o;
            return (i = o = void 0), (p = t), (a = e.apply(r, n));
          }
          function w(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (d && e - p >= s);
          }
          function P() {
            var e = v();
            if (w(e)) return S(e);
            l = setTimeout(
              P,
              (function(e) {
                var n = t - (e - u);
                return d ? g(n, s - (e - p)) : n;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), h && i ? m(e) : ((i = o = void 0), a);
          }
          function _() {
            var e = v(),
              n = w(e);
            if (((i = arguments), (o = this), (u = e), n)) {
              if (void 0 === l)
                return (function(e) {
                  return (p = e), (l = setTimeout(P, t)), c ? m(e) : a;
                })(u);
              if (d) return (l = setTimeout(P, t)), m(u);
            }
            return void 0 === l && (l = setTimeout(P, t)), a;
          }
          return (
            (t = b(t) || 0),
            y(r) &&
              ((c = !!r.leading),
              (s = (d = 'maxWait' in r) ? f(b(r.maxWait) || 0, t) : s),
              (h = 'trailing' in r ? !!r.trailing : h)),
            (_.cancel = function() {
              void 0 !== l && clearTimeout(l),
                (p = 0),
                (i = u = o = l = void 0);
            }),
            (_.flush = function() {
              return void 0 === l ? a : S(v());
            }),
            _
          );
        }
        function y(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function b(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == typeof e ||
                ((function(e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  h.call(e) == i)
              );
            })(e)
          )
            return r;
          if (y(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = y(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, '');
          var n = a.test(e);
          return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? r : +e;
        }
        e.exports = function(e, t, r) {
          var i = !0,
            o = !0;
          if ('function' != typeof e) throw new TypeError(n);
          return (
            y(r) &&
              ((i = 'leading' in r ? !!r.leading : i),
              (o = 'trailing' in r ? !!r.trailing : o)),
            m(e, t, { leading: i, maxWait: t, trailing: o })
          );
        };
      }.call(this, n(53)));
    },
    960: function(e, t, n) {
      var r = n(573).h;
      e.exports = {
        defaultPickerIcon: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              width: '30',
              height: '30',
              viewBox: '0 0 30 30',
            },
            r('path', {
              d:
                'M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z',
            })
          );
        },
        iconCopy: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '51',
              height: '51',
              viewBox: '0 0 51 51',
            },
            r('path', {
              d:
                'M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z',
            }),
            r('path', {
              d:
                'M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z',
            })
          );
        },
        iconResume: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 44 44',
            },
            r('polygon', {
              class: 'play',
              transform: 'translate(6, 5.5)',
              points: '13 21.6666667 13 11 21 16.3333333',
            })
          );
        },
        iconPause: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25px',
              height: '25px',
              viewBox: '0 0 44 44',
            },
            r(
              'g',
              { transform: 'translate(18, 17)', class: 'pause' },
              r('rect', { x: '0', y: '0', width: '2', height: '10', rx: '0' }),
              r('rect', { x: '6', y: '0', width: '2', height: '10', rx: '0' })
            )
          );
        },
        iconRetry: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon retry',
              width: '28',
              height: '31',
              viewBox: '0 0 16 19',
            },
            r('path', { d: 'M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z' }),
            r('path', { d: 'M7.9 3H10v2H7.9z' }),
            r('path', { d: 'M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z' }),
            r('path', { d: 'M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z' })
          );
        },
        localIcon: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              fill: '#607d8b',
              width: '27',
              height: '25',
              viewBox: '0 0 27 25',
            },
            r('path', {
              d:
                'M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z',
            }),
            r('path', {
              d:
                'M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z',
            })
          );
        },
        checkIcon: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon UppyIcon-check',
              width: '13',
              height: '9',
              viewBox: '0 0 13 9',
            },
            r('polygon', {
              points:
                '5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647',
            })
          );
        },
        iconAudio: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
            },
            r('path', {
              d:
                'M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z',
              fill: '#049BCF',
              'fill-rule': 'nonzero',
            })
          );
        },
        iconVideo: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
            },
            r('path', {
              d:
                'M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z',
              fill: '#19AF67',
              'fill-rule': 'nonzero',
            })
          );
        },
        iconPDF: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
            },
            r('path', {
              d:
                'M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z',
              fill: '#E2514A',
              'fill-rule': 'nonzero',
            })
          );
        },
        iconFile: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
            },
            r(
              'g',
              { fill: '#A7AFB7', 'fill-rule': 'nonzero' },
              r('path', {
                d:
                  'M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z',
              }),
              r('path', { d: 'M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z' })
            )
          );
        },
        iconText: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '25',
              height: '25',
              viewBox: '0 0 25 25',
            },
            r('path', {
              d:
                'M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z',
              fill: '#5A5E69',
              'fill-rule': 'nonzero',
            })
          );
        },
        iconCopyLink: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '14',
              height: '14',
              viewBox: '0 0 14 12',
            },
            r('path', {
              d:
                'M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z',
            })
          );
        },
        iconPencil: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '14',
              height: '14',
              viewBox: '0 0 14 14',
            },
            r(
              'g',
              { 'fill-rule': 'evenodd' },
              r('path', {
                d:
                  'M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z',
                'fill-rule': 'nonzero',
              }),
              r('rect', {
                x: '1',
                y: '12.293',
                width: '11',
                height: '1',
                rx: '.5',
              }),
              r('path', {
                'fill-rule': 'nonzero',
                d: 'M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z',
              })
            )
          );
        },
        iconCross: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
            },
            r('path', {
              d:
                'M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z',
            }),
            r('path', {
              fill: '#FFF',
              d:
                'M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z',
            })
          );
        },
        iconPlus: function() {
          return r(
            'svg',
            {
              'aria-hidden': 'true',
              focusable: 'false',
              class: 'UppyIcon',
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
            },
            r('path', {
              d:
                'M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z',
            })
          );
        },
      };
    },
  },
]);
//# sourceMappingURL=34.977a8ddb.chunk.js.map
