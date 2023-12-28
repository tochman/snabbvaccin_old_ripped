(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [343],
  {
    6675: function (n, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return t;
        },
      });
      var l = o(5893);
      function t(n) {
        let { onLogoClick: e } = n;
        return (0, l.jsxs)("div", {
          className: "page-footer",
          children: [
            (0, l.jsxs)("div", {
              className: "footer-top-row",
              children: [
                (0, l.jsx)("div", {
                  className: "footer-col",
                  children:
                    "Denna hemsidan \xe4r avsedd f\xf6r personer bosatta i Sverige. Informationen p\xe5 denna hemsidan \xe4r av allm\xe4n informations- och utbildningskarakt\xe4r och inte \xe4mnad att ers\xe4tta personlig medicinsk r\xe5dgivning fr\xe5n l\xe4kare och annan h\xe4lso- och sjuksv\xe5rdspersonal.",
                }),
                (0, l.jsx)("div", {
                  className: "footer-col",
                  children:
                    "SnabbVaccin Sverige AB innehar upphovsr\xe4tten till denna site och reserverar sig alla r\xe4ttigheter d\xe4rtill.",
                }),
                (0, l.jsxs)("div", {
                  className: "footer-col legal-links",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "link-clickout",
                      onClick: () => (window.location = "/"),
                      children: [
                        (0, l.jsx)("div", {
                          className: "link-text",
                          children: "snabbvaccin.se",
                        }),
                        (0, l.jsx)("div", {
                          className: "material-symbols-rounded clickout-icon",
                          children: "open_in_new",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "link-clickout",
                      onClick: () => (window.location = "/terms"),
                      children: [
                        (0, l.jsx)("div", {
                          className: "link-text",
                          children: "Integritetspolicy & Anv\xe4ndarvillkor",
                        }),
                        (0, l.jsx)("div", {
                          className: "material-symbols-rounded clickout-icon",
                          children: "open_in_new",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "footer-bottom-row",
              children: [
                (0, l.jsx)("div", {
                  className: "footer-col logo-col",
                  children: (0, l.jsx)("img", {
                    src: "/images/logo.png",
                    className: "snabb-logo",
                    onClick: () => location.reload(),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "footer-col company-details",
                  children: [
                    "Snabbvaccin Sverige AB",
                    (0, l.jsx)("br", {}),
                    "Org.nr: 559304-3879",
                    (0, l.jsx)("br", {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      o(7294);
    },
    5307: function (n, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = o(5893),
        t = o(7294),
        i = o(6161);
      function s(n) {
        let { children: e, closeHandler: o, containerClass: s = "" } = n,
          [c, a] = (0, t.useState)(0),
          d = (0, t.useRef)(null),
          { stayScrolled: r } = (0, i.Z)(d);
        return (
          (0, t.useLayoutEffect)(() => {
            r();
          }, []),
          (0, t.useEffect)(
            () => (
              (document.body.style.overflow = "hidden"),
              a(window.scrollY),
              () => (document.body.style.overflow = "unset")
            ),
            []
          ),
          (0, l.jsxs)("div", {
            className: "modal-wrapper ".concat(s),
            style: { top: c },
            ref: d,
            children: [
              (0, l.jsx)("div", { className: "modal-background", onClick: o }),
              (0, l.jsx)("div", { className: "modal-content", children: e }),
            ],
          })
        );
      }
    },
    2361: function (n, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = o(5893),
        t = o(7294),
        i = o(5307),
        s = o(1108),
        c = o(4824);
      o(381);
      let a = c.e({
        space: "wpyme1upz678",
        accessToken: "IGQ8Ul8B6TpFOXLOUn1mig7-McNMsuupyOSVWhs3omI",
      });
      function d(n) {
        let { data: e, onBookClick: o, onDirectionsClick: t } = n;
        return (0, l.jsxs)("div", {
          className: "schedule-date",
          children: [
            (0, l.jsxs)("div", {
              className: "schedule-date-primary-col-wrapper",
              children: [
                (0, l.jsxs)("div", {
                  className: "schedule-date-col-1",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "schedule-date-month",
                      children: [
                        (null == e ? void 0 : e.month_num) === "01"
                          ? "JAN"
                          : null,
                        (null == e ? void 0 : e.month_num) === "02"
                          ? "FEB"
                          : null,
                        (null == e ? void 0 : e.month_num) === "03"
                          ? "MAR"
                          : null,
                        (null == e ? void 0 : e.month_num) === "04"
                          ? "APR"
                          : null,
                        (null == e ? void 0 : e.month_num) === "05"
                          ? "MAJ"
                          : null,
                        (null == e ? void 0 : e.month_num) === "06"
                          ? "JUN"
                          : null,
                        (null == e ? void 0 : e.month_num) === "07"
                          ? "JUL"
                          : null,
                        (null == e ? void 0 : e.month_num) === "08"
                          ? "AUG"
                          : null,
                        (null == e ? void 0 : e.month_num) === "09"
                          ? "SEP"
                          : null,
                        (null == e ? void 0 : e.month_num) === "10"
                          ? "OKT"
                          : null,
                        (null == e ? void 0 : e.month_num) === "11"
                          ? "NOV"
                          : null,
                        (null == e ? void 0 : e.month_num) === "12"
                          ? "DEC"
                          : null,
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "schedule-date-val",
                      children: null == e ? void 0 : e.date_num,
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: "vert-line-separator" }),
                (0, l.jsxs)("div", {
                  className: "schedule-date-col-2",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "schedule-date-metric-row",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "material-symbols-rounded schedule-metric-icon",
                          children: "schedule",
                        }),
                        (0, l.jsxs)("div", {
                          className: "schedule-date-metric-text",
                          children: [
                            null == e ? void 0 : e.start_time,
                            " - ",
                            null == e ? void 0 : e.end_time,
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "schedule-date-metric-row",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "material-symbols-rounded schedule-metric-icon",
                          children: "vaccines",
                        }),
                        (0, l.jsx)("div", {
                          className: "schedule-date-metric-text",
                          children: "TBE & B\xe4ltros",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "schedule-date-col-3",
              children: [
                (0, l.jsx)("div", {
                  className: "material-symbols-rounded directions-cta",
                  onClick: o,
                  children: "shopping_cart",
                }),
                (0, l.jsxs)("div", {
                  className: "book-cta",
                  onClick: t,
                  children: [
                    (0, l.jsx)("div", {
                      className: "select-date-text",
                      children: "V\xe4gbeskrivning Till Bussen",
                    }),
                    (0, l.jsx)("div", {
                      className: "material-symbols-rounded book-now-cta-icon",
                      children: "directions_bus",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function r(n) {
        var e, o, c, r;
        let { data: u, onClose: m } = n,
          [h, v] = (0, t.useState)({}),
          [f, x] = (0, t.useState)([]);
        (0, t.useEffect)(() => {
          var n;
          a.getEntry(
            null == u
              ? void 0
              : null === (n = u.sys) || void 0 === n
              ? void 0
              : n.id
          )
            .then((n) => {
              v(n.fields);
              var e = n.fields.standardOpeningTime,
                o = n.fields.standardClosingTime,
                l = [],
                t = new Date(new Date().setHours(0, 0, 0, 0));
              n.fields.customSchedule.map((n) => {
                var i = new Date(new Date(n.fields.date).setHours(0, 0, 0, 0)),
                  s = new Date(),
                  c = s.getFullYear(),
                  a =
                    s.getMonth() + 1 < 10
                      ? "0".concat(s.getMonth() + 1)
                      : s.getMonth() + 1,
                  d = 10 > s.getDate() ? "0".concat(s.getDate()) : s.getDate(),
                  r = "".concat(c, "-").concat(a, "-").concat(d),
                  u = n.fields.date.split("-");
                if (n.fields.date.toString() === r.toString()) {
                  l.push({
                    date_num: u[2],
                    month_num: u[1],
                    start_time: n.fields.customTime
                      ? n.fields.customOpenTime
                      : e,
                    end_time: n.fields.customTime
                      ? n.fields.customCloseTime
                      : o,
                  });
                  return;
                }
                i < t ||
                  l.push({
                    date_num: u[2],
                    month_num: u[1],
                    start_time: n.fields.customTime
                      ? n.fields.customOpenTime
                      : e,
                    end_time: n.fields.customTime
                      ? n.fields.customCloseTime
                      : o,
                  });
              }),
                x(l);
            })
            .catch((n) => {
              console.log(n);
            });
        }, []);
        let g = () => {
            m(), document.getElementById("pricing-section").scrollIntoView();
          },
          p = () => {
            window.location = null == h ? void 0 : h.googleMapsUrl;
          };
        return (0, l.jsxs)(i.Z, {
          containerClass: "listing-viewer",
          closeHandler: m,
          children: [
            (0, l.jsxs)("div", {
              className: "listing-header",
              children: [
                (0, l.jsxs)("div", {
                  className: "listing-title-wrapper",
                  children: [
                    (0, l.jsx)("h1", {
                      className: "listing-title",
                      children: null == h ? void 0 : h.name,
                    }),
                    (0, l.jsx)("div", {
                      className: "listing-region",
                      children: null == h ? void 0 : h.region,
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "material-symbols-rounded close-icon",
                  onClick: m,
                  children: "close",
                }),
              ],
            }),
            h.geoLocation
              ? (0, l.jsx)("div", {
                  className: "map-section",
                  children: (0, l.jsx)(s.ZP, {
                    mapboxAccessToken:
                      "pk.eyJ1IjoidG9hc3R5c2Ftd2ljaCIsImEiOiJjbGVzd3Q0c3AwNDBqM3dwYnhrZzY0OWI0In0.-0Jmpjh8-SKWnH46Y-NBKA",
                    initialViewState: {
                      longitude:
                        null == h
                          ? void 0
                          : null === (e = h.geoLocation) || void 0 === e
                          ? void 0
                          : e.lon,
                      latitude:
                        null == h
                          ? void 0
                          : null === (o = h.geoLocation) || void 0 === o
                          ? void 0
                          : o.lat,
                      zoom: 14,
                    },
                    mapStyle:
                      "mapbox://styles/toastysamwich/clesx5h5m007g01qrw78fyzhn",
                    children: (0, l.jsx)(s.Jx, {
                      longitude:
                        null == h
                          ? void 0
                          : null === (c = h.geoLocation) || void 0 === c
                          ? void 0
                          : c.lon,
                      latitude:
                        null == h
                          ? void 0
                          : null === (r = h.geoLocation) || void 0 === r
                          ? void 0
                          : r.lat,
                      color: "#10AC73",
                    }),
                  }),
                })
              : null,
            (0, l.jsx)("div", {
              className: "schedule-container",
              children: f.map((n) =>
                (0, l.jsx)(d, { data: n, onBookClick: g, onDirectionsClick: p })
              ),
            }),
          ],
        });
      }
    },
    7471: function (n, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = o(5893);
      o(7294);
      var t = o(4298),
        i = o.n(t);
      function s(n) {
        let { productID: e, buttonText: o, componentID: t } = n;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "shopify-cta",
              id: "product-component-".concat(t),
            }),
            (0, l.jsx)(i(), {
              children:
                "\n                    (function () {\n                        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';\n                        if (window.ShopifyBuy) {\n                        if (window.ShopifyBuy.UI) {\n                        ShopifyBuyInit();\n                    } else {\n                        loadScript();\n                    }\n                    } else {\n                        loadScript();\n                    }\n                        function loadScript() {\n                        var script = document.createElement('script');\n                        script.async = true;\n                        script.src = scriptURL;\n                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);\n                        script.onload = ShopifyBuyInit;\n                    }\n                        function ShopifyBuyInit() {\n                        var client = ShopifyBuy.buildClient({\n                        domain: 'snabbvaccin-sverige-ab.myshopify.com',\n                        storefrontAccessToken: '0d180e38a72ece449f5ae6e5f3a3bf49',\n                    });\n                        ShopifyBuy.UI.onReady(client).then(function (ui) {\n                        ui.createComponent('product', {\n                        id: '"
                  .concat(
                    e,
                    "',\n                        node: document.getElementById('product-component-"
                  )
                  .concat(
                    t,
                    '\'),\n                        moneyFormat: \'%7B%7Bamount_no_decimals%7D%7D%20kr\',\n                        options: {\n                        "product": {\n                    "styles": {\n                        "product": {\n                        "@media (min-width: 601px)": {\n                        "max-width": "calc(25% - 20px)",\n                        "margin-left": "20px",\n                        "margin-bottom": "50px"\n                    }\n                    },\n                        "title": {\n                        "color": "#329954"\n                    },\n                        "button": {\n                        "width": "100%",\n                        "font-family": "Rubik, sans-serif",\n                        "font-weight": "700",\n                        ":hover": {\n                        "background-color": "#10AC73",\n                        "width": "100%",\n                    },\n                        "background-color": "#10AC73",\n                        ":focus": {\n                        "background-color": "#2d8a4c"\n                    }\n                    }\n                    },\n                        "contents": {\n                        "img": false,\n                        "title": false,\n                        "price": false\n                    },\n                        "text": {\n                        "button": "'
                  )
                  .concat(
                    o,
                    '"\n                    },\n                        "googleFonts": [\n                        "Montserrat"\n                        ]\n                    },\n                        "productSet": {\n                        "styles": {\n                        "products": {\n                        "@media (min-width: 601px)": {\n                        "margin-left": "-20px"\n                    }\n                    }\n                    }\n                    },\n                        "modalProduct": {\n                        "contents": {\n                        "img": false,\n                        "imgWithCarousel": true,\n                        "button": false,\n                        "buttonWithQuantity": true\n                    },\n                        "styles": {\n                        "product": {\n                        "@media (min-width: 601px)": {\n                        "max-width": "100%",\n                        "margin-left": "0px",\n                        "margin-bottom": "0px"\n                    }\n                    },\n                        "button": {\n                        "font-family": "Rubik, sans-serif",\n                        ":hover": {\n                        "background-color": "#2d8a4c"\n                    },\n                        "background-color": "#329954",\n                        ":focus": {\n                        "background-color": "#2d8a4c"\n                    }\n                    },\n                        "title": {\n                        "font-family": "Rubik, sans-serif",\n                        "font-weight": "bold",\n                        "font-size": "26px",\n                        "color": "#4c4c4c"\n                    }\n                    },\n                        "googleFonts": [\n                            "Rubik"\n                        ],\n                        "text": {\n                        "button": "Add to cart"\n                    }\n                    },\n                        "option": {},\n                        "cart": {\n                        "styles": {\n                        "button": {\n                        "font-family": "Rubik, sans-serif",\n                        ":hover": {\n                        "background-color": "#2d8a4c"\n                    },\n                        "background-color": "#329954",\n                        ":focus": {\n                        "background-color": "#2d8a4c"\n                    }\n                    },\n                        "title": {\n                        "color": "#339854"\n                    },\n                        "header": {\n                        "color": "#339854"\n                    },\n                        "lineItems": {\n                        "color": "#339854"\n                    },\n                        "subtotalText": {\n                        "color": "#339854"\n                    },\n                        "subtotal": {\n                        "color": "#339854"\n                    },\n                        "notice": {\n                        "color": "#339854"\n                    },\n                        "currency": {\n                        "color": "#339854"\n                    },\n                        "close": {\n                        "color": "#339854",\n                        ":hover": {\n                        "color": "#339854"\n                    }\n                    },\n                        "empty": {\n                        "color": "#339854"\n                    },\n                        "noteDescription": {\n                        "color": "#339854"\n                    },\n                        "discountText": {\n                        "color": "#339854"\n                    },\n                        "discountIcon": {\n                        "fill": "#339854"\n                    },\n                        "discountAmount": {\n                        "color": "#339854"\n                    }\n                    },\n                        "text": {\n                        "title": "Din varukorg",\n                        "total": "Totalt",\n                        "empty": "Din varukorg \xe4r tom",\n                        "notice": "Vi Hj\xe4lper Dig Och Din Familj Att Skydda Sin Hj\xe4rna Mot TBE\\n\\n\\n\uD83D\uDD12100% S\xe4kra Betalningar",\n                        "button": "Till Kassan"\n                    },\n                        "popup": false,\n                        "googleFonts": [\n                        "Montserrat"\n                        ]\n                    },\n                        "toggle": {\n                        "styles": {\n                        "toggle": {\n                        "font-family": "Montserrat, sans-serif",\n                        "background-color": "#329954",\n                        ":hover": {\n                        "background-color": "#2d8a4c"\n                    },\n                        ":focus": {\n                        "background-color": "#2d8a4c"\n                    }\n                    }\n                    },\n                        "googleFonts": [\n                        "Rubik"\n                        ]\n                    },\n                        "lineItem": {\n                        "styles": {\n                        "variantTitle": {\n                        "color": "#339854"\n                    },\n                        "title": {\n                        "color": "#339854"\n                    },\n                        "price": {\n                        "color": "#339854"\n                    },\n                        "fullPrice": {\n                        "color": "#339854"\n                    },\n                        "discount": {\n                        "color": "#339854"\n                    },\n                        "discountIcon": {\n                        "fill": "#339854"\n                    },\n                        "quantity": {\n                        "color": "#339854"\n                    },\n                        "quantityIncrement": {\n                        "color": "#339854",\n                        "border-color": "#339854"\n                    },\n                        "quantityDecrement": {\n                        "color": "#339854",\n                        "border-color": "#339854"\n                    },\n                        "quantityInput": {\n                        "color": "#339854",\n                        "border-color": "#339854"\n                    }\n                    }\n                    }\n                    },\n                    });\n                    });\n                    }\n                    })();\n                '
                  ),
            }),
          ],
        });
      }
    },
    2820: function (n, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return i;
        },
      });
      var l = o(5893),
        t = o(7294);
      function i(n) {
        var e, o;
        let { data: i, scheduleUnavailable: s, onClick: c } = n,
          [a, d] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            if (!s && i && i.fields) {
              var n = i.fields.standardOpeningTime,
                e = i.fields.standardClosingTime,
                o = [],
                l = new Date(new Date().setHours(0, 0, 0, 0));
              i.fields.customSchedule.map((t) => {
                if (
                  null == t
                    ? void 0
                    : null === (i = t.fields) || void 0 === i
                    ? void 0
                    : i.date
                ) {
                  var i,
                    s = new Date(new Date(t.fields.date).setHours(0, 0, 0, 0)),
                    c = new Date(),
                    a = c.getFullYear(),
                    d =
                      c.getMonth() + 1 < 10
                        ? "0".concat(c.getMonth() + 1)
                        : c.getMonth() + 1,
                    r =
                      10 > c.getDate() ? "0".concat(c.getDate()) : c.getDate(),
                    u = "".concat(a, "-").concat(d, "-").concat(r),
                    m = t.fields.date.split("-");
                  if (t.fields.date.toString() === u.toString()) {
                    o.push({
                      date_num: m[2],
                      month_num: m[1],
                      start_time: t.fields.customTime
                        ? t.fields.customOpenTime
                        : n,
                      end_time: t.fields.customTime
                        ? t.fields.customCloseTime
                        : e,
                    });
                    return;
                  }
                  s < l ||
                    o.push({
                      date_num: m[2],
                      month_num: m[1],
                      start_time: t.fields.customTime
                        ? t.fields.customOpenTime
                        : n,
                      end_time: t.fields.customTime
                        ? t.fields.customCloseTime
                        : e,
                    });
                }
              }),
                d(o[0]);
            }
          }, []),
          (0, l.jsxs)("div", {
            className: "vaccination-location",
            onClick: () => c(i),
            children: [
              (0, l.jsx)("h4", {
                children:
                  null == i
                    ? void 0
                    : null === (e = i.fields) || void 0 === e
                    ? void 0
                    : e.name,
              }),
              (0, l.jsx)("div", {
                className: "region-subtitle",
                children:
                  null == i
                    ? void 0
                    : null === (o = i.fields) || void 0 === o
                    ? void 0
                    : o.region,
              }),
              (0, l.jsxs)("div", {
                className: "address-row",
                children: [
                  (0, l.jsx)("div", {
                    className: "material-symbols-rounded location-icon",
                    children: "schedule",
                  }),
                  s
                    ? (0, l.jsx)("div", {
                        className: "schedule-unavailable",
                        children: "klicka f\xf6r att se schemat",
                      })
                    : (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                          className: "address-text",
                          children: [
                            null == a ? void 0 : a.date_num,
                            "\xa0",
                            (null == a ? void 0 : a.month_num) === "01"
                              ? "JAN"
                              : null,
                            (null == a ? void 0 : a.month_num) === "02"
                              ? "FEB"
                              : null,
                            (null == a ? void 0 : a.month_num) === "03"
                              ? "MAR"
                              : null,
                            (null == a ? void 0 : a.month_num) === "04"
                              ? "APR"
                              : null,
                            (null == a ? void 0 : a.month_num) === "05"
                              ? "MAJ"
                              : null,
                            (null == a ? void 0 : a.month_num) === "06"
                              ? "JUN"
                              : null,
                            (null == a ? void 0 : a.month_num) === "07"
                              ? "JUL"
                              : null,
                            (null == a ? void 0 : a.month_num) === "08"
                              ? "AUG"
                              : null,
                            (null == a ? void 0 : a.month_num) === "09"
                              ? "SEP"
                              : null,
                            (null == a ? void 0 : a.month_num) === "10"
                              ? "OKT"
                              : null,
                            (null == a ? void 0 : a.month_num) === "11"
                              ? "NOV"
                              : null,
                            (null == a ? void 0 : a.month_num) === "12"
                              ? "DEC"
                              : null,
                            "\xa0",
                            null == a ? void 0 : a.start_time,
                            " - ",
                            null == a ? void 0 : a.end_time,
                          ],
                        }),
                      }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "info-chips-row",
                children: [
                  (0, l.jsxs)("div", {
                    className: "info-chip",
                    children: [
                      (0, l.jsx)("div", {
                        className: "material-symbols-rounded location-icon",
                        children: "directions_bus",
                      }),
                      (0, l.jsx)("div", {
                        className: "address-text",
                        children: "BUSS",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "info-chip",
                    children: [
                      (0, l.jsx)("div", {
                        className: "material-symbols-rounded location-icon",
                        children: "vaccines",
                      }),
                      (0, l.jsx)("div", {
                        className: "address-text",
                        children: "TBE & B\xc4LTROS",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    4654: function () {},
  },
]);
