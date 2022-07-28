"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bgSlate.jpg */ "./src/images/bgSlate.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,YAAY;AACZ;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,yDAA8C;IAC9C,4BAA4B;IAC5B,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,qBAAqB;IACrB,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,cAAc;AAClB;AACA,kBAAkB;;AAElB;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,UAAU;AACV;IACI,yBAAyB;IACzB,sKAAsK;IACtK,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,cAAc;IACd,aAAa;IACb,wCAAwC;AAC5C;AACA;;IAEI,uCAAuC;AAC3C;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,wCAAwC;AAC5C;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;AACrB;AACA,wBAAwB;;AAExB,cAAc;AACd;IACI,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,wCAAwC;AAC5C;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA,6BAA6B;;AAE7B,aAAa;AACb;IACI,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,kJAAkJ;AACtJ;AACA;IACI,wCAAwC;AAC5C;AACA;;IAEI,SAAS;IACT,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,UAAU;AACd;AACA,4BAA4B;;AAE5B,iBAAiB;AACjB;IACI,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,wCAAwC;AAC5C;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;AAChB;AACA,gCAAgC;;AAEhC,WAAW;AACX;IACI,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;IACxC,kGAAkG;IAClG,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA,0BAA0B;;AAE1B,oBAAoB;AACpB;IACI,cAAc;IACd,cAAc;IACd,6BAA6B;AACjC","sourcesContent":["body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(\"../images/bgSlate.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _testFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testFunction */ "./src/testFunction.js");
/* harmony import */ var _loadNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadNav */ "./src/loadNav.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadLocations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadLocations */ "./src/loadLocations.js");
/* harmony import */ var _loadAbout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadAbout */ "./src/loadAbout.js");
/* harmony import */ var _loadOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadOrder */ "./src/loadOrder.js");
/* harmony import */ var _loadFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadFooter */ "./src/loadFooter.js");


(0,_testFunction__WEBPACK_IMPORTED_MODULE_1__["default"])();


(0,_loadNav__WEBPACK_IMPORTED_MODULE_2__["default"])();


(0,_loadMenu__WEBPACK_IMPORTED_MODULE_3__["default"])();


(0,_loadLocations__WEBPACK_IMPORTED_MODULE_4__["default"])();


(0,_loadAbout__WEBPACK_IMPORTED_MODULE_5__["default"])();


(0,_loadOrder__WEBPACK_IMPORTED_MODULE_6__["default"])();


(0,_loadFooter__WEBPACK_IMPORTED_MODULE_7__["default"])();




console.log("hello");
// menu module
// const menuPics = document.getElementsByClassName("menuPic");
// for (let i = 0; i < menuPics.length; i++) {
//     let menuPicture = require(`./images/menu/menu${i}.png`);
//     menuPics[i].src = menuPicture;
// }

// const mapPin1 = document.getElementById("mapPin1");
// mapPin1.src = map1;

// nav.style.backgroundImage = 'url (' + navBg + ')';

// const content = document.getElementById('content');
// const mainLogo = new Image();
// mainLogo.src = logo;
// content.appendChild(mainLogo);
// const btn = document.createElement('button');
// btn.textContent = "Click me";
// btn.onclick = printStuff;
// content.appendChild(btn);


/***/ }),

/***/ "./src/loadAbout.js":
/*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout() {
    const content = document.getElementById("content");
    const aboutLink = document.getElementById("link3");

    const aboutContainer = document.createElement("div");
    aboutContainer.textContent = "test about us";

    aboutLink.addEventListener("click", () => {
        content.textContent = "";
        aboutContainer.textContent = "";
        aboutContainer.id = "aboutUs";
        const header = document.createElement("h2");
        header.textContent = "About Us";
        content.appendChild(header);

        const aboutContent = document.createElement("div");
        aboutContent.id = "aboutContent";
        const aboutHead = document.createElement("h3");
        aboutHead.textContent = "A tradition of Excellence";
        const aboutImage1 = document.createElement("img");
        aboutImage1.src =
            "https://static.wikia.nocookie.net/spongebob/images/8/8d/Pizza_Delivery_background-26.JPG/";
        const aboutP1 = document.createElement("p");
        aboutP1.textContent =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, velit sed auctor malesuada, ipsum mi euismod magna, at blandit dui libero at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in est in mauris mollis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ullamcorper leo ac mauris sagittis gravida. Praesent rhoncus faucibus felis non ultricies. Proin neque ipsum, mattis sed ex vitae, sagittis auctor purus. Curabitur non odio augue. Mauris odio lectus, tempus dictum leo eu, fermentum malesuada arcu.";
        const aboutImage2 = document.createElement("img");
        aboutImage2.src =
            "https://static.wikia.nocookie.net/spongebob/images/7/73/Pizza_Delivery_background-28.JPG/";
        const aboutP2 = document.createElement("p");
        aboutP2.textContent =
            "Nam a pellentesque magna, sit amet tempus orci. Fusce tincidunt ante ac augue vestibulum molestie. Praesent ac nisi nec tellus ultrices elementum. Sed tempor ultricies tristique. Sed iaculis, ligula vitae pellentesque sagittis, metus nisi dictum lacus, nec volutpat ipsum velit vel lectus. Sed quis felis finibus, dictum augue a, porttitor nisl. Mauris id congue turpis.";
        const aboutImage3 = document.createElement("img");
        aboutImage3.src =
            "https://static.wikia.nocookie.net/spongebob/images/4/49/Pizza_Delivery_background-15.JPG/";
        const aboutP3 = document.createElement("p");
        aboutP3.textContent =
            "Donec ut sem a nunc ultrices tempus sed ac diam. Nulla non orci non mi tincidunt suscipit. Quisque dapibus ante sapien, interdum pharetra mauris elementum eget. Maecenas vulputate vehicula purus eget sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas et est non tortor dapibus blandit. Suspendisse luctus velit ex, quis condimentum ligula congue vitae. Fusce ex orci, congue id feugiat dignissim, elementum at turpis. Vestibulum faucibus sollicitudin porttitor. Nullam consectetur, nisi nec interdum scelerisque, erat erat iaculis nisl, nec tincidunt nibh tortor ut risus. Duis facilisis malesuada tortor vel porttitor.";

        aboutContent.append(
            aboutHead,
            aboutImage1,
            aboutP1,
            aboutImage2,
            aboutP2,
            aboutImage3,
            aboutP3
        );
        // aboutContent.appendChild(aboutHead);
        // aboutContent.appendChild(aboutImage1);
        // aboutContent.appendChild(aboutP1);
        // aboutContent.appendChild(aboutImage2);
        // aboutContent.appendChild(aboutP2);
        // aboutContent.appendChild(aboutImage3);
        // aboutContent.appendChild(aboutP3);

        aboutContainer.appendChild(aboutContent);

        content.appendChild(aboutContainer);
    });
}

/* <h2>About Us</h2>
<div id="aboutUs">
    <div id="aboutContent">
        <h3>A tradition of excellence</h3>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/8/8d/Pizza_Delivery_background-26.JPG/"
        />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam volutpat, velit sed auctor malesuada,
            ipsum mi euismod magna, at blandit dui libero at
            magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Quisque in est in mauris mollis
            varius. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla ullamcorper leo ac mauris
            sagittis gravida. Praesent rhoncus faucibus felis
            non ultricies. Proin neque ipsum, mattis sed ex
            vitae, sagittis auctor purus. Curabitur non odio
            augue. Mauris odio lectus, tempus dictum leo eu,
            fermentum malesuada arcu.
        </p>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/7/73/Pizza_Delivery_background-28.JPG/"
        />
        <p>
            Nam a pellentesque magna, sit amet tempus orci.
            Fusce tincidunt ante ac augue vestibulum molestie.
            Praesent ac nisi nec tellus ultrices elementum. Sed
            tempor ultricies tristique. Sed iaculis, ligula
            vitae pellentesque sagittis, metus nisi dictum
            lacus, nec volutpat ipsum velit vel lectus. Sed quis
            felis finibus, dictum augue a, porttitor nisl.
            Mauris id congue turpis.
        </p>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/4/49/Pizza_Delivery_background-15.JPG/"
        />
        <p>
            Donec ut sem a nunc ultrices tempus sed ac diam.
            Nulla non orci non mi tincidunt suscipit. Quisque
            dapibus ante sapien, interdum pharetra mauris
            elementum eget. Maecenas vulputate vehicula purus
            eget sollicitudin. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia
            curae; Aliquam erat volutpat. Maecenas et est non
            tortor dapibus blandit. Suspendisse luctus velit ex,
            quis condimentum ligula congue vitae. Fusce ex orci,
            congue id feugiat dignissim, elementum at turpis.
            Vestibulum faucibus sollicitudin porttitor. Nullam
            consectetur, nisi nec interdum scelerisque, erat
            erat iaculis nisl, nec tincidunt nibh tortor ut
            risus. Duis facilisis malesuada tortor vel
            porttitor.
        </p>
    </div>
</div> */


/***/ }),

/***/ "./src/loadFooter.js":
/*!***************************!*\
  !*** ./src/loadFooter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
function loadFooter() {
    const content = document.getElementById("content");
    const body = document.getElementsByTagName("body")[0];
    const footer = document.createElement ("footer")
    const footerText = document.createElement("p");
    footerText.innerHTML = `Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/"
        >The Odin Project.</a
    >`
    footer.appendChild(footerText);
    body.appendChild(footer);
}



/***/ }),

/***/ "./src/loadLocations.js":
/*!******************************!*\
  !*** ./src/loadLocations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadLocations)
/* harmony export */ });
function loadLocations() {
    const content = document.getElementById("content");
    const locationsLink = document.getElementById("link2");

    const locationsContainer = document.createElement("div");
    locationsContainer.textContent = "test locations";

    locationsLink.addEventListener("click", () => {
        content.textContent = "";
        locationsContainer.textContent = "";
        locationsContainer.id = "locationCards";
        const header = document.createElement("h2");
        header.textContent = "Locations";
        content.appendChild(header);

        // Location 1
        const location1 = document.createElement("div");
        location1.classList.add("locationCard");

        const iframe1 = document.createElement("iframe");
        iframe1.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500253.8940782755!2d165.1124803551673!3d11.606692031548878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sca!4v1658369392555!5m2!1sen!2sca";
        iframe1.style = "border: 0";
        location1.appendChild(iframe1);

        const info1 = document.createElement("div");
        info1.classList.add("locationInfo");
        const info1head = document.createElement("h3");
        info1head.textContent = "Krusty Krab Headquarters";
        const info1address = document.createElement("div");
        info1address.textContent = "580153 Kelp Street";
        const info1city = document.createElement("div");
        info1city.textContent = "Bikini Bottom, Bikini Atoll";
        const info1country = document.createElement("div");
        info1country.textContent = "Marshall Islands";
        info1.appendChild(info1head);
        info1.append(info1address);
        info1.append(info1city);
        info1.append(info1country);
        location1.appendChild(info1);

        locationsContainer.appendChild(location1);

        // Location 2
        const location2 = document.createElement("div");
        location2.classList.add("locationCard");

        const iframe2 = document.createElement("iframe");
        iframe2.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941093.9866484386!2d-110.62640117691875!3d22.87097633047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4b5a91c34de5%3A0xf7bf3797fd3be21c!2sThe%20Krusty%20Krab!5e0!3m2!1sen!2sca!4v1658367259779!5m2!1sen!2sca";
        iframe2.style = "border: 0";
        location2.appendChild(iframe2);

        const info2 = document.createElement("div");
        info2.classList.add("locationInfo");
        const info2head = document.createElement("h3");
        info2head.textContent = "Krusty Krab Mexico";
        const info2address = document.createElement("div");
        info2address.textContent = "808 Sponge Street";
        const info2city = document.createElement("div");
        info2city.textContent = "La Paz, Cabo San Lucas";
        const info2country = document.createElement("div");
        info2country.textContent = "Mexico";
        info2.appendChild(info2head);
        info2.append(info2address);
        info2.append(info2city);
        info2.append(info2country);
        location2.appendChild(info2);

        locationsContainer.appendChild(location2);

        // Location 3
        const location3 = document.createElement("div");
        location3.classList.add("locationCard");

        const iframe3 = document.createElement("iframe");
        iframe3.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696704.0904601718!2d-123.41284267545255!3d46.991147639083316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549173f5fbb6f051%3A0x834bf57336883662!2sBikini%20Bottom%20Tanning%20Salon!5e0!3m2!1sen!2sca!4v1658370434268!5m2!1sen!2sca";

        iframe3.style = "border: 0";
        location3.appendChild(iframe3);

        const info3 = document.createElement("div");
        info3.classList.add("locationInfo");
        const info3head = document.createElement("h3");
        info3head.textContent = "Bikini Bottom Tanning Salon & Pizza";
        const info3address = document.createElement("div");
        info3address.textContent = "69420 Capitol Boulevard SE";
        const info3city = document.createElement("div");
        info3city.textContent = "La Paz, Cabo San Lucas";
        const info3country = document.createElement("div");
        info3country.textContent = "Mexico";
        info3.appendChild(info3head);
        info3.append(info3address);
        info3.append(info3city);
        info3.append(info3country);
        location3.appendChild(info3);

        locationsContainer.appendChild(location3);

        content.appendChild(locationsContainer);
    });
}

{
    /* <h2>Locations</h2>
<div id="locationCards">
    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500253.8940782755!2d165.1124803551673!3d11.606692031548878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sca!4v1658369392555!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Krusty Krab Headquarters</h3>
            <div>580153 Kelp Street</div>
            <div>Bikini Bottom, Bikini Atoll</div>
            <div>Marshall Islands</div>
        </div>
    </div>

    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941093.9866484386!2d-110.62640117691875!3d22.87097633047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4b5a91c34de5%3A0xf7bf3797fd3be21c!2sThe%20Krusty%20Krab!5e0!3m2!1sen!2sca!4v1658367259779!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Krusty Krab Mexico</h3>
            <div>808 Sponge Ave</div>
            <div>La Paz,Cabo San Lucas</div>
            <div>Mexico</div>
        </div>
    </div>

    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696704.0904601718!2d-123.41284267545255!3d46.991147639083316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549173f5fbb6f051%3A0x834bf57336883662!2sBikini%20Bottom%20Tanning%20Salon!5e0!3m2!1sen!2sca!4v1658370434268!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Bikini Bottom Tanning Salon & Pizza</h3>
            <div>69420 Capitol Blvd SE</div>
            <div>Seattle, WA</div>
            <div>United States</div>
        </div>
    </div>
</div> */
}


/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_menu_menu1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/menu1.png */ "./src/images/menu/menu1.png");
/* harmony import */ var _images_menu_menu2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/menu2.png */ "./src/images/menu/menu2.png");
/* harmony import */ var _images_menu_menu3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/menu3.png */ "./src/images/menu/menu3.png");
/* harmony import */ var _images_menu_menu4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/menu4.png */ "./src/images/menu/menu4.png");
/* harmony import */ var _images_menu_menu5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/menu5.png */ "./src/images/menu/menu5.png");






function loadMenu() {
    const content = document.getElementById("content");
    const menuLink = document.getElementById("link1");

    const menuContainer = document.createElement("div");
    menuContainer.textContent = "test";

    menuLink.addEventListener("click", () => {
        content.textContent = "";
        menuContainer.textContent = "";
        menuContainer.id = "menuItems";
        const header = document.createElement("h2");
        header.textContent = "Menu";
        content.appendChild(header);

        newItem(
            _images_menu_menu1_png__WEBPACK_IMPORTED_MODULE_0__,
            "Krusty Krab Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "19"
        );
        newItem(
            _images_menu_menu2_png__WEBPACK_IMPORTED_MODULE_1__,
            "Pioneer Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "23"
        );
        newItem(
            _images_menu_menu3_png__WEBPACK_IMPORTED_MODULE_2__,
            "Bikini Atoll Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "17"
        );
        newItem(
            _images_menu_menu4_png__WEBPACK_IMPORTED_MODULE_3__,
            "Sandy Cheeks Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "27"
        );
        newItem(
            _images_menu_menu5_png__WEBPACK_IMPORTED_MODULE_4__,
            "Sweet Victory Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "29"
        );
        content.appendChild(menuContainer);
    });

    function newItem(imgId, name, description, price) {
        const item = document.createElement("div");
        item.classList.add("menuItem");

        const itemImage = document.createElement("img");
        itemImage.classList.add("menuPic");
        itemImage.id = String(imgId);
        itemImage.src = imgId;

        const itemDescription = document.createElement("div");
        itemDescription.classList.add("itemDescription");
        const infoName = document.createElement("h3");
        infoName.textContent = name;
        const infoDesc = document.createElement("p");
        infoDesc.textContent = description;
        const infoPrice = document.createElement("div");
        infoPrice.textContent = price;

        itemDescription.append(infoName, infoDesc);

        item.append(itemImage, itemDescription, infoPrice);
        menuContainer.appendChild(item);
    }
}

/* <h2>Menu</h2>
                <div id="menuItems">
                    <div class="menuItem">
                        <img id="menu1" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Krusty Krab Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">19</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu2" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Pioneer Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">23</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu3" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Bikini Atoll Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">17</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu4" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Sandy Cheeks Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">27</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu5" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Sweet Victory Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">29</div>
                    </div>
                    <div id="credit">
                        <a
                            href="https://www.freepik.com/vectors/pizza-toppings"
                        >
                            Pizza toppings vector created by pch.vector -
                            www.freepik.com</a
                        >
                    </div>
                </div> */


/***/ }),

/***/ "./src/loadNav.js":
/*!************************!*\
  !*** ./src/loadNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNav)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");


function loadNav() {
    const body = document.getElementsByTagName("body")[0];

    const nav = document.createElement("div");
    nav.id="nav";
    const mainLogo = document.createElement("img");
    mainLogo.id="mainLogo";
    mainLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    const links = document.createElement("ul");
    links.id="links";
    const link1 = document.createElement("li");
    link1.id="link1";
    const link2 = document.createElement("li");
    link2.id="link2";
    const link3 = document.createElement("li");
    link3.id="link3";
    const link4 = document.createElement("li");
    link4.id="link4";

    link1.textContent = "Menu";
    link2.textContent = "Locations";
    link3.textContent = "About Us";
    link4.textContent = "Order Online";

    links.appendChild(link1);
    links.appendChild(link2);
    links.appendChild(link3);
    links.appendChild(link4);


    nav.appendChild (mainLogo);
    nav.appendChild (links);

    body.prepend(nav);
    // return element
}

/***/ }),

/***/ "./src/loadOrder.js":
/*!**************************!*\
  !*** ./src/loadOrder.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadOrder)
/* harmony export */ });
function loadOrder() {
    const content = document.getElementById("content");
    const orderLink = document.getElementById("link4");

    const orderContainer = document.createElement("div");

    orderLink.addEventListener("click", () => {
        content.textContent = "";
        orderContainer.textContent = "";
        orderContainer.id = "orderOnline";
        const header = document.createElement("h2");
        header.textContent = "Order Online";
        content.appendChild(header);

        const orderContent = document.createElement("div");
        orderContent.id = "orderContent";
        const subHead = document.createElement("h3");
        subHead.textContent = "Order now through one of our partners:";
        const uber = document.createElement("img");
        uber.src =
            "http://yeoldeorchard.com/wp-content/uploads/2020/04/5310366-uber-eats-logo-png-and-vector-logo-download-uber-eats-png-3500_3500_preview.png";
        const doordash = document.createElement("img");
        doordash.src =
            "https://toppng.com/uploads/preview/doordash-logo-11609359542nd1g660y5t.png";
        const skip = document.createElement("img");
        skip.src =
            "https://pbs.twimg.com/profile_images/1451592207295787014/HG87IRDA_400x400.jpg";
        orderContent.appendChild(subHead);
        orderContent.appendChild(uber);
        orderContent.appendChild(doordash);
        orderContent.appendChild(skip);

        orderContainer.appendChild(orderContent);
        // orderContent.appendChild(subHead);
        // orderContent.appendChild(subHead);

        content.appendChild(orderContainer);
    });
}


/***/ }),

/***/ "./src/testFunction.js":
/*!*****************************!*\
  !*** ./src/testFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printStuff)
/* harmony export */ });
function printStuff() {
    console.log('this is from testFunction.js');
}

/***/ }),

/***/ "./src/images/bgSlate.jpg":
/*!********************************!*\
  !*** ./src/images/bgSlate.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7fc97407e8a3305603a9.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/482e9767e1d796148079.png";

/***/ }),

/***/ "./src/images/menu/menu1.png":
/*!***********************************!*\
  !*** ./src/images/menu/menu1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/031b696ca016aac25395.png";

/***/ }),

/***/ "./src/images/menu/menu2.png":
/*!***********************************!*\
  !*** ./src/images/menu/menu2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/063b807c952e935f5fc2.png";

/***/ }),

/***/ "./src/images/menu/menu3.png":
/*!***********************************!*\
  !*** ./src/images/menu/menu3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/11d77c809e4019563650.png";

/***/ }),

/***/ "./src/images/menu/menu4.png":
/*!***********************************!*\
  !*** ./src/images/menu/menu4.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/377cbd81437c49e91d35.png";

/***/ }),

/***/ "./src/images/menu/menu5.png":
/*!***********************************!*\
  !*** ./src/images/menu/menu5.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/72aef9ef9a64fd094550.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDN0NlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJUQUEyVDs7QUFFM1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwSGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaks0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU3QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLcUM7O0FBRXRCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2xvYWRBYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2xvYWRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkTG9jYXRpb25zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkTmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE9yZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGVzdEZ1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmdTbGF0ZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMyNDJhO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2F2ZWF0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuaHRtbCB7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjNzMyNDJhO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG5hdiBiYXIgKi9cXG4jbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbn1cXG4jbWFpbkxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNXZoO1xcbn1cXG4jbGlua3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNsaW5rcyBsaSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuI2xpbmtzIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGNlO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuLyogZW5kIG9mIG5hdiBiYXIqL1xcblxcbiNhY3RpdmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbWVudSAgKi9cXG4jbWVudUl0ZW1zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy5yYXdwaXhlbC5jb20vaW1hZ2VfNjAwL2N6Tm1jeTF3Y21sMllYUmxMM0poZDNCcGVHVnNYMmx0WVdkbGN5OTNaV0p6YVhSbFgyTnZiblJsYm5RdmJISXZibk14TXpZMk1TMXBiV0ZuWlMxcmQzWjVaSEZvWmk1cWNHYy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuLm1lbnVJdGVtOmhvdmVyLFxcbi5sb2NhdGlvbkNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuOSk7XFxufVxcbi5tZW51UGljIHtcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzI0MmI3NTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLml0ZW1QcmljZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2NyZWRpdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI2NyZWRpdCBhIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcbi8qIGVuZCBvZiBtZW51IHNlY3Rpb24gKi9cXG5cXG4vKiBsb2NhdGlvbnMgKi9cXG4jbG9jYXRpb25DYXJkcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ2NjM2ODg5LWJhOWZkZDYzNTgzZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkxNSZxPTgwXFxcIik7XFxufVxcbi5sb2NhdGlvbkNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuaWZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcbi5sb2NhdGlvbkluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIGVuZCBvZiBsb2NhdGlvbnMgc2VjdGlvbiAqL1xcblxcbi8qIGFib3V0IHVzICovXFxuI2Fib3V0VXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnJhd3BpeGVsLmNvbS9pbWFnZV84MDAvY0hKcGRtRjBaUzlzY2k5cGJXRm5aWE12ZDJWaWMybDBaUzh5TURJeUxUQTFMMmx6T1RZME15MXBiV0ZuWlMxcmQzWjVaekZpZUM1cWNHYy5qcGdcXFwiKTtcXG59XFxuI2Fib3V0Q29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNhYm91dENvbnRlbnQgaDMsXFxuI2Fib3V0Q29udGVudCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4jYWJvdXRDb250ZW50IGltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcbi8qIGVuZCBvZiBhYm91dCB1cyBzZWN0aW9uICovXFxuXFxuLyogb3JkZXIgb25saW5lICovXFxuI29yZGVyT25saW5lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0ODY5NTYwNy05YzczNDMwYmEwNjU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MjUmcT04MFxcXCIpO1xcbn1cXG4jb3JkZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNvcmRlckNvbnRlbnQgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcbi8qIGVuZCBvZiBvcmRlciBvbmxpbmUgc2VjdGlvbiAqL1xcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jb2FzdGFscGh5c2lvLmNhL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExL2Zvb3Rlci10ZXh0dXJlLWJnLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbn1cXG4vKiBlbmQgb2YgZm9vdGVyIHNlY3Rpb24gKi9cXG5cXG4vKiBjb2xvciByZWZlcmVuY2UgKi9cXG4jY29sb3JzIHtcXG4gICAgY29sb3I6ICM3MzI0MmE7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbiAgICBjb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFlBQVk7QUFDWjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlEQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7QUFDQSxrQkFBa0I7O0FBRWxCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFVBQVU7QUFDVjtJQUNJLHlCQUF5QjtJQUN6QixzS0FBc0s7SUFDdEssc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7O0lBRUksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBLHdCQUF3Qjs7QUFFeEIsY0FBYztBQUNkO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9MQUFvTDtBQUN4TDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSw2QkFBNkI7O0FBRTdCLGFBQWE7QUFDYjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0pBQWtKO0FBQ3RKO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBLDRCQUE0Qjs7QUFFNUIsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0xBQW9MO0FBQ3hMO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQSxnQ0FBZ0M7O0FBRWhDLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtHQUFrRztJQUNsRyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQSwwQkFBMEI7O0FBRTFCLG9CQUFvQjtBQUNwQjtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzI0MmE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiLCBjdXJzaXZlO1xcbn1cXG5odG1sIHtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkICM3MzI0MmE7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbmF2IGJhciAqL1xcbiNuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnU2xhdGUuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxufVxcbiNtYWluTG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcbiNsaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xpbmtzIGxpIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4jbGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwY2U7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4vKiBlbmQgb2YgbmF2IGJhciovXFxuXFxuI2FjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBtZW51ICAqL1xcbiNtZW51SXRlbXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnJhd3BpeGVsLmNvbS9pbWFnZV82MDAvY3pObWN5MXdjbWwyWVhSbEwzSmhkM0JwZUdWc1gybHRZV2RsY3k5M1pXSnphWFJsWDJOdmJuUmxiblF2YkhJdmJuTXhNelkyTVMxcGJXRm5aUzFyZDNaNVpIRm9aaTVxY0djLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMmZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4ubWVudUl0ZW06aG92ZXIsXFxuLmxvY2F0aW9uQ2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC45KTtcXG59XFxuLm1lbnVQaWMge1xcbiAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5YzA3NztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczMjQyYjc1O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaXRlbVByaWNlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jY3JlZGl0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jY3JlZGl0IGEge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLyogZW5kIG9mIG1lbnUgc2VjdGlvbiAqL1xcblxcbi8qIGxvY2F0aW9ucyAqL1xcbiNsb2NhdGlvbkNhcmRzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDY2MzY4ODktYmE5ZmRkNjM1ODNlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTE1JnE9ODBcXFwiKTtcXG59XFxuLmxvY2F0aW9uQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG5pZnJhbWUge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbTtcXG59XFxuLmxvY2F0aW9uSW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogZW5kIG9mIGxvY2F0aW9ucyBzZWN0aW9uICovXFxuXFxuLyogYWJvdXQgdXMgKi9cXG4jYWJvdXRVcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucmF3cGl4ZWwuY29tL2ltYWdlXzgwMC9jSEpwZG1GMFpTOXNjaTlwYldGblpYTXZkMlZpYzJsMFpTOHlNREl5TFRBMUwybHpPVFkwTXkxcGJXRm5aUzFyZDNaNVp6RmllQzVxY0djLmpwZ1xcXCIpO1xcbn1cXG4jYWJvdXRDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI2Fib3V0Q29udGVudCBoMyxcXG4jYWJvdXRDb250ZW50IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbiNhYm91dENvbnRlbnQgaW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuLyogZW5kIG9mIGFib3V0IHVzIHNlY3Rpb24gKi9cXG5cXG4vKiBvcmRlciBvbmxpbmUgKi9cXG4jb3JkZXJPbmxpbmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ4Njk1NjA3LTljNzM0MzBiYTA2NT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTYyNSZxPTgwXFxcIik7XFxufVxcbiNvcmRlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI29yZGVyQ29udGVudCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG59XFxuLyogZW5kIG9mIG9yZGVyIG9ubGluZSBzZWN0aW9uICovXFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2NvYXN0YWxwaHlzaW8uY2Evd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTEvZm9vdGVyLXRleHR1cmUtYmcuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmZvb3RlciBhIHtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxufVxcbi8qIGVuZCBvZiBmb290ZXIgc2VjdGlvbiAqL1xcblxcbi8qIGNvbG9yIHJlZmVyZW5jZSAqL1xcbiNjb2xvcnMge1xcbiAgICBjb2xvcjogIzczMjQyYTtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxuICAgIGNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgcHJpbnRTdHVmZiBmcm9tIFwiLi90ZXN0RnVuY3Rpb25cIjtcbnByaW50U3R1ZmYoKTtcblxuaW1wb3J0IGxvYWROYXYgZnJvbSBcIi4vbG9hZE5hdlwiO1xubG9hZE5hdigpO1xuXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbG9hZE1lbnVcIjtcbmxvYWRNZW51KCk7XG5cbmltcG9ydCBsb2FkTG9jYXRpb25zIGZyb20gXCIuL2xvYWRMb2NhdGlvbnNcIjtcbmxvYWRMb2NhdGlvbnMoKTtcblxuaW1wb3J0IGxvYWRBYm91dCBmcm9tIFwiLi9sb2FkQWJvdXRcIjtcbmxvYWRBYm91dCgpO1xuXG5pbXBvcnQgbG9hZE9yZGVyIGZyb20gXCIuL2xvYWRPcmRlclwiO1xubG9hZE9yZGVyKCk7XG5cbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xvYWRGb290ZXJcIjtcbmxvYWRGb290ZXIoKTtcblxuXG5cblxuY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbi8vIG1lbnUgbW9kdWxlXG4vLyBjb25zdCBtZW51UGljcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZW51UGljXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51UGljcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBtZW51UGljdHVyZSA9IHJlcXVpcmUoYC4vaW1hZ2VzL21lbnUvbWVudSR7aX0ucG5nYCk7XG4vLyAgICAgbWVudVBpY3NbaV0uc3JjID0gbWVudVBpY3R1cmU7XG4vLyB9XG5cbi8vIGNvbnN0IG1hcFBpbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFBpbjFcIik7XG4vLyBtYXBQaW4xLnNyYyA9IG1hcDE7XG5cbi8vIG5hdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsICgnICsgbmF2QmcgKyAnKSc7XG5cbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY29uc3QgbWFpbkxvZ28gPSBuZXcgSW1hZ2UoKTtcbi8vIG1haW5Mb2dvLnNyYyA9IGxvZ287XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gYnRuLnRleHRDb250ZW50ID0gXCJDbGljayBtZVwiO1xuLy8gYnRuLm9uY2xpY2sgPSBwcmludFN0dWZmO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChidG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rM1wiKTtcblxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwidGVzdCBhYm91dCB1c1wiO1xuXG4gICAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBhYm91dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLmlkID0gXCJhYm91dFVzXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWJvdXRDb250ZW50LmlkID0gXCJhYm91dENvbnRlbnRcIjtcbiAgICAgICAgY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBhYm91dEhlYWQudGV4dENvbnRlbnQgPSBcIkEgdHJhZGl0aW9uIG9mIEV4Y2VsbGVuY2VcIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhYm91dEltYWdlMS5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy84LzhkL1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMjYuSlBHL1wiO1xuICAgICAgICBjb25zdCBhYm91dFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFib3V0UDEudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdm9sdXRwYXQsIHZlbGl0IHNlZCBhdWN0b3IgbWFsZXN1YWRhLCBpcHN1bSBtaSBldWlzbW9kIG1hZ25hLCBhdCBibGFuZGl0IGR1aSBsaWJlcm8gYXQgbWFnbmEuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUXVpc3F1ZSBpbiBlc3QgaW4gbWF1cmlzIG1vbGxpcyB2YXJpdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVsbGEgdWxsYW1jb3JwZXIgbGVvIGFjIG1hdXJpcyBzYWdpdHRpcyBncmF2aWRhLiBQcmFlc2VudCByaG9uY3VzIGZhdWNpYnVzIGZlbGlzIG5vbiB1bHRyaWNpZXMuIFByb2luIG5lcXVlIGlwc3VtLCBtYXR0aXMgc2VkIGV4IHZpdGFlLCBzYWdpdHRpcyBhdWN0b3IgcHVydXMuIEN1cmFiaXR1ciBub24gb2RpbyBhdWd1ZS4gTWF1cmlzIG9kaW8gbGVjdHVzLCB0ZW1wdXMgZGljdHVtIGxlbyBldSwgZmVybWVudHVtIG1hbGVzdWFkYSBhcmN1LlwiO1xuICAgICAgICBjb25zdCBhYm91dEltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFib3V0SW1hZ2UyLnNyYyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzcvNzMvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0yOC5KUEcvXCI7XG4gICAgICAgIGNvbnN0IGFib3V0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYWJvdXRQMi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIk5hbSBhIHBlbGxlbnRlc3F1ZSBtYWduYSwgc2l0IGFtZXQgdGVtcHVzIG9yY2kuIEZ1c2NlIHRpbmNpZHVudCBhbnRlIGFjIGF1Z3VlIHZlc3RpYnVsdW0gbW9sZXN0aWUuIFByYWVzZW50IGFjIG5pc2kgbmVjIHRlbGx1cyB1bHRyaWNlcyBlbGVtZW50dW0uIFNlZCB0ZW1wb3IgdWx0cmljaWVzIHRyaXN0aXF1ZS4gU2VkIGlhY3VsaXMsIGxpZ3VsYSB2aXRhZSBwZWxsZW50ZXNxdWUgc2FnaXR0aXMsIG1ldHVzIG5pc2kgZGljdHVtIGxhY3VzLCBuZWMgdm9sdXRwYXQgaXBzdW0gdmVsaXQgdmVsIGxlY3R1cy4gU2VkIHF1aXMgZmVsaXMgZmluaWJ1cywgZGljdHVtIGF1Z3VlIGEsIHBvcnR0aXRvciBuaXNsLiBNYXVyaXMgaWQgY29uZ3VlIHR1cnBpcy5cIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhYm91dEltYWdlMy5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy80LzQ5L1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMTUuSlBHL1wiO1xuICAgICAgICBjb25zdCBhYm91dFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFib3V0UDMudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJEb25lYyB1dCBzZW0gYSBudW5jIHVsdHJpY2VzIHRlbXB1cyBzZWQgYWMgZGlhbS4gTnVsbGEgbm9uIG9yY2kgbm9uIG1pIHRpbmNpZHVudCBzdXNjaXBpdC4gUXVpc3F1ZSBkYXBpYnVzIGFudGUgc2FwaWVuLCBpbnRlcmR1bSBwaGFyZXRyYSBtYXVyaXMgZWxlbWVudHVtIGVnZXQuIE1hZWNlbmFzIHZ1bHB1dGF0ZSB2ZWhpY3VsYSBwdXJ1cyBlZ2V0IHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gTWFlY2VuYXMgZXQgZXN0IG5vbiB0b3J0b3IgZGFwaWJ1cyBibGFuZGl0LiBTdXNwZW5kaXNzZSBsdWN0dXMgdmVsaXQgZXgsIHF1aXMgY29uZGltZW50dW0gbGlndWxhIGNvbmd1ZSB2aXRhZS4gRnVzY2UgZXggb3JjaSwgY29uZ3VlIGlkIGZldWdpYXQgZGlnbmlzc2ltLCBlbGVtZW50dW0gYXQgdHVycGlzLiBWZXN0aWJ1bHVtIGZhdWNpYnVzIHNvbGxpY2l0dWRpbiBwb3J0dGl0b3IuIE51bGxhbSBjb25zZWN0ZXR1ciwgbmlzaSBuZWMgaW50ZXJkdW0gc2NlbGVyaXNxdWUsIGVyYXQgZXJhdCBpYWN1bGlzIG5pc2wsIG5lYyB0aW5jaWR1bnQgbmliaCB0b3J0b3IgdXQgcmlzdXMuIER1aXMgZmFjaWxpc2lzIG1hbGVzdWFkYSB0b3J0b3IgdmVsIHBvcnR0aXRvci5cIjtcblxuICAgICAgICBhYm91dENvbnRlbnQuYXBwZW5kKFxuICAgICAgICAgICAgYWJvdXRIZWFkLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTEsXG4gICAgICAgICAgICBhYm91dFAxLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTIsXG4gICAgICAgICAgICBhYm91dFAyLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTMsXG4gICAgICAgICAgICBhYm91dFAzXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEhlYWQpO1xuICAgICAgICAvLyBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZTEpO1xuICAgICAgICAvLyBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRQMSk7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEltYWdlMik7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFAyKTtcbiAgICAgICAgLy8gYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0SW1hZ2UzKTtcbiAgICAgICAgLy8gYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0UDMpO1xuXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgfSk7XG59XG5cbi8qIDxoMj5BYm91dCBVczwvaDI+XG48ZGl2IGlkPVwiYWJvdXRVc1wiPlxuICAgIDxkaXYgaWQ9XCJhYm91dENvbnRlbnRcIj5cbiAgICAgICAgPGgzPkEgdHJhZGl0aW9uIG9mIGV4Y2VsbGVuY2U8L2gzPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy84LzhkL1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMjYuSlBHL1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgIGVsaXQuIE51bGxhbSB2b2x1dHBhdCwgdmVsaXQgc2VkIGF1Y3RvciBtYWxlc3VhZGEsXG4gICAgICAgICAgICBpcHN1bSBtaSBldWlzbW9kIG1hZ25hLCBhdCBibGFuZGl0IGR1aSBsaWJlcm8gYXRcbiAgICAgICAgICAgIG1hZ25hLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bVxuICAgICAgICAgICAgcHJpbWlzIGluIGZhdWNpYnVzLiBRdWlzcXVlIGluIGVzdCBpbiBtYXVyaXMgbW9sbGlzXG4gICAgICAgICAgICB2YXJpdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtXG4gICAgICAgICAgICBwcmltaXMgaW4gZmF1Y2lidXMuIE51bGxhIHVsbGFtY29ycGVyIGxlbyBhYyBtYXVyaXNcbiAgICAgICAgICAgIHNhZ2l0dGlzIGdyYXZpZGEuIFByYWVzZW50IHJob25jdXMgZmF1Y2lidXMgZmVsaXNcbiAgICAgICAgICAgIG5vbiB1bHRyaWNpZXMuIFByb2luIG5lcXVlIGlwc3VtLCBtYXR0aXMgc2VkIGV4XG4gICAgICAgICAgICB2aXRhZSwgc2FnaXR0aXMgYXVjdG9yIHB1cnVzLiBDdXJhYml0dXIgbm9uIG9kaW9cbiAgICAgICAgICAgIGF1Z3VlLiBNYXVyaXMgb2RpbyBsZWN0dXMsIHRlbXB1cyBkaWN0dW0gbGVvIGV1LFxuICAgICAgICAgICAgZmVybWVudHVtIG1hbGVzdWFkYSBhcmN1LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzcvNzMvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0yOC5KUEcvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBOYW0gYSBwZWxsZW50ZXNxdWUgbWFnbmEsIHNpdCBhbWV0IHRlbXB1cyBvcmNpLlxuICAgICAgICAgICAgRnVzY2UgdGluY2lkdW50IGFudGUgYWMgYXVndWUgdmVzdGlidWx1bSBtb2xlc3RpZS5cbiAgICAgICAgICAgIFByYWVzZW50IGFjIG5pc2kgbmVjIHRlbGx1cyB1bHRyaWNlcyBlbGVtZW50dW0uIFNlZFxuICAgICAgICAgICAgdGVtcG9yIHVsdHJpY2llcyB0cmlzdGlxdWUuIFNlZCBpYWN1bGlzLCBsaWd1bGFcbiAgICAgICAgICAgIHZpdGFlIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcywgbWV0dXMgbmlzaSBkaWN0dW1cbiAgICAgICAgICAgIGxhY3VzLCBuZWMgdm9sdXRwYXQgaXBzdW0gdmVsaXQgdmVsIGxlY3R1cy4gU2VkIHF1aXNcbiAgICAgICAgICAgIGZlbGlzIGZpbmlidXMsIGRpY3R1bSBhdWd1ZSBhLCBwb3J0dGl0b3IgbmlzbC5cbiAgICAgICAgICAgIE1hdXJpcyBpZCBjb25ndWUgdHVycGlzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzQvNDkvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0xNS5KUEcvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBEb25lYyB1dCBzZW0gYSBudW5jIHVsdHJpY2VzIHRlbXB1cyBzZWQgYWMgZGlhbS5cbiAgICAgICAgICAgIE51bGxhIG5vbiBvcmNpIG5vbiBtaSB0aW5jaWR1bnQgc3VzY2lwaXQuIFF1aXNxdWVcbiAgICAgICAgICAgIGRhcGlidXMgYW50ZSBzYXBpZW4sIGludGVyZHVtIHBoYXJldHJhIG1hdXJpc1xuICAgICAgICAgICAgZWxlbWVudHVtIGVnZXQuIE1hZWNlbmFzIHZ1bHB1dGF0ZSB2ZWhpY3VsYSBwdXJ1c1xuICAgICAgICAgICAgZWdldCBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW5cbiAgICAgICAgICAgIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYVxuICAgICAgICAgICAgY3VyYWU7IEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gTWFlY2VuYXMgZXQgZXN0IG5vblxuICAgICAgICAgICAgdG9ydG9yIGRhcGlidXMgYmxhbmRpdC4gU3VzcGVuZGlzc2UgbHVjdHVzIHZlbGl0IGV4LFxuICAgICAgICAgICAgcXVpcyBjb25kaW1lbnR1bSBsaWd1bGEgY29uZ3VlIHZpdGFlLiBGdXNjZSBleCBvcmNpLFxuICAgICAgICAgICAgY29uZ3VlIGlkIGZldWdpYXQgZGlnbmlzc2ltLCBlbGVtZW50dW0gYXQgdHVycGlzLlxuICAgICAgICAgICAgVmVzdGlidWx1bSBmYXVjaWJ1cyBzb2xsaWNpdHVkaW4gcG9ydHRpdG9yLiBOdWxsYW1cbiAgICAgICAgICAgIGNvbnNlY3RldHVyLCBuaXNpIG5lYyBpbnRlcmR1bSBzY2VsZXJpc3F1ZSwgZXJhdFxuICAgICAgICAgICAgZXJhdCBpYWN1bGlzIG5pc2wsIG5lYyB0aW5jaWR1bnQgbmliaCB0b3J0b3IgdXRcbiAgICAgICAgICAgIHJpc3VzLiBEdWlzIGZhY2lsaXNpcyBtYWxlc3VhZGEgdG9ydG9yIHZlbFxuICAgICAgICAgICAgcG9ydHRpdG9yLlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L2Rpdj4gKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwiZm9vdGVyXCIpXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gYE1hZGUgYnlcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tlbmtuZWVsZWVcIj5LZW5ueSBMZWU8L2E+XG4gICAgZm9yXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIlxuICAgICAgICA+VGhlIE9kaW4gUHJvamVjdC48L2FcbiAgICA+YFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRMb2NhdGlvbnMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbnNMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rMlwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJ0ZXN0IGxvY2F0aW9uc1wiO1xuXG4gICAgbG9jYXRpb25zTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmlkID0gXCJsb2NhdGlvbkNhcmRzXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbnNcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDFcbiAgICAgICAgY29uc3QgbG9jYXRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24xLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTEuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTEuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaWZyYW1lMSk7XG5cbiAgICAgICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMWhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8xaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgSGVhZHF1YXJ0ZXJzXCI7XG4gICAgICAgIGNvbnN0IGluZm8xYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNTgwMTUzIEtlbHAgU3RyZWV0XCI7XG4gICAgICAgIGNvbnN0IGluZm8xY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY2l0eS50ZXh0Q29udGVudCA9IFwiQmlraW5pIEJvdHRvbSwgQmlraW5pIEF0b2xsXCI7XG4gICAgICAgIGNvbnN0IGluZm8xY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWFyc2hhbGwgSXNsYW5kc1wiO1xuICAgICAgICBpbmZvMS5hcHBlbmRDaGlsZChpbmZvMWhlYWQpO1xuICAgICAgICBpbmZvMS5hcHBlbmQoaW5mbzFhZGRyZXNzKTtcbiAgICAgICAgaW5mbzEuYXBwZW5kKGluZm8xY2l0eSk7XG4gICAgICAgIGluZm8xLmFwcGVuZChpbmZvMWNvdW50cnkpO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuXG4gICAgICAgIGxvY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbjEpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDJcbiAgICAgICAgY29uc3QgbG9jYXRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24yLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTIuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTIuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjIuYXBwZW5kQ2hpbGQoaWZyYW1lMik7XG5cbiAgICAgICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMmhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8yaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgTWV4aWNvXCI7XG4gICAgICAgIGNvbnN0IGluZm8yYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiODA4IFNwb25nZSBTdHJlZXRcIjtcbiAgICAgICAgY29uc3QgaW5mbzJjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzJjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8yY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8yLmFwcGVuZENoaWxkKGluZm8yaGVhZCk7XG4gICAgICAgIGluZm8yLmFwcGVuZChpbmZvMmFkZHJlc3MpO1xuICAgICAgICBpbmZvMi5hcHBlbmQoaW5mbzJjaXR5KTtcbiAgICAgICAgaW5mbzIuYXBwZW5kKGluZm8yY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMi5hcHBlbmRDaGlsZChpbmZvMik7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMik7XG5cbiAgICAgICAgLy8gTG9jYXRpb24gM1xuICAgICAgICBjb25zdCBsb2NhdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvbjMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uQ2FyZFwiKTtcblxuICAgICAgICBjb25zdCBpZnJhbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lMy5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ2OTY3MDQuMDkwNDYwMTcxOCEyZC0xMjMuNDEyODQyNjc1NDUyNTUhM2Q0Ni45OTExNDc2MzkwODMzMTYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDU0OTE3M2Y1ZmJiNmYwNTElM0EweDgzNGJmNTczMzY4ODM2NjIhMnNCaWtpbmklMjBCb3R0b20lMjBUYW5uaW5nJTIwU2Fsb24hNWUwITNtMiExc2VuITJzY2EhNHYxNjU4MzcwNDM0MjY4ITVtMiExc2VuITJzY2FcIjtcblxuICAgICAgICBpZnJhbWUzLnN0eWxlID0gXCJib3JkZXI6IDBcIjtcbiAgICAgICAgbG9jYXRpb24zLmFwcGVuZENoaWxkKGlmcmFtZTMpO1xuXG4gICAgICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSW5mb1wiKTtcbiAgICAgICAgY29uc3QgaW5mbzNoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBpbmZvM2hlYWQudGV4dENvbnRlbnQgPSBcIkJpa2luaSBCb3R0b20gVGFubmluZyBTYWxvbiAmIFBpenphXCI7XG4gICAgICAgIGNvbnN0IGluZm8zYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNjk0MjAgQ2FwaXRvbCBCb3VsZXZhcmQgU0VcIjtcbiAgICAgICAgY29uc3QgaW5mbzNjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzNjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8zY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8zLmFwcGVuZENoaWxkKGluZm8zaGVhZCk7XG4gICAgICAgIGluZm8zLmFwcGVuZChpbmZvM2FkZHJlc3MpO1xuICAgICAgICBpbmZvMy5hcHBlbmQoaW5mbzNjaXR5KTtcbiAgICAgICAgaW5mbzMuYXBwZW5kKGluZm8zY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMy5hcHBlbmRDaGlsZChpbmZvMyk7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMyk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbnNDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG57XG4gICAgLyogPGgyPkxvY2F0aW9uczwvaDI+XG48ZGl2IGlkPVwibG9jYXRpb25DYXJkc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIEhlYWRxdWFydGVyczwvaDM+XG4gICAgICAgICAgICA8ZGl2PjU4MDE1MyBLZWxwIFN0cmVldDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5CaWtpbmkgQm90dG9tLCBCaWtpbmkgQXRvbGw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TWFyc2hhbGwgSXNsYW5kczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIE1leGljbzwvaDM+XG4gICAgICAgICAgICA8ZGl2PjgwOCBTcG9uZ2UgQXZlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxhIFBheixDYWJvIFNhbiBMdWNhczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5NZXhpY288L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb25DYXJkXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY5NjcwNC4wOTA0NjAxNzE4ITJkLTEyMy40MTI4NDI2NzU0NTI1NSEzZDQ2Ljk5MTE0NzYzOTA4MzMxNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NTQ5MTczZjVmYmI2ZjA1MSUzQTB4ODM0YmY1NzMzNjg4MzY2MiEyc0Jpa2luaSUyMEJvdHRvbSUyMFRhbm5pbmclMjBTYWxvbiE1ZTAhM20yITFzZW4hMnNjYSE0djE2NTgzNzA0MzQyNjghNW0yITFzZW4hMnNjYVwiXG4gICAgICAgICAgICBtYXgtd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDBcIlxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkluZm9cIj5cbiAgICAgICAgICAgIDxoMz5CaWtpbmkgQm90dG9tIFRhbm5pbmcgU2Fsb24gJiBQaXp6YTwvaDM+XG4gICAgICAgICAgICA8ZGl2PjY5NDIwIENhcGl0b2wgQmx2ZCBTRTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5TZWF0dGxlLCBXQTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Vbml0ZWQgU3RhdGVzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICovXG59XG4iLCJpbXBvcnQgbWVudTEgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTEucG5nXCI7XG5pbXBvcnQgbWVudTIgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTIucG5nXCI7XG5pbXBvcnQgbWVudTMgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTMucG5nXCI7XG5pbXBvcnQgbWVudTQgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTQucG5nXCI7XG5pbXBvcnQgbWVudTUgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTUucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmsxXCIpO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwidGVzdFwiO1xuXG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIG1lbnVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBtZW51Q29udGFpbmVyLmlkID0gXCJtZW51SXRlbXNcIjtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51MSxcbiAgICAgICAgICAgIFwiS3J1c3R5IEtyYWIgUGl6emFcIixcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbSB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi4gUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXCIsXG4gICAgICAgICAgICBcIjE5XCJcbiAgICAgICAgKTtcbiAgICAgICAgbmV3SXRlbShcbiAgICAgICAgICAgIG1lbnUyLFxuICAgICAgICAgICAgXCJQaW9uZWVyIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIyM1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51MyxcbiAgICAgICAgICAgIFwiQmlraW5pIEF0b2xsIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIxN1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51NCxcbiAgICAgICAgICAgIFwiU2FuZHkgQ2hlZWtzIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIyN1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51NSxcbiAgICAgICAgICAgIFwiU3dlZXQgVmljdG9yeSBQaXp6YVwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLiBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcywgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cIixcbiAgICAgICAgICAgIFwiMjlcIlxuICAgICAgICApO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbmV3SXRlbShpbWdJZCwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVQaWNcIik7XG4gICAgICAgIGl0ZW1JbWFnZS5pZCA9IFN0cmluZyhpbWdJZCk7XG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpbWdJZDtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgaW5mb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm9OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgY29uc3QgaW5mb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaW5mb0Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaW5mb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb1ByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmFwcGVuZChpbmZvTmFtZSwgaW5mb0Rlc2MpO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kKGl0ZW1JbWFnZSwgaXRlbURlc2NyaXB0aW9uLCBpbmZvUHJpY2UpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbn1cblxuLyogPGgyPk1lbnU8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51SXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTFcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5LcnVzdHkgS3JhYiBQaXp6YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1QcmljZVwiPjE5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJtZW51MlwiIGNsYXNzPVwibWVudVBpY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbURlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBpb25lZXIgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4yMzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTNcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CaWtpbmkgQXRvbGwgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4xNzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTRcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYW5keSBDaGVla3MgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4yNzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTVcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Td2VldCBWaWN0b3J5IFBpenphPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByaWNlXCI+Mjk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjcmVkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvcGl6emEtdG9wcGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpenphIHRvcHBpbmdzIHZlY3RvciBjcmVhdGVkIGJ5IHBjaC52ZWN0b3IgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd3dy5mcmVlcGlrLmNvbTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi9cbiIsImltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTmF2KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdi5pZD1cIm5hdlwiO1xuICAgIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYWluTG9nby5pZD1cIm1haW5Mb2dvXCI7XG4gICAgbWFpbkxvZ28uc3JjID0gbG9nbztcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaW5rcy5pZD1cImxpbmtzXCI7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazEuaWQ9XCJsaW5rMVwiO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpbmsyLmlkPVwibGluazJcIjtcbiAgICBjb25zdCBsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaW5rMy5pZD1cImxpbmszXCI7XG4gICAgY29uc3QgbGluazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazQuaWQ9XCJsaW5rNFwiO1xuXG4gICAgbGluazEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBsaW5rMi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25zXCI7XG4gICAgbGluazMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgbGluazQudGV4dENvbnRlbnQgPSBcIk9yZGVyIE9ubGluZVwiO1xuXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazEpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmsyKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rMyk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazQpO1xuXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQgKG1haW5Mb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQgKGxpbmtzKTtcblxuICAgIGJvZHkucHJlcGVuZChuYXYpO1xuICAgIC8vIHJldHVybiBlbGVtZW50XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE9yZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3Qgb3JkZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rNFwiKTtcblxuICAgIGNvbnN0IG9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG9yZGVyTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgb3JkZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBvcmRlckNvbnRhaW5lci5pZCA9IFwib3JkZXJPbmxpbmVcIjtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk9yZGVyIE9ubGluZVwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3Qgb3JkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3JkZXJDb250ZW50LmlkID0gXCJvcmRlckNvbnRlbnRcIjtcbiAgICAgICAgY29uc3Qgc3ViSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgc3ViSGVhZC50ZXh0Q29udGVudCA9IFwiT3JkZXIgbm93IHRocm91Z2ggb25lIG9mIG91ciBwYXJ0bmVyczpcIjtcbiAgICAgICAgY29uc3QgdWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHViZXIuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cDovL3llb2xkZW9yY2hhcmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0LzUzMTAzNjYtdWJlci1lYXRzLWxvZ28tcG5nLWFuZC12ZWN0b3ItbG9nby1kb3dubG9hZC11YmVyLWVhdHMtcG5nLTM1MDBfMzUwMF9wcmV2aWV3LnBuZ1wiO1xuICAgICAgICBjb25zdCBkb29yZGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRvb3JkYXNoLnNyYyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vdG9wcG5nLmNvbS91cGxvYWRzL3ByZXZpZXcvZG9vcmRhc2gtbG9nby0xMTYwOTM1OTU0Mm5kMWc2NjB5NXQucG5nXCI7XG4gICAgICAgIGNvbnN0IHNraXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBza2lwLnNyYyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xNDUxNTkyMjA3Mjk1Nzg3MDE0L0hHODdJUkRBXzQwMHg0MDAuanBnXCI7XG4gICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChzdWJIZWFkKTtcbiAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKHViZXIpO1xuICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9vcmRhc2gpO1xuICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2tpcCk7XG5cbiAgICAgICAgb3JkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQob3JkZXJDb250ZW50KTtcbiAgICAgICAgLy8gb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWQpO1xuICAgICAgICAvLyBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3ViSGVhZCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChvcmRlckNvbnRhaW5lcik7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFN0dWZmKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGZyb20gdGVzdEZ1bmN0aW9uLmpzJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9