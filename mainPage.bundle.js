"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["mainPage"],{

/***/ "./src/pages/main-page.js":
/*!********************************!*\
  !*** ./src/pages/main-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainLoader)
/* harmony export */ });
/* harmony import */ var _assets_images_krabs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/krabs.png */ "./src/assets/images/krabs.png");


function mainLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    const about = document.createElement('div');
    const history = document.createElement('div');
    const aboutTitle = document.createElement('h2');
    const historyTitle = document.createElement('h2');
    const aboutP = document.createElement('p');
    const historyP = document.createElement('p');
    const krabs = new Image();

    krabs.src = _assets_images_krabs_png__WEBPACK_IMPORTED_MODULE_0__;
    krabs.id = 'krabs';
    title.textContent = 'The Krusty Krab';
    about.classList.add('containers');
    history.classList.add('containers');
    aboutTitle.textContent = 'About';
    aboutP.textContent = 'We are the most successful restaurant in all of Bikini Bottom.\
    Our secret formula is 800 years old and loved by everyone! Come Spend Your Money Here!';
    historyTitle.textContent = 'History';
    historyP.textContent = 'After the war, Krabs stayed secluded in a deep depression that seemed endless.\
    But then his luck changed when he acquired a bankrupt retirement home and with a few minor alterations,\
    the Krusty Krab was born!';

    about.id = 'about';
    history.id = 'history';
    frame.id = 'frame';

    about.appendChild(aboutTitle);
    about.appendChild(aboutP);
    history.appendChild(historyTitle);
    history.appendChild(historyP);
    frame.appendChild(krabs);
    frame.appendChild(title);
    frame.appendChild(about);
    frame.appendChild(history);
    return frame;
}


/***/ }),

/***/ "./src/assets/images/krabs.png":
/*!*************************************!*\
  !*** ./src/assets/images/krabs.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf3f4d384cdedbc2fcfa.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/main-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IscURBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWFpbi1wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLcmFicyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2tyYWJzLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbkxvYWRlcigpIHtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBoaXN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoaXN0b3J5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBrcmFicyA9IG5ldyBJbWFnZSgpO1xuXG4gICAga3JhYnMuc3JjID0gS3JhYnM7XG4gICAga3JhYnMuaWQgPSAna3JhYnMnO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBLcnVzdHkgS3JhYic7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVycycpO1xuICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVycycpO1xuICAgIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIGFib3V0UC50ZXh0Q29udGVudCA9ICdXZSBhcmUgdGhlIG1vc3Qgc3VjY2Vzc2Z1bCByZXN0YXVyYW50IGluIGFsbCBvZiBCaWtpbmkgQm90dG9tLlxcXG4gICAgT3VyIHNlY3JldCBmb3JtdWxhIGlzIDgwMCB5ZWFycyBvbGQgYW5kIGxvdmVkIGJ5IGV2ZXJ5b25lISBDb21lIFNwZW5kIFlvdXIgTW9uZXkgSGVyZSEnO1xuICAgIGhpc3RvcnlUaXRsZS50ZXh0Q29udGVudCA9ICdIaXN0b3J5JztcbiAgICBoaXN0b3J5UC50ZXh0Q29udGVudCA9ICdBZnRlciB0aGUgd2FyLCBLcmFicyBzdGF5ZWQgc2VjbHVkZWQgaW4gYSBkZWVwIGRlcHJlc3Npb24gdGhhdCBzZWVtZWQgZW5kbGVzcy5cXFxuICAgIEJ1dCB0aGVuIGhpcyBsdWNrIGNoYW5nZWQgd2hlbiBoZSBhY3F1aXJlZCBhIGJhbmtydXB0IHJldGlyZW1lbnQgaG9tZSBhbmQgd2l0aCBhIGZldyBtaW5vciBhbHRlcmF0aW9ucyxcXFxuICAgIHRoZSBLcnVzdHkgS3JhYiB3YXMgYm9ybiEnO1xuXG4gICAgYWJvdXQuaWQgPSAnYWJvdXQnO1xuICAgIGhpc3RvcnkuaWQgPSAnaGlzdG9yeSc7XG4gICAgZnJhbWUuaWQgPSAnZnJhbWUnO1xuXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQKTtcbiAgICBoaXN0b3J5LmFwcGVuZENoaWxkKGhpc3RvcnlUaXRsZSk7XG4gICAgaGlzdG9yeS5hcHBlbmRDaGlsZChoaXN0b3J5UCk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoa3JhYnMpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoaGlzdG9yeSk7XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9