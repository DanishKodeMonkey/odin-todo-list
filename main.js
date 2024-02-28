/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/modals.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/modals.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `::backdrop{
    background-color: rgba(0, 0, 0, 0.699);
}

#modal{
    background-color: cadetblue;
    display: flexbox;
    flex-direction: column;
}
.header{
    text-align: center;
    font-size: 2vw;
    font-weight: 900;
    border-bottom:3px dotted black
}

.container{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    >label{text-align: left;}
}
`, "",{"version":3,"sources":["webpack://./src/modules/modals.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB;AACJ;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;IAChB,OAAO,gBAAgB,CAAC;AAC5B","sourcesContent":["::backdrop{\n    background-color: rgba(0, 0, 0, 0.699);\n}\n\n#modal{\n    background-color: cadetblue;\n    display: flexbox;\n    flex-direction: column;\n}\n.header{\n    text-align: center;\n    font-size: 2vw;\n    font-weight: 900;\n    border-bottom:3px dotted black\n}\n\n.container{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    text-align: left;\n    >label{text-align: left;}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/banner.jpg */ "./src/assets/images/banner.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,body{
    margin: 0;
    padding: 0;
    background-color: aqua;
    display: flex;
    flex-flow: column;
    height: 100%;
}

/* Seperated for global classes */
.credit{
    margin-left:auto;
    font-size: 8px;
    color: white;
    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    >a{
        color: white;
    }
}
.credit:hover{
    scale:200%;
    transform-origin: right;
}

/* Header area below */
header{
    margin:0;
    padding:0;
    flex: 0 1 auto;
}

.banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position:right;
    background-size: cover;
    padding: 2vh;
    border-bottom: 5px ridge black;
    >.text-bg{
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.13);
        text-align: center;
        color: aliceblue;
        text-shadow: 0 0 20px black;
        >.title{
            font-size: 3vw;
            font-weight: 800;
        }
        >.sub-title{
            font-size: 1vw;
            font-weight: 600;
        }
    }
    >.text-bg>p{
        margin:0
    }
}

/* Main area below */
main{
    flex: 1 1 auto;
    display:grid;
    grid-template: 1fr 20fr / 1fr 6fr;
    background-color: rgba(0, 0, 0, 0.075);
    height: 100%;
    
}
.overview-tree{
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.575);
    border: 2px solid black;
    color:white;
    >.title{text-align: center;
            font-weight: 700;
            font-size: 1.5vw;
        background-color: rgb(62, 87, 94);
        padding: 10% 0}
}
.overview{
    margin:0;
    padding: 0;
    flex-flow: column;
    align-items: left;
    text-align:left;
    >.overview-project{
        background-color: rgb(61, 61, 61);
        list-style:circle inside none;
        margin-bottom:5px;
        padding: 10px;
        border-bottom: 2px solid black;
        font-size: 100%;
        color: rgb(255, 255, 255);
        >.overview-todo{
            background-color: silver;
            padding: 0 10%;
            list-style: disc inside none;
            border-top:2px dashed black;
            
            font-size: 80%;
            color: blue;
        }
    }
}

.toolbar{
    display: flex;
    justify-content: flex-start;
    grid-area: 1 / 2 / 2 / 3;
    background-color: rgba(165, 42, 42, 0.486);

}

.toolbar-button{
    width: 10vw;
    background-color: whitesmoke;
    font-size: 1vw;
    border: 1px solid black;
    border-radius: 10px;
    transition: 100ms ease-in-out;
}
.toolbar-button:hover{background-color: rgb(255, 226, 148);}
.toolbar-button:active{background-color: aliceblue; scale:90%;}
.content{
    grid-area: 2 / 2 / 3 / 3;
}


/* footer area */
footer{
    flex: 0 1 40px;
    padding-top: auto;
    background-color: rgba(75, 75, 75, 0.466);
    color: aliceblue;
    font-size: 80%;
    text-align: center;
    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    >a{
        color: aliceblue;
        text-decoration: none;
    }
}
footer:hover{
    font-size: 150%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB;;AAEA,iCAAiC;AACjC;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,qDAAqD;IACrD;QACI,YAAY;IAChB;AACJ;AACA;IACI,UAAU;IACV,uBAAuB;AAC3B;;AAEA,sBAAsB;AACtB;IACI,QAAQ;IACR,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yDAAiD;IACjD,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;IACZ,8BAA8B;IAC9B;QACI,YAAY;QACZ,qCAAqC;QACrC,kBAAkB;QAClB,gBAAgB;QAChB,2BAA2B;QAC3B;YACI,cAAc;YACd,gBAAgB;QACpB;QACA;YACI,cAAc;YACd,gBAAgB;QACpB;IACJ;IACA;QACI;IACJ;AACJ;;AAEA,oBAAoB;AACpB;IACI,cAAc;IACd,YAAY;IACZ,iCAAiC;IACjC,sCAAsC;IACtC,YAAY;;AAEhB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;;IAEtB,sCAAsC;IACtC,uBAAuB;IACvB,WAAW;IACX,QAAQ,kBAAkB;YAClB,gBAAgB;YAChB,gBAAgB;QACpB,iCAAiC;QACjC,cAAc;AACtB;AACA;IACI,QAAQ;IACR,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf;QACI,iCAAiC;QACjC,6BAA6B;QAC7B,iBAAiB;QACjB,aAAa;QACb,8BAA8B;QAC9B,eAAe;QACf,yBAAyB;QACzB;YACI,wBAAwB;YACxB,cAAc;YACd,4BAA4B;YAC5B,2BAA2B;;YAE3B,cAAc;YACd,WAAW;QACf;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,wBAAwB;IACxB,0CAA0C;;AAE9C;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,cAAc;IACd,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;AACjC;AACA,sBAAsB,oCAAoC,CAAC;AAC3D,uBAAuB,2BAA2B,EAAE,SAAS,CAAC;AAC9D;IACI,wBAAwB;AAC5B;;;AAGA,gBAAgB;AAChB;IACI,cAAc;IACd,iBAAiB;IACjB,yCAAyC;IACzC,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,qDAAqD;IACrD;QACI,gBAAgB;QAChB,qBAAqB;IACzB;AACJ;AACA;IACI,eAAe;AACnB","sourcesContent":["html,body{\n    margin: 0;\n    padding: 0;\n    background-color: aqua;\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n}\n\n/* Seperated for global classes */\n.credit{\n    margin-left:auto;\n    font-size: 8px;\n    color: white;\n    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    >a{\n        color: white;\n    }\n}\n.credit:hover{\n    scale:200%;\n    transform-origin: right;\n}\n\n/* Header area below */\nheader{\n    margin:0;\n    padding:0;\n    flex: 0 1 auto;\n}\n\n.banner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(./assets/images/banner.jpg);\n    background-position:right;\n    background-size: cover;\n    padding: 2vh;\n    border-bottom: 5px ridge black;\n    >.text-bg{\n        width: 100vw;\n        background-color: rgba(0, 0, 0, 0.13);\n        text-align: center;\n        color: aliceblue;\n        text-shadow: 0 0 20px black;\n        >.title{\n            font-size: 3vw;\n            font-weight: 800;\n        }\n        >.sub-title{\n            font-size: 1vw;\n            font-weight: 600;\n        }\n    }\n    >.text-bg>p{\n        margin:0\n    }\n}\n\n/* Main area below */\nmain{\n    flex: 1 1 auto;\n    display:grid;\n    grid-template: 1fr 20fr / 1fr 6fr;\n    background-color: rgba(0, 0, 0, 0.075);\n    height: 100%;\n    \n}\n.overview-tree{\n    grid-area: 1 / 1 / 3 / 2;\n    display: flex;\n    flex-direction: column;\n\n    background-color: rgba(0, 0, 0, 0.575);\n    border: 2px solid black;\n    color:white;\n    >.title{text-align: center;\n            font-weight: 700;\n            font-size: 1.5vw;\n        background-color: rgb(62, 87, 94);\n        padding: 10% 0}\n}\n.overview{\n    margin:0;\n    padding: 0;\n    flex-flow: column;\n    align-items: left;\n    text-align:left;\n    >.overview-project{\n        background-color: rgb(61, 61, 61);\n        list-style:circle inside none;\n        margin-bottom:5px;\n        padding: 10px;\n        border-bottom: 2px solid black;\n        font-size: 100%;\n        color: rgb(255, 255, 255);\n        >.overview-todo{\n            background-color: silver;\n            padding: 0 10%;\n            list-style: disc inside none;\n            border-top:2px dashed black;\n            \n            font-size: 80%;\n            color: blue;\n        }\n    }\n}\n\n.toolbar{\n    display: flex;\n    justify-content: flex-start;\n    grid-area: 1 / 2 / 2 / 3;\n    background-color: rgba(165, 42, 42, 0.486);\n\n}\n\n.toolbar-button{\n    width: 10vw;\n    background-color: whitesmoke;\n    font-size: 1vw;\n    border: 1px solid black;\n    border-radius: 10px;\n    transition: 100ms ease-in-out;\n}\n.toolbar-button:hover{background-color: rgb(255, 226, 148);}\n.toolbar-button:active{background-color: aliceblue; scale:90%;}\n.content{\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n\n/* footer area */\nfooter{\n    flex: 0 1 40px;\n    padding-top: auto;\n    background-color: rgba(75, 75, 75, 0.466);\n    color: aliceblue;\n    font-size: 80%;\n    text-align: center;\n    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    >a{\n        color: aliceblue;\n        text-decoration: none;\n    }\n}\nfooter:hover{\n    font-size: 150%;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/modals.css":
/*!********************************!*\
  !*** ./src/modules/modals.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modals.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/modals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createModal)
/* harmony export */ });
/* harmony import */ var _modals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.css */ "./src/modules/modals.css");


function createModal(type) {
	// Fetch modal element from DOM
	const modal = document.querySelector('#modal')

	// Create relevant modal content
	// Form elements holds entire form inside modal
	const form = document.createElement('form')

	//Title element, tells the type of object being created
	const paraTitle = document.createElement('p')
	paraTitle.classList.add('container', 'header')
	const modalLabel = document.createElement('label')
	modalLabel.setAttribute('for', 'modal')
	modalLabel.textContent = type.toUpperCase()
	paraTitle.appendChild(modalLabel)

	// Check which type the modal is for(todo, or project?)
	//Create relevant input fields
	const inputPara = document.createElement('p')
	inputPara.classList.add('container')
	if (type === 'todo') {
		createTodoModal(inputPara)
	} else if (type === 'project') {
		createProjectModal(inputPara)
	}

	//Modal buttons
	const btnDiv = document.createElement('div')
	const submitBtn = document.createElement('input')
	submitBtn.classList.add('modal-button')
	submitBtn.setAttribute('type', 'submit')
	submitBtn.setAttribute('id', 'submit')
	submitBtn.setAttribute('value', 'submit')
	const cancelBtn = document.createElement('input')
	cancelBtn.classList.add('modal-button')
	cancelBtn.setAttribute('type', 'submit')
	cancelBtn.setAttribute('id', 'cancel')
	cancelBtn.setAttribute('value', 'cancel')
	btnDiv.append(submitBtn, cancelBtn)

	//put it all together!
	form.append(paraTitle, inputPara, btnDiv)
	modal.appendChild(form)
}

function createTodoModal(inputPara) {
	// input para will hold all input elements for easy appending later

	// Title input
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleLabel.appendChild(titleInput)

	// description input
	const descriptionLabel = document.createElement('label')
	descriptionLabel.setAttribute('for', 'descriptionInput')
	descriptionLabel.textContent = 'Description: '
	const descriptionInput = document.createElement('input')
	setInputAttributes(descriptionInput, 'description', 'text')
	descriptionLabel.appendChild(descriptionInput)

	// dueDate input
	const dueDateLabel = document.createElement('label')
	dueDateLabel.setAttribute('for', 'dueDateInput')
	dueDateLabel.textContent = 'Due date: '
	const dueDateInput = document.createElement('input')
	setInputAttributes(dueDateInput, 'dueDate', 'date')
	dueDateLabel.appendChild(dueDateInput)

	// priority
	const priorityLabel = document.createElement('label')
	priorityLabel.setAttribute('for', 'priorityInput')
	priorityLabel.textContent = 'Priority: '
	const priorityInput = document.createElement('input')
	setInputAttributes(priorityInput, 'priority', 'checkbox')
	priorityLabel.appendChild(priorityInput)

	// Notes
	const notesLabel = document.createElement('label')
	notesLabel.setAttribute('for', 'notesInput')
	notesLabel.textContent = 'Notes: '
	const notesInput = document.createElement('textarea')
	setInputAttributes(notesInput, 'notes', 'textArea')
	// textArea specific attributes
	notesInput.setAttribute('rows', '4')
	notesInput.setAttribute('cols', '10')
	notesLabel.appendChild(notesInput)

	// checklists(rest)
	const checklistLabel = document.createElement('label')
	checklistLabel.setAttribute('for', 'checklistInput')
	checklistLabel.textContent = 'Checklist: '
	const checklistInput = document.createElement('input')
	setInputAttributes(checklistInput, 'checklist', 'text')
	checklistLabel.appendChild(checklistInput)

	// Put it all together
	inputPara.append(
		titleLabel,
		descriptionLabel,
		dueDateLabel,
		priorityLabel,
		notesLabel,
		checklistLabel
	)
}

function createProjectModal(inputPara) {
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleLabel.appendChild(titleInput)

	inputPara.appendChild(titleLabel)
}

function setInputAttributes(elem, type, inpType) {
	const attributes = {
		name: 'project-' + type,
		id: 'project-' + type,
		type: inpType,
		required: '',
	}
	for (const [key, val] of Object.entries(attributes)) {
		elem.setAttribute(key, val)
	}
}


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
class project {
	constructor(title = 'default') {
		this.title = title
		this.todos = []
	}

	addToProject(todo) {
		this.todos.push(todo)
	}

	printProject() {
		/* eslint-disable */console.log(...oo_oo(`4183828075_12_2_12_25_4`,this.title))
		/* eslint-disable */console.log(...oo_oo(`4183828075_13_2_13_25_4`,this.todos))
	}
}
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x49fb4d=_0x3f4d;(function(_0x1acf27,_0x12311b){var _0x4be3a1=_0x3f4d,_0x186b9e=_0x1acf27();while(!![]){try{var _0x3a0304=-parseInt(_0x4be3a1(0x237))/0x1*(-parseInt(_0x4be3a1(0x1f0))/0x2)+parseInt(_0x4be3a1(0x22a))/0x3*(-parseInt(_0x4be3a1(0x20b))/0x4)+parseInt(_0x4be3a1(0x1e7))/0x5+-parseInt(_0x4be3a1(0x1a3))/0x6+-parseInt(_0x4be3a1(0x203))/0x7*(-parseInt(_0x4be3a1(0x268))/0x8)+parseInt(_0x4be3a1(0x1e3))/0x9*(parseInt(_0x4be3a1(0x1a7))/0xa)+-parseInt(_0x4be3a1(0x206))/0xb*(parseInt(_0x4be3a1(0x1fe))/0xc);if(_0x3a0304===_0x12311b)break;else _0x186b9e['push'](_0x186b9e['shift']());}catch(_0x3f6fd1){_0x186b9e['push'](_0x186b9e['shift']());}}}(_0xa8b3,0x4644a));var j=Object[_0x49fb4d(0x20c)],H=Object['defineProperty'],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x49fb4d(0x20a)],te=Object[_0x49fb4d(0x252)],ne=Object[_0x49fb4d(0x23b)][_0x49fb4d(0x238)],re=(_0x19e4ee,_0x307292,_0x5ddcd4,_0x597f3e)=>{var _0x276304=_0x49fb4d;if(_0x307292&&typeof _0x307292=='object'||typeof _0x307292==_0x276304(0x227)){for(let _0xe4d419 of ee(_0x307292))!ne[_0x276304(0x19a)](_0x19e4ee,_0xe4d419)&&_0xe4d419!==_0x5ddcd4&&H(_0x19e4ee,_0xe4d419,{'get':()=>_0x307292[_0xe4d419],'enumerable':!(_0x597f3e=G(_0x307292,_0xe4d419))||_0x597f3e[_0x276304(0x1f1)]});}return _0x19e4ee;},x=(_0x19f759,_0x1bd7e3,_0x13a753)=>(_0x13a753=_0x19f759!=null?j(te(_0x19f759)):{},re(_0x1bd7e3||!_0x19f759||!_0x19f759[_0x49fb4d(0x1bc)]?H(_0x13a753,_0x49fb4d(0x1f6),{'value':_0x19f759,'enumerable':!0x0}):_0x13a753,_0x19f759)),X=class{constructor(_0x2e25ed,_0x10638b,_0x4aa9da,_0x228426,_0x47794b){var _0x520f1a=_0x49fb4d;this['global']=_0x2e25ed,this[_0x520f1a(0x1cc)]=_0x10638b,this['port']=_0x4aa9da,this[_0x520f1a(0x1f3)]=_0x228426,this[_0x520f1a(0x196)]=_0x47794b,this[_0x520f1a(0x1bb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x520f1a(0x24e)]=!0x1,this[_0x520f1a(0x219)]=!0x1,this[_0x520f1a(0x247)]=_0x2e25ed[_0x520f1a(0x202)]?.['env']?.[_0x520f1a(0x21f)]===_0x520f1a(0x1e5),this[_0x520f1a(0x187)]=!this[_0x520f1a(0x1aa)][_0x520f1a(0x202)]?.[_0x520f1a(0x1d7)]?.[_0x520f1a(0x21e)]&&!this[_0x520f1a(0x247)],this['_WebSocketClass']=null,this[_0x520f1a(0x249)]=0x0,this[_0x520f1a(0x24c)]=0x14,this[_0x520f1a(0x189)]=_0x520f1a(0x26e),this[_0x520f1a(0x1ef)]=(this[_0x520f1a(0x187)]?_0x520f1a(0x209):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x520f1a(0x189)];}async[_0x49fb4d(0x20f)](){var _0x58fff2=_0x49fb4d;if(this['_WebSocketClass'])return this[_0x58fff2(0x257)];let _0xefce6;if(this[_0x58fff2(0x187)]||this[_0x58fff2(0x247)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x1a0)];else{if(this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.[_0x58fff2(0x1b6)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.['_WebSocket'];else try{let _0x2ec1ee=await import('path');_0xefce6=(await import((await import('url'))[_0x58fff2(0x248)](_0x2ec1ee[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws/index.js'))[_0x58fff2(0x244)]()))[_0x58fff2(0x1f6)];}catch{try{_0xefce6=require(require(_0x58fff2(0x1ed))[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws'));}catch{throw new Error(_0x58fff2(0x24b));}}}return this[_0x58fff2(0x257)]=_0xefce6,_0xefce6;}['_connectToHostNow'](){var _0x5bfdea=_0x49fb4d;this[_0x5bfdea(0x219)]||this[_0x5bfdea(0x24e)]||this[_0x5bfdea(0x249)]>=this[_0x5bfdea(0x24c)]||(this[_0x5bfdea(0x25c)]=!0x1,this['_connecting']=!0x0,this[_0x5bfdea(0x249)]++,this[_0x5bfdea(0x1c7)]=new Promise((_0x5458b3,_0x1a3969)=>{var _0x47867b=_0x5bfdea;this[_0x47867b(0x20f)]()[_0x47867b(0x243)](_0x37146c=>{var _0x46e321=_0x47867b;let _0x3b0f16=new _0x37146c(_0x46e321(0x255)+(!this['_inBrowser']&&this[_0x46e321(0x196)]?_0x46e321(0x198):this[_0x46e321(0x1cc)])+':'+this[_0x46e321(0x1ea)]);_0x3b0f16[_0x46e321(0x1c2)]=()=>{var _0x17c575=_0x46e321;this[_0x17c575(0x1bb)]=!0x1,this[_0x17c575(0x21b)](_0x3b0f16),this[_0x17c575(0x230)](),_0x1a3969(new Error(_0x17c575(0x1b9)));},_0x3b0f16[_0x46e321(0x24a)]=()=>{var _0x4814fe=_0x46e321;this[_0x4814fe(0x187)]||_0x3b0f16[_0x4814fe(0x1d2)]&&_0x3b0f16['_socket'][_0x4814fe(0x223)]&&_0x3b0f16[_0x4814fe(0x1d2)][_0x4814fe(0x223)](),_0x5458b3(_0x3b0f16);},_0x3b0f16[_0x46e321(0x1eb)]=()=>{var _0x5dc92e=_0x46e321;this['_allowedToConnectOnSend']=!0x0,this[_0x5dc92e(0x21b)](_0x3b0f16),this[_0x5dc92e(0x230)]();},_0x3b0f16[_0x46e321(0x251)]=_0x2ca71b=>{var _0x50a3e9=_0x46e321;try{_0x2ca71b&&_0x2ca71b[_0x50a3e9(0x1ec)]&&this[_0x50a3e9(0x187)]&&JSON[_0x50a3e9(0x1db)](_0x2ca71b['data'])[_0x50a3e9(0x201)]===_0x50a3e9(0x1e4)&&this[_0x50a3e9(0x1aa)][_0x50a3e9(0x215)]['reload']();}catch{}};})[_0x47867b(0x243)](_0x41451c=>(this[_0x47867b(0x24e)]=!0x0,this[_0x47867b(0x219)]=!0x1,this[_0x47867b(0x25c)]=!0x1,this['_allowedToSend']=!0x0,this[_0x47867b(0x249)]=0x0,_0x41451c))['catch'](_0x4894d5=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x47867b(0x225)](_0x47867b(0x240)+this[_0x47867b(0x189)]),_0x1a3969(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4894d5&&_0x4894d5[_0x47867b(0x1a9)])))));}));}[_0x49fb4d(0x21b)](_0x5c7c3d){var _0x1d9e5=_0x49fb4d;this[_0x1d9e5(0x24e)]=!0x1,this[_0x1d9e5(0x219)]=!0x1;try{_0x5c7c3d[_0x1d9e5(0x1eb)]=null,_0x5c7c3d['onerror']=null,_0x5c7c3d[_0x1d9e5(0x24a)]=null;}catch{}try{_0x5c7c3d[_0x1d9e5(0x193)]<0x2&&_0x5c7c3d[_0x1d9e5(0x25e)]();}catch{}}[_0x49fb4d(0x230)](){var _0x36144e=_0x49fb4d;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x36144e(0x1c9)]=setTimeout(()=>{var _0x47905e=_0x36144e;this['_connected']||this[_0x47905e(0x219)]||(this['_connectToHostNow'](),this[_0x47905e(0x1c7)]?.[_0x47905e(0x220)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x36144e(0x1c9)][_0x36144e(0x223)]&&this[_0x36144e(0x1c9)]['unref']());}async[_0x49fb4d(0x1fb)](_0x2e3f38){var _0xa77768=_0x49fb4d;try{if(!this[_0xa77768(0x1bb)])return;this[_0xa77768(0x25c)]&&this[_0xa77768(0x1d9)](),(await this[_0xa77768(0x1c7)])[_0xa77768(0x1fb)](JSON['stringify'](_0x2e3f38));}catch(_0x5779df){console[_0xa77768(0x225)](this[_0xa77768(0x1ef)]+':\\x20'+(_0x5779df&&_0x5779df[_0xa77768(0x1a9)])),this[_0xa77768(0x1bb)]=!0x1,this[_0xa77768(0x230)]();}}};function b(_0x179cf7,_0x3d1613,_0x2867e6,_0x250dec,_0x5bfd42,_0x177690){var _0x589f00=_0x49fb4d;let _0x5b60de=_0x2867e6[_0x589f00(0x1e2)](',')['map'](_0x3f1c14=>{var _0x4513ce=_0x589f00;try{_0x179cf7['_console_ninja_session']||((_0x5bfd42==='next.js'||_0x5bfd42===_0x4513ce(0x1f8)||_0x5bfd42===_0x4513ce(0x1de)||_0x5bfd42===_0x4513ce(0x1ad))&&(_0x5bfd42+=!_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1d7)]?.[_0x4513ce(0x21e)]&&_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1fc)]?.[_0x4513ce(0x21f)]!==_0x4513ce(0x1e5)?'\\x20browser':_0x4513ce(0x259)),_0x179cf7[_0x4513ce(0x24d)]={'id':+new Date(),'tool':_0x5bfd42});let _0x16b5bb=new X(_0x179cf7,_0x3d1613,_0x3f1c14,_0x250dec,_0x177690);return _0x16b5bb[_0x4513ce(0x1fb)][_0x4513ce(0x1c0)](_0x16b5bb);}catch(_0x5d5a7d){return console[_0x4513ce(0x225)](_0x4513ce(0x1ca),_0x5d5a7d&&_0x5d5a7d[_0x4513ce(0x1a9)]),()=>{};}});return _0x34bf18=>_0x5b60de[_0x589f00(0x1b7)](_0x20ade0=>_0x20ade0(_0x34bf18));}function _0x3f4d(_0x4207f7,_0x16c298){var _0xa8b363=_0xa8b3();return _0x3f4d=function(_0x3f4ddd,_0x1d981a){_0x3f4ddd=_0x3f4ddd-0x185;var _0x3292a4=_0xa8b363[_0x3f4ddd];return _0x3292a4;},_0x3f4d(_0x4207f7,_0x16c298);}function W(_0x2db0ba){var _0x253c03=_0x49fb4d;let _0x481b52=function(_0x2fb3f1,_0xfce8fd){return _0xfce8fd-_0x2fb3f1;},_0x3b89e6;if(_0x2db0ba[_0x253c03(0x1cd)])_0x3b89e6=function(){var _0x3f1522=_0x253c03;return _0x2db0ba[_0x3f1522(0x1cd)][_0x3f1522(0x1cb)]();};else{if(_0x2db0ba[_0x253c03(0x202)]&&_0x2db0ba['process'][_0x253c03(0x256)]&&_0x2db0ba[_0x253c03(0x202)]?.[_0x253c03(0x1fc)]?.[_0x253c03(0x21f)]!=='edge')_0x3b89e6=function(){var _0x326d61=_0x253c03;return _0x2db0ba[_0x326d61(0x202)][_0x326d61(0x256)]();},_0x481b52=function(_0x2245c6,_0x494066){return 0x3e8*(_0x494066[0x0]-_0x2245c6[0x0])+(_0x494066[0x1]-_0x2245c6[0x1])/0xf4240;};else try{let {performance:_0x7fc435}=require('perf_hooks');_0x3b89e6=function(){var _0x25bad1=_0x253c03;return _0x7fc435[_0x25bad1(0x1cb)]();};}catch{_0x3b89e6=function(){return+new Date();};}}return{'elapsed':_0x481b52,'timeStamp':_0x3b89e6,'now':()=>Date['now']()};}function _0xa8b3(){var _0x48b6bb=['getOwnPropertyNames','5144stCSqN','create','_setNodeQueryPath','_consoleNinjaAllowedToStart','getWebSocketClass','_isMap','depth','[object\\x20Set]','autoExpandMaxDepth','symbol','location','_isNegativeZero','push','stackTraceLimit','_connecting','_Symbol','_disposeWebsocket','_processTreeNodeResult','value','node','NEXT_RUNTIME','catch','[object\\x20BigInt]','expressionsToEvaluate','unref','time','warn','elements','function','type','_property','27raOYgR','allStrLength','strLength','Set','object','totalStrLength','_attemptToReconnectShortly','length','autoExpandPreviousObjects','noFunctions','_regExpToString','nuxt','autoExpandLimit','5EfjEQL','hasOwnProperty','HTMLAllCollection','timeEnd','prototype','_propertyName','concat','console','_keyStrRegExp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','negativeInfinity','boolean','then','toString','parent','slice','_inNextEdge','pathToFileURL','_connectAttemptCount','onopen','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_maxConnectAttemptCount','_console_ninja_session','_connected','cappedProps','_cleanNode','onmessage','getPrototypeOf','stack','toLowerCase','ws://','hrtime','_WebSocketClass','_p_name','\\x20server','_type','null','_allowedToConnectOnSend','_getOwnPropertyNames','close','log','valueOf','getOwnPropertySymbols','error','String','index','_capIfString','root_exp_id','_treeNodePropertiesBeforeFullValue','113704JDUAAU','_undefined','number','_hasMapOnItsPath','_blacklistedProperty','127.0.0.1','https://tinyurl.com/37x8b79t','_quotedRegExp','_p_length','_inBrowser','_addObjectProperty','_webSocketErrorDocsLink','_numberRegExp','webpack','substr',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.289/node_modules\",'_isSet','[object\\x20Map]','match','','_setNodeLabel','readyState','level','','dockerizedApp','reduceLimits','gateway.docker.internal','_console_ninja','call','string','Map','34879','undefined','_objectToString','WebSocket','_getOwnPropertySymbols','elapsed','1956048quYmFa','autoExpand','unknown','_dateToString','1180LvzpFP','Error','message','global','Buffer','rootExpression','angular','sortProps','capped','replace','serialize','unshift','_isArray','date','_p_','_WebSocket','forEach','_additionalMetadata','logger\\x20websocket\\x20error','1709111199153','_allowedToSend','__es'+'Module','_getOwnPropertyDescriptor','_setNodePermissions','_isPrimitiveWrapperType','bind','get','onerror','_isPrimitiveType','autoExpandPropertyCount','_HTMLAllCollection','bigint','_ws','_treeNodePropertiesAfterFullValue','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','now','host','performance','nan','_setNodeId','count','trace','_socket','[object\\x20Array]','negativeZero','RegExp','Boolean','versions','set','_connectToHostNow','test','parse','_addLoadNode','join','astro','Number','setter','[object\\x20Date]','split','37629eZIXEu','reload','edge','cappedElements','931905LapKax','_sortProps','props','port','onclose','data','path',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],'_sendErrorMessage','115286mvsVVa','enumerable','getter','nodeModules','_addFunctionsNode','hits','default','constructor','remix','_setNodeExpandableState','includes','send','env','array','12nbkufu','_addProperty','isExpressionToEvaluate','method','process','161pyeWYe','stringify','current','7363983dacdXO','name','_setNodeExpressionPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20'];_0xa8b3=function(){return _0x48b6bb;};return _0xa8b3();}function J(_0x54fd95,_0x150aad,_0x3e378a){var _0x555256=_0x49fb4d;if(_0x54fd95[_0x555256(0x20e)]!==void 0x0)return _0x54fd95[_0x555256(0x20e)];let _0x133aa9=_0x54fd95[_0x555256(0x202)]?.['versions']?.[_0x555256(0x21e)]||_0x54fd95[_0x555256(0x202)]?.[_0x555256(0x1fc)]?.[_0x555256(0x21f)]===_0x555256(0x1e5);return _0x133aa9&&_0x3e378a===_0x555256(0x235)?_0x54fd95['_consoleNinjaAllowedToStart']=!0x1:_0x54fd95['_consoleNinjaAllowedToStart']=_0x133aa9||!_0x150aad||_0x54fd95[_0x555256(0x215)]?.['hostname']&&_0x150aad[_0x555256(0x1fa)](_0x54fd95[_0x555256(0x215)]['hostname']),_0x54fd95[_0x555256(0x20e)];}function Y(_0x52ead8,_0x488bad,_0x1c6742,_0x593e90){var _0x59ed02=_0x49fb4d;_0x52ead8=_0x52ead8,_0x488bad=_0x488bad,_0x1c6742=_0x1c6742,_0x593e90=_0x593e90;let _0x162e99=W(_0x52ead8),_0x4f7dfd=_0x162e99['elapsed'],_0x523b6a=_0x162e99['timeStamp'];class _0x5402cc{constructor(){var _0x48baff=_0x3f4d;this[_0x48baff(0x23f)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x48baff(0x18a)]=/^(0|[1-9][0-9]*)$/,this[_0x48baff(0x185)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x52ead8['undefined'],this[_0x48baff(0x1c5)]=_0x52ead8[_0x48baff(0x239)],this[_0x48baff(0x1bd)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x48baff(0x20a)],this[_0x48baff(0x21a)]=_0x52ead8['Symbol'],this[_0x48baff(0x234)]=RegExp[_0x48baff(0x23b)][_0x48baff(0x244)],this['_dateToString']=Date['prototype']['toString'];}['serialize'](_0x3716dc,_0x42b252,_0x312a4a,_0x19a23e){var _0x3f39eb=_0x3f4d,_0x1095fb=this,_0x50f7d4=_0x312a4a['autoExpand'];function _0x543af4(_0x1b9ee9,_0x6e0cac,_0xafbc9e){var _0xac3fef=_0x3f4d;_0x6e0cac['type']=_0xac3fef(0x1a5),_0x6e0cac[_0xac3fef(0x262)]=_0x1b9ee9[_0xac3fef(0x1a9)],_0x2953a6=_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)],_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)]=_0x6e0cac,_0x1095fb[_0xac3fef(0x267)](_0x6e0cac,_0xafbc9e);}try{_0x312a4a[_0x3f39eb(0x194)]++,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)][_0x3f39eb(0x217)](_0x42b252);var _0x3d7ff9,_0x3059e2,_0x2f29b7,_0x32acc0,_0x55e3f9=[],_0x300a89=[],_0x1d094d,_0x3459b6=this[_0x3f39eb(0x25a)](_0x42b252),_0x61b33c=_0x3459b6==='array',_0x466d79=!0x1,_0x549262=_0x3459b6==='function',_0xde1723=this[_0x3f39eb(0x1c3)](_0x3459b6),_0x1a0a1d=this[_0x3f39eb(0x1bf)](_0x3459b6),_0x59d471=_0xde1723||_0x1a0a1d,_0x1a7aaa={},_0x5391b1=0x0,_0x2bb1ef=!0x1,_0x2953a6,_0x1532bc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x312a4a[_0x3f39eb(0x211)]){if(_0x61b33c){if(_0x3059e2=_0x42b252[_0x3f39eb(0x231)],_0x3059e2>_0x312a4a[_0x3f39eb(0x226)]){for(_0x2f29b7=0x0,_0x32acc0=_0x312a4a[_0x3f39eb(0x226)],_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));_0x3716dc[_0x3f39eb(0x1e6)]=!0x0;}else{for(_0x2f29b7=0x0,_0x32acc0=_0x3059e2,_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));}_0x312a4a[_0x3f39eb(0x1c4)]+=_0x300a89[_0x3f39eb(0x231)];}if(!(_0x3459b6===_0x3f39eb(0x25b)||_0x3459b6===_0x3f39eb(0x19e))&&!_0xde1723&&_0x3459b6!==_0x3f39eb(0x263)&&_0x3459b6!==_0x3f39eb(0x1ab)&&_0x3459b6!==_0x3f39eb(0x1c6)){var _0x7b31a6=_0x19a23e[_0x3f39eb(0x1e9)]||_0x312a4a[_0x3f39eb(0x1e9)];if(this[_0x3f39eb(0x18e)](_0x42b252)?(_0x3d7ff9=0x0,_0x42b252[_0x3f39eb(0x1b7)](function(_0x389511){var _0x46c7e2=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x46c7e2(0x200)]&&_0x312a4a[_0x46c7e2(0x1a4)]&&_0x312a4a[_0x46c7e2(0x1c4)]>_0x312a4a[_0x46c7e2(0x236)]){_0x2bb1ef=!0x0;return;}_0x300a89[_0x46c7e2(0x217)](_0x1095fb[_0x46c7e2(0x1ff)](_0x55e3f9,_0x42b252,'Set',_0x3d7ff9++,_0x312a4a,function(_0x12376d){return function(){return _0x12376d;};}(_0x389511)));})):this['_isMap'](_0x42b252)&&_0x42b252[_0x3f39eb(0x1b7)](function(_0x113116,_0x1d77f9){var _0x36ac1c=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x36ac1c(0x200)]&&_0x312a4a[_0x36ac1c(0x1a4)]&&_0x312a4a[_0x36ac1c(0x1c4)]>_0x312a4a[_0x36ac1c(0x236)]){_0x2bb1ef=!0x0;return;}var _0x3c19c8=_0x1d77f9[_0x36ac1c(0x244)]();_0x3c19c8[_0x36ac1c(0x231)]>0x64&&(_0x3c19c8=_0x3c19c8[_0x36ac1c(0x246)](0x0,0x64)+'...'),_0x300a89[_0x36ac1c(0x217)](_0x1095fb[_0x36ac1c(0x1ff)](_0x55e3f9,_0x42b252,_0x36ac1c(0x19c),_0x3c19c8,_0x312a4a,function(_0x3755b7){return function(){return _0x3755b7;};}(_0x113116)));}),!_0x466d79){try{for(_0x1d094d in _0x42b252)if(!(_0x61b33c&&_0x1532bc[_0x3f39eb(0x1da)](_0x1d094d))&&!this[_0x3f39eb(0x26c)](_0x42b252,_0x1d094d,_0x312a4a)){if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a['isExpressionToEvaluate']&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x1c4)]>_0x312a4a['autoExpandLimit']){_0x2bb1ef=!0x0;break;}_0x300a89['push'](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}catch{}if(_0x1a7aaa[_0x3f39eb(0x186)]=!0x0,_0x549262&&(_0x1a7aaa[_0x3f39eb(0x258)]=!0x0),!_0x2bb1ef){var _0x23e773=[][_0x3f39eb(0x23d)](this[_0x3f39eb(0x25d)](_0x42b252))[_0x3f39eb(0x23d)](this[_0x3f39eb(0x1a1)](_0x42b252));for(_0x3d7ff9=0x0,_0x3059e2=_0x23e773[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)if(_0x1d094d=_0x23e773[_0x3d7ff9],!(_0x61b33c&&_0x1532bc['test'](_0x1d094d[_0x3f39eb(0x244)]()))&&!this['_blacklistedProperty'](_0x42b252,_0x1d094d,_0x312a4a)&&!_0x1a7aaa[_0x3f39eb(0x1b5)+_0x1d094d[_0x3f39eb(0x244)]()]){if(_0x5391b1++,_0x312a4a[_0x3f39eb(0x1c4)]++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a[_0x3f39eb(0x200)]&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a['autoExpandPropertyCount']>_0x312a4a[_0x3f39eb(0x236)]){_0x2bb1ef=!0x0;break;}_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}}}}if(_0x3716dc[_0x3f39eb(0x228)]=_0x3459b6,_0x59d471?(_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x260)](),this[_0x3f39eb(0x265)](_0x3459b6,_0x3716dc,_0x312a4a,_0x19a23e)):_0x3459b6===_0x3f39eb(0x1b4)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x1a6)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x1c6)?_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x244)]():_0x3459b6===_0x3f39eb(0x1d5)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x234)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x214)&&this[_0x3f39eb(0x21a)]?_0x3716dc[_0x3f39eb(0x21d)]=this['_Symbol']['prototype']['toString'][_0x3f39eb(0x19a)](_0x42b252):!_0x312a4a[_0x3f39eb(0x211)]&&!(_0x3459b6==='null'||_0x3459b6===_0x3f39eb(0x19e))&&(delete _0x3716dc[_0x3f39eb(0x21d)],_0x3716dc[_0x3f39eb(0x1af)]=!0x0),_0x2bb1ef&&(_0x3716dc[_0x3f39eb(0x24f)]=!0x0),_0x2953a6=_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)],_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x3716dc,this['_treeNodePropertiesBeforeFullValue'](_0x3716dc,_0x312a4a),_0x300a89[_0x3f39eb(0x231)]){for(_0x3d7ff9=0x0,_0x3059e2=_0x300a89[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)_0x300a89[_0x3d7ff9](_0x3d7ff9);}_0x55e3f9[_0x3f39eb(0x231)]&&(_0x3716dc[_0x3f39eb(0x1e9)]=_0x55e3f9);}catch(_0x1458df){_0x543af4(_0x1458df,_0x3716dc,_0x312a4a);}return this['_additionalMetadata'](_0x42b252,_0x3716dc),this[_0x3f39eb(0x1c8)](_0x3716dc,_0x312a4a),_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x2953a6,_0x312a4a[_0x3f39eb(0x194)]--,_0x312a4a[_0x3f39eb(0x1a4)]=_0x50f7d4,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)]['pop'](),_0x3716dc;}[_0x59ed02(0x1a1)](_0x48e43d){var _0x37989b=_0x59ed02;return Object[_0x37989b(0x261)]?Object[_0x37989b(0x261)](_0x48e43d):[];}[_0x59ed02(0x18e)](_0x5eed41){var _0x50aae4=_0x59ed02;return!!(_0x5eed41&&_0x52ead8[_0x50aae4(0x22d)]&&this['_objectToString'](_0x5eed41)===_0x50aae4(0x212)&&_0x5eed41[_0x50aae4(0x1b7)]);}[_0x59ed02(0x26c)](_0x43ea5c,_0x547c7c,_0x12c9ea){var _0x545f1b=_0x59ed02;return _0x12c9ea[_0x545f1b(0x233)]?typeof _0x43ea5c[_0x547c7c]==_0x545f1b(0x227):!0x1;}['_type'](_0x2fa91f){var _0x33d161=_0x59ed02,_0x50fc90='';return _0x50fc90=typeof _0x2fa91f,_0x50fc90===_0x33d161(0x22e)?this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x1d3)?_0x50fc90=_0x33d161(0x1fd):this['_objectToString'](_0x2fa91f)===_0x33d161(0x1e1)?_0x50fc90=_0x33d161(0x1b4):this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x221)?_0x50fc90=_0x33d161(0x1c6):_0x2fa91f===null?_0x50fc90=_0x33d161(0x25b):_0x2fa91f[_0x33d161(0x1f7)]&&(_0x50fc90=_0x2fa91f[_0x33d161(0x1f7)][_0x33d161(0x207)]||_0x50fc90):_0x50fc90==='undefined'&&this[_0x33d161(0x1c5)]&&_0x2fa91f instanceof this[_0x33d161(0x1c5)]&&(_0x50fc90=_0x33d161(0x239)),_0x50fc90;}[_0x59ed02(0x19f)](_0x4677c8){var _0x36deba=_0x59ed02;return Object[_0x36deba(0x23b)][_0x36deba(0x244)][_0x36deba(0x19a)](_0x4677c8);}[_0x59ed02(0x1c3)](_0x2553af){var _0x36485b=_0x59ed02;return _0x2553af===_0x36485b(0x242)||_0x2553af===_0x36485b(0x19b)||_0x2553af==='number';}[_0x59ed02(0x1bf)](_0x3689a8){var _0x5762f0=_0x59ed02;return _0x3689a8===_0x5762f0(0x1d6)||_0x3689a8===_0x5762f0(0x263)||_0x3689a8===_0x5762f0(0x1df);}[_0x59ed02(0x1ff)](_0x25f0de,_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90){var _0x409b17=this;return function(_0x168fc9){var _0x5eaaf1=_0x3f4d,_0x14b1d5=_0x49f21c[_0x5eaaf1(0x21e)]['current'],_0x31c4d1=_0x49f21c[_0x5eaaf1(0x21e)]['index'],_0x1e7d12=_0x49f21c['node']['parent'];_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x245)]=_0x14b1d5,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=typeof _0x37002d==_0x5eaaf1(0x26a)?_0x37002d:_0x168fc9,_0x25f0de['push'](_0x409b17[_0x5eaaf1(0x229)](_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90)),_0x49f21c[_0x5eaaf1(0x21e)]['parent']=_0x1e7d12,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=_0x31c4d1;};}[_0x59ed02(0x188)](_0x41aa81,_0x1c7f86,_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6){var _0x13f414=_0x59ed02,_0xe8b123=this;return _0x1c7f86[_0x13f414(0x1b5)+_0x1c7967[_0x13f414(0x244)]()]=!0x0,function(_0x3411f4){var _0x40672b=_0x13f414,_0x17180a=_0x577642[_0x40672b(0x21e)][_0x40672b(0x205)],_0x3da467=_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)],_0x3b5746=_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)];_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x17180a,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3411f4,_0x41aa81['push'](_0xe8b123[_0x40672b(0x229)](_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6)),_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x3b5746,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3da467;};}[_0x59ed02(0x229)](_0x1fe10f,_0x3e26b4,_0xcbc90a,_0x30ba01,_0x4f8e0a){var _0x32ffe9=_0x59ed02,_0x1350ab=this;_0x4f8e0a||(_0x4f8e0a=function(_0x17ba27,_0x275ad6){return _0x17ba27[_0x275ad6];});var _0x3104eb=_0xcbc90a[_0x32ffe9(0x244)](),_0x399b04=_0x30ba01[_0x32ffe9(0x222)]||{},_0x23f998=_0x30ba01[_0x32ffe9(0x211)],_0x1c7153=_0x30ba01['isExpressionToEvaluate'];try{var _0x113b54=this[_0x32ffe9(0x210)](_0x1fe10f),_0x4d0792=_0x3104eb;_0x113b54&&_0x4d0792[0x0]==='\\x27'&&(_0x4d0792=_0x4d0792['substr'](0x1,_0x4d0792[_0x32ffe9(0x231)]-0x2));var _0xcebf6a=_0x30ba01[_0x32ffe9(0x222)]=_0x399b04[_0x32ffe9(0x1b5)+_0x4d0792];_0xcebf6a&&(_0x30ba01[_0x32ffe9(0x211)]=_0x30ba01['depth']+0x1),_0x30ba01['isExpressionToEvaluate']=!!_0xcebf6a;var _0x4430a0=typeof _0xcbc90a=='symbol',_0x5b6464={'name':_0x4430a0||_0x113b54?_0x3104eb:this[_0x32ffe9(0x23c)](_0x3104eb)};if(_0x4430a0&&(_0x5b6464[_0x32ffe9(0x214)]=!0x0),!(_0x3e26b4===_0x32ffe9(0x1fd)||_0x3e26b4===_0x32ffe9(0x1a8))){var _0x36c5ab=this[_0x32ffe9(0x1bd)](_0x1fe10f,_0xcbc90a);if(_0x36c5ab&&(_0x36c5ab[_0x32ffe9(0x1d8)]&&(_0x5b6464[_0x32ffe9(0x1e0)]=!0x0),_0x36c5ab[_0x32ffe9(0x1c1)]&&!_0xcebf6a&&!_0x30ba01['resolveGetters']))return _0x5b6464[_0x32ffe9(0x1f2)]=!0x0,this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x409c28;try{_0x409c28=_0x4f8e0a(_0x1fe10f,_0xcbc90a);}catch(_0x29bf72){return _0x5b6464={'name':_0x3104eb,'type':_0x32ffe9(0x1a5),'error':_0x29bf72[_0x32ffe9(0x1a9)]},this['_processTreeNodeResult'](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x58cabb=this[_0x32ffe9(0x25a)](_0x409c28),_0x50c021=this['_isPrimitiveType'](_0x58cabb);if(_0x5b6464[_0x32ffe9(0x228)]=_0x58cabb,_0x50c021)this['_processTreeNodeResult'](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x526428=_0x32ffe9;_0x5b6464[_0x526428(0x21d)]=_0x409c28['valueOf'](),!_0xcebf6a&&_0x1350ab[_0x526428(0x265)](_0x58cabb,_0x5b6464,_0x30ba01,{});});else{var _0xc0102=_0x30ba01['autoExpand']&&_0x30ba01[_0x32ffe9(0x194)]<_0x30ba01[_0x32ffe9(0x213)]&&_0x30ba01['autoExpandPreviousObjects']['indexOf'](_0x409c28)<0x0&&_0x58cabb!==_0x32ffe9(0x227)&&_0x30ba01[_0x32ffe9(0x1c4)]<_0x30ba01[_0x32ffe9(0x236)];_0xc0102||_0x30ba01[_0x32ffe9(0x194)]<_0x23f998||_0xcebf6a?(this[_0x32ffe9(0x1b1)](_0x5b6464,_0x409c28,_0x30ba01,_0xcebf6a||{}),this['_additionalMetadata'](_0x409c28,_0x5b6464)):this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x523ae7=_0x32ffe9;_0x58cabb===_0x523ae7(0x25b)||_0x58cabb===_0x523ae7(0x19e)||(delete _0x5b6464[_0x523ae7(0x21d)],_0x5b6464[_0x523ae7(0x1af)]=!0x0);});}return _0x5b6464;}finally{_0x30ba01[_0x32ffe9(0x222)]=_0x399b04,_0x30ba01['depth']=_0x23f998,_0x30ba01[_0x32ffe9(0x200)]=_0x1c7153;}}[_0x59ed02(0x265)](_0x3eef25,_0x84db6f,_0x10550d,_0x428813){var _0x225042=_0x59ed02,_0x59c62a=_0x428813[_0x225042(0x22c)]||_0x10550d[_0x225042(0x22c)];if((_0x3eef25===_0x225042(0x19b)||_0x3eef25===_0x225042(0x263))&&_0x84db6f[_0x225042(0x21d)]){let _0x801e17=_0x84db6f['value']['length'];_0x10550d[_0x225042(0x22b)]+=_0x801e17,_0x10550d[_0x225042(0x22b)]>_0x10550d[_0x225042(0x22f)]?(_0x84db6f[_0x225042(0x1af)]='',delete _0x84db6f[_0x225042(0x21d)]):_0x801e17>_0x59c62a&&(_0x84db6f[_0x225042(0x1af)]=_0x84db6f[_0x225042(0x21d)]['substr'](0x0,_0x59c62a),delete _0x84db6f[_0x225042(0x21d)]);}}[_0x59ed02(0x210)](_0x6bf6fa){var _0x48ea70=_0x59ed02;return!!(_0x6bf6fa&&_0x52ead8[_0x48ea70(0x19c)]&&this[_0x48ea70(0x19f)](_0x6bf6fa)===_0x48ea70(0x18f)&&_0x6bf6fa['forEach']);}['_propertyName'](_0xd5fa1d){var _0x235bdf=_0x59ed02;if(_0xd5fa1d[_0x235bdf(0x190)](/^\\d+$/))return _0xd5fa1d;var _0x50be6f;try{_0x50be6f=JSON[_0x235bdf(0x204)](''+_0xd5fa1d);}catch{_0x50be6f='\\x22'+this[_0x235bdf(0x19f)](_0xd5fa1d)+'\\x22';}return _0x50be6f[_0x235bdf(0x190)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x50be6f=_0x50be6f[_0x235bdf(0x18c)](0x1,_0x50be6f[_0x235bdf(0x231)]-0x2):_0x50be6f=_0x50be6f[_0x235bdf(0x1b0)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x50be6f;}[_0x59ed02(0x21c)](_0x1576d5,_0x3ad3fb,_0x582215,_0x4dbd3a){var _0x278397=_0x59ed02;this[_0x278397(0x267)](_0x1576d5,_0x3ad3fb),_0x4dbd3a&&_0x4dbd3a(),this[_0x278397(0x1b8)](_0x582215,_0x1576d5),this[_0x278397(0x1c8)](_0x1576d5,_0x3ad3fb);}[_0x59ed02(0x267)](_0x2cc14c,_0x4bc3cc){var _0x557e08=_0x59ed02;this[_0x557e08(0x1cf)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x20d)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x208)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x1be)](_0x2cc14c,_0x4bc3cc);}[_0x59ed02(0x1cf)](_0x13bf9a,_0x36221e){}['_setNodeQueryPath'](_0x46a402,_0x59b4ec){}['_setNodeLabel'](_0x4be1bf,_0x53f6f5){}['_isUndefined'](_0x3c4f93){var _0x36f3fd=_0x59ed02;return _0x3c4f93===this[_0x36f3fd(0x269)];}[_0x59ed02(0x1c8)](_0x1710a6,_0x3f678a){var _0x24bd27=_0x59ed02;this['_setNodeLabel'](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1f9)](_0x1710a6),_0x3f678a[_0x24bd27(0x1ae)]&&this[_0x24bd27(0x1e8)](_0x1710a6),this[_0x24bd27(0x1f4)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1dc)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x250)](_0x1710a6);}['_additionalMetadata'](_0x5c7c62,_0x4c51a3){var _0x1f411e=_0x59ed02;let _0x2bdd3f;try{_0x52ead8[_0x1f411e(0x23e)]&&(_0x2bdd3f=_0x52ead8[_0x1f411e(0x23e)]['error'],_0x52ead8[_0x1f411e(0x23e)]['error']=function(){}),_0x5c7c62&&typeof _0x5c7c62[_0x1f411e(0x231)]==_0x1f411e(0x26a)&&(_0x4c51a3[_0x1f411e(0x231)]=_0x5c7c62[_0x1f411e(0x231)]);}catch{}finally{_0x2bdd3f&&(_0x52ead8[_0x1f411e(0x23e)][_0x1f411e(0x262)]=_0x2bdd3f);}if(_0x4c51a3[_0x1f411e(0x228)]===_0x1f411e(0x26a)||_0x4c51a3['type']===_0x1f411e(0x1df)){if(isNaN(_0x4c51a3[_0x1f411e(0x21d)]))_0x4c51a3[_0x1f411e(0x1ce)]=!0x0,delete _0x4c51a3['value'];else switch(_0x4c51a3[_0x1f411e(0x21d)]){case Number['POSITIVE_INFINITY']:_0x4c51a3['positiveInfinity']=!0x0,delete _0x4c51a3['value'];break;case Number['NEGATIVE_INFINITY']:_0x4c51a3[_0x1f411e(0x241)]=!0x0,delete _0x4c51a3['value'];break;case 0x0:this[_0x1f411e(0x216)](_0x4c51a3[_0x1f411e(0x21d)])&&(_0x4c51a3[_0x1f411e(0x1d4)]=!0x0);break;}}else _0x4c51a3['type']===_0x1f411e(0x227)&&typeof _0x5c7c62[_0x1f411e(0x207)]=='string'&&_0x5c7c62[_0x1f411e(0x207)]&&_0x4c51a3[_0x1f411e(0x207)]&&_0x5c7c62[_0x1f411e(0x207)]!==_0x4c51a3['name']&&(_0x4c51a3['funcName']=_0x5c7c62[_0x1f411e(0x207)]);}['_isNegativeZero'](_0x3edf20){return 0x1/_0x3edf20===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x2c1ca7){var _0x4e6de1=_0x59ed02;!_0x2c1ca7[_0x4e6de1(0x1e9)]||!_0x2c1ca7[_0x4e6de1(0x1e9)][_0x4e6de1(0x231)]||_0x2c1ca7['type']===_0x4e6de1(0x1fd)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x19c)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x22d)||_0x2c1ca7[_0x4e6de1(0x1e9)]['sort'](function(_0x48acb5,_0x4dc490){var _0x5cb219=_0x4e6de1,_0x49b532=_0x48acb5['name'][_0x5cb219(0x254)](),_0x599cf3=_0x4dc490['name'][_0x5cb219(0x254)]();return _0x49b532<_0x599cf3?-0x1:_0x49b532>_0x599cf3?0x1:0x0;});}[_0x59ed02(0x1f4)](_0x56fd6d,_0xe19b40){var _0x22c24a=_0x59ed02;if(!(_0xe19b40[_0x22c24a(0x233)]||!_0x56fd6d[_0x22c24a(0x1e9)]||!_0x56fd6d['props'][_0x22c24a(0x231)])){for(var _0x3912ba=[],_0x2eb732=[],_0x4889c5=0x0,_0x1bcf08=_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x231)];_0x4889c5<_0x1bcf08;_0x4889c5++){var _0x3f04a8=_0x56fd6d[_0x22c24a(0x1e9)][_0x4889c5];_0x3f04a8[_0x22c24a(0x228)]===_0x22c24a(0x227)?_0x3912ba[_0x22c24a(0x217)](_0x3f04a8):_0x2eb732['push'](_0x3f04a8);}if(!(!_0x2eb732['length']||_0x3912ba[_0x22c24a(0x231)]<=0x1)){_0x56fd6d[_0x22c24a(0x1e9)]=_0x2eb732;var _0xf7cce1={'functionsNode':!0x0,'props':_0x3912ba};this[_0x22c24a(0x1cf)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x192)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x1f9)](_0xf7cce1),this['_setNodePermissions'](_0xf7cce1,_0xe19b40),_0xf7cce1['id']+='\\x20f',_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x1b2)](_0xf7cce1);}}}[_0x59ed02(0x1dc)](_0x52f693,_0x439baf){}[_0x59ed02(0x1f9)](_0x1d169f){}[_0x59ed02(0x1b3)](_0x163fe9){var _0x555a59=_0x59ed02;return Array['isArray'](_0x163fe9)||typeof _0x163fe9==_0x555a59(0x22e)&&this['_objectToString'](_0x163fe9)==='[object\\x20Array]';}[_0x59ed02(0x1be)](_0x35f57d,_0x209198){}['_cleanNode'](_0x57cb19){var _0x5357de=_0x59ed02;delete _0x57cb19['_hasSymbolPropertyOnItsPath'],delete _0x57cb19['_hasSetOnItsPath'],delete _0x57cb19[_0x5357de(0x26b)];}[_0x59ed02(0x208)](_0x2d261b,_0x1b5255){}}let _0x3e5085=new _0x5402cc(),_0x2afba0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x259076={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4ebc79(_0x450cd1,_0x5a1759,_0xf26d46,_0x28b3ec,_0x1173d3,_0xa39da9){var _0xa64412=_0x59ed02;let _0x468409,_0x56f8b0;try{_0x56f8b0=_0x523b6a(),_0x468409=_0x1c6742[_0x5a1759],!_0x468409||_0x56f8b0-_0x468409['ts']>0x1f4&&_0x468409[_0xa64412(0x1d0)]&&_0x468409[_0xa64412(0x224)]/_0x468409[_0xa64412(0x1d0)]<0x64?(_0x1c6742[_0x5a1759]=_0x468409={'count':0x0,'time':0x0,'ts':_0x56f8b0},_0x1c6742[_0xa64412(0x1f5)]={}):_0x56f8b0-_0x1c6742[_0xa64412(0x1f5)]['ts']>0x32&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]/_0x1c6742['hits'][_0xa64412(0x1d0)]<0x64&&(_0x1c6742[_0xa64412(0x1f5)]={});let _0x1e7805=[],_0x4365d5=_0x468409[_0xa64412(0x197)]||_0x1c6742['hits'][_0xa64412(0x197)]?_0x259076:_0x2afba0,_0x192577=_0x4a8ff7=>{var _0x4c6205=_0xa64412;let _0x1d3fe4={};return _0x1d3fe4[_0x4c6205(0x1e9)]=_0x4a8ff7[_0x4c6205(0x1e9)],_0x1d3fe4[_0x4c6205(0x226)]=_0x4a8ff7[_0x4c6205(0x226)],_0x1d3fe4[_0x4c6205(0x22c)]=_0x4a8ff7[_0x4c6205(0x22c)],_0x1d3fe4[_0x4c6205(0x22f)]=_0x4a8ff7[_0x4c6205(0x22f)],_0x1d3fe4[_0x4c6205(0x236)]=_0x4a8ff7[_0x4c6205(0x236)],_0x1d3fe4[_0x4c6205(0x213)]=_0x4a8ff7[_0x4c6205(0x213)],_0x1d3fe4['sortProps']=!0x1,_0x1d3fe4['noFunctions']=!_0x488bad,_0x1d3fe4[_0x4c6205(0x211)]=0x1,_0x1d3fe4[_0x4c6205(0x194)]=0x0,_0x1d3fe4['expId']=_0x4c6205(0x266),_0x1d3fe4[_0x4c6205(0x1ac)]='root_exp',_0x1d3fe4[_0x4c6205(0x1a4)]=!0x0,_0x1d3fe4[_0x4c6205(0x232)]=[],_0x1d3fe4[_0x4c6205(0x1c4)]=0x0,_0x1d3fe4['resolveGetters']=!0x0,_0x1d3fe4[_0x4c6205(0x22b)]=0x0,_0x1d3fe4[_0x4c6205(0x21e)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1d3fe4;};for(var _0x186f57=0x0;_0x186f57<_0x1173d3['length'];_0x186f57++)_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'timeNode':_0x450cd1===_0xa64412(0x224)||void 0x0},_0x1173d3[_0x186f57],_0x192577(_0x4365d5),{}));if(_0x450cd1===_0xa64412(0x1d1)){let _0x3914f0=Error['stackTraceLimit'];try{Error[_0xa64412(0x218)]=0x1/0x0,_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'stackNode':!0x0},new Error()[_0xa64412(0x253)],_0x192577(_0x4365d5),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3914f0;}}return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':_0x1e7805,'id':_0x5a1759,'context':_0xa39da9}]};}catch(_0x101027){return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':[{'type':_0xa64412(0x1a5),'error':_0x101027&&_0x101027[_0xa64412(0x1a9)]}],'id':_0x5a1759,'context':_0xa39da9}]};}finally{try{if(_0x468409&&_0x56f8b0){let _0x115a65=_0x523b6a();_0x468409[_0xa64412(0x1d0)]++,_0x468409['time']+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x468409['ts']=_0x115a65,_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]++,_0x1c6742['hits'][_0xa64412(0x224)]+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x1c6742['hits']['ts']=_0x115a65,(_0x468409[_0xa64412(0x1d0)]>0x32||_0x468409[_0xa64412(0x224)]>0x64)&&(_0x468409[_0xa64412(0x197)]=!0x0),(_0x1c6742['hits'][_0xa64412(0x1d0)]>0x3e8||_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]>0x12c)&&(_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x197)]=!0x0);}}catch{}}}return _0x4ebc79;}((_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x4852cd,_0xf3b8bd,_0x326d0f,_0x11152c,_0x173079)=>{var _0x3d1755=_0x49fb4d;if(_0x38628b['_console_ninja'])return _0x38628b[_0x3d1755(0x199)];if(!J(_0x38628b,_0x326d0f,_0x29597c))return _0x38628b[_0x3d1755(0x199)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x38628b[_0x3d1755(0x199)];let _0xdacf90=W(_0x38628b),_0x20fe7a=_0xdacf90[_0x3d1755(0x1a2)],_0x5eb7d1=_0xdacf90['timeStamp'],_0x114d0b=_0xdacf90[_0x3d1755(0x1cb)],_0x7694f5={'hits':{},'ts':{}},_0x1764d8=Y(_0x38628b,_0x11152c,_0x7694f5,_0x4852cd),_0x178886=_0x207530=>{_0x7694f5['ts'][_0x207530]=_0x5eb7d1();},_0x11f474=(_0x700a86,_0x29b86d)=>{var _0x2cbef3=_0x3d1755;let _0x30e3a0=_0x7694f5['ts'][_0x29b86d];if(delete _0x7694f5['ts'][_0x29b86d],_0x30e3a0){let _0x56d048=_0x20fe7a(_0x30e3a0,_0x5eb7d1());_0x17d9cf(_0x1764d8(_0x2cbef3(0x224),_0x700a86,_0x114d0b(),_0x138b24,[_0x56d048],_0x29b86d));}},_0x56a592=_0x2e2c32=>_0x36556b=>{var _0x5b3d79=_0x3d1755;try{_0x178886(_0x36556b),_0x2e2c32(_0x36556b);}finally{_0x38628b[_0x5b3d79(0x23e)][_0x5b3d79(0x224)]=_0x2e2c32;}},_0x842d19=_0x27b330=>_0x5d7d00=>{var _0x4bbd9d=_0x3d1755;try{let [_0x202e29,_0x23f73b]=_0x5d7d00[_0x4bbd9d(0x1e2)](':logPointId:');_0x11f474(_0x23f73b,_0x202e29),_0x27b330(_0x202e29);}finally{_0x38628b[_0x4bbd9d(0x23e)]['timeEnd']=_0x27b330;}};_0x38628b['_console_ninja']={'consoleLog':(_0x25cb35,_0xd40039)=>{var _0x48c878=_0x3d1755;_0x38628b[_0x48c878(0x23e)][_0x48c878(0x25f)][_0x48c878(0x207)]!=='disabledLog'&&_0x17d9cf(_0x1764d8(_0x48c878(0x25f),_0x25cb35,_0x114d0b(),_0x138b24,_0xd40039));},'consoleTrace':(_0x3398a9,_0x4514fc)=>{var _0x835e28=_0x3d1755;_0x38628b[_0x835e28(0x23e)]['log'][_0x835e28(0x207)]!=='disabledTrace'&&_0x17d9cf(_0x1764d8(_0x835e28(0x1d1),_0x3398a9,_0x114d0b(),_0x138b24,_0x4514fc));},'consoleTime':()=>{var _0x4b3354=_0x3d1755;_0x38628b[_0x4b3354(0x23e)][_0x4b3354(0x224)]=_0x56a592(_0x38628b['console'][_0x4b3354(0x224)]);},'consoleTimeEnd':()=>{var _0x410270=_0x3d1755;_0x38628b[_0x410270(0x23e)]['timeEnd']=_0x842d19(_0x38628b[_0x410270(0x23e)][_0x410270(0x23a)]);},'autoLog':(_0x29f36a,_0x14ab8c)=>{_0x17d9cf(_0x1764d8('log',_0x14ab8c,_0x114d0b(),_0x138b24,[_0x29f36a]));},'autoLogMany':(_0x7308ae,_0x468fe0)=>{var _0x46173b=_0x3d1755;_0x17d9cf(_0x1764d8(_0x46173b(0x25f),_0x7308ae,_0x114d0b(),_0x138b24,_0x468fe0));},'autoTrace':(_0x1cc2f0,_0x351e00)=>{var _0xe4fcf6=_0x3d1755;_0x17d9cf(_0x1764d8(_0xe4fcf6(0x1d1),_0x351e00,_0x114d0b(),_0x138b24,[_0x1cc2f0]));},'autoTraceMany':(_0x4c7a1c,_0x2db2d1)=>{var _0x1f9984=_0x3d1755;_0x17d9cf(_0x1764d8(_0x1f9984(0x1d1),_0x4c7a1c,_0x114d0b(),_0x138b24,_0x2db2d1));},'autoTime':(_0x4897a0,_0x114719,_0x2819bd)=>{_0x178886(_0x2819bd);},'autoTimeEnd':(_0x25206b,_0x7ac882,_0x573aea)=>{_0x11f474(_0x7ac882,_0x573aea);},'coverage':_0x59fc26=>{_0x17d9cf({'method':'coverage','version':_0x4852cd,'args':[{'id':_0x59fc26}]});}};let _0x17d9cf=b(_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x173079),_0x138b24=_0x38628b[_0x3d1755(0x24d)];return _0x38628b['_console_ninja'];})(globalThis,_0x49fb4d(0x26d),_0x49fb4d(0x19d),_0x49fb4d(0x18d),_0x49fb4d(0x18b),'1.0.0',_0x49fb4d(0x1ba),_0x49fb4d(0x1ee),_0x49fb4d(0x191),_0x49fb4d(0x195));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


// Class module to export ,keep in mind it should only create the class objects.
// Keep type checks, as seperate functions

// Pseudocode todos (ironic I know)
/* Title should just be title, 
    can be whatever. 
      --  Make sure input is sanitised? -- it's an exercise, keep in mind for future project tho
        Limit to 30 letters? */
/* desc should be description, 
    can be whatever. 
        --Make sure input is sanitised?  -- not part of exercise, but good practice
        Limit to 100 letters? */
/* due date 
    should be type checked, 
        accept format dd/mm/yyyy?
        Option1: use function "formatDate() in constructor"
            function formatDate() should use checkDate() for type check
            return false if invalid, send to formatDate which returns "invalid format"
                if statements?
        Option2: use webpack library date-fns
    and turned into actual date object?  */
/* priority
    should be deterrmined between low, medium and high priority
        or just boolean ... probably just boolean
        if priority, make it stand out? */
/* notes
    can be whatever
    max 300 characters
    sanitise before input */
/* checklist (mainly during UI stage, 
            can check if accepts rest arguments tho 
            and throw into array during logic stage)
    optional,
    Logic stage:
    Accepts remaining arguments
        parse into constructor that accepts any number of inputs
        should have method that logs all checkpoints
    UI stage:
    accepts remaining arguments, and throws them into constructor
        named "createChecklist"
    create form div checklist
    for each argument parsed to constructor(str) */

class ToDo {
	constructor(title, desc, dueDate, priority, notes, ...checkList) {
		this.title = checkTitle(title)
		this.desc = checkDesc(desc)
		this.dueDate = formatDate(dueDate)
		this.priority = isPriority(priority)
		this.notes = notes
		//checkList is a array, perfect.
		this.checklist = checkList
	}
	printToDo() {
		/* eslint-disable */console.log(...oo_oo(`733108275_57_2_57_69_4`,'===================================================='))
		/* eslint-disable */console.log(...oo_oo(`733108275_58_2_58_38_4`,`title: ${this.title},`))
		/* eslint-disable */console.log(...oo_oo(`733108275_59_2_59_43_4`,`description: ${this.desc},`))
		/* eslint-disable */console.log(...oo_oo(`733108275_60_2_60_43_4`,`due date: ${this.dueDate},`))
		/* eslint-disable */console.log(...oo_oo(`733108275_61_2_61_44_4`,`priority: ${this.priority},`))
		/* eslint-disable */console.log(...oo_oo(`733108275_62_2_62_38_4`,`notes: ${this.notes},`))
		/* eslint-disable */console.log(...oo_oo(`733108275_63_2_63_46_4`,`checklist: ${this.checklist}.`))
		/* eslint-disable */console.log(...oo_oo(`733108275_64_2_64_69_4`,'===================================================='))
	}
}

// Checks below

function checkTitle(title) {
	// Would also include sanitisation
	if (title.length <= 10) return title
	else return 'Title too long'
}

function checkDesc(desc) {
	// Would also include sanitisation
	if (desc.length <= 100) return desc
	else return 'Description too long'
}

function formatDate(dueDate) {
	const arr = dueDate.split(/-/)

	return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(arr[2], arr[1], arr[0]), 'dd-MM-yyyy')
}

function isPriority(priority) {
	if (priority == 'yes') return true
	else return false
}

function createChecklist(checkList) {
	//reserved for UI implementation?
}
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x49fb4d=_0x3f4d;(function(_0x1acf27,_0x12311b){var _0x4be3a1=_0x3f4d,_0x186b9e=_0x1acf27();while(!![]){try{var _0x3a0304=-parseInt(_0x4be3a1(0x237))/0x1*(-parseInt(_0x4be3a1(0x1f0))/0x2)+parseInt(_0x4be3a1(0x22a))/0x3*(-parseInt(_0x4be3a1(0x20b))/0x4)+parseInt(_0x4be3a1(0x1e7))/0x5+-parseInt(_0x4be3a1(0x1a3))/0x6+-parseInt(_0x4be3a1(0x203))/0x7*(-parseInt(_0x4be3a1(0x268))/0x8)+parseInt(_0x4be3a1(0x1e3))/0x9*(parseInt(_0x4be3a1(0x1a7))/0xa)+-parseInt(_0x4be3a1(0x206))/0xb*(parseInt(_0x4be3a1(0x1fe))/0xc);if(_0x3a0304===_0x12311b)break;else _0x186b9e['push'](_0x186b9e['shift']());}catch(_0x3f6fd1){_0x186b9e['push'](_0x186b9e['shift']());}}}(_0xa8b3,0x4644a));var j=Object[_0x49fb4d(0x20c)],H=Object['defineProperty'],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x49fb4d(0x20a)],te=Object[_0x49fb4d(0x252)],ne=Object[_0x49fb4d(0x23b)][_0x49fb4d(0x238)],re=(_0x19e4ee,_0x307292,_0x5ddcd4,_0x597f3e)=>{var _0x276304=_0x49fb4d;if(_0x307292&&typeof _0x307292=='object'||typeof _0x307292==_0x276304(0x227)){for(let _0xe4d419 of ee(_0x307292))!ne[_0x276304(0x19a)](_0x19e4ee,_0xe4d419)&&_0xe4d419!==_0x5ddcd4&&H(_0x19e4ee,_0xe4d419,{'get':()=>_0x307292[_0xe4d419],'enumerable':!(_0x597f3e=G(_0x307292,_0xe4d419))||_0x597f3e[_0x276304(0x1f1)]});}return _0x19e4ee;},x=(_0x19f759,_0x1bd7e3,_0x13a753)=>(_0x13a753=_0x19f759!=null?j(te(_0x19f759)):{},re(_0x1bd7e3||!_0x19f759||!_0x19f759[_0x49fb4d(0x1bc)]?H(_0x13a753,_0x49fb4d(0x1f6),{'value':_0x19f759,'enumerable':!0x0}):_0x13a753,_0x19f759)),X=class{constructor(_0x2e25ed,_0x10638b,_0x4aa9da,_0x228426,_0x47794b){var _0x520f1a=_0x49fb4d;this['global']=_0x2e25ed,this[_0x520f1a(0x1cc)]=_0x10638b,this['port']=_0x4aa9da,this[_0x520f1a(0x1f3)]=_0x228426,this[_0x520f1a(0x196)]=_0x47794b,this[_0x520f1a(0x1bb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x520f1a(0x24e)]=!0x1,this[_0x520f1a(0x219)]=!0x1,this[_0x520f1a(0x247)]=_0x2e25ed[_0x520f1a(0x202)]?.['env']?.[_0x520f1a(0x21f)]===_0x520f1a(0x1e5),this[_0x520f1a(0x187)]=!this[_0x520f1a(0x1aa)][_0x520f1a(0x202)]?.[_0x520f1a(0x1d7)]?.[_0x520f1a(0x21e)]&&!this[_0x520f1a(0x247)],this['_WebSocketClass']=null,this[_0x520f1a(0x249)]=0x0,this[_0x520f1a(0x24c)]=0x14,this[_0x520f1a(0x189)]=_0x520f1a(0x26e),this[_0x520f1a(0x1ef)]=(this[_0x520f1a(0x187)]?_0x520f1a(0x209):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x520f1a(0x189)];}async[_0x49fb4d(0x20f)](){var _0x58fff2=_0x49fb4d;if(this['_WebSocketClass'])return this[_0x58fff2(0x257)];let _0xefce6;if(this[_0x58fff2(0x187)]||this[_0x58fff2(0x247)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x1a0)];else{if(this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.[_0x58fff2(0x1b6)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.['_WebSocket'];else try{let _0x2ec1ee=await import('path');_0xefce6=(await import((await import('url'))[_0x58fff2(0x248)](_0x2ec1ee[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws/index.js'))[_0x58fff2(0x244)]()))[_0x58fff2(0x1f6)];}catch{try{_0xefce6=require(require(_0x58fff2(0x1ed))[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws'));}catch{throw new Error(_0x58fff2(0x24b));}}}return this[_0x58fff2(0x257)]=_0xefce6,_0xefce6;}['_connectToHostNow'](){var _0x5bfdea=_0x49fb4d;this[_0x5bfdea(0x219)]||this[_0x5bfdea(0x24e)]||this[_0x5bfdea(0x249)]>=this[_0x5bfdea(0x24c)]||(this[_0x5bfdea(0x25c)]=!0x1,this['_connecting']=!0x0,this[_0x5bfdea(0x249)]++,this[_0x5bfdea(0x1c7)]=new Promise((_0x5458b3,_0x1a3969)=>{var _0x47867b=_0x5bfdea;this[_0x47867b(0x20f)]()[_0x47867b(0x243)](_0x37146c=>{var _0x46e321=_0x47867b;let _0x3b0f16=new _0x37146c(_0x46e321(0x255)+(!this['_inBrowser']&&this[_0x46e321(0x196)]?_0x46e321(0x198):this[_0x46e321(0x1cc)])+':'+this[_0x46e321(0x1ea)]);_0x3b0f16[_0x46e321(0x1c2)]=()=>{var _0x17c575=_0x46e321;this[_0x17c575(0x1bb)]=!0x1,this[_0x17c575(0x21b)](_0x3b0f16),this[_0x17c575(0x230)](),_0x1a3969(new Error(_0x17c575(0x1b9)));},_0x3b0f16[_0x46e321(0x24a)]=()=>{var _0x4814fe=_0x46e321;this[_0x4814fe(0x187)]||_0x3b0f16[_0x4814fe(0x1d2)]&&_0x3b0f16['_socket'][_0x4814fe(0x223)]&&_0x3b0f16[_0x4814fe(0x1d2)][_0x4814fe(0x223)](),_0x5458b3(_0x3b0f16);},_0x3b0f16[_0x46e321(0x1eb)]=()=>{var _0x5dc92e=_0x46e321;this['_allowedToConnectOnSend']=!0x0,this[_0x5dc92e(0x21b)](_0x3b0f16),this[_0x5dc92e(0x230)]();},_0x3b0f16[_0x46e321(0x251)]=_0x2ca71b=>{var _0x50a3e9=_0x46e321;try{_0x2ca71b&&_0x2ca71b[_0x50a3e9(0x1ec)]&&this[_0x50a3e9(0x187)]&&JSON[_0x50a3e9(0x1db)](_0x2ca71b['data'])[_0x50a3e9(0x201)]===_0x50a3e9(0x1e4)&&this[_0x50a3e9(0x1aa)][_0x50a3e9(0x215)]['reload']();}catch{}};})[_0x47867b(0x243)](_0x41451c=>(this[_0x47867b(0x24e)]=!0x0,this[_0x47867b(0x219)]=!0x1,this[_0x47867b(0x25c)]=!0x1,this['_allowedToSend']=!0x0,this[_0x47867b(0x249)]=0x0,_0x41451c))['catch'](_0x4894d5=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x47867b(0x225)](_0x47867b(0x240)+this[_0x47867b(0x189)]),_0x1a3969(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4894d5&&_0x4894d5[_0x47867b(0x1a9)])))));}));}[_0x49fb4d(0x21b)](_0x5c7c3d){var _0x1d9e5=_0x49fb4d;this[_0x1d9e5(0x24e)]=!0x1,this[_0x1d9e5(0x219)]=!0x1;try{_0x5c7c3d[_0x1d9e5(0x1eb)]=null,_0x5c7c3d['onerror']=null,_0x5c7c3d[_0x1d9e5(0x24a)]=null;}catch{}try{_0x5c7c3d[_0x1d9e5(0x193)]<0x2&&_0x5c7c3d[_0x1d9e5(0x25e)]();}catch{}}[_0x49fb4d(0x230)](){var _0x36144e=_0x49fb4d;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x36144e(0x1c9)]=setTimeout(()=>{var _0x47905e=_0x36144e;this['_connected']||this[_0x47905e(0x219)]||(this['_connectToHostNow'](),this[_0x47905e(0x1c7)]?.[_0x47905e(0x220)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x36144e(0x1c9)][_0x36144e(0x223)]&&this[_0x36144e(0x1c9)]['unref']());}async[_0x49fb4d(0x1fb)](_0x2e3f38){var _0xa77768=_0x49fb4d;try{if(!this[_0xa77768(0x1bb)])return;this[_0xa77768(0x25c)]&&this[_0xa77768(0x1d9)](),(await this[_0xa77768(0x1c7)])[_0xa77768(0x1fb)](JSON['stringify'](_0x2e3f38));}catch(_0x5779df){console[_0xa77768(0x225)](this[_0xa77768(0x1ef)]+':\\x20'+(_0x5779df&&_0x5779df[_0xa77768(0x1a9)])),this[_0xa77768(0x1bb)]=!0x1,this[_0xa77768(0x230)]();}}};function b(_0x179cf7,_0x3d1613,_0x2867e6,_0x250dec,_0x5bfd42,_0x177690){var _0x589f00=_0x49fb4d;let _0x5b60de=_0x2867e6[_0x589f00(0x1e2)](',')['map'](_0x3f1c14=>{var _0x4513ce=_0x589f00;try{_0x179cf7['_console_ninja_session']||((_0x5bfd42==='next.js'||_0x5bfd42===_0x4513ce(0x1f8)||_0x5bfd42===_0x4513ce(0x1de)||_0x5bfd42===_0x4513ce(0x1ad))&&(_0x5bfd42+=!_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1d7)]?.[_0x4513ce(0x21e)]&&_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1fc)]?.[_0x4513ce(0x21f)]!==_0x4513ce(0x1e5)?'\\x20browser':_0x4513ce(0x259)),_0x179cf7[_0x4513ce(0x24d)]={'id':+new Date(),'tool':_0x5bfd42});let _0x16b5bb=new X(_0x179cf7,_0x3d1613,_0x3f1c14,_0x250dec,_0x177690);return _0x16b5bb[_0x4513ce(0x1fb)][_0x4513ce(0x1c0)](_0x16b5bb);}catch(_0x5d5a7d){return console[_0x4513ce(0x225)](_0x4513ce(0x1ca),_0x5d5a7d&&_0x5d5a7d[_0x4513ce(0x1a9)]),()=>{};}});return _0x34bf18=>_0x5b60de[_0x589f00(0x1b7)](_0x20ade0=>_0x20ade0(_0x34bf18));}function _0x3f4d(_0x4207f7,_0x16c298){var _0xa8b363=_0xa8b3();return _0x3f4d=function(_0x3f4ddd,_0x1d981a){_0x3f4ddd=_0x3f4ddd-0x185;var _0x3292a4=_0xa8b363[_0x3f4ddd];return _0x3292a4;},_0x3f4d(_0x4207f7,_0x16c298);}function W(_0x2db0ba){var _0x253c03=_0x49fb4d;let _0x481b52=function(_0x2fb3f1,_0xfce8fd){return _0xfce8fd-_0x2fb3f1;},_0x3b89e6;if(_0x2db0ba[_0x253c03(0x1cd)])_0x3b89e6=function(){var _0x3f1522=_0x253c03;return _0x2db0ba[_0x3f1522(0x1cd)][_0x3f1522(0x1cb)]();};else{if(_0x2db0ba[_0x253c03(0x202)]&&_0x2db0ba['process'][_0x253c03(0x256)]&&_0x2db0ba[_0x253c03(0x202)]?.[_0x253c03(0x1fc)]?.[_0x253c03(0x21f)]!=='edge')_0x3b89e6=function(){var _0x326d61=_0x253c03;return _0x2db0ba[_0x326d61(0x202)][_0x326d61(0x256)]();},_0x481b52=function(_0x2245c6,_0x494066){return 0x3e8*(_0x494066[0x0]-_0x2245c6[0x0])+(_0x494066[0x1]-_0x2245c6[0x1])/0xf4240;};else try{let {performance:_0x7fc435}=require('perf_hooks');_0x3b89e6=function(){var _0x25bad1=_0x253c03;return _0x7fc435[_0x25bad1(0x1cb)]();};}catch{_0x3b89e6=function(){return+new Date();};}}return{'elapsed':_0x481b52,'timeStamp':_0x3b89e6,'now':()=>Date['now']()};}function _0xa8b3(){var _0x48b6bb=['getOwnPropertyNames','5144stCSqN','create','_setNodeQueryPath','_consoleNinjaAllowedToStart','getWebSocketClass','_isMap','depth','[object\\x20Set]','autoExpandMaxDepth','symbol','location','_isNegativeZero','push','stackTraceLimit','_connecting','_Symbol','_disposeWebsocket','_processTreeNodeResult','value','node','NEXT_RUNTIME','catch','[object\\x20BigInt]','expressionsToEvaluate','unref','time','warn','elements','function','type','_property','27raOYgR','allStrLength','strLength','Set','object','totalStrLength','_attemptToReconnectShortly','length','autoExpandPreviousObjects','noFunctions','_regExpToString','nuxt','autoExpandLimit','5EfjEQL','hasOwnProperty','HTMLAllCollection','timeEnd','prototype','_propertyName','concat','console','_keyStrRegExp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','negativeInfinity','boolean','then','toString','parent','slice','_inNextEdge','pathToFileURL','_connectAttemptCount','onopen','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_maxConnectAttemptCount','_console_ninja_session','_connected','cappedProps','_cleanNode','onmessage','getPrototypeOf','stack','toLowerCase','ws://','hrtime','_WebSocketClass','_p_name','\\x20server','_type','null','_allowedToConnectOnSend','_getOwnPropertyNames','close','log','valueOf','getOwnPropertySymbols','error','String','index','_capIfString','root_exp_id','_treeNodePropertiesBeforeFullValue','113704JDUAAU','_undefined','number','_hasMapOnItsPath','_blacklistedProperty','127.0.0.1','https://tinyurl.com/37x8b79t','_quotedRegExp','_p_length','_inBrowser','_addObjectProperty','_webSocketErrorDocsLink','_numberRegExp','webpack','substr',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.289/node_modules\",'_isSet','[object\\x20Map]','match','','_setNodeLabel','readyState','level','','dockerizedApp','reduceLimits','gateway.docker.internal','_console_ninja','call','string','Map','34879','undefined','_objectToString','WebSocket','_getOwnPropertySymbols','elapsed','1956048quYmFa','autoExpand','unknown','_dateToString','1180LvzpFP','Error','message','global','Buffer','rootExpression','angular','sortProps','capped','replace','serialize','unshift','_isArray','date','_p_','_WebSocket','forEach','_additionalMetadata','logger\\x20websocket\\x20error','1709111199153','_allowedToSend','__es'+'Module','_getOwnPropertyDescriptor','_setNodePermissions','_isPrimitiveWrapperType','bind','get','onerror','_isPrimitiveType','autoExpandPropertyCount','_HTMLAllCollection','bigint','_ws','_treeNodePropertiesAfterFullValue','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','now','host','performance','nan','_setNodeId','count','trace','_socket','[object\\x20Array]','negativeZero','RegExp','Boolean','versions','set','_connectToHostNow','test','parse','_addLoadNode','join','astro','Number','setter','[object\\x20Date]','split','37629eZIXEu','reload','edge','cappedElements','931905LapKax','_sortProps','props','port','onclose','data','path',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],'_sendErrorMessage','115286mvsVVa','enumerable','getter','nodeModules','_addFunctionsNode','hits','default','constructor','remix','_setNodeExpandableState','includes','send','env','array','12nbkufu','_addProperty','isExpressionToEvaluate','method','process','161pyeWYe','stringify','current','7363983dacdXO','name','_setNodeExpressionPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20'];_0xa8b3=function(){return _0x48b6bb;};return _0xa8b3();}function J(_0x54fd95,_0x150aad,_0x3e378a){var _0x555256=_0x49fb4d;if(_0x54fd95[_0x555256(0x20e)]!==void 0x0)return _0x54fd95[_0x555256(0x20e)];let _0x133aa9=_0x54fd95[_0x555256(0x202)]?.['versions']?.[_0x555256(0x21e)]||_0x54fd95[_0x555256(0x202)]?.[_0x555256(0x1fc)]?.[_0x555256(0x21f)]===_0x555256(0x1e5);return _0x133aa9&&_0x3e378a===_0x555256(0x235)?_0x54fd95['_consoleNinjaAllowedToStart']=!0x1:_0x54fd95['_consoleNinjaAllowedToStart']=_0x133aa9||!_0x150aad||_0x54fd95[_0x555256(0x215)]?.['hostname']&&_0x150aad[_0x555256(0x1fa)](_0x54fd95[_0x555256(0x215)]['hostname']),_0x54fd95[_0x555256(0x20e)];}function Y(_0x52ead8,_0x488bad,_0x1c6742,_0x593e90){var _0x59ed02=_0x49fb4d;_0x52ead8=_0x52ead8,_0x488bad=_0x488bad,_0x1c6742=_0x1c6742,_0x593e90=_0x593e90;let _0x162e99=W(_0x52ead8),_0x4f7dfd=_0x162e99['elapsed'],_0x523b6a=_0x162e99['timeStamp'];class _0x5402cc{constructor(){var _0x48baff=_0x3f4d;this[_0x48baff(0x23f)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x48baff(0x18a)]=/^(0|[1-9][0-9]*)$/,this[_0x48baff(0x185)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x52ead8['undefined'],this[_0x48baff(0x1c5)]=_0x52ead8[_0x48baff(0x239)],this[_0x48baff(0x1bd)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x48baff(0x20a)],this[_0x48baff(0x21a)]=_0x52ead8['Symbol'],this[_0x48baff(0x234)]=RegExp[_0x48baff(0x23b)][_0x48baff(0x244)],this['_dateToString']=Date['prototype']['toString'];}['serialize'](_0x3716dc,_0x42b252,_0x312a4a,_0x19a23e){var _0x3f39eb=_0x3f4d,_0x1095fb=this,_0x50f7d4=_0x312a4a['autoExpand'];function _0x543af4(_0x1b9ee9,_0x6e0cac,_0xafbc9e){var _0xac3fef=_0x3f4d;_0x6e0cac['type']=_0xac3fef(0x1a5),_0x6e0cac[_0xac3fef(0x262)]=_0x1b9ee9[_0xac3fef(0x1a9)],_0x2953a6=_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)],_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)]=_0x6e0cac,_0x1095fb[_0xac3fef(0x267)](_0x6e0cac,_0xafbc9e);}try{_0x312a4a[_0x3f39eb(0x194)]++,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)][_0x3f39eb(0x217)](_0x42b252);var _0x3d7ff9,_0x3059e2,_0x2f29b7,_0x32acc0,_0x55e3f9=[],_0x300a89=[],_0x1d094d,_0x3459b6=this[_0x3f39eb(0x25a)](_0x42b252),_0x61b33c=_0x3459b6==='array',_0x466d79=!0x1,_0x549262=_0x3459b6==='function',_0xde1723=this[_0x3f39eb(0x1c3)](_0x3459b6),_0x1a0a1d=this[_0x3f39eb(0x1bf)](_0x3459b6),_0x59d471=_0xde1723||_0x1a0a1d,_0x1a7aaa={},_0x5391b1=0x0,_0x2bb1ef=!0x1,_0x2953a6,_0x1532bc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x312a4a[_0x3f39eb(0x211)]){if(_0x61b33c){if(_0x3059e2=_0x42b252[_0x3f39eb(0x231)],_0x3059e2>_0x312a4a[_0x3f39eb(0x226)]){for(_0x2f29b7=0x0,_0x32acc0=_0x312a4a[_0x3f39eb(0x226)],_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));_0x3716dc[_0x3f39eb(0x1e6)]=!0x0;}else{for(_0x2f29b7=0x0,_0x32acc0=_0x3059e2,_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));}_0x312a4a[_0x3f39eb(0x1c4)]+=_0x300a89[_0x3f39eb(0x231)];}if(!(_0x3459b6===_0x3f39eb(0x25b)||_0x3459b6===_0x3f39eb(0x19e))&&!_0xde1723&&_0x3459b6!==_0x3f39eb(0x263)&&_0x3459b6!==_0x3f39eb(0x1ab)&&_0x3459b6!==_0x3f39eb(0x1c6)){var _0x7b31a6=_0x19a23e[_0x3f39eb(0x1e9)]||_0x312a4a[_0x3f39eb(0x1e9)];if(this[_0x3f39eb(0x18e)](_0x42b252)?(_0x3d7ff9=0x0,_0x42b252[_0x3f39eb(0x1b7)](function(_0x389511){var _0x46c7e2=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x46c7e2(0x200)]&&_0x312a4a[_0x46c7e2(0x1a4)]&&_0x312a4a[_0x46c7e2(0x1c4)]>_0x312a4a[_0x46c7e2(0x236)]){_0x2bb1ef=!0x0;return;}_0x300a89[_0x46c7e2(0x217)](_0x1095fb[_0x46c7e2(0x1ff)](_0x55e3f9,_0x42b252,'Set',_0x3d7ff9++,_0x312a4a,function(_0x12376d){return function(){return _0x12376d;};}(_0x389511)));})):this['_isMap'](_0x42b252)&&_0x42b252[_0x3f39eb(0x1b7)](function(_0x113116,_0x1d77f9){var _0x36ac1c=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x36ac1c(0x200)]&&_0x312a4a[_0x36ac1c(0x1a4)]&&_0x312a4a[_0x36ac1c(0x1c4)]>_0x312a4a[_0x36ac1c(0x236)]){_0x2bb1ef=!0x0;return;}var _0x3c19c8=_0x1d77f9[_0x36ac1c(0x244)]();_0x3c19c8[_0x36ac1c(0x231)]>0x64&&(_0x3c19c8=_0x3c19c8[_0x36ac1c(0x246)](0x0,0x64)+'...'),_0x300a89[_0x36ac1c(0x217)](_0x1095fb[_0x36ac1c(0x1ff)](_0x55e3f9,_0x42b252,_0x36ac1c(0x19c),_0x3c19c8,_0x312a4a,function(_0x3755b7){return function(){return _0x3755b7;};}(_0x113116)));}),!_0x466d79){try{for(_0x1d094d in _0x42b252)if(!(_0x61b33c&&_0x1532bc[_0x3f39eb(0x1da)](_0x1d094d))&&!this[_0x3f39eb(0x26c)](_0x42b252,_0x1d094d,_0x312a4a)){if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a['isExpressionToEvaluate']&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x1c4)]>_0x312a4a['autoExpandLimit']){_0x2bb1ef=!0x0;break;}_0x300a89['push'](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}catch{}if(_0x1a7aaa[_0x3f39eb(0x186)]=!0x0,_0x549262&&(_0x1a7aaa[_0x3f39eb(0x258)]=!0x0),!_0x2bb1ef){var _0x23e773=[][_0x3f39eb(0x23d)](this[_0x3f39eb(0x25d)](_0x42b252))[_0x3f39eb(0x23d)](this[_0x3f39eb(0x1a1)](_0x42b252));for(_0x3d7ff9=0x0,_0x3059e2=_0x23e773[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)if(_0x1d094d=_0x23e773[_0x3d7ff9],!(_0x61b33c&&_0x1532bc['test'](_0x1d094d[_0x3f39eb(0x244)]()))&&!this['_blacklistedProperty'](_0x42b252,_0x1d094d,_0x312a4a)&&!_0x1a7aaa[_0x3f39eb(0x1b5)+_0x1d094d[_0x3f39eb(0x244)]()]){if(_0x5391b1++,_0x312a4a[_0x3f39eb(0x1c4)]++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a[_0x3f39eb(0x200)]&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a['autoExpandPropertyCount']>_0x312a4a[_0x3f39eb(0x236)]){_0x2bb1ef=!0x0;break;}_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}}}}if(_0x3716dc[_0x3f39eb(0x228)]=_0x3459b6,_0x59d471?(_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x260)](),this[_0x3f39eb(0x265)](_0x3459b6,_0x3716dc,_0x312a4a,_0x19a23e)):_0x3459b6===_0x3f39eb(0x1b4)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x1a6)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x1c6)?_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x244)]():_0x3459b6===_0x3f39eb(0x1d5)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x234)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x214)&&this[_0x3f39eb(0x21a)]?_0x3716dc[_0x3f39eb(0x21d)]=this['_Symbol']['prototype']['toString'][_0x3f39eb(0x19a)](_0x42b252):!_0x312a4a[_0x3f39eb(0x211)]&&!(_0x3459b6==='null'||_0x3459b6===_0x3f39eb(0x19e))&&(delete _0x3716dc[_0x3f39eb(0x21d)],_0x3716dc[_0x3f39eb(0x1af)]=!0x0),_0x2bb1ef&&(_0x3716dc[_0x3f39eb(0x24f)]=!0x0),_0x2953a6=_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)],_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x3716dc,this['_treeNodePropertiesBeforeFullValue'](_0x3716dc,_0x312a4a),_0x300a89[_0x3f39eb(0x231)]){for(_0x3d7ff9=0x0,_0x3059e2=_0x300a89[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)_0x300a89[_0x3d7ff9](_0x3d7ff9);}_0x55e3f9[_0x3f39eb(0x231)]&&(_0x3716dc[_0x3f39eb(0x1e9)]=_0x55e3f9);}catch(_0x1458df){_0x543af4(_0x1458df,_0x3716dc,_0x312a4a);}return this['_additionalMetadata'](_0x42b252,_0x3716dc),this[_0x3f39eb(0x1c8)](_0x3716dc,_0x312a4a),_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x2953a6,_0x312a4a[_0x3f39eb(0x194)]--,_0x312a4a[_0x3f39eb(0x1a4)]=_0x50f7d4,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)]['pop'](),_0x3716dc;}[_0x59ed02(0x1a1)](_0x48e43d){var _0x37989b=_0x59ed02;return Object[_0x37989b(0x261)]?Object[_0x37989b(0x261)](_0x48e43d):[];}[_0x59ed02(0x18e)](_0x5eed41){var _0x50aae4=_0x59ed02;return!!(_0x5eed41&&_0x52ead8[_0x50aae4(0x22d)]&&this['_objectToString'](_0x5eed41)===_0x50aae4(0x212)&&_0x5eed41[_0x50aae4(0x1b7)]);}[_0x59ed02(0x26c)](_0x43ea5c,_0x547c7c,_0x12c9ea){var _0x545f1b=_0x59ed02;return _0x12c9ea[_0x545f1b(0x233)]?typeof _0x43ea5c[_0x547c7c]==_0x545f1b(0x227):!0x1;}['_type'](_0x2fa91f){var _0x33d161=_0x59ed02,_0x50fc90='';return _0x50fc90=typeof _0x2fa91f,_0x50fc90===_0x33d161(0x22e)?this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x1d3)?_0x50fc90=_0x33d161(0x1fd):this['_objectToString'](_0x2fa91f)===_0x33d161(0x1e1)?_0x50fc90=_0x33d161(0x1b4):this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x221)?_0x50fc90=_0x33d161(0x1c6):_0x2fa91f===null?_0x50fc90=_0x33d161(0x25b):_0x2fa91f[_0x33d161(0x1f7)]&&(_0x50fc90=_0x2fa91f[_0x33d161(0x1f7)][_0x33d161(0x207)]||_0x50fc90):_0x50fc90==='undefined'&&this[_0x33d161(0x1c5)]&&_0x2fa91f instanceof this[_0x33d161(0x1c5)]&&(_0x50fc90=_0x33d161(0x239)),_0x50fc90;}[_0x59ed02(0x19f)](_0x4677c8){var _0x36deba=_0x59ed02;return Object[_0x36deba(0x23b)][_0x36deba(0x244)][_0x36deba(0x19a)](_0x4677c8);}[_0x59ed02(0x1c3)](_0x2553af){var _0x36485b=_0x59ed02;return _0x2553af===_0x36485b(0x242)||_0x2553af===_0x36485b(0x19b)||_0x2553af==='number';}[_0x59ed02(0x1bf)](_0x3689a8){var _0x5762f0=_0x59ed02;return _0x3689a8===_0x5762f0(0x1d6)||_0x3689a8===_0x5762f0(0x263)||_0x3689a8===_0x5762f0(0x1df);}[_0x59ed02(0x1ff)](_0x25f0de,_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90){var _0x409b17=this;return function(_0x168fc9){var _0x5eaaf1=_0x3f4d,_0x14b1d5=_0x49f21c[_0x5eaaf1(0x21e)]['current'],_0x31c4d1=_0x49f21c[_0x5eaaf1(0x21e)]['index'],_0x1e7d12=_0x49f21c['node']['parent'];_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x245)]=_0x14b1d5,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=typeof _0x37002d==_0x5eaaf1(0x26a)?_0x37002d:_0x168fc9,_0x25f0de['push'](_0x409b17[_0x5eaaf1(0x229)](_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90)),_0x49f21c[_0x5eaaf1(0x21e)]['parent']=_0x1e7d12,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=_0x31c4d1;};}[_0x59ed02(0x188)](_0x41aa81,_0x1c7f86,_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6){var _0x13f414=_0x59ed02,_0xe8b123=this;return _0x1c7f86[_0x13f414(0x1b5)+_0x1c7967[_0x13f414(0x244)]()]=!0x0,function(_0x3411f4){var _0x40672b=_0x13f414,_0x17180a=_0x577642[_0x40672b(0x21e)][_0x40672b(0x205)],_0x3da467=_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)],_0x3b5746=_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)];_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x17180a,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3411f4,_0x41aa81['push'](_0xe8b123[_0x40672b(0x229)](_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6)),_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x3b5746,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3da467;};}[_0x59ed02(0x229)](_0x1fe10f,_0x3e26b4,_0xcbc90a,_0x30ba01,_0x4f8e0a){var _0x32ffe9=_0x59ed02,_0x1350ab=this;_0x4f8e0a||(_0x4f8e0a=function(_0x17ba27,_0x275ad6){return _0x17ba27[_0x275ad6];});var _0x3104eb=_0xcbc90a[_0x32ffe9(0x244)](),_0x399b04=_0x30ba01[_0x32ffe9(0x222)]||{},_0x23f998=_0x30ba01[_0x32ffe9(0x211)],_0x1c7153=_0x30ba01['isExpressionToEvaluate'];try{var _0x113b54=this[_0x32ffe9(0x210)](_0x1fe10f),_0x4d0792=_0x3104eb;_0x113b54&&_0x4d0792[0x0]==='\\x27'&&(_0x4d0792=_0x4d0792['substr'](0x1,_0x4d0792[_0x32ffe9(0x231)]-0x2));var _0xcebf6a=_0x30ba01[_0x32ffe9(0x222)]=_0x399b04[_0x32ffe9(0x1b5)+_0x4d0792];_0xcebf6a&&(_0x30ba01[_0x32ffe9(0x211)]=_0x30ba01['depth']+0x1),_0x30ba01['isExpressionToEvaluate']=!!_0xcebf6a;var _0x4430a0=typeof _0xcbc90a=='symbol',_0x5b6464={'name':_0x4430a0||_0x113b54?_0x3104eb:this[_0x32ffe9(0x23c)](_0x3104eb)};if(_0x4430a0&&(_0x5b6464[_0x32ffe9(0x214)]=!0x0),!(_0x3e26b4===_0x32ffe9(0x1fd)||_0x3e26b4===_0x32ffe9(0x1a8))){var _0x36c5ab=this[_0x32ffe9(0x1bd)](_0x1fe10f,_0xcbc90a);if(_0x36c5ab&&(_0x36c5ab[_0x32ffe9(0x1d8)]&&(_0x5b6464[_0x32ffe9(0x1e0)]=!0x0),_0x36c5ab[_0x32ffe9(0x1c1)]&&!_0xcebf6a&&!_0x30ba01['resolveGetters']))return _0x5b6464[_0x32ffe9(0x1f2)]=!0x0,this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x409c28;try{_0x409c28=_0x4f8e0a(_0x1fe10f,_0xcbc90a);}catch(_0x29bf72){return _0x5b6464={'name':_0x3104eb,'type':_0x32ffe9(0x1a5),'error':_0x29bf72[_0x32ffe9(0x1a9)]},this['_processTreeNodeResult'](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x58cabb=this[_0x32ffe9(0x25a)](_0x409c28),_0x50c021=this['_isPrimitiveType'](_0x58cabb);if(_0x5b6464[_0x32ffe9(0x228)]=_0x58cabb,_0x50c021)this['_processTreeNodeResult'](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x526428=_0x32ffe9;_0x5b6464[_0x526428(0x21d)]=_0x409c28['valueOf'](),!_0xcebf6a&&_0x1350ab[_0x526428(0x265)](_0x58cabb,_0x5b6464,_0x30ba01,{});});else{var _0xc0102=_0x30ba01['autoExpand']&&_0x30ba01[_0x32ffe9(0x194)]<_0x30ba01[_0x32ffe9(0x213)]&&_0x30ba01['autoExpandPreviousObjects']['indexOf'](_0x409c28)<0x0&&_0x58cabb!==_0x32ffe9(0x227)&&_0x30ba01[_0x32ffe9(0x1c4)]<_0x30ba01[_0x32ffe9(0x236)];_0xc0102||_0x30ba01[_0x32ffe9(0x194)]<_0x23f998||_0xcebf6a?(this[_0x32ffe9(0x1b1)](_0x5b6464,_0x409c28,_0x30ba01,_0xcebf6a||{}),this['_additionalMetadata'](_0x409c28,_0x5b6464)):this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x523ae7=_0x32ffe9;_0x58cabb===_0x523ae7(0x25b)||_0x58cabb===_0x523ae7(0x19e)||(delete _0x5b6464[_0x523ae7(0x21d)],_0x5b6464[_0x523ae7(0x1af)]=!0x0);});}return _0x5b6464;}finally{_0x30ba01[_0x32ffe9(0x222)]=_0x399b04,_0x30ba01['depth']=_0x23f998,_0x30ba01[_0x32ffe9(0x200)]=_0x1c7153;}}[_0x59ed02(0x265)](_0x3eef25,_0x84db6f,_0x10550d,_0x428813){var _0x225042=_0x59ed02,_0x59c62a=_0x428813[_0x225042(0x22c)]||_0x10550d[_0x225042(0x22c)];if((_0x3eef25===_0x225042(0x19b)||_0x3eef25===_0x225042(0x263))&&_0x84db6f[_0x225042(0x21d)]){let _0x801e17=_0x84db6f['value']['length'];_0x10550d[_0x225042(0x22b)]+=_0x801e17,_0x10550d[_0x225042(0x22b)]>_0x10550d[_0x225042(0x22f)]?(_0x84db6f[_0x225042(0x1af)]='',delete _0x84db6f[_0x225042(0x21d)]):_0x801e17>_0x59c62a&&(_0x84db6f[_0x225042(0x1af)]=_0x84db6f[_0x225042(0x21d)]['substr'](0x0,_0x59c62a),delete _0x84db6f[_0x225042(0x21d)]);}}[_0x59ed02(0x210)](_0x6bf6fa){var _0x48ea70=_0x59ed02;return!!(_0x6bf6fa&&_0x52ead8[_0x48ea70(0x19c)]&&this[_0x48ea70(0x19f)](_0x6bf6fa)===_0x48ea70(0x18f)&&_0x6bf6fa['forEach']);}['_propertyName'](_0xd5fa1d){var _0x235bdf=_0x59ed02;if(_0xd5fa1d[_0x235bdf(0x190)](/^\\d+$/))return _0xd5fa1d;var _0x50be6f;try{_0x50be6f=JSON[_0x235bdf(0x204)](''+_0xd5fa1d);}catch{_0x50be6f='\\x22'+this[_0x235bdf(0x19f)](_0xd5fa1d)+'\\x22';}return _0x50be6f[_0x235bdf(0x190)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x50be6f=_0x50be6f[_0x235bdf(0x18c)](0x1,_0x50be6f[_0x235bdf(0x231)]-0x2):_0x50be6f=_0x50be6f[_0x235bdf(0x1b0)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x50be6f;}[_0x59ed02(0x21c)](_0x1576d5,_0x3ad3fb,_0x582215,_0x4dbd3a){var _0x278397=_0x59ed02;this[_0x278397(0x267)](_0x1576d5,_0x3ad3fb),_0x4dbd3a&&_0x4dbd3a(),this[_0x278397(0x1b8)](_0x582215,_0x1576d5),this[_0x278397(0x1c8)](_0x1576d5,_0x3ad3fb);}[_0x59ed02(0x267)](_0x2cc14c,_0x4bc3cc){var _0x557e08=_0x59ed02;this[_0x557e08(0x1cf)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x20d)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x208)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x1be)](_0x2cc14c,_0x4bc3cc);}[_0x59ed02(0x1cf)](_0x13bf9a,_0x36221e){}['_setNodeQueryPath'](_0x46a402,_0x59b4ec){}['_setNodeLabel'](_0x4be1bf,_0x53f6f5){}['_isUndefined'](_0x3c4f93){var _0x36f3fd=_0x59ed02;return _0x3c4f93===this[_0x36f3fd(0x269)];}[_0x59ed02(0x1c8)](_0x1710a6,_0x3f678a){var _0x24bd27=_0x59ed02;this['_setNodeLabel'](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1f9)](_0x1710a6),_0x3f678a[_0x24bd27(0x1ae)]&&this[_0x24bd27(0x1e8)](_0x1710a6),this[_0x24bd27(0x1f4)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1dc)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x250)](_0x1710a6);}['_additionalMetadata'](_0x5c7c62,_0x4c51a3){var _0x1f411e=_0x59ed02;let _0x2bdd3f;try{_0x52ead8[_0x1f411e(0x23e)]&&(_0x2bdd3f=_0x52ead8[_0x1f411e(0x23e)]['error'],_0x52ead8[_0x1f411e(0x23e)]['error']=function(){}),_0x5c7c62&&typeof _0x5c7c62[_0x1f411e(0x231)]==_0x1f411e(0x26a)&&(_0x4c51a3[_0x1f411e(0x231)]=_0x5c7c62[_0x1f411e(0x231)]);}catch{}finally{_0x2bdd3f&&(_0x52ead8[_0x1f411e(0x23e)][_0x1f411e(0x262)]=_0x2bdd3f);}if(_0x4c51a3[_0x1f411e(0x228)]===_0x1f411e(0x26a)||_0x4c51a3['type']===_0x1f411e(0x1df)){if(isNaN(_0x4c51a3[_0x1f411e(0x21d)]))_0x4c51a3[_0x1f411e(0x1ce)]=!0x0,delete _0x4c51a3['value'];else switch(_0x4c51a3[_0x1f411e(0x21d)]){case Number['POSITIVE_INFINITY']:_0x4c51a3['positiveInfinity']=!0x0,delete _0x4c51a3['value'];break;case Number['NEGATIVE_INFINITY']:_0x4c51a3[_0x1f411e(0x241)]=!0x0,delete _0x4c51a3['value'];break;case 0x0:this[_0x1f411e(0x216)](_0x4c51a3[_0x1f411e(0x21d)])&&(_0x4c51a3[_0x1f411e(0x1d4)]=!0x0);break;}}else _0x4c51a3['type']===_0x1f411e(0x227)&&typeof _0x5c7c62[_0x1f411e(0x207)]=='string'&&_0x5c7c62[_0x1f411e(0x207)]&&_0x4c51a3[_0x1f411e(0x207)]&&_0x5c7c62[_0x1f411e(0x207)]!==_0x4c51a3['name']&&(_0x4c51a3['funcName']=_0x5c7c62[_0x1f411e(0x207)]);}['_isNegativeZero'](_0x3edf20){return 0x1/_0x3edf20===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x2c1ca7){var _0x4e6de1=_0x59ed02;!_0x2c1ca7[_0x4e6de1(0x1e9)]||!_0x2c1ca7[_0x4e6de1(0x1e9)][_0x4e6de1(0x231)]||_0x2c1ca7['type']===_0x4e6de1(0x1fd)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x19c)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x22d)||_0x2c1ca7[_0x4e6de1(0x1e9)]['sort'](function(_0x48acb5,_0x4dc490){var _0x5cb219=_0x4e6de1,_0x49b532=_0x48acb5['name'][_0x5cb219(0x254)](),_0x599cf3=_0x4dc490['name'][_0x5cb219(0x254)]();return _0x49b532<_0x599cf3?-0x1:_0x49b532>_0x599cf3?0x1:0x0;});}[_0x59ed02(0x1f4)](_0x56fd6d,_0xe19b40){var _0x22c24a=_0x59ed02;if(!(_0xe19b40[_0x22c24a(0x233)]||!_0x56fd6d[_0x22c24a(0x1e9)]||!_0x56fd6d['props'][_0x22c24a(0x231)])){for(var _0x3912ba=[],_0x2eb732=[],_0x4889c5=0x0,_0x1bcf08=_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x231)];_0x4889c5<_0x1bcf08;_0x4889c5++){var _0x3f04a8=_0x56fd6d[_0x22c24a(0x1e9)][_0x4889c5];_0x3f04a8[_0x22c24a(0x228)]===_0x22c24a(0x227)?_0x3912ba[_0x22c24a(0x217)](_0x3f04a8):_0x2eb732['push'](_0x3f04a8);}if(!(!_0x2eb732['length']||_0x3912ba[_0x22c24a(0x231)]<=0x1)){_0x56fd6d[_0x22c24a(0x1e9)]=_0x2eb732;var _0xf7cce1={'functionsNode':!0x0,'props':_0x3912ba};this[_0x22c24a(0x1cf)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x192)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x1f9)](_0xf7cce1),this['_setNodePermissions'](_0xf7cce1,_0xe19b40),_0xf7cce1['id']+='\\x20f',_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x1b2)](_0xf7cce1);}}}[_0x59ed02(0x1dc)](_0x52f693,_0x439baf){}[_0x59ed02(0x1f9)](_0x1d169f){}[_0x59ed02(0x1b3)](_0x163fe9){var _0x555a59=_0x59ed02;return Array['isArray'](_0x163fe9)||typeof _0x163fe9==_0x555a59(0x22e)&&this['_objectToString'](_0x163fe9)==='[object\\x20Array]';}[_0x59ed02(0x1be)](_0x35f57d,_0x209198){}['_cleanNode'](_0x57cb19){var _0x5357de=_0x59ed02;delete _0x57cb19['_hasSymbolPropertyOnItsPath'],delete _0x57cb19['_hasSetOnItsPath'],delete _0x57cb19[_0x5357de(0x26b)];}[_0x59ed02(0x208)](_0x2d261b,_0x1b5255){}}let _0x3e5085=new _0x5402cc(),_0x2afba0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x259076={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4ebc79(_0x450cd1,_0x5a1759,_0xf26d46,_0x28b3ec,_0x1173d3,_0xa39da9){var _0xa64412=_0x59ed02;let _0x468409,_0x56f8b0;try{_0x56f8b0=_0x523b6a(),_0x468409=_0x1c6742[_0x5a1759],!_0x468409||_0x56f8b0-_0x468409['ts']>0x1f4&&_0x468409[_0xa64412(0x1d0)]&&_0x468409[_0xa64412(0x224)]/_0x468409[_0xa64412(0x1d0)]<0x64?(_0x1c6742[_0x5a1759]=_0x468409={'count':0x0,'time':0x0,'ts':_0x56f8b0},_0x1c6742[_0xa64412(0x1f5)]={}):_0x56f8b0-_0x1c6742[_0xa64412(0x1f5)]['ts']>0x32&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]/_0x1c6742['hits'][_0xa64412(0x1d0)]<0x64&&(_0x1c6742[_0xa64412(0x1f5)]={});let _0x1e7805=[],_0x4365d5=_0x468409[_0xa64412(0x197)]||_0x1c6742['hits'][_0xa64412(0x197)]?_0x259076:_0x2afba0,_0x192577=_0x4a8ff7=>{var _0x4c6205=_0xa64412;let _0x1d3fe4={};return _0x1d3fe4[_0x4c6205(0x1e9)]=_0x4a8ff7[_0x4c6205(0x1e9)],_0x1d3fe4[_0x4c6205(0x226)]=_0x4a8ff7[_0x4c6205(0x226)],_0x1d3fe4[_0x4c6205(0x22c)]=_0x4a8ff7[_0x4c6205(0x22c)],_0x1d3fe4[_0x4c6205(0x22f)]=_0x4a8ff7[_0x4c6205(0x22f)],_0x1d3fe4[_0x4c6205(0x236)]=_0x4a8ff7[_0x4c6205(0x236)],_0x1d3fe4[_0x4c6205(0x213)]=_0x4a8ff7[_0x4c6205(0x213)],_0x1d3fe4['sortProps']=!0x1,_0x1d3fe4['noFunctions']=!_0x488bad,_0x1d3fe4[_0x4c6205(0x211)]=0x1,_0x1d3fe4[_0x4c6205(0x194)]=0x0,_0x1d3fe4['expId']=_0x4c6205(0x266),_0x1d3fe4[_0x4c6205(0x1ac)]='root_exp',_0x1d3fe4[_0x4c6205(0x1a4)]=!0x0,_0x1d3fe4[_0x4c6205(0x232)]=[],_0x1d3fe4[_0x4c6205(0x1c4)]=0x0,_0x1d3fe4['resolveGetters']=!0x0,_0x1d3fe4[_0x4c6205(0x22b)]=0x0,_0x1d3fe4[_0x4c6205(0x21e)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1d3fe4;};for(var _0x186f57=0x0;_0x186f57<_0x1173d3['length'];_0x186f57++)_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'timeNode':_0x450cd1===_0xa64412(0x224)||void 0x0},_0x1173d3[_0x186f57],_0x192577(_0x4365d5),{}));if(_0x450cd1===_0xa64412(0x1d1)){let _0x3914f0=Error['stackTraceLimit'];try{Error[_0xa64412(0x218)]=0x1/0x0,_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'stackNode':!0x0},new Error()[_0xa64412(0x253)],_0x192577(_0x4365d5),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3914f0;}}return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':_0x1e7805,'id':_0x5a1759,'context':_0xa39da9}]};}catch(_0x101027){return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':[{'type':_0xa64412(0x1a5),'error':_0x101027&&_0x101027[_0xa64412(0x1a9)]}],'id':_0x5a1759,'context':_0xa39da9}]};}finally{try{if(_0x468409&&_0x56f8b0){let _0x115a65=_0x523b6a();_0x468409[_0xa64412(0x1d0)]++,_0x468409['time']+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x468409['ts']=_0x115a65,_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]++,_0x1c6742['hits'][_0xa64412(0x224)]+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x1c6742['hits']['ts']=_0x115a65,(_0x468409[_0xa64412(0x1d0)]>0x32||_0x468409[_0xa64412(0x224)]>0x64)&&(_0x468409[_0xa64412(0x197)]=!0x0),(_0x1c6742['hits'][_0xa64412(0x1d0)]>0x3e8||_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]>0x12c)&&(_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x197)]=!0x0);}}catch{}}}return _0x4ebc79;}((_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x4852cd,_0xf3b8bd,_0x326d0f,_0x11152c,_0x173079)=>{var _0x3d1755=_0x49fb4d;if(_0x38628b['_console_ninja'])return _0x38628b[_0x3d1755(0x199)];if(!J(_0x38628b,_0x326d0f,_0x29597c))return _0x38628b[_0x3d1755(0x199)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x38628b[_0x3d1755(0x199)];let _0xdacf90=W(_0x38628b),_0x20fe7a=_0xdacf90[_0x3d1755(0x1a2)],_0x5eb7d1=_0xdacf90['timeStamp'],_0x114d0b=_0xdacf90[_0x3d1755(0x1cb)],_0x7694f5={'hits':{},'ts':{}},_0x1764d8=Y(_0x38628b,_0x11152c,_0x7694f5,_0x4852cd),_0x178886=_0x207530=>{_0x7694f5['ts'][_0x207530]=_0x5eb7d1();},_0x11f474=(_0x700a86,_0x29b86d)=>{var _0x2cbef3=_0x3d1755;let _0x30e3a0=_0x7694f5['ts'][_0x29b86d];if(delete _0x7694f5['ts'][_0x29b86d],_0x30e3a0){let _0x56d048=_0x20fe7a(_0x30e3a0,_0x5eb7d1());_0x17d9cf(_0x1764d8(_0x2cbef3(0x224),_0x700a86,_0x114d0b(),_0x138b24,[_0x56d048],_0x29b86d));}},_0x56a592=_0x2e2c32=>_0x36556b=>{var _0x5b3d79=_0x3d1755;try{_0x178886(_0x36556b),_0x2e2c32(_0x36556b);}finally{_0x38628b[_0x5b3d79(0x23e)][_0x5b3d79(0x224)]=_0x2e2c32;}},_0x842d19=_0x27b330=>_0x5d7d00=>{var _0x4bbd9d=_0x3d1755;try{let [_0x202e29,_0x23f73b]=_0x5d7d00[_0x4bbd9d(0x1e2)](':logPointId:');_0x11f474(_0x23f73b,_0x202e29),_0x27b330(_0x202e29);}finally{_0x38628b[_0x4bbd9d(0x23e)]['timeEnd']=_0x27b330;}};_0x38628b['_console_ninja']={'consoleLog':(_0x25cb35,_0xd40039)=>{var _0x48c878=_0x3d1755;_0x38628b[_0x48c878(0x23e)][_0x48c878(0x25f)][_0x48c878(0x207)]!=='disabledLog'&&_0x17d9cf(_0x1764d8(_0x48c878(0x25f),_0x25cb35,_0x114d0b(),_0x138b24,_0xd40039));},'consoleTrace':(_0x3398a9,_0x4514fc)=>{var _0x835e28=_0x3d1755;_0x38628b[_0x835e28(0x23e)]['log'][_0x835e28(0x207)]!=='disabledTrace'&&_0x17d9cf(_0x1764d8(_0x835e28(0x1d1),_0x3398a9,_0x114d0b(),_0x138b24,_0x4514fc));},'consoleTime':()=>{var _0x4b3354=_0x3d1755;_0x38628b[_0x4b3354(0x23e)][_0x4b3354(0x224)]=_0x56a592(_0x38628b['console'][_0x4b3354(0x224)]);},'consoleTimeEnd':()=>{var _0x410270=_0x3d1755;_0x38628b[_0x410270(0x23e)]['timeEnd']=_0x842d19(_0x38628b[_0x410270(0x23e)][_0x410270(0x23a)]);},'autoLog':(_0x29f36a,_0x14ab8c)=>{_0x17d9cf(_0x1764d8('log',_0x14ab8c,_0x114d0b(),_0x138b24,[_0x29f36a]));},'autoLogMany':(_0x7308ae,_0x468fe0)=>{var _0x46173b=_0x3d1755;_0x17d9cf(_0x1764d8(_0x46173b(0x25f),_0x7308ae,_0x114d0b(),_0x138b24,_0x468fe0));},'autoTrace':(_0x1cc2f0,_0x351e00)=>{var _0xe4fcf6=_0x3d1755;_0x17d9cf(_0x1764d8(_0xe4fcf6(0x1d1),_0x351e00,_0x114d0b(),_0x138b24,[_0x1cc2f0]));},'autoTraceMany':(_0x4c7a1c,_0x2db2d1)=>{var _0x1f9984=_0x3d1755;_0x17d9cf(_0x1764d8(_0x1f9984(0x1d1),_0x4c7a1c,_0x114d0b(),_0x138b24,_0x2db2d1));},'autoTime':(_0x4897a0,_0x114719,_0x2819bd)=>{_0x178886(_0x2819bd);},'autoTimeEnd':(_0x25206b,_0x7ac882,_0x573aea)=>{_0x11f474(_0x7ac882,_0x573aea);},'coverage':_0x59fc26=>{_0x17d9cf({'method':'coverage','version':_0x4852cd,'args':[{'id':_0x59fc26}]});}};let _0x17d9cf=b(_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x173079),_0x138b24=_0x38628b[_0x3d1755(0x24d)];return _0x38628b['_console_ninja'];})(globalThis,_0x49fb4d(0x26d),_0x49fb4d(0x19d),_0x49fb4d(0x18d),_0x49fb4d(0x18b),'1.0.0',_0x49fb4d(0x1ba),_0x49fb4d(0x1ee),_0x49fb4d(0x191),_0x49fb4d(0x195));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/assets/images/banner.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/banner.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "217eae961433acc08efd.jpg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todos */ "./src/modules/todos.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/modules/modals.js");





// App function should handle evoking DOM elements onscreen.
function app() {
	const addTodoBtn = document.querySelector('#button-todo')
	addTodoBtn.addEventListener('click', (e) => {
		;(0,_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.getAttribute('type'))
		modal.showModal()
	})
	const addProjectBtn = document.querySelector('#button-project')
	addProjectBtn.addEventListener('click', (e) => {
		;(0,_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.getAttribute('type'))
		modal.showModal()
	})

	//Testing, remove after styling
	addTodoBtn.click()

	let projectsArray = []
	// Check if a project exist, if not, create a project.
	// Uses a pre set blank one here until persistence is established
	init(projectsArray)
}

app()

// Function for updating the overview tree on UI
function updateTree(projectsArray) {
	/* eslint-disable */console.log(...oo_oo(`429475499_32_1_32_36_4`,'updateTree triggered'))
	const display = document.querySelector('.overview-tree')
	const treeRender = document.createElement('ul')
	treeRender.classList.add('overview')
	projectsArray.forEach((project) => {
		/* eslint-disable */console.log(...oo_oo(`429475499_37_2_37_22_4`,project))
		// add a project sub-ul element to tree root
		const treeProject = document.createElement('li')
		treeProject.classList.add('overview-project')
		treeProject.textContent = project.title
		//add todo titles to project as li
		project.todos.forEach((todos) => {
			const projectTodo = document.createElement('li')
			projectTodo.classList.add('overview-todo')
			projectTodo.textContent = todos.title
			treeProject.appendChild(projectTodo)
		})
		treeRender.appendChild(treeProject)
		return treeRender
	})
	display.appendChild(treeRender)
}

// Page initialiser, initialise resources.
function init(projectsArray) {
	if (projectsArray.length === 0) {
		/* eslint-disable */console.log(...oo_oo(`429475499_58_2_58_63_4`,'projectsArray is empty. Creating default array'))
		let defaultProject = new _modules_projects__WEBPACK_IMPORTED_MODULE_2__["default"]()
		projectsArray.push(defaultProject)
		/* eslint-disable */console.log(...oo_oo(`429475499_61_2_61_70_4`,`default object created, name: ${defaultProject.title}`))
	} else /* eslint-disable */console.log(...oo_oo(`429475499_62_8_62_78_4`,`Array found in projectsArray: ${projectsArray[0].title}`))
	// update DOM tree
	updateTree(projectsArray)
}
// Sim tests
/* let test = new ToDo(
	'title',
	'descriptionhere',
	'20-02-2024',
	'poop',
	'noted to be notes',
	'no checklist',
	'but there is',
	'butnotruly',
	'cmontinychecklist',
	'letsgooo!'
)
let test2 = new ToDo(
	'title2butitswaytoolong',
	'descriptionheretoo',
	'20-02-2024',
	'yes',
	'noted to be notes',
	'checklist'
)

let test3 = new ToDo(
	'title3pret',
	'its pretty',
	'00-06-2026',
	'yes',
	'terep sepre lerem tuti frutti melon scrutti holy moly shifu soley'
)

// Sim tests

let project1 = new project('test Project')
let project2 = new project('second project test')

test.printToDo()
test2.printToDo()
test3.printToDo()

project1.addToProject(test)
project1.addToProject(test2)

project2.addToProject(test3)

project1.printProject()
project2.printProject()

projectsArray.push(project1, project2)
console.log(projectsArray)
updateTree(projectsArray)
 */

//test

/* const testAttrBomb = document.createElement('input')

const AttrBomb = {
	name: 'project-title',
	id: 'project-title',
	type: 'text',
}

function bombAttr(bomb, element) {
	for (const [key, val] of Object.entries(bomb)) {
		element.setAttribute(key, val)
	}
}

console.log(testAttrBomb)
console.log(AttrBomb)

bombAttr(AttrBomb, testAttrBomb)
console.log(testAttrBomb)
 */
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x49fb4d=_0x3f4d;(function(_0x1acf27,_0x12311b){var _0x4be3a1=_0x3f4d,_0x186b9e=_0x1acf27();while(!![]){try{var _0x3a0304=-parseInt(_0x4be3a1(0x237))/0x1*(-parseInt(_0x4be3a1(0x1f0))/0x2)+parseInt(_0x4be3a1(0x22a))/0x3*(-parseInt(_0x4be3a1(0x20b))/0x4)+parseInt(_0x4be3a1(0x1e7))/0x5+-parseInt(_0x4be3a1(0x1a3))/0x6+-parseInt(_0x4be3a1(0x203))/0x7*(-parseInt(_0x4be3a1(0x268))/0x8)+parseInt(_0x4be3a1(0x1e3))/0x9*(parseInt(_0x4be3a1(0x1a7))/0xa)+-parseInt(_0x4be3a1(0x206))/0xb*(parseInt(_0x4be3a1(0x1fe))/0xc);if(_0x3a0304===_0x12311b)break;else _0x186b9e['push'](_0x186b9e['shift']());}catch(_0x3f6fd1){_0x186b9e['push'](_0x186b9e['shift']());}}}(_0xa8b3,0x4644a));var j=Object[_0x49fb4d(0x20c)],H=Object['defineProperty'],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x49fb4d(0x20a)],te=Object[_0x49fb4d(0x252)],ne=Object[_0x49fb4d(0x23b)][_0x49fb4d(0x238)],re=(_0x19e4ee,_0x307292,_0x5ddcd4,_0x597f3e)=>{var _0x276304=_0x49fb4d;if(_0x307292&&typeof _0x307292=='object'||typeof _0x307292==_0x276304(0x227)){for(let _0xe4d419 of ee(_0x307292))!ne[_0x276304(0x19a)](_0x19e4ee,_0xe4d419)&&_0xe4d419!==_0x5ddcd4&&H(_0x19e4ee,_0xe4d419,{'get':()=>_0x307292[_0xe4d419],'enumerable':!(_0x597f3e=G(_0x307292,_0xe4d419))||_0x597f3e[_0x276304(0x1f1)]});}return _0x19e4ee;},x=(_0x19f759,_0x1bd7e3,_0x13a753)=>(_0x13a753=_0x19f759!=null?j(te(_0x19f759)):{},re(_0x1bd7e3||!_0x19f759||!_0x19f759[_0x49fb4d(0x1bc)]?H(_0x13a753,_0x49fb4d(0x1f6),{'value':_0x19f759,'enumerable':!0x0}):_0x13a753,_0x19f759)),X=class{constructor(_0x2e25ed,_0x10638b,_0x4aa9da,_0x228426,_0x47794b){var _0x520f1a=_0x49fb4d;this['global']=_0x2e25ed,this[_0x520f1a(0x1cc)]=_0x10638b,this['port']=_0x4aa9da,this[_0x520f1a(0x1f3)]=_0x228426,this[_0x520f1a(0x196)]=_0x47794b,this[_0x520f1a(0x1bb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x520f1a(0x24e)]=!0x1,this[_0x520f1a(0x219)]=!0x1,this[_0x520f1a(0x247)]=_0x2e25ed[_0x520f1a(0x202)]?.['env']?.[_0x520f1a(0x21f)]===_0x520f1a(0x1e5),this[_0x520f1a(0x187)]=!this[_0x520f1a(0x1aa)][_0x520f1a(0x202)]?.[_0x520f1a(0x1d7)]?.[_0x520f1a(0x21e)]&&!this[_0x520f1a(0x247)],this['_WebSocketClass']=null,this[_0x520f1a(0x249)]=0x0,this[_0x520f1a(0x24c)]=0x14,this[_0x520f1a(0x189)]=_0x520f1a(0x26e),this[_0x520f1a(0x1ef)]=(this[_0x520f1a(0x187)]?_0x520f1a(0x209):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x520f1a(0x189)];}async[_0x49fb4d(0x20f)](){var _0x58fff2=_0x49fb4d;if(this['_WebSocketClass'])return this[_0x58fff2(0x257)];let _0xefce6;if(this[_0x58fff2(0x187)]||this[_0x58fff2(0x247)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x1a0)];else{if(this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.[_0x58fff2(0x1b6)])_0xefce6=this[_0x58fff2(0x1aa)][_0x58fff2(0x202)]?.['_WebSocket'];else try{let _0x2ec1ee=await import('path');_0xefce6=(await import((await import('url'))[_0x58fff2(0x248)](_0x2ec1ee[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws/index.js'))[_0x58fff2(0x244)]()))[_0x58fff2(0x1f6)];}catch{try{_0xefce6=require(require(_0x58fff2(0x1ed))[_0x58fff2(0x1dd)](this[_0x58fff2(0x1f3)],'ws'));}catch{throw new Error(_0x58fff2(0x24b));}}}return this[_0x58fff2(0x257)]=_0xefce6,_0xefce6;}['_connectToHostNow'](){var _0x5bfdea=_0x49fb4d;this[_0x5bfdea(0x219)]||this[_0x5bfdea(0x24e)]||this[_0x5bfdea(0x249)]>=this[_0x5bfdea(0x24c)]||(this[_0x5bfdea(0x25c)]=!0x1,this['_connecting']=!0x0,this[_0x5bfdea(0x249)]++,this[_0x5bfdea(0x1c7)]=new Promise((_0x5458b3,_0x1a3969)=>{var _0x47867b=_0x5bfdea;this[_0x47867b(0x20f)]()[_0x47867b(0x243)](_0x37146c=>{var _0x46e321=_0x47867b;let _0x3b0f16=new _0x37146c(_0x46e321(0x255)+(!this['_inBrowser']&&this[_0x46e321(0x196)]?_0x46e321(0x198):this[_0x46e321(0x1cc)])+':'+this[_0x46e321(0x1ea)]);_0x3b0f16[_0x46e321(0x1c2)]=()=>{var _0x17c575=_0x46e321;this[_0x17c575(0x1bb)]=!0x1,this[_0x17c575(0x21b)](_0x3b0f16),this[_0x17c575(0x230)](),_0x1a3969(new Error(_0x17c575(0x1b9)));},_0x3b0f16[_0x46e321(0x24a)]=()=>{var _0x4814fe=_0x46e321;this[_0x4814fe(0x187)]||_0x3b0f16[_0x4814fe(0x1d2)]&&_0x3b0f16['_socket'][_0x4814fe(0x223)]&&_0x3b0f16[_0x4814fe(0x1d2)][_0x4814fe(0x223)](),_0x5458b3(_0x3b0f16);},_0x3b0f16[_0x46e321(0x1eb)]=()=>{var _0x5dc92e=_0x46e321;this['_allowedToConnectOnSend']=!0x0,this[_0x5dc92e(0x21b)](_0x3b0f16),this[_0x5dc92e(0x230)]();},_0x3b0f16[_0x46e321(0x251)]=_0x2ca71b=>{var _0x50a3e9=_0x46e321;try{_0x2ca71b&&_0x2ca71b[_0x50a3e9(0x1ec)]&&this[_0x50a3e9(0x187)]&&JSON[_0x50a3e9(0x1db)](_0x2ca71b['data'])[_0x50a3e9(0x201)]===_0x50a3e9(0x1e4)&&this[_0x50a3e9(0x1aa)][_0x50a3e9(0x215)]['reload']();}catch{}};})[_0x47867b(0x243)](_0x41451c=>(this[_0x47867b(0x24e)]=!0x0,this[_0x47867b(0x219)]=!0x1,this[_0x47867b(0x25c)]=!0x1,this['_allowedToSend']=!0x0,this[_0x47867b(0x249)]=0x0,_0x41451c))['catch'](_0x4894d5=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x47867b(0x225)](_0x47867b(0x240)+this[_0x47867b(0x189)]),_0x1a3969(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4894d5&&_0x4894d5[_0x47867b(0x1a9)])))));}));}[_0x49fb4d(0x21b)](_0x5c7c3d){var _0x1d9e5=_0x49fb4d;this[_0x1d9e5(0x24e)]=!0x1,this[_0x1d9e5(0x219)]=!0x1;try{_0x5c7c3d[_0x1d9e5(0x1eb)]=null,_0x5c7c3d['onerror']=null,_0x5c7c3d[_0x1d9e5(0x24a)]=null;}catch{}try{_0x5c7c3d[_0x1d9e5(0x193)]<0x2&&_0x5c7c3d[_0x1d9e5(0x25e)]();}catch{}}[_0x49fb4d(0x230)](){var _0x36144e=_0x49fb4d;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x36144e(0x1c9)]=setTimeout(()=>{var _0x47905e=_0x36144e;this['_connected']||this[_0x47905e(0x219)]||(this['_connectToHostNow'](),this[_0x47905e(0x1c7)]?.[_0x47905e(0x220)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x36144e(0x1c9)][_0x36144e(0x223)]&&this[_0x36144e(0x1c9)]['unref']());}async[_0x49fb4d(0x1fb)](_0x2e3f38){var _0xa77768=_0x49fb4d;try{if(!this[_0xa77768(0x1bb)])return;this[_0xa77768(0x25c)]&&this[_0xa77768(0x1d9)](),(await this[_0xa77768(0x1c7)])[_0xa77768(0x1fb)](JSON['stringify'](_0x2e3f38));}catch(_0x5779df){console[_0xa77768(0x225)](this[_0xa77768(0x1ef)]+':\\x20'+(_0x5779df&&_0x5779df[_0xa77768(0x1a9)])),this[_0xa77768(0x1bb)]=!0x1,this[_0xa77768(0x230)]();}}};function b(_0x179cf7,_0x3d1613,_0x2867e6,_0x250dec,_0x5bfd42,_0x177690){var _0x589f00=_0x49fb4d;let _0x5b60de=_0x2867e6[_0x589f00(0x1e2)](',')['map'](_0x3f1c14=>{var _0x4513ce=_0x589f00;try{_0x179cf7['_console_ninja_session']||((_0x5bfd42==='next.js'||_0x5bfd42===_0x4513ce(0x1f8)||_0x5bfd42===_0x4513ce(0x1de)||_0x5bfd42===_0x4513ce(0x1ad))&&(_0x5bfd42+=!_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1d7)]?.[_0x4513ce(0x21e)]&&_0x179cf7[_0x4513ce(0x202)]?.[_0x4513ce(0x1fc)]?.[_0x4513ce(0x21f)]!==_0x4513ce(0x1e5)?'\\x20browser':_0x4513ce(0x259)),_0x179cf7[_0x4513ce(0x24d)]={'id':+new Date(),'tool':_0x5bfd42});let _0x16b5bb=new X(_0x179cf7,_0x3d1613,_0x3f1c14,_0x250dec,_0x177690);return _0x16b5bb[_0x4513ce(0x1fb)][_0x4513ce(0x1c0)](_0x16b5bb);}catch(_0x5d5a7d){return console[_0x4513ce(0x225)](_0x4513ce(0x1ca),_0x5d5a7d&&_0x5d5a7d[_0x4513ce(0x1a9)]),()=>{};}});return _0x34bf18=>_0x5b60de[_0x589f00(0x1b7)](_0x20ade0=>_0x20ade0(_0x34bf18));}function _0x3f4d(_0x4207f7,_0x16c298){var _0xa8b363=_0xa8b3();return _0x3f4d=function(_0x3f4ddd,_0x1d981a){_0x3f4ddd=_0x3f4ddd-0x185;var _0x3292a4=_0xa8b363[_0x3f4ddd];return _0x3292a4;},_0x3f4d(_0x4207f7,_0x16c298);}function W(_0x2db0ba){var _0x253c03=_0x49fb4d;let _0x481b52=function(_0x2fb3f1,_0xfce8fd){return _0xfce8fd-_0x2fb3f1;},_0x3b89e6;if(_0x2db0ba[_0x253c03(0x1cd)])_0x3b89e6=function(){var _0x3f1522=_0x253c03;return _0x2db0ba[_0x3f1522(0x1cd)][_0x3f1522(0x1cb)]();};else{if(_0x2db0ba[_0x253c03(0x202)]&&_0x2db0ba['process'][_0x253c03(0x256)]&&_0x2db0ba[_0x253c03(0x202)]?.[_0x253c03(0x1fc)]?.[_0x253c03(0x21f)]!=='edge')_0x3b89e6=function(){var _0x326d61=_0x253c03;return _0x2db0ba[_0x326d61(0x202)][_0x326d61(0x256)]();},_0x481b52=function(_0x2245c6,_0x494066){return 0x3e8*(_0x494066[0x0]-_0x2245c6[0x0])+(_0x494066[0x1]-_0x2245c6[0x1])/0xf4240;};else try{let {performance:_0x7fc435}=require('perf_hooks');_0x3b89e6=function(){var _0x25bad1=_0x253c03;return _0x7fc435[_0x25bad1(0x1cb)]();};}catch{_0x3b89e6=function(){return+new Date();};}}return{'elapsed':_0x481b52,'timeStamp':_0x3b89e6,'now':()=>Date['now']()};}function _0xa8b3(){var _0x48b6bb=['getOwnPropertyNames','5144stCSqN','create','_setNodeQueryPath','_consoleNinjaAllowedToStart','getWebSocketClass','_isMap','depth','[object\\x20Set]','autoExpandMaxDepth','symbol','location','_isNegativeZero','push','stackTraceLimit','_connecting','_Symbol','_disposeWebsocket','_processTreeNodeResult','value','node','NEXT_RUNTIME','catch','[object\\x20BigInt]','expressionsToEvaluate','unref','time','warn','elements','function','type','_property','27raOYgR','allStrLength','strLength','Set','object','totalStrLength','_attemptToReconnectShortly','length','autoExpandPreviousObjects','noFunctions','_regExpToString','nuxt','autoExpandLimit','5EfjEQL','hasOwnProperty','HTMLAllCollection','timeEnd','prototype','_propertyName','concat','console','_keyStrRegExp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','negativeInfinity','boolean','then','toString','parent','slice','_inNextEdge','pathToFileURL','_connectAttemptCount','onopen','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_maxConnectAttemptCount','_console_ninja_session','_connected','cappedProps','_cleanNode','onmessage','getPrototypeOf','stack','toLowerCase','ws://','hrtime','_WebSocketClass','_p_name','\\x20server','_type','null','_allowedToConnectOnSend','_getOwnPropertyNames','close','log','valueOf','getOwnPropertySymbols','error','String','index','_capIfString','root_exp_id','_treeNodePropertiesBeforeFullValue','113704JDUAAU','_undefined','number','_hasMapOnItsPath','_blacklistedProperty','127.0.0.1','https://tinyurl.com/37x8b79t','_quotedRegExp','_p_length','_inBrowser','_addObjectProperty','_webSocketErrorDocsLink','_numberRegExp','webpack','substr',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.289/node_modules\",'_isSet','[object\\x20Map]','match','','_setNodeLabel','readyState','level','','dockerizedApp','reduceLimits','gateway.docker.internal','_console_ninja','call','string','Map','34879','undefined','_objectToString','WebSocket','_getOwnPropertySymbols','elapsed','1956048quYmFa','autoExpand','unknown','_dateToString','1180LvzpFP','Error','message','global','Buffer','rootExpression','angular','sortProps','capped','replace','serialize','unshift','_isArray','date','_p_','_WebSocket','forEach','_additionalMetadata','logger\\x20websocket\\x20error','1709111199457','_allowedToSend','__es'+'Module','_getOwnPropertyDescriptor','_setNodePermissions','_isPrimitiveWrapperType','bind','get','onerror','_isPrimitiveType','autoExpandPropertyCount','_HTMLAllCollection','bigint','_ws','_treeNodePropertiesAfterFullValue','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','now','host','performance','nan','_setNodeId','count','trace','_socket','[object\\x20Array]','negativeZero','RegExp','Boolean','versions','set','_connectToHostNow','test','parse','_addLoadNode','join','astro','Number','setter','[object\\x20Date]','split','37629eZIXEu','reload','edge','cappedElements','931905LapKax','_sortProps','props','port','onclose','data','path',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],'_sendErrorMessage','115286mvsVVa','enumerable','getter','nodeModules','_addFunctionsNode','hits','default','constructor','remix','_setNodeExpandableState','includes','send','env','array','12nbkufu','_addProperty','isExpressionToEvaluate','method','process','161pyeWYe','stringify','current','7363983dacdXO','name','_setNodeExpressionPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20'];_0xa8b3=function(){return _0x48b6bb;};return _0xa8b3();}function J(_0x54fd95,_0x150aad,_0x3e378a){var _0x555256=_0x49fb4d;if(_0x54fd95[_0x555256(0x20e)]!==void 0x0)return _0x54fd95[_0x555256(0x20e)];let _0x133aa9=_0x54fd95[_0x555256(0x202)]?.['versions']?.[_0x555256(0x21e)]||_0x54fd95[_0x555256(0x202)]?.[_0x555256(0x1fc)]?.[_0x555256(0x21f)]===_0x555256(0x1e5);return _0x133aa9&&_0x3e378a===_0x555256(0x235)?_0x54fd95['_consoleNinjaAllowedToStart']=!0x1:_0x54fd95['_consoleNinjaAllowedToStart']=_0x133aa9||!_0x150aad||_0x54fd95[_0x555256(0x215)]?.['hostname']&&_0x150aad[_0x555256(0x1fa)](_0x54fd95[_0x555256(0x215)]['hostname']),_0x54fd95[_0x555256(0x20e)];}function Y(_0x52ead8,_0x488bad,_0x1c6742,_0x593e90){var _0x59ed02=_0x49fb4d;_0x52ead8=_0x52ead8,_0x488bad=_0x488bad,_0x1c6742=_0x1c6742,_0x593e90=_0x593e90;let _0x162e99=W(_0x52ead8),_0x4f7dfd=_0x162e99['elapsed'],_0x523b6a=_0x162e99['timeStamp'];class _0x5402cc{constructor(){var _0x48baff=_0x3f4d;this[_0x48baff(0x23f)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x48baff(0x18a)]=/^(0|[1-9][0-9]*)$/,this[_0x48baff(0x185)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x52ead8['undefined'],this[_0x48baff(0x1c5)]=_0x52ead8[_0x48baff(0x239)],this[_0x48baff(0x1bd)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x48baff(0x20a)],this[_0x48baff(0x21a)]=_0x52ead8['Symbol'],this[_0x48baff(0x234)]=RegExp[_0x48baff(0x23b)][_0x48baff(0x244)],this['_dateToString']=Date['prototype']['toString'];}['serialize'](_0x3716dc,_0x42b252,_0x312a4a,_0x19a23e){var _0x3f39eb=_0x3f4d,_0x1095fb=this,_0x50f7d4=_0x312a4a['autoExpand'];function _0x543af4(_0x1b9ee9,_0x6e0cac,_0xafbc9e){var _0xac3fef=_0x3f4d;_0x6e0cac['type']=_0xac3fef(0x1a5),_0x6e0cac[_0xac3fef(0x262)]=_0x1b9ee9[_0xac3fef(0x1a9)],_0x2953a6=_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)],_0xafbc9e[_0xac3fef(0x21e)][_0xac3fef(0x205)]=_0x6e0cac,_0x1095fb[_0xac3fef(0x267)](_0x6e0cac,_0xafbc9e);}try{_0x312a4a[_0x3f39eb(0x194)]++,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)][_0x3f39eb(0x217)](_0x42b252);var _0x3d7ff9,_0x3059e2,_0x2f29b7,_0x32acc0,_0x55e3f9=[],_0x300a89=[],_0x1d094d,_0x3459b6=this[_0x3f39eb(0x25a)](_0x42b252),_0x61b33c=_0x3459b6==='array',_0x466d79=!0x1,_0x549262=_0x3459b6==='function',_0xde1723=this[_0x3f39eb(0x1c3)](_0x3459b6),_0x1a0a1d=this[_0x3f39eb(0x1bf)](_0x3459b6),_0x59d471=_0xde1723||_0x1a0a1d,_0x1a7aaa={},_0x5391b1=0x0,_0x2bb1ef=!0x1,_0x2953a6,_0x1532bc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x312a4a[_0x3f39eb(0x211)]){if(_0x61b33c){if(_0x3059e2=_0x42b252[_0x3f39eb(0x231)],_0x3059e2>_0x312a4a[_0x3f39eb(0x226)]){for(_0x2f29b7=0x0,_0x32acc0=_0x312a4a[_0x3f39eb(0x226)],_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));_0x3716dc[_0x3f39eb(0x1e6)]=!0x0;}else{for(_0x2f29b7=0x0,_0x32acc0=_0x3059e2,_0x3d7ff9=_0x2f29b7;_0x3d7ff9<_0x32acc0;_0x3d7ff9++)_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x1ff)](_0x55e3f9,_0x42b252,_0x3459b6,_0x3d7ff9,_0x312a4a));}_0x312a4a[_0x3f39eb(0x1c4)]+=_0x300a89[_0x3f39eb(0x231)];}if(!(_0x3459b6===_0x3f39eb(0x25b)||_0x3459b6===_0x3f39eb(0x19e))&&!_0xde1723&&_0x3459b6!==_0x3f39eb(0x263)&&_0x3459b6!==_0x3f39eb(0x1ab)&&_0x3459b6!==_0x3f39eb(0x1c6)){var _0x7b31a6=_0x19a23e[_0x3f39eb(0x1e9)]||_0x312a4a[_0x3f39eb(0x1e9)];if(this[_0x3f39eb(0x18e)](_0x42b252)?(_0x3d7ff9=0x0,_0x42b252[_0x3f39eb(0x1b7)](function(_0x389511){var _0x46c7e2=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x46c7e2(0x200)]&&_0x312a4a[_0x46c7e2(0x1a4)]&&_0x312a4a[_0x46c7e2(0x1c4)]>_0x312a4a[_0x46c7e2(0x236)]){_0x2bb1ef=!0x0;return;}_0x300a89[_0x46c7e2(0x217)](_0x1095fb[_0x46c7e2(0x1ff)](_0x55e3f9,_0x42b252,'Set',_0x3d7ff9++,_0x312a4a,function(_0x12376d){return function(){return _0x12376d;};}(_0x389511)));})):this['_isMap'](_0x42b252)&&_0x42b252[_0x3f39eb(0x1b7)](function(_0x113116,_0x1d77f9){var _0x36ac1c=_0x3f39eb;if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;return;}if(!_0x312a4a[_0x36ac1c(0x200)]&&_0x312a4a[_0x36ac1c(0x1a4)]&&_0x312a4a[_0x36ac1c(0x1c4)]>_0x312a4a[_0x36ac1c(0x236)]){_0x2bb1ef=!0x0;return;}var _0x3c19c8=_0x1d77f9[_0x36ac1c(0x244)]();_0x3c19c8[_0x36ac1c(0x231)]>0x64&&(_0x3c19c8=_0x3c19c8[_0x36ac1c(0x246)](0x0,0x64)+'...'),_0x300a89[_0x36ac1c(0x217)](_0x1095fb[_0x36ac1c(0x1ff)](_0x55e3f9,_0x42b252,_0x36ac1c(0x19c),_0x3c19c8,_0x312a4a,function(_0x3755b7){return function(){return _0x3755b7;};}(_0x113116)));}),!_0x466d79){try{for(_0x1d094d in _0x42b252)if(!(_0x61b33c&&_0x1532bc[_0x3f39eb(0x1da)](_0x1d094d))&&!this[_0x3f39eb(0x26c)](_0x42b252,_0x1d094d,_0x312a4a)){if(_0x5391b1++,_0x312a4a['autoExpandPropertyCount']++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a['isExpressionToEvaluate']&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x1c4)]>_0x312a4a['autoExpandLimit']){_0x2bb1ef=!0x0;break;}_0x300a89['push'](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}catch{}if(_0x1a7aaa[_0x3f39eb(0x186)]=!0x0,_0x549262&&(_0x1a7aaa[_0x3f39eb(0x258)]=!0x0),!_0x2bb1ef){var _0x23e773=[][_0x3f39eb(0x23d)](this[_0x3f39eb(0x25d)](_0x42b252))[_0x3f39eb(0x23d)](this[_0x3f39eb(0x1a1)](_0x42b252));for(_0x3d7ff9=0x0,_0x3059e2=_0x23e773[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)if(_0x1d094d=_0x23e773[_0x3d7ff9],!(_0x61b33c&&_0x1532bc['test'](_0x1d094d[_0x3f39eb(0x244)]()))&&!this['_blacklistedProperty'](_0x42b252,_0x1d094d,_0x312a4a)&&!_0x1a7aaa[_0x3f39eb(0x1b5)+_0x1d094d[_0x3f39eb(0x244)]()]){if(_0x5391b1++,_0x312a4a[_0x3f39eb(0x1c4)]++,_0x5391b1>_0x7b31a6){_0x2bb1ef=!0x0;break;}if(!_0x312a4a[_0x3f39eb(0x200)]&&_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a['autoExpandPropertyCount']>_0x312a4a[_0x3f39eb(0x236)]){_0x2bb1ef=!0x0;break;}_0x300a89[_0x3f39eb(0x217)](_0x1095fb[_0x3f39eb(0x188)](_0x55e3f9,_0x1a7aaa,_0x42b252,_0x3459b6,_0x1d094d,_0x312a4a));}}}}}if(_0x3716dc[_0x3f39eb(0x228)]=_0x3459b6,_0x59d471?(_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x260)](),this[_0x3f39eb(0x265)](_0x3459b6,_0x3716dc,_0x312a4a,_0x19a23e)):_0x3459b6===_0x3f39eb(0x1b4)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x1a6)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x1c6)?_0x3716dc[_0x3f39eb(0x21d)]=_0x42b252[_0x3f39eb(0x244)]():_0x3459b6===_0x3f39eb(0x1d5)?_0x3716dc[_0x3f39eb(0x21d)]=this[_0x3f39eb(0x234)]['call'](_0x42b252):_0x3459b6===_0x3f39eb(0x214)&&this[_0x3f39eb(0x21a)]?_0x3716dc[_0x3f39eb(0x21d)]=this['_Symbol']['prototype']['toString'][_0x3f39eb(0x19a)](_0x42b252):!_0x312a4a[_0x3f39eb(0x211)]&&!(_0x3459b6==='null'||_0x3459b6===_0x3f39eb(0x19e))&&(delete _0x3716dc[_0x3f39eb(0x21d)],_0x3716dc[_0x3f39eb(0x1af)]=!0x0),_0x2bb1ef&&(_0x3716dc[_0x3f39eb(0x24f)]=!0x0),_0x2953a6=_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)],_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x3716dc,this['_treeNodePropertiesBeforeFullValue'](_0x3716dc,_0x312a4a),_0x300a89[_0x3f39eb(0x231)]){for(_0x3d7ff9=0x0,_0x3059e2=_0x300a89[_0x3f39eb(0x231)];_0x3d7ff9<_0x3059e2;_0x3d7ff9++)_0x300a89[_0x3d7ff9](_0x3d7ff9);}_0x55e3f9[_0x3f39eb(0x231)]&&(_0x3716dc[_0x3f39eb(0x1e9)]=_0x55e3f9);}catch(_0x1458df){_0x543af4(_0x1458df,_0x3716dc,_0x312a4a);}return this['_additionalMetadata'](_0x42b252,_0x3716dc),this[_0x3f39eb(0x1c8)](_0x3716dc,_0x312a4a),_0x312a4a[_0x3f39eb(0x21e)][_0x3f39eb(0x205)]=_0x2953a6,_0x312a4a[_0x3f39eb(0x194)]--,_0x312a4a[_0x3f39eb(0x1a4)]=_0x50f7d4,_0x312a4a[_0x3f39eb(0x1a4)]&&_0x312a4a[_0x3f39eb(0x232)]['pop'](),_0x3716dc;}[_0x59ed02(0x1a1)](_0x48e43d){var _0x37989b=_0x59ed02;return Object[_0x37989b(0x261)]?Object[_0x37989b(0x261)](_0x48e43d):[];}[_0x59ed02(0x18e)](_0x5eed41){var _0x50aae4=_0x59ed02;return!!(_0x5eed41&&_0x52ead8[_0x50aae4(0x22d)]&&this['_objectToString'](_0x5eed41)===_0x50aae4(0x212)&&_0x5eed41[_0x50aae4(0x1b7)]);}[_0x59ed02(0x26c)](_0x43ea5c,_0x547c7c,_0x12c9ea){var _0x545f1b=_0x59ed02;return _0x12c9ea[_0x545f1b(0x233)]?typeof _0x43ea5c[_0x547c7c]==_0x545f1b(0x227):!0x1;}['_type'](_0x2fa91f){var _0x33d161=_0x59ed02,_0x50fc90='';return _0x50fc90=typeof _0x2fa91f,_0x50fc90===_0x33d161(0x22e)?this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x1d3)?_0x50fc90=_0x33d161(0x1fd):this['_objectToString'](_0x2fa91f)===_0x33d161(0x1e1)?_0x50fc90=_0x33d161(0x1b4):this[_0x33d161(0x19f)](_0x2fa91f)===_0x33d161(0x221)?_0x50fc90=_0x33d161(0x1c6):_0x2fa91f===null?_0x50fc90=_0x33d161(0x25b):_0x2fa91f[_0x33d161(0x1f7)]&&(_0x50fc90=_0x2fa91f[_0x33d161(0x1f7)][_0x33d161(0x207)]||_0x50fc90):_0x50fc90==='undefined'&&this[_0x33d161(0x1c5)]&&_0x2fa91f instanceof this[_0x33d161(0x1c5)]&&(_0x50fc90=_0x33d161(0x239)),_0x50fc90;}[_0x59ed02(0x19f)](_0x4677c8){var _0x36deba=_0x59ed02;return Object[_0x36deba(0x23b)][_0x36deba(0x244)][_0x36deba(0x19a)](_0x4677c8);}[_0x59ed02(0x1c3)](_0x2553af){var _0x36485b=_0x59ed02;return _0x2553af===_0x36485b(0x242)||_0x2553af===_0x36485b(0x19b)||_0x2553af==='number';}[_0x59ed02(0x1bf)](_0x3689a8){var _0x5762f0=_0x59ed02;return _0x3689a8===_0x5762f0(0x1d6)||_0x3689a8===_0x5762f0(0x263)||_0x3689a8===_0x5762f0(0x1df);}[_0x59ed02(0x1ff)](_0x25f0de,_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90){var _0x409b17=this;return function(_0x168fc9){var _0x5eaaf1=_0x3f4d,_0x14b1d5=_0x49f21c[_0x5eaaf1(0x21e)]['current'],_0x31c4d1=_0x49f21c[_0x5eaaf1(0x21e)]['index'],_0x1e7d12=_0x49f21c['node']['parent'];_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x245)]=_0x14b1d5,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=typeof _0x37002d==_0x5eaaf1(0x26a)?_0x37002d:_0x168fc9,_0x25f0de['push'](_0x409b17[_0x5eaaf1(0x229)](_0x328f09,_0x47c53f,_0x37002d,_0x49f21c,_0x521c90)),_0x49f21c[_0x5eaaf1(0x21e)]['parent']=_0x1e7d12,_0x49f21c[_0x5eaaf1(0x21e)][_0x5eaaf1(0x264)]=_0x31c4d1;};}[_0x59ed02(0x188)](_0x41aa81,_0x1c7f86,_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6){var _0x13f414=_0x59ed02,_0xe8b123=this;return _0x1c7f86[_0x13f414(0x1b5)+_0x1c7967[_0x13f414(0x244)]()]=!0x0,function(_0x3411f4){var _0x40672b=_0x13f414,_0x17180a=_0x577642[_0x40672b(0x21e)][_0x40672b(0x205)],_0x3da467=_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)],_0x3b5746=_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)];_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x17180a,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3411f4,_0x41aa81['push'](_0xe8b123[_0x40672b(0x229)](_0x311f4d,_0x26014b,_0x1c7967,_0x577642,_0x5981a6)),_0x577642[_0x40672b(0x21e)][_0x40672b(0x245)]=_0x3b5746,_0x577642[_0x40672b(0x21e)][_0x40672b(0x264)]=_0x3da467;};}[_0x59ed02(0x229)](_0x1fe10f,_0x3e26b4,_0xcbc90a,_0x30ba01,_0x4f8e0a){var _0x32ffe9=_0x59ed02,_0x1350ab=this;_0x4f8e0a||(_0x4f8e0a=function(_0x17ba27,_0x275ad6){return _0x17ba27[_0x275ad6];});var _0x3104eb=_0xcbc90a[_0x32ffe9(0x244)](),_0x399b04=_0x30ba01[_0x32ffe9(0x222)]||{},_0x23f998=_0x30ba01[_0x32ffe9(0x211)],_0x1c7153=_0x30ba01['isExpressionToEvaluate'];try{var _0x113b54=this[_0x32ffe9(0x210)](_0x1fe10f),_0x4d0792=_0x3104eb;_0x113b54&&_0x4d0792[0x0]==='\\x27'&&(_0x4d0792=_0x4d0792['substr'](0x1,_0x4d0792[_0x32ffe9(0x231)]-0x2));var _0xcebf6a=_0x30ba01[_0x32ffe9(0x222)]=_0x399b04[_0x32ffe9(0x1b5)+_0x4d0792];_0xcebf6a&&(_0x30ba01[_0x32ffe9(0x211)]=_0x30ba01['depth']+0x1),_0x30ba01['isExpressionToEvaluate']=!!_0xcebf6a;var _0x4430a0=typeof _0xcbc90a=='symbol',_0x5b6464={'name':_0x4430a0||_0x113b54?_0x3104eb:this[_0x32ffe9(0x23c)](_0x3104eb)};if(_0x4430a0&&(_0x5b6464[_0x32ffe9(0x214)]=!0x0),!(_0x3e26b4===_0x32ffe9(0x1fd)||_0x3e26b4===_0x32ffe9(0x1a8))){var _0x36c5ab=this[_0x32ffe9(0x1bd)](_0x1fe10f,_0xcbc90a);if(_0x36c5ab&&(_0x36c5ab[_0x32ffe9(0x1d8)]&&(_0x5b6464[_0x32ffe9(0x1e0)]=!0x0),_0x36c5ab[_0x32ffe9(0x1c1)]&&!_0xcebf6a&&!_0x30ba01['resolveGetters']))return _0x5b6464[_0x32ffe9(0x1f2)]=!0x0,this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x409c28;try{_0x409c28=_0x4f8e0a(_0x1fe10f,_0xcbc90a);}catch(_0x29bf72){return _0x5b6464={'name':_0x3104eb,'type':_0x32ffe9(0x1a5),'error':_0x29bf72[_0x32ffe9(0x1a9)]},this['_processTreeNodeResult'](_0x5b6464,_0x30ba01),_0x5b6464;}var _0x58cabb=this[_0x32ffe9(0x25a)](_0x409c28),_0x50c021=this['_isPrimitiveType'](_0x58cabb);if(_0x5b6464[_0x32ffe9(0x228)]=_0x58cabb,_0x50c021)this['_processTreeNodeResult'](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x526428=_0x32ffe9;_0x5b6464[_0x526428(0x21d)]=_0x409c28['valueOf'](),!_0xcebf6a&&_0x1350ab[_0x526428(0x265)](_0x58cabb,_0x5b6464,_0x30ba01,{});});else{var _0xc0102=_0x30ba01['autoExpand']&&_0x30ba01[_0x32ffe9(0x194)]<_0x30ba01[_0x32ffe9(0x213)]&&_0x30ba01['autoExpandPreviousObjects']['indexOf'](_0x409c28)<0x0&&_0x58cabb!==_0x32ffe9(0x227)&&_0x30ba01[_0x32ffe9(0x1c4)]<_0x30ba01[_0x32ffe9(0x236)];_0xc0102||_0x30ba01[_0x32ffe9(0x194)]<_0x23f998||_0xcebf6a?(this[_0x32ffe9(0x1b1)](_0x5b6464,_0x409c28,_0x30ba01,_0xcebf6a||{}),this['_additionalMetadata'](_0x409c28,_0x5b6464)):this[_0x32ffe9(0x21c)](_0x5b6464,_0x30ba01,_0x409c28,function(){var _0x523ae7=_0x32ffe9;_0x58cabb===_0x523ae7(0x25b)||_0x58cabb===_0x523ae7(0x19e)||(delete _0x5b6464[_0x523ae7(0x21d)],_0x5b6464[_0x523ae7(0x1af)]=!0x0);});}return _0x5b6464;}finally{_0x30ba01[_0x32ffe9(0x222)]=_0x399b04,_0x30ba01['depth']=_0x23f998,_0x30ba01[_0x32ffe9(0x200)]=_0x1c7153;}}[_0x59ed02(0x265)](_0x3eef25,_0x84db6f,_0x10550d,_0x428813){var _0x225042=_0x59ed02,_0x59c62a=_0x428813[_0x225042(0x22c)]||_0x10550d[_0x225042(0x22c)];if((_0x3eef25===_0x225042(0x19b)||_0x3eef25===_0x225042(0x263))&&_0x84db6f[_0x225042(0x21d)]){let _0x801e17=_0x84db6f['value']['length'];_0x10550d[_0x225042(0x22b)]+=_0x801e17,_0x10550d[_0x225042(0x22b)]>_0x10550d[_0x225042(0x22f)]?(_0x84db6f[_0x225042(0x1af)]='',delete _0x84db6f[_0x225042(0x21d)]):_0x801e17>_0x59c62a&&(_0x84db6f[_0x225042(0x1af)]=_0x84db6f[_0x225042(0x21d)]['substr'](0x0,_0x59c62a),delete _0x84db6f[_0x225042(0x21d)]);}}[_0x59ed02(0x210)](_0x6bf6fa){var _0x48ea70=_0x59ed02;return!!(_0x6bf6fa&&_0x52ead8[_0x48ea70(0x19c)]&&this[_0x48ea70(0x19f)](_0x6bf6fa)===_0x48ea70(0x18f)&&_0x6bf6fa['forEach']);}['_propertyName'](_0xd5fa1d){var _0x235bdf=_0x59ed02;if(_0xd5fa1d[_0x235bdf(0x190)](/^\\d+$/))return _0xd5fa1d;var _0x50be6f;try{_0x50be6f=JSON[_0x235bdf(0x204)](''+_0xd5fa1d);}catch{_0x50be6f='\\x22'+this[_0x235bdf(0x19f)](_0xd5fa1d)+'\\x22';}return _0x50be6f[_0x235bdf(0x190)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x50be6f=_0x50be6f[_0x235bdf(0x18c)](0x1,_0x50be6f[_0x235bdf(0x231)]-0x2):_0x50be6f=_0x50be6f[_0x235bdf(0x1b0)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x50be6f;}[_0x59ed02(0x21c)](_0x1576d5,_0x3ad3fb,_0x582215,_0x4dbd3a){var _0x278397=_0x59ed02;this[_0x278397(0x267)](_0x1576d5,_0x3ad3fb),_0x4dbd3a&&_0x4dbd3a(),this[_0x278397(0x1b8)](_0x582215,_0x1576d5),this[_0x278397(0x1c8)](_0x1576d5,_0x3ad3fb);}[_0x59ed02(0x267)](_0x2cc14c,_0x4bc3cc){var _0x557e08=_0x59ed02;this[_0x557e08(0x1cf)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x20d)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x208)](_0x2cc14c,_0x4bc3cc),this[_0x557e08(0x1be)](_0x2cc14c,_0x4bc3cc);}[_0x59ed02(0x1cf)](_0x13bf9a,_0x36221e){}['_setNodeQueryPath'](_0x46a402,_0x59b4ec){}['_setNodeLabel'](_0x4be1bf,_0x53f6f5){}['_isUndefined'](_0x3c4f93){var _0x36f3fd=_0x59ed02;return _0x3c4f93===this[_0x36f3fd(0x269)];}[_0x59ed02(0x1c8)](_0x1710a6,_0x3f678a){var _0x24bd27=_0x59ed02;this['_setNodeLabel'](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1f9)](_0x1710a6),_0x3f678a[_0x24bd27(0x1ae)]&&this[_0x24bd27(0x1e8)](_0x1710a6),this[_0x24bd27(0x1f4)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x1dc)](_0x1710a6,_0x3f678a),this[_0x24bd27(0x250)](_0x1710a6);}['_additionalMetadata'](_0x5c7c62,_0x4c51a3){var _0x1f411e=_0x59ed02;let _0x2bdd3f;try{_0x52ead8[_0x1f411e(0x23e)]&&(_0x2bdd3f=_0x52ead8[_0x1f411e(0x23e)]['error'],_0x52ead8[_0x1f411e(0x23e)]['error']=function(){}),_0x5c7c62&&typeof _0x5c7c62[_0x1f411e(0x231)]==_0x1f411e(0x26a)&&(_0x4c51a3[_0x1f411e(0x231)]=_0x5c7c62[_0x1f411e(0x231)]);}catch{}finally{_0x2bdd3f&&(_0x52ead8[_0x1f411e(0x23e)][_0x1f411e(0x262)]=_0x2bdd3f);}if(_0x4c51a3[_0x1f411e(0x228)]===_0x1f411e(0x26a)||_0x4c51a3['type']===_0x1f411e(0x1df)){if(isNaN(_0x4c51a3[_0x1f411e(0x21d)]))_0x4c51a3[_0x1f411e(0x1ce)]=!0x0,delete _0x4c51a3['value'];else switch(_0x4c51a3[_0x1f411e(0x21d)]){case Number['POSITIVE_INFINITY']:_0x4c51a3['positiveInfinity']=!0x0,delete _0x4c51a3['value'];break;case Number['NEGATIVE_INFINITY']:_0x4c51a3[_0x1f411e(0x241)]=!0x0,delete _0x4c51a3['value'];break;case 0x0:this[_0x1f411e(0x216)](_0x4c51a3[_0x1f411e(0x21d)])&&(_0x4c51a3[_0x1f411e(0x1d4)]=!0x0);break;}}else _0x4c51a3['type']===_0x1f411e(0x227)&&typeof _0x5c7c62[_0x1f411e(0x207)]=='string'&&_0x5c7c62[_0x1f411e(0x207)]&&_0x4c51a3[_0x1f411e(0x207)]&&_0x5c7c62[_0x1f411e(0x207)]!==_0x4c51a3['name']&&(_0x4c51a3['funcName']=_0x5c7c62[_0x1f411e(0x207)]);}['_isNegativeZero'](_0x3edf20){return 0x1/_0x3edf20===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x2c1ca7){var _0x4e6de1=_0x59ed02;!_0x2c1ca7[_0x4e6de1(0x1e9)]||!_0x2c1ca7[_0x4e6de1(0x1e9)][_0x4e6de1(0x231)]||_0x2c1ca7['type']===_0x4e6de1(0x1fd)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x19c)||_0x2c1ca7[_0x4e6de1(0x228)]===_0x4e6de1(0x22d)||_0x2c1ca7[_0x4e6de1(0x1e9)]['sort'](function(_0x48acb5,_0x4dc490){var _0x5cb219=_0x4e6de1,_0x49b532=_0x48acb5['name'][_0x5cb219(0x254)](),_0x599cf3=_0x4dc490['name'][_0x5cb219(0x254)]();return _0x49b532<_0x599cf3?-0x1:_0x49b532>_0x599cf3?0x1:0x0;});}[_0x59ed02(0x1f4)](_0x56fd6d,_0xe19b40){var _0x22c24a=_0x59ed02;if(!(_0xe19b40[_0x22c24a(0x233)]||!_0x56fd6d[_0x22c24a(0x1e9)]||!_0x56fd6d['props'][_0x22c24a(0x231)])){for(var _0x3912ba=[],_0x2eb732=[],_0x4889c5=0x0,_0x1bcf08=_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x231)];_0x4889c5<_0x1bcf08;_0x4889c5++){var _0x3f04a8=_0x56fd6d[_0x22c24a(0x1e9)][_0x4889c5];_0x3f04a8[_0x22c24a(0x228)]===_0x22c24a(0x227)?_0x3912ba[_0x22c24a(0x217)](_0x3f04a8):_0x2eb732['push'](_0x3f04a8);}if(!(!_0x2eb732['length']||_0x3912ba[_0x22c24a(0x231)]<=0x1)){_0x56fd6d[_0x22c24a(0x1e9)]=_0x2eb732;var _0xf7cce1={'functionsNode':!0x0,'props':_0x3912ba};this[_0x22c24a(0x1cf)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x192)](_0xf7cce1,_0xe19b40),this[_0x22c24a(0x1f9)](_0xf7cce1),this['_setNodePermissions'](_0xf7cce1,_0xe19b40),_0xf7cce1['id']+='\\x20f',_0x56fd6d[_0x22c24a(0x1e9)][_0x22c24a(0x1b2)](_0xf7cce1);}}}[_0x59ed02(0x1dc)](_0x52f693,_0x439baf){}[_0x59ed02(0x1f9)](_0x1d169f){}[_0x59ed02(0x1b3)](_0x163fe9){var _0x555a59=_0x59ed02;return Array['isArray'](_0x163fe9)||typeof _0x163fe9==_0x555a59(0x22e)&&this['_objectToString'](_0x163fe9)==='[object\\x20Array]';}[_0x59ed02(0x1be)](_0x35f57d,_0x209198){}['_cleanNode'](_0x57cb19){var _0x5357de=_0x59ed02;delete _0x57cb19['_hasSymbolPropertyOnItsPath'],delete _0x57cb19['_hasSetOnItsPath'],delete _0x57cb19[_0x5357de(0x26b)];}[_0x59ed02(0x208)](_0x2d261b,_0x1b5255){}}let _0x3e5085=new _0x5402cc(),_0x2afba0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x259076={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4ebc79(_0x450cd1,_0x5a1759,_0xf26d46,_0x28b3ec,_0x1173d3,_0xa39da9){var _0xa64412=_0x59ed02;let _0x468409,_0x56f8b0;try{_0x56f8b0=_0x523b6a(),_0x468409=_0x1c6742[_0x5a1759],!_0x468409||_0x56f8b0-_0x468409['ts']>0x1f4&&_0x468409[_0xa64412(0x1d0)]&&_0x468409[_0xa64412(0x224)]/_0x468409[_0xa64412(0x1d0)]<0x64?(_0x1c6742[_0x5a1759]=_0x468409={'count':0x0,'time':0x0,'ts':_0x56f8b0},_0x1c6742[_0xa64412(0x1f5)]={}):_0x56f8b0-_0x1c6742[_0xa64412(0x1f5)]['ts']>0x32&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]&&_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]/_0x1c6742['hits'][_0xa64412(0x1d0)]<0x64&&(_0x1c6742[_0xa64412(0x1f5)]={});let _0x1e7805=[],_0x4365d5=_0x468409[_0xa64412(0x197)]||_0x1c6742['hits'][_0xa64412(0x197)]?_0x259076:_0x2afba0,_0x192577=_0x4a8ff7=>{var _0x4c6205=_0xa64412;let _0x1d3fe4={};return _0x1d3fe4[_0x4c6205(0x1e9)]=_0x4a8ff7[_0x4c6205(0x1e9)],_0x1d3fe4[_0x4c6205(0x226)]=_0x4a8ff7[_0x4c6205(0x226)],_0x1d3fe4[_0x4c6205(0x22c)]=_0x4a8ff7[_0x4c6205(0x22c)],_0x1d3fe4[_0x4c6205(0x22f)]=_0x4a8ff7[_0x4c6205(0x22f)],_0x1d3fe4[_0x4c6205(0x236)]=_0x4a8ff7[_0x4c6205(0x236)],_0x1d3fe4[_0x4c6205(0x213)]=_0x4a8ff7[_0x4c6205(0x213)],_0x1d3fe4['sortProps']=!0x1,_0x1d3fe4['noFunctions']=!_0x488bad,_0x1d3fe4[_0x4c6205(0x211)]=0x1,_0x1d3fe4[_0x4c6205(0x194)]=0x0,_0x1d3fe4['expId']=_0x4c6205(0x266),_0x1d3fe4[_0x4c6205(0x1ac)]='root_exp',_0x1d3fe4[_0x4c6205(0x1a4)]=!0x0,_0x1d3fe4[_0x4c6205(0x232)]=[],_0x1d3fe4[_0x4c6205(0x1c4)]=0x0,_0x1d3fe4['resolveGetters']=!0x0,_0x1d3fe4[_0x4c6205(0x22b)]=0x0,_0x1d3fe4[_0x4c6205(0x21e)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1d3fe4;};for(var _0x186f57=0x0;_0x186f57<_0x1173d3['length'];_0x186f57++)_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'timeNode':_0x450cd1===_0xa64412(0x224)||void 0x0},_0x1173d3[_0x186f57],_0x192577(_0x4365d5),{}));if(_0x450cd1===_0xa64412(0x1d1)){let _0x3914f0=Error['stackTraceLimit'];try{Error[_0xa64412(0x218)]=0x1/0x0,_0x1e7805[_0xa64412(0x217)](_0x3e5085[_0xa64412(0x1b1)]({'stackNode':!0x0},new Error()[_0xa64412(0x253)],_0x192577(_0x4365d5),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3914f0;}}return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':_0x1e7805,'id':_0x5a1759,'context':_0xa39da9}]};}catch(_0x101027){return{'method':_0xa64412(0x25f),'version':_0x593e90,'args':[{'ts':_0xf26d46,'session':_0x28b3ec,'args':[{'type':_0xa64412(0x1a5),'error':_0x101027&&_0x101027[_0xa64412(0x1a9)]}],'id':_0x5a1759,'context':_0xa39da9}]};}finally{try{if(_0x468409&&_0x56f8b0){let _0x115a65=_0x523b6a();_0x468409[_0xa64412(0x1d0)]++,_0x468409['time']+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x468409['ts']=_0x115a65,_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x1d0)]++,_0x1c6742['hits'][_0xa64412(0x224)]+=_0x4f7dfd(_0x56f8b0,_0x115a65),_0x1c6742['hits']['ts']=_0x115a65,(_0x468409[_0xa64412(0x1d0)]>0x32||_0x468409[_0xa64412(0x224)]>0x64)&&(_0x468409[_0xa64412(0x197)]=!0x0),(_0x1c6742['hits'][_0xa64412(0x1d0)]>0x3e8||_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x224)]>0x12c)&&(_0x1c6742[_0xa64412(0x1f5)][_0xa64412(0x197)]=!0x0);}}catch{}}}return _0x4ebc79;}((_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x4852cd,_0xf3b8bd,_0x326d0f,_0x11152c,_0x173079)=>{var _0x3d1755=_0x49fb4d;if(_0x38628b['_console_ninja'])return _0x38628b[_0x3d1755(0x199)];if(!J(_0x38628b,_0x326d0f,_0x29597c))return _0x38628b[_0x3d1755(0x199)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x38628b[_0x3d1755(0x199)];let _0xdacf90=W(_0x38628b),_0x20fe7a=_0xdacf90[_0x3d1755(0x1a2)],_0x5eb7d1=_0xdacf90['timeStamp'],_0x114d0b=_0xdacf90[_0x3d1755(0x1cb)],_0x7694f5={'hits':{},'ts':{}},_0x1764d8=Y(_0x38628b,_0x11152c,_0x7694f5,_0x4852cd),_0x178886=_0x207530=>{_0x7694f5['ts'][_0x207530]=_0x5eb7d1();},_0x11f474=(_0x700a86,_0x29b86d)=>{var _0x2cbef3=_0x3d1755;let _0x30e3a0=_0x7694f5['ts'][_0x29b86d];if(delete _0x7694f5['ts'][_0x29b86d],_0x30e3a0){let _0x56d048=_0x20fe7a(_0x30e3a0,_0x5eb7d1());_0x17d9cf(_0x1764d8(_0x2cbef3(0x224),_0x700a86,_0x114d0b(),_0x138b24,[_0x56d048],_0x29b86d));}},_0x56a592=_0x2e2c32=>_0x36556b=>{var _0x5b3d79=_0x3d1755;try{_0x178886(_0x36556b),_0x2e2c32(_0x36556b);}finally{_0x38628b[_0x5b3d79(0x23e)][_0x5b3d79(0x224)]=_0x2e2c32;}},_0x842d19=_0x27b330=>_0x5d7d00=>{var _0x4bbd9d=_0x3d1755;try{let [_0x202e29,_0x23f73b]=_0x5d7d00[_0x4bbd9d(0x1e2)](':logPointId:');_0x11f474(_0x23f73b,_0x202e29),_0x27b330(_0x202e29);}finally{_0x38628b[_0x4bbd9d(0x23e)]['timeEnd']=_0x27b330;}};_0x38628b['_console_ninja']={'consoleLog':(_0x25cb35,_0xd40039)=>{var _0x48c878=_0x3d1755;_0x38628b[_0x48c878(0x23e)][_0x48c878(0x25f)][_0x48c878(0x207)]!=='disabledLog'&&_0x17d9cf(_0x1764d8(_0x48c878(0x25f),_0x25cb35,_0x114d0b(),_0x138b24,_0xd40039));},'consoleTrace':(_0x3398a9,_0x4514fc)=>{var _0x835e28=_0x3d1755;_0x38628b[_0x835e28(0x23e)]['log'][_0x835e28(0x207)]!=='disabledTrace'&&_0x17d9cf(_0x1764d8(_0x835e28(0x1d1),_0x3398a9,_0x114d0b(),_0x138b24,_0x4514fc));},'consoleTime':()=>{var _0x4b3354=_0x3d1755;_0x38628b[_0x4b3354(0x23e)][_0x4b3354(0x224)]=_0x56a592(_0x38628b['console'][_0x4b3354(0x224)]);},'consoleTimeEnd':()=>{var _0x410270=_0x3d1755;_0x38628b[_0x410270(0x23e)]['timeEnd']=_0x842d19(_0x38628b[_0x410270(0x23e)][_0x410270(0x23a)]);},'autoLog':(_0x29f36a,_0x14ab8c)=>{_0x17d9cf(_0x1764d8('log',_0x14ab8c,_0x114d0b(),_0x138b24,[_0x29f36a]));},'autoLogMany':(_0x7308ae,_0x468fe0)=>{var _0x46173b=_0x3d1755;_0x17d9cf(_0x1764d8(_0x46173b(0x25f),_0x7308ae,_0x114d0b(),_0x138b24,_0x468fe0));},'autoTrace':(_0x1cc2f0,_0x351e00)=>{var _0xe4fcf6=_0x3d1755;_0x17d9cf(_0x1764d8(_0xe4fcf6(0x1d1),_0x351e00,_0x114d0b(),_0x138b24,[_0x1cc2f0]));},'autoTraceMany':(_0x4c7a1c,_0x2db2d1)=>{var _0x1f9984=_0x3d1755;_0x17d9cf(_0x1764d8(_0x1f9984(0x1d1),_0x4c7a1c,_0x114d0b(),_0x138b24,_0x2db2d1));},'autoTime':(_0x4897a0,_0x114719,_0x2819bd)=>{_0x178886(_0x2819bd);},'autoTimeEnd':(_0x25206b,_0x7ac882,_0x573aea)=>{_0x11f474(_0x7ac882,_0x573aea);},'coverage':_0x59fc26=>{_0x17d9cf({'method':'coverage','version':_0x4852cd,'args':[{'id':_0x59fc26}]});}};let _0x17d9cf=b(_0x38628b,_0x1f03cc,_0x2aa4e5,_0xf0b36c,_0x29597c,_0x173079),_0x138b24=_0x38628b[_0x3d1755(0x24d)];return _0x38628b['_console_ninja'];})(globalThis,_0x49fb4d(0x26d),_0x49fb4d(0x19d),_0x49fb4d(0x18d),_0x49fb4d(0x18b),'1.0.0',_0x49fb4d(0x1ba),_0x49fb4d(0x1ee),_0x49fb4d(0x191),_0x49fb4d(0x195));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDTjtBQUMrQzs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLDJEQUFVO0FBQ25DLDBCQUEwQiwyREFBVTs7QUFFcEM7QUFDQSxzQkFBc0IseUdBQStCO0FBQ3JEO0FBQ0EsdUJBQXVCLHlHQUErQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZEQUFpQjtBQUN4RTs7QUFFQTtBQUNBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaUI7QUFDSztBQUNKO0FBQ1E7QUFLOUI7QUFDSTtBQUNGOztBQUV0QztBQUNBO0FBQ3NDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXLHlFQUFlO0FBQzFC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QyxtQ0FBbUMsd0JBQXdCLHlDQUF5QyxnREFBZ0QsK0NBQStDLCtGQUErRixrQ0FBa0Msd0JBQXdCLElBQUksMkNBQTJDLFFBQVEsMERBQTBELGtDQUFrQyx3QkFBd0IsSUFBSSxzRUFBc0UscURBQXFELFFBQVEsb0RBQW9ELDZCQUE2QixxQ0FBcUMsd0JBQXdCLG1LQUFtSyx3Q0FBd0Msd0JBQXdCLDBKQUEwSixvQkFBb0Isd0JBQXdCLGlHQUFpRyx1QkFBdUIsd0JBQXdCLGlHQUFpRyxtQ0FBbUMseUVBQXlFLHVDQUF1Qyx3QkFBd0Isa0ZBQWtGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxzQkFBc0IsaURBQWlELGdDQUFnQyx3QkFBd0IsV0FBVyxpREFBaUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQyw4SkFBOEosSUFBSSxZQUFZLGlEQUFpRCxJQUFJLDBCQUEwQixXQUFXLFVBQVUsaURBQWlELElBQUksNEJBQTRCLFdBQVcsVUFBVSwyQ0FBMkMsSUFBSSx1QkFBdUIsWUFBWSwyQ0FBMkMsSUFBSSwwQkFBMEIsWUFBWSwyUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzLmNzcz8zM2JkIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDo6YmFja2Ryb3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5OSk7XG59XG5cbiNtb2RhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgZGlzcGxheTogZmxleGJveDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItYm90dG9tOjNweCBkb3R0ZWQgYmxhY2tcbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgPmxhYmVse3RleHQtYWxpZ246IGxlZnQ7fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9tb2RhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLE9BQU8sZ0JBQWdCLENBQUM7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5OSk7XFxufVxcblxcbiNtb2RhbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBkb3R0ZWQgYmxhY2tcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgPmxhYmVse3RleHQtYWxpZ246IGxlZnQ7fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLGJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogU2VwZXJhdGVkIGZvciBnbG9iYWwgY2xhc3NlcyAqL1xuLmNyZWRpdHtcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICA+YXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5jcmVkaXQ6aG92ZXJ7XG4gICAgc2NhbGU6MjAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbn1cblxuLyogSGVhZGVyIGFyZWEgYmVsb3cgKi9cbmhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgZmxleDogMCAxIGF1dG87XG59XG5cbi5iYW5uZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246cmlnaHQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAydmg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHJpZGdlIGJsYWNrO1xuICAgID4udGV4dC1iZ3tcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCBibGFjaztcbiAgICAgICAgPi50aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgICAgICA+LnN1Yi10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA+LnRleHQtYmc+cHtcbiAgICAgICAgbWFyZ2luOjBcbiAgICB9XG59XG5cbi8qIE1haW4gYXJlYSBiZWxvdyAqL1xubWFpbntcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDIwZnIgLyAxZnIgNmZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbn1cbi5vdmVydmlldy10cmVle1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICA+LnRpdGxle3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDg3LCA5NCk7XG4gICAgICAgIHBhZGRpbmc6IDEwJSAwfVxufVxuLm92ZXJ2aWV3e1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgID4ub3ZlcnZpZXctcHJvamVjdHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xuICAgICAgICBsaXN0LXN0eWxlOmNpcmNsZSBpbnNpZGUgbm9uZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICA+Lm92ZXJ2aWV3LXRvZG97XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwJTtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2MgaW5zaWRlIG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOjJweCBkYXNoZWQgYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50b29sYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjQ4Nik7XG5cbn1cblxuLnRvb2xiYXItYnV0dG9ue1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLWluLW91dDtcbn1cbi50b29sYmFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDE0OCk7fVxuLnRvb2xiYXItYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IHNjYWxlOjkwJTt9XG4uY29udGVudHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG59XG5cblxuLyogZm9vdGVyIGFyZWEgKi9cbmZvb3RlcntcbiAgICBmbGV4OiAwIDEgNDBweDtcbiAgICBwYWRkaW5nLXRvcDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNDY2KTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICA+YXtcbiAgICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cbmZvb3Rlcjpob3ZlcntcbiAgICBmb250LXNpemU6IDE1MCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHFEQUFxRDtJQUNyRDtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBaUQ7SUFDakQseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osOEJBQThCO0lBQzlCO1FBQ0ksWUFBWTtRQUNaLHFDQUFxQztRQUNyQyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQjtZQUNJLGNBQWM7WUFDZCxnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGNBQWM7WUFDZCxnQkFBZ0I7UUFDcEI7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFFBQVEsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixnQkFBZ0I7UUFDcEIsaUNBQWlDO1FBQ2pDLGNBQWM7QUFDdEI7QUFDQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7UUFDSSxpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGVBQWU7UUFDZix5QkFBeUI7UUFDekI7WUFDSSx3QkFBd0I7WUFDeEIsY0FBYztZQUNkLDRCQUE0QjtZQUM1QiwyQkFBMkI7O1lBRTNCLGNBQWM7WUFDZCxXQUFXO1FBQ2Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0Esc0JBQXNCLG9DQUFvQyxDQUFDO0FBQzNELHVCQUF1QiwyQkFBMkIsRUFBRSxTQUFTLENBQUM7QUFDOUQ7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBLGdCQUFnQjtBQUNoQjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFEQUFxRDtJQUNyRDtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogU2VwZXJhdGVkIGZvciBnbG9iYWwgY2xhc3NlcyAqL1xcbi5jcmVkaXR7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcbiAgICA+YXtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG4uY3JlZGl0OmhvdmVye1xcbiAgICBzY2FsZToyMDAlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuLyogSGVhZGVyIGFyZWEgYmVsb3cgKi9cXG5oZWFkZXJ7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG4uYmFubmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSBibGFjaztcXG4gICAgPi50ZXh0LWJne1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggYmxhY2s7XFxuICAgICAgICA+LnRpdGxle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgICAgICB9XFxuICAgICAgICA+LnN1Yi10aXRsZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgID4udGV4dC1iZz5we1xcbiAgICAgICAgbWFyZ2luOjBcXG4gICAgfVxcbn1cXG5cXG4vKiBNYWluIGFyZWEgYmVsb3cgKi9cXG5tYWlue1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMjBmciAvIDFmciA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG4ub3ZlcnZpZXctdHJlZXtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICA+LnRpdGxle3RleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDg3LCA5NCk7XFxuICAgICAgICBwYWRkaW5nOiAxMCUgMH1cXG59XFxuLm92ZXJ2aWV3e1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxuICAgID4ub3ZlcnZpZXctcHJvamVjdHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcXG4gICAgICAgIGxpc3Qtc3R5bGU6Y2lyY2xlIGluc2lkZSBub25lO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgID4ub3ZlcnZpZXctdG9kb3tcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyBpbnNpZGUgbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOjJweCBkYXNoZWQgYmxhY2s7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XFxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnRvb2xiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjQ4Nik7XFxuXFxufVxcblxcbi50b29sYmFyLWJ1dHRvbntcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b29sYmFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDE0OCk7fVxcbi50b29sYmFyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyBzY2FsZTo5MCU7fVxcbi5jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxufVxcblxcblxcbi8qIGZvb3RlciBhcmVhICovXFxuZm9vdGVye1xcbiAgICBmbGV4OiAwIDEgNDBweDtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC40NjYpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcXG4gICAgPmF7XFxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxufVxcbmZvb3Rlcjpob3ZlcntcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL21vZGFscy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHR5cGUpIHtcblx0Ly8gRmV0Y2ggbW9kYWwgZWxlbWVudCBmcm9tIERPTVxuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXG5cblx0Ly8gQ3JlYXRlIHJlbGV2YW50IG1vZGFsIGNvbnRlbnRcblx0Ly8gRm9ybSBlbGVtZW50cyBob2xkcyBlbnRpcmUgZm9ybSBpbnNpZGUgbW9kYWxcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuXG5cdC8vVGl0bGUgZWxlbWVudCwgdGVsbHMgdGhlIHR5cGUgb2Ygb2JqZWN0IGJlaW5nIGNyZWF0ZWRcblx0Y29uc3QgcGFyYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdHBhcmFUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnaGVhZGVyJylcblx0Y29uc3QgbW9kYWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcblx0bW9kYWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtb2RhbCcpXG5cdG1vZGFsTGFiZWwudGV4dENvbnRlbnQgPSB0eXBlLnRvVXBwZXJDYXNlKClcblx0cGFyYVRpdGxlLmFwcGVuZENoaWxkKG1vZGFsTGFiZWwpXG5cblx0Ly8gQ2hlY2sgd2hpY2ggdHlwZSB0aGUgbW9kYWwgaXMgZm9yKHRvZG8sIG9yIHByb2plY3Q/KVxuXHQvL0NyZWF0ZSByZWxldmFudCBpbnB1dCBmaWVsZHNcblx0Y29uc3QgaW5wdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdGlucHV0UGFyYS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuXHRpZiAodHlwZSA9PT0gJ3RvZG8nKSB7XG5cdFx0Y3JlYXRlVG9kb01vZGFsKGlucHV0UGFyYSlcblx0fSBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcblx0XHRjcmVhdGVQcm9qZWN0TW9kYWwoaW5wdXRQYXJhKVxuXHR9XG5cblx0Ly9Nb2RhbCBidXR0b25zXG5cdGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0c3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ1dHRvbicpXG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jylcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jylcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnc3VibWl0Jylcblx0Y29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXHRjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9uJylcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKVxuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdjYW5jZWwnKVxuXHRidG5EaXYuYXBwZW5kKHN1Ym1pdEJ0biwgY2FuY2VsQnRuKVxuXG5cdC8vcHV0IGl0IGFsbCB0b2dldGhlciFcblx0Zm9ybS5hcHBlbmQocGFyYVRpdGxlLCBpbnB1dFBhcmEsIGJ0bkRpdilcblx0bW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb01vZGFsKGlucHV0UGFyYSkge1xuXHQvLyBpbnB1dCBwYXJhIHdpbGwgaG9sZCBhbGwgaW5wdXQgZWxlbWVudHMgZm9yIGVhc3kgYXBwZW5kaW5nIGxhdGVyXG5cblx0Ly8gVGl0bGUgaW5wdXRcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcblx0dGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jylcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTogJ1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXHRzZXRJbnB1dEF0dHJpYnV0ZXModGl0bGVJbnB1dCwgJ3RpdGxlJywgJ3RleHQnKVxuXHQvLyBhZGQgZXh0cmEgYXR0cmlidXRlIG9uIHRoaXMgb25lIHNvIGl0J3MgdGhlIGZpcnN0IGlucHV0IGZpZWxkIGZvY3Vzc2VkXG5cdHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnJylcblx0Ly8gcGFja2FnZSBlbGVtZW50XG5cdHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuXHQvLyBkZXNjcmlwdGlvbiBpbnB1dFxuXHRjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uSW5wdXQnKVxuXHRkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnXG5cdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cdHNldElucHV0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LCAnZGVzY3JpcHRpb24nLCAndGV4dCcpXG5cdGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcblxuXHQvLyBkdWVEYXRlIGlucHV0XG5cdGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcblx0ZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGVJbnB1dCcpXG5cdGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJ1xuXHRjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cdHNldElucHV0QXR0cmlidXRlcyhkdWVEYXRlSW5wdXQsICdkdWVEYXRlJywgJ2RhdGUnKVxuXHRkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KVxuXG5cdC8vIHByaW9yaXR5XG5cdGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlJbnB1dCcpXG5cdHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICdcblx0Y29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0c2V0SW5wdXRBdHRyaWJ1dGVzKHByaW9yaXR5SW5wdXQsICdwcmlvcml0eScsICdjaGVja2JveCcpXG5cdHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dClcblxuXHQvLyBOb3Rlc1xuXHRjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzSW5wdXQnKVxuXHRub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzOiAnXG5cdGNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cdHNldElucHV0QXR0cmlidXRlcyhub3Rlc0lucHV0LCAnbm90ZXMnLCAndGV4dEFyZWEnKVxuXHQvLyB0ZXh0QXJlYSBzcGVjaWZpYyBhdHRyaWJ1dGVzXG5cdG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzQnKVxuXHRub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICcxMCcpXG5cdG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dClcblxuXHQvLyBjaGVja2xpc3RzKHJlc3QpXG5cdGNvbnN0IGNoZWNrbGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRjaGVja2xpc3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja2xpc3RJbnB1dCcpXG5cdGNoZWNrbGlzdExhYmVsLnRleHRDb250ZW50ID0gJ0NoZWNrbGlzdDogJ1xuXHRjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0c2V0SW5wdXRBdHRyaWJ1dGVzKGNoZWNrbGlzdElucHV0LCAnY2hlY2tsaXN0JywgJ3RleHQnKVxuXHRjaGVja2xpc3RMYWJlbC5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dClcblxuXHQvLyBQdXQgaXQgYWxsIHRvZ2V0aGVyXG5cdGlucHV0UGFyYS5hcHBlbmQoXG5cdFx0dGl0bGVMYWJlbCxcblx0XHRkZXNjcmlwdGlvbkxhYmVsLFxuXHRcdGR1ZURhdGVMYWJlbCxcblx0XHRwcmlvcml0eUxhYmVsLFxuXHRcdG5vdGVzTGFiZWwsXG5cdFx0Y2hlY2tsaXN0TGFiZWxcblx0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoaW5wdXRQYXJhKSB7XG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGVJbnB1dCcpXG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICdcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0c2V0SW5wdXRBdHRyaWJ1dGVzKHRpdGxlSW5wdXQsICd0aXRsZScsICd0ZXh0Jylcblx0Ly8gYWRkIGV4dHJhIGF0dHJpYnV0ZSBvbiB0aGlzIG9uZSBzbyBpdCdzIHRoZSBmaXJzdCBpbnB1dCBmaWVsZCBmb2N1c3NlZFxuXHR0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgJycpXG5cdC8vIHBhY2thZ2UgZWxlbWVudFxuXHR0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG5cblx0aW5wdXRQYXJhLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG59XG5cbmZ1bmN0aW9uIHNldElucHV0QXR0cmlidXRlcyhlbGVtLCB0eXBlLCBpbnBUeXBlKSB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG5cdFx0bmFtZTogJ3Byb2plY3QtJyArIHR5cGUsXG5cdFx0aWQ6ICdwcm9qZWN0LScgKyB0eXBlLFxuXHRcdHR5cGU6IGlucFR5cGUsXG5cdFx0cmVxdWlyZWQ6ICcnLFxuXHR9XG5cdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuXHRcdGVsZW0uc2V0QXR0cmlidXRlKGtleSwgdmFsKVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcblx0Y29uc3RydWN0b3IodGl0bGUgPSAnZGVmYXVsdCcpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGVcblx0XHR0aGlzLnRvZG9zID0gW11cblx0fVxuXG5cdGFkZFRvUHJvamVjdCh0b2RvKSB7XG5cdFx0dGhpcy50b2Rvcy5wdXNoKHRvZG8pXG5cdH1cblxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNDE4MzgyODA3NV8xMl8yXzEyXzI1XzRgLHRoaXMudGl0bGUpKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDQxODM4MjgwNzVfMTNfMl8xM18yNV80YCx0aGlzLnRvZG9zKSlcblx0fVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDQ5ZmI0ZD1fMHgzZjRkOyhmdW5jdGlvbihfMHgxYWNmMjcsXzB4MTIzMTFiKXt2YXIgXzB4NGJlM2ExPV8weDNmNGQsXzB4MTg2YjllPV8weDFhY2YyNygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4M2EwMzA0PS1wYXJzZUludChfMHg0YmUzYTEoMHgyMzcpKS8weDEqKC1wYXJzZUludChfMHg0YmUzYTEoMHgxZjApKS8weDIpK3BhcnNlSW50KF8weDRiZTNhMSgweDIyYSkpLzB4MyooLXBhcnNlSW50KF8weDRiZTNhMSgweDIwYikpLzB4NCkrcGFyc2VJbnQoXzB4NGJlM2ExKDB4MWU3KSkvMHg1Ky1wYXJzZUludChfMHg0YmUzYTEoMHgxYTMpKS8weDYrLXBhcnNlSW50KF8weDRiZTNhMSgweDIwMykpLzB4NyooLXBhcnNlSW50KF8weDRiZTNhMSgweDI2OCkpLzB4OCkrcGFyc2VJbnQoXzB4NGJlM2ExKDB4MWUzKSkvMHg5KihwYXJzZUludChfMHg0YmUzYTEoMHgxYTcpKS8weGEpKy1wYXJzZUludChfMHg0YmUzYTEoMHgyMDYpKS8weGIqKHBhcnNlSW50KF8weDRiZTNhMSgweDFmZSkpLzB4Yyk7aWYoXzB4M2EwMzA0PT09XzB4MTIzMTFiKWJyZWFrO2Vsc2UgXzB4MTg2YjllWydwdXNoJ10oXzB4MTg2YjllWydzaGlmdCddKCkpO31jYXRjaChfMHgzZjZmZDEpe18weDE4NmI5ZVsncHVzaCddKF8weDE4NmI5ZVsnc2hpZnQnXSgpKTt9fX0oXzB4YThiMywweDQ2NDRhKSk7dmFyIGo9T2JqZWN0W18weDQ5ZmI0ZCgweDIwYyldLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSxlZT1PYmplY3RbXzB4NDlmYjRkKDB4MjBhKV0sdGU9T2JqZWN0W18weDQ5ZmI0ZCgweDI1MildLG5lPU9iamVjdFtfMHg0OWZiNGQoMHgyM2IpXVtfMHg0OWZiNGQoMHgyMzgpXSxyZT0oXzB4MTllNGVlLF8weDMwNzI5MixfMHg1ZGRjZDQsXzB4NTk3ZjNlKT0+e3ZhciBfMHgyNzYzMDQ9XzB4NDlmYjRkO2lmKF8weDMwNzI5MiYmdHlwZW9mIF8weDMwNzI5Mj09J29iamVjdCd8fHR5cGVvZiBfMHgzMDcyOTI9PV8weDI3NjMwNCgweDIyNykpe2ZvcihsZXQgXzB4ZTRkNDE5IG9mIGVlKF8weDMwNzI5MikpIW5lW18weDI3NjMwNCgweDE5YSldKF8weDE5ZTRlZSxfMHhlNGQ0MTkpJiZfMHhlNGQ0MTkhPT1fMHg1ZGRjZDQmJkgoXzB4MTllNGVlLF8weGU0ZDQxOSx7J2dldCc6KCk9Pl8weDMwNzI5MltfMHhlNGQ0MTldLCdlbnVtZXJhYmxlJzohKF8weDU5N2YzZT1HKF8weDMwNzI5MixfMHhlNGQ0MTkpKXx8XzB4NTk3ZjNlW18weDI3NjMwNCgweDFmMSldfSk7fXJldHVybiBfMHgxOWU0ZWU7fSx4PShfMHgxOWY3NTksXzB4MWJkN2UzLF8weDEzYTc1Myk9PihfMHgxM2E3NTM9XzB4MTlmNzU5IT1udWxsP2oodGUoXzB4MTlmNzU5KSk6e30scmUoXzB4MWJkN2UzfHwhXzB4MTlmNzU5fHwhXzB4MTlmNzU5W18weDQ5ZmI0ZCgweDFiYyldP0goXzB4MTNhNzUzLF8weDQ5ZmI0ZCgweDFmNikseyd2YWx1ZSc6XzB4MTlmNzU5LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MTNhNzUzLF8weDE5Zjc1OSkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MmUyNWVkLF8weDEwNjM4YixfMHg0YWE5ZGEsXzB4MjI4NDI2LF8weDQ3Nzk0Yil7dmFyIF8weDUyMGYxYT1fMHg0OWZiNGQ7dGhpc1snZ2xvYmFsJ109XzB4MmUyNWVkLHRoaXNbXzB4NTIwZjFhKDB4MWNjKV09XzB4MTA2MzhiLHRoaXNbJ3BvcnQnXT1fMHg0YWE5ZGEsdGhpc1tfMHg1MjBmMWEoMHgxZjMpXT1fMHgyMjg0MjYsdGhpc1tfMHg1MjBmMWEoMHgxOTYpXT1fMHg0Nzc5NGIsdGhpc1tfMHg1MjBmMWEoMHgxYmIpXT0hMHgwLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzW18weDUyMGYxYSgweDI0ZSldPSEweDEsdGhpc1tfMHg1MjBmMWEoMHgyMTkpXT0hMHgxLHRoaXNbXzB4NTIwZjFhKDB4MjQ3KV09XzB4MmUyNWVkW18weDUyMGYxYSgweDIwMildPy5bJ2VudiddPy5bXzB4NTIwZjFhKDB4MjFmKV09PT1fMHg1MjBmMWEoMHgxZTUpLHRoaXNbXzB4NTIwZjFhKDB4MTg3KV09IXRoaXNbXzB4NTIwZjFhKDB4MWFhKV1bXzB4NTIwZjFhKDB4MjAyKV0/LltfMHg1MjBmMWEoMHgxZDcpXT8uW18weDUyMGYxYSgweDIxZSldJiYhdGhpc1tfMHg1MjBmMWEoMHgyNDcpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbXzB4NTIwZjFhKDB4MjQ5KV09MHgwLHRoaXNbXzB4NTIwZjFhKDB4MjRjKV09MHgxNCx0aGlzW18weDUyMGYxYSgweDE4OSldPV8weDUyMGYxYSgweDI2ZSksdGhpc1tfMHg1MjBmMWEoMHgxZWYpXT0odGhpc1tfMHg1MjBmMWEoMHgxODcpXT9fMHg1MjBmMWEoMHgyMDkpOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbXzB4NTIwZjFhKDB4MTg5KV07fWFzeW5jW18weDQ5ZmI0ZCgweDIwZildKCl7dmFyIF8weDU4ZmZmMj1fMHg0OWZiNGQ7aWYodGhpc1snX1dlYlNvY2tldENsYXNzJ10pcmV0dXJuIHRoaXNbXzB4NThmZmYyKDB4MjU3KV07bGV0IF8weGVmY2U2O2lmKHRoaXNbXzB4NThmZmYyKDB4MTg3KV18fHRoaXNbXzB4NThmZmYyKDB4MjQ3KV0pXzB4ZWZjZTY9dGhpc1tfMHg1OGZmZjIoMHgxYWEpXVtfMHg1OGZmZjIoMHgxYTApXTtlbHNle2lmKHRoaXNbXzB4NThmZmYyKDB4MWFhKV1bXzB4NThmZmYyKDB4MjAyKV0/LltfMHg1OGZmZjIoMHgxYjYpXSlfMHhlZmNlNj10aGlzW18weDU4ZmZmMigweDFhYSldW18weDU4ZmZmMigweDIwMildPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4MmVjMWVlPWF3YWl0IGltcG9ydCgncGF0aCcpO18weGVmY2U2PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpW18weDU4ZmZmMigweDI0OCldKF8weDJlYzFlZVtfMHg1OGZmZjIoMHgxZGQpXSh0aGlzW18weDU4ZmZmMigweDFmMyldLCd3cy9pbmRleC5qcycpKVtfMHg1OGZmZjIoMHgyNDQpXSgpKSlbXzB4NThmZmYyKDB4MWY2KV07fWNhdGNoe3RyeXtfMHhlZmNlNj1yZXF1aXJlKHJlcXVpcmUoXzB4NThmZmYyKDB4MWVkKSlbXzB4NThmZmYyKDB4MWRkKV0odGhpc1tfMHg1OGZmZjIoMHgxZjMpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHg1OGZmZjIoMHgyNGIpKTt9fX1yZXR1cm4gdGhpc1tfMHg1OGZmZjIoMHgyNTcpXT1fMHhlZmNlNixfMHhlZmNlNjt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDViZmRlYT1fMHg0OWZiNGQ7dGhpc1tfMHg1YmZkZWEoMHgyMTkpXXx8dGhpc1tfMHg1YmZkZWEoMHgyNGUpXXx8dGhpc1tfMHg1YmZkZWEoMHgyNDkpXT49dGhpc1tfMHg1YmZkZWEoMHgyNGMpXXx8KHRoaXNbXzB4NWJmZGVhKDB4MjVjKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1tfMHg1YmZkZWEoMHgyNDkpXSsrLHRoaXNbXzB4NWJmZGVhKDB4MWM3KV09bmV3IFByb21pc2UoKF8weDU0NThiMyxfMHgxYTM5NjkpPT57dmFyIF8weDQ3ODY3Yj1fMHg1YmZkZWE7dGhpc1tfMHg0Nzg2N2IoMHgyMGYpXSgpW18weDQ3ODY3YigweDI0MyldKF8weDM3MTQ2Yz0+e3ZhciBfMHg0NmUzMjE9XzB4NDc4NjdiO2xldCBfMHgzYjBmMTY9bmV3IF8weDM3MTQ2YyhfMHg0NmUzMjEoMHgyNTUpKyghdGhpc1snX2luQnJvd3NlciddJiZ0aGlzW18weDQ2ZTMyMSgweDE5NildP18weDQ2ZTMyMSgweDE5OCk6dGhpc1tfMHg0NmUzMjEoMHgxY2MpXSkrJzonK3RoaXNbXzB4NDZlMzIxKDB4MWVhKV0pO18weDNiMGYxNltfMHg0NmUzMjEoMHgxYzIpXT0oKT0+e3ZhciBfMHgxN2M1NzU9XzB4NDZlMzIxO3RoaXNbXzB4MTdjNTc1KDB4MWJiKV09ITB4MSx0aGlzW18weDE3YzU3NSgweDIxYildKF8weDNiMGYxNiksdGhpc1tfMHgxN2M1NzUoMHgyMzApXSgpLF8weDFhMzk2OShuZXcgRXJyb3IoXzB4MTdjNTc1KDB4MWI5KSkpO30sXzB4M2IwZjE2W18weDQ2ZTMyMSgweDI0YSldPSgpPT57dmFyIF8weDQ4MTRmZT1fMHg0NmUzMjE7dGhpc1tfMHg0ODE0ZmUoMHgxODcpXXx8XzB4M2IwZjE2W18weDQ4MTRmZSgweDFkMildJiZfMHgzYjBmMTZbJ19zb2NrZXQnXVtfMHg0ODE0ZmUoMHgyMjMpXSYmXzB4M2IwZjE2W18weDQ4MTRmZSgweDFkMildW18weDQ4MTRmZSgweDIyMyldKCksXzB4NTQ1OGIzKF8weDNiMGYxNik7fSxfMHgzYjBmMTZbXzB4NDZlMzIxKDB4MWViKV09KCk9Pnt2YXIgXzB4NWRjOTJlPV8weDQ2ZTMyMTt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1tfMHg1ZGM5MmUoMHgyMWIpXShfMHgzYjBmMTYpLHRoaXNbXzB4NWRjOTJlKDB4MjMwKV0oKTt9LF8weDNiMGYxNltfMHg0NmUzMjEoMHgyNTEpXT1fMHgyY2E3MWI9Pnt2YXIgXzB4NTBhM2U5PV8weDQ2ZTMyMTt0cnl7XzB4MmNhNzFiJiZfMHgyY2E3MWJbXzB4NTBhM2U5KDB4MWVjKV0mJnRoaXNbXzB4NTBhM2U5KDB4MTg3KV0mJkpTT05bXzB4NTBhM2U5KDB4MWRiKV0oXzB4MmNhNzFiWydkYXRhJ10pW18weDUwYTNlOSgweDIwMSldPT09XzB4NTBhM2U5KDB4MWU0KSYmdGhpc1tfMHg1MGEzZTkoMHgxYWEpXVtfMHg1MGEzZTkoMHgyMTUpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4NDc4NjdiKDB4MjQzKV0oXzB4NDE0NTFjPT4odGhpc1tfMHg0Nzg2N2IoMHgyNGUpXT0hMHgwLHRoaXNbXzB4NDc4NjdiKDB4MjE5KV09ITB4MSx0aGlzW18weDQ3ODY3YigweDI1YyldPSEweDEsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4NDc4NjdiKDB4MjQ5KV09MHgwLF8weDQxNDUxYykpWydjYXRjaCddKF8weDQ4OTRkNT0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxjb25zb2xlW18weDQ3ODY3YigweDIyNSldKF8weDQ3ODY3YigweDI0MCkrdGhpc1tfMHg0Nzg2N2IoMHgxODkpXSksXzB4MWEzOTY5KG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4NDg5NGQ1JiZfMHg0ODk0ZDVbXzB4NDc4NjdiKDB4MWE5KV0pKSkpKTt9KSk7fVtfMHg0OWZiNGQoMHgyMWIpXShfMHg1YzdjM2Qpe3ZhciBfMHgxZDllNT1fMHg0OWZiNGQ7dGhpc1tfMHgxZDllNSgweDI0ZSldPSEweDEsdGhpc1tfMHgxZDllNSgweDIxOSldPSEweDE7dHJ5e18weDVjN2MzZFtfMHgxZDllNSgweDFlYildPW51bGwsXzB4NWM3YzNkWydvbmVycm9yJ109bnVsbCxfMHg1YzdjM2RbXzB4MWQ5ZTUoMHgyNGEpXT1udWxsO31jYXRjaHt9dHJ5e18weDVjN2MzZFtfMHgxZDllNSgweDE5MyldPDB4MiYmXzB4NWM3YzNkW18weDFkOWU1KDB4MjVlKV0oKTt9Y2F0Y2h7fX1bXzB4NDlmYjRkKDB4MjMwKV0oKXt2YXIgXzB4MzYxNDRlPV8weDQ5ZmI0ZDtjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddKSYmKHRoaXNbXzB4MzYxNDRlKDB4MWM5KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg0NzkwNWU9XzB4MzYxNDRlO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHg0NzkwNWUoMHgyMTkpXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDQ3OTA1ZSgweDFjNyldPy5bXzB4NDc5MDVlKDB4MjIwKV0oKCk9PnRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKSkpO30sMHgxZjQpLHRoaXNbXzB4MzYxNDRlKDB4MWM5KV1bXzB4MzYxNDRlKDB4MjIzKV0mJnRoaXNbXzB4MzYxNDRlKDB4MWM5KV1bJ3VucmVmJ10oKSk7fWFzeW5jW18weDQ5ZmI0ZCgweDFmYildKF8weDJlM2YzOCl7dmFyIF8weGE3Nzc2OD1fMHg0OWZiNGQ7dHJ5e2lmKCF0aGlzW18weGE3Nzc2OCgweDFiYildKXJldHVybjt0aGlzW18weGE3Nzc2OCgweDI1YyldJiZ0aGlzW18weGE3Nzc2OCgweDFkOSldKCksKGF3YWl0IHRoaXNbXzB4YTc3NzY4KDB4MWM3KV0pW18weGE3Nzc2OCgweDFmYildKEpTT05bJ3N0cmluZ2lmeSddKF8weDJlM2YzOCkpO31jYXRjaChfMHg1Nzc5ZGYpe2NvbnNvbGVbXzB4YTc3NzY4KDB4MjI1KV0odGhpc1tfMHhhNzc3NjgoMHgxZWYpXSsnOlxcXFx4MjAnKyhfMHg1Nzc5ZGYmJl8weDU3NzlkZltfMHhhNzc3NjgoMHgxYTkpXSkpLHRoaXNbXzB4YTc3NzY4KDB4MWJiKV09ITB4MSx0aGlzW18weGE3Nzc2OCgweDIzMCldKCk7fX19O2Z1bmN0aW9uIGIoXzB4MTc5Y2Y3LF8weDNkMTYxMyxfMHgyODY3ZTYsXzB4MjUwZGVjLF8weDViZmQ0MixfMHgxNzc2OTApe3ZhciBfMHg1ODlmMDA9XzB4NDlmYjRkO2xldCBfMHg1YjYwZGU9XzB4Mjg2N2U2W18weDU4OWYwMCgweDFlMildKCcsJylbJ21hcCddKF8weDNmMWMxND0+e3ZhciBfMHg0NTEzY2U9XzB4NTg5ZjAwO3RyeXtfMHgxNzljZjdbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXXx8KChfMHg1YmZkNDI9PT0nbmV4dC5qcyd8fF8weDViZmQ0Mj09PV8weDQ1MTNjZSgweDFmOCl8fF8weDViZmQ0Mj09PV8weDQ1MTNjZSgweDFkZSl8fF8weDViZmQ0Mj09PV8weDQ1MTNjZSgweDFhZCkpJiYoXzB4NWJmZDQyKz0hXzB4MTc5Y2Y3W18weDQ1MTNjZSgweDIwMildPy5bXzB4NDUxM2NlKDB4MWQ3KV0/LltfMHg0NTEzY2UoMHgyMWUpXSYmXzB4MTc5Y2Y3W18weDQ1MTNjZSgweDIwMildPy5bXzB4NDUxM2NlKDB4MWZjKV0/LltfMHg0NTEzY2UoMHgyMWYpXSE9PV8weDQ1MTNjZSgweDFlNSk/J1xcXFx4MjBicm93c2VyJzpfMHg0NTEzY2UoMHgyNTkpKSxfMHgxNzljZjdbXzB4NDUxM2NlKDB4MjRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDViZmQ0Mn0pO2xldCBfMHgxNmI1YmI9bmV3IFgoXzB4MTc5Y2Y3LF8weDNkMTYxMyxfMHgzZjFjMTQsXzB4MjUwZGVjLF8weDE3NzY5MCk7cmV0dXJuIF8weDE2YjViYltfMHg0NTEzY2UoMHgxZmIpXVtfMHg0NTEzY2UoMHgxYzApXShfMHgxNmI1YmIpO31jYXRjaChfMHg1ZDVhN2Qpe3JldHVybiBjb25zb2xlW18weDQ1MTNjZSgweDIyNSldKF8weDQ1MTNjZSgweDFjYSksXzB4NWQ1YTdkJiZfMHg1ZDVhN2RbXzB4NDUxM2NlKDB4MWE5KV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDM0YmYxOD0+XzB4NWI2MGRlW18weDU4OWYwMCgweDFiNyldKF8weDIwYWRlMD0+XzB4MjBhZGUwKF8weDM0YmYxOCkpO31mdW5jdGlvbiBfMHgzZjRkKF8weDQyMDdmNyxfMHgxNmMyOTgpe3ZhciBfMHhhOGIzNjM9XzB4YThiMygpO3JldHVybiBfMHgzZjRkPWZ1bmN0aW9uKF8weDNmNGRkZCxfMHgxZDk4MWEpe18weDNmNGRkZD1fMHgzZjRkZGQtMHgxODU7dmFyIF8weDMyOTJhND1fMHhhOGIzNjNbXzB4M2Y0ZGRkXTtyZXR1cm4gXzB4MzI5MmE0O30sXzB4M2Y0ZChfMHg0MjA3ZjcsXzB4MTZjMjk4KTt9ZnVuY3Rpb24gVyhfMHgyZGIwYmEpe3ZhciBfMHgyNTNjMDM9XzB4NDlmYjRkO2xldCBfMHg0ODFiNTI9ZnVuY3Rpb24oXzB4MmZiM2YxLF8weGZjZThmZCl7cmV0dXJuIF8weGZjZThmZC1fMHgyZmIzZjE7fSxfMHgzYjg5ZTY7aWYoXzB4MmRiMGJhW18weDI1M2MwMygweDFjZCldKV8weDNiODllNj1mdW5jdGlvbigpe3ZhciBfMHgzZjE1MjI9XzB4MjUzYzAzO3JldHVybiBfMHgyZGIwYmFbXzB4M2YxNTIyKDB4MWNkKV1bXzB4M2YxNTIyKDB4MWNiKV0oKTt9O2Vsc2V7aWYoXzB4MmRiMGJhW18weDI1M2MwMygweDIwMildJiZfMHgyZGIwYmFbJ3Byb2Nlc3MnXVtfMHgyNTNjMDMoMHgyNTYpXSYmXzB4MmRiMGJhW18weDI1M2MwMygweDIwMildPy5bXzB4MjUzYzAzKDB4MWZjKV0/LltfMHgyNTNjMDMoMHgyMWYpXSE9PSdlZGdlJylfMHgzYjg5ZTY9ZnVuY3Rpb24oKXt2YXIgXzB4MzI2ZDYxPV8weDI1M2MwMztyZXR1cm4gXzB4MmRiMGJhW18weDMyNmQ2MSgweDIwMildW18weDMyNmQ2MSgweDI1NildKCk7fSxfMHg0ODFiNTI9ZnVuY3Rpb24oXzB4MjI0NWM2LF8weDQ5NDA2Nil7cmV0dXJuIDB4M2U4KihfMHg0OTQwNjZbMHgwXS1fMHgyMjQ1YzZbMHgwXSkrKF8weDQ5NDA2NlsweDFdLV8weDIyNDVjNlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg3ZmM0MzV9PXJlcXVpcmUoJ3BlcmZfaG9va3MnKTtfMHgzYjg5ZTY9ZnVuY3Rpb24oKXt2YXIgXzB4MjViYWQxPV8weDI1M2MwMztyZXR1cm4gXzB4N2ZjNDM1W18weDI1YmFkMSgweDFjYildKCk7fTt9Y2F0Y2h7XzB4M2I4OWU2PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NDgxYjUyLCd0aW1lU3RhbXAnOl8weDNiODllNiwnbm93JzooKT0+RGF0ZVsnbm93J10oKX07fWZ1bmN0aW9uIF8weGE4YjMoKXt2YXIgXzB4NDhiNmJiPVsnZ2V0T3duUHJvcGVydHlOYW1lcycsJzUxNDRzdENTcU4nLCdjcmVhdGUnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2dldFdlYlNvY2tldENsYXNzJywnX2lzTWFwJywnZGVwdGgnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdzeW1ib2wnLCdsb2NhdGlvbicsJ19pc05lZ2F0aXZlWmVybycsJ3B1c2gnLCdzdGFja1RyYWNlTGltaXQnLCdfY29ubmVjdGluZycsJ19TeW1ib2wnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCd2YWx1ZScsJ25vZGUnLCdORVhUX1JVTlRJTUUnLCdjYXRjaCcsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ3VucmVmJywndGltZScsJ3dhcm4nLCdlbGVtZW50cycsJ2Z1bmN0aW9uJywndHlwZScsJ19wcm9wZXJ0eScsJzI3cmFPWWdSJywnYWxsU3RyTGVuZ3RoJywnc3RyTGVuZ3RoJywnU2V0Jywnb2JqZWN0JywndG90YWxTdHJMZW5ndGgnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2xlbmd0aCcsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdub0Z1bmN0aW9ucycsJ19yZWdFeHBUb1N0cmluZycsJ251eHQnLCdhdXRvRXhwYW5kTGltaXQnLCc1RWZqRVFMJywnaGFzT3duUHJvcGVydHknLCdIVE1MQWxsQ29sbGVjdGlvbicsJ3RpbWVFbmQnLCdwcm90b3R5cGUnLCdfcHJvcGVydHlOYW1lJywnY29uY2F0JywnY29uc29sZScsJ19rZXlTdHJSZWdFeHAnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ25lZ2F0aXZlSW5maW5pdHknLCdib29sZWFuJywndGhlbicsJ3RvU3RyaW5nJywncGFyZW50Jywnc2xpY2UnLCdfaW5OZXh0RWRnZScsJ3BhdGhUb0ZpbGVVUkwnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ29ub3BlbicsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ19jb25uZWN0ZWQnLCdjYXBwZWRQcm9wcycsJ19jbGVhbk5vZGUnLCdvbm1lc3NhZ2UnLCdnZXRQcm90b3R5cGVPZicsJ3N0YWNrJywndG9Mb3dlckNhc2UnLCd3czovLycsJ2hydGltZScsJ19XZWJTb2NrZXRDbGFzcycsJ19wX25hbWUnLCdcXFxceDIwc2VydmVyJywnX3R5cGUnLCdudWxsJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ2Nsb3NlJywnbG9nJywndmFsdWVPZicsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ2Vycm9yJywnU3RyaW5nJywnaW5kZXgnLCdfY2FwSWZTdHJpbmcnLCdyb290X2V4cF9pZCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCcxMTM3MDRKRFVBQVUnLCdfdW5kZWZpbmVkJywnbnVtYmVyJywnX2hhc01hcE9uSXRzUGF0aCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnMTI3LjAuMC4xJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19xdW90ZWRSZWdFeHAnLCdfcF9sZW5ndGgnLCdfaW5Ccm93c2VyJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfbnVtYmVyUmVnRXhwJywnd2VicGFjaycsJ3N1YnN0cicsXFxcIi9ob21lL2RhbmllbGxyLy52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMjg5L25vZGVfbW9kdWxlc1xcXCIsJ19pc1NldCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ21hdGNoJywnJywnX3NldE5vZGVMYWJlbCcsJ3JlYWR5U3RhdGUnLCdsZXZlbCcsJycsJ2RvY2tlcml6ZWRBcHAnLCdyZWR1Y2VMaW1pdHMnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ19jb25zb2xlX25pbmphJywnY2FsbCcsJ3N0cmluZycsJ01hcCcsJzM0ODc5JywndW5kZWZpbmVkJywnX29iamVjdFRvU3RyaW5nJywnV2ViU29ja2V0JywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ2VsYXBzZWQnLCcxOTU2MDQ4cXVZbUZhJywnYXV0b0V4cGFuZCcsJ3Vua25vd24nLCdfZGF0ZVRvU3RyaW5nJywnMTE4MEx2enBGUCcsJ0Vycm9yJywnbWVzc2FnZScsJ2dsb2JhbCcsJ0J1ZmZlcicsJ3Jvb3RFeHByZXNzaW9uJywnYW5ndWxhcicsJ3NvcnRQcm9wcycsJ2NhcHBlZCcsJ3JlcGxhY2UnLCdzZXJpYWxpemUnLCd1bnNoaWZ0JywnX2lzQXJyYXknLCdkYXRlJywnX3BfJywnX1dlYlNvY2tldCcsJ2ZvckVhY2gnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJzE3MDkxMTExOTkxNTMnLCdfYWxsb3dlZFRvU2VuZCcsJ19fZXMnKydNb2R1bGUnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnYmluZCcsJ2dldCcsJ29uZXJyb3InLCdfaXNQcmltaXRpdmVUeXBlJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdiaWdpbnQnLCdfd3MnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdfcmVjb25uZWN0VGltZW91dCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0Jywnbm93JywnaG9zdCcsJ3BlcmZvcm1hbmNlJywnbmFuJywnX3NldE5vZGVJZCcsJ2NvdW50JywndHJhY2UnLCdfc29ja2V0JywnW29iamVjdFxcXFx4MjBBcnJheV0nLCduZWdhdGl2ZVplcm8nLCdSZWdFeHAnLCdCb29sZWFuJywndmVyc2lvbnMnLCdzZXQnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3Rlc3QnLCdwYXJzZScsJ19hZGRMb2FkTm9kZScsJ2pvaW4nLCdhc3RybycsJ051bWJlcicsJ3NldHRlcicsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdzcGxpdCcsJzM3NjI5ZVpJWEV1JywncmVsb2FkJywnZWRnZScsJ2NhcHBlZEVsZW1lbnRzJywnOTMxOTA1TGFwS2F4JywnX3NvcnRQcm9wcycsJ3Byb3BzJywncG9ydCcsJ29uY2xvc2UnLCdkYXRhJywncGF0aCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJka20tZGVza3RvcFxcXCIsXFxcIjE5Mi4xNjguMS4xMDFcXFwiXSwnX3NlbmRFcnJvck1lc3NhZ2UnLCcxMTUyODZtdnNWVmEnLCdlbnVtZXJhYmxlJywnZ2V0dGVyJywnbm9kZU1vZHVsZXMnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2hpdHMnLCdkZWZhdWx0JywnY29uc3RydWN0b3InLCdyZW1peCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnaW5jbHVkZXMnLCdzZW5kJywnZW52JywnYXJyYXknLCcxMm5ia3VmdScsJ19hZGRQcm9wZXJ0eScsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdtZXRob2QnLCdwcm9jZXNzJywnMTYxcHllV1llJywnc3RyaW5naWZ5JywnY3VycmVudCcsJzczNjM5ODNkYWNkWE8nLCduYW1lJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJ107XzB4YThiMz1mdW5jdGlvbigpe3JldHVybiBfMHg0OGI2YmI7fTtyZXR1cm4gXzB4YThiMygpO31mdW5jdGlvbiBKKF8weDU0ZmQ5NSxfMHgxNTBhYWQsXzB4M2UzNzhhKXt2YXIgXzB4NTU1MjU2PV8weDQ5ZmI0ZDtpZihfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjBlKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NTRmZDk1W18weDU1NTI1NigweDIwZSldO2xldCBfMHgxMzNhYTk9XzB4NTRmZDk1W18weDU1NTI1NigweDIwMildPy5bJ3ZlcnNpb25zJ10/LltfMHg1NTUyNTYoMHgyMWUpXXx8XzB4NTRmZDk1W18weDU1NTI1NigweDIwMildPy5bXzB4NTU1MjU2KDB4MWZjKV0/LltfMHg1NTUyNTYoMHgyMWYpXT09PV8weDU1NTI1NigweDFlNSk7cmV0dXJuIF8weDEzM2FhOSYmXzB4M2UzNzhhPT09XzB4NTU1MjU2KDB4MjM1KT9fMHg1NGZkOTVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4NTRmZDk1WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT1fMHgxMzNhYTl8fCFfMHgxNTBhYWR8fF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMTUpXT8uWydob3N0bmFtZSddJiZfMHgxNTBhYWRbXzB4NTU1MjU2KDB4MWZhKV0oXzB4NTRmZDk1W18weDU1NTI1NigweDIxNSldWydob3N0bmFtZSddKSxfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjBlKV07fWZ1bmN0aW9uIFkoXzB4NTJlYWQ4LF8weDQ4OGJhZCxfMHgxYzY3NDIsXzB4NTkzZTkwKXt2YXIgXzB4NTllZDAyPV8weDQ5ZmI0ZDtfMHg1MmVhZDg9XzB4NTJlYWQ4LF8weDQ4OGJhZD1fMHg0ODhiYWQsXzB4MWM2NzQyPV8weDFjNjc0MixfMHg1OTNlOTA9XzB4NTkzZTkwO2xldCBfMHgxNjJlOTk9VyhfMHg1MmVhZDgpLF8weDRmN2RmZD1fMHgxNjJlOTlbJ2VsYXBzZWQnXSxfMHg1MjNiNmE9XzB4MTYyZTk5Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHg1NDAyY2N7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDhiYWZmPV8weDNmNGQ7dGhpc1tfMHg0OGJhZmYoMHgyM2YpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NDhiYWZmKDB4MThhKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDQ4YmFmZigweDE4NSldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbJ191bmRlZmluZWQnXT1fMHg1MmVhZDhbJ3VuZGVmaW5lZCddLHRoaXNbXzB4NDhiYWZmKDB4MWM1KV09XzB4NTJlYWQ4W18weDQ4YmFmZigweDIzOSldLHRoaXNbXzB4NDhiYWZmKDB4MWJkKV09T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddPU9iamVjdFtfMHg0OGJhZmYoMHgyMGEpXSx0aGlzW18weDQ4YmFmZigweDIxYSldPV8weDUyZWFkOFsnU3ltYm9sJ10sdGhpc1tfMHg0OGJhZmYoMHgyMzQpXT1SZWdFeHBbXzB4NDhiYWZmKDB4MjNiKV1bXzB4NDhiYWZmKDB4MjQ0KV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbJ3Byb3RvdHlwZSddWyd0b1N0cmluZyddO31bJ3NlcmlhbGl6ZSddKF8weDM3MTZkYyxfMHg0MmIyNTIsXzB4MzEyYTRhLF8weDE5YTIzZSl7dmFyIF8weDNmMzllYj1fMHgzZjRkLF8weDEwOTVmYj10aGlzLF8weDUwZjdkND1fMHgzMTJhNGFbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHg1NDNhZjQoXzB4MWI5ZWU5LF8weDZlMGNhYyxfMHhhZmJjOWUpe3ZhciBfMHhhYzNmZWY9XzB4M2Y0ZDtfMHg2ZTBjYWNbJ3R5cGUnXT1fMHhhYzNmZWYoMHgxYTUpLF8weDZlMGNhY1tfMHhhYzNmZWYoMHgyNjIpXT1fMHgxYjllZTlbXzB4YWMzZmVmKDB4MWE5KV0sXzB4Mjk1M2E2PV8weGFmYmM5ZVtfMHhhYzNmZWYoMHgyMWUpXVtfMHhhYzNmZWYoMHgyMDUpXSxfMHhhZmJjOWVbXzB4YWMzZmVmKDB4MjFlKV1bXzB4YWMzZmVmKDB4MjA1KV09XzB4NmUwY2FjLF8weDEwOTVmYltfMHhhYzNmZWYoMHgyNjcpXShfMHg2ZTBjYWMsXzB4YWZiYzllKTt9dHJ5e18weDMxMmE0YVtfMHgzZjM5ZWIoMHgxOTQpXSsrLF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYTQpXSYmXzB4MzEyYTRhW18weDNmMzllYigweDIzMildW18weDNmMzllYigweDIxNyldKF8weDQyYjI1Mik7dmFyIF8weDNkN2ZmOSxfMHgzMDU5ZTIsXzB4MmYyOWI3LF8weDMyYWNjMCxfMHg1NWUzZjk9W10sXzB4MzAwYTg5PVtdLF8weDFkMDk0ZCxfMHgzNDU5YjY9dGhpc1tfMHgzZjM5ZWIoMHgyNWEpXShfMHg0MmIyNTIpLF8weDYxYjMzYz1fMHgzNDU5YjY9PT0nYXJyYXknLF8weDQ2NmQ3OT0hMHgxLF8weDU0OTI2Mj1fMHgzNDU5YjY9PT0nZnVuY3Rpb24nLF8weGRlMTcyMz10aGlzW18weDNmMzllYigweDFjMyldKF8weDM0NTliNiksXzB4MWEwYTFkPXRoaXNbXzB4M2YzOWViKDB4MWJmKV0oXzB4MzQ1OWI2KSxfMHg1OWQ0NzE9XzB4ZGUxNzIzfHxfMHgxYTBhMWQsXzB4MWE3YWFhPXt9LF8weDUzOTFiMT0weDAsXzB4MmJiMWVmPSEweDEsXzB4Mjk1M2E2LF8weDE1MzJiYz0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MzEyYTRhW18weDNmMzllYigweDIxMSldKXtpZihfMHg2MWIzM2Mpe2lmKF8weDMwNTllMj1fMHg0MmIyNTJbXzB4M2YzOWViKDB4MjMxKV0sXzB4MzA1OWUyPl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMjYpXSl7Zm9yKF8weDJmMjliNz0weDAsXzB4MzJhY2MwPV8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMjYpXSxfMHgzZDdmZjk9XzB4MmYyOWI3O18weDNkN2ZmOTxfMHgzMmFjYzA7XzB4M2Q3ZmY5KyspXzB4MzAwYTg5W18weDNmMzllYigweDIxNyldKF8weDEwOTVmYltfMHgzZjM5ZWIoMHgxZmYpXShfMHg1NWUzZjksXzB4NDJiMjUyLF8weDM0NTliNixfMHgzZDdmZjksXzB4MzEyYTRhKSk7XzB4MzcxNmRjW18weDNmMzllYigweDFlNildPSEweDA7fWVsc2V7Zm9yKF8weDJmMjliNz0weDAsXzB4MzJhY2MwPV8weDMwNTllMixfMHgzZDdmZjk9XzB4MmYyOWI3O18weDNkN2ZmOTxfMHgzMmFjYzA7XzB4M2Q3ZmY5KyspXzB4MzAwYTg5W18weDNmMzllYigweDIxNyldKF8weDEwOTVmYltfMHgzZjM5ZWIoMHgxZmYpXShfMHg1NWUzZjksXzB4NDJiMjUyLF8weDM0NTliNixfMHgzZDdmZjksXzB4MzEyYTRhKSk7fV8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYzQpXSs9XzB4MzAwYTg5W18weDNmMzllYigweDIzMSldO31pZighKF8weDM0NTliNj09PV8weDNmMzllYigweDI1Yil8fF8weDM0NTliNj09PV8weDNmMzllYigweDE5ZSkpJiYhXzB4ZGUxNzIzJiZfMHgzNDU5YjYhPT1fMHgzZjM5ZWIoMHgyNjMpJiZfMHgzNDU5YjYhPT1fMHgzZjM5ZWIoMHgxYWIpJiZfMHgzNDU5YjYhPT1fMHgzZjM5ZWIoMHgxYzYpKXt2YXIgXzB4N2IzMWE2PV8weDE5YTIzZVtfMHgzZjM5ZWIoMHgxZTkpXXx8XzB4MzEyYTRhW18weDNmMzllYigweDFlOSldO2lmKHRoaXNbXzB4M2YzOWViKDB4MThlKV0oXzB4NDJiMjUyKT8oXzB4M2Q3ZmY5PTB4MCxfMHg0MmIyNTJbXzB4M2YzOWViKDB4MWI3KV0oZnVuY3Rpb24oXzB4Mzg5NTExKXt2YXIgXzB4NDZjN2UyPV8weDNmMzllYjtpZihfMHg1MzkxYjErKyxfMHgzMTJhNGFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1MzkxYjE+XzB4N2IzMWE2KXtfMHgyYmIxZWY9ITB4MDtyZXR1cm47fWlmKCFfMHgzMTJhNGFbXzB4NDZjN2UyKDB4MjAwKV0mJl8weDMxMmE0YVtfMHg0NmM3ZTIoMHgxYTQpXSYmXzB4MzEyYTRhW18weDQ2YzdlMigweDFjNCldPl8weDMxMmE0YVtfMHg0NmM3ZTIoMHgyMzYpXSl7XzB4MmJiMWVmPSEweDA7cmV0dXJuO31fMHgzMDBhODlbXzB4NDZjN2UyKDB4MjE3KV0oXzB4MTA5NWZiW18weDQ2YzdlMigweDFmZildKF8weDU1ZTNmOSxfMHg0MmIyNTIsJ1NldCcsXzB4M2Q3ZmY5KyssXzB4MzEyYTRhLGZ1bmN0aW9uKF8weDEyMzc2ZCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDEyMzc2ZDt9O30oXzB4Mzg5NTExKSkpO30pKTp0aGlzWydfaXNNYXAnXShfMHg0MmIyNTIpJiZfMHg0MmIyNTJbXzB4M2YzOWViKDB4MWI3KV0oZnVuY3Rpb24oXzB4MTEzMTE2LF8weDFkNzdmOSl7dmFyIF8weDM2YWMxYz1fMHgzZjM5ZWI7aWYoXzB4NTM5MWIxKyssXzB4MzEyYTRhWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NTM5MWIxPl8weDdiMzFhNil7XzB4MmJiMWVmPSEweDA7cmV0dXJuO31pZighXzB4MzEyYTRhW18weDM2YWMxYygweDIwMCldJiZfMHgzMTJhNGFbXzB4MzZhYzFjKDB4MWE0KV0mJl8weDMxMmE0YVtfMHgzNmFjMWMoMHgxYzQpXT5fMHgzMTJhNGFbXzB4MzZhYzFjKDB4MjM2KV0pe18weDJiYjFlZj0hMHgwO3JldHVybjt9dmFyIF8weDNjMTljOD1fMHgxZDc3ZjlbXzB4MzZhYzFjKDB4MjQ0KV0oKTtfMHgzYzE5YzhbXzB4MzZhYzFjKDB4MjMxKV0+MHg2NCYmKF8weDNjMTljOD1fMHgzYzE5YzhbXzB4MzZhYzFjKDB4MjQ2KV0oMHgwLDB4NjQpKycuLi4nKSxfMHgzMDBhODlbXzB4MzZhYzFjKDB4MjE3KV0oXzB4MTA5NWZiW18weDM2YWMxYygweDFmZildKF8weDU1ZTNmOSxfMHg0MmIyNTIsXzB4MzZhYzFjKDB4MTljKSxfMHgzYzE5YzgsXzB4MzEyYTRhLGZ1bmN0aW9uKF8weDM3NTViNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDM3NTViNzt9O30oXzB4MTEzMTE2KSkpO30pLCFfMHg0NjZkNzkpe3RyeXtmb3IoXzB4MWQwOTRkIGluIF8weDQyYjI1MilpZighKF8weDYxYjMzYyYmXzB4MTUzMmJjW18weDNmMzllYigweDFkYSldKF8weDFkMDk0ZCkpJiYhdGhpc1tfMHgzZjM5ZWIoMHgyNmMpXShfMHg0MmIyNTIsXzB4MWQwOTRkLF8weDMxMmE0YSkpe2lmKF8weDUzOTFiMSsrLF8weDMxMmE0YVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDUzOTFiMT5fMHg3YjMxYTYpe18weDJiYjFlZj0hMHgwO2JyZWFrO31pZighXzB4MzEyYTRhWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYTQpXSYmXzB4MzEyYTRhW18weDNmMzllYigweDFjNCldPl8weDMxMmE0YVsnYXV0b0V4cGFuZExpbWl0J10pe18weDJiYjFlZj0hMHgwO2JyZWFrO31fMHgzMDBhODlbJ3B1c2gnXShfMHgxMDk1ZmJbXzB4M2YzOWViKDB4MTg4KV0oXzB4NTVlM2Y5LF8weDFhN2FhYSxfMHg0MmIyNTIsXzB4MzQ1OWI2LF8weDFkMDk0ZCxfMHgzMTJhNGEpKTt9fWNhdGNoe31pZihfMHgxYTdhYWFbXzB4M2YzOWViKDB4MTg2KV09ITB4MCxfMHg1NDkyNjImJihfMHgxYTdhYWFbXzB4M2YzOWViKDB4MjU4KV09ITB4MCksIV8weDJiYjFlZil7dmFyIF8weDIzZTc3Mz1bXVtfMHgzZjM5ZWIoMHgyM2QpXSh0aGlzW18weDNmMzllYigweDI1ZCldKF8weDQyYjI1MikpW18weDNmMzllYigweDIzZCldKHRoaXNbXzB4M2YzOWViKDB4MWExKV0oXzB4NDJiMjUyKSk7Zm9yKF8weDNkN2ZmOT0weDAsXzB4MzA1OWUyPV8weDIzZTc3M1tfMHgzZjM5ZWIoMHgyMzEpXTtfMHgzZDdmZjk8XzB4MzA1OWUyO18weDNkN2ZmOSsrKWlmKF8weDFkMDk0ZD1fMHgyM2U3NzNbXzB4M2Q3ZmY5XSwhKF8weDYxYjMzYyYmXzB4MTUzMmJjWyd0ZXN0J10oXzB4MWQwOTRkW18weDNmMzllYigweDI0NCldKCkpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NDJiMjUyLF8weDFkMDk0ZCxfMHgzMTJhNGEpJiYhXzB4MWE3YWFhW18weDNmMzllYigweDFiNSkrXzB4MWQwOTRkW18weDNmMzllYigweDI0NCldKCldKXtpZihfMHg1MzkxYjErKyxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWM0KV0rKyxfMHg1MzkxYjE+XzB4N2IzMWE2KXtfMHgyYmIxZWY9ITB4MDticmVhazt9aWYoIV8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMDApXSYmXzB4MzEyYTRhW18weDNmMzllYigweDFhNCldJiZfMHgzMTJhNGFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MzEyYTRhW18weDNmMzllYigweDIzNildKXtfMHgyYmIxZWY9ITB4MDticmVhazt9XzB4MzAwYTg5W18weDNmMzllYigweDIxNyldKF8weDEwOTVmYltfMHgzZjM5ZWIoMHgxODgpXShfMHg1NWUzZjksXzB4MWE3YWFhLF8weDQyYjI1MixfMHgzNDU5YjYsXzB4MWQwOTRkLF8weDMxMmE0YSkpO319fX19aWYoXzB4MzcxNmRjW18weDNmMzllYigweDIyOCldPV8weDM0NTliNixfMHg1OWQ0NzE/KF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXT1fMHg0MmIyNTJbXzB4M2YzOWViKDB4MjYwKV0oKSx0aGlzW18weDNmMzllYigweDI2NSldKF8weDM0NTliNixfMHgzNzE2ZGMsXzB4MzEyYTRhLF8weDE5YTIzZSkpOl8weDM0NTliNj09PV8weDNmMzllYigweDFiNCk/XzB4MzcxNmRjW18weDNmMzllYigweDIxZCldPXRoaXNbXzB4M2YzOWViKDB4MWE2KV1bJ2NhbGwnXShfMHg0MmIyNTIpOl8weDM0NTliNj09PV8weDNmMzllYigweDFjNik/XzB4MzcxNmRjW18weDNmMzllYigweDIxZCldPV8weDQyYjI1MltfMHgzZjM5ZWIoMHgyNDQpXSgpOl8weDM0NTliNj09PV8weDNmMzllYigweDFkNSk/XzB4MzcxNmRjW18weDNmMzllYigweDIxZCldPXRoaXNbXzB4M2YzOWViKDB4MjM0KV1bJ2NhbGwnXShfMHg0MmIyNTIpOl8weDM0NTliNj09PV8weDNmMzllYigweDIxNCkmJnRoaXNbXzB4M2YzOWViKDB4MjFhKV0/XzB4MzcxNmRjW18weDNmMzllYigweDIxZCldPXRoaXNbJ19TeW1ib2wnXVsncHJvdG90eXBlJ11bJ3RvU3RyaW5nJ11bXzB4M2YzOWViKDB4MTlhKV0oXzB4NDJiMjUyKTohXzB4MzEyYTRhW18weDNmMzllYigweDIxMSldJiYhKF8weDM0NTliNj09PSdudWxsJ3x8XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MTllKSkmJihkZWxldGUgXzB4MzcxNmRjW18weDNmMzllYigweDIxZCldLF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgxYWYpXT0hMHgwKSxfMHgyYmIxZWYmJihfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjRmKV09ITB4MCksXzB4Mjk1M2E2PV8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMWUpXVtfMHgzZjM5ZWIoMHgyMDUpXSxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjFlKV1bXzB4M2YzOWViKDB4MjA1KV09XzB4MzcxNmRjLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzNzE2ZGMsXzB4MzEyYTRhKSxfMHgzMDBhODlbXzB4M2YzOWViKDB4MjMxKV0pe2ZvcihfMHgzZDdmZjk9MHgwLF8weDMwNTllMj1fMHgzMDBhODlbXzB4M2YzOWViKDB4MjMxKV07XzB4M2Q3ZmY5PF8weDMwNTllMjtfMHgzZDdmZjkrKylfMHgzMDBhODlbXzB4M2Q3ZmY5XShfMHgzZDdmZjkpO31fMHg1NWUzZjlbXzB4M2YzOWViKDB4MjMxKV0mJihfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MWU5KV09XzB4NTVlM2Y5KTt9Y2F0Y2goXzB4MTQ1OGRmKXtfMHg1NDNhZjQoXzB4MTQ1OGRmLF8weDM3MTZkYyxfMHgzMTJhNGEpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDQyYjI1MixfMHgzNzE2ZGMpLHRoaXNbXzB4M2YzOWViKDB4MWM4KV0oXzB4MzcxNmRjLF8weDMxMmE0YSksXzB4MzEyYTRhW18weDNmMzllYigweDIxZSldW18weDNmMzllYigweDIwNSldPV8weDI5NTNhNixfMHgzMTJhNGFbXzB4M2YzOWViKDB4MTk0KV0tLSxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWE0KV09XzB4NTBmN2Q0LF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYTQpXSYmXzB4MzEyYTRhW18weDNmMzllYigweDIzMildWydwb3AnXSgpLF8weDM3MTZkYzt9W18weDU5ZWQwMigweDFhMSldKF8weDQ4ZTQzZCl7dmFyIF8weDM3OTg5Yj1fMHg1OWVkMDI7cmV0dXJuIE9iamVjdFtfMHgzNzk4OWIoMHgyNjEpXT9PYmplY3RbXzB4Mzc5ODliKDB4MjYxKV0oXzB4NDhlNDNkKTpbXTt9W18weDU5ZWQwMigweDE4ZSldKF8weDVlZWQ0MSl7dmFyIF8weDUwYWFlND1fMHg1OWVkMDI7cmV0dXJuISEoXzB4NWVlZDQxJiZfMHg1MmVhZDhbXzB4NTBhYWU0KDB4MjJkKV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDVlZWQ0MSk9PT1fMHg1MGFhZTQoMHgyMTIpJiZfMHg1ZWVkNDFbXzB4NTBhYWU0KDB4MWI3KV0pO31bXzB4NTllZDAyKDB4MjZjKV0oXzB4NDNlYTVjLF8weDU0N2M3YyxfMHgxMmM5ZWEpe3ZhciBfMHg1NDVmMWI9XzB4NTllZDAyO3JldHVybiBfMHgxMmM5ZWFbXzB4NTQ1ZjFiKDB4MjMzKV0/dHlwZW9mIF8weDQzZWE1Y1tfMHg1NDdjN2NdPT1fMHg1NDVmMWIoMHgyMjcpOiEweDE7fVsnX3R5cGUnXShfMHgyZmE5MWYpe3ZhciBfMHgzM2QxNjE9XzB4NTllZDAyLF8weDUwZmM5MD0nJztyZXR1cm4gXzB4NTBmYzkwPXR5cGVvZiBfMHgyZmE5MWYsXzB4NTBmYzkwPT09XzB4MzNkMTYxKDB4MjJlKT90aGlzW18weDMzZDE2MSgweDE5ZildKF8weDJmYTkxZik9PT1fMHgzM2QxNjEoMHgxZDMpP18weDUwZmM5MD1fMHgzM2QxNjEoMHgxZmQpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDJmYTkxZik9PT1fMHgzM2QxNjEoMHgxZTEpP18weDUwZmM5MD1fMHgzM2QxNjEoMHgxYjQpOnRoaXNbXzB4MzNkMTYxKDB4MTlmKV0oXzB4MmZhOTFmKT09PV8weDMzZDE2MSgweDIyMSk/XzB4NTBmYzkwPV8weDMzZDE2MSgweDFjNik6XzB4MmZhOTFmPT09bnVsbD9fMHg1MGZjOTA9XzB4MzNkMTYxKDB4MjViKTpfMHgyZmE5MWZbXzB4MzNkMTYxKDB4MWY3KV0mJihfMHg1MGZjOTA9XzB4MmZhOTFmW18weDMzZDE2MSgweDFmNyldW18weDMzZDE2MSgweDIwNyldfHxfMHg1MGZjOTApOl8weDUwZmM5MD09PSd1bmRlZmluZWQnJiZ0aGlzW18weDMzZDE2MSgweDFjNSldJiZfMHgyZmE5MWYgaW5zdGFuY2VvZiB0aGlzW18weDMzZDE2MSgweDFjNSldJiYoXzB4NTBmYzkwPV8weDMzZDE2MSgweDIzOSkpLF8weDUwZmM5MDt9W18weDU5ZWQwMigweDE5ZildKF8weDQ2NzdjOCl7dmFyIF8weDM2ZGViYT1fMHg1OWVkMDI7cmV0dXJuIE9iamVjdFtfMHgzNmRlYmEoMHgyM2IpXVtfMHgzNmRlYmEoMHgyNDQpXVtfMHgzNmRlYmEoMHgxOWEpXShfMHg0Njc3YzgpO31bXzB4NTllZDAyKDB4MWMzKV0oXzB4MjU1M2FmKXt2YXIgXzB4MzY0ODViPV8weDU5ZWQwMjtyZXR1cm4gXzB4MjU1M2FmPT09XzB4MzY0ODViKDB4MjQyKXx8XzB4MjU1M2FmPT09XzB4MzY0ODViKDB4MTliKXx8XzB4MjU1M2FmPT09J251bWJlcic7fVtfMHg1OWVkMDIoMHgxYmYpXShfMHgzNjg5YTgpe3ZhciBfMHg1NzYyZjA9XzB4NTllZDAyO3JldHVybiBfMHgzNjg5YTg9PT1fMHg1NzYyZjAoMHgxZDYpfHxfMHgzNjg5YTg9PT1fMHg1NzYyZjAoMHgyNjMpfHxfMHgzNjg5YTg9PT1fMHg1NzYyZjAoMHgxZGYpO31bXzB4NTllZDAyKDB4MWZmKV0oXzB4MjVmMGRlLF8weDMyOGYwOSxfMHg0N2M1M2YsXzB4MzcwMDJkLF8weDQ5ZjIxYyxfMHg1MjFjOTApe3ZhciBfMHg0MDliMTc9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MTY4ZmM5KXt2YXIgXzB4NWVhYWYxPV8weDNmNGQsXzB4MTRiMWQ1PV8weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVsnY3VycmVudCddLF8weDMxYzRkMT1fMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bJ2luZGV4J10sXzB4MWU3ZDEyPV8weDQ5ZjIxY1snbm9kZSddWydwYXJlbnQnXTtfMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bXzB4NWVhYWYxKDB4MjQ1KV09XzB4MTRiMWQ1LF8weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVtfMHg1ZWFhZjEoMHgyNjQpXT10eXBlb2YgXzB4MzcwMDJkPT1fMHg1ZWFhZjEoMHgyNmEpP18weDM3MDAyZDpfMHgxNjhmYzksXzB4MjVmMGRlWydwdXNoJ10oXzB4NDA5YjE3W18weDVlYWFmMSgweDIyOSldKF8weDMyOGYwOSxfMHg0N2M1M2YsXzB4MzcwMDJkLF8weDQ5ZjIxYyxfMHg1MjFjOTApKSxfMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bJ3BhcmVudCddPV8weDFlN2QxMixfMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bXzB4NWVhYWYxKDB4MjY0KV09XzB4MzFjNGQxO307fVtfMHg1OWVkMDIoMHgxODgpXShfMHg0MWFhODEsXzB4MWM3Zjg2LF8weDMxMWY0ZCxfMHgyNjAxNGIsXzB4MWM3OTY3LF8weDU3NzY0MixfMHg1OTgxYTYpe3ZhciBfMHgxM2Y0MTQ9XzB4NTllZDAyLF8weGU4YjEyMz10aGlzO3JldHVybiBfMHgxYzdmODZbXzB4MTNmNDE0KDB4MWI1KStfMHgxYzc5NjdbXzB4MTNmNDE0KDB4MjQ0KV0oKV09ITB4MCxmdW5jdGlvbihfMHgzNDExZjQpe3ZhciBfMHg0MDY3MmI9XzB4MTNmNDE0LF8weDE3MTgwYT1fMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjA1KV0sXzB4M2RhNDY3PV8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNjQpXSxfMHgzYjU3NDY9XzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI0NSldO18weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNDUpXT1fMHgxNzE4MGEsXzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI2NCldPV8weDM0MTFmNCxfMHg0MWFhODFbJ3B1c2gnXShfMHhlOGIxMjNbXzB4NDA2NzJiKDB4MjI5KV0oXzB4MzExZjRkLF8weDI2MDE0YixfMHgxYzc5NjcsXzB4NTc3NjQyLF8weDU5ODFhNikpLF8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNDUpXT1fMHgzYjU3NDYsXzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI2NCldPV8weDNkYTQ2Nzt9O31bXzB4NTllZDAyKDB4MjI5KV0oXzB4MWZlMTBmLF8weDNlMjZiNCxfMHhjYmM5MGEsXzB4MzBiYTAxLF8weDRmOGUwYSl7dmFyIF8weDMyZmZlOT1fMHg1OWVkMDIsXzB4MTM1MGFiPXRoaXM7XzB4NGY4ZTBhfHwoXzB4NGY4ZTBhPWZ1bmN0aW9uKF8weDE3YmEyNyxfMHgyNzVhZDYpe3JldHVybiBfMHgxN2JhMjdbXzB4Mjc1YWQ2XTt9KTt2YXIgXzB4MzEwNGViPV8weGNiYzkwYVtfMHgzMmZmZTkoMHgyNDQpXSgpLF8weDM5OWIwND1fMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjIyKV18fHt9LF8weDIzZjk5OD1fMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjExKV0sXzB4MWM3MTUzPV8weDMwYmEwMVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4MTEzYjU0PXRoaXNbXzB4MzJmZmU5KDB4MjEwKV0oXzB4MWZlMTBmKSxfMHg0ZDA3OTI9XzB4MzEwNGViO18weDExM2I1NCYmXzB4NGQwNzkyWzB4MF09PT0nXFxcXHgyNycmJihfMHg0ZDA3OTI9XzB4NGQwNzkyWydzdWJzdHInXSgweDEsXzB4NGQwNzkyW18weDMyZmZlOSgweDIzMSldLTB4MikpO3ZhciBfMHhjZWJmNmE9XzB4MzBiYTAxW18weDMyZmZlOSgweDIyMildPV8weDM5OWIwNFtfMHgzMmZmZTkoMHgxYjUpK18weDRkMDc5Ml07XzB4Y2ViZjZhJiYoXzB4MzBiYTAxW18weDMyZmZlOSgweDIxMSldPV8weDMwYmEwMVsnZGVwdGgnXSsweDEpLF8weDMwYmEwMVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4Y2ViZjZhO3ZhciBfMHg0NDMwYTA9dHlwZW9mIF8weGNiYzkwYT09J3N5bWJvbCcsXzB4NWI2NDY0PXsnbmFtZSc6XzB4NDQzMGEwfHxfMHgxMTNiNTQ/XzB4MzEwNGViOnRoaXNbXzB4MzJmZmU5KDB4MjNjKV0oXzB4MzEwNGViKX07aWYoXzB4NDQzMGEwJiYoXzB4NWI2NDY0W18weDMyZmZlOSgweDIxNCldPSEweDApLCEoXzB4M2UyNmI0PT09XzB4MzJmZmU5KDB4MWZkKXx8XzB4M2UyNmI0PT09XzB4MzJmZmU5KDB4MWE4KSkpe3ZhciBfMHgzNmM1YWI9dGhpc1tfMHgzMmZmZTkoMHgxYmQpXShfMHgxZmUxMGYsXzB4Y2JjOTBhKTtpZihfMHgzNmM1YWImJihfMHgzNmM1YWJbXzB4MzJmZmU5KDB4MWQ4KV0mJihfMHg1YjY0NjRbXzB4MzJmZmU5KDB4MWUwKV09ITB4MCksXzB4MzZjNWFiW18weDMyZmZlOSgweDFjMSldJiYhXzB4Y2ViZjZhJiYhXzB4MzBiYTAxWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4NWI2NDY0W18weDMyZmZlOSgweDFmMildPSEweDAsdGhpc1tfMHgzMmZmZTkoMHgyMWMpXShfMHg1YjY0NjQsXzB4MzBiYTAxKSxfMHg1YjY0NjQ7fXZhciBfMHg0MDljMjg7dHJ5e18weDQwOWMyOD1fMHg0ZjhlMGEoXzB4MWZlMTBmLF8weGNiYzkwYSk7fWNhdGNoKF8weDI5YmY3Mil7cmV0dXJuIF8weDViNjQ2ND17J25hbWUnOl8weDMxMDRlYiwndHlwZSc6XzB4MzJmZmU5KDB4MWE1KSwnZXJyb3InOl8weDI5YmY3MltfMHgzMmZmZTkoMHgxYTkpXX0sdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDViNjQ2NCxfMHgzMGJhMDEpLF8weDViNjQ2NDt9dmFyIF8weDU4Y2FiYj10aGlzW18weDMyZmZlOSgweDI1YSldKF8weDQwOWMyOCksXzB4NTBjMDIxPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg1OGNhYmIpO2lmKF8weDViNjQ2NFtfMHgzMmZmZTkoMHgyMjgpXT1fMHg1OGNhYmIsXzB4NTBjMDIxKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHg1YjY0NjQsXzB4MzBiYTAxLF8weDQwOWMyOCxmdW5jdGlvbigpe3ZhciBfMHg1MjY0Mjg9XzB4MzJmZmU5O18weDViNjQ2NFtfMHg1MjY0MjgoMHgyMWQpXT1fMHg0MDljMjhbJ3ZhbHVlT2YnXSgpLCFfMHhjZWJmNmEmJl8weDEzNTBhYltfMHg1MjY0MjgoMHgyNjUpXShfMHg1OGNhYmIsXzB4NWI2NDY0LF8weDMwYmEwMSx7fSk7fSk7ZWxzZXt2YXIgXzB4YzAxMDI9XzB4MzBiYTAxWydhdXRvRXhwYW5kJ10mJl8weDMwYmEwMVtfMHgzMmZmZTkoMHgxOTQpXTxfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjEzKV0mJl8weDMwYmEwMVsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddWydpbmRleE9mJ10oXzB4NDA5YzI4KTwweDAmJl8weDU4Y2FiYiE9PV8weDMyZmZlOSgweDIyNykmJl8weDMwYmEwMVtfMHgzMmZmZTkoMHgxYzQpXTxfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjM2KV07XzB4YzAxMDJ8fF8weDMwYmEwMVtfMHgzMmZmZTkoMHgxOTQpXTxfMHgyM2Y5OTh8fF8weGNlYmY2YT8odGhpc1tfMHgzMmZmZTkoMHgxYjEpXShfMHg1YjY0NjQsXzB4NDA5YzI4LF8weDMwYmEwMSxfMHhjZWJmNmF8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NDA5YzI4LF8weDViNjQ2NCkpOnRoaXNbXzB4MzJmZmU5KDB4MjFjKV0oXzB4NWI2NDY0LF8weDMwYmEwMSxfMHg0MDljMjgsZnVuY3Rpb24oKXt2YXIgXzB4NTIzYWU3PV8weDMyZmZlOTtfMHg1OGNhYmI9PT1fMHg1MjNhZTcoMHgyNWIpfHxfMHg1OGNhYmI9PT1fMHg1MjNhZTcoMHgxOWUpfHwoZGVsZXRlIF8weDViNjQ2NFtfMHg1MjNhZTcoMHgyMWQpXSxfMHg1YjY0NjRbXzB4NTIzYWU3KDB4MWFmKV09ITB4MCk7fSk7fXJldHVybiBfMHg1YjY0NjQ7fWZpbmFsbHl7XzB4MzBiYTAxW18weDMyZmZlOSgweDIyMildPV8weDM5OWIwNCxfMHgzMGJhMDFbJ2RlcHRoJ109XzB4MjNmOTk4LF8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMDApXT1fMHgxYzcxNTM7fX1bXzB4NTllZDAyKDB4MjY1KV0oXzB4M2VlZjI1LF8weDg0ZGI2ZixfMHgxMDU1MGQsXzB4NDI4ODEzKXt2YXIgXzB4MjI1MDQyPV8weDU5ZWQwMixfMHg1OWM2MmE9XzB4NDI4ODEzW18weDIyNTA0MigweDIyYyldfHxfMHgxMDU1MGRbXzB4MjI1MDQyKDB4MjJjKV07aWYoKF8weDNlZWYyNT09PV8weDIyNTA0MigweDE5Yil8fF8weDNlZWYyNT09PV8weDIyNTA0MigweDI2MykpJiZfMHg4NGRiNmZbXzB4MjI1MDQyKDB4MjFkKV0pe2xldCBfMHg4MDFlMTc9XzB4ODRkYjZmWyd2YWx1ZSddWydsZW5ndGgnXTtfMHgxMDU1MGRbXzB4MjI1MDQyKDB4MjJiKV0rPV8weDgwMWUxNyxfMHgxMDU1MGRbXzB4MjI1MDQyKDB4MjJiKV0+XzB4MTA1NTBkW18weDIyNTA0MigweDIyZildPyhfMHg4NGRiNmZbXzB4MjI1MDQyKDB4MWFmKV09JycsZGVsZXRlIF8weDg0ZGI2ZltfMHgyMjUwNDIoMHgyMWQpXSk6XzB4ODAxZTE3Pl8weDU5YzYyYSYmKF8weDg0ZGI2ZltfMHgyMjUwNDIoMHgxYWYpXT1fMHg4NGRiNmZbXzB4MjI1MDQyKDB4MjFkKV1bJ3N1YnN0ciddKDB4MCxfMHg1OWM2MmEpLGRlbGV0ZSBfMHg4NGRiNmZbXzB4MjI1MDQyKDB4MjFkKV0pO319W18weDU5ZWQwMigweDIxMCldKF8weDZiZjZmYSl7dmFyIF8weDQ4ZWE3MD1fMHg1OWVkMDI7cmV0dXJuISEoXzB4NmJmNmZhJiZfMHg1MmVhZDhbXzB4NDhlYTcwKDB4MTljKV0mJnRoaXNbXzB4NDhlYTcwKDB4MTlmKV0oXzB4NmJmNmZhKT09PV8weDQ4ZWE3MCgweDE4ZikmJl8weDZiZjZmYVsnZm9yRWFjaCddKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4ZDVmYTFkKXt2YXIgXzB4MjM1YmRmPV8weDU5ZWQwMjtpZihfMHhkNWZhMWRbXzB4MjM1YmRmKDB4MTkwKV0oL15cXFxcZCskLykpcmV0dXJuIF8weGQ1ZmExZDt2YXIgXzB4NTBiZTZmO3RyeXtfMHg1MGJlNmY9SlNPTltfMHgyMzViZGYoMHgyMDQpXSgnJytfMHhkNWZhMWQpO31jYXRjaHtfMHg1MGJlNmY9J1xcXFx4MjInK3RoaXNbXzB4MjM1YmRmKDB4MTlmKV0oXzB4ZDVmYTFkKSsnXFxcXHgyMic7fXJldHVybiBfMHg1MGJlNmZbXzB4MjM1YmRmKDB4MTkwKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg1MGJlNmY9XzB4NTBiZTZmW18weDIzNWJkZigweDE4YyldKDB4MSxfMHg1MGJlNmZbXzB4MjM1YmRmKDB4MjMxKV0tMHgyKTpfMHg1MGJlNmY9XzB4NTBiZTZmW18weDIzNWJkZigweDFiMCldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbJ3JlcGxhY2UnXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg1MGJlNmY7fVtfMHg1OWVkMDIoMHgyMWMpXShfMHgxNTc2ZDUsXzB4M2FkM2ZiLF8weDU4MjIxNSxfMHg0ZGJkM2Epe3ZhciBfMHgyNzgzOTc9XzB4NTllZDAyO3RoaXNbXzB4Mjc4Mzk3KDB4MjY3KV0oXzB4MTU3NmQ1LF8weDNhZDNmYiksXzB4NGRiZDNhJiZfMHg0ZGJkM2EoKSx0aGlzW18weDI3ODM5NygweDFiOCldKF8weDU4MjIxNSxfMHgxNTc2ZDUpLHRoaXNbXzB4Mjc4Mzk3KDB4MWM4KV0oXzB4MTU3NmQ1LF8weDNhZDNmYik7fVtfMHg1OWVkMDIoMHgyNjcpXShfMHgyY2MxNGMsXzB4NGJjM2NjKXt2YXIgXzB4NTU3ZTA4PV8weDU5ZWQwMjt0aGlzW18weDU1N2UwOCgweDFjZildKF8weDJjYzE0YyxfMHg0YmMzY2MpLHRoaXNbXzB4NTU3ZTA4KDB4MjBkKV0oXzB4MmNjMTRjLF8weDRiYzNjYyksdGhpc1tfMHg1NTdlMDgoMHgyMDgpXShfMHgyY2MxNGMsXzB4NGJjM2NjKSx0aGlzW18weDU1N2UwOCgweDFiZSldKF8weDJjYzE0YyxfMHg0YmMzY2MpO31bXzB4NTllZDAyKDB4MWNmKV0oXzB4MTNiZjlhLF8weDM2MjIxZSl7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHg0NmE0MDIsXzB4NTliNGVjKXt9Wydfc2V0Tm9kZUxhYmVsJ10oXzB4NGJlMWJmLF8weDUzZjZmNSl7fVsnX2lzVW5kZWZpbmVkJ10oXzB4M2M0ZjkzKXt2YXIgXzB4MzZmM2ZkPV8weDU5ZWQwMjtyZXR1cm4gXzB4M2M0ZjkzPT09dGhpc1tfMHgzNmYzZmQoMHgyNjkpXTt9W18weDU5ZWQwMigweDFjOCldKF8weDE3MTBhNixfMHgzZjY3OGEpe3ZhciBfMHgyNGJkMjc9XzB4NTllZDAyO3RoaXNbJ19zZXROb2RlTGFiZWwnXShfMHgxNzEwYTYsXzB4M2Y2NzhhKSx0aGlzW18weDI0YmQyNygweDFmOSldKF8weDE3MTBhNiksXzB4M2Y2NzhhW18weDI0YmQyNygweDFhZSldJiZ0aGlzW18weDI0YmQyNygweDFlOCldKF8weDE3MTBhNiksdGhpc1tfMHgyNGJkMjcoMHgxZjQpXShfMHgxNzEwYTYsXzB4M2Y2NzhhKSx0aGlzW18weDI0YmQyNygweDFkYyldKF8weDE3MTBhNixfMHgzZjY3OGEpLHRoaXNbXzB4MjRiZDI3KDB4MjUwKV0oXzB4MTcxMGE2KTt9WydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NWM3YzYyLF8weDRjNTFhMyl7dmFyIF8weDFmNDExZT1fMHg1OWVkMDI7bGV0IF8weDJiZGQzZjt0cnl7XzB4NTJlYWQ4W18weDFmNDExZSgweDIzZSldJiYoXzB4MmJkZDNmPV8weDUyZWFkOFtfMHgxZjQxMWUoMHgyM2UpXVsnZXJyb3InXSxfMHg1MmVhZDhbXzB4MWY0MTFlKDB4MjNlKV1bJ2Vycm9yJ109ZnVuY3Rpb24oKXt9KSxfMHg1YzdjNjImJnR5cGVvZiBfMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjMxKV09PV8weDFmNDExZSgweDI2YSkmJihfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjMxKV09XzB4NWM3YzYyW18weDFmNDExZSgweDIzMSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MmJkZDNmJiYoXzB4NTJlYWQ4W18weDFmNDExZSgweDIzZSldW18weDFmNDExZSgweDI2MildPV8weDJiZGQzZik7fWlmKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMjgpXT09PV8weDFmNDExZSgweDI2YSl8fF8weDRjNTFhM1sndHlwZSddPT09XzB4MWY0MTFlKDB4MWRmKSl7aWYoaXNOYU4oXzB4NGM1MWEzW18weDFmNDExZSgweDIxZCldKSlfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MWNlKV09ITB4MCxkZWxldGUgXzB4NGM1MWEzWyd2YWx1ZSddO2Vsc2Ugc3dpdGNoKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMWQpXSl7Y2FzZSBOdW1iZXJbJ1BPU0lUSVZFX0lORklOSVRZJ106XzB4NGM1MWEzWydwb3NpdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NGM1MWEzWyd2YWx1ZSddO2JyZWFrO2Nhc2UgTnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddOl8weDRjNTFhM1tfMHgxZjQxMWUoMHgyNDEpXT0hMHgwLGRlbGV0ZSBfMHg0YzUxYTNbJ3ZhbHVlJ107YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHgxZjQxMWUoMHgyMTYpXShfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjFkKV0pJiYoXzB4NGM1MWEzW18weDFmNDExZSgweDFkNCldPSEweDApO2JyZWFrO319ZWxzZSBfMHg0YzUxYTNbJ3R5cGUnXT09PV8weDFmNDExZSgweDIyNykmJnR5cGVvZiBfMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjA3KV09PSdzdHJpbmcnJiZfMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjA3KV0mJl8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMDcpXSYmXzB4NWM3YzYyW18weDFmNDExZSgweDIwNyldIT09XzB4NGM1MWEzWyduYW1lJ10mJihfMHg0YzUxYTNbJ2Z1bmNOYW1lJ109XzB4NWM3YzYyW18weDFmNDExZSgweDIwNyldKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgzZWRmMjApe3JldHVybiAweDEvXzB4M2VkZjIwPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bJ19zb3J0UHJvcHMnXShfMHgyYzFjYTcpe3ZhciBfMHg0ZTZkZTE9XzB4NTllZDAyOyFfMHgyYzFjYTdbXzB4NGU2ZGUxKDB4MWU5KV18fCFfMHgyYzFjYTdbXzB4NGU2ZGUxKDB4MWU5KV1bXzB4NGU2ZGUxKDB4MjMxKV18fF8weDJjMWNhN1sndHlwZSddPT09XzB4NGU2ZGUxKDB4MWZkKXx8XzB4MmMxY2E3W18weDRlNmRlMSgweDIyOCldPT09XzB4NGU2ZGUxKDB4MTljKXx8XzB4MmMxY2E3W18weDRlNmRlMSgweDIyOCldPT09XzB4NGU2ZGUxKDB4MjJkKXx8XzB4MmMxY2E3W18weDRlNmRlMSgweDFlOSldWydzb3J0J10oZnVuY3Rpb24oXzB4NDhhY2I1LF8weDRkYzQ5MCl7dmFyIF8weDVjYjIxOT1fMHg0ZTZkZTEsXzB4NDliNTMyPV8weDQ4YWNiNVsnbmFtZSddW18weDVjYjIxOSgweDI1NCldKCksXzB4NTk5Y2YzPV8weDRkYzQ5MFsnbmFtZSddW18weDVjYjIxOSgweDI1NCldKCk7cmV0dXJuIF8weDQ5YjUzMjxfMHg1OTljZjM/LTB4MTpfMHg0OWI1MzI+XzB4NTk5Y2YzPzB4MToweDA7fSk7fVtfMHg1OWVkMDIoMHgxZjQpXShfMHg1NmZkNmQsXzB4ZTE5YjQwKXt2YXIgXzB4MjJjMjRhPV8weDU5ZWQwMjtpZighKF8weGUxOWI0MFtfMHgyMmMyNGEoMHgyMzMpXXx8IV8weDU2ZmQ2ZFtfMHgyMmMyNGEoMHgxZTkpXXx8IV8weDU2ZmQ2ZFsncHJvcHMnXVtfMHgyMmMyNGEoMHgyMzEpXSkpe2Zvcih2YXIgXzB4MzkxMmJhPVtdLF8weDJlYjczMj1bXSxfMHg0ODg5YzU9MHgwLF8weDFiY2YwOD1fMHg1NmZkNmRbXzB4MjJjMjRhKDB4MWU5KV1bXzB4MjJjMjRhKDB4MjMxKV07XzB4NDg4OWM1PF8weDFiY2YwODtfMHg0ODg5YzUrKyl7dmFyIF8weDNmMDRhOD1fMHg1NmZkNmRbXzB4MjJjMjRhKDB4MWU5KV1bXzB4NDg4OWM1XTtfMHgzZjA0YThbXzB4MjJjMjRhKDB4MjI4KV09PT1fMHgyMmMyNGEoMHgyMjcpP18weDM5MTJiYVtfMHgyMmMyNGEoMHgyMTcpXShfMHgzZjA0YTgpOl8weDJlYjczMlsncHVzaCddKF8weDNmMDRhOCk7fWlmKCEoIV8weDJlYjczMlsnbGVuZ3RoJ118fF8weDM5MTJiYVtfMHgyMmMyNGEoMHgyMzEpXTw9MHgxKSl7XzB4NTZmZDZkW18weDIyYzI0YSgweDFlOSldPV8weDJlYjczMjt2YXIgXzB4ZjdjY2UxPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDM5MTJiYX07dGhpc1tfMHgyMmMyNGEoMHgxY2YpXShfMHhmN2NjZTEsXzB4ZTE5YjQwKSx0aGlzW18weDIyYzI0YSgweDE5MildKF8weGY3Y2NlMSxfMHhlMTliNDApLHRoaXNbXzB4MjJjMjRhKDB4MWY5KV0oXzB4ZjdjY2UxKSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4ZjdjY2UxLF8weGUxOWI0MCksXzB4ZjdjY2UxWydpZCddKz0nXFxcXHgyMGYnLF8weDU2ZmQ2ZFtfMHgyMmMyNGEoMHgxZTkpXVtfMHgyMmMyNGEoMHgxYjIpXShfMHhmN2NjZTEpO319fVtfMHg1OWVkMDIoMHgxZGMpXShfMHg1MmY2OTMsXzB4NDM5YmFmKXt9W18weDU5ZWQwMigweDFmOSldKF8weDFkMTY5Zil7fVtfMHg1OWVkMDIoMHgxYjMpXShfMHgxNjNmZTkpe3ZhciBfMHg1NTVhNTk9XzB4NTllZDAyO3JldHVybiBBcnJheVsnaXNBcnJheSddKF8weDE2M2ZlOSl8fHR5cGVvZiBfMHgxNjNmZTk9PV8weDU1NWE1OSgweDIyZSkmJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDE2M2ZlOSk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4NTllZDAyKDB4MWJlKV0oXzB4MzVmNTdkLF8weDIwOTE5OCl7fVsnX2NsZWFuTm9kZSddKF8weDU3Y2IxOSl7dmFyIF8weDUzNTdkZT1fMHg1OWVkMDI7ZGVsZXRlIF8weDU3Y2IxOVsnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJ10sZGVsZXRlIF8weDU3Y2IxOVsnX2hhc1NldE9uSXRzUGF0aCddLGRlbGV0ZSBfMHg1N2NiMTlbXzB4NTM1N2RlKDB4MjZiKV07fVtfMHg1OWVkMDIoMHgyMDgpXShfMHgyZDI2MWIsXzB4MWI1MjU1KXt9fWxldCBfMHgzZTUwODU9bmV3IF8weDU0MDJjYygpLF8weDJhZmJhMD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgyNTkwNzY9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHg0ZWJjNzkoXzB4NDUwY2QxLF8weDVhMTc1OSxfMHhmMjZkNDYsXzB4MjhiM2VjLF8weDExNzNkMyxfMHhhMzlkYTkpe3ZhciBfMHhhNjQ0MTI9XzB4NTllZDAyO2xldCBfMHg0Njg0MDksXzB4NTZmOGIwO3RyeXtfMHg1NmY4YjA9XzB4NTIzYjZhKCksXzB4NDY4NDA5PV8weDFjNjc0MltfMHg1YTE3NTldLCFfMHg0Njg0MDl8fF8weDU2ZjhiMC1fMHg0Njg0MDlbJ3RzJ10+MHgxZjQmJl8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxZDApXSYmXzB4NDY4NDA5W18weGE2NDQxMigweDIyNCldL18weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxZDApXTwweDY0PyhfMHgxYzY3NDJbXzB4NWExNzU5XT1fMHg0Njg0MDk9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHg1NmY4YjB9LF8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXT17fSk6XzB4NTZmOGIwLV8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVsndHMnXT4weDMyJiZfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bXzB4YTY0NDEyKDB4MWQwKV0mJl8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVtfMHhhNjQ0MTIoMHgyMjQpXS9fMHgxYzY3NDJbJ2hpdHMnXVtfMHhhNjQ0MTIoMHgxZDApXTwweDY0JiYoXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldPXt9KTtsZXQgXzB4MWU3ODA1PVtdLF8weDQzNjVkNT1fMHg0Njg0MDlbXzB4YTY0NDEyKDB4MTk3KV18fF8weDFjNjc0MlsnaGl0cyddW18weGE2NDQxMigweDE5NyldP18weDI1OTA3NjpfMHgyYWZiYTAsXzB4MTkyNTc3PV8weDRhOGZmNz0+e3ZhciBfMHg0YzYyMDU9XzB4YTY0NDEyO2xldCBfMHgxZDNmZTQ9e307cmV0dXJuIF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgxZTkpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MWU5KV0sXzB4MWQzZmU0W18weDRjNjIwNSgweDIyNildPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgyMjYpXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjJjKV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDIyYyldLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMmYpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MjJmKV0sXzB4MWQzZmU0W18weDRjNjIwNSgweDIzNildPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgyMzYpXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjEzKV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDIxMyldLF8weDFkM2ZlNFsnc29ydFByb3BzJ109ITB4MSxfMHgxZDNmZTRbJ25vRnVuY3Rpb25zJ109IV8weDQ4OGJhZCxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjExKV09MHgxLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgxOTQpXT0weDAsXzB4MWQzZmU0WydleHBJZCddPV8weDRjNjIwNSgweDI2NiksXzB4MWQzZmU0W18weDRjNjIwNSgweDFhYyldPSdyb290X2V4cCcsXzB4MWQzZmU0W18weDRjNjIwNSgweDFhNCldPSEweDAsXzB4MWQzZmU0W18weDRjNjIwNSgweDIzMildPVtdLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgxYzQpXT0weDAsXzB4MWQzZmU0WydyZXNvbHZlR2V0dGVycyddPSEweDAsXzB4MWQzZmU0W18weDRjNjIwNSgweDIyYildPTB4MCxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjFlKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MWQzZmU0O307Zm9yKHZhciBfMHgxODZmNTc9MHgwO18weDE4NmY1NzxfMHgxMTczZDNbJ2xlbmd0aCddO18weDE4NmY1NysrKV8weDFlNzgwNVtfMHhhNjQ0MTIoMHgyMTcpXShfMHgzZTUwODVbXzB4YTY0NDEyKDB4MWIxKV0oeyd0aW1lTm9kZSc6XzB4NDUwY2QxPT09XzB4YTY0NDEyKDB4MjI0KXx8dm9pZCAweDB9LF8weDExNzNkM1tfMHgxODZmNTddLF8weDE5MjU3NyhfMHg0MzY1ZDUpLHt9KSk7aWYoXzB4NDUwY2QxPT09XzB4YTY0NDEyKDB4MWQxKSl7bGV0IF8weDM5MTRmMD1FcnJvclsnc3RhY2tUcmFjZUxpbWl0J107dHJ5e0Vycm9yW18weGE2NDQxMigweDIxOCldPTB4MS8weDAsXzB4MWU3ODA1W18weGE2NDQxMigweDIxNyldKF8weDNlNTA4NVtfMHhhNjQ0MTIoMHgxYjEpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4YTY0NDEyKDB4MjUzKV0sXzB4MTkyNTc3KF8weDQzNjVkNSkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDM5MTRmMDt9fXJldHVybnsnbWV0aG9kJzpfMHhhNjQ0MTIoMHgyNWYpLCd2ZXJzaW9uJzpfMHg1OTNlOTAsJ2FyZ3MnOlt7J3RzJzpfMHhmMjZkNDYsJ3Nlc3Npb24nOl8weDI4YjNlYywnYXJncyc6XzB4MWU3ODA1LCdpZCc6XzB4NWExNzU5LCdjb250ZXh0JzpfMHhhMzlkYTl9XX07fWNhdGNoKF8weDEwMTAyNyl7cmV0dXJueydtZXRob2QnOl8weGE2NDQxMigweDI1ZiksJ3ZlcnNpb24nOl8weDU5M2U5MCwnYXJncyc6W3sndHMnOl8weGYyNmQ0Niwnc2Vzc2lvbic6XzB4MjhiM2VjLCdhcmdzJzpbeyd0eXBlJzpfMHhhNjQ0MTIoMHgxYTUpLCdlcnJvcic6XzB4MTAxMDI3JiZfMHgxMDEwMjdbXzB4YTY0NDEyKDB4MWE5KV19XSwnaWQnOl8weDVhMTc1OSwnY29udGV4dCc6XzB4YTM5ZGE5fV19O31maW5hbGx5e3RyeXtpZihfMHg0Njg0MDkmJl8weDU2ZjhiMCl7bGV0IF8weDExNWE2NT1fMHg1MjNiNmEoKTtfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MWQwKV0rKyxfMHg0Njg0MDlbJ3RpbWUnXSs9XzB4NGY3ZGZkKF8weDU2ZjhiMCxfMHgxMTVhNjUpLF8weDQ2ODQwOVsndHMnXT1fMHgxMTVhNjUsXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldW18weGE2NDQxMigweDFkMCldKyssXzB4MWM2NzQyWydoaXRzJ11bXzB4YTY0NDEyKDB4MjI0KV0rPV8weDRmN2RmZChfMHg1NmY4YjAsXzB4MTE1YTY1KSxfMHgxYzY3NDJbJ2hpdHMnXVsndHMnXT1fMHgxMTVhNjUsKF8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxZDApXT4weDMyfHxfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MjI0KV0+MHg2NCkmJihfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MTk3KV09ITB4MCksKF8weDFjNjc0MlsnaGl0cyddW18weGE2NDQxMigweDFkMCldPjB4M2U4fHxfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bXzB4YTY0NDEyKDB4MjI0KV0+MHgxMmMpJiYoXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldW18weGE2NDQxMigweDE5NyldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDRlYmM3OTt9KChfMHgzODYyOGIsXzB4MWYwM2NjLF8weDJhYTRlNSxfMHhmMGIzNmMsXzB4Mjk1OTdjLF8weDQ4NTJjZCxfMHhmM2I4YmQsXzB4MzI2ZDBmLF8weDExMTUyYyxfMHgxNzMwNzkpPT57dmFyIF8weDNkMTc1NT1fMHg0OWZiNGQ7aWYoXzB4Mzg2MjhiWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzODYyOGJbXzB4M2QxNzU1KDB4MTk5KV07aWYoIUooXzB4Mzg2MjhiLF8weDMyNmQwZixfMHgyOTU5N2MpKXJldHVybiBfMHgzODYyOGJbXzB4M2QxNzU1KDB4MTk5KV09eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDM4NjI4YltfMHgzZDE3NTUoMHgxOTkpXTtsZXQgXzB4ZGFjZjkwPVcoXzB4Mzg2MjhiKSxfMHgyMGZlN2E9XzB4ZGFjZjkwW18weDNkMTc1NSgweDFhMildLF8weDVlYjdkMT1fMHhkYWNmOTBbJ3RpbWVTdGFtcCddLF8weDExNGQwYj1fMHhkYWNmOTBbXzB4M2QxNzU1KDB4MWNiKV0sXzB4NzY5NGY1PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MTc2NGQ4PVkoXzB4Mzg2MjhiLF8weDExMTUyYyxfMHg3Njk0ZjUsXzB4NDg1MmNkKSxfMHgxNzg4ODY9XzB4MjA3NTMwPT57XzB4NzY5NGY1Wyd0cyddW18weDIwNzUzMF09XzB4NWViN2QxKCk7fSxfMHgxMWY0NzQ9KF8weDcwMGE4NixfMHgyOWI4NmQpPT57dmFyIF8weDJjYmVmMz1fMHgzZDE3NTU7bGV0IF8weDMwZTNhMD1fMHg3Njk0ZjVbJ3RzJ11bXzB4MjliODZkXTtpZihkZWxldGUgXzB4NzY5NGY1Wyd0cyddW18weDI5Yjg2ZF0sXzB4MzBlM2EwKXtsZXQgXzB4NTZkMDQ4PV8weDIwZmU3YShfMHgzMGUzYTAsXzB4NWViN2QxKCkpO18weDE3ZDljZihfMHgxNzY0ZDgoXzB4MmNiZWYzKDB4MjI0KSxfMHg3MDBhODYsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LFtfMHg1NmQwNDhdLF8weDI5Yjg2ZCkpO319LF8weDU2YTU5Mj1fMHgyZTJjMzI9Pl8weDM2NTU2Yj0+e3ZhciBfMHg1YjNkNzk9XzB4M2QxNzU1O3RyeXtfMHgxNzg4ODYoXzB4MzY1NTZiKSxfMHgyZTJjMzIoXzB4MzY1NTZiKTt9ZmluYWxseXtfMHgzODYyOGJbXzB4NWIzZDc5KDB4MjNlKV1bXzB4NWIzZDc5KDB4MjI0KV09XzB4MmUyYzMyO319LF8weDg0MmQxOT1fMHgyN2IzMzA9Pl8weDVkN2QwMD0+e3ZhciBfMHg0YmJkOWQ9XzB4M2QxNzU1O3RyeXtsZXQgW18weDIwMmUyOSxfMHgyM2Y3M2JdPV8weDVkN2QwMFtfMHg0YmJkOWQoMHgxZTIpXSgnOmxvZ1BvaW50SWQ6Jyk7XzB4MTFmNDc0KF8weDIzZjczYixfMHgyMDJlMjkpLF8weDI3YjMzMChfMHgyMDJlMjkpO31maW5hbGx5e18weDM4NjI4YltfMHg0YmJkOWQoMHgyM2UpXVsndGltZUVuZCddPV8weDI3YjMzMDt9fTtfMHgzODYyOGJbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooXzB4MjVjYjM1LF8weGQ0MDAzOSk9Pnt2YXIgXzB4NDhjODc4PV8weDNkMTc1NTtfMHgzODYyOGJbXzB4NDhjODc4KDB4MjNlKV1bXzB4NDhjODc4KDB4MjVmKV1bXzB4NDhjODc4KDB4MjA3KV0hPT0nZGlzYWJsZWRMb2cnJiZfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weDQ4Yzg3OCgweDI1ZiksXzB4MjVjYjM1LF8weDExNGQwYigpLF8weDEzOGIyNCxfMHhkNDAwMzkpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgzMzk4YTksXzB4NDUxNGZjKT0+e3ZhciBfMHg4MzVlMjg9XzB4M2QxNzU1O18weDM4NjI4YltfMHg4MzVlMjgoMHgyM2UpXVsnbG9nJ11bXzB4ODM1ZTI4KDB4MjA3KV0hPT0nZGlzYWJsZWRUcmFjZScmJl8weDE3ZDljZihfMHgxNzY0ZDgoXzB4ODM1ZTI4KDB4MWQxKSxfMHgzMzk4YTksXzB4MTE0ZDBiKCksXzB4MTM4YjI0LF8weDQ1MTRmYykpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHg0YjMzNTQ9XzB4M2QxNzU1O18weDM4NjI4YltfMHg0YjMzNTQoMHgyM2UpXVtfMHg0YjMzNTQoMHgyMjQpXT1fMHg1NmE1OTIoXzB4Mzg2MjhiWydjb25zb2xlJ11bXzB4NGIzMzU0KDB4MjI0KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg0MTAyNzA9XzB4M2QxNzU1O18weDM4NjI4YltfMHg0MTAyNzAoMHgyM2UpXVsndGltZUVuZCddPV8weDg0MmQxOShfMHgzODYyOGJbXzB4NDEwMjcwKDB4MjNlKV1bXzB4NDEwMjcwKDB4MjNhKV0pO30sJ2F1dG9Mb2cnOihfMHgyOWYzNmEsXzB4MTRhYjhjKT0+e18weDE3ZDljZihfMHgxNzY0ZDgoJ2xvZycsXzB4MTRhYjhjLF8weDExNGQwYigpLF8weDEzOGIyNCxbXzB4MjlmMzZhXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NzMwOGFlLF8weDQ2OGZlMCk9Pnt2YXIgXzB4NDYxNzNiPV8weDNkMTc1NTtfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weDQ2MTczYigweDI1ZiksXzB4NzMwOGFlLF8weDExNGQwYigpLF8weDEzOGIyNCxfMHg0NjhmZTApKTt9LCdhdXRvVHJhY2UnOihfMHgxY2MyZjAsXzB4MzUxZTAwKT0+e3ZhciBfMHhlNGZjZjY9XzB4M2QxNzU1O18weDE3ZDljZihfMHgxNzY0ZDgoXzB4ZTRmY2Y2KDB4MWQxKSxfMHgzNTFlMDAsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LFtfMHgxY2MyZjBdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDRjN2ExYyxfMHgyZGIyZDEpPT57dmFyIF8weDFmOTk4ND1fMHgzZDE3NTU7XzB4MTdkOWNmKF8weDE3NjRkOChfMHgxZjk5ODQoMHgxZDEpLF8weDRjN2ExYyxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsXzB4MmRiMmQxKSk7fSwnYXV0b1RpbWUnOihfMHg0ODk3YTAsXzB4MTE0NzE5LF8weDI4MTliZCk9PntfMHgxNzg4ODYoXzB4MjgxOWJkKTt9LCdhdXRvVGltZUVuZCc6KF8weDI1MjA2YixfMHg3YWM4ODIsXzB4NTczYWVhKT0+e18weDExZjQ3NChfMHg3YWM4ODIsXzB4NTczYWVhKTt9LCdjb3ZlcmFnZSc6XzB4NTlmYzI2PT57XzB4MTdkOWNmKHsnbWV0aG9kJzonY292ZXJhZ2UnLCd2ZXJzaW9uJzpfMHg0ODUyY2QsJ2FyZ3MnOlt7J2lkJzpfMHg1OWZjMjZ9XX0pO319O2xldCBfMHgxN2Q5Y2Y9YihfMHgzODYyOGIsXzB4MWYwM2NjLF8weDJhYTRlNSxfMHhmMGIzNmMsXzB4Mjk1OTdjLF8weDE3MzA3OSksXzB4MTM4YjI0PV8weDM4NjI4YltfMHgzZDE3NTUoMHgyNGQpXTtyZXR1cm4gXzB4Mzg2MjhiWydfY29uc29sZV9uaW5qYSddO30pKGdsb2JhbFRoaXMsXzB4NDlmYjRkKDB4MjZkKSxfMHg0OWZiNGQoMHgxOWQpLF8weDQ5ZmI0ZCgweDE4ZCksXzB4NDlmYjRkKDB4MThiKSwnMS4wLjAnLF8weDQ5ZmI0ZCgweDFiYSksXzB4NDlmYjRkKDB4MWVlKSxfMHg0OWZiNGQoMHgxOTEpLF8weDQ5ZmI0ZCgweDE5NSkpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbi8vIENsYXNzIG1vZHVsZSB0byBleHBvcnQgLGtlZXAgaW4gbWluZCBpdCBzaG91bGQgb25seSBjcmVhdGUgdGhlIGNsYXNzIG9iamVjdHMuXG4vLyBLZWVwIHR5cGUgY2hlY2tzLCBhcyBzZXBlcmF0ZSBmdW5jdGlvbnNcblxuLy8gUHNldWRvY29kZSB0b2RvcyAoaXJvbmljIEkga25vdylcbi8qIFRpdGxlIHNob3VsZCBqdXN0IGJlIHRpdGxlLCBcbiAgICBjYW4gYmUgd2hhdGV2ZXIuIFxuICAgICAgLS0gIE1ha2Ugc3VyZSBpbnB1dCBpcyBzYW5pdGlzZWQ/IC0tIGl0J3MgYW4gZXhlcmNpc2UsIGtlZXAgaW4gbWluZCBmb3IgZnV0dXJlIHByb2plY3QgdGhvXG4gICAgICAgIExpbWl0IHRvIDMwIGxldHRlcnM/ICovXG4vKiBkZXNjIHNob3VsZCBiZSBkZXNjcmlwdGlvbiwgXG4gICAgY2FuIGJlIHdoYXRldmVyLiBcbiAgICAgICAgLS1NYWtlIHN1cmUgaW5wdXQgaXMgc2FuaXRpc2VkPyAgLS0gbm90IHBhcnQgb2YgZXhlcmNpc2UsIGJ1dCBnb29kIHByYWN0aWNlXG4gICAgICAgIExpbWl0IHRvIDEwMCBsZXR0ZXJzPyAqL1xuLyogZHVlIGRhdGUgXG4gICAgc2hvdWxkIGJlIHR5cGUgY2hlY2tlZCwgXG4gICAgICAgIGFjY2VwdCBmb3JtYXQgZGQvbW0veXl5eT9cbiAgICAgICAgT3B0aW9uMTogdXNlIGZ1bmN0aW9uIFwiZm9ybWF0RGF0ZSgpIGluIGNvbnN0cnVjdG9yXCJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoKSBzaG91bGQgdXNlIGNoZWNrRGF0ZSgpIGZvciB0eXBlIGNoZWNrXG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgaWYgaW52YWxpZCwgc2VuZCB0byBmb3JtYXREYXRlIHdoaWNoIHJldHVybnMgXCJpbnZhbGlkIGZvcm1hdFwiXG4gICAgICAgICAgICAgICAgaWYgc3RhdGVtZW50cz9cbiAgICAgICAgT3B0aW9uMjogdXNlIHdlYnBhY2sgbGlicmFyeSBkYXRlLWZuc1xuICAgIGFuZCB0dXJuZWQgaW50byBhY3R1YWwgZGF0ZSBvYmplY3Q/ICAqL1xuLyogcHJpb3JpdHlcbiAgICBzaG91bGQgYmUgZGV0ZXJybWluZWQgYmV0d2VlbiBsb3csIG1lZGl1bSBhbmQgaGlnaCBwcmlvcml0eVxuICAgICAgICBvciBqdXN0IGJvb2xlYW4gLi4uIHByb2JhYmx5IGp1c3QgYm9vbGVhblxuICAgICAgICBpZiBwcmlvcml0eSwgbWFrZSBpdCBzdGFuZCBvdXQ/ICovXG4vKiBub3Rlc1xuICAgIGNhbiBiZSB3aGF0ZXZlclxuICAgIG1heCAzMDAgY2hhcmFjdGVyc1xuICAgIHNhbml0aXNlIGJlZm9yZSBpbnB1dCAqL1xuLyogY2hlY2tsaXN0IChtYWlubHkgZHVyaW5nIFVJIHN0YWdlLCBcbiAgICAgICAgICAgIGNhbiBjaGVjayBpZiBhY2NlcHRzIHJlc3QgYXJndW1lbnRzIHRobyBcbiAgICAgICAgICAgIGFuZCB0aHJvdyBpbnRvIGFycmF5IGR1cmluZyBsb2dpYyBzdGFnZSlcbiAgICBvcHRpb25hbCxcbiAgICBMb2dpYyBzdGFnZTpcbiAgICBBY2NlcHRzIHJlbWFpbmluZyBhcmd1bWVudHNcbiAgICAgICAgcGFyc2UgaW50byBjb25zdHJ1Y3RvciB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBpbnB1dHNcbiAgICAgICAgc2hvdWxkIGhhdmUgbWV0aG9kIHRoYXQgbG9ncyBhbGwgY2hlY2twb2ludHNcbiAgICBVSSBzdGFnZTpcbiAgICBhY2NlcHRzIHJlbWFpbmluZyBhcmd1bWVudHMsIGFuZCB0aHJvd3MgdGhlbSBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIG5hbWVkIFwiY3JlYXRlQ2hlY2tsaXN0XCJcbiAgICBjcmVhdGUgZm9ybSBkaXYgY2hlY2tsaXN0XG4gICAgZm9yIGVhY2ggYXJndW1lbnQgcGFyc2VkIHRvIGNvbnN0cnVjdG9yKHN0cikgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIC4uLmNoZWNrTGlzdCkge1xuXHRcdHRoaXMudGl0bGUgPSBjaGVja1RpdGxlKHRpdGxlKVxuXHRcdHRoaXMuZGVzYyA9IGNoZWNrRGVzYyhkZXNjKVxuXHRcdHRoaXMuZHVlRGF0ZSA9IGZvcm1hdERhdGUoZHVlRGF0ZSlcblx0XHR0aGlzLnByaW9yaXR5ID0gaXNQcmlvcml0eShwcmlvcml0eSlcblx0XHR0aGlzLm5vdGVzID0gbm90ZXNcblx0XHQvL2NoZWNrTGlzdCBpcyBhIGFycmF5LCBwZXJmZWN0LlxuXHRcdHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tMaXN0XG5cdH1cblx0cHJpbnRUb0RvKCkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDczMzEwODI3NV81N18yXzU3XzY5XzRgLCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JykpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNzMzMTA4Mjc1XzU4XzJfNThfMzhfNGAsYHRpdGxlOiAke3RoaXMudGl0bGV9LGApKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDczMzEwODI3NV81OV8yXzU5XzQzXzRgLGBkZXNjcmlwdGlvbjogJHt0aGlzLmRlc2N9LGApKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDczMzEwODI3NV82MF8yXzYwXzQzXzRgLGBkdWUgZGF0ZTogJHt0aGlzLmR1ZURhdGV9LGApKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDczMzEwODI3NV82MV8yXzYxXzQ0XzRgLGBwcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fSxgKSlcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA3MzMxMDgyNzVfNjJfMl82Ml8zOF80YCxgbm90ZXM6ICR7dGhpcy5ub3Rlc30sYCkpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNzMzMTA4Mjc1XzYzXzJfNjNfNDZfNGAsYGNoZWNrbGlzdDogJHt0aGlzLmNoZWNrbGlzdH0uYCkpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNzMzMTA4Mjc1XzY0XzJfNjRfNjlfNGAsJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKSlcblx0fVxufVxuXG4vLyBDaGVja3MgYmVsb3dcblxuZnVuY3Rpb24gY2hlY2tUaXRsZSh0aXRsZSkge1xuXHQvLyBXb3VsZCBhbHNvIGluY2x1ZGUgc2FuaXRpc2F0aW9uXG5cdGlmICh0aXRsZS5sZW5ndGggPD0gMTApIHJldHVybiB0aXRsZVxuXHRlbHNlIHJldHVybiAnVGl0bGUgdG9vIGxvbmcnXG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVzYyhkZXNjKSB7XG5cdC8vIFdvdWxkIGFsc28gaW5jbHVkZSBzYW5pdGlzYXRpb25cblx0aWYgKGRlc2MubGVuZ3RoIDw9IDEwMCkgcmV0dXJuIGRlc2Ncblx0ZWxzZSByZXR1cm4gJ0Rlc2NyaXB0aW9uIHRvbyBsb25nJ1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGR1ZURhdGUpIHtcblx0Y29uc3QgYXJyID0gZHVlRGF0ZS5zcGxpdCgvLS8pXG5cblx0cmV0dXJuIGZvcm1hdChuZXcgRGF0ZShhcnJbMl0sIGFyclsxXSwgYXJyWzBdKSwgJ2RkLU1NLXl5eXknKVxufVxuXG5mdW5jdGlvbiBpc1ByaW9yaXR5KHByaW9yaXR5KSB7XG5cdGlmIChwcmlvcml0eSA9PSAneWVzJykgcmV0dXJuIHRydWVcblx0ZWxzZSByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tsaXN0KGNoZWNrTGlzdCkge1xuXHQvL3Jlc2VydmVkIGZvciBVSSBpbXBsZW1lbnRhdGlvbj9cbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHg0OWZiNGQ9XzB4M2Y0ZDsoZnVuY3Rpb24oXzB4MWFjZjI3LF8weDEyMzExYil7dmFyIF8weDRiZTNhMT1fMHgzZjRkLF8weDE4NmI5ZT1fMHgxYWNmMjcoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDNhMDMwND0tcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjM3KSkvMHgxKigtcGFyc2VJbnQoXzB4NGJlM2ExKDB4MWYwKSkvMHgyKStwYXJzZUludChfMHg0YmUzYTEoMHgyMmEpKS8weDMqKC1wYXJzZUludChfMHg0YmUzYTEoMHgyMGIpKS8weDQpK3BhcnNlSW50KF8weDRiZTNhMSgweDFlNykpLzB4NSstcGFyc2VJbnQoXzB4NGJlM2ExKDB4MWEzKSkvMHg2Ky1wYXJzZUludChfMHg0YmUzYTEoMHgyMDMpKS8weDcqKC1wYXJzZUludChfMHg0YmUzYTEoMHgyNjgpKS8weDgpK3BhcnNlSW50KF8weDRiZTNhMSgweDFlMykpLzB4OSoocGFyc2VJbnQoXzB4NGJlM2ExKDB4MWE3KSkvMHhhKSstcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjA2KSkvMHhiKihwYXJzZUludChfMHg0YmUzYTEoMHgxZmUpKS8weGMpO2lmKF8weDNhMDMwND09PV8weDEyMzExYilicmVhaztlbHNlIF8weDE4NmI5ZVsncHVzaCddKF8weDE4NmI5ZVsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4M2Y2ZmQxKXtfMHgxODZiOWVbJ3B1c2gnXShfMHgxODZiOWVbJ3NoaWZ0J10oKSk7fX19KF8weGE4YjMsMHg0NjQ0YSkpO3ZhciBqPU9iamVjdFtfMHg0OWZiNGQoMHgyMGMpXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sZWU9T2JqZWN0W18weDQ5ZmI0ZCgweDIwYSldLHRlPU9iamVjdFtfMHg0OWZiNGQoMHgyNTIpXSxuZT1PYmplY3RbXzB4NDlmYjRkKDB4MjNiKV1bXzB4NDlmYjRkKDB4MjM4KV0scmU9KF8weDE5ZTRlZSxfMHgzMDcyOTIsXzB4NWRkY2Q0LF8weDU5N2YzZSk9Pnt2YXIgXzB4Mjc2MzA0PV8weDQ5ZmI0ZDtpZihfMHgzMDcyOTImJnR5cGVvZiBfMHgzMDcyOTI9PSdvYmplY3QnfHx0eXBlb2YgXzB4MzA3MjkyPT1fMHgyNzYzMDQoMHgyMjcpKXtmb3IobGV0IF8weGU0ZDQxOSBvZiBlZShfMHgzMDcyOTIpKSFuZVtfMHgyNzYzMDQoMHgxOWEpXShfMHgxOWU0ZWUsXzB4ZTRkNDE5KSYmXzB4ZTRkNDE5IT09XzB4NWRkY2Q0JiZIKF8weDE5ZTRlZSxfMHhlNGQ0MTkseydnZXQnOigpPT5fMHgzMDcyOTJbXzB4ZTRkNDE5XSwnZW51bWVyYWJsZSc6IShfMHg1OTdmM2U9RyhfMHgzMDcyOTIsXzB4ZTRkNDE5KSl8fF8weDU5N2YzZVtfMHgyNzYzMDQoMHgxZjEpXX0pO31yZXR1cm4gXzB4MTllNGVlO30seD0oXzB4MTlmNzU5LF8weDFiZDdlMyxfMHgxM2E3NTMpPT4oXzB4MTNhNzUzPV8weDE5Zjc1OSE9bnVsbD9qKHRlKF8weDE5Zjc1OSkpOnt9LHJlKF8weDFiZDdlM3x8IV8weDE5Zjc1OXx8IV8weDE5Zjc1OVtfMHg0OWZiNGQoMHgxYmMpXT9IKF8weDEzYTc1MyxfMHg0OWZiNGQoMHgxZjYpLHsndmFsdWUnOl8weDE5Zjc1OSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDEzYTc1MyxfMHgxOWY3NTkpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDJlMjVlZCxfMHgxMDYzOGIsXzB4NGFhOWRhLF8weDIyODQyNixfMHg0Nzc5NGIpe3ZhciBfMHg1MjBmMWE9XzB4NDlmYjRkO3RoaXNbJ2dsb2JhbCddPV8weDJlMjVlZCx0aGlzW18weDUyMGYxYSgweDFjYyldPV8weDEwNjM4Yix0aGlzWydwb3J0J109XzB4NGFhOWRhLHRoaXNbXzB4NTIwZjFhKDB4MWYzKV09XzB4MjI4NDI2LHRoaXNbXzB4NTIwZjFhKDB4MTk2KV09XzB4NDc3OTRiLHRoaXNbXzB4NTIwZjFhKDB4MWJiKV09ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1tfMHg1MjBmMWEoMHgyNGUpXT0hMHgxLHRoaXNbXzB4NTIwZjFhKDB4MjE5KV09ITB4MSx0aGlzW18weDUyMGYxYSgweDI0NyldPV8weDJlMjVlZFtfMHg1MjBmMWEoMHgyMDIpXT8uWydlbnYnXT8uW18weDUyMGYxYSgweDIxZildPT09XzB4NTIwZjFhKDB4MWU1KSx0aGlzW18weDUyMGYxYSgweDE4NyldPSF0aGlzW18weDUyMGYxYSgweDFhYSldW18weDUyMGYxYSgweDIwMildPy5bXzB4NTIwZjFhKDB4MWQ3KV0/LltfMHg1MjBmMWEoMHgyMWUpXSYmIXRoaXNbXzB4NTIwZjFhKDB4MjQ3KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDUyMGYxYSgweDI0OSldPTB4MCx0aGlzW18weDUyMGYxYSgweDI0YyldPTB4MTQsdGhpc1tfMHg1MjBmMWEoMHgxODkpXT1fMHg1MjBmMWEoMHgyNmUpLHRoaXNbXzB4NTIwZjFhKDB4MWVmKV09KHRoaXNbXzB4NTIwZjFhKDB4MTg3KV0/XzB4NTIwZjFhKDB4MjA5KTonQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnKSt0aGlzW18weDUyMGYxYSgweDE4OSldO31hc3luY1tfMHg0OWZiNGQoMHgyMGYpXSgpe3ZhciBfMHg1OGZmZjI9XzB4NDlmYjRkO2lmKHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddKXJldHVybiB0aGlzW18weDU4ZmZmMigweDI1NyldO2xldCBfMHhlZmNlNjtpZih0aGlzW18weDU4ZmZmMigweDE4NyldfHx0aGlzW18weDU4ZmZmMigweDI0NyldKV8weGVmY2U2PXRoaXNbXzB4NThmZmYyKDB4MWFhKV1bXzB4NThmZmYyKDB4MWEwKV07ZWxzZXtpZih0aGlzW18weDU4ZmZmMigweDFhYSldW18weDU4ZmZmMigweDIwMildPy5bXzB4NThmZmYyKDB4MWI2KV0pXzB4ZWZjZTY9dGhpc1tfMHg1OGZmZjIoMHgxYWEpXVtfMHg1OGZmZjIoMHgyMDIpXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDJlYzFlZT1hd2FpdCBpbXBvcnQoJ3BhdGgnKTtfMHhlZmNlNj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVtfMHg1OGZmZjIoMHgyNDgpXShfMHgyZWMxZWVbXzB4NThmZmYyKDB4MWRkKV0odGhpc1tfMHg1OGZmZjIoMHgxZjMpXSwnd3MvaW5kZXguanMnKSlbXzB4NThmZmYyKDB4MjQ0KV0oKSkpW18weDU4ZmZmMigweDFmNildO31jYXRjaHt0cnl7XzB4ZWZjZTY9cmVxdWlyZShyZXF1aXJlKF8weDU4ZmZmMigweDFlZCkpW18weDU4ZmZmMigweDFkZCldKHRoaXNbXzB4NThmZmYyKDB4MWYzKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4NThmZmYyKDB4MjRiKSk7fX19cmV0dXJuIHRoaXNbXzB4NThmZmYyKDB4MjU3KV09XzB4ZWZjZTYsXzB4ZWZjZTY7fVsnX2Nvbm5lY3RUb0hvc3ROb3cnXSgpe3ZhciBfMHg1YmZkZWE9XzB4NDlmYjRkO3RoaXNbXzB4NWJmZGVhKDB4MjE5KV18fHRoaXNbXzB4NWJmZGVhKDB4MjRlKV18fHRoaXNbXzB4NWJmZGVhKDB4MjQ5KV0+PXRoaXNbXzB4NWJmZGVhKDB4MjRjKV18fCh0aGlzW18weDViZmRlYSgweDI1YyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgwLHRoaXNbXzB4NWJmZGVhKDB4MjQ5KV0rKyx0aGlzW18weDViZmRlYSgweDFjNyldPW5ldyBQcm9taXNlKChfMHg1NDU4YjMsXzB4MWEzOTY5KT0+e3ZhciBfMHg0Nzg2N2I9XzB4NWJmZGVhO3RoaXNbXzB4NDc4NjdiKDB4MjBmKV0oKVtfMHg0Nzg2N2IoMHgyNDMpXShfMHgzNzE0NmM9Pnt2YXIgXzB4NDZlMzIxPV8weDQ3ODY3YjtsZXQgXzB4M2IwZjE2PW5ldyBfMHgzNzE0NmMoXzB4NDZlMzIxKDB4MjU1KSsoIXRoaXNbJ19pbkJyb3dzZXInXSYmdGhpc1tfMHg0NmUzMjEoMHgxOTYpXT9fMHg0NmUzMjEoMHgxOTgpOnRoaXNbXzB4NDZlMzIxKDB4MWNjKV0pKyc6Jyt0aGlzW18weDQ2ZTMyMSgweDFlYSldKTtfMHgzYjBmMTZbXzB4NDZlMzIxKDB4MWMyKV09KCk9Pnt2YXIgXzB4MTdjNTc1PV8weDQ2ZTMyMTt0aGlzW18weDE3YzU3NSgweDFiYildPSEweDEsdGhpc1tfMHgxN2M1NzUoMHgyMWIpXShfMHgzYjBmMTYpLHRoaXNbXzB4MTdjNTc1KDB4MjMwKV0oKSxfMHgxYTM5NjkobmV3IEVycm9yKF8weDE3YzU3NSgweDFiOSkpKTt9LF8weDNiMGYxNltfMHg0NmUzMjEoMHgyNGEpXT0oKT0+e3ZhciBfMHg0ODE0ZmU9XzB4NDZlMzIxO3RoaXNbXzB4NDgxNGZlKDB4MTg3KV18fF8weDNiMGYxNltfMHg0ODE0ZmUoMHgxZDIpXSYmXzB4M2IwZjE2Wydfc29ja2V0J11bXzB4NDgxNGZlKDB4MjIzKV0mJl8weDNiMGYxNltfMHg0ODE0ZmUoMHgxZDIpXVtfMHg0ODE0ZmUoMHgyMjMpXSgpLF8weDU0NThiMyhfMHgzYjBmMTYpO30sXzB4M2IwZjE2W18weDQ2ZTMyMSgweDFlYildPSgpPT57dmFyIF8weDVkYzkyZT1fMHg0NmUzMjE7dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4NWRjOTJlKDB4MjFiKV0oXzB4M2IwZjE2KSx0aGlzW18weDVkYzkyZSgweDIzMCldKCk7fSxfMHgzYjBmMTZbXzB4NDZlMzIxKDB4MjUxKV09XzB4MmNhNzFiPT57dmFyIF8weDUwYTNlOT1fMHg0NmUzMjE7dHJ5e18weDJjYTcxYiYmXzB4MmNhNzFiW18weDUwYTNlOSgweDFlYyldJiZ0aGlzW18weDUwYTNlOSgweDE4NyldJiZKU09OW18weDUwYTNlOSgweDFkYildKF8weDJjYTcxYlsnZGF0YSddKVtfMHg1MGEzZTkoMHgyMDEpXT09PV8weDUwYTNlOSgweDFlNCkmJnRoaXNbXzB4NTBhM2U5KDB4MWFhKV1bXzB4NTBhM2U5KDB4MjE1KV1bJ3JlbG9hZCddKCk7fWNhdGNoe319O30pW18weDQ3ODY3YigweDI0MyldKF8weDQxNDUxYz0+KHRoaXNbXzB4NDc4NjdiKDB4MjRlKV09ITB4MCx0aGlzW18weDQ3ODY3YigweDIxOSldPSEweDEsdGhpc1tfMHg0Nzg2N2IoMHgyNWMpXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzW18weDQ3ODY3YigweDI0OSldPTB4MCxfMHg0MTQ1MWMpKVsnY2F0Y2gnXShfMHg0ODk0ZDU9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHg0Nzg2N2IoMHgyMjUpXShfMHg0Nzg2N2IoMHgyNDApK3RoaXNbXzB4NDc4NjdiKDB4MTg5KV0pLF8weDFhMzk2OShuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDQ4OTRkNSYmXzB4NDg5NGQ1W18weDQ3ODY3YigweDFhOSldKSkpKSk7fSkpO31bXzB4NDlmYjRkKDB4MjFiKV0oXzB4NWM3YzNkKXt2YXIgXzB4MWQ5ZTU9XzB4NDlmYjRkO3RoaXNbXzB4MWQ5ZTUoMHgyNGUpXT0hMHgxLHRoaXNbXzB4MWQ5ZTUoMHgyMTkpXT0hMHgxO3RyeXtfMHg1YzdjM2RbXzB4MWQ5ZTUoMHgxZWIpXT1udWxsLF8weDVjN2MzZFsnb25lcnJvciddPW51bGwsXzB4NWM3YzNkW18weDFkOWU1KDB4MjRhKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1YzdjM2RbXzB4MWQ5ZTUoMHgxOTMpXTwweDImJl8weDVjN2MzZFtfMHgxZDllNSgweDI1ZSldKCk7fWNhdGNoe319W18weDQ5ZmI0ZCgweDIzMCldKCl7dmFyIF8weDM2MTQ0ZT1fMHg0OWZiNGQ7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weDM2MTQ0ZSgweDFjOSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NDc5MDVlPV8weDM2MTQ0ZTt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4NDc5MDVlKDB4MjE5KV18fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHg0NzkwNWUoMHgxYzcpXT8uW18weDQ3OTA1ZSgweDIyMCldKCgpPT50aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCkpKTt9LDB4MWY0KSx0aGlzW18weDM2MTQ0ZSgweDFjOSldW18weDM2MTQ0ZSgweDIyMyldJiZ0aGlzW18weDM2MTQ0ZSgweDFjOSldWyd1bnJlZiddKCkpO31hc3luY1tfMHg0OWZiNGQoMHgxZmIpXShfMHgyZTNmMzgpe3ZhciBfMHhhNzc3Njg9XzB4NDlmYjRkO3RyeXtpZighdGhpc1tfMHhhNzc3NjgoMHgxYmIpXSlyZXR1cm47dGhpc1tfMHhhNzc3NjgoMHgyNWMpXSYmdGhpc1tfMHhhNzc3NjgoMHgxZDkpXSgpLChhd2FpdCB0aGlzW18weGE3Nzc2OCgweDFjNyldKVtfMHhhNzc3NjgoMHgxZmIpXShKU09OWydzdHJpbmdpZnknXShfMHgyZTNmMzgpKTt9Y2F0Y2goXzB4NTc3OWRmKXtjb25zb2xlW18weGE3Nzc2OCgweDIyNSldKHRoaXNbXzB4YTc3NzY4KDB4MWVmKV0rJzpcXFxceDIwJysoXzB4NTc3OWRmJiZfMHg1Nzc5ZGZbXzB4YTc3NzY4KDB4MWE5KV0pKSx0aGlzW18weGE3Nzc2OCgweDFiYildPSEweDEsdGhpc1tfMHhhNzc3NjgoMHgyMzApXSgpO319fTtmdW5jdGlvbiBiKF8weDE3OWNmNyxfMHgzZDE2MTMsXzB4Mjg2N2U2LF8weDI1MGRlYyxfMHg1YmZkNDIsXzB4MTc3NjkwKXt2YXIgXzB4NTg5ZjAwPV8weDQ5ZmI0ZDtsZXQgXzB4NWI2MGRlPV8weDI4NjdlNltfMHg1ODlmMDAoMHgxZTIpXSgnLCcpWydtYXAnXShfMHgzZjFjMTQ9Pnt2YXIgXzB4NDUxM2NlPV8weDU4OWYwMDt0cnl7XzB4MTc5Y2Y3WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ118fCgoXzB4NWJmZDQyPT09J25leHQuanMnfHxfMHg1YmZkNDI9PT1fMHg0NTEzY2UoMHgxZjgpfHxfMHg1YmZkNDI9PT1fMHg0NTEzY2UoMHgxZGUpfHxfMHg1YmZkNDI9PT1fMHg0NTEzY2UoMHgxYWQpKSYmKF8weDViZmQ0Mis9IV8weDE3OWNmN1tfMHg0NTEzY2UoMHgyMDIpXT8uW18weDQ1MTNjZSgweDFkNyldPy5bXzB4NDUxM2NlKDB4MjFlKV0mJl8weDE3OWNmN1tfMHg0NTEzY2UoMHgyMDIpXT8uW18weDQ1MTNjZSgweDFmYyldPy5bXzB4NDUxM2NlKDB4MjFmKV0hPT1fMHg0NTEzY2UoMHgxZTUpPydcXFxceDIwYnJvd3Nlcic6XzB4NDUxM2NlKDB4MjU5KSksXzB4MTc5Y2Y3W18weDQ1MTNjZSgweDI0ZCldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1YmZkNDJ9KTtsZXQgXzB4MTZiNWJiPW5ldyBYKF8weDE3OWNmNyxfMHgzZDE2MTMsXzB4M2YxYzE0LF8weDI1MGRlYyxfMHgxNzc2OTApO3JldHVybiBfMHgxNmI1YmJbXzB4NDUxM2NlKDB4MWZiKV1bXzB4NDUxM2NlKDB4MWMwKV0oXzB4MTZiNWJiKTt9Y2F0Y2goXzB4NWQ1YTdkKXtyZXR1cm4gY29uc29sZVtfMHg0NTEzY2UoMHgyMjUpXShfMHg0NTEzY2UoMHgxY2EpLF8weDVkNWE3ZCYmXzB4NWQ1YTdkW18weDQ1MTNjZSgweDFhOSldKSwoKT0+e307fX0pO3JldHVybiBfMHgzNGJmMTg9Pl8weDViNjBkZVtfMHg1ODlmMDAoMHgxYjcpXShfMHgyMGFkZTA9Pl8weDIwYWRlMChfMHgzNGJmMTgpKTt9ZnVuY3Rpb24gXzB4M2Y0ZChfMHg0MjA3ZjcsXzB4MTZjMjk4KXt2YXIgXzB4YThiMzYzPV8weGE4YjMoKTtyZXR1cm4gXzB4M2Y0ZD1mdW5jdGlvbihfMHgzZjRkZGQsXzB4MWQ5ODFhKXtfMHgzZjRkZGQ9XzB4M2Y0ZGRkLTB4MTg1O3ZhciBfMHgzMjkyYTQ9XzB4YThiMzYzW18weDNmNGRkZF07cmV0dXJuIF8weDMyOTJhNDt9LF8weDNmNGQoXzB4NDIwN2Y3LF8weDE2YzI5OCk7fWZ1bmN0aW9uIFcoXzB4MmRiMGJhKXt2YXIgXzB4MjUzYzAzPV8weDQ5ZmI0ZDtsZXQgXzB4NDgxYjUyPWZ1bmN0aW9uKF8weDJmYjNmMSxfMHhmY2U4ZmQpe3JldHVybiBfMHhmY2U4ZmQtXzB4MmZiM2YxO30sXzB4M2I4OWU2O2lmKF8weDJkYjBiYVtfMHgyNTNjMDMoMHgxY2QpXSlfMHgzYjg5ZTY9ZnVuY3Rpb24oKXt2YXIgXzB4M2YxNTIyPV8weDI1M2MwMztyZXR1cm4gXzB4MmRiMGJhW18weDNmMTUyMigweDFjZCldW18weDNmMTUyMigweDFjYildKCk7fTtlbHNle2lmKF8weDJkYjBiYVtfMHgyNTNjMDMoMHgyMDIpXSYmXzB4MmRiMGJhWydwcm9jZXNzJ11bXzB4MjUzYzAzKDB4MjU2KV0mJl8weDJkYjBiYVtfMHgyNTNjMDMoMHgyMDIpXT8uW18weDI1M2MwMygweDFmYyldPy5bXzB4MjUzYzAzKDB4MjFmKV0hPT0nZWRnZScpXzB4M2I4OWU2PWZ1bmN0aW9uKCl7dmFyIF8weDMyNmQ2MT1fMHgyNTNjMDM7cmV0dXJuIF8weDJkYjBiYVtfMHgzMjZkNjEoMHgyMDIpXVtfMHgzMjZkNjEoMHgyNTYpXSgpO30sXzB4NDgxYjUyPWZ1bmN0aW9uKF8weDIyNDVjNixfMHg0OTQwNjYpe3JldHVybiAweDNlOCooXzB4NDk0MDY2WzB4MF0tXzB4MjI0NWM2WzB4MF0pKyhfMHg0OTQwNjZbMHgxXS1fMHgyMjQ1YzZbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4N2ZjNDM1fT1yZXF1aXJlKCdwZXJmX2hvb2tzJyk7XzB4M2I4OWU2PWZ1bmN0aW9uKCl7dmFyIF8weDI1YmFkMT1fMHgyNTNjMDM7cmV0dXJuIF8weDdmYzQzNVtfMHgyNWJhZDEoMHgxY2IpXSgpO307fWNhdGNoe18weDNiODllNj1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDQ4MWI1MiwndGltZVN0YW1wJzpfMHgzYjg5ZTYsJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBfMHhhOGIzKCl7dmFyIF8weDQ4YjZiYj1bJ2dldE93blByb3BlcnR5TmFtZXMnLCc1MTQ0c3RDU3FOJywnY3JlYXRlJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ19pc01hcCcsJ2RlcHRoJywnW29iamVjdFxcXFx4MjBTZXRdJywnYXV0b0V4cGFuZE1heERlcHRoJywnc3ltYm9sJywnbG9jYXRpb24nLCdfaXNOZWdhdGl2ZVplcm8nLCdwdXNoJywnc3RhY2tUcmFjZUxpbWl0JywnX2Nvbm5lY3RpbmcnLCdfU3ltYm9sJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywndmFsdWUnLCdub2RlJywnTkVYVF9SVU5USU1FJywnY2F0Y2gnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCd1bnJlZicsJ3RpbWUnLCd3YXJuJywnZWxlbWVudHMnLCdmdW5jdGlvbicsJ3R5cGUnLCdfcHJvcGVydHknLCcyN3JhT1lnUicsJ2FsbFN0ckxlbmd0aCcsJ3N0ckxlbmd0aCcsJ1NldCcsJ29iamVjdCcsJ3RvdGFsU3RyTGVuZ3RoJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdsZW5ndGgnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnbm9GdW5jdGlvbnMnLCdfcmVnRXhwVG9TdHJpbmcnLCdudXh0JywnYXV0b0V4cGFuZExpbWl0JywnNUVmakVRTCcsJ2hhc093blByb3BlcnR5JywnSFRNTEFsbENvbGxlY3Rpb24nLCd0aW1lRW5kJywncHJvdG90eXBlJywnX3Byb3BlcnR5TmFtZScsJ2NvbmNhdCcsJ2NvbnNvbGUnLCdfa2V5U3RyUmVnRXhwJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCduZWdhdGl2ZUluZmluaXR5JywnYm9vbGVhbicsJ3RoZW4nLCd0b1N0cmluZycsJ3BhcmVudCcsJ3NsaWNlJywnX2luTmV4dEVkZ2UnLCdwYXRoVG9GaWxlVVJMJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdvbm9wZW4nLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfY29ubmVjdGVkJywnY2FwcGVkUHJvcHMnLCdfY2xlYW5Ob2RlJywnb25tZXNzYWdlJywnZ2V0UHJvdG90eXBlT2YnLCdzdGFjaycsJ3RvTG93ZXJDYXNlJywnd3M6Ly8nLCdocnRpbWUnLCdfV2ViU29ja2V0Q2xhc3MnLCdfcF9uYW1lJywnXFxcXHgyMHNlcnZlcicsJ190eXBlJywnbnVsbCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdjbG9zZScsJ2xvZycsJ3ZhbHVlT2YnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdlcnJvcicsJ1N0cmluZycsJ2luZGV4JywnX2NhcElmU3RyaW5nJywncm9vdF9leHBfaWQnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnMTEzNzA0SkRVQUFVJywnX3VuZGVmaW5lZCcsJ251bWJlcicsJ19oYXNNYXBPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJzEyNy4wLjAuMScsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdfcXVvdGVkUmVnRXhwJywnX3BfbGVuZ3RoJywnX2luQnJvd3NlcicsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX251bWJlclJlZ0V4cCcsJ3dlYnBhY2snLCdzdWJzdHInLFxcXCIvaG9tZS9kYW5pZWxsci8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI4OS9ub2RlX21vZHVsZXNcXFwiLCdfaXNTZXQnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdtYXRjaCcsJycsJ19zZXROb2RlTGFiZWwnLCdyZWFkeVN0YXRlJywnbGV2ZWwnLCcnLCdkb2NrZXJpemVkQXBwJywncmVkdWNlTGltaXRzJywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdfY29uc29sZV9uaW5qYScsJ2NhbGwnLCdzdHJpbmcnLCdNYXAnLCczNDg3OScsJ3VuZGVmaW5lZCcsJ19vYmplY3RUb1N0cmluZycsJ1dlYlNvY2tldCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdlbGFwc2VkJywnMTk1NjA0OHF1WW1GYScsJ2F1dG9FeHBhbmQnLCd1bmtub3duJywnX2RhdGVUb1N0cmluZycsJzExODBMdnpwRlAnLCdFcnJvcicsJ21lc3NhZ2UnLCdnbG9iYWwnLCdCdWZmZXInLCdyb290RXhwcmVzc2lvbicsJ2FuZ3VsYXInLCdzb3J0UHJvcHMnLCdjYXBwZWQnLCdyZXBsYWNlJywnc2VyaWFsaXplJywndW5zaGlmdCcsJ19pc0FycmF5JywnZGF0ZScsJ19wXycsJ19XZWJTb2NrZXQnLCdmb3JFYWNoJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCcxNzA5MTExMTk5MTUzJywnX2FsbG93ZWRUb1NlbmQnLCdfX2VzJysnTW9kdWxlJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2JpbmQnLCdnZXQnLCdvbmVycm9yJywnX2lzUHJpbWl0aXZlVHlwZScsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX0hUTUxBbGxDb2xsZWN0aW9uJywnYmlnaW50JywnX3dzJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnX3JlY29ubmVjdFRpbWVvdXQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ25vdycsJ2hvc3QnLCdwZXJmb3JtYW5jZScsJ25hbicsJ19zZXROb2RlSWQnLCdjb3VudCcsJ3RyYWNlJywnX3NvY2tldCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnbmVnYXRpdmVaZXJvJywnUmVnRXhwJywnQm9vbGVhbicsJ3ZlcnNpb25zJywnc2V0JywnX2Nvbm5lY3RUb0hvc3ROb3cnLCd0ZXN0JywncGFyc2UnLCdfYWRkTG9hZE5vZGUnLCdqb2luJywnYXN0cm8nLCdOdW1iZXInLCdzZXR0ZXInLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnc3BsaXQnLCczNzYyOWVaSVhFdScsJ3JlbG9hZCcsJ2VkZ2UnLCdjYXBwZWRFbGVtZW50cycsJzkzMTkwNUxhcEtheCcsJ19zb3J0UHJvcHMnLCdwcm9wcycsJ3BvcnQnLCdvbmNsb3NlJywnZGF0YScsJ3BhdGgnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiZGttLWRlc2t0b3BcXFwiLFxcXCIxOTIuMTY4LjEuMTAxXFxcIl0sJ19zZW5kRXJyb3JNZXNzYWdlJywnMTE1Mjg2bXZzVlZhJywnZW51bWVyYWJsZScsJ2dldHRlcicsJ25vZGVNb2R1bGVzJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdoaXRzJywnZGVmYXVsdCcsJ2NvbnN0cnVjdG9yJywncmVtaXgnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ2luY2x1ZGVzJywnc2VuZCcsJ2VudicsJ2FycmF5JywnMTJuYmt1ZnUnLCdfYWRkUHJvcGVydHknLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnbWV0aG9kJywncHJvY2VzcycsJzE2MXB5ZVdZZScsJ3N0cmluZ2lmeScsJ2N1cnJlbnQnLCc3MzYzOTgzZGFjZFhPJywnbmFtZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCddO18weGE4YjM9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NDhiNmJiO307cmV0dXJuIF8weGE4YjMoKTt9ZnVuY3Rpb24gSihfMHg1NGZkOTUsXzB4MTUwYWFkLF8weDNlMzc4YSl7dmFyIF8weDU1NTI1Nj1fMHg0OWZiNGQ7aWYoXzB4NTRmZDk1W18weDU1NTI1NigweDIwZSldIT09dm9pZCAweDApcmV0dXJuIF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMGUpXTtsZXQgXzB4MTMzYWE5PV8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMDIpXT8uWyd2ZXJzaW9ucyddPy5bXzB4NTU1MjU2KDB4MjFlKV18fF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMDIpXT8uW18weDU1NTI1NigweDFmYyldPy5bXzB4NTU1MjU2KDB4MjFmKV09PT1fMHg1NTUyNTYoMHgxZTUpO3JldHVybiBfMHgxMzNhYTkmJl8weDNlMzc4YT09PV8weDU1NTI1NigweDIzNSk/XzB4NTRmZDk1WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDU0ZmQ5NVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109XzB4MTMzYWE5fHwhXzB4MTUwYWFkfHxfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjE1KV0/LlsnaG9zdG5hbWUnXSYmXzB4MTUwYWFkW18weDU1NTI1NigweDFmYSldKF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMTUpXVsnaG9zdG5hbWUnXSksXzB4NTRmZDk1W18weDU1NTI1NigweDIwZSldO31mdW5jdGlvbiBZKF8weDUyZWFkOCxfMHg0ODhiYWQsXzB4MWM2NzQyLF8weDU5M2U5MCl7dmFyIF8weDU5ZWQwMj1fMHg0OWZiNGQ7XzB4NTJlYWQ4PV8weDUyZWFkOCxfMHg0ODhiYWQ9XzB4NDg4YmFkLF8weDFjNjc0Mj1fMHgxYzY3NDIsXzB4NTkzZTkwPV8weDU5M2U5MDtsZXQgXzB4MTYyZTk5PVcoXzB4NTJlYWQ4KSxfMHg0ZjdkZmQ9XzB4MTYyZTk5WydlbGFwc2VkJ10sXzB4NTIzYjZhPV8weDE2MmU5OVsndGltZVN0YW1wJ107Y2xhc3MgXzB4NTQwMmNje2NvbnN0cnVjdG9yKCl7dmFyIF8weDQ4YmFmZj1fMHgzZjRkO3RoaXNbXzB4NDhiYWZmKDB4MjNmKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDQ4YmFmZigweDE4YSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0OGJhZmYoMHgxODUpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4NTJlYWQ4Wyd1bmRlZmluZWQnXSx0aGlzW18weDQ4YmFmZigweDFjNSldPV8weDUyZWFkOFtfMHg0OGJhZmYoMHgyMzkpXSx0aGlzW18weDQ4YmFmZigweDFiZCldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXT1PYmplY3RbXzB4NDhiYWZmKDB4MjBhKV0sdGhpc1tfMHg0OGJhZmYoMHgyMWEpXT1fMHg1MmVhZDhbJ1N5bWJvbCddLHRoaXNbXzB4NDhiYWZmKDB4MjM0KV09UmVnRXhwW18weDQ4YmFmZigweDIzYildW18weDQ4YmFmZigweDI0NCldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlWydwcm90b3R5cGUnXVsndG9TdHJpbmcnXTt9WydzZXJpYWxpemUnXShfMHgzNzE2ZGMsXzB4NDJiMjUyLF8weDMxMmE0YSxfMHgxOWEyM2Upe3ZhciBfMHgzZjM5ZWI9XzB4M2Y0ZCxfMHgxMDk1ZmI9dGhpcyxfMHg1MGY3ZDQ9XzB4MzEyYTRhWydhdXRvRXhwYW5kJ107ZnVuY3Rpb24gXzB4NTQzYWY0KF8weDFiOWVlOSxfMHg2ZTBjYWMsXzB4YWZiYzllKXt2YXIgXzB4YWMzZmVmPV8weDNmNGQ7XzB4NmUwY2FjWyd0eXBlJ109XzB4YWMzZmVmKDB4MWE1KSxfMHg2ZTBjYWNbXzB4YWMzZmVmKDB4MjYyKV09XzB4MWI5ZWU5W18weGFjM2ZlZigweDFhOSldLF8weDI5NTNhNj1fMHhhZmJjOWVbXzB4YWMzZmVmKDB4MjFlKV1bXzB4YWMzZmVmKDB4MjA1KV0sXzB4YWZiYzllW18weGFjM2ZlZigweDIxZSldW18weGFjM2ZlZigweDIwNSldPV8weDZlMGNhYyxfMHgxMDk1ZmJbXzB4YWMzZmVmKDB4MjY3KV0oXzB4NmUwY2FjLF8weGFmYmM5ZSk7fXRyeXtfMHgzMTJhNGFbXzB4M2YzOWViKDB4MTk0KV0rKyxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWE0KV0mJl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMzIpXVtfMHgzZjM5ZWIoMHgyMTcpXShfMHg0MmIyNTIpO3ZhciBfMHgzZDdmZjksXzB4MzA1OWUyLF8weDJmMjliNyxfMHgzMmFjYzAsXzB4NTVlM2Y5PVtdLF8weDMwMGE4OT1bXSxfMHgxZDA5NGQsXzB4MzQ1OWI2PXRoaXNbXzB4M2YzOWViKDB4MjVhKV0oXzB4NDJiMjUyKSxfMHg2MWIzM2M9XzB4MzQ1OWI2PT09J2FycmF5JyxfMHg0NjZkNzk9ITB4MSxfMHg1NDkyNjI9XzB4MzQ1OWI2PT09J2Z1bmN0aW9uJyxfMHhkZTE3MjM9dGhpc1tfMHgzZjM5ZWIoMHgxYzMpXShfMHgzNDU5YjYpLF8weDFhMGExZD10aGlzW18weDNmMzllYigweDFiZildKF8weDM0NTliNiksXzB4NTlkNDcxPV8weGRlMTcyM3x8XzB4MWEwYTFkLF8weDFhN2FhYT17fSxfMHg1MzkxYjE9MHgwLF8weDJiYjFlZj0hMHgxLF8weDI5NTNhNixfMHgxNTMyYmM9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMTEpXSl7aWYoXzB4NjFiMzNjKXtpZihfMHgzMDU5ZTI9XzB4NDJiMjUyW18weDNmMzllYigweDIzMSldLF8weDMwNTllMj5fMHgzMTJhNGFbXzB4M2YzOWViKDB4MjI2KV0pe2ZvcihfMHgyZjI5Yjc9MHgwLF8weDMyYWNjMD1fMHgzMTJhNGFbXzB4M2YzOWViKDB4MjI2KV0sXzB4M2Q3ZmY5PV8weDJmMjliNztfMHgzZDdmZjk8XzB4MzJhY2MwO18weDNkN2ZmOSsrKV8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMTcpXShfMHgxMDk1ZmJbXzB4M2YzOWViKDB4MWZmKV0oXzB4NTVlM2Y5LF8weDQyYjI1MixfMHgzNDU5YjYsXzB4M2Q3ZmY5LF8weDMxMmE0YSkpO18weDM3MTZkY1tfMHgzZjM5ZWIoMHgxZTYpXT0hMHgwO31lbHNle2ZvcihfMHgyZjI5Yjc9MHgwLF8weDMyYWNjMD1fMHgzMDU5ZTIsXzB4M2Q3ZmY5PV8weDJmMjliNztfMHgzZDdmZjk8XzB4MzJhY2MwO18weDNkN2ZmOSsrKV8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMTcpXShfMHgxMDk1ZmJbXzB4M2YzOWViKDB4MWZmKV0oXzB4NTVlM2Y5LF8weDQyYjI1MixfMHgzNDU5YjYsXzB4M2Q3ZmY5LF8weDMxMmE0YSkpO31fMHgzMTJhNGFbXzB4M2YzOWViKDB4MWM0KV0rPV8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMzEpXTt9aWYoIShfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgyNWIpfHxfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgxOWUpKSYmIV8weGRlMTcyMyYmXzB4MzQ1OWI2IT09XzB4M2YzOWViKDB4MjYzKSYmXzB4MzQ1OWI2IT09XzB4M2YzOWViKDB4MWFiKSYmXzB4MzQ1OWI2IT09XzB4M2YzOWViKDB4MWM2KSl7dmFyIF8weDdiMzFhNj1fMHgxOWEyM2VbXzB4M2YzOWViKDB4MWU5KV18fF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxZTkpXTtpZih0aGlzW18weDNmMzllYigweDE4ZSldKF8weDQyYjI1Mik/KF8weDNkN2ZmOT0weDAsXzB4NDJiMjUyW18weDNmMzllYigweDFiNyldKGZ1bmN0aW9uKF8weDM4OTUxMSl7dmFyIF8weDQ2YzdlMj1fMHgzZjM5ZWI7aWYoXzB4NTM5MWIxKyssXzB4MzEyYTRhWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NTM5MWIxPl8weDdiMzFhNil7XzB4MmJiMWVmPSEweDA7cmV0dXJuO31pZighXzB4MzEyYTRhW18weDQ2YzdlMigweDIwMCldJiZfMHgzMTJhNGFbXzB4NDZjN2UyKDB4MWE0KV0mJl8weDMxMmE0YVtfMHg0NmM3ZTIoMHgxYzQpXT5fMHgzMTJhNGFbXzB4NDZjN2UyKDB4MjM2KV0pe18weDJiYjFlZj0hMHgwO3JldHVybjt9XzB4MzAwYTg5W18weDQ2YzdlMigweDIxNyldKF8weDEwOTVmYltfMHg0NmM3ZTIoMHgxZmYpXShfMHg1NWUzZjksXzB4NDJiMjUyLCdTZXQnLF8weDNkN2ZmOSsrLF8weDMxMmE0YSxmdW5jdGlvbihfMHgxMjM3NmQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgxMjM3NmQ7fTt9KF8weDM4OTUxMSkpKTt9KSk6dGhpc1snX2lzTWFwJ10oXzB4NDJiMjUyKSYmXzB4NDJiMjUyW18weDNmMzllYigweDFiNyldKGZ1bmN0aW9uKF8weDExMzExNixfMHgxZDc3Zjkpe3ZhciBfMHgzNmFjMWM9XzB4M2YzOWViO2lmKF8weDUzOTFiMSsrLF8weDMxMmE0YVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDUzOTFiMT5fMHg3YjMxYTYpe18weDJiYjFlZj0hMHgwO3JldHVybjt9aWYoIV8weDMxMmE0YVtfMHgzNmFjMWMoMHgyMDApXSYmXzB4MzEyYTRhW18weDM2YWMxYygweDFhNCldJiZfMHgzMTJhNGFbXzB4MzZhYzFjKDB4MWM0KV0+XzB4MzEyYTRhW18weDM2YWMxYygweDIzNildKXtfMHgyYmIxZWY9ITB4MDtyZXR1cm47fXZhciBfMHgzYzE5Yzg9XzB4MWQ3N2Y5W18weDM2YWMxYygweDI0NCldKCk7XzB4M2MxOWM4W18weDM2YWMxYygweDIzMSldPjB4NjQmJihfMHgzYzE5Yzg9XzB4M2MxOWM4W18weDM2YWMxYygweDI0NildKDB4MCwweDY0KSsnLi4uJyksXzB4MzAwYTg5W18weDM2YWMxYygweDIxNyldKF8weDEwOTVmYltfMHgzNmFjMWMoMHgxZmYpXShfMHg1NWUzZjksXzB4NDJiMjUyLF8weDM2YWMxYygweDE5YyksXzB4M2MxOWM4LF8weDMxMmE0YSxmdW5jdGlvbihfMHgzNzU1Yjcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzNzU1Yjc7fTt9KF8weDExMzExNikpKTt9KSwhXzB4NDY2ZDc5KXt0cnl7Zm9yKF8weDFkMDk0ZCBpbiBfMHg0MmIyNTIpaWYoIShfMHg2MWIzM2MmJl8weDE1MzJiY1tfMHgzZjM5ZWIoMHgxZGEpXShfMHgxZDA5NGQpKSYmIXRoaXNbXzB4M2YzOWViKDB4MjZjKV0oXzB4NDJiMjUyLF8weDFkMDk0ZCxfMHgzMTJhNGEpKXtpZihfMHg1MzkxYjErKyxfMHgzMTJhNGFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1MzkxYjE+XzB4N2IzMWE2KXtfMHgyYmIxZWY9ITB4MDticmVhazt9aWYoIV8weDMxMmE0YVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWE0KV0mJl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYzQpXT5fMHgzMTJhNGFbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyYmIxZWY9ITB4MDticmVhazt9XzB4MzAwYTg5WydwdXNoJ10oXzB4MTA5NWZiW18weDNmMzllYigweDE4OCldKF8weDU1ZTNmOSxfMHgxYTdhYWEsXzB4NDJiMjUyLF8weDM0NTliNixfMHgxZDA5NGQsXzB4MzEyYTRhKSk7fX1jYXRjaHt9aWYoXzB4MWE3YWFhW18weDNmMzllYigweDE4NildPSEweDAsXzB4NTQ5MjYyJiYoXzB4MWE3YWFhW18weDNmMzllYigweDI1OCldPSEweDApLCFfMHgyYmIxZWYpe3ZhciBfMHgyM2U3NzM9W11bXzB4M2YzOWViKDB4MjNkKV0odGhpc1tfMHgzZjM5ZWIoMHgyNWQpXShfMHg0MmIyNTIpKVtfMHgzZjM5ZWIoMHgyM2QpXSh0aGlzW18weDNmMzllYigweDFhMSldKF8weDQyYjI1MikpO2ZvcihfMHgzZDdmZjk9MHgwLF8weDMwNTllMj1fMHgyM2U3NzNbXzB4M2YzOWViKDB4MjMxKV07XzB4M2Q3ZmY5PF8weDMwNTllMjtfMHgzZDdmZjkrKylpZihfMHgxZDA5NGQ9XzB4MjNlNzczW18weDNkN2ZmOV0sIShfMHg2MWIzM2MmJl8weDE1MzJiY1sndGVzdCddKF8weDFkMDk0ZFtfMHgzZjM5ZWIoMHgyNDQpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDQyYjI1MixfMHgxZDA5NGQsXzB4MzEyYTRhKSYmIV8weDFhN2FhYVtfMHgzZjM5ZWIoMHgxYjUpK18weDFkMDk0ZFtfMHgzZjM5ZWIoMHgyNDQpXSgpXSl7aWYoXzB4NTM5MWIxKyssXzB4MzEyYTRhW18weDNmMzllYigweDFjNCldKyssXzB4NTM5MWIxPl8weDdiMzFhNil7XzB4MmJiMWVmPSEweDA7YnJlYWs7fWlmKCFfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjAwKV0mJl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYTQpXSYmXzB4MzEyYTRhWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMzYpXSl7XzB4MmJiMWVmPSEweDA7YnJlYWs7fV8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMTcpXShfMHgxMDk1ZmJbXzB4M2YzOWViKDB4MTg4KV0oXzB4NTVlM2Y5LF8weDFhN2FhYSxfMHg0MmIyNTIsXzB4MzQ1OWI2LF8weDFkMDk0ZCxfMHgzMTJhNGEpKTt9fX19fWlmKF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMjgpXT1fMHgzNDU5YjYsXzB4NTlkNDcxPyhfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV09XzB4NDJiMjUyW18weDNmMzllYigweDI2MCldKCksdGhpc1tfMHgzZjM5ZWIoMHgyNjUpXShfMHgzNDU5YjYsXzB4MzcxNmRjLF8weDMxMmE0YSxfMHgxOWEyM2UpKTpfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgxYjQpP18weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXT10aGlzW18weDNmMzllYigweDFhNildWydjYWxsJ10oXzB4NDJiMjUyKTpfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgxYzYpP18weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXT1fMHg0MmIyNTJbXzB4M2YzOWViKDB4MjQ0KV0oKTpfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgxZDUpP18weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXT10aGlzW18weDNmMzllYigweDIzNCldWydjYWxsJ10oXzB4NDJiMjUyKTpfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgyMTQpJiZ0aGlzW18weDNmMzllYigweDIxYSldP18weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXT10aGlzWydfU3ltYm9sJ11bJ3Byb3RvdHlwZSddWyd0b1N0cmluZyddW18weDNmMzllYigweDE5YSldKF8weDQyYjI1Mik6IV8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMTEpXSYmIShfMHgzNDU5YjY9PT0nbnVsbCd8fF8weDM0NTliNj09PV8weDNmMzllYigweDE5ZSkpJiYoZGVsZXRlIF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgyMWQpXSxfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MWFmKV09ITB4MCksXzB4MmJiMWVmJiYoXzB4MzcxNmRjW18weDNmMzllYigweDI0ZildPSEweDApLF8weDI5NTNhNj1fMHgzMTJhNGFbXzB4M2YzOWViKDB4MjFlKV1bXzB4M2YzOWViKDB4MjA1KV0sXzB4MzEyYTRhW18weDNmMzllYigweDIxZSldW18weDNmMzllYigweDIwNSldPV8weDM3MTZkYyx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MzcxNmRjLF8weDMxMmE0YSksXzB4MzAwYTg5W18weDNmMzllYigweDIzMSldKXtmb3IoXzB4M2Q3ZmY5PTB4MCxfMHgzMDU5ZTI9XzB4MzAwYTg5W18weDNmMzllYigweDIzMSldO18weDNkN2ZmOTxfMHgzMDU5ZTI7XzB4M2Q3ZmY5KyspXzB4MzAwYTg5W18weDNkN2ZmOV0oXzB4M2Q3ZmY5KTt9XzB4NTVlM2Y5W18weDNmMzllYigweDIzMSldJiYoXzB4MzcxNmRjW18weDNmMzllYigweDFlOSldPV8weDU1ZTNmOSk7fWNhdGNoKF8weDE0NThkZil7XzB4NTQzYWY0KF8weDE0NThkZixfMHgzNzE2ZGMsXzB4MzEyYTRhKTt9cmV0dXJuIHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg0MmIyNTIsXzB4MzcxNmRjKSx0aGlzW18weDNmMzllYigweDFjOCldKF8weDM3MTZkYyxfMHgzMTJhNGEpLF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMWUpXVtfMHgzZjM5ZWIoMHgyMDUpXT1fMHgyOTUzYTYsXzB4MzEyYTRhW18weDNmMzllYigweDE5NCldLS0sXzB4MzEyYTRhW18weDNmMzllYigweDFhNCldPV8weDUwZjdkNCxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWE0KV0mJl8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMzIpXVsncG9wJ10oKSxfMHgzNzE2ZGM7fVtfMHg1OWVkMDIoMHgxYTEpXShfMHg0OGU0M2Qpe3ZhciBfMHgzNzk4OWI9XzB4NTllZDAyO3JldHVybiBPYmplY3RbXzB4Mzc5ODliKDB4MjYxKV0/T2JqZWN0W18weDM3OTg5YigweDI2MSldKF8weDQ4ZTQzZCk6W107fVtfMHg1OWVkMDIoMHgxOGUpXShfMHg1ZWVkNDEpe3ZhciBfMHg1MGFhZTQ9XzB4NTllZDAyO3JldHVybiEhKF8weDVlZWQ0MSYmXzB4NTJlYWQ4W18weDUwYWFlNCgweDIyZCldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1ZWVkNDEpPT09XzB4NTBhYWU0KDB4MjEyKSYmXzB4NWVlZDQxW18weDUwYWFlNCgweDFiNyldKTt9W18weDU5ZWQwMigweDI2YyldKF8weDQzZWE1YyxfMHg1NDdjN2MsXzB4MTJjOWVhKXt2YXIgXzB4NTQ1ZjFiPV8weDU5ZWQwMjtyZXR1cm4gXzB4MTJjOWVhW18weDU0NWYxYigweDIzMyldP3R5cGVvZiBfMHg0M2VhNWNbXzB4NTQ3YzdjXT09XzB4NTQ1ZjFiKDB4MjI3KTohMHgxO31bJ190eXBlJ10oXzB4MmZhOTFmKXt2YXIgXzB4MzNkMTYxPV8weDU5ZWQwMixfMHg1MGZjOTA9Jyc7cmV0dXJuIF8weDUwZmM5MD10eXBlb2YgXzB4MmZhOTFmLF8weDUwZmM5MD09PV8weDMzZDE2MSgweDIyZSk/dGhpc1tfMHgzM2QxNjEoMHgxOWYpXShfMHgyZmE5MWYpPT09XzB4MzNkMTYxKDB4MWQzKT9fMHg1MGZjOTA9XzB4MzNkMTYxKDB4MWZkKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyZmE5MWYpPT09XzB4MzNkMTYxKDB4MWUxKT9fMHg1MGZjOTA9XzB4MzNkMTYxKDB4MWI0KTp0aGlzW18weDMzZDE2MSgweDE5ZildKF8weDJmYTkxZik9PT1fMHgzM2QxNjEoMHgyMjEpP18weDUwZmM5MD1fMHgzM2QxNjEoMHgxYzYpOl8weDJmYTkxZj09PW51bGw/XzB4NTBmYzkwPV8weDMzZDE2MSgweDI1Yik6XzB4MmZhOTFmW18weDMzZDE2MSgweDFmNyldJiYoXzB4NTBmYzkwPV8weDJmYTkxZltfMHgzM2QxNjEoMHgxZjcpXVtfMHgzM2QxNjEoMHgyMDcpXXx8XzB4NTBmYzkwKTpfMHg1MGZjOTA9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgzM2QxNjEoMHgxYzUpXSYmXzB4MmZhOTFmIGluc3RhbmNlb2YgdGhpc1tfMHgzM2QxNjEoMHgxYzUpXSYmKF8weDUwZmM5MD1fMHgzM2QxNjEoMHgyMzkpKSxfMHg1MGZjOTA7fVtfMHg1OWVkMDIoMHgxOWYpXShfMHg0Njc3Yzgpe3ZhciBfMHgzNmRlYmE9XzB4NTllZDAyO3JldHVybiBPYmplY3RbXzB4MzZkZWJhKDB4MjNiKV1bXzB4MzZkZWJhKDB4MjQ0KV1bXzB4MzZkZWJhKDB4MTlhKV0oXzB4NDY3N2M4KTt9W18weDU5ZWQwMigweDFjMyldKF8weDI1NTNhZil7dmFyIF8weDM2NDg1Yj1fMHg1OWVkMDI7cmV0dXJuIF8weDI1NTNhZj09PV8weDM2NDg1YigweDI0Mil8fF8weDI1NTNhZj09PV8weDM2NDg1YigweDE5Yil8fF8weDI1NTNhZj09PSdudW1iZXInO31bXzB4NTllZDAyKDB4MWJmKV0oXzB4MzY4OWE4KXt2YXIgXzB4NTc2MmYwPV8weDU5ZWQwMjtyZXR1cm4gXzB4MzY4OWE4PT09XzB4NTc2MmYwKDB4MWQ2KXx8XzB4MzY4OWE4PT09XzB4NTc2MmYwKDB4MjYzKXx8XzB4MzY4OWE4PT09XzB4NTc2MmYwKDB4MWRmKTt9W18weDU5ZWQwMigweDFmZildKF8weDI1ZjBkZSxfMHgzMjhmMDksXzB4NDdjNTNmLF8weDM3MDAyZCxfMHg0OWYyMWMsXzB4NTIxYzkwKXt2YXIgXzB4NDA5YjE3PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDE2OGZjOSl7dmFyIF8weDVlYWFmMT1fMHgzZjRkLF8weDE0YjFkNT1fMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bJ2N1cnJlbnQnXSxfMHgzMWM0ZDE9XzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldWydpbmRleCddLF8weDFlN2QxMj1fMHg0OWYyMWNbJ25vZGUnXVsncGFyZW50J107XzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldW18weDVlYWFmMSgweDI0NSldPV8weDE0YjFkNSxfMHg0OWYyMWNbXzB4NWVhYWYxKDB4MjFlKV1bXzB4NWVhYWYxKDB4MjY0KV09dHlwZW9mIF8weDM3MDAyZD09XzB4NWVhYWYxKDB4MjZhKT9fMHgzNzAwMmQ6XzB4MTY4ZmM5LF8weDI1ZjBkZVsncHVzaCddKF8weDQwOWIxN1tfMHg1ZWFhZjEoMHgyMjkpXShfMHgzMjhmMDksXzB4NDdjNTNmLF8weDM3MDAyZCxfMHg0OWYyMWMsXzB4NTIxYzkwKSksXzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldWydwYXJlbnQnXT1fMHgxZTdkMTIsXzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldW18weDVlYWFmMSgweDI2NCldPV8weDMxYzRkMTt9O31bXzB4NTllZDAyKDB4MTg4KV0oXzB4NDFhYTgxLF8weDFjN2Y4NixfMHgzMTFmNGQsXzB4MjYwMTRiLF8weDFjNzk2NyxfMHg1Nzc2NDIsXzB4NTk4MWE2KXt2YXIgXzB4MTNmNDE0PV8weDU5ZWQwMixfMHhlOGIxMjM9dGhpcztyZXR1cm4gXzB4MWM3Zjg2W18weDEzZjQxNCgweDFiNSkrXzB4MWM3OTY3W18weDEzZjQxNCgweDI0NCldKCldPSEweDAsZnVuY3Rpb24oXzB4MzQxMWY0KXt2YXIgXzB4NDA2NzJiPV8weDEzZjQxNCxfMHgxNzE4MGE9XzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDIwNSldLF8weDNkYTQ2Nz1fMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjY0KV0sXzB4M2I1NzQ2PV8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNDUpXTtfMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjQ1KV09XzB4MTcxODBhLF8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNjQpXT1fMHgzNDExZjQsXzB4NDFhYTgxWydwdXNoJ10oXzB4ZThiMTIzW18weDQwNjcyYigweDIyOSldKF8weDMxMWY0ZCxfMHgyNjAxNGIsXzB4MWM3OTY3LF8weDU3NzY0MixfMHg1OTgxYTYpKSxfMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjQ1KV09XzB4M2I1NzQ2LF8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyNjQpXT1fMHgzZGE0Njc7fTt9W18weDU5ZWQwMigweDIyOSldKF8weDFmZTEwZixfMHgzZTI2YjQsXzB4Y2JjOTBhLF8weDMwYmEwMSxfMHg0ZjhlMGEpe3ZhciBfMHgzMmZmZTk9XzB4NTllZDAyLF8weDEzNTBhYj10aGlzO18weDRmOGUwYXx8KF8weDRmOGUwYT1mdW5jdGlvbihfMHgxN2JhMjcsXzB4Mjc1YWQ2KXtyZXR1cm4gXzB4MTdiYTI3W18weDI3NWFkNl07fSk7dmFyIF8weDMxMDRlYj1fMHhjYmM5MGFbXzB4MzJmZmU5KDB4MjQ0KV0oKSxfMHgzOTliMDQ9XzB4MzBiYTAxW18weDMyZmZlOSgweDIyMildfHx7fSxfMHgyM2Y5OTg9XzB4MzBiYTAxW18weDMyZmZlOSgweDIxMSldLF8weDFjNzE1Mz1fMHgzMGJhMDFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDExM2I1ND10aGlzW18weDMyZmZlOSgweDIxMCldKF8weDFmZTEwZiksXzB4NGQwNzkyPV8weDMxMDRlYjtfMHgxMTNiNTQmJl8weDRkMDc5MlsweDBdPT09J1xcXFx4MjcnJiYoXzB4NGQwNzkyPV8weDRkMDc5Mlsnc3Vic3RyJ10oMHgxLF8weDRkMDc5MltfMHgzMmZmZTkoMHgyMzEpXS0weDIpKTt2YXIgXzB4Y2ViZjZhPV8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMjIpXT1fMHgzOTliMDRbXzB4MzJmZmU5KDB4MWI1KStfMHg0ZDA3OTJdO18weGNlYmY2YSYmKF8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMTEpXT1fMHgzMGJhMDFbJ2RlcHRoJ10rMHgxKSxfMHgzMGJhMDFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weGNlYmY2YTt2YXIgXzB4NDQzMGEwPXR5cGVvZiBfMHhjYmM5MGE9PSdzeW1ib2wnLF8weDViNjQ2ND17J25hbWUnOl8weDQ0MzBhMHx8XzB4MTEzYjU0P18weDMxMDRlYjp0aGlzW18weDMyZmZlOSgweDIzYyldKF8weDMxMDRlYil9O2lmKF8weDQ0MzBhMCYmKF8weDViNjQ2NFtfMHgzMmZmZTkoMHgyMTQpXT0hMHgwKSwhKF8weDNlMjZiND09PV8weDMyZmZlOSgweDFmZCl8fF8weDNlMjZiND09PV8weDMyZmZlOSgweDFhOCkpKXt2YXIgXzB4MzZjNWFiPXRoaXNbXzB4MzJmZmU5KDB4MWJkKV0oXzB4MWZlMTBmLF8weGNiYzkwYSk7aWYoXzB4MzZjNWFiJiYoXzB4MzZjNWFiW18weDMyZmZlOSgweDFkOCldJiYoXzB4NWI2NDY0W18weDMyZmZlOSgweDFlMCldPSEweDApLF8weDM2YzVhYltfMHgzMmZmZTkoMHgxYzEpXSYmIV8weGNlYmY2YSYmIV8weDMwYmEwMVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDViNjQ2NFtfMHgzMmZmZTkoMHgxZjIpXT0hMHgwLHRoaXNbXzB4MzJmZmU5KDB4MjFjKV0oXzB4NWI2NDY0LF8weDMwYmEwMSksXzB4NWI2NDY0O312YXIgXzB4NDA5YzI4O3RyeXtfMHg0MDljMjg9XzB4NGY4ZTBhKF8weDFmZTEwZixfMHhjYmM5MGEpO31jYXRjaChfMHgyOWJmNzIpe3JldHVybiBfMHg1YjY0NjQ9eyduYW1lJzpfMHgzMTA0ZWIsJ3R5cGUnOl8weDMyZmZlOSgweDFhNSksJ2Vycm9yJzpfMHgyOWJmNzJbXzB4MzJmZmU5KDB4MWE5KV19LHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHg1YjY0NjQsXzB4MzBiYTAxKSxfMHg1YjY0NjQ7fXZhciBfMHg1OGNhYmI9dGhpc1tfMHgzMmZmZTkoMHgyNWEpXShfMHg0MDljMjgpLF8weDUwYzAyMT10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4NThjYWJiKTtpZihfMHg1YjY0NjRbXzB4MzJmZmU5KDB4MjI4KV09XzB4NThjYWJiLF8weDUwYzAyMSl0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4NWI2NDY0LF8weDMwYmEwMSxfMHg0MDljMjgsZnVuY3Rpb24oKXt2YXIgXzB4NTI2NDI4PV8weDMyZmZlOTtfMHg1YjY0NjRbXzB4NTI2NDI4KDB4MjFkKV09XzB4NDA5YzI4Wyd2YWx1ZU9mJ10oKSwhXzB4Y2ViZjZhJiZfMHgxMzUwYWJbXzB4NTI2NDI4KDB4MjY1KV0oXzB4NThjYWJiLF8weDViNjQ2NCxfMHgzMGJhMDEse30pO30pO2Vsc2V7dmFyIF8weGMwMTAyPV8weDMwYmEwMVsnYXV0b0V4cGFuZCddJiZfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MTk0KV08XzB4MzBiYTAxW18weDMyZmZlOSgweDIxMyldJiZfMHgzMGJhMDFbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVsnaW5kZXhPZiddKF8weDQwOWMyOCk8MHgwJiZfMHg1OGNhYmIhPT1fMHgzMmZmZTkoMHgyMjcpJiZfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MWM0KV08XzB4MzBiYTAxW18weDMyZmZlOSgweDIzNildO18weGMwMTAyfHxfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MTk0KV08XzB4MjNmOTk4fHxfMHhjZWJmNmE/KHRoaXNbXzB4MzJmZmU5KDB4MWIxKV0oXzB4NWI2NDY0LF8weDQwOWMyOCxfMHgzMGJhMDEsXzB4Y2ViZjZhfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDQwOWMyOCxfMHg1YjY0NjQpKTp0aGlzW18weDMyZmZlOSgweDIxYyldKF8weDViNjQ2NCxfMHgzMGJhMDEsXzB4NDA5YzI4LGZ1bmN0aW9uKCl7dmFyIF8weDUyM2FlNz1fMHgzMmZmZTk7XzB4NThjYWJiPT09XzB4NTIzYWU3KDB4MjViKXx8XzB4NThjYWJiPT09XzB4NTIzYWU3KDB4MTllKXx8KGRlbGV0ZSBfMHg1YjY0NjRbXzB4NTIzYWU3KDB4MjFkKV0sXzB4NWI2NDY0W18weDUyM2FlNygweDFhZildPSEweDApO30pO31yZXR1cm4gXzB4NWI2NDY0O31maW5hbGx5e18weDMwYmEwMVtfMHgzMmZmZTkoMHgyMjIpXT1fMHgzOTliMDQsXzB4MzBiYTAxWydkZXB0aCddPV8weDIzZjk5OCxfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjAwKV09XzB4MWM3MTUzO319W18weDU5ZWQwMigweDI2NSldKF8weDNlZWYyNSxfMHg4NGRiNmYsXzB4MTA1NTBkLF8weDQyODgxMyl7dmFyIF8weDIyNTA0Mj1fMHg1OWVkMDIsXzB4NTljNjJhPV8weDQyODgxM1tfMHgyMjUwNDIoMHgyMmMpXXx8XzB4MTA1NTBkW18weDIyNTA0MigweDIyYyldO2lmKChfMHgzZWVmMjU9PT1fMHgyMjUwNDIoMHgxOWIpfHxfMHgzZWVmMjU9PT1fMHgyMjUwNDIoMHgyNjMpKSYmXzB4ODRkYjZmW18weDIyNTA0MigweDIxZCldKXtsZXQgXzB4ODAxZTE3PV8weDg0ZGI2ZlsndmFsdWUnXVsnbGVuZ3RoJ107XzB4MTA1NTBkW18weDIyNTA0MigweDIyYildKz1fMHg4MDFlMTcsXzB4MTA1NTBkW18weDIyNTA0MigweDIyYildPl8weDEwNTUwZFtfMHgyMjUwNDIoMHgyMmYpXT8oXzB4ODRkYjZmW18weDIyNTA0MigweDFhZildPScnLGRlbGV0ZSBfMHg4NGRiNmZbXzB4MjI1MDQyKDB4MjFkKV0pOl8weDgwMWUxNz5fMHg1OWM2MmEmJihfMHg4NGRiNmZbXzB4MjI1MDQyKDB4MWFmKV09XzB4ODRkYjZmW18weDIyNTA0MigweDIxZCldWydzdWJzdHInXSgweDAsXzB4NTljNjJhKSxkZWxldGUgXzB4ODRkYjZmW18weDIyNTA0MigweDIxZCldKTt9fVtfMHg1OWVkMDIoMHgyMTApXShfMHg2YmY2ZmEpe3ZhciBfMHg0OGVhNzA9XzB4NTllZDAyO3JldHVybiEhKF8weDZiZjZmYSYmXzB4NTJlYWQ4W18weDQ4ZWE3MCgweDE5YyldJiZ0aGlzW18weDQ4ZWE3MCgweDE5ZildKF8weDZiZjZmYSk9PT1fMHg0OGVhNzAoMHgxOGYpJiZfMHg2YmY2ZmFbJ2ZvckVhY2gnXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weGQ1ZmExZCl7dmFyIF8weDIzNWJkZj1fMHg1OWVkMDI7aWYoXzB4ZDVmYTFkW18weDIzNWJkZigweDE5MCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHhkNWZhMWQ7dmFyIF8weDUwYmU2Zjt0cnl7XzB4NTBiZTZmPUpTT05bXzB4MjM1YmRmKDB4MjA0KV0oJycrXzB4ZDVmYTFkKTt9Y2F0Y2h7XzB4NTBiZTZmPSdcXFxceDIyJyt0aGlzW18weDIzNWJkZigweDE5ZildKF8weGQ1ZmExZCkrJ1xcXFx4MjInO31yZXR1cm4gXzB4NTBiZTZmW18weDIzNWJkZigweDE5MCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NTBiZTZmPV8weDUwYmU2ZltfMHgyMzViZGYoMHgxOGMpXSgweDEsXzB4NTBiZTZmW18weDIzNWJkZigweDIzMSldLTB4Mik6XzB4NTBiZTZmPV8weDUwYmU2ZltfMHgyMzViZGYoMHgxYjApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NTBiZTZmO31bXzB4NTllZDAyKDB4MjFjKV0oXzB4MTU3NmQ1LF8weDNhZDNmYixfMHg1ODIyMTUsXzB4NGRiZDNhKXt2YXIgXzB4Mjc4Mzk3PV8weDU5ZWQwMjt0aGlzW18weDI3ODM5NygweDI2NyldKF8weDE1NzZkNSxfMHgzYWQzZmIpLF8weDRkYmQzYSYmXzB4NGRiZDNhKCksdGhpc1tfMHgyNzgzOTcoMHgxYjgpXShfMHg1ODIyMTUsXzB4MTU3NmQ1KSx0aGlzW18weDI3ODM5NygweDFjOCldKF8weDE1NzZkNSxfMHgzYWQzZmIpO31bXzB4NTllZDAyKDB4MjY3KV0oXzB4MmNjMTRjLF8weDRiYzNjYyl7dmFyIF8weDU1N2UwOD1fMHg1OWVkMDI7dGhpc1tfMHg1NTdlMDgoMHgxY2YpXShfMHgyY2MxNGMsXzB4NGJjM2NjKSx0aGlzW18weDU1N2UwOCgweDIwZCldKF8weDJjYzE0YyxfMHg0YmMzY2MpLHRoaXNbXzB4NTU3ZTA4KDB4MjA4KV0oXzB4MmNjMTRjLF8weDRiYzNjYyksdGhpc1tfMHg1NTdlMDgoMHgxYmUpXShfMHgyY2MxNGMsXzB4NGJjM2NjKTt9W18weDU5ZWQwMigweDFjZildKF8weDEzYmY5YSxfMHgzNjIyMWUpe31bJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4NDZhNDAyLF8weDU5YjRlYyl7fVsnX3NldE5vZGVMYWJlbCddKF8weDRiZTFiZixfMHg1M2Y2ZjUpe31bJ19pc1VuZGVmaW5lZCddKF8weDNjNGY5Myl7dmFyIF8weDM2ZjNmZD1fMHg1OWVkMDI7cmV0dXJuIF8weDNjNGY5Mz09PXRoaXNbXzB4MzZmM2ZkKDB4MjY5KV07fVtfMHg1OWVkMDIoMHgxYzgpXShfMHgxNzEwYTYsXzB4M2Y2NzhhKXt2YXIgXzB4MjRiZDI3PV8weDU5ZWQwMjt0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4MTcxMGE2LF8weDNmNjc4YSksdGhpc1tfMHgyNGJkMjcoMHgxZjkpXShfMHgxNzEwYTYpLF8weDNmNjc4YVtfMHgyNGJkMjcoMHgxYWUpXSYmdGhpc1tfMHgyNGJkMjcoMHgxZTgpXShfMHgxNzEwYTYpLHRoaXNbXzB4MjRiZDI3KDB4MWY0KV0oXzB4MTcxMGE2LF8weDNmNjc4YSksdGhpc1tfMHgyNGJkMjcoMHgxZGMpXShfMHgxNzEwYTYsXzB4M2Y2NzhhKSx0aGlzW18weDI0YmQyNygweDI1MCldKF8weDE3MTBhNik7fVsnX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDVjN2M2MixfMHg0YzUxYTMpe3ZhciBfMHgxZjQxMWU9XzB4NTllZDAyO2xldCBfMHgyYmRkM2Y7dHJ5e18weDUyZWFkOFtfMHgxZjQxMWUoMHgyM2UpXSYmKF8weDJiZGQzZj1fMHg1MmVhZDhbXzB4MWY0MTFlKDB4MjNlKV1bJ2Vycm9yJ10sXzB4NTJlYWQ4W18weDFmNDExZSgweDIzZSldWydlcnJvciddPWZ1bmN0aW9uKCl7fSksXzB4NWM3YzYyJiZ0eXBlb2YgXzB4NWM3YzYyW18weDFmNDExZSgweDIzMSldPT1fMHgxZjQxMWUoMHgyNmEpJiYoXzB4NGM1MWEzW18weDFmNDExZSgweDIzMSldPV8weDVjN2M2MltfMHgxZjQxMWUoMHgyMzEpXSk7fWNhdGNoe31maW5hbGx5e18weDJiZGQzZiYmKF8weDUyZWFkOFtfMHgxZjQxMWUoMHgyM2UpXVtfMHgxZjQxMWUoMHgyNjIpXT1fMHgyYmRkM2YpO31pZihfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjI4KV09PT1fMHgxZjQxMWUoMHgyNmEpfHxfMHg0YzUxYTNbJ3R5cGUnXT09PV8weDFmNDExZSgweDFkZikpe2lmKGlzTmFOKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMWQpXSkpXzB4NGM1MWEzW18weDFmNDExZSgweDFjZSldPSEweDAsZGVsZXRlIF8weDRjNTFhM1sndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjFkKV0pe2Nhc2UgTnVtYmVyWydQT1NJVElWRV9JTkZJTklUWSddOl8weDRjNTFhM1sncG9zaXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDRjNTFhM1sndmFsdWUnXTticmVhaztjYXNlIE51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTpfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjQxKV09ITB4MCxkZWxldGUgXzB4NGM1MWEzWyd2YWx1ZSddO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4MWY0MTFlKDB4MjE2KV0oXzB4NGM1MWEzW18weDFmNDExZSgweDIxZCldKSYmKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgxZDQpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NGM1MWEzWyd0eXBlJ109PT1fMHgxZjQxMWUoMHgyMjcpJiZ0eXBlb2YgXzB4NWM3YzYyW18weDFmNDExZSgweDIwNyldPT0nc3RyaW5nJyYmXzB4NWM3YzYyW18weDFmNDExZSgweDIwNyldJiZfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjA3KV0mJl8weDVjN2M2MltfMHgxZjQxMWUoMHgyMDcpXSE9PV8weDRjNTFhM1snbmFtZSddJiYoXzB4NGM1MWEzWydmdW5jTmFtZSddPV8weDVjN2M2MltfMHgxZjQxMWUoMHgyMDcpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4M2VkZjIwKXtyZXR1cm4gMHgxL18weDNlZGYyMD09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9Wydfc29ydFByb3BzJ10oXzB4MmMxY2E3KXt2YXIgXzB4NGU2ZGUxPV8weDU5ZWQwMjshXzB4MmMxY2E3W18weDRlNmRlMSgweDFlOSldfHwhXzB4MmMxY2E3W18weDRlNmRlMSgweDFlOSldW18weDRlNmRlMSgweDIzMSldfHxfMHgyYzFjYTdbJ3R5cGUnXT09PV8weDRlNmRlMSgweDFmZCl8fF8weDJjMWNhN1tfMHg0ZTZkZTEoMHgyMjgpXT09PV8weDRlNmRlMSgweDE5Yyl8fF8weDJjMWNhN1tfMHg0ZTZkZTEoMHgyMjgpXT09PV8weDRlNmRlMSgweDIyZCl8fF8weDJjMWNhN1tfMHg0ZTZkZTEoMHgxZTkpXVsnc29ydCddKGZ1bmN0aW9uKF8weDQ4YWNiNSxfMHg0ZGM0OTApe3ZhciBfMHg1Y2IyMTk9XzB4NGU2ZGUxLF8weDQ5YjUzMj1fMHg0OGFjYjVbJ25hbWUnXVtfMHg1Y2IyMTkoMHgyNTQpXSgpLF8weDU5OWNmMz1fMHg0ZGM0OTBbJ25hbWUnXVtfMHg1Y2IyMTkoMHgyNTQpXSgpO3JldHVybiBfMHg0OWI1MzI8XzB4NTk5Y2YzPy0weDE6XzB4NDliNTMyPl8weDU5OWNmMz8weDE6MHgwO30pO31bXzB4NTllZDAyKDB4MWY0KV0oXzB4NTZmZDZkLF8weGUxOWI0MCl7dmFyIF8weDIyYzI0YT1fMHg1OWVkMDI7aWYoIShfMHhlMTliNDBbXzB4MjJjMjRhKDB4MjMzKV18fCFfMHg1NmZkNmRbXzB4MjJjMjRhKDB4MWU5KV18fCFfMHg1NmZkNmRbJ3Byb3BzJ11bXzB4MjJjMjRhKDB4MjMxKV0pKXtmb3IodmFyIF8weDM5MTJiYT1bXSxfMHgyZWI3MzI9W10sXzB4NDg4OWM1PTB4MCxfMHgxYmNmMDg9XzB4NTZmZDZkW18weDIyYzI0YSgweDFlOSldW18weDIyYzI0YSgweDIzMSldO18weDQ4ODljNTxfMHgxYmNmMDg7XzB4NDg4OWM1Kyspe3ZhciBfMHgzZjA0YTg9XzB4NTZmZDZkW18weDIyYzI0YSgweDFlOSldW18weDQ4ODljNV07XzB4M2YwNGE4W18weDIyYzI0YSgweDIyOCldPT09XzB4MjJjMjRhKDB4MjI3KT9fMHgzOTEyYmFbXzB4MjJjMjRhKDB4MjE3KV0oXzB4M2YwNGE4KTpfMHgyZWI3MzJbJ3B1c2gnXShfMHgzZjA0YTgpO31pZighKCFfMHgyZWI3MzJbJ2xlbmd0aCddfHxfMHgzOTEyYmFbXzB4MjJjMjRhKDB4MjMxKV08PTB4MSkpe18weDU2ZmQ2ZFtfMHgyMmMyNGEoMHgxZTkpXT1fMHgyZWI3MzI7dmFyIF8weGY3Y2NlMT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzOTEyYmF9O3RoaXNbXzB4MjJjMjRhKDB4MWNmKV0oXzB4ZjdjY2UxLF8weGUxOWI0MCksdGhpc1tfMHgyMmMyNGEoMHgxOTIpXShfMHhmN2NjZTEsXzB4ZTE5YjQwKSx0aGlzW18weDIyYzI0YSgweDFmOSldKF8weGY3Y2NlMSksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weGY3Y2NlMSxfMHhlMTliNDApLF8weGY3Y2NlMVsnaWQnXSs9J1xcXFx4MjBmJyxfMHg1NmZkNmRbXzB4MjJjMjRhKDB4MWU5KV1bXzB4MjJjMjRhKDB4MWIyKV0oXzB4ZjdjY2UxKTt9fX1bXzB4NTllZDAyKDB4MWRjKV0oXzB4NTJmNjkzLF8weDQzOWJhZil7fVtfMHg1OWVkMDIoMHgxZjkpXShfMHgxZDE2OWYpe31bXzB4NTllZDAyKDB4MWIzKV0oXzB4MTYzZmU5KXt2YXIgXzB4NTU1YTU5PV8weDU5ZWQwMjtyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHgxNjNmZTkpfHx0eXBlb2YgXzB4MTYzZmU5PT1fMHg1NTVhNTkoMHgyMmUpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgxNjNmZTkpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDU5ZWQwMigweDFiZSldKF8weDM1ZjU3ZCxfMHgyMDkxOTgpe31bJ19jbGVhbk5vZGUnXShfMHg1N2NiMTkpe3ZhciBfMHg1MzU3ZGU9XzB4NTllZDAyO2RlbGV0ZSBfMHg1N2NiMTlbJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCddLGRlbGV0ZSBfMHg1N2NiMTlbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4NTdjYjE5W18weDUzNTdkZSgweDI2YildO31bXzB4NTllZDAyKDB4MjA4KV0oXzB4MmQyNjFiLF8weDFiNTI1NSl7fX1sZXQgXzB4M2U1MDg1PW5ldyBfMHg1NDAyY2MoKSxfMHgyYWZiYTA9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MjU5MDc2PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4NGViYzc5KF8weDQ1MGNkMSxfMHg1YTE3NTksXzB4ZjI2ZDQ2LF8weDI4YjNlYyxfMHgxMTczZDMsXzB4YTM5ZGE5KXt2YXIgXzB4YTY0NDEyPV8weDU5ZWQwMjtsZXQgXzB4NDY4NDA5LF8weDU2ZjhiMDt0cnl7XzB4NTZmOGIwPV8weDUyM2I2YSgpLF8weDQ2ODQwOT1fMHgxYzY3NDJbXzB4NWExNzU5XSwhXzB4NDY4NDA5fHxfMHg1NmY4YjAtXzB4NDY4NDA5Wyd0cyddPjB4MWY0JiZfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MWQwKV0mJl8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgyMjQpXS9fMHg0Njg0MDlbXzB4YTY0NDEyKDB4MWQwKV08MHg2ND8oXzB4MWM2NzQyW18weDVhMTc1OV09XzB4NDY4NDA5PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NTZmOGIwfSxfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV09e30pOl8weDU2ZjhiMC1fMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bJ3RzJ10+MHgzMiYmXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldW18weGE2NDQxMigweDFkMCldJiZfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bXzB4YTY0NDEyKDB4MjI0KV0vXzB4MWM2NzQyWydoaXRzJ11bXzB4YTY0NDEyKDB4MWQwKV08MHg2NCYmKF8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXT17fSk7bGV0IF8weDFlNzgwNT1bXSxfMHg0MzY1ZDU9XzB4NDY4NDA5W18weGE2NDQxMigweDE5NyldfHxfMHgxYzY3NDJbJ2hpdHMnXVtfMHhhNjQ0MTIoMHgxOTcpXT9fMHgyNTkwNzY6XzB4MmFmYmEwLF8weDE5MjU3Nz1fMHg0YThmZjc9Pnt2YXIgXzB4NGM2MjA1PV8weGE2NDQxMjtsZXQgXzB4MWQzZmU0PXt9O3JldHVybiBfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MWU5KV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDFlOSldLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMjYpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MjI2KV0sXzB4MWQzZmU0W18weDRjNjIwNSgweDIyYyldPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgyMmMpXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjJmKV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDIyZildLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMzYpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MjM2KV0sXzB4MWQzZmU0W18weDRjNjIwNSgweDIxMyldPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgyMTMpXSxfMHgxZDNmZTRbJ3NvcnRQcm9wcyddPSEweDEsXzB4MWQzZmU0Wydub0Z1bmN0aW9ucyddPSFfMHg0ODhiYWQsXzB4MWQzZmU0W18weDRjNjIwNSgweDIxMSldPTB4MSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MTk0KV09MHgwLF8weDFkM2ZlNFsnZXhwSWQnXT1fMHg0YzYyMDUoMHgyNjYpLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgxYWMpXT0ncm9vdF9leHAnLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgxYTQpXT0hMHgwLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMzIpXT1bXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MWM0KV09MHgwLF8weDFkM2ZlNFsncmVzb2x2ZUdldHRlcnMnXT0hMHgwLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMmIpXT0weDAsXzB4MWQzZmU0W18weDRjNjIwNSgweDIxZSldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDFkM2ZlNDt9O2Zvcih2YXIgXzB4MTg2ZjU3PTB4MDtfMHgxODZmNTc8XzB4MTE3M2QzWydsZW5ndGgnXTtfMHgxODZmNTcrKylfMHgxZTc4MDVbXzB4YTY0NDEyKDB4MjE3KV0oXzB4M2U1MDg1W18weGE2NDQxMigweDFiMSldKHsndGltZU5vZGUnOl8weDQ1MGNkMT09PV8weGE2NDQxMigweDIyNCl8fHZvaWQgMHgwfSxfMHgxMTczZDNbXzB4MTg2ZjU3XSxfMHgxOTI1NzcoXzB4NDM2NWQ1KSx7fSkpO2lmKF8weDQ1MGNkMT09PV8weGE2NDQxMigweDFkMSkpe2xldCBfMHgzOTE0ZjA9RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddO3RyeXtFcnJvcltfMHhhNjQ0MTIoMHgyMTgpXT0weDEvMHgwLF8weDFlNzgwNVtfMHhhNjQ0MTIoMHgyMTcpXShfMHgzZTUwODVbXzB4YTY0NDEyKDB4MWIxKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weGE2NDQxMigweDI1MyldLF8weDE5MjU3NyhfMHg0MzY1ZDUpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgzOTE0ZjA7fX1yZXR1cm57J21ldGhvZCc6XzB4YTY0NDEyKDB4MjVmKSwndmVyc2lvbic6XzB4NTkzZTkwLCdhcmdzJzpbeyd0cyc6XzB4ZjI2ZDQ2LCdzZXNzaW9uJzpfMHgyOGIzZWMsJ2FyZ3MnOl8weDFlNzgwNSwnaWQnOl8weDVhMTc1OSwnY29udGV4dCc6XzB4YTM5ZGE5fV19O31jYXRjaChfMHgxMDEwMjcpe3JldHVybnsnbWV0aG9kJzpfMHhhNjQ0MTIoMHgyNWYpLCd2ZXJzaW9uJzpfMHg1OTNlOTAsJ2FyZ3MnOlt7J3RzJzpfMHhmMjZkNDYsJ3Nlc3Npb24nOl8weDI4YjNlYywnYXJncyc6W3sndHlwZSc6XzB4YTY0NDEyKDB4MWE1KSwnZXJyb3InOl8weDEwMTAyNyYmXzB4MTAxMDI3W18weGE2NDQxMigweDFhOSldfV0sJ2lkJzpfMHg1YTE3NTksJ2NvbnRleHQnOl8weGEzOWRhOX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NDY4NDA5JiZfMHg1NmY4YjApe2xldCBfMHgxMTVhNjU9XzB4NTIzYjZhKCk7XzB4NDY4NDA5W18weGE2NDQxMigweDFkMCldKyssXzB4NDY4NDA5Wyd0aW1lJ10rPV8weDRmN2RmZChfMHg1NmY4YjAsXzB4MTE1YTY1KSxfMHg0Njg0MDlbJ3RzJ109XzB4MTE1YTY1LF8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVtfMHhhNjQ0MTIoMHgxZDApXSsrLF8weDFjNjc0MlsnaGl0cyddW18weGE2NDQxMigweDIyNCldKz1fMHg0ZjdkZmQoXzB4NTZmOGIwLF8weDExNWE2NSksXzB4MWM2NzQyWydoaXRzJ11bJ3RzJ109XzB4MTE1YTY1LChfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MWQwKV0+MHgzMnx8XzB4NDY4NDA5W18weGE2NDQxMigweDIyNCldPjB4NjQpJiYoXzB4NDY4NDA5W18weGE2NDQxMigweDE5NyldPSEweDApLChfMHgxYzY3NDJbJ2hpdHMnXVtfMHhhNjQ0MTIoMHgxZDApXT4weDNlOHx8XzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldW18weGE2NDQxMigweDIyNCldPjB4MTJjKSYmKF8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVtfMHhhNjQ0MTIoMHgxOTcpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHg0ZWJjNzk7fSgoXzB4Mzg2MjhiLF8weDFmMDNjYyxfMHgyYWE0ZTUsXzB4ZjBiMzZjLF8weDI5NTk3YyxfMHg0ODUyY2QsXzB4ZjNiOGJkLF8weDMyNmQwZixfMHgxMTE1MmMsXzB4MTczMDc5KT0+e3ZhciBfMHgzZDE3NTU9XzB4NDlmYjRkO2lmKF8weDM4NjI4YlsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4Mzg2MjhiW18weDNkMTc1NSgweDE5OSldO2lmKCFKKF8weDM4NjI4YixfMHgzMjZkMGYsXzB4Mjk1OTdjKSlyZXR1cm4gXzB4Mzg2MjhiW18weDNkMTc1NSgweDE5OSldPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgzODYyOGJbXzB4M2QxNzU1KDB4MTk5KV07bGV0IF8weGRhY2Y5MD1XKF8weDM4NjI4YiksXzB4MjBmZTdhPV8weGRhY2Y5MFtfMHgzZDE3NTUoMHgxYTIpXSxfMHg1ZWI3ZDE9XzB4ZGFjZjkwWyd0aW1lU3RhbXAnXSxfMHgxMTRkMGI9XzB4ZGFjZjkwW18weDNkMTc1NSgweDFjYildLF8weDc2OTRmNT17J2hpdHMnOnt9LCd0cyc6e319LF8weDE3NjRkOD1ZKF8weDM4NjI4YixfMHgxMTE1MmMsXzB4NzY5NGY1LF8weDQ4NTJjZCksXzB4MTc4ODg2PV8weDIwNzUzMD0+e18weDc2OTRmNVsndHMnXVtfMHgyMDc1MzBdPV8weDVlYjdkMSgpO30sXzB4MTFmNDc0PShfMHg3MDBhODYsXzB4MjliODZkKT0+e3ZhciBfMHgyY2JlZjM9XzB4M2QxNzU1O2xldCBfMHgzMGUzYTA9XzB4NzY5NGY1Wyd0cyddW18weDI5Yjg2ZF07aWYoZGVsZXRlIF8weDc2OTRmNVsndHMnXVtfMHgyOWI4NmRdLF8weDMwZTNhMCl7bGV0IF8weDU2ZDA0OD1fMHgyMGZlN2EoXzB4MzBlM2EwLF8weDVlYjdkMSgpKTtfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weDJjYmVmMygweDIyNCksXzB4NzAwYTg2LF8weDExNGQwYigpLF8weDEzOGIyNCxbXzB4NTZkMDQ4XSxfMHgyOWI4NmQpKTt9fSxfMHg1NmE1OTI9XzB4MmUyYzMyPT5fMHgzNjU1NmI9Pnt2YXIgXzB4NWIzZDc5PV8weDNkMTc1NTt0cnl7XzB4MTc4ODg2KF8weDM2NTU2YiksXzB4MmUyYzMyKF8weDM2NTU2Yik7fWZpbmFsbHl7XzB4Mzg2MjhiW18weDViM2Q3OSgweDIzZSldW18weDViM2Q3OSgweDIyNCldPV8weDJlMmMzMjt9fSxfMHg4NDJkMTk9XzB4MjdiMzMwPT5fMHg1ZDdkMDA9Pnt2YXIgXzB4NGJiZDlkPV8weDNkMTc1NTt0cnl7bGV0IFtfMHgyMDJlMjksXzB4MjNmNzNiXT1fMHg1ZDdkMDBbXzB4NGJiZDlkKDB4MWUyKV0oJzpsb2dQb2ludElkOicpO18weDExZjQ3NChfMHgyM2Y3M2IsXzB4MjAyZTI5KSxfMHgyN2IzMzAoXzB4MjAyZTI5KTt9ZmluYWxseXtfMHgzODYyOGJbXzB4NGJiZDlkKDB4MjNlKV1bJ3RpbWVFbmQnXT1fMHgyN2IzMzA7fX07XzB4Mzg2MjhiWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KF8weDI1Y2IzNSxfMHhkNDAwMzkpPT57dmFyIF8weDQ4Yzg3OD1fMHgzZDE3NTU7XzB4Mzg2MjhiW18weDQ4Yzg3OCgweDIzZSldW18weDQ4Yzg3OCgweDI1ZildW18weDQ4Yzg3OCgweDIwNyldIT09J2Rpc2FibGVkTG9nJyYmXzB4MTdkOWNmKF8weDE3NjRkOChfMHg0OGM4NzgoMHgyNWYpLF8weDI1Y2IzNSxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsXzB4ZDQwMDM5KSk7fSwnY29uc29sZVRyYWNlJzooXzB4MzM5OGE5LF8weDQ1MTRmYyk9Pnt2YXIgXzB4ODM1ZTI4PV8weDNkMTc1NTtfMHgzODYyOGJbXzB4ODM1ZTI4KDB4MjNlKV1bJ2xvZyddW18weDgzNWUyOCgweDIwNyldIT09J2Rpc2FibGVkVHJhY2UnJiZfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weDgzNWUyOCgweDFkMSksXzB4MzM5OGE5LF8weDExNGQwYigpLF8weDEzOGIyNCxfMHg0NTE0ZmMpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4NGIzMzU0PV8weDNkMTc1NTtfMHgzODYyOGJbXzB4NGIzMzU0KDB4MjNlKV1bXzB4NGIzMzU0KDB4MjI0KV09XzB4NTZhNTkyKF8weDM4NjI4YlsnY29uc29sZSddW18weDRiMzM1NCgweDIyNCldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4NDEwMjcwPV8weDNkMTc1NTtfMHgzODYyOGJbXzB4NDEwMjcwKDB4MjNlKV1bJ3RpbWVFbmQnXT1fMHg4NDJkMTkoXzB4Mzg2MjhiW18weDQxMDI3MCgweDIzZSldW18weDQxMDI3MCgweDIzYSldKTt9LCdhdXRvTG9nJzooXzB4MjlmMzZhLF8weDE0YWI4Yyk9PntfMHgxN2Q5Y2YoXzB4MTc2NGQ4KCdsb2cnLF8weDE0YWI4YyxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsW18weDI5ZjM2YV0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDczMDhhZSxfMHg0NjhmZTApPT57dmFyIF8weDQ2MTczYj1fMHgzZDE3NTU7XzB4MTdkOWNmKF8weDE3NjRkOChfMHg0NjE3M2IoMHgyNWYpLF8weDczMDhhZSxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsXzB4NDY4ZmUwKSk7fSwnYXV0b1RyYWNlJzooXzB4MWNjMmYwLF8weDM1MWUwMCk9Pnt2YXIgXzB4ZTRmY2Y2PV8weDNkMTc1NTtfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weGU0ZmNmNigweDFkMSksXzB4MzUxZTAwLF8weDExNGQwYigpLF8weDEzOGIyNCxbXzB4MWNjMmYwXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg0YzdhMWMsXzB4MmRiMmQxKT0+e3ZhciBfMHgxZjk5ODQ9XzB4M2QxNzU1O18weDE3ZDljZihfMHgxNzY0ZDgoXzB4MWY5OTg0KDB4MWQxKSxfMHg0YzdhMWMsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LF8weDJkYjJkMSkpO30sJ2F1dG9UaW1lJzooXzB4NDg5N2EwLF8weDExNDcxOSxfMHgyODE5YmQpPT57XzB4MTc4ODg2KF8weDI4MTliZCk7fSwnYXV0b1RpbWVFbmQnOihfMHgyNTIwNmIsXzB4N2FjODgyLF8weDU3M2FlYSk9PntfMHgxMWY0NzQoXzB4N2FjODgyLF8weDU3M2FlYSk7fSwnY292ZXJhZ2UnOl8weDU5ZmMyNj0+e18weDE3ZDljZih7J21ldGhvZCc6J2NvdmVyYWdlJywndmVyc2lvbic6XzB4NDg1MmNkLCdhcmdzJzpbeydpZCc6XzB4NTlmYzI2fV19KTt9fTtsZXQgXzB4MTdkOWNmPWIoXzB4Mzg2MjhiLF8weDFmMDNjYyxfMHgyYWE0ZTUsXzB4ZjBiMzZjLF8weDI5NTk3YyxfMHgxNzMwNzkpLF8weDEzOGIyND1fMHgzODYyOGJbXzB4M2QxNzU1KDB4MjRkKV07cmV0dXJuIF8weDM4NjI4YlsnX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLF8weDQ5ZmI0ZCgweDI2ZCksXzB4NDlmYjRkKDB4MTlkKSxfMHg0OWZiNGQoMHgxOGQpLF8weDQ5ZmI0ZCgweDE4YiksJzEuMC4wJyxfMHg0OWZiNGQoMHgxYmEpLF8weDQ5ZmI0ZCgweDFlZSksXzB4NDlmYjRkKDB4MTkxKSxfMHg0OWZiNGQoMHgxOTUpKTtcIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBUb0RvIGZyb20gJy4vbW9kdWxlcy90b2RvcydcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cydcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWxzJ1xuXG4vLyBBcHAgZnVuY3Rpb24gc2hvdWxkIGhhbmRsZSBldm9raW5nIERPTSBlbGVtZW50cyBvbnNjcmVlbi5cbmZ1bmN0aW9uIGFwcCgpIHtcblx0Y29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tdG9kbycpXG5cdGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNyZWF0ZU1vZGFsKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpKVxuXHRcdG1vZGFsLnNob3dNb2RhbCgpXG5cdH0pXG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXByb2plY3QnKVxuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjcmVhdGVNb2RhbChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSlcblx0XHRtb2RhbC5zaG93TW9kYWwoKVxuXHR9KVxuXG5cdC8vVGVzdGluZywgcmVtb3ZlIGFmdGVyIHN0eWxpbmdcblx0YWRkVG9kb0J0bi5jbGljaygpXG5cblx0bGV0IHByb2plY3RzQXJyYXkgPSBbXVxuXHQvLyBDaGVjayBpZiBhIHByb2plY3QgZXhpc3QsIGlmIG5vdCwgY3JlYXRlIGEgcHJvamVjdC5cblx0Ly8gVXNlcyBhIHByZSBzZXQgYmxhbmsgb25lIGhlcmUgdW50aWwgcGVyc2lzdGVuY2UgaXMgZXN0YWJsaXNoZWRcblx0aW5pdChwcm9qZWN0c0FycmF5KVxufVxuXG5hcHAoKVxuXG4vLyBGdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIG92ZXJ2aWV3IHRyZWUgb24gVUlcbmZ1bmN0aW9uIHVwZGF0ZVRyZWUocHJvamVjdHNBcnJheSkge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA0Mjk0NzU0OTlfMzJfMV8zMl8zNl80YCwndXBkYXRlVHJlZSB0cmlnZ2VyZWQnKSlcblx0Y29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVydmlldy10cmVlJylcblx0Y29uc3QgdHJlZVJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblx0dHJlZVJlbmRlci5jbGFzc0xpc3QuYWRkKCdvdmVydmlldycpXG5cdHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDQyOTQ3NTQ5OV8zN18yXzM3XzIyXzRgLHByb2plY3QpKVxuXHRcdC8vIGFkZCBhIHByb2plY3Qgc3ViLXVsIGVsZW1lbnQgdG8gdHJlZSByb290XG5cdFx0Y29uc3QgdHJlZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cdFx0dHJlZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnb3ZlcnZpZXctcHJvamVjdCcpXG5cdFx0dHJlZVByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXG5cdFx0Ly9hZGQgdG9kbyB0aXRsZXMgdG8gcHJvamVjdCBhcyBsaVxuXHRcdHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kb3MpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXHRcdFx0cHJvamVjdFRvZG8uY2xhc3NMaXN0LmFkZCgnb3ZlcnZpZXctdG9kbycpXG5cdFx0XHRwcm9qZWN0VG9kby50ZXh0Q29udGVudCA9IHRvZG9zLnRpdGxlXG5cdFx0XHR0cmVlUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VG9kbylcblx0XHR9KVxuXHRcdHRyZWVSZW5kZXIuYXBwZW5kQ2hpbGQodHJlZVByb2plY3QpXG5cdFx0cmV0dXJuIHRyZWVSZW5kZXJcblx0fSlcblx0ZGlzcGxheS5hcHBlbmRDaGlsZCh0cmVlUmVuZGVyKVxufVxuXG4vLyBQYWdlIGluaXRpYWxpc2VyLCBpbml0aWFsaXNlIHJlc291cmNlcy5cbmZ1bmN0aW9uIGluaXQocHJvamVjdHNBcnJheSkge1xuXHRpZiAocHJvamVjdHNBcnJheS5sZW5ndGggPT09IDApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA0Mjk0NzU0OTlfNThfMl81OF82M180YCwncHJvamVjdHNBcnJheSBpcyBlbXB0eS4gQ3JlYXRpbmcgZGVmYXVsdCBhcnJheScpKVxuXHRcdGxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0KClcblx0XHRwcm9qZWN0c0FycmF5LnB1c2goZGVmYXVsdFByb2plY3QpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNDI5NDc1NDk5XzYxXzJfNjFfNzBfNGAsYGRlZmF1bHQgb2JqZWN0IGNyZWF0ZWQsIG5hbWU6ICR7ZGVmYXVsdFByb2plY3QudGl0bGV9YCkpXG5cdH0gZWxzZSAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA0Mjk0NzU0OTlfNjJfOF82Ml83OF80YCxgQXJyYXkgZm91bmQgaW4gcHJvamVjdHNBcnJheTogJHtwcm9qZWN0c0FycmF5WzBdLnRpdGxlfWApKVxuXHQvLyB1cGRhdGUgRE9NIHRyZWVcblx0dXBkYXRlVHJlZShwcm9qZWN0c0FycmF5KVxufVxuLy8gU2ltIHRlc3RzXG4vKiBsZXQgdGVzdCA9IG5ldyBUb0RvKFxuXHQndGl0bGUnLFxuXHQnZGVzY3JpcHRpb25oZXJlJyxcblx0JzIwLTAyLTIwMjQnLFxuXHQncG9vcCcsXG5cdCdub3RlZCB0byBiZSBub3RlcycsXG5cdCdubyBjaGVja2xpc3QnLFxuXHQnYnV0IHRoZXJlIGlzJyxcblx0J2J1dG5vdHJ1bHknLFxuXHQnY21vbnRpbnljaGVja2xpc3QnLFxuXHQnbGV0c2dvb28hJ1xuKVxubGV0IHRlc3QyID0gbmV3IFRvRG8oXG5cdCd0aXRsZTJidXRpdHN3YXl0b29sb25nJyxcblx0J2Rlc2NyaXB0aW9uaGVyZXRvbycsXG5cdCcyMC0wMi0yMDI0Jyxcblx0J3llcycsXG5cdCdub3RlZCB0byBiZSBub3RlcycsXG5cdCdjaGVja2xpc3QnXG4pXG5cbmxldCB0ZXN0MyA9IG5ldyBUb0RvKFxuXHQndGl0bGUzcHJldCcsXG5cdCdpdHMgcHJldHR5Jyxcblx0JzAwLTA2LTIwMjYnLFxuXHQneWVzJyxcblx0J3RlcmVwIHNlcHJlIGxlcmVtIHR1dGkgZnJ1dHRpIG1lbG9uIHNjcnV0dGkgaG9seSBtb2x5IHNoaWZ1IHNvbGV5J1xuKVxuXG4vLyBTaW0gdGVzdHNcblxubGV0IHByb2plY3QxID0gbmV3IHByb2plY3QoJ3Rlc3QgUHJvamVjdCcpXG5sZXQgcHJvamVjdDIgPSBuZXcgcHJvamVjdCgnc2Vjb25kIHByb2plY3QgdGVzdCcpXG5cbnRlc3QucHJpbnRUb0RvKClcbnRlc3QyLnByaW50VG9EbygpXG50ZXN0My5wcmludFRvRG8oKVxuXG5wcm9qZWN0MS5hZGRUb1Byb2plY3QodGVzdClcbnByb2plY3QxLmFkZFRvUHJvamVjdCh0ZXN0MilcblxucHJvamVjdDIuYWRkVG9Qcm9qZWN0KHRlc3QzKVxuXG5wcm9qZWN0MS5wcmludFByb2plY3QoKVxucHJvamVjdDIucHJpbnRQcm9qZWN0KClcblxucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QxLCBwcm9qZWN0MilcbmNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG51cGRhdGVUcmVlKHByb2plY3RzQXJyYXkpXG4gKi9cblxuLy90ZXN0XG5cbi8qIGNvbnN0IHRlc3RBdHRyQm9tYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuY29uc3QgQXR0ckJvbWIgPSB7XG5cdG5hbWU6ICdwcm9qZWN0LXRpdGxlJyxcblx0aWQ6ICdwcm9qZWN0LXRpdGxlJyxcblx0dHlwZTogJ3RleHQnLFxufVxuXG5mdW5jdGlvbiBib21iQXR0cihib21iLCBlbGVtZW50KSB7XG5cdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhib21iKSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsKVxuXHR9XG59XG5cbmNvbnNvbGUubG9nKHRlc3RBdHRyQm9tYilcbmNvbnNvbGUubG9nKEF0dHJCb21iKVxuXG5ib21iQXR0cihBdHRyQm9tYiwgdGVzdEF0dHJCb21iKVxuY29uc29sZS5sb2codGVzdEF0dHJCb21iKVxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLy8qIGM4IGlnbm9yZSBzdGFydCAqLy8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDlmYjRkPV8weDNmNGQ7KGZ1bmN0aW9uKF8weDFhY2YyNyxfMHgxMjMxMWIpe3ZhciBfMHg0YmUzYTE9XzB4M2Y0ZCxfMHgxODZiOWU9XzB4MWFjZjI3KCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgzYTAzMDQ9LXBhcnNlSW50KF8weDRiZTNhMSgweDIzNykpLzB4MSooLXBhcnNlSW50KF8weDRiZTNhMSgweDFmMCkpLzB4MikrcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjJhKSkvMHgzKigtcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjBiKSkvMHg0KStwYXJzZUludChfMHg0YmUzYTEoMHgxZTcpKS8weDUrLXBhcnNlSW50KF8weDRiZTNhMSgweDFhMykpLzB4NistcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjAzKSkvMHg3KigtcGFyc2VJbnQoXzB4NGJlM2ExKDB4MjY4KSkvMHg4KStwYXJzZUludChfMHg0YmUzYTEoMHgxZTMpKS8weDkqKHBhcnNlSW50KF8weDRiZTNhMSgweDFhNykpLzB4YSkrLXBhcnNlSW50KF8weDRiZTNhMSgweDIwNikpLzB4YioocGFyc2VJbnQoXzB4NGJlM2ExKDB4MWZlKSkvMHhjKTtpZihfMHgzYTAzMDQ9PT1fMHgxMjMxMWIpYnJlYWs7ZWxzZSBfMHgxODZiOWVbJ3B1c2gnXShfMHgxODZiOWVbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDNmNmZkMSl7XzB4MTg2YjllWydwdXNoJ10oXzB4MTg2YjllWydzaGlmdCddKCkpO319fShfMHhhOGIzLDB4NDY0NGEpKTt2YXIgaj1PYmplY3RbXzB4NDlmYjRkKDB4MjBjKV0sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLGVlPU9iamVjdFtfMHg0OWZiNGQoMHgyMGEpXSx0ZT1PYmplY3RbXzB4NDlmYjRkKDB4MjUyKV0sbmU9T2JqZWN0W18weDQ5ZmI0ZCgweDIzYildW18weDQ5ZmI0ZCgweDIzOCldLHJlPShfMHgxOWU0ZWUsXzB4MzA3MjkyLF8weDVkZGNkNCxfMHg1OTdmM2UpPT57dmFyIF8weDI3NjMwND1fMHg0OWZiNGQ7aWYoXzB4MzA3MjkyJiZ0eXBlb2YgXzB4MzA3MjkyPT0nb2JqZWN0J3x8dHlwZW9mIF8weDMwNzI5Mj09XzB4Mjc2MzA0KDB4MjI3KSl7Zm9yKGxldCBfMHhlNGQ0MTkgb2YgZWUoXzB4MzA3MjkyKSkhbmVbXzB4Mjc2MzA0KDB4MTlhKV0oXzB4MTllNGVlLF8weGU0ZDQxOSkmJl8weGU0ZDQxOSE9PV8weDVkZGNkNCYmSChfMHgxOWU0ZWUsXzB4ZTRkNDE5LHsnZ2V0JzooKT0+XzB4MzA3MjkyW18weGU0ZDQxOV0sJ2VudW1lcmFibGUnOiEoXzB4NTk3ZjNlPUcoXzB4MzA3MjkyLF8weGU0ZDQxOSkpfHxfMHg1OTdmM2VbXzB4Mjc2MzA0KDB4MWYxKV19KTt9cmV0dXJuIF8weDE5ZTRlZTt9LHg9KF8weDE5Zjc1OSxfMHgxYmQ3ZTMsXzB4MTNhNzUzKT0+KF8weDEzYTc1Mz1fMHgxOWY3NTkhPW51bGw/aih0ZShfMHgxOWY3NTkpKTp7fSxyZShfMHgxYmQ3ZTN8fCFfMHgxOWY3NTl8fCFfMHgxOWY3NTlbXzB4NDlmYjRkKDB4MWJjKV0/SChfMHgxM2E3NTMsXzB4NDlmYjRkKDB4MWY2KSx7J3ZhbHVlJzpfMHgxOWY3NTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgxM2E3NTMsXzB4MTlmNzU5KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgyZTI1ZWQsXzB4MTA2MzhiLF8weDRhYTlkYSxfMHgyMjg0MjYsXzB4NDc3OTRiKXt2YXIgXzB4NTIwZjFhPV8weDQ5ZmI0ZDt0aGlzWydnbG9iYWwnXT1fMHgyZTI1ZWQsdGhpc1tfMHg1MjBmMWEoMHgxY2MpXT1fMHgxMDYzOGIsdGhpc1sncG9ydCddPV8weDRhYTlkYSx0aGlzW18weDUyMGYxYSgweDFmMyldPV8weDIyODQyNix0aGlzW18weDUyMGYxYSgweDE5NildPV8weDQ3Nzk0Yix0aGlzW18weDUyMGYxYSgweDFiYildPSEweDAsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4NTIwZjFhKDB4MjRlKV09ITB4MSx0aGlzW18weDUyMGYxYSgweDIxOSldPSEweDEsdGhpc1tfMHg1MjBmMWEoMHgyNDcpXT1fMHgyZTI1ZWRbXzB4NTIwZjFhKDB4MjAyKV0/LlsnZW52J10/LltfMHg1MjBmMWEoMHgyMWYpXT09PV8weDUyMGYxYSgweDFlNSksdGhpc1tfMHg1MjBmMWEoMHgxODcpXT0hdGhpc1tfMHg1MjBmMWEoMHgxYWEpXVtfMHg1MjBmMWEoMHgyMDIpXT8uW18weDUyMGYxYSgweDFkNyldPy5bXzB4NTIwZjFhKDB4MjFlKV0mJiF0aGlzW18weDUyMGYxYSgweDI0NyldLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1tfMHg1MjBmMWEoMHgyNDkpXT0weDAsdGhpc1tfMHg1MjBmMWEoMHgyNGMpXT0weDE0LHRoaXNbXzB4NTIwZjFhKDB4MTg5KV09XzB4NTIwZjFhKDB4MjZlKSx0aGlzW18weDUyMGYxYSgweDFlZildPSh0aGlzW18weDUyMGYxYSgweDE4NyldP18weDUyMGYxYSgweDIwOSk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHg1MjBmMWEoMHgxODkpXTt9YXN5bmNbXzB4NDlmYjRkKDB4MjBmKV0oKXt2YXIgXzB4NThmZmYyPV8weDQ5ZmI0ZDtpZih0aGlzWydfV2ViU29ja2V0Q2xhc3MnXSlyZXR1cm4gdGhpc1tfMHg1OGZmZjIoMHgyNTcpXTtsZXQgXzB4ZWZjZTY7aWYodGhpc1tfMHg1OGZmZjIoMHgxODcpXXx8dGhpc1tfMHg1OGZmZjIoMHgyNDcpXSlfMHhlZmNlNj10aGlzW18weDU4ZmZmMigweDFhYSldW18weDU4ZmZmMigweDFhMCldO2Vsc2V7aWYodGhpc1tfMHg1OGZmZjIoMHgxYWEpXVtfMHg1OGZmZjIoMHgyMDIpXT8uW18weDU4ZmZmMigweDFiNildKV8weGVmY2U2PXRoaXNbXzB4NThmZmYyKDB4MWFhKV1bXzB4NThmZmYyKDB4MjAyKV0/LlsnX1dlYlNvY2tldCddO2Vsc2UgdHJ5e2xldCBfMHgyZWMxZWU9YXdhaXQgaW1wb3J0KCdwYXRoJyk7XzB4ZWZjZTY9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbXzB4NThmZmYyKDB4MjQ4KV0oXzB4MmVjMWVlW18weDU4ZmZmMigweDFkZCldKHRoaXNbXzB4NThmZmYyKDB4MWYzKV0sJ3dzL2luZGV4LmpzJykpW18weDU4ZmZmMigweDI0NCldKCkpKVtfMHg1OGZmZjIoMHgxZjYpXTt9Y2F0Y2h7dHJ5e18weGVmY2U2PXJlcXVpcmUocmVxdWlyZShfMHg1OGZmZjIoMHgxZWQpKVtfMHg1OGZmZjIoMHgxZGQpXSh0aGlzW18weDU4ZmZmMigweDFmMyldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDU4ZmZmMigweDI0YikpO319fXJldHVybiB0aGlzW18weDU4ZmZmMigweDI1NyldPV8weGVmY2U2LF8weGVmY2U2O31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4NWJmZGVhPV8weDQ5ZmI0ZDt0aGlzW18weDViZmRlYSgweDIxOSldfHx0aGlzW18weDViZmRlYSgweDI0ZSldfHx0aGlzW18weDViZmRlYSgweDI0OSldPj10aGlzW18weDViZmRlYSgweDI0YyldfHwodGhpc1tfMHg1YmZkZWEoMHgyNWMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzW18weDViZmRlYSgweDI0OSldKyssdGhpc1tfMHg1YmZkZWEoMHgxYzcpXT1uZXcgUHJvbWlzZSgoXzB4NTQ1OGIzLF8weDFhMzk2OSk9Pnt2YXIgXzB4NDc4NjdiPV8weDViZmRlYTt0aGlzW18weDQ3ODY3YigweDIwZildKClbXzB4NDc4NjdiKDB4MjQzKV0oXzB4MzcxNDZjPT57dmFyIF8weDQ2ZTMyMT1fMHg0Nzg2N2I7bGV0IF8weDNiMGYxNj1uZXcgXzB4MzcxNDZjKF8weDQ2ZTMyMSgweDI1NSkrKCF0aGlzWydfaW5Ccm93c2VyJ10mJnRoaXNbXzB4NDZlMzIxKDB4MTk2KV0/XzB4NDZlMzIxKDB4MTk4KTp0aGlzW18weDQ2ZTMyMSgweDFjYyldKSsnOicrdGhpc1tfMHg0NmUzMjEoMHgxZWEpXSk7XzB4M2IwZjE2W18weDQ2ZTMyMSgweDFjMildPSgpPT57dmFyIF8weDE3YzU3NT1fMHg0NmUzMjE7dGhpc1tfMHgxN2M1NzUoMHgxYmIpXT0hMHgxLHRoaXNbXzB4MTdjNTc1KDB4MjFiKV0oXzB4M2IwZjE2KSx0aGlzW18weDE3YzU3NSgweDIzMCldKCksXzB4MWEzOTY5KG5ldyBFcnJvcihfMHgxN2M1NzUoMHgxYjkpKSk7fSxfMHgzYjBmMTZbXzB4NDZlMzIxKDB4MjRhKV09KCk9Pnt2YXIgXzB4NDgxNGZlPV8weDQ2ZTMyMTt0aGlzW18weDQ4MTRmZSgweDE4NyldfHxfMHgzYjBmMTZbXzB4NDgxNGZlKDB4MWQyKV0mJl8weDNiMGYxNlsnX3NvY2tldCddW18weDQ4MTRmZSgweDIyMyldJiZfMHgzYjBmMTZbXzB4NDgxNGZlKDB4MWQyKV1bXzB4NDgxNGZlKDB4MjIzKV0oKSxfMHg1NDU4YjMoXzB4M2IwZjE2KTt9LF8weDNiMGYxNltfMHg0NmUzMjEoMHgxZWIpXT0oKT0+e3ZhciBfMHg1ZGM5MmU9XzB4NDZlMzIxO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzW18weDVkYzkyZSgweDIxYildKF8weDNiMGYxNiksdGhpc1tfMHg1ZGM5MmUoMHgyMzApXSgpO30sXzB4M2IwZjE2W18weDQ2ZTMyMSgweDI1MSldPV8weDJjYTcxYj0+e3ZhciBfMHg1MGEzZTk9XzB4NDZlMzIxO3RyeXtfMHgyY2E3MWImJl8weDJjYTcxYltfMHg1MGEzZTkoMHgxZWMpXSYmdGhpc1tfMHg1MGEzZTkoMHgxODcpXSYmSlNPTltfMHg1MGEzZTkoMHgxZGIpXShfMHgyY2E3MWJbJ2RhdGEnXSlbXzB4NTBhM2U5KDB4MjAxKV09PT1fMHg1MGEzZTkoMHgxZTQpJiZ0aGlzW18weDUwYTNlOSgweDFhYSldW18weDUwYTNlOSgweDIxNSldWydyZWxvYWQnXSgpO31jYXRjaHt9fTt9KVtfMHg0Nzg2N2IoMHgyNDMpXShfMHg0MTQ1MWM9Pih0aGlzW18weDQ3ODY3YigweDI0ZSldPSEweDAsdGhpc1tfMHg0Nzg2N2IoMHgyMTkpXT0hMHgxLHRoaXNbXzB4NDc4NjdiKDB4MjVjKV09ITB4MSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHg0Nzg2N2IoMHgyNDkpXT0weDAsXzB4NDE0NTFjKSlbJ2NhdGNoJ10oXzB4NDg5NGQ1PT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbXzB4NDc4NjdiKDB4MjI1KV0oXzB4NDc4NjdiKDB4MjQwKSt0aGlzW18weDQ3ODY3YigweDE4OSldKSxfMHgxYTM5NjkobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHg0ODk0ZDUmJl8weDQ4OTRkNVtfMHg0Nzg2N2IoMHgxYTkpXSkpKSkpO30pKTt9W18weDQ5ZmI0ZCgweDIxYildKF8weDVjN2MzZCl7dmFyIF8weDFkOWU1PV8weDQ5ZmI0ZDt0aGlzW18weDFkOWU1KDB4MjRlKV09ITB4MSx0aGlzW18weDFkOWU1KDB4MjE5KV09ITB4MTt0cnl7XzB4NWM3YzNkW18weDFkOWU1KDB4MWViKV09bnVsbCxfMHg1YzdjM2RbJ29uZXJyb3InXT1udWxsLF8weDVjN2MzZFtfMHgxZDllNSgweDI0YSldPW51bGw7fWNhdGNoe310cnl7XzB4NWM3YzNkW18weDFkOWU1KDB4MTkzKV08MHgyJiZfMHg1YzdjM2RbXzB4MWQ5ZTUoMHgyNWUpXSgpO31jYXRjaHt9fVtfMHg0OWZiNGQoMHgyMzApXSgpe3ZhciBfMHgzNjE0NGU9XzB4NDlmYjRkO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J10pJiYodGhpc1tfMHgzNjE0NGUoMHgxYzkpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDQ3OTA1ZT1fMHgzNjE0NGU7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDQ3OTA1ZSgweDIxOSldfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NDc5MDVlKDB4MWM3KV0/LltfMHg0NzkwNWUoMHgyMjApXSgoKT0+dGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpKSk7fSwweDFmNCksdGhpc1tfMHgzNjE0NGUoMHgxYzkpXVtfMHgzNjE0NGUoMHgyMjMpXSYmdGhpc1tfMHgzNjE0NGUoMHgxYzkpXVsndW5yZWYnXSgpKTt9YXN5bmNbXzB4NDlmYjRkKDB4MWZiKV0oXzB4MmUzZjM4KXt2YXIgXzB4YTc3NzY4PV8weDQ5ZmI0ZDt0cnl7aWYoIXRoaXNbXzB4YTc3NzY4KDB4MWJiKV0pcmV0dXJuO3RoaXNbXzB4YTc3NzY4KDB4MjVjKV0mJnRoaXNbXzB4YTc3NzY4KDB4MWQ5KV0oKSwoYXdhaXQgdGhpc1tfMHhhNzc3NjgoMHgxYzcpXSlbXzB4YTc3NzY4KDB4MWZiKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MmUzZjM4KSk7fWNhdGNoKF8weDU3NzlkZil7Y29uc29sZVtfMHhhNzc3NjgoMHgyMjUpXSh0aGlzW18weGE3Nzc2OCgweDFlZildKyc6XFxcXHgyMCcrKF8weDU3NzlkZiYmXzB4NTc3OWRmW18weGE3Nzc2OCgweDFhOSldKSksdGhpc1tfMHhhNzc3NjgoMHgxYmIpXT0hMHgxLHRoaXNbXzB4YTc3NzY4KDB4MjMwKV0oKTt9fX07ZnVuY3Rpb24gYihfMHgxNzljZjcsXzB4M2QxNjEzLF8weDI4NjdlNixfMHgyNTBkZWMsXzB4NWJmZDQyLF8weDE3NzY5MCl7dmFyIF8weDU4OWYwMD1fMHg0OWZiNGQ7bGV0IF8weDViNjBkZT1fMHgyODY3ZTZbXzB4NTg5ZjAwKDB4MWUyKV0oJywnKVsnbWFwJ10oXzB4M2YxYzE0PT57dmFyIF8weDQ1MTNjZT1fMHg1ODlmMDA7dHJ5e18weDE3OWNmN1snX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddfHwoKF8weDViZmQ0Mj09PSduZXh0LmpzJ3x8XzB4NWJmZDQyPT09XzB4NDUxM2NlKDB4MWY4KXx8XzB4NWJmZDQyPT09XzB4NDUxM2NlKDB4MWRlKXx8XzB4NWJmZDQyPT09XzB4NDUxM2NlKDB4MWFkKSkmJihfMHg1YmZkNDIrPSFfMHgxNzljZjdbXzB4NDUxM2NlKDB4MjAyKV0/LltfMHg0NTEzY2UoMHgxZDcpXT8uW18weDQ1MTNjZSgweDIxZSldJiZfMHgxNzljZjdbXzB4NDUxM2NlKDB4MjAyKV0/LltfMHg0NTEzY2UoMHgxZmMpXT8uW18weDQ1MTNjZSgweDIxZildIT09XzB4NDUxM2NlKDB4MWU1KT8nXFxcXHgyMGJyb3dzZXInOl8weDQ1MTNjZSgweDI1OSkpLF8weDE3OWNmN1tfMHg0NTEzY2UoMHgyNGQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NWJmZDQyfSk7bGV0IF8weDE2YjViYj1uZXcgWChfMHgxNzljZjcsXzB4M2QxNjEzLF8weDNmMWMxNCxfMHgyNTBkZWMsXzB4MTc3NjkwKTtyZXR1cm4gXzB4MTZiNWJiW18weDQ1MTNjZSgweDFmYildW18weDQ1MTNjZSgweDFjMCldKF8weDE2YjViYik7fWNhdGNoKF8weDVkNWE3ZCl7cmV0dXJuIGNvbnNvbGVbXzB4NDUxM2NlKDB4MjI1KV0oXzB4NDUxM2NlKDB4MWNhKSxfMHg1ZDVhN2QmJl8weDVkNWE3ZFtfMHg0NTEzY2UoMHgxYTkpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4MzRiZjE4PT5fMHg1YjYwZGVbXzB4NTg5ZjAwKDB4MWI3KV0oXzB4MjBhZGUwPT5fMHgyMGFkZTAoXzB4MzRiZjE4KSk7fWZ1bmN0aW9uIF8weDNmNGQoXzB4NDIwN2Y3LF8weDE2YzI5OCl7dmFyIF8weGE4YjM2Mz1fMHhhOGIzKCk7cmV0dXJuIF8weDNmNGQ9ZnVuY3Rpb24oXzB4M2Y0ZGRkLF8weDFkOTgxYSl7XzB4M2Y0ZGRkPV8weDNmNGRkZC0weDE4NTt2YXIgXzB4MzI5MmE0PV8weGE4YjM2M1tfMHgzZjRkZGRdO3JldHVybiBfMHgzMjkyYTQ7fSxfMHgzZjRkKF8weDQyMDdmNyxfMHgxNmMyOTgpO31mdW5jdGlvbiBXKF8weDJkYjBiYSl7dmFyIF8weDI1M2MwMz1fMHg0OWZiNGQ7bGV0IF8weDQ4MWI1Mj1mdW5jdGlvbihfMHgyZmIzZjEsXzB4ZmNlOGZkKXtyZXR1cm4gXzB4ZmNlOGZkLV8weDJmYjNmMTt9LF8weDNiODllNjtpZihfMHgyZGIwYmFbXzB4MjUzYzAzKDB4MWNkKV0pXzB4M2I4OWU2PWZ1bmN0aW9uKCl7dmFyIF8weDNmMTUyMj1fMHgyNTNjMDM7cmV0dXJuIF8weDJkYjBiYVtfMHgzZjE1MjIoMHgxY2QpXVtfMHgzZjE1MjIoMHgxY2IpXSgpO307ZWxzZXtpZihfMHgyZGIwYmFbXzB4MjUzYzAzKDB4MjAyKV0mJl8weDJkYjBiYVsncHJvY2VzcyddW18weDI1M2MwMygweDI1NildJiZfMHgyZGIwYmFbXzB4MjUzYzAzKDB4MjAyKV0/LltfMHgyNTNjMDMoMHgxZmMpXT8uW18weDI1M2MwMygweDIxZildIT09J2VkZ2UnKV8weDNiODllNj1mdW5jdGlvbigpe3ZhciBfMHgzMjZkNjE9XzB4MjUzYzAzO3JldHVybiBfMHgyZGIwYmFbXzB4MzI2ZDYxKDB4MjAyKV1bXzB4MzI2ZDYxKDB4MjU2KV0oKTt9LF8weDQ4MWI1Mj1mdW5jdGlvbihfMHgyMjQ1YzYsXzB4NDk0MDY2KXtyZXR1cm4gMHgzZTgqKF8weDQ5NDA2NlsweDBdLV8weDIyNDVjNlsweDBdKSsoXzB4NDk0MDY2WzB4MV0tXzB4MjI0NWM2WzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDdmYzQzNX09cmVxdWlyZSgncGVyZl9ob29rcycpO18weDNiODllNj1mdW5jdGlvbigpe3ZhciBfMHgyNWJhZDE9XzB4MjUzYzAzO3JldHVybiBfMHg3ZmM0MzVbXzB4MjViYWQxKDB4MWNiKV0oKTt9O31jYXRjaHtfMHgzYjg5ZTY9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg0ODFiNTIsJ3RpbWVTdGFtcCc6XzB4M2I4OWU2LCdub3cnOigpPT5EYXRlWydub3cnXSgpfTt9ZnVuY3Rpb24gXzB4YThiMygpe3ZhciBfMHg0OGI2YmI9WydnZXRPd25Qcm9wZXJ0eU5hbWVzJywnNTE0NHN0Q1NxTicsJ2NyZWF0ZScsJ19zZXROb2RlUXVlcnlQYXRoJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdfaXNNYXAnLCdkZXB0aCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ3N5bWJvbCcsJ2xvY2F0aW9uJywnX2lzTmVnYXRpdmVaZXJvJywncHVzaCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ19jb25uZWN0aW5nJywnX1N5bWJvbCcsJ19kaXNwb3NlV2Vic29ja2V0JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ3ZhbHVlJywnbm9kZScsJ05FWFRfUlVOVElNRScsJ2NhdGNoJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywndW5yZWYnLCd0aW1lJywnd2FybicsJ2VsZW1lbnRzJywnZnVuY3Rpb24nLCd0eXBlJywnX3Byb3BlcnR5JywnMjdyYU9ZZ1InLCdhbGxTdHJMZW5ndGgnLCdzdHJMZW5ndGgnLCdTZXQnLCdvYmplY3QnLCd0b3RhbFN0ckxlbmd0aCcsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnbGVuZ3RoJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ25vRnVuY3Rpb25zJywnX3JlZ0V4cFRvU3RyaW5nJywnbnV4dCcsJ2F1dG9FeHBhbmRMaW1pdCcsJzVFZmpFUUwnLCdoYXNPd25Qcm9wZXJ0eScsJ0hUTUxBbGxDb2xsZWN0aW9uJywndGltZUVuZCcsJ3Byb3RvdHlwZScsJ19wcm9wZXJ0eU5hbWUnLCdjb25jYXQnLCdjb25zb2xlJywnX2tleVN0clJlZ0V4cCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnbmVnYXRpdmVJbmZpbml0eScsJ2Jvb2xlYW4nLCd0aGVuJywndG9TdHJpbmcnLCdwYXJlbnQnLCdzbGljZScsJ19pbk5leHRFZGdlJywncGF0aFRvRmlsZVVSTCcsJ19jb25uZWN0QXR0ZW1wdENvdW50Jywnb25vcGVuJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnX2Nvbm5lY3RlZCcsJ2NhcHBlZFByb3BzJywnX2NsZWFuTm9kZScsJ29ubWVzc2FnZScsJ2dldFByb3RvdHlwZU9mJywnc3RhY2snLCd0b0xvd2VyQ2FzZScsJ3dzOi8vJywnaHJ0aW1lJywnX1dlYlNvY2tldENsYXNzJywnX3BfbmFtZScsJ1xcXFx4MjBzZXJ2ZXInLCdfdHlwZScsJ251bGwnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnY2xvc2UnLCdsb2cnLCd2YWx1ZU9mJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZXJyb3InLCdTdHJpbmcnLCdpbmRleCcsJ19jYXBJZlN0cmluZycsJ3Jvb3RfZXhwX2lkJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJzExMzcwNEpEVUFBVScsJ191bmRlZmluZWQnLCdudW1iZXInLCdfaGFzTWFwT25JdHNQYXRoJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCcxMjcuMC4wLjEnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnX3F1b3RlZFJlZ0V4cCcsJ19wX2xlbmd0aCcsJ19pbkJyb3dzZXInLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19udW1iZXJSZWdFeHAnLCd3ZWJwYWNrJywnc3Vic3RyJyxcXFwiL2hvbWUvZGFuaWVsbHIvLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yODkvbm9kZV9tb2R1bGVzXFxcIiwnX2lzU2V0JywnW29iamVjdFxcXFx4MjBNYXBdJywnbWF0Y2gnLCcnLCdfc2V0Tm9kZUxhYmVsJywncmVhZHlTdGF0ZScsJ2xldmVsJywnJywnZG9ja2VyaXplZEFwcCcsJ3JlZHVjZUxpbWl0cycsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnX2NvbnNvbGVfbmluamEnLCdjYWxsJywnc3RyaW5nJywnTWFwJywnMzQ4NzknLCd1bmRlZmluZWQnLCdfb2JqZWN0VG9TdHJpbmcnLCdXZWJTb2NrZXQnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZWxhcHNlZCcsJzE5NTYwNDhxdVltRmEnLCdhdXRvRXhwYW5kJywndW5rbm93bicsJ19kYXRlVG9TdHJpbmcnLCcxMTgwTHZ6cEZQJywnRXJyb3InLCdtZXNzYWdlJywnZ2xvYmFsJywnQnVmZmVyJywncm9vdEV4cHJlc3Npb24nLCdhbmd1bGFyJywnc29ydFByb3BzJywnY2FwcGVkJywncmVwbGFjZScsJ3NlcmlhbGl6ZScsJ3Vuc2hpZnQnLCdfaXNBcnJheScsJ2RhdGUnLCdfcF8nLCdfV2ViU29ja2V0JywnZm9yRWFjaCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnMTcwOTExMTE5OTQ1NycsJ19hbGxvd2VkVG9TZW5kJywnX19lcycrJ01vZHVsZScsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaW5kJywnZ2V0Jywnb25lcnJvcicsJ19pc1ByaW1pdGl2ZVR5cGUnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ2JpZ2ludCcsJ193cycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19yZWNvbm5lY3RUaW1lb3V0JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdub3cnLCdob3N0JywncGVyZm9ybWFuY2UnLCduYW4nLCdfc2V0Tm9kZUlkJywnY291bnQnLCd0cmFjZScsJ19zb2NrZXQnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ25lZ2F0aXZlWmVybycsJ1JlZ0V4cCcsJ0Jvb2xlYW4nLCd2ZXJzaW9ucycsJ3NldCcsJ19jb25uZWN0VG9Ib3N0Tm93JywndGVzdCcsJ3BhcnNlJywnX2FkZExvYWROb2RlJywnam9pbicsJ2FzdHJvJywnTnVtYmVyJywnc2V0dGVyJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ3NwbGl0JywnMzc2MjllWklYRXUnLCdyZWxvYWQnLCdlZGdlJywnY2FwcGVkRWxlbWVudHMnLCc5MzE5MDVMYXBLYXgnLCdfc29ydFByb3BzJywncHJvcHMnLCdwb3J0Jywnb25jbG9zZScsJ2RhdGEnLCdwYXRoJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcImRrbS1kZXNrdG9wXFxcIixcXFwiMTkyLjE2OC4xLjEwMVxcXCJdLCdfc2VuZEVycm9yTWVzc2FnZScsJzExNTI4Nm12c1ZWYScsJ2VudW1lcmFibGUnLCdnZXR0ZXInLCdub2RlTW9kdWxlcycsJ19hZGRGdW5jdGlvbnNOb2RlJywnaGl0cycsJ2RlZmF1bHQnLCdjb25zdHJ1Y3RvcicsJ3JlbWl4JywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdpbmNsdWRlcycsJ3NlbmQnLCdlbnYnLCdhcnJheScsJzEybmJrdWZ1JywnX2FkZFByb3BlcnR5JywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ21ldGhvZCcsJ3Byb2Nlc3MnLCcxNjFweWVXWWUnLCdzdHJpbmdpZnknLCdjdXJyZW50JywnNzM2Mzk4M2RhY2RYTycsJ25hbWUnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnXTtfMHhhOGIzPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ4YjZiYjt9O3JldHVybiBfMHhhOGIzKCk7fWZ1bmN0aW9uIEooXzB4NTRmZDk1LF8weDE1MGFhZCxfMHgzZTM3OGEpe3ZhciBfMHg1NTUyNTY9XzB4NDlmYjRkO2lmKF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMGUpXSE9PXZvaWQgMHgwKXJldHVybiBfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjBlKV07bGV0IF8weDEzM2FhOT1fMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjAyKV0/LlsndmVyc2lvbnMnXT8uW18weDU1NTI1NigweDIxZSldfHxfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjAyKV0/LltfMHg1NTUyNTYoMHgxZmMpXT8uW18weDU1NTI1NigweDIxZildPT09XzB4NTU1MjU2KDB4MWU1KTtyZXR1cm4gXzB4MTMzYWE5JiZfMHgzZTM3OGE9PT1fMHg1NTUyNTYoMHgyMzUpP18weDU0ZmQ5NVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109ITB4MTpfMHg1NGZkOTVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPV8weDEzM2FhOXx8IV8weDE1MGFhZHx8XzB4NTRmZDk1W18weDU1NTI1NigweDIxNSldPy5bJ2hvc3RuYW1lJ10mJl8weDE1MGFhZFtfMHg1NTUyNTYoMHgxZmEpXShfMHg1NGZkOTVbXzB4NTU1MjU2KDB4MjE1KV1bJ2hvc3RuYW1lJ10pLF8weDU0ZmQ5NVtfMHg1NTUyNTYoMHgyMGUpXTt9ZnVuY3Rpb24gWShfMHg1MmVhZDgsXzB4NDg4YmFkLF8weDFjNjc0MixfMHg1OTNlOTApe3ZhciBfMHg1OWVkMDI9XzB4NDlmYjRkO18weDUyZWFkOD1fMHg1MmVhZDgsXzB4NDg4YmFkPV8weDQ4OGJhZCxfMHgxYzY3NDI9XzB4MWM2NzQyLF8weDU5M2U5MD1fMHg1OTNlOTA7bGV0IF8weDE2MmU5OT1XKF8weDUyZWFkOCksXzB4NGY3ZGZkPV8weDE2MmU5OVsnZWxhcHNlZCddLF8weDUyM2I2YT1fMHgxNjJlOTlbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDU0MDJjY3tjb25zdHJ1Y3Rvcigpe3ZhciBfMHg0OGJhZmY9XzB4M2Y0ZDt0aGlzW18weDQ4YmFmZigweDIzZildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0OGJhZmYoMHgxOGEpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDhiYWZmKDB4MTg1KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1snX3VuZGVmaW5lZCddPV8weDUyZWFkOFsndW5kZWZpbmVkJ10sdGhpc1tfMHg0OGJhZmYoMHgxYzUpXT1fMHg1MmVhZDhbXzB4NDhiYWZmKDB4MjM5KV0sdGhpc1tfMHg0OGJhZmYoMHgxYmQpXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ109T2JqZWN0W18weDQ4YmFmZigweDIwYSldLHRoaXNbXzB4NDhiYWZmKDB4MjFhKV09XzB4NTJlYWQ4WydTeW1ib2wnXSx0aGlzW18weDQ4YmFmZigweDIzNCldPVJlZ0V4cFtfMHg0OGJhZmYoMHgyM2IpXVtfMHg0OGJhZmYoMHgyNDQpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVsncHJvdG90eXBlJ11bJ3RvU3RyaW5nJ107fVsnc2VyaWFsaXplJ10oXzB4MzcxNmRjLF8weDQyYjI1MixfMHgzMTJhNGEsXzB4MTlhMjNlKXt2YXIgXzB4M2YzOWViPV8weDNmNGQsXzB4MTA5NWZiPXRoaXMsXzB4NTBmN2Q0PV8weDMxMmE0YVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDU0M2FmNChfMHgxYjllZTksXzB4NmUwY2FjLF8weGFmYmM5ZSl7dmFyIF8weGFjM2ZlZj1fMHgzZjRkO18weDZlMGNhY1sndHlwZSddPV8weGFjM2ZlZigweDFhNSksXzB4NmUwY2FjW18weGFjM2ZlZigweDI2MildPV8weDFiOWVlOVtfMHhhYzNmZWYoMHgxYTkpXSxfMHgyOTUzYTY9XzB4YWZiYzllW18weGFjM2ZlZigweDIxZSldW18weGFjM2ZlZigweDIwNSldLF8weGFmYmM5ZVtfMHhhYzNmZWYoMHgyMWUpXVtfMHhhYzNmZWYoMHgyMDUpXT1fMHg2ZTBjYWMsXzB4MTA5NWZiW18weGFjM2ZlZigweDI2NyldKF8weDZlMGNhYyxfMHhhZmJjOWUpO310cnl7XzB4MzEyYTRhW18weDNmMzllYigweDE5NCldKyssXzB4MzEyYTRhW18weDNmMzllYigweDFhNCldJiZfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjMyKV1bXzB4M2YzOWViKDB4MjE3KV0oXzB4NDJiMjUyKTt2YXIgXzB4M2Q3ZmY5LF8weDMwNTllMixfMHgyZjI5YjcsXzB4MzJhY2MwLF8weDU1ZTNmOT1bXSxfMHgzMDBhODk9W10sXzB4MWQwOTRkLF8weDM0NTliNj10aGlzW18weDNmMzllYigweDI1YSldKF8weDQyYjI1MiksXzB4NjFiMzNjPV8weDM0NTliNj09PSdhcnJheScsXzB4NDY2ZDc5PSEweDEsXzB4NTQ5MjYyPV8weDM0NTliNj09PSdmdW5jdGlvbicsXzB4ZGUxNzIzPXRoaXNbXzB4M2YzOWViKDB4MWMzKV0oXzB4MzQ1OWI2KSxfMHgxYTBhMWQ9dGhpc1tfMHgzZjM5ZWIoMHgxYmYpXShfMHgzNDU5YjYpLF8weDU5ZDQ3MT1fMHhkZTE3MjN8fF8weDFhMGExZCxfMHgxYTdhYWE9e30sXzB4NTM5MWIxPTB4MCxfMHgyYmIxZWY9ITB4MSxfMHgyOTUzYTYsXzB4MTUzMmJjPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjExKV0pe2lmKF8weDYxYjMzYyl7aWYoXzB4MzA1OWUyPV8weDQyYjI1MltfMHgzZjM5ZWIoMHgyMzEpXSxfMHgzMDU5ZTI+XzB4MzEyYTRhW18weDNmMzllYigweDIyNildKXtmb3IoXzB4MmYyOWI3PTB4MCxfMHgzMmFjYzA9XzB4MzEyYTRhW18weDNmMzllYigweDIyNildLF8weDNkN2ZmOT1fMHgyZjI5Yjc7XzB4M2Q3ZmY5PF8weDMyYWNjMDtfMHgzZDdmZjkrKylfMHgzMDBhODlbXzB4M2YzOWViKDB4MjE3KV0oXzB4MTA5NWZiW18weDNmMzllYigweDFmZildKF8weDU1ZTNmOSxfMHg0MmIyNTIsXzB4MzQ1OWI2LF8weDNkN2ZmOSxfMHgzMTJhNGEpKTtfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MWU2KV09ITB4MDt9ZWxzZXtmb3IoXzB4MmYyOWI3PTB4MCxfMHgzMmFjYzA9XzB4MzA1OWUyLF8weDNkN2ZmOT1fMHgyZjI5Yjc7XzB4M2Q3ZmY5PF8weDMyYWNjMDtfMHgzZDdmZjkrKylfMHgzMDBhODlbXzB4M2YzOWViKDB4MjE3KV0oXzB4MTA5NWZiW18weDNmMzllYigweDFmZildKF8weDU1ZTNmOSxfMHg0MmIyNTIsXzB4MzQ1OWI2LF8weDNkN2ZmOSxfMHgzMTJhNGEpKTt9XzB4MzEyYTRhW18weDNmMzllYigweDFjNCldKz1fMHgzMDBhODlbXzB4M2YzOWViKDB4MjMxKV07fWlmKCEoXzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MjViKXx8XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MTllKSkmJiFfMHhkZTE3MjMmJl8weDM0NTliNiE9PV8weDNmMzllYigweDI2MykmJl8weDM0NTliNiE9PV8weDNmMzllYigweDFhYikmJl8weDM0NTliNiE9PV8weDNmMzllYigweDFjNikpe3ZhciBfMHg3YjMxYTY9XzB4MTlhMjNlW18weDNmMzllYigweDFlOSldfHxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWU5KV07aWYodGhpc1tfMHgzZjM5ZWIoMHgxOGUpXShfMHg0MmIyNTIpPyhfMHgzZDdmZjk9MHgwLF8weDQyYjI1MltfMHgzZjM5ZWIoMHgxYjcpXShmdW5jdGlvbihfMHgzODk1MTEpe3ZhciBfMHg0NmM3ZTI9XzB4M2YzOWViO2lmKF8weDUzOTFiMSsrLF8weDMxMmE0YVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDUzOTFiMT5fMHg3YjMxYTYpe18weDJiYjFlZj0hMHgwO3JldHVybjt9aWYoIV8weDMxMmE0YVtfMHg0NmM3ZTIoMHgyMDApXSYmXzB4MzEyYTRhW18weDQ2YzdlMigweDFhNCldJiZfMHgzMTJhNGFbXzB4NDZjN2UyKDB4MWM0KV0+XzB4MzEyYTRhW18weDQ2YzdlMigweDIzNildKXtfMHgyYmIxZWY9ITB4MDtyZXR1cm47fV8weDMwMGE4OVtfMHg0NmM3ZTIoMHgyMTcpXShfMHgxMDk1ZmJbXzB4NDZjN2UyKDB4MWZmKV0oXzB4NTVlM2Y5LF8weDQyYjI1MiwnU2V0JyxfMHgzZDdmZjkrKyxfMHgzMTJhNGEsZnVuY3Rpb24oXzB4MTIzNzZkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MTIzNzZkO307fShfMHgzODk1MTEpKSk7fSkpOnRoaXNbJ19pc01hcCddKF8weDQyYjI1MikmJl8weDQyYjI1MltfMHgzZjM5ZWIoMHgxYjcpXShmdW5jdGlvbihfMHgxMTMxMTYsXzB4MWQ3N2Y5KXt2YXIgXzB4MzZhYzFjPV8weDNmMzllYjtpZihfMHg1MzkxYjErKyxfMHgzMTJhNGFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1MzkxYjE+XzB4N2IzMWE2KXtfMHgyYmIxZWY9ITB4MDtyZXR1cm47fWlmKCFfMHgzMTJhNGFbXzB4MzZhYzFjKDB4MjAwKV0mJl8weDMxMmE0YVtfMHgzNmFjMWMoMHgxYTQpXSYmXzB4MzEyYTRhW18weDM2YWMxYygweDFjNCldPl8weDMxMmE0YVtfMHgzNmFjMWMoMHgyMzYpXSl7XzB4MmJiMWVmPSEweDA7cmV0dXJuO312YXIgXzB4M2MxOWM4PV8weDFkNzdmOVtfMHgzNmFjMWMoMHgyNDQpXSgpO18weDNjMTljOFtfMHgzNmFjMWMoMHgyMzEpXT4weDY0JiYoXzB4M2MxOWM4PV8weDNjMTljOFtfMHgzNmFjMWMoMHgyNDYpXSgweDAsMHg2NCkrJy4uLicpLF8weDMwMGE4OVtfMHgzNmFjMWMoMHgyMTcpXShfMHgxMDk1ZmJbXzB4MzZhYzFjKDB4MWZmKV0oXzB4NTVlM2Y5LF8weDQyYjI1MixfMHgzNmFjMWMoMHgxOWMpLF8weDNjMTljOCxfMHgzMTJhNGEsZnVuY3Rpb24oXzB4Mzc1NWI3KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4Mzc1NWI3O307fShfMHgxMTMxMTYpKSk7fSksIV8weDQ2NmQ3OSl7dHJ5e2ZvcihfMHgxZDA5NGQgaW4gXzB4NDJiMjUyKWlmKCEoXzB4NjFiMzNjJiZfMHgxNTMyYmNbXzB4M2YzOWViKDB4MWRhKV0oXzB4MWQwOTRkKSkmJiF0aGlzW18weDNmMzllYigweDI2YyldKF8weDQyYjI1MixfMHgxZDA5NGQsXzB4MzEyYTRhKSl7aWYoXzB4NTM5MWIxKyssXzB4MzEyYTRhWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NTM5MWIxPl8weDdiMzFhNil7XzB4MmJiMWVmPSEweDA7YnJlYWs7fWlmKCFfMHgzMTJhNGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4MzEyYTRhW18weDNmMzllYigweDFhNCldJiZfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWM0KV0+XzB4MzEyYTRhWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MmJiMWVmPSEweDA7YnJlYWs7fV8weDMwMGE4OVsncHVzaCddKF8weDEwOTVmYltfMHgzZjM5ZWIoMHgxODgpXShfMHg1NWUzZjksXzB4MWE3YWFhLF8weDQyYjI1MixfMHgzNDU5YjYsXzB4MWQwOTRkLF8weDMxMmE0YSkpO319Y2F0Y2h7fWlmKF8weDFhN2FhYVtfMHgzZjM5ZWIoMHgxODYpXT0hMHgwLF8weDU0OTI2MiYmKF8weDFhN2FhYVtfMHgzZjM5ZWIoMHgyNTgpXT0hMHgwKSwhXzB4MmJiMWVmKXt2YXIgXzB4MjNlNzczPVtdW18weDNmMzllYigweDIzZCldKHRoaXNbXzB4M2YzOWViKDB4MjVkKV0oXzB4NDJiMjUyKSlbXzB4M2YzOWViKDB4MjNkKV0odGhpc1tfMHgzZjM5ZWIoMHgxYTEpXShfMHg0MmIyNTIpKTtmb3IoXzB4M2Q3ZmY5PTB4MCxfMHgzMDU5ZTI9XzB4MjNlNzczW18weDNmMzllYigweDIzMSldO18weDNkN2ZmOTxfMHgzMDU5ZTI7XzB4M2Q3ZmY5KyspaWYoXzB4MWQwOTRkPV8weDIzZTc3M1tfMHgzZDdmZjldLCEoXzB4NjFiMzNjJiZfMHgxNTMyYmNbJ3Rlc3QnXShfMHgxZDA5NGRbXzB4M2YzOWViKDB4MjQ0KV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHg0MmIyNTIsXzB4MWQwOTRkLF8weDMxMmE0YSkmJiFfMHgxYTdhYWFbXzB4M2YzOWViKDB4MWI1KStfMHgxZDA5NGRbXzB4M2YzOWViKDB4MjQ0KV0oKV0pe2lmKF8weDUzOTFiMSsrLF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYzQpXSsrLF8weDUzOTFiMT5fMHg3YjMxYTYpe18weDJiYjFlZj0hMHgwO2JyZWFrO31pZighXzB4MzEyYTRhW18weDNmMzllYigweDIwMCldJiZfMHgzMTJhNGFbXzB4M2YzOWViKDB4MWE0KV0mJl8weDMxMmE0YVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgzMTJhNGFbXzB4M2YzOWViKDB4MjM2KV0pe18weDJiYjFlZj0hMHgwO2JyZWFrO31fMHgzMDBhODlbXzB4M2YzOWViKDB4MjE3KV0oXzB4MTA5NWZiW18weDNmMzllYigweDE4OCldKF8weDU1ZTNmOSxfMHgxYTdhYWEsXzB4NDJiMjUyLF8weDM0NTliNixfMHgxZDA5NGQsXzB4MzEyYTRhKSk7fX19fX1pZihfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjI4KV09XzB4MzQ1OWI2LF8weDU5ZDQ3MT8oXzB4MzcxNmRjW18weDNmMzllYigweDIxZCldPV8weDQyYjI1MltfMHgzZjM5ZWIoMHgyNjApXSgpLHRoaXNbXzB4M2YzOWViKDB4MjY1KV0oXzB4MzQ1OWI2LF8weDM3MTZkYyxfMHgzMTJhNGEsXzB4MTlhMjNlKSk6XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MWI0KT9fMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV09dGhpc1tfMHgzZjM5ZWIoMHgxYTYpXVsnY2FsbCddKF8weDQyYjI1Mik6XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MWM2KT9fMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV09XzB4NDJiMjUyW18weDNmMzllYigweDI0NCldKCk6XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MWQ1KT9fMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV09dGhpc1tfMHgzZjM5ZWIoMHgyMzQpXVsnY2FsbCddKF8weDQyYjI1Mik6XzB4MzQ1OWI2PT09XzB4M2YzOWViKDB4MjE0KSYmdGhpc1tfMHgzZjM5ZWIoMHgyMWEpXT9fMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV09dGhpc1snX1N5bWJvbCddWydwcm90b3R5cGUnXVsndG9TdHJpbmcnXVtfMHgzZjM5ZWIoMHgxOWEpXShfMHg0MmIyNTIpOiFfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjExKV0mJiEoXzB4MzQ1OWI2PT09J251bGwnfHxfMHgzNDU5YjY9PT1fMHgzZjM5ZWIoMHgxOWUpKSYmKGRlbGV0ZSBfMHgzNzE2ZGNbXzB4M2YzOWViKDB4MjFkKV0sXzB4MzcxNmRjW18weDNmMzllYigweDFhZildPSEweDApLF8weDJiYjFlZiYmKF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgyNGYpXT0hMHgwKSxfMHgyOTUzYTY9XzB4MzEyYTRhW18weDNmMzllYigweDIxZSldW18weDNmMzllYigweDIwNSldLF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgyMWUpXVtfMHgzZjM5ZWIoMHgyMDUpXT1fMHgzNzE2ZGMsdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDM3MTZkYyxfMHgzMTJhNGEpLF8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMzEpXSl7Zm9yKF8weDNkN2ZmOT0weDAsXzB4MzA1OWUyPV8weDMwMGE4OVtfMHgzZjM5ZWIoMHgyMzEpXTtfMHgzZDdmZjk8XzB4MzA1OWUyO18weDNkN2ZmOSsrKV8weDMwMGE4OVtfMHgzZDdmZjldKF8weDNkN2ZmOSk7fV8weDU1ZTNmOVtfMHgzZjM5ZWIoMHgyMzEpXSYmKF8weDM3MTZkY1tfMHgzZjM5ZWIoMHgxZTkpXT1fMHg1NWUzZjkpO31jYXRjaChfMHgxNDU4ZGYpe18weDU0M2FmNChfMHgxNDU4ZGYsXzB4MzcxNmRjLF8weDMxMmE0YSk7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NDJiMjUyLF8weDM3MTZkYyksdGhpc1tfMHgzZjM5ZWIoMHgxYzgpXShfMHgzNzE2ZGMsXzB4MzEyYTRhKSxfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjFlKV1bXzB4M2YzOWViKDB4MjA1KV09XzB4Mjk1M2E2LF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxOTQpXS0tLF8weDMxMmE0YVtfMHgzZjM5ZWIoMHgxYTQpXT1fMHg1MGY3ZDQsXzB4MzEyYTRhW18weDNmMzllYigweDFhNCldJiZfMHgzMTJhNGFbXzB4M2YzOWViKDB4MjMyKV1bJ3BvcCddKCksXzB4MzcxNmRjO31bXzB4NTllZDAyKDB4MWExKV0oXzB4NDhlNDNkKXt2YXIgXzB4Mzc5ODliPV8weDU5ZWQwMjtyZXR1cm4gT2JqZWN0W18weDM3OTg5YigweDI2MSldP09iamVjdFtfMHgzNzk4OWIoMHgyNjEpXShfMHg0OGU0M2QpOltdO31bXzB4NTllZDAyKDB4MThlKV0oXzB4NWVlZDQxKXt2YXIgXzB4NTBhYWU0PV8weDU5ZWQwMjtyZXR1cm4hIShfMHg1ZWVkNDEmJl8weDUyZWFkOFtfMHg1MGFhZTQoMHgyMmQpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NWVlZDQxKT09PV8weDUwYWFlNCgweDIxMikmJl8weDVlZWQ0MVtfMHg1MGFhZTQoMHgxYjcpXSk7fVtfMHg1OWVkMDIoMHgyNmMpXShfMHg0M2VhNWMsXzB4NTQ3YzdjLF8weDEyYzllYSl7dmFyIF8weDU0NWYxYj1fMHg1OWVkMDI7cmV0dXJuIF8weDEyYzllYVtfMHg1NDVmMWIoMHgyMzMpXT90eXBlb2YgXzB4NDNlYTVjW18weDU0N2M3Y109PV8weDU0NWYxYigweDIyNyk6ITB4MTt9WydfdHlwZSddKF8weDJmYTkxZil7dmFyIF8weDMzZDE2MT1fMHg1OWVkMDIsXzB4NTBmYzkwPScnO3JldHVybiBfMHg1MGZjOTA9dHlwZW9mIF8weDJmYTkxZixfMHg1MGZjOTA9PT1fMHgzM2QxNjEoMHgyMmUpP3RoaXNbXzB4MzNkMTYxKDB4MTlmKV0oXzB4MmZhOTFmKT09PV8weDMzZDE2MSgweDFkMyk/XzB4NTBmYzkwPV8weDMzZDE2MSgweDFmZCk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmZhOTFmKT09PV8weDMzZDE2MSgweDFlMSk/XzB4NTBmYzkwPV8weDMzZDE2MSgweDFiNCk6dGhpc1tfMHgzM2QxNjEoMHgxOWYpXShfMHgyZmE5MWYpPT09XzB4MzNkMTYxKDB4MjIxKT9fMHg1MGZjOTA9XzB4MzNkMTYxKDB4MWM2KTpfMHgyZmE5MWY9PT1udWxsP18weDUwZmM5MD1fMHgzM2QxNjEoMHgyNWIpOl8weDJmYTkxZltfMHgzM2QxNjEoMHgxZjcpXSYmKF8weDUwZmM5MD1fMHgyZmE5MWZbXzB4MzNkMTYxKDB4MWY3KV1bXzB4MzNkMTYxKDB4MjA3KV18fF8weDUwZmM5MCk6XzB4NTBmYzkwPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4MzNkMTYxKDB4MWM1KV0mJl8weDJmYTkxZiBpbnN0YW5jZW9mIHRoaXNbXzB4MzNkMTYxKDB4MWM1KV0mJihfMHg1MGZjOTA9XzB4MzNkMTYxKDB4MjM5KSksXzB4NTBmYzkwO31bXzB4NTllZDAyKDB4MTlmKV0oXzB4NDY3N2M4KXt2YXIgXzB4MzZkZWJhPV8weDU5ZWQwMjtyZXR1cm4gT2JqZWN0W18weDM2ZGViYSgweDIzYildW18weDM2ZGViYSgweDI0NCldW18weDM2ZGViYSgweDE5YSldKF8weDQ2NzdjOCk7fVtfMHg1OWVkMDIoMHgxYzMpXShfMHgyNTUzYWYpe3ZhciBfMHgzNjQ4NWI9XzB4NTllZDAyO3JldHVybiBfMHgyNTUzYWY9PT1fMHgzNjQ4NWIoMHgyNDIpfHxfMHgyNTUzYWY9PT1fMHgzNjQ4NWIoMHgxOWIpfHxfMHgyNTUzYWY9PT0nbnVtYmVyJzt9W18weDU5ZWQwMigweDFiZildKF8weDM2ODlhOCl7dmFyIF8weDU3NjJmMD1fMHg1OWVkMDI7cmV0dXJuIF8weDM2ODlhOD09PV8weDU3NjJmMCgweDFkNil8fF8weDM2ODlhOD09PV8weDU3NjJmMCgweDI2Myl8fF8weDM2ODlhOD09PV8weDU3NjJmMCgweDFkZik7fVtfMHg1OWVkMDIoMHgxZmYpXShfMHgyNWYwZGUsXzB4MzI4ZjA5LF8weDQ3YzUzZixfMHgzNzAwMmQsXzB4NDlmMjFjLF8weDUyMWM5MCl7dmFyIF8weDQwOWIxNz10aGlzO3JldHVybiBmdW5jdGlvbihfMHgxNjhmYzkpe3ZhciBfMHg1ZWFhZjE9XzB4M2Y0ZCxfMHgxNGIxZDU9XzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldWydjdXJyZW50J10sXzB4MzFjNGQxPV8weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVsnaW5kZXgnXSxfMHgxZTdkMTI9XzB4NDlmMjFjWydub2RlJ11bJ3BhcmVudCddO18weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVtfMHg1ZWFhZjEoMHgyNDUpXT1fMHgxNGIxZDUsXzB4NDlmMjFjW18weDVlYWFmMSgweDIxZSldW18weDVlYWFmMSgweDI2NCldPXR5cGVvZiBfMHgzNzAwMmQ9PV8weDVlYWFmMSgweDI2YSk/XzB4MzcwMDJkOl8weDE2OGZjOSxfMHgyNWYwZGVbJ3B1c2gnXShfMHg0MDliMTdbXzB4NWVhYWYxKDB4MjI5KV0oXzB4MzI4ZjA5LF8weDQ3YzUzZixfMHgzNzAwMmQsXzB4NDlmMjFjLF8weDUyMWM5MCkpLF8weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVsncGFyZW50J109XzB4MWU3ZDEyLF8weDQ5ZjIxY1tfMHg1ZWFhZjEoMHgyMWUpXVtfMHg1ZWFhZjEoMHgyNjQpXT1fMHgzMWM0ZDE7fTt9W18weDU5ZWQwMigweDE4OCldKF8weDQxYWE4MSxfMHgxYzdmODYsXzB4MzExZjRkLF8weDI2MDE0YixfMHgxYzc5NjcsXzB4NTc3NjQyLF8weDU5ODFhNil7dmFyIF8weDEzZjQxND1fMHg1OWVkMDIsXzB4ZThiMTIzPXRoaXM7cmV0dXJuIF8weDFjN2Y4NltfMHgxM2Y0MTQoMHgxYjUpK18weDFjNzk2N1tfMHgxM2Y0MTQoMHgyNDQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDM0MTFmNCl7dmFyIF8weDQwNjcyYj1fMHgxM2Y0MTQsXzB4MTcxODBhPV8weDU3NzY0MltfMHg0MDY3MmIoMHgyMWUpXVtfMHg0MDY3MmIoMHgyMDUpXSxfMHgzZGE0Njc9XzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI2NCldLF8weDNiNTc0Nj1fMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjQ1KV07XzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI0NSldPV8weDE3MTgwYSxfMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjY0KV09XzB4MzQxMWY0LF8weDQxYWE4MVsncHVzaCddKF8weGU4YjEyM1tfMHg0MDY3MmIoMHgyMjkpXShfMHgzMTFmNGQsXzB4MjYwMTRiLF8weDFjNzk2NyxfMHg1Nzc2NDIsXzB4NTk4MWE2KSksXzB4NTc3NjQyW18weDQwNjcyYigweDIxZSldW18weDQwNjcyYigweDI0NSldPV8weDNiNTc0NixfMHg1Nzc2NDJbXzB4NDA2NzJiKDB4MjFlKV1bXzB4NDA2NzJiKDB4MjY0KV09XzB4M2RhNDY3O307fVtfMHg1OWVkMDIoMHgyMjkpXShfMHgxZmUxMGYsXzB4M2UyNmI0LF8weGNiYzkwYSxfMHgzMGJhMDEsXzB4NGY4ZTBhKXt2YXIgXzB4MzJmZmU5PV8weDU5ZWQwMixfMHgxMzUwYWI9dGhpcztfMHg0ZjhlMGF8fChfMHg0ZjhlMGE9ZnVuY3Rpb24oXzB4MTdiYTI3LF8weDI3NWFkNil7cmV0dXJuIF8weDE3YmEyN1tfMHgyNzVhZDZdO30pO3ZhciBfMHgzMTA0ZWI9XzB4Y2JjOTBhW18weDMyZmZlOSgweDI0NCldKCksXzB4Mzk5YjA0PV8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMjIpXXx8e30sXzB4MjNmOTk4PV8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMTEpXSxfMHgxYzcxNTM9XzB4MzBiYTAxWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHgxMTNiNTQ9dGhpc1tfMHgzMmZmZTkoMHgyMTApXShfMHgxZmUxMGYpLF8weDRkMDc5Mj1fMHgzMTA0ZWI7XzB4MTEzYjU0JiZfMHg0ZDA3OTJbMHgwXT09PSdcXFxceDI3JyYmKF8weDRkMDc5Mj1fMHg0ZDA3OTJbJ3N1YnN0ciddKDB4MSxfMHg0ZDA3OTJbXzB4MzJmZmU5KDB4MjMxKV0tMHgyKSk7dmFyIF8weGNlYmY2YT1fMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjIyKV09XzB4Mzk5YjA0W18weDMyZmZlOSgweDFiNSkrXzB4NGQwNzkyXTtfMHhjZWJmNmEmJihfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjExKV09XzB4MzBiYTAxWydkZXB0aCddKzB4MSksXzB4MzBiYTAxWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHhjZWJmNmE7dmFyIF8weDQ0MzBhMD10eXBlb2YgXzB4Y2JjOTBhPT0nc3ltYm9sJyxfMHg1YjY0NjQ9eyduYW1lJzpfMHg0NDMwYTB8fF8weDExM2I1ND9fMHgzMTA0ZWI6dGhpc1tfMHgzMmZmZTkoMHgyM2MpXShfMHgzMTA0ZWIpfTtpZihfMHg0NDMwYTAmJihfMHg1YjY0NjRbXzB4MzJmZmU5KDB4MjE0KV09ITB4MCksIShfMHgzZTI2YjQ9PT1fMHgzMmZmZTkoMHgxZmQpfHxfMHgzZTI2YjQ9PT1fMHgzMmZmZTkoMHgxYTgpKSl7dmFyIF8weDM2YzVhYj10aGlzW18weDMyZmZlOSgweDFiZCldKF8weDFmZTEwZixfMHhjYmM5MGEpO2lmKF8weDM2YzVhYiYmKF8weDM2YzVhYltfMHgzMmZmZTkoMHgxZDgpXSYmKF8weDViNjQ2NFtfMHgzMmZmZTkoMHgxZTApXT0hMHgwKSxfMHgzNmM1YWJbXzB4MzJmZmU5KDB4MWMxKV0mJiFfMHhjZWJmNmEmJiFfMHgzMGJhMDFbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHg1YjY0NjRbXzB4MzJmZmU5KDB4MWYyKV09ITB4MCx0aGlzW18weDMyZmZlOSgweDIxYyldKF8weDViNjQ2NCxfMHgzMGJhMDEpLF8weDViNjQ2NDt9dmFyIF8weDQwOWMyODt0cnl7XzB4NDA5YzI4PV8weDRmOGUwYShfMHgxZmUxMGYsXzB4Y2JjOTBhKTt9Y2F0Y2goXzB4MjliZjcyKXtyZXR1cm4gXzB4NWI2NDY0PXsnbmFtZSc6XzB4MzEwNGViLCd0eXBlJzpfMHgzMmZmZTkoMHgxYTUpLCdlcnJvcic6XzB4MjliZjcyW18weDMyZmZlOSgweDFhOSldfSx0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4NWI2NDY0LF8weDMwYmEwMSksXzB4NWI2NDY0O312YXIgXzB4NThjYWJiPXRoaXNbXzB4MzJmZmU5KDB4MjVhKV0oXzB4NDA5YzI4KSxfMHg1MGMwMjE9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDU4Y2FiYik7aWYoXzB4NWI2NDY0W18weDMyZmZlOSgweDIyOCldPV8weDU4Y2FiYixfMHg1MGMwMjEpdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDViNjQ2NCxfMHgzMGJhMDEsXzB4NDA5YzI4LGZ1bmN0aW9uKCl7dmFyIF8weDUyNjQyOD1fMHgzMmZmZTk7XzB4NWI2NDY0W18weDUyNjQyOCgweDIxZCldPV8weDQwOWMyOFsndmFsdWVPZiddKCksIV8weGNlYmY2YSYmXzB4MTM1MGFiW18weDUyNjQyOCgweDI2NSldKF8weDU4Y2FiYixfMHg1YjY0NjQsXzB4MzBiYTAxLHt9KTt9KTtlbHNle3ZhciBfMHhjMDEwMj1fMHgzMGJhMDFbJ2F1dG9FeHBhbmQnXSYmXzB4MzBiYTAxW18weDMyZmZlOSgweDE5NCldPF8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMTMpXSYmXzB4MzBiYTAxWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bJ2luZGV4T2YnXShfMHg0MDljMjgpPDB4MCYmXzB4NThjYWJiIT09XzB4MzJmZmU5KDB4MjI3KSYmXzB4MzBiYTAxW18weDMyZmZlOSgweDFjNCldPF8weDMwYmEwMVtfMHgzMmZmZTkoMHgyMzYpXTtfMHhjMDEwMnx8XzB4MzBiYTAxW18weDMyZmZlOSgweDE5NCldPF8weDIzZjk5OHx8XzB4Y2ViZjZhPyh0aGlzW18weDMyZmZlOSgweDFiMSldKF8weDViNjQ2NCxfMHg0MDljMjgsXzB4MzBiYTAxLF8weGNlYmY2YXx8e30pLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg0MDljMjgsXzB4NWI2NDY0KSk6dGhpc1tfMHgzMmZmZTkoMHgyMWMpXShfMHg1YjY0NjQsXzB4MzBiYTAxLF8weDQwOWMyOCxmdW5jdGlvbigpe3ZhciBfMHg1MjNhZTc9XzB4MzJmZmU5O18weDU4Y2FiYj09PV8weDUyM2FlNygweDI1Yil8fF8weDU4Y2FiYj09PV8weDUyM2FlNygweDE5ZSl8fChkZWxldGUgXzB4NWI2NDY0W18weDUyM2FlNygweDIxZCldLF8weDViNjQ2NFtfMHg1MjNhZTcoMHgxYWYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDViNjQ2NDt9ZmluYWxseXtfMHgzMGJhMDFbXzB4MzJmZmU5KDB4MjIyKV09XzB4Mzk5YjA0LF8weDMwYmEwMVsnZGVwdGgnXT1fMHgyM2Y5OTgsXzB4MzBiYTAxW18weDMyZmZlOSgweDIwMCldPV8weDFjNzE1Mzt9fVtfMHg1OWVkMDIoMHgyNjUpXShfMHgzZWVmMjUsXzB4ODRkYjZmLF8weDEwNTUwZCxfMHg0Mjg4MTMpe3ZhciBfMHgyMjUwNDI9XzB4NTllZDAyLF8weDU5YzYyYT1fMHg0Mjg4MTNbXzB4MjI1MDQyKDB4MjJjKV18fF8weDEwNTUwZFtfMHgyMjUwNDIoMHgyMmMpXTtpZigoXzB4M2VlZjI1PT09XzB4MjI1MDQyKDB4MTliKXx8XzB4M2VlZjI1PT09XzB4MjI1MDQyKDB4MjYzKSkmJl8weDg0ZGI2ZltfMHgyMjUwNDIoMHgyMWQpXSl7bGV0IF8weDgwMWUxNz1fMHg4NGRiNmZbJ3ZhbHVlJ11bJ2xlbmd0aCddO18weDEwNTUwZFtfMHgyMjUwNDIoMHgyMmIpXSs9XzB4ODAxZTE3LF8weDEwNTUwZFtfMHgyMjUwNDIoMHgyMmIpXT5fMHgxMDU1MGRbXzB4MjI1MDQyKDB4MjJmKV0/KF8weDg0ZGI2ZltfMHgyMjUwNDIoMHgxYWYpXT0nJyxkZWxldGUgXzB4ODRkYjZmW18weDIyNTA0MigweDIxZCldKTpfMHg4MDFlMTc+XzB4NTljNjJhJiYoXzB4ODRkYjZmW18weDIyNTA0MigweDFhZildPV8weDg0ZGI2ZltfMHgyMjUwNDIoMHgyMWQpXVsnc3Vic3RyJ10oMHgwLF8weDU5YzYyYSksZGVsZXRlIF8weDg0ZGI2ZltfMHgyMjUwNDIoMHgyMWQpXSk7fX1bXzB4NTllZDAyKDB4MjEwKV0oXzB4NmJmNmZhKXt2YXIgXzB4NDhlYTcwPV8weDU5ZWQwMjtyZXR1cm4hIShfMHg2YmY2ZmEmJl8weDUyZWFkOFtfMHg0OGVhNzAoMHgxOWMpXSYmdGhpc1tfMHg0OGVhNzAoMHgxOWYpXShfMHg2YmY2ZmEpPT09XzB4NDhlYTcwKDB4MThmKSYmXzB4NmJmNmZhWydmb3JFYWNoJ10pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHhkNWZhMWQpe3ZhciBfMHgyMzViZGY9XzB4NTllZDAyO2lmKF8weGQ1ZmExZFtfMHgyMzViZGYoMHgxOTApXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4ZDVmYTFkO3ZhciBfMHg1MGJlNmY7dHJ5e18weDUwYmU2Zj1KU09OW18weDIzNWJkZigweDIwNCldKCcnK18weGQ1ZmExZCk7fWNhdGNoe18weDUwYmU2Zj0nXFxcXHgyMicrdGhpc1tfMHgyMzViZGYoMHgxOWYpXShfMHhkNWZhMWQpKydcXFxceDIyJzt9cmV0dXJuIF8weDUwYmU2ZltfMHgyMzViZGYoMHgxOTApXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDUwYmU2Zj1fMHg1MGJlNmZbXzB4MjM1YmRmKDB4MThjKV0oMHgxLF8weDUwYmU2ZltfMHgyMzViZGYoMHgyMzEpXS0weDIpOl8weDUwYmU2Zj1fMHg1MGJlNmZbXzB4MjM1YmRmKDB4MWIwKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpWydyZXBsYWNlJ10oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDUwYmU2Zjt9W18weDU5ZWQwMigweDIxYyldKF8weDE1NzZkNSxfMHgzYWQzZmIsXzB4NTgyMjE1LF8weDRkYmQzYSl7dmFyIF8weDI3ODM5Nz1fMHg1OWVkMDI7dGhpc1tfMHgyNzgzOTcoMHgyNjcpXShfMHgxNTc2ZDUsXzB4M2FkM2ZiKSxfMHg0ZGJkM2EmJl8weDRkYmQzYSgpLHRoaXNbXzB4Mjc4Mzk3KDB4MWI4KV0oXzB4NTgyMjE1LF8weDE1NzZkNSksdGhpc1tfMHgyNzgzOTcoMHgxYzgpXShfMHgxNTc2ZDUsXzB4M2FkM2ZiKTt9W18weDU5ZWQwMigweDI2NyldKF8weDJjYzE0YyxfMHg0YmMzY2Mpe3ZhciBfMHg1NTdlMDg9XzB4NTllZDAyO3RoaXNbXzB4NTU3ZTA4KDB4MWNmKV0oXzB4MmNjMTRjLF8weDRiYzNjYyksdGhpc1tfMHg1NTdlMDgoMHgyMGQpXShfMHgyY2MxNGMsXzB4NGJjM2NjKSx0aGlzW18weDU1N2UwOCgweDIwOCldKF8weDJjYzE0YyxfMHg0YmMzY2MpLHRoaXNbXzB4NTU3ZTA4KDB4MWJlKV0oXzB4MmNjMTRjLF8weDRiYzNjYyk7fVtfMHg1OWVkMDIoMHgxY2YpXShfMHgxM2JmOWEsXzB4MzYyMjFlKXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDQ2YTQwMixfMHg1OWI0ZWMpe31bJ19zZXROb2RlTGFiZWwnXShfMHg0YmUxYmYsXzB4NTNmNmY1KXt9WydfaXNVbmRlZmluZWQnXShfMHgzYzRmOTMpe3ZhciBfMHgzNmYzZmQ9XzB4NTllZDAyO3JldHVybiBfMHgzYzRmOTM9PT10aGlzW18weDM2ZjNmZCgweDI2OSldO31bXzB4NTllZDAyKDB4MWM4KV0oXzB4MTcxMGE2LF8weDNmNjc4YSl7dmFyIF8weDI0YmQyNz1fMHg1OWVkMDI7dGhpc1snX3NldE5vZGVMYWJlbCddKF8weDE3MTBhNixfMHgzZjY3OGEpLHRoaXNbXzB4MjRiZDI3KDB4MWY5KV0oXzB4MTcxMGE2KSxfMHgzZjY3OGFbXzB4MjRiZDI3KDB4MWFlKV0mJnRoaXNbXzB4MjRiZDI3KDB4MWU4KV0oXzB4MTcxMGE2KSx0aGlzW18weDI0YmQyNygweDFmNCldKF8weDE3MTBhNixfMHgzZjY3OGEpLHRoaXNbXzB4MjRiZDI3KDB4MWRjKV0oXzB4MTcxMGE2LF8weDNmNjc4YSksdGhpc1tfMHgyNGJkMjcoMHgyNTApXShfMHgxNzEwYTYpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg1YzdjNjIsXzB4NGM1MWEzKXt2YXIgXzB4MWY0MTFlPV8weDU5ZWQwMjtsZXQgXzB4MmJkZDNmO3RyeXtfMHg1MmVhZDhbXzB4MWY0MTFlKDB4MjNlKV0mJihfMHgyYmRkM2Y9XzB4NTJlYWQ4W18weDFmNDExZSgweDIzZSldWydlcnJvciddLF8weDUyZWFkOFtfMHgxZjQxMWUoMHgyM2UpXVsnZXJyb3InXT1mdW5jdGlvbigpe30pLF8weDVjN2M2MiYmdHlwZW9mIF8weDVjN2M2MltfMHgxZjQxMWUoMHgyMzEpXT09XzB4MWY0MTFlKDB4MjZhKSYmKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMzEpXT1fMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjMxKV0pO31jYXRjaHt9ZmluYWxseXtfMHgyYmRkM2YmJihfMHg1MmVhZDhbXzB4MWY0MTFlKDB4MjNlKV1bXzB4MWY0MTFlKDB4MjYyKV09XzB4MmJkZDNmKTt9aWYoXzB4NGM1MWEzW18weDFmNDExZSgweDIyOCldPT09XzB4MWY0MTFlKDB4MjZhKXx8XzB4NGM1MWEzWyd0eXBlJ109PT1fMHgxZjQxMWUoMHgxZGYpKXtpZihpc05hTihfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MjFkKV0pKV8weDRjNTFhM1tfMHgxZjQxMWUoMHgxY2UpXT0hMHgwLGRlbGV0ZSBfMHg0YzUxYTNbJ3ZhbHVlJ107ZWxzZSBzd2l0Y2goXzB4NGM1MWEzW18weDFmNDExZSgweDIxZCldKXtjYXNlIE51bWJlclsnUE9TSVRJVkVfSU5GSU5JVFknXTpfMHg0YzUxYTNbJ3Bvc2l0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHg0YzUxYTNbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4NGM1MWEzW18weDFmNDExZSgweDI0MSldPSEweDAsZGVsZXRlIF8weDRjNTFhM1sndmFsdWUnXTticmVhaztjYXNlIDB4MDp0aGlzW18weDFmNDExZSgweDIxNildKF8weDRjNTFhM1tfMHgxZjQxMWUoMHgyMWQpXSkmJihfMHg0YzUxYTNbXzB4MWY0MTFlKDB4MWQ0KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDRjNTFhM1sndHlwZSddPT09XzB4MWY0MTFlKDB4MjI3KSYmdHlwZW9mIF8weDVjN2M2MltfMHgxZjQxMWUoMHgyMDcpXT09J3N0cmluZycmJl8weDVjN2M2MltfMHgxZjQxMWUoMHgyMDcpXSYmXzB4NGM1MWEzW18weDFmNDExZSgweDIwNyldJiZfMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjA3KV0hPT1fMHg0YzUxYTNbJ25hbWUnXSYmKF8weDRjNTFhM1snZnVuY05hbWUnXT1fMHg1YzdjNjJbXzB4MWY0MTFlKDB4MjA3KV0pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDNlZGYyMCl7cmV0dXJuIDB4MS9fMHgzZWRmMjA9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVsnX3NvcnRQcm9wcyddKF8weDJjMWNhNyl7dmFyIF8weDRlNmRlMT1fMHg1OWVkMDI7IV8weDJjMWNhN1tfMHg0ZTZkZTEoMHgxZTkpXXx8IV8weDJjMWNhN1tfMHg0ZTZkZTEoMHgxZTkpXVtfMHg0ZTZkZTEoMHgyMzEpXXx8XzB4MmMxY2E3Wyd0eXBlJ109PT1fMHg0ZTZkZTEoMHgxZmQpfHxfMHgyYzFjYTdbXzB4NGU2ZGUxKDB4MjI4KV09PT1fMHg0ZTZkZTEoMHgxOWMpfHxfMHgyYzFjYTdbXzB4NGU2ZGUxKDB4MjI4KV09PT1fMHg0ZTZkZTEoMHgyMmQpfHxfMHgyYzFjYTdbXzB4NGU2ZGUxKDB4MWU5KV1bJ3NvcnQnXShmdW5jdGlvbihfMHg0OGFjYjUsXzB4NGRjNDkwKXt2YXIgXzB4NWNiMjE5PV8weDRlNmRlMSxfMHg0OWI1MzI9XzB4NDhhY2I1WyduYW1lJ11bXzB4NWNiMjE5KDB4MjU0KV0oKSxfMHg1OTljZjM9XzB4NGRjNDkwWyduYW1lJ11bXzB4NWNiMjE5KDB4MjU0KV0oKTtyZXR1cm4gXzB4NDliNTMyPF8weDU5OWNmMz8tMHgxOl8weDQ5YjUzMj5fMHg1OTljZjM/MHgxOjB4MDt9KTt9W18weDU5ZWQwMigweDFmNCldKF8weDU2ZmQ2ZCxfMHhlMTliNDApe3ZhciBfMHgyMmMyNGE9XzB4NTllZDAyO2lmKCEoXzB4ZTE5YjQwW18weDIyYzI0YSgweDIzMyldfHwhXzB4NTZmZDZkW18weDIyYzI0YSgweDFlOSldfHwhXzB4NTZmZDZkWydwcm9wcyddW18weDIyYzI0YSgweDIzMSldKSl7Zm9yKHZhciBfMHgzOTEyYmE9W10sXzB4MmViNzMyPVtdLF8weDQ4ODljNT0weDAsXzB4MWJjZjA4PV8weDU2ZmQ2ZFtfMHgyMmMyNGEoMHgxZTkpXVtfMHgyMmMyNGEoMHgyMzEpXTtfMHg0ODg5YzU8XzB4MWJjZjA4O18weDQ4ODljNSsrKXt2YXIgXzB4M2YwNGE4PV8weDU2ZmQ2ZFtfMHgyMmMyNGEoMHgxZTkpXVtfMHg0ODg5YzVdO18weDNmMDRhOFtfMHgyMmMyNGEoMHgyMjgpXT09PV8weDIyYzI0YSgweDIyNyk/XzB4MzkxMmJhW18weDIyYzI0YSgweDIxNyldKF8weDNmMDRhOCk6XzB4MmViNzMyWydwdXNoJ10oXzB4M2YwNGE4KTt9aWYoISghXzB4MmViNzMyWydsZW5ndGgnXXx8XzB4MzkxMmJhW18weDIyYzI0YSgweDIzMSldPD0weDEpKXtfMHg1NmZkNmRbXzB4MjJjMjRhKDB4MWU5KV09XzB4MmViNzMyO3ZhciBfMHhmN2NjZTE9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MzkxMmJhfTt0aGlzW18weDIyYzI0YSgweDFjZildKF8weGY3Y2NlMSxfMHhlMTliNDApLHRoaXNbXzB4MjJjMjRhKDB4MTkyKV0oXzB4ZjdjY2UxLF8weGUxOWI0MCksdGhpc1tfMHgyMmMyNGEoMHgxZjkpXShfMHhmN2NjZTEpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHhmN2NjZTEsXzB4ZTE5YjQwKSxfMHhmN2NjZTFbJ2lkJ10rPSdcXFxceDIwZicsXzB4NTZmZDZkW18weDIyYzI0YSgweDFlOSldW18weDIyYzI0YSgweDFiMildKF8weGY3Y2NlMSk7fX19W18weDU5ZWQwMigweDFkYyldKF8weDUyZjY5MyxfMHg0MzliYWYpe31bXzB4NTllZDAyKDB4MWY5KV0oXzB4MWQxNjlmKXt9W18weDU5ZWQwMigweDFiMyldKF8weDE2M2ZlOSl7dmFyIF8weDU1NWE1OT1fMHg1OWVkMDI7cmV0dXJuIEFycmF5Wydpc0FycmF5J10oXzB4MTYzZmU5KXx8dHlwZW9mIF8weDE2M2ZlOT09XzB4NTU1YTU5KDB4MjJlKSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MTYzZmU5KT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc7fVtfMHg1OWVkMDIoMHgxYmUpXShfMHgzNWY1N2QsXzB4MjA5MTk4KXt9WydfY2xlYW5Ob2RlJ10oXzB4NTdjYjE5KXt2YXIgXzB4NTM1N2RlPV8weDU5ZWQwMjtkZWxldGUgXzB4NTdjYjE5WydfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnXSxkZWxldGUgXzB4NTdjYjE5WydfaGFzU2V0T25JdHNQYXRoJ10sZGVsZXRlIF8weDU3Y2IxOVtfMHg1MzU3ZGUoMHgyNmIpXTt9W18weDU5ZWQwMigweDIwOCldKF8weDJkMjYxYixfMHgxYjUyNTUpe319bGV0IF8weDNlNTA4NT1uZXcgXzB4NTQwMmNjKCksXzB4MmFmYmEwPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDI1OTA3Nj17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDRlYmM3OShfMHg0NTBjZDEsXzB4NWExNzU5LF8weGYyNmQ0NixfMHgyOGIzZWMsXzB4MTE3M2QzLF8weGEzOWRhOSl7dmFyIF8weGE2NDQxMj1fMHg1OWVkMDI7bGV0IF8weDQ2ODQwOSxfMHg1NmY4YjA7dHJ5e18weDU2ZjhiMD1fMHg1MjNiNmEoKSxfMHg0Njg0MDk9XzB4MWM2NzQyW18weDVhMTc1OV0sIV8weDQ2ODQwOXx8XzB4NTZmOGIwLV8weDQ2ODQwOVsndHMnXT4weDFmNCYmXzB4NDY4NDA5W18weGE2NDQxMigweDFkMCldJiZfMHg0Njg0MDlbXzB4YTY0NDEyKDB4MjI0KV0vXzB4NDY4NDA5W18weGE2NDQxMigweDFkMCldPDB4NjQ/KF8weDFjNjc0MltfMHg1YTE3NTldPV8weDQ2ODQwOT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDU2ZjhiMH0sXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldPXt9KTpfMHg1NmY4YjAtXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldWyd0cyddPjB4MzImJl8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVtfMHhhNjQ0MTIoMHgxZDApXSYmXzB4MWM2NzQyW18weGE2NDQxMigweDFmNSldW18weGE2NDQxMigweDIyNCldL18weDFjNjc0MlsnaGl0cyddW18weGE2NDQxMigweDFkMCldPDB4NjQmJihfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV09e30pO2xldCBfMHgxZTc4MDU9W10sXzB4NDM2NWQ1PV8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxOTcpXXx8XzB4MWM2NzQyWydoaXRzJ11bXzB4YTY0NDEyKDB4MTk3KV0/XzB4MjU5MDc2Ol8weDJhZmJhMCxfMHgxOTI1Nzc9XzB4NGE4ZmY3PT57dmFyIF8weDRjNjIwNT1fMHhhNjQ0MTI7bGV0IF8weDFkM2ZlND17fTtyZXR1cm4gXzB4MWQzZmU0W18weDRjNjIwNSgweDFlOSldPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgxZTkpXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjI2KV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDIyNildLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMmMpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MjJjKV0sXzB4MWQzZmU0W18weDRjNjIwNSgweDIyZildPV8weDRhOGZmN1tfMHg0YzYyMDUoMHgyMmYpXSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjM2KV09XzB4NGE4ZmY3W18weDRjNjIwNSgweDIzNildLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMTMpXT1fMHg0YThmZjdbXzB4NGM2MjA1KDB4MjEzKV0sXzB4MWQzZmU0Wydzb3J0UHJvcHMnXT0hMHgxLF8weDFkM2ZlNFsnbm9GdW5jdGlvbnMnXT0hXzB4NDg4YmFkLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMTEpXT0weDEsXzB4MWQzZmU0W18weDRjNjIwNSgweDE5NCldPTB4MCxfMHgxZDNmZTRbJ2V4cElkJ109XzB4NGM2MjA1KDB4MjY2KSxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MWFjKV09J3Jvb3RfZXhwJyxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MWE0KV09ITB4MCxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjMyKV09W10sXzB4MWQzZmU0W18weDRjNjIwNSgweDFjNCldPTB4MCxfMHgxZDNmZTRbJ3Jlc29sdmVHZXR0ZXJzJ109ITB4MCxfMHgxZDNmZTRbXzB4NGM2MjA1KDB4MjJiKV09MHgwLF8weDFkM2ZlNFtfMHg0YzYyMDUoMHgyMWUpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgxZDNmZTQ7fTtmb3IodmFyIF8weDE4NmY1Nz0weDA7XzB4MTg2ZjU3PF8weDExNzNkM1snbGVuZ3RoJ107XzB4MTg2ZjU3KyspXzB4MWU3ODA1W18weGE2NDQxMigweDIxNyldKF8weDNlNTA4NVtfMHhhNjQ0MTIoMHgxYjEpXSh7J3RpbWVOb2RlJzpfMHg0NTBjZDE9PT1fMHhhNjQ0MTIoMHgyMjQpfHx2b2lkIDB4MH0sXzB4MTE3M2QzW18weDE4NmY1N10sXzB4MTkyNTc3KF8weDQzNjVkNSkse30pKTtpZihfMHg0NTBjZDE9PT1fMHhhNjQ0MTIoMHgxZDEpKXtsZXQgXzB4MzkxNGYwPUVycm9yWydzdGFja1RyYWNlTGltaXQnXTt0cnl7RXJyb3JbXzB4YTY0NDEyKDB4MjE4KV09MHgxLzB4MCxfMHgxZTc4MDVbXzB4YTY0NDEyKDB4MjE3KV0oXzB4M2U1MDg1W18weGE2NDQxMigweDFiMSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHhhNjQ0MTIoMHgyNTMpXSxfMHgxOTI1NzcoXzB4NDM2NWQ1KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MzkxNGYwO319cmV0dXJueydtZXRob2QnOl8weGE2NDQxMigweDI1ZiksJ3ZlcnNpb24nOl8weDU5M2U5MCwnYXJncyc6W3sndHMnOl8weGYyNmQ0Niwnc2Vzc2lvbic6XzB4MjhiM2VjLCdhcmdzJzpfMHgxZTc4MDUsJ2lkJzpfMHg1YTE3NTksJ2NvbnRleHQnOl8weGEzOWRhOX1dfTt9Y2F0Y2goXzB4MTAxMDI3KXtyZXR1cm57J21ldGhvZCc6XzB4YTY0NDEyKDB4MjVmKSwndmVyc2lvbic6XzB4NTkzZTkwLCdhcmdzJzpbeyd0cyc6XzB4ZjI2ZDQ2LCdzZXNzaW9uJzpfMHgyOGIzZWMsJ2FyZ3MnOlt7J3R5cGUnOl8weGE2NDQxMigweDFhNSksJ2Vycm9yJzpfMHgxMDEwMjcmJl8weDEwMTAyN1tfMHhhNjQ0MTIoMHgxYTkpXX1dLCdpZCc6XzB4NWExNzU5LCdjb250ZXh0JzpfMHhhMzlkYTl9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQ2ODQwOSYmXzB4NTZmOGIwKXtsZXQgXzB4MTE1YTY1PV8weDUyM2I2YSgpO18weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxZDApXSsrLF8weDQ2ODQwOVsndGltZSddKz1fMHg0ZjdkZmQoXzB4NTZmOGIwLF8weDExNWE2NSksXzB4NDY4NDA5Wyd0cyddPV8weDExNWE2NSxfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bXzB4YTY0NDEyKDB4MWQwKV0rKyxfMHgxYzY3NDJbJ2hpdHMnXVtfMHhhNjQ0MTIoMHgyMjQpXSs9XzB4NGY3ZGZkKF8weDU2ZjhiMCxfMHgxMTVhNjUpLF8weDFjNjc0MlsnaGl0cyddWyd0cyddPV8weDExNWE2NSwoXzB4NDY4NDA5W18weGE2NDQxMigweDFkMCldPjB4MzJ8fF8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgyMjQpXT4weDY0KSYmKF8weDQ2ODQwOVtfMHhhNjQ0MTIoMHgxOTcpXT0hMHgwKSwoXzB4MWM2NzQyWydoaXRzJ11bXzB4YTY0NDEyKDB4MWQwKV0+MHgzZTh8fF8weDFjNjc0MltfMHhhNjQ0MTIoMHgxZjUpXVtfMHhhNjQ0MTIoMHgyMjQpXT4weDEyYykmJihfMHgxYzY3NDJbXzB4YTY0NDEyKDB4MWY1KV1bXzB4YTY0NDEyKDB4MTk3KV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4NGViYzc5O30oKF8weDM4NjI4YixfMHgxZjAzY2MsXzB4MmFhNGU1LF8weGYwYjM2YyxfMHgyOTU5N2MsXzB4NDg1MmNkLF8weGYzYjhiZCxfMHgzMjZkMGYsXzB4MTExNTJjLF8weDE3MzA3OSk9Pnt2YXIgXzB4M2QxNzU1PV8weDQ5ZmI0ZDtpZihfMHgzODYyOGJbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDM4NjI4YltfMHgzZDE3NTUoMHgxOTkpXTtpZighSihfMHgzODYyOGIsXzB4MzI2ZDBmLF8weDI5NTk3YykpcmV0dXJuIF8weDM4NjI4YltfMHgzZDE3NTUoMHgxOTkpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4Mzg2MjhiW18weDNkMTc1NSgweDE5OSldO2xldCBfMHhkYWNmOTA9VyhfMHgzODYyOGIpLF8weDIwZmU3YT1fMHhkYWNmOTBbXzB4M2QxNzU1KDB4MWEyKV0sXzB4NWViN2QxPV8weGRhY2Y5MFsndGltZVN0YW1wJ10sXzB4MTE0ZDBiPV8weGRhY2Y5MFtfMHgzZDE3NTUoMHgxY2IpXSxfMHg3Njk0ZjU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgxNzY0ZDg9WShfMHgzODYyOGIsXzB4MTExNTJjLF8weDc2OTRmNSxfMHg0ODUyY2QpLF8weDE3ODg4Nj1fMHgyMDc1MzA9PntfMHg3Njk0ZjVbJ3RzJ11bXzB4MjA3NTMwXT1fMHg1ZWI3ZDEoKTt9LF8weDExZjQ3ND0oXzB4NzAwYTg2LF8weDI5Yjg2ZCk9Pnt2YXIgXzB4MmNiZWYzPV8weDNkMTc1NTtsZXQgXzB4MzBlM2EwPV8weDc2OTRmNVsndHMnXVtfMHgyOWI4NmRdO2lmKGRlbGV0ZSBfMHg3Njk0ZjVbJ3RzJ11bXzB4MjliODZkXSxfMHgzMGUzYTApe2xldCBfMHg1NmQwNDg9XzB4MjBmZTdhKF8weDMwZTNhMCxfMHg1ZWI3ZDEoKSk7XzB4MTdkOWNmKF8weDE3NjRkOChfMHgyY2JlZjMoMHgyMjQpLF8weDcwMGE4NixfMHgxMTRkMGIoKSxfMHgxMzhiMjQsW18weDU2ZDA0OF0sXzB4MjliODZkKSk7fX0sXzB4NTZhNTkyPV8weDJlMmMzMj0+XzB4MzY1NTZiPT57dmFyIF8weDViM2Q3OT1fMHgzZDE3NTU7dHJ5e18weDE3ODg4NihfMHgzNjU1NmIpLF8weDJlMmMzMihfMHgzNjU1NmIpO31maW5hbGx5e18weDM4NjI4YltfMHg1YjNkNzkoMHgyM2UpXVtfMHg1YjNkNzkoMHgyMjQpXT1fMHgyZTJjMzI7fX0sXzB4ODQyZDE5PV8weDI3YjMzMD0+XzB4NWQ3ZDAwPT57dmFyIF8weDRiYmQ5ZD1fMHgzZDE3NTU7dHJ5e2xldCBbXzB4MjAyZTI5LF8weDIzZjczYl09XzB4NWQ3ZDAwW18weDRiYmQ5ZCgweDFlMildKCc6bG9nUG9pbnRJZDonKTtfMHgxMWY0NzQoXzB4MjNmNzNiLF8weDIwMmUyOSksXzB4MjdiMzMwKF8weDIwMmUyOSk7fWZpbmFsbHl7XzB4Mzg2MjhiW18weDRiYmQ5ZCgweDIzZSldWyd0aW1lRW5kJ109XzB4MjdiMzMwO319O18weDM4NjI4YlsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOihfMHgyNWNiMzUsXzB4ZDQwMDM5KT0+e3ZhciBfMHg0OGM4Nzg9XzB4M2QxNzU1O18weDM4NjI4YltfMHg0OGM4NzgoMHgyM2UpXVtfMHg0OGM4NzgoMHgyNWYpXVtfMHg0OGM4NzgoMHgyMDcpXSE9PSdkaXNhYmxlZExvZycmJl8weDE3ZDljZihfMHgxNzY0ZDgoXzB4NDhjODc4KDB4MjVmKSxfMHgyNWNiMzUsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LF8weGQ0MDAzOSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDMzOThhOSxfMHg0NTE0ZmMpPT57dmFyIF8weDgzNWUyOD1fMHgzZDE3NTU7XzB4Mzg2MjhiW18weDgzNWUyOCgweDIzZSldWydsb2cnXVtfMHg4MzVlMjgoMHgyMDcpXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MTdkOWNmKF8weDE3NjRkOChfMHg4MzVlMjgoMHgxZDEpLF8weDMzOThhOSxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsXzB4NDUxNGZjKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDRiMzM1ND1fMHgzZDE3NTU7XzB4Mzg2MjhiW18weDRiMzM1NCgweDIzZSldW18weDRiMzM1NCgweDIyNCldPV8weDU2YTU5MihfMHgzODYyOGJbJ2NvbnNvbGUnXVtfMHg0YjMzNTQoMHgyMjQpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDQxMDI3MD1fMHgzZDE3NTU7XzB4Mzg2MjhiW18weDQxMDI3MCgweDIzZSldWyd0aW1lRW5kJ109XzB4ODQyZDE5KF8weDM4NjI4YltfMHg0MTAyNzAoMHgyM2UpXVtfMHg0MTAyNzAoMHgyM2EpXSk7fSwnYXV0b0xvZyc6KF8weDI5ZjM2YSxfMHgxNGFiOGMpPT57XzB4MTdkOWNmKF8weDE3NjRkOCgnbG9nJyxfMHgxNGFiOGMsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LFtfMHgyOWYzNmFdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg3MzA4YWUsXzB4NDY4ZmUwKT0+e3ZhciBfMHg0NjE3M2I9XzB4M2QxNzU1O18weDE3ZDljZihfMHgxNzY0ZDgoXzB4NDYxNzNiKDB4MjVmKSxfMHg3MzA4YWUsXzB4MTE0ZDBiKCksXzB4MTM4YjI0LF8weDQ2OGZlMCkpO30sJ2F1dG9UcmFjZSc6KF8weDFjYzJmMCxfMHgzNTFlMDApPT57dmFyIF8weGU0ZmNmNj1fMHgzZDE3NTU7XzB4MTdkOWNmKF8weDE3NjRkOChfMHhlNGZjZjYoMHgxZDEpLF8weDM1MWUwMCxfMHgxMTRkMGIoKSxfMHgxMzhiMjQsW18weDFjYzJmMF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NGM3YTFjLF8weDJkYjJkMSk9Pnt2YXIgXzB4MWY5OTg0PV8weDNkMTc1NTtfMHgxN2Q5Y2YoXzB4MTc2NGQ4KF8weDFmOTk4NCgweDFkMSksXzB4NGM3YTFjLF8weDExNGQwYigpLF8weDEzOGIyNCxfMHgyZGIyZDEpKTt9LCdhdXRvVGltZSc6KF8weDQ4OTdhMCxfMHgxMTQ3MTksXzB4MjgxOWJkKT0+e18weDE3ODg4NihfMHgyODE5YmQpO30sJ2F1dG9UaW1lRW5kJzooXzB4MjUyMDZiLF8weDdhYzg4MixfMHg1NzNhZWEpPT57XzB4MTFmNDc0KF8weDdhYzg4MixfMHg1NzNhZWEpO30sJ2NvdmVyYWdlJzpfMHg1OWZjMjY9PntfMHgxN2Q5Y2YoeydtZXRob2QnOidjb3ZlcmFnZScsJ3ZlcnNpb24nOl8weDQ4NTJjZCwnYXJncyc6W3snaWQnOl8weDU5ZmMyNn1dfSk7fX07bGV0IF8weDE3ZDljZj1iKF8weDM4NjI4YixfMHgxZjAzY2MsXzB4MmFhNGU1LF8weGYwYjM2YyxfMHgyOTU5N2MsXzB4MTczMDc5KSxfMHgxMzhiMjQ9XzB4Mzg2MjhiW18weDNkMTc1NSgweDI0ZCldO3JldHVybiBfMHgzODYyOGJbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHg0OWZiNGQoMHgyNmQpLF8weDQ5ZmI0ZCgweDE5ZCksXzB4NDlmYjRkKDB4MThkKSxfMHg0OWZiNGQoMHgxOGIpLCcxLjAuMCcsXzB4NDlmYjRkKDB4MWJhKSxfMHg0OWZiNGQoMHgxZWUpLF8weDQ5ZmI0ZCgweDE5MSksXzB4NDlmYjRkKDB4MTk1KSk7XCIpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=