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
    const content = document.getElementById("content");

    const nav = document.createElement("div");
    nav.id="nav";
    const mainLogo = document.createElement("img");
    mainLogo.id="mainLogo";
    mainLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    const links = document.createElement("ul");
    links.id="links";
    const link1 = document.createElement("li");
    const link2 = document.createElement("li");
    const link3 = document.createElement("li");
    const link4 = document.createElement("li");

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

    content.appendChild(nav);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZE5hdi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZE5hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5hdigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuaWQ9XCJuYXZcIjtcbiAgICBjb25zdCBtYWluTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFpbkxvZ28uaWQ9XCJtYWluTG9nb1wiO1xuICAgIG1haW5Mb2dvLnNyYyA9IGxvZ287XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlua3MuaWQ9XCJsaW5rc1wiO1xuICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbms0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGluazEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBsaW5rMi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25zXCI7XG4gICAgbGluazMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgbGluazQudGV4dENvbnRlbnQgPSBcIk9yZGVyIE9ubGluZVwiO1xuXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazEpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmsyKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rMyk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGluazQpO1xuXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQgKG1haW5Mb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQgKGxpbmtzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICAvLyByZXR1cm4gZWxlbWVudFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==