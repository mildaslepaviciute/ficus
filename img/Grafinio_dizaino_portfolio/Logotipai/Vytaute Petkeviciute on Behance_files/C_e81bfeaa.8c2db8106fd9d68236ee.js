/*! For license information please see C~e81bfeaa.8c2db8106fd9d68236ee.js.LICENSE.txt */
(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 12 ], {
    YwfD: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            var qq = function(e) {
                "use strict";
                return {
                    hide: function() {
                        return e.style.display = "none", this;
                    },
                    attach: function(t, n) {
                        return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n), 
                        function() {
                            qq(e).detach(t, n);
                        };
                    },
                    detach: function(t, n) {
                        return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent && e.detachEvent("on" + t, n), 
                        this;
                    },
                    contains: function(t) {
                        return !!t && (e === t || (e.contains ? e.contains(t) : !!(8 & t.compareDocumentPosition(e))));
                    },
                    insertBefore: function(t) {
                        return t.parentNode.insertBefore(e, t), this;
                    },
                    remove: function() {
                        return e.parentNode.removeChild(e), this;
                    },
                    css: function(t) {
                        if (null == e.style) throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
                        return null != t.opacity && "string" != typeof e.style.opacity && void 0 !== e.filters && (t.filter = "alpha(opacity=" + Math.round(100 * t.opacity) + ")"), 
                        qq.extend(e.style, t), this;
                    },
                    hasClass: function(t) {
                        return new RegExp("(^| )" + t + "( |$)").test(e.className);
                    },
                    addClass: function(t) {
                        return qq(e).hasClass(t) || (e.className += " " + t), this;
                    },
                    removeClass: function(t) {
                        var n = new RegExp("(^| )" + t + "( |$)");
                        return e.className = e.className.replace(n, " ").replace(/^\s+|\s+$/g, ""), this;
                    },
                    getByClass: function(t) {
                        var n, i = [];
                        return e.querySelectorAll ? e.querySelectorAll("." + t) : (n = e.getElementsByTagName("*"), 
                        qq.each(n, (function(e, n) {
                            qq(n).hasClass(t) && i.push(n);
                        })), i);
                    },
                    children: function() {
                        for (var t = [], n = e.firstChild; n; ) 1 === n.nodeType && t.push(n), n = n.nextSibling;
                        return t;
                    },
                    setText: function(t) {
                        return e.innerText = t, e.textContent = t, this;
                    },
                    clearText: function() {
                        return qq(e).setText("");
                    },
                    hasAttribute: function(t) {
                        var n;
                        return e.hasAttribute ? !!e.hasAttribute(t) && null == /^false$/i.exec(e.getAttribute(t)) : void 0 !== (n = e[t]) && null == /^false$/i.exec(n);
                    }
                };
            };
            (function() {
                "use strict";
                var div;
                qq.canvasToBlob = function(e, t, n) {
                    return qq.dataUriToBlob(e.toDataURL(t, n));
                }, qq.dataUriToBlob = function(e) {
                    var t, n, i, o, r, a, s, u;
                    return n = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURI(e.split(",")[1]), 
                    o = e.split(",")[0].split(":")[1].split(";")[0], t = new ArrayBuffer(n.length), 
                    i = new Uint8Array(t), qq.each(n, (function(e, t) {
                        i[e] = t.charCodeAt(0);
                    })), r = t, a = o, s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, 
                    (u = s && new s) ? (u.append(r), u.getBlob(a)) : new Blob([ r ], {
                        type: a
                    });
                }, qq.log = function(e, t) {
                    window.console && (t && "info" !== t ? window.console[t] ? window.console[t](e) : window.console.log("<" + t + "> " + e) : window.console.log(e));
                }, qq.isObject = function(e) {
                    return e && !e.nodeType && "[object Object]" === Object.prototype.toString.call(e);
                }, qq.isFunction = function(e) {
                    return "function" == typeof e;
                }, qq.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) || e && window.ArrayBuffer && e.buffer && e.buffer.constructor === ArrayBuffer;
                }, qq.isItemList = function(e) {
                    return "[object DataTransferItemList]" === Object.prototype.toString.call(e);
                }, qq.isNodeList = function(e) {
                    return "[object NodeList]" === Object.prototype.toString.call(e) || e.item && e.namedItem;
                }, qq.isString = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e);
                }, qq.trimStr = function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                }, qq.format = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1), n = e, i = n.indexOf("{}");
                    return qq.each(t, (function(e, t) {
                        var o = n.substring(0, i), r = n.substring(i + 2);
                        if ((i = (n = o + t + r).indexOf("{}", i + t.length)) < 0) return !1;
                    })), n;
                }, qq.isFile = function(e) {
                    return window.File && "[object File]" === Object.prototype.toString.call(e);
                }, qq.isFileList = function(e) {
                    return window.FileList && "[object FileList]" === Object.prototype.toString.call(e);
                }, qq.isFileOrInput = function(e) {
                    return qq.isFile(e) || qq.isInput(e);
                }, qq.isInput = function(e, t) {
                    var n = function(e) {
                        var n = e.toLowerCase();
                        return t ? "file" !== n : "file" === n;
                    };
                    return !!(window.HTMLInputElement && "[object HTMLInputElement]" === Object.prototype.toString.call(e) && e.type && n(e.type)) || !!(e.tagName && "input" === e.tagName.toLowerCase() && e.type && n(e.type));
                }, qq.isBlob = function(e) {
                    if (window.Blob && "[object Blob]" === Object.prototype.toString.call(e)) return !0;
                }, qq.isXhrUploadSupported = function() {
                    var e = document.createElement("input");
                    return e.type = "file", void 0 !== e.multiple && "undefined" != typeof File && "undefined" != typeof FormData && void 0 !== qq.createXhrInstance().upload;
                }, qq.createXhrInstance = function() {
                    if (window.XMLHttpRequest) return new XMLHttpRequest;
                    try {
                        return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                    } catch (e) {
                        return qq.log("Neither XHR or ActiveX are supported!", "error"), null;
                    }
                }, qq.isFolderDropSupported = function(e) {
                    return e.items && e.items.length > 0 && e.items[0].webkitGetAsEntry;
                }, qq.isFileChunkingSupported = function() {
                    return !qq.androidStock() && qq.isXhrUploadSupported() && (void 0 !== File.prototype.slice || void 0 !== File.prototype.webkitSlice || void 0 !== File.prototype.mozSlice);
                }, qq.sliceBlob = function(e, t, n) {
                    return (e.slice || e.mozSlice || e.webkitSlice).call(e, t, n);
                }, qq.arrayBufferToHex = function(e) {
                    var t = "", n = new Uint8Array(e);
                    return qq.each(n, (function(e, n) {
                        var i = n.toString(16);
                        i.length < 2 && (i = "0" + i), t += i;
                    })), t;
                }, qq.readBlobToHex = function(e, t, n) {
                    var i = qq.sliceBlob(e, t, t + n), o = new FileReader, r = new qq.Promise;
                    return o.onload = function() {
                        r.success(qq.arrayBufferToHex(o.result));
                    }, o.onerror = r.failure, o.readAsArrayBuffer(i), r;
                }, qq.extend = function(e, t, n) {
                    return qq.each(t, (function(t, i) {
                        n && qq.isObject(i) ? (void 0 === e[t] && (e[t] = {}), qq.extend(e[t], i, !0)) : e[t] = i;
                    })), e;
                }, qq.override = function(e, t) {
                    var n = {}, i = t(n);
                    return qq.each(i, (function(t, i) {
                        void 0 !== e[t] && (n[t] = e[t]), e[t] = i;
                    })), e;
                }, qq.indexOf = function(e, t, n) {
                    if (e.indexOf) return e.indexOf(t, n);
                    n = n || 0;
                    var i = e.length;
                    for (n < 0 && (n += i); n < i; n += 1) if (e.hasOwnProperty(n) && e[n] === t) return n;
                    return -1;
                }, qq.getUniqueId = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    }));
                }, qq.ie = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE") || -1 !== navigator.userAgent.indexOf("Trident");
                }, qq.ie7 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 7");
                }, qq.ie8 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 8");
                }, qq.ie10 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 10");
                }, qq.ie11 = function() {
                    return qq.ie() && -1 !== navigator.userAgent.indexOf("rv:11");
                }, qq.safari = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Apple");
                }, qq.chrome = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Google");
                }, qq.opera = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Opera");
                }, qq.firefox = function() {
                    return !qq.ie11() && -1 !== navigator.userAgent.indexOf("Mozilla") && void 0 !== navigator.vendor && "" === navigator.vendor;
                }, qq.windows = function() {
                    return "Win32" === navigator.platform;
                }, qq.android = function() {
                    return -1 !== navigator.userAgent.toLowerCase().indexOf("android");
                }, qq.androidStock = function() {
                    return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0;
                }, qq.ios6 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 6_");
                }, qq.ios7 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 7_");
                }, qq.ios8 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 8_");
                }, qq.ios800 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 8_0 ");
                }, qq.ios = function() {
                    return -1 !== navigator.userAgent.indexOf("iPad") || -1 !== navigator.userAgent.indexOf("iPod") || -1 !== navigator.userAgent.indexOf("iPhone");
                }, qq.iosChrome = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf("CriOS");
                }, qq.iosSafari = function() {
                    return qq.ios() && !qq.iosChrome() && -1 !== navigator.userAgent.indexOf("Safari");
                }, qq.iosSafariWebView = function() {
                    return qq.ios() && !qq.iosChrome() && !qq.iosSafari();
                }, qq.preventDefault = function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                }, qq.toElement = (div = document.createElement("div"), function(e) {
                    div.innerHTML = e;
                    var t = div.firstChild;
                    return div.removeChild(t), t;
                }), qq.each = function(e, t) {
                    var n;
                    if (e) if (window.Storage && e.constructor === window.Storage) for (n = 0; n < e.length && !1 !== t(e.key(n), e.getItem(e.key(n))); n++) ; else if (qq.isArray(e) || qq.isItemList(e) || qq.isNodeList(e)) for (n = 0; n < e.length && !1 !== t(n, e[n]); n++) ; else if (qq.isString(e)) for (n = 0; n < e.length && !1 !== t(n, e.charAt(n)); n++) ; else for (n in e) if (Object.prototype.hasOwnProperty.call(e, n) && !1 === t(n, e[n])) break;
                }, qq.bind = function(e, t) {
                    if (qq.isFunction(e)) {
                        var n = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var i = qq.extend([], n);
                            return arguments.length && (i = i.concat(Array.prototype.slice.call(arguments))), 
                            e.apply(t, i);
                        };
                    }
                    throw new Error("first parameter must be a function!");
                }, qq.obj2url = function(e, t, n) {
                    var i = [], o = "&", r = function(e, n) {
                        var o = t ? /\[\]$/.test(t) ? t : t + "[" + n + "]" : n;
                        "undefined" !== o && "undefined" !== n && i.push("object" == typeof e ? qq.obj2url(e, o, !0) : "[object Function]" === Object.prototype.toString.call(e) ? encodeURIComponent(o) + "=" + encodeURIComponent(e()) : encodeURIComponent(o) + "=" + encodeURIComponent(e));
                    };
                    return !n && t ? (o = /\?/.test(t) ? /\?$/.test(t) ? "" : "&" : "?", i.push(t), 
                    i.push(qq.obj2url(e))) : "[object Array]" === Object.prototype.toString.call(e) && void 0 !== e ? qq.each(e, (function(e, t) {
                        r(t, e);
                    })) : null != e && "object" == typeof e ? qq.each(e, (function(e, t) {
                        r(t, e);
                    })) : i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)), t ? i.join(o) : i.join(o).replace(/^&/, "").replace(/%20/g, "+");
                }, qq.obj2FormData = function(e, t, n) {
                    return t || (t = new FormData), qq.each(e, (function(e, i) {
                        e = n ? n + "[" + e + "]" : e, qq.isObject(i) ? qq.obj2FormData(i, t, e) : qq.isFunction(i) ? t.append(e, i()) : t.append(e, i);
                    })), t;
                }, qq.obj2Inputs = function(e, t) {
                    var n;
                    return t || (t = document.createElement("form")), qq.obj2FormData(e, {
                        append: function(e, i) {
                            (n = document.createElement("input")).setAttribute("name", e), n.setAttribute("value", i), 
                            t.appendChild(n);
                        }
                    }), t;
                }, qq.parseJson = function(json) {
                    return window.JSON && qq.isFunction(JSON.parse) ? JSON.parse(json) : eval("(" + json + ")");
                }, qq.getExtension = function(e) {
                    var t = e.lastIndexOf(".") + 1;
                    if (t > 0) return e.substr(t, e.length - t);
                }, qq.getFilename = function(e) {
                    return qq.isInput(e) ? e.value.replace(/.*(\/|\\)/, "") : qq.isFile(e) && null !== e.fileName && void 0 !== e.fileName ? e.fileName : e.name;
                }, qq.DisposeSupport = function() {
                    var e = [];
                    return {
                        dispose: function() {
                            var t;
                            do {
                                (t = e.shift()) && t();
                            } while (t);
                        },
                        attach: function() {
                            var e = arguments;
                            this.addDisposer(qq(e[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
                        },
                        addDisposer: function(t) {
                            e.push(t);
                        }
                    };
                };
            })(), function() {
                "use strict";
                qq.Error = function(e) {
                    this.message = "[Fine Uploader " + qq.version + "] " + e;
                }, qq.Error.prototype = new Error;
            }(), qq.version = "5.1.3", qq.supportedFeatures = function() {
                "use strict";
                var e, t, n, i, o, r, a, s, u, l, c, d, p, q;
                function h() {
                    return !!window.XMLHttpRequest && void 0 !== qq.createXhrInstance().withCredentials;
                }
                function f() {
                    return void 0 !== window.XDomainRequest;
                }
                return e = function() {
                    var e, t = !0;
                    try {
                        (e = document.createElement("input")).type = "file", qq(e).hide(), e.disabled && (t = !1);
                    } catch (e) {
                        t = !1;
                    }
                    return t;
                }(), t = (n = e && qq.isXhrUploadSupported()) && !qq.androidStock(), i = n && (qq.chrome() || qq.opera()) && void 0 !== navigator.userAgent.match(/Chrome\/[2][1-9]|Chrome\/[3-9][0-9]/), 
                o = n && qq.isFileChunkingSupported(), r = n && o && function() {
                    try {
                        return !!window.localStorage;
                    } catch (e) {
                        return !1;
                    }
                }(), a = n && (qq.chrome() || qq.opera()) && void 0 !== navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/), 
                s = e && (void 0 !== window.postMessage || n), l = h(), u = f(), c = !!h() || f(), 
                d = void 0 !== document.createElement("input").webkitdirectory, p = n && void 0 !== window.FileReader, 
                q = !!n && !qq.androidStock() && !qq.iosChrome(), {
                    ajaxUploading: n,
                    blobUploading: t,
                    canDetermineSize: n,
                    chunking: o,
                    deleteFileCors: c,
                    deleteFileCorsXdr: u,
                    deleteFileCorsXhr: l,
                    fileDrop: n,
                    folderDrop: i,
                    folderSelection: d,
                    imagePreviews: p,
                    imageValidation: p,
                    itemSizeValidation: n,
                    pause: o,
                    progressBar: q,
                    resume: r,
                    scaling: p && t,
                    tiffPreviews: qq.safari(),
                    unlimitedScaledImageSize: !qq.ios(),
                    uploading: e,
                    uploadCors: s,
                    uploadCustomHeaders: n,
                    uploadNonMultipart: n,
                    uploadViaPaste: a
                };
            }(), qq.isGenericPromise = function(e) {
                "use strict";
                return !!(e && e.then && qq.isFunction(e.then));
            }, qq.Promise = function() {
                "use strict";
                var e, t, n = [], i = [], o = [], r = 0;
                qq.extend(this, {
                    then: function(o, a) {
                        return 0 === r ? (o && n.push(o), a && i.push(a)) : -1 === r ? a && a.apply(null, t) : o && o.apply(null, e), 
                        this;
                    },
                    done: function(n) {
                        return 0 === r ? o.push(n) : n.apply(null, void 0 === t ? e : t), this;
                    },
                    success: function() {
                        return r = 1, e = arguments, n.length && qq.each(n, (function(t, n) {
                            n.apply(null, e);
                        })), o.length && qq.each(o, (function(t, n) {
                            n.apply(null, e);
                        })), this;
                    },
                    failure: function() {
                        return r = -1, t = arguments, i.length && qq.each(i, (function(e, n) {
                            n.apply(null, t);
                        })), o.length && qq.each(o, (function(e, n) {
                            n.apply(null, t);
                        })), this;
                    }
                });
            }, qq.BlobProxy = function(e, t) {
                "use strict";
                qq.extend(this, {
                    referenceBlob: e,
                    create: function() {
                        return t(e);
                    }
                });
            }, qq.UploadButton = function(e) {
                "use strict";
                var t, n, i = this, o = new qq.DisposeSupport, r = {
                    element: null,
                    multiple: !1,
                    acceptFiles: null,
                    folders: !1,
                    name: "qqfile",
                    onChange: function(e) {},
                    ios8BrowserCrashWorkaround: !0,
                    hoverClass: "qq-upload-button-hover",
                    focusClass: "qq-upload-button-focus"
                };
                function a() {
                    var e = document.createElement("input");
                    return e.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, n), i.setMultiple(r.multiple, e), 
                    r.folders && qq.supportedFeatures.folderSelection && e.setAttribute("webkitdirectory", ""), 
                    r.acceptFiles && e.setAttribute("accept", r.acceptFiles), e.setAttribute("type", "file"), 
                    e.setAttribute("name", r.name), qq(e).css({
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontFamily: "Arial",
                        fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
                        margin: 0,
                        padding: 0,
                        cursor: "pointer",
                        opacity: 0
                    }), !qq.ie7() && qq(e).css({
                        height: "100%"
                    }), r.element.appendChild(e), o.attach(e, "change", (function() {
                        r.onChange(e);
                    })), o.attach(e, "mouseover", (function() {
                        qq(r.element).addClass(r.hoverClass);
                    })), o.attach(e, "mouseout", (function() {
                        qq(r.element).removeClass(r.hoverClass);
                    })), o.attach(e, "focus", (function() {
                        qq(r.element).addClass(r.focusClass);
                    })), o.attach(e, "blur", (function() {
                        qq(r.element).removeClass(r.focusClass);
                    })), window.attachEvent && e.setAttribute("tabIndex", "-1"), e;
                }
                qq.extend(r, e), n = qq.getUniqueId(), qq(r.element).css({
                    position: "relative",
                    overflow: "hidden",
                    direction: "ltr"
                }), qq.extend(this, {
                    getInput: function() {
                        return t;
                    },
                    getButtonId: function() {
                        return n;
                    },
                    setMultiple: function(e, t) {
                        var n = t || this.getInput();
                        r.ios8BrowserCrashWorkaround && qq.ios8() && (qq.iosChrome() || qq.iosSafariWebView()) || e ? n.setAttribute("multiple", "") : n.removeAttribute("multiple");
                    },
                    setAcceptFiles: function(e) {
                        e !== r.acceptFiles && t.setAttribute("accept", e);
                    },
                    reset: function() {
                        t.parentNode && qq(t).remove(), qq(r.element).removeClass(r.focusClass), t = null, 
                        t = a();
                    }
                }), t = a();
            }, qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id", qq.UploadData = function(e) {
                "use strict";
                var t = [], n = {}, i = {}, o = {}, r = {};
                qq.extend(this, {
                    addFile: function(a) {
                        var s = a.status || qq.status.SUBMITTING, u = t.push({
                            name: a.name,
                            originalName: a.name,
                            uuid: a.uuid,
                            size: a.size || -1,
                            status: s
                        }) - 1;
                        return a.batchId && (t[u].batchId = a.batchId, void 0 === r[a.batchId] && (r[a.batchId] = []), 
                        r[a.batchId].push(u)), a.proxyGroupId && (t[u].proxyGroupId = a.proxyGroupId, void 0 === o[a.proxyGroupId] && (o[a.proxyGroupId] = []), 
                        o[a.proxyGroupId].push(u)), t[u].id = u, n[a.uuid] = u, void 0 === i[s] && (i[s] = []), 
                        i[s].push(u), e.onStatusChange(u, null, s), u;
                    },
                    retrieve: function(e) {
                        return qq.isObject(e) && t.length ? void 0 !== e.id ? function(e) {
                            if (qq.isArray(e)) {
                                var n = [];
                                return qq.each(e, (function(e, i) {
                                    n.push(t[i]);
                                })), n;
                            }
                            return t[e];
                        }(e.id) : void 0 !== e.uuid ? function(e) {
                            if (qq.isArray(e)) {
                                var i = [];
                                return qq.each(e, (function(e, o) {
                                    i.push(t[n[o]]);
                                })), i;
                            }
                            return t[n[e]];
                        }(e.uuid) : e.status ? (o = e.status, r = [], a = [].concat(o), qq.each(a, (function(e, n) {
                            var o = i[n];
                            void 0 !== o && qq.each(o, (function(e, n) {
                                r.push(t[n]);
                            }));
                        })), r) : void 0 : qq.extend([], t, !0);
                        var o, r, a;
                    },
                    reset: function() {
                        t = [], n = {}, i = {}, r = {};
                    },
                    setStatus: function(n, o) {
                        var r = t[n].status, a = qq.indexOf(i[r], n);
                        i[r].splice(a, 1), t[n].status = o, void 0 === i[o] && (i[o] = []), i[o].push(n), 
                        e.onStatusChange(n, r, o);
                    },
                    uuidChanged: function(e, i) {
                        var o = t[e].uuid;
                        t[e].uuid = i, n[i] = e, delete n[o];
                    },
                    updateName: function(e, n) {
                        t[e].name = n;
                    },
                    updateSize: function(e, n) {
                        t[e].size = n;
                    },
                    setParentId: function(e, n) {
                        t[e].parentId = n;
                    },
                    getIdsInProxyGroup: function(e) {
                        var n = t[e].proxyGroupId;
                        return n ? o[n] : [];
                    },
                    getIdsInBatch: function(e) {
                        var n = t[e].batchId;
                        return r[n];
                    }
                });
            }, qq.status = {
                SUBMITTING: "submitting",
                SUBMITTED: "submitted",
                REJECTED: "rejected",
                QUEUED: "queued",
                CANCELED: "canceled",
                PAUSED: "paused",
                UPLOADING: "uploading",
                UPLOAD_RETRYING: "retrying upload",
                UPLOAD_SUCCESSFUL: "upload successful",
                UPLOAD_FAILED: "upload failed",
                DELETE_FAILED: "delete failed",
                DELETING: "deleting",
                DELETED: "deleted"
            }, function() {
                "use strict";
                qq.basePublicApi = {
                    addBlobs: function(e, t, n) {
                        this.addFiles(e, t, n);
                    },
                    addFiles: function(e, t, n) {
                        this._maybeHandleIos8SafariWorkaround();
                        var i = 0 === this._storedIds.length ? qq.getUniqueId() : this._currentBatchId, o = qq.bind((function(e) {
                            this._handleNewFile({
                                blob: e,
                                name: this._options.blobs.defaultName
                            }, i, c);
                        }), this), r = qq.bind((function(e) {
                            this._handleNewFile(e, i, c);
                        }), this), a = qq.bind((function(e) {
                            var t = qq.canvasToBlob(e);
                            this._handleNewFile({
                                blob: t,
                                name: this._options.blobs.defaultName + ".png"
                            }, i, c);
                        }), this), s = qq.bind((function(e) {
                            var t = e.quality && e.quality / 100, n = qq.canvasToBlob(e.canvas, e.type, t);
                            this._handleNewFile({
                                blob: n,
                                name: e.name
                            }, i, c);
                        }), this), u = qq.bind((function(e) {
                            if (qq.isInput(e) && qq.supportedFeatures.ajaxUploading) {
                                var t = Array.prototype.slice.call(e.files);
                                qq.each(t, (function(e, t) {
                                    this._handleNewFile(t, i, c);
                                }));
                            } else this._handleNewFile(e, i, c);
                        }), this), l = this, c = [];
                        this._currentBatchId = i, e && (qq.isFileList(e) && (e = Array.prototype.slice.call(e)), 
                        e = [].concat(e), qq.each(e, (function(e, t) {
                            qq.isFileOrInput(t) ? u(t) : qq.isBlob(t) ? o(t) : qq.isObject(t) ? t.blob && t.name ? r(t) : t.canvas && t.name && s(t) : t.tagName && "canvas" === t.tagName.toLowerCase() ? a(t) : l.log(t + " is not a valid file container!  Ignoring!", "warn");
                        })), this.log("Received " + c.length + " files."), this._prepareItemsForUpload(c, t, n));
                    },
                    cancel: function(e) {
                        this._handler.cancel(e);
                    },
                    cancelAll: function() {
                        var e = [], t = this;
                        qq.extend(e, this._storedIds), qq.each(e, (function(e, n) {
                            t.cancel(n);
                        })), this._handler.cancelAll();
                    },
                    clearStoredFiles: function() {
                        this._storedIds = [];
                    },
                    continueUpload: function(e) {
                        var t = this._uploadData.retrieve({
                            id: e
                        });
                        return !(!qq.supportedFeatures.pause || !this._options.chunking.enabled) && (t.status === qq.status.PAUSED ? (this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", e, this.getName(e))), 
                        this._uploadFile(e), !0) : (this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", e, this.getName(e)), "error"), 
                        !1));
                    },
                    deleteFile: function(e) {
                        return this._onSubmitDelete(e);
                    },
                    doesExist: function(e) {
                        return this._handler.isValid(e);
                    },
                    drawThumbnail: function(e, t, n, i) {
                        var o, r, a = new qq.Promise;
                        return this._imageGenerator ? (o = this._thumbnailUrls[e], r = {
                            scale: n > 0,
                            maxSize: n > 0 ? n : null
                        }, !i && qq.supportedFeatures.imagePreviews && (o = this.getFile(e)), null == o ? a.failure({
                            container: t,
                            error: "File or URL not found."
                        }) : this._imageGenerator.generate(o, t, r).then((function(e) {
                            a.success(e);
                        }), (function(e, t) {
                            a.failure({
                                container: e,
                                error: t || "Problem generating thumbnail"
                            });
                        }))) : a.failure({
                            container: t,
                            error: "Missing image generator module"
                        }), a;
                    },
                    getButton: function(e) {
                        return this._getButton(this._buttonIdsForFileIds[e]);
                    },
                    getEndpoint: function(e) {
                        return this._endpointStore.get(e);
                    },
                    getFile: function(e) {
                        return this._handler.getFile(e) || null;
                    },
                    getInProgress: function() {
                        return this._uploadData.retrieve({
                            status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED ]
                        }).length;
                    },
                    getName: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).name;
                    },
                    getParentId: function(e) {
                        var t = this.getUploads({
                            id: e
                        }), n = null;
                        return t && void 0 !== t.parentId && (n = t.parentId), n;
                    },
                    getResumableFilesData: function() {
                        return this._handler.getResumableFilesData();
                    },
                    getSize: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).size;
                    },
                    getNetUploads: function() {
                        return this._netUploaded;
                    },
                    getRemainingAllowedItems: function() {
                        var e = this._currentItemLimit;
                        return e > 0 ? e - this._netUploadedOrQueued : null;
                    },
                    getUploads: function(e) {
                        return this._uploadData.retrieve(e);
                    },
                    getUuid: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).uuid;
                    },
                    log: function(e, t) {
                        !this._options.debug || t && "info" !== t ? t && "info" !== t && qq.log("[Fine Uploader " + qq.version + "] " + e, t) : qq.log("[Fine Uploader " + qq.version + "] " + e);
                    },
                    pauseUpload: function(e) {
                        var t = this._uploadData.retrieve({
                            id: e
                        });
                        if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) return !1;
                        if (qq.indexOf([ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING ], t.status) >= 0) {
                            if (this._handler.pause(e)) return this._uploadData.setStatus(e, qq.status.PAUSED), 
                            !0;
                            this.log(qq.format("Unable to pause file ID {} ({}).", e, this.getName(e)), "error");
                        } else this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", e, this.getName(e)), "error");
                        return !1;
                    },
                    reset: function() {
                        this.log("Resetting uploader..."), this._handler.reset(), this._storedIds = [], 
                        this._autoRetries = [], this._retryTimeouts = [], this._preventRetries = [], this._thumbnailUrls = [], 
                        qq.each(this._buttons, (function(e, t) {
                            t.reset();
                        })), this._paramsStore.reset(), this._endpointStore.reset(), this._netUploadedOrQueued = 0, 
                        this._netUploaded = 0, this._uploadData.reset(), this._buttonIdsForFileIds = [], 
                        this._pasteHandler && this._pasteHandler.reset(), this._options.session.refreshOnReset && this._refreshSessionData(), 
                        this._succeededSinceLastAllComplete = [], this._failedSinceLastAllComplete = [], 
                        this._totalProgress && this._totalProgress.reset();
                    },
                    retry: function(e) {
                        return this._manualRetry(e);
                    },
                    scaleImage: function(e, t) {
                        var n = this;
                        return qq.Scaler.prototype.scaleImage(e, t, {
                            log: qq.bind(n.log, n),
                            getFile: qq.bind(n.getFile, n),
                            uploadData: n._uploadData
                        });
                    },
                    setCustomHeaders: function(e, t) {
                        this._customHeadersStore.set(e, t);
                    },
                    setDeleteFileCustomHeaders: function(e, t) {
                        this._deleteFileCustomHeadersStore.set(e, t);
                    },
                    setDeleteFileEndpoint: function(e, t) {
                        this._deleteFileEndpointStore.set(e, t);
                    },
                    setDeleteFileParams: function(e, t) {
                        this._deleteFileParamsStore.set(e, t);
                    },
                    setEndpoint: function(e, t) {
                        this._endpointStore.set(e, t);
                    },
                    setItemLimit: function(e) {
                        this._currentItemLimit = e;
                    },
                    setName: function(e, t) {
                        this._uploadData.updateName(e, t);
                    },
                    setParams: function(e, t) {
                        this._paramsStore.set(e, t);
                    },
                    setUuid: function(e, t) {
                        return this._uploadData.uuidChanged(e, t);
                    },
                    uploadStoredFiles: function() {
                        var e;
                        if (0 === this._storedIds.length) this._itemError("noFilesError"); else for (;this._storedIds.length; ) e = this._storedIds.shift(), 
                        this._uploadFile(e);
                    }
                }, qq.basePrivateApi = {
                    _addCannedFile: function(e) {
                        var t = this._uploadData.addFile({
                            uuid: e.uuid,
                            name: e.name,
                            size: e.size,
                            status: qq.status.UPLOAD_SUCCESSFUL
                        });
                        return e.deleteFileEndpoint && this.setDeleteFileEndpoint(e.deleteFileEndpoint, t), 
                        e.deleteFileParams && this.setDeleteFileParams(e.deleteFileParams, t), e.thumbnailUrl && (this._thumbnailUrls[t] = e.thumbnailUrl), 
                        this._netUploaded++, this._netUploadedOrQueued++, t;
                    },
                    _annotateWithButtonId: function(e, t) {
                        qq.isFile(e) && (e.qqButtonId = this._getButtonId(t));
                    },
                    _batchError: function(e) {
                        this._options.callbacks.onError(null, null, e, void 0);
                    },
                    _createDeleteHandler: function() {
                        var e = this;
                        return new qq.DeleteFileAjaxRequester({
                            method: this._options.deleteFile.method.toUpperCase(),
                            maxConnections: this._options.maxConnections,
                            uuidParamName: this._options.request.uuidName,
                            customHeaders: this._deleteFileCustomHeadersStore,
                            paramsStore: this._deleteFileParamsStore,
                            endpointStore: this._deleteFileEndpointStore,
                            demoMode: this._options.demoMode,
                            cors: this._options.cors,
                            log: qq.bind(e.log, e),
                            onDelete: function(t) {
                                e._onDelete(t), e._options.callbacks.onDelete(t);
                            },
                            onDeleteComplete: function(t, n, i) {
                                e._onDeleteComplete(t, n, i), e._options.callbacks.onDeleteComplete(t, n, i);
                            }
                        });
                    },
                    _createPasteHandler: function() {
                        var e = this;
                        return new qq.PasteSupport({
                            targetElement: this._options.paste.targetElement,
                            callbacks: {
                                log: qq.bind(e.log, e),
                                pasteReceived: function(t) {
                                    e._handleCheckedCallback({
                                        name: "onPasteReceived",
                                        callback: qq.bind(e._options.callbacks.onPasteReceived, e, t),
                                        onSuccess: qq.bind(e._handlePasteSuccess, e, t),
                                        identifier: "pasted image"
                                    });
                                }
                            }
                        });
                    },
                    _createStore: function(e, t) {
                        var n = {}, i = e, o = {}, r = function(e) {
                            return qq.isObject(e) ? qq.extend({}, e) : e;
                        }, a = function(e, n) {
                            t && qq.isObject(n) && qq.extend(n, qq.isFunction(t) ? t() : t), o[e] && qq.extend(n, o[e]);
                        };
                        return {
                            set: function(e, t) {
                                null == t ? (n = {}, i = r(e)) : n[t] = r(e);
                            },
                            get: function(e) {
                                var t;
                                return t = null != e && n[e] ? n[e] : r(i), a(e, t), r(t);
                            },
                            addReadOnly: function(e, t) {
                                qq.isObject(n) && (o[e] = o[e] || {}, qq.extend(o[e], t));
                            },
                            remove: function(e) {
                                return delete n[e];
                            },
                            reset: function() {
                                n = {}, o = {}, i = e;
                            }
                        };
                    },
                    _createUploadDataTracker: function() {
                        var e = this;
                        return new qq.UploadData({
                            getName: function(t) {
                                return e.getName(t);
                            },
                            getUuid: function(t) {
                                return e.getUuid(t);
                            },
                            getSize: function(t) {
                                return e.getSize(t);
                            },
                            onStatusChange: function(t, n, i) {
                                e._onUploadStatusChange(t, n, i), e._options.callbacks.onStatusChange(t, n, i), 
                                e._maybeAllComplete(t, i), e._totalProgress && setTimeout((function() {
                                    e._totalProgress.onStatusChange(t, n, i);
                                }), 0);
                            }
                        });
                    },
                    _createUploadButton: function(e) {
                        var t, n = this, i = e.accept || this._options.validation.acceptFiles, o = e.allowedExtensions || this._options.validation.allowedExtensions;
                        return t = new qq.UploadButton({
                            element: e.element,
                            folders: e.folders,
                            name: this._options.request.inputName,
                            multiple: !!qq.supportedFeatures.ajaxUploading && !(n._options.workarounds.iosEmptyVideos && qq.ios() && !qq.ios6() && n._isAllowedExtension(o, ".mov")) && (void 0 === e.multiple ? n._options.multiple : e.multiple),
                            acceptFiles: i,
                            onChange: function(e) {
                                n._onInputChange(e);
                            },
                            hoverClass: this._options.classes.buttonHover,
                            focusClass: this._options.classes.buttonFocus,
                            ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash
                        }), this._disposeSupport.addDisposer((function() {
                            t.dispose();
                        })), n._buttons.push(t), t;
                    },
                    _createUploadHandler: function(e, t) {
                        var n = this, i = {}, o = {
                            debug: this._options.debug,
                            maxConnections: this._options.maxConnections,
                            cors: this._options.cors,
                            demoMode: this._options.demoMode,
                            paramsStore: this._paramsStore,
                            endpointStore: this._endpointStore,
                            chunking: this._options.chunking,
                            resume: this._options.resume,
                            blobs: this._options.blobs,
                            log: qq.bind(n.log, n),
                            preventRetryParam: this._options.retry.preventRetryResponseProperty,
                            onProgress: function(e, t, o, r) {
                                o < 0 || r < 0 || (i[e] && i[e].loaded === o && i[e].total === r || (n._onProgress(e, t, o, r), 
                                n._options.callbacks.onProgress(e, t, o, r)), i[e] = {
                                    loaded: o,
                                    total: r
                                });
                            },
                            onComplete: function(e, t, o, r) {
                                delete i[e];
                                var a, s = n.getUploads({
                                    id: e
                                }).status;
                                s !== qq.status.UPLOAD_SUCCESSFUL && s !== qq.status.UPLOAD_FAILED && ((a = n._onComplete(e, t, o, r)) instanceof qq.Promise ? a.done((function() {
                                    n._options.callbacks.onComplete(e, t, o, r);
                                })) : n._options.callbacks.onComplete(e, t, o, r));
                            },
                            onCancel: function(e, t, i) {
                                var o = new qq.Promise;
                                return n._handleCheckedCallback({
                                    name: "onCancel",
                                    callback: qq.bind(n._options.callbacks.onCancel, n, e, t),
                                    onFailure: o.failure,
                                    onSuccess: function() {
                                        i.then((function() {
                                            n._onCancel(e, t);
                                        })), o.success();
                                    },
                                    identifier: e
                                }), o;
                            },
                            onUploadPrep: qq.bind(this._onUploadPrep, this),
                            onUpload: function(e, t) {
                                n._onUpload(e, t), n._options.callbacks.onUpload(e, t);
                            },
                            onUploadChunk: function(e, t, i) {
                                n._onUploadChunk(e, i), n._options.callbacks.onUploadChunk(e, t, i);
                            },
                            onUploadChunkSuccess: function(e, t, i, o) {
                                n._options.callbacks.onUploadChunkSuccess.apply(n, arguments);
                            },
                            onResume: function(e, t, i) {
                                return n._options.callbacks.onResume(e, t, i);
                            },
                            onAutoRetry: function(e, t, i, o) {
                                return n._onAutoRetry.apply(n, arguments);
                            },
                            onUuidChanged: function(e, t) {
                                n.log("Server requested UUID change from '" + n.getUuid(e) + "' to '" + t + "'"), 
                                n.setUuid(e, t);
                            },
                            getName: qq.bind(n.getName, n),
                            getUuid: qq.bind(n.getUuid, n),
                            getSize: qq.bind(n.getSize, n),
                            setSize: qq.bind(n._setSize, n),
                            getDataByUuid: function(e) {
                                return n.getUploads({
                                    uuid: e
                                });
                            },
                            isQueued: function(e) {
                                var t = n.getUploads({
                                    id: e
                                }).status;
                                return t === qq.status.QUEUED || t === qq.status.SUBMITTED || t === qq.status.UPLOAD_RETRYING || t === qq.status.PAUSED;
                            },
                            getIdsInProxyGroup: n._uploadData.getIdsInProxyGroup,
                            getIdsInBatch: n._uploadData.getIdsInBatch
                        };
                        return qq.each(this._options.request, (function(e, t) {
                            o[e] = t;
                        })), o.customHeaders = this._customHeadersStore, e && qq.each(e, (function(e, t) {
                            o[e] = t;
                        })), new qq.UploadHandlerController(o, t);
                    },
                    _fileOrBlobRejected: function(e) {
                        this._netUploadedOrQueued--, this._uploadData.setStatus(e, qq.status.REJECTED);
                    },
                    _formatSize: function(e) {
                        var t = -1;
                        do {
                            e /= 1e3, t++;
                        } while (e > 999);
                        return Math.max(e, .1).toFixed(1) + this._options.text.sizeSymbols[t];
                    },
                    _generateExtraButtonSpecs: function() {
                        var e = this;
                        this._extraButtonSpecs = {}, qq.each(this._options.extraButtons, (function(t, n) {
                            var i = n.multiple, o = qq.extend({}, e._options.validation, !0), r = qq.extend({}, n);
                            void 0 === i && (i = e._options.multiple), r.validation && qq.extend(o, n.validation, !0), 
                            qq.extend(r, {
                                multiple: i,
                                validation: o
                            }, !0), e._initExtraButton(r);
                        }));
                    },
                    _getButton: function(e) {
                        var t = this._extraButtonSpecs[e];
                        return t ? t.element : e === this._defaultButtonId ? this._options.button : void 0;
                    },
                    _getButtonId: function(e) {
                        var t, n, i = e;
                        if (i instanceof qq.BlobProxy && (i = i.referenceBlob), i && !qq.isBlob(i)) {
                            if (qq.isFile(i)) return i.qqButtonId;
                            if ("input" === i.tagName.toLowerCase() && "file" === i.type.toLowerCase()) return i.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                            if (t = i.getElementsByTagName("input"), qq.each(t, (function(e, t) {
                                if ("file" === t.getAttribute("type")) return n = t, !1;
                            })), n) return n.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                        }
                    },
                    _getNotFinished: function() {
                        return this._uploadData.retrieve({
                            status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED, qq.status.SUBMITTING, qq.status.SUBMITTED, qq.status.PAUSED ]
                        }).length;
                    },
                    _getValidationBase: function(e) {
                        var t = this._extraButtonSpecs[e];
                        return t ? t.validation : this._options.validation;
                    },
                    _getValidationDescriptor: function(e) {
                        return e.file instanceof qq.BlobProxy ? {
                            name: qq.getFilename(e.file.referenceBlob),
                            size: e.file.referenceBlob.size
                        } : {
                            name: this.getUploads({
                                id: e.id
                            }).name,
                            size: this.getUploads({
                                id: e.id
                            }).size
                        };
                    },
                    _getValidationDescriptors: function(e) {
                        var t = this, n = [];
                        return qq.each(e, (function(e, i) {
                            n.push(t._getValidationDescriptor(i));
                        })), n;
                    },
                    _handleCameraAccess: function() {
                        if (this._options.camera.ios && qq.ios()) {
                            var e = "image/*;capture=camera", t = this._options.camera.button, n = t ? this._getButtonId(t) : this._defaultButtonId, i = this._options;
                            n && n !== this._defaultButtonId && (i = this._extraButtonSpecs[n]), i.multiple = !1, 
                            null === i.validation.acceptFiles ? i.validation.acceptFiles = e : i.validation.acceptFiles += "," + e, 
                            qq.each(this._buttons, (function(e, t) {
                                if (t.getButtonId() === n) return t.setMultiple(i.multiple), t.setAcceptFiles(i.acceptFiles), 
                                !1;
                            }));
                        }
                    },
                    _handleCheckedCallback: function(e) {
                        var t = this, n = e.callback();
                        return qq.isGenericPromise(n) ? (this.log(e.name + " - waiting for " + e.name + " promise to be fulfilled for " + e.identifier), 
                        n.then((function(n) {
                            t.log(e.name + " promise success for " + e.identifier), e.onSuccess(n);
                        }), (function() {
                            e.onFailure ? (t.log(e.name + " promise failure for " + e.identifier), e.onFailure()) : t.log(e.name + " promise failure for " + e.identifier);
                        }))) : (!1 !== n ? e.onSuccess(n) : e.onFailure ? (this.log(e.name + " - return value was 'false' for " + e.identifier + ".  Invoking failure callback."), 
                        e.onFailure()) : this.log(e.name + " - return value was 'false' for " + e.identifier + ".  Will not proceed."), 
                        n);
                    },
                    _handleNewFile: function(e, t, n) {
                        var i = this, o = qq.getUniqueId(), r = -1, a = qq.getFilename(e), s = e.blob || e, u = this._customNewFileHandler ? this._customNewFileHandler : qq.bind(i._handleNewFileGeneric, i);
                        !qq.isInput(s) && s.size >= 0 && (r = s.size), u(s, a, o, r, n, t, this._options.request.uuidName, {
                            uploadData: i._uploadData,
                            paramsStore: i._paramsStore,
                            addFileToHandler: function(e, t) {
                                i._handler.add(e, t), i._netUploadedOrQueued++, i._trackButton(e);
                            }
                        });
                    },
                    _handleNewFileGeneric: function(e, t, n, i, o, r) {
                        var a = this._uploadData.addFile({
                            uuid: n,
                            name: t,
                            size: i,
                            batchId: r
                        });
                        this._handler.add(a, e), this._trackButton(a), this._netUploadedOrQueued++, o.push({
                            id: a,
                            file: e
                        });
                    },
                    _handlePasteSuccess: function(e, t) {
                        var n = e.type.split("/")[1], i = t;
                        null == i && (i = this._options.paste.defaultName), i += "." + n, this.addFiles({
                            name: i,
                            blob: e
                        });
                    },
                    _initExtraButton: function(e) {
                        var t = this._createUploadButton({
                            element: e.element,
                            multiple: e.multiple,
                            accept: e.validation.acceptFiles,
                            folders: e.folders,
                            allowedExtensions: e.validation.allowedExtensions
                        });
                        this._extraButtonSpecs[t.getButtonId()] = e;
                    },
                    _initFormSupportAndParams: function() {
                        this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this)), 
                        this._formSupport && this._formSupport.attachedToForm ? (this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject), 
                        this._options.autoUpload = this._formSupport.newAutoUpload, this._formSupport.newEndpoint && (this._options.request.endpoint = this._formSupport.newEndpoint)) : this._paramsStore = this._createStore(this._options.request.params);
                    },
                    _isDeletePossible: function() {
                        return !(!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) && (!this._options.cors.expected || (!!qq.supportedFeatures.deleteFileCorsXhr || !(!qq.supportedFeatures.deleteFileCorsXdr || !this._options.cors.allowXdr)));
                    },
                    _isAllowedExtension: function(e, t) {
                        var n = !1;
                        return !e.length || (qq.each(e, (function(e, i) {
                            if (qq.isString(i)) {
                                var o = new RegExp("\\." + i + "$", "i");
                                if (null != t.match(o)) return n = !0, !1;
                            }
                        })), n);
                    },
                    _itemError: function(e, t, n) {
                        var i, o, r = this._options.messages[e], a = [], s = [].concat(t), u = s[0], l = this._getButtonId(n), c = this._getValidationBase(l);
                        function d(e, t) {
                            r = r.replace(e, t);
                        }
                        return qq.each(c.allowedExtensions, (function(e, t) {
                            qq.isString(t) && a.push(t);
                        })), i = a.join(", ").toLowerCase(), d("{file}", this._options.formatFileName(u)), 
                        d("{extensions}", i), d("{sizeLimit}", this._formatSize(c.sizeLimit)), d("{minSizeLimit}", this._formatSize(c.minSizeLimit)), 
                        d("{minWidth}", this._options.validation.image.minWidth), d("{maxWidth}", this._options.validation.image.maxWidth), 
                        d("{minHeight}", this._options.validation.image.minHeight), d("{maxHeight}", this._options.validation.image.maxHeight), 
                        null !== (o = r.match(/(\{\w+\})/g)) && qq.each(o, (function(e, t) {
                            d(t, s[e]);
                        })), this._options.callbacks.onError(null, u, r, void 0), r;
                    },
                    _manualRetry: function(e, t) {
                        if (this._onBeforeManualRetry(e)) return this._netUploadedOrQueued++, this._uploadData.setStatus(e, qq.status.UPLOAD_RETRYING), 
                        t ? t(e) : this._handler.retry(e), !0;
                    },
                    _maybeAllComplete: function(e, t) {
                        var n = this, i = this._getNotFinished();
                        t === qq.status.UPLOAD_SUCCESSFUL ? this._succeededSinceLastAllComplete.push(e) : t === qq.status.UPLOAD_FAILED && this._failedSinceLastAllComplete.push(e), 
                        0 === i && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length) && setTimeout((function() {
                            n._onAllComplete(n._succeededSinceLastAllComplete, n._failedSinceLastAllComplete);
                        }), 0);
                    },
                    _maybeHandleIos8SafariWorkaround: function() {
                        var e = this;
                        if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) throw setTimeout((function() {
                            window.alert(e._options.messages.unsupportedBrowserIos8Safari);
                        }), 0), new qq.Error(this._options.messages.unsupportedBrowserIos8Safari);
                    },
                    _maybeParseAndSendUploadError: function(e, t, n, i) {
                        if (!n.success) if (i && 200 !== i.status && !n.error) this._options.callbacks.onError(e, t, "XHR returned response code " + i.status, i); else {
                            var o = n.error ? n.error : this._options.text.defaultResponseError;
                            this._options.callbacks.onError(e, t, o, i);
                        }
                    },
                    _maybeProcessNextItemAfterOnValidateCallback: function(e, t, n, i, o) {
                        var r = this;
                        if (t.length > n) if (e || !this._options.validation.stopOnFirstInvalidFile) setTimeout((function() {
                            var e = r._getValidationDescriptor(t[n]), a = r._getButtonId(t[n].file), s = r._getButton(a);
                            r._handleCheckedCallback({
                                name: "onValidate",
                                callback: qq.bind(r._options.callbacks.onValidate, r, e, s),
                                onSuccess: qq.bind(r._onValidateCallbackSuccess, r, t, n, i, o),
                                onFailure: qq.bind(r._onValidateCallbackFailure, r, t, n, i, o),
                                identifier: "Item '" + e.name + "', size: " + e.size
                            });
                        }), 0); else if (!e) for (;n < t.length; n++) r._fileOrBlobRejected(t[n].id);
                    },
                    _onAllComplete: function(e, t) {
                        this._totalProgress && this._totalProgress.onAllComplete(e, t, this._preventRetries), 
                        this._options.callbacks.onAllComplete(qq.extend([], e), qq.extend([], t)), this._succeededSinceLastAllComplete = [], 
                        this._failedSinceLastAllComplete = [];
                    },
                    _onAutoRetry: function(e, t, n, i, o) {
                        var r = this;
                        if (r._preventRetries[e] = n[r._options.retry.preventRetryResponseProperty], r._shouldAutoRetry(e, t, n)) return r._maybeParseAndSendUploadError.apply(r, arguments), 
                        r._options.callbacks.onAutoRetry(e, t, r._autoRetries[e]), r._onBeforeAutoRetry(e, t), 
                        r._retryTimeouts[e] = setTimeout((function() {
                            r.log("Retrying " + t + "..."), r._uploadData.setStatus(e, qq.status.UPLOAD_RETRYING), 
                            o ? o(e) : r._handler.retry(e);
                        }), 1e3 * r._options.retry.autoAttemptDelay), !0;
                    },
                    _onBeforeAutoRetry: function(e, t) {
                        this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + t + "...");
                    },
                    _onBeforeManualRetry: function(e) {
                        var t, n = this._currentItemLimit;
                        return this._preventRetries[e] ? (this.log("Retries are forbidden for id " + e, "warn"), 
                        !1) : this._handler.isValid(e) ? (t = this.getName(e), !1 !== this._options.callbacks.onManualRetry(e, t) && (n > 0 && this._netUploadedOrQueued + 1 > n ? (this._itemError("retryFailTooManyItems"), 
                        !1) : (this.log("Retrying upload for '" + t + "' (id: " + e + ")..."), !0))) : (this.log("'" + e + "' is not a valid file ID", "error"), 
                        !1);
                    },
                    _onCancel: function(e, t) {
                        this._netUploadedOrQueued--, clearTimeout(this._retryTimeouts[e]);
                        var n = qq.indexOf(this._storedIds, e);
                        !this._options.autoUpload && n >= 0 && this._storedIds.splice(n, 1), this._uploadData.setStatus(e, qq.status.CANCELED);
                    },
                    _onComplete: function(e, t, n, i) {
                        return n.success ? (n.thumbnailUrl && (this._thumbnailUrls[e] = n.thumbnailUrl), 
                        this._netUploaded++, this._uploadData.setStatus(e, qq.status.UPLOAD_SUCCESSFUL)) : (this._netUploadedOrQueued--, 
                        this._uploadData.setStatus(e, qq.status.UPLOAD_FAILED), !0 === n[this._options.retry.preventRetryResponseProperty] && (this._preventRetries[e] = !0)), 
                        this._maybeParseAndSendUploadError(e, t, n, i), !!n.success;
                    },
                    _onDelete: function(e) {
                        this._uploadData.setStatus(e, qq.status.DELETING);
                    },
                    _onDeleteComplete: function(e, t, n) {
                        var i = this.getName(e);
                        n ? (this._uploadData.setStatus(e, qq.status.DELETE_FAILED), this.log("Delete request for '" + i + "' has failed.", "error"), 
                        void 0 === t.withCredentials ? this._options.callbacks.onError(e, i, "Delete request failed", t) : this._options.callbacks.onError(e, i, "Delete request failed with response code " + t.status, t)) : (this._netUploadedOrQueued--, 
                        this._netUploaded--, this._handler.expunge(e), this._uploadData.setStatus(e, qq.status.DELETED), 
                        this.log("Delete request for '" + i + "' has succeeded."));
                    },
                    _onInputChange: function(e) {
                        var t;
                        if (qq.supportedFeatures.ajaxUploading) {
                            for (t = 0; t < e.files.length; t++) this._annotateWithButtonId(e.files[t], e);
                            this.addFiles(e.files);
                        } else e.value.length > 0 && this.addFiles(e);
                        qq.each(this._buttons, (function(e, t) {
                            t.reset();
                        }));
                    },
                    _onProgress: function(e, t, n, i) {
                        this._totalProgress && this._totalProgress.onIndividualProgress(e, n, i);
                    },
                    _onSubmit: function(e, t) {},
                    _onSubmitCallbackSuccess: function(e, t) {
                        this._onSubmit.apply(this, arguments), this._uploadData.setStatus(e, qq.status.SUBMITTED), 
                        this._onSubmitted.apply(this, arguments), this._options.callbacks.onSubmitted.apply(this, arguments), 
                        this._options.autoUpload ? this._uploadFile(e) : this._storeForLater(e);
                    },
                    _onSubmitDelete: function(e, t, n) {
                        var i, o = this.getUuid(e);
                        return t && (i = qq.bind(t, this, e, o, n)), this._isDeletePossible() ? (this._handleCheckedCallback({
                            name: "onSubmitDelete",
                            callback: qq.bind(this._options.callbacks.onSubmitDelete, this, e),
                            onSuccess: i || qq.bind(this._deleteHandler.sendDelete, this, e, o, n),
                            identifier: e
                        }), !0) : (this.log("Delete request ignored for ID " + e + ", delete feature is disabled or request not possible due to CORS on a user agent that does not support pre-flighting.", "warn"), 
                        !1);
                    },
                    _onSubmitted: function(e) {},
                    _onTotalProgress: function(e, t) {
                        this._options.callbacks.onTotalProgress(e, t);
                    },
                    _onUploadPrep: function(e) {},
                    _onUpload: function(e, t) {
                        this._uploadData.setStatus(e, qq.status.UPLOADING);
                    },
                    _onUploadChunk: function(e, t) {},
                    _onUploadStatusChange: function(e, t, n) {
                        n === qq.status.PAUSED && clearTimeout(this._retryTimeouts[e]);
                    },
                    _onValidateBatchCallbackFailure: function(e) {
                        var t = this;
                        qq.each(e, (function(e, n) {
                            t._fileOrBlobRejected(n.id);
                        }));
                    },
                    _onValidateBatchCallbackSuccess: function(e, t, n, i, o) {
                        var r, a = this._currentItemLimit, s = this._netUploadedOrQueued;
                        0 === a || s <= a ? t.length > 0 ? this._handleCheckedCallback({
                            name: "onValidate",
                            callback: qq.bind(this._options.callbacks.onValidate, this, e[0], o),
                            onSuccess: qq.bind(this._onValidateCallbackSuccess, this, t, 0, n, i),
                            onFailure: qq.bind(this._onValidateCallbackFailure, this, t, 0, n, i),
                            identifier: "Item '" + t[0].file.name + "', size: " + t[0].file.size
                        }) : this._itemError("noFilesError") : (this._onValidateBatchCallbackFailure(t), 
                        r = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, s).replace(/\{itemLimit\}/g, a), 
                        this._batchError(r));
                    },
                    _onValidateCallbackFailure: function(e, t, n, i) {
                        var o = t + 1;
                        this._fileOrBlobRejected(e[t].id, e[t].file.name), this._maybeProcessNextItemAfterOnValidateCallback(!1, e, o, n, i);
                    },
                    _onValidateCallbackSuccess: function(e, t, n, i) {
                        var o = this, r = t + 1, a = this._getValidationDescriptor(e[t]);
                        this._validateFileOrBlobData(e[t], a).then((function() {
                            o._upload(e[t].id, n, i), o._maybeProcessNextItemAfterOnValidateCallback(!0, e, r, n, i);
                        }), (function() {
                            o._maybeProcessNextItemAfterOnValidateCallback(!1, e, r, n, i);
                        }));
                    },
                    _prepareItemsForUpload: function(e, t, n) {
                        if (0 !== e.length) {
                            var i = this._getValidationDescriptors(e), o = this._getButtonId(e[0].file), r = this._getButton(o);
                            this._handleCheckedCallback({
                                name: "onValidateBatch",
                                callback: qq.bind(this._options.callbacks.onValidateBatch, this, i, r),
                                onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, i, e, t, n, r),
                                onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, e),
                                identifier: "batch validation"
                            });
                        } else this._itemError("noFilesError");
                    },
                    _preventLeaveInProgress: function() {
                        var e = this;
                        this._disposeSupport.attach(window, "beforeunload", (function(t) {
                            if (e.getInProgress()) return (t = t || window.event).returnValue = e._options.messages.onLeave, 
                            e._options.messages.onLeave;
                        }));
                    },
                    _refreshSessionData: function() {
                        var e = this, t = this._options.session;
                        qq.Session && null != this._options.session.endpoint && (this._session || (qq.extend(t, this._options.cors), 
                        t.log = qq.bind(this.log, this), t.addFileRecord = qq.bind(this._addCannedFile, this), 
                        this._session = new qq.Session(t)), setTimeout((function() {
                            e._session.refresh().then((function(t, n) {
                                e._options.callbacks.onSessionRequestComplete(t, !0, n);
                            }), (function(t, n) {
                                e._options.callbacks.onSessionRequestComplete(t, !1, n);
                            }));
                        }), 0));
                    },
                    _setSize: function(e, t) {
                        this._uploadData.updateSize(e, t), this._totalProgress && this._totalProgress.onNewSize(e);
                    },
                    _shouldAutoRetry: function(e, t, n) {
                        var i = this._uploadData.retrieve({
                            id: e
                        });
                        return !!(!this._preventRetries[e] && this._options.retry.enableAuto && i.status !== qq.status.PAUSED && (void 0 === this._autoRetries[e] && (this._autoRetries[e] = 0), 
                        this._autoRetries[e] < this._options.retry.maxAutoAttempts)) && (this._autoRetries[e] += 1, 
                        !0);
                    },
                    _storeForLater: function(e) {
                        this._storedIds.push(e);
                    },
                    _trackButton: function(e) {
                        var t;
                        (t = qq.supportedFeatures.ajaxUploading ? this._handler.getFile(e).qqButtonId : this._getButtonId(this._handler.getInput(e))) && (this._buttonIdsForFileIds[e] = t);
                    },
                    _upload: function(e, t, n) {
                        var i = this.getName(e);
                        t && this.setParams(t, e), n && this.setEndpoint(n, e), this._handleCheckedCallback({
                            name: "onSubmit",
                            callback: qq.bind(this._options.callbacks.onSubmit, this, e, i),
                            onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, e, i),
                            onFailure: qq.bind(this._fileOrBlobRejected, this, e, i),
                            identifier: e
                        });
                    },
                    _uploadFile: function(e) {
                        this._handler.upload(e) || this._uploadData.setStatus(e, qq.status.QUEUED);
                    },
                    _validateFileOrBlobData: function(e, t) {
                        var n = this, i = e.file instanceof qq.BlobProxy ? e.file.referenceBlob : e.file, o = t.name, r = t.size, a = this._getButtonId(e.file), s = this._getValidationBase(a), u = new qq.Promise;
                        return u.then((function() {}), (function() {
                            n._fileOrBlobRejected(e.id, o);
                        })), qq.isFileOrInput(i) && !this._isAllowedExtension(s.allowedExtensions, o) ? (this._itemError("typeError", o, i), 
                        u.failure()) : 0 === r ? (this._itemError("emptyError", o, i), u.failure()) : r > 0 && s.sizeLimit && r > s.sizeLimit ? (this._itemError("sizeError", o, i), 
                        u.failure()) : r > 0 && r < s.minSizeLimit ? (this._itemError("minSizeError", o, i), 
                        u.failure()) : (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(i) ? new qq.ImageValidation(i, qq.bind(n.log, n)).validate(s.image).then(u.success, (function(e) {
                            n._itemError(e + "ImageError", o, i), u.failure();
                        })) : u.success(), u);
                    },
                    _wrapCallbacks: function() {
                        var e, t, n;
                        for (n in e = this, t = function(t, n, i) {
                            var o;
                            try {
                                return n.apply(e, i);
                            } catch (n) {
                                o = n.message || n.toString(), e.log("Caught exception in '" + t + "' callback - " + o, "error");
                            }
                        }, this._options.callbacks) !function() {
                            var i, o;
                            i = n, o = e._options.callbacks[i], e._options.callbacks[i] = function() {
                                return t(i, o, arguments);
                            };
                        }();
                    }
                };
            }(), function() {
                "use strict";
                qq.FineUploaderBasic = function(e) {
                    var t = this;
                    this._options = {
                        debug: !1,
                        button: null,
                        multiple: !0,
                        maxConnections: 3,
                        disableCancelForFormUploads: !1,
                        autoUpload: !0,
                        request: {
                            endpoint: "/server/upload",
                            params: {},
                            paramsInBody: !0,
                            customHeaders: {},
                            forceMultipart: !0,
                            inputName: "qqfile",
                            uuidName: "qquuid",
                            totalFileSizeName: "qqtotalfilesize",
                            filenameParam: "qqfilename"
                        },
                        validation: {
                            allowedExtensions: [],
                            sizeLimit: 0,
                            minSizeLimit: 0,
                            itemLimit: 0,
                            stopOnFirstInvalidFile: !0,
                            acceptFiles: null,
                            image: {
                                maxHeight: 0,
                                maxWidth: 0,
                                minHeight: 0,
                                minWidth: 0
                            }
                        },
                        callbacks: {
                            onSubmit: function(e, t) {},
                            onSubmitted: function(e, t) {},
                            onComplete: function(e, t, n, i) {},
                            onAllComplete: function(e, t) {},
                            onCancel: function(e, t) {},
                            onUpload: function(e, t) {},
                            onUploadChunk: function(e, t, n) {},
                            onUploadChunkSuccess: function(e, t, n, i) {},
                            onResume: function(e, t, n) {},
                            onProgress: function(e, t, n, i) {},
                            onTotalProgress: function(e, t) {},
                            onError: function(e, t, n, i) {},
                            onAutoRetry: function(e, t, n) {},
                            onManualRetry: function(e, t) {},
                            onValidateBatch: function(e) {},
                            onValidate: function(e) {},
                            onSubmitDelete: function(e) {},
                            onDelete: function(e) {},
                            onDeleteComplete: function(e, t, n) {},
                            onPasteReceived: function(e) {},
                            onStatusChange: function(e, t, n) {},
                            onSessionRequestComplete: function(e, t, n) {}
                        },
                        messages: {
                            typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
                            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                            emptyError: "{file} is empty, please select files again without it.",
                            noFilesError: "No files to upload.",
                            tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
                            maxHeightImageError: "Image is too tall.",
                            maxWidthImageError: "Image is too wide.",
                            minHeightImageError: "Image is not tall enough.",
                            minWidthImageError: "Image is not wide enough.",
                            retryFailTooManyItems: "Retry failed - you have reached your file limit.",
                            onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
                            unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
                        },
                        retry: {
                            enableAuto: !1,
                            maxAutoAttempts: 3,
                            autoAttemptDelay: 5,
                            preventRetryResponseProperty: "preventRetry"
                        },
                        classes: {
                            buttonHover: "qq-upload-button-hover",
                            buttonFocus: "qq-upload-button-focus"
                        },
                        chunking: {
                            enabled: !1,
                            concurrent: {
                                enabled: !1
                            },
                            mandatory: !1,
                            paramNames: {
                                partIndex: "qqpartindex",
                                partByteOffset: "qqpartbyteoffset",
                                chunkSize: "qqchunksize",
                                totalFileSize: "qqtotalfilesize",
                                totalParts: "qqtotalparts"
                            },
                            partSize: 2e6,
                            success: {
                                endpoint: null
                            }
                        },
                        resume: {
                            enabled: !1,
                            recordsExpireIn: 7,
                            paramNames: {
                                resuming: "qqresume"
                            }
                        },
                        formatFileName: function(e) {
                            return void 0 !== e && e.length > 33 && (e = e.slice(0, 19) + "..." + e.slice(-14)), 
                            e;
                        },
                        text: {
                            defaultResponseError: "Upload failure reason unknown",
                            sizeSymbols: [ "kB", "MB", "GB", "TB", "PB", "EB" ]
                        },
                        deleteFile: {
                            enabled: !1,
                            method: "DELETE",
                            endpoint: "/server/upload",
                            customHeaders: {},
                            params: {}
                        },
                        cors: {
                            expected: !1,
                            sendCredentials: !1,
                            allowXdr: !1
                        },
                        blobs: {
                            defaultName: "misc_data"
                        },
                        paste: {
                            targetElement: null,
                            defaultName: "pasted_image"
                        },
                        camera: {
                            ios: !1,
                            button: null
                        },
                        extraButtons: [],
                        session: {
                            endpoint: null,
                            params: {},
                            customHeaders: {},
                            refreshOnReset: !0
                        },
                        form: {
                            element: "qq-form",
                            autoUpload: !1,
                            interceptSubmit: !0
                        },
                        scaling: {
                            sendOriginal: !0,
                            orient: !0,
                            defaultType: null,
                            defaultQuality: 80,
                            failureText: "Failed to scale",
                            includeExif: !1,
                            sizes: []
                        },
                        workarounds: {
                            iosEmptyVideos: !0,
                            ios8SafariUploads: !0,
                            ios8BrowserCrash: !0
                        }
                    }, qq.extend(this._options, e, !0), this._buttons = [], this._extraButtonSpecs = {}, 
                    this._buttonIdsForFileIds = [], this._wrapCallbacks(), this._disposeSupport = new qq.DisposeSupport, 
                    this._storedIds = [], this._autoRetries = [], this._retryTimeouts = [], this._preventRetries = [], 
                    this._thumbnailUrls = [], this._netUploadedOrQueued = 0, this._netUploaded = 0, 
                    this._uploadData = this._createUploadDataTracker(), this._initFormSupportAndParams(), 
                    this._customHeadersStore = this._createStore(this._options.request.customHeaders), 
                    this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders), 
                    this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params), 
                    this._endpointStore = this._createStore(this._options.request.endpoint), this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint), 
                    this._handler = this._createUploadHandler(), this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler(), 
                    this._options.button && (this._defaultButtonId = this._createUploadButton({
                        element: this._options.button
                    }).getButtonId()), this._generateExtraButtonSpecs(), this._handleCameraAccess(), 
                    this._options.paste.targetElement && (qq.PasteSupport ? this._pasteHandler = this._createPasteHandler() : this.log("Paste support module not found", "error")), 
                    this._preventLeaveInProgress(), this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this)), 
                    this._refreshSessionData(), this._succeededSinceLastAllComplete = [], this._failedSinceLastAllComplete = [], 
                    this._scaler = qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this)) || {}, 
                    this._scaler.enabled && (this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler)), 
                    qq.TotalProgress && qq.supportedFeatures.progressBar && (this._totalProgress = new qq.TotalProgress(qq.bind(this._onTotalProgress, this), (function(e) {
                        var n = t._uploadData.retrieve({
                            id: e
                        });
                        return n && n.size || 0;
                    }))), this._currentItemLimit = this._options.validation.itemLimit;
                }, qq.FineUploaderBasic.prototype = qq.basePublicApi, qq.extend(qq.FineUploaderBasic.prototype, qq.basePrivateApi);
            }(), qq.AjaxRequester = function(e) {
                "use strict";
                var t, n, i = [], o = {}, r = {
                    acceptHeader: null,
                    validMethods: [ "POST" ],
                    method: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    maxConnections: 3,
                    customHeaders: {},
                    endpointStore: {},
                    paramsStore: {},
                    mandatedParams: {},
                    allowXRequestedWithAndCacheControl: !0,
                    successfulResponseCodes: {
                        DELETE: [ 200, 202, 204 ],
                        POST: [ 200, 204 ],
                        GET: [ 200 ]
                    },
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {},
                    onSend: function(e) {},
                    onComplete: function(e, t, n) {},
                    onProgress: null
                };
                if (qq.extend(r, e), t = r.log, qq.indexOf(r.validMethods, r.method) < 0) throw new Error("'" + r.method + "' is not a supported method for this type of request!");
                function a(e) {
                    return r.cors.expected && void 0 === e.withCredentials;
                }
                function s(e, t) {
                    var n = o[e].xhr;
                    return n || (n = t || (r.cors.expected ? function() {
                        var e;
                        return (window.XMLHttpRequest || window.ActiveXObject) && void 0 === (e = qq.createXhrInstance()).withCredentials && (e = new XDomainRequest), 
                        e;
                    }() : qq.createXhrInstance()), o[e].xhr = n), n;
                }
                function u(e) {
                    var t = qq.indexOf(i, e), n = r.maxConnections;
                    delete o[e], i.splice(t, 1), i.length >= n && t < n && c(i[n - 1]);
                }
                function l(e, n) {
                    var i, o = s(e), l = r.method, c = !0 === n;
                    u(e), c ? t(l + " request for " + e + " has failed", "error") : a(o) || (i = o.status, 
                    qq.indexOf(r.successfulResponseCodes[r.method], i) >= 0) || (c = !0, t(l + " request for " + e + " has failed - response code " + o.status, "error")), 
                    r.onComplete(e, o, c);
                }
                function c(e, i) {
                    var u, c = s(e, i), d = r.method, p = function(e) {
                        var t, n = o[e].additionalParams, i = r.mandatedParams;
                        return r.paramsStore.get && (t = r.paramsStore.get(e)), n && qq.each(n, (function(e, n) {
                            (t = t || {})[e] = n;
                        })), i && qq.each(i, (function(e, n) {
                            (t = t || {})[e] = n;
                        })), t;
                    }(e), q = o[e].payload;
                    return r.onSend(e), u = function(e, t) {
                        var i = r.endpointStore.get(e), a = o[e].addToPath;
                        null != a && (i += "/" + a);
                        return n && t ? qq.obj2url(t, i) : i;
                    }(e, p), a(c) ? (c.onload = function(e) {
                        return function() {
                            l(e);
                        };
                    }(e), c.onerror = function(e) {
                        return function() {
                            l(e, !0);
                        };
                    }(e)) : c.onreadystatechange = function(e) {
                        return function() {
                            4 === s(e).readyState && l(e);
                        };
                    }(e), function(e) {
                        var t = r.onProgress;
                        t && (s(e).upload.onprogress = function(n) {
                            n.lengthComputable && t(e, n.loaded, n.total);
                        });
                    }(e), c.open(d, u, !0), r.cors.expected && r.cors.sendCredentials && !a(c) && (c.withCredentials = !0), 
                    function(e) {
                        var t = s(e), n = r.customHeaders, i = o[e].additionalHeaders || {}, u = r.method, l = {};
                        a(t) || (r.acceptHeader && t.setRequestHeader("Accept", r.acceptHeader), r.allowXRequestedWithAndCacheControl && (r.cors.expected && qq.indexOf([ "GET", "POST", "HEAD" ], r.method) >= 0 && (c = !1, 
                        qq.each(c, (function(e, t) {
                            if (qq.indexOf([ "Accept", "Accept-Language", "Content-Language", "Content-Type" ], t) < 0) return c = !0, 
                            !1;
                        })), !c) || (t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.setRequestHeader("Cache-Control", "no-cache"))), 
                        !r.contentType || "POST" !== u && "PUT" !== u || t.setRequestHeader("Content-Type", r.contentType), 
                        qq.extend(l, qq.isFunction(n) ? n(e) : n), qq.extend(l, i), qq.each(l, (function(e, n) {
                            t.setRequestHeader(e, n);
                        })));
                        var c;
                    }(e), t("Sending " + d + " request for " + e), q ? c.send(q) : n || !p ? c.send() : p && r.contentType && r.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0 ? c.send(qq.obj2url(p, "")) : p && r.contentType && r.contentType.toLowerCase().indexOf("application/json") >= 0 ? c.send(JSON.stringify(p)) : c.send(p), 
                    c;
                }
                n = "GET" === r.method || "DELETE" === r.method, qq.extend(this, {
                    initTransport: function(e) {
                        var t, n, a, s, u;
                        return {
                            withPath: function(e) {
                                return t = e, this;
                            },
                            withParams: function(e) {
                                return n = e, this;
                            },
                            withHeaders: function(e) {
                                return a = e, this;
                            },
                            withPayload: function(e) {
                                return s = e, this;
                            },
                            withCacheBuster: function() {
                                return u = !0, this;
                            },
                            send: function(l) {
                                return u && qq.indexOf([ "GET", "DELETE" ], r.method) >= 0 && (n.qqtimestamp = (new Date).getTime()), 
                                function(e, t, n, a, s, u) {
                                    if (o[e] = {
                                        addToPath: n,
                                        additionalParams: a,
                                        additionalHeaders: s,
                                        payload: u
                                    }, i.push(e) <= r.maxConnections) return c(e, t);
                                }(e, l, t, n, a, s);
                            }
                        };
                    },
                    canceled: function(e) {
                        u(e);
                    }
                });
            }, qq.UploadHandler = function(e) {
                "use strict";
                var t = e.proxy, n = {}, i = t.onCancel, o = t.getName;
                qq.extend(this, {
                    add: function(e, t) {
                        n[e] = t, n[e].temp = {};
                    },
                    cancel: function(e) {
                        var t = this, r = new qq.Promise;
                        i(e, o(e), r).then((function() {
                            t.isValid(e) && (n[e].canceled = !0, t.expunge(e)), r.success();
                        }));
                    },
                    expunge: function(e) {
                        delete n[e];
                    },
                    getThirdPartyFileId: function(e) {
                        return n[e].key;
                    },
                    isValid: function(e) {
                        return void 0 !== n[e];
                    },
                    reset: function() {
                        n = {};
                    },
                    _getFileState: function(e) {
                        return n[e];
                    },
                    _setThirdPartyFileId: function(e, t) {
                        n[e].key = t;
                    },
                    _wasCanceled: function(e) {
                        return !!n[e].canceled;
                    }
                });
            }, qq.UploadHandlerController = function(e, t) {
                "use strict";
                var n, i, o, r, a = this, s = !1, u = !1, l = {
                    paramsStore: {},
                    maxConnections: 3,
                    chunking: {
                        enabled: !1,
                        multiple: {
                            enabled: !1
                        }
                    },
                    log: function(e, t) {},
                    onProgress: function(e, t, n, i) {},
                    onComplete: function(e, t, n, i) {},
                    onCancel: function(e, t) {},
                    onUploadPrep: function(e) {},
                    onUpload: function(e, t) {},
                    onUploadChunk: function(e, t, n) {},
                    onUploadChunkSuccess: function(e, t, n, i) {},
                    onAutoRetry: function(e, t, n, i) {},
                    onResume: function(e, t, n) {},
                    onUuidChanged: function(e, t) {},
                    getName: function(e) {},
                    setSize: function(e, t) {},
                    isQueued: function(e) {},
                    getIdsInProxyGroup: function(e) {},
                    getIdsInBatch: function(e) {}
                }, c = {
                    done: function(e, t, n, i) {
                        var r = o._getChunkData(e, t);
                        o._getFileState(e).attemptingResume = !1, delete o._getFileState(e).temp.chunkProgress[t], 
                        o._getFileState(e).loaded += r.size, l.onUploadChunkSuccess(e, o._getChunkDataForCallback(r), n, i);
                    },
                    finalize: function(e) {
                        var t = l.getSize(e), n = l.getName(e);
                        i("All chunks have been uploaded for " + e + " - finalizing...."), o.finalizeChunks(e).then((function(r, a) {
                            i("Finalize successful for " + e);
                            var s = q.normalizeResponse(r, !0);
                            l.onProgress(e, n, t, t), o._maybeDeletePersistedChunkData(e), q.cleanup(e, s, a);
                        }), (function(t, o) {
                            var r = q.normalizeResponse(t, !1);
                            i("Problem finalizing chunks for file ID " + e + " - " + r.error, "error"), r.reset && c.reset(e), 
                            l.onAutoRetry(e, n, r, o) || q.cleanup(e, r, o);
                        }));
                    },
                    hasMoreParts: function(e) {
                        return !!o._getFileState(e).chunking.remaining.length;
                    },
                    nextPart: function(e) {
                        var t = o._getFileState(e).chunking.remaining.shift();
                        return t >= o._getTotalChunks(e) && (t = null), t;
                    },
                    reset: function(e) {
                        i("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + e, "error"), 
                        o._maybeDeletePersistedChunkData(e), o.reevaluateChunking(e), o._getFileState(e).loaded = 0;
                    },
                    sendNext: function(e) {
                        var t = l.getSize(e), n = l.getName(e), r = c.nextPart(e), a = o._getChunkData(e, r), s = o._getFileState(e).attemptingResume, p = o._getFileState(e).chunking.inProgress || [];
                        null == o._getFileState(e).loaded && (o._getFileState(e).loaded = 0), s && !1 === l.onResume(e, n, a) && (c.reset(e), 
                        r = c.nextPart(e), a = o._getChunkData(e, r), s = !1), null == r && 0 === p.length ? c.finalize(e) : (i("Sending chunked upload request for item " + e + ": bytes " + (a.start + 1) + "-" + a.end + " of " + t), 
                        l.onUploadChunk(e, n, o._getChunkDataForCallback(a)), p.push(r), o._getFileState(e).chunking.inProgress = p, 
                        u && d.open(e, r), u && d.available() && o._getFileState(e).chunking.remaining.length && c.sendNext(e), 
                        o.uploadChunk(e, r, s).then((function(t, n) {
                            i("Chunked upload request succeeded for " + e + ", chunk " + r), o.clearCachedChunk(e, r);
                            var a = o._getFileState(e).chunking.inProgress || [], s = q.normalizeResponse(t, !0), u = qq.indexOf(a, r);
                            i(qq.format("Chunk {} for file {} uploaded successfully.", r, e)), c.done(e, r, s, n), 
                            u >= 0 && a.splice(u, 1), o._maybePersistChunkedState(e), c.hasMoreParts(e) || 0 !== a.length ? c.hasMoreParts(e) && c.sendNext(e) : c.finalize(e);
                        }), (function(t, a) {
                            i("Chunked upload request failed for " + e + ", chunk " + r), o.clearCachedChunk(e, r);
                            var s, p = q.normalizeResponse(t, !1);
                            p.reset ? c.reset(e) : (s = qq.indexOf(o._getFileState(e).chunking.inProgress, r)) >= 0 && (o._getFileState(e).chunking.inProgress.splice(s, 1), 
                            o._getFileState(e).chunking.remaining.unshift(r)), o._getFileState(e).temp.ignoreFailure || (u && (o._getFileState(e).temp.ignoreFailure = !0, 
                            qq.each(o._getXhrs(e), (function(e, t) {
                                t.abort();
                            })), o.moveInProgressToRemaining(e), d.free(e, !0)), l.onAutoRetry(e, n, p, a) || q.cleanup(e, p, a));
                        })).done((function() {
                            o.clearXhr(e, r);
                        })));
                    }
                }, d = {
                    _open: [],
                    _openChunks: {},
                    _waiting: [],
                    available: function() {
                        var e = l.maxConnections, t = 0, n = 0;
                        return qq.each(d._openChunks, (function(e, i) {
                            t++, n += i.length;
                        })), e - (d._open.length - t + n);
                    },
                    free: function(e, t) {
                        var n, r = !t, a = qq.indexOf(d._waiting, e), s = qq.indexOf(d._open, e);
                        delete d._openChunks[e], q.getProxyOrBlob(e) instanceof qq.BlobProxy && (i("Generated blob upload has ended for " + e + ", disposing generated blob."), 
                        delete o._getFileState(e).file), a >= 0 ? d._waiting.splice(a, 1) : r && s >= 0 && (d._open.splice(s, 1), 
                        (n = d._waiting.shift()) >= 0 && (d._open.push(n), q.start(n)));
                    },
                    getWaitingOrConnected: function() {
                        var e = [];
                        return qq.each(d._openChunks, (function(t, n) {
                            n && n.length && e.push(parseInt(t));
                        })), qq.each(d._open, (function(t, n) {
                            d._openChunks[n] || e.push(parseInt(n));
                        })), e = e.concat(d._waiting);
                    },
                    isUsingConnection: function(e) {
                        return qq.indexOf(d._open, e) >= 0;
                    },
                    open: function(e, t) {
                        return null == t && d._waiting.push(e), !!d.available() && (null == t ? (d._waiting.pop(), 
                        d._open.push(e)) : ((n = d._openChunks[e] || []).push(t), d._openChunks[e] = n), 
                        !0);
                        var n;
                    },
                    reset: function() {
                        d._waiting = [], d._open = [];
                    }
                }, p = function(e, t) {
                    o._getFileState(e).loaded = 0, i("Sending simple upload request for " + e), o.uploadFile(e).then((function(n, o) {
                        i("Simple upload request succeeded for " + e);
                        var r = q.normalizeResponse(n, !0), a = l.getSize(e);
                        l.onProgress(e, t, a, a), q.maybeNewUuid(e, r), q.cleanup(e, r, o);
                    }), (function(n, o) {
                        i("Simple upload request failed for " + e);
                        var r = q.normalizeResponse(n, !1);
                        l.onAutoRetry(e, t, r, o) || q.cleanup(e, r, o);
                    }));
                }, q = {
                    cancel: function(e) {
                        i("Cancelling " + e), l.paramsStore.remove(e), d.free(e);
                    },
                    cleanup: function(e, t, n) {
                        var i = l.getName(e);
                        l.onComplete(e, i, t, n), o._getFileState(e) && o._clearXhrs && o._clearXhrs(e), 
                        d.free(e);
                    },
                    getProxyOrBlob: function(e) {
                        return o.getProxy && o.getProxy(e) || o.getFile && o.getFile(e);
                    },
                    initHandler: function() {
                        var e = t ? qq[t] : qq.traditional, n = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
                        (o = new e[n + "UploadHandler"](l, {
                            getDataByUuid: l.getDataByUuid,
                            getName: l.getName,
                            getSize: l.getSize,
                            getUuid: l.getUuid,
                            log: i,
                            onCancel: l.onCancel,
                            onProgress: l.onProgress,
                            onUuidChanged: l.onUuidChanged
                        }))._removeExpiredChunkingRecords && o._removeExpiredChunkingRecords();
                    },
                    isDeferredEligibleForUpload: function(e) {
                        return l.isQueued(e);
                    },
                    maybeDefer: function(e, t) {
                        return t && !o.getFile(e) && t instanceof qq.BlobProxy ? (l.onUploadPrep(e), i("Attempting to generate a blob on-demand for " + e), 
                        t.create().then((function(t) {
                            i("Generated an on-demand blob for " + e), o.updateBlob(e, t), l.setSize(e, t.size), 
                            o.reevaluateChunking(e), q.maybeSendDeferredFiles(e);
                        }), (function(t) {
                            var o = {};
                            t && (o.error = t), i(qq.format("Failed to generate blob for ID {}.  Error message: {}.", e, t), "error"), 
                            l.onComplete(e, l.getName(e), qq.extend(o, n), null), q.maybeSendDeferredFiles(e), 
                            d.free(e);
                        })), !1) : q.maybeSendDeferredFiles(e);
                    },
                    maybeSendDeferredFiles: function(e) {
                        var t = l.getIdsInProxyGroup(e), n = !1;
                        return t && t.length ? (i("Maybe ready to upload proxy group file " + e), qq.each(t, (function(t, i) {
                            if (q.isDeferredEligibleForUpload(i) && o.getFile(i)) n = i === e, q.now(i); else if (q.isDeferredEligibleForUpload(i)) return !1;
                        }))) : (n = !0, q.now(e)), n;
                    },
                    maybeNewUuid: function(e, t) {
                        void 0 !== t.newUuid && l.onUuidChanged(e, t.newUuid);
                    },
                    normalizeResponse: function(e, t) {
                        var n = e;
                        return qq.isObject(e) || (n = {}, qq.isString(e) && !t && (n.error = e)), n.success = t, 
                        n;
                    },
                    now: function(e) {
                        var t = l.getName(e);
                        if (!a.isValid(e)) throw new qq.Error(e + " is not a valid file ID to upload!");
                        l.onUpload(e, t), s && o._shouldChunkThisFile(e) ? c.sendNext(e) : p(e, t);
                    },
                    start: function(e) {
                        var t = q.getProxyOrBlob(e);
                        return t ? q.maybeDefer(e, t) : (q.now(e), !0);
                    }
                };
                qq.extend(this, {
                    add: function(e, t) {
                        o.add.apply(this, arguments);
                    },
                    upload: function(e) {
                        return !!d.open(e) && q.start(e);
                    },
                    retry: function(e) {
                        return u && (o._getFileState(e).temp.ignoreFailure = !1), d.isUsingConnection(e) ? q.start(e) : a.upload(e);
                    },
                    cancel: function(e) {
                        var t = o.cancel(e);
                        qq.isGenericPromise(t) ? t.then((function() {
                            q.cancel(e);
                        })) : !1 !== t && q.cancel(e);
                    },
                    cancelAll: function() {
                        var e, t = d.getWaitingOrConnected();
                        if (t.length) for (e = t.length - 1; e >= 0; e--) a.cancel(t[e]);
                        d.reset();
                    },
                    getFile: function(e) {
                        return o.getProxy && o.getProxy(e) ? o.getProxy(e).referenceBlob : o.getFile && o.getFile(e);
                    },
                    isProxied: function(e) {
                        return !(!o.getProxy || !o.getProxy(e));
                    },
                    getInput: function(e) {
                        if (o.getInput) return o.getInput(e);
                    },
                    reset: function() {
                        i("Resetting upload handler"), a.cancelAll(), d.reset(), o.reset();
                    },
                    expunge: function(e) {
                        if (a.isValid(e)) return o.expunge(e);
                    },
                    isValid: function(e) {
                        return o.isValid(e);
                    },
                    getResumableFilesData: function() {
                        return o.getResumableFilesData ? o.getResumableFilesData() : [];
                    },
                    getThirdPartyFileId: function(e) {
                        if (a.isValid(e)) return o.getThirdPartyFileId(e);
                    },
                    pause: function(e) {
                        return !!(a.isResumable(e) && o.pause && a.isValid(e) && o.pause(e)) && (d.free(e), 
                        o.moveInProgressToRemaining(e), !0);
                    },
                    isResumable: function(e) {
                        return !!o.isResumable && o.isResumable(e);
                    }
                }), qq.extend(l, e), i = l.log, s = l.chunking.enabled && qq.supportedFeatures.chunking, 
                u = s && l.chunking.concurrent.enabled, (r = {})[l.preventRetryParam] = !0, n = r, 
                q.initHandler();
            }, qq.FormUploadHandler = function(e) {
                "use strict";
                var t = e.options, n = this, i = e.proxy, o = qq.getUniqueId(), r = {}, a = {}, s = {}, u = t.isCors, l = t.inputName, c = i.getUuid, d = i.log, p = new qq.WindowReceiveMessage({
                    log: d
                });
                function q(e) {
                    return e.split("_")[0];
                }
                qq.extend(this, new qq.UploadHandler(e)), qq.override(this, (function(e) {
                    return {
                        add: function(t, n) {
                            e.add(t, {
                                input: n
                            }), n.setAttribute("name", l), n.parentNode && qq(n).remove();
                        },
                        expunge: function(t) {
                            !function(e) {
                                delete a[e], u && (clearTimeout(s[e]), delete s[e], p.stopReceivingMessages(e));
                                var t = document.getElementById(n._getIframeName(e));
                                t && (t.setAttribute("src", "javascript:false;"), qq(t).remove());
                            }(t), e.expunge(t);
                        },
                        isValid: function(t) {
                            return e.isValid(t) && void 0 !== n._getFileState(t).input;
                        }
                    };
                })), qq.extend(this, {
                    getInput: function(e) {
                        return n._getFileState(e).input;
                    },
                    _attachLoadEvent: function(e, t) {
                        var i;
                        u ? function(e, t) {
                            var i = e.id, o = q(i), u = c(o);
                            r[u] = t, a[o] = qq(e).attach("load", (function() {
                                n.getInput(o) && (d("Received iframe load event for CORS upload request (iframe name " + i + ")"), 
                                s[i] = setTimeout((function() {
                                    var e = "No valid message received from loaded iframe for iframe name " + i;
                                    d(e, "error"), t({
                                        error: e
                                    });
                                }), 1e3));
                            })), p.receiveMessage(i, (function(e) {
                                d("Received the following window message: '" + e + "'"), q(i);
                                var t, o = n._parseJsonResponse(e), a = o.uuid;
                                a && r[a] ? (d("Handling response for iframe name " + i), clearTimeout(s[i]), delete s[i], 
                                n._detachLoadEvent(i), t = r[a], delete r[a], p.stopReceivingMessages(i), t(o)) : a || d("'" + e + "' does not contain a UUID - ignoring.");
                            }));
                        }(e, t) : a[e.id] = qq(e).attach("load", (function() {
                            if (d("Received response for " + e.id), e.parentNode) {
                                try {
                                    if (e.contentDocument && e.contentDocument.body && "false" == e.contentDocument.body.innerHTML) return;
                                } catch (e) {
                                    d("Error when attempting to access iframe during handling of upload response (" + e.message + ")", "error"), 
                                    i = {
                                        success: !1
                                    };
                                }
                                t(i);
                            }
                        }));
                    },
                    _createIframe: function(e) {
                        var t, i, o = n._getIframeName(e);
                        return t = o, (i = qq.toElement("<iframe src='javascript:false;' name='" + t + "' />")).setAttribute("id", t), 
                        i.style.display = "none", document.body.appendChild(i), i;
                    },
                    _detachLoadEvent: function(e) {
                        void 0 !== a[e] && (a[e](), delete a[e]);
                    },
                    _getIframeName: function(e) {
                        return e + "_" + o;
                    },
                    _initFormForUpload: function(e) {
                        var t = e.method, n = e.endpoint, i = e.params, o = e.paramsInBody, r = e.targetName, a = qq.toElement("<form method='" + t + "' enctype='multipart/form-data'></form>"), s = n;
                        return o ? qq.obj2Inputs(i, a) : s = qq.obj2url(i, n), a.setAttribute("action", s), 
                        a.setAttribute("target", r), a.style.display = "none", document.body.appendChild(a), 
                        a;
                    },
                    _parseJsonResponse: function(e) {
                        var t = {};
                        try {
                            t = qq.parseJson(e);
                        } catch (e) {
                            d("Error when attempting to parse iframe upload response (" + e.message + ")", "error");
                        }
                        return t;
                    }
                });
            }, qq.XhrUploadHandler = function(e) {
                "use strict";
                var t = this, n = e.options.namespace, i = e.proxy, o = e.options.chunking, r = e.options.resume, a = o && e.options.chunking.enabled && qq.supportedFeatures.chunking, s = r && e.options.resume.enabled && a && qq.supportedFeatures.resume, u = i.getName, l = i.getSize, c = i.getUuid, d = i.getEndpoint, p = i.getDataByUuid, q = i.onUuidChanged, h = i.onProgress, f = i.log;
                function m(e) {
                    qq.each(t._getXhrs(e), (function(n, i) {
                        var o = t._getAjaxRequester(e, n);
                        i.onreadystatechange = null, i.upload.onprogress = null, i.abort(), o && o.canceled && o.canceled(e);
                    }));
                }
                qq.extend(this, new qq.UploadHandler(e)), qq.override(this, (function(e) {
                    return {
                        add: function(n, i) {
                            if (qq.isFile(i) || qq.isBlob(i)) e.add(n, {
                                file: i
                            }); else {
                                if (!(i instanceof qq.BlobProxy)) throw new Error("Passed obj is not a File, Blob, or proxy");
                                e.add(n, {
                                    proxy: i
                                });
                            }
                            t._initTempState(n), s && t._maybePrepareForResume(n);
                        },
                        expunge: function(n) {
                            m(n), t._maybeDeletePersistedChunkData(n), t._clearXhrs(n), e.expunge(n);
                        }
                    };
                })), qq.extend(this, {
                    clearCachedChunk: function(e, n) {
                        delete t._getFileState(e).temp.cachedChunks[n];
                    },
                    clearXhr: function(e, n) {
                        var i = t._getFileState(e).temp;
                        i.xhrs && delete i.xhrs[n], i.ajaxRequesters && delete i.ajaxRequesters[n];
                    },
                    finalizeChunks: function(e, n) {
                        var i = t._getTotalChunks(e) - 1, o = t._getXhr(e, i);
                        return n ? (new qq.Promise).success(n(o), o) : (new qq.Promise).success({}, o);
                    },
                    getFile: function(e) {
                        return t.isValid(e) && t._getFileState(e).file;
                    },
                    getProxy: function(e) {
                        return t.isValid(e) && t._getFileState(e).proxy;
                    },
                    getResumableFilesData: function() {
                        var e = [];
                        return t._iterateResumeRecords((function(n, i) {
                            t.moveInProgressToRemaining(null, i.chunking.inProgress, i.chunking.remaining);
                            var o = {
                                name: i.name,
                                remaining: i.chunking.remaining,
                                size: i.size,
                                uuid: i.uuid
                            };
                            i.key && (o.key = i.key), e.push(o);
                        })), e;
                    },
                    isResumable: function(e) {
                        return !!o && t.isValid(e) && !t._getFileState(e).notResumable;
                    },
                    moveInProgressToRemaining: function(e, n, i) {
                        var o = n || t._getFileState(e).chunking.inProgress, r = i || t._getFileState(e).chunking.remaining;
                        o && (o.reverse(), qq.each(o, (function(e, t) {
                            r.unshift(t);
                        })), o.length = 0);
                    },
                    pause: function(e) {
                        if (t.isValid(e)) return f(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", e, u(e))), 
                        t._getFileState(e).paused = !0, m(e), !0;
                    },
                    reevaluateChunking: function(e) {
                        if (o && t.isValid(e)) {
                            var n, i, r = t._getFileState(e);
                            if (delete r.chunking, r.chunking = {}, (n = t._getTotalChunks(e)) > 1 || o.mandatory) {
                                for (r.chunking.enabled = !0, r.chunking.parts = n, r.chunking.remaining = [], i = 0; i < n; i++) r.chunking.remaining.push(i);
                                t._initTempState(e);
                            } else r.chunking.enabled = !1;
                        }
                    },
                    updateBlob: function(e, n) {
                        t.isValid(e) && (t._getFileState(e).file = n);
                    },
                    _clearXhrs: function(e) {
                        var n = t._getFileState(e).temp;
                        qq.each(n.ajaxRequesters, (function(e) {
                            delete n.ajaxRequesters[e];
                        })), qq.each(n.xhrs, (function(e) {
                            delete n.xhrs[e];
                        }));
                    },
                    _createXhr: function(e, n) {
                        return t._registerXhr(e, n, qq.createXhrInstance());
                    },
                    _getAjaxRequester: function(e, n) {
                        var i = null == n ? -1 : n;
                        return t._getFileState(e).temp.ajaxRequesters[i];
                    },
                    _getChunkData: function(e, n) {
                        var i = o.partSize, r = l(e), a = t.getFile(e), s = i * n, u = s + i >= r ? r : s + i, c = t._getTotalChunks(e), d = this._getFileState(e).temp.cachedChunks, p = d[n] || qq.sliceBlob(a, s, u);
                        return d[n] = p, {
                            part: n,
                            start: s,
                            end: u,
                            count: c,
                            blob: p,
                            size: u - s
                        };
                    },
                    _getChunkDataForCallback: function(e) {
                        return {
                            partIndex: e.part,
                            startByte: e.start + 1,
                            endByte: e.end,
                            totalParts: e.count
                        };
                    },
                    _getLocalStorageId: function(e) {
                        var t = u(e), i = l(e), r = o.partSize, a = d(e);
                        return qq.format("qq{}resume{}-{}-{}-{}-{}", n, "5.0", t, i, r, a);
                    },
                    _getMimeType: function(e) {
                        return t.getFile(e).type;
                    },
                    _getPersistableData: function(e) {
                        return t._getFileState(e).chunking;
                    },
                    _getTotalChunks: function(e) {
                        if (o) {
                            var t = l(e), n = o.partSize;
                            return Math.ceil(t / n);
                        }
                    },
                    _getXhr: function(e, n) {
                        var i = null == n ? -1 : n;
                        return t._getFileState(e).temp.xhrs[i];
                    },
                    _getXhrs: function(e) {
                        return t._getFileState(e).temp.xhrs;
                    },
                    _iterateResumeRecords: function(e) {
                        s && qq.each(localStorage, (function(t, i) {
                            if (0 === t.indexOf(qq.format("qq{}resume-", n))) {
                                var o = JSON.parse(i);
                                e(t, o);
                            }
                        }));
                    },
                    _initTempState: function(e) {
                        t._getFileState(e).temp = {
                            ajaxRequesters: {},
                            chunkProgress: {},
                            xhrs: {},
                            cachedChunks: {}
                        };
                    },
                    _markNotResumable: function(e) {
                        t._getFileState(e).notResumable = !0;
                    },
                    _maybeDeletePersistedChunkData: function(e) {
                        var n;
                        return !!(s && t.isResumable(e) && (n = t._getLocalStorageId(e)) && localStorage.getItem(n)) && (localStorage.removeItem(n), 
                        !0);
                    },
                    _maybePrepareForResume: function(e) {
                        var n, i, o = t._getFileState(e);
                        s && void 0 === o.key && (n = t._getLocalStorageId(e), (i = localStorage.getItem(n)) && (i = JSON.parse(i), 
                        p(i.uuid) ? t._markNotResumable(e) : (f(qq.format("Identified file with ID {} and name of {} as resumable.", e, u(e))), 
                        q(e, i.uuid), o.key = i.key, o.chunking = i.chunking, o.loaded = i.loaded, o.attemptingResume = !0, 
                        t.moveInProgressToRemaining(e))));
                    },
                    _maybePersistChunkedState: function(e) {
                        var n, i, o = t._getFileState(e);
                        s && t.isResumable(e) && (n = t._getLocalStorageId(e), i = {
                            name: u(e),
                            size: l(e),
                            uuid: c(e),
                            key: o.key,
                            chunking: o.chunking,
                            loaded: o.loaded,
                            lastUpdated: Date.now()
                        }, localStorage.setItem(n, JSON.stringify(i)));
                    },
                    _registerProgressHandler: function(e, n, i) {
                        var o = t._getXhr(e, n), r = u(e), a = {
                            simple: function(t, n) {
                                var i = l(e);
                                h(e, r, t === n ? i : t >= i ? i - 1 : t, i);
                            },
                            chunked: function(o, a) {
                                var s = t._getFileState(e).temp.chunkProgress, u = t._getFileState(e).loaded, c = o, d = a, p = l(e), q = c - (d - i), f = u;
                                s[n] = q, qq.each(s, (function(e, t) {
                                    f += t;
                                })), h(e, r, f, p);
                            }
                        };
                        o.upload.onprogress = function(e) {
                            e.lengthComputable && a[null == i ? "simple" : "chunked"](e.loaded, e.total);
                        };
                    },
                    _registerXhr: function(e, n, i, o) {
                        var r = null == n ? -1 : n, a = t._getFileState(e).temp;
                        return a.xhrs = a.xhrs || {}, a.ajaxRequesters = a.ajaxRequesters || {}, a.xhrs[r] = i, 
                        o && (a.ajaxRequesters[r] = o), i;
                    },
                    _removeExpiredChunkingRecords: function() {
                        var e = r.recordsExpireIn;
                        t._iterateResumeRecords((function(t, n) {
                            var i = new Date(n.lastUpdated);
                            i.setDate(i.getDate() + e), i.getTime() <= Date.now() && (f("Removing expired resume record with key " + t), 
                            localStorage.removeItem(t));
                        }));
                    },
                    _shouldChunkThisFile: function(e) {
                        var n = t._getFileState(e);
                        return n.chunking || t.reevaluateChunking(e), n.chunking.enabled;
                    }
                });
            }, qq.WindowReceiveMessage = function(e) {
                "use strict";
                var t = {};
                qq.extend({
                    log: function(e, t) {}
                }, e), qq.extend(this, {
                    receiveMessage: function(e, n) {
                        window.postMessage ? t[e] = qq(window).attach("message", (function(e) {
                            n(e.data);
                        })) : log("iframe message passing not supported in this browser!", "error");
                    },
                    stopReceivingMessages: function(e) {
                        if (window.postMessage) {
                            var n = t[e];
                            n && n();
                        }
                    }
                });
            }, function() {
                "use strict";
                qq.uiPublicApi = {
                    clearStoredFiles: function() {
                        this._parent.prototype.clearStoredFiles.apply(this, arguments), this._templating.clearFiles();
                    },
                    addExtraDropzone: function(e) {
                        this._dnd && this._dnd.setupExtraDropzone(e);
                    },
                    removeExtraDropzone: function(e) {
                        if (this._dnd) return this._dnd.removeDropzone(e);
                    },
                    getItemByFileId: function(e) {
                        return this._templating.getFileContainer(e);
                    },
                    reset: function() {
                        this._parent.prototype.reset.apply(this, arguments), this._templating.reset(), !this._options.button && this._templating.getButton() && (this._defaultButtonId = this._createUploadButton({
                            element: this._templating.getButton()
                        }).getButtonId()), this._dnd && (this._dnd.dispose(), this._dnd = this._setupDragAndDrop()), 
                        this._totalFilesInBatch = 0, this._filesInBatchAddedToUi = 0, this._setupClickAndEditEventHandlers();
                    },
                    setName: function(e, t) {
                        var n = this._options.formatFileName(t);
                        this._parent.prototype.setName.apply(this, arguments), this._templating.updateFilename(e, n);
                    },
                    pauseUpload: function(e) {
                        var t = this._parent.prototype.pauseUpload.apply(this, arguments);
                        return t && this._templating.uploadPaused(e), t;
                    },
                    continueUpload: function(e) {
                        var t = this._parent.prototype.continueUpload.apply(this, arguments);
                        return t && this._templating.uploadContinued(e), t;
                    },
                    getId: function(e) {
                        return this._templating.getFileId(e);
                    },
                    getDropTarget: function(e) {
                        return this.getFile(e).qqDropTarget;
                    }
                }, qq.uiPrivateApi = {
                    _getButton: function(e) {
                        var t = this._parent.prototype._getButton.apply(this, arguments);
                        return t || e === this._defaultButtonId && (t = this._templating.getButton()), t;
                    },
                    _removeFileItem: function(e) {
                        this._templating.removeFile(e);
                    },
                    _setupClickAndEditEventHandlers: function() {
                        this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent(), 
                        this._focusinEventSupported = !qq.firefox(), this._isEditFilenameEnabled() && (this._filenameClickHandler = this._bindFilenameClickEvent(), 
                        this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent(), this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent());
                    },
                    _setupDragAndDrop: function() {
                        var e = this, t = this._options.dragAndDrop.extraDropzones, n = this._templating, i = n.getDropZone();
                        return i && t.push(i), new qq.DragAndDrop({
                            dropZoneElements: t,
                            allowMultipleItems: this._options.multiple,
                            classes: {
                                dropActive: this._options.classes.dropActive
                            },
                            callbacks: {
                                processingDroppedFiles: function() {
                                    n.showDropProcessing();
                                },
                                processingDroppedFilesComplete: function(t, i) {
                                    n.hideDropProcessing(), qq.each(t, (function(e, t) {
                                        t.qqDropTarget = i;
                                    })), t.length && e.addFiles(t, null, null);
                                },
                                dropError: function(t, n) {
                                    e._itemError(t, n);
                                },
                                dropLog: function(t, n) {
                                    e.log(t, n);
                                }
                            }
                        });
                    },
                    _bindFileButtonsClickEvent: function() {
                        var e = this;
                        return new qq.FileButtonsClickHandler({
                            templating: this._templating,
                            log: function(t, n) {
                                e.log(t, n);
                            },
                            onDeleteFile: function(t) {
                                e.deleteFile(t);
                            },
                            onCancel: function(t) {
                                e.cancel(t);
                            },
                            onRetry: function(t) {
                                qq(e._templating.getFileContainer(t)).removeClass(e._classes.retryable), e._templating.hideRetry(t), 
                                e.retry(t);
                            },
                            onPause: function(t) {
                                e.pauseUpload(t);
                            },
                            onContinue: function(t) {
                                e.continueUpload(t);
                            },
                            onGetName: function(t) {
                                return e.getName(t);
                            }
                        });
                    },
                    _isEditFilenameEnabled: function() {
                        return this._templating.isEditFilenamePossible() && !this._options.autoUpload && qq.FilenameClickHandler && qq.FilenameInputFocusHandler && qq.FilenameInputFocusHandler;
                    },
                    _filenameEditHandler: function() {
                        var e = this, t = this._templating;
                        return {
                            templating: t,
                            log: function(t, n) {
                                e.log(t, n);
                            },
                            onGetUploadStatus: function(t) {
                                return e.getUploads({
                                    id: t
                                }).status;
                            },
                            onGetName: function(t) {
                                return e.getName(t);
                            },
                            onSetName: function(t, n) {
                                e.setName(t, n);
                            },
                            onEditingStatusChange: function(e, n) {
                                var i = qq(t.getEditInput(e)), o = qq(t.getFileContainer(e));
                                n ? (i.addClass("qq-editing"), t.hideFilename(e), t.hideEditIcon(e)) : (i.removeClass("qq-editing"), 
                                t.showFilename(e), t.showEditIcon(e)), o.addClass("qq-temp").removeClass("qq-temp");
                            }
                        };
                    },
                    _onUploadStatusChange: function(e, t, n) {
                        this._parent.prototype._onUploadStatusChange.apply(this, arguments), this._isEditFilenameEnabled() && this._templating.getFileContainer(e) && n !== qq.status.SUBMITTED && (this._templating.markFilenameEditable(e), 
                        this._templating.hideEditIcon(e));
                    },
                    _bindFilenameInputFocusInEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameInputFocusInHandler(e);
                    },
                    _bindFilenameInputFocusEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameInputFocusHandler(e);
                    },
                    _bindFilenameClickEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameClickHandler(e);
                    },
                    _storeForLater: function(e) {
                        this._parent.prototype._storeForLater.apply(this, arguments), this._templating.hideSpinner(e);
                    },
                    _onAllComplete: function(e, t) {
                        this._parent.prototype._onAllComplete.apply(this, arguments), this._templating.resetTotalProgress();
                    },
                    _onSubmit: function(e, t) {
                        var n = this.getFile(e);
                        n && n.qqPath && this._options.dragAndDrop.reportDirectoryPaths && this._paramsStore.addReadOnly(e, {
                            qqpath: n.qqPath
                        }), this._parent.prototype._onSubmit.apply(this, arguments), this._addToList(e, t);
                    },
                    _onSubmitted: function(e) {
                        this._isEditFilenameEnabled() && (this._templating.markFilenameEditable(e), this._templating.showEditIcon(e), 
                        this._focusinEventSupported || this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(e)));
                    },
                    _onProgress: function(e, t, n, i) {
                        this._parent.prototype._onProgress.apply(this, arguments), this._templating.updateProgress(e, n, i), 
                        100 === Math.round(n / i * 100) ? (this._templating.hideCancel(e), this._templating.hidePause(e), 
                        this._templating.hideProgress(e), this._templating.setStatusText(e, this._options.text.waitingForResponse), 
                        this._displayFileSize(e)) : this._displayFileSize(e, n, i);
                    },
                    _onTotalProgress: function(e, t) {
                        this._parent.prototype._onTotalProgress.apply(this, arguments), this._templating.updateTotalProgress(e, t);
                    },
                    _onComplete: function(e, t, n, i) {
                        var o = this._parent.prototype._onComplete.apply(this, arguments), r = this._templating, a = r.getFileContainer(e), s = this;
                        function u(t) {
                            a && (r.setStatusText(e), qq(a).removeClass(s._classes.retrying), r.hideProgress(e), 
                            s._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading || r.hideCancel(e), 
                            r.hideSpinner(e), t.success ? s._markFileAsSuccessful(e) : (qq(a).addClass(s._classes.fail), 
                            r.isRetryPossible() && !s._preventRetries[e] && (qq(a).addClass(s._classes.retryable), 
                            r.showRetry(e)), s._controlFailureTextDisplay(e, t)));
                        }
                        return o instanceof qq.Promise ? o.done((function(e) {
                            u(e);
                        })) : u(n), o;
                    },
                    _markFileAsSuccessful: function(e) {
                        var t = this._templating;
                        this._isDeletePossible() && t.showDeleteButton(e), qq(t.getFileContainer(e)).addClass(this._classes.success), 
                        this._maybeUpdateThumbnail(e);
                    },
                    _onUploadPrep: function(e) {
                        this._parent.prototype._onUploadPrep.apply(this, arguments), this._templating.showSpinner(e);
                    },
                    _onUpload: function(e, t) {
                        var n = this._parent.prototype._onUpload.apply(this, arguments);
                        return this._templating.showSpinner(e), n;
                    },
                    _onUploadChunk: function(e, t) {
                        this._parent.prototype._onUploadChunk.apply(this, arguments), t.partIndex > 0 && this._handler.isResumable(e) && this._templating.allowPause(e);
                    },
                    _onCancel: function(e, t) {
                        this._parent.prototype._onCancel.apply(this, arguments), this._removeFileItem(e), 
                        0 === this._getNotFinished() && this._templating.resetTotalProgress();
                    },
                    _onBeforeAutoRetry: function(e) {
                        var t, n, i;
                        this._parent.prototype._onBeforeAutoRetry.apply(this, arguments), this._showCancelLink(e), 
                        this._options.retry.showAutoRetryNote && (t = this._autoRetries[e], n = this._options.retry.maxAutoAttempts, 
                        i = (i = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, t)).replace(/\{maxAuto\}/g, n), 
                        this._templating.setStatusText(e, i), qq(this._templating.getFileContainer(e)).addClass(this._classes.retrying));
                    },
                    _onBeforeManualRetry: function(e) {
                        return this._parent.prototype._onBeforeManualRetry.apply(this, arguments) ? (this._templating.resetProgress(e), 
                        qq(this._templating.getFileContainer(e)).removeClass(this._classes.fail), this._templating.setStatusText(e), 
                        this._templating.showSpinner(e), this._showCancelLink(e), !0) : (qq(this._templating.getFileContainer(e)).addClass(this._classes.retryable), 
                        this._templating.showRetry(e), !1);
                    },
                    _onSubmitDelete: function(e) {
                        var t = qq.bind(this._onSubmitDeleteSuccess, this);
                        this._parent.prototype._onSubmitDelete.call(this, e, t);
                    },
                    _onSubmitDeleteSuccess: function(e, t, n) {
                        this._options.deleteFile.forceConfirm ? this._showDeleteConfirm.apply(this, arguments) : this._sendDeleteRequest.apply(this, arguments);
                    },
                    _onDeleteComplete: function(e, t, n) {
                        this._parent.prototype._onDeleteComplete.apply(this, arguments), this._templating.hideSpinner(e), 
                        n ? (this._templating.setStatusText(e, this._options.deleteFile.deletingFailedText), 
                        this._templating.showDeleteButton(e)) : this._removeFileItem(e);
                    },
                    _sendDeleteRequest: function(e, t, n) {
                        this._templating.hideDeleteButton(e), this._templating.showSpinner(e), this._templating.setStatusText(e, this._options.deleteFile.deletingStatusText), 
                        this._deleteHandler.sendDelete.apply(this, arguments);
                    },
                    _showDeleteConfirm: function(e, t, n) {
                        var i, o = this.getName(e), r = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, o), a = (t = this.getUuid(e), 
                        arguments), s = this;
                        i = this._options.showConfirm(r), qq.isGenericPromise(i) ? i.then((function() {
                            s._sendDeleteRequest.apply(s, a);
                        })) : !1 !== i && s._sendDeleteRequest.apply(s, a);
                    },
                    _addToList: function(e, t, n) {
                        var i, o, r = 0;
                        this._handler.isProxied(e) && this._options.scaling.hideScaled || (this._options.display.prependFiles && (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0 && (r = this._filesInBatchAddedToUi - 1), 
                        i = {
                            index: r
                        }), n || (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading && this._templating.disableCancel(), 
                        this._options.multiple || (o = this.getUploads({
                            id: e
                        }), this._handledProxyGroup = this._handledProxyGroup || o.proxyGroupId, o.proxyGroupId === this._handledProxyGroup && o.proxyGroupId || (this._handler.cancelAll(), 
                        this._clearList(), this._handledProxyGroup = null))), this._templating.addFile(e, this._options.formatFileName(t), i), 
                        n ? this._thumbnailUrls[e] && this._templating.updateThumbnail(e, this._thumbnailUrls[e], !0) : this._templating.generatePreview(e, this.getFile(e)), 
                        this._filesInBatchAddedToUi += 1, (n || this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading) && this._displayFileSize(e));
                    },
                    _clearList: function() {
                        this._templating.clearFiles(), this.clearStoredFiles();
                    },
                    _displayFileSize: function(e, t, n) {
                        var i = this.getSize(e), o = this._formatSize(i);
                        i >= 0 && (void 0 !== t && void 0 !== n && (o = this._formatProgress(t, n)), this._templating.updateSize(e, o));
                    },
                    _formatProgress: function(e, t) {
                        var n = this._options.text.formatProgress;
                        function i(e, t) {
                            n = n.replace(e, t);
                        }
                        return i("{percent}", Math.round(e / t * 100)), i("{total_size}", this._formatSize(t)), 
                        n;
                    },
                    _controlFailureTextDisplay: function(e, t) {
                        var n, i, o, r, a;
                        n = this._options.failedUploadTextDisplay.mode, i = this._options.failedUploadTextDisplay.maxChars, 
                        o = this._options.failedUploadTextDisplay.responseProperty, "custom" === n ? ((r = t[o]) ? r.length > i && (a = r.substring(0, i) + "...") : r = this._options.text.failUpload, 
                        this._templating.setStatusText(e, a || r), this._options.failedUploadTextDisplay.enableTooltip && this._showTooltip(e, r)) : "default" === n ? this._templating.setStatusText(e, this._options.text.failUpload) : "none" !== n && this.log("failedUploadTextDisplay.mode value of '" + n + "' is not valid", "warn");
                    },
                    _showTooltip: function(e, t) {
                        this._templating.getFileContainer(e).title = t;
                    },
                    _showCancelLink: function(e) {
                        this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading || this._templating.showCancel(e);
                    },
                    _itemError: function(e, t, n) {
                        var i = this._parent.prototype._itemError.apply(this, arguments);
                        this._options.showMessage(i);
                    },
                    _batchError: function(e) {
                        this._parent.prototype._batchError.apply(this, arguments), this._options.showMessage(e);
                    },
                    _setupPastePrompt: function() {
                        var e = this;
                        this._options.callbacks.onPasteReceived = function() {
                            var t = e._options.paste.namePromptMessage, n = e._options.paste.defaultName;
                            return e._options.showPrompt(t, n);
                        };
                    },
                    _fileOrBlobRejected: function(e, t) {
                        this._totalFilesInBatch -= 1, this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
                    },
                    _prepareItemsForUpload: function(e, t, n) {
                        this._totalFilesInBatch = e.length, this._filesInBatchAddedToUi = 0, this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
                    },
                    _maybeUpdateThumbnail: function(e) {
                        var t = this._thumbnailUrls[e];
                        this._templating.updateThumbnail(e, t);
                    },
                    _addCannedFile: function(e) {
                        var t = this._parent.prototype._addCannedFile.apply(this, arguments);
                        return this._addToList(t, this.getName(t), !0), this._templating.hideSpinner(t), 
                        this._templating.hideCancel(t), this._markFileAsSuccessful(t), t;
                    },
                    _setSize: function(e, t) {
                        this._parent.prototype._setSize.apply(this, arguments), this._templating.updateSize(e, this._formatSize(t));
                    }
                };
            }(), qq.FineUploader = function(e, t) {
                "use strict";
                this._parent = t ? qq[t].FineUploaderBasic : qq.FineUploaderBasic, this._parent.apply(this, arguments), 
                qq.extend(this._options, {
                    element: null,
                    button: null,
                    listElement: null,
                    dragAndDrop: {
                        extraDropzones: [],
                        reportDirectoryPaths: !1
                    },
                    text: {
                        formatProgress: "{percent}% of {total_size}",
                        failUpload: "Upload failed",
                        waitingForResponse: "Processing...",
                        paused: "Paused"
                    },
                    template: "qq-template",
                    classes: {
                        retrying: "qq-upload-retrying",
                        retryable: "qq-upload-retryable",
                        success: "qq-upload-success",
                        fail: "qq-upload-fail",
                        editable: "qq-editable",
                        hide: "qq-hide",
                        dropActive: "qq-upload-drop-area-active"
                    },
                    failedUploadTextDisplay: {
                        mode: "default",
                        maxChars: 50,
                        responseProperty: "error",
                        enableTooltip: !0
                    },
                    messages: {
                        tooManyFilesError: "You may only drop one file",
                        unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
                    },
                    retry: {
                        showAutoRetryNote: !0,
                        autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
                    },
                    deleteFile: {
                        forceConfirm: !1,
                        confirmMessage: "Are you sure you want to delete {filename}?",
                        deletingStatusText: "Deleting...",
                        deletingFailedText: "Delete failed"
                    },
                    display: {
                        fileSizeOnSubmit: !1,
                        prependFiles: !1
                    },
                    paste: {
                        promptForName: !1,
                        namePromptMessage: "Please name this image"
                    },
                    thumbnails: {
                        maxCount: 0,
                        placeholders: {
                            waitUntilResponse: !1,
                            notAvailablePath: null,
                            waitingPath: null
                        },
                        timeBetweenThumbs: 750
                    },
                    scaling: {
                        hideScaled: !1
                    },
                    showMessage: function(e) {
                        setTimeout((function() {
                            window.alert(e);
                        }), 0);
                    },
                    showConfirm: function(e) {
                        return window.confirm(e);
                    },
                    showPrompt: function(e, t) {
                        return window.prompt(e, t);
                    }
                }, !0), qq.extend(this._options, e, !0), this._templating = new qq.Templating({
                    log: qq.bind(this.log, this),
                    templateIdOrEl: this._options.template,
                    containerEl: this._options.element,
                    fileContainerEl: this._options.listElement,
                    button: this._options.button,
                    imageGenerator: this._imageGenerator,
                    classes: {
                        hide: this._options.classes.hide,
                        editable: this._options.classes.editable
                    },
                    limits: {
                        maxThumbs: this._options.thumbnails.maxCount,
                        timeBetweenThumbs: this._options.thumbnails.timeBetweenThumbs
                    },
                    placeholders: {
                        waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
                        thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
                        waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
                    },
                    text: this._options.text
                }), this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari() ? this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari) : !qq.supportedFeatures.uploading || this._options.cors.expected && !qq.supportedFeatures.uploadCors ? this._templating.renderFailure(this._options.messages.unsupportedBrowser) : (this._wrapCallbacks(), 
                this._templating.render(), this._classes = this._options.classes, !this._options.button && this._templating.getButton() && (this._defaultButtonId = this._createUploadButton({
                    element: this._templating.getButton()
                }).getButtonId()), this._setupClickAndEditEventHandlers(), qq.DragAndDrop && qq.supportedFeatures.fileDrop && (this._dnd = this._setupDragAndDrop()), 
                this._options.paste.targetElement && this._options.paste.promptForName && (qq.PasteSupport ? this._setupPastePrompt() : this.log("Paste support module not found.", "error")), 
                this._totalFilesInBatch = 0, this._filesInBatchAddedToUi = 0);
            }, qq.extend(qq.FineUploader.prototype, qq.basePublicApi), qq.extend(qq.FineUploader.prototype, qq.basePrivateApi), 
            qq.extend(qq.FineUploader.prototype, qq.uiPublicApi), qq.extend(qq.FineUploader.prototype, qq.uiPrivateApi), 
            qq.Templating = function(e) {
                "use strict";
                var t, n, i, o, r, a, s, u, l = "qq-file-id", c = "qq-file-id-", d = !1, p = 0, q = !1, h = [], f = -1, m = {
                    log: null,
                    limits: {
                        maxThumbs: 0,
                        timeBetweenThumbs: 750
                    },
                    templateIdOrEl: "qq-template",
                    containerEl: null,
                    fileContainerEl: null,
                    button: null,
                    imageGenerator: null,
                    classes: {
                        hide: "qq-hide",
                        editable: "qq-editable"
                    },
                    placeholders: {
                        waitUntilUpdate: !1,
                        thumbnailNotAvailable: null,
                        waitingForThumbnail: null
                    },
                    text: {
                        paused: "Paused"
                    }
                }, g = "qq-upload-button-selector", _ = "qq-upload-drop-area-selector", v = "qq-upload-list-selector", b = "qq-progress-bar-container-selector", S = "qq-progress-bar-selector", y = "qq-total-progress-bar-container-selector", x = "qq-total-progress-bar-selector", w = "qq-upload-file-selector", C = "qq-upload-spinner-selector", E = "qq-upload-size-selector", P = "qq-upload-cancel-selector", F = "qq-upload-pause-selector", T = "qq-upload-continue-selector", I = "qq-upload-delete-selector", U = "qq-upload-retry-selector", A = "qq-upload-status-text-selector", D = "qq-edit-filename-selector", R = "qq-edit-filename-icon-selector", k = "qq-drop-processing-selector", B = "qq-thumbnail-selector", N = {}, O = new qq.Promise, L = new qq.Promise, H = function(e) {
                    var t = new qq.Promise;
                    return L.then((function(n) {
                        ie(n, e), e.src ? t.success() : (e.src = n.src, e.onload = function() {
                            e.onload = null, ue(e), t.success();
                        });
                    }), (function() {
                        ne(e), t.success();
                    })), t;
                }, M = function() {
                    if (h.length) {
                        q = !0;
                        var e = h.shift();
                        e.update ? ae(e) : re(e);
                    } else q = !1;
                }, z = function(e) {
                    return ee(V(e), P);
                }, j = function(e) {
                    return ee(V(e), T);
                }, G = function(e) {
                    return ee(V(e), I);
                }, X = function() {
                    return ee(r, k);
                }, W = function(e) {
                    return ee(V(e), R);
                }, V = function(e) {
                    return qq(a).getByClass(c + e)[0];
                }, K = function(e) {
                    return ee(V(e), w);
                }, Y = function(e) {
                    return ee(V(e), F);
                }, Q = function(e) {
                    return null == e ? ee(r, y) || ee(r, x) : ee(V(e), b) || ee(V(e), S);
                }, J = function(e) {
                    return ee(V(e), U);
                }, Z = function(e) {
                    return ee(V(e), E);
                }, $ = function(e) {
                    return ee(V(e), C);
                }, ee = function(e, t) {
                    return e && qq(e).getByClass(t)[0];
                }, te = function(e) {
                    return s && ee(V(e), B);
                }, ne = function(e) {
                    e && qq(e).addClass(m.classes.hide);
                }, ie = function(e, t) {
                    var n = e.style.maxWidth, i = e.style.maxHeight;
                    i && n && !t.style.maxWidth && !t.style.maxHeight && qq(t).css({
                        maxWidth: n,
                        maxHeight: i
                    });
                }, oe = function(e, t) {
                    var n = N[e] || (new qq.Promise).failure(), i = new qq.Promise;
                    return O.then((function(e) {
                        n.then((function() {
                            i.success();
                        }), (function() {
                            ie(e, t), t.onload = function() {
                                t.onload = null, i.success();
                            }, t.src = e.src, ue(t);
                        }));
                    })), i;
                }, re = function(e) {
                    var n = e.id, i = e.optFileOrBlob, o = i && i.qqThumbnailId, r = te(n), a = {
                        maxSize: f,
                        scale: !0,
                        orient: !0
                    };
                    qq.supportedFeatures.imagePreviews ? r && (m.limits.maxThumbs && m.limits.maxThumbs <= p ? (oe(n, r), 
                    M()) : H(r).done((function() {
                        N[n] = new qq.Promise, N[n].done((function() {
                            setTimeout(M, m.limits.timeBetweenThumbs);
                        })), null != o ? le(n, o) : function(e, n, i) {
                            var o = te(e);
                            t("Generating new thumbnail for " + e), n.qqThumbnailId = e, m.imageGenerator.generate(n, o, i).then((function() {
                                p++, ue(o), N[e].success();
                            }), (function() {
                                N[e].failure(), m.placeholders.waitUntilUpdate || oe(e, o);
                            }));
                        }(n, i, a);
                    }))) : r && (H(r), M());
                }, ae = function(e) {
                    var t = e.id, n = e.thumbnailUrl, i = e.showWaitingImg, o = te(t), r = {
                        maxSize: f,
                        scale: u
                    };
                    if (o) if (n) {
                        if (!(m.limits.maxThumbs && m.limits.maxThumbs <= p)) return i && H(o), m.imageGenerator.generate(n, o, r).then((function() {
                            ue(o), p++, setTimeout(M, m.limits.timeBetweenThumbs);
                        }), (function() {
                            oe(t, o), setTimeout(M, m.limits.timeBetweenThumbs);
                        }));
                        oe(t, o), M();
                    } else oe(t, o), M();
                }, se = function(e, t) {
                    var n = Q(e), i = null == e ? x : S;
                    n && !qq(n).hasClass(i) && (n = qq(n).getByClass(i)[0]), n && qq(n).css({
                        width: t + "%"
                    });
                }, ue = function(e) {
                    e && qq(e).removeClass(m.classes.hide);
                }, le = function(e, n) {
                    var i = te(e), o = te(n);
                    t(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", e, n, n)), 
                    N[n].then((function() {
                        p++, N[e].success(), t(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", n, e)), 
                        i.src = o.src, ue(i);
                    }), (function() {
                        N[e].failure(), m.placeholders.waitUntilUpdate || oe(e, i);
                    }));
                };
                qq.extend(m, e), t = m.log, qq.supportedFeatures.imagePreviews || (m.limits.timeBetweenThumbs = 0, 
                m.limits.maxThumbs = 0), r = m.containerEl, s = void 0 !== m.imageGenerator, o = function() {
                    var e, o, r, a, l, c, d, p, q;
                    if (t("Parsing template"), null == m.templateIdOrEl) throw new Error("You MUST specify either a template element or ID!");
                    if (qq.isString(m.templateIdOrEl)) {
                        if (null === (e = document.getElementById(m.templateIdOrEl))) throw new Error(qq.format("Cannot find template script at ID '{}'!", m.templateIdOrEl));
                        o = e.innerHTML;
                    } else {
                        if (void 0 === m.templateIdOrEl.innerHTML) throw new Error("You have specified an invalid value for the template option!  It must be an ID or an Element.");
                        o = m.templateIdOrEl.innerHTML;
                    }
                    if (o = qq.trimStr(o), (a = document.createElement("div")).appendChild(qq.toElement(o)), 
                    m.button && (c = qq(a).getByClass(g)[0]) && qq(c).remove(), qq.DragAndDrop && qq.supportedFeatures.fileDrop || (q = qq(a).getByClass(k)[0]) && qq(q).remove(), 
                    (d = qq(a).getByClass(_)[0]) && !qq.DragAndDrop && (t("DnD module unavailable.", "info"), 
                    qq(d).remove()), d && !qq.supportedFeatures.fileDrop && qq(d).hasAttribute("qq-hide-dropzone") && qq(d).css({
                        display: "none"
                    }), p = qq(a).getByClass(B)[0], s ? p && (f = (f = parseInt(p.getAttribute("qq-max-size"))) > 0 ? f : null, 
                    u = qq(p).hasAttribute("qq-server-scale")) : p && qq(p).remove(), s = s && p, n = qq(a).getByClass(D).length > 0, 
                    i = qq(a).getByClass(U).length > 0, null == (r = qq(a).getByClass(v)[0])) throw new Error("Could not find the file list container in the template!");
                    return l = r.innerHTML, r.innerHTML = "", t("Template parsing complete"), {
                        template: qq.trimStr(a.innerHTML),
                        fileTemplate: qq.trimStr(l)
                    };
                }(), function() {
                    var e = m.placeholders.thumbnailNotAvailable, n = m.placeholders.waitingForThumbnail, i = {
                        maxSize: f,
                        scale: u
                    };
                    s && (e ? m.imageGenerator.generate(e, new Image, i).then((function(e) {
                        O.success(e);
                    }), (function() {
                        O.failure(), t("Problem loading 'not available' placeholder image at " + e, "error");
                    })) : O.failure(), n ? m.imageGenerator.generate(n, new Image, i).then((function(e) {
                        L.success(e);
                    }), (function() {
                        L.failure(), t("Problem loading 'waiting for thumbnail' placeholder image at " + n, "error");
                    })) : L.failure());
                }(), qq.extend(this, {
                    render: function() {
                        t("Rendering template in DOM."), p = 0, r.innerHTML = o.template, ne(X()), this.hideTotalProgress(), 
                        a = m.fileContainerEl || ee(r, v), t("Template rendering complete");
                    },
                    renderFailure: function(e) {
                        var t = qq.toElement(e);
                        r.innerHTML = "", r.appendChild(t);
                    },
                    reset: function() {
                        this.render();
                    },
                    clearFiles: function() {
                        a.innerHTML = "";
                    },
                    disableCancel: function() {
                        d = !0;
                    },
                    addFile: function(e, t, n) {
                        var i, r, s, u, p, q = qq.toElement(o.fileTemplate), h = ee(q, w);
                        qq(q).addClass(c + e), h && qq(h).setText(t), q.setAttribute(l, e), n ? (r = q, 
                        s = n.index, p = (u = a).firstChild, s > 0 && (p = qq(u).children()[s].nextSibling), 
                        u.insertBefore(r, p)) : a.appendChild(q), ne(Q(e)), ne(Z(e)), ne(G(e)), ne(J(e)), 
                        ne(Y(e)), ne(j(e)), d && this.hideCancel(e), (i = te(e)) && !i.src && L.then((function(e) {
                            i.src = e.src, e.style.maxHeight && e.style.maxWidth && qq(i).css({
                                maxHeight: e.style.maxHeight,
                                maxWidth: e.style.maxWidth
                            }), ue(i);
                        }));
                    },
                    removeFile: function(e) {
                        qq(V(e)).remove();
                    },
                    getFileId: function(e) {
                        var t = e;
                        if (t) {
                            for (;null == t.getAttribute(l); ) t = t.parentNode;
                            return parseInt(t.getAttribute(l));
                        }
                    },
                    getFileList: function() {
                        return a;
                    },
                    markFilenameEditable: function(e) {
                        var t = K(e);
                        t && qq(t).addClass(m.classes.editable);
                    },
                    updateFilename: function(e, t) {
                        var n = K(e);
                        n && qq(n).setText(t);
                    },
                    hideFilename: function(e) {
                        ne(K(e));
                    },
                    showFilename: function(e) {
                        ue(K(e));
                    },
                    isFileName: function(e) {
                        return qq(e).hasClass(w);
                    },
                    getButton: function() {
                        return m.button || ee(r, g);
                    },
                    hideDropProcessing: function() {
                        ne(X());
                    },
                    showDropProcessing: function() {
                        ue(X());
                    },
                    getDropZone: function() {
                        return ee(r, _);
                    },
                    isEditFilenamePossible: function() {
                        return n;
                    },
                    hideRetry: function(e) {
                        ne(J(e));
                    },
                    isRetryPossible: function() {
                        return i;
                    },
                    showRetry: function(e) {
                        ue(J(e));
                    },
                    getFileContainer: function(e) {
                        return V(e);
                    },
                    showEditIcon: function(e) {
                        var t = W(e);
                        t && qq(t).addClass(m.classes.editable);
                    },
                    hideEditIcon: function(e) {
                        var t = W(e);
                        t && qq(t).removeClass(m.classes.editable);
                    },
                    isEditIcon: function(e) {
                        return qq(e).hasClass(R);
                    },
                    getEditInput: function(e) {
                        return ee(V(e), D);
                    },
                    isEditInput: function(e) {
                        return qq(e).hasClass(D);
                    },
                    updateProgress: function(e, t, n) {
                        var i, o = Q(e);
                        o && n > 0 && (100 === (i = Math.round(t / n * 100)) ? ne(o) : ue(o), se(e, i));
                    },
                    updateTotalProgress: function(e, t) {
                        this.updateProgress(null, e, t);
                    },
                    hideProgress: function(e) {
                        var t = Q(e);
                        t && ne(t);
                    },
                    hideTotalProgress: function() {
                        this.hideProgress();
                    },
                    resetProgress: function(e) {
                        se(e, 0), this.hideTotalProgress(e);
                    },
                    resetTotalProgress: function() {
                        this.resetProgress();
                    },
                    showCancel: function(e) {
                        if (!d) {
                            var t = z(e);
                            t && qq(t).removeClass(m.classes.hide);
                        }
                    },
                    hideCancel: function(e) {
                        ne(z(e));
                    },
                    isCancel: function(e) {
                        return qq(e).hasClass(P);
                    },
                    allowPause: function(e) {
                        ue(Y(e)), ne(j(e));
                    },
                    uploadPaused: function(e) {
                        this.setStatusText(e, m.text.paused), this.allowContinueButton(e), ne($(e));
                    },
                    hidePause: function(e) {
                        ne(Y(e));
                    },
                    isPause: function(e) {
                        return qq(e).hasClass(F);
                    },
                    isContinueButton: function(e) {
                        return qq(e).hasClass(T);
                    },
                    allowContinueButton: function(e) {
                        ue(j(e)), ne(Y(e));
                    },
                    uploadContinued: function(e) {
                        this.setStatusText(e, ""), this.allowPause(e), ue($(e));
                    },
                    showDeleteButton: function(e) {
                        ue(G(e));
                    },
                    hideDeleteButton: function(e) {
                        ne(G(e));
                    },
                    isDeleteButton: function(e) {
                        return qq(e).hasClass(I);
                    },
                    isRetry: function(e) {
                        return qq(e).hasClass(U);
                    },
                    updateSize: function(e, t) {
                        var n = Z(e);
                        n && (ue(n), qq(n).setText(t));
                    },
                    setStatusText: function(e, t) {
                        var n = ee(V(e), A);
                        n && (null == t ? qq(n).clearText() : qq(n).setText(t));
                    },
                    hideSpinner: function(e) {
                        ne($(e));
                    },
                    showSpinner: function(e) {
                        ue($(e));
                    },
                    generatePreview: function(e, t) {
                        h.push({
                            id: e,
                            optFileOrBlob: t
                        }), !q && M();
                    },
                    updateThumbnail: function(e, t, n) {
                        h.push({
                            update: !0,
                            id: e,
                            thumbnailUrl: t,
                            showWaitingImg: n
                        }), !q && M();
                    }
                });
            }, qq.traditional = qq.traditional || {}, qq.traditional.FormUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.getName, o = t.getUuid, r = t.log;
                this.uploadFile = function(t) {
                    var a, s = n.getInput(t), u = n._createIframe(t), l = new qq.Promise;
                    return (a = function(t, r) {
                        var a = e.paramsStore.get(t), s = e.demoMode ? "GET" : "POST", u = e.endpointStore.get(t), l = i(t);
                        return a[e.uuidName] = o(t), a[e.filenameParam] = l, n._initFormForUpload({
                            method: s,
                            endpoint: u,
                            params: a,
                            paramsInBody: e.paramsInBody,
                            targetName: r.name
                        });
                    }(t, u)).appendChild(s), n._attachLoadEvent(u, (function(i) {
                        r("iframe loaded");
                        var o = i || function(e, t) {
                            var i, o, a;
                            try {
                                a = (o = t.contentDocument || t.contentWindow.document).body.innerHTML, r("converting iframe's innerHTML to JSON"), 
                                r("innerHTML = " + a), a && a.match(/^<pre/i) && (a = o.body.firstChild.firstChild.nodeValue), 
                                i = n._parseJsonResponse(a);
                            } catch (e) {
                                r("Error when attempting to parse form upload response (" + e.message + ")", "error"), 
                                i = {
                                    success: !1
                                };
                            }
                            return i;
                        }(0, u);
                        n._detachLoadEvent(t), e.cors.expected || qq(u).remove(), o.success ? l.success(o) : l.failure(o);
                    })), r("Sending upload request for " + t), a.submit(), qq(a).remove(), l;
                }, qq.extend(this, new qq.FormUploadHandler({
                    options: {
                        isCors: e.cors.expected,
                        inputName: e.inputName
                    },
                    proxy: {
                        onCancel: e.onCancel,
                        getName: i,
                        getUuid: o,
                        log: r
                    }
                }));
            }, qq.traditional = qq.traditional || {}, qq.traditional.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.getName, o = t.getSize, r = t.getUuid, a = t.log, s = e.forceMultipart || e.paramsInBody, u = new qq.traditional.AllChunksDoneAjaxRequester({
                    cors: e.cors,
                    endpoint: e.chunking.success.endpoint,
                    log: a
                }), l = function(e, t) {
                    var n = new qq.Promise;
                    return t.onreadystatechange = function() {
                        if (4 === t.readyState) {
                            var i = d(e, t);
                            i.success ? n.success(i.response, t) : n.failure(i.response, t);
                        }
                    }, n;
                }, c = function(e, t) {
                    return e.status < 200 || e.status > 299 || !1 === t.success || !Object.keys(t).length || t.reset;
                }, d = function(e, t) {
                    var n;
                    return a("xhr - server response received for " + e), a("responseText = " + t.responseText), 
                    n = p(!0, t), {
                        success: !c(t, n),
                        response: n
                    };
                }, p = function(e, t) {
                    var n = {};
                    try {
                        a(qq.format("Received response status {} with body: {}", t.status, t.responseText)), 
                        n = qq.parseJson(t.responseText);
                    } catch (t) {
                        e && a("Error when attempting to parse xhr response text (" + t.message + ")", "error");
                    }
                    return n;
                }, q = function(t) {
                    var a = new qq.Promise;
                    return u.complete(t, n._createXhr(t), function(t) {
                        var a = e.paramsStore.get(t), s = i(t), u = o(t);
                        return a[e.uuidName] = r(t), a[e.filenameParam] = s, a[e.totalFileSizeName] = u, 
                        a[e.chunking.paramNames.totalParts] = n._getTotalChunks(t), a;
                    }(t), e.customHeaders.get(t)).then((function(e) {
                        a.success(p(!1, e), e);
                    }), (function(e) {
                        a.failure(p(!1, e), e);
                    })), a;
                }, h = function(t, n, a, u) {
                    var l = new FormData, c = e.paramsStore.method || (e.demoMode ? "GET" : "POST"), d = e.endpointStore.get(u), p = i(u), q = o(u);
                    return t[e.uuidName] = r(u), t[e.filenameParam] = p, s && (t[e.totalFileSizeName] = q), 
                    e.paramsInBody || (s || (t[e.inputName] = p), d = qq.obj2url(t, d)), n.open(c, d, !0), 
                    e.cors.expected && e.cors.sendCredentials && (n.withCredentials = !0), s ? (e.paramsInBody && qq.obj2FormData(t, l), 
                    l.append(e.inputName, a), l) : a;
                }, f = function(t, i) {
                    var o = e.customHeaders.get(t), r = n.getFile(t);
                    i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
                    i.setRequestHeader("Cache-Control", "no-cache"), s || (i.setRequestHeader("Content-Type", "application/octet-stream"), 
                    i.setRequestHeader("X-Mime-Type", r.type)), qq.each(o, (function(e, t) {
                        i.setRequestHeader(e, t);
                    }));
                };
                qq.extend(this, {
                    uploadChunk: function(t, r, a) {
                        var u, c, d, p = n._getChunkData(t, r), q = n._createXhr(t, r);
                        o(t);
                        return u = l(t, q), n._registerProgressHandler(t, r, p.size), function(t, n, r) {
                            var a = o(t), u = i(t);
                            n[e.chunking.paramNames.partIndex] = r.part, n[e.chunking.paramNames.partByteOffset] = r.start, 
                            n[e.chunking.paramNames.chunkSize] = r.size, n[e.chunking.paramNames.totalParts] = r.count, 
                            n[e.totalFileSizeName] = a, s && (n[e.filenameParam] = u);
                        }(t, d = e.paramsStore.get(t), p), a && (d[e.resume.paramNames.resuming] = !0), 
                        c = h(d, q, p.blob, t), f(t, q), q.send(c), u;
                    },
                    uploadFile: function(t) {
                        var i, o, r, a, s = n.getFile(t);
                        return o = n._createXhr(t), n._registerProgressHandler(t), i = l(t, o), r = e.paramsStore.get(t), 
                        a = h(r, o, s, t), f(t, o), o.send(a), i;
                    }
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "traditional"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, (function(t) {
                    return {
                        finalizeChunks: function(n) {
                            return e.chunking.success.endpoint ? q(n) : t.finalizeChunks(n, qq.bind(p, this, !0));
                        }
                    };
                }));
            }, qq.traditional.AllChunksDoneAjaxRequester = function(e) {
                "use strict";
                var t, n, i = "POST", o = {
                    cors: {
                        allowXdr: !1,
                        expected: !1,
                        sendCredentials: !1
                    },
                    endpoint: null,
                    log: function(e, t) {}
                }, r = {}, a = {
                    get: function(e) {
                        return o.endpoint;
                    }
                };
                qq.extend(o, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ i ],
                    method: i,
                    successfulResponseCodes: (n = {
                        POST: [ 200, 201, 202 ]
                    }, n),
                    endpointStore: a,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: o.cors,
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var i = r[e];
                        delete r[e], n ? i.failure(t) : i.success(t);
                    }
                })), qq.extend(this, {
                    complete: function(e, n, i, a) {
                        var s = new qq.Promise;
                        return o.log("Submitting All Chunks Done request for " + e), r[e] = s, t.initTransport(e).withParams(i).withHeaders(a).send(n), 
                        s;
                    }
                });
            }, qq.PasteSupport = function(e) {
                "use strict";
                var t, n;
                t = {
                    targetElement: null,
                    callbacks: {
                        log: function(e, t) {},
                        pasteReceived: function(e) {}
                    }
                }, qq.extend(t, e), n = qq(t.targetElement).attach("paste", (function(e) {
                    var n = e.clipboardData;
                    n && qq.each(n.items, (function(e, n) {
                        if (function(e) {
                            return e.type && 0 === e.type.indexOf("image/");
                        }(n)) {
                            var i = n.getAsFile();
                            t.callbacks.pasteReceived(i);
                        }
                    }));
                })), qq.extend(this, {
                    reset: function() {
                        n && n();
                    }
                });
            }, qq.DragAndDrop = function(e) {
                "use strict";
                var t, n, i, o = "qq-hidezones", r = "qq-hide-dropzone", a = [], s = [], u = new qq.DisposeSupport;
                function l(e) {
                    var n = new qq.Promise;
                    return e.isFile ? e.file((function(t) {
                        var i = e.name, o = e.fullPath, r = o.indexOf(i);
                        "/" === (o = o.substr(0, r)).charAt(0) && (o = o.substr(1)), t.qqPath = o, s.push(t), 
                        n.success();
                    }), (function(i) {
                        t.callbacks.dropLog("Problem parsing '" + e.fullPath + "'.  FileError code " + i.code + ".", "error"), 
                        n.failure();
                    })) : e.isDirectory && c(e).then((function(e) {
                        var t = e.length;
                        qq.each(e, (function(e, i) {
                            l(i).done((function() {
                                0 === (t -= 1) && n.success();
                            }));
                        })), e.length || n.success();
                    }), (function(i) {
                        t.callbacks.dropLog("Problem parsing '" + e.fullPath + "'.  FileError code " + i.code + ".", "error"), 
                        n.failure();
                    })), n;
                }
                function c(e, t, n, i) {
                    var o = i || new qq.Promise, r = t || e.createReader();
                    return r.readEntries((function(t) {
                        var i = n ? n.concat(t) : t;
                        t.length ? setTimeout((function() {
                            c(e, r, i, o);
                        }), 0) : o.success(i);
                    }), o.failure), o;
                }
                function d(e) {
                    var n = new qq.UploadDropZone({
                        HIDE_ZONES_EVENT_NAME: o,
                        element: e,
                        onEnter: function(n) {
                            qq(e).addClass(t.classes.dropActive), n.stopPropagation();
                        },
                        onLeaveNotDescendants: function(n) {
                            qq(e).removeClass(t.classes.dropActive);
                        },
                        onDrop: function(e) {
                            var i, o, r, a;
                            (i = e.dataTransfer, o = n, r = [], a = new qq.Promise, t.callbacks.processingDroppedFiles(), 
                            o.dropDisabled(!0), i.files.length > 1 && !t.allowMultipleItems ? (t.callbacks.processingDroppedFilesComplete([]), 
                            t.callbacks.dropError("tooManyFilesError", ""), o.dropDisabled(!1), a.failure()) : (s = [], 
                            qq.isFolderDropSupported(i) ? qq.each(i.items, (function(e, t) {
                                var n = t.webkitGetAsEntry();
                                n && (n.isFile ? s.push(t.getAsFile()) : r.push(l(n).done((function() {
                                    r.pop(), 0 === r.length && a.success();
                                }))));
                            })) : s = i.files, 0 === r.length && a.success()), a).then((function() {
                                !function(e, n) {
                                    var i = Array.prototype.slice.call(e);
                                    t.callbacks.dropLog("Grabbed " + e.length + " dropped files."), n.dropDisabled(!1), 
                                    t.callbacks.processingDroppedFilesComplete(i, n.getElement());
                                }(s, n);
                            }), (function() {
                                t.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
                            }));
                        }
                    });
                    return u.addDisposer((function() {
                        n.dispose();
                    })), qq(e).hasAttribute(r) && qq(e).hide(), a.push(n), n;
                }
                t = {
                    dropZoneElements: [],
                    allowMultipleItems: !0,
                    classes: {
                        dropActive: null
                    },
                    callbacks: new qq.DragAndDrop.callbacks
                }, qq.extend(t, e, !0), n = t.dropZoneElements, i = function() {
                    setTimeout((function() {
                        qq.each(n, (function(e, n) {
                            qq(n).hasAttribute(r) && qq(n).hide(), qq(n).removeClass(t.classes.dropActive);
                        }));
                    }), 10);
                }, qq.each(n, (function(e, t) {
                    var i = d(t);
                    n.length && qq.supportedFeatures.fileDrop && u.attach(document, "dragenter", (function(e) {
                        var t, o;
                        !i.dropDisabled() && (t = e, qq.each(t.dataTransfer.types, (function(e, t) {
                            if ("Files" === t) return o = !0, !1;
                        })), o) && qq.each(n, (function(e, t) {
                            t instanceof HTMLElement && qq(t).hasAttribute(r) && qq(t).css({
                                display: "block"
                            });
                        }));
                    }));
                })), u.attach(document, "dragleave", (function(e) {
                    (function(e) {
                        return qq.firefox() ? !e.relatedTarget : qq.safari() ? e.x < 0 || e.y < 0 : 0 === e.x && 0 === e.y;
                    })(e) && i();
                })), u.attach(qq(document).children()[0], "mouseenter", (function(e) {
                    i();
                })), u.attach(document, "drop", (function(e) {
                    e.preventDefault(), i();
                })), u.attach(document, o, i), qq.extend(this, {
                    setupExtraDropzone: function(e) {
                        t.dropZoneElements.push(e), d(e);
                    },
                    removeDropzone: function(e) {
                        var n, i = t.dropZoneElements;
                        for (n in i) if (i[n] === e) return i.splice(n, 1);
                    },
                    dispose: function() {
                        u.dispose(), qq.each(a, (function(e, t) {
                            t.dispose();
                        }));
                    }
                });
            }, qq.DragAndDrop.callbacks = function() {
                "use strict";
                return {
                    processingDroppedFiles: function() {},
                    processingDroppedFilesComplete: function(e, t) {},
                    dropError: function(e, t) {
                        qq.log("Drag & drop error code '" + e + " with these specifics: '" + t + "'", "error");
                    },
                    dropLog: function(e, t) {
                        qq.log(e, t);
                    }
                };
            }, qq.UploadDropZone = function(e) {
                "use strict";
                var t, n, i, o, r = new qq.DisposeSupport;
                function a() {
                    return qq.safari() || qq.firefox() && qq.windows();
                }
                function s(e) {
                    if (!qq.supportedFeatures.fileDrop) return !1;
                    var t, n = e.dataTransfer, i = qq.safari();
                    return t = !(!qq.ie() || !qq.supportedFeatures.fileDrop) || "none" !== n.effectAllowed, 
                    n && t && (n.files || !i && n.types.contains && n.types.contains("Files"));
                }
                function u(e) {
                    return void 0 !== e && (i = e), i;
                }
                t = {
                    element: null,
                    onEnter: function(e) {},
                    onLeave: function(e) {},
                    onLeaveNotDescendants: function(e) {},
                    onDrop: function(e) {}
                }, qq.extend(t, e), n = t.element, o || (a ? r.attach(document, "dragover", (function(e) {
                    e.preventDefault();
                })) : r.attach(document, "dragover", (function(e) {
                    e.dataTransfer && (e.dataTransfer.dropEffect = "none", e.preventDefault());
                })), o = !0), r.attach(n, "dragover", (function(e) {
                    if (s(e)) {
                        var t = qq.ie() && qq.supportedFeatures.fileDrop ? null : e.dataTransfer.effectAllowed;
                        e.dataTransfer.dropEffect = "move" === t || "linkMove" === t ? "move" : "copy", 
                        e.stopPropagation(), e.preventDefault();
                    }
                })), r.attach(n, "dragenter", (function(e) {
                    if (!u()) {
                        if (!s(e)) return;
                        t.onEnter(e);
                    }
                })), r.attach(n, "dragleave", (function(e) {
                    if (s(e)) {
                        t.onLeave(e);
                        var n = document.elementFromPoint(e.clientX, e.clientY);
                        qq(this).contains(n) || t.onLeaveNotDescendants(e);
                    }
                })), r.attach(n, "drop", (function(e) {
                    if (!u()) {
                        if (!s(e)) return;
                        e.preventDefault(), e.stopPropagation(), t.onDrop(e), function() {
                            var e;
                            function n() {
                                (e = document.createEvent("Event")).initEvent(t.HIDE_ZONES_EVENT_NAME, !0, !0);
                            }
                            if (window.CustomEvent) try {
                                e = new CustomEvent(t.HIDE_ZONES_EVENT_NAME);
                            } catch (e) {
                                n();
                            } else n();
                            document.dispatchEvent(e);
                        }();
                    }
                })), qq.extend(this, {
                    dropDisabled: function(e) {
                        return u(e);
                    },
                    dispose: function() {
                        r.dispose();
                    },
                    getElement: function() {
                        return n;
                    }
                });
            }, qq.DeleteFileAjaxRequester = function(e) {
                "use strict";
                var t, n = {
                    method: "DELETE",
                    uuidParamName: "qquuid",
                    endpointStore: {},
                    maxConnections: 3,
                    customHeaders: function(e) {
                        return {};
                    },
                    paramsStore: {},
                    demoMode: !1,
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {},
                    onDelete: function(e) {},
                    onDeleteComplete: function(e, t, n) {}
                };
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "POST", "DELETE" ],
                    method: n.method,
                    endpointStore: n.endpointStore,
                    paramsStore: n.paramsStore,
                    mandatedParams: "POST" === n.method.toUpperCase() ? {
                        _method: "DELETE"
                    } : {},
                    maxConnections: n.maxConnections,
                    customHeaders: function(e) {
                        return n.customHeaders.get(e);
                    },
                    demoMode: n.demoMode,
                    log: n.log,
                    onSend: n.onDelete,
                    onComplete: n.onDeleteComplete,
                    cors: n.cors
                })), qq.extend(this, {
                    sendDelete: function(e, i, o) {
                        var r = o || {};
                        n.log("Submitting delete file request for " + e), "DELETE" === n.method ? t.initTransport(e).withPath(i).withParams(r).send() : (r[n.uuidParamName] = i, 
                        t.initTransport(e).withParams(r).send());
                    }
                });
            }, function() {
                function e(e, t, n, i) {
                    var o, r = e.naturalWidth, a = e.naturalHeight, s = n.width, u = n.height, l = t.getContext("2d");
                    l.save(), qq.supportedFeatures.unlimitedScaledImageSize || (o = function(e) {
                        var t = 5241e3;
                        if (!qq.ios()) throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
                        if (e.origHeight * e.origWidth > t) return {
                            newHeight: Math.round(Math.sqrt(t * (e.origHeight / e.origWidth))),
                            newWidth: Math.round(Math.sqrt(t * (e.origWidth / e.origHeight)))
                        };
                    }({
                        origWidth: s,
                        origHeight: u
                    })) && (qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", s, u, o.newWidth, o.newHeight), "warn"), 
                    s = o.newWidth, u = o.newHeight), function(e, t, n, i) {
                        switch (i) {
                          case 5:
                          case 6:
                          case 7:
                          case 8:
                            e.width = n, e.height = t;
                            break;

                          default:
                            e.width = t, e.height = n;
                        }
                        var o = e.getContext("2d");
                        switch (i) {
                          case 2:
                            o.translate(t, 0), o.scale(-1, 1);
                            break;

                          case 3:
                            o.translate(t, n), o.rotate(Math.PI);
                            break;

                          case 4:
                            o.translate(0, n), o.scale(1, -1);
                            break;

                          case 5:
                            o.rotate(.5 * Math.PI), o.scale(1, -1);
                            break;

                          case 6:
                            o.rotate(.5 * Math.PI), o.translate(0, -n);
                            break;

                          case 7:
                            o.rotate(.5 * Math.PI), o.translate(t, -n), o.scale(-1, 1);
                            break;

                          case 8:
                            o.rotate(-.5 * Math.PI), o.translate(-t, 0);
                        }
                    }(t, s, u, n.orientation), qq.ios() ? function() {
                        (function(e) {
                            var t, n = e.naturalWidth, i = e.naturalHeight, o = document.createElement("canvas");
                            return n * i > 1048576 && (o.width = o.height = 1, (t = o.getContext("2d")).drawImage(e, 1 - n, 0), 
                            0 === t.getImageData(0, 0, 1, 1).data[3]);
                        })(e) && (r /= 2, a /= 2);
                        var t, n, o, c = 1024, d = document.createElement("canvas"), p = i ? function(e, t, n) {
                            var i, o, r, a = document.createElement("canvas"), s = 0, u = n, l = n;
                            for (a.width = 1, a.height = n, (i = a.getContext("2d")).drawImage(e, 0, 0), o = i.getImageData(0, 0, 1, n).data; l > s; ) 0 === o[4 * (l - 1) + 3] ? u = l : s = l, 
                            l = u + s >> 1;
                            return 0 == (r = l / n) ? 1 : r;
                        }(e, 0, a) : 1, q = Math.ceil(c * s / r), h = Math.ceil(c * u / a / p), f = 0, m = 0;
                        for (d.width = d.height = c, t = d.getContext("2d"); f < a; ) {
                            for (n = 0, o = 0; n < r; ) t.clearRect(0, 0, c, c), t.drawImage(e, -n, -f), l.drawImage(d, 0, 0, c, c, o, m, q, h), 
                            n += c, o += q;
                            f += c, m += h;
                        }
                        l.restore(), d = t = null;
                    }() : l.drawImage(e, 0, 0, s, u), t.qqImageRendered && t.qqImageRendered();
                }
                function t(e, t) {
                    var n = this;
                    window.Blob && e instanceof Blob && function() {
                        var t = new Image, i = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                        if (!i) throw Error("No createObjectURL function found to create blob url");
                        t.src = i.createObjectURL(e), n.blob = e, e = t;
                    }(), e.naturalWidth || e.naturalHeight || (e.onload = function() {
                        var e = n.imageLoadListeners;
                        e && (n.imageLoadListeners = null, setTimeout((function() {
                            for (var t = 0, n = e.length; t < n; t++) e[t]();
                        }), 0));
                    }, e.onerror = t, this.imageLoadListeners = []), this.srcImage = e;
                }
                t.prototype.render = function(t, n) {
                    n = n || {};
                    var i, o, r = this, a = this.srcImage.naturalWidth, s = this.srcImage.naturalHeight, u = n.width, l = n.height, c = n.maxWidth, d = n.maxHeight, p = !this.blob || "image/jpeg" === this.blob.type, q = t.tagName.toLowerCase();
                    this.imageLoadListeners ? this.imageLoadListeners.push((function() {
                        r.render(t, n);
                    })) : (u && !l ? l = s * u / a << 0 : l && !u ? u = a * l / s << 0 : (u = a, l = s), 
                    c && u > c && (l = s * (u = c) / a << 0), d && l > d && (u = a * (l = d) / s << 0), 
                    i = {
                        width: u,
                        height: l
                    }, qq.each(n, (function(e, t) {
                        i[e] = t;
                    })), "img" === q ? (o = t.src, t.src = function(t, n, i) {
                        var o = document.createElement("canvas"), r = n.mime || "image/jpeg";
                        return e(t, o, n, i), o.toDataURL(r, n.quality || .8);
                    }(r.srcImage, i, p), o === t.src && t.onload()) : "canvas" === q && e(this.srcImage, t, i, p), 
                    "function" == typeof this.onrender && this.onrender(t));
                }, qq.MegaPixImage = t;
            }(), qq.ImageGenerator = function(e) {
                "use strict";
                function t(e) {
                    return "img" === e.tagName.toLowerCase();
                }
                function n(e) {
                    return "canvas" === e.tagName.toLowerCase();
                }
                function i(e) {
                    var t = e.split("/"), n = t[t.length - 1], i = qq.getExtension(n);
                    switch (i = i && i.toLowerCase()) {
                      case "jpeg":
                      case "jpg":
                        return "image/jpeg";

                      case "png":
                        return "image/png";

                      case "bmp":
                        return "image/bmp";

                      case "gif":
                        return "image/gif";

                      case "tiff":
                      case "tif":
                        return "image/tiff";
                    }
                }
                function o(e) {
                    var t, n, i, o = document.createElement("a");
                    return o.href = e, t = o.protocol, i = o.port, n = o.hostname, t.toLowerCase() !== window.location.protocol.toLowerCase() || (n.toLowerCase() !== window.location.hostname.toLowerCase() || i !== window.location.port && !qq.ie());
                }
                function r(i, o) {
                    var r = t(i) || n(i);
                    return t(i) ? function(t, n) {
                        t.onload = function() {
                            t.onload = null, t.onerror = null, n.success(t);
                        }, t.onerror = function() {
                            t.onload = null, t.onerror = null, e("Problem drawing thumbnail!", "error"), n.failure(t, "Problem drawing thumbnail!");
                        };
                    }(i, o) : n(i) ? function(e, t) {
                        e.qqImageRendered = function() {
                            t.success(e);
                        };
                    }(i, o) : (o.failure(i), e(qq.format("Element container of type {} is not supported!", i.tagName), "error")), 
                    r;
                }
                function a(e, t, n, a) {
                    var s = new Image, u = new qq.Promise;
                    r(s, u), o(e) && (s.crossOrigin = "anonymous"), s.src = e, u.then((function() {
                        r(t, n), new qq.MegaPixImage(s).render(t, {
                            maxWidth: a,
                            maxHeight: a,
                            mime: i(e)
                        });
                    }), n.failure);
                }
                function s(e, t, n, i) {
                    r(t, n), qq(t).css({
                        maxWidth: i + "px",
                        maxHeight: i + "px"
                    }), t.src = e;
                }
                function u(e, i, u) {
                    var l, c = new qq.Promise, d = u.scale, p = d ? u.maxSize : null;
                    return d && t(i) ? (l = document.createElement("canvas")).getContext && l.getContext("2d") ? o(e) && void 0 === (new Image).crossOrigin ? s(e, i, c, p) : a(e, i, c, p) : s(e, i, c, p) : n(i) ? a(e, i, c, p) : r(i, c) && (i.src = e), 
                    c;
                }
                qq.extend(this, {
                    generate: function(t, n, i) {
                        return qq.isString(t) ? (e("Attempting to update thumbnail based on server response."), 
                        u(t, n, i || {})) : (e("Attempting to draw client-side image preview."), function(t, n, i) {
                            var o = new qq.Promise, a = new qq.Identify(t, e), s = i.maxSize, u = null == i.orient || i.orient, l = function() {
                                n.onerror = null, n.onload = null, e("Could not render preview, file may be too large!", "error"), 
                                o.failure(n, "Browser cannot render image!");
                            };
                            return a.isPreviewable().then((function(i) {
                                var a = {
                                    parse: function() {
                                        return (new qq.Promise).success();
                                    }
                                }, c = u ? new qq.Exif(t, e) : a, d = new qq.MegaPixImage(t, l);
                                r(n, o) && c.parse().then((function(e) {
                                    var t = e && e.Orientation;
                                    d.render(n, {
                                        maxWidth: s,
                                        maxHeight: s,
                                        orientation: t,
                                        mime: i
                                    });
                                }), (function(t) {
                                    e(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", t)), 
                                    d.render(n, {
                                        maxWidth: s,
                                        maxHeight: s,
                                        mime: i
                                    });
                                }));
                            }), (function() {
                                e("Not previewable"), o.failure(n, "Not previewable");
                            })), o;
                        }(t, n, i || {}));
                    }
                });
            }, qq.Exif = function(e, t) {
                "use strict";
                var n = [ 274 ], i = {
                    274: {
                        name: "Orientation",
                        bytes: 2
                    }
                };
                function o(e) {
                    for (var t = 0, n = 0; e.length > 0; ) t += parseInt(e.substring(0, 2), 16) * Math.pow(2, n), 
                    e = e.substring(2, e.length), n += 8;
                    return t;
                }
                function r(t, n) {
                    var i = t, o = n;
                    return void 0 === i && (i = 2, o = new qq.Promise), qq.readBlobToHex(e, i, 4).then((function(e) {
                        var t, n = /^ffe([0-9])/.exec(e);
                        n ? "1" !== n[1] ? (t = parseInt(e.slice(4, 8), 16), r(i + t + 2, o)) : o.success(i) : o.failure("No EXIF header to be found!");
                    })), o;
                }
                function a() {
                    var t = new qq.Promise;
                    return qq.readBlobToHex(e, 0, 6).then((function(e) {
                        0 !== e.indexOf("ffd8") ? t.failure("Not a valid JPEG!") : r().then((function(e) {
                            t.success(e);
                        }), (function(e) {
                            t.failure(e);
                        }));
                    })), t;
                }
                qq.extend(this, {
                    parse: function() {
                        var r = new qq.Promise, s = function(e) {
                            t(qq.format("EXIF header parse failed: '{}' ", e)), r.failure(e);
                        };
                        return a().then((function(a) {
                            var u, l;
                            t(qq.format("Moving forward with EXIF header parsing for '{}'", void 0 === e.name ? "blob" : e.name)), 
                            (u = a, l = new qq.Promise, qq.readBlobToHex(e, u + 10, 2).then((function(e) {
                                l.success("4949" === e);
                            })), l).then((function(u) {
                                t(qq.format("EXIF Byte order is {} endian", u ? "little" : "big")), function(t, n) {
                                    var i = new qq.Promise;
                                    return qq.readBlobToHex(e, t + 18, 2).then((function(e) {
                                        if (n) return i.success(o(e));
                                        i.success(parseInt(e, 16));
                                    })), i;
                                }(a, u).then((function(l) {
                                    t(qq.format("Found {} APP1 directory entries", l)), function(t, n) {
                                        var i = t + 20, o = 12 * n;
                                        return qq.readBlobToHex(e, i, o);
                                    }(a, l).then((function(e) {
                                        var a = function(e) {
                                            for (var t = [], n = 0; n + 24 <= e.length; ) t.push(e.slice(n, n + 24)), n += 24;
                                            return t;
                                        }(e), s = function(e, t) {
                                            var r = qq.extend([], n), a = {};
                                            return qq.each(t, (function(t, n) {
                                                var s, u, l, c = n.slice(0, 4), d = e ? o(c) : parseInt(c, 16), p = r.indexOf(d);
                                                if (p >= 0 && (u = i[d].name, l = i[d].bytes, s = n.slice(16, 16 + 2 * l), a[u] = e ? o(s) : parseInt(s, 16), 
                                                r.splice(p, 1)), 0 === r.length) return !1;
                                            })), a;
                                        }(u, a);
                                        t("Successfully parsed some EXIF tags"), r.success(s);
                                    }), s);
                                }), s);
                            }), s);
                        }), s), r;
                    }
                });
            }, qq.Identify = function(e, t) {
                "use strict";
                qq.extend(this, {
                    isPreviewable: function() {
                        var n = this, i = new qq.Promise, o = !1, r = void 0 === e.name ? "blob" : e.name;
                        return t(qq.format("Attempting to determine if {} can be rendered in this browser", r)), 
                        t("First pass: check type attribute of blob object."), this.isPreviewableSync() ? (t("Second pass: check for magic bytes in file header."), 
                        qq.readBlobToHex(e, 0, 4).then((function(e) {
                            qq.each(n.PREVIEWABLE_MIME_TYPES, (function(t, n) {
                                if (r = e, a = !1, s = [].concat(n), qq.each(s, (function(e, t) {
                                    if (0 === r.indexOf(t)) return a = !0, !1;
                                })), a) return ("image/tiff" !== t || qq.supportedFeatures.tiffPreviews) && (o = !0, 
                                i.success(t)), !1;
                                var r, a, s;
                            })), t(qq.format("'{}' is {} able to be rendered in this browser", r, o ? "" : "NOT")), 
                            o || i.failure();
                        }), (function() {
                            t("Error reading file w/ name '" + r + "'.  Not able to be rendered in this browser."), 
                            i.failure();
                        }))) : i.failure(), i;
                    },
                    isPreviewableSync: function() {
                        var n = e.type, i = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), n) >= 0, o = !1, r = void 0 === e.name ? "blob" : e.name;
                        return i && (o = "image/tiff" !== n || qq.supportedFeatures.tiffPreviews), !o && t(r + " is not previewable in this browser per the blob's type attr"), 
                        o;
                    }
                });
            }, qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
                "image/jpeg": "ffd8ff",
                "image/gif": "474946",
                "image/png": "89504e",
                "image/bmp": "424d",
                "image/tiff": [ "49492a00", "4d4d002a" ]
            }, qq.ImageValidation = function(e, t) {
                "use strict";
                this.validate = function(n) {
                    var i, o = new qq.Promise;
                    return t("Attempting to validate image."), !function(e) {
                        var t = !1;
                        return qq.each(e, (function(e, n) {
                            if (n > 0) return t = !0, !1;
                        })), t;
                    }(n) ? o.success() : (i = new qq.Promise, new qq.Identify(e, t).isPreviewable().then((function() {
                        var n = new Image, o = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                        o ? (n.onerror = function() {
                            t("Cannot determine dimensions for image.  May be too large.", "error"), i.failure();
                        }, n.onload = function() {
                            i.success({
                                width: this.width,
                                height: this.height
                            });
                        }, n.src = o.createObjectURL(e)) : (t("No createObjectURL function available to generate image URL!", "error"), 
                        i.failure());
                    }), i.failure), i).then((function(e) {
                        var t = function(e, t) {
                            var n;
                            return qq.each(e, (function(e, i) {
                                if (i > 0) {
                                    var o = /(max|min)(Width|Height)/.exec(e), r = o[2].charAt(0).toLowerCase() + o[2].slice(1), a = t[r];
                                    switch (o[1]) {
                                      case "min":
                                        if (a < i) return n = e, !1;
                                        break;

                                      case "max":
                                        if (a > i) return n = e, !1;
                                    }
                                }
                            })), n;
                        }(n, e);
                        t ? o.failure(t) : o.success();
                    }), o.success), o;
                };
            }, qq.Session = function(e) {
                "use strict";
                var t = {
                    endpoint: null,
                    params: {},
                    customHeaders: {},
                    cors: {},
                    addFileRecord: function(e) {},
                    log: function(e, t) {}
                };
                function n(e, n, i, o) {
                    var r = !1;
                    (n = n && function(e) {
                        if (qq.isArray(e)) return !0;
                        t.log("Session response is not an array.", "error");
                    }(e)) && qq.each(e, (function(e, n) {
                        if (null == n.uuid) r = !0, t.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", e), "error"); else if (null == n.name) r = !0, 
                        t.log(qq.format("Session response item {} did not include a valid name - ignoring.", e), "error"); else try {
                            return t.addFileRecord(n), !0;
                        } catch (e) {
                            r = !0, t.log(e.message, "error");
                        }
                        return !1;
                    })), o[n && !r ? "success" : "failure"](e, i);
                }
                qq.extend(t, e, !0), this.refresh = function() {
                    var e = new qq.Promise, i = qq.extend({}, t);
                    return new qq.SessionAjaxRequester(qq.extend(i, {
                        onComplete: function(t, i, o) {
                            n(t, i, o, e);
                        }
                    })).queryServer(), e;
                };
            }, qq.SessionAjaxRequester = function(e) {
                "use strict";
                var t, n = {
                    endpoint: null,
                    customHeaders: {},
                    params: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    onComplete: function(e, t, n) {},
                    log: function(e, t) {}
                };
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "GET" ],
                    method: "GET",
                    endpointStore: {
                        get: function() {
                            return n.endpoint;
                        }
                    },
                    customHeaders: n.customHeaders,
                    log: n.log,
                    onComplete: function(e, t, i) {
                        var o = null;
                        if (null != t.responseText) try {
                            o = qq.parseJson(t.responseText);
                        } catch (e) {
                            n.log("Problem parsing session response: " + e.message, "error"), i = !0;
                        }
                        n.onComplete(o, !i, t);
                    },
                    cors: n.cors
                })), qq.extend(this, {
                    queryServer: function() {
                        var e = qq.extend({}, n.params);
                        n.log("Session query request."), t.initTransport("sessionRefresh").withParams(e).withCacheBuster().send();
                    }
                });
            }, qq.FormSupport = function(e, t, n) {
                "use strict";
                var i = this, o = e.interceptSubmit, r = e.element, a = e.autoUpload;
                function s(e, t) {
                    if (!e.checkValidity || e.checkValidity()) return !0;
                    n("Form did not pass validation checks - will not upload.", "error"), t();
                }
                qq.extend(this, {
                    newEndpoint: null,
                    newAutoUpload: a,
                    attachedToForm: !1,
                    getFormInputsAsObject: function() {
                        return null == r ? null : i._form2Obj(r);
                    }
                }), r = function(e) {
                    return e && (qq.isString(e) && (e = document.getElementById(e)), e && (n("Attaching to form element."), 
                    function(e) {
                        e.getAttribute("action") && (i.newEndpoint = e.getAttribute("action"));
                    }(e), o && function(e) {
                        var n = e.submit;
                        qq(e).attach("submit", (function(i) {
                            (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, 
                            s(e, n) && t();
                        })), e.submit = function() {
                            s(e, n) && t();
                        };
                    }(e))), e;
                }(r), this.attachedToForm = !!r;
            }, qq.extend(qq.FormSupport.prototype, {
                _form2Obj: function(e) {
                    "use strict";
                    var t = {}, n = function(e) {
                        return t = e.type, qq.indexOf([ "checkbox", "radio" ], t.toLowerCase()) >= 0 && !e.checked || e.disabled && "hidden" !== e.type.toLowerCase();
                        var t;
                    };
                    return qq.each(e.elements, (function(e, i) {
                        if ((qq.isInput(i, !0) || "textarea" === i.tagName.toLowerCase()) && (r = i.type, 
                        qq.indexOf([ "button", "image", "reset", "submit" ], r.toLowerCase()) < 0) && !n(i)) t[i.name] = i.value; else if ("select" === i.tagName.toLowerCase() && !n(i)) {
                            var o = function(e) {
                                var t = null;
                                return qq.each(qq(e).children(), (function(e, n) {
                                    if ("option" === n.tagName.toLowerCase() && n.selected) return t = n.value, !1;
                                })), t;
                            }(i);
                            null !== o && (t[i.name] = o);
                        }
                        var r;
                    })), t;
                }
            }), qq.Scaler = function(e, t) {
                "use strict";
                var n = e.sendOriginal, i = e.orient, o = e.defaultType, r = e.defaultQuality / 100, a = e.failureText, s = e.includeExif, u = this._getSortedSizes(e.sizes);
                qq.extend(this, {
                    enabled: qq.supportedFeatures.scaling && u.length > 0,
                    getFileRecords: function(e, l, c) {
                        var d = this, p = [], q = c.blob ? c.blob : c;
                        return new qq.Identify(q, t).isPreviewableSync() ? (qq.each(u, (function(e, n) {
                            var u = d._determineOutputType({
                                defaultType: o,
                                requestedType: n.type,
                                refType: q.type
                            });
                            p.push({
                                uuid: qq.getUniqueId(),
                                name: d._getName(l, {
                                    name: n.name,
                                    type: u,
                                    refType: q.type
                                }),
                                blob: new qq.BlobProxy(q, qq.bind(d._generateScaledImage, d, {
                                    maxSize: n.maxSize,
                                    orient: i,
                                    type: u,
                                    quality: r,
                                    failedText: a,
                                    includeExif: s,
                                    log: t
                                }))
                            });
                        })), n && p.push({
                            uuid: e,
                            name: l,
                            blob: q
                        })) : p.push({
                            uuid: e,
                            name: l,
                            blob: q
                        }), p;
                    },
                    handleNewFile: function(e, t, n, i, o, r, a, s) {
                        e.qqButtonId || e.blob && e.blob.qqButtonId;
                        var u, l = [], c = null, d = s.addFileToHandler, p = s.uploadData, q = s.paramsStore, h = qq.getUniqueId();
                        qq.each(this.getFileRecords(n, t, e), (function(t, n) {
                            var a, s = e, u = i;
                            n.blob instanceof qq.BlobProxy && (s = n.blob, u = -1), a = p.addFile({
                                uuid: n.uuid,
                                name: n.name,
                                size: u,
                                batchId: r,
                                proxyGroupId: h
                            }), n.blob instanceof qq.BlobProxy ? l.push(a) : c = a, d(a, s), o.push({
                                id: a,
                                file: s
                            });
                        })), null !== c && (qq.each(l, (function(e, t) {
                            var n = {
                                qqparentuuid: p.retrieve({
                                    id: c
                                }).uuid,
                                qqparentsize: p.retrieve({
                                    id: c
                                }).size
                            };
                            n[a] = p.retrieve({
                                id: t
                            }).uuid, p.setParentId(t, c), q.addReadOnly(t, n);
                        })), l.length && ((u = {})[a] = p.retrieve({
                            id: c
                        }).uuid, q.addReadOnly(c, u)));
                    }
                });
            }, qq.extend(qq.Scaler.prototype, {
                scaleImage: function(e, t, n) {
                    "use strict";
                    if (!qq.supportedFeatures.scaling) throw new qq.Error("Scaling is not supported in this browser!");
                    var i = new qq.Promise, o = n.log, r = n.getFile(e), a = n.uploadData.retrieve({
                        id: e
                    }), s = a && a.name, u = a && a.uuid, l = {
                        sendOriginal: !1,
                        orient: t.orient,
                        defaultType: t.type || null,
                        defaultQuality: t.quality,
                        failedToScaleText: "Unable to scale",
                        sizes: [ {
                            name: "",
                            maxSize: t.maxSize
                        } ]
                    }, c = new qq.Scaler(l, o);
                    return qq.Scaler && qq.supportedFeatures.imagePreviews && r ? qq.bind((function() {
                        var t = c.getFileRecords(u, s, r)[0];
                        t && t.blob instanceof qq.BlobProxy ? t.blob.create().then(i.success, i.failure) : (o(e + " is not a scalable image!", "error"), 
                        i.failure());
                    }), this)() : (i.failure(), o("Could not generate requested scaled image for " + e + ".  Scaling is either not possible in this browser, or the file could not be located.", "error")), 
                    i;
                },
                _determineOutputType: function(e) {
                    "use strict";
                    var t = e.requestedType, n = e.defaultType, i = e.refType;
                    return n || t ? t && qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), t) >= 0 ? "image/tiff" === t ? qq.supportedFeatures.tiffPreviews ? t : n : t : n : "image/jpeg" !== i ? "image/png" : i;
                },
                _getName: function(e, t) {
                    "use strict";
                    var n = e.lastIndexOf("."), i = t.type || "image/png", o = t.refType, r = "", a = qq.getExtension(e), s = "";
                    return t.name && t.name.trim().length && (s = " (" + t.name + ")"), n >= 0 ? (r = e.substr(0, n), 
                    o !== i && (a = i.split("/")[1]), r += s + "." + a) : r = e + s, r;
                },
                _getSortedSizes: function(e) {
                    "use strict";
                    return (e = qq.extend([], e)).sort((function(e, t) {
                        return e.maxSize > t.maxSize ? 1 : e.maxSize < t.maxSize ? -1 : 0;
                    }));
                },
                _generateScaledImage: function(e, t) {
                    "use strict";
                    var n = this, i = e.log, o = e.maxSize, r = e.orient, a = e.type, s = e.quality, u = e.failedText, l = e.includeExif && "image/jpeg" === t.type && "image/jpeg" === a, c = new qq.Promise, d = new qq.ImageGenerator(i), p = document.createElement("canvas");
                    return i("Attempting to generate scaled version for " + t.name), d.generate(t, p, {
                        maxSize: o,
                        orient: r
                    }).then((function() {
                        var e = p.toDataURL(a, s), o = function() {
                            i("Success generating scaled version for " + t.name);
                            var n = qq.dataUriToBlob(e);
                            c.success(n);
                        };
                        l ? n._insertExifHeader(t, e, i).then((function(t) {
                            e = t, o();
                        }), (function() {
                            i("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error"), 
                            o();
                        })) : o();
                    }), (function() {
                        i("Failed attempt to generate scaled version for " + t.name, "error"), c.failure(u);
                    })), c;
                },
                _insertExifHeader: function(e, t, n) {
                    "use strict";
                    var i = new FileReader, o = new qq.Promise, r = "";
                    return i.onload = function() {
                        r = i.result, o.success(ExifRestorer.restore(r, t));
                    }, i.onerror = function() {
                        n("Problem reading " + e.name + " during attempt to transfer EXIF data to scaled version.", "error"), 
                        o.failure();
                    }, i.readAsDataURL(e), o;
                },
                _dataUriToBlob: function(e) {
                    "use strict";
                    var t, n, i, o;
                    return t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURI(e.split(",")[1]), 
                    n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), 
                    o = new Uint8Array(i), qq.each(t, (function(e, t) {
                        o[e] = t.charCodeAt(0);
                    })), this._createBlob(i, n);
                },
                _createBlob: function(e, t) {
                    "use strict";
                    var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, i = n && new n;
                    return i ? (i.append(e), i.getBlob(t)) : new Blob([ e ], {
                        type: t
                    });
                }
            });
            var ExifRestorer = function() {
                var e = {
                    KEY_STR: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode64: function(e) {
                        var t, n, i, o, r, a = "", s = "", u = "", l = 0;
                        do {
                            i = (t = e[l++]) >> 2, o = (3 & t) << 4 | (n = e[l++]) >> 4, r = (15 & n) << 2 | (s = e[l++]) >> 6, 
                            u = 63 & s, isNaN(n) ? r = u = 64 : isNaN(s) && (u = 64), a = a + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(u), 
                            t = n = s = "", i = o = r = u = "";
                        } while (l < e.length);
                        return a;
                    },
                    restore: function(e, t) {
                        var n = "data:image/jpeg;base64,";
                        if (!e.match(n)) return t;
                        var i = this.decode64(e.replace(n, "")), o = this.slice2Segments(i), r = this.exifManipulation(t, o);
                        return n + this.encode64(r);
                    },
                    exifManipulation: function(e, t) {
                        var n = this.getExifArray(t), i = this.insertExif(e, n);
                        return new Uint8Array(i);
                    },
                    getExifArray: function(e) {
                        for (var t, n = 0; n < e.length; n++) if (255 == (t = e[n])[0] & 225 == t[1]) return t;
                        return [];
                    },
                    insertExif: function(e, t) {
                        var n = e.replace("data:image/jpeg;base64,", ""), i = this.decode64(n), o = i.indexOf(255, 3), r = i.slice(0, o), a = i.slice(o), s = r;
                        return s = (s = s.concat(t)).concat(a);
                    },
                    slice2Segments: function(e) {
                        for (var t = 0, n = []; !(255 == e[t] & 218 == e[t + 1]); ) {
                            if (255 == e[t] & 216 == e[t + 1]) t += 2; else {
                                var i = t + (256 * e[t + 2] + e[t + 3]) + 2, o = e.slice(t, i);
                                n.push(o), t = i;
                            }
                            if (t > e.length) break;
                        }
                        return n;
                    },
                    decode64: function(e) {
                        var t, n, i, o, r = "", a = "", s = 0, u = [];
                        if (/[^A-Za-z0-9\+\/\=]/g.exec(e)) throw new Error("There were invalid base64 characters in the input text.  Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
                        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        do {
                            t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, 
                            n = (15 & i) << 4 | (o = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, r = (3 & o) << 6 | (a = this.KEY_STR.indexOf(e.charAt(s++))), 
                            u.push(t), 64 != o && u.push(n), 64 != a && u.push(r), t = n = r = "", i = o = a = "";
                        } while (s < e.length);
                        return u;
                    }
                };
                return e;
            }();
            qq.TotalProgress = function(e, t) {
                "use strict";
                var n = {}, i = 0, o = 0, r = -1, a = -1, s = function(t, n) {
                    t === r && n === a || e(t, n), r = t, a = n;
                }, u = function(e) {
                    var i = t(e);
                    i > 0 && (l(e, 0, i), n[e] = {
                        loaded: 0,
                        total: i
                    });
                }, l = function(e, t, r) {
                    var a = n[e] ? n[e].loaded : 0, u = n[e] ? n[e].total : 0;
                    -1 === t && -1 === r ? (i -= a, o -= u) : (t && (i += t - a), r && (o += r - u)), 
                    s(i, o);
                };
                qq.extend(this, {
                    onAllComplete: function(e, t, n) {
                        (0 === t.length || function(e, t) {
                            var n = !0;
                            return qq.each(e, (function(e, i) {
                                if (qq.indexOf(t, i) >= 0) return n = !1, !1;
                            })), n;
                        }(t, n)) && (s(o, o), this.reset());
                    },
                    onStatusChange: function(e, t, i) {
                        i === qq.status.CANCELED || i === qq.status.REJECTED ? function(e) {
                            l(e, -1, -1), delete n[e];
                        }(e) : i === qq.status.SUBMITTING && u(e);
                    },
                    onIndividualProgress: function(e, t, i) {
                        l(e, t, i), n[e] = {
                            loaded: t,
                            total: i
                        };
                    },
                    onNewSize: function(e) {
                        u(e);
                    },
                    reset: function() {
                        n = {}, i = 0, o = 0;
                    }
                });
            }, qq.UiEventHandler = function(e, t) {
                "use strict";
                var n = new qq.DisposeSupport, i = {
                    eventType: "click",
                    attachTo: null,
                    onHandled: function(e, t) {}
                };
                function o(e) {
                    n.attach(e, i.eventType, (function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        i.onHandled(t, e);
                    }));
                }
                qq.extend(this, {
                    addHandler: function(e) {
                        o(e);
                    },
                    dispose: function() {
                        n.dispose();
                    }
                }), qq.extend(t, {
                    getFileIdFromItem: function(e) {
                        return e.qqFileId;
                    },
                    getDisposeSupport: function() {
                        return n;
                    }
                }), qq.extend(i, e), i.attachTo && o(i.attachTo);
            }, qq.FileButtonsClickHandler = function(e) {
                "use strict";
                var t = {
                    templating: null,
                    log: function(e, t) {},
                    onDeleteFile: function(e) {},
                    onCancel: function(e) {},
                    onRetry: function(e) {},
                    onPause: function(e) {},
                    onContinue: function(e) {},
                    onGetName: function(e) {}
                }, n = {
                    cancel: function(e) {
                        t.onCancel(e);
                    },
                    retry: function(e) {
                        t.onRetry(e);
                    },
                    deleteButton: function(e) {
                        t.onDeleteFile(e);
                    },
                    pause: function(e) {
                        t.onPause(e);
                    },
                    continueButton: function(e) {
                        t.onContinue(e);
                    }
                };
                qq.extend(t, e), t.eventType = "click", t.onHandled = function(e, i) {
                    qq.each(n, (function(n, o) {
                        var r, a = n.charAt(0).toUpperCase() + n.slice(1);
                        if (t.templating["is" + a](e)) return r = t.templating.getFileId(e), qq.preventDefault(i), 
                        t.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", t.onGetName(r), r)), 
                        o(r), !1;
                    }));
                }, t.attachTo = t.templating.getFileList(), qq.extend(this, new qq.UiEventHandler(t, {}));
            }, qq.FilenameClickHandler = function(e) {
                "use strict";
                var t = {}, n = {
                    templating: null,
                    log: function(e, t) {},
                    classes: {
                        file: "qq-upload-file",
                        editNameIcon: "qq-edit-filename-icon"
                    },
                    onGetUploadStatus: function(e) {},
                    onGetName: function(e) {}
                };
                qq.extend(n, e), n.eventType = "click", n.onHandled = function(e, i) {
                    if (n.templating.isFileName(e) || n.templating.isEditIcon(e)) {
                        var o = n.templating.getFileId(e);
                        n.onGetUploadStatus(o) === qq.status.SUBMITTED && (n.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", n.onGetName(o), o)), 
                        qq.preventDefault(i), t.handleFilenameEdit(o, e, !0));
                    }
                }, qq.extend(this, new qq.FilenameEditHandler(n, t));
            }, qq.FilenameInputFocusInHandler = function(e, t) {
                "use strict";
                var n = {
                    templating: null,
                    onGetUploadStatus: function(e) {},
                    log: function(e, t) {}
                };
                t || (t = {}), n.eventType = "focusin", n.onHandled = function(e, i) {
                    if (n.templating.isEditInput(e)) {
                        var o = n.templating.getFileId(e);
                        n.onGetUploadStatus(o) === qq.status.SUBMITTED && (n.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", n.onGetName(o), o)), 
                        t.handleFilenameEdit(o, e));
                    }
                }, qq.extend(n, e), qq.extend(this, new qq.FilenameEditHandler(n, t));
            }, qq.FilenameInputFocusHandler = function(e) {
                "use strict";
                e.eventType = "focus", e.attachTo = null, qq.extend(this, new qq.FilenameInputFocusInHandler(e, {}));
            }, qq.FilenameEditHandler = function(e, t) {
                "use strict";
                var n = {
                    templating: null,
                    log: function(e, t) {},
                    onGetUploadStatus: function(e) {},
                    onGetName: function(e) {},
                    onSetName: function(e, t) {},
                    onEditingStatusChange: function(e, t) {}
                };
                function i(e, t) {
                    var i, o = e.value;
                    void 0 !== o && qq.trimStr(o).length > 0 && (void 0 !== (i = function(e) {
                        var t = n.onGetName(e);
                        return qq.getExtension(t);
                    }(t)) && (o = o + "." + i), n.onSetName(t, o)), n.onEditingStatusChange(t, !1);
                }
                qq.extend(n, e), n.attachTo = n.templating.getFileList(), qq.extend(this, new qq.UiEventHandler(n, t)), 
                qq.extend(t, {
                    handleFilenameEdit: function(e, o, r) {
                        var a, s, u, l = n.templating.getEditInput(e);
                        n.onEditingStatusChange(e, !0), l.value = (a = e, s = n.onGetName(a), (u = s.lastIndexOf(".")) > 0 && (s = s.substr(0, u)), 
                        s), r && l.focus(), function(e, n) {
                            t.getDisposeSupport().attach(e, "blur", (function() {
                                i(e, n);
                            }));
                        }(l, e), function(e, n) {
                            t.getDisposeSupport().attach(e, "keyup", (function(t) {
                                13 === (t.keyCode || t.which) && i(e, n);
                            }));
                        }(l, e);
                    }
                });
            }, function(e) {
                "use strict";
                var t, n = [ "uploaderType", "endpointType" ];
                function i(n) {
                    var i, o, u, l = s(n || {}), d = (i = l, o = a("uploaderType"), u = a("endpointType"), 
                    o ? (o = o.charAt(0).toUpperCase() + o.slice(1).toLowerCase(), u ? new qq[u]["FineUploader" + o](i) : new qq["FineUploader" + o](i)) : u ? new qq[u].FineUploader(i) : new qq.FineUploader(i));
                    return r(d), function(n, i) {
                        var o = n.callbacks = {};
                        e.each(i._options.callbacks, (function(n, i) {
                            var r, a;
                            r = (r = /^on(\w+)/.exec(n)[1]).substring(0, 1).toLowerCase() + r.substring(1), 
                            a = t, o[n] = function() {
                                var t, n, o = Array.prototype.slice.call(arguments), s = [];
                                e.each(o, (function(e, t) {
                                    s.push(c(t));
                                })), t = i.apply(this, o);
                                try {
                                    n = a.triggerHandler(r, s);
                                } catch (e) {
                                    qq.log("Caught error in Fine Uploader jQuery event handler: " + e.message, "error");
                                }
                                return null != t ? t : n;
                            };
                        })), i._options.callbacks = o;
                    }(l, d), t;
                }
                function o(e, n) {
                    var i = t.data("fineuploader");
                    if (!n) return void 0 === i ? null : i[e];
                    void 0 === i && (i = {}), i[e] = n, t.data("fineuploader", i);
                }
                function r(e) {
                    return o("uploader", e);
                }
                function a(e, t) {
                    return o(e, t);
                }
                function s(i, o) {
                    var r, u;
                    if (r = void 0 === o ? "basic" !== i.uploaderType ? {
                        element: t[0]
                    } : {} : o, e.each(i, (function(t, i) {
                        e.inArray(t, n) >= 0 ? a(t, i) : i instanceof e ? r[t] = i[0] : e.isPlainObject(i) ? (r[t] = {}, 
                        s(i, r[t])) : e.isArray(i) ? (u = [], e.each(i, (function(t, n) {
                            var i = {};
                            n instanceof e ? e.merge(u, n) : e.isPlainObject(n) ? (s(n, i), u.push(i)) : u.push(n);
                        })), r[t] = u) : r[t] = i;
                    })), void 0 === o) return r;
                }
                function u(t) {
                    return "string" === e.type(t) && !t.match(/^_/) && void 0 !== r()[t];
                }
                function l(e) {
                    var t = [], n = Array.prototype.slice.call(arguments, 1);
                    return s(n, t), c(r()[e].apply(r(), t));
                }
                function c(t) {
                    var n = t;
                    return null == t || "object" != typeof t || 1 !== t.nodeType && 9 !== t.nodeType || !t.cloneNode || (n = e(t)), 
                    n;
                }
                e.fn.fineUploader = function(n) {
                    var o = this, a = arguments, s = [];
                    return this.each((function(c, d) {
                        if (t = e(d), r() && u(n)) {
                            if (s.push(l.apply(o, a)), 1 === o.length) return !1;
                        } else "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fineUploader") : i.apply(o, a);
                    })), 1 === s.length ? s[0] : s.length > 1 ? s : this;
                };
            }(jQuery), function(e) {
                "use strict";
                var t, n = "fineUploaderDnd";
                function i(n) {
                    n || (n = {}), n.dropZoneElements = [ t ];
                    var i, a = r(n);
                    return i = a.callbacks = {}, e.each(new qq.DragAndDrop.callbacks, (function(e, n) {
                        var o, r = e;
                        o = t, i[e] = function() {
                            var e = Array.prototype.slice.call(arguments);
                            return o.triggerHandler(r, e);
                        };
                    })), o(new qq.DragAndDrop(a)), t;
                }
                function o(e) {
                    return function(e, i) {
                        var o = t.data(n);
                        if (!i) return void 0 === o ? null : o[e];
                        void 0 === o && (o = {}), o[e] = i, t.data(n, o);
                    }("dndInstance", e);
                }
                function r(t, n) {
                    var i, o;
                    if (i = void 0 === n ? {} : n, e.each(t, (function(t, n) {
                        n instanceof e ? i[t] = n[0] : e.isPlainObject(n) ? (i[t] = {}, r(n, i[t])) : e.isArray(n) ? (o = [], 
                        e.each(n, (function(t, n) {
                            n instanceof e ? e.merge(o, n) : o.push(n);
                        })), i[t] = o) : i[t] = n;
                    })), void 0 === n) return i;
                }
                function a(t) {
                    return "string" === e.type(t) && "dispose" === t && void 0 !== o()[t];
                }
                function s(e) {
                    var t = [], n = Array.prototype.slice.call(arguments, 1);
                    return r(n, t), o()[e].apply(o(), t);
                }
                e.fn.fineUploaderDnd = function(n) {
                    var r = this, u = arguments, l = [];
                    return this.each((function(c, d) {
                        if (t = e(d), o() && a(n)) {
                            if (l.push(s.apply(r, u)), 1 === r.length) return !1;
                        } else "object" != typeof n && n ? e.error("Method " + n + " does not exist in Fine Uploader's DnD module.") : i.apply(r, u);
                    })), 1 === l.length ? l[0] : l.length > 1 ? l : this;
                };
            }(jQuery), qq.s3 = qq.s3 || {}, qq.s3.util = qq.s3.util || function() {
                "use strict";
                return {
                    AWS_PARAM_PREFIX: "x-amz-meta-",
                    SESSION_TOKEN_PARAM_NAME: "x-amz-security-token",
                    REDUCED_REDUNDANCY_PARAM_NAME: "x-amz-storage-class",
                    REDUCED_REDUNDANCY_PARAM_VALUE: "REDUCED_REDUNDANCY",
                    SERVER_SIDE_ENCRYPTION_PARAM_NAME: "x-amz-server-side-encryption",
                    SERVER_SIDE_ENCRYPTION_PARAM_VALUE: "AES256",
                    getBucket: function(e) {
                        var t;
                        return qq.each([ /^(?:https?:\/\/)?([a-z0-9.\-_]+)\.s3(?:-[a-z0-9\-]+)?\.amazonaws\.com/i, /^(?:https?:\/\/)?s3(?:-[a-z0-9\-]+)?\.amazonaws\.com\/([a-z0-9.\-_]+)/i, /^(?:https?:\/\/)?([a-z0-9.\-_]+)/i ], (function(n, i) {
                            var o = i.exec(e);
                            if (o) return t = o[1], !1;
                        })), t;
                    },
                    getPolicy: function(e) {
                        var t = {}, n = [], i = e.bucket, o = e.key, r = e.acl, a = e.type, s = new Date, u = e.expectedStatus, l = e.sessionToken, c = e.params, d = qq.s3.util.getSuccessRedirectAbsoluteUrl(e.successRedirectUrl), p = e.minFileSize, q = e.maxFileSize, h = e.reducedRedundancy, f = e.serverSideEncryption;
                        return t.expiration = qq.s3.util.getPolicyExpirationDate(s), n.push({
                            acl: r
                        }), n.push({
                            bucket: i
                        }), a && n.push({
                            "Content-Type": a
                        }), u && n.push({
                            success_action_status: u.toString()
                        }), d && n.push({
                            success_action_redirect: d
                        }), h && (n.push({}), n[n.length - 1][qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                        l && (n.push({}), n[n.length - 1][qq.s3.util.SESSION_TOKEN_PARAM_NAME] = l), f && (n.push({}), 
                        n[n.length - 1][qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                        n.push({
                            key: o
                        }), qq.each(c, (function(e, t) {
                            var i = {};
                            i[qq.s3.util.AWS_PARAM_PREFIX + e] = encodeURIComponent(t), n.push(i);
                        })), t.conditions = n, qq.s3.util.enforceSizeLimits(t, p, q), t;
                    },
                    refreshPolicyCredentials: function(e, t) {
                        var n = !1;
                        qq.each(e.conditions, (function(e, i) {
                            qq.each(i, (function(e, o) {
                                e === qq.s3.util.SESSION_TOKEN_PARAM_NAME && (i[e] = t, n = !0);
                            }));
                        })), n || (e.conditions.push({}), e.conditions[e.conditions.length - 1][qq.s3.util.SESSION_TOKEN_PARAM_NAME] = t);
                    },
                    generateAwsParams: function(e, t) {
                        var n = {}, i = e.params, o = new qq.Promise, r = qq.s3.util.getPolicy(e), a = e.sessionToken, s = e.type, u = e.key, l = e.accessKey, c = e.acl, d = e.expectedStatus, p = qq.s3.util.getSuccessRedirectAbsoluteUrl(e.successRedirectUrl), q = e.reducedRedundancy, h = e.serverSideEncryption, f = e.log;
                        return n.key = u, n.AWSAccessKeyId = l, s && (n["Content-Type"] = s), d && (n.success_action_status = d), 
                        p && (n.success_action_redirect = p), q && (n[qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                        h && (n[qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                        a && (n[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = a), n.acl = c, qq.each(i, (function(e, t) {
                            var i = qq.s3.util.AWS_PARAM_PREFIX + e;
                            n[i] = encodeURIComponent(t);
                        })), t(r).then((function(e, t, i) {
                            n.policy = e.policy, n.signature = e.signature, t && (n.AWSAccessKeyId = t), i && (n[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = i), 
                            o.success(n);
                        }), (function(e) {
                            f("Policy signing failed.  " + (e = e || "Can't continue further with request to S3 as we did not receive a valid signature and policy from the server."), "error"), 
                            o.failure(e);
                        })), o;
                    },
                    enforceSizeLimits: function(e, t, n) {
                        var i = t < 0 ? 0 : t, o = n <= 0 ? 9007199254740992 : n;
                        (t > 0 || n > 0) && e.conditions.push([ "content-length-range", i.toString(), o.toString() ]);
                    },
                    getPolicyExpirationDate: function(e) {
                        if (e.setMinutes(e.getMinutes() + 5), Date.prototype.toISOString) return e.toISOString();
                        var t = function(e) {
                            var t = String(e);
                            return 1 === t.length && (t = "0" + t), t;
                        };
                        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
                    },
                    parseIframeResponse: function(e) {
                        var t = (e.contentDocument || e.contentWindow.document).location.search, n = /bucket=(.+)&key=(.+)&etag=(.+)/.exec(t);
                        if (n) return {
                            bucket: n[1],
                            key: n[2],
                            etag: n[3].replace(/%22/g, "")
                        };
                    },
                    getSuccessRedirectAbsoluteUrl: function(e) {
                        if (e) {
                            var t, n = document.createElement("div");
                            return qq.ie7() ? (n.innerHTML = "<a href='" + e + "'></a>", (t = n.firstChild).href) : ((t = document.createElement("a")).href = e, 
                            t.href = t.href, t.href);
                        }
                    },
                    encodeQueryStringParam: function(e) {
                        var t = encodeURIComponent(e);
                        return (t = (t = t.replace(/[!'()]/g, escape)).replace(/\*/g, "%2A")).replace(/%20/g, "+");
                    }
                };
            }(), function() {
                "use strict";
                qq.nonTraditionalBasePublicApi = {
                    setUploadSuccessParams: function(e, t) {
                        this._uploadSuccessParamsStore.set(e, t);
                    },
                    setUploadSuccessEndpoint: function(e, t) {
                        this._uploadSuccessEndpointStore.set(e, t);
                    }
                }, qq.nonTraditionalBasePrivateApi = {
                    _onComplete: function(e, t, n, i) {
                        var o, r, a = !!n.success, s = this, u = arguments, l = this._uploadSuccessEndpointStore.get(e), c = this._options.uploadSuccess.customHeaders, d = this._options.cors, p = new qq.Promise, q = this._uploadSuccessParamsStore.get(e), h = this._paramsStore.get(e), f = function(t) {
                            delete s._failedSuccessRequestCallbacks[e], qq.extend(n, t), qq.FineUploaderBasic.prototype._onComplete.apply(s, u), 
                            p.success(t);
                        }, m = function(r) {
                            var a = o;
                            qq.extend(n, r), n && n.reset && (a = null), a ? s._failedSuccessRequestCallbacks[e] = a : delete s._failedSuccessRequestCallbacks[e], 
                            s._onAutoRetry(e, t, n, i, a) || (qq.FineUploaderBasic.prototype._onComplete.apply(s, u), 
                            p.failure(r));
                        };
                        return a && l ? (r = new qq.UploadSuccessAjaxRequester({
                            endpoint: l,
                            customHeaders: c,
                            cors: d,
                            log: qq.bind(this.log, this)
                        }), qq.extend(q, s._getEndpointSpecificParams(e, n, i), !0), h && qq.extend(q, h, !0), 
                        (o = qq.bind((function() {
                            r.sendSuccessRequest(e, q).then(f, m);
                        }), s))(), p) : qq.FineUploaderBasic.prototype._onComplete.apply(this, arguments);
                    },
                    _manualRetry: function(e) {
                        var t = this._failedSuccessRequestCallbacks[e];
                        return qq.FineUploaderBasic.prototype._manualRetry.call(this, e, t);
                    }
                };
            }(), function() {
                "use strict";
                qq.s3.FineUploaderBasic = function(e) {
                    var t = {
                        request: {
                            accessKey: null
                        },
                        objectProperties: {
                            acl: "private",
                            bucket: qq.bind((function(e) {
                                return qq.s3.util.getBucket(this.getEndpoint(e));
                            }), this),
                            key: "uuid",
                            reducedRedundancy: !1,
                            serverSideEncryption: !1
                        },
                        credentials: {
                            accessKey: null,
                            secretKey: null,
                            expiration: null,
                            sessionToken: null
                        },
                        signature: {
                            endpoint: null,
                            customHeaders: {}
                        },
                        uploadSuccess: {
                            endpoint: null,
                            params: {},
                            customHeaders: {}
                        },
                        iframeSupport: {
                            localBlankPagePath: null
                        },
                        chunking: {
                            partSize: 5242880
                        },
                        cors: {
                            allowXdr: !0
                        },
                        callbacks: {
                            onCredentialsExpired: function() {}
                        }
                    };
                    qq.extend(t, e, !0), this.setCredentials(t.credentials, !0) || (this._currentCredentials.accessKey = t.request.accessKey), 
                    this._aclStore = this._createStore(t.objectProperties.acl), qq.FineUploaderBasic.call(this, t), 
                    this._uploadSuccessParamsStore = this._createStore(this._options.uploadSuccess.params), 
                    this._uploadSuccessEndpointStore = this._createStore(this._options.uploadSuccess.endpoint), 
                    this._failedSuccessRequestCallbacks = {}, this._cannedKeys = {}, this._cannedBuckets = {}, 
                    this._buckets = {};
                }, qq.extend(qq.s3.FineUploaderBasic.prototype, qq.basePublicApi), qq.extend(qq.s3.FineUploaderBasic.prototype, qq.basePrivateApi), 
                qq.extend(qq.s3.FineUploaderBasic.prototype, qq.nonTraditionalBasePublicApi), qq.extend(qq.s3.FineUploaderBasic.prototype, qq.nonTraditionalBasePrivateApi), 
                qq.extend(qq.s3.FineUploaderBasic.prototype, {
                    getBucket: function(e) {
                        return null == this._cannedBuckets[e] ? this._buckets[e] : this._cannedBuckets[e];
                    },
                    getKey: function(e) {
                        return null == this._cannedKeys[e] ? this._handler.getThirdPartyFileId(e) : this._cannedKeys[e];
                    },
                    reset: function() {
                        qq.FineUploaderBasic.prototype.reset.call(this), this._failedSuccessRequestCallbacks = [], 
                        this._buckets = {};
                    },
                    setCredentials: function(e, t) {
                        if (e && e.secretKey) {
                            if (!e.accessKey) throw new qq.Error("Invalid credentials: no accessKey");
                            if (!e.expiration) throw new qq.Error("Invalid credentials: no expiration");
                            return this._currentCredentials = qq.extend({}, e), qq.isString(e.expiration) && (this._currentCredentials.expiration = new Date(e.expiration)), 
                            !0;
                        }
                        if (!t) throw new qq.Error("Invalid credentials parameter!");
                        this._currentCredentials = {};
                    },
                    setAcl: function(e, t) {
                        this._aclStore.set(e, t);
                    },
                    _createUploadHandler: function() {
                        var e = this, t = {
                            aclStore: this._aclStore,
                            getBucket: qq.bind(this._determineBucket, this),
                            getKeyName: qq.bind(this._determineKeyName, this),
                            iframeSupport: this._options.iframeSupport,
                            objectProperties: this._options.objectProperties,
                            signature: this._options.signature,
                            validation: {
                                minSizeLimit: this._options.validation.minSizeLimit,
                                maxSizeLimit: this._options.validation.sizeLimit
                            }
                        };
                        return qq.override(this._endpointStore, (function(e) {
                            return {
                                get: function(t) {
                                    var n = e.get(t);
                                    return n.indexOf("http") < 0 ? "http://" + n : n;
                                }
                            };
                        })), qq.override(this._paramsStore, (function(e) {
                            return {
                                get: function(t) {
                                    var n = e.get(t), i = {};
                                    return qq.each(n, (function(e, t) {
                                        i[e.toLowerCase()] = qq.isFunction(t) ? t() : t;
                                    })), i;
                                }
                            };
                        })), t.signature.credentialsProvider = {
                            get: function() {
                                return e._currentCredentials;
                            },
                            onExpired: function() {
                                var t = new qq.Promise, n = e._options.callbacks.onCredentialsExpired();
                                return qq.isGenericPromise(n) ? n.then((function(n) {
                                    try {
                                        e.setCredentials(n), t.success();
                                    } catch (n) {
                                        e.log("Invalid credentials returned from onCredentialsExpired callback! (" + n.message + ")", "error"), 
                                        t.failure("onCredentialsExpired did not return valid credentials.");
                                    }
                                }), (function(n) {
                                    e.log("onCredentialsExpired callback indicated failure! (" + n + ")", "error"), 
                                    t.failure("onCredentialsExpired callback failed.");
                                })) : (e.log("onCredentialsExpired callback did not return a promise!", "error"), 
                                t.failure("Unexpected return value for onCredentialsExpired.")), t;
                            }
                        }, qq.FineUploaderBasic.prototype._createUploadHandler.call(this, t, "s3");
                    },
                    _determineBucket: function(e) {
                        var t = this._options.objectProperties.bucket, n = new qq.Promise, i = this;
                        return qq.isFunction(t) ? (t = t(e), qq.isGenericPromise(t) ? n = t : n.success(t)) : qq.isString(t) && n.success(t), 
                        n.then((function(t) {
                            i._buckets[e] = t;
                        }), (function(t) {
                            qq.log("Problem determining bucket for ID " + e + " (" + t + ")", "error");
                        })), n;
                    },
                    _determineKeyName: function(e, t) {
                        var n = new qq.Promise, i = this._options.objectProperties.key, o = qq.getExtension(t), r = n.failure, a = function(e, t) {
                            var i = e;
                            void 0 !== t && (i += "." + t), n.success(i);
                        };
                        switch (i) {
                          case "uuid":
                            a(this.getUuid(e), o);
                            break;

                          case "filename":
                            a(t);
                            break;

                          default:
                            qq.isFunction(i) ? this._handleKeynameFunction(i, e, a, r) : (this.log(i + " is not a valid value for the s3.keyname option!", "error"), 
                            r());
                        }
                        return n;
                    },
                    _handleKeynameFunction: function(e, t, n, i) {
                        var o = this, r = function(e) {
                            n(e);
                        }, a = function(e) {
                            o.log(qq.format("Failed to retrieve key name for {}.  Reason: {}", t, e || "null"), "error"), 
                            i(e);
                        }, s = e.call(this, t);
                        qq.isGenericPromise(s) ? s.then(r, a) : null == s ? a() : r(s);
                    },
                    _getEndpointSpecificParams: function(e, t, n) {
                        var i = {
                            key: this.getKey(e),
                            uuid: this.getUuid(e),
                            name: this.getName(e),
                            bucket: this.getBucket(e)
                        };
                        return n && n.getResponseHeader("ETag") ? i.etag = n.getResponseHeader("ETag") : t.etag && (i.etag = t.etag), 
                        i;
                    },
                    _onSubmitDelete: function(e, t) {
                        var n = {
                            key: this.getKey(e),
                            bucket: this.getBucket(e)
                        };
                        return qq.FineUploaderBasic.prototype._onSubmitDelete.call(this, e, t, n);
                    },
                    _addCannedFile: function(e) {
                        var t;
                        if (null == e.s3Key) throw new qq.Error("Did not find s3Key property in server session response.  This is required!");
                        return t = qq.FineUploaderBasic.prototype._addCannedFile.apply(this, arguments), 
                        this._cannedKeys[t] = e.s3Key, this._cannedBuckets[t] = e.s3Bucket, t;
                    }
                });
            }(), qq.s3.RequestSigner = function(e) {
                "use strict";
                var t, n, i = this, o = {}, r = {
                    expectingPolicy: !1,
                    method: "POST",
                    signatureSpec: {
                        credentialsProvider: {},
                        endpoint: null,
                        customHeaders: {}
                    },
                    maxConnections: 3,
                    paramsStore: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {}
                };
                function a(e, t, i, o) {
                    var r;
                    e.signatureConstructor ? (o && ((r = e.signatureConstructor.getHeaders())[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = o, 
                    e.signatureConstructor.withHeaders(r)), function(e, t) {
                        var i = CryptoJS.enc.Utf8.parse(e), o = CryptoJS.HmacSHA1(i, n.get().secretKey), r = CryptoJS.enc.Base64.stringify(o);
                        t.success({
                            signature: r
                        });
                    }(e.signatureConstructor.getToSign().stringToSign, t)) : (o && qq.s3.util.refreshPolicyCredentials(e, o), 
                    function(e, t, i, o) {
                        var r = JSON.stringify(e), a = CryptoJS.enc.Utf8.parse(r), s = CryptoJS.enc.Base64.stringify(a), u = CryptoJS.HmacSHA1(s, n.get().secretKey), l = CryptoJS.enc.Base64.stringify(u);
                        t.success({
                            policy: s,
                            signature: l
                        }, i, o);
                    }(e, t, i, o));
                }
                qq.extend(r, e, !0), n = r.signatureSpec.credentialsProvider, t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    method: r.method,
                    contentType: "application/json; charset=utf-8",
                    endpointStore: {
                        get: function() {
                            return r.signatureSpec.endpoint;
                        }
                    },
                    paramsStore: r.paramsStore,
                    maxConnections: r.maxConnections,
                    customHeaders: r.signatureSpec.customHeaders,
                    log: r.log,
                    onComplete: function(e, t, n) {
                        var i, a, s = t.responseText, u = o[e].promise;
                        if (delete o[e], s) try {
                            a = qq.parseJson(s);
                        } catch (e) {
                            r.log("Error attempting to parse signature response: " + e, "error");
                        }
                        a && a.invalid ? (n = !0, i = "Invalid policy document or request headers!") : a ? r.expectingPolicy && !a.policy ? (n = !0, 
                        i = "Response does not include the base64 encoded policy!") : a.signature || (n = !0, 
                        i = "Response does not include the signature!") : (n = !0, i = "Received an empty or invalid response from the server!"), 
                        n ? (i && r.log(i, "error"), u.failure(i, t)) : u.success(a);
                    },
                    cors: r.cors,
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    getSignature: function(e, i) {
                        var s = i, u = new qq.Promise;
                        return n.get().secretKey && window.CryptoJS ? n.get().expiration.getTime() > Date.now() ? a(i, u) : n.onExpired().then((function() {
                            a(i, u, n.get().accessKey, n.get().sessionToken);
                        }), (function(e) {
                            r.log("Attempt to update expired credentials apparently failed! Unable to sign request.  ", "error"), 
                            u.failure("Unable to sign request - expired credentials.");
                        })) : (r.log("Submitting S3 signature request for " + e), s.signatureConstructor && (s = {
                            headers: s.signatureConstructor.getToSign().stringToSign
                        }), t.initTransport(e).withParams(s).send(), o[e] = {
                            promise: u
                        }), u;
                    },
                    constructStringToSign: function(e, t, o) {
                        var a, s, u, l, c = {};
                        return {
                            withHeaders: function(e) {
                                return c = e, this;
                            },
                            withUploadId: function(e) {
                                return a = e, this;
                            },
                            withContentType: function(e) {
                                return s = e, this;
                            },
                            withPartNum: function(e) {
                                return u = e, this;
                            },
                            getToSign: function() {
                                var d = n.get().sessionToken, p = r.signatureSpec.params && r.signatureSpec.params.drift ? r.signatureSpec.params.drift : 0;
                                return c["x-amz-date"] = new Date(Date.now() + p).toUTCString(), d && (c[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = d), 
                                l = function(e, t, n, o, r, a, s) {
                                    var u, l = "POST", c = [], d = "";
                                    switch (e) {
                                      case i.REQUEST_TYPE.MULTIPART_ABORT:
                                        l = "DELETE", u = qq.format("uploadId={}", a);
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_INITIATE:
                                        u = "uploads";
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_COMPLETE:
                                        u = qq.format("uploadId={}", a);
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_UPLOAD:
                                        l = "PUT", u = qq.format("partNumber={}&uploadId={}", s, a);
                                    }
                                    return u = n + "?" + u, qq.each(r, (function(e) {
                                        c.push(e);
                                    })), c.sort(), qq.each(c, (function(e, t) {
                                        d += t + ":" + r[t] + "\n";
                                    })), {
                                        toSign: qq.format("{}\n\n{}\n\n{}/{}/{}", l, o || "", d || "\n", t, u),
                                        endOfUrl: u
                                    };
                                }(e, t, o, s, c, a, u), {
                                    headers: (s && (c["Content-Type"] = s), c),
                                    endOfUrl: l.endOfUrl,
                                    stringToSign: l.toSign
                                };
                            },
                            getHeaders: function() {
                                return qq.extend({}, c);
                            },
                            getEndOfUrl: function() {
                                return l && l.endOfUrl;
                            }
                        };
                    }
                });
            }, qq.s3.RequestSigner.prototype.REQUEST_TYPE = {
                MULTIPART_INITIATE: "multipart_initiate",
                MULTIPART_COMPLETE: "multipart_complete",
                MULTIPART_ABORT: "multipart_abort",
                MULTIPART_UPLOAD: "multipart_upload"
            }, qq.UploadSuccessAjaxRequester = function(e) {
                "use strict";
                var t, n = [], i = {
                    method: "POST",
                    endpoint: null,
                    maxConnections: 3,
                    customHeaders: {},
                    paramsStore: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {}
                };
                qq.extend(i, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    method: i.method,
                    endpointStore: {
                        get: function() {
                            return i.endpoint;
                        }
                    },
                    paramsStore: i.paramsStore,
                    maxConnections: i.maxConnections,
                    customHeaders: i.customHeaders,
                    log: i.log,
                    onComplete: function(e, t, o) {
                        var r, a = n[e], s = t.responseText, u = {
                            success: !0
                        }, l = {
                            success: !1
                        };
                        delete n[e], i.log(qq.format("Received the following response body to an upload success request for id {}: {}", e, s));
                        try {
                            r = qq.parseJson(s), o || r && (r.error || !1 === r.success) ? (i.log("Upload success request was rejected by the server.", "error"), 
                            a.failure(qq.extend(r, l))) : (i.log("Upload success was acknowledged by the server."), 
                            a.success(qq.extend(r, u)));
                        } catch (t) {
                            o ? (i.log(qq.format("Your server indicated failure in its upload success request response for id {}!", e), "error"), 
                            a.failure(l)) : (i.log("Upload success was acknowledged by the server."), a.success(u));
                        }
                    },
                    cors: i.cors,
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    sendSuccessRequest: function(e, o) {
                        var r = new qq.Promise;
                        return i.log("Submitting upload success request/notification for " + e), t.initTransport(e).withParams(o).send(), 
                        n[e] = r, r;
                    }
                });
            }, qq.s3.InitiateMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {}, o = {
                    filenameParam: "qqfilename",
                    method: "POST",
                    endpointStore: null,
                    paramsStore: null,
                    signatureSpec: null,
                    aclStore: null,
                    reducedRedundancy: !1,
                    serverSideEncryption: !1,
                    maxConnections: 3,
                    getContentType: function(e) {},
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    getName: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(o, e), n = new qq.s3.RequestSigner({
                    signatureSpec: o.signatureSpec,
                    cors: o.cors,
                    log: o.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    method: o.method,
                    contentType: null,
                    endpointStore: o.endpointStore,
                    maxConnections: o.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var r, a, s, u, l, c = i[e], d = (new DOMParser).parseFromString(t.responseText, "application/xml");
                        delete i[e], n ? (l = t.status, (a = d.getElementsByTagName("Message")).length > 0 && (u = a[0].textContent)) : (r = d.getElementsByTagName("UploadId")).length > 0 ? s = r[0].textContent : u = "Upload ID missing from request", 
                        void 0 === s ? (u ? o.log(qq.format("Specific problem detected initiating multipart upload request for {}: '{}'.", e, u), "error") : o.log(qq.format("Unexplained error with initiate multipart upload request for {}.  Status code {}.", e, l), "error"), 
                        c.failure("Problem initiating upload request.", t)) : (o.log(qq.format("Initiate multipart upload request successful for {}.  Upload ID is {}", e, s)), 
                        c.success(s, t));
                    },
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    send: function(e) {
                        var r = new qq.Promise;
                        return function(e) {
                            var t, i = o.getBucket(e), r = {}, a = new qq.Promise, s = o.getKey(e);
                            return r["x-amz-acl"] = o.aclStore.get(e), o.reducedRedundancy && (r[qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                            o.serverSideEncryption && (r[qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                            r[qq.s3.util.AWS_PARAM_PREFIX + o.filenameParam] = encodeURIComponent(o.getName(e)), 
                            qq.each(o.paramsStore.get(e), (function(e, t) {
                                r[qq.s3.util.AWS_PARAM_PREFIX + e] = encodeURIComponent(t);
                            })), t = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_INITIATE, i, s).withContentType(o.getContentType(e)).withHeaders(r), 
                            n.getSignature(e, {
                                signatureConstructor: t
                            }).then((function(e) {
                                (r = t.getHeaders()).Authorization = "AWS " + o.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                a.success(r, t.getEndOfUrl());
                            }), a.failure), a;
                        }(e).then((function(n, a) {
                            o.log("Submitting S3 initiate multipart upload request for " + e), i[e] = r, t.initTransport(e).withPath(a).withHeaders(n).send();
                        }), r.failure), r;
                    }
                });
            }, qq.s3.CompleteMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {}, o = {
                    method: "POST",
                    contentType: "text/xml",
                    endpointStore: null,
                    signatureSpec: null,
                    maxConnections: 3,
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(o, e), n = new qq.s3.RequestSigner({
                    signatureSpec: o.signatureSpec,
                    cors: o.cors,
                    log: o.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    method: o.method,
                    contentType: "application/xml; charset=UTF-8",
                    endpointStore: o.endpointStore,
                    maxConnections: o.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var r = i[e], a = new DOMParser, s = o.getBucket(e), u = (o.getKey(e), a.parseFromString(t.responseText, "application/xml")), l = u.getElementsByTagName("Bucket"), c = u.getElementsByTagName("Key");
                        delete i[e], o.log(qq.format("Complete response status {}, body = {}", t.status, t.responseText)), 
                        n ? o.log(qq.format("Complete Multipart Upload request for {} failed with status {}.", e, t.status), "error") : l.length && c.length ? l[0].textContent !== s && (n = !0, 
                        o.log(qq.format("Wrong bucket in response to Complete Multipart Upload request for {}.", e), "error")) : (n = !0, 
                        o.log(qq.format("Missing bucket and/or key in response to Complete Multipart Upload request for {}.", e), "error")), 
                        n ? r.failure("Problem combining the file parts!", t) : r.success({}, t);
                    },
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    send: function(e, r, a) {
                        var s = new qq.Promise;
                        return function(e, t) {
                            var i = {}, r = new qq.Promise, a = o.getBucket(e), s = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_COMPLETE, a, o.getKey(e)).withUploadId(t).withContentType("application/xml; charset=UTF-8");
                            return n.getSignature(e, {
                                signatureConstructor: s
                            }).then((function(e) {
                                (i = s.getHeaders()).Authorization = "AWS " + o.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                r.success(i, s.getEndOfUrl());
                            }), r.failure), r;
                        }(e, r).then((function(n, r) {
                            var u = function(e) {
                                var t = document.implementation.createDocument(null, "CompleteMultipartUpload", null);
                                return e.sort((function(e, t) {
                                    return e.part - t.part;
                                })), qq.each(e, (function(e, n) {
                                    var i = n.part, o = n.etag, r = t.createElement("Part"), a = t.createElement("PartNumber"), s = t.createTextNode(i), u = t.createTextNode(o), l = t.createElement("ETag");
                                    l.appendChild(u), a.appendChild(s), r.appendChild(a), r.appendChild(l), qq(t).children()[0].appendChild(r);
                                })), (new XMLSerializer).serializeToString(t);
                            }(a);
                            o.log("Submitting S3 complete multipart upload request for " + e), i[e] = s, delete n["Content-Type"], 
                            t.initTransport(e).withPath(r).withHeaders(n).withPayload(u).send();
                        }), s.failure), s;
                    }
                });
            }, qq.s3.AbortMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {
                    method: "DELETE",
                    endpointStore: null,
                    signatureSpec: null,
                    maxConnections: 3,
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(i, e), n = new qq.s3.RequestSigner({
                    signatureSpec: i.signatureSpec,
                    cors: i.cors,
                    log: i.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "DELETE" ],
                    method: i.method,
                    contentType: null,
                    endpointStore: i.endpointStore,
                    maxConnections: i.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: i.log,
                    onComplete: function(e, t, n) {
                        var o, r = (new DOMParser).parseFromString(t.responseText, "application/xml"), a = r.getElementsByTagName("Error");
                        i.log(qq.format("Abort response status {}, body = {}", t.status, t.responseText)), 
                        n ? i.log(qq.format("Abort Multipart Upload request for {} failed with status {}.", e, t.status), "error") : a.length ? (n = !0, 
                        o = r.getElementsByTagName("Message")[0].textContent, i.log(qq.format("Failed to Abort Multipart Upload request for {}.  Error: {}", e, o), "error")) : i.log(qq.format("Abort MPU request succeeded for file ID {}.", e));
                    },
                    successfulResponseCodes: {
                        DELETE: [ 204 ]
                    }
                })), qq.extend(this, {
                    send: function(e, o) {
                        (function(e, t) {
                            var o = {}, r = new qq.Promise, a = (i.endpointStore.get(e), i.getBucket(e)), s = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_ABORT, a, i.getKey(e)).withUploadId(t);
                            return n.getSignature(e, {
                                signatureConstructor: s
                            }).then((function(e) {
                                (o = s.getHeaders()).Authorization = "AWS " + i.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                r.success(o, s.getEndOfUrl());
                            }), r.failure), r;
                        })(e, o).then((function(n, o) {
                            i.log("Submitting S3 Abort multipart upload request for " + e), t.initTransport(e).withPath(o).withHeaders(n).send();
                        }));
                    }
                });
            }, qq.s3.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = t.getName, i = t.log, o = e.getBucket, r = e.getKeyName, a = e.filenameParam, s = e.paramsStore, u = e.endpointStore, l = e.aclStore, c = e.objectProperties.reducedRedundancy, d = e.objectProperties.serverSideEncryption, p = e.validation, q = e.signature, h = this, f = e.signature.credentialsProvider, m = {
                    combine: function(e) {
                        var t = h._getPersistableData(e).uploadId, n = h._getPersistableData(e).etags, i = new qq.Promise;
                        return g.completeMultipart.send(e, t, n).then(i.success, (function(t, n) {
                            i.failure(v.done(e, n).response, n);
                        })), i;
                    },
                    done: function(e, t, n) {
                        var i;
                        v.response.parse(e, t).success && (i = t.getResponseHeader("ETag"), h._getPersistableData(e).etags || (h._getPersistableData(e).etags = []), 
                        h._getPersistableData(e).etags.push({
                            part: n + 1,
                            etag: i
                        }));
                    },
                    initHeaders: function(t, n) {
                        var i = {}, o = (e.endpointStore.get(t), v.bucket.getName(t)), r = v.key.urlSafe(t), a = new qq.Promise, s = g.restSignature.constructStringToSign(g.restSignature.REQUEST_TYPE.MULTIPART_UPLOAD, o, r).withPartNum(n + 1).withUploadId(h._getPersistableData(t).uploadId);
                        return g.restSignature.getSignature(t + "." + n, {
                            signatureConstructor: s
                        }).then((function(e) {
                            (i = s.getHeaders()).Authorization = "AWS " + f.get().accessKey + ":" + e.signature, 
                            a.success(i, s.getEndOfUrl());
                        }), a.failure), a;
                    },
                    put: function(t, n) {
                        var i = h._createXhr(t, n), o = h._getChunkData(t, n), r = e.endpointStore.get(t), a = new qq.Promise;
                        return m.initHeaders(t, n).then((function(e, s) {
                            var u = r + "/" + s;
                            h._registerProgressHandler(t, n, o.size), v.track(t, i, n).then(a.success, a.failure), 
                            i.open("PUT", u, !0);
                            var l = !1;
                            qq.each(e, (function(e, t) {
                                "Content-Type" === e && (l = !0), i.setRequestHeader(e, t);
                            })), l || i.setRequestHeader("Content-Type", ""), i.send(o.blob);
                        }), (function() {
                            a.failure({
                                error: "Problem signing the chunk!"
                            }, i);
                        })), a;
                    },
                    send: function(e, t) {
                        var n = new qq.Promise;
                        return m.setup(e).then((function() {
                            m.put(e, t).then(n.success, n.failure);
                        }), (function(e, t) {
                            n.failure({
                                error: e
                            }, t);
                        })), n;
                    },
                    setup: function(e) {
                        var t = new qq.Promise, n = h._getPersistableData(e).uploadId, i = new qq.Promise;
                        return n ? n instanceof qq.Promise ? n.then((function(e) {
                            t.success(e);
                        })) : t.success(n) : (h._getPersistableData(e).uploadId = i, g.initiateMultipart.send(e).then((function(n) {
                            h._getPersistableData(e).uploadId = n, i.success(n), t.success(n);
                        }), (function(n, o) {
                            h._getPersistableData(e).uploadId = null, t.failure(n, o), i.failure(n);
                        }))), t;
                    }
                }, g = {
                    abortMultipart: new qq.s3.AbortMultipartAjaxRequester({
                        endpointStore: u,
                        signatureSpec: q,
                        cors: e.cors,
                        log: i,
                        getBucket: function(e) {
                            return v.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return v.key.urlSafe(e);
                        }
                    }),
                    completeMultipart: new qq.s3.CompleteMultipartAjaxRequester({
                        endpointStore: u,
                        signatureSpec: q,
                        cors: e.cors,
                        log: i,
                        getBucket: function(e) {
                            return v.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return v.key.urlSafe(e);
                        }
                    }),
                    initiateMultipart: new qq.s3.InitiateMultipartAjaxRequester({
                        filenameParam: a,
                        endpointStore: u,
                        paramsStore: s,
                        signatureSpec: q,
                        aclStore: l,
                        reducedRedundancy: c,
                        serverSideEncryption: d,
                        cors: e.cors,
                        log: i,
                        getContentType: function(e) {
                            return h._getMimeType(e);
                        },
                        getBucket: function(e) {
                            return v.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return v.key.urlSafe(e);
                        },
                        getName: function(e) {
                            return n(e);
                        }
                    }),
                    policySignature: new qq.s3.RequestSigner({
                        expectingPolicy: !0,
                        signatureSpec: q,
                        cors: e.cors,
                        log: i
                    }),
                    restSignature: new qq.s3.RequestSigner({
                        signatureSpec: q,
                        cors: e.cors,
                        log: i
                    })
                }, _ = {
                    initParams: function(e) {
                        var t = s.get(e);
                        return t[a] = n(e), qq.s3.util.generateAwsParams({
                            endpoint: u.get(e),
                            params: t,
                            type: h._getMimeType(e),
                            bucket: v.bucket.getName(e),
                            key: h.getThirdPartyFileId(e),
                            accessKey: f.get().accessKey,
                            sessionToken: f.get().sessionToken,
                            acl: l.get(e),
                            expectedStatus: 200,
                            minFileSize: p.minSizeLimit,
                            maxFileSize: p.maxSizeLimit,
                            reducedRedundancy: c,
                            serverSideEncryption: d,
                            log: i
                        }, qq.bind(g.policySignature.getSignature, this, e));
                    },
                    send: function(e) {
                        var t = new qq.Promise, n = h._createXhr(e), o = h.getFile(e);
                        return h._registerProgressHandler(e), v.track(e, n).then(t.success, t.failure), 
                        _.setup(e, n, o).then((function(t) {
                            i("Sending upload request for " + e), n.send(t);
                        }), t.failure), t;
                    },
                    setup: function(e, t, n) {
                        var i = new FormData, o = u.get(e), r = new qq.Promise;
                        return _.initParams(e).then((function(e) {
                            t.open("POST", o, !0), qq.obj2FormData(e, i), i.append("file", n), r.success(i);
                        }), (function(e) {
                            r.failure({
                                error: e
                            });
                        })), r;
                    }
                }, v = {
                    bucket: {
                        promise: function(e) {
                            var t = new qq.Promise, n = h._getFileState(e).bucket;
                            return n ? t.success(n) : o(e).then((function(n) {
                                h._getFileState(e).bucket = n, t.success(n);
                            }), t.failure), t;
                        },
                        getName: function(e) {
                            return h._getFileState(e).bucket;
                        }
                    },
                    done: function(e, t) {
                        var n = v.response.parse(e, t), o = !0 !== n.success;
                        return o && v.response.shouldReset(n.code) && (i("This is an unrecoverable error, we must restart the upload entirely on the next retry attempt.", "error"), 
                        n.reset = !0), {
                            success: !o,
                            response: n
                        };
                    },
                    key: {
                        promise: function(e) {
                            var t = new qq.Promise, i = h.getThirdPartyFileId(e);
                            return null == i ? (i = new qq.Promise, h._setThirdPartyFileId(e, i), r(e, n(e)).then((function(n) {
                                h._setThirdPartyFileId(e, n), t.success(n);
                            }), (function(n) {
                                h._setThirdPartyFileId(e, null), t.failure(n);
                            }))) : qq.isGenericPromise(i) ? t.then(i.success, i.failure) : t.success(i), t;
                        },
                        urlSafe: function(e) {
                            return encodeURIComponent(h.getThirdPartyFileId(e));
                        }
                    },
                    response: {
                        parse: function(e, t) {
                            var n, o = {};
                            try {
                                i(qq.format("Received response status {} with body: {}", t.status, t.responseText)), 
                                200 === t.status ? o.success = !0 : (n = v.response.parseError(t.responseText)) && (o.error = n.message, 
                                o.code = n.code);
                            } catch (e) {
                                i("Error when attempting to parse xhr response text (" + e.message + ")", "error");
                            }
                            return o;
                        },
                        parseError: function(e) {
                            var t, n, i = (new DOMParser).parseFromString(e, "application/xml"), o = {};
                            if (i.getElementsByTagName("Error").length) return t = i.getElementsByTagName("Code"), 
                            (n = i.getElementsByTagName("Message")).length && (o.message = n[0].textContent), 
                            t.length && (o.code = t[0].textContent), o;
                        },
                        shouldReset: function(e) {
                            return "EntityTooSmall" === e || "InvalidPart" === e || "InvalidPartOrder" === e || "NoSuchUpload" === e;
                        }
                    },
                    start: function(e, t) {
                        var n = new qq.Promise;
                        return v.key.promise(e).then((function() {
                            v.bucket.promise(e).then((function() {
                                null == t ? _.send(e).then(n.success, n.failure) : m.send(e, t).then(n.success, n.failure);
                            }));
                        }), (function(e) {
                            n.failure({
                                error: e
                            });
                        })), n;
                    },
                    track: function(e, t, n) {
                        var i = new qq.Promise;
                        return t.onreadystatechange = function() {
                            var o;
                            4 === t.readyState && (null == n ? (o = v.done(e, t), i[o.success ? "success" : "failure"](o.response, t)) : (m.done(e, t, n), 
                            o = v.done(e, t), i[o.success ? "success" : "failure"](o.response, t)));
                        }, i;
                    }
                };
                qq.extend(this, {
                    uploadChunk: v.start,
                    uploadFile: v.start
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "s3"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, (function(e) {
                    return {
                        expunge: function(t) {
                            var n = h._getPersistableData(t) && h._getPersistableData(t).uploadId, i = h._maybeDeletePersistedChunkData(t);
                            void 0 !== n && i && g.abortMultipart.send(t, n), e.expunge(t);
                        },
                        finalizeChunks: function(e) {
                            return m.combine(e);
                        },
                        _getLocalStorageId: function(t) {
                            return e._getLocalStorageId(t) + "-" + v.bucket.getName(t);
                        }
                    };
                }));
            }, qq.s3.FormUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.onUuidChanged, o = t.getName, r = t.getUuid, a = t.log, s = e.getBucket, u = e.getKeyName, l = e.filenameParam, c = e.paramsStore, d = e.endpointStore, p = e.aclStore, q = e.objectProperties.reducedRedundancy, h = e.objectProperties.serverSideEncryption, f = e.validation, m = e.signature, g = e.iframeSupport.localBlankPagePath, _ = e.signature.credentialsProvider, v = new qq.s3.RequestSigner({
                    signatureSpec: m,
                    cors: e.cors,
                    log: a
                });
                if (void 0 === g) throw new Error("successRedirectEndpoint MUST be defined if you intend to use browsers that do not support the File API!");
                function b(t, i) {
                    var r = new qq.Promise, s = e.demoMode ? "GET" : "POST", u = e.endpointStore.get(t);
                    o(t);
                    return function(e) {
                        var t = c.get(e);
                        return t[l] = o(e), qq.s3.util.generateAwsParams({
                            endpoint: d.get(e),
                            params: t,
                            bucket: n._getFileState(e).bucket,
                            key: n.getThirdPartyFileId(e),
                            accessKey: _.get().accessKey,
                            sessionToken: _.get().sessionToken,
                            acl: p.get(e),
                            minFileSize: f.minSizeLimit,
                            maxFileSize: f.maxSizeLimit,
                            successRedirectUrl: g,
                            reducedRedundancy: q,
                            serverSideEncryption: h,
                            log: a
                        }, qq.bind(v.getSignature, this, e));
                    }(t).then((function(e) {
                        var t = n._initFormForUpload({
                            method: s,
                            endpoint: u,
                            params: e,
                            paramsInBody: !0,
                            targetName: i.name
                        });
                        r.success(t);
                    }), (function(e) {
                        r.failure(e), y(t, i);
                    })), r;
                }
                function S(t) {
                    var i = n._createIframe(t), o = n.getInput(t), r = new qq.Promise;
                    return b(t, i).then((function(s) {
                        s.appendChild(o), n._attachLoadEvent(i, (function(o) {
                            a("iframe loaded"), o ? !1 === o.success && (a("Amazon likely rejected the upload request", "error"), 
                            r.failure(o)) : ((o = {}).success = function(t, i) {
                                var o, r = e.endpointStore.get(t), s = qq.s3.util.getBucket(r);
                                try {
                                    if ((i.contentDocument || i.contentWindow.document).body.innerHTML, (o = qq.s3.util.parseIframeResponse(i)).bucket === s && o.key === qq.s3.util.encodeQueryStringParam(n.getThirdPartyFileId(t))) return !0;
                                    a("Response from AWS included an unexpected bucket or key name.", "error");
                                } catch (e) {
                                    a("Error when attempting to parse form upload response (" + e.message + ")", "error");
                                }
                                return !1;
                            }(t, i), !1 === o.success ? (a("A success response was received by Amazon, but it was invalid in some way.", "error"), 
                            r.failure(o)) : (qq.extend(o, qq.s3.util.parseIframeResponse(i)), r.success(o))), 
                            y(t, i);
                        })), a("Sending upload request for " + t), s.submit(), qq(s).remove();
                    }), r.failure), r;
                }
                function y(e, t) {
                    n._detachLoadEvent(e), t && qq(t).remove();
                }
                qq.extend(this, new qq.FormUploadHandler({
                    options: {
                        isCors: !1,
                        inputName: "file"
                    },
                    proxy: {
                        onCancel: e.onCancel,
                        onUuidChanged: i,
                        getName: o,
                        getUuid: r,
                        log: a
                    }
                })), qq.extend(this, {
                    uploadFile: function(e) {
                        var t = o(e), i = new qq.Promise;
                        return n.getThirdPartyFileId(e) ? n._getFileState(e).bucket ? S(e).then(i.success, i.failure) : s(e).then((function(t) {
                            n._getFileState(e).bucket = t, S(e).then(i.success, i.failure);
                        })) : u(e, t).then((function(t) {
                            s(e).then((function(o) {
                                n._getFileState(e).bucket = o, n._setThirdPartyFileId(e, t), S(e).then(i.success, i.failure);
                            }), (function(e) {
                                i.failure({
                                    error: e
                                });
                            }));
                        }), (function(e) {
                            i.failure({
                                error: e
                            });
                        })), i;
                    }
                });
            }, function() {
                "use strict";
                qq.s3.FineUploader = function(e) {
                    var t = {
                        failedUploadTextDisplay: {
                            mode: "custom"
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploader.call(this, t, "s3"), qq.supportedFeatures.ajaxUploading || void 0 !== t.iframeSupport.localBlankPagePath || (this._options.element.innerHTML = "<div>You MUST set the <code>localBlankPagePath</code> property of the <code>iframeSupport</code> option since this browser does not support the File API!</div>");
                }, qq.extend(qq.s3.FineUploader.prototype, qq.s3.FineUploaderBasic.prototype), qq.extend(qq.s3.FineUploader.prototype, qq.uiPublicApi), 
                qq.extend(qq.s3.FineUploader.prototype, qq.uiPrivateApi);
            }(), function(e) {
                "use strict";
                e.fn.fineUploaderS3 = function(t) {
                    return "object" == typeof t && (t.endpointType = "s3"), e.fn.fineUploader.apply(this, arguments);
                };
            }(jQuery), qq.azure = qq.azure || {}, qq.azure.util = qq.azure.util || function() {
                "use strict";
                return {
                    AZURE_PARAM_PREFIX: "x-ms-meta-",
                    getParamsAsHeaders: function(e) {
                        var t = {};
                        return qq.each(e, (function(e, n) {
                            var i = qq.azure.util.AZURE_PARAM_PREFIX + e;
                            qq.isFunction(n) ? t[i] = encodeURIComponent(String(n())) : qq.isObject(n) ? qq.extend(t, qq.azure.util.getParamsAsHeaders(n)) : t[i] = encodeURIComponent(String(n));
                        })), t;
                    },
                    parseAzureError: function(e, t) {
                        var n, i, o = (new DOMParser).parseFromString(e, "application/xml").getElementsByTagName("Error")[0], r = {};
                        if (t("Received error response: " + e, "error"), o) return (i = o.getElementsByTagName("Message")[0]) && (r.message = i.textContent), 
                        (n = o.getElementsByTagName("Code")[0]) && (r.code = n.textContent), t("Parsed Azure error: " + JSON.stringify(r), "error"), 
                        r;
                    }
                };
            }(), function() {
                "use strict";
                qq.azure.FineUploaderBasic = function(e) {
                    if (!qq.supportedFeatures.ajaxUploading) throw new qq.Error("Uploading directly to Azure is not possible in this browser.");
                    var t = {
                        signature: {
                            endpoint: null,
                            customHeaders: {}
                        },
                        blobProperties: {
                            name: "uuid"
                        },
                        uploadSuccess: {
                            endpoint: null,
                            params: {},
                            customHeaders: {}
                        },
                        chunking: {
                            partSize: 4e6,
                            minFileSize: 4000001
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploaderBasic.call(this, t), this._uploadSuccessParamsStore = this._createStore(this._options.uploadSuccess.params), 
                    this._uploadSuccessEndpointStore = this._createStore(this._options.uploadSuccess.endpoint), 
                    this._failedSuccessRequestCallbacks = {}, this._cannedBlobNames = {};
                }, qq.extend(qq.azure.FineUploaderBasic.prototype, qq.basePublicApi), qq.extend(qq.azure.FineUploaderBasic.prototype, qq.basePrivateApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, qq.nonTraditionalBasePublicApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, qq.nonTraditionalBasePrivateApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, {
                    getBlobName: function(e) {
                        return null == this._cannedBlobNames[e] ? this._handler.getThirdPartyFileId(e) : this._cannedBlobNames[e];
                    },
                    _getEndpointSpecificParams: function(e) {
                        return {
                            blob: this.getBlobName(e),
                            uuid: this.getUuid(e),
                            name: this.getName(e),
                            container: this._endpointStore.get(e)
                        };
                    },
                    _createUploadHandler: function() {
                        return qq.FineUploaderBasic.prototype._createUploadHandler.call(this, {
                            signature: this._options.signature,
                            onGetBlobName: qq.bind(this._determineBlobName, this),
                            deleteBlob: qq.bind(this._deleteBlob, this, !0)
                        }, "azure");
                    },
                    _determineBlobName: function(e) {
                        var t = this._options.blobProperties.name, n = this.getUuid(e), i = this.getName(e), o = qq.getExtension(i);
                        if (!qq.isString(t)) return t.call(this, e);
                        switch (t) {
                          case "uuid":
                            return (new qq.Promise).success(n + "." + o);

                          case "filename":
                            return (new qq.Promise).success(i);

                          default:
                            return new qq.Promise.failure("Invalid blobName option value - " + t);
                        }
                    },
                    _addCannedFile: function(e) {
                        var t;
                        if (null == e.blobName) throw new qq.Error("Did not find blob name property in server session response.  This is required!");
                        return t = qq.FineUploaderBasic.prototype._addCannedFile.apply(this, arguments), 
                        this._cannedBlobNames[t] = e.blobName, t;
                    },
                    _deleteBlob: function(e, t) {
                        var n = this, i = {}, o = function(e) {
                            return n._endpointStore.get(e) + "/" + n.getBlobName(e);
                        }, r = {
                            get: function(e) {
                                return i[e];
                            }
                        }, a = new qq.azure.DeleteBlob({
                            endpointStore: r,
                            log: qq.bind(n.log, n),
                            onDelete: function(e) {
                                n._onDelete(e), n._options.callbacks.onDelete(e);
                            },
                            onDeleteComplete: function(t, o, r) {
                                delete i[t], r && (e ? n.log("Will cancel upload, but failed to remove uncommitted parts from Azure.", "error") : qq.azure.util.parseAzureError(o.responseText, qq.bind(n.log, n))), 
                                e ? (qq.FineUploaderBasic.prototype._onCancel.call(n, t, n.getName(t)), n.log("Deleted uncommitted blob chunks for " + t)) : (n._onDeleteComplete(t, o, r), 
                                n._options.callbacks.onDeleteComplete(t, o, r));
                            }
                        });
                        new qq.azure.GetSas({
                            cors: this._options.cors,
                            endpointStore: {
                                get: function() {
                                    return n._options.signature.endpoint;
                                }
                            },
                            restRequestVerb: a.method,
                            log: qq.bind(n.log, n)
                        }).request(t, o(t)).then(qq.bind((function(e, t) {
                            i[e] = t, a.send(e);
                        }), n, t), qq.bind((function(t, i, o) {
                            e ? (n.log("Will cancel upload, but cannot remove uncommitted parts from Azure due to issue retrieving SAS", "error"), 
                            qq.FineUploaderBasic.prototype._onCancel.call(n, t, n.getName(t))) : (n._onDeleteComplete(t, o, !0), 
                            n._options.callbacks.onDeleteComplete(t, o, !0));
                        }), n, t));
                    },
                    _createDeleteHandler: function() {
                        var e = this;
                        return {
                            sendDelete: function(t, n) {
                                e._deleteBlob(!1, t);
                            }
                        };
                    }
                });
            }(), qq.azure.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.log, o = e.cors, r = e.endpointStore, a = e.paramsStore, s = e.signature, u = e.filenameParam, l = e.chunking.minFileSize, c = e.deleteBlob, d = e.onGetBlobName, p = t.getName, q = t.getSize, h = function(e) {
                    var t = a.get(e);
                    return t[u] = p(e), t;
                }, f = {
                    putBlob: new qq.azure.PutBlob({
                        getBlobMetadata: h,
                        log: i
                    }),
                    putBlock: new qq.azure.PutBlock({
                        log: i
                    }),
                    putBlockList: new qq.azure.PutBlockList({
                        getBlobMetadata: h,
                        log: i
                    }),
                    getSasForPutBlobOrBlock: new qq.azure.GetSas({
                        cors: o,
                        customHeaders: s.customHeaders,
                        endpointStore: {
                            get: function() {
                                return s.endpoint;
                            }
                        },
                        log: i,
                        restRequestVerb: "PUT"
                    })
                };
                function m(e, t) {
                    var o = null == t ? e : e + "." + t, a = new qq.Promise, s = function(e) {
                        i("GET SAS request succeeded."), a.success(e);
                    }, u = function(e, t) {
                        i("GET SAS request failed: " + e, "error"), a.failure({
                            error: "Problem communicating with local server"
                        }, t);
                    };
                    return function(e) {
                        var t = r.get(e), i = new qq.Promise;
                        return d(e).then((function(o) {
                            n._setThirdPartyFileId(e, o), i.success(t + "/" + o);
                        }), (function(e) {
                            i.failure(e);
                        })), i;
                    }(e).then((function(e) {
                        f.getSasForPutBlobOrBlock.request(o, e).then(s, u);
                    }), (function(t) {
                        i(qq.format("Failed to determine blob name for ID {} - {}", e, t), "error"), a.failure({
                            error: t
                        });
                    })), a;
                }
                function g(e, t) {
                    var n = qq.azure.util.parseAzureError(e.responseText, i);
                    t.failure({
                        error: "Problem sending file to Azure",
                        azureError: n && n.message,
                        reset: 403 === e.status
                    });
                }
                qq.extend(this, {
                    uploadChunk: function(e, t) {
                        var o = new qq.Promise;
                        return m(e, t).then((function(r) {
                            var a = n._createXhr(e, t), s = n._getChunkData(e, t);
                            n._registerProgressHandler(e, t, s.size), n._registerXhr(e, t, a, f.putBlock), f.putBlock.upload(e + "." + t, a, r, t, s.blob).then((function(t) {
                                n._getPersistableData(e).blockIdEntries || (n._getPersistableData(e).blockIdEntries = []), 
                                n._getPersistableData(e).blockIdEntries.push(t), i("Put Block call succeeded for " + e), 
                                o.success({}, a);
                            }), (function() {
                                i(qq.format("Put Block call failed for ID {} on part {}", e, t), "error"), g(a, o);
                            }));
                        }), o.failure), o;
                    },
                    uploadFile: function(e) {
                        var t = new qq.Promise, o = n.getFile(e);
                        return m(e).then((function(r) {
                            var a = n._createXhr(e);
                            n._registerProgressHandler(e), f.putBlob.upload(e, a, r, o).then((function() {
                                i("Put Blob call succeeded for " + e), t.success({}, a);
                            }), (function() {
                                i("Put Blob call failed for " + e, "error"), g(a, t);
                            }));
                        }), t.failure), t;
                    }
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "azure"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, (function(e) {
                    return {
                        expunge: function(t) {
                            var i = n._wasCanceled(t), o = n._getPersistableData(t), r = o && o.blockIdEntries || [];
                            i && r.length > 0 && c(t), e.expunge(t);
                        },
                        finalizeChunks: function(e) {
                            return function(e) {
                                var t = new qq.Promise;
                                return m(e).then((function(o) {
                                    var r = n._getMimeType(e), a = n._getPersistableData(e).blockIdEntries;
                                    f.putBlockList.send(e, o, a, r, (function(t) {
                                        n._registerXhr(e, null, t, f.putBlockList);
                                    })).then((function(n) {
                                        i("Success combining chunks for id " + e), t.success({}, n);
                                    }), (function(n) {
                                        i("Attempt to combine chunks failed for id " + e, "error"), g(n, t);
                                    }));
                                }), t.failure), t;
                            }(e);
                        },
                        _shouldChunkThisFile: function(t) {
                            return e._shouldChunkThisFile(t) && q(t) >= l;
                        }
                    };
                }));
            }, qq.azure.GetSas = function(e) {
                "use strict";
                var t, n = {
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    customHeaders: {},
                    restRequestVerb: "PUT",
                    endpointStore: null,
                    log: function(e, t) {}
                }, i = {};
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "GET" ],
                    method: "GET",
                    successfulResponseCodes: {
                        GET: [ 200 ]
                    },
                    contentType: null,
                    customHeaders: n.customHeaders,
                    endpointStore: n.endpointStore,
                    cors: n.cors,
                    log: n.log,
                    onComplete: function(e, t, n) {
                        var o = i[e];
                        n ? o.failure("Received response code " + t.status, t) : t.responseText.length ? o.success(t.responseText) : o.failure("Empty response.", t), 
                        delete i[e];
                    }
                })), qq.extend(this, {
                    request: function(e, o) {
                        var r = new qq.Promise, a = n.restRequestVerb;
                        return n.log(qq.format("Submitting GET SAS request for a {} REST request related to file ID {}.", a, e)), 
                        i[e] = r, t.initTransport(e).withParams({
                            bloburi: o,
                            _method: a
                        }).withCacheBuster().send(), r;
                    }
                });
            }, qq.azure.DeleteBlob = function(e) {
                "use strict";
                var t, n, i = "DELETE", o = {
                    endpointStore: {},
                    onDelete: function(e) {},
                    onDeleteComplete: function(e, t, n) {},
                    log: function(e, t) {}
                };
                qq.extend(o, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ i ],
                    method: i,
                    successfulResponseCodes: (n = {
                        DELETE: [ 202 ]
                    }, n),
                    contentType: null,
                    endpointStore: o.endpointStore,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: o.log,
                    onSend: o.onDelete,
                    onComplete: o.onDeleteComplete
                })), qq.extend(this, {
                    method: i,
                    send: function(e) {
                        return o.log("Submitting Delete Blob request for " + e), t.initTransport(e).send();
                    }
                });
            }, qq.azure.PutBlob = function(e) {
                "use strict";
                var t, n, i = "PUT", o = {
                    getBlobMetadata: function(e) {},
                    log: function(e, t) {}
                }, r = {}, a = {}, s = {
                    get: function(e) {
                        return r[e];
                    }
                };
                qq.extend(o, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ i ],
                    method: i,
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    contentType: null,
                    customHeaders: function(e) {
                        var t = o.getBlobMetadata(e), n = qq.azure.util.getParamsAsHeaders(t);
                        return n["x-ms-blob-type"] = "BlockBlob", n;
                    },
                    endpointStore: s,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var i = a[e];
                        delete r[e], delete a[e], n ? i.failure() : i.success();
                    }
                })), qq.extend(this, {
                    method: i,
                    upload: function(e, n, i, s) {
                        var u = new qq.Promise;
                        return o.log("Submitting Put Blob request for " + e), a[e] = u, r[e] = i, t.initTransport(e).withPayload(s).withHeaders({
                            "Content-Type": s.type
                        }).send(n), u;
                    }
                });
            }, qq.azure.PutBlockList = function(e) {
                "use strict";
                var t, n, i = "PUT", o = {}, r = {
                    getBlobMetadata: function(e) {},
                    log: function(e, t) {}
                }, a = {}, s = {
                    get: function(e) {
                        return a[e];
                    }
                };
                qq.extend(r, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ i ],
                    method: i,
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    customHeaders: function(e) {
                        var t = r.getBlobMetadata(e);
                        return qq.azure.util.getParamsAsHeaders(t);
                    },
                    contentType: "text/plain",
                    endpointStore: s,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: r.log,
                    onSend: function() {},
                    onComplete: function(e, t, n) {
                        var i = o[e];
                        delete a[e], delete o[e], n ? i.failure(t) : i.success(t);
                    }
                })), qq.extend(this, {
                    method: i,
                    send: function(e, n, i, s, u) {
                        var l = new qq.Promise, c = function(e) {
                            var t = document.implementation.createDocument(null, "BlockList", null);
                            return e.sort((function(e, t) {
                                return e.part - t.part;
                            })), qq.each(e, (function(e, n) {
                                var i = t.createElement("Latest"), o = t.createTextNode(n.id);
                                i.appendChild(o), qq(t).children()[0].appendChild(i);
                            })), (new XMLSerializer).serializeToString(t);
                        }(i);
                        return o[e] = l, r.log(qq.format("Submitting Put Block List request for {}", e)), 
                        a[e] = qq.format("{}&comp=blocklist", n), u(t.initTransport(e).withPayload(c).withHeaders({
                            "x-ms-blob-content-type": s
                        }).send()), l;
                    }
                });
            }, qq.azure.PutBlock = function(e) {
                "use strict";
                var t, n, i = "PUT", o = {}, r = {}, a = {
                    log: function(e, t) {}
                }, s = {}, u = {
                    get: function(e) {
                        return s[e];
                    }
                };
                qq.extend(a, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ i ],
                    method: i,
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    contentType: null,
                    endpointStore: u,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: a.log,
                    onComplete: function(e, t, n) {
                        var i = r[e], a = o[e];
                        delete s[e], delete r[e], delete o[e], n ? i.failure() : i.success(a);
                    }
                })), qq.extend(this, {
                    method: i,
                    upload: function(e, n, i, u, l) {
                        var c = new qq.Promise, d = function(e) {
                            var t = (new Array(6).join("0") + e).slice(-5);
                            return btoa(t);
                        }(u);
                        return r[e] = c, a.log(qq.format("Submitting Put Block request for {} = part {}", e, u)), 
                        s[e] = qq.format("{}&comp=block&blockid={}", i, encodeURIComponent(d)), o[e] = {
                            part: u,
                            id: d
                        }, t.initTransport(e).withPayload(l).send(n), c;
                    }
                });
            }, function() {
                "use strict";
                qq.azure.FineUploader = function(e) {
                    var t = {
                        failedUploadTextDisplay: {
                            mode: "custom"
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploader.call(this, t, "azure");
                }, qq.extend(qq.azure.FineUploader.prototype, qq.azure.FineUploaderBasic.prototype), 
                qq.extend(qq.azure.FineUploader.prototype, qq.uiPublicApi), qq.extend(qq.azure.FineUploader.prototype, qq.uiPrivateApi), 
                qq.extend(qq.azure.FineUploader.prototype, {});
            }(), function(e) {
                "use strict";
                e.fn.fineUploaderAzure = function(t) {
                    return "object" == typeof t && (t.endpointType = "azure"), e.fn.fineUploader.apply(this, arguments);
                };
            }(jQuery);
            var CryptoJS = CryptoJS || function(e, t) {
                var n = {}, i = n.lib = {}, o = i.Base = function() {
                    function e() {}
                    return {
                        extend: function(t) {
                            e.prototype = this;
                            var n = new e;
                            return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments);
                            }), n.init.prototype = n, n.$super = this, n;
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString);
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    };
                }(), r = i.WordArray = o.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
                    },
                    toString: function(e) {
                        return (e || s).stringify(this);
                    },
                    concat: function(e) {
                        var t = this.words, n = e.words, i = this.sigBytes, o = e.sigBytes;
                        if (this.clamp(), i % 4) for (var r = 0; r < o; r++) {
                            var a = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            t[i + r >>> 2] |= a << 24 - (i + r) % 4 * 8;
                        } else if (n.length > 65535) for (r = 0; r < o; r += 4) t[i + r >>> 2] = n[r >>> 2]; else t.push.apply(t, n);
                        return this.sigBytes += o, this;
                    },
                    clamp: function() {
                        var t = this.words, n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e;
                    },
                    random: function(t) {
                        for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                        return new r.init(n, t);
                    }
                }), a = n.enc = {}, s = a.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], o = 0; o < n; o++) {
                            var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            i.push((r >>> 4).toString(16)), i.push((15 & r).toString(16));
                        }
                        return i.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new r.init(n, t / 2);
                    }
                }, u = a.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], o = 0; o < n; o++) {
                            var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            i.push(String.fromCharCode(r));
                        }
                        return i.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new r.init(n, t);
                    }
                }, l = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(u.stringify(e)));
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function(e) {
                        return u.parse(unescape(encodeURIComponent(e)));
                    }
                }, c = i.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new r.init, this._nDataBytes = 0;
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                    },
                    _process: function(t) {
                        var n = this._data, i = n.words, o = n.sigBytes, a = this.blockSize, s = o / (4 * a), u = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, l = e.min(4 * u, o);
                        if (u) {
                            for (var c = 0; c < u; c += a) this._doProcessBlock(i, c);
                            var d = i.splice(0, u);
                            n.sigBytes -= l;
                        }
                        return new r.init(d, l);
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e;
                    },
                    _minBufferSize: 0
                }), d = (i.Hasher = c.extend({
                    cfg: o.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset();
                    },
                    reset: function() {
                        c.reset.call(this), this._doReset();
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this;
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t);
                        };
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new d.HMAC.init(e, n).finalize(t);
                        };
                    }
                }), n.algo = {});
                return n;
            }(Math), C, WordArray;
            return C = CryptoJS, WordArray = C.lib.WordArray, C.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words, n = e.sigBytes, i = this._map;
                    e.clamp();
                    for (var o = [], r = 0; r < n; r += 3) for (var a = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < n; s++) o.push(i.charAt(a >>> 6 * (3 - s) & 63));
                    var u = i.charAt(64);
                    if (u) for (;o.length % 4; ) o.push(u);
                    return o.join("");
                },
                parse: function(e) {
                    var t = e.length, n = this._map, i = n.charAt(64);
                    if (i) {
                        var o = e.indexOf(i);
                        -1 != o && (t = o);
                    }
                    for (var r = [], a = 0, s = 0; s < t; s++) if (s % 4) {
                        var u = n.indexOf(e.charAt(s - 1)) << s % 4 * 2, l = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
                        r[a >>> 2] |= (u | l) << 24 - a % 4 * 8, a++;
                    }
                    return WordArray.create(r, a);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }, function() {
                var e = CryptoJS, t = e.lib.Base, n = e.enc.Utf8;
                e.algo.HMAC = t.extend({
                    init: function(e, t) {
                        e = this._hasher = new e.init, "string" == typeof t && (t = n.parse(t));
                        var i = e.blockSize, o = 4 * i;
                        t.sigBytes > o && (t = e.finalize(t)), t.clamp();
                        for (var r = this._oKey = t.clone(), a = this._iKey = t.clone(), s = r.words, u = a.words, l = 0; l < i; l++) s[l] ^= 1549556828, 
                        u[l] ^= 909522486;
                        r.sigBytes = a.sigBytes = o, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var t = this._hasher, n = t.finalize(e);
                        return t.reset(), t.finalize(this._oKey.clone().concat(n));
                    }
                });
            }(), function() {
                var e = CryptoJS, t = e.lib, n = t.WordArray, i = t.Hasher, o = e.algo, r = [], a = o.SHA1 = i.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, i = n[0], o = n[1], a = n[2], s = n[3], u = n[4], l = 0; l < 80; l++) {
                            if (l < 16) r[l] = 0 | e[t + l]; else {
                                var c = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16];
                                r[l] = c << 1 | c >>> 31;
                            }
                            var d = (i << 5 | i >>> 27) + u + r[l];
                            d += l < 20 ? 1518500249 + (o & a | ~o & s) : l < 40 ? 1859775393 + (o ^ a ^ s) : l < 60 ? (o & a | o & s | a & s) - 1894007588 : (o ^ a ^ s) - 899497514, 
                            u = s, s = a, a = o << 30 | o >>> 2, o = i, i = d;
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, 
                        n[4] = n[4] + u | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                        return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                });
                e.SHA1 = i._createHelper(a), e.HmacSHA1 = i._createHmacHelper(a);
            }(), qq;
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }
} ]);
//# sourceMappingURL=C~e81bfeaa.8c2db8106fd9d68236ee.js.map