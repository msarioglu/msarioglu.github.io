exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 973:
/***/ ((module) => {

// Exports
module.exports = {
	"primary-text": "about_primary-text__wvEqA",
	"secondary-text": "about_secondary-text__TJPDE",
	"light-text": "about_light-text__Pb1Uk",
	"dark-text": "about_dark-text__YuqwO",
	"about-page": "about_about-page__Eoo_a",
	"header": "about_header__UwrzS",
	"header-icon": "about_header-icon__CcFdi",
	"container": "about_container__YNmMF",
	"row": "about_row__CQeEE",
	"profile-image": "about_profile-image__zsnif",
	"skills": "about_skills__3fjSg",
	"column": "about_column__rM7yc"
};


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/about.module.scss
var about_module = __webpack_require__(973);
var about_module_default = /*#__PURE__*/__webpack_require__.n(about_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/about-profile.jpg
/* harmony default export */ const about_profile = ({"src":"/_next/static/media/about-profile.4a973ac1.jpg","height":1230,"width":941,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBQACAwAAAAAAAAAAAAABAAIDBBEFBhJBYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIDIf/aAAwDAQACEQMRAD8Aosdh5C6+QS1a5mjePJ5Dw12jcHvR9RESGljhDaDP/9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/about.js




function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "about",
        className: `${(about_module_default())["about-page"]}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(about_module_default()).header}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `${(about_module_default())["header-icon"]}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "About me"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(about_module_default()).container}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(about_module_default()).row}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: about_profile,
                                alt: "About profile photo",
                                className: (about_module_default())["profile-image"],
                                priority: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(about_module_default()).column}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "I am a software engineer with a diverse range of experience in the field. I graduated from HAN University of Applied Sciences in 2021, where I gained a solid foundation in software engineering principles such as UML, SCRUM, and SOLID."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Throughout my career, I have worked extensively with a variety of programming languages, including Java, C#, SQL, Python, PHP, and JavaScript. I am particularly skilled in developing software applications that meet the needs of clients across a wide range of industries."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "In addition to my software engineering skills, I also have experience with DevOps practices, including continuous integration and continuous delivery. I am adept at using tools such as Jenkins, Docker, and Kubernetes to automate software deployment and testing processes."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "I am known for my ability to work collaboratively with teams to design and implement complex software solutions. I am adept at analyzing user requirements and creating innovative solutions that address their specific needs. I am also a strong advocate for software development best practices, including agile methodologies, continuous integration, and test-driven development."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "With my exceptional technical skills, attention to detail, and commitment to delivering high-quality software solutions, I am an asset to any organization I work with."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(about_module_default()).row}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Skills"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(about_module_default()).row} ${(about_module_default()).skills}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Programming Languages"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Java"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "C#"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "C++"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Python"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "PHP"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "TypeScript"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "JavaScript"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Swift"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "SQL"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Frameworks"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: ".NET"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "EntityFramework"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Spring"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Swagger"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Flask"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Angular"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "React"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Development Tools"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Git"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Jira"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Docker"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Jenkins"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "SonarQube"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Confluence"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;