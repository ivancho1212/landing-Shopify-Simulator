/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, * {\n  font-family: \"Poppins\", sans-serif !important;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n  padding: 0;\n  color: white;\n}\n\n.topbar {\n  background-color: rgb(113, 71, 190);\n  color: white;\n  overflow: hidden;\n  padding: 0;\n  border-bottom: 1px solid #333;\n  position: relative;\n}\n\n.topbar__wrapper {\n  overflow: hidden;\n  width: 100%;\n}\n\n.topbar__content {\n  display: flex;\n  width: fit-content;\n  animation: marquee 50s linear infinite;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.topbar__content span {\n  display: inline-block;\n  padding-right: 2rem;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.header {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  padding: 10px 20px;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: auto;\n  flex-wrap: wrap;\n  padding: 0 50px;\n  position: relative;\n}\n\n/* Logo */\n.header__logo img {\n  height: 50px;\n}\n\n@media (max-width: 768px) {\n  .header__logo img {\n    height: 40px;\n  }\n}\n.header__logo {\n  z-index: 1;\n}\n\n.header__payments {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.header__payments-label {\n  font-weight: 500;\n  font-size: 12px;\n  color: #d3d3d3;\n  margin-right: 10px;\n}\n\n.header__payment-icon {\n  width: 30px;\n  height: 30px;\n  background-color: rgba(255, 255, 255, 0.945);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.header__payment-icon img {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n}\n\n.header__actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.header__links {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding-right: 20px;\n}\n\n.header__links a {\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header__links a:hover {\n  text-decoration: underline;\n}\n\n.header__cart {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: rgb(113, 71, 190);\n  color: white;\n  padding: 4px 4px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  margin-right: 10px;\n}\n\n.hamburger {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: rgb(113, 71, 190);\n  padding-right: 30px;\n}\n\n@media (max-width: 800px) {\n  .header__container {\n    padding: 0 20px;\n    height: 60px;\n    position: sticky;\n    z-index: 20;\n  }\n  .hamburger {\n    display: block;\n    order: 1;\n    z-index: 11;\n  }\n  .header__logo {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11;\n  }\n  .header__payments-box {\n    display: none;\n  }\n  .header__links {\n    display: none;\n    position: absolute;\n    top: 70px;\n    left: 60%;\n    transform: translateX(-50%);\n    width: 60%;\n    max-width: 320px;\n    flex-direction: column;\n    background: rgba(0, 0, 0, 0.95);\n    border-radius: 0 0 12px 12px;\n    padding: 12px 15px;\n    gap: 10px;\n    z-index: 10;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  }\n  .header__links a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 16px;\n    padding: 10px 14px;\n    border-radius: 6px;\n    text-align: center;\n    transition: background 0.2s ease-in-out;\n  }\n  .header__links a:hover {\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n  .header__links.active {\n    display: flex;\n  }\n}\n.footer {\n  background-color: #111;\n  color: white;\n  padding: 20px 20px;\n  /* Columnas */\n}\n.footer__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: 1200px;\n  margin: auto;\n}\n.footer__left, .footer__center, .footer__right {\n  flex: 1 1 0px;\n  min-width: 250px;\n}\n.footer__left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.footer__logo img {\n  height: 50px;\n}\n.footer__text {\n  font-size: 0.85em;\n  color: #ccc;\n  margin: 0;\n  padding-left: 20px;\n}\n.footer__center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 15px;\n}\n.footer__links {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.footer__links a {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9em;\n  transition: color 0.3s;\n}\n.footer__links a:hover {\n  color: rgb(113, 71, 190);\n}\n.footer__secondary-links {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.footer__secondary-links a {\n  font-size: 0.75em;\n  color: #aaa;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.footer__secondary-links a:hover {\n  color: rgb(113, 71, 190);\n}\n.footer__right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: left;\n}\n.footer__newsletter-label {\n  font-size: 0.85em;\n  margin-bottom: 5px;\n}\n.footer__newsletter-wrapper {\n  position: relative;\n  display: flex;\n  align-items: right;\n  background-color: rgb(191, 171, 228);\n  border-radius: 8px;\n  padding: 5px;\n}\n.footer__newsletter {\n  width: 200px;\n  padding: 5px;\n  height: 20px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: white;\n  outline: none;\n}\n.footer__newsletter-btn {\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-left: -30px;\n}\n.footer__social {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.footer__social a {\n  color: white;\n  font-size: 0.85em;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.footer__social a:hover {\n  color: rgb(113, 71, 190);\n}\n@media (max-width: 768px) {\n  .footer .footer__container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .footer .footer__center {\n    order: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n    padding: 0 15px;\n  }\n  .footer .footer__links {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n    margin: 0;\n  }\n  .footer .footer__links a {\n    font-size: 1.1em;\n    line-height: 1.4;\n  }\n  .footer .footer__secondary-links {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin-top: 6px;\n    align-items: flex-start;\n  }\n  .footer .footer__secondary-links a {\n    font-size: 0.85em;\n    line-height: 1.4;\n  }\n  .footer .footer__right {\n    order: 2;\n    align-items: flex-end;\n    text-align: right;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 15px;\n    box-sizing: border-box;\n  }\n  .footer .footer__newsletter-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100%;\n    max-width: 400px;\n    background-color: rgb(191, 171, 228);\n    border-radius: 8px;\n    padding: 5px;\n    margin-bottom: 6px;\n    box-sizing: border-box;\n  }\n  .footer .footer__newsletter {\n    flex: 1;\n    min-width: 0;\n    padding: 6px 10px;\n    border: none;\n    background: transparent;\n    color: white;\n    outline: none;\n    font-size: 0.9em;\n  }\n  .footer .footer__newsletter-btn {\n    background: transparent;\n    border: none;\n    color: white;\n    font-size: 1.2em;\n    cursor: pointer;\n    padding: 0 10px;\n  }\n  .footer .footer__left {\n    order: 3;\n    align-items: flex-start;\n    text-align: left;\n    width: 100%;\n    padding-inline: 15px;\n  }\n  .footer .footer__logo {\n    align-self: flex-start;\n  }\n  .footer .footer__text {\n    margin-top: 6px;\n    padding-left: 20px;\n  }\n}\n\n.hero-banner {\n  height: 80vh;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 150px;\n  text-align: center;\n}\n\n.hero-banner__content {\n  z-index: 1;\n}\n\n.hero-banner__button {\n  background-color: #000;\n  color: #fff;\n  padding: 15px 50px;\n  border-radius: 8px;\n  font-weight: bold;\n  text-decoration: none;\n  transition: background 0.3s;\n  font-size: 1.5rem;\n  min-width: 200px;\n  display: inline-block;\n}\n.hero-banner__button:hover {\n  background-color: rgb(113, 71, 190);\n}\n\n@media (max-width: 400px) {\n  .hero-banner__button {\n    padding: 10px 25px;\n    font-size: 1rem;\n    min-width: auto;\n  }\n}\n.hero-banner__marquee {\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  white-space: nowrap;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n}\n\n.marquee__inner {\n  display: inline-block;\n  animation: scroll-marquee 50s linear infinite;\n}\n\n.marquee__inner span {\n  display: inline-block;\n  margin-right: 2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n@keyframes scroll-marquee {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.featured-carousel {\n  padding: 40px;\n  background-color: #000;\n  text-align: center;\n  color: #fff;\n}\n.featured-carousel .carousel-heading {\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n.featured-carousel .carousel-products {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n}\n.featured-carousel .product-card-wrapper {\n  opacity: 0;\n  transform: scale(0.95);\n  transition: all 0.6s ease-out;\n}\n.featured-carousel .product-card-wrapper.reveal {\n  opacity: 1;\n  transform: scale(1);\n}\n.featured-carousel .product-card {\n  width: 90%;\n  max-width: 220px;\n  margin: 0 auto;\n  padding: 12px;\n  border: 1px solid #333;\n  border-radius: 10px;\n  background-color: #111;\n  color: #fff;\n  transition: transform 0.3s;\n}\n.featured-carousel .product-card .product-image {\n  overflow: hidden;\n  border-radius: 10px;\n}\n.featured-carousel .product-card .product-image img {\n  width: 100%;\n  transition: transform 0.3s ease-in-out;\n}\n.featured-carousel .product-card:hover .product-image img {\n  transform: scale(1.05);\n}\n.featured-carousel .product-card .product-info {\n  text-align: left;\n  margin-top: 8px;\n}\n.featured-carousel .product-card .product-info h3 {\n  font-size: 0.8rem;\n  margin: 4px 0;\n  color: #fff;\n}\n.featured-carousel .product-card .product-info .price {\n  display: flex;\n  align-items: center;\n  color: rgb(113, 71, 190);\n  font-weight: bold;\n  font-size: 0.8rem;\n  margin: 3px 0;\n}\n.featured-carousel .product-card .product-info .tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  justify-content: left;\n  list-style: none;\n  padding: 0;\n  margin-top: 4px;\n}\n.featured-carousel .product-card .product-info .tags li {\n  font-size: 0.6rem;\n  background-color: #222;\n  color: #ccc;\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n.featured-carousel .cart-icon {\n  margin-right: 6px;\n  font-size: 1rem;\n}\n.featured-carousel #viewAllBtn {\n  margin-top: 30px;\n  padding: 10px 30px;\n  font-size: 1rem;\n  font-weight: bold;\n  border: none;\n  background-color: #fff;\n  color: #000;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.featured-carousel #viewAllBtn:hover {\n  background-color: #6c47c0;\n  color: #fff;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.reveal {\n  animation: fadeGrow 0.4s ease-out;\n}\n\n@keyframes fadeGrow {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 1024px) {\n  .product-card-wrapper {\n    flex: 1 1 calc(50% - 20px);\n    max-width: calc(50% - 20px);\n  }\n}\n@media (max-width: 600px) {\n  .product-card-wrapper {\n    flex: 1 1 100%;\n    max-width: 100%;\n  }\n}\n.collections-section {\n  padding: 4rem 2rem;\n  background: linear-gradient(to bottom, #000, rgb(113, 71, 190));\n}\n.collections-section__container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.collections-section__title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n  text-align: center;\n  color: white;\n}\n.collections-section__grid {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.collections-section__card {\n  width: 100%;\n  position: relative;\n  border-radius: 1rem;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n}\n.collections-section__image-wrapper {\n  position: relative;\n  width: 100%;\n  height: 350px;\n}\n.collections-section__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.collections-section__name {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 2rem;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n}\n.collections-section__card {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: all 0.4s ease-in-out;\n}\n.collections-section__card.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n@media (max-width: 500px) {\n  .collections-section {\n    padding: 2rem 1rem;\n  }\n  .collections-section__title {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n  .collections-section__image-wrapper {\n    height: 250px;\n  }\n  .collections-section__name {\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 1rem;\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 0.4rem 0.8rem;\n    width: max-content;\n    max-width: 90%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _assets_visa_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/visa.webp */ \"./assets/visa.webp\");\n/* harmony import */ var _assets_master_card_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/master-card.webp */ \"./assets/master-card.webp\");\n/* harmony import */ var _assets_paypal_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/paypal.webp */ \"./assets/paypal.webp\");\n/* harmony import */ var _assets_logo_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logo.webp */ \"./assets/logo.webp\");\n/* harmony import */ var _assets_homepage_bottom_banner_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/homepage_bottom_banner.avif */ \"./assets/homepage_bottom_banner.avif\");\n/* harmony import */ var _assets_shuffle_essentials_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/shuffle_essentials.webp */ \"./assets/shuffle_essentials.webp\");\n\n\n\n\n\n\n\n// Importamos solo las imágenes usadas por las colecciones posteriores al 1 de enero 2025\n\n\n\n// Mapa de imágenes\nconst imageMap = {\n  'homepage_bottom_banner.avif': _assets_homepage_bottom_banner_avif__WEBPACK_IMPORTED_MODULE_5__,\n  'shuffle_essentials.webp': _assets_shuffle_essentials_webp__WEBPACK_IMPORTED_MODULE_6__,\n};\n\ndocument.querySelector('.header__logo img').src = _assets_logo_webp__WEBPACK_IMPORTED_MODULE_4__;\ndocument.querySelector('.footer__logo img').src = _assets_logo_webp__WEBPACK_IMPORTED_MODULE_4__;\ndocument.querySelector('.hero-banner').style.backgroundImage = `url(${_assets_homepage_bottom_banner_avif__WEBPACK_IMPORTED_MODULE_5__})`;\n\ndocument.querySelector('.header__payments').innerHTML = `\n  <span class=\"header__payments-label\">Payment methods</span>\n  <div class=\"header__payment-icon\"><img src=\"${_assets_visa_webp__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Visa\" /></div>\n  <div class=\"header__payment-icon\"><img src=\"${_assets_master_card_webp__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Mastercard\" /></div>\n  <div class=\"header__payment-icon\"><img src=\"${_assets_paypal_webp__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Paypal\" /></div>\n`;\n\nfetch('/settings_data.json')\n  .then(response => response.json())\n  .then(data => {\n    const footerLinksContainer = document.querySelector('.footer__links');\n    const footerSecondaryLinksContainer = document.querySelector('.footer__secondary-links');\n    const footerLogoText = document.querySelector('.footer__left p');\n\n    if (data.sections?.footer?.settings) {\n      const settings = data.sections.footer.settings;\n      footerLogoText.textContent = settings.logo_text;\n\n      if (settings.links) {\n        const mainLinks = settings.links.slice(0, 4);\n        const secondaryLinks = settings.links.slice(4);\n\n        footerLinksContainer.innerHTML = mainLinks\n          .map(link => `<a href=\"${link.url}\">${link.label.toUpperCase()}</a>`)\n          .join('');\n\n        footerSecondaryLinksContainer.innerHTML = secondaryLinks\n          .map(link => `<a href=\"${link.url}\">${link.label.toUpperCase()}</a>`)\n          .join('');\n      }\n    }\n  })\n  .catch(error => console.error('Error cargando settings_data.json:', error));\n\ndocument.querySelectorAll('.scroll-link').forEach(link => {\n  link.addEventListener('click', e => {\n    e.preventDefault();\n    const target = document.querySelector(link.getAttribute('href'));\n    if (target) {\n      target.scrollIntoView({ behavior: 'smooth' });\n    }\n  });\n});\n\nfetch('/data/products.json')\n  .then(res => res.json())\n  .then(products => {\n    const container = document.querySelector('.carousel-products');\n\n    products.forEach((product, index) => {\n      const isHidden = index > 3 ? 'hidden' : '';\n      container.innerHTML += `\n        <div class=\"product-card-wrapper ${isHidden}\">\n          <div class=\"product-card\">\n            <div class=\"product-image\">\n              <img src=\"/assets/${product.image}\" alt=\"${product.title}\">\n            </div>\n            <div class=\"product-info\">\n              <h3>${product.title}</h3>\n              <p class=\"price\"><span class=\"cart-icon\">🛒</span> $${product.price}</p>\n              <ul class=\"tags\">\n                ${product.tags.map(tag => `<li>${tag}</li>`).join('')}\n              </ul>\n            </div>\n          </div>\n        </div>\n      `;\n    });\n\n    const observer = new IntersectionObserver(entries => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.add('reveal');\n          observer.unobserve(entry.target);\n        }\n      });\n    }, { threshold: 0.1 });\n\n    const observeAll = () => {\n      document.querySelectorAll('.product-card-wrapper:not(.reveal)').forEach(card => {\n        observer.observe(card);\n      });\n    };\n\n    observeAll();\n\n    const viewAllBtn = document.getElementById('viewAllBtn');\n    if (viewAllBtn) {\n      viewAllBtn.addEventListener('click', () => {\n        document.querySelectorAll('.product-card-wrapper.hidden').forEach(card => {\n          card.classList.remove('hidden');\n        });\n\n        observeAll();\n        viewAllBtn.style.display = 'none';\n      });\n    }\n  })\n  .catch(err => {\n    console.error('Error al cargar products.json:', err);\n  });\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const hamburgerBtn = document.getElementById(\"hamburger-btn\");\n  const mobileMenu = document.getElementById(\"mobile-menu\");\n\n  hamburgerBtn.addEventListener(\"click\", () => {\n    mobileMenu.classList.toggle(\"active\");\n  });\n});\n\nPromise.all([\n  fetch('/settings_data.json').then(res => res.json()),\n  fetch('/data/collections.json').then(res => res.json())\n])\n  .then(([settingsData, collections]) => {\n    const title = settingsData.sections[\"collections-section\"]?.settings?.title || \"Colecciones destacadas\";\n    document.getElementById('collections-title').textContent = title;\n\n    const filteredCollections = collections.filter(col => {\n      const createdAt = new Date(col.created_at);\n      const minDate = new Date('2025-01-01');\n      return createdAt >= minDate;\n    });\n\n    const container = document.getElementById('collections-grid');\n\n    if (!filteredCollections.length) {\n      container.innerHTML = '<p>No hay colecciones para mostrar.</p>';\n      return;\n    }\n\n    filteredCollections.forEach(col => {\n      const imageSrc = imageMap[col.image] || '';\n      container.innerHTML += `\n        <div class=\"collections-section__card in-view\">\n          <div class=\"collections-section__image-wrapper\">\n            <img src=\"${imageSrc}\" alt=\"${col.title}\" class=\"collections-section__image\" />\n            <p class=\"collections-section__name\">${col.title}</p>\n          </div>\n        </div>\n      `;\n    });\n    \n  })\n  .catch(err => console.error('Error cargando datos de collections:', err));\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ }),

/***/ "./assets/homepage_bottom_banner.avif":
/*!********************************************!*\
  !*** ./assets/homepage_bottom_banner.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/homepage_bottom_banner.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/homepage_bottom_banner.avif?");

/***/ }),

/***/ "./assets/logo.webp":
/*!**************************!*\
  !*** ./assets/logo.webp ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/logo.webp?");

/***/ }),

/***/ "./assets/master-card.webp":
/*!*********************************!*\
  !*** ./assets/master-card.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/master-card.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/master-card.webp?");

/***/ }),

/***/ "./assets/paypal.webp":
/*!****************************!*\
  !*** ./assets/paypal.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/paypal.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/paypal.webp?");

/***/ }),

/***/ "./assets/shuffle_essentials.webp":
/*!****************************************!*\
  !*** ./assets/shuffle_essentials.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/shuffle_essentials.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_essentials.webp?");

/***/ }),

/***/ "./assets/visa.webp":
/*!**************************!*\
  !*** ./assets/visa.webp ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/visa.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/visa.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;