/* Grabbed from https://static.xiguacity.cn/h1t86b7fg6c7k36wnt0cb30m/static/js/ccw_cappu_panel.54bf71d4.js */

"use strict";
(self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([[4213], {
    6969: (e,t,o)=>{
        o.r(t),
        o.d(t, {
            default: ()=>c
        });
        var n = o(3392)
          , r = o.n(n)
          , a = o(2264)
          , s = o(2798);
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var o = 0, n = new Array(t); o < t; o++)
                n[o] = e[o];
            return n
        }
        function l(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var u = "Cappu.panel";
        const c = function() {
            function e(t) {
                var o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.runtime = t,
                this._formatMessage = (o = {
                    en: {
                        name: "PanelGUI",
                        openDocs: "📖 Open Docs",
                        docsUrl: "",
                        "tag.props": "📊 Properties",
                        "tag.value": "🔍 Value",
                        "tag.control": "🕹️ Control",
                        "block.createGUI.message": "Create panel [NAME]",
                        "block.createGUI2.message": "Create panel [NAME] at [POSITION]",
                        "block.addStringPropertyTo.message": "Add string [PROPERTY] to [NAME] with default [DEFVAL]",
                        "block.addNumberPropertyTo.message": "Add number [PROPERTY] to [NAME] with default [DEFVAL]",
                        "block.addNumberPropertyTo2.message": "Add number [PROPERTY] to [NAME] with default [DEFVAL] min [MIN] max [MAX] step [STEP]",
                        "block.addBooleanPropertyTo.message": "Add boolean [PROPERTY] to [NAME] with default [DEFVAL]",
                        "block.addOptionsPropertyTo.message": "Add options [PROPERTY] to [NAME] with default [DEFVAL] and options [OPTIONS]",
                        "block.addButtonTo.message": "Add button [TITLE] to [NAME]",
                        "block.delProperty.message": "Delete property [PROPERTY] from [NAME]",
                        "block.readValue.message": "Read JSON value of panel [NAME]",
                        "block.readProperty.message": "Read property [PROPERTY] of panel [NAME]",
                        "block.listenProperty.message": "Listen to property [PROPERTY] of [NAME]",
                        "block.whenPropertyChange.message": "When property [PROPERTY] of panel [NAME] changes to [VALUE]",
                        "block.whenButtonClicked.message": "When button [TITLE] of panel [NAME] is clicked",
                        "block.mergeJSONToValue.message": "Merge JSON [DATA] into panel [NAME]",
                        "block.showGUI.message": "Show panel [NAME]",
                        "block.hideGUI.message": "Hide panel [NAME]",
                        "block.destroyGUI.message": "Destroy panel [NAME]",
                        "menu.positionTopRight": "Top Right",
                        "menu.positionCenter": "Center",
                        "menu.positionTopLeft": "Top Left",
                        "menu.positionBottomLeft": "Bottom Left",
                        "menu.positionBottomRight": "Bottom Right"
                    },
                    "zh-cn": {
                        name: "面板GUI",
                        openDocs: "📖 打开文档",
                        docsUrl: "",
                        "tag.props": "📊 属性",
                        "tag.value": "🔍 值",
                        "tag.control": "🕹️ 控制",
                        "block.createGUI.message": "创建面板 [NAME]",
                        "block.createGUI2.message": "创建面板 [NAME] 位于 [POSITION]",
                        "block.addStringPropertyTo.message": "在 [NAME] 中添加字符串 [PROPERTY] 默认值 [DEFVAL]",
                        "block.addNumberPropertyTo.message": "在 [NAME] 中添加数字 [PROPERTY] 默认值 [DEFVAL]",
                        "block.addNumberPropertyTo2.message": "在 [NAME] 中添加数字 [PROPERTY] 默认值 [DEFVAL] 最小值 [MIN] 最大值 [MAX] 步长 [STEP]",
                        "block.addBooleanPropertyTo.message": "在 [NAME] 中添加布尔 [PROPERTY] 默认值 [DEFVAL]",
                        "block.addOptionsPropertyTo.message": "在 [NAME] 中添加选项 [PROPERTY] 默认值 [DEFVAL] 选项 [OPTIONS]",
                        "block.addButtonTo.message": "在 [NAME] 中添加按钮 [TITLE]",
                        "block.delProperty.message": "从 [NAME] 中删除属性 [PROPERTY]",
                        "block.readValue.message": "读取面板 [NAME] 的 JSON 值",
                        "block.readProperty.message": "读取面板 [NAME] 的属性 [PROPERTY]",
                        "block.listenProperty.message": "监听 [NAME] 的属性 [PROPERTY]",
                        "block.whenPropertyChange.message": "当监听到面板 [NAME] 的属性 [PROPERTY] 变为 [VALUE] 时",
                        "block.whenButtonClicked.message": "当监听到面板 [NAME] 的按钮 [TITLE] 被点击时",
                        "block.mergeJSONToValue.message": "将 JSON [DATA] 合并到面板 [NAME]",
                        "block.showGUI.message": "显示面板 [NAME]",
                        "block.hideGUI.message": "隐藏面板 [NAME]",
                        "block.destroyGUI.message": "销毁面板 [NAME]",
                        "menu.positionTopRight": "右上角",
                        "menu.positionCenter": "中间",
                        "menu.positionTopLeft": "左上角",
                        "menu.positionBottomLeft": "左下角",
                        "menu.positionBottomRight": "右下角"
                    }
                },
                Object.keys(o).forEach((function(e) {
                    var t = o[e];
                    o[e] = {},
                    Object.keys(t).forEach((function(n) {
                        o[e]["".concat(u, ".").concat(n)] = t[n]
                    }
                    ))
                }
                )),
                this.runtime.getFormatMessage(o)),
                this._inputParent = function() {
                    try {
                        var e = t.renderer.canvas;
                        if (e instanceof HTMLCanvasElement)
                            return e.parentElement
                    } catch (e) {
                        return null
                    }
                }
                ,
                this.gui = {}
            }
            var t, o;
            return t = e,
            (o = [{
                key: "fm",
                value: function(e) {
                    return e = "".concat(u, ".").concat(e),
                    this._formatMessage({
                        id: e,
                        default: e,
                        description: e
                    })
                }
            }, {
                key: "getHats",
                value: function() {
                    return {
                        "Cappu.panel_whenPropertyChange": {},
                        "Cappu.panel_whenButtonClicked": {}
                    }
                }
            }, {
                key: "getInfo",
                value: function() {
                    var e = {
                        hideFromPalette: !0,
                        opcode: "createGUI",
                        blockType: "command",
                        text: this.fm("block.createGUI.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , t = {
                        opcode: "createGUI2",
                        blockType: "command",
                        text: this.fm("block.createGUI2.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            POSITION: {
                                type: "string",
                                menu: "POSITION"
                            }
                        }
                    }
                      , o = {
                        opcode: "addStringPropertyTo",
                        blockType: "command",
                        text: this.fm("block.addStringPropertyTo.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "str"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            DEFVAL: {
                                type: "string",
                                defaultValue: "hello"
                            }
                        }
                    }
                      , n = {
                        opcode: "addNumberPropertyTo",
                        blockType: "command",
                        text: this.fm("block.addNumberPropertyTo.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "num"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            DEFVAL: {
                                type: "number",
                                defaultValue: 0
                            }
                        }
                    }
                      , r = {
                        opcode: "addNumberPropertyTo2",
                        blockType: "command",
                        text: this.fm("block.addNumberPropertyTo2.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "num2"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            DEFVAL: {
                                type: "number",
                                defaultValue: 0
                            },
                            MIN: {
                                type: "number",
                                defaultValue: 0
                            },
                            MAX: {
                                type: "number",
                                defaultValue: 100
                            },
                            STEP: {
                                type: "number",
                                defaultValue: 1
                            }
                        }
                    }
                      , a = {
                        opcode: "addBooleanPropertyTo",
                        blockType: "command",
                        text: this.fm("block.addBooleanPropertyTo.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "bool"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            DEFVAL: {
                                type: "string",
                                defaultValue: "true"
                            }
                        }
                    }
                      , i = {
                        opcode: "addOptionsPropertyTo",
                        blockType: "command",
                        text: this.fm("block.addOptionsPropertyTo.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "option"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            },
                            OPTIONS: {
                                type: "string",
                                defaultValue: '{"one":1,"two":2,"three":3}'
                            },
                            DEFVAL: {
                                type: "string",
                                defaultValue: "1"
                            }
                        }
                    }
                      , l = {
                        opcode: "addButtonTo",
                        blockType: "command",
                        text: this.fm("block.addButtonTo.message"),
                        arguments: {
                            TITLE: {
                                type: "string",
                                defaultValue: "button"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , c = {
                        opcode: "delProperty",
                        blockType: "command",
                        text: this.fm("block.delProperty.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "str"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , p = {
                        opcode: "readValue",
                        blockType: "reporter",
                        text: this.fm("block.readValue.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , m = {
                        opcode: "readProperty",
                        blockType: "reporter",
                        text: this.fm("block.readProperty.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "str"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , d = {
                        opcode: "listenProperty",
                        blockType: "command",
                        text: this.fm("block.listenProperty.message"),
                        arguments: {
                            PROPERTY: {
                                type: "string",
                                defaultValue: "str"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , g = {
                        opcode: "whenPropertyChange",
                        blockType: "hat",
                        isEdgeActivated: !1,
                        text: this.fm("block.whenPropertyChange.message"),
                        arguments: {
                            NAME: {
                                type: "ccw_hat_parameter"
                            },
                            PROPERTY: {
                                type: "ccw_hat_parameter"
                            },
                            VALUE: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , y = {
                        opcode: "whenButtonClicked",
                        blockType: "hat",
                        isEdgeActivated: !1,
                        text: this.fm("block.whenButtonClicked.message"),
                        arguments: {
                            NAME: {
                                type: "ccw_hat_parameter"
                            },
                            TITLE: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , f = {
                        opcode: "mergeJSONToValue",
                        blockType: "command",
                        text: this.fm("block.mergeJSONToValue.message"),
                        arguments: {
                            DATA: {
                                type: "string",
                                defaultValue: "{}"
                            },
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , h = {
                        opcode: "showGUI",
                        blockType: "command",
                        text: this.fm("block.showGUI.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , P = {
                        opcode: "hideGUI",
                        blockType: "command",
                        text: this.fm("block.hideGUI.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    }
                      , E = {
                        opcode: "destroyGUI",
                        blockType: "command",
                        text: this.fm("block.destroyGUI.message"),
                        arguments: {
                            NAME: {
                                type: "string",
                                defaultValue: "setting"
                            }
                        }
                    };
                    return {
                        id: u,
                        name: this.fm("name"),
                        docsURI: this.fm("docsUrl"),
                        blockIconURI: s.Z,
                        menuIconURI: s.Z,
                        color1: "#56b98f",
                        color2: "#56b98f",
                        blocks: ["---".concat(this.fm("tag.props")), e, t, o, n, r, a, i, l, c, "---".concat(this.fm("tag.value")), p, m, d, g, y, f, "---".concat(this.fm("tag.control")), h, P, E],
                        menus: {
                            POSITION: {
                                items: [{
                                    text: this.fm("menu.positionTopRight"),
                                    value: "topRight"
                                }, {
                                    text: this.fm("menu.positionCenter"),
                                    value: "center"
                                }, {
                                    text: this.fm("menu.positionTopLeft"),
                                    value: "topLeft"
                                }, {
                                    text: this.fm("menu.positionBottomLeft"),
                                    value: "bottomLeft"
                                }, {
                                    text: this.fm("menu.positionBottomRight"),
                                    value: "bottomRight"
                                }]
                            }
                        }
                    }
                }
            }, {
                key: "_updatePosition",
                value: function(e) {
                    var t = this
                      , o = this.gui[e] || {}
                      , n = o.pane
                      , r = o.position
                      , a = o.scale;
                    if (n) {
                        switch (void 0 === a && (a = 1),
                        n.element.style.position = "absolute",
                        r) {
                        case "topLeft":
                            n.element.style.top = "10px",
                            n.element.style.bottom = "",
                            n.element.style.left = "10px",
                            n.element.style.right = "",
                            n.element.style.transform = "scale(".concat(a, ")"),
                            n.element.style.transformOrigin = "top left";
                            break;
                        case "bottomLeft":
                            n.element.style.top = "",
                            n.element.style.bottom = "10px",
                            n.element.style.left = "10px",
                            n.element.style.right = "",
                            n.element.style.transform = "scale(".concat(a, ")"),
                            n.element.style.transformOrigin = "bottom left";
                            break;
                        case "bottomRight":
                            n.element.style.top = "",
                            n.element.style.bottom = "10px",
                            n.element.style.left = "",
                            n.element.style.right = "10px",
                            n.element.style.transform = "scale(".concat(a, ")"),
                            n.element.style.transformOrigin = "bottom right";
                            break;
                        case "center":
                            n.element.style.top = "50%",
                            n.element.style.bottom = "",
                            n.element.style.left = "50%",
                            n.element.style.right = "",
                            n.element.style.transform = "translate(-50%, -50%) scale(".concat(a, ")"),
                            n.element.style.transformOrigin = "";
                            break;
                        case "topRight":
                            n.element.style.top = "10px",
                            n.element.style.bottom = "",
                            n.element.style.left = "",
                            n.element.style.right = "10px",
                            n.element.style.transform = "scale(".concat(a, ")"),
                            n.element.style.transformOrigin = "top right"
                        }
                        n.element.style.zIndex = "1000",
                        void 0 === this.resizeObserver && (this.resizeObserver = new ResizeObserver((function(e) {
                            var o, n = function(e, t) {
                                var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!o) {
                                    if (Array.isArray(e) || (o = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return i(e, t);
                                            var o = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === o && e.constructor && (o = e.constructor.name),
                                            "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(e, t) : void 0
                                        }
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        o && (e = o);
                                        var n = 0
                                          , r = function() {};
                                        return {
                                            s: r,
                                            n: function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: r
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var a, s = !0, l = !1;
                                return {
                                    s: function() {
                                        o = o.call(e)
                                    },
                                    n: function() {
                                        var e = o.next();
                                        return s = e.done,
                                        e
                                    },
                                    e: function(e) {
                                        l = !0,
                                        a = e
                                    },
                                    f: function() {
                                        try {
                                            s || null == o.return || o.return()
                                        } finally {
                                            if (l)
                                                throw a
                                        }
                                    }
                                }
                            }(e);
                            try {
                                var r = function() {
                                    var e = o.value.contentRect.width;
                                    Object.keys(t.gui).forEach((function(o) {
                                        if (t._inputParent() !== t.gui[o].pane.containerElem_)
                                            return t.destroyGUI({
                                                NAME: o
                                            }),
                                            t.resizeObserver.disconnect(),
                                            void (t.resizeObserver = void 0);
                                        t.gui[o].scale = e / 600,
                                        t._updatePosition(o)
                                    }
                                    ))
                                };
                                for (n.s(); !(o = n.n()).done; )
                                    r()
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                        )),
                        this.resizeObserver.observe(this._inputParent(), {
                            attributes: !0,
                            attributeFilter: ["style"]
                        }))
                    }
                }
            }, {
                key: "createGUI",
                value: function(e) {
                    var t = e.NAME;
                    this.createGUI2({
                        NAME: t,
                        POSITION: "topRight"
                    })
                }
            }, {
                key: "createGUI2",
                value: function(e) {
                    var t = e.NAME
                      , o = e.POSITION;
                    if (this.gui.hasOwnProperty(t))
                        return this.gui[t].position = o,
                        void this._updatePosition(t);
                    var n = new a.X6({
                        title: t,
                        container: this._inputParent()
                    });
                    this.gui[t] = {
                        pane: n,
                        obj: {},
                        controllers: {},
                        position: o,
                        scale: this._inputParent().offsetWidth / 600
                    },
                    this._updatePosition(t)
                }
            }, {
                key: "addStringPropertyTo",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = e.DEFVAL
                      , a = this.gui[o] || {}
                      , s = a.pane
                      , i = a.obj
                      , l = a.controllers;
                    s && (i.hasOwnProperty(t) && this.delProperty({
                        PROPERTY: t,
                        NAME: o
                    }),
                    i[t] = r().toString(n),
                    l[t] = s.addBinding(i, t))
                }
            }, {
                key: "addNumberPropertyTo",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = e.DEFVAL
                      , a = this.gui[o] || {}
                      , s = a.pane
                      , i = a.obj
                      , l = a.controllers;
                    s && (i.hasOwnProperty(t) && this.delProperty({
                        PROPERTY: t,
                        NAME: o
                    }),
                    i[t] = r().toNumber(n),
                    l[t] = s.addBinding(i, t, {
                        step: 1
                    }))
                }
            }, {
                key: "addNumberPropertyTo2",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = e.DEFVAL
                      , a = e.MIN
                      , s = e.MAX
                      , i = e.STEP
                      , l = this.gui[o] || {}
                      , u = l.pane
                      , c = l.obj
                      , p = l.controllers;
                    u && (c.hasOwnProperty(t) && this.delProperty({
                        PROPERTY: t,
                        NAME: o
                    }),
                    c[t] = r().toNumber(n),
                    p[t] = u.addBinding(c, t, {
                        min: r().toNumber(a),
                        max: r().toNumber(s),
                        step: r().toNumber(i)
                    }))
                }
            }, {
                key: "addBooleanPropertyTo",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = e.DEFVAL
                      , a = this.gui[o] || {}
                      , s = a.pane
                      , i = a.obj
                      , l = a.controllers;
                    s && (i.hasOwnProperty(t) && this.delProperty({
                        PROPERTY: t,
                        NAME: o
                    }),
                    i[t] = r().toBoolean(n),
                    l[t] = s.addBinding(i, t))
                }
            }, {
                key: "addOptionsPropertyTo",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = e.OPTIONS
                      , r = e.DEFVAL
                      , a = this.gui[o] || {}
                      , s = a.pane
                      , i = a.obj
                      , l = a.controllers;
                    if (s) {
                        i.hasOwnProperty(t) && this.delProperty({
                            PROPERTY: t,
                            NAME: o
                        });
                        try {
                            r = JSON.parse(r)
                        } catch (e) {}
                        try {
                            n = JSON.parse(n),
                            i[t] = r,
                            l[t] = s.addBinding(i, t, {
                                options: n
                            })
                        } catch (e) {}
                    }
                }
            }, {
                key: "addButtonTo",
                value: function(e, t) {
                    var o = e.TITLE
                      , n = e.NAME
                      , r = this.gui[n] || {}
                      , a = r.pane
                      , s = r.controllers;
                    if (a && !s.hasOwnProperty(o)) {
                        var i = a.addButton({
                            title: o
                        });
                        i.on("click", (function() {
                            t.startHatsWithParams("Cappu.panel_whenButtonClicked", {
                                parameters: {
                                    NAME: n,
                                    TITLE: o
                                }
                            })
                        }
                        )),
                        s[o] = i
                    }
                }
            }, {
                key: "delProperty",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = this.gui[o] || {}
                      , r = n.pane
                      , a = n.obj
                      , s = n.controllers;
                    if (r) {
                        var i = s[t];
                        i && (r.remove(i),
                        delete s[t],
                        delete a[t])
                    }
                }
            }, {
                key: "readValue",
                value: function(e) {
                    var t = e.NAME
                      , o = (this.gui[t] || {}).obj;
                    return o ? JSON.stringify(o) : ""
                }
            }, {
                key: "readProperty",
                value: function(e) {
                    var t = e.PROPERTY
                      , o = e.NAME
                      , n = (this.gui[o] || {}).obj;
                    return n && n.hasOwnProperty(t) ? n[t] : ""
                }
            }, {
                key: "listenProperty",
                value: function(e, t) {
                    var o = e.PROPERTY
                      , n = e.NAME
                      , r = this.gui[n] || {}
                      , a = r.pane
                      , s = (r.obj,
                    r.controllers);
                    if (a) {
                        var i = s[o];
                        i && i.on("change", (function(e) {
                            e.last && t.startHatsWithParams("Cappu.panel_whenPropertyChange", {
                                parameters: {
                                    NAME: n,
                                    PROPERTY: o,
                                    VALUE: e.value
                                }
                            })
                        }
                        ))
                    }
                }
            }, {
                key: "whenPropertyChange",
                value: function(e) {
                    return !0
                }
            }, {
                key: "whenButtonClicked",
                value: function(e) {
                    return !0
                }
            }, {
                key: "mergeJSONToValue",
                value: function(e) {
                    var t = e.NAME
                      , o = e.DATA
                      , n = this.gui[t] || {}
                      , r = n.pane
                      , a = n.obj
                      , s = n.controllers;
                    if (r) {
                        try {
                            o = JSON.parse(o)
                        } catch (e) {
                            return
                        }
                        Object.keys(o).forEach((function(e) {
                            if (a.hasOwnProperty(e)) {
                                a[e] = o[e];
                                var t = s[e];
                                t && t.refresh()
                            } else
                                a[e] = o[e],
                                s[e] = r.addBinding(a, e)
                        }
                        ))
                    }
                }
            }, {
                key: "showGUI",
                value: function(e) {
                    var t = e.NAME
                      , o = (this.gui[t] || {}).pane;
                    o && (o.hidden = !1)
                }
            }, {
                key: "hideGUI",
                value: function(e) {
                    var t = e.NAME
                      , o = (this.gui[t] || {}).pane;
                    o && (o.hidden = !0)
                }
            }, {
                key: "destroyGUI",
                value: function(e) {
                    var t = e.NAME
                      , o = (this.gui[t] || {}).pane;
                    o && (o.dispose(),
                    delete this.gui[t])
                }
            }]) && l(t.prototype, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
}]);
