(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,229,521];
exports.modules = {

/***/ 357:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__m_pHb",
	"caption": "footer_caption__MxEss"
};


/***/ }),

/***/ 921:
/***/ ((module) => {

// Exports
module.exports = {
	"primary-text": "layout_primary-text__Wq58N",
	"secondary-text": "layout_secondary-text__HHczg",
	"light-text": "layout_light-text__Hc4eo",
	"dark-text": "layout_dark-text__zE3LV",
	"container": "layout_container__ONNwY",
	"navbar": "layout_navbar__dBMX4",
	"main": "layout_main__PQuuL",
	"footer": "layout_footer__YxWQc"
};


/***/ }),

/***/ 300:
/***/ ((module) => {

// Exports
module.exports = {
	"primary-text": "navigation_primary-text__pWKS9",
	"secondary-text": "navigation_secondary-text__51ImQ",
	"light-text": "navigation_light-text__teMCZ",
	"dark-text": "navigation_dark-text__80ymL",
	"container": "navigation_container__YMN84",
	"navbar-brand": "navigation_navbar-brand__0wKqo",
	"brand-image": "navigation_brand-image__188Q5",
	"navbar-menu": "navigation_navbar-menu__HOnXM",
	"navbar-items": "navigation_navbar-items__zhLBq",
	"is-unfolded": "navigation_is-unfolded__HFk_W",
	"navbar-footer": "navigation_navbar-footer__OPOGn",
	"navbar-burger": "navigation_navbar-burger__ttDHP",
	"navbar-item": "navigation_navbar-item__yGIk3",
	"active-item": "navigation_active-item__HPyTC"
};


/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/style.scss
var style = __webpack_require__(733);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss
var fontawesome = __webpack_require__(911);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./template/layout/index.module.scss
var index_module = __webpack_require__(921);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./template/navigation/index.module.scss
var navigation_index_module = __webpack_require__(300);
var navigation_index_module_default = /*#__PURE__*/__webpack_require__.n(navigation_index_module);
// EXTERNAL MODULE: ./template/footer/index.module.scss
var footer_index_module = __webpack_require__(357);
var footer_index_module_default = /*#__PURE__*/__webpack_require__.n(footer_index_module);
;// CONCATENATED MODULE: ./template/footer/index.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (footer_index_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (footer_index_module_default()).caption,
            children: "Copyright \xa9 2019 - 2023 Muhammet Sarıoğlu"
        })
    });
}

;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.db229509.png","height":142,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEWH0OeG0OeG0OeH0Od5zOaEz+aG0OeG0Oe+4u309PLC4+2G0Ob69fKK1u2jAAAADXRSTlMBWW+HI5F4RzWchxmIwTvZogAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJxj4OBkZWQAAU4ediYwg4uLmZWFg5uBgYWFlZkNIsjIyMTGzAgADncAlko9NrkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./template/navigation/index.js






function Navigation() {
    const [isUnfolded, setIsUnfolded] = (0,external_react_.useState)(false);
    const navbarToggle = isUnfolded ? (navigation_index_module_default())["is-unfolded"] : "";
    const onPress = (e)=>{
        e.preventDefault();
        const target = window.document.getElementById(e.currentTarget.href.split("#")[1]);
        if (target) {
            var topPadding = 0;
            var elementPosition = target.getBoundingClientRect().top;
            if (window.innerWidth < 1024) {
                topPadding = 185.8;
                setIsUnfolded(false);
            }
            var offsetPosition = elementPosition - topPadding;
            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navigation_index_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navigation_index_module_default())["navbar-brand"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "logo",
                        className: (navigation_index_module_default())["brand-image"],
                        priority: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: ()=>setIsUnfolded(!isUnfolded),
                        className: (navigation_index_module_default())["navbar-burger"]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(navigation_index_module_default())["navbar-menu"]} ${navbarToggle}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: `${(navigation_index_module_default())["navbar-items"]}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${(navigation_index_module_default())["navbar-item"]}`,
                            "data-to-scrollspy-id": "home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#home",
                                onClick: (e)=>onPress(e),
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${(navigation_index_module_default())["navbar-item"]}`,
                            "data-to-scrollspy-id": "about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#about",
                                onClick: (e)=>onPress(e),
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${(navigation_index_module_default())["navbar-item"]}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#projects",
                                onClick: (e)=>onPress(e),
                                children: "Projects"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(navigation_index_module_default())["navbar-footer"]}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    });
}

;// CONCATENATED MODULE: ./template/layout/index.js





function Layout({ children  }) {
    const title = "Portfolio of Muhammet Sarıoğlu";
    const description = "An online portfolio of Muhammet Sarıoğlu";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${description}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "icons/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "57x57",
                        href: "icons/apple-icon-57x57.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "icons/apple-icon-60x60.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "72x72",
                        href: "icons/apple-icon-72x72.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "icons/apple-icon-76x76.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "114x114",
                        href: "icons/apple-icon-114x114.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "icons/apple-icon-120x120.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "144x144",
                        href: "icons/apple-icon-144x144.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "icons/apple-icon-152x152.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "icons/apple-icon-180x180.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "192x192",
                        href: "icons/android-icon-192x192.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "icons/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "96x96",
                        href: "icons/favicon-96x96.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "icons/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "icons/manifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#081b3d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileImage",
                        content: "icons/ms-icon-144x144.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#081b3d"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (index_module_default()).navbar,
                role: "navigation",
                "aria-label": "main navigation",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (index_module_default()).main,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (index_module_default()).footer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js




function MsrglApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MsrglApp);


/***/ }),

/***/ 911:
/***/ (() => {



/***/ }),

/***/ 733:
/***/ (() => {



/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(676)));
module.exports = __webpack_exports__;

})();