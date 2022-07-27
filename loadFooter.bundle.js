"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["loadFooter"],{

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadFooter.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZEZvb3Rlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2xvYWRGb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJmb290ZXJcIilcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBgTWFkZSBieVxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2Vua25lZWxlZVwiPktlbm55IExlZTwvYT5cbiAgICBmb3JcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiXG4gICAgICAgID5UaGUgT2RpbiBQcm9qZWN0LjwvYVxuICAgID5gXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9