(this["webpackJsonpholidu"] = this["webpackJsonpholidu"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/app.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/app.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./fonts/Nunito/Nunito-Regular.ttf */ "./src/fonts/Nunito/Nunito-Regular.ttf"));
// Module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: 'Nunito';\n    \n}\n\n@font-face {\n    font-family: \"Nunito\";\n    src: url(" + ___CSS_LOADER_URL___0___ + ");\n   }", ""]);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_Offers_OffersContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Offers/OffersContainer */ "./src/modules/Offers/OffersContainer.tsx");
/* harmony import */ var _modules_Details_DetailsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Details/DetailsContainer */ "./src/modules/Details/DetailsContainer.tsx");
/* harmony import */ var _modules_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Layout/LayoutContainer */ "./src/modules/Layout/LayoutContainer.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/App.tsx";









const history = Object(history__WEBPACK_IMPORTED_MODULE_7__["createBrowserHistory"])();

const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_1__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Router"], {
    history: history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/offers",
    component: _modules_Offers_OffersContainer__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/details/:id",
    component: _modules_Details_DetailsContainer__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
    to: "/offers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/action_types/action_types.js":
/*!******************************************!*\
  !*** ./src/action_types/action_types.js ***!
  \******************************************/
/*! exports provided: FETCH_DATA, FETCH_OFFER, STORE_DATA, STORE_OFFER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_OFFER", function() { return FETCH_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_DATA", function() { return STORE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_OFFER", function() { return STORE_OFFER; });
const FETCH_DATA = 'FETCH_DATA';
const FETCH_OFFER = 'FETCH_OFFER';
const STORE_DATA = 'STORE_DATA';
const STORE_OFFER = 'STORE_OFFER';

/***/ }),

/***/ "./src/actions/fetchData.ts":
/*!**********************************!*\
  !*** ./src/actions/fetchData.ts ***!
  \**********************************/
/*! exports provided: fetchData, fetchOffer, storeData, storeOffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOffer", function() { return fetchOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeData", function() { return storeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeOffer", function() { return storeOffer; });
/* harmony import */ var _action_types_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action_types/action_types */ "./src/action_types/action_types.js");

const fetchData = searchTerm => {
  return {
    type: _action_types_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_DATA"],
    searchTerm
  };
};
const fetchOffer = id => {
  return {
    type: _action_types_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_OFFER"],
    id
  };
};
const storeData = data => {
  return {
    type: _action_types_action_types__WEBPACK_IMPORTED_MODULE_0__["STORE_DATA"],
    data
  };
};
const storeOffer = offer => {
  return {
    type: _action_types_action_types__WEBPACK_IMPORTED_MODULE_0__["STORE_OFFER"],
    offer
  };
};

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/app.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/app.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/app.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/atoms/Card/Card.styled.tsx":
/*!****************************************!*\
  !*** ./src/atoms/Card/Card.styled.tsx ***!
  \****************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    border-radius: 5px;
    background-color: white;
    box-shadow:-1px -1px 1px 0px rgba(255, 255, 255, 0.16), 0 3px 6px rgba(119, 119, 119, 0.23);
    margin: 10px;

`;

/***/ }),

/***/ "./src/atoms/FixedHeightImage/FixedHeightImage.styles.ts":
/*!***************************************************************!*\
  !*** ./src/atoms/FixedHeightImage/FixedHeightImage.styles.ts ***!
  \***************************************************************/
/*! exports provided: Container, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 160px;
    width: auto;
    overflow: hidden;
    display: flex;
    /* flex-shrink: 0; */
    align-items: center; 
    justify-content: stretch;   
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    width: 100%;
    transition: all .5s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

/***/ }),

/***/ "./src/atoms/FixedHeightImage/FixedHeightImage.tsx":
/*!*********************************************************!*\
  !*** ./src/atoms/FixedHeightImage/FixedHeightImage.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FixedHeightImage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedHeightImage.styles */ "./src/atoms/FixedHeightImage/FixedHeightImage.styles.ts");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/atoms/FixedHeightImage/FixedHeightImage.tsx";



const FixedHeightImage = ({
  src
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FixedHeightImage_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FixedHeightImage_styles__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FixedHeightImage);

/***/ }),

/***/ "./src/atoms/Input/Input.styles.tsx":
/*!******************************************!*\
  !*** ./src/atoms/Input/Input.styles.tsx ***!
  \******************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const TextInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
    border-radius: 5px;
`;

/***/ }),

/***/ "./src/atoms/Input/Input.tsx":
/*!***********************************!*\
  !*** ./src/atoms/Input/Input.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.styles */ "./src/atoms/Input/Input.styles.tsx");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/atoms/Input/Input.tsx";



const Input = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input_styles__WEBPACK_IMPORTED_MODULE_1__["TextInput"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/fonts/Nunito/Nunito-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Nunito/Nunito-Regular.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Nunito-Regular.d2e691bc.ttf";

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.67d2a287.jpg";

/***/ }),

/***/ "./src/images/2.jpg":
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.23c7740e.jpg";

/***/ }),

/***/ "./src/images/empty.png":
/*!******************************!*\
  !*** ./src/images/empty.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/full.png":
/*!*****************************!*\
  !*** ./src/images/full.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/half.png":
/*!*****************************!*\
  !*** ./src/images/half.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/mocks/data.ts":
/*!***************************!*\
  !*** ./src/mocks/data.ts ***!
  \***************************/
/*! exports provided: mockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockData", function() { return mockData; });
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/1.jpg */ "./src/images/1.jpg");
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/2.jpg */ "./src/images/2.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_2_jpg__WEBPACK_IMPORTED_MODULE_1__);


const mockData = {
  offers: [{
    id: "1",
    detailsLink: "",
    rating: {
      count: 0,
      // (count reviews)
      value: 0 // 5/100*value => stars

    },
    photos: [{
      hr: _images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      l: _images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      m: _images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      t: _images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
    }],
    price: {
      ccy: "EUR",
      // EUR
      currency: "EUR",
      // EUR
      daily: 15,
      nights: 6,
      total: 60 // nights * daily

    },
    provider: {
      id: "",
      legalName: "",
      logoUrl: "",
      shortName: ""
    },
    details: {
      apartmentType: "",
      apartmentTypeTitle: "",
      bedroomsCount: 0,
      guestsCount: 0,
      name: "",
      location: {
        lat: 0,
        lng: 0,
        name: ""
      }
    }
  }, {
    id: "2",
    detailsLink: "",
    rating: {
      count: 0,
      // (count reviews)
      value: 0 // 5/100*value => stars

    },
    photos: [{
      hr: _images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
      l: _images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
      m: _images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
      t: _images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a
    }],
    price: {
      ccy: "",
      // EUR
      currency: "",
      // EUR
      daily: 0,
      nights: 0,
      total: 0 // nights * daily

    },
    provider: {
      id: "",
      legalName: "",
      logoUrl: "",
      shortName: ""
    },
    details: {
      apartmentType: "",
      apartmentTypeTitle: "",
      bedroomsCount: 0,
      guestsCount: 0,
      name: "",
      location: {
        lat: 0,
        lng: 0,
        name: ""
      }
    }
  }]
};

/***/ }),

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, offer.photos.map((photo, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_FixedHeightImage_FixedHeightImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      src: photo.t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Basdfsdfsdfsdfck"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonNext"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Nexsdfsdfsdfsdft"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Details));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/Details/DetailsContainer.tsx":
/*!**************************************************!*\
  !*** ./src/modules/Details/DetailsContainer.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fetchData */ "./src/actions/fetchData.ts");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details */ "./src/modules/Details/Details.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Details/DetailsContainer.tsx";







const DetailsContainer = props => {
  const offer = props.offer; //@ts-ignore

  const id = props.match.params.id; //@ts-ignore    

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.fetchOffer(id);
  }, []);

  if (!offer) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Details__WEBPACK_IMPORTED_MODULE_2__["default"], {
    offer: offer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  });
};

const mapStateToProps = state => {
  return {
    offer: state.offers.currentOffer
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    fetchOffer: _actions_fetchData__WEBPACK_IMPORTED_MODULE_1__["fetchOffer"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(DetailsContainer)));

/***/ }),

/***/ "./src/modules/Layout/Layout.styles.tsx":
/*!**********************************************!*\
  !*** ./src/modules/Layout/Layout.styles.tsx ***!
  \**********************************************/
/*! exports provided: Container, Header, Sidebar, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    grid-area: header;
    color: white;
    display: flex;
    background-color: #2e3130;
    justify-content: center;
    align-items: center;
    height: 60px;
    display: flex;
    flex-shrink: 0;
`;
const Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    background-color: blue;
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
   width: 1000px;
   margin: auto;
`;

/***/ }),

/***/ "./src/modules/Layout/Layout.tsx":
/*!***************************************!*\
  !*** ./src/modules/Layout/Layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.styles */ "./src/modules/Layout/Layout.styles.tsx");
/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Input/Input */ "./src/atoms/Input/Input.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Layout/Layout.tsx";





const Layout = ({
  children,
  onSearch
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState2 = Object(_Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        searchString = _useState2[0],
        setSearchString = _useState2[1];

  const onSearchFieldChange = e => {
    setSearchString(e.currentTarget.value);
  };

  const onSearchSubmit = () => {
    onSearch(searchString);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_styles__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onSearchFieldChange,
    value: searchString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onSearchSubmit,
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Search")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_styles__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/modules/Layout/LayoutContainer.tsx":
/*!************************************************!*\
  !*** ./src/modules/Layout/LayoutContainer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/fetchData */ "./src/actions/fetchData.ts");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/modules/Layout/Layout.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Layout/LayoutContainer.tsx";






const LayoutContainer = (_ref) => {
  let fetchData = _ref.fetchData,
      props = Object(_Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["fetchData"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    onSearch: fetchData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

const mapStateToProps = state => {
  return {
    data: state.offers.data
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    fetchData: _actions_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(LayoutContainer));

/***/ }),

/***/ "./src/modules/Offers/Offer/Offer.styles.ts":
/*!**************************************************!*\
  !*** ./src/modules/Offers/Offer/Offer.styles.ts ***!
  \**************************************************/
/*! exports provided: Container, Info, Name, Rating, StarsContainer, VotesCount, StarImage, PriceContainer, Price, NightsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsContainer", function() { return StarsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesCount", function() { return VotesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarImage", function() { return StarImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceContainer", function() { return PriceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NightsCount", function() { return NightsCount; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    height: 100%;
    display: flex;
 flex-direction: column;
 position: relative;
 cursor: pointer;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    font-weight: bold;
    flex: auto; 
    height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
   
`;
const Rating = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;  
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
`;
const StarsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
 display: flex;
    flex-shrink: 0;
    min-width: fit-content;
    align-items: center;
    margin-right: 6px;
    & > img:not(:last-child) {
        margin-right: 1px;
    }  
`;
const VotesCount = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;  
    color: gray;
    font-size: 12px;
`;
const StarImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    width: 16px;
    height: 16px;
`;
const PriceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 16px;
    height: 16px;
    font-size: 18px;
    width: 100%;
    height: 20px;
    font-weight: bold;
`;
const NightsCount = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

    flex-shrink: 0;
    height: 20px;
`;

/***/ }),

/***/ "./src/modules/Offers/Offer/Offer.tsx":
/*!********************************************!*\
  !*** ./src/modules/Offers/Offer/Offer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Card_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms/Card/Card.styled */ "./src/atoms/Card/Card.styled.tsx");
/* harmony import */ var _Offer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offer.styles */ "./src/modules/Offers/Offer/Offer.styles.ts");
/* harmony import */ var _atoms_FixedHeightImage_FixedHeightImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../atoms/FixedHeightImage/FixedHeightImage */ "./src/atoms/FixedHeightImage/FixedHeightImage.tsx");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_half_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/half.png */ "./src/images/half.png");
/* harmony import */ var _images_half_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_half_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_full_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/full.png */ "./src/images/full.png");
/* harmony import */ var _images_full_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_full_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_empty_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/empty.png */ "./src/images/empty.png");
/* harmony import */ var _images_empty_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_empty_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Offers/Offer/Offer.tsx";








const starsToImgMapping = {
  one: key => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["StarImage"], {
    key: key,
    src: _images_full_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }),
  half: key => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["StarImage"], {
    key: key,
    src: _images_half_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }),
  empty: key => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["StarImage"], {
    key: key,
    src: _images_empty_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })
};

const Offer = ({
  offer,
  onOfferSelect
}) => {
  const photo = offer.photos[0] ? offer.photos[0].t : "";

  const getStars = value => {
    const fifth = 5 / 100 * value;
    const roundedFifth = Math.round(fifth * 2) / 2;
    const fullStars = Math.floor(roundedFifth);
    const halfStar = roundedFifth % fullStars > 0;
    let result = Array(fullStars).fill("one");
    if (halfStar && result.length < 5) result.push('half');
    const rest = 5 - result.length;
    result = result.concat(new Array(rest).fill("empty"));
    return result;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Card_Card_styled__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    onClick: e => onOfferSelect(offer.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_FixedHeightImage_FixedHeightImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: photo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["Info"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["Name"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, offer.details.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["Rating"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["StarsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, getStars(offer.rating.value).map((star, index) => starsToImgMapping[star](index))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["VotesCount"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, `(${offer.rating.count} votes)`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["PriceContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["Price"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, offer.price.total + " " + offer.price.currency), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_styles__WEBPACK_IMPORTED_MODULE_2__["NightsCount"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, offer.price.nights + " nights")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__["hot"])(module)(Offer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/Offers/Offer/OfferContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/modules/Offers/Offer/OfferContainer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Offer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Offer */ "./src/modules/Offers/Offer/Offer.tsx");

var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Offers/Offer/OfferContainer.tsx";




const OfferContainer = (_ref) => {
  let history = _ref.history,
      props = Object(_Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["history"]);

  const onOfferSelect = id => {
    history.push(`/details/${id}`);
  }; //@ts-ignore


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Offer__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    onOfferSelect: onOfferSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(OfferContainer));

/***/ }),

/***/ "./src/modules/Offers/Offers.styles.tsx":
/*!**********************************************!*\
  !*** ./src/modules/Offers/Offers.styles.tsx ***!
  \**********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 330px 330px 330px;
    grid-template-rows: repeat(200px);
`;

/***/ }),

/***/ "./src/modules/Offers/Offers.tsx":
/*!***************************************!*\
  !*** ./src/modules/Offers/Offers.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Offer_OfferContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Offer/OfferContainer */ "./src/modules/Offers/Offer/OfferContainer.tsx");
/* harmony import */ var _Offers_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offers.styles */ "./src/modules/Offers/Offers.styles.tsx");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Offers/Offers.tsx";




const Offers = ({
  data
}) => {
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offers_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, data.offers.map(offer => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offer_OfferContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    offer: offer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Offers);

/***/ }),

/***/ "./src/modules/Offers/OffersContainer.tsx":
/*!************************************************!*\
  !*** ./src/modules/Offers/OffersContainer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fetchData */ "./src/actions/fetchData.ts");
/* harmony import */ var _Offers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offers */ "./src/modules/Offers/Offers.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/ruabdr3/Documents/HoliduTestTask/holidu/src/modules/Offers/OffersContainer.tsx";






const OffersContainer = ({
  fetchData,
  data
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offers__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  });
};

const mapStateToProps = state => {
  return {
    data: state.offers.data
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    fetchData: _actions_fetchData__WEBPACK_IMPORTED_MODULE_1__["fetchData"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(OffersContainer));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers */ "./src/reducers/offers.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  offers: _offers__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/offers.js":
/*!********************************!*\
  !*** ./src/reducers/offers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _action_types_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action_types/action_types */ "./src/action_types/action_types.js");


const defaultState = {
  data: {
    offers: [],
    currentOffer: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  const type = action.type,
        data = action.data,
        offer = action.offer;
  console.log(type, 'type');

  switch (type) {
    case _action_types_action_types__WEBPACK_IMPORTED_MODULE_1__["STORE_DATA"]:
      return Object(_Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data
      });

    case _action_types_action_types__WEBPACK_IMPORTED_MODULE_1__["STORE_OFFER"]:
      return Object(_Users_ruabdr3_Documents_HoliduTestTask_holidu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        currentOffer: offer
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/sagas.ts":
/*!**********************!*\
  !*** ./src/sagas.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/fetchData */ "./src/actions/fetchData.ts");
/* harmony import */ var _action_types_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_types/action_types */ "./src/action_types/action_types.js");
/* harmony import */ var _mocks_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks/data */ "./src/mocks/data.ts");






function* fetchOffers(action) {
  const searchTerm = action.searchTerm;

  try {
    const data = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.holidu.com/rest/v6/search/offers', {
      params: {
        searchTerm
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_fetchData__WEBPACK_IMPORTED_MODULE_2__["storeData"])(data.data));
  } catch (e) {
    console.log('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_fetchData__WEBPACK_IMPORTED_MODULE_2__["storeData"])(_mocks_data__WEBPACK_IMPORTED_MODULE_4__["mockData"]));
  }
}

function* fetchOffer(action) {
  const id = action.id;

  try {
    const data = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.holidu.com/rest/v6/search/offers/${id}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_fetchData__WEBPACK_IMPORTED_MODULE_2__["storeOffer"])(data.data));
  } catch (e) {
    console.log('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_fetchData__WEBPACK_IMPORTED_MODULE_2__["storeOffer"])(_mocks_data__WEBPACK_IMPORTED_MODULE_4__["mockData"]));
  }
}

function* mySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action_types_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_DATA"], fetchOffers);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action_types_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_OFFER"], fetchOffer);
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sagas */ "./src/sagas.ts");




const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ruabdr3/Documents/HoliduTestTask/holidu/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ruabdr3/Documents/HoliduTestTask/holidu/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ruabdr3/Documents/HoliduTestTask/holidu/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map