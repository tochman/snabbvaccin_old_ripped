for (
  var v =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (k, f, d) {
            if (d.get || d.set)
              throw new TypeError("ES3 does not support getters and setters.");
            k != Array.prototype && k != Object.prototype && (k[f] = d.value);
          },
    y =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this,
    A = ["String", "prototype", "includes"],
    B = 0;
  B < A.length - 1;
  B++
) {
  var C = A[B];
  C in y || (y[C] = {});
  y = y[C];
}
var D = A[A.length - 1],
  F = y[D],
  J = F
    ? F
    : function (k, f) {
        if (null == this)
          throw new TypeError(
            "The 'this' value for String.prototype.includes must not be null or undefined"
          );
        if (k instanceof RegExp)
          throw new TypeError(
            "First argument to String.prototype.includes must not be a regular expression"
          );
        return -1 !== (this + "").indexOf(k, f || 0);
      };
J != F && null != J && v(y, D, { configurable: !0, writable: !0, value: J });
(function (k) {
  function f(c) {
    if (d[c]) return d[c].aa;
    var a = (d[c] = { zc: c, Jc: !1, aa: {} });
    k[c].call(a.aa, a, a.aa, f);
    a.Jc = !0;
    return a.aa;
  }
  var d = {};
  f.Ia = k;
  f.K = d;
  f.zc = function (c) {
    return c;
  };
  f.g = function (c, a) {
    f.l(c) ||
      Object.defineProperty(c, "a", {
        configurable: !1,
        enumerable: !0,
        get: a,
      });
  };
  f.ca = function (c) {
    var a =
      c && c.xd
        ? function () {
            return c["default"];
          }
        : function () {
            return c;
          };
    f.g(a, a);
    return a;
  };
  f.l = function (c) {
    return Object.prototype.hasOwnProperty.call(c, "a");
  };
  f.Ga = "";
  return f((f.Ab = 23));
})([
  function (k, f, d) {
    var c = d(3);
    f.a = {
      G: function (a) {
        window.console && window.console.log && window.console.log(a);
      },
      qa: function (a, b) {
        b = (void 0 === b ? null : b) || location.href;
        a =
          "[\\?\x26]" +
          a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") +
          "\x3d([^\x26#]*)";
        return (b = new RegExp(a).exec(b)) ? b[1] : null;
      },
      getAttribute: function (a, b) {
        return void 0 !== a.getAttribute
          ? a.getAttribute(b)
          : void 0 !== a[b]
          ? a[b]
          : null;
      },
      loadJs: function (a) {
        var b = document.getElementsByTagName("head"),
          e = document.createElement("script");
        e.async = !0;
        e.src = a;
        b[0].appendChild(e);
      },
      i: function () {
        return c.a.i();
      },
      va: function (a) {
        a =
          "\n      .fomo-sr-only {\n        display: block !important; /* FOMO CUSTOMISATION! */\n        border: 0 !important;\n        clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */\n        -webkit-clip-path: inset(50%) !important;\n        clip-path: inset(50%) !important; /* 2 */\n        height: 1px !important;\n        margin: -1px !important;\n        overflow: hidden !important;\n        padding: 0 !important;\n        position: absolute !important;\n        width: 1px !important;\n        white-space: nowrap !important; /* 3 */\n      }\n    " +
          a;
        var b = document.getElementsByTagName("head")[0],
          e = document.createElement("style");
        e &&
          ((e.type = "text/css"),
          e.styleSheet
            ? (e.styleSheet.cssText = a)
            : e.appendChild(document.createTextNode(a)),
          b.appendChild(e));
      },
      Ja: function () {
        try {
          return new XMLHttpRequest();
        } catch (a) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (a) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (a) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (a) {}
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (a) {}
        return !1;
      },
      pd: function (a) {
        if (a && 0 < a.length) {
          for (var b = a.length, e, c; 0 !== b; )
            (c = parseInt(Math.random() * b, 10)),
              --b,
              (e = a[b]),
              (a[b] = a[c]),
              (a[c] = e);
          return a;
        }
        return [];
      },
    };
  },
  function (k, f) {
    f.a = {
      A:
        navigator && navigator.userAgent
          ? navigator.userAgent.toLowerCase()
          : "",
      cc: function () {
        try {
          if (
            navigator &&
            navigator.userAgent &&
            /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) &&
            4 >= new Number(RegExp.$1)
          )
            return !1;
        } catch (d) {}
        return !0;
      },
      M: function () {
        var d = !1;
        try {
          var c = navigator.userAgent || navigator.vendor || window.opera;
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              c
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              c.substr(0, 4)
            )
          )
            d = !0;
        } catch (a) {}
        return d;
      },
      cb: function () {
        return this.M() ? "m" : "d";
      },
      Ic: function () {
        return (
          "ontouchstart" in window ||
          0 < navigator.maxTouchPoints ||
          0 < navigator.msMaxTouchPoints
        );
      },
      Gc: function () {
        var d = !/\bchrome\b/.test(this.A) && /safari/.test(this.A);
        return d && /version\/8/.test(this.A)
          ? !0
          : d && /version\/7/.test(this.A)
          ? !0
          : !1;
      },
      Fa: function () {
        return this.A && -1 != this.A.indexOf("msie")
          ? parseInt(this.A.split("msie")[1])
          : !1;
      },
      vb: function () {
        return this.Gc()
          ? !1
          : !(
              -1 != this.A.indexOf("msie") &&
              10 > parseInt(this.A.split("msie")[1])
            );
      },
      inIframe: function () {
        try {
          return window.self !== window.top;
        } catch (d) {
          return !0;
        }
      },
      hasFocus: function () {
        return (
          "function" !== typeof document.hasFocus ||
          ("function" === typeof document.hasFocus && document.hasFocus())
        );
      },
      D: function (d, c, a) {
        var b = new Date();
        b.setTime(b.getTime() + 864e5 * a);
        document.cookie =
          d +
          "\x3d" +
          c +
          ";" +
          ("expires\x3d" + b.toUTCString()) +
          ";path\x3d/";
      },
      U: function (d) {
        d += "\x3d";
        for (var c = document.cookie.split(";"), a = 0; a < c.length; a++) {
          for (var b = c[a]; " " == b.charAt(0); ) b = b.substring(1);
          if (!b.indexOf(d)) return b.substring(d.length, b.length);
        }
        return "";
      },
      Hb: function (d) {
        document.cookie =
          d + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT;path\x3d/;";
      },
      tc: function () {
        return new Proxy(new URLSearchParams(window.location.search), {
          get: function (d, c) {
            return d.get(c);
          },
        });
      },
    };
  },
  function (k, f) {
    f.a = {
      Ra: "_fi-storage",
      mb: !1,
      bc: function (d) {
        try {
          var c = sessionStorage.getItem(this.Ra + "_" + d);
          if (c) {
            var a = this;
            setTimeout(function () {
              a.Oa(c, d);
            }, 1500);
          }
        } catch (b) {}
      },
      Kb: function (d, c) {
        var a = c.lb,
          a = a + ("\x26fomo_external_id\x3d" + c.L + "_" + Date.now());
        this.Oa(a + ("\x26action\x3d" + d), c.L);
      },
      Oa: function (d, c) {
        try {
          sessionStorage.setItem(this.Ra + "_" + c, d);
        } catch (a) {}
        if (!this.mb)
          try {
            this.Wc(d, c), (this.mb = !0);
          } catch (a) {
            this.Pa("ERROR: could not send form data");
          }
      },
      Wc: function (d, c) {
        var a = this,
          b = new XMLHttpRequest();
        b.open("POST", d, 1);
        b.onreadystatechange = function () {
          4 == this.readyState &&
            200 <= this.status &&
            300 > this.status &&
            sessionStorage.removeItem(a.Ra + "_" + c);
        };
        b.send();
      },
      Pa: function () {},
    };
  },
  function (k, f) {
    f.a = {
      Tc: function (d) {
        d = d.replace(/<\/?[^>]+(>|$)/g, "").length;
        var c = "xs";
        50 >= d ? (c = "lg") : 80 >= d ? (c = "md") : 130 >= d && (c = "sm");
        return "fomo-notification-font-" + c;
      },
      Pb: function (d, c) {
        var a =
            c && c.periods
              ? c.periods
              : [
                  ["second", "seconds"],
                  ["minute", "minutes"],
                  ["hour", "hours"],
                  ["day", "days"],
                  ["week", "weeks"],
                  ["month", "months"],
                  ["year", "years"],
                ],
          b = [60, 60, 24, 7, 4, 12];
        d = this.i() / 1e3 - d;
        for (var e = 0; d >= b[e]; d /= b[e++]);
        return (
          (c && c.pre ? c.pre : "About") +
          " " +
          ~~d +
          " " +
          (1 < ~~d ? a[e][1] : a[e][0]) +
          " " +
          (c && c.post ? c.post : "ago")
        );
      },
      Ta: function (d, c, a, b) {
        return d ? c + a + b : a;
      },
      yb: function (d, c, a) {
        var b = parseInt(this.i() / 1e3, 10),
          e = -1 < d.theme.indexOf("v2_"),
          g = this.Ta(
            e,
            '\x3cdiv style\x3d"display:inline" class\x3d"fomo-notification-content-wrapper"\x3e',
            '\x3cp class\x3d"fomo-notification-content"\x3e' +
              c.message +
              "\x3c/p\x3e",
            "\x3c/div\x3e"
          ),
          l = [],
          b =
            b - c.created_at_to_seconds_from_epoch < d.time_ago_limit
              ? "\x3csmall\x3e" +
                this.Pb(c.created_at_to_seconds_from_epoch, a.time_ago) +
                "\x3c/small\x3e"
              : "\x3csmall\x3e\x3c/small\x3e",
          g = g.replace(/\{\{\s?time_ago\s?\}\}(?!\})/g, b);
        c.is_page_stream_event &&
          ((b = "in the last 24 hours"),
          a.time_period &&
            a.time_period["86400"] &&
            (b = a.time_period["86400"]),
          (g = g.replace(
            /\{\{\s?time_period\s?\}\}(?!\})/g,
            "\x3csmall\x3e" + b + "\x3c/small\x3e"
          )));
        d.fomo_feed ||
          (d.theme_settings &&
            d.theme_settings.css_classes &&
            (l = d.theme_settings.css_classes.slice(0)),
          d.hover_animation &&
            "none" !== d.hover_animation &&
            l.push("fomo-hover-animation-" + d.hover_animation),
          l.push("fomo-notification"),
          !c.disable_images && c.image_url
            ? ((a = "Fomo"),
              c.image_alt && (a = c.image_alt),
              (c =
                '\x3cimg alt\x3d"' +
                a +
                "\" onerror\x3d\"try { document.getElementById('someone-purchased').className +\x3d ' fomo-notification-no-image'; } catch (e) {}\" class\x3d\"fomo-notification-image " +
                this.Rc(c.message) +
                '" src\x3d"' +
                c.image_url +
                '"\x3e'),
              (g =
                this.Ta(
                  e,
                  '\x3cdiv style\x3d"display:inline" class\x3d"fomo-notification-image-wrapper"\x3e\x3cdiv class\x3d"fomo-notification-image-wrapper-inside"\x3e',
                  c,
                  "\x3c/div\x3e\x3c/div\x3e"
                ) + g))
            : l.push("fomo-notification-no-image"),
          l.push(this.Tc(g)),
          e || ((l = []), l.push("customized")),
          d.closable && (g += '\x3cspan id\x3d"fomo-close"\x3e\x3c/span\x3e'));
        return {
          Ea: this.Ta(
            e,
            '\x3cdiv class\x3d"fomo-notification-container" style\x3d"display:inline"\x3e',
            g,
            "\x3c/div\x3e"
          ),
          kc: l,
          id: "#someone-purchased",
        };
      },
      Rc: function (d) {
        return (d = d.match(/<a\/?[\w\s="/.':;#-\/\?]+>/)) && d[0]
          ? "fomo-notification-pointer"
          : "";
      },
      i: function () {
        var d = new Date();
        if ("function" === typeof d.getTime) return d.getTime();
        if ("function" === typeof d.valueOf) return d.valueOf();
        if ("function" === typeof Date.now) return Date.now();
        throw (
          "Date object is changed, cannot get current time, object type of: " +
          typeof d +
          ", constructor name: " +
          d.constructor.name
        );
      },
    };
  },
  function (k, f, d) {
    var c = d(0),
      a = d(1);
    f.a = {
      ad: ["show", "only_show_template", "no_show_template"],
      C: function (b) {
        switch (b) {
          case "true":
            return !0;
          case "false":
            return !1;
          default:
            return b;
        }
      },
      currentContext: function () {
        return {
          url: window.location.pathname,
          url_host: window.location.hostname,
          hash: window.location.hash,
          query: window.location.search,
          isMobileDevice: a.a.M(),
        };
      },
      applyRuleSettings: function (b, e) {
        if (!b || 1 > b.length) return !1;
        b &&
          window.fomo.debugLog_static(
            "There are  " + b.length + " rules for this application",
            1
          );
        for (var a = 0; a < b.length; a++) {
          var d = b[a];
          if (-1 == this.ad.indexOf(b[a].parameter)) {
            var u = !1;
            0 < b[a].rule_conditions.length &&
              (u = this.la(b[a], e, null) ? !0 : !1);
            if (u) {
              window.fomo.debugLog_static(
                "Rule is applied: " + JSON.stringify(d),
                2
              );
              d = b[a].parameter;
              e = this.currentContext();
              u = !1;
              try {
                u = -1 < fomo.settings.theme.indexOf("v2_");
              } catch (E) {}
              switch (d) {
                case "initialDelay":
                case "displayInterval":
                  fomo.settings[b[a].parameter] = 1e3 * b[a].value;
                  break;
                case "position":
                  e.isMobileDevice ||
                    (fomo.settings.ruleSettings &&
                      fomo.settings.ruleSettings &&
                      fomo.settings.ruleSettings[b[a].value] &&
                      c.a.va(fomo.settings.ruleSettings[b[a].value]),
                    (fomo.settings[b[a].parameter] = this.C(b[a].value)),
                    u && this.Ya("position", b[a].value));
                  break;
                case "mobilePosition":
                  e.isMobileDevice &&
                    (fomo.settings.ruleSettings &&
                      fomo.settings.ruleSettings &&
                      fomo.settings.ruleSettings[b[a].value] &&
                      c.a.va(fomo.settings.ruleSettings[b[a].value]),
                    (fomo.settings[b[a].parameter] = this.C(b[a].value)),
                    u && this.Ya("mobilePosition", b[a].value));
                  break;
                default:
                  fomo.settings[b[a].parameter] = this.C(b[a].value);
              }
            }
          }
        }
      },
      Ya: function (b, e) {
        for (
          var a = fomo.settings.theme_settings.css_classes, c = 0;
          c < a.length;
          c++
        ) {
          if (
            "position" == b &&
            -1 !== a[c].indexOf("fomo-notification-position-")
          ) {
            var d =
              "fomo-notification-position-" + e.toLowerCase().replace("_", "-");
            d && (fomo.settings.theme_settings.css_classes[c] = d);
          }
          "mobilePosition" == b &&
            -1 !== a[c].indexOf("fomo-notification-mobile-position-") &&
            (d =
              "fomo-notification-mobile-position-" +
              e.toLowerCase().replace("_", "-")) &&
            (fomo.settings.theme_settings.css_classes[c] = d);
        }
      },
      ja: null,
      fa: null,
      dc: function (b) {
        this.fa = this.ja = null;
        for (var a = 0; a < b.length; a++)
          if (0 < b[a].rule_conditions.length) {
            var c = b[a].parameter;
            ("only_show_template" != c && "no_show_template" != c) ||
              !this.la(b[a], this.currentContext()) ||
              ("only_show_template" == c && (this.ja = b[a].value),
              "no_show_template" == c && (this.fa = b[a].value));
          }
      },
      allowed: function (b, a, c) {
        var e = [];
        if ("undefined" === typeof a || !a || 1 > a.length) return b;
        for (var d = 0; d < b.length; d++) {
          for (
            var g = !0, f = !1, k = !0, p = !1, n = [], r = 0;
            r < a.length;
            r++
          )
            if (0 < a[r].rule_conditions.length) {
              var w = this.la(a[r], c, b[d]),
                x = a[r].parameter;
              switch (x) {
                case "only_show_template":
                case "no_show_template":
                  var z = a[r].value == b[d].event_type_id;
                  w &&
                    ("only_show_template" == x && ((g = !1), z && (f = g = !0)),
                    "no_show_template" == x && z && (g = !1));
                  break;
                case "show":
                  w
                    ? (0 == this.C(a[r].value) && (p = !0),
                      n.push([this.C(a[r].value), 1]))
                    : (k = !this.C(a[r].value));
              }
            }
          n && 0 < n.length && (k = n[n.length - 1][0]);
          f && p && (f = !1);
          ((k && g) || f) && e.push(b[d]);
        }
        return e;
      },
      nc: function (a, e) {
        if ("undefined" === typeof a || !a || 1 > a.length) return !1;
        for (var b = !1, c = 0; c < a.length; c++)
          if (0 < a[c].rule_conditions.length && "show" == a[c].parameter) {
            var d = 0 == this.C(a[c].value);
            this.la(a[c], e, null) && (b = d);
          }
        return b;
      },
      la: function (a, e, c) {
        for (var b = !1, d = 0; d < a.rule_conditions.length; d++) {
          b = this.ac(a.rule_conditions[d], e, c);
          if (!b) {
            b = !1;
            break;
          }
          b = !0;
        }
        b &&
          window.fomo.debugLog_static(
            "Rule conditions for rule " + JSON.stringify(a) + " has been met",
            1
          );
        return b;
      },
      ac: function (a, e, d) {
        if (a && a.parameter) {
          for (
            var b = !1, g = a.value.toString().split(","), f = 0;
            f < g.length;
            f++
          ) {
            var m = g[f].trim();
            if ("" != m) {
              switch (a.parameter) {
                case "home_page":
                  m = this.O("equals", "/", e.url);
                  break;
                case "url":
                  var k = this.O(a.match, m, e.url);
                  "equals" === a.match && "/" !== m.charAt(0)
                    ? ((m = this.O(a.match, "/" + m, e.url)), (m = k || m))
                    : (m = k);
                  break;
                case "template":
                  m = this.O(a.match, m, d ? d.event_type_id : null);
                  break;
                case "mobile":
                  m = this.O(a.match, m, e.isMobileDevice);
                  break;
                case "url_param":
                  k = c.a.qa(a.matcher_value, e.query) || "";
                  m = this.O(a.match, m, k);
                  break;
                case "url_host":
                  m = m.replace(/https?:\/\//i, "");
                  m = this.O(a.match, m, e.url_host);
                  break;
                default:
                  return !1;
              }
              if (
                ("notContains" == a.match || "notEquals" == a.match) &&
                !1 === m
              )
                return !1;
              m && (b = !0);
            }
          }
          return b;
        }
        return !1;
      },
      O: function (a, e, c) {
        if (a) {
          var b = this.currentContext();
          switch (a) {
            case "equals":
              return e == c || e.toString() == c.toString();
            case "notEquals":
              return e != c && e.toString() != c.toString();
            case "beginsWith":
              return c.substring(0, e.length) == e;
            case "contains":
              return (
                -1 !== c.indexOf(e) ||
                -1 !== b.hash.indexOf(e) ||
                -1 !== b.query.indexOf(e)
              );
            case "notContains":
              return (
                -1 == c.indexOf(e) &&
                -1 == b.hash.indexOf(e) &&
                -1 == b.query.indexOf(e)
              );
          }
        }
        return !1;
      },
    };
  },
  function (k, f, d) {
    Object.defineProperty(f, "__esModule", { value: !0 });
    k = d(14);
    var c = d(1),
      a = d(0),
      b = d(20),
      e = d(19),
      g = d(4),
      l = d(16),
      u = d(10),
      E = d(18),
      m = d(3),
      q = d(17),
      p = d(9),
      n = d(13),
      r = d(11),
      w = d(15),
      x = d(12),
      z = d(6);
    window.fomo ||
      ((window.fomo = {
        version: "1.12.0",
        initDone: !1,
        ta: !1,
        b: null,
        Db: !1,
        ga: null,
        La: !1,
        language: "en",
        B: null,
        Wa: null,
        zd: !0,
        closed: !1,
        Jb: null,
        zb: !1,
        ha: null,
        Y: null,
        Ha: null,
        Ca: !1,
        cd: -1,
        V: !1,
        bb: !1,
        fomoDebugLevel: 0,
        I: null,
        Sa: null,
        w: { W: null, Cd: null, Nb: !1 },
        Za: null,
        j: null,
        o: null,
        wa: [],
        BrowserHelper: c.a,
        Rules: g.a,
        clearLocalStorage: function () {
          e.a.ma();
          return !0;
        },
        reinitiate: function () {
          this.La = this.ta = !1;
          this.settings.totalDisplayed = 0;
          this.Ca = this.zb = !1;
          this.V && (this.R(), clearTimeout(this.S));
          this.f(
            "events has been cleared and displayed notifications has been closed",
            2
          );
          var h = window.location;
          if (
            (this.settings.page_stream || this.settings.enable_pageviews) &&
            document.querySelector
          ) {
            var b = document.querySelector("link[rel\x3d'canonical']");
            b &&
              ((h = document.createElement("a")),
              (h.href = b.getAttribute("href")));
          }
          var b = h.pathname.replace(/\/$/, ""),
            c = h.search;
          if (c) {
            var d = c.indexOf("utm_source");
            0 < d && (c = c.substring(0, d - 1));
          }
          b += c;
          h.hash && (b += h.hash);
          this.Y = encodeURIComponent(b);
          r.a.ea();
          (-1 < document.URL.indexOf("reset\x3dfomo") ||
            -1 < document.URL.indexOf("fomo\x3dpreview")) &&
            e.a.m &&
            (e.a.hc(),
            setTimeout(function () {
              if (document.URL.indexOf("reset\x3dfomo")) {
                var a = document.URL.split("reset\x3dfomo")[0];
                document.location.href = a.substring(0, a.length - 1);
              }
            }, 500));
          l.a.jd(this);
          g.a.applyRuleSettings(fomo.settings.rules, g.a.currentContext());
          g.a.dc(fomo.settings.rules);
          w.a.active()
            ? w.a.display()
            : this.isFomoEnabled()
            ? this.rb()
            : this.f(this.I, 1);
          this.settings.console_promotion &&
            a.a.G(
              "Want to show off recent customer activity in real-time? Get started at https://fomo.com/developers."
            );
        },
        md: function () {
          var a = document.getElementById("fomo-app-json");
          this.shopifyData = a ? JSON.parse(a.innerHTML) : {};
        },
        fd: function () {
          var h = this.ob();
          if (
            0 < h.length &&
            (-1 < document.location.href.indexOf("/thank_you") ||
              -1 < document.location.href.indexOf("/orders/")) &&
            window.Shopify &&
            window.Shopify.checkout &&
            window.Shopify.checkout.order_id
          ) {
            h = {
              shopify_order_id: window.Shopify.checkout.order_id,
              history: h,
              shop: window.Shopify.shop,
            };
            try {
              var b = a.a.Ja();
              b.open(
                "POST",
                this.settings.serverBaseUrl +
                  "/shopify/js/" +
                  this.clientId +
                  "/orders",
                1
              );
              b.setRequestHeader(
                "Content-type",
                "application/json;charset\x3dUTF-8"
              );
              b.send(JSON.stringify(h));
            } catch (G) {}
          }
        },
        initiate: function () {
          this.fomoDebugLevel = parseInt(c.a.U("fomo_debug_mode"));
          this.md();
          (window.enableFomoDebugger ||
            -1 < document.location.href.indexOf("enable_fomo_debugger")) &&
            !this.fomoDebugLevel &&
            (c.a.D("fomo_debug_mode", 1), (this.fomoDebugLevel = 1));
          if (0 < this.fomoDebugLevel && 0 == this.bb)
            a.a.loadJs(
              this.settings.debuggerBaseUrl +
                "/widgets/" +
                this.clientId +
                "/debugger.js"
            ),
              (this.bb = !0);
          else if (((this.Jb = a.a.i()), !window.document))
            a.a.G("cant find DOM, trying to setup again"),
              setTimeout(this.Ad.bind(this), 200);
          else if (c.a.cc() && !fomo.initDone) {
            fomo.initDone = !0;
            this.fd();
            this.settings.instant &&
              0 < this.settings.instant.length &&
              u.a.ea(this.settings.instant);
            this.settings.abandoned_cart &&
              z.a.ea(this.settings.abandoned_cart);
            if (fomo.settings.disable_display_events) return !1;
            this.ld();
            try {
              document.dispatchEvent(new CustomEvent("FomoLoaded"));
            } catch (G) {}
            a.a.va(this.settings.themeCss);
            this.language = this.settings.language;
            if (this.settings.translate_messages) {
              var h = window.navigator.languages
                  ? window.navigator.languages[0]
                  : window.navigator.language ||
                    window.navigator.browserLanguage ||
                    window.navigator.g ||
                    window.navigator.l,
                h = h ? h.split("-")[0].toLowerCase() : this.settings.language;
              -1 < this.settings.availableLanguages.indexOf(h) &&
                (this.language = h);
            }
            !this.settings.closable &&
              e.a.m &&
              localStorage.getItem("disable-fomo-" + this.clientId) &&
              localStorage.removeItem("disable-fomo-" + this.clientId);
            h = "onload";
            this.settings.initial_trigger &&
              "js_start" == this.settings.initial_trigger &&
              (h = "js_start");
            this.settings.initial_trigger &&
              "scroll" == this.settings.initial_trigger &&
              (h = "scroll");
            "onload" === h
              ? this.reinitiate()
              : this.f(
                  "initial_trigger \x3d " +
                    h +
                    ". Events will not be shown automatically!",
                  1
                );
            if ("scroll" === h) {
              var b = this;
              window.addEventListener("scroll", function () {
                (5 > window.pageYOffset && "test" != b.settings.env) ||
                  b.Ca ||
                  (b.f(
                    "First scroll detected (offset\x3d" +
                      window.pageYOffset +
                      ") ... reinitiate()",
                    4
                  ),
                  b.reinitiate(),
                  (b.Ca = !0));
              });
            }
            this.settings.enable_push_notifications &&
              a.a.loadJs(
                this.settings.widgetAssetsHost + "/widget/push_notifications.js"
              );
          }
        },
        ld: function () {
          var a = e.a.P("browserSessionStartedAt");
          a || (e.a.h("lastNotificationShownAt", 0), (a = Date.now() / 1e3));
          var b = 2;
          this.settings.maxNotificationsPerSession &&
            (b = this.settings.maxNotificationsPerSessionTimerange / 3600);
          e.a.F("browserSessionStartedAt", a, Date.now() + 36e5 * b);
          this.Za = a;
        },
        rb: function () {
          this.f("Init second script", 1);
          if (!this.ta && this.isFomoEnabled()) {
            var a = document.getElementsByTagName("head");
            a && a[0]
              ? (1 == this.settings.use_geo_events
                  ? ((this.B = e.a.P("address")),
                    (this.Wa = e.a.P("addressCodes")),
                    null === this.B ? this.nb((retry = 1)) : this.Na())
                  : this.Na(),
                setTimeout(this.$c.bind(this), 50),
                this.Bb() &&
                  this.settings.page_stream
                    .show_count_of_purchases_in_last_24_hours &&
                  setTimeout(this.Zc.bind(this), 70))
              : setTimeout(this.rb.bind(this), 100);
          }
        },
        nb: function (h) {
          a.a.loadJs(
            this.settings.geocode_url +
              "/json/?callback\x3dfomo.geocodeResponse\x26retry\x3d" +
              h
          );
          setTimeout(this.checkIfAddressIsSet.bind(this, h), 6e3);
        },
        checkIfAddressIsSet: function (a) {
          null === this.B && (0 == a ? this.locateMe("", "") : this.nb(a - 1));
        },
        geocodeResponse: function (a) {
          var b = a.country_name,
            h = a.country_code;
          -1 < b.indexOf("States") &&
            ((b = a.region_name + ", " + b), (h = a.region_code + "," + h));
          this.locateMe(b, h);
          e.a.h("geocodeResponse", JSON.stringify(a));
        },
        locateMe: function (a, b) {
          var h = 24;
          "" == a && (h = 1);
          h = Date.now() + 36e5 * h;
          this.B = encodeURIComponent(a);
          this.Wa = b;
          e.a.F("address", a, h);
          e.a.F("addressCodes", b, h);
          this.Na();
        },
        Bb: function () {
          return this.settings.page_stream &&
            this.settings.page_stream.url_filter &&
            3 < this.Y.length &&
            ((url_filter = this.settings.page_stream.url_filter),
            (encoded_url_filter = encodeURIComponent(url_filter)),
            -1 < window.location.href.indexOf(url_filter) ||
              -1 < window.location.href.indexOf(encoded_url_filter))
            ? !0
            : !1;
        },
        ub: function () {
          return g.a.nc(fomo.settings.rules, g.a.currentContext());
        },
        Na: function () {
          var b = this;
          this.f("Request events", 3);
          if (this.ub())
            (this.I = "Fomo is hidden by rules."),
              this.f("Fomo is hidden by rules");
          else if (this.ta)
            this.f(
              "Second script was loaded already. We won't load events one more time!",
              1
            );
          else {
            var e = this.clientHash,
              c = this.settings.linked_application_client_id,
              d =
                this.settings.fomoUrl +
                "/js-obj/" +
                (c ? c : e) +
                "/events/" +
                (this.B ? "geo_" : "") +
                "events.js?lng\x3d" +
                this.language;
            this.B &&
              ((d += "\x26address\x3d" + this.B),
              this.f("Requesting geo events for address\x3d" + this.B, 1));
            this.o = this.settings.default_sequence_id;
            var l = this.settings.sequences;
            l &&
              0 < l.length &&
              l &&
              l.every(function (a) {
                if ("contains" == a.trigger_condition) {
                  if (-1 < document.location.href.indexOf(a.trigger_url)) {
                    b.o = a.id;
                    return;
                  }
                } else if (document.location.href == a.trigger_url) {
                  b.o = a.id;
                  return;
                }
                return !0;
              });
            this.o &&
              ((d += "\x26sequence_id\x3d" + this.o),
              this.f("We are loading events for sequence_id\x3d" + this.o));
            this.Bb() &&
              this.settings.page_stream.page_precision_enabled &&
              (d += "\x26path\x3d" + this.Y);
            g.a.ja &&
              ((d += "\x26template_id\x3d" + g.a.ja),
              this.f(
                "Only events with template_id \x3d " +
                  g.a.ja +
                  " are being loaded (via Rules)",
                1
              ));
            g.a.fa &&
              ((d += "\x26not_template_id\x3d" + g.a.fa),
              this.f(
                "Only events with template_id !\x3d " +
                  g.a.fa +
                  " are being loaded (via Rules)",
                1
              ));
            c && (d += "\x26pcid\x3d" + e);
            a.a.loadJs(d);
            this.ta = !0;
          }
        },
        tb: function (a) {
          return (
            0 <
            g.a.allowed(
              [{ event_type_id: a, message: "generic", id: "generic" }],
              fomo.settings.rules,
              g.a.currentContext()
            ).length
          );
        },
        $c: function () {
          var b = this.settings.pageviews_settings,
            e = this.settings.someone_is_viewing_settings;
          if (b || e) {
            var c = this.Y;
            b &&
              this.settings.pageviews_settings
                .enable_pageviews_on_entire_domain &&
              (c = "*");
            var d = n.a.pa("fomo:group_url");
            window.html_meta_fomo_group_url &&
              (this.f(
                "html_meta_fomo_group_url is being read from custom JS method"
              ),
              (d = window.html_meta_fomo_group_url()));
            d &&
              ((c = document.createElement("a")),
              (c.href = d),
              (pathObject = c),
              (c = encodeURIComponent(
                pathObject.pathname.replace(/\/$/, "") + pathObject.search
              )));
            d = { run_p: "0" };
            if (b) {
              (b = !this.Ka()) ||
                this.f(
                  "Active visitor notification was already shown in last " +
                    this.settings.pageviews_settings.pageviews_timeinterval +
                    " seconds",
                  1
                );
              var g = !0;
              this.tb(
                this.settings.pageviews_settings.pageviews_event_type.id
              ) ||
                (this.f("Active Visitor notification is blocked by page rules"),
                (b = !1),
                "*" != c &&
                  ((g = !1),
                  this.f(
                    "ActiveVisitor: no need to track count users. No need for ActiveVisitor request at all",
                    2
                  )));
              g &&
                ((g =
                  this.settings.pageviews_settings.counter_timerange || 1800),
                (d.run_p = "1"),
                (d.rcir = b ? "true" : "false"),
                (d.tr = g),
                (d.path = c));
            }
            e &&
              this.tb(
                this.settings.someone_is_viewing_settings.event_type.id
              ) &&
              !this.Ob() &&
              (d.run_siv = "1");
            if (0 < Object.keys(d).length) {
              var e = this.settings.pageviewsUrl + this.clientHash + "?",
                l;
              for (l in d) e = e + l + "\x3d" + d[l] + "\x26";
              a.a.loadJs(e);
            }
          }
        },
        pageviewsResponse: function (a) {
          this.Db = !0;
          "count" in a &&
            (a.count >=
            this.settings.pageviews_settings.pageviews_show_if_min_visitors
              ? ((this.ga = a), this.f("Active visitor response was loaded", 3))
              : this.f(
                  "Active Visitor notification will not be shown because number of active visitor (\x3d" +
                    a.count +
                    ") \x3c min treshhold (\x3d" +
                    this.settings.pageviews_settings
                      .pageviews_show_if_min_visitors +
                    ")"
                ));
          "locations" in a && (this.w.W = a.locations);
        },
        Zc: function () {
          a.a.loadJs(
            this.settings.page_stream.service_url +
              "/" +
              this.clientHash +
              "?path\x3d" +
              this.Y +
              "\x26timerange_key\x3d" +
              this.settings.page_stream.timerange_key
          );
        },
        pageStreamResponse: function (a) {
          this.j
            ? a.count >=
                this.settings.page_stream.show_if_min_count_is_reached &&
              ((a = this.oc(this.settings.page_stream.event_type, a)),
              (a.is_page_stream_event = !0),
              (a.id = "pp" + this.yc(document.location.href)),
              (a.display_strategy = { timeinterval: 180 }),
              this.j.events_by_event_type_id.sticky
                ? this.j.events_by_event_type_id.sticky.push(a)
                : (this.j.events_by_event_type_id[a.event_type_id] = [a]))
            : this.wa.push({ method: "pageStreamResponse", args: [a] });
        },
        yc: function (a) {
          var b = 0,
            h,
            e;
          if (0 === a.length) return b;
          for (h = 0; h < a.length; h++)
            (e = a.charCodeAt(h)), (b = (b << 5) - b + e), (b |= 0);
          return b;
        },
        isFomoEnabled: function () {
          var b = !0,
            d = document.getElementsByTagName("meta");
          if (d && 0 < d.length)
            for (var g = 0; g < d.length; g++)
              ("notify:enabled" != d[g].getAttribute("name") &&
                "fomo:enabled" != d[g].getAttribute("name")) ||
                "false" !== d[g].getAttribute("content") ||
                ((this.I =
                  "Fomo is paused with meta attribute fomo:enabled \x3d false"),
                (b = !1));
          this.settings.hideMobile &&
            c.a.M() &&
            ((this.I = "Notifications are turned off on mobile device"),
            (b = !1));
          this.settings.hideDesktop &&
            !c.a.M() &&
            ((this.I = "Notifications are turned off on desktop device"),
            (b = !1));
          this.settings.closable &&
            e.a.m &&
            localStorage.getItem("disable-fomo-" + this.clientId) &&
            ((d = localStorage.getItem("disable-fomo-" + this.clientId)),
            (g = a.a.i()),
            86400 < parseInt((g - d) / 1e3, 10)
              ? localStorage.removeItem("disable-fomo-" + this.clientId)
              : (a.a.G(
                  "Fomo has been closed and hidden for 24 hours. To reset now go to " +
                    location.protocol +
                    "//" +
                    location.host +
                    "?reset\x3dfomo"
                ),
                (this.I = "Fomo has been closed and hidden for 24 hours."),
                (b = !1)));
          !c.a.Fa() ||
            (7 !== c.a.Fa() && 8 !== c.a.Fa()) ||
            ((this.I = "Fomo is not supported on IE\x3c9"), (b = !1));
          return b;
        },
        Pb: function (b) {
          var e =
              this.settings.timeAgoTranslation &&
              this.settings.timeAgoTranslation.periods
                ? this.settings.timeAgoTranslation.periods
                : [
                    ["second", "seconds"],
                    ["minute", "minutes"],
                    ["hour", "hours"],
                    ["day", "days"],
                    ["week", "weeks"],
                    ["month", "months"],
                    ["year", "years"],
                  ],
            h = [60, 60, 24, 7, 4, 12];
          b = a.a.i() / 1e3 - b;
          for (var c = 0; b >= h[c]; b /= h[c++]);
          return (
            (this.settings.timeAgoTranslation &&
            this.settings.timeAgoTranslation.pre
              ? this.settings.timeAgoTranslation.pre
              : "About") +
            " " +
            ~~b +
            " " +
            (1 < ~~b ? e[c][1] : e[c][0]) +
            " " +
            (this.settings.timeAgoTranslation &&
            this.settings.timeAgoTranslation.post
              ? this.settings.timeAgoTranslation.post
              : "ago")
          );
        },
        Xc: function (a) {
          var b = a.replace(/.*\/([gimuy]*)$/, "$1");
          b === a && (b = "");
          a = b ? a.replace(new RegExp("^/(.*?)/" + b + "$"), "$1") : a;
          try {
            return new RegExp(a, b);
          } catch (G) {
            return null;
          }
        },
        oc: function (a, b) {
          var e = a.message,
            c = a.image_url;
          b.image_url && (c = b.image_url);
          a.disable_images && (c = null);
          a.translations[this.language] && (e = a.translations[this.language]);
          for (key in b)
            e = e.replace(
              this.Xc("/\\{\\{\\s?" + key + "\\s?\\}\\}(?!\\})/g"),
              b[key]
            );
          return { message: e, image_url: c, event_type_id: a.id };
        },
        sd: function () {
          this.zb = !0;
          this.gc();
          var a = this.settings.initialDelay,
            b = Date.now() / 1e3 - this.Za;
          this.f("Browser session was started " + parseInt(b) + "s ago", 1);
          a = Math.max(0, a - 1e3 * b);
          (b = e.a.h("lastNotificationShownAt")) &&
            0 < b &&
            ((b = Date.now() / 1e3 - b),
            (a = Math.max(0, this.settings.displayInterval - 1e3 * b)),
            this.f(
              "Previous notification was shown " +
                parseInt(b) +
                "s ago. Next notification will be shown in " +
                parseInt(a / 1e3) +
                " seconds",
              1
            ));
          a > this.settings.initialDelay &&
            ((a = this.settings.initialDelay),
            this.f(
              "sessionAdjustedInitialDelay \x3e displayInterval. We will use  initialDelay in order to show notification on page reload"
            ));
          this.H(a + 1);
        },
        kb: function () {
          var a = [],
            b;
          for (b in this.j.events_by_event_type_id)
            a = a.concat(this.j.events_by_event_type_id[b]);
          return a;
        },
        nd: function () {
          if (this.Sa) {
            var a = null,
              b = this.kb();
            0 < b.length &&
              ((b = b[Math.floor(Math.random() * b.length)]),
              (a = m.a
                .yb(this.settings, b, this.settings.translations)
                .Ea.replace(/<\/?[^>]+(>|$)/g, "")),
              b.link &&
                (a +=
                  " \x3ca href\x3d'" +
                  b.link +
                  "'\x3eOpen related page\x3c/a\x3e"));
            this.settings.enable_pageviews &&
              0.5 > Math.random() &&
              this.ga &&
              (b = n.a.Cb(
                this.settings.pageviews_settings,
                this.ga.count,
                this.language,
                this.settings.translations
              )) &&
              (a = b.message
                .replace("\x3csmall\x3e", " ")
                .replace(/<\/?[^>]+(>|$)/g, ""));
            a &&
              (this.Sa.innerHTML =
                "\x3cdiv\x3eWhat's happening on this website\x3c/div\x3e" +
                a +
                "\x3cbr/\x3e\x3csub\x3e\x3ca href\x3d'https://fomo.com' title\x3d'by Fomo'\x3eby Fomo.com\x3c/a\x3e\x3c/sub\x3e");
          }
        },
        Mb: function (a) {
          "undefined" !== typeof a &&
            ((this.settings.timeAgoTranslation = a.time_ago),
            (this.settings.translations = a));
        },
        setup: function () {},
        setupSequence: function (b, e) {
          if (this.settings.shuffle_events)
            for (var c in b.events_by_event_type_id)
              b.events_by_event_type_id[c] = a.a.pd(
                b.events_by_event_type_id[c]
              );
          this.j = b;
          this.Mb(e);
          for (b = 0; b < this.wa.length; b++)
            (e = this.wa[b]), this[e.method](e.args[0]);
          this.Lb();
          this.sd();
          setTimeout(this.nd.bind(this), 1e3);
        },
        Sc: function () {
          this.classList.contains("fomo-notification-hide") &&
            (this.style.display = "none");
        },
        Lb: function () {
          var b = this;
          if (this.settings.fomo_feed) {
            var e = document.getElementById("fomo_feed");
            if (!e)
              return (
                a.a.G(
                  "Fomo Feed requires an element with id\x3d'fomo_feed'. For information on how this feature works, go to https://fomo.com/docs"
                ),
                (this.api.stopped = !0),
                !1
              );
            this.b = e;
          } else if (null === this.b) {
            e = document.createElement("div");
            e.id = "someone-purchased";
            window.document.body.appendChild(e);
            this.b = window.document.getElementById("someone-purchased");
            this.b.addEventListener("animationend", this.Sc);
            c.a.M() ||
              (this.b.addEventListener
                ? (this.b.addEventListener(
                    "mouseenter",
                    this.pause.bind(this),
                    !1
                  ),
                  this.b.addEventListener(
                    "mouseleave",
                    this.resume.bind(this),
                    !1
                  ))
                : this.b.attachEvent &&
                  (this.b.attachEvent("mouseenter", this.pause.bind(this)),
                  this.b.attachEvent("mouseleave", this.resume.bind(this))));
            if (
              "bottom_center" == this.settings.position ||
              "top_center" == this.settings.position
            )
              window.document.body.onresize = function () {
                b.ua();
              };
            this.settings.wcag_enabled && this.Bc();
          }
        },
        Bc: function () {
          var a = document.createElement("section");
          a.id = "fomo-wcga";
          a.setAttribute("class", "fomo-sr-only");
          a.setAttribute("style", "display:none");
          a.setAttribute("role", "complementary");
          a.setAttribute("aria-label", "Fomo notifications");
          this.Sa = a;
          var b = document.getElementsByTagName("footer")[0];
          b
            ? b.parentElement.insertBefore(a, b)
            : window.document.body.appendChild(a);
        },
        pause: function () {
          this.f("pause interval", 6);
          clearTimeout(this.S);
        },
        resume: function () {
          this.f("resume interval", 6);
          var b = a.a.i() - this.Kc,
            b =
              b >= this.settings.displayHold
                ? 1
                : this.settings.displayHold - b;
          this.S = setTimeout(this.enqueue.bind(this), b);
        },
        enqueue: function () {
          var a;
          this.settings.randomize
            ? (a =
                parseInt(
                  3 * Math.random() * this.settings.displayInterval,
                  10
                ) + 1e3)
            : (a = this.settings.displayInterval);
          this.R();
          this.f("Hide fomo notification", 4);
          this.Ib();
          this.settings.totalDisplayed < this.settings.totalPerPage
            ? this.H(a)
            : this.f(
                "Total notifications per page (\x3d" +
                  this.settings.totalPerPage +
                  ") has been reached. Reload to show more"
              );
        },
        Ka: function () {
          return e.a.P("pageviewsHasBeenShown") || this.La;
        },
        Ob: function () {
          return e.a.P("someoneIsViewingHasBeenShown");
        },
        debugModeEnable: function (a, b) {
          b = void 0 === b ? !0 : b;
          c.a.D("fomo_debug_mode", void 0 === a ? 1 : a, 100);
          b && location.reload();
        },
        f: function (a, b) {
          this.debugLog_static(a, void 0 === b ? 1 : b);
        },
        debugLog_static: function (a, b) {
          parseInt(c.a.U("fomo_debug_mode")) >= (void 0 === b ? 1 : b) &&
            console.log("Fomo.debugLog: " + a);
        },
        H: function (a) {
          clearTimeout(this.cd);
          setTimeout(this.bd.bind(this), a);
        },
        showNextNotification: function () {
          this.V
            ? this.f(
                "next notification can not be displayed when another notification is on the screen"
              )
            : this.H(1);
        },
        ib: function (a) {
          a = void 0 === a ? 0 : a;
          if (1 < a)
            return (
              this.f(
                "Recursion loop was detected. Developer needs to research this!",
                1
              ),
              null
            );
          for (var b = 0; b < this.j.sequence_event_types.length; b++) {
            var c = this.j.sequence_event_types[b],
              d = "seq_et_" + c.id,
              h = parseInt(e.a.h(d) || 0);
            if (h < c.count_shown_notifications) return e.a.h(d, h + 1), c;
          }
          this.f(
            "All sequence elements were already showns. Let's cycle again",
            5
          );
          for (b = 0; b < this.j.sequence_event_types.length; b++)
            e.a.remove("seq_et_" + this.j.sequence_event_types[b].id);
          return this.ib(a + 1);
        },
        wb: function (a) {
          return a.display_strategy && a.display_strategy.timeinterval
            ? "xpr-" + this.clientId + "-" + a.id
            : "snv-" + this.clientId + "-" + a.id;
        },
        jb: function () {
          if (0 == this.w.W.length) return !1;
          var a = JSON.parse(e.a.h("siv_loc_history"));
          null == a && (a = []);
          for (var b in this.w.W) {
            var c = this.w.W[b];
            if (-1 == a.indexOf(c))
              return (
                (b = n.a.qd(
                  this.settings.someone_is_viewing_settings,
                  c,
                  this.language,
                  this.settings.translations
                )),
                a.push(c),
                e.a.h("siv_loc_history", JSON.stringify(a)),
                (a = 300),
                0 == this.kb().length && (a = 3),
                e.a.F("someoneIsViewingHasBeenShown", !0, Date.now() + 1e3 * a),
                (this.w.Nb = !0),
                b
              );
          }
          e.a.remove("siv_loc_history");
          return this.jb();
        },
        Qa: function (a) {
          return "shopify_inventory_low" == a.id ? q.a.Qa() : !1;
        },
        Lc: function (a) {
          return "shopify_inventory_low" == a.id ? q.a.Vc(a) : a;
        },
        Ba: function (b, c, d) {
          c = void 0 === c ? null : c;
          d = void 0 === d ? 0 : d;
          if (1 < d)
            return (
              this.f(
                "fetchUnseenEventFromArray.recursion_depth \x3e 1. Skip checking for next notification"
              ),
              null
            );
          this.f(
            "fetchUnseenEventFromArray events.length\x3d" +
              b.length +
              " sequence_event_type\x3d" +
              JSON.stringify(c),
            6
          );
          if (
            (null == c || "someone_is_viewing" == c.integration_key_name) &&
            this.settings.someone_is_viewing_settings &&
            this.w &&
            this.w.W &&
            0 < this.w.W.length &&
            !this.Ob() &&
            !this.w.Nb
          ) {
            var h = this.jb();
            if (h) return h;
          }
          if (
            (null == c || "pageviews" == c.integration_key_name) &&
            this.settings.enable_pageviews &&
            !this.Ka() &&
            this.ga &&
            (h = n.a.Cb(
              this.settings.pageviews_settings,
              this.ga.count,
              this.language,
              this.settings.translations
            ))
          )
            return (
              (this.La = !0),
              e.a.F(
                "pageviewsHasBeenShown",
                !0,
                Date.now() +
                  1e3 * this.settings.pageviews_settings.pageviews_timeinterval
              ),
              h
            );
          for (var g = 0, l = 0; l < b.length; l++) {
            var t = b[l];
            if (!this.Qa(t))
              if (
                ((t = this.Lc(t)),
                (h = this.wb(t)),
                t.display_strategy && t.display_strategy.timeinterval)
              )
                if (e.a.P(h))
                  this.f(
                    "Event \x3cem\x3e" +
                      t.message +
                      "\x3c/em\x3e has custom display_strategy and it was already shown. It is shown once per " +
                      t.display_strategy.timeinterval +
                      " seconds",
                    3
                  );
                else
                  return (
                    e.a.F(
                      h,
                      !0,
                      Date.now() + 1e3 * t.display_strategy.timeinterval
                    ),
                    t
                  );
              else if ((g++, !e.a.h(h)))
                return (
                  e.a.h(h, a.a.i()),
                  0 < this.settings.maxNotificationsPerSession && this.ed(t),
                  t
                );
          }
          if (0 < g) {
            if (this.settings.loop) {
              for (g = 0; g < b.length; g++)
                (l = b[g]),
                  (h = this.wb(l)),
                  l.display_strategy || e.a.remove(h);
              this.f(
                "All notifications were shown. Looping same notifications again",
                1
              );
              return this.Ba(b, c, d + 1);
            }
            this.f(
              "All notifications were shown already and looping is turned OFF.",
              1
            );
          } else this.f("There are no events", 6);
        },
        Aa: function (a) {
          a = void 0 === a ? null : a;
          var b = this.ib();
          if (!b)
            return (
              this.f("There is NO sequeanceEventType which could be shown"),
              null
            );
          var e = b.integration_key_name;
          this.f(
            "Fetching events for sequence integration_key_name \x3d " +
              e +
              ", id\x3d" +
              b.id +
              ", sequence.event_type_id\x3d" +
              b.event_type_id +
              " sequence_event_type_id\x3d" +
              a,
            5
          );
          var c = this.j.events_by_event_type_id[b.event_type_id],
            c = "sticky" == b.id ? this.Ba(c, null) : this.Ba(c, b);
          if (!c)
            if (
              (this.f(
                "No event can be shown for sequence_event_type_id\x3d" +
                  b.id +
                  " (integration_key_name\x3d" +
                  e +
                  ")",
                5
              ),
              null == a)
            )
              c = this.Aa(b.id);
            else
              return a == b.id
                ? (this.f(
                    "All sequences were checked but no events could be shown. Return null and retry few seconds later",
                    6
                  ),
                  null)
                : this.Aa(a);
          return c;
        },
        xb: function () {
          if (c.a.inIframe() || c.a.hasFocus() || "test" == this.settings.env)
            return !1;
          this.f(
            "Notifications are not shown because browseer doesn't have focus",
            7
          );
          this.H(1e3);
          return !0;
        },
        bd: function () {
          if (this.api.stopped) return !1;
          if (!this.closed) {
            this.f("runNotifications():1", 7);
            if (
              this.settings.stop_notifications_after_timeout &&
              this.Jb + 1e3 * this.settings.stop_notifications_after_timeout <=
                a.a.i()
            )
              return (
                this.f(
                  "runNotifications is prevented by stop_notifications_after_timeout"
                ),
                !1
              );
            if (this.ub())
              return (
                this.f(
                  "Fomo is hidden by rules (stopped via runNotifications)"
                ),
                !1
              );
            if (!this.xb())
              if (l.a.Xb(this))
                this.f("Notifications are paused due to CSS selector rule", 1),
                  this.H(1e3);
              else {
                if (
                  this.settings.maxNotificationsPerSession &&
                  this.fb() >= this.settings.maxNotificationsPerSession
                )
                  return (
                    this.f(
                      this.settings.maxNotificationsPerSession +
                        " notifications were already shown in this session (" +
                        this.settings.maxNotificationsPerSessionTimerange / 60 +
                        "min). Fomo is paused. ",
                      1
                    ),
                    !1
                  );
                if (!this.settings.pageviews_settings || this.Ka() || this.Db)
                  if (0 < this.j.sequence_event_types.length) {
                    var b = this.Aa();
                    b
                      ? this.za(b)
                      : (this.f(
                          "fetchNextEvent didn't return the event. Retrying in 5 seconds",
                          3
                        ),
                        this.H(5e3));
                  } else
                    this.f(
                      "There are NO sequence_event_types. Nothing will be shown",
                      1
                    );
                else
                  this.f(
                    "Notification should be shown now but we are still waiting for pageviews response ...",
                    6
                  ),
                    this.H(500);
              }
          }
        },
        na: function () {
          return "hstry-first-timestamp-" + this.clientId;
        },
        Z: function () {
          return "hstry-count-since-first-event-" + this.clientId;
        },
        gb: function () {
          return parseInt(e.a.h(this.na()) || 0);
        },
        fb: function () {
          return parseInt(e.a.h(this.Z()) || 0);
        },
        ed: function () {
          this.gb()
            ? e.a.h(this.Z(), this.fb() + 1)
            : (e.a.h(this.na(), a.a.i()), e.a.h(this.Z(), 1));
        },
        gc: function () {
          this.settings.maxNotificationsPerSessionTimerange &&
            a.a.i() - 1e3 * this.settings.maxNotificationsPerSessionTimerange >
              this.gb() &&
            (e.a.m
              ? (localStorage.removeItem(this.na()),
                localStorage.removeItem(this.Z()))
              : (delete e.a.N[this.na()], delete e.a.N[this.Z()]));
        },
        Ib: function () {
          e.a.h("lastNotificationShownAt", parseInt(Date.now() / 1e3));
        },
        displaySpecificNotification: function (a) {
          if (this.api.stopped) return !1;
          this.closed || this.xb() || this.za(a);
        },
        za: function (b) {
          if (this.V)
            this.f(
              "Another notification is on the screen - do not show another one"
            );
          else {
            this.V = !0;
            this.settings.totalDisplayed++;
            var e = this;
            a.a.i();
            if (b && b.message) {
              this.f(
                "Showing notification (id\x3d" +
                  b.id +
                  "): \x3cem\x3e" +
                  b.message +
                  "\x3c/em\x3e",
                1
              );
              this.Ib();
              var c = m.a.yb(this.settings, b, this.settings.translations);
              null === this.b && this.Lb();
              if (null !== this.b && this.settings.fomo_feed)
                this.b.innerHTML = c.Ea;
              else if (null !== this.b) {
                this.b.innerHTML = c.Ea;
                this.b.className = c.kc.join(" ");
                if (
                  this.settings.powered_by_enabled &&
                  !this.settings.fomo_feed
                ) {
                  c = document.createElement("a");
                  "Powered by Fomo" !== this.settings.powered_by_text
                    ? (c.innerHTML = this.settings.powered_by_text)
                    : (c.innerHTML = "Guaranteed by Fomo");
                  var d = document.createElement("span");
                  d.innerHTML = x.a;
                  c.setAttribute("data-type-id", b.event_type_id);
                  c.appendChild(d);
                  b.id &&
                    "number" == typeof b.id &&
                    (c.addEventListener
                      ? c.addEventListener("click", function (a) {
                          a.stopPropagation();
                          "development" == e.settings.env
                            ? window.open("http://lvh.me:3000/event/" + b.id)
                            : window.open("https://fomo.com/event/" + b.id);
                        })
                      : c.attachEvent &&
                        c.attachEvent("click", function (a) {
                          a.stopPropagation();
                          "development" == e.settings.env
                            ? window.open("http://lvh.me:3000/event/" + b.id)
                            : window.open("https://fomo.com/event/" + b.id);
                        }));
                  d = document.createElement("div");
                  d.className = "about fomo-notification-powered-by";
                  d.appendChild(c);
                  this.b.appendChild(d);
                }
                this.ec();
                this.settings.closable &&
                  (c = document.getElementById("fomo-close")) &&
                  (c.addEventListener
                    ? c.addEventListener(
                        "click",
                        function (a) {
                          e.Eb(b);
                          a.stopPropagation();
                        },
                        !1
                      )
                    : c.attachEvent &&
                      c.attachEvent("click", this.Eb.bind(this, b)));
                var c = this.b.getElementsByTagName("a")[0],
                  d = this.b.getElementsByTagName("img")[0],
                  g = !this.settings.notification_clickable;
                b.link &&
                "" !== b.link &&
                null != b.link &&
                "undefined" !== typeof c
                  ? (d &&
                      "undefined" !== typeof c &&
                      g &&
                      (d.addEventListener
                        ? d.addEventListener(
                            "click",
                            function () {
                              e.ka(b);
                            },
                            !1
                          )
                        : d.attachEvent &&
                          d.attachEvent("click", function () {
                            e.ka(b);
                          })),
                    c &&
                      g &&
                      (this.settings.link_to_new_window &&
                        c.setAttribute("target", "_blank"),
                      c.addEventListener
                        ? c.addEventListener(
                            "click",
                            function (a) {
                              a.preventDefault();
                              e.ka(b);
                            },
                            !1
                          )
                        : c.attachEvent &&
                          c.attachEvent("click", function (a) {
                            a.preventDefault();
                            e.ka(b);
                          })))
                  : (c && (c.style.cursor = "default"),
                    d && (d.style.cursor = "default"));
                b.link &&
                  this.settings.notification_clickable &&
                  (d &&
                    ((d.style.cursor = "pointer"),
                    c &&
                      (c.onclick = function () {
                        return !1;
                      })),
                  this.Sb(b));
                this.Tb(b);
                this.mc();
              }
              null !== this.b &&
                (this.Xa(),
                this.Vb(),
                (this.S = setTimeout(
                  this.enqueue.bind(this),
                  this.settings.displayHold
                )),
                this.ba(b, "impr"));
            }
          }
        },
        Ua: !1,
        Va: !1,
        eb: null,
        $: null,
        da: !1,
        Sb: function (a) {
          var b = this,
            c = this;
          this.eb = a;
          this.b.style.cursor = "pointer";
          if (
            !this.Ua &&
            ((a = null),
            this.b.addEventListener
              ? (a = "addEventListener")
              : this.b.attachEvent && (a = "attachEvent"),
            a)
          )
            this.b[a](
              "click",
              function (a) {
                -1 == b.b.className.indexOf("suppress") &&
                  (a.preventDefault(), c.ka(c.eb));
              },
              !1
            );
          this.Ua = !0;
        },
        Tb: function (a) {
          if (!c.a.M()) {
            var b = this;
            this.$ = a;
            b.da = !1;
            this.Va ||
              (this.b.addEventListener
                ? this.b.addEventListener(
                    "mouseover",
                    function () {
                      b.da || (b.ba(b.$, "hover"), b.$a(b.$));
                      b.da = !0;
                    },
                    !1
                  )
                : this.b.attachEvent &&
                  this.b.attachEvent("mouseover", function () {
                    b.da || (b.ba(b.$, "hover"), b.$a(b.$));
                    b.da = !0;
                  }));
            this.Va = !0;
          }
        },
        $a: function (a) {
          r.a.Wb() && r.a.gd(a);
        },
        Vb: function () {
          p.a.jc();
        },
        Qb: function (a, b) {
          var c = this.ob();
          if (0 < c.length) {
            var e = c[c.length - 1];
            if (
              e.action == a &&
              b.id == e.event_id &&
              e.created_at_epoch > Date.now() / 1e3 - 60
            )
              return;
          }
          c.push({
            action: a,
            event_type_id: b.event_type_id,
            event_id: b.id,
            destination_url: b.link,
            source_url: document.location.href,
            created_at_epoch: parseInt(Date.now() / 1e3),
          });
          localStorage.setItem("FMO_attr", JSON.stringify(c));
        },
        ob: function () {
          var a = Date.now() / 1e3 - 7776e3,
            b = JSON.parse(localStorage.getItem("FMO_attr"));
          null == b && (b = []);
          b = b.filter(function (b) {
            return b.created_at_epoch >= a;
          });
          return (b = b.slice(-80));
        },
        Fb: function (a, b) {
          -1 < ["click", "hover"].indexOf(a) && this.Qb(a, b);
        },
        ka: function (b) {
          var e = this;
          this.Fb("click", b);
          var d = this;
          if (!(this.Ha && this.Ha > a.a.i() - 1e3)) {
            this.Ha = a.a.i();
            fomo.afterNotificationClick();
            r.a.sa() && c.a.D("Fomo._g.et_id", b.event_type_id, 0.05);
            var g = function () {
              var a = b.id,
                g = d.settings.aid_crypted,
                l = b.link,
                h = document.createElement("form");
              h.setAttribute("style", "display:none");
              h.setAttribute("method", "post");
              h.setAttribute(
                "action",
                d.settings.rubyStatsUrl +
                  "_and_redirect?url\x3d" +
                  encodeURIComponent(l) +
                  "\x26eid\x3d" +
                  encodeURIComponent(a) +
                  "\x26aid_crypted\x3d" +
                  encodeURIComponent(g) +
                  "\x26et_id\x3d" +
                  b.event_type_id +
                  (e.o ? "\x26seq_id\x3d" + e.o : "") +
                  "\x26d\x3d" +
                  c.a.cb()
              );
              h.setAttribute(
                "target",
                d.settings.link_to_new_window ? "_blank" : "_self"
              );
              h.setAttribute("id", "fomoRedirectForm");
              document.body.appendChild(h);
              h.submit();
              setTimeout(function () {
                var a = document.getElementById("fomoRedirectForm");
                a && document.body.removeChild(a);
              }, 1e3);
            };
            if (
              this.settings.shopify_modal_enabled &&
              b.product_data &&
              "object" == typeof b.product_data
            )
              try {
                FomoWindowShop ? E.a.open(b, this.settings) : g();
              } catch (H) {
                console.log("failed to open FomoWindowShop", H), g();
              }
            else g();
          }
        },
        Eb: function (a) {
          var b = Date.now() + 36e5,
            c = parseInt(e.a.P("dismissClickCount")) || 0,
            c = c + 1;
          e.a.F("dismissClickCount", c, b);
          this.ba(a, "dismiss_" + (2 >= c ? c : 2));
          2 <= c ? (this.Zb(a), e.a.F("dismissClickCount", 0, b)) : this.R();
        },
        Zb: function (a) {
          var c = this;
          this.R();
          setTimeout(function () {
            c.Xa();
            c.V = !0;
            b.a.X(c.b, "fomo-suppress");
            c.b.innerHTML =
              (c.settings.translations.dismiss
                ? c.settings.translations.dismiss.text
                : "Take a break from notifications?") +
              " \x3ca id\x3d'fomo-notification-suppress'\x3e" +
              (c.settings.translations.dismiss
                ? c.settings.translations.dismiss.link_text
                : "Hide for a day") +
              "\x3c/a\x3e";
            var e = document.getElementById("fomo-notification-suppress");
            e.addEventListener
              ? e.addEventListener("click", function (b) {
                  b.stopPropagation();
                  c.ab(a);
                })
              : e.attachEvent &&
                aboutSpan.attachEvent("click", c.ab.bind(c, a));
            clearTimeout(c.S);
            c.S = setTimeout(function () {
              c.R();
              c.S = setTimeout(c.enqueue.bind(c), 3e4);
            }, 5e3);
          }, 500);
        },
        ab: function (b) {
          this.R();
          e.a.m &&
            localStorage.setItem("disable-fomo-" + this.clientId, a.a.i());
          this.ba(b, "close", !1);
          this.closed = !0;
        },
        ba: function (b, e) {
          this.Fb(e, b);
          e = {
            aid_crypted: this.settings.aid_crypted,
            type: e,
            u: window.location.href,
            d: c.a.cb(),
          };
          b.event_type_id && (e.et_id = b.event_type_id);
          this.o && (e.seq_id = this.o);
          b = [];
          for (var d in e)
            b.push("s[" + d + "]\x3d" + encodeURIComponent(e[d]));
          d = b.join("\x26");
          try {
            var g = a.a.Ja();
            g.open("POST", this.settings.rubyStatsUrl, 1);
            g.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            );
            g.send(d);
          } catch (H) {}
        },
        Xa: function () {
          if (null === this.b) return !1;
          fomo.beforeNotificationShow();
          this.Kc = a.a.i();
          if (c.a.vb())
            (this.b.style.display = "block"),
              this.Ub(),
              ("bottom_center" != this.settings.position &&
                "top_center" != this.settings.position) ||
                this.ua();
          else
            var b = 0,
              e = 0,
              d = this,
              g = setInterval(function () {
                1 <= b && clearInterval(g);
                d.b.style.bottom = e + "px";
                d.b.style.opacity = b;
                d.b.style.filter = "alpha(opacity\x3d" + 100 * b + ")";
                d.b.style.display = "block";
                0 !== b ||
                  ("bottom_center" != this.settings.position &&
                    "top_center" != this.settings.position) ||
                  this.ua();
                b += 0.05;
                e += 1;
              }, 25);
        },
        Ub: function () {
          b.a.Ma(this.b, "fomo-notification-hide");
          b.a.X(this.b, "fomo-notification-show");
          b.a.Ma(this.b, "fomo-suppress");
        },
        Rb: function () {
          b.a.Ma(this.b, "fomo-notification-show");
          b.a.X(this.b, "fomo-notification-hide");
        },
        R: function () {
          this.V = !1;
          if (c.a.vb()) this.Rb();
          else
            var b = 1,
              a = 20,
              e = this,
              d = setInterval(function () {
                if (0 >= b)
                  return clearInterval(d), (e.b.style.display = "none"), !1;
                e.b.style.bottom = a + "px";
                e.b.style.opacity = b;
                e.b.style.filter = "alpha(opacity\x3d" + 100 * b + ")";
                b -= 0.05;
                b = b.toFixed(2);
                --a;
              }, 25);
          fomo.afterNotificationShow();
        },
        ec: function () {
          c.a.Ic()
            ? b.a.X(this.b, "fomo-notification-is-touch")
            : b.a.X(this.b, "fomo-notification-not-touch");
        },
        mc: function () {
          var b = this.b.getElementsByTagName("img")[0];
          if ("gap" == this.settings.theme && !c.a.M() && b)
            b.onload = function () {
              var a = this.offsetWidth;
              b.style.left = "-" + (a + 15) + "px";
              document.getElementById("someone-purchased").style.marginLeft =
                a + 15 + "px";
            };
          else {
            var a = document.getElementById("someone-purchased");
            a && (a.style.marginLeft = "0px");
            var e = this;
            b &&
              (b.onload = function () {
                var a = b.naturalHeight,
                  c = b.naturalWidth,
                  d = e.b.querySelector(".fomo-notification-image-wrapper");
                d &&
                  c > a &&
                  d.classList.add("fomo-notification-image-is-landscape");
              });
          }
        },
        ua: function () {
          var b = this,
            a = this.b.offsetWidth / 2,
            c = window.document.body.clientWidth / 2,
            e = this.b.querySelector("img");
          e &&
            (e.onload = function () {
              b.ua();
            });
          this.b.style.left = c - a + "px";
        },
        beforeNotificationShow: function () {},
        afterNotificationShow: function () {},
        afterNotificationClick: function () {},
        api: { setup: !1, started: !1, stopped: !1 },
        trigger: function (b, a) {
          this.f("Fomo.trigger(" + b + ") was just called via JS");
          switch (b) {
            case "start":
              this.api.started ||
                (a && e.a.ma(),
                (this.api.stopped = !1),
                (this.api.started = !0),
                this.reinitiate());
              break;
            case "stop":
              this.api.started = !1;
              this.api.stopped = !0;
              break;
            case "restartOrder":
              e.a.ma();
              break;
            case "resetCount":
              this.settings.totalDisplayed = 0;
            case "reload":
              this.reinitiate();
          }
        },
        sendErrorToFomo: function (b) {
          var c =
            fomo.settings.fomoUrl.replace("/api/v1", "") + "/widget_error";
          b = {
            url: window.location.href,
            client_id: fomo.clientHash,
            error: b,
          };
          try {
            var e = a.a.Ja();
            e.open("POST", c, !0);
            e.setRequestHeader("Content-type", "application/json");
            e.send(JSON.stringify(b));
          } catch (K) {}
        },
      }),
      "function" !== typeof fomoCustomErrorReport &&
        (function (b) {
          var a, c;
          for (a in b)
            (c = b[a]),
              "function" == typeof c &&
                (b[a] = (function (b, a) {
                  return function () {
                    try {
                      return a.apply(this, arguments);
                    } catch (I) {
                      var c = b + "(): " + I.message,
                        e = I.stack;
                      "object" === typeof e && (e = JSON.stringify(e));
                      try {
                        console.log(c), console.log(e);
                      } catch (L) {}
                      window.console &&
                        window.console.log &&
                        (window.console.log(c), window.console.log(e));
                    }
                  };
                })(a, c));
        })(window.fomo),
      k.a.fc());
  },
  function (k, f, d) {
    var c = d(7);
    f.a = {
      ea: function (a) {
        a = a.routes_to_track;
        if (!a) return !1;
        c.a.td(a) ? c.a.vd() : c.a.wd();
        c.a.$b();
      },
    };
  },
  function (k, f, d) {
    var c = d(0),
      a = d(8);
    f.a = {
      td: function (b) {
        var a = this;
        return b
          .map(function (b) {
            return b ? a.Qc(b) : !1;
          })
          .some(function (b) {
            return !0 === b;
          });
      },
      Qc: function (b) {
        var a = /https?:\/\//i,
          c = window.location.href.replace(a, "");
        b = b.replace(a, "");
        return c.includes(b)
          ? !0
          : [this.Yb, this.vc, this.wc, this.xc]
              .map(function (a) {
                return a(c, b);
              })
              .some(function (b) {
                return !0 === b;
              });
      },
      Yb: function (b, a) {
        return b === a || b === a + "/" || b + "/" === a;
      },
      wc: function (b, a) {
        return -1 === a.indexOf("?") && a === b.split("?")[0];
      },
      vc: function (b, a) {
        return -1 === a.indexOf("#") && a === b.split("#")[0];
      },
      xc: function (b, a) {
        return (
          -1 !== a.indexOf("*") &&
          b.substring(0, a.split("*")[0].length) === a.split("*")[0]
        );
      },
      xa: function () {
        return fomo.settings.fomoUrl + "/abandoned_cart";
      },
      pb: function () {
        return fomo.settings.abandoned_cart.abandoned_cart_event_type;
      },
      Da: function () {
        return a.a.Nc();
      },
      hb: function () {
        return fomo.settings.abandoned_cart.cart_contents_variables;
      },
      wd: function () {
        var a = this,
          c = this.Da(),
          d = this.hb();
        if (!c && d) return !1;
        var l =
          this.xa() +
          "/check_status?event_type_id\x3d" +
          this.pb().id +
          "\x26cart_timeout\x3d" +
          fomo.settings.abandoned_cart.cart_timeout +
          "\x26support_variables\x3d" +
          d;
        if (d) l += "\x26cart_token\x3d" + c;
        else {
          c = this.qc();
          if (!c) return;
          l += "\x26last_visited\x3d" + c;
        }
        fetch(l)
          .then(function (a) {
            return a.json();
          })
          .then(function (b) {
            b.abandoned && a.od(b.event_id);
          })
          .catch(function (a) {
            return console.log(a);
          });
      },
      vd: function () {
        var a = this.Da(),
          c = this.hb();
        if (!a && c) return !1;
        c || this.hd();
        a &&
          fetch(
            this.xa() +
              "/visited_at?event_type_id\x3d" +
              this.pb().id +
              "\x26cart_token\x3d" +
              a
          ).catch(function (a) {
            return console.log(a);
          });
      },
      od: function (a) {
        c.a.loadJs(
          fomo.settings.fomoUrl +
            "/js-obj/" +
            fomo.clientHash +
            ("/specific_notification/?event_id\x3d" +
              a +
              "\x26hide_after_shown\x3dtrue")
        );
      },
      qc: function () {
        return window.localStorage.getItem("fomoAbandonedCartLastVisitedAt");
      },
      hd: function () {
        window.localStorage.setItem(
          "fomoAbandonedCartLastVisitedAt",
          new Date().toISOString()
        );
      },
      $b: function () {
        var a = window.localStorage.getItem("fomoPushTokenSentToServer"),
          c = this.Da();
        c &&
          a &&
          fetch(
            this.xa() +
              "/update_push_subscription?push_subscription_token\x3d" +
              a +
              "\x26cart_token\x3d" +
              c
          ).catch(function (a) {
            return console.log(a);
          });
      },
    };
  },
  function (k, f, d) {
    var c = d(1);
    f.a = {
      Nc: function () {
        return c.a.U("cart");
      },
    };
  },
  function (k, f) {
    f.a = {
      jc: function () {
        var d = document.querySelectorAll(
            ".fomo-notification-content span.fomo-animation-count-up"
          ),
          c = d.length;
        if (c) for (var a = 0; a < c; a++) this.rd(d[a]);
      },
      rd: function (d) {
        var c = this,
          a = d.getAttribute("data-value"),
          a = a.replace(/\,/g, ""),
          a = parseFloat(a);
        if (!a || isNaN(a)) d.style.display = "inline-block";
        else {
          var b = 20 <= a ? a - 20 : 0,
            e = a.toString().split(".")[1],
            g = e ? 1.23 : 1,
            l = 0,
            f = function () {
              b + g < a
                ? ((b += g),
                  e && (b = parseFloat(b.toFixed(2))),
                  setTimeout(f, 50 + 4 * l),
                  l++)
                : (b = a);
              d.innerHTML = c.Uc(b);
              d.style.display = "inline-block";
            };
          setTimeout(f, 500);
        }
      },
      Uc: function (d) {
        return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    };
  },
  function (k, f, d) {
    d(0);
    var c = d(2),
      a = d(21),
      b = d(22);
    f.a = {
      sb: [],
      Ac: {
        L: null,
        s: null,
        J: null,
        oa: 0,
        pc: 0,
        event_listener: "submit",
        Gb: !1,
      },
      ea: function (a) {
        window.fomo_instant_log = { v: "2.0.0" };
        var b = this;
        a.forEach(function (e, d) {
          c.a.bc(e.id);
          if (b.Ec(e.url)) {
            window.fomo_instant_log.init = "done";
            var g = JSON.parse(JSON.stringify(b.Ac));
            g.L = a[d].id;
            g.lb =
              fomo.settings.fomoUrl +
              "/instant/capture/?client\x3d" +
              fomo.clientHash +
              "\x26instant_id\x3d" +
              g.L;
            g.J = a[d].element_selector;
            g.Cc = a[d].instant_type;
            if (a[d].settings && "object" === typeof a[d].settings)
              for (setting in ((e = a[d].settings), e))
                e.hasOwnProperty(setting) && (g[setting] = e[setting]);
            b.sb.push(g);
            var l = setInterval(function () {
              "complete" === document.readyState && (clearInterval(l), b.ia(g));
            }, 100);
          }
        });
        window.fomo_instant_log.instants = this.sb;
      },
      ia: function (c) {
        if (!c.Gb)
          switch (((c.Gb = !0), c.Cc)) {
            case "action":
              new a.a(c).ia();
              break;
            default:
              new b.a(c).ia();
          }
      },
      Ec: function (a) {
        var b = window.location.href,
          c = /https?:\/\//i,
          b = b.replace(c, "");
        a = a.replace(c, "");
        return b == a ||
          b == a + "/" ||
          b + "/" == a ||
          (-1 == a.indexOf("?") && a == b.split("?")[0]) ||
          (-1 == a.indexOf("#") && a == b.split("#")[0])
          ? !0
          : -1 != a.indexOf("*")
          ? ((a = a.split("*")[0]), b.substring(0, a.length) == a)
          : !1;
      },
    };
  },
  function (k, f, d) {
    var c = d(0),
      a = d(1);
    f.a = {
      ea: function () {
        (this.sa() || this.qb()) && this.ud();
        this.sa() && this.check(fomo.settings.conversion_goals);
        this.qb() && this.check(fomo.settings.linked_conversion_goals);
      },
      sa: function () {
        return (
          fomo.settings.conversion_goals &&
          fomo.settings.conversion_goals.length
        );
      },
      qb: function () {
        return (
          fomo.settings.linked_conversion_goals &&
          fomo.settings.linked_conversion_goals.length
        );
      },
      Wb: function () {
        if (this.sa())
          for (var a = fomo.settings.conversion_goals, c = 0; c < a.length; c++)
            if ("any" == a[c].conversion_type) return !0;
        return !1;
      },
      gd: function (a) {
        this.ra() || this.D(a.event_type_id, null);
      },
      ud: function () {
        var b = c.a.qa("__fg") || a.a.U("Fomo._g.et_id"),
          d = c.a.qa("__fgc");
        b && !this.ra() && this.D(b, d);
        a.a.Hb("Fomo._g.et_id");
      },
      D: function (b, c) {
        b = JSON.stringify({
          t: Math.round(new Date() / 1e3),
          u: window.location.href,
          et: b,
          c: c,
        });
        a.a.D("Fomo._g." + fomo.clientId, encodeURIComponent(b), 7);
      },
      remove: function () {
        a.a.Hb("Fomo._g." + fomo.clientId);
      },
      ra: function () {
        return a.a.U("Fomo._g." + fomo.clientId);
      },
      check: function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = this.Dc(a[b]),
            d = a[b].id;
          c && !a[b].embed_found_at && this.uc(d);
          this.ra() && c && this.ic(d);
        }
      },
      Dc: function (a) {
        var b = a.url;
        a = a.matcher;
        var c = window.location.href,
          d = /https?:\/\//i,
          c = c.replace(d, ""),
          b = b.replace(d, "");
        return "equals" == a &&
          (c == b ||
            c == b + "/" ||
            c + "/" == b ||
            (-1 == b.indexOf("?") && b == c.split("?")[0]) ||
            (-1 == b.indexOf("#") && b == c.split("#")[0]))
          ? !0
          : "contains" == a
          ? -1 !== c.indexOf(b)
          : !1;
      },
      ic: function (a) {
        var b = this,
          c = decodeURIComponent(b.ra()),
          d = JSON.parse(c);
        d &&
          d.t &&
          d.u &&
          ((a =
            fomo.settings.fomoUrl +
            "/applications/" +
            fomo.clientHash +
            "/conversion_goals/" +
            a +
            "/track"),
          (d = new XMLHttpRequest()),
          (d.onreadystatechange = function () {
            4 == this.readyState &&
              200 <= this.status &&
              300 > this.status &&
              b.remove();
          }),
          d.open("POST", a, !0),
          d.setRequestHeader("Content-Type", "application/json"),
          d.send(c));
      },
      uc: function (a) {
        var b = new XMLHttpRequest();
        b.open(
          "GET",
          fomo.settings.fomoUrl +
            "/applications/" +
            fomo.clientHash +
            "/conversion_goals/" +
            a +
            "/found",
          !0
        );
        b.send();
      },
    };
  },
  function (k, f) {
    f.a =
      ' \x3csvg class\x3d"fomo-notification-badge" viewBox\x3d"0 0 12 12"\x3e\x3cpath d\x3d"m6.00006288.00099224c.3193386-.01378494.57129383.09846389.8252022.26092929.32226831.20578951.68555259.61342997 1.13379851.87140534.62988807.36333172 1.79786655-.13784943 2.39552781.75817188.3486357.52185857.3652374.93146831.3906282 1.33615486.0283206.43619499.1035165.83792762.5468796 1.4287109.7334045.97774633.8857496 1.62859258.5078167 2.30700872-.2578146.46278024-.7998113.71977097-.9257889 1.01220869-.2666038.62327636.0283205 1.09294907-.3369169 1.81961251-.2539084.50413507-.64551321.83595837-1.16700193 1.00531617-.43945679.1427727-.88184329-.0640015-1.23340872.0856636-.61914579.2619139-1.07520428.8714054-1.56837245 1.0259937-.19043128.0590783-.37988598.0886175-.56836412.0876808-.1894547.0009367-.3789094-.0276179-.56836411-.0876808-.4921916-.1545883-.94922666-.7630951-1.56837245-1.0259937-.352542-.1496651-.79395193.0571091-1.23340872-.0856636-.52148872-.1693578-.91309355-.5011811-1.16700192-1.00531617-.36621399-.72666344-.07031308-1.19633615-.33789344-1.81961251-.12597761-.29243772-.66797432-.54942845-.92578897-1.01220869-.37793284-.67841614-.22461125-1.32926239.50781674-2.30700872.44336307-.59078328.51855901-.99251591.54687956-1.4287109.0263674-.40468655.04199253-.81429629.39062825-1.33615486.59766123-.89602131 1.76563972-.39484016 2.39552779-.75817188.44824592-.25797537.81055363-.66561583 1.13379851-.87140534.25488494-.1624654.50684016-.27471423.82617876-.26092929zm2.79791416 4.15137155c-.29554757-.29021459-.77040162-.28589136-1.06061621.00965621l-2.38086083 2.42373-.86906227-.869142-.07065551-.06239145c-.2942184-.22876867-.71964169-.20797152-.99000467.06239145-.29289321.29289322-.29289321.76776696 0 1.06066018l1.40471887 1.40471886.0711208.06275558c.29618702.22994259.72472891.20696539.9943455-.06760566l2.91067053-2.96415696.06174563-.07122058c.22608063-.29628891.2014113-.72150524-.07140184-.98939563z" fill\x3d"currentColor" /\x3e\x3c/svg\x3e';
  },
  function (k, f) {
    f.a = {
      qd: function (d, c) {
        c = d.event_type.message.replace(/\{\{\s?location\s?\}\}(?!\})/g, c);
        var a = d.event_type.image_url;
        c = c.replace(
          /\{\{\s?time_ago\s?\}\}(?!\})/g,
          "\x3csmall\x3eJust now\x3c/small\x3e"
        );
        return {
          message: c,
          image_url: a,
          event_type_id: d.event_type.id,
          id: "smvw",
        };
      },
      Cb: function (d, c, a, b, e) {
        e = void 0 === e ? !1 : e;
        var g = d.pageviews_event_type,
          l = g.message,
          f = g.image_url;
        g.disable_images && (f = null);
        g.translations[a] && (l = g.translations[a]);
        a = "Just now";
        b &&
          b.time_period &&
          b.time_period[d.counter_timerange] &&
          (a = b.time_period[d.counter_timerange + ""]);
        d = d.enable_pageviews_on_entire_domain ? b.website : b.page;
        c && (c = c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
        window.fomo_active_visitors_custom_message &&
          (b = window.fomo_active_visitors_custom_message()) &&
          (window.fomo &&
            window.fomo.debugLog_static &&
            window.fomo.debugLog_static(
              "ActiveVisitor event_type.message is overriden via JS"
            ),
          (l = b));
        l = l
          .replace(/\{\{\s?visitor_count\s?\}\}(?!\})/g, c)
          .replace(/\{\{\s?page_or_website\s?\}\}(?!\})/g, d)
          .replace(
            /\{\{\s?time_period\s?\}\}(?!\})/g,
            "\x3csmall\x3e" + a + "\x3c/small\x3e"
          );
        if ((c = l.match(/\{\{.*\}\}/g)) && 0 < c.length)
          for (var k in c) {
            a = c[k];
            b = a.replace(/\{/g, "").replace(/\}/g, "");
            d = [];
            for (var m = "", q = !1, p = 0; p < b.length; p++) {
              var n = b.charAt(p);
              "[" == n ? (q = !0) : "]" == n && (q = !1);
              "|" != n || q ? (m += n) : (d.push(m.trim()), (m = ""));
            }
            d.push(m.trim());
            b = d[0].trim();
            m = null;
            "html_title" == b
              ? (m = document.title)
              : "html_first_h1" == b
              ? ((q = document.getElementsByTagName("h1")),
                0 < q.length && (m = q[0].innerText))
              : "html_meta_fomo_title" == b &&
                ((m = this.pa("fomo:title")),
                window.html_meta_fomo_title &&
                  (q = window.html_meta_fomo_title()) &&
                  (m = q));
            if (1 < d.length)
              for (q = 1; q < d.length; q++)
                (n = d[q].split("[")),
                  (p = n[0].trim()),
                  (n = n[1].replace("]", "")),
                  "trim_before" == p
                    ? ((p = m.split(n)),
                      (m = p[p.length - 1]),
                      1 == p.length && (m = ""))
                    : "trim_after" == p
                    ? ((p = m.split(n)),
                      (m = m.split(n)[0]),
                      1 == p.length && (m = ""))
                    : "fallback" == p && (("" != m && m) || (m = n));
            e && (m = "Sample_Page_Title");
            if (!m)
              return (
                window.fomo &&
                  window.fomo.debugLog_static &&
                  window.fomo.debugLog_static(
                    "Active visitor notification will not be shown because " +
                      b +
                      " is not returning a string"
                  ),
                null
              );
            l = l.replace(a, m);
          }
        e = { message: l, image_url: f, event_type_id: g.id, id: "pageviews" };
        (g = this.pa("fomo:group_url")) && (e.link = g);
        (g = this.pa("fomo:image_url")) && (e.image_url = g);
        return e;
      },
      pa: function (d) {
        for (
          var c = document.getElementsByTagName("meta"), a = 0;
          a < c.length;
          a++
        )
          if (c[a].getAttribute("property") === d)
            return c[a].getAttribute("content");
        return null;
      },
    };
  },
  function (k, f) {
    f.a = {
      fc: function () {
        Function.prototype.bind ||
          (Function.prototype.bind = function (c) {
            function a() {
              return g.apply(
                this instanceof b ? this : c,
                d.concat(Array.prototype.slice.call(arguments))
              );
            }
            function b() {}
            if ("function" !== typeof this)
              throw new TypeError(
                "Function.prototype.bind - what is trying to be bound is not callable"
              );
            var d = Array.prototype.slice.call(arguments, 1),
              g = this;
            this.prototype && (b.prototype = this.prototype);
            a.prototype = new b();
            return a;
          });
        if ("function" !== typeof window.CustomEvent) {
          var d = function (c, a) {
            a = a || { bubbles: !1, cancelable: !1, detail: void 0 };
            var b = document.createEvent("CustomEvent");
            b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
            return b;
          };
          d.prototype = window.Event.prototype;
          window.CustomEvent = d;
        }
      },
    };
  },
  function (k, f, d) {
    var c = d(0);
    f.a = {
      active: function () {
        return "__test__" === c.a.qa("fomo") ? !0 : !1;
      },
      display: function () {
        var a = {
          id: 0,
          image_url: "https://fomo.com/static/fomo-avatar.png",
          event_type_id: "preview",
          created_at_to_seconds_from_epoch: Date.now() / 1e3,
          message:
            "Someone is testing \x3ca href\x3d'https://fomo.com'\x3eFomo Events\x3c/a\x3e {{ time_ago }}",
          link: "https://fomo.com",
          disable_images: "test" == fomo.settings.env ? !0 : !1,
        };
        fomo.Mb({
          time_ago: {
            pre: "about",
            post: "ago",
            periods: [
              ["second", "seconds"],
              ["minute", "minutes"],
              ["hour", "hours"],
              ["day", "days"],
              ["week", "weeks"],
              ["month", "months"],
              ["year", "years"],
            ],
          },
        });
        fomo.settings.env = "test";
        fomo.settings.displayHold = 15e3;
        fomo.settings.loop = !0;
        document.body ? fomo.za(a) : setTimeout(this.display.bind(this), 200);
      },
    };
  },
  function (k, f, d) {
    var c = d(4);
    f.a = {
      jd: function (a) {
        var b = [];
        fomo.settings.rules.forEach(function (d) {
          var e = !1;
          "show" == d.parameter &&
            d.rule_conditions.forEach(function (b) {
              "css_selector" == b.parameter &&
                ((a.ha = {
                  path: b.value,
                  action: c.a.C(d.value) ? "" : "hide",
                }),
                (e = !0));
            });
          e || b.push(d);
        });
        fomo.settings.rules = b;
      },
      Xb: function (a) {
        if (a.ha && document.querySelector)
          if ("hide" == a.ha.action) {
            if (document.querySelector(a.ha.path)) return !0;
          } else if (!document.querySelector(a.ha.path)) return !0;
      },
    };
  },
  function (k, f, d) {
    var c = d(1);
    f.a = {
      Qa: function () {
        return !this.Fc();
      },
      Fc: function () {
        return fomo.shopifyData.variants ? this.ya().inventoryLow : !1;
      },
      Vc: function (a) {
        var b = a.message
          .replace("$quantity", this.Oc())
          .replace("$title", this.Pc());
        a.message = b;
        return a;
      },
      ya: function () {
        return fomo.shopifyData.variants[this.lc()];
      },
      lc: function () {
        var a = c.a.tc().variant;
        return a && fomo.shopifyData.variants[a]
          ? a
          : fomo.shopifyData.firstLoadVariantId;
      },
      Oc: function () {
        return this.ya().quantity;
      },
      Pc: function () {
        return this.ya().title;
      },
    };
  },
  function (k, f) {
    f.a = {
      Mc: function () {
        var d = this.Hc()
            ? fomo.settings.fomoUrl.replace("api/v1", "") + "windowshop.js"
            : "https://s3-us-west-1.amazonaws.com/usefomo/js/windowshop.js",
          c = document.createElement("script");
        c.type = "text/javascript";
        c.src = d;
        document.getElementsByTagName("head")[0].appendChild(c);
      },
      open: function (d, c) {
        var a = { trigger: "now" };
        c.shopify_modal_options &&
          ((a = {
            skip: c.shopify_modal_options.skip,
            button_color: c.shopify_modal_options.button_color,
            button_text_color: c.shopify_modal_options.button_text_color,
            trigger: "now",
          }),
          c.shopify_modal_options.money_format &&
            (a.money_format = c.shopify_modal_options.money_format));
        this.Yc();
        FomoWindowShop.init([d.product_data], a);
      },
      sc: function (d) {
        for (var c = 0; c < d.length; c++) {
          var a = d[c].link;
          a && (a = a.split("/products/")[1]) && this.rc(a.split("?")[0], c);
        }
      },
      rc: function (d, c) {
        var a = new XMLHttpRequest();
        a.open("GET", "/products/" + d + ".js", !0);
        a.setRequestHeader(
          "Content-type",
          "application/json; charset\x3dutf-8"
        );
        a.timeout = 3e3;
        a.onload = function () {
          if (200 <= a.status && 400 > a.status) {
            var b = a.response;
            b &&
              (b = JSON.parse(b)) &&
              b.id &&
              b.available &&
              fomo.updateRecentEvent(c, "product_data", b);
          }
        };
        a.send(null);
      },
      yd: function (d) {
        this.Mc();
        try {
          this.sc(d);
        } catch (c) {
          console.log(c);
        }
      },
      Hc: function () {
        return -1 < ["dev-whatsup.myshopify.com"].indexOf(location.host)
          ? !0
          : !1;
      },
      Yc: function () {
        for (
          var d = document.getElementsByClassName("fomo__modal"),
            c = d.length - 1;
          0 <= c;
          c--
        )
          d[c] && d[c].parentElement && d[c].parentElement.removeChild(d[c]);
      },
    };
  },
  function (k, f, d) {
    var c = d(0);
    f.a = {
      m: !0,
      N: {},
      h: function (a, b) {
        a = "Fomo." + a;
        if ("undefined" === typeof b)
          if (this.m)
            try {
              return localStorage.getItem(a);
            } catch (e) {
              return null;
            }
          else return (a = this.N[a]), "undefined" === typeof a ? null : a;
        else if (this.m)
          try {
            this.kd(a, b);
          } catch (e) {
            (this.m = !1), (this.N[a] = b);
          }
        else this.N[a] = b;
      },
      remove: function (a) {
        try {
          localStorage.removeItem("Fomo." + a);
        } catch (b) {}
      },
      kd: function (a, b) {
        if (this.m)
          try {
            return localStorage.setItem(a, b), !0;
          } catch (g) {
            a = {};
            try {
              localStorage.getItem("statsQueue") &&
                (a = JSON.parse(localStorage.getItem("statsQueue")) || {});
            } catch (l) {
              c.a.G("Could not parse local storage key.");
            }
            b = 0;
            for (var d in a) b++;
            0 < b && fomo.Dd(!1, !1);
            this.ma();
          }
        return !1;
      },
      F: function (a, b, c) {
        if (void 0 == b || void 0 == c)
          throw (
            (console.log(
              "storageWithExpiryAt must be called with value and expireAt argument"
            ),
            "storageWithExpiryAt must be called with value and expireAt argument")
          );
        if (c < Date.now())
          throw (
            (console.log(
              "storageWithExpiryAt -\x3e expireAt is lower than current data"
            ),
            "storageWithExpiryAt -\x3e expireAt is lower than current data")
          );
        this.h(a, b);
        this.h(a + "_expireAt", c + "");
      },
      P: function (a) {
        var b = this.h(a);
        if (!b) return null;
        if (parseInt(this.h(a + "_expireAt")) >= Date.now()) return b;
        this.h(a, null);
        this.h(a + "_expireAt", null);
        return null;
      },
      Bd: function () {
        try {
          return (
            localStorage.setItem("test", "test"),
            localStorage.removeItem("test"),
            !0
          );
        } catch (a) {
          return !1;
        }
      },
      T: !1,
      ma: function () {
        if (this.m && !this.T) {
          this.T = !0;
          for (var a = localStorage.length - 1; 0 <= a; a--) {
            var b = localStorage.key(a);
            if (b && "Fomo.snv" === b.split("-")[0])
              try {
                localStorage.removeItem(b);
              } catch (e) {
                c.a.G("Exception on removing local storage key");
              }
          }
          this.T = !1;
        } else if (!this.m && !this.T) {
          this.T = !0;
          for (a in Store.N)
            a && "Fomo.snv" === a.split("-")[0] && delete this.N[a];
          this.T = !1;
        }
      },
      hc: function () {
        for (var a = localStorage.length - 1; 0 <= a; a--) {
          var b = localStorage.key(a);
          -1 < b.toLowerCase().indexOf("fomo") && localStorage.removeItem(b);
        }
      },
    };
  },
  function (k, f) {
    f.a = {
      X: function (d, c) {
        var a = d.className || "";
        -1 == a.indexOf(c) &&
          ("" !== a && (c = " " + c), (d.className = a + c));
      },
      Ma: function (d, c) {
        var a = d.className || "",
          a = a.replace(new RegExp("\\s?\\b" + c + "\\b", "g"), "");
        d.className = a;
      },
    };
  },
  function (k, f, d) {
    function c(a) {
      this.g = a;
      this.l = "Fomo._i.url.";
    }
    var a = d(1),
      b = d(0),
      e = d(2);
    c.prototype.ia = function () {
      "url_reached" == this.g.action_element ? this.ca() : this.K();
    };
    c.prototype.K = function () {
      try {
        var a = this.g.action_element,
          c = this;
        if (a && 10 > this.g.oa) {
          var d = window.document.querySelector(a);
          d
            ? ((window.fomo_instant_log.action_dom_element = d),
              d.addEventListener("click", function () {
                e.a.Kb("click", c.g);
              }))
            : (this.g.pc++, setTimeout(this.K.bind(this), 1e3));
        }
      } catch (E) {
        b.a.G(
          "[Fomo Instant Action] Error trying to find element: " +
            a +
            ". Ensure you are using valid css selector."
        );
      }
    };
    c.prototype.ca = function () {
      this.l += this.g.L;
      a.a.U(this.l) || (a.a.D(this.l, "1", 1), e.a.Kb("url_reached", this.g));
    };
    f.a = c;
  },
  function (k, f, d) {
    function c(a) {
      this.g = a;
    }
    d(0);
    var a = d(2);
    c.prototype.ia = function () {
      this.ca();
    };
    c.prototype.ca = function () {
      var b = document.getElementsByTagName("form");
      window.fomo_instant_log.forms_found = b;
      window.fomo_instant_log.formElSelector = this.g.J;
      var c;
      if (!b.length && 10 > this.g.oa)
        this.g.oa++, setTimeout(this.ca.bind(this), 1e3);
      else {
        if (this.g.J && "string" == typeof this.g.J) {
          switch (this.g.J[0]) {
            case "#":
              c = this.l(b, "id", this.g.J.substring(1));
              break;
            case ".":
              c = this.l(b, "className", this.g.J.substring(1));
          }
          if (!c) return !1;
        }
        if (c && ((this.g.s = c), this.g.s)) return this.K(), !1;
        if ((c = this.l(b, "className", "fomo_instant")))
          if (((this.g.s = c), this.g.s)) return this.K(), !1;
        if (1 < b.length && ((b = this.dd(b)), 1 < b.length))
          return (
            a.a.Pa("ERROR: more than one form found..."),
            (window.fomo_instant_log.error = "more than one form found"),
            !1
          );
        if (10 <= this.g.oa)
          return (
            a.a.Pa("ERROR: no form found on page."),
            (window.fomo_instant_log.error = "no form found on page."),
            !1
          );
        this.g.s = b[0];
        this.g.s && this.K();
      }
    };
    c.prototype.l = function (a, c, d) {
      for (var b = 0; b < a.length; b++)
        if (-1 < (" " + a[b][c] + " ").indexOf(d)) return a[b];
      return !1;
    };
    c.prototype.K = function () {
      var a = this,
        c = this.g.s;
      window.fomo_instant_log.form = c;
      window.fomo_instant_log["form.className"] = c.className;
      window.fomo_instant_log["form.id"] = c.id;
      window.fomo_instant_log.data = this.g;
      window.fomo_instant_log.form_inputs = function () {
        return a.Ia(c);
      };
      "click" == this.g.event_listener
        ? this.Ab()
        : c.addEventListener("submit", function () {
            a.Ga();
          });
    };
    c.prototype.Ab = function () {
      var a = this,
        c = this.g.s,
        d = c.getElementsByTagName("input"),
        c = c.getElementsByTagName("button"),
        f;
      this.g.click_trigger_el &&
        (f = document.querySelector(this.g.click_trigger_el));
      if (!f)
        for (var k = 0; k < d.length; k++)
          "submit" == d[k].type.toLowerCase() && (f = d[k]);
      if (!f)
        for (k = 0; k < c.length; k++)
          "submit" == c[k].type.toLowerCase() && (f = c[k]);
      f &&
        ((window.fomo_instant_log.clickListenerEl = f),
        f.addEventListener("click", function () {
          a.Ga();
        }));
    };
    c.prototype.Ga = function () {
      var b = "fomo_" + this.Ia(this.g.s).split("\x26").join("\x26fomo_"),
        c = this.g.lb,
        c =
          c +
          ("\x26" + b) +
          ("\x26fomo_external_id\x3d" + this.g.L + "_" + Date.now());
      a.a.Oa(c, this.g.L);
    };
    c.prototype.dd = function (a) {
      for (var b = [], c = 0; c < a.length; c++)
        if (
          "adminbarsearch" != a[c].id &&
          (0 != a[c].offsetHeight || 0 != a[c].offsetWidth)
        ) {
          var d = a[c].getElementsByTagName("input");
          (d &&
            2 == d.length &&
            d[0].type &&
            "text" == d[0].type.toLowerCase() &&
            d[1].type &&
            "submit" == d[1].type.toLowerCase() &&
            d[1].value &&
            "search" == d[1].value.toLowerCase()) ||
            b.push(a[c]);
        }
      return b;
    };
    c.prototype.Ia = function (a) {
      if (a && "FORM" === a.nodeName) {
        var b,
          c,
          d = [];
        for (b = a.elements.length - 1; 0 <= b; --b) {
          var f = a.elements[b];
          if ("" !== f.name)
            switch (
              (f.name &&
                "[]" === f.name.slice(-2) &&
                (f.name = f.name.replace("[]", "[_]")),
              f.nodeName)
            ) {
              case "INPUT":
                switch (f.type) {
                  case "hidden":
                  case "text":
                  case "email":
                  case "url":
                    d.push(f.name + "\x3d" + encodeURIComponent(f.value));
                    break;
                  case "checkbox":
                  case "radio":
                    f.checked &&
                      d.push(f.name + "\x3d" + encodeURIComponent(f.value));
                }
                break;
              case "TEXTAREA":
                d.push(f.name + "\x3d" + encodeURIComponent(f.value));
                break;
              case "SELECT":
                switch (f.type) {
                  case "select-one":
                    d.push(f.name + "\x3d" + encodeURIComponent(f.value));
                    break;
                  case "select-multiple":
                    for (c = f.options.length - 1; 0 <= c; --c)
                      f.options[c].selected &&
                        d.push(
                          f.name +
                            "\x3d" +
                            encodeURIComponent(f.options[c].value)
                        );
                }
            }
        }
        return d.join("\x26");
      }
    };
    f.a = c;
  },
  function (k, f, d) {
    k.aa = d(5);
  },
]);

console.log(
  "Fomo site is not active - contact support via hello@fomo.com. [ref: 03]"
);
