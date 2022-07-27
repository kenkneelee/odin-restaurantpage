"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["loadNav"],{

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

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/482e9767e1d796148079.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadNav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2FkTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTmF2KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdi5pZD1cIm5hdlwiO1xuICAgIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYWluTG9nby5pZD1cIm1haW5Mb2dvXCI7XG4gICAgbWFpbkxvZ28uc3JjID0gbG9nbztcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaW5rcy5pZD1cImxpbmtzXCI7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazEuaWQ9XCJsaW5rMVwiO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpbmsyLmlkPVwibGluazJcIjtcbiAgICBjb25zdCBsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaW5rMy5pZD1cImxpbmszXCI7XG4gICAgY29uc3QgbGluazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGluazQuaWQ9XCJsaW5rNFwiO1xuXG4gICAgbGluazEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBsaW5rMi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25zXCI7XG4gICAgbGluazMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgbGluazQudGV4dENvbnRlbnQgPSBcIk9yZGVyIE9ubGluZVwiO1xuXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazEpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmsyKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rMyk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazQpO1xuXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQgKG1haW5Mb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQgKGxpbmtzKTtcblxuICAgIGJvZHkucHJlcGVuZChuYXYpO1xuICAgIC8vIHJldHVybiBlbGVtZW50XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9