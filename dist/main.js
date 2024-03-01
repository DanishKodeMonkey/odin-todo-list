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
    width: 20vw;
    animation: 0.3s animatetop;
}
@keyframes animatetop{
    from{top: -300px; opacity: 0}
    to{top:0; opacity: 1}
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
    >div{
        width:100%; 
        display:flex; 
        justify-content: space-between; 
        align-items: center;
        >select{width:53%; background-color: white;}
        >input{width:50%;}
        >textarea{
            width: 50%;
            height: 50px;
            resize: none;
        }
        >#project-priority{
            width:14px;
            margin-right: 48%;
        }
    }

}
.modal-button{
    width:48%;
    background-color: silver;
    border-radius: 8px;
    margin: 1%;
    font-size: 1.2vw;
}
`, "",{"version":3,"sources":["webpack://./src/modules/modals.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,sBAAsB;IACtB,WAAW;IACX,0BAA0B;AAC9B;AACA;IACI,KAAK,WAAW,EAAE,UAAU;IAC5B,GAAG,KAAK,EAAE,UAAU;AACxB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB;AACJ;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB;QACI,UAAU;QACV,YAAY;QACZ,8BAA8B;QAC9B,mBAAmB;QACnB,QAAQ,SAAS,EAAE,uBAAuB,CAAC;QAC3C,OAAO,SAAS,CAAC;QACjB;YACI,UAAU;YACV,YAAY;YACZ,YAAY;QAChB;QACA;YACI,UAAU;YACV,iBAAiB;QACrB;IACJ;;AAEJ;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB","sourcesContent":["::backdrop{\n    background-color: rgba(0, 0, 0, 0.699);\n}\n\n#modal{\n    background-color: cadetblue;\n    display: flexbox;\n    flex-direction: column;\n    width: 20vw;\n    animation: 0.3s animatetop;\n}\n@keyframes animatetop{\n    from{top: -300px; opacity: 0}\n    to{top:0; opacity: 1}\n}\n\n.header{\n    text-align: center;\n    font-size: 2vw;\n    font-weight: 900;\n    border-bottom:3px dotted black\n}\n\n.container{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    >div{\n        width:100%; \n        display:flex; \n        justify-content: space-between; \n        align-items: center;\n        >select{width:53%; background-color: white;}\n        >input{width:50%;}\n        >textarea{\n            width: 50%;\n            height: 50px;\n            resize: none;\n        }\n        >#project-priority{\n            width:14px;\n            margin-right: 48%;\n        }\n    }\n\n}\n.modal-button{\n    width:48%;\n    background-color: silver;\n    border-radius: 8px;\n    margin: 1%;\n    font-size: 1.2vw;\n}\n"],"sourceRoot":""}]);
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
    height:100%;
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
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgb(61, 61, 61);
        list-style:circle inside none;
        margin-bottom:5px;
        padding: 10px;
        border-bottom: 2px solid black;
        font-size: 100%;
        font-weight: 600;
        color: rgb(255, 255, 255);
        >div{
            display:flex; 
            justify-content: space-between;
        }
        >.overview-todo{
            font-weight: 500;
            display:flex;
            justify-content: space-between;
            background-color: silver;
            padding: 1% 10%;
            list-style: disc inside none;
            border-top:2px dashed black;
            
            font-size: 80%;
            color: rgb(0, 0, 0);
            >div>p{
                margin: 0;
            }
        }
    }
}
.delBtn{
    max-height: 25px;
    scale: 80%;
    border-radius: 10px;
    text-align: center;
    background-color: rgb(199, 0, 0);
    color:whitesmoke;
    transition: 100ms ease-in-out;
}
.delBtn:hover{
    background-color: red;
}
.delBtn:active{
    background-color: brown;
    color: grey;
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
.content-container{
    background-color: rgba(165, 42, 42, 0.801);
    grid-area: 2 / 2 / 3 / 3;
}
.project-render{
    background-color: rgb(177, 174, 167);
    border: 5px ridge black;
    margin: 2% 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: whitesmoke;
    height:68vh;
    overflow-y:scroll;
    >.project-render-title{
        background-color: rgb(54, 54, 54);
        margin-top: 0;
        font-size: 3vw;
        text-align: center;
        width: 100%;
        border-bottom: 5px ridge black;
    }
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
}

/* To be moved */

.todos-container{
    display: grid;
    width:90%;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: row;
    grid-auto-rows: auto auto;
    gap:1%;
    margin: 0 2%;
    position: relative;
    >.todo-card{
        background-color: silver;
        padding:10px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        text-align: left;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        transition: 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        
        >.todo-key-value-cont{
            >.todo-key{
                font-size: clamp(10px,1.2vw,20px);
                color: black;
                font-weight: 600;
            }
            >.todo-value{
                font-size:clamp(8px, 1vw, 12px);
                color:rgb(61, 61, 61);
                font-weight:500;
                margin-top: 0;
            }

        }
        
    }
    .todo-card:hover{
        scale:110%;
    }
    
}
.hidden-card{
    height: 100px;
    overflow:hidden;
}
.show-card{
    width:50%;
    left: 25%;
    transform: translate(0%, 10%);
    position:absolute;
    z-index: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,body{\n    margin: 0;\n    padding: 0;\n    background-color: aqua;\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n}\n\n/* Seperated for global classes */\n.credit{\n    margin-left:auto;\n    font-size: 8px;\n    color: white;\n    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    >a{\n        color: white;\n    }\n}\n.credit:hover{\n    scale:200%;\n    transform-origin: right;\n}\n\n/* Header area below */\nheader{\n    margin:0;\n    padding:0;\n    flex: 0 1 auto;\n}\n\n.banner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(./assets/images/banner.jpg);\n    background-position:right;\n    background-size: cover;\n    padding: 2vh;\n    border-bottom: 5px ridge black;\n    >.text-bg{\n        width: 100vw;\n        background-color: rgba(0, 0, 0, 0.13);\n        text-align: center;\n        color: aliceblue;\n        text-shadow: 0 0 20px black;\n        >.title{\n            font-size: 3vw;\n            font-weight: 800;\n        }\n        >.sub-title{\n            font-size: 1vw;\n            font-weight: 600;\n        }\n    }\n    >.text-bg>p{\n        margin:0\n    }\n}\n\n/* Main area below */\nmain{\n    flex: 1 1 auto;\n    display:grid;\n    grid-template: 1fr 20fr / 1fr 6fr;\n    background-color: rgba(0, 0, 0, 0.075);\n    height: 100%;\n    \n}\n.overview-tree{\n    grid-area: 1 / 1 / 3 / 2;\n    display: flex;\n    flex-direction: column;\n    height:100%;\n    background-color: rgba(0, 0, 0, 0.575);\n    border: 2px solid black;\n    color:white;\n    >.title{text-align: center;\n            font-weight: 700;\n            font-size: 1.5vw;\n        background-color: rgb(62, 87, 94);\n        padding: 10% 0}\n}\n.overview{\n    margin:0;\n    padding: 0;\n    flex-flow: column;\n    align-items: left;\n    text-align:left;\n    >.overview-project{\n        display:flex;\n        flex-direction: column;\n        justify-content: space-between;\n        background-color: rgb(61, 61, 61);\n        list-style:circle inside none;\n        margin-bottom:5px;\n        padding: 10px;\n        border-bottom: 2px solid black;\n        font-size: 100%;\n        font-weight: 600;\n        color: rgb(255, 255, 255);\n        >div{\n            display:flex; \n            justify-content: space-between;\n        }\n        >.overview-todo{\n            font-weight: 500;\n            display:flex;\n            justify-content: space-between;\n            background-color: silver;\n            padding: 1% 10%;\n            list-style: disc inside none;\n            border-top:2px dashed black;\n            \n            font-size: 80%;\n            color: rgb(0, 0, 0);\n            >div>p{\n                margin: 0;\n            }\n        }\n    }\n}\n.delBtn{\n    max-height: 25px;\n    scale: 80%;\n    border-radius: 10px;\n    text-align: center;\n    background-color: rgb(199, 0, 0);\n    color:whitesmoke;\n    transition: 100ms ease-in-out;\n}\n.delBtn:hover{\n    background-color: red;\n}\n.delBtn:active{\n    background-color: brown;\n    color: grey;\n}\n\n.toolbar{\n    display: flex;\n    justify-content: flex-start;\n    grid-area: 1 / 2 / 2 / 3;\n    background-color: rgba(165, 42, 42, 0.486);\n\n}\n\n.toolbar-button{\n    width: 10vw;\n    background-color: whitesmoke;\n    font-size: 1vw;\n    border: 1px solid black;\n    border-radius: 10px;\n    transition: 100ms ease-in-out;\n}\n.toolbar-button:hover{background-color: rgb(255, 226, 148);}\n.toolbar-button:active{background-color: aliceblue; scale:90%;}\n.content-container{\n    background-color: rgba(165, 42, 42, 0.801);\n    grid-area: 2 / 2 / 3 / 3;\n}\n.project-render{\n    background-color: rgb(177, 174, 167);\n    border: 5px ridge black;\n    margin: 2% 3%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: whitesmoke;\n    height:68vh;\n    overflow-y:scroll;\n    >.project-render-title{\n        background-color: rgb(54, 54, 54);\n        margin-top: 0;\n        font-size: 3vw;\n        text-align: center;\n        width: 100%;\n        border-bottom: 5px ridge black;\n    }\n}\n\n\n/* footer area */\nfooter{\n    flex: 0 1 40px;\n    padding-top: auto;\n    background-color: rgba(75, 75, 75, 0.466);\n    color: aliceblue;\n    font-size: 80%;\n    text-align: center;\n    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n    >a{\n        color: aliceblue;\n        text-decoration: none;\n    }\n}\nfooter:hover{\n    font-size: 150%;\n}\n\n/* To be moved */\n\n.todos-container{\n    display: grid;\n    width:90%;\n    grid-template-columns: repeat(5, 1fr);\n    grid-auto-flow: row;\n    grid-auto-rows: auto auto;\n    gap:1%;\n    margin: 0 2%;\n    position: relative;\n    >.todo-card{\n        background-color: silver;\n        padding:10px;\n        border: 1px solid black;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: column;\n        text-align: left;\n        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n        transition: 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        \n        >.todo-key-value-cont{\n            >.todo-key{\n                font-size: clamp(10px,1.2vw,20px);\n                color: black;\n                font-weight: 600;\n            }\n            >.todo-value{\n                font-size:clamp(8px, 1vw, 12px);\n                color:rgb(61, 61, 61);\n                font-weight:500;\n                margin-top: 0;\n            }\n\n        }\n        \n    }\n    .todo-card:hover{\n        scale:110%;\n    }\n    \n}\n.hidden-card{\n    height: 100px;\n    overflow:hidden;\n}\n.show-card{\n    width:50%;\n    left: 25%;\n    transform: translate(0%, 10%);\n    position:absolute;\n    z-index: 1;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");
/* harmony import */ var _modules_datahandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/datahandler */ "./src/modules/datahandler.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");





// Initialise page, checks for existing projects otherwise creates default project.
// Also activates various modules
function init() {
	/* eslint-disable */console.log(...oo_oo(`3537544812_9_1_9_37_4`,'initialiser triggered'))
	if (_modules_datahandler__WEBPACK_IMPORTED_MODULE_2__.projectsArray.length === 0) {
		/* eslint-disable */console.log(...oo_oo(`3537544812_11_2_11_63_4`,'projectsArray is empty. Creating default array'))
		let defaultProject = new _modules_projects__WEBPACK_IMPORTED_MODULE_3__["default"]()
		_modules_datahandler__WEBPACK_IMPORTED_MODULE_2__.projectsArray.push(defaultProject)
		/* eslint-disable */console.log(...oo_oo(`3537544812_14_2_14_70_4`,`default object created, name: ${defaultProject.title}`))
	} else /* eslint-disable */console.log(...oo_oo(`3537544812_15_8_15_78_4`,`Array found in projectsArray: ${_modules_datahandler__WEBPACK_IMPORTED_MODULE_2__.projectsArray[0].title}`))
	// update DOM tree
	/* eslint-disable */console.log(...oo_oo(`3537544812_17_1_17_27_4`,_modules_datahandler__WEBPACK_IMPORTED_MODULE_2__.projectsArray))
	;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.toolBar)()
	;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.renderDOM)()
	;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.updateTree)(_modules_datahandler__WEBPACK_IMPORTED_MODULE_2__.projectsArray)
}
init()
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1f7fe1=_0x37e4;(function(_0x47ffb5,_0x305716){var _0x372d84=_0x37e4,_0x325e8f=_0x47ffb5();while(!![]){try{var _0x493611=-parseInt(_0x372d84(0x225))/0x1*(-parseInt(_0x372d84(0x1d6))/0x2)+-parseInt(_0x372d84(0x1a9))/0x3*(-parseInt(_0x372d84(0x272))/0x4)+-parseInt(_0x372d84(0x25b))/0x5+-parseInt(_0x372d84(0x18b))/0x6*(-parseInt(_0x372d84(0x235))/0x7)+-parseInt(_0x372d84(0x1f1))/0x8*(parseInt(_0x372d84(0x1b9))/0x9)+parseInt(_0x372d84(0x1f2))/0xa*(-parseInt(_0x372d84(0x1ed))/0xb)+parseInt(_0x372d84(0x1e8))/0xc;if(_0x493611===_0x305716)break;else _0x325e8f['push'](_0x325e8f['shift']());}catch(_0x2b499e){_0x325e8f['push'](_0x325e8f['shift']());}}}(_0x28ed,0x45f58));function _0x28ed(){var _0x8ba4d7=[':logPointId:','_HTMLAllCollection','2376365mjTMQa','concat','_getOwnPropertyDescriptor','setter','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','replace','parse','getOwnPropertyNames','port','_reconnectTimeout','nodeModules','String','_property','autoExpandMaxDepth','_additionalMetadata','_allowedToSend','url','ws/index.js','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_console_ninja_session','resolveGetters','constructor','_propertyName','88864PeNoQn','props','autoExpand','_getOwnPropertyNames','method','level','create','onclose','versions','expId','453786hZRTMQ','_isPrimitiveWrapperType','_inNextEdge','1709311016522','_connectToHostNow','hasOwnProperty','index','_setNodeExpressionPath','stack','_ws','autoExpandPropertyCount','edge','Buffer','object','set','ws://','_cleanNode','astro','_type','_webSocketErrorDocsLink','catch','prototype','_p_','timeEnd','WebSocket','global','slice','Error','_isPrimitiveType','_isUndefined','54iRnQJN','_objectToString','trace','isArray','_quotedRegExp','time','','_setNodeLabel','','unknown','funcName','Set','\\x20browser','reduceLimits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','getOwnPropertyDescriptor','9VpHEMS','includes','_Symbol','negativeInfinity','function','message','nan','onmessage','_dateToString','root_exp','rootExpression','dockerizedApp','_WebSocketClass','getter','hostname','warn','array','_isMap','elapsed','_allowedToConnectOnSend','log','NEGATIVE_INFINITY','cappedElements','_processTreeNodeResult','reload','_connected','value','readyState','autoExpandLimit','14twUgXH',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.290/node_modules\",'_treeNodePropertiesAfterFullValue','...','string','_maxConnectAttemptCount','_capIfString','allStrLength','coverage','map','pop','_addLoadNode','elements','number','Map','path','[object\\x20Array]','NEXT_RUNTIME','8772096aBeiNa','_regExpToString','_setNodeId','totalStrLength','data','275zCfauG','negativeZero','symbol','getWebSocketClass','3827464fsivUc','99430rMpwcs','push','_connectAttemptCount','env','split','null','_setNodePermissions','type','_keyStrRegExp','__es'+'Module','node','_hasMapOnItsPath','toString','_consoleNinjaAllowedToStart','close','send','_isNegativeZero','then','_inBrowser','unref','name','unshift','hits','webpack','_socket','_disposeWebsocket','34879','length','_blacklistedProperty','perf_hooks','expressionsToEvaluate','_isSet','_sendErrorMessage','127.0.0.1','process','host','join','HTMLAllCollection','_addFunctionsNode','_treeNodePropertiesBeforeFullValue','getOwnPropertySymbols','strLength','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','call','_getOwnPropertySymbols','_hasSymbolPropertyOnItsPath','depth','_WebSocket','bind','_setNodeQueryPath','isExpressionToEvaluate','29525YGRNBJ','count','noFunctions','_attemptToReconnectShortly','stackTraceLimit','Number','performance','test','valueOf','positiveInfinity','_p_length','error','onerror','_console_ninja','[object\\x20Map]','cappedProps','14hxDKYV','indexOf','forEach','parent','get','serialize','getPrototypeOf','_addProperty','timeStamp','location','capped','undefined','_connecting','[object\\x20BigInt]','_setNodeExpandableState','enumerable','autoExpandPreviousObjects','https://tinyurl.com/37x8b79t','\\x20server','hrtime','sortProps','match','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','sort','toLowerCase','_undefined','onopen','now','POSITIVE_INFINITY','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_isArray','console','_addObjectProperty','gateway.docker.internal'];_0x28ed=function(){return _0x8ba4d7;};return _0x28ed();}function _0x37e4(_0x69e146,_0x3db28d){var _0x28ed6e=_0x28ed();return _0x37e4=function(_0x37e460,_0x19a257){_0x37e460=_0x37e460-0x189;var _0x1890cd=_0x28ed6e[_0x37e460];return _0x1890cd;},_0x37e4(_0x69e146,_0x3db28d);}var j=Object[_0x1f7fe1(0x278)],H=Object['defineProperty'],G=Object[_0x1f7fe1(0x1b8)],ee=Object[_0x1f7fe1(0x262)],te=Object[_0x1f7fe1(0x23b)],ne=Object[_0x1f7fe1(0x1a0)][_0x1f7fe1(0x190)],re=(_0x5ac642,_0x1cf560,_0x561553,_0x20c447)=>{var _0x45c202=_0x1f7fe1;if(_0x1cf560&&typeof _0x1cf560==_0x45c202(0x198)||typeof _0x1cf560==_0x45c202(0x1bd)){for(let _0x508a2c of ee(_0x1cf560))!ne[_0x45c202(0x21d)](_0x5ac642,_0x508a2c)&&_0x508a2c!==_0x561553&&H(_0x5ac642,_0x508a2c,{'get':()=>_0x1cf560[_0x508a2c],'enumerable':!(_0x20c447=G(_0x1cf560,_0x508a2c))||_0x20c447[_0x45c202(0x244)]});}return _0x5ac642;},x=(_0x1a9261,_0xb842e1,_0x3a123d)=>(_0x3a123d=_0x1a9261!=null?j(te(_0x1a9261)):{},re(_0xb842e1||!_0x1a9261||!_0x1a9261[_0x1f7fe1(0x1fb)]?H(_0x3a123d,'default',{'value':_0x1a9261,'enumerable':!0x0}):_0x3a123d,_0x1a9261)),X=class{constructor(_0x258946,_0x4abc24,_0x53a90a,_0x68db45,_0x5457e8){var _0x2597cb=_0x1f7fe1;this[_0x2597cb(0x1a4)]=_0x258946,this[_0x2597cb(0x215)]=_0x4abc24,this[_0x2597cb(0x263)]=_0x53a90a,this[_0x2597cb(0x265)]=_0x68db45,this['dockerizedApp']=_0x5457e8,this['_allowedToSend']=!0x0,this[_0x2597cb(0x1cc)]=!0x0,this[_0x2597cb(0x1d2)]=!0x1,this[_0x2597cb(0x241)]=!0x1,this[_0x2597cb(0x18d)]=_0x258946[_0x2597cb(0x214)]?.['env']?.[_0x2597cb(0x1e7)]==='edge',this[_0x2597cb(0x204)]=!this[_0x2597cb(0x1a4)][_0x2597cb(0x214)]?.[_0x2597cb(0x189)]?.[_0x2597cb(0x1fc)]&&!this[_0x2597cb(0x18d)],this['_WebSocketClass']=null,this[_0x2597cb(0x1f4)]=0x0,this[_0x2597cb(0x1db)]=0x14,this[_0x2597cb(0x19e)]=_0x2597cb(0x246),this[_0x2597cb(0x212)]=(this[_0x2597cb(0x204)]?_0x2597cb(0x25f):_0x2597cb(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x1f7fe1(0x1f0)](){var _0x3361a6=_0x1f7fe1;if(this[_0x3361a6(0x1c5)])return this['_WebSocketClass'];let _0x240d8f;if(this[_0x3361a6(0x204)]||this['_inNextEdge'])_0x240d8f=this['global'][_0x3361a6(0x1a3)];else{if(this['global']['process']?.[_0x3361a6(0x221)])_0x240d8f=this['global'][_0x3361a6(0x214)]?.[_0x3361a6(0x221)];else try{let _0x425912=await import(_0x3361a6(0x1e5));_0x240d8f=(await import((await import(_0x3361a6(0x26b)))['pathToFileURL'](_0x425912[_0x3361a6(0x216)](this[_0x3361a6(0x265)],_0x3361a6(0x26c)))[_0x3361a6(0x1fe)]()))['default'];}catch{try{_0x240d8f=require(require(_0x3361a6(0x1e5))[_0x3361a6(0x216)](this[_0x3361a6(0x265)],'ws'));}catch{throw new Error(_0x3361a6(0x21c));}}}return this[_0x3361a6(0x1c5)]=_0x240d8f,_0x240d8f;}[_0x1f7fe1(0x18f)](){var _0x1041c7=_0x1f7fe1;this[_0x1041c7(0x241)]||this[_0x1041c7(0x1d2)]||this[_0x1041c7(0x1f4)]>=this['_maxConnectAttemptCount']||(this[_0x1041c7(0x1cc)]=!0x1,this[_0x1041c7(0x241)]=!0x0,this[_0x1041c7(0x1f4)]++,this[_0x1041c7(0x194)]=new Promise((_0x1d47a8,_0x3026d6)=>{var _0xdd1106=_0x1041c7;this[_0xdd1106(0x1f0)]()[_0xdd1106(0x203)](_0x4cc8ff=>{var _0x47dac7=_0xdd1106;let _0x1d10d0=new _0x4cc8ff(_0x47dac7(0x19a)+(!this[_0x47dac7(0x204)]&&this[_0x47dac7(0x1c4)]?_0x47dac7(0x258):this['host'])+':'+this['port']);_0x1d10d0[_0x47dac7(0x231)]=()=>{var _0x836ce0=_0x47dac7;this[_0x836ce0(0x26a)]=!0x1,this['_disposeWebsocket'](_0x1d10d0),this[_0x836ce0(0x228)](),_0x3026d6(new Error('logger\\x20websocket\\x20error'));},_0x1d10d0[_0x47dac7(0x250)]=()=>{var _0x316d98=_0x47dac7;this['_inBrowser']||_0x1d10d0[_0x316d98(0x20a)]&&_0x1d10d0[_0x316d98(0x20a)]['unref']&&_0x1d10d0[_0x316d98(0x20a)][_0x316d98(0x205)](),_0x1d47a8(_0x1d10d0);},_0x1d10d0['onclose']=()=>{var _0x31901b=_0x47dac7;this[_0x31901b(0x1cc)]=!0x0,this[_0x31901b(0x20b)](_0x1d10d0),this[_0x31901b(0x228)]();},_0x1d10d0[_0x47dac7(0x1c0)]=_0x934319=>{var _0x2f2917=_0x47dac7;try{_0x934319&&_0x934319[_0x2f2917(0x1ec)]&&this[_0x2f2917(0x204)]&&JSON[_0x2f2917(0x261)](_0x934319['data'])[_0x2f2917(0x276)]===_0x2f2917(0x1d1)&&this[_0x2f2917(0x1a4)][_0x2f2917(0x23e)]['reload']();}catch{}};})[_0xdd1106(0x203)](_0x479578=>(this[_0xdd1106(0x1d2)]=!0x0,this[_0xdd1106(0x241)]=!0x1,this[_0xdd1106(0x1cc)]=!0x1,this[_0xdd1106(0x26a)]=!0x0,this[_0xdd1106(0x1f4)]=0x0,_0x479578))[_0xdd1106(0x19f)](_0x4edd30=>(this[_0xdd1106(0x1d2)]=!0x1,this['_connecting']=!0x1,console[_0xdd1106(0x1c8)](_0xdd1106(0x24c)+this[_0xdd1106(0x19e)]),_0x3026d6(new Error(_0xdd1106(0x1b7)+(_0x4edd30&&_0x4edd30[_0xdd1106(0x1be)])))));}));}['_disposeWebsocket'](_0x49318d){var _0x4323c0=_0x1f7fe1;this[_0x4323c0(0x1d2)]=!0x1,this[_0x4323c0(0x241)]=!0x1;try{_0x49318d[_0x4323c0(0x279)]=null,_0x49318d[_0x4323c0(0x231)]=null,_0x49318d[_0x4323c0(0x250)]=null;}catch{}try{_0x49318d[_0x4323c0(0x1d4)]<0x2&&_0x49318d[_0x4323c0(0x200)]();}catch{}}['_attemptToReconnectShortly'](){var _0xafae58=_0x1f7fe1;clearTimeout(this[_0xafae58(0x264)]),!(this[_0xafae58(0x1f4)]>=this[_0xafae58(0x1db)])&&(this[_0xafae58(0x264)]=setTimeout(()=>{var _0x17ce1b=_0xafae58;this[_0x17ce1b(0x1d2)]||this[_0x17ce1b(0x241)]||(this[_0x17ce1b(0x18f)](),this['_ws']?.[_0x17ce1b(0x19f)](()=>this[_0x17ce1b(0x228)]()));},0x1f4),this[_0xafae58(0x264)][_0xafae58(0x205)]&&this['_reconnectTimeout'][_0xafae58(0x205)]());}async[_0x1f7fe1(0x201)](_0x16766e){var _0x150c4e=_0x1f7fe1;try{if(!this[_0x150c4e(0x26a)])return;this[_0x150c4e(0x1cc)]&&this[_0x150c4e(0x18f)](),(await this[_0x150c4e(0x194)])[_0x150c4e(0x201)](JSON['stringify'](_0x16766e));}catch(_0x58d9aa){console[_0x150c4e(0x1c8)](this[_0x150c4e(0x212)]+':\\x20'+(_0x58d9aa&&_0x58d9aa[_0x150c4e(0x1be)])),this[_0x150c4e(0x26a)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x1266e6,_0x5e5ebe,_0x3659b0,_0x42e04e,_0x503754,_0xf95501){var _0x1cbf77=_0x1f7fe1;let _0x1c2814=_0x3659b0['split'](',')[_0x1cbf77(0x1df)](_0x290148=>{var _0x4336e5=_0x1cbf77;try{_0x1266e6[_0x4336e5(0x26e)]||((_0x503754==='next.js'||_0x503754==='remix'||_0x503754===_0x4336e5(0x19c)||_0x503754==='angular')&&(_0x503754+=!_0x1266e6[_0x4336e5(0x214)]?.['versions']?.[_0x4336e5(0x1fc)]&&_0x1266e6[_0x4336e5(0x214)]?.[_0x4336e5(0x1f5)]?.['NEXT_RUNTIME']!==_0x4336e5(0x196)?_0x4336e5(0x1b5):_0x4336e5(0x247)),_0x1266e6['_console_ninja_session']={'id':+new Date(),'tool':_0x503754});let _0xd2e366=new X(_0x1266e6,_0x5e5ebe,_0x290148,_0x42e04e,_0xf95501);return _0xd2e366[_0x4336e5(0x201)][_0x4336e5(0x222)](_0xd2e366);}catch(_0x46304f){return console['warn'](_0x4336e5(0x254),_0x46304f&&_0x46304f[_0x4336e5(0x1be)]),()=>{};}});return _0x130af4=>_0x1c2814[_0x1cbf77(0x237)](_0x353891=>_0x353891(_0x130af4));}function W(_0x23fa9f){var _0x409e0d=_0x1f7fe1;let _0x4e8289=function(_0x1deaf8,_0x175b0b){return _0x175b0b-_0x1deaf8;},_0x52630f;if(_0x23fa9f[_0x409e0d(0x22b)])_0x52630f=function(){var _0x343bf=_0x409e0d;return _0x23fa9f[_0x343bf(0x22b)][_0x343bf(0x251)]();};else{if(_0x23fa9f[_0x409e0d(0x214)]&&_0x23fa9f[_0x409e0d(0x214)][_0x409e0d(0x248)]&&_0x23fa9f[_0x409e0d(0x214)]?.[_0x409e0d(0x1f5)]?.[_0x409e0d(0x1e7)]!==_0x409e0d(0x196))_0x52630f=function(){var _0x3f21b4=_0x409e0d;return _0x23fa9f[_0x3f21b4(0x214)][_0x3f21b4(0x248)]();},_0x4e8289=function(_0x5ba0ff,_0x3f75fb){return 0x3e8*(_0x3f75fb[0x0]-_0x5ba0ff[0x0])+(_0x3f75fb[0x1]-_0x5ba0ff[0x1])/0xf4240;};else try{let {performance:_0x830f41}=require(_0x409e0d(0x20f));_0x52630f=function(){return _0x830f41['now']();};}catch{_0x52630f=function(){return+new Date();};}}return{'elapsed':_0x4e8289,'timeStamp':_0x52630f,'now':()=>Date[_0x409e0d(0x251)]()};}function J(_0x4220c1,_0x2aef74,_0x3cf029){var _0x551246=_0x1f7fe1;if(_0x4220c1[_0x551246(0x1ff)]!==void 0x0)return _0x4220c1['_consoleNinjaAllowedToStart'];let _0x1283f4=_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x189)]?.[_0x551246(0x1fc)]||_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x1f5)]?.['NEXT_RUNTIME']===_0x551246(0x196);return _0x1283f4&&_0x3cf029==='nuxt'?_0x4220c1[_0x551246(0x1ff)]=!0x1:_0x4220c1[_0x551246(0x1ff)]=_0x1283f4||!_0x2aef74||_0x4220c1['location']?.['hostname']&&_0x2aef74[_0x551246(0x1ba)](_0x4220c1['location'][_0x551246(0x1c7)]),_0x4220c1['_consoleNinjaAllowedToStart'];}function Y(_0x4a231c,_0x39e58b,_0x2e0b83,_0x12de0b){var _0x11d2fd=_0x1f7fe1;_0x4a231c=_0x4a231c,_0x39e58b=_0x39e58b,_0x2e0b83=_0x2e0b83,_0x12de0b=_0x12de0b;let _0x35cb99=W(_0x4a231c),_0x27fc15=_0x35cb99[_0x11d2fd(0x1cb)],_0x9e4c4d=_0x35cb99['timeStamp'];class _0x33872f{constructor(){var _0x25774f=_0x11d2fd;this[_0x25774f(0x1fa)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x25774f(0x1ad)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x4a231c[_0x25774f(0x240)],this[_0x25774f(0x25a)]=_0x4a231c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x25774f(0x275)]=Object[_0x25774f(0x262)],this['_Symbol']=_0x4a231c['Symbol'],this['_regExpToString']=RegExp[_0x25774f(0x1a0)]['toString'],this[_0x25774f(0x1c1)]=Date[_0x25774f(0x1a0)][_0x25774f(0x1fe)];}[_0x11d2fd(0x23a)](_0x3811cf,_0x356064,_0x4f2c04,_0x1eef20){var _0x44970c=_0x11d2fd,_0x2c428f=this,_0x4e9b94=_0x4f2c04[_0x44970c(0x274)];function _0x56a9a7(_0x56ecc6,_0x45009d,_0x30aaee){var _0x4e0075=_0x44970c;_0x45009d['type']=_0x4e0075(0x1b2),_0x45009d[_0x4e0075(0x230)]=_0x56ecc6[_0x4e0075(0x1be)],_0x3032b6=_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)],_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)]=_0x45009d,_0x2c428f[_0x4e0075(0x219)](_0x45009d,_0x30aaee);}try{_0x4f2c04[_0x44970c(0x277)]++,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1f3)](_0x356064);var _0x4839bd,_0x4b4f61,_0x1ebfe1,_0x244d80,_0xbe4d9a=[],_0xdfac7a=[],_0x1705af,_0x3e3e7f=this[_0x44970c(0x19d)](_0x356064),_0x1c36fe=_0x3e3e7f===_0x44970c(0x1c9),_0x13b536=!0x1,_0x5b148b=_0x3e3e7f==='function',_0x575384=this[_0x44970c(0x1a7)](_0x3e3e7f),_0x34250c=this['_isPrimitiveWrapperType'](_0x3e3e7f),_0x3e85e0=_0x575384||_0x34250c,_0x25c339={},_0x16e036=0x0,_0x3cc5fd=!0x1,_0x3032b6,_0x8dc30c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f2c04[_0x44970c(0x220)]){if(_0x1c36fe){if(_0x4b4f61=_0x356064[_0x44970c(0x20d)],_0x4b4f61>_0x4f2c04['elements']){for(_0x1ebfe1=0x0,_0x244d80=_0x4f2c04[_0x44970c(0x1e2)],_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a['push'](_0x2c428f['_addProperty'](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));_0x3811cf[_0x44970c(0x1cf)]=!0x0;}else{for(_0x1ebfe1=0x0,_0x244d80=_0x4b4f61,_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x23c)](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));}_0x4f2c04[_0x44970c(0x195)]+=_0xdfac7a[_0x44970c(0x20d)];}if(!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f==='undefined')&&!_0x575384&&_0x3e3e7f!==_0x44970c(0x266)&&_0x3e3e7f!==_0x44970c(0x197)&&_0x3e3e7f!==_0x44970c(0x24b)){var _0xb99f3c=_0x1eef20[_0x44970c(0x273)]||_0x4f2c04[_0x44970c(0x273)];if(this[_0x44970c(0x211)](_0x356064)?(_0x4839bd=0x0,_0x356064[_0x44970c(0x237)](function(_0x19c16a){var _0xbae55e=_0x44970c;if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04[_0xbae55e(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0xbae55e(0x195)]>_0x4f2c04[_0xbae55e(0x1d5)]){_0x3cc5fd=!0x0;return;}_0xdfac7a[_0xbae55e(0x1f3)](_0x2c428f[_0xbae55e(0x23c)](_0xbe4d9a,_0x356064,_0xbae55e(0x1b4),_0x4839bd++,_0x4f2c04,function(_0x232a17){return function(){return _0x232a17;};}(_0x19c16a)));})):this[_0x44970c(0x1ca)](_0x356064)&&_0x356064[_0x44970c(0x237)](function(_0x49e5a8,_0x14bf92){var _0x21c289=_0x44970c;if(_0x16e036++,_0x4f2c04[_0x21c289(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04['isExpressionToEvaluate']&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0x21c289(0x195)]>_0x4f2c04['autoExpandLimit']){_0x3cc5fd=!0x0;return;}var _0x57858b=_0x14bf92[_0x21c289(0x1fe)]();_0x57858b[_0x21c289(0x20d)]>0x64&&(_0x57858b=_0x57858b[_0x21c289(0x1a5)](0x0,0x64)+_0x21c289(0x1d9)),_0xdfac7a[_0x21c289(0x1f3)](_0x2c428f[_0x21c289(0x23c)](_0xbe4d9a,_0x356064,_0x21c289(0x1e4),_0x57858b,_0x4f2c04,function(_0x311c38){return function(){return _0x311c38;};}(_0x49e5a8)));}),!_0x13b536){try{for(_0x1705af in _0x356064)if(!(_0x1c36fe&&_0x8dc30c['test'](_0x1705af))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)){if(_0x16e036++,_0x4f2c04[_0x44970c(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f['_addObjectProperty'](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}catch{}if(_0x25c339[_0x44970c(0x22f)]=!0x0,_0x5b148b&&(_0x25c339['_p_name']=!0x0),!_0x3cc5fd){var _0x9e31=[][_0x44970c(0x25c)](this[_0x44970c(0x275)](_0x356064))[_0x44970c(0x25c)](this[_0x44970c(0x21e)](_0x356064));for(_0x4839bd=0x0,_0x4b4f61=_0x9e31[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)if(_0x1705af=_0x9e31[_0x4839bd],!(_0x1c36fe&&_0x8dc30c[_0x44970c(0x22c)](_0x1705af[_0x44970c(0x1fe)]()))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)&&!_0x25c339[_0x44970c(0x1a1)+_0x1705af[_0x44970c(0x1fe)]()]){if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x257)](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}}}}if(_0x3811cf['type']=_0x3e3e7f,_0x3e85e0?(_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x22d)](),this[_0x44970c(0x1dc)](_0x3e3e7f,_0x3811cf,_0x4f2c04,_0x1eef20)):_0x3e3e7f==='date'?_0x3811cf['value']=this[_0x44970c(0x1c1)]['call'](_0x356064):_0x3e3e7f===_0x44970c(0x24b)?_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x1fe)]():_0x3e3e7f==='RegExp'?_0x3811cf['value']=this[_0x44970c(0x1e9)][_0x44970c(0x21d)](_0x356064):_0x3e3e7f===_0x44970c(0x1ef)&&this[_0x44970c(0x1bb)]?_0x3811cf[_0x44970c(0x1d3)]=this['_Symbol'][_0x44970c(0x1a0)][_0x44970c(0x1fe)][_0x44970c(0x21d)](_0x356064):!_0x4f2c04['depth']&&!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f===_0x44970c(0x240))&&(delete _0x3811cf['value'],_0x3811cf['capped']=!0x0),_0x3cc5fd&&(_0x3811cf[_0x44970c(0x234)]=!0x0),_0x3032b6=_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)],_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3811cf,this['_treeNodePropertiesBeforeFullValue'](_0x3811cf,_0x4f2c04),_0xdfac7a[_0x44970c(0x20d)]){for(_0x4839bd=0x0,_0x4b4f61=_0xdfac7a[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)_0xdfac7a[_0x4839bd](_0x4839bd);}_0xbe4d9a['length']&&(_0x3811cf[_0x44970c(0x273)]=_0xbe4d9a);}catch(_0x370d44){_0x56a9a7(_0x370d44,_0x3811cf,_0x4f2c04);}return this[_0x44970c(0x269)](_0x356064,_0x3811cf),this['_treeNodePropertiesAfterFullValue'](_0x3811cf,_0x4f2c04),_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3032b6,_0x4f2c04['level']--,_0x4f2c04['autoExpand']=_0x4e9b94,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1e0)](),_0x3811cf;}[_0x11d2fd(0x21e)](_0x48b7d6){var _0x3de307=_0x11d2fd;return Object['getOwnPropertySymbols']?Object[_0x3de307(0x21a)](_0x48b7d6):[];}[_0x11d2fd(0x211)](_0x3763e4){var _0x55b8a1=_0x11d2fd;return!!(_0x3763e4&&_0x4a231c[_0x55b8a1(0x1b4)]&&this['_objectToString'](_0x3763e4)==='[object\\x20Set]'&&_0x3763e4[_0x55b8a1(0x237)]);}[_0x11d2fd(0x20e)](_0x4769e4,_0x48cf79,_0x5a42e8){var _0x28c014=_0x11d2fd;return _0x5a42e8[_0x28c014(0x227)]?typeof _0x4769e4[_0x48cf79]==_0x28c014(0x1bd):!0x1;}['_type'](_0x49dfdd){var _0x55173a=_0x11d2fd,_0x912292='';return _0x912292=typeof _0x49dfdd,_0x912292===_0x55173a(0x198)?this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x1e6)?_0x912292=_0x55173a(0x1c9):this['_objectToString'](_0x49dfdd)==='[object\\x20Date]'?_0x912292='date':this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x242)?_0x912292=_0x55173a(0x24b):_0x49dfdd===null?_0x912292=_0x55173a(0x1f7):_0x49dfdd[_0x55173a(0x270)]&&(_0x912292=_0x49dfdd['constructor'][_0x55173a(0x206)]||_0x912292):_0x912292==='undefined'&&this[_0x55173a(0x25a)]&&_0x49dfdd instanceof this['_HTMLAllCollection']&&(_0x912292=_0x55173a(0x217)),_0x912292;}[_0x11d2fd(0x1aa)](_0x43d414){var _0x57de40=_0x11d2fd;return Object[_0x57de40(0x1a0)][_0x57de40(0x1fe)][_0x57de40(0x21d)](_0x43d414);}[_0x11d2fd(0x1a7)](_0xcdaeb7){var _0x192334=_0x11d2fd;return _0xcdaeb7==='boolean'||_0xcdaeb7===_0x192334(0x1da)||_0xcdaeb7==='number';}[_0x11d2fd(0x18c)](_0x5ca27f){var _0x346078=_0x11d2fd;return _0x5ca27f==='Boolean'||_0x5ca27f===_0x346078(0x266)||_0x5ca27f===_0x346078(0x22a);}[_0x11d2fd(0x23c)](_0x1b8706,_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1){var _0x5d7e22=this;return function(_0x2b580b){var _0x47290f=_0x37e4,_0xfcc17a=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x253)],_0x194d30=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)],_0x1fedfd=_0x107b05[_0x47290f(0x1fc)]['parent'];_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x238)]=_0xfcc17a,_0x107b05['node'][_0x47290f(0x191)]=typeof _0x5a7a70=='number'?_0x5a7a70:_0x2b580b,_0x1b8706[_0x47290f(0x1f3)](_0x5d7e22[_0x47290f(0x267)](_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1)),_0x107b05[_0x47290f(0x1fc)]['parent']=_0x1fedfd,_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)]=_0x194d30;};}['_addObjectProperty'](_0x16588b,_0x11cea7,_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6){var _0x243e50=_0x11d2fd,_0x44abba=this;return _0x11cea7[_0x243e50(0x1a1)+_0x1c01d4[_0x243e50(0x1fe)]()]=!0x0,function(_0x1f4d51){var _0x4bdc1f=_0x243e50,_0x44d283=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x253)],_0x4fb828=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)],_0x3169d7=_0x4d4b6b['node'][_0x4bdc1f(0x238)];_0x4d4b6b[_0x4bdc1f(0x1fc)]['parent']=_0x44d283,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x1f4d51,_0x16588b['push'](_0x44abba[_0x4bdc1f(0x267)](_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6)),_0x4d4b6b['node'][_0x4bdc1f(0x238)]=_0x3169d7,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x4fb828;};}[_0x11d2fd(0x267)](_0x2ee2f9,_0x504c63,_0x2be839,_0x5d4bfe,_0x466772){var _0x280f6e=_0x11d2fd,_0xc6afe0=this;_0x466772||(_0x466772=function(_0xe7fdf,_0x44194f){return _0xe7fdf[_0x44194f];});var _0x298103=_0x2be839[_0x280f6e(0x1fe)](),_0x28f594=_0x5d4bfe[_0x280f6e(0x210)]||{},_0x5c79a8=_0x5d4bfe[_0x280f6e(0x220)],_0x20bebc=_0x5d4bfe[_0x280f6e(0x224)];try{var _0x27f153=this[_0x280f6e(0x1ca)](_0x2ee2f9),_0x14178a=_0x298103;_0x27f153&&_0x14178a[0x0]==='\\x27'&&(_0x14178a=_0x14178a['substr'](0x1,_0x14178a[_0x280f6e(0x20d)]-0x2));var _0x126371=_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594['_p_'+_0x14178a];_0x126371&&(_0x5d4bfe[_0x280f6e(0x220)]=_0x5d4bfe[_0x280f6e(0x220)]+0x1),_0x5d4bfe['isExpressionToEvaluate']=!!_0x126371;var _0x239579=typeof _0x2be839==_0x280f6e(0x1ef),_0x2075b5={'name':_0x239579||_0x27f153?_0x298103:this[_0x280f6e(0x271)](_0x298103)};if(_0x239579&&(_0x2075b5[_0x280f6e(0x1ef)]=!0x0),!(_0x504c63==='array'||_0x504c63===_0x280f6e(0x1a6))){var _0x3d2d8e=this[_0x280f6e(0x25d)](_0x2ee2f9,_0x2be839);if(_0x3d2d8e&&(_0x3d2d8e[_0x280f6e(0x199)]&&(_0x2075b5[_0x280f6e(0x25e)]=!0x0),_0x3d2d8e[_0x280f6e(0x239)]&&!_0x126371&&!_0x5d4bfe['resolveGetters']))return _0x2075b5[_0x280f6e(0x1c6)]=!0x0,this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x216f35;try{_0x216f35=_0x466772(_0x2ee2f9,_0x2be839);}catch(_0x50f558){return _0x2075b5={'name':_0x298103,'type':_0x280f6e(0x1b2),'error':_0x50f558[_0x280f6e(0x1be)]},this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x4dc249=this[_0x280f6e(0x19d)](_0x216f35),_0x5e863a=this[_0x280f6e(0x1a7)](_0x4dc249);if(_0x2075b5[_0x280f6e(0x1f9)]=_0x4dc249,_0x5e863a)this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x5ca40f=_0x280f6e;_0x2075b5[_0x5ca40f(0x1d3)]=_0x216f35[_0x5ca40f(0x22d)](),!_0x126371&&_0xc6afe0[_0x5ca40f(0x1dc)](_0x4dc249,_0x2075b5,_0x5d4bfe,{});});else{var _0x1e54db=_0x5d4bfe['autoExpand']&&_0x5d4bfe[_0x280f6e(0x277)]<_0x5d4bfe[_0x280f6e(0x268)]&&_0x5d4bfe[_0x280f6e(0x245)][_0x280f6e(0x236)](_0x216f35)<0x0&&_0x4dc249!==_0x280f6e(0x1bd)&&_0x5d4bfe[_0x280f6e(0x195)]<_0x5d4bfe[_0x280f6e(0x1d5)];_0x1e54db||_0x5d4bfe['level']<_0x5c79a8||_0x126371?(this[_0x280f6e(0x23a)](_0x2075b5,_0x216f35,_0x5d4bfe,_0x126371||{}),this[_0x280f6e(0x269)](_0x216f35,_0x2075b5)):this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x519504=_0x280f6e;_0x4dc249===_0x519504(0x1f7)||_0x4dc249===_0x519504(0x240)||(delete _0x2075b5[_0x519504(0x1d3)],_0x2075b5[_0x519504(0x23f)]=!0x0);});}return _0x2075b5;}finally{_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594,_0x5d4bfe[_0x280f6e(0x220)]=_0x5c79a8,_0x5d4bfe[_0x280f6e(0x224)]=_0x20bebc;}}['_capIfString'](_0x3fc6ce,_0x478b61,_0x11351e,_0x3eb109){var _0x45bb7c=_0x11d2fd,_0x196223=_0x3eb109['strLength']||_0x11351e['strLength'];if((_0x3fc6ce==='string'||_0x3fc6ce===_0x45bb7c(0x266))&&_0x478b61[_0x45bb7c(0x1d3)]){let _0x5832dd=_0x478b61[_0x45bb7c(0x1d3)][_0x45bb7c(0x20d)];_0x11351e[_0x45bb7c(0x1dd)]+=_0x5832dd,_0x11351e['allStrLength']>_0x11351e[_0x45bb7c(0x1eb)]?(_0x478b61[_0x45bb7c(0x23f)]='',delete _0x478b61['value']):_0x5832dd>_0x196223&&(_0x478b61[_0x45bb7c(0x23f)]=_0x478b61[_0x45bb7c(0x1d3)]['substr'](0x0,_0x196223),delete _0x478b61['value']);}}[_0x11d2fd(0x1ca)](_0x36ea58){var _0x4e1853=_0x11d2fd;return!!(_0x36ea58&&_0x4a231c[_0x4e1853(0x1e4)]&&this[_0x4e1853(0x1aa)](_0x36ea58)===_0x4e1853(0x233)&&_0x36ea58[_0x4e1853(0x237)]);}['_propertyName'](_0x889d08){var _0x2a9e0f=_0x11d2fd;if(_0x889d08[_0x2a9e0f(0x24a)](/^\\d+$/))return _0x889d08;var _0x5be9f3;try{_0x5be9f3=JSON['stringify'](''+_0x889d08);}catch{_0x5be9f3='\\x22'+this[_0x2a9e0f(0x1aa)](_0x889d08)+'\\x22';}return _0x5be9f3['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5be9f3=_0x5be9f3['substr'](0x1,_0x5be9f3[_0x2a9e0f(0x20d)]-0x2):_0x5be9f3=_0x5be9f3[_0x2a9e0f(0x260)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5be9f3;}[_0x11d2fd(0x1d0)](_0x223c38,_0xee378e,_0xced986,_0x4803c2){var _0x8480ae=_0x11d2fd;this[_0x8480ae(0x219)](_0x223c38,_0xee378e),_0x4803c2&&_0x4803c2(),this[_0x8480ae(0x269)](_0xced986,_0x223c38),this['_treeNodePropertiesAfterFullValue'](_0x223c38,_0xee378e);}['_treeNodePropertiesBeforeFullValue'](_0x13c011,_0x31fc7c){var _0x394e81=_0x11d2fd;this[_0x394e81(0x1ea)](_0x13c011,_0x31fc7c),this[_0x394e81(0x223)](_0x13c011,_0x31fc7c),this[_0x394e81(0x192)](_0x13c011,_0x31fc7c),this['_setNodePermissions'](_0x13c011,_0x31fc7c);}[_0x11d2fd(0x1ea)](_0x115c5c,_0x1c8355){}[_0x11d2fd(0x223)](_0x54bbce,_0x179cf4){}[_0x11d2fd(0x1b0)](_0x479590,_0x258dde){}[_0x11d2fd(0x1a8)](_0x30d571){var _0x3c36bf=_0x11d2fd;return _0x30d571===this[_0x3c36bf(0x24f)];}[_0x11d2fd(0x1d8)](_0x1e498e,_0x425178){var _0x55389b=_0x11d2fd;this[_0x55389b(0x1b0)](_0x1e498e,_0x425178),this['_setNodeExpandableState'](_0x1e498e),_0x425178[_0x55389b(0x249)]&&this['_sortProps'](_0x1e498e),this[_0x55389b(0x218)](_0x1e498e,_0x425178),this['_addLoadNode'](_0x1e498e,_0x425178),this[_0x55389b(0x19b)](_0x1e498e);}['_additionalMetadata'](_0x446c33,_0x5100e1){var _0xa612d4=_0x11d2fd;let _0x4c171c;try{_0x4a231c[_0xa612d4(0x256)]&&(_0x4c171c=_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)],_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=function(){}),_0x446c33&&typeof _0x446c33[_0xa612d4(0x20d)]==_0xa612d4(0x1e3)&&(_0x5100e1['length']=_0x446c33[_0xa612d4(0x20d)]);}catch{}finally{_0x4c171c&&(_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=_0x4c171c);}if(_0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1e3)||_0x5100e1[_0xa612d4(0x1f9)]==='Number'){if(isNaN(_0x5100e1[_0xa612d4(0x1d3)]))_0x5100e1[_0xa612d4(0x1bf)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];else switch(_0x5100e1['value']){case Number[_0xa612d4(0x252)]:_0x5100e1[_0xa612d4(0x22e)]=!0x0,delete _0x5100e1['value'];break;case Number[_0xa612d4(0x1ce)]:_0x5100e1[_0xa612d4(0x1bc)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];break;case 0x0:this[_0xa612d4(0x202)](_0x5100e1[_0xa612d4(0x1d3)])&&(_0x5100e1[_0xa612d4(0x1ee)]=!0x0);break;}}else _0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1bd)&&typeof _0x446c33[_0xa612d4(0x206)]=='string'&&_0x446c33[_0xa612d4(0x206)]&&_0x5100e1['name']&&_0x446c33['name']!==_0x5100e1[_0xa612d4(0x206)]&&(_0x5100e1[_0xa612d4(0x1b3)]=_0x446c33[_0xa612d4(0x206)]);}['_isNegativeZero'](_0x59c9ba){return 0x1/_0x59c9ba===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x194b22){var _0x489762=_0x11d2fd;!_0x194b22['props']||!_0x194b22[_0x489762(0x273)][_0x489762(0x20d)]||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1c9)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1e4)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1b4)||_0x194b22['props'][_0x489762(0x24d)](function(_0x5750f1,_0x2eb738){var _0x76f8ac=_0x489762,_0x5b2bb8=_0x5750f1[_0x76f8ac(0x206)][_0x76f8ac(0x24e)](),_0x4a4f8f=_0x2eb738[_0x76f8ac(0x206)]['toLowerCase']();return _0x5b2bb8<_0x4a4f8f?-0x1:_0x5b2bb8>_0x4a4f8f?0x1:0x0;});}[_0x11d2fd(0x218)](_0x1c5692,_0x5941d2){var _0x6ddc63=_0x11d2fd;if(!(_0x5941d2[_0x6ddc63(0x227)]||!_0x1c5692[_0x6ddc63(0x273)]||!_0x1c5692['props']['length'])){for(var _0x397818=[],_0x1bb0d6=[],_0xcf63f9=0x0,_0x522aed=_0x1c5692[_0x6ddc63(0x273)][_0x6ddc63(0x20d)];_0xcf63f9<_0x522aed;_0xcf63f9++){var _0x5b66ea=_0x1c5692['props'][_0xcf63f9];_0x5b66ea[_0x6ddc63(0x1f9)]===_0x6ddc63(0x1bd)?_0x397818[_0x6ddc63(0x1f3)](_0x5b66ea):_0x1bb0d6[_0x6ddc63(0x1f3)](_0x5b66ea);}if(!(!_0x1bb0d6['length']||_0x397818[_0x6ddc63(0x20d)]<=0x1)){_0x1c5692[_0x6ddc63(0x273)]=_0x1bb0d6;var _0x4d8efd={'functionsNode':!0x0,'props':_0x397818};this[_0x6ddc63(0x1ea)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x1b0)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x243)](_0x4d8efd),this[_0x6ddc63(0x1f8)](_0x4d8efd,_0x5941d2),_0x4d8efd['id']+='\\x20f',_0x1c5692['props'][_0x6ddc63(0x207)](_0x4d8efd);}}}[_0x11d2fd(0x1e1)](_0x1c7ad0,_0x297b6d){}[_0x11d2fd(0x243)](_0x2f5087){}[_0x11d2fd(0x255)](_0x401698){var _0x3fdb91=_0x11d2fd;return Array[_0x3fdb91(0x1ac)](_0x401698)||typeof _0x401698==_0x3fdb91(0x198)&&this[_0x3fdb91(0x1aa)](_0x401698)==='[object\\x20Array]';}[_0x11d2fd(0x1f8)](_0x152162,_0x1ed574){}[_0x11d2fd(0x19b)](_0x161253){var _0x679a0c=_0x11d2fd;delete _0x161253[_0x679a0c(0x21f)],delete _0x161253['_hasSetOnItsPath'],delete _0x161253[_0x679a0c(0x1fd)];}[_0x11d2fd(0x192)](_0x43a91c,_0x4b1cef){}}let _0x1698da=new _0x33872f(),_0x4336d8={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x507368={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23c2be(_0x19fcd2,_0x453451,_0x181b6d,_0x2a08b3,_0x4b434e,_0x54185d){var _0x9210d5=_0x11d2fd;let _0x5b44f0,_0x36715b;try{_0x36715b=_0x9e4c4d(),_0x5b44f0=_0x2e0b83[_0x453451],!_0x5b44f0||_0x36715b-_0x5b44f0['ts']>0x1f4&&_0x5b44f0[_0x9210d5(0x226)]&&_0x5b44f0['time']/_0x5b44f0[_0x9210d5(0x226)]<0x64?(_0x2e0b83[_0x453451]=_0x5b44f0={'count':0x0,'time':0x0,'ts':_0x36715b},_0x2e0b83[_0x9210d5(0x208)]={}):_0x36715b-_0x2e0b83[_0x9210d5(0x208)]['ts']>0x32&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]/_0x2e0b83[_0x9210d5(0x208)]['count']<0x64&&(_0x2e0b83[_0x9210d5(0x208)]={});let _0x7293a0=[],_0x36296b=_0x5b44f0['reduceLimits']||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]?_0x507368:_0x4336d8,_0x247beb=_0x217a47=>{var _0x4a89a2=_0x9210d5;let _0x541454={};return _0x541454[_0x4a89a2(0x273)]=_0x217a47[_0x4a89a2(0x273)],_0x541454[_0x4a89a2(0x1e2)]=_0x217a47[_0x4a89a2(0x1e2)],_0x541454[_0x4a89a2(0x21b)]=_0x217a47[_0x4a89a2(0x21b)],_0x541454[_0x4a89a2(0x1eb)]=_0x217a47[_0x4a89a2(0x1eb)],_0x541454['autoExpandLimit']=_0x217a47['autoExpandLimit'],_0x541454[_0x4a89a2(0x268)]=_0x217a47['autoExpandMaxDepth'],_0x541454[_0x4a89a2(0x249)]=!0x1,_0x541454[_0x4a89a2(0x227)]=!_0x39e58b,_0x541454['depth']=0x1,_0x541454[_0x4a89a2(0x277)]=0x0,_0x541454[_0x4a89a2(0x18a)]='root_exp_id',_0x541454[_0x4a89a2(0x1c3)]=_0x4a89a2(0x1c2),_0x541454['autoExpand']=!0x0,_0x541454[_0x4a89a2(0x245)]=[],_0x541454[_0x4a89a2(0x195)]=0x0,_0x541454[_0x4a89a2(0x26f)]=!0x0,_0x541454[_0x4a89a2(0x1dd)]=0x0,_0x541454[_0x4a89a2(0x1fc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x541454;};for(var _0x40c849=0x0;_0x40c849<_0x4b434e[_0x9210d5(0x20d)];_0x40c849++)_0x7293a0['push'](_0x1698da[_0x9210d5(0x23a)]({'timeNode':_0x19fcd2==='time'||void 0x0},_0x4b434e[_0x40c849],_0x247beb(_0x36296b),{}));if(_0x19fcd2===_0x9210d5(0x1ab)){let _0x4b4e9e=Error[_0x9210d5(0x229)];try{Error['stackTraceLimit']=0x1/0x0,_0x7293a0[_0x9210d5(0x1f3)](_0x1698da[_0x9210d5(0x23a)]({'stackNode':!0x0},new Error()[_0x9210d5(0x193)],_0x247beb(_0x36296b),{'strLength':0x1/0x0}));}finally{Error[_0x9210d5(0x229)]=_0x4b4e9e;}}return{'method':_0x9210d5(0x1cd),'version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':_0x7293a0,'id':_0x453451,'context':_0x54185d}]};}catch(_0x3c4fcd){return{'method':'log','version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':[{'type':_0x9210d5(0x1b2),'error':_0x3c4fcd&&_0x3c4fcd[_0x9210d5(0x1be)]}],'id':_0x453451,'context':_0x54185d}]};}finally{try{if(_0x5b44f0&&_0x36715b){let _0x39c04e=_0x9e4c4d();_0x5b44f0[_0x9210d5(0x226)]++,_0x5b44f0['time']+=_0x27fc15(_0x36715b,_0x39c04e),_0x5b44f0['ts']=_0x39c04e,_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]++,_0x2e0b83['hits'][_0x9210d5(0x1ae)]+=_0x27fc15(_0x36715b,_0x39c04e),_0x2e0b83['hits']['ts']=_0x39c04e,(_0x5b44f0[_0x9210d5(0x226)]>0x32||_0x5b44f0['time']>0x64)&&(_0x5b44f0[_0x9210d5(0x1b6)]=!0x0),(_0x2e0b83['hits']['count']>0x3e8||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]>0x12c)&&(_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]=!0x0);}}catch{}}}return _0x23c2be;}((_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x57888b,_0x4d288a,_0x2fe894,_0x3cfa6a,_0x26d1d4)=>{var _0x1998d3=_0x1f7fe1;if(_0x4b00d8[_0x1998d3(0x232)])return _0x4b00d8['_console_ninja'];if(!J(_0x4b00d8,_0x2fe894,_0x213295))return _0x4b00d8['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4b00d8[_0x1998d3(0x232)];let _0x1ec8c8=W(_0x4b00d8),_0x1a3c7f=_0x1ec8c8['elapsed'],_0x41cf6a=_0x1ec8c8[_0x1998d3(0x23d)],_0x247060=_0x1ec8c8[_0x1998d3(0x251)],_0x1d3c45={'hits':{},'ts':{}},_0x5683be=Y(_0x4b00d8,_0x3cfa6a,_0x1d3c45,_0x57888b),_0x3e248f=_0x10392f=>{_0x1d3c45['ts'][_0x10392f]=_0x41cf6a();},_0x2ebbe7=(_0x1a02c8,_0x4327c1)=>{var _0x1595a3=_0x1998d3;let _0x48011b=_0x1d3c45['ts'][_0x4327c1];if(delete _0x1d3c45['ts'][_0x4327c1],_0x48011b){let _0x441fec=_0x1a3c7f(_0x48011b,_0x41cf6a());_0x341adf(_0x5683be(_0x1595a3(0x1ae),_0x1a02c8,_0x247060(),_0x3e00fc,[_0x441fec],_0x4327c1));}},_0x665301=_0x409553=>_0x2a8d96=>{var _0x35b2aa=_0x1998d3;try{_0x3e248f(_0x2a8d96),_0x409553(_0x2a8d96);}finally{_0x4b00d8['console'][_0x35b2aa(0x1ae)]=_0x409553;}},_0x146215=_0x5aa591=>_0x44b8c0=>{var _0xc5b6e3=_0x1998d3;try{let [_0x4eb1b6,_0x154adc]=_0x44b8c0[_0xc5b6e3(0x1f6)](_0xc5b6e3(0x259));_0x2ebbe7(_0x154adc,_0x4eb1b6),_0x5aa591(_0x4eb1b6);}finally{_0x4b00d8[_0xc5b6e3(0x256)]['timeEnd']=_0x5aa591;}};_0x4b00d8[_0x1998d3(0x232)]={'consoleLog':(_0x2393f8,_0x51be62)=>{var _0x51151b=_0x1998d3;_0x4b00d8[_0x51151b(0x256)][_0x51151b(0x1cd)][_0x51151b(0x206)]!=='disabledLog'&&_0x341adf(_0x5683be(_0x51151b(0x1cd),_0x2393f8,_0x247060(),_0x3e00fc,_0x51be62));},'consoleTrace':(_0x119369,_0x442031)=>{var _0x594c80=_0x1998d3;_0x4b00d8[_0x594c80(0x256)][_0x594c80(0x1cd)]['name']!=='disabledTrace'&&_0x341adf(_0x5683be(_0x594c80(0x1ab),_0x119369,_0x247060(),_0x3e00fc,_0x442031));},'consoleTime':()=>{var _0x32edf0=_0x1998d3;_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]=_0x665301(_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]);},'consoleTimeEnd':()=>{var _0xceb7a9=_0x1998d3;_0x4b00d8[_0xceb7a9(0x256)][_0xceb7a9(0x1a2)]=_0x146215(_0x4b00d8['console']['timeEnd']);},'autoLog':(_0x561021,_0x3343a6)=>{var _0x99253f=_0x1998d3;_0x341adf(_0x5683be(_0x99253f(0x1cd),_0x3343a6,_0x247060(),_0x3e00fc,[_0x561021]));},'autoLogMany':(_0x14df62,_0x1aca85)=>{var _0x4e9934=_0x1998d3;_0x341adf(_0x5683be(_0x4e9934(0x1cd),_0x14df62,_0x247060(),_0x3e00fc,_0x1aca85));},'autoTrace':(_0x19f33b,_0x49cf5c)=>{var _0x38aba5=_0x1998d3;_0x341adf(_0x5683be(_0x38aba5(0x1ab),_0x49cf5c,_0x247060(),_0x3e00fc,[_0x19f33b]));},'autoTraceMany':(_0xcd9962,_0x3adbc0)=>{var _0x40a7aa=_0x1998d3;_0x341adf(_0x5683be(_0x40a7aa(0x1ab),_0xcd9962,_0x247060(),_0x3e00fc,_0x3adbc0));},'autoTime':(_0x1e1fd7,_0x2e5429,_0x2ccb02)=>{_0x3e248f(_0x2ccb02);},'autoTimeEnd':(_0x2e38e6,_0x141bf8,_0xdc33b2)=>{_0x2ebbe7(_0x141bf8,_0xdc33b2);},'coverage':_0x298f37=>{var _0x2380b2=_0x1998d3;_0x341adf({'method':_0x2380b2(0x1de),'version':_0x57888b,'args':[{'id':_0x298f37}]});}};let _0x341adf=b(_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x26d1d4),_0x3e00fc=_0x4b00d8[_0x1998d3(0x26e)];return _0x4b00d8[_0x1998d3(0x232)];})(globalThis,_0x1f7fe1(0x213),_0x1f7fe1(0x20c),_0x1f7fe1(0x1d7),_0x1f7fe1(0x209),'1.0.0',_0x1f7fe1(0x18e),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],_0x1f7fe1(0x1af),_0x1f7fe1(0x1b1));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/modules/datahandler.js":
/*!************************************!*\
  !*** ./src/modules/datahandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findProject: () => (/* binding */ findProject),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   updateProjectsArray: () => (/* binding */ updateProjectsArray)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");



let projectsArray = []

function updateProjectsArray(inputType, modalInput, todoID) {
	// Fetch input data from modalInput
	if (inputType === 'todo' || inputType === 'todo-edit') {
		const projectTitle = modalInput[0].value.trim()
		const title = modalInput[1].value.trim()
		const description = modalInput[2].value.trim()
		const dueDate = modalInput[3].value.trim()
		const priority = modalInput[4].checked
		const notes = modalInput[5].value.trim()

		if (inputType === 'todo-edit') {
			/* eslint-disable */console.log(
				...oo_oo(`1577652753_17_3_24_4_4`,'updateProjectsArray edit trigger: ' + projectTitle,
				title,
				description,
				dueDate,
				priority,
				notes)
			)
			// Find a saved todo matching ID of edited todo
			const selectedProject = findProject(projectTitle)
			const currentTodoIndex = selectedProject.todos.findIndex(
				(todo) => todo.id === todoID
			)
			/* eslint-disable */console.log(...oo_oo(`1577652753_30_3_30_71_4`,'todo index ' + currentTodoIndex + ' matches ' + todoID))
			if (currentTodoIndex !== -1) {
				// Remove existing todo from the array
				const currentTodo = selectedProject.todos.splice(currentTodoIndex, 1)[0]
				// Create a new todo with the updated information
				const updatedTodo = new _todos__WEBPACK_IMPORTED_MODULE_0__.ToDo(
					projectTitle,
					title,
					description,
					dueDate,
					priority,
					notes
				)

				if (selectedProject) {
					selectedProject.addToProject(updatedTodo)
					;(0,_render__WEBPACK_IMPORTED_MODULE_2__.updateTree)(projectsArray)
					;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderDOM)(selectedProject)
				} else {
					console.error(
						`Project with title: ${projectTitle} not found in array.`
					)
				}
			}
		}
		if (inputType === 'todo') {
			// Create todo object
			const todo = new _todos__WEBPACK_IMPORTED_MODULE_0__.ToDo(
				projectTitle,
				title,
				description,
				dueDate,
				priority,
				notes
				/* 				checkList */
			)
			// fetch project object from title
			const selectedProject = findProject(projectTitle)
			if (selectedProject) {
				selectedProject.addToProject(todo)
				;(0,_render__WEBPACK_IMPORTED_MODULE_2__.updateTree)(projectsArray)
				;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderDOM)(selectedProject)
			} else {
				console.error(`Project with title: ${projectTitle} not found in array.`)
			}
		}
	} else if (inputType === 'project') {
		const projectName = modalInput[0].value.trim()

		const newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](projectName)

		projectsArray.push(newProject)
		/* eslint-disable */console.log(...oo_oo(`1577652753_82_2_82_28_4`,projectsArray))
		;(0,_render__WEBPACK_IMPORTED_MODULE_2__.updateTree)(projectsArray)
	}
}

// Function to find a project based on a project title string
function findProject(projectTitle) {
	return projectsArray.find((project) => project.title === projectTitle)
}

function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1f7fe1=_0x37e4;(function(_0x47ffb5,_0x305716){var _0x372d84=_0x37e4,_0x325e8f=_0x47ffb5();while(!![]){try{var _0x493611=-parseInt(_0x372d84(0x225))/0x1*(-parseInt(_0x372d84(0x1d6))/0x2)+-parseInt(_0x372d84(0x1a9))/0x3*(-parseInt(_0x372d84(0x272))/0x4)+-parseInt(_0x372d84(0x25b))/0x5+-parseInt(_0x372d84(0x18b))/0x6*(-parseInt(_0x372d84(0x235))/0x7)+-parseInt(_0x372d84(0x1f1))/0x8*(parseInt(_0x372d84(0x1b9))/0x9)+parseInt(_0x372d84(0x1f2))/0xa*(-parseInt(_0x372d84(0x1ed))/0xb)+parseInt(_0x372d84(0x1e8))/0xc;if(_0x493611===_0x305716)break;else _0x325e8f['push'](_0x325e8f['shift']());}catch(_0x2b499e){_0x325e8f['push'](_0x325e8f['shift']());}}}(_0x28ed,0x45f58));function _0x28ed(){var _0x8ba4d7=[':logPointId:','_HTMLAllCollection','2376365mjTMQa','concat','_getOwnPropertyDescriptor','setter','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','replace','parse','getOwnPropertyNames','port','_reconnectTimeout','nodeModules','String','_property','autoExpandMaxDepth','_additionalMetadata','_allowedToSend','url','ws/index.js','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_console_ninja_session','resolveGetters','constructor','_propertyName','88864PeNoQn','props','autoExpand','_getOwnPropertyNames','method','level','create','onclose','versions','expId','453786hZRTMQ','_isPrimitiveWrapperType','_inNextEdge','1709311016522','_connectToHostNow','hasOwnProperty','index','_setNodeExpressionPath','stack','_ws','autoExpandPropertyCount','edge','Buffer','object','set','ws://','_cleanNode','astro','_type','_webSocketErrorDocsLink','catch','prototype','_p_','timeEnd','WebSocket','global','slice','Error','_isPrimitiveType','_isUndefined','54iRnQJN','_objectToString','trace','isArray','_quotedRegExp','time','','_setNodeLabel','','unknown','funcName','Set','\\x20browser','reduceLimits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','getOwnPropertyDescriptor','9VpHEMS','includes','_Symbol','negativeInfinity','function','message','nan','onmessage','_dateToString','root_exp','rootExpression','dockerizedApp','_WebSocketClass','getter','hostname','warn','array','_isMap','elapsed','_allowedToConnectOnSend','log','NEGATIVE_INFINITY','cappedElements','_processTreeNodeResult','reload','_connected','value','readyState','autoExpandLimit','14twUgXH',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.290/node_modules\",'_treeNodePropertiesAfterFullValue','...','string','_maxConnectAttemptCount','_capIfString','allStrLength','coverage','map','pop','_addLoadNode','elements','number','Map','path','[object\\x20Array]','NEXT_RUNTIME','8772096aBeiNa','_regExpToString','_setNodeId','totalStrLength','data','275zCfauG','negativeZero','symbol','getWebSocketClass','3827464fsivUc','99430rMpwcs','push','_connectAttemptCount','env','split','null','_setNodePermissions','type','_keyStrRegExp','__es'+'Module','node','_hasMapOnItsPath','toString','_consoleNinjaAllowedToStart','close','send','_isNegativeZero','then','_inBrowser','unref','name','unshift','hits','webpack','_socket','_disposeWebsocket','34879','length','_blacklistedProperty','perf_hooks','expressionsToEvaluate','_isSet','_sendErrorMessage','127.0.0.1','process','host','join','HTMLAllCollection','_addFunctionsNode','_treeNodePropertiesBeforeFullValue','getOwnPropertySymbols','strLength','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','call','_getOwnPropertySymbols','_hasSymbolPropertyOnItsPath','depth','_WebSocket','bind','_setNodeQueryPath','isExpressionToEvaluate','29525YGRNBJ','count','noFunctions','_attemptToReconnectShortly','stackTraceLimit','Number','performance','test','valueOf','positiveInfinity','_p_length','error','onerror','_console_ninja','[object\\x20Map]','cappedProps','14hxDKYV','indexOf','forEach','parent','get','serialize','getPrototypeOf','_addProperty','timeStamp','location','capped','undefined','_connecting','[object\\x20BigInt]','_setNodeExpandableState','enumerable','autoExpandPreviousObjects','https://tinyurl.com/37x8b79t','\\x20server','hrtime','sortProps','match','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','sort','toLowerCase','_undefined','onopen','now','POSITIVE_INFINITY','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_isArray','console','_addObjectProperty','gateway.docker.internal'];_0x28ed=function(){return _0x8ba4d7;};return _0x28ed();}function _0x37e4(_0x69e146,_0x3db28d){var _0x28ed6e=_0x28ed();return _0x37e4=function(_0x37e460,_0x19a257){_0x37e460=_0x37e460-0x189;var _0x1890cd=_0x28ed6e[_0x37e460];return _0x1890cd;},_0x37e4(_0x69e146,_0x3db28d);}var j=Object[_0x1f7fe1(0x278)],H=Object['defineProperty'],G=Object[_0x1f7fe1(0x1b8)],ee=Object[_0x1f7fe1(0x262)],te=Object[_0x1f7fe1(0x23b)],ne=Object[_0x1f7fe1(0x1a0)][_0x1f7fe1(0x190)],re=(_0x5ac642,_0x1cf560,_0x561553,_0x20c447)=>{var _0x45c202=_0x1f7fe1;if(_0x1cf560&&typeof _0x1cf560==_0x45c202(0x198)||typeof _0x1cf560==_0x45c202(0x1bd)){for(let _0x508a2c of ee(_0x1cf560))!ne[_0x45c202(0x21d)](_0x5ac642,_0x508a2c)&&_0x508a2c!==_0x561553&&H(_0x5ac642,_0x508a2c,{'get':()=>_0x1cf560[_0x508a2c],'enumerable':!(_0x20c447=G(_0x1cf560,_0x508a2c))||_0x20c447[_0x45c202(0x244)]});}return _0x5ac642;},x=(_0x1a9261,_0xb842e1,_0x3a123d)=>(_0x3a123d=_0x1a9261!=null?j(te(_0x1a9261)):{},re(_0xb842e1||!_0x1a9261||!_0x1a9261[_0x1f7fe1(0x1fb)]?H(_0x3a123d,'default',{'value':_0x1a9261,'enumerable':!0x0}):_0x3a123d,_0x1a9261)),X=class{constructor(_0x258946,_0x4abc24,_0x53a90a,_0x68db45,_0x5457e8){var _0x2597cb=_0x1f7fe1;this[_0x2597cb(0x1a4)]=_0x258946,this[_0x2597cb(0x215)]=_0x4abc24,this[_0x2597cb(0x263)]=_0x53a90a,this[_0x2597cb(0x265)]=_0x68db45,this['dockerizedApp']=_0x5457e8,this['_allowedToSend']=!0x0,this[_0x2597cb(0x1cc)]=!0x0,this[_0x2597cb(0x1d2)]=!0x1,this[_0x2597cb(0x241)]=!0x1,this[_0x2597cb(0x18d)]=_0x258946[_0x2597cb(0x214)]?.['env']?.[_0x2597cb(0x1e7)]==='edge',this[_0x2597cb(0x204)]=!this[_0x2597cb(0x1a4)][_0x2597cb(0x214)]?.[_0x2597cb(0x189)]?.[_0x2597cb(0x1fc)]&&!this[_0x2597cb(0x18d)],this['_WebSocketClass']=null,this[_0x2597cb(0x1f4)]=0x0,this[_0x2597cb(0x1db)]=0x14,this[_0x2597cb(0x19e)]=_0x2597cb(0x246),this[_0x2597cb(0x212)]=(this[_0x2597cb(0x204)]?_0x2597cb(0x25f):_0x2597cb(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x1f7fe1(0x1f0)](){var _0x3361a6=_0x1f7fe1;if(this[_0x3361a6(0x1c5)])return this['_WebSocketClass'];let _0x240d8f;if(this[_0x3361a6(0x204)]||this['_inNextEdge'])_0x240d8f=this['global'][_0x3361a6(0x1a3)];else{if(this['global']['process']?.[_0x3361a6(0x221)])_0x240d8f=this['global'][_0x3361a6(0x214)]?.[_0x3361a6(0x221)];else try{let _0x425912=await import(_0x3361a6(0x1e5));_0x240d8f=(await import((await import(_0x3361a6(0x26b)))['pathToFileURL'](_0x425912[_0x3361a6(0x216)](this[_0x3361a6(0x265)],_0x3361a6(0x26c)))[_0x3361a6(0x1fe)]()))['default'];}catch{try{_0x240d8f=require(require(_0x3361a6(0x1e5))[_0x3361a6(0x216)](this[_0x3361a6(0x265)],'ws'));}catch{throw new Error(_0x3361a6(0x21c));}}}return this[_0x3361a6(0x1c5)]=_0x240d8f,_0x240d8f;}[_0x1f7fe1(0x18f)](){var _0x1041c7=_0x1f7fe1;this[_0x1041c7(0x241)]||this[_0x1041c7(0x1d2)]||this[_0x1041c7(0x1f4)]>=this['_maxConnectAttemptCount']||(this[_0x1041c7(0x1cc)]=!0x1,this[_0x1041c7(0x241)]=!0x0,this[_0x1041c7(0x1f4)]++,this[_0x1041c7(0x194)]=new Promise((_0x1d47a8,_0x3026d6)=>{var _0xdd1106=_0x1041c7;this[_0xdd1106(0x1f0)]()[_0xdd1106(0x203)](_0x4cc8ff=>{var _0x47dac7=_0xdd1106;let _0x1d10d0=new _0x4cc8ff(_0x47dac7(0x19a)+(!this[_0x47dac7(0x204)]&&this[_0x47dac7(0x1c4)]?_0x47dac7(0x258):this['host'])+':'+this['port']);_0x1d10d0[_0x47dac7(0x231)]=()=>{var _0x836ce0=_0x47dac7;this[_0x836ce0(0x26a)]=!0x1,this['_disposeWebsocket'](_0x1d10d0),this[_0x836ce0(0x228)](),_0x3026d6(new Error('logger\\x20websocket\\x20error'));},_0x1d10d0[_0x47dac7(0x250)]=()=>{var _0x316d98=_0x47dac7;this['_inBrowser']||_0x1d10d0[_0x316d98(0x20a)]&&_0x1d10d0[_0x316d98(0x20a)]['unref']&&_0x1d10d0[_0x316d98(0x20a)][_0x316d98(0x205)](),_0x1d47a8(_0x1d10d0);},_0x1d10d0['onclose']=()=>{var _0x31901b=_0x47dac7;this[_0x31901b(0x1cc)]=!0x0,this[_0x31901b(0x20b)](_0x1d10d0),this[_0x31901b(0x228)]();},_0x1d10d0[_0x47dac7(0x1c0)]=_0x934319=>{var _0x2f2917=_0x47dac7;try{_0x934319&&_0x934319[_0x2f2917(0x1ec)]&&this[_0x2f2917(0x204)]&&JSON[_0x2f2917(0x261)](_0x934319['data'])[_0x2f2917(0x276)]===_0x2f2917(0x1d1)&&this[_0x2f2917(0x1a4)][_0x2f2917(0x23e)]['reload']();}catch{}};})[_0xdd1106(0x203)](_0x479578=>(this[_0xdd1106(0x1d2)]=!0x0,this[_0xdd1106(0x241)]=!0x1,this[_0xdd1106(0x1cc)]=!0x1,this[_0xdd1106(0x26a)]=!0x0,this[_0xdd1106(0x1f4)]=0x0,_0x479578))[_0xdd1106(0x19f)](_0x4edd30=>(this[_0xdd1106(0x1d2)]=!0x1,this['_connecting']=!0x1,console[_0xdd1106(0x1c8)](_0xdd1106(0x24c)+this[_0xdd1106(0x19e)]),_0x3026d6(new Error(_0xdd1106(0x1b7)+(_0x4edd30&&_0x4edd30[_0xdd1106(0x1be)])))));}));}['_disposeWebsocket'](_0x49318d){var _0x4323c0=_0x1f7fe1;this[_0x4323c0(0x1d2)]=!0x1,this[_0x4323c0(0x241)]=!0x1;try{_0x49318d[_0x4323c0(0x279)]=null,_0x49318d[_0x4323c0(0x231)]=null,_0x49318d[_0x4323c0(0x250)]=null;}catch{}try{_0x49318d[_0x4323c0(0x1d4)]<0x2&&_0x49318d[_0x4323c0(0x200)]();}catch{}}['_attemptToReconnectShortly'](){var _0xafae58=_0x1f7fe1;clearTimeout(this[_0xafae58(0x264)]),!(this[_0xafae58(0x1f4)]>=this[_0xafae58(0x1db)])&&(this[_0xafae58(0x264)]=setTimeout(()=>{var _0x17ce1b=_0xafae58;this[_0x17ce1b(0x1d2)]||this[_0x17ce1b(0x241)]||(this[_0x17ce1b(0x18f)](),this['_ws']?.[_0x17ce1b(0x19f)](()=>this[_0x17ce1b(0x228)]()));},0x1f4),this[_0xafae58(0x264)][_0xafae58(0x205)]&&this['_reconnectTimeout'][_0xafae58(0x205)]());}async[_0x1f7fe1(0x201)](_0x16766e){var _0x150c4e=_0x1f7fe1;try{if(!this[_0x150c4e(0x26a)])return;this[_0x150c4e(0x1cc)]&&this[_0x150c4e(0x18f)](),(await this[_0x150c4e(0x194)])[_0x150c4e(0x201)](JSON['stringify'](_0x16766e));}catch(_0x58d9aa){console[_0x150c4e(0x1c8)](this[_0x150c4e(0x212)]+':\\x20'+(_0x58d9aa&&_0x58d9aa[_0x150c4e(0x1be)])),this[_0x150c4e(0x26a)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x1266e6,_0x5e5ebe,_0x3659b0,_0x42e04e,_0x503754,_0xf95501){var _0x1cbf77=_0x1f7fe1;let _0x1c2814=_0x3659b0['split'](',')[_0x1cbf77(0x1df)](_0x290148=>{var _0x4336e5=_0x1cbf77;try{_0x1266e6[_0x4336e5(0x26e)]||((_0x503754==='next.js'||_0x503754==='remix'||_0x503754===_0x4336e5(0x19c)||_0x503754==='angular')&&(_0x503754+=!_0x1266e6[_0x4336e5(0x214)]?.['versions']?.[_0x4336e5(0x1fc)]&&_0x1266e6[_0x4336e5(0x214)]?.[_0x4336e5(0x1f5)]?.['NEXT_RUNTIME']!==_0x4336e5(0x196)?_0x4336e5(0x1b5):_0x4336e5(0x247)),_0x1266e6['_console_ninja_session']={'id':+new Date(),'tool':_0x503754});let _0xd2e366=new X(_0x1266e6,_0x5e5ebe,_0x290148,_0x42e04e,_0xf95501);return _0xd2e366[_0x4336e5(0x201)][_0x4336e5(0x222)](_0xd2e366);}catch(_0x46304f){return console['warn'](_0x4336e5(0x254),_0x46304f&&_0x46304f[_0x4336e5(0x1be)]),()=>{};}});return _0x130af4=>_0x1c2814[_0x1cbf77(0x237)](_0x353891=>_0x353891(_0x130af4));}function W(_0x23fa9f){var _0x409e0d=_0x1f7fe1;let _0x4e8289=function(_0x1deaf8,_0x175b0b){return _0x175b0b-_0x1deaf8;},_0x52630f;if(_0x23fa9f[_0x409e0d(0x22b)])_0x52630f=function(){var _0x343bf=_0x409e0d;return _0x23fa9f[_0x343bf(0x22b)][_0x343bf(0x251)]();};else{if(_0x23fa9f[_0x409e0d(0x214)]&&_0x23fa9f[_0x409e0d(0x214)][_0x409e0d(0x248)]&&_0x23fa9f[_0x409e0d(0x214)]?.[_0x409e0d(0x1f5)]?.[_0x409e0d(0x1e7)]!==_0x409e0d(0x196))_0x52630f=function(){var _0x3f21b4=_0x409e0d;return _0x23fa9f[_0x3f21b4(0x214)][_0x3f21b4(0x248)]();},_0x4e8289=function(_0x5ba0ff,_0x3f75fb){return 0x3e8*(_0x3f75fb[0x0]-_0x5ba0ff[0x0])+(_0x3f75fb[0x1]-_0x5ba0ff[0x1])/0xf4240;};else try{let {performance:_0x830f41}=require(_0x409e0d(0x20f));_0x52630f=function(){return _0x830f41['now']();};}catch{_0x52630f=function(){return+new Date();};}}return{'elapsed':_0x4e8289,'timeStamp':_0x52630f,'now':()=>Date[_0x409e0d(0x251)]()};}function J(_0x4220c1,_0x2aef74,_0x3cf029){var _0x551246=_0x1f7fe1;if(_0x4220c1[_0x551246(0x1ff)]!==void 0x0)return _0x4220c1['_consoleNinjaAllowedToStart'];let _0x1283f4=_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x189)]?.[_0x551246(0x1fc)]||_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x1f5)]?.['NEXT_RUNTIME']===_0x551246(0x196);return _0x1283f4&&_0x3cf029==='nuxt'?_0x4220c1[_0x551246(0x1ff)]=!0x1:_0x4220c1[_0x551246(0x1ff)]=_0x1283f4||!_0x2aef74||_0x4220c1['location']?.['hostname']&&_0x2aef74[_0x551246(0x1ba)](_0x4220c1['location'][_0x551246(0x1c7)]),_0x4220c1['_consoleNinjaAllowedToStart'];}function Y(_0x4a231c,_0x39e58b,_0x2e0b83,_0x12de0b){var _0x11d2fd=_0x1f7fe1;_0x4a231c=_0x4a231c,_0x39e58b=_0x39e58b,_0x2e0b83=_0x2e0b83,_0x12de0b=_0x12de0b;let _0x35cb99=W(_0x4a231c),_0x27fc15=_0x35cb99[_0x11d2fd(0x1cb)],_0x9e4c4d=_0x35cb99['timeStamp'];class _0x33872f{constructor(){var _0x25774f=_0x11d2fd;this[_0x25774f(0x1fa)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x25774f(0x1ad)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x4a231c[_0x25774f(0x240)],this[_0x25774f(0x25a)]=_0x4a231c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x25774f(0x275)]=Object[_0x25774f(0x262)],this['_Symbol']=_0x4a231c['Symbol'],this['_regExpToString']=RegExp[_0x25774f(0x1a0)]['toString'],this[_0x25774f(0x1c1)]=Date[_0x25774f(0x1a0)][_0x25774f(0x1fe)];}[_0x11d2fd(0x23a)](_0x3811cf,_0x356064,_0x4f2c04,_0x1eef20){var _0x44970c=_0x11d2fd,_0x2c428f=this,_0x4e9b94=_0x4f2c04[_0x44970c(0x274)];function _0x56a9a7(_0x56ecc6,_0x45009d,_0x30aaee){var _0x4e0075=_0x44970c;_0x45009d['type']=_0x4e0075(0x1b2),_0x45009d[_0x4e0075(0x230)]=_0x56ecc6[_0x4e0075(0x1be)],_0x3032b6=_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)],_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)]=_0x45009d,_0x2c428f[_0x4e0075(0x219)](_0x45009d,_0x30aaee);}try{_0x4f2c04[_0x44970c(0x277)]++,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1f3)](_0x356064);var _0x4839bd,_0x4b4f61,_0x1ebfe1,_0x244d80,_0xbe4d9a=[],_0xdfac7a=[],_0x1705af,_0x3e3e7f=this[_0x44970c(0x19d)](_0x356064),_0x1c36fe=_0x3e3e7f===_0x44970c(0x1c9),_0x13b536=!0x1,_0x5b148b=_0x3e3e7f==='function',_0x575384=this[_0x44970c(0x1a7)](_0x3e3e7f),_0x34250c=this['_isPrimitiveWrapperType'](_0x3e3e7f),_0x3e85e0=_0x575384||_0x34250c,_0x25c339={},_0x16e036=0x0,_0x3cc5fd=!0x1,_0x3032b6,_0x8dc30c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f2c04[_0x44970c(0x220)]){if(_0x1c36fe){if(_0x4b4f61=_0x356064[_0x44970c(0x20d)],_0x4b4f61>_0x4f2c04['elements']){for(_0x1ebfe1=0x0,_0x244d80=_0x4f2c04[_0x44970c(0x1e2)],_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a['push'](_0x2c428f['_addProperty'](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));_0x3811cf[_0x44970c(0x1cf)]=!0x0;}else{for(_0x1ebfe1=0x0,_0x244d80=_0x4b4f61,_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x23c)](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));}_0x4f2c04[_0x44970c(0x195)]+=_0xdfac7a[_0x44970c(0x20d)];}if(!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f==='undefined')&&!_0x575384&&_0x3e3e7f!==_0x44970c(0x266)&&_0x3e3e7f!==_0x44970c(0x197)&&_0x3e3e7f!==_0x44970c(0x24b)){var _0xb99f3c=_0x1eef20[_0x44970c(0x273)]||_0x4f2c04[_0x44970c(0x273)];if(this[_0x44970c(0x211)](_0x356064)?(_0x4839bd=0x0,_0x356064[_0x44970c(0x237)](function(_0x19c16a){var _0xbae55e=_0x44970c;if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04[_0xbae55e(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0xbae55e(0x195)]>_0x4f2c04[_0xbae55e(0x1d5)]){_0x3cc5fd=!0x0;return;}_0xdfac7a[_0xbae55e(0x1f3)](_0x2c428f[_0xbae55e(0x23c)](_0xbe4d9a,_0x356064,_0xbae55e(0x1b4),_0x4839bd++,_0x4f2c04,function(_0x232a17){return function(){return _0x232a17;};}(_0x19c16a)));})):this[_0x44970c(0x1ca)](_0x356064)&&_0x356064[_0x44970c(0x237)](function(_0x49e5a8,_0x14bf92){var _0x21c289=_0x44970c;if(_0x16e036++,_0x4f2c04[_0x21c289(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04['isExpressionToEvaluate']&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0x21c289(0x195)]>_0x4f2c04['autoExpandLimit']){_0x3cc5fd=!0x0;return;}var _0x57858b=_0x14bf92[_0x21c289(0x1fe)]();_0x57858b[_0x21c289(0x20d)]>0x64&&(_0x57858b=_0x57858b[_0x21c289(0x1a5)](0x0,0x64)+_0x21c289(0x1d9)),_0xdfac7a[_0x21c289(0x1f3)](_0x2c428f[_0x21c289(0x23c)](_0xbe4d9a,_0x356064,_0x21c289(0x1e4),_0x57858b,_0x4f2c04,function(_0x311c38){return function(){return _0x311c38;};}(_0x49e5a8)));}),!_0x13b536){try{for(_0x1705af in _0x356064)if(!(_0x1c36fe&&_0x8dc30c['test'](_0x1705af))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)){if(_0x16e036++,_0x4f2c04[_0x44970c(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f['_addObjectProperty'](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}catch{}if(_0x25c339[_0x44970c(0x22f)]=!0x0,_0x5b148b&&(_0x25c339['_p_name']=!0x0),!_0x3cc5fd){var _0x9e31=[][_0x44970c(0x25c)](this[_0x44970c(0x275)](_0x356064))[_0x44970c(0x25c)](this[_0x44970c(0x21e)](_0x356064));for(_0x4839bd=0x0,_0x4b4f61=_0x9e31[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)if(_0x1705af=_0x9e31[_0x4839bd],!(_0x1c36fe&&_0x8dc30c[_0x44970c(0x22c)](_0x1705af[_0x44970c(0x1fe)]()))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)&&!_0x25c339[_0x44970c(0x1a1)+_0x1705af[_0x44970c(0x1fe)]()]){if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x257)](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}}}}if(_0x3811cf['type']=_0x3e3e7f,_0x3e85e0?(_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x22d)](),this[_0x44970c(0x1dc)](_0x3e3e7f,_0x3811cf,_0x4f2c04,_0x1eef20)):_0x3e3e7f==='date'?_0x3811cf['value']=this[_0x44970c(0x1c1)]['call'](_0x356064):_0x3e3e7f===_0x44970c(0x24b)?_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x1fe)]():_0x3e3e7f==='RegExp'?_0x3811cf['value']=this[_0x44970c(0x1e9)][_0x44970c(0x21d)](_0x356064):_0x3e3e7f===_0x44970c(0x1ef)&&this[_0x44970c(0x1bb)]?_0x3811cf[_0x44970c(0x1d3)]=this['_Symbol'][_0x44970c(0x1a0)][_0x44970c(0x1fe)][_0x44970c(0x21d)](_0x356064):!_0x4f2c04['depth']&&!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f===_0x44970c(0x240))&&(delete _0x3811cf['value'],_0x3811cf['capped']=!0x0),_0x3cc5fd&&(_0x3811cf[_0x44970c(0x234)]=!0x0),_0x3032b6=_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)],_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3811cf,this['_treeNodePropertiesBeforeFullValue'](_0x3811cf,_0x4f2c04),_0xdfac7a[_0x44970c(0x20d)]){for(_0x4839bd=0x0,_0x4b4f61=_0xdfac7a[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)_0xdfac7a[_0x4839bd](_0x4839bd);}_0xbe4d9a['length']&&(_0x3811cf[_0x44970c(0x273)]=_0xbe4d9a);}catch(_0x370d44){_0x56a9a7(_0x370d44,_0x3811cf,_0x4f2c04);}return this[_0x44970c(0x269)](_0x356064,_0x3811cf),this['_treeNodePropertiesAfterFullValue'](_0x3811cf,_0x4f2c04),_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3032b6,_0x4f2c04['level']--,_0x4f2c04['autoExpand']=_0x4e9b94,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1e0)](),_0x3811cf;}[_0x11d2fd(0x21e)](_0x48b7d6){var _0x3de307=_0x11d2fd;return Object['getOwnPropertySymbols']?Object[_0x3de307(0x21a)](_0x48b7d6):[];}[_0x11d2fd(0x211)](_0x3763e4){var _0x55b8a1=_0x11d2fd;return!!(_0x3763e4&&_0x4a231c[_0x55b8a1(0x1b4)]&&this['_objectToString'](_0x3763e4)==='[object\\x20Set]'&&_0x3763e4[_0x55b8a1(0x237)]);}[_0x11d2fd(0x20e)](_0x4769e4,_0x48cf79,_0x5a42e8){var _0x28c014=_0x11d2fd;return _0x5a42e8[_0x28c014(0x227)]?typeof _0x4769e4[_0x48cf79]==_0x28c014(0x1bd):!0x1;}['_type'](_0x49dfdd){var _0x55173a=_0x11d2fd,_0x912292='';return _0x912292=typeof _0x49dfdd,_0x912292===_0x55173a(0x198)?this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x1e6)?_0x912292=_0x55173a(0x1c9):this['_objectToString'](_0x49dfdd)==='[object\\x20Date]'?_0x912292='date':this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x242)?_0x912292=_0x55173a(0x24b):_0x49dfdd===null?_0x912292=_0x55173a(0x1f7):_0x49dfdd[_0x55173a(0x270)]&&(_0x912292=_0x49dfdd['constructor'][_0x55173a(0x206)]||_0x912292):_0x912292==='undefined'&&this[_0x55173a(0x25a)]&&_0x49dfdd instanceof this['_HTMLAllCollection']&&(_0x912292=_0x55173a(0x217)),_0x912292;}[_0x11d2fd(0x1aa)](_0x43d414){var _0x57de40=_0x11d2fd;return Object[_0x57de40(0x1a0)][_0x57de40(0x1fe)][_0x57de40(0x21d)](_0x43d414);}[_0x11d2fd(0x1a7)](_0xcdaeb7){var _0x192334=_0x11d2fd;return _0xcdaeb7==='boolean'||_0xcdaeb7===_0x192334(0x1da)||_0xcdaeb7==='number';}[_0x11d2fd(0x18c)](_0x5ca27f){var _0x346078=_0x11d2fd;return _0x5ca27f==='Boolean'||_0x5ca27f===_0x346078(0x266)||_0x5ca27f===_0x346078(0x22a);}[_0x11d2fd(0x23c)](_0x1b8706,_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1){var _0x5d7e22=this;return function(_0x2b580b){var _0x47290f=_0x37e4,_0xfcc17a=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x253)],_0x194d30=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)],_0x1fedfd=_0x107b05[_0x47290f(0x1fc)]['parent'];_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x238)]=_0xfcc17a,_0x107b05['node'][_0x47290f(0x191)]=typeof _0x5a7a70=='number'?_0x5a7a70:_0x2b580b,_0x1b8706[_0x47290f(0x1f3)](_0x5d7e22[_0x47290f(0x267)](_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1)),_0x107b05[_0x47290f(0x1fc)]['parent']=_0x1fedfd,_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)]=_0x194d30;};}['_addObjectProperty'](_0x16588b,_0x11cea7,_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6){var _0x243e50=_0x11d2fd,_0x44abba=this;return _0x11cea7[_0x243e50(0x1a1)+_0x1c01d4[_0x243e50(0x1fe)]()]=!0x0,function(_0x1f4d51){var _0x4bdc1f=_0x243e50,_0x44d283=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x253)],_0x4fb828=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)],_0x3169d7=_0x4d4b6b['node'][_0x4bdc1f(0x238)];_0x4d4b6b[_0x4bdc1f(0x1fc)]['parent']=_0x44d283,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x1f4d51,_0x16588b['push'](_0x44abba[_0x4bdc1f(0x267)](_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6)),_0x4d4b6b['node'][_0x4bdc1f(0x238)]=_0x3169d7,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x4fb828;};}[_0x11d2fd(0x267)](_0x2ee2f9,_0x504c63,_0x2be839,_0x5d4bfe,_0x466772){var _0x280f6e=_0x11d2fd,_0xc6afe0=this;_0x466772||(_0x466772=function(_0xe7fdf,_0x44194f){return _0xe7fdf[_0x44194f];});var _0x298103=_0x2be839[_0x280f6e(0x1fe)](),_0x28f594=_0x5d4bfe[_0x280f6e(0x210)]||{},_0x5c79a8=_0x5d4bfe[_0x280f6e(0x220)],_0x20bebc=_0x5d4bfe[_0x280f6e(0x224)];try{var _0x27f153=this[_0x280f6e(0x1ca)](_0x2ee2f9),_0x14178a=_0x298103;_0x27f153&&_0x14178a[0x0]==='\\x27'&&(_0x14178a=_0x14178a['substr'](0x1,_0x14178a[_0x280f6e(0x20d)]-0x2));var _0x126371=_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594['_p_'+_0x14178a];_0x126371&&(_0x5d4bfe[_0x280f6e(0x220)]=_0x5d4bfe[_0x280f6e(0x220)]+0x1),_0x5d4bfe['isExpressionToEvaluate']=!!_0x126371;var _0x239579=typeof _0x2be839==_0x280f6e(0x1ef),_0x2075b5={'name':_0x239579||_0x27f153?_0x298103:this[_0x280f6e(0x271)](_0x298103)};if(_0x239579&&(_0x2075b5[_0x280f6e(0x1ef)]=!0x0),!(_0x504c63==='array'||_0x504c63===_0x280f6e(0x1a6))){var _0x3d2d8e=this[_0x280f6e(0x25d)](_0x2ee2f9,_0x2be839);if(_0x3d2d8e&&(_0x3d2d8e[_0x280f6e(0x199)]&&(_0x2075b5[_0x280f6e(0x25e)]=!0x0),_0x3d2d8e[_0x280f6e(0x239)]&&!_0x126371&&!_0x5d4bfe['resolveGetters']))return _0x2075b5[_0x280f6e(0x1c6)]=!0x0,this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x216f35;try{_0x216f35=_0x466772(_0x2ee2f9,_0x2be839);}catch(_0x50f558){return _0x2075b5={'name':_0x298103,'type':_0x280f6e(0x1b2),'error':_0x50f558[_0x280f6e(0x1be)]},this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x4dc249=this[_0x280f6e(0x19d)](_0x216f35),_0x5e863a=this[_0x280f6e(0x1a7)](_0x4dc249);if(_0x2075b5[_0x280f6e(0x1f9)]=_0x4dc249,_0x5e863a)this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x5ca40f=_0x280f6e;_0x2075b5[_0x5ca40f(0x1d3)]=_0x216f35[_0x5ca40f(0x22d)](),!_0x126371&&_0xc6afe0[_0x5ca40f(0x1dc)](_0x4dc249,_0x2075b5,_0x5d4bfe,{});});else{var _0x1e54db=_0x5d4bfe['autoExpand']&&_0x5d4bfe[_0x280f6e(0x277)]<_0x5d4bfe[_0x280f6e(0x268)]&&_0x5d4bfe[_0x280f6e(0x245)][_0x280f6e(0x236)](_0x216f35)<0x0&&_0x4dc249!==_0x280f6e(0x1bd)&&_0x5d4bfe[_0x280f6e(0x195)]<_0x5d4bfe[_0x280f6e(0x1d5)];_0x1e54db||_0x5d4bfe['level']<_0x5c79a8||_0x126371?(this[_0x280f6e(0x23a)](_0x2075b5,_0x216f35,_0x5d4bfe,_0x126371||{}),this[_0x280f6e(0x269)](_0x216f35,_0x2075b5)):this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x519504=_0x280f6e;_0x4dc249===_0x519504(0x1f7)||_0x4dc249===_0x519504(0x240)||(delete _0x2075b5[_0x519504(0x1d3)],_0x2075b5[_0x519504(0x23f)]=!0x0);});}return _0x2075b5;}finally{_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594,_0x5d4bfe[_0x280f6e(0x220)]=_0x5c79a8,_0x5d4bfe[_0x280f6e(0x224)]=_0x20bebc;}}['_capIfString'](_0x3fc6ce,_0x478b61,_0x11351e,_0x3eb109){var _0x45bb7c=_0x11d2fd,_0x196223=_0x3eb109['strLength']||_0x11351e['strLength'];if((_0x3fc6ce==='string'||_0x3fc6ce===_0x45bb7c(0x266))&&_0x478b61[_0x45bb7c(0x1d3)]){let _0x5832dd=_0x478b61[_0x45bb7c(0x1d3)][_0x45bb7c(0x20d)];_0x11351e[_0x45bb7c(0x1dd)]+=_0x5832dd,_0x11351e['allStrLength']>_0x11351e[_0x45bb7c(0x1eb)]?(_0x478b61[_0x45bb7c(0x23f)]='',delete _0x478b61['value']):_0x5832dd>_0x196223&&(_0x478b61[_0x45bb7c(0x23f)]=_0x478b61[_0x45bb7c(0x1d3)]['substr'](0x0,_0x196223),delete _0x478b61['value']);}}[_0x11d2fd(0x1ca)](_0x36ea58){var _0x4e1853=_0x11d2fd;return!!(_0x36ea58&&_0x4a231c[_0x4e1853(0x1e4)]&&this[_0x4e1853(0x1aa)](_0x36ea58)===_0x4e1853(0x233)&&_0x36ea58[_0x4e1853(0x237)]);}['_propertyName'](_0x889d08){var _0x2a9e0f=_0x11d2fd;if(_0x889d08[_0x2a9e0f(0x24a)](/^\\d+$/))return _0x889d08;var _0x5be9f3;try{_0x5be9f3=JSON['stringify'](''+_0x889d08);}catch{_0x5be9f3='\\x22'+this[_0x2a9e0f(0x1aa)](_0x889d08)+'\\x22';}return _0x5be9f3['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5be9f3=_0x5be9f3['substr'](0x1,_0x5be9f3[_0x2a9e0f(0x20d)]-0x2):_0x5be9f3=_0x5be9f3[_0x2a9e0f(0x260)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5be9f3;}[_0x11d2fd(0x1d0)](_0x223c38,_0xee378e,_0xced986,_0x4803c2){var _0x8480ae=_0x11d2fd;this[_0x8480ae(0x219)](_0x223c38,_0xee378e),_0x4803c2&&_0x4803c2(),this[_0x8480ae(0x269)](_0xced986,_0x223c38),this['_treeNodePropertiesAfterFullValue'](_0x223c38,_0xee378e);}['_treeNodePropertiesBeforeFullValue'](_0x13c011,_0x31fc7c){var _0x394e81=_0x11d2fd;this[_0x394e81(0x1ea)](_0x13c011,_0x31fc7c),this[_0x394e81(0x223)](_0x13c011,_0x31fc7c),this[_0x394e81(0x192)](_0x13c011,_0x31fc7c),this['_setNodePermissions'](_0x13c011,_0x31fc7c);}[_0x11d2fd(0x1ea)](_0x115c5c,_0x1c8355){}[_0x11d2fd(0x223)](_0x54bbce,_0x179cf4){}[_0x11d2fd(0x1b0)](_0x479590,_0x258dde){}[_0x11d2fd(0x1a8)](_0x30d571){var _0x3c36bf=_0x11d2fd;return _0x30d571===this[_0x3c36bf(0x24f)];}[_0x11d2fd(0x1d8)](_0x1e498e,_0x425178){var _0x55389b=_0x11d2fd;this[_0x55389b(0x1b0)](_0x1e498e,_0x425178),this['_setNodeExpandableState'](_0x1e498e),_0x425178[_0x55389b(0x249)]&&this['_sortProps'](_0x1e498e),this[_0x55389b(0x218)](_0x1e498e,_0x425178),this['_addLoadNode'](_0x1e498e,_0x425178),this[_0x55389b(0x19b)](_0x1e498e);}['_additionalMetadata'](_0x446c33,_0x5100e1){var _0xa612d4=_0x11d2fd;let _0x4c171c;try{_0x4a231c[_0xa612d4(0x256)]&&(_0x4c171c=_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)],_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=function(){}),_0x446c33&&typeof _0x446c33[_0xa612d4(0x20d)]==_0xa612d4(0x1e3)&&(_0x5100e1['length']=_0x446c33[_0xa612d4(0x20d)]);}catch{}finally{_0x4c171c&&(_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=_0x4c171c);}if(_0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1e3)||_0x5100e1[_0xa612d4(0x1f9)]==='Number'){if(isNaN(_0x5100e1[_0xa612d4(0x1d3)]))_0x5100e1[_0xa612d4(0x1bf)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];else switch(_0x5100e1['value']){case Number[_0xa612d4(0x252)]:_0x5100e1[_0xa612d4(0x22e)]=!0x0,delete _0x5100e1['value'];break;case Number[_0xa612d4(0x1ce)]:_0x5100e1[_0xa612d4(0x1bc)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];break;case 0x0:this[_0xa612d4(0x202)](_0x5100e1[_0xa612d4(0x1d3)])&&(_0x5100e1[_0xa612d4(0x1ee)]=!0x0);break;}}else _0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1bd)&&typeof _0x446c33[_0xa612d4(0x206)]=='string'&&_0x446c33[_0xa612d4(0x206)]&&_0x5100e1['name']&&_0x446c33['name']!==_0x5100e1[_0xa612d4(0x206)]&&(_0x5100e1[_0xa612d4(0x1b3)]=_0x446c33[_0xa612d4(0x206)]);}['_isNegativeZero'](_0x59c9ba){return 0x1/_0x59c9ba===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x194b22){var _0x489762=_0x11d2fd;!_0x194b22['props']||!_0x194b22[_0x489762(0x273)][_0x489762(0x20d)]||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1c9)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1e4)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1b4)||_0x194b22['props'][_0x489762(0x24d)](function(_0x5750f1,_0x2eb738){var _0x76f8ac=_0x489762,_0x5b2bb8=_0x5750f1[_0x76f8ac(0x206)][_0x76f8ac(0x24e)](),_0x4a4f8f=_0x2eb738[_0x76f8ac(0x206)]['toLowerCase']();return _0x5b2bb8<_0x4a4f8f?-0x1:_0x5b2bb8>_0x4a4f8f?0x1:0x0;});}[_0x11d2fd(0x218)](_0x1c5692,_0x5941d2){var _0x6ddc63=_0x11d2fd;if(!(_0x5941d2[_0x6ddc63(0x227)]||!_0x1c5692[_0x6ddc63(0x273)]||!_0x1c5692['props']['length'])){for(var _0x397818=[],_0x1bb0d6=[],_0xcf63f9=0x0,_0x522aed=_0x1c5692[_0x6ddc63(0x273)][_0x6ddc63(0x20d)];_0xcf63f9<_0x522aed;_0xcf63f9++){var _0x5b66ea=_0x1c5692['props'][_0xcf63f9];_0x5b66ea[_0x6ddc63(0x1f9)]===_0x6ddc63(0x1bd)?_0x397818[_0x6ddc63(0x1f3)](_0x5b66ea):_0x1bb0d6[_0x6ddc63(0x1f3)](_0x5b66ea);}if(!(!_0x1bb0d6['length']||_0x397818[_0x6ddc63(0x20d)]<=0x1)){_0x1c5692[_0x6ddc63(0x273)]=_0x1bb0d6;var _0x4d8efd={'functionsNode':!0x0,'props':_0x397818};this[_0x6ddc63(0x1ea)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x1b0)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x243)](_0x4d8efd),this[_0x6ddc63(0x1f8)](_0x4d8efd,_0x5941d2),_0x4d8efd['id']+='\\x20f',_0x1c5692['props'][_0x6ddc63(0x207)](_0x4d8efd);}}}[_0x11d2fd(0x1e1)](_0x1c7ad0,_0x297b6d){}[_0x11d2fd(0x243)](_0x2f5087){}[_0x11d2fd(0x255)](_0x401698){var _0x3fdb91=_0x11d2fd;return Array[_0x3fdb91(0x1ac)](_0x401698)||typeof _0x401698==_0x3fdb91(0x198)&&this[_0x3fdb91(0x1aa)](_0x401698)==='[object\\x20Array]';}[_0x11d2fd(0x1f8)](_0x152162,_0x1ed574){}[_0x11d2fd(0x19b)](_0x161253){var _0x679a0c=_0x11d2fd;delete _0x161253[_0x679a0c(0x21f)],delete _0x161253['_hasSetOnItsPath'],delete _0x161253[_0x679a0c(0x1fd)];}[_0x11d2fd(0x192)](_0x43a91c,_0x4b1cef){}}let _0x1698da=new _0x33872f(),_0x4336d8={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x507368={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23c2be(_0x19fcd2,_0x453451,_0x181b6d,_0x2a08b3,_0x4b434e,_0x54185d){var _0x9210d5=_0x11d2fd;let _0x5b44f0,_0x36715b;try{_0x36715b=_0x9e4c4d(),_0x5b44f0=_0x2e0b83[_0x453451],!_0x5b44f0||_0x36715b-_0x5b44f0['ts']>0x1f4&&_0x5b44f0[_0x9210d5(0x226)]&&_0x5b44f0['time']/_0x5b44f0[_0x9210d5(0x226)]<0x64?(_0x2e0b83[_0x453451]=_0x5b44f0={'count':0x0,'time':0x0,'ts':_0x36715b},_0x2e0b83[_0x9210d5(0x208)]={}):_0x36715b-_0x2e0b83[_0x9210d5(0x208)]['ts']>0x32&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]/_0x2e0b83[_0x9210d5(0x208)]['count']<0x64&&(_0x2e0b83[_0x9210d5(0x208)]={});let _0x7293a0=[],_0x36296b=_0x5b44f0['reduceLimits']||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]?_0x507368:_0x4336d8,_0x247beb=_0x217a47=>{var _0x4a89a2=_0x9210d5;let _0x541454={};return _0x541454[_0x4a89a2(0x273)]=_0x217a47[_0x4a89a2(0x273)],_0x541454[_0x4a89a2(0x1e2)]=_0x217a47[_0x4a89a2(0x1e2)],_0x541454[_0x4a89a2(0x21b)]=_0x217a47[_0x4a89a2(0x21b)],_0x541454[_0x4a89a2(0x1eb)]=_0x217a47[_0x4a89a2(0x1eb)],_0x541454['autoExpandLimit']=_0x217a47['autoExpandLimit'],_0x541454[_0x4a89a2(0x268)]=_0x217a47['autoExpandMaxDepth'],_0x541454[_0x4a89a2(0x249)]=!0x1,_0x541454[_0x4a89a2(0x227)]=!_0x39e58b,_0x541454['depth']=0x1,_0x541454[_0x4a89a2(0x277)]=0x0,_0x541454[_0x4a89a2(0x18a)]='root_exp_id',_0x541454[_0x4a89a2(0x1c3)]=_0x4a89a2(0x1c2),_0x541454['autoExpand']=!0x0,_0x541454[_0x4a89a2(0x245)]=[],_0x541454[_0x4a89a2(0x195)]=0x0,_0x541454[_0x4a89a2(0x26f)]=!0x0,_0x541454[_0x4a89a2(0x1dd)]=0x0,_0x541454[_0x4a89a2(0x1fc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x541454;};for(var _0x40c849=0x0;_0x40c849<_0x4b434e[_0x9210d5(0x20d)];_0x40c849++)_0x7293a0['push'](_0x1698da[_0x9210d5(0x23a)]({'timeNode':_0x19fcd2==='time'||void 0x0},_0x4b434e[_0x40c849],_0x247beb(_0x36296b),{}));if(_0x19fcd2===_0x9210d5(0x1ab)){let _0x4b4e9e=Error[_0x9210d5(0x229)];try{Error['stackTraceLimit']=0x1/0x0,_0x7293a0[_0x9210d5(0x1f3)](_0x1698da[_0x9210d5(0x23a)]({'stackNode':!0x0},new Error()[_0x9210d5(0x193)],_0x247beb(_0x36296b),{'strLength':0x1/0x0}));}finally{Error[_0x9210d5(0x229)]=_0x4b4e9e;}}return{'method':_0x9210d5(0x1cd),'version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':_0x7293a0,'id':_0x453451,'context':_0x54185d}]};}catch(_0x3c4fcd){return{'method':'log','version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':[{'type':_0x9210d5(0x1b2),'error':_0x3c4fcd&&_0x3c4fcd[_0x9210d5(0x1be)]}],'id':_0x453451,'context':_0x54185d}]};}finally{try{if(_0x5b44f0&&_0x36715b){let _0x39c04e=_0x9e4c4d();_0x5b44f0[_0x9210d5(0x226)]++,_0x5b44f0['time']+=_0x27fc15(_0x36715b,_0x39c04e),_0x5b44f0['ts']=_0x39c04e,_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]++,_0x2e0b83['hits'][_0x9210d5(0x1ae)]+=_0x27fc15(_0x36715b,_0x39c04e),_0x2e0b83['hits']['ts']=_0x39c04e,(_0x5b44f0[_0x9210d5(0x226)]>0x32||_0x5b44f0['time']>0x64)&&(_0x5b44f0[_0x9210d5(0x1b6)]=!0x0),(_0x2e0b83['hits']['count']>0x3e8||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]>0x12c)&&(_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]=!0x0);}}catch{}}}return _0x23c2be;}((_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x57888b,_0x4d288a,_0x2fe894,_0x3cfa6a,_0x26d1d4)=>{var _0x1998d3=_0x1f7fe1;if(_0x4b00d8[_0x1998d3(0x232)])return _0x4b00d8['_console_ninja'];if(!J(_0x4b00d8,_0x2fe894,_0x213295))return _0x4b00d8['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4b00d8[_0x1998d3(0x232)];let _0x1ec8c8=W(_0x4b00d8),_0x1a3c7f=_0x1ec8c8['elapsed'],_0x41cf6a=_0x1ec8c8[_0x1998d3(0x23d)],_0x247060=_0x1ec8c8[_0x1998d3(0x251)],_0x1d3c45={'hits':{},'ts':{}},_0x5683be=Y(_0x4b00d8,_0x3cfa6a,_0x1d3c45,_0x57888b),_0x3e248f=_0x10392f=>{_0x1d3c45['ts'][_0x10392f]=_0x41cf6a();},_0x2ebbe7=(_0x1a02c8,_0x4327c1)=>{var _0x1595a3=_0x1998d3;let _0x48011b=_0x1d3c45['ts'][_0x4327c1];if(delete _0x1d3c45['ts'][_0x4327c1],_0x48011b){let _0x441fec=_0x1a3c7f(_0x48011b,_0x41cf6a());_0x341adf(_0x5683be(_0x1595a3(0x1ae),_0x1a02c8,_0x247060(),_0x3e00fc,[_0x441fec],_0x4327c1));}},_0x665301=_0x409553=>_0x2a8d96=>{var _0x35b2aa=_0x1998d3;try{_0x3e248f(_0x2a8d96),_0x409553(_0x2a8d96);}finally{_0x4b00d8['console'][_0x35b2aa(0x1ae)]=_0x409553;}},_0x146215=_0x5aa591=>_0x44b8c0=>{var _0xc5b6e3=_0x1998d3;try{let [_0x4eb1b6,_0x154adc]=_0x44b8c0[_0xc5b6e3(0x1f6)](_0xc5b6e3(0x259));_0x2ebbe7(_0x154adc,_0x4eb1b6),_0x5aa591(_0x4eb1b6);}finally{_0x4b00d8[_0xc5b6e3(0x256)]['timeEnd']=_0x5aa591;}};_0x4b00d8[_0x1998d3(0x232)]={'consoleLog':(_0x2393f8,_0x51be62)=>{var _0x51151b=_0x1998d3;_0x4b00d8[_0x51151b(0x256)][_0x51151b(0x1cd)][_0x51151b(0x206)]!=='disabledLog'&&_0x341adf(_0x5683be(_0x51151b(0x1cd),_0x2393f8,_0x247060(),_0x3e00fc,_0x51be62));},'consoleTrace':(_0x119369,_0x442031)=>{var _0x594c80=_0x1998d3;_0x4b00d8[_0x594c80(0x256)][_0x594c80(0x1cd)]['name']!=='disabledTrace'&&_0x341adf(_0x5683be(_0x594c80(0x1ab),_0x119369,_0x247060(),_0x3e00fc,_0x442031));},'consoleTime':()=>{var _0x32edf0=_0x1998d3;_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]=_0x665301(_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]);},'consoleTimeEnd':()=>{var _0xceb7a9=_0x1998d3;_0x4b00d8[_0xceb7a9(0x256)][_0xceb7a9(0x1a2)]=_0x146215(_0x4b00d8['console']['timeEnd']);},'autoLog':(_0x561021,_0x3343a6)=>{var _0x99253f=_0x1998d3;_0x341adf(_0x5683be(_0x99253f(0x1cd),_0x3343a6,_0x247060(),_0x3e00fc,[_0x561021]));},'autoLogMany':(_0x14df62,_0x1aca85)=>{var _0x4e9934=_0x1998d3;_0x341adf(_0x5683be(_0x4e9934(0x1cd),_0x14df62,_0x247060(),_0x3e00fc,_0x1aca85));},'autoTrace':(_0x19f33b,_0x49cf5c)=>{var _0x38aba5=_0x1998d3;_0x341adf(_0x5683be(_0x38aba5(0x1ab),_0x49cf5c,_0x247060(),_0x3e00fc,[_0x19f33b]));},'autoTraceMany':(_0xcd9962,_0x3adbc0)=>{var _0x40a7aa=_0x1998d3;_0x341adf(_0x5683be(_0x40a7aa(0x1ab),_0xcd9962,_0x247060(),_0x3e00fc,_0x3adbc0));},'autoTime':(_0x1e1fd7,_0x2e5429,_0x2ccb02)=>{_0x3e248f(_0x2ccb02);},'autoTimeEnd':(_0x2e38e6,_0x141bf8,_0xdc33b2)=>{_0x2ebbe7(_0x141bf8,_0xdc33b2);},'coverage':_0x298f37=>{var _0x2380b2=_0x1998d3;_0x341adf({'method':_0x2380b2(0x1de),'version':_0x57888b,'args':[{'id':_0x298f37}]});}};let _0x341adf=b(_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x26d1d4),_0x3e00fc=_0x4b00d8[_0x1998d3(0x26e)];return _0x4b00d8[_0x1998d3(0x232)];})(globalThis,_0x1f7fe1(0x213),_0x1f7fe1(0x20c),_0x1f7fe1(0x1d7),_0x1f7fe1(0x209),'1.0.0',_0x1f7fe1(0x18e),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],_0x1f7fe1(0x1af),_0x1f7fe1(0x1b1));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/* harmony import */ var _datahandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datahandler */ "./src/modules/datahandler.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");




function createModal(type, ...editTodo) {
	// Fetch modal element from DOM
	const modal = document.querySelector('#modal')
	modal.textContent = ''

	// Create relevant modal content
	// Form elements holds entire form inside modal
	const form = document.createElement('form')
	form.setAttribute('autocomplete', 'off')

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
	} else if (type === 'edit Todo') {
		/* eslint-disable */console.log(...oo_oo(`3207537792_32_2_32_56_4`,'triggered edit, ' + inputPara + editTodo))
		createTodoModal(inputPara, ...editTodo)
	}

	//Modal buttons

	//submit button
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

	// Button functionality:
	// Submit button
	// Fetch input values
	let modalInput = modal.querySelectorAll('select, input, textarea')
	const inputType = inputPara.getAttribute('type')
	const todoID = inputPara.getAttribute('todoID')

	// Add event listener to submit button.
	submitBtn.addEventListener('click', (e) => {
		// send input values and inputType (project or todo?) to processing
		e.preventDefault()
		;(0,_datahandler__WEBPACK_IMPORTED_MODULE_1__.updateProjectsArray)(inputType, modalInput, todoID)
		modal.close()
	})

	// Cancel button
	cancelBtn.addEventListener('click', (e) => {
		// prevent default behavior
		e.preventDefault()
		// clear dataset
		modalInput = ''
		//close modal
		modal.close()
	})
}

function createTodoModal(inputPara, editTodo) {
	// Establish input variables
	inputPara.setAttribute('type', 'todo')
	// Check if this is an edit operation, or new operation
	let editOperation = false
	if (editTodo !== undefined) {
		/* eslint-disable */console.log(...oo_oo(`3207537792_89_2_89_69_4`,'triggered edit operation ' + Object.values(arguments)))
		editOperation = true

		inputPara.setAttribute('type', 'todo-edit')
		inputPara.setAttribute('todoID', editTodo[6])
	}
	// inputPara will hold all input elements for easy appending later

	//Project input
	/* eslint-disable */console.log(...oo_oo(`3207537792_98_1_98_48_4`,'initiating modal' + editOperation))
	const projectCont = document.createElement('div')
	const projectLabel = document.createElement('label')
	projectLabel.setAttribute('for', 'projectSelect')
	projectLabel.textContent = 'Active project: '
	const projectSelect = document.createElement('select')
	projectSelect.setAttribute('name', 'select-Project')
	projectSelect.setAttribute('id', 'select-Project')
	_datahandler__WEBPACK_IMPORTED_MODULE_1__.projectsArray.forEach((project) => {
		const projectItem = document.createElement('option')
		projectItem.setAttribute('value', project.title)
		projectItem.textContent = project.title
		projectSelect.appendChild(projectItem)
	})
	//if edit operation, select project.
	if (editOperation) {
		projectSelect.value = editTodo[0]
	}
	projectCont.append(projectLabel, projectSelect)

	// Title input
	const titleCont = document.createElement('div')
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	if (editOperation) {
		titleInput.value = editTodo[1]
	}
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleCont.append(titleLabel, titleInput)

	// description input
	const descCont = document.createElement('div')
	const descriptionLabel = document.createElement('label')
	descriptionLabel.setAttribute('for', 'descriptionInput')
	descriptionLabel.textContent = 'Description: '
	const descriptionInput = document.createElement('input')
	if (editOperation) {
		descriptionInput.value = editTodo[2]
	}
	setInputAttributes(descriptionInput, 'description', 'text')
	descCont.append(descriptionLabel, descriptionInput)

	// dueDate input
	const dueDateCont = document.createElement('div')
	const dueDateLabel = document.createElement('label')
	dueDateLabel.setAttribute('for', 'dueDateInput')
	dueDateLabel.textContent = 'Due date: '
	const dueDateInput = document.createElement('input')
	setInputAttributes(dueDateInput, 'dueDate', 'date')
	if (editOperation) {
		const originalDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(editTodo[3]), 'yyyy-MM-dd')
		const formattedDate = originalDate
		/* eslint-disable */console.log(...oo_oo(`3207537792_155_2_155_28_4`,formattedDate))
		dueDateInput.value = originalDate
	}

	dueDateCont.append(dueDateLabel, dueDateInput)

	// priority
	const priorityCont = document.createElement('div')
	const priorityLabel = document.createElement('label')
	priorityLabel.setAttribute('for', 'priorityInput')
	priorityLabel.textContent = 'Priority: '
	const priorityInput = document.createElement('input')
	if (editOperation) {
		priorityInput.checked = editTodo[4] === 'true'
	}
	setInputAttributes(priorityInput, 'priority', 'checkbox')
	priorityCont.append(priorityLabel, priorityInput)

	// Notes
	const notesCont = document.createElement('div')
	const notesLabel = document.createElement('label')
	notesLabel.setAttribute('for', 'notesInput')
	notesLabel.textContent = 'Notes: '
	const notesInput = document.createElement('textarea')
	if (editOperation) {
		notesInput.value = editTodo[5]
	}
	setInputAttributes(notesInput, 'notes', 'textArea')
	// textArea specific attributes

	notesCont.append(notesLabel, notesInput)

	// Put it all together
	inputPara.append(
		projectCont,
		titleCont,
		descCont,
		dueDateCont,
		priorityCont,
		notesCont
	)
}

function createProjectModal(inputPara) {
	// inputPara holds elements below for easy appending
	// assign type attribute for later processing
	inputPara.setAttribute('type', 'project')
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// package element
	titleLabel.appendChild(titleInput)
	// put it together
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
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1f7fe1=_0x37e4;(function(_0x47ffb5,_0x305716){var _0x372d84=_0x37e4,_0x325e8f=_0x47ffb5();while(!![]){try{var _0x493611=-parseInt(_0x372d84(0x225))/0x1*(-parseInt(_0x372d84(0x1d6))/0x2)+-parseInt(_0x372d84(0x1a9))/0x3*(-parseInt(_0x372d84(0x272))/0x4)+-parseInt(_0x372d84(0x25b))/0x5+-parseInt(_0x372d84(0x18b))/0x6*(-parseInt(_0x372d84(0x235))/0x7)+-parseInt(_0x372d84(0x1f1))/0x8*(parseInt(_0x372d84(0x1b9))/0x9)+parseInt(_0x372d84(0x1f2))/0xa*(-parseInt(_0x372d84(0x1ed))/0xb)+parseInt(_0x372d84(0x1e8))/0xc;if(_0x493611===_0x305716)break;else _0x325e8f['push'](_0x325e8f['shift']());}catch(_0x2b499e){_0x325e8f['push'](_0x325e8f['shift']());}}}(_0x28ed,0x45f58));function _0x28ed(){var _0x8ba4d7=[':logPointId:','_HTMLAllCollection','2376365mjTMQa','concat','_getOwnPropertyDescriptor','setter','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','replace','parse','getOwnPropertyNames','port','_reconnectTimeout','nodeModules','String','_property','autoExpandMaxDepth','_additionalMetadata','_allowedToSend','url','ws/index.js','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_console_ninja_session','resolveGetters','constructor','_propertyName','88864PeNoQn','props','autoExpand','_getOwnPropertyNames','method','level','create','onclose','versions','expId','453786hZRTMQ','_isPrimitiveWrapperType','_inNextEdge','1709311016740','_connectToHostNow','hasOwnProperty','index','_setNodeExpressionPath','stack','_ws','autoExpandPropertyCount','edge','Buffer','object','set','ws://','_cleanNode','astro','_type','_webSocketErrorDocsLink','catch','prototype','_p_','timeEnd','WebSocket','global','slice','Error','_isPrimitiveType','_isUndefined','54iRnQJN','_objectToString','trace','isArray','_quotedRegExp','time','','_setNodeLabel','','unknown','funcName','Set','\\x20browser','reduceLimits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','getOwnPropertyDescriptor','9VpHEMS','includes','_Symbol','negativeInfinity','function','message','nan','onmessage','_dateToString','root_exp','rootExpression','dockerizedApp','_WebSocketClass','getter','hostname','warn','array','_isMap','elapsed','_allowedToConnectOnSend','log','NEGATIVE_INFINITY','cappedElements','_processTreeNodeResult','reload','_connected','value','readyState','autoExpandLimit','14twUgXH',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.290/node_modules\",'_treeNodePropertiesAfterFullValue','...','string','_maxConnectAttemptCount','_capIfString','allStrLength','coverage','map','pop','_addLoadNode','elements','number','Map','path','[object\\x20Array]','NEXT_RUNTIME','8772096aBeiNa','_regExpToString','_setNodeId','totalStrLength','data','275zCfauG','negativeZero','symbol','getWebSocketClass','3827464fsivUc','99430rMpwcs','push','_connectAttemptCount','env','split','null','_setNodePermissions','type','_keyStrRegExp','__es'+'Module','node','_hasMapOnItsPath','toString','_consoleNinjaAllowedToStart','close','send','_isNegativeZero','then','_inBrowser','unref','name','unshift','hits','webpack','_socket','_disposeWebsocket','34879','length','_blacklistedProperty','perf_hooks','expressionsToEvaluate','_isSet','_sendErrorMessage','127.0.0.1','process','host','join','HTMLAllCollection','_addFunctionsNode','_treeNodePropertiesBeforeFullValue','getOwnPropertySymbols','strLength','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','call','_getOwnPropertySymbols','_hasSymbolPropertyOnItsPath','depth','_WebSocket','bind','_setNodeQueryPath','isExpressionToEvaluate','29525YGRNBJ','count','noFunctions','_attemptToReconnectShortly','stackTraceLimit','Number','performance','test','valueOf','positiveInfinity','_p_length','error','onerror','_console_ninja','[object\\x20Map]','cappedProps','14hxDKYV','indexOf','forEach','parent','get','serialize','getPrototypeOf','_addProperty','timeStamp','location','capped','undefined','_connecting','[object\\x20BigInt]','_setNodeExpandableState','enumerable','autoExpandPreviousObjects','https://tinyurl.com/37x8b79t','\\x20server','hrtime','sortProps','match','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','sort','toLowerCase','_undefined','onopen','now','POSITIVE_INFINITY','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_isArray','console','_addObjectProperty','gateway.docker.internal'];_0x28ed=function(){return _0x8ba4d7;};return _0x28ed();}function _0x37e4(_0x69e146,_0x3db28d){var _0x28ed6e=_0x28ed();return _0x37e4=function(_0x37e460,_0x19a257){_0x37e460=_0x37e460-0x189;var _0x1890cd=_0x28ed6e[_0x37e460];return _0x1890cd;},_0x37e4(_0x69e146,_0x3db28d);}var j=Object[_0x1f7fe1(0x278)],H=Object['defineProperty'],G=Object[_0x1f7fe1(0x1b8)],ee=Object[_0x1f7fe1(0x262)],te=Object[_0x1f7fe1(0x23b)],ne=Object[_0x1f7fe1(0x1a0)][_0x1f7fe1(0x190)],re=(_0x5ac642,_0x1cf560,_0x561553,_0x20c447)=>{var _0x45c202=_0x1f7fe1;if(_0x1cf560&&typeof _0x1cf560==_0x45c202(0x198)||typeof _0x1cf560==_0x45c202(0x1bd)){for(let _0x508a2c of ee(_0x1cf560))!ne[_0x45c202(0x21d)](_0x5ac642,_0x508a2c)&&_0x508a2c!==_0x561553&&H(_0x5ac642,_0x508a2c,{'get':()=>_0x1cf560[_0x508a2c],'enumerable':!(_0x20c447=G(_0x1cf560,_0x508a2c))||_0x20c447[_0x45c202(0x244)]});}return _0x5ac642;},x=(_0x1a9261,_0xb842e1,_0x3a123d)=>(_0x3a123d=_0x1a9261!=null?j(te(_0x1a9261)):{},re(_0xb842e1||!_0x1a9261||!_0x1a9261[_0x1f7fe1(0x1fb)]?H(_0x3a123d,'default',{'value':_0x1a9261,'enumerable':!0x0}):_0x3a123d,_0x1a9261)),X=class{constructor(_0x258946,_0x4abc24,_0x53a90a,_0x68db45,_0x5457e8){var _0x2597cb=_0x1f7fe1;this[_0x2597cb(0x1a4)]=_0x258946,this[_0x2597cb(0x215)]=_0x4abc24,this[_0x2597cb(0x263)]=_0x53a90a,this[_0x2597cb(0x265)]=_0x68db45,this['dockerizedApp']=_0x5457e8,this['_allowedToSend']=!0x0,this[_0x2597cb(0x1cc)]=!0x0,this[_0x2597cb(0x1d2)]=!0x1,this[_0x2597cb(0x241)]=!0x1,this[_0x2597cb(0x18d)]=_0x258946[_0x2597cb(0x214)]?.['env']?.[_0x2597cb(0x1e7)]==='edge',this[_0x2597cb(0x204)]=!this[_0x2597cb(0x1a4)][_0x2597cb(0x214)]?.[_0x2597cb(0x189)]?.[_0x2597cb(0x1fc)]&&!this[_0x2597cb(0x18d)],this['_WebSocketClass']=null,this[_0x2597cb(0x1f4)]=0x0,this[_0x2597cb(0x1db)]=0x14,this[_0x2597cb(0x19e)]=_0x2597cb(0x246),this[_0x2597cb(0x212)]=(this[_0x2597cb(0x204)]?_0x2597cb(0x25f):_0x2597cb(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x1f7fe1(0x1f0)](){var _0x3361a6=_0x1f7fe1;if(this[_0x3361a6(0x1c5)])return this['_WebSocketClass'];let _0x240d8f;if(this[_0x3361a6(0x204)]||this['_inNextEdge'])_0x240d8f=this['global'][_0x3361a6(0x1a3)];else{if(this['global']['process']?.[_0x3361a6(0x221)])_0x240d8f=this['global'][_0x3361a6(0x214)]?.[_0x3361a6(0x221)];else try{let _0x425912=await import(_0x3361a6(0x1e5));_0x240d8f=(await import((await import(_0x3361a6(0x26b)))['pathToFileURL'](_0x425912[_0x3361a6(0x216)](this[_0x3361a6(0x265)],_0x3361a6(0x26c)))[_0x3361a6(0x1fe)]()))['default'];}catch{try{_0x240d8f=require(require(_0x3361a6(0x1e5))[_0x3361a6(0x216)](this[_0x3361a6(0x265)],'ws'));}catch{throw new Error(_0x3361a6(0x21c));}}}return this[_0x3361a6(0x1c5)]=_0x240d8f,_0x240d8f;}[_0x1f7fe1(0x18f)](){var _0x1041c7=_0x1f7fe1;this[_0x1041c7(0x241)]||this[_0x1041c7(0x1d2)]||this[_0x1041c7(0x1f4)]>=this['_maxConnectAttemptCount']||(this[_0x1041c7(0x1cc)]=!0x1,this[_0x1041c7(0x241)]=!0x0,this[_0x1041c7(0x1f4)]++,this[_0x1041c7(0x194)]=new Promise((_0x1d47a8,_0x3026d6)=>{var _0xdd1106=_0x1041c7;this[_0xdd1106(0x1f0)]()[_0xdd1106(0x203)](_0x4cc8ff=>{var _0x47dac7=_0xdd1106;let _0x1d10d0=new _0x4cc8ff(_0x47dac7(0x19a)+(!this[_0x47dac7(0x204)]&&this[_0x47dac7(0x1c4)]?_0x47dac7(0x258):this['host'])+':'+this['port']);_0x1d10d0[_0x47dac7(0x231)]=()=>{var _0x836ce0=_0x47dac7;this[_0x836ce0(0x26a)]=!0x1,this['_disposeWebsocket'](_0x1d10d0),this[_0x836ce0(0x228)](),_0x3026d6(new Error('logger\\x20websocket\\x20error'));},_0x1d10d0[_0x47dac7(0x250)]=()=>{var _0x316d98=_0x47dac7;this['_inBrowser']||_0x1d10d0[_0x316d98(0x20a)]&&_0x1d10d0[_0x316d98(0x20a)]['unref']&&_0x1d10d0[_0x316d98(0x20a)][_0x316d98(0x205)](),_0x1d47a8(_0x1d10d0);},_0x1d10d0['onclose']=()=>{var _0x31901b=_0x47dac7;this[_0x31901b(0x1cc)]=!0x0,this[_0x31901b(0x20b)](_0x1d10d0),this[_0x31901b(0x228)]();},_0x1d10d0[_0x47dac7(0x1c0)]=_0x934319=>{var _0x2f2917=_0x47dac7;try{_0x934319&&_0x934319[_0x2f2917(0x1ec)]&&this[_0x2f2917(0x204)]&&JSON[_0x2f2917(0x261)](_0x934319['data'])[_0x2f2917(0x276)]===_0x2f2917(0x1d1)&&this[_0x2f2917(0x1a4)][_0x2f2917(0x23e)]['reload']();}catch{}};})[_0xdd1106(0x203)](_0x479578=>(this[_0xdd1106(0x1d2)]=!0x0,this[_0xdd1106(0x241)]=!0x1,this[_0xdd1106(0x1cc)]=!0x1,this[_0xdd1106(0x26a)]=!0x0,this[_0xdd1106(0x1f4)]=0x0,_0x479578))[_0xdd1106(0x19f)](_0x4edd30=>(this[_0xdd1106(0x1d2)]=!0x1,this['_connecting']=!0x1,console[_0xdd1106(0x1c8)](_0xdd1106(0x24c)+this[_0xdd1106(0x19e)]),_0x3026d6(new Error(_0xdd1106(0x1b7)+(_0x4edd30&&_0x4edd30[_0xdd1106(0x1be)])))));}));}['_disposeWebsocket'](_0x49318d){var _0x4323c0=_0x1f7fe1;this[_0x4323c0(0x1d2)]=!0x1,this[_0x4323c0(0x241)]=!0x1;try{_0x49318d[_0x4323c0(0x279)]=null,_0x49318d[_0x4323c0(0x231)]=null,_0x49318d[_0x4323c0(0x250)]=null;}catch{}try{_0x49318d[_0x4323c0(0x1d4)]<0x2&&_0x49318d[_0x4323c0(0x200)]();}catch{}}['_attemptToReconnectShortly'](){var _0xafae58=_0x1f7fe1;clearTimeout(this[_0xafae58(0x264)]),!(this[_0xafae58(0x1f4)]>=this[_0xafae58(0x1db)])&&(this[_0xafae58(0x264)]=setTimeout(()=>{var _0x17ce1b=_0xafae58;this[_0x17ce1b(0x1d2)]||this[_0x17ce1b(0x241)]||(this[_0x17ce1b(0x18f)](),this['_ws']?.[_0x17ce1b(0x19f)](()=>this[_0x17ce1b(0x228)]()));},0x1f4),this[_0xafae58(0x264)][_0xafae58(0x205)]&&this['_reconnectTimeout'][_0xafae58(0x205)]());}async[_0x1f7fe1(0x201)](_0x16766e){var _0x150c4e=_0x1f7fe1;try{if(!this[_0x150c4e(0x26a)])return;this[_0x150c4e(0x1cc)]&&this[_0x150c4e(0x18f)](),(await this[_0x150c4e(0x194)])[_0x150c4e(0x201)](JSON['stringify'](_0x16766e));}catch(_0x58d9aa){console[_0x150c4e(0x1c8)](this[_0x150c4e(0x212)]+':\\x20'+(_0x58d9aa&&_0x58d9aa[_0x150c4e(0x1be)])),this[_0x150c4e(0x26a)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x1266e6,_0x5e5ebe,_0x3659b0,_0x42e04e,_0x503754,_0xf95501){var _0x1cbf77=_0x1f7fe1;let _0x1c2814=_0x3659b0['split'](',')[_0x1cbf77(0x1df)](_0x290148=>{var _0x4336e5=_0x1cbf77;try{_0x1266e6[_0x4336e5(0x26e)]||((_0x503754==='next.js'||_0x503754==='remix'||_0x503754===_0x4336e5(0x19c)||_0x503754==='angular')&&(_0x503754+=!_0x1266e6[_0x4336e5(0x214)]?.['versions']?.[_0x4336e5(0x1fc)]&&_0x1266e6[_0x4336e5(0x214)]?.[_0x4336e5(0x1f5)]?.['NEXT_RUNTIME']!==_0x4336e5(0x196)?_0x4336e5(0x1b5):_0x4336e5(0x247)),_0x1266e6['_console_ninja_session']={'id':+new Date(),'tool':_0x503754});let _0xd2e366=new X(_0x1266e6,_0x5e5ebe,_0x290148,_0x42e04e,_0xf95501);return _0xd2e366[_0x4336e5(0x201)][_0x4336e5(0x222)](_0xd2e366);}catch(_0x46304f){return console['warn'](_0x4336e5(0x254),_0x46304f&&_0x46304f[_0x4336e5(0x1be)]),()=>{};}});return _0x130af4=>_0x1c2814[_0x1cbf77(0x237)](_0x353891=>_0x353891(_0x130af4));}function W(_0x23fa9f){var _0x409e0d=_0x1f7fe1;let _0x4e8289=function(_0x1deaf8,_0x175b0b){return _0x175b0b-_0x1deaf8;},_0x52630f;if(_0x23fa9f[_0x409e0d(0x22b)])_0x52630f=function(){var _0x343bf=_0x409e0d;return _0x23fa9f[_0x343bf(0x22b)][_0x343bf(0x251)]();};else{if(_0x23fa9f[_0x409e0d(0x214)]&&_0x23fa9f[_0x409e0d(0x214)][_0x409e0d(0x248)]&&_0x23fa9f[_0x409e0d(0x214)]?.[_0x409e0d(0x1f5)]?.[_0x409e0d(0x1e7)]!==_0x409e0d(0x196))_0x52630f=function(){var _0x3f21b4=_0x409e0d;return _0x23fa9f[_0x3f21b4(0x214)][_0x3f21b4(0x248)]();},_0x4e8289=function(_0x5ba0ff,_0x3f75fb){return 0x3e8*(_0x3f75fb[0x0]-_0x5ba0ff[0x0])+(_0x3f75fb[0x1]-_0x5ba0ff[0x1])/0xf4240;};else try{let {performance:_0x830f41}=require(_0x409e0d(0x20f));_0x52630f=function(){return _0x830f41['now']();};}catch{_0x52630f=function(){return+new Date();};}}return{'elapsed':_0x4e8289,'timeStamp':_0x52630f,'now':()=>Date[_0x409e0d(0x251)]()};}function J(_0x4220c1,_0x2aef74,_0x3cf029){var _0x551246=_0x1f7fe1;if(_0x4220c1[_0x551246(0x1ff)]!==void 0x0)return _0x4220c1['_consoleNinjaAllowedToStart'];let _0x1283f4=_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x189)]?.[_0x551246(0x1fc)]||_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x1f5)]?.['NEXT_RUNTIME']===_0x551246(0x196);return _0x1283f4&&_0x3cf029==='nuxt'?_0x4220c1[_0x551246(0x1ff)]=!0x1:_0x4220c1[_0x551246(0x1ff)]=_0x1283f4||!_0x2aef74||_0x4220c1['location']?.['hostname']&&_0x2aef74[_0x551246(0x1ba)](_0x4220c1['location'][_0x551246(0x1c7)]),_0x4220c1['_consoleNinjaAllowedToStart'];}function Y(_0x4a231c,_0x39e58b,_0x2e0b83,_0x12de0b){var _0x11d2fd=_0x1f7fe1;_0x4a231c=_0x4a231c,_0x39e58b=_0x39e58b,_0x2e0b83=_0x2e0b83,_0x12de0b=_0x12de0b;let _0x35cb99=W(_0x4a231c),_0x27fc15=_0x35cb99[_0x11d2fd(0x1cb)],_0x9e4c4d=_0x35cb99['timeStamp'];class _0x33872f{constructor(){var _0x25774f=_0x11d2fd;this[_0x25774f(0x1fa)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x25774f(0x1ad)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x4a231c[_0x25774f(0x240)],this[_0x25774f(0x25a)]=_0x4a231c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x25774f(0x275)]=Object[_0x25774f(0x262)],this['_Symbol']=_0x4a231c['Symbol'],this['_regExpToString']=RegExp[_0x25774f(0x1a0)]['toString'],this[_0x25774f(0x1c1)]=Date[_0x25774f(0x1a0)][_0x25774f(0x1fe)];}[_0x11d2fd(0x23a)](_0x3811cf,_0x356064,_0x4f2c04,_0x1eef20){var _0x44970c=_0x11d2fd,_0x2c428f=this,_0x4e9b94=_0x4f2c04[_0x44970c(0x274)];function _0x56a9a7(_0x56ecc6,_0x45009d,_0x30aaee){var _0x4e0075=_0x44970c;_0x45009d['type']=_0x4e0075(0x1b2),_0x45009d[_0x4e0075(0x230)]=_0x56ecc6[_0x4e0075(0x1be)],_0x3032b6=_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)],_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)]=_0x45009d,_0x2c428f[_0x4e0075(0x219)](_0x45009d,_0x30aaee);}try{_0x4f2c04[_0x44970c(0x277)]++,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1f3)](_0x356064);var _0x4839bd,_0x4b4f61,_0x1ebfe1,_0x244d80,_0xbe4d9a=[],_0xdfac7a=[],_0x1705af,_0x3e3e7f=this[_0x44970c(0x19d)](_0x356064),_0x1c36fe=_0x3e3e7f===_0x44970c(0x1c9),_0x13b536=!0x1,_0x5b148b=_0x3e3e7f==='function',_0x575384=this[_0x44970c(0x1a7)](_0x3e3e7f),_0x34250c=this['_isPrimitiveWrapperType'](_0x3e3e7f),_0x3e85e0=_0x575384||_0x34250c,_0x25c339={},_0x16e036=0x0,_0x3cc5fd=!0x1,_0x3032b6,_0x8dc30c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f2c04[_0x44970c(0x220)]){if(_0x1c36fe){if(_0x4b4f61=_0x356064[_0x44970c(0x20d)],_0x4b4f61>_0x4f2c04['elements']){for(_0x1ebfe1=0x0,_0x244d80=_0x4f2c04[_0x44970c(0x1e2)],_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a['push'](_0x2c428f['_addProperty'](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));_0x3811cf[_0x44970c(0x1cf)]=!0x0;}else{for(_0x1ebfe1=0x0,_0x244d80=_0x4b4f61,_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x23c)](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));}_0x4f2c04[_0x44970c(0x195)]+=_0xdfac7a[_0x44970c(0x20d)];}if(!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f==='undefined')&&!_0x575384&&_0x3e3e7f!==_0x44970c(0x266)&&_0x3e3e7f!==_0x44970c(0x197)&&_0x3e3e7f!==_0x44970c(0x24b)){var _0xb99f3c=_0x1eef20[_0x44970c(0x273)]||_0x4f2c04[_0x44970c(0x273)];if(this[_0x44970c(0x211)](_0x356064)?(_0x4839bd=0x0,_0x356064[_0x44970c(0x237)](function(_0x19c16a){var _0xbae55e=_0x44970c;if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04[_0xbae55e(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0xbae55e(0x195)]>_0x4f2c04[_0xbae55e(0x1d5)]){_0x3cc5fd=!0x0;return;}_0xdfac7a[_0xbae55e(0x1f3)](_0x2c428f[_0xbae55e(0x23c)](_0xbe4d9a,_0x356064,_0xbae55e(0x1b4),_0x4839bd++,_0x4f2c04,function(_0x232a17){return function(){return _0x232a17;};}(_0x19c16a)));})):this[_0x44970c(0x1ca)](_0x356064)&&_0x356064[_0x44970c(0x237)](function(_0x49e5a8,_0x14bf92){var _0x21c289=_0x44970c;if(_0x16e036++,_0x4f2c04[_0x21c289(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04['isExpressionToEvaluate']&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0x21c289(0x195)]>_0x4f2c04['autoExpandLimit']){_0x3cc5fd=!0x0;return;}var _0x57858b=_0x14bf92[_0x21c289(0x1fe)]();_0x57858b[_0x21c289(0x20d)]>0x64&&(_0x57858b=_0x57858b[_0x21c289(0x1a5)](0x0,0x64)+_0x21c289(0x1d9)),_0xdfac7a[_0x21c289(0x1f3)](_0x2c428f[_0x21c289(0x23c)](_0xbe4d9a,_0x356064,_0x21c289(0x1e4),_0x57858b,_0x4f2c04,function(_0x311c38){return function(){return _0x311c38;};}(_0x49e5a8)));}),!_0x13b536){try{for(_0x1705af in _0x356064)if(!(_0x1c36fe&&_0x8dc30c['test'](_0x1705af))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)){if(_0x16e036++,_0x4f2c04[_0x44970c(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f['_addObjectProperty'](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}catch{}if(_0x25c339[_0x44970c(0x22f)]=!0x0,_0x5b148b&&(_0x25c339['_p_name']=!0x0),!_0x3cc5fd){var _0x9e31=[][_0x44970c(0x25c)](this[_0x44970c(0x275)](_0x356064))[_0x44970c(0x25c)](this[_0x44970c(0x21e)](_0x356064));for(_0x4839bd=0x0,_0x4b4f61=_0x9e31[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)if(_0x1705af=_0x9e31[_0x4839bd],!(_0x1c36fe&&_0x8dc30c[_0x44970c(0x22c)](_0x1705af[_0x44970c(0x1fe)]()))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)&&!_0x25c339[_0x44970c(0x1a1)+_0x1705af[_0x44970c(0x1fe)]()]){if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x257)](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}}}}if(_0x3811cf['type']=_0x3e3e7f,_0x3e85e0?(_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x22d)](),this[_0x44970c(0x1dc)](_0x3e3e7f,_0x3811cf,_0x4f2c04,_0x1eef20)):_0x3e3e7f==='date'?_0x3811cf['value']=this[_0x44970c(0x1c1)]['call'](_0x356064):_0x3e3e7f===_0x44970c(0x24b)?_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x1fe)]():_0x3e3e7f==='RegExp'?_0x3811cf['value']=this[_0x44970c(0x1e9)][_0x44970c(0x21d)](_0x356064):_0x3e3e7f===_0x44970c(0x1ef)&&this[_0x44970c(0x1bb)]?_0x3811cf[_0x44970c(0x1d3)]=this['_Symbol'][_0x44970c(0x1a0)][_0x44970c(0x1fe)][_0x44970c(0x21d)](_0x356064):!_0x4f2c04['depth']&&!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f===_0x44970c(0x240))&&(delete _0x3811cf['value'],_0x3811cf['capped']=!0x0),_0x3cc5fd&&(_0x3811cf[_0x44970c(0x234)]=!0x0),_0x3032b6=_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)],_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3811cf,this['_treeNodePropertiesBeforeFullValue'](_0x3811cf,_0x4f2c04),_0xdfac7a[_0x44970c(0x20d)]){for(_0x4839bd=0x0,_0x4b4f61=_0xdfac7a[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)_0xdfac7a[_0x4839bd](_0x4839bd);}_0xbe4d9a['length']&&(_0x3811cf[_0x44970c(0x273)]=_0xbe4d9a);}catch(_0x370d44){_0x56a9a7(_0x370d44,_0x3811cf,_0x4f2c04);}return this[_0x44970c(0x269)](_0x356064,_0x3811cf),this['_treeNodePropertiesAfterFullValue'](_0x3811cf,_0x4f2c04),_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3032b6,_0x4f2c04['level']--,_0x4f2c04['autoExpand']=_0x4e9b94,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1e0)](),_0x3811cf;}[_0x11d2fd(0x21e)](_0x48b7d6){var _0x3de307=_0x11d2fd;return Object['getOwnPropertySymbols']?Object[_0x3de307(0x21a)](_0x48b7d6):[];}[_0x11d2fd(0x211)](_0x3763e4){var _0x55b8a1=_0x11d2fd;return!!(_0x3763e4&&_0x4a231c[_0x55b8a1(0x1b4)]&&this['_objectToString'](_0x3763e4)==='[object\\x20Set]'&&_0x3763e4[_0x55b8a1(0x237)]);}[_0x11d2fd(0x20e)](_0x4769e4,_0x48cf79,_0x5a42e8){var _0x28c014=_0x11d2fd;return _0x5a42e8[_0x28c014(0x227)]?typeof _0x4769e4[_0x48cf79]==_0x28c014(0x1bd):!0x1;}['_type'](_0x49dfdd){var _0x55173a=_0x11d2fd,_0x912292='';return _0x912292=typeof _0x49dfdd,_0x912292===_0x55173a(0x198)?this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x1e6)?_0x912292=_0x55173a(0x1c9):this['_objectToString'](_0x49dfdd)==='[object\\x20Date]'?_0x912292='date':this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x242)?_0x912292=_0x55173a(0x24b):_0x49dfdd===null?_0x912292=_0x55173a(0x1f7):_0x49dfdd[_0x55173a(0x270)]&&(_0x912292=_0x49dfdd['constructor'][_0x55173a(0x206)]||_0x912292):_0x912292==='undefined'&&this[_0x55173a(0x25a)]&&_0x49dfdd instanceof this['_HTMLAllCollection']&&(_0x912292=_0x55173a(0x217)),_0x912292;}[_0x11d2fd(0x1aa)](_0x43d414){var _0x57de40=_0x11d2fd;return Object[_0x57de40(0x1a0)][_0x57de40(0x1fe)][_0x57de40(0x21d)](_0x43d414);}[_0x11d2fd(0x1a7)](_0xcdaeb7){var _0x192334=_0x11d2fd;return _0xcdaeb7==='boolean'||_0xcdaeb7===_0x192334(0x1da)||_0xcdaeb7==='number';}[_0x11d2fd(0x18c)](_0x5ca27f){var _0x346078=_0x11d2fd;return _0x5ca27f==='Boolean'||_0x5ca27f===_0x346078(0x266)||_0x5ca27f===_0x346078(0x22a);}[_0x11d2fd(0x23c)](_0x1b8706,_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1){var _0x5d7e22=this;return function(_0x2b580b){var _0x47290f=_0x37e4,_0xfcc17a=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x253)],_0x194d30=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)],_0x1fedfd=_0x107b05[_0x47290f(0x1fc)]['parent'];_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x238)]=_0xfcc17a,_0x107b05['node'][_0x47290f(0x191)]=typeof _0x5a7a70=='number'?_0x5a7a70:_0x2b580b,_0x1b8706[_0x47290f(0x1f3)](_0x5d7e22[_0x47290f(0x267)](_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1)),_0x107b05[_0x47290f(0x1fc)]['parent']=_0x1fedfd,_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)]=_0x194d30;};}['_addObjectProperty'](_0x16588b,_0x11cea7,_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6){var _0x243e50=_0x11d2fd,_0x44abba=this;return _0x11cea7[_0x243e50(0x1a1)+_0x1c01d4[_0x243e50(0x1fe)]()]=!0x0,function(_0x1f4d51){var _0x4bdc1f=_0x243e50,_0x44d283=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x253)],_0x4fb828=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)],_0x3169d7=_0x4d4b6b['node'][_0x4bdc1f(0x238)];_0x4d4b6b[_0x4bdc1f(0x1fc)]['parent']=_0x44d283,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x1f4d51,_0x16588b['push'](_0x44abba[_0x4bdc1f(0x267)](_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6)),_0x4d4b6b['node'][_0x4bdc1f(0x238)]=_0x3169d7,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x4fb828;};}[_0x11d2fd(0x267)](_0x2ee2f9,_0x504c63,_0x2be839,_0x5d4bfe,_0x466772){var _0x280f6e=_0x11d2fd,_0xc6afe0=this;_0x466772||(_0x466772=function(_0xe7fdf,_0x44194f){return _0xe7fdf[_0x44194f];});var _0x298103=_0x2be839[_0x280f6e(0x1fe)](),_0x28f594=_0x5d4bfe[_0x280f6e(0x210)]||{},_0x5c79a8=_0x5d4bfe[_0x280f6e(0x220)],_0x20bebc=_0x5d4bfe[_0x280f6e(0x224)];try{var _0x27f153=this[_0x280f6e(0x1ca)](_0x2ee2f9),_0x14178a=_0x298103;_0x27f153&&_0x14178a[0x0]==='\\x27'&&(_0x14178a=_0x14178a['substr'](0x1,_0x14178a[_0x280f6e(0x20d)]-0x2));var _0x126371=_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594['_p_'+_0x14178a];_0x126371&&(_0x5d4bfe[_0x280f6e(0x220)]=_0x5d4bfe[_0x280f6e(0x220)]+0x1),_0x5d4bfe['isExpressionToEvaluate']=!!_0x126371;var _0x239579=typeof _0x2be839==_0x280f6e(0x1ef),_0x2075b5={'name':_0x239579||_0x27f153?_0x298103:this[_0x280f6e(0x271)](_0x298103)};if(_0x239579&&(_0x2075b5[_0x280f6e(0x1ef)]=!0x0),!(_0x504c63==='array'||_0x504c63===_0x280f6e(0x1a6))){var _0x3d2d8e=this[_0x280f6e(0x25d)](_0x2ee2f9,_0x2be839);if(_0x3d2d8e&&(_0x3d2d8e[_0x280f6e(0x199)]&&(_0x2075b5[_0x280f6e(0x25e)]=!0x0),_0x3d2d8e[_0x280f6e(0x239)]&&!_0x126371&&!_0x5d4bfe['resolveGetters']))return _0x2075b5[_0x280f6e(0x1c6)]=!0x0,this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x216f35;try{_0x216f35=_0x466772(_0x2ee2f9,_0x2be839);}catch(_0x50f558){return _0x2075b5={'name':_0x298103,'type':_0x280f6e(0x1b2),'error':_0x50f558[_0x280f6e(0x1be)]},this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x4dc249=this[_0x280f6e(0x19d)](_0x216f35),_0x5e863a=this[_0x280f6e(0x1a7)](_0x4dc249);if(_0x2075b5[_0x280f6e(0x1f9)]=_0x4dc249,_0x5e863a)this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x5ca40f=_0x280f6e;_0x2075b5[_0x5ca40f(0x1d3)]=_0x216f35[_0x5ca40f(0x22d)](),!_0x126371&&_0xc6afe0[_0x5ca40f(0x1dc)](_0x4dc249,_0x2075b5,_0x5d4bfe,{});});else{var _0x1e54db=_0x5d4bfe['autoExpand']&&_0x5d4bfe[_0x280f6e(0x277)]<_0x5d4bfe[_0x280f6e(0x268)]&&_0x5d4bfe[_0x280f6e(0x245)][_0x280f6e(0x236)](_0x216f35)<0x0&&_0x4dc249!==_0x280f6e(0x1bd)&&_0x5d4bfe[_0x280f6e(0x195)]<_0x5d4bfe[_0x280f6e(0x1d5)];_0x1e54db||_0x5d4bfe['level']<_0x5c79a8||_0x126371?(this[_0x280f6e(0x23a)](_0x2075b5,_0x216f35,_0x5d4bfe,_0x126371||{}),this[_0x280f6e(0x269)](_0x216f35,_0x2075b5)):this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x519504=_0x280f6e;_0x4dc249===_0x519504(0x1f7)||_0x4dc249===_0x519504(0x240)||(delete _0x2075b5[_0x519504(0x1d3)],_0x2075b5[_0x519504(0x23f)]=!0x0);});}return _0x2075b5;}finally{_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594,_0x5d4bfe[_0x280f6e(0x220)]=_0x5c79a8,_0x5d4bfe[_0x280f6e(0x224)]=_0x20bebc;}}['_capIfString'](_0x3fc6ce,_0x478b61,_0x11351e,_0x3eb109){var _0x45bb7c=_0x11d2fd,_0x196223=_0x3eb109['strLength']||_0x11351e['strLength'];if((_0x3fc6ce==='string'||_0x3fc6ce===_0x45bb7c(0x266))&&_0x478b61[_0x45bb7c(0x1d3)]){let _0x5832dd=_0x478b61[_0x45bb7c(0x1d3)][_0x45bb7c(0x20d)];_0x11351e[_0x45bb7c(0x1dd)]+=_0x5832dd,_0x11351e['allStrLength']>_0x11351e[_0x45bb7c(0x1eb)]?(_0x478b61[_0x45bb7c(0x23f)]='',delete _0x478b61['value']):_0x5832dd>_0x196223&&(_0x478b61[_0x45bb7c(0x23f)]=_0x478b61[_0x45bb7c(0x1d3)]['substr'](0x0,_0x196223),delete _0x478b61['value']);}}[_0x11d2fd(0x1ca)](_0x36ea58){var _0x4e1853=_0x11d2fd;return!!(_0x36ea58&&_0x4a231c[_0x4e1853(0x1e4)]&&this[_0x4e1853(0x1aa)](_0x36ea58)===_0x4e1853(0x233)&&_0x36ea58[_0x4e1853(0x237)]);}['_propertyName'](_0x889d08){var _0x2a9e0f=_0x11d2fd;if(_0x889d08[_0x2a9e0f(0x24a)](/^\\d+$/))return _0x889d08;var _0x5be9f3;try{_0x5be9f3=JSON['stringify'](''+_0x889d08);}catch{_0x5be9f3='\\x22'+this[_0x2a9e0f(0x1aa)](_0x889d08)+'\\x22';}return _0x5be9f3['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5be9f3=_0x5be9f3['substr'](0x1,_0x5be9f3[_0x2a9e0f(0x20d)]-0x2):_0x5be9f3=_0x5be9f3[_0x2a9e0f(0x260)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5be9f3;}[_0x11d2fd(0x1d0)](_0x223c38,_0xee378e,_0xced986,_0x4803c2){var _0x8480ae=_0x11d2fd;this[_0x8480ae(0x219)](_0x223c38,_0xee378e),_0x4803c2&&_0x4803c2(),this[_0x8480ae(0x269)](_0xced986,_0x223c38),this['_treeNodePropertiesAfterFullValue'](_0x223c38,_0xee378e);}['_treeNodePropertiesBeforeFullValue'](_0x13c011,_0x31fc7c){var _0x394e81=_0x11d2fd;this[_0x394e81(0x1ea)](_0x13c011,_0x31fc7c),this[_0x394e81(0x223)](_0x13c011,_0x31fc7c),this[_0x394e81(0x192)](_0x13c011,_0x31fc7c),this['_setNodePermissions'](_0x13c011,_0x31fc7c);}[_0x11d2fd(0x1ea)](_0x115c5c,_0x1c8355){}[_0x11d2fd(0x223)](_0x54bbce,_0x179cf4){}[_0x11d2fd(0x1b0)](_0x479590,_0x258dde){}[_0x11d2fd(0x1a8)](_0x30d571){var _0x3c36bf=_0x11d2fd;return _0x30d571===this[_0x3c36bf(0x24f)];}[_0x11d2fd(0x1d8)](_0x1e498e,_0x425178){var _0x55389b=_0x11d2fd;this[_0x55389b(0x1b0)](_0x1e498e,_0x425178),this['_setNodeExpandableState'](_0x1e498e),_0x425178[_0x55389b(0x249)]&&this['_sortProps'](_0x1e498e),this[_0x55389b(0x218)](_0x1e498e,_0x425178),this['_addLoadNode'](_0x1e498e,_0x425178),this[_0x55389b(0x19b)](_0x1e498e);}['_additionalMetadata'](_0x446c33,_0x5100e1){var _0xa612d4=_0x11d2fd;let _0x4c171c;try{_0x4a231c[_0xa612d4(0x256)]&&(_0x4c171c=_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)],_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=function(){}),_0x446c33&&typeof _0x446c33[_0xa612d4(0x20d)]==_0xa612d4(0x1e3)&&(_0x5100e1['length']=_0x446c33[_0xa612d4(0x20d)]);}catch{}finally{_0x4c171c&&(_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=_0x4c171c);}if(_0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1e3)||_0x5100e1[_0xa612d4(0x1f9)]==='Number'){if(isNaN(_0x5100e1[_0xa612d4(0x1d3)]))_0x5100e1[_0xa612d4(0x1bf)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];else switch(_0x5100e1['value']){case Number[_0xa612d4(0x252)]:_0x5100e1[_0xa612d4(0x22e)]=!0x0,delete _0x5100e1['value'];break;case Number[_0xa612d4(0x1ce)]:_0x5100e1[_0xa612d4(0x1bc)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];break;case 0x0:this[_0xa612d4(0x202)](_0x5100e1[_0xa612d4(0x1d3)])&&(_0x5100e1[_0xa612d4(0x1ee)]=!0x0);break;}}else _0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1bd)&&typeof _0x446c33[_0xa612d4(0x206)]=='string'&&_0x446c33[_0xa612d4(0x206)]&&_0x5100e1['name']&&_0x446c33['name']!==_0x5100e1[_0xa612d4(0x206)]&&(_0x5100e1[_0xa612d4(0x1b3)]=_0x446c33[_0xa612d4(0x206)]);}['_isNegativeZero'](_0x59c9ba){return 0x1/_0x59c9ba===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x194b22){var _0x489762=_0x11d2fd;!_0x194b22['props']||!_0x194b22[_0x489762(0x273)][_0x489762(0x20d)]||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1c9)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1e4)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1b4)||_0x194b22['props'][_0x489762(0x24d)](function(_0x5750f1,_0x2eb738){var _0x76f8ac=_0x489762,_0x5b2bb8=_0x5750f1[_0x76f8ac(0x206)][_0x76f8ac(0x24e)](),_0x4a4f8f=_0x2eb738[_0x76f8ac(0x206)]['toLowerCase']();return _0x5b2bb8<_0x4a4f8f?-0x1:_0x5b2bb8>_0x4a4f8f?0x1:0x0;});}[_0x11d2fd(0x218)](_0x1c5692,_0x5941d2){var _0x6ddc63=_0x11d2fd;if(!(_0x5941d2[_0x6ddc63(0x227)]||!_0x1c5692[_0x6ddc63(0x273)]||!_0x1c5692['props']['length'])){for(var _0x397818=[],_0x1bb0d6=[],_0xcf63f9=0x0,_0x522aed=_0x1c5692[_0x6ddc63(0x273)][_0x6ddc63(0x20d)];_0xcf63f9<_0x522aed;_0xcf63f9++){var _0x5b66ea=_0x1c5692['props'][_0xcf63f9];_0x5b66ea[_0x6ddc63(0x1f9)]===_0x6ddc63(0x1bd)?_0x397818[_0x6ddc63(0x1f3)](_0x5b66ea):_0x1bb0d6[_0x6ddc63(0x1f3)](_0x5b66ea);}if(!(!_0x1bb0d6['length']||_0x397818[_0x6ddc63(0x20d)]<=0x1)){_0x1c5692[_0x6ddc63(0x273)]=_0x1bb0d6;var _0x4d8efd={'functionsNode':!0x0,'props':_0x397818};this[_0x6ddc63(0x1ea)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x1b0)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x243)](_0x4d8efd),this[_0x6ddc63(0x1f8)](_0x4d8efd,_0x5941d2),_0x4d8efd['id']+='\\x20f',_0x1c5692['props'][_0x6ddc63(0x207)](_0x4d8efd);}}}[_0x11d2fd(0x1e1)](_0x1c7ad0,_0x297b6d){}[_0x11d2fd(0x243)](_0x2f5087){}[_0x11d2fd(0x255)](_0x401698){var _0x3fdb91=_0x11d2fd;return Array[_0x3fdb91(0x1ac)](_0x401698)||typeof _0x401698==_0x3fdb91(0x198)&&this[_0x3fdb91(0x1aa)](_0x401698)==='[object\\x20Array]';}[_0x11d2fd(0x1f8)](_0x152162,_0x1ed574){}[_0x11d2fd(0x19b)](_0x161253){var _0x679a0c=_0x11d2fd;delete _0x161253[_0x679a0c(0x21f)],delete _0x161253['_hasSetOnItsPath'],delete _0x161253[_0x679a0c(0x1fd)];}[_0x11d2fd(0x192)](_0x43a91c,_0x4b1cef){}}let _0x1698da=new _0x33872f(),_0x4336d8={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x507368={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23c2be(_0x19fcd2,_0x453451,_0x181b6d,_0x2a08b3,_0x4b434e,_0x54185d){var _0x9210d5=_0x11d2fd;let _0x5b44f0,_0x36715b;try{_0x36715b=_0x9e4c4d(),_0x5b44f0=_0x2e0b83[_0x453451],!_0x5b44f0||_0x36715b-_0x5b44f0['ts']>0x1f4&&_0x5b44f0[_0x9210d5(0x226)]&&_0x5b44f0['time']/_0x5b44f0[_0x9210d5(0x226)]<0x64?(_0x2e0b83[_0x453451]=_0x5b44f0={'count':0x0,'time':0x0,'ts':_0x36715b},_0x2e0b83[_0x9210d5(0x208)]={}):_0x36715b-_0x2e0b83[_0x9210d5(0x208)]['ts']>0x32&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]/_0x2e0b83[_0x9210d5(0x208)]['count']<0x64&&(_0x2e0b83[_0x9210d5(0x208)]={});let _0x7293a0=[],_0x36296b=_0x5b44f0['reduceLimits']||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]?_0x507368:_0x4336d8,_0x247beb=_0x217a47=>{var _0x4a89a2=_0x9210d5;let _0x541454={};return _0x541454[_0x4a89a2(0x273)]=_0x217a47[_0x4a89a2(0x273)],_0x541454[_0x4a89a2(0x1e2)]=_0x217a47[_0x4a89a2(0x1e2)],_0x541454[_0x4a89a2(0x21b)]=_0x217a47[_0x4a89a2(0x21b)],_0x541454[_0x4a89a2(0x1eb)]=_0x217a47[_0x4a89a2(0x1eb)],_0x541454['autoExpandLimit']=_0x217a47['autoExpandLimit'],_0x541454[_0x4a89a2(0x268)]=_0x217a47['autoExpandMaxDepth'],_0x541454[_0x4a89a2(0x249)]=!0x1,_0x541454[_0x4a89a2(0x227)]=!_0x39e58b,_0x541454['depth']=0x1,_0x541454[_0x4a89a2(0x277)]=0x0,_0x541454[_0x4a89a2(0x18a)]='root_exp_id',_0x541454[_0x4a89a2(0x1c3)]=_0x4a89a2(0x1c2),_0x541454['autoExpand']=!0x0,_0x541454[_0x4a89a2(0x245)]=[],_0x541454[_0x4a89a2(0x195)]=0x0,_0x541454[_0x4a89a2(0x26f)]=!0x0,_0x541454[_0x4a89a2(0x1dd)]=0x0,_0x541454[_0x4a89a2(0x1fc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x541454;};for(var _0x40c849=0x0;_0x40c849<_0x4b434e[_0x9210d5(0x20d)];_0x40c849++)_0x7293a0['push'](_0x1698da[_0x9210d5(0x23a)]({'timeNode':_0x19fcd2==='time'||void 0x0},_0x4b434e[_0x40c849],_0x247beb(_0x36296b),{}));if(_0x19fcd2===_0x9210d5(0x1ab)){let _0x4b4e9e=Error[_0x9210d5(0x229)];try{Error['stackTraceLimit']=0x1/0x0,_0x7293a0[_0x9210d5(0x1f3)](_0x1698da[_0x9210d5(0x23a)]({'stackNode':!0x0},new Error()[_0x9210d5(0x193)],_0x247beb(_0x36296b),{'strLength':0x1/0x0}));}finally{Error[_0x9210d5(0x229)]=_0x4b4e9e;}}return{'method':_0x9210d5(0x1cd),'version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':_0x7293a0,'id':_0x453451,'context':_0x54185d}]};}catch(_0x3c4fcd){return{'method':'log','version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':[{'type':_0x9210d5(0x1b2),'error':_0x3c4fcd&&_0x3c4fcd[_0x9210d5(0x1be)]}],'id':_0x453451,'context':_0x54185d}]};}finally{try{if(_0x5b44f0&&_0x36715b){let _0x39c04e=_0x9e4c4d();_0x5b44f0[_0x9210d5(0x226)]++,_0x5b44f0['time']+=_0x27fc15(_0x36715b,_0x39c04e),_0x5b44f0['ts']=_0x39c04e,_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]++,_0x2e0b83['hits'][_0x9210d5(0x1ae)]+=_0x27fc15(_0x36715b,_0x39c04e),_0x2e0b83['hits']['ts']=_0x39c04e,(_0x5b44f0[_0x9210d5(0x226)]>0x32||_0x5b44f0['time']>0x64)&&(_0x5b44f0[_0x9210d5(0x1b6)]=!0x0),(_0x2e0b83['hits']['count']>0x3e8||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]>0x12c)&&(_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]=!0x0);}}catch{}}}return _0x23c2be;}((_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x57888b,_0x4d288a,_0x2fe894,_0x3cfa6a,_0x26d1d4)=>{var _0x1998d3=_0x1f7fe1;if(_0x4b00d8[_0x1998d3(0x232)])return _0x4b00d8['_console_ninja'];if(!J(_0x4b00d8,_0x2fe894,_0x213295))return _0x4b00d8['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4b00d8[_0x1998d3(0x232)];let _0x1ec8c8=W(_0x4b00d8),_0x1a3c7f=_0x1ec8c8['elapsed'],_0x41cf6a=_0x1ec8c8[_0x1998d3(0x23d)],_0x247060=_0x1ec8c8[_0x1998d3(0x251)],_0x1d3c45={'hits':{},'ts':{}},_0x5683be=Y(_0x4b00d8,_0x3cfa6a,_0x1d3c45,_0x57888b),_0x3e248f=_0x10392f=>{_0x1d3c45['ts'][_0x10392f]=_0x41cf6a();},_0x2ebbe7=(_0x1a02c8,_0x4327c1)=>{var _0x1595a3=_0x1998d3;let _0x48011b=_0x1d3c45['ts'][_0x4327c1];if(delete _0x1d3c45['ts'][_0x4327c1],_0x48011b){let _0x441fec=_0x1a3c7f(_0x48011b,_0x41cf6a());_0x341adf(_0x5683be(_0x1595a3(0x1ae),_0x1a02c8,_0x247060(),_0x3e00fc,[_0x441fec],_0x4327c1));}},_0x665301=_0x409553=>_0x2a8d96=>{var _0x35b2aa=_0x1998d3;try{_0x3e248f(_0x2a8d96),_0x409553(_0x2a8d96);}finally{_0x4b00d8['console'][_0x35b2aa(0x1ae)]=_0x409553;}},_0x146215=_0x5aa591=>_0x44b8c0=>{var _0xc5b6e3=_0x1998d3;try{let [_0x4eb1b6,_0x154adc]=_0x44b8c0[_0xc5b6e3(0x1f6)](_0xc5b6e3(0x259));_0x2ebbe7(_0x154adc,_0x4eb1b6),_0x5aa591(_0x4eb1b6);}finally{_0x4b00d8[_0xc5b6e3(0x256)]['timeEnd']=_0x5aa591;}};_0x4b00d8[_0x1998d3(0x232)]={'consoleLog':(_0x2393f8,_0x51be62)=>{var _0x51151b=_0x1998d3;_0x4b00d8[_0x51151b(0x256)][_0x51151b(0x1cd)][_0x51151b(0x206)]!=='disabledLog'&&_0x341adf(_0x5683be(_0x51151b(0x1cd),_0x2393f8,_0x247060(),_0x3e00fc,_0x51be62));},'consoleTrace':(_0x119369,_0x442031)=>{var _0x594c80=_0x1998d3;_0x4b00d8[_0x594c80(0x256)][_0x594c80(0x1cd)]['name']!=='disabledTrace'&&_0x341adf(_0x5683be(_0x594c80(0x1ab),_0x119369,_0x247060(),_0x3e00fc,_0x442031));},'consoleTime':()=>{var _0x32edf0=_0x1998d3;_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]=_0x665301(_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]);},'consoleTimeEnd':()=>{var _0xceb7a9=_0x1998d3;_0x4b00d8[_0xceb7a9(0x256)][_0xceb7a9(0x1a2)]=_0x146215(_0x4b00d8['console']['timeEnd']);},'autoLog':(_0x561021,_0x3343a6)=>{var _0x99253f=_0x1998d3;_0x341adf(_0x5683be(_0x99253f(0x1cd),_0x3343a6,_0x247060(),_0x3e00fc,[_0x561021]));},'autoLogMany':(_0x14df62,_0x1aca85)=>{var _0x4e9934=_0x1998d3;_0x341adf(_0x5683be(_0x4e9934(0x1cd),_0x14df62,_0x247060(),_0x3e00fc,_0x1aca85));},'autoTrace':(_0x19f33b,_0x49cf5c)=>{var _0x38aba5=_0x1998d3;_0x341adf(_0x5683be(_0x38aba5(0x1ab),_0x49cf5c,_0x247060(),_0x3e00fc,[_0x19f33b]));},'autoTraceMany':(_0xcd9962,_0x3adbc0)=>{var _0x40a7aa=_0x1998d3;_0x341adf(_0x5683be(_0x40a7aa(0x1ab),_0xcd9962,_0x247060(),_0x3e00fc,_0x3adbc0));},'autoTime':(_0x1e1fd7,_0x2e5429,_0x2ccb02)=>{_0x3e248f(_0x2ccb02);},'autoTimeEnd':(_0x2e38e6,_0x141bf8,_0xdc33b2)=>{_0x2ebbe7(_0x141bf8,_0xdc33b2);},'coverage':_0x298f37=>{var _0x2380b2=_0x1998d3;_0x341adf({'method':_0x2380b2(0x1de),'version':_0x57888b,'args':[{'id':_0x298f37}]});}};let _0x341adf=b(_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x26d1d4),_0x3e00fc=_0x4b00d8[_0x1998d3(0x26e)];return _0x4b00d8[_0x1998d3(0x232)];})(globalThis,_0x1f7fe1(0x213),_0x1f7fe1(0x20c),_0x1f7fe1(0x1d7),_0x1f7fe1(0x209),'1.0.0',_0x1f7fe1(0x18e),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],_0x1f7fe1(0x1af),_0x1f7fe1(0x1b1));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
	constructor(title = 'Default') {
		this.title = title
		this.todos = []
	}

	addToProject(todo) {
		this.todos.push(todo)
	}

	printProject() {
		console.log(this.title)
		console.log(this.todos)
	}
}


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDOM: () => (/* binding */ renderDOM),
/* harmony export */   toolBar: () => (/* binding */ toolBar),
/* harmony export */   updateTree: () => (/* binding */ updateTree)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _datahandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datahandler */ "./src/modules/datahandler.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals */ "./src/modules/modals.js");





// Event listeners for toolbar:
const toolBar = () => {
	const addTodoBtn = document.querySelector('#button-todo')
	addTodoBtn.addEventListener('click', (e) => {
		;(0,_modals__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.getAttribute('type'))
		modal.showModal()
	})
	const addProjectBtn = document.querySelector('#button-project')
	addProjectBtn.addEventListener('click', (e) => {
		;(0,_modals__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.getAttribute('type'))
		modal.showModal()
	})
}
// Render the content area of the page.
const renderDOM = (proj) => {
	// Set the project to be rendered
	let currentProject = (0,_datahandler__WEBPACK_IMPORTED_MODULE_1__.findProject)(proj)
	// If the current project is not defined, set to first project in array
	if (currentProject === undefined) {
		currentProject = _datahandler__WEBPACK_IMPORTED_MODULE_1__.projectsArray[0]
		// If NO projects are present at all, initialise a default project.
		if (currentProject === undefined) {
			(0,___WEBPACK_IMPORTED_MODULE_2__["default"])()
			return
		}
	}

	// Make sure a project exist before trying to render it.
	if (currentProject) {
		/* eslint-disable */console.log(...oo_oo(`52905916_35_2_35_36_4`,'Rendering project: '))
		/* eslint-disable */console.log(...oo_oo(`52905916_36_2_36_29_4`,currentProject))
		// Fetch relevant DOM (content area)
		const display = document.querySelector('.content-container')
		display.textContent = ''

		// Create new DOM elements for project
		const projRender = document.createElement('div')
		projRender.classList.add('project-render')

		const projTitle = document.createElement('h1')
		projTitle.classList.add('project-render-title')
		projTitle.textContent = currentProject.title
		projRender.appendChild(projTitle)
		display.appendChild(projRender)

		// Create dom elements for projects todos
		const todosContainer = document.createElement('div')
		todosContainer.classList.add('todos-container')
		//
		const projectTodos = currentProject.todos
		projectTodos.forEach((todo) => {
			;(0,_todos__WEBPACK_IMPORTED_MODULE_0__.createToDoCard)(todo, todosContainer)
		})

		projRender.appendChild(todosContainer)
		// Define current project, starting at index 0(default)
	}
}

function updateTree(projectsArray) {
	// Console log for status trigger
	/* eslint-disable */console.log(...oo_oo(`52905916_67_1_67_53_4`,'updateTree triggered! Array received:'))
	/* eslint-disable */console.log(...oo_oo(`52905916_68_1_68_27_4`,projectsArray))

	// fetch display element on DOM
	const display = document.querySelector('.overview-tree')
	// Clear existing content from element, for new version.
	display.textContent = ''

	// Create new DOM content
	const title = document.createElement('div')
	title.classList.add('title')
	title.textContent = 'PROJECTS'

	// tree roots render
	const treeRender = document.createElement('ul')
	treeRender.classList.add('overview')
	// for each project in projectsArray
	projectsArray.forEach((project, projectIndex) => {
		// add a project li element to tree root render
		const treeProject = document.createElement('li')
		treeProject.classList.add('overview-project')
		treeProject.addEventListener('click', () => renderDOM(project.title))

		const projectTitle = document.createElement('div')
		projectTitle.textContent = project.title

		const projectDelBtn = document.createElement('button')
		projectDelBtn.classList.add('delBtn')
		projectDelBtn.innerHTML = '&#10006'
		projectDelBtn.addEventListener('click', () => {
			projectsArray.splice(projectIndex, 1)
			updateTree(projectsArray)
		})
		// put the project elements together
		projectTitle.appendChild(projectDelBtn)
		treeProject.appendChild(projectTitle)

		// add todo titles of each project li as sub-li
		project.todos.forEach((todo, todoIndex) => {
			const projectTodoContainer = document.createElement('li')
			projectTodoContainer.classList.add('overview-todo')
			const projectTodoText = document.createElement('div')
			const projectTodoTitle = document.createElement('p')
			projectTodoTitle.textContent = todo.title
			const projectTodoDate = document.createElement('p')
			projectTodoDate.textContent = todo.dueDate
			projectTodoText.append(projectTodoTitle, projectTodoDate)

			const todoDelBtn = document.createElement('button')
			todoDelBtn.classList.add('delBtn')
			todoDelBtn.innerHTML = '&#10006'
			todoDelBtn.addEventListener('click', () => {
				projectsArray[projectIndex].todos.splice(todoIndex, 1)
				updateTree(projectsArray)
				render((0,_datahandler__WEBPACK_IMPORTED_MODULE_1__.findProject)(project.title))
			})
			// put the todo elements together
			projectTodoContainer.append(projectTodoText, todoDelBtn)
			treeProject.appendChild(projectTodoContainer)
		})
		// attached project elements to tree root
		treeRender.appendChild(treeProject)
	})
	// attach tree root to display
	display.append(title, treeRender)
}

function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1f7fe1=_0x37e4;(function(_0x47ffb5,_0x305716){var _0x372d84=_0x37e4,_0x325e8f=_0x47ffb5();while(!![]){try{var _0x493611=-parseInt(_0x372d84(0x225))/0x1*(-parseInt(_0x372d84(0x1d6))/0x2)+-parseInt(_0x372d84(0x1a9))/0x3*(-parseInt(_0x372d84(0x272))/0x4)+-parseInt(_0x372d84(0x25b))/0x5+-parseInt(_0x372d84(0x18b))/0x6*(-parseInt(_0x372d84(0x235))/0x7)+-parseInt(_0x372d84(0x1f1))/0x8*(parseInt(_0x372d84(0x1b9))/0x9)+parseInt(_0x372d84(0x1f2))/0xa*(-parseInt(_0x372d84(0x1ed))/0xb)+parseInt(_0x372d84(0x1e8))/0xc;if(_0x493611===_0x305716)break;else _0x325e8f['push'](_0x325e8f['shift']());}catch(_0x2b499e){_0x325e8f['push'](_0x325e8f['shift']());}}}(_0x28ed,0x45f58));function _0x28ed(){var _0x8ba4d7=[':logPointId:','_HTMLAllCollection','2376365mjTMQa','concat','_getOwnPropertyDescriptor','setter','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','replace','parse','getOwnPropertyNames','port','_reconnectTimeout','nodeModules','String','_property','autoExpandMaxDepth','_additionalMetadata','_allowedToSend','url','ws/index.js','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_console_ninja_session','resolveGetters','constructor','_propertyName','88864PeNoQn','props','autoExpand','_getOwnPropertyNames','method','level','create','onclose','versions','expId','453786hZRTMQ','_isPrimitiveWrapperType','_inNextEdge','1709311016522','_connectToHostNow','hasOwnProperty','index','_setNodeExpressionPath','stack','_ws','autoExpandPropertyCount','edge','Buffer','object','set','ws://','_cleanNode','astro','_type','_webSocketErrorDocsLink','catch','prototype','_p_','timeEnd','WebSocket','global','slice','Error','_isPrimitiveType','_isUndefined','54iRnQJN','_objectToString','trace','isArray','_quotedRegExp','time','','_setNodeLabel','','unknown','funcName','Set','\\x20browser','reduceLimits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','getOwnPropertyDescriptor','9VpHEMS','includes','_Symbol','negativeInfinity','function','message','nan','onmessage','_dateToString','root_exp','rootExpression','dockerizedApp','_WebSocketClass','getter','hostname','warn','array','_isMap','elapsed','_allowedToConnectOnSend','log','NEGATIVE_INFINITY','cappedElements','_processTreeNodeResult','reload','_connected','value','readyState','autoExpandLimit','14twUgXH',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.290/node_modules\",'_treeNodePropertiesAfterFullValue','...','string','_maxConnectAttemptCount','_capIfString','allStrLength','coverage','map','pop','_addLoadNode','elements','number','Map','path','[object\\x20Array]','NEXT_RUNTIME','8772096aBeiNa','_regExpToString','_setNodeId','totalStrLength','data','275zCfauG','negativeZero','symbol','getWebSocketClass','3827464fsivUc','99430rMpwcs','push','_connectAttemptCount','env','split','null','_setNodePermissions','type','_keyStrRegExp','__es'+'Module','node','_hasMapOnItsPath','toString','_consoleNinjaAllowedToStart','close','send','_isNegativeZero','then','_inBrowser','unref','name','unshift','hits','webpack','_socket','_disposeWebsocket','34879','length','_blacklistedProperty','perf_hooks','expressionsToEvaluate','_isSet','_sendErrorMessage','127.0.0.1','process','host','join','HTMLAllCollection','_addFunctionsNode','_treeNodePropertiesBeforeFullValue','getOwnPropertySymbols','strLength','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','call','_getOwnPropertySymbols','_hasSymbolPropertyOnItsPath','depth','_WebSocket','bind','_setNodeQueryPath','isExpressionToEvaluate','29525YGRNBJ','count','noFunctions','_attemptToReconnectShortly','stackTraceLimit','Number','performance','test','valueOf','positiveInfinity','_p_length','error','onerror','_console_ninja','[object\\x20Map]','cappedProps','14hxDKYV','indexOf','forEach','parent','get','serialize','getPrototypeOf','_addProperty','timeStamp','location','capped','undefined','_connecting','[object\\x20BigInt]','_setNodeExpandableState','enumerable','autoExpandPreviousObjects','https://tinyurl.com/37x8b79t','\\x20server','hrtime','sortProps','match','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','sort','toLowerCase','_undefined','onopen','now','POSITIVE_INFINITY','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_isArray','console','_addObjectProperty','gateway.docker.internal'];_0x28ed=function(){return _0x8ba4d7;};return _0x28ed();}function _0x37e4(_0x69e146,_0x3db28d){var _0x28ed6e=_0x28ed();return _0x37e4=function(_0x37e460,_0x19a257){_0x37e460=_0x37e460-0x189;var _0x1890cd=_0x28ed6e[_0x37e460];return _0x1890cd;},_0x37e4(_0x69e146,_0x3db28d);}var j=Object[_0x1f7fe1(0x278)],H=Object['defineProperty'],G=Object[_0x1f7fe1(0x1b8)],ee=Object[_0x1f7fe1(0x262)],te=Object[_0x1f7fe1(0x23b)],ne=Object[_0x1f7fe1(0x1a0)][_0x1f7fe1(0x190)],re=(_0x5ac642,_0x1cf560,_0x561553,_0x20c447)=>{var _0x45c202=_0x1f7fe1;if(_0x1cf560&&typeof _0x1cf560==_0x45c202(0x198)||typeof _0x1cf560==_0x45c202(0x1bd)){for(let _0x508a2c of ee(_0x1cf560))!ne[_0x45c202(0x21d)](_0x5ac642,_0x508a2c)&&_0x508a2c!==_0x561553&&H(_0x5ac642,_0x508a2c,{'get':()=>_0x1cf560[_0x508a2c],'enumerable':!(_0x20c447=G(_0x1cf560,_0x508a2c))||_0x20c447[_0x45c202(0x244)]});}return _0x5ac642;},x=(_0x1a9261,_0xb842e1,_0x3a123d)=>(_0x3a123d=_0x1a9261!=null?j(te(_0x1a9261)):{},re(_0xb842e1||!_0x1a9261||!_0x1a9261[_0x1f7fe1(0x1fb)]?H(_0x3a123d,'default',{'value':_0x1a9261,'enumerable':!0x0}):_0x3a123d,_0x1a9261)),X=class{constructor(_0x258946,_0x4abc24,_0x53a90a,_0x68db45,_0x5457e8){var _0x2597cb=_0x1f7fe1;this[_0x2597cb(0x1a4)]=_0x258946,this[_0x2597cb(0x215)]=_0x4abc24,this[_0x2597cb(0x263)]=_0x53a90a,this[_0x2597cb(0x265)]=_0x68db45,this['dockerizedApp']=_0x5457e8,this['_allowedToSend']=!0x0,this[_0x2597cb(0x1cc)]=!0x0,this[_0x2597cb(0x1d2)]=!0x1,this[_0x2597cb(0x241)]=!0x1,this[_0x2597cb(0x18d)]=_0x258946[_0x2597cb(0x214)]?.['env']?.[_0x2597cb(0x1e7)]==='edge',this[_0x2597cb(0x204)]=!this[_0x2597cb(0x1a4)][_0x2597cb(0x214)]?.[_0x2597cb(0x189)]?.[_0x2597cb(0x1fc)]&&!this[_0x2597cb(0x18d)],this['_WebSocketClass']=null,this[_0x2597cb(0x1f4)]=0x0,this[_0x2597cb(0x1db)]=0x14,this[_0x2597cb(0x19e)]=_0x2597cb(0x246),this[_0x2597cb(0x212)]=(this[_0x2597cb(0x204)]?_0x2597cb(0x25f):_0x2597cb(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x1f7fe1(0x1f0)](){var _0x3361a6=_0x1f7fe1;if(this[_0x3361a6(0x1c5)])return this['_WebSocketClass'];let _0x240d8f;if(this[_0x3361a6(0x204)]||this['_inNextEdge'])_0x240d8f=this['global'][_0x3361a6(0x1a3)];else{if(this['global']['process']?.[_0x3361a6(0x221)])_0x240d8f=this['global'][_0x3361a6(0x214)]?.[_0x3361a6(0x221)];else try{let _0x425912=await import(_0x3361a6(0x1e5));_0x240d8f=(await import((await import(_0x3361a6(0x26b)))['pathToFileURL'](_0x425912[_0x3361a6(0x216)](this[_0x3361a6(0x265)],_0x3361a6(0x26c)))[_0x3361a6(0x1fe)]()))['default'];}catch{try{_0x240d8f=require(require(_0x3361a6(0x1e5))[_0x3361a6(0x216)](this[_0x3361a6(0x265)],'ws'));}catch{throw new Error(_0x3361a6(0x21c));}}}return this[_0x3361a6(0x1c5)]=_0x240d8f,_0x240d8f;}[_0x1f7fe1(0x18f)](){var _0x1041c7=_0x1f7fe1;this[_0x1041c7(0x241)]||this[_0x1041c7(0x1d2)]||this[_0x1041c7(0x1f4)]>=this['_maxConnectAttemptCount']||(this[_0x1041c7(0x1cc)]=!0x1,this[_0x1041c7(0x241)]=!0x0,this[_0x1041c7(0x1f4)]++,this[_0x1041c7(0x194)]=new Promise((_0x1d47a8,_0x3026d6)=>{var _0xdd1106=_0x1041c7;this[_0xdd1106(0x1f0)]()[_0xdd1106(0x203)](_0x4cc8ff=>{var _0x47dac7=_0xdd1106;let _0x1d10d0=new _0x4cc8ff(_0x47dac7(0x19a)+(!this[_0x47dac7(0x204)]&&this[_0x47dac7(0x1c4)]?_0x47dac7(0x258):this['host'])+':'+this['port']);_0x1d10d0[_0x47dac7(0x231)]=()=>{var _0x836ce0=_0x47dac7;this[_0x836ce0(0x26a)]=!0x1,this['_disposeWebsocket'](_0x1d10d0),this[_0x836ce0(0x228)](),_0x3026d6(new Error('logger\\x20websocket\\x20error'));},_0x1d10d0[_0x47dac7(0x250)]=()=>{var _0x316d98=_0x47dac7;this['_inBrowser']||_0x1d10d0[_0x316d98(0x20a)]&&_0x1d10d0[_0x316d98(0x20a)]['unref']&&_0x1d10d0[_0x316d98(0x20a)][_0x316d98(0x205)](),_0x1d47a8(_0x1d10d0);},_0x1d10d0['onclose']=()=>{var _0x31901b=_0x47dac7;this[_0x31901b(0x1cc)]=!0x0,this[_0x31901b(0x20b)](_0x1d10d0),this[_0x31901b(0x228)]();},_0x1d10d0[_0x47dac7(0x1c0)]=_0x934319=>{var _0x2f2917=_0x47dac7;try{_0x934319&&_0x934319[_0x2f2917(0x1ec)]&&this[_0x2f2917(0x204)]&&JSON[_0x2f2917(0x261)](_0x934319['data'])[_0x2f2917(0x276)]===_0x2f2917(0x1d1)&&this[_0x2f2917(0x1a4)][_0x2f2917(0x23e)]['reload']();}catch{}};})[_0xdd1106(0x203)](_0x479578=>(this[_0xdd1106(0x1d2)]=!0x0,this[_0xdd1106(0x241)]=!0x1,this[_0xdd1106(0x1cc)]=!0x1,this[_0xdd1106(0x26a)]=!0x0,this[_0xdd1106(0x1f4)]=0x0,_0x479578))[_0xdd1106(0x19f)](_0x4edd30=>(this[_0xdd1106(0x1d2)]=!0x1,this['_connecting']=!0x1,console[_0xdd1106(0x1c8)](_0xdd1106(0x24c)+this[_0xdd1106(0x19e)]),_0x3026d6(new Error(_0xdd1106(0x1b7)+(_0x4edd30&&_0x4edd30[_0xdd1106(0x1be)])))));}));}['_disposeWebsocket'](_0x49318d){var _0x4323c0=_0x1f7fe1;this[_0x4323c0(0x1d2)]=!0x1,this[_0x4323c0(0x241)]=!0x1;try{_0x49318d[_0x4323c0(0x279)]=null,_0x49318d[_0x4323c0(0x231)]=null,_0x49318d[_0x4323c0(0x250)]=null;}catch{}try{_0x49318d[_0x4323c0(0x1d4)]<0x2&&_0x49318d[_0x4323c0(0x200)]();}catch{}}['_attemptToReconnectShortly'](){var _0xafae58=_0x1f7fe1;clearTimeout(this[_0xafae58(0x264)]),!(this[_0xafae58(0x1f4)]>=this[_0xafae58(0x1db)])&&(this[_0xafae58(0x264)]=setTimeout(()=>{var _0x17ce1b=_0xafae58;this[_0x17ce1b(0x1d2)]||this[_0x17ce1b(0x241)]||(this[_0x17ce1b(0x18f)](),this['_ws']?.[_0x17ce1b(0x19f)](()=>this[_0x17ce1b(0x228)]()));},0x1f4),this[_0xafae58(0x264)][_0xafae58(0x205)]&&this['_reconnectTimeout'][_0xafae58(0x205)]());}async[_0x1f7fe1(0x201)](_0x16766e){var _0x150c4e=_0x1f7fe1;try{if(!this[_0x150c4e(0x26a)])return;this[_0x150c4e(0x1cc)]&&this[_0x150c4e(0x18f)](),(await this[_0x150c4e(0x194)])[_0x150c4e(0x201)](JSON['stringify'](_0x16766e));}catch(_0x58d9aa){console[_0x150c4e(0x1c8)](this[_0x150c4e(0x212)]+':\\x20'+(_0x58d9aa&&_0x58d9aa[_0x150c4e(0x1be)])),this[_0x150c4e(0x26a)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x1266e6,_0x5e5ebe,_0x3659b0,_0x42e04e,_0x503754,_0xf95501){var _0x1cbf77=_0x1f7fe1;let _0x1c2814=_0x3659b0['split'](',')[_0x1cbf77(0x1df)](_0x290148=>{var _0x4336e5=_0x1cbf77;try{_0x1266e6[_0x4336e5(0x26e)]||((_0x503754==='next.js'||_0x503754==='remix'||_0x503754===_0x4336e5(0x19c)||_0x503754==='angular')&&(_0x503754+=!_0x1266e6[_0x4336e5(0x214)]?.['versions']?.[_0x4336e5(0x1fc)]&&_0x1266e6[_0x4336e5(0x214)]?.[_0x4336e5(0x1f5)]?.['NEXT_RUNTIME']!==_0x4336e5(0x196)?_0x4336e5(0x1b5):_0x4336e5(0x247)),_0x1266e6['_console_ninja_session']={'id':+new Date(),'tool':_0x503754});let _0xd2e366=new X(_0x1266e6,_0x5e5ebe,_0x290148,_0x42e04e,_0xf95501);return _0xd2e366[_0x4336e5(0x201)][_0x4336e5(0x222)](_0xd2e366);}catch(_0x46304f){return console['warn'](_0x4336e5(0x254),_0x46304f&&_0x46304f[_0x4336e5(0x1be)]),()=>{};}});return _0x130af4=>_0x1c2814[_0x1cbf77(0x237)](_0x353891=>_0x353891(_0x130af4));}function W(_0x23fa9f){var _0x409e0d=_0x1f7fe1;let _0x4e8289=function(_0x1deaf8,_0x175b0b){return _0x175b0b-_0x1deaf8;},_0x52630f;if(_0x23fa9f[_0x409e0d(0x22b)])_0x52630f=function(){var _0x343bf=_0x409e0d;return _0x23fa9f[_0x343bf(0x22b)][_0x343bf(0x251)]();};else{if(_0x23fa9f[_0x409e0d(0x214)]&&_0x23fa9f[_0x409e0d(0x214)][_0x409e0d(0x248)]&&_0x23fa9f[_0x409e0d(0x214)]?.[_0x409e0d(0x1f5)]?.[_0x409e0d(0x1e7)]!==_0x409e0d(0x196))_0x52630f=function(){var _0x3f21b4=_0x409e0d;return _0x23fa9f[_0x3f21b4(0x214)][_0x3f21b4(0x248)]();},_0x4e8289=function(_0x5ba0ff,_0x3f75fb){return 0x3e8*(_0x3f75fb[0x0]-_0x5ba0ff[0x0])+(_0x3f75fb[0x1]-_0x5ba0ff[0x1])/0xf4240;};else try{let {performance:_0x830f41}=require(_0x409e0d(0x20f));_0x52630f=function(){return _0x830f41['now']();};}catch{_0x52630f=function(){return+new Date();};}}return{'elapsed':_0x4e8289,'timeStamp':_0x52630f,'now':()=>Date[_0x409e0d(0x251)]()};}function J(_0x4220c1,_0x2aef74,_0x3cf029){var _0x551246=_0x1f7fe1;if(_0x4220c1[_0x551246(0x1ff)]!==void 0x0)return _0x4220c1['_consoleNinjaAllowedToStart'];let _0x1283f4=_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x189)]?.[_0x551246(0x1fc)]||_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x1f5)]?.['NEXT_RUNTIME']===_0x551246(0x196);return _0x1283f4&&_0x3cf029==='nuxt'?_0x4220c1[_0x551246(0x1ff)]=!0x1:_0x4220c1[_0x551246(0x1ff)]=_0x1283f4||!_0x2aef74||_0x4220c1['location']?.['hostname']&&_0x2aef74[_0x551246(0x1ba)](_0x4220c1['location'][_0x551246(0x1c7)]),_0x4220c1['_consoleNinjaAllowedToStart'];}function Y(_0x4a231c,_0x39e58b,_0x2e0b83,_0x12de0b){var _0x11d2fd=_0x1f7fe1;_0x4a231c=_0x4a231c,_0x39e58b=_0x39e58b,_0x2e0b83=_0x2e0b83,_0x12de0b=_0x12de0b;let _0x35cb99=W(_0x4a231c),_0x27fc15=_0x35cb99[_0x11d2fd(0x1cb)],_0x9e4c4d=_0x35cb99['timeStamp'];class _0x33872f{constructor(){var _0x25774f=_0x11d2fd;this[_0x25774f(0x1fa)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x25774f(0x1ad)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x4a231c[_0x25774f(0x240)],this[_0x25774f(0x25a)]=_0x4a231c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x25774f(0x275)]=Object[_0x25774f(0x262)],this['_Symbol']=_0x4a231c['Symbol'],this['_regExpToString']=RegExp[_0x25774f(0x1a0)]['toString'],this[_0x25774f(0x1c1)]=Date[_0x25774f(0x1a0)][_0x25774f(0x1fe)];}[_0x11d2fd(0x23a)](_0x3811cf,_0x356064,_0x4f2c04,_0x1eef20){var _0x44970c=_0x11d2fd,_0x2c428f=this,_0x4e9b94=_0x4f2c04[_0x44970c(0x274)];function _0x56a9a7(_0x56ecc6,_0x45009d,_0x30aaee){var _0x4e0075=_0x44970c;_0x45009d['type']=_0x4e0075(0x1b2),_0x45009d[_0x4e0075(0x230)]=_0x56ecc6[_0x4e0075(0x1be)],_0x3032b6=_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)],_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)]=_0x45009d,_0x2c428f[_0x4e0075(0x219)](_0x45009d,_0x30aaee);}try{_0x4f2c04[_0x44970c(0x277)]++,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1f3)](_0x356064);var _0x4839bd,_0x4b4f61,_0x1ebfe1,_0x244d80,_0xbe4d9a=[],_0xdfac7a=[],_0x1705af,_0x3e3e7f=this[_0x44970c(0x19d)](_0x356064),_0x1c36fe=_0x3e3e7f===_0x44970c(0x1c9),_0x13b536=!0x1,_0x5b148b=_0x3e3e7f==='function',_0x575384=this[_0x44970c(0x1a7)](_0x3e3e7f),_0x34250c=this['_isPrimitiveWrapperType'](_0x3e3e7f),_0x3e85e0=_0x575384||_0x34250c,_0x25c339={},_0x16e036=0x0,_0x3cc5fd=!0x1,_0x3032b6,_0x8dc30c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f2c04[_0x44970c(0x220)]){if(_0x1c36fe){if(_0x4b4f61=_0x356064[_0x44970c(0x20d)],_0x4b4f61>_0x4f2c04['elements']){for(_0x1ebfe1=0x0,_0x244d80=_0x4f2c04[_0x44970c(0x1e2)],_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a['push'](_0x2c428f['_addProperty'](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));_0x3811cf[_0x44970c(0x1cf)]=!0x0;}else{for(_0x1ebfe1=0x0,_0x244d80=_0x4b4f61,_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x23c)](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));}_0x4f2c04[_0x44970c(0x195)]+=_0xdfac7a[_0x44970c(0x20d)];}if(!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f==='undefined')&&!_0x575384&&_0x3e3e7f!==_0x44970c(0x266)&&_0x3e3e7f!==_0x44970c(0x197)&&_0x3e3e7f!==_0x44970c(0x24b)){var _0xb99f3c=_0x1eef20[_0x44970c(0x273)]||_0x4f2c04[_0x44970c(0x273)];if(this[_0x44970c(0x211)](_0x356064)?(_0x4839bd=0x0,_0x356064[_0x44970c(0x237)](function(_0x19c16a){var _0xbae55e=_0x44970c;if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04[_0xbae55e(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0xbae55e(0x195)]>_0x4f2c04[_0xbae55e(0x1d5)]){_0x3cc5fd=!0x0;return;}_0xdfac7a[_0xbae55e(0x1f3)](_0x2c428f[_0xbae55e(0x23c)](_0xbe4d9a,_0x356064,_0xbae55e(0x1b4),_0x4839bd++,_0x4f2c04,function(_0x232a17){return function(){return _0x232a17;};}(_0x19c16a)));})):this[_0x44970c(0x1ca)](_0x356064)&&_0x356064[_0x44970c(0x237)](function(_0x49e5a8,_0x14bf92){var _0x21c289=_0x44970c;if(_0x16e036++,_0x4f2c04[_0x21c289(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04['isExpressionToEvaluate']&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0x21c289(0x195)]>_0x4f2c04['autoExpandLimit']){_0x3cc5fd=!0x0;return;}var _0x57858b=_0x14bf92[_0x21c289(0x1fe)]();_0x57858b[_0x21c289(0x20d)]>0x64&&(_0x57858b=_0x57858b[_0x21c289(0x1a5)](0x0,0x64)+_0x21c289(0x1d9)),_0xdfac7a[_0x21c289(0x1f3)](_0x2c428f[_0x21c289(0x23c)](_0xbe4d9a,_0x356064,_0x21c289(0x1e4),_0x57858b,_0x4f2c04,function(_0x311c38){return function(){return _0x311c38;};}(_0x49e5a8)));}),!_0x13b536){try{for(_0x1705af in _0x356064)if(!(_0x1c36fe&&_0x8dc30c['test'](_0x1705af))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)){if(_0x16e036++,_0x4f2c04[_0x44970c(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f['_addObjectProperty'](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}catch{}if(_0x25c339[_0x44970c(0x22f)]=!0x0,_0x5b148b&&(_0x25c339['_p_name']=!0x0),!_0x3cc5fd){var _0x9e31=[][_0x44970c(0x25c)](this[_0x44970c(0x275)](_0x356064))[_0x44970c(0x25c)](this[_0x44970c(0x21e)](_0x356064));for(_0x4839bd=0x0,_0x4b4f61=_0x9e31[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)if(_0x1705af=_0x9e31[_0x4839bd],!(_0x1c36fe&&_0x8dc30c[_0x44970c(0x22c)](_0x1705af[_0x44970c(0x1fe)]()))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)&&!_0x25c339[_0x44970c(0x1a1)+_0x1705af[_0x44970c(0x1fe)]()]){if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x257)](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}}}}if(_0x3811cf['type']=_0x3e3e7f,_0x3e85e0?(_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x22d)](),this[_0x44970c(0x1dc)](_0x3e3e7f,_0x3811cf,_0x4f2c04,_0x1eef20)):_0x3e3e7f==='date'?_0x3811cf['value']=this[_0x44970c(0x1c1)]['call'](_0x356064):_0x3e3e7f===_0x44970c(0x24b)?_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x1fe)]():_0x3e3e7f==='RegExp'?_0x3811cf['value']=this[_0x44970c(0x1e9)][_0x44970c(0x21d)](_0x356064):_0x3e3e7f===_0x44970c(0x1ef)&&this[_0x44970c(0x1bb)]?_0x3811cf[_0x44970c(0x1d3)]=this['_Symbol'][_0x44970c(0x1a0)][_0x44970c(0x1fe)][_0x44970c(0x21d)](_0x356064):!_0x4f2c04['depth']&&!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f===_0x44970c(0x240))&&(delete _0x3811cf['value'],_0x3811cf['capped']=!0x0),_0x3cc5fd&&(_0x3811cf[_0x44970c(0x234)]=!0x0),_0x3032b6=_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)],_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3811cf,this['_treeNodePropertiesBeforeFullValue'](_0x3811cf,_0x4f2c04),_0xdfac7a[_0x44970c(0x20d)]){for(_0x4839bd=0x0,_0x4b4f61=_0xdfac7a[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)_0xdfac7a[_0x4839bd](_0x4839bd);}_0xbe4d9a['length']&&(_0x3811cf[_0x44970c(0x273)]=_0xbe4d9a);}catch(_0x370d44){_0x56a9a7(_0x370d44,_0x3811cf,_0x4f2c04);}return this[_0x44970c(0x269)](_0x356064,_0x3811cf),this['_treeNodePropertiesAfterFullValue'](_0x3811cf,_0x4f2c04),_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3032b6,_0x4f2c04['level']--,_0x4f2c04['autoExpand']=_0x4e9b94,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1e0)](),_0x3811cf;}[_0x11d2fd(0x21e)](_0x48b7d6){var _0x3de307=_0x11d2fd;return Object['getOwnPropertySymbols']?Object[_0x3de307(0x21a)](_0x48b7d6):[];}[_0x11d2fd(0x211)](_0x3763e4){var _0x55b8a1=_0x11d2fd;return!!(_0x3763e4&&_0x4a231c[_0x55b8a1(0x1b4)]&&this['_objectToString'](_0x3763e4)==='[object\\x20Set]'&&_0x3763e4[_0x55b8a1(0x237)]);}[_0x11d2fd(0x20e)](_0x4769e4,_0x48cf79,_0x5a42e8){var _0x28c014=_0x11d2fd;return _0x5a42e8[_0x28c014(0x227)]?typeof _0x4769e4[_0x48cf79]==_0x28c014(0x1bd):!0x1;}['_type'](_0x49dfdd){var _0x55173a=_0x11d2fd,_0x912292='';return _0x912292=typeof _0x49dfdd,_0x912292===_0x55173a(0x198)?this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x1e6)?_0x912292=_0x55173a(0x1c9):this['_objectToString'](_0x49dfdd)==='[object\\x20Date]'?_0x912292='date':this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x242)?_0x912292=_0x55173a(0x24b):_0x49dfdd===null?_0x912292=_0x55173a(0x1f7):_0x49dfdd[_0x55173a(0x270)]&&(_0x912292=_0x49dfdd['constructor'][_0x55173a(0x206)]||_0x912292):_0x912292==='undefined'&&this[_0x55173a(0x25a)]&&_0x49dfdd instanceof this['_HTMLAllCollection']&&(_0x912292=_0x55173a(0x217)),_0x912292;}[_0x11d2fd(0x1aa)](_0x43d414){var _0x57de40=_0x11d2fd;return Object[_0x57de40(0x1a0)][_0x57de40(0x1fe)][_0x57de40(0x21d)](_0x43d414);}[_0x11d2fd(0x1a7)](_0xcdaeb7){var _0x192334=_0x11d2fd;return _0xcdaeb7==='boolean'||_0xcdaeb7===_0x192334(0x1da)||_0xcdaeb7==='number';}[_0x11d2fd(0x18c)](_0x5ca27f){var _0x346078=_0x11d2fd;return _0x5ca27f==='Boolean'||_0x5ca27f===_0x346078(0x266)||_0x5ca27f===_0x346078(0x22a);}[_0x11d2fd(0x23c)](_0x1b8706,_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1){var _0x5d7e22=this;return function(_0x2b580b){var _0x47290f=_0x37e4,_0xfcc17a=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x253)],_0x194d30=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)],_0x1fedfd=_0x107b05[_0x47290f(0x1fc)]['parent'];_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x238)]=_0xfcc17a,_0x107b05['node'][_0x47290f(0x191)]=typeof _0x5a7a70=='number'?_0x5a7a70:_0x2b580b,_0x1b8706[_0x47290f(0x1f3)](_0x5d7e22[_0x47290f(0x267)](_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1)),_0x107b05[_0x47290f(0x1fc)]['parent']=_0x1fedfd,_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)]=_0x194d30;};}['_addObjectProperty'](_0x16588b,_0x11cea7,_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6){var _0x243e50=_0x11d2fd,_0x44abba=this;return _0x11cea7[_0x243e50(0x1a1)+_0x1c01d4[_0x243e50(0x1fe)]()]=!0x0,function(_0x1f4d51){var _0x4bdc1f=_0x243e50,_0x44d283=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x253)],_0x4fb828=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)],_0x3169d7=_0x4d4b6b['node'][_0x4bdc1f(0x238)];_0x4d4b6b[_0x4bdc1f(0x1fc)]['parent']=_0x44d283,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x1f4d51,_0x16588b['push'](_0x44abba[_0x4bdc1f(0x267)](_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6)),_0x4d4b6b['node'][_0x4bdc1f(0x238)]=_0x3169d7,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x4fb828;};}[_0x11d2fd(0x267)](_0x2ee2f9,_0x504c63,_0x2be839,_0x5d4bfe,_0x466772){var _0x280f6e=_0x11d2fd,_0xc6afe0=this;_0x466772||(_0x466772=function(_0xe7fdf,_0x44194f){return _0xe7fdf[_0x44194f];});var _0x298103=_0x2be839[_0x280f6e(0x1fe)](),_0x28f594=_0x5d4bfe[_0x280f6e(0x210)]||{},_0x5c79a8=_0x5d4bfe[_0x280f6e(0x220)],_0x20bebc=_0x5d4bfe[_0x280f6e(0x224)];try{var _0x27f153=this[_0x280f6e(0x1ca)](_0x2ee2f9),_0x14178a=_0x298103;_0x27f153&&_0x14178a[0x0]==='\\x27'&&(_0x14178a=_0x14178a['substr'](0x1,_0x14178a[_0x280f6e(0x20d)]-0x2));var _0x126371=_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594['_p_'+_0x14178a];_0x126371&&(_0x5d4bfe[_0x280f6e(0x220)]=_0x5d4bfe[_0x280f6e(0x220)]+0x1),_0x5d4bfe['isExpressionToEvaluate']=!!_0x126371;var _0x239579=typeof _0x2be839==_0x280f6e(0x1ef),_0x2075b5={'name':_0x239579||_0x27f153?_0x298103:this[_0x280f6e(0x271)](_0x298103)};if(_0x239579&&(_0x2075b5[_0x280f6e(0x1ef)]=!0x0),!(_0x504c63==='array'||_0x504c63===_0x280f6e(0x1a6))){var _0x3d2d8e=this[_0x280f6e(0x25d)](_0x2ee2f9,_0x2be839);if(_0x3d2d8e&&(_0x3d2d8e[_0x280f6e(0x199)]&&(_0x2075b5[_0x280f6e(0x25e)]=!0x0),_0x3d2d8e[_0x280f6e(0x239)]&&!_0x126371&&!_0x5d4bfe['resolveGetters']))return _0x2075b5[_0x280f6e(0x1c6)]=!0x0,this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x216f35;try{_0x216f35=_0x466772(_0x2ee2f9,_0x2be839);}catch(_0x50f558){return _0x2075b5={'name':_0x298103,'type':_0x280f6e(0x1b2),'error':_0x50f558[_0x280f6e(0x1be)]},this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x4dc249=this[_0x280f6e(0x19d)](_0x216f35),_0x5e863a=this[_0x280f6e(0x1a7)](_0x4dc249);if(_0x2075b5[_0x280f6e(0x1f9)]=_0x4dc249,_0x5e863a)this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x5ca40f=_0x280f6e;_0x2075b5[_0x5ca40f(0x1d3)]=_0x216f35[_0x5ca40f(0x22d)](),!_0x126371&&_0xc6afe0[_0x5ca40f(0x1dc)](_0x4dc249,_0x2075b5,_0x5d4bfe,{});});else{var _0x1e54db=_0x5d4bfe['autoExpand']&&_0x5d4bfe[_0x280f6e(0x277)]<_0x5d4bfe[_0x280f6e(0x268)]&&_0x5d4bfe[_0x280f6e(0x245)][_0x280f6e(0x236)](_0x216f35)<0x0&&_0x4dc249!==_0x280f6e(0x1bd)&&_0x5d4bfe[_0x280f6e(0x195)]<_0x5d4bfe[_0x280f6e(0x1d5)];_0x1e54db||_0x5d4bfe['level']<_0x5c79a8||_0x126371?(this[_0x280f6e(0x23a)](_0x2075b5,_0x216f35,_0x5d4bfe,_0x126371||{}),this[_0x280f6e(0x269)](_0x216f35,_0x2075b5)):this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x519504=_0x280f6e;_0x4dc249===_0x519504(0x1f7)||_0x4dc249===_0x519504(0x240)||(delete _0x2075b5[_0x519504(0x1d3)],_0x2075b5[_0x519504(0x23f)]=!0x0);});}return _0x2075b5;}finally{_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594,_0x5d4bfe[_0x280f6e(0x220)]=_0x5c79a8,_0x5d4bfe[_0x280f6e(0x224)]=_0x20bebc;}}['_capIfString'](_0x3fc6ce,_0x478b61,_0x11351e,_0x3eb109){var _0x45bb7c=_0x11d2fd,_0x196223=_0x3eb109['strLength']||_0x11351e['strLength'];if((_0x3fc6ce==='string'||_0x3fc6ce===_0x45bb7c(0x266))&&_0x478b61[_0x45bb7c(0x1d3)]){let _0x5832dd=_0x478b61[_0x45bb7c(0x1d3)][_0x45bb7c(0x20d)];_0x11351e[_0x45bb7c(0x1dd)]+=_0x5832dd,_0x11351e['allStrLength']>_0x11351e[_0x45bb7c(0x1eb)]?(_0x478b61[_0x45bb7c(0x23f)]='',delete _0x478b61['value']):_0x5832dd>_0x196223&&(_0x478b61[_0x45bb7c(0x23f)]=_0x478b61[_0x45bb7c(0x1d3)]['substr'](0x0,_0x196223),delete _0x478b61['value']);}}[_0x11d2fd(0x1ca)](_0x36ea58){var _0x4e1853=_0x11d2fd;return!!(_0x36ea58&&_0x4a231c[_0x4e1853(0x1e4)]&&this[_0x4e1853(0x1aa)](_0x36ea58)===_0x4e1853(0x233)&&_0x36ea58[_0x4e1853(0x237)]);}['_propertyName'](_0x889d08){var _0x2a9e0f=_0x11d2fd;if(_0x889d08[_0x2a9e0f(0x24a)](/^\\d+$/))return _0x889d08;var _0x5be9f3;try{_0x5be9f3=JSON['stringify'](''+_0x889d08);}catch{_0x5be9f3='\\x22'+this[_0x2a9e0f(0x1aa)](_0x889d08)+'\\x22';}return _0x5be9f3['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5be9f3=_0x5be9f3['substr'](0x1,_0x5be9f3[_0x2a9e0f(0x20d)]-0x2):_0x5be9f3=_0x5be9f3[_0x2a9e0f(0x260)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5be9f3;}[_0x11d2fd(0x1d0)](_0x223c38,_0xee378e,_0xced986,_0x4803c2){var _0x8480ae=_0x11d2fd;this[_0x8480ae(0x219)](_0x223c38,_0xee378e),_0x4803c2&&_0x4803c2(),this[_0x8480ae(0x269)](_0xced986,_0x223c38),this['_treeNodePropertiesAfterFullValue'](_0x223c38,_0xee378e);}['_treeNodePropertiesBeforeFullValue'](_0x13c011,_0x31fc7c){var _0x394e81=_0x11d2fd;this[_0x394e81(0x1ea)](_0x13c011,_0x31fc7c),this[_0x394e81(0x223)](_0x13c011,_0x31fc7c),this[_0x394e81(0x192)](_0x13c011,_0x31fc7c),this['_setNodePermissions'](_0x13c011,_0x31fc7c);}[_0x11d2fd(0x1ea)](_0x115c5c,_0x1c8355){}[_0x11d2fd(0x223)](_0x54bbce,_0x179cf4){}[_0x11d2fd(0x1b0)](_0x479590,_0x258dde){}[_0x11d2fd(0x1a8)](_0x30d571){var _0x3c36bf=_0x11d2fd;return _0x30d571===this[_0x3c36bf(0x24f)];}[_0x11d2fd(0x1d8)](_0x1e498e,_0x425178){var _0x55389b=_0x11d2fd;this[_0x55389b(0x1b0)](_0x1e498e,_0x425178),this['_setNodeExpandableState'](_0x1e498e),_0x425178[_0x55389b(0x249)]&&this['_sortProps'](_0x1e498e),this[_0x55389b(0x218)](_0x1e498e,_0x425178),this['_addLoadNode'](_0x1e498e,_0x425178),this[_0x55389b(0x19b)](_0x1e498e);}['_additionalMetadata'](_0x446c33,_0x5100e1){var _0xa612d4=_0x11d2fd;let _0x4c171c;try{_0x4a231c[_0xa612d4(0x256)]&&(_0x4c171c=_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)],_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=function(){}),_0x446c33&&typeof _0x446c33[_0xa612d4(0x20d)]==_0xa612d4(0x1e3)&&(_0x5100e1['length']=_0x446c33[_0xa612d4(0x20d)]);}catch{}finally{_0x4c171c&&(_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=_0x4c171c);}if(_0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1e3)||_0x5100e1[_0xa612d4(0x1f9)]==='Number'){if(isNaN(_0x5100e1[_0xa612d4(0x1d3)]))_0x5100e1[_0xa612d4(0x1bf)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];else switch(_0x5100e1['value']){case Number[_0xa612d4(0x252)]:_0x5100e1[_0xa612d4(0x22e)]=!0x0,delete _0x5100e1['value'];break;case Number[_0xa612d4(0x1ce)]:_0x5100e1[_0xa612d4(0x1bc)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];break;case 0x0:this[_0xa612d4(0x202)](_0x5100e1[_0xa612d4(0x1d3)])&&(_0x5100e1[_0xa612d4(0x1ee)]=!0x0);break;}}else _0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1bd)&&typeof _0x446c33[_0xa612d4(0x206)]=='string'&&_0x446c33[_0xa612d4(0x206)]&&_0x5100e1['name']&&_0x446c33['name']!==_0x5100e1[_0xa612d4(0x206)]&&(_0x5100e1[_0xa612d4(0x1b3)]=_0x446c33[_0xa612d4(0x206)]);}['_isNegativeZero'](_0x59c9ba){return 0x1/_0x59c9ba===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x194b22){var _0x489762=_0x11d2fd;!_0x194b22['props']||!_0x194b22[_0x489762(0x273)][_0x489762(0x20d)]||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1c9)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1e4)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1b4)||_0x194b22['props'][_0x489762(0x24d)](function(_0x5750f1,_0x2eb738){var _0x76f8ac=_0x489762,_0x5b2bb8=_0x5750f1[_0x76f8ac(0x206)][_0x76f8ac(0x24e)](),_0x4a4f8f=_0x2eb738[_0x76f8ac(0x206)]['toLowerCase']();return _0x5b2bb8<_0x4a4f8f?-0x1:_0x5b2bb8>_0x4a4f8f?0x1:0x0;});}[_0x11d2fd(0x218)](_0x1c5692,_0x5941d2){var _0x6ddc63=_0x11d2fd;if(!(_0x5941d2[_0x6ddc63(0x227)]||!_0x1c5692[_0x6ddc63(0x273)]||!_0x1c5692['props']['length'])){for(var _0x397818=[],_0x1bb0d6=[],_0xcf63f9=0x0,_0x522aed=_0x1c5692[_0x6ddc63(0x273)][_0x6ddc63(0x20d)];_0xcf63f9<_0x522aed;_0xcf63f9++){var _0x5b66ea=_0x1c5692['props'][_0xcf63f9];_0x5b66ea[_0x6ddc63(0x1f9)]===_0x6ddc63(0x1bd)?_0x397818[_0x6ddc63(0x1f3)](_0x5b66ea):_0x1bb0d6[_0x6ddc63(0x1f3)](_0x5b66ea);}if(!(!_0x1bb0d6['length']||_0x397818[_0x6ddc63(0x20d)]<=0x1)){_0x1c5692[_0x6ddc63(0x273)]=_0x1bb0d6;var _0x4d8efd={'functionsNode':!0x0,'props':_0x397818};this[_0x6ddc63(0x1ea)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x1b0)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x243)](_0x4d8efd),this[_0x6ddc63(0x1f8)](_0x4d8efd,_0x5941d2),_0x4d8efd['id']+='\\x20f',_0x1c5692['props'][_0x6ddc63(0x207)](_0x4d8efd);}}}[_0x11d2fd(0x1e1)](_0x1c7ad0,_0x297b6d){}[_0x11d2fd(0x243)](_0x2f5087){}[_0x11d2fd(0x255)](_0x401698){var _0x3fdb91=_0x11d2fd;return Array[_0x3fdb91(0x1ac)](_0x401698)||typeof _0x401698==_0x3fdb91(0x198)&&this[_0x3fdb91(0x1aa)](_0x401698)==='[object\\x20Array]';}[_0x11d2fd(0x1f8)](_0x152162,_0x1ed574){}[_0x11d2fd(0x19b)](_0x161253){var _0x679a0c=_0x11d2fd;delete _0x161253[_0x679a0c(0x21f)],delete _0x161253['_hasSetOnItsPath'],delete _0x161253[_0x679a0c(0x1fd)];}[_0x11d2fd(0x192)](_0x43a91c,_0x4b1cef){}}let _0x1698da=new _0x33872f(),_0x4336d8={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x507368={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23c2be(_0x19fcd2,_0x453451,_0x181b6d,_0x2a08b3,_0x4b434e,_0x54185d){var _0x9210d5=_0x11d2fd;let _0x5b44f0,_0x36715b;try{_0x36715b=_0x9e4c4d(),_0x5b44f0=_0x2e0b83[_0x453451],!_0x5b44f0||_0x36715b-_0x5b44f0['ts']>0x1f4&&_0x5b44f0[_0x9210d5(0x226)]&&_0x5b44f0['time']/_0x5b44f0[_0x9210d5(0x226)]<0x64?(_0x2e0b83[_0x453451]=_0x5b44f0={'count':0x0,'time':0x0,'ts':_0x36715b},_0x2e0b83[_0x9210d5(0x208)]={}):_0x36715b-_0x2e0b83[_0x9210d5(0x208)]['ts']>0x32&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]/_0x2e0b83[_0x9210d5(0x208)]['count']<0x64&&(_0x2e0b83[_0x9210d5(0x208)]={});let _0x7293a0=[],_0x36296b=_0x5b44f0['reduceLimits']||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]?_0x507368:_0x4336d8,_0x247beb=_0x217a47=>{var _0x4a89a2=_0x9210d5;let _0x541454={};return _0x541454[_0x4a89a2(0x273)]=_0x217a47[_0x4a89a2(0x273)],_0x541454[_0x4a89a2(0x1e2)]=_0x217a47[_0x4a89a2(0x1e2)],_0x541454[_0x4a89a2(0x21b)]=_0x217a47[_0x4a89a2(0x21b)],_0x541454[_0x4a89a2(0x1eb)]=_0x217a47[_0x4a89a2(0x1eb)],_0x541454['autoExpandLimit']=_0x217a47['autoExpandLimit'],_0x541454[_0x4a89a2(0x268)]=_0x217a47['autoExpandMaxDepth'],_0x541454[_0x4a89a2(0x249)]=!0x1,_0x541454[_0x4a89a2(0x227)]=!_0x39e58b,_0x541454['depth']=0x1,_0x541454[_0x4a89a2(0x277)]=0x0,_0x541454[_0x4a89a2(0x18a)]='root_exp_id',_0x541454[_0x4a89a2(0x1c3)]=_0x4a89a2(0x1c2),_0x541454['autoExpand']=!0x0,_0x541454[_0x4a89a2(0x245)]=[],_0x541454[_0x4a89a2(0x195)]=0x0,_0x541454[_0x4a89a2(0x26f)]=!0x0,_0x541454[_0x4a89a2(0x1dd)]=0x0,_0x541454[_0x4a89a2(0x1fc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x541454;};for(var _0x40c849=0x0;_0x40c849<_0x4b434e[_0x9210d5(0x20d)];_0x40c849++)_0x7293a0['push'](_0x1698da[_0x9210d5(0x23a)]({'timeNode':_0x19fcd2==='time'||void 0x0},_0x4b434e[_0x40c849],_0x247beb(_0x36296b),{}));if(_0x19fcd2===_0x9210d5(0x1ab)){let _0x4b4e9e=Error[_0x9210d5(0x229)];try{Error['stackTraceLimit']=0x1/0x0,_0x7293a0[_0x9210d5(0x1f3)](_0x1698da[_0x9210d5(0x23a)]({'stackNode':!0x0},new Error()[_0x9210d5(0x193)],_0x247beb(_0x36296b),{'strLength':0x1/0x0}));}finally{Error[_0x9210d5(0x229)]=_0x4b4e9e;}}return{'method':_0x9210d5(0x1cd),'version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':_0x7293a0,'id':_0x453451,'context':_0x54185d}]};}catch(_0x3c4fcd){return{'method':'log','version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':[{'type':_0x9210d5(0x1b2),'error':_0x3c4fcd&&_0x3c4fcd[_0x9210d5(0x1be)]}],'id':_0x453451,'context':_0x54185d}]};}finally{try{if(_0x5b44f0&&_0x36715b){let _0x39c04e=_0x9e4c4d();_0x5b44f0[_0x9210d5(0x226)]++,_0x5b44f0['time']+=_0x27fc15(_0x36715b,_0x39c04e),_0x5b44f0['ts']=_0x39c04e,_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]++,_0x2e0b83['hits'][_0x9210d5(0x1ae)]+=_0x27fc15(_0x36715b,_0x39c04e),_0x2e0b83['hits']['ts']=_0x39c04e,(_0x5b44f0[_0x9210d5(0x226)]>0x32||_0x5b44f0['time']>0x64)&&(_0x5b44f0[_0x9210d5(0x1b6)]=!0x0),(_0x2e0b83['hits']['count']>0x3e8||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]>0x12c)&&(_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]=!0x0);}}catch{}}}return _0x23c2be;}((_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x57888b,_0x4d288a,_0x2fe894,_0x3cfa6a,_0x26d1d4)=>{var _0x1998d3=_0x1f7fe1;if(_0x4b00d8[_0x1998d3(0x232)])return _0x4b00d8['_console_ninja'];if(!J(_0x4b00d8,_0x2fe894,_0x213295))return _0x4b00d8['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4b00d8[_0x1998d3(0x232)];let _0x1ec8c8=W(_0x4b00d8),_0x1a3c7f=_0x1ec8c8['elapsed'],_0x41cf6a=_0x1ec8c8[_0x1998d3(0x23d)],_0x247060=_0x1ec8c8[_0x1998d3(0x251)],_0x1d3c45={'hits':{},'ts':{}},_0x5683be=Y(_0x4b00d8,_0x3cfa6a,_0x1d3c45,_0x57888b),_0x3e248f=_0x10392f=>{_0x1d3c45['ts'][_0x10392f]=_0x41cf6a();},_0x2ebbe7=(_0x1a02c8,_0x4327c1)=>{var _0x1595a3=_0x1998d3;let _0x48011b=_0x1d3c45['ts'][_0x4327c1];if(delete _0x1d3c45['ts'][_0x4327c1],_0x48011b){let _0x441fec=_0x1a3c7f(_0x48011b,_0x41cf6a());_0x341adf(_0x5683be(_0x1595a3(0x1ae),_0x1a02c8,_0x247060(),_0x3e00fc,[_0x441fec],_0x4327c1));}},_0x665301=_0x409553=>_0x2a8d96=>{var _0x35b2aa=_0x1998d3;try{_0x3e248f(_0x2a8d96),_0x409553(_0x2a8d96);}finally{_0x4b00d8['console'][_0x35b2aa(0x1ae)]=_0x409553;}},_0x146215=_0x5aa591=>_0x44b8c0=>{var _0xc5b6e3=_0x1998d3;try{let [_0x4eb1b6,_0x154adc]=_0x44b8c0[_0xc5b6e3(0x1f6)](_0xc5b6e3(0x259));_0x2ebbe7(_0x154adc,_0x4eb1b6),_0x5aa591(_0x4eb1b6);}finally{_0x4b00d8[_0xc5b6e3(0x256)]['timeEnd']=_0x5aa591;}};_0x4b00d8[_0x1998d3(0x232)]={'consoleLog':(_0x2393f8,_0x51be62)=>{var _0x51151b=_0x1998d3;_0x4b00d8[_0x51151b(0x256)][_0x51151b(0x1cd)][_0x51151b(0x206)]!=='disabledLog'&&_0x341adf(_0x5683be(_0x51151b(0x1cd),_0x2393f8,_0x247060(),_0x3e00fc,_0x51be62));},'consoleTrace':(_0x119369,_0x442031)=>{var _0x594c80=_0x1998d3;_0x4b00d8[_0x594c80(0x256)][_0x594c80(0x1cd)]['name']!=='disabledTrace'&&_0x341adf(_0x5683be(_0x594c80(0x1ab),_0x119369,_0x247060(),_0x3e00fc,_0x442031));},'consoleTime':()=>{var _0x32edf0=_0x1998d3;_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]=_0x665301(_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]);},'consoleTimeEnd':()=>{var _0xceb7a9=_0x1998d3;_0x4b00d8[_0xceb7a9(0x256)][_0xceb7a9(0x1a2)]=_0x146215(_0x4b00d8['console']['timeEnd']);},'autoLog':(_0x561021,_0x3343a6)=>{var _0x99253f=_0x1998d3;_0x341adf(_0x5683be(_0x99253f(0x1cd),_0x3343a6,_0x247060(),_0x3e00fc,[_0x561021]));},'autoLogMany':(_0x14df62,_0x1aca85)=>{var _0x4e9934=_0x1998d3;_0x341adf(_0x5683be(_0x4e9934(0x1cd),_0x14df62,_0x247060(),_0x3e00fc,_0x1aca85));},'autoTrace':(_0x19f33b,_0x49cf5c)=>{var _0x38aba5=_0x1998d3;_0x341adf(_0x5683be(_0x38aba5(0x1ab),_0x49cf5c,_0x247060(),_0x3e00fc,[_0x19f33b]));},'autoTraceMany':(_0xcd9962,_0x3adbc0)=>{var _0x40a7aa=_0x1998d3;_0x341adf(_0x5683be(_0x40a7aa(0x1ab),_0xcd9962,_0x247060(),_0x3e00fc,_0x3adbc0));},'autoTime':(_0x1e1fd7,_0x2e5429,_0x2ccb02)=>{_0x3e248f(_0x2ccb02);},'autoTimeEnd':(_0x2e38e6,_0x141bf8,_0xdc33b2)=>{_0x2ebbe7(_0x141bf8,_0xdc33b2);},'coverage':_0x298f37=>{var _0x2380b2=_0x1998d3;_0x341adf({'method':_0x2380b2(0x1de),'version':_0x57888b,'args':[{'id':_0x298f37}]});}};let _0x341adf=b(_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x26d1d4),_0x3e00fc=_0x4b00d8[_0x1998d3(0x26e)];return _0x4b00d8[_0x1998d3(0x232)];})(globalThis,_0x1f7fe1(0x213),_0x1f7fe1(0x20c),_0x1f7fe1(0x1d7),_0x1f7fe1(0x209),'1.0.0',_0x1f7fe1(0x18e),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],_0x1f7fe1(0x1af),_0x1f7fe1(0x1b1));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo),
/* harmony export */   createToDoCard: () => (/* binding */ createToDoCard)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/modules/modals.js");


// Class module to export ,keep in mind it should only create the class objects.
class ToDo {
	constructor(project, title, desc, dueDate, priority, notes) {
		this.project = project
		this.title = checkTitle(title)
		this.description = checkDesc(desc)
		this.dueDate = formatDate(dueDate)
		this.priority = priority
		this.notes = notes
		this.id = generateUniqueID()
	}
	printToDo() {
		/* eslint-disable */console.log(...oo_oo(`296015223_15_2_15_69_4`,'===================================================='))
		/* eslint-disable */console.log(...oo_oo(`296015223_16_2_16_40_4`,`assigned ID: ${this.id}`))
		/* eslint-disable */console.log(...oo_oo(`296015223_17_2_17_50_4`,`assigned project: ${this.project}`))
		/* eslint-disable */console.log(...oo_oo(`296015223_18_2_18_38_4`,`title: ${this.title},`))
		/* eslint-disable */console.log(...oo_oo(`296015223_19_2_19_43_4`,`description: ${this.desc},`))
		/* eslint-disable */console.log(...oo_oo(`296015223_20_2_20_43_4`,`due date: ${this.dueDate},`))
		/* eslint-disable */console.log(...oo_oo(`296015223_21_2_21_44_4`,`priority: ${this.priority},`))
		/* eslint-disable */console.log(...oo_oo(`296015223_22_2_22_38_4`,`notes: ${this.notes},`))
		/* eslint-disable */console.log(...oo_oo(`296015223_23_2_23_69_4`,'===================================================='))
	}
}

// Checks below

function checkTitle(title) {
	// Would also include sanitisation
	if (title.length <= 20) return title
	else return 'Title too long'
}

function checkDesc(desc) {
	// Would also include sanitisation
	if (desc.length <= 100) return desc
	else return 'Description too long'
}

function formatDate(dueDate) {
	return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(dueDate), 'MM-dd-yyyy')
}

// Function for creating ToDo cards for render
function createToDoCard(todo, todosContainer) {
	const todoCard = document.createElement('div')
	todoCard.classList.add('todo-card', 'hidden-card')

	const toggleCard = () => {
		if (todoCard.classList.contains('hidden-card')) {
			showCard(todo)
		} else {
			hideCard()
		}
	}

	const showCard = (todo) => {
		todoCard.classList.remove('hidden-card')
		todoCard.classList.add('show-card')
		renderValues('full')
		addEditButton(todo)
	}

	const hideCard = () => {
		todoCard.classList.add('hidden-card')
		todoCard.classList.remove('show-card')
		renderValues('mini')
		removeEditButton()
	}

	const addEditButton = (todo) => {
		const editBtn = todoCard.querySelector('.card-edit-btn')
		if (!editBtn) {
			const editBtn = document.createElement('button')
			editBtn.textContent = 'Edit'
			editBtn.classList.add('card-edit-btn')
			editBtn.addEventListener('click', () => {
				/* eslint-disable */console.log(...oo_oo(`296015223_79_4_79_66_4`,'Sending todo to editCard' + Object.entries(todo)))
				editCard(todo)
			})
			todoCard.appendChild(editBtn)
		}
	}
	const removeEditButton = () => {
		const editBtn = todoCard.querySelector('.card-edit-btn')
		if (editBtn) {
			editBtn.remove()
			todoCard.classList.remove('edit-button-added')
		}
	}
	todoCard.addEventListener('click', toggleCard)
	todosContainer.appendChild(todoCard)

	function renderValues(state) {
		todoCard.innerHTML = ''
		for (const [key, value] of Object.entries(todo)) {
			if (state !== 'full') {
				// minimised state triggered
				if (key !== 'title' && key !== 'dueDate') {
					continue
				} //Skip itteration for this state if not title or dueDate
			}
			if (key === 'project' || key === 'id') {
				continue //skip itteration for project title, irrelevant.
			}
			// Check if card was already rendered:

			const todoKeyValueCont = document.createElement('div')
			todoKeyValueCont.classList.add('todo-key-value-cont')

			const todoKey = document.createElement('span')
			todoKey.classList.add('todo-key')
			todoKey.textContent = `${key.toUpperCase()}:`
			const todoValue = document.createElement('p')
			todoValue.classList.add('todo-value')
			todoValue.textContent = value
			todoKeyValueCont.append(todoKey, todoValue)
			todoCard.appendChild(todoKeyValueCont)
		}
	}
	renderValues('mini')
}
// Function for creating unique IDs
const usedIds = []
function generateUniqueID() {
	let id
	// Keep forming a random number, until a unused number is found.
	do {
		id = Math.floor(Math.random() * 9999) + 1
	} while (usedIds.includes(id))
	// push the found number to usedID array
	usedIds.push(id)
	// Return the new ID
	return id.toString()
}
function editCard(card) {
	const values = Object.values(card)
	;(0,_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('edit Todo', values)
	modal.showModal()
}
function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1f7fe1=_0x37e4;(function(_0x47ffb5,_0x305716){var _0x372d84=_0x37e4,_0x325e8f=_0x47ffb5();while(!![]){try{var _0x493611=-parseInt(_0x372d84(0x225))/0x1*(-parseInt(_0x372d84(0x1d6))/0x2)+-parseInt(_0x372d84(0x1a9))/0x3*(-parseInt(_0x372d84(0x272))/0x4)+-parseInt(_0x372d84(0x25b))/0x5+-parseInt(_0x372d84(0x18b))/0x6*(-parseInt(_0x372d84(0x235))/0x7)+-parseInt(_0x372d84(0x1f1))/0x8*(parseInt(_0x372d84(0x1b9))/0x9)+parseInt(_0x372d84(0x1f2))/0xa*(-parseInt(_0x372d84(0x1ed))/0xb)+parseInt(_0x372d84(0x1e8))/0xc;if(_0x493611===_0x305716)break;else _0x325e8f['push'](_0x325e8f['shift']());}catch(_0x2b499e){_0x325e8f['push'](_0x325e8f['shift']());}}}(_0x28ed,0x45f58));function _0x28ed(){var _0x8ba4d7=[':logPointId:','_HTMLAllCollection','2376365mjTMQa','concat','_getOwnPropertyDescriptor','setter','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','replace','parse','getOwnPropertyNames','port','_reconnectTimeout','nodeModules','String','_property','autoExpandMaxDepth','_additionalMetadata','_allowedToSend','url','ws/index.js','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_console_ninja_session','resolveGetters','constructor','_propertyName','88864PeNoQn','props','autoExpand','_getOwnPropertyNames','method','level','create','onclose','versions','expId','453786hZRTMQ','_isPrimitiveWrapperType','_inNextEdge','1709311016740','_connectToHostNow','hasOwnProperty','index','_setNodeExpressionPath','stack','_ws','autoExpandPropertyCount','edge','Buffer','object','set','ws://','_cleanNode','astro','_type','_webSocketErrorDocsLink','catch','prototype','_p_','timeEnd','WebSocket','global','slice','Error','_isPrimitiveType','_isUndefined','54iRnQJN','_objectToString','trace','isArray','_quotedRegExp','time','','_setNodeLabel','','unknown','funcName','Set','\\x20browser','reduceLimits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','getOwnPropertyDescriptor','9VpHEMS','includes','_Symbol','negativeInfinity','function','message','nan','onmessage','_dateToString','root_exp','rootExpression','dockerizedApp','_WebSocketClass','getter','hostname','warn','array','_isMap','elapsed','_allowedToConnectOnSend','log','NEGATIVE_INFINITY','cappedElements','_processTreeNodeResult','reload','_connected','value','readyState','autoExpandLimit','14twUgXH',\"/home/daniellr/.vscode/extensions/wallabyjs.console-ninja-1.0.290/node_modules\",'_treeNodePropertiesAfterFullValue','...','string','_maxConnectAttemptCount','_capIfString','allStrLength','coverage','map','pop','_addLoadNode','elements','number','Map','path','[object\\x20Array]','NEXT_RUNTIME','8772096aBeiNa','_regExpToString','_setNodeId','totalStrLength','data','275zCfauG','negativeZero','symbol','getWebSocketClass','3827464fsivUc','99430rMpwcs','push','_connectAttemptCount','env','split','null','_setNodePermissions','type','_keyStrRegExp','__es'+'Module','node','_hasMapOnItsPath','toString','_consoleNinjaAllowedToStart','close','send','_isNegativeZero','then','_inBrowser','unref','name','unshift','hits','webpack','_socket','_disposeWebsocket','34879','length','_blacklistedProperty','perf_hooks','expressionsToEvaluate','_isSet','_sendErrorMessage','127.0.0.1','process','host','join','HTMLAllCollection','_addFunctionsNode','_treeNodePropertiesBeforeFullValue','getOwnPropertySymbols','strLength','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','call','_getOwnPropertySymbols','_hasSymbolPropertyOnItsPath','depth','_WebSocket','bind','_setNodeQueryPath','isExpressionToEvaluate','29525YGRNBJ','count','noFunctions','_attemptToReconnectShortly','stackTraceLimit','Number','performance','test','valueOf','positiveInfinity','_p_length','error','onerror','_console_ninja','[object\\x20Map]','cappedProps','14hxDKYV','indexOf','forEach','parent','get','serialize','getPrototypeOf','_addProperty','timeStamp','location','capped','undefined','_connecting','[object\\x20BigInt]','_setNodeExpandableState','enumerable','autoExpandPreviousObjects','https://tinyurl.com/37x8b79t','\\x20server','hrtime','sortProps','match','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','sort','toLowerCase','_undefined','onopen','now','POSITIVE_INFINITY','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_isArray','console','_addObjectProperty','gateway.docker.internal'];_0x28ed=function(){return _0x8ba4d7;};return _0x28ed();}function _0x37e4(_0x69e146,_0x3db28d){var _0x28ed6e=_0x28ed();return _0x37e4=function(_0x37e460,_0x19a257){_0x37e460=_0x37e460-0x189;var _0x1890cd=_0x28ed6e[_0x37e460];return _0x1890cd;},_0x37e4(_0x69e146,_0x3db28d);}var j=Object[_0x1f7fe1(0x278)],H=Object['defineProperty'],G=Object[_0x1f7fe1(0x1b8)],ee=Object[_0x1f7fe1(0x262)],te=Object[_0x1f7fe1(0x23b)],ne=Object[_0x1f7fe1(0x1a0)][_0x1f7fe1(0x190)],re=(_0x5ac642,_0x1cf560,_0x561553,_0x20c447)=>{var _0x45c202=_0x1f7fe1;if(_0x1cf560&&typeof _0x1cf560==_0x45c202(0x198)||typeof _0x1cf560==_0x45c202(0x1bd)){for(let _0x508a2c of ee(_0x1cf560))!ne[_0x45c202(0x21d)](_0x5ac642,_0x508a2c)&&_0x508a2c!==_0x561553&&H(_0x5ac642,_0x508a2c,{'get':()=>_0x1cf560[_0x508a2c],'enumerable':!(_0x20c447=G(_0x1cf560,_0x508a2c))||_0x20c447[_0x45c202(0x244)]});}return _0x5ac642;},x=(_0x1a9261,_0xb842e1,_0x3a123d)=>(_0x3a123d=_0x1a9261!=null?j(te(_0x1a9261)):{},re(_0xb842e1||!_0x1a9261||!_0x1a9261[_0x1f7fe1(0x1fb)]?H(_0x3a123d,'default',{'value':_0x1a9261,'enumerable':!0x0}):_0x3a123d,_0x1a9261)),X=class{constructor(_0x258946,_0x4abc24,_0x53a90a,_0x68db45,_0x5457e8){var _0x2597cb=_0x1f7fe1;this[_0x2597cb(0x1a4)]=_0x258946,this[_0x2597cb(0x215)]=_0x4abc24,this[_0x2597cb(0x263)]=_0x53a90a,this[_0x2597cb(0x265)]=_0x68db45,this['dockerizedApp']=_0x5457e8,this['_allowedToSend']=!0x0,this[_0x2597cb(0x1cc)]=!0x0,this[_0x2597cb(0x1d2)]=!0x1,this[_0x2597cb(0x241)]=!0x1,this[_0x2597cb(0x18d)]=_0x258946[_0x2597cb(0x214)]?.['env']?.[_0x2597cb(0x1e7)]==='edge',this[_0x2597cb(0x204)]=!this[_0x2597cb(0x1a4)][_0x2597cb(0x214)]?.[_0x2597cb(0x189)]?.[_0x2597cb(0x1fc)]&&!this[_0x2597cb(0x18d)],this['_WebSocketClass']=null,this[_0x2597cb(0x1f4)]=0x0,this[_0x2597cb(0x1db)]=0x14,this[_0x2597cb(0x19e)]=_0x2597cb(0x246),this[_0x2597cb(0x212)]=(this[_0x2597cb(0x204)]?_0x2597cb(0x25f):_0x2597cb(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x1f7fe1(0x1f0)](){var _0x3361a6=_0x1f7fe1;if(this[_0x3361a6(0x1c5)])return this['_WebSocketClass'];let _0x240d8f;if(this[_0x3361a6(0x204)]||this['_inNextEdge'])_0x240d8f=this['global'][_0x3361a6(0x1a3)];else{if(this['global']['process']?.[_0x3361a6(0x221)])_0x240d8f=this['global'][_0x3361a6(0x214)]?.[_0x3361a6(0x221)];else try{let _0x425912=await import(_0x3361a6(0x1e5));_0x240d8f=(await import((await import(_0x3361a6(0x26b)))['pathToFileURL'](_0x425912[_0x3361a6(0x216)](this[_0x3361a6(0x265)],_0x3361a6(0x26c)))[_0x3361a6(0x1fe)]()))['default'];}catch{try{_0x240d8f=require(require(_0x3361a6(0x1e5))[_0x3361a6(0x216)](this[_0x3361a6(0x265)],'ws'));}catch{throw new Error(_0x3361a6(0x21c));}}}return this[_0x3361a6(0x1c5)]=_0x240d8f,_0x240d8f;}[_0x1f7fe1(0x18f)](){var _0x1041c7=_0x1f7fe1;this[_0x1041c7(0x241)]||this[_0x1041c7(0x1d2)]||this[_0x1041c7(0x1f4)]>=this['_maxConnectAttemptCount']||(this[_0x1041c7(0x1cc)]=!0x1,this[_0x1041c7(0x241)]=!0x0,this[_0x1041c7(0x1f4)]++,this[_0x1041c7(0x194)]=new Promise((_0x1d47a8,_0x3026d6)=>{var _0xdd1106=_0x1041c7;this[_0xdd1106(0x1f0)]()[_0xdd1106(0x203)](_0x4cc8ff=>{var _0x47dac7=_0xdd1106;let _0x1d10d0=new _0x4cc8ff(_0x47dac7(0x19a)+(!this[_0x47dac7(0x204)]&&this[_0x47dac7(0x1c4)]?_0x47dac7(0x258):this['host'])+':'+this['port']);_0x1d10d0[_0x47dac7(0x231)]=()=>{var _0x836ce0=_0x47dac7;this[_0x836ce0(0x26a)]=!0x1,this['_disposeWebsocket'](_0x1d10d0),this[_0x836ce0(0x228)](),_0x3026d6(new Error('logger\\x20websocket\\x20error'));},_0x1d10d0[_0x47dac7(0x250)]=()=>{var _0x316d98=_0x47dac7;this['_inBrowser']||_0x1d10d0[_0x316d98(0x20a)]&&_0x1d10d0[_0x316d98(0x20a)]['unref']&&_0x1d10d0[_0x316d98(0x20a)][_0x316d98(0x205)](),_0x1d47a8(_0x1d10d0);},_0x1d10d0['onclose']=()=>{var _0x31901b=_0x47dac7;this[_0x31901b(0x1cc)]=!0x0,this[_0x31901b(0x20b)](_0x1d10d0),this[_0x31901b(0x228)]();},_0x1d10d0[_0x47dac7(0x1c0)]=_0x934319=>{var _0x2f2917=_0x47dac7;try{_0x934319&&_0x934319[_0x2f2917(0x1ec)]&&this[_0x2f2917(0x204)]&&JSON[_0x2f2917(0x261)](_0x934319['data'])[_0x2f2917(0x276)]===_0x2f2917(0x1d1)&&this[_0x2f2917(0x1a4)][_0x2f2917(0x23e)]['reload']();}catch{}};})[_0xdd1106(0x203)](_0x479578=>(this[_0xdd1106(0x1d2)]=!0x0,this[_0xdd1106(0x241)]=!0x1,this[_0xdd1106(0x1cc)]=!0x1,this[_0xdd1106(0x26a)]=!0x0,this[_0xdd1106(0x1f4)]=0x0,_0x479578))[_0xdd1106(0x19f)](_0x4edd30=>(this[_0xdd1106(0x1d2)]=!0x1,this['_connecting']=!0x1,console[_0xdd1106(0x1c8)](_0xdd1106(0x24c)+this[_0xdd1106(0x19e)]),_0x3026d6(new Error(_0xdd1106(0x1b7)+(_0x4edd30&&_0x4edd30[_0xdd1106(0x1be)])))));}));}['_disposeWebsocket'](_0x49318d){var _0x4323c0=_0x1f7fe1;this[_0x4323c0(0x1d2)]=!0x1,this[_0x4323c0(0x241)]=!0x1;try{_0x49318d[_0x4323c0(0x279)]=null,_0x49318d[_0x4323c0(0x231)]=null,_0x49318d[_0x4323c0(0x250)]=null;}catch{}try{_0x49318d[_0x4323c0(0x1d4)]<0x2&&_0x49318d[_0x4323c0(0x200)]();}catch{}}['_attemptToReconnectShortly'](){var _0xafae58=_0x1f7fe1;clearTimeout(this[_0xafae58(0x264)]),!(this[_0xafae58(0x1f4)]>=this[_0xafae58(0x1db)])&&(this[_0xafae58(0x264)]=setTimeout(()=>{var _0x17ce1b=_0xafae58;this[_0x17ce1b(0x1d2)]||this[_0x17ce1b(0x241)]||(this[_0x17ce1b(0x18f)](),this['_ws']?.[_0x17ce1b(0x19f)](()=>this[_0x17ce1b(0x228)]()));},0x1f4),this[_0xafae58(0x264)][_0xafae58(0x205)]&&this['_reconnectTimeout'][_0xafae58(0x205)]());}async[_0x1f7fe1(0x201)](_0x16766e){var _0x150c4e=_0x1f7fe1;try{if(!this[_0x150c4e(0x26a)])return;this[_0x150c4e(0x1cc)]&&this[_0x150c4e(0x18f)](),(await this[_0x150c4e(0x194)])[_0x150c4e(0x201)](JSON['stringify'](_0x16766e));}catch(_0x58d9aa){console[_0x150c4e(0x1c8)](this[_0x150c4e(0x212)]+':\\x20'+(_0x58d9aa&&_0x58d9aa[_0x150c4e(0x1be)])),this[_0x150c4e(0x26a)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x1266e6,_0x5e5ebe,_0x3659b0,_0x42e04e,_0x503754,_0xf95501){var _0x1cbf77=_0x1f7fe1;let _0x1c2814=_0x3659b0['split'](',')[_0x1cbf77(0x1df)](_0x290148=>{var _0x4336e5=_0x1cbf77;try{_0x1266e6[_0x4336e5(0x26e)]||((_0x503754==='next.js'||_0x503754==='remix'||_0x503754===_0x4336e5(0x19c)||_0x503754==='angular')&&(_0x503754+=!_0x1266e6[_0x4336e5(0x214)]?.['versions']?.[_0x4336e5(0x1fc)]&&_0x1266e6[_0x4336e5(0x214)]?.[_0x4336e5(0x1f5)]?.['NEXT_RUNTIME']!==_0x4336e5(0x196)?_0x4336e5(0x1b5):_0x4336e5(0x247)),_0x1266e6['_console_ninja_session']={'id':+new Date(),'tool':_0x503754});let _0xd2e366=new X(_0x1266e6,_0x5e5ebe,_0x290148,_0x42e04e,_0xf95501);return _0xd2e366[_0x4336e5(0x201)][_0x4336e5(0x222)](_0xd2e366);}catch(_0x46304f){return console['warn'](_0x4336e5(0x254),_0x46304f&&_0x46304f[_0x4336e5(0x1be)]),()=>{};}});return _0x130af4=>_0x1c2814[_0x1cbf77(0x237)](_0x353891=>_0x353891(_0x130af4));}function W(_0x23fa9f){var _0x409e0d=_0x1f7fe1;let _0x4e8289=function(_0x1deaf8,_0x175b0b){return _0x175b0b-_0x1deaf8;},_0x52630f;if(_0x23fa9f[_0x409e0d(0x22b)])_0x52630f=function(){var _0x343bf=_0x409e0d;return _0x23fa9f[_0x343bf(0x22b)][_0x343bf(0x251)]();};else{if(_0x23fa9f[_0x409e0d(0x214)]&&_0x23fa9f[_0x409e0d(0x214)][_0x409e0d(0x248)]&&_0x23fa9f[_0x409e0d(0x214)]?.[_0x409e0d(0x1f5)]?.[_0x409e0d(0x1e7)]!==_0x409e0d(0x196))_0x52630f=function(){var _0x3f21b4=_0x409e0d;return _0x23fa9f[_0x3f21b4(0x214)][_0x3f21b4(0x248)]();},_0x4e8289=function(_0x5ba0ff,_0x3f75fb){return 0x3e8*(_0x3f75fb[0x0]-_0x5ba0ff[0x0])+(_0x3f75fb[0x1]-_0x5ba0ff[0x1])/0xf4240;};else try{let {performance:_0x830f41}=require(_0x409e0d(0x20f));_0x52630f=function(){return _0x830f41['now']();};}catch{_0x52630f=function(){return+new Date();};}}return{'elapsed':_0x4e8289,'timeStamp':_0x52630f,'now':()=>Date[_0x409e0d(0x251)]()};}function J(_0x4220c1,_0x2aef74,_0x3cf029){var _0x551246=_0x1f7fe1;if(_0x4220c1[_0x551246(0x1ff)]!==void 0x0)return _0x4220c1['_consoleNinjaAllowedToStart'];let _0x1283f4=_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x189)]?.[_0x551246(0x1fc)]||_0x4220c1[_0x551246(0x214)]?.[_0x551246(0x1f5)]?.['NEXT_RUNTIME']===_0x551246(0x196);return _0x1283f4&&_0x3cf029==='nuxt'?_0x4220c1[_0x551246(0x1ff)]=!0x1:_0x4220c1[_0x551246(0x1ff)]=_0x1283f4||!_0x2aef74||_0x4220c1['location']?.['hostname']&&_0x2aef74[_0x551246(0x1ba)](_0x4220c1['location'][_0x551246(0x1c7)]),_0x4220c1['_consoleNinjaAllowedToStart'];}function Y(_0x4a231c,_0x39e58b,_0x2e0b83,_0x12de0b){var _0x11d2fd=_0x1f7fe1;_0x4a231c=_0x4a231c,_0x39e58b=_0x39e58b,_0x2e0b83=_0x2e0b83,_0x12de0b=_0x12de0b;let _0x35cb99=W(_0x4a231c),_0x27fc15=_0x35cb99[_0x11d2fd(0x1cb)],_0x9e4c4d=_0x35cb99['timeStamp'];class _0x33872f{constructor(){var _0x25774f=_0x11d2fd;this[_0x25774f(0x1fa)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x25774f(0x1ad)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x4a231c[_0x25774f(0x240)],this[_0x25774f(0x25a)]=_0x4a231c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x25774f(0x275)]=Object[_0x25774f(0x262)],this['_Symbol']=_0x4a231c['Symbol'],this['_regExpToString']=RegExp[_0x25774f(0x1a0)]['toString'],this[_0x25774f(0x1c1)]=Date[_0x25774f(0x1a0)][_0x25774f(0x1fe)];}[_0x11d2fd(0x23a)](_0x3811cf,_0x356064,_0x4f2c04,_0x1eef20){var _0x44970c=_0x11d2fd,_0x2c428f=this,_0x4e9b94=_0x4f2c04[_0x44970c(0x274)];function _0x56a9a7(_0x56ecc6,_0x45009d,_0x30aaee){var _0x4e0075=_0x44970c;_0x45009d['type']=_0x4e0075(0x1b2),_0x45009d[_0x4e0075(0x230)]=_0x56ecc6[_0x4e0075(0x1be)],_0x3032b6=_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)],_0x30aaee[_0x4e0075(0x1fc)][_0x4e0075(0x253)]=_0x45009d,_0x2c428f[_0x4e0075(0x219)](_0x45009d,_0x30aaee);}try{_0x4f2c04[_0x44970c(0x277)]++,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1f3)](_0x356064);var _0x4839bd,_0x4b4f61,_0x1ebfe1,_0x244d80,_0xbe4d9a=[],_0xdfac7a=[],_0x1705af,_0x3e3e7f=this[_0x44970c(0x19d)](_0x356064),_0x1c36fe=_0x3e3e7f===_0x44970c(0x1c9),_0x13b536=!0x1,_0x5b148b=_0x3e3e7f==='function',_0x575384=this[_0x44970c(0x1a7)](_0x3e3e7f),_0x34250c=this['_isPrimitiveWrapperType'](_0x3e3e7f),_0x3e85e0=_0x575384||_0x34250c,_0x25c339={},_0x16e036=0x0,_0x3cc5fd=!0x1,_0x3032b6,_0x8dc30c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f2c04[_0x44970c(0x220)]){if(_0x1c36fe){if(_0x4b4f61=_0x356064[_0x44970c(0x20d)],_0x4b4f61>_0x4f2c04['elements']){for(_0x1ebfe1=0x0,_0x244d80=_0x4f2c04[_0x44970c(0x1e2)],_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a['push'](_0x2c428f['_addProperty'](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));_0x3811cf[_0x44970c(0x1cf)]=!0x0;}else{for(_0x1ebfe1=0x0,_0x244d80=_0x4b4f61,_0x4839bd=_0x1ebfe1;_0x4839bd<_0x244d80;_0x4839bd++)_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x23c)](_0xbe4d9a,_0x356064,_0x3e3e7f,_0x4839bd,_0x4f2c04));}_0x4f2c04[_0x44970c(0x195)]+=_0xdfac7a[_0x44970c(0x20d)];}if(!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f==='undefined')&&!_0x575384&&_0x3e3e7f!==_0x44970c(0x266)&&_0x3e3e7f!==_0x44970c(0x197)&&_0x3e3e7f!==_0x44970c(0x24b)){var _0xb99f3c=_0x1eef20[_0x44970c(0x273)]||_0x4f2c04[_0x44970c(0x273)];if(this[_0x44970c(0x211)](_0x356064)?(_0x4839bd=0x0,_0x356064[_0x44970c(0x237)](function(_0x19c16a){var _0xbae55e=_0x44970c;if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04[_0xbae55e(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0xbae55e(0x195)]>_0x4f2c04[_0xbae55e(0x1d5)]){_0x3cc5fd=!0x0;return;}_0xdfac7a[_0xbae55e(0x1f3)](_0x2c428f[_0xbae55e(0x23c)](_0xbe4d9a,_0x356064,_0xbae55e(0x1b4),_0x4839bd++,_0x4f2c04,function(_0x232a17){return function(){return _0x232a17;};}(_0x19c16a)));})):this[_0x44970c(0x1ca)](_0x356064)&&_0x356064[_0x44970c(0x237)](function(_0x49e5a8,_0x14bf92){var _0x21c289=_0x44970c;if(_0x16e036++,_0x4f2c04[_0x21c289(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;return;}if(!_0x4f2c04['isExpressionToEvaluate']&&_0x4f2c04['autoExpand']&&_0x4f2c04[_0x21c289(0x195)]>_0x4f2c04['autoExpandLimit']){_0x3cc5fd=!0x0;return;}var _0x57858b=_0x14bf92[_0x21c289(0x1fe)]();_0x57858b[_0x21c289(0x20d)]>0x64&&(_0x57858b=_0x57858b[_0x21c289(0x1a5)](0x0,0x64)+_0x21c289(0x1d9)),_0xdfac7a[_0x21c289(0x1f3)](_0x2c428f[_0x21c289(0x23c)](_0xbe4d9a,_0x356064,_0x21c289(0x1e4),_0x57858b,_0x4f2c04,function(_0x311c38){return function(){return _0x311c38;};}(_0x49e5a8)));}),!_0x13b536){try{for(_0x1705af in _0x356064)if(!(_0x1c36fe&&_0x8dc30c['test'](_0x1705af))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)){if(_0x16e036++,_0x4f2c04[_0x44970c(0x195)]++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f['_addObjectProperty'](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}catch{}if(_0x25c339[_0x44970c(0x22f)]=!0x0,_0x5b148b&&(_0x25c339['_p_name']=!0x0),!_0x3cc5fd){var _0x9e31=[][_0x44970c(0x25c)](this[_0x44970c(0x275)](_0x356064))[_0x44970c(0x25c)](this[_0x44970c(0x21e)](_0x356064));for(_0x4839bd=0x0,_0x4b4f61=_0x9e31[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)if(_0x1705af=_0x9e31[_0x4839bd],!(_0x1c36fe&&_0x8dc30c[_0x44970c(0x22c)](_0x1705af[_0x44970c(0x1fe)]()))&&!this[_0x44970c(0x20e)](_0x356064,_0x1705af,_0x4f2c04)&&!_0x25c339[_0x44970c(0x1a1)+_0x1705af[_0x44970c(0x1fe)]()]){if(_0x16e036++,_0x4f2c04['autoExpandPropertyCount']++,_0x16e036>_0xb99f3c){_0x3cc5fd=!0x0;break;}if(!_0x4f2c04[_0x44970c(0x224)]&&_0x4f2c04['autoExpand']&&_0x4f2c04['autoExpandPropertyCount']>_0x4f2c04[_0x44970c(0x1d5)]){_0x3cc5fd=!0x0;break;}_0xdfac7a[_0x44970c(0x1f3)](_0x2c428f[_0x44970c(0x257)](_0xbe4d9a,_0x25c339,_0x356064,_0x3e3e7f,_0x1705af,_0x4f2c04));}}}}}if(_0x3811cf['type']=_0x3e3e7f,_0x3e85e0?(_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x22d)](),this[_0x44970c(0x1dc)](_0x3e3e7f,_0x3811cf,_0x4f2c04,_0x1eef20)):_0x3e3e7f==='date'?_0x3811cf['value']=this[_0x44970c(0x1c1)]['call'](_0x356064):_0x3e3e7f===_0x44970c(0x24b)?_0x3811cf[_0x44970c(0x1d3)]=_0x356064[_0x44970c(0x1fe)]():_0x3e3e7f==='RegExp'?_0x3811cf['value']=this[_0x44970c(0x1e9)][_0x44970c(0x21d)](_0x356064):_0x3e3e7f===_0x44970c(0x1ef)&&this[_0x44970c(0x1bb)]?_0x3811cf[_0x44970c(0x1d3)]=this['_Symbol'][_0x44970c(0x1a0)][_0x44970c(0x1fe)][_0x44970c(0x21d)](_0x356064):!_0x4f2c04['depth']&&!(_0x3e3e7f===_0x44970c(0x1f7)||_0x3e3e7f===_0x44970c(0x240))&&(delete _0x3811cf['value'],_0x3811cf['capped']=!0x0),_0x3cc5fd&&(_0x3811cf[_0x44970c(0x234)]=!0x0),_0x3032b6=_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)],_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3811cf,this['_treeNodePropertiesBeforeFullValue'](_0x3811cf,_0x4f2c04),_0xdfac7a[_0x44970c(0x20d)]){for(_0x4839bd=0x0,_0x4b4f61=_0xdfac7a[_0x44970c(0x20d)];_0x4839bd<_0x4b4f61;_0x4839bd++)_0xdfac7a[_0x4839bd](_0x4839bd);}_0xbe4d9a['length']&&(_0x3811cf[_0x44970c(0x273)]=_0xbe4d9a);}catch(_0x370d44){_0x56a9a7(_0x370d44,_0x3811cf,_0x4f2c04);}return this[_0x44970c(0x269)](_0x356064,_0x3811cf),this['_treeNodePropertiesAfterFullValue'](_0x3811cf,_0x4f2c04),_0x4f2c04[_0x44970c(0x1fc)][_0x44970c(0x253)]=_0x3032b6,_0x4f2c04['level']--,_0x4f2c04['autoExpand']=_0x4e9b94,_0x4f2c04[_0x44970c(0x274)]&&_0x4f2c04[_0x44970c(0x245)][_0x44970c(0x1e0)](),_0x3811cf;}[_0x11d2fd(0x21e)](_0x48b7d6){var _0x3de307=_0x11d2fd;return Object['getOwnPropertySymbols']?Object[_0x3de307(0x21a)](_0x48b7d6):[];}[_0x11d2fd(0x211)](_0x3763e4){var _0x55b8a1=_0x11d2fd;return!!(_0x3763e4&&_0x4a231c[_0x55b8a1(0x1b4)]&&this['_objectToString'](_0x3763e4)==='[object\\x20Set]'&&_0x3763e4[_0x55b8a1(0x237)]);}[_0x11d2fd(0x20e)](_0x4769e4,_0x48cf79,_0x5a42e8){var _0x28c014=_0x11d2fd;return _0x5a42e8[_0x28c014(0x227)]?typeof _0x4769e4[_0x48cf79]==_0x28c014(0x1bd):!0x1;}['_type'](_0x49dfdd){var _0x55173a=_0x11d2fd,_0x912292='';return _0x912292=typeof _0x49dfdd,_0x912292===_0x55173a(0x198)?this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x1e6)?_0x912292=_0x55173a(0x1c9):this['_objectToString'](_0x49dfdd)==='[object\\x20Date]'?_0x912292='date':this[_0x55173a(0x1aa)](_0x49dfdd)===_0x55173a(0x242)?_0x912292=_0x55173a(0x24b):_0x49dfdd===null?_0x912292=_0x55173a(0x1f7):_0x49dfdd[_0x55173a(0x270)]&&(_0x912292=_0x49dfdd['constructor'][_0x55173a(0x206)]||_0x912292):_0x912292==='undefined'&&this[_0x55173a(0x25a)]&&_0x49dfdd instanceof this['_HTMLAllCollection']&&(_0x912292=_0x55173a(0x217)),_0x912292;}[_0x11d2fd(0x1aa)](_0x43d414){var _0x57de40=_0x11d2fd;return Object[_0x57de40(0x1a0)][_0x57de40(0x1fe)][_0x57de40(0x21d)](_0x43d414);}[_0x11d2fd(0x1a7)](_0xcdaeb7){var _0x192334=_0x11d2fd;return _0xcdaeb7==='boolean'||_0xcdaeb7===_0x192334(0x1da)||_0xcdaeb7==='number';}[_0x11d2fd(0x18c)](_0x5ca27f){var _0x346078=_0x11d2fd;return _0x5ca27f==='Boolean'||_0x5ca27f===_0x346078(0x266)||_0x5ca27f===_0x346078(0x22a);}[_0x11d2fd(0x23c)](_0x1b8706,_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1){var _0x5d7e22=this;return function(_0x2b580b){var _0x47290f=_0x37e4,_0xfcc17a=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x253)],_0x194d30=_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)],_0x1fedfd=_0x107b05[_0x47290f(0x1fc)]['parent'];_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x238)]=_0xfcc17a,_0x107b05['node'][_0x47290f(0x191)]=typeof _0x5a7a70=='number'?_0x5a7a70:_0x2b580b,_0x1b8706[_0x47290f(0x1f3)](_0x5d7e22[_0x47290f(0x267)](_0x4819e1,_0x4ee3fb,_0x5a7a70,_0x107b05,_0x4ea6e1)),_0x107b05[_0x47290f(0x1fc)]['parent']=_0x1fedfd,_0x107b05[_0x47290f(0x1fc)][_0x47290f(0x191)]=_0x194d30;};}['_addObjectProperty'](_0x16588b,_0x11cea7,_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6){var _0x243e50=_0x11d2fd,_0x44abba=this;return _0x11cea7[_0x243e50(0x1a1)+_0x1c01d4[_0x243e50(0x1fe)]()]=!0x0,function(_0x1f4d51){var _0x4bdc1f=_0x243e50,_0x44d283=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x253)],_0x4fb828=_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)],_0x3169d7=_0x4d4b6b['node'][_0x4bdc1f(0x238)];_0x4d4b6b[_0x4bdc1f(0x1fc)]['parent']=_0x44d283,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x1f4d51,_0x16588b['push'](_0x44abba[_0x4bdc1f(0x267)](_0x13b6ef,_0x380310,_0x1c01d4,_0x4d4b6b,_0x7feca6)),_0x4d4b6b['node'][_0x4bdc1f(0x238)]=_0x3169d7,_0x4d4b6b[_0x4bdc1f(0x1fc)][_0x4bdc1f(0x191)]=_0x4fb828;};}[_0x11d2fd(0x267)](_0x2ee2f9,_0x504c63,_0x2be839,_0x5d4bfe,_0x466772){var _0x280f6e=_0x11d2fd,_0xc6afe0=this;_0x466772||(_0x466772=function(_0xe7fdf,_0x44194f){return _0xe7fdf[_0x44194f];});var _0x298103=_0x2be839[_0x280f6e(0x1fe)](),_0x28f594=_0x5d4bfe[_0x280f6e(0x210)]||{},_0x5c79a8=_0x5d4bfe[_0x280f6e(0x220)],_0x20bebc=_0x5d4bfe[_0x280f6e(0x224)];try{var _0x27f153=this[_0x280f6e(0x1ca)](_0x2ee2f9),_0x14178a=_0x298103;_0x27f153&&_0x14178a[0x0]==='\\x27'&&(_0x14178a=_0x14178a['substr'](0x1,_0x14178a[_0x280f6e(0x20d)]-0x2));var _0x126371=_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594['_p_'+_0x14178a];_0x126371&&(_0x5d4bfe[_0x280f6e(0x220)]=_0x5d4bfe[_0x280f6e(0x220)]+0x1),_0x5d4bfe['isExpressionToEvaluate']=!!_0x126371;var _0x239579=typeof _0x2be839==_0x280f6e(0x1ef),_0x2075b5={'name':_0x239579||_0x27f153?_0x298103:this[_0x280f6e(0x271)](_0x298103)};if(_0x239579&&(_0x2075b5[_0x280f6e(0x1ef)]=!0x0),!(_0x504c63==='array'||_0x504c63===_0x280f6e(0x1a6))){var _0x3d2d8e=this[_0x280f6e(0x25d)](_0x2ee2f9,_0x2be839);if(_0x3d2d8e&&(_0x3d2d8e[_0x280f6e(0x199)]&&(_0x2075b5[_0x280f6e(0x25e)]=!0x0),_0x3d2d8e[_0x280f6e(0x239)]&&!_0x126371&&!_0x5d4bfe['resolveGetters']))return _0x2075b5[_0x280f6e(0x1c6)]=!0x0,this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x216f35;try{_0x216f35=_0x466772(_0x2ee2f9,_0x2be839);}catch(_0x50f558){return _0x2075b5={'name':_0x298103,'type':_0x280f6e(0x1b2),'error':_0x50f558[_0x280f6e(0x1be)]},this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe),_0x2075b5;}var _0x4dc249=this[_0x280f6e(0x19d)](_0x216f35),_0x5e863a=this[_0x280f6e(0x1a7)](_0x4dc249);if(_0x2075b5[_0x280f6e(0x1f9)]=_0x4dc249,_0x5e863a)this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x5ca40f=_0x280f6e;_0x2075b5[_0x5ca40f(0x1d3)]=_0x216f35[_0x5ca40f(0x22d)](),!_0x126371&&_0xc6afe0[_0x5ca40f(0x1dc)](_0x4dc249,_0x2075b5,_0x5d4bfe,{});});else{var _0x1e54db=_0x5d4bfe['autoExpand']&&_0x5d4bfe[_0x280f6e(0x277)]<_0x5d4bfe[_0x280f6e(0x268)]&&_0x5d4bfe[_0x280f6e(0x245)][_0x280f6e(0x236)](_0x216f35)<0x0&&_0x4dc249!==_0x280f6e(0x1bd)&&_0x5d4bfe[_0x280f6e(0x195)]<_0x5d4bfe[_0x280f6e(0x1d5)];_0x1e54db||_0x5d4bfe['level']<_0x5c79a8||_0x126371?(this[_0x280f6e(0x23a)](_0x2075b5,_0x216f35,_0x5d4bfe,_0x126371||{}),this[_0x280f6e(0x269)](_0x216f35,_0x2075b5)):this[_0x280f6e(0x1d0)](_0x2075b5,_0x5d4bfe,_0x216f35,function(){var _0x519504=_0x280f6e;_0x4dc249===_0x519504(0x1f7)||_0x4dc249===_0x519504(0x240)||(delete _0x2075b5[_0x519504(0x1d3)],_0x2075b5[_0x519504(0x23f)]=!0x0);});}return _0x2075b5;}finally{_0x5d4bfe[_0x280f6e(0x210)]=_0x28f594,_0x5d4bfe[_0x280f6e(0x220)]=_0x5c79a8,_0x5d4bfe[_0x280f6e(0x224)]=_0x20bebc;}}['_capIfString'](_0x3fc6ce,_0x478b61,_0x11351e,_0x3eb109){var _0x45bb7c=_0x11d2fd,_0x196223=_0x3eb109['strLength']||_0x11351e['strLength'];if((_0x3fc6ce==='string'||_0x3fc6ce===_0x45bb7c(0x266))&&_0x478b61[_0x45bb7c(0x1d3)]){let _0x5832dd=_0x478b61[_0x45bb7c(0x1d3)][_0x45bb7c(0x20d)];_0x11351e[_0x45bb7c(0x1dd)]+=_0x5832dd,_0x11351e['allStrLength']>_0x11351e[_0x45bb7c(0x1eb)]?(_0x478b61[_0x45bb7c(0x23f)]='',delete _0x478b61['value']):_0x5832dd>_0x196223&&(_0x478b61[_0x45bb7c(0x23f)]=_0x478b61[_0x45bb7c(0x1d3)]['substr'](0x0,_0x196223),delete _0x478b61['value']);}}[_0x11d2fd(0x1ca)](_0x36ea58){var _0x4e1853=_0x11d2fd;return!!(_0x36ea58&&_0x4a231c[_0x4e1853(0x1e4)]&&this[_0x4e1853(0x1aa)](_0x36ea58)===_0x4e1853(0x233)&&_0x36ea58[_0x4e1853(0x237)]);}['_propertyName'](_0x889d08){var _0x2a9e0f=_0x11d2fd;if(_0x889d08[_0x2a9e0f(0x24a)](/^\\d+$/))return _0x889d08;var _0x5be9f3;try{_0x5be9f3=JSON['stringify'](''+_0x889d08);}catch{_0x5be9f3='\\x22'+this[_0x2a9e0f(0x1aa)](_0x889d08)+'\\x22';}return _0x5be9f3['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5be9f3=_0x5be9f3['substr'](0x1,_0x5be9f3[_0x2a9e0f(0x20d)]-0x2):_0x5be9f3=_0x5be9f3[_0x2a9e0f(0x260)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5be9f3;}[_0x11d2fd(0x1d0)](_0x223c38,_0xee378e,_0xced986,_0x4803c2){var _0x8480ae=_0x11d2fd;this[_0x8480ae(0x219)](_0x223c38,_0xee378e),_0x4803c2&&_0x4803c2(),this[_0x8480ae(0x269)](_0xced986,_0x223c38),this['_treeNodePropertiesAfterFullValue'](_0x223c38,_0xee378e);}['_treeNodePropertiesBeforeFullValue'](_0x13c011,_0x31fc7c){var _0x394e81=_0x11d2fd;this[_0x394e81(0x1ea)](_0x13c011,_0x31fc7c),this[_0x394e81(0x223)](_0x13c011,_0x31fc7c),this[_0x394e81(0x192)](_0x13c011,_0x31fc7c),this['_setNodePermissions'](_0x13c011,_0x31fc7c);}[_0x11d2fd(0x1ea)](_0x115c5c,_0x1c8355){}[_0x11d2fd(0x223)](_0x54bbce,_0x179cf4){}[_0x11d2fd(0x1b0)](_0x479590,_0x258dde){}[_0x11d2fd(0x1a8)](_0x30d571){var _0x3c36bf=_0x11d2fd;return _0x30d571===this[_0x3c36bf(0x24f)];}[_0x11d2fd(0x1d8)](_0x1e498e,_0x425178){var _0x55389b=_0x11d2fd;this[_0x55389b(0x1b0)](_0x1e498e,_0x425178),this['_setNodeExpandableState'](_0x1e498e),_0x425178[_0x55389b(0x249)]&&this['_sortProps'](_0x1e498e),this[_0x55389b(0x218)](_0x1e498e,_0x425178),this['_addLoadNode'](_0x1e498e,_0x425178),this[_0x55389b(0x19b)](_0x1e498e);}['_additionalMetadata'](_0x446c33,_0x5100e1){var _0xa612d4=_0x11d2fd;let _0x4c171c;try{_0x4a231c[_0xa612d4(0x256)]&&(_0x4c171c=_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)],_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=function(){}),_0x446c33&&typeof _0x446c33[_0xa612d4(0x20d)]==_0xa612d4(0x1e3)&&(_0x5100e1['length']=_0x446c33[_0xa612d4(0x20d)]);}catch{}finally{_0x4c171c&&(_0x4a231c[_0xa612d4(0x256)][_0xa612d4(0x230)]=_0x4c171c);}if(_0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1e3)||_0x5100e1[_0xa612d4(0x1f9)]==='Number'){if(isNaN(_0x5100e1[_0xa612d4(0x1d3)]))_0x5100e1[_0xa612d4(0x1bf)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];else switch(_0x5100e1['value']){case Number[_0xa612d4(0x252)]:_0x5100e1[_0xa612d4(0x22e)]=!0x0,delete _0x5100e1['value'];break;case Number[_0xa612d4(0x1ce)]:_0x5100e1[_0xa612d4(0x1bc)]=!0x0,delete _0x5100e1[_0xa612d4(0x1d3)];break;case 0x0:this[_0xa612d4(0x202)](_0x5100e1[_0xa612d4(0x1d3)])&&(_0x5100e1[_0xa612d4(0x1ee)]=!0x0);break;}}else _0x5100e1[_0xa612d4(0x1f9)]===_0xa612d4(0x1bd)&&typeof _0x446c33[_0xa612d4(0x206)]=='string'&&_0x446c33[_0xa612d4(0x206)]&&_0x5100e1['name']&&_0x446c33['name']!==_0x5100e1[_0xa612d4(0x206)]&&(_0x5100e1[_0xa612d4(0x1b3)]=_0x446c33[_0xa612d4(0x206)]);}['_isNegativeZero'](_0x59c9ba){return 0x1/_0x59c9ba===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x194b22){var _0x489762=_0x11d2fd;!_0x194b22['props']||!_0x194b22[_0x489762(0x273)][_0x489762(0x20d)]||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1c9)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1e4)||_0x194b22[_0x489762(0x1f9)]===_0x489762(0x1b4)||_0x194b22['props'][_0x489762(0x24d)](function(_0x5750f1,_0x2eb738){var _0x76f8ac=_0x489762,_0x5b2bb8=_0x5750f1[_0x76f8ac(0x206)][_0x76f8ac(0x24e)](),_0x4a4f8f=_0x2eb738[_0x76f8ac(0x206)]['toLowerCase']();return _0x5b2bb8<_0x4a4f8f?-0x1:_0x5b2bb8>_0x4a4f8f?0x1:0x0;});}[_0x11d2fd(0x218)](_0x1c5692,_0x5941d2){var _0x6ddc63=_0x11d2fd;if(!(_0x5941d2[_0x6ddc63(0x227)]||!_0x1c5692[_0x6ddc63(0x273)]||!_0x1c5692['props']['length'])){for(var _0x397818=[],_0x1bb0d6=[],_0xcf63f9=0x0,_0x522aed=_0x1c5692[_0x6ddc63(0x273)][_0x6ddc63(0x20d)];_0xcf63f9<_0x522aed;_0xcf63f9++){var _0x5b66ea=_0x1c5692['props'][_0xcf63f9];_0x5b66ea[_0x6ddc63(0x1f9)]===_0x6ddc63(0x1bd)?_0x397818[_0x6ddc63(0x1f3)](_0x5b66ea):_0x1bb0d6[_0x6ddc63(0x1f3)](_0x5b66ea);}if(!(!_0x1bb0d6['length']||_0x397818[_0x6ddc63(0x20d)]<=0x1)){_0x1c5692[_0x6ddc63(0x273)]=_0x1bb0d6;var _0x4d8efd={'functionsNode':!0x0,'props':_0x397818};this[_0x6ddc63(0x1ea)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x1b0)](_0x4d8efd,_0x5941d2),this[_0x6ddc63(0x243)](_0x4d8efd),this[_0x6ddc63(0x1f8)](_0x4d8efd,_0x5941d2),_0x4d8efd['id']+='\\x20f',_0x1c5692['props'][_0x6ddc63(0x207)](_0x4d8efd);}}}[_0x11d2fd(0x1e1)](_0x1c7ad0,_0x297b6d){}[_0x11d2fd(0x243)](_0x2f5087){}[_0x11d2fd(0x255)](_0x401698){var _0x3fdb91=_0x11d2fd;return Array[_0x3fdb91(0x1ac)](_0x401698)||typeof _0x401698==_0x3fdb91(0x198)&&this[_0x3fdb91(0x1aa)](_0x401698)==='[object\\x20Array]';}[_0x11d2fd(0x1f8)](_0x152162,_0x1ed574){}[_0x11d2fd(0x19b)](_0x161253){var _0x679a0c=_0x11d2fd;delete _0x161253[_0x679a0c(0x21f)],delete _0x161253['_hasSetOnItsPath'],delete _0x161253[_0x679a0c(0x1fd)];}[_0x11d2fd(0x192)](_0x43a91c,_0x4b1cef){}}let _0x1698da=new _0x33872f(),_0x4336d8={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x507368={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23c2be(_0x19fcd2,_0x453451,_0x181b6d,_0x2a08b3,_0x4b434e,_0x54185d){var _0x9210d5=_0x11d2fd;let _0x5b44f0,_0x36715b;try{_0x36715b=_0x9e4c4d(),_0x5b44f0=_0x2e0b83[_0x453451],!_0x5b44f0||_0x36715b-_0x5b44f0['ts']>0x1f4&&_0x5b44f0[_0x9210d5(0x226)]&&_0x5b44f0['time']/_0x5b44f0[_0x9210d5(0x226)]<0x64?(_0x2e0b83[_0x453451]=_0x5b44f0={'count':0x0,'time':0x0,'ts':_0x36715b},_0x2e0b83[_0x9210d5(0x208)]={}):_0x36715b-_0x2e0b83[_0x9210d5(0x208)]['ts']>0x32&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]&&_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]/_0x2e0b83[_0x9210d5(0x208)]['count']<0x64&&(_0x2e0b83[_0x9210d5(0x208)]={});let _0x7293a0=[],_0x36296b=_0x5b44f0['reduceLimits']||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]?_0x507368:_0x4336d8,_0x247beb=_0x217a47=>{var _0x4a89a2=_0x9210d5;let _0x541454={};return _0x541454[_0x4a89a2(0x273)]=_0x217a47[_0x4a89a2(0x273)],_0x541454[_0x4a89a2(0x1e2)]=_0x217a47[_0x4a89a2(0x1e2)],_0x541454[_0x4a89a2(0x21b)]=_0x217a47[_0x4a89a2(0x21b)],_0x541454[_0x4a89a2(0x1eb)]=_0x217a47[_0x4a89a2(0x1eb)],_0x541454['autoExpandLimit']=_0x217a47['autoExpandLimit'],_0x541454[_0x4a89a2(0x268)]=_0x217a47['autoExpandMaxDepth'],_0x541454[_0x4a89a2(0x249)]=!0x1,_0x541454[_0x4a89a2(0x227)]=!_0x39e58b,_0x541454['depth']=0x1,_0x541454[_0x4a89a2(0x277)]=0x0,_0x541454[_0x4a89a2(0x18a)]='root_exp_id',_0x541454[_0x4a89a2(0x1c3)]=_0x4a89a2(0x1c2),_0x541454['autoExpand']=!0x0,_0x541454[_0x4a89a2(0x245)]=[],_0x541454[_0x4a89a2(0x195)]=0x0,_0x541454[_0x4a89a2(0x26f)]=!0x0,_0x541454[_0x4a89a2(0x1dd)]=0x0,_0x541454[_0x4a89a2(0x1fc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x541454;};for(var _0x40c849=0x0;_0x40c849<_0x4b434e[_0x9210d5(0x20d)];_0x40c849++)_0x7293a0['push'](_0x1698da[_0x9210d5(0x23a)]({'timeNode':_0x19fcd2==='time'||void 0x0},_0x4b434e[_0x40c849],_0x247beb(_0x36296b),{}));if(_0x19fcd2===_0x9210d5(0x1ab)){let _0x4b4e9e=Error[_0x9210d5(0x229)];try{Error['stackTraceLimit']=0x1/0x0,_0x7293a0[_0x9210d5(0x1f3)](_0x1698da[_0x9210d5(0x23a)]({'stackNode':!0x0},new Error()[_0x9210d5(0x193)],_0x247beb(_0x36296b),{'strLength':0x1/0x0}));}finally{Error[_0x9210d5(0x229)]=_0x4b4e9e;}}return{'method':_0x9210d5(0x1cd),'version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':_0x7293a0,'id':_0x453451,'context':_0x54185d}]};}catch(_0x3c4fcd){return{'method':'log','version':_0x12de0b,'args':[{'ts':_0x181b6d,'session':_0x2a08b3,'args':[{'type':_0x9210d5(0x1b2),'error':_0x3c4fcd&&_0x3c4fcd[_0x9210d5(0x1be)]}],'id':_0x453451,'context':_0x54185d}]};}finally{try{if(_0x5b44f0&&_0x36715b){let _0x39c04e=_0x9e4c4d();_0x5b44f0[_0x9210d5(0x226)]++,_0x5b44f0['time']+=_0x27fc15(_0x36715b,_0x39c04e),_0x5b44f0['ts']=_0x39c04e,_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x226)]++,_0x2e0b83['hits'][_0x9210d5(0x1ae)]+=_0x27fc15(_0x36715b,_0x39c04e),_0x2e0b83['hits']['ts']=_0x39c04e,(_0x5b44f0[_0x9210d5(0x226)]>0x32||_0x5b44f0['time']>0x64)&&(_0x5b44f0[_0x9210d5(0x1b6)]=!0x0),(_0x2e0b83['hits']['count']>0x3e8||_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1ae)]>0x12c)&&(_0x2e0b83[_0x9210d5(0x208)][_0x9210d5(0x1b6)]=!0x0);}}catch{}}}return _0x23c2be;}((_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x57888b,_0x4d288a,_0x2fe894,_0x3cfa6a,_0x26d1d4)=>{var _0x1998d3=_0x1f7fe1;if(_0x4b00d8[_0x1998d3(0x232)])return _0x4b00d8['_console_ninja'];if(!J(_0x4b00d8,_0x2fe894,_0x213295))return _0x4b00d8['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4b00d8[_0x1998d3(0x232)];let _0x1ec8c8=W(_0x4b00d8),_0x1a3c7f=_0x1ec8c8['elapsed'],_0x41cf6a=_0x1ec8c8[_0x1998d3(0x23d)],_0x247060=_0x1ec8c8[_0x1998d3(0x251)],_0x1d3c45={'hits':{},'ts':{}},_0x5683be=Y(_0x4b00d8,_0x3cfa6a,_0x1d3c45,_0x57888b),_0x3e248f=_0x10392f=>{_0x1d3c45['ts'][_0x10392f]=_0x41cf6a();},_0x2ebbe7=(_0x1a02c8,_0x4327c1)=>{var _0x1595a3=_0x1998d3;let _0x48011b=_0x1d3c45['ts'][_0x4327c1];if(delete _0x1d3c45['ts'][_0x4327c1],_0x48011b){let _0x441fec=_0x1a3c7f(_0x48011b,_0x41cf6a());_0x341adf(_0x5683be(_0x1595a3(0x1ae),_0x1a02c8,_0x247060(),_0x3e00fc,[_0x441fec],_0x4327c1));}},_0x665301=_0x409553=>_0x2a8d96=>{var _0x35b2aa=_0x1998d3;try{_0x3e248f(_0x2a8d96),_0x409553(_0x2a8d96);}finally{_0x4b00d8['console'][_0x35b2aa(0x1ae)]=_0x409553;}},_0x146215=_0x5aa591=>_0x44b8c0=>{var _0xc5b6e3=_0x1998d3;try{let [_0x4eb1b6,_0x154adc]=_0x44b8c0[_0xc5b6e3(0x1f6)](_0xc5b6e3(0x259));_0x2ebbe7(_0x154adc,_0x4eb1b6),_0x5aa591(_0x4eb1b6);}finally{_0x4b00d8[_0xc5b6e3(0x256)]['timeEnd']=_0x5aa591;}};_0x4b00d8[_0x1998d3(0x232)]={'consoleLog':(_0x2393f8,_0x51be62)=>{var _0x51151b=_0x1998d3;_0x4b00d8[_0x51151b(0x256)][_0x51151b(0x1cd)][_0x51151b(0x206)]!=='disabledLog'&&_0x341adf(_0x5683be(_0x51151b(0x1cd),_0x2393f8,_0x247060(),_0x3e00fc,_0x51be62));},'consoleTrace':(_0x119369,_0x442031)=>{var _0x594c80=_0x1998d3;_0x4b00d8[_0x594c80(0x256)][_0x594c80(0x1cd)]['name']!=='disabledTrace'&&_0x341adf(_0x5683be(_0x594c80(0x1ab),_0x119369,_0x247060(),_0x3e00fc,_0x442031));},'consoleTime':()=>{var _0x32edf0=_0x1998d3;_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]=_0x665301(_0x4b00d8[_0x32edf0(0x256)][_0x32edf0(0x1ae)]);},'consoleTimeEnd':()=>{var _0xceb7a9=_0x1998d3;_0x4b00d8[_0xceb7a9(0x256)][_0xceb7a9(0x1a2)]=_0x146215(_0x4b00d8['console']['timeEnd']);},'autoLog':(_0x561021,_0x3343a6)=>{var _0x99253f=_0x1998d3;_0x341adf(_0x5683be(_0x99253f(0x1cd),_0x3343a6,_0x247060(),_0x3e00fc,[_0x561021]));},'autoLogMany':(_0x14df62,_0x1aca85)=>{var _0x4e9934=_0x1998d3;_0x341adf(_0x5683be(_0x4e9934(0x1cd),_0x14df62,_0x247060(),_0x3e00fc,_0x1aca85));},'autoTrace':(_0x19f33b,_0x49cf5c)=>{var _0x38aba5=_0x1998d3;_0x341adf(_0x5683be(_0x38aba5(0x1ab),_0x49cf5c,_0x247060(),_0x3e00fc,[_0x19f33b]));},'autoTraceMany':(_0xcd9962,_0x3adbc0)=>{var _0x40a7aa=_0x1998d3;_0x341adf(_0x5683be(_0x40a7aa(0x1ab),_0xcd9962,_0x247060(),_0x3e00fc,_0x3adbc0));},'autoTime':(_0x1e1fd7,_0x2e5429,_0x2ccb02)=>{_0x3e248f(_0x2ccb02);},'autoTimeEnd':(_0x2e38e6,_0x141bf8,_0xdc33b2)=>{_0x2ebbe7(_0x141bf8,_0xdc33b2);},'coverage':_0x298f37=>{var _0x2380b2=_0x1998d3;_0x341adf({'method':_0x2380b2(0x1de),'version':_0x57888b,'args':[{'id':_0x298f37}]});}};let _0x341adf=b(_0x4b00d8,_0x5578f1,_0x3ed2a7,_0x30eaab,_0x213295,_0x26d1d4),_0x3e00fc=_0x4b00d8[_0x1998d3(0x26e)];return _0x4b00d8[_0x1998d3(0x232)];})(globalThis,_0x1f7fe1(0x213),_0x1f7fe1(0x20c),_0x1f7fe1(0x1d7),_0x1f7fe1(0x209),'1.0.0',_0x1f7fe1(0x18e),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"dkm-desktop\",\"192.168.1.101\"],_0x1f7fe1(0x1af),_0x1f7fe1(0x1b1));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLGlCQUFpQixhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLHdCQUF3QixtQ0FBbUMsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLGFBQWEsWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLGNBQWMsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFtQjtBQUNyQjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQWE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsaUJBQWlCLElBQUksd0lBQXdJLHNCQUFzQiwrQkFBK0IsNENBQTRDLFlBQVksSUFBSSxxWkFBcVosK0JBQStCLDhDQUE4QyxpQkFBaUIsMkNBQTJDLG1CQUFtQixtQkFBbUIsME5BQTBOLDBUQUEwVCxzcEdBQXNwRyxtQkFBbUIsbUJBQW1CLGtCQUFrQixzQ0FBc0Msd0JBQXdCLDZDQUE2QywwQkFBMEIsbUNBQW1DLGtCQUFrQiwrQkFBK0IsME9BQTBPLHdCQUF3QixzRkFBc0YsNkhBQTZILDZHQUE2RyxHQUFHLGtCQUFrQixrRkFBa0YsK0VBQStFLG9DQUFvQyxnQ0FBZ0MsK0RBQStELHdCQUF3Qiw4dEJBQTh0QiwwQkFBMEIsd0JBQXdCLHlEQUF5RCxjQUFjLDBGQUEwRixLQUFLLGdIQUFnSCxTQUFTLDZDQUE2QyxrTEFBa0wsTUFBTSxJQUFJLDZGQUE2RixNQUFNLHFDQUFxQyxtREFBbUQscUJBQXFCLHdCQUF3QixzUEFBc1Asd0JBQXdCLHVEQUF1RCx3QkFBd0IsK0lBQStJLGlDQUFpQyx3QkFBd0Isa0pBQWtKLGtDQUFrQyx3QkFBd0IsNkpBQTZKLDJCQUEyQix3QkFBd0Isd0ZBQXdGLHlDQUF5Qyx3QkFBd0IsSUFBSSxzTUFBc00sVUFBVSxnYUFBZ2EsSUFBSSxpQ0FBaUMsd0JBQXdCLHdEQUF3RCxJQUFJLG9HQUFvRyxPQUFPLElBQUksZ0VBQWdFLFFBQVEsaUNBQWlDLHdCQUF3QixnSUFBZ0ksd0JBQXdCLDBJQUEwSSxrR0FBa0csbUNBQW1DLHdCQUF3QixJQUFJLGtDQUFrQyxpSUFBaUksaUJBQWlCLHlLQUF5Syx3RUFBd0Usd0JBQXdCLG9FQUFvRSx3QkFBd0IsSUFBSSwwV0FBMFcsa0NBQWtDLEVBQUUsdUVBQXVFLGlFQUFpRSxpQkFBaUIseUZBQXlGLEVBQUUsZ0ZBQWdGLHNCQUFzQix3QkFBd0IsNENBQTRDLDRCQUE0QixXQUFXLG9EQUFvRCx1QkFBdUIsdURBQXVELEtBQUssMkxBQTJMLHdCQUF3Qix3REFBd0QseUNBQXlDLHVGQUF1RixTQUFTLEtBQUssc0JBQXNCLDJCQUEyQixxQkFBcUIsNkJBQTZCLE1BQU0scUJBQXFCLHNCQUFzQixPQUFPLCtFQUErRSwwQ0FBMEMsd0JBQXdCLDBGQUEwRix3S0FBd0ssNlFBQTZRLG9EQUFvRCx3QkFBd0IsZ0ZBQWdGLGtHQUFrRyxnQkFBZ0IsY0FBYyx3QkFBd0IsdzFCQUF3MUIsNERBQTRELDZFQUE2RSxrREFBa0Qsd0JBQXdCLDZQQUE2UCxJQUFJLG9IQUFvSCwrVkFBK1YsNERBQTRELEVBQUUsYUFBYSxnQ0FBZ0MsY0FBYywwRUFBMEUsNEVBQTRFLG9CQUFvQiw0R0FBNEcsa0NBQWtDLEtBQUssMERBQTBELG9CQUFvQix5SEFBeUgsMERBQTBELG1LQUFtSyx1RUFBdUUsb0dBQW9HLHdCQUF3QiwyRUFBMkUsZUFBZSxRQUFRLG1IQUFtSCxlQUFlLFFBQVEsdUlBQXVJLGtCQUFrQixvQkFBb0IsZUFBZSxnR0FBZ0csd0JBQXdCLGtFQUFrRSxlQUFlLFFBQVEsNEhBQTRILGVBQWUsUUFBUSw0Q0FBNEMsME9BQTBPLGtCQUFrQixvQkFBb0IsZUFBZSxjQUFjLElBQUksa0lBQWtJLGtFQUFrRSxlQUFlLE9BQU8sNEhBQTRILGVBQWUsT0FBTyw0SEFBNEgsT0FBTyx1RkFBdUYseUhBQXlILHNEQUFzRCxvQkFBb0IsME9BQTBPLDJFQUEyRSxlQUFlLE9BQU8sNEhBQTRILGVBQWUsT0FBTywySEFBMkgsODhCQUE4OEIsd0RBQXdELG9CQUFvQiw2Q0FBNkMsOERBQThELGlCQUFpQiwwQ0FBMEMseVRBQXlULDhCQUE4Qix3QkFBd0IsK0VBQStFLDhCQUE4Qix3QkFBd0Isd0lBQXdJLGtEQUFrRCx3QkFBd0IsdUZBQXVGLHFCQUFxQixxQ0FBcUMsOGpCQUE4akIsOEJBQThCLHdCQUF3QixnRkFBZ0YsOEJBQThCLHdCQUF3QixrRkFBa0YsOEJBQThCLHdCQUF3QiwwRkFBMEYsZ0ZBQWdGLG1CQUFtQiwyQkFBMkIsc0xBQXNMLGtXQUFrVyw4RkFBOEYsdUNBQXVDLDBGQUEwRixzTEFBc0wsbVRBQW1ULHNFQUFzRSx1Q0FBdUMsbURBQW1ELDRCQUE0QixFQUFFLHFGQUFxRiw2RUFBNkUsSUFBSSxvRUFBb0UsMEdBQTBHLHFFQUFxRSx5SEFBeUgsNERBQTRELHlFQUF5RSx1R0FBdUcsMERBQTBELHFQQUFxUCxjQUFjLElBQUksMENBQTBDLGlCQUFpQixrQkFBa0IsNkVBQTZFLHdEQUF3RCw0RkFBNEYsbUhBQW1ILHdCQUF3QixrSUFBa0ksR0FBRyxFQUFFLEtBQUssb1BBQW9QLHNIQUFzSCwrR0FBK0csd0JBQXdCLG1JQUFtSSxHQUFHLGtCQUFrQixRQUFRLG9IQUFvSCwwREFBMEQsaUZBQWlGLHNGQUFzRiw0REFBNEQsNFJBQTRSLDhCQUE4Qix3QkFBd0IscUlBQXFJLDZCQUE2Qix3QkFBd0IsMERBQTBELGNBQWMsSUFBSSwyQ0FBMkMsTUFBTSw2REFBNkQsa1FBQWtRLDREQUE0RCx3QkFBd0IsK0tBQStLLDREQUE0RCx3QkFBd0Isc0xBQXNMLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLDhCQUE4Qix3QkFBd0IsMkNBQTJDLHdDQUF3Qyx3QkFBd0IsMlFBQTJRLDZDQUE2Qyx3QkFBd0IsY0FBYyxJQUFJLGdKQUFnSixzSEFBc0gsT0FBTyxRQUFRLHNFQUFzRSwyRkFBMkYsMEdBQTBHLGdDQUFnQyx5RkFBeUYsTUFBTSxrR0FBa0csTUFBTSxpR0FBaUcsUUFBUSwrUEFBK1AsK0JBQStCLG9EQUFvRCwwQkFBMEIsd0JBQXdCLHdSQUF3Uix5SUFBeUksNkRBQTZELEdBQUcsd0NBQXdDLHdCQUF3QixnR0FBZ0csd0dBQXdHLG9CQUFvQixhQUFhLDRDQUE0Qyw4SEFBOEgsOERBQThELHNDQUFzQyxlQUFlLHdDQUF3QyxtUEFBbVAseUNBQXlDLCtCQUErQiw4QkFBOEIsd0JBQXdCLHlJQUF5SSx5Q0FBeUMsOEJBQThCLHdCQUF3Qiw0R0FBNEcsMENBQTBDLHlDQUF5QyxrSUFBa0ksWUFBWSx5SEFBeUgsZ0ZBQWdGLHdCQUF3Qix3QkFBd0IsSUFBSSxtTkFBbU4sc0NBQXNDLCtCQUErQiwyTkFBMk4sRUFBRSw4SUFBOEksd0JBQXdCLGlCQUFpQiw2dUJBQTZ1QixpREFBaUQsYUFBYSxzQkFBc0Isc0NBQXNDLDJEQUEyRCx3Q0FBd0MsNkNBQTZDLEdBQUcsaUNBQWlDLHNDQUFzQyxJQUFJLDBGQUEwRixpQkFBaUIscURBQXFELG9CQUFvQixJQUFJLFFBQVEsb0NBQW9DLE9BQU8sdURBQXVELHVGQUF1RixJQUFJLGlCQUFpQixPQUFPLDRDQUE0Qyw0Q0FBNEMsdUVBQXVFLHFDQUFxQyxJQUFJLFFBQVEsSUFBSSx5QkFBeUIsMEJBQTBCLCtlQUErZSxTQUFTLGtCQUFrQix5R0FBeUcsd0JBQXdCLGtFQUFrRSx5RUFBeUUsbUJBQW1CLHNCQUFzQixxQkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsaUpBQWlKLFNBQVMsU0FBUyw0RUFBNEUsd0NBQXdDLG1DQUFtQyx3QkFBd0IseUNBQXlDLGdEQUFnRCwrQ0FBK0MsK0ZBQStGLGtDQUFrQyx3QkFBd0IsSUFBSSwyQ0FBMkMsUUFBUSxtREFBbUQsa0NBQWtDLHdCQUF3QixJQUFJLHdFQUF3RSxxREFBcUQsUUFBUSxvREFBb0QsNkJBQTZCLHFDQUFxQyx3QkFBd0IsbUtBQW1LLHdDQUF3Qyx3QkFBd0IsMkpBQTJKLG9CQUFvQix3QkFBd0Isd0dBQXdHLHVCQUF1Qix3QkFBd0IsMEZBQTBGLG1DQUFtQyx3QkFBd0Isb0ZBQW9GLHVDQUF1Qyx3QkFBd0Isa0ZBQWtGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxzQkFBc0IsaURBQWlELGdDQUFnQyx3QkFBd0Isd0JBQXdCLFdBQVcsdURBQXVELGVBQWUsRUFBRSxLQUFLLG1IQUFtSCxvQ0FBb0Msb09BQW9PLElBQUksWUFBWSxpREFBaUQsSUFBSSwwQkFBMEIsV0FBVyxVQUFVLGlEQUFpRCxJQUFJLDRCQUE0QixXQUFXLFVBQVUsMkNBQTJDLElBQUksdUJBQXVCLFlBQVksMkNBQTJDLElBQUksMEJBQTBCLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDL054MnFDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3QztBQUNrQjtBQUNyQztBQUNhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVc7QUFDYjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRSxvREFBVztBQUNiO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFXO0FBQ2pDO0FBQ0E7QUFDQSxtQkFBbUIsdURBQWE7QUFDaEM7QUFDQTtBQUNBLEdBQUcsNkNBQUk7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx1REFBYztBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5REFBVztBQUN0QixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUdvRSxpQkFBaUIsSUFBSSx3SUFBd0ksc0JBQXNCLCtCQUErQiw0Q0FBNEMsWUFBWSxJQUFJLHFaQUFxWiwrQkFBK0IsOENBQThDLGlCQUFpQiwyQ0FBMkMsbUJBQW1CLG1CQUFtQiwwTkFBME4sMFRBQTBULHNwR0FBc3BHLG1CQUFtQixtQkFBbUIsa0JBQWtCLHNDQUFzQyx3QkFBd0IsNkNBQTZDLDBCQUEwQixtQ0FBbUMsa0JBQWtCLCtCQUErQiwwT0FBME8sd0JBQXdCLHNGQUFzRiw2SEFBNkgsNkdBQTZHLEdBQUcsa0JBQWtCLGtGQUFrRiwrRUFBK0Usb0NBQW9DLGdDQUFnQywrREFBK0Qsd0JBQXdCLDh0QkFBOHRCLDBCQUEwQix3QkFBd0IseURBQXlELGNBQWMsMEZBQTBGLEtBQUssZ0hBQWdILFNBQVMsNkNBQTZDLGtMQUFrTCxNQUFNLElBQUksNkZBQTZGLE1BQU0scUNBQXFDLG1EQUFtRCxxQkFBcUIsd0JBQXdCLHNQQUFzUCx3QkFBd0IsdURBQXVELHdCQUF3QiwrSUFBK0ksaUNBQWlDLHdCQUF3QixrSkFBa0osa0NBQWtDLHdCQUF3Qiw2SkFBNkosMkJBQTJCLHdCQUF3Qix3RkFBd0YseUNBQXlDLHdCQUF3QixJQUFJLHNNQUFzTSxVQUFVLGdhQUFnYSxJQUFJLGlDQUFpQyx3QkFBd0Isd0RBQXdELElBQUksb0dBQW9HLE9BQU8sSUFBSSxnRUFBZ0UsUUFBUSxpQ0FBaUMsd0JBQXdCLGdJQUFnSSx3QkFBd0IsMElBQTBJLGtHQUFrRyxtQ0FBbUMsd0JBQXdCLElBQUksa0NBQWtDLGlJQUFpSSxpQkFBaUIseUtBQXlLLHdFQUF3RSx3QkFBd0Isb0VBQW9FLHdCQUF3QixJQUFJLDBXQUEwVyxrQ0FBa0MsRUFBRSx1RUFBdUUsaUVBQWlFLGlCQUFpQix5RkFBeUYsRUFBRSxnRkFBZ0Ysc0JBQXNCLHdCQUF3Qiw0Q0FBNEMsNEJBQTRCLFdBQVcsb0RBQW9ELHVCQUF1Qix1REFBdUQsS0FBSywyTEFBMkwsd0JBQXdCLHdEQUF3RCx5Q0FBeUMsdUZBQXVGLFNBQVMsS0FBSyxzQkFBc0IsMkJBQTJCLHFCQUFxQiw2QkFBNkIsTUFBTSxxQkFBcUIsc0JBQXNCLE9BQU8sK0VBQStFLDBDQUEwQyx3QkFBd0IsMEZBQTBGLHdLQUF3Syw2UUFBNlEsb0RBQW9ELHdCQUF3QixnRkFBZ0Ysa0dBQWtHLGdCQUFnQixjQUFjLHdCQUF3Qix3MUJBQXcxQiw0REFBNEQsNkVBQTZFLGtEQUFrRCx3QkFBd0IsNlBBQTZQLElBQUksb0hBQW9ILCtWQUErViw0REFBNEQsRUFBRSxhQUFhLGdDQUFnQyxjQUFjLDBFQUEwRSw0RUFBNEUsb0JBQW9CLDRHQUE0RyxrQ0FBa0MsS0FBSywwREFBMEQsb0JBQW9CLHlIQUF5SCwwREFBMEQsbUtBQW1LLHVFQUF1RSxvR0FBb0csd0JBQXdCLDJFQUEyRSxlQUFlLFFBQVEsbUhBQW1ILGVBQWUsUUFBUSx1SUFBdUksa0JBQWtCLG9CQUFvQixlQUFlLGdHQUFnRyx3QkFBd0Isa0VBQWtFLGVBQWUsUUFBUSw0SEFBNEgsZUFBZSxRQUFRLDRDQUE0QywwT0FBME8sa0JBQWtCLG9CQUFvQixlQUFlLGNBQWMsSUFBSSxrSUFBa0ksa0VBQWtFLGVBQWUsT0FBTyw0SEFBNEgsZUFBZSxPQUFPLDRIQUE0SCxPQUFPLHVGQUF1Rix5SEFBeUgsc0RBQXNELG9CQUFvQiwwT0FBME8sMkVBQTJFLGVBQWUsT0FBTyw0SEFBNEgsZUFBZSxPQUFPLDJIQUEySCw4OEJBQTg4Qix3REFBd0Qsb0JBQW9CLDZDQUE2Qyw4REFBOEQsaUJBQWlCLDBDQUEwQyx5VEFBeVQsOEJBQThCLHdCQUF3QiwrRUFBK0UsOEJBQThCLHdCQUF3Qix3SUFBd0ksa0RBQWtELHdCQUF3Qix1RkFBdUYscUJBQXFCLHFDQUFxQyw4akJBQThqQiw4QkFBOEIsd0JBQXdCLGdGQUFnRiw4QkFBOEIsd0JBQXdCLGtGQUFrRiw4QkFBOEIsd0JBQXdCLDBGQUEwRixnRkFBZ0YsbUJBQW1CLDJCQUEyQixzTEFBc0wsa1dBQWtXLDhGQUE4Rix1Q0FBdUMsMEZBQTBGLHNMQUFzTCxtVEFBbVQsc0VBQXNFLHVDQUF1QyxtREFBbUQsNEJBQTRCLEVBQUUscUZBQXFGLDZFQUE2RSxJQUFJLG9FQUFvRSwwR0FBMEcscUVBQXFFLHlIQUF5SCw0REFBNEQseUVBQXlFLHVHQUF1RywwREFBMEQscVBBQXFQLGNBQWMsSUFBSSwwQ0FBMEMsaUJBQWlCLGtCQUFrQiw2RUFBNkUsd0RBQXdELDRGQUE0RixtSEFBbUgsd0JBQXdCLGtJQUFrSSxHQUFHLEVBQUUsS0FBSyxvUEFBb1Asc0hBQXNILCtHQUErRyx3QkFBd0IsbUlBQW1JLEdBQUcsa0JBQWtCLFFBQVEsb0hBQW9ILDBEQUEwRCxpRkFBaUYsc0ZBQXNGLDREQUE0RCw0UkFBNFIsOEJBQThCLHdCQUF3QixxSUFBcUksNkJBQTZCLHdCQUF3QiwwREFBMEQsY0FBYyxJQUFJLDJDQUEyQyxNQUFNLDZEQUE2RCxrUUFBa1EsNERBQTRELHdCQUF3QiwrS0FBK0ssNERBQTRELHdCQUF3QixzTEFBc0wseUNBQXlDLHlDQUF5Qyx5Q0FBeUMsOEJBQThCLHdCQUF3QiwyQ0FBMkMsd0NBQXdDLHdCQUF3QiwyUUFBMlEsNkNBQTZDLHdCQUF3QixjQUFjLElBQUksZ0pBQWdKLHNIQUFzSCxPQUFPLFFBQVEsc0VBQXNFLDJGQUEyRiwwR0FBMEcsZ0NBQWdDLHlGQUF5RixNQUFNLGtHQUFrRyxNQUFNLGlHQUFpRyxRQUFRLCtQQUErUCwrQkFBK0Isb0RBQW9ELDBCQUEwQix3QkFBd0Isd1JBQXdSLHlJQUF5SSw2REFBNkQsR0FBRyx3Q0FBd0Msd0JBQXdCLGdHQUFnRyx3R0FBd0csb0JBQW9CLGFBQWEsNENBQTRDLDhIQUE4SCw4REFBOEQsc0NBQXNDLGVBQWUsd0NBQXdDLG1QQUFtUCx5Q0FBeUMsK0JBQStCLDhCQUE4Qix3QkFBd0IseUlBQXlJLHlDQUF5Qyw4QkFBOEIsd0JBQXdCLDRHQUE0RywwQ0FBMEMseUNBQXlDLGtJQUFrSSxZQUFZLHlIQUF5SCxnRkFBZ0Ysd0JBQXdCLHdCQUF3QixJQUFJLG1OQUFtTixzQ0FBc0MsK0JBQStCLDJOQUEyTixFQUFFLDhJQUE4SSx3QkFBd0IsaUJBQWlCLDZ1QkFBNnVCLGlEQUFpRCxhQUFhLHNCQUFzQixzQ0FBc0MsMkRBQTJELHdDQUF3Qyw2Q0FBNkMsR0FBRyxpQ0FBaUMsc0NBQXNDLElBQUksMEZBQTBGLGlCQUFpQixxREFBcUQsb0JBQW9CLElBQUksUUFBUSxvQ0FBb0MsT0FBTyx1REFBdUQsdUZBQXVGLElBQUksaUJBQWlCLE9BQU8sNENBQTRDLDRDQUE0Qyx1RUFBdUUscUNBQXFDLElBQUksUUFBUSxJQUFJLHlCQUF5QiwwQkFBMEIsK2VBQStlLFNBQVMsa0JBQWtCLHlHQUF5Ryx3QkFBd0Isa0VBQWtFLHlFQUF5RSxtQkFBbUIsc0JBQXNCLHFCQUFxQix3QkFBd0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsa0JBQWtCLG1CQUFtQixrQkFBa0Isc0JBQXNCLDZCQUE2QixpSkFBaUosU0FBUyxTQUFTLDRFQUE0RSx3Q0FBd0MsbUNBQW1DLHdCQUF3Qix5Q0FBeUMsZ0RBQWdELCtDQUErQywrRkFBK0Ysa0NBQWtDLHdCQUF3QixJQUFJLDJDQUEyQyxRQUFRLG1EQUFtRCxrQ0FBa0Msd0JBQXdCLElBQUksd0VBQXdFLHFEQUFxRCxRQUFRLG9EQUFvRCw2QkFBNkIscUNBQXFDLHdCQUF3QixtS0FBbUssd0NBQXdDLHdCQUF3QiwySkFBMkosb0JBQW9CLHdCQUF3Qix3R0FBd0csdUJBQXVCLHdCQUF3QiwwRkFBMEYsbUNBQW1DLHdCQUF3QixvRkFBb0YsdUNBQXVDLHdCQUF3QixrRkFBa0YscUNBQXFDLHdCQUF3QixvRkFBb0YseUNBQXlDLHdCQUF3QixrRkFBa0YsOENBQThDLHNCQUFzQixpREFBaUQsZ0NBQWdDLHdCQUF3Qix3QkFBd0IsV0FBVyx1REFBdUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQyxvT0FBb08sSUFBSSxZQUFZLGlEQUFpRCxJQUFJLDBCQUEwQixXQUFXLFVBQVUsaURBQWlELElBQUksNEJBQTRCLFdBQVcsVUFBVSwyQ0FBMkMsSUFBSSx1QkFBdUIsWUFBWSwyQ0FBMkMsSUFBSSwwQkFBMEIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SXQxcUM7QUFDQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixRQUFRO0FBQzVGLHlGQUF5RixhQUFhO0FBQ3RHLDhFQUE4RSxXQUFXO0FBQ3pGLG9GQUFvRixVQUFVO0FBQzlGLGlGQUFpRixhQUFhO0FBQzlGLGlGQUFpRixjQUFjO0FBQy9GLDhFQUE4RSxXQUFXO0FBQ3pGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGdEQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBVztBQUNaO0FBQ0E7QUFFb0UsaUJBQWlCLElBQUksd0lBQXdJLHNCQUFzQiwrQkFBK0IsNENBQTRDLFlBQVksSUFBSSxxWkFBcVosK0JBQStCLDhDQUE4QyxpQkFBaUIsMkNBQTJDLG1CQUFtQixtQkFBbUIsME5BQTBOLDBUQUEwVCxzcEdBQXNwRyxtQkFBbUIsbUJBQW1CLGtCQUFrQixzQ0FBc0Msd0JBQXdCLDZDQUE2QywwQkFBMEIsbUNBQW1DLGtCQUFrQiwrQkFBK0IsME9BQTBPLHdCQUF3QixzRkFBc0YsNkhBQTZILDZHQUE2RyxHQUFHLGtCQUFrQixrRkFBa0YsK0VBQStFLG9DQUFvQyxnQ0FBZ0MsK0RBQStELHdCQUF3Qiw4dEJBQTh0QiwwQkFBMEIsd0JBQXdCLHlEQUF5RCxjQUFjLDBGQUEwRixLQUFLLGdIQUFnSCxTQUFTLDZDQUE2QyxrTEFBa0wsTUFBTSxJQUFJLDZGQUE2RixNQUFNLHFDQUFxQyxtREFBbUQscUJBQXFCLHdCQUF3QixzUEFBc1Asd0JBQXdCLHVEQUF1RCx3QkFBd0IsK0lBQStJLGlDQUFpQyx3QkFBd0Isa0pBQWtKLGtDQUFrQyx3QkFBd0IsNkpBQTZKLDJCQUEyQix3QkFBd0Isd0ZBQXdGLHlDQUF5Qyx3QkFBd0IsSUFBSSxzTUFBc00sVUFBVSxnYUFBZ2EsSUFBSSxpQ0FBaUMsd0JBQXdCLHdEQUF3RCxJQUFJLG9HQUFvRyxPQUFPLElBQUksZ0VBQWdFLFFBQVEsaUNBQWlDLHdCQUF3QixnSUFBZ0ksd0JBQXdCLDBJQUEwSSxrR0FBa0csbUNBQW1DLHdCQUF3QixJQUFJLGtDQUFrQyxpSUFBaUksaUJBQWlCLHlLQUF5Syx3RUFBd0Usd0JBQXdCLG9FQUFvRSx3QkFBd0IsSUFBSSwwV0FBMFcsa0NBQWtDLEVBQUUsdUVBQXVFLGlFQUFpRSxpQkFBaUIseUZBQXlGLEVBQUUsZ0ZBQWdGLHNCQUFzQix3QkFBd0IsNENBQTRDLDRCQUE0QixXQUFXLG9EQUFvRCx1QkFBdUIsdURBQXVELEtBQUssMkxBQTJMLHdCQUF3Qix3REFBd0QseUNBQXlDLHVGQUF1RixTQUFTLEtBQUssc0JBQXNCLDJCQUEyQixxQkFBcUIsNkJBQTZCLE1BQU0scUJBQXFCLHNCQUFzQixPQUFPLCtFQUErRSwwQ0FBMEMsd0JBQXdCLDBGQUEwRix3S0FBd0ssNlFBQTZRLG9EQUFvRCx3QkFBd0IsZ0ZBQWdGLGtHQUFrRyxnQkFBZ0IsY0FBYyx3QkFBd0IsdzFCQUF3MUIsNERBQTRELDZFQUE2RSxrREFBa0Qsd0JBQXdCLDZQQUE2UCxJQUFJLG9IQUFvSCwrVkFBK1YsNERBQTRELEVBQUUsYUFBYSxnQ0FBZ0MsY0FBYywwRUFBMEUsNEVBQTRFLG9CQUFvQiw0R0FBNEcsa0NBQWtDLEtBQUssMERBQTBELG9CQUFvQix5SEFBeUgsMERBQTBELG1LQUFtSyx1RUFBdUUsb0dBQW9HLHdCQUF3QiwyRUFBMkUsZUFBZSxRQUFRLG1IQUFtSCxlQUFlLFFBQVEsdUlBQXVJLGtCQUFrQixvQkFBb0IsZUFBZSxnR0FBZ0csd0JBQXdCLGtFQUFrRSxlQUFlLFFBQVEsNEhBQTRILGVBQWUsUUFBUSw0Q0FBNEMsME9BQTBPLGtCQUFrQixvQkFBb0IsZUFBZSxjQUFjLElBQUksa0lBQWtJLGtFQUFrRSxlQUFlLE9BQU8sNEhBQTRILGVBQWUsT0FBTyw0SEFBNEgsT0FBTyx1RkFBdUYseUhBQXlILHNEQUFzRCxvQkFBb0IsME9BQTBPLDJFQUEyRSxlQUFlLE9BQU8sNEhBQTRILGVBQWUsT0FBTywySEFBMkgsODhCQUE4OEIsd0RBQXdELG9CQUFvQiw2Q0FBNkMsOERBQThELGlCQUFpQiwwQ0FBMEMseVRBQXlULDhCQUE4Qix3QkFBd0IsK0VBQStFLDhCQUE4Qix3QkFBd0Isd0lBQXdJLGtEQUFrRCx3QkFBd0IsdUZBQXVGLHFCQUFxQixxQ0FBcUMsOGpCQUE4akIsOEJBQThCLHdCQUF3QixnRkFBZ0YsOEJBQThCLHdCQUF3QixrRkFBa0YsOEJBQThCLHdCQUF3QiwwRkFBMEYsZ0ZBQWdGLG1CQUFtQiwyQkFBMkIsc0xBQXNMLGtXQUFrVyw4RkFBOEYsdUNBQXVDLDBGQUEwRixzTEFBc0wsbVRBQW1ULHNFQUFzRSx1Q0FBdUMsbURBQW1ELDRCQUE0QixFQUFFLHFGQUFxRiw2RUFBNkUsSUFBSSxvRUFBb0UsMEdBQTBHLHFFQUFxRSx5SEFBeUgsNERBQTRELHlFQUF5RSx1R0FBdUcsMERBQTBELHFQQUFxUCxjQUFjLElBQUksMENBQTBDLGlCQUFpQixrQkFBa0IsNkVBQTZFLHdEQUF3RCw0RkFBNEYsbUhBQW1ILHdCQUF3QixrSUFBa0ksR0FBRyxFQUFFLEtBQUssb1BBQW9QLHNIQUFzSCwrR0FBK0csd0JBQXdCLG1JQUFtSSxHQUFHLGtCQUFrQixRQUFRLG9IQUFvSCwwREFBMEQsaUZBQWlGLHNGQUFzRiw0REFBNEQsNFJBQTRSLDhCQUE4Qix3QkFBd0IscUlBQXFJLDZCQUE2Qix3QkFBd0IsMERBQTBELGNBQWMsSUFBSSwyQ0FBMkMsTUFBTSw2REFBNkQsa1FBQWtRLDREQUE0RCx3QkFBd0IsK0tBQStLLDREQUE0RCx3QkFBd0Isc0xBQXNMLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLDhCQUE4Qix3QkFBd0IsMkNBQTJDLHdDQUF3Qyx3QkFBd0IsMlFBQTJRLDZDQUE2Qyx3QkFBd0IsY0FBYyxJQUFJLGdKQUFnSixzSEFBc0gsT0FBTyxRQUFRLHNFQUFzRSwyRkFBMkYsMEdBQTBHLGdDQUFnQyx5RkFBeUYsTUFBTSxrR0FBa0csTUFBTSxpR0FBaUcsUUFBUSwrUEFBK1AsK0JBQStCLG9EQUFvRCwwQkFBMEIsd0JBQXdCLHdSQUF3Uix5SUFBeUksNkRBQTZELEdBQUcsd0NBQXdDLHdCQUF3QixnR0FBZ0csd0dBQXdHLG9CQUFvQixhQUFhLDRDQUE0Qyw4SEFBOEgsOERBQThELHNDQUFzQyxlQUFlLHdDQUF3QyxtUEFBbVAseUNBQXlDLCtCQUErQiw4QkFBOEIsd0JBQXdCLHlJQUF5SSx5Q0FBeUMsOEJBQThCLHdCQUF3Qiw0R0FBNEcsMENBQTBDLHlDQUF5QyxrSUFBa0ksWUFBWSx5SEFBeUgsZ0ZBQWdGLHdCQUF3Qix3QkFBd0IsSUFBSSxtTkFBbU4sc0NBQXNDLCtCQUErQiwyTkFBMk4sRUFBRSw4SUFBOEksd0JBQXdCLGlCQUFpQiw2dUJBQTZ1QixpREFBaUQsYUFBYSxzQkFBc0Isc0NBQXNDLDJEQUEyRCx3Q0FBd0MsNkNBQTZDLEdBQUcsaUNBQWlDLHNDQUFzQyxJQUFJLDBGQUEwRixpQkFBaUIscURBQXFELG9CQUFvQixJQUFJLFFBQVEsb0NBQW9DLE9BQU8sdURBQXVELHVGQUF1RixJQUFJLGlCQUFpQixPQUFPLDRDQUE0Qyw0Q0FBNEMsdUVBQXVFLHFDQUFxQyxJQUFJLFFBQVEsSUFBSSx5QkFBeUIsMEJBQTBCLCtlQUErZSxTQUFTLGtCQUFrQix5R0FBeUcsd0JBQXdCLGtFQUFrRSx5RUFBeUUsbUJBQW1CLHNCQUFzQixxQkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsaUpBQWlKLFNBQVMsU0FBUyw0RUFBNEUsd0NBQXdDLG1DQUFtQyx3QkFBd0IseUNBQXlDLGdEQUFnRCwrQ0FBK0MsK0ZBQStGLGtDQUFrQyx3QkFBd0IsSUFBSSwyQ0FBMkMsUUFBUSxtREFBbUQsa0NBQWtDLHdCQUF3QixJQUFJLHdFQUF3RSxxREFBcUQsUUFBUSxvREFBb0QsNkJBQTZCLHFDQUFxQyx3QkFBd0IsbUtBQW1LLHdDQUF3Qyx3QkFBd0IsMkpBQTJKLG9CQUFvQix3QkFBd0Isd0dBQXdHLHVCQUF1Qix3QkFBd0IsMEZBQTBGLG1DQUFtQyx3QkFBd0Isb0ZBQW9GLHVDQUF1Qyx3QkFBd0Isa0ZBQWtGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxzQkFBc0IsaURBQWlELGdDQUFnQyx3QkFBd0Isd0JBQXdCLFdBQVcsdURBQXVELGVBQWUsRUFBRSxLQUFLLG1IQUFtSCxvQ0FBb0Msb09BQW9PLElBQUksWUFBWSxpREFBaUQsSUFBSSwwQkFBMEIsV0FBVyxVQUFVLGlEQUFpRCxJQUFJLDRCQUE0QixXQUFXLFVBQVUsMkNBQTJDLElBQUksdUJBQXVCLFlBQVksMkNBQTJDLElBQUksMEJBQTBCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJaDNxQztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JzRDtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ0s7QUFDRDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVc7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDs7QUFFQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFjOztBQUV0QztBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQ0FBc0M7QUFDN0U7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0NBQXNDO0FBQzdFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFPOztBQUV4QjtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFVOztBQUU5QjtBQUNBLCtDQUErQyxjQUFjO0FBQzdEOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRTs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHNCQUFzQiwrREFBWTs7QUFFbEM7QUFDQSxpREFBaUQsbUJBQW1CO0FBQ3BFOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7O0FBRUEsV0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7OztBQzFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLHNCQUFzQix5R0FBK0I7QUFDckQ7QUFDQSx1QkFBdUIseUdBQStCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQjtBQUNLO0FBQ0o7QUFDUTtBQUs5QjtBQUNJO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDVmlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDekR0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMuY3NzPzMzYmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGFoYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk5KTtcbn1cblxuI21vZGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGV0b3A7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3B7XG4gICAgZnJvbXt0b3A6IC0zMDBweDsgb3BhY2l0eTogMH1cbiAgICB0b3t0b3A6MDsgb3BhY2l0eTogMX1cbn1cblxuLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItYm90dG9tOjNweCBkb3R0ZWQgYmxhY2tcbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgID5kaXZ7XG4gICAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgICBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICA+c2VsZWN0e3dpZHRoOjUzJTsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxuICAgICAgICA+aW5wdXR7d2lkdGg6NTAlO31cbiAgICAgICAgPnRleHRhcmVhe1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICA+I3Byb2plY3QtcHJpb3JpdHl7XG4gICAgICAgICAgICB3aWR0aDoxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0OCU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi5tb2RhbC1idXR0b257XG4gICAgd2lkdGg6NDglO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9tb2RhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksS0FBSyxXQUFXLEVBQUUsVUFBVTtJQUM1QixHQUFHLEtBQUssRUFBRSxVQUFVO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQjtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixRQUFRLFNBQVMsRUFBRSx1QkFBdUIsQ0FBQztRQUMzQyxPQUFPLFNBQVMsQ0FBQztRQUNqQjtZQUNJLFVBQVU7WUFDVixZQUFZO1lBQ1osWUFBWTtRQUNoQjtRQUNBO1lBQ0ksVUFBVTtZQUNWLGlCQUFpQjtRQUNyQjtJQUNKOztBQUVKO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTkpO1xcbn1cXG5cXG4jbW9kYWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgZGlzcGxheTogZmxleGJveDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGFuaW1hdGlvbjogMC4zcyBhbmltYXRldG9wO1xcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3B7XFxuICAgIGZyb217dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XFxuICAgIHRve3RvcDowOyBvcGFjaXR5OiAxfVxcbn1cXG5cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBkb3R0ZWQgYmxhY2tcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOjEwMCU7IFxcbiAgICAgICAgZGlzcGxheTpmbGV4OyBcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgPnNlbGVjdHt3aWR0aDo1MyU7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO31cXG4gICAgICAgID5pbnB1dHt3aWR0aDo1MCU7fVxcbiAgICAgICAgPnRleHRhcmVhe1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgID4jcHJvamVjdC1wcmlvcml0eXtcXG4gICAgICAgICAgICB3aWR0aDoxNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDglO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxufVxcbi5tb2RhbC1idXR0b257XFxuICAgIHdpZHRoOjQ4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbjogMSU7XFxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTZXBlcmF0ZWQgZm9yIGdsb2JhbCBjbGFzc2VzICovXG4uY3JlZGl0e1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICAgID5he1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLmNyZWRpdDpob3ZlcntcbiAgICBzY2FsZToyMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xufVxuXG4vKiBIZWFkZXIgYXJlYSBiZWxvdyAqL1xuaGVhZGVye1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbn1cblxuLmJhbm5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDJ2aDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggcmlkZ2UgYmxhY2s7XG4gICAgPi50ZXh0LWJne1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xuICAgICAgICA+LnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgICAgID4uc3ViLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgID4udGV4dC1iZz5we1xuICAgICAgICBtYXJnaW46MFxuICAgIH1cbn1cblxuLyogTWFpbiBhcmVhIGJlbG93ICovXG5tYWlue1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMjBmciAvIDFmciA2ZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxufVxuLm92ZXJ2aWV3LXRyZWV7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICA+LnRpdGxle3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDg3LCA5NCk7XG4gICAgICAgIHBhZGRpbmc6IDEwJSAwfVxufVxuLm92ZXJ2aWV3e1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgID4ub3ZlcnZpZXctcHJvamVjdHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcbiAgICAgICAgbGlzdC1zdHlsZTpjaXJjbGUgaW5zaWRlIG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgPmRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgPi5vdmVydmlldy10b2Rve1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDElIDEwJTtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2MgaW5zaWRlIG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOjJweCBkYXNoZWQgYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgID5kaXY+cHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uZGVsQnRue1xuICAgIG1heC1oZWlnaHQ6IDI1cHg7XG4gICAgc2NhbGU6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAwLCAwKTtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmRlbEJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uZGVsQnRuOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLnRvb2xiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuNDg2KTtcblxufVxuXG4udG9vbGJhci1idXR0b257XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnRvb2xiYXItYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgMTQ4KTt9XG4udG9vbGJhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgc2NhbGU6OTAlO31cbi5jb250ZW50LWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjgwMSk7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xufVxuLnByb2plY3QtcmVuZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NCwgMTY3KTtcbiAgICBib3JkZXI6IDVweCByaWRnZSBibGFjaztcbiAgICBtYXJnaW46IDIlIDMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGhlaWdodDo2OHZoO1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xuICAgID4ucHJvamVjdC1yZW5kZXItdGl0bGV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSBibGFjaztcbiAgICB9XG59XG5cblxuLyogZm9vdGVyIGFyZWEgKi9cbmZvb3RlcntcbiAgICBmbGV4OiAwIDEgNDBweDtcbiAgICBwYWRkaW5nLXRvcDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDAuNDY2KTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICA+YXtcbiAgICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cbmZvb3Rlcjpob3ZlcntcbiAgICBmb250LXNpemU6IDE1MCU7XG59XG5cbi8qIFRvIGJlIG1vdmVkICovXG5cbi50b2Rvcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDo5MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ2FwOjElO1xuICAgIG1hcmdpbjogMCAyJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgPi50b2RvLWNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgICAgICBcbiAgICAgICAgPi50b2RvLWtleS12YWx1ZS1jb250e1xuICAgICAgICAgICAgPi50b2RvLWtleXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsMS4ydncsMjBweCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+LnRvZG8tdmFsdWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOmNsYW1wKDhweCwgMXZ3LCAxMnB4KTtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoNjEsIDYxLCA2MSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLnRvZG8tY2FyZDpob3ZlcntcbiAgICAgICAgc2NhbGU6MTEwJTtcbiAgICB9XG4gICAgXG59XG4uaGlkZGVuLWNhcmR7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG4uc2hvdy1jYXJke1xuICAgIHdpZHRoOjUwJTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEwJSk7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFD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O0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsTUFBTTtJQUNOLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7UUFDSSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsMkNBQTJDO1FBQzNDLDBEQUEwRDs7UUFFMUQ7WUFDSTtnQkFDSSxpQ0FBaUM7Z0JBQ2pDLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCO1lBQ0E7Z0JBQ0ksK0JBQStCO2dCQUMvQixxQkFBcUI7Z0JBQ3JCLGVBQWU7Z0JBQ2YsYUFBYTtZQUNqQjs7UUFFSjs7SUFFSjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztBQUVKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogU2VwZXJhdGVkIGZvciBnbG9iYWwgY2xhc3NlcyAqL1xcbi5jcmVkaXR7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcbiAgICA+YXtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG4uY3JlZGl0OmhvdmVye1xcbiAgICBzY2FsZToyMDAlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuLyogSGVhZGVyIGFyZWEgYmVsb3cgKi9cXG5oZWFkZXJ7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG4uYmFubmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSBibGFjaztcXG4gICAgPi50ZXh0LWJne1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggYmxhY2s7XFxuICAgICAgICA+LnRpdGxle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgICAgICB9XFxuICAgICAgICA+LnN1Yi10aXRsZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgID4udGV4dC1iZz5we1xcbiAgICAgICAgbWFyZ2luOjBcXG4gICAgfVxcbn1cXG5cXG4vKiBNYWluIGFyZWEgYmVsb3cgKi9cXG5tYWlue1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMjBmciAvIDFmciA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG4ub3ZlcnZpZXctdHJlZXtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU3NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgPi50aXRsZXt0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA4NywgOTQpO1xcbiAgICAgICAgcGFkZGluZzogMTAlIDB9XFxufVxcbi5vdmVydmlld3tcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xcbiAgICA+Lm92ZXJ2aWV3LXByb2plY3R7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xcbiAgICAgICAgbGlzdC1zdHlsZTpjaXJjbGUgaW5zaWRlIG5vbmU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBmb250LXNpemU6IDEwMCU7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgID5kaXZ7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4OyBcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuICAgICAgICA+Lm92ZXJ2aWV3LXRvZG97XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxJSAxMCU7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyBpbnNpZGUgbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOjJweCBkYXNoZWQgYmxhY2s7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XFxuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgICAgICAgICA+ZGl2PnB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLmRlbEJ0bntcXG4gICAgbWF4LWhlaWdodDogMjVweDtcXG4gICAgc2NhbGU6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAwLCAwKTtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5kZWxCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmRlbEJ0bjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnRvb2xiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjQ4Nik7XFxuXFxufVxcblxcbi50b29sYmFyLWJ1dHRvbntcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b29sYmFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDE0OCk7fVxcbi50b29sYmFyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyBzY2FsZTo5MCU7fVxcbi5jb250ZW50LWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC44MDEpO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxufVxcbi5wcm9qZWN0LXJlbmRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc0LCAxNjcpO1xcbiAgICBib3JkZXI6IDVweCByaWRnZSBibGFjaztcXG4gICAgbWFyZ2luOiAyJSAzJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGhlaWdodDo2OHZoO1xcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcXG4gICAgPi5wcm9qZWN0LXJlbmRlci10aXRsZXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBmb250LXNpemU6IDN2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHJpZGdlIGJsYWNrO1xcbiAgICB9XFxufVxcblxcblxcbi8qIGZvb3RlciBhcmVhICovXFxuZm9vdGVye1xcbiAgICBmbGV4OiAwIDEgNDBweDtcXG4gICAgcGFkZGluZy10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC40NjYpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcXG4gICAgPmF7XFxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxufVxcbmZvb3Rlcjpob3ZlcntcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG5cXG4vKiBUbyBiZSBtb3ZlZCAqL1xcblxcbi50b2Rvcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ2FwOjElO1xcbiAgICBtYXJnaW46IDAgMiU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgPi50b2RvLWNhcmR7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuICAgICAgICBwYWRkaW5nOjEwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xcbiAgICAgICAgXFxuICAgICAgICA+LnRvZG8ta2V5LXZhbHVlLWNvbnR7XFxuICAgICAgICAgICAgPi50b2RvLWtleXtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LDEuMnZ3LDIwcHgpO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgID4udG9kby12YWx1ZXtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOmNsYW1wKDhweCwgMXZ3LCAxMnB4KTtcXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiKDYxLCA2MSwgNjEpO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLnRvZG8tY2FyZDpob3ZlcntcXG4gICAgICAgIHNjYWxlOjExMCU7XFxuICAgIH1cXG4gICAgXFxufVxcbi5oaWRkZW4tY2FyZHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG4uc2hvdy1jYXJke1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEwJSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IHRvb2xCYXIsIHJlbmRlckRPTSwgdXBkYXRlVHJlZSB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXInXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSAnLi9tb2R1bGVzL2RhdGFoYW5kbGVyJ1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzJ1xuXG4vLyBJbml0aWFsaXNlIHBhZ2UsIGNoZWNrcyBmb3IgZXhpc3RpbmcgcHJvamVjdHMgb3RoZXJ3aXNlIGNyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0LlxuLy8gQWxzbyBhY3RpdmF0ZXMgdmFyaW91cyBtb2R1bGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzNTM3NTQ0ODEyXzlfMV85XzM3XzRgLCdpbml0aWFsaXNlciB0cmlnZ2VyZWQnKSlcblx0aWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzUzNzU0NDgxMl8xMV8yXzExXzYzXzRgLCdwcm9qZWN0c0FycmF5IGlzIGVtcHR5LiBDcmVhdGluZyBkZWZhdWx0IGFycmF5JykpXG5cdFx0bGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3QoKVxuXHRcdHByb2plY3RzQXJyYXkucHVzaChkZWZhdWx0UHJvamVjdClcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzNTM3NTQ0ODEyXzE0XzJfMTRfNzBfNGAsYGRlZmF1bHQgb2JqZWN0IGNyZWF0ZWQsIG5hbWU6ICR7ZGVmYXVsdFByb2plY3QudGl0bGV9YCkpXG5cdH0gZWxzZSAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzNTM3NTQ0ODEyXzE1XzhfMTVfNzhfNGAsYEFycmF5IGZvdW5kIGluIHByb2plY3RzQXJyYXk6ICR7cHJvamVjdHNBcnJheVswXS50aXRsZX1gKSlcblx0Ly8gdXBkYXRlIERPTSB0cmVlXG5cdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDM1Mzc1NDQ4MTJfMTdfMV8xN18yN180YCxwcm9qZWN0c0FycmF5KSlcblx0dG9vbEJhcigpXG5cdHJlbmRlckRPTSgpXG5cdHVwZGF0ZVRyZWUocHJvamVjdHNBcnJheSlcbn1cbmluaXQoKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDFmN2ZlMT1fMHgzN2U0OyhmdW5jdGlvbihfMHg0N2ZmYjUsXzB4MzA1NzE2KXt2YXIgXzB4MzcyZDg0PV8weDM3ZTQsXzB4MzI1ZThmPV8weDQ3ZmZiNSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NDkzNjExPS1wYXJzZUludChfMHgzNzJkODQoMHgyMjUpKS8weDEqKC1wYXJzZUludChfMHgzNzJkODQoMHgxZDYpKS8weDIpKy1wYXJzZUludChfMHgzNzJkODQoMHgxYTkpKS8weDMqKC1wYXJzZUludChfMHgzNzJkODQoMHgyNzIpKS8weDQpKy1wYXJzZUludChfMHgzNzJkODQoMHgyNWIpKS8weDUrLXBhcnNlSW50KF8weDM3MmQ4NCgweDE4YikpLzB4NiooLXBhcnNlSW50KF8weDM3MmQ4NCgweDIzNSkpLzB4NykrLXBhcnNlSW50KF8weDM3MmQ4NCgweDFmMSkpLzB4OCoocGFyc2VJbnQoXzB4MzcyZDg0KDB4MWI5KSkvMHg5KStwYXJzZUludChfMHgzNzJkODQoMHgxZjIpKS8weGEqKC1wYXJzZUludChfMHgzNzJkODQoMHgxZWQpKS8weGIpK3BhcnNlSW50KF8weDM3MmQ4NCgweDFlOCkpLzB4YztpZihfMHg0OTM2MTE9PT1fMHgzMDU3MTYpYnJlYWs7ZWxzZSBfMHgzMjVlOGZbJ3B1c2gnXShfMHgzMjVlOGZbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJiNDk5ZSl7XzB4MzI1ZThmWydwdXNoJ10oXzB4MzI1ZThmWydzaGlmdCddKCkpO319fShfMHgyOGVkLDB4NDVmNTgpKTtmdW5jdGlvbiBfMHgyOGVkKCl7dmFyIF8weDhiYTRkNz1bJzpsb2dQb2ludElkOicsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzIzNzYzNjVtalRNUWEnLCdjb25jYXQnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnc2V0dGVyJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdyZXBsYWNlJywncGFyc2UnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywncG9ydCcsJ19yZWNvbm5lY3RUaW1lb3V0Jywnbm9kZU1vZHVsZXMnLCdTdHJpbmcnLCdfcHJvcGVydHknLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnX2FsbG93ZWRUb1NlbmQnLCd1cmwnLCd3cy9pbmRleC5qcycsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ3Jlc29sdmVHZXR0ZXJzJywnY29uc3RydWN0b3InLCdfcHJvcGVydHlOYW1lJywnODg4NjRQZU5vUW4nLCdwcm9wcycsJ2F1dG9FeHBhbmQnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ21ldGhvZCcsJ2xldmVsJywnY3JlYXRlJywnb25jbG9zZScsJ3ZlcnNpb25zJywnZXhwSWQnLCc0NTM3ODZoWlJUTVEnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19pbk5leHRFZGdlJywnMTcwOTMxMTAxNjUyMicsJ19jb25uZWN0VG9Ib3N0Tm93JywnaGFzT3duUHJvcGVydHknLCdpbmRleCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdzdGFjaycsJ193cycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnZWRnZScsJ0J1ZmZlcicsJ29iamVjdCcsJ3NldCcsJ3dzOi8vJywnX2NsZWFuTm9kZScsJ2FzdHJvJywnX3R5cGUnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ2NhdGNoJywncHJvdG90eXBlJywnX3BfJywndGltZUVuZCcsJ1dlYlNvY2tldCcsJ2dsb2JhbCcsJ3NsaWNlJywnRXJyb3InLCdfaXNQcmltaXRpdmVUeXBlJywnX2lzVW5kZWZpbmVkJywnNTRpUm5RSk4nLCdfb2JqZWN0VG9TdHJpbmcnLCd0cmFjZScsJ2lzQXJyYXknLCdfcXVvdGVkUmVnRXhwJywndGltZScsJycsJ19zZXROb2RlTGFiZWwnLCcnLCd1bmtub3duJywnZnVuY05hbWUnLCdTZXQnLCdcXFxceDIwYnJvd3NlcicsJ3JlZHVjZUxpbWl0cycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzlWcEhFTVMnLCdpbmNsdWRlcycsJ19TeW1ib2wnLCduZWdhdGl2ZUluZmluaXR5JywnZnVuY3Rpb24nLCdtZXNzYWdlJywnbmFuJywnb25tZXNzYWdlJywnX2RhdGVUb1N0cmluZycsJ3Jvb3RfZXhwJywncm9vdEV4cHJlc3Npb24nLCdkb2NrZXJpemVkQXBwJywnX1dlYlNvY2tldENsYXNzJywnZ2V0dGVyJywnaG9zdG5hbWUnLCd3YXJuJywnYXJyYXknLCdfaXNNYXAnLCdlbGFwc2VkJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdsb2cnLCdORUdBVElWRV9JTkZJTklUWScsJ2NhcHBlZEVsZW1lbnRzJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ3JlbG9hZCcsJ19jb25uZWN0ZWQnLCd2YWx1ZScsJ3JlYWR5U3RhdGUnLCdhdXRvRXhwYW5kTGltaXQnLCcxNHR3VWdYSCcsXFxcIi9ob21lL2RhbmllbGxyLy52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMjkwL25vZGVfbW9kdWxlc1xcXCIsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJy4uLicsJ3N0cmluZycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2NhcElmU3RyaW5nJywnYWxsU3RyTGVuZ3RoJywnY292ZXJhZ2UnLCdtYXAnLCdwb3AnLCdfYWRkTG9hZE5vZGUnLCdlbGVtZW50cycsJ251bWJlcicsJ01hcCcsJ3BhdGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ05FWFRfUlVOVElNRScsJzg3NzIwOTZhQmVpTmEnLCdfcmVnRXhwVG9TdHJpbmcnLCdfc2V0Tm9kZUlkJywndG90YWxTdHJMZW5ndGgnLCdkYXRhJywnMjc1ekNmYXVHJywnbmVnYXRpdmVaZXJvJywnc3ltYm9sJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCczODI3NDY0ZnNpdlVjJywnOTk0MzByTXB3Y3MnLCdwdXNoJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdlbnYnLCdzcGxpdCcsJ251bGwnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywndHlwZScsJ19rZXlTdHJSZWdFeHAnLCdfX2VzJysnTW9kdWxlJywnbm9kZScsJ19oYXNNYXBPbkl0c1BhdGgnLCd0b1N0cmluZycsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2Nsb3NlJywnc2VuZCcsJ19pc05lZ2F0aXZlWmVybycsJ3RoZW4nLCdfaW5Ccm93c2VyJywndW5yZWYnLCduYW1lJywndW5zaGlmdCcsJ2hpdHMnLCd3ZWJwYWNrJywnX3NvY2tldCcsJ19kaXNwb3NlV2Vic29ja2V0JywnMzQ4NzknLCdsZW5ndGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ3BlcmZfaG9va3MnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfaXNTZXQnLCdfc2VuZEVycm9yTWVzc2FnZScsJzEyNy4wLjAuMScsJ3Byb2Nlc3MnLCdob3N0Jywnam9pbicsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnc3RyTGVuZ3RoJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnY2FsbCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdkZXB0aCcsJ19XZWJTb2NrZXQnLCdiaW5kJywnX3NldE5vZGVRdWVyeVBhdGgnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnMjk1MjVZR1JOQkonLCdjb3VudCcsJ25vRnVuY3Rpb25zJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdzdGFja1RyYWNlTGltaXQnLCdOdW1iZXInLCdwZXJmb3JtYW5jZScsJ3Rlc3QnLCd2YWx1ZU9mJywncG9zaXRpdmVJbmZpbml0eScsJ19wX2xlbmd0aCcsJ2Vycm9yJywnb25lcnJvcicsJ19jb25zb2xlX25pbmphJywnW29iamVjdFxcXFx4MjBNYXBdJywnY2FwcGVkUHJvcHMnLCcxNGh4REtZVicsJ2luZGV4T2YnLCdmb3JFYWNoJywncGFyZW50JywnZ2V0Jywnc2VyaWFsaXplJywnZ2V0UHJvdG90eXBlT2YnLCdfYWRkUHJvcGVydHknLCd0aW1lU3RhbXAnLCdsb2NhdGlvbicsJ2NhcHBlZCcsJ3VuZGVmaW5lZCcsJ19jb25uZWN0aW5nJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdlbnVtZXJhYmxlJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdcXFxceDIwc2VydmVyJywnaHJ0aW1lJywnc29ydFByb3BzJywnbWF0Y2gnLCdiaWdpbnQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ3NvcnQnLCd0b0xvd2VyQ2FzZScsJ191bmRlZmluZWQnLCdvbm9wZW4nLCdub3cnLCdQT1NJVElWRV9JTkZJTklUWScsJ2N1cnJlbnQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ19pc0FycmF5JywnY29uc29sZScsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJ107XzB4MjhlZD1mdW5jdGlvbigpe3JldHVybiBfMHg4YmE0ZDc7fTtyZXR1cm4gXzB4MjhlZCgpO31mdW5jdGlvbiBfMHgzN2U0KF8weDY5ZTE0NixfMHgzZGIyOGQpe3ZhciBfMHgyOGVkNmU9XzB4MjhlZCgpO3JldHVybiBfMHgzN2U0PWZ1bmN0aW9uKF8weDM3ZTQ2MCxfMHgxOWEyNTcpe18weDM3ZTQ2MD1fMHgzN2U0NjAtMHgxODk7dmFyIF8weDE4OTBjZD1fMHgyOGVkNmVbXzB4MzdlNDYwXTtyZXR1cm4gXzB4MTg5MGNkO30sXzB4MzdlNChfMHg2OWUxNDYsXzB4M2RiMjhkKTt9dmFyIGo9T2JqZWN0W18weDFmN2ZlMSgweDI3OCldLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDFmN2ZlMSgweDFiOCldLGVlPU9iamVjdFtfMHgxZjdmZTEoMHgyNjIpXSx0ZT1PYmplY3RbXzB4MWY3ZmUxKDB4MjNiKV0sbmU9T2JqZWN0W18weDFmN2ZlMSgweDFhMCldW18weDFmN2ZlMSgweDE5MCldLHJlPShfMHg1YWM2NDIsXzB4MWNmNTYwLF8weDU2MTU1MyxfMHgyMGM0NDcpPT57dmFyIF8weDQ1YzIwMj1fMHgxZjdmZTE7aWYoXzB4MWNmNTYwJiZ0eXBlb2YgXzB4MWNmNTYwPT1fMHg0NWMyMDIoMHgxOTgpfHx0eXBlb2YgXzB4MWNmNTYwPT1fMHg0NWMyMDIoMHgxYmQpKXtmb3IobGV0IF8weDUwOGEyYyBvZiBlZShfMHgxY2Y1NjApKSFuZVtfMHg0NWMyMDIoMHgyMWQpXShfMHg1YWM2NDIsXzB4NTA4YTJjKSYmXzB4NTA4YTJjIT09XzB4NTYxNTUzJiZIKF8weDVhYzY0MixfMHg1MDhhMmMseydnZXQnOigpPT5fMHgxY2Y1NjBbXzB4NTA4YTJjXSwnZW51bWVyYWJsZSc6IShfMHgyMGM0NDc9RyhfMHgxY2Y1NjAsXzB4NTA4YTJjKSl8fF8weDIwYzQ0N1tfMHg0NWMyMDIoMHgyNDQpXX0pO31yZXR1cm4gXzB4NWFjNjQyO30seD0oXzB4MWE5MjYxLF8weGI4NDJlMSxfMHgzYTEyM2QpPT4oXzB4M2ExMjNkPV8weDFhOTI2MSE9bnVsbD9qKHRlKF8weDFhOTI2MSkpOnt9LHJlKF8weGI4NDJlMXx8IV8weDFhOTI2MXx8IV8weDFhOTI2MVtfMHgxZjdmZTEoMHgxZmIpXT9IKF8weDNhMTIzZCwnZGVmYXVsdCcseyd2YWx1ZSc6XzB4MWE5MjYxLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4M2ExMjNkLF8weDFhOTI2MSkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MjU4OTQ2LF8weDRhYmMyNCxfMHg1M2E5MGEsXzB4NjhkYjQ1LF8weDU0NTdlOCl7dmFyIF8weDI1OTdjYj1fMHgxZjdmZTE7dGhpc1tfMHgyNTk3Y2IoMHgxYTQpXT1fMHgyNTg5NDYsdGhpc1tfMHgyNTk3Y2IoMHgyMTUpXT1fMHg0YWJjMjQsdGhpc1tfMHgyNTk3Y2IoMHgyNjMpXT1fMHg1M2E5MGEsdGhpc1tfMHgyNTk3Y2IoMHgyNjUpXT1fMHg2OGRiNDUsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDU0NTdlOCx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHgyNTk3Y2IoMHgxY2MpXT0hMHgwLHRoaXNbXzB4MjU5N2NiKDB4MWQyKV09ITB4MSx0aGlzW18weDI1OTdjYigweDI0MSldPSEweDEsdGhpc1tfMHgyNTk3Y2IoMHgxOGQpXT1fMHgyNTg5NDZbXzB4MjU5N2NiKDB4MjE0KV0/LlsnZW52J10/LltfMHgyNTk3Y2IoMHgxZTcpXT09PSdlZGdlJyx0aGlzW18weDI1OTdjYigweDIwNCldPSF0aGlzW18weDI1OTdjYigweDFhNCldW18weDI1OTdjYigweDIxNCldPy5bXzB4MjU5N2NiKDB4MTg5KV0/LltfMHgyNTk3Y2IoMHgxZmMpXSYmIXRoaXNbXzB4MjU5N2NiKDB4MThkKV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDI1OTdjYigweDFmNCldPTB4MCx0aGlzW18weDI1OTdjYigweDFkYildPTB4MTQsdGhpc1tfMHgyNTk3Y2IoMHgxOWUpXT1fMHgyNTk3Y2IoMHgyNDYpLHRoaXNbXzB4MjU5N2NiKDB4MjEyKV09KHRoaXNbXzB4MjU5N2NiKDB4MjA0KV0/XzB4MjU5N2NiKDB4MjVmKTpfMHgyNTk3Y2IoMHgyNmQpKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddO31hc3luY1tfMHgxZjdmZTEoMHgxZjApXSgpe3ZhciBfMHgzMzYxYTY9XzB4MWY3ZmUxO2lmKHRoaXNbXzB4MzM2MWE2KDB4MWM1KV0pcmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddO2xldCBfMHgyNDBkOGY7aWYodGhpc1tfMHgzMzYxYTYoMHgyMDQpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHgyNDBkOGY9dGhpc1snZ2xvYmFsJ11bXzB4MzM2MWE2KDB4MWEzKV07ZWxzZXtpZih0aGlzWydnbG9iYWwnXVsncHJvY2VzcyddPy5bXzB4MzM2MWE2KDB4MjIxKV0pXzB4MjQwZDhmPXRoaXNbJ2dsb2JhbCddW18weDMzNjFhNigweDIxNCldPy5bXzB4MzM2MWE2KDB4MjIxKV07ZWxzZSB0cnl7bGV0IF8weDQyNTkxMj1hd2FpdCBpbXBvcnQoXzB4MzM2MWE2KDB4MWU1KSk7XzB4MjQwZDhmPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgzMzYxYTYoMHgyNmIpKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHg0MjU5MTJbXzB4MzM2MWE2KDB4MjE2KV0odGhpc1tfMHgzMzYxYTYoMHgyNjUpXSxfMHgzMzYxYTYoMHgyNmMpKSlbXzB4MzM2MWE2KDB4MWZlKV0oKSkpWydkZWZhdWx0J107fWNhdGNoe3RyeXtfMHgyNDBkOGY9cmVxdWlyZShyZXF1aXJlKF8weDMzNjFhNigweDFlNSkpW18weDMzNjFhNigweDIxNildKHRoaXNbXzB4MzM2MWE2KDB4MjY1KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MzM2MWE2KDB4MjFjKSk7fX19cmV0dXJuIHRoaXNbXzB4MzM2MWE2KDB4MWM1KV09XzB4MjQwZDhmLF8weDI0MGQ4Zjt9W18weDFmN2ZlMSgweDE4ZildKCl7dmFyIF8weDEwNDFjNz1fMHgxZjdmZTE7dGhpc1tfMHgxMDQxYzcoMHgyNDEpXXx8dGhpc1tfMHgxMDQxYzcoMHgxZDIpXXx8dGhpc1tfMHgxMDQxYzcoMHgxZjQpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXXx8KHRoaXNbXzB4MTA0MWM3KDB4MWNjKV09ITB4MSx0aGlzW18weDEwNDFjNygweDI0MSldPSEweDAsdGhpc1tfMHgxMDQxYzcoMHgxZjQpXSsrLHRoaXNbXzB4MTA0MWM3KDB4MTk0KV09bmV3IFByb21pc2UoKF8weDFkNDdhOCxfMHgzMDI2ZDYpPT57dmFyIF8weGRkMTEwNj1fMHgxMDQxYzc7dGhpc1tfMHhkZDExMDYoMHgxZjApXSgpW18weGRkMTEwNigweDIwMyldKF8weDRjYzhmZj0+e3ZhciBfMHg0N2RhYzc9XzB4ZGQxMTA2O2xldCBfMHgxZDEwZDA9bmV3IF8weDRjYzhmZihfMHg0N2RhYzcoMHgxOWEpKyghdGhpc1tfMHg0N2RhYzcoMHgyMDQpXSYmdGhpc1tfMHg0N2RhYzcoMHgxYzQpXT9fMHg0N2RhYzcoMHgyNTgpOnRoaXNbJ2hvc3QnXSkrJzonK3RoaXNbJ3BvcnQnXSk7XzB4MWQxMGQwW18weDQ3ZGFjNygweDIzMSldPSgpPT57dmFyIF8weDgzNmNlMD1fMHg0N2RhYzc7dGhpc1tfMHg4MzZjZTAoMHgyNmEpXT0hMHgxLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MWQxMGQwKSx0aGlzW18weDgzNmNlMCgweDIyOCldKCksXzB4MzAyNmQ2KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDFkMTBkMFtfMHg0N2RhYzcoMHgyNTApXT0oKT0+e3ZhciBfMHgzMTZkOTg9XzB4NDdkYWM3O3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MWQxMGQwW18weDMxNmQ5OCgweDIwYSldJiZfMHgxZDEwZDBbXzB4MzE2ZDk4KDB4MjBhKV1bJ3VucmVmJ10mJl8weDFkMTBkMFtfMHgzMTZkOTgoMHgyMGEpXVtfMHgzMTZkOTgoMHgyMDUpXSgpLF8weDFkNDdhOChfMHgxZDEwZDApO30sXzB4MWQxMGQwWydvbmNsb3NlJ109KCk9Pnt2YXIgXzB4MzE5MDFiPV8weDQ3ZGFjNzt0aGlzW18weDMxOTAxYigweDFjYyldPSEweDAsdGhpc1tfMHgzMTkwMWIoMHgyMGIpXShfMHgxZDEwZDApLHRoaXNbXzB4MzE5MDFiKDB4MjI4KV0oKTt9LF8weDFkMTBkMFtfMHg0N2RhYzcoMHgxYzApXT1fMHg5MzQzMTk9Pnt2YXIgXzB4MmYyOTE3PV8weDQ3ZGFjNzt0cnl7XzB4OTM0MzE5JiZfMHg5MzQzMTlbXzB4MmYyOTE3KDB4MWVjKV0mJnRoaXNbXzB4MmYyOTE3KDB4MjA0KV0mJkpTT05bXzB4MmYyOTE3KDB4MjYxKV0oXzB4OTM0MzE5WydkYXRhJ10pW18weDJmMjkxNygweDI3NildPT09XzB4MmYyOTE3KDB4MWQxKSYmdGhpc1tfMHgyZjI5MTcoMHgxYTQpXVtfMHgyZjI5MTcoMHgyM2UpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4ZGQxMTA2KDB4MjAzKV0oXzB4NDc5NTc4PT4odGhpc1tfMHhkZDExMDYoMHgxZDIpXT0hMHgwLHRoaXNbXzB4ZGQxMTA2KDB4MjQxKV09ITB4MSx0aGlzW18weGRkMTEwNigweDFjYyldPSEweDEsdGhpc1tfMHhkZDExMDYoMHgyNmEpXT0hMHgwLHRoaXNbXzB4ZGQxMTA2KDB4MWY0KV09MHgwLF8weDQ3OTU3OCkpW18weGRkMTEwNigweDE5ZildKF8weDRlZGQzMD0+KHRoaXNbXzB4ZGQxMTA2KDB4MWQyKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHhkZDExMDYoMHgxYzgpXShfMHhkZDExMDYoMHgyNGMpK3RoaXNbXzB4ZGQxMTA2KDB4MTllKV0pLF8weDMwMjZkNihuZXcgRXJyb3IoXzB4ZGQxMTA2KDB4MWI3KSsoXzB4NGVkZDMwJiZfMHg0ZWRkMzBbXzB4ZGQxMTA2KDB4MWJlKV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0OTMxOGQpe3ZhciBfMHg0MzIzYzA9XzB4MWY3ZmUxO3RoaXNbXzB4NDMyM2MwKDB4MWQyKV09ITB4MSx0aGlzW18weDQzMjNjMCgweDI0MSldPSEweDE7dHJ5e18weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyNzkpXT1udWxsLF8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyMzEpXT1udWxsLF8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyNTApXT1udWxsO31jYXRjaHt9dHJ5e18weDQ5MzE4ZFtfMHg0MzIzYzAoMHgxZDQpXTwweDImJl8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyMDApXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHhhZmFlNTg9XzB4MWY3ZmUxO2NsZWFyVGltZW91dCh0aGlzW18weGFmYWU1OCgweDI2NCldKSwhKHRoaXNbXzB4YWZhZTU4KDB4MWY0KV0+PXRoaXNbXzB4YWZhZTU4KDB4MWRiKV0pJiYodGhpc1tfMHhhZmFlNTgoMHgyNjQpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDE3Y2UxYj1fMHhhZmFlNTg7dGhpc1tfMHgxN2NlMWIoMHgxZDIpXXx8dGhpc1tfMHgxN2NlMWIoMHgyNDEpXXx8KHRoaXNbXzB4MTdjZTFiKDB4MThmKV0oKSx0aGlzWydfd3MnXT8uW18weDE3Y2UxYigweDE5ZildKCgpPT50aGlzW18weDE3Y2UxYigweDIyOCldKCkpKTt9LDB4MWY0KSx0aGlzW18weGFmYWU1OCgweDI2NCldW18weGFmYWU1OCgweDIwNSldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weGFmYWU1OCgweDIwNSldKCkpO31hc3luY1tfMHgxZjdmZTEoMHgyMDEpXShfMHgxNjc2NmUpe3ZhciBfMHgxNTBjNGU9XzB4MWY3ZmUxO3RyeXtpZighdGhpc1tfMHgxNTBjNGUoMHgyNmEpXSlyZXR1cm47dGhpc1tfMHgxNTBjNGUoMHgxY2MpXSYmdGhpc1tfMHgxNTBjNGUoMHgxOGYpXSgpLChhd2FpdCB0aGlzW18weDE1MGM0ZSgweDE5NCldKVtfMHgxNTBjNGUoMHgyMDEpXShKU09OWydzdHJpbmdpZnknXShfMHgxNjc2NmUpKTt9Y2F0Y2goXzB4NThkOWFhKXtjb25zb2xlW18weDE1MGM0ZSgweDFjOCldKHRoaXNbXzB4MTUwYzRlKDB4MjEyKV0rJzpcXFxceDIwJysoXzB4NThkOWFhJiZfMHg1OGQ5YWFbXzB4MTUwYzRlKDB4MWJlKV0pKSx0aGlzW18weDE1MGM0ZSgweDI2YSldPSEweDEsdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO319fTtmdW5jdGlvbiBiKF8weDEyNjZlNixfMHg1ZTVlYmUsXzB4MzY1OWIwLF8weDQyZTA0ZSxfMHg1MDM3NTQsXzB4Zjk1NTAxKXt2YXIgXzB4MWNiZjc3PV8weDFmN2ZlMTtsZXQgXzB4MWMyODE0PV8weDM2NTliMFsnc3BsaXQnXSgnLCcpW18weDFjYmY3NygweDFkZildKF8weDI5MDE0OD0+e3ZhciBfMHg0MzM2ZTU9XzB4MWNiZjc3O3RyeXtfMHgxMjY2ZTZbXzB4NDMzNmU1KDB4MjZlKV18fCgoXzB4NTAzNzU0PT09J25leHQuanMnfHxfMHg1MDM3NTQ9PT0ncmVtaXgnfHxfMHg1MDM3NTQ9PT1fMHg0MzM2ZTUoMHgxOWMpfHxfMHg1MDM3NTQ9PT0nYW5ndWxhcicpJiYoXzB4NTAzNzU0Kz0hXzB4MTI2NmU2W18weDQzMzZlNSgweDIxNCldPy5bJ3ZlcnNpb25zJ10/LltfMHg0MzM2ZTUoMHgxZmMpXSYmXzB4MTI2NmU2W18weDQzMzZlNSgweDIxNCldPy5bXzB4NDMzNmU1KDB4MWY1KV0/LlsnTkVYVF9SVU5USU1FJ10hPT1fMHg0MzM2ZTUoMHgxOTYpP18weDQzMzZlNSgweDFiNSk6XzB4NDMzNmU1KDB4MjQ3KSksXzB4MTI2NmU2WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDUwMzc1NH0pO2xldCBfMHhkMmUzNjY9bmV3IFgoXzB4MTI2NmU2LF8weDVlNWViZSxfMHgyOTAxNDgsXzB4NDJlMDRlLF8weGY5NTUwMSk7cmV0dXJuIF8weGQyZTM2NltfMHg0MzM2ZTUoMHgyMDEpXVtfMHg0MzM2ZTUoMHgyMjIpXShfMHhkMmUzNjYpO31jYXRjaChfMHg0NjMwNGYpe3JldHVybiBjb25zb2xlWyd3YXJuJ10oXzB4NDMzNmU1KDB4MjU0KSxfMHg0NjMwNGYmJl8weDQ2MzA0ZltfMHg0MzM2ZTUoMHgxYmUpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4MTMwYWY0PT5fMHgxYzI4MTRbXzB4MWNiZjc3KDB4MjM3KV0oXzB4MzUzODkxPT5fMHgzNTM4OTEoXzB4MTMwYWY0KSk7fWZ1bmN0aW9uIFcoXzB4MjNmYTlmKXt2YXIgXzB4NDA5ZTBkPV8weDFmN2ZlMTtsZXQgXzB4NGU4Mjg5PWZ1bmN0aW9uKF8weDFkZWFmOCxfMHgxNzViMGIpe3JldHVybiBfMHgxNzViMGItXzB4MWRlYWY4O30sXzB4NTI2MzBmO2lmKF8weDIzZmE5ZltfMHg0MDllMGQoMHgyMmIpXSlfMHg1MjYzMGY9ZnVuY3Rpb24oKXt2YXIgXzB4MzQzYmY9XzB4NDA5ZTBkO3JldHVybiBfMHgyM2ZhOWZbXzB4MzQzYmYoMHgyMmIpXVtfMHgzNDNiZigweDI1MSldKCk7fTtlbHNle2lmKF8weDIzZmE5ZltfMHg0MDllMGQoMHgyMTQpXSYmXzB4MjNmYTlmW18weDQwOWUwZCgweDIxNCldW18weDQwOWUwZCgweDI0OCldJiZfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjE0KV0/LltfMHg0MDllMGQoMHgxZjUpXT8uW18weDQwOWUwZCgweDFlNyldIT09XzB4NDA5ZTBkKDB4MTk2KSlfMHg1MjYzMGY9ZnVuY3Rpb24oKXt2YXIgXzB4M2YyMWI0PV8weDQwOWUwZDtyZXR1cm4gXzB4MjNmYTlmW18weDNmMjFiNCgweDIxNCldW18weDNmMjFiNCgweDI0OCldKCk7fSxfMHg0ZTgyODk9ZnVuY3Rpb24oXzB4NWJhMGZmLF8weDNmNzVmYil7cmV0dXJuIDB4M2U4KihfMHgzZjc1ZmJbMHgwXS1fMHg1YmEwZmZbMHgwXSkrKF8weDNmNzVmYlsweDFdLV8weDViYTBmZlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg4MzBmNDF9PXJlcXVpcmUoXzB4NDA5ZTBkKDB4MjBmKSk7XzB4NTI2MzBmPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDgzMGY0MVsnbm93J10oKTt9O31jYXRjaHtfMHg1MjYzMGY9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg0ZTgyODksJ3RpbWVTdGFtcCc6XzB4NTI2MzBmLCdub3cnOigpPT5EYXRlW18weDQwOWUwZCgweDI1MSldKCl9O31mdW5jdGlvbiBKKF8weDQyMjBjMSxfMHgyYWVmNzQsXzB4M2NmMDI5KXt2YXIgXzB4NTUxMjQ2PV8weDFmN2ZlMTtpZihfMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MWZmKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDIyMGMxWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTtsZXQgXzB4MTI4M2Y0PV8weDQyMjBjMVtfMHg1NTEyNDYoMHgyMTQpXT8uW18weDU1MTI0NigweDE4OSldPy5bXzB4NTUxMjQ2KDB4MWZjKV18fF8weDQyMjBjMVtfMHg1NTEyNDYoMHgyMTQpXT8uW18weDU1MTI0NigweDFmNSldPy5bJ05FWFRfUlVOVElNRSddPT09XzB4NTUxMjQ2KDB4MTk2KTtyZXR1cm4gXzB4MTI4M2Y0JiZfMHgzY2YwMjk9PT0nbnV4dCc/XzB4NDIyMGMxW18weDU1MTI0NigweDFmZildPSEweDE6XzB4NDIyMGMxW18weDU1MTI0NigweDFmZildPV8weDEyODNmNHx8IV8weDJhZWY3NHx8XzB4NDIyMGMxWydsb2NhdGlvbiddPy5bJ2hvc3RuYW1lJ10mJl8weDJhZWY3NFtfMHg1NTEyNDYoMHgxYmEpXShfMHg0MjIwYzFbJ2xvY2F0aW9uJ11bXzB4NTUxMjQ2KDB4MWM3KV0pLF8weDQyMjBjMVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107fWZ1bmN0aW9uIFkoXzB4NGEyMzFjLF8weDM5ZTU4YixfMHgyZTBiODMsXzB4MTJkZTBiKXt2YXIgXzB4MTFkMmZkPV8weDFmN2ZlMTtfMHg0YTIzMWM9XzB4NGEyMzFjLF8weDM5ZTU4Yj1fMHgzOWU1OGIsXzB4MmUwYjgzPV8weDJlMGI4MyxfMHgxMmRlMGI9XzB4MTJkZTBiO2xldCBfMHgzNWNiOTk9VyhfMHg0YTIzMWMpLF8weDI3ZmMxNT1fMHgzNWNiOTlbXzB4MTFkMmZkKDB4MWNiKV0sXzB4OWU0YzRkPV8weDM1Y2I5OVsndGltZVN0YW1wJ107Y2xhc3MgXzB4MzM4NzJme2NvbnN0cnVjdG9yKCl7dmFyIF8weDI1Nzc0Zj1fMHgxMWQyZmQ7dGhpc1tfMHgyNTc3NGYoMHgxZmEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbJ19udW1iZXJSZWdFeHAnXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MjU3NzRmKDB4MWFkKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1snX3VuZGVmaW5lZCddPV8weDRhMjMxY1tfMHgyNTc3NGYoMHgyNDApXSx0aGlzW18weDI1Nzc0ZigweDI1YSldPV8weDRhMjMxY1snSFRNTEFsbENvbGxlY3Rpb24nXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzW18weDI1Nzc0ZigweDI3NSldPU9iamVjdFtfMHgyNTc3NGYoMHgyNjIpXSx0aGlzWydfU3ltYm9sJ109XzB4NGEyMzFjWydTeW1ib2wnXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4MjU3NzRmKDB4MWEwKV1bJ3RvU3RyaW5nJ10sdGhpc1tfMHgyNTc3NGYoMHgxYzEpXT1EYXRlW18weDI1Nzc0ZigweDFhMCldW18weDI1Nzc0ZigweDFmZSldO31bXzB4MTFkMmZkKDB4MjNhKV0oXzB4MzgxMWNmLF8weDM1NjA2NCxfMHg0ZjJjMDQsXzB4MWVlZjIwKXt2YXIgXzB4NDQ5NzBjPV8weDExZDJmZCxfMHgyYzQyOGY9dGhpcyxfMHg0ZTliOTQ9XzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldO2Z1bmN0aW9uIF8weDU2YTlhNyhfMHg1NmVjYzYsXzB4NDUwMDlkLF8weDMwYWFlZSl7dmFyIF8weDRlMDA3NT1fMHg0NDk3MGM7XzB4NDUwMDlkWyd0eXBlJ109XzB4NGUwMDc1KDB4MWIyKSxfMHg0NTAwOWRbXzB4NGUwMDc1KDB4MjMwKV09XzB4NTZlY2M2W18weDRlMDA3NSgweDFiZSldLF8weDMwMzJiNj1fMHgzMGFhZWVbXzB4NGUwMDc1KDB4MWZjKV1bXzB4NGUwMDc1KDB4MjUzKV0sXzB4MzBhYWVlW18weDRlMDA3NSgweDFmYyldW18weDRlMDA3NSgweDI1MyldPV8weDQ1MDA5ZCxfMHgyYzQyOGZbXzB4NGUwMDc1KDB4MjE5KV0oXzB4NDUwMDlkLF8weDMwYWFlZSk7fXRyeXtfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc3KV0rKyxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc0KV0mJl8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNDUpXVtfMHg0NDk3MGMoMHgxZjMpXShfMHgzNTYwNjQpO3ZhciBfMHg0ODM5YmQsXzB4NGI0ZjYxLF8weDFlYmZlMSxfMHgyNDRkODAsXzB4YmU0ZDlhPVtdLF8weGRmYWM3YT1bXSxfMHgxNzA1YWYsXzB4M2UzZTdmPXRoaXNbXzB4NDQ5NzBjKDB4MTlkKV0oXzB4MzU2MDY0KSxfMHgxYzM2ZmU9XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWM5KSxfMHgxM2I1MzY9ITB4MSxfMHg1YjE0OGI9XzB4M2UzZTdmPT09J2Z1bmN0aW9uJyxfMHg1NzUzODQ9dGhpc1tfMHg0NDk3MGMoMHgxYTcpXShfMHgzZTNlN2YpLF8weDM0MjUwYz10aGlzWydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDNlM2U3ZiksXzB4M2U4NWUwPV8weDU3NTM4NHx8XzB4MzQyNTBjLF8weDI1YzMzOT17fSxfMHgxNmUwMzY9MHgwLF8weDNjYzVmZD0hMHgxLF8weDMwMzJiNixfMHg4ZGMzMGM9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyMjApXSl7aWYoXzB4MWMzNmZlKXtpZihfMHg0YjRmNjE9XzB4MzU2MDY0W18weDQ0OTcwYygweDIwZCldLF8weDRiNGY2MT5fMHg0ZjJjMDRbJ2VsZW1lbnRzJ10pe2ZvcihfMHgxZWJmZTE9MHgwLF8weDI0NGQ4MD1fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWUyKV0sXzB4NDgzOWJkPV8weDFlYmZlMTtfMHg0ODM5YmQ8XzB4MjQ0ZDgwO18weDQ4MzliZCsrKV8weGRmYWM3YVsncHVzaCddKF8weDJjNDI4ZlsnX2FkZFByb3BlcnR5J10oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4NDgzOWJkLF8weDRmMmMwNCkpO18weDM4MTFjZltfMHg0NDk3MGMoMHgxY2YpXT0hMHgwO31lbHNle2ZvcihfMHgxZWJmZTE9MHgwLF8weDI0NGQ4MD1fMHg0YjRmNjEsXzB4NDgzOWJkPV8weDFlYmZlMTtfMHg0ODM5YmQ8XzB4MjQ0ZDgwO18weDQ4MzliZCsrKV8weGRmYWM3YVtfMHg0NDk3MGMoMHgxZjMpXShfMHgyYzQyOGZbXzB4NDQ5NzBjKDB4MjNjKV0oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4NDgzOWJkLF8weDRmMmMwNCkpO31fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MTk1KV0rPV8weGRmYWM3YVtfMHg0NDk3MGMoMHgyMGQpXTt9aWYoIShfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxZjcpfHxfMHgzZTNlN2Y9PT0ndW5kZWZpbmVkJykmJiFfMHg1NzUzODQmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDI2NikmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDE5NykmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDI0Yikpe3ZhciBfMHhiOTlmM2M9XzB4MWVlZjIwW18weDQ0OTcwYygweDI3MyldfHxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjczKV07aWYodGhpc1tfMHg0NDk3MGMoMHgyMTEpXShfMHgzNTYwNjQpPyhfMHg0ODM5YmQ9MHgwLF8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMzcpXShmdW5jdGlvbihfMHgxOWMxNmEpe3ZhciBfMHhiYWU1NWU9XzB4NDQ5NzBjO2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO3JldHVybjt9aWYoIV8weDRmMmMwNFtfMHhiYWU1NWUoMHgyMjQpXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFtfMHhiYWU1NWUoMHgxOTUpXT5fMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MWQ1KV0pe18weDNjYzVmZD0hMHgwO3JldHVybjt9XzB4ZGZhYzdhW18weGJhZTU1ZSgweDFmMyldKF8weDJjNDI4ZltfMHhiYWU1NWUoMHgyM2MpXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weGJhZTU1ZSgweDFiNCksXzB4NDgzOWJkKyssXzB4NGYyYzA0LGZ1bmN0aW9uKF8weDIzMmExNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDIzMmExNzt9O30oXzB4MTljMTZhKSkpO30pKTp0aGlzW18weDQ0OTcwYygweDFjYSldKF8weDM1NjA2NCkmJl8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMzcpXShmdW5jdGlvbihfMHg0OWU1YTgsXzB4MTRiZjkyKXt2YXIgXzB4MjFjMjg5PV8weDQ0OTcwYztpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbXzB4MjFjMjg5KDB4MTk1KV0rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fWlmKCFfMHg0ZjJjMDRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFtfMHgyMWMyODkoMHgxOTUpXT5fMHg0ZjJjMDRbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fXZhciBfMHg1Nzg1OGI9XzB4MTRiZjkyW18weDIxYzI4OSgweDFmZSldKCk7XzB4NTc4NThiW18weDIxYzI4OSgweDIwZCldPjB4NjQmJihfMHg1Nzg1OGI9XzB4NTc4NThiW18weDIxYzI4OSgweDFhNSldKDB4MCwweDY0KStfMHgyMWMyODkoMHgxZDkpKSxfMHhkZmFjN2FbXzB4MjFjMjg5KDB4MWYzKV0oXzB4MmM0MjhmW18weDIxYzI4OSgweDIzYyldKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4MjFjMjg5KDB4MWU0KSxfMHg1Nzg1OGIsXzB4NGYyYzA0LGZ1bmN0aW9uKF8weDMxMWMzOCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMxMWMzODt9O30oXzB4NDllNWE4KSkpO30pLCFfMHgxM2I1MzYpe3RyeXtmb3IoXzB4MTcwNWFmIGluIF8weDM1NjA2NClpZighKF8weDFjMzZmZSYmXzB4OGRjMzBjWyd0ZXN0J10oXzB4MTcwNWFmKSkmJiF0aGlzW18weDQ0OTcwYygweDIwZSldKF8weDM1NjA2NCxfMHgxNzA1YWYsXzB4NGYyYzA0KSl7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0W18weDQ0OTcwYygweDE5NSldKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fWlmKCFfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4NGYyYzA0W18weDQ0OTcwYygweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9XzB4ZGZhYzdhW18weDQ0OTcwYygweDFmMyldKF8weDJjNDI4ZlsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4YmU0ZDlhLF8weDI1YzMzOSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDE3MDVhZixfMHg0ZjJjMDQpKTt9fWNhdGNoe31pZihfMHgyNWMzMzlbXzB4NDQ5NzBjKDB4MjJmKV09ITB4MCxfMHg1YjE0OGImJihfMHgyNWMzMzlbJ19wX25hbWUnXT0hMHgwKSwhXzB4M2NjNWZkKXt2YXIgXzB4OWUzMT1bXVtfMHg0NDk3MGMoMHgyNWMpXSh0aGlzW18weDQ0OTcwYygweDI3NSldKF8weDM1NjA2NCkpW18weDQ0OTcwYygweDI1YyldKHRoaXNbXzB4NDQ5NzBjKDB4MjFlKV0oXzB4MzU2MDY0KSk7Zm9yKF8weDQ4MzliZD0weDAsXzB4NGI0ZjYxPV8weDllMzFbXzB4NDQ5NzBjKDB4MjBkKV07XzB4NDgzOWJkPF8weDRiNGY2MTtfMHg0ODM5YmQrKylpZihfMHgxNzA1YWY9XzB4OWUzMVtfMHg0ODM5YmRdLCEoXzB4MWMzNmZlJiZfMHg4ZGMzMGNbXzB4NDQ5NzBjKDB4MjJjKV0oXzB4MTcwNWFmW18weDQ0OTcwYygweDFmZSldKCkpKSYmIXRoaXNbXzB4NDQ5NzBjKDB4MjBlKV0oXzB4MzU2MDY0LF8weDE3MDVhZixfMHg0ZjJjMDQpJiYhXzB4MjVjMzM5W18weDQ0OTcwYygweDFhMSkrXzB4MTcwNWFmW18weDQ0OTcwYygweDFmZSldKCldKXtpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9aWYoIV8weDRmMmMwNFtfMHg0NDk3MGMoMHgyMjQpXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWQ1KV0pe18weDNjYzVmZD0hMHgwO2JyZWFrO31fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MmM0MjhmW18weDQ0OTcwYygweDI1NyldKF8weGJlNGQ5YSxfMHgyNWMzMzksXzB4MzU2MDY0LF8weDNlM2U3ZixfMHgxNzA1YWYsXzB4NGYyYzA0KSk7fX19fX1pZihfMHgzODExY2ZbJ3R5cGUnXT1fMHgzZTNlN2YsXzB4M2U4NWUwPyhfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWQzKV09XzB4MzU2MDY0W18weDQ0OTcwYygweDIyZCldKCksdGhpc1tfMHg0NDk3MGMoMHgxZGMpXShfMHgzZTNlN2YsXzB4MzgxMWNmLF8weDRmMmMwNCxfMHgxZWVmMjApKTpfMHgzZTNlN2Y9PT0nZGF0ZSc/XzB4MzgxMWNmWyd2YWx1ZSddPXRoaXNbXzB4NDQ5NzBjKDB4MWMxKV1bJ2NhbGwnXShfMHgzNTYwNjQpOl8weDNlM2U3Zj09PV8weDQ0OTcwYygweDI0Yik/XzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgxZmUpXSgpOl8weDNlM2U3Zj09PSdSZWdFeHAnP18weDM4MTFjZlsndmFsdWUnXT10aGlzW18weDQ0OTcwYygweDFlOSldW18weDQ0OTcwYygweDIxZCldKF8weDM1NjA2NCk6XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWVmKSYmdGhpc1tfMHg0NDk3MGMoMHgxYmIpXT9fMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWQzKV09dGhpc1snX1N5bWJvbCddW18weDQ0OTcwYygweDFhMCldW18weDQ0OTcwYygweDFmZSldW18weDQ0OTcwYygweDIxZCldKF8weDM1NjA2NCk6IV8weDRmMmMwNFsnZGVwdGgnXSYmIShfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxZjcpfHxfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgyNDApKSYmKGRlbGV0ZSBfMHgzODExY2ZbJ3ZhbHVlJ10sXzB4MzgxMWNmWydjYXBwZWQnXT0hMHgwKSxfMHgzY2M1ZmQmJihfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MjM0KV09ITB4MCksXzB4MzAzMmI2PV8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZmMpXVtfMHg0NDk3MGMoMHgyNTMpXSxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWZjKV1bXzB4NDQ5NzBjKDB4MjUzKV09XzB4MzgxMWNmLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzODExY2YsXzB4NGYyYzA0KSxfMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV0pe2ZvcihfMHg0ODM5YmQ9MHgwLF8weDRiNGY2MT1fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV07XzB4NDgzOWJkPF8weDRiNGY2MTtfMHg0ODM5YmQrKylfMHhkZmFjN2FbXzB4NDgzOWJkXShfMHg0ODM5YmQpO31fMHhiZTRkOWFbJ2xlbmd0aCddJiYoXzB4MzgxMWNmW18weDQ0OTcwYygweDI3MyldPV8weGJlNGQ5YSk7fWNhdGNoKF8weDM3MGQ0NCl7XzB4NTZhOWE3KF8weDM3MGQ0NCxfMHgzODExY2YsXzB4NGYyYzA0KTt9cmV0dXJuIHRoaXNbXzB4NDQ5NzBjKDB4MjY5KV0oXzB4MzU2MDY0LF8weDM4MTFjZiksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MzgxMWNmLF8weDRmMmMwNCksXzB4NGYyYzA0W18weDQ0OTcwYygweDFmYyldW18weDQ0OTcwYygweDI1MyldPV8weDMwMzJiNixfMHg0ZjJjMDRbJ2xldmVsJ10tLSxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXT1fMHg0ZTliOTQsXzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldJiZfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjQ1KV1bXzB4NDQ5NzBjKDB4MWUwKV0oKSxfMHgzODExY2Y7fVtfMHgxMWQyZmQoMHgyMWUpXShfMHg0OGI3ZDYpe3ZhciBfMHgzZGUzMDc9XzB4MTFkMmZkO3JldHVybiBPYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddP09iamVjdFtfMHgzZGUzMDcoMHgyMWEpXShfMHg0OGI3ZDYpOltdO31bXzB4MTFkMmZkKDB4MjExKV0oXzB4Mzc2M2U0KXt2YXIgXzB4NTViOGExPV8weDExZDJmZDtyZXR1cm4hIShfMHgzNzYzZTQmJl8weDRhMjMxY1tfMHg1NWI4YTEoMHgxYjQpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4Mzc2M2U0KT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHgzNzYzZTRbXzB4NTViOGExKDB4MjM3KV0pO31bXzB4MTFkMmZkKDB4MjBlKV0oXzB4NDc2OWU0LF8weDQ4Y2Y3OSxfMHg1YTQyZTgpe3ZhciBfMHgyOGMwMTQ9XzB4MTFkMmZkO3JldHVybiBfMHg1YTQyZThbXzB4MjhjMDE0KDB4MjI3KV0/dHlwZW9mIF8weDQ3NjllNFtfMHg0OGNmNzldPT1fMHgyOGMwMTQoMHgxYmQpOiEweDE7fVsnX3R5cGUnXShfMHg0OWRmZGQpe3ZhciBfMHg1NTE3M2E9XzB4MTFkMmZkLF8weDkxMjI5Mj0nJztyZXR1cm4gXzB4OTEyMjkyPXR5cGVvZiBfMHg0OWRmZGQsXzB4OTEyMjkyPT09XzB4NTUxNzNhKDB4MTk4KT90aGlzW18weDU1MTczYSgweDFhYSldKF8weDQ5ZGZkZCk9PT1fMHg1NTE3M2EoMHgxZTYpP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgxYzkpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQ5ZGZkZCk9PT0nW29iamVjdFxcXFx4MjBEYXRlXSc/XzB4OTEyMjkyPSdkYXRlJzp0aGlzW18weDU1MTczYSgweDFhYSldKF8weDQ5ZGZkZCk9PT1fMHg1NTE3M2EoMHgyNDIpP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgyNGIpOl8weDQ5ZGZkZD09PW51bGw/XzB4OTEyMjkyPV8weDU1MTczYSgweDFmNyk6XzB4NDlkZmRkW18weDU1MTczYSgweDI3MCldJiYoXzB4OTEyMjkyPV8weDQ5ZGZkZFsnY29uc3RydWN0b3InXVtfMHg1NTE3M2EoMHgyMDYpXXx8XzB4OTEyMjkyKTpfMHg5MTIyOTI9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHg1NTE3M2EoMHgyNWEpXSYmXzB4NDlkZmRkIGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHg5MTIyOTI9XzB4NTUxNzNhKDB4MjE3KSksXzB4OTEyMjkyO31bXzB4MTFkMmZkKDB4MWFhKV0oXzB4NDNkNDE0KXt2YXIgXzB4NTdkZTQwPV8weDExZDJmZDtyZXR1cm4gT2JqZWN0W18weDU3ZGU0MCgweDFhMCldW18weDU3ZGU0MCgweDFmZSldW18weDU3ZGU0MCgweDIxZCldKF8weDQzZDQxNCk7fVtfMHgxMWQyZmQoMHgxYTcpXShfMHhjZGFlYjcpe3ZhciBfMHgxOTIzMzQ9XzB4MTFkMmZkO3JldHVybiBfMHhjZGFlYjc9PT0nYm9vbGVhbid8fF8weGNkYWViNz09PV8weDE5MjMzNCgweDFkYSl8fF8weGNkYWViNz09PSdudW1iZXInO31bXzB4MTFkMmZkKDB4MThjKV0oXzB4NWNhMjdmKXt2YXIgXzB4MzQ2MDc4PV8weDExZDJmZDtyZXR1cm4gXzB4NWNhMjdmPT09J0Jvb2xlYW4nfHxfMHg1Y2EyN2Y9PT1fMHgzNDYwNzgoMHgyNjYpfHxfMHg1Y2EyN2Y9PT1fMHgzNDYwNzgoMHgyMmEpO31bXzB4MTFkMmZkKDB4MjNjKV0oXzB4MWI4NzA2LF8weDQ4MTllMSxfMHg0ZWUzZmIsXzB4NWE3YTcwLF8weDEwN2IwNSxfMHg0ZWE2ZTEpe3ZhciBfMHg1ZDdlMjI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MmI1ODBiKXt2YXIgXzB4NDcyOTBmPV8weDM3ZTQsXzB4ZmNjMTdhPV8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgyNTMpXSxfMHgxOTRkMzA9XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDE5MSldLF8weDFmZWRmZD1fMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bJ3BhcmVudCddO18weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgyMzgpXT1fMHhmY2MxN2EsXzB4MTA3YjA1Wydub2RlJ11bXzB4NDcyOTBmKDB4MTkxKV09dHlwZW9mIF8weDVhN2E3MD09J251bWJlcic/XzB4NWE3YTcwOl8weDJiNTgwYixfMHgxYjg3MDZbXzB4NDcyOTBmKDB4MWYzKV0oXzB4NWQ3ZTIyW18weDQ3MjkwZigweDI2NyldKF8weDQ4MTllMSxfMHg0ZWUzZmIsXzB4NWE3YTcwLF8weDEwN2IwNSxfMHg0ZWE2ZTEpKSxfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bJ3BhcmVudCddPV8weDFmZWRmZCxfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MTkxKV09XzB4MTk0ZDMwO307fVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MTY1ODhiLF8weDExY2VhNyxfMHgxM2I2ZWYsXzB4MzgwMzEwLF8weDFjMDFkNCxfMHg0ZDRiNmIsXzB4N2ZlY2E2KXt2YXIgXzB4MjQzZTUwPV8weDExZDJmZCxfMHg0NGFiYmE9dGhpcztyZXR1cm4gXzB4MTFjZWE3W18weDI0M2U1MCgweDFhMSkrXzB4MWMwMWQ0W18weDI0M2U1MCgweDFmZSldKCldPSEweDAsZnVuY3Rpb24oXzB4MWY0ZDUxKXt2YXIgXzB4NGJkYzFmPV8weDI0M2U1MCxfMHg0NGQyODM9XzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDI1MyldLF8weDRmYjgyOD1fMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MTkxKV0sXzB4MzE2OWQ3PV8weDRkNGI2Ylsnbm9kZSddW18weDRiZGMxZigweDIzOCldO18weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVsncGFyZW50J109XzB4NDRkMjgzLF8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgxOTEpXT1fMHgxZjRkNTEsXzB4MTY1ODhiWydwdXNoJ10oXzB4NDRhYmJhW18weDRiZGMxZigweDI2NyldKF8weDEzYjZlZixfMHgzODAzMTAsXzB4MWMwMWQ0LF8weDRkNGI2YixfMHg3ZmVjYTYpKSxfMHg0ZDRiNmJbJ25vZGUnXVtfMHg0YmRjMWYoMHgyMzgpXT1fMHgzMTY5ZDcsXzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDE5MSldPV8weDRmYjgyODt9O31bXzB4MTFkMmZkKDB4MjY3KV0oXzB4MmVlMmY5LF8weDUwNGM2MyxfMHgyYmU4MzksXzB4NWQ0YmZlLF8weDQ2Njc3Mil7dmFyIF8weDI4MGY2ZT1fMHgxMWQyZmQsXzB4YzZhZmUwPXRoaXM7XzB4NDY2NzcyfHwoXzB4NDY2NzcyPWZ1bmN0aW9uKF8weGU3ZmRmLF8weDQ0MTk0Zil7cmV0dXJuIF8weGU3ZmRmW18weDQ0MTk0Zl07fSk7dmFyIF8weDI5ODEwMz1fMHgyYmU4MzlbXzB4MjgwZjZlKDB4MWZlKV0oKSxfMHgyOGY1OTQ9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldfHx7fSxfMHg1Yzc5YTg9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldLF8weDIwYmViYz1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjI0KV07dHJ5e3ZhciBfMHgyN2YxNTM9dGhpc1tfMHgyODBmNmUoMHgxY2EpXShfMHgyZWUyZjkpLF8weDE0MTc4YT1fMHgyOTgxMDM7XzB4MjdmMTUzJiZfMHgxNDE3OGFbMHgwXT09PSdcXFxceDI3JyYmKF8weDE0MTc4YT1fMHgxNDE3OGFbJ3N1YnN0ciddKDB4MSxfMHgxNDE3OGFbXzB4MjgwZjZlKDB4MjBkKV0tMHgyKSk7dmFyIF8weDEyNjM3MT1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjEwKV09XzB4MjhmNTk0WydfcF8nK18weDE0MTc4YV07XzB4MTI2MzcxJiYoXzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldPV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXSsweDEpLF8weDVkNGJmZVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MTI2MzcxO3ZhciBfMHgyMzk1Nzk9dHlwZW9mIF8weDJiZTgzOT09XzB4MjgwZjZlKDB4MWVmKSxfMHgyMDc1YjU9eyduYW1lJzpfMHgyMzk1Nzl8fF8weDI3ZjE1Mz9fMHgyOTgxMDM6dGhpc1tfMHgyODBmNmUoMHgyNzEpXShfMHgyOTgxMDMpfTtpZihfMHgyMzk1NzkmJihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWVmKV09ITB4MCksIShfMHg1MDRjNjM9PT0nYXJyYXknfHxfMHg1MDRjNjM9PT1fMHgyODBmNmUoMHgxYTYpKSl7dmFyIF8weDNkMmQ4ZT10aGlzW18weDI4MGY2ZSgweDI1ZCldKF8weDJlZTJmOSxfMHgyYmU4MzkpO2lmKF8weDNkMmQ4ZSYmKF8weDNkMmQ4ZVtfMHgyODBmNmUoMHgxOTkpXSYmKF8weDIwNzViNVtfMHgyODBmNmUoMHgyNWUpXT0hMHgwKSxfMHgzZDJkOGVbXzB4MjgwZjZlKDB4MjM5KV0mJiFfMHgxMjYzNzEmJiFfMHg1ZDRiZmVbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWM2KV09ITB4MCx0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUpLF8weDIwNzViNTt9dmFyIF8weDIxNmYzNTt0cnl7XzB4MjE2ZjM1PV8weDQ2Njc3MihfMHgyZWUyZjksXzB4MmJlODM5KTt9Y2F0Y2goXzB4NTBmNTU4KXtyZXR1cm4gXzB4MjA3NWI1PXsnbmFtZSc6XzB4Mjk4MTAzLCd0eXBlJzpfMHgyODBmNmUoMHgxYjIpLCdlcnJvcic6XzB4NTBmNTU4W18weDI4MGY2ZSgweDFiZSldfSx0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUpLF8weDIwNzViNTt9dmFyIF8weDRkYzI0OT10aGlzW18weDI4MGY2ZSgweDE5ZCldKF8weDIxNmYzNSksXzB4NWU4NjNhPXRoaXNbXzB4MjgwZjZlKDB4MWE3KV0oXzB4NGRjMjQ5KTtpZihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWY5KV09XzB4NGRjMjQ5LF8weDVlODYzYSl0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUsXzB4MjE2ZjM1LGZ1bmN0aW9uKCl7dmFyIF8weDVjYTQwZj1fMHgyODBmNmU7XzB4MjA3NWI1W18weDVjYTQwZigweDFkMyldPV8weDIxNmYzNVtfMHg1Y2E0MGYoMHgyMmQpXSgpLCFfMHgxMjYzNzEmJl8weGM2YWZlMFtfMHg1Y2E0MGYoMHgxZGMpXShfMHg0ZGMyNDksXzB4MjA3NWI1LF8weDVkNGJmZSx7fSk7fSk7ZWxzZXt2YXIgXzB4MWU1NGRiPV8weDVkNGJmZVsnYXV0b0V4cGFuZCddJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4Mjc3KV08XzB4NWQ0YmZlW18weDI4MGY2ZSgweDI2OCldJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjQ1KV1bXzB4MjgwZjZlKDB4MjM2KV0oXzB4MjE2ZjM1KTwweDAmJl8weDRkYzI0OSE9PV8weDI4MGY2ZSgweDFiZCkmJl8weDVkNGJmZVtfMHgyODBmNmUoMHgxOTUpXTxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MWQ1KV07XzB4MWU1NGRifHxfMHg1ZDRiZmVbJ2xldmVsJ108XzB4NWM3OWE4fHxfMHgxMjYzNzE/KHRoaXNbXzB4MjgwZjZlKDB4MjNhKV0oXzB4MjA3NWI1LF8weDIxNmYzNSxfMHg1ZDRiZmUsXzB4MTI2MzcxfHx7fSksdGhpc1tfMHgyODBmNmUoMHgyNjkpXShfMHgyMTZmMzUsXzB4MjA3NWI1KSk6dGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlLF8weDIxNmYzNSxmdW5jdGlvbigpe3ZhciBfMHg1MTk1MDQ9XzB4MjgwZjZlO18weDRkYzI0OT09PV8weDUxOTUwNCgweDFmNyl8fF8weDRkYzI0OT09PV8weDUxOTUwNCgweDI0MCl8fChkZWxldGUgXzB4MjA3NWI1W18weDUxOTUwNCgweDFkMyldLF8weDIwNzViNVtfMHg1MTk1MDQoMHgyM2YpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDIwNzViNTt9ZmluYWxseXtfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjEwKV09XzB4MjhmNTk0LF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXT1fMHg1Yzc5YTgsXzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyNCldPV8weDIwYmViYzt9fVsnX2NhcElmU3RyaW5nJ10oXzB4M2ZjNmNlLF8weDQ3OGI2MSxfMHgxMTM1MWUsXzB4M2ViMTA5KXt2YXIgXzB4NDViYjdjPV8weDExZDJmZCxfMHgxOTYyMjM9XzB4M2ViMTA5WydzdHJMZW5ndGgnXXx8XzB4MTEzNTFlWydzdHJMZW5ndGgnXTtpZigoXzB4M2ZjNmNlPT09J3N0cmluZyd8fF8weDNmYzZjZT09PV8weDQ1YmI3YygweDI2NikpJiZfMHg0NzhiNjFbXzB4NDViYjdjKDB4MWQzKV0pe2xldCBfMHg1ODMyZGQ9XzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldW18weDQ1YmI3YygweDIwZCldO18weDExMzUxZVtfMHg0NWJiN2MoMHgxZGQpXSs9XzB4NTgzMmRkLF8weDExMzUxZVsnYWxsU3RyTGVuZ3RoJ10+XzB4MTEzNTFlW18weDQ1YmI3YygweDFlYildPyhfMHg0NzhiNjFbXzB4NDViYjdjKDB4MjNmKV09JycsZGVsZXRlIF8weDQ3OGI2MVsndmFsdWUnXSk6XzB4NTgzMmRkPl8weDE5NjIyMyYmKF8weDQ3OGI2MVtfMHg0NWJiN2MoMHgyM2YpXT1fMHg0NzhiNjFbXzB4NDViYjdjKDB4MWQzKV1bJ3N1YnN0ciddKDB4MCxfMHgxOTYyMjMpLGRlbGV0ZSBfMHg0NzhiNjFbJ3ZhbHVlJ10pO319W18weDExZDJmZCgweDFjYSldKF8weDM2ZWE1OCl7dmFyIF8weDRlMTg1Mz1fMHgxMWQyZmQ7cmV0dXJuISEoXzB4MzZlYTU4JiZfMHg0YTIzMWNbXzB4NGUxODUzKDB4MWU0KV0mJnRoaXNbXzB4NGUxODUzKDB4MWFhKV0oXzB4MzZlYTU4KT09PV8weDRlMTg1MygweDIzMykmJl8weDM2ZWE1OFtfMHg0ZTE4NTMoMHgyMzcpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDg4OWQwOCl7dmFyIF8weDJhOWUwZj1fMHgxMWQyZmQ7aWYoXzB4ODg5ZDA4W18weDJhOWUwZigweDI0YSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg4ODlkMDg7dmFyIF8weDViZTlmMzt0cnl7XzB4NWJlOWYzPUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDg4OWQwOCk7fWNhdGNoe18weDViZTlmMz0nXFxcXHgyMicrdGhpc1tfMHgyYTllMGYoMHgxYWEpXShfMHg4ODlkMDgpKydcXFxceDIyJzt9cmV0dXJuIF8weDViZTlmM1snbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDViZTlmMz1fMHg1YmU5ZjNbJ3N1YnN0ciddKDB4MSxfMHg1YmU5ZjNbXzB4MmE5ZTBmKDB4MjBkKV0tMHgyKTpfMHg1YmU5ZjM9XzB4NWJlOWYzW18weDJhOWUwZigweDI2MCldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbJ3JlcGxhY2UnXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg1YmU5ZjM7fVtfMHgxMWQyZmQoMHgxZDApXShfMHgyMjNjMzgsXzB4ZWUzNzhlLF8weGNlZDk4NixfMHg0ODAzYzIpe3ZhciBfMHg4NDgwYWU9XzB4MTFkMmZkO3RoaXNbXzB4ODQ4MGFlKDB4MjE5KV0oXzB4MjIzYzM4LF8weGVlMzc4ZSksXzB4NDgwM2MyJiZfMHg0ODAzYzIoKSx0aGlzW18weDg0ODBhZSgweDI2OSldKF8weGNlZDk4NixfMHgyMjNjMzgpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDIyM2MzOCxfMHhlZTM3OGUpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgxM2MwMTEsXzB4MzFmYzdjKXt2YXIgXzB4Mzk0ZTgxPV8weDExZDJmZDt0aGlzW18weDM5NGU4MSgweDFlYSldKF8weDEzYzAxMSxfMHgzMWZjN2MpLHRoaXNbXzB4Mzk0ZTgxKDB4MjIzKV0oXzB4MTNjMDExLF8weDMxZmM3YyksdGhpc1tfMHgzOTRlODEoMHgxOTIpXShfMHgxM2MwMTEsXzB4MzFmYzdjKSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MTNjMDExLF8weDMxZmM3Yyk7fVtfMHgxMWQyZmQoMHgxZWEpXShfMHgxMTVjNWMsXzB4MWM4MzU1KXt9W18weDExZDJmZCgweDIyMyldKF8weDU0YmJjZSxfMHgxNzljZjQpe31bXzB4MTFkMmZkKDB4MWIwKV0oXzB4NDc5NTkwLF8weDI1OGRkZSl7fVtfMHgxMWQyZmQoMHgxYTgpXShfMHgzMGQ1NzEpe3ZhciBfMHgzYzM2YmY9XzB4MTFkMmZkO3JldHVybiBfMHgzMGQ1NzE9PT10aGlzW18weDNjMzZiZigweDI0ZildO31bXzB4MTFkMmZkKDB4MWQ4KV0oXzB4MWU0OThlLF8weDQyNTE3OCl7dmFyIF8weDU1Mzg5Yj1fMHgxMWQyZmQ7dGhpc1tfMHg1NTM4OWIoMHgxYjApXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDFlNDk4ZSksXzB4NDI1MTc4W18weDU1Mzg5YigweDI0OSldJiZ0aGlzWydfc29ydFByb3BzJ10oXzB4MWU0OThlKSx0aGlzW18weDU1Mzg5YigweDIxOCldKF8weDFlNDk4ZSxfMHg0MjUxNzgpLHRoaXNbJ19hZGRMb2FkTm9kZSddKF8weDFlNDk4ZSxfMHg0MjUxNzgpLHRoaXNbXzB4NTUzODliKDB4MTliKV0oXzB4MWU0OThlKTt9WydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NDQ2YzMzLF8weDUxMDBlMSl7dmFyIF8weGE2MTJkND1fMHgxMWQyZmQ7bGV0IF8weDRjMTcxYzt0cnl7XzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildJiYoXzB4NGMxNzFjPV8weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXVtfMHhhNjEyZDQoMHgyMzApXSxfMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV09ZnVuY3Rpb24oKXt9KSxfMHg0NDZjMzMmJnR5cGVvZiBfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjBkKV09PV8weGE2MTJkNCgweDFlMykmJihfMHg1MTAwZTFbJ2xlbmd0aCddPV8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMGQpXSk7fWNhdGNoe31maW5hbGx5e18weDRjMTcxYyYmKF8weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXVtfMHhhNjEyZDQoMHgyMzApXT1fMHg0YzE3MWMpO31pZihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWY5KV09PT1fMHhhNjEyZDQoMHgxZTMpfHxfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWY5KV09PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldKSlfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWJmKV09ITB4MCxkZWxldGUgXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldO2Vsc2Ugc3dpdGNoKF8weDUxMDBlMVsndmFsdWUnXSl7Y2FzZSBOdW1iZXJbXzB4YTYxMmQ0KDB4MjUyKV06XzB4NTEwMGUxW18weGE2MTJkNCgweDIyZSldPSEweDAsZGVsZXRlIF8weDUxMDBlMVsndmFsdWUnXTticmVhaztjYXNlIE51bWJlcltfMHhhNjEyZDQoMHgxY2UpXTpfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWJjKV09ITB4MCxkZWxldGUgXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4YTYxMmQ0KDB4MjAyKV0oXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldKSYmKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZWUpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09XzB4YTYxMmQ0KDB4MWJkKSYmdHlwZW9mIF8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXT09J3N0cmluZycmJl8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXSYmXzB4NTEwMGUxWyduYW1lJ10mJl8weDQ0NmMzM1snbmFtZSddIT09XzB4NTEwMGUxW18weGE2MTJkNCgweDIwNildJiYoXzB4NTEwMGUxW18weGE2MTJkNCgweDFiMyldPV8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4NTljOWJhKXtyZXR1cm4gMHgxL18weDU5YzliYT09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9Wydfc29ydFByb3BzJ10oXzB4MTk0YjIyKXt2YXIgXzB4NDg5NzYyPV8weDExZDJmZDshXzB4MTk0YjIyWydwcm9wcyddfHwhXzB4MTk0YjIyW18weDQ4OTc2MigweDI3MyldW18weDQ4OTc2MigweDIwZCldfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxYzkpfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxZTQpfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxYjQpfHxfMHgxOTRiMjJbJ3Byb3BzJ11bXzB4NDg5NzYyKDB4MjRkKV0oZnVuY3Rpb24oXzB4NTc1MGYxLF8weDJlYjczOCl7dmFyIF8weDc2ZjhhYz1fMHg0ODk3NjIsXzB4NWIyYmI4PV8weDU3NTBmMVtfMHg3NmY4YWMoMHgyMDYpXVtfMHg3NmY4YWMoMHgyNGUpXSgpLF8weDRhNGY4Zj1fMHgyZWI3MzhbXzB4NzZmOGFjKDB4MjA2KV1bJ3RvTG93ZXJDYXNlJ10oKTtyZXR1cm4gXzB4NWIyYmI4PF8weDRhNGY4Zj8tMHgxOl8weDViMmJiOD5fMHg0YTRmOGY/MHgxOjB4MDt9KTt9W18weDExZDJmZCgweDIxOCldKF8weDFjNTY5MixfMHg1OTQxZDIpe3ZhciBfMHg2ZGRjNjM9XzB4MTFkMmZkO2lmKCEoXzB4NTk0MWQyW18weDZkZGM2MygweDIyNyldfHwhXzB4MWM1NjkyW18weDZkZGM2MygweDI3MyldfHwhXzB4MWM1NjkyWydwcm9wcyddWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4Mzk3ODE4PVtdLF8weDFiYjBkNj1bXSxfMHhjZjYzZjk9MHgwLF8weDUyMmFlZD1fMHgxYzU2OTJbXzB4NmRkYzYzKDB4MjczKV1bXzB4NmRkYzYzKDB4MjBkKV07XzB4Y2Y2M2Y5PF8weDUyMmFlZDtfMHhjZjYzZjkrKyl7dmFyIF8weDViNjZlYT1fMHgxYzU2OTJbJ3Byb3BzJ11bXzB4Y2Y2M2Y5XTtfMHg1YjY2ZWFbXzB4NmRkYzYzKDB4MWY5KV09PT1fMHg2ZGRjNjMoMHgxYmQpP18weDM5NzgxOFtfMHg2ZGRjNjMoMHgxZjMpXShfMHg1YjY2ZWEpOl8weDFiYjBkNltfMHg2ZGRjNjMoMHgxZjMpXShfMHg1YjY2ZWEpO31pZighKCFfMHgxYmIwZDZbJ2xlbmd0aCddfHxfMHgzOTc4MThbXzB4NmRkYzYzKDB4MjBkKV08PTB4MSkpe18weDFjNTY5MltfMHg2ZGRjNjMoMHgyNzMpXT1fMHgxYmIwZDY7dmFyIF8weDRkOGVmZD17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzOTc4MTh9O3RoaXNbXzB4NmRkYzYzKDB4MWVhKV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksdGhpc1tfMHg2ZGRjNjMoMHgxYjApXShfMHg0ZDhlZmQsXzB4NTk0MWQyKSx0aGlzW18weDZkZGM2MygweDI0MyldKF8weDRkOGVmZCksdGhpc1tfMHg2ZGRjNjMoMHgxZjgpXShfMHg0ZDhlZmQsXzB4NTk0MWQyKSxfMHg0ZDhlZmRbJ2lkJ10rPSdcXFxceDIwZicsXzB4MWM1NjkyWydwcm9wcyddW18weDZkZGM2MygweDIwNyldKF8weDRkOGVmZCk7fX19W18weDExZDJmZCgweDFlMSldKF8weDFjN2FkMCxfMHgyOTdiNmQpe31bXzB4MTFkMmZkKDB4MjQzKV0oXzB4MmY1MDg3KXt9W18weDExZDJmZCgweDI1NSldKF8weDQwMTY5OCl7dmFyIF8weDNmZGI5MT1fMHgxMWQyZmQ7cmV0dXJuIEFycmF5W18weDNmZGI5MSgweDFhYyldKF8weDQwMTY5OCl8fHR5cGVvZiBfMHg0MDE2OTg9PV8weDNmZGI5MSgweDE5OCkmJnRoaXNbXzB4M2ZkYjkxKDB4MWFhKV0oXzB4NDAxNjk4KT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc7fVtfMHgxMWQyZmQoMHgxZjgpXShfMHgxNTIxNjIsXzB4MWVkNTc0KXt9W18weDExZDJmZCgweDE5YildKF8weDE2MTI1Myl7dmFyIF8weDY3OWEwYz1fMHgxMWQyZmQ7ZGVsZXRlIF8weDE2MTI1M1tfMHg2NzlhMGMoMHgyMWYpXSxkZWxldGUgXzB4MTYxMjUzWydfaGFzU2V0T25JdHNQYXRoJ10sZGVsZXRlIF8weDE2MTI1M1tfMHg2NzlhMGMoMHgxZmQpXTt9W18weDExZDJmZCgweDE5MildKF8weDQzYTkxYyxfMHg0YjFjZWYpe319bGV0IF8weDE2OThkYT1uZXcgXzB4MzM4NzJmKCksXzB4NDMzNmQ4PXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDUwNzM2OD17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDIzYzJiZShfMHgxOWZjZDIsXzB4NDUzNDUxLF8weDE4MWI2ZCxfMHgyYTA4YjMsXzB4NGI0MzRlLF8weDU0MTg1ZCl7dmFyIF8weDkyMTBkNT1fMHgxMWQyZmQ7bGV0IF8weDViNDRmMCxfMHgzNjcxNWI7dHJ5e18weDM2NzE1Yj1fMHg5ZTRjNGQoKSxfMHg1YjQ0ZjA9XzB4MmUwYjgzW18weDQ1MzQ1MV0sIV8weDViNDRmMHx8XzB4MzY3MTViLV8weDViNDRmMFsndHMnXT4weDFmNCYmXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildJiZfMHg1YjQ0ZjBbJ3RpbWUnXS9fMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV08MHg2ND8oXzB4MmUwYjgzW18weDQ1MzQ1MV09XzB4NWI0NGYwPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MzY3MTVifSxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV09e30pOl8weDM2NzE1Yi1fMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bJ3RzJ10+MHgzMiYmXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDIyNildJiZfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWFlKV0vXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldWydjb3VudCddPDB4NjQmJihfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV09e30pO2xldCBfMHg3MjkzYTA9W10sXzB4MzYyOTZiPV8weDViNDRmMFsncmVkdWNlTGltaXRzJ118fF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYjYpXT9fMHg1MDczNjg6XzB4NDMzNmQ4LF8weDI0N2JlYj1fMHgyMTdhNDc9Pnt2YXIgXzB4NGE4OWEyPV8weDkyMTBkNTtsZXQgXzB4NTQxNDU0PXt9O3JldHVybiBfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjczKV09XzB4MjE3YTQ3W18weDRhODlhMigweDI3MyldLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZTIpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MWUyKV0sXzB4NTQxNDU0W18weDRhODlhMigweDIxYildPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgyMWIpXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWViKV09XzB4MjE3YTQ3W18weDRhODlhMigweDFlYildLF8weDU0MTQ1NFsnYXV0b0V4cGFuZExpbWl0J109XzB4MjE3YTQ3WydhdXRvRXhwYW5kTGltaXQnXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjY4KV09XzB4MjE3YTQ3WydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjQ5KV09ITB4MSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjI3KV09IV8weDM5ZTU4YixfMHg1NDE0NTRbJ2RlcHRoJ109MHgxLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNzcpXT0weDAsXzB4NTQxNDU0W18weDRhODlhMigweDE4YSldPSdyb290X2V4cF9pZCcsXzB4NTQxNDU0W18weDRhODlhMigweDFjMyldPV8weDRhODlhMigweDFjMiksXzB4NTQxNDU0WydhdXRvRXhwYW5kJ109ITB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjQ1KV09W10sXzB4NTQxNDU0W18weDRhODlhMigweDE5NSldPTB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjZmKV09ITB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWRkKV09MHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZmMpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHg1NDE0NTQ7fTtmb3IodmFyIF8weDQwYzg0OT0weDA7XzB4NDBjODQ5PF8weDRiNDM0ZVtfMHg5MjEwZDUoMHgyMGQpXTtfMHg0MGM4NDkrKylfMHg3MjkzYTBbJ3B1c2gnXShfMHgxNjk4ZGFbXzB4OTIxMGQ1KDB4MjNhKV0oeyd0aW1lTm9kZSc6XzB4MTlmY2QyPT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4NGI0MzRlW18weDQwYzg0OV0sXzB4MjQ3YmViKF8weDM2Mjk2Yikse30pKTtpZihfMHgxOWZjZDI9PT1fMHg5MjEwZDUoMHgxYWIpKXtsZXQgXzB4NGI0ZTllPUVycm9yW18weDkyMTBkNSgweDIyOSldO3RyeXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109MHgxLzB4MCxfMHg3MjkzYTBbXzB4OTIxMGQ1KDB4MWYzKV0oXzB4MTY5OGRhW18weDkyMTBkNSgweDIzYSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg5MjEwZDUoMHgxOTMpXSxfMHgyNDdiZWIoXzB4MzYyOTZiKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHg5MjEwZDUoMHgyMjkpXT1fMHg0YjRlOWU7fX1yZXR1cm57J21ldGhvZCc6XzB4OTIxMGQ1KDB4MWNkKSwndmVyc2lvbic6XzB4MTJkZTBiLCdhcmdzJzpbeyd0cyc6XzB4MTgxYjZkLCdzZXNzaW9uJzpfMHgyYTA4YjMsJ2FyZ3MnOl8weDcyOTNhMCwnaWQnOl8weDQ1MzQ1MSwnY29udGV4dCc6XzB4NTQxODVkfV19O31jYXRjaChfMHgzYzRmY2Qpe3JldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4MTJkZTBiLCdhcmdzJzpbeyd0cyc6XzB4MTgxYjZkLCdzZXNzaW9uJzpfMHgyYTA4YjMsJ2FyZ3MnOlt7J3R5cGUnOl8weDkyMTBkNSgweDFiMiksJ2Vycm9yJzpfMHgzYzRmY2QmJl8weDNjNGZjZFtfMHg5MjEwZDUoMHgxYmUpXX1dLCdpZCc6XzB4NDUzNDUxLCdjb250ZXh0JzpfMHg1NDE4NWR9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDViNDRmMCYmXzB4MzY3MTViKXtsZXQgXzB4MzljMDRlPV8weDllNGM0ZCgpO18weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXSsrLF8weDViNDRmMFsndGltZSddKz1fMHgyN2ZjMTUoXzB4MzY3MTViLF8weDM5YzA0ZSksXzB4NWI0NGYwWyd0cyddPV8weDM5YzA0ZSxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MjI2KV0rKyxfMHgyZTBiODNbJ2hpdHMnXVtfMHg5MjEwZDUoMHgxYWUpXSs9XzB4MjdmYzE1KF8weDM2NzE1YixfMHgzOWMwNGUpLF8weDJlMGI4M1snaGl0cyddWyd0cyddPV8weDM5YzA0ZSwoXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildPjB4MzJ8fF8weDViNDRmMFsndGltZSddPjB4NjQpJiYoXzB4NWI0NGYwW18weDkyMTBkNSgweDFiNildPSEweDApLChfMHgyZTBiODNbJ2hpdHMnXVsnY291bnQnXT4weDNlOHx8XzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFhZSldPjB4MTJjKSYmKF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYjYpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyM2MyYmU7fSgoXzB4NGIwMGQ4LF8weDU1NzhmMSxfMHgzZWQyYTcsXzB4MzBlYWFiLF8weDIxMzI5NSxfMHg1Nzg4OGIsXzB4NGQyODhhLF8weDJmZTg5NCxfMHgzY2ZhNmEsXzB4MjZkMWQ0KT0+e3ZhciBfMHgxOTk4ZDM9XzB4MWY3ZmUxO2lmKF8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXSlyZXR1cm4gXzB4NGIwMGQ4WydfY29uc29sZV9uaW5qYSddO2lmKCFKKF8weDRiMDBkOCxfMHgyZmU4OTQsXzB4MjEzMjk1KSlyZXR1cm4gXzB4NGIwMGQ4WydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV07bGV0IF8weDFlYzhjOD1XKF8weDRiMDBkOCksXzB4MWEzYzdmPV8weDFlYzhjOFsnZWxhcHNlZCddLF8weDQxY2Y2YT1fMHgxZWM4YzhbXzB4MTk5OGQzKDB4MjNkKV0sXzB4MjQ3MDYwPV8weDFlYzhjOFtfMHgxOTk4ZDMoMHgyNTEpXSxfMHgxZDNjNDU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1NjgzYmU9WShfMHg0YjAwZDgsXzB4M2NmYTZhLF8weDFkM2M0NSxfMHg1Nzg4OGIpLF8weDNlMjQ4Zj1fMHgxMDM5MmY9PntfMHgxZDNjNDVbJ3RzJ11bXzB4MTAzOTJmXT1fMHg0MWNmNmEoKTt9LF8weDJlYmJlNz0oXzB4MWEwMmM4LF8weDQzMjdjMSk9Pnt2YXIgXzB4MTU5NWEzPV8weDE5OThkMztsZXQgXzB4NDgwMTFiPV8weDFkM2M0NVsndHMnXVtfMHg0MzI3YzFdO2lmKGRlbGV0ZSBfMHgxZDNjNDVbJ3RzJ11bXzB4NDMyN2MxXSxfMHg0ODAxMWIpe2xldCBfMHg0NDFmZWM9XzB4MWEzYzdmKF8weDQ4MDExYixfMHg0MWNmNmEoKSk7XzB4MzQxYWRmKF8weDU2ODNiZShfMHgxNTk1YTMoMHgxYWUpLF8weDFhMDJjOCxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsW18weDQ0MWZlY10sXzB4NDMyN2MxKSk7fX0sXzB4NjY1MzAxPV8weDQwOTU1Mz0+XzB4MmE4ZDk2PT57dmFyIF8weDM1YjJhYT1fMHgxOTk4ZDM7dHJ5e18weDNlMjQ4ZihfMHgyYThkOTYpLF8weDQwOTU1MyhfMHgyYThkOTYpO31maW5hbGx5e18weDRiMDBkOFsnY29uc29sZSddW18weDM1YjJhYSgweDFhZSldPV8weDQwOTU1Mzt9fSxfMHgxNDYyMTU9XzB4NWFhNTkxPT5fMHg0NGI4YzA9Pnt2YXIgXzB4YzViNmUzPV8weDE5OThkMzt0cnl7bGV0IFtfMHg0ZWIxYjYsXzB4MTU0YWRjXT1fMHg0NGI4YzBbXzB4YzViNmUzKDB4MWY2KV0oXzB4YzViNmUzKDB4MjU5KSk7XzB4MmViYmU3KF8weDE1NGFkYyxfMHg0ZWIxYjYpLF8weDVhYTU5MShfMHg0ZWIxYjYpO31maW5hbGx5e18weDRiMDBkOFtfMHhjNWI2ZTMoMHgyNTYpXVsndGltZUVuZCddPV8weDVhYTU5MTt9fTtfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV09eydjb25zb2xlTG9nJzooXzB4MjM5M2Y4LF8weDUxYmU2Mik9Pnt2YXIgXzB4NTExNTFiPV8weDE5OThkMztfMHg0YjAwZDhbXzB4NTExNTFiKDB4MjU2KV1bXzB4NTExNTFiKDB4MWNkKV1bXzB4NTExNTFiKDB4MjA2KV0hPT0nZGlzYWJsZWRMb2cnJiZfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDUxMTUxYigweDFjZCksXzB4MjM5M2Y4LF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHg1MWJlNjIpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgxMTkzNjksXzB4NDQyMDMxKT0+e3ZhciBfMHg1OTRjODA9XzB4MTk5OGQzO18weDRiMDBkOFtfMHg1OTRjODAoMHgyNTYpXVtfMHg1OTRjODAoMHgxY2QpXVsnbmFtZSddIT09J2Rpc2FibGVkVHJhY2UnJiZfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDU5NGM4MCgweDFhYiksXzB4MTE5MzY5LF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHg0NDIwMzEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MzJlZGYwPV8weDE5OThkMztfMHg0YjAwZDhbXzB4MzJlZGYwKDB4MjU2KV1bXzB4MzJlZGYwKDB4MWFlKV09XzB4NjY1MzAxKF8weDRiMDBkOFtfMHgzMmVkZjAoMHgyNTYpXVtfMHgzMmVkZjAoMHgxYWUpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weGNlYjdhOT1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weGNlYjdhOSgweDI1NildW18weGNlYjdhOSgweDFhMildPV8weDE0NjIxNShfMHg0YjAwZDhbJ2NvbnNvbGUnXVsndGltZUVuZCddKTt9LCdhdXRvTG9nJzooXzB4NTYxMDIxLF8weDMzNDNhNik9Pnt2YXIgXzB4OTkyNTNmPV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDk5MjUzZigweDFjZCksXzB4MzM0M2E2LF8weDI0NzA2MCgpLF8weDNlMDBmYyxbXzB4NTYxMDIxXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4MTRkZjYyLF8weDFhY2E4NSk9Pnt2YXIgXzB4NGU5OTM0PV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDRlOTkzNCgweDFjZCksXzB4MTRkZjYyLF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHgxYWNhODUpKTt9LCdhdXRvVHJhY2UnOihfMHgxOWYzM2IsXzB4NDljZjVjKT0+e3ZhciBfMHgzOGFiYTU9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4MzhhYmE1KDB4MWFiKSxfMHg0OWNmNWMsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLFtfMHgxOWYzM2JdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weGNkOTk2MixfMHgzYWRiYzApPT57dmFyIF8weDQwYTdhYT1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg0MGE3YWEoMHgxYWIpLF8weGNkOTk2MixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4M2FkYmMwKSk7fSwnYXV0b1RpbWUnOihfMHgxZTFmZDcsXzB4MmU1NDI5LF8weDJjY2IwMik9PntfMHgzZTI0OGYoXzB4MmNjYjAyKTt9LCdhdXRvVGltZUVuZCc6KF8weDJlMzhlNixfMHgxNDFiZjgsXzB4ZGMzM2IyKT0+e18weDJlYmJlNyhfMHgxNDFiZjgsXzB4ZGMzM2IyKTt9LCdjb3ZlcmFnZSc6XzB4Mjk4ZjM3PT57dmFyIF8weDIzODBiMj1fMHgxOTk4ZDM7XzB4MzQxYWRmKHsnbWV0aG9kJzpfMHgyMzgwYjIoMHgxZGUpLCd2ZXJzaW9uJzpfMHg1Nzg4OGIsJ2FyZ3MnOlt7J2lkJzpfMHgyOThmMzd9XX0pO319O2xldCBfMHgzNDFhZGY9YihfMHg0YjAwZDgsXzB4NTU3OGYxLF8weDNlZDJhNyxfMHgzMGVhYWIsXzB4MjEzMjk1LF8weDI2ZDFkNCksXzB4M2UwMGZjPV8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyNmUpXTtyZXR1cm4gXzB4NGIwMGQ4W18weDE5OThkMygweDIzMildO30pKGdsb2JhbFRoaXMsXzB4MWY3ZmUxKDB4MjEzKSxfMHgxZjdmZTEoMHgyMGMpLF8weDFmN2ZlMSgweDFkNyksXzB4MWY3ZmUxKDB4MjA5KSwnMS4wLjAnLF8weDFmN2ZlMSgweDE4ZSksW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJka20tZGVza3RvcFxcXCIsXFxcIjE5Mi4xNjguMS4xMDFcXFwiXSxfMHgxZjdmZTEoMHgxYWYpLF8weDFmN2ZlMSgweDFiMSkpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4vdG9kb3MnXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcmVuZGVyRE9NLCB1cGRhdGVUcmVlIH0gZnJvbSAnLi9yZW5kZXInXG5sZXQgcHJvamVjdHNBcnJheSA9IFtdXG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzQXJyYXkoaW5wdXRUeXBlLCBtb2RhbElucHV0LCB0b2RvSUQpIHtcblx0Ly8gRmV0Y2ggaW5wdXQgZGF0YSBmcm9tIG1vZGFsSW5wdXRcblx0aWYgKGlucHV0VHlwZSA9PT0gJ3RvZG8nIHx8IGlucHV0VHlwZSA9PT0gJ3RvZG8tZWRpdCcpIHtcblx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBtb2RhbElucHV0WzBdLnZhbHVlLnRyaW0oKVxuXHRcdGNvbnN0IHRpdGxlID0gbW9kYWxJbnB1dFsxXS52YWx1ZS50cmltKClcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IG1vZGFsSW5wdXRbMl0udmFsdWUudHJpbSgpXG5cdFx0Y29uc3QgZHVlRGF0ZSA9IG1vZGFsSW5wdXRbM10udmFsdWUudHJpbSgpXG5cdFx0Y29uc3QgcHJpb3JpdHkgPSBtb2RhbElucHV0WzRdLmNoZWNrZWRcblx0XHRjb25zdCBub3RlcyA9IG1vZGFsSW5wdXRbNV0udmFsdWUudHJpbSgpXG5cblx0XHRpZiAoaW5wdXRUeXBlID09PSAndG9kby1lZGl0Jykge1xuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyhcblx0XHRcdFx0Li4ub29fb28oYDE1Nzc2NTI3NTNfMTdfM18yNF80XzRgLCd1cGRhdGVQcm9qZWN0c0FycmF5IGVkaXQgdHJpZ2dlcjogJyArIHByb2plY3RUaXRsZSxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRkdWVEYXRlLFxuXHRcdFx0XHRwcmlvcml0eSxcblx0XHRcdFx0bm90ZXMpXG5cdFx0XHQpXG5cdFx0XHQvLyBGaW5kIGEgc2F2ZWQgdG9kbyBtYXRjaGluZyBJRCBvZiBlZGl0ZWQgdG9kb1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdFRpdGxlKVxuXHRcdFx0Y29uc3QgY3VycmVudFRvZG9JbmRleCA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maW5kSW5kZXgoXG5cdFx0XHRcdCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSURcblx0XHRcdClcblx0XHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDE1Nzc2NTI3NTNfMzBfM18zMF83MV80YCwndG9kbyBpbmRleCAnICsgY3VycmVudFRvZG9JbmRleCArICcgbWF0Y2hlcyAnICsgdG9kb0lEKSlcblx0XHRcdGlmIChjdXJyZW50VG9kb0luZGV4ICE9PSAtMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgZXhpc3RpbmcgdG9kbyBmcm9tIHRoZSBhcnJheVxuXHRcdFx0XHRjb25zdCBjdXJyZW50VG9kbyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5zcGxpY2UoY3VycmVudFRvZG9JbmRleCwgMSlbMF1cblx0XHRcdFx0Ly8gQ3JlYXRlIGEgbmV3IHRvZG8gd2l0aCB0aGUgdXBkYXRlZCBpbmZvcm1hdGlvblxuXHRcdFx0XHRjb25zdCB1cGRhdGVkVG9kbyA9IG5ldyBUb0RvKFxuXHRcdFx0XHRcdHByb2plY3RUaXRsZSxcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbixcblx0XHRcdFx0XHRkdWVEYXRlLFxuXHRcdFx0XHRcdHByaW9yaXR5LFxuXHRcdFx0XHRcdG5vdGVzXG5cdFx0XHRcdClcblxuXHRcdFx0XHRpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG5cdFx0XHRcdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRvUHJvamVjdCh1cGRhdGVkVG9kbylcblx0XHRcdFx0XHR1cGRhdGVUcmVlKHByb2plY3RzQXJyYXkpXG5cdFx0XHRcdFx0cmVuZGVyRE9NKHNlbGVjdGVkUHJvamVjdClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRcdFx0YFByb2plY3Qgd2l0aCB0aXRsZTogJHtwcm9qZWN0VGl0bGV9IG5vdCBmb3VuZCBpbiBhcnJheS5gXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpbnB1dFR5cGUgPT09ICd0b2RvJykge1xuXHRcdFx0Ly8gQ3JlYXRlIHRvZG8gb2JqZWN0XG5cdFx0XHRjb25zdCB0b2RvID0gbmV3IFRvRG8oXG5cdFx0XHRcdHByb2plY3RUaXRsZSxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRkdWVEYXRlLFxuXHRcdFx0XHRwcmlvcml0eSxcblx0XHRcdFx0bm90ZXNcblx0XHRcdFx0LyogXHRcdFx0XHRjaGVja0xpc3QgKi9cblx0XHRcdClcblx0XHRcdC8vIGZldGNoIHByb2plY3Qgb2JqZWN0IGZyb20gdGl0bGVcblx0XHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RUaXRsZSlcblx0XHRcdGlmIChzZWxlY3RlZFByb2plY3QpIHtcblx0XHRcdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRvUHJvamVjdCh0b2RvKVxuXHRcdFx0XHR1cGRhdGVUcmVlKHByb2plY3RzQXJyYXkpXG5cdFx0XHRcdHJlbmRlckRPTShzZWxlY3RlZFByb2plY3QpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBQcm9qZWN0IHdpdGggdGl0bGU6ICR7cHJvamVjdFRpdGxlfSBub3QgZm91bmQgaW4gYXJyYXkuYClcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncHJvamVjdCcpIHtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IG1vZGFsSW5wdXRbMF0udmFsdWUudHJpbSgpXG5cblx0XHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpXG5cblx0XHRwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdClcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAxNTc3NjUyNzUzXzgyXzJfODJfMjhfNGAscHJvamVjdHNBcnJheSkpXG5cdFx0dXBkYXRlVHJlZShwcm9qZWN0c0FycmF5KVxuXHR9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpbmQgYSBwcm9qZWN0IGJhc2VkIG9uIGEgcHJvamVjdCB0aXRsZSBzdHJpbmdcbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuXHRyZXR1cm4gcHJvamVjdHNBcnJheS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpXG59XG5cbmV4cG9ydCB7IHByb2plY3RzQXJyYXksIHVwZGF0ZVByb2plY3RzQXJyYXksIGZpbmRQcm9qZWN0IH1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgxZjdmZTE9XzB4MzdlNDsoZnVuY3Rpb24oXzB4NDdmZmI1LF8weDMwNTcxNil7dmFyIF8weDM3MmQ4ND1fMHgzN2U0LF8weDMyNWU4Zj1fMHg0N2ZmYjUoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDQ5MzYxMT0tcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjI1KSkvMHgxKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWQ2KSkvMHgyKSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWE5KSkvMHgzKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjcyKSkvMHg0KSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjViKSkvMHg1Ky1wYXJzZUludChfMHgzNzJkODQoMHgxOGIpKS8weDYqKC1wYXJzZUludChfMHgzNzJkODQoMHgyMzUpKS8weDcpKy1wYXJzZUludChfMHgzNzJkODQoMHgxZjEpKS8weDgqKHBhcnNlSW50KF8weDM3MmQ4NCgweDFiOSkpLzB4OSkrcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWYyKSkvMHhhKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWVkKSkvMHhiKStwYXJzZUludChfMHgzNzJkODQoMHgxZTgpKS8weGM7aWYoXzB4NDkzNjExPT09XzB4MzA1NzE2KWJyZWFrO2Vsc2UgXzB4MzI1ZThmWydwdXNoJ10oXzB4MzI1ZThmWydzaGlmdCddKCkpO31jYXRjaChfMHgyYjQ5OWUpe18weDMyNWU4ZlsncHVzaCddKF8weDMyNWU4Zlsnc2hpZnQnXSgpKTt9fX0oXzB4MjhlZCwweDQ1ZjU4KSk7ZnVuY3Rpb24gXzB4MjhlZCgpe3ZhciBfMHg4YmE0ZDc9Wyc6bG9nUG9pbnRJZDonLCdfSFRNTEFsbENvbGxlY3Rpb24nLCcyMzc2MzY1bWpUTVFhJywnY29uY2F0JywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ3NldHRlcicsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywncmVwbGFjZScsJ3BhcnNlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3BvcnQnLCdfcmVjb25uZWN0VGltZW91dCcsJ25vZGVNb2R1bGVzJywnU3RyaW5nJywnX3Byb3BlcnR5JywnYXV0b0V4cGFuZE1heERlcHRoJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ19hbGxvd2VkVG9TZW5kJywndXJsJywnd3MvaW5kZXguanMnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdyZXNvbHZlR2V0dGVycycsJ2NvbnN0cnVjdG9yJywnX3Byb3BlcnR5TmFtZScsJzg4ODY0UGVOb1FuJywncHJvcHMnLCdhdXRvRXhwYW5kJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdtZXRob2QnLCdsZXZlbCcsJ2NyZWF0ZScsJ29uY2xvc2UnLCd2ZXJzaW9ucycsJ2V4cElkJywnNDUzNzg2aFpSVE1RJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfaW5OZXh0RWRnZScsJzE3MDkzMTEwMTY1MjInLCdfY29ubmVjdFRvSG9zdE5vdycsJ2hhc093blByb3BlcnR5JywnaW5kZXgnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnc3RhY2snLCdfd3MnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ2VkZ2UnLCdCdWZmZXInLCdvYmplY3QnLCdzZXQnLCd3czovLycsJ19jbGVhbk5vZGUnLCdhc3RybycsJ190eXBlJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdjYXRjaCcsJ3Byb3RvdHlwZScsJ19wXycsJ3RpbWVFbmQnLCdXZWJTb2NrZXQnLCdnbG9iYWwnLCdzbGljZScsJ0Vycm9yJywnX2lzUHJpbWl0aXZlVHlwZScsJ19pc1VuZGVmaW5lZCcsJzU0aVJuUUpOJywnX29iamVjdFRvU3RyaW5nJywndHJhY2UnLCdpc0FycmF5JywnX3F1b3RlZFJlZ0V4cCcsJ3RpbWUnLCcnLCdfc2V0Tm9kZUxhYmVsJywnJywndW5rbm93bicsJ2Z1bmNOYW1lJywnU2V0JywnXFxcXHgyMGJyb3dzZXInLCdyZWR1Y2VMaW1pdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCc5VnBIRU1TJywnaW5jbHVkZXMnLCdfU3ltYm9sJywnbmVnYXRpdmVJbmZpbml0eScsJ2Z1bmN0aW9uJywnbWVzc2FnZScsJ25hbicsJ29ubWVzc2FnZScsJ19kYXRlVG9TdHJpbmcnLCdyb290X2V4cCcsJ3Jvb3RFeHByZXNzaW9uJywnZG9ja2VyaXplZEFwcCcsJ19XZWJTb2NrZXRDbGFzcycsJ2dldHRlcicsJ2hvc3RuYW1lJywnd2FybicsJ2FycmF5JywnX2lzTWFwJywnZWxhcHNlZCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnbG9nJywnTkVHQVRJVkVfSU5GSU5JVFknLCdjYXBwZWRFbGVtZW50cycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdyZWxvYWQnLCdfY29ubmVjdGVkJywndmFsdWUnLCdyZWFkeVN0YXRlJywnYXV0b0V4cGFuZExpbWl0JywnMTR0d1VnWEgnLFxcXCIvaG9tZS9kYW5pZWxsci8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI5MC9ub2RlX21vZHVsZXNcXFwiLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCcuLi4nLCdzdHJpbmcnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19jYXBJZlN0cmluZycsJ2FsbFN0ckxlbmd0aCcsJ2NvdmVyYWdlJywnbWFwJywncG9wJywnX2FkZExvYWROb2RlJywnZWxlbWVudHMnLCdudW1iZXInLCdNYXAnLCdwYXRoJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdORVhUX1JVTlRJTUUnLCc4NzcyMDk2YUJlaU5hJywnX3JlZ0V4cFRvU3RyaW5nJywnX3NldE5vZGVJZCcsJ3RvdGFsU3RyTGVuZ3RoJywnZGF0YScsJzI3NXpDZmF1RycsJ25lZ2F0aXZlWmVybycsJ3N5bWJvbCcsJ2dldFdlYlNvY2tldENsYXNzJywnMzgyNzQ2NGZzaXZVYycsJzk5NDMwck1wd2NzJywncHVzaCcsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnZW52Jywnc3BsaXQnLCdudWxsJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ3R5cGUnLCdfa2V5U3RyUmVnRXhwJywnX19lcycrJ01vZHVsZScsJ25vZGUnLCdfaGFzTWFwT25JdHNQYXRoJywndG9TdHJpbmcnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdjbG9zZScsJ3NlbmQnLCdfaXNOZWdhdGl2ZVplcm8nLCd0aGVuJywnX2luQnJvd3NlcicsJ3VucmVmJywnbmFtZScsJ3Vuc2hpZnQnLCdoaXRzJywnd2VicGFjaycsJ19zb2NrZXQnLCdfZGlzcG9zZVdlYnNvY2tldCcsJzM0ODc5JywnbGVuZ3RoJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdwZXJmX2hvb2tzJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX2lzU2V0JywnX3NlbmRFcnJvck1lc3NhZ2UnLCcxMjcuMC4wLjEnLCdwcm9jZXNzJywnaG9zdCcsJ2pvaW4nLCdIVE1MQWxsQ29sbGVjdGlvbicsJ19hZGRGdW5jdGlvbnNOb2RlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ3N0ckxlbmd0aCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2NhbGwnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnZGVwdGgnLCdfV2ViU29ja2V0JywnYmluZCcsJ19zZXROb2RlUXVlcnlQYXRoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzI5NTI1WUdSTkJKJywnY291bnQnLCdub0Z1bmN0aW9ucycsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5Jywnc3RhY2tUcmFjZUxpbWl0JywnTnVtYmVyJywncGVyZm9ybWFuY2UnLCd0ZXN0JywndmFsdWVPZicsJ3Bvc2l0aXZlSW5maW5pdHknLCdfcF9sZW5ndGgnLCdlcnJvcicsJ29uZXJyb3InLCdfY29uc29sZV9uaW5qYScsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2NhcHBlZFByb3BzJywnMTRoeERLWVYnLCdpbmRleE9mJywnZm9yRWFjaCcsJ3BhcmVudCcsJ2dldCcsJ3NlcmlhbGl6ZScsJ2dldFByb3RvdHlwZU9mJywnX2FkZFByb3BlcnR5JywndGltZVN0YW1wJywnbG9jYXRpb24nLCdjYXBwZWQnLCd1bmRlZmluZWQnLCdfY29ubmVjdGluZycsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnZW51bWVyYWJsZScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnXFxcXHgyMHNlcnZlcicsJ2hydGltZScsJ3NvcnRQcm9wcycsJ21hdGNoJywnYmlnaW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdzb3J0JywndG9Mb3dlckNhc2UnLCdfdW5kZWZpbmVkJywnb25vcGVuJywnbm93JywnUE9TSVRJVkVfSU5GSU5JVFknLCdjdXJyZW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdfaXNBcnJheScsJ2NvbnNvbGUnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCddO18weDI4ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4OGJhNGQ3O307cmV0dXJuIF8weDI4ZWQoKTt9ZnVuY3Rpb24gXzB4MzdlNChfMHg2OWUxNDYsXzB4M2RiMjhkKXt2YXIgXzB4MjhlZDZlPV8weDI4ZWQoKTtyZXR1cm4gXzB4MzdlND1mdW5jdGlvbihfMHgzN2U0NjAsXzB4MTlhMjU3KXtfMHgzN2U0NjA9XzB4MzdlNDYwLTB4MTg5O3ZhciBfMHgxODkwY2Q9XzB4MjhlZDZlW18weDM3ZTQ2MF07cmV0dXJuIF8weDE4OTBjZDt9LF8weDM3ZTQoXzB4NjllMTQ2LF8weDNkYjI4ZCk7fXZhciBqPU9iamVjdFtfMHgxZjdmZTEoMHgyNzgpXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFtfMHgxZjdmZTEoMHgxYjgpXSxlZT1PYmplY3RbXzB4MWY3ZmUxKDB4MjYyKV0sdGU9T2JqZWN0W18weDFmN2ZlMSgweDIzYildLG5lPU9iamVjdFtfMHgxZjdmZTEoMHgxYTApXVtfMHgxZjdmZTEoMHgxOTApXSxyZT0oXzB4NWFjNjQyLF8weDFjZjU2MCxfMHg1NjE1NTMsXzB4MjBjNDQ3KT0+e3ZhciBfMHg0NWMyMDI9XzB4MWY3ZmUxO2lmKF8weDFjZjU2MCYmdHlwZW9mIF8weDFjZjU2MD09XzB4NDVjMjAyKDB4MTk4KXx8dHlwZW9mIF8weDFjZjU2MD09XzB4NDVjMjAyKDB4MWJkKSl7Zm9yKGxldCBfMHg1MDhhMmMgb2YgZWUoXzB4MWNmNTYwKSkhbmVbXzB4NDVjMjAyKDB4MjFkKV0oXzB4NWFjNjQyLF8weDUwOGEyYykmJl8weDUwOGEyYyE9PV8weDU2MTU1MyYmSChfMHg1YWM2NDIsXzB4NTA4YTJjLHsnZ2V0JzooKT0+XzB4MWNmNTYwW18weDUwOGEyY10sJ2VudW1lcmFibGUnOiEoXzB4MjBjNDQ3PUcoXzB4MWNmNTYwLF8weDUwOGEyYykpfHxfMHgyMGM0NDdbXzB4NDVjMjAyKDB4MjQ0KV19KTt9cmV0dXJuIF8weDVhYzY0Mjt9LHg9KF8weDFhOTI2MSxfMHhiODQyZTEsXzB4M2ExMjNkKT0+KF8weDNhMTIzZD1fMHgxYTkyNjEhPW51bGw/aih0ZShfMHgxYTkyNjEpKTp7fSxyZShfMHhiODQyZTF8fCFfMHgxYTkyNjF8fCFfMHgxYTkyNjFbXzB4MWY3ZmUxKDB4MWZiKV0/SChfMHgzYTEyM2QsJ2RlZmF1bHQnLHsndmFsdWUnOl8weDFhOTI2MSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDNhMTIzZCxfMHgxYTkyNjEpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDI1ODk0NixfMHg0YWJjMjQsXzB4NTNhOTBhLF8weDY4ZGI0NSxfMHg1NDU3ZTgpe3ZhciBfMHgyNTk3Y2I9XzB4MWY3ZmUxO3RoaXNbXzB4MjU5N2NiKDB4MWE0KV09XzB4MjU4OTQ2LHRoaXNbXzB4MjU5N2NiKDB4MjE1KV09XzB4NGFiYzI0LHRoaXNbXzB4MjU5N2NiKDB4MjYzKV09XzB4NTNhOTBhLHRoaXNbXzB4MjU5N2NiKDB4MjY1KV09XzB4NjhkYjQ1LHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHg1NDU3ZTgsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4MjU5N2NiKDB4MWNjKV09ITB4MCx0aGlzW18weDI1OTdjYigweDFkMildPSEweDEsdGhpc1tfMHgyNTk3Y2IoMHgyNDEpXT0hMHgxLHRoaXNbXzB4MjU5N2NiKDB4MThkKV09XzB4MjU4OTQ2W18weDI1OTdjYigweDIxNCldPy5bJ2VudiddPy5bXzB4MjU5N2NiKDB4MWU3KV09PT0nZWRnZScsdGhpc1tfMHgyNTk3Y2IoMHgyMDQpXT0hdGhpc1tfMHgyNTk3Y2IoMHgxYTQpXVtfMHgyNTk3Y2IoMHgyMTQpXT8uW18weDI1OTdjYigweDE4OSldPy5bXzB4MjU5N2NiKDB4MWZjKV0mJiF0aGlzW18weDI1OTdjYigweDE4ZCldLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1tfMHgyNTk3Y2IoMHgxZjQpXT0weDAsdGhpc1tfMHgyNTk3Y2IoMHgxZGIpXT0weDE0LHRoaXNbXzB4MjU5N2NiKDB4MTllKV09XzB4MjU5N2NiKDB4MjQ2KSx0aGlzW18weDI1OTdjYigweDIxMildPSh0aGlzW18weDI1OTdjYigweDIwNCldP18weDI1OTdjYigweDI1Zik6XzB4MjU5N2NiKDB4MjZkKSkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXTt9YXN5bmNbXzB4MWY3ZmUxKDB4MWYwKV0oKXt2YXIgXzB4MzM2MWE2PV8weDFmN2ZlMTtpZih0aGlzW18weDMzNjFhNigweDFjNSldKXJldHVybiB0aGlzWydfV2ViU29ja2V0Q2xhc3MnXTtsZXQgXzB4MjQwZDhmO2lmKHRoaXNbXzB4MzM2MWE2KDB4MjA0KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4MjQwZDhmPXRoaXNbJ2dsb2JhbCddW18weDMzNjFhNigweDFhMyldO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bJ3Byb2Nlc3MnXT8uW18weDMzNjFhNigweDIyMSldKV8weDI0MGQ4Zj10aGlzWydnbG9iYWwnXVtfMHgzMzYxYTYoMHgyMTQpXT8uW18weDMzNjFhNigweDIyMSldO2Vsc2UgdHJ5e2xldCBfMHg0MjU5MTI9YXdhaXQgaW1wb3J0KF8weDMzNjFhNigweDFlNSkpO18weDI0MGQ4Zj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4MzM2MWE2KDB4MjZiKSkpWydwYXRoVG9GaWxlVVJMJ10oXzB4NDI1OTEyW18weDMzNjFhNigweDIxNildKHRoaXNbXzB4MzM2MWE2KDB4MjY1KV0sXzB4MzM2MWE2KDB4MjZjKSkpW18weDMzNjFhNigweDFmZSldKCkpKVsnZGVmYXVsdCddO31jYXRjaHt0cnl7XzB4MjQwZDhmPXJlcXVpcmUocmVxdWlyZShfMHgzMzYxYTYoMHgxZTUpKVtfMHgzMzYxYTYoMHgyMTYpXSh0aGlzW18weDMzNjFhNigweDI2NSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDMzNjFhNigweDIxYykpO319fXJldHVybiB0aGlzW18weDMzNjFhNigweDFjNSldPV8weDI0MGQ4ZixfMHgyNDBkOGY7fVtfMHgxZjdmZTEoMHgxOGYpXSgpe3ZhciBfMHgxMDQxYzc9XzB4MWY3ZmUxO3RoaXNbXzB4MTA0MWM3KDB4MjQxKV18fHRoaXNbXzB4MTA0MWM3KDB4MWQyKV18fHRoaXNbXzB4MTA0MWM3KDB4MWY0KV0+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J118fCh0aGlzW18weDEwNDFjNygweDFjYyldPSEweDEsdGhpc1tfMHgxMDQxYzcoMHgyNDEpXT0hMHgwLHRoaXNbXzB4MTA0MWM3KDB4MWY0KV0rKyx0aGlzW18weDEwNDFjNygweDE5NCldPW5ldyBQcm9taXNlKChfMHgxZDQ3YTgsXzB4MzAyNmQ2KT0+e3ZhciBfMHhkZDExMDY9XzB4MTA0MWM3O3RoaXNbXzB4ZGQxMTA2KDB4MWYwKV0oKVtfMHhkZDExMDYoMHgyMDMpXShfMHg0Y2M4ZmY9Pnt2YXIgXzB4NDdkYWM3PV8weGRkMTEwNjtsZXQgXzB4MWQxMGQwPW5ldyBfMHg0Y2M4ZmYoXzB4NDdkYWM3KDB4MTlhKSsoIXRoaXNbXzB4NDdkYWM3KDB4MjA0KV0mJnRoaXNbXzB4NDdkYWM3KDB4MWM0KV0/XzB4NDdkYWM3KDB4MjU4KTp0aGlzWydob3N0J10pKyc6Jyt0aGlzWydwb3J0J10pO18weDFkMTBkMFtfMHg0N2RhYzcoMHgyMzEpXT0oKT0+e3ZhciBfMHg4MzZjZTA9XzB4NDdkYWM3O3RoaXNbXzB4ODM2Y2UwKDB4MjZhKV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDFkMTBkMCksdGhpc1tfMHg4MzZjZTAoMHgyMjgpXSgpLF8weDMwMjZkNihuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgxZDEwZDBbXzB4NDdkYWM3KDB4MjUwKV09KCk9Pnt2YXIgXzB4MzE2ZDk4PV8weDQ3ZGFjNzt0aGlzWydfaW5Ccm93c2VyJ118fF8weDFkMTBkMFtfMHgzMTZkOTgoMHgyMGEpXSYmXzB4MWQxMGQwW18weDMxNmQ5OCgweDIwYSldWyd1bnJlZiddJiZfMHgxZDEwZDBbXzB4MzE2ZDk4KDB4MjBhKV1bXzB4MzE2ZDk4KDB4MjA1KV0oKSxfMHgxZDQ3YTgoXzB4MWQxMGQwKTt9LF8weDFkMTBkMFsnb25jbG9zZSddPSgpPT57dmFyIF8weDMxOTAxYj1fMHg0N2RhYzc7dGhpc1tfMHgzMTkwMWIoMHgxY2MpXT0hMHgwLHRoaXNbXzB4MzE5MDFiKDB4MjBiKV0oXzB4MWQxMGQwKSx0aGlzW18weDMxOTAxYigweDIyOCldKCk7fSxfMHgxZDEwZDBbXzB4NDdkYWM3KDB4MWMwKV09XzB4OTM0MzE5PT57dmFyIF8weDJmMjkxNz1fMHg0N2RhYzc7dHJ5e18weDkzNDMxOSYmXzB4OTM0MzE5W18weDJmMjkxNygweDFlYyldJiZ0aGlzW18weDJmMjkxNygweDIwNCldJiZKU09OW18weDJmMjkxNygweDI2MSldKF8weDkzNDMxOVsnZGF0YSddKVtfMHgyZjI5MTcoMHgyNzYpXT09PV8weDJmMjkxNygweDFkMSkmJnRoaXNbXzB4MmYyOTE3KDB4MWE0KV1bXzB4MmYyOTE3KDB4MjNlKV1bJ3JlbG9hZCddKCk7fWNhdGNoe319O30pW18weGRkMTEwNigweDIwMyldKF8weDQ3OTU3OD0+KHRoaXNbXzB4ZGQxMTA2KDB4MWQyKV09ITB4MCx0aGlzW18weGRkMTEwNigweDI0MSldPSEweDEsdGhpc1tfMHhkZDExMDYoMHgxY2MpXT0hMHgxLHRoaXNbXzB4ZGQxMTA2KDB4MjZhKV09ITB4MCx0aGlzW18weGRkMTEwNigweDFmNCldPTB4MCxfMHg0Nzk1NzgpKVtfMHhkZDExMDYoMHgxOWYpXShfMHg0ZWRkMzA9Pih0aGlzW18weGRkMTEwNigweDFkMildPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbXzB4ZGQxMTA2KDB4MWM4KV0oXzB4ZGQxMTA2KDB4MjRjKSt0aGlzW18weGRkMTEwNigweDE5ZSldKSxfMHgzMDI2ZDYobmV3IEVycm9yKF8weGRkMTEwNigweDFiNykrKF8weDRlZGQzMCYmXzB4NGVkZDMwW18weGRkMTEwNigweDFiZSldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NDkzMThkKXt2YXIgXzB4NDMyM2MwPV8weDFmN2ZlMTt0aGlzW18weDQzMjNjMCgweDFkMildPSEweDEsdGhpc1tfMHg0MzIzYzAoMHgyNDEpXT0hMHgxO3RyeXtfMHg0OTMxOGRbXzB4NDMyM2MwKDB4Mjc5KV09bnVsbCxfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjMxKV09bnVsbCxfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjUwKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MWQ0KV08MHgyJiZfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjAwKV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4YWZhZTU4PV8weDFmN2ZlMTtjbGVhclRpbWVvdXQodGhpc1tfMHhhZmFlNTgoMHgyNjQpXSksISh0aGlzW18weGFmYWU1OCgweDFmNCldPj10aGlzW18weGFmYWU1OCgweDFkYildKSYmKHRoaXNbXzB4YWZhZTU4KDB4MjY0KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxN2NlMWI9XzB4YWZhZTU4O3RoaXNbXzB4MTdjZTFiKDB4MWQyKV18fHRoaXNbXzB4MTdjZTFiKDB4MjQxKV18fCh0aGlzW18weDE3Y2UxYigweDE4ZildKCksdGhpc1snX3dzJ10/LltfMHgxN2NlMWIoMHgxOWYpXSgoKT0+dGhpc1tfMHgxN2NlMWIoMHgyMjgpXSgpKSk7fSwweDFmNCksdGhpc1tfMHhhZmFlNTgoMHgyNjQpXVtfMHhhZmFlNTgoMHgyMDUpXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHhhZmFlNTgoMHgyMDUpXSgpKTt9YXN5bmNbXzB4MWY3ZmUxKDB4MjAxKV0oXzB4MTY3NjZlKXt2YXIgXzB4MTUwYzRlPV8weDFmN2ZlMTt0cnl7aWYoIXRoaXNbXzB4MTUwYzRlKDB4MjZhKV0pcmV0dXJuO3RoaXNbXzB4MTUwYzRlKDB4MWNjKV0mJnRoaXNbXzB4MTUwYzRlKDB4MThmKV0oKSwoYXdhaXQgdGhpc1tfMHgxNTBjNGUoMHgxOTQpXSlbXzB4MTUwYzRlKDB4MjAxKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MTY3NjZlKSk7fWNhdGNoKF8weDU4ZDlhYSl7Y29uc29sZVtfMHgxNTBjNGUoMHgxYzgpXSh0aGlzW18weDE1MGM0ZSgweDIxMildKyc6XFxcXHgyMCcrKF8weDU4ZDlhYSYmXzB4NThkOWFhW18weDE1MGM0ZSgweDFiZSldKSksdGhpc1tfMHgxNTBjNGUoMHgyNmEpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fX07ZnVuY3Rpb24gYihfMHgxMjY2ZTYsXzB4NWU1ZWJlLF8weDM2NTliMCxfMHg0MmUwNGUsXzB4NTAzNzU0LF8weGY5NTUwMSl7dmFyIF8weDFjYmY3Nz1fMHgxZjdmZTE7bGV0IF8weDFjMjgxND1fMHgzNjU5YjBbJ3NwbGl0J10oJywnKVtfMHgxY2JmNzcoMHgxZGYpXShfMHgyOTAxNDg9Pnt2YXIgXzB4NDMzNmU1PV8weDFjYmY3Nzt0cnl7XzB4MTI2NmU2W18weDQzMzZlNSgweDI2ZSldfHwoKF8weDUwMzc1ND09PSduZXh0LmpzJ3x8XzB4NTAzNzU0PT09J3JlbWl4J3x8XzB4NTAzNzU0PT09XzB4NDMzNmU1KDB4MTljKXx8XzB4NTAzNzU0PT09J2FuZ3VsYXInKSYmKF8weDUwMzc1NCs9IV8weDEyNjZlNltfMHg0MzM2ZTUoMHgyMTQpXT8uWyd2ZXJzaW9ucyddPy5bXzB4NDMzNmU1KDB4MWZjKV0mJl8weDEyNjZlNltfMHg0MzM2ZTUoMHgyMTQpXT8uW18weDQzMzZlNSgweDFmNSldPy5bJ05FWFRfUlVOVElNRSddIT09XzB4NDMzNmU1KDB4MTk2KT9fMHg0MzM2ZTUoMHgxYjUpOl8weDQzMzZlNSgweDI0NykpLF8weDEyNjZlNlsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1MDM3NTR9KTtsZXQgXzB4ZDJlMzY2PW5ldyBYKF8weDEyNjZlNixfMHg1ZTVlYmUsXzB4MjkwMTQ4LF8weDQyZTA0ZSxfMHhmOTU1MDEpO3JldHVybiBfMHhkMmUzNjZbXzB4NDMzNmU1KDB4MjAxKV1bXzB4NDMzNmU1KDB4MjIyKV0oXzB4ZDJlMzY2KTt9Y2F0Y2goXzB4NDYzMDRmKXtyZXR1cm4gY29uc29sZVsnd2FybiddKF8weDQzMzZlNSgweDI1NCksXzB4NDYzMDRmJiZfMHg0NjMwNGZbXzB4NDMzNmU1KDB4MWJlKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDEzMGFmND0+XzB4MWMyODE0W18weDFjYmY3NygweDIzNyldKF8weDM1Mzg5MT0+XzB4MzUzODkxKF8weDEzMGFmNCkpO31mdW5jdGlvbiBXKF8weDIzZmE5Zil7dmFyIF8weDQwOWUwZD1fMHgxZjdmZTE7bGV0IF8weDRlODI4OT1mdW5jdGlvbihfMHgxZGVhZjgsXzB4MTc1YjBiKXtyZXR1cm4gXzB4MTc1YjBiLV8weDFkZWFmODt9LF8weDUyNjMwZjtpZihfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjJiKV0pXzB4NTI2MzBmPWZ1bmN0aW9uKCl7dmFyIF8weDM0M2JmPV8weDQwOWUwZDtyZXR1cm4gXzB4MjNmYTlmW18weDM0M2JmKDB4MjJiKV1bXzB4MzQzYmYoMHgyNTEpXSgpO307ZWxzZXtpZihfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjE0KV0mJl8weDIzZmE5ZltfMHg0MDllMGQoMHgyMTQpXVtfMHg0MDllMGQoMHgyNDgpXSYmXzB4MjNmYTlmW18weDQwOWUwZCgweDIxNCldPy5bXzB4NDA5ZTBkKDB4MWY1KV0/LltfMHg0MDllMGQoMHgxZTcpXSE9PV8weDQwOWUwZCgweDE5NikpXzB4NTI2MzBmPWZ1bmN0aW9uKCl7dmFyIF8weDNmMjFiND1fMHg0MDllMGQ7cmV0dXJuIF8weDIzZmE5ZltfMHgzZjIxYjQoMHgyMTQpXVtfMHgzZjIxYjQoMHgyNDgpXSgpO30sXzB4NGU4Mjg5PWZ1bmN0aW9uKF8weDViYTBmZixfMHgzZjc1ZmIpe3JldHVybiAweDNlOCooXzB4M2Y3NWZiWzB4MF0tXzB4NWJhMGZmWzB4MF0pKyhfMHgzZjc1ZmJbMHgxXS1fMHg1YmEwZmZbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4ODMwZjQxfT1yZXF1aXJlKF8weDQwOWUwZCgweDIwZikpO18weDUyNjMwZj1mdW5jdGlvbigpe3JldHVybiBfMHg4MzBmNDFbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NTI2MzBmPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NGU4Mjg5LCd0aW1lU3RhbXAnOl8weDUyNjMwZiwnbm93JzooKT0+RGF0ZVtfMHg0MDllMGQoMHgyNTEpXSgpfTt9ZnVuY3Rpb24gSihfMHg0MjIwYzEsXzB4MmFlZjc0LF8weDNjZjAyOSl7dmFyIF8weDU1MTI0Nj1fMHgxZjdmZTE7aWYoXzB4NDIyMGMxW18weDU1MTI0NigweDFmZildIT09dm9pZCAweDApcmV0dXJuIF8weDQyMjBjMVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDEyODNmND1fMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MjE0KV0/LltfMHg1NTEyNDYoMHgxODkpXT8uW18weDU1MTI0NigweDFmYyldfHxfMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MjE0KV0/LltfMHg1NTEyNDYoMHgxZjUpXT8uWydORVhUX1JVTlRJTUUnXT09PV8weDU1MTI0NigweDE5Nik7cmV0dXJuIF8weDEyODNmNCYmXzB4M2NmMDI5PT09J251eHQnP18weDQyMjBjMVtfMHg1NTEyNDYoMHgxZmYpXT0hMHgxOl8weDQyMjBjMVtfMHg1NTEyNDYoMHgxZmYpXT1fMHgxMjgzZjR8fCFfMHgyYWVmNzR8fF8weDQyMjBjMVsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHgyYWVmNzRbXzB4NTUxMjQ2KDB4MWJhKV0oXzB4NDIyMGMxWydsb2NhdGlvbiddW18weDU1MTI0NigweDFjNyldKSxfMHg0MjIwYzFbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO31mdW5jdGlvbiBZKF8weDRhMjMxYyxfMHgzOWU1OGIsXzB4MmUwYjgzLF8weDEyZGUwYil7dmFyIF8weDExZDJmZD1fMHgxZjdmZTE7XzB4NGEyMzFjPV8weDRhMjMxYyxfMHgzOWU1OGI9XzB4MzllNThiLF8weDJlMGI4Mz1fMHgyZTBiODMsXzB4MTJkZTBiPV8weDEyZGUwYjtsZXQgXzB4MzVjYjk5PVcoXzB4NGEyMzFjKSxfMHgyN2ZjMTU9XzB4MzVjYjk5W18weDExZDJmZCgweDFjYildLF8weDllNGM0ZD1fMHgzNWNiOTlbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDMzODcyZntjb25zdHJ1Y3Rvcigpe3ZhciBfMHgyNTc3NGY9XzB4MTFkMmZkO3RoaXNbXzB4MjU3NzRmKDB4MWZhKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzWydfbnVtYmVyUmVnRXhwJ109L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDI1Nzc0ZigweDFhZCldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbJ191bmRlZmluZWQnXT1fMHg0YTIzMWNbXzB4MjU3NzRmKDB4MjQwKV0sdGhpc1tfMHgyNTc3NGYoMHgyNWEpXT1fMHg0YTIzMWNbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHgyNTc3NGYoMHgyNzUpXT1PYmplY3RbXzB4MjU3NzRmKDB4MjYyKV0sdGhpc1snX1N5bWJvbCddPV8weDRhMjMxY1snU3ltYm9sJ10sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDI1Nzc0ZigweDFhMCldWyd0b1N0cmluZyddLHRoaXNbXzB4MjU3NzRmKDB4MWMxKV09RGF0ZVtfMHgyNTc3NGYoMHgxYTApXVtfMHgyNTc3NGYoMHgxZmUpXTt9W18weDExZDJmZCgweDIzYSldKF8weDM4MTFjZixfMHgzNTYwNjQsXzB4NGYyYzA0LF8weDFlZWYyMCl7dmFyIF8weDQ0OTcwYz1fMHgxMWQyZmQsXzB4MmM0MjhmPXRoaXMsXzB4NGU5Yjk0PV8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzQpXTtmdW5jdGlvbiBfMHg1NmE5YTcoXzB4NTZlY2M2LF8weDQ1MDA5ZCxfMHgzMGFhZWUpe3ZhciBfMHg0ZTAwNzU9XzB4NDQ5NzBjO18weDQ1MDA5ZFsndHlwZSddPV8weDRlMDA3NSgweDFiMiksXzB4NDUwMDlkW18weDRlMDA3NSgweDIzMCldPV8weDU2ZWNjNltfMHg0ZTAwNzUoMHgxYmUpXSxfMHgzMDMyYjY9XzB4MzBhYWVlW18weDRlMDA3NSgweDFmYyldW18weDRlMDA3NSgweDI1MyldLF8weDMwYWFlZVtfMHg0ZTAwNzUoMHgxZmMpXVtfMHg0ZTAwNzUoMHgyNTMpXT1fMHg0NTAwOWQsXzB4MmM0MjhmW18weDRlMDA3NSgweDIxOSldKF8weDQ1MDA5ZCxfMHgzMGFhZWUpO310cnl7XzB4NGYyYzA0W18weDQ0OTcwYygweDI3NyldKyssXzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldJiZfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjQ1KV1bXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MzU2MDY0KTt2YXIgXzB4NDgzOWJkLF8weDRiNGY2MSxfMHgxZWJmZTEsXzB4MjQ0ZDgwLF8weGJlNGQ5YT1bXSxfMHhkZmFjN2E9W10sXzB4MTcwNWFmLF8weDNlM2U3Zj10aGlzW18weDQ0OTcwYygweDE5ZCldKF8weDM1NjA2NCksXzB4MWMzNmZlPV8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFjOSksXzB4MTNiNTM2PSEweDEsXzB4NWIxNDhiPV8weDNlM2U3Zj09PSdmdW5jdGlvbicsXzB4NTc1Mzg0PXRoaXNbXzB4NDQ5NzBjKDB4MWE3KV0oXzB4M2UzZTdmKSxfMHgzNDI1MGM9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgzZTNlN2YpLF8weDNlODVlMD1fMHg1NzUzODR8fF8weDM0MjUwYyxfMHgyNWMzMzk9e30sXzB4MTZlMDM2PTB4MCxfMHgzY2M1ZmQ9ITB4MSxfMHgzMDMyYjYsXzB4OGRjMzBjPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjIwKV0pe2lmKF8weDFjMzZmZSl7aWYoXzB4NGI0ZjYxPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMGQpXSxfMHg0YjRmNjE+XzB4NGYyYzA0WydlbGVtZW50cyddKXtmb3IoXzB4MWViZmUxPTB4MCxfMHgyNDRkODA9XzB4NGYyYzA0W18weDQ0OTcwYygweDFlMildLF8weDQ4MzliZD1fMHgxZWJmZTE7XzB4NDgzOWJkPF8weDI0NGQ4MDtfMHg0ODM5YmQrKylfMHhkZmFjN2FbJ3B1c2gnXShfMHgyYzQyOGZbJ19hZGRQcm9wZXJ0eSddKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDQ4MzliZCxfMHg0ZjJjMDQpKTtfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWNmKV09ITB4MDt9ZWxzZXtmb3IoXzB4MWViZmUxPTB4MCxfMHgyNDRkODA9XzB4NGI0ZjYxLF8weDQ4MzliZD1fMHgxZWJmZTE7XzB4NDgzOWJkPF8weDI0NGQ4MDtfMHg0ODM5YmQrKylfMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MmM0MjhmW18weDQ0OTcwYygweDIzYyldKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDQ4MzliZCxfMHg0ZjJjMDQpKTt9XzB4NGYyYzA0W18weDQ0OTcwYygweDE5NSldKz1fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV07fWlmKCEoXzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWY3KXx8XzB4M2UzZTdmPT09J3VuZGVmaW5lZCcpJiYhXzB4NTc1Mzg0JiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgyNjYpJiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgxOTcpJiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgyNGIpKXt2YXIgXzB4Yjk5ZjNjPV8weDFlZWYyMFtfMHg0NDk3MGMoMHgyNzMpXXx8XzB4NGYyYzA0W18weDQ0OTcwYygweDI3MyldO2lmKHRoaXNbXzB4NDQ5NzBjKDB4MjExKV0oXzB4MzU2MDY0KT8oXzB4NDgzOWJkPTB4MCxfMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjM3KV0oZnVuY3Rpb24oXzB4MTljMTZhKXt2YXIgXzB4YmFlNTVlPV8weDQ0OTcwYztpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fWlmKCFfMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MTk1KV0+XzB4NGYyYzA0W18weGJhZTU1ZSgweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fV8weGRmYWM3YVtfMHhiYWU1NWUoMHgxZjMpXShfMHgyYzQyOGZbXzB4YmFlNTVlKDB4MjNjKV0oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHhiYWU1NWUoMHgxYjQpLF8weDQ4MzliZCsrLF8weDRmMmMwNCxmdW5jdGlvbihfMHgyMzJhMTcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMzJhMTc7fTt9KF8weDE5YzE2YSkpKTt9KSk6dGhpc1tfMHg0NDk3MGMoMHgxY2EpXShfMHgzNTYwNjQpJiZfMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjM3KV0oZnVuY3Rpb24oXzB4NDllNWE4LF8weDE0YmY5Mil7dmFyIF8weDIxYzI4OT1fMHg0NDk3MGM7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0W18weDIxYzI4OSgweDE5NSldKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO31pZighXzB4NGYyYzA0Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbXzB4MjFjMjg5KDB4MTk1KV0+XzB4NGYyYzA0WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO312YXIgXzB4NTc4NThiPV8weDE0YmY5MltfMHgyMWMyODkoMHgxZmUpXSgpO18weDU3ODU4YltfMHgyMWMyODkoMHgyMGQpXT4weDY0JiYoXzB4NTc4NThiPV8weDU3ODU4YltfMHgyMWMyODkoMHgxYTUpXSgweDAsMHg2NCkrXzB4MjFjMjg5KDB4MWQ5KSksXzB4ZGZhYzdhW18weDIxYzI4OSgweDFmMyldKF8weDJjNDI4ZltfMHgyMWMyODkoMHgyM2MpXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weDIxYzI4OSgweDFlNCksXzB4NTc4NThiLF8weDRmMmMwNCxmdW5jdGlvbihfMHgzMTFjMzgpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMTFjMzg7fTt9KF8weDQ5ZTVhOCkpKTt9KSwhXzB4MTNiNTM2KXt0cnl7Zm9yKF8weDE3MDVhZiBpbiBfMHgzNTYwNjQpaWYoIShfMHgxYzM2ZmUmJl8weDhkYzMwY1sndGVzdCddKF8weDE3MDVhZikpJiYhdGhpc1tfMHg0NDk3MGMoMHgyMGUpXShfMHgzNTYwNjQsXzB4MTcwNWFmLF8weDRmMmMwNCkpe2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgxOTUpXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO2JyZWFrO31pZighXzB4NGYyYzA0W18weDQ0OTcwYygweDIyNCldJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZDUpXSl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fV8weGRmYWM3YVtfMHg0NDk3MGMoMHgxZjMpXShfMHgyYzQyOGZbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weGJlNGQ5YSxfMHgyNWMzMzksXzB4MzU2MDY0LF8weDNlM2U3ZixfMHgxNzA1YWYsXzB4NGYyYzA0KSk7fX1jYXRjaHt9aWYoXzB4MjVjMzM5W18weDQ0OTcwYygweDIyZildPSEweDAsXzB4NWIxNDhiJiYoXzB4MjVjMzM5WydfcF9uYW1lJ109ITB4MCksIV8weDNjYzVmZCl7dmFyIF8weDllMzE9W11bXzB4NDQ5NzBjKDB4MjVjKV0odGhpc1tfMHg0NDk3MGMoMHgyNzUpXShfMHgzNTYwNjQpKVtfMHg0NDk3MGMoMHgyNWMpXSh0aGlzW18weDQ0OTcwYygweDIxZSldKF8weDM1NjA2NCkpO2ZvcihfMHg0ODM5YmQ9MHgwLF8weDRiNGY2MT1fMHg5ZTMxW18weDQ0OTcwYygweDIwZCldO18weDQ4MzliZDxfMHg0YjRmNjE7XzB4NDgzOWJkKyspaWYoXzB4MTcwNWFmPV8weDllMzFbXzB4NDgzOWJkXSwhKF8weDFjMzZmZSYmXzB4OGRjMzBjW18weDQ0OTcwYygweDIyYyldKF8weDE3MDVhZltfMHg0NDk3MGMoMHgxZmUpXSgpKSkmJiF0aGlzW18weDQ0OTcwYygweDIwZSldKF8weDM1NjA2NCxfMHgxNzA1YWYsXzB4NGYyYzA0KSYmIV8weDI1YzMzOVtfMHg0NDk3MGMoMHgxYTEpK18weDE3MDVhZltfMHg0NDk3MGMoMHgxZmUpXSgpXSl7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fWlmKCFfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4NGYyYzA0W18weDQ0OTcwYygweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9XzB4ZGZhYzdhW18weDQ0OTcwYygweDFmMyldKF8weDJjNDI4ZltfMHg0NDk3MGMoMHgyNTcpXShfMHhiZTRkOWEsXzB4MjVjMzM5LF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4MTcwNWFmLF8weDRmMmMwNCkpO319fX19aWYoXzB4MzgxMWNmWyd0eXBlJ109XzB4M2UzZTdmLF8weDNlODVlMD8oXzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMmQpXSgpLHRoaXNbXzB4NDQ5NzBjKDB4MWRjKV0oXzB4M2UzZTdmLF8weDM4MTFjZixfMHg0ZjJjMDQsXzB4MWVlZjIwKSk6XzB4M2UzZTdmPT09J2RhdGUnP18weDM4MTFjZlsndmFsdWUnXT10aGlzW18weDQ0OTcwYygweDFjMSldWydjYWxsJ10oXzB4MzU2MDY0KTpfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgyNGIpP18weDM4MTFjZltfMHg0NDk3MGMoMHgxZDMpXT1fMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MWZlKV0oKTpfMHgzZTNlN2Y9PT0nUmVnRXhwJz9fMHgzODExY2ZbJ3ZhbHVlJ109dGhpc1tfMHg0NDk3MGMoMHgxZTkpXVtfMHg0NDk3MGMoMHgyMWQpXShfMHgzNTYwNjQpOl8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFlZikmJnRoaXNbXzB4NDQ5NzBjKDB4MWJiKV0/XzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPXRoaXNbJ19TeW1ib2wnXVtfMHg0NDk3MGMoMHgxYTApXVtfMHg0NDk3MGMoMHgxZmUpXVtfMHg0NDk3MGMoMHgyMWQpXShfMHgzNTYwNjQpOiFfMHg0ZjJjMDRbJ2RlcHRoJ10mJiEoXzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWY3KXx8XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MjQwKSkmJihkZWxldGUgXzB4MzgxMWNmWyd2YWx1ZSddLF8weDM4MTFjZlsnY2FwcGVkJ109ITB4MCksXzB4M2NjNWZkJiYoXzB4MzgxMWNmW18weDQ0OTcwYygweDIzNCldPSEweDApLF8weDMwMzJiNj1fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWZjKV1bXzB4NDQ5NzBjKDB4MjUzKV0sXzB4NGYyYzA0W18weDQ0OTcwYygweDFmYyldW18weDQ0OTcwYygweDI1MyldPV8weDM4MTFjZix0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MzgxMWNmLF8weDRmMmMwNCksXzB4ZGZhYzdhW18weDQ0OTcwYygweDIwZCldKXtmb3IoXzB4NDgzOWJkPTB4MCxfMHg0YjRmNjE9XzB4ZGZhYzdhW18weDQ0OTcwYygweDIwZCldO18weDQ4MzliZDxfMHg0YjRmNjE7XzB4NDgzOWJkKyspXzB4ZGZhYzdhW18weDQ4MzliZF0oXzB4NDgzOWJkKTt9XzB4YmU0ZDlhWydsZW5ndGgnXSYmKF8weDM4MTFjZltfMHg0NDk3MGMoMHgyNzMpXT1fMHhiZTRkOWEpO31jYXRjaChfMHgzNzBkNDQpe18weDU2YTlhNyhfMHgzNzBkNDQsXzB4MzgxMWNmLF8weDRmMmMwNCk7fXJldHVybiB0aGlzW18weDQ0OTcwYygweDI2OSldKF8weDM1NjA2NCxfMHgzODExY2YpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDM4MTFjZixfMHg0ZjJjMDQpLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZmMpXVtfMHg0NDk3MGMoMHgyNTMpXT1fMHgzMDMyYjYsXzB4NGYyYzA0WydsZXZlbCddLS0sXzB4NGYyYzA0WydhdXRvRXhwYW5kJ109XzB4NGU5Yjk0LF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzQpXSYmXzB4NGYyYzA0W18weDQ0OTcwYygweDI0NSldW18weDQ0OTcwYygweDFlMCldKCksXzB4MzgxMWNmO31bXzB4MTFkMmZkKDB4MjFlKV0oXzB4NDhiN2Q2KXt2YXIgXzB4M2RlMzA3PV8weDExZDJmZDtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4M2RlMzA3KDB4MjFhKV0oXzB4NDhiN2Q2KTpbXTt9W18weDExZDJmZCgweDIxMSldKF8weDM3NjNlNCl7dmFyIF8weDU1YjhhMT1fMHgxMWQyZmQ7cmV0dXJuISEoXzB4Mzc2M2U0JiZfMHg0YTIzMWNbXzB4NTViOGExKDB4MWI0KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDM3NjNlNCk9PT0nW29iamVjdFxcXFx4MjBTZXRdJyYmXzB4Mzc2M2U0W18weDU1YjhhMSgweDIzNyldKTt9W18weDExZDJmZCgweDIwZSldKF8weDQ3NjllNCxfMHg0OGNmNzksXzB4NWE0MmU4KXt2YXIgXzB4MjhjMDE0PV8weDExZDJmZDtyZXR1cm4gXzB4NWE0MmU4W18weDI4YzAxNCgweDIyNyldP3R5cGVvZiBfMHg0NzY5ZTRbXzB4NDhjZjc5XT09XzB4MjhjMDE0KDB4MWJkKTohMHgxO31bJ190eXBlJ10oXzB4NDlkZmRkKXt2YXIgXzB4NTUxNzNhPV8weDExZDJmZCxfMHg5MTIyOTI9Jyc7cmV0dXJuIF8weDkxMjI5Mj10eXBlb2YgXzB4NDlkZmRkLF8weDkxMjI5Mj09PV8weDU1MTczYSgweDE5OCk/dGhpc1tfMHg1NTE3M2EoMHgxYWEpXShfMHg0OWRmZGQpPT09XzB4NTUxNzNhKDB4MWU2KT9fMHg5MTIyOTI9XzB4NTUxNzNhKDB4MWM5KTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0OWRmZGQpPT09J1tvYmplY3RcXFxceDIwRGF0ZV0nP18weDkxMjI5Mj0nZGF0ZSc6dGhpc1tfMHg1NTE3M2EoMHgxYWEpXShfMHg0OWRmZGQpPT09XzB4NTUxNzNhKDB4MjQyKT9fMHg5MTIyOTI9XzB4NTUxNzNhKDB4MjRiKTpfMHg0OWRmZGQ9PT1udWxsP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgxZjcpOl8weDQ5ZGZkZFtfMHg1NTE3M2EoMHgyNzApXSYmKF8weDkxMjI5Mj1fMHg0OWRmZGRbJ2NvbnN0cnVjdG9yJ11bXzB4NTUxNzNhKDB4MjA2KV18fF8weDkxMjI5Mik6XzB4OTEyMjkyPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4NTUxNzNhKDB4MjVhKV0mJl8weDQ5ZGZkZCBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4OTEyMjkyPV8weDU1MTczYSgweDIxNykpLF8weDkxMjI5Mjt9W18weDExZDJmZCgweDFhYSldKF8weDQzZDQxNCl7dmFyIF8weDU3ZGU0MD1fMHgxMWQyZmQ7cmV0dXJuIE9iamVjdFtfMHg1N2RlNDAoMHgxYTApXVtfMHg1N2RlNDAoMHgxZmUpXVtfMHg1N2RlNDAoMHgyMWQpXShfMHg0M2Q0MTQpO31bXzB4MTFkMmZkKDB4MWE3KV0oXzB4Y2RhZWI3KXt2YXIgXzB4MTkyMzM0PV8weDExZDJmZDtyZXR1cm4gXzB4Y2RhZWI3PT09J2Jvb2xlYW4nfHxfMHhjZGFlYjc9PT1fMHgxOTIzMzQoMHgxZGEpfHxfMHhjZGFlYjc9PT0nbnVtYmVyJzt9W18weDExZDJmZCgweDE4YyldKF8weDVjYTI3Zil7dmFyIF8weDM0NjA3OD1fMHgxMWQyZmQ7cmV0dXJuIF8weDVjYTI3Zj09PSdCb29sZWFuJ3x8XzB4NWNhMjdmPT09XzB4MzQ2MDc4KDB4MjY2KXx8XzB4NWNhMjdmPT09XzB4MzQ2MDc4KDB4MjJhKTt9W18weDExZDJmZCgweDIzYyldKF8weDFiODcwNixfMHg0ODE5ZTEsXzB4NGVlM2ZiLF8weDVhN2E3MCxfMHgxMDdiMDUsXzB4NGVhNmUxKXt2YXIgXzB4NWQ3ZTIyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDJiNTgwYil7dmFyIF8weDQ3MjkwZj1fMHgzN2U0LF8weGZjYzE3YT1fMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MjUzKV0sXzB4MTk0ZDMwPV8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgxOTEpXSxfMHgxZmVkZmQ9XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldWydwYXJlbnQnXTtfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MjM4KV09XzB4ZmNjMTdhLF8weDEwN2IwNVsnbm9kZSddW18weDQ3MjkwZigweDE5MSldPXR5cGVvZiBfMHg1YTdhNzA9PSdudW1iZXInP18weDVhN2E3MDpfMHgyYjU4MGIsXzB4MWI4NzA2W18weDQ3MjkwZigweDFmMyldKF8weDVkN2UyMltfMHg0NzI5MGYoMHgyNjcpXShfMHg0ODE5ZTEsXzB4NGVlM2ZiLF8weDVhN2E3MCxfMHgxMDdiMDUsXzB4NGVhNmUxKSksXzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldWydwYXJlbnQnXT1fMHgxZmVkZmQsXzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDE5MSldPV8weDE5NGQzMDt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDE2NTg4YixfMHgxMWNlYTcsXzB4MTNiNmVmLF8weDM4MDMxMCxfMHgxYzAxZDQsXzB4NGQ0YjZiLF8weDdmZWNhNil7dmFyIF8weDI0M2U1MD1fMHgxMWQyZmQsXzB4NDRhYmJhPXRoaXM7cmV0dXJuIF8weDExY2VhN1tfMHgyNDNlNTAoMHgxYTEpK18weDFjMDFkNFtfMHgyNDNlNTAoMHgxZmUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDFmNGQ1MSl7dmFyIF8weDRiZGMxZj1fMHgyNDNlNTAsXzB4NDRkMjgzPV8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgyNTMpXSxfMHg0ZmI4Mjg9XzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDE5MSldLF8weDMxNjlkNz1fMHg0ZDRiNmJbJ25vZGUnXVtfMHg0YmRjMWYoMHgyMzgpXTtfMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bJ3BhcmVudCddPV8weDQ0ZDI4MyxfMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MTkxKV09XzB4MWY0ZDUxLF8weDE2NTg4YlsncHVzaCddKF8weDQ0YWJiYVtfMHg0YmRjMWYoMHgyNjcpXShfMHgxM2I2ZWYsXzB4MzgwMzEwLF8weDFjMDFkNCxfMHg0ZDRiNmIsXzB4N2ZlY2E2KSksXzB4NGQ0YjZiWydub2RlJ11bXzB4NGJkYzFmKDB4MjM4KV09XzB4MzE2OWQ3LF8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgxOTEpXT1fMHg0ZmI4Mjg7fTt9W18weDExZDJmZCgweDI2NyldKF8weDJlZTJmOSxfMHg1MDRjNjMsXzB4MmJlODM5LF8weDVkNGJmZSxfMHg0NjY3NzIpe3ZhciBfMHgyODBmNmU9XzB4MTFkMmZkLF8weGM2YWZlMD10aGlzO18weDQ2Njc3Mnx8KF8weDQ2Njc3Mj1mdW5jdGlvbihfMHhlN2ZkZixfMHg0NDE5NGYpe3JldHVybiBfMHhlN2ZkZltfMHg0NDE5NGZdO30pO3ZhciBfMHgyOTgxMDM9XzB4MmJlODM5W18weDI4MGY2ZSgweDFmZSldKCksXzB4MjhmNTk0PV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMTApXXx8e30sXzB4NWM3OWE4PV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXSxfMHgyMGJlYmM9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyNCldO3RyeXt2YXIgXzB4MjdmMTUzPXRoaXNbXzB4MjgwZjZlKDB4MWNhKV0oXzB4MmVlMmY5KSxfMHgxNDE3OGE9XzB4Mjk4MTAzO18weDI3ZjE1MyYmXzB4MTQxNzhhWzB4MF09PT0nXFxcXHgyNycmJihfMHgxNDE3OGE9XzB4MTQxNzhhWydzdWJzdHInXSgweDEsXzB4MTQxNzhhW18weDI4MGY2ZSgweDIwZCldLTB4MikpO3ZhciBfMHgxMjYzNzE9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldPV8weDI4ZjU5NFsnX3BfJytfMHgxNDE3OGFdO18weDEyNjM3MSYmKF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXT1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV0rMHgxKSxfMHg1ZDRiZmVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDEyNjM3MTt2YXIgXzB4MjM5NTc5PXR5cGVvZiBfMHgyYmU4Mzk9PV8weDI4MGY2ZSgweDFlZiksXzB4MjA3NWI1PXsnbmFtZSc6XzB4MjM5NTc5fHxfMHgyN2YxNTM/XzB4Mjk4MTAzOnRoaXNbXzB4MjgwZjZlKDB4MjcxKV0oXzB4Mjk4MTAzKX07aWYoXzB4MjM5NTc5JiYoXzB4MjA3NWI1W18weDI4MGY2ZSgweDFlZildPSEweDApLCEoXzB4NTA0YzYzPT09J2FycmF5J3x8XzB4NTA0YzYzPT09XzB4MjgwZjZlKDB4MWE2KSkpe3ZhciBfMHgzZDJkOGU9dGhpc1tfMHgyODBmNmUoMHgyNWQpXShfMHgyZWUyZjksXzB4MmJlODM5KTtpZihfMHgzZDJkOGUmJihfMHgzZDJkOGVbXzB4MjgwZjZlKDB4MTk5KV0mJihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MjVlKV09ITB4MCksXzB4M2QyZDhlW18weDI4MGY2ZSgweDIzOSldJiYhXzB4MTI2MzcxJiYhXzB4NWQ0YmZlWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4MjA3NWI1W18weDI4MGY2ZSgweDFjNildPSEweDAsdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlKSxfMHgyMDc1YjU7fXZhciBfMHgyMTZmMzU7dHJ5e18weDIxNmYzNT1fMHg0NjY3NzIoXzB4MmVlMmY5LF8weDJiZTgzOSk7fWNhdGNoKF8weDUwZjU1OCl7cmV0dXJuIF8weDIwNzViNT17J25hbWUnOl8weDI5ODEwMywndHlwZSc6XzB4MjgwZjZlKDB4MWIyKSwnZXJyb3InOl8weDUwZjU1OFtfMHgyODBmNmUoMHgxYmUpXX0sdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlKSxfMHgyMDc1YjU7fXZhciBfMHg0ZGMyNDk9dGhpc1tfMHgyODBmNmUoMHgxOWQpXShfMHgyMTZmMzUpLF8weDVlODYzYT10aGlzW18weDI4MGY2ZSgweDFhNyldKF8weDRkYzI0OSk7aWYoXzB4MjA3NWI1W18weDI4MGY2ZSgweDFmOSldPV8weDRkYzI0OSxfMHg1ZTg2M2EpdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlLF8weDIxNmYzNSxmdW5jdGlvbigpe3ZhciBfMHg1Y2E0MGY9XzB4MjgwZjZlO18weDIwNzViNVtfMHg1Y2E0MGYoMHgxZDMpXT1fMHgyMTZmMzVbXzB4NWNhNDBmKDB4MjJkKV0oKSwhXzB4MTI2MzcxJiZfMHhjNmFmZTBbXzB4NWNhNDBmKDB4MWRjKV0oXzB4NGRjMjQ5LF8weDIwNzViNSxfMHg1ZDRiZmUse30pO30pO2Vsc2V7dmFyIF8weDFlNTRkYj1fMHg1ZDRiZmVbJ2F1dG9FeHBhbmQnXSYmXzB4NWQ0YmZlW18weDI4MGY2ZSgweDI3NyldPF8weDVkNGJmZVtfMHgyODBmNmUoMHgyNjgpXSYmXzB4NWQ0YmZlW18weDI4MGY2ZSgweDI0NSldW18weDI4MGY2ZSgweDIzNildKF8weDIxNmYzNSk8MHgwJiZfMHg0ZGMyNDkhPT1fMHgyODBmNmUoMHgxYmQpJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MTk1KV08XzB4NWQ0YmZlW18weDI4MGY2ZSgweDFkNSldO18weDFlNTRkYnx8XzB4NWQ0YmZlWydsZXZlbCddPF8weDVjNzlhOHx8XzB4MTI2MzcxPyh0aGlzW18weDI4MGY2ZSgweDIzYSldKF8weDIwNzViNSxfMHgyMTZmMzUsXzB4NWQ0YmZlLF8weDEyNjM3MXx8e30pLHRoaXNbXzB4MjgwZjZlKDB4MjY5KV0oXzB4MjE2ZjM1LF8weDIwNzViNSkpOnRoaXNbXzB4MjgwZjZlKDB4MWQwKV0oXzB4MjA3NWI1LF8weDVkNGJmZSxfMHgyMTZmMzUsZnVuY3Rpb24oKXt2YXIgXzB4NTE5NTA0PV8weDI4MGY2ZTtfMHg0ZGMyNDk9PT1fMHg1MTk1MDQoMHgxZjcpfHxfMHg0ZGMyNDk9PT1fMHg1MTk1MDQoMHgyNDApfHwoZGVsZXRlIF8weDIwNzViNVtfMHg1MTk1MDQoMHgxZDMpXSxfMHgyMDc1YjVbXzB4NTE5NTA0KDB4MjNmKV09ITB4MCk7fSk7fXJldHVybiBfMHgyMDc1YjU7fWZpbmFsbHl7XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldPV8weDI4ZjU5NCxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV09XzB4NWM3OWE4LF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjQpXT1fMHgyMGJlYmM7fX1bJ19jYXBJZlN0cmluZyddKF8weDNmYzZjZSxfMHg0NzhiNjEsXzB4MTEzNTFlLF8weDNlYjEwOSl7dmFyIF8weDQ1YmI3Yz1fMHgxMWQyZmQsXzB4MTk2MjIzPV8weDNlYjEwOVsnc3RyTGVuZ3RoJ118fF8weDExMzUxZVsnc3RyTGVuZ3RoJ107aWYoKF8weDNmYzZjZT09PSdzdHJpbmcnfHxfMHgzZmM2Y2U9PT1fMHg0NWJiN2MoMHgyNjYpKSYmXzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldKXtsZXQgXzB4NTgzMmRkPV8weDQ3OGI2MVtfMHg0NWJiN2MoMHgxZDMpXVtfMHg0NWJiN2MoMHgyMGQpXTtfMHgxMTM1MWVbXzB4NDViYjdjKDB4MWRkKV0rPV8weDU4MzJkZCxfMHgxMTM1MWVbJ2FsbFN0ckxlbmd0aCddPl8weDExMzUxZVtfMHg0NWJiN2MoMHgxZWIpXT8oXzB4NDc4YjYxW18weDQ1YmI3YygweDIzZildPScnLGRlbGV0ZSBfMHg0NzhiNjFbJ3ZhbHVlJ10pOl8weDU4MzJkZD5fMHgxOTYyMjMmJihfMHg0NzhiNjFbXzB4NDViYjdjKDB4MjNmKV09XzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldWydzdWJzdHInXSgweDAsXzB4MTk2MjIzKSxkZWxldGUgXzB4NDc4YjYxWyd2YWx1ZSddKTt9fVtfMHgxMWQyZmQoMHgxY2EpXShfMHgzNmVhNTgpe3ZhciBfMHg0ZTE4NTM9XzB4MTFkMmZkO3JldHVybiEhKF8weDM2ZWE1OCYmXzB4NGEyMzFjW18weDRlMTg1MygweDFlNCldJiZ0aGlzW18weDRlMTg1MygweDFhYSldKF8weDM2ZWE1OCk9PT1fMHg0ZTE4NTMoMHgyMzMpJiZfMHgzNmVhNThbXzB4NGUxODUzKDB4MjM3KV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg4ODlkMDgpe3ZhciBfMHgyYTllMGY9XzB4MTFkMmZkO2lmKF8weDg4OWQwOFtfMHgyYTllMGYoMHgyNGEpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4ODg5ZDA4O3ZhciBfMHg1YmU5ZjM7dHJ5e18weDViZTlmMz1KU09OWydzdHJpbmdpZnknXSgnJytfMHg4ODlkMDgpO31jYXRjaHtfMHg1YmU5ZjM9J1xcXFx4MjInK3RoaXNbXzB4MmE5ZTBmKDB4MWFhKV0oXzB4ODg5ZDA4KSsnXFxcXHgyMic7fXJldHVybiBfMHg1YmU5ZjNbJ21hdGNoJ10oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg1YmU5ZjM9XzB4NWJlOWYzWydzdWJzdHInXSgweDEsXzB4NWJlOWYzW18weDJhOWUwZigweDIwZCldLTB4Mik6XzB4NWJlOWYzPV8weDViZTlmM1tfMHgyYTllMGYoMHgyNjApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NWJlOWYzO31bXzB4MTFkMmZkKDB4MWQwKV0oXzB4MjIzYzM4LF8weGVlMzc4ZSxfMHhjZWQ5ODYsXzB4NDgwM2MyKXt2YXIgXzB4ODQ4MGFlPV8weDExZDJmZDt0aGlzW18weDg0ODBhZSgweDIxOSldKF8weDIyM2MzOCxfMHhlZTM3OGUpLF8weDQ4MDNjMiYmXzB4NDgwM2MyKCksdGhpc1tfMHg4NDgwYWUoMHgyNjkpXShfMHhjZWQ5ODYsXzB4MjIzYzM4KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyMjNjMzgsXzB4ZWUzNzhlKTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MTNjMDExLF8weDMxZmM3Yyl7dmFyIF8weDM5NGU4MT1fMHgxMWQyZmQ7dGhpc1tfMHgzOTRlODEoMHgxZWEpXShfMHgxM2MwMTEsXzB4MzFmYzdjKSx0aGlzW18weDM5NGU4MSgweDIyMyldKF8weDEzYzAxMSxfMHgzMWZjN2MpLHRoaXNbXzB4Mzk0ZTgxKDB4MTkyKV0oXzB4MTNjMDExLF8weDMxZmM3YyksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDEzYzAxMSxfMHgzMWZjN2MpO31bXzB4MTFkMmZkKDB4MWVhKV0oXzB4MTE1YzVjLF8weDFjODM1NSl7fVtfMHgxMWQyZmQoMHgyMjMpXShfMHg1NGJiY2UsXzB4MTc5Y2Y0KXt9W18weDExZDJmZCgweDFiMCldKF8weDQ3OTU5MCxfMHgyNThkZGUpe31bXzB4MTFkMmZkKDB4MWE4KV0oXzB4MzBkNTcxKXt2YXIgXzB4M2MzNmJmPV8weDExZDJmZDtyZXR1cm4gXzB4MzBkNTcxPT09dGhpc1tfMHgzYzM2YmYoMHgyNGYpXTt9W18weDExZDJmZCgweDFkOCldKF8weDFlNDk4ZSxfMHg0MjUxNzgpe3ZhciBfMHg1NTM4OWI9XzB4MTFkMmZkO3RoaXNbXzB4NTUzODliKDB4MWIwKV0oXzB4MWU0OThlLF8weDQyNTE3OCksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgxZTQ5OGUpLF8weDQyNTE3OFtfMHg1NTM4OWIoMHgyNDkpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDFlNDk4ZSksdGhpc1tfMHg1NTM4OWIoMHgyMTgpXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzW18weDU1Mzg5YigweDE5YildKF8weDFlNDk4ZSk7fVsnX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDQ0NmMzMyxfMHg1MTAwZTEpe3ZhciBfMHhhNjEyZDQ9XzB4MTFkMmZkO2xldCBfMHg0YzE3MWM7dHJ5e18weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXSYmKF8weDRjMTcxYz1fMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV0sXzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildW18weGE2MTJkNCgweDIzMCldPWZ1bmN0aW9uKCl7fSksXzB4NDQ2YzMzJiZ0eXBlb2YgXzB4NDQ2YzMzW18weGE2MTJkNCgweDIwZCldPT1fMHhhNjEyZDQoMHgxZTMpJiYoXzB4NTEwMGUxWydsZW5ndGgnXT1fMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjBkKV0pO31jYXRjaHt9ZmluYWxseXtfMHg0YzE3MWMmJihfMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV09XzB4NGMxNzFjKTt9aWYoXzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09XzB4YTYxMmQ0KDB4MWUzKXx8XzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXSkpXzB4NTEwMGUxW18weGE2MTJkNCgweDFiZildPSEweDAsZGVsZXRlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXTtlbHNlIHN3aXRjaChfMHg1MTAwZTFbJ3ZhbHVlJ10pe2Nhc2UgTnVtYmVyW18weGE2MTJkNCgweDI1MildOl8weDUxMDBlMVtfMHhhNjEyZDQoMHgyMmUpXT0hMHgwLGRlbGV0ZSBfMHg1MTAwZTFbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbXzB4YTYxMmQ0KDB4MWNlKV06XzB4NTEwMGUxW18weGE2MTJkNCgweDFiYyldPSEweDAsZGVsZXRlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGE2MTJkNCgweDIwMildKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXSkmJihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWVlKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZjkpXT09PV8weGE2MTJkNCgweDFiZCkmJnR5cGVvZiBfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV09PSdzdHJpbmcnJiZfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV0mJl8weDUxMDBlMVsnbmFtZSddJiZfMHg0NDZjMzNbJ25hbWUnXSE9PV8weDUxMDBlMVtfMHhhNjEyZDQoMHgyMDYpXSYmKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxYjMpXT1fMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV0pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDU5YzliYSl7cmV0dXJuIDB4MS9fMHg1OWM5YmE9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVsnX3NvcnRQcm9wcyddKF8weDE5NGIyMil7dmFyIF8weDQ4OTc2Mj1fMHgxMWQyZmQ7IV8weDE5NGIyMlsncHJvcHMnXXx8IV8weDE5NGIyMltfMHg0ODk3NjIoMHgyNzMpXVtfMHg0ODk3NjIoMHgyMGQpXXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWM5KXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWU0KXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWI0KXx8XzB4MTk0YjIyWydwcm9wcyddW18weDQ4OTc2MigweDI0ZCldKGZ1bmN0aW9uKF8weDU3NTBmMSxfMHgyZWI3Mzgpe3ZhciBfMHg3NmY4YWM9XzB4NDg5NzYyLF8weDViMmJiOD1fMHg1NzUwZjFbXzB4NzZmOGFjKDB4MjA2KV1bXzB4NzZmOGFjKDB4MjRlKV0oKSxfMHg0YTRmOGY9XzB4MmViNzM4W18weDc2ZjhhYygweDIwNildWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDViMmJiODxfMHg0YTRmOGY/LTB4MTpfMHg1YjJiYjg+XzB4NGE0ZjhmPzB4MToweDA7fSk7fVtfMHgxMWQyZmQoMHgyMTgpXShfMHgxYzU2OTIsXzB4NTk0MWQyKXt2YXIgXzB4NmRkYzYzPV8weDExZDJmZDtpZighKF8weDU5NDFkMltfMHg2ZGRjNjMoMHgyMjcpXXx8IV8weDFjNTY5MltfMHg2ZGRjNjMoMHgyNzMpXXx8IV8weDFjNTY5MlsncHJvcHMnXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDM5NzgxOD1bXSxfMHgxYmIwZDY9W10sXzB4Y2Y2M2Y5PTB4MCxfMHg1MjJhZWQ9XzB4MWM1NjkyW18weDZkZGM2MygweDI3MyldW18weDZkZGM2MygweDIwZCldO18weGNmNjNmOTxfMHg1MjJhZWQ7XzB4Y2Y2M2Y5Kyspe3ZhciBfMHg1YjY2ZWE9XzB4MWM1NjkyWydwcm9wcyddW18weGNmNjNmOV07XzB4NWI2NmVhW18weDZkZGM2MygweDFmOSldPT09XzB4NmRkYzYzKDB4MWJkKT9fMHgzOTc4MThbXzB4NmRkYzYzKDB4MWYzKV0oXzB4NWI2NmVhKTpfMHgxYmIwZDZbXzB4NmRkYzYzKDB4MWYzKV0oXzB4NWI2NmVhKTt9aWYoISghXzB4MWJiMGQ2WydsZW5ndGgnXXx8XzB4Mzk3ODE4W18weDZkZGM2MygweDIwZCldPD0weDEpKXtfMHgxYzU2OTJbXzB4NmRkYzYzKDB4MjczKV09XzB4MWJiMGQ2O3ZhciBfMHg0ZDhlZmQ9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4Mzk3ODE4fTt0aGlzW18weDZkZGM2MygweDFlYSldKF8weDRkOGVmZCxfMHg1OTQxZDIpLHRoaXNbXzB4NmRkYzYzKDB4MWIwKV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksdGhpc1tfMHg2ZGRjNjMoMHgyNDMpXShfMHg0ZDhlZmQpLHRoaXNbXzB4NmRkYzYzKDB4MWY4KV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksXzB4NGQ4ZWZkWydpZCddKz0nXFxcXHgyMGYnLF8weDFjNTY5MlsncHJvcHMnXVtfMHg2ZGRjNjMoMHgyMDcpXShfMHg0ZDhlZmQpO319fVtfMHgxMWQyZmQoMHgxZTEpXShfMHgxYzdhZDAsXzB4Mjk3YjZkKXt9W18weDExZDJmZCgweDI0MyldKF8weDJmNTA4Nyl7fVtfMHgxMWQyZmQoMHgyNTUpXShfMHg0MDE2OTgpe3ZhciBfMHgzZmRiOTE9XzB4MTFkMmZkO3JldHVybiBBcnJheVtfMHgzZmRiOTEoMHgxYWMpXShfMHg0MDE2OTgpfHx0eXBlb2YgXzB4NDAxNjk4PT1fMHgzZmRiOTEoMHgxOTgpJiZ0aGlzW18weDNmZGI5MSgweDFhYSldKF8weDQwMTY5OCk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4MTFkMmZkKDB4MWY4KV0oXzB4MTUyMTYyLF8weDFlZDU3NCl7fVtfMHgxMWQyZmQoMHgxOWIpXShfMHgxNjEyNTMpe3ZhciBfMHg2NzlhMGM9XzB4MTFkMmZkO2RlbGV0ZSBfMHgxNjEyNTNbXzB4Njc5YTBjKDB4MjFmKV0sZGVsZXRlIF8weDE2MTI1M1snX2hhc1NldE9uSXRzUGF0aCddLGRlbGV0ZSBfMHgxNjEyNTNbXzB4Njc5YTBjKDB4MWZkKV07fVtfMHgxMWQyZmQoMHgxOTIpXShfMHg0M2E5MWMsXzB4NGIxY2VmKXt9fWxldCBfMHgxNjk4ZGE9bmV3IF8weDMzODcyZigpLF8weDQzMzZkOD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg1MDczNjg9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyM2MyYmUoXzB4MTlmY2QyLF8weDQ1MzQ1MSxfMHgxODFiNmQsXzB4MmEwOGIzLF8weDRiNDM0ZSxfMHg1NDE4NWQpe3ZhciBfMHg5MjEwZDU9XzB4MTFkMmZkO2xldCBfMHg1YjQ0ZjAsXzB4MzY3MTViO3RyeXtfMHgzNjcxNWI9XzB4OWU0YzRkKCksXzB4NWI0NGYwPV8weDJlMGI4M1tfMHg0NTM0NTFdLCFfMHg1YjQ0ZjB8fF8weDM2NzE1Yi1fMHg1YjQ0ZjBbJ3RzJ10+MHgxZjQmJl8weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXSYmXzB4NWI0NGYwWyd0aW1lJ10vXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildPDB4NjQ/KF8weDJlMGI4M1tfMHg0NTM0NTFdPV8weDViNDRmMD17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDM2NzE1Yn0sXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldPXt9KTpfMHgzNjcxNWItXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldWyd0cyddPjB4MzImJl8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgyMjYpXSYmXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFhZSldL18weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVsnY291bnQnXTwweDY0JiYoXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldPXt9KTtsZXQgXzB4NzI5M2EwPVtdLF8weDM2Mjk2Yj1fMHg1YjQ0ZjBbJ3JlZHVjZUxpbWl0cyddfHxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWI2KV0/XzB4NTA3MzY4Ol8weDQzMzZkOCxfMHgyNDdiZWI9XzB4MjE3YTQ3PT57dmFyIF8weDRhODlhMj1fMHg5MjEwZDU7bGV0IF8weDU0MTQ1ND17fTtyZXR1cm4gXzB4NTQxNDU0W18weDRhODlhMigweDI3MyldPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgyNzMpXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWUyKV09XzB4MjE3YTQ3W18weDRhODlhMigweDFlMildLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyMWIpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MjFiKV0sXzB4NTQxNDU0W18weDRhODlhMigweDFlYildPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgxZWIpXSxfMHg1NDE0NTRbJ2F1dG9FeHBhbmRMaW1pdCddPV8weDIxN2E0N1snYXV0b0V4cGFuZExpbWl0J10sXzB4NTQxNDU0W18weDRhODlhMigweDI2OCldPV8weDIxN2E0N1snYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4NTQxNDU0W18weDRhODlhMigweDI0OSldPSEweDEsXzB4NTQxNDU0W18weDRhODlhMigweDIyNyldPSFfMHgzOWU1OGIsXzB4NTQxNDU0WydkZXB0aCddPTB4MSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4Mjc3KV09MHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxOGEpXT0ncm9vdF9leHBfaWQnLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxYzMpXT1fMHg0YTg5YTIoMHgxYzIpLF8weDU0MTQ1NFsnYXV0b0V4cGFuZCddPSEweDAsXzB4NTQxNDU0W18weDRhODlhMigweDI0NSldPVtdLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxOTUpXT0weDAsXzB4NTQxNDU0W18weDRhODlhMigweDI2ZildPSEweDAsXzB4NTQxNDU0W18weDRhODlhMigweDFkZCldPTB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWZjKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTQxNDU0O307Zm9yKHZhciBfMHg0MGM4NDk9MHgwO18weDQwYzg0OTxfMHg0YjQzNGVbXzB4OTIxMGQ1KDB4MjBkKV07XzB4NDBjODQ5KyspXzB4NzI5M2EwWydwdXNoJ10oXzB4MTY5OGRhW18weDkyMTBkNSgweDIzYSldKHsndGltZU5vZGUnOl8weDE5ZmNkMj09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDRiNDM0ZVtfMHg0MGM4NDldLF8weDI0N2JlYihfMHgzNjI5NmIpLHt9KSk7aWYoXzB4MTlmY2QyPT09XzB4OTIxMGQ1KDB4MWFiKSl7bGV0IF8weDRiNGU5ZT1FcnJvcltfMHg5MjEwZDUoMHgyMjkpXTt0cnl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPTB4MS8weDAsXzB4NzI5M2EwW18weDkyMTBkNSgweDFmMyldKF8weDE2OThkYVtfMHg5MjEwZDUoMHgyM2EpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4OTIxMGQ1KDB4MTkzKV0sXzB4MjQ3YmViKF8weDM2Mjk2YikseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4OTIxMGQ1KDB4MjI5KV09XzB4NGI0ZTllO319cmV0dXJueydtZXRob2QnOl8weDkyMTBkNSgweDFjZCksJ3ZlcnNpb24nOl8weDEyZGUwYiwnYXJncyc6W3sndHMnOl8weDE4MWI2ZCwnc2Vzc2lvbic6XzB4MmEwOGIzLCdhcmdzJzpfMHg3MjkzYTAsJ2lkJzpfMHg0NTM0NTEsJ2NvbnRleHQnOl8weDU0MTg1ZH1dfTt9Y2F0Y2goXzB4M2M0ZmNkKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDEyZGUwYiwnYXJncyc6W3sndHMnOl8weDE4MWI2ZCwnc2Vzc2lvbic6XzB4MmEwOGIzLCdhcmdzJzpbeyd0eXBlJzpfMHg5MjEwZDUoMHgxYjIpLCdlcnJvcic6XzB4M2M0ZmNkJiZfMHgzYzRmY2RbXzB4OTIxMGQ1KDB4MWJlKV19XSwnaWQnOl8weDQ1MzQ1MSwnY29udGV4dCc6XzB4NTQxODVkfV19O31maW5hbGx5e3RyeXtpZihfMHg1YjQ0ZjAmJl8weDM2NzE1Yil7bGV0IF8weDM5YzA0ZT1fMHg5ZTRjNGQoKTtfMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV0rKyxfMHg1YjQ0ZjBbJ3RpbWUnXSs9XzB4MjdmYzE1KF8weDM2NzE1YixfMHgzOWMwNGUpLF8weDViNDRmMFsndHMnXT1fMHgzOWMwNGUsXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDIyNildKyssXzB4MmUwYjgzWydoaXRzJ11bXzB4OTIxMGQ1KDB4MWFlKV0rPV8weDI3ZmMxNShfMHgzNjcxNWIsXzB4MzljMDRlKSxfMHgyZTBiODNbJ2hpdHMnXVsndHMnXT1fMHgzOWMwNGUsKF8weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXT4weDMyfHxfMHg1YjQ0ZjBbJ3RpbWUnXT4weDY0KSYmKF8weDViNDRmMFtfMHg5MjEwZDUoMHgxYjYpXT0hMHgwKSwoXzB4MmUwYjgzWydoaXRzJ11bJ2NvdW50J10+MHgzZTh8fF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYWUpXT4weDEyYykmJihfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWI2KV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MjNjMmJlO30oKF8weDRiMDBkOCxfMHg1NTc4ZjEsXzB4M2VkMmE3LF8weDMwZWFhYixfMHgyMTMyOTUsXzB4NTc4ODhiLF8weDRkMjg4YSxfMHgyZmU4OTQsXzB4M2NmYTZhLF8weDI2ZDFkNCk9Pnt2YXIgXzB4MTk5OGQzPV8weDFmN2ZlMTtpZihfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV0pcmV0dXJuIF8weDRiMDBkOFsnX2NvbnNvbGVfbmluamEnXTtpZighSihfMHg0YjAwZDgsXzB4MmZlODk0LF8weDIxMzI5NSkpcmV0dXJuIF8weDRiMDBkOFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NGIwMGQ4W18weDE5OThkMygweDIzMildO2xldCBfMHgxZWM4Yzg9VyhfMHg0YjAwZDgpLF8weDFhM2M3Zj1fMHgxZWM4YzhbJ2VsYXBzZWQnXSxfMHg0MWNmNmE9XzB4MWVjOGM4W18weDE5OThkMygweDIzZCldLF8weDI0NzA2MD1fMHgxZWM4YzhbXzB4MTk5OGQzKDB4MjUxKV0sXzB4MWQzYzQ1PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4NTY4M2JlPVkoXzB4NGIwMGQ4LF8weDNjZmE2YSxfMHgxZDNjNDUsXzB4NTc4ODhiKSxfMHgzZTI0OGY9XzB4MTAzOTJmPT57XzB4MWQzYzQ1Wyd0cyddW18weDEwMzkyZl09XzB4NDFjZjZhKCk7fSxfMHgyZWJiZTc9KF8weDFhMDJjOCxfMHg0MzI3YzEpPT57dmFyIF8weDE1OTVhMz1fMHgxOTk4ZDM7bGV0IF8weDQ4MDExYj1fMHgxZDNjNDVbJ3RzJ11bXzB4NDMyN2MxXTtpZihkZWxldGUgXzB4MWQzYzQ1Wyd0cyddW18weDQzMjdjMV0sXzB4NDgwMTFiKXtsZXQgXzB4NDQxZmVjPV8weDFhM2M3ZihfMHg0ODAxMWIsXzB4NDFjZjZhKCkpO18weDM0MWFkZihfMHg1NjgzYmUoXzB4MTU5NWEzKDB4MWFlKSxfMHgxYTAyYzgsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLFtfMHg0NDFmZWNdLF8weDQzMjdjMSkpO319LF8weDY2NTMwMT1fMHg0MDk1NTM9Pl8weDJhOGQ5Nj0+e3ZhciBfMHgzNWIyYWE9XzB4MTk5OGQzO3RyeXtfMHgzZTI0OGYoXzB4MmE4ZDk2KSxfMHg0MDk1NTMoXzB4MmE4ZDk2KTt9ZmluYWxseXtfMHg0YjAwZDhbJ2NvbnNvbGUnXVtfMHgzNWIyYWEoMHgxYWUpXT1fMHg0MDk1NTM7fX0sXzB4MTQ2MjE1PV8weDVhYTU5MT0+XzB4NDRiOGMwPT57dmFyIF8weGM1YjZlMz1fMHgxOTk4ZDM7dHJ5e2xldCBbXzB4NGViMWI2LF8weDE1NGFkY109XzB4NDRiOGMwW18weGM1YjZlMygweDFmNildKF8weGM1YjZlMygweDI1OSkpO18weDJlYmJlNyhfMHgxNTRhZGMsXzB4NGViMWI2KSxfMHg1YWE1OTEoXzB4NGViMWI2KTt9ZmluYWxseXtfMHg0YjAwZDhbXzB4YzViNmUzKDB4MjU2KV1bJ3RpbWVFbmQnXT1fMHg1YWE1OTE7fX07XzB4NGIwMGQ4W18weDE5OThkMygweDIzMildPXsnY29uc29sZUxvZyc6KF8weDIzOTNmOCxfMHg1MWJlNjIpPT57dmFyIF8weDUxMTUxYj1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weDUxMTUxYigweDI1NildW18weDUxMTUxYigweDFjZCldW18weDUxMTUxYigweDIwNildIT09J2Rpc2FibGVkTG9nJyYmXzB4MzQxYWRmKF8weDU2ODNiZShfMHg1MTE1MWIoMHgxY2QpLF8weDIzOTNmOCxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4NTFiZTYyKSk7fSwnY29uc29sZVRyYWNlJzooXzB4MTE5MzY5LF8weDQ0MjAzMSk9Pnt2YXIgXzB4NTk0YzgwPV8weDE5OThkMztfMHg0YjAwZDhbXzB4NTk0YzgwKDB4MjU2KV1bXzB4NTk0YzgwKDB4MWNkKV1bJ25hbWUnXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MzQxYWRmKF8weDU2ODNiZShfMHg1OTRjODAoMHgxYWIpLF8weDExOTM2OSxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4NDQyMDMxKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDMyZWRmMD1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weDMyZWRmMCgweDI1NildW18weDMyZWRmMCgweDFhZSldPV8weDY2NTMwMShfMHg0YjAwZDhbXzB4MzJlZGYwKDB4MjU2KV1bXzB4MzJlZGYwKDB4MWFlKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHhjZWI3YTk9XzB4MTk5OGQzO18weDRiMDBkOFtfMHhjZWI3YTkoMHgyNTYpXVtfMHhjZWI3YTkoMHgxYTIpXT1fMHgxNDYyMTUoXzB4NGIwMGQ4Wydjb25zb2xlJ11bJ3RpbWVFbmQnXSk7fSwnYXV0b0xvZyc6KF8weDU2MTAyMSxfMHgzMzQzYTYpPT57dmFyIF8weDk5MjUzZj1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg5OTI1M2YoMHgxY2QpLF8weDMzNDNhNixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsW18weDU2MTAyMV0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDE0ZGY2MixfMHgxYWNhODUpPT57dmFyIF8weDRlOTkzND1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg0ZTk5MzQoMHgxY2QpLF8weDE0ZGY2MixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4MWFjYTg1KSk7fSwnYXV0b1RyYWNlJzooXzB4MTlmMzNiLF8weDQ5Y2Y1Yyk9Pnt2YXIgXzB4MzhhYmE1PV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDM4YWJhNSgweDFhYiksXzB4NDljZjVjLF8weDI0NzA2MCgpLF8weDNlMDBmYyxbXzB4MTlmMzNiXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHhjZDk5NjIsXzB4M2FkYmMwKT0+e3ZhciBfMHg0MGE3YWE9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4NDBhN2FhKDB4MWFiKSxfMHhjZDk5NjIsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLF8weDNhZGJjMCkpO30sJ2F1dG9UaW1lJzooXzB4MWUxZmQ3LF8weDJlNTQyOSxfMHgyY2NiMDIpPT57XzB4M2UyNDhmKF8weDJjY2IwMik7fSwnYXV0b1RpbWVFbmQnOihfMHgyZTM4ZTYsXzB4MTQxYmY4LF8weGRjMzNiMik9PntfMHgyZWJiZTcoXzB4MTQxYmY4LF8weGRjMzNiMik7fSwnY292ZXJhZ2UnOl8weDI5OGYzNz0+e3ZhciBfMHgyMzgwYjI9XzB4MTk5OGQzO18weDM0MWFkZih7J21ldGhvZCc6XzB4MjM4MGIyKDB4MWRlKSwndmVyc2lvbic6XzB4NTc4ODhiLCdhcmdzJzpbeydpZCc6XzB4Mjk4ZjM3fV19KTt9fTtsZXQgXzB4MzQxYWRmPWIoXzB4NGIwMGQ4LF8weDU1NzhmMSxfMHgzZWQyYTcsXzB4MzBlYWFiLF8weDIxMzI5NSxfMHgyNmQxZDQpLF8weDNlMDBmYz1fMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjZlKV07cmV0dXJuIF8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXTt9KShnbG9iYWxUaGlzLF8weDFmN2ZlMSgweDIxMyksXzB4MWY3ZmUxKDB4MjBjKSxfMHgxZjdmZTEoMHgxZDcpLF8weDFmN2ZlMSgweDIwOSksJzEuMC4wJyxfMHgxZjdmZTEoMHgxOGUpLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiZGttLWRlc2t0b3BcXFwiLFxcXCIxOTIuMTY4LjEuMTAxXFxcIl0sXzB4MWY3ZmUxKDB4MWFmKSxfMHgxZjdmZTEoMHgxYjEpKTtcIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCAnLi9tb2RhbHMuY3NzJ1xuaW1wb3J0IHsgcHJvamVjdHNBcnJheSwgdXBkYXRlUHJvamVjdHNBcnJheSB9IGZyb20gJy4vZGF0YWhhbmRsZXInXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9kYWwodHlwZSwgLi4uZWRpdFRvZG8pIHtcblx0Ly8gRmV0Y2ggbW9kYWwgZWxlbWVudCBmcm9tIERPTVxuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXG5cdG1vZGFsLnRleHRDb250ZW50ID0gJydcblxuXHQvLyBDcmVhdGUgcmVsZXZhbnQgbW9kYWwgY29udGVudFxuXHQvLyBGb3JtIGVsZW1lbnRzIGhvbGRzIGVudGlyZSBmb3JtIGluc2lkZSBtb2RhbFxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcblxuXHQvL1RpdGxlIGVsZW1lbnQsIHRlbGxzIHRoZSB0eXBlIG9mIG9iamVjdCBiZWluZyBjcmVhdGVkXG5cdGNvbnN0IHBhcmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRwYXJhVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2hlYWRlcicpXG5cdGNvbnN0IG1vZGFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdG1vZGFsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbW9kYWwnKVxuXHRtb2RhbExhYmVsLnRleHRDb250ZW50ID0gdHlwZS50b1VwcGVyQ2FzZSgpXG5cdHBhcmFUaXRsZS5hcHBlbmRDaGlsZChtb2RhbExhYmVsKVxuXG5cdC8vIENoZWNrIHdoaWNoIHR5cGUgdGhlIG1vZGFsIGlzIGZvcih0b2RvLCBvciBwcm9qZWN0Pylcblx0Ly9DcmVhdGUgcmVsZXZhbnQgaW5wdXQgZmllbGRzXG5cdGNvbnN0IGlucHV0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRpbnB1dFBhcmEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblx0aWYgKHR5cGUgPT09ICd0b2RvJykge1xuXHRcdGNyZWF0ZVRvZG9Nb2RhbChpbnB1dFBhcmEpXG5cdH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cdFx0Y3JlYXRlUHJvamVjdE1vZGFsKGlucHV0UGFyYSlcblx0fSBlbHNlIGlmICh0eXBlID09PSAnZWRpdCBUb2RvJykge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDMyMDc1Mzc3OTJfMzJfMl8zMl81Nl80YCwndHJpZ2dlcmVkIGVkaXQsICcgKyBpbnB1dFBhcmEgKyBlZGl0VG9kbykpXG5cdFx0Y3JlYXRlVG9kb01vZGFsKGlucHV0UGFyYSwgLi4uZWRpdFRvZG8pXG5cdH1cblxuXHQvL01vZGFsIGJ1dHRvbnNcblxuXHQvL3N1Ym1pdCBidXR0b25cblx0Y29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXHRzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9uJylcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuXHRzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKVxuXHRzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzdWJtaXQnKVxuXG5cdGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0Y2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ1dHRvbicpXG5cdGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jylcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsJylcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnY2FuY2VsJylcblx0YnRuRGl2LmFwcGVuZChzdWJtaXRCdG4sIGNhbmNlbEJ0bilcblxuXHQvL3B1dCBpdCBhbGwgdG9nZXRoZXIhXG5cdGZvcm0uYXBwZW5kKHBhcmFUaXRsZSwgaW5wdXRQYXJhLCBidG5EaXYpXG5cdG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pXG5cblx0Ly8gQnV0dG9uIGZ1bmN0aW9uYWxpdHk6XG5cdC8vIFN1Ym1pdCBidXR0b25cblx0Ly8gRmV0Y2ggaW5wdXQgdmFsdWVzXG5cdGxldCBtb2RhbElucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0LCBpbnB1dCwgdGV4dGFyZWEnKVxuXHRjb25zdCBpbnB1dFR5cGUgPSBpbnB1dFBhcmEuZ2V0QXR0cmlidXRlKCd0eXBlJylcblx0Y29uc3QgdG9kb0lEID0gaW5wdXRQYXJhLmdldEF0dHJpYnV0ZSgndG9kb0lEJylcblxuXHQvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gc3VibWl0IGJ1dHRvbi5cblx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHQvLyBzZW5kIGlucHV0IHZhbHVlcyBhbmQgaW5wdXRUeXBlIChwcm9qZWN0IG9yIHRvZG8/KSB0byBwcm9jZXNzaW5nXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dXBkYXRlUHJvamVjdHNBcnJheShpbnB1dFR5cGUsIG1vZGFsSW5wdXQsIHRvZG9JRClcblx0XHRtb2RhbC5jbG9zZSgpXG5cdH0pXG5cblx0Ly8gQ2FuY2VsIGJ1dHRvblxuXHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdC8vIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdC8vIGNsZWFyIGRhdGFzZXRcblx0XHRtb2RhbElucHV0ID0gJydcblx0XHQvL2Nsb3NlIG1vZGFsXG5cdFx0bW9kYWwuY2xvc2UoKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTW9kYWwoaW5wdXRQYXJhLCBlZGl0VG9kbykge1xuXHQvLyBFc3RhYmxpc2ggaW5wdXQgdmFyaWFibGVzXG5cdGlucHV0UGFyYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndG9kbycpXG5cdC8vIENoZWNrIGlmIHRoaXMgaXMgYW4gZWRpdCBvcGVyYXRpb24sIG9yIG5ldyBvcGVyYXRpb25cblx0bGV0IGVkaXRPcGVyYXRpb24gPSBmYWxzZVxuXHRpZiAoZWRpdFRvZG8gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDMyMDc1Mzc3OTJfODlfMl84OV82OV80YCwndHJpZ2dlcmVkIGVkaXQgb3BlcmF0aW9uICcgKyBPYmplY3QudmFsdWVzKGFyZ3VtZW50cykpKVxuXHRcdGVkaXRPcGVyYXRpb24gPSB0cnVlXG5cblx0XHRpbnB1dFBhcmEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RvZG8tZWRpdCcpXG5cdFx0aW5wdXRQYXJhLnNldEF0dHJpYnV0ZSgndG9kb0lEJywgZWRpdFRvZG9bNl0pXG5cdH1cblx0Ly8gaW5wdXRQYXJhIHdpbGwgaG9sZCBhbGwgaW5wdXQgZWxlbWVudHMgZm9yIGVhc3kgYXBwZW5kaW5nIGxhdGVyXG5cblx0Ly9Qcm9qZWN0IGlucHV0XG5cdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDMyMDc1Mzc3OTJfOThfMV85OF80OF80YCwnaW5pdGlhdGluZyBtb2RhbCcgKyBlZGl0T3BlcmF0aW9uKSlcblx0Y29uc3QgcHJvamVjdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0U2VsZWN0Jylcblx0cHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ0FjdGl2ZSBwcm9qZWN0OiAnXG5cdGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXHRwcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWxlY3QtUHJvamVjdCcpXG5cdHByb2plY3RTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QtUHJvamVjdCcpXG5cdHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcblx0XHRwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdC50aXRsZSlcblx0XHRwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcblx0XHRwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKVxuXHR9KVxuXHQvL2lmIGVkaXQgb3BlcmF0aW9uLCBzZWxlY3QgcHJvamVjdC5cblx0aWYgKGVkaXRPcGVyYXRpb24pIHtcblx0XHRwcm9qZWN0U2VsZWN0LnZhbHVlID0gZWRpdFRvZG9bMF1cblx0fVxuXHRwcm9qZWN0Q29udC5hcHBlbmQocHJvamVjdExhYmVsLCBwcm9qZWN0U2VsZWN0KVxuXG5cdC8vIFRpdGxlIGlucHV0XG5cdGNvbnN0IHRpdGxlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGVJbnB1dCcpXG5cdHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICdcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0aWYgKGVkaXRPcGVyYXRpb24pIHtcblx0XHR0aXRsZUlucHV0LnZhbHVlID0gZWRpdFRvZG9bMV1cblx0fVxuXHRzZXRJbnB1dEF0dHJpYnV0ZXModGl0bGVJbnB1dCwgJ3RpdGxlJywgJ3RleHQnKVxuXHQvLyBhZGQgZXh0cmEgYXR0cmlidXRlIG9uIHRoaXMgb25lIHNvIGl0J3MgdGhlIGZpcnN0IGlucHV0IGZpZWxkIGZvY3Vzc2VkXG5cdHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnJylcblx0Ly8gcGFja2FnZSBlbGVtZW50XG5cdHRpdGxlQ29udC5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dClcblxuXHQvLyBkZXNjcmlwdGlvbiBpbnB1dFxuXHRjb25zdCBkZXNjQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5cdGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb25JbnB1dCcpXG5cdGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcblx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0aWYgKGVkaXRPcGVyYXRpb24pIHtcblx0XHRkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZWRpdFRvZG9bMl1cblx0fVxuXHRzZXRJbnB1dEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCwgJ2Rlc2NyaXB0aW9uJywgJ3RleHQnKVxuXHRkZXNjQ29udC5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dClcblxuXHQvLyBkdWVEYXRlIGlucHV0XG5cdGNvbnN0IGR1ZURhdGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0Y29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZUlucHV0Jylcblx0ZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAnXG5cdGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0c2V0SW5wdXRBdHRyaWJ1dGVzKGR1ZURhdGVJbnB1dCwgJ2R1ZURhdGUnLCAnZGF0ZScpXG5cdGlmIChlZGl0T3BlcmF0aW9uKSB7XG5cdFx0Y29uc3Qgb3JpZ2luYWxEYXRlID0gZm9ybWF0KG5ldyBEYXRlKGVkaXRUb2RvWzNdKSwgJ3l5eXktTU0tZGQnKVxuXHRcdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBvcmlnaW5hbERhdGVcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzMjA3NTM3NzkyXzE1NV8yXzE1NV8yOF80YCxmb3JtYXR0ZWREYXRlKSlcblx0XHRkdWVEYXRlSW5wdXQudmFsdWUgPSBvcmlnaW5hbERhdGVcblx0fVxuXG5cdGR1ZURhdGVDb250LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dClcblxuXHQvLyBwcmlvcml0eVxuXHRjb25zdCBwcmlvcml0eUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5SW5wdXQnKVxuXHRwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5cdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cdGlmIChlZGl0T3BlcmF0aW9uKSB7XG5cdFx0cHJpb3JpdHlJbnB1dC5jaGVja2VkID0gZWRpdFRvZG9bNF0gPT09ICd0cnVlJ1xuXHR9XG5cdHNldElucHV0QXR0cmlidXRlcyhwcmlvcml0eUlucHV0LCAncHJpb3JpdHknLCAnY2hlY2tib3gnKVxuXHRwcmlvcml0eUNvbnQuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXQpXG5cblx0Ly8gTm90ZXNcblx0Y29uc3Qgbm90ZXNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0Y29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcblx0bm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3Rlc0lucHV0Jylcblx0bm90ZXNMYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlczogJ1xuXHRjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXHRpZiAoZWRpdE9wZXJhdGlvbikge1xuXHRcdG5vdGVzSW5wdXQudmFsdWUgPSBlZGl0VG9kb1s1XVxuXHR9XG5cdHNldElucHV0QXR0cmlidXRlcyhub3Rlc0lucHV0LCAnbm90ZXMnLCAndGV4dEFyZWEnKVxuXHQvLyB0ZXh0QXJlYSBzcGVjaWZpYyBhdHRyaWJ1dGVzXG5cblx0bm90ZXNDb250LmFwcGVuZChub3Rlc0xhYmVsLCBub3Rlc0lucHV0KVxuXG5cdC8vIFB1dCBpdCBhbGwgdG9nZXRoZXJcblx0aW5wdXRQYXJhLmFwcGVuZChcblx0XHRwcm9qZWN0Q29udCxcblx0XHR0aXRsZUNvbnQsXG5cdFx0ZGVzY0NvbnQsXG5cdFx0ZHVlRGF0ZUNvbnQsXG5cdFx0cHJpb3JpdHlDb250LFxuXHRcdG5vdGVzQ29udFxuXHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RNb2RhbChpbnB1dFBhcmEpIHtcblx0Ly8gaW5wdXRQYXJhIGhvbGRzIGVsZW1lbnRzIGJlbG93IGZvciBlYXN5IGFwcGVuZGluZ1xuXHQvLyBhc3NpZ24gdHlwZSBhdHRyaWJ1dGUgZm9yIGxhdGVyIHByb2Nlc3Npbmdcblx0aW5wdXRQYXJhLnNldEF0dHJpYnV0ZSgndHlwZScsICdwcm9qZWN0Jylcblx0Y29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcblx0dGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jylcblx0dGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTogJ1xuXHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXHRzZXRJbnB1dEF0dHJpYnV0ZXModGl0bGVJbnB1dCwgJ3RpdGxlJywgJ3RleHQnKVxuXHQvLyBwYWNrYWdlIGVsZW1lbnRcblx0dGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXHQvLyBwdXQgaXQgdG9nZXRoZXJcblx0aW5wdXRQYXJhLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG59XG5cbmZ1bmN0aW9uIHNldElucHV0QXR0cmlidXRlcyhlbGVtLCB0eXBlLCBpbnBUeXBlKSB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG5cdFx0bmFtZTogJ3Byb2plY3QtJyArIHR5cGUsXG5cdFx0aWQ6ICdwcm9qZWN0LScgKyB0eXBlLFxuXHRcdHR5cGU6IGlucFR5cGUsXG5cdFx0cmVxdWlyZWQ6ICcnLFxuXHR9XG5cdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuXHRcdGVsZW0uc2V0QXR0cmlidXRlKGtleSwgdmFsKVxuXHR9XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLy8qIGM4IGlnbm9yZSBzdGFydCAqLy8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MWY3ZmUxPV8weDM3ZTQ7KGZ1bmN0aW9uKF8weDQ3ZmZiNSxfMHgzMDU3MTYpe3ZhciBfMHgzNzJkODQ9XzB4MzdlNCxfMHgzMjVlOGY9XzB4NDdmZmI1KCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0OTM2MTE9LXBhcnNlSW50KF8weDM3MmQ4NCgweDIyNSkpLzB4MSooLXBhcnNlSW50KF8weDM3MmQ4NCgweDFkNikpLzB4MikrLXBhcnNlSW50KF8weDM3MmQ4NCgweDFhOSkpLzB4MyooLXBhcnNlSW50KF8weDM3MmQ4NCgweDI3MikpLzB4NCkrLXBhcnNlSW50KF8weDM3MmQ4NCgweDI1YikpLzB4NSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MThiKSkvMHg2KigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjM1KSkvMHg3KSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWYxKSkvMHg4KihwYXJzZUludChfMHgzNzJkODQoMHgxYjkpKS8weDkpK3BhcnNlSW50KF8weDM3MmQ4NCgweDFmMikpLzB4YSooLXBhcnNlSW50KF8weDM3MmQ4NCgweDFlZCkpLzB4YikrcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWU4KSkvMHhjO2lmKF8weDQ5MzYxMT09PV8weDMwNTcxNilicmVhaztlbHNlIF8weDMyNWU4ZlsncHVzaCddKF8weDMyNWU4Zlsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MmI0OTllKXtfMHgzMjVlOGZbJ3B1c2gnXShfMHgzMjVlOGZbJ3NoaWZ0J10oKSk7fX19KF8weDI4ZWQsMHg0NWY1OCkpO2Z1bmN0aW9uIF8weDI4ZWQoKXt2YXIgXzB4OGJhNGQ3PVsnOmxvZ1BvaW50SWQ6JywnX0hUTUxBbGxDb2xsZWN0aW9uJywnMjM3NjM2NW1qVE1RYScsJ2NvbmNhdCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdzZXR0ZXInLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ3JlcGxhY2UnLCdwYXJzZScsJ2dldE93blByb3BlcnR5TmFtZXMnLCdwb3J0JywnX3JlY29ubmVjdFRpbWVvdXQnLCdub2RlTW9kdWxlcycsJ1N0cmluZycsJ19wcm9wZXJ0eScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdfYWxsb3dlZFRvU2VuZCcsJ3VybCcsJ3dzL2luZGV4LmpzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywncmVzb2x2ZUdldHRlcnMnLCdjb25zdHJ1Y3RvcicsJ19wcm9wZXJ0eU5hbWUnLCc4ODg2NFBlTm9RbicsJ3Byb3BzJywnYXV0b0V4cGFuZCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnbWV0aG9kJywnbGV2ZWwnLCdjcmVhdGUnLCdvbmNsb3NlJywndmVyc2lvbnMnLCdleHBJZCcsJzQ1Mzc4NmhaUlRNUScsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnX2luTmV4dEVkZ2UnLCcxNzA5MzExMDE2NzQwJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdoYXNPd25Qcm9wZXJ0eScsJ2luZGV4JywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ3N0YWNrJywnX3dzJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdlZGdlJywnQnVmZmVyJywnb2JqZWN0Jywnc2V0Jywnd3M6Ly8nLCdfY2xlYW5Ob2RlJywnYXN0cm8nLCdfdHlwZScsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnY2F0Y2gnLCdwcm90b3R5cGUnLCdfcF8nLCd0aW1lRW5kJywnV2ViU29ja2V0JywnZ2xvYmFsJywnc2xpY2UnLCdFcnJvcicsJ19pc1ByaW1pdGl2ZVR5cGUnLCdfaXNVbmRlZmluZWQnLCc1NGlSblFKTicsJ19vYmplY3RUb1N0cmluZycsJ3RyYWNlJywnaXNBcnJheScsJ19xdW90ZWRSZWdFeHAnLCd0aW1lJywnJywnX3NldE5vZGVMYWJlbCcsJycsJ3Vua25vd24nLCdmdW5jTmFtZScsJ1NldCcsJ1xcXFx4MjBicm93c2VyJywncmVkdWNlTGltaXRzJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnOVZwSEVNUycsJ2luY2x1ZGVzJywnX1N5bWJvbCcsJ25lZ2F0aXZlSW5maW5pdHknLCdmdW5jdGlvbicsJ21lc3NhZ2UnLCduYW4nLCdvbm1lc3NhZ2UnLCdfZGF0ZVRvU3RyaW5nJywncm9vdF9leHAnLCdyb290RXhwcmVzc2lvbicsJ2RvY2tlcml6ZWRBcHAnLCdfV2ViU29ja2V0Q2xhc3MnLCdnZXR0ZXInLCdob3N0bmFtZScsJ3dhcm4nLCdhcnJheScsJ19pc01hcCcsJ2VsYXBzZWQnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ2xvZycsJ05FR0FUSVZFX0lORklOSVRZJywnY2FwcGVkRWxlbWVudHMnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywncmVsb2FkJywnX2Nvbm5lY3RlZCcsJ3ZhbHVlJywncmVhZHlTdGF0ZScsJ2F1dG9FeHBhbmRMaW1pdCcsJzE0dHdVZ1hIJyxcXFwiL2hvbWUvZGFuaWVsbHIvLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yOTAvbm9kZV9tb2R1bGVzXFxcIiwnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnLi4uJywnc3RyaW5nJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfY2FwSWZTdHJpbmcnLCdhbGxTdHJMZW5ndGgnLCdjb3ZlcmFnZScsJ21hcCcsJ3BvcCcsJ19hZGRMb2FkTm9kZScsJ2VsZW1lbnRzJywnbnVtYmVyJywnTWFwJywncGF0aCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnTkVYVF9SVU5USU1FJywnODc3MjA5NmFCZWlOYScsJ19yZWdFeHBUb1N0cmluZycsJ19zZXROb2RlSWQnLCd0b3RhbFN0ckxlbmd0aCcsJ2RhdGEnLCcyNzV6Q2ZhdUcnLCduZWdhdGl2ZVplcm8nLCdzeW1ib2wnLCdnZXRXZWJTb2NrZXRDbGFzcycsJzM4Mjc0NjRmc2l2VWMnLCc5OTQzMHJNcHdjcycsJ3B1c2gnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ2VudicsJ3NwbGl0JywnbnVsbCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCd0eXBlJywnX2tleVN0clJlZ0V4cCcsJ19fZXMnKydNb2R1bGUnLCdub2RlJywnX2hhc01hcE9uSXRzUGF0aCcsJ3RvU3RyaW5nJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnY2xvc2UnLCdzZW5kJywnX2lzTmVnYXRpdmVaZXJvJywndGhlbicsJ19pbkJyb3dzZXInLCd1bnJlZicsJ25hbWUnLCd1bnNoaWZ0JywnaGl0cycsJ3dlYnBhY2snLCdfc29ja2V0JywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCczNDg3OScsJ2xlbmd0aCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywncGVyZl9ob29rcycsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ19pc1NldCcsJ19zZW5kRXJyb3JNZXNzYWdlJywnMTI3LjAuMC4xJywncHJvY2VzcycsJ2hvc3QnLCdqb2luJywnSFRNTEFsbENvbGxlY3Rpb24nLCdfYWRkRnVuY3Rpb25zTm9kZScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdzdHJMZW5ndGgnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdjYWxsJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2RlcHRoJywnX1dlYlNvY2tldCcsJ2JpbmQnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCcyOTUyNVlHUk5CSicsJ2NvdW50Jywnbm9GdW5jdGlvbnMnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ3N0YWNrVHJhY2VMaW1pdCcsJ051bWJlcicsJ3BlcmZvcm1hbmNlJywndGVzdCcsJ3ZhbHVlT2YnLCdwb3NpdGl2ZUluZmluaXR5JywnX3BfbGVuZ3RoJywnZXJyb3InLCdvbmVycm9yJywnX2NvbnNvbGVfbmluamEnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdjYXBwZWRQcm9wcycsJzE0aHhES1lWJywnaW5kZXhPZicsJ2ZvckVhY2gnLCdwYXJlbnQnLCdnZXQnLCdzZXJpYWxpemUnLCdnZXRQcm90b3R5cGVPZicsJ19hZGRQcm9wZXJ0eScsJ3RpbWVTdGFtcCcsJ2xvY2F0aW9uJywnY2FwcGVkJywndW5kZWZpbmVkJywnX2Nvbm5lY3RpbmcnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ2VudW1lcmFibGUnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ1xcXFx4MjBzZXJ2ZXInLCdocnRpbWUnLCdzb3J0UHJvcHMnLCdtYXRjaCcsJ2JpZ2ludCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnc29ydCcsJ3RvTG93ZXJDYXNlJywnX3VuZGVmaW5lZCcsJ29ub3BlbicsJ25vdycsJ1BPU0lUSVZFX0lORklOSVRZJywnY3VycmVudCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnX2lzQXJyYXknLCdjb25zb2xlJywnX2FkZE9iamVjdFByb3BlcnR5JywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnXTtfMHgyOGVkPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDhiYTRkNzt9O3JldHVybiBfMHgyOGVkKCk7fWZ1bmN0aW9uIF8weDM3ZTQoXzB4NjllMTQ2LF8weDNkYjI4ZCl7dmFyIF8weDI4ZWQ2ZT1fMHgyOGVkKCk7cmV0dXJuIF8weDM3ZTQ9ZnVuY3Rpb24oXzB4MzdlNDYwLF8weDE5YTI1Nyl7XzB4MzdlNDYwPV8weDM3ZTQ2MC0weDE4OTt2YXIgXzB4MTg5MGNkPV8weDI4ZWQ2ZVtfMHgzN2U0NjBdO3JldHVybiBfMHgxODkwY2Q7fSxfMHgzN2U0KF8weDY5ZTE0NixfMHgzZGIyOGQpO312YXIgaj1PYmplY3RbXzB4MWY3ZmUxKDB4Mjc4KV0sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MWY3ZmUxKDB4MWI4KV0sZWU9T2JqZWN0W18weDFmN2ZlMSgweDI2MildLHRlPU9iamVjdFtfMHgxZjdmZTEoMHgyM2IpXSxuZT1PYmplY3RbXzB4MWY3ZmUxKDB4MWEwKV1bXzB4MWY3ZmUxKDB4MTkwKV0scmU9KF8weDVhYzY0MixfMHgxY2Y1NjAsXzB4NTYxNTUzLF8weDIwYzQ0Nyk9Pnt2YXIgXzB4NDVjMjAyPV8weDFmN2ZlMTtpZihfMHgxY2Y1NjAmJnR5cGVvZiBfMHgxY2Y1NjA9PV8weDQ1YzIwMigweDE5OCl8fHR5cGVvZiBfMHgxY2Y1NjA9PV8weDQ1YzIwMigweDFiZCkpe2ZvcihsZXQgXzB4NTA4YTJjIG9mIGVlKF8weDFjZjU2MCkpIW5lW18weDQ1YzIwMigweDIxZCldKF8weDVhYzY0MixfMHg1MDhhMmMpJiZfMHg1MDhhMmMhPT1fMHg1NjE1NTMmJkgoXzB4NWFjNjQyLF8weDUwOGEyYyx7J2dldCc6KCk9Pl8weDFjZjU2MFtfMHg1MDhhMmNdLCdlbnVtZXJhYmxlJzohKF8weDIwYzQ0Nz1HKF8weDFjZjU2MCxfMHg1MDhhMmMpKXx8XzB4MjBjNDQ3W18weDQ1YzIwMigweDI0NCldfSk7fXJldHVybiBfMHg1YWM2NDI7fSx4PShfMHgxYTkyNjEsXzB4Yjg0MmUxLF8weDNhMTIzZCk9PihfMHgzYTEyM2Q9XzB4MWE5MjYxIT1udWxsP2oodGUoXzB4MWE5MjYxKSk6e30scmUoXzB4Yjg0MmUxfHwhXzB4MWE5MjYxfHwhXzB4MWE5MjYxW18weDFmN2ZlMSgweDFmYildP0goXzB4M2ExMjNkLCdkZWZhdWx0Jyx7J3ZhbHVlJzpfMHgxYTkyNjEsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzYTEyM2QsXzB4MWE5MjYxKSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgyNTg5NDYsXzB4NGFiYzI0LF8weDUzYTkwYSxfMHg2OGRiNDUsXzB4NTQ1N2U4KXt2YXIgXzB4MjU5N2NiPV8weDFmN2ZlMTt0aGlzW18weDI1OTdjYigweDFhNCldPV8weDI1ODk0Nix0aGlzW18weDI1OTdjYigweDIxNSldPV8weDRhYmMyNCx0aGlzW18weDI1OTdjYigweDI2MyldPV8weDUzYTkwYSx0aGlzW18weDI1OTdjYigweDI2NSldPV8weDY4ZGI0NSx0aGlzWydkb2NrZXJpemVkQXBwJ109XzB4NTQ1N2U4LHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzW18weDI1OTdjYigweDFjYyldPSEweDAsdGhpc1tfMHgyNTk3Y2IoMHgxZDIpXT0hMHgxLHRoaXNbXzB4MjU5N2NiKDB4MjQxKV09ITB4MSx0aGlzW18weDI1OTdjYigweDE4ZCldPV8weDI1ODk0NltfMHgyNTk3Y2IoMHgyMTQpXT8uWydlbnYnXT8uW18weDI1OTdjYigweDFlNyldPT09J2VkZ2UnLHRoaXNbXzB4MjU5N2NiKDB4MjA0KV09IXRoaXNbXzB4MjU5N2NiKDB4MWE0KV1bXzB4MjU5N2NiKDB4MjE0KV0/LltfMHgyNTk3Y2IoMHgxODkpXT8uW18weDI1OTdjYigweDFmYyldJiYhdGhpc1tfMHgyNTk3Y2IoMHgxOGQpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbXzB4MjU5N2NiKDB4MWY0KV09MHgwLHRoaXNbXzB4MjU5N2NiKDB4MWRiKV09MHgxNCx0aGlzW18weDI1OTdjYigweDE5ZSldPV8weDI1OTdjYigweDI0NiksdGhpc1tfMHgyNTk3Y2IoMHgyMTIpXT0odGhpc1tfMHgyNTk3Y2IoMHgyMDQpXT9fMHgyNTk3Y2IoMHgyNWYpOl8weDI1OTdjYigweDI2ZCkpK3RoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ107fWFzeW5jW18weDFmN2ZlMSgweDFmMCldKCl7dmFyIF8weDMzNjFhNj1fMHgxZjdmZTE7aWYodGhpc1tfMHgzMzYxYTYoMHgxYzUpXSlyZXR1cm4gdGhpc1snX1dlYlNvY2tldENsYXNzJ107bGV0IF8weDI0MGQ4ZjtpZih0aGlzW18weDMzNjFhNigweDIwNCldfHx0aGlzWydfaW5OZXh0RWRnZSddKV8weDI0MGQ4Zj10aGlzWydnbG9iYWwnXVtfMHgzMzYxYTYoMHgxYTMpXTtlbHNle2lmKHRoaXNbJ2dsb2JhbCddWydwcm9jZXNzJ10/LltfMHgzMzYxYTYoMHgyMjEpXSlfMHgyNDBkOGY9dGhpc1snZ2xvYmFsJ11bXzB4MzM2MWE2KDB4MjE0KV0/LltfMHgzMzYxYTYoMHgyMjEpXTtlbHNlIHRyeXtsZXQgXzB4NDI1OTEyPWF3YWl0IGltcG9ydChfMHgzMzYxYTYoMHgxZTUpKTtfMHgyNDBkOGY9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDMzNjFhNigweDI2YikpKVsncGF0aFRvRmlsZVVSTCddKF8weDQyNTkxMltfMHgzMzYxYTYoMHgyMTYpXSh0aGlzW18weDMzNjFhNigweDI2NSldLF8weDMzNjFhNigweDI2YykpKVtfMHgzMzYxYTYoMHgxZmUpXSgpKSlbJ2RlZmF1bHQnXTt9Y2F0Y2h7dHJ5e18weDI0MGQ4Zj1yZXF1aXJlKHJlcXVpcmUoXzB4MzM2MWE2KDB4MWU1KSlbXzB4MzM2MWE2KDB4MjE2KV0odGhpc1tfMHgzMzYxYTYoMHgyNjUpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgzMzYxYTYoMHgyMWMpKTt9fX1yZXR1cm4gdGhpc1tfMHgzMzYxYTYoMHgxYzUpXT1fMHgyNDBkOGYsXzB4MjQwZDhmO31bXzB4MWY3ZmUxKDB4MThmKV0oKXt2YXIgXzB4MTA0MWM3PV8weDFmN2ZlMTt0aGlzW18weDEwNDFjNygweDI0MSldfHx0aGlzW18weDEwNDFjNygweDFkMildfHx0aGlzW18weDEwNDFjNygweDFmNCldPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddfHwodGhpc1tfMHgxMDQxYzcoMHgxY2MpXT0hMHgxLHRoaXNbXzB4MTA0MWM3KDB4MjQxKV09ITB4MCx0aGlzW18weDEwNDFjNygweDFmNCldKyssdGhpc1tfMHgxMDQxYzcoMHgxOTQpXT1uZXcgUHJvbWlzZSgoXzB4MWQ0N2E4LF8weDMwMjZkNik9Pnt2YXIgXzB4ZGQxMTA2PV8weDEwNDFjNzt0aGlzW18weGRkMTEwNigweDFmMCldKClbXzB4ZGQxMTA2KDB4MjAzKV0oXzB4NGNjOGZmPT57dmFyIF8weDQ3ZGFjNz1fMHhkZDExMDY7bGV0IF8weDFkMTBkMD1uZXcgXzB4NGNjOGZmKF8weDQ3ZGFjNygweDE5YSkrKCF0aGlzW18weDQ3ZGFjNygweDIwNCldJiZ0aGlzW18weDQ3ZGFjNygweDFjNCldP18weDQ3ZGFjNygweDI1OCk6dGhpc1snaG9zdCddKSsnOicrdGhpc1sncG9ydCddKTtfMHgxZDEwZDBbXzB4NDdkYWM3KDB4MjMxKV09KCk9Pnt2YXIgXzB4ODM2Y2UwPV8weDQ3ZGFjNzt0aGlzW18weDgzNmNlMCgweDI2YSldPSEweDEsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxZDEwZDApLHRoaXNbXzB4ODM2Y2UwKDB4MjI4KV0oKSxfMHgzMDI2ZDYobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MWQxMGQwW18weDQ3ZGFjNygweDI1MCldPSgpPT57dmFyIF8weDMxNmQ5OD1fMHg0N2RhYzc7dGhpc1snX2luQnJvd3NlciddfHxfMHgxZDEwZDBbXzB4MzE2ZDk4KDB4MjBhKV0mJl8weDFkMTBkMFtfMHgzMTZkOTgoMHgyMGEpXVsndW5yZWYnXSYmXzB4MWQxMGQwW18weDMxNmQ5OCgweDIwYSldW18weDMxNmQ5OCgweDIwNSldKCksXzB4MWQ0N2E4KF8weDFkMTBkMCk7fSxfMHgxZDEwZDBbJ29uY2xvc2UnXT0oKT0+e3ZhciBfMHgzMTkwMWI9XzB4NDdkYWM3O3RoaXNbXzB4MzE5MDFiKDB4MWNjKV09ITB4MCx0aGlzW18weDMxOTAxYigweDIwYildKF8weDFkMTBkMCksdGhpc1tfMHgzMTkwMWIoMHgyMjgpXSgpO30sXzB4MWQxMGQwW18weDQ3ZGFjNygweDFjMCldPV8weDkzNDMxOT0+e3ZhciBfMHgyZjI5MTc9XzB4NDdkYWM3O3RyeXtfMHg5MzQzMTkmJl8weDkzNDMxOVtfMHgyZjI5MTcoMHgxZWMpXSYmdGhpc1tfMHgyZjI5MTcoMHgyMDQpXSYmSlNPTltfMHgyZjI5MTcoMHgyNjEpXShfMHg5MzQzMTlbJ2RhdGEnXSlbXzB4MmYyOTE3KDB4Mjc2KV09PT1fMHgyZjI5MTcoMHgxZDEpJiZ0aGlzW18weDJmMjkxNygweDFhNCldW18weDJmMjkxNygweDIzZSldWydyZWxvYWQnXSgpO31jYXRjaHt9fTt9KVtfMHhkZDExMDYoMHgyMDMpXShfMHg0Nzk1Nzg9Pih0aGlzW18weGRkMTEwNigweDFkMildPSEweDAsdGhpc1tfMHhkZDExMDYoMHgyNDEpXT0hMHgxLHRoaXNbXzB4ZGQxMTA2KDB4MWNjKV09ITB4MSx0aGlzW18weGRkMTEwNigweDI2YSldPSEweDAsdGhpc1tfMHhkZDExMDYoMHgxZjQpXT0weDAsXzB4NDc5NTc4KSlbXzB4ZGQxMTA2KDB4MTlmKV0oXzB4NGVkZDMwPT4odGhpc1tfMHhkZDExMDYoMHgxZDIpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxjb25zb2xlW18weGRkMTEwNigweDFjOCldKF8weGRkMTEwNigweDI0YykrdGhpc1tfMHhkZDExMDYoMHgxOWUpXSksXzB4MzAyNmQ2KG5ldyBFcnJvcihfMHhkZDExMDYoMHgxYjcpKyhfMHg0ZWRkMzAmJl8weDRlZGQzMFtfMHhkZDExMDYoMHgxYmUpXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDQ5MzE4ZCl7dmFyIF8weDQzMjNjMD1fMHgxZjdmZTE7dGhpc1tfMHg0MzIzYzAoMHgxZDIpXT0hMHgxLHRoaXNbXzB4NDMyM2MwKDB4MjQxKV09ITB4MTt0cnl7XzB4NDkzMThkW18weDQzMjNjMCgweDI3OSldPW51bGwsXzB4NDkzMThkW18weDQzMjNjMCgweDIzMSldPW51bGwsXzB4NDkzMThkW18weDQzMjNjMCgweDI1MCldPW51bGw7fWNhdGNoe310cnl7XzB4NDkzMThkW18weDQzMjNjMCgweDFkNCldPDB4MiYmXzB4NDkzMThkW18weDQzMjNjMCgweDIwMCldKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weGFmYWU1OD1fMHgxZjdmZTE7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4YWZhZTU4KDB4MjY0KV0pLCEodGhpc1tfMHhhZmFlNTgoMHgxZjQpXT49dGhpc1tfMHhhZmFlNTgoMHgxZGIpXSkmJih0aGlzW18weGFmYWU1OCgweDI2NCldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MTdjZTFiPV8weGFmYWU1ODt0aGlzW18weDE3Y2UxYigweDFkMildfHx0aGlzW18weDE3Y2UxYigweDI0MSldfHwodGhpc1tfMHgxN2NlMWIoMHgxOGYpXSgpLHRoaXNbJ193cyddPy5bXzB4MTdjZTFiKDB4MTlmKV0oKCk9PnRoaXNbXzB4MTdjZTFiKDB4MjI4KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4YWZhZTU4KDB4MjY0KV1bXzB4YWZhZTU4KDB4MjA1KV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4YWZhZTU4KDB4MjA1KV0oKSk7fWFzeW5jW18weDFmN2ZlMSgweDIwMSldKF8weDE2NzY2ZSl7dmFyIF8weDE1MGM0ZT1fMHgxZjdmZTE7dHJ5e2lmKCF0aGlzW18weDE1MGM0ZSgweDI2YSldKXJldHVybjt0aGlzW18weDE1MGM0ZSgweDFjYyldJiZ0aGlzW18weDE1MGM0ZSgweDE4ZildKCksKGF3YWl0IHRoaXNbXzB4MTUwYzRlKDB4MTk0KV0pW18weDE1MGM0ZSgweDIwMSldKEpTT05bJ3N0cmluZ2lmeSddKF8weDE2NzY2ZSkpO31jYXRjaChfMHg1OGQ5YWEpe2NvbnNvbGVbXzB4MTUwYzRlKDB4MWM4KV0odGhpc1tfMHgxNTBjNGUoMHgyMTIpXSsnOlxcXFx4MjAnKyhfMHg1OGQ5YWEmJl8weDU4ZDlhYVtfMHgxNTBjNGUoMHgxYmUpXSkpLHRoaXNbXzB4MTUwYzRlKDB4MjZhKV09ITB4MSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fX19O2Z1bmN0aW9uIGIoXzB4MTI2NmU2LF8weDVlNWViZSxfMHgzNjU5YjAsXzB4NDJlMDRlLF8weDUwMzc1NCxfMHhmOTU1MDEpe3ZhciBfMHgxY2JmNzc9XzB4MWY3ZmUxO2xldCBfMHgxYzI4MTQ9XzB4MzY1OWIwWydzcGxpdCddKCcsJylbXzB4MWNiZjc3KDB4MWRmKV0oXzB4MjkwMTQ4PT57dmFyIF8weDQzMzZlNT1fMHgxY2JmNzc7dHJ5e18weDEyNjZlNltfMHg0MzM2ZTUoMHgyNmUpXXx8KChfMHg1MDM3NTQ9PT0nbmV4dC5qcyd8fF8weDUwMzc1ND09PSdyZW1peCd8fF8weDUwMzc1ND09PV8weDQzMzZlNSgweDE5Yyl8fF8weDUwMzc1ND09PSdhbmd1bGFyJykmJihfMHg1MDM3NTQrPSFfMHgxMjY2ZTZbXzB4NDMzNmU1KDB4MjE0KV0/LlsndmVyc2lvbnMnXT8uW18weDQzMzZlNSgweDFmYyldJiZfMHgxMjY2ZTZbXzB4NDMzNmU1KDB4MjE0KV0/LltfMHg0MzM2ZTUoMHgxZjUpXT8uWydORVhUX1JVTlRJTUUnXSE9PV8weDQzMzZlNSgweDE5Nik/XzB4NDMzNmU1KDB4MWI1KTpfMHg0MzM2ZTUoMHgyNDcpKSxfMHgxMjY2ZTZbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NTAzNzU0fSk7bGV0IF8weGQyZTM2Nj1uZXcgWChfMHgxMjY2ZTYsXzB4NWU1ZWJlLF8weDI5MDE0OCxfMHg0MmUwNGUsXzB4Zjk1NTAxKTtyZXR1cm4gXzB4ZDJlMzY2W18weDQzMzZlNSgweDIwMSldW18weDQzMzZlNSgweDIyMildKF8weGQyZTM2Nik7fWNhdGNoKF8weDQ2MzA0Zil7cmV0dXJuIGNvbnNvbGVbJ3dhcm4nXShfMHg0MzM2ZTUoMHgyNTQpLF8weDQ2MzA0ZiYmXzB4NDYzMDRmW18weDQzMzZlNSgweDFiZSldKSwoKT0+e307fX0pO3JldHVybiBfMHgxMzBhZjQ9Pl8weDFjMjgxNFtfMHgxY2JmNzcoMHgyMzcpXShfMHgzNTM4OTE9Pl8weDM1Mzg5MShfMHgxMzBhZjQpKTt9ZnVuY3Rpb24gVyhfMHgyM2ZhOWYpe3ZhciBfMHg0MDllMGQ9XzB4MWY3ZmUxO2xldCBfMHg0ZTgyODk9ZnVuY3Rpb24oXzB4MWRlYWY4LF8weDE3NWIwYil7cmV0dXJuIF8weDE3NWIwYi1fMHgxZGVhZjg7fSxfMHg1MjYzMGY7aWYoXzB4MjNmYTlmW18weDQwOWUwZCgweDIyYildKV8weDUyNjMwZj1mdW5jdGlvbigpe3ZhciBfMHgzNDNiZj1fMHg0MDllMGQ7cmV0dXJuIF8weDIzZmE5ZltfMHgzNDNiZigweDIyYildW18weDM0M2JmKDB4MjUxKV0oKTt9O2Vsc2V7aWYoXzB4MjNmYTlmW18weDQwOWUwZCgweDIxNCldJiZfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjE0KV1bXzB4NDA5ZTBkKDB4MjQ4KV0mJl8weDIzZmE5ZltfMHg0MDllMGQoMHgyMTQpXT8uW18weDQwOWUwZCgweDFmNSldPy5bXzB4NDA5ZTBkKDB4MWU3KV0hPT1fMHg0MDllMGQoMHgxOTYpKV8weDUyNjMwZj1mdW5jdGlvbigpe3ZhciBfMHgzZjIxYjQ9XzB4NDA5ZTBkO3JldHVybiBfMHgyM2ZhOWZbXzB4M2YyMWI0KDB4MjE0KV1bXzB4M2YyMWI0KDB4MjQ4KV0oKTt9LF8weDRlODI4OT1mdW5jdGlvbihfMHg1YmEwZmYsXzB4M2Y3NWZiKXtyZXR1cm4gMHgzZTgqKF8weDNmNzVmYlsweDBdLV8weDViYTBmZlsweDBdKSsoXzB4M2Y3NWZiWzB4MV0tXzB4NWJhMGZmWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDgzMGY0MX09cmVxdWlyZShfMHg0MDllMGQoMHgyMGYpKTtfMHg1MjYzMGY9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4ODMwZjQxWydub3cnXSgpO307fWNhdGNoe18weDUyNjMwZj1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDRlODI4OSwndGltZVN0YW1wJzpfMHg1MjYzMGYsJ25vdyc6KCk9PkRhdGVbXzB4NDA5ZTBkKDB4MjUxKV0oKX07fWZ1bmN0aW9uIEooXzB4NDIyMGMxLF8weDJhZWY3NCxfMHgzY2YwMjkpe3ZhciBfMHg1NTEyNDY9XzB4MWY3ZmUxO2lmKF8weDQyMjBjMVtfMHg1NTEyNDYoMHgxZmYpXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0MjIwYzFbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO2xldCBfMHgxMjgzZjQ9XzB4NDIyMGMxW18weDU1MTI0NigweDIxNCldPy5bXzB4NTUxMjQ2KDB4MTg5KV0/LltfMHg1NTEyNDYoMHgxZmMpXXx8XzB4NDIyMGMxW18weDU1MTI0NigweDIxNCldPy5bXzB4NTUxMjQ2KDB4MWY1KV0/LlsnTkVYVF9SVU5USU1FJ109PT1fMHg1NTEyNDYoMHgxOTYpO3JldHVybiBfMHgxMjgzZjQmJl8weDNjZjAyOT09PSdudXh0Jz9fMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MWZmKV09ITB4MTpfMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MWZmKV09XzB4MTI4M2Y0fHwhXzB4MmFlZjc0fHxfMHg0MjIwYzFbJ2xvY2F0aW9uJ10/LlsnaG9zdG5hbWUnXSYmXzB4MmFlZjc0W18weDU1MTI0NigweDFiYSldKF8weDQyMjBjMVsnbG9jYXRpb24nXVtfMHg1NTEyNDYoMHgxYzcpXSksXzB4NDIyMGMxWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTt9ZnVuY3Rpb24gWShfMHg0YTIzMWMsXzB4MzllNThiLF8weDJlMGI4MyxfMHgxMmRlMGIpe3ZhciBfMHgxMWQyZmQ9XzB4MWY3ZmUxO18weDRhMjMxYz1fMHg0YTIzMWMsXzB4MzllNThiPV8weDM5ZTU4YixfMHgyZTBiODM9XzB4MmUwYjgzLF8weDEyZGUwYj1fMHgxMmRlMGI7bGV0IF8weDM1Y2I5OT1XKF8weDRhMjMxYyksXzB4MjdmYzE1PV8weDM1Y2I5OVtfMHgxMWQyZmQoMHgxY2IpXSxfMHg5ZTRjNGQ9XzB4MzVjYjk5Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgzMzg3MmZ7Y29uc3RydWN0b3IoKXt2YXIgXzB4MjU3NzRmPV8weDExZDJmZDt0aGlzW18weDI1Nzc0ZigweDFmYSldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1snX251bWJlclJlZ0V4cCddPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgyNTc3NGYoMHgxYWQpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4NGEyMzFjW18weDI1Nzc0ZigweDI0MCldLHRoaXNbXzB4MjU3NzRmKDB4MjVhKV09XzB4NGEyMzFjWydIVE1MQWxsQ29sbGVjdGlvbiddLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4MjU3NzRmKDB4Mjc1KV09T2JqZWN0W18weDI1Nzc0ZigweDI2MildLHRoaXNbJ19TeW1ib2wnXT1fMHg0YTIzMWNbJ1N5bWJvbCddLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHgyNTc3NGYoMHgxYTApXVsndG9TdHJpbmcnXSx0aGlzW18weDI1Nzc0ZigweDFjMSldPURhdGVbXzB4MjU3NzRmKDB4MWEwKV1bXzB4MjU3NzRmKDB4MWZlKV07fVtfMHgxMWQyZmQoMHgyM2EpXShfMHgzODExY2YsXzB4MzU2MDY0LF8weDRmMmMwNCxfMHgxZWVmMjApe3ZhciBfMHg0NDk3MGM9XzB4MTFkMmZkLF8weDJjNDI4Zj10aGlzLF8weDRlOWI5ND1fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc0KV07ZnVuY3Rpb24gXzB4NTZhOWE3KF8weDU2ZWNjNixfMHg0NTAwOWQsXzB4MzBhYWVlKXt2YXIgXzB4NGUwMDc1PV8weDQ0OTcwYztfMHg0NTAwOWRbJ3R5cGUnXT1fMHg0ZTAwNzUoMHgxYjIpLF8weDQ1MDA5ZFtfMHg0ZTAwNzUoMHgyMzApXT1fMHg1NmVjYzZbXzB4NGUwMDc1KDB4MWJlKV0sXzB4MzAzMmI2PV8weDMwYWFlZVtfMHg0ZTAwNzUoMHgxZmMpXVtfMHg0ZTAwNzUoMHgyNTMpXSxfMHgzMGFhZWVbXzB4NGUwMDc1KDB4MWZjKV1bXzB4NGUwMDc1KDB4MjUzKV09XzB4NDUwMDlkLF8weDJjNDI4ZltfMHg0ZTAwNzUoMHgyMTkpXShfMHg0NTAwOWQsXzB4MzBhYWVlKTt9dHJ5e18weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzcpXSsrLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzQpXSYmXzB4NGYyYzA0W18weDQ0OTcwYygweDI0NSldW18weDQ0OTcwYygweDFmMyldKF8weDM1NjA2NCk7dmFyIF8weDQ4MzliZCxfMHg0YjRmNjEsXzB4MWViZmUxLF8weDI0NGQ4MCxfMHhiZTRkOWE9W10sXzB4ZGZhYzdhPVtdLF8weDE3MDVhZixfMHgzZTNlN2Y9dGhpc1tfMHg0NDk3MGMoMHgxOWQpXShfMHgzNTYwNjQpLF8weDFjMzZmZT1fMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxYzkpLF8weDEzYjUzNj0hMHgxLF8weDViMTQ4Yj1fMHgzZTNlN2Y9PT0nZnVuY3Rpb24nLF8weDU3NTM4ND10aGlzW18weDQ0OTcwYygweDFhNyldKF8weDNlM2U3ZiksXzB4MzQyNTBjPXRoaXNbJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4M2UzZTdmKSxfMHgzZTg1ZTA9XzB4NTc1Mzg0fHxfMHgzNDI1MGMsXzB4MjVjMzM5PXt9LF8weDE2ZTAzNj0weDAsXzB4M2NjNWZkPSEweDEsXzB4MzAzMmI2LF8weDhkYzMwYz0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4NGYyYzA0W18weDQ0OTcwYygweDIyMCldKXtpZihfMHgxYzM2ZmUpe2lmKF8weDRiNGY2MT1fMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjBkKV0sXzB4NGI0ZjYxPl8weDRmMmMwNFsnZWxlbWVudHMnXSl7Zm9yKF8weDFlYmZlMT0weDAsXzB4MjQ0ZDgwPV8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZTIpXSxfMHg0ODM5YmQ9XzB4MWViZmUxO18weDQ4MzliZDxfMHgyNDRkODA7XzB4NDgzOWJkKyspXzB4ZGZhYzdhWydwdXNoJ10oXzB4MmM0MjhmWydfYWRkUHJvcGVydHknXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weDNlM2U3ZixfMHg0ODM5YmQsXzB4NGYyYzA0KSk7XzB4MzgxMWNmW18weDQ0OTcwYygweDFjZildPSEweDA7fWVsc2V7Zm9yKF8weDFlYmZlMT0weDAsXzB4MjQ0ZDgwPV8weDRiNGY2MSxfMHg0ODM5YmQ9XzB4MWViZmUxO18weDQ4MzliZDxfMHgyNDRkODA7XzB4NDgzOWJkKyspXzB4ZGZhYzdhW18weDQ0OTcwYygweDFmMyldKF8weDJjNDI4ZltfMHg0NDk3MGMoMHgyM2MpXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weDNlM2U3ZixfMHg0ODM5YmQsXzB4NGYyYzA0KSk7fV8weDRmMmMwNFtfMHg0NDk3MGMoMHgxOTUpXSs9XzB4ZGZhYzdhW18weDQ0OTcwYygweDIwZCldO31pZighKF8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFmNyl8fF8weDNlM2U3Zj09PSd1bmRlZmluZWQnKSYmIV8weDU3NTM4NCYmXzB4M2UzZTdmIT09XzB4NDQ5NzBjKDB4MjY2KSYmXzB4M2UzZTdmIT09XzB4NDQ5NzBjKDB4MTk3KSYmXzB4M2UzZTdmIT09XzB4NDQ5NzBjKDB4MjRiKSl7dmFyIF8weGI5OWYzYz1fMHgxZWVmMjBbXzB4NDQ5NzBjKDB4MjczKV18fF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzMpXTtpZih0aGlzW18weDQ0OTcwYygweDIxMSldKF8weDM1NjA2NCk/KF8weDQ4MzliZD0weDAsXzB4MzU2MDY0W18weDQ0OTcwYygweDIzNyldKGZ1bmN0aW9uKF8weDE5YzE2YSl7dmFyIF8weGJhZTU1ZT1fMHg0NDk3MGM7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO31pZighXzB4NGYyYzA0W18weGJhZTU1ZSgweDIyNCldJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXSYmXzB4NGYyYzA0W18weGJhZTU1ZSgweDE5NSldPl8weDRmMmMwNFtfMHhiYWU1NWUoMHgxZDUpXSl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO31fMHhkZmFjN2FbXzB4YmFlNTVlKDB4MWYzKV0oXzB4MmM0MjhmW18weGJhZTU1ZSgweDIzYyldKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4YmFlNTVlKDB4MWI0KSxfMHg0ODM5YmQrKyxfMHg0ZjJjMDQsZnVuY3Rpb24oXzB4MjMyYTE3KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjMyYTE3O307fShfMHgxOWMxNmEpKSk7fSkpOnRoaXNbXzB4NDQ5NzBjKDB4MWNhKV0oXzB4MzU2MDY0KSYmXzB4MzU2MDY0W18weDQ0OTcwYygweDIzNyldKGZ1bmN0aW9uKF8weDQ5ZTVhOCxfMHgxNGJmOTIpe3ZhciBfMHgyMWMyODk9XzB4NDQ5NzBjO2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFtfMHgyMWMyODkoMHgxOTUpXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO3JldHVybjt9aWYoIV8weDRmMmMwNFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXSYmXzB4NGYyYzA0W18weDIxYzI4OSgweDE5NSldPl8weDRmMmMwNFsnYXV0b0V4cGFuZExpbWl0J10pe18weDNjYzVmZD0hMHgwO3JldHVybjt9dmFyIF8weDU3ODU4Yj1fMHgxNGJmOTJbXzB4MjFjMjg5KDB4MWZlKV0oKTtfMHg1Nzg1OGJbXzB4MjFjMjg5KDB4MjBkKV0+MHg2NCYmKF8weDU3ODU4Yj1fMHg1Nzg1OGJbXzB4MjFjMjg5KDB4MWE1KV0oMHgwLDB4NjQpK18weDIxYzI4OSgweDFkOSkpLF8weGRmYWM3YVtfMHgyMWMyODkoMHgxZjMpXShfMHgyYzQyOGZbXzB4MjFjMjg5KDB4MjNjKV0oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHgyMWMyODkoMHgxZTQpLF8weDU3ODU4YixfMHg0ZjJjMDQsZnVuY3Rpb24oXzB4MzExYzM4KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MzExYzM4O307fShfMHg0OWU1YTgpKSk7fSksIV8weDEzYjUzNil7dHJ5e2ZvcihfMHgxNzA1YWYgaW4gXzB4MzU2MDY0KWlmKCEoXzB4MWMzNmZlJiZfMHg4ZGMzMGNbJ3Rlc3QnXShfMHgxNzA1YWYpKSYmIXRoaXNbXzB4NDQ5NzBjKDB4MjBlKV0oXzB4MzU2MDY0LF8weDE3MDVhZixfMHg0ZjJjMDQpKXtpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MTk1KV0rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9aWYoIV8weDRmMmMwNFtfMHg0NDk3MGMoMHgyMjQpXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWQ1KV0pe18weDNjYzVmZD0hMHgwO2JyZWFrO31fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MmM0MjhmWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHhiZTRkOWEsXzB4MjVjMzM5LF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4MTcwNWFmLF8weDRmMmMwNCkpO319Y2F0Y2h7fWlmKF8weDI1YzMzOVtfMHg0NDk3MGMoMHgyMmYpXT0hMHgwLF8weDViMTQ4YiYmKF8weDI1YzMzOVsnX3BfbmFtZSddPSEweDApLCFfMHgzY2M1ZmQpe3ZhciBfMHg5ZTMxPVtdW18weDQ0OTcwYygweDI1YyldKHRoaXNbXzB4NDQ5NzBjKDB4Mjc1KV0oXzB4MzU2MDY0KSlbXzB4NDQ5NzBjKDB4MjVjKV0odGhpc1tfMHg0NDk3MGMoMHgyMWUpXShfMHgzNTYwNjQpKTtmb3IoXzB4NDgzOWJkPTB4MCxfMHg0YjRmNjE9XzB4OWUzMVtfMHg0NDk3MGMoMHgyMGQpXTtfMHg0ODM5YmQ8XzB4NGI0ZjYxO18weDQ4MzliZCsrKWlmKF8weDE3MDVhZj1fMHg5ZTMxW18weDQ4MzliZF0sIShfMHgxYzM2ZmUmJl8weDhkYzMwY1tfMHg0NDk3MGMoMHgyMmMpXShfMHgxNzA1YWZbXzB4NDQ5NzBjKDB4MWZlKV0oKSkpJiYhdGhpc1tfMHg0NDk3MGMoMHgyMGUpXShfMHgzNTYwNjQsXzB4MTcwNWFmLF8weDRmMmMwNCkmJiFfMHgyNWMzMzlbXzB4NDQ5NzBjKDB4MWExKStfMHgxNzA1YWZbXzB4NDQ5NzBjKDB4MWZlKV0oKV0pe2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO2JyZWFrO31pZighXzB4NGYyYzA0W18weDQ0OTcwYygweDIyNCldJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZDUpXSl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fV8weGRmYWM3YVtfMHg0NDk3MGMoMHgxZjMpXShfMHgyYzQyOGZbXzB4NDQ5NzBjKDB4MjU3KV0oXzB4YmU0ZDlhLF8weDI1YzMzOSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDE3MDVhZixfMHg0ZjJjMDQpKTt9fX19fWlmKF8weDM4MTFjZlsndHlwZSddPV8weDNlM2U3ZixfMHgzZTg1ZTA/KF8weDM4MTFjZltfMHg0NDk3MGMoMHgxZDMpXT1fMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjJkKV0oKSx0aGlzW18weDQ0OTcwYygweDFkYyldKF8weDNlM2U3ZixfMHgzODExY2YsXzB4NGYyYzA0LF8weDFlZWYyMCkpOl8weDNlM2U3Zj09PSdkYXRlJz9fMHgzODExY2ZbJ3ZhbHVlJ109dGhpc1tfMHg0NDk3MGMoMHgxYzEpXVsnY2FsbCddKF8weDM1NjA2NCk6XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MjRiKT9fMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWQzKV09XzB4MzU2MDY0W18weDQ0OTcwYygweDFmZSldKCk6XzB4M2UzZTdmPT09J1JlZ0V4cCc/XzB4MzgxMWNmWyd2YWx1ZSddPXRoaXNbXzB4NDQ5NzBjKDB4MWU5KV1bXzB4NDQ5NzBjKDB4MjFkKV0oXzB4MzU2MDY0KTpfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxZWYpJiZ0aGlzW18weDQ0OTcwYygweDFiYildP18weDM4MTFjZltfMHg0NDk3MGMoMHgxZDMpXT10aGlzWydfU3ltYm9sJ11bXzB4NDQ5NzBjKDB4MWEwKV1bXzB4NDQ5NzBjKDB4MWZlKV1bXzB4NDQ5NzBjKDB4MjFkKV0oXzB4MzU2MDY0KTohXzB4NGYyYzA0WydkZXB0aCddJiYhKF8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFmNyl8fF8weDNlM2U3Zj09PV8weDQ0OTcwYygweDI0MCkpJiYoZGVsZXRlIF8weDM4MTFjZlsndmFsdWUnXSxfMHgzODExY2ZbJ2NhcHBlZCddPSEweDApLF8weDNjYzVmZCYmKF8weDM4MTFjZltfMHg0NDk3MGMoMHgyMzQpXT0hMHgwKSxfMHgzMDMyYjY9XzB4NGYyYzA0W18weDQ0OTcwYygweDFmYyldW18weDQ0OTcwYygweDI1MyldLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZmMpXVtfMHg0NDk3MGMoMHgyNTMpXT1fMHgzODExY2YsdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDM4MTFjZixfMHg0ZjJjMDQpLF8weGRmYWM3YVtfMHg0NDk3MGMoMHgyMGQpXSl7Zm9yKF8weDQ4MzliZD0weDAsXzB4NGI0ZjYxPV8weGRmYWM3YVtfMHg0NDk3MGMoMHgyMGQpXTtfMHg0ODM5YmQ8XzB4NGI0ZjYxO18weDQ4MzliZCsrKV8weGRmYWM3YVtfMHg0ODM5YmRdKF8weDQ4MzliZCk7fV8weGJlNGQ5YVsnbGVuZ3RoJ10mJihfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MjczKV09XzB4YmU0ZDlhKTt9Y2F0Y2goXzB4MzcwZDQ0KXtfMHg1NmE5YTcoXzB4MzcwZDQ0LF8weDM4MTFjZixfMHg0ZjJjMDQpO31yZXR1cm4gdGhpc1tfMHg0NDk3MGMoMHgyNjkpXShfMHgzNTYwNjQsXzB4MzgxMWNmKSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgzODExY2YsXzB4NGYyYzA0KSxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWZjKV1bXzB4NDQ5NzBjKDB4MjUzKV09XzB4MzAzMmI2LF8weDRmMmMwNFsnbGV2ZWwnXS0tLF8weDRmMmMwNFsnYXV0b0V4cGFuZCddPV8weDRlOWI5NCxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc0KV0mJl8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNDUpXVtfMHg0NDk3MGMoMHgxZTApXSgpLF8weDM4MTFjZjt9W18weDExZDJmZCgweDIxZSldKF8weDQ4YjdkNil7dmFyIF8weDNkZTMwNz1fMHgxMWQyZmQ7cmV0dXJuIE9iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10/T2JqZWN0W18weDNkZTMwNygweDIxYSldKF8weDQ4YjdkNik6W107fVtfMHgxMWQyZmQoMHgyMTEpXShfMHgzNzYzZTQpe3ZhciBfMHg1NWI4YTE9XzB4MTFkMmZkO3JldHVybiEhKF8weDM3NjNlNCYmXzB4NGEyMzFjW18weDU1YjhhMSgweDFiNCldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgzNzYzZTQpPT09J1tvYmplY3RcXFxceDIwU2V0XScmJl8weDM3NjNlNFtfMHg1NWI4YTEoMHgyMzcpXSk7fVtfMHgxMWQyZmQoMHgyMGUpXShfMHg0NzY5ZTQsXzB4NDhjZjc5LF8weDVhNDJlOCl7dmFyIF8weDI4YzAxND1fMHgxMWQyZmQ7cmV0dXJuIF8weDVhNDJlOFtfMHgyOGMwMTQoMHgyMjcpXT90eXBlb2YgXzB4NDc2OWU0W18weDQ4Y2Y3OV09PV8weDI4YzAxNCgweDFiZCk6ITB4MTt9WydfdHlwZSddKF8weDQ5ZGZkZCl7dmFyIF8weDU1MTczYT1fMHgxMWQyZmQsXzB4OTEyMjkyPScnO3JldHVybiBfMHg5MTIyOTI9dHlwZW9mIF8weDQ5ZGZkZCxfMHg5MTIyOTI9PT1fMHg1NTE3M2EoMHgxOTgpP3RoaXNbXzB4NTUxNzNhKDB4MWFhKV0oXzB4NDlkZmRkKT09PV8weDU1MTczYSgweDFlNik/XzB4OTEyMjkyPV8weDU1MTczYSgweDFjOSk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NDlkZmRkKT09PSdbb2JqZWN0XFxcXHgyMERhdGVdJz9fMHg5MTIyOTI9J2RhdGUnOnRoaXNbXzB4NTUxNzNhKDB4MWFhKV0oXzB4NDlkZmRkKT09PV8weDU1MTczYSgweDI0Mik/XzB4OTEyMjkyPV8weDU1MTczYSgweDI0Yik6XzB4NDlkZmRkPT09bnVsbD9fMHg5MTIyOTI9XzB4NTUxNzNhKDB4MWY3KTpfMHg0OWRmZGRbXzB4NTUxNzNhKDB4MjcwKV0mJihfMHg5MTIyOTI9XzB4NDlkZmRkWydjb25zdHJ1Y3RvciddW18weDU1MTczYSgweDIwNildfHxfMHg5MTIyOTIpOl8weDkxMjI5Mj09PSd1bmRlZmluZWQnJiZ0aGlzW18weDU1MTczYSgweDI1YSldJiZfMHg0OWRmZGQgaW5zdGFuY2VvZiB0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmKF8weDkxMjI5Mj1fMHg1NTE3M2EoMHgyMTcpKSxfMHg5MTIyOTI7fVtfMHgxMWQyZmQoMHgxYWEpXShfMHg0M2Q0MTQpe3ZhciBfMHg1N2RlNDA9XzB4MTFkMmZkO3JldHVybiBPYmplY3RbXzB4NTdkZTQwKDB4MWEwKV1bXzB4NTdkZTQwKDB4MWZlKV1bXzB4NTdkZTQwKDB4MjFkKV0oXzB4NDNkNDE0KTt9W18weDExZDJmZCgweDFhNyldKF8weGNkYWViNyl7dmFyIF8weDE5MjMzND1fMHgxMWQyZmQ7cmV0dXJuIF8weGNkYWViNz09PSdib29sZWFuJ3x8XzB4Y2RhZWI3PT09XzB4MTkyMzM0KDB4MWRhKXx8XzB4Y2RhZWI3PT09J251bWJlcic7fVtfMHgxMWQyZmQoMHgxOGMpXShfMHg1Y2EyN2Ype3ZhciBfMHgzNDYwNzg9XzB4MTFkMmZkO3JldHVybiBfMHg1Y2EyN2Y9PT0nQm9vbGVhbid8fF8weDVjYTI3Zj09PV8weDM0NjA3OCgweDI2Nil8fF8weDVjYTI3Zj09PV8weDM0NjA3OCgweDIyYSk7fVtfMHgxMWQyZmQoMHgyM2MpXShfMHgxYjg3MDYsXzB4NDgxOWUxLF8weDRlZTNmYixfMHg1YTdhNzAsXzB4MTA3YjA1LF8weDRlYTZlMSl7dmFyIF8weDVkN2UyMj10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyYjU4MGIpe3ZhciBfMHg0NzI5MGY9XzB4MzdlNCxfMHhmY2MxN2E9XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDI1MyldLF8weDE5NGQzMD1fMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MTkxKV0sXzB4MWZlZGZkPV8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVsncGFyZW50J107XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDIzOCldPV8weGZjYzE3YSxfMHgxMDdiMDVbJ25vZGUnXVtfMHg0NzI5MGYoMHgxOTEpXT10eXBlb2YgXzB4NWE3YTcwPT0nbnVtYmVyJz9fMHg1YTdhNzA6XzB4MmI1ODBiLF8weDFiODcwNltfMHg0NzI5MGYoMHgxZjMpXShfMHg1ZDdlMjJbXzB4NDcyOTBmKDB4MjY3KV0oXzB4NDgxOWUxLF8weDRlZTNmYixfMHg1YTdhNzAsXzB4MTA3YjA1LF8weDRlYTZlMSkpLF8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVsncGFyZW50J109XzB4MWZlZGZkLF8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgxOTEpXT1fMHgxOTRkMzA7fTt9WydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxNjU4OGIsXzB4MTFjZWE3LF8weDEzYjZlZixfMHgzODAzMTAsXzB4MWMwMWQ0LF8weDRkNGI2YixfMHg3ZmVjYTYpe3ZhciBfMHgyNDNlNTA9XzB4MTFkMmZkLF8weDQ0YWJiYT10aGlzO3JldHVybiBfMHgxMWNlYTdbXzB4MjQzZTUwKDB4MWExKStfMHgxYzAxZDRbXzB4MjQzZTUwKDB4MWZlKV0oKV09ITB4MCxmdW5jdGlvbihfMHgxZjRkNTEpe3ZhciBfMHg0YmRjMWY9XzB4MjQzZTUwLF8weDQ0ZDI4Mz1fMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MjUzKV0sXzB4NGZiODI4PV8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgxOTEpXSxfMHgzMTY5ZDc9XzB4NGQ0YjZiWydub2RlJ11bXzB4NGJkYzFmKDB4MjM4KV07XzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldWydwYXJlbnQnXT1fMHg0NGQyODMsXzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDE5MSldPV8weDFmNGQ1MSxfMHgxNjU4OGJbJ3B1c2gnXShfMHg0NGFiYmFbXzB4NGJkYzFmKDB4MjY3KV0oXzB4MTNiNmVmLF8weDM4MDMxMCxfMHgxYzAxZDQsXzB4NGQ0YjZiLF8weDdmZWNhNikpLF8weDRkNGI2Ylsnbm9kZSddW18weDRiZGMxZigweDIzOCldPV8weDMxNjlkNyxfMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MTkxKV09XzB4NGZiODI4O307fVtfMHgxMWQyZmQoMHgyNjcpXShfMHgyZWUyZjksXzB4NTA0YzYzLF8weDJiZTgzOSxfMHg1ZDRiZmUsXzB4NDY2NzcyKXt2YXIgXzB4MjgwZjZlPV8weDExZDJmZCxfMHhjNmFmZTA9dGhpcztfMHg0NjY3NzJ8fChfMHg0NjY3NzI9ZnVuY3Rpb24oXzB4ZTdmZGYsXzB4NDQxOTRmKXtyZXR1cm4gXzB4ZTdmZGZbXzB4NDQxOTRmXTt9KTt2YXIgXzB4Mjk4MTAzPV8weDJiZTgzOVtfMHgyODBmNmUoMHgxZmUpXSgpLF8weDI4ZjU5ND1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjEwKV18fHt9LF8weDVjNzlhOD1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV0sXzB4MjBiZWJjPV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjQpXTt0cnl7dmFyIF8weDI3ZjE1Mz10aGlzW18weDI4MGY2ZSgweDFjYSldKF8weDJlZTJmOSksXzB4MTQxNzhhPV8weDI5ODEwMztfMHgyN2YxNTMmJl8weDE0MTc4YVsweDBdPT09J1xcXFx4MjcnJiYoXzB4MTQxNzhhPV8weDE0MTc4YVsnc3Vic3RyJ10oMHgxLF8weDE0MTc4YVtfMHgyODBmNmUoMHgyMGQpXS0weDIpKTt2YXIgXzB4MTI2MzcxPV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMTApXT1fMHgyOGY1OTRbJ19wXycrXzB4MTQxNzhhXTtfMHgxMjYzNzEmJihfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV09XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldKzB4MSksXzB4NWQ0YmZlWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHgxMjYzNzE7dmFyIF8weDIzOTU3OT10eXBlb2YgXzB4MmJlODM5PT1fMHgyODBmNmUoMHgxZWYpLF8weDIwNzViNT17J25hbWUnOl8weDIzOTU3OXx8XzB4MjdmMTUzP18weDI5ODEwMzp0aGlzW18weDI4MGY2ZSgweDI3MSldKF8weDI5ODEwMyl9O2lmKF8weDIzOTU3OSYmKF8weDIwNzViNVtfMHgyODBmNmUoMHgxZWYpXT0hMHgwKSwhKF8weDUwNGM2Mz09PSdhcnJheSd8fF8weDUwNGM2Mz09PV8weDI4MGY2ZSgweDFhNikpKXt2YXIgXzB4M2QyZDhlPXRoaXNbXzB4MjgwZjZlKDB4MjVkKV0oXzB4MmVlMmY5LF8weDJiZTgzOSk7aWYoXzB4M2QyZDhlJiYoXzB4M2QyZDhlW18weDI4MGY2ZSgweDE5OSldJiYoXzB4MjA3NWI1W18weDI4MGY2ZSgweDI1ZSldPSEweDApLF8weDNkMmQ4ZVtfMHgyODBmNmUoMHgyMzkpXSYmIV8weDEyNjM3MSYmIV8weDVkNGJmZVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDIwNzViNVtfMHgyODBmNmUoMHgxYzYpXT0hMHgwLHRoaXNbXzB4MjgwZjZlKDB4MWQwKV0oXzB4MjA3NWI1LF8weDVkNGJmZSksXzB4MjA3NWI1O312YXIgXzB4MjE2ZjM1O3RyeXtfMHgyMTZmMzU9XzB4NDY2NzcyKF8weDJlZTJmOSxfMHgyYmU4MzkpO31jYXRjaChfMHg1MGY1NTgpe3JldHVybiBfMHgyMDc1YjU9eyduYW1lJzpfMHgyOTgxMDMsJ3R5cGUnOl8weDI4MGY2ZSgweDFiMiksJ2Vycm9yJzpfMHg1MGY1NThbXzB4MjgwZjZlKDB4MWJlKV19LHRoaXNbXzB4MjgwZjZlKDB4MWQwKV0oXzB4MjA3NWI1LF8weDVkNGJmZSksXzB4MjA3NWI1O312YXIgXzB4NGRjMjQ5PXRoaXNbXzB4MjgwZjZlKDB4MTlkKV0oXzB4MjE2ZjM1KSxfMHg1ZTg2M2E9dGhpc1tfMHgyODBmNmUoMHgxYTcpXShfMHg0ZGMyNDkpO2lmKF8weDIwNzViNVtfMHgyODBmNmUoMHgxZjkpXT1fMHg0ZGMyNDksXzB4NWU4NjNhKXRoaXNbXzB4MjgwZjZlKDB4MWQwKV0oXzB4MjA3NWI1LF8weDVkNGJmZSxfMHgyMTZmMzUsZnVuY3Rpb24oKXt2YXIgXzB4NWNhNDBmPV8weDI4MGY2ZTtfMHgyMDc1YjVbXzB4NWNhNDBmKDB4MWQzKV09XzB4MjE2ZjM1W18weDVjYTQwZigweDIyZCldKCksIV8weDEyNjM3MSYmXzB4YzZhZmUwW18weDVjYTQwZigweDFkYyldKF8weDRkYzI0OSxfMHgyMDc1YjUsXzB4NWQ0YmZlLHt9KTt9KTtlbHNle3ZhciBfMHgxZTU0ZGI9XzB4NWQ0YmZlWydhdXRvRXhwYW5kJ10mJl8weDVkNGJmZVtfMHgyODBmNmUoMHgyNzcpXTxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjY4KV0mJl8weDVkNGJmZVtfMHgyODBmNmUoMHgyNDUpXVtfMHgyODBmNmUoMHgyMzYpXShfMHgyMTZmMzUpPDB4MCYmXzB4NGRjMjQ5IT09XzB4MjgwZjZlKDB4MWJkKSYmXzB4NWQ0YmZlW18weDI4MGY2ZSgweDE5NSldPF8weDVkNGJmZVtfMHgyODBmNmUoMHgxZDUpXTtfMHgxZTU0ZGJ8fF8weDVkNGJmZVsnbGV2ZWwnXTxfMHg1Yzc5YTh8fF8weDEyNjM3MT8odGhpc1tfMHgyODBmNmUoMHgyM2EpXShfMHgyMDc1YjUsXzB4MjE2ZjM1LF8weDVkNGJmZSxfMHgxMjYzNzF8fHt9KSx0aGlzW18weDI4MGY2ZSgweDI2OSldKF8weDIxNmYzNSxfMHgyMDc1YjUpKTp0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUsXzB4MjE2ZjM1LGZ1bmN0aW9uKCl7dmFyIF8weDUxOTUwND1fMHgyODBmNmU7XzB4NGRjMjQ5PT09XzB4NTE5NTA0KDB4MWY3KXx8XzB4NGRjMjQ5PT09XzB4NTE5NTA0KDB4MjQwKXx8KGRlbGV0ZSBfMHgyMDc1YjVbXzB4NTE5NTA0KDB4MWQzKV0sXzB4MjA3NWI1W18weDUxOTUwNCgweDIzZildPSEweDApO30pO31yZXR1cm4gXzB4MjA3NWI1O31maW5hbGx5e18weDVkNGJmZVtfMHgyODBmNmUoMHgyMTApXT1fMHgyOGY1OTQsXzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldPV8weDVjNzlhOCxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjI0KV09XzB4MjBiZWJjO319WydfY2FwSWZTdHJpbmcnXShfMHgzZmM2Y2UsXzB4NDc4YjYxLF8weDExMzUxZSxfMHgzZWIxMDkpe3ZhciBfMHg0NWJiN2M9XzB4MTFkMmZkLF8weDE5NjIyMz1fMHgzZWIxMDlbJ3N0ckxlbmd0aCddfHxfMHgxMTM1MWVbJ3N0ckxlbmd0aCddO2lmKChfMHgzZmM2Y2U9PT0nc3RyaW5nJ3x8XzB4M2ZjNmNlPT09XzB4NDViYjdjKDB4MjY2KSkmJl8weDQ3OGI2MVtfMHg0NWJiN2MoMHgxZDMpXSl7bGV0IF8weDU4MzJkZD1fMHg0NzhiNjFbXzB4NDViYjdjKDB4MWQzKV1bXzB4NDViYjdjKDB4MjBkKV07XzB4MTEzNTFlW18weDQ1YmI3YygweDFkZCldKz1fMHg1ODMyZGQsXzB4MTEzNTFlWydhbGxTdHJMZW5ndGgnXT5fMHgxMTM1MWVbXzB4NDViYjdjKDB4MWViKV0/KF8weDQ3OGI2MVtfMHg0NWJiN2MoMHgyM2YpXT0nJyxkZWxldGUgXzB4NDc4YjYxWyd2YWx1ZSddKTpfMHg1ODMyZGQ+XzB4MTk2MjIzJiYoXzB4NDc4YjYxW18weDQ1YmI3YygweDIzZildPV8weDQ3OGI2MVtfMHg0NWJiN2MoMHgxZDMpXVsnc3Vic3RyJ10oMHgwLF8weDE5NjIyMyksZGVsZXRlIF8weDQ3OGI2MVsndmFsdWUnXSk7fX1bXzB4MTFkMmZkKDB4MWNhKV0oXzB4MzZlYTU4KXt2YXIgXzB4NGUxODUzPV8weDExZDJmZDtyZXR1cm4hIShfMHgzNmVhNTgmJl8weDRhMjMxY1tfMHg0ZTE4NTMoMHgxZTQpXSYmdGhpc1tfMHg0ZTE4NTMoMHgxYWEpXShfMHgzNmVhNTgpPT09XzB4NGUxODUzKDB4MjMzKSYmXzB4MzZlYTU4W18weDRlMTg1MygweDIzNyldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4ODg5ZDA4KXt2YXIgXzB4MmE5ZTBmPV8weDExZDJmZDtpZihfMHg4ODlkMDhbXzB4MmE5ZTBmKDB4MjRhKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDg4OWQwODt2YXIgXzB4NWJlOWYzO3RyeXtfMHg1YmU5ZjM9SlNPTlsnc3RyaW5naWZ5J10oJycrXzB4ODg5ZDA4KTt9Y2F0Y2h7XzB4NWJlOWYzPSdcXFxceDIyJyt0aGlzW18weDJhOWUwZigweDFhYSldKF8weDg4OWQwOCkrJ1xcXFx4MjInO31yZXR1cm4gXzB4NWJlOWYzWydtYXRjaCddKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NWJlOWYzPV8weDViZTlmM1snc3Vic3RyJ10oMHgxLF8weDViZTlmM1tfMHgyYTllMGYoMHgyMGQpXS0weDIpOl8weDViZTlmMz1fMHg1YmU5ZjNbXzB4MmE5ZTBmKDB4MjYwKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpWydyZXBsYWNlJ10oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDViZTlmMzt9W18weDExZDJmZCgweDFkMCldKF8weDIyM2MzOCxfMHhlZTM3OGUsXzB4Y2VkOTg2LF8weDQ4MDNjMil7dmFyIF8weDg0ODBhZT1fMHgxMWQyZmQ7dGhpc1tfMHg4NDgwYWUoMHgyMTkpXShfMHgyMjNjMzgsXzB4ZWUzNzhlKSxfMHg0ODAzYzImJl8weDQ4MDNjMigpLHRoaXNbXzB4ODQ4MGFlKDB4MjY5KV0oXzB4Y2VkOTg2LF8weDIyM2MzOCksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MjIzYzM4LF8weGVlMzc4ZSk7fVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDEzYzAxMSxfMHgzMWZjN2Mpe3ZhciBfMHgzOTRlODE9XzB4MTFkMmZkO3RoaXNbXzB4Mzk0ZTgxKDB4MWVhKV0oXzB4MTNjMDExLF8weDMxZmM3YyksdGhpc1tfMHgzOTRlODEoMHgyMjMpXShfMHgxM2MwMTEsXzB4MzFmYzdjKSx0aGlzW18weDM5NGU4MSgweDE5MildKF8weDEzYzAxMSxfMHgzMWZjN2MpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgxM2MwMTEsXzB4MzFmYzdjKTt9W18weDExZDJmZCgweDFlYSldKF8weDExNWM1YyxfMHgxYzgzNTUpe31bXzB4MTFkMmZkKDB4MjIzKV0oXzB4NTRiYmNlLF8weDE3OWNmNCl7fVtfMHgxMWQyZmQoMHgxYjApXShfMHg0Nzk1OTAsXzB4MjU4ZGRlKXt9W18weDExZDJmZCgweDFhOCldKF8weDMwZDU3MSl7dmFyIF8weDNjMzZiZj1fMHgxMWQyZmQ7cmV0dXJuIF8weDMwZDU3MT09PXRoaXNbXzB4M2MzNmJmKDB4MjRmKV07fVtfMHgxMWQyZmQoMHgxZDgpXShfMHgxZTQ5OGUsXzB4NDI1MTc4KXt2YXIgXzB4NTUzODliPV8weDExZDJmZDt0aGlzW18weDU1Mzg5YigweDFiMCldKF8weDFlNDk4ZSxfMHg0MjUxNzgpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4MWU0OThlKSxfMHg0MjUxNzhbXzB4NTUzODliKDB4MjQ5KV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHgxZTQ5OGUpLHRoaXNbXzB4NTUzODliKDB4MjE4KV0oXzB4MWU0OThlLF8weDQyNTE3OCksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4MWU0OThlLF8weDQyNTE3OCksdGhpc1tfMHg1NTM4OWIoMHgxOWIpXShfMHgxZTQ5OGUpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg0NDZjMzMsXzB4NTEwMGUxKXt2YXIgXzB4YTYxMmQ0PV8weDExZDJmZDtsZXQgXzB4NGMxNzFjO3RyeXtfMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV0mJihfMHg0YzE3MWM9XzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildW18weGE2MTJkNCgweDIzMCldLF8weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXVtfMHhhNjEyZDQoMHgyMzApXT1mdW5jdGlvbigpe30pLF8weDQ0NmMzMyYmdHlwZW9mIF8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMGQpXT09XzB4YTYxMmQ0KDB4MWUzKSYmKF8weDUxMDBlMVsnbGVuZ3RoJ109XzB4NDQ2YzMzW18weGE2MTJkNCgweDIwZCldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NGMxNzFjJiYoXzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildW18weGE2MTJkNCgweDIzMCldPV8weDRjMTcxYyk7fWlmKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZjkpXT09PV8weGE2MTJkNCgweDFlMyl8fF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZjkpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWQzKV0pKV8weDUxMDBlMVtfMHhhNjEyZDQoMHgxYmYpXT0hMHgwLGRlbGV0ZSBfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWQzKV07ZWxzZSBzd2l0Y2goXzB4NTEwMGUxWyd2YWx1ZSddKXtjYXNlIE51bWJlcltfMHhhNjEyZDQoMHgyNTIpXTpfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MjJlKV09ITB4MCxkZWxldGUgXzB4NTEwMGUxWyd2YWx1ZSddO2JyZWFrO2Nhc2UgTnVtYmVyW18weGE2MTJkNCgweDFjZSldOl8weDUxMDBlMVtfMHhhNjEyZDQoMHgxYmMpXT0hMHgwLGRlbGV0ZSBfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWQzKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHhhNjEyZDQoMHgyMDIpXShfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWQzKV0pJiYoXzB4NTEwMGUxW18weGE2MTJkNCgweDFlZSldPSEweDApO2JyZWFrO319ZWxzZSBfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWY5KV09PT1fMHhhNjEyZDQoMHgxYmQpJiZ0eXBlb2YgXzB4NDQ2YzMzW18weGE2MTJkNCgweDIwNildPT0nc3RyaW5nJyYmXzB4NDQ2YzMzW18weGE2MTJkNCgweDIwNildJiZfMHg1MTAwZTFbJ25hbWUnXSYmXzB4NDQ2YzMzWyduYW1lJ10hPT1fMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MjA2KV0mJihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWIzKV09XzB4NDQ2YzMzW18weGE2MTJkNCgweDIwNildKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg1OWM5YmEpe3JldHVybiAweDEvXzB4NTljOWJhPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bJ19zb3J0UHJvcHMnXShfMHgxOTRiMjIpe3ZhciBfMHg0ODk3NjI9XzB4MTFkMmZkOyFfMHgxOTRiMjJbJ3Byb3BzJ118fCFfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MjczKV1bXzB4NDg5NzYyKDB4MjBkKV18fF8weDE5NGIyMltfMHg0ODk3NjIoMHgxZjkpXT09PV8weDQ4OTc2MigweDFjOSl8fF8weDE5NGIyMltfMHg0ODk3NjIoMHgxZjkpXT09PV8weDQ4OTc2MigweDFlNCl8fF8weDE5NGIyMltfMHg0ODk3NjIoMHgxZjkpXT09PV8weDQ4OTc2MigweDFiNCl8fF8weDE5NGIyMlsncHJvcHMnXVtfMHg0ODk3NjIoMHgyNGQpXShmdW5jdGlvbihfMHg1NzUwZjEsXzB4MmViNzM4KXt2YXIgXzB4NzZmOGFjPV8weDQ4OTc2MixfMHg1YjJiYjg9XzB4NTc1MGYxW18weDc2ZjhhYygweDIwNildW18weDc2ZjhhYygweDI0ZSldKCksXzB4NGE0ZjhmPV8weDJlYjczOFtfMHg3NmY4YWMoMHgyMDYpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHg1YjJiYjg8XzB4NGE0ZjhmPy0weDE6XzB4NWIyYmI4Pl8weDRhNGY4Zj8weDE6MHgwO30pO31bXzB4MTFkMmZkKDB4MjE4KV0oXzB4MWM1NjkyLF8weDU5NDFkMil7dmFyIF8weDZkZGM2Mz1fMHgxMWQyZmQ7aWYoIShfMHg1OTQxZDJbXzB4NmRkYzYzKDB4MjI3KV18fCFfMHgxYzU2OTJbXzB4NmRkYzYzKDB4MjczKV18fCFfMHgxYzU2OTJbJ3Byb3BzJ11bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHgzOTc4MTg9W10sXzB4MWJiMGQ2PVtdLF8weGNmNjNmOT0weDAsXzB4NTIyYWVkPV8weDFjNTY5MltfMHg2ZGRjNjMoMHgyNzMpXVtfMHg2ZGRjNjMoMHgyMGQpXTtfMHhjZjYzZjk8XzB4NTIyYWVkO18weGNmNjNmOSsrKXt2YXIgXzB4NWI2NmVhPV8weDFjNTY5MlsncHJvcHMnXVtfMHhjZjYzZjldO18weDViNjZlYVtfMHg2ZGRjNjMoMHgxZjkpXT09PV8weDZkZGM2MygweDFiZCk/XzB4Mzk3ODE4W18weDZkZGM2MygweDFmMyldKF8weDViNjZlYSk6XzB4MWJiMGQ2W18weDZkZGM2MygweDFmMyldKF8weDViNjZlYSk7fWlmKCEoIV8weDFiYjBkNlsnbGVuZ3RoJ118fF8weDM5NzgxOFtfMHg2ZGRjNjMoMHgyMGQpXTw9MHgxKSl7XzB4MWM1NjkyW18weDZkZGM2MygweDI3MyldPV8weDFiYjBkNjt2YXIgXzB4NGQ4ZWZkPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDM5NzgxOH07dGhpc1tfMHg2ZGRjNjMoMHgxZWEpXShfMHg0ZDhlZmQsXzB4NTk0MWQyKSx0aGlzW18weDZkZGM2MygweDFiMCldKF8weDRkOGVmZCxfMHg1OTQxZDIpLHRoaXNbXzB4NmRkYzYzKDB4MjQzKV0oXzB4NGQ4ZWZkKSx0aGlzW18weDZkZGM2MygweDFmOCldKF8weDRkOGVmZCxfMHg1OTQxZDIpLF8weDRkOGVmZFsnaWQnXSs9J1xcXFx4MjBmJyxfMHgxYzU2OTJbJ3Byb3BzJ11bXzB4NmRkYzYzKDB4MjA3KV0oXzB4NGQ4ZWZkKTt9fX1bXzB4MTFkMmZkKDB4MWUxKV0oXzB4MWM3YWQwLF8weDI5N2I2ZCl7fVtfMHgxMWQyZmQoMHgyNDMpXShfMHgyZjUwODcpe31bXzB4MTFkMmZkKDB4MjU1KV0oXzB4NDAxNjk4KXt2YXIgXzB4M2ZkYjkxPV8weDExZDJmZDtyZXR1cm4gQXJyYXlbXzB4M2ZkYjkxKDB4MWFjKV0oXzB4NDAxNjk4KXx8dHlwZW9mIF8weDQwMTY5OD09XzB4M2ZkYjkxKDB4MTk4KSYmdGhpc1tfMHgzZmRiOTEoMHgxYWEpXShfMHg0MDE2OTgpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDExZDJmZCgweDFmOCldKF8weDE1MjE2MixfMHgxZWQ1NzQpe31bXzB4MTFkMmZkKDB4MTliKV0oXzB4MTYxMjUzKXt2YXIgXzB4Njc5YTBjPV8weDExZDJmZDtkZWxldGUgXzB4MTYxMjUzW18weDY3OWEwYygweDIxZildLGRlbGV0ZSBfMHgxNjEyNTNbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4MTYxMjUzW18weDY3OWEwYygweDFmZCldO31bXzB4MTFkMmZkKDB4MTkyKV0oXzB4NDNhOTFjLF8weDRiMWNlZil7fX1sZXQgXzB4MTY5OGRhPW5ldyBfMHgzMzg3MmYoKSxfMHg0MzM2ZDg9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NTA3MzY4PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MjNjMmJlKF8weDE5ZmNkMixfMHg0NTM0NTEsXzB4MTgxYjZkLF8weDJhMDhiMyxfMHg0YjQzNGUsXzB4NTQxODVkKXt2YXIgXzB4OTIxMGQ1PV8weDExZDJmZDtsZXQgXzB4NWI0NGYwLF8weDM2NzE1Yjt0cnl7XzB4MzY3MTViPV8weDllNGM0ZCgpLF8weDViNDRmMD1fMHgyZTBiODNbXzB4NDUzNDUxXSwhXzB4NWI0NGYwfHxfMHgzNjcxNWItXzB4NWI0NGYwWyd0cyddPjB4MWY0JiZfMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV0mJl8weDViNDRmMFsndGltZSddL18weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXTwweDY0PyhfMHgyZTBiODNbXzB4NDUzNDUxXT1fMHg1YjQ0ZjA9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgzNjcxNWJ9LF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXT17fSk6XzB4MzY3MTViLV8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVsndHMnXT4weDMyJiZfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MjI2KV0mJl8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYWUpXS9fMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bJ2NvdW50J108MHg2NCYmKF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXT17fSk7bGV0IF8weDcyOTNhMD1bXSxfMHgzNjI5NmI9XzB4NWI0NGYwWydyZWR1Y2VMaW1pdHMnXXx8XzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFiNildP18weDUwNzM2ODpfMHg0MzM2ZDgsXzB4MjQ3YmViPV8weDIxN2E0Nz0+e3ZhciBfMHg0YTg5YTI9XzB4OTIxMGQ1O2xldCBfMHg1NDE0NTQ9e307cmV0dXJuIF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNzMpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MjczKV0sXzB4NTQxNDU0W18weDRhODlhMigweDFlMildPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgxZTIpXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjFiKV09XzB4MjE3YTQ3W18weDRhODlhMigweDIxYildLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZWIpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MWViKV0sXzB4NTQxNDU0WydhdXRvRXhwYW5kTGltaXQnXT1fMHgyMTdhNDdbJ2F1dG9FeHBhbmRMaW1pdCddLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNjgpXT1fMHgyMTdhNDdbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNDkpXT0hMHgxLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyMjcpXT0hXzB4MzllNThiLF8weDU0MTQ1NFsnZGVwdGgnXT0weDEsXzB4NTQxNDU0W18weDRhODlhMigweDI3NyldPTB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MThhKV09J3Jvb3RfZXhwX2lkJyxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWMzKV09XzB4NGE4OWEyKDB4MWMyKSxfMHg1NDE0NTRbJ2F1dG9FeHBhbmQnXT0hMHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNDUpXT1bXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MTk1KV09MHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNmYpXT0hMHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZGQpXT0weDAsXzB4NTQxNDU0W18weDRhODlhMigweDFmYyldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDU0MTQ1NDt9O2Zvcih2YXIgXzB4NDBjODQ5PTB4MDtfMHg0MGM4NDk8XzB4NGI0MzRlW18weDkyMTBkNSgweDIwZCldO18weDQwYzg0OSsrKV8weDcyOTNhMFsncHVzaCddKF8weDE2OThkYVtfMHg5MjEwZDUoMHgyM2EpXSh7J3RpbWVOb2RlJzpfMHgxOWZjZDI9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHg0YjQzNGVbXzB4NDBjODQ5XSxfMHgyNDdiZWIoXzB4MzYyOTZiKSx7fSkpO2lmKF8weDE5ZmNkMj09PV8weDkyMTBkNSgweDFhYikpe2xldCBfMHg0YjRlOWU9RXJyb3JbXzB4OTIxMGQ1KDB4MjI5KV07dHJ5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT0weDEvMHgwLF8weDcyOTNhMFtfMHg5MjEwZDUoMHgxZjMpXShfMHgxNjk4ZGFbXzB4OTIxMGQ1KDB4MjNhKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDkyMTBkNSgweDE5MyldLF8weDI0N2JlYihfMHgzNjI5NmIpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDkyMTBkNSgweDIyOSldPV8weDRiNGU5ZTt9fXJldHVybnsnbWV0aG9kJzpfMHg5MjEwZDUoMHgxY2QpLCd2ZXJzaW9uJzpfMHgxMmRlMGIsJ2FyZ3MnOlt7J3RzJzpfMHgxODFiNmQsJ3Nlc3Npb24nOl8weDJhMDhiMywnYXJncyc6XzB4NzI5M2EwLCdpZCc6XzB4NDUzNDUxLCdjb250ZXh0JzpfMHg1NDE4NWR9XX07fWNhdGNoKF8weDNjNGZjZCl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHgxMmRlMGIsJ2FyZ3MnOlt7J3RzJzpfMHgxODFiNmQsJ3Nlc3Npb24nOl8weDJhMDhiMywnYXJncyc6W3sndHlwZSc6XzB4OTIxMGQ1KDB4MWIyKSwnZXJyb3InOl8weDNjNGZjZCYmXzB4M2M0ZmNkW18weDkyMTBkNSgweDFiZSldfV0sJ2lkJzpfMHg0NTM0NTEsJ2NvbnRleHQnOl8weDU0MTg1ZH1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NWI0NGYwJiZfMHgzNjcxNWIpe2xldCBfMHgzOWMwNGU9XzB4OWU0YzRkKCk7XzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildKyssXzB4NWI0NGYwWyd0aW1lJ10rPV8weDI3ZmMxNShfMHgzNjcxNWIsXzB4MzljMDRlKSxfMHg1YjQ0ZjBbJ3RzJ109XzB4MzljMDRlLF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgyMjYpXSsrLF8weDJlMGI4M1snaGl0cyddW18weDkyMTBkNSgweDFhZSldKz1fMHgyN2ZjMTUoXzB4MzY3MTViLF8weDM5YzA0ZSksXzB4MmUwYjgzWydoaXRzJ11bJ3RzJ109XzB4MzljMDRlLChfMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV0+MHgzMnx8XzB4NWI0NGYwWyd0aW1lJ10+MHg2NCkmJihfMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MWI2KV09ITB4MCksKF8weDJlMGI4M1snaGl0cyddWydjb3VudCddPjB4M2U4fHxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWFlKV0+MHgxMmMpJiYoXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFiNildPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDIzYzJiZTt9KChfMHg0YjAwZDgsXzB4NTU3OGYxLF8weDNlZDJhNyxfMHgzMGVhYWIsXzB4MjEzMjk1LF8weDU3ODg4YixfMHg0ZDI4OGEsXzB4MmZlODk0LF8weDNjZmE2YSxfMHgyNmQxZDQpPT57dmFyIF8weDE5OThkMz1fMHgxZjdmZTE7aWYoXzB4NGIwMGQ4W18weDE5OThkMygweDIzMildKXJldHVybiBfMHg0YjAwZDhbJ19jb25zb2xlX25pbmphJ107aWYoIUooXzB4NGIwMGQ4LF8weDJmZTg5NCxfMHgyMTMyOTUpKXJldHVybiBfMHg0YjAwZDhbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXTtsZXQgXzB4MWVjOGM4PVcoXzB4NGIwMGQ4KSxfMHgxYTNjN2Y9XzB4MWVjOGM4WydlbGFwc2VkJ10sXzB4NDFjZjZhPV8weDFlYzhjOFtfMHgxOTk4ZDMoMHgyM2QpXSxfMHgyNDcwNjA9XzB4MWVjOGM4W18weDE5OThkMygweDI1MSldLF8weDFkM2M0NT17J2hpdHMnOnt9LCd0cyc6e319LF8weDU2ODNiZT1ZKF8weDRiMDBkOCxfMHgzY2ZhNmEsXzB4MWQzYzQ1LF8weDU3ODg4YiksXzB4M2UyNDhmPV8weDEwMzkyZj0+e18weDFkM2M0NVsndHMnXVtfMHgxMDM5MmZdPV8weDQxY2Y2YSgpO30sXzB4MmViYmU3PShfMHgxYTAyYzgsXzB4NDMyN2MxKT0+e3ZhciBfMHgxNTk1YTM9XzB4MTk5OGQzO2xldCBfMHg0ODAxMWI9XzB4MWQzYzQ1Wyd0cyddW18weDQzMjdjMV07aWYoZGVsZXRlIF8weDFkM2M0NVsndHMnXVtfMHg0MzI3YzFdLF8weDQ4MDExYil7bGV0IF8weDQ0MWZlYz1fMHgxYTNjN2YoXzB4NDgwMTFiLF8weDQxY2Y2YSgpKTtfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDE1OTVhMygweDFhZSksXzB4MWEwMmM4LF8weDI0NzA2MCgpLF8weDNlMDBmYyxbXzB4NDQxZmVjXSxfMHg0MzI3YzEpKTt9fSxfMHg2NjUzMDE9XzB4NDA5NTUzPT5fMHgyYThkOTY9Pnt2YXIgXzB4MzViMmFhPV8weDE5OThkMzt0cnl7XzB4M2UyNDhmKF8weDJhOGQ5NiksXzB4NDA5NTUzKF8weDJhOGQ5Nik7fWZpbmFsbHl7XzB4NGIwMGQ4Wydjb25zb2xlJ11bXzB4MzViMmFhKDB4MWFlKV09XzB4NDA5NTUzO319LF8weDE0NjIxNT1fMHg1YWE1OTE9Pl8weDQ0YjhjMD0+e3ZhciBfMHhjNWI2ZTM9XzB4MTk5OGQzO3RyeXtsZXQgW18weDRlYjFiNixfMHgxNTRhZGNdPV8weDQ0YjhjMFtfMHhjNWI2ZTMoMHgxZjYpXShfMHhjNWI2ZTMoMHgyNTkpKTtfMHgyZWJiZTcoXzB4MTU0YWRjLF8weDRlYjFiNiksXzB4NWFhNTkxKF8weDRlYjFiNik7fWZpbmFsbHl7XzB4NGIwMGQ4W18weGM1YjZlMygweDI1NildWyd0aW1lRW5kJ109XzB4NWFhNTkxO319O18weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXT17J2NvbnNvbGVMb2cnOihfMHgyMzkzZjgsXzB4NTFiZTYyKT0+e3ZhciBfMHg1MTE1MWI9XzB4MTk5OGQzO18weDRiMDBkOFtfMHg1MTE1MWIoMHgyNTYpXVtfMHg1MTE1MWIoMHgxY2QpXVtfMHg1MTE1MWIoMHgyMDYpXSE9PSdkaXNhYmxlZExvZycmJl8weDM0MWFkZihfMHg1NjgzYmUoXzB4NTExNTFiKDB4MWNkKSxfMHgyMzkzZjgsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLF8weDUxYmU2MikpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDExOTM2OSxfMHg0NDIwMzEpPT57dmFyIF8weDU5NGM4MD1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weDU5NGM4MCgweDI1NildW18weDU5NGM4MCgweDFjZCldWyduYW1lJ10hPT0nZGlzYWJsZWRUcmFjZScmJl8weDM0MWFkZihfMHg1NjgzYmUoXzB4NTk0YzgwKDB4MWFiKSxfMHgxMTkzNjksXzB4MjQ3MDYwKCksXzB4M2UwMGZjLF8weDQ0MjAzMSkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgzMmVkZjA9XzB4MTk5OGQzO18weDRiMDBkOFtfMHgzMmVkZjAoMHgyNTYpXVtfMHgzMmVkZjAoMHgxYWUpXT1fMHg2NjUzMDEoXzB4NGIwMGQ4W18weDMyZWRmMCgweDI1NildW18weDMyZWRmMCgweDFhZSldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4Y2ViN2E5PV8weDE5OThkMztfMHg0YjAwZDhbXzB4Y2ViN2E5KDB4MjU2KV1bXzB4Y2ViN2E5KDB4MWEyKV09XzB4MTQ2MjE1KF8weDRiMDBkOFsnY29uc29sZSddWyd0aW1lRW5kJ10pO30sJ2F1dG9Mb2cnOihfMHg1NjEwMjEsXzB4MzM0M2E2KT0+e3ZhciBfMHg5OTI1M2Y9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4OTkyNTNmKDB4MWNkKSxfMHgzMzQzYTYsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLFtfMHg1NjEwMjFdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgxNGRmNjIsXzB4MWFjYTg1KT0+e3ZhciBfMHg0ZTk5MzQ9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4NGU5OTM0KDB4MWNkKSxfMHgxNGRmNjIsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLF8weDFhY2E4NSkpO30sJ2F1dG9UcmFjZSc6KF8weDE5ZjMzYixfMHg0OWNmNWMpPT57dmFyIF8weDM4YWJhNT1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHgzOGFiYTUoMHgxYWIpLF8weDQ5Y2Y1YyxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsW18weDE5ZjMzYl0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4Y2Q5OTYyLF8weDNhZGJjMCk9Pnt2YXIgXzB4NDBhN2FhPV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDQwYTdhYSgweDFhYiksXzB4Y2Q5OTYyLF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHgzYWRiYzApKTt9LCdhdXRvVGltZSc6KF8weDFlMWZkNyxfMHgyZTU0MjksXzB4MmNjYjAyKT0+e18weDNlMjQ4ZihfMHgyY2NiMDIpO30sJ2F1dG9UaW1lRW5kJzooXzB4MmUzOGU2LF8weDE0MWJmOCxfMHhkYzMzYjIpPT57XzB4MmViYmU3KF8weDE0MWJmOCxfMHhkYzMzYjIpO30sJ2NvdmVyYWdlJzpfMHgyOThmMzc9Pnt2YXIgXzB4MjM4MGIyPV8weDE5OThkMztfMHgzNDFhZGYoeydtZXRob2QnOl8weDIzODBiMigweDFkZSksJ3ZlcnNpb24nOl8weDU3ODg4YiwnYXJncyc6W3snaWQnOl8weDI5OGYzN31dfSk7fX07bGV0IF8weDM0MWFkZj1iKF8weDRiMDBkOCxfMHg1NTc4ZjEsXzB4M2VkMmE3LF8weDMwZWFhYixfMHgyMTMyOTUsXzB4MjZkMWQ0KSxfMHgzZTAwZmM9XzB4NGIwMGQ4W18weDE5OThkMygweDI2ZSldO3JldHVybiBfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV07fSkoZ2xvYmFsVGhpcyxfMHgxZjdmZTEoMHgyMTMpLF8weDFmN2ZlMSgweDIwYyksXzB4MWY3ZmUxKDB4MWQ3KSxfMHgxZjdmZTEoMHgyMDkpLCcxLjAuMCcsXzB4MWY3ZmUxKDB4MThlKSxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcImRrbS1kZXNrdG9wXFxcIixcXFwiMTkyLjE2OC4xLjEwMVxcXCJdLF8weDFmN2ZlMSgweDFhZiksXzB4MWY3ZmUxKDB4MWIxKSk7XCIpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcblx0Y29uc3RydWN0b3IodGl0bGUgPSAnRGVmYXVsdCcpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGVcblx0XHR0aGlzLnRvZG9zID0gW11cblx0fVxuXG5cdGFkZFRvUHJvamVjdCh0b2RvKSB7XG5cdFx0dGhpcy50b2Rvcy5wdXNoKHRvZG8pXG5cdH1cblxuXHRwcmludFByb2plY3QoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy50aXRsZSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLnRvZG9zKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gJy4vdG9kb3MnXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5LCBmaW5kUHJvamVjdCB9IGZyb20gJy4vZGF0YWhhbmRsZXInXG5pbXBvcnQgaW5pdCBmcm9tICcuLidcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tICcuL21vZGFscydcblxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB0b29sYmFyOlxuY29uc3QgdG9vbEJhciA9ICgpID0+IHtcblx0Y29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tdG9kbycpXG5cdGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNyZWF0ZU1vZGFsKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpKVxuXHRcdG1vZGFsLnNob3dNb2RhbCgpXG5cdH0pXG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXByb2plY3QnKVxuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjcmVhdGVNb2RhbChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSlcblx0XHRtb2RhbC5zaG93TW9kYWwoKVxuXHR9KVxufVxuLy8gUmVuZGVyIHRoZSBjb250ZW50IGFyZWEgb2YgdGhlIHBhZ2UuXG5jb25zdCByZW5kZXJET00gPSAocHJvaikgPT4ge1xuXHQvLyBTZXQgdGhlIHByb2plY3QgdG8gYmUgcmVuZGVyZWRcblx0bGV0IGN1cnJlbnRQcm9qZWN0ID0gZmluZFByb2plY3QocHJvailcblx0Ly8gSWYgdGhlIGN1cnJlbnQgcHJvamVjdCBpcyBub3QgZGVmaW5lZCwgc2V0IHRvIGZpcnN0IHByb2plY3QgaW4gYXJyYXlcblx0aWYgKGN1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRjdXJyZW50UHJvamVjdCA9IHByb2plY3RzQXJyYXlbMF1cblx0XHQvLyBJZiBOTyBwcm9qZWN0cyBhcmUgcHJlc2VudCBhdCBhbGwsIGluaXRpYWxpc2UgYSBkZWZhdWx0IHByb2plY3QuXG5cdFx0aWYgKGN1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGluaXQoKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0Ly8gTWFrZSBzdXJlIGEgcHJvamVjdCBleGlzdCBiZWZvcmUgdHJ5aW5nIHRvIHJlbmRlciBpdC5cblx0aWYgKGN1cnJlbnRQcm9qZWN0KSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNTI5MDU5MTZfMzVfMl8zNV8zNl80YCwnUmVuZGVyaW5nIHByb2plY3Q6ICcpKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDUyOTA1OTE2XzM2XzJfMzZfMjlfNGAsY3VycmVudFByb2plY3QpKVxuXHRcdC8vIEZldGNoIHJlbGV2YW50IERPTSAoY29udGVudCBhcmVhKVxuXHRcdGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKVxuXHRcdGRpc3BsYXkudGV4dENvbnRlbnQgPSAnJ1xuXG5cdFx0Ly8gQ3JlYXRlIG5ldyBET00gZWxlbWVudHMgZm9yIHByb2plY3Rcblx0XHRjb25zdCBwcm9qUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRwcm9qUmVuZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcmVuZGVyJylcblxuXHRcdGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcblx0XHRwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW5kZXItdGl0bGUnKVxuXHRcdHByb2pUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlXG5cdFx0cHJvalJlbmRlci5hcHBlbmRDaGlsZChwcm9qVGl0bGUpXG5cdFx0ZGlzcGxheS5hcHBlbmRDaGlsZChwcm9qUmVuZGVyKVxuXG5cdFx0Ly8gQ3JlYXRlIGRvbSBlbGVtZW50cyBmb3IgcHJvamVjdHMgdG9kb3Ncblx0XHRjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0dG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MtY29udGFpbmVyJylcblx0XHQvL1xuXHRcdGNvbnN0IHByb2plY3RUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zXG5cdFx0cHJvamVjdFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcblx0XHRcdGNyZWF0ZVRvRG9DYXJkKHRvZG8sIHRvZG9zQ29udGFpbmVyKVxuXHRcdH0pXG5cblx0XHRwcm9qUmVuZGVyLmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKVxuXHRcdC8vIERlZmluZSBjdXJyZW50IHByb2plY3QsIHN0YXJ0aW5nIGF0IGluZGV4IDAoZGVmYXVsdClcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUcmVlKHByb2plY3RzQXJyYXkpIHtcblx0Ly8gQ29uc29sZSBsb2cgZm9yIHN0YXR1cyB0cmlnZ2VyXG5cdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDUyOTA1OTE2XzY3XzFfNjdfNTNfNGAsJ3VwZGF0ZVRyZWUgdHJpZ2dlcmVkISBBcnJheSByZWNlaXZlZDonKSlcblx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNTI5MDU5MTZfNjhfMV82OF8yN180YCxwcm9qZWN0c0FycmF5KSlcblxuXHQvLyBmZXRjaCBkaXNwbGF5IGVsZW1lbnQgb24gRE9NXG5cdGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnZpZXctdHJlZScpXG5cdC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgZnJvbSBlbGVtZW50LCBmb3IgbmV3IHZlcnNpb24uXG5cdGRpc3BsYXkudGV4dENvbnRlbnQgPSAnJ1xuXG5cdC8vIENyZWF0ZSBuZXcgRE9NIGNvbnRlbnRcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cdHRpdGxlLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJ1xuXG5cdC8vIHRyZWUgcm9vdHMgcmVuZGVyXG5cdGNvbnN0IHRyZWVSZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cdHRyZWVSZW5kZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcnZpZXcnKVxuXHQvLyBmb3IgZWFjaCBwcm9qZWN0IGluIHByb2plY3RzQXJyYXlcblx0cHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcblx0XHQvLyBhZGQgYSBwcm9qZWN0IGxpIGVsZW1lbnQgdG8gdHJlZSByb290IHJlbmRlclxuXHRcdGNvbnN0IHRyZWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXHRcdHRyZWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ292ZXJ2aWV3LXByb2plY3QnKVxuXHRcdHRyZWVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyRE9NKHByb2plY3QudGl0bGUpKVxuXG5cdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXG5cblx0XHRjb25zdCBwcm9qZWN0RGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0XHRwcm9qZWN0RGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbEJ0bicpXG5cdFx0cHJvamVjdERlbEJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNidcblx0XHRwcm9qZWN0RGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0cHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKVxuXHRcdFx0dXBkYXRlVHJlZShwcm9qZWN0c0FycmF5KVxuXHRcdH0pXG5cdFx0Ly8gcHV0IHRoZSBwcm9qZWN0IGVsZW1lbnRzIHRvZ2V0aGVyXG5cdFx0cHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3REZWxCdG4pXG5cdFx0dHJlZVByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG5cdFx0Ly8gYWRkIHRvZG8gdGl0bGVzIG9mIGVhY2ggcHJvamVjdCBsaSBhcyBzdWItbGlcblx0XHRwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cdFx0XHRwcm9qZWN0VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVydmlldy10b2RvJylcblx0XHRcdGNvbnN0IHByb2plY3RUb2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRjb25zdCBwcm9qZWN0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdFx0XHRwcm9qZWN0VG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuXHRcdFx0Y29uc3QgcHJvamVjdFRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdFx0XHRwcm9qZWN0VG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGVcblx0XHRcdHByb2plY3RUb2RvVGV4dC5hcHBlbmQocHJvamVjdFRvZG9UaXRsZSwgcHJvamVjdFRvZG9EYXRlKVxuXG5cdFx0XHRjb25zdCB0b2RvRGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0XHRcdHRvZG9EZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsQnRuJylcblx0XHRcdHRvZG9EZWxCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDYnXG5cdFx0XHR0b2RvRGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSlcblx0XHRcdFx0dXBkYXRlVHJlZShwcm9qZWN0c0FycmF5KVxuXHRcdFx0XHRyZW5kZXIoZmluZFByb2plY3QocHJvamVjdC50aXRsZSkpXG5cdFx0XHR9KVxuXHRcdFx0Ly8gcHV0IHRoZSB0b2RvIGVsZW1lbnRzIHRvZ2V0aGVyXG5cdFx0XHRwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvZG9UZXh0LCB0b2RvRGVsQnRuKVxuXHRcdFx0dHJlZVByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9Db250YWluZXIpXG5cdFx0fSlcblx0XHQvLyBhdHRhY2hlZCBwcm9qZWN0IGVsZW1lbnRzIHRvIHRyZWUgcm9vdFxuXHRcdHRyZWVSZW5kZXIuYXBwZW5kQ2hpbGQodHJlZVByb2plY3QpXG5cdH0pXG5cdC8vIGF0dGFjaCB0cmVlIHJvb3QgdG8gZGlzcGxheVxuXHRkaXNwbGF5LmFwcGVuZCh0aXRsZSwgdHJlZVJlbmRlcilcbn1cblxuZXhwb3J0IHsgcmVuZGVyRE9NLCB1cGRhdGVUcmVlLCB0b29sQmFyIH1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgxZjdmZTE9XzB4MzdlNDsoZnVuY3Rpb24oXzB4NDdmZmI1LF8weDMwNTcxNil7dmFyIF8weDM3MmQ4ND1fMHgzN2U0LF8weDMyNWU4Zj1fMHg0N2ZmYjUoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDQ5MzYxMT0tcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjI1KSkvMHgxKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWQ2KSkvMHgyKSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWE5KSkvMHgzKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjcyKSkvMHg0KSstcGFyc2VJbnQoXzB4MzcyZDg0KDB4MjViKSkvMHg1Ky1wYXJzZUludChfMHgzNzJkODQoMHgxOGIpKS8weDYqKC1wYXJzZUludChfMHgzNzJkODQoMHgyMzUpKS8weDcpKy1wYXJzZUludChfMHgzNzJkODQoMHgxZjEpKS8weDgqKHBhcnNlSW50KF8weDM3MmQ4NCgweDFiOSkpLzB4OSkrcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWYyKSkvMHhhKigtcGFyc2VJbnQoXzB4MzcyZDg0KDB4MWVkKSkvMHhiKStwYXJzZUludChfMHgzNzJkODQoMHgxZTgpKS8weGM7aWYoXzB4NDkzNjExPT09XzB4MzA1NzE2KWJyZWFrO2Vsc2UgXzB4MzI1ZThmWydwdXNoJ10oXzB4MzI1ZThmWydzaGlmdCddKCkpO31jYXRjaChfMHgyYjQ5OWUpe18weDMyNWU4ZlsncHVzaCddKF8weDMyNWU4Zlsnc2hpZnQnXSgpKTt9fX0oXzB4MjhlZCwweDQ1ZjU4KSk7ZnVuY3Rpb24gXzB4MjhlZCgpe3ZhciBfMHg4YmE0ZDc9Wyc6bG9nUG9pbnRJZDonLCdfSFRNTEFsbENvbGxlY3Rpb24nLCcyMzc2MzY1bWpUTVFhJywnY29uY2F0JywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ3NldHRlcicsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywncmVwbGFjZScsJ3BhcnNlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3BvcnQnLCdfcmVjb25uZWN0VGltZW91dCcsJ25vZGVNb2R1bGVzJywnU3RyaW5nJywnX3Byb3BlcnR5JywnYXV0b0V4cGFuZE1heERlcHRoJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ19hbGxvd2VkVG9TZW5kJywndXJsJywnd3MvaW5kZXguanMnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdyZXNvbHZlR2V0dGVycycsJ2NvbnN0cnVjdG9yJywnX3Byb3BlcnR5TmFtZScsJzg4ODY0UGVOb1FuJywncHJvcHMnLCdhdXRvRXhwYW5kJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdtZXRob2QnLCdsZXZlbCcsJ2NyZWF0ZScsJ29uY2xvc2UnLCd2ZXJzaW9ucycsJ2V4cElkJywnNDUzNzg2aFpSVE1RJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfaW5OZXh0RWRnZScsJzE3MDkzMTEwMTY1MjInLCdfY29ubmVjdFRvSG9zdE5vdycsJ2hhc093blByb3BlcnR5JywnaW5kZXgnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnc3RhY2snLCdfd3MnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ2VkZ2UnLCdCdWZmZXInLCdvYmplY3QnLCdzZXQnLCd3czovLycsJ19jbGVhbk5vZGUnLCdhc3RybycsJ190eXBlJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdjYXRjaCcsJ3Byb3RvdHlwZScsJ19wXycsJ3RpbWVFbmQnLCdXZWJTb2NrZXQnLCdnbG9iYWwnLCdzbGljZScsJ0Vycm9yJywnX2lzUHJpbWl0aXZlVHlwZScsJ19pc1VuZGVmaW5lZCcsJzU0aVJuUUpOJywnX29iamVjdFRvU3RyaW5nJywndHJhY2UnLCdpc0FycmF5JywnX3F1b3RlZFJlZ0V4cCcsJ3RpbWUnLCcnLCdfc2V0Tm9kZUxhYmVsJywnJywndW5rbm93bicsJ2Z1bmNOYW1lJywnU2V0JywnXFxcXHgyMGJyb3dzZXInLCdyZWR1Y2VMaW1pdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCc5VnBIRU1TJywnaW5jbHVkZXMnLCdfU3ltYm9sJywnbmVnYXRpdmVJbmZpbml0eScsJ2Z1bmN0aW9uJywnbWVzc2FnZScsJ25hbicsJ29ubWVzc2FnZScsJ19kYXRlVG9TdHJpbmcnLCdyb290X2V4cCcsJ3Jvb3RFeHByZXNzaW9uJywnZG9ja2VyaXplZEFwcCcsJ19XZWJTb2NrZXRDbGFzcycsJ2dldHRlcicsJ2hvc3RuYW1lJywnd2FybicsJ2FycmF5JywnX2lzTWFwJywnZWxhcHNlZCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnbG9nJywnTkVHQVRJVkVfSU5GSU5JVFknLCdjYXBwZWRFbGVtZW50cycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdyZWxvYWQnLCdfY29ubmVjdGVkJywndmFsdWUnLCdyZWFkeVN0YXRlJywnYXV0b0V4cGFuZExpbWl0JywnMTR0d1VnWEgnLFxcXCIvaG9tZS9kYW5pZWxsci8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI5MC9ub2RlX21vZHVsZXNcXFwiLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCcuLi4nLCdzdHJpbmcnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19jYXBJZlN0cmluZycsJ2FsbFN0ckxlbmd0aCcsJ2NvdmVyYWdlJywnbWFwJywncG9wJywnX2FkZExvYWROb2RlJywnZWxlbWVudHMnLCdudW1iZXInLCdNYXAnLCdwYXRoJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdORVhUX1JVTlRJTUUnLCc4NzcyMDk2YUJlaU5hJywnX3JlZ0V4cFRvU3RyaW5nJywnX3NldE5vZGVJZCcsJ3RvdGFsU3RyTGVuZ3RoJywnZGF0YScsJzI3NXpDZmF1RycsJ25lZ2F0aXZlWmVybycsJ3N5bWJvbCcsJ2dldFdlYlNvY2tldENsYXNzJywnMzgyNzQ2NGZzaXZVYycsJzk5NDMwck1wd2NzJywncHVzaCcsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnZW52Jywnc3BsaXQnLCdudWxsJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ3R5cGUnLCdfa2V5U3RyUmVnRXhwJywnX19lcycrJ01vZHVsZScsJ25vZGUnLCdfaGFzTWFwT25JdHNQYXRoJywndG9TdHJpbmcnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdjbG9zZScsJ3NlbmQnLCdfaXNOZWdhdGl2ZVplcm8nLCd0aGVuJywnX2luQnJvd3NlcicsJ3VucmVmJywnbmFtZScsJ3Vuc2hpZnQnLCdoaXRzJywnd2VicGFjaycsJ19zb2NrZXQnLCdfZGlzcG9zZVdlYnNvY2tldCcsJzM0ODc5JywnbGVuZ3RoJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdwZXJmX2hvb2tzJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX2lzU2V0JywnX3NlbmRFcnJvck1lc3NhZ2UnLCcxMjcuMC4wLjEnLCdwcm9jZXNzJywnaG9zdCcsJ2pvaW4nLCdIVE1MQWxsQ29sbGVjdGlvbicsJ19hZGRGdW5jdGlvbnNOb2RlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ3N0ckxlbmd0aCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2NhbGwnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnZGVwdGgnLCdfV2ViU29ja2V0JywnYmluZCcsJ19zZXROb2RlUXVlcnlQYXRoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzI5NTI1WUdSTkJKJywnY291bnQnLCdub0Z1bmN0aW9ucycsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5Jywnc3RhY2tUcmFjZUxpbWl0JywnTnVtYmVyJywncGVyZm9ybWFuY2UnLCd0ZXN0JywndmFsdWVPZicsJ3Bvc2l0aXZlSW5maW5pdHknLCdfcF9sZW5ndGgnLCdlcnJvcicsJ29uZXJyb3InLCdfY29uc29sZV9uaW5qYScsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2NhcHBlZFByb3BzJywnMTRoeERLWVYnLCdpbmRleE9mJywnZm9yRWFjaCcsJ3BhcmVudCcsJ2dldCcsJ3NlcmlhbGl6ZScsJ2dldFByb3RvdHlwZU9mJywnX2FkZFByb3BlcnR5JywndGltZVN0YW1wJywnbG9jYXRpb24nLCdjYXBwZWQnLCd1bmRlZmluZWQnLCdfY29ubmVjdGluZycsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnZW51bWVyYWJsZScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnXFxcXHgyMHNlcnZlcicsJ2hydGltZScsJ3NvcnRQcm9wcycsJ21hdGNoJywnYmlnaW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdzb3J0JywndG9Mb3dlckNhc2UnLCdfdW5kZWZpbmVkJywnb25vcGVuJywnbm93JywnUE9TSVRJVkVfSU5GSU5JVFknLCdjdXJyZW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdfaXNBcnJheScsJ2NvbnNvbGUnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCddO18weDI4ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4OGJhNGQ3O307cmV0dXJuIF8weDI4ZWQoKTt9ZnVuY3Rpb24gXzB4MzdlNChfMHg2OWUxNDYsXzB4M2RiMjhkKXt2YXIgXzB4MjhlZDZlPV8weDI4ZWQoKTtyZXR1cm4gXzB4MzdlND1mdW5jdGlvbihfMHgzN2U0NjAsXzB4MTlhMjU3KXtfMHgzN2U0NjA9XzB4MzdlNDYwLTB4MTg5O3ZhciBfMHgxODkwY2Q9XzB4MjhlZDZlW18weDM3ZTQ2MF07cmV0dXJuIF8weDE4OTBjZDt9LF8weDM3ZTQoXzB4NjllMTQ2LF8weDNkYjI4ZCk7fXZhciBqPU9iamVjdFtfMHgxZjdmZTEoMHgyNzgpXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFtfMHgxZjdmZTEoMHgxYjgpXSxlZT1PYmplY3RbXzB4MWY3ZmUxKDB4MjYyKV0sdGU9T2JqZWN0W18weDFmN2ZlMSgweDIzYildLG5lPU9iamVjdFtfMHgxZjdmZTEoMHgxYTApXVtfMHgxZjdmZTEoMHgxOTApXSxyZT0oXzB4NWFjNjQyLF8weDFjZjU2MCxfMHg1NjE1NTMsXzB4MjBjNDQ3KT0+e3ZhciBfMHg0NWMyMDI9XzB4MWY3ZmUxO2lmKF8weDFjZjU2MCYmdHlwZW9mIF8weDFjZjU2MD09XzB4NDVjMjAyKDB4MTk4KXx8dHlwZW9mIF8weDFjZjU2MD09XzB4NDVjMjAyKDB4MWJkKSl7Zm9yKGxldCBfMHg1MDhhMmMgb2YgZWUoXzB4MWNmNTYwKSkhbmVbXzB4NDVjMjAyKDB4MjFkKV0oXzB4NWFjNjQyLF8weDUwOGEyYykmJl8weDUwOGEyYyE9PV8weDU2MTU1MyYmSChfMHg1YWM2NDIsXzB4NTA4YTJjLHsnZ2V0JzooKT0+XzB4MWNmNTYwW18weDUwOGEyY10sJ2VudW1lcmFibGUnOiEoXzB4MjBjNDQ3PUcoXzB4MWNmNTYwLF8weDUwOGEyYykpfHxfMHgyMGM0NDdbXzB4NDVjMjAyKDB4MjQ0KV19KTt9cmV0dXJuIF8weDVhYzY0Mjt9LHg9KF8weDFhOTI2MSxfMHhiODQyZTEsXzB4M2ExMjNkKT0+KF8weDNhMTIzZD1fMHgxYTkyNjEhPW51bGw/aih0ZShfMHgxYTkyNjEpKTp7fSxyZShfMHhiODQyZTF8fCFfMHgxYTkyNjF8fCFfMHgxYTkyNjFbXzB4MWY3ZmUxKDB4MWZiKV0/SChfMHgzYTEyM2QsJ2RlZmF1bHQnLHsndmFsdWUnOl8weDFhOTI2MSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDNhMTIzZCxfMHgxYTkyNjEpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDI1ODk0NixfMHg0YWJjMjQsXzB4NTNhOTBhLF8weDY4ZGI0NSxfMHg1NDU3ZTgpe3ZhciBfMHgyNTk3Y2I9XzB4MWY3ZmUxO3RoaXNbXzB4MjU5N2NiKDB4MWE0KV09XzB4MjU4OTQ2LHRoaXNbXzB4MjU5N2NiKDB4MjE1KV09XzB4NGFiYzI0LHRoaXNbXzB4MjU5N2NiKDB4MjYzKV09XzB4NTNhOTBhLHRoaXNbXzB4MjU5N2NiKDB4MjY1KV09XzB4NjhkYjQ1LHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHg1NDU3ZTgsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4MjU5N2NiKDB4MWNjKV09ITB4MCx0aGlzW18weDI1OTdjYigweDFkMildPSEweDEsdGhpc1tfMHgyNTk3Y2IoMHgyNDEpXT0hMHgxLHRoaXNbXzB4MjU5N2NiKDB4MThkKV09XzB4MjU4OTQ2W18weDI1OTdjYigweDIxNCldPy5bJ2VudiddPy5bXzB4MjU5N2NiKDB4MWU3KV09PT0nZWRnZScsdGhpc1tfMHgyNTk3Y2IoMHgyMDQpXT0hdGhpc1tfMHgyNTk3Y2IoMHgxYTQpXVtfMHgyNTk3Y2IoMHgyMTQpXT8uW18weDI1OTdjYigweDE4OSldPy5bXzB4MjU5N2NiKDB4MWZjKV0mJiF0aGlzW18weDI1OTdjYigweDE4ZCldLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1tfMHgyNTk3Y2IoMHgxZjQpXT0weDAsdGhpc1tfMHgyNTk3Y2IoMHgxZGIpXT0weDE0LHRoaXNbXzB4MjU5N2NiKDB4MTllKV09XzB4MjU5N2NiKDB4MjQ2KSx0aGlzW18weDI1OTdjYigweDIxMildPSh0aGlzW18weDI1OTdjYigweDIwNCldP18weDI1OTdjYigweDI1Zik6XzB4MjU5N2NiKDB4MjZkKSkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXTt9YXN5bmNbXzB4MWY3ZmUxKDB4MWYwKV0oKXt2YXIgXzB4MzM2MWE2PV8weDFmN2ZlMTtpZih0aGlzW18weDMzNjFhNigweDFjNSldKXJldHVybiB0aGlzWydfV2ViU29ja2V0Q2xhc3MnXTtsZXQgXzB4MjQwZDhmO2lmKHRoaXNbXzB4MzM2MWE2KDB4MjA0KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4MjQwZDhmPXRoaXNbJ2dsb2JhbCddW18weDMzNjFhNigweDFhMyldO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bJ3Byb2Nlc3MnXT8uW18weDMzNjFhNigweDIyMSldKV8weDI0MGQ4Zj10aGlzWydnbG9iYWwnXVtfMHgzMzYxYTYoMHgyMTQpXT8uW18weDMzNjFhNigweDIyMSldO2Vsc2UgdHJ5e2xldCBfMHg0MjU5MTI9YXdhaXQgaW1wb3J0KF8weDMzNjFhNigweDFlNSkpO18weDI0MGQ4Zj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4MzM2MWE2KDB4MjZiKSkpWydwYXRoVG9GaWxlVVJMJ10oXzB4NDI1OTEyW18weDMzNjFhNigweDIxNildKHRoaXNbXzB4MzM2MWE2KDB4MjY1KV0sXzB4MzM2MWE2KDB4MjZjKSkpW18weDMzNjFhNigweDFmZSldKCkpKVsnZGVmYXVsdCddO31jYXRjaHt0cnl7XzB4MjQwZDhmPXJlcXVpcmUocmVxdWlyZShfMHgzMzYxYTYoMHgxZTUpKVtfMHgzMzYxYTYoMHgyMTYpXSh0aGlzW18weDMzNjFhNigweDI2NSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDMzNjFhNigweDIxYykpO319fXJldHVybiB0aGlzW18weDMzNjFhNigweDFjNSldPV8weDI0MGQ4ZixfMHgyNDBkOGY7fVtfMHgxZjdmZTEoMHgxOGYpXSgpe3ZhciBfMHgxMDQxYzc9XzB4MWY3ZmUxO3RoaXNbXzB4MTA0MWM3KDB4MjQxKV18fHRoaXNbXzB4MTA0MWM3KDB4MWQyKV18fHRoaXNbXzB4MTA0MWM3KDB4MWY0KV0+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J118fCh0aGlzW18weDEwNDFjNygweDFjYyldPSEweDEsdGhpc1tfMHgxMDQxYzcoMHgyNDEpXT0hMHgwLHRoaXNbXzB4MTA0MWM3KDB4MWY0KV0rKyx0aGlzW18weDEwNDFjNygweDE5NCldPW5ldyBQcm9taXNlKChfMHgxZDQ3YTgsXzB4MzAyNmQ2KT0+e3ZhciBfMHhkZDExMDY9XzB4MTA0MWM3O3RoaXNbXzB4ZGQxMTA2KDB4MWYwKV0oKVtfMHhkZDExMDYoMHgyMDMpXShfMHg0Y2M4ZmY9Pnt2YXIgXzB4NDdkYWM3PV8weGRkMTEwNjtsZXQgXzB4MWQxMGQwPW5ldyBfMHg0Y2M4ZmYoXzB4NDdkYWM3KDB4MTlhKSsoIXRoaXNbXzB4NDdkYWM3KDB4MjA0KV0mJnRoaXNbXzB4NDdkYWM3KDB4MWM0KV0/XzB4NDdkYWM3KDB4MjU4KTp0aGlzWydob3N0J10pKyc6Jyt0aGlzWydwb3J0J10pO18weDFkMTBkMFtfMHg0N2RhYzcoMHgyMzEpXT0oKT0+e3ZhciBfMHg4MzZjZTA9XzB4NDdkYWM3O3RoaXNbXzB4ODM2Y2UwKDB4MjZhKV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDFkMTBkMCksdGhpc1tfMHg4MzZjZTAoMHgyMjgpXSgpLF8weDMwMjZkNihuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgxZDEwZDBbXzB4NDdkYWM3KDB4MjUwKV09KCk9Pnt2YXIgXzB4MzE2ZDk4PV8weDQ3ZGFjNzt0aGlzWydfaW5Ccm93c2VyJ118fF8weDFkMTBkMFtfMHgzMTZkOTgoMHgyMGEpXSYmXzB4MWQxMGQwW18weDMxNmQ5OCgweDIwYSldWyd1bnJlZiddJiZfMHgxZDEwZDBbXzB4MzE2ZDk4KDB4MjBhKV1bXzB4MzE2ZDk4KDB4MjA1KV0oKSxfMHgxZDQ3YTgoXzB4MWQxMGQwKTt9LF8weDFkMTBkMFsnb25jbG9zZSddPSgpPT57dmFyIF8weDMxOTAxYj1fMHg0N2RhYzc7dGhpc1tfMHgzMTkwMWIoMHgxY2MpXT0hMHgwLHRoaXNbXzB4MzE5MDFiKDB4MjBiKV0oXzB4MWQxMGQwKSx0aGlzW18weDMxOTAxYigweDIyOCldKCk7fSxfMHgxZDEwZDBbXzB4NDdkYWM3KDB4MWMwKV09XzB4OTM0MzE5PT57dmFyIF8weDJmMjkxNz1fMHg0N2RhYzc7dHJ5e18weDkzNDMxOSYmXzB4OTM0MzE5W18weDJmMjkxNygweDFlYyldJiZ0aGlzW18weDJmMjkxNygweDIwNCldJiZKU09OW18weDJmMjkxNygweDI2MSldKF8weDkzNDMxOVsnZGF0YSddKVtfMHgyZjI5MTcoMHgyNzYpXT09PV8weDJmMjkxNygweDFkMSkmJnRoaXNbXzB4MmYyOTE3KDB4MWE0KV1bXzB4MmYyOTE3KDB4MjNlKV1bJ3JlbG9hZCddKCk7fWNhdGNoe319O30pW18weGRkMTEwNigweDIwMyldKF8weDQ3OTU3OD0+KHRoaXNbXzB4ZGQxMTA2KDB4MWQyKV09ITB4MCx0aGlzW18weGRkMTEwNigweDI0MSldPSEweDEsdGhpc1tfMHhkZDExMDYoMHgxY2MpXT0hMHgxLHRoaXNbXzB4ZGQxMTA2KDB4MjZhKV09ITB4MCx0aGlzW18weGRkMTEwNigweDFmNCldPTB4MCxfMHg0Nzk1NzgpKVtfMHhkZDExMDYoMHgxOWYpXShfMHg0ZWRkMzA9Pih0aGlzW18weGRkMTEwNigweDFkMildPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbXzB4ZGQxMTA2KDB4MWM4KV0oXzB4ZGQxMTA2KDB4MjRjKSt0aGlzW18weGRkMTEwNigweDE5ZSldKSxfMHgzMDI2ZDYobmV3IEVycm9yKF8weGRkMTEwNigweDFiNykrKF8weDRlZGQzMCYmXzB4NGVkZDMwW18weGRkMTEwNigweDFiZSldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NDkzMThkKXt2YXIgXzB4NDMyM2MwPV8weDFmN2ZlMTt0aGlzW18weDQzMjNjMCgweDFkMildPSEweDEsdGhpc1tfMHg0MzIzYzAoMHgyNDEpXT0hMHgxO3RyeXtfMHg0OTMxOGRbXzB4NDMyM2MwKDB4Mjc5KV09bnVsbCxfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjMxKV09bnVsbCxfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjUwKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MWQ0KV08MHgyJiZfMHg0OTMxOGRbXzB4NDMyM2MwKDB4MjAwKV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4YWZhZTU4PV8weDFmN2ZlMTtjbGVhclRpbWVvdXQodGhpc1tfMHhhZmFlNTgoMHgyNjQpXSksISh0aGlzW18weGFmYWU1OCgweDFmNCldPj10aGlzW18weGFmYWU1OCgweDFkYildKSYmKHRoaXNbXzB4YWZhZTU4KDB4MjY0KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxN2NlMWI9XzB4YWZhZTU4O3RoaXNbXzB4MTdjZTFiKDB4MWQyKV18fHRoaXNbXzB4MTdjZTFiKDB4MjQxKV18fCh0aGlzW18weDE3Y2UxYigweDE4ZildKCksdGhpc1snX3dzJ10/LltfMHgxN2NlMWIoMHgxOWYpXSgoKT0+dGhpc1tfMHgxN2NlMWIoMHgyMjgpXSgpKSk7fSwweDFmNCksdGhpc1tfMHhhZmFlNTgoMHgyNjQpXVtfMHhhZmFlNTgoMHgyMDUpXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHhhZmFlNTgoMHgyMDUpXSgpKTt9YXN5bmNbXzB4MWY3ZmUxKDB4MjAxKV0oXzB4MTY3NjZlKXt2YXIgXzB4MTUwYzRlPV8weDFmN2ZlMTt0cnl7aWYoIXRoaXNbXzB4MTUwYzRlKDB4MjZhKV0pcmV0dXJuO3RoaXNbXzB4MTUwYzRlKDB4MWNjKV0mJnRoaXNbXzB4MTUwYzRlKDB4MThmKV0oKSwoYXdhaXQgdGhpc1tfMHgxNTBjNGUoMHgxOTQpXSlbXzB4MTUwYzRlKDB4MjAxKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MTY3NjZlKSk7fWNhdGNoKF8weDU4ZDlhYSl7Y29uc29sZVtfMHgxNTBjNGUoMHgxYzgpXSh0aGlzW18weDE1MGM0ZSgweDIxMildKyc6XFxcXHgyMCcrKF8weDU4ZDlhYSYmXzB4NThkOWFhW18weDE1MGM0ZSgweDFiZSldKSksdGhpc1tfMHgxNTBjNGUoMHgyNmEpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fX07ZnVuY3Rpb24gYihfMHgxMjY2ZTYsXzB4NWU1ZWJlLF8weDM2NTliMCxfMHg0MmUwNGUsXzB4NTAzNzU0LF8weGY5NTUwMSl7dmFyIF8weDFjYmY3Nz1fMHgxZjdmZTE7bGV0IF8weDFjMjgxND1fMHgzNjU5YjBbJ3NwbGl0J10oJywnKVtfMHgxY2JmNzcoMHgxZGYpXShfMHgyOTAxNDg9Pnt2YXIgXzB4NDMzNmU1PV8weDFjYmY3Nzt0cnl7XzB4MTI2NmU2W18weDQzMzZlNSgweDI2ZSldfHwoKF8weDUwMzc1ND09PSduZXh0LmpzJ3x8XzB4NTAzNzU0PT09J3JlbWl4J3x8XzB4NTAzNzU0PT09XzB4NDMzNmU1KDB4MTljKXx8XzB4NTAzNzU0PT09J2FuZ3VsYXInKSYmKF8weDUwMzc1NCs9IV8weDEyNjZlNltfMHg0MzM2ZTUoMHgyMTQpXT8uWyd2ZXJzaW9ucyddPy5bXzB4NDMzNmU1KDB4MWZjKV0mJl8weDEyNjZlNltfMHg0MzM2ZTUoMHgyMTQpXT8uW18weDQzMzZlNSgweDFmNSldPy5bJ05FWFRfUlVOVElNRSddIT09XzB4NDMzNmU1KDB4MTk2KT9fMHg0MzM2ZTUoMHgxYjUpOl8weDQzMzZlNSgweDI0NykpLF8weDEyNjZlNlsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1MDM3NTR9KTtsZXQgXzB4ZDJlMzY2PW5ldyBYKF8weDEyNjZlNixfMHg1ZTVlYmUsXzB4MjkwMTQ4LF8weDQyZTA0ZSxfMHhmOTU1MDEpO3JldHVybiBfMHhkMmUzNjZbXzB4NDMzNmU1KDB4MjAxKV1bXzB4NDMzNmU1KDB4MjIyKV0oXzB4ZDJlMzY2KTt9Y2F0Y2goXzB4NDYzMDRmKXtyZXR1cm4gY29uc29sZVsnd2FybiddKF8weDQzMzZlNSgweDI1NCksXzB4NDYzMDRmJiZfMHg0NjMwNGZbXzB4NDMzNmU1KDB4MWJlKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDEzMGFmND0+XzB4MWMyODE0W18weDFjYmY3NygweDIzNyldKF8weDM1Mzg5MT0+XzB4MzUzODkxKF8weDEzMGFmNCkpO31mdW5jdGlvbiBXKF8weDIzZmE5Zil7dmFyIF8weDQwOWUwZD1fMHgxZjdmZTE7bGV0IF8weDRlODI4OT1mdW5jdGlvbihfMHgxZGVhZjgsXzB4MTc1YjBiKXtyZXR1cm4gXzB4MTc1YjBiLV8weDFkZWFmODt9LF8weDUyNjMwZjtpZihfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjJiKV0pXzB4NTI2MzBmPWZ1bmN0aW9uKCl7dmFyIF8weDM0M2JmPV8weDQwOWUwZDtyZXR1cm4gXzB4MjNmYTlmW18weDM0M2JmKDB4MjJiKV1bXzB4MzQzYmYoMHgyNTEpXSgpO307ZWxzZXtpZihfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjE0KV0mJl8weDIzZmE5ZltfMHg0MDllMGQoMHgyMTQpXVtfMHg0MDllMGQoMHgyNDgpXSYmXzB4MjNmYTlmW18weDQwOWUwZCgweDIxNCldPy5bXzB4NDA5ZTBkKDB4MWY1KV0/LltfMHg0MDllMGQoMHgxZTcpXSE9PV8weDQwOWUwZCgweDE5NikpXzB4NTI2MzBmPWZ1bmN0aW9uKCl7dmFyIF8weDNmMjFiND1fMHg0MDllMGQ7cmV0dXJuIF8weDIzZmE5ZltfMHgzZjIxYjQoMHgyMTQpXVtfMHgzZjIxYjQoMHgyNDgpXSgpO30sXzB4NGU4Mjg5PWZ1bmN0aW9uKF8weDViYTBmZixfMHgzZjc1ZmIpe3JldHVybiAweDNlOCooXzB4M2Y3NWZiWzB4MF0tXzB4NWJhMGZmWzB4MF0pKyhfMHgzZjc1ZmJbMHgxXS1fMHg1YmEwZmZbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4ODMwZjQxfT1yZXF1aXJlKF8weDQwOWUwZCgweDIwZikpO18weDUyNjMwZj1mdW5jdGlvbigpe3JldHVybiBfMHg4MzBmNDFbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NTI2MzBmPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NGU4Mjg5LCd0aW1lU3RhbXAnOl8weDUyNjMwZiwnbm93JzooKT0+RGF0ZVtfMHg0MDllMGQoMHgyNTEpXSgpfTt9ZnVuY3Rpb24gSihfMHg0MjIwYzEsXzB4MmFlZjc0LF8weDNjZjAyOSl7dmFyIF8weDU1MTI0Nj1fMHgxZjdmZTE7aWYoXzB4NDIyMGMxW18weDU1MTI0NigweDFmZildIT09dm9pZCAweDApcmV0dXJuIF8weDQyMjBjMVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDEyODNmND1fMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MjE0KV0/LltfMHg1NTEyNDYoMHgxODkpXT8uW18weDU1MTI0NigweDFmYyldfHxfMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MjE0KV0/LltfMHg1NTEyNDYoMHgxZjUpXT8uWydORVhUX1JVTlRJTUUnXT09PV8weDU1MTI0NigweDE5Nik7cmV0dXJuIF8weDEyODNmNCYmXzB4M2NmMDI5PT09J251eHQnP18weDQyMjBjMVtfMHg1NTEyNDYoMHgxZmYpXT0hMHgxOl8weDQyMjBjMVtfMHg1NTEyNDYoMHgxZmYpXT1fMHgxMjgzZjR8fCFfMHgyYWVmNzR8fF8weDQyMjBjMVsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHgyYWVmNzRbXzB4NTUxMjQ2KDB4MWJhKV0oXzB4NDIyMGMxWydsb2NhdGlvbiddW18weDU1MTI0NigweDFjNyldKSxfMHg0MjIwYzFbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO31mdW5jdGlvbiBZKF8weDRhMjMxYyxfMHgzOWU1OGIsXzB4MmUwYjgzLF8weDEyZGUwYil7dmFyIF8weDExZDJmZD1fMHgxZjdmZTE7XzB4NGEyMzFjPV8weDRhMjMxYyxfMHgzOWU1OGI9XzB4MzllNThiLF8weDJlMGI4Mz1fMHgyZTBiODMsXzB4MTJkZTBiPV8weDEyZGUwYjtsZXQgXzB4MzVjYjk5PVcoXzB4NGEyMzFjKSxfMHgyN2ZjMTU9XzB4MzVjYjk5W18weDExZDJmZCgweDFjYildLF8weDllNGM0ZD1fMHgzNWNiOTlbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDMzODcyZntjb25zdHJ1Y3Rvcigpe3ZhciBfMHgyNTc3NGY9XzB4MTFkMmZkO3RoaXNbXzB4MjU3NzRmKDB4MWZhKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzWydfbnVtYmVyUmVnRXhwJ109L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDI1Nzc0ZigweDFhZCldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbJ191bmRlZmluZWQnXT1fMHg0YTIzMWNbXzB4MjU3NzRmKDB4MjQwKV0sdGhpc1tfMHgyNTc3NGYoMHgyNWEpXT1fMHg0YTIzMWNbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHgyNTc3NGYoMHgyNzUpXT1PYmplY3RbXzB4MjU3NzRmKDB4MjYyKV0sdGhpc1snX1N5bWJvbCddPV8weDRhMjMxY1snU3ltYm9sJ10sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDI1Nzc0ZigweDFhMCldWyd0b1N0cmluZyddLHRoaXNbXzB4MjU3NzRmKDB4MWMxKV09RGF0ZVtfMHgyNTc3NGYoMHgxYTApXVtfMHgyNTc3NGYoMHgxZmUpXTt9W18weDExZDJmZCgweDIzYSldKF8weDM4MTFjZixfMHgzNTYwNjQsXzB4NGYyYzA0LF8weDFlZWYyMCl7dmFyIF8weDQ0OTcwYz1fMHgxMWQyZmQsXzB4MmM0MjhmPXRoaXMsXzB4NGU5Yjk0PV8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzQpXTtmdW5jdGlvbiBfMHg1NmE5YTcoXzB4NTZlY2M2LF8weDQ1MDA5ZCxfMHgzMGFhZWUpe3ZhciBfMHg0ZTAwNzU9XzB4NDQ5NzBjO18weDQ1MDA5ZFsndHlwZSddPV8weDRlMDA3NSgweDFiMiksXzB4NDUwMDlkW18weDRlMDA3NSgweDIzMCldPV8weDU2ZWNjNltfMHg0ZTAwNzUoMHgxYmUpXSxfMHgzMDMyYjY9XzB4MzBhYWVlW18weDRlMDA3NSgweDFmYyldW18weDRlMDA3NSgweDI1MyldLF8weDMwYWFlZVtfMHg0ZTAwNzUoMHgxZmMpXVtfMHg0ZTAwNzUoMHgyNTMpXT1fMHg0NTAwOWQsXzB4MmM0MjhmW18weDRlMDA3NSgweDIxOSldKF8weDQ1MDA5ZCxfMHgzMGFhZWUpO310cnl7XzB4NGYyYzA0W18weDQ0OTcwYygweDI3NyldKyssXzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldJiZfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjQ1KV1bXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MzU2MDY0KTt2YXIgXzB4NDgzOWJkLF8weDRiNGY2MSxfMHgxZWJmZTEsXzB4MjQ0ZDgwLF8weGJlNGQ5YT1bXSxfMHhkZmFjN2E9W10sXzB4MTcwNWFmLF8weDNlM2U3Zj10aGlzW18weDQ0OTcwYygweDE5ZCldKF8weDM1NjA2NCksXzB4MWMzNmZlPV8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFjOSksXzB4MTNiNTM2PSEweDEsXzB4NWIxNDhiPV8weDNlM2U3Zj09PSdmdW5jdGlvbicsXzB4NTc1Mzg0PXRoaXNbXzB4NDQ5NzBjKDB4MWE3KV0oXzB4M2UzZTdmKSxfMHgzNDI1MGM9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgzZTNlN2YpLF8weDNlODVlMD1fMHg1NzUzODR8fF8weDM0MjUwYyxfMHgyNWMzMzk9e30sXzB4MTZlMDM2PTB4MCxfMHgzY2M1ZmQ9ITB4MSxfMHgzMDMyYjYsXzB4OGRjMzBjPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjIwKV0pe2lmKF8weDFjMzZmZSl7aWYoXzB4NGI0ZjYxPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMGQpXSxfMHg0YjRmNjE+XzB4NGYyYzA0WydlbGVtZW50cyddKXtmb3IoXzB4MWViZmUxPTB4MCxfMHgyNDRkODA9XzB4NGYyYzA0W18weDQ0OTcwYygweDFlMildLF8weDQ4MzliZD1fMHgxZWJmZTE7XzB4NDgzOWJkPF8weDI0NGQ4MDtfMHg0ODM5YmQrKylfMHhkZmFjN2FbJ3B1c2gnXShfMHgyYzQyOGZbJ19hZGRQcm9wZXJ0eSddKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDQ4MzliZCxfMHg0ZjJjMDQpKTtfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWNmKV09ITB4MDt9ZWxzZXtmb3IoXzB4MWViZmUxPTB4MCxfMHgyNDRkODA9XzB4NGI0ZjYxLF8weDQ4MzliZD1fMHgxZWJmZTE7XzB4NDgzOWJkPF8weDI0NGQ4MDtfMHg0ODM5YmQrKylfMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MmM0MjhmW18weDQ0OTcwYygweDIzYyldKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDQ4MzliZCxfMHg0ZjJjMDQpKTt9XzB4NGYyYzA0W18weDQ0OTcwYygweDE5NSldKz1fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV07fWlmKCEoXzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWY3KXx8XzB4M2UzZTdmPT09J3VuZGVmaW5lZCcpJiYhXzB4NTc1Mzg0JiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgyNjYpJiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgxOTcpJiZfMHgzZTNlN2YhPT1fMHg0NDk3MGMoMHgyNGIpKXt2YXIgXzB4Yjk5ZjNjPV8weDFlZWYyMFtfMHg0NDk3MGMoMHgyNzMpXXx8XzB4NGYyYzA0W18weDQ0OTcwYygweDI3MyldO2lmKHRoaXNbXzB4NDQ5NzBjKDB4MjExKV0oXzB4MzU2MDY0KT8oXzB4NDgzOWJkPTB4MCxfMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjM3KV0oZnVuY3Rpb24oXzB4MTljMTZhKXt2YXIgXzB4YmFlNTVlPV8weDQ0OTcwYztpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fWlmKCFfMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MTk1KV0+XzB4NGYyYzA0W18weGJhZTU1ZSgweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fV8weGRmYWM3YVtfMHhiYWU1NWUoMHgxZjMpXShfMHgyYzQyOGZbXzB4YmFlNTVlKDB4MjNjKV0oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHhiYWU1NWUoMHgxYjQpLF8weDQ4MzliZCsrLF8weDRmMmMwNCxmdW5jdGlvbihfMHgyMzJhMTcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMzJhMTc7fTt9KF8weDE5YzE2YSkpKTt9KSk6dGhpc1tfMHg0NDk3MGMoMHgxY2EpXShfMHgzNTYwNjQpJiZfMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MjM3KV0oZnVuY3Rpb24oXzB4NDllNWE4LF8weDE0YmY5Mil7dmFyIF8weDIxYzI4OT1fMHg0NDk3MGM7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0W18weDIxYzI4OSgweDE5NSldKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO31pZighXzB4NGYyYzA0Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbXzB4MjFjMjg5KDB4MTk1KV0+XzB4NGYyYzA0WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4M2NjNWZkPSEweDA7cmV0dXJuO312YXIgXzB4NTc4NThiPV8weDE0YmY5MltfMHgyMWMyODkoMHgxZmUpXSgpO18weDU3ODU4YltfMHgyMWMyODkoMHgyMGQpXT4weDY0JiYoXzB4NTc4NThiPV8weDU3ODU4YltfMHgyMWMyODkoMHgxYTUpXSgweDAsMHg2NCkrXzB4MjFjMjg5KDB4MWQ5KSksXzB4ZGZhYzdhW18weDIxYzI4OSgweDFmMyldKF8weDJjNDI4ZltfMHgyMWMyODkoMHgyM2MpXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weDIxYzI4OSgweDFlNCksXzB4NTc4NThiLF8weDRmMmMwNCxmdW5jdGlvbihfMHgzMTFjMzgpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMTFjMzg7fTt9KF8weDQ5ZTVhOCkpKTt9KSwhXzB4MTNiNTM2KXt0cnl7Zm9yKF8weDE3MDVhZiBpbiBfMHgzNTYwNjQpaWYoIShfMHgxYzM2ZmUmJl8weDhkYzMwY1sndGVzdCddKF8weDE3MDVhZikpJiYhdGhpc1tfMHg0NDk3MGMoMHgyMGUpXShfMHgzNTYwNjQsXzB4MTcwNWFmLF8weDRmMmMwNCkpe2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgxOTUpXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO2JyZWFrO31pZighXzB4NGYyYzA0W18weDQ0OTcwYygweDIyNCldJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZDUpXSl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fV8weGRmYWM3YVtfMHg0NDk3MGMoMHgxZjMpXShfMHgyYzQyOGZbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weGJlNGQ5YSxfMHgyNWMzMzksXzB4MzU2MDY0LF8weDNlM2U3ZixfMHgxNzA1YWYsXzB4NGYyYzA0KSk7fX1jYXRjaHt9aWYoXzB4MjVjMzM5W18weDQ0OTcwYygweDIyZildPSEweDAsXzB4NWIxNDhiJiYoXzB4MjVjMzM5WydfcF9uYW1lJ109ITB4MCksIV8weDNjYzVmZCl7dmFyIF8weDllMzE9W11bXzB4NDQ5NzBjKDB4MjVjKV0odGhpc1tfMHg0NDk3MGMoMHgyNzUpXShfMHgzNTYwNjQpKVtfMHg0NDk3MGMoMHgyNWMpXSh0aGlzW18weDQ0OTcwYygweDIxZSldKF8weDM1NjA2NCkpO2ZvcihfMHg0ODM5YmQ9MHgwLF8weDRiNGY2MT1fMHg5ZTMxW18weDQ0OTcwYygweDIwZCldO18weDQ4MzliZDxfMHg0YjRmNjE7XzB4NDgzOWJkKyspaWYoXzB4MTcwNWFmPV8weDllMzFbXzB4NDgzOWJkXSwhKF8weDFjMzZmZSYmXzB4OGRjMzBjW18weDQ0OTcwYygweDIyYyldKF8weDE3MDVhZltfMHg0NDk3MGMoMHgxZmUpXSgpKSkmJiF0aGlzW18weDQ0OTcwYygweDIwZSldKF8weDM1NjA2NCxfMHgxNzA1YWYsXzB4NGYyYzA0KSYmIV8weDI1YzMzOVtfMHg0NDk3MGMoMHgxYTEpK18weDE3MDVhZltfMHg0NDk3MGMoMHgxZmUpXSgpXSl7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fWlmKCFfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4NGYyYzA0W18weDQ0OTcwYygweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9XzB4ZGZhYzdhW18weDQ0OTcwYygweDFmMyldKF8weDJjNDI4ZltfMHg0NDk3MGMoMHgyNTcpXShfMHhiZTRkOWEsXzB4MjVjMzM5LF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4MTcwNWFmLF8weDRmMmMwNCkpO319fX19aWYoXzB4MzgxMWNmWyd0eXBlJ109XzB4M2UzZTdmLF8weDNlODVlMD8oXzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMmQpXSgpLHRoaXNbXzB4NDQ5NzBjKDB4MWRjKV0oXzB4M2UzZTdmLF8weDM4MTFjZixfMHg0ZjJjMDQsXzB4MWVlZjIwKSk6XzB4M2UzZTdmPT09J2RhdGUnP18weDM4MTFjZlsndmFsdWUnXT10aGlzW18weDQ0OTcwYygweDFjMSldWydjYWxsJ10oXzB4MzU2MDY0KTpfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgyNGIpP18weDM4MTFjZltfMHg0NDk3MGMoMHgxZDMpXT1fMHgzNTYwNjRbXzB4NDQ5NzBjKDB4MWZlKV0oKTpfMHgzZTNlN2Y9PT0nUmVnRXhwJz9fMHgzODExY2ZbJ3ZhbHVlJ109dGhpc1tfMHg0NDk3MGMoMHgxZTkpXVtfMHg0NDk3MGMoMHgyMWQpXShfMHgzNTYwNjQpOl8weDNlM2U3Zj09PV8weDQ0OTcwYygweDFlZikmJnRoaXNbXzB4NDQ5NzBjKDB4MWJiKV0/XzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPXRoaXNbJ19TeW1ib2wnXVtfMHg0NDk3MGMoMHgxYTApXVtfMHg0NDk3MGMoMHgxZmUpXVtfMHg0NDk3MGMoMHgyMWQpXShfMHgzNTYwNjQpOiFfMHg0ZjJjMDRbJ2RlcHRoJ10mJiEoXzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWY3KXx8XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MjQwKSkmJihkZWxldGUgXzB4MzgxMWNmWyd2YWx1ZSddLF8weDM4MTFjZlsnY2FwcGVkJ109ITB4MCksXzB4M2NjNWZkJiYoXzB4MzgxMWNmW18weDQ0OTcwYygweDIzNCldPSEweDApLF8weDMwMzJiNj1fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWZjKV1bXzB4NDQ5NzBjKDB4MjUzKV0sXzB4NGYyYzA0W18weDQ0OTcwYygweDFmYyldW18weDQ0OTcwYygweDI1MyldPV8weDM4MTFjZix0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MzgxMWNmLF8weDRmMmMwNCksXzB4ZGZhYzdhW18weDQ0OTcwYygweDIwZCldKXtmb3IoXzB4NDgzOWJkPTB4MCxfMHg0YjRmNjE9XzB4ZGZhYzdhW18weDQ0OTcwYygweDIwZCldO18weDQ4MzliZDxfMHg0YjRmNjE7XzB4NDgzOWJkKyspXzB4ZGZhYzdhW18weDQ4MzliZF0oXzB4NDgzOWJkKTt9XzB4YmU0ZDlhWydsZW5ndGgnXSYmKF8weDM4MTFjZltfMHg0NDk3MGMoMHgyNzMpXT1fMHhiZTRkOWEpO31jYXRjaChfMHgzNzBkNDQpe18weDU2YTlhNyhfMHgzNzBkNDQsXzB4MzgxMWNmLF8weDRmMmMwNCk7fXJldHVybiB0aGlzW18weDQ0OTcwYygweDI2OSldKF8weDM1NjA2NCxfMHgzODExY2YpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDM4MTFjZixfMHg0ZjJjMDQpLF8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZmMpXVtfMHg0NDk3MGMoMHgyNTMpXT1fMHgzMDMyYjYsXzB4NGYyYzA0WydsZXZlbCddLS0sXzB4NGYyYzA0WydhdXRvRXhwYW5kJ109XzB4NGU5Yjk0LF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNzQpXSYmXzB4NGYyYzA0W18weDQ0OTcwYygweDI0NSldW18weDQ0OTcwYygweDFlMCldKCksXzB4MzgxMWNmO31bXzB4MTFkMmZkKDB4MjFlKV0oXzB4NDhiN2Q2KXt2YXIgXzB4M2RlMzA3PV8weDExZDJmZDtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4M2RlMzA3KDB4MjFhKV0oXzB4NDhiN2Q2KTpbXTt9W18weDExZDJmZCgweDIxMSldKF8weDM3NjNlNCl7dmFyIF8weDU1YjhhMT1fMHgxMWQyZmQ7cmV0dXJuISEoXzB4Mzc2M2U0JiZfMHg0YTIzMWNbXzB4NTViOGExKDB4MWI0KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDM3NjNlNCk9PT0nW29iamVjdFxcXFx4MjBTZXRdJyYmXzB4Mzc2M2U0W18weDU1YjhhMSgweDIzNyldKTt9W18weDExZDJmZCgweDIwZSldKF8weDQ3NjllNCxfMHg0OGNmNzksXzB4NWE0MmU4KXt2YXIgXzB4MjhjMDE0PV8weDExZDJmZDtyZXR1cm4gXzB4NWE0MmU4W18weDI4YzAxNCgweDIyNyldP3R5cGVvZiBfMHg0NzY5ZTRbXzB4NDhjZjc5XT09XzB4MjhjMDE0KDB4MWJkKTohMHgxO31bJ190eXBlJ10oXzB4NDlkZmRkKXt2YXIgXzB4NTUxNzNhPV8weDExZDJmZCxfMHg5MTIyOTI9Jyc7cmV0dXJuIF8weDkxMjI5Mj10eXBlb2YgXzB4NDlkZmRkLF8weDkxMjI5Mj09PV8weDU1MTczYSgweDE5OCk/dGhpc1tfMHg1NTE3M2EoMHgxYWEpXShfMHg0OWRmZGQpPT09XzB4NTUxNzNhKDB4MWU2KT9fMHg5MTIyOTI9XzB4NTUxNzNhKDB4MWM5KTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0OWRmZGQpPT09J1tvYmplY3RcXFxceDIwRGF0ZV0nP18weDkxMjI5Mj0nZGF0ZSc6dGhpc1tfMHg1NTE3M2EoMHgxYWEpXShfMHg0OWRmZGQpPT09XzB4NTUxNzNhKDB4MjQyKT9fMHg5MTIyOTI9XzB4NTUxNzNhKDB4MjRiKTpfMHg0OWRmZGQ9PT1udWxsP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgxZjcpOl8weDQ5ZGZkZFtfMHg1NTE3M2EoMHgyNzApXSYmKF8weDkxMjI5Mj1fMHg0OWRmZGRbJ2NvbnN0cnVjdG9yJ11bXzB4NTUxNzNhKDB4MjA2KV18fF8weDkxMjI5Mik6XzB4OTEyMjkyPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4NTUxNzNhKDB4MjVhKV0mJl8weDQ5ZGZkZCBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4OTEyMjkyPV8weDU1MTczYSgweDIxNykpLF8weDkxMjI5Mjt9W18weDExZDJmZCgweDFhYSldKF8weDQzZDQxNCl7dmFyIF8weDU3ZGU0MD1fMHgxMWQyZmQ7cmV0dXJuIE9iamVjdFtfMHg1N2RlNDAoMHgxYTApXVtfMHg1N2RlNDAoMHgxZmUpXVtfMHg1N2RlNDAoMHgyMWQpXShfMHg0M2Q0MTQpO31bXzB4MTFkMmZkKDB4MWE3KV0oXzB4Y2RhZWI3KXt2YXIgXzB4MTkyMzM0PV8weDExZDJmZDtyZXR1cm4gXzB4Y2RhZWI3PT09J2Jvb2xlYW4nfHxfMHhjZGFlYjc9PT1fMHgxOTIzMzQoMHgxZGEpfHxfMHhjZGFlYjc9PT0nbnVtYmVyJzt9W18weDExZDJmZCgweDE4YyldKF8weDVjYTI3Zil7dmFyIF8weDM0NjA3OD1fMHgxMWQyZmQ7cmV0dXJuIF8weDVjYTI3Zj09PSdCb29sZWFuJ3x8XzB4NWNhMjdmPT09XzB4MzQ2MDc4KDB4MjY2KXx8XzB4NWNhMjdmPT09XzB4MzQ2MDc4KDB4MjJhKTt9W18weDExZDJmZCgweDIzYyldKF8weDFiODcwNixfMHg0ODE5ZTEsXzB4NGVlM2ZiLF8weDVhN2E3MCxfMHgxMDdiMDUsXzB4NGVhNmUxKXt2YXIgXzB4NWQ3ZTIyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDJiNTgwYil7dmFyIF8weDQ3MjkwZj1fMHgzN2U0LF8weGZjYzE3YT1fMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MjUzKV0sXzB4MTk0ZDMwPV8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgxOTEpXSxfMHgxZmVkZmQ9XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldWydwYXJlbnQnXTtfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MjM4KV09XzB4ZmNjMTdhLF8weDEwN2IwNVsnbm9kZSddW18weDQ3MjkwZigweDE5MSldPXR5cGVvZiBfMHg1YTdhNzA9PSdudW1iZXInP18weDVhN2E3MDpfMHgyYjU4MGIsXzB4MWI4NzA2W18weDQ3MjkwZigweDFmMyldKF8weDVkN2UyMltfMHg0NzI5MGYoMHgyNjcpXShfMHg0ODE5ZTEsXzB4NGVlM2ZiLF8weDVhN2E3MCxfMHgxMDdiMDUsXzB4NGVhNmUxKSksXzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldWydwYXJlbnQnXT1fMHgxZmVkZmQsXzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDE5MSldPV8weDE5NGQzMDt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDE2NTg4YixfMHgxMWNlYTcsXzB4MTNiNmVmLF8weDM4MDMxMCxfMHgxYzAxZDQsXzB4NGQ0YjZiLF8weDdmZWNhNil7dmFyIF8weDI0M2U1MD1fMHgxMWQyZmQsXzB4NDRhYmJhPXRoaXM7cmV0dXJuIF8weDExY2VhN1tfMHgyNDNlNTAoMHgxYTEpK18weDFjMDFkNFtfMHgyNDNlNTAoMHgxZmUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDFmNGQ1MSl7dmFyIF8weDRiZGMxZj1fMHgyNDNlNTAsXzB4NDRkMjgzPV8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgyNTMpXSxfMHg0ZmI4Mjg9XzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDE5MSldLF8weDMxNjlkNz1fMHg0ZDRiNmJbJ25vZGUnXVtfMHg0YmRjMWYoMHgyMzgpXTtfMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bJ3BhcmVudCddPV8weDQ0ZDI4MyxfMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MTkxKV09XzB4MWY0ZDUxLF8weDE2NTg4YlsncHVzaCddKF8weDQ0YWJiYVtfMHg0YmRjMWYoMHgyNjcpXShfMHgxM2I2ZWYsXzB4MzgwMzEwLF8weDFjMDFkNCxfMHg0ZDRiNmIsXzB4N2ZlY2E2KSksXzB4NGQ0YjZiWydub2RlJ11bXzB4NGJkYzFmKDB4MjM4KV09XzB4MzE2OWQ3LF8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgxOTEpXT1fMHg0ZmI4Mjg7fTt9W18weDExZDJmZCgweDI2NyldKF8weDJlZTJmOSxfMHg1MDRjNjMsXzB4MmJlODM5LF8weDVkNGJmZSxfMHg0NjY3NzIpe3ZhciBfMHgyODBmNmU9XzB4MTFkMmZkLF8weGM2YWZlMD10aGlzO18weDQ2Njc3Mnx8KF8weDQ2Njc3Mj1mdW5jdGlvbihfMHhlN2ZkZixfMHg0NDE5NGYpe3JldHVybiBfMHhlN2ZkZltfMHg0NDE5NGZdO30pO3ZhciBfMHgyOTgxMDM9XzB4MmJlODM5W18weDI4MGY2ZSgweDFmZSldKCksXzB4MjhmNTk0PV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMTApXXx8e30sXzB4NWM3OWE4PV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXSxfMHgyMGJlYmM9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyNCldO3RyeXt2YXIgXzB4MjdmMTUzPXRoaXNbXzB4MjgwZjZlKDB4MWNhKV0oXzB4MmVlMmY5KSxfMHgxNDE3OGE9XzB4Mjk4MTAzO18weDI3ZjE1MyYmXzB4MTQxNzhhWzB4MF09PT0nXFxcXHgyNycmJihfMHgxNDE3OGE9XzB4MTQxNzhhWydzdWJzdHInXSgweDEsXzB4MTQxNzhhW18weDI4MGY2ZSgweDIwZCldLTB4MikpO3ZhciBfMHgxMjYzNzE9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldPV8weDI4ZjU5NFsnX3BfJytfMHgxNDE3OGFdO18weDEyNjM3MSYmKF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXT1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV0rMHgxKSxfMHg1ZDRiZmVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDEyNjM3MTt2YXIgXzB4MjM5NTc5PXR5cGVvZiBfMHgyYmU4Mzk9PV8weDI4MGY2ZSgweDFlZiksXzB4MjA3NWI1PXsnbmFtZSc6XzB4MjM5NTc5fHxfMHgyN2YxNTM/XzB4Mjk4MTAzOnRoaXNbXzB4MjgwZjZlKDB4MjcxKV0oXzB4Mjk4MTAzKX07aWYoXzB4MjM5NTc5JiYoXzB4MjA3NWI1W18weDI4MGY2ZSgweDFlZildPSEweDApLCEoXzB4NTA0YzYzPT09J2FycmF5J3x8XzB4NTA0YzYzPT09XzB4MjgwZjZlKDB4MWE2KSkpe3ZhciBfMHgzZDJkOGU9dGhpc1tfMHgyODBmNmUoMHgyNWQpXShfMHgyZWUyZjksXzB4MmJlODM5KTtpZihfMHgzZDJkOGUmJihfMHgzZDJkOGVbXzB4MjgwZjZlKDB4MTk5KV0mJihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MjVlKV09ITB4MCksXzB4M2QyZDhlW18weDI4MGY2ZSgweDIzOSldJiYhXzB4MTI2MzcxJiYhXzB4NWQ0YmZlWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4MjA3NWI1W18weDI4MGY2ZSgweDFjNildPSEweDAsdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlKSxfMHgyMDc1YjU7fXZhciBfMHgyMTZmMzU7dHJ5e18weDIxNmYzNT1fMHg0NjY3NzIoXzB4MmVlMmY5LF8weDJiZTgzOSk7fWNhdGNoKF8weDUwZjU1OCl7cmV0dXJuIF8weDIwNzViNT17J25hbWUnOl8weDI5ODEwMywndHlwZSc6XzB4MjgwZjZlKDB4MWIyKSwnZXJyb3InOl8weDUwZjU1OFtfMHgyODBmNmUoMHgxYmUpXX0sdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlKSxfMHgyMDc1YjU7fXZhciBfMHg0ZGMyNDk9dGhpc1tfMHgyODBmNmUoMHgxOWQpXShfMHgyMTZmMzUpLF8weDVlODYzYT10aGlzW18weDI4MGY2ZSgweDFhNyldKF8weDRkYzI0OSk7aWYoXzB4MjA3NWI1W18weDI4MGY2ZSgweDFmOSldPV8weDRkYzI0OSxfMHg1ZTg2M2EpdGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlLF8weDIxNmYzNSxmdW5jdGlvbigpe3ZhciBfMHg1Y2E0MGY9XzB4MjgwZjZlO18weDIwNzViNVtfMHg1Y2E0MGYoMHgxZDMpXT1fMHgyMTZmMzVbXzB4NWNhNDBmKDB4MjJkKV0oKSwhXzB4MTI2MzcxJiZfMHhjNmFmZTBbXzB4NWNhNDBmKDB4MWRjKV0oXzB4NGRjMjQ5LF8weDIwNzViNSxfMHg1ZDRiZmUse30pO30pO2Vsc2V7dmFyIF8weDFlNTRkYj1fMHg1ZDRiZmVbJ2F1dG9FeHBhbmQnXSYmXzB4NWQ0YmZlW18weDI4MGY2ZSgweDI3NyldPF8weDVkNGJmZVtfMHgyODBmNmUoMHgyNjgpXSYmXzB4NWQ0YmZlW18weDI4MGY2ZSgweDI0NSldW18weDI4MGY2ZSgweDIzNildKF8weDIxNmYzNSk8MHgwJiZfMHg0ZGMyNDkhPT1fMHgyODBmNmUoMHgxYmQpJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MTk1KV08XzB4NWQ0YmZlW18weDI4MGY2ZSgweDFkNSldO18weDFlNTRkYnx8XzB4NWQ0YmZlWydsZXZlbCddPF8weDVjNzlhOHx8XzB4MTI2MzcxPyh0aGlzW18weDI4MGY2ZSgweDIzYSldKF8weDIwNzViNSxfMHgyMTZmMzUsXzB4NWQ0YmZlLF8weDEyNjM3MXx8e30pLHRoaXNbXzB4MjgwZjZlKDB4MjY5KV0oXzB4MjE2ZjM1LF8weDIwNzViNSkpOnRoaXNbXzB4MjgwZjZlKDB4MWQwKV0oXzB4MjA3NWI1LF8weDVkNGJmZSxfMHgyMTZmMzUsZnVuY3Rpb24oKXt2YXIgXzB4NTE5NTA0PV8weDI4MGY2ZTtfMHg0ZGMyNDk9PT1fMHg1MTk1MDQoMHgxZjcpfHxfMHg0ZGMyNDk9PT1fMHg1MTk1MDQoMHgyNDApfHwoZGVsZXRlIF8weDIwNzViNVtfMHg1MTk1MDQoMHgxZDMpXSxfMHgyMDc1YjVbXzB4NTE5NTA0KDB4MjNmKV09ITB4MCk7fSk7fXJldHVybiBfMHgyMDc1YjU7fWZpbmFsbHl7XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldPV8weDI4ZjU5NCxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjIwKV09XzB4NWM3OWE4LF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjQpXT1fMHgyMGJlYmM7fX1bJ19jYXBJZlN0cmluZyddKF8weDNmYzZjZSxfMHg0NzhiNjEsXzB4MTEzNTFlLF8weDNlYjEwOSl7dmFyIF8weDQ1YmI3Yz1fMHgxMWQyZmQsXzB4MTk2MjIzPV8weDNlYjEwOVsnc3RyTGVuZ3RoJ118fF8weDExMzUxZVsnc3RyTGVuZ3RoJ107aWYoKF8weDNmYzZjZT09PSdzdHJpbmcnfHxfMHgzZmM2Y2U9PT1fMHg0NWJiN2MoMHgyNjYpKSYmXzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldKXtsZXQgXzB4NTgzMmRkPV8weDQ3OGI2MVtfMHg0NWJiN2MoMHgxZDMpXVtfMHg0NWJiN2MoMHgyMGQpXTtfMHgxMTM1MWVbXzB4NDViYjdjKDB4MWRkKV0rPV8weDU4MzJkZCxfMHgxMTM1MWVbJ2FsbFN0ckxlbmd0aCddPl8weDExMzUxZVtfMHg0NWJiN2MoMHgxZWIpXT8oXzB4NDc4YjYxW18weDQ1YmI3YygweDIzZildPScnLGRlbGV0ZSBfMHg0NzhiNjFbJ3ZhbHVlJ10pOl8weDU4MzJkZD5fMHgxOTYyMjMmJihfMHg0NzhiNjFbXzB4NDViYjdjKDB4MjNmKV09XzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldWydzdWJzdHInXSgweDAsXzB4MTk2MjIzKSxkZWxldGUgXzB4NDc4YjYxWyd2YWx1ZSddKTt9fVtfMHgxMWQyZmQoMHgxY2EpXShfMHgzNmVhNTgpe3ZhciBfMHg0ZTE4NTM9XzB4MTFkMmZkO3JldHVybiEhKF8weDM2ZWE1OCYmXzB4NGEyMzFjW18weDRlMTg1MygweDFlNCldJiZ0aGlzW18weDRlMTg1MygweDFhYSldKF8weDM2ZWE1OCk9PT1fMHg0ZTE4NTMoMHgyMzMpJiZfMHgzNmVhNThbXzB4NGUxODUzKDB4MjM3KV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg4ODlkMDgpe3ZhciBfMHgyYTllMGY9XzB4MTFkMmZkO2lmKF8weDg4OWQwOFtfMHgyYTllMGYoMHgyNGEpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4ODg5ZDA4O3ZhciBfMHg1YmU5ZjM7dHJ5e18weDViZTlmMz1KU09OWydzdHJpbmdpZnknXSgnJytfMHg4ODlkMDgpO31jYXRjaHtfMHg1YmU5ZjM9J1xcXFx4MjInK3RoaXNbXzB4MmE5ZTBmKDB4MWFhKV0oXzB4ODg5ZDA4KSsnXFxcXHgyMic7fXJldHVybiBfMHg1YmU5ZjNbJ21hdGNoJ10oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg1YmU5ZjM9XzB4NWJlOWYzWydzdWJzdHInXSgweDEsXzB4NWJlOWYzW18weDJhOWUwZigweDIwZCldLTB4Mik6XzB4NWJlOWYzPV8weDViZTlmM1tfMHgyYTllMGYoMHgyNjApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NWJlOWYzO31bXzB4MTFkMmZkKDB4MWQwKV0oXzB4MjIzYzM4LF8weGVlMzc4ZSxfMHhjZWQ5ODYsXzB4NDgwM2MyKXt2YXIgXzB4ODQ4MGFlPV8weDExZDJmZDt0aGlzW18weDg0ODBhZSgweDIxOSldKF8weDIyM2MzOCxfMHhlZTM3OGUpLF8weDQ4MDNjMiYmXzB4NDgwM2MyKCksdGhpc1tfMHg4NDgwYWUoMHgyNjkpXShfMHhjZWQ5ODYsXzB4MjIzYzM4KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyMjNjMzgsXzB4ZWUzNzhlKTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MTNjMDExLF8weDMxZmM3Yyl7dmFyIF8weDM5NGU4MT1fMHgxMWQyZmQ7dGhpc1tfMHgzOTRlODEoMHgxZWEpXShfMHgxM2MwMTEsXzB4MzFmYzdjKSx0aGlzW18weDM5NGU4MSgweDIyMyldKF8weDEzYzAxMSxfMHgzMWZjN2MpLHRoaXNbXzB4Mzk0ZTgxKDB4MTkyKV0oXzB4MTNjMDExLF8weDMxZmM3YyksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDEzYzAxMSxfMHgzMWZjN2MpO31bXzB4MTFkMmZkKDB4MWVhKV0oXzB4MTE1YzVjLF8weDFjODM1NSl7fVtfMHgxMWQyZmQoMHgyMjMpXShfMHg1NGJiY2UsXzB4MTc5Y2Y0KXt9W18weDExZDJmZCgweDFiMCldKF8weDQ3OTU5MCxfMHgyNThkZGUpe31bXzB4MTFkMmZkKDB4MWE4KV0oXzB4MzBkNTcxKXt2YXIgXzB4M2MzNmJmPV8weDExZDJmZDtyZXR1cm4gXzB4MzBkNTcxPT09dGhpc1tfMHgzYzM2YmYoMHgyNGYpXTt9W18weDExZDJmZCgweDFkOCldKF8weDFlNDk4ZSxfMHg0MjUxNzgpe3ZhciBfMHg1NTM4OWI9XzB4MTFkMmZkO3RoaXNbXzB4NTUzODliKDB4MWIwKV0oXzB4MWU0OThlLF8weDQyNTE3OCksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgxZTQ5OGUpLF8weDQyNTE3OFtfMHg1NTM4OWIoMHgyNDkpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDFlNDk4ZSksdGhpc1tfMHg1NTM4OWIoMHgyMTgpXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzW18weDU1Mzg5YigweDE5YildKF8weDFlNDk4ZSk7fVsnX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDQ0NmMzMyxfMHg1MTAwZTEpe3ZhciBfMHhhNjEyZDQ9XzB4MTFkMmZkO2xldCBfMHg0YzE3MWM7dHJ5e18weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXSYmKF8weDRjMTcxYz1fMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV0sXzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildW18weGE2MTJkNCgweDIzMCldPWZ1bmN0aW9uKCl7fSksXzB4NDQ2YzMzJiZ0eXBlb2YgXzB4NDQ2YzMzW18weGE2MTJkNCgweDIwZCldPT1fMHhhNjEyZDQoMHgxZTMpJiYoXzB4NTEwMGUxWydsZW5ndGgnXT1fMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjBkKV0pO31jYXRjaHt9ZmluYWxseXtfMHg0YzE3MWMmJihfMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV09XzB4NGMxNzFjKTt9aWYoXzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09XzB4YTYxMmQ0KDB4MWUzKXx8XzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXSkpXzB4NTEwMGUxW18weGE2MTJkNCgweDFiZildPSEweDAsZGVsZXRlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXTtlbHNlIHN3aXRjaChfMHg1MTAwZTFbJ3ZhbHVlJ10pe2Nhc2UgTnVtYmVyW18weGE2MTJkNCgweDI1MildOl8weDUxMDBlMVtfMHhhNjEyZDQoMHgyMmUpXT0hMHgwLGRlbGV0ZSBfMHg1MTAwZTFbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbXzB4YTYxMmQ0KDB4MWNlKV06XzB4NTEwMGUxW18weGE2MTJkNCgweDFiYyldPSEweDAsZGVsZXRlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGE2MTJkNCgweDIwMildKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZDMpXSkmJihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWVlKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZjkpXT09PV8weGE2MTJkNCgweDFiZCkmJnR5cGVvZiBfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV09PSdzdHJpbmcnJiZfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV0mJl8weDUxMDBlMVsnbmFtZSddJiZfMHg0NDZjMzNbJ25hbWUnXSE9PV8weDUxMDBlMVtfMHhhNjEyZDQoMHgyMDYpXSYmKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxYjMpXT1fMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjA2KV0pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDU5YzliYSl7cmV0dXJuIDB4MS9fMHg1OWM5YmE9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVsnX3NvcnRQcm9wcyddKF8weDE5NGIyMil7dmFyIF8weDQ4OTc2Mj1fMHgxMWQyZmQ7IV8weDE5NGIyMlsncHJvcHMnXXx8IV8weDE5NGIyMltfMHg0ODk3NjIoMHgyNzMpXVtfMHg0ODk3NjIoMHgyMGQpXXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWM5KXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWU0KXx8XzB4MTk0YjIyW18weDQ4OTc2MigweDFmOSldPT09XzB4NDg5NzYyKDB4MWI0KXx8XzB4MTk0YjIyWydwcm9wcyddW18weDQ4OTc2MigweDI0ZCldKGZ1bmN0aW9uKF8weDU3NTBmMSxfMHgyZWI3Mzgpe3ZhciBfMHg3NmY4YWM9XzB4NDg5NzYyLF8weDViMmJiOD1fMHg1NzUwZjFbXzB4NzZmOGFjKDB4MjA2KV1bXzB4NzZmOGFjKDB4MjRlKV0oKSxfMHg0YTRmOGY9XzB4MmViNzM4W18weDc2ZjhhYygweDIwNildWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDViMmJiODxfMHg0YTRmOGY/LTB4MTpfMHg1YjJiYjg+XzB4NGE0ZjhmPzB4MToweDA7fSk7fVtfMHgxMWQyZmQoMHgyMTgpXShfMHgxYzU2OTIsXzB4NTk0MWQyKXt2YXIgXzB4NmRkYzYzPV8weDExZDJmZDtpZighKF8weDU5NDFkMltfMHg2ZGRjNjMoMHgyMjcpXXx8IV8weDFjNTY5MltfMHg2ZGRjNjMoMHgyNzMpXXx8IV8weDFjNTY5MlsncHJvcHMnXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDM5NzgxOD1bXSxfMHgxYmIwZDY9W10sXzB4Y2Y2M2Y5PTB4MCxfMHg1MjJhZWQ9XzB4MWM1NjkyW18weDZkZGM2MygweDI3MyldW18weDZkZGM2MygweDIwZCldO18weGNmNjNmOTxfMHg1MjJhZWQ7XzB4Y2Y2M2Y5Kyspe3ZhciBfMHg1YjY2ZWE9XzB4MWM1NjkyWydwcm9wcyddW18weGNmNjNmOV07XzB4NWI2NmVhW18weDZkZGM2MygweDFmOSldPT09XzB4NmRkYzYzKDB4MWJkKT9fMHgzOTc4MThbXzB4NmRkYzYzKDB4MWYzKV0oXzB4NWI2NmVhKTpfMHgxYmIwZDZbXzB4NmRkYzYzKDB4MWYzKV0oXzB4NWI2NmVhKTt9aWYoISghXzB4MWJiMGQ2WydsZW5ndGgnXXx8XzB4Mzk3ODE4W18weDZkZGM2MygweDIwZCldPD0weDEpKXtfMHgxYzU2OTJbXzB4NmRkYzYzKDB4MjczKV09XzB4MWJiMGQ2O3ZhciBfMHg0ZDhlZmQ9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4Mzk3ODE4fTt0aGlzW18weDZkZGM2MygweDFlYSldKF8weDRkOGVmZCxfMHg1OTQxZDIpLHRoaXNbXzB4NmRkYzYzKDB4MWIwKV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksdGhpc1tfMHg2ZGRjNjMoMHgyNDMpXShfMHg0ZDhlZmQpLHRoaXNbXzB4NmRkYzYzKDB4MWY4KV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksXzB4NGQ4ZWZkWydpZCddKz0nXFxcXHgyMGYnLF8weDFjNTY5MlsncHJvcHMnXVtfMHg2ZGRjNjMoMHgyMDcpXShfMHg0ZDhlZmQpO319fVtfMHgxMWQyZmQoMHgxZTEpXShfMHgxYzdhZDAsXzB4Mjk3YjZkKXt9W18weDExZDJmZCgweDI0MyldKF8weDJmNTA4Nyl7fVtfMHgxMWQyZmQoMHgyNTUpXShfMHg0MDE2OTgpe3ZhciBfMHgzZmRiOTE9XzB4MTFkMmZkO3JldHVybiBBcnJheVtfMHgzZmRiOTEoMHgxYWMpXShfMHg0MDE2OTgpfHx0eXBlb2YgXzB4NDAxNjk4PT1fMHgzZmRiOTEoMHgxOTgpJiZ0aGlzW18weDNmZGI5MSgweDFhYSldKF8weDQwMTY5OCk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4MTFkMmZkKDB4MWY4KV0oXzB4MTUyMTYyLF8weDFlZDU3NCl7fVtfMHgxMWQyZmQoMHgxOWIpXShfMHgxNjEyNTMpe3ZhciBfMHg2NzlhMGM9XzB4MTFkMmZkO2RlbGV0ZSBfMHgxNjEyNTNbXzB4Njc5YTBjKDB4MjFmKV0sZGVsZXRlIF8weDE2MTI1M1snX2hhc1NldE9uSXRzUGF0aCddLGRlbGV0ZSBfMHgxNjEyNTNbXzB4Njc5YTBjKDB4MWZkKV07fVtfMHgxMWQyZmQoMHgxOTIpXShfMHg0M2E5MWMsXzB4NGIxY2VmKXt9fWxldCBfMHgxNjk4ZGE9bmV3IF8weDMzODcyZigpLF8weDQzMzZkOD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg1MDczNjg9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyM2MyYmUoXzB4MTlmY2QyLF8weDQ1MzQ1MSxfMHgxODFiNmQsXzB4MmEwOGIzLF8weDRiNDM0ZSxfMHg1NDE4NWQpe3ZhciBfMHg5MjEwZDU9XzB4MTFkMmZkO2xldCBfMHg1YjQ0ZjAsXzB4MzY3MTViO3RyeXtfMHgzNjcxNWI9XzB4OWU0YzRkKCksXzB4NWI0NGYwPV8weDJlMGI4M1tfMHg0NTM0NTFdLCFfMHg1YjQ0ZjB8fF8weDM2NzE1Yi1fMHg1YjQ0ZjBbJ3RzJ10+MHgxZjQmJl8weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXSYmXzB4NWI0NGYwWyd0aW1lJ10vXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildPDB4NjQ/KF8weDJlMGI4M1tfMHg0NTM0NTFdPV8weDViNDRmMD17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDM2NzE1Yn0sXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldPXt9KTpfMHgzNjcxNWItXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldWyd0cyddPjB4MzImJl8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgyMjYpXSYmXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFhZSldL18weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVsnY291bnQnXTwweDY0JiYoXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldPXt9KTtsZXQgXzB4NzI5M2EwPVtdLF8weDM2Mjk2Yj1fMHg1YjQ0ZjBbJ3JlZHVjZUxpbWl0cyddfHxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWI2KV0/XzB4NTA3MzY4Ol8weDQzMzZkOCxfMHgyNDdiZWI9XzB4MjE3YTQ3PT57dmFyIF8weDRhODlhMj1fMHg5MjEwZDU7bGV0IF8weDU0MTQ1ND17fTtyZXR1cm4gXzB4NTQxNDU0W18weDRhODlhMigweDI3MyldPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgyNzMpXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWUyKV09XzB4MjE3YTQ3W18weDRhODlhMigweDFlMildLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyMWIpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MjFiKV0sXzB4NTQxNDU0W18weDRhODlhMigweDFlYildPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgxZWIpXSxfMHg1NDE0NTRbJ2F1dG9FeHBhbmRMaW1pdCddPV8weDIxN2E0N1snYXV0b0V4cGFuZExpbWl0J10sXzB4NTQxNDU0W18weDRhODlhMigweDI2OCldPV8weDIxN2E0N1snYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4NTQxNDU0W18weDRhODlhMigweDI0OSldPSEweDEsXzB4NTQxNDU0W18weDRhODlhMigweDIyNyldPSFfMHgzOWU1OGIsXzB4NTQxNDU0WydkZXB0aCddPTB4MSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4Mjc3KV09MHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxOGEpXT0ncm9vdF9leHBfaWQnLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxYzMpXT1fMHg0YTg5YTIoMHgxYzIpLF8weDU0MTQ1NFsnYXV0b0V4cGFuZCddPSEweDAsXzB4NTQxNDU0W18weDRhODlhMigweDI0NSldPVtdLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxOTUpXT0weDAsXzB4NTQxNDU0W18weDRhODlhMigweDI2ZildPSEweDAsXzB4NTQxNDU0W18weDRhODlhMigweDFkZCldPTB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWZjKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTQxNDU0O307Zm9yKHZhciBfMHg0MGM4NDk9MHgwO18weDQwYzg0OTxfMHg0YjQzNGVbXzB4OTIxMGQ1KDB4MjBkKV07XzB4NDBjODQ5KyspXzB4NzI5M2EwWydwdXNoJ10oXzB4MTY5OGRhW18weDkyMTBkNSgweDIzYSldKHsndGltZU5vZGUnOl8weDE5ZmNkMj09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDRiNDM0ZVtfMHg0MGM4NDldLF8weDI0N2JlYihfMHgzNjI5NmIpLHt9KSk7aWYoXzB4MTlmY2QyPT09XzB4OTIxMGQ1KDB4MWFiKSl7bGV0IF8weDRiNGU5ZT1FcnJvcltfMHg5MjEwZDUoMHgyMjkpXTt0cnl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPTB4MS8weDAsXzB4NzI5M2EwW18weDkyMTBkNSgweDFmMyldKF8weDE2OThkYVtfMHg5MjEwZDUoMHgyM2EpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4OTIxMGQ1KDB4MTkzKV0sXzB4MjQ3YmViKF8weDM2Mjk2YikseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4OTIxMGQ1KDB4MjI5KV09XzB4NGI0ZTllO319cmV0dXJueydtZXRob2QnOl8weDkyMTBkNSgweDFjZCksJ3ZlcnNpb24nOl8weDEyZGUwYiwnYXJncyc6W3sndHMnOl8weDE4MWI2ZCwnc2Vzc2lvbic6XzB4MmEwOGIzLCdhcmdzJzpfMHg3MjkzYTAsJ2lkJzpfMHg0NTM0NTEsJ2NvbnRleHQnOl8weDU0MTg1ZH1dfTt9Y2F0Y2goXzB4M2M0ZmNkKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDEyZGUwYiwnYXJncyc6W3sndHMnOl8weDE4MWI2ZCwnc2Vzc2lvbic6XzB4MmEwOGIzLCdhcmdzJzpbeyd0eXBlJzpfMHg5MjEwZDUoMHgxYjIpLCdlcnJvcic6XzB4M2M0ZmNkJiZfMHgzYzRmY2RbXzB4OTIxMGQ1KDB4MWJlKV19XSwnaWQnOl8weDQ1MzQ1MSwnY29udGV4dCc6XzB4NTQxODVkfV19O31maW5hbGx5e3RyeXtpZihfMHg1YjQ0ZjAmJl8weDM2NzE1Yil7bGV0IF8weDM5YzA0ZT1fMHg5ZTRjNGQoKTtfMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV0rKyxfMHg1YjQ0ZjBbJ3RpbWUnXSs9XzB4MjdmYzE1KF8weDM2NzE1YixfMHgzOWMwNGUpLF8weDViNDRmMFsndHMnXT1fMHgzOWMwNGUsXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDIyNildKyssXzB4MmUwYjgzWydoaXRzJ11bXzB4OTIxMGQ1KDB4MWFlKV0rPV8weDI3ZmMxNShfMHgzNjcxNWIsXzB4MzljMDRlKSxfMHgyZTBiODNbJ2hpdHMnXVsndHMnXT1fMHgzOWMwNGUsKF8weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXT4weDMyfHxfMHg1YjQ0ZjBbJ3RpbWUnXT4weDY0KSYmKF8weDViNDRmMFtfMHg5MjEwZDUoMHgxYjYpXT0hMHgwKSwoXzB4MmUwYjgzWydoaXRzJ11bJ2NvdW50J10+MHgzZTh8fF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYWUpXT4weDEyYykmJihfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWI2KV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MjNjMmJlO30oKF8weDRiMDBkOCxfMHg1NTc4ZjEsXzB4M2VkMmE3LF8weDMwZWFhYixfMHgyMTMyOTUsXzB4NTc4ODhiLF8weDRkMjg4YSxfMHgyZmU4OTQsXzB4M2NmYTZhLF8weDI2ZDFkNCk9Pnt2YXIgXzB4MTk5OGQzPV8weDFmN2ZlMTtpZihfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV0pcmV0dXJuIF8weDRiMDBkOFsnX2NvbnNvbGVfbmluamEnXTtpZighSihfMHg0YjAwZDgsXzB4MmZlODk0LF8weDIxMzI5NSkpcmV0dXJuIF8weDRiMDBkOFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NGIwMGQ4W18weDE5OThkMygweDIzMildO2xldCBfMHgxZWM4Yzg9VyhfMHg0YjAwZDgpLF8weDFhM2M3Zj1fMHgxZWM4YzhbJ2VsYXBzZWQnXSxfMHg0MWNmNmE9XzB4MWVjOGM4W18weDE5OThkMygweDIzZCldLF8weDI0NzA2MD1fMHgxZWM4YzhbXzB4MTk5OGQzKDB4MjUxKV0sXzB4MWQzYzQ1PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4NTY4M2JlPVkoXzB4NGIwMGQ4LF8weDNjZmE2YSxfMHgxZDNjNDUsXzB4NTc4ODhiKSxfMHgzZTI0OGY9XzB4MTAzOTJmPT57XzB4MWQzYzQ1Wyd0cyddW18weDEwMzkyZl09XzB4NDFjZjZhKCk7fSxfMHgyZWJiZTc9KF8weDFhMDJjOCxfMHg0MzI3YzEpPT57dmFyIF8weDE1OTVhMz1fMHgxOTk4ZDM7bGV0IF8weDQ4MDExYj1fMHgxZDNjNDVbJ3RzJ11bXzB4NDMyN2MxXTtpZihkZWxldGUgXzB4MWQzYzQ1Wyd0cyddW18weDQzMjdjMV0sXzB4NDgwMTFiKXtsZXQgXzB4NDQxZmVjPV8weDFhM2M3ZihfMHg0ODAxMWIsXzB4NDFjZjZhKCkpO18weDM0MWFkZihfMHg1NjgzYmUoXzB4MTU5NWEzKDB4MWFlKSxfMHgxYTAyYzgsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLFtfMHg0NDFmZWNdLF8weDQzMjdjMSkpO319LF8weDY2NTMwMT1fMHg0MDk1NTM9Pl8weDJhOGQ5Nj0+e3ZhciBfMHgzNWIyYWE9XzB4MTk5OGQzO3RyeXtfMHgzZTI0OGYoXzB4MmE4ZDk2KSxfMHg0MDk1NTMoXzB4MmE4ZDk2KTt9ZmluYWxseXtfMHg0YjAwZDhbJ2NvbnNvbGUnXVtfMHgzNWIyYWEoMHgxYWUpXT1fMHg0MDk1NTM7fX0sXzB4MTQ2MjE1PV8weDVhYTU5MT0+XzB4NDRiOGMwPT57dmFyIF8weGM1YjZlMz1fMHgxOTk4ZDM7dHJ5e2xldCBbXzB4NGViMWI2LF8weDE1NGFkY109XzB4NDRiOGMwW18weGM1YjZlMygweDFmNildKF8weGM1YjZlMygweDI1OSkpO18weDJlYmJlNyhfMHgxNTRhZGMsXzB4NGViMWI2KSxfMHg1YWE1OTEoXzB4NGViMWI2KTt9ZmluYWxseXtfMHg0YjAwZDhbXzB4YzViNmUzKDB4MjU2KV1bJ3RpbWVFbmQnXT1fMHg1YWE1OTE7fX07XzB4NGIwMGQ4W18weDE5OThkMygweDIzMildPXsnY29uc29sZUxvZyc6KF8weDIzOTNmOCxfMHg1MWJlNjIpPT57dmFyIF8weDUxMTUxYj1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weDUxMTUxYigweDI1NildW18weDUxMTUxYigweDFjZCldW18weDUxMTUxYigweDIwNildIT09J2Rpc2FibGVkTG9nJyYmXzB4MzQxYWRmKF8weDU2ODNiZShfMHg1MTE1MWIoMHgxY2QpLF8weDIzOTNmOCxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4NTFiZTYyKSk7fSwnY29uc29sZVRyYWNlJzooXzB4MTE5MzY5LF8weDQ0MjAzMSk9Pnt2YXIgXzB4NTk0YzgwPV8weDE5OThkMztfMHg0YjAwZDhbXzB4NTk0YzgwKDB4MjU2KV1bXzB4NTk0YzgwKDB4MWNkKV1bJ25hbWUnXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MzQxYWRmKF8weDU2ODNiZShfMHg1OTRjODAoMHgxYWIpLF8weDExOTM2OSxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4NDQyMDMxKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDMyZWRmMD1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weDMyZWRmMCgweDI1NildW18weDMyZWRmMCgweDFhZSldPV8weDY2NTMwMShfMHg0YjAwZDhbXzB4MzJlZGYwKDB4MjU2KV1bXzB4MzJlZGYwKDB4MWFlKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHhjZWI3YTk9XzB4MTk5OGQzO18weDRiMDBkOFtfMHhjZWI3YTkoMHgyNTYpXVtfMHhjZWI3YTkoMHgxYTIpXT1fMHgxNDYyMTUoXzB4NGIwMGQ4Wydjb25zb2xlJ11bJ3RpbWVFbmQnXSk7fSwnYXV0b0xvZyc6KF8weDU2MTAyMSxfMHgzMzQzYTYpPT57dmFyIF8weDk5MjUzZj1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg5OTI1M2YoMHgxY2QpLF8weDMzNDNhNixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsW18weDU2MTAyMV0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDE0ZGY2MixfMHgxYWNhODUpPT57dmFyIF8weDRlOTkzND1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg0ZTk5MzQoMHgxY2QpLF8weDE0ZGY2MixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4MWFjYTg1KSk7fSwnYXV0b1RyYWNlJzooXzB4MTlmMzNiLF8weDQ5Y2Y1Yyk9Pnt2YXIgXzB4MzhhYmE1PV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDM4YWJhNSgweDFhYiksXzB4NDljZjVjLF8weDI0NzA2MCgpLF8weDNlMDBmYyxbXzB4MTlmMzNiXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHhjZDk5NjIsXzB4M2FkYmMwKT0+e3ZhciBfMHg0MGE3YWE9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4NDBhN2FhKDB4MWFiKSxfMHhjZDk5NjIsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLF8weDNhZGJjMCkpO30sJ2F1dG9UaW1lJzooXzB4MWUxZmQ3LF8weDJlNTQyOSxfMHgyY2NiMDIpPT57XzB4M2UyNDhmKF8weDJjY2IwMik7fSwnYXV0b1RpbWVFbmQnOihfMHgyZTM4ZTYsXzB4MTQxYmY4LF8weGRjMzNiMik9PntfMHgyZWJiZTcoXzB4MTQxYmY4LF8weGRjMzNiMik7fSwnY292ZXJhZ2UnOl8weDI5OGYzNz0+e3ZhciBfMHgyMzgwYjI9XzB4MTk5OGQzO18weDM0MWFkZih7J21ldGhvZCc6XzB4MjM4MGIyKDB4MWRlKSwndmVyc2lvbic6XzB4NTc4ODhiLCdhcmdzJzpbeydpZCc6XzB4Mjk4ZjM3fV19KTt9fTtsZXQgXzB4MzQxYWRmPWIoXzB4NGIwMGQ4LF8weDU1NzhmMSxfMHgzZWQyYTcsXzB4MzBlYWFiLF8weDIxMzI5NSxfMHgyNmQxZDQpLF8weDNlMDBmYz1fMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjZlKV07cmV0dXJuIF8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXTt9KShnbG9iYWxUaGlzLF8weDFmN2ZlMSgweDIxMyksXzB4MWY3ZmUxKDB4MjBjKSxfMHgxZjdmZTEoMHgxZDcpLF8weDFmN2ZlMSgweDIwOSksJzEuMC4wJyxfMHgxZjdmZTEoMHgxOGUpLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiZGttLWRlc2t0b3BcXFwiLFxcXCIxOTIuMTY4LjEuMTAxXFxcIl0sXzB4MWY3ZmUxKDB4MWFmKSxfMHgxZjdmZTEoMHgxYjEpKTtcIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGNyZWF0ZU1vZGFsIGZyb20gJy4vbW9kYWxzJ1xuLy8gQ2xhc3MgbW9kdWxlIHRvIGV4cG9ydCAsa2VlcCBpbiBtaW5kIGl0IHNob3VsZCBvbmx5IGNyZWF0ZSB0aGUgY2xhc3Mgb2JqZWN0cy5cbmNsYXNzIFRvRG8ge1xuXHRjb25zdHJ1Y3Rvcihwcm9qZWN0LCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG5cdFx0dGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuXHRcdHRoaXMudGl0bGUgPSBjaGVja1RpdGxlKHRpdGxlKVxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBjaGVja0Rlc2MoZGVzYylcblx0XHR0aGlzLmR1ZURhdGUgPSBmb3JtYXREYXRlKGR1ZURhdGUpXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG5cdFx0dGhpcy5ub3RlcyA9IG5vdGVzXG5cdFx0dGhpcy5pZCA9IGdlbmVyYXRlVW5pcXVlSUQoKVxuXHR9XG5cdHByaW50VG9EbygpIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAyOTYwMTUyMjNfMTVfMl8xNV82OV80YCwnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI5NjAxNTIyM18xNl8yXzE2XzQwXzRgLGBhc3NpZ25lZCBJRDogJHt0aGlzLmlkfWApKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI5NjAxNTIyM18xN18yXzE3XzUwXzRgLGBhc3NpZ25lZCBwcm9qZWN0OiAke3RoaXMucHJvamVjdH1gKSlcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAyOTYwMTUyMjNfMThfMl8xOF8zOF80YCxgdGl0bGU6ICR7dGhpcy50aXRsZX0sYCkpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjk2MDE1MjIzXzE5XzJfMTlfNDNfNGAsYGRlc2NyaXB0aW9uOiAke3RoaXMuZGVzY30sYCkpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjk2MDE1MjIzXzIwXzJfMjBfNDNfNGAsYGR1ZSBkYXRlOiAke3RoaXMuZHVlRGF0ZX0sYCkpXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjk2MDE1MjIzXzIxXzJfMjFfNDRfNGAsYHByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9LGApKVxuXHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI5NjAxNTIyM18yMl8yXzIyXzM4XzRgLGBub3RlczogJHt0aGlzLm5vdGVzfSxgKSlcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAyOTYwMTUyMjNfMjNfMl8yM182OV80YCwnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpKVxuXHR9XG59XG5cbi8vIENoZWNrcyBiZWxvd1xuXG5mdW5jdGlvbiBjaGVja1RpdGxlKHRpdGxlKSB7XG5cdC8vIFdvdWxkIGFsc28gaW5jbHVkZSBzYW5pdGlzYXRpb25cblx0aWYgKHRpdGxlLmxlbmd0aCA8PSAyMCkgcmV0dXJuIHRpdGxlXG5cdGVsc2UgcmV0dXJuICdUaXRsZSB0b28gbG9uZydcbn1cblxuZnVuY3Rpb24gY2hlY2tEZXNjKGRlc2MpIHtcblx0Ly8gV291bGQgYWxzbyBpbmNsdWRlIHNhbml0aXNhdGlvblxuXHRpZiAoZGVzYy5sZW5ndGggPD0gMTAwKSByZXR1cm4gZGVzY1xuXHRlbHNlIHJldHVybiAnRGVzY3JpcHRpb24gdG9vIGxvbmcnXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZHVlRGF0ZSkge1xuXHRyZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGR1ZURhdGUpLCAnTU0tZGQteXl5eScpXG59XG5cbi8vIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBUb0RvIGNhcmRzIGZvciByZW5kZXJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9DYXJkKHRvZG8sIHRvZG9zQ29udGFpbmVyKSB7XG5cdGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0dG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJywgJ2hpZGRlbi1jYXJkJylcblxuXHRjb25zdCB0b2dnbGVDYXJkID0gKCkgPT4ge1xuXHRcdGlmICh0b2RvQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1jYXJkJykpIHtcblx0XHRcdHNob3dDYXJkKHRvZG8pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGVDYXJkKClcblx0XHR9XG5cdH1cblxuXHRjb25zdCBzaG93Q2FyZCA9ICh0b2RvKSA9PiB7XG5cdFx0dG9kb0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWNhcmQnKVxuXHRcdHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoJ3Nob3ctY2FyZCcpXG5cdFx0cmVuZGVyVmFsdWVzKCdmdWxsJylcblx0XHRhZGRFZGl0QnV0dG9uKHRvZG8pXG5cdH1cblxuXHRjb25zdCBoaWRlQ2FyZCA9ICgpID0+IHtcblx0XHR0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tY2FyZCcpXG5cdFx0dG9kb0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1jYXJkJylcblx0XHRyZW5kZXJWYWx1ZXMoJ21pbmknKVxuXHRcdHJlbW92ZUVkaXRCdXR0b24oKVxuXHR9XG5cblx0Y29uc3QgYWRkRWRpdEJ1dHRvbiA9ICh0b2RvKSA9PiB7XG5cdFx0Y29uc3QgZWRpdEJ0biA9IHRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWVkaXQtYnRuJylcblx0XHRpZiAoIWVkaXRCdG4pIHtcblx0XHRcdGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRcdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0J1xuXHRcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJkLWVkaXQtYnRuJylcblx0XHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI5NjAxNTIyM183OV80Xzc5XzY2XzRgLCdTZW5kaW5nIHRvZG8gdG8gZWRpdENhcmQnICsgT2JqZWN0LmVudHJpZXModG9kbykpKVxuXHRcdFx0XHRlZGl0Q2FyZCh0b2RvKVxuXHRcdFx0fSlcblx0XHRcdHRvZG9DYXJkLmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cdFx0fVxuXHR9XG5cdGNvbnN0IHJlbW92ZUVkaXRCdXR0b24gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWRpdEJ0biA9IHRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWVkaXQtYnRuJylcblx0XHRpZiAoZWRpdEJ0bikge1xuXHRcdFx0ZWRpdEJ0bi5yZW1vdmUoKVxuXHRcdFx0dG9kb0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1idXR0b24tYWRkZWQnKVxuXHRcdH1cblx0fVxuXHR0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNhcmQpXG5cdHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkKVxuXG5cdGZ1bmN0aW9uIHJlbmRlclZhbHVlcyhzdGF0ZSkge1xuXHRcdHRvZG9DYXJkLmlubmVySFRNTCA9ICcnXG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kbykpIHtcblx0XHRcdGlmIChzdGF0ZSAhPT0gJ2Z1bGwnKSB7XG5cdFx0XHRcdC8vIG1pbmltaXNlZCBzdGF0ZSB0cmlnZ2VyZWRcblx0XHRcdFx0aWYgKGtleSAhPT0gJ3RpdGxlJyAmJiBrZXkgIT09ICdkdWVEYXRlJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdH0gLy9Ta2lwIGl0dGVyYXRpb24gZm9yIHRoaXMgc3RhdGUgaWYgbm90IHRpdGxlIG9yIGR1ZURhdGVcblx0XHRcdH1cblx0XHRcdGlmIChrZXkgPT09ICdwcm9qZWN0JyB8fCBrZXkgPT09ICdpZCcpIHtcblx0XHRcdFx0Y29udGludWUgLy9za2lwIGl0dGVyYXRpb24gZm9yIHByb2plY3QgdGl0bGUsIGlycmVsZXZhbnQuXG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBpZiBjYXJkIHdhcyBhbHJlYWR5IHJlbmRlcmVkOlxuXG5cdFx0XHRjb25zdCB0b2RvS2V5VmFsdWVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdHRvZG9LZXlWYWx1ZUNvbnQuY2xhc3NMaXN0LmFkZCgndG9kby1rZXktdmFsdWUtY29udCcpXG5cblx0XHRcdGNvbnN0IHRvZG9LZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblx0XHRcdHRvZG9LZXkuY2xhc3NMaXN0LmFkZCgndG9kby1rZXknKVxuXHRcdFx0dG9kb0tleS50ZXh0Q29udGVudCA9IGAke2tleS50b1VwcGVyQ2FzZSgpfTpgXG5cdFx0XHRjb25zdCB0b2RvVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblx0XHRcdHRvZG9WYWx1ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXZhbHVlJylcblx0XHRcdHRvZG9WYWx1ZS50ZXh0Q29udGVudCA9IHZhbHVlXG5cdFx0XHR0b2RvS2V5VmFsdWVDb250LmFwcGVuZCh0b2RvS2V5LCB0b2RvVmFsdWUpXG5cdFx0XHR0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0b2RvS2V5VmFsdWVDb250KVxuXHRcdH1cblx0fVxuXHRyZW5kZXJWYWx1ZXMoJ21pbmknKVxufVxuLy8gRnVuY3Rpb24gZm9yIGNyZWF0aW5nIHVuaXF1ZSBJRHNcbmNvbnN0IHVzZWRJZHMgPSBbXVxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJRCgpIHtcblx0bGV0IGlkXG5cdC8vIEtlZXAgZm9ybWluZyBhIHJhbmRvbSBudW1iZXIsIHVudGlsIGEgdW51c2VkIG51bWJlciBpcyBmb3VuZC5cblx0ZG8ge1xuXHRcdGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSkgKyAxXG5cdH0gd2hpbGUgKHVzZWRJZHMuaW5jbHVkZXMoaWQpKVxuXHQvLyBwdXNoIHRoZSBmb3VuZCBudW1iZXIgdG8gdXNlZElEIGFycmF5XG5cdHVzZWRJZHMucHVzaChpZClcblx0Ly8gUmV0dXJuIHRoZSBuZXcgSURcblx0cmV0dXJuIGlkLnRvU3RyaW5nKClcbn1cbmZ1bmN0aW9uIGVkaXRDYXJkKGNhcmQpIHtcblx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjYXJkKVxuXHRjcmVhdGVNb2RhbCgnZWRpdCBUb2RvJywgdmFsdWVzKVxuXHRtb2RhbC5zaG93TW9kYWwoKVxufVxuZXhwb3J0IHsgVG9EbywgY3JlYXRlVG9Eb0NhcmQgfVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDFmN2ZlMT1fMHgzN2U0OyhmdW5jdGlvbihfMHg0N2ZmYjUsXzB4MzA1NzE2KXt2YXIgXzB4MzcyZDg0PV8weDM3ZTQsXzB4MzI1ZThmPV8weDQ3ZmZiNSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NDkzNjExPS1wYXJzZUludChfMHgzNzJkODQoMHgyMjUpKS8weDEqKC1wYXJzZUludChfMHgzNzJkODQoMHgxZDYpKS8weDIpKy1wYXJzZUludChfMHgzNzJkODQoMHgxYTkpKS8weDMqKC1wYXJzZUludChfMHgzNzJkODQoMHgyNzIpKS8weDQpKy1wYXJzZUludChfMHgzNzJkODQoMHgyNWIpKS8weDUrLXBhcnNlSW50KF8weDM3MmQ4NCgweDE4YikpLzB4NiooLXBhcnNlSW50KF8weDM3MmQ4NCgweDIzNSkpLzB4NykrLXBhcnNlSW50KF8weDM3MmQ4NCgweDFmMSkpLzB4OCoocGFyc2VJbnQoXzB4MzcyZDg0KDB4MWI5KSkvMHg5KStwYXJzZUludChfMHgzNzJkODQoMHgxZjIpKS8weGEqKC1wYXJzZUludChfMHgzNzJkODQoMHgxZWQpKS8weGIpK3BhcnNlSW50KF8weDM3MmQ4NCgweDFlOCkpLzB4YztpZihfMHg0OTM2MTE9PT1fMHgzMDU3MTYpYnJlYWs7ZWxzZSBfMHgzMjVlOGZbJ3B1c2gnXShfMHgzMjVlOGZbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJiNDk5ZSl7XzB4MzI1ZThmWydwdXNoJ10oXzB4MzI1ZThmWydzaGlmdCddKCkpO319fShfMHgyOGVkLDB4NDVmNTgpKTtmdW5jdGlvbiBfMHgyOGVkKCl7dmFyIF8weDhiYTRkNz1bJzpsb2dQb2ludElkOicsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzIzNzYzNjVtalRNUWEnLCdjb25jYXQnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnc2V0dGVyJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdyZXBsYWNlJywncGFyc2UnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywncG9ydCcsJ19yZWNvbm5lY3RUaW1lb3V0Jywnbm9kZU1vZHVsZXMnLCdTdHJpbmcnLCdfcHJvcGVydHknLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnX2FsbG93ZWRUb1NlbmQnLCd1cmwnLCd3cy9pbmRleC5qcycsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ3Jlc29sdmVHZXR0ZXJzJywnY29uc3RydWN0b3InLCdfcHJvcGVydHlOYW1lJywnODg4NjRQZU5vUW4nLCdwcm9wcycsJ2F1dG9FeHBhbmQnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ21ldGhvZCcsJ2xldmVsJywnY3JlYXRlJywnb25jbG9zZScsJ3ZlcnNpb25zJywnZXhwSWQnLCc0NTM3ODZoWlJUTVEnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19pbk5leHRFZGdlJywnMTcwOTMxMTAxNjc0MCcsJ19jb25uZWN0VG9Ib3N0Tm93JywnaGFzT3duUHJvcGVydHknLCdpbmRleCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdzdGFjaycsJ193cycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnZWRnZScsJ0J1ZmZlcicsJ29iamVjdCcsJ3NldCcsJ3dzOi8vJywnX2NsZWFuTm9kZScsJ2FzdHJvJywnX3R5cGUnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ2NhdGNoJywncHJvdG90eXBlJywnX3BfJywndGltZUVuZCcsJ1dlYlNvY2tldCcsJ2dsb2JhbCcsJ3NsaWNlJywnRXJyb3InLCdfaXNQcmltaXRpdmVUeXBlJywnX2lzVW5kZWZpbmVkJywnNTRpUm5RSk4nLCdfb2JqZWN0VG9TdHJpbmcnLCd0cmFjZScsJ2lzQXJyYXknLCdfcXVvdGVkUmVnRXhwJywndGltZScsJycsJ19zZXROb2RlTGFiZWwnLCcnLCd1bmtub3duJywnZnVuY05hbWUnLCdTZXQnLCdcXFxceDIwYnJvd3NlcicsJ3JlZHVjZUxpbWl0cycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzlWcEhFTVMnLCdpbmNsdWRlcycsJ19TeW1ib2wnLCduZWdhdGl2ZUluZmluaXR5JywnZnVuY3Rpb24nLCdtZXNzYWdlJywnbmFuJywnb25tZXNzYWdlJywnX2RhdGVUb1N0cmluZycsJ3Jvb3RfZXhwJywncm9vdEV4cHJlc3Npb24nLCdkb2NrZXJpemVkQXBwJywnX1dlYlNvY2tldENsYXNzJywnZ2V0dGVyJywnaG9zdG5hbWUnLCd3YXJuJywnYXJyYXknLCdfaXNNYXAnLCdlbGFwc2VkJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdsb2cnLCdORUdBVElWRV9JTkZJTklUWScsJ2NhcHBlZEVsZW1lbnRzJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ3JlbG9hZCcsJ19jb25uZWN0ZWQnLCd2YWx1ZScsJ3JlYWR5U3RhdGUnLCdhdXRvRXhwYW5kTGltaXQnLCcxNHR3VWdYSCcsXFxcIi9ob21lL2RhbmllbGxyLy52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMjkwL25vZGVfbW9kdWxlc1xcXCIsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJy4uLicsJ3N0cmluZycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2NhcElmU3RyaW5nJywnYWxsU3RyTGVuZ3RoJywnY292ZXJhZ2UnLCdtYXAnLCdwb3AnLCdfYWRkTG9hZE5vZGUnLCdlbGVtZW50cycsJ251bWJlcicsJ01hcCcsJ3BhdGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ05FWFRfUlVOVElNRScsJzg3NzIwOTZhQmVpTmEnLCdfcmVnRXhwVG9TdHJpbmcnLCdfc2V0Tm9kZUlkJywndG90YWxTdHJMZW5ndGgnLCdkYXRhJywnMjc1ekNmYXVHJywnbmVnYXRpdmVaZXJvJywnc3ltYm9sJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCczODI3NDY0ZnNpdlVjJywnOTk0MzByTXB3Y3MnLCdwdXNoJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdlbnYnLCdzcGxpdCcsJ251bGwnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywndHlwZScsJ19rZXlTdHJSZWdFeHAnLCdfX2VzJysnTW9kdWxlJywnbm9kZScsJ19oYXNNYXBPbkl0c1BhdGgnLCd0b1N0cmluZycsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2Nsb3NlJywnc2VuZCcsJ19pc05lZ2F0aXZlWmVybycsJ3RoZW4nLCdfaW5Ccm93c2VyJywndW5yZWYnLCduYW1lJywndW5zaGlmdCcsJ2hpdHMnLCd3ZWJwYWNrJywnX3NvY2tldCcsJ19kaXNwb3NlV2Vic29ja2V0JywnMzQ4NzknLCdsZW5ndGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ3BlcmZfaG9va3MnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfaXNTZXQnLCdfc2VuZEVycm9yTWVzc2FnZScsJzEyNy4wLjAuMScsJ3Byb2Nlc3MnLCdob3N0Jywnam9pbicsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnc3RyTGVuZ3RoJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnY2FsbCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdkZXB0aCcsJ19XZWJTb2NrZXQnLCdiaW5kJywnX3NldE5vZGVRdWVyeVBhdGgnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnMjk1MjVZR1JOQkonLCdjb3VudCcsJ25vRnVuY3Rpb25zJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdzdGFja1RyYWNlTGltaXQnLCdOdW1iZXInLCdwZXJmb3JtYW5jZScsJ3Rlc3QnLCd2YWx1ZU9mJywncG9zaXRpdmVJbmZpbml0eScsJ19wX2xlbmd0aCcsJ2Vycm9yJywnb25lcnJvcicsJ19jb25zb2xlX25pbmphJywnW29iamVjdFxcXFx4MjBNYXBdJywnY2FwcGVkUHJvcHMnLCcxNGh4REtZVicsJ2luZGV4T2YnLCdmb3JFYWNoJywncGFyZW50JywnZ2V0Jywnc2VyaWFsaXplJywnZ2V0UHJvdG90eXBlT2YnLCdfYWRkUHJvcGVydHknLCd0aW1lU3RhbXAnLCdsb2NhdGlvbicsJ2NhcHBlZCcsJ3VuZGVmaW5lZCcsJ19jb25uZWN0aW5nJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdlbnVtZXJhYmxlJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdcXFxceDIwc2VydmVyJywnaHJ0aW1lJywnc29ydFByb3BzJywnbWF0Y2gnLCdiaWdpbnQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ3NvcnQnLCd0b0xvd2VyQ2FzZScsJ191bmRlZmluZWQnLCdvbm9wZW4nLCdub3cnLCdQT1NJVElWRV9JTkZJTklUWScsJ2N1cnJlbnQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ19pc0FycmF5JywnY29uc29sZScsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJ107XzB4MjhlZD1mdW5jdGlvbigpe3JldHVybiBfMHg4YmE0ZDc7fTtyZXR1cm4gXzB4MjhlZCgpO31mdW5jdGlvbiBfMHgzN2U0KF8weDY5ZTE0NixfMHgzZGIyOGQpe3ZhciBfMHgyOGVkNmU9XzB4MjhlZCgpO3JldHVybiBfMHgzN2U0PWZ1bmN0aW9uKF8weDM3ZTQ2MCxfMHgxOWEyNTcpe18weDM3ZTQ2MD1fMHgzN2U0NjAtMHgxODk7dmFyIF8weDE4OTBjZD1fMHgyOGVkNmVbXzB4MzdlNDYwXTtyZXR1cm4gXzB4MTg5MGNkO30sXzB4MzdlNChfMHg2OWUxNDYsXzB4M2RiMjhkKTt9dmFyIGo9T2JqZWN0W18weDFmN2ZlMSgweDI3OCldLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDFmN2ZlMSgweDFiOCldLGVlPU9iamVjdFtfMHgxZjdmZTEoMHgyNjIpXSx0ZT1PYmplY3RbXzB4MWY3ZmUxKDB4MjNiKV0sbmU9T2JqZWN0W18weDFmN2ZlMSgweDFhMCldW18weDFmN2ZlMSgweDE5MCldLHJlPShfMHg1YWM2NDIsXzB4MWNmNTYwLF8weDU2MTU1MyxfMHgyMGM0NDcpPT57dmFyIF8weDQ1YzIwMj1fMHgxZjdmZTE7aWYoXzB4MWNmNTYwJiZ0eXBlb2YgXzB4MWNmNTYwPT1fMHg0NWMyMDIoMHgxOTgpfHx0eXBlb2YgXzB4MWNmNTYwPT1fMHg0NWMyMDIoMHgxYmQpKXtmb3IobGV0IF8weDUwOGEyYyBvZiBlZShfMHgxY2Y1NjApKSFuZVtfMHg0NWMyMDIoMHgyMWQpXShfMHg1YWM2NDIsXzB4NTA4YTJjKSYmXzB4NTA4YTJjIT09XzB4NTYxNTUzJiZIKF8weDVhYzY0MixfMHg1MDhhMmMseydnZXQnOigpPT5fMHgxY2Y1NjBbXzB4NTA4YTJjXSwnZW51bWVyYWJsZSc6IShfMHgyMGM0NDc9RyhfMHgxY2Y1NjAsXzB4NTA4YTJjKSl8fF8weDIwYzQ0N1tfMHg0NWMyMDIoMHgyNDQpXX0pO31yZXR1cm4gXzB4NWFjNjQyO30seD0oXzB4MWE5MjYxLF8weGI4NDJlMSxfMHgzYTEyM2QpPT4oXzB4M2ExMjNkPV8weDFhOTI2MSE9bnVsbD9qKHRlKF8weDFhOTI2MSkpOnt9LHJlKF8weGI4NDJlMXx8IV8weDFhOTI2MXx8IV8weDFhOTI2MVtfMHgxZjdmZTEoMHgxZmIpXT9IKF8weDNhMTIzZCwnZGVmYXVsdCcseyd2YWx1ZSc6XzB4MWE5MjYxLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4M2ExMjNkLF8weDFhOTI2MSkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MjU4OTQ2LF8weDRhYmMyNCxfMHg1M2E5MGEsXzB4NjhkYjQ1LF8weDU0NTdlOCl7dmFyIF8weDI1OTdjYj1fMHgxZjdmZTE7dGhpc1tfMHgyNTk3Y2IoMHgxYTQpXT1fMHgyNTg5NDYsdGhpc1tfMHgyNTk3Y2IoMHgyMTUpXT1fMHg0YWJjMjQsdGhpc1tfMHgyNTk3Y2IoMHgyNjMpXT1fMHg1M2E5MGEsdGhpc1tfMHgyNTk3Y2IoMHgyNjUpXT1fMHg2OGRiNDUsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDU0NTdlOCx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHgyNTk3Y2IoMHgxY2MpXT0hMHgwLHRoaXNbXzB4MjU5N2NiKDB4MWQyKV09ITB4MSx0aGlzW18weDI1OTdjYigweDI0MSldPSEweDEsdGhpc1tfMHgyNTk3Y2IoMHgxOGQpXT1fMHgyNTg5NDZbXzB4MjU5N2NiKDB4MjE0KV0/LlsnZW52J10/LltfMHgyNTk3Y2IoMHgxZTcpXT09PSdlZGdlJyx0aGlzW18weDI1OTdjYigweDIwNCldPSF0aGlzW18weDI1OTdjYigweDFhNCldW18weDI1OTdjYigweDIxNCldPy5bXzB4MjU5N2NiKDB4MTg5KV0/LltfMHgyNTk3Y2IoMHgxZmMpXSYmIXRoaXNbXzB4MjU5N2NiKDB4MThkKV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDI1OTdjYigweDFmNCldPTB4MCx0aGlzW18weDI1OTdjYigweDFkYildPTB4MTQsdGhpc1tfMHgyNTk3Y2IoMHgxOWUpXT1fMHgyNTk3Y2IoMHgyNDYpLHRoaXNbXzB4MjU5N2NiKDB4MjEyKV09KHRoaXNbXzB4MjU5N2NiKDB4MjA0KV0/XzB4MjU5N2NiKDB4MjVmKTpfMHgyNTk3Y2IoMHgyNmQpKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddO31hc3luY1tfMHgxZjdmZTEoMHgxZjApXSgpe3ZhciBfMHgzMzYxYTY9XzB4MWY3ZmUxO2lmKHRoaXNbXzB4MzM2MWE2KDB4MWM1KV0pcmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddO2xldCBfMHgyNDBkOGY7aWYodGhpc1tfMHgzMzYxYTYoMHgyMDQpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHgyNDBkOGY9dGhpc1snZ2xvYmFsJ11bXzB4MzM2MWE2KDB4MWEzKV07ZWxzZXtpZih0aGlzWydnbG9iYWwnXVsncHJvY2VzcyddPy5bXzB4MzM2MWE2KDB4MjIxKV0pXzB4MjQwZDhmPXRoaXNbJ2dsb2JhbCddW18weDMzNjFhNigweDIxNCldPy5bXzB4MzM2MWE2KDB4MjIxKV07ZWxzZSB0cnl7bGV0IF8weDQyNTkxMj1hd2FpdCBpbXBvcnQoXzB4MzM2MWE2KDB4MWU1KSk7XzB4MjQwZDhmPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgzMzYxYTYoMHgyNmIpKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHg0MjU5MTJbXzB4MzM2MWE2KDB4MjE2KV0odGhpc1tfMHgzMzYxYTYoMHgyNjUpXSxfMHgzMzYxYTYoMHgyNmMpKSlbXzB4MzM2MWE2KDB4MWZlKV0oKSkpWydkZWZhdWx0J107fWNhdGNoe3RyeXtfMHgyNDBkOGY9cmVxdWlyZShyZXF1aXJlKF8weDMzNjFhNigweDFlNSkpW18weDMzNjFhNigweDIxNildKHRoaXNbXzB4MzM2MWE2KDB4MjY1KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MzM2MWE2KDB4MjFjKSk7fX19cmV0dXJuIHRoaXNbXzB4MzM2MWE2KDB4MWM1KV09XzB4MjQwZDhmLF8weDI0MGQ4Zjt9W18weDFmN2ZlMSgweDE4ZildKCl7dmFyIF8weDEwNDFjNz1fMHgxZjdmZTE7dGhpc1tfMHgxMDQxYzcoMHgyNDEpXXx8dGhpc1tfMHgxMDQxYzcoMHgxZDIpXXx8dGhpc1tfMHgxMDQxYzcoMHgxZjQpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXXx8KHRoaXNbXzB4MTA0MWM3KDB4MWNjKV09ITB4MSx0aGlzW18weDEwNDFjNygweDI0MSldPSEweDAsdGhpc1tfMHgxMDQxYzcoMHgxZjQpXSsrLHRoaXNbXzB4MTA0MWM3KDB4MTk0KV09bmV3IFByb21pc2UoKF8weDFkNDdhOCxfMHgzMDI2ZDYpPT57dmFyIF8weGRkMTEwNj1fMHgxMDQxYzc7dGhpc1tfMHhkZDExMDYoMHgxZjApXSgpW18weGRkMTEwNigweDIwMyldKF8weDRjYzhmZj0+e3ZhciBfMHg0N2RhYzc9XzB4ZGQxMTA2O2xldCBfMHgxZDEwZDA9bmV3IF8weDRjYzhmZihfMHg0N2RhYzcoMHgxOWEpKyghdGhpc1tfMHg0N2RhYzcoMHgyMDQpXSYmdGhpc1tfMHg0N2RhYzcoMHgxYzQpXT9fMHg0N2RhYzcoMHgyNTgpOnRoaXNbJ2hvc3QnXSkrJzonK3RoaXNbJ3BvcnQnXSk7XzB4MWQxMGQwW18weDQ3ZGFjNygweDIzMSldPSgpPT57dmFyIF8weDgzNmNlMD1fMHg0N2RhYzc7dGhpc1tfMHg4MzZjZTAoMHgyNmEpXT0hMHgxLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MWQxMGQwKSx0aGlzW18weDgzNmNlMCgweDIyOCldKCksXzB4MzAyNmQ2KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDFkMTBkMFtfMHg0N2RhYzcoMHgyNTApXT0oKT0+e3ZhciBfMHgzMTZkOTg9XzB4NDdkYWM3O3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MWQxMGQwW18weDMxNmQ5OCgweDIwYSldJiZfMHgxZDEwZDBbXzB4MzE2ZDk4KDB4MjBhKV1bJ3VucmVmJ10mJl8weDFkMTBkMFtfMHgzMTZkOTgoMHgyMGEpXVtfMHgzMTZkOTgoMHgyMDUpXSgpLF8weDFkNDdhOChfMHgxZDEwZDApO30sXzB4MWQxMGQwWydvbmNsb3NlJ109KCk9Pnt2YXIgXzB4MzE5MDFiPV8weDQ3ZGFjNzt0aGlzW18weDMxOTAxYigweDFjYyldPSEweDAsdGhpc1tfMHgzMTkwMWIoMHgyMGIpXShfMHgxZDEwZDApLHRoaXNbXzB4MzE5MDFiKDB4MjI4KV0oKTt9LF8weDFkMTBkMFtfMHg0N2RhYzcoMHgxYzApXT1fMHg5MzQzMTk9Pnt2YXIgXzB4MmYyOTE3PV8weDQ3ZGFjNzt0cnl7XzB4OTM0MzE5JiZfMHg5MzQzMTlbXzB4MmYyOTE3KDB4MWVjKV0mJnRoaXNbXzB4MmYyOTE3KDB4MjA0KV0mJkpTT05bXzB4MmYyOTE3KDB4MjYxKV0oXzB4OTM0MzE5WydkYXRhJ10pW18weDJmMjkxNygweDI3NildPT09XzB4MmYyOTE3KDB4MWQxKSYmdGhpc1tfMHgyZjI5MTcoMHgxYTQpXVtfMHgyZjI5MTcoMHgyM2UpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4ZGQxMTA2KDB4MjAzKV0oXzB4NDc5NTc4PT4odGhpc1tfMHhkZDExMDYoMHgxZDIpXT0hMHgwLHRoaXNbXzB4ZGQxMTA2KDB4MjQxKV09ITB4MSx0aGlzW18weGRkMTEwNigweDFjYyldPSEweDEsdGhpc1tfMHhkZDExMDYoMHgyNmEpXT0hMHgwLHRoaXNbXzB4ZGQxMTA2KDB4MWY0KV09MHgwLF8weDQ3OTU3OCkpW18weGRkMTEwNigweDE5ZildKF8weDRlZGQzMD0+KHRoaXNbXzB4ZGQxMTA2KDB4MWQyKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHhkZDExMDYoMHgxYzgpXShfMHhkZDExMDYoMHgyNGMpK3RoaXNbXzB4ZGQxMTA2KDB4MTllKV0pLF8weDMwMjZkNihuZXcgRXJyb3IoXzB4ZGQxMTA2KDB4MWI3KSsoXzB4NGVkZDMwJiZfMHg0ZWRkMzBbXzB4ZGQxMTA2KDB4MWJlKV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0OTMxOGQpe3ZhciBfMHg0MzIzYzA9XzB4MWY3ZmUxO3RoaXNbXzB4NDMyM2MwKDB4MWQyKV09ITB4MSx0aGlzW18weDQzMjNjMCgweDI0MSldPSEweDE7dHJ5e18weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyNzkpXT1udWxsLF8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyMzEpXT1udWxsLF8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyNTApXT1udWxsO31jYXRjaHt9dHJ5e18weDQ5MzE4ZFtfMHg0MzIzYzAoMHgxZDQpXTwweDImJl8weDQ5MzE4ZFtfMHg0MzIzYzAoMHgyMDApXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHhhZmFlNTg9XzB4MWY3ZmUxO2NsZWFyVGltZW91dCh0aGlzW18weGFmYWU1OCgweDI2NCldKSwhKHRoaXNbXzB4YWZhZTU4KDB4MWY0KV0+PXRoaXNbXzB4YWZhZTU4KDB4MWRiKV0pJiYodGhpc1tfMHhhZmFlNTgoMHgyNjQpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDE3Y2UxYj1fMHhhZmFlNTg7dGhpc1tfMHgxN2NlMWIoMHgxZDIpXXx8dGhpc1tfMHgxN2NlMWIoMHgyNDEpXXx8KHRoaXNbXzB4MTdjZTFiKDB4MThmKV0oKSx0aGlzWydfd3MnXT8uW18weDE3Y2UxYigweDE5ZildKCgpPT50aGlzW18weDE3Y2UxYigweDIyOCldKCkpKTt9LDB4MWY0KSx0aGlzW18weGFmYWU1OCgweDI2NCldW18weGFmYWU1OCgweDIwNSldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weGFmYWU1OCgweDIwNSldKCkpO31hc3luY1tfMHgxZjdmZTEoMHgyMDEpXShfMHgxNjc2NmUpe3ZhciBfMHgxNTBjNGU9XzB4MWY3ZmUxO3RyeXtpZighdGhpc1tfMHgxNTBjNGUoMHgyNmEpXSlyZXR1cm47dGhpc1tfMHgxNTBjNGUoMHgxY2MpXSYmdGhpc1tfMHgxNTBjNGUoMHgxOGYpXSgpLChhd2FpdCB0aGlzW18weDE1MGM0ZSgweDE5NCldKVtfMHgxNTBjNGUoMHgyMDEpXShKU09OWydzdHJpbmdpZnknXShfMHgxNjc2NmUpKTt9Y2F0Y2goXzB4NThkOWFhKXtjb25zb2xlW18weDE1MGM0ZSgweDFjOCldKHRoaXNbXzB4MTUwYzRlKDB4MjEyKV0rJzpcXFxceDIwJysoXzB4NThkOWFhJiZfMHg1OGQ5YWFbXzB4MTUwYzRlKDB4MWJlKV0pKSx0aGlzW18weDE1MGM0ZSgweDI2YSldPSEweDEsdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO319fTtmdW5jdGlvbiBiKF8weDEyNjZlNixfMHg1ZTVlYmUsXzB4MzY1OWIwLF8weDQyZTA0ZSxfMHg1MDM3NTQsXzB4Zjk1NTAxKXt2YXIgXzB4MWNiZjc3PV8weDFmN2ZlMTtsZXQgXzB4MWMyODE0PV8weDM2NTliMFsnc3BsaXQnXSgnLCcpW18weDFjYmY3NygweDFkZildKF8weDI5MDE0OD0+e3ZhciBfMHg0MzM2ZTU9XzB4MWNiZjc3O3RyeXtfMHgxMjY2ZTZbXzB4NDMzNmU1KDB4MjZlKV18fCgoXzB4NTAzNzU0PT09J25leHQuanMnfHxfMHg1MDM3NTQ9PT0ncmVtaXgnfHxfMHg1MDM3NTQ9PT1fMHg0MzM2ZTUoMHgxOWMpfHxfMHg1MDM3NTQ9PT0nYW5ndWxhcicpJiYoXzB4NTAzNzU0Kz0hXzB4MTI2NmU2W18weDQzMzZlNSgweDIxNCldPy5bJ3ZlcnNpb25zJ10/LltfMHg0MzM2ZTUoMHgxZmMpXSYmXzB4MTI2NmU2W18weDQzMzZlNSgweDIxNCldPy5bXzB4NDMzNmU1KDB4MWY1KV0/LlsnTkVYVF9SVU5USU1FJ10hPT1fMHg0MzM2ZTUoMHgxOTYpP18weDQzMzZlNSgweDFiNSk6XzB4NDMzNmU1KDB4MjQ3KSksXzB4MTI2NmU2WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDUwMzc1NH0pO2xldCBfMHhkMmUzNjY9bmV3IFgoXzB4MTI2NmU2LF8weDVlNWViZSxfMHgyOTAxNDgsXzB4NDJlMDRlLF8weGY5NTUwMSk7cmV0dXJuIF8weGQyZTM2NltfMHg0MzM2ZTUoMHgyMDEpXVtfMHg0MzM2ZTUoMHgyMjIpXShfMHhkMmUzNjYpO31jYXRjaChfMHg0NjMwNGYpe3JldHVybiBjb25zb2xlWyd3YXJuJ10oXzB4NDMzNmU1KDB4MjU0KSxfMHg0NjMwNGYmJl8weDQ2MzA0ZltfMHg0MzM2ZTUoMHgxYmUpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4MTMwYWY0PT5fMHgxYzI4MTRbXzB4MWNiZjc3KDB4MjM3KV0oXzB4MzUzODkxPT5fMHgzNTM4OTEoXzB4MTMwYWY0KSk7fWZ1bmN0aW9uIFcoXzB4MjNmYTlmKXt2YXIgXzB4NDA5ZTBkPV8weDFmN2ZlMTtsZXQgXzB4NGU4Mjg5PWZ1bmN0aW9uKF8weDFkZWFmOCxfMHgxNzViMGIpe3JldHVybiBfMHgxNzViMGItXzB4MWRlYWY4O30sXzB4NTI2MzBmO2lmKF8weDIzZmE5ZltfMHg0MDllMGQoMHgyMmIpXSlfMHg1MjYzMGY9ZnVuY3Rpb24oKXt2YXIgXzB4MzQzYmY9XzB4NDA5ZTBkO3JldHVybiBfMHgyM2ZhOWZbXzB4MzQzYmYoMHgyMmIpXVtfMHgzNDNiZigweDI1MSldKCk7fTtlbHNle2lmKF8weDIzZmE5ZltfMHg0MDllMGQoMHgyMTQpXSYmXzB4MjNmYTlmW18weDQwOWUwZCgweDIxNCldW18weDQwOWUwZCgweDI0OCldJiZfMHgyM2ZhOWZbXzB4NDA5ZTBkKDB4MjE0KV0/LltfMHg0MDllMGQoMHgxZjUpXT8uW18weDQwOWUwZCgweDFlNyldIT09XzB4NDA5ZTBkKDB4MTk2KSlfMHg1MjYzMGY9ZnVuY3Rpb24oKXt2YXIgXzB4M2YyMWI0PV8weDQwOWUwZDtyZXR1cm4gXzB4MjNmYTlmW18weDNmMjFiNCgweDIxNCldW18weDNmMjFiNCgweDI0OCldKCk7fSxfMHg0ZTgyODk9ZnVuY3Rpb24oXzB4NWJhMGZmLF8weDNmNzVmYil7cmV0dXJuIDB4M2U4KihfMHgzZjc1ZmJbMHgwXS1fMHg1YmEwZmZbMHgwXSkrKF8weDNmNzVmYlsweDFdLV8weDViYTBmZlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg4MzBmNDF9PXJlcXVpcmUoXzB4NDA5ZTBkKDB4MjBmKSk7XzB4NTI2MzBmPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDgzMGY0MVsnbm93J10oKTt9O31jYXRjaHtfMHg1MjYzMGY9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg0ZTgyODksJ3RpbWVTdGFtcCc6XzB4NTI2MzBmLCdub3cnOigpPT5EYXRlW18weDQwOWUwZCgweDI1MSldKCl9O31mdW5jdGlvbiBKKF8weDQyMjBjMSxfMHgyYWVmNzQsXzB4M2NmMDI5KXt2YXIgXzB4NTUxMjQ2PV8weDFmN2ZlMTtpZihfMHg0MjIwYzFbXzB4NTUxMjQ2KDB4MWZmKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDIyMGMxWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTtsZXQgXzB4MTI4M2Y0PV8weDQyMjBjMVtfMHg1NTEyNDYoMHgyMTQpXT8uW18weDU1MTI0NigweDE4OSldPy5bXzB4NTUxMjQ2KDB4MWZjKV18fF8weDQyMjBjMVtfMHg1NTEyNDYoMHgyMTQpXT8uW18weDU1MTI0NigweDFmNSldPy5bJ05FWFRfUlVOVElNRSddPT09XzB4NTUxMjQ2KDB4MTk2KTtyZXR1cm4gXzB4MTI4M2Y0JiZfMHgzY2YwMjk9PT0nbnV4dCc/XzB4NDIyMGMxW18weDU1MTI0NigweDFmZildPSEweDE6XzB4NDIyMGMxW18weDU1MTI0NigweDFmZildPV8weDEyODNmNHx8IV8weDJhZWY3NHx8XzB4NDIyMGMxWydsb2NhdGlvbiddPy5bJ2hvc3RuYW1lJ10mJl8weDJhZWY3NFtfMHg1NTEyNDYoMHgxYmEpXShfMHg0MjIwYzFbJ2xvY2F0aW9uJ11bXzB4NTUxMjQ2KDB4MWM3KV0pLF8weDQyMjBjMVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107fWZ1bmN0aW9uIFkoXzB4NGEyMzFjLF8weDM5ZTU4YixfMHgyZTBiODMsXzB4MTJkZTBiKXt2YXIgXzB4MTFkMmZkPV8weDFmN2ZlMTtfMHg0YTIzMWM9XzB4NGEyMzFjLF8weDM5ZTU4Yj1fMHgzOWU1OGIsXzB4MmUwYjgzPV8weDJlMGI4MyxfMHgxMmRlMGI9XzB4MTJkZTBiO2xldCBfMHgzNWNiOTk9VyhfMHg0YTIzMWMpLF8weDI3ZmMxNT1fMHgzNWNiOTlbXzB4MTFkMmZkKDB4MWNiKV0sXzB4OWU0YzRkPV8weDM1Y2I5OVsndGltZVN0YW1wJ107Y2xhc3MgXzB4MzM4NzJme2NvbnN0cnVjdG9yKCl7dmFyIF8weDI1Nzc0Zj1fMHgxMWQyZmQ7dGhpc1tfMHgyNTc3NGYoMHgxZmEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbJ19udW1iZXJSZWdFeHAnXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MjU3NzRmKDB4MWFkKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1snX3VuZGVmaW5lZCddPV8weDRhMjMxY1tfMHgyNTc3NGYoMHgyNDApXSx0aGlzW18weDI1Nzc0ZigweDI1YSldPV8weDRhMjMxY1snSFRNTEFsbENvbGxlY3Rpb24nXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzW18weDI1Nzc0ZigweDI3NSldPU9iamVjdFtfMHgyNTc3NGYoMHgyNjIpXSx0aGlzWydfU3ltYm9sJ109XzB4NGEyMzFjWydTeW1ib2wnXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4MjU3NzRmKDB4MWEwKV1bJ3RvU3RyaW5nJ10sdGhpc1tfMHgyNTc3NGYoMHgxYzEpXT1EYXRlW18weDI1Nzc0ZigweDFhMCldW18weDI1Nzc0ZigweDFmZSldO31bXzB4MTFkMmZkKDB4MjNhKV0oXzB4MzgxMWNmLF8weDM1NjA2NCxfMHg0ZjJjMDQsXzB4MWVlZjIwKXt2YXIgXzB4NDQ5NzBjPV8weDExZDJmZCxfMHgyYzQyOGY9dGhpcyxfMHg0ZTliOTQ9XzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldO2Z1bmN0aW9uIF8weDU2YTlhNyhfMHg1NmVjYzYsXzB4NDUwMDlkLF8weDMwYWFlZSl7dmFyIF8weDRlMDA3NT1fMHg0NDk3MGM7XzB4NDUwMDlkWyd0eXBlJ109XzB4NGUwMDc1KDB4MWIyKSxfMHg0NTAwOWRbXzB4NGUwMDc1KDB4MjMwKV09XzB4NTZlY2M2W18weDRlMDA3NSgweDFiZSldLF8weDMwMzJiNj1fMHgzMGFhZWVbXzB4NGUwMDc1KDB4MWZjKV1bXzB4NGUwMDc1KDB4MjUzKV0sXzB4MzBhYWVlW18weDRlMDA3NSgweDFmYyldW18weDRlMDA3NSgweDI1MyldPV8weDQ1MDA5ZCxfMHgyYzQyOGZbXzB4NGUwMDc1KDB4MjE5KV0oXzB4NDUwMDlkLF8weDMwYWFlZSk7fXRyeXtfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc3KV0rKyxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4Mjc0KV0mJl8weDRmMmMwNFtfMHg0NDk3MGMoMHgyNDUpXVtfMHg0NDk3MGMoMHgxZjMpXShfMHgzNTYwNjQpO3ZhciBfMHg0ODM5YmQsXzB4NGI0ZjYxLF8weDFlYmZlMSxfMHgyNDRkODAsXzB4YmU0ZDlhPVtdLF8weGRmYWM3YT1bXSxfMHgxNzA1YWYsXzB4M2UzZTdmPXRoaXNbXzB4NDQ5NzBjKDB4MTlkKV0oXzB4MzU2MDY0KSxfMHgxYzM2ZmU9XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWM5KSxfMHgxM2I1MzY9ITB4MSxfMHg1YjE0OGI9XzB4M2UzZTdmPT09J2Z1bmN0aW9uJyxfMHg1NzUzODQ9dGhpc1tfMHg0NDk3MGMoMHgxYTcpXShfMHgzZTNlN2YpLF8weDM0MjUwYz10aGlzWydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDNlM2U3ZiksXzB4M2U4NWUwPV8weDU3NTM4NHx8XzB4MzQyNTBjLF8weDI1YzMzOT17fSxfMHgxNmUwMzY9MHgwLF8weDNjYzVmZD0hMHgxLF8weDMwMzJiNixfMHg4ZGMzMGM9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDRmMmMwNFtfMHg0NDk3MGMoMHgyMjApXSl7aWYoXzB4MWMzNmZlKXtpZihfMHg0YjRmNjE9XzB4MzU2MDY0W18weDQ0OTcwYygweDIwZCldLF8weDRiNGY2MT5fMHg0ZjJjMDRbJ2VsZW1lbnRzJ10pe2ZvcihfMHgxZWJmZTE9MHgwLF8weDI0NGQ4MD1fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWUyKV0sXzB4NDgzOWJkPV8weDFlYmZlMTtfMHg0ODM5YmQ8XzB4MjQ0ZDgwO18weDQ4MzliZCsrKV8weGRmYWM3YVsncHVzaCddKF8weDJjNDI4ZlsnX2FkZFByb3BlcnR5J10oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4NDgzOWJkLF8weDRmMmMwNCkpO18weDM4MTFjZltfMHg0NDk3MGMoMHgxY2YpXT0hMHgwO31lbHNle2ZvcihfMHgxZWJmZTE9MHgwLF8weDI0NGQ4MD1fMHg0YjRmNjEsXzB4NDgzOWJkPV8weDFlYmZlMTtfMHg0ODM5YmQ8XzB4MjQ0ZDgwO18weDQ4MzliZCsrKV8weGRmYWM3YVtfMHg0NDk3MGMoMHgxZjMpXShfMHgyYzQyOGZbXzB4NDQ5NzBjKDB4MjNjKV0oXzB4YmU0ZDlhLF8weDM1NjA2NCxfMHgzZTNlN2YsXzB4NDgzOWJkLF8weDRmMmMwNCkpO31fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MTk1KV0rPV8weGRmYWM3YVtfMHg0NDk3MGMoMHgyMGQpXTt9aWYoIShfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxZjcpfHxfMHgzZTNlN2Y9PT0ndW5kZWZpbmVkJykmJiFfMHg1NzUzODQmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDI2NikmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDE5NykmJl8weDNlM2U3ZiE9PV8weDQ0OTcwYygweDI0Yikpe3ZhciBfMHhiOTlmM2M9XzB4MWVlZjIwW18weDQ0OTcwYygweDI3MyldfHxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjczKV07aWYodGhpc1tfMHg0NDk3MGMoMHgyMTEpXShfMHgzNTYwNjQpPyhfMHg0ODM5YmQ9MHgwLF8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMzcpXShmdW5jdGlvbihfMHgxOWMxNmEpe3ZhciBfMHhiYWU1NWU9XzB4NDQ5NzBjO2lmKF8weDE2ZTAzNisrLF8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDE2ZTAzNj5fMHhiOTlmM2Mpe18weDNjYzVmZD0hMHgwO3JldHVybjt9aWYoIV8weDRmMmMwNFtfMHhiYWU1NWUoMHgyMjQpXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFtfMHhiYWU1NWUoMHgxOTUpXT5fMHg0ZjJjMDRbXzB4YmFlNTVlKDB4MWQ1KV0pe18weDNjYzVmZD0hMHgwO3JldHVybjt9XzB4ZGZhYzdhW18weGJhZTU1ZSgweDFmMyldKF8weDJjNDI4ZltfMHhiYWU1NWUoMHgyM2MpXShfMHhiZTRkOWEsXzB4MzU2MDY0LF8weGJhZTU1ZSgweDFiNCksXzB4NDgzOWJkKyssXzB4NGYyYzA0LGZ1bmN0aW9uKF8weDIzMmExNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDIzMmExNzt9O30oXzB4MTljMTZhKSkpO30pKTp0aGlzW18weDQ0OTcwYygweDFjYSldKF8weDM1NjA2NCkmJl8weDM1NjA2NFtfMHg0NDk3MGMoMHgyMzcpXShmdW5jdGlvbihfMHg0OWU1YTgsXzB4MTRiZjkyKXt2YXIgXzB4MjFjMjg5PV8weDQ0OTcwYztpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbXzB4MjFjMjg5KDB4MTk1KV0rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fWlmKCFfMHg0ZjJjMDRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFtfMHgyMWMyODkoMHgxOTUpXT5fMHg0ZjJjMDRbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgzY2M1ZmQ9ITB4MDtyZXR1cm47fXZhciBfMHg1Nzg1OGI9XzB4MTRiZjkyW18weDIxYzI4OSgweDFmZSldKCk7XzB4NTc4NThiW18weDIxYzI4OSgweDIwZCldPjB4NjQmJihfMHg1Nzg1OGI9XzB4NTc4NThiW18weDIxYzI4OSgweDFhNSldKDB4MCwweDY0KStfMHgyMWMyODkoMHgxZDkpKSxfMHhkZmFjN2FbXzB4MjFjMjg5KDB4MWYzKV0oXzB4MmM0MjhmW18weDIxYzI4OSgweDIzYyldKF8weGJlNGQ5YSxfMHgzNTYwNjQsXzB4MjFjMjg5KDB4MWU0KSxfMHg1Nzg1OGIsXzB4NGYyYzA0LGZ1bmN0aW9uKF8weDMxMWMzOCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMxMWMzODt9O30oXzB4NDllNWE4KSkpO30pLCFfMHgxM2I1MzYpe3RyeXtmb3IoXzB4MTcwNWFmIGluIF8weDM1NjA2NClpZighKF8weDFjMzZmZSYmXzB4OGRjMzBjWyd0ZXN0J10oXzB4MTcwNWFmKSkmJiF0aGlzW18weDQ0OTcwYygweDIwZSldKF8weDM1NjA2NCxfMHgxNzA1YWYsXzB4NGYyYzA0KSl7aWYoXzB4MTZlMDM2KyssXzB4NGYyYzA0W18weDQ0OTcwYygweDE5NSldKyssXzB4MTZlMDM2Pl8weGI5OWYzYyl7XzB4M2NjNWZkPSEweDA7YnJlYWs7fWlmKCFfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjI0KV0mJl8weDRmMmMwNFsnYXV0b0V4cGFuZCddJiZfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4NGYyYzA0W18weDQ0OTcwYygweDFkNSldKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9XzB4ZGZhYzdhW18weDQ0OTcwYygweDFmMyldKF8weDJjNDI4ZlsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4YmU0ZDlhLF8weDI1YzMzOSxfMHgzNTYwNjQsXzB4M2UzZTdmLF8weDE3MDVhZixfMHg0ZjJjMDQpKTt9fWNhdGNoe31pZihfMHgyNWMzMzlbXzB4NDQ5NzBjKDB4MjJmKV09ITB4MCxfMHg1YjE0OGImJihfMHgyNWMzMzlbJ19wX25hbWUnXT0hMHgwKSwhXzB4M2NjNWZkKXt2YXIgXzB4OWUzMT1bXVtfMHg0NDk3MGMoMHgyNWMpXSh0aGlzW18weDQ0OTcwYygweDI3NSldKF8weDM1NjA2NCkpW18weDQ0OTcwYygweDI1YyldKHRoaXNbXzB4NDQ5NzBjKDB4MjFlKV0oXzB4MzU2MDY0KSk7Zm9yKF8weDQ4MzliZD0weDAsXzB4NGI0ZjYxPV8weDllMzFbXzB4NDQ5NzBjKDB4MjBkKV07XzB4NDgzOWJkPF8weDRiNGY2MTtfMHg0ODM5YmQrKylpZihfMHgxNzA1YWY9XzB4OWUzMVtfMHg0ODM5YmRdLCEoXzB4MWMzNmZlJiZfMHg4ZGMzMGNbXzB4NDQ5NzBjKDB4MjJjKV0oXzB4MTcwNWFmW18weDQ0OTcwYygweDFmZSldKCkpKSYmIXRoaXNbXzB4NDQ5NzBjKDB4MjBlKV0oXzB4MzU2MDY0LF8weDE3MDVhZixfMHg0ZjJjMDQpJiYhXzB4MjVjMzM5W18weDQ0OTcwYygweDFhMSkrXzB4MTcwNWFmW18weDQ0OTcwYygweDFmZSldKCldKXtpZihfMHgxNmUwMzYrKyxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgxNmUwMzY+XzB4Yjk5ZjNjKXtfMHgzY2M1ZmQ9ITB4MDticmVhazt9aWYoIV8weDRmMmMwNFtfMHg0NDk3MGMoMHgyMjQpXSYmXzB4NGYyYzA0WydhdXRvRXhwYW5kJ10mJl8weDRmMmMwNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWQ1KV0pe18weDNjYzVmZD0hMHgwO2JyZWFrO31fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MWYzKV0oXzB4MmM0MjhmW18weDQ0OTcwYygweDI1NyldKF8weGJlNGQ5YSxfMHgyNWMzMzksXzB4MzU2MDY0LF8weDNlM2U3ZixfMHgxNzA1YWYsXzB4NGYyYzA0KSk7fX19fX1pZihfMHgzODExY2ZbJ3R5cGUnXT1fMHgzZTNlN2YsXzB4M2U4NWUwPyhfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWQzKV09XzB4MzU2MDY0W18weDQ0OTcwYygweDIyZCldKCksdGhpc1tfMHg0NDk3MGMoMHgxZGMpXShfMHgzZTNlN2YsXzB4MzgxMWNmLF8weDRmMmMwNCxfMHgxZWVmMjApKTpfMHgzZTNlN2Y9PT0nZGF0ZSc/XzB4MzgxMWNmWyd2YWx1ZSddPXRoaXNbXzB4NDQ5NzBjKDB4MWMxKV1bJ2NhbGwnXShfMHgzNTYwNjQpOl8weDNlM2U3Zj09PV8weDQ0OTcwYygweDI0Yik/XzB4MzgxMWNmW18weDQ0OTcwYygweDFkMyldPV8weDM1NjA2NFtfMHg0NDk3MGMoMHgxZmUpXSgpOl8weDNlM2U3Zj09PSdSZWdFeHAnP18weDM4MTFjZlsndmFsdWUnXT10aGlzW18weDQ0OTcwYygweDFlOSldW18weDQ0OTcwYygweDIxZCldKF8weDM1NjA2NCk6XzB4M2UzZTdmPT09XzB4NDQ5NzBjKDB4MWVmKSYmdGhpc1tfMHg0NDk3MGMoMHgxYmIpXT9fMHgzODExY2ZbXzB4NDQ5NzBjKDB4MWQzKV09dGhpc1snX1N5bWJvbCddW18weDQ0OTcwYygweDFhMCldW18weDQ0OTcwYygweDFmZSldW18weDQ0OTcwYygweDIxZCldKF8weDM1NjA2NCk6IV8weDRmMmMwNFsnZGVwdGgnXSYmIShfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgxZjcpfHxfMHgzZTNlN2Y9PT1fMHg0NDk3MGMoMHgyNDApKSYmKGRlbGV0ZSBfMHgzODExY2ZbJ3ZhbHVlJ10sXzB4MzgxMWNmWydjYXBwZWQnXT0hMHgwKSxfMHgzY2M1ZmQmJihfMHgzODExY2ZbXzB4NDQ5NzBjKDB4MjM0KV09ITB4MCksXzB4MzAzMmI2PV8weDRmMmMwNFtfMHg0NDk3MGMoMHgxZmMpXVtfMHg0NDk3MGMoMHgyNTMpXSxfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MWZjKV1bXzB4NDQ5NzBjKDB4MjUzKV09XzB4MzgxMWNmLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzODExY2YsXzB4NGYyYzA0KSxfMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV0pe2ZvcihfMHg0ODM5YmQ9MHgwLF8weDRiNGY2MT1fMHhkZmFjN2FbXzB4NDQ5NzBjKDB4MjBkKV07XzB4NDgzOWJkPF8weDRiNGY2MTtfMHg0ODM5YmQrKylfMHhkZmFjN2FbXzB4NDgzOWJkXShfMHg0ODM5YmQpO31fMHhiZTRkOWFbJ2xlbmd0aCddJiYoXzB4MzgxMWNmW18weDQ0OTcwYygweDI3MyldPV8weGJlNGQ5YSk7fWNhdGNoKF8weDM3MGQ0NCl7XzB4NTZhOWE3KF8weDM3MGQ0NCxfMHgzODExY2YsXzB4NGYyYzA0KTt9cmV0dXJuIHRoaXNbXzB4NDQ5NzBjKDB4MjY5KV0oXzB4MzU2MDY0LF8weDM4MTFjZiksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MzgxMWNmLF8weDRmMmMwNCksXzB4NGYyYzA0W18weDQ0OTcwYygweDFmYyldW18weDQ0OTcwYygweDI1MyldPV8weDMwMzJiNixfMHg0ZjJjMDRbJ2xldmVsJ10tLSxfMHg0ZjJjMDRbJ2F1dG9FeHBhbmQnXT1fMHg0ZTliOTQsXzB4NGYyYzA0W18weDQ0OTcwYygweDI3NCldJiZfMHg0ZjJjMDRbXzB4NDQ5NzBjKDB4MjQ1KV1bXzB4NDQ5NzBjKDB4MWUwKV0oKSxfMHgzODExY2Y7fVtfMHgxMWQyZmQoMHgyMWUpXShfMHg0OGI3ZDYpe3ZhciBfMHgzZGUzMDc9XzB4MTFkMmZkO3JldHVybiBPYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddP09iamVjdFtfMHgzZGUzMDcoMHgyMWEpXShfMHg0OGI3ZDYpOltdO31bXzB4MTFkMmZkKDB4MjExKV0oXzB4Mzc2M2U0KXt2YXIgXzB4NTViOGExPV8weDExZDJmZDtyZXR1cm4hIShfMHgzNzYzZTQmJl8weDRhMjMxY1tfMHg1NWI4YTEoMHgxYjQpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4Mzc2M2U0KT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHgzNzYzZTRbXzB4NTViOGExKDB4MjM3KV0pO31bXzB4MTFkMmZkKDB4MjBlKV0oXzB4NDc2OWU0LF8weDQ4Y2Y3OSxfMHg1YTQyZTgpe3ZhciBfMHgyOGMwMTQ9XzB4MTFkMmZkO3JldHVybiBfMHg1YTQyZThbXzB4MjhjMDE0KDB4MjI3KV0/dHlwZW9mIF8weDQ3NjllNFtfMHg0OGNmNzldPT1fMHgyOGMwMTQoMHgxYmQpOiEweDE7fVsnX3R5cGUnXShfMHg0OWRmZGQpe3ZhciBfMHg1NTE3M2E9XzB4MTFkMmZkLF8weDkxMjI5Mj0nJztyZXR1cm4gXzB4OTEyMjkyPXR5cGVvZiBfMHg0OWRmZGQsXzB4OTEyMjkyPT09XzB4NTUxNzNhKDB4MTk4KT90aGlzW18weDU1MTczYSgweDFhYSldKF8weDQ5ZGZkZCk9PT1fMHg1NTE3M2EoMHgxZTYpP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgxYzkpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQ5ZGZkZCk9PT0nW29iamVjdFxcXFx4MjBEYXRlXSc/XzB4OTEyMjkyPSdkYXRlJzp0aGlzW18weDU1MTczYSgweDFhYSldKF8weDQ5ZGZkZCk9PT1fMHg1NTE3M2EoMHgyNDIpP18weDkxMjI5Mj1fMHg1NTE3M2EoMHgyNGIpOl8weDQ5ZGZkZD09PW51bGw/XzB4OTEyMjkyPV8weDU1MTczYSgweDFmNyk6XzB4NDlkZmRkW18weDU1MTczYSgweDI3MCldJiYoXzB4OTEyMjkyPV8weDQ5ZGZkZFsnY29uc3RydWN0b3InXVtfMHg1NTE3M2EoMHgyMDYpXXx8XzB4OTEyMjkyKTpfMHg5MTIyOTI9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHg1NTE3M2EoMHgyNWEpXSYmXzB4NDlkZmRkIGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHg5MTIyOTI9XzB4NTUxNzNhKDB4MjE3KSksXzB4OTEyMjkyO31bXzB4MTFkMmZkKDB4MWFhKV0oXzB4NDNkNDE0KXt2YXIgXzB4NTdkZTQwPV8weDExZDJmZDtyZXR1cm4gT2JqZWN0W18weDU3ZGU0MCgweDFhMCldW18weDU3ZGU0MCgweDFmZSldW18weDU3ZGU0MCgweDIxZCldKF8weDQzZDQxNCk7fVtfMHgxMWQyZmQoMHgxYTcpXShfMHhjZGFlYjcpe3ZhciBfMHgxOTIzMzQ9XzB4MTFkMmZkO3JldHVybiBfMHhjZGFlYjc9PT0nYm9vbGVhbid8fF8weGNkYWViNz09PV8weDE5MjMzNCgweDFkYSl8fF8weGNkYWViNz09PSdudW1iZXInO31bXzB4MTFkMmZkKDB4MThjKV0oXzB4NWNhMjdmKXt2YXIgXzB4MzQ2MDc4PV8weDExZDJmZDtyZXR1cm4gXzB4NWNhMjdmPT09J0Jvb2xlYW4nfHxfMHg1Y2EyN2Y9PT1fMHgzNDYwNzgoMHgyNjYpfHxfMHg1Y2EyN2Y9PT1fMHgzNDYwNzgoMHgyMmEpO31bXzB4MTFkMmZkKDB4MjNjKV0oXzB4MWI4NzA2LF8weDQ4MTllMSxfMHg0ZWUzZmIsXzB4NWE3YTcwLF8weDEwN2IwNSxfMHg0ZWE2ZTEpe3ZhciBfMHg1ZDdlMjI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MmI1ODBiKXt2YXIgXzB4NDcyOTBmPV8weDM3ZTQsXzB4ZmNjMTdhPV8weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgyNTMpXSxfMHgxOTRkMzA9XzB4MTA3YjA1W18weDQ3MjkwZigweDFmYyldW18weDQ3MjkwZigweDE5MSldLF8weDFmZWRmZD1fMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bJ3BhcmVudCddO18weDEwN2IwNVtfMHg0NzI5MGYoMHgxZmMpXVtfMHg0NzI5MGYoMHgyMzgpXT1fMHhmY2MxN2EsXzB4MTA3YjA1Wydub2RlJ11bXzB4NDcyOTBmKDB4MTkxKV09dHlwZW9mIF8weDVhN2E3MD09J251bWJlcic/XzB4NWE3YTcwOl8weDJiNTgwYixfMHgxYjg3MDZbXzB4NDcyOTBmKDB4MWYzKV0oXzB4NWQ3ZTIyW18weDQ3MjkwZigweDI2NyldKF8weDQ4MTllMSxfMHg0ZWUzZmIsXzB4NWE3YTcwLF8weDEwN2IwNSxfMHg0ZWE2ZTEpKSxfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bJ3BhcmVudCddPV8weDFmZWRmZCxfMHgxMDdiMDVbXzB4NDcyOTBmKDB4MWZjKV1bXzB4NDcyOTBmKDB4MTkxKV09XzB4MTk0ZDMwO307fVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MTY1ODhiLF8weDExY2VhNyxfMHgxM2I2ZWYsXzB4MzgwMzEwLF8weDFjMDFkNCxfMHg0ZDRiNmIsXzB4N2ZlY2E2KXt2YXIgXzB4MjQzZTUwPV8weDExZDJmZCxfMHg0NGFiYmE9dGhpcztyZXR1cm4gXzB4MTFjZWE3W18weDI0M2U1MCgweDFhMSkrXzB4MWMwMWQ0W18weDI0M2U1MCgweDFmZSldKCldPSEweDAsZnVuY3Rpb24oXzB4MWY0ZDUxKXt2YXIgXzB4NGJkYzFmPV8weDI0M2U1MCxfMHg0NGQyODM9XzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDI1MyldLF8weDRmYjgyOD1fMHg0ZDRiNmJbXzB4NGJkYzFmKDB4MWZjKV1bXzB4NGJkYzFmKDB4MTkxKV0sXzB4MzE2OWQ3PV8weDRkNGI2Ylsnbm9kZSddW18weDRiZGMxZigweDIzOCldO18weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVsncGFyZW50J109XzB4NDRkMjgzLF8weDRkNGI2YltfMHg0YmRjMWYoMHgxZmMpXVtfMHg0YmRjMWYoMHgxOTEpXT1fMHgxZjRkNTEsXzB4MTY1ODhiWydwdXNoJ10oXzB4NDRhYmJhW18weDRiZGMxZigweDI2NyldKF8weDEzYjZlZixfMHgzODAzMTAsXzB4MWMwMWQ0LF8weDRkNGI2YixfMHg3ZmVjYTYpKSxfMHg0ZDRiNmJbJ25vZGUnXVtfMHg0YmRjMWYoMHgyMzgpXT1fMHgzMTY5ZDcsXzB4NGQ0YjZiW18weDRiZGMxZigweDFmYyldW18weDRiZGMxZigweDE5MSldPV8weDRmYjgyODt9O31bXzB4MTFkMmZkKDB4MjY3KV0oXzB4MmVlMmY5LF8weDUwNGM2MyxfMHgyYmU4MzksXzB4NWQ0YmZlLF8weDQ2Njc3Mil7dmFyIF8weDI4MGY2ZT1fMHgxMWQyZmQsXzB4YzZhZmUwPXRoaXM7XzB4NDY2NzcyfHwoXzB4NDY2NzcyPWZ1bmN0aW9uKF8weGU3ZmRmLF8weDQ0MTk0Zil7cmV0dXJuIF8weGU3ZmRmW18weDQ0MTk0Zl07fSk7dmFyIF8weDI5ODEwMz1fMHgyYmU4MzlbXzB4MjgwZjZlKDB4MWZlKV0oKSxfMHgyOGY1OTQ9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIxMCldfHx7fSxfMHg1Yzc5YTg9XzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldLF8weDIwYmViYz1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjI0KV07dHJ5e3ZhciBfMHgyN2YxNTM9dGhpc1tfMHgyODBmNmUoMHgxY2EpXShfMHgyZWUyZjkpLF8weDE0MTc4YT1fMHgyOTgxMDM7XzB4MjdmMTUzJiZfMHgxNDE3OGFbMHgwXT09PSdcXFxceDI3JyYmKF8weDE0MTc4YT1fMHgxNDE3OGFbJ3N1YnN0ciddKDB4MSxfMHgxNDE3OGFbXzB4MjgwZjZlKDB4MjBkKV0tMHgyKSk7dmFyIF8weDEyNjM3MT1fMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjEwKV09XzB4MjhmNTk0WydfcF8nK18weDE0MTc4YV07XzB4MTI2MzcxJiYoXzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyMCldPV8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXSsweDEpLF8weDVkNGJmZVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MTI2MzcxO3ZhciBfMHgyMzk1Nzk9dHlwZW9mIF8weDJiZTgzOT09XzB4MjgwZjZlKDB4MWVmKSxfMHgyMDc1YjU9eyduYW1lJzpfMHgyMzk1Nzl8fF8weDI3ZjE1Mz9fMHgyOTgxMDM6dGhpc1tfMHgyODBmNmUoMHgyNzEpXShfMHgyOTgxMDMpfTtpZihfMHgyMzk1NzkmJihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWVmKV09ITB4MCksIShfMHg1MDRjNjM9PT0nYXJyYXknfHxfMHg1MDRjNjM9PT1fMHgyODBmNmUoMHgxYTYpKSl7dmFyIF8weDNkMmQ4ZT10aGlzW18weDI4MGY2ZSgweDI1ZCldKF8weDJlZTJmOSxfMHgyYmU4MzkpO2lmKF8weDNkMmQ4ZSYmKF8weDNkMmQ4ZVtfMHgyODBmNmUoMHgxOTkpXSYmKF8weDIwNzViNVtfMHgyODBmNmUoMHgyNWUpXT0hMHgwKSxfMHgzZDJkOGVbXzB4MjgwZjZlKDB4MjM5KV0mJiFfMHgxMjYzNzEmJiFfMHg1ZDRiZmVbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWM2KV09ITB4MCx0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUpLF8weDIwNzViNTt9dmFyIF8weDIxNmYzNTt0cnl7XzB4MjE2ZjM1PV8weDQ2Njc3MihfMHgyZWUyZjksXzB4MmJlODM5KTt9Y2F0Y2goXzB4NTBmNTU4KXtyZXR1cm4gXzB4MjA3NWI1PXsnbmFtZSc6XzB4Mjk4MTAzLCd0eXBlJzpfMHgyODBmNmUoMHgxYjIpLCdlcnJvcic6XzB4NTBmNTU4W18weDI4MGY2ZSgweDFiZSldfSx0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUpLF8weDIwNzViNTt9dmFyIF8weDRkYzI0OT10aGlzW18weDI4MGY2ZSgweDE5ZCldKF8weDIxNmYzNSksXzB4NWU4NjNhPXRoaXNbXzB4MjgwZjZlKDB4MWE3KV0oXzB4NGRjMjQ5KTtpZihfMHgyMDc1YjVbXzB4MjgwZjZlKDB4MWY5KV09XzB4NGRjMjQ5LF8weDVlODYzYSl0aGlzW18weDI4MGY2ZSgweDFkMCldKF8weDIwNzViNSxfMHg1ZDRiZmUsXzB4MjE2ZjM1LGZ1bmN0aW9uKCl7dmFyIF8weDVjYTQwZj1fMHgyODBmNmU7XzB4MjA3NWI1W18weDVjYTQwZigweDFkMyldPV8weDIxNmYzNVtfMHg1Y2E0MGYoMHgyMmQpXSgpLCFfMHgxMjYzNzEmJl8weGM2YWZlMFtfMHg1Y2E0MGYoMHgxZGMpXShfMHg0ZGMyNDksXzB4MjA3NWI1LF8weDVkNGJmZSx7fSk7fSk7ZWxzZXt2YXIgXzB4MWU1NGRiPV8weDVkNGJmZVsnYXV0b0V4cGFuZCddJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4Mjc3KV08XzB4NWQ0YmZlW18weDI4MGY2ZSgweDI2OCldJiZfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjQ1KV1bXzB4MjgwZjZlKDB4MjM2KV0oXzB4MjE2ZjM1KTwweDAmJl8weDRkYzI0OSE9PV8weDI4MGY2ZSgweDFiZCkmJl8weDVkNGJmZVtfMHgyODBmNmUoMHgxOTUpXTxfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MWQ1KV07XzB4MWU1NGRifHxfMHg1ZDRiZmVbJ2xldmVsJ108XzB4NWM3OWE4fHxfMHgxMjYzNzE/KHRoaXNbXzB4MjgwZjZlKDB4MjNhKV0oXzB4MjA3NWI1LF8weDIxNmYzNSxfMHg1ZDRiZmUsXzB4MTI2MzcxfHx7fSksdGhpc1tfMHgyODBmNmUoMHgyNjkpXShfMHgyMTZmMzUsXzB4MjA3NWI1KSk6dGhpc1tfMHgyODBmNmUoMHgxZDApXShfMHgyMDc1YjUsXzB4NWQ0YmZlLF8weDIxNmYzNSxmdW5jdGlvbigpe3ZhciBfMHg1MTk1MDQ9XzB4MjgwZjZlO18weDRkYzI0OT09PV8weDUxOTUwNCgweDFmNyl8fF8weDRkYzI0OT09PV8weDUxOTUwNCgweDI0MCl8fChkZWxldGUgXzB4MjA3NWI1W18weDUxOTUwNCgweDFkMyldLF8weDIwNzViNVtfMHg1MTk1MDQoMHgyM2YpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDIwNzViNTt9ZmluYWxseXtfMHg1ZDRiZmVbXzB4MjgwZjZlKDB4MjEwKV09XzB4MjhmNTk0LF8weDVkNGJmZVtfMHgyODBmNmUoMHgyMjApXT1fMHg1Yzc5YTgsXzB4NWQ0YmZlW18weDI4MGY2ZSgweDIyNCldPV8weDIwYmViYzt9fVsnX2NhcElmU3RyaW5nJ10oXzB4M2ZjNmNlLF8weDQ3OGI2MSxfMHgxMTM1MWUsXzB4M2ViMTA5KXt2YXIgXzB4NDViYjdjPV8weDExZDJmZCxfMHgxOTYyMjM9XzB4M2ViMTA5WydzdHJMZW5ndGgnXXx8XzB4MTEzNTFlWydzdHJMZW5ndGgnXTtpZigoXzB4M2ZjNmNlPT09J3N0cmluZyd8fF8weDNmYzZjZT09PV8weDQ1YmI3YygweDI2NikpJiZfMHg0NzhiNjFbXzB4NDViYjdjKDB4MWQzKV0pe2xldCBfMHg1ODMyZGQ9XzB4NDc4YjYxW18weDQ1YmI3YygweDFkMyldW18weDQ1YmI3YygweDIwZCldO18weDExMzUxZVtfMHg0NWJiN2MoMHgxZGQpXSs9XzB4NTgzMmRkLF8weDExMzUxZVsnYWxsU3RyTGVuZ3RoJ10+XzB4MTEzNTFlW18weDQ1YmI3YygweDFlYildPyhfMHg0NzhiNjFbXzB4NDViYjdjKDB4MjNmKV09JycsZGVsZXRlIF8weDQ3OGI2MVsndmFsdWUnXSk6XzB4NTgzMmRkPl8weDE5NjIyMyYmKF8weDQ3OGI2MVtfMHg0NWJiN2MoMHgyM2YpXT1fMHg0NzhiNjFbXzB4NDViYjdjKDB4MWQzKV1bJ3N1YnN0ciddKDB4MCxfMHgxOTYyMjMpLGRlbGV0ZSBfMHg0NzhiNjFbJ3ZhbHVlJ10pO319W18weDExZDJmZCgweDFjYSldKF8weDM2ZWE1OCl7dmFyIF8weDRlMTg1Mz1fMHgxMWQyZmQ7cmV0dXJuISEoXzB4MzZlYTU4JiZfMHg0YTIzMWNbXzB4NGUxODUzKDB4MWU0KV0mJnRoaXNbXzB4NGUxODUzKDB4MWFhKV0oXzB4MzZlYTU4KT09PV8weDRlMTg1MygweDIzMykmJl8weDM2ZWE1OFtfMHg0ZTE4NTMoMHgyMzcpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDg4OWQwOCl7dmFyIF8weDJhOWUwZj1fMHgxMWQyZmQ7aWYoXzB4ODg5ZDA4W18weDJhOWUwZigweDI0YSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg4ODlkMDg7dmFyIF8weDViZTlmMzt0cnl7XzB4NWJlOWYzPUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDg4OWQwOCk7fWNhdGNoe18weDViZTlmMz0nXFxcXHgyMicrdGhpc1tfMHgyYTllMGYoMHgxYWEpXShfMHg4ODlkMDgpKydcXFxceDIyJzt9cmV0dXJuIF8weDViZTlmM1snbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDViZTlmMz1fMHg1YmU5ZjNbJ3N1YnN0ciddKDB4MSxfMHg1YmU5ZjNbXzB4MmE5ZTBmKDB4MjBkKV0tMHgyKTpfMHg1YmU5ZjM9XzB4NWJlOWYzW18weDJhOWUwZigweDI2MCldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbJ3JlcGxhY2UnXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg1YmU5ZjM7fVtfMHgxMWQyZmQoMHgxZDApXShfMHgyMjNjMzgsXzB4ZWUzNzhlLF8weGNlZDk4NixfMHg0ODAzYzIpe3ZhciBfMHg4NDgwYWU9XzB4MTFkMmZkO3RoaXNbXzB4ODQ4MGFlKDB4MjE5KV0oXzB4MjIzYzM4LF8weGVlMzc4ZSksXzB4NDgwM2MyJiZfMHg0ODAzYzIoKSx0aGlzW18weDg0ODBhZSgweDI2OSldKF8weGNlZDk4NixfMHgyMjNjMzgpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDIyM2MzOCxfMHhlZTM3OGUpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgxM2MwMTEsXzB4MzFmYzdjKXt2YXIgXzB4Mzk0ZTgxPV8weDExZDJmZDt0aGlzW18weDM5NGU4MSgweDFlYSldKF8weDEzYzAxMSxfMHgzMWZjN2MpLHRoaXNbXzB4Mzk0ZTgxKDB4MjIzKV0oXzB4MTNjMDExLF8weDMxZmM3YyksdGhpc1tfMHgzOTRlODEoMHgxOTIpXShfMHgxM2MwMTEsXzB4MzFmYzdjKSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MTNjMDExLF8weDMxZmM3Yyk7fVtfMHgxMWQyZmQoMHgxZWEpXShfMHgxMTVjNWMsXzB4MWM4MzU1KXt9W18weDExZDJmZCgweDIyMyldKF8weDU0YmJjZSxfMHgxNzljZjQpe31bXzB4MTFkMmZkKDB4MWIwKV0oXzB4NDc5NTkwLF8weDI1OGRkZSl7fVtfMHgxMWQyZmQoMHgxYTgpXShfMHgzMGQ1NzEpe3ZhciBfMHgzYzM2YmY9XzB4MTFkMmZkO3JldHVybiBfMHgzMGQ1NzE9PT10aGlzW18weDNjMzZiZigweDI0ZildO31bXzB4MTFkMmZkKDB4MWQ4KV0oXzB4MWU0OThlLF8weDQyNTE3OCl7dmFyIF8weDU1Mzg5Yj1fMHgxMWQyZmQ7dGhpc1tfMHg1NTM4OWIoMHgxYjApXShfMHgxZTQ5OGUsXzB4NDI1MTc4KSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDFlNDk4ZSksXzB4NDI1MTc4W18weDU1Mzg5YigweDI0OSldJiZ0aGlzWydfc29ydFByb3BzJ10oXzB4MWU0OThlKSx0aGlzW18weDU1Mzg5YigweDIxOCldKF8weDFlNDk4ZSxfMHg0MjUxNzgpLHRoaXNbJ19hZGRMb2FkTm9kZSddKF8weDFlNDk4ZSxfMHg0MjUxNzgpLHRoaXNbXzB4NTUzODliKDB4MTliKV0oXzB4MWU0OThlKTt9WydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NDQ2YzMzLF8weDUxMDBlMSl7dmFyIF8weGE2MTJkND1fMHgxMWQyZmQ7bGV0IF8weDRjMTcxYzt0cnl7XzB4NGEyMzFjW18weGE2MTJkNCgweDI1NildJiYoXzB4NGMxNzFjPV8weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXVtfMHhhNjEyZDQoMHgyMzApXSxfMHg0YTIzMWNbXzB4YTYxMmQ0KDB4MjU2KV1bXzB4YTYxMmQ0KDB4MjMwKV09ZnVuY3Rpb24oKXt9KSxfMHg0NDZjMzMmJnR5cGVvZiBfMHg0NDZjMzNbXzB4YTYxMmQ0KDB4MjBkKV09PV8weGE2MTJkNCgweDFlMykmJihfMHg1MTAwZTFbJ2xlbmd0aCddPV8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMGQpXSk7fWNhdGNoe31maW5hbGx5e18weDRjMTcxYyYmKF8weDRhMjMxY1tfMHhhNjEyZDQoMHgyNTYpXVtfMHhhNjEyZDQoMHgyMzApXT1fMHg0YzE3MWMpO31pZihfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWY5KV09PT1fMHhhNjEyZDQoMHgxZTMpfHxfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWY5KV09PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldKSlfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWJmKV09ITB4MCxkZWxldGUgXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldO2Vsc2Ugc3dpdGNoKF8weDUxMDBlMVsndmFsdWUnXSl7Y2FzZSBOdW1iZXJbXzB4YTYxMmQ0KDB4MjUyKV06XzB4NTEwMGUxW18weGE2MTJkNCgweDIyZSldPSEweDAsZGVsZXRlIF8weDUxMDBlMVsndmFsdWUnXTticmVhaztjYXNlIE51bWJlcltfMHhhNjEyZDQoMHgxY2UpXTpfMHg1MTAwZTFbXzB4YTYxMmQ0KDB4MWJjKV09ITB4MCxkZWxldGUgXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4YTYxMmQ0KDB4MjAyKV0oXzB4NTEwMGUxW18weGE2MTJkNCgweDFkMyldKSYmKF8weDUxMDBlMVtfMHhhNjEyZDQoMHgxZWUpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NTEwMGUxW18weGE2MTJkNCgweDFmOSldPT09XzB4YTYxMmQ0KDB4MWJkKSYmdHlwZW9mIF8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXT09J3N0cmluZycmJl8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXSYmXzB4NTEwMGUxWyduYW1lJ10mJl8weDQ0NmMzM1snbmFtZSddIT09XzB4NTEwMGUxW18weGE2MTJkNCgweDIwNildJiYoXzB4NTEwMGUxW18weGE2MTJkNCgweDFiMyldPV8weDQ0NmMzM1tfMHhhNjEyZDQoMHgyMDYpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4NTljOWJhKXtyZXR1cm4gMHgxL18weDU5YzliYT09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9Wydfc29ydFByb3BzJ10oXzB4MTk0YjIyKXt2YXIgXzB4NDg5NzYyPV8weDExZDJmZDshXzB4MTk0YjIyWydwcm9wcyddfHwhXzB4MTk0YjIyW18weDQ4OTc2MigweDI3MyldW18weDQ4OTc2MigweDIwZCldfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxYzkpfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxZTQpfHxfMHgxOTRiMjJbXzB4NDg5NzYyKDB4MWY5KV09PT1fMHg0ODk3NjIoMHgxYjQpfHxfMHgxOTRiMjJbJ3Byb3BzJ11bXzB4NDg5NzYyKDB4MjRkKV0oZnVuY3Rpb24oXzB4NTc1MGYxLF8weDJlYjczOCl7dmFyIF8weDc2ZjhhYz1fMHg0ODk3NjIsXzB4NWIyYmI4PV8weDU3NTBmMVtfMHg3NmY4YWMoMHgyMDYpXVtfMHg3NmY4YWMoMHgyNGUpXSgpLF8weDRhNGY4Zj1fMHgyZWI3MzhbXzB4NzZmOGFjKDB4MjA2KV1bJ3RvTG93ZXJDYXNlJ10oKTtyZXR1cm4gXzB4NWIyYmI4PF8weDRhNGY4Zj8tMHgxOl8weDViMmJiOD5fMHg0YTRmOGY/MHgxOjB4MDt9KTt9W18weDExZDJmZCgweDIxOCldKF8weDFjNTY5MixfMHg1OTQxZDIpe3ZhciBfMHg2ZGRjNjM9XzB4MTFkMmZkO2lmKCEoXzB4NTk0MWQyW18weDZkZGM2MygweDIyNyldfHwhXzB4MWM1NjkyW18weDZkZGM2MygweDI3MyldfHwhXzB4MWM1NjkyWydwcm9wcyddWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4Mzk3ODE4PVtdLF8weDFiYjBkNj1bXSxfMHhjZjYzZjk9MHgwLF8weDUyMmFlZD1fMHgxYzU2OTJbXzB4NmRkYzYzKDB4MjczKV1bXzB4NmRkYzYzKDB4MjBkKV07XzB4Y2Y2M2Y5PF8weDUyMmFlZDtfMHhjZjYzZjkrKyl7dmFyIF8weDViNjZlYT1fMHgxYzU2OTJbJ3Byb3BzJ11bXzB4Y2Y2M2Y5XTtfMHg1YjY2ZWFbXzB4NmRkYzYzKDB4MWY5KV09PT1fMHg2ZGRjNjMoMHgxYmQpP18weDM5NzgxOFtfMHg2ZGRjNjMoMHgxZjMpXShfMHg1YjY2ZWEpOl8weDFiYjBkNltfMHg2ZGRjNjMoMHgxZjMpXShfMHg1YjY2ZWEpO31pZighKCFfMHgxYmIwZDZbJ2xlbmd0aCddfHxfMHgzOTc4MThbXzB4NmRkYzYzKDB4MjBkKV08PTB4MSkpe18weDFjNTY5MltfMHg2ZGRjNjMoMHgyNzMpXT1fMHgxYmIwZDY7dmFyIF8weDRkOGVmZD17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzOTc4MTh9O3RoaXNbXzB4NmRkYzYzKDB4MWVhKV0oXzB4NGQ4ZWZkLF8weDU5NDFkMiksdGhpc1tfMHg2ZGRjNjMoMHgxYjApXShfMHg0ZDhlZmQsXzB4NTk0MWQyKSx0aGlzW18weDZkZGM2MygweDI0MyldKF8weDRkOGVmZCksdGhpc1tfMHg2ZGRjNjMoMHgxZjgpXShfMHg0ZDhlZmQsXzB4NTk0MWQyKSxfMHg0ZDhlZmRbJ2lkJ10rPSdcXFxceDIwZicsXzB4MWM1NjkyWydwcm9wcyddW18weDZkZGM2MygweDIwNyldKF8weDRkOGVmZCk7fX19W18weDExZDJmZCgweDFlMSldKF8weDFjN2FkMCxfMHgyOTdiNmQpe31bXzB4MTFkMmZkKDB4MjQzKV0oXzB4MmY1MDg3KXt9W18weDExZDJmZCgweDI1NSldKF8weDQwMTY5OCl7dmFyIF8weDNmZGI5MT1fMHgxMWQyZmQ7cmV0dXJuIEFycmF5W18weDNmZGI5MSgweDFhYyldKF8weDQwMTY5OCl8fHR5cGVvZiBfMHg0MDE2OTg9PV8weDNmZGI5MSgweDE5OCkmJnRoaXNbXzB4M2ZkYjkxKDB4MWFhKV0oXzB4NDAxNjk4KT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc7fVtfMHgxMWQyZmQoMHgxZjgpXShfMHgxNTIxNjIsXzB4MWVkNTc0KXt9W18weDExZDJmZCgweDE5YildKF8weDE2MTI1Myl7dmFyIF8weDY3OWEwYz1fMHgxMWQyZmQ7ZGVsZXRlIF8weDE2MTI1M1tfMHg2NzlhMGMoMHgyMWYpXSxkZWxldGUgXzB4MTYxMjUzWydfaGFzU2V0T25JdHNQYXRoJ10sZGVsZXRlIF8weDE2MTI1M1tfMHg2NzlhMGMoMHgxZmQpXTt9W18weDExZDJmZCgweDE5MildKF8weDQzYTkxYyxfMHg0YjFjZWYpe319bGV0IF8weDE2OThkYT1uZXcgXzB4MzM4NzJmKCksXzB4NDMzNmQ4PXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDUwNzM2OD17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDIzYzJiZShfMHgxOWZjZDIsXzB4NDUzNDUxLF8weDE4MWI2ZCxfMHgyYTA4YjMsXzB4NGI0MzRlLF8weDU0MTg1ZCl7dmFyIF8weDkyMTBkNT1fMHgxMWQyZmQ7bGV0IF8weDViNDRmMCxfMHgzNjcxNWI7dHJ5e18weDM2NzE1Yj1fMHg5ZTRjNGQoKSxfMHg1YjQ0ZjA9XzB4MmUwYjgzW18weDQ1MzQ1MV0sIV8weDViNDRmMHx8XzB4MzY3MTViLV8weDViNDRmMFsndHMnXT4weDFmNCYmXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildJiZfMHg1YjQ0ZjBbJ3RpbWUnXS9fMHg1YjQ0ZjBbXzB4OTIxMGQ1KDB4MjI2KV08MHg2ND8oXzB4MmUwYjgzW18weDQ1MzQ1MV09XzB4NWI0NGYwPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MzY3MTVifSxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV09e30pOl8weDM2NzE1Yi1fMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bJ3RzJ10+MHgzMiYmXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDIyNildJiZfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MWFlKV0vXzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldWydjb3VudCddPDB4NjQmJihfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV09e30pO2xldCBfMHg3MjkzYTA9W10sXzB4MzYyOTZiPV8weDViNDRmMFsncmVkdWNlTGltaXRzJ118fF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYjYpXT9fMHg1MDczNjg6XzB4NDMzNmQ4LF8weDI0N2JlYj1fMHgyMTdhNDc9Pnt2YXIgXzB4NGE4OWEyPV8weDkyMTBkNTtsZXQgXzB4NTQxNDU0PXt9O3JldHVybiBfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjczKV09XzB4MjE3YTQ3W18weDRhODlhMigweDI3MyldLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZTIpXT1fMHgyMTdhNDdbXzB4NGE4OWEyKDB4MWUyKV0sXzB4NTQxNDU0W18weDRhODlhMigweDIxYildPV8weDIxN2E0N1tfMHg0YTg5YTIoMHgyMWIpXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWViKV09XzB4MjE3YTQ3W18weDRhODlhMigweDFlYildLF8weDU0MTQ1NFsnYXV0b0V4cGFuZExpbWl0J109XzB4MjE3YTQ3WydhdXRvRXhwYW5kTGltaXQnXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjY4KV09XzB4MjE3YTQ3WydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjQ5KV09ITB4MSxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjI3KV09IV8weDM5ZTU4YixfMHg1NDE0NTRbJ2RlcHRoJ109MHgxLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgyNzcpXT0weDAsXzB4NTQxNDU0W18weDRhODlhMigweDE4YSldPSdyb290X2V4cF9pZCcsXzB4NTQxNDU0W18weDRhODlhMigweDFjMyldPV8weDRhODlhMigweDFjMiksXzB4NTQxNDU0WydhdXRvRXhwYW5kJ109ITB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjQ1KV09W10sXzB4NTQxNDU0W18weDRhODlhMigweDE5NSldPTB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MjZmKV09ITB4MCxfMHg1NDE0NTRbXzB4NGE4OWEyKDB4MWRkKV09MHgwLF8weDU0MTQ1NFtfMHg0YTg5YTIoMHgxZmMpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHg1NDE0NTQ7fTtmb3IodmFyIF8weDQwYzg0OT0weDA7XzB4NDBjODQ5PF8weDRiNDM0ZVtfMHg5MjEwZDUoMHgyMGQpXTtfMHg0MGM4NDkrKylfMHg3MjkzYTBbJ3B1c2gnXShfMHgxNjk4ZGFbXzB4OTIxMGQ1KDB4MjNhKV0oeyd0aW1lTm9kZSc6XzB4MTlmY2QyPT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4NGI0MzRlW18weDQwYzg0OV0sXzB4MjQ3YmViKF8weDM2Mjk2Yikse30pKTtpZihfMHgxOWZjZDI9PT1fMHg5MjEwZDUoMHgxYWIpKXtsZXQgXzB4NGI0ZTllPUVycm9yW18weDkyMTBkNSgweDIyOSldO3RyeXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109MHgxLzB4MCxfMHg3MjkzYTBbXzB4OTIxMGQ1KDB4MWYzKV0oXzB4MTY5OGRhW18weDkyMTBkNSgweDIzYSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg5MjEwZDUoMHgxOTMpXSxfMHgyNDdiZWIoXzB4MzYyOTZiKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHg5MjEwZDUoMHgyMjkpXT1fMHg0YjRlOWU7fX1yZXR1cm57J21ldGhvZCc6XzB4OTIxMGQ1KDB4MWNkKSwndmVyc2lvbic6XzB4MTJkZTBiLCdhcmdzJzpbeyd0cyc6XzB4MTgxYjZkLCdzZXNzaW9uJzpfMHgyYTA4YjMsJ2FyZ3MnOl8weDcyOTNhMCwnaWQnOl8weDQ1MzQ1MSwnY29udGV4dCc6XzB4NTQxODVkfV19O31jYXRjaChfMHgzYzRmY2Qpe3JldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4MTJkZTBiLCdhcmdzJzpbeyd0cyc6XzB4MTgxYjZkLCdzZXNzaW9uJzpfMHgyYTA4YjMsJ2FyZ3MnOlt7J3R5cGUnOl8weDkyMTBkNSgweDFiMiksJ2Vycm9yJzpfMHgzYzRmY2QmJl8weDNjNGZjZFtfMHg5MjEwZDUoMHgxYmUpXX1dLCdpZCc6XzB4NDUzNDUxLCdjb250ZXh0JzpfMHg1NDE4NWR9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDViNDRmMCYmXzB4MzY3MTViKXtsZXQgXzB4MzljMDRlPV8weDllNGM0ZCgpO18weDViNDRmMFtfMHg5MjEwZDUoMHgyMjYpXSsrLF8weDViNDRmMFsndGltZSddKz1fMHgyN2ZjMTUoXzB4MzY3MTViLF8weDM5YzA0ZSksXzB4NWI0NGYwWyd0cyddPV8weDM5YzA0ZSxfMHgyZTBiODNbXzB4OTIxMGQ1KDB4MjA4KV1bXzB4OTIxMGQ1KDB4MjI2KV0rKyxfMHgyZTBiODNbJ2hpdHMnXVtfMHg5MjEwZDUoMHgxYWUpXSs9XzB4MjdmYzE1KF8weDM2NzE1YixfMHgzOWMwNGUpLF8weDJlMGI4M1snaGl0cyddWyd0cyddPV8weDM5YzA0ZSwoXzB4NWI0NGYwW18weDkyMTBkNSgweDIyNildPjB4MzJ8fF8weDViNDRmMFsndGltZSddPjB4NjQpJiYoXzB4NWI0NGYwW18weDkyMTBkNSgweDFiNildPSEweDApLChfMHgyZTBiODNbJ2hpdHMnXVsnY291bnQnXT4weDNlOHx8XzB4MmUwYjgzW18weDkyMTBkNSgweDIwOCldW18weDkyMTBkNSgweDFhZSldPjB4MTJjKSYmKF8weDJlMGI4M1tfMHg5MjEwZDUoMHgyMDgpXVtfMHg5MjEwZDUoMHgxYjYpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyM2MyYmU7fSgoXzB4NGIwMGQ4LF8weDU1NzhmMSxfMHgzZWQyYTcsXzB4MzBlYWFiLF8weDIxMzI5NSxfMHg1Nzg4OGIsXzB4NGQyODhhLF8weDJmZTg5NCxfMHgzY2ZhNmEsXzB4MjZkMWQ0KT0+e3ZhciBfMHgxOTk4ZDM9XzB4MWY3ZmUxO2lmKF8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyMzIpXSlyZXR1cm4gXzB4NGIwMGQ4WydfY29uc29sZV9uaW5qYSddO2lmKCFKKF8weDRiMDBkOCxfMHgyZmU4OTQsXzB4MjEzMjk1KSlyZXR1cm4gXzB4NGIwMGQ4WydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV07bGV0IF8weDFlYzhjOD1XKF8weDRiMDBkOCksXzB4MWEzYzdmPV8weDFlYzhjOFsnZWxhcHNlZCddLF8weDQxY2Y2YT1fMHgxZWM4YzhbXzB4MTk5OGQzKDB4MjNkKV0sXzB4MjQ3MDYwPV8weDFlYzhjOFtfMHgxOTk4ZDMoMHgyNTEpXSxfMHgxZDNjNDU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1NjgzYmU9WShfMHg0YjAwZDgsXzB4M2NmYTZhLF8weDFkM2M0NSxfMHg1Nzg4OGIpLF8weDNlMjQ4Zj1fMHgxMDM5MmY9PntfMHgxZDNjNDVbJ3RzJ11bXzB4MTAzOTJmXT1fMHg0MWNmNmEoKTt9LF8weDJlYmJlNz0oXzB4MWEwMmM4LF8weDQzMjdjMSk9Pnt2YXIgXzB4MTU5NWEzPV8weDE5OThkMztsZXQgXzB4NDgwMTFiPV8weDFkM2M0NVsndHMnXVtfMHg0MzI3YzFdO2lmKGRlbGV0ZSBfMHgxZDNjNDVbJ3RzJ11bXzB4NDMyN2MxXSxfMHg0ODAxMWIpe2xldCBfMHg0NDFmZWM9XzB4MWEzYzdmKF8weDQ4MDExYixfMHg0MWNmNmEoKSk7XzB4MzQxYWRmKF8weDU2ODNiZShfMHgxNTk1YTMoMHgxYWUpLF8weDFhMDJjOCxfMHgyNDcwNjAoKSxfMHgzZTAwZmMsW18weDQ0MWZlY10sXzB4NDMyN2MxKSk7fX0sXzB4NjY1MzAxPV8weDQwOTU1Mz0+XzB4MmE4ZDk2PT57dmFyIF8weDM1YjJhYT1fMHgxOTk4ZDM7dHJ5e18weDNlMjQ4ZihfMHgyYThkOTYpLF8weDQwOTU1MyhfMHgyYThkOTYpO31maW5hbGx5e18weDRiMDBkOFsnY29uc29sZSddW18weDM1YjJhYSgweDFhZSldPV8weDQwOTU1Mzt9fSxfMHgxNDYyMTU9XzB4NWFhNTkxPT5fMHg0NGI4YzA9Pnt2YXIgXzB4YzViNmUzPV8weDE5OThkMzt0cnl7bGV0IFtfMHg0ZWIxYjYsXzB4MTU0YWRjXT1fMHg0NGI4YzBbXzB4YzViNmUzKDB4MWY2KV0oXzB4YzViNmUzKDB4MjU5KSk7XzB4MmViYmU3KF8weDE1NGFkYyxfMHg0ZWIxYjYpLF8weDVhYTU5MShfMHg0ZWIxYjYpO31maW5hbGx5e18weDRiMDBkOFtfMHhjNWI2ZTMoMHgyNTYpXVsndGltZUVuZCddPV8weDVhYTU5MTt9fTtfMHg0YjAwZDhbXzB4MTk5OGQzKDB4MjMyKV09eydjb25zb2xlTG9nJzooXzB4MjM5M2Y4LF8weDUxYmU2Mik9Pnt2YXIgXzB4NTExNTFiPV8weDE5OThkMztfMHg0YjAwZDhbXzB4NTExNTFiKDB4MjU2KV1bXzB4NTExNTFiKDB4MWNkKV1bXzB4NTExNTFiKDB4MjA2KV0hPT0nZGlzYWJsZWRMb2cnJiZfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDUxMTUxYigweDFjZCksXzB4MjM5M2Y4LF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHg1MWJlNjIpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgxMTkzNjksXzB4NDQyMDMxKT0+e3ZhciBfMHg1OTRjODA9XzB4MTk5OGQzO18weDRiMDBkOFtfMHg1OTRjODAoMHgyNTYpXVtfMHg1OTRjODAoMHgxY2QpXVsnbmFtZSddIT09J2Rpc2FibGVkVHJhY2UnJiZfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDU5NGM4MCgweDFhYiksXzB4MTE5MzY5LF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHg0NDIwMzEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MzJlZGYwPV8weDE5OThkMztfMHg0YjAwZDhbXzB4MzJlZGYwKDB4MjU2KV1bXzB4MzJlZGYwKDB4MWFlKV09XzB4NjY1MzAxKF8weDRiMDBkOFtfMHgzMmVkZjAoMHgyNTYpXVtfMHgzMmVkZjAoMHgxYWUpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weGNlYjdhOT1fMHgxOTk4ZDM7XzB4NGIwMGQ4W18weGNlYjdhOSgweDI1NildW18weGNlYjdhOSgweDFhMildPV8weDE0NjIxNShfMHg0YjAwZDhbJ2NvbnNvbGUnXVsndGltZUVuZCddKTt9LCdhdXRvTG9nJzooXzB4NTYxMDIxLF8weDMzNDNhNik9Pnt2YXIgXzB4OTkyNTNmPV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDk5MjUzZigweDFjZCksXzB4MzM0M2E2LF8weDI0NzA2MCgpLF8weDNlMDBmYyxbXzB4NTYxMDIxXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4MTRkZjYyLF8weDFhY2E4NSk9Pnt2YXIgXzB4NGU5OTM0PV8weDE5OThkMztfMHgzNDFhZGYoXzB4NTY4M2JlKF8weDRlOTkzNCgweDFjZCksXzB4MTRkZjYyLF8weDI0NzA2MCgpLF8weDNlMDBmYyxfMHgxYWNhODUpKTt9LCdhdXRvVHJhY2UnOihfMHgxOWYzM2IsXzB4NDljZjVjKT0+e3ZhciBfMHgzOGFiYTU9XzB4MTk5OGQzO18weDM0MWFkZihfMHg1NjgzYmUoXzB4MzhhYmE1KDB4MWFiKSxfMHg0OWNmNWMsXzB4MjQ3MDYwKCksXzB4M2UwMGZjLFtfMHgxOWYzM2JdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weGNkOTk2MixfMHgzYWRiYzApPT57dmFyIF8weDQwYTdhYT1fMHgxOTk4ZDM7XzB4MzQxYWRmKF8weDU2ODNiZShfMHg0MGE3YWEoMHgxYWIpLF8weGNkOTk2MixfMHgyNDcwNjAoKSxfMHgzZTAwZmMsXzB4M2FkYmMwKSk7fSwnYXV0b1RpbWUnOihfMHgxZTFmZDcsXzB4MmU1NDI5LF8weDJjY2IwMik9PntfMHgzZTI0OGYoXzB4MmNjYjAyKTt9LCdhdXRvVGltZUVuZCc6KF8weDJlMzhlNixfMHgxNDFiZjgsXzB4ZGMzM2IyKT0+e18weDJlYmJlNyhfMHgxNDFiZjgsXzB4ZGMzM2IyKTt9LCdjb3ZlcmFnZSc6XzB4Mjk4ZjM3PT57dmFyIF8weDIzODBiMj1fMHgxOTk4ZDM7XzB4MzQxYWRmKHsnbWV0aG9kJzpfMHgyMzgwYjIoMHgxZGUpLCd2ZXJzaW9uJzpfMHg1Nzg4OGIsJ2FyZ3MnOlt7J2lkJzpfMHgyOThmMzd9XX0pO319O2xldCBfMHgzNDFhZGY9YihfMHg0YjAwZDgsXzB4NTU3OGYxLF8weDNlZDJhNyxfMHgzMGVhYWIsXzB4MjEzMjk1LF8weDI2ZDFkNCksXzB4M2UwMGZjPV8weDRiMDBkOFtfMHgxOTk4ZDMoMHgyNmUpXTtyZXR1cm4gXzB4NGIwMGQ4W18weDE5OThkMygweDIzMildO30pKGdsb2JhbFRoaXMsXzB4MWY3ZmUxKDB4MjEzKSxfMHgxZjdmZTEoMHgyMGMpLF8weDFmN2ZlMSgweDFkNyksXzB4MWY3ZmUxKDB4MjA5KSwnMS4wLjAnLF8weDFmN2ZlMSgweDE4ZSksW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJka20tZGVza3RvcFxcXCIsXFxcIjE5Mi4xNjguMS4xMDFcXFwiXSxfMHgxZjdmZTEoMHgxYWYpLF8weDFmN2ZlMSgweDFiMSkpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRMb2NhbGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBsZXQgcGFydHMgPSBmb3JtYXRTdHJcbiAgICAubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCJwXCIgfHwgZmlyc3RDaGFyYWN0ZXIgPT09IFwiUFwiKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBcIidcIiB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogdHJ1ZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICB9KTtcblxuICAvLyBpbnZva2UgbG9jYWxpemUgcHJlcHJvY2Vzc29yIChvbmx5IGZvciBmcmVuY2ggbG9jYWxlcyBhdCB0aGUgbW9tZW50KVxuICBpZiAobG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3Nvcikge1xuICAgIHBhcnRzID0gbG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3NvcihvcmlnaW5hbERhdGUsIHBhcnRzKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgcmV0dXJuIHBhcnRzXG4gICAgLm1hcCgocGFydCkgPT4ge1xuICAgICAgaWYgKCFwYXJ0LmlzVG9rZW4pIHJldHVybiBwYXJ0LnZhbHVlO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHBhcnQudmFsdWU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pKSB8fFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSlcbiAgICAgICkge1xuICAgICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbdG9rZW5bMF1dO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlcihvcmlnaW5hbERhdGUsIHRva2VuLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICBjb25zdCBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGUsIHN0YXJ0T2ZZZWFyKF9kYXRlKSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheU9mWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mSVNPV2VlayhfZGF0ZSkgLSArc3RhcnRPZklTT1dlZWtZZWFyKF9kYXRlKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRm9ybWF0TG9uZ0ZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4ubWpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5tanNcIjtcbmltcG9ydCB7IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==