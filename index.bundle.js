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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n    cursor: pointer;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#mainImg {\n    border: 8px solid #d9c077;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,YAAY;AACZ;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,yDAA8C;IAC9C,4BAA4B;IAC5B,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,qBAAqB;IACrB,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,cAAc;AAClB;AACA,kBAAkB;;AAElB;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,UAAU;AACV;IACI,yBAAyB;IACzB,sKAAsK;IACtK,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,cAAc;IACd,aAAa;IACb,wCAAwC;AAC5C;AACA;;IAEI,uCAAuC;AAC3C;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,wCAAwC;AAC5C;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;AACrB;AACA,wBAAwB;;AAExB,cAAc;AACd;IACI,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,wCAAwC;AAC5C;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA,6BAA6B;;AAE7B,aAAa;AACb;IACI,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,kJAAkJ;AACtJ;AACA;IACI,wCAAwC;AAC5C;AACA;;IAEI,SAAS;IACT,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,UAAU;AACd;AACA,4BAA4B;;AAE5B,iBAAiB;AACjB;IACI,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,wCAAwC;AAC5C;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;AAChB;AACA,gCAAgC;;AAEhC,WAAW;AACX;IACI,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;IACxC,kGAAkG;IAClG,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA,0BAA0B;;AAE1B,oBAAoB;AACpB;IACI,cAAc;IACd,cAAc;IACd,6BAA6B;AACjC","sourcesContent":["body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(\"../images/bgSlate.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n    cursor: pointer;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#mainImg {\n    border: 8px solid #d9c077;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _loadMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMain */ "./src/loadMain.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadLocations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadLocations */ "./src/loadLocations.js");
/* harmony import */ var _loadAbout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadAbout */ "./src/loadAbout.js");
/* harmony import */ var _loadOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadOrder */ "./src/loadOrder.js");
/* harmony import */ var _loadFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadFooter */ "./src/loadFooter.js");


(0,_testFunction__WEBPACK_IMPORTED_MODULE_1__["default"])();


(0,_loadNav__WEBPACK_IMPORTED_MODULE_2__["default"])();


(0,_loadMain__WEBPACK_IMPORTED_MODULE_3__["default"])();


(0,_loadMenu__WEBPACK_IMPORTED_MODULE_4__["default"])();


(0,_loadLocations__WEBPACK_IMPORTED_MODULE_5__["default"])();


(0,_loadAbout__WEBPACK_IMPORTED_MODULE_6__["default"])();


(0,_loadOrder__WEBPACK_IMPORTED_MODULE_7__["default"])();


(0,_loadFooter__WEBPACK_IMPORTED_MODULE_8__["default"])();




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

/***/ "./src/loadMain.js":
/*!*************************!*\
  !*** ./src/loadMain.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMain)
/* harmony export */ });
function loadMain() {
    const content = document.getElementById("content");
    const mainLink = document.getElementById("mainLogo");

    const mainContainer = document.createElement("div");
    mainContainer.textContent = "test";

    load();

    mainLink.addEventListener("click", () => {
        load();
    });

    function load(){
        content.textContent = "";
        const header = document.createElement("h2");
        header.textContent="Welcome to the Krusty Krab Pizza";
        const mainImg = document.createElement("img");
        mainImg.src="https://wallpapercave.com/wp/wp4553573.jpg";
        mainImg.style.maxWidth="80%";
        mainImg.id="mainImg";
        const motto = document.createElement("h2");
        motto.textContent="It's the pizza for you and me.";
        content.appendChild(header);
        content.appendChild(mainImg);
        content.appendChild(motto);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hEZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyVEFBMlQ7O0FBRTNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqS2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCNEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFN0I7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1EQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS3FDOztBQUV0QjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkQWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZExvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2xvYWRNYWluLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkTmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE9yZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGVzdEZ1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmdTbGF0ZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMyNDJhO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2F2ZWF0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuaHRtbCB7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjNzMyNDJhO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG5hdiBiYXIgKi9cXG4jbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbn1cXG4jbWFpbkxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNsaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xpbmtzIGxpIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4jbGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwY2U7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4vKiBlbmQgb2YgbmF2IGJhciovXFxuXFxuI2FjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbkltZyB7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICNkOWMwNzc7XFxufVxcblxcbi8qIG1lbnUgICovXFxuI21lbnVJdGVtcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucmF3cGl4ZWwuY29tL2ltYWdlXzYwMC9jek5tY3kxd2NtbDJZWFJsTDNKaGQzQnBlR1ZzWDJsdFlXZGxjeTkzWldKemFYUmxYMk52Ym5SbGJuUXZiSEl2Ym5NeE16WTJNUzFwYldGblpTMXJkM1o1WkhGb1ppNXFjR2MuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbi5tZW51SXRlbTpob3ZlcixcXG4ubG9jYXRpb25DYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjkpO1xcbn1cXG4ubWVudVBpYyB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDljMDc3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMyNDJiNzU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pdGVtUHJpY2Uge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNjcmVkaXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNjcmVkaXQgYSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG4vKiBlbmQgb2YgbWVudSBzZWN0aW9uICovXFxuXFxuLyogbG9jYXRpb25zICovXFxuI2xvY2F0aW9uQ2FyZHMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NjYzNjg4OS1iYTlmZGQ2MzU4M2U/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5MTUmcT04MFxcXCIpO1xcbn1cXG4ubG9jYXRpb25DYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbmlmcmFtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbn1cXG4ubG9jYXRpb25JbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBlbmQgb2YgbG9jYXRpb25zIHNlY3Rpb24gKi9cXG5cXG4vKiBhYm91dCB1cyAqL1xcbiNhYm91dFVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy5yYXdwaXhlbC5jb20vaW1hZ2VfODAwL2NISnBkbUYwWlM5c2NpOXBiV0ZuWlhNdmQyVmljMmwwWlM4eU1ESXlMVEExTDJsek9UWTBNeTFwYldGblpTMXJkM1o1WnpGaWVDNXFjR2MuanBnXFxcIik7XFxufVxcbiNhYm91dENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jYWJvdXRDb250ZW50IGgzLFxcbiNhYm91dENvbnRlbnQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuI2Fib3V0Q29udGVudCBpbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG4vKiBlbmQgb2YgYWJvdXQgdXMgc2VjdGlvbiAqL1xcblxcbi8qIG9yZGVyIG9ubGluZSAqL1xcbiNvcmRlck9ubGluZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDg2OTU2MDctOWM3MzQzMGJhMDY1P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjI1JnE9ODBcXFwiKTtcXG59XFxuI29yZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jb3JkZXJDb250ZW50IGltZyB7XFxuICAgIG1heC13aWR0aDogNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbn1cXG4vKiBlbmQgb2Ygb3JkZXIgb25saW5lIHNlY3Rpb24gKi9cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY29hc3RhbHBoeXNpby5jYS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mb290ZXItdGV4dHVyZS1iZy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuZm9vdGVyIGEge1xcbiAgICBjb2xvcjogI2Q5YzA3NztcXG59XFxuLyogZW5kIG9mIGZvb3RlciBzZWN0aW9uICovXFxuXFxuLyogY29sb3IgcmVmZXJlbmNlICovXFxuI2NvbG9ycyB7XFxuICAgIGNvbG9yOiAjNzMyNDJhO1xcbiAgICBjb2xvcjogI2Q5YzA3NztcXG4gICAgY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5REFBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7QUFDQSxrQkFBa0I7O0FBRWxCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLFVBQVU7QUFDVjtJQUNJLHlCQUF5QjtJQUN6QixzS0FBc0s7SUFDdEssc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7O0lBRUksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBLHdCQUF3Qjs7QUFFeEIsY0FBYztBQUNkO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9MQUFvTDtBQUN4TDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSw2QkFBNkI7O0FBRTdCLGFBQWE7QUFDYjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0pBQWtKO0FBQ3RKO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBLDRCQUE0Qjs7QUFFNUIsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0xBQW9MO0FBQ3hMO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQSxnQ0FBZ0M7O0FBRWhDLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtHQUFrRztJQUNsRyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQSwwQkFBMEI7O0FBRTFCLG9CQUFvQjtBQUNwQjtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzI0MmE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiLCBjdXJzaXZlO1xcbn1cXG5odG1sIHtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkICM3MzI0MmE7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbmF2IGJhciAqL1xcbiNuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnU2xhdGUuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxufVxcbiNtYWluTG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2xpbmtzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbGlua3MgbGkge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbiNsaW5rcyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi8qIGVuZCBvZiBuYXYgYmFyKi9cXG5cXG4jYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluSW1nIHtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgI2Q5YzA3NztcXG59XFxuXFxuLyogbWVudSAgKi9cXG4jbWVudUl0ZW1zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy5yYXdwaXhlbC5jb20vaW1hZ2VfNjAwL2N6Tm1jeTF3Y21sMllYUmxMM0poZDNCcGVHVnNYMmx0WVdkbGN5OTNaV0p6YVhSbFgyTnZiblJsYm5RdmJISXZibk14TXpZMk1TMXBiV0ZuWlMxcmQzWjVaSEZvWmk1cWNHYy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuLm1lbnVJdGVtOmhvdmVyLFxcbi5sb2NhdGlvbkNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuOSk7XFxufVxcbi5tZW51UGljIHtcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzI0MmI3NTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLml0ZW1QcmljZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2NyZWRpdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI2NyZWRpdCBhIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcbi8qIGVuZCBvZiBtZW51IHNlY3Rpb24gKi9cXG5cXG4vKiBsb2NhdGlvbnMgKi9cXG4jbG9jYXRpb25DYXJkcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ2NjM2ODg5LWJhOWZkZDYzNTgzZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkxNSZxPTgwXFxcIik7XFxufVxcbi5sb2NhdGlvbkNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuaWZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcbi5sb2NhdGlvbkluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIGVuZCBvZiBsb2NhdGlvbnMgc2VjdGlvbiAqL1xcblxcbi8qIGFib3V0IHVzICovXFxuI2Fib3V0VXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnJhd3BpeGVsLmNvbS9pbWFnZV84MDAvY0hKcGRtRjBaUzlzY2k5cGJXRm5aWE12ZDJWaWMybDBaUzh5TURJeUxUQTFMMmx6T1RZME15MXBiV0ZuWlMxcmQzWjVaekZpZUM1cWNHYy5qcGdcXFwiKTtcXG59XFxuI2Fib3V0Q29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNhYm91dENvbnRlbnQgaDMsXFxuI2Fib3V0Q29udGVudCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4jYWJvdXRDb250ZW50IGltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcbi8qIGVuZCBvZiBhYm91dCB1cyBzZWN0aW9uICovXFxuXFxuLyogb3JkZXIgb25saW5lICovXFxuI29yZGVyT25saW5lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0ODY5NTYwNy05YzczNDMwYmEwNjU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MjUmcT04MFxcXCIpO1xcbn1cXG4jb3JkZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNvcmRlckNvbnRlbnQgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcbi8qIGVuZCBvZiBvcmRlciBvbmxpbmUgc2VjdGlvbiAqL1xcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jb2FzdGFscGh5c2lvLmNhL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExL2Zvb3Rlci10ZXh0dXJlLWJnLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbn1cXG4vKiBlbmQgb2YgZm9vdGVyIHNlY3Rpb24gKi9cXG5cXG4vKiBjb2xvciByZWZlcmVuY2UgKi9cXG4jY29sb3JzIHtcXG4gICAgY29sb3I6ICM3MzI0MmE7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbiAgICBjb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHByaW50U3R1ZmYgZnJvbSBcIi4vdGVzdEZ1bmN0aW9uXCI7XG5wcmludFN0dWZmKCk7XG5cbmltcG9ydCBsb2FkTmF2IGZyb20gXCIuL2xvYWROYXZcIjtcbmxvYWROYXYoKTtcblxuaW1wb3J0IGxvYWRNYWluIGZyb20gXCIuL2xvYWRNYWluXCI7XG5sb2FkTWFpbigpO1xuXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbG9hZE1lbnVcIjtcbmxvYWRNZW51KCk7XG5cbmltcG9ydCBsb2FkTG9jYXRpb25zIGZyb20gXCIuL2xvYWRMb2NhdGlvbnNcIjtcbmxvYWRMb2NhdGlvbnMoKTtcblxuaW1wb3J0IGxvYWRBYm91dCBmcm9tIFwiLi9sb2FkQWJvdXRcIjtcbmxvYWRBYm91dCgpO1xuXG5pbXBvcnQgbG9hZE9yZGVyIGZyb20gXCIuL2xvYWRPcmRlclwiO1xubG9hZE9yZGVyKCk7XG5cbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xvYWRGb290ZXJcIjtcbmxvYWRGb290ZXIoKTtcblxuXG5cblxuY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbi8vIG1lbnUgbW9kdWxlXG4vLyBjb25zdCBtZW51UGljcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZW51UGljXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51UGljcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBtZW51UGljdHVyZSA9IHJlcXVpcmUoYC4vaW1hZ2VzL21lbnUvbWVudSR7aX0ucG5nYCk7XG4vLyAgICAgbWVudVBpY3NbaV0uc3JjID0gbWVudVBpY3R1cmU7XG4vLyB9XG5cbi8vIGNvbnN0IG1hcFBpbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFBpbjFcIik7XG4vLyBtYXBQaW4xLnNyYyA9IG1hcDE7XG5cbi8vIG5hdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsICgnICsgbmF2QmcgKyAnKSc7XG5cbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY29uc3QgbWFpbkxvZ28gPSBuZXcgSW1hZ2UoKTtcbi8vIG1haW5Mb2dvLnNyYyA9IGxvZ287XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gYnRuLnRleHRDb250ZW50ID0gXCJDbGljayBtZVwiO1xuLy8gYnRuLm9uY2xpY2sgPSBwcmludFN0dWZmO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChidG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rM1wiKTtcblxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwidGVzdCBhYm91dCB1c1wiO1xuXG4gICAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBhYm91dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLmlkID0gXCJhYm91dFVzXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWJvdXRDb250ZW50LmlkID0gXCJhYm91dENvbnRlbnRcIjtcbiAgICAgICAgY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBhYm91dEhlYWQudGV4dENvbnRlbnQgPSBcIkEgdHJhZGl0aW9uIG9mIEV4Y2VsbGVuY2VcIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhYm91dEltYWdlMS5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy84LzhkL1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMjYuSlBHL1wiO1xuICAgICAgICBjb25zdCBhYm91dFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFib3V0UDEudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdm9sdXRwYXQsIHZlbGl0IHNlZCBhdWN0b3IgbWFsZXN1YWRhLCBpcHN1bSBtaSBldWlzbW9kIG1hZ25hLCBhdCBibGFuZGl0IGR1aSBsaWJlcm8gYXQgbWFnbmEuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUXVpc3F1ZSBpbiBlc3QgaW4gbWF1cmlzIG1vbGxpcyB2YXJpdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVsbGEgdWxsYW1jb3JwZXIgbGVvIGFjIG1hdXJpcyBzYWdpdHRpcyBncmF2aWRhLiBQcmFlc2VudCByaG9uY3VzIGZhdWNpYnVzIGZlbGlzIG5vbiB1bHRyaWNpZXMuIFByb2luIG5lcXVlIGlwc3VtLCBtYXR0aXMgc2VkIGV4IHZpdGFlLCBzYWdpdHRpcyBhdWN0b3IgcHVydXMuIEN1cmFiaXR1ciBub24gb2RpbyBhdWd1ZS4gTWF1cmlzIG9kaW8gbGVjdHVzLCB0ZW1wdXMgZGljdHVtIGxlbyBldSwgZmVybWVudHVtIG1hbGVzdWFkYSBhcmN1LlwiO1xuICAgICAgICBjb25zdCBhYm91dEltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFib3V0SW1hZ2UyLnNyYyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzcvNzMvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0yOC5KUEcvXCI7XG4gICAgICAgIGNvbnN0IGFib3V0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYWJvdXRQMi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIk5hbSBhIHBlbGxlbnRlc3F1ZSBtYWduYSwgc2l0IGFtZXQgdGVtcHVzIG9yY2kuIEZ1c2NlIHRpbmNpZHVudCBhbnRlIGFjIGF1Z3VlIHZlc3RpYnVsdW0gbW9sZXN0aWUuIFByYWVzZW50IGFjIG5pc2kgbmVjIHRlbGx1cyB1bHRyaWNlcyBlbGVtZW50dW0uIFNlZCB0ZW1wb3IgdWx0cmljaWVzIHRyaXN0aXF1ZS4gU2VkIGlhY3VsaXMsIGxpZ3VsYSB2aXRhZSBwZWxsZW50ZXNxdWUgc2FnaXR0aXMsIG1ldHVzIG5pc2kgZGljdHVtIGxhY3VzLCBuZWMgdm9sdXRwYXQgaXBzdW0gdmVsaXQgdmVsIGxlY3R1cy4gU2VkIHF1aXMgZmVsaXMgZmluaWJ1cywgZGljdHVtIGF1Z3VlIGEsIHBvcnR0aXRvciBuaXNsLiBNYXVyaXMgaWQgY29uZ3VlIHR1cnBpcy5cIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhYm91dEltYWdlMy5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy80LzQ5L1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMTUuSlBHL1wiO1xuICAgICAgICBjb25zdCBhYm91dFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFib3V0UDMudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJEb25lYyB1dCBzZW0gYSBudW5jIHVsdHJpY2VzIHRlbXB1cyBzZWQgYWMgZGlhbS4gTnVsbGEgbm9uIG9yY2kgbm9uIG1pIHRpbmNpZHVudCBzdXNjaXBpdC4gUXVpc3F1ZSBkYXBpYnVzIGFudGUgc2FwaWVuLCBpbnRlcmR1bSBwaGFyZXRyYSBtYXVyaXMgZWxlbWVudHVtIGVnZXQuIE1hZWNlbmFzIHZ1bHB1dGF0ZSB2ZWhpY3VsYSBwdXJ1cyBlZ2V0IHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gTWFlY2VuYXMgZXQgZXN0IG5vbiB0b3J0b3IgZGFwaWJ1cyBibGFuZGl0LiBTdXNwZW5kaXNzZSBsdWN0dXMgdmVsaXQgZXgsIHF1aXMgY29uZGltZW50dW0gbGlndWxhIGNvbmd1ZSB2aXRhZS4gRnVzY2UgZXggb3JjaSwgY29uZ3VlIGlkIGZldWdpYXQgZGlnbmlzc2ltLCBlbGVtZW50dW0gYXQgdHVycGlzLiBWZXN0aWJ1bHVtIGZhdWNpYnVzIHNvbGxpY2l0dWRpbiBwb3J0dGl0b3IuIE51bGxhbSBjb25zZWN0ZXR1ciwgbmlzaSBuZWMgaW50ZXJkdW0gc2NlbGVyaXNxdWUsIGVyYXQgZXJhdCBpYWN1bGlzIG5pc2wsIG5lYyB0aW5jaWR1bnQgbmliaCB0b3J0b3IgdXQgcmlzdXMuIER1aXMgZmFjaWxpc2lzIG1hbGVzdWFkYSB0b3J0b3IgdmVsIHBvcnR0aXRvci5cIjtcblxuICAgICAgICBhYm91dENvbnRlbnQuYXBwZW5kKFxuICAgICAgICAgICAgYWJvdXRIZWFkLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTEsXG4gICAgICAgICAgICBhYm91dFAxLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTIsXG4gICAgICAgICAgICBhYm91dFAyLFxuICAgICAgICAgICAgYWJvdXRJbWFnZTMsXG4gICAgICAgICAgICBhYm91dFAzXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEhlYWQpO1xuICAgICAgICAvLyBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZTEpO1xuICAgICAgICAvLyBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRQMSk7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEltYWdlMik7XG4gICAgICAgIC8vIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFAyKTtcbiAgICAgICAgLy8gYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0SW1hZ2UzKTtcbiAgICAgICAgLy8gYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0UDMpO1xuXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgfSk7XG59XG5cbi8qIDxoMj5BYm91dCBVczwvaDI+XG48ZGl2IGlkPVwiYWJvdXRVc1wiPlxuICAgIDxkaXYgaWQ9XCJhYm91dENvbnRlbnRcIj5cbiAgICAgICAgPGgzPkEgdHJhZGl0aW9uIG9mIGV4Y2VsbGVuY2U8L2gzPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy84LzhkL1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMjYuSlBHL1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgIGVsaXQuIE51bGxhbSB2b2x1dHBhdCwgdmVsaXQgc2VkIGF1Y3RvciBtYWxlc3VhZGEsXG4gICAgICAgICAgICBpcHN1bSBtaSBldWlzbW9kIG1hZ25hLCBhdCBibGFuZGl0IGR1aSBsaWJlcm8gYXRcbiAgICAgICAgICAgIG1hZ25hLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bVxuICAgICAgICAgICAgcHJpbWlzIGluIGZhdWNpYnVzLiBRdWlzcXVlIGluIGVzdCBpbiBtYXVyaXMgbW9sbGlzXG4gICAgICAgICAgICB2YXJpdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtXG4gICAgICAgICAgICBwcmltaXMgaW4gZmF1Y2lidXMuIE51bGxhIHVsbGFtY29ycGVyIGxlbyBhYyBtYXVyaXNcbiAgICAgICAgICAgIHNhZ2l0dGlzIGdyYXZpZGEuIFByYWVzZW50IHJob25jdXMgZmF1Y2lidXMgZmVsaXNcbiAgICAgICAgICAgIG5vbiB1bHRyaWNpZXMuIFByb2luIG5lcXVlIGlwc3VtLCBtYXR0aXMgc2VkIGV4XG4gICAgICAgICAgICB2aXRhZSwgc2FnaXR0aXMgYXVjdG9yIHB1cnVzLiBDdXJhYml0dXIgbm9uIG9kaW9cbiAgICAgICAgICAgIGF1Z3VlLiBNYXVyaXMgb2RpbyBsZWN0dXMsIHRlbXB1cyBkaWN0dW0gbGVvIGV1LFxuICAgICAgICAgICAgZmVybWVudHVtIG1hbGVzdWFkYSBhcmN1LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzcvNzMvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0yOC5KUEcvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBOYW0gYSBwZWxsZW50ZXNxdWUgbWFnbmEsIHNpdCBhbWV0IHRlbXB1cyBvcmNpLlxuICAgICAgICAgICAgRnVzY2UgdGluY2lkdW50IGFudGUgYWMgYXVndWUgdmVzdGlidWx1bSBtb2xlc3RpZS5cbiAgICAgICAgICAgIFByYWVzZW50IGFjIG5pc2kgbmVjIHRlbGx1cyB1bHRyaWNlcyBlbGVtZW50dW0uIFNlZFxuICAgICAgICAgICAgdGVtcG9yIHVsdHJpY2llcyB0cmlzdGlxdWUuIFNlZCBpYWN1bGlzLCBsaWd1bGFcbiAgICAgICAgICAgIHZpdGFlIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcywgbWV0dXMgbmlzaSBkaWN0dW1cbiAgICAgICAgICAgIGxhY3VzLCBuZWMgdm9sdXRwYXQgaXBzdW0gdmVsaXQgdmVsIGxlY3R1cy4gU2VkIHF1aXNcbiAgICAgICAgICAgIGZlbGlzIGZpbmlidXMsIGRpY3R1bSBhdWd1ZSBhLCBwb3J0dGl0b3IgbmlzbC5cbiAgICAgICAgICAgIE1hdXJpcyBpZCBjb25ndWUgdHVycGlzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzQvNDkvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0xNS5KUEcvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBEb25lYyB1dCBzZW0gYSBudW5jIHVsdHJpY2VzIHRlbXB1cyBzZWQgYWMgZGlhbS5cbiAgICAgICAgICAgIE51bGxhIG5vbiBvcmNpIG5vbiBtaSB0aW5jaWR1bnQgc3VzY2lwaXQuIFF1aXNxdWVcbiAgICAgICAgICAgIGRhcGlidXMgYW50ZSBzYXBpZW4sIGludGVyZHVtIHBoYXJldHJhIG1hdXJpc1xuICAgICAgICAgICAgZWxlbWVudHVtIGVnZXQuIE1hZWNlbmFzIHZ1bHB1dGF0ZSB2ZWhpY3VsYSBwdXJ1c1xuICAgICAgICAgICAgZWdldCBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW5cbiAgICAgICAgICAgIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYVxuICAgICAgICAgICAgY3VyYWU7IEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gTWFlY2VuYXMgZXQgZXN0IG5vblxuICAgICAgICAgICAgdG9ydG9yIGRhcGlidXMgYmxhbmRpdC4gU3VzcGVuZGlzc2UgbHVjdHVzIHZlbGl0IGV4LFxuICAgICAgICAgICAgcXVpcyBjb25kaW1lbnR1bSBsaWd1bGEgY29uZ3VlIHZpdGFlLiBGdXNjZSBleCBvcmNpLFxuICAgICAgICAgICAgY29uZ3VlIGlkIGZldWdpYXQgZGlnbmlzc2ltLCBlbGVtZW50dW0gYXQgdHVycGlzLlxuICAgICAgICAgICAgVmVzdGlidWx1bSBmYXVjaWJ1cyBzb2xsaWNpdHVkaW4gcG9ydHRpdG9yLiBOdWxsYW1cbiAgICAgICAgICAgIGNvbnNlY3RldHVyLCBuaXNpIG5lYyBpbnRlcmR1bSBzY2VsZXJpc3F1ZSwgZXJhdFxuICAgICAgICAgICAgZXJhdCBpYWN1bGlzIG5pc2wsIG5lYyB0aW5jaWR1bnQgbmliaCB0b3J0b3IgdXRcbiAgICAgICAgICAgIHJpc3VzLiBEdWlzIGZhY2lsaXNpcyBtYWxlc3VhZGEgdG9ydG9yIHZlbFxuICAgICAgICAgICAgcG9ydHRpdG9yLlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L2Rpdj4gKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwiZm9vdGVyXCIpXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gYE1hZGUgYnlcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tlbmtuZWVsZWVcIj5LZW5ueSBMZWU8L2E+XG4gICAgZm9yXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIlxuICAgICAgICA+VGhlIE9kaW4gUHJvamVjdC48L2FcbiAgICA+YFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRMb2NhdGlvbnMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbnNMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rMlwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJ0ZXN0IGxvY2F0aW9uc1wiO1xuXG4gICAgbG9jYXRpb25zTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmlkID0gXCJsb2NhdGlvbkNhcmRzXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbnNcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDFcbiAgICAgICAgY29uc3QgbG9jYXRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24xLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTEuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTEuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaWZyYW1lMSk7XG5cbiAgICAgICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMWhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8xaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgSGVhZHF1YXJ0ZXJzXCI7XG4gICAgICAgIGNvbnN0IGluZm8xYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNTgwMTUzIEtlbHAgU3RyZWV0XCI7XG4gICAgICAgIGNvbnN0IGluZm8xY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY2l0eS50ZXh0Q29udGVudCA9IFwiQmlraW5pIEJvdHRvbSwgQmlraW5pIEF0b2xsXCI7XG4gICAgICAgIGNvbnN0IGluZm8xY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWFyc2hhbGwgSXNsYW5kc1wiO1xuICAgICAgICBpbmZvMS5hcHBlbmRDaGlsZChpbmZvMWhlYWQpO1xuICAgICAgICBpbmZvMS5hcHBlbmQoaW5mbzFhZGRyZXNzKTtcbiAgICAgICAgaW5mbzEuYXBwZW5kKGluZm8xY2l0eSk7XG4gICAgICAgIGluZm8xLmFwcGVuZChpbmZvMWNvdW50cnkpO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuXG4gICAgICAgIGxvY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbjEpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDJcbiAgICAgICAgY29uc3QgbG9jYXRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24yLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTIuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTIuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjIuYXBwZW5kQ2hpbGQoaWZyYW1lMik7XG5cbiAgICAgICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMmhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8yaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgTWV4aWNvXCI7XG4gICAgICAgIGNvbnN0IGluZm8yYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiODA4IFNwb25nZSBTdHJlZXRcIjtcbiAgICAgICAgY29uc3QgaW5mbzJjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzJjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8yY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8yLmFwcGVuZENoaWxkKGluZm8yaGVhZCk7XG4gICAgICAgIGluZm8yLmFwcGVuZChpbmZvMmFkZHJlc3MpO1xuICAgICAgICBpbmZvMi5hcHBlbmQoaW5mbzJjaXR5KTtcbiAgICAgICAgaW5mbzIuYXBwZW5kKGluZm8yY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMi5hcHBlbmRDaGlsZChpbmZvMik7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMik7XG5cbiAgICAgICAgLy8gTG9jYXRpb24gM1xuICAgICAgICBjb25zdCBsb2NhdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvbjMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uQ2FyZFwiKTtcblxuICAgICAgICBjb25zdCBpZnJhbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lMy5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ2OTY3MDQuMDkwNDYwMTcxOCEyZC0xMjMuNDEyODQyNjc1NDUyNTUhM2Q0Ni45OTExNDc2MzkwODMzMTYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDU0OTE3M2Y1ZmJiNmYwNTElM0EweDgzNGJmNTczMzY4ODM2NjIhMnNCaWtpbmklMjBCb3R0b20lMjBUYW5uaW5nJTIwU2Fsb24hNWUwITNtMiExc2VuITJzY2EhNHYxNjU4MzcwNDM0MjY4ITVtMiExc2VuITJzY2FcIjtcblxuICAgICAgICBpZnJhbWUzLnN0eWxlID0gXCJib3JkZXI6IDBcIjtcbiAgICAgICAgbG9jYXRpb24zLmFwcGVuZENoaWxkKGlmcmFtZTMpO1xuXG4gICAgICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSW5mb1wiKTtcbiAgICAgICAgY29uc3QgaW5mbzNoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBpbmZvM2hlYWQudGV4dENvbnRlbnQgPSBcIkJpa2luaSBCb3R0b20gVGFubmluZyBTYWxvbiAmIFBpenphXCI7XG4gICAgICAgIGNvbnN0IGluZm8zYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNjk0MjAgQ2FwaXRvbCBCb3VsZXZhcmQgU0VcIjtcbiAgICAgICAgY29uc3QgaW5mbzNjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzNjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8zY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8zLmFwcGVuZENoaWxkKGluZm8zaGVhZCk7XG4gICAgICAgIGluZm8zLmFwcGVuZChpbmZvM2FkZHJlc3MpO1xuICAgICAgICBpbmZvMy5hcHBlbmQoaW5mbzNjaXR5KTtcbiAgICAgICAgaW5mbzMuYXBwZW5kKGluZm8zY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMy5hcHBlbmRDaGlsZChpbmZvMyk7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMyk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbnNDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG57XG4gICAgLyogPGgyPkxvY2F0aW9uczwvaDI+XG48ZGl2IGlkPVwibG9jYXRpb25DYXJkc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIEhlYWRxdWFydGVyczwvaDM+XG4gICAgICAgICAgICA8ZGl2PjU4MDE1MyBLZWxwIFN0cmVldDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5CaWtpbmkgQm90dG9tLCBCaWtpbmkgQXRvbGw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TWFyc2hhbGwgSXNsYW5kczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIE1leGljbzwvaDM+XG4gICAgICAgICAgICA8ZGl2PjgwOCBTcG9uZ2UgQXZlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxhIFBheixDYWJvIFNhbiBMdWNhczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5NZXhpY288L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb25DYXJkXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY5NjcwNC4wOTA0NjAxNzE4ITJkLTEyMy40MTI4NDI2NzU0NTI1NSEzZDQ2Ljk5MTE0NzYzOTA4MzMxNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NTQ5MTczZjVmYmI2ZjA1MSUzQTB4ODM0YmY1NzMzNjg4MzY2MiEyc0Jpa2luaSUyMEJvdHRvbSUyMFRhbm5pbmclMjBTYWxvbiE1ZTAhM20yITFzZW4hMnNjYSE0djE2NTgzNzA0MzQyNjghNW0yITFzZW4hMnNjYVwiXG4gICAgICAgICAgICBtYXgtd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDBcIlxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkluZm9cIj5cbiAgICAgICAgICAgIDxoMz5CaWtpbmkgQm90dG9tIFRhbm5pbmcgU2Fsb24gJiBQaXp6YTwvaDM+XG4gICAgICAgICAgICA8ZGl2PjY5NDIwIENhcGl0b2wgQmx2ZCBTRTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5TZWF0dGxlLCBXQTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Vbml0ZWQgU3RhdGVzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICovXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluTG9nb1wiKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSBcInRlc3RcIjtcblxuICAgIGxvYWQoKTtcblxuICAgIG1haW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvYWQoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxvYWQoKXtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PVwiV2VsY29tZSB0byB0aGUgS3J1c3R5IEtyYWIgUGl6emFcIjtcbiAgICAgICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1haW5JbWcuc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDQ1NTM1NzMuanBnXCI7XG4gICAgICAgIG1haW5JbWcuc3R5bGUubWF4V2lkdGg9XCI4MCVcIjtcbiAgICAgICAgbWFpbkltZy5pZD1cIm1haW5JbWdcIjtcbiAgICAgICAgY29uc3QgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG1vdHRvLnRleHRDb250ZW50PVwiSXQncyB0aGUgcGl6emEgZm9yIHlvdSBhbmQgbWUuXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluSW1nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtb3R0byk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG1lbnUxIGZyb20gXCIuL2ltYWdlcy9tZW51L21lbnUxLnBuZ1wiO1xuaW1wb3J0IG1lbnUyIGZyb20gXCIuL2ltYWdlcy9tZW51L21lbnUyLnBuZ1wiO1xuaW1wb3J0IG1lbnUzIGZyb20gXCIuL2ltYWdlcy9tZW51L21lbnUzLnBuZ1wiO1xuaW1wb3J0IG1lbnU0IGZyb20gXCIuL2ltYWdlcy9tZW51L21lbnU0LnBuZ1wiO1xuaW1wb3J0IG1lbnU1IGZyb20gXCIuL2ltYWdlcy9tZW51L21lbnU1LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rMVwiKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIudGV4dENvbnRlbnQgPSBcInRlc3RcIjtcblxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBtZW51Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbWVudUNvbnRhaW5lci5pZCA9IFwibWVudUl0ZW1zXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBuZXdJdGVtKFxuICAgICAgICAgICAgbWVudTEsXG4gICAgICAgICAgICBcIktydXN0eSBLcmFiIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIxOVwiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51MixcbiAgICAgICAgICAgIFwiUGlvbmVlciBQaXp6YVwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLiBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcywgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cIixcbiAgICAgICAgICAgIFwiMjNcIlxuICAgICAgICApO1xuICAgICAgICBuZXdJdGVtKFxuICAgICAgICAgICAgbWVudTMsXG4gICAgICAgICAgICBcIkJpa2luaSBBdG9sbCBQaXp6YVwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLiBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcywgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cIixcbiAgICAgICAgICAgIFwiMTdcIlxuICAgICAgICApO1xuICAgICAgICBuZXdJdGVtKFxuICAgICAgICAgICAgbWVudTQsXG4gICAgICAgICAgICBcIlNhbmR5IENoZWVrcyBQaXp6YVwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLiBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcywgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cIixcbiAgICAgICAgICAgIFwiMjdcIlxuICAgICAgICApO1xuICAgICAgICBuZXdJdGVtKFxuICAgICAgICAgICAgbWVudTUsXG4gICAgICAgICAgICBcIlN3ZWV0IFZpY3RvcnkgUGl6emFcIixcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbSB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi4gUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXCIsXG4gICAgICAgICAgICBcIjI5XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG5ld0l0ZW0oaW1nSWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgICAgICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51UGljXCIpO1xuICAgICAgICBpdGVtSW1hZ2UuaWQgPSBTdHJpbmcoaW1nSWQpO1xuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaW1nSWQ7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJpdGVtRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGluZm9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBpbmZvTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGNvbnN0IGluZm9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGluZm9EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGluZm9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmQoaW5mb05hbWUsIGluZm9EZXNjKTtcblxuICAgICAgICBpdGVtLmFwcGVuZChpdGVtSW1hZ2UsIGl0ZW1EZXNjcmlwdGlvbiwgaW5mb1ByaWNlKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG59XG5cbi8qIDxoMj5NZW51PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudUl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm1lbnUxXCIgY2xhc3M9XCJtZW51UGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+S3J1c3R5IEtyYWIgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4xOTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTJcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QaW9uZWVyIFBpenphPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByaWNlXCI+MjM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm1lbnUzXCIgY2xhc3M9XCJtZW51UGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmlraW5pIEF0b2xsIFBpenphPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByaWNlXCI+MTc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm1lbnU0XCIgY2xhc3M9XCJtZW51UGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2FuZHkgQ2hlZWtzIFBpenphPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByaWNlXCI+Mjc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm1lbnU1XCIgY2xhc3M9XCJtZW51UGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3dlZXQgVmljdG9yeSBQaXp6YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1QcmljZVwiPjI5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY3JlZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS92ZWN0b3JzL3BpenphLXRvcHBpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaXp6YSB0b3BwaW5ncyB2ZWN0b3IgY3JlYXRlZCBieSBwY2gudmVjdG9yIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3d3cuZnJlZXBpay5jb208L2FcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovXG4iLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5hdigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuaWQ9XCJuYXZcIjtcbiAgICBjb25zdCBtYWluTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFpbkxvZ28uaWQ9XCJtYWluTG9nb1wiO1xuICAgIG1haW5Mb2dvLnNyYyA9IGxvZ287XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlua3MuaWQ9XCJsaW5rc1wiO1xuICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpbmsxLmlkPVwibGluazFcIjtcbiAgICBjb25zdCBsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaW5rMi5pZD1cImxpbmsyXCI7XG4gICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazMuaWQ9XCJsaW5rM1wiO1xuICAgIGNvbnN0IGxpbms0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpbms0LmlkPVwibGluazRcIjtcblxuICAgIGxpbmsxLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbGluazIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uc1wiO1xuICAgIGxpbmszLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICAgIGxpbms0LnRleHRDb250ZW50ID0gXCJPcmRlciBPbmxpbmVcIjtcblxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmsxKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rMik7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazMpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbms0KTtcblxuXG4gICAgbmF2LmFwcGVuZENoaWxkIChtYWluTG9nbyk7XG4gICAgbmF2LmFwcGVuZENoaWxkIChsaW5rcyk7XG5cbiAgICBib2R5LnByZXBlbmQobmF2KTtcbiAgICAvLyByZXR1cm4gZWxlbWVudFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRPcmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluazRcIik7XG5cbiAgICBjb25zdCBvcmRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBvcmRlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIG9yZGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgb3JkZXJDb250YWluZXIuaWQgPSBcIm9yZGVyT25saW5lXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJPcmRlciBPbmxpbmVcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9yZGVyQ29udGVudC5pZCA9IFwib3JkZXJDb250ZW50XCI7XG4gICAgICAgIGNvbnN0IHN1YkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHN1YkhlYWQudGV4dENvbnRlbnQgPSBcIk9yZGVyIG5vdyB0aHJvdWdoIG9uZSBvZiBvdXIgcGFydG5lcnM6XCI7XG4gICAgICAgIGNvbnN0IHViZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB1YmVyLnNyYyA9XG4gICAgICAgICAgICBcImh0dHA6Ly95ZW9sZGVvcmNoYXJkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC81MzEwMzY2LXViZXItZWF0cy1sb2dvLXBuZy1hbmQtdmVjdG9yLWxvZ28tZG93bmxvYWQtdWJlci1lYXRzLXBuZy0zNTAwXzM1MDBfcHJldmlldy5wbmdcIjtcbiAgICAgICAgY29uc3QgZG9vcmRhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBkb29yZGFzaC5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3RvcHBuZy5jb20vdXBsb2Fkcy9wcmV2aWV3L2Rvb3JkYXNoLWxvZ28tMTE2MDkzNTk1NDJuZDFnNjYweTV0LnBuZ1wiO1xuICAgICAgICBjb25zdCBza2lwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgc2tpcC5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTQ1MTU5MjIwNzI5NTc4NzAxNC9IRzg3SVJEQV80MDB4NDAwLmpwZ1wiO1xuICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3ViSGVhZCk7XG4gICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZCh1YmVyKTtcbiAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKGRvb3JkYXNoKTtcbiAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKHNraXApO1xuXG4gICAgICAgIG9yZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG9yZGVyQ29udGVudCk7XG4gICAgICAgIC8vIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChzdWJIZWFkKTtcbiAgICAgICAgLy8gb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWQpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJDb250YWluZXIpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRTdHVmZigpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBmcm9tIHRlc3RGdW5jdGlvbi5qcycpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==