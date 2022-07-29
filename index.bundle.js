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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n    cursor: pointer;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#mainImg {\n    border: 6px solid #d9c077;\n    max-width:10vw;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,YAAY;AACZ;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,yDAA8C;IAC9C,4BAA4B;IAC5B,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,qBAAqB;IACrB,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,cAAc;AAClB;AACA,kBAAkB;;AAElB;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA,UAAU;AACV;IACI,yBAAyB;IACzB,sKAAsK;IACtK,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,cAAc;IACd,aAAa;IACb,wCAAwC;AAC5C;AACA;;IAEI,uCAAuC;AAC3C;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,wCAAwC;AAC5C;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;AACrB;AACA,wBAAwB;;AAExB,cAAc;AACd;IACI,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,wCAAwC;AAC5C;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA,6BAA6B;;AAE7B,aAAa;AACb;IACI,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,kJAAkJ;AACtJ;AACA;IACI,wCAAwC;AAC5C;AACA;;IAEI,SAAS;IACT,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,UAAU;AACd;AACA,4BAA4B;;AAE5B,iBAAiB;AACjB;IACI,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,oLAAoL;AACxL;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,wCAAwC;AAC5C;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;AAChB;AACA,gCAAgC;;AAEhC,WAAW;AACX;IACI,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;IACxC,kGAAkG;IAClG,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA,0BAA0B;;AAE1B,oBAAoB;AACpB;IACI,cAAc;IACd,cAAc;IACd,6BAA6B;AACjC","sourcesContent":["body,\nhtml {\n    background-color: #73242a;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: \"Caveat\", cursive;\n}\nhtml {\n    border: 1rem solid #73242a;\n    font-size: 18px;\n    color: #d9c077;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* nav bar */\n#nav {\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(\"../images/bgSlate.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 2px solid #d9c077;\n}\n#mainLogo {\n    max-height: 100%;\n    min-height: 15vh;\n    cursor: pointer;\n}\n#links {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    list-style-type: none;\n    background-color: #000000a2;\n    box-sizing: border-box;\n    margin-top: 0;\n    padding: 0;\n    text-align: center;\n}\n#links li {\n    width: 25%;\n    padding: 1rem 0;\n}\n#links li:hover {\n    background-color: #000000ce;\n    cursor:pointer;\n}\n/* end of nav bar*/\n\n#active {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#mainImg {\n    border: 6px solid #d9c077;\n    max-width:10vw;\n}\n\n/* menu  */\n#menuItems {\n    border: 2px solid #d9c077;\n    background-image: url(\"https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxMzY2MS1pbWFnZS1rd3Z5ZHFoZi5qcGc.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menuItem {\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    align-items: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    padding: 1rem;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n.menuItem:hover,\n.locationCard:hover {\n    background-color: rgba(37, 37, 37, 0.9);\n}\n.menuPic {\n    max-width: 30%;\n    border: 1px solid #d9c077;\n    border-radius: 20px;\n    background-color: #73242b75;\n    padding: 1rem;\n}\n.itemDescription {\n    text-align: center;\n}\n.itemPrice {\n    justify-self: center;\n    text-decoration: underline;\n}\n#credit {\n    text-align: center;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#credit a {\n    color: grey;\n    text-decoration: none;\n    font-size: 0.5rem;\n}\n/* end of menu section */\n\n/* locations */\n#locationCards {\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80\");\n}\n.locationCard {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(37, 37, 37, 0.75);\n}\niframe {\n    border-radius: 20px;\n    max-width: 100%;\n    margin: 2rem;\n}\n.locationInfo {\n    text-align: center;\n}\n/* end of locations section */\n\n/* about us */\n#aboutUs {\n    text-align: center;\n    border: 2px solid #d9c077;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzOTY0My1pbWFnZS1rd3Z5ZzFieC5qcGc.jpg\");\n}\n#aboutContent {\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#aboutContent h3,\n#aboutContent p {\n    margin: 0;\n    padding: 1rem;\n}\n#aboutContent img {\n    border: 2px solid #d9c077;\n    width: 30%;\n}\n/* end of about us section */\n\n/* order online */\n#orderOnline {\n    text-align: center;\n    border: 2px solid #d9c077;\n    /* border-radius: 20px; */\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80\");\n}\n#orderContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(37, 37, 37, 0.75);\n}\n#orderContent img {\n    max-width: 5rem;\n    border-radius: 1rem;\n    margin: 2rem;\n}\n/* end of order online section */\n\n/* footer */\nfooter {\n    text-align: center;\n    border: 2px solid #d9c077;\n    border-bottom: 0;\n    margin-top: 2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(37, 37, 37, 0.75);\n    background-image: url(\"https://coastalphysio.ca/wp-content/uploads/2016/11/footer-texture-bg.jpg\");\n    background-size: cover;\n}\nfooter a {\n    color: #d9c077;\n}\n/* end of footer section */\n\n/* color reference */\n#colors {\n    color: #73242a;\n    color: #d9c077;\n    color: rgba(37, 37, 37, 0.75);\n}\n"],"sourceRoot":""}]);
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
        mainImg.style.maxWidth="60%";
        mainImg.id="mainImg";

        const motto = document.createElement("h2");
        motto.textContent="It's the pizza for you and me.";
        
        content.append(header,mainImg, motto);
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
        itemDescription.append(infoName, infoDesc);

        const itemPrice = document.createElement("div");
        itemPrice.textContent = price;

        item.append(itemImage, itemDescription, itemPrice);
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
    nav.id = "nav";
    const mainLogo = document.createElement("img");
    mainLogo.id = "mainLogo";
    mainLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    const links = document.createElement("ul");
    links.id = "links";
    const link1 = document.createElement("li");
    link1.id = "link1";
    const link2 = document.createElement("li");
    link2.id = "link2";
    const link3 = document.createElement("li");
    link3.id = "link3";
    const link4 = document.createElement("li");
    link4.id = "link4";

    link1.textContent = "Menu";
    link2.textContent = "Locations";
    link3.textContent = "About Us";
    link4.textContent = "Order Online";

    links.append(link1, link2, link3, link4);

    nav.append(mainLogo, links);

    body.prepend(nav);
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
        orderContent.appendChild(subHead, uber, doordash, skip);

        orderContainer.appendChild(orderContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaktlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU3QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLcUM7O0FBRXRCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ2U7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkQWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZExvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2xvYWRNYWluLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkTmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE9yZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGVzdEZ1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmdTbGF0ZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMyNDJhO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2F2ZWF0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuaHRtbCB7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjNzMyNDJhO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZDljMDc3O1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG5hdiBiYXIgKi9cXG4jbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbn1cXG4jbWFpbkxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNsaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xpbmtzIGxpIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4jbGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwY2U7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4vKiBlbmQgb2YgbmF2IGJhciovXFxuXFxuI2FjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbkltZyB7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIG1heC13aWR0aDoxMHZ3O1xcbn1cXG5cXG4vKiBtZW51ICAqL1xcbiNtZW51SXRlbXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnJhd3BpeGVsLmNvbS9pbWFnZV82MDAvY3pObWN5MXdjbWwyWVhSbEwzSmhkM0JwZUdWc1gybHRZV2RsY3k5M1pXSnphWFJsWDJOdmJuUmxiblF2YkhJdmJuTXhNelkyTVMxcGJXRm5aUzFyZDNaNVpIRm9aaTVxY0djLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMmZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4ubWVudUl0ZW06aG92ZXIsXFxuLmxvY2F0aW9uQ2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC45KTtcXG59XFxuLm1lbnVQaWMge1xcbiAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5YzA3NztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczMjQyYjc1O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaXRlbVByaWNlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jY3JlZGl0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jY3JlZGl0IGEge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLyogZW5kIG9mIG1lbnUgc2VjdGlvbiAqL1xcblxcbi8qIGxvY2F0aW9ucyAqL1xcbiNsb2NhdGlvbkNhcmRzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDY2MzY4ODktYmE5ZmRkNjM1ODNlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTE1JnE9ODBcXFwiKTtcXG59XFxuLmxvY2F0aW9uQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG5pZnJhbWUge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbTtcXG59XFxuLmxvY2F0aW9uSW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogZW5kIG9mIGxvY2F0aW9ucyBzZWN0aW9uICovXFxuXFxuLyogYWJvdXQgdXMgKi9cXG4jYWJvdXRVcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucmF3cGl4ZWwuY29tL2ltYWdlXzgwMC9jSEpwZG1GMFpTOXNjaTlwYldGblpYTXZkMlZpYzJsMFpTOHlNREl5TFRBMUwybHpPVFkwTXkxcGJXRm5aUzFyZDNaNVp6RmllQzVxY0djLmpwZ1xcXCIpO1xcbn1cXG4jYWJvdXRDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI2Fib3V0Q29udGVudCBoMyxcXG4jYWJvdXRDb250ZW50IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbiNhYm91dENvbnRlbnQgaW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuLyogZW5kIG9mIGFib3V0IHVzIHNlY3Rpb24gKi9cXG5cXG4vKiBvcmRlciBvbmxpbmUgKi9cXG4jb3JkZXJPbmxpbmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ4Njk1NjA3LTljNzM0MzBiYTA2NT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTYyNSZxPTgwXFxcIik7XFxufVxcbiNvcmRlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG59XFxuI29yZGVyQ29udGVudCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG59XFxuLyogZW5kIG9mIG9yZGVyIG9ubGluZSBzZWN0aW9uICovXFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjc1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2NvYXN0YWxwaHlzaW8uY2Evd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTEvZm9vdGVyLXRleHR1cmUtYmcuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmZvb3RlciBhIHtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxufVxcbi8qIGVuZCBvZiBmb290ZXIgc2VjdGlvbiAqL1xcblxcbi8qIGNvbG9yIHJlZmVyZW5jZSAqL1xcbiNjb2xvcnMge1xcbiAgICBjb2xvcjogIzczMjQyYTtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxuICAgIGNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseURBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCO0FBQ0Esa0JBQWtCOztBQUVsQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBLFVBQVU7QUFDVjtJQUNJLHlCQUF5QjtJQUN6QixzS0FBc0s7SUFDdEssc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7O0lBRUksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBLHdCQUF3Qjs7QUFFeEIsY0FBYztBQUNkO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9MQUFvTDtBQUN4TDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSw2QkFBNkI7O0FBRTdCLGFBQWE7QUFDYjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0pBQWtKO0FBQ3RKO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBLDRCQUE0Qjs7QUFFNUIsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0xBQW9MO0FBQ3hMO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQSxnQ0FBZ0M7O0FBRWhDLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGtHQUFrRztJQUNsRyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQSwwQkFBMEI7O0FBRTFCLG9CQUFvQjtBQUNwQjtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzI0MmE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiLCBjdXJzaXZlO1xcbn1cXG5odG1sIHtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkICM3MzI0MmE7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNkOWMwNzc7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbmF2IGJhciAqL1xcbiNuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnU2xhdGUuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxufVxcbiNtYWluTG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2xpbmtzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbGlua3MgbGkge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbiNsaW5rcyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjZTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi8qIGVuZCBvZiBuYXYgYmFyKi9cXG5cXG4jYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluSW1nIHtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgI2Q5YzA3NztcXG4gICAgbWF4LXdpZHRoOjEwdnc7XFxufVxcblxcbi8qIG1lbnUgICovXFxuI21lbnVJdGVtcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucmF3cGl4ZWwuY29tL2ltYWdlXzYwMC9jek5tY3kxd2NtbDJZWFJsTDNKaGQzQnBlR1ZzWDJsdFlXZGxjeTkzWldKemFYUmxYMk52Ym5SbGJuUXZiSEl2Ym5NeE16WTJNUzFwYldGblpTMXJkM1o1WkhGb1ppNXFjR2MuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbi5tZW51SXRlbTpob3ZlcixcXG4ubG9jYXRpb25DYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjkpO1xcbn1cXG4ubWVudVBpYyB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDljMDc3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMyNDJiNzU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pdGVtUHJpY2Uge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNjcmVkaXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbiNjcmVkaXQgYSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG4vKiBlbmQgb2YgbWVudSBzZWN0aW9uICovXFxuXFxuLyogbG9jYXRpb25zICovXFxuI2xvY2F0aW9uQ2FyZHMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NjYzNjg4OS1iYTlmZGQ2MzU4M2U/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5MTUmcT04MFxcXCIpO1xcbn1cXG4ubG9jYXRpb25DYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcbmlmcmFtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbn1cXG4ubG9jYXRpb25JbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBlbmQgb2YgbG9jYXRpb25zIHNlY3Rpb24gKi9cXG5cXG4vKiBhYm91dCB1cyAqL1xcbiNhYm91dFVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy5yYXdwaXhlbC5jb20vaW1hZ2VfODAwL2NISnBkbUYwWlM5c2NpOXBiV0ZuWlhNdmQyVmljMmwwWlM4eU1ESXlMVEExTDJsek9UWTBNeTFwYldGblpTMXJkM1o1WnpGaWVDNXFjR2MuanBnXFxcIik7XFxufVxcbiNhYm91dENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jYWJvdXRDb250ZW50IGgzLFxcbiNhYm91dENvbnRlbnQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuI2Fib3V0Q29udGVudCBpbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDljMDc3O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG4vKiBlbmQgb2YgYWJvdXQgdXMgc2VjdGlvbiAqL1xcblxcbi8qIG9yZGVyIG9ubGluZSAqL1xcbiNvcmRlck9ubGluZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q5YzA3NztcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDg2OTU2MDctOWM3MzQzMGJhMDY1P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjI1JnE9ODBcXFwiKTtcXG59XFxuI29yZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbn1cXG4jb3JkZXJDb250ZW50IGltZyB7XFxuICAgIG1heC13aWR0aDogNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbn1cXG4vKiBlbmQgb2Ygb3JkZXIgb25saW5lIHNlY3Rpb24gKi9cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkOWMwNzc7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNzUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY29hc3RhbHBoeXNpby5jYS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9mb290ZXItdGV4dHVyZS1iZy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuZm9vdGVyIGEge1xcbiAgICBjb2xvcjogI2Q5YzA3NztcXG59XFxuLyogZW5kIG9mIGZvb3RlciBzZWN0aW9uICovXFxuXFxuLyogY29sb3IgcmVmZXJlbmNlICovXFxuI2NvbG9ycyB7XFxuICAgIGNvbG9yOiAjNzMyNDJhO1xcbiAgICBjb2xvcjogI2Q5YzA3NztcXG4gICAgY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43NSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBwcmludFN0dWZmIGZyb20gXCIuL3Rlc3RGdW5jdGlvblwiO1xucHJpbnRTdHVmZigpO1xuXG5pbXBvcnQgbG9hZE5hdiBmcm9tIFwiLi9sb2FkTmF2XCI7XG5sb2FkTmF2KCk7XG5cbmltcG9ydCBsb2FkTWFpbiBmcm9tIFwiLi9sb2FkTWFpblwiO1xubG9hZE1haW4oKTtcblxuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL2xvYWRNZW51XCI7XG5sb2FkTWVudSgpO1xuXG5pbXBvcnQgbG9hZExvY2F0aW9ucyBmcm9tIFwiLi9sb2FkTG9jYXRpb25zXCI7XG5sb2FkTG9jYXRpb25zKCk7XG5cbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vbG9hZEFib3V0XCI7XG5sb2FkQWJvdXQoKTtcblxuaW1wb3J0IGxvYWRPcmRlciBmcm9tIFwiLi9sb2FkT3JkZXJcIjtcbmxvYWRPcmRlcigpO1xuXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9sb2FkRm9vdGVyXCI7XG5sb2FkRm9vdGVyKCk7XG5cblxuXG5cbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4vLyBtZW51IG1vZHVsZVxuLy8gY29uc3QgbWVudVBpY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWVudVBpY1wiKTtcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudVBpY3MubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgbWVudVBpY3R1cmUgPSByZXF1aXJlKGAuL2ltYWdlcy9tZW51L21lbnUke2l9LnBuZ2ApO1xuLy8gICAgIG1lbnVQaWNzW2ldLnNyYyA9IG1lbnVQaWN0dXJlO1xuLy8gfVxuXG4vLyBjb25zdCBtYXBQaW4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBQaW4xXCIpO1xuLy8gbWFwUGluMS5zcmMgPSBtYXAxO1xuXG4vLyBuYXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCAoJyArIG5hdkJnICsgJyknO1xuXG4vLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbi8vIGNvbnN0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XG4vLyBtYWluTG9nby5zcmMgPSBsb2dvO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG4vLyBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vIGJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgbWVcIjtcbi8vIGJ0bi5vbmNsaWNrID0gcHJpbnRTdHVmZjtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluazNcIik7XG5cbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb250YWluZXIudGV4dENvbnRlbnQgPSBcInRlc3QgYWJvdXQgdXNcIjtcblxuICAgIGFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgYWJvdXRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBhYm91dENvbnRhaW5lci5pZCA9IFwiYWJvdXRVc1wiO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFib3V0Q29udGVudC5pZCA9IFwiYWJvdXRDb250ZW50XCI7XG5cbiAgICAgICAgY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBhYm91dEhlYWQudGV4dENvbnRlbnQgPSBcIkEgdHJhZGl0aW9uIG9mIEV4Y2VsbGVuY2VcIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhYm91dEltYWdlMS5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvc3BvbmdlYm9iL2ltYWdlcy84LzhkL1BpenphX0RlbGl2ZXJ5X2JhY2tncm91bmQtMjYuSlBHL1wiO1xuICAgICAgICBjb25zdCBhYm91dFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFib3V0UDEudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdm9sdXRwYXQsIHZlbGl0IHNlZCBhdWN0b3IgbWFsZXN1YWRhLCBpcHN1bSBtaSBldWlzbW9kIG1hZ25hLCBhdCBibGFuZGl0IGR1aSBsaWJlcm8gYXQgbWFnbmEuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUXVpc3F1ZSBpbiBlc3QgaW4gbWF1cmlzIG1vbGxpcyB2YXJpdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVsbGEgdWxsYW1jb3JwZXIgbGVvIGFjIG1hdXJpcyBzYWdpdHRpcyBncmF2aWRhLiBQcmFlc2VudCByaG9uY3VzIGZhdWNpYnVzIGZlbGlzIG5vbiB1bHRyaWNpZXMuIFByb2luIG5lcXVlIGlwc3VtLCBtYXR0aXMgc2VkIGV4IHZpdGFlLCBzYWdpdHRpcyBhdWN0b3IgcHVydXMuIEN1cmFiaXR1ciBub24gb2RpbyBhdWd1ZS4gTWF1cmlzIG9kaW8gbGVjdHVzLCB0ZW1wdXMgZGljdHVtIGxlbyBldSwgZmVybWVudHVtIG1hbGVzdWFkYSBhcmN1LlwiO1xuXG4gICAgICAgIGNvbnN0IGFib3V0SW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgYWJvdXRJbWFnZTIuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3Nwb25nZWJvYi9pbWFnZXMvNy83My9QaXp6YV9EZWxpdmVyeV9iYWNrZ3JvdW5kLTI4LkpQRy9cIjtcbiAgICAgICAgY29uc3QgYWJvdXRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBhYm91dFAyLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiTmFtIGEgcGVsbGVudGVzcXVlIG1hZ25hLCBzaXQgYW1ldCB0ZW1wdXMgb3JjaS4gRnVzY2UgdGluY2lkdW50IGFudGUgYWMgYXVndWUgdmVzdGlidWx1bSBtb2xlc3RpZS4gUHJhZXNlbnQgYWMgbmlzaSBuZWMgdGVsbHVzIHVsdHJpY2VzIGVsZW1lbnR1bS4gU2VkIHRlbXBvciB1bHRyaWNpZXMgdHJpc3RpcXVlLiBTZWQgaWFjdWxpcywgbGlndWxhIHZpdGFlIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcywgbWV0dXMgbmlzaSBkaWN0dW0gbGFjdXMsIG5lYyB2b2x1dHBhdCBpcHN1bSB2ZWxpdCB2ZWwgbGVjdHVzLiBTZWQgcXVpcyBmZWxpcyBmaW5pYnVzLCBkaWN0dW0gYXVndWUgYSwgcG9ydHRpdG9yIG5pc2wuIE1hdXJpcyBpZCBjb25ndWUgdHVycGlzLlwiO1xuXG4gICAgICAgIGNvbnN0IGFib3V0SW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgYWJvdXRJbWFnZTMuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3Nwb25nZWJvYi9pbWFnZXMvNC80OS9QaXp6YV9EZWxpdmVyeV9iYWNrZ3JvdW5kLTE1LkpQRy9cIjtcbiAgICAgICAgY29uc3QgYWJvdXRQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBhYm91dFAzLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiRG9uZWMgdXQgc2VtIGEgbnVuYyB1bHRyaWNlcyB0ZW1wdXMgc2VkIGFjIGRpYW0uIE51bGxhIG5vbiBvcmNpIG5vbiBtaSB0aW5jaWR1bnQgc3VzY2lwaXQuIFF1aXNxdWUgZGFwaWJ1cyBhbnRlIHNhcGllbiwgaW50ZXJkdW0gcGhhcmV0cmEgbWF1cmlzIGVsZW1lbnR1bSBlZ2V0LiBNYWVjZW5hcyB2dWxwdXRhdGUgdmVoaWN1bGEgcHVydXMgZWdldCBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIE1hZWNlbmFzIGV0IGVzdCBub24gdG9ydG9yIGRhcGlidXMgYmxhbmRpdC4gU3VzcGVuZGlzc2UgbHVjdHVzIHZlbGl0IGV4LCBxdWlzIGNvbmRpbWVudHVtIGxpZ3VsYSBjb25ndWUgdml0YWUuIEZ1c2NlIGV4IG9yY2ksIGNvbmd1ZSBpZCBmZXVnaWF0IGRpZ25pc3NpbSwgZWxlbWVudHVtIGF0IHR1cnBpcy4gVmVzdGlidWx1bSBmYXVjaWJ1cyBzb2xsaWNpdHVkaW4gcG9ydHRpdG9yLiBOdWxsYW0gY29uc2VjdGV0dXIsIG5pc2kgbmVjIGludGVyZHVtIHNjZWxlcmlzcXVlLCBlcmF0IGVyYXQgaWFjdWxpcyBuaXNsLCBuZWMgdGluY2lkdW50IG5pYmggdG9ydG9yIHV0IHJpc3VzLiBEdWlzIGZhY2lsaXNpcyBtYWxlc3VhZGEgdG9ydG9yIHZlbCBwb3J0dGl0b3IuXCI7XG5cbiAgICAgICAgYWJvdXRDb250ZW50LmFwcGVuZChcbiAgICAgICAgICAgIGFib3V0SGVhZCxcbiAgICAgICAgICAgIGFib3V0SW1hZ2UxLFxuICAgICAgICAgICAgYWJvdXRQMSxcbiAgICAgICAgICAgIGFib3V0SW1hZ2UyLFxuICAgICAgICAgICAgYWJvdXRQMixcbiAgICAgICAgICAgIGFib3V0SW1hZ2UzLFxuICAgICAgICAgICAgYWJvdXRQM1xuICAgICAgICApO1xuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgICB9KTtcbn1cblxuLyogPGgyPkFib3V0IFVzPC9oMj5cbjxkaXYgaWQ9XCJhYm91dFVzXCI+XG4gICAgPGRpdiBpZD1cImFib3V0Q29udGVudFwiPlxuICAgICAgICA8aDM+QSB0cmFkaXRpb24gb2YgZXhjZWxsZW5jZTwvaDM+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9zcG9uZ2Vib2IvaW1hZ2VzLzgvOGQvUGl6emFfRGVsaXZlcnlfYmFja2dyb3VuZC0yNi5KUEcvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgZWxpdC4gTnVsbGFtIHZvbHV0cGF0LCB2ZWxpdCBzZWQgYXVjdG9yIG1hbGVzdWFkYSxcbiAgICAgICAgICAgIGlwc3VtIG1pIGV1aXNtb2QgbWFnbmEsIGF0IGJsYW5kaXQgZHVpIGxpYmVybyBhdFxuICAgICAgICAgICAgbWFnbmEuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtXG4gICAgICAgICAgICBwcmltaXMgaW4gZmF1Y2lidXMuIFF1aXNxdWUgaW4gZXN0IGluIG1hdXJpcyBtb2xsaXNcbiAgICAgICAgICAgIHZhcml1cy4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW1cbiAgICAgICAgICAgIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVsbGEgdWxsYW1jb3JwZXIgbGVvIGFjIG1hdXJpc1xuICAgICAgICAgICAgc2FnaXR0aXMgZ3JhdmlkYS4gUHJhZXNlbnQgcmhvbmN1cyBmYXVjaWJ1cyBmZWxpc1xuICAgICAgICAgICAgbm9uIHVsdHJpY2llcy4gUHJvaW4gbmVxdWUgaXBzdW0sIG1hdHRpcyBzZWQgZXhcbiAgICAgICAgICAgIHZpdGFlLCBzYWdpdHRpcyBhdWN0b3IgcHVydXMuIEN1cmFiaXR1ciBub24gb2Rpb1xuICAgICAgICAgICAgYXVndWUuIE1hdXJpcyBvZGlvIGxlY3R1cywgdGVtcHVzIGRpY3R1bSBsZW8gZXUsXG4gICAgICAgICAgICBmZXJtZW50dW0gbWFsZXN1YWRhIGFyY3UuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3Nwb25nZWJvYi9pbWFnZXMvNy83My9QaXp6YV9EZWxpdmVyeV9iYWNrZ3JvdW5kLTI4LkpQRy9cIlxuICAgICAgICAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIE5hbSBhIHBlbGxlbnRlc3F1ZSBtYWduYSwgc2l0IGFtZXQgdGVtcHVzIG9yY2kuXG4gICAgICAgICAgICBGdXNjZSB0aW5jaWR1bnQgYW50ZSBhYyBhdWd1ZSB2ZXN0aWJ1bHVtIG1vbGVzdGllLlxuICAgICAgICAgICAgUHJhZXNlbnQgYWMgbmlzaSBuZWMgdGVsbHVzIHVsdHJpY2VzIGVsZW1lbnR1bS4gU2VkXG4gICAgICAgICAgICB0ZW1wb3IgdWx0cmljaWVzIHRyaXN0aXF1ZS4gU2VkIGlhY3VsaXMsIGxpZ3VsYVxuICAgICAgICAgICAgdml0YWUgcGVsbGVudGVzcXVlIHNhZ2l0dGlzLCBtZXR1cyBuaXNpIGRpY3R1bVxuICAgICAgICAgICAgbGFjdXMsIG5lYyB2b2x1dHBhdCBpcHN1bSB2ZWxpdCB2ZWwgbGVjdHVzLiBTZWQgcXVpc1xuICAgICAgICAgICAgZmVsaXMgZmluaWJ1cywgZGljdHVtIGF1Z3VlIGEsIHBvcnR0aXRvciBuaXNsLlxuICAgICAgICAgICAgTWF1cmlzIGlkIGNvbmd1ZSB0dXJwaXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3Nwb25nZWJvYi9pbWFnZXMvNC80OS9QaXp6YV9EZWxpdmVyeV9iYWNrZ3JvdW5kLTE1LkpQRy9cIlxuICAgICAgICAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIERvbmVjIHV0IHNlbSBhIG51bmMgdWx0cmljZXMgdGVtcHVzIHNlZCBhYyBkaWFtLlxuICAgICAgICAgICAgTnVsbGEgbm9uIG9yY2kgbm9uIG1pIHRpbmNpZHVudCBzdXNjaXBpdC4gUXVpc3F1ZVxuICAgICAgICAgICAgZGFwaWJ1cyBhbnRlIHNhcGllbiwgaW50ZXJkdW0gcGhhcmV0cmEgbWF1cmlzXG4gICAgICAgICAgICBlbGVtZW50dW0gZWdldC4gTWFlY2VuYXMgdnVscHV0YXRlIHZlaGljdWxhIHB1cnVzXG4gICAgICAgICAgICBlZ2V0IHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpblxuICAgICAgICAgICAgZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhXG4gICAgICAgICAgICBjdXJhZTsgQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBNYWVjZW5hcyBldCBlc3Qgbm9uXG4gICAgICAgICAgICB0b3J0b3IgZGFwaWJ1cyBibGFuZGl0LiBTdXNwZW5kaXNzZSBsdWN0dXMgdmVsaXQgZXgsXG4gICAgICAgICAgICBxdWlzIGNvbmRpbWVudHVtIGxpZ3VsYSBjb25ndWUgdml0YWUuIEZ1c2NlIGV4IG9yY2ksXG4gICAgICAgICAgICBjb25ndWUgaWQgZmV1Z2lhdCBkaWduaXNzaW0sIGVsZW1lbnR1bSBhdCB0dXJwaXMuXG4gICAgICAgICAgICBWZXN0aWJ1bHVtIGZhdWNpYnVzIHNvbGxpY2l0dWRpbiBwb3J0dGl0b3IuIE51bGxhbVxuICAgICAgICAgICAgY29uc2VjdGV0dXIsIG5pc2kgbmVjIGludGVyZHVtIHNjZWxlcmlzcXVlLCBlcmF0XG4gICAgICAgICAgICBlcmF0IGlhY3VsaXMgbmlzbCwgbmVjIHRpbmNpZHVudCBuaWJoIHRvcnRvciB1dFxuICAgICAgICAgICAgcmlzdXMuIER1aXMgZmFjaWxpc2lzIG1hbGVzdWFkYSB0b3J0b3IgdmVsXG4gICAgICAgICAgICBwb3J0dGl0b3IuXG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PiAqL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwiZm9vdGVyXCIpXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gYE1hZGUgYnlcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tlbmtuZWVsZWVcIj5LZW5ueSBMZWU8L2E+XG4gICAgZm9yXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIlxuICAgICAgICA+VGhlIE9kaW4gUHJvamVjdC48L2FcbiAgICA+YFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRMb2NhdGlvbnMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbnNMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rMlwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJ0ZXN0IGxvY2F0aW9uc1wiO1xuXG4gICAgbG9jYXRpb25zTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmlkID0gXCJsb2NhdGlvbkNhcmRzXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbnNcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDFcbiAgICAgICAgY29uc3QgbG9jYXRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24xLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTEuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTEuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaWZyYW1lMSk7XG5cbiAgICAgICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMWhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8xaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgSGVhZHF1YXJ0ZXJzXCI7XG4gICAgICAgIGNvbnN0IGluZm8xYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNTgwMTUzIEtlbHAgU3RyZWV0XCI7XG4gICAgICAgIGNvbnN0IGluZm8xY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY2l0eS50ZXh0Q29udGVudCA9IFwiQmlraW5pIEJvdHRvbSwgQmlraW5pIEF0b2xsXCI7XG4gICAgICAgIGNvbnN0IGluZm8xY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8xY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWFyc2hhbGwgSXNsYW5kc1wiO1xuICAgICAgICBpbmZvMS5hcHBlbmRDaGlsZChpbmZvMWhlYWQpO1xuICAgICAgICBpbmZvMS5hcHBlbmQoaW5mbzFhZGRyZXNzKTtcbiAgICAgICAgaW5mbzEuYXBwZW5kKGluZm8xY2l0eSk7XG4gICAgICAgIGluZm8xLmFwcGVuZChpbmZvMWNvdW50cnkpO1xuICAgICAgICBsb2NhdGlvbjEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuXG4gICAgICAgIGxvY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbjEpO1xuXG4gICAgICAgIC8vIExvY2F0aW9uIDJcbiAgICAgICAgY29uc3QgbG9jYXRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24yLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgaWZyYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZTIuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgICAgIGlmcmFtZTIuc3R5bGUgPSBcImJvcmRlcjogMFwiO1xuICAgICAgICBsb2NhdGlvbjIuYXBwZW5kQ2hpbGQoaWZyYW1lMik7XG5cbiAgICAgICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25JbmZvXCIpO1xuICAgICAgICBjb25zdCBpbmZvMmhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm8yaGVhZC50ZXh0Q29udGVudCA9IFwiS3J1c3R5IEtyYWIgTWV4aWNvXCI7XG4gICAgICAgIGNvbnN0IGluZm8yYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiODA4IFNwb25nZSBTdHJlZXRcIjtcbiAgICAgICAgY29uc3QgaW5mbzJjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzJjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8yY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8yY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8yLmFwcGVuZENoaWxkKGluZm8yaGVhZCk7XG4gICAgICAgIGluZm8yLmFwcGVuZChpbmZvMmFkZHJlc3MpO1xuICAgICAgICBpbmZvMi5hcHBlbmQoaW5mbzJjaXR5KTtcbiAgICAgICAgaW5mbzIuYXBwZW5kKGluZm8yY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMi5hcHBlbmRDaGlsZChpbmZvMik7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMik7XG5cbiAgICAgICAgLy8gTG9jYXRpb24gM1xuICAgICAgICBjb25zdCBsb2NhdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvbjMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uQ2FyZFwiKTtcblxuICAgICAgICBjb25zdCBpZnJhbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lMy5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ2OTY3MDQuMDkwNDYwMTcxOCEyZC0xMjMuNDEyODQyNjc1NDUyNTUhM2Q0Ni45OTExNDc2MzkwODMzMTYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDU0OTE3M2Y1ZmJiNmYwNTElM0EweDgzNGJmNTczMzY4ODM2NjIhMnNCaWtpbmklMjBCb3R0b20lMjBUYW5uaW5nJTIwU2Fsb24hNWUwITNtMiExc2VuITJzY2EhNHYxNjU4MzcwNDM0MjY4ITVtMiExc2VuITJzY2FcIjtcblxuICAgICAgICBpZnJhbWUzLnN0eWxlID0gXCJib3JkZXI6IDBcIjtcbiAgICAgICAgbG9jYXRpb24zLmFwcGVuZENoaWxkKGlmcmFtZTMpO1xuXG4gICAgICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSW5mb1wiKTtcbiAgICAgICAgY29uc3QgaW5mbzNoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBpbmZvM2hlYWQudGV4dENvbnRlbnQgPSBcIkJpa2luaSBCb3R0b20gVGFubmluZyBTYWxvbiAmIFBpenphXCI7XG4gICAgICAgIGNvbnN0IGluZm8zYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNjk0MjAgQ2FwaXRvbCBCb3VsZXZhcmQgU0VcIjtcbiAgICAgICAgY29uc3QgaW5mbzNjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mbzNjaXR5LnRleHRDb250ZW50ID0gXCJMYSBQYXosIENhYm8gU2FuIEx1Y2FzXCI7XG4gICAgICAgIGNvbnN0IGluZm8zY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8zY291bnRyeS50ZXh0Q29udGVudCA9IFwiTWV4aWNvXCI7XG4gICAgICAgIGluZm8zLmFwcGVuZENoaWxkKGluZm8zaGVhZCk7XG4gICAgICAgIGluZm8zLmFwcGVuZChpbmZvM2FkZHJlc3MpO1xuICAgICAgICBpbmZvMy5hcHBlbmQoaW5mbzNjaXR5KTtcbiAgICAgICAgaW5mbzMuYXBwZW5kKGluZm8zY291bnRyeSk7XG4gICAgICAgIGxvY2F0aW9uMy5hcHBlbmRDaGlsZChpbmZvMyk7XG5cbiAgICAgICAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMyk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbnNDb250YWluZXIpO1xuICAgIH0pO1xufVxuXG57XG4gICAgLyogPGgyPkxvY2F0aW9uczwvaDI+XG48ZGl2IGlkPVwibG9jYXRpb25DYXJkc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTAwMjUzLjg5NDA3ODI3NTUhMmQxNjUuMTEyNDgwMzU1MTY3MyEzZDExLjYwNjY5MjAzMTU0ODg3OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjQ0YzIxODBhMjRmYWRiZiUzQTB4NGMzZjIxY2U5NzUzYTAyNyEyc0Jpa2luaSUyMEF0b2xsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2OTM5MjU1NSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIEhlYWRxdWFydGVyczwvaDM+XG4gICAgICAgICAgICA8ZGl2PjU4MDE1MyBLZWxwIFN0cmVldDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5CaWtpbmkgQm90dG9tLCBCaWtpbmkgQXRvbGw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TWFyc2hhbGwgSXNsYW5kczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkNhcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkOTQxMDkzLjk4NjY0ODQzODYhMmQtMTEwLjYyNjQwMTE3NjkxODc1ITNkMjIuODcwOTc2MzMwNDc1NzchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2YWY0YjVhOTFjMzRkZTUlM0EweGY3YmYzNzk3ZmQzYmUyMWMhMnNUaGUlMjBLcnVzdHklMjBLcmFiITVlMCEzbTIhMXNlbiEyc2NhITR2MTY1ODM2NzI1OTc3OSE1bTIhMXNlbiEyc2NhXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uSW5mb1wiPlxuICAgICAgICAgICAgPGgzPktydXN0eSBLcmFiIE1leGljbzwvaDM+XG4gICAgICAgICAgICA8ZGl2PjgwOCBTcG9uZ2UgQXZlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxhIFBheixDYWJvIFNhbiBMdWNhczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5NZXhpY288L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb25DYXJkXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY5NjcwNC4wOTA0NjAxNzE4ITJkLTEyMy40MTI4NDI2NzU0NTI1NSEzZDQ2Ljk5MTE0NzYzOTA4MzMxNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NTQ5MTczZjVmYmI2ZjA1MSUzQTB4ODM0YmY1NzMzNjg4MzY2MiEyc0Jpa2luaSUyMEJvdHRvbSUyMFRhbm5pbmclMjBTYWxvbiE1ZTAhM20yITFzZW4hMnNjYSE0djE2NTgzNzA0MzQyNjghNW0yITFzZW4hMnNjYVwiXG4gICAgICAgICAgICBtYXgtd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDBcIlxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvbkluZm9cIj5cbiAgICAgICAgICAgIDxoMz5CaWtpbmkgQm90dG9tIFRhbm5pbmcgU2Fsb24gJiBQaXp6YTwvaDM+XG4gICAgICAgICAgICA8ZGl2PjY5NDIwIENhcGl0b2wgQmx2ZCBTRTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5TZWF0dGxlLCBXQTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Vbml0ZWQgU3RhdGVzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICovXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluTG9nb1wiKTtcblxuICAgIGxvYWQoKTtcblxuICAgIG1haW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvYWQoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxvYWQoKXtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PVwiV2VsY29tZSB0byB0aGUgS3J1c3R5IEtyYWIgUGl6emFcIjtcblxuICAgICAgICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWFpbkltZy5zcmM9XCJodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDU1MzU3My5qcGdcIjtcbiAgICAgICAgbWFpbkltZy5zdHlsZS5tYXhXaWR0aD1cIjYwJVwiO1xuICAgICAgICBtYWluSW1nLmlkPVwibWFpbkltZ1wiO1xuXG4gICAgICAgIGNvbnN0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBtb3R0by50ZXh0Q29udGVudD1cIkl0J3MgdGhlIHBpenphIGZvciB5b3UgYW5kIG1lLlwiO1xuICAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmQoaGVhZGVyLG1haW5JbWcsIG1vdHRvKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgbWVudTEgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTEucG5nXCI7XG5pbXBvcnQgbWVudTIgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTIucG5nXCI7XG5pbXBvcnQgbWVudTMgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTMucG5nXCI7XG5pbXBvcnQgbWVudTQgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTQucG5nXCI7XG5pbXBvcnQgbWVudTUgZnJvbSBcIi4vaW1hZ2VzL21lbnUvbWVudTUucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmsxXCIpO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwidGVzdFwiO1xuXG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIG1lbnVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBtZW51Q29udGFpbmVyLmlkID0gXCJtZW51SXRlbXNcIjtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51MSxcbiAgICAgICAgICAgIFwiS3J1c3R5IEtyYWIgUGl6emFcIixcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbSB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi4gUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXCIsXG4gICAgICAgICAgICBcIjE5XCJcbiAgICAgICAgKTtcbiAgICAgICAgbmV3SXRlbShcbiAgICAgICAgICAgIG1lbnUyLFxuICAgICAgICAgICAgXCJQaW9uZWVyIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIyM1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51MyxcbiAgICAgICAgICAgIFwiQmlraW5pIEF0b2xsIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIxN1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51NCxcbiAgICAgICAgICAgIFwiU2FuZHkgQ2hlZWtzIFBpenphXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW0gdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLCBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlwiLFxuICAgICAgICAgICAgXCIyN1wiXG4gICAgICAgICk7XG4gICAgICAgIG5ld0l0ZW0oXG4gICAgICAgICAgICBtZW51NSxcbiAgICAgICAgICAgIFwiU3dlZXQgVmljdG9yeSBQaXp6YVwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLiBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcywgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cIixcbiAgICAgICAgICAgIFwiMjlcIlxuICAgICAgICApO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbmV3SXRlbShpbWdJZCwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVQaWNcIik7XG4gICAgICAgIGl0ZW1JbWFnZS5pZCA9IFN0cmluZyhpbWdJZCk7XG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpbWdJZDtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgaW5mb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGluZm9OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgY29uc3QgaW5mb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaW5mb0Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmFwcGVuZChpbmZvTmFtZSwgaW5mb0Rlc2MpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kKGl0ZW1JbWFnZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2UpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbn1cblxuLyogPGgyPk1lbnU8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51SXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTFcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5LcnVzdHkgS3JhYiBQaXp6YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIHRoZSAnemEuIExvcmVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIFZpdmFtdXMgdm9sdXRwYXQgY29uZ3VlIHZlaGljdWxhLiBOdWxsYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWx0cmljaWVzIGVnZXN0YXMgbWV0dXMgYWMgYWNjdW1zYW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBtYXVyaXMgcXVhbSwgaWFjdWxpcyBpZCBtYXNzYSBxdWlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlxdWV0IGltcGVyZGlldCBvZGlvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1QcmljZVwiPjE5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJtZW51MlwiIGNsYXNzPVwibWVudVBpY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbURlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBpb25lZXIgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4yMzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTNcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CaWtpbmkgQXRvbGwgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4xNzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTRcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYW5keSBDaGVla3MgUGl6emE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGRlc2NyaXB0aW9uIGZvciB0aGUgJ3phLiBMb3JlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBWaXZhbXVzIHZvbHV0cGF0IGNvbmd1ZSB2ZWhpY3VsYS4gTnVsbGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJpY2llcyBlZ2VzdGFzIG1ldHVzIGFjIGFjY3Vtc2FuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbWF1cmlzIHF1YW0sIGlhY3VsaXMgaWQgbWFzc2EgcXVpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVldCBpbXBlcmRpZXQgb2Rpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJpY2VcIj4yNzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWVudTVcIiBjbGFzcz1cIm1lbnVQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Td2VldCBWaWN0b3J5IFBpenphPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIHNhbXBsZSBkZXNjcmlwdGlvbiBmb3IgdGhlICd6YS4gTG9yZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gVml2YW11cyB2b2x1dHBhdCBjb25ndWUgdmVoaWN1bGEuIE51bGxhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bHRyaWNpZXMgZWdlc3RhcyBtZXR1cyBhYyBhY2N1bXNhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG1hdXJpcyBxdWFtLCBpYWN1bGlzIGlkIG1hc3NhIHF1aXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1ZXQgaW1wZXJkaWV0IG9kaW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByaWNlXCI+Mjk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjcmVkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvcGl6emEtdG9wcGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpenphIHRvcHBpbmdzIHZlY3RvciBjcmVhdGVkIGJ5IHBjaC52ZWN0b3IgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd3dy5mcmVlcGlrLmNvbTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi9cbiIsImltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTmF2KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdi5pZCA9IFwibmF2XCI7XG4gICAgY29uc3QgbWFpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1haW5Mb2dvLmlkID0gXCJtYWluTG9nb1wiO1xuICAgIG1haW5Mb2dvLnNyYyA9IGxvZ287XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlua3MuaWQgPSBcImxpbmtzXCI7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazEuaWQgPSBcImxpbmsxXCI7XG4gICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazIuaWQgPSBcImxpbmsyXCI7XG4gICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazMuaWQgPSBcImxpbmszXCI7XG4gICAgY29uc3QgbGluazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazQuaWQgPSBcImxpbms0XCI7XG5cbiAgICBsaW5rMS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbnNcIjtcbiAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICBsaW5rNC50ZXh0Q29udGVudCA9IFwiT3JkZXIgT25saW5lXCI7XG5cbiAgICBsaW5rcy5hcHBlbmQobGluazEsIGxpbmsyLCBsaW5rMywgbGluazQpO1xuXG4gICAgbmF2LmFwcGVuZChtYWluTG9nbywgbGlua3MpO1xuXG4gICAgYm9keS5wcmVwZW5kKG5hdik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkT3JkZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBvcmRlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbms0XCIpO1xuXG4gICAgY29uc3Qgb3JkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgb3JkZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBvcmRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIG9yZGVyQ29udGFpbmVyLmlkID0gXCJvcmRlck9ubGluZVwiO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiT3JkZXIgT25saW5lXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBvcmRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvcmRlckNvbnRlbnQuaWQgPSBcIm9yZGVyQ29udGVudFwiO1xuICAgICAgICBjb25zdCBzdWJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBzdWJIZWFkLnRleHRDb250ZW50ID0gXCJPcmRlciBub3cgdGhyb3VnaCBvbmUgb2Ygb3VyIHBhcnRuZXJzOlwiO1xuICAgICAgICBjb25zdCB1YmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdWJlci5zcmMgPVxuICAgICAgICAgICAgXCJodHRwOi8veWVvbGRlb3JjaGFyZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvNTMxMDM2Ni11YmVyLWVhdHMtbG9nby1wbmctYW5kLXZlY3Rvci1sb2dvLWRvd25sb2FkLXViZXItZWF0cy1wbmctMzUwMF8zNTAwX3ByZXZpZXcucG5nXCI7XG4gICAgICAgIGNvbnN0IGRvb3JkYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZG9vcmRhc2guc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly90b3BwbmcuY29tL3VwbG9hZHMvcHJldmlldy9kb29yZGFzaC1sb2dvLTExNjA5MzU5NTQybmQxZzY2MHk1dC5wbmdcIjtcbiAgICAgICAgY29uc3Qgc2tpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHNraXAuc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzE0NTE1OTIyMDcyOTU3ODcwMTQvSEc4N0lSREFfNDAweDQwMC5qcGdcIjtcbiAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWQsIHViZXIsIGRvb3JkYXNoLCBza2lwKTtcblxuICAgICAgICBvcmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlckNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJDb250YWluZXIpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRTdHVmZigpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBmcm9tIHRlc3RGdW5jdGlvbi5qcycpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==