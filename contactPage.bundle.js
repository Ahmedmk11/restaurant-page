"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contactPage"],{

/***/ "./src/pages/contact-page.js":
/*!***********************************!*\
  !*** ./src/pages/contact-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactLoader)
/* harmony export */ });
/* harmony import */ var _assets_images_map_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/map.jpeg */ "./src/assets/images/map.jpeg");


function contactLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    const t = document.createElement('div');
    const b = document.createElement('div');
    const tl = document.createElement('div');
    const tr = document.createElement('div');
    const staff = document.createElement('h2');
    const hours = document.createElement('h2');
    const location = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    const p9 = document.createElement('p');
    const p10 = document.createElement('p');
    const p11 = document.createElement('p');
    const txt = ' 8am - 6pm';
    const map = new Image();
    
    map.id = 'map';
    map.src = _assets_images_map_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    p1.textContent = 'Monday:' + txt;
    p2.textContent = 'Tuesday: 8am - 8pm';
    p3.textContent = 'Wednesday:' + txt;
    p4.textContent = 'Thursday:' + txt;
    p5.textContent = 'Friday:' + txt;
    p6.textContent = 'Saturday:' + txt;
    p7.textContent = 'Sunday: Closed';
    p8.textContent = 'Owner/Founder: Eugene H. Krabs';
    p9.textContent = 'Fry Cook: SpongeBob SquarePants';
    p10.textContent = 'Cashier/Waiter: Squidward Tentacles';
    p11.textContent = 'Bikini Bottom, Pacific Ocean';
    staff.textContent = 'Staff';
    hours.textContent = 'Hours';
    location.textContent = 'Location';
    t.id = 'topContact';
    b.id = 'bottomContact';
    frame.id = 'frame';
    tl.id = 'staff';
    title.textContent = 'Contact Us';
    tl.appendChild(staff);
    tr.appendChild(hours);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tl.appendChild(p8);
    tl.appendChild(p9);
    tl.appendChild(p10);
    b.appendChild(location);
    b.appendChild(p11);
    b.appendChild(map);
    t.appendChild(tl);
    t.appendChild(tr);
    frame.appendChild(title);
    frame.appendChild(t);
    frame.appendChild(b);
    return frame;
}


/***/ }),

/***/ "./src/assets/images/map.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/map.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc950699e5b54d3feead.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/contact-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2F0aW9uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWFwLmpwZWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RMb2FkZXIoKSB7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3RhZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0eHQgPSAnIDhhbSAtIDZwbSc7XG4gICAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gICAgXG4gICAgbWFwLmlkID0gJ21hcCc7XG4gICAgbWFwLnNyYyA9IExvY2F0aW9uO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ01vbmRheTonICsgdHh0O1xuICAgIHAyLnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDhhbSAtIDhwbSc7XG4gICAgcDMudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OicgKyB0eHQ7XG4gICAgcDQudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6JyArIHR4dDtcbiAgICBwNS50ZXh0Q29udGVudCA9ICdGcmlkYXk6JyArIHR4dDtcbiAgICBwNi50ZXh0Q29udGVudCA9ICdTYXR1cmRheTonICsgdHh0O1xuICAgIHA3LnRleHRDb250ZW50ID0gJ1N1bmRheTogQ2xvc2VkJztcbiAgICBwOC50ZXh0Q29udGVudCA9ICdPd25lci9Gb3VuZGVyOiBFdWdlbmUgSC4gS3JhYnMnO1xuICAgIHA5LnRleHRDb250ZW50ID0gJ0ZyeSBDb29rOiBTcG9uZ2VCb2IgU3F1YXJlUGFudHMnO1xuICAgIHAxMC50ZXh0Q29udGVudCA9ICdDYXNoaWVyL1dhaXRlcjogU3F1aWR3YXJkIFRlbnRhY2xlcyc7XG4gICAgcDExLnRleHRDb250ZW50ID0gJ0Jpa2luaSBCb3R0b20sIFBhY2lmaWMgT2NlYW4nO1xuICAgIHN0YWZmLnRleHRDb250ZW50ID0gJ1N0YWZmJztcbiAgICBob3Vycy50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIHQuaWQgPSAndG9wQ29udGFjdCc7XG4gICAgYi5pZCA9ICdib3R0b21Db250YWN0JztcbiAgICBmcmFtZS5pZCA9ICdmcmFtZSc7XG4gICAgdGwuaWQgPSAnc3RhZmYnO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIHRsLmFwcGVuZENoaWxkKHN0YWZmKTtcbiAgICB0ci5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgdHIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIHRyLmFwcGVuZENoaWxkKHAyKTtcbiAgICB0ci5hcHBlbmRDaGlsZChwMyk7XG4gICAgdHIuYXBwZW5kQ2hpbGQocDQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHA1KTtcbiAgICB0ci5hcHBlbmRDaGlsZChwNik7XG4gICAgdHIuYXBwZW5kQ2hpbGQocDcpO1xuICAgIHRsLmFwcGVuZENoaWxkKHA4KTtcbiAgICB0bC5hcHBlbmRDaGlsZChwOSk7XG4gICAgdGwuYXBwZW5kQ2hpbGQocDEwKTtcbiAgICBiLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBiLmFwcGVuZENoaWxkKHAxMSk7XG4gICAgYi5hcHBlbmRDaGlsZChtYXApO1xuICAgIHQuYXBwZW5kQ2hpbGQodGwpO1xuICAgIHQuYXBwZW5kQ2hpbGQodHIpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh0KTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChiKTtcbiAgICByZXR1cm4gZnJhbWU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=