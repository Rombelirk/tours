webpackHotUpdate("main",{

/***/ "./src/modules/Details/Details.tsx":
/*!*****************************************!*\
  !*** ./src/modules/Details/Details.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var _atoms_FixedHeightImage_FixedHeightImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/FixedHeightImage/FixedHeightImage */ "./src/atoms/FixedHeightImage/FixedHeightImage.tsx");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ "./node_modules/pure-react-carousel/dist/react-carousel.es.css");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Details/Details.tsx";






const Details = ({
  offer
}) => {
  console.log(offer, "offer");

  if (!offer.photos) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselProvider"], {
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    totalSlides: offer.photos.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Basdfsdfsdfsdfck"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, offer.photos.map((photo, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_FixedHeightImage_FixedHeightImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      src: photo.t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonNext"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Nexsdfsdfsdfsdft"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Details));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.d511ad81597cc53f52b4.hot-update.js.map