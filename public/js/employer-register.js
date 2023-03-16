function dropdownMenu() {
    $(".dropdown-mobile").each((function() {
        $(this).on("click", (function() {
            $(this).hasClass("show-menu") ? $(".dropdown-mobile").removeClass("show-menu") : ($(".dropdown-mobile").removeClass("show-menu"), $(this).addClass("show-menu")), $(this).hasClass("dropdown-2-menu") && $(this).addClass("show-menu")
        }))
    })), $(".dropdown-mobile-2").each((function() {
        $(this).on("click", (function() {
            $(".dropdown-2-menu").addClass("show-menu"), $(this).hasClass("show-menu-2") ? $(".dropdown-mobile-2").removeClass("show-menu-2") : ($(".dropdown-mobile-2").removeClass("show-menu-2"), $(this).addClass("show-menu-2"))
        }))
    }))
}

function menuMobile() {
    $(".button-hambuger").on("click", (function() {
        $(".mobile-menu").toggleClass("show"), $("html").toggleClass("menu-mobile-active"), $(".back-drop").addClass("active"), $("html").hasClass("menu-mobile-active") ? $(".back-drop").addClass("active") : $(".back-drop").removeClass("active")
    })), $(".back-drop").on("click", (function() {
        $(".mobile-menu").removeClass("show"), $("html").removeClass("menu-mobile-active"), $(".back-drop").removeClass("active"), $("header .main-login .dropdown-menu").slideUp(), $(".edit-db-career-goals").removeClass("active"), $(".edit-db-outstanding-achievements").removeClass("active")
    })), $(".dropdown-search-jobs").on("click", (function() {
        $(".dropdown-search-jobs .dropdown-menu").slideToggle()
    })), $("header .main-login .title-login").on("click", (function() {
        $("header .main-login .dropdown-menu").slideToggle(), $(".back-drop").toggleClass("active")
    }))
}

function clickMyCareerBuilder() {
    $("header .mobile-menu .header-bottom-bottom .authentication-links .My-CareerBuilder").on("click", (function() {
        $("header .mobile-menu .profile .back-menu-normal").addClass("active"), $("header .mobile-menu .menu").addClass("active"), $("header .mobile-menu .menu .menu-normal").addClass("active"), $("header .mobile-menu .menu .menu-logged").addClass("active"), $("header .mobile-menu .header-bottom-bottom .authentication-links").addClass("active")
    })), $("header .mobile-menu .profile .back-menu-normal").on("click", (function() {
        $("header .mobile-menu .profile .back-menu-normal").removeClass("active"), $("header .mobile-menu .menu").removeClass("active"), $("header .mobile-menu .menu .menu-normal").removeClass("active"), $("header .mobile-menu .menu .menu-logged").removeClass("active"), $("header .mobile-menu .header-bottom-bottom .authentication-links").removeClass("active")
    }))
}

function menuDashBoard() {
    $("header .mobile-menu .menu .menu-logged ul .menu-dashboard").on("click", (function() {
        $("header .mobile-menu .menu .menu-logged").addClass("active-2"), $("header .mobile-menu .menu .menu-logged ul .menu-dashboard .list-unstyled").removeClass("active"), $(this).find(".list-unstyled").addClass("active"), $("header .mobile-menu .profile .back-menu-normal-2").addClass("active"), $("header .mobile-menu .profile .back-menu-normal").removeClass("active")
    })), $("header .mobile-menu .profile .back-menu-normal-2").on("click", (function() {
        $(this).removeClass("active"), $("header .mobile-menu .profile .back-menu-normal").addClass("active"), $("header .mobile-menu .menu .menu-logged ul .menu-dashboard .list-unstyled").removeClass("active"), $("header .mobile-menu .menu .menu-logged").removeClass("active-2")
    }))
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        p = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, o = (n = n || g).createElement("script");
        if (o.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var x = "3.5.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        };

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !h(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e) || (t = r(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (C(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }));
    var T = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            T = 0,
            k = ue(),
            E = ue(),
            A = ue(),
            S = ue(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            j = [],
            $ = j.pop,
            L = j.push,
            q = j.push,
            H = j.slice,
            M = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            F = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            X = new RegExp(I),
            V = new RegExp("^" + R + "$"),
            G = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                d()
            },
            ae = xe((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            q.apply(j = H.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
        } catch (t) {
            q = {
                apply: j.length ? function(e, t) {
                    L.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, l, c, f, h, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && (d(t), t = t || p, m)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === w && (U.test(e) || _.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                        v = h.join(",")
                    }
                    try {
                        return q.apply(r, y.querySelectorAll(v)), r
                    } catch (t) {
                        S(e, !0)
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function le(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return le((function(t) {
                return t = +t, le((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, m = !o(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                    return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ce((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ce((function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce((function(e) {
                    return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ce((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ce((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", I)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? M(c, e) - M(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }), p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (d(e), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    S(t, !0)
                }
                return 0 < se(t, p, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != p && d(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != p && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(W, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (b = (p = (l = (c = (f = (d = g)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [C, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b)
                                    for (;
                                        (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && 0 <= b / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = M(e, o[a])] = !(n[r] = o[a])
                        })) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: le((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[x] ? le((function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: le((function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    })),
                    contains: le((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    })),
                    lang: le((function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    })),
                    gt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = pe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = he(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, d = [C, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === C && l[1] === s) return d[2] = l[2];
                                if ((c[o] = d)[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), le((function(o, a, s, u) {
                var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    m = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !o && t ? m : Ce(m, d, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : g;
                if (n && n(g, v, s, u), r)
                    for (l = Ce(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(g[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(g[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && -1 < (l = i ? M(o, f) : d[c]) && (o[l] = !(a[l] = f))
                    }
                } else v = Ce(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : q.apply(a, v)
            }))
        }

        function ke(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe((function(e) {
                    return e === t
                }), s, !0), f = xe((function(e) {
                    return -1 < M(t, e)
                }), s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) d = [xe(we(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return Te(1 < u && we(d), 1 < u && be(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && ke(e.slice(u, i)), i < o && ke(e = e.slice(i)), i < o && be(e))
                    }
                    d.push(n)
                } return we(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, o, s, u, c, f = [],
                h = [],
                g = A[e + " "];
            if (!g) {
                for (t || (t = a(e)), n = t.length; n--;)(g = ke(t[n]))[x] ? f.push(g) : h.push(g);
                (g = A(e, (i = h, s = 0 < (o = f).length, u = 0 < i.length, c = function(e, t, n, a, c) {
                    var f, h, g, v = 0,
                        y = "0",
                        b = e && [],
                        x = [],
                        w = l,
                        T = e || u && r.find.TAG("*", c),
                        k = C += null == w ? 1 : Math.random() || .1,
                        E = T.length;
                    for (c && (l = t == p || t || c); y !== E && null != (f = T[y]); y++) {
                        if (u && f) {
                            for (h = 0, t || f.ownerDocument == p || (d(f), n = !m); g = i[h++];)
                                if (g(f, t || p, n)) {
                                    a.push(f);
                                    break
                                } c && (C = k)
                        }
                        s && ((f = !g && f) && v--, e && b.push(f))
                    }
                    if (v += y, s && y !== v) {
                        for (h = 0; g = o[h++];) g(b, x, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || x[y] || (x[y] = $.call(a));
                            x = Ce(x)
                        }
                        q.apply(a, x), c && !e && 0 < x.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return c && (C = k, l = w), b
                }, s ? le(c) : c))).selector = e
            }
            return g
        }, u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, d = "function" == typeof e && e,
                p = !i && a(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if (2 < (u = p[0] = p[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && be(u))) return q.apply(n, i), n;
                        break
                    }
            }
            return (d || s(e, p))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(N).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        })), ce((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || fe("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || fe("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ce((function(e) {
            return null == e.getAttribute("disabled")
        })) || fe(O, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), se
    }(e);
    w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;
    var k = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = w.expr.match.needsContext;

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return h(t) ? w.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? w.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function(e) {
            return -1 < s.call(t, e) !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length
        }
    });
    var j, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), N.test(r[1]) && w.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = g.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, j = w(g);
    var L = /^(?:parents|prev(?:Until|All))/,
        q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!A.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (q[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var M = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function P(e) {
        throw e
    }

    function R(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(M) || [], (function(e, t) {
            n[t] = !0
        })), n) : w.extend({}, e);
        var r, i, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || e.once, o = r = !0; u.length; l = -1)
                    for (i = u.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && (l = s.length, i = !1);
                e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
            },
            f = {
                add: function() {
                    return s && (i && !r && (l = s.length - 1, u.push(i)), function t(n) {
                        w.each(n, (function(n, r) {
                            h(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== b(r) && t(r)
                        }))
                    }(arguments), i && !r && c()), this
                },
                remove: function() {
                    return w.each(arguments, (function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], i || r || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred((function(t) {
                            w.each(n, (function(n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                o[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, h(l) ? i ? l.call(e, a(o, n, O, i), a(o, n, P, i)) : (o++, l.call(e, a(o, n, O, i), a(o, n, P, i), a(o, n, O, n.notifyWith))) : (r !== O && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (r !== P && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred((function(e) {
                            n[0][3].add(a(0, e, h(i) ? i : O, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : O)), n[2][3].add(a(0, e, h(r) ? r : P))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, (function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add((function() {
                    r = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            })), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
            for (; n--;) R(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var I = w.Deferred();

    function W() {
        g.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready()
    }
    w.fn.ready = function(e) {
        return I.then(e).catch((function(e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || I.resolveWith(g, [w])
        }
    }), w.ready.then = I.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        F = /^-ms-/,
        _ = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(F, "ms-").replace(_, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = w.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(M) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : B(this, (function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                w.dequeue(e, t)
            }), o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = g.documentElement,
        ie = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = w.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = g.createDocumentFragment().appendChild(g.createElement("div")), (fe = g.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", p.option = !!ce.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && -1 < w.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n)
            for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    var xe = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function ke() {
        return !1
    }

    function Ee(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
            w.event.add(this, t, i, r, n)
        }))
    }

    function Se(e, t, n) {
        n ? (Y.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else a.length && (Y.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, Te)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = Y.get(e);
            if (V(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (u = g.events) || (u = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(M) || [""]).length; l--;) p = m = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = w.event.special[p] || {}, c = w.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = Y.hasData(e) && Y.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(M) || [""]).length; l--;)
                    if (p = m = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = w.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || w.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) w.event.remove(e, p + t[l], n, r, !0);
                w.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = w.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = w.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = w.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < w(i, this).index(l) : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && Se(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Se(this, e, Ee), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function() {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $e(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = w.extend({}, o), Q.set(t, a))
        }
    }

    function Me(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0,
            d = e.length,
            m = d - 1,
            g = t[0],
            v = h(g);
        if (v || 1 < d && "string" == typeof g && !p.checkClone && De.test(g)) return e.each((function(i) {
            var o = e.eq(i);
            v && (t[0] = g.call(this, i, o.html())), Me(o, t, n, r)
        }));
        if (d && (a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = w.map(ge(i, "script"), Le)).length; f < d; f++) l = i, f !== m && (l = w.clone(l, !0, !0), u && w.merge(s, ge(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, qe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : y(l.textContent.replace(je, ""), l, c))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) He(o[r], a[r]);
                else He(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, (function(e) {
                return void 0 === e ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Me(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = $e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Me(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Me(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return w.clone(this, e, t)
            }))
        },
        html: function(e) {
            return B(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Me(this, arguments, (function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ze = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !p.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Be(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = g.createElement("div"),
            c = g.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = g.createElement("table"), n = g.createElement("tr"), r = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = 3 < parseInt(i.height), re.removeChild(t)), s
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        _e = g.createElement("div").style,
        Ue = {};

    function Xe(e) {
        return w.cssProps[e] || Ue[e] || (e in _e ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                if ((e = Fe[n] + t) in _e) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Re(e),
            i = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && i || !p.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : ze(e, Ye, (function() {
                    return Ze(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var i, o = Re(e),
                    a = !p.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                    u = r ? Ke(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(0, n, u)
            }
        }
    })), w.cssHooks.marginLeft = Be(p.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Je)
    })), w.fn.extend({
        css: function(e, t) {
            return B(this, (function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = et.prototype.init, w.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
    }

    function ut() {
        return e.setTimeout((function() {
            tt = void 0
        })), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(e, t, n) {
        var r, i, o = 0,
            a = ft.prefilters.length,
            s = w.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = tt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = ft.prefilters[o].call(l, e, c, l.opts)) return h(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, ct, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                m = e.nodeType && ae(e),
                g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always((function() {
                    d.always((function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    }))
                }))), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        m = !0
                    }
                    p[r] = g && g[r] || w.style(e, r)
                } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = w.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (d.done((function() {
                        h.display = l
                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }))), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
                    display: l
                }), o && (g.hidden = !m), m && le([e], !0), d.done((function() {
                    for (r in m || le([e]), Y.remove(e, "fxshow"), p) w.style(e, r, p[r])
                }))), u = ct(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            h(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function() {
                    var t = ft(this, w.extend({}, e), o);
                    (i || Y.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = Y.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = Y.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
        }
    })), w.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    })), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), tt = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        nt || (nt = !0, st())
    }, w.fx.stop = function() {
        nt = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }))
    }, rt = g.createElement("input"), it = g.createElement("select").appendChild(g.createElement("option")), rt.type = "checkbox", p.checkOn = "" !== rt.value, p.optSelected = it.selected, (rt = g.createElement("input")).value = "t", rt.type = "radio", p.radioValue = "t" === rt.value;
    var dt, pt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return B(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = pt[t] || w.find.attr;
        pt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
        }
    }));
    var ht = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function gt(e) {
        return (e.match(M) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return B(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each((function(t) {
                w(this).addClass(e.call(this, t, vt(this)))
            }));
            if ((t = yt(e)).length)
                for (; n = this[u++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each((function(t) {
                w(this).removeClass(e.call(this, t, vt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
                for (; n = this[u++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t)
            })) : this.each((function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = w(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : gt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), p.focusin = "onfocusin" in e;
    var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, f, d, p, v = [r || g],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || g, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), l = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !m(r)) {
                    for (u = d.delegateType || y, xt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) p = a, t.type = 1 < o ? u : d.bindType || y, (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && V(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(r) || l && h(r[y]) && !m(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, wt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, wt), w.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    }));
    var Ct = e.location,
        Tt = {
            guid: Date.now()
        },
        kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/,
        At = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, (function(t, i) {
            n || Et.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !de.test(e))
            })).map((function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            })).get()
        }
    });
    var jt = /%20/g,
        $t = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        zt = g.createElement("a");

    function It(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (h(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Wt(e, t, n, r) {
        var i = {},
            o = e === Pt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            })), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Bt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    zt.href = Ct.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, u, l, c, f, d, p = w.ajaxSetup({}, n),
                h = p.context || p,
                m = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = p.statusCode || {},
                x = {},
                C = {},
                T = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = qt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), E(0, t), this
                    }
                };
            if (v.promise(k), p.url = ((t || p.url || Ct.href) + "").replace(Mt, Ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
                u = g.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = zt.protocol + "//" + zt.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Wt(Ot, p, n, k), l) return k;
            for (f in (c = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), i = p.url.replace($t, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (d = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (kt.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(Lt, "$1"), d = (kt.test(i) ? "&" : "?") + "_=" + Tt.guid++ + d), p.url = i + d), p.ifModified && (w.lastModified[i] && k.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && k.setRequestHeader("If-None-Match", w.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l)) return k.abort();
            if (T = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), r = Wt(Pt, p, n, k)) {
                if (k.readyState = 1, c && m.trigger("ajaxSend", [k, p]), l) return k;
                p.async && 0 < p.timeout && (s = e.setTimeout((function() {
                    k.abort("timeout")
                }), p.timeout));
                try {
                    l = !1, r.send(x, E)
                } catch (t) {
                    if (l) throw t;
                    E(-1, t)
                }
            } else E(-1, "No Transport");

            function E(t, n, a, u) {
                var f, d, g, x, C, T = n;
                l || (l = !0, s && e.clearTimeout(s), r = void 0, o = u || "", k.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, a && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(p, k, a)), !f && -1 < w.inArray("script", p.dataTypes) && (p.converters["text script"] = function() {}), x = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, x, k, f), f ? (p.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (w.lastModified[i] = C), (C = k.getResponseHeader("etag")) && (w.etag[i] = C)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, f = !(g = x.error))) : (g = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", f ? v.resolveWith(h, [d, T, k]) : v.rejectWith(h, [k, T, g]), k.statusCode(b), b = void 0, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [k, p, f ? d : g]), y.fireWith(h, [k, T]), c && (m.trigger("ajaxComplete", [k, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function(e, t) {
        w[t] = function(e, n, r, i) {
            return h(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function(e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        _t = w.ajaxSettings.xhr();
    p.cors = !!_t && "withCredentials" in _t, p.ajax = _t = !!_t, w.ajaxTransport((function(t) {
        var n, r;
        if (p.cors || _t && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || w.expando + "_" + Tt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Xt.push(i)), a && h(o) && o(a[0]), a = o = void 0
        })), "script"
    })), p.createHTMLDocument = ((Ut = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(r)) : t = g), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
        var r, i, o
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = gt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = w.css(e, "position"),
                c = w(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), h(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || re
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return B(this, (function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }), e, r, arguments.length)
        }
    })), w.each(["top", "left"], (function(e, t) {
        w.cssHooks[t] = Be(p.pixelPosition, (function(e, n) {
            if (n) return n = We(e, t), Pe.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, (function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }), t, a ? i : void 0, a)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = h, w.isWindow = m, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }));
    var Yt = e.jQuery,
        Qt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Yt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function(e, t) {
    var n = function(e, t) {
        "use strict";
        if (t.getElementsByClassName) {
            var n, r, i = t.documentElement,
                o = e.Date,
                a = e.HTMLPictureElement,
                s = "addEventListener",
                u = "getAttribute",
                l = e[s],
                c = e.setTimeout,
                f = e.requestAnimationFrame || c,
                d = e.requestIdleCallback,
                p = /^picture$/i,
                h = ["load", "error", "lazyincluded", "_lazyloaded"],
                m = {},
                g = Array.prototype.forEach,
                v = function(e, t) {
                    return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e[u]("class") || "") && m[t]
                },
                y = function(e, t) {
                    v(e, t) || e.setAttribute("class", (e[u]("class") || "").trim() + " " + t)
                },
                b = function(e, t) {
                    var n;
                    (n = v(e, t)) && e.setAttribute("class", (e[u]("class") || "").replace(n, " "))
                },
                x = function(e, t, n) {
                    var r = n ? s : "removeEventListener";
                    n && x(e, t), h.forEach((function(n) {
                        e[r](n, t)
                    }))
                },
                w = function(e, r, i, o, a) {
                    var s = t.createEvent("Event");
                    return i || (i = {}), i.instance = n, s.initEvent(r, !o, !a), s.detail = i, e.dispatchEvent(s), s
                },
                C = function(t, n) {
                    var i;
                    !a && (i = e.picturefill || r.pf) ? (n && n.src && !t[u]("srcset") && t.setAttribute("srcset", n.src), i({
                        reevaluate: !0,
                        elements: [t]
                    })) : n && n.src && (t.src = n.src)
                },
                T = function(e, t) {
                    return (getComputedStyle(e, null) || {})[t]
                },
                k = function(e, t, n) {
                    for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                    return n
                },
                E = function() {
                    var e, n, r = [],
                        i = [],
                        o = r,
                        a = function() {
                            var t = o;
                            for (o = r.length ? i : r, e = !0, n = !1; t.length;) t.shift()();
                            e = !1
                        },
                        s = function(r, i) {
                            e && !i ? r.apply(this, arguments) : (o.push(r), n || (n = !0, (t.hidden ? c : f)(a)))
                        };
                    return s._lsFlush = a, s
                }(),
                A = function(e, t) {
                    return t ? function() {
                        E(e)
                    } : function() {
                        var t = this,
                            n = arguments;
                        E((function() {
                            e.apply(t, n)
                        }))
                    }
                },
                S = function(e) {
                    var t, n = 0,
                        i = r.throttleDelay,
                        a = r.ricTimeout,
                        s = function() {
                            t = !1, n = o.now(), e()
                        },
                        u = d && a > 49 ? function() {
                            d(s, {
                                timeout: a
                            }), a !== r.ricTimeout && (a = r.ricTimeout)
                        } : A((function() {
                            c(s)
                        }), !0);
                    return function(e) {
                        var r;
                        (e = !0 === e) && (a = 33), t || (t = !0, (r = i - (o.now() - n)) < 0 && (r = 0), e || r < 9 ? u() : c(u, r))
                    }
                },
                N = function(e) {
                    var t, n, r = 99,
                        i = function() {
                            t = null, e()
                        },
                        a = function() {
                            var e = o.now() - n;
                            e < r ? c(a, r - e) : (d || i)(i)
                        };
                    return function() {
                        n = o.now(), t || (t = c(a, r))
                    }
                };
            ! function() {
                var t, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in r = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in r || (r[t] = n[t]);
                e.lazySizesConfig = r, c((function() {
                    r.init && $()
                }))
            }();
            var D = function() {
                    var a, f, d, h, m, k, D, $, L, q, H, M, O = /^img$/i,
                        P = /^iframe$/i,
                        R = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                        z = 0,
                        I = 0,
                        W = 0,
                        B = -1,
                        F = function(e) {
                            W--, e && e.target && x(e.target, F), (!e || W < 0 || !e.target) && (W = 0)
                        },
                        _ = function(e) {
                            return null == M && (M = "hidden" == T(t.body, "visibility")), M || "hidden" != T(e.parentNode, "visibility") && "hidden" != T(e, "visibility")
                        },
                        U = function(e, n) {
                            var r, o = e,
                                a = _(e);
                            for ($ -= n, H += n, L -= n, q += n; a && (o = o.offsetParent) && o != t.body && o != i;)(a = (T(o, "opacity") || 1) > 0) && "visible" != T(o, "overflow") && (r = o.getBoundingClientRect(), a = q > r.left && L < r.right && H > r.top - 1 && $ < r.bottom + 1);
                            return a
                        },
                        X = function() {
                            var e, o, s, l, c, d, p, m, g, v, y, b, x = n.elements;
                            if ((h = r.loadMode) && W < 8 && (e = x.length)) {
                                for (o = 0, B++, y = (v = !r.expand || r.expand < 1 ? i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370 : r.expand) * r.expFactor, b = r.hFac, M = null, I < y && W < 1 && B > 2 && h > 2 && !t.hidden ? (I = y, B = 0) : I = h > 1 && B > 1 && W < 6 ? v : z; o < e; o++)
                                    if (x[o] && !x[o]._lazyRace)
                                        if (R)
                                            if ((m = x[o][u]("data-expand")) && (d = 1 * m) || (d = I), g !== d && (k = innerWidth + d * b, D = innerHeight + d, p = -1 * d, g = d), s = x[o].getBoundingClientRect(), (H = s.bottom) >= p && ($ = s.top) <= D && (q = s.right) >= p * b && (L = s.left) <= k && (H || q || L || $) && (r.loadHidden || _(x[o])) && (f && W < 3 && !m && (h < 3 || B < 4) || U(x[o], d))) {
                                                if (ee(x[o]), c = !0, W > 9) break
                                            } else !c && f && !l && W < 4 && B < 4 && h > 2 && (a[0] || r.preloadAfterLoad) && (a[0] || !m && (H || q || L || $ || "auto" != x[o][u](r.sizesAttr))) && (l = a[0] || x[o]);
                                else ee(x[o]);
                                l && !c && ee(l)
                            }
                        },
                        V = S(X),
                        G = function(e) {
                            y(e.target, r.loadedClass), b(e.target, r.loadingClass), x(e.target, Q), w(e.target, "lazyloaded")
                        },
                        Y = A(G),
                        Q = function(e) {
                            Y({
                                target: e.target
                            })
                        },
                        J = function(e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (n) {
                                e.src = t
                            }
                        },
                        K = function(e) {
                            var t, n = e[u](r.srcsetAttr);
                            (t = r.customMedia[e[u]("data-media") || e[u]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                        },
                        Z = A((function(e, t, n, i, o) {
                            var a, s, l, f, h, m;
                            (h = w(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)), s = e[u](r.srcsetAttr), a = e[u](r.srcAttr), o && (f = (l = e.parentNode) && p.test(l.nodeName || "")), m = t.firesLoad || "src" in e && (s || a || f), h = {
                                target: e
                            }, m && (x(e, F, !0), clearTimeout(d), d = c(F, 2500), y(e, r.loadingClass), x(e, Q, !0)), f && g.call(l.getElementsByTagName("source"), K), s ? e.setAttribute("srcset", s) : a && !f && (P.test(e.nodeName) ? J(e, a) : e.src = a), o && (s || f) && C(e, {
                                src: a
                            })), e._lazyRace && delete e._lazyRace, b(e, r.lazyClass), E((function() {
                                (!m || e.complete && e.naturalWidth > 1) && (m ? F(h) : W--, G(h))
                            }), !0)
                        })),
                        ee = function(e) {
                            var t, n = O.test(e.nodeName),
                                i = n && (e[u](r.sizesAttr) || e[u]("sizes")),
                                o = "auto" == i;
                            (!o && f || !n || !e[u]("src") && !e.srcset || e.complete || v(e, r.errorClass) || !v(e, r.lazyClass)) && (t = w(e, "lazyunveilread").detail, o && j.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, W++, Z(e, t, o, i, n))
                        },
                        te = function() {
                            if (!f) {
                                if (o.now() - m < 999) return void c(te, 999);
                                var e = N((function() {
                                    r.loadMode = 3, V()
                                }));
                                f = !0, r.loadMode = 3, V(), l("scroll", (function() {
                                    3 == r.loadMode && (r.loadMode = 2), e()
                                }), !0)
                            }
                        };
                    return {
                        _: function() {
                            m = o.now(), n.elements = t.getElementsByClassName(r.lazyClass), a = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass), l("scroll", V, !0), l("resize", V, !0), e.MutationObserver ? new MutationObserver(V).observe(i, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (i[s]("DOMNodeInserted", V, !0), i[s]("DOMAttrModified", V, !0), setInterval(V, 999)), l("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach((function(e) {
                                t[s](e, V, !0)
                            })), /d$|^c/.test(t.readyState) ? te() : (l("load", te), t[s]("DOMContentLoaded", V), c(te, 2e4)), n.elements.length ? (X(), E._lsFlush()) : V()
                        },
                        checkElems: V,
                        unveil: ee
                    }
                }(),
                j = function() {
                    var e, n = A((function(e, t, n, r) {
                            var i, o, a;
                            if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), p.test(t.nodeName || ""))
                                for (o = 0, a = (i = t.getElementsByTagName("source")).length; o < a; o++) i[o].setAttribute("sizes", r);
                            n.detail.dataAttr || C(e, n.detail)
                        })),
                        i = function(e, t, r) {
                            var i, o = e.parentNode;
                            o && (r = k(e, o, r), (i = w(e, "lazybeforesizes", {
                                width: r,
                                dataAttr: !!t
                            })).defaultPrevented || (r = i.detail.width) && r !== e._lazysizesWidth && n(e, o, i, r))
                        },
                        o = N((function() {
                            var t, n = e.length;
                            if (n)
                                for (t = 0; t < n; t++) i(e[t])
                        }));
                    return {
                        _: function() {
                            e = t.getElementsByClassName(r.autosizesClass), l("resize", o)
                        },
                        checkElems: o,
                        updateElem: i
                    }
                }(),
                $ = function() {
                    $.i || ($.i = !0, j._(), D._())
                };
            return n = {
                cfg: r,
                autoSizer: j,
                loader: D,
                init: $,
                uP: C,
                aC: y,
                rC: b,
                hC: v,
                fire: w,
                gW: k,
                rAF: E
            }
        }
    }(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window),
function(e, t) {
    "function" == typeof define && define.amd ? define([], (function() {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(e) : e.Mapping = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function(e) {
    var t = {};
    return t.mapElements = {
        html: "",
        department: "",
        destination: "",
        from: function(e) {
            try {
                return this.department = document.querySelector(e), this.html = function(e) {
                    if (document.body.contains(e)) return e.parentElement.removeChild(e);
                    throw "Element is not found"
                }(this.department), this
            } catch (e) {}
        },
        to: function(e) {
            try {
                return this.destination = document.querySelector(e), this
            } catch (e) {}
        },
        use: function(e) {
            try {
                switch (e) {
                    case "appendTo":
                        this.destination.append(this.html);
                        break;
                    case "prependTo":
                        this.destination.prepend(this.html);
                        break;
                    case "insertBefore":
                        this.destination.parentElement.insertBefore(this.html, this.destination);
                        break;
                    case "insertAfter":
                        t = this.html, (n = this.destination).parentNode.insertBefore(t, n.nextSibling)
                }
            } catch (e) {}
            var t, n
        }
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define([], (function() {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(e) : e.MappingListener = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function(e) {
    "use strict";
    var t;
    t = {
        breakpoint: 992
    };
    var n = function() {
        var e = {},
            t = !1,
            r = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], r++);
        for (var i = function(r) {
                for (var i in r) r.hasOwnProperty(i) && (t && "[object Object]" === Object.prototype.toString.call(r[i]) ? e[i] = n(e[i], r[i]) : e[i] = r[i])
            }; r < arguments.length; r++) i(arguments[r]);
        return e
    };
    return function(r) {
        var i, o = {
            switch: function() {
                e.matchMedia("(min-width:" + i.breakpoint + "px)").matches ? Mapping.mapElements.from(i.selector).to(i.desktopWrapper).use(i.desktopMethod) : Mapping.mapElements.from(i.selector).to(i.mobileWrapper).use(i.mobileMethod)
            },
            watch: function() {
                this.switch(), e.matchMedia("(min-width:" + i.breakpoint + "px)").addListener(o.switch)
            },
            init: function(e) {
                i = function(e) {
                    switch (e.breakpoint) {
                        case "sm":
                            e.breakpoint = 576;
                            break;
                        case "md":
                            e.breakpoint = 768;
                            break;
                        case "lg":
                            e.breakpoint = 992;
                            break;
                        case "xl":
                            e.breakpoint = 1200
                    }
                    return e
                }(i = n(t, e || {}))
            }
        };
        return o.init(r), o
    }
})), $(document).ready((function() {
    $(".form-text input").blur((function() {
        $(this).val() ? $(this).addClass("label-active") : $(this).removeClass("label-active")
    }))
})), $(document).ready((function() {
    $(".side-navbar .toggle-nav").on("click", (function() {
        $(this).toggleClass("active"), $(".page-content").toggleClass("page-content-active"), $(".side-navbar .list-unstyled li .list-unstyled").slideUp("fast"), $(".side-navbar .list-unstyled li a.collapse").removeClass("active")
    })), $(".side-navbar .list-unstyled li").each((function() {
        $(this).hasClass("show-list-unstyled") && ($(this).find("a.collapse").addClass("active"), $(this).find(".list-unstyled.collapse").slideDown())
    })), $(".side-navbar .list-unstyled li a.collapse").each((function() {
        $(this).on("click", (function(e) {
            1 == $(this).next().is(":hidden") ? (e.preventDefault(), $(".side-navbar .list-unstyled li a.collapse").removeClass("active"), $(this).addClass("active"), $(".side-navbar .list-unstyled li .list-unstyled.collapse").slideUp(100), $(this).next().slideDown(100)) : ($(this).removeClass("active"), $(".side-navbar .list-unstyled li .list-unstyled.collapse").slideUp(100))
        }))
    })), 1 == !!document.documentMode ? $("body").addClass("is-browser-IE") : $("body").removeClass("is-browser-IE")
})), $(document).ready((function() {
    menuMobile(), menuDashBoard(), clickMyCareerBuilder(), dropdownMenu()
}));
/*jquery.cookie.js*/

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
}));
/*chosen.jquery.js*/

(function() {
    var $, AbstractChosen, Chosen, SelectParser, bind = function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        },
        extend = function(child, parent) {
            for (var key in parent) {
                if (hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        },
        hasProp = {}.hasOwnProperty;
    SelectParser = (function() {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }
        SelectParser.prototype.add_node = function(child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };
        SelectParser.prototype.add_group = function(group) {
            var group_position, i, len, option, ref, results1;
            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: group.label,
                title: group.title ? group.title : void 0,
                children: 0,
                disabled: group.disabled,
                classes: group.className
            });
            ref = group.childNodes;
            results1 = [];
            for (i = 0, len = ref.length; i < len; i++) {
                option = ref[i];
                results1.push(this.add_option(option, group_position, group.disabled));
            }
            return results1;
        };
        SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        title: option.title ? option.title : void 0,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        group_label: group_position != null ? this.parsed[group_position].label : null,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };
        return SelectParser;
    })();
    SelectParser.select_to_array = function(select) {
        var child, i, len, parser, ref;
        parser = new SelectParser();
        ref = select.childNodes;
        for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            parser.add_node(child);
        }
        return parser.parsed;
    };
    AbstractChosen = (function() {
        function AbstractChosen(form_field, options1) {
            this.form_field = form_field;
            this.options = options1 != null ? options1 : {};
            this.label_click_handler = bind(this.label_click_handler, this);
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
            this.on_ready();
        }
        AbstractChosen.prototype.set_default_values = function() {
            this.click_test_action = (function(_this) {
                return function(evt) {
                    return _this.test_active_click(evt);
                };
            })(this);
            this.activate_action = (function(_this) {
                return function(evt) {
                    return _this.activate_field(evt);
                };
            })(this);
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
            this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
            this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
            this.case_sensitive_search = this.options.case_sensitive_search || false;
            return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
        };
        AbstractChosen.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            this.default_text = this.escape_html(this.default_text);
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };
        AbstractChosen.prototype.choice_label = function(item) {
            if (this.include_group_label_in_selected && (item.group_label != null)) {
                return "<b class='group-name'>" + (this.escape_html(item.group_label)) + "</b>" + item.html;
            } else {
                return item.html;
            }
        };
        AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = true;
        };
        AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = false;
        };
        AbstractChosen.prototype.input_focus = function(evt) {
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout(((function(_this) {
                        return function() {
                            return _this.container_mousedown();
                        };
                    })(this)), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };
        AbstractChosen.prototype.input_blur = function(evt) {
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout(((function(_this) {
                    return function() {
                        return _this.blur_test();
                    };
                })(this)), 100);
            }
        };
        AbstractChosen.prototype.label_click_handler = function(evt) {
            if (this.is_multiple) {
                return this.container_mousedown(evt);
            } else {
                return this.activate_field();
            }
        };
        AbstractChosen.prototype.results_option_build = function(options) {
            var content, data, data_content, i, len, ref, shown_results;
            content = '';
            shown_results = 0;
            ref = this.results_data;
            for (i = 0, len = ref.length; i < len; i++) {
                data = ref[i];
                data_content = '';
                if (data.group) {
                    data_content = this.result_add_group(data);
                } else {
                    data_content = this.result_add_option(data);
                }
                if (data_content !== '') {
                    shown_results++;
                    content += data_content;
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(this.choice_label(data));
                    }
                }
                if (shown_results >= this.max_shown_results) {
                    break;
                }
            }
            return content;
        };
        AbstractChosen.prototype.result_add_option = function(option) {
            var classes, option_el;
            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            option_el = document.createElement("li");
            option_el.className = classes.join(" ");
            if (option.style) {
                option_el.style.cssText = option.style;
            }
            option_el.setAttribute("data-option-array-index", option.array_index);
            option_el.innerHTML = option.highlighted_html || option.html;
            if (option.title) {
                option_el.title = option.title;
            }
            return this.outerHTML(option_el);
        };
        AbstractChosen.prototype.result_add_group = function(group) {
            var classes, group_el;
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            classes = [];
            classes.push("group-result");
            if (group.classes) {
                classes.push(group.classes);
            }
            group_el = document.createElement("li");
            group_el.className = classes.join(" ");
            group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);
            if (group.title) {
                group_el.title = group.title;
            }
            return this.outerHTML(group_el);
        };
        AbstractChosen.prototype.results_update_field = function() {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };
        AbstractChosen.prototype.reset_single_select_options = function() {
            var i, len, ref, result, results1;
            ref = this.results_data;
            results1 = [];
            for (i = 0, len = ref.length; i < len; i++) {
                result = ref[i];
                if (result.selected) {
                    results1.push(result.selected = false);
                } else {
                    results1.push(void 0);
                }
            }
            return results1;
        };
        AbstractChosen.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.results_search = function(evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.winnow_results = function(options) {
            var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
            this.no_results_clear();
            results = 0;
            query = this.get_search_text();
            var strTemp = query.toLowerCase();
            strTemp = strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, "a");
            strTemp = strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            strTemp = strTemp.replace(/ì|í|ị|ỉ|ĩ/gi, "i");
            strTemp = strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, "o");
            strTemp = strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            strTemp = strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, "y");
            strTemp = strTemp.replace(/đ/gi, "d");
            strTemp = strTemp.replace(/̀|́|̣|̉|̃|/gi, "");
            escapedQuery = strTemp.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            regex = this.get_search_regex(escapedQuery);
            ref = this.results_data;
            for (i = 0, len = ref.length; i < len; i++) {
                option = ref[i];
                option.search_match = false;
                results_group = null;
                search_match = null;
                option.highlighted_html = '';
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    text = option.group ? option.label : option.text;
                    if (!(option.group && !this.group_search)) {
                        search_match = this.search_string_match(text, regex);
                        option.search_match = search_match != null;
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (query.length) {
                                startpos = search_match.index;
                                prefix = text.slice(0, startpos);
                                fix = text.slice(startpos, startpos + query.length);
                                suffix = text.slice(startpos + query.length);
                                option.highlighted_html = (this.escape_html(prefix)) + "<em>" + (this.escape_html(fix)) + "</em>" + (this.escape_html(suffix));
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && query.length) {
                this.update_results_content("");
                return this.no_results(query);
            } else {
                this.update_results_content(this.results_option_build());
                if (!(options != null ? options.skip_highlight : void 0)) {
                    return this.winnow_results_set_highlight();
                }
            }
        };
        AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
            var regex_flag, regex_string;
            regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
            if (!(this.enable_split_word_search || this.search_contains)) {
                regex_string = "^" + regex_string;
            }
            regex_flag = this.case_sensitive_search ? "" : "i";
            return new RegExp(regex_string, regex_flag);
        };
        AbstractChosen.prototype.search_string_match = function(search_string, regex) {
            var match;
            var strTemp = search_string.toLowerCase();
            strTemp = strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            strTemp = strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            strTemp = strTemp.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            strTemp = strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            strTemp = strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            strTemp = strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            strTemp = strTemp.replace(/đ/g, "d");
            strTemp = strTemp.replace(/̀|́|̣|̉|̃|/gi, "");
            match = regex.exec(strTemp);
            if (!this.search_contains && (match != null ? match[1] : void 0)) {
                match.index += 1;
            }
            return match;
        };
        AbstractChosen.prototype.choices_count = function() {
            var i, len, option, ref;
            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            ref = this.form_field.options;
            for (i = 0, len = ref.length; i < len; i++) {
                option = ref[i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };
        AbstractChosen.prototype.choices_click = function(evt) {
            evt.preventDefault();
            this.activate_field();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.keydown_checker = function(evt) {
            var ref, stroke;
            stroke = (ref = evt.which) != null ? ref : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.get_search_field_value().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    if (this.results_showing) {
                        evt.preventDefault();
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        evt.preventDefault();
                    }
                    break;
                case 32:
                    if (this.disable_search) {
                        evt.preventDefault();
                    }
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };
        AbstractChosen.prototype.keyup_checker = function(evt) {
            var ref, stroke;
            stroke = (ref = evt.which) != null ? ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                    break;
                default:
                    this.results_search();
                    break;
            }
        };
        AbstractChosen.prototype.clipboard_event_checker = function(evt) {
            if (this.is_disabled) {
                return;
            }
            return setTimeout(((function(_this) {
                return function() {
                    return _this.results_search();
                };
            })(this)), 50);
        };
        AbstractChosen.prototype.container_width = function() {
            if (this.options.width != null) {
                return this.options.width;
            } else {
                return this.form_field.offsetWidth + "px";
            }
        };
        AbstractChosen.prototype.include_option_in_results = function(option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };
        AbstractChosen.prototype.search_results_touchstart = function(evt) {
            this.touch_started = true;
            return this.search_results_mouseover(evt);
        };
        AbstractChosen.prototype.search_results_touchmove = function(evt) {
            this.touch_started = false;
            return this.search_results_mouseout(evt);
        };
        AbstractChosen.prototype.search_results_touchend = function(evt) {
            if (this.touch_started) {
                return this.search_results_mouseup(evt);
            }
        };
        AbstractChosen.prototype.outerHTML = function(element) {
            var tmp;
            if (element.outerHTML) {
                return element.outerHTML;
            }
            tmp = document.createElement("div");
            tmp.appendChild(element);
            return tmp.innerHTML;
        };
        AbstractChosen.prototype.get_single_html = function() {
            return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"search\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
        };
        AbstractChosen.prototype.get_multi_html = function() {
            return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"search\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
        };
        AbstractChosen.prototype.get_no_results_html = function(terms) {
            return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + (this.escape_html(terms)) + "</span>\n</li>";
        };
        AbstractChosen.browser_is_supported = function() {
            if ("Microsoft Internet Explorer" === window.navigator.appName) {
                return document.documentMode >= 8;
            }
            return true;
        };
        AbstractChosen.default_multiple_text = "Select Some Options";
        AbstractChosen.default_single_text = "Select an Option";
        AbstractChosen.default_no_result_text = "No results match";
        return AbstractChosen;
    })();
    $ = jQuery;
    $.fn.extend({
        chosen: function(options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function(input_field) {
                var $this, chosen;
                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy') {
                    if (chosen instanceof Chosen) {
                        chosen.destroy();
                    }
                    return;
                }
                if (!(chosen instanceof Chosen)) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });
    Chosen = (function(superClass) {
        extend(Chosen, superClass);

        function Chosen() {
            return Chosen.__super__.constructor.apply(this, arguments);
        }
        Chosen.prototype.setup = function() {
            this.form_field_jq = $(this.form_field);
            return this.current_selectedIndex = this.form_field.selectedIndex;
        };
        Chosen.prototype.set_up_html = function() {
            var container_classes, container_props;
            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            this.container.width(this.container_width());
            if (this.is_multiple) {
                this.container.html(this.get_multi_html());
            } else {
                this.container.html(this.get_single_html());
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            return this.set_label_behavior();
        };
        Chosen.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };
        Chosen.prototype.register_observers = function() {
            this.container.on('touchstart.chosen', (function(_this) {
                return function(evt) {
                    _this.container_mousedown(evt);
                };
            })(this));
            this.container.on('touchend.chosen', (function(_this) {
                return function(evt) {
                    _this.container_mouseup(evt);
                };
            })(this));
            this.container.on('mousedown.chosen', (function(_this) {
                return function(evt) {
                    _this.container_mousedown(evt);
                };
            })(this));
            this.container.on('mouseup.chosen', (function(_this) {
                return function(evt) {
                    _this.container_mouseup(evt);
                };
            })(this));
            this.container.on('mouseenter.chosen', (function(_this) {
                return function(evt) {
                    _this.mouse_enter(evt);
                };
            })(this));
            this.container.on('mouseleave.chosen', (function(_this) {
                return function(evt) {
                    _this.mouse_leave(evt);
                };
            })(this));
            this.search_results.on('mouseup.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_mouseup(evt);
                };
            })(this));
            this.search_results.on('mouseover.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_mouseover(evt);
                };
            })(this));
            this.search_results.on('mouseout.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_mouseout(evt);
                };
            })(this));
            this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_mousewheel(evt);
                };
            })(this));
            this.search_results.on('touchstart.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_touchstart(evt);
                };
            })(this));
            this.search_results.on('touchmove.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_touchmove(evt);
                };
            })(this));
            this.search_results.on('touchend.chosen', (function(_this) {
                return function(evt) {
                    _this.search_results_touchend(evt);
                };
            })(this));
            this.form_field_jq.on("chosen:updated.chosen", (function(_this) {
                return function(evt) {
                    _this.results_update_field(evt);
                };
            })(this));
            this.form_field_jq.on("chosen:activate.chosen", (function(_this) {
                return function(evt) {
                    _this.activate_field(evt);
                };
            })(this));
            this.form_field_jq.on("chosen:open.chosen", (function(_this) {
                return function(evt) {
                    _this.container_mousedown(evt);
                };
            })(this));
            this.form_field_jq.on("chosen:close.chosen", (function(_this) {
                return function(evt) {
                    _this.close_field(evt);
                };
            })(this));
            this.search_field.on('blur.chosen', (function(_this) {
                return function(evt) {
                    _this.input_blur(evt);
                };
            })(this));
            this.search_field.on('keyup.chosen', (function(_this) {
                return function(evt) {
                    _this.keyup_checker(evt);
                };
            })(this));
            this.search_field.on('keydown.chosen', (function(_this) {
                return function(evt) {
                    _this.keydown_checker(evt);
                };
            })(this));
            this.search_field.on('focus.chosen', (function(_this) {
                return function(evt) {
                    _this.input_focus(evt);
                };
            })(this));
            this.search_field.on('cut.chosen', (function(_this) {
                return function(evt) {
                    _this.clipboard_event_checker(evt);
                };
            })(this));
            this.search_field.on('paste.chosen', (function(_this) {
                return function(evt) {
                    _this.clipboard_event_checker(evt);
                };
            })(this));
            if (this.is_multiple) {
                return this.search_choices.on('click.chosen', (function(_this) {
                    return function(evt) {
                        _this.choices_click(evt);
                    };
                })(this));
            } else {
                return this.container.on('click.chosen', function(evt) {
                    evt.preventDefault();
                });
            }
        };
        Chosen.prototype.destroy = function() {
            $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);
            if (this.form_field_label.length > 0) {
                this.form_field_label.off('click.chosen');
            }
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };
        Chosen.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
            this.container.toggleClass('chosen-disabled', this.is_disabled);
            this.search_field[0].disabled = this.is_disabled;
            if (!this.is_multiple) {
                this.selected_item.off('focus.chosen', this.activate_field);
            }
            if (this.is_disabled) {
                return this.close_field();
            } else if (!this.is_multiple) {
                return this.selected_item.on('focus.chosen', this.activate_field);
            }
        };
        Chosen.prototype.container_mousedown = function(evt) {
            var ref;
            if (this.is_disabled) {
                return;
            }
            if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
                evt.preventDefault();
            }
            if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                if (!this.active_field) {
                    if (this.is_multiple) {
                        this.search_field.val("");
                    }
                    $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
                    this.results_show();
                } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                    evt.preventDefault();
                    this.results_toggle();
                }
                return this.activate_field();
            }
        };
        Chosen.prototype.container_mouseup = function(evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };
        Chosen.prototype.search_results_mousewheel = function(evt) {
            var delta;
            if (evt.originalEvent) {
                delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
            }
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };
        Chosen.prototype.blur_test = function(evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };
        Chosen.prototype.close_field = function() {
            $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            this.search_field_scale();
            return this.search_field.blur();
        };
        Chosen.prototype.activate_field = function() {
            if (this.is_disabled) {
                return;
            }
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };
        Chosen.prototype.test_active_click = function(evt) {
            var active_container;
            active_container = $(evt.target).closest('.chosen-container');
            if (active_container.length && this.container[0] === active_container[0]) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };
        Chosen.prototype.results_build = function() {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };
        Chosen.prototype.result_do_highlight = function(el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };
        Chosen.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };
        Chosen.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.get_search_field_value());
            this.winnow_results();
            return this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
        };
        Chosen.prototype.update_results_content = function(content) {
            return this.search_results.html(content);
        };
        Chosen.prototype.results_hide = function() {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };
        Chosen.prototype.set_tab_index = function(el) {
            var ti;
            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };
        Chosen.prototype.set_label_behavior = function() {
            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.on('click.chosen', this.label_click_handler);
            }
        };
        Chosen.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };
        Chosen.prototype.search_results_mouseup = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };
        Chosen.prototype.search_results_mouseover = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };
        Chosen.prototype.search_results_mouseout = function(evt) {
            if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
                return this.result_clear_highlight();
            }
        };
        Chosen.prototype.choice_build = function(item) {
            var choice, close_link;
            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + (this.choice_label(item)) + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.on('click.chosen', (function(_this) {
                    return function(evt) {
                        return _this.choice_destroy_link_click(evt);
                    };
                })(this));
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };
        Chosen.prototype.choice_destroy_link_click = function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };
        Chosen.prototype.choice_destroy = function(link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                if (this.active_field) {
                    this.search_field.focus();
                } else {
                    this.show_search_field_default();
                }
                if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };
        Chosen.prototype.results_reset = function() {
            this.reset_single_select_options();
            this.form_field.options[0].selected = true;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.trigger_form_field_change();
            if (this.active_field) {
                return this.results_hide();
            }
        };
        Chosen.prototype.results_reset_cleanup = function() {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };
        Chosen.prototype.result_select = function(evt) {
            var high, item;
            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    this.reset_single_select_options();
                }
                high.addClass("result-selected");
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(this.choice_label(item));
                }
                if (this.is_multiple && (!this.hide_results_on_select || (evt.metaKey || evt.ctrlKey))) {
                    if (evt.metaKey || evt.ctrlKey) {
                        this.winnow_results({
                            skip_highlight: true
                        });
                    } else {
                        this.search_field.val("");
                        this.winnow_results();
                    }
                } else {
                    this.results_hide();
                    this.show_search_field_default();
                }
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.trigger_form_field_change({
                        selected: this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                evt.preventDefault();
                return this.search_field_scale();
            }
        };
        Chosen.prototype.single_set_selected_text = function(text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").html(text);
        };
        Chosen.prototype.result_deselect = function(pos) {
            var result_data;
            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.trigger_form_field_change({
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };
        Chosen.prototype.single_deselect_control_build = function() {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };
        Chosen.prototype.get_search_field_value = function() {
            return this.search_field.val();
        };
        Chosen.prototype.get_search_text = function() {
            return $.trim(this.get_search_field_value());
        };
        Chosen.prototype.escape_html = function(text) {
            return $('<div/>').text(text).html();
        };
        Chosen.prototype.winnow_results_set_highlight = function() {
            var do_high, selected_results;
            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };
        Chosen.prototype.no_results = function(terms) {
            var no_results_html;
            no_results_html = this.get_no_results_html(terms);
            this.search_results.append(no_results_html);
            return this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            });
        };
        Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        };
        Chosen.prototype.keydown_arrow = function() {
            var next_sib;
            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };
        Chosen.prototype.keyup_arrow = function() {
            var prev_sibs;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };
        Chosen.prototype.keydown_backstroke = function() {
            var next_available_destroy;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };
        Chosen.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };
        Chosen.prototype.search_field_scale = function() {
            var div, i, len, style, style_block, styles, width;
            if (!this.is_multiple) {
                return;
            }
            style_block = {
                position: 'absolute',
                left: '-1000px',
                top: '-1000px',
                display: 'none',
                whiteSpace: 'pre'
            };
            styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
            for (i = 0, len = styles.length; i < len; i++) {
                style = styles[i];
                style_block[style] = this.search_field.css(style);
            }
            div = $('<div />').css(style_block);
            div.text(this.get_search_field_value());
            $('body').append(div);
            width = div.width() + 25;
            div.remove();
            if (this.container.is(':visible')) {
                width = Math.min(this.container.outerWidth() - 10, width);
            }
            return this.search_field.width(width);
        };
        Chosen.prototype.trigger_form_field_change = function(extra) {
            this.form_field_jq.trigger("input", extra);
            return this.form_field_jq.trigger("change", extra);
        };
        return Chosen;
    })(AbstractChosen);
}).call(this);
/*swiper.js*/

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Swiper = factory());
}(this, function() {
    'use strict';
    var doc = (typeof document === 'undefined') ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
            blur: function blur() {},
            nodeName: '',
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() {},
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                },
            };
        },
        location: {
            hash: ''
        },
    } : document;
    var win = (typeof window === 'undefined') ? {
        document: doc,
        navigator: {
            userAgent: '',
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                },
            };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
    } : window;
    var Dom7 = function Dom7(arr) {
        var self = this;
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        return this;
    };

    function $(selector, context) {
        var arr = [];
        var i = 0;
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            if (typeof selector === 'string') {
                var els;
                var tempParent;
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) {
                        toCreate = 'ul';
                    }
                    if (html.indexOf('<tr') === 0) {
                        toCreate = 'tbody';
                    }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
                        toCreate = 'tr';
                    }
                    if (html.indexOf('<tbody') === 0) {
                        toCreate = 'table';
                    }
                    if (html.indexOf('<option') === 0) {
                        toCreate = 'select';
                    }
                    tempParent = doc.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        els = [doc.getElementById(selector.trim().split('#')[1])];
                    } else {
                        els = (context || doc).querySelectorAll(selector.trim());
                    }
                    for (i = 0; i < els.length; i += 1) {
                        if (els[i]) {
                            arr.push(els[i]);
                        }
                    }
                }
            } else if (selector.nodeType || selector === win || selector === doc) {
                arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
                for (i = 0; i < selector.length; i += 1) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }
    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
        var uniqueArray = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) {
                uniqueArray.push(arr[i]);
            }
        }
        return uniqueArray;
    }

    function addClass(className) {
        if (typeof className === 'undefined') {
            return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.add(classes[i]);
                }
            }
        }
        return this;
    }

    function removeClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.remove(classes[i]);
                }
            }
        }
        return this;
    }

    function hasClass(className) {
        if (!this[0]) {
            return false;
        }
        return this[0].classList.contains(className);
    }

    function toggleClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.toggle(classes[i]);
                }
            }
        }
        return this;
    }

    function attr(attrs, value) {
        var arguments$1 = arguments;
        if (arguments.length === 1 && typeof attrs === 'string') {
            if (this[0]) {
                return this[0].getAttribute(attrs);
            }
            return undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
                this[i].setAttribute(attrs, value);
            } else {
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        return this;
    }

    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }
        return this;
    }

    function data(key, value) {
        var el;
        if (typeof value === 'undefined') {
            el = this[0];
            if (el) {
                if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                    return el.dom7ElementDataStorage[key];
                }
                var dataKey = el.getAttribute(("data-" + key));
                if (dataKey) {
                    return dataKey;
                }
                return undefined;
            }
            return undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            el = this[i];
            if (!el.dom7ElementDataStorage) {
                el.dom7ElementDataStorage = {};
            }
            el.dom7ElementDataStorage[key] = value;
        }
        return this;
    }

    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
        }
        return this;
    }

    function transition(duration) {
        if (typeof duration !== 'string') {
            duration = duration + "ms";
        }
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
        }
        return this;
    }

    function on() {
        var assign;
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) {
            capture = false;
        }

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) {
                return;
            }
            var eventData = e.target.dom7EventData || [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            if ($(target).is(targetSelector)) {
                listener.apply(target, eventData);
            } else {
                var parents = $(target).parents();
                for (var k = 0; k < parents.length; k += 1) {
                    if ($(parents[k]).is(targetSelector)) {
                        listener.apply(parents[k], eventData);
                    }
                }
            }
        }

        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            listener.apply(this, eventData);
        }
        var events = eventType.split(' ');
        var j;
        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];
            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) {
                        el.dom7Listeners = {};
                    }
                    if (!el.dom7Listeners[event]) {
                        el.dom7Listeners[event] = [];
                    }
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent,
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                for (j = 0; j < events.length; j += 1) {
                    var event$1 = events[j];
                    if (!el.dom7LiveListeners) {
                        el.dom7LiveListeners = {};
                    }
                    if (!el.dom7LiveListeners[event$1]) {
                        el.dom7LiveListeners[event$1] = [];
                    }
                    el.dom7LiveListeners[event$1].push({
                        listener: listener,
                        proxyListener: handleLiveEvent,
                    });
                    el.addEventListener(event$1, handleLiveEvent, capture);
                }
            }
        }
        return this;
    }

    function off() {
        var assign;
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) {
            capture = false;
        }
        var events = eventType.split(' ');
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = (void 0);
                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }
                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }
        return this;
    }

    function trigger() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var events = args[0].split(' ');
        var eventData = args[1];
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var evt = (void 0);
                try {
                    evt = new win.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true,
                    });
                } catch (e) {
                    evt = doc.createEvent('Event');
                    evt.initEvent(event, true, true);
                    evt.detail = eventData;
                }
                el.dom7EventData = args.filter(function(data, dataIndex) {
                    return dataIndex > 0;
                });
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
        return this;
    }

    function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;

        function fireCallBack(e) {
            if (e.target !== this) {
                return;
            }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i += 1) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }

    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
            return this[0].offsetWidth;
        }
        return null;
    }

    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
            return this[0].offsetHeight;
        }
        return null;
    }

    function offset() {
        if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = doc.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === win ? win.scrollY : el.scrollTop;
            var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
            return {
                top: (box.top + scrollTop) - clientTop,
                left: (box.left + scrollLeft) - clientLeft,
            };
        }
        return null;
    }

    function styles() {
        if (this[0]) {
            return win.getComputedStyle(this[0], null);
        }
        return {};
    }

    function css(props, value) {
        var i;
        if (arguments.length === 1) {
            if (typeof props === 'string') {
                if (this[0]) {
                    return win.getComputedStyle(this[0], null).getPropertyValue(props);
                }
            } else {
                for (i = 0; i < this.length; i += 1) {
                    for (var prop in props) {
                        this[i].style[prop] = props[prop];
                    }
                }
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === 'string') {
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }
            return this;
        }
        return this;
    }

    function each(callback) {
        if (!callback) {
            return this;
        }
        for (var i = 0; i < this.length; i += 1) {
            if (callback.call(this[i], i, this[i]) === false) {
                return this;
            }
        }
        return this;
    }

    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }
        return this;
    }

    function text(text) {
        if (typeof text === 'undefined') {
            if (this[0]) {
                return this[0].textContent.trim();
            }
            return null;
        }
        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }
        return this;
    }

    function is(selector) {
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') {
            return false;
        }
        if (typeof selector === 'string') {
            if (el.matches) {
                return el.matches(selector);
            } else if (el.webkitMatchesSelector) {
                return el.webkitMatchesSelector(selector);
            } else if (el.msMatchesSelector) {
                return el.msMatchesSelector(selector);
            }
            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) {
                    return true;
                }
            }
            return false;
        } else if (selector === doc) {
            return el === doc;
        } else if (selector === win) {
            return el === win;
        }
        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    function index() {
        var child = this[0];
        var i;
        if (child) {
            i = 0;
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) {
                    i += 1;
                }
            }
            return i;
        }
        return undefined;
    }

    function eq(index) {
        if (typeof index === 'undefined') {
            return this;
        }
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
            return new Dom7([]);
        }
        if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) {
                return new Dom7([]);
            }
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
    }

    function append() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var newChild;
        for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = doc.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }
        return this;
    }

    function prepend(newChild) {
        var i;
        var j;
        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = doc.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }
        return this;
    }

    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return new Dom7([this[0].nextElementSibling]);
                }
                return new Dom7([]);
            }
            if (this[0].nextElementSibling) {
                return new Dom7([this[0].nextElementSibling]);
            }
            return new Dom7([]);
        }
        return new Dom7([]);
    }

    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) {
            return new Dom7([]);
        }
        while (el.nextElementSibling) {
            var next = el.nextElementSibling;
            if (selector) {
                if ($(next).is(selector)) {
                    nextEls.push(next);
                }
            } else {
                nextEls.push(next);
            }
            el = next;
        }
        return new Dom7(nextEls);
    }

    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];
            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return new Dom7([el.previousElementSibling]);
                }
                return new Dom7([]);
            }
            if (el.previousElementSibling) {
                return new Dom7([el.previousElementSibling]);
            }
            return new Dom7([]);
        }
        return new Dom7([]);
    }

    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) {
            return new Dom7([]);
        }
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling;
            if (selector) {
                if ($(prev).is(selector)) {
                    prevEls.push(prev);
                }
            } else {
                prevEls.push(prev);
            }
            el = prev;
        }
        return new Dom7(prevEls);
    }

    function parent(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) {
                        parents.push(this[i].parentNode);
                    }
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }
        return $(unique(parents));
    }

    function parents(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i += 1) {
            var parent = this[i].parentNode;
            while (parent) {
                if (selector) {
                    if ($(parent).is(selector)) {
                        parents.push(parent);
                    }
                } else {
                    parents.push(parent);
                }
                parent = parent.parentNode;
            }
        }
        return $(unique(parents));
    }

    function closest(selector) {
        var closest = this;
        if (typeof selector === 'undefined') {
            return new Dom7([]);
        }
        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }
        return closest;
    }

    function find(selector) {
        var foundElements = [];
        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }
        return new Dom7(foundElements);
    }

    function children(selector) {
        var children = [];
        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].childNodes;
            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector) {
                    if (childNodes[j].nodeType === 1) {
                        children.push(childNodes[j]);
                    }
                } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }
        return new Dom7(unique(children));
    }

    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) {
                this[i].parentNode.removeChild(this[i]);
            }
        }
        return this;
    }

    function add() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var dom = this;
        var i;
        var j;
        for (i = 0; i < args.length; i += 1) {
            var toAdd = $(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
                dom[dom.length] = toAdd[j];
                dom.length += 1;
            }
        }
        return dom;
    }
    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        remove: remove,
        add: add,
        styles: styles,
    };
    Object.keys(Methods).forEach(function(methodName) {
        $.fn[methodName] = $.fn[methodName] || Methods[methodName];
    });
    var Utils = {
        deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function(key) {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            });
        },
        nextTick: function nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        },
        now: function now() {
            return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
            if (axis === void 0) axis = 'x';
            var matrix;
            var curTransform;
            var transformMatrix;
            var curStyle = win.getComputedStyle(el, null);
            if (win.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a) {
                        return a.replace(',', '.');
                    }).join(', ');
                }
                transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                if (win.WebKitCSSMatrix) {
                    curTransform = transformMatrix.m41;
                } else if (matrix.length === 16) {
                    curTransform = parseFloat(matrix[12]);
                } else {
                    curTransform = parseFloat(matrix[4]);
                }
            }
            if (axis === 'y') {
                if (win.WebKitCSSMatrix) {
                    curTransform = transformMatrix.m42;
                } else if (matrix.length === 16) {
                    curTransform = parseFloat(matrix[13]);
                } else {
                    curTransform = parseFloat(matrix[5]);
                }
            }
            return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function(paramsPart) {
                    return paramsPart !== '';
                });
                length = params.length;
                for (i = 0; i < length; i += 1) {
                    param = params[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                }
            }
            return query;
        },
        isObject: function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
            var args = [],
                len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];
            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null) {
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }
            return to;
        },
    };
    var Support = (function Support() {
        var testDiv = doc.createElement('div');
        return {
            touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
                return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            }()),
            pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
            prefixedPointerEvents: !!win.navigator.msPointerEnabled,
            transition: (function checkTransition() {
                var style = testDiv.style;
                return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
            }()),
            transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
                var style = testDiv.style;
                return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
            }()),
            flexbox: (function checkFlexbox() {
                var style = testDiv.style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i += 1) {
                    if (styles[i] in style) {
                        return true;
                    }
                }
                return false;
            }()),
            observer: (function checkObserver() {
                return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
            }()),
            passiveListener: (function checkPassiveListener() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        },
                    });
                    win.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            }()),
            gestures: (function checkGestures() {
                return 'ongesturestart' in win;
            }()),
        };
    }());
    var Browser = (function Browser() {
        function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        return {
            isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
            isEdge: !!win.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
        };
    }());
    var SwiperClass = function SwiperClass(params) {
        if (params === void 0) params = {};
        var self = this;
        self.params = params;
        self.eventsListeners = {};
        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function(eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    };
    var staticAccessors = {
        components: {
            configurable: true
        }
    };
    SwiperClass.prototype.on = function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') {
            return self;
        }
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function(event) {
            if (!self.eventsListeners[event]) {
                self.eventsListeners[event] = [];
            }
            self.eventsListeners[event][method](handler);
        });
        return self;
    };
    SwiperClass.prototype.once = function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') {
            return self;
        }

        function onceHandler() {
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            handler.apply(self, args);
            self.off(events, onceHandler);
            if (onceHandler.f7proxy) {
                delete onceHandler.f7proxy;
            }
        }
        onceHandler.f7proxy = handler;
        return self.on(events, onceHandler, priority);
    };
    SwiperClass.prototype.off = function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) {
            return self;
        }
        events.split(' ').forEach(function(event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
                self.eventsListeners[event].forEach(function(eventHandler, index) {
                    if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.emit = function emit() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var self = this;
        if (!self.eventsListeners) {
            return self;
        }
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function(event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
                var handlers = [];
                self.eventsListeners[event].forEach(function(eventHandler) {
                    handlers.push(eventHandler);
                });
                handlers.forEach(function(eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
        var instance = this;
        if (!instance.modules) {
            return;
        }
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };
    SwiperClass.prototype.useModules = function useModules(modulesParams) {
        if (modulesParams === void 0) modulesParams = {};
        var instance = this;
        if (!instance.modules) {
            return;
        }
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            if (module.instance) {
                Object.keys(module.instance).forEach(function(modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function(moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };
    staticAccessors.components.set = function(components) {
        var Class = this;
        if (!Class.use) {
            return;
        }
        Class.use(components);
    };
    SwiperClass.installModule = function installModule(module) {
        var params = [],
            len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];
        var Class = this;
        if (!Class.prototype.modules) {
            Class.prototype.modules = {};
        }
        var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
        Class.prototype.modules[name] = module;
        if (module.proto) {
            Object.keys(module.proto).forEach(function(key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        if (module.static) {
            Object.keys(module.static).forEach(function(key) {
                Class[key] = module.static[key];
            });
        }
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };
    SwiperClass.use = function use(module) {
        var params = [],
            len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];
        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function(m) {
                return Class.installModule(m);
            });
            return Class;
        }
        return Class.installModule.apply(Class, [module].concat(params));
    };
    Object.defineProperties(SwiperClass, staticAccessors);

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;
        if (typeof swiper.params.width !== 'undefined') {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined') {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return;
        }
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
        Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
        });
    }

    function updateSlides() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtlTranslate;
        var wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];
        var offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        var offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
        }
        swiper.virtualSize = -spaceBetween;
        if (rtl) {
            slides.css({
                marginLeft: '',
                marginTop: ''
            });
        } else {
            slides.css({
                marginRight: '',
                marginBottom: ''
            });
        }
        var slidesNumberEvenToRows;
        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }
            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        }
        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
                var newSlideOrderIndex = (void 0);
                var column = (void 0);
                var row = (void 0);
                if ((params.slidesPerColumnFill === 'column') || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)) {
                    if (params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - (column * slidesPerColumn);
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                            row += 1;
                            if (row >= slidesPerColumn) {
                                row = 0;
                                column += 1;
                            }
                        }
                    } else {
                        var groupIndex = Math.floor(i / params.slidesPerGroup);
                        row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
                        column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
                    }
                    newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                    slide.css({
                        '-webkit-box-ordinal-group': newSlideOrderIndex,
                        '-moz-box-ordinal-group': newSlideOrderIndex,
                        '-ms-flex-order': newSlideOrderIndex,
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex,
                    });
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - (row * slidesPerRow);
                }
                slide.css(("margin-" + (swiper.isHorizontal() ? 'top' : 'left')), (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))).attr('data-swiper-column', column).attr('data-swiper-row', row);
            }
            if (slide.css('display') === 'none') {
                continue;
            }
            if (params.slidesPerView === 'auto') {
                var slideStyles = win.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;
                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width'));
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height'));
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                        var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing$1 && boxSizing$1 === 'border-box' && !Browser.isIE) {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                        }
                    }
                }
                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) {
                    slideSize = Math.floor(slideSize);
                }
            } else {
                slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                if (params.roundLengths) {
                    slideSize = Math.floor(slideSize);
                }
                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) {
                    slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
                }
                if (i === 0) {
                    slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
                }
                if (Math.abs(slidePosition) < 1 / 1000) {
                    slidePosition = 0;
                }
                if (params.roundLengths) {
                    slidePosition = Math.floor(slidePosition);
                }
                if ((index) % params.slidesPerGroup === 0) {
                    snapGrid.push(slidePosition);
                }
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) {
                    slidePosition = Math.floor(slidePosition);
                }
                if ((index) % params.slidesPerGroup === 0) {
                    snapGrid.push(slidePosition);
                }
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;
        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
                width: ((swiper.virtualSize + params.spaceBetween) + "px")
            });
        }
        if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) {
                $wrapperEl.css({
                    width: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            } else {
                $wrapperEl.css({
                    height: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            }
        }
        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) {
                $wrapperEl.css({
                    width: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            } else {
                $wrapperEl.css({
                    height: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            }
            if (params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                    var slidesGridItem = snapGrid[i$1];
                    if (params.roundLengths) {
                        slidesGridItem = Math.floor(slidesGridItem);
                    }
                    if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
                        newSlidesGrid.push(slidesGridItem);
                    }
                }
                snapGrid = newSlidesGrid;
            }
        }
        if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                var slidesGridItem$1 = snapGrid[i$2];
                if (params.roundLengths) {
                    slidesGridItem$1 = Math.floor(slidesGridItem$1);
                }
                if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem$1);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (snapGrid.length === 0) {
            snapGrid = [0];
        }
        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) {
                    slides.css({
                        marginLeft: (spaceBetween + "px")
                    });
                } else {
                    slides.css({
                        marginRight: (spaceBetween + "px")
                    });
                }
            } else {
                slides.css({
                    marginBottom: (spaceBetween + "px")
                });
            }
        }
        if (params.centerInsufficientSlides) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function(slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            if (allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach(function(snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function(snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid,
        });
        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }
        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length) {
                    break;
                }
                activeSlides.push(swiper.slides.eq(index)[0]);
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        }
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }
        if (newHeight) {
            swiper.$wrapperEl.css('height', (newHeight + "px"));
        }
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        var swiper = this;
        var params = swiper.params;
        if (typeof translate === 'undefined') {
            translate = (swiper && swiper.translate) || 0;
        }
        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;
        if (slides.length === 0) {
            return;
        }
        if (typeof slides[0].swiperSlideOffset === 'undefined') {
            swiper.updateSlidesOffset();
        }
        var offsetCenter = -translate;
        if (rtl) {
            offsetCenter = translate;
        }
        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = ((offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1) || (slideAfter > 1 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size);
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
        }
        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
        var swiper = this;
        var params = swiper.params;
        if (typeof translate === 'undefined') {
            var multiplier = swiper.rtlTranslate ? -1 : 1;
            translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
        }
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / (translatesDiff);
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd,
        });
        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesProgress(translate);
        }
        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge');
        }
        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));
        var activeSlide;
        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
        } else {
            activeSlide = slides.eq(activeIndex);
        }
        activeSlide.addClass(params.slideActiveClass);
        if (params.loop) {
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass);
            }
        }
        var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        }
        var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass);
            }
        }
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;
        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            }
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') {
                    activeIndex = 0;
                }
            }
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
        }
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }
        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex,
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        if (swiper.initialized || swiper.runCallbacksOnInit) {
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest(("." + (params.slideClass)))[0];
        var slideFound = false;
        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                    slideFound = true;
                }
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }
    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide,
    };

    function getTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
        var swiper = this;
        var params = swiper.params;
        var rtl = swiper.rtlTranslate;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;
        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }
        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
        if (rtl) {
            currentTranslate = -currentTranslate;
        }
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;
        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        if (!params.virtualTranslate) {
            if (Support.transforms3d) {
                $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)"));
            } else {
                $wrapperEl.transform(("translate(" + x + "px, " + y + "px)"));
            }
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }
        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return (-this.snapGrid[0]);
    }

    function maxTranslate() {
        return (-this.snapGrid[this.snapGrid.length - 1]);
    }
    var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
    };

    function setTransition(duration, byController) {
        var swiper = this;
        swiper.$wrapperEl.transition(duration);
        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) {
                dir = 'next';
            } else if (activeIndex < previousIndex) {
                dir = 'prev';
            } else {
                dir = 'reset';
            }
        }
        swiper.emit('transitionStart');
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }
            swiper.emit('slideChangeTransitionStart');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        swiper.animating = false;
        swiper.setTransition(0);
        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) {
                dir = 'next';
            } else if (activeIndex < previousIndex) {
                dir = 'prev';
            } else {
                dir = 'reset';
            }
        }
        swiper.emit('transitionEnd');
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }
            swiper.emit('slideChangeTransitionEnd');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }
    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1,
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) {
            slideIndex = 0;
        }
        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtlTranslate;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
        }
        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }
        var translate = -snapGrid[snapIndex];
        swiper.updateProgress(translate);
        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        }
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        var direction;
        if (slideIndex > activeIndex) {
            direction = 'next';
        } else if (slideIndex < activeIndex) {
            direction = 'prev';
        } else {
            direction = 'reset';
        }
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (speed === 0 || !Support.transition) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) {
                            return;
                        }
                        if (e.target !== this) {
                            return;
                        }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var newIndex = index;
        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }
        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        if (params.loop) {
            if (animating) {
                return false;
            }
            swiper.loopFix();
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }

    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var rtlTranslate = swiper.rtlTranslate;
        if (params.loop) {
            if (animating) {
                return false;
            }
            swiper.loopFix();
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) {
                return -Math.floor(Math.abs(val));
            }
            return Math.floor(val);
        }
        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function(val) {
            return normalize(val);
        });
        var normalizedSlidesGrid = slidesGrid.map(function(val) {
            return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        var prevIndex;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) {
                prevIndex = swiper.activeIndex - 1;
            }
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    function slideToClosest(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var index = swiper.activeIndex;
        var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
        if (snapIndex < swiper.snapGrid.length - 1) {
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];
            if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
                index = swiper.params.slidesPerGroup;
            }
        }
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;
        if (params.loop) {
            if (swiper.animating) {
                return;
            }
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if ((slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                    Utils.nextTick(function() {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                Utils.nextTick(function() {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }
    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide,
    };

    function loopCreate() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
        var slides = $wrapperEl.children(("." + (params.slideClass)));
        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                    $wrapperEl.append(blankNode);
                }
                slides = $wrapperEl.children(("." + (params.slideClass)));
            }
        }
        if (params.slidesPerView === 'auto' && !params.loopedSlides) {
            params.loopedSlides = slides.length;
        }
        swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }
        var prependSlides = [];
        var appendSlides = [];
        slides.each(function(index, el) {
            var slide = $(el);
            if (index < swiper.loopedSlides) {
                appendSlides.push(el);
            }
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
            }
            slide.attr('data-swiper-slide-index', index);
        });
        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var snapGrid = swiper.snapGrid;
        var rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate();
        if (activeIndex < loopedSlides) {
            newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged$1 && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
        slides.removeAttr('data-swiper-slide-index');
    }
    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy,
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) {
            return;
        }
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;
        if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) {
            return;
        }
        swiper.el.style.cursor = '';
    }
    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor,
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        if (params.loop) {
            swiper.loopDestroy();
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) {
                    $wrapperEl.append(slides[i]);
                }
            }
        } else {
            $wrapperEl.append(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        if (params.loop) {
            swiper.loopDestroy();
        }
        var newActiveIndex = activeIndex + 1;
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) {
                    $wrapperEl.prepend(slides[i]);
                }
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];
        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (slides[i$1]) {
                    $wrapperEl.append(slides[i$1]);
                }
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }
        for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
            $wrapperEl.append(slidesBuffer[i$2]);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;
        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) {
                    swiper.slides.eq(indexToRemove).remove();
                }
                if (indexToRemove < newActiveIndex) {
                    newActiveIndex -= 1;
                }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) {
                swiper.slides.eq(indexToRemove).remove();
            }
            if (indexToRemove < newActiveIndex) {
                newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];
        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }
    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
    };
    var Device = (function Device() {
        var ua = win.navigator.userAgent;
        var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap,
        };
        var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (windows) {
            device.os = 'windows';
            device.osVersion = windows[2];
            device.windows = true;
        }
        if (android && !windows) {
            device.os = 'android';
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, '.');
            device.iphone = true;
        }
        if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, '.');
            device.ipad = true;
        }
        if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            device.iphone = true;
        }
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
            if (device.osVersion.split('.')[0] === '10') {
                device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
            }
        }
        device.desktop = !(device.os || device.android || device.webView);
        device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
        if (device.os && device.os === 'ios') {
            var osVersionArr = device.osVersion.split('.');
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
        }
        device.pixelRatio = win.devicePixelRatio || 1;
        return device;
    }());

    function onTouchStart(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) {
            return;
        }
        if (!data.isTouchEvent && 'button' in e && e.button > 0) {
            return;
        }
        if (data.isTouched && data.isMoved) {
            return;
        }
        if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$(e).closest(params.swipeHandler)[0]) {
                return;
            }
        }
        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY;
        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (edgeSwipeDetection && ((startX <= edgeSwipeThreshold) || (startX >= win.screen.width - edgeSwipeThreshold))) {
            return;
        }
        Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) {
            data.allowThresholdMove = false;
        }
        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($(e.target).is(data.formElements)) {
                preventDefault = false;
            }
            if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== e.target) {
                doc.activeElement.blur();
            }
            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if (params.touchStartForcePreventDefault || shouldPreventDefault) {
                e.preventDefault();
            }
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        if (data.isTouchEvent && e.type === 'mousemove') {
            return;
        }
        var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            swiper.allowClick = false;
            if (data.isTouched) {
                Utils.extend(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                });
                data.touchStartTime = Utils.now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
                return;
            }
        }
        if (data.isTouchEvent && doc.activeElement) {
            if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) {
            return;
        }
        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt((Math.pow(diffX, 2)) + (Math.pow(diffY, 2))) < swiper.params.threshold) {
            return;
        }
        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;
            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
                data.isScrolling = false;
            } else {
                if ((diffX * diffX) + (diffY * diffY) >= 25) {
                    touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }
        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
            data.allowMomentumBounce = false;
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
        }
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow((-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio));
            }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow((swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio));
            }
        }
        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger) {
            return;
        }
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode) {
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime,
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: Utils.now(),
            });
        }
        swiper.updateProgress(data.currentTranslate);
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }
        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime;
        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap', e);
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                if (data.clickTimeout) {
                    clearTimeout(data.clickTimeout);
                }
                data.clickTimeout = Utils.nextTick(function() {
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    swiper.emit('click', e);
                }, 300);
            }
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                if (data.clickTimeout) {
                    clearTimeout(data.clickTimeout);
                }
                swiper.emit('doubleTap', e);
            }
        }
        data.lastClickTime = Utils.now();
        Utils.nextTick(function() {
            if (!swiper.destroyed) {
                swiper.allowClick = true;
            }
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }
            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();
                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    }
                    if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeModeMomentumVelocityRatio;
                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;
                var newPosition = swiper.translate + momentumDistance;
                if (rtl) {
                    newPosition = -newPosition;
                }
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) {
                        needsLoopFix = true;
                    }
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) {
                        needsLoopFix = true;
                    }
                } else if (params.freeModeSticky) {
                    var nextSlide;
                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    swiper.once('transitionEnd', function() {
                        swiper.loopFix();
                    });
                }
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function() {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
                            return;
                        }
                        swiper.emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) {
                                return;
                            }
                            swiper.transitionEnd();
                        });
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) {
                                return;
                            }
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }
            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            return;
        }
        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];
        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        if (timeDiff > params.longSwipesMs) {
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + params.slidesPerGroup);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > (1 - params.longSwipesRatio)) {
                    swiper.slideTo(stopIndex + params.slidesPerGroup);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;
        var params = swiper.params;
        var el = swiper.el;
        if (el && el.offsetWidth === 0) {
            return;
        }
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;
        var snapGrid = swiper.snapGrid;
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        if (params.freeMode) {
            var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run();
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        var swiper = this;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) {
                e.preventDefault();
            }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }
    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl; {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested; {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
                        passive: false,
                        capture: capture
                    } : capture);
                    target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                    if (!dummyEventAttached) {
                        doc.addEventListener('touchstart', dummyEventListener);
                        dummyEventAttached = true;
                    }
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.onTouchStart, false);
                    doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) {
                target.addEventListener('click', swiper.onClick, true);
            }
        }
        swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
    }

    function detachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;
        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested; {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.onTouchStart, false);
                    doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) {
                target.removeEventListener('click', swiper.onClick, true);
            }
        }
        swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
    }
    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents,
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var initialized = swiper.initialized;
        var loopedSlides = swiper.loopedSlides;
        if (loopedSlides === void 0) loopedSlides = 0;
        var params = swiper.params;
        var breakpoints = params.breakpoints;
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) {
            return;
        }
        var breakpoint = swiper.getBreakpoint(breakpoints);
        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function(param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') {
                        return;
                    }
                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }
            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) {
                swiper.changeDirection();
            }
            Utils.extend(swiper.params, breakpointParams);
            Utils.extend(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });
            swiper.currentBreakpoint = breakpoint;
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoint(breakpoints) {
        var swiper = this;
        if (!breakpoints) {
            return undefined;
        }
        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function(point) {
            points.push(point);
        });
        points.sort(function(a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
        });
        for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (swiper.params.breakpointsInverse) {
                if (point <= win.innerWidth) {
                    breakpoint = point;
                }
            } else if (point >= win.innerWidth && !breakpoint) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }
    var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoint
    };

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);
        if (params.freeMode) {
            suffixes.push('free-mode');
        }
        if (!Support.flexbox) {
            suffixes.push('no-flexbox');
        }
        if (params.autoHeight) {
            suffixes.push('autoheight');
        }
        if (rtl) {
            suffixes.push('rtl');
        }
        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');
        }
        if (Device.android) {
            suffixes.push('android');
        }
        if (Device.ios) {
            suffixes.push('ios');
        }
        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            suffixes.push(("wp8-" + (params.direction)));
        }
        suffixes.forEach(function(suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
    }
    var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;

        function onReady() {
            if (callback) {
                callback();
            }
        }
        if (!imageEl.complete || !checkForComplete) {
            if (src) {
                image = new win.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                    image.sizes = sizes;
                }
                if (srcset) {
                    image.srcset = srcset;
                }
                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
                return;
            }
            if (swiper.imagesLoaded !== undefined) {
                swiper.imagesLoaded += 1;
            }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) {
                    swiper.update();
                }
                swiper.emit('imagesReady');
            }
        }
        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
    }
    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages,
    };

    function checkOverflow() {
        var swiper = this;
        var wasLocked = swiper.isLocked;
        swiper.isLocked = swiper.snapGrid.length === 1;
        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked;
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            swiper.navigation.update();
        }
    }
    var checkOverflow$1 = {
        checkOverflow: checkOverflow
    };
    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: false,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: 'slide',
        breakpoints: undefined,
        breakpointsInverse: false,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: false,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: true,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: true,
    };
    var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images,
    };
    var extendedDefaults = {};
    var Swiper = (function(SwiperClass) {
        function Swiper() {
            var assign;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var el;
            var params;
            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                (assign = args, el = assign[0], params = assign[1]);
            }
            if (!params) {
                params = {};
            }
            params = Utils.extend({}, params);
            if (el && !params.el) {
                params.el = el;
            }
            SwiperClass.call(this, params);
            Object.keys(prototypes).forEach(function(prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });
            var swiper = this;
            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }
            Object.keys(swiper.modules).forEach(function(moduleName) {
                var module = swiper.modules[moduleName];
                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) {
                        return;
                    }
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                        return;
                    }
                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = {
                            enabled: true
                        };
                    }
                    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                        params[moduleParamName].enabled = true;
                    }
                    if (!params[moduleParamName]) {
                        params[moduleParamName] = {
                            enabled: false
                        };
                    }
                }
            });
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);
            swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);
            swiper.$ = $;
            var $el = $(swiper.params.el);
            el = $el[0];
            if (!el) {
                return undefined;
            }
            if ($el.length > 1) {
                var swipers = [];
                $el.each(function(index, containerEl) {
                    var newParams = Utils.extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }
            el.swiper = swiper;
            $el.data('swiper', swiper);
            var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
            Utils.extend(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],
                classNames: [],
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                activeIndex: 0,
                realIndex: 0,
                isBeginning: true,
                isEnd: false,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                touchEvents: (function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];
                    if (Support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    } else if (Support.prefixedPointerEvents) {
                        desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                    }
                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2],
                    };
                    return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }()),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    formElements: 'input, select, option, textarea, button, video',
                    lastClickTime: Utils.now(),
                    clickTimeout: undefined,
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined,
                },
                allowClick: true,
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
            });
            swiper.useModules();
            if (swiper.params.init) {
                swiper.init();
            }
            return swiper;
        }
        if (SwiperClass) Swiper.__proto__ = SwiperClass;
        Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
        Swiper.prototype.constructor = Swiper;
        var staticAccessors = {
            extendedDefaults: {
                configurable: true
            },
            defaults: {
                configurable: true
            },
            Class: {
                configurable: true
            },
            $: {
                configurable: true
            }
        };
        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;
                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) {
                            breakLoop = true;
                        }
                    }
                }
                for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                    if (slides[i$1] && !breakLoop) {
                        slideSize += slides[i$1].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) {
                            breakLoop = true;
                        }
                    }
                }
            } else {
                for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                    if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }
            return spv;
        };
        Swiper.prototype.update = function update() {
            var swiper = this;
            if (!swiper || swiper.destroyed) {
                return;
            }
            var snapGrid = swiper.snapGrid;
            var params = swiper.params;
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
                setTranslate();
                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        };
        Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) needUpdate = true;
            var swiper = this;
            var currentDirection = swiper.params.direction;
            if (!newDirection) {
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
            if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
                return swiper;
            }
            swiper.$el.removeClass(("" + (swiper.params.containerModifierClass) + currentDirection + " wp8-" + currentDirection)).addClass(("" + (swiper.params.containerModifierClass) + newDirection));
            if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
            }
            swiper.params.direction = newDirection;
            swiper.slides.each(function(slideIndex, slideEl) {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) {
                swiper.update();
            }
            return swiper;
        };
        Swiper.prototype.init = function init() {
            var swiper = this;
            if (swiper.initialized) {
                return;
            }
            swiper.emit('beforeInit');
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.addClasses();
            if (swiper.params.loop) {
                swiper.loopCreate();
            }
            swiper.updateSize();
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            }
            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            }
            swiper.attachEvents();
            swiper.initialized = true;
            swiper.emit('init');
        };
        Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;
            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }
            swiper.emit('beforeDestroy');
            swiper.initialized = false;
            swiper.detachEvents();
            if (params.loop) {
                swiper.loopDestroy();
            }
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                    slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
                }
            }
            swiper.emit('destroy');
            Object.keys(swiper.eventsListeners).forEach(function(eventName) {
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                swiper.$el.data('swiper', null);
                Utils.deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        };
        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
        };
        staticAccessors.extendedDefaults.get = function() {
            return extendedDefaults;
        };
        staticAccessors.defaults.get = function() {
            return defaults;
        };
        staticAccessors.Class.get = function() {
            return SwiperClass;
        };
        staticAccessors.$.get = function() {
            return $;
        };
        Object.defineProperties(Swiper, staticAccessors);
        return Swiper;
    }(SwiperClass));
    var Device$1 = {
        name: 'device',
        proto: {
            device: Device,
        },
        static: {
            device: Device,
        },
    };
    var Support$1 = {
        name: 'support',
        proto: {
            support: Support,
        },
        static: {
            support: Support,
        },
    };
    var Browser$1 = {
        name: 'browser',
        proto: {
            browser: Browser,
        },
        static: {
            browser: Browser,
        },
    };
    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) {
                            return;
                        }
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) {
                            return;
                        }
                        swiper.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                win.addEventListener('resize', swiper.resize.resizeHandler);
                win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy() {
                var swiper = this;
                win.removeEventListener('resize', swiper.resize.resizeHandler);
                win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
        },
    };
    var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
            if (options === void 0) options = {};
            var swiper = this;
            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function(mutations) {
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }
                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };
                if (win.requestAnimationFrame) {
                    win.requestAnimationFrame(observerUpdate);
                } else {
                    win.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            });
            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) {
                return;
            }
            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();
                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            }
            swiper.observer.attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            });
            swiper.observer.attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function(observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        },
    };
    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false,
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                observer: {
                    init: Observer.init.bind(swiper),
                    attach: Observer.attach.bind(swiper),
                    destroy: Observer.destroy.bind(swiper),
                    observers: [],
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.observer.init();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.destroy();
            },
        },
    };
    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.params.virtual;
            var addSlidesBefore = ref$1.addSlidesBefore;
            var addSlidesAfter = ref$1.addSlidesAfter;
            var ref$2 = swiper.virtual;
            var previousFrom = ref$2.from;
            var previousTo = ref$2.to;
            var slides = ref$2.slides;
            var previousSlidesGrid = ref$2.slidesGrid;
            var renderSlide = ref$2.renderSlide;
            var previousOffset = ref$2.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;
            var offsetProp;
            if (swiper.rtlTranslate) {
                offsetProp = 'right';
            } else {
                offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            }
            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
                slidesBefore = slidesPerGroup + addSlidesAfter;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            Utils.extend(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid,
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, (offset + "px"));
                }
                swiper.updateProgress();
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: (function getSlides() {
                        var slidesToRender = [];
                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()),
                });
                onRendered();
                return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
                swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
                    }
                }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (i$1 >= from && i$1 <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(i$1);
                    } else {
                        if (i$1 > previousTo) {
                            appendIndexes.push(i$1);
                        }
                        if (i$1 < previousFrom) {
                            prependIndexes.push(i$1);
                        }
                    }
                }
            }
            appendIndexes.forEach(function(index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function(a, b) {
                return b - a;
            }).forEach(function(index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
            if (!$slideEl.attr('data-swiper-slide-index')) {
                $slideEl.attr('data-swiper-slide-index', index);
            }
            if (params.cache) {
                swiper.virtual.cache[index] = $slideEl;
            }
            return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
            var swiper = this;
            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) {
                        swiper.virtual.slides.push(slides[i]);
                    }
                }
            } else {
                swiper.virtual.slides.push(slides);
            }
            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var newActiveIndex = activeIndex + 1;
            var numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) {
                        swiper.virtual.slides.unshift(slides[i]);
                    }
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }
            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function(cachedIndex) {
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
                });
                swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
            var swiper = this;
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
                return;
            }
            var activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) {
                for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }
                    if (slidesIndexes[i] < activeIndex) {
                        activeIndex -= 1;
                    }
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }
                if (slidesIndexes < activeIndex) {
                    activeIndex -= 1;
                }
                activeIndex = Math.max(activeIndex, 0);
            }
            swiper.virtual.update(true);
            swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
            var swiper = this;
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }
            swiper.virtual.update(true);
            swiper.slideTo(0, 0);
        },
    };
    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                virtual: {
                    update: Virtual.update.bind(swiper),
                    appendSlide: Virtual.appendSlide.bind(swiper),
                    prependSlide: Virtual.prependSlide.bind(swiper),
                    removeSlide: Virtual.removeSlide.bind(swiper),
                    removeAllSlides: Virtual.removeAllSlides.bind(swiper),
                    renderSlide: Virtual.renderSlide.bind(swiper),
                    slides: swiper.params.virtual.slides,
                    cache: {},
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                var overwriteParams = {
                    watchSlidesProgress: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) {
                    return;
                }
                swiper.virtual.update();
            },
        },
    };
    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            var kc = e.keyCode || e.charCode;
            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
                return false;
            }
            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
                var inView = false;
                if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
                    return undefined;
                }
                var windowWidth = win.innerWidth;
                var windowHeight = win.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) {
                    swiperOffset.left -= swiper.$el[0].scrollLeft;
                }
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]
                ];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        inView = true;
                    }
                }
                if (!inView) {
                    return undefined;
                }
            }
            if (swiper.isHorizontal()) {
                if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
                if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) {
                    swiper.slideNext();
                }
                if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) {
                    swiper.slidePrev();
                }
            } else {
                if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
                if (kc === 34 || kc === 40) {
                    swiper.slideNext();
                }
                if (kc === 33 || kc === 38) {
                    swiper.slidePrev();
                }
            }
            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) {
                return;
            }
            $(doc).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) {
                return;
            }
            $(doc).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        },
    };
    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                keyboard: {
                    enabled: false,
                    enable: Keyboard.enable.bind(swiper),
                    disable: Keyboard.disable.bind(swiper),
                    handle: Keyboard.handle.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            },
        },
    };

    function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;
        if (!isSupported) {
            var element = doc.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }
        if (!isSupported && doc.implementation && doc.implementation.hasFeature && doc.implementation.hasFeature('', '') !== true) {
            isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }
        return isSupported;
    }
    var Mousewheel = {
        lastScrollTime: Utils.now(),
        event: (function getEvent() {
            if (win.navigator.userAgent.indexOf('firefox') > -1) {
                return 'DOMMouseScroll';
            }
            return isEventSupported() ? 'wheel' : 'mousewheel';
        }()),
        normalize: function normalize(e) {
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
            var sX = 0;
            var sY = 0;
            var pX = 0;
            var pY = 0;
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
            if (pX && !sX) {
                sX = (pX < 1) ? -1 : 1;
            }
            if (pY && !sY) {
                sY = (pY < 1) ? -1 : 1;
            }
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY,
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;
            if (!swiper.mouseEntered && !params.releaseOnEdges) {
                return true;
            }
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;
            var data = Mousewheel.normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
                        delta = data.pixelX * rtlFactor;
                    } else {
                        return true;
                    }
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
                    delta = data.pixelY;
                } else {
                    return true;
                }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
            if (delta === 0) {
                return true;
            }
            if (params.invert) {
                delta = -delta;
            }
            if (!swiper.params.freeMode) {
                if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) {
                            return true;
                        }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        swiper.emit('scroll', e);
                    } else if (params.releaseOnEdges) {
                        return true;
                    }
                }
                swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
            } else {
                if (swiper.params.loop) {
                    swiper.loopFix();
                }
                var position = swiper.getTranslate() + (delta * params.sensitivity);
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) {
                    position = swiper.minTranslate();
                }
                if (position <= swiper.maxTranslate()) {
                    position = swiper.maxTranslate();
                }
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }
                if (swiper.params.freeModeSticky) {
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = Utils.nextTick(function() {
                        swiper.slideToClosest();
                    }, 300);
                }
                swiper.emit('scroll', e);
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
                    swiper.autoplay.stop();
                }
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
                    return true;
                }
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            return false;
        },
        enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) {
                return false;
            }
            if (swiper.mousewheel.enabled) {
                return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) {
                return false;
            }
            if (!swiper.mousewheel.enabled) {
                return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        },
    };
    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarged: 'container',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                mousewheel: {
                    enabled: false,
                    enable: Mousewheel.enable.bind(swiper),
                    disable: Mousewheel.disable.bind(swiper),
                    handle: Mousewheel.handle.bind(swiper),
                    handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
                    handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
                    lastScrollTime: Utils.now(),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.mousewheel.enabled) {
                    swiper.mousewheel.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.mousewheel.enabled) {
                    swiper.mousewheel.disable();
                }
            },
        },
    };
    var Navigation = {
        update: function update() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (swiper.params.loop) {
                return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }
                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }
                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) {
                return;
            }
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) {
                return;
            }
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) {
                return;
            }
            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
                $nextEl = $(params.nextEl);
                if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }
            if (params.prevEl) {
                $prevEl = $(params.prevEl);
                if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }
            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }
            Utils.extend(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        },
    };
    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                navigation: {
                    init: Navigation.init.bind(swiper),
                    update: Navigation.update.bind(swiper),
                    destroy: Navigation.destroy.bind(swiper),
                    onNextClick: Navigation.onNextClick.bind(swiper),
                    onPrevClick: Navigation.onPrevClick.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.navigation.destroy();
            },
            click: function click(e) {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                    var isHidden;
                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }
                    if (isHidden === true) {
                        swiper.emit('navigationShow', swiper);
                    } else {
                        swiper.emit('navigationHide', swiper);
                    }
                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            },
        },
    };
    var Pagination = {
        update: function update() {
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                    current -= (slidesLength - (swiper.loopedSlides * 2));
                }
                if (current > total - 1) {
                    current -= total;
                }
                if (current < 0 && swiper.params.paginationType !== 'bullets') {
                    current = total + current;
                }
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            }
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;
                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
                        if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
                if ($el.length > 1) {
                    bullets.each(function(index, bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(((params.bulletActiveClass) + "-main"));
                            }
                            if (bulletIndex === firstIndex) {
                                $bullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev"));
                            }
                            if (bulletIndex === lastIndex) {
                                $bullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next"));
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);
                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
                        }
                        $firstDisplayedBullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev"));
                        $lastDisplayedBullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next"));
                    }
                }
                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                }
            }
            if (params.type === 'fraction') {
                $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
                $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
            }
            if (params.type === 'progressbar') {
                var progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }
                $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
            }
            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', swiper, $el[0]);
            } else {
                swiper.emit('paginationUpdate', swiper, $el[0]);
            }
            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var paginationHTML = '';
            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
                    }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>" +
                        ' / ' +
                        "<span class=\"" + (params.totalClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) {
                return;
            }
            var $el = $(params.el);
            if ($el.length === 0) {
                return;
            }
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
                $el = swiper.$el.find(params.el);
            }
            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }
            $el.addClass(params.modifierClass + params.type);
            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
                swiper.pagination.dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }
            if (params.clickable) {
                $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) {
                        index += swiper.loopedSlides;
                    }
                    swiper.slideTo(index);
                });
            }
            Utils.extend(swiper.pagination, {
                $el: $el,
                el: $el[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) {
                swiper.pagination.bullets.removeClass(params.bulletActiveClass);
            }
            if (params.clickable) {
                $el.off('click', ("." + (params.bulletClass)));
            }
        },
    };
    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(number) {
                    return number;
                },
                formatFractionTotal: function(number) {
                    return number;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                pagination: {
                    init: Pagination.init.bind(swiper),
                    render: Pagination.render.bind(swiper),
                    update: Pagination.update.bind(swiper),
                    destroy: Pagination.destroy.bind(swiper),
                    dynamicBulletIndex: 0,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.pagination.destroy();
            },
            click: function click(e) {
                var swiper = this;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                    var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) {
                        swiper.emit('paginationShow', swiper);
                    } else {
                        swiper.emit('paginationHide', swiper);
                    }
                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            },
        },
    };
    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;
            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
                } else {
                    $dragEl.transform(("translateX(" + newPos + "px)"));
                }
                $dragEl[0].style.width = newSize + "px";
            } else {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
                } else {
                    $dragEl.transform(("translateY(" + newPos + "px)"));
                }
                $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function() {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }
            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }
            if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize,
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        getPointerPosition: function getPointerPosition(e) {
            var swiper = this;
            if (swiper.isHorizontal()) {
                return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
            }
            return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var dragStartPos = scrollbar.dragStartPos;
            var positionRatio;
            positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
                (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }
            var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl) ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);
            clearTimeout(swiper.scrollbar.dragTimeout);
            $el.transition(0);
            if (params.hide) {
                $el.css('opacity', 1);
            }
            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            if (!swiper.scrollbar.isTouched) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;
            if (!swiper.scrollbar.isTouched) {
                return;
            }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = Utils.nextTick(function() {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }
            swiper.emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!Support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!Support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;
            var $el = $(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }
            var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
            if ($dragEl.length === 0) {
                $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
                $el.append($dragEl);
            }
            Utils.extend(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0],
            });
            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        },
    };
    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                scrollbar: {
                    init: Scrollbar.init.bind(swiper),
                    destroy: Scrollbar.destroy.bind(swiper),
                    updateSize: Scrollbar.updateSize.bind(swiper),
                    setTranslate: Scrollbar.setTranslate.bind(swiper),
                    setTransition: Scrollbar.setTransition.bind(swiper),
                    enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                    disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                    setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                    getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
                    onDragStart: Scrollbar.onDragStart.bind(swiper),
                    onDragMove: Scrollbar.onDragMove.bind(swiper),
                    onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            resize: function resize() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.destroy();
            },
        },
    };
    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;
            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;
            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');
            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }
            if ((x).indexOf('%') >= 0) {
                x = (parseInt(x, 10) * progress * rtlFactor) + "%";
            } else {
                x = (x * progress * rtlFactor) + "px";
            }
            if ((y).indexOf('%') >= 0) {
                y = (parseInt(y, 10) * progress) + "%";
            } else {
                y = (y * progress) + "px";
            }
            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === 'undefined' || scale === null) {
                $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
            } else {
                var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            var snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index, el) {
                swiper.parallax.setTransform(el, progress);
            });
            slides.each(function(slideIndex, slideEl) {
                var slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index, el) {
                    swiper.parallax.setTransform(el, slideProgress);
                });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) duration = this.params.speed;
            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index, parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) {
                    parallaxDuration = 0;
                }
                $parallaxEl.transition(parallaxDuration);
            });
        },
    };
    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                parallax: {
                    setTransform: Parallax.setTransform.bind(swiper),
                    setTranslate: Parallax.setTranslate.bind(swiper),
                    setTransition: Parallax.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTransition(duration);
            },
        },
    };
    var Zoom = {
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) {
                return 1;
            }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
            return distance;
        },
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
            if (!Support.gestures) {
                if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest('.swiper-slide');
                if (gesture.$slideEl.length === 0) {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (Support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = (gesture.maxRatio - 1) + (Math.pow(((zoom.scale - gesture.maxRatio) + 1), 0.5));
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = (params.minRatio + 1) - (Math.pow(((params.minRatio - zoom.scale) + 1), 0.5));
            }
            gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }
                if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
                    return;
                }
                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) {
                gesture.$slideEl = undefined;
            }
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (image.isTouched) {
                return;
            }
            if (Device.android) {
                e.preventDefault();
            }
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) {
                return;
            }
            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            }
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
                return;
            }
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            if (!image.isMoved && !zoom.isScaling) {
                if (swiper.isHorizontal() && ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))) {
                    image.isTouched = false;
                    return;
                }
                if (!swiper.isHorizontal() && ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))) {
                    image.isTouched = false;
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();
            image.isMoved = true;
            image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
            image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
            if (image.currentX < image.minX) {
                image.currentX = (image.minX + 1) - (Math.pow(((image.minX - image.currentX) + 1), 0.8));
            }
            if (image.currentX > image.maxX) {
                image.currentX = (image.maxX - 1) + (Math.pow(((image.currentX - image.maxX) + 1), 0.8));
            }
            if (image.currentY < image.minY) {
                image.currentY = (image.minY + 1) - (Math.pow(((image.minY - image.currentY) + 1), 0.8));
            }
            if (image.currentY > image.maxY) {
                image.currentY = (image.maxY - 1) + (Math.pow(((image.currentY - image.maxY) + 1), 0.8));
            }
            if (!velocity.prevPositionX) {
                velocity.prevPositionX = image.touchesCurrent.x;
            }
            if (!velocity.prevPositionY) {
                velocity.prevPositionY = image.touchesCurrent.y;
            }
            if (!velocity.prevTime) {
                velocity.prevTime = Date.now();
            }
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
                velocity.x = 0;
            }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
                velocity.y = 0;
            }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;
            if (velocity.x !== 0) {
                momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            }
            if (velocity.y !== 0) {
                momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            }
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) {
                zoom.out();
            } else {
                zoom.in(e);
            }
        },
        in: function in$1(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));
            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;
            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = (offsetX + (slideWidth / 2)) - touchX;
                diffY = (offsetY + (slideHeight / 2)) - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
            gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        out: function out() {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
            gesture.$slideEl = undefined;
        },
        enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) {
                return;
            }
            zoom.enabled = true;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (Support.gestures) {
                swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
            swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) {
                return;
            }
            swiper.zoom.enabled = false;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (Support.gestures) {
                swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
            swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
    };
    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
            },
        },
        create: function create() {
            var swiper = this;
            var zoom = {
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3,
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined,
                },
            };
            ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function(methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
            });
            Utils.extend(swiper, {
                zoom: zoom,
            });
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }
                    scale = value;
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) {
                    return;
                }
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) {
                    return;
                }
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
                var swiper = this;
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
        },
    };
    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) loadInDuplicate = true;
            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') {
                return;
            }
            if (swiper.slides.length === 0) {
                return;
            }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var $slideEl = isVirtual ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")) : swiper.slides.eq(index);
            var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) {
                return;
            }
            $images.each(function(imageIndex, imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');
                swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function() {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) {
                        return;
                    }
                    if (background) {
                        $imageEl.css('background-image', ("url(\"" + background + "\")"));
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }
                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }
                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }
                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(("." + (params.preloaderClass))).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                });
                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;
            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
                        return true;
                    }
                } else if (slides[index]) {
                    return true;
                }
                return false;
            }

            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }
                return $(slideEl).index();
            }
            if (!swiper.lazy.initialImageLoaded) {
                swiper.lazy.initialImageLoaded = true;
            }
            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function(elIndex, slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) {
                        swiper.lazy.loadInSlide(i);
                    }
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                        if (slideExist(i$1)) {
                            swiper.lazy.loadInSlide(i$1);
                        }
                    }
                    for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                        if (slideExist(i$2)) {
                            swiper.lazy.loadInSlide(i$2);
                        }
                    }
                } else {
                    var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                    if (nextSlide.length > 0) {
                        swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    }
                    var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                    if (prevSlide.length > 0) {
                        swiper.lazy.loadInSlide(slideIndex(prevSlide));
                    }
                }
            }
        },
    };
    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                lazy: {
                    initialImageLoaded: false,
                    load: Lazy.load.bind(swiper),
                    loadInSlide: Lazy.loadInSlide.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll() {
                var swiper = this;
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
        },
    };
    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function(array, val) {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }());
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            var i1;
            var i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) {
                    return 0;
                }
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;
                return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
            };
            return this;
        },
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;

            function setControlledTranslate(c) {
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c);
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;

            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        Utils.nextTick(function() {
                            c.updateAutoHeight();
                        });
                    }
                    c.$wrapperEl.transitionEnd(function() {
                        if (!controlled) {
                            return;
                        }
                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        },
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                controller: {
                    control: swiper.params.controller.control,
                    getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
                    setTranslate: Controller.setTranslate.bind(swiper),
                    setTransition: Controller.setTransition.bind(swiper),
                },
            });
        },
        on: {
            update: function update() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(translate, byController) {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                swiper.controller.setTransition(duration, byController);
            },
        },
    };
    var a11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) {
                return;
            }
            var $targetEl = $(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) {
                return;
            }
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;
            if (swiper.params.loop) {
                return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function(bulletIndex, bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;
            swiper.$el.append(swiper.a11y.liveRegion);
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
                swiper.a11y.liveRegion.remove();
            }
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
    };
    var A11y = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                a11y: {
                    liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
                },
            });
            Object.keys(a11y).forEach(function(methodName) {
                swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.destroy();
            },
        },
    };
    var History = {
        init: function init() {
            var swiper = this;
            if (!swiper.params.history) {
                return;
            }
            if (!win.history || !win.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) {
                return;
            }
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                win.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
                win.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
            var pathArray = win.location.pathname.slice(1).split('/').filter(function(part) {
                return part !== '';
            });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
                key: key,
                value: value
            };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) {
                return;
            }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));
            if (!win.location.pathname.includes(key)) {
                value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                win.history.replaceState({
                    value: value
                }, null, value);
            } else {
                win.history.pushState({
                    value: value
                }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        },
    };
    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                history: {
                    init: History.init.bind(swiper),
                    setHistory: History.setHistory.bind(swiper),
                    setHistoryPopState: History.setHistoryPopState.bind(swiper),
                    scrollToSlide: History.scrollToSlide.bind(swiper),
                    destroy: History.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
        },
    };
    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
                if (typeof newIndex === 'undefined') {
                    return;
                }
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
                return;
            }
            if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
                win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                doc.location.hash = hash || '';
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) {
                return;
            }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace('#', '');
            if (hash) {
                var speed = 0;
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) {
                $(win).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
                $(win).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                hashNavigation: {
                    initialized: false,
                    init: HashNavigation.init.bind(swiper),
                    destroy: HashNavigation.destroy.bind(swiper),
                    setHash: HashNavigation.setHash.bind(swiper),
                    onHashCange: HashNavigation.onHashCange.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
        },
    };
    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = Utils.nextTick(function() {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') {
                return false;
            }
            if (swiper.autoplay.running) {
                return false;
            }
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) {
                return false;
            }
            if (typeof swiper.autoplay.timeout === 'undefined') {
                return false;
            }
            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) {
                return;
            }
            if (swiper.autoplay.paused) {
                return;
            }
            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
            }
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
    };
    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                autoplay: {
                    running: false,
                    paused: false,
                    run: Autoplay.run.bind(swiper),
                    start: Autoplay.start.bind(swiper),
                    stop: Autoplay.stop.bind(swiper),
                    pause: Autoplay.pause.bind(swiper),
                    onTransitionEnd: function onTransitionEnd(e) {
                        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
                            return;
                        }
                        if (e.target !== this) {
                            return;
                        }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                        swiper.autoplay.paused = false;
                        if (!swiper.autoplay.running) {
                            swiper.autoplay.stop();
                        } else {
                            swiper.autoplay.run();
                        }
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                }
            },
            beforeTransitionStart: function beforeTransitionStart(speed, internal) {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }
            },
        },
    };
    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) {
                    tx -= swiper.translate;
                }
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                    opacity: slideOpacity,
                }).transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function() {
                    if (eventTriggered) {
                        return;
                    }
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };
    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                fadeEffect: {
                    setTranslate: Fade.setTranslate.bind(swiper),
                    setTransition: Fade.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.fadeEffect.setTransition(duration);
            },
        },
    };
    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtlTranslate;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({
                        height: (swiperWidth + "px")
                    });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl) {
                        wrapperRotate = (-slideIndex * 90) - (progress * 90);
                    }
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) {
                        shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    }
                    if (shadowAfter.length) {
                        shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
            });
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
                        (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                }
            }
            var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl.transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    };
    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                cubeEffect: {
                    setTranslate: Cube.setTranslate.bind(swiper),
                    setTransition: Cube.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.cubeEffect.setTransition(duration);
            },
        },
    };
    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }
                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (swiper.params.flipEffect.slideShadows) {
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) {
                        shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    }
                    if (shadowAfter.length) {
                        shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }
                $slideEl.transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) {
                        return;
                    }
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };
    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                flipEffect: {
                    setTranslate: Flip.setTranslate.bind(swiper),
                    setTransition: Flip.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.flipEffect.setTransition(duration);
            },
        },
    };
    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                var translateZ = -translate * Math.abs(offsetMultiplier);
                var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                if (Math.abs(translateX) < 0.001) {
                    translateX = 0;
                }
                if (Math.abs(translateY) < 0.001) {
                    translateY = 0;
                }
                if (Math.abs(translateZ) < 0.001) {
                    translateZ = 0;
                }
                if (Math.abs(rotateY) < 0.001) {
                    rotateY = 0;
                }
                if (Math.abs(rotateX) < 0.001) {
                    rotateX = 0;
                }
                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) {
                        $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    }
                    if ($shadowAfterEl.length) {
                        $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                    }
                }
            }
            if (Support.pointerEvents || Support.prefixedPointerEvents) {
                var ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = center + "px 50%";
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        },
    };
    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                coverflowEffect: {
                    setTranslate: Coverflow.setTranslate.bind(swiper),
                    setTransition: Coverflow.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.coverflowEffect.setTransition(duration);
            },
        },
    };
    var Thumbs = {
        init: function init() {
            var swiper = this;
            var ref = swiper.params;
            var thumbsParams = ref.thumbs;
            var SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Utils.extend(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
                Utils.extend(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
            } else if (Utils.isObject(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                }));
                swiper.thumbs.swiperCreated = true;
            }
            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) {
                return;
            }
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
                return;
            }
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
                return;
            }
            var slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;
                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix();
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }
                var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                if (typeof prevIndex === 'undefined') {
                    slideToIndex = nextIndex;
                } else if (typeof nextIndex === 'undefined') {
                    slideToIndex = prevIndex;
                } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
                    slideToIndex = nextIndex;
                } else {
                    slideToIndex = prevIndex;
                }
            }
            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) {
                return;
            }
            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            if (swiper.realIndex !== thumbsSwiper.realIndex) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix();
                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    }
                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') {
                        newThumbsIndex = nextThumbsIndex;
                    } else if (typeof nextThumbsIndex === 'undefined') {
                        newThumbsIndex = prevThumbsIndex;
                    } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                        newThumbsIndex = currentThumbsIndex;
                    } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                        newThumbsIndex = nextThumbsIndex;
                    } else {
                        newThumbsIndex = prevThumbsIndex;
                    }
                } else {
                    newThumbsIndex = swiper.realIndex;
                }
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }
            thumbsSwiper.slides.removeClass(thumbActiveClass);
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
                }
            } else {
                for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
                }
            }
        },
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                thumbs: {
                    swiper: null,
                    init: Thumbs.init.bind(swiper),
                    update: Thumbs.update.bind(swiper),
                    onThumbClick: Thumbs.onThumbClick.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                var ref = swiper.params;
                var thumbs = ref.thumbs;
                if (!thumbs || !thumbs.swiper) {
                    return;
                }
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            update: function update() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) {
                    return;
                }
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy() {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) {
                    return;
                }
                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            },
        },
    };
    var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    if (typeof Swiper.use === 'undefined') {
        Swiper.use = Swiper.Class.use;
        Swiper.installModule = Swiper.Class.installModule;
    }
    Swiper.use(components);
    return Swiper;
}));
/*jquery.fancybox.js*/

(function(window, document, $, undefined) {
    "use strict";
    window.console = window.console || {
        info: function(stuff) {}
    };
    if (!$) {
        return;
    }
    if ($.fn.fancybox) {
        console.info("fancyBox already initialized");
        return;
    }
    var defaults = {
        closeExisting: false,
        loop: false,
        gutter: 50,
        keyboard: true,
        preventCaptionOverlap: true,
        arrows: true,
        infobar: true,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: false,
        modal: false,
        image: {
            preload: false
        },
        ajax: {
            settings: {
                data: {
                    fancybox: true
                }
            }
        },
        iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: true,
            css: {},
            attr: {
                scrolling: "auto"
            }
        },
        video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
            format: "",
            autoStart: true
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' + "</div>" + "</div>",
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
        },
        parentEl: "body",
        hideScrollbar: true,
        autoFocus: true,
        backFocus: true,
        trapFocus: true,
        fullScreen: {
            autoStart: false
        },
        touch: {
            vertical: true,
            momentum: true
        },
        hash: null,
        media: {},
        slideShow: {
            autoStart: false,
            speed: 3000
        },
        thumbs: {
            autoStart: false,
            hideOnClose: true,
            parentEl: ".fancybox-container",
            axis: "y"
        },
        wheel: "auto",
        onInit: $.noop,
        beforeLoad: $.noop,
        afterLoad: $.noop,
        beforeShow: $.noop,
        afterShow: $.noop,
        beforeClose: $.noop,
        afterClose: $.noop,
        onActivate: $.noop,
        onDeactivate: $.noop,
        clickContent: function(current, event) {
            return current.type === "image" ? "zoom" : false;
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: false,
        dblclickSlide: false,
        dblclickOutside: false,
        mobile: {
            preventCaptionOverlap: false,
            idleTime: false,
            clickContent: function(current, event) {
                return current.type === "image" ? "toggleControls" : false;
            },
            clickSlide: function(current, event) {
                return current.type === "image" ? "toggleControls" : "close";
            },
            dblclickContent: function(current, event) {
                return current.type === "image" ? "zoom" : false;
            },
            dblclickSlide: function(current, event) {
                return current.type === "image" ? "zoom" : false;
            }
        },
        lang: "en",
        i18n: {
            en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
            },
            de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern"
            }
        }
    };
    var $W = $(window);
    var $D = $(document);
    var called = 0;
    var isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };
    var requestAFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        });
    })();
    var cancelAFrame = (function() {
        return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
            window.clearTimeout(id);
        });
    })();
    var transitionEnd = (function() {
        var el = document.createElement("fakeelement"),
            t;
        var transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        return "transitionend";
    })();
    var forceRedraw = function($el) {
        return $el && $el.length && $el[0].offsetHeight;
    };
    var mergeOpts = function(opts1, opts2) {
        var rez = $.extend(true, {}, opts1, opts2);
        $.each(opts2, function(key, value) {
            if ($.isArray(value)) {
                rez[key] = value;
            }
        });
        return rez;
    };
    var inViewport = function(elem) {
        var elemCenter, rez;
        if (!elem || elem.ownerDocument !== document) {
            return false;
        }
        $(".fancybox-container").css("pointer-events", "none");
        elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
        $(".fancybox-container").css("pointer-events", "");
        return rez;
    };
    var FancyBox = function(content, opts, index) {
        var self = this;
        self.opts = mergeOpts({
            index: index
        }, $.fancybox.defaults);
        if ($.isPlainObject(opts)) {
            self.opts = mergeOpts(self.opts, opts);
        }
        if ($.fancybox.isMobile) {
            self.opts = mergeOpts(self.opts, self.opts.mobile);
        }
        self.id = self.opts.id || ++called;
        self.currIndex = parseInt(self.opts.index, 10) || 0;
        self.prevIndex = null;
        self.prevPos = null;
        self.currPos = 0;
        self.firstRun = true;
        self.group = [];
        self.slides = {};
        self.addContent(content);
        if (!self.group.length) {
            return;
        }
        self.init();
    };
    $.extend(FancyBox.prototype, {
        init: function() {
            var self = this,
                firstItem = self.group[self.currIndex],
                firstItemOpts = firstItem.opts,
                $container, buttonStr;
            if (firstItemOpts.closeExisting) {
                $.fancybox.close(true);
            }
            $("body").addClass("fancybox-active");
            if (!$.fancybox.getInstance() && firstItemOpts.hideScrollbar !== false && !$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
                $("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                    (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");
                $("body").addClass("compensate-for-scrollbar");
            }
            buttonStr = "";
            $.each(firstItemOpts.buttons, function(index, value) {
                buttonStr += firstItemOpts.btnTpl[value] || "";
            });
            $container = $(self.translate(self, firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr("id", "fancybox-container-" + self.id).addClass(firstItemOpts.baseClass).data("FancyBox", self).appendTo(firstItemOpts.parentEl);
            self.$refs = {
                container: $container
            };
            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
                self.$refs[item] = $container.find(".fancybox-" + item);
            });
            self.trigger("onInit");
            self.activate();
            self.jumpTo(self.currIndex);
        },
        translate: function(obj, str) {
            var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
            return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
                return arr[n] === undefined ? match : arr[n];
            });
        },
        addContent: function(content) {
            var self = this,
                items = $.makeArray(content),
                thumbs;
            $.each(items, function(i, item) {
                var obj = {},
                    opts = {},
                    $item, type, found, src, srcParts;
                if ($.isPlainObject(item)) {
                    obj = item;
                    opts = item.opts || item;
                } else if ($.type(item) === "object" && $(item).length) {
                    $item = $(item);
                    opts = $item.data() || {};
                    opts = $.extend(true, {}, opts, opts.options);
                    opts.$orig = $item;
                    obj.src = self.opts.src || opts.src || $item.attr("href");
                    if (!obj.type && !obj.src) {
                        obj.type = "inline";
                        obj.src = item;
                    }
                } else {
                    obj = {
                        type: "html",
                        src: item + ""
                    };
                }
                obj.opts = $.extend(true, {}, self.opts, opts);
                if ($.isArray(opts.buttons)) {
                    obj.opts.buttons = opts.buttons;
                }
                if ($.fancybox.isMobile && obj.opts.mobile) {
                    obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
                }
                type = obj.type || obj.opts.type;
                src = obj.src || "";
                if (!type && src) {
                    if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
                        type = "video";
                        if (!obj.opts.video.format) {
                            obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
                        }
                    } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
                        type = "image";
                    } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
                        type = "iframe";
                        obj = $.extend(true, obj, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: false
                                }
                            }
                        });
                    } else if (src.charAt(0) === "#") {
                        type = "inline";
                    }
                }
                if (type) {
                    obj.type = type;
                } else {
                    self.trigger("objectNeedsType", obj);
                }
                if (!obj.contentType) {
                    obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
                }
                obj.index = self.group.length;
                if (obj.opts.smallBtn == "auto") {
                    obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
                }
                if (obj.opts.toolbar === "auto") {
                    obj.opts.toolbar = !obj.opts.smallBtn;
                }
                obj.$thumb = obj.opts.$thumb || null;
                if (obj.opts.$trigger && obj.index === self.opts.index) {
                    obj.$thumb = obj.opts.$trigger.find("img:first");
                    if (obj.$thumb.length) {
                        obj.opts.$orig = obj.opts.$trigger;
                    }
                }
                if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
                    obj.$thumb = obj.opts.$orig.find("img:first");
                }
                if (obj.$thumb && !obj.$thumb.length) {
                    obj.$thumb = null;
                }
                obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
                if ($.type(obj.opts.caption) === "function") {
                    obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
                }
                if ($.type(self.opts.caption) === "function") {
                    obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
                }
                if (!(obj.opts.caption instanceof $)) {
                    obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
                }
                if (obj.type === "ajax") {
                    srcParts = src.split(/\s+/, 2);
                    if (srcParts.length > 1) {
                        obj.src = srcParts.shift();
                        obj.opts.filter = srcParts.shift();
                    }
                }
                if (obj.opts.modal) {
                    obj.opts = $.extend(true, obj.opts, {
                        trapFocus: true,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: false,
                        clickSlide: false,
                        clickOutside: false,
                        dblclickContent: false,
                        dblclickSlide: false,
                        dblclickOutside: false
                    });
                }
                self.group.push(obj);
            });
            if (Object.keys(self.slides).length) {
                self.updateControls();
                thumbs = self.Thumbs;
                if (thumbs && thumbs.isActive) {
                    thumbs.create();
                    thumbs.focus();
                }
            }
        },
        addEvents: function() {
            var self = this;
            self.removeEvents();
            self.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                e.stopPropagation();
                e.preventDefault();
                self.close(e);
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
                e.stopPropagation();
                e.preventDefault();
                self.previous();
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
                e.stopPropagation();
                e.preventDefault();
                self.next();
            }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            });
            $W.on("orientationchange.fb resize.fb", function(e) {
                if (e && e.originalEvent && e.originalEvent.type === "resize") {
                    if (self.requestId) {
                        cancelAFrame(self.requestId);
                    }
                    self.requestId = requestAFrame(function() {
                        self.update(e);
                    });
                } else {
                    if (self.current && self.current.type === "iframe") {
                        self.$refs.stage.hide();
                    }
                    setTimeout(function() {
                        self.$refs.stage.show();
                        self.update(e);
                    }, $.fancybox.isMobile ? 600 : 250);
                }
            });
            $D.on("keydown.fb", function(e) {
                var instance = $.fancybox ? $.fancybox.getInstance() : null,
                    current = instance.current,
                    keycode = e.keyCode || e.which;
                if (keycode == 9) {
                    if (current.opts.trapFocus) {
                        self.focus(e);
                    }
                    return;
                }
                if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
                    return;
                }
                if (keycode === 8 || keycode === 27) {
                    e.preventDefault();
                    self.close(e);
                    return;
                }
                if (keycode === 37 || keycode === 38) {
                    e.preventDefault();
                    self.previous();
                    return;
                }
                if (keycode === 39 || keycode === 40) {
                    e.preventDefault();
                    self.next();
                    return;
                }
                self.trigger("afterKeydown", e, keycode);
            });
            if (self.group[self.currIndex].opts.idleTime) {
                self.idleSecondsCounter = 0;
                $D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                    self.idleSecondsCounter = 0;
                    if (self.isIdle) {
                        self.showControls();
                    }
                    self.isIdle = false;
                });
                self.idleInterval = window.setInterval(function() {
                    self.idleSecondsCounter++;
                    if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
                        self.isIdle = true;
                        self.idleSecondsCounter = 0;
                        self.hideControls();
                    }
                }, 1000);
            }
        },
        removeEvents: function() {
            var self = this;
            $W.off("orientationchange.fb resize.fb");
            $D.off("keydown.fb .fb-idle");
            this.$refs.container.off(".fb-close .fb-prev .fb-next");
            if (self.idleInterval) {
                window.clearInterval(self.idleInterval);
                self.idleInterval = null;
            }
        },
        previous: function(duration) {
            return this.jumpTo(this.currPos - 1, duration);
        },
        next: function(duration) {
            return this.jumpTo(this.currPos + 1, duration);
        },
        jumpTo: function(pos, duration) {
            var self = this,
                groupLen = self.group.length,
                firstRun, isMoved, loop, current, previous, slidePos, stagePos, prop, diff;
            if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
                return;
            }
            pos = parseInt(pos, 10);
            loop = self.current ? self.current.opts.loop : self.opts.loop;
            if (!loop && (pos < 0 || pos >= groupLen)) {
                return false;
            }
            firstRun = self.firstRun = !Object.keys(self.slides).length;
            previous = self.current;
            self.prevIndex = self.currIndex;
            self.prevPos = self.currPos;
            current = self.createSlide(pos);
            if (groupLen > 1) {
                if (loop || current.index < groupLen - 1) {
                    self.createSlide(pos + 1);
                }
                if (loop || current.index > 0) {
                    self.createSlide(pos - 1);
                }
            }
            self.current = current;
            self.currIndex = current.index;
            self.currPos = current.pos;
            self.trigger("beforeShow", firstRun);
            self.updateControls();
            current.forcedDuration = undefined;
            if ($.isNumeric(duration)) {
                current.forcedDuration = duration;
            } else {
                duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
            }
            duration = parseInt(duration, 10);
            isMoved = self.isMoved(current);
            current.$slide.addClass("fancybox-slide--current");
            if (firstRun) {
                if (current.opts.animationEffect && duration) {
                    self.$refs.container.css("transition-duration", duration + "ms");
                }
                self.$refs.container.addClass("fancybox-is-open").trigger("focus");
                self.loadSlide(current);
                self.preload("image");
                return;
            }
            slidePos = $.fancybox.getTranslate(previous.$slide);
            stagePos = $.fancybox.getTranslate(self.$refs.stage);
            $.each(self.slides, function(index, slide) {
                $.fancybox.stop(slide.$slide, true);
            });
            if (previous.pos !== current.pos) {
                previous.isComplete = false;
            }
            previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
            if (isMoved) {
                diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
                $.each(self.slides, function(index, slide) {
                    slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
                        return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    });
                    var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
                    $.fancybox.setTranslate(slide.$slide, {
                        top: 0,
                        left: leftPos - stagePos.left + diff
                    });
                    if (slide.pos !== current.pos) {
                        slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
                    }
                    forceRedraw(slide.$slide);
                    $.fancybox.animate(slide.$slide, {
                        top: 0,
                        left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
                    }, duration, function() {
                        slide.$slide.css({
                            transform: "",
                            opacity: ""
                        }).removeClass("fancybox-slide--next fancybox-slide--previous");
                        if (slide.pos === self.currPos) {
                            self.complete();
                        }
                    });
                });
            } else if (duration && current.opts.transitionEffect) {
                prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
                previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
                $.fancybox.animate(previous.$slide, prop, duration, function() {
                    previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
                }, false);
            }
            if (current.isLoaded) {
                self.revealContent(current);
            } else {
                self.loadSlide(current);
            }
            self.preload("image");
        },
        createSlide: function(pos) {
            var self = this,
                $slide, index;
            index = pos % self.group.length;
            index = index < 0 ? self.group.length + index : index;
            if (!self.slides[pos] && self.group[index]) {
                $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
                self.slides[pos] = $.extend(true, {}, self.group[index], {
                    pos: pos,
                    $slide: $slide,
                    isLoaded: false
                });
                self.updateSlide(self.slides[pos]);
            }
            return self.slides[pos];
        },
        scaleToActual: function(x, y, duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                canvasWidth = $.fancybox.getTranslate(current.$slide).width,
                canvasHeight = $.fancybox.getTranslate(current.$slide).height,
                newImgWidth = current.width,
                newImgHeight = current.height,
                imgPos, posX, posY, scaleX, scaleY;
            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }
            self.isAnimating = true;
            $.fancybox.stop($content);
            x = x === undefined ? canvasWidth * 0.5 : x;
            y = y === undefined ? canvasHeight * 0.5 : y;
            imgPos = $.fancybox.getTranslate($content);
            imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
            imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
            scaleX = newImgWidth / imgPos.width;
            scaleY = newImgHeight / imgPos.height;
            posX = canvasWidth * 0.5 - newImgWidth * 0.5;
            posY = canvasHeight * 0.5 - newImgHeight * 0.5;
            if (newImgWidth > canvasWidth) {
                posX = imgPos.left * scaleX - (x * scaleX - x);
                if (posX > 0) {
                    posX = 0;
                }
                if (posX < canvasWidth - newImgWidth) {
                    posX = canvasWidth - newImgWidth;
                }
            }
            if (newImgHeight > canvasHeight) {
                posY = imgPos.top * scaleY - (y * scaleY - y);
                if (posY > 0) {
                    posY = 0;
                }
                if (posY < canvasHeight - newImgHeight) {
                    posY = canvasHeight - newImgHeight;
                }
            }
            self.updateCursor(newImgWidth, newImgHeight);
            $.fancybox.animate($content, {
                top: posY,
                left: posX,
                scaleX: scaleX,
                scaleY: scaleY
            }, duration || 366, function() {
                self.isAnimating = false;
            });
            if (self.SlideShow && self.SlideShow.isActive) {
                self.SlideShow.stop();
            }
        },
        scaleToFit: function(duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                end;
            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }
            self.isAnimating = true;
            $.fancybox.stop($content);
            end = self.getFitPos(current);
            self.updateCursor(end.width, end.height);
            $.fancybox.animate($content, {
                top: end.top,
                left: end.left,
                scaleX: end.width / $content.width(),
                scaleY: end.height / $content.height()
            }, duration || 366, function() {
                self.isAnimating = false;
            });
        },
        getFitPos: function(slide) {
            var self = this,
                $content = slide.$content,
                $slide = slide.$slide,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                maxWidth, maxHeight, minRatio, aspectRatio, rez = {};
            if (!slide.isLoaded || !$content || !$content.length) {
                return false;
            }
            maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
            maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
            maxWidth -= parseFloat($slide.css("paddingLeft")) +
                parseFloat($slide.css("paddingRight")) +
                parseFloat($content.css("marginLeft")) +
                parseFloat($content.css("marginRight"));
            maxHeight -= parseFloat($slide.css("paddingTop")) +
                parseFloat($slide.css("paddingBottom")) +
                parseFloat($content.css("marginTop")) +
                parseFloat($content.css("marginBottom"));
            if (!width || !height) {
                width = maxWidth;
                height = maxHeight;
            }
            minRatio = Math.min(1, maxWidth / width, maxHeight / height);
            width = minRatio * width;
            height = minRatio * height;
            if (width > maxWidth - 0.5) {
                width = maxWidth;
            }
            if (height > maxHeight - 0.5) {
                height = maxHeight;
            }
            if (slide.type === "image") {
                rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
                rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
            } else if (slide.contentType === "video") {
                aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
                if (height > width / aspectRatio) {
                    height = width / aspectRatio;
                } else if (width > height * aspectRatio) {
                    width = height * aspectRatio;
                }
            }
            rez.width = width;
            rez.height = height;
            return rez;
        },
        update: function(e) {
            var self = this;
            $.each(self.slides, function(key, slide) {
                self.updateSlide(slide, e);
            });
        },
        updateSlide: function(slide, e) {
            var self = this,
                $content = slide && slide.$content,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                $slide = slide.$slide;
            self.adjustCaption(slide);
            if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
                $.fancybox.stop($content);
                $.fancybox.setTranslate($content, self.getFitPos(slide));
                if (slide.pos === self.currPos) {
                    self.isAnimating = false;
                    self.updateCursor();
                }
            }
            self.adjustLayout(slide);
            if ($slide.length) {
                $slide.trigger("refresh");
                if (slide.pos === self.currPos) {
                    self.$refs.toolbar.add(self.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
                }
            }
            self.trigger("onUpdate", slide, e);
        },
        centerSlide: function(duration) {
            var self = this,
                current = self.current,
                $slide = current.$slide;
            if (self.isClosing || !current) {
                return;
            }
            $slide.siblings().css({
                transform: "",
                opacity: ""
            });
            $slide.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next");
            $.fancybox.animate($slide, {
                top: 0,
                left: 0,
                opacity: 1
            }, duration === undefined ? 0 : duration, function() {
                $slide.css({
                    transform: "",
                    opacity: ""
                });
                if (!current.isComplete) {
                    self.complete();
                }
            }, false);
        },
        isMoved: function(slide) {
            var current = slide || this.current,
                slidePos, stagePos;
            if (!current) {
                return false;
            }
            stagePos = $.fancybox.getTranslate(this.$refs.stage);
            slidePos = $.fancybox.getTranslate(current.$slide);
            return (!current.$slide.hasClass("fancybox-animated") && (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5));
        },
        updateCursor: function(nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                $container = self.$refs.container,
                canPan, isZoomable;
            if (!current || self.isClosing || !self.Guestures) {
                return;
            }
            $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
            canPan = self.canPan(nextWidth, nextHeight);
            isZoomable = canPan ? true : self.isZoomable();
            $container.toggleClass("fancybox-is-zoomable", isZoomable);
            $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
            if (canPan) {
                $container.addClass("fancybox-can-pan");
            } else if (isZoomable && (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))) {
                $container.addClass("fancybox-can-zoomIn");
            } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
                $container.addClass("fancybox-can-swipe");
            }
        },
        isZoomable: function() {
            var self = this,
                current = self.current,
                fitPos;
            if (current && !self.isClosing && current.type === "image" && !current.hasError) {
                if (!current.isLoaded) {
                    return true;
                }
                fitPos = self.getFitPos(current);
                if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
                    return true;
                }
            }
            return false;
        },
        isScaledDown: function(nextWidth, nextHeight) {
            var self = this,
                rez = false,
                current = self.current,
                $content = current.$content;
            if (nextWidth !== undefined && nextHeight !== undefined) {
                rez = nextWidth < current.width && nextHeight < current.height;
            } else if ($content) {
                rez = $.fancybox.getTranslate($content);
                rez = rez.width < current.width && rez.height < current.height;
            }
            return rez;
        },
        canPan: function(nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                pos = null,
                rez = false;
            if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
                rez = self.getFitPos(current);
                if (nextWidth !== undefined && nextHeight !== undefined) {
                    pos = {
                        width: nextWidth,
                        height: nextHeight
                    };
                } else if (current.isComplete) {
                    pos = $.fancybox.getTranslate(current.$content);
                }
                if (pos && rez) {
                    rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
                }
            }
            return rez;
        },
        loadSlide: function(slide) {
            var self = this,
                type, $slide, ajaxLoad;
            if (slide.isLoading || slide.isLoaded) {
                return;
            }
            slide.isLoading = true;
            if (self.trigger("beforeLoad", slide) === false) {
                slide.isLoading = false;
                return false;
            }
            type = slide.type;
            $slide = slide.$slide;
            $slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass);
            switch (type) {
                case "image":
                    self.setImage(slide);
                    break;
                case "iframe":
                    self.setIframe(slide);
                    break;
                case "html":
                    self.setContent(slide, slide.src || slide.content);
                    break;
                case "video":
                    self.setContent(slide, slide.opts.video.tpl.replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "").replace("{{poster}}", slide.thumb || ""));
                    break;
                case "inline":
                    if ($(slide.src).length) {
                        self.setContent(slide, $(slide.src));
                    } else {
                        self.setError(slide);
                    }
                    break;
                case "ajax":
                    self.showLoading(slide);
                    ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
                        url: slide.src,
                        success: function(data, textStatus) {
                            if (textStatus === "success") {
                                self.setContent(slide, data);
                            }
                        },
                        error: function(jqXHR, textStatus) {
                            if (jqXHR && textStatus !== "abort") {
                                self.setError(slide);
                            }
                        }
                    }));
                    $slide.one("onReset", function() {
                        ajaxLoad.abort();
                    });
                    break;
                default:
                    self.setError(slide);
                    break;
            }
            return true;
        },
        setImage: function(slide) {
            var self = this,
                ghost;
            setTimeout(function() {
                var $img = slide.$image;
                if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
                    self.showLoading(slide);
                }
            }, 50);
            self.checkSrcset(slide);
            slide.$content = $('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide.addClass("fancybox-slide--image"));
            if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
                slide.width = slide.opts.width;
                slide.height = slide.opts.height;
                ghost = document.createElement("img");
                ghost.onerror = function() {
                    $(this).remove();
                    slide.$ghost = null;
                };
                ghost.onload = function() {
                    self.afterLoad(slide);
                };
                slide.$ghost = $(ghost).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.thumb);
            }
            self.setBigImage(slide);
        },
        checkSrcset: function(slide) {
            var srcset = slide.opts.srcset || slide.opts.image.srcset,
                found, temp, pxRatio, windowWidth;
            if (srcset) {
                pxRatio = window.devicePixelRatio || 1;
                windowWidth = window.innerWidth * pxRatio;
                temp = srcset.split(",").map(function(el) {
                    var ret = {};
                    el.trim().split(/\s+/).forEach(function(el, i) {
                        var value = parseInt(el.substring(0, el.length - 1), 10);
                        if (i === 0) {
                            return (ret.url = el);
                        }
                        if (value) {
                            ret.value = value;
                            ret.postfix = el[el.length - 1];
                        }
                    });
                    return ret;
                });
                temp.sort(function(a, b) {
                    return a.value - b.value;
                });
                for (var j = 0; j < temp.length; j++) {
                    var el = temp[j];
                    if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
                        found = el;
                        break;
                    }
                }
                if (!found && temp.length) {
                    found = temp[temp.length - 1];
                }
                if (found) {
                    slide.src = found.url;
                    if (slide.width && slide.height && found.postfix == "w") {
                        slide.height = (slide.width / slide.height) * found.value;
                        slide.width = found.value;
                    }
                    slide.opts.srcset = srcset;
                }
            }
        },
        setBigImage: function(slide) {
            var self = this,
                img = document.createElement("img"),
                $img = $(img);
            slide.$image = $img.one("error", function() {
                self.setError(slide);
            }).one("load", function() {
                var sizes;
                if (!slide.$ghost) {
                    self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
                    self.afterLoad(slide);
                }
                if (self.isClosing) {
                    return;
                }
                if (slide.opts.srcset) {
                    sizes = slide.opts.sizes;
                    if (!sizes || sizes === "auto") {
                        sizes = (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) + "vw";
                    }
                    $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
                }
                if (slide.$ghost) {
                    setTimeout(function() {
                        if (slide.$ghost && !self.isClosing) {
                            slide.$ghost.hide();
                        }
                    }, Math.min(300, Math.max(1000, slide.height / 1600)));
                }
                self.hideLoading(slide);
            }).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);
            if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
                $img.trigger("load");
            } else if (img.error) {
                $img.trigger("error");
            }
        },
        resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
            var maxWidth = parseInt(slide.opts.width, 10),
                maxHeight = parseInt(slide.opts.height, 10);
            slide.width = imgWidth;
            slide.height = imgHeight;
            if (maxWidth > 0) {
                slide.width = maxWidth;
                slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
            }
            if (maxHeight > 0) {
                slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
                slide.height = maxHeight;
            }
        },
        setIframe: function(slide) {
            var self = this,
                opts = slide.opts.iframe,
                $slide = slide.$slide,
                $iframe;
            slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
            $slide.addClass("fancybox-slide--" + slide.contentType);
            slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);
            if (opts.preload) {
                self.showLoading(slide);
                $iframe.on("load.fb error.fb", function(e) {
                    this.isReady = 1;
                    slide.$slide.trigger("refresh");
                    self.afterLoad(slide);
                });
                $slide.on("refresh.fb", function() {
                    var $content = slide.$content,
                        frameWidth = opts.css.width,
                        frameHeight = opts.css.height,
                        $contents, $body;
                    if ($iframe[0].isReady !== 1) {
                        return;
                    }
                    try {
                        $contents = $iframe.contents();
                        $body = $contents.find("body");
                    } catch (ignore) {}
                    if ($body && $body.length && $body.children().length) {
                        $slide.css("overflow", "visible");
                        $content.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        });
                        if (frameWidth === undefined) {
                            frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
                        }
                        $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
                        if (frameHeight === undefined) {
                            frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
                        }
                        $content.css("height", frameHeight ? frameHeight : "");
                        $slide.css("overflow", "auto");
                    }
                    $content.removeClass("fancybox-is-hidden");
                });
            } else {
                self.afterLoad(slide);
            }
            $iframe.attr("src", slide.src);
            $slide.one("onReset", function() {
                try {
                    $(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                } catch (ignore) {}
                $(this).off("refresh.fb").empty();
                slide.isLoaded = false;
                slide.isRevealed = false;
            });
        },
        setContent: function(slide, content) {
            var self = this;
            if (self.isClosing) {
                return;
            }
            self.hideLoading(slide);
            if (slide.$content) {
                $.fancybox.stop(slide.$content);
            }
            slide.$slide.empty();
            if (isQuery(content) && content.parent().length) {
                if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
                    content.parents(".fancybox-slide").trigger("onReset");
                }
                slide.$placeholder = $("<div>").hide().insertAfter(content);
                content.css("display", "inline-block");
            } else if (!slide.hasError) {
                if ($.type(content) === "string") {
                    content = $("<div>").append($.trim(content)).contents();
                }
                if (slide.opts.filter) {
                    content = $("<div>").html(content).find(slide.opts.filter);
                }
            }
            slide.$slide.one("onReset", function() {
                $(this).find("video,audio").trigger("pause");
                if (slide.$placeholder) {
                    slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
                    slide.$placeholder = null;
                }
                if (slide.$smallBtn) {
                    slide.$smallBtn.remove();
                    slide.$smallBtn = null;
                }
                if (!slide.hasError) {
                    $(this).empty();
                    slide.isLoaded = false;
                    slide.isRevealed = false;
                }
            });
            $(content).appendTo(slide.$slide);
            if ($(content).is("video,audio")) {
                $(content).addClass("fancybox-video");
                $(content).wrap("<div></div>");
                slide.contentType = "video";
                slide.opts.width = slide.opts.width || $(content).attr("width");
                slide.opts.height = slide.opts.height || $(content).attr("height");
            }
            slide.$content = slide.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
            slide.$content.siblings().hide();
            if (!slide.$content.length) {
                slide.$content = slide.$slide.wrapInner("<div></div>").children().first();
            }
            slide.$content.addClass("fancybox-content");
            slide.$slide.addClass("fancybox-slide--" + slide.contentType);
            self.afterLoad(slide);
        },
        setError: function(slide) {
            slide.hasError = true;
            slide.$slide.trigger("onReset").removeClass("fancybox-slide--" + slide.contentType).addClass("fancybox-slide--error");
            slide.contentType = "html";
            this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
            if (slide.pos === this.currPos) {
                this.isAnimating = false;
            }
        },
        showLoading: function(slide) {
            var self = this;
            slide = slide || self.current;
            if (slide && !slide.$spinner) {
                slide.$spinner = $(self.translate(self, self.opts.spinnerTpl)).appendTo(slide.$slide).hide().fadeIn("fast");
            }
        },
        hideLoading: function(slide) {
            var self = this;
            slide = slide || self.current;
            if (slide && slide.$spinner) {
                slide.$spinner.stop().remove();
                delete slide.$spinner;
            }
        },
        afterLoad: function(slide) {
            var self = this;
            if (self.isClosing) {
                return;
            }
            slide.isLoading = false;
            slide.isLoaded = true;
            self.trigger("afterLoad", slide);
            self.hideLoading(slide);
            if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
                slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
            }
            if (slide.opts.protect && slide.$content && !slide.hasError) {
                slide.$content.on("contextmenu.fb", function(e) {
                    if (e.button == 2) {
                        e.preventDefault();
                    }
                    return true;
                });
                if (slide.type === "image") {
                    $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
                }
            }
            self.adjustCaption(slide);
            self.adjustLayout(slide);
            if (slide.pos === self.currPos) {
                self.updateCursor();
            }
            self.revealContent(slide);
        },
        adjustCaption: function(slide) {
            var self = this,
                current = slide || self.current,
                caption = current.opts.caption,
                preventOverlap = current.opts.preventCaptionOverlap,
                $caption = self.$refs.caption,
                $clone, captionH = false;
            $caption.toggleClass("fancybox-caption--separate", preventOverlap);
            if (preventOverlap && caption && caption.length) {
                if (current.pos !== self.currPos) {
                    $clone = $caption.clone().appendTo($caption.parent());
                    $clone.children().eq(0).empty().html(caption);
                    captionH = $clone.outerHeight(true);
                    $clone.empty().remove();
                } else if (self.$caption) {
                    captionH = self.$caption.outerHeight(true);
                }
                current.$slide.css("padding-bottom", captionH || "");
            }
        },
        adjustLayout: function(slide) {
            var self = this,
                current = slide || self.current,
                scrollHeight, marginBottom, inlinePadding, actualPadding;
            if (current.isLoaded && current.opts.disableLayoutFix !== true) {
                current.$content.css("margin-bottom", "");
                if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
                    inlinePadding = current.$slide[0].style["padding-bottom"];
                    actualPadding = current.$slide.css("padding-bottom");
                    if (parseFloat(actualPadding) > 0) {
                        scrollHeight = current.$slide[0].scrollHeight;
                        current.$slide.css("padding-bottom", 0);
                        if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                            marginBottom = actualPadding;
                        }
                        current.$slide.css("padding-bottom", inlinePadding);
                    }
                }
                current.$content.css("margin-bottom", marginBottom);
            }
        },
        revealContent: function(slide) {
            var self = this,
                $slide = slide.$slide,
                end = false,
                start = false,
                isMoved = self.isMoved(slide),
                isRevealed = slide.isRevealed,
                effect, effectClassName, duration, opacity;
            slide.isRevealed = true;
            effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
            duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
            duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
            if (isMoved || slide.pos !== self.currPos || !duration) {
                effect = false;
            }
            if (effect === "zoom") {
                if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
                    end = self.getFitPos(slide);
                } else {
                    effect = "fade";
                }
            }
            if (effect === "zoom") {
                self.isAnimating = true;
                end.scaleX = end.width / start.width;
                end.scaleY = end.height / start.height;
                opacity = slide.opts.zoomOpacity;
                if (opacity == "auto") {
                    opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
                }
                if (opacity) {
                    start.opacity = 0.1;
                    end.opacity = 1;
                }
                $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
                forceRedraw(slide.$content);
                $.fancybox.animate(slide.$content, end, duration, function() {
                    self.isAnimating = false;
                    self.complete();
                });
                return;
            }
            self.updateSlide(slide);
            if (!effect) {
                slide.$content.removeClass("fancybox-is-hidden");
                if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
                    slide.$content.hide().fadeIn("fast");
                }
                if (slide.pos === self.currPos) {
                    self.complete();
                }
                return;
            }
            $.fancybox.stop($slide);
            effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
            $slide.addClass(effectClassName).removeClass("fancybox-slide--current");
            slide.$content.removeClass("fancybox-is-hidden");
            forceRedraw($slide);
            if (slide.type !== "image") {
                slide.$content.hide().show(0);
            }
            $.fancybox.animate($slide, "fancybox-slide--current", duration, function() {
                $slide.removeClass(effectClassName).css({
                    transform: "",
                    opacity: ""
                });
                if (slide.pos === self.currPos) {
                    self.complete();
                }
            }, true);
        },
        getThumbPos: function(slide) {
            var rez = false,
                $thumb = slide.$thumb,
                thumbPos, btw, brw, bbw, blw;
            if (!$thumb || !inViewport($thumb[0])) {
                return false;
            }
            thumbPos = $.fancybox.getTranslate($thumb);
            btw = parseFloat($thumb.css("border-top-width") || 0);
            brw = parseFloat($thumb.css("border-right-width") || 0);
            bbw = parseFloat($thumb.css("border-bottom-width") || 0);
            blw = parseFloat($thumb.css("border-left-width") || 0);
            rez = {
                top: thumbPos.top + btw,
                left: thumbPos.left + blw,
                width: thumbPos.width - brw - blw,
                height: thumbPos.height - btw - bbw,
                scaleX: 1,
                scaleY: 1
            };
            return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
        },
        complete: function() {
            var self = this,
                current = self.current,
                slides = {},
                $el;
            if (self.isMoved() || !current.isLoaded) {
                return;
            }
            if (!current.isComplete) {
                current.isComplete = true;
                current.$slide.siblings().trigger("onReset");
                self.preload("inline");
                forceRedraw(current.$slide);
                current.$slide.addClass("fancybox-slide--complete");
                $.each(self.slides, function(key, slide) {
                    if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
                        slides[slide.pos] = slide;
                    } else if (slide) {
                        $.fancybox.stop(slide.$slide);
                        slide.$slide.off().remove();
                    }
                });
                self.slides = slides;
            }
            self.isAnimating = false;
            self.updateCursor();
            self.trigger("afterShow");
            if (!!current.opts.video.autoStart) {
                current.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    if (Document.exitFullscreen) {
                        Document.exitFullscreen();
                    } else if (this.webkitExitFullscreen) {
                        this.webkitExitFullscreen();
                    }
                    self.next();
                });
            }
            if (current.opts.autoFocus && current.contentType === "html") {
                $el = current.$content.find("input[autofocus]:enabled:visible:first");
                if ($el.length) {
                    $el.trigger("focus");
                } else {
                    self.focus(null, true);
                }
            }
            current.$slide.scrollTop(0).scrollLeft(0);
        },
        preload: function(type) {
            var self = this,
                prev, next;
            if (self.group.length < 2) {
                return;
            }
            next = self.slides[self.currPos + 1];
            prev = self.slides[self.currPos - 1];
            if (prev && prev.type === type) {
                self.loadSlide(prev);
            }
            if (next && next.type === type) {
                self.loadSlide(next);
            }
        },
        focus: function(e, firstRun) {
            var self = this,
                focusableStr = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(","),
                focusableItems, focusedItemIndex;
            if (self.isClosing) {
                return;
            }
            if (e || !self.current || !self.current.isComplete) {
                focusableItems = self.$refs.container.find("*:visible");
            } else {
                focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
            }
            focusableItems = focusableItems.filter(focusableStr).filter(function() {
                return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
            });
            if (focusableItems.length) {
                focusedItemIndex = focusableItems.index(document.activeElement);
                if (e && e.shiftKey) {
                    if (focusedItemIndex < 0 || focusedItemIndex == 0) {
                        e.preventDefault();
                        focusableItems.eq(focusableItems.length - 1).trigger("focus");
                    }
                } else {
                    if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
                        if (e) {
                            e.preventDefault();
                        }
                        focusableItems.eq(0).trigger("focus");
                    }
                }
            } else {
                self.$refs.container.trigger("focus");
            }
        },
        activate: function() {
            var self = this;
            $(".fancybox-container").each(function() {
                var instance = $(this).data("FancyBox");
                if (instance && instance.id !== self.id && !instance.isClosing) {
                    instance.trigger("onDeactivate");
                    instance.removeEvents();
                    instance.isVisible = false;
                }
            });
            self.isVisible = true;
            if (self.current || self.isIdle) {
                self.update();
                self.updateControls();
            }
            self.trigger("onActivate");
            self.addEvents();
        },
        close: function(e, d) {
            var self = this,
                current = self.current,
                effect, duration, $content, domRect, opacity, start, end;
            var done = function() {
                self.cleanUp(e);
            };
            if (self.isClosing) {
                return false;
            }
            self.isClosing = true;
            if (self.trigger("beforeClose", e) === false) {
                self.isClosing = false;
                requestAFrame(function() {
                    self.update();
                });
                return false;
            }
            self.removeEvents();
            $content = current.$content;
            effect = current.opts.animationEffect;
            duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
            current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
            if (e !== true) {
                $.fancybox.stop(current.$slide);
            } else {
                effect = false;
            }
            current.$slide.siblings().trigger("onReset").remove();
            if (duration) {
                self.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", duration + "ms");
            }
            self.hideLoading(current);
            self.hideControls(true);
            self.updateCursor();
            if (effect === "zoom" && !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))) {
                effect = "fade";
            }
            if (effect === "zoom") {
                $.fancybox.stop($content);
                domRect = $.fancybox.getTranslate($content);
                start = {
                    top: domRect.top,
                    left: domRect.left,
                    scaleX: domRect.width / end.width,
                    scaleY: domRect.height / end.height,
                    width: end.width,
                    height: end.height
                };
                opacity = current.opts.zoomOpacity;
                if (opacity == "auto") {
                    opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
                }
                if (opacity) {
                    end.opacity = 0;
                }
                $.fancybox.setTranslate($content, start);
                forceRedraw($content);
                $.fancybox.animate($content, end, duration, done);
                return true;
            }
            if (effect && duration) {
                $.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + effect, duration, done);
            } else {
                if (e === true) {
                    setTimeout(done, duration);
                } else {
                    done();
                }
            }
            return true;
        },
        cleanUp: function(e) {
            var self = this,
                instance, $focus = self.current.opts.$orig,
                x, y;
            self.current.$slide.trigger("onReset");
            self.$refs.container.empty().remove();
            self.trigger("afterClose", e);
            if (!!self.current.opts.backFocus) {
                if (!$focus || !$focus.length || !$focus.is(":visible")) {
                    $focus = self.$trigger;
                }
                if ($focus && $focus.length) {
                    x = window.scrollX;
                    y = window.scrollY;
                    $focus.trigger("focus");
                    $("html, body").scrollTop(y).scrollLeft(x);
                }
            }
            self.current = null;
            instance = $.fancybox.getInstance();
            if (instance) {
                instance.activate();
            } else {
                $("body").removeClass("fancybox-active compensate-for-scrollbar");
                $("#fancybox-style-noscroll").remove();
            }
        },
        trigger: function(name, slide) {
            var args = Array.prototype.slice.call(arguments, 1),
                self = this,
                obj = slide && slide.opts ? slide : self.current,
                rez;
            if (obj) {
                args.unshift(obj);
            } else {
                obj = self;
            }
            args.unshift(self);
            if ($.isFunction(obj.opts[name])) {
                rez = obj.opts[name].apply(obj, args);
            }
            if (rez === false) {
                return rez;
            }
            if (name === "afterClose" || !self.$refs) {
                $D.trigger(name + ".fb", args);
            } else {
                self.$refs.container.trigger(name + ".fb", args);
            }
        },
        updateControls: function() {
            var self = this,
                current = self.current,
                index = current.index,
                $container = self.$refs.container,
                $caption = self.$refs.caption,
                caption = current.opts.caption;
            current.$slide.trigger("refresh");
            if (caption && caption.length) {
                self.$caption = $caption;
                $caption.children().eq(0).html(caption);
            } else {
                self.$caption = null;
            }
            if (!self.hasHiddenControls && !self.isIdle) {
                self.showControls();
            }
            $container.find("[data-fancybox-count]").html(self.group.length);
            $container.find("[data-fancybox-index]").html(index + 1);
            $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
            $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
            if (current.type === "image") {
                $container.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show();
            } else if (current.opts.toolbar) {
                $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
            }
            if ($(document.activeElement).is(":hidden,[disabled]")) {
                self.$refs.container.trigger("focus");
            }
        },
        hideControls: function(andCaption) {
            var self = this,
                arr = ["infobar", "toolbar", "nav"];
            if (andCaption || !self.current.opts.preventCaptionOverlap) {
                arr.push("caption");
            }
            this.$refs.container.removeClass(arr.map(function(i) {
                return "fancybox-show-" + i;
            }).join(" "));
            this.hasHiddenControls = true;
        },
        showControls: function() {
            var self = this,
                opts = self.current ? self.current.opts : self.opts,
                $container = self.$refs.container;
            self.hasHiddenControls = false;
            self.idleSecondsCounter = 0;
            $container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1)).toggleClass("fancybox-show-caption", !!self.$caption).toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal);
        },
        toggleControls: function() {
            if (this.hasHiddenControls) {
                this.showControls();
            } else {
                this.hideControls();
            }
        }
    });
    $.fancybox = {
        version: "3.5.7",
        defaults: defaults,
        getInstance: function(command) {
            var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                args = Array.prototype.slice.call(arguments, 1);
            if (instance instanceof FancyBox) {
                if ($.type(command) === "string") {
                    instance[command].apply(instance, args);
                } else if ($.type(command) === "function") {
                    command.apply(instance, args);
                }
                return instance;
            }
            return false;
        },
        open: function(items, opts, index) {
            return new FancyBox(items, opts, index);
        },
        close: function(all) {
            var instance = this.getInstance();
            if (instance) {
                instance.close();
                if (all === true) {
                    this.close(all);
                }
            }
        },
        destroy: function() {
            this.close(true);
            $D.add("body").off("click.fb-start", "**");
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        use3d: (function() {
            var div = document.createElement("div");
            return (window.getComputedStyle && window.getComputedStyle(div) && window.getComputedStyle(div).getPropertyValue("transform") && !(document.documentMode && document.documentMode < 11));
        })(),
        getTranslate: function($el) {
            var domRect;
            if (!$el || !$el.length) {
                return false;
            }
            domRect = $el[0].getBoundingClientRect();
            return {
                top: domRect.top || 0,
                left: domRect.left || 0,
                width: domRect.width,
                height: domRect.height,
                opacity: parseFloat($el.css("opacity"))
            };
        },
        setTranslate: function($el, props) {
            var str = "",
                css = {};
            if (!$el || !props) {
                return;
            }
            if (props.left !== undefined || props.top !== undefined) {
                str = (props.left === undefined ? $el.position().left : props.left) + "px, " +
                    (props.top === undefined ? $el.position().top : props.top) + "px";
                if (this.use3d) {
                    str = "translate3d(" + str + ", 0px)";
                } else {
                    str = "translate(" + str + ")";
                }
            }
            if (props.scaleX !== undefined && props.scaleY !== undefined) {
                str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
            } else if (props.scaleX !== undefined) {
                str += " scaleX(" + props.scaleX + ")";
            }
            if (str.length) {
                css.transform = str;
            }
            if (props.opacity !== undefined) {
                css.opacity = props.opacity;
            }
            if (props.width !== undefined) {
                css.width = props.width;
            }
            if (props.height !== undefined) {
                css.height = props.height;
            }
            return $el.css(css);
        },
        animate: function($el, to, duration, callback, leaveAnimationName) {
            var self = this,
                from;
            if ($.isFunction(duration)) {
                callback = duration;
                duration = null;
            }
            self.stop($el);
            from = self.getTranslate($el);
            $el.on(transitionEnd, function(e) {
                if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
                    return;
                }
                self.stop($el);
                if ($.isNumeric(duration)) {
                    $el.css("transition-duration", "");
                }
                if ($.isPlainObject(to)) {
                    if (to.scaleX !== undefined && to.scaleY !== undefined) {
                        self.setTranslate($el, {
                            top: to.top,
                            left: to.left,
                            width: from.width * to.scaleX,
                            height: from.height * to.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        });
                    }
                } else if (leaveAnimationName !== true) {
                    $el.removeClass(to);
                }
                if ($.isFunction(callback)) {
                    callback(e);
                }
            });
            if ($.isNumeric(duration)) {
                $el.css("transition-duration", duration + "ms");
            }
            if ($.isPlainObject(to)) {
                if (to.scaleX !== undefined && to.scaleY !== undefined) {
                    delete to.width;
                    delete to.height;
                    if ($el.parent().hasClass("fancybox-slide--image")) {
                        $el.parent().addClass("fancybox-is-scaling");
                    }
                }
                $.fancybox.setTranslate($el, to);
            } else {
                $el.addClass(to);
            }
            $el.data("timer", setTimeout(function() {
                $el.trigger(transitionEnd);
            }, duration + 33));
        },
        stop: function($el, callCallback) {
            if ($el && $el.length) {
                clearTimeout($el.data("timer"));
                if (callCallback) {
                    $el.trigger(transitionEnd);
                }
                $el.off(transitionEnd).css("transition-duration", "");
                $el.parent().removeClass("fancybox-is-scaling");
            }
        }
    };

    function _run(e, opts) {
        var items = [],
            index = 0,
            $target, value, instance;
        if (e && e.isDefaultPrevented()) {
            return;
        }
        e.preventDefault();
        opts = opts || {};
        if (e && e.data) {
            opts = mergeOpts(e.data.options, opts);
        }
        $target = opts.$target || $(e.currentTarget).trigger("blur");
        instance = $.fancybox.getInstance();
        if (instance && instance.$trigger && instance.$trigger.is($target)) {
            return;
        }
        if (opts.selector) {
            items = $(opts.selector);
        } else {
            value = $target.attr("data-fancybox") || "";
            if (value) {
                items = e.data ? e.data.items : [];
                items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
            } else {
                items = [$target];
            }
        }
        index = $(items).index($target);
        if (index < 0) {
            index = 0;
        }
        instance = $.fancybox.open(items, opts, index);
        instance.$trigger = $target;
    }
    $.fn.fancybox = function(options) {
        var selector;
        options = options || {};
        selector = options.selector || false;
        if (selector) {
            $("body").off("click.fb-start", selector).on("click.fb-start", selector, {
                options: options
            }, _run);
        } else {
            this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: options
            }, _run);
        }
        return this;
    };
    $D.on("click.fb-start", "[data-fancybox]", _run);
    $D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
        $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]').eq($(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: $(this)
        });
    });
    (function() {
        var buttonStr = ".fancybox-button",
            focusStr = "fancybox-focus",
            $pressed = null;
        $D.on("mousedown mouseup focus blur", buttonStr, function(e) {
            switch (e.type) {
                case "mousedown":
                    $pressed = $(this);
                    break;
                case "mouseup":
                    $pressed = null;
                    break;
                case "focusin":
                    $(buttonStr).removeClass(focusStr);
                    if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
                        $(this).addClass(focusStr);
                    }
                    break;
                case "focusout":
                    $(buttonStr).removeClass(focusStr);
                    break;
            }
        });
    })();
})(window, document, jQuery);
(function($) {
    "use strict";
    var defaults = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(rez) {
                return ("//maps.google." +
                    rez[2] + "/?ll=" +
                    (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") + "&output=" +
                    (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed"));
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(rez) {
                return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    };
    var format = function(url, rez, params) {
        if (!url) {
            return;
        }
        params = params || "";
        if ($.type(params) === "object") {
            params = $.param(params, true);
        }
        $.each(rez, function(key, value) {
            url = url.replace("$" + key, value || "");
        });
        if (params.length) {
            url += (url.indexOf("?") > 0 ? "&" : "?") + params;
        }
        return url;
    };
    $(document).on("objectNeedsType.fb", function(e, instance, item) {
        var url = item.src || "",
            type = false,
            media, thumb, rez, params, urlParams, paramObj, provider;
        media = $.extend(true, {}, defaults, item.opts.media);
        $.each(media, function(providerName, providerOpts) {
            rez = url.match(providerOpts.matcher);
            if (!rez) {
                return;
            }
            type = providerOpts.type;
            provider = providerName;
            paramObj = {};
            if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
                urlParams = rez[providerOpts.paramPlace];
                if (urlParams[0] == "?") {
                    urlParams = urlParams.substring(1);
                }
                urlParams = urlParams.split("&");
                for (var m = 0; m < urlParams.length; ++m) {
                    var p = urlParams[m].split("=", 2);
                    if (p.length == 2) {
                        paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                    }
                }
            }
            params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
            url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
            thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
            if (providerName === "youtube") {
                url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
                    return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
                });
            } else if (providerName === "vimeo") {
                url = url.replace("&%23", "#");
            }
            return false;
        });
        if (type) {
            if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
                item.opts.thumb = thumb;
            }
            if (type === "iframe") {
                item.opts = $.extend(true, item.opts, {
                    iframe: {
                        preload: false,
                        attr: {
                            scrolling: "no"
                        }
                    }
                });
            }
            $.extend(item, {
                type: type,
                src: url,
                origSrc: item.src,
                contentSource: provider,
                contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
            });
        } else if (url) {
            item.type = item.opts.defaultType;
        }
    });
    var VideoAPILoader = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: false,
            loaded: false
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: false,
            loaded: false
        },
        load: function(vendor) {
            var _this = this,
                script;
            if (this[vendor].loaded) {
                setTimeout(function() {
                    _this.done(vendor);
                });
                return;
            }
            if (this[vendor].loading) {
                return;
            }
            this[vendor].loading = true;
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this[vendor].src;
            if (vendor === "youtube") {
                window.onYouTubeIframeAPIReady = function() {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            } else {
                script.onload = function() {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            }
            document.body.appendChild(script);
        },
        done: function(vendor) {
            var instance, $el, player;
            if (vendor === "youtube") {
                delete window.onYouTubeIframeAPIReady;
            }
            instance = $.fancybox.getInstance();
            if (instance) {
                $el = instance.current.$content.find("iframe");
                if (vendor === "youtube" && YT !== undefined && YT) {
                    player = new YT.Player($el.attr("id"), {
                        events: {
                            onStateChange: function(e) {
                                if (e.data == 0) {
                                    instance.next();
                                }
                            }
                        }
                    });
                } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
                    player = new Vimeo.Player($el);
                    player.on("ended", function() {
                        instance.next();
                    });
                }
            }
        }
    };
    $(document).on({
        "afterShow.fb": function(e, instance, current) {
            if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
                VideoAPILoader.load(current.contentSource);
            }
        }
    });
})(jQuery);
(function(window, document, $) {
    "use strict";
    var requestAFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        });
    })();
    var cancelAFrame = (function() {
        return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
            window.clearTimeout(id);
        });
    })();
    var getPointerXY = function(e) {
        var result = [];
        e = e.originalEvent || e || window.e;
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var key in e) {
            if (e[key].pageX) {
                result.push({
                    x: e[key].pageX,
                    y: e[key].pageY
                });
            } else if (e[key].clientX) {
                result.push({
                    x: e[key].clientX,
                    y: e[key].clientY
                });
            }
        }
        return result;
    };
    var distance = function(point2, point1, what) {
        if (!point1 || !point2) {
            return 0;
        }
        if (what === "x") {
            return point2.x - point1.x;
        } else if (what === "y") {
            return point2.y - point1.y;
        }
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
    var isClickable = function($el) {
        if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
            return true;
        }
        for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
            if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
                return true;
            }
        }
        return false;
    };
    var hasScrollbars = function(el) {
        var overflowY = window.getComputedStyle(el)["overflow-y"],
            overflowX = window.getComputedStyle(el)["overflow-x"],
            vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
            horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
        return vertical || horizontal;
    };
    var isScrollable = function($el) {
        var rez = false;
        while (true) {
            rez = hasScrollbars($el.get(0));
            if (rez) {
                break;
            }
            $el = $el.parent();
            if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
                break;
            }
        }
        return rez;
    };
    var Guestures = function(instance) {
        var self = this;
        self.instance = instance;
        self.$bg = instance.$refs.bg;
        self.$stage = instance.$refs.stage;
        self.$container = instance.$refs.container;
        self.destroy();
        self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
    };
    Guestures.prototype.destroy = function() {
        var self = this;
        self.$container.off(".fb.touch");
        $(document).off(".fb.touch");
        if (self.requestId) {
            cancelAFrame(self.requestId);
            self.requestId = null;
        }
        if (self.tapped) {
            clearTimeout(self.tapped);
            self.tapped = null;
        }
    };
    Guestures.prototype.ontouchstart = function(e) {
        var self = this,
            $target = $(e.target),
            instance = self.instance,
            current = instance.current,
            $slide = current.$slide,
            $content = current.$content,
            isTouchDevice = e.type == "touchstart";
        if (isTouchDevice) {
            self.$container.off("mousedown.fb.touch");
        }
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }
        if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
            return;
        }
        if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
            return;
        }
        if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
            e.stopPropagation();
            e.preventDefault();
            return;
        }
        self.realPoints = self.startPoints = getPointerXY(e);
        if (!self.startPoints.length) {
            return;
        }
        if (current.touch) {
            e.stopPropagation();
        }
        self.startEvent = e;
        self.canTap = true;
        self.$target = $target;
        self.$content = $content;
        self.opts = current.opts.touch;
        self.isPanning = false;
        self.isSwiping = false;
        self.isZooming = false;
        self.isScrolling = false;
        self.canPan = instance.canPan();
        self.startTime = new Date().getTime();
        self.distanceX = self.distanceY = self.distance = 0;
        self.canvasWidth = Math.round($slide[0].clientWidth);
        self.canvasHeight = Math.round($slide[0].clientHeight);
        self.contentLastPos = null;
        self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
            top: 0,
            left: 0
        };
        self.sliderStartPos = $.fancybox.getTranslate($slide);
        self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
        self.sliderStartPos.top -= self.stagePos.top;
        self.sliderStartPos.left -= self.stagePos.left;
        self.contentStartPos.top -= self.stagePos.top;
        self.contentStartPos.left -= self.stagePos.left;
        $(document).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
        if ($.fancybox.isMobile) {
            document.addEventListener("scroll", self.onscroll, true);
        }
        if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
            if ($target.is(".fancybox-image")) {
                e.preventDefault();
            }
            if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
                return;
            }
        }
        self.isScrollable = isScrollable($target) || isScrollable($target.parent());
        if (!($.fancybox.isMobile && self.isScrollable)) {
            e.preventDefault();
        }
        if (self.startPoints.length === 1 || current.hasError) {
            if (self.canPan) {
                $.fancybox.stop(self.$content);
                self.isPanning = true;
            } else {
                self.isSwiping = true;
            }
            self.$container.addClass("fancybox-is-grabbing");
        }
        if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
            self.canTap = false;
            self.isSwiping = false;
            self.isPanning = false;
            self.isZooming = true;
            $.fancybox.stop(self.$content);
            self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
            self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
            self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
            self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
            self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
        }
    };
    Guestures.prototype.onscroll = function(e) {
        var self = this;
        self.isScrolling = true;
        document.removeEventListener("scroll", self.onscroll, true);
    };
    Guestures.prototype.ontouchmove = function(e) {
        var self = this;
        if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
            self.ontouchend(e);
            return;
        }
        if (self.isScrolling) {
            self.canTap = false;
            return;
        }
        self.newPoints = getPointerXY(e);
        if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
            return;
        }
        if (!(self.isSwiping && self.isSwiping === true)) {
            e.preventDefault();
        }
        self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
        self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
        self.distance = distance(self.newPoints[0], self.startPoints[0]);
        if (self.distance > 0) {
            if (self.isSwiping) {
                self.onSwipe(e);
            } else if (self.isPanning) {
                self.onPan();
            } else if (self.isZooming) {
                self.onZoom();
            }
        }
    };
    Guestures.prototype.onSwipe = function(e) {
        var self = this,
            instance = self.instance,
            swiping = self.isSwiping,
            left = self.sliderStartPos.left || 0,
            angle;
        if (swiping === true) {
            if (Math.abs(self.distance) > 10) {
                self.canTap = false;
                if (instance.group.length < 2 && self.opts.vertical) {
                    self.isSwiping = "y";
                } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
                    self.isSwiping = "x";
                } else {
                    angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
                    self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
                }
                if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
                    self.isScrolling = true;
                    return;
                }
                instance.isDragging = self.isSwiping;
                self.startPoints = self.newPoints;
                $.each(instance.slides, function(index, slide) {
                    var slidePos, stagePos;
                    $.fancybox.stop(slide.$slide);
                    slidePos = $.fancybox.getTranslate(slide.$slide);
                    stagePos = $.fancybox.getTranslate(instance.$refs.stage);
                    slide.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass(function(index, className) {
                        return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    });
                    if (slide.pos === instance.current.pos) {
                        self.sliderStartPos.top = slidePos.top - stagePos.top;
                        self.sliderStartPos.left = slidePos.left - stagePos.left;
                    }
                    $.fancybox.setTranslate(slide.$slide, {
                        top: slidePos.top - stagePos.top,
                        left: slidePos.left - stagePos.left
                    });
                });
                if (instance.SlideShow && instance.SlideShow.isActive) {
                    instance.SlideShow.stop();
                }
            }
            return;
        }
        if (swiping == "x") {
            if (self.distanceX > 0 && (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))) {
                left = left + Math.pow(self.distanceX, 0.8);
            } else if (self.distanceX < 0 && (self.instance.group.length < 2 || (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))) {
                left = left - Math.pow(-self.distanceX, 0.8);
            } else {
                left = left + self.distanceX;
            }
        }
        self.sliderLastPos = {
            top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
            left: left
        };
        if (self.requestId) {
            cancelAFrame(self.requestId);
            self.requestId = null;
        }
        self.requestId = requestAFrame(function() {
            if (self.sliderLastPos) {
                $.each(self.instance.slides, function(index, slide) {
                    var pos = slide.pos - self.instance.currPos;
                    $.fancybox.setTranslate(slide.$slide, {
                        top: self.sliderLastPos.top,
                        left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
                    });
                });
                self.$container.addClass("fancybox-is-sliding");
            }
        });
    };
    Guestures.prototype.onPan = function() {
        var self = this;
        if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
            self.startPoints = self.newPoints;
            return;
        }
        self.canTap = false;
        self.contentLastPos = self.limitMovement();
        if (self.requestId) {
            cancelAFrame(self.requestId);
        }
        self.requestId = requestAFrame(function() {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };
    Guestures.prototype.limitMovement = function() {
        var self = this;
        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;
        var distanceX = self.distanceX;
        var distanceY = self.distanceY;
        var contentStartPos = self.contentStartPos;
        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;
        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;
        var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
        if (currentWidth > canvasWidth) {
            newOffsetX = currentOffsetX + distanceX;
        } else {
            newOffsetX = currentOffsetX;
        }
        newOffsetY = currentOffsetY + distanceY;
        minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
        minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
        maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
        maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
        if (distanceX > 0 && newOffsetX > minTranslateX) {
            newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
        }
        if (distanceX < 0 && newOffsetX < maxTranslateX) {
            newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
        }
        if (distanceY > 0 && newOffsetY > minTranslateY) {
            newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
        }
        if (distanceY < 0 && newOffsetY < maxTranslateY) {
            newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
        }
        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };
    Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
        var self = this;
        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;
        if (newWidth > canvasWidth) {
            newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
            newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
        } else {
            newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
        }
        if (newHeight > canvasHeight) {
            newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
            newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
        } else {
            newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
        }
        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };
    Guestures.prototype.onZoom = function() {
        var self = this;
        var contentStartPos = self.contentStartPos;
        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;
        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;
        var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
        var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
        var newWidth = Math.floor(currentWidth * pinchRatio);
        var newHeight = Math.floor(currentHeight * pinchRatio);
        var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
        var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
        var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
        var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
        var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
        var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
        var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
        var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
        var newPos = {
            top: newOffsetY,
            left: newOffsetX,
            scaleX: pinchRatio,
            scaleY: pinchRatio
        };
        self.canTap = false;
        self.newWidth = newWidth;
        self.newHeight = newHeight;
        self.contentLastPos = newPos;
        if (self.requestId) {
            cancelAFrame(self.requestId);
        }
        self.requestId = requestAFrame(function() {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };
    Guestures.prototype.ontouchend = function(e) {
        var self = this;
        var swiping = self.isSwiping;
        var panning = self.isPanning;
        var zooming = self.isZooming;
        var scrolling = self.isScrolling;
        self.endPoints = getPointerXY(e);
        self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
        self.$container.removeClass("fancybox-is-grabbing");
        $(document).off(".fb.touch");
        document.removeEventListener("scroll", self.onscroll, true);
        if (self.requestId) {
            cancelAFrame(self.requestId);
            self.requestId = null;
        }
        self.isSwiping = false;
        self.isPanning = false;
        self.isZooming = false;
        self.isScrolling = false;
        self.instance.isDragging = false;
        if (self.canTap) {
            return self.onTap(e);
        }
        self.speed = 100;
        self.velocityX = (self.distanceX / self.dMs) * 0.5;
        self.velocityY = (self.distanceY / self.dMs) * 0.5;
        if (panning) {
            self.endPanning();
        } else if (zooming) {
            self.endZooming();
        } else {
            self.endSwiping(swiping, scrolling);
        }
        return;
    };
    Guestures.prototype.endSwiping = function(swiping, scrolling) {
        var self = this,
            ret = false,
            len = self.instance.group.length,
            distanceX = Math.abs(self.distanceX),
            canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
            speedX = 300;
        self.sliderLastPos = null;
        if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
            $.fancybox.animate(self.instance.current.$slide, {
                top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
                opacity: 0
            }, 200);
            ret = self.instance.close(true, 250);
        } else if (canAdvance && self.distanceX > 0) {
            ret = self.instance.previous(speedX);
        } else if (canAdvance && self.distanceX < 0) {
            ret = self.instance.next(speedX);
        }
        if (ret === false && (swiping == "x" || swiping == "y")) {
            self.instance.centerSlide(200);
        }
        self.$container.removeClass("fancybox-is-sliding");
    };
    Guestures.prototype.endPanning = function() {
        var self = this,
            newOffsetX, newOffsetY, newPos;
        if (!self.contentLastPos) {
            return;
        }
        if (self.opts.momentum === false || self.dMs > 350) {
            newOffsetX = self.contentLastPos.left;
            newOffsetY = self.contentLastPos.top;
        } else {
            newOffsetX = self.contentLastPos.left + self.velocityX * 500;
            newOffsetY = self.contentLastPos.top + self.velocityY * 500;
        }
        newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
        newPos.width = self.contentStartPos.width;
        newPos.height = self.contentStartPos.height;
        $.fancybox.animate(self.$content, newPos, 366);
    };
    Guestures.prototype.endZooming = function() {
        var self = this;
        var current = self.instance.current;
        var newOffsetX, newOffsetY, newPos, reset;
        var newWidth = self.newWidth;
        var newHeight = self.newHeight;
        if (!self.contentLastPos) {
            return;
        }
        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;
        reset = {
            top: newOffsetY,
            left: newOffsetX,
            width: newWidth,
            height: newHeight,
            scaleX: 1,
            scaleY: 1
        };
        $.fancybox.setTranslate(self.$content, reset);
        if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
            self.instance.scaleToFit(150);
        } else if (newWidth > current.width || newHeight > current.height) {
            self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
        } else {
            newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
            $.fancybox.animate(self.$content, newPos, 150);
        }
    };
    Guestures.prototype.onTap = function(e) {
        var self = this;
        var $target = $(e.target);
        var instance = self.instance;
        var current = instance.current;
        var endPoints = (e && getPointerXY(e)) || self.startPoints;
        var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
        var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
        var where;
        var process = function(prefix) {
            var action = current.opts[prefix];
            if ($.isFunction(action)) {
                action = action.apply(instance, [current, e]);
            }
            if (!action) {
                return;
            }
            switch (action) {
                case "close":
                    instance.close(self.startEvent);
                    break;
                case "toggleControls":
                    instance.toggleControls();
                    break;
                case "next":
                    instance.next();
                    break;
                case "nextOrClose":
                    if (instance.group.length > 1) {
                        instance.next();
                    } else {
                        instance.close(self.startEvent);
                    }
                    break;
                case "zoom":
                    if (current.type == "image" && (current.isLoaded || current.$ghost)) {
                        if (instance.canPan()) {
                            instance.scaleToFit();
                        } else if (instance.isScaledDown()) {
                            instance.scaleToActual(tapX, tapY);
                        } else if (instance.group.length < 2) {
                            instance.close(self.startEvent);
                        }
                    }
                    break;
            }
        };
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }
        if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
            return;
        }
        if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
            where = "Outside";
        } else if ($target.is(".fancybox-slide")) {
            where = "Slide";
        } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
            where = "Content";
        } else {
            return;
        }
        if (self.tapped) {
            clearTimeout(self.tapped);
            self.tapped = null;
            if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
                return this;
            }
            process("dblclick" + where);
        } else {
            self.tapX = tapX;
            self.tapY = tapY;
            if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
                self.tapped = setTimeout(function() {
                    self.tapped = null;
                    if (!instance.isAnimating) {
                        process("click" + where);
                    }
                }, 500);
            } else {
                process("click" + where);
            }
        }
        return this;
    };
    $(document).on("onActivate.fb", function(e, instance) {
        if (instance && !instance.Guestures) {
            instance.Guestures = new Guestures(instance);
        }
    }).on("beforeClose.fb", function(e, instance) {
        if (instance && instance.Guestures) {
            instance.Guestures.destroy();
        }
    });
})(window, document, jQuery);
(function(document, $) {
    "use strict";
    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' + "</button>"
        },
        slideShow: {
            autoStart: false,
            speed: 3000,
            progress: true
        }
    });
    var SlideShow = function(instance) {
        this.instance = instance;
        this.init();
    };
    $.extend(SlideShow.prototype, {
        timer: null,
        isActive: false,
        $button: null,
        init: function() {
            var self = this,
                instance = self.instance,
                opts = instance.group[instance.currIndex].opts.slideShow;
            self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                self.toggle();
            });
            if (instance.group.length < 2 || !opts) {
                self.$button.hide();
            } else if (opts.progress) {
                self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
            }
        },
        set: function(force) {
            var self = this,
                instance = self.instance,
                current = instance.current;
            if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
                if (self.isActive && current.contentType !== "video") {
                    if (self.$progress) {
                        $.fancybox.animate(self.$progress.show(), {
                            scaleX: 1
                        }, current.opts.slideShow.speed);
                    }
                    self.timer = setTimeout(function() {
                        if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                            instance.jumpTo(0);
                        } else {
                            instance.next();
                        }
                    }, current.opts.slideShow.speed);
                }
            } else {
                self.stop();
                instance.idleSecondsCounter = 0;
                instance.showControls();
            }
        },
        clear: function() {
            var self = this;
            clearTimeout(self.timer);
            self.timer = null;
            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },
        start: function() {
            var self = this,
                current = self.instance.current;
            if (current) {
                self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
                self.isActive = true;
                if (current.isComplete) {
                    self.set(true);
                }
                self.instance.trigger("onSlideShowChange", true);
            }
        },
        stop: function() {
            var self = this,
                current = self.instance.current;
            self.clear();
            self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
            self.isActive = false;
            self.instance.trigger("onSlideShowChange", false);
            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },
        toggle: function() {
            var self = this;
            if (self.isActive) {
                self.stop();
            } else {
                self.start();
            }
        }
    });
    $(document).on({
        "onInit.fb": function(e, instance) {
            if (instance && !instance.SlideShow) {
                instance.SlideShow = new SlideShow(instance);
            }
        },
        "beforeShow.fb": function(e, instance, current, firstRun) {
            var SlideShow = instance && instance.SlideShow;
            if (firstRun) {
                if (SlideShow && current.opts.slideShow.autoStart) {
                    SlideShow.start();
                }
            } else if (SlideShow && SlideShow.isActive) {
                SlideShow.clear();
            }
        },
        "afterShow.fb": function(e, instance, current) {
            var SlideShow = instance && instance.SlideShow;
            if (SlideShow && SlideShow.isActive) {
                SlideShow.set();
            }
        },
        "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
            var SlideShow = instance && instance.SlideShow;
            if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
                keypress.preventDefault();
                SlideShow.toggle();
            }
        },
        "beforeClose.fb onDeactivate.fb": function(e, instance) {
            var SlideShow = instance && instance.SlideShow;
            if (SlideShow) {
                SlideShow.stop();
            }
        }
    });
    $(document).on("visibilitychange", function() {
        var instance = $.fancybox.getInstance(),
            SlideShow = instance && instance.SlideShow;
        if (SlideShow && SlideShow.isActive) {
            if (document.hidden) {
                SlideShow.clear();
            } else {
                SlideShow.set();
            }
        }
    });
})(document, jQuery);
(function(document, $) {
    "use strict";
    var fn = (function() {
        var fnMap = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        var ret = {};
        for (var i = 0; i < fnMap.length; i++) {
            var val = fnMap[i];
            if (val && val[1] in document) {
                for (var j = 0; j < val.length; j++) {
                    ret[fnMap[0][j]] = val[j];
                }
                return ret;
            }
        }
        return false;
    })();
    if (fn) {
        var FullScreen = {
            request: function(elem) {
                elem = elem || document.documentElement;
                elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
            },
            exit: function() {
                document[fn.exitFullscreen]();
            },
            toggle: function(elem) {
                elem = elem || document.documentElement;
                if (this.isFullscreen()) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            isFullscreen: function() {
                return Boolean(document[fn.fullscreenElement]);
            },
            enabled: function() {
                return Boolean(document[fn.fullscreenEnabled]);
            }
        };
        $.extend(true, $.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' + "</button>"
            },
            fullScreen: {
                autoStart: false
            }
        });
        $(document).on(fn.fullscreenchange, function() {
            var isFullscreen = FullScreen.isFullscreen(),
                instance = $.fancybox.getInstance();
            if (instance) {
                if (instance.current && instance.current.type === "image" && instance.isAnimating) {
                    instance.isAnimating = false;
                    instance.update(true, true, 0);
                    if (!instance.isComplete) {
                        instance.complete();
                    }
                }
                instance.trigger("onFullscreenChange", isFullscreen);
                instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !isFullscreen).toggleClass("fancybox-button--fsexit", isFullscreen);
            }
        });
    }
    $(document).on({
        "onInit.fb": function(e, instance) {
            var $container;
            if (!fn) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                return;
            }
            if (instance && instance.group[instance.currIndex].opts.fullScreen) {
                $container = instance.$refs.container;
                $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    FullScreen.toggle();
                });
                if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
                    FullScreen.request();
                }
                instance.FullScreen = FullScreen;
            } else if (instance) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            }
        },
        "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
            if (instance && instance.FullScreen && keycode === 70) {
                keypress.preventDefault();
                instance.FullScreen.toggle();
            }
        },
        "beforeClose.fb": function(e, instance) {
            if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
                FullScreen.exit();
            }
        }
    });
})(document, jQuery);
(function(document, $) {
    "use strict";
    var CLASS = "fancybox-thumbs",
        CLASS_ACTIVE = CLASS + "-active";
    $.fancybox.defaults = $.extend(true, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' + "</button>"
        },
        thumbs: {
            autoStart: false,
            hideOnClose: true,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, $.fancybox.defaults);
    var FancyThumbs = function(instance) {
        this.init(instance);
    };
    $.extend(FancyThumbs.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: false,
        isActive: false,
        init: function(instance) {
            var self = this,
                group = instance.group,
                enabled = 0;
            self.instance = instance;
            self.opts = group[instance.currIndex].opts.thumbs;
            instance.Thumbs = self;
            self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, len = group.length; i < len; i++) {
                if (group[i].thumb) {
                    enabled++;
                }
                if (enabled > 1) {
                    break;
                }
            }
            if (enabled > 1 && !!self.opts) {
                self.$button.removeAttr("style").on("click", function() {
                    self.toggle();
                });
                self.isActive = true;
            } else {
                self.$button.hide();
            }
        },
        create: function() {
            var self = this,
                instance = self.instance,
                parentEl = self.opts.parentEl,
                list = [],
                src;
            if (!self.$grid) {
                self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));
                self.$grid.on("click", "a", function() {
                    instance.jumpTo($(this).attr("data-index"));
                });
            }
            if (!self.$list) {
                self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
            }
            $.each(instance.group, function(i, item) {
                src = item.thumb;
                if (!src && item.type === "image") {
                    src = item.src;
                }
                list.push('<a href="javascript:;" tabindex="0" data-index="' +
                    i + '"' +
                    (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
            });
            self.$list[0].innerHTML = list.join("");
            if (self.opts.axis === "x") {
                self.$list.width(parseInt(self.$grid.css("padding-right"), 10) +
                    instance.group.length * self.$list.children().eq(0).outerWidth(true));
            }
        },
        focus: function(duration) {
            var self = this,
                $list = self.$list,
                $grid = self.$grid,
                thumb, thumbPos;
            if (!self.instance.current) {
                return;
            }
            thumb = $list.children().removeClass(CLASS_ACTIVE).filter('[data-index="' + self.instance.current.index + '"]').addClass(CLASS_ACTIVE);
            thumbPos = thumb.position();
            if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
                $list.stop().animate({
                    scrollTop: $list.scrollTop() + thumbPos.top
                }, duration);
            } else if (self.opts.axis === "x" && (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))) {
                $list.parent().stop().animate({
                    scrollLeft: thumbPos.left
                }, duration);
            }
        },
        update: function() {
            var that = this;
            that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
            if (that.isVisible) {
                if (!that.$grid) {
                    that.create();
                }
                that.instance.trigger("onThumbsShow");
                that.focus(0);
            } else if (that.$grid) {
                that.instance.trigger("onThumbsHide");
            }
            that.instance.update();
        },
        hide: function() {
            this.isVisible = false;
            this.update();
        },
        show: function() {
            this.isVisible = true;
            this.update();
        },
        toggle: function() {
            this.isVisible = !this.isVisible;
            this.update();
        }
    });
    $(document).on({
        "onInit.fb": function(e, instance) {
            var Thumbs;
            if (instance && !instance.Thumbs) {
                Thumbs = new FancyThumbs(instance);
                if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
                    Thumbs.show();
                }
            }
        },
        "beforeShow.fb": function(e, instance, item, firstRun) {
            var Thumbs = instance && instance.Thumbs;
            if (Thumbs && Thumbs.isVisible) {
                Thumbs.focus(firstRun ? 0 : 250);
            }
        },
        "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
            var Thumbs = instance && instance.Thumbs;
            if (Thumbs && Thumbs.isActive && keycode === 71) {
                keypress.preventDefault();
                Thumbs.toggle();
            }
        },
        "beforeClose.fb": function(e, instance) {
            var Thumbs = instance && instance.Thumbs;
            if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
                Thumbs.$grid.hide();
            }
        }
    });
})(document, jQuery);
(function(document, $) {
    "use strict";
    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' + "</button>"
        },
        share: {
            url: function(instance, item) {
                return ((!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location);
            },
            tpl: '<div class="fancybox-share">' + "<h1>{{SHARE}}</h1>" + "<p>" + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + "<span>Facebook</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + "<span>Twitter</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + "<span>Pinterest</span>" + "</a>" + "</p>" + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' + "</div>"
        }
    });

    function escapeHtml(string) {
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(string).replace(/[&<>"'`=\/]/g, function(s) {
            return entityMap[s];
        });
    }
    $(document).on("click", "[data-fancybox-share]", function() {
        var instance = $.fancybox.getInstance(),
            current = instance.current || null,
            url, tpl;
        if (!current) {
            return;
        }
        if ($.type(current.opts.share.url) === "function") {
            url = current.opts.share.url.apply(current, [instance, current]);
        }
        tpl = current.opts.share.tpl.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
        $.fancybox.open({
            src: instance.translate(instance, tpl),
            type: "html",
            opts: {
                touch: false,
                animationEffect: false,
                afterLoad: function(shareInstance, shareCurrent) {
                    instance.$refs.container.one("beforeClose.fb", function() {
                        shareInstance.close(null, 0);
                    });
                    shareCurrent.$content.find(".fancybox-share__button").click(function() {
                        window.open(this.href, "Share", "width=550, height=450");
                        return false;
                    });
                },
                mobile: {
                    autoFocus: false
                }
            }
        });
    });
})(document, jQuery);
(function(window, document, $) {
    "use strict";
    if (!$.escapeSelector) {
        $.escapeSelector = function(sel) {
            var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            var fcssescape = function(ch, asCodePoint) {
                if (asCodePoint) {
                    if (ch === "\0") {
                        return "\uFFFD";
                    }
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }
                return "\\" + ch;
            };
            return (sel + "").replace(rcssescape, fcssescape);
        };
    }

    function parseUrl() {
        var hash = window.location.hash.substr(1),
            rez = hash.split("-"),
            index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
            gallery = rez.join("-");
        return {
            hash: hash,
            index: index < 1 ? 1 : index,
            gallery: gallery
        };
    }

    function triggerFromUrl(url) {
        if (url.gallery !== "") {
            $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1).focus().trigger("click.fb-start");
        }
    }

    function getGalleryID(instance) {
        var opts, ret;
        if (!instance) {
            return false;
        }
        opts = instance.current ? instance.current.opts : instance.opts;
        ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
        return ret === "" ? false : ret;
    }
    $(function() {
        if ($.fancybox.defaults.hash === false) {
            return;
        }
        $(document).on({
            "onInit.fb": function(e, instance) {
                var url, gallery;
                if (instance.group[instance.currIndex].opts.hash === false) {
                    return;
                }
                url = parseUrl();
                gallery = getGalleryID(instance);
                if (gallery && url.gallery && gallery == url.gallery) {
                    instance.currIndex = url.index - 1;
                }
            },
            "beforeShow.fb": function(e, instance, current, firstRun) {
                var gallery;
                if (!current || current.opts.hash === false) {
                    return;
                }
                gallery = getGalleryID(instance);
                if (!gallery) {
                    return;
                }
                instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
                if (window.location.hash === "#" + instance.currentHash) {
                    return;
                }
                if (firstRun && !instance.origHash) {
                    instance.origHash = window.location.hash;
                }
                if (instance.hashTimer) {
                    clearTimeout(instance.hashTimer);
                }
                instance.hashTimer = setTimeout(function() {
                    if ("replaceState" in window.history) {
                        window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + instance.currentHash);
                        if (firstRun) {
                            instance.hasCreatedHistory = true;
                        }
                    } else {
                        window.location.hash = instance.currentHash;
                    }
                    instance.hashTimer = null;
                }, 300);
            },
            "beforeClose.fb": function(e, instance, current) {
                if (!current || current.opts.hash === false) {
                    return;
                }
                clearTimeout(instance.hashTimer);
                if (instance.currentHash && instance.hasCreatedHistory) {
                    window.history.back();
                } else if (instance.currentHash) {
                    if ("replaceState" in window.history) {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
                    } else {
                        window.location.hash = instance.origHash;
                    }
                }
                instance.currentHash = null;
            }
        });
        $(window).on("hashchange.fb", function() {
            var url = parseUrl(),
                fb = null;
            $.each($(".fancybox-container").get().reverse(), function(index, value) {
                var tmp = $(value).data("FancyBox");
                if (tmp && tmp.currentHash) {
                    fb = tmp;
                    return false;
                }
            });
            if (fb) {
                if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
                    fb.currentHash = null;
                    fb.close();
                }
            } else if (url.gallery !== "") {
                triggerFromUrl(url);
            }
        });
        setTimeout(function() {
            if (!$.fancybox.getInstance()) {
                triggerFromUrl(parseUrl());
            }
        }, 50);
    });
})(window, document, jQuery);
(function(document, $) {
    "use strict";
    var prevTime = new Date().getTime();
    $(document).on({
        "onInit.fb": function(e, instance, current) {
            instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                var current = instance.current,
                    currTime = new Date().getTime();
                if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                if (current.$slide.hasClass("fancybox-animated")) {
                    return;
                }
                e = e.originalEvent || e;
                if (currTime - prevTime < 250) {
                    return;
                }
                prevTime = currTime;
                instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
            });
        }
    });
})(document, jQuery);
/*jquery.auto-complete.js*/

function removeUnicode(strings) {
    var strTemp = strings;
    strTemp = strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    strTemp = strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    strTemp = strTemp.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    strTemp = strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    strTemp = strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    strTemp = strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    strTemp = strTemp.replace(/đ/g, "d");
    strTemp = strTemp.replace(/̀|́|̣|̉|̃|/gi, "");
    return strTemp;
}
(function($) {
    $.fn.autoComplete = function(options) {
        var o = $.extend({}, $.fn.autoComplete.defaults, options);
        if (typeof options == 'string') {
            this.each(function() {
                var that = $(this);
                if (options == 'destroy') {
                    $(window).off('resize.autocomplete', that.updateSC);
                    that.off('blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete');
                    if (that.data('autocomplete'))
                        that.attr('autocomplete', that.data('autocomplete'));
                    else
                        that.removeAttr('autocomplete');
                    $(that.data('sc')).remove();
                    that.removeData('sc').removeData('autocomplete');
                }
            });
            return this;
        }
        return this.each(function() {
            var that = $(this);
            that.sc = $('<div class="autocomplete-suggestions ' + o.menuClass + '"></div>');
            that.data('sc', that.sc).data('autocomplete', that.attr('autocomplete'));
            that.attr('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';
            that.updateSC = function(resize, next) {
                that.sc.css({
                    top: that.offset().top + that.outerHeight(),
                    left: that.offset().left,
                    width: that.outerWidth()
                });
                if (!resize) {
                    that.sc.show();
                    if (!that.sc.maxHeight) that.sc.maxHeight = parseInt(that.sc.css('max-height'));
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = $('.autocomplete-suggestion', that.sc).first().outerHeight();
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop(0);
                        else {
                            var scrTop = that.sc.scrollTop(),
                                selTop = next.offset().top - that.sc.offset().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop(selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight);
                            else if (selTop < 0)
                                that.sc.scrollTop(selTop + scrTop);
                        }
                }
            }
            $(window).on('resize.autocomplete', that.updateSC);
            that.sc.appendTo('body');
            that.sc.on('mouseleave', '.autocomplete-suggestion', function() {
                $('.autocomplete-suggestion.selected').removeClass('selected');
            });
            that.sc.on('mouseenter', '.autocomplete-suggestion', function() {
                $('.autocomplete-suggestion.selected').removeClass('selected');
                $(this).addClass('selected');
            });
            that.sc.on('mousedown click', '.autocomplete-suggestion', function(e) {
                var item = $(this),
                    v = item.data('val');
                if (v || item.hasClass('autocomplete-suggestion')) {
                    that.val(v);
                    o.onSelect(e, v, item);
                    that.sc.hide();
                }
                return false;
            });
            that.on('blur.autocomplete', function() {
                try {
                    over_sb = $('.autocomplete-suggestions:hover').length;
                } catch (e) {
                    over_sb = 0;
                }
                if (!over_sb) {
                    that.last_val = that.val();
                    that.sc.hide();
                    setTimeout(function() {
                        that.sc.hide();
                    }, 350);
                } else if (!that.is(':focus')) setTimeout(function() {
                    that.focus();
                }, 20);
            });
            if (!o.minChars) that.on('focus.autocomplete', function() {
                that.last_val = '\n';
                that.trigger('keyup.autocomplete');
            });

            function suggest(data) {
                var val = that.val();
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i = 0; i < data.length; i++) s += o.renderItem(data[i], val);
                    that.sc.html(s);
                    that.updateSC(0);
                } else
                    that.sc.hide();
            }
            that.on('keydown.autocomplete', function(e) {
                if ((e.which == 40 || e.which == 38) && that.sc.html()) {
                    var next, sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (!sel.length) {
                        next = (e.which == 40) ? $('.autocomplete-suggestion', that.sc).first() : $('.autocomplete-suggestion', that.sc).last();
                        that.val(next.addClass('selected').data('val'));
                    } else {
                        next = (e.which == 40) ? sel.next('.autocomplete-suggestion') : sel.prev('.autocomplete-suggestion');
                        if (next.length) {
                            sel.removeClass('selected');
                            that.val(next.addClass('selected').data('val'));
                        } else {
                            sel.removeClass('selected');
                            that.val(that.last_val);
                            next = 0;
                        }
                    }
                    that.updateSC(0, next);
                    return false;
                } else if (e.which == 27) that.val(that.last_val).sc.hide();
                else if (e.which == 13 || e.which == 9) {
                    var sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (sel.length && that.sc.is(':visible')) {
                        o.onSelect(e, sel.data('val'), sel);
                        setTimeout(function() {
                            that.sc.hide();
                        }, 20);
                    }
                }
            });
            that.on('keyup.autocomplete', function(e) {
                if (!~$.inArray(e.which, [13, 27, 35, 36, 37, 38, 39, 40])) {
                    var val = that.val();
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) {
                                    suggest(that.cache[val]);
                                    return;
                                }
                                for (var i = 1; i < val.length - o.minChars; i++) {
                                    var part = val.slice(0, val.length - i);
                                    if (part in that.cache && !that.cache[part].length) {
                                        suggest([]);
                                        return;
                                    }
                                }
                            }
                            that.timer = setTimeout(function() {
                                o.source(val, suggest)
                            }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.hide();
                    }
                }
            });
        });
    }
    $.fn.autoComplete.defaults = {
        source: 0,
        minChars: 3,
        delay: 150,
        cache: 1,
        menuClass: '',
        renderItem: function(item, search) {
            var item_convert = removeUnicode(item);
            var search_convert = removeUnicode(search);
            search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
            var re_convert = new RegExp("(" + search_convert + ")", "gi");
            var search_match = re_convert.exec(item_convert);
            if (search_match && search_convert.length) {
                var startpos = search_match.index;
                var prefix = item.slice(0, startpos);
                var fix = item.slice(startpos, startpos + search_convert.length);
                var suffix = item.slice(startpos + search_convert.length);
                return '<div class="autocomplete-suggestion" data-val="' + item + '">' + prefix + '<b>' + fix + '</b>' + suffix + '</div>';
            } else {
                return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
            }
        },
        onSelect: function(e, term, item) {}
    };
}(jQuery));
/*DateTimePicker.min.js*/

Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var a in t) t.hasOwnProperty(a) && e.push(a);
        return e
    }), $.DateTimePicker = $.DateTimePicker || {
        name: "DateTimePicker",
        i18n: {},
        defaults: {
            mode: "date",
            defaultDate: null,
            dateSeparator: "-",
            timeSeparator: ":",
            timeMeridiemSeparator: " ",
            dateTimeSeparator: " ",
            monthYearSeparator: " ",
            dateTimeFormat: "dd-MM-yyyy HH:mm",
            dateFormat: "dd-MM-yyyy",
            timeFormat: "HH:mm",
            maxDate: null,
            minDate: null,
            maxTime: null,
            minTime: null,
            maxDateTime: null,
            minDateTime: null,
            shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            fullDayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            fullMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            labels: null,
            minuteInterval: 1,
            roundOffMinutes: !0,
            secondsInterval: 1,
            roundOffSeconds: !0,
            showHeader: !0,
            titleContentDate: "Set Date",
            titleContentTime: "Set Time",
            titleContentDateTime: "Set Date & Time",
            buttonsToDisplay: ["HeaderCloseButton", "SetButton", "ClearButton"],
            setButtonContent: "Set",
            clearButtonContent: "Clear",
            incrementButtonContent: "+",
            decrementButtonContent: "-",
            setValueInTextboxOnEveryClick: !1,
            readonlyInputs: !1,
            animationDuration: 400,
            touchHoldInterval: 300,
            captureTouchHold: !1,
            mouseHoldInterval: 50,
            captureMouseHold: !1,
            isPopup: !0,
            parentElement: "body",
            isInline: !1,
            inputElement: null,
            language: "",
            init: null,
            addEventHandlers: null,
            beforeShow: null,
            afterShow: null,
            beforeHide: null,
            afterHide: null,
            buttonClicked: null,
            settingValueOfElement: null,
            formatHumanDate: null,
            parseDateTimeString: null,
            formatDateTimeString: null
        },
        dataObject: {
            dCurrentDate: new Date,
            iCurrentDay: 0,
            iCurrentMonth: 0,
            iCurrentYear: 0,
            iCurrentHour: 0,
            iCurrentMinutes: 0,
            iCurrentSeconds: 0,
            sCurrentMeridiem: "",
            iMaxNumberOfDays: 0,
            sDateFormat: "",
            sTimeFormat: "",
            sDateTimeFormat: "",
            dMinValue: null,
            dMaxValue: null,
            sArrInputDateFormats: [],
            sArrInputTimeFormats: [],
            sArrInputDateTimeFormats: [],
            bArrMatchFormat: [],
            bDateMode: !1,
            bTimeMode: !1,
            bDateTimeMode: !1,
            oInputElement: null,
            iTabIndex: 0,
            bElemFocused: !1,
            bIs12Hour: !1,
            sTouchButton: null,
            iTouchStart: null,
            oTimeInterval: null,
            bIsTouchDevice: "ontouchstart" in document.documentElement
        }
    }, $.cf = {
        _isValid: function(t) {
            return null != t && "" !== t
        },
        _compare: function(t, e) {
            return null != t && null != e && t.toLowerCase() === e.toLowerCase()
        }
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(b) {
        "use strict";

        function o(t, e) {
            this.element = t;
            var a;
            a = b.cf._isValid(e) && b.cf._isValid(e.language) ? e.language : b.DateTimePicker.defaults.language, this.settings = b.extend({}, b.DateTimePicker.defaults, b.DateTimePicker.i18n[a], e), this.options = e, this.oData = b.extend({}, b.DateTimePicker.dataObject), this._defaults = b.DateTimePicker.defaults, this._name = b.DateTimePicker.name, this.init()
        }
        b.fn.DateTimePicker = function(t) {
            var e, a, r = b(this).data(),
                n = r ? Object.keys(r) : [];
            if ("string" != typeof t) return this.each(function() {
                b.removeData(this, "plugin_DateTimePicker"), b.data(this, "plugin_DateTimePicker") || b.data(this, "plugin_DateTimePicker", new o(this, t))
            });
            if (b.cf._isValid(r))
                if ("destroy" === t) {
                    if (0 < n.length)
                        for (e in n)
                            if (-1 !== (a = n[e]).search("plugin_DateTimePicker")) {
                                b(document).unbind("click.DateTimePicker keydown.DateTimePicker keyup.DateTimePicker"), b(this).children().remove(), b(this).removeData(), b(this).unbind(), b(this).removeClass("dtpicker-overlay dtpicker-mobile dtpicker-inline"), r = r[a];
                                break
                            }
                } else if ("object" === t && 0 < n.length)
                for (e in n)
                    if (-1 !== (a = n[e]).search("plugin_DateTimePicker")) return r[a]
        }, o.prototype = {
            init: function() {
                var t = this;
                t._setDateFormatArray(), t._setTimeFormatArray(), t._setDateTimeFormatArray(), void 0 !== b(t.element).data("parentelement") && (t.settings.parentElement = b(t.element).data("parentelement")), t.settings.isPopup && !t.settings.isInline && (t._createPicker(), b(t.element).addClass("dtpicker-mobile")), t.settings.isInline && (t._createPicker(), t._showPicker(t.settings.inputElement)), t.settings.init && t.settings.init.call(t), t._addEventHandlersForInput()
            },
            _setDateFormatArray: function() {
                var t = this;
                t.oData.sArrInputDateFormats = [];
                var e = "";
                e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", t.oData.sArrInputDateFormats.push(e), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "MM" + t.settings.monthYearSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "MMM" + t.settings.monthYearSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "MMMM" + t.settings.monthYearSeparator + "yyyy", t.oData.sArrInputDateFormats.push(e), e = "yyyy" + t.settings.monthYearSeparator + "MM", t.oData.sArrInputDateFormats.push(e)
            },
            _setTimeFormatArray: function() {
                var t = this;
                t.oData.sArrInputTimeFormats = [];
                var e = "";
                e = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", t.oData.sArrInputTimeFormats.push(e), e = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", t.oData.sArrInputTimeFormats.push(e), e = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", t.oData.sArrInputTimeFormats.push(e), e = "HH" + t.settings.timeSeparator + "mm", t.oData.sArrInputTimeFormats.push(e)
            },
            _setDateTimeFormatArray: function() {
                var t = this;
                t.oData.sArrInputDateTimeFormats = [];
                var e = "",
                    a = "",
                    r = "";
                e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", a = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", a = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", a = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", a = "HH" + t.settings.timeSeparator + "mm", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", a = "HH" + t.settings.timeSeparator + "mm", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", a = "HH" + t.settings.timeSeparator + "mm", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", a = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", r = e + t.settings.dateTimeSeparator + a, t.oData.sArrInputDateTimeFormats.push(r)
            },
            _matchFormat: function(t, e) {
                var a = this;
                a.oData.bArrMatchFormat = [], a.oData.bDateMode = !1, a.oData.bTimeMode = !1, a.oData.bDateTimeMode = !1;
                var r, n = [];
                for (t = b.cf._isValid(t) ? t : a.settings.mode, b.cf._compare(t, "date") ? (e = b.cf._isValid(e) ? e : a.oData.sDateFormat, a.oData.bDateMode = !0, n = a.oData.sArrInputDateFormats) : b.cf._compare(t, "time") ? (e = b.cf._isValid(e) ? e : a.oData.sTimeFormat, a.oData.bTimeMode = !0, n = a.oData.sArrInputTimeFormats) : b.cf._compare(t, "datetime") && (e = b.cf._isValid(e) ? e : a.oData.sDateTimeFormat, a.oData.bDateTimeMode = !0, n = a.oData.sArrInputDateTimeFormats), r = 0; r < n.length; r++) a.oData.bArrMatchFormat.push(b.cf._compare(e, n[r]))
            },
            _setMatchFormat: function(t, e, a) {
                0 < t && this._matchFormat(e, a)
            },
            _createPicker: function() {
                var e = this;
                e.settings.isInline ? b(e.element).addClass("dtpicker-inline") : (b(e.element).addClass("dtpicker-overlay"), b(".dtpicker-overlay").click(function(t) {
                    e._hidePicker("")
                }));
                b(e.element).html("<div class='dtpicker-bg'><div class='dtpicker-cont'><div class='dtpicker-content'><div class='dtpicker-subcontent'></div></div></div></div>")
            },
            _addEventHandlersForInput: function() {
                var t = this;
                if (!t.settings.isInline) {
                    t.oData.oInputElement = null, b(t.settings.parentElement).find("input[type='date'], input[type='time'], input[type='datetime']").each(function() {
                        b(this).attr("data-field", b(this).attr("type")), b(this).attr("type", "text")
                    });
                    var e = "[data-field='date'], [data-field='time'], [data-field='datetime']";
                    b(t.settings.parentElement).off("focus", e, t._inputFieldFocus).on("focus", e, {
                        obj: t
                    }, t._inputFieldFocus), b(t.settings.parentElement).off("click", e, t._inputFieldClick).on("click", e, {
                        obj: t
                    }, t._inputFieldClick)
                }
                t.settings.addEventHandlers && t.settings.addEventHandlers.call(t)
            },
            _inputFieldFocus: function(t) {
                var e = t.data.obj;
                e.showDateTimePicker(this), e.oData.bMouseDown = !1
            },
            _inputFieldClick: function(t) {
                var e = t.data.obj;
                b.cf._compare(b(this).prop("tagName"), "input") || e.showDateTimePicker(this), t.stopPropagation()
            },
            getDateObjectForInputField: function(t) {
                var e = this;
                if (b.cf._isValid(t)) {
                    var a, r = e._getValueOfElement(t),
                        n = b(t).data("field"),
                        o = "";
                    return b.cf._isValid(n) || (n = e.settings.mode), e.settings.formatDateTimeString ? a = e.settings.parseDateTimeString.call(e, r, n, o, b(t)) : (o = b(t).data("format"), b.cf._isValid(o) || (b.cf._compare(n, "date") ? o = e.settings.dateFormat : b.cf._compare(n, "time") ? o = e.settings.timeFormat : b.cf._compare(n, "datetime") && (o = e.settings.dateTimeFormat)), e._matchFormat(n, o), b.cf._compare(n, "date") ? a = e._parseDate(r) : b.cf._compare(n, "time") ? a = e._parseTime(r) : b.cf._compare(n, "datetime") && (a = e._parseDateTime(r))), a
                }
            },
            setDateTimeStringInInputField: function(t, n) {
                var e, o = this;
                n = n || o.oData.dCurrentDate, b.cf._isValid(t) ? (e = [], "string" == typeof t ? e.push(t) : "object" == typeof t && (e = t)) : e = b.cf._isValid(o.settings.parentElement) ? b(o.settings.parentElement).find("[data-field='date'], [data-field='time'], [data-field='datetime']") : b("[data-field='date'], [data-field='time'], [data-field='datetime']"), e.each(function() {
                    var t, e, a, r;
                    t = b(this).data("field"), b.cf._isValid(t) || (t = o.settings.mode), a = !(e = "Custom"), o.settings.formatDateTimeString || (e = b(this).data("format"), b.cf._isValid(e) || (b.cf._compare(t, "date") ? e = o.settings.dateFormat : b.cf._compare(t, "time") ? e = o.settings.timeFormat : b.cf._compare(t, "datetime") && (e = o.settings.dateTimeFormat)), a = o.getIs12Hour(t, e)), r = o._setOutput(t, e, a, n, this), o._setValueOfElement(r, b(this))
                })
            },
            getDateTimeStringInFormat: function(t, e, a) {
                return this._setOutput(t, e, this.getIs12Hour(t, e), a)
            },
            showDateTimePicker: function(t) {
                null !== this.oData.oInputElement ? this.settings.isInline || this._hidePicker(0, t) : this._showPicker(t)
            },
            _setButtonAction: function(t) {
                var e = this;
                null !== e.oData.oInputElement && (e._setValueOfElement(e._setOutput()), t ? (e.settings.buttonClicked && e.settings.buttonClicked.call(e, "TAB", e.oData.oInputElement), e.settings.isInline || e._hidePicker(0)) : e.settings.isInline || e._hidePicker(""))
            },
            _setOutput: function(t, e, a, r, n) {
                var o = this;
                r = b.cf._isValid(r) ? r : o.oData.dCurrentDate, a = a || o.oData.bIs12Hour;
                var i, s = o._setVariablesForDate(r, !0, !0),
                    m = "",
                    u = o._formatDate(s),
                    c = o._formatTime(s),
                    d = b.extend({}, u, c),
                    D = "",
                    l = "",
                    p = Function.length;
                return o.settings.formatDateTimeString ? m = o.settings.formatDateTimeString.call(o, d, t, e, n) : (o._setMatchFormat(p, t, e), o.oData.bDateMode ? o.oData.bArrMatchFormat[0] ? m = d.dd + o.settings.dateSeparator + d.MM + o.settings.dateSeparator + d.yyyy : o.oData.bArrMatchFormat[1] ? m = d.MM + o.settings.dateSeparator + d.dd + o.settings.dateSeparator + d.yyyy : o.oData.bArrMatchFormat[2] ? m = d.yyyy + o.settings.dateSeparator + d.MM + o.settings.dateSeparator + d.dd : o.oData.bArrMatchFormat[3] ? m = d.dd + o.settings.dateSeparator + d.monthShort + o.settings.dateSeparator + d.yyyy : o.oData.bArrMatchFormat[4] ? m = d.MM + o.settings.monthYearSeparator + d.yyyy : o.oData.bArrMatchFormat[5] ? m = d.monthShort + o.settings.monthYearSeparator + d.yyyy : o.oData.bArrMatchFormat[6] ? m = d.month + o.settings.monthYearSeparator + d.yyyy : o.oData.bArrMatchFormat[7] && (m = d.yyyy + o.settings.monthYearSeparator + d.MM) : o.oData.bTimeMode ? o.oData.bArrMatchFormat[0] ? m = d.hh + o.settings.timeSeparator + d.mm + o.settings.timeSeparator + d.ss + o.settings.timeMeridiemSeparator + d.ME : o.oData.bArrMatchFormat[1] ? m = d.HH + o.settings.timeSeparator + d.mm + o.settings.timeSeparator + d.ss : o.oData.bArrMatchFormat[2] ? m = d.hh + o.settings.timeSeparator + d.mm + o.settings.timeMeridiemSeparator + d.ME : o.oData.bArrMatchFormat[3] && (m = d.HH + o.settings.timeSeparator + d.mm) : o.oData.bDateTimeMode && (o.oData.bArrMatchFormat[0] || o.oData.bArrMatchFormat[1] || o.oData.bArrMatchFormat[8] || o.oData.bArrMatchFormat[9] ? D = d.dd + o.settings.dateSeparator + d.MM + o.settings.dateSeparator + d.yyyy : o.oData.bArrMatchFormat[2] || o.oData.bArrMatchFormat[3] || o.oData.bArrMatchFormat[10] || o.oData.bArrMatchFormat[11] ? D = d.MM + o.settings.dateSeparator + d.dd + o.settings.dateSeparator + d.yyyy : o.oData.bArrMatchFormat[4] || o.oData.bArrMatchFormat[5] || o.oData.bArrMatchFormat[12] || o.oData.bArrMatchFormat[13] ? D = d.yyyy + o.settings.dateSeparator + d.MM + o.settings.dateSeparator + d.dd : (o.oData.bArrMatchFormat[6] || o.oData.bArrMatchFormat[7] || o.oData.bArrMatchFormat[14] || o.oData.bArrMatchFormat[15]) && (D = d.dd + o.settings.dateSeparator + d.monthShort + o.settings.dateSeparator + d.yyyy), i = o.oData.bArrMatchFormat[0] || o.oData.bArrMatchFormat[1] || o.oData.bArrMatchFormat[2] || o.oData.bArrMatchFormat[3] || o.oData.bArrMatchFormat[4] || o.oData.bArrMatchFormat[5] || o.oData.bArrMatchFormat[6] || o.oData.bArrMatchFormat[7], l = a ? i ? d.hh + o.settings.timeSeparator + d.mm + o.settings.timeSeparator + d.ss + o.settings.timeMeridiemSeparator + d.ME : d.hh + o.settings.timeSeparator + d.mm + o.settings.timeMeridiemSeparator + d.ME : i ? d.HH + o.settings.timeSeparator + d.mm + o.settings.timeSeparator + d.ss : d.HH + o.settings.timeSeparator + d.mm, "" !== D && "" !== l && (m = D + o.settings.dateTimeSeparator + l)), o._setMatchFormat(p)), m
            },
            _clearButtonAction: function() {
                null !== this.oData.oInputElement && this._setValueOfElement(""), this.settings.isInline || this._hidePicker("")
            },
            _setOutputOnIncrementOrDecrement: function() {
                b.cf._isValid(this.oData.oInputElement) && this.settings.setValueInTextboxOnEveryClick && this._setValueOfElement(this._setOutput())
            },
            _showPicker: function(t) {
                var e = this;
                if (null === e.oData.oInputElement) {
                    e.oData.oInputElement = t, e.oData.iTabIndex = parseInt(b(t).attr("tabIndex"));
                    var a, r, n, o, i, s, m, u, c = b(t).data("field") || "",
                        d = b(t).data("min") || "",
                        D = b(t).data("max") || "",
                        l = b(t).data("format") || "",
                        p = b(t).data("view") || "",
                        h = b(t).data("startend") || "",
                        M = b(t).data("startendelem") || "",
                        g = e._getValueOfElement(t) || "";
                    if ("" !== p && (b.cf._compare(p, "Popup") ? e.setIsPopup(!0) : e.setIsPopup(!1)), !e.settings.isPopup && !e.settings.isInline) {
                        e._createPicker();
                        var f = b(e.oData.oInputElement).offset().top + b(e.oData.oInputElement).outerHeight(),
                            C = b(e.oData.oInputElement).offset().left,
                            y = b(e.oData.oInputElement).outerWidth();
                        b(e.element).css({
                            position: "absolute",
                            top: f,
                            left: C,
                            width: y,
                            height: "auto"
                        })
                    }
                    e.settings.beforeShow && e.settings.beforeShow.call(e, t), c = b.cf._isValid(c) ? c : e.settings.mode, e.settings.mode = c, b.cf._isValid(l) || (b.cf._compare(c, "date") ? l = e.settings.dateFormat : b.cf._compare(c, "time") ? l = e.settings.timeFormat : b.cf._compare(c, "datetime") && (l = e.settings.dateTimeFormat)), e._matchFormat(c, l), e.oData.dMinValue = null, e.oData.dMaxValue = null, e.oData.bIs12Hour = !1, e.oData.bDateMode ? (a = d || e.settings.minDate, r = D || e.settings.maxDate, e.oData.sDateFormat = l, b.cf._isValid(a) && (e.oData.dMinValue = e._parseDate(a)), b.cf._isValid(r) && (e.oData.dMaxValue = e._parseDate(r)), "" !== h && (b.cf._compare(h, "start") || b.cf._compare(h, "end")) && "" !== M && 1 <= b(M).length && "" !== (n = e._getValueOfElement(b(M))) && (o = e.settings.parseDateTimeString ? e.settings.parseDateTimeString.call(e, n, c, l, b(M)) : e._parseDate(n), b.cf._compare(h, "start") ? b.cf._isValid(r) ? e._compareDates(o, e.oData.dMaxValue) < 0 && (e.oData.dMaxValue = new Date(o)) : e.oData.dMaxValue = new Date(o) : b.cf._compare(h, "end") && (b.cf._isValid(a) ? 0 < e._compareDates(o, e.oData.dMinValue) && (e.oData.dMinValue = new Date(o)) : e.oData.dMinValue = new Date(o))), e.settings.parseDateTimeString ? e.oData.dCurrentDate = e.settings.parseDateTimeString.call(e, g, c, l, b(t)) : e.oData.dCurrentDate = e._parseDate(g), e.oData.dCurrentDate.setHours(0), e.oData.dCurrentDate.setMinutes(0), e.oData.dCurrentDate.setSeconds(0)) : e.oData.bTimeMode ? (a = d || e.settings.minTime, r = D || e.settings.maxTime, e.oData.sTimeFormat = l, e.oData.bIs12Hour = e.getIs12Hour(), b.cf._isValid(a) && (e.oData.dMinValue = e._parseTime(a), b.cf._isValid(r) || (e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[0] ? r = "11:59:59 PM" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[1] ? r = "23:59:59" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[2] ? r = "11:59 PM" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[3] && (r = "23:59"), e.oData.dMaxValue = e._parseTime(r))), b.cf._isValid(r) && (e.oData.dMaxValue = e._parseTime(r), b.cf._isValid(a) || (e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[0] ? a = "12:00:00 AM" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[1] ? a = "00:00:00" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[2] ? a = "12:00 AM" : e.oData.sTimeFormat === e.oData.sArrInputTimeFormats[3] && (a = "00:00"), e.oData.dMinValue = e._parseTime(a))), "" !== h && (b.cf._compare(h, "start") || b.cf._compare(h, "end")) && "" !== M && 1 <= b(M).length && "" !== (i = e._getValueOfElement(b(M))) && (e.settings.parseDateTimeString ? o = e.settings.parseDateTimeString.call(e, i, c, l, b(M)) : s = e._parseTime(i), b.cf._compare(h, "start") ? (s.setMinutes(s.getMinutes() - 1), b.cf._isValid(r) ? 2 === e._compareTime(s, e.oData.dMaxValue) && (e.oData.dMaxValue = new Date(s)) : e.oData.dMaxValue = new Date(s)) : b.cf._compare(h, "end") && (s.setMinutes(s.getMinutes() + 1), b.cf._isValid(a) ? 3 === e._compareTime(s, e.oData.dMinValue) && (e.oData.dMinValue = new Date(s)) : e.oData.dMinValue = new Date(s))), e.settings.parseDateTimeString ? e.oData.dCurrentDate = e.settings.parseDateTimeString.call(e, g, c, l, b(t)) : e.oData.dCurrentDate = e._parseTime(g)) : e.oData.bDateTimeMode && (a = d || e.settings.minDateTime, r = D || e.settings.maxDateTime, e.oData.sDateTimeFormat = l, e.oData.bIs12Hour = e.getIs12Hour(), b.cf._isValid(a) && (e.oData.dMinValue = e._parseDateTime(a)), b.cf._isValid(r) && (e.oData.dMaxValue = e._parseDateTime(r)), "" !== h && (b.cf._compare(h, "start") || b.cf._compare(h, "end")) && "" !== M && 1 <= b(M).length && "" !== (m = e._getValueOfElement(b(M))) && (u = e.settings.parseDateTimeString ? e.settings.parseDateTimeString.call(e, m, c, l, b(M)) : e._parseDateTime(m), b.cf._compare(h, "start") ? b.cf._isValid(r) ? e._compareDateTime(u, e.oData.dMaxValue) < 0 && (e.oData.dMaxValue = new Date(u)) : e.oData.dMaxValue = new Date(u) : b.cf._compare(h, "end") && (b.cf._isValid(a) ? 0 < e._compareDateTime(u, e.oData.dMinValue) && (e.oData.dMinValue = new Date(u)) : e.oData.dMinValue = new Date(u))), e.settings.parseDateTimeString ? e.oData.dCurrentDate = e.settings.parseDateTimeString.call(e, g, c, l, b(t)) : e.oData.dCurrentDate = e._parseDateTime(g)), e._setVariablesForDate(), e._modifyPicker(), b(e.element).fadeIn(e.settings.animationDuration), e.settings.afterShow && setTimeout(function() {
                        e.settings.afterShow.call(e, t)
                    }, e.settings.animationDuration)
                }
            },
            _hidePicker: function(t, e) {
                var a = this,
                    r = a.oData.oInputElement;
                a.settings.beforeHide && a.settings.beforeHide.call(a, r), b.cf._isValid(t) || (t = a.settings.animationDuration), b.cf._isValid(a.oData.oInputElement) && (b(a.oData.oInputElement).blur(), a.oData.oInputElement = null), b(a.element).fadeOut(t), 0 === t ? b(a.element).find(".dtpicker-subcontent").html("") : setTimeout(function() {
                    b(a.element).find(".dtpicker-subcontent").html("")
                }, t), b(document).unbind("click.DateTimePicker keydown.DateTimePicker keyup.DateTimePicker"), a.settings.afterHide && (0 === t ? a.settings.afterHide.call(a, r) : setTimeout(function() {
                    a.settings.afterHide.call(a, r)
                }, t)), b.cf._isValid(e) && a._showPicker(e)
            },
            _modifyPicker: function() {
                var t, e, a = this,
                    r = [];
                a.oData.bDateMode ? (t = a.settings.titleContentDate, e = 3, a.oData.bArrMatchFormat[0] ? r = ["day", "month", "year"] : a.oData.bArrMatchFormat[1] ? r = ["month", "day", "year"] : a.oData.bArrMatchFormat[2] ? r = ["year", "month", "day"] : a.oData.bArrMatchFormat[3] ? r = ["day", "month", "year"] : a.oData.bArrMatchFormat[4] ? (e = 2, r = ["month", "year"]) : a.oData.bArrMatchFormat[5] ? (e = 2, r = ["month", "year"]) : a.oData.bArrMatchFormat[6] ? (e = 2, r = ["month", "year"]) : a.oData.bArrMatchFormat[7] && (e = 2, r = ["year", "month"])) : a.oData.bTimeMode ? (t = a.settings.titleContentTime, a.oData.bArrMatchFormat[0] ? (e = 4, r = ["hour", "minutes", "seconds", "meridiem"]) : a.oData.bArrMatchFormat[1] ? (e = 3, r = ["hour", "minutes", "seconds"]) : a.oData.bArrMatchFormat[2] ? (e = 3, r = ["hour", "minutes", "meridiem"]) : a.oData.bArrMatchFormat[3] && (e = 2, r = ["hour", "minutes"])) : a.oData.bDateTimeMode && (t = a.settings.titleContentDateTime, a.oData.bArrMatchFormat[0] ? (e = 6, r = ["day", "month", "year", "hour", "minutes", "seconds"]) : a.oData.bArrMatchFormat[1] ? (e = 7, r = ["day", "month", "year", "hour", "minutes", "seconds", "meridiem"]) : a.oData.bArrMatchFormat[2] ? (e = 6, r = ["month", "day", "year", "hour", "minutes", "seconds"]) : a.oData.bArrMatchFormat[3] ? (e = 7, r = ["month", "day", "year", "hour", "minutes", "seconds", "meridiem"]) : a.oData.bArrMatchFormat[4] ? (e = 6, r = ["year", "month", "day", "hour", "minutes", "seconds"]) : a.oData.bArrMatchFormat[5] ? (e = 7, r = ["year", "month", "day", "hour", "minutes", "seconds", "meridiem"]) : a.oData.bArrMatchFormat[6] ? (e = 6, r = ["day", "month", "year", "hour", "minutes", "seconds"]) : a.oData.bArrMatchFormat[7] ? (e = 7, r = ["day", "month", "year", "hour", "minutes", "seconds", "meridiem"]) : a.oData.bArrMatchFormat[8] ? (e = 5, r = ["day", "month", "year", "hour", "minutes"]) : a.oData.bArrMatchFormat[9] ? (e = 6, r = ["day", "month", "year", "hour", "minutes", "meridiem"]) : a.oData.bArrMatchFormat[10] ? (e = 5, r = ["month", "day", "year", "hour", "minutes"]) : a.oData.bArrMatchFormat[11] ? (e = 6, r = ["month", "day", "year", "hour", "minutes", "meridiem"]) : a.oData.bArrMatchFormat[12] ? (e = 5, r = ["year", "month", "day", "hour", "minutes"]) : a.oData.bArrMatchFormat[13] ? (e = 6, r = ["year", "month", "day", "hour", "minutes", "meridiem"]) : a.oData.bArrMatchFormat[14] ? (e = 5, r = ["day", "month", "year", "hour", "minutes"]) : a.oData.bArrMatchFormat[15] && (e = 6, r = ["day", "month", "year", "hour", "minutes", "meridiem"]));
                var n, o = "dtpicker-comp" + e,
                    i = !1,
                    s = !1,
                    m = !1;
                for (n = 0; n < a.settings.buttonsToDisplay.length; n++) b.cf._compare(a.settings.buttonsToDisplay[n], "HeaderCloseButton") ? i = !0 : b.cf._compare(a.settings.buttonsToDisplay[n], "SetButton") ? s = !0 : b.cf._compare(a.settings.buttonsToDisplay[n], "ClearButton") && (m = !0);
                var u = "";
                a.settings.showHeader && (u += "<div class='dtpicker-header'>", u += "<div class='dtpicker-title'>" + t + "</div>", i && (u += "<a class='dtpicker-close'>&times;</a>"), u += "<div class='dtpicker-value'></div>", u += "</div>");
                var c = "";
                for (c += "<div class='dtpicker-components'>", n = 0; n < e; n++) {
                    var d = r[n];
                    c += "<div class='dtpicker-compOutline " + o + "'>", c += "<div class='dtpicker-comp " + d + "'>", c += "<a class='dtpicker-compButton increment'>" + a.settings.incrementButtonContent + "</a>", a.settings.readonlyInputs ? c += "<input type='text' class='dtpicker-compValue' readonly>" : c += "<input type='text' class='dtpicker-compValue'>", c += "<a class='dtpicker-compButton decrement'>" + a.settings.decrementButtonContent + "</a>", a.settings.labels && (c += "<div class='dtpicker-label'>" + a.settings.labels[d] + "</div>"), c += "</div>", c += "</div>"
                }
                c += "</div>";
                var D = "";
                D += "<div class='dtpicker-buttonCont" + (s && m ? " dtpicker-twoButtons" : " dtpicker-singleButton") + "'>", s && (D += "<a class='dtpicker-button dtpicker-buttonSet'>" + a.settings.setButtonContent + "</a>"), m && (D += "<a class='dtpicker-button dtpicker-buttonClear'>" + a.settings.clearButtonContent + "</a>");
                var l = u + c + (D += "</div>");
                b(a.element).find(".dtpicker-subcontent").html(l), a._setCurrentDate(), a._addEventHandlersForPicker()
            },
            _addEventHandlersForPicker: function() {
                var e, a, r = this;
                if (r.settings.isInline || b(document).on("click.DateTimePicker", function(t) {
                        r.oData.bElemFocused && r._hidePicker("")
                    }), b(document).on("keydown.DateTimePicker", function(t) {
                        if (a = parseInt(t.keyCode ? t.keyCode : t.which), !b(".dtpicker-compValue").is(":focus") && 9 === a) return r._setButtonAction(!0), b("[tabIndex=" + (r.oData.iTabIndex + 1) + "]").focus(), !1;
                        if (b(".dtpicker-compValue").is(":focus")) {
                            if (38 === a) return e = b(".dtpicker-compValue:focus").parent().attr("class"), r._incrementDecrementActionsUsingArrowAndMouse(e, "inc"), !1;
                            if (40 === a) return e = b(".dtpicker-compValue:focus").parent().attr("class"), r._incrementDecrementActionsUsingArrowAndMouse(e, "dec"), !1
                        }
                    }), r.settings.isInline || b(document).on("keydown.DateTimePicker", function(t) {
                        a = parseInt(t.keyCode ? t.keyCode : t.which), b(".dtpicker-compValue").is(":focus") || 9 === a || r._hidePicker("")
                    }), b(".dtpicker-cont *").click(function(t) {
                        t.stopPropagation()
                    }), r.settings.readonlyInputs || (b(".dtpicker-compValue").not(".month .dtpicker-compValue, .meridiem .dtpicker-compValue").keyup(function() {
                        this.value = this.value.replace(/[^0-9\.]/g, "")
                    }), b(".dtpicker-compValue").focus(function() {
                        r.oData.bElemFocused = !0, b(this).select()
                    }), b(".dtpicker-compValue").blur(function() {
                        r._getValuesFromInputBoxes(), r._setCurrentDate(), r.oData.bElemFocused = !1;
                        var t = b(this).parent().parent();
                        setTimeout(function() {
                            t.is(":last-child") && !r.oData.bElemFocused && r._setButtonAction(!1)
                        }, 50)
                    }), b(".dtpicker-compValue").keyup(function(t) {
                        var e, a = b(this),
                            r = a.val(),
                            n = r.length;
                        a.parent().hasClass("day") || a.parent().hasClass("hour") || a.parent().hasClass("minutes") || a.parent().hasClass("meridiem") ? 2 < n && (e = r.slice(0, 2), a.val(e)) : a.parent().hasClass("month") ? 3 < n && (e = r.slice(0, 3), a.val(e)) : a.parent().hasClass("year") && 4 < n && (e = r.slice(0, 4), a.val(e)), 9 === parseInt(t.keyCode ? t.keyCode : t.which) && b(this).select()
                    })), b(r.element).find(".dtpicker-compValue").on("mousewheel DOMMouseScroll onmousewheel", function(t) {
                        if (b(".dtpicker-compValue").is(":focus")) return 0 < Math.max(-1, Math.min(1, t.originalEvent.wheelDelta)) ? (e = b(".dtpicker-compValue:focus").parent().attr("class"), r._incrementDecrementActionsUsingArrowAndMouse(e, "inc")) : (e = b(".dtpicker-compValue:focus").parent().attr("class"), r._incrementDecrementActionsUsingArrowAndMouse(e, "dec")), !1
                    }), b(r.element).find(".dtpicker-close").click(function(t) {
                        r.settings.buttonClicked && r.settings.buttonClicked.call(r, "CLOSE", r.oData.oInputElement), r.settings.isInline || r._hidePicker("")
                    }), b(r.element).find(".dtpicker-buttonSet").click(function(t) {
                        r.settings.buttonClicked && r.settings.buttonClicked.call(r, "SET", r.oData.oInputElement), r._setButtonAction(!1)
                    }), b(r.element).find(".dtpicker-buttonClear").click(function(t) {
                        r.settings.buttonClicked && r.settings.buttonClicked.call(r, "CLEAR", r.oData.oInputElement), r._clearButtonAction()
                    }), r.settings.captureTouchHold || r.settings.captureMouseHold) {
                    var t = "";
                    r.settings.captureTouchHold && r.oData.bIsTouchDevice && (t += "touchstart touchmove touchend "), r.settings.captureMouseHold && (t += "mousedown mouseup"), b(".dtpicker-cont *").on(t, function(t) {
                        r._clearIntervalForTouchEvents()
                    }), r._bindTouchEvents("day"), r._bindTouchEvents("month"), r._bindTouchEvents("year"), r._bindTouchEvents("hour"), r._bindTouchEvents("minutes"), r._bindTouchEvents("seconds")
                } else b(r.element).find(".day .increment, .day .increment *").click(function(t) {
                    r.oData.iCurrentDay++, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".day .decrement, .day .decrement *").click(function(t) {
                    r.oData.iCurrentDay--, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".month .increment, .month .increment *").click(function(t) {
                    r.oData.iCurrentMonth++, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".month .decrement, .month .decrement *").click(function(t) {
                    r.oData.iCurrentMonth--, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".year .increment, .year .increment *").click(function(t) {
                    r.oData.iCurrentYear++, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".year .decrement, .year .decrement *").click(function(t) {
                    r.oData.iCurrentYear--, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".hour .increment, .hour .increment *").click(function(t) {
                    r.oData.iCurrentHour++, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".hour .decrement, .hour .decrement *").click(function(t) {
                    r.oData.iCurrentHour--, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".minutes .increment, .minutes .increment *").click(function(t) {
                    r.oData.iCurrentMinutes += r.settings.minuteInterval, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".minutes .decrement, .minutes .decrement *").click(function(t) {
                    r.oData.iCurrentMinutes -= r.settings.minuteInterval, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".seconds .increment, .seconds .increment *").click(function(t) {
                    r.oData.iCurrentSeconds += r.settings.secondsInterval, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                }), b(r.element).find(".seconds .decrement, .seconds .decrement *").click(function(t) {
                    r.oData.iCurrentSeconds -= r.settings.secondsInterval, r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                });
                b(r.element).find(".meridiem .dtpicker-compButton, .meridiem .dtpicker-compButton *").click(function(t) {
                    b.cf._compare(r.oData.sCurrentMeridiem, "AM") ? (r.oData.sCurrentMeridiem = "PM", r.oData.iCurrentHour += 12) : b.cf._compare(r.oData.sCurrentMeridiem, "PM") && (r.oData.sCurrentMeridiem = "AM", r.oData.iCurrentHour -= 12), r._setCurrentDate(), r._setOutputOnIncrementOrDecrement()
                })
            },
            _adjustMinutes: function(t) {
                var e = this;
                return e.settings.roundOffMinutes && 1 !== e.settings.minuteInterval && (t = t % e.settings.minuteInterval ? t - t % e.settings.minuteInterval + e.settings.minuteInterval : t), t
            },
            _adjustSeconds: function(t) {
                var e = this;
                return e.settings.roundOffSeconds && 1 !== e.settings.secondsInterval && (t = t % e.settings.secondsInterval ? t - t % e.settings.secondsInterval + e.settings.secondsInterval : t), t
            },
            _getValueOfElement: function(t) {
                return b.cf._compare(b(t).prop("tagName"), "INPUT") ? b(t).val() : b(t).html()
            },
            _setValueOfElement: function(t, e) {
                var a = this;
                b.cf._isValid(e) || (e = b(a.oData.oInputElement)), b.cf._compare(e.prop("tagName"), "INPUT") ? e.val(t) : e.html(t);
                var r = a.getDateObjectForInputField(e);
                return a.settings.settingValueOfElement && a.settings.settingValueOfElement.call(a, t, r, e), e.change(), t
            },
            _bindTouchEvents: function(e) {
                var a = this;
                b(a.element).find("." + e + " .increment, ." + e + " .increment *").on("touchstart mousedown", function(t) {
                    t.stopPropagation(), b.cf._isValid(a.oData.sTouchButton) || (a.oData.iTouchStart = (new Date).getTime(), a.oData.sTouchButton = e + "-inc", a._setIntervalForTouchEvents())
                }), b(a.element).find("." + e + " .increment, ." + e + " .increment *").on("touchend mouseup", function(t) {
                    t.stopPropagation(), a._clearIntervalForTouchEvents()
                }), b(a.element).find("." + e + " .decrement, ." + e + " .decrement *").on("touchstart mousedown", function(t) {
                    t.stopPropagation(), b.cf._isValid(a.oData.sTouchButton) || (a.oData.iTouchStart = (new Date).getTime(), a.oData.sTouchButton = e + "-dec", a._setIntervalForTouchEvents())
                }), b(a.element).find("." + e + " .decrement, ." + e + " .decrement *").on("touchend mouseup", function(t) {
                    t.stopPropagation(), a._clearIntervalForTouchEvents()
                })
            },
            _setIntervalForTouchEvents: function() {
                var t, e = this,
                    a = e.oData.bIsTouchDevice ? e.settings.touchHoldInterval : e.settings.mouseHoldInterval;
                b.cf._isValid(e.oData.oTimeInterval) || (e.oData.oTimeInterval = setInterval(function() {
                    t = (new Date).getTime() - e.oData.iTouchStart, a < t && b.cf._isValid(e.oData.sTouchButton) && ("day-inc" === e.oData.sTouchButton ? e.oData.iCurrentDay++ : "day-dec" === e.oData.sTouchButton ? e.oData.iCurrentDay-- : "month-inc" === e.oData.sTouchButton ? e.oData.iCurrentMonth++ : "month-dec" === e.oData.sTouchButton ? e.oData.iCurrentMonth-- : "year-inc" === e.oData.sTouchButton ? e.oData.iCurrentYear++ : "year-dec" === e.oData.sTouchButton ? e.oData.iCurrentYear-- : "hour-inc" === e.oData.sTouchButton ? e.oData.iCurrentHour++ : "hour-dec" === e.oData.sTouchButton ? e.oData.iCurrentHour-- : "minute-inc" === e.oData.sTouchButton ? e.oData.iCurrentMinutes += e.settings.minuteInterval : "minute-dec" === e.oData.sTouchButton ? e.oData.iCurrentMinutes -= e.settings.minuteInterval : "second-inc" === e.oData.sTouchButton ? e.oData.iCurrentSeconds += e.settings.secondsInterval : "second-dec" === e.oData.sTouchButton && (e.oData.iCurrentSeconds -= e.settings.secondsInterval), e._setCurrentDate(), e._setOutputOnIncrementOrDecrement(), e.oData.iTouchStart = (new Date).getTime())
                }, a))
            },
            _clearIntervalForTouchEvents: function() {
                var t = this;
                clearInterval(t.oData.oTimeInterval), b.cf._isValid(t.oData.sTouchButton) && (t.oData.sTouchButton = null, t.oData.iTouchStart = 0), t.oData.oTimeInterval = null
            },
            _incrementDecrementActionsUsingArrowAndMouse: function(t, e) {
                var a = this;
                t.includes("day") ? "inc" === e ? a.oData.iCurrentDay++ : "dec" === e && a.oData.iCurrentDay-- : t.includes("month") ? "inc" === e ? a.oData.iCurrentMonth++ : "dec" === e && a.oData.iCurrentMonth-- : t.includes("year") ? "inc" === e ? a.oData.iCurrentYear++ : "dec" === e && a.oData.iCurrentYear-- : t.includes("hour") ? "inc" === e ? a.oData.iCurrentHour++ : "dec" === e && a.oData.iCurrentHour-- : t.includes("minutes") ? "inc" === e ? a.oData.iCurrentMinutes += a.settings.minuteInterval : "dec" === e && (a.oData.iCurrentMinutes -= a.settings.minuteInterval) : t.includes("seconds") && ("inc" === e ? a.oData.iCurrentSeconds += a.settings.secondsInterval : "dec" === e && (a.oData.iCurrentSeconds -= a.settings.secondsInterval)), a._setCurrentDate(), a._setOutputOnIncrementOrDecrement()
            },
            _parseDate: function(t) {
                var e, a = this,
                    r = a.settings.defaultDate ? new Date(a.settings.defaultDate) : new Date,
                    n = r.getDate(),
                    o = r.getMonth(),
                    i = r.getFullYear();
                b.cf._isValid(t) && ("string" == typeof t ? (e = a.oData.bArrMatchFormat[4] || a.oData.bArrMatchFormat[5] || a.oData.bArrMatchFormat[6] ? t.split(a.settings.monthYearSeparator) : t.split(a.settings.dateSeparator), a.oData.bArrMatchFormat[0] ? (n = parseInt(e[0]), o = parseInt(e[1] - 1), i = parseInt(e[2])) : a.oData.bArrMatchFormat[1] ? (o = parseInt(e[0] - 1), n = parseInt(e[1]), i = parseInt(e[2])) : a.oData.bArrMatchFormat[2] ? (i = parseInt(e[0]), o = parseInt(e[1] - 1), n = parseInt(e[2])) : a.oData.bArrMatchFormat[3] ? (n = parseInt(e[0]), o = a._getShortMonthIndex(e[1]), i = parseInt(e[2])) : a.oData.bArrMatchFormat[4] ? (n = 1, o = parseInt(e[0]) - 1, i = parseInt(e[1])) : a.oData.bArrMatchFormat[5] ? (n = 1, o = a._getShortMonthIndex(e[0]), i = parseInt(e[1])) : a.oData.bArrMatchFormat[6] ? (n = 1, o = a._getFullMonthIndex(e[0]), i = parseInt(e[1])) : a.oData.bArrMatchFormat[7] && (n = 1, o = parseInt(e[1]) - 1, i = parseInt(e[0]))) : (n = t.getDate(), o = t.getMonth(), i = t.getFullYear()));
                return r = new Date(i, o, n, 0, 0, 0, 0)
            },
            _parseTime: function(t) {
                var e, a, r, n = this,
                    o = n.settings.defaultDate ? new Date(n.settings.defaultDate) : new Date,
                    i = o.getDate(),
                    s = o.getMonth(),
                    m = o.getFullYear(),
                    u = o.getHours(),
                    c = o.getMinutes(),
                    d = o.getSeconds(),
                    D = n.oData.bArrMatchFormat[0] || n.oData.bArrMatchFormat[1];
                return d = D ? n._adjustSeconds(d) : 0, b.cf._isValid(t) && ("string" == typeof t ? (n.oData.bIs12Hour && (t = (e = t.split(n.settings.timeMeridiemSeparator))[0], a = e[1], b.cf._compare(a, "AM") || b.cf._compare(a, "PM") || (a = "")), r = t.split(n.settings.timeSeparator), u = parseInt(r[0]), c = parseInt(r[1]), D && (d = parseInt(r[2]), d = n._adjustSeconds(d)), 12 === u && b.cf._compare(a, "AM") ? u = 0 : u < 12 && b.cf._compare(a, "PM") && (u += 12)) : (u = t.getHours(), c = t.getMinutes(), D && (d = t.getSeconds(), d = n._adjustSeconds(d)))), c = n._adjustMinutes(c), o = new Date(m, s, i, u, c, d, 0)
            },
            _parseDateTime: function(t) {
                var e, a, r, n, o, i = this,
                    s = i.settings.defaultDate ? new Date(i.settings.defaultDate) : new Date,
                    m = s.getDate(),
                    u = s.getMonth(),
                    c = s.getFullYear(),
                    d = s.getHours(),
                    D = s.getMinutes(),
                    l = s.getSeconds(),
                    p = "",
                    h = i.oData.bArrMatchFormat[0] || i.oData.bArrMatchFormat[1] || i.oData.bArrMatchFormat[2] || i.oData.bArrMatchFormat[3] || i.oData.bArrMatchFormat[4] || i.oData.bArrMatchFormat[5] || i.oData.bArrMatchFormat[6] || i.oData.bArrMatchFormat[7];
                return l = h ? i._adjustSeconds(l) : 0, b.cf._isValid(t) && ("string" == typeof t ? (a = (e = t.split(i.settings.dateTimeSeparator))[0].split(i.settings.dateSeparator), i.oData.bArrMatchFormat[0] || i.oData.bArrMatchFormat[1] || i.oData.bArrMatchFormat[8] || i.oData.bArrMatchFormat[9] ? (m = parseInt(a[0]), u = parseInt(a[1] - 1), c = parseInt(a[2])) : i.oData.bArrMatchFormat[2] || i.oData.bArrMatchFormat[3] || i.oData.bArrMatchFormat[10] || i.oData.bArrMatchFormat[11] ? (u = parseInt(a[0] - 1), m = parseInt(a[1]), c = parseInt(a[2])) : i.oData.bArrMatchFormat[4] || i.oData.bArrMatchFormat[5] || i.oData.bArrMatchFormat[12] || i.oData.bArrMatchFormat[13] ? (c = parseInt(a[0]), u = parseInt(a[1] - 1), m = parseInt(a[2])) : (i.oData.bArrMatchFormat[6] || i.oData.bArrMatchFormat[7] || i.oData.bArrMatchFormat[14] || i.oData.bArrMatchFormat[15]) && (m = parseInt(a[0]), u = i._getShortMonthIndex(a[1]), c = parseInt(a[2])), r = e[1], b.cf._isValid(r) && (i.oData.bIs12Hour && (p = b.cf._compare(i.settings.dateTimeSeparator, i.settings.timeMeridiemSeparator) && 3 === e.length ? e[2] : (r = (n = r.split(i.settings.timeMeridiemSeparator))[0], n[1]), b.cf._compare(p, "AM") || b.cf._compare(p, "PM") || (p = "")), o = r.split(i.settings.timeSeparator), d = parseInt(o[0]), D = parseInt(o[1]), h && (l = parseInt(o[2])), 12 === d && b.cf._compare(p, "AM") ? d = 0 : d < 12 && b.cf._compare(p, "PM") && (d += 12))) : (m = t.getDate(), u = t.getMonth(), c = t.getFullYear(), d = t.getHours(), D = t.getMinutes(), h && (l = t.getSeconds(), l = i._adjustSeconds(l)))), D = i._adjustMinutes(D), s = new Date(c, u, m, d, D, l, 0)
            },
            _getShortMonthIndex: function(t) {
                for (var e = 0; e < this.settings.shortMonthNames.length; e++)
                    if (b.cf._compare(t, this.settings.shortMonthNames[e])) return e
            },
            _getFullMonthIndex: function(t) {
                for (var e = 0; e < this.settings.fullMonthNames.length; e++)
                    if (b.cf._compare(t, this.settings.fullMonthNames[e])) return e
            },
            getIs12Hour: function(t, e) {
                var a = this,
                    r = !1,
                    n = Function.length;
                return a._setMatchFormat(n, t, e), a.oData.bTimeMode ? r = a.oData.bArrMatchFormat[0] || a.oData.bArrMatchFormat[2] : a.oData.bDateTimeMode && (r = a.oData.bArrMatchFormat[1] || a.oData.bArrMatchFormat[3] || a.oData.bArrMatchFormat[5] || a.oData.bArrMatchFormat[7] || a.oData.bArrMatchFormat[9] || a.oData.bArrMatchFormat[11] || a.oData.bArrMatchFormat[13] || a.oData.bArrMatchFormat[15]), a._setMatchFormat(n), r
            },
            _setVariablesForDate: function(t, e, a) {
                var r, n = this,
                    o = {},
                    i = b.cf._isValid(t);
                if (i ? (r = new Date(t), b.cf._isValid(e) || (e = !0), b.cf._isValid(a) || (a = !0)) : (r = "[object Date]" === Object.prototype.toString.call(n.oData.dCurrentDate) && isFinite(n.oData.dCurrentDate) ? new Date(n.oData.dCurrentDate) : new Date, b.cf._isValid(e) || (e = n.oData.bTimeMode || n.oData.bDateTimeMode), b.cf._isValid(a) || (a = n.oData.bIs12Hour)), o.iCurrentDay = r.getDate(), o.iCurrentMonth = r.getMonth(), o.iCurrentYear = r.getFullYear(), o.iCurrentWeekday = r.getDay(), e && (o.iCurrentHour = r.getHours(), o.iCurrentMinutes = r.getMinutes(), o.iCurrentSeconds = r.getSeconds(), a && (o.sCurrentMeridiem = n._determineMeridiemFromHourAndMinutes(o.iCurrentHour, o.iCurrentMinutes))), i) return o;
                n.oData = b.extend(n.oData, o)
            },
            _getValuesFromInputBoxes: function() {
                var t, e, a, r, n, o, i = this;
                (i.oData.bDateMode || i.oData.bDateTimeMode) && (1 < (t = b(i.element).find(".month .dtpicker-compValue").val()).length && (t = t.charAt(0).toUpperCase() + t.slice(1)), -1 !== (e = i.settings.shortMonthNames.indexOf(t)) ? i.oData.iCurrentMonth = parseInt(e) : t.match("^[+|-]?[0-9]+$") && (i.oData.iCurrentMonth = parseInt(t - 1)), i.oData.iCurrentDay = parseInt(b(i.element).find(".day .dtpicker-compValue").val()) || i.oData.iCurrentDay, i.oData.iCurrentYear = parseInt(b(i.element).find(".year .dtpicker-compValue").val()) || i.oData.iCurrentYear);
                (i.oData.bTimeMode || i.oData.bDateTimeMode) && (a = parseInt(b(i.element).find(".hour .dtpicker-compValue").val()), r = i._adjustMinutes(parseInt(b(i.element).find(".minutes .dtpicker-compValue").val())), n = i._adjustMinutes(parseInt(b(i.element).find(".seconds .dtpicker-compValue").val())), i.oData.iCurrentHour = isNaN(a) ? i.oData.iCurrentHour : a, i.oData.iCurrentMinutes = isNaN(r) ? i.oData.iCurrentMinutes : r, i.oData.iCurrentSeconds = isNaN(n) ? i.oData.iCurrentSeconds : n, 59 < i.oData.iCurrentSeconds && (i.oData.iCurrentMinutes += i.oData.iCurrentSeconds / 60, i.oData.iCurrentSeconds = i.oData.iCurrentSeconds % 60), 59 < i.oData.iCurrentMinutes && (i.oData.iCurrentHour += i.oData.iCurrentMinutes / 60, i.oData.iCurrentMinutes = i.oData.iCurrentMinutes % 60), i.oData.bIs12Hour ? 12 < i.oData.iCurrentHour && (i.oData.iCurrentHour = i.oData.iCurrentHour % 12) : 23 < i.oData.iCurrentHour && (i.oData.iCurrentHour = i.oData.iCurrentHour % 23), i.oData.bIs12Hour && (o = b(i.element).find(".meridiem .dtpicker-compValue").val(), (b.cf._compare(o, "AM") || b.cf._compare(o, "PM")) && (i.oData.sCurrentMeridiem = o), b.cf._compare(i.oData.sCurrentMeridiem, "PM") && 12 !== i.oData.iCurrentHour && i.oData.iCurrentHour < 13 && (i.oData.iCurrentHour += 12), b.cf._compare(i.oData.sCurrentMeridiem, "AM") && 12 === i.oData.iCurrentHour && (i.oData.iCurrentHour = 0)))
            },
            _setCurrentDate: function() {
                var t = this;
                (t.oData.bTimeMode || t.oData.bDateTimeMode) && (59 < t.oData.iCurrentSeconds ? (t.oData.iCurrentMinutes += t.oData.iCurrentSeconds / 60, t.oData.iCurrentSeconds = t.oData.iCurrentSeconds % 60) : t.oData.iCurrentSeconds < 0 && (t.oData.iCurrentMinutes -= t.settings.minuteInterval, t.oData.iCurrentSeconds += 60), t.oData.iCurrentMinutes = t._adjustMinutes(t.oData.iCurrentMinutes), t.oData.iCurrentSeconds = t._adjustSeconds(t.oData.iCurrentSeconds));
                var e, a, r, n, o, i, s, m = new Date(t.oData.iCurrentYear, t.oData.iCurrentMonth, t.oData.iCurrentDay, t.oData.iCurrentHour, t.oData.iCurrentMinutes, t.oData.iCurrentSeconds, 0),
                    u = !1,
                    c = !1;
                if (null !== t.oData.dMaxValue && (u = m.getTime() > t.oData.dMaxValue.getTime()), null !== t.oData.dMinValue && (c = m.getTime() < t.oData.dMinValue.getTime()), u || c) {
                    var d = !1,
                        D = !1;
                    null !== t.oData.dMaxValue && (d = t.oData.dCurrentDate.getTime() > t.oData.dMaxValue.getTime()), null !== t.oData.dMinValue && (D = t.oData.dCurrentDate.getTime() < t.oData.dMinValue.getTime()), d || D ? (d && (m = new Date(t.oData.dMaxValue)), D && (m = new Date(t.oData.dMinValue))) : m = new Date(t.oData.dCurrentDate)
                }
                if (t.oData.dCurrentDate = new Date(m), t._setVariablesForDate(), a = {}, s = i = o = "", (t.oData.bDateMode || t.oData.bDateTimeMode) && (t.oData.bDateMode && (t.oData.bArrMatchFormat[4] || t.oData.bArrMatchFormat[5] || t.oData.bArrMatchFormat[6]) && (t.oData.iCurrentDay = 1), r = t._formatDate(), b(t.element).find(".day .dtpicker-compValue").val(r.dd), t.oData.bDateMode ? t.oData.bArrMatchFormat[4] || t.oData.bArrMatchFormat[7] ? b(t.element).find(".month .dtpicker-compValue").val(r.MM) : t.oData.bArrMatchFormat[6] ? b(t.element).find(".month .dtpicker-compValue").val(r.month) : b(t.element).find(".month .dtpicker-compValue").val(r.monthShort) : b(t.element).find(".month .dtpicker-compValue").val(r.monthShort), b(t.element).find(".year .dtpicker-compValue").val(r.yyyy), t.settings.formatHumanDate ? a = b.extend(a, r) : t.oData.bDateMode && (t.oData.bArrMatchFormat[4] || t.oData.bArrMatchFormat[5] || t.oData.bArrMatchFormat[6] || t.oData.bArrMatchFormat[7]) ? t.oData.bArrMatchFormat[4] ? o = r.MM + t.settings.monthYearSeparator + r.yyyy : t.oData.bArrMatchFormat[5] ? o = r.monthShort + t.settings.monthYearSeparator + r.yyyy : t.oData.bArrMatchFormat[6] ? o = r.month + t.settings.monthYearSeparator + r.yyyy : t.oData.bArrMatchFormat[7] && (o = r.yyyy + t.settings.monthYearSeparator + r.MM) : o = r.dayShort + ", " + r.month + " " + r.dd + ", " + r.yyyy), t.oData.bTimeMode || t.oData.bDateTimeMode)
                    if (n = t._formatTime(), t.oData.bIs12Hour && b(t.element).find(".meridiem .dtpicker-compValue").val(t.oData.sCurrentMeridiem), b(t.element).find(".hour .dtpicker-compValue").val(n.hour), b(t.element).find(".minutes .dtpicker-compValue").val(n.mm), b(t.element).find(".seconds .dtpicker-compValue").val(n.ss), t.settings.formatHumanDate) a = b.extend(a, n);
                    else {
                        var l = t.oData.bTimeMode && (t.oData.bArrMatchFormat[0] || t.oData.bArrMatchFormat[1]),
                            p = t.oData.bDateTimeMode && (t.oData.bArrMatchFormat[0] || t.oData.bArrMatchFormat[1] || t.oData.bArrMatchFormat[2] || t.oData.bArrMatchFormat[3] || t.oData.bArrMatchFormat[4] || t.oData.bArrMatchFormat[5] || t.oData.bArrMatchFormat[6] || t.oData.bArrMatchFormat[7]);
                        i = l || p ? n.hour + t.settings.timeSeparator + n.mm + t.settings.timeSeparator + n.ss : n.hour + t.settings.timeSeparator + n.mm, t.oData.bIs12Hour && (i += t.settings.timeMeridiemSeparator + t.oData.sCurrentMeridiem)
                    } t.settings.formatHumanDate ? (t.oData.bDateTimeMode ? e = t.oData.sDateFormat : t.oData.bDateMode ? e = t.oData.sTimeFormat : t.oData.bTimeMode && (e = t.oData.sDateTimeFormat), s = t.settings.formatHumanDate.call(t, a, t.settings.mode, e)) : t.oData.bDateTimeMode ? s = o + t.settings.dateTimeSeparator + i : t.oData.bDateMode ? s = o : t.oData.bTimeMode && (s = i), b(t.element).find(".dtpicker-value").html(s), t._setButtons()
            },
            _formatDate: function(t) {
                var e, a, r, n, o, i, s, m = this,
                    u = {};
                return b.cf._isValid(t) ? u = b.extend({}, t) : (u.iCurrentDay = m.oData.iCurrentDay, u.iCurrentMonth = m.oData.iCurrentMonth, u.iCurrentYear = m.oData.iCurrentYear, u.iCurrentWeekday = m.oData.iCurrentWeekday), e = (e = u.iCurrentDay) < 10 ? "0" + e : e, r = u.iCurrentMonth, n = (n = u.iCurrentMonth + 1) < 10 ? "0" + n : n, o = m.settings.shortMonthNames[r], i = m.settings.fullMonthNames[r], a = u.iCurrentYear, s = u.iCurrentWeekday, {
                    dd: e,
                    MM: n,
                    monthShort: o,
                    month: i,
                    yyyy: a,
                    dayShort: m.settings.shortDayNames[s],
                    day: m.settings.fullDayNames[s]
                }
            },
            _formatTime: function(t) {
                var e, a, r, n, o, i, s, m = this,
                    u = {};
                return b.cf._isValid(t) ? u = b.extend({}, t) : (u.iCurrentHour = m.oData.iCurrentHour, u.iCurrentMinutes = m.oData.iCurrentMinutes, u.iCurrentSeconds = m.oData.iCurrentSeconds, u.sCurrentMeridiem = m.oData.sCurrentMeridiem), o = a = (e = u.iCurrentHour) < 10 ? "0" + e : e, 12 < (r = u.iCurrentHour) && (r -= 12), "00" === o && (r = 12), n = r < 10 ? "0" + r : r, m.oData.bIs12Hour && (o = n), i = (i = u.iCurrentMinutes) < 10 ? "0" + i : i, s = (s = u.iCurrentSeconds) < 10 ? "0" + s : s, {
                    H: e,
                    HH: a,
                    h: r,
                    hh: n,
                    hour: o,
                    m: u.iCurrentMinutes,
                    mm: i,
                    s: u.iCurrentSeconds,
                    ss: s,
                    ME: u.sCurrentMeridiem
                }
            },
            _setButtons: function() {
                var t, e, a, r = this;
                (b(r.element).find(".dtpicker-compButton").removeClass("dtpicker-compButtonDisable").addClass("dtpicker-compButtonEnable"), null !== r.oData.dMaxValue && (r.oData.bTimeMode ? ((r.oData.iCurrentHour + 1 > r.oData.dMaxValue.getHours() || r.oData.iCurrentHour + 1 === r.oData.dMaxValue.getHours() && r.oData.iCurrentMinutes > r.oData.dMaxValue.getMinutes()) && b(r.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), r.oData.iCurrentHour >= r.oData.dMaxValue.getHours() && r.oData.iCurrentMinutes + 1 > r.oData.dMaxValue.getMinutes() && b(r.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : ((t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay + 1, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".day .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth + 1, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".month .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear + 1, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".year .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour + 1, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes + 1, r.oData.iCurrentSeconds, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds + 1, 0)).getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".seconds .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))), null !== r.oData.dMinValue && (r.oData.bTimeMode ? ((r.oData.iCurrentHour - 1 < r.oData.dMinValue.getHours() || r.oData.iCurrentHour - 1 === r.oData.dMinValue.getHours() && r.oData.iCurrentMinutes < r.oData.dMinValue.getMinutes()) && b(r.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), r.oData.iCurrentHour <= r.oData.dMinValue.getHours() && r.oData.iCurrentMinutes - 1 < r.oData.dMinValue.getMinutes() && b(r.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : ((t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay - 1, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".day .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth - 1, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".month .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear - 1, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".year .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour - 1, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes - 1, r.oData.iCurrentSeconds, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, r.oData.iCurrentHour, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds - 1, 0)).getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".seconds .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))), r.oData.bIs12Hour) && (null === r.oData.dMaxValue && null === r.oData.dMinValue || (e = r.oData.iCurrentHour, b.cf._compare(r.oData.sCurrentMeridiem, "AM") ? e += 12 : b.cf._compare(r.oData.sCurrentMeridiem, "PM") && (e -= 12), t = new Date(r.oData.iCurrentYear, r.oData.iCurrentMonth, r.oData.iCurrentDay, e, r.oData.iCurrentMinutes, r.oData.iCurrentSeconds, 0), null !== r.oData.dMaxValue && (r.oData.bTimeMode ? (a = r.oData.iCurrentMinutes, (e > r.oData.dMaxValue.getHours() || e === r.oData.dMaxValue.getHours() && a > r.oData.dMaxValue.getMinutes()) && b(r.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : t.getTime() > r.oData.dMaxValue.getTime() && b(r.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")), null !== r.oData.dMinValue && (r.oData.bTimeMode ? (a = r.oData.iCurrentMinutes, (e < r.oData.dMinValue.getHours() || e === r.oData.dMinValue.getHours() && a < r.oData.dMinValue.getMinutes()) && b(r.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : t.getTime() < r.oData.dMinValue.getTime() && b(r.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))))
            },
            setIsPopup: function(t) {
                var e = this;
                if (!e.settings.isInline)
                    if (e.settings.isPopup = t, "none" !== b(e.element).css("display") && e._hidePicker(0), e.settings.isPopup) b(e.element).addClass("dtpicker-mobile"), b(e.element).css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    });
                    else if (b(e.element).removeClass("dtpicker-mobile"), null !== e.oData.oInputElement) {
                    var a = b(e.oData.oInputElement).offset().top + b(e.oData.oInputElement).outerHeight(),
                        r = b(e.oData.oInputElement).offset().left,
                        n = b(e.oData.oInputElement).outerWidth();
                    b(e.element).css({
                        position: "absolute",
                        top: a,
                        left: r,
                        width: n,
                        height: "auto"
                    })
                }
            },
            _compareDates: function(t, e) {
                var a = ((t = new Date(t.getDate(), t.getMonth(), t.getFullYear(), 0, 0, 0, 0)).getTime() - e.getTime()) / 864e5;
                return 0 == a ? a : a / Math.abs(a)
            },
            _compareTime: function(t, e) {
                var a = 0;
                return t.getHours() === e.getHours() && t.getMinutes() === e.getMinutes() ? a = 1 : t.getHours() < e.getHours() ? a = 2 : t.getHours() > e.getHours() ? a = 3 : t.getHours() === e.getHours() && (t.getMinutes() < e.getMinutes() ? a = 2 : t.getMinutes() > e.getMinutes() && (a = 3)), a
            },
            _compareDateTime: function(t, e) {
                var a = (t.getTime() - e.getTime()) / 6e4;
                return 0 == a ? a : a / Math.abs(a)
            },
            _determineMeridiemFromHourAndMinutes: function(t, e) {
                return 12 < t || 12 === t && 0 <= e ? "PM" : "AM"
            },
            setLanguage: function(t) {
                var e = this;
                return e.settings = b.extend({}, b.DateTimePicker.defaults, b.DateTimePicker.i18n[t], e.options), e.settings.language = t, e._setDateFormatArray(), e._setTimeFormatArray(), e._setDateTimeFormatArray(), e
            }
        }
    });
/*jquery.lazy.js*/
;
(function(window, undefined) {
    "use strict";
    var $ = window.jQuery || window.Zepto,
        lazyInstanceId = 0,
        windowLoaded = false;
    $.fn.Lazy = $.fn.lazy = function(settings) {
        return new LazyPlugin(this, settings);
    };
    $.Lazy = $.lazy = function(names, elements, loader) {
        if ($.isFunction(elements)) {
            loader = elements;
            elements = [];
        }
        if (!$.isFunction(loader)) {
            return;
        }
        names = $.isArray(names) ? names : [names];
        elements = $.isArray(elements) ? elements : [elements];
        var config = LazyPlugin.prototype.config,
            forced = config._f || (config._f = {});
        for (var i = 0, l = names.length; i < l; i++) {
            if (config[names[i]] === undefined || $.isFunction(config[names[i]])) {
                config[names[i]] = loader;
            }
        }
        for (var c = 0, a = elements.length; c < a; c++) {
            forced[elements[c]] = names[0];
        }
    };

    function _executeLazy(instance, config, items, events, namespace) {
        var _awaitingAfterLoad = 0,
            _actualWidth = -1,
            _actualHeight = -1,
            _isRetinaDisplay = false,
            _afterLoad = 'afterLoad',
            _load = 'load',
            _error = 'error',
            _img = 'img',
            _src = 'src',
            _srcset = 'srcset',
            _sizes = 'sizes',
            _backgroundImage = 'background-image';

        function _initialize() {
            _isRetinaDisplay = window.devicePixelRatio > 1;
            items = _prepareItems(items);
            if (config.delay >= 0) {
                setTimeout(function() {
                    _lazyLoadItems(true);
                }, config.delay);
            }
            if (config.delay < 0 || config.combined) {
                events.e = _throttle(config.throttle, function(event) {
                    if (event.type === 'resize') {
                        _actualWidth = _actualHeight = -1;
                    }
                    _lazyLoadItems(event.all);
                });
                events.a = function(additionalItems) {
                    additionalItems = _prepareItems(additionalItems);
                    items.push.apply(items, additionalItems);
                };
                events.g = function() {
                    return (items = $(items).filter(function() {
                        return !$(this).data(config.loadedName);
                    }));
                };
                events.f = function(forcedItems) {
                    for (var i = 0; i < forcedItems.length; i++) {
                        var item = items.filter(function() {
                            return this === forcedItems[i];
                        });
                        if (item.length) {
                            _lazyLoadItems(false, item);
                        }
                    }
                };
                _lazyLoadItems();
                $(config.appendScroll).on('scroll.' + namespace + ' resize.' + namespace, events.e);
            }
        }

        function _prepareItems(items) {
            var defaultImage = config.defaultImage,
                placeholder = config.placeholder,
                imageBase = config.imageBase,
                srcsetAttribute = config.srcsetAttribute,
                loaderAttribute = config.loaderAttribute,
                forcedTags = config._f || {};
            items = $(items).filter(function() {
                var element = $(this),
                    tag = _getElementTagName(this);
                return !element.data(config.handledName) && (element.attr(config.attribute) || element.attr(srcsetAttribute) || element.attr(loaderAttribute) || forcedTags[tag] !== undefined);
            }).data('plugin_' + config.name, instance);
            for (var i = 0, l = items.length; i < l; i++) {
                var element = $(items[i]),
                    tag = _getElementTagName(items[i]),
                    elementImageBase = element.attr(config.imageBaseAttribute) || imageBase;
                if (tag === _img && elementImageBase && element.attr(srcsetAttribute)) {
                    element.attr(srcsetAttribute, _getCorrectedSrcSet(element.attr(srcsetAttribute), elementImageBase));
                }
                if (forcedTags[tag] !== undefined && !element.attr(loaderAttribute)) {
                    element.attr(loaderAttribute, forcedTags[tag]);
                }
                if (tag === _img && defaultImage && !element.attr(_src)) {
                    element.attr(_src, defaultImage);
                } else if (tag !== _img && placeholder && (!element.css(_backgroundImage) || element.css(_backgroundImage) === 'none')) {
                    element.css(_backgroundImage, "url('" + placeholder + "')");
                }
            }
            return items;
        }

        function _lazyLoadItems(allItems, forced) {
            if (!items.length) {
                if (config.autoDestroy) {
                    instance.destroy();
                }
                return;
            }
            var elements = forced || items,
                loadTriggered = false,
                imageBase = config.imageBase || '',
                srcsetAttribute = config.srcsetAttribute,
                handledName = config.handledName;
            for (var i = 0; i < elements.length; i++) {
                if (allItems || forced || _isInLoadableArea(elements[i])) {
                    var element = $(elements[i]),
                        tag = _getElementTagName(elements[i]),
                        attribute = element.attr(config.attribute),
                        elementImageBase = element.attr(config.imageBaseAttribute) || imageBase,
                        customLoader = element.attr(config.loaderAttribute);
                    if (!element.data(handledName) && (!config.visibleOnly || element.is(':visible')) && ((attribute || element.attr(srcsetAttribute)) && ((tag === _img && (elementImageBase + attribute !== element.attr(_src) || element.attr(srcsetAttribute) !== element.attr(_srcset))) || (tag !== _img && elementImageBase + attribute !== element.css(_backgroundImage))) || customLoader)) {
                        loadTriggered = true;
                        element.data(handledName, true);
                        _handleItem(element, tag, elementImageBase, customLoader);
                    }
                }
            }
            if (loadTriggered) {
                items = $(items).filter(function() {
                    return !$(this).data(handledName);
                });
            }
        }

        function _handleItem(element, tag, imageBase, customLoader) {
            ++_awaitingAfterLoad;
            var errorCallback = function() {
                _triggerCallback('onError', element);
                _reduceAwaiting();
                errorCallback = $.noop;
            };
            _triggerCallback('beforeLoad', element);
            var srcAttribute = config.attribute,
                srcsetAttribute = config.srcsetAttribute,
                sizesAttribute = config.sizesAttribute,
                retinaAttribute = config.retinaAttribute,
                removeAttribute = config.removeAttribute,
                loadedName = config.loadedName,
                elementRetina = element.attr(retinaAttribute);
            if (customLoader) {
                var loadCallback = function() {
                    if (removeAttribute) {
                        element.removeAttr(config.loaderAttribute);
                    }
                    element.data(loadedName, true);
                    _triggerCallback(_afterLoad, element);
                    setTimeout(_reduceAwaiting, 1);
                    loadCallback = $.noop;
                };
                element.off(_error).one(_error, errorCallback).one(_load, loadCallback);
                if (!_triggerCallback(customLoader, element, function(response) {
                        if (response) {
                            element.off(_load);
                            loadCallback();
                        } else {
                            element.off(_error);
                            errorCallback();
                        }
                    })) {
                    element.trigger(_error);
                }
            } else {
                var imageObj = $(new Image());
                imageObj.one(_error, errorCallback).one(_load, function() {
                    element.hide();
                    if (tag === _img) {
                        element.attr(_sizes, imageObj.attr(_sizes)).attr(_srcset, imageObj.attr(_srcset)).attr(_src, imageObj.attr(_src));
                    } else {
                        element.css(_backgroundImage, "url('" + imageObj.attr(_src) + "')");
                    }
                    element[config.effect](config.effectTime);
                    if (removeAttribute) {
                        element.removeAttr(srcAttribute + ' ' + srcsetAttribute + ' ' + retinaAttribute + ' ' + config.imageBaseAttribute);
                        if (sizesAttribute !== _sizes) {
                            element.removeAttr(sizesAttribute);
                        }
                    }
                    element.data(loadedName, true);
                    _triggerCallback(_afterLoad, element);
                    imageObj.remove();
                    _reduceAwaiting();
                });
                var imageSrc = (_isRetinaDisplay && elementRetina ? elementRetina : element.attr(srcAttribute)) || '';
                imageObj.attr(_sizes, element.attr(sizesAttribute)).attr(_srcset, element.attr(srcsetAttribute)).attr(_src, imageSrc ? imageBase + imageSrc : null);
                imageObj.complete && imageObj.trigger(_load);
            }
        }

        function _isInLoadableArea(element) {
            var elementBound = element.getBoundingClientRect(),
                direction = config.scrollDirection,
                threshold = config.threshold,
                vertical = ((_getActualHeight() + threshold) > elementBound.top) && (-threshold < elementBound.bottom),
                horizontal = ((_getActualWidth() + threshold) > elementBound.left) && (-threshold < elementBound.right);
            if (direction === 'vertical') {
                return vertical;
            } else if (direction === 'horizontal') {
                return horizontal;
            }
            return vertical && horizontal;
        }

        function _getActualWidth() {
            return _actualWidth >= 0 ? _actualWidth : (_actualWidth = $(window).width());
        }

        function _getActualHeight() {
            return _actualHeight >= 0 ? _actualHeight : (_actualHeight = $(window).height());
        }

        function _getElementTagName(element) {
            return element.tagName.toLowerCase();
        }

        function _getCorrectedSrcSet(srcset, imageBase) {
            if (imageBase) {
                var entries = srcset.split(',');
                srcset = '';
                for (var i = 0, l = entries.length; i < l; i++) {
                    srcset += imageBase + entries[i].trim() + (i !== l - 1 ? ',' : '');
                }
            }
            return srcset;
        }

        function _throttle(delay, callback) {
            var timeout, lastExecute = 0;
            return function(event, ignoreThrottle) {
                var elapsed = +new Date() - lastExecute;

                function run() {
                    lastExecute = +new Date();
                    callback.call(instance, event);
                }
                timeout && clearTimeout(timeout);
                if (elapsed > delay || !config.enableThrottle || ignoreThrottle) {
                    run();
                } else {
                    timeout = setTimeout(run, delay - elapsed);
                }
            };
        }

        function _reduceAwaiting() {
            --_awaitingAfterLoad;
            if (!items.length && !_awaitingAfterLoad) {
                _triggerCallback('onFinishedAll');
            }
        }

        function _triggerCallback(callback, element, args) {
            if ((callback = config[callback])) {
                callback.apply(instance, [].slice.call(arguments, 1));
                return true;
            }
            return false;
        }
        if (config.bind === 'event' || windowLoaded) {
            _initialize();
        } else {
            $(window).on(_load + '.' + namespace, _initialize);
        }
    }

    function LazyPlugin(elements, settings) {
        var _instance = this,
            _config = $.extend({}, _instance.config, settings),
            _events = {},
            _namespace = _config.name + '-' + (++lazyInstanceId);
        _instance.config = function(entryName, value) {
            if (value === undefined) {
                return _config[entryName];
            }
            _config[entryName] = value;
            return _instance;
        };
        _instance.addItems = function(items) {
            _events.a && _events.a($.type(items) === 'string' ? $(items) : items);
            return _instance;
        };
        _instance.getItems = function() {
            return _events.g ? _events.g() : {};
        };
        _instance.update = function(useThrottle) {
            _events.e && _events.e({}, !useThrottle);
            return _instance;
        };
        _instance.force = function(items) {
            _events.f && _events.f($.type(items) === 'string' ? $(items) : items);
            return _instance;
        };
        _instance.loadAll = function() {
            _events.e && _events.e({
                all: true
            }, true);
            return _instance;
        };
        _instance.destroy = function() {
            $(_config.appendScroll).off('.' + _namespace, _events.e);
            $(window).off('.' + _namespace);
            _events = {};
            return undefined;
        };
        _executeLazy(_instance, _config, elements, _events, _namespace);
        return _config.chainable ? elements : _instance;
    }
    LazyPlugin.prototype.config = {
        name: 'lazy',
        chainable: true,
        autoDestroy: true,
        bind: 'load',
        threshold: 500,
        visibleOnly: false,
        appendScroll: window,
        scrollDirection: 'both',
        imageBase: null,
        defaultImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
        placeholder: null,
        delay: -1,
        combined: false,
        attribute: 'data-src',
        srcsetAttribute: 'data-srcset',
        sizesAttribute: 'data-sizes',
        retinaAttribute: 'data-retina',
        loaderAttribute: 'data-loader',
        imageBaseAttribute: 'data-imagebase',
        removeAttribute: true,
        handledName: 'handled',
        loadedName: 'loaded',
        effect: 'show',
        effectTime: 0,
        enableThrottle: true,
        throttle: 250,
        beforeLoad: undefined,
        afterLoad: undefined,
        onError: undefined,
        onFinishedAll: undefined
    };
    $(window).on('load', function() {
        windowLoaded = true;
    });
})(window);
/*jquery-confirm.min.js*/

if (typeof jQuery === "undefined") {
    throw new Error("jquery-confirm requires jQuery");
}
var jconfirm, Jconfirm;
(function($, window) {
    $.fn.confirm = function(options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        $(this).each(function() {
            var $this = $(this);
            if ($this.attr("jc-attached")) {
                console.warn("jConfirm has already been attached to this element ", $this[0]);
                return;
            }
            $this.on("click", function(e) {
                e.preventDefault();
                var jcOption = $.extend({}, options);
                if ($this.attr("data-title")) {
                    jcOption.title = $this.attr("data-title");
                }
                if ($this.attr("data-content")) {
                    jcOption.content = $this.attr("data-content");
                }
                if (typeof jcOption.buttons == "undefined") {
                    jcOption.buttons = {};
                }
                jcOption["$target"] = $this;
                if ($this.attr("href") && Object.keys(jcOption.buttons).length == 0) {
                    var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
                    var firstBtn = Object.keys(buttons)[0];
                    jcOption.buttons = buttons;
                    jcOption.buttons[firstBtn].action = function() {
                        location.href = $this.attr("href");
                    };
                }
                jcOption.closeIcon = false;
                var instance = $.confirm(jcOption);
            });
            $this.attr("jc-attached", true);
        });
        return $(this);
    };
    $.confirm = function(options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        var putDefaultButtons = !(options.buttons == false);
        if (typeof options.buttons != "object") {
            options.buttons = {};
        }
        if (Object.keys(options.buttons).length == 0 && putDefaultButtons) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            options.buttons = buttons;
        }
        return jconfirm(options);
    };
    $.alert = function(options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        var putDefaultButtons = !(options.buttons == false);
        if (typeof options.buttons != "object") {
            options.buttons = {};
        }
        if (Object.keys(options.buttons).length == 0 && putDefaultButtons) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            var firstBtn = Object.keys(buttons)[0];
            options.buttons[firstBtn] = buttons[firstBtn];
        }
        return jconfirm(options);
    };
    $.dialog = function(options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false,
                closeIcon: function() {}
            };
        }
        options.buttons = {};
        if (typeof options.closeIcon == "undefined") {
            options.closeIcon = function() {};
        }
        options.confirmKeys = [13];
        return jconfirm(options);
    };
    jconfirm = function(options) {
        if (typeof options === "undefined") {
            options = {};
        }
        var pluginOptions = $.extend(true, {}, jconfirm.pluginDefaults);
        if (jconfirm.defaults) {
            pluginOptions = $.extend(true, pluginOptions, jconfirm.defaults);
        }
        pluginOptions = $.extend(true, {}, pluginOptions, options);
        var instance = new Jconfirm(pluginOptions);
        jconfirm.instances.push(instance);
        return instance;
    };
    Jconfirm = function(options) {
        $.extend(this, options);
        this._init();
    };
    Jconfirm.prototype = {
        _init: function() {
            var that = this;
            if (!jconfirm.instances.length) {
                jconfirm.lastFocused = $("body").find(":focus");
            }
            this._id = Math.round(Math.random() * 99999);
            this.contentParsed = $(document.createElement("div"));
            if (!this.lazyOpen) {
                setTimeout(function() {
                    that.open();
                }, 0);
            }
        },
        _buildHTML: function() {
            var that = this;
            this._parseAnimation(this.animation, "o");
            this._parseAnimation(this.closeAnimation, "c");
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);
            this._parseType(this.type);
            var template = $(this.template);
            template.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);
            if (this.typeAnimated) {
                template.find(".jconfirm-box").addClass("jconfirm-type-animated");
            }
            if (this.useBootstrap) {
                template.find(".jc-bs3-row").addClass(this.bootstrapClasses.row);
                template.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center");
                template.find(".jconfirm-box-container").addClass(this.columnClassParsed);
                if (this.containerFluid) {
                    template.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid);
                } else {
                    template.find(".jc-bs3-container").addClass(this.bootstrapClasses.container);
                }
            } else {
                template.find(".jconfirm-box").css("width", this.boxWidth);
            }
            if (this.titleClass) {
                template.find(".jconfirm-title-c").addClass(this.titleClass);
            }
            template.addClass(this.themeParsed);
            var ariaLabel = "jconfirm-box" + this._id;
            template.find(".jconfirm-box").attr("aria-labelledby", ariaLabel).attr("tabindex", -1);
            template.find(".jconfirm-content").attr("id", ariaLabel);
            if (this.bgOpacity !== null) {
                template.find(".jconfirm-bg").css("opacity", this.bgOpacity);
            }
            if (this.rtl) {
                template.addClass("jconfirm-rtl");
            }
            this.$el = template.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container");
            this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box");
            this.$jconfirmBg = this.$el.find(".jconfirm-bg");
            this.$title = this.$el.find(".jconfirm-title");
            this.$titleContainer = this.$el.find(".jconfirm-title-c");
            this.$content = this.$el.find("div.jconfirm-content");
            this.$contentPane = this.$el.find(".jconfirm-content-pane");
            this.$icon = this.$el.find(".jconfirm-icon-c");
            this.$closeIcon = this.$el.find(".jconfirm-closeIcon");
            this.$holder = this.$el.find(".jconfirm-holder");
            this.$btnc = this.$el.find(".jconfirm-buttons");
            this.$scrollPane = this.$el.find(".jconfirm-scrollpane");
            that.setStartingPoint();
            this._contentReady = $.Deferred();
            this._modalReady = $.Deferred();
            this.$holder.css({
                "padding-top": this.offsetTop,
                "padding-bottom": this.offsetBottom,
            });
            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();
            this.initDraggable();
            if (this.isAjax) {
                this.showLoading(false);
            }
            $.when(this._contentReady, this._modalReady).then(function() {
                if (that.isAjaxLoading) {
                    setTimeout(function() {
                        that.isAjaxLoading = false;
                        that.setContent();
                        that.setTitle();
                        that.setIcon();
                        setTimeout(function() {
                            that.hideLoading(false);
                            that._updateContentMaxHeight();
                        }, 100);
                        if (typeof that.onContentReady === "function") {
                            that.onContentReady();
                        }
                    }, 50);
                } else {
                    that._updateContentMaxHeight();
                    that.setTitle();
                    that.setIcon();
                    if (typeof that.onContentReady === "function") {
                        that.onContentReady();
                    }
                }
                if (that.autoClose) {
                    that._startCountDown();
                }
            });
            this._watchContent();
            if (this.animation === "none") {
                this.animationSpeed = 1;
                this.animationBounce = 1;
            }
            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
        },
        _typePrefix: "jconfirm-type-",
        typeParsed: "",
        _parseType: function(type) {
            this.typeParsed = this._typePrefix + type;
        },
        setType: function(type) {
            var oldClass = this.typeParsed;
            this._parseType(type);
            this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
        },
        themeParsed: "",
        _themePrefix: "jconfirm-",
        setTheme: function(theme) {
            var previous = this.theme;
            this.theme = theme || this.theme;
            this._parseTheme(this.theme);
            if (previous) {
                this.$el.removeClass(previous);
            }
            this.$el.addClass(this.themeParsed);
            this.theme = theme;
        },
        _parseTheme: function(theme) {
            var that = this;
            theme = theme.split(",");
            $.each(theme, function(k, a) {
                if (a.indexOf(that._themePrefix) === -1) {
                    theme[k] = that._themePrefix + $.trim(a);
                }
            });
            this.themeParsed = theme.join(" ").toLowerCase();
        },
        backgroundDismissAnimationParsed: "",
        _bgDismissPrefix: "jconfirm-hilight-",
        _parseBgDismissAnimation: function(bgDismissAnimation) {
            var animation = bgDismissAnimation.split(",");
            var that = this;
            $.each(animation, function(k, a) {
                if (a.indexOf(that._bgDismissPrefix) === -1) {
                    animation[k] = that._bgDismissPrefix + $.trim(a);
                }
            });
            this.backgroundDismissAnimationParsed = animation.join(" ").toLowerCase();
        },
        animationParsed: "",
        closeAnimationParsed: "",
        _animationPrefix: "jconfirm-animation-",
        setAnimation: function(animation) {
            this.animation = animation || this.animation;
            this._parseAnimation(this.animation, "o");
        },
        _parseAnimation: function(animation, which) {
            which = which || "o";
            var animations = animation.split(",");
            var that = this;
            $.each(animations, function(k, a) {
                if (a.indexOf(that._animationPrefix) === -1) {
                    animations[k] = that._animationPrefix + $.trim(a);
                }
            });
            var a_string = animations.join(" ").toLowerCase();
            if (which === "o") {
                this.animationParsed = a_string;
            } else {
                this.closeAnimationParsed = a_string;
            }
            return a_string;
        },
        setCloseAnimation: function(closeAnimation) {
            this.closeAnimation = closeAnimation || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, "c");
        },
        setAnimationSpeed: function(speed) {
            this.animationSpeed = speed || this.animationSpeed;
        },
        columnClassParsed: "",
        setColumnClass: function(colClass) {
            if (!this.useBootstrap) {
                console.warn("cannot set columnClass, useBootstrap is set to false");
                return;
            }
            this.columnClass = colClass || this.columnClass;
            this._parseColumnClass(this.columnClass);
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
        },
        _updateContentMaxHeight: function() {
            var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                "max-height": height + "px"
            });
        },
        setBoxWidth: function(width) {
            if (this.useBootstrap) {
                console.warn("cannot set boxWidth, useBootstrap is set to true");
                return;
            }
            this.boxWidth = width;
            this.$jconfirmBox.css("width", width);
        },
        _parseColumnClass: function(colClass) {
            colClass = colClass.toLowerCase();
            var p;
            switch (colClass) {
                case "xl":
                case "xlarge":
                    p = "col-md-12";
                    break;
                case "l":
                case "large":
                    p = "col-md-8 col-md-offset-2";
                    break;
                case "m":
                case "medium":
                    p = "col-md-6 col-md-offset-3";
                    break;
                case "s":
                case "small":
                    p = "col-md-4 col-md-offset-4";
                    break;
                case "xs":
                case "xsmall":
                    p = "col-md-2 col-md-offset-5";
                    break;
                default:
                    p = colClass;
            }
            this.columnClassParsed = p;
        },
        initDraggable: function() {
            var that = this;
            var $t = this.$titleContainer;
            this.resetDrag();
            if (this.draggable) {
                $t.on("mousedown", function(e) {
                    $t.addClass("jconfirm-hand");
                    that.mouseX = e.clientX;
                    that.mouseY = e.clientY;
                    that.isDrag = true;
                });
                $(window).on("mousemove." + this._id, function(e) {
                    if (that.isDrag) {
                        that.movingX = e.clientX - that.mouseX + that.initialX;
                        that.movingY = e.clientY - that.mouseY + that.initialY;
                        that.setDrag();
                    }
                });
                $(window).on("mouseup." + this._id, function() {
                    $t.removeClass("jconfirm-hand");
                    if (that.isDrag) {
                        that.isDrag = false;
                        that.initialX = that.movingX;
                        that.initialY = that.movingY;
                    }
                });
            }
        },
        resetDrag: function() {
            this.isDrag = false;
            this.initialX = 0;
            this.initialY = 0;
            this.movingX = 0;
            this.movingY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
        },
        setDrag: function() {
            if (!this.draggable) {
                return;
            }
            this.alignMiddle = false;
            var boxWidth = this.$jconfirmBox.outerWidth();
            var boxHeight = this.$jconfirmBox.outerHeight();
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var that = this;
            var dragUpdate = 1;
            if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
                if (that.dragWindowBorder) {
                    var leftDistance = (windowWidth / 2) - boxWidth / 2;
                    var topDistance = (windowHeight / 2) - boxHeight / 2;
                    topDistance -= that.dragWindowGap;
                    leftDistance -= that.dragWindowGap;
                    if (leftDistance + that.movingX < 0) {
                        that.movingX = -leftDistance;
                    } else {
                        if (leftDistance - that.movingX < 0) {
                            that.movingX = leftDistance;
                        }
                    }
                    if (topDistance + that.movingY < 0) {
                        that.movingY = -topDistance;
                    } else {
                        if (topDistance - that.movingY < 0) {
                            that.movingY = topDistance;
                        }
                    }
                }
                that.$jconfirmBoxContainer.css("transform", "translate(" + that.movingX + "px, " + that.movingY + "px)");
            }
        },
        _scrollTop: function() {
            if (typeof pageYOffset !== "undefined") {
                return pageYOffset;
            } else {
                var B = document.body;
                var D = document.documentElement;
                D = (D.clientHeight) ? D : B;
                return D.scrollTop;
            }
        },
        _watchContent: function() {
            var that = this;
            if (this._timer) {
                clearInterval(this._timer);
            }
            var prevContentHeight = 0;
            this._timer = setInterval(function() {
                if (that.smoothContent) {
                    var contentHeight = that.$content.outerHeight() || 0;
                    if (contentHeight !== prevContentHeight) {
                        that.$contentPane.css({
                            height: contentHeight
                        }).scrollTop(0);
                        prevContentHeight = contentHeight;
                    }
                    var wh = $(window).height();
                    var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();
                    if (total < wh) {
                        that.$contentPane.addClass("no-scroll");
                    } else {
                        that.$contentPane.removeClass("no-scroll");
                    }
                }
            }, this.watchInterval);
        },
        _overflowClass: "jconfirm-overflow",
        _hilightAnimating: false,
        highlight: function() {
            this.hiLightModal();
        },
        hiLightModal: function() {
            var that = this;
            if (this._hilightAnimating) {
                return;
            }
            that.$body.addClass("hilight");
            var duration = parseFloat(that.$body.css("animation-duration")) || 2;
            this._hilightAnimating = true;
            setTimeout(function() {
                that._hilightAnimating = false;
                that.$body.removeClass("hilight");
            }, duration * 1000);
        },
        _bindEvents: function() {
            var that = this;
            this.boxClicked = false;
            this.$scrollPane.click(function(e) {
                if (!that.boxClicked) {
                    var buttonName = false;
                    var shouldClose = false;
                    var str;
                    if (typeof that.backgroundDismiss == "function") {
                        str = that.backgroundDismiss();
                    } else {
                        str = that.backgroundDismiss;
                    }
                    if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
                        buttonName = str;
                        shouldClose = false;
                    } else {
                        if (typeof str == "undefined" || !!(str) == true) {
                            shouldClose = true;
                        } else {
                            shouldClose = false;
                        }
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    } else {
                        that.hiLightModal();
                    }
                }
                that.boxClicked = false;
            });
            this.$jconfirmBox.click(function(e) {
                that.boxClicked = true;
            });
            var isKeyDown = false;
            $(window).on("jcKeyDown." + that._id, function(e) {
                if (!isKeyDown) {
                    isKeyDown = true;
                }
            });
            $(window).on("keyup." + that._id, function(e) {
                if (isKeyDown) {
                    that.reactOnKey(e);
                    isKeyDown = false;
                }
            });
            $(window).on("resize." + this._id, function() {
                that._updateContentMaxHeight();
                setTimeout(function() {
                    that.resetDrag();
                }, 100);
            });
        },
        _cubic_bezier: "0.36, 0.55, 0.19",
        _getCSS: function(speed, bounce) {
            return {
                "-webkit-transition-duration": speed / 1000 + "s",
                "transition-duration": speed / 1000 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")",
                "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")"
            };
        },
        _setButtons: function() {
            var that = this;
            var total_buttons = 0;
            if (typeof this.buttons !== "object") {
                this.buttons = {};
            }
            $.each(this.buttons, function(key, button) {
                total_buttons += 1;
                if (typeof button === "function") {
                    that.buttons[key] = button = {
                        action: button
                    };
                }
                that.buttons[key].text = button.text || key;
                that.buttons[key].btnClass = button.btnClass || "btn-default";
                that.buttons[key].action = button.action || function() {};
                that.buttons[key].keys = button.keys || [];
                that.buttons[key].isHidden = button.isHidden || false;
                that.buttons[key].isDisabled = button.isDisabled || false;
                $.each(that.buttons[key].keys, function(i, a) {
                    that.buttons[key].keys[i] = a.toLowerCase();
                });
                var button_element = $('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop("disabled", that.buttons[key].isDisabled).css("display", that.buttons[key].isHidden ? "none" : "").click(function(e) {
                    e.preventDefault();
                    var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
                    that.onAction.apply(that, [key, that.buttons[key]]);
                    that._stopCountDown();
                    if (typeof res === "undefined" || res) {
                        that.close();
                    }
                });
                that.buttons[key].el = button_element;
                that.buttons[key].setText = function(text) {
                    button_element.html(text);
                };
                that.buttons[key].addClass = function(className) {
                    button_element.addClass(className);
                };
                that.buttons[key].removeClass = function(className) {
                    button_element.removeClass(className);
                };
                that.buttons[key].disable = function() {
                    that.buttons[key].isDisabled = true;
                    button_element.prop("disabled", true);
                };
                that.buttons[key].enable = function() {
                    that.buttons[key].isDisabled = false;
                    button_element.prop("disabled", false);
                };
                that.buttons[key].show = function() {
                    that.buttons[key].isHidden = false;
                    button_element.css("display", "");
                };
                that.buttons[key].hide = function() {
                    that.buttons[key].isHidden = true;
                    button_element.css("display", "none");
                };
                that["$_" + key] = that["$$" + key] = button_element;
                that.$btnc.append(button_element);
            });
            if (total_buttons === 0) {
                this.$btnc.hide();
            }
            if (this.closeIcon === null && total_buttons === 0) {
                this.closeIcon = true;
            }
            if (this.closeIcon) {
                if (this.closeIconClass) {
                    var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(closeHtml);
                }
                this.$closeIcon.click(function(e) {
                    e.preventDefault();
                    var buttonName = false;
                    var shouldClose = false;
                    var str;
                    if (typeof that.closeIcon == "function") {
                        str = that.closeIcon();
                    } else {
                        str = that.closeIcon;
                    }
                    if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
                        buttonName = str;
                        shouldClose = false;
                    } else {
                        if (typeof str == "undefined" || !!(str) == true) {
                            shouldClose = true;
                        } else {
                            shouldClose = false;
                        }
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    }
                });
                this.$closeIcon.show();
            } else {
                this.$closeIcon.hide();
            }
        },
        setTitle: function(string, force) {
            force = force || false;
            if (typeof string !== "undefined") {
                if (typeof string == "string") {
                    this.title = string;
                } else {
                    if (typeof string == "function") {
                        if (typeof string.promise == "function") {
                            console.error("Promise was returned from title function, this is not supported.");
                        }
                        var response = string();
                        if (typeof response == "string") {
                            this.title = response;
                        } else {
                            this.title = false;
                        }
                    } else {
                        this.title = false;
                    }
                }
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$title.html(this.title || "");
            this.updateTitleContainer();
        },
        setIcon: function(iconClass, force) {
            force = force || false;
            if (typeof iconClass !== "undefined") {
                if (typeof iconClass == "string") {
                    this.icon = iconClass;
                } else {
                    if (typeof iconClass === "function") {
                        var response = iconClass();
                        if (typeof response == "string") {
                            this.icon = response;
                        } else {
                            this.icon = false;
                        }
                    } else {
                        this.icon = false;
                    }
                }
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : "");
            this.updateTitleContainer();
        },
        updateTitleContainer: function() {
            if (!this.title && !this.icon) {
                this.$titleContainer.hide();
            } else {
                this.$titleContainer.show();
            }
        },
        setContentPrepend: function(content, force) {
            if (!content) {
                return;
            }
            this.contentParsed.prepend(content);
        },
        setContentAppend: function(content) {
            if (!content) {
                return;
            }
            this.contentParsed.append(content);
        },
        setContent: function(content, force) {
            force = !!force;
            var that = this;
            if (content) {
                this.contentParsed.html("").append(content);
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$content.html("");
            this.$content.append(this.contentParsed);
            setTimeout(function() {
                that.$body.find("input[autofocus]:visible:first").focus();
            }, 100);
        },
        loadingSpinner: false,
        showLoading: function(disableButtons) {
            this.loadingSpinner = true;
            this.$jconfirmBox.addClass("loading");
            if (disableButtons) {
                this.$btnc.find("button").prop("disabled", true);
            }
        },
        hideLoading: function(enableButtons) {
            this.loadingSpinner = false;
            this.$jconfirmBox.removeClass("loading");
            if (enableButtons) {
                this.$btnc.find("button").prop("disabled", false);
            }
        },
        ajaxResponse: false,
        contentParsed: "",
        isAjax: false,
        isAjaxLoading: false,
        _parseContent: function() {
            var that = this;
            var e = "&nbsp;";
            if (typeof this.content == "function") {
                var res = this.content.apply(this);
                if (typeof res == "string") {
                    this.content = res;
                } else {
                    if (typeof res == "object" && typeof res.always == "function") {
                        this.isAjax = true;
                        this.isAjaxLoading = true;
                        res.always(function(data, status, xhr) {
                            that.ajaxResponse = {
                                data: data,
                                status: status,
                                xhr: xhr
                            };
                            that._contentReady.resolve(data, status, xhr);
                            if (typeof that.contentLoaded == "function") {
                                that.contentLoaded(data, status, xhr);
                            }
                        });
                        this.content = e;
                    } else {
                        this.content = e;
                    }
                }
            }
            if (typeof this.content == "string" && this.content.substr(0, 4).toLowerCase() === "url:") {
                this.isAjax = true;
                this.isAjaxLoading = true;
                var u = this.content.substring(4, this.content.length);
                $.get(u).done(function(html) {
                    that.contentParsed.html(html);
                }).always(function(data, status, xhr) {
                    that.ajaxResponse = {
                        data: data,
                        status: status,
                        xhr: xhr
                    };
                    that._contentReady.resolve(data, status, xhr);
                    if (typeof that.contentLoaded == "function") {
                        that.contentLoaded(data, status, xhr);
                    }
                });
            }
            if (!this.content) {
                this.content = e;
            }
            if (!this.isAjax) {
                this.contentParsed.html(this.content);
                this.setContent();
                that._contentReady.resolve();
            }
        },
        _stopCountDown: function() {
            clearInterval(this.autoCloseInterval);
            if (this.$cd) {
                this.$cd.remove();
            }
        },
        _startCountDown: function() {
            var that = this;
            var opt = this.autoClose.split("|");
            if (opt.length !== 2) {
                console.error("Invalid option for autoClose. example 'close|10000'");
                return false;
            }
            var button_key = opt[0];
            var time = parseInt(opt[1]);
            if (typeof this.buttons[button_key] === "undefined") {
                console.error("Invalid button key '" + button_key + "' for autoClose");
                return false;
            }
            var seconds = Math.ceil(time / 1000);
            this.$cd = $('<span class="countdown"> (' + seconds + ")</span>").appendTo(this["$_" + button_key]);
            this.autoCloseInterval = setInterval(function() {
                that.$cd.html(" (" + (seconds -= 1) + ") ");
                if (seconds <= 0) {
                    that["$$" + button_key].trigger("click");
                    that._stopCountDown();
                }
            }, 1000);
        },
        _getKey: function(key) {
            switch (key) {
                case 192:
                    return "tilde";
                case 13:
                    return "enter";
                case 16:
                    return "shift";
                case 9:
                    return "tab";
                case 20:
                    return "capslock";
                case 17:
                    return "ctrl";
                case 91:
                    return "win";
                case 18:
                    return "alt";
                case 27:
                    return "esc";
                case 32:
                    return "space";
            }
            var initial = String.fromCharCode(key);
            if (/^[A-z0-9]+$/.test(initial)) {
                return initial.toLowerCase();
            } else {
                return false;
            }
        },
        reactOnKey: function(e) {
            var that = this;
            var a = $(".jconfirm");
            if (a.eq(a.length - 1)[0] !== this.$el[0]) {
                return false;
            }
            var key = e.which;
            if (this.$content.find(":input").is(":focus") && /13|32/.test(key)) {
                return false;
            }
            var keyChar = this._getKey(key);
            if (keyChar === "esc" && this.escapeKey) {
                if (this.escapeKey === true) {
                    this.$scrollPane.trigger("click");
                } else {
                    if (typeof this.escapeKey === "string" || typeof this.escapeKey === "function") {
                        var buttonKey;
                        if (typeof this.escapeKey === "function") {
                            buttonKey = this.escapeKey();
                        } else {
                            buttonKey = this.escapeKey;
                        }
                        if (buttonKey) {
                            if (typeof this.buttons[buttonKey] === "undefined") {
                                console.warn("Invalid escapeKey, no buttons found with key " + buttonKey);
                            } else {
                                this["$_" + buttonKey].trigger("click");
                            }
                        }
                    }
                }
            }
            $.each(this.buttons, function(key, button) {
                if (button.keys.indexOf(keyChar) != -1) {
                    that["$_" + key].trigger("click");
                }
            });
        },
        setDialogCenter: function() {
            console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");
        },
        _unwatchContent: function() {
            clearInterval(this._timer);
        },
        close: function(onClosePayload) {
            var that = this;
            if (typeof this.onClose === "function") {
                this.onClose(onClosePayload);
            }
            this._unwatchContent();
            $(window).unbind("resize." + this._id);
            $(window).unbind("keyup." + this._id);
            $(window).unbind("jcKeyDown." + this._id);
            if (this.draggable) {
                $(window).unbind("mousemove." + this._id);
                $(window).unbind("mouseup." + this._id);
                this.$titleContainer.unbind("mousedown");
            }
            that.$el.removeClass(that.loadedClass);
            $("body").removeClass("jconfirm-no-scroll-" + that._id);
            that.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");
            setTimeout(function() {
                that.$body.addClass(that.closeAnimationParsed);
                that.$jconfirmBg.addClass("jconfirm-bg-h");
                var closeTimer = (that.closeAnimation === "none") ? 1 : that.animationSpeed;
                setTimeout(function() {
                    that.$el.remove();
                    var l = jconfirm.instances;
                    var i = jconfirm.instances.length - 1;
                    for (i; i >= 0; i--) {
                        if (jconfirm.instances[i]._id === that._id) {
                            jconfirm.instances.splice(i, 1);
                        }
                    }
                    if (!jconfirm.instances.length) {
                        if (that.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && $.contains(document, jconfirm.lastFocused[0])) {
                            var $lf = jconfirm.lastFocused;
                            if (that.scrollToPreviousElementAnimate) {
                                var st = $(window).scrollTop();
                                var ot = jconfirm.lastFocused.offset().top;
                                var wh = $(window).height();
                                if (!(ot > st && ot < (st + wh))) {
                                    var scrollTo = (ot - Math.round((wh / 3)));
                                    $("html, body").animate({
                                        scrollTop: scrollTo
                                    }, that.animationSpeed, "swing", function() {
                                        $lf.focus();
                                    });
                                } else {
                                    $lf.focus();
                                }
                            } else {
                                $lf.focus();
                            }
                            jconfirm.lastFocused = false;
                        }
                    }
                    if (typeof that.onDestroy === "function") {
                        that.onDestroy();
                    }
                }, closeTimer * 0.4);
            }, 50);
            return true;
        },
        open: function() {
            if (this.isOpen()) {
                return false;
            }
            this._buildHTML();
            this._bindEvents();
            this._open();
            return true;
        },
        setStartingPoint: function() {
            var el = false;
            if (this.animateFromElement !== true && this.animateFromElement) {
                el = this.animateFromElement;
                jconfirm.lastClicked = false;
            } else {
                if (jconfirm.lastClicked && this.animateFromElement === true) {
                    el = jconfirm.lastClicked;
                    jconfirm.lastClicked = false;
                } else {
                    return false;
                }
            }
            if (!el) {
                return false;
            }
            var offset = el.offset();
            var iTop = el.outerHeight() / 2;
            var iLeft = el.outerWidth() / 2;
            iTop -= this.$jconfirmBox.outerHeight() / 2;
            iLeft -= this.$jconfirmBox.outerWidth() / 2;
            var sourceTop = offset.top + iTop;
            sourceTop = sourceTop - this._scrollTop();
            var sourceLeft = offset.left + iLeft;
            var wh = $(window).height() / 2;
            var ww = $(window).width() / 2;
            var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
            var targetW = ww - this.$jconfirmBox.outerWidth() / 2;
            sourceTop -= targetH;
            sourceLeft -= targetW;
            if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww) {
                return false;
            }
            this.$jconfirmBoxContainer.css("transform", "translate(" + sourceLeft + "px, " + sourceTop + "px)");
        },
        _open: function() {
            var that = this;
            if (typeof that.onOpenBefore === "function") {
                that.onOpenBefore();
            }
            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass("jconfirm-bg-h");
            this.$body.focus();
            that.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
            setTimeout(function() {
                that.$body.css(that._getCSS(that.animationSpeed, 1));
                that.$body.css({
                    "transition-property": that.$body.css("transition-property") + ", margin"
                });
                that.$jconfirmBoxContainer.addClass("jconfirm-no-transition");
                that._modalReady.resolve();
                if (typeof that.onOpen === "function") {
                    that.onOpen();
                }
                that.$el.addClass(that.loadedClass);
            }, this.animationSpeed);
        },
        loadedClass: "jconfirm-open",
        isClosed: function() {
            return !this.$el || this.$el.css("display") === "";
        },
        isOpen: function() {
            return !this.isClosed();
        },
        toggle: function() {
            if (!this.isOpen()) {
                this.open();
            } else {
                this.close();
            }
        }
    };
    jconfirm.instances = [];
    jconfirm.lastFocused = false;
    jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
        title: "Hello",
        titleClass: "",
        type: "default",
        typeAnimated: true,
        draggable: true,
        dragWindowGap: 15,
        dragWindowBorder: true,
        animateFromElement: true,
        alignMiddle: true,
        smoothContent: true,
        content: "Are you sure to continue?",
        buttons: {},
        defaultButtons: {
            ok: {
                action: function() {}
            },
            close: {
                action: function() {}
            }
        },
        contentLoaded: function() {},
        icon: "",
        lazyOpen: false,
        bgOpacity: null,
        theme: "light",
        animation: "scale",
        closeAnimation: "scale",
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: true,
        rtl: false,
        container: "body",
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: "shake",
        autoClose: false,
        closeIcon: null,
        closeIconClass: false,
        watchInterval: 100,
        columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
        boxWidth: "50%",
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        useBootstrap: true,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: "container",
            containerFluid: "container-fluid",
            row: "row"
        },
        onContentReady: function() {},
        onOpenBefore: function() {},
        onOpen: function() {},
        onClose: function() {},
        onDestroy: function() {},
        onAction: function() {}
    };
    var keyDown = false;
    $(window).on("keydown", function(e) {
        if (!keyDown) {
            var $target = $(e.target);
            var pass = false;
            if ($target.closest(".jconfirm-box").length) {
                pass = true;
            }
            if (pass) {
                $(window).trigger("jcKeyDown");
            }
            keyDown = true;
        }
    });
    $(window).on("keyup", function() {
        keyDown = false;
    });
    jconfirm.lastClicked = false;
    $(document).on("mousedown", "button, a", function() {
        jconfirm.lastClicked = $(this);
    });
})(jQuery, window);
/*jquery.validate_vi.js*/

(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return;
            }
            var validator = $.data(this[0], 'validator');
            if (validator) {
                return validator;
            }
            validator = new $.validator(options, this[0]);
            $.data(this[0], 'validator', validator);
            if (validator.settings.onsubmit) {
                this.find("input, button").filter(".cancel").click(function() {
                    validator.cancelSubmit = true;
                });
                if (validator.settings.submitHandler) {
                    this.find("input, button").filter(":submit").click(function() {
                        validator.submitButton = this;
                    });
                }
                this.submit(function(event) {
                    if (validator.settings.debug)
                        event.preventDefault();

                    function handle() {
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
                            }
                            validator.settings.submitHandler.call(validator, validator.currentForm);
                            if (validator.submitButton) {
                                hidden.remove();
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            if ($(this[0]).is('form')) {
                return this.validate().form();
            } else {
                var valid = true;
                var validator = $(this[0].form).validate();
                this.each(function() {
                    valid &= validator.element(this);
                });
                return valid;
            }
        },
        removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) {
                result[value] = $element.attr(value);
                $element.removeAttr(value);
            });
            return result;
        },
        rules: function(command, argument) {
            var element = this[0];
            if (command) {
                var settings = $.data(element.form, 'validator').settings;
                var staticRules = settings.rules;
                var existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        staticRules[element.name] = existingRules;
                        if (argument.messages)
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        var filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                        });
                        return filtered;
                }
            }
            var data = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(element), $.validator.classRules(element), $.validator.attributeRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                var param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
            }
            return data;
        }
    });
    $.extend($.expr[":"], {
        blank: function(a) {
            return !$.trim("" + a.value);
        },
        filled: function(a) {
            return !!$.trim("" + a.value);
        },
        unchecked: function(a) {
            return !a.checked;
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length == 1)
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor != Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: [],
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(element)).hide();
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element) {
                if (element.name in this.submitted || element == this.lastElement) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted)
                    this.element(element);
                else if (element.parentNode.name in this.submitted)
                    this.element(element.parentNode);
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === 'radio') {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === 'radio') {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "Không được để trống.",
            remote: "Please fix this field.",
            email: "Địa chỉ email không hợp lệ.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            dateDE: "Bitte geben Sie ein gültiges Datum ein.",
            number: "Vui lòng nhập số.",
            numberDE: "Bitte geben Sie eine Nummer ein.",
            digits: "Please enter only digits",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Vui lòng chọn đúng định dạng file cho phép.",
            maxlength: $.validator.format("Không được nhập quá {0} ký tự."),
            minlength: $.validator.format("Không được nhập it hơn {0} ký tự."),
            rangelength: $.validator.format("Vui lòng nhập trong khoảng từ {0} đến {1} ký tự."),
            range: $.validator.format("Vui lòng nhập giá trị trong khoảng {0} - {1}."),
            max: $.validator.format("Vui lòng nhập giá trị nhỏ hơn hoặc bằng {0}."),
            min: $.validator.format("Vui lòng nhập giá trị lớn hơn hoặc bằng {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {});
                $.each(this.settings.groups, function(key, value) {
                    $.each(value.split(/\s/), function(index, name) {
                        groups[name] = key;
                    });
                });
                var rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, "");
                    validator.settings[eventType] && validator.settings[eventType].call(validator, this[0]);
                }
                $(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate).validateDelegate(":radio, :checkbox, select, option", "click", delegate);
                if (this.settings.invalidHandler)
                    $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid())
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                element = this.clean(element);
                this.lastElement = element;
                this.prepareElement(element);
                this.currentElements = $(element);
                var result = this.check(element);
                if (result) {
                    delete this.invalid[element.name];
                } else {
                    this.invalid[element.name] = true;
                }
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) {
                        this.errorList.push({
                            message: errors[name],
                            element: this.findByName(name)[0]
                        });
                    }
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                if ($.fn.resetForm)
                    $(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass);
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0;
                for (var i in obj)
                    count++;
                return count;
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide();
            },
            valid: function() {
                return this.size() == 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name == lastActive.name;
                }).length == 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
                        return false;
                    rulesCache[this.name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            check: function(element) {
                element = this.clean(element);
                if (this.checkable(element)) {
                    element = this.findByName(element.name).not(this.settings.ignore)[0];
                }
                var rules = $(element).rules();
                var dependencyMismatch = false;
                for (var method in rules) {
                    var rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);
                        if (result == "dependency-mismatch") {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result == "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + element.id +
                            ", check the '" + rule.method + "' method", e);
                        throw e;
                    }
                }
                if (dependencyMismatch)
                    return;
                if (this.objectLength(rules))
                    this.successList.push(element);
                return true;
            },
            customMetaMessage: function(element, method) {
                if (!$.metadata)
                    return;
                var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
                return meta && meta.messages && meta.messages[method];
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor == String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined)
                        return arguments[i];
                }
                return undefined;
            },
            defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customMetaMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message == "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
                }
                this.errorList.push({
                    message: message,
                    element: element
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper)
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                return toToggle;
            },
            defaultShowErrors: function() {
                for (var i = 0; this.errorList[i]; i++) {
                    var error = this.errorList[i];
                    this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (var i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (var i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var label = this.errorsFor(element);
                if (label.length) {
                    label.removeClass().addClass(this.settings.errorClass);
                    label.attr("generated") && label.html(message);
                } else {
                    label = $("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(element),
                        generated: true
                    }).addClass(this.settings.errorClass).html(message || "");
                    if (this.settings.wrapper) {
                        label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (!this.labelContainer.append(label).length)
                        this.settings.errorPlacement ? this.settings.errorPlacement(label, $(element)) : label.insertAfter(element);
                }
                if (!message && this.settings.success) {
                    label.text("");
                    typeof this.settings.success == "string" ? label.addClass(this.settings.success) : this.settings.success(label);
                }
                this.toShow = this.toShow.add(label);
            },
            errorsFor: function(element) {
                var name = this.idOrName(element);
                return this.errors().filter(function() {
                    return $(this).attr('for') == name;
                });
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            checkable: function(element) {
                return /radio|checkbox/i.test(element.type);
            },
            findByName: function(name) {
                var form = this.currentForm;
                return $(document.getElementsByName(name)).map(function(index, element) {
                    return element.form == form && element.name == name && element || null;
                });
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        return $("option:selected", element).length;
                    case 'input':
                        if (this.checkable(element))
                            return this.findByName(element.name).filter(':checked').length;
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param, element) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0)
                    this.pendingRequest = 0;
                delete this.pending[element.name];
                if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            className.constructor == String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className);
        },
        classRules: function(element) {
            var rules = {};
            var classes = $(element).attr('class');
            classes && $.each(classes.split(' '), function() {
                if (this in $.validator.classRuleSettings) {
                    $.extend(rules, $.validator.classRuleSettings[this]);
                }
            });
            return rules;
        },
        attributeRules: function(element) {
            var rules = {};
            var $element = $(element);
            for (var method in $.validator.methods) {
                var value = $element.attr(method);
                if (value) {
                    rules[method] = value;
                }
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        metadataRules: function(element) {
            if (!$.metadata) return {};
            var meta = $.data(element.form, 'validator').settings.meta;
            return meta ? $(element).metadata()[meta] : $(element).metadata();
        },
        staticRules: function(element) {
            var rules = {};
            var validator = $.data(element.form, 'validator');
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
            });
            $.each(['minlength', 'maxlength', 'min', 'max'], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(['rangelength', 'range'], function() {
                if (rules[this]) {
                    rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min && rules.max) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength && rules.maxlength) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            if (rules.messages) {
                delete rules.messages;
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data == "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element))
                    return "dependency-mismatch";
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        var val = $(element).val();
                        return val && val.length > 0;
                    case 'input':
                        if (this.checkable(element))
                            return this.getLength(value, element) > 0;
                    default:
                        return $.trim(value).length > 0;
                }
            },
            remote: function(value, element, param) {
                if (this.optional(element))
                    return "dependency-mismatch";
                var previous = this.previousValue(element);
                if (!this.settings.messages[element.name])
                    this.settings.messages[element.name] = {};
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;
                param = typeof param == "string" && {
                    url: param
                } || param;
                if (this.pending[element.name]) {
                    return "pending";
                }
                if (previous.old === value) {
                    return previous.valid;
                }
                previous.old = value;
                var validator = this;
                this.startRequest(element);
                var data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    success: function(response) {
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        var valid = response === true;
                        if (valid) {
                            var submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.showErrors();
                        } else {
                            var errors = {};
                            var message = response || validator.defaultMessage(element, "remote");
                            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            },
            minlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) >= param;
            },
            maxlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) <= param;
            },
            rangelength: function(value, element, param) {
                var length = this.getLength($.trim(value), element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            email: function(value, element) {
                return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            creditcard: function(value, element) {
                if (this.optional(element))
                    return "dependency-mismatch";
                if (/[^0-9-]+/.test(value))
                    return false;
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false;
                value = value.replace(/\D/g, "");
                for (var n = value.length - 1; n >= 0; n--) {
                    var cDigit = value.charAt(n);
                    var nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9)
                            nDigit -= 9;
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }
                return (nCheck % 10) == 0;
            },
            accept: function(value, element, param) {
                param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
                return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
            },
            equalTo: function(value, element, param) {
                var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    $(element).valid();
                });
                return value == target.val();
            }
        }
    });
    $.format = $.validator.format;
})(jQuery);;
(function($) {
    var pendingRequests = {};
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode == "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        var ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode == "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                return (pendingRequests[port] = ajax.apply(this, arguments));
            }
            return ajax.apply(this, arguments);
        };
    }
})(jQuery);;
(function($) {
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
        $.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function(original, fix) {
            $.event.special[fix] = {
                setup: function() {
                    this.addEventListener(original, handler, true);
                },
                teardown: function() {
                    this.removeEventListener(original, handler, true);
                },
                handler: function(e) {
                    arguments[0] = $.event.fix(e);
                    arguments[0].type = fix;
                    return $.event.handle.apply(this, arguments);
                }
            };

            function handler(e) {
                e = $.event.fix(e);
                e.type = fix;
                return $.event.handle.call(this, e);
            }
        });
    };
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
})(jQuery);