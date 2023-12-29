/*! For license information please see gandi_ccw_mmo.c3bafdaf.js.LICENSE.txt */
"use strict";
(self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([[5825], {
    2717: (e,t,a)=>{
        function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            o(e)
        }
        function r(e, t) {
            return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        function n(e, t) {
            if (t && ("object" === o(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        a.r(t),
        a.d(t, {
            default: ()=>u
        });
        var i = a(1396)
          , c = i.Schema
          , M = i.type
          , l = a(6838)
          , d = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && r(e, t)
            }(M, e);
            var t, a, o, c = (a = M,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = s(a);
                if (o) {
                    var r = s(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return n(this, e)
            }
            );
            function M() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, M),
                (e = c.call(this)).players = new i.MapSchema,
                e
            }
            return t = M,
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }(c);
        M("number")(d.prototype, "onlineCount"),
        M("string")(d.prototype, "extra"),
        M({
            map: l
        })(d.prototype, "players");
        const u = d
    }
    ,
    6838: (e,t,a)=>{
        function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            o(e)
        }
        function r(e, t) {
            return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        function n(e, t) {
            if (t && ("object" === o(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        a.r(t),
        a.d(t, {
            default: ()=>d
        });
        var i = a(1396)
          , c = i.Schema
          , M = i.type
          , l = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && r(e, t)
            }(c, e);
            var t, a, o, i = (a = c,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = s(a);
                if (o) {
                    var r = s(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return n(this, e)
            }
            );
            function c() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                i.call(this)
            }
            return t = c,
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }(c);
        M("string")(l.prototype, "name"),
        M("number")(l.prototype, "x"),
        M("number")(l.prototype, "y"),
        M("string")(l.prototype, "sessionId"),
        M("string")(l.prototype, "uuid"),
        M("string")(l.prototype, "extra");
        const d = l
    }
    ,
    9898: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            default: ()=>W
        });
        var o = a(3058)
          , r = a(673)
          , n = a.n(r)
          , s = a(9122)
          , i = a.n(s)
          , c = a(3392)
          , M = a.n(c)
          , l = a(8611)
          , d = a(9576)
          , u = a(111);
        function m(e) {
            return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            m(e)
        }
        function C(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, o)
            }
            return a
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(a), !0).forEach((function(t) {
                    f(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function f(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e))
                    return y(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return y(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? y(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, o = new Array(t); a < t; a++)
                o[a] = e[a];
            return o
        }
        function p() {
            p = function() {
                return e
            }
            ;
            var e = {}
              , t = Object.prototype
              , a = t.hasOwnProperty
              , o = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
              , r = "function" == typeof Symbol ? Symbol : {}
              , n = r.iterator || "@@iterator"
              , s = r.asyncIterator || "@@asyncIterator"
              , i = r.toStringTag || "@@toStringTag";
            function c(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                c({}, "")
            } catch (e) {
                c = function(e, t, a) {
                    return e[t] = a
                }
            }
            function M(e, t, a, r) {
                var n = t && t.prototype instanceof u ? t : u
                  , s = Object.create(n.prototype)
                  , i = new b(r || []);
                return o(s, "_invoke", {
                    value: v(e, a, i)
                }),
                s
            }
            function l(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = M;
            var d = {};
            function u() {}
            function C() {}
            function h() {}
            var f = {};
            c(f, n, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , y = O && O(O(P([])));
            y && y !== t && a.call(y, n) && (f = y);
            var g = h.prototype = u.prototype = Object.create(f);
            function I(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    c(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function R(e, t) {
                function r(o, n, s, i) {
                    var c = l(e[o], e, n);
                    if ("throw" !== c.type) {
                        var M = c.arg
                          , d = M.value;
                        return d && "object" == m(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            r("next", e, s, i)
                        }
                        ), (function(e) {
                            r("throw", e, s, i)
                        }
                        )) : t.resolve(d).then((function(e) {
                            M.value = e,
                            s(M)
                        }
                        ), (function(e) {
                            return r("throw", e, s, i)
                        }
                        ))
                    }
                    i(c.arg)
                }
                var n;
                o(this, "_invoke", {
                    value: function(e, a) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, a, t, o)
                            }
                            ))
                        }
                        return n = n ? n.then(o, o) : o()
                    }
                })
            }
            function v(e, t, a) {
                var o = "suspendedStart";
                return function(r, n) {
                    if ("executing" === o)
                        throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === r)
                            throw n;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (a.method = r,
                    a.arg = n; ; ) {
                        var s = a.delegate;
                        if (s) {
                            var i = W(s, a);
                            if (i) {
                                if (i === d)
                                    continue;
                                return i
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === o)
                                throw o = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        o = "executing";
                        var c = l(e, t, a);
                        if ("normal" === c.type) {
                            if (o = a.done ? "completed" : "suspendedYield",
                            c.arg === d)
                                continue;
                            return {
                                value: c.arg,
                                done: a.done
                            }
                        }
                        "throw" === c.type && (o = "completed",
                        a.method = "throw",
                        a.arg = c.arg)
                    }
                }
            }
            function W(e, t) {
                var a = e.iterator[t.method];
                if (void 0 === a) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        W(e, t),
                        "throw" === t.method))
                            return d;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var o = l(a, e.iterator, t.arg);
                if ("throw" === o.type)
                    return t.method = "throw",
                    t.arg = o.arg,
                    t.delegate = null,
                    d;
                var r = o.arg;
                return r ? r.done ? (t[e.resultName] = r.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                d) : r : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                d)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function N(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function b(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function P(e) {
                if (e) {
                    var t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , r = function t() {
                            for (; ++o < e.length; )
                                if (a.call(e, o))
                                    return t.value = e[o],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: T
                }
            }
            function T() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return C.prototype = h,
            o(g, "constructor", {
                value: h,
                configurable: !0
            }),
            o(h, "constructor", {
                value: C,
                configurable: !0
            }),
            C.displayName = c(h, i, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === C || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h,
                c(e, i, "GeneratorFunction")),
                e.prototype = Object.create(g),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            I(R.prototype),
            c(R.prototype, s, (function() {
                return this
            }
            )),
            e.AsyncIterator = R,
            e.async = function(t, a, o, r, n) {
                void 0 === n && (n = Promise);
                var s = new R(M(t, a, o, r),n);
                return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next()
                }
                ))
            }
            ,
            I(g),
            c(g, i, "Generator"),
            c(g, n, (function() {
                return this
            }
            )),
            c(g, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(e) {
                var t = Object(e)
                  , a = [];
                for (var o in t)
                    a.push(o);
                return a.reverse(),
                function e() {
                    for (; a.length; ) {
                        var o = a.pop();
                        if (o in t)
                            return e.value = o,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            e.values = P,
            b.prototype = {
                constructor: b,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(N),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function o(a, o) {
                        return s.type = "throw",
                        s.arg = e,
                        t.next = a,
                        o && (t.method = "next",
                        t.arg = void 0),
                        !!o
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r]
                          , s = n.completion;
                        if ("root" === n.tryLoc)
                            return o("end");
                        if (n.tryLoc <= this.prev) {
                            var i = a.call(n, "catchLoc")
                              , c = a.call(n, "finallyLoc");
                            if (i && c) {
                                if (this.prev < n.catchLoc)
                                    return o(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return o(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc)
                                    return o(n.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return o(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var r = this.tryEntries[o];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = e,
                    s.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    d) : this.complete(s)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    d
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            N(a),
                            d
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var a = this.tryEntries[t];
                        if (a.tryLoc === e) {
                            var o = a.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                N(a)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: P(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = void 0),
                    d
                }
            },
            e
        }
        function g(e, t, a, o, r, n, s) {
            try {
                var i = e[n](s)
                  , c = i.value
            } catch (e) {
                return void a(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(o, r)
        }
        function I(e) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise((function(o, r) {
                    var n = e.apply(t, a);
                    function s(e) {
                        g(n, o, r, s, i, "next", e)
                    }
                    function i(e) {
                        g(n, o, r, s, i, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function R(e, t) {
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        a(2717);
        var v = function(e) {
            var t;
            return (null === (t = document.cookie.split(";").map((function(e) {
                return e.trim()
            }
            )).find((function(t) {
                return t.startsWith(e)
            }
            ))) || void 0 === t ? void 0 : t.split("=")[1]) || ""
        };
        const W = function() {
            function e(t) {
                var a = this;
                if (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.runtime = t,
                t.ccwAPI && t.ccwAPI.getOnlineExtensionsConfig) {
                    var r = t.ccwAPI.getOnlineExtensionsConfig().hosts;
                    r && r.mmoHost && (this.host = r.mmoHost)
                }
                this.host || (0,
                d.vU)("CCW MMO: host is not provided, stop init"),
                this.client = new o.Client(this.host),
                this.currentRoom = void 0,
                this.currentRoomType = void 0,
                this.currentRoomMultiJoinState = void 0,
                this.currentPlayer = {},
                this.allRooms = [],
                this.msgs = new Array,
                this.currentMsg = void 0,
                this.newMsg = !1,
                this.ccwUserNickname = "guest",
                this.ccwUserUUID = "not_found",
                this.ccwProjectUUID = "public",
                this.lag = -1,
                this._lastNewPlayerInfo = void 0,
                this._lastLeftPlayerInfo = void 0,
                this._lastStateChangedPlayerInfo = void 0;
                var n = function() {
                    void 0 === a.runtime.ccwAPI || void 0 === a.runtime.ccwAPI.getUserInfo ? (0,
                    d.ZK)("CCW API: not login return guest") : (a.runtime.ccwAPI.getUserInfo().then((function(e) {
                        e ? (a.ccwUserUUID = e.userId,
                        a.ccwUserNickname = e.userName) : (0,
                        d.ZK)("CCW API: user not found, return unknown")
                    }
                    )),
                    a.ccwProjectUUID = a.runtime.ccwAPI.getProjectUUID(),
                    a.ccwProjectUUID || console.error("CCW API: getProjectUUID return null", a.ccwProjectUUID))
                };
                this.runtime.on("CCWAPI_CHANGED", n),
                n(),
                this.runtime.on("PROJECT_STOP_ALL", (function() {
                    a.currentRoom && (a.disconnectRoom(),
                    a.msgs = new Array,
                    a.currentMsg = void 0)
                }
                )),
                this.formatMessage = t.getFormatMessage({
                    "zh-cn": {
                        "CCWMMO.test": "运行测试",
                        "CCWMMO.broadcast": "广播",
                        "CCWMMO.lobby": "游戏大厅",
                        "CCWMMO.matchRoom": "游戏室",
                        "CCWMMO.joinOrCreate": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的 [ROOM] 房间",
                        "CCWMMO.joinOrCreateAndWait": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的 [ROOM] 房间，并等待连接成功",
                        "CCWMMO.disconnectRoom": "断开",
                        "CCWMMO.reconnectRoom": "重连",
                        "CCWMMO.join_method.joinOrCreate": "加入或创建",
                        "CCWMMO.join_method.create": "创建",
                        "CCWMMO.roomLag": "延迟(毫秒)",
                        "CCWMMO.setRoomExtra": "设置当前房间的额外数据为: [EXTRA]",
                        "CCWMMO.dispatchRoomStateChanged": "（❌ 过时的方法）当房间额外数据变化时",
                        "CCWMMO.roomExtra": "当前房间的额外数据",
                        "CCWMMO.getRoomInfo": "我的 [TYPE]",
                        "CCWMMO.roomId": "房间 ID",
                        "CCWMMO.roomName": "房间类型",
                        "CCWMMO.roomSessionId": "会话 ID",
                        "CCWMMO.broadcastMsg": "广播消息类型 [TYPE] 并附带内容 [CONTENT]",
                        "CCWMMO.dispatchNewMessage": "（❌ 过时的方法）当新消息收到时",
                        "CCWMMO.getMessage": "（❌ 过时的方法）获取最新消息，并且 [ACTION]",
                        "CCWMMO.msgActionDelete": "删除",
                        "CCWMMO.msgActionKeep": "保留",
                        "CCWMMO.getLastMessageContent": "（❌ 过时的方法）当前消息的 [ACTION]",
                        "CCWMMO.msgInfoType": "类型",
                        "CCWMMO.msgInfoSender.SessionId": "发送者的会话 ID",
                        "CCWMMO.msgInfoSender.Name": "发送者的昵称",
                        "CCWMMO.msgInfoMessageContent": "消息内容",
                        "CCWMMO.getMsgCount": "（❌ 过时的方法）未处理消息数量",
                        "CCWMMO.getClientList": "当前在线的玩家列表，格式 [FORMAT]",
                        "CCWMMO.clientListFormat.default": "默认",
                        "CCWMMO.clientListFormat.JSON": "JSON",
                        "CCWMMO.getPlayerCount": "当前房间的玩家数量",
                        "CCWMMO.dispatchNewMessageWithParams": "当新消息收到时, 发送者的会话 Id = [sender] UUID = [senderUID] 名字 = [name] 消息类型 = [type] 消息内容 = [content]",
                        "CCWMMO.getPlayerInfo": "玩家[SESSION_ID]的[PLAYER_INFO]",
                        "CCWMMO.playerInfoSessionId": "会话 ID",
                        "CCWMMO.playerInfoName": "名字",
                        "CCWMMO.playerInfoX": "X",
                        "CCWMMO.playerInfoY": "Y",
                        "CCWMMO.playerInfoScale": "缩放",
                        "CCWMMO.playerInfoDirection": "方向",
                        "CCWMMO.playerInfoConnected": "在线?",
                        "CCWMMO.playerInfoUUID": "CCW UUID",
                        "CCWMMO.playerInfoShortID": "CCW ID(短)",
                        "CCWMMO.playerInfoExtra": "额外数据",
                        "CCWMMO.playerInfoJSON": "所有 JSON 数据",
                        "CCWMMO.setPlayerState": "设置 [PLAYER_INFO] 为 [VALUE]",
                        "CCWMMO.setPlayerStateXY": "设置 x:[X] y:[Y]",
                        "CCWMMO.dispatchNewPlayer": "(❌ 过时的方法）当新玩家连入时",
                        "CCWMMO.dispatchNewPlayerWithParams": "当新玩家连入时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.dispatchPlayerLeave": "(❌ 过时的方法）当玩家离开时",
                        "CCWMMO.dispatchPlayerLeaveWithParams": "当玩家离开时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.dispatchPlayerLeaveAbnormal": "当我连接被异常断开时",
                        "CCWMMO.getNewPlayerInfo": "最新进入房间的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getLastLeftPlayerInfo": "最近离开房间的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getLastStateChangedPlayerInfo": "最近改变状态的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getPlayerInfoFromIndex": "第[INDEX]个玩家的[PLAYER_INFO]",
                        "CCWMMO.dispatchPlayerChanged": "（❌ 过时的方法）当玩家状态变化时",
                        "CCWMMO.dispatchPlayerChangedWithParams": "当玩家状态变化时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.getThisClonePlayerInfo": "当前克隆体的玩家数据 [PLAYER_INFO]",
                        "CCWMMO.createCloneWithLastPlayerState": "以会话 ID [SESSION_ID] 为数据源克隆自己",
                        "CCWMMO.isThisAClone": "是克隆体?",
                        "CCWMMO.dispatchRoomEnter": "当我进入房间时",
                        "CCWMMO.thisCloneIsMe": "（❌ 过时的方法）当前克隆体是我自己?",
                        "CCWMMO.thisCloneIsMeOrNot": "当前克隆体[AMI]我自己?",
                        "CCWMMO.isMe.true": "是",
                        "CCWMMO.isMe.false": "不是",
                        "CCWMMO.isCloneSessionIdEqualTo": "当前克隆体的玩家会话 ID = [SESSION_ID]?",
                        "CCWMMO.dispatchLobbyRoomChanged": "（❌ 过时的方法）当大厅的房间发生变化时",
                        "CCWMMO.dispatchLobbyRoomChangedWithParams": "当大厅的房间 [TYPE]时, 变化的房间 = [rooms]",
                        "CCWMMO.lobbyChangedType.any": "发生任何变化",
                        "CCWMMO.lobbyChangedType.create": "有新游戏室被创建",
                        "CCWMMO.lobbyChangedType.removed": "有游戏室被移出",
                        "CCWMMO.joinMatchmaking": "以额外数据 [NAME] 加入游戏室，房间号 [ROOM_ID] 服务器 id 为 [GAME_ID]",
                        "CCWMMO.joinMatchmakingAndWait": "以额外数据 [NAME] 加入游戏室，房间号 [ROOM_ID] 服务器 id 为 [GAME_ID]，并等待连接成功",
                        "CCWMMO.setMatchRoomSize": "设置游戏室最大人数为 [SIZE]",
                        "CCWMMO.lockRoom": "锁定游戏室 [LOCK]",
                        "CCWMMO.dispatchMessageListChanged": "（❌ 过时的方法）当消息列表改变时",
                        "CCWMMO.fillMessageToList": "（❌ 过时的方法）填充消息的 [MESSAGE_INFO] 到列表 [LIST]",
                        "CCWMMO.deleteMessageAt": "（❌ 过时的方法）删除第 [INDEX] 条消息 (0 代表第一条)",
                        "CCWMMO.getLobbyRoomInfoAt": "得到大厅中第 [INDEX] 个游戏室的 [ROOM_INFO]",
                        "CCWMMO.getLobbyRoomCount": "大厅游戏室数量",
                        "CCWMMO.setMatchRoomToList": "填充游戏室的 [ROOM_INFO] 到列表 [LIST]",
                        "CCWMMO.getMatchRooms": "得到[CONDITION]的游戏室",
                        "CCWMMO.getMatchRoom.condition.all": "所有",
                        "CCWMMO.getMatchRoom.condition.locked": "锁定",
                        "CCWMMO.getMatchRoom.condition.unlocked": "未锁定",
                        "CCWMMO.roomClients": "玩家数",
                        "CCWMMO.roomMaxClients": "最大玩家数",
                        "CCWMMO.roomCreatedAt": "创建于",
                        "CCWMMO.roomMetadata": "元数据",
                        "CCWMMO.roomMetadataLocked": "锁了?",
                        "CCWMMO.roomMetadataExtra": "额外数据",
                        "CCWMMO.roomMetadataJSON": "所有 JSON 数据",
                        "CCWMMO.lock": "锁定",
                        "CCWMMO.unlock": "解锁",
                        "CCWMMO.enable": "允许",
                        "CCWMMO.disable": "不允许",
                        "CCWMMO.enableMultiLogin": "[MULTI_LOGIN] 一号多登 ",
                        "CCWMMO.joinOrCreateMatch": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的游戏室，最大人数为 [MAX_CLIENTS]",
                        "CCWMMO.joinOrCreateMatchAndWait": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的游戏室，最大人数为 [MAX_CLIENTS]，并等待连接成功",
                        "CCWMMO.div.Basic": "🚥 服务器连接和基础操作",
                        "CCWMMO.div.Lobby": "🗺 游戏大厅 (Lobby)",
                        "CCWMMO.div.Match": "🎾 游戏室 (Match Game)",
                        "CCWMMO.div.Message": "✉️ 消息相关",
                        "CCWMMO.div.Player": "😽 玩家相关",
                        "CCWMMO.div.PlayerEvent": "🙀 玩家事件相关",
                        "CCWMMO.div.Utils": "🛠 其他辅助工具",
                        "CCWMMO.roomStateChangeField.any": "任何",
                        "CCWMMO.roomStateChangeField.extra": "额外数据",
                        "CCWMMO.roomStateChangeField.onlineCount": "在线人数",
                        "CCWMMO.dispatchRoomStateChangedWithParams": "当房间的 [FIELD] 状态改变时, 会话 ID = [sessionId], 房间状态数据 = [roomState], 变化 = [changes]"
                    },
                    en: {
                        "CCWMMO.test": "Run test",
                        "CCWMMO.broadcast": "Broadcast",
                        "CCWMMO.joinOrCreate": "[METHOD] [ROOM] with server id [GAME_ID] and extra data [NAME]",
                        "CCWMMO.joinOrCreateAndWait": "[METHOD] [ROOM] with server id [GAME_ID] and extra data [NAME] and wait",
                        "CCWMMO.disconnectRoom": "Disconnect",
                        "CCWMMO.reconnectRoom": "Reconnect",
                        "CCWMMO.join_method.joinOrCreate": "Join or create",
                        "CCWMMO.join_method.create": "Create",
                        "CCWMMO.roomLag": "lag(in ms)",
                        "CCWMMO.setRoomExtra": "set extra data of current room to [EXTRA]",
                        "CCWMMO.dispatchRoomStateChanged": "(❌ DEPRECATED)when room state changed",
                        "CCWMMO.roomExtra": "extra data of current room",
                        "CCWMMO.getRoomInfo": "my [TYPE]",
                        "CCWMMO.roomId": "room ID",
                        "CCWMMO.roomName": "room type",
                        "CCWMMO.roomSessionId": "session ID",
                        "CCWMMO.broadcastMsg": "broadcast [TYPE] with content [CONTENT]",
                        "CCWMMO.dispatchNewMessage": "(❌ DEPRECATED)When new message received",
                        "CCWMMO.dispatchNewMessageWithParams": "When new message received, sender session Id = [sender] UUID = [senderUID] name = [name] msg type = [type] content = [content]",
                        "CCWMMO.getMessage": "(❌ DEPRECATED)last message and [ACTION]",
                        "CCWMMO.msgActionDelete": "delete",
                        "CCWMMO.msgActionKeep": "keep",
                        "CCWMMO.getLastMessageContent": "(❌ DEPRECATED)current messange's [ACTION]",
                        "CCWMMO.msgInfoType": "type",
                        "CCWMMO.msgInfoSender.SessionId": "sender's Session ID",
                        "CCWMMO.msgInfoSender.Name": "sender's name",
                        "CCWMMO.msgInfoMessageContent": "content",
                        "CCWMMO.getMsgCount": "(❌ DEPRECATED)message count",
                        "CCWMMO.getClientList": "list of online players in format [FORMAT]",
                        "CCWMMO.clientListFormat.default": "default",
                        "CCWMMO.clientListFormat.JSON": "JSON",
                        "CCWMMO.getPlayerCount": "online player count",
                        "CCWMMO.getPlayerInfo": "[PLAYER_INFO] of [SESSION_ID]",
                        "CCWMMO.playerInfoSessionId": "Session ID",
                        "CCWMMO.playerInfoName": "Name",
                        "CCWMMO.playerInfoX": "X",
                        "CCWMMO.playerInfoY": "Y",
                        "CCWMMO.playerInfoScale": "Scale",
                        "CCWMMO.playerInfoDirection": "Direction",
                        "CCWMMO.playerInfoConnected": "connected?",
                        "CCWMMO.playerInfoUUID": "CCW UUID",
                        "CCWMMO.playerInfoShortID": "CCW ID(short)",
                        "CCWMMO.playerInfoExtra": "Extra Data",
                        "CCWMMO.playerInfoJSON": "All data in JSON",
                        "CCWMMO.setPlayerState": "set [PLAYER_INFO] to [VALUE]",
                        "CCWMMO.setPlayerStateXY": "set x:[X] y:[Y]",
                        "CCWMMO.dispatchNewPlayer": "(❌ DEPRECATED) when new player connected",
                        "CCWMMO.dispatchNewPlayerWithParams": "When new player connected, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.dispatchPlayerLeave": "(❌ DEPRECATED) when player disconnected",
                        "CCWMMO.dispatchPlayerLeaveWithParams": "When player disconnected, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.dispatchPlayerLeaveAbnormal": "when I disconnected abnormally",
                        "CCWMMO.getNewPlayerInfo": "[PLAYER_INFO] of the last connected player",
                        "CCWMMO.getLastLeftPlayerInfo": "[PLAYER_INFO] of the last disconnected player",
                        "CCWMMO.getLastStateChangedPlayerInfo": "[PLAYER_INFO] of the last state changed player",
                        "CCWMMO.getPlayerInfoFromIndex": "[PLAYER_INFO] from [INDEX] of players",
                        "CCWMMO.dispatchPlayerChanged": "(❌ DEPRECATED) when player state changed",
                        "CCWMMO.dispatchPlayerChangedWithParams": "When player state changed, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.createCloneWithLastPlayerState": "clone this sprite with state of session ID:[SESSION_ID]",
                        "CCWMMO.getThisClonePlayerInfo": "player's [PLAYER_INFO] of this clone",
                        "CCWMMO.isThisAClone": "is a clone?",
                        "CCWMMO.dispatchRoomEnter": "When I connected to a room",
                        "CCWMMO.thisCloneIsMe": "(❌ DEPRECATED) am I this clone?",
                        "CCWMMO.thisCloneIsMeOrNot": "[AMI] this clone?",
                        "CCWMMO.isMe.true": "am I",
                        "CCWMMO.isMe.false": "am I not",
                        "CCWMMO.isCloneSessionIdEqualTo": "is clone's session ID = [SESSION_ID]?",
                        "CCWMMO.dispatchLobbyRoomChanged": "(❌ DEPRECATED)When rooms in lobby changed",
                        "CCWMMO.dispatchLobbyRoomChangedWithParams": "when rooms in lobby [TYPE], changed room = [rooms]",
                        "CCWMMO.lobbyChangedType.any": "any changes",
                        "CCWMMO.lobbyChangedType.create": "created",
                        "CCWMMO.lobbyChangedType.removed": "removed",
                        "CCWMMO.joinMatchmaking": "Join a match room id [ROOM_ID] with server id [GAME_ID] and extra data [NAME]",
                        "CCWMMO.joinMatchmakingAndWait": "Join a match room id [ROOM_ID] with server id [GAME_ID] and extra data [NAME] and wait",
                        "CCWMMO.setMatchRoomSize": "Set match room max players to [SIZE]",
                        "CCWMMO.lockRoom": "Lock match room [LOCK]",
                        "CCWMMO.dispatchMessageListChanged": "(❌ DEPRECATED)when message list changed",
                        "CCWMMO.fillMessageToList": "(❌ DEPRECATED)fill [MESSAGE_INFO] of message into list [LIST]",
                        "CCWMMO.deleteMessageAt": "(❌ DEPRECATED)delete message at [INDEX] (start from 0)",
                        "CCWMMO.getLobbyRoomInfoAt": "get [ROOM_INFO] from [INDEX] of rooms in lobby",
                        "CCWMMO.getLobbyRoomCount": "rooms in lobby",
                        "CCWMMO.setMatchRoomToList": "fill [ROOM_INFO] match rooms into list [LIST]",
                        "CCWMMO.getMatchRooms": "get [CONDITION] match rooms",
                        "CCWMMO.getMatchRoom.condition.all": "all",
                        "CCWMMO.getMatchRoom.condition.locked": "locked",
                        "CCWMMO.getMatchRoom.condition.unlocked": "unlocked",
                        "CCWMMO.lobby": "lobby",
                        "CCWMMO.matchRoom": "match room",
                        "CCWMMO.roomClients": "clients",
                        "CCWMMO.roomMaxClients": "max clients",
                        "CCWMMO.roomCreatedAt": "created at",
                        "CCWMMO.roomMetadata": "metadata",
                        "CCWMMO.roomMetadataLocked": "locked?",
                        "CCWMMO.roomMetadataExtra": "extra data",
                        "CCWMMO.roomMetadataJSON": "all data in JSON",
                        "CCWMMO.lock": "Lock",
                        "CCWMMO.unlock": "Unlock",
                        "CCWMMO.enable": "Enable",
                        "CCWMMO.disable": "Disable",
                        "CCWMMO.enableMultiLogin": "accept multi-ids for one user [MULTI_LOGIN]",
                        "CCWMMO.joinOrCreateMatch": "[METHOD] match room with server id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME]",
                        "CCWMMO.joinOrCreateMatchAndWait": "[METHOD] match room with server id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME] and wait",
                        "CCWMMO.div.Basic": "🚥 Connection and Basic Info",
                        "CCWMMO.div.Lobby": "🗺 Game Lobby",
                        "CCWMMO.div.Match": "🎾 Match Game",
                        "CCWMMO.div.Message": "✉️ Message",
                        "CCWMMO.div.Player": "😽 Player",
                        "CCWMMO.div.PlayerEvent": "🙀 Player Event",
                        "CCWMMO.div.Utils": "🛠 Utils",
                        "CCWMMO.roomStateChangeField.any": "any",
                        "CCWMMO.roomStateChangeField.extra": "extra data",
                        "CCWMMO.roomStateChangeField.onlineCount": "online count",
                        "CCWMMO.dispatchRoomStateChangedWithParams": "when room state [FIELD] changed, session Id = [sessionId], state = [roomState], changes = [changes]"
                    }
                })
            }
            var t, a, r, s, c, m, C;
            return t = e,
            a = [{
                key: "getHats",
                value: function() {
                    return {
                        CCWMMO_dispatchNewPlayer: {},
                        CCWMMO_dispatchNewMessage: {},
                        CCWMMO_dispatchMessageListChanged: {},
                        CCWMMO_dispatchPlayerLeave: {},
                        CCWMMO_dispatchPlayerChanged: {},
                        CCWMMO_dispatchRoomEnter: {},
                        CCWMMO_dispatchPlayerLeaveAbnormal: {},
                        CCWMMO_dispatchLobbyRoomChanged: {},
                        CCWMMO_dispatchRoomStateChanged: {},
                        CCWMMO_dispatchRoomStateChangedWithParams: {},
                        CCWMMO_dispatchLobbyRoomChangedWithParams: {},
                        CCWMMO_dispatchNewMessageWithParams: {},
                        CCWMMO_dispatchNewPlayerWithParams: {},
                        CCWMMO_dispatchPlayerLeaveWithParams: {},
                        CCWMMO_dispatchPlayerChangedWithParams: {}
                    }
                }
            }, {
                key: "getInfo",
                value: function() {
                    var e = {
                        opcode: "joinOrCreate",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreate",
                            default: "[METHOD] [ROOM] with game id [GAME_ID] and extra data [NAME]",
                            description: "Join or create a room"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            ROOM: {
                                type: n().STRING,
                                menu: "ROOM_NAME",
                                defaultValue: "broadcast"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , t = {
                        opcode: "joinOrCreateAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateAndWait",
                            default: "[METHOD] [ROOM] with game id [GAME_ID] and extra data [NAME] and wait",
                            description: "Join or create a room"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            ROOM: {
                                type: n().STRING,
                                menu: "ROOM_NAME",
                                defaultValue: "broadcast"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , a = {
                        opcode: "joinOrCreateMatch",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateMatch",
                            default: "[METHOD] match room with id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME]"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            MAX_CLIENTS: {
                                type: n().NUMBER,
                                defaultValue: 5
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , o = {
                        opcode: "joinOrCreateMatchAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateMatchAndWait",
                            default: "[METHOD] match room with id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME] and wait"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            MAX_CLIENTS: {
                                type: n().NUMBER,
                                defaultValue: 5
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , r = {
                        opcode: "joinMatchmaking",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinMatchmaking",
                            default: "Join a match room [ROOM_ID] with game id [GAME_ID] and extra data [NAME]"
                        }),
                        arguments: {
                            ROOM_ID: {
                                type: n().STRING,
                                defaultValue: "-"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , s = {
                        opcode: "joinMatchmakingAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinMatchmakingAndWait",
                            default: "Join a match room [ROOM_ID] with game id [GAME_ID] and extra data [NAME] and wait"
                        }),
                        arguments: {
                            ROOM_ID: {
                                type: n().STRING,
                                defaultValue: "-"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , c = (i().COMMAND,
                    this.formatMessage({
                        id: "CCWMMO.setMatchRoomSize",
                        default: "Set match room max players to [SIZE]"
                    }),
                    n().NUMBER,
                    {
                        opcode: "lockRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.lockRoom",
                            default: "Lock match room [LOCK]"
                        }),
                        arguments: {
                            LOCK: {
                                menu: "LOCK_MENU",
                                type: n().NUMBER,
                                defaultValue: 1
                            }
                        }
                    })
                      , M = {
                        opcode: "disconnectRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.disconnectRoom",
                            default: "Disconnect",
                            description: "Disconnect room"
                        }),
                        arguments: {}
                    }
                      , d = {
                        opcode: "roomLag",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.roomLag",
                            default: "lag"
                        })
                    }
                      , u = {
                        hideFromPalette: !0,
                        opcode: "reconnectRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.reconnectRoom",
                            default: "Reconnect",
                            description: "Reconnect room"
                        }),
                        arguments: {}
                    }
                      , m = {
                        opcode: "getRoomInfo",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getRoomInfo",
                            default: "room [TYPE]",
                            description: "Get room infomation"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                default: "sessionId",
                                menu: "ROOM_INFO"
                            }
                        }
                    }
                      , C = {
                        opcode: "broadcastMsg",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.broadcastMsg",
                            default: "broadcast [TYPE] with content [CONTENT]",
                            description: "Broadcast msg"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                defaultValue: "message"
                            },
                            CONTENT: {
                                type: n().STRING,
                                defaultValue: "hello"
                            }
                        }
                    }
                      , h = {
                        hideFromPalette: !0,
                        opcode: "dispatchNewMessage",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewMessage",
                            default: "when new message received",
                            description: "When new message received"
                        }),
                        arguments: {}
                    }
                      , f = {
                        opcode: "dispatchMessageListChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchMessageListChanged",
                            default: "when message list changed",
                            description: "When message list changed"
                        }),
                        arguments: {}
                    }
                      , O = {
                        opcode: "dispatchNewMessageWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewMessageWithParams",
                            default: "When new message received, sender session Id = [sender] UUID = [senderUID] name = [name] msg type = [type] content = [content]",
                            description: "When new message received"
                        }),
                        arguments: {
                            sender: {
                                type: "ccw_hat_parameter"
                            },
                            senderUID: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            type: {
                                type: "ccw_hat_parameter"
                            },
                            content: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , y = {
                        opcode: "getMessage",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.getMessage",
                            default: "get last message and [ACTION]",
                            description: "get last message"
                        }),
                        arguments: {
                            ACTION: {
                                type: n().STRING,
                                menu: "GET_MESSAGE_ACTION"
                            }
                        }
                    }
                      , p = {
                        opcode: "getLastMessageContent",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastMessageContent",
                            default: "current messange [ACTION]",
                            description: "Get message infomation"
                        }),
                        arguments: {
                            ACTION: {
                                type: n().STRING,
                                menu: "MESSAGE_INFO"
                            }
                        }
                    }
                      , g = {
                        opcode: "getMsgCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getMsgCount",
                            default: "message count",
                            description: "Get message count"
                        }),
                        arguments: {}
                    }
                      , I = {
                        opcode: "fillMessageToList",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.fillMessageToList",
                            default: "fill [MESSAGE_INFO] of message into list [LIST]"
                        }),
                        arguments: {
                            MESSAGE_INFO: {
                                type: n().STRING,
                                menu: "MESSAGE_INFO"
                            },
                            LIST: {
                                type: n().STRING,
                                menu: "LIST_MENU"
                            }
                        }
                    }
                      , R = {
                        opcode: "deleteMessageAt",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.deleteMessageAt",
                            default: "delete message at [INDEX] (start from 0)"
                        }),
                        arguments: {
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , v = {
                        opcode: "getClientList",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getClientList",
                            default: "list of online players in format [FORMAT]"
                        }),
                        arguments: {
                            FORMAT: {
                                type: n().STRING,
                                defaultValue: "default",
                                menu: "CLIENT_LIST_FORMAT"
                            }
                        }
                    }
                      , W = {
                        opcode: "getPlayerCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerCount",
                            default: "online player count"
                        }),
                        arguments: {}
                    }
                      , E = {
                        opcode: "getPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerInfo",
                            default: "get [PLAYER_INFO] from [SESSION_ID]",
                            description: "Get message count"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            },
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , N = {
                        opcode: "setRoomExtra",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setRoomExtra",
                            default: "set extra data of current room to [EXTRA]"
                        }),
                        arguments: {
                            EXTRA: {
                                type: n().STRING,
                                defaultValue: "{}"
                            }
                        }
                    }
                      , b = {
                        hideFromPalette: !0,
                        opcode: "dispatchRoomStateChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomStateChanged",
                            default: "when room state changed",
                            description: "When room state changed"
                        }),
                        arguments: {}
                    }
                      , P = {
                        opcode: "dispatchRoomStateChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomStateChangedWithParams",
                            default: "when room state [FIELD] changed, session Id = [sessionId], state = [roomState], changes = [changes]"
                        }),
                        arguments: {
                            FIELD: {
                                type: n().STRING,
                                defaultValue: "*",
                                menu: "ROOM_STATE_CHANGE_FIELD"
                            },
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            roomState: {
                                type: "ccw_hat_parameter"
                            },
                            changes: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , T = {
                        opcode: "roomExtra",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.roomExtra",
                            default: "extra data of current room",
                            description: "Get room extra data"
                        }),
                        arguments: {}
                    }
                      , _ = {
                        opcode: "setPlayerState",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setPlayerState",
                            default: "set [PLAYER_INFO] to [VALUE]",
                            description: "set player state"
                        }),
                        arguments: {
                            VALUE: {
                                type: n().STRING,
                                defaultValue: "0"
                            },
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO_WRITEBLE"
                            }
                        }
                    }
                      , A = {
                        opcode: "setPlayerStateXY",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setPlayerStateXY",
                            default: "set x:[X] y:[Y]",
                            description: "set player x and y state"
                        }),
                        arguments: {
                            X: {
                                type: n().NUMBER,
                                defaultValue: 0
                            },
                            Y: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , S = {
                        opcode: "dispatchRoomEnter",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomEnter",
                            default: "when I connected"
                        }),
                        arguments: {}
                    }
                      , L = {
                        opcode: "dispatchNewPlayer",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewPlayer",
                            default: "when new player connected",
                            description: "When new player connected"
                        }),
                        arguments: {}
                    }
                      , w = {
                        opcode: "dispatchNewPlayerWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewPlayerWithParams",
                            default: "when new player connected, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , x = {
                        opcode: "getNewPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getNewPlayerInfo",
                            default: "get [PLAYER_INFO] from the last connected player"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , D = {
                        opcode: "dispatchPlayerLeave",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeave",
                            default: "when player disconnected"
                        }),
                        arguments: {}
                    }
                      , k = {
                        opcode: "dispatchPlayerLeaveWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeaveWithParams",
                            default: "When player disconnected, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , F = {
                        opcode: "dispatchPlayerLeaveAbnormal",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeaveAbnormal",
                            default: "when I disconnected abnormally"
                        }),
                        arguments: {}
                    }
                      , G = {
                        opcode: "getLastLeftPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastLeftPlayerInfo",
                            default: "get [PLAYER_INFO] from the last disconnected player",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , j = {
                        opcode: "dispatchPlayerChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerChanged",
                            default: "when player state changed"
                        }),
                        arguments: {}
                    }
                      , U = {
                        opcode: "dispatchPlayerChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerChangedWithParams",
                            default: "When player state changed, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , Y = {
                        opcode: "getLastStateChangedPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastStateChangedPlayerInfo",
                            default: "get [PLAYER_INFO] from the last state changed player",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , H = {
                        opcode: "getPlayerInfoFromIndex",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerInfoFromIndex",
                            default: "[PLAYER_INFO] from [INDEX] of players",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            },
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , J = {
                        opcode: "createCloneWithLastPlayerState",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.createCloneWithLastPlayerState",
                            default: "clone this sprite with state of session ID:[SESSION_ID]"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            }
                        }
                    }
                      , X = {
                        opcode: "getThisClonePlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getThisClonePlayerInfo",
                            default: "get [PLAYER_INFO] from this clone"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , V = {
                        opcode: "isThisAClone",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.isThisAClone",
                            default: "is a clone?"
                        })
                    }
                      , B = {
                        opcode: "thisCloneIsMe",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.thisCloneIsMe",
                            default: "[AMI] this clone?"
                        })
                    }
                      , K = {
                        opcode: "thisCloneIsMeOrNot",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.thisCloneIsMeOrNot",
                            default: "[AMI] this clone?"
                        }),
                        arguments: {
                            AMI: {
                                type: n().STRING,
                                defaultValue: "is",
                                menu: "IS_ME_MENU"
                            }
                        }
                    }
                      , Z = {
                        opcode: "isCloneSessionIdEqualTo",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.isCloneSessionIdEqualTo",
                            default: "is this clone's session ID = [SESSION_ID]?"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            }
                        }
                    }
                      , z = {
                        opcode: "dispatchLobbyRoomChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchLobbyRoomChanged",
                            default: "when rooms in lobby changed"
                        }),
                        arguments: {}
                    }
                      , q = {
                        opcode: "dispatchLobbyRoomChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchLobbyRoomChangedWithParams",
                            default: "when rooms in lobby [TYPE], changed room = [rooms]"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                menu: "LOBBY_CHANGED_TYPE",
                                defaultValue: "*"
                            },
                            rooms: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , $ = {
                        opcode: "getLobbyRoomInfoAt",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLobbyRoomInfoAt",
                            default: "get [ROOM_INFO] from [INDEX] of rooms in lobby"
                        }),
                        arguments: {
                            ROOM_INFO: {
                                type: n().STRING,
                                menu: "ROOM_EXT_INFO"
                            },
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , Q = {
                        opcode: "getLobbyRoomCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getLobbyRoomCount",
                            default: "rooms in lobby"
                        }),
                        arguments: {}
                    }
                      , ee = {
                        opcode: "setMatchRoomToList",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setMatchRoomToList",
                            default: "fill [ROOM_INFO] match rooms into list [LIST]"
                        }),
                        arguments: {
                            ROOM_INFO: {
                                type: n().STRING,
                                menu: "ROOM_EXT_INFO"
                            },
                            LIST: {
                                type: n().STRING,
                                menu: "LIST_MENU"
                            }
                        }
                    }
                      , te = {
                        opcode: "getMatchRooms",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getMatchRooms",
                            default: "[CONDITION] match rooms"
                        }),
                        arguments: {
                            CONDITION: {
                                type: n().STRING,
                                menu: "CONDITION_MENU",
                                defaultValue: "all"
                            }
                        }
                    }
                      , ae = {
                        opcode: "enableMultiLogin",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.enableMultiLogin",
                            default: "accept multi-ids for one user [MULTI_LOGIN]"
                        }),
                        arguments: {
                            MULTI_LOGIN: {
                                type: n().NUMBER,
                                menu: "MULTI_LOGIN",
                                defaultValue: 1
                            }
                        }
                    };
                    return [z, h, y, p, g, f, I, R, L, D, j, B].forEach((function(e) {
                        e.hideFromPalette = !0
                    }
                    )),
                    {
                        id: "CCWMMO",
                        name: "MMO",
                        color1: "#56CCF2",
                        menuIconURI: l.Z,
                        blockIconURI: l.Z,
                        blocks: ["---" + this.formatMessage({
                            id: "CCWMMO.div.Basic",
                            default: "🚥 Connection and Basic Info"
                        }), e, t, M, d, m, N, b, P, T, ae, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Lobby",
                            default: "🗺 Game Lobby"
                        }), z, q, $, Q, ee, te, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Match",
                            default: "🎾 Match Game"
                        }), a, o, r, s, c, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Message",
                            default: "✉️ Message"
                        }), C, O, h, y, p, g, f, I, R, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Player",
                            default: "😽 Player"
                        }), v, W, E, _, A, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.PlayerEvent",
                            default: "🙀 Player Event"
                        }), S, L, w, x, D, k, u, F, G, j, U, Y, H, J, X, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Utils",
                            default: "🛠 Utils"
                        }), V, B, K, Z],
                        menus: {
                            JOIN_METHOD: [{
                                text: this.formatMessage("CCWMMO.join_method.joinOrCreate"),
                                value: "joinOrCreate"
                            }, {
                                text: this.formatMessage("CCWMMO.join_method.create"),
                                value: "create"
                            }],
                            LOCK_MENU: {
                                acceptReporters: !0,
                                items: [{
                                    text: this.formatMessage("CCWMMO.lock"),
                                    value: 1
                                }, {
                                    text: this.formatMessage("CCWMMO.unlock"),
                                    value: 0
                                }]
                            },
                            MULTI_LOGIN: [{
                                text: this.formatMessage("CCWMMO.enable"),
                                value: 1
                            }, {
                                text: this.formatMessage("CCWMMO.disable"),
                                value: 0
                            }],
                            ROOM_NAME: [{
                                text: this.formatMessage("CCWMMO.lobby"),
                                value: "lobby"
                            }, {
                                text: this.formatMessage("CCWMMO.matchRoom"),
                                value: "match"
                            }, {
                                text: this.formatMessage("CCWMMO.broadcast"),
                                value: "broadcast"
                            }],
                            ROOM_INFO: [{
                                text: this.formatMessage("CCWMMO.roomSessionId"),
                                value: "sessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.roomId"),
                                value: "id"
                            }, {
                                text: this.formatMessage("CCWMMO.roomName"),
                                value: "name"
                            }],
                            ROOM_EXT_INFO: [{
                                text: this.formatMessage("CCWMMO.roomId"),
                                value: "roomId"
                            }, {
                                text: this.formatMessage("CCWMMO.roomName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.roomClients"),
                                value: "clients"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMaxClients"),
                                value: "maxClients"
                            }, {
                                text: this.formatMessage("CCWMMO.roomCreatedAt"),
                                value: "createdAt"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadata"),
                                value: "metadata"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataExtra"),
                                value: "metadata.extra"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataLocked"),
                                value: "metadata.locked"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataJSON"),
                                value: "JSON"
                            }],
                            LIST_MENU: {
                                acceptReporters: !0,
                                items: "findAllList"
                            },
                            GET_MESSAGE_ACTION: [{
                                text: this.formatMessage("CCWMMO.msgActionDelete"),
                                value: "delete"
                            }, {
                                text: this.formatMessage("CCWMMO.msgActionKeep"),
                                value: "keep"
                            }],
                            MESSAGE_INFO: [{
                                text: this.formatMessage("CCWMMO.msgInfoType"),
                                value: "type"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoSender.SessionId"),
                                value: "senderSessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoSender.Name"),
                                value: "senderName"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoMessageContent"),
                                value: "content"
                            }],
                            PLAYER_INFO: [{
                                text: this.formatMessage("CCWMMO.playerInfoSessionId"),
                                value: "sessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoX"),
                                value: "x"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoY"),
                                value: "y"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoScale"),
                                value: "scale"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoDirection"),
                                value: "direction"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoUUID"),
                                value: "uuid"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoConnected"),
                                value: "connected"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoExtra"),
                                value: "extra"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoJSON"),
                                value: "JSON"
                            }],
                            PLAYER_INFO_WRITEBLE: [{
                                text: this.formatMessage("CCWMMO.playerInfoName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoX"),
                                value: "x"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoY"),
                                value: "y"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoScale"),
                                value: "scale"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoDirection"),
                                value: "direction"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoExtra"),
                                value: "extra"
                            }],
                            ROOM_STATE_CHANGE_FIELD: [{
                                text: this.formatMessage("CCWMMO.roomStateChangeField.any"),
                                value: "*"
                            }, {
                                text: this.formatMessage("CCWMMO.roomStateChangeField.extra"),
                                value: "extra"
                            }, {
                                text: this.formatMessage("CCWMMO.roomStateChangeField.onlineCount"),
                                value: "onlineCount"
                            }],
                            LOBBY_CHANGED_TYPE: [{
                                text: this.formatMessage("CCWMMO.lobbyChangedType.any"),
                                value: "*"
                            }, {
                                text: this.formatMessage("CCWMMO.lobbyChangedType.create"),
                                value: "+"
                            }, {
                                text: this.formatMessage("CCWMMO.lobbyChangedType.removed"),
                                value: "-"
                            }],
                            CONDITION_MENU: [{
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.all"),
                                value: "all"
                            }, {
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.locked"),
                                value: "locked"
                            }, {
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.unlocked"),
                                value: "unlocked"
                            }],
                            CLIENT_LIST_FORMAT: [{
                                text: this.formatMessage("CCWMMO.clientListFormat.default"),
                                value: "default"
                            }, {
                                text: this.formatMessage("CCWMMO.clientListFormat.JSON"),
                                value: "JSON"
                            }],
                            IS_ME_MENU: [{
                                text: this.formatMessage("CCWMMO.isMe.true"),
                                value: "is"
                            }, {
                                text: this.formatMessage("CCWMMO.isMe.false"),
                                value: "isNot"
                            }]
                        }
                    }
                }
            }, {
                key: "dispatchRoomEnter",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewPlayer",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewPlayerWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewMessage",
                value: function(e) {
                    var t = this.newMsg;
                    return this.newMsg = !1,
                    t
                }
            }, {
                key: "dispatchNewMessageWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeave",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeaveWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeaveAbnormal",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchLobbyRoomChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchMessageListChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchRoomStateChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchRoomStateChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchLobbyRoomChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "findAllList",
                value: function() {
                    var e = []
                      , t = this.runtime._stageTarget.variables;
                    Object.keys(t).forEach((function(a) {
                        "list" === t[a].type && e.push({
                            text: "".concat(t[a].name),
                            value: t[a].id
                        })
                    }
                    ));
                    try {
                        t = this.runtime._editingTarget.variables
                    } catch (e) {
                        t = "e"
                    }
                    return "e" !== t && this.runtime._editingTarget !== this.runtime._stageTarget && Object.keys(t).forEach((function(a) {
                        "list" === t[a].type && e.push({
                            text: "[PRIVATE]".concat(t[a].name),
                            value: t[a].id
                        })
                    }
                    )),
                    0 === e.length && e.push({
                        text: "-",
                        value: "empty"
                    }),
                    e
                }
            }, {
                key: "_bindPingPong",
                value: function() {
                    var e = this;
                    if (void 0 === this._pingPongTimer && (this._pingPongTimer = setInterval((function() {
                        e._bindPingPong()
                    }
                    ), 5e3)),
                    void 0 === this.currentRoom)
                        return (0,
                        d.ZK)("CCW MMO:[_bindPingPong] current room is undefined"),
                        NaN;
                    this._pingNow = Date.now(),
                    this._pongNowArr = [],
                    this.currentRoom.send("syscmd:ping", {
                        id: 1
                    }),
                    this.currentRoom.send("syscmd:ping", {
                        id: 2
                    }),
                    this.currentRoom.send("syscmd:ping", {
                        id: 3
                    })
                }
            }, {
                key: "bindRoom",
                value: function(e, t) {
                    var a = this;
                    if (e.state,
                    this.lag = 15,
                    e.onMessage("syscmd:pong", (function(e) {
                        if (a._pongNowArr && (a._pongNowArr.push(Date.now()),
                        a._pongNowArr.length >= 3)) {
                            var t = (a._pongNowArr[0] + a._pongNowArr[1] + a._pongNowArr[2]) / 3 - a._pingNow;
                            a.lag = t,
                            a._pongNowArr = []
                        }
                    }
                    )),
                    e.onMessage("syscmd:newPlayerAdded", (function(o) {
                        var r = o.player;
                        a._lastNewPlayerInfo = r,
                        t.startHats("CCWMMO_dispatchNewPlayer", {}),
                        t.startHatsWithParams("CCWMMO_dispatchNewPlayerWithParams", {
                            parameters: {
                                sessionId: r.sessionId,
                                name: r.name,
                                data: JSON.stringify(r)
                            }
                        }),
                        r.sessionId === e.sessionId && t.startHats("CCWMMO_dispatchRoomEnter", {})
                    }
                    )),
                    e.onMessage("syscmd:playerRemoved", (function(e) {
                        var o = e.player;
                        a._lastLeftPlayerInfo = o,
                        t.startHats("CCWMMO_dispatchPlayerLeave", {}),
                        t.startHatsWithParams("CCWMMO_dispatchPlayerLeaveWithParams", {
                            parameters: {
                                sessionId: o.sessionId,
                                name: o.name,
                                data: JSON.stringify(o)
                            }
                        })
                    }
                    )),
                    e.onMessage("*", (function(e, o) {
                        if ("lobby" === a.currentRoomType) {
                            var r = "[]";
                            if ("rooms" === e && (a.allRooms = o,
                            r = JSON.stringify(o)),
                            "+" === e) {
                                var n = a.allRooms.findIndex((function(e) {
                                    return e.roomId === o[0]
                                }
                                ));
                                -1 !== n ? a.allRooms[n] = o[1] : a.allRooms.push(o[1]),
                                r = JSON.stringify([o[1]])
                            }
                            if ("-" === e) {
                                var s = a.allRooms.filter((function(e) {
                                    return e.roomId === o
                                }
                                ));
                                s.length > 0 && (r = JSON.stringify(s)),
                                a.allRooms = a.allRooms.filter((function(e) {
                                    return e.roomId !== o
                                }
                                ))
                            }
                            return t.startHats("CCWMMO_dispatchLobbyRoomChanged", {}),
                            t.startHatsWithParams("CCWMMO_dispatchLobbyRoomChangedWithParams", {
                                parameters: {
                                    rooms: r
                                },
                                fields: {
                                    TYPE: e
                                }
                            }),
                            void t.startHatsWithParams("CCWMMO_dispatchLobbyRoomChangedWithParams", {
                                parameters: {
                                    rooms: r
                                },
                                fields: {
                                    TYPE: "*"
                                }
                            })
                        }
                        0 != e.indexOf("syscmd:") && (a.msgs.push({
                            type: e,
                            msg: o
                        }),
                        t.startHats("CCWMMO_dispatchNewMessage", {}),
                        t.startHats("CCWMMO_dispatchMessageListChanged", {}),
                        t.startHatsWithParams("CCWMMO_dispatchNewMessageWithParams", {
                            parameters: {
                                sender: o.who.sessionId,
                                name: o.who.extra.name,
                                senderUID: o.who.extra.uuid,
                                type: e,
                                content: o.msg
                            }
                        }))
                    }
                    )),
                    e.onLeave((function(e) {
                        a.currentRoom && a.currentRoom.state && (a._lastLeftPlayerInfo = a.currentRoom.state.players.get(a.currentRoom.sessionId)),
                        e >= 1001 && e <= 1015 ? ((0,
                        d.ZK)("CCW MMO: abnormal disconnection", e),
                        t.startHats("CCWMMO_dispatchPlayerLeaveAbnormal", {})) : 4001 == e ? t.startHats("CCWMMO_dispatchPlayerLeaveAbnormal", {}) : t.startHats("CCWMMO_dispatchPlayerLeave", {})
                    }
                    )),
                    void 0 !== e && void 0 !== e.state && null !== e.state) {
                        e.state.onChange = function(a) {
                            var o = JSON.stringify(a)
                              , r = JSON.stringify(e.state);
                            a.forEach((function(a) {
                                "extra" == a.field && t.startHats("CCWMMO_dispatchRoomStateChanged", {});
                                var o = JSON.stringify(a);
                                t.startHatsWithParams("CCWMMO_dispatchRoomStateChangedWithParams", {
                                    parameters: {
                                        sessionId: e.sessionId,
                                        roomState: r,
                                        changes: o
                                    },
                                    fields: {
                                        FIELD: a.field
                                    }
                                })
                            }
                            )),
                            t.startHatsWithParams("CCWMMO_dispatchRoomStateChangedWithParams", {
                                parameters: {
                                    sessionId: e.sessionId,
                                    roomState: r,
                                    changes: o
                                },
                                fields: {
                                    FIELD: "*"
                                }
                            })
                        }
                        ,
                        e.state.players && (e.state.players.onChange = function(e, o) {
                            a._lastStateChangedPlayerInfo = e,
                            t.startHats("CCWMMO_dispatchPlayerChanged", {}),
                            t.startHatsWithParams("CCWMMO_dispatchPlayerChangedWithParams", {
                                parameters: {
                                    sessionId: e.sessionId,
                                    name: e.name,
                                    data: JSON.stringify(e)
                                }
                            })
                        }
                        ),
                        this._bindPingPong();
                        try {
                            this.runtime.ccwAPI.sendPlayEventCode([8590983174, 1], {
                                code: "2",
                                data: ""
                            })
                        } catch (e) {
                            (0,
                            d.ZK)("CCW MMO: sendPlayEventCode error", e)
                        }
                    }
                }
            }, {
                key: "joinOrCreate",
                value: function(e, t) {
                    this.joinOrCreateAndWait(e, t).then((function() {}
                    )).catch((function(e) {}
                    ))
                }
            }, {
                key: "joinOrCreateAndWait",
                value: (C = I(p().mark((function e(t, a) {
                    var o = this;
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.currentRoom) {
                                    e.next = 3;
                                    break
                                }
                                return (0,
                                d.ZK)("CCW MMO: alreay in a room"),
                                e.abrupt("return");
                            case 3:
                                return "joinOrCreate" !== t.METHOD && "create" !== t.METHOD && (t.METHOD = "joinOrCreate"),
                                e.next = 7,
                                this.client[t.METHOD](t.ROOM, {
                                    token: v("token"),
                                    name: this.ccwUserNickname,
                                    uuid: this.ccwUserUUID,
                                    gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID),
                                    matchId: "match" === t.ROOM ? "".concat(Math.random()) : void 0,
                                    extra: t.NAME,
                                    max: t.MAX_CLIENTS,
                                    filter: {
                                        name: "match",
                                        metadata: "lobby" === t.ROOM ? {
                                            gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID)
                                        } : void 0
                                    }
                                }).then((function(e) {
                                    o.currentRoom = e,
                                    o.currentRoomType = t.ROOM,
                                    e.sessionId,
                                    e.name,
                                    o.bindRoom(e, a)
                                }
                                ));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return C.apply(this, arguments)
                }
                )
            }, {
                key: "enableMultiLogin",
                value: function(e, t) {
                    var a = "1" === e.MULTI_LOGIN || 1 === e.MULTI_LOGIN;
                    this.currentRoom && this.currentRoomMultiJoinState !== a && (this.currentRoom.send("syscmd:enableMultiJoin", e.MULTI_LOGIN),
                    this.currentRoomMultiJoinState = a)
                }
            }, {
                key: "disconnectRoom",
                value: function(e) {
                    this.disconnectRoomAndWait(e).then((function() {}
                    )).catch((function(e) {}
                    ))
                }
            }, {
                key: "roomLag",
                value: function(e) {
                    return this.currentRoom ? this.lag : -1
                }
            }, {
                key: "disconnectRoomAndWait",
                value: (m = I(p().mark((function e(t) {
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.currentRoom) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 3,
                                this.currentRoom.leave();
                            case 3:
                                this.currentRoom.removeAllListeners(),
                                this.currentRoom = void 0,
                                this.currentRoomType = void 0,
                                this.msgs = new Array,
                                this.currentMsg = void 0,
                                "lobby" === this.currentRoomType && (this.allRooms = []);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e) {
                    return m.apply(this, arguments)
                }
                )
            }, {
                key: "reconnectRoom",
                value: function(e, t) {
                    var a = this;
                    this.currentRoom && this.currentRoom.sessionId && this.currentRoom.id && this.client && this.client.reconnect(this.currentRoom.id, this.currentRoom.sessionId).then((function(e) {
                        a.currentRoom.removeAllListeners(),
                        a.currentRoom = e,
                        a.bindRoom(e, t)
                    }
                    )).catch((function(e) {}
                    ))
                }
            }, {
                key: "getRoomInfo",
                value: function(e) {
                    return void 0 === this.currentRoom ? ((0,
                    d.ZK)("CCW MMO:[getRoomInfo] current room is undefined", e),
                    NaN) : "id" === e.TYPE ? this.currentRoom.id : "name" === e.TYPE ? this.currentRoom.name : "sessionId" === e.TYPE ? this.currentRoom.sessionId : NaN
                }
            }, {
                key: "setRoomExtra",
                value: function(e, t) {
                    if (void 0 === this.currentRoom)
                        return (0,
                        d.ZK)("CCW MMO:[setRoomExtra] current room is undefined", e),
                        NaN;
                    this.currentRoom.send("syscmd:set_room_state", {
                        extra: M().toString(e.EXTRA)
                    })
                }
            }, {
                key: "roomExtra",
                value: function(e, t) {
                    return this.currentRoom && this.currentRoom.state ? this.currentRoom.state.extra : ((0,
                    d.ZK)("CCW MMO:[roomExtra] current room or room.state is undefined", e),
                    NaN)
                }
            }, {
                key: "broadcastMsg",
                value: function(e) {
                    void 0 !== this.currentRoom ? this.currentRoom.send(M().toString(e.TYPE), e.CONTENT) : (0,
                    d.ZK)("CCW MMO: [broadcastMsg] currentRoom is not connected")
                }
            }, {
                key: "getMessage",
                value: function(e, t) {
                    "delete" === e.ACTION ? (this.currentMsg = this.msgs.shift(),
                    t.startHats("CCWMMO_dispatchMessageListChanged", {})) : this.currentMsg = this.msgs[0],
                    this.currentMsg
                }
            }, {
                key: "getLastMessageContent",
                value: function(e) {
                    return void 0 === this.currentMsg && (this.currentMsg = this.msgs[0]),
                    void 0 === this.currentMsg ? ((0,
                    d.ZK)("CCW MMO: [getLastMessageContent] no message to process"),
                    NaN) : (this.currentMsg,
                    "type" === e.ACTION ? this.currentMsg.type : "content" === e.ACTION ? this.currentMsg.msg.msg : "senderSessionId" === e.ACTION ? this.currentMsg.msg.who.sessionId : "senderName" === e.ACTION ? this.currentMsg.msg.who.name : NaN)
                }
            }, {
                key: "getMsgCount",
                value: function(e) {
                    return void 0 === this.msgs ? 0 : this.msgs.length
                }
            }, {
                key: "fillMessageToList",
                value: function(e, t) {
                    if ("empty" !== e.LIST) {
                        var a = t.target.lookupVariableById(e.LIST);
                        if (void 0 === a && (a = t.target.lookupVariableByNameAndType(e.LIST, "list")),
                        void 0 === a)
                            return;
                        e.LIST;
                        for (var o = [], r = 0; r < this.msgs.length; r++) {
                            var n = void 0;
                            "type" === e.MESSAGE_INFO ? n = this.msgs[r].type : "content" === e.MESSAGE_INFO ? n = this.msgs[r].msg.msg : "senderSessionId" === e.MESSAGE_INFO ? n = this.msgs[r].msg.who.sessionId : "senderName" === e.MESSAGE_INFO && (n = this.msgs[r].msg.who.name),
                            o.push(n)
                        }
                        a.value = o
                    }
                }
            }, {
                key: "deleteMessageAt",
                value: function(e, t) {
                    void 0 !== this.msgs && (e.INDEX >= this.msgs.length || (this.msgs.splice(e.INDEX, 1),
                    t.startHats("CCWMMO_dispatchMessageListChanged", {})))
                }
            }, {
                key: "getClientList",
                value: function(e) {
                    var t = "";
                    return void 0 === this.currentRoom || void 0 === this.currentRoom.state || void 0 === this.currentRoom.state.players ? "JSON" === e.FORMAT ? "[]" : t : ("JSON" === e.FORMAT ? t = JSON.stringify(O(this.currentRoom.state.players.values())) : this.currentRoom.state.players.forEach((function(e) {
                        t += "".concat(e.sessionId, ",").concat(e.uuid, ",").concat(e.name, ";")
                    }
                    )),
                    t)
                }
            }, {
                key: "getPlayerCount",
                value: function(e) {
                    return void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state || void 0 === this.currentRoom.state.players ? 0 : this.currentRoom.state.players.size
                }
            }, {
                key: "getPlayerInfo",
                value: function(e) {
                    if (void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state)
                        return "";
                    var t = this.currentRoom.state.players.get(e.SESSION_ID);
                    return t ? "JSON" === e.PLAYER_INFO ? JSON.stringify(t) : t[e.PLAYER_INFO] : ""
                }
            }, {
                key: "_setStateWithThrottle",
                value: function(e) {
                    var t = this;
                    return this.currentPlayer = Object.assign(this.currentPlayer, e),
                    void 0 === this.stateThrottle && (this.stateThrottle = (0,
                    u.Z)((function() {
                        t.currentRoom && t.currentRoom.send("syscmd:set_state", t.currentPlayer)
                    }
                    ), 20, {
                        leading: !1,
                        trailing: !0
                    })),
                    this.stateThrottle
                }
            }, {
                key: "setPlayerState",
                value: function(e) {
                    if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state) {
                        var t = e.VALUE;
                        t = "x" === e.PLAYER_INFO || "y" === e.PLAYER_INFO || "scale" === e.PLAYER_INFO || "direction" === e.PLAYER_INFO ? +M().toNumber(t).toFixed(2) || 0 : M().toString(t) || "";
                        var a = {};
                        a[e.PLAYER_INFO] = t,
                        this.currentPlayer[e.PLAYER_INFO] !== t && this._setStateWithThrottle(a)()
                    }
                }
            }, {
                key: "setPlayerStateXY",
                value: function(e) {
                    if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state) {
                        var t = +M().toNumber(e.X).toFixed(2) || 0
                          , a = +M().toNumber(e.Y).toFixed(2) || 0
                          , o = {};
                        o.x = t,
                        o.y = a,
                        this.currentPlayer.x === t && this.currentPlayer.y === a || this._setStateWithThrottle(o)()
                    }
                }
            }, {
                key: "getNewPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastNewPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastNewPlayerInfo) : this._lastNewPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getLastLeftPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastLeftPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastLeftPlayerInfo) : this._lastLeftPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getLastStateChangedPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastStateChangedPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastStateChangedPlayerInfo) : this._lastStateChangedPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getPlayerInfoFromIndex",
                value: function(e) {
                    if (void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state || void 0 === this.currentRoom.state.players)
                        return "";
                    if (e.INDEX >= this.currentRoom.state.players.size)
                        return "";
                    var t = O(this.currentRoom.state.players.keys())
                      , a = this.currentRoom.state.players.get(t[e.INDEX]);
                    return a ? "JSON" === e.PLAYER_INFO ? JSON.stringify(a) : a[e.PLAYER_INFO] : ""
                }
            }, {
                key: "createCloneWithLastPlayerState",
                value: (c = I(p().mark((function e(t, a) {
                    var o, r, n, s, i, c = this;
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((o = M().toString(t.SESSION_ID)) && "" !== o) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state && void 0 !== this.currentRoom.state.players) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                return r = function() {
                                    return new Promise((function(e, t) {
                                        var a = 20
                                          , r = setInterval((function() {
                                            c.currentRoom.state.players.get(o) && (clearInterval(r),
                                            e(h({}, c.currentRoom.state.players.get(o)))),
                                            --a <= 0 && ((0,
                                            d.ZK)("clone failed, cannot get player state"),
                                            clearInterval(r),
                                            t(!1))
                                        }
                                        ), 500)
                                    }
                                    ))
                                }
                                ,
                                n = a.target,
                                e.next = 10,
                                r();
                            case 10:
                                if (!1 !== (s = e.sent)) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return");
                            case 13:
                                (i = n.makeClone()) && (i.MMOPlayerInfo = s,
                                i.MMOPlayerSessionId = o,
                                this.runtime.addTarget(i),
                                i.goBehindOther(n)),
                                o && void 0 === s.sessionId && setTimeout((function() {
                                    i.MMOPlayerInfo = h({}, c.currentRoom.state.players.get(o))
                                }
                                ), 5e3);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "getThisClonePlayerInfo",
                value: function(e, t) {
                    if (void 0 === t.target.MMOPlayerInfo || void 0 === this.currentRoom || void 0 === this.currentRoom.state || void 0 === this.currentRoom.state.players)
                        return "";
                    var a = t.target.MMOPlayerInfo.sessionId;
                    return a || (a = t.target.MMOPlayerSessionId),
                    void 0 === this.currentRoom.state.players.get(a) ? ((0,
                    d.ZK)("getThisClonePlayerInfo: playerState is undefined!!!"),
                    "JSON" === e.PLAYER_INFO ? JSON.stringify(t.target.MMOPlayerInfo) || "" : t.target.MMOPlayerInfo[e.PLAYER_INFO] || "") : "JSON" === e.PLAYER_INFO ? JSON.stringify(this.currentRoom.state.players.get(a)) : this.currentRoom.state.players.get(a)[e.PLAYER_INFO] || ""
                }
            }, {
                key: "isThisAClone",
                value: function(e, t) {
                    return !t.target.isOriginal
                }
            }, {
                key: "_cloneIsMe",
                value: function(e) {
                    return !e.target.isOriginal && void 0 !== e.target.MMOPlayerInfo && void 0 !== this.currentRoom && void 0 !== this.currentRoom.state && void 0 !== this.currentRoom.state.players && (e.target.MMOPlayerInfo.sessionId === this.currentRoom.sessionId || e.target.MMOPlayerSessionId === this.currentRoom.sessionId)
                }
            }, {
                key: "thisCloneIsMe",
                value: function(e, t) {
                    return this._cloneIsMe(t)
                }
            }, {
                key: "thisCloneIsMeOrNot",
                value: function(e, t) {
                    return "isNot" === e.AMI ? !this._cloneIsMe(t) : this._cloneIsMe(t)
                }
            }, {
                key: "isCloneSessionIdEqualTo",
                value: function(e, t) {
                    return !t.target.isOriginal && void 0 !== t.target.MMOPlayerInfo && t.target.MMOPlayerInfo.sessionId === e.SESSION_ID
                }
            }, {
                key: "getLobbyRoomCount",
                value: function(e, t) {
                    return this.allRooms.length
                }
            }, {
                key: "getLobbyRoomInfoAt",
                value: function(e, t) {
                    if (this.allRooms,
                    e.INDEX < this.allRooms.length) {
                        if ("JSON" === e.ROOM_INFO)
                            return JSON.stringify(this.allRooms[e.INDEX]);
                        if (0 === e.ROOM_INFO.indexOf("metadata.")) {
                            var a = e.ROOM_INFO.substr(9);
                            return this.allRooms[e.INDEX].metadata[a]
                        }
                        return "metadata" === e.ROOM_INFO ? JSON.stringify(this.allRooms[e.INDEX][e.ROOM_INFO]) : this.allRooms[e.INDEX][e.ROOM_INFO]
                    }
                    return NaN
                }
            }, {
                key: "getMatchRooms",
                value: function(e, t) {
                    if (void 0 === this.allRooms)
                        return "[]";
                    var a;
                    return a = e.CONDITION.indexOf("locked") >= 0 ? this.allRooms.filter((function(t) {
                        return t.metadata.locked === ("locked" === e.CONDITION)
                    }
                    )) : this.allRooms,
                    JSON.stringify(a)
                }
            }, {
                key: "setMatchRoomToList",
                value: function(e, t) {
                    if ("empty" !== e.LIST) {
                        var a = t.target.lookupVariableById(e.LIST);
                        if (void 0 === a && (a = t.target.lookupVariableByNameAndType(e.LIST, "list")),
                        void 0 === a)
                            return;
                        e.LIST;
                        for (var o = [], r = 0; r < this.allRooms.length; r++)
                            if (0 === e.ROOM_INFO.indexOf("metadata.")) {
                                var n = e.ROOM_INFO.substr(9);
                                o.push(this.allRooms[r].metadata[n])
                            } else
                                "metadata" === e.ROOM_INFO ? o.push(JSON.stringify(this.allRooms[r][e.ROOM_INFO])) : "JSON" === e.ROOM_INFO ? o.push(JSON.stringify(this.allRooms[r])) : o.push(this.allRooms[r][e.ROOM_INFO]);
                        a.value = o
                    }
                }
            }, {
                key: "joinOrCreateMatch",
                value: function(e, t) {
                    e.ROOM = "match",
                    this.joinOrCreate(e, t)
                }
            }, {
                key: "joinOrCreateMatchAndWait",
                value: (s = I(p().mark((function e(t, a) {
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.ROOM = "match",
                                e.next = 3,
                                this.joinOrCreateAndWait(t, a);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "joinMatchmaking",
                value: function(e, t) {
                    this.joinMatchmakingAndWait(e, t).then((function() {}
                    )).catch((function(e) {}
                    ))
                }
            }, {
                key: "joinMatchmakingAndWait",
                value: (r = I(p().mark((function e(t, a) {
                    var o = this;
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.disconnectRoomAndWait();
                            case 2:
                                return e.next = 5,
                                this.client.joinById(t.ROOM_ID, {
                                    token: v("token"),
                                    name: this.ccwUserNickname,
                                    uuid: this.ccwUserUUID,
                                    gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID),
                                    extra: t.NAME
                                }).then((function(e) {
                                    o.currentRoom = e,
                                    o.currentRoomType = "match",
                                    e.sessionId,
                                    e.name,
                                    o.bindRoom(e, a),
                                    e.state,
                                    a.startHats("CCWMMO_dispatchRoomEnter", {})
                                }
                                )).catch((function(e) {
                                    (0,
                                    d.ZK)("JOIN ERROR", e)
                                }
                                ));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "setMatchRoomSize",
                value: function(e, t) {
                    void 0 !== this.currentRoom ? this.currentRoom.send("syscmd:maxClients", e.SIZE) : (0,
                    d.ZK)("setMatchRoomSize", "currentRoom is undefined")
                }
            }, {
                key: "lockRoom",
                value: function(e, t) {
                    void 0 !== this.currentRoom ? this.currentRoom.send("syscmd:lock", e.LOCK > 0) : (0,
                    d.ZK)("lockRoom", "currentRoom is undefined")
                }
            }],
            a && R(t.prototype, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
    ,
    9576: (e,t,a)=>{
        function o(e) {
            return function(e) {
                if (Array.isArray(e))
                    return n(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || r(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function r(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return n(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(e, t) : void 0
            }
        }
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, o = new Array(t); a < t; a++)
                o[a] = e[a];
            return o
        }
        a.d(t, {
            O3: ()=>d,
            ZK: ()=>M,
            g4: ()=>c,
            nC: ()=>i,
            vU: ()=>l
        });
        var s = function(e) {
            return e.map((function(e) {
                var t = e;
                if (e instanceof Object)
                    try {
                        t = JSON.stringify(e)
                    } catch (e) {
                        t = "TypeError: The message is abnormal and cannot be output."
                    }
                return t
            }
            ))
        }
          , i = function(e, t) {
            var a = {};
            return Object.entries(e).forEach((function(e) {
                var o, n, s = (n = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(o = e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var o, r, n = [], s = !0, i = !1;
                        try {
                            for (a = a.call(e); !(s = (o = a.next()).done) && (n.push(o.value),
                            !t || n.length !== t); s = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            r = e
                        } finally {
                            try {
                                s || null == a.return || a.return()
                            } finally {
                                if (i)
                                    throw r
                            }
                        }
                        return n
                    }
                }(o, n) || r(o, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), i = s[0], c = s[1];
                a["".concat(t, ".").concat(i)] = c
            }
            )),
            a
        }
          , c = function() {
            for (var e, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                a[r] = arguments[r];
            var n, i = ["[INFO] : "].concat(o(s(a))).join(" ");
            null === (e = document.GandiBridge) || void 0 === e || e.dispatchEvent(new CustomEvent("trace",{
                detail: {
                    message: i
                }
            })),
            (document.enableTrace || window.debugVM) && (n = console).info.apply(n, a)
        }
          , M = function() {
            for (var e, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                a[r] = arguments[r];
            var n, i = ["[WARNING] : "].concat(o(s(a))).join(" ");
            null === (e = document.GandiBridge) || void 0 === e || e.dispatchEvent(new CustomEvent("warn",{
                detail: {
                    message: i
                }
            })),
            document.enableTrace && (n = console).warn.apply(n, a)
        }
          , l = function() {
            for (var e, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                a[r] = arguments[r];
            var n, i = ["[ERROR] : "].concat(o(s(a))).join(" ");
            null === (e = document.GandiBridge) || void 0 === e || e.dispatchEvent(new CustomEvent("error",{
                detail: {
                    message: i
                }
            })),
            document.enableTrace && (n = console).error.apply(n, a)
        }
          , d = {
            ALL_TAG: "#GANDI_CONST_ALL_TAG#"
        }
    }
}]);
