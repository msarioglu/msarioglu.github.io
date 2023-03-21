exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 975:
/***/ ((module) => {

// Exports
module.exports = {
	"primary-text": "home_primary-text__KFMpk",
	"secondary-text": "home_secondary-text__WizAV",
	"light-text": "home_light-text__GJ924",
	"dark-text": "home_dark-text__milt2",
	"profile-container": "home_profile-container__yx1e0",
	"profile-img": "home_profile-img__JKcOc",
	"home-page": "home_home-page__ZXA_r",
	"background-image": "home_background-image__GI97q",
	"social-media-container": "home_social-media-container__oCLYD",
	"social-media-button": "home_social-media-button__45J5A",
	"title": "home_title__Q9lyE",
	"sub-title": "home_sub-title__hp9qf"
};


/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/home.module.scss
var home_module = __webpack_require__(975);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/profile.jpeg
/* harmony default export */ const profile = ({"src":"/_next/static/media/profile.d1285209.jpeg","height":576,"width":576,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAACAQQDAAAAAAAAAAAAAAABAgADBAURITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAQADAQAAAAAAAAAAAAAAAAIAAQMR/9oADAMBAAIRAxEAPwCdbM2S5lQ1yGJBpLUO+DvsjwGIiIpqoVYlcn//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/background.jpeg
/* harmony default export */ const background = ({"src":"/_next/static/media/background.ac8c943b.jpeg","height":2100,"width":3360,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABAwQDAAAAAAAAAAAAAAACAAEDBAUREhNxgf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCWWivlt8rVEYgfGTFpIORLv3CIisXIS//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./pages/home.js





function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "home",
        className: `${(home_module_default())["home-page"]}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: background,
                    alt: "Background",
                    className: `${(home_module_default())["background-image"]}`,
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(home_module_default())["profile-container"]}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: profile,
                        alt: "Profile photo",
                        className: `${(home_module_default())["profile-img"]}`
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: `${(home_module_default()).title}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(home_module_default())["secondary-text"]}`,
                        children: "Muhammet "
                    }),
                    "Sarıoğlu"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: `${(home_module_default())["sub-title"]}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(home_module_default())["secondary-text"]}`,
                        children: "I'm a "
                    }),
                    "Software Engineer"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(home_module_default())["social-media-container"]}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `${(home_module_default())["social-media-button"]}`,
                        href: "https://www.facebook.com/sarioglumuhammed",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `fab fa-facebook`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `${(home_module_default())["social-media-button"]}`,
                        href: "https://www.linkedin.com/in/muhammet-sarioglu-5105b27a/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `fab fa-linkedin`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `${(home_module_default())["social-media-button"]}`,
                        href: "https://github.com/msarioglu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `fab fa-github`
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;