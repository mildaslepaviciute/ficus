(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 137, 9, 15 ], {
    "/Uc3": function(e, t, n) {
        "use strict";
        var r = n("mGku").default.extend({
            props: {
                wrapperClasses: {
                    type: Array
                },
                isInFocus: {
                    type: Boolean
                },
                isPlaceholder: {
                    type: Boolean,
                    default: !1
                },
                hasNoConstraints: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    didTransitionEnd: !1
                };
            },
            watch: {
                isInFocus: function(e) {
                    e ? this.$el.focus() : this.$el.blur();
                }
            },
            mounted: function() {
                var e = this.$refs.overlay;
                e && (e.addEventListener("transitionend", this.toggleTransitionState), e.addEventListener("transitionstart", this.toggleTransitionState));
            },
            beforeDestroy: function() {
                var e = this.$refs.overlay;
                e && (e.removeEventListener("transitionend", this.toggleTransitionState), e.removeEventListener("transitionstart", this.toggleTransitionState));
            },
            methods: {
                toggleTransitionState: function(e) {
                    this.didTransitionEnd = "transitionend" === e.type;
                }
            }
        }), o = n("FKtz"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e, t, n, r, o = this, i = o.$createElement, a = o._self._c || i;
            return a("div", {
                ref: "root",
                class: [ o.$style.cover, (e = {}, e[o.$style.focused] = o.isInFocus, e) ]
            }, [ a("div", {
                class: [ o.$style.wrapper, o.wrapperClasses, (t = {}, t[o.$style.noConstraints] = o.hasNoConstraints, 
                t) ]
            }, [ a("div", {
                ref: "content",
                class: [ o.$style.content, (n = {}, n["" + o.$style.searchLoadingPlaceholder] = o.isPlaceholder, 
                n) ]
            }, [ o._t("content", null, {
                hoverClass: o.$style.showOnHover
            }) ], 2), o.$slots.hoverOverlay || o.$scopedSlots.hoverOverlay ? a("div", {
                ref: "overlay",
                class: [ o.$style.overlay, o.$style.showOnHover, (r = {}, r[o.$style.transitionDone] = o.didTransitionEnd, 
                r) ]
            }, [ o._t("hoverOverlay") ], 2) : o._e(), o.$slots.alwaysVisibleOverlay || o.$scopedSlots.alwaysVisibleOverlay ? a("div", {
                class: o.$style.overlay
            }, [ o._t("alwaysVisibleOverlay", null, {
                hoverClass: o.$style.showOnHover
            }) ], 2) : o._e() ]) ]);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    "02HT": function(e, t, n) {
        "use strict";
        var r = n("7ldm"), o = n.n(r);
        t.default = o.a;
    },
    "18mY": function(e, t, n) {
        "use strict";
        n("jQ3i");
        var r = {
            Vector: "spinner-vector"
        }, o = {
            data: function() {
                return {
                    svgId: "spinner-" + Date.now(),
                    testIds: r
                };
            },
            props: {
                text: {
                    type: String,
                    required: !1
                },
                autofill: {
                    type: Boolean,
                    default: !1
                },
                color: {
                    type: String,
                    default: "blue",
                    validator: function(e) {
                        return [ "white", "blue" ].includes(e);
                    }
                }
            }
        }, i = n("ayNN"), a = n("K+aO");
        var s = Object(a.default)(o, (function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                ref: "spinnerContainer",
                staticClass: "vc-Spinner rf-spinner",
                class: (e = {}, e[n.$style.standaloneSpinner] = !n.text && !n.autofill, e)
            }, [ o("svg", {
                class: [ (t = {}, t[n.$style.autofill] = n.autofill, t), "rf-spinner__spinner" ],
                attrs: {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 200 200",
                    preserveAspectRatio: "xMinYMin meet",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [ o("defs", [ o("linearGradient", {
                attrs: {
                    id: n.svgId,
                    x1: "0%",
                    y1: "0%",
                    x2: "65%",
                    y2: "0%"
                }
            }, [ o("stop", {
                ref: "def1",
                class: n.$style[n.color],
                attrs: {
                    offset: "0%"
                }
            }), o("stop", {
                ref: "def2",
                class: n.$style[n.color],
                attrs: {
                    offset: "100%",
                    "stop-opacity": "0"
                }
            }) ], 1) ], 1), o("circle", {
                attrs: {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "transparent",
                    stroke: "url(#" + n.svgId + ")",
                    "stroke-width": "20"
                }
            }) ]), n.text ? o("p", {
                ref: "text",
                staticClass: "rf-spinner__text"
            }, [ n._v(n._s(n.text)) ]) : n._e() ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        t.a = s.exports;
    },
    "1dHU": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Tooltip-wrapper-1-L {\n  align-self: flex-start;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: -6px;\n  padding-bottom: 6px;\n  position: relative;\n}\n@media (max-width: 921px) {\n.Tooltip-wrapper-1-L:not(.Tooltip-responsive-62L) .Tooltip-container-16j {\n      display: none;\n}\n}\n.Tooltip-textWrapper-vZ2 {\n  display: block;\n}\n.Tooltip-fullWidth-1Ia {\n  width: 100%;\n}\n.Tooltip-trigger-jyf {\n  display: -webkit-box;\n  display: flex;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.Tooltip-blockLayoutTrigger-2oH {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.Tooltip-container-16j {\n  background-color: #fff;\n  border-radius: 3px;\n  color: #191919;\n  -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n  position: absolute;\n  will-change: transform;\n  z-index: 100;\n}\n.Tooltip-container-16j.Tooltip-darkMode-18s {\n    background: #191919;\n    color: #fff;\n}\n.Tooltip-container-16j:not(.Tooltip-fullWidth-1Ia) {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n.Tooltip-container-16j .Tooltip-triangleContainer-3M8 {\n    position: absolute;\n}\n.Tooltip-container-16j .Tooltip-mask-34T {\n    background: #fff;\n    height: 6px;\n    left: -2px;\n    position: relative;\n    width: 16px;\n}\n.Tooltip-container-16j.Tooltip-right-1D- {\n    right: calc(100% + 7px);\n}\n.Tooltip-container-16j.Tooltip-position-left-1qO {\n    right: 0;\n    top: 0;\n}\n.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangleContainer-3M8 {\n      right: -11px;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangle-TU6 {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-right-color: #fff;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-triangle-TU6.Tooltip-darkMode-18s {\n        border-color: transparent;\n        border-style: solid;\n        border-width: 7px;\n        height: 0;\n        position: absolute;\n        width: 0;\n        border-right-color: #191919;\n}\n.Tooltip-container-16j.Tooltip-position-left-1qO .Tooltip-mask-34T {\n      top: -6px;\n}\n.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangleContainer-3M8 {\n    bottom: -6px;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangle-TU6 {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-triangle-TU6.Tooltip-darkMode-18s {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-top-color: #191919;\n}\n.Tooltip-container-16j.Tooltip-position-top-XKQ .Tooltip-mask-34T {\n    top: -6px;\n}\n.Tooltip-container-16j.Tooltip-position-center-2Ce {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    margin-top: -3px;\n}\n.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangleContainer-3M8 {\n    margin-top: -6px;\n    right: 0;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangle-TU6 {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-triangle-TU6.Tooltip-darkMode-18s {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-top-color: #191919;\n}\n.Tooltip-container-16j.Tooltip-position-center-2Ce.Tooltip-right-1D- .Tooltip-mask-34T {\n    display: none;\n}\n.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangleContainer-3M8 {\n    top: -12px;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangle-TU6 {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-bottom-color: #fff;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-triangle-TU6.Tooltip-darkMode-18s {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-bottom-color: #191919;\n}\n.Tooltip-container-16j.Tooltip-position-bottom-3Xy .Tooltip-mask-34T {\n    top: 12px;\n}\n.Tooltip-container-16j.Tooltip-position-right-3tL {\n    top: -5px;\n}\n.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangleContainer-3M8 {\n      left: -10px;\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n}\n.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangle-TU6 {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-right-color: #fff;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-triangle-TU6.Tooltip-darkMode-18s {\n        border-color: transparent;\n        border-style: solid;\n        border-width: 7px;\n        height: 0;\n        position: absolute;\n        width: 0;\n        border-right-color: #191919;\n}\n.Tooltip-container-16j.Tooltip-position-right-3tL .Tooltip-mask-34T {\n      bottom: 6px;\n}\n.Tooltip-darkMode-18s .Tooltip-mask-34T {\n  background: #191919;\n}\n.Tooltip-closeIconWrapper-3gu {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n}\n.Tooltip-closeIcon-v4J {\n  fill: #959595;\n  width: 10px;\n}\n.Tooltip-closeIcon-v4J:hover {\n    fill: #696969;\n}\n", "" ]), 
        t.locals = {
            wrapper: "Tooltip-wrapper-1-L",
            responsive: "Tooltip-responsive-62L",
            container: "Tooltip-container-16j",
            textWrapper: "Tooltip-textWrapper-vZ2",
            fullWidth: "Tooltip-fullWidth-1Ia",
            trigger: "Tooltip-trigger-jyf",
            blockLayoutTrigger: "Tooltip-blockLayoutTrigger-2oH",
            darkMode: "Tooltip-darkMode-18s",
            triangleContainer: "Tooltip-triangleContainer-3M8",
            mask: "Tooltip-mask-34T",
            right: "Tooltip-right-1D-",
            "position-left": "Tooltip-position-left-1qO",
            triangle: "Tooltip-triangle-TU6",
            "position-top": "Tooltip-position-top-XKQ",
            "position-center": "Tooltip-position-center-2Ce",
            "position-bottom": "Tooltip-position-bottom-3Xy",
            "position-right": "Tooltip-position-right-3tL",
            closeIconWrapper: "Tooltip-closeIconWrapper-3gu",
            closeIcon: "Tooltip-closeIcon-v4J"
        };
    },
    "1vEe": function(e, t, n) {
        "use strict";
        var r = n("kGXm"), o = n.n(r);
        t.default = o.a;
    },
    "20Ii": function(e, t, n) {
        var r = n("1dHU");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("1d4b4edd", r, !0, {});
    },
    "2UUx": function(e, t, n) {
        var r = n("xnCs");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("14e53ada", r, !0, {});
    },
    "2gZs": function(e, t, n) {
        e.exports = n("ydjK")("2gZs");
    },
    "3OlK": function(e, t, n) {
        var r = n("Iync");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("20a7434e", r, !0, {});
    },
    "4qDW": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".CollectionEdit-root-XLa .CollectionEdit-cogContainer-hzr {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  padding: 3px 14px;\n}\n.CollectionEdit-iconContainer-1Hb {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.CollectionEdit-editIcon-25C {\n  margin-top: 2px;\n}\n.CollectionEdit-triangle-Ih4 {\n  display: inline-block;\n  height: 15px;\n  margin: 0 0 5px 9px;\n  position: relative;\n  top: 3px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.CollectionEdit-dropdown-29_ {\n  min-width: 170px;\n}\n.CollectionEdit-menuItem-2tH {\n  white-space: nowrap;\n}\n", "" ]), 
        t.locals = {
            root: "CollectionEdit-root-XLa",
            cogContainer: "CollectionEdit-cogContainer-hzr",
            iconContainer: "CollectionEdit-iconContainer-1Hb",
            editIcon: "CollectionEdit-editIcon-25C",
            triangle: "CollectionEdit-triangle-Ih4",
            dropdown: "CollectionEdit-dropdown-29_",
            menuItem: "CollectionEdit-menuItem-2tH"
        };
    },
    5732: function(e, t, n) {
        "use strict";
        var r = n("KZO9"), o = n.n(r);
        t.default = o.a;
    },
    "5zVt": function(e, t, n) {
        "use strict";
        var r = n("NvIi"), o = n("rF8O"), i = {
            components: {
                GearIcon: r.a,
                Tooltip: o.a
            },
            props: {
                menuOptions: Array,
                link: String,
                alignment: {
                    type: String,
                    default: "right"
                }
            }
        }, a = n("VGNt"), s = n("K+aO");
        var l = Object(s.default)(i, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ e.link ? n("div", {
                class: e.$style.cogContainer
            }, [ n("a", {
                class: e.$style.cogAndArrow,
                attrs: {
                    href: e.link
                }
            }, [ n("GearIcon", {
                class: e.$style.cog
            }) ], 1) ]) : n("Tooltip", {
                ref: "tooltip",
                class: e.$style.cogContainer,
                attrs: {
                    horizontalPadding: 0,
                    position: "bottom",
                    alignment: e.alignment,
                    isResponsive: !0
                }
            }, [ n("div", {
                class: e.$style.cogAndArrow
            }, [ n("GearIcon", {
                class: e.$style.cog
            }), n("div", {
                class: e.$style.downArrow
            }) ], 1), n("ul", {
                class: e.$style.dropdown,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ e._t("default") ], 2) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = a.default.locals || a.default;
        }), null, null);
        t.a = l.exports;
    },
    6319: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r;
        }));
        n("jwue"), n("lTEL"), n("+KXO"), n("7x/C"), n("DZ+c"), n("87if"), n("+oxZ"), n("kYxP"), 
        n("Cm4o");
        function r(e, t) {
            if (!t) return e;
            try {
                var n = new URL(e);
                return Object.keys(t).forEach((function(e) {
                    return n.searchParams.set(e, t[e]);
                })), n.toString();
            } catch (t) {
                return e;
            }
        }
    },
    "6Jbj": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".ProjectCoverNeue-image-1MZ {\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n.ProjectCoverNeue-image-1MZ,\n.ProjectCoverNeue-coverLink-102.ProjectCoverNeue-coverLink-102 {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ProjectCoverNeue-details-yQ_ {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n}\n.ProjectCoverNeue-info-4Ul {\n  min-width: 0;\n  padding-right: 15px;\n  text-align: left;\n}\n.ProjectCoverNeue-icon-vNS {\n  margin-right: 5px;\n}\n.ProjectCoverNeue-icon-vNS:not(:first-child) {\n    margin-left: 12px;\n}\n.ProjectCoverNeue-controlsAndPrivacyContainer-20r {\n  display: -webkit-box;\n  display: flex;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 1;\n}\n.ProjectCoverNeue-privacyLockContainer-1Jv {\n  position: absolute;\n  right: 0;\n}\n.ProjectCoverNeue-coverWithFlags-1Aq:hover .ProjectCoverNeue-privacyLockContainer-1Jv {\n    display: none;\n}\n.ProjectCoverNeue-wrapper-27j {\n  background-color: #f2f2f2;\n  position: relative;\n}\n.ProjectCoverNeue-root-166 {\n  position: relative;\n}\n.ProjectCoverNeue-flagged-aC4 .ProjectCoverNeue-visibleStatsAndOwners-2Av,\n.ProjectCoverNeue-flagged-aC4 .ProjectCoverNeue-cover-3Ni {\n  opacity: 0;\n  z-index: -1;\n}\n.ProjectCoverNeue-root-166:not(.ProjectCoverNeue-noConstraints-1Mx) {\n  max-width: 404px;\n  min-width: 145px;\n}\n.ProjectCoverNeue-statsVisible-19j {\n  position: relative;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-details-yQ_ {\n    padding-bottom: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    min-height: 45px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-ownersContainer-3Go {\n      -webkit-box-flex: 1;\n              flex: 1;\n      max-width: calc(404px - 130px);\n      min-width: 0;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-owners-1qo {\n      font-size: 13px;\n      font-weight: bold;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK {\n    color: #696969;\n    margin-left: 10px;\n    margin-top: 2px;\n    max-width: 130px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK .ProjectCoverNeue-icon-vNS {\n      fill: #696969;\n}\n.ProjectCoverNeue-details-yQ_ {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(81%, rgba(0, 0, 0, 0.6)));\n  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 81%);\n  margin-top: auto;\n  padding: 30px 15px 18px;\n  border-radius: 0 0 4px 4px;\n  flex-shrink: 0;\n}\n.ProjectCoverNeue-image-1MZ {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  width: 100%;\n  will-change: transform;\n}\n.ProjectCoverNeue-loaded-26R .ProjectCoverNeue-image-1MZ {\n    will-change: auto;\n}\n.ProjectCoverNeue-draftControls-2_f,\n.ProjectCoverNeue-draftDetails-27O {\n  background: rgba(0, 0, 0, 0.5);\n}\n.ProjectCoverNeue-draftDetails-27O {\n  padding-top: 0;\n}\n.ProjectCoverNeue-draftControls-2_f {\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 4px 4px 0 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.ProjectCoverNeue-draftControl-25C {\n  margin-bottom: 10px;\n  min-width: 150px;\n}\n.ProjectCoverNeue-draftControlText-2Pk {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.ProjectCoverNeue-draftModified-1qY {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.ProjectCoverNeue-curationMarks-3rK {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 15px;\n  width: 100%;\n}\n.ProjectCoverNeue-curationMark-2t6 {\n  background: #fff;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 2px 2px 0;\n  padding: 5px 7px;\n}\n.ProjectCoverNeue-served-zg8 {\n  color: #f00;\n}\n.ProjectCoverNeue-queued-nKO {\n  background: #00d646;\n  color: #fff;\n}\n.ProjectCoverNeue-topRight-Ob1 {\n  max-width: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 603px) {\n.ProjectCoverNeue-hideDetailsMobile-10a {\n    display: none;\n}\n}\n.ProjectCoverNeue-icon-vNS {\n  fill: #fff;\n  position: relative;\n}\n.ProjectCoverNeue-appreciateIcon-WrB {\n  top: -2px;\n}\n.ProjectCoverNeue-viewsIcon-2EU {\n  top: -1px;\n}\n.ProjectCoverNeue-featureFlagsContainer-312 {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  z-index: 2;\n}\n.ProjectCoverNeue-feature-1Du {\n  margin-left: 10px;\n}\n", "" ]), 
        t.locals = {
            image: "ProjectCoverNeue-image-1MZ",
            coverLink: "ProjectCoverNeue-coverLink-102",
            details: "ProjectCoverNeue-details-yQ_",
            info: "ProjectCoverNeue-info-4Ul",
            icon: "ProjectCoverNeue-icon-vNS",
            controlsAndPrivacyContainer: "ProjectCoverNeue-controlsAndPrivacyContainer-20r",
            privacyLockContainer: "ProjectCoverNeue-privacyLockContainer-1Jv",
            coverWithFlags: "ProjectCoverNeue-coverWithFlags-1Aq",
            wrapper: "ProjectCoverNeue-wrapper-27j",
            root: "ProjectCoverNeue-root-166",
            flagged: "ProjectCoverNeue-flagged-aC4",
            visibleStatsAndOwners: "ProjectCoverNeue-visibleStatsAndOwners-2Av",
            cover: "ProjectCoverNeue-cover-3Ni",
            noConstraints: "ProjectCoverNeue-noConstraints-1Mx",
            statsVisible: "ProjectCoverNeue-statsVisible-19j",
            ownersContainer: "ProjectCoverNeue-ownersContainer-3Go",
            owners: "ProjectCoverNeue-owners-1qo",
            visibleStats: "ProjectCoverNeue-visibleStats-1lK",
            loaded: "ProjectCoverNeue-loaded-26R",
            draftControls: "ProjectCoverNeue-draftControls-2_f",
            draftDetails: "ProjectCoverNeue-draftDetails-27O",
            draftControl: "ProjectCoverNeue-draftControl-25C",
            draftControlText: "ProjectCoverNeue-draftControlText-2Pk",
            draftModified: "ProjectCoverNeue-draftModified-1qY",
            curationMarks: "ProjectCoverNeue-curationMarks-3rK",
            curationMark: "ProjectCoverNeue-curationMark-2t6",
            served: "ProjectCoverNeue-served-zg8",
            queued: "ProjectCoverNeue-queued-nKO",
            topRight: "ProjectCoverNeue-topRight-Ob1",
            hideDetailsMobile: "ProjectCoverNeue-hideDetailsMobile-10a",
            appreciateIcon: "ProjectCoverNeue-appreciateIcon-WrB",
            viewsIcon: "ProjectCoverNeue-viewsIcon-2EU",
            featureFlagsContainer: "ProjectCoverNeue-featureFlagsContainer-312",
            feature: "ProjectCoverNeue-feature-1Du"
        };
    },
    "6QaK": function(e, t, n) {
        e.exports = n("ydjK")("6QaK");
    },
    "6S3h": function(e, t, n) {
        "use strict";
        var r = n("K+aO"), o = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 125.8 291.6"
                }
            }, [ t("path", {
                attrs: {
                    d: "M88.6 145.8l-70-81.1v162.2z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = o.exports;
    },
    "6U7i": function(e, t, n) {
        e.exports = n("ydjK")("6U7i");
    },
    "6ixx": function(e, t, n) {
        "use strict";
        var r = n("cQ27"), o = n("K+aO");
        var i = Object(o.default)({}, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.$style.stats
            }, [ e._t("content") ], 2);
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = i.exports;
    },
    "7bzM": function(e, t, n) {
        e.exports = n("ydjK")("7bzM");
    },
    "7dZA": function(e, t, n) {
        "use strict";
        var r = n("3OlK"), o = n.n(r);
        t.default = o.a;
    },
    "7ldm": function(e, t, n) {
        var r = n("uaAv");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("7e82cdd0", r, !0, {});
    },
    "7xRU": function(e, t, n) {
        e.exports = n("ydjK")("7xRU");
    },
    "9Qgw": function(e, t, n) {
        "use strict";
        var r = n("GjTW"), o = n.n(r);
        t.default = o.a;
    },
    "9yXK": function(e, t, n) {
        "use strict";
        var r = n("20Ii"), o = n.n(r);
        t.default = o.a;
    },
    AFqB: function(e, t, n) {
        "use strict";
        var r = {
            components: {
                Btn: n("OQxq").default
            },
            props: {
                promptHeading: {
                    type: String,
                    required: !0
                },
                promptText: {
                    type: String
                },
                promptSubText: {
                    type: String
                },
                actionLabel: {
                    type: String,
                    required: !0
                }
            }
        }, o = n("Pi/U"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.root
            }, [ n("h4", {
                class: e.$style.heading
            }, [ e._v(e._s(e.promptHeading)) ]), n("p", {
                class: e.$style.prompt
            }, [ e._v(e._s(e.promptText)) ]), e.promptSubText ? n("p", {
                ref: "promptSubText",
                class: e.$style.promptSub
            }, [ e._v(e._s(e.promptSubText)) ]) : e._e(), n("div", {
                class: e.$style.actions
            }, [ n("Btn", {
                ref: "confirm",
                staticClass: "js-confirm",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.$emit("confirm");
                    }
                }
            }, [ e._v(e._s(e.actionLabel)) ]), n("Btn", {
                ref: "cancel",
                attrs: {
                    type: "ghost"
                },
                on: {
                    click: function(t) {
                        return e.$emit("cancel");
                    }
                }
            }, [ e._v("Cancel") ]) ], 1) ]);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    "AhH/": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".rf-spinner__spinner:only-child.Spinner-autofill-2bc {\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.Spinner-blue-3_W {\n  stop-color: #0057ff;\n}\n.Spinner-white-2Dl {\n  stop-color: #fff;\n}\n.Spinner-standaloneSpinner-25B {\n  height: 35px;\n  width: 35px;\n}\n", "" ]), 
        t.locals = {
            autofill: "Spinner-autofill-2bc",
            blue: "Spinner-blue-3_W",
            white: "Spinner-white-2Dl",
            standaloneSpinner: "Spinner-standaloneSpinner-25B"
        };
    },
    B3Kk: function(e, t, n) {
        var r = n("rT59");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("1fd5893e", r, !0, {});
    },
    BEbc: function(e, t, n) {
        e.exports = n("ydjK")("BEbc");
    },
    CeqD: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".DominantColor-colorFallback-2Sh {\n  height: 50px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-25px, -25px);\n          transform: translate(-25px, -25px);\n  width: 50px;\n}\n.DominantColor-fallbackIconPath-qvI {\n  fill: #e8e8e8;\n}\n.DominantColor-dominantColor-2PM {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n", "" ]), 
        t.locals = {
            colorFallback: "DominantColor-colorFallback-2Sh",
            fallbackIconPath: "DominantColor-fallbackIconPath-qvI",
            dominantColor: "DominantColor-dominantColor-2PM"
        };
    },
    Cf20: function(e, t, n) {
        "use strict";
        var r = {
            name: "DropdownItem"
        }, o = n("WOLC"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("li", {
                class: e.$style.root
            }, [ n("span", {
                class: e.$style.item
            }, [ e._t("default") ], 2) ]);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    D3xf: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".PrivacyLockTooltip-lockWrapper-332,\n.PrivacyLockTooltip-privacyLock-2N3 {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 5px;\n  height: 32px;\n  margin-left: 8px;\n  padding: 1px 9px;\n  width: 33px;\n}\n.PrivacyLockTooltip-lockWrapper-332 {\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(25, 25, 25, 0.7);\n  border: 0;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  height: 22px;\n  padding: 1px 7px;\n  text-transform: uppercase;\n  width: auto;\n}\n.PrivacyLockTooltip-lockWrapper-332 .PrivacyLockTooltip-lock-2Uh {\n    fill: #fff;\n    margin-right: 5px;\n    width: 12px;\n}\n.PrivacyLockTooltip-privacyTooltip-3o7 {\n  max-width: 200px;\n  min-width: 180px;\n}\n", "" ]), 
        t.locals = {
            lockWrapper: "PrivacyLockTooltip-lockWrapper-332",
            privacyLock: "PrivacyLockTooltip-privacyLock-2N3",
            lock: "PrivacyLockTooltip-lock-2Uh",
            privacyTooltip: "PrivacyLockTooltip-privacyTooltip-3o7"
        };
    },
    D4Zf: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return P;
        }));
        n("1t7P"), n("jQ/y"), n("aLgo"), n("LW0h"), n("jwue"), n("jQ3i"), n("lTEL"), n("7xRU"), 
        n("z84I"), n("6U7i"), n("daRM"), n("FtHn"), n("+KXO"), n("7x/C"), n("JtPf"), n("FtFR"), 
        n("DZ+c"), n("x4t0"), n("87if"), n("+oxZ"), n("kYxP"), n("3yYM");
        var r, o, i = n("pqJe"), a = n("K9Y7"), s = n("WjRz"), l = n("m6au"), c = n("v3Rf"), u = n("bh4W"), p = n("OyGO"), d = n("qlC2"), f = n("cnrH"), m = n("E8ap"), h = n("vrlX");
        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    _(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function w(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function b(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function O(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        b(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                        b(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        var y, E, x, T, C, A, S, P = {
            AVATAR_UPDATED: "AVATAR_UPDATED",
            BANNER_UPDATED: "BANNER_UPDATED",
            BELL_COMPONENT_MOUNTED: "BELL_COMPONENT_MOUNTED",
            CLICK_FOLLOWPOPUP_TAB: "CLICK_FOLLOWPOPUP_TAB",
            CLICK_ON_FOLLOWING_COUNT: "CLICK_ON_FOLLOWING_COUNT",
            CLICK_ON_FOLLOWERS_COUNT: "CLICK_ON_FOLLOWERS_COUNT",
            CHECKLIST_RENDERED: "CHECKLIST_RENDERED",
            CHECKLIST_NOT_RENDERED: "CHECKLIST_NOT_RENDERED",
            DELETE_BANNER: "DELETE_BANNER",
            DISPLAY_BANNER_UPLOAD_ERROR: "DISPLAY_BANNER_UPLOAD_ERROR",
            DRAFT_COUNT_CHANGED: "DRAFT_COUNT_CHANGED",
            FOLLOW_USER: "FOLLOW_USER",
            GO_TO_INSIGHTS_FROM_USER_INFO: "GO_TO_INSIGHTS_FROM_USER_INFO",
            INIT: "INIT",
            INIT_ADMIN_DATA: "INIT_ADMIN_DATA",
            INIT_APPRECIATIONS: "INIT_APPRECIATIONS",
            INIT_DRAFTS: "INIT_DRAFTS",
            INIT_INSIGHTS: "INIT_INSIGHTS",
            INIT_LIVESTREAM_REPLAYS: "INIT_LIVESTREAM_REPLAYS",
            INIT_WORK: "INIT_WORK",
            RECORD_VIEW: "RECORD_VIEW",
            LOGIN_AS_USER: "LOGIN_AS_USER",
            REPAINT_AVATAR: "REPAINT_AVATAR",
            REPORT_PROFILE: "REPORT_PROFILE",
            REFRESH_WORK_TAB: "REFRESH_WORK_TAB",
            SEND_MESSAGE: "SEND_MESSAGE",
            CLICK_SEND_HIRE_ME_MESSAGE: "CLICK_SEND_HIRE_ME_MESSAGE",
            SLUG_UPDATED: "SLUG_UPDATED",
            START_POLLING_LIVESTREAM: "START_POLLING_LIVESTREAM",
            STOP_POLLING_LIVESTREAM: "STOP_POLLING_LIVESTREAM",
            SWITCH_TAB: "SWITCH_TAB",
            TOGGLE_NOTIFICATION_TYPE: "TOGGLE_NOTIFICATION_TYPE",
            UNFOLLOW_USER: "UNFOLLOW_USER",
            UPDATE_BANNER: "UPDATE_BANNER",
            UPDATE_BLOCKLIST: "UPDATE_BLOCKLIST",
            UPDATE_SPAM_BLOCKLIST: "UPDATE_SPAM_BLOCKLIST",
            UPDATE_SUGGESTIONS: "UPDATE_SUGGESTIONS",
            CLICK_FOLLOW_INTERACTION_BUTTON: "CLICK_FOLLOW_INTERACTION_BUTTON",
            CLICK_AWAY_FROM_AVAILABILITY_ONBOARDING_TOOLTIP: "CLICK_AWAY_FROM_AVAILABILITY_ONBOARDING_TOOLTIP",
            CLICK_AVAILABILITY_BUTTON: "CLICK_AVAILABILITY_BUTTON",
            CLICK_DONE_AVAILABILITY_DIALOG: "CLICK_DONE_AVAILABILITY_DIALOG",
            HOVER_OUT_OF_AVAILABILITY_ONBOARDING_TOOLTIP: "HOVER_OUT_OF_AVAILABILITY_ONBOARDING_TOOLTIP"
        }, I = "SET_ADMIN_DATA", R = "SET_AVATAR", k = "SET_DRAFT_COUNT", D = "SET_BANNER_URL", j = "SET_OWNER", N = "SET_OWNER_DATA", L = "SET_OWNER_USERNAME", M = "SET_POLLING", $ = "SET_PUSH_SUBSCRIPTIONS", B = "SET_USER_AS_FOLLOWED", U = "SET_USER_AS_UNFOLLOWED", F = "UNSET_BANNER", G = "SET_AVAILABILITY_INFO", V = "SET_FLAGS", W = "SET_SUBSCRIPTION", H = "SET_SUBSCRIPTION_PRODUCT";
        function K(e, t) {
            e("checklist/" + f.b.SET_BANNER_IMAGE_UPLOADED, t.hasCoverImg), e("checklist/" + f.b.SET_AVATAR, t.hasProfilePhoto), 
            e("checklist/" + f.b.SET_HASUSERNAME, t.hasUsername), e("checklist/" + f.b.SET_HASAPP, t.hasApp), 
            e("checklist/" + f.b.SET_SHOULDHIDE, t.shouldHide), e("checklist/" + f.b.SET_USERNAME_VALIDATION_RULE, t.usernameValidationRule);
        }
        function z(e) {
            return Y.apply(this, arguments);
        }
        function Y() {
            return (Y = O(regeneratorRuntime.mark((function e(t) {
                var n, r, o, a, s, c, u;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.username, r = t.commit, o = t.dispatch, e.prev = 1, e.next = 4, i.b.getWorkPage(n);

                      case 4:
                        a = e.sent, s = a.owner, c = a.activeSection, u = a.checklist, r(j, s), r("activeSection/work/" + l.b.SET_WORK, {
                            work: c.work
                        }), s.is_profile_owner && K(r, u), e.next = 17;
                        break;

                      case 13:
                        return e.prev = 13, e.t0 = e.catch(1), e.next = 17, o("error", e.t0, {
                            root: !0
                        });

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 1, 13 ] ]);
            })))).apply(this, arguments);
        }
        t.b = {
            api: i.b,
            namespaced: !0,
            state: function() {
                return {
                    admin: null,
                    owner: null,
                    timeoutId: void 0,
                    webPush: {},
                    availabilityInfo: {},
                    flags: {},
                    subscription: null
                };
            },
            modules: {
                activeSection: {
                    namespaced: !0
                },
                checklist: f.c,
                wip: h.b
            },
            actions: (r = {}, _(r, P.INIT, (function(e, t) {
                var n = e.state, r = e.commit, o = t.username, a = t.isHireMeCTAGatekeeper, s = t.isSubscribeToCreativeGatekeeper;
                return O(regeneratorRuntime.mark((function e() {
                    var t, l, c, u, p, d, f, m, h, g, v, _;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return p = n.owner ? Promise.resolve() : i.b.getWorkPage(o), d = a ? i.b.getUserAvailabilityInfoByUsername(o) : Promise.resolve(), 
                            f = s ? i.b.getSubscriptionData(o) : Promise.resolve(), e.next = 5, Promise.all([ p, d, f ]);

                          case 5:
                            m = e.sent, h = w(m, 3), g = h[0], v = h[1], _ = h[2], n.owner || r(j, null == g ? void 0 : g.owner), 
                            r(G, null == v || null === (t = v.user) || void 0 === t ? void 0 : t.availabilityInfo), 
                            r(V, null == v || null === (l = v.user) || void 0 === l ? void 0 : l.flags), r(W, null == _ || null === (c = _.user) || void 0 === c ? void 0 : c.subscription), 
                            r(H, null == _ || null === (u = _.user) || void 0 === u ? void 0 : u.subscriptionProduct);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.INIT_ADMIN_DATA, (function(e) {
                var t = e.state, n = e.commit;
                return O(regeneratorRuntime.mark((function e() {
                    var r, o, a, s, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!t.adminPermissions.isCurationBlocklistAdmin) {
                                e.next = 6;
                                break;
                            }
                            return e.next = 3, i.b.getAdminBlocklist(t.owner.id);

                          case 3:
                            r = e.sent, o = r.blocklist.includes(t.owner.id), n(I, {
                                isBlocked: o
                            });

                          case 6:
                            if (!t.adminPermissions.isSpamBlocklistAdmin) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 9, i.b.getAdminFlaggedUser(t.owner.id);

                          case 9:
                            a = e.sent, n(I, {
                                hasFeaturedProjects: a.has_featured_projects,
                                isFlagged: Boolean(t.owner.flagged)
                            });

                          case 11:
                            if (!t.adminPermissions.isSuggestionAdmin) {
                                e.next = 18;
                                break;
                            }
                            return e.next = 14, i.b.getAdminSuggestions(t.owner.id);

                          case 14:
                            s = e.sent, l = [], Object.keys(s.all_field_groups).forEach((function(e) {
                                l.push({
                                    id: e,
                                    title: s.all_field_groups[e],
                                    selected: s.user_field_groups.includes(Number(e))
                                });
                            })), n(I, {
                                fieldGroups: l
                            });

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.BELL_COMPONENT_MOUNTED, (function() {})), _(r, P.UPDATE_SPAM_BLOCKLIST, (function(e) {
                var t = e.state, n = e.commit, r = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var o, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return o = {}, a = t.admin.isFlagged, o[a ? "unflagged" : "flagged"] = t.owner.id, 
                            e.prev = 4, e.next = 7, i.b.updateAdminFlaggedUser(o);

                          case 7:
                            n(I, {
                                isFlagged: !a
                            }), e.next = 14;
                            break;

                          case 10:
                            return e.prev = 10, e.t0 = e.catch(4), e.next = 14, r("error", e.t0, {
                                root: !0
                            });

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 4, 10 ] ]);
                })))();
            })), _(r, P.UPDATE_BLOCKLIST, (function(e) {
                var t = e.state, n = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = {
                                add_users: "",
                                remove_users: ""
                            }, t.admin.isBlocked ? (r.remove_users = "", r.add_users = t.owner.id) : (r.add_users = "", 
                            r.remove_users = t.owner.id), e.prev = 2, e.next = 5, i.b.updateAdminBlocklist(r);

                          case 5:
                            e.next = 11;
                            break;

                          case 7:
                            return e.prev = 7, e.t0 = e.catch(2), e.next = 11, n("error", e.t0, {
                                root: !0
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 2, 7 ] ]);
                })))();
            })), _(r, P.UPDATE_SUGGESTIONS, (function(e) {
                var t = e.state, n = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = t.admin.fieldGroups.filter((function(e) {
                                return e.selected;
                            })), o = {
                                user_id: t.owner.id,
                                field_group_ids: r.map((function(e) {
                                    return e.id;
                                })).join("|")
                            }, e.prev = 2, e.next = 5, i.b.updateAdminSuggestions(o);

                          case 5:
                            e.next = 11;
                            break;

                          case 7:
                            return e.prev = 7, e.t0 = e.catch(2), e.next = 11, n("error", e.t0, {
                                root: !0
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 2, 7 ] ]);
                })))();
            })), _(r, P.RECORD_VIEW, (function(e, t) {
                var n = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.recordView(t);

                          case 3:
                            e.next = 9;
                            break;

                          case 5:
                            return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n("error", e.t0, {
                                root: !0
                            });

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 5 ] ]);
                })))();
            })), _(r, P.REFRESH_WORK_TAB, (function(e, t) {
                var n = e.commit, r = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, z({
                                username: t,
                                commit: n,
                                dispatch: r
                            });

                          case 2:
                            return e.abrupt("return", e.sent);

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.INIT_WORK, (function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n.activeSection.work.isInitialized) {
                                e.next = 4;
                                break;
                            }
                            return e.next = 3, z({
                                username: t,
                                commit: r,
                                dispatch: o
                            });

                          case 3:
                            return e.abrupt("return", e.sent);

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.LOGIN_AS_USER, (function(e) {
                var t = e.state, n = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.loginAsUser(t.owner.id);

                          case 3:
                            e.next = 9;
                            break;

                          case 5:
                            return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n("error", e.t0, {
                                root: !0
                            });

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 5 ] ]);
                })))();
            })), _(r, P.INIT_LIVESTREAM_REPLAYS, (function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var a, s, l, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!n.activeSection.livestream || !n.activeSection.livestream.isInitialized) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            if (e.prev = 2, n.owner && n.checklist) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 6, i.b.getLivestreamReplaysPage(t);

                          case 6:
                            l = e.sent, a = l.owner, s = l.checklist, e.next = 13;
                            break;

                          case 11:
                            a = n.owner, s = n.checklist;

                          case 13:
                            return e.next = 15, i.b.fetchUserLivestreamReplays(t);

                          case 15:
                            u = e.sent, r(j, a), r("activeSection/livestream/" + c.b.ADD_LIVESTREAM_REPLAYS, {
                                livestream: u
                            }), a.is_profile_owner && K(r, s), e.next = 25;
                            break;

                          case 21:
                            return e.prev = 21, e.t0 = e.catch(2), e.next = 25, o("error", e.t0, {
                                root: !0
                            });

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 2, 21 ] ]);
                })))();
            })), _(r, P.INIT_APPRECIATIONS, (function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var a, s, l, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n.activeSection.appreciations.isInitialized) {
                                e.next = 17;
                                break;
                            }
                            return e.prev = 1, e.next = 4, i.b.getAppreciationsPage(t);

                          case 4:
                            a = e.sent, s = a.owner, l = a.activeSection, c = a.checklist, r(j, s), r("activeSection/appreciations/" + u.b.SET_APPRECIATIONS, {
                                appreciations: l.appreciations
                            }), s.is_profile_owner && K(r, c), e.next = 17;
                            break;

                          case 13:
                            return e.prev = 13, e.t0 = e.catch(1), e.next = 17, o("error", e.t0, {
                                root: !0
                            });

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 13 ] ]);
                })))();
            })), _(r, P.INIT_DRAFTS, (function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var a, s, l, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n.activeSection.drafts.isInitialized) {
                                e.next = 17;
                                break;
                            }
                            return e.prev = 1, e.next = 4, i.b.getDraftsPage(t);

                          case 4:
                            a = e.sent, s = a.owner, l = a.activeSection, c = a.checklist, r(j, s), r("activeSection/drafts/" + p.b.SET_DRAFTS, l.drafts), 
                            s.is_profile_owner && K(r, c), e.next = 17;
                            break;

                          case 13:
                            return e.prev = 13, e.t0 = e.catch(1), e.next = 17, o("error", e.t0, {
                                root: !0
                            });

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 13 ] ]);
                })))();
            })), _(r, P.INIT_INSIGHTS, (function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    var a, s, l, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n.activeSection.insights.isInitialized) {
                                e.next = 17;
                                break;
                            }
                            return e.prev = 1, e.next = 4, i.b.getInsightsPage(t);

                          case 4:
                            a = e.sent, s = a.owner, l = a.activeSection, c = a.checklist, r(j, s), r("activeSection/insights/" + d.b.SET_INSIGHTS, {
                                datasets: l.insights.projectsDatasets,
                                page: l.insights.page,
                                hasMore: l.insights.hasMore
                            }), s.is_profile_owner && K(r, c), e.next = 17;
                            break;

                          case 13:
                            return e.prev = 13, e.t0 = e.catch(1), e.next = 17, o("error", e.t0, {
                                root: !0
                            });

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 13 ] ]);
                })))();
            })), _(r, P.UPDATE_BANNER, (function(e, t) {
                var n = e.commit, r = e.dispatch, o = t.sourceUrl, a = t.x, s = t.y, l = t.width, c = t.height;
                return O(regeneratorRuntime.mark((function e() {
                    var t, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.updateBanner({
                                url: o,
                                x: a,
                                y: s,
                                width: l,
                                height: c
                            });

                          case 3:
                            t = e.sent, u = t.url, n(D, u), e.next = 12;
                            break;

                          case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, r("error", e.t0, {
                                root: !0
                            });

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 8 ] ]);
                })))();
            })), _(r, P.DELETE_BANNER, (function(e) {
                var t = e.commit, n = e.dispatch;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.deleteBanner();

                          case 3:
                            t(F), e.next = 10;
                            break;

                          case 6:
                            return e.prev = 6, e.t0 = e.catch(0), e.next = 10, n("error", e.t0, {
                                root: !0
                            });

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 6 ] ]);
                })))();
            })), _(r, P.SEND_MESSAGE, (function(e, t) {
                var n = e.state, r = e.dispatch, o = e.rootState;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.sendMessage(n.owner.id, t, o.env.CFG_RECAPTCHA_API_KEY, o.gates);

                          case 3:
                            e.next = 10;
                            break;

                          case 5:
                            return e.prev = 5, e.t0 = e.catch(0), e.next = 9, r("error", e.t0, {
                                root: !0
                            });

                          case 9:
                            throw e.t0;

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 5 ] ]);
                })))();
            })), _(r, P.CLICK_SEND_HIRE_ME_MESSAGE, (function(e, t) {
                var n = e.state, r = t.message, o = t.messageData;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, i.b.sendHireMeMessage(n.owner.id, r, o);

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.DISPLAY_BANNER_UPLOAD_ERROR, (function(e, t) {
                var n = e.dispatch, r = t.err;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", n("error", r, {
                                root: !0
                            }));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.REPORT_PROFILE, (function(e, t) {
                var n = e.dispatch, r = e.state, o = t.reason, a = t.message;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.reportProfile({
                                userId: r.owner.id,
                                reason: o,
                                message: a
                            });

                          case 3:
                            e.next = 11;
                            break;

                          case 5:
                            if (e.prev = 5, e.t0 = e.catch(0), e.t0.status !== m.HTTP_CODE_FORBIDDEN_ERROR) {
                                e.next = 9;
                                break;
                            }
                            return e.abrupt("return");

                          case 9:
                            return e.next = 11, n("error", e.t0, {
                                root: !0
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 5 ] ]);
                })))();
            })), _(r, P.REPAINT_AVATAR, (function(e, t) {
                var n = e.commit;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n(R, t), e.abrupt("return");

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.SLUG_UPDATED, (function(e, t) {
                var n = e.commit;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", n(L, t));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.DRAFT_COUNT_CHANGED, (function(e, t) {
                var n = e.commit;
                return O(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n(k, t);

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), _(r, P.START_POLLING_LIVESTREAM, (function(e, t) {
                var n = e.commit, r = e.dispatch, o = e.state, a = setInterval(O(regeneratorRuntime.mark((function e() {
                    var a, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, i.b.fetchOwnerLiveStream(t);

                          case 3:
                            (a = e.sent) && a.videos && a.videos.length > 0 ? (s = a.videos[0], n(N, {
                                isLive: !0,
                                liveStream: v({}, s)
                            })) : o.owner.isLive && n(N, {
                                isLive: !1,
                                liveStream: null
                            }), e.next = 11;
                            break;

                          case 7:
                            return e.prev = 7, e.t0 = e.catch(0), e.next = 11, r("error", e.t0, {
                                root: !0
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 7 ] ]);
                }))), 12e4);
                n(M, a);
            })), _(r, P.STOP_POLLING_LIVESTREAM, (function(e) {
                (0, e.commit)(M);
            })), _(r, P.FOLLOW_USER, (S = O(regeneratorRuntime.mark((function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.commit, r = t.dispatch, o = t.state, e.prev = 1, e.next = 4, a.a.followUser(o.owner.id);

                      case 4:
                        n(B), e.next = 11;
                        break;

                      case 7:
                        return e.prev = 7, e.t0 = e.catch(1), e.next = 11, r("error", e.t0, {
                            root: !0
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 1, 7 ] ]);
            }))), function(e) {
                return S.apply(this, arguments);
            })), _(r, P.TOGGLE_NOTIFICATION_TYPE, (A = O(regeneratorRuntime.mark((function e(t, n) {
                var r, o, i, a, l, c, u, p;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = t.commit, i = t.dispatch, a = t.rootState, l = t.state, c = n.notificationType, 
                        u = null === (r = l.owner) || void 0 === r ? void 0 : r.id) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return");

                      case 5:
                        return e.prev = 5, e.next = 8, s.a.toggleSubscriptionStatus(l.webPush.subscriptions, u, c, a.config.BEHANCE.PUSH_NOTIFICATIONS.PUBLIC_KEY);

                      case 8:
                        (p = e.sent) && Array.isArray(null == p ? void 0 : p.subscriptions) && o($, null == p ? void 0 : p.subscriptions), 
                        e.next = 16;
                        break;

                      case 12:
                        return e.prev = 12, e.t0 = e.catch(5), e.next = 16, i("error", e.t0, {
                            root: !0
                        });

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 5, 12 ] ]);
            }))), function(e, t) {
                return A.apply(this, arguments);
            })), _(r, P.UNFOLLOW_USER, (C = O(regeneratorRuntime.mark((function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.commit, r = t.dispatch, o = t.state, e.prev = 1, e.next = 4, a.a.unfollowUser(o.owner.id);

                      case 4:
                        n(U), e.next = 11;
                        break;

                      case 7:
                        return e.prev = 7, e.t0 = e.catch(1), e.next = 11, r("error", e.t0, {
                            root: !0
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 1, 7 ] ]);
            }))), function(e) {
                return C.apply(this, arguments);
            })), _(r, P.CLICK_AWAY_FROM_AVAILABILITY_ONBOARDING_TOOLTIP, (T = O(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.commit, r = t.state, e.next = 3, i.b.markHireMeOnboardingTooltipSeen();

                      case 3:
                        n(V, v({}, r.flags, {
                            isHireMeOnboardingSet: !0
                        }));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }), e);
            }))), function(e) {
                return T.apply(this, arguments);
            })), _(r, P.CLICK_AVAILABILITY_BUTTON, (x = O(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.commit, r = t.state, e.next = 3, i.b.markHireMeOnboardingTooltipSeen();

                      case 3:
                        n(V, v({}, r.flags, {
                            isHireMeOnboardingSet: !0
                        }));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }), e);
            }))), function(e) {
                return x.apply(this, arguments);
            })), _(r, P.HOVER_OUT_OF_AVAILABILITY_ONBOARDING_TOOLTIP, (E = O(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.commit, r = t.state, e.next = 3, i.b.markHireMeOnboardingTooltipSeen();

                      case 3:
                        n(V, v({}, r.flags, {
                            isHireMeOnboardingSet: !0
                        }));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }), e);
            }))), function(e) {
                return E.apply(this, arguments);
            })), _(r, P.CLICK_DONE_AVAILABILITY_DIALOG, (y = O(regeneratorRuntime.mark((function e(t, n) {
                var r, o;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.commit, o = t.dispatch, e.prev = 1, e.next = 4, i.b.setUserAvailabilityInfo(n);

                      case 4:
                        r(G, n), e.next = 11;
                        break;

                      case 7:
                        return e.prev = 7, e.t0 = e.catch(1), e.next = 11, o("error", e.t0, {
                            root: !0
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 1, 7 ] ]);
            }))), function(e, t) {
                return y.apply(this, arguments);
            })), _(r, P.CLICK_ON_FOLLOWING_COUNT, (function() {})), _(r, P.CLICK_ON_FOLLOWERS_COUNT, (function() {})), 
            _(r, P.SWITCH_TAB, (function() {})), _(r, P.CLICK_FOLLOWPOPUP_TAB, (function() {})), 
            _(r, P.GO_TO_INSIGHTS_FROM_USER_INFO, (function() {})), _(r, P.AVATAR_UPDATED, (function() {})), 
            _(r, P.BANNER_UPDATED, (function() {})), _(r, P.CHECKLIST_RENDERED, (function() {})), 
            _(r, P.CHECKLIST_NOT_RENDERED, (function() {})), _(r, P.CLICK_FOLLOW_INTERACTION_BUTTON, (function() {})), 
            r),
            mutations: (o = {}, _(o, j, (function(e, t) {
                e.owner = t;
            })), _(o, R, (function(e, t) {
                e.owner.images = t;
            })), _(o, L, (function(e, t) {
                e.owner.username = t;
            })), _(o, D, (function(e, t) {
                e.owner.banner_image_url = t;
            })), _(o, F, (function(e) {
                e.owner.banner_image_url = null;
            })), _(o, N, (function(e, t) {
                e.owner = v({}, e.owner, {}, t);
            })), _(o, I, (function(e, t) {
                e.admin = v({}, e.admin, {}, t);
            })), _(o, k, (function(e, t) {
                e.owner.stats = v({}, e.owner.stats, {
                    draftCount: t
                });
            })), _(o, M, (function(e, t) {
                !t && e.timeoutId && clearTimeout(e.timeoutId), e.timeoutId = t;
            })), _(o, B, (function(e) {
                e.owner.is_following = 1;
            })), _(o, U, (function(e) {
                e.owner.is_following = 0;
            })), _(o, $, (function(e, t) {
                e.webPush.subscriptions = t;
            })), _(o, G, (function(e, t) {
                e.availabilityInfo = t;
            })), _(o, V, (function(e, t) {
                e.flags = t;
            })), _(o, W, (function(e, t) {
                e.subscription = t;
            })), _(o, H, (function(e, t) {
                e.subscriptionProduct = t;
            })), o)
        };
    },
    DL1L: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Banner-bannerContainer-wOW,\n.Banner-leftColumn-2GD,\n.Banner-rightColumn-17s,\n.Banner-subtextGroup-cWO,\n.Banner-description-FOc,\n.Banner-actions-3TX {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  width: 100%;\n}\n.Banner-bannerContainer-wOW {\n  border-radius: 5px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  margin-bottom: 20px;\n  max-height: 240px;\n  min-height: 190px;\n  overflow: hidden;\n}\n@media (max-width: 603px) {\n.Banner-bannerContainer-wOW {\n      display: none;\n}\n}\n.Banner-leftColumn-2GD {\n  align-content: flex-start;\n  background: #001d26;\n  border-radius: 5px 0 0 5px;\n  color: #fff;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-width: 270px;\n  padding: 25px;\n  padding-right: 0;\n  width: 40%;\n}\n.Banner-leftColumn-2GD .Banner-actions-3TX {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n}\n.Banner-leftColumn-2GD .Banner-description-FOc .Banner-header-1s9 {\n    font-size: 25px;\n    margin-bottom: 11px;\n}\n.Banner-leftColumn-2GD .Banner-description-FOc .Banner-subtext-3Aa {\n    font-size: 15px;\n    font-weight: 500;\n    margin-bottom: 3px;\n}\n.Banner-leftColumn-2GD .Banner-description-FOc.Banner-isRowLayout-2XV {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n}\n.Banner-leftColumn-2GD .Banner-description-FOc.Banner-isRowLayout-2XV .Banner-header-1s9 {\n      width: 50%;\n}\n.Banner-leftColumn-2GD .Banner-description-FOc.Banner-isRowLayout-2XV .Banner-subtextGroup-cWO {\n      width: 50%;\n}\n.Banner-rightColumn-17s {\n  background: #0c3645;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  width: 60%;\n}\n.Banner-rightColumn-17s .Banner-productImageWide-FBX,\n  .Banner-rightColumn-17s .Banner-productImageSquare-3EM {\n    -webkit-box-align: end;\n            align-items: flex-end;\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: auto;\n    padding: 20px;\n    padding-bottom: 0;\n    width: auto;\n}\n@media screen and (min-width: 1200px) and (max-width: 1299px), screen and (max-width: 880px) {\n.Banner-rightColumn-17s .Banner-productImageWide-FBX {\n      display: none;\n}\n}\n@media screen and (max-width: 880px) {\n.Banner-rightColumn-17s .Banner-productImageWide-FBX {\n      display: none;\n}\n}\n.Banner-rightColumn-17s .Banner-productImageSquare-3EM {\n    display: none;\n}\n@media screen and (min-width: 1200px) and (max-width: 1299px), screen and (max-width: 880px) {\n.Banner-rightColumn-17s .Banner-productImageSquare-3EM {\n        display: -webkit-box;\n        display: flex;\n}\n}\n.Banner-rightColumn-17s .Banner-productIcon-1ly {\n    display: -webkit-box;\n    display: flex;\n    height: 48px;\n    margin: 15px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 48px;\n}\n.Banner-rightColumn-17s .Banner-productIcon-1ly .Banner-imgWrapper-31T {\n      height: auto;\n      width: 100%;\n}\n.Banner-rightColumn-17s .Banner-hasBottomGradient-3GC {\n    background: -webkit-gradient(linear, left bottom, left top, color-stop(1%, rgba(0, 29, 38, 0.95)), color-stop(6%, rgba(0, 29, 38, 0.7)), color-stop(12%, rgba(0, 29, 38, 0.4)), color-stop(16%, rgba(0, 29, 38, 0.15)), color-stop(20%, rgba(0, 29, 38, 0)));\n    background: linear-gradient(0deg, rgba(0, 29, 38, 0.95) 1%, rgba(0, 29, 38, 0.7) 6%, rgba(0, 29, 38, 0.4) 12%, rgba(0, 29, 38, 0.15) 16%, rgba(0, 29, 38, 0) 20%);\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n", "" ]), 
        t.locals = {
            bannerContainer: "Banner-bannerContainer-wOW",
            leftColumn: "Banner-leftColumn-2GD",
            rightColumn: "Banner-rightColumn-17s",
            subtextGroup: "Banner-subtextGroup-cWO",
            description: "Banner-description-FOc",
            actions: "Banner-actions-3TX",
            header: "Banner-header-1s9",
            subtext: "Banner-subtext-3Aa",
            isRowLayout: "Banner-isRowLayout-2XV",
            productImageWide: "Banner-productImageWide-FBX",
            productImageSquare: "Banner-productImageSquare-3EM",
            productIcon: "Banner-productIcon-1ly",
            imgWrapper: "Banner-imgWrapper-31T",
            hasBottomGradient: "Banner-hasBottomGradient-3GC"
        };
    },
    DV2o: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".OwnerRow-link-2KT {\n  display: inline-block;\n  max-width: 114px;\n  white-space: nowrap;\n}\n.OwnerRow-link-2KT:hover {\n    text-decoration: none;\n}\n.OwnerRow-link-2KT:hover .OwnerRow-name-28p {\n      text-decoration: underline;\n}\n.OwnerRow-row-1XH:not(:last-child) {\n  margin-bottom: 6px;\n}\n.OwnerRow-name-28p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: inline-block;\n  max-width: calc(100% - 25px);\n  vertical-align: middle;\n}\n.OwnerRow-imageWrap-1IO {\n  border-radius: 50%;\n  display: inline-block;\n  height: 18px;\n  margin-right: 7px;\n  overflow: hidden;\n  vertical-align: middle;\n  width: 18px;\n}\n.OwnerRow-image-3G2 {\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            link: "OwnerRow-link-2KT",
            name: "OwnerRow-name-28p",
            row: "OwnerRow-row-1XH",
            imageWrap: "OwnerRow-imageWrap-1IO",
            image: "OwnerRow-image-3G2"
        };
    },
    DpO5: function(e, t, n) {
        e.exports = n("ydjK")("DpO5");
    },
    ECW0: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".DropdownItem-item-soQ {\n  cursor: pointer;\n}\n.DropdownItem-root-1Gd {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.2;\n  -webkit-transition: background-color 0.15s linear;\n  transition: background-color 0.15s linear;\n}\n.DropdownItem-root-1Gd a,\n  .DropdownItem-root-1Gd span:not(.DropdownItem-item-soQ) {\n    color: inherit;\n    display: block;\n    padding: 8px 20px 8px 13px;\n    text-decoration: inherit;\n    -webkit-transition: color 0.15s linear;\n    transition: color 0.15s linear;\n}\n.DropdownItem-root-1Gd svg {\n    -webkit-transition: fill 0.15s linear;\n    transition: fill 0.15s linear;\n}\n.DropdownItem-root-1Gd:hover {\n    background-color: #0057ff;\n    color: #fff;\n}\n", "" ]), 
        t.locals = {
            item: "DropdownItem-item-soQ",
            root: "DropdownItem-root-1Gd"
        };
    },
    Edvo: function(e, t, n) {
        var r = n("LIkN");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("4aa7ef03", r, !0, {});
    },
    Eq5U: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".TitleOwner-limitHeight-2_Y .TitleOwner-title-3nP {\n  max-height: 39px;\n  max-width: 100%;\n  overflow: hidden;\n}\n.TitleOwner-owner-1aG {\n  font-size: 13px;\n}\n.TitleOwner-smallOwner-3G9 {\n  font-size: 11px;\n}\n.TitleOwner-shadowText-3QJ {\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.TitleOwner-mediumOwner-NDt {\n  font-size: 12px;\n}\n.TitleOwner-smallOwnerArrow-2ue::after {\n  top: 6px;\n}\n", "" ]), 
        t.locals = {
            limitHeight: "TitleOwner-limitHeight-2_Y",
            title: "TitleOwner-title-3nP",
            owner: "TitleOwner-owner-1aG",
            smallOwner: "TitleOwner-smallOwner-3G9",
            shadowText: "TitleOwner-shadowText-3QJ",
            mediumOwner: "TitleOwner-mediumOwner-NDt",
            smallOwnerArrow: "TitleOwner-smallOwnerArrow-2ue"
        };
    },
    F01M: function(e, t, n) {
        e.exports = n("ydjK")("F01M");
    },
    FKtz: function(e, t, n) {
        "use strict";
        var r = n("2UUx"), o = n.n(r);
        t.default = o.a;
    },
    FtFR: function(e, t, n) {
        var r = n("1Mu/"), o = n("q9+l"), i = n("q/0V"), a = n("L2rT").UNSUPPORTED_Y;
        r && ("g" != /./g.flags || a) && o.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i
        });
    },
    FuXf: function(e, t, n) {
        "use strict";
        var r = n("JTO7"), o = n.n(r);
        t.default = o.a;
    },
    GGXc: function(e, t, n) {
        "use strict";
        var r = n("e9kW"), o = n.n(r);
        t.default = o.a;
    },
    GjTW: function(e, t, n) {
        var r = n("Eq5U");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("6ad330b9", r, !0, {});
    },
    HKCO: function(e, t, n) {
        var r = n("N6vv");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("b106e13a", r, !0, {});
    },
    HbXO: function(e, t, n) {
        "use strict";
        var r = n("wdZT"), o = n.n(r);
        t.default = o.a;
    },
    I7EG: function(e, t, n) {
        "use strict";
        var r = n("br6t"), o = n.n(r);
        t.default = o.a;
    },
    Iync: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Owners-root-3c9 {\n  pointer-events: all;\n}\n.Owners-root-3c9.Owners-light--kB .Owners-owner-2lB {\n  color: #fff;\n}\n.Owners-root-3c9.Owners-light--kB .Owners-arrow-1nE::after {\n  border-top-color: #fff;\n}\n.Owners-root-3c9.Owners-dark-1Vh .Owners-owner-2lB {\n  color: #191919;\n}\n.Owners-root-3c9.Owners-dark-1Vh .Owners-arrow-1nE::after {\n  border-top-color: #191919;\n}\n.Owners-ownerImage-27R {\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  margin-right: 5px;\n  -webkit-transition: -webkit-filter 0.1s linear;\n  transition: -webkit-filter 0.1s linear;\n  transition: filter 0.1s linear;\n  transition: filter 0.1s linear, -webkit-filter 0.1s linear;\n  vertical-align: top;\n  width: 20px;\n}\n.Owners-ownerAndAvatar-1d5:hover .Owners-ownerImage-27R {\n  -webkit-filter: brightness(80%);\n          filter: brightness(80%);\n}\n.Owners-ownerAndAvatar-1d5:hover .Owners-owner-2lB {\n  text-decoration: underline;\n}\n.Owners-multipleOwnersText-Z5e:hover {\n  text-decoration: underline;\n}\n.Owners-ownerImageEl-3cu {\n  border-radius: 50%;\n  width: 100%;\n}\n.Owners-overflowText-3Yn {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Owners-owner-2lB {\n  color: inherit;\n  top: 1px;\n}\n.Owners-tooltipContainer-3fB {\n  display: inline-block;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n.Owners-arrow-1nE {\n  padding-right: 12px;\n  position: relative;\n}\n.Owners-arrow-1nE::after {\n    border: 4px solid transparent;\n    content: '';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0;\n    top: 7px;\n    width: 0;\n}\n.Owners-list-2QL {\n  max-height: 170px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n", "" ]), 
        t.locals = {
            root: "Owners-root-3c9",
            light: "Owners-light--kB",
            owner: "Owners-owner-2lB",
            arrow: "Owners-arrow-1nE",
            dark: "Owners-dark-1Vh",
            ownerImage: "Owners-ownerImage-27R",
            ownerAndAvatar: "Owners-ownerAndAvatar-1d5",
            multipleOwnersText: "Owners-multipleOwnersText-Z5e",
            ownerImageEl: "Owners-ownerImageEl-3cu",
            overflowText: "Owners-overflowText-3Yn",
            tooltipContainer: "Owners-tooltipContainer-3fB",
            list: "Owners-list-2QL"
        };
    },
    JTO7: function(e, t, n) {
        var r = n("6Jbj");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("1c3f44ee", r, !0, {});
    },
    JkTf: function(e, t, n) {
        var r = n("Y4Yb");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("43c351fa", r, !0, {});
    },
    KTQR: function(e, t, n) {
        "use strict";
        var r = n("MWTA"), o = n.n(r);
        t.default = o.a;
    },
    KZO9: function(e, t, n) {
        var r = n("Xrwb");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("2d72d9d6", r, !0, {});
    },
    L2rT: function(e, t, n) {
        e.exports = n("ydjK")("L2rT");
    },
    L7BO: function(e, t, n) {
        "use strict";
        n("z84I");
        var r = n("mGku"), o = n("bTtm"), i = n("iPCZ"), a = n("md4j"), s = r.default.extend({
            props: {
                owners: {
                    type: Array
                },
                assetUrl: {
                    type: String
                }
            },
            components: {
                Owners: o.a
            },
            computed: {
                adaptedOwners: function() {
                    return Array.isArray(this.owners) ? this.owners.map(i.a) : [];
                }
            },
            mounted: function() {
                Array.isArray(this.owners) || a.default.info("owners_data", "Owners data is not a list", {
                    assetUrl: this.assetUrl,
                    owners: this.owners
                });
            }
        }), l = n("K+aO"), c = Object(l.default)(s, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("Owners", e._g(e._b({
                ref: "owners",
                attrs: {
                    owners: e.adaptedOwners
                }
            }, "Owners", e.$attrs, !1), e.$listeners));
        }), [], !1, null, null, null);
        t.a = c.exports;
    },
    LIkN: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".GearDropdown-cogContainer-1Bu {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  padding: 7px 14px;\n}\n.GearDropdown-cogAndArrow-2aW {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.GearDropdown-cog-18f {\n  height: 16px;\n  width: 16px;\n}\n.GearDropdown-downArrow-2pd {\n  border: 4px solid transparent;\n  border-top-color: #191919;\n  height: 0;\n  margin-left: 7px;\n  position: relative;\n  top: 2px;\n  width: 4px;\n}\n.GearDropdown-dropdown-I6B {\n  min-width: 150px;\n}\n", "" ]), 
        t.locals = {
            cogContainer: "GearDropdown-cogContainer-1Bu",
            cogAndArrow: "GearDropdown-cogAndArrow-2aW",
            cog: "GearDropdown-cog-18f",
            downArrow: "GearDropdown-downArrow-2pd",
            dropdown: "GearDropdown-dropdown-I6B"
        };
    },
    LSlr: function(e, t, n) {
        e.exports = n("ydjK")("LSlr");
    },
    Lj86: function(e, t, n) {
        e.exports = n("ydjK")("Lj86");
    },
    MWTA: function(e, t, n) {
        var r = n("VB2i");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("69018cc1", r, !0, {});
    },
    N6vv: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Stats-stats-1iI {\n  -webkit-box-align: center;\n          align-items: center;\n  align-self: flex-end;\n  display: -webkit-box;\n  display: flex;\n  font-weight: bold;\n  margin-left: auto;\n  white-space: nowrap;\n}\n", "" ]), 
        t.locals = {
            stats: "Stats-stats-1iI"
        };
    },
    NvIi: function(e, t, n) {
        "use strict";
        var r = n("QgwD"), o = n("K+aO");
        var i = Object(o.default)({}, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("svg", {
                class: [ "rf-icon", e.$style.root ],
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 14.002 14"
                }
            }, [ n("path", {
                class: e.$style.path,
                attrs: {
                    d: "M12.95,11.536h0v0A1.487,1.487,0,0,1,14,9V9a1.012,1.012,0,0,0,.221-.026,1,1,0,0,0-.02-1.953A.971.971,0,0,0,14,7h0a1.486,1.486,0,0,1-1.045-2.534l0,0a1,1,0,0,0-1.261-1.541,1.04,1.04,0,0,0-.156.128h0A1.486,1.486,0,0,1,9,2H9a1.017,1.017,0,0,0-.079-.387A1,1,0,0,0,8.023,1L8,1H8c-.021,0-.04,0-.06.006a.975.975,0,0,0-.934.928C7,1.956,7,1.977,7,2H7v.008A1.486,1.486,0,0,1,4.465,3.045l0,0a1.015,1.015,0,0,0-.329-.218A1,1,0,0,0,3.048,4.464h0A1.487,1.487,0,0,1,2,7V7a.933.933,0,0,0-.2.021,1,1,0,0,0-.781.808A.962.962,0,0,0,1,8a1,1,0,0,0,.256.663c.013.014.023.031.036.044s.034.027.05.041a1.091,1.091,0,0,0,.1.082l0,0A.994.994,0,0,0,2,9H2a1.486,1.486,0,0,1,1.045,2.534l0,0a1,1,0,0,0,1.418,1.414h0A1.487,1.487,0,0,1,7,14H7a1.015,1.015,0,0,0,.017.166c0,.01,0,.021,0,.031A1,1,0,0,0,8,15H8a1.017,1.017,0,0,0,.168-.017l.033,0A1,1,0,0,0,9,14H9a1.486,1.486,0,0,1,2.534-1.045l0,0a1,1,0,0,0,1.413-1.416ZM6.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,6.5,8Z",
                    transform: "translate(-0.999 -1)"
                }
            }) ]);
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = i.exports;
    },
    OQxq: function(e, t, n) {
        e.exports = n("ydjK")("OQxq");
    },
    OyGO: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s;
        })), n.d(t, "a", (function() {
            return l;
        }));
        n("vfdX"), n("Ee2X"), n("7x/C"), n("JtPf"), n("3yYM");
        var r, o = n("pqJe");
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        var s = {
            SET_DRAFTS: "SET_DRAFTS",
            REMOVE_DRAFT: "REMOVE_DRAFT"
        }, l = {
            DELETE_DRAFT: "DELETE_DRAFT"
        };
        t.c = {
            api: o.b,
            namespaced: !0,
            state: function() {
                return {
                    isInitialized: !1,
                    drafts: null,
                    hasMore: !1
                };
            },
            actions: i({}, l.DELETE_DRAFT, (function(e, t) {
                var n, r = e.commit, i = e.dispatch;
                return (n = regeneratorRuntime.mark((function e() {
                    var n, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, o.b.deleteProject(t);

                          case 3:
                            return n = e.sent, a = n.count, r(s.REMOVE_DRAFT, t), e.abrupt("return", a);

                          case 9:
                            return e.prev = 9, e.t0 = e.catch(0), e.next = 13, i("error", e.t0, {
                                root: !0
                            });

                          case 13:
                            return e.abrupt("return", void 0);

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 0, 9 ] ]);
                })), function() {
                    var e = this, t = arguments;
                    return new Promise((function(r, o) {
                        var i = n.apply(e, t);
                        function s(e) {
                            a(i, r, o, s, l, "next", e);
                        }
                        function l(e) {
                            a(i, r, o, s, l, "throw", e);
                        }
                        s(void 0);
                    }));
                })();
            })),
            mutations: (r = {}, i(r, s.SET_DRAFTS, (function(e, t) {
                var n = t.drafts;
                e.isInitialized = !0, e.drafts = n;
            })), i(r, s.REMOVE_DRAFT, (function(e, t) {
                var n = e.drafts.findIndex((function(e) {
                    return e.id === t;
                }));
                e.drafts.splice(n, 1);
            })), r)
        };
    },
    PJd8: function(e, t, n) {
        "use strict";
        var r = n("5732"), o = n("K+aO");
        var i = Object(o.default)({}, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("transition", {
                attrs: {
                    "enter-active-class": e.$style.enterActive,
                    "leave-active-class": e.$style.leaveActive
                }
            }, [ e._t("default") ], 2);
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = i.exports;
    },
    "Pi/U": function(e, t, n) {
        "use strict";
        var r = n("XHRg"), o = n.n(r);
        t.default = o.a;
    },
    PlCe: function(e, t, n) {
        "use strict";
        var r = n("B3Kk"), o = n.n(r);
        t.default = o.a;
    },
    Q1b8: function(e, t, n) {
        "use strict";
        var r = n("K+aO"), o = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16"
                }
            }, [ t("path", {
                attrs: {
                    d: "M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = o.exports;
    },
    QgwD: function(e, t, n) {
        "use strict";
        var r = n("wchg"), o = n.n(r);
        t.default = o.a;
    },
    RTCu: function(e, t, n) {
        "use strict";
        n.r(t);
        n("1t7P"), n("LW0h"), n("jwue"), n("daRM"), n("FtHn"), n("+KXO"), n("7x/C"), n("JtPf"), 
        n("+oxZ"), n("3yYM");
        var r = n("o3Nh"), o = n("AFqB"), i = n("mGku"), a = n("OQxq"), s = n("E8ap"), l = n("Tkp1"), c = i.default.extend({
            components: {
                Btn: a.default,
                PortfolioIcon: l.a
            },
            props: {
                primaryHref: {
                    default: "",
                    type: String
                },
                secondaryHref: {
                    default: "",
                    type: String
                },
                hasActions: {
                    default: !0,
                    type: Boolean
                },
                isRowLayout: {
                    default: !1,
                    type: Boolean
                },
                hasBottomGradient: {
                    default: !1,
                    type: Boolean
                }
            },
            data: function() {
                return {
                    assetsUrl: s.ASSETS_URL
                };
            }
        }), u = n("GGXc"), p = n("K+aO");
        var d = Object(p.default)(c, (function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                class: n.$style.bannerContainer
            }, [ o("div", {
                class: n.$style.leftColumn
            }, [ o("div", {
                class: [ n.$style.description, (e = {}, e[n.$style.isRowLayout] = n.isRowLayout, 
                e) ]
            }, [ o("h2", {
                class: n.$style.header
            }, [ n._t("headline", [ n._v(" Default Headline ") ]) ], 2), o("div", {
                class: n.$style.subtextGroup
            }, [ o("p", {
                class: n.$style.subtext
            }, [ n._t("subtext1", [ n._v(" Default Subtext 1. ") ]) ], 2), o("p", {
                class: n.$style.subtext
            }, [ n._t("subtext2", [ n._v(" Default Subtext 2. ") ]) ], 2) ]) ]), n.hasActions ? o("div", {
                class: n.$style.actions
            }, [ n._t("primaryAction", [ o("Btn", {
                attrs: {
                    type: "base",
                    size: "normal",
                    href: n.primaryHref,
                    target: "_blank"
                },
                on: {
                    click: function(e) {
                        return n.$emit("primaryAction", {
                            analytics: {
                                source: "banner"
                            }
                        });
                    }
                }
            }, [ n._t("primaryActionText", [ n._v(" Action 1 ") ]) ], 2) ]), n._t("secondaryAction", [ o("Btn", {
                attrs: {
                    type: "transparent",
                    size: "normal",
                    href: n.secondaryHref,
                    target: "_blank"
                },
                on: {
                    click: function(e) {
                        return n.$emit("secondaryAction", {
                            analytics: {
                                source: "banner"
                            }
                        });
                    }
                }
            }, [ n._t("secondaryActionText", [ n._v(" Action 2 ") ]) ], 2) ]) ], 2) : o("div", {
                class: n.$style.subtext
            }, [ n._t("subtext3", [ n._v(" Default Subtext 3. ") ]) ], 2) ]), o("div", {
                class: n.$style.rightColumn
            }, [ o("span", {
                class: n.$style.productImageWide
            }, [ n._t("productImageWide") ], 2), o("span", {
                class: n.$style.productImageSquare
            }, [ n._t("productImageSquare") ], 2), o("span", {
                class: n.$style.productIcon
            }, [ o("span", {
                class: n.$style.imgWrapper
            }, [ n._t("productIcon", [ o("PortfolioIcon") ]) ], 2) ]), o("span", {
                class: (t = {}, t[n.$style.hasBottomGradient] = n.hasBottomGradient, t)
            }) ]) ]);
        }), [], !1, (function(e) {
            this.$style = u.default.locals || u.default;
        }), null, null).exports, f = n("jYx+"), m = n("mLYF"), h = n("adMq"), g = n("XobZ"), v = n("nOR9"), _ = n("m6au"), w = n("D4Zf");
        function b(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function O(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        b(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                        b(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function E(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    x(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        function x(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var T = Object(v.createNamespacedHelpers)("profile/activeSection/work"), C = T.mapState, A = T.mapActions, S = Object(v.createNamespacedHelpers)("profile"), P = S.mapState, I = S.mapActions, R = {
            components: {
                ContentGrid: r.a,
                ProjectCoverNeue: f.a,
                ProjectActionConfirm: o.a,
                Btn: a.default,
                Modal: m.default,
                Banner: d,
                PortfolioIcon: l.a,
                Fade: h.a
            },
            data: function() {
                return {
                    showCloneConfirm: !1,
                    showUnpublishConfirm: !1,
                    showDeleteConfirm: !1,
                    showRemoveConfirm: !1,
                    targetCloneId: null,
                    targetUnpublishId: null,
                    targetDeleteId: null,
                    targetRemoveId: null,
                    modalStyle: {
                        minWidth: "511px"
                    },
                    pfBannerName: "work_pf_upsell_banner",
                    isPfBannerDismissed: !1,
                    hasWindow: !1,
                    assetsUrl: s.ASSETS_URL
                };
            },
            mounted: function() {
                this.getAdminFlags(), this.hasWindow = !0, this.isPfBannerDismissed = g.default.wasDialogDismissed(this.pfBannerName);
            },
            beforeCreate: function() {
                this.$store.registerModule([ "profile", "activeSection", "work" ], _.c, {
                    preserveState: !!this.$store.state.profile.activeSection.work
                }), this.$store.dispatch("profile/" + w.a.INIT_WORK, this.$router.currentRoute.params.username);
            },
            destroyed: function() {
                this.$store.unregisterModule([ "profile", "activeSection", "work" ]);
            },
            computed: E({}, Object(v.mapGetters)("user", [ "isFeatureQueueAdmin" ]), {}, Object(v.mapState)([ "gates" ]), {}, Object(v.mapState)({
                locale: function(e) {
                    return e.translation.localization.LOCALE;
                }
            }), {}, C([ "isInitialized", "projects", "hasMore" ]), {}, P({
                ownerHasPortfolio: function(e) {
                    return Boolean(e.owner && e.owner.has_portfolio);
                },
                isProfileOwner: function(e) {
                    return Boolean(e.owner && e.owner.is_profile_owner);
                },
                username: function(e) {
                    return e.owner ? e.owner.username : "";
                }
            }), {
                shouldShowModal: function() {
                    return this.showCloneConfirm || this.showUnpublishConfirm || this.showDeleteConfirm || this.showRemoveConfirm;
                },
                pfBannerUrl: function() {
                    return this.$store.state.config.PAGE_URLS.TRY_PORTFOLIO_BANNER;
                },
                showPfBanner: function() {
                    return this.gates.feature_pf_upsell && this.hasWindow && !this.isPfBannerDismissed && this.isProfileOwner && !this.ownerHasPortfolio;
                }
            }),
            methods: E({}, A({
                loadMore: _.a.LOAD_MORE_WORK,
                updateOrder: _.a.UPDATE_WORK_ORDER,
                cloneProject: _.a.CLONE_PROJECT,
                unpublishProject: _.a.UNPUBLISH_PROJECT,
                deleteProject: _.a.DELETE_PROJECT,
                removeFromProject: _.a.REMOVE_FROM_PROJECT,
                getAdminFlags: _.a.GET_ADMIN_FLAGS,
                pfBannerClicked: _.a.PF_UPSELL_BANNER_CLICKED,
                pfBannerDismissed: _.a.PF_UPSELL_BANNER_DISMISSED
            }), {}, I({
                draftCountChanged: w.a.DRAFT_COUNT_CHANGED
            }), {
                confirmUnpublishProject: function(e) {
                    var t = this;
                    return O(regeneratorRuntime.mark((function n() {
                        var r;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.unpublishProject(e);

                              case 2:
                                (r = n.sent) && t.draftCountChanged(r.unpublished);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }), n);
                    })))();
                },
                confirmCloneProject: function(e) {
                    var t = this;
                    return O(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.cloneProject(e);

                              case 2:
                                n.sent && t.$router.push({
                                    name: "profileDrafts",
                                    params: {
                                        username: t.username
                                    }
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }), n);
                    })))();
                },
                handlePfBannerDismissed: function() {
                    g.default.markDialogDismissed(this.pfBannerName), this.isPfBannerDismissed = !0;
                }
            })
        }, k = Object(p.default)(R, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.isInitialized ? n("div", {
                staticClass: "e2e-Work"
            }, [ n("Fade", [ e.showPfBanner ? n("Banner", {
                attrs: {
                    primaryHref: e.pfBannerUrl,
                    hasBottomGradient: !0
                },
                on: {
                    primaryAction: e.pfBannerClicked,
                    secondaryAction: e.handlePfBannerDismissed
                },
                scopedSlots: e._u([ {
                    key: "headline",
                    fn: function() {
                        return [ e._v(" " + e._s(e.$translate("work_banner_headline", "Try Adobe Portfolio")) + " ") ];
                    },
                    proxy: !0
                }, {
                    key: "subtext1",
                    fn: function() {
                        return [ e._v(" " + e._s(e.$translate("work_banner_subtext1", "Build a website in minutes.")) + " ") ];
                    },
                    proxy: !0
                }, {
                    key: "subtext2",
                    fn: function() {
                        return [ e._v(" " + e._s(e.$translate("work_banner_subtext2", "Free with Creative Cloud.")) + " ") ];
                    },
                    proxy: !0
                }, {
                    key: "primaryActionText",
                    fn: function() {
                        return [ e._v(" " + e._s(e.$translate("work_banner_primary_action_text", "Get Started Free")) + " ") ];
                    },
                    proxy: !0
                }, {
                    key: "secondaryActionText",
                    fn: function() {
                        return [ e._v(" " + e._s(e.$translate("work_banner_secondary_action_text", "Not Now")) + " ") ];
                    },
                    proxy: !0
                }, {
                    key: "productImageWide",
                    fn: function() {
                        return [ n("img", {
                            staticStyle: {
                                height: "auto",
                                width: "100%"
                            },
                            attrs: {
                                src: e.assetsUrl + "img/profile/work-pf-upsell@2x.png 2x",
                                srcset: e.assetsUrl + "img/profile/work-pf-upsell@2x.png 2x, " + e.assetsUrl + "img/profile/work-pf-upsell.png",
                                "aria-label": e.$translate("work_pf_upsell_banner_image_alt", "Example portfolio websites")
                            }
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "productImageSquare",
                    fn: function() {
                        return [ n("img", {
                            staticStyle: {
                                height: "auto",
                                width: "100%"
                            },
                            attrs: {
                                src: e.assetsUrl + "img/profile/work-pf-upsell-sm@2x.png 2x",
                                srcset: e.assetsUrl + "img/profile/work-pf-upsell-sm@2x.png 2x, " + e.assetsUrl + "img/profile/work-pf-upsell-sm.png",
                                "aria-label": e.$translate("work_pf_upsell_banner_image_sq_alt", "An example portfolio website")
                            }
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "productIcon",
                    fn: function() {
                        return [ n("PortfolioIcon") ];
                    },
                    proxy: !0
                } ], null, !1, 4136327604)
            }) : e._e() ], 1), n("ContentGrid", {
                ref: "contentGrid",
                attrs: {
                    showCreateModulePrompt: e.isProfileOwner && !e.projects.length,
                    contentItems: e.projects,
                    hasMore: e.hasMore,
                    canReorder: e.isProfileOwner && e.projects.length > 1,
                    createPromptUrl: "/portfolio/editor",
                    createPromptHeader: e.$translate("profile_create_a_project", "Create a Project"),
                    createPromptBody: e.$translate("profile_create_a_project_text", "Get feedback, views, and appreciations. Public projects can be featured by our curators.")
                },
                on: {
                    loadMore: function(t) {
                        return e.loadMore(e.username);
                    },
                    orderUpdated: e.updateOrder
                },
                scopedSlots: e._u([ {
                    key: "default",
                    fn: function(t) {
                        return [ n("ProjectCoverNeue", {
                            class: t.itemClass,
                            attrs: {
                                shouldShowEditDropdown: e.isProfileOwner,
                                project: t.contentItem,
                                isFeatureQueueAdmin: e.isFeatureQueueAdmin,
                                locale: e.locale,
                                useOptCovers: Boolean(e.gates.optimized_covers)
                            },
                            on: {
                                clone: function(t) {
                                    e.showCloneConfirm = !0, e.targetCloneId = t.id;
                                },
                                unpublish: function(t) {
                                    e.showUnpublishConfirm = !0, e.targetUnpublishId = t.id;
                                },
                                delete: function(t) {
                                    e.showDeleteConfirm = !0, e.targetDeleteId = t.id;
                                },
                                remove: function(t) {
                                    e.showRemoveConfirm = !0, e.targetRemoveId = t.id;
                                }
                            }
                        }) ];
                    }
                } ], null, !1, 2854980371)
            }), e.shouldShowModal ? n("portal", {
                attrs: {
                    to: "profile-content-action-modal"
                }
            }, [ n("Modal", {
                attrs: {
                    showModal: e.showCloneConfirm,
                    contentStyle: e.modalStyle,
                    contentClass: "qa-Work-modal-confirm-clone"
                },
                on: {
                    closeModal: function(t) {
                        e.showCloneConfirm = !1;
                    }
                }
            }, [ n("ProjectActionConfirm", {
                attrs: {
                    promptHeading: e.$translate("profile_confirm_project_clone_heading", "Clone Project"),
                    promptText: e.$translate("profile_confirm_project_clone_text", "Are you sure want to clone this project?"),
                    promptSubText: e.$translate("profile_confirm_project_clone_sub_text", "Cloned projects will appear in Drafts."),
                    actionLabel: e.$translate("profile_clone_action_label", "Clone")
                },
                on: {
                    confirm: function(t) {
                        e.confirmCloneProject(e.targetCloneId), e.showCloneConfirm = !1;
                    },
                    cancel: function(t) {
                        e.showCloneConfirm = !1;
                    }
                }
            }) ], 1), n("Modal", {
                attrs: {
                    showModal: e.showUnpublishConfirm,
                    contentStyle: e.modalStyle,
                    contentClass: "qa-Work-modal-confirm-unpublish"
                },
                on: {
                    closeModal: function(t) {
                        e.showUnpublishConfirm = !1;
                    }
                }
            }, [ n("ProjectActionConfirm", {
                attrs: {
                    promptHeading: e.$translate("profile_confirm_project_unpublish_heading", "Unpublish Project"),
                    promptText: e.$translate("profile_confirm_project_unpublish_text", "Are you sure want to unpublish this project?"),
                    promptSubText: e.$translate("profile_confirm_project_unpublish_sub_text", "Unpublished projects will appear in Drafts."),
                    actionLabel: e.$translate("profile_unpublish_action_label", "Unpublish")
                },
                on: {
                    confirm: function(t) {
                        e.confirmUnpublishProject(e.targetUnpublishId), e.showUnpublishConfirm = !1;
                    },
                    cancel: function(t) {
                        e.showUnpublishConfirm = !1;
                    }
                }
            }) ], 1), n("Modal", {
                attrs: {
                    showModal: e.showDeleteConfirm,
                    contentStyle: e.modalStyle,
                    contentClass: "qa-Work-modal-confirm-delete"
                },
                on: {
                    closeModal: function(t) {
                        e.showDeleteConfirm = !1;
                    }
                }
            }, [ n("ProjectActionConfirm", {
                attrs: {
                    promptHeading: e.$translate("profile_confirm_project_delete_heading", "Delete Project"),
                    promptText: e.$translate("profile_confirm_project_delete_text", "Are you sure want to delete this project?"),
                    actionLabel: e.$translate("profile_delete_action_label", "Delete")
                },
                on: {
                    confirm: function(t) {
                        e.deleteProject(e.targetDeleteId), e.showDeleteConfirm = !1;
                    },
                    cancel: function(t) {
                        e.showDeleteConfirm = !1;
                    }
                }
            }) ], 1), n("Modal", {
                attrs: {
                    showModal: e.showRemoveConfirm,
                    contentStyle: e.modalStyle,
                    contentClass: "qa-Work-modal-confirm-remove-co-ownership"
                },
                on: {
                    closeModal: function(t) {
                        e.showRemoveConfirm = !1;
                    }
                }
            }, [ n("ProjectActionConfirm", {
                attrs: {
                    promptHeading: e.$translate("profile_confirm_project_remove_heading", "Are you sure you want to remove this project from your profile?"),
                    promptText: e.$translate("profile_confirm_project_remove_text", "This project will be removed from your profile and you will no longer have access to it. However, it will still be visible on other co-owner's profiles."),
                    actionLabel: e.$translate("profile_remove_action_label", "Remove")
                },
                on: {
                    confirm: function(t) {
                        e.removeFromProject(e.targetRemoveId), e.showRemoveConfirm = !1;
                    },
                    cancel: function(t) {
                        e.showRemoveConfirm = !1;
                    }
                }
            }) ], 1) ], 1) : e._e() ], 1) : e._e();
        }), [], !1, null, null, null);
        t.default = k.exports;
    },
    RYZg: function(e, t, n) {
        var r = n("ECW0");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("a416516a", r, !0, {});
    },
    S1zT: function(e, t, n) {
        "use strict";
        var r = n("21+x"), o = n("rF8O"), i = n("Cf20"), a = n("6S3h"), s = {
            edit: "collection-item-edit",
            delete: "collection-item-delete"
        }, l = {
            components: {
                Icon: r.a,
                Tooltip: o.a,
                DropdownItem: i.a,
                TriangleIcon: a.a
            },
            props: {
                alignment: {
                    type: String,
                    default: "right"
                }
            },
            data: function() {
                return {
                    testIds: s
                };
            }
        }, c = n("I7EG"), u = n("K+aO");
        var p = Object(u.default)(l, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.root
            }, [ n("Tooltip", {
                ref: "tooltip",
                class: e.$style.cogContainer,
                attrs: {
                    isResponsive: !0,
                    horizontalPadding: 0,
                    position: "bottom",
                    alignment: e.alignment
                },
                on: {
                    didOpen: function(t) {
                        return e.$emit("featureTooltipOpen", !0);
                    },
                    didClose: function(t) {
                        return e.$emit("featureTooltipClosed", !1);
                    }
                }
            }, [ n("div", {
                class: e.$style.iconContainer,
                attrs: {
                    tabindex: "0"
                }
            }, [ n("Icon", {
                class: e.$style.editIcon,
                attrs: {
                    name: "edit"
                }
            }), n("TriangleIcon", {
                class: e.$style.triangle
            }) ], 1), n("ul", {
                class: e.$style.dropdown,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ n("DropdownItem", {
                staticClass: "qa-moodboard-item-edit"
            }, [ n("span", {
                ref: "edit",
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: function(t) {
                        return e.$emit("editCollection");
                    }
                }
            }, [ e._v(e._s(e.$translate("collection_cover_edit", "Edit"))) ]) ]), n("DropdownItem", {
                staticClass: "qa-moodboard-item-delete"
            }, [ n("span", {
                ref: "delete",
                class: e.$style.menuItem,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: function(t) {
                        return e.$emit("deleteFromCollection");
                    }
                }
            }, [ e._v(e._s(e.$translate("moodboard_delete_single_project", "Delete from Moodboard"))) ]) ]) ], 1) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = c.default.locals || c.default;
        }), null, null);
        t.a = p.exports;
    },
    SjsP: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s;
        })), n.d(t, "a", (function() {
            return l;
        }));
        var r = n("BHX3"), o = (n("KqXw"), n("MvUL"), n("dBrB")), i = n.n(o), a = (n("scEC"), 
        {
            en_US: "en",
            cs_CZ: "cs",
            da_DK: "da-dk",
            de_DE: "de",
            es_ES: "es",
            fr_FR: "fr",
            it_IT: "it",
            nl_NL: "nl-nl",
            nb_NO: "no",
            pl_PL: "pl",
            pt_BR: "pt-br",
            ru_RU: "ru",
            fi_FI: "fi",
            tr_TR: "tr",
            ja_JP: "ja",
            zh_CN: "chs",
            zh_TW: "chs"
        });
        function s(e, t) {
            return void 0 === t && (t = "en-US"), r.default.formatNumber(e, t);
        }
        function l(e, t) {
            return void 0 === t && (t = "en-US"), function(e, t) {
                return e < 1e3 ? e.toLocaleString() : (i.a.locale(a[t] || "en"), i()(e).format("0.0a").replace(".0", ""));
            }(e, t);
        }
    },
    TYXv: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r;
        })), n.d(t, "a", (function() {
            return o;
        })), n.d(t, "e", (function() {
            return i;
        })), n.d(t, "d", (function() {
            return a;
        })), n.d(t, "c", (function() {
            return s;
        }));
        n("7xRU"), n("6U7i");
        var r = "404", o = "202";
        function i(e) {
            var t, n;
            return null !== (t = null === (n = e.size_404) || void 0 === n ? void 0 : n.url) && void 0 !== t ? t : e[r];
        }
        function a(e) {
            return e[o];
        }
        function s(e) {
            if (e.covers) {
                e.cover_sizes = "115px", e.cover_src = e.covers[115] || e.covers.original;
                var t = [];
                for (var n in e.covers) isNaN(Number(n)) || t.push(e.covers[n] + " " + n + "w");
                e.cover_srcset = t.join(",");
            }
        }
    },
    Tkp1: function(e, t, n) {
        "use strict";
        var r = n("K+aO"), o = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 198 195"
                }
            }, [ t("defs", [ t("clipPath", {
                attrs: {
                    id: "a"
                }
            }, [ t("path", {
                attrs: {
                    d: "M0 0h198v195H0z"
                }
            }) ]) ]), t("g", {
                attrs: {
                    "clip-path": "url(#a)"
                }
            }, [ t("path", {
                attrs: {
                    d: "M35.063 0h127.875A35.241 35.241 0 01198 35.417v124.166A35.241 35.241 0 01162.938 195H35.063A35.241 35.241 0 010 159.583V35.417A35.241 35.241 0 0135.063 0z",
                    fill: "#000b1d"
                }
            }), t("g", {
                attrs: {
                    fill: "#fff"
                }
            }, [ t("path", {
                attrs: {
                    d: "M47.036 135.741V51.32c0-.619.266-.93.8-.93q2.123 0 5.047-.066t6.309-.133q3.387-.066 7.173-.133t7.5-.066a49.886 49.886 0 0117 2.524 29.5 29.5 0 0111.094 6.769 25.984 25.984 0 016.043 9.364 31.06 31.06 0 011.86 10.692q0 10.628-4.915 17.533a27.768 27.768 0 01-13.283 10.028 52.847 52.847 0 01-18.6 3.122q-2.923 0-4.118-.066c-.8-.044-2.321.146-3.915.146v25.713a1.057 1.057 0 01-1.2 1.2l-15.876-.212c-.61-.001-.919-.354-.919-1.064zm18-69.2v27.495c1.15.089 2.541-.08 3.517-.08h4.383a31.337 31.337 0 009.5-1.328 14.321 14.321 0 006.774-4.383q2.59-3.054 2.59-8.5a13.433 13.433 0 00-1.926-7.306 12.387 12.387 0 00-5.778-4.715 24.617 24.617 0 00-9.7-1.66q-3.188 0-5.645.066a29.144 29.144 0 00-3.714.411zM127.083 86.538h-8.163c-.621-.087-.93-.4-.93-.93V71.981a.822.822 0 01.93-.93h8.163v-1.933a46.62 46.62 0 01.664-8.3 26.358 26.358 0 012.125-6.708 23.047 23.047 0 017.571-8.9q4.913-3.452 13.017-3.453a33.875 33.875 0 013.852.2 11.976 11.976 0 013.055.731 1.368 1.368 0 01.93 1.328v13.15q0 .931-1.063.664a14.357 14.357 0 00-1.992-.133h-1.992a8.984 8.984 0 00-4.184.93 5.686 5.686 0 00-2.656 3.121 15.582 15.582 0 00-1.3 5.911v3.393h11.194q.8 0 1 .266a1.329 1.329 0 01.2.8v13.5q0 .931-1.2.93h-11.196v49.07a1.767 1.767 0 01-.2.8q-.2.4-1 .4h-15.763c-.71 0-1.063-.4-1.063-1.2z"
                }
            }) ]) ]) ]);
        }), [], !1, null, null, null);
        t.a = o.exports;
    },
    VB2i: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".CreateModulePrompt-root-3_Z {\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 1px dashed #b7b7b7;\n  position: relative;\n  text-align: center;\n  -webkit-transition: background-color 0.15s linear;\n  transition: background-color 0.15s linear;\n}\n.CreateModulePrompt-root-3_Z:hover {\n    background-color: #f2f2f2;\n}\n.CreateModulePrompt-root-3_Z:hover .CreateModulePrompt-createProjectLink-_Qp {\n      text-decoration: inherit;\n}\n.CreateModulePrompt-createProjectLink-_Qp {\n  bottom: 0;\n  color: #959595;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  text-decoration: none;\n  top: 0;\n}\n.CreateModulePrompt-iconAndHeading-3EO {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.CreateModulePrompt-heading-4T2 {\n  font-size: 22px;\n  font-weight: normal;\n  letter-spacing: -0.02rem;\n}\n@media (min-width: 604px) and (max-width: 1200px) {\n.CreateModulePrompt-heading-4T2 {\n      font-size: 18px;\n}\n}\n.CreateModulePrompt-createIcon-1zo {\n  -webkit-box-align: center;\n          align-items: center;\n  border: 2px solid #ddd;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  height: 44px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0 auto 15px;\n  position: relative;\n  width: 44px;\n}\n@media (min-width: 604px) and (max-width: 1200px) {\n.CreateModulePrompt-createIcon-1zo {\n      margin-bottom: 5px;\n}\n}\n.CreateModulePrompt-createIcon-1zo::before, .CreateModulePrompt-createIcon-1zo::after {\n    background-color: #ddd;\n    bottom: 10px;\n    content: '';\n    left: calc(50% - 1px);\n    position: absolute;\n    top: 10px;\n    width: 2px;\n}\n.CreateModulePrompt-createIcon-1zo::after {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.CreateModulePrompt-isCollection-1iw .CreateModulePrompt-createIcon-1zo .CreateModulePrompt-iconSvg-1Pn {\n  height: 18px;\n  width: 18px;\n}\n.CreateModulePrompt-isCollection-1iw .CreateModulePrompt-createIcon-1zo::before, .CreateModulePrompt-isCollection-1iw .CreateModulePrompt-createIcon-1zo::after {\n  display: none;\n}\n.CreateModulePrompt-isAppreciation-2Zq .CreateModulePrompt-createIcon-1zo {\n  height: 30px;\n  width: 30px;\n}\n.CreateModulePrompt-isAppreciation-2Zq .CreateModulePrompt-createIcon-1zo .CreateModulePrompt-iconSvg-1Pn {\n    height: 14px;\n    width: 14px;\n}\n.CreateModulePrompt-isAppreciation-2Zq .CreateModulePrompt-createIcon-1zo::before, .CreateModulePrompt-isAppreciation-2Zq .CreateModulePrompt-createIcon-1zo::after {\n    display: none;\n}\n.CreateModulePrompt-isAppreciation-2Zq .CreateModulePrompt-heading-4T2 {\n  font-size: 16px;\n}\n.CreateModulePrompt-iconSvg-1Pn {\n  fill: #ddd;\n}\n.CreateModulePrompt-text-tle {\n  flex-shrink: 0;\n  font-size: 14px;\n  line-height: 1.25;\n  margin-top: auto;\n  padding: 0 5% 15px;\n}\n@media (min-width: 604px) and (max-width: 1200px) {\n.CreateModulePrompt-text-tle {\n      font-size: 12px;\n}\n}\n.CreateModulePrompt-paragraph-3SJ {\n  line-height: inherit;\n  margin: 3px auto;\n}\n", "" ]), 
        t.locals = {
            root: "CreateModulePrompt-root-3_Z",
            createProjectLink: "CreateModulePrompt-createProjectLink-_Qp",
            iconAndHeading: "CreateModulePrompt-iconAndHeading-3EO",
            heading: "CreateModulePrompt-heading-4T2",
            createIcon: "CreateModulePrompt-createIcon-1zo",
            isCollection: "CreateModulePrompt-isCollection-1iw",
            iconSvg: "CreateModulePrompt-iconSvg-1Pn",
            isAppreciation: "CreateModulePrompt-isAppreciation-2Zq",
            text: "CreateModulePrompt-text-tle",
            paragraph: "CreateModulePrompt-paragraph-3SJ"
        };
    },
    VCi3: function(e, t, n) {
        e.exports = n("ydjK")("VCi3");
    },
    VGNt: function(e, t, n) {
        "use strict";
        var r = n("Edvo"), o = n.n(r);
        t.default = o.a;
    },
    VfML: function(e, t, n) {
        "use strict";
        n("jQ3i");
        var r = n("L7BO"), o = n("X+Pi"), i = {
            components: {
                OwnersGqlAdapted: r.a,
                Title: o.a
            },
            props: {
                url: String,
                title: String,
                owners: Array,
                isSmall: Boolean,
                isMedium: Boolean,
                shouldOpenProjectPopupOnClick: Boolean,
                isFeatured: Boolean,
                limitHeight: Boolean,
                trackingSource: String,
                theme: {
                    type: String,
                    default: "light",
                    validator: function(e) {
                        return [ "light", "dark" ].includes(e);
                    }
                },
                hasShadowText: {
                    type: Boolean,
                    default: !0
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                },
                shouldShowOwner: {
                    type: Boolean,
                    default: !0
                }
            }
        }, a = n("9Qgw"), s = n("K+aO");
        var l = Object(s.default)(i, (function() {
            var e, t, n, r, o, i = this, a = i.$createElement, s = i._self._c || a;
            return s("span", {
                ref: "root",
                class: [ (e = {}, e[i.$style.limitHeight] = i.limitHeight, e) ]
            }, [ s("Title", {
                ref: "title",
                class: i.$style.title,
                attrs: {
                    url: i.url,
                    isSmall: i.isSmall,
                    isMedium: i.isMedium,
                    shouldOpenProjectPopupOnClick: i.shouldOpenProjectPopupOnClick,
                    isFeatured: i.isFeatured,
                    hasShadow: i.hasShadowText
                },
                on: {
                    focus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    blur: function(e) {
                        return i.$emit("elOnBlur");
                    }
                }
            }, [ i._v(i._s(i.title)) ]), i.shouldShowOwner ? s("OwnersGqlAdapted", {
                ref: "ownersAdapted",
                class: [ i.$style.owner, (t = {}, t[i.$style.smallOwner] = i.isSmall, t), (n = {}, 
                n[i.$style.mediumOwner] = i.isMedium, n) ],
                attrs: {
                    owners: i.owners,
                    ownerTextClass: [ (r = {}, r[i.$style.shadowText] = i.hasShadowText, r), (o = {}, 
                    o[i.$style.smallOwnerArrow] = i.isSmall, o) ],
                    theme: i.theme,
                    shouldRemoveMultiOwnerTooltip: i.shouldRemoveMultiOwnerTooltip,
                    trackingSource: i.trackingSource,
                    assetUrl: i.url
                },
                on: {
                    ownerOnFocus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    ownerOnBlur: function(e) {
                        return i.$emit("elOnBlur");
                    },
                    tooltipOnFocus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    tooltipOnBlur: function(e) {
                        return i.$emit("elOnBlur");
                    }
                }
            }) : i._e() ], 1);
        }), [], !1, (function(e) {
            this.$style = a.default.locals || a.default;
        }), null, null);
        t.a = l.exports;
    },
    "W/al": function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".ProjectActionConfirm-root-2r4 {\n  max-width: 500px;\n  padding-right: 30px;\n  text-align: left;\n}\n.ProjectActionConfirm-heading-1xr {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin-bottom: 10px;\n}\n.ProjectActionConfirm-prompt-10f {\n  font-size: 15px;\n}\n.ProjectActionConfirm-promptSub-2jJ {\n  font-size: 15px;\n}\n.ProjectActionConfirm-actions-1jb {\n  margin-top: 43px;\n}\n", "" ]), 
        t.locals = {
            root: "ProjectActionConfirm-root-2r4",
            heading: "ProjectActionConfirm-heading-1xr",
            prompt: "ProjectActionConfirm-prompt-10f",
            promptSub: "ProjectActionConfirm-promptSub-2jJ",
            actions: "ProjectActionConfirm-actions-1jb"
        };
    },
    WAsV: function(e, t, n) {
        "use strict";
        var r = {
            props: {
                color: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                hasAllChannels: function() {
                    return this.color && this.color.hasOwnProperty("r") && this.color.hasOwnProperty("g") && this.color.hasOwnProperty("b");
                }
            }
        }, o = n("pPXI"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.hasAllChannels ? n("div", {
                ref: "dominantColor",
                class: e.$style.dominantColor,
                style: {
                    backgroundColor: "rgb(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ")"
                }
            }) : n("svg", {
                ref: "fallbackImage",
                class: e.$style.colorFallback,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 65 65"
                }
            }, [ n("g", {
                attrs: {
                    transform: "translate(-27 -27)"
                }
            }, [ n("path", {
                class: e.$style.fallbackIconPath,
                attrs: {
                    d: "M27,27V92H92V27ZM72.217,41.13A7.065,7.065,0,1,1,65.152,48.2,7,7,0,0,1,72.217,41.13ZM34.065,75.043l18.37-18.37L66.565,70.8l7.065-7.065,11.3,11.3Z"
                }
            }) ]) ]);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    WOLC: function(e, t, n) {
        "use strict";
        var r = n("RYZg"), o = n.n(r);
        t.default = o.a;
    },
    WOrW: function(e, t, n) {
        "use strict";
        var r = n("PlCe"), o = n("K+aO");
        var i = Object(o.default)({}, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("svg", {
                class: e.$style.icon,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0.5 0.5 16 16"
                }
            }, [ n("path", {
                attrs: {
                    fill: "none",
                    d: "M.5.5h16v16H.5z"
                }
            }), n("path", {
                ref: "path",
                attrs: {
                    d: "M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"
                }
            }) ]);
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = i.exports;
    },
    Wrh9: function(e, t, n) {
        var r = n("DV2o");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("53f0ccae", r, !0, {});
    },
    "X+Pi": function(e, t, n) {
        "use strict";
        var r = {
            props: {
                url: {
                    type: String
                },
                isSmall: {
                    type: Boolean
                },
                isMedium: {
                    type: Boolean
                },
                shouldOpenProjectPopupOnClick: {
                    type: Boolean
                },
                isFeatured: {
                    type: Boolean
                },
                hasShadow: {
                    type: Boolean,
                    default: !0
                }
            }
        }, o = n("pmnR"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e, t, n, r, o, i = this, a = i.$createElement;
            return (i._self._c || a)("a", {
                ref: "link",
                class: [ i.$style.title, "e2e-Title-owner", (e = {}, e[i.$style.smallTitle] = i.isSmall, 
                e), (t = {}, t[i.$style.mediumTitle] = i.isMedium, t), (n = {}, n[i.$style.featured] = i.isFeatured, 
                n), (r = {}, r[i.$style.hasShadow] = i.hasShadow, r), (o = {}, o["js-project-cover-title-link"] = i.shouldOpenProjectPopupOnClick, 
                o) ],
                attrs: {
                    href: i.url
                },
                on: {
                    focus: function(e) {
                        return i.$emit("focus");
                    },
                    blur: function(e) {
                        return i.$emit("blur");
                    }
                }
            }, [ i._t("default") ], 2);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    X6fh: function(e, t, n) {
        "use strict";
        var r = n("rF8O"), o = n("ZbwM"), i = {
            components: {
                Tooltip: r.a,
                LockIcon: o.a
            }
        }, a = n("pwzF"), s = n("K+aO");
        var l = Object(s.default)(i, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ e.$slots.tooltipContent ? n("Tooltip", {
                attrs: {
                    position: "bottom",
                    alignment: "right"
                }
            }, [ n("LockIcon", {
                class: e.$style.privacyLock
            }), n("div", {
                class: e.$style.privacyTooltip,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ e._t("tooltipContent") ], 2) ], 1) : n("div", {
                class: e.$style.lockWrapper
            }, [ n("LockIcon", {
                class: e.$style.lock
            }), e._v(" " + e._s(e.$translate("project_cover_marked_private_label", "Private")) + " ") ], 1) ], 1);
        }), [], !1, (function(e) {
            this.$style = a.default.locals || a.default;
        }), null, null);
        t.a = l.exports;
    },
    XHRg: function(e, t, n) {
        var r = n("W/al");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("d38baeea", r, !0, {});
    },
    Xrwb: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".FadeDown-enterActive-3hn {\n  -webkit-animation: FadeDown-fadeDown-3o5 0.25s;\n          animation: FadeDown-fadeDown-3o5 0.25s;\n  -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.FadeDown-leaveActive-1v9 {\n  animation: FadeDown-fadeDown-3o5 0.25s reverse;\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n          animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n}\n@-webkit-keyframes FadeDown-fadeDown-3o5 {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes FadeDown-fadeDown-3o5 {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n", "" ]), 
        t.locals = {
            enterActive: "FadeDown-enterActive-3hn",
            fadeDown: "FadeDown-fadeDown-3o5",
            leaveActive: "FadeDown-leaveActive-1v9"
        };
    },
    Y4Yb: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Title-title-3nk {\n  color: inherit;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: -2px;\n  max-height: 43px;\n  max-width: 100%;\n  overflow: hidden;\n  padding-bottom: 2px;\n  pointer-events: all;\n  text-overflow: ellipsis;\n}\n.Title-title-3nk.Title-featured-24h {\n    color: #0057ff;\n}\n.Title-title-3nk.Title-hasShadow-14p {\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.Title-smallTitle-3gU {\n  font-size: 12px;\n  max-height: 33px;\n}\n.Title-mediumTitle-J-V {\n  font-size: 15px;\n  padding-bottom: 0;\n}\n", "" ]), 
        t.locals = {
            title: "Title-title-3nk",
            featured: "Title-featured-24h",
            hasShadow: "Title-hasShadow-14p",
            smallTitle: "Title-smallTitle-3gU",
            mediumTitle: "Title-mediumTitle-J-V"
        };
    },
    ZbwM: function(e, t, n) {
        "use strict";
        var r = n("K+aO"), o = Object(r.default)({}, (function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16"
                }
            }, [ t("path", {
                attrs: {
                    fill: "none",
                    d: "M0 0v16h16V0H0zm14 15H2V7h2V5c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v8z"
                }
            }), t("path", {
                attrs: {
                    fill: "none",
                    d: "M8 3c-1.104 0-2 .895-2 2v2h4V5c0-1.105-.896-2-2-2z"
                }
            }), t("path", {
                attrs: {
                    d: "M12 5c0-2.21-1.79-4-4-4S4 2.79 4 5v2H2v8h12V7h-2V5zm-2 2H6V5c0-1.105.896-2 2-2s2 .895 2 2v2z"
                }
            }) ]);
        }), [], !1, null, null, null);
        t.a = o.exports;
    },
    adMq: function(e, t, n) {
        "use strict";
        var r = {
            props: {
                mode: {
                    type: String
                },
                appear: Boolean
            }
        }, o = n("HbXO"), i = n("K+aO");
        var a = Object(i.default)(r, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("transition", {
                attrs: {
                    "enter-active-class": e.$style.enterActive,
                    "leave-active-class": e.$style.leaveActive,
                    mode: e.mode,
                    appear: e.appear
                },
                on: {
                    "after-leave": function(t) {
                        return e.$emit("transitionComplete");
                    }
                }
            }, [ e._t("default") ], 2);
        }), [], !1, (function(e) {
            this.$style = o.default.locals || o.default;
        }), null, null);
        t.a = a.exports;
    },
    aeYG: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Fade-enterActive-330 {\n  -webkit-animation: Fade-fade-cgL 0.3s;\n          animation: Fade-fade-cgL 0.3s;\n}\n.Fade-leaveActive-1fN {\n  animation: Fade-fade-cgL 0.3s reverse;\n}\n@-webkit-keyframes Fade-fade-cgL {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes Fade-fade-cgL {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n", "" ]), 
        t.locals = {
            enterActive: "Fade-enterActive-330",
            fade: "Fade-fade-cgL",
            leaveActive: "Fade-leaveActive-1fN"
        };
    },
    ayNN: function(e, t, n) {
        "use strict";
        var r = n("xWxV"), o = n.n(r);
        t.default = o.a;
    },
    bTtm: function(e, t, n) {
        "use strict";
        n("1t7P"), n("LW0h"), n("jwue"), n("jQ3i"), n("daRM"), n("FtHn"), n("+KXO"), n("+oxZ");
        var r = n("rF8O"), o = {
            name: "OwnerRow",
            props: {
                owner: {
                    type: Object,
                    required: !0
                }
            }
        }, i = n("vsU+"), a = n("K+aO");
        var s = Object(a.default)(o, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.row
            }, [ n("a", {
                ref: "link",
                class: [ e.$style.link, "js-mini-profile" ],
                attrs: {
                    href: e.owner.url,
                    "data-id": e.owner.id
                },
                on: {
                    focus: function(t) {
                        return e.$emit("rowOnFocus");
                    },
                    blur: function(t) {
                        return e.$emit("rowOnBlur");
                    }
                }
            }, [ n("span", {
                class: e.$style.imageWrap
            }, [ n("img", {
                class: e.$style.image,
                attrs: {
                    src: e.owner.images.size_50 && e.owner.images.size_50.url
                }
            }) ]), n("span", {
                class: e.$style.name
            }, [ e._v(e._s(e.owner.displayName)) ]) ]) ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null).exports, l = n("6319");
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var p = {
            name: "Owners",
            props: {
                owners: {
                    type: Array
                },
                ownerTextClass: {
                    type: Array
                },
                trackingSource: {
                    type: String
                },
                theme: {
                    type: String,
                    validator: function(e) {
                        return [ "light", "dark" ].includes(e);
                    },
                    default: "light"
                },
                showAvatar: {
                    type: Boolean
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isMultipleOwnerInFocus: !1,
                    shouldTooltipOpen: !1
                };
            },
            components: {
                Tooltip: r.a,
                OwnerRow: s
            },
            methods: {
                getUrl: function(e, t) {
                    return this.trackingSource && (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(n), !0).forEach((function(t) {
                                u(e, t, n[t]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            }));
                        }
                        return e;
                    }({}, t, {
                        tracking_source: this.trackingSource
                    })), Object(l.a)(e, t);
                }
            }
        }, d = n("7dZA");
        var f = Object(a.default)(p, (function() {
            var e, t = this, n = t.$createElement, r = t._self._c || n;
            return t.owners.length ? r("div", {
                class: [ t.$style.root, t.$style[t.theme], (e = {}, e[t.$style.overflowText] = 1 === t.owners.length, 
                e) ]
            }, [ t.owners.length > 1 && !t.shouldRemoveMultiOwnerTooltip ? r("div", {
                class: t.$style.tooltipContainer
            }, [ r("Tooltip", {
                ref: "ownersList",
                attrs: {
                    hasTextTrigger: !0,
                    position: "bottom",
                    alignment: "right",
                    alignmentOffset: -15,
                    canTruncateTrigger: !0,
                    isOpen: t.shouldTooltipOpen
                },
                nativeOn: {
                    keyup: function(e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.shouldTooltipOpen = !t.shouldTooltipOpen;
                    },
                    focus: function(e) {
                        return t.$emit("tooltipOnFocus");
                    },
                    blur: function(e) {
                        return t.$emit("tooltipOnBlur");
                    }
                }
            }, [ r("div", {
                class: [ t.$style.arrow, t.$style.overflowText, t.$style.multipleOwnersText, t.ownerTextClass ]
            }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]), r("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ r("div", {
                class: t.$style.list
            }, t._l(t.owners, (function(e, n) {
                return r("OwnerRow", {
                    key: "owner-" + n,
                    ref: "ownerRow",
                    refInFor: !0,
                    attrs: {
                        owner: e
                    },
                    on: {
                        rowOnFocus: function(e) {
                            return t.$emit("ownerOnFocus");
                        },
                        rowOnBlur: function(e) {
                            return t.$emit("ownerOnBlur");
                        }
                    }
                });
            })), 1) ]) ]) ], 1) : t._e(), t.owners.length > 1 && t.shouldRemoveMultiOwnerTooltip ? r("div", {
                class: t.$style.tooltipContainer
            }, [ r("div", {
                class: [ t.$style.overflowText, t.ownerTextClass ]
            }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]) ]) : t._e(), t.owners.length <= 1 ? r("span", {
                class: [ "js-mini-profile", t.$style.ownerAndAvatar ],
                attrs: {
                    "data-id": t.owners[0].id
                }
            }, [ 1 === t.owners.length && t.showAvatar ? r("span", {
                class: t.$style.ownerImage
            }, [ r("img", {
                ref: "avatar",
                class: t.$style.ownerImageEl,
                attrs: {
                    src: t.owners[0].images.size_50 && t.owners[0].images.size_50.url,
                    alt: t.owners[0].displayName
                }
            }) ]) : t._e(), r("a", {
                ref: "singleOwner",
                class: [ t.$style.owner, t.ownerTextClass, "e2e-Owner-user-link" ],
                attrs: {
                    href: t.getUrl(t.owners[0].url)
                },
                on: {
                    focus: function(e) {
                        return t.$emit("ownerOnFocus");
                    },
                    blur: function(e) {
                        return t.$emit("ownerOnBlur");
                    }
                }
            }, [ t._v(t._s(t.owners[0].displayName)) ]) ]) : t._e() ]) : t._e();
        }), [], !1, (function(e) {
            this.$style = d.default.locals || d.default;
        }), null, null);
        t.a = f.exports;
    },
    bYYW: function(e, t, n) {
        var r = n("D3xf");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("3838a463", r, !0, {});
    },
    bh4W: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s;
        })), n.d(t, "a", (function() {
            return l;
        }));
        n("2G9S"), n("7x/C"), n("JtPf"), n("3yYM");
        var r, o = n("pqJe");
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        var s = {
            SET_APPRECIATIONS: "SET_APPRECIATIONS",
            APPEND_APPRECIATIONS: "APPEND_APPRECIATIONS"
        }, l = {
            LOAD_MORE_APPRECIATIONS: "LOAD_MORE_APPRECIATIONS"
        };
        t.c = {
            namespaced: !0,
            state: function() {
                return {
                    isInitialized: !1,
                    appreciations: null,
                    hasMore: !1,
                    offset: 0
                };
            },
            actions: i({}, l.LOAD_MORE_APPRECIATIONS, (function(e, t) {
                var n, r = e.state, i = e.commit, l = e.dispatch;
                return (n = regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!r.appreciations.length || !r.hasMore) {
                                e.next = 13;
                                break;
                            }
                            return e.prev = 1, e.next = 4, o.b.getMoreAppreciations(t, r.offset);

                          case 4:
                            n = e.sent, i(s.APPEND_APPRECIATIONS, {
                                appreciations: n
                            }), e.next = 13;
                            break;

                          case 8:
                            return e.prev = 8, e.t0 = e.catch(1), i(s.SET_APPRECIATIONS, {
                                appreciations: {
                                    appreciations: r.appreciations,
                                    hasMore: !1,
                                    offset: r.offset
                                }
                            }), e.next = 13, l("error", e.t0, {
                                root: !0
                            });

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 8 ] ]);
                })), function() {
                    var e = this, t = arguments;
                    return new Promise((function(r, o) {
                        var i = n.apply(e, t);
                        function s(e) {
                            a(i, r, o, s, l, "next", e);
                        }
                        function l(e) {
                            a(i, r, o, s, l, "throw", e);
                        }
                        s(void 0);
                    }));
                })();
            })),
            mutations: (r = {}, i(r, s.SET_APPRECIATIONS, (function(e, t) {
                var n = t.appreciations;
                e.isInitialized = !0, e.appreciations = n.appreciations, e.hasMore = n.hasMore, 
                e.offset = n.offset;
            })), i(r, s.APPEND_APPRECIATIONS, (function(e, t) {
                var n = t.appreciations, r = e.appreciations ? e.appreciations : [];
                e.appreciations = r.concat(n.appreciations), e.hasMore = n.hasMore, e.offset = n.offset;
            })), r)
        };
    },
    br6t: function(e, t, n) {
        var r = n("4qDW");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("474f9cda", r, !0, {});
    },
    cQ27: function(e, t, n) {
        "use strict";
        var r = n("HKCO"), o = n.n(r);
        t.default = o.a;
    },
    cnrH: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c;
        })), n.d(t, "b", (function() {
            return u;
        }));
        n("7x/C"), n("JtPf"), n("3yYM");
        var r, o, i = n("pqJe");
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function s(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function l(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        s(i, r, o, a, l, "next", e);
                    }
                    function l(e) {
                        s(i, r, o, a, l, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        var c = {
            DONT_SHOW_AGAIN_CLICKED: "DONT_SHOW_AGAIN_CLICKED",
            BANNER_IMAGE_UPLOADED: "BANNER_IMAGE_UPLOADED",
            BANNER_IMAGE_DELETED: "BANNER_IMAGE_DELETED",
            UPDATE_USERNAME: "UPDATE_USERNAME",
            MARK_AS_DONE: "MARK_AS_DONE",
            AVATAR_UPDATED: "AVATAR_UPDATED",
            OPEN_DOWNLOAD_APP_MODAL: "OPEN_DOWNLOAD_APP_MODAL",
            CLOSE_DOWNLOAD_APP_MODAL: "CLOSE_DOWNLOAD_APP_MODAL",
            CHECK_AVAILABILITY: "CHECK_AVAILABILITY"
        }, u = {
            SET_DONT_SHOW_AGAIN: "SET_DONT_SHOW_AGAIN",
            SET_BANNER_IMAGE_UPLOADED: "SET_BANNER_IMAGE_UPLOADED",
            SET_USERNAME: "SET_USERNAME",
            SET_USERNAME_SETTING_STATUS: "SET_USERNAME_SETTING_STATUS",
            SET_AVATAR: "SET_AVATAR",
            SET_DOWNLOAD_APP_MODAL_VISIBILITY: "SET_DOWNLOAD_APP_MODAL_VISIBILITY",
            SET_USERNAME_IS_VALIDATED: "SET_USERNAME_IS_VALIDATED",
            SET_USERNAME_ERROR_MESSAGE: "SET_USERNAME_ERROR_MESSAGE",
            SET_SHOULDHIDE: "SET_SHOULDHIDE",
            SET_HASUSERNAME: "SET_HASUSERNAME",
            SET_HASAPP: "SET_HASAPP",
            SET_USERNAME_VALIDATION_RULE: "SET_USERNAME_VALIDATION_RULE"
        };
        t.c = {
            namespaced: !0,
            api: i.b,
            state: function() {
                return {
                    hasCoverImg: !1,
                    hasProfilePhoto: !1,
                    hasUsername: !1,
                    hasApp: !1,
                    shouldHide: !1,
                    isSettingUsername: !1,
                    username: "",
                    isDownloadAppModalOpen: !1,
                    isUsernameValidated: !1,
                    usernameErrorMessage: "",
                    usernameValidationRule: ""
                };
            },
            actions: (r = {}, a(r, c.BANNER_IMAGE_UPLOADED, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", t(u.SET_BANNER_IMAGE_UPLOADED, !0));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.BANNER_IMAGE_DELETED, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", t(u.SET_BANNER_IMAGE_UPLOADED, !1));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.DONT_SHOW_AGAIN_CLICKED, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t(u.SET_DONT_SHOW_AGAIN), e.next = 3, i.b.hideChecklist();

                          case 3:
                            return e.abrupt("return", e.sent);

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.MARK_AS_DONE, (function() {
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, i.b.hideChecklist();

                          case 2:
                            return e.abrupt("return", e.sent);

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.AVATAR_UPDATED, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", t(u.SET_AVATAR));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.OPEN_DOWNLOAD_APP_MODAL, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", t(u.SET_DOWNLOAD_APP_MODAL_VISIBILITY, !0));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.CLOSE_DOWNLOAD_APP_MODAL, (function(e) {
                var t = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", t(u.SET_DOWNLOAD_APP_MODAL_VISIBILITY, !1));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), a(r, c.CHECK_AVAILABILITY, (function(e, t) {
                var n = e.commit;
                return l(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n(u.SET_USERNAME_IS_VALIDATED, !1), e.prev = 1, e.next = 4, i.b.checkAvailability(t);

                          case 4:
                            return n(u.SET_USERNAME_ERROR_MESSAGE, ""), n(u.SET_USERNAME_IS_VALIDATED, !0), 
                            e.abrupt("return");

                          case 9:
                            return e.prev = 9, e.t0 = e.catch(1), n(u.SET_USERNAME_ERROR_MESSAGE, e.t0.responseJSON.errors.slug), 
                            e.abrupt("return");

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 9 ] ]);
                })))();
            })), a(r, c.UPDATE_USERNAME, (function(e, t) {
                var n = e.commit, r = e.dispatch;
                return l(regeneratorRuntime.mark((function e() {
                    var o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n(u.SET_USERNAME_SETTING_STATUS, !0), e.prev = 1, e.next = 4, i.b.updateUsername(t);

                          case 4:
                            return n(u.SET_USERNAME, t), n(u.SET_USERNAME_SETTING_STATUS, !1), e.abrupt("return");

                          case 9:
                            return e.prev = 9, e.t0 = e.catch(1), o = {
                                message: e.t0.responseJSON.errors.username
                            }, n(u.SET_USERNAME_SETTING_STATUS, !1), e.next = 15, r("error", o, {
                                root: !0
                            });

                          case 15:
                            return e.abrupt("return");

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 1, 9 ] ]);
                })))();
            })), r),
            mutations: (o = {}, a(o, u.SET_USERNAME_SETTING_STATUS, (function(e, t) {
                e.isSettingUsername = t;
            })), a(o, u.SET_HASUSERNAME, (function(e, t) {
                e.hasUsername = t;
            })), a(o, u.SET_HASAPP, (function(e, t) {
                e.hasApp = t;
            })), a(o, u.SET_SHOULDHIDE, (function(e, t) {
                e.shouldHide = t;
            })), a(o, u.SET_USERNAME_VALIDATION_RULE, (function(e, t) {
                e.usernameValidationRule = t;
            })), a(o, u.SET_USERNAME, (function(e, t) {
                e.hasUsername = !0, e.username = t;
            })), a(o, u.SET_BANNER_IMAGE_UPLOADED, (function(e, t) {
                e.hasCoverImg = t;
            })), a(o, u.SET_DONT_SHOW_AGAIN, (function(e) {
                e.shouldHide = !0;
            })), a(o, u.SET_AVATAR, (function(e) {
                e.hasProfilePhoto = !0;
            })), a(o, u.SET_DOWNLOAD_APP_MODAL_VISIBILITY, (function(e, t) {
                e.isDownloadAppModalOpen = t;
            })), a(o, u.SET_USERNAME_IS_VALIDATED, (function(e, t) {
                e.isUsernameValidated = t;
            })), a(o, u.SET_USERNAME_ERROR_MESSAGE, (function(e, t) {
                e.usernameErrorMessage = t;
            })), o)
        };
    },
    e9kW: function(e, t, n) {
        var r = n("DL1L");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("5195c8be", r, !0, {});
    },
    eITA: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Gear-root-59Y {\n  fill: #191919;\n}\n.Gear-path-1nA {\n  fill: inherit;\n}\n", "" ]), 
        t.locals = {
            root: "Gear-root-59Y",
            path: "Gear-path-1nA"
        };
    },
    fVMg: function(e, t, n) {
        e.exports = n("ydjK")("fVMg");
    },
    iPCZ: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o;
        })), n.d(t, "a", (function() {
            return i;
        }));
        var r = n("D57K");
        function o(e) {
            if ("object" != typeof e) return {};
            for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
                var o = r[n], i = e[o];
                if ("string" == typeof i) t[o.startsWith("size_") ? o : "size_" + o] = {
                    url: i
                };
            }
            return t;
        }
        function i(e) {
            return Object(r.__assign)(Object(r.__assign)({}, e), {
                displayName: e.display_name,
                images: o(e.images),
                locationUrl: e.location_link,
                isFollowing: Boolean(e.is_following),
                firstName: e.first_name,
                isProfileOwner: e.is_profile_owner
            });
        }
    },
    "jYx+": function(e, t, n) {
        "use strict";
        var r = n("D57K"), o = n("mGku"), i = n("/Uc3"), a = n("mypm"), s = n("Cf20"), l = n("WOrW"), c = n("Q1b8"), u = n("X6fh"), p = n("OQxq"), d = n("VfML"), f = n("X+Pi"), m = n("L7BO"), h = n("5zVt"), g = n("S1zT"), v = n("6ixx"), _ = n("WAsV"), w = n("TYXv"), b = n("6319"), O = n("lJxq"), y = n("wgY5"), E = n.n(y), x = n("SjsP"), T = o.default.extend({
            name: "ProjectCoverNeue",
            props: {
                project: {
                    type: Object,
                    required: !0
                },
                isFeatureQueueAdmin: {
                    type: Boolean,
                    default: !1
                },
                shouldShowEditDropdown: {
                    type: Boolean,
                    default: !1
                },
                areDetailsShownOnMobile: {
                    type: Boolean,
                    default: !0
                },
                isClickDisabled: {
                    type: Boolean,
                    default: !1
                },
                showDetailOverlay: {
                    type: Boolean,
                    default: !0
                },
                isCollectionEditable: {
                    type: Boolean,
                    default: !1
                },
                cull: {
                    type: Boolean
                },
                shouldDisplayFeatureFlags: {
                    type: Boolean,
                    default: !0
                },
                showSiblingProjectsSelector: {
                    type: Boolean,
                    default: !0
                },
                trackingSource: {
                    type: String
                },
                isStatsVisible: {
                    type: Boolean
                },
                shouldDisplayDraftControls: {
                    type: Boolean
                },
                hasNoConstraints: {
                    type: Boolean,
                    default: !1
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                },
                locale: {
                    type: String
                },
                isFlagged: {
                    type: Boolean
                },
                useOptCovers: {
                    type: Boolean
                },
                useNativeLazyLoad: {
                    type: Boolean
                }
            },
            data: function() {
                return {
                    loaded: !1,
                    defaultCoverSize: w.b,
                    isUrlInFocus: !1,
                    isOwnerInFocus: !1,
                    isHovered: !1,
                    featureRibbonsVisibilityStatus: null,
                    isFeatureFlagInFocus: !1
                };
            },
            filters: {
                commaSplit: x.b,
                abbreviate: x.a
            },
            watch: {
                loaded: function(e) {
                    e && this.$emit("coverImageLoaded");
                }
            },
            components: {
                Cover: i.a,
                AppreciationsIcon: l.a,
                ViewsIcon: c.a,
                Btn: p.default,
                TitleOwner: d.a,
                PrivacyLockTooltip: u.a,
                GearDropdown: h.a,
                CoverStats: v.a,
                DropdownItem: s.a,
                DominantColor: _.a,
                CollectionEdit: g.a,
                FeatureGqlAdapted: a.a,
                OwnersGqlAdapted: m.a,
                Title: f.a
            },
            methods: {
                getProjectUrl: function(e) {
                    return this.trackingSource && (e = Object(r.__assign)(Object(r.__assign)({}, e), {
                        tracking_source: this.trackingSource
                    })), Object(b.a)(this.project.url, e);
                },
                coverSrc: function(e) {
                    return Object(w.e)(e);
                },
                coverSrcset: function(e) {
                    if (this.useOptCovers) {
                        var t = Object(O.g)(e);
                        if (t) return t;
                    }
                    return Object(O.h)(e);
                },
                imageLoaded: function() {
                    return this.$refs.image && this.$refs.image.complete;
                },
                handleFeatureFlagVisibility: function(e, t) {
                    this.featureRibbonsVisibilityStatus && (this.featureRibbonsVisibilityStatus[e] = t, 
                    this.isFeatureFlagInFocus = this.featureRibbonsVisibilityStatus.filter((function(e) {
                        return e;
                    })).length > 0);
                },
                mouseEventHandler: function(e) {
                    this.isClickDisabled && (e.preventDefault(), e.stopPropagation(), "click" === e.type && this.$emit("clickPrevented"));
                }
            },
            mounted: function() {
                this.imageLoaded() && (this.loaded = !0);
            },
            computed: {
                genericProjectLink: function() {
                    return this.getProjectUrl();
                },
                canDisplayFeaturedFlags: function() {
                    return this.shouldDisplayFeatureFlags && this.featureFlags;
                },
                isInFocus: function() {
                    var e = this.isUrlInFocus || this.isOwnerInFocus || this.isFeatureFlagInFocus;
                    return e ? this.$emit("isFocused") : this.$emit("isBlurred"), e;
                },
                featureFlags: function() {
                    var e, t = (null === (e = null == this ? void 0 : this.project) || void 0 === e ? void 0 : e.features) && this.project.features.length && this.project.features.slice(0, 5);
                    return !!t && (this.featureRibbonsVisibilityStatus = new Array(t.length).fill(!1), 
                    null == t ? void 0 : t.map((function(e, n) {
                        return t.length - n > 2 ? Object(r.__assign)(Object(r.__assign)({}, e), {
                            tooltipAlignment: "center"
                        }) : Object(r.__assign)(Object(r.__assign)({}, e), {
                            tooltipAlignment: "right"
                        });
                    })));
                },
                lastModified: function() {
                    return E.a.unix(this.project.modified_on).fromNow();
                },
                servedMarks: function() {
                    return this.project.served && this.project.served.mark;
                },
                queuedMarks: function() {
                    return this.project.queued && this.project.queued.mark;
                }
            }
        }), C = n("FuXf"), A = n("K+aO");
        var S = Object(A.default)(T, (function() {
            var e, t, n, r, o, i, a, s, l = this, c = l.$createElement, u = l._self._c || c;
            return u("div", {
                ref: "root",
                class: [ l.$style.root, (e = {}, e[l.$style.flagged] = l.isFlagged, e), (t = {}, 
                t[l.$style.statsVisible] = l.isStatsVisible, t), (n = {}, n[l.$style.noConstraints] = l.hasNoConstraints, 
                n) ]
            }, [ u("Cover", {
                ref: "cover",
                class: [ l.$style.cover, "e2e-ProjectCoverNeue", {
                    "js-project-cover e2e-ProjectCoverNeue-cover": l.showSiblingProjectsSelector
                }, (r = {}, r[l.$style.coverWithFlags] = l.canDisplayFeaturedFlags, r), (o = {}, 
                o[l.$style.statsVisible] = l.isStatsVisible, o), (i = {}, i[l.$style.loaded] = l.loaded, 
                i) ],
                attrs: {
                    wrapperClasses: [ l.$style.wrapper, "e2e-ProjectCoverNeue-wrapper" ],
                    isInFocus: l.isInFocus,
                    hasNoConstraints: l.hasNoConstraints
                },
                nativeOn: {
                    mouseenter: function(e) {
                        l.isHovered = !0;
                    },
                    mouseleave: function(e) {
                        l.isHovered = !1;
                    }
                },
                scopedSlots: l._u([ {
                    key: "content",
                    fn: function(e) {
                        return [ u("DominantColor", {
                            attrs: {
                                color: l.project.colors && l.project.colors[0] || {}
                            }
                        }), u("img", {
                            directives: [ {
                                name: "show",
                                rawName: "v-show",
                                value: !l.cull,
                                expression: "!cull"
                            } ],
                            ref: "image",
                            class: [ l.$style.image, "js-cover-image" ],
                            attrs: {
                                sizes: l.defaultCoverSize + "px",
                                src: l.coverSrc(l.project.covers),
                                srcset: l.coverSrcset(l.project.covers),
                                alt: l.project.name,
                                loading: l.useNativeLazyLoad && "lazy"
                            },
                            on: {
                                error: function(e) {
                                    l.loaded = !0;
                                },
                                load: function(e) {
                                    l.loaded = !0;
                                }
                            }
                        }), l.$slots.topRight ? u("div", {
                            class: l.$style.topRight
                        }, [ l._t("topRight", null, {
                            project: l.project
                        }) ], 2) : l._e(), l.servedMarks || l.queuedMarks ? u("ul", {
                            class: l.$style.curationMarks
                        }, [ l._l(l.servedMarks, (function(e) {
                            return u("li", {
                                key: e,
                                ref: "servedMark",
                                refInFor: !0,
                                class: [ l.$style.curationMark, l.$style.served ]
                            }, [ l._v(l._s(e)) ]);
                        })), l._l(l.queuedMarks, (function(e) {
                            return u("li", {
                                key: e,
                                ref: "queuedMark",
                                refInFor: !0,
                                class: [ l.$style.curationMark, l.$style.queued ]
                            }, [ l._v(l._s(e)) ]);
                        })) ], 2) : l._e(), u("div", {
                            class: l.$style.controlsAndPrivacyContainer
                        }, [ l.shouldShowEditDropdown ? u("GearDropdown", {
                            ref: "gearDropdown",
                            class: [ e.hoverClass, "e2e-ProjectCoverNeue-controls-overlay-menu" ],
                            attrs: {
                                alignment: "left"
                            }
                        }, [ u("DropdownItem", [ u("a", {
                            staticClass: "js-project-edit",
                            attrs: {
                                href: "/portfolio/editor?project_id=" + l.project.id
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_edit", "Edit"))) ]) ]), u("DropdownItem", [ u("span", {
                            ref: "clone",
                            on: {
                                click: function(e) {
                                    return l.$emit("clone", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_clone", "Clone"))) ]) ]), l.project.private ? l._e() : u("DropdownItem", [ u("a", {
                            staticClass: "js-project-promote",
                            attrs: {
                                href: l.getProjectUrl({
                                    share: "1"
                                })
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_promote", "Promote"))) ]) ]), u("DropdownItem", [ u("span", {
                            ref: "unpublish",
                            on: {
                                click: function(e) {
                                    return l.$emit("unpublish", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_unpublish", "Unpublish"))) ]) ]), l.project.is_founder ? u("DropdownItem", [ u("span", {
                            ref: "delete",
                            staticClass: "js-project-delete e2e-ProjectCoverNeue-project-delete",
                            on: {
                                click: function(e) {
                                    return l.$emit("delete", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_delete", "Delete"))) ]) ]) : u("DropdownItem", [ u("span", {
                            ref: "remove",
                            on: {
                                click: function(e) {
                                    return l.$emit("remove", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_remove", "Remove"))) ]) ]) ], 1) : l._e(), l.isCollectionEditable ? u("CollectionEdit", {
                            ref: "collectionEditIcon",
                            class: e.hoverClass,
                            attrs: {
                                projectId: l.project.id,
                                alignment: "left"
                            },
                            on: {
                                deleteFromCollection: function(e) {
                                    return l.$emit("deleteProjectFromCollection");
                                },
                                editCollection: function(e) {
                                    return l.$emit("editProjectRelatedCollection");
                                }
                            }
                        }) : l._e(), l.project.private ? u("div", {
                            class: l.$style.privacyLockContainer
                        }, [ u("PrivacyLockTooltip") ], 1) : l._e() ], 1) ];
                    }
                } ], null, !0)
            }, [ u("template", {
                slot: l.isFeatureQueueAdmin ? "alwaysVisibleOverlay" : "hoverOverlay"
            }, [ l.canDisplayFeaturedFlags ? u("div", {
                ref: "tooltipFader",
                class: l.$style.featureFlagsContainer
            }, l._l(l.featureFlags, (function(e, t) {
                return u("FeatureGqlAdapted", {
                    key: "featured-" + t,
                    ref: "featureFlag",
                    refInFor: !0,
                    class: l.$style.feature,
                    attrs: {
                        tooltipAlignment: e.tooltipAlignment,
                        index: t,
                        shouldForceDisplayRibbons: l.isHovered || l.isInFocus,
                        url: e.site.url,
                        featuredDate: e.featured_on,
                        site: e.site,
                        locale: l.locale
                    },
                    on: {
                        featureTooltipOpen: function(e) {
                            return l.handleFeatureFlagVisibility(t, !0);
                        },
                        featureTooltipClosed: function(e) {
                            return l.handleFeatureFlagVisibility(t, !1);
                        }
                    }
                });
            })), 1) : l._e(), l.showDetailOverlay ? [ !l.project.published_on && l.shouldDisplayDraftControls ? u("div", {
                ref: "draftControls",
                class: l.$style.draftControls
            }, [ u("Btn", {
                class: l.$style.draftControl,
                attrs: {
                    customLabelWrapperClass: l.$style.draftControlText,
                    type: "primary",
                    href: "/portfolio/editor?project_id=" + l.project.id
                }
            }, [ l._v(l._s(l.$translate("project_draft_control_edit", "Edit Project"))) ]), u("Btn", {
                class: l.$style.draftControl,
                attrs: {
                    customLabelWrapperClass: l.$style.draftControlText
                },
                on: {
                    click: function(e) {
                        return l.$emit("delete", {
                            id: l.project.id
                        });
                    }
                }
            }, [ l._v(l._s(l.$translate("project_draft_control_delete", "Delete Project"))) ]), u("div", {
                class: l.$style.draftModified
            }, [ l._v(" " + l._s(l.$translate("project_draft_last_modified", "Last modified")) + " "), u("time", {
                ref: "lastModified"
            }, [ l._v(l._s(l.lastModified)) ]) ]) ], 1) : u("a", {
                ref: "published",
                class: [ l.$style.coverLink, "js-project-cover-image-link", "js-project-link", "e2e-ProjectCoverNeue-link" ],
                attrs: {
                    href: l.genericProjectLink,
                    title: l.$translate("link_to_project", "Link to project")
                },
                on: {
                    mouseup: l.mouseEventHandler,
                    click: l.mouseEventHandler,
                    focus: function(e) {
                        l.isUrlInFocus = !0;
                    },
                    blur: function(e) {
                        l.isUrlInFocus = !1;
                    }
                }
            }), u("div", {
                ref: "details",
                class: [ l.$style.details, (a = {}, a[l.$style.draftDetails] = !l.project.published_on, 
                a), (s = {}, s[l.$style.hideDetailsMobile] = !l.areDetailsShownOnMobile, s) ]
            }, [ u("div", {
                class: l.$style.info
            }, [ l.isStatsVisible ? u("Title", {
                ref: "title",
                attrs: {
                    url: l.getProjectUrl(),
                    isFeatured: l.project.isFeatured,
                    hasShadow: !1,
                    shouldOpenProjectPopupOnClick: !0
                },
                on: {
                    focus: function(e) {
                        l.isOwnerInFocus = !0;
                    },
                    blur: function(e) {
                        l.isOwnerInFocus = !1;
                    }
                }
            }, [ l._v(l._s(l.project.name)) ]) : u("TitleOwner", {
                ref: "titleOwner",
                attrs: {
                    url: l.getProjectUrl(),
                    title: l.project.name,
                    owners: l.project.owners,
                    isFeatured: l.project.isFeatured,
                    shouldRemoveMultiOwnerTooltip: l.shouldRemoveMultiOwnerTooltip,
                    shouldOpenProjectPopupOnClick: ""
                },
                on: {
                    elOnFocus: function(e) {
                        l.isOwnerInFocus = !0;
                    },
                    elOnBlur: function(e) {
                        l.isOwnerInFocus = !1;
                    }
                }
            }) ], 1), l.isStatsVisible ? l._e() : u("CoverStats", {
                ref: "stats"
            }, [ u("template", {
                slot: "content"
            }, [ u("AppreciationsIcon", {
                class: l.$style.icon
            }), u("span", {
                ref: "appreciationsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.appreciations, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.appreciations, l.locale))) ]), u("ViewsIcon", {
                class: l.$style.icon
            }), u("span", {
                ref: "viewsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.views, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.views, l.locale))) ]) ], 1) ], 2) ], 1), l.$slots.topRightHover ? u("div", {
                class: l.$style.topRight
            }, [ l._t("topRightHover", null, {
                project: l.project
            }) ], 2) : l._e() ] : l._e() ], 2), l.showDetailOverlay ? l._e() : u("template", {
                slot: "alwaysVisibleOverlay"
            }, [ u("a", {
                ref: "published",
                class: [ l.$style.coverLink, "js-project-cover-image-link", "js-project-link", "e2e-ProjectCoverNeue-link" ],
                attrs: {
                    href: l.genericProjectLink,
                    title: l.$translate("link_to_project", "Link to project")
                },
                on: {
                    mouseup: l.mouseEventHandler,
                    click: l.mouseEventHandler
                }
            }) ]) ], 2), l.isStatsVisible ? u("div", {
                class: l.$style.visibleStatsAndOwners
            }, [ u("span", {
                class: l.$style.ownersContainer
            }, [ u("OwnersGqlAdapted", {
                ref: "ownersAdapted",
                class: l.$style.owners,
                attrs: {
                    owners: l.project.owners,
                    theme: "dark",
                    showAvatar: !0,
                    assetUrl: l.project.url
                },
                on: {
                    ownerOnFocus: function(e) {
                        return l.$emit("elOnFocus");
                    },
                    ownerOnBlur: function(e) {
                        return l.$emit("elOnBlur");
                    },
                    tooltipOnFocus: function(e) {
                        return l.$emit("elOnFocus");
                    },
                    tooltipOnBlur: function(e) {
                        return l.$emit("elOnBlur");
                    }
                }
            }) ], 1), u("div", {
                class: l.$style.visibleStats
            }, [ u("CoverStats", {
                ref: "stats"
            }, [ u("template", {
                slot: "content"
            }, [ u("AppreciationsIcon", {
                class: [ l.$style.icon, l.$style.appreciateIcon ]
            }), u("span", {
                ref: "appreciationsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.appreciations, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.appreciations, l.locale))) ]), u("ViewsIcon", {
                class: [ l.$style.icon, l.$style.viewsIcon ]
            }), u("span", {
                ref: "viewsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.views, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.views, l.locale))) ]) ], 1) ], 2) ], 1) ]) : l._e() ], 1);
        }), [], !1, (function(e) {
            this.$style = C.default.locals || C.default;
        }), null, null);
        t.a = S.exports;
    },
    kGXm: function(e, t, n) {
        var r = n("tVnJ");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("b608d206", r, !0, {});
    },
    lJxq: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a;
        })), n.d(t, "j", (function() {
            return s;
        })), n.d(t, "h", (function() {
            return l;
        })), n.d(t, "g", (function() {
            return c;
        })), n.d(t, "e", (function() {
            return u;
        })), n.d(t, "b", (function() {
            return p;
        })), n.d(t, "f", (function() {
            return d;
        })), n.d(t, "d", (function() {
            return m;
        })), n.d(t, "c", (function() {
            return h;
        })), n.d(t, "i", (function() {
            return g;
        }));
        var r = n("D57K"), o = /^size_/;
        function i(e) {
            var t;
            return "string" == typeof e ? e : null !== (t = null == e ? void 0 : e.url) && void 0 !== t ? t : "";
        }
        function a(e) {
            var t = {};
            if (!Array.isArray(e)) return t;
            for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                "string" == typeof o.url && (t["size_" + o.size] = {
                    url: o.url
                });
            }
            return t;
        }
        function s(e) {
            var t = e ? e.split(".").pop() : null;
            return !!t && "gif" === t.toLowerCase();
        }
        function l(e) {
            var t = Object(r.__assign)({}, e);
            return Object.keys(t).forEach((function(e) {
                var n = t[e];
                o.test(e) && (null == n ? void 0 : n.url) && (t[e.replace(o, "")] = n.url);
            })), t.max_808 && (t[808] = t.max_808), Object.keys(t).filter((function(e) {
                return -1 === e.indexOf("_opt");
            })).filter((function(e) {
                return !isNaN(Number(e)) && t[e].length > 1;
            })).map((function(e) {
                return t[e] + " " + e + "w";
            })).join(", ");
        }
        function c(e) {
            var t = Object(r.__assign)({}, e);
            return Object.keys(t).forEach((function(e) {
                var n = t[e];
                o.test(e) && (null == n ? void 0 : n.url) && (t[e.replace(o, "")] = n.url);
            })), t.max_808_opt && (t["808_opt"] = t.max_808_opt), Object.keys(t).filter((function(e) {
                return -1 !== e.indexOf("_opt");
            })).filter((function(e) {
                return !isNaN(Number(e.split("_opt")[0])) && t[e].length > 1;
            })).map((function(e) {
                return t[e] + " " + e.split("_opt")[0] + "w";
            })).join(", ");
        }
        function u(e) {
            var t = e.images, n = e.upperLimit, i = Object(r.__assign)({}, t);
            return Object.keys(i).forEach((function(e) {
                var t, n = i[e];
                o.test(e) && n && "string" != typeof n && (i[e.replace(o, "")] = null !== (t = null == n ? void 0 : n.url) && void 0 !== t ? t : "");
            })), Object.keys(i).filter((function(e) {
                return "string" == typeof i[e];
            })).map((function(e) {
                var t = "disp" === e || "original" === e ? 808 : Number(e);
                if (!(n && t > n || isNaN(Number(t)))) return i[e] + " " + t + "w";
            })).filter((function(e) {
                return !!e;
            })).join(", ");
        }
        function p(e) {
            var t = e.images, n = e.upperLimit;
            return Object.keys(t).filter((function(e) {
                return -1 !== e.indexOf("_still");
            })).map((function(e) {
                var r = -1 !== e.indexOf("max_"), o = e.replace(/^size_/, ""), a = r ? o.replace(/max_|_still|/g, "") : o.split("_")[0], s = i(t[e]), l = n && Number(a) > n;
                if ("" !== s && !l) return isNaN(Number(a)) ? void 0 : s + " " + a + "w";
            })).filter((function(e) {
                return !!e;
            })).join(", ");
        }
        function d(e) {
            var t = e.images, n = e.upperLimit;
            return Object.keys(t).filter((function(e) {
                return -1 !== e.indexOf("max_") && -1 === e.indexOf("_still");
            })).map((function(e) {
                var r = e.replace(/^size_|max_/g, ""), o = i(t[e]), a = n && Number(r) > n;
                if ("" !== o && !a) return o + " " + r + "w";
            })).filter((function(e) {
                return !!e;
            })).join(", ");
        }
        function f(e, t) {
            return e.map((function(e) {
                var n, r = null !== (n = t[e]) && void 0 !== n ? n : t["size_" + e];
                if (!r) return null;
                var o = r.width;
                return r.url + " " + o + "w";
            })).filter((function(e) {
                return null !== e;
            })).join(", ");
        }
        function m(e) {
            return f([ "disp", "max_1200", "1400_opt_1", "fs", "2800_opt_1" ], e);
        }
        function h(e) {
            return f([ "max_158", "max_316", "max_632" ], e);
        }
        function g(e) {
            return f([ "158_still", "316_still", "632_still" ], e);
        }
    },
    lhjL: function(e, t, n) {
        e.exports = n("ydjK")("lhjL");
    },
    m6au: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s;
        })), n.d(t, "a", (function() {
            return l;
        }));
        var r, o, i = n("D57K"), a = n("pqJe"), s = {
            SET_WORK: "SET_WORK",
            APPEND_PROJECTS: "APPEND_PROJECTS",
            REMOVE_PROJECT: "REMOVE_PROJECT",
            REPLACE_PROJECTS: "REPLACE_PROJECTS"
        }, l = {
            UPDATE_WORK_ORDER: "UPDATE_WORK_ORDER",
            LOAD_MORE_WORK: "LOAD_MORE_WORK",
            CLONE_PROJECT: "CLONE_PROJECT",
            UNPUBLISH_PROJECT: "UNPUBLISH_PROJECT",
            DELETE_PROJECT: "DELETE_PROJECT",
            REMOVE_FROM_PROJECT: "REMOVE_FROM_PROJECT",
            GET_ADMIN_FLAGS: "GET_ADMIN_FLAGS",
            PF_UPSELL_BANNER_CLICKED: "PF_UPSELL_BANNER_CLICKED",
            PF_UPSELL_BANNER_DISMISSED: "PF_UPSELL_BANNER_DISMISSED"
        };
        e = {
            namespaced: !0,
            state: function() {
                return {
                    isInitialized: !1,
                    projects: null,
                    hasMore: !0
                };
            },
            actions: (r = {}, r[l.PF_UPSELL_BANNER_CLICKED] = function() {}, r[l.PF_UPSELL_BANNER_DISMISSED] = function() {}, 
            r[l.UPDATE_WORK_ORDER] = function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch, l = t.targetID, c = t.afterID, u = t.newWorkOrder, p = t.userId;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([ 0, 2, , 4 ]), [ 4, a.b.updateProjectOrder(l, c, p) ];

                          case 1:
                            return t.sent(), r(s.SET_WORK, {
                                work: {
                                    projects: u,
                                    hasMore: n.hasMore
                                }
                            }), [ 3, 4 ];

                          case 2:
                            return e = t.sent(), [ 4, o("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return t.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[l.GET_ADMIN_FLAGS] = function(e) {
                var t = e.rootGetters, r = e.commit, o = e.state;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return t["user/isFeatureQueueAdmin"] ? [ 4, n.e(36).then(n.bind(null, "agP5")) ] : [ 2 ];

                          case 1:
                            return [ 4, i.sent().default.insertMarks(o.projects) ];

                          case 2:
                            return e = i.sent(), r(s.REPLACE_PROJECTS, e), [ 2 ];
                        }
                    }));
                }));
            }, r[l.LOAD_MORE_WORK] = function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, c;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            if (!n.projects.length || !n.hasMore) return [ 3, 6 ];
                            i.label = 1;

                          case 1:
                            return i.trys.push([ 1, 4, , 6 ]), [ 4, a.b.getMoreWork(t, n.projects.length) ];

                          case 2:
                            return e = i.sent(), r(s.APPEND_PROJECTS, {
                                work: e
                            }), [ 4, o(l.GET_ADMIN_FLAGS) ];

                          case 3:
                            return i.sent(), [ 3, 6 ];

                          case 4:
                            return c = i.sent(), r(s.SET_WORK, {
                                work: {
                                    projects: n.projects,
                                    hasMore: !1
                                }
                            }), [ 4, o("error", c, {
                                root: !0
                            }) ];

                          case 5:
                            return i.sent(), [ 3, 6 ];

                          case 6:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[l.CLONE_PROJECT] = function(e, t) {
                var n = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return r.trys.push([ 0, 2, , 4 ]), [ 4, a.b.cloneProject(t) ];

                          case 1:
                            return [ 2, r.sent().project ];

                          case 2:
                            return e = r.sent(), [ 4, n("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return r.sent(), [ 2, null ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[l.UNPUBLISH_PROJECT] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, o;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, a.b.unpublishProject(t) ];

                          case 1:
                            return e = i.sent().count, n(s.REMOVE_PROJECT, t), [ 2, e ];

                          case 2:
                            return o = i.sent(), [ 4, r("error", o, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 2, null ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[l.DELETE_PROJECT] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 4 ]), [ 4, a.b.deleteProject(t) ];

                          case 1:
                            return o.sent(), n(s.REMOVE_PROJECT, t), [ 3, 4 ];

                          case 2:
                            return e = o.sent(), [ 4, r("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return o.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[l.REMOVE_FROM_PROJECT] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 4 ]), [ 4, a.b.removeFromProject(t) ];

                          case 1:
                            return o.sent(), n(s.REMOVE_PROJECT, t), [ 3, 4 ];

                          case 2:
                            return e = o.sent(), [ 4, r("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return o.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r),
            mutations: (o = {}, o[s.SET_WORK] = function(e, t) {
                var n = t.work;
                e.isInitialized = !0, e.projects = n.projects, e.hasMore = n.hasMore;
            }, o[s.REPLACE_PROJECTS] = function(e, t) {
                e.projects = t;
            }, o[s.APPEND_PROJECTS] = function(e, t) {
                var n = t.work, r = e.projects ? e.projects : [];
                e.projects = r.concat(n.projects), e.hasMore = n.hasMore;
            }, o[s.REMOVE_PROJECT] = function(e, t) {
                var n = e.projects.findIndex((function(e) {
                    return e.id === t;
                }));
                e.projects.splice(n, 1);
            }, o)
        };
        t.c = e;
    },
    mLYF: function(e, t, n) {
        e.exports = n("ydjK")("mLYF");
    },
    mypm: function(e, t, n) {
        "use strict";
        var r = n("mGku"), o = (n("6U7i"), n("KqXw"), n("MvUL"), n("rF8O")), i = n("E8ap"), a = {
            name: "Feature",
            components: {
                Tooltip: o.a
            },
            props: {
                tooltipAlignment: {
                    type: String
                },
                url: {
                    type: String
                },
                featuredDate: {
                    type: [ Number, String ]
                },
                numProjects: {
                    type: Number
                },
                slug: {
                    type: String
                },
                locale: {
                    type: String,
                    validator: function(e) {
                        return /^[a-z]{2}_[A-Z]{2}$/.test(e);
                    }
                },
                index: {
                    type: Number
                },
                shouldForceDisplayRibbons: {
                    type: Boolean
                },
                name: String,
                ribbon: Object
            },
            computed: {
                assetUrl: function() {
                    return i.ASSETS_URL + "img/shared_icons/svg/ribbons";
                },
                canTransitionWithDelay: function() {
                    return null !== this.index && this.index >= 0;
                },
                timestamp: function() {
                    if ("string" == typeof this.featuredDate) return this.featuredDate;
                    var e = new Date(1e3 * this.featuredDate);
                    return this.locale ? e.toLocaleDateString(this.locale.replace("_", "-")) : e.toLocaleDateString();
                },
                imgSrc: function() {
                    return this.slug ? this.assetUrl + "/" + this.slug + ".svg" : this.assetUrl + "/" + this.ribbon.image;
                },
                imgSrcSet: function() {
                    if (!this.slug) return this.ribbon.image + ", " + this.ribbon.image2x + " 2x";
                }
            }
        }, s = n("02HT"), l = n("K+aO");
        var c = Object(l.default)(a, (function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                ref: "root",
                class: [ n.$style.ribbonContainer, (e = {}, e[n.$style.forceDisplayRibbons] = n.shouldForceDisplayRibbons, 
                e) ]
            }, [ o("Tooltip", {
                ref: "tooltip",
                attrs: {
                    alignment: n.tooltipAlignment,
                    isResponsive: !0,
                    position: "bottom",
                    triangleDistance: 6,
                    distance: 0
                },
                on: {
                    didOpen: function(e) {
                        return n.$emit("featureTooltipOpen");
                    },
                    didClose: function(e) {
                        return n.$emit("featureTooltipClosed");
                    }
                }
            }, [ o("a", {
                ref: "ribbon",
                class: [ "rf-ribbon", n.$style.ribbon ],
                attrs: {
                    href: n.url
                }
            }, [ o("img", {
                ref: "ribbonImg",
                class: [ "rf-ribbon__image", n.$style.ribbonImage, (t = {}, t[n.$style.ribbonImageDelay] = n.canTransitionWithDelay, 
                t) ],
                attrs: {
                    src: n.imgSrc,
                    alt: n.name,
                    srcset: n.imgSrcSet,
                    title: n.name,
                    "data-transition-delay-index": n.canTransitionWithDelay && n.index
                }
            }) ]), n.numProjects ? o("div", {
                ref: "numProjects",
                class: n.$style.numProjects
            }, [ n._v(n._s(n.numProjects)) ]) : n._e(), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("div", {
                class: [ "rf-feature__header", n.$style.featureHeader ]
            }, [ n._v(n._s(n.$translate("featured_in", "Featured In"))) ]), o("div", {
                class: [ "rf-feature__info", n.$style.featureInfo ]
            }, [ o("a", {
                ref: "link",
                class: [ "rf-feature__link" ],
                attrs: {
                    href: n.url
                }
            }, [ n._v(n._s(n.name)) ]), n.featuredDate ? o("span", {
                ref: "featuredDate"
            }, [ n._v(" — "), o("time", {
                ref: "timestamp",
                class: [ "rf-feature__date" ],
                attrs: {
                    datetime: n.timestamp
                }
            }, [ n._v(n._s(n.timestamp)) ]) ]) : n._e() ]) ]) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = s.default.locals || s.default;
        }), null, null).exports, u = r.default.extend({
            props: {
                site: {
                    type: Object
                }
            },
            components: {
                Feature: c
            },
            computed: {
                ribbon: function() {
                    return {
                        image: this.site.ribbon.image,
                        image2x: this.site.ribbon.image_2x
                    };
                }
            }
        }), p = Object(l.default)(u, (function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("Feature", e._g(e._b({
                ref: "featureRoot",
                attrs: {
                    name: e.site.name,
                    ribbon: e.ribbon
                }
            }, "Feature", e.$attrs, !1), e.$listeners));
        }), [], !1, null, null, null);
        t.a = p.exports;
    },
    o3Nh: function(e, t, n) {
        "use strict";
        n("1t7P"), n("jQ/y"), n("aLgo"), n("LW0h"), n("jwue"), n("hCOa"), n("lTEL"), n("z84I"), 
        n("daRM"), n("FtHn"), n("+KXO"), n("7x/C"), n("DZ+c"), n("87if"), n("+oxZ"), n("kYxP");
        var r = n("/Uc3"), o = {
            props: {
                url: {
                    type: String
                },
                headerText: {
                    type: String
                },
                bodyText: {
                    type: String
                },
                contentType: {
                    type: String
                }
            },
            components: {
                Cover: r.a
            }
        }, i = n("KTQR"), a = n("K+aO");
        var s = Object(a.default)(o, (function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("Cover", {
                ref: "cover",
                class: [ n.$style.root, (e = {}, e[n.$style.isCollection] = "collection" === n.contentType, 
                e), (t = {}, t[n.$style.isAppreciation] = "appreciation" === n.contentType, t) ]
            }, [ o("template", {
                slot: "content"
            }, [ o("a", {
                class: n.$style.createProjectLink,
                attrs: {
                    href: n.url
                }
            }, [ o("div", {
                class: n.$style.iconAndHeading
            }, [ o("div", {
                class: n.$style.createIcon
            }, [ "collection" === n.contentType || "appreciation" === n.contentType ? o("svg", {
                ref: "iconSvg",
                class: n.$style.iconSvg,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 17.991"
                }
            }, [ o("path", {
                attrs: {
                    d: "M7.011,2a6.892,6.892,0,0,1,5.614,10.9l5.18,5.181a1.142,1.142,0,0,1-1.613,1.613l-5.18-5.18A6.9,6.9,0,1,1,7.011,2Zm0,11.676A4.776,4.776,0,1,0,2.234,8.9,4.776,4.776,0,0,0,7.011,13.676Z",
                    transform: "translate(-0.102 -2)"
                }
            }) ]) : n._e() ]), o("h3", {
                class: n.$style.heading
            }, [ n._v(n._s(n.headerText)) ]) ]), n.bodyText ? o("div", {
                ref: "bodyText",
                class: n.$style.text
            }, [ o("p", {
                class: n.$style.paragraph
            }, [ n._v(n._s(n.bodyText)) ]) ]) : n._e() ]) ]) ], 2);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null).exports, l = n("18mY"), c = n("pTUv"), u = n.n(c), p = n("NMyp"), d = n.n(p), f = n("7bzM"), m = n.n(f), h = n("nOR9"), g = n("md4j");
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function w(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var b = {
            components: {
                CreateModulePrompt: s,
                Spinner: l.a,
                draggable: d.a
            },
            props: {
                createPromptUrl: String,
                createPromptHeader: String,
                createPromptBody: String,
                showCreateModulePrompt: Boolean,
                hasMore: !0,
                isAppreciationsGrid: Boolean,
                canReorder: {
                    type: Boolean,
                    default: !1
                },
                contentItems: {
                    type: Array,
                    required: !0
                },
                contentType: {
                    type: String
                }
            },
            data: function() {
                return {
                    isWaiting: !1,
                    isDragging: !1,
                    isDragDisabled: !0,
                    contentItemsCopy: w(this.contentItems)
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        _(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }({}, Object(h.mapGetters)("user", [ "userId" ])),
            mounted: function() {
                this.canReorder && !m.a.is("phone") && (this.isDragDisabled = !1), this.checkIfShouldLoadMore(), 
                u.a.on(.3, this.checkIfShouldLoadMore), g.default.info("analytics", "project rendered in order", {
                    ids: this.contentItems.map((function(e) {
                        return e.id;
                    })),
                    userId: this.userId
                }), this.monitorProjectDupes();
            },
            beforeDestroy: function() {
                this.stopChecking();
            },
            watch: {
                contentItems: function() {
                    this.isWaiting = !1, this.contentItemsCopy = w(this.contentItems), this.monitorProjectDupes();
                },
                hasMore: function(e) {
                    !1 === e && this.stopChecking();
                }
            },
            methods: {
                monitorProjectDupes: function() {
                    for (var e = this.contentItems.map((function(e) {
                        return parseInt(e.id);
                    })).sort(), t = 0, n = function(n) {
                        if (e[n] === t) {
                            var r = e.filter((function(t) {
                                return t === e[n];
                            })).length;
                            return g.default.info("analytics", "dupe project found", {
                                id: e[n],
                                repeatedCount: r
                            }), "break";
                        }
                        t = e[n];
                    }, r = 0; r < e.length; r++) {
                        if ("break" === n(r)) break;
                    }
                },
                handleUpdate: function(e) {
                    var t = this.contentItemsCopy[e.newIndex].id, n = e.newIndex > 0 ? this.contentItemsCopy[e.newIndex - 1].id : 0;
                    this.$emit("orderUpdated", {
                        targetID: t,
                        afterID: n,
                        newWorkOrder: this.contentItemsCopy,
                        userId: this.userId
                    });
                },
                checkIfShouldLoadMore: function() {
                    this.isWaiting || document.body.classList.contains("overlay-open") || (this.$emit("loadMore"), 
                    this.isWaiting = !0);
                },
                stopChecking: function() {
                    u.a.off(this.checkIfShouldLoadMore);
                }
            }
        }, O = n("1vEe");
        var y = Object(a.default)(b, (function() {
            var e, t, n, r = this, o = r.$createElement, i = r._self._c || o;
            return i("div", {
                class: [ r.$style.root, (e = {}, e[r.$style.isDragging] = r.isDragging, e) ]
            }, [ i("draggable", {
                ref: "draggable",
                class: [ (t = {}, t[r.$style.grid] = !r.isAppreciationsGrid, t), (n = {}, n[r.$style.appreciationsGrid] = r.isAppreciationsGrid, 
                n) ],
                attrs: {
                    options: {
                        disabled: r.isDragDisabled
                    }
                },
                on: {
                    start: function(e) {
                        r.isDragging = !0;
                    },
                    end: function(e) {
                        r.isDragging = !1;
                    },
                    update: r.handleUpdate
                },
                model: {
                    value: r.contentItemsCopy,
                    callback: function(e) {
                        r.contentItemsCopy = e;
                    },
                    expression: "contentItemsCopy"
                }
            }, [ r._l(r.contentItemsCopy, (function(e) {
                return [ r._t("default", null, {
                    contentItem: e,
                    itemClass: r.$style.gridItem
                }) ];
            })), r.showCreateModulePrompt ? i("CreateModulePrompt", {
                class: r.$style.createModulePrompt,
                attrs: {
                    slot: "footer",
                    url: r.createPromptUrl,
                    headerText: r.createPromptHeader,
                    bodyText: r.createPromptBody,
                    contentType: r.contentType
                },
                slot: "footer"
            }) : r._e() ], 2), i("div", {
                class: r.$style.spinnerSpacer
            }, [ i("transition", {
                attrs: {
                    name: "spinner",
                    "enter-class": r.$style.spinnerEnter,
                    "enter-active-class": r.$style.spinnerEnterActive,
                    "leave-active-class": r.$style.spinnerLeaveActive
                }
            }, [ r.isWaiting && r.hasMore ? i("div", {
                class: r.$style.loadingStateLayer
            }, [ i("div", {
                class: r.$style.spinnerContainer
            }, [ i("Spinner", {
                class: r.$style.spinner,
                attrs: {
                    autofill: ""
                }
            }) ], 1) ]) : r._e() ]) ], 1) ], 1);
        }), [], !1, (function(e) {
            this.$style = O.default.locals || O.default;
        }), null, null);
        t.a = y.exports;
    },
    pPXI: function(e, t, n) {
        "use strict";
        var r = n("r2of"), o = n.n(r);
        t.default = o.a;
    },
    pTUv: function(e, t, n) {
        var r, o;
        r = [ n("xeH2") ], void 0 === (o = function(e) {
            "use strict";
            var t = {}, n = {};
            function r(t) {
                return e("window" === t ? window : t);
            }
            function o(e, t) {
                if (!t) return e;
                if ("string" != typeof t || "string" != typeof e) throw new Error("context and contentContext must both be strings if contentContext is provided.");
                return e + "|" + t;
            }
            function i(t, n) {
                var r = t.is(e(window)) ? window.innerHeight : t.prop("clientHeight");
                return (function(t, n) {
                    var r;
                    return n.is(e(window)) ? e(document).height() : n !== t ? (r = t.is(e(window)) ? 0 : t.offset().top, 
                    n.height() + n.offset().top - r) : t.prop("scrollHeight");
                }(t, n) - r - t.scrollTop()) / r;
            }
            function a(a, s, l, c) {
                "function" == typeof a && (c = l, l = s, s = a, a = 1), l = l || "window", a = Number(a).toString();
                var u = r(l), p = o(l, c);
                n[p] || (n[p] = {}, t[p] = function(t, a) {
                    var s = r(t), l = a ? e(a) : s, c = o(t, a), u = "window" === t ? e("html,body") : s;
                    return function() {
                        var t = u.toArray().every((function(t) {
                            return "hidden" !== e(t).css("overflowY");
                        })), r = i(s, l);
                        for (var o in n[c]) r <= Number(o) && t && n[c][o].wrapped.forEach((function(e) {
                            e();
                        }));
                    };
                }(l, c), u.on("scroll", t[p]));
                var d = n[p][a];
                d || (d = n[p][a] = {
                    wrapped: [],
                    original: []
                }), d.original.push(s), d.wrapped.push((function e() {
                    if (!e.blocking) {
                        e.blocking = !0;
                        var n = s.apply(null, arguments);
                        n && "function" == typeof n.then ? n.then((function() {
                            e.blocking = !1, t[p]();
                        })) : e.blocking = !1;
                    }
                })), t[p]();
            }
            return a.on = a, a.off = function(e, i, a) {
                var s, l, c, u = r(i = i || "window"), p = o(i, a);
                if (n[p]) {
                    for (s in n[p]) ~(c = (l = n[p][s]).original.indexOf(e)) && (l.original.splice(c, 1), 
                    l.wrapped.splice(c, 1), l.original.length || delete n[p][s]);
                    Object.keys(n[p]).length || (u.off("scroll", t[p]), delete n[p]);
                }
            }, a.check = function(e, n) {
                var r = o(e || "window", n);
                t[r]();
            }, a;
        }.apply(t, r)) || (e.exports = o);
    },
    pmnR: function(e, t, n) {
        "use strict";
        var r = n("JkTf"), o = n.n(r);
        t.default = o.a;
    },
    pwzF: function(e, t, n) {
        "use strict";
        var r = n("bYYW"), o = n.n(r);
        t.default = o.a;
    },
    "q/0V": function(e, t, n) {
        e.exports = n("ydjK")("q/0V");
    },
    qlC2: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return l;
        })), n.d(t, "a", (function() {
            return c;
        }));
        n("1t7P"), n("LW0h"), n("jwue"), n("daRM"), n("FtHn"), n("+KXO"), n("7x/C"), n("JtPf"), 
        n("+oxZ"), n("3yYM");
        var r, o = n("pqJe");
        function i(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var l = {
            SET_INSIGHTS: "SET_INSIGHTS",
            APPEND_DATASETS: "APPEND_DATASETS",
            INCREMENT_PAGE: "INCREMENT_PAGE",
            SET_HAS_MORE: "SET_HAS_MORE",
            SET_WAITING: "SET_WAITING"
        }, c = {
            LOAD_NEXT_PERFORMANCE_PAGE: "LOAD_NEXT_PERFORMANCE_PAGE"
        };
        t.c = {
            api: o.b,
            namespaced: !0,
            state: function() {
                return {
                    isInitialized: !1,
                    projectsDatasets: {},
                    page: 1,
                    hasMore: !0,
                    isWaiting: !1
                };
            },
            mutations: (r = {}, s(r, l.SET_INSIGHTS, (function(e, t) {
                var n = t.datasets, r = t.page, o = t.hasMore;
                e.isInitialized = !0, e.projectsDatasets = n, e.page = r, e.hasMore = o, e.isWaiting = !1;
            })), s(r, l.APPEND_DATASETS, (function(e, t) {
                e.projectsDatasets = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(n), !0).forEach((function(t) {
                            s(e, t, n[t]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        }));
                    }
                    return e;
                }({}, e.projectsDatasets, {}, t);
            })), s(r, l.INCREMENT_PAGE, (function(e) {
                e.page++;
            })), s(r, l.SET_HAS_MORE, (function(e, t) {
                e.hasMore = t;
            })), s(r, l.SET_WAITING, (function(e, t) {
                e.isWaiting = t;
            })), r),
            actions: s({}, c.LOAD_NEXT_PERFORMANCE_PAGE, (function(e, t) {
                var n, r = e.state, a = e.commit, s = e.dispatch;
                return (n = regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r.hasMore && !r.isWaiting) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return e.prev = 2, a(l.INCREMENT_PAGE), a(l.SET_WAITING, !0), e.next = 7, o.b.getMoreDatasets(t, {
                                page_number: r.page
                            });

                          case 7:
                            n = e.sent, a(l.APPEND_DATASETS, n.projects_datasets), a(l.SET_HAS_MORE, 0 !== n.pagination.next), 
                            a(l.SET_WAITING, !1), e.next = 19;
                            break;

                          case 13:
                            return e.prev = 13, e.t0 = e.catch(2), e.next = 17, s("error", e.t0, {
                                root: !0
                            });

                          case 17:
                            a(l.SET_HAS_MORE, !1), a(l.SET_WAITING, !1);

                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }), e, null, [ [ 2, 13 ] ]);
                })), function() {
                    var e = this, t = arguments;
                    return new Promise((function(r, o) {
                        var a = n.apply(e, t);
                        function s(e) {
                            i(a, r, o, s, l, "next", e);
                        }
                        function l(e) {
                            i(a, r, o, s, l, "throw", e);
                        }
                        s(void 0);
                    }));
                })();
            }))
        };
    },
    r2of: function(e, t, n) {
        var r = n("CeqD");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("9d46823a", r, !0, {});
    },
    rF8O: function(e, t, n) {
        "use strict";
        var r, o, i = n("D57K"), a = n("mGku"), s = n("sEgD"), l = n("adMq"), c = n("PJd8"), u = n("LSlr");
        !function(e) {
            e.None = "none", e.Click = "click", e.Hover = "hover";
        }(r || (r = {})), function(e) {
            e.Right = "right", e.Left = "left", e.Top = "top", e.Bottom = "bottom", e.Center = "center";
        }(o || (o = {}));
        var p = a.default.extend({
            name: "Tooltip",
            components: {
                CloseIcon: u.default,
                Fade: l.a,
                FadeDown: c.a
            },
            props: {
                alignment: {
                    type: String,
                    default: "center",
                    validator: function(e) {
                        return [ "left", "center", "right", "top" ].includes(e);
                    }
                },
                position: {
                    type: String,
                    default: "top",
                    validator: function(e) {
                        return Object.values(o).includes(e);
                    }
                },
                toggleMethod: {
                    type: String,
                    default: "hover",
                    validator: function(e) {
                        return Object.values(r).includes(e);
                    }
                },
                alignmentOffset: {
                    type: Number,
                    default: 0
                },
                horizontalPadding: {
                    type: Number,
                    default: 10
                },
                verticalPadding: {
                    type: Number,
                    default: 10
                },
                distance: {
                    type: Number,
                    default: 5
                },
                triangleDistance: {
                    type: Number,
                    default: 10
                },
                isOpen: {
                    type: Boolean
                },
                isResponsive: {
                    type: Boolean
                },
                hasTextTrigger: {
                    type: Boolean
                },
                canTruncateTrigger: {
                    type: Boolean
                },
                triggerHasBlockLayout: {
                    type: Boolean
                },
                hasTriangle: {
                    type: Boolean,
                    default: !0
                },
                isCloseable: {
                    type: Boolean,
                    default: !1
                },
                isOpenable: {
                    type: Boolean,
                    default: !0
                },
                isFullWidth: {
                    type: Boolean
                },
                isDarkMode: {
                    type: Boolean
                },
                customContainerClass: {
                    type: String
                },
                animation: {
                    type: String,
                    default: "fade",
                    validator: function(e) {
                        return [ "fade", "fadedown" ].includes(e);
                    }
                }
            },
            data: function() {
                return {
                    toggleMethods: r,
                    isCurrentlyOpen: this.isOpen
                };
            },
            watch: {
                isOpen: function(e) {
                    this.isCurrentlyOpen = e;
                }
            },
            computed: {
                animatableComponent: function() {
                    return "fadedown" === this.animation ? c.a : l.a;
                },
                shouldAlign: function() {
                    if ("center" !== this.alignment) return !0;
                },
                containerStyles: function() {
                    var e, t, n = {
                        cursor: this.toggleMethod === r.Click ? "pointer" : "initial",
                        paddingTop: this.verticalPadding + "px",
                        paddingBottom: this.verticalPadding + "px",
                        paddingRight: this.horizontalPadding + "px",
                        paddingLeft: this.horizontalPadding + "px"
                    }, i = this.position;
                    if (i === o.Center) return n;
                    var a = ((e = {})[o.Top] = "6px", e[o.Bottom] = "0px", e[o.Right] = "0px", e[o.Left] = "0px", 
                    e), s = ((t = {})[o.Top] = o.Bottom, t[o.Bottom] = o.Top, t[o.Right] = o.Left, t[o.Left] = o.Right, 
                    t), l = a[i];
                    return n[s[i]] = "calc(100% + " + this.distance + "px + " + l + ")", this.shouldAlign && (n[this.alignment] = this.alignmentOffset + "px"), 
                    n;
                },
                triangleStyles: function() {
                    var e = {};
                    return this.shouldAlign && (e[this.alignment] = this.triangleDistance + "px"), e;
                }
            },
            methods: {
                ifToggleMethod: function(e, t) {
                    e === this.toggleMethod && t();
                },
                ifNotToggleMethod: function(e, t) {
                    e !== this.toggleMethod && t();
                },
                toggleOpen: function() {
                    this.isCurrentlyOpen ? this.close() : this.open();
                },
                open: function() {
                    this.isOpenable && (this.isCurrentlyOpen = !0, this.$emit("didOpen"));
                },
                close: function() {
                    this.isCurrentlyOpen = !1, this.$emit("didClose");
                }
            },
            beforeCreate: function() {
                var e;
                if (this.$slots.default && this.$slots.default[0]) {
                    var t = this.$slots.default[0], n = (null === (e = null == t ? void 0 : t.data) || void 0 === e ? void 0 : e.attrs) || {};
                    t.data = Object(i.__assign)(Object(i.__assign)({}, t.data), {
                        attrs: Object(i.__assign)(Object(i.__assign)({}, n), {
                            tabindex: 0
                        })
                    });
                }
            },
            mounted: function() {
                var e = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(t) {
                    e.toggleMethod !== r.None && (t.addEventListener("focus", e.open), t.addEventListener("blur", e.close));
                }));
            },
            beforeDestroy: function() {
                var e = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(t) {
                    e.toggleMethod !== r.None && (t.removeEventListener("focus", e.open), t.removeEventListener("blur", e.close));
                }));
            }
        }), d = n("9yXK"), f = n("K+aO");
        var m = Object(f.default)(p, (function() {
            var e, t, n, r, o, i, a = this, s = a.$createElement, l = a._self._c || s;
            return l("div", {
                ref: "root",
                class: [ a.$style.wrapper, (e = {}, e[a.$style.responsive] = a.isResponsive, e), (t = {}, 
                t[a.$style.textWrapper] = a.hasTextTrigger, t) ],
                style: {
                    cursor: a.isOpenable ? "pointer" : "auto"
                },
                on: {
                    mouseenter: function(e) {
                        return a.ifToggleMethod(a.toggleMethods.Hover, a.open);
                    },
                    mouseleave: function(e) {
                        return a.ifToggleMethod(a.toggleMethods.Hover, a.close);
                    },
                    keypress: function(e) {
                        return !e.type.indexOf("key") && a._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : a.ifNotToggleMethod(a.toggleMethods.None, a.open);
                    },
                    "!blur": function(e) {
                        return a.ifNotToggleMethod(a.toggleMethods.None, a.close);
                    }
                }
            }, [ l("span", {
                ref: "trigger",
                class: (n = {}, n[a.$style.trigger] = a.canTruncateTrigger, n[a.$style.blockLayoutTrigger] = a.triggerHasBlockLayout, 
                n),
                on: {
                    touchend: function(e) {
                        return a.ifToggleMethod(a.toggleMethods.Hover, a.toggleOpen);
                    },
                    click: function(e) {
                        return a.ifToggleMethod(a.toggleMethods.Click, a.toggleOpen);
                    }
                }
            }, [ a._t("default") ], 2), l(a.animatableComponent, {
                tag: "component"
            }, [ l("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: a.isCurrentlyOpen,
                    expression: "isCurrentlyOpen"
                } ],
                ref: "tooltip",
                class: [ a.$style.container, a.$style["position-" + a.position], a.$style[a.alignment], (r = {}, 
                r[a.$style.fullWidth] = a.isFullWidth, r), (o = {}, o[a.$style.darkMode] = a.isDarkMode, 
                o), a.customContainerClass ],
                style: a.containerStyles,
                on: {
                    mouseleave: function(e) {
                        return a.ifToggleMethod(a.toggleMethods.Click, a.close);
                    }
                }
            }, [ a.hasTriangle ? l("div", {
                ref: "triangle",
                class: a.$style.triangleContainer,
                style: a.triangleStyles
            }, [ l("div", {
                class: [ a.$style.triangle, (i = {}, i[a.$style.darkMode] = a.isDarkMode, i) ]
            }), l("div", {
                class: a.$style.mask
            }) ]) : a._e(), a._t("tooltipContent"), a.isCloseable ? l("span", {
                ref: "closeButton",
                class: a.$style.closeIconWrapper,
                on: {
                    touchend: function(e) {
                        a.ifToggleMethod(a.toggleMethods.Hover, a.close), a.$emit("closeButtonClicked");
                    },
                    click: function(e) {
                        a.ifToggleMethod(a.toggleMethods.Click, a.close), a.$emit("closeButtonClicked");
                    }
                }
            }, [ l("CloseIcon", {
                class: a.$style.closeIcon
            }) ], 1) : a._e() ], 2) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = d.default.locals || d.default;
        }), null, null);
        t.a = m.exports;
    },
    rT59: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Appreciations-icon-2NG {\n  fill: #fff;\n}\n", "" ]), 
        t.locals = {
            icon: "Appreciations-icon-2NG"
        };
    },
    sEgD: function(e, t, n) {
        e.exports = n("ydjK")("sEgD");
    },
    "t/tF": function(e, t, n) {
        e.exports = n("ydjK")("t/tF");
    },
    tVnJ: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".ContentGrid-gridItem-WHz {\n  min-width: 0;\n}\n@media (max-width: 603px) {\n.ContentGrid-grid-21i .ContentGrid-gridItem-WHz,\n  .ContentGrid-createModulePrompt-WSD {\n    margin: 20px auto;\n}\n}\n.ContentGrid-spinnerSpacer-3vO {\n  clear: both;\n  height: 25px;\n  padding-top: 40px;\n  position: relative;\n}\n.ContentGrid-spinnerContainer-2wg {\n  height: 25px;\n  margin: 0 auto;\n  width: 25px;\n}\n.ContentGrid-spinner-3E_ {\n  height: 100%;\n  width: 100%;\n}\n.ContentGrid-spinnerEnter-ppF {\n  opacity: 0;\n}\n.ContentGrid-spinnerEnter-ppF .ContentGrid-spinnerContainer-2wg {\n    opacity: 0;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n}\n.ContentGrid-spinnerEnterActive-3oz {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s linear;\n  transition: opacity 0.25s linear;\n}\n.ContentGrid-spinnerEnterActive-3oz .ContentGrid-spinnerContainer-2wg {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transition: opacity 0.25s linear, -webkit-transform 0.5s ease;\n    transition: opacity 0.25s linear, -webkit-transform 0.5s ease;\n    transition: opacity 0.25s linear, transform 0.5s ease;\n    transition: opacity 0.25s linear, transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.ContentGrid-spinnerLeaveActive-2eX {\n  opacity: 0;\n  -webkit-transition: opacity 0.25s linear;\n  transition: opacity 0.25s linear;\n}\n.ContentGrid-spinnerLeaveActive-2eX .ContentGrid-spinnerContainer-2wg {\n    opacity: 0;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-transition: opacity 0.25s linear, -webkit-transform 0.25s ease;\n    transition: opacity 0.25s linear, -webkit-transform 0.25s ease;\n    transition: opacity 0.25s linear, transform 0.25s ease;\n    transition: opacity 0.25s linear, transform 0.25s ease, -webkit-transform 0.25s ease;\n}\n@-webkit-keyframes ContentGrid-fade-1vn {\nfrom {\n    opacity: 0;\n}\n}\n@keyframes ContentGrid-fade-1vn {\nfrom {\n    opacity: 0;\n}\n}\n.ContentGrid-gridItem-WHz:hover {\n  z-index: 1;\n}\n.ContentGrid-grid-21i,\n.ContentGrid-appreciationsGrid-2hj {\n  width: 100%;\n}\n@media (min-width: 604px) {\n.ContentGrid-grid-21i {\n    display: inline-grid;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n}\n}\n@media (min-width: 604px) and (max-width: 1038px) {\n.ContentGrid-grid-21i {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (min-width: 1039px) and (max-width: 1200px) {\n.ContentGrid-grid-21i {\n    grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (min-width: 1201px) and (max-width: 1488px) {\n.ContentGrid-grid-21i {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (min-width: 1489px) and (max-width: 1912px) {\n.ContentGrid-grid-21i {\n    grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (min-width: 1913px) {\n.ContentGrid-grid-21i {\n    grid-template-columns: repeat(4, 1fr);\n}\n}\n.ContentGrid-appreciationsGrid-2hj {\n  display: inline-grid;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n}\n@media (max-width: 560px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (min-width: 561px) and (max-width: 820px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (min-width: 821px) and (max-width: 1080px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(4, 1fr);\n}\n}\n@media (min-width: 1081px) and (max-width: 1200px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(5, 1fr);\n}\n}\n@media (min-width: 1201px) and (max-width: 1270px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (min-width: 1271px) and (max-width: 1530px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(4, 1fr);\n}\n}\n@media (min-width: 1531px) and (max-width: 1790px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(5, 1fr);\n}\n}\n@media (min-width: 1791px) {\n.ContentGrid-appreciationsGrid-2hj {\n      grid-template-columns: repeat(6, 1fr);\n}\n}\n", "" ]), 
        t.locals = {
            gridItem: "ContentGrid-gridItem-WHz",
            grid: "ContentGrid-grid-21i",
            createModulePrompt: "ContentGrid-createModulePrompt-WSD",
            spinnerSpacer: "ContentGrid-spinnerSpacer-3vO",
            spinnerContainer: "ContentGrid-spinnerContainer-2wg",
            spinner: "ContentGrid-spinner-3E_",
            spinnerEnter: "ContentGrid-spinnerEnter-ppF",
            spinnerEnterActive: "ContentGrid-spinnerEnterActive-3oz",
            spinnerLeaveActive: "ContentGrid-spinnerLeaveActive-2eX",
            appreciationsGrid: "ContentGrid-appreciationsGrid-2hj",
            fade: "ContentGrid-fade-1vn"
        };
    },
    uZvN: function(e, t, n) {
        e.exports = n("ydjK")("uZvN");
    },
    uaAv: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, ".Feature-ribbon-20X {\n  height: 57px;\n  overflow: hidden;\n  width: auto;\n}\n.Feature-ribbonImage-2tP {\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  position: relative;\n  top: -7px;\n  -webkit-transition: top 0.15s ease;\n  transition: top 0.15s ease;\n}\n.Feature-ribbonImageDelay-1d3 {\n  opacity: 0;\n  -webkit-transform: translateY(-10%);\n          transform: translateY(-10%);\n  -webkit-transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear, -webkit-transform 0.2s linear;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='0'] {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='1'] {\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='2'] {\n    -webkit-transition-delay: 0.2s;\n            transition-delay: 0.2s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='3'] {\n    -webkit-transition-delay: 0.3s;\n            transition-delay: 0.3s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='4'] {\n    -webkit-transition-delay: 0.4s;\n            transition-delay: 0.4s;\n}\n.Feature-forceDisplayRibbons-46Z .Feature-ribbonImageDelay-1d3 {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n.Feature-ribbonContainer-P5U:hover .Feature-ribbonImage-2tP {\n  top: 0;\n}\n.Feature-ribbonContainer-P5U:hover .Feature-numProjects-2rt {\n  opacity: 0;\n}\n.Feature-featureHeader-git {\n  padding: 5px 7px;\n}\n.Feature-featureInfo-G8D {\n  padding: 0 7px 5px;\n}\n.Feature-numProjects-2rt {\n  color: #696969;\n  font-size: 11px;\n  font-weight: bold;\n  margin-top: -10px;\n  text-align: center;\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            ribbon: "Feature-ribbon-20X",
            ribbonImage: "Feature-ribbonImage-2tP",
            ribbonImageDelay: "Feature-ribbonImageDelay-1d3",
            forceDisplayRibbons: "Feature-forceDisplayRibbons-46Z",
            ribbonContainer: "Feature-ribbonContainer-P5U",
            numProjects: "Feature-numProjects-2rt",
            featureHeader: "Feature-featureHeader-git",
            featureInfo: "Feature-featureInfo-G8D"
        };
    },
    v3Rf: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return l;
        })), n.d(t, "a", (function() {
            return c;
        }));
        var r, o, i = n("D57K"), a = n("pqJe"), s = n("gpzO"), l = {
            ADD_LIVESTREAM_REPLAYS: "ADD_LIVESTREAM_REPLAYS",
            REMOVE_LIVESTREAM: "REMOVE_LIVESTREAM",
            SET_HAS_MORE: "SET_HAS_MORE",
            UPDATE_COVER_IMAGE_FOR_STREAM: "UPDATE_COVER_IMAGE_FOR_STREAM",
            UPDATE_COVER_ERROR: "UPDATE_COVER_ERROR"
        }, c = {
            LOAD_MORE_LIVESTREAM_REPLAYS: "LOAD_MORE_LIVESTREAM_REPLAYS",
            DELETE_LIVESTREAM_REPLAY: "DELETE_LIVESTREAM_REPLAY",
            UPDATE_COVER_IMAGE: "UPDATE_COVER_IMAGE"
        }, u = {
            namespaced: !0,
            state: function() {
                return {
                    has_more: !0,
                    isInitialized: !1,
                    next_id: null,
                    updateCoverError: !1,
                    videos: []
                };
            },
            actions: (r = {}, r[c.LOAD_MORE_LIVESTREAM_REPLAYS] = function(e, t) {
                var n = e.state, r = e.commit, o = e.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, s;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            if (!n.has_more || !n.next_id) return [ 3, 5 ];
                            i.label = 1;

                          case 1:
                            return i.trys.push([ 1, 3, , 5 ]), [ 4, a.b.fetchUserLivestreamReplays(t, n.next_id) ];

                          case 2:
                            return e = i.sent(), r(l.ADD_LIVESTREAM_REPLAYS, {
                                livestream: e
                            }), [ 3, 5 ];

                          case 3:
                            return s = i.sent(), r(l.SET_HAS_MORE, !1), [ 4, o("error", s, {
                                root: !0
                            }) ];

                          case 4:
                            return i.sent(), [ 3, 5 ];

                          case 5:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[c.DELETE_LIVESTREAM_REPLAY] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(i.__awaiter)(this, void 0, Promise, (function() {
                    var e;
                    return Object(i.__generator)(this, (function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 4 ]), [ 4, a.b.deleteLivestreamReplay(t) ];

                          case 1:
                            return o.sent(), n(l.REMOVE_LIVESTREAM, t), [ 2, !0 ];

                          case 2:
                            return e = o.sent(), [ 4, r("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return o.sent(), [ 2, !1 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, r[c.UPDATE_COVER_IMAGE] = function(e, t) {
                var n = e.state, r = e.commit, o = t.baseUrl, c = t.imageData, u = t.streamId, p = t.apiKey, d = t.cropperData;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, f;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return e = "", (t = n.videos.find((function(e) {
                                return e.stream_id === u;
                            }))) && (e = t.thumbnail_url), r(l.UPDATE_COVER_ERROR, !1), [ 4, a.b.updateLivestreamCoverImage({
                                baseUrl: o,
                                imageData: c,
                                streamId: u,
                                apiKey: p,
                                cropperData: d
                            }).catch((function() {
                                return r(l.UPDATE_COVER_ERROR, !0);
                            })) ];

                          case 1:
                            return f = i.sent(), [ 4, s.b.getFreshInfo({
                                streamId: u,
                                fields: [ "thumbnail_url" ]
                            }).catch((function() {
                                return r(l.UPDATE_COVER_ERROR, !0);
                            })) ];

                          case 2:
                            return i.sent(), n.updateCoverError ? (r(l.UPDATE_COVER_IMAGE_FOR_STREAM, {
                                streamId: u,
                                imageUrl: e
                            }), [ 2 ]) : (r(l.UPDATE_COVER_IMAGE_FOR_STREAM, {
                                streamId: u,
                                imageUrl: f
                            }), [ 2 ]);
                        }
                    }));
                }));
            }, r),
            mutations: (o = {}, o[l.ADD_LIVESTREAM_REPLAYS] = function(e, t) {
                var n = t.livestream;
                e.videos = e.videos.concat(n.videos), e.isInitialized = !0, e.has_more = n.has_more, 
                e.next_id = n.next_id;
            }, o[l.REMOVE_LIVESTREAM] = function(e, t) {
                var n = e.videos.findIndex((function(e) {
                    return e.stream_id === t;
                }));
                e.videos.splice(n, 1);
            }, o[l.SET_HAS_MORE] = function(e, t) {
                e.has_more = t;
            }, o[l.UPDATE_COVER_IMAGE_FOR_STREAM] = function(e, t) {
                var n = t.streamId, r = t.imageUrl, o = e.videos.find((function(e) {
                    return e.stream_id === n;
                }));
                o && (o.thumbnail_url = r);
            }, o[l.UPDATE_COVER_ERROR] = function(e, t) {
                e.updateCoverError = t;
            }, o)
        };
        t.c = u;
    },
    vrlX: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d;
        }));
        n("hBpG"), n("7x/C"), n("JtPf"), n("3yYM");
        var r, o, i = n("NUr4"), a = n("bMXf"), s = n("5nNk"), l = n("RlIN");
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function p(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        u(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                        u(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        var d = {
            INIT: "INIT",
            OPEN_SEGMENT_VIEWER: "OPEN_SEGMENT_VIEWER",
            NAVIGATE_TO_SEGMENT: "NAVIGATE_TO_SEGMENT",
            CLOSE_EXPIRED_SEGMENT_POPUP: "CLOSE_EXPIRED_SEGMENT_POPUP"
        }, f = "SET_USER_STORY", m = "SET_EXPIRED_STATUS";
        function h(e, t) {
            var n = e.state, r = e.commit;
            return i.a.getStoriesForUser({
                userId: t
            }).catch((function() {
                return {
                    story: null
                };
            })).then((function(e) {
                var t = e.story;
                return r(f, t), n.segmentViewer && r("segmentViewer/" + s.C, {
                    stories: t ? [ t ] : [],
                    listId: "you"
                }), t;
            }));
        }
        t.b = {
            namespaced: !0,
            state: function() {
                return {
                    story: null,
                    shouldShowExpiredModal: !1
                };
            },
            actions: (r = {}, c(r, d.INIT, (function(e, t) {
                var n = t.userId, r = t.segmentId;
                return p(regeneratorRuntime.mark((function t() {
                    var o, i, a;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (o = e.state, i = e.commit, a = e.dispatch, !(o.story && o.segmentViewer && o.segmentViewer.isOpen)) {
                                t.next = 4;
                                break;
                            }
                            return i("segmentViewer/" + s.C, {
                                stories: [ o.story ],
                                listId: "you"
                            }), t.abrupt("return", a("segmentViewer/" + s.K));

                          case 4:
                            if (!o.shouldShowExpiredModal) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return");

                          case 6:
                            return i("segmentViewer/" + s.G, !0), i("segmentViewer/" + s.B, !0), t.prev = 8, 
                            t.next = 11, h(e, n);

                          case 11:
                            if (!!e.state.segmentViewer.segments.find((function(e) {
                                return e.id === r;
                            }))) {
                                t.next = 17;
                                break;
                            }
                            return i(m, !0), i("segmentViewer/" + s.G, !1), i("segmentViewer/" + s.B, !1), t.abrupt("return");

                          case 17:
                            return i("segmentViewer/" + s.A, r), i("segmentViewer/" + s.B, !1), t.abrupt("return", a("segmentViewer/" + s.K));

                          case 22:
                            return t.prev = 22, t.t0 = t.catch(8), t.next = 26, a("error", t.t0, {
                                root: !0
                            });

                          case 26:
                          case "end":
                            return t.stop();
                        }
                    }), t, null, [ [ 8, 22 ] ]);
                })))();
            })), c(r, d.OPEN_SEGMENT_VIEWER, (function() {})), c(r, d.NAVIGATE_TO_SEGMENT, (function(e, t) {
                var n = e.commit, r = e.dispatch;
                return p(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n("segmentViewer/" + s.A, t), e.next = 3, r("segmentViewer/" + s.K);

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            })), c(r, d.CLOSE_EXPIRED_SEGMENT_POPUP, (function(e) {
                (0, e.commit)(m, !1);
            })), c(r, "segmentViewer/" + s.i, (function(e) {
                return h(e, e.state.story.owner.id);
            })), c(r, "segmentViewer/" + s.h, (function(e, t) {
                var n = e.commit, r = e.state, o = e.getters, i = t.direction, l = t.count, c = t.action;
                try {
                    Object(a.c)(i, l);
                } catch (e) {
                    return !0;
                }
                Object(a.b)(i, l, r.segmentViewer.segments, o["segmentViewer/activeSegmentIndex"]) || "wheel" !== c && "forwards" === i && n("segmentViewer/" + s.G, !1);
            })), c(r, "segmentViewer/" + s.l, (function(e) {
                if (!e.state.segmentViewer || !e.state.segmentViewer.isOpen) return h(e, e.state.story.owner.id);
            })), c(r, "uploader/" + l.d, (function(e) {
                return h(e, e.rootGetters["user/userId"]);
            })), r),
            mutations: (o = {}, c(o, f, (function(e, t) {
                e.story = t;
            })), c(o, m, (function(e, t) {
                e.shouldShowExpiredModal = t;
            })), o)
        };
    },
    "vsU+": function(e, t, n) {
        "use strict";
        var r = n("Wrh9"), o = n.n(r);
        t.default = o.a;
    },
    wchg: function(e, t, n) {
        var r = n("eITA");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("9f85a7cc", r, !0, {});
    },
    wdZT: function(e, t, n) {
        var r = n("aeYG");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("52644816", r, !0, {});
    },
    xWxV: function(e, t, n) {
        var r = n("AhH/");
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n("DtNa").default)("789a9fc4", r, !0, {});
    },
    xnCs: function(e, t, n) {
        (t = e.exports = n("RDo7")(!1)).push([ e.i, "@-webkit-keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.Cover-searchLoadingPlaceholder-3yS {\n  -webkit-animation: Cover-fadeIn-3AZ ease-in 1;\n          animation: Cover-fadeIn-3AZ ease-in 1;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #ccc;\n  border-radius: 3px;\n  opacity: 0;\n  overflow: hidden;\n  position: relative;\n}\n.Cover-cover-2mr {\n  position: relative;\n}\n.Cover-content-2R2 {\n  border-radius: 4px;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-overlay-28e {\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-showOnHover-Ks- {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  will-change: opacity;\n}\n.Cover-focused-1tt .Cover-showOnHover-Ks-,\n  .Cover-cover-2mr:hover .Cover-showOnHover-Ks- {\n    opacity: 1;\n}\n.Cover-showOnHover-Ks-.Cover-transitionDone-22y {\n    will-change: auto;\n}\n@media (hover: none) {\n.Cover-showOnHover-Ks- {\n      opacity: 1;\n}\n}\n.Cover-wrapper-300:not(.Cover-noConstraints-PzQ) {\n  height: 0;\n}\n.Cover-wrapper-300 {\n  border-radius: 4px;\n  display: block;\n  padding-top: 78.22%;\n  position: relative;\n  width: 100%;\n}\n.Cover-wrapper-300[tabindex]::before {\n    bottom: -10px;\n    left: -10px;\n    right: -10px;\n    top: -10px;\n}\n", "" ]), 
        t.locals = {
            searchLoadingPlaceholder: "Cover-searchLoadingPlaceholder-3yS",
            fadeIn: "Cover-fadeIn-3AZ",
            cover: "Cover-cover-2mr",
            content: "Cover-content-2R2",
            overlay: "Cover-overlay-28e",
            showOnHover: "Cover-showOnHover-Ks-",
            focused: "Cover-focused-1tt",
            transitionDone: "Cover-transitionDone-22y",
            wrapper: "Cover-wrapper-300",
            noConstraints: "Cover-noConstraints-PzQ"
        };
    },
    "zK7/": function(e, t, n) {
        e.exports = n("ydjK")("zK7/");
    }
} ]);
//# sourceMappingURL=Work.vue.870e5c3e110e8b664019.js.map