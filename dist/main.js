/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Aldrich&family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-color: rgb(21, 101, 121);\n  --grey-color: rgba(201, 199, 199, 0.525);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 0.3fr 5fr 0.2fr;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main main\"\n    \"footer footer footer\";\n  letter-spacing: 0.5px;\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--primary-color);\n  color: rgb(255, 255, 255);\n}\n\n.header h1 {\n  margin-left: 20px;\n  font-size: 2.3rem;\n}\n\n.topics {\n  grid-area: sidebar;\n  padding: 30px;\n  background-color: var(--grey-color);\n}\n\n.nav-topic-title h2 {\n  font-size: 2rem;\n}\n\n\n.nav-content {\n  display: flex;\n  gap: 10px;\n}\n\n#topic-title {\n  padding: 10px;\n  margin: 6px 0;\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 6px;\n}\n\n#topic-title:focus {\n  outline: 1px solid var(--primary-color);\n}\n\n#add-topic,\n.add-task {\n  display: flex;\n  align-items: center;\n  background-color: var(--primary-color);\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  font-size: 1rem;\n  margin: 6px 0px;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n#add-topic:hover,\n.add-task:hover {\n  background-color: #0d7685;\n}\n\n#add-topic i {\n  margin-right: 8px;\n}\n\n.topic-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  font-weight: 300;\n  border-radius: 6px;\n}\n\n.nav-topics div {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 6px;\n}\n\n.nav-topics div:hover {\n  background-color: rgb(204, 204, 204);\n}\n\n.todo-list-cont {\n  grid-area: main;\n  justify-self: center;\n  margin-top: 30px;\n  width: 65%;\n}\n\n.topic-header-cont {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--primary-color);\n  margin-bottom: 30px;\n}\n\n\n.task-input-cont {\n  width: 300px;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 20px;\n  margin-top: 10px;\n  gap: 15px;\n  border: 2px solid var(--primary-color);\n  border-radius: 10px;\n}\n\n.task-input-cont input,\ntextarea{\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  outline: 1px solid var(--primary-color);\n}\n\n.task-input-cont .fa-window-close,\n.task-input-cont .fa-check-square{\n  align-self: flex-end;\n}\n\n.task-input-cont i {\n  cursor: pointer;\n  font-size: 1.8rem;\n  color: var(--primary-color);\n}\n\n.task-input-cont i:hover {\n  color: green;\n}\n\n.task-input-cont .fa-window-close:hover,\n.right-task-cont i:hover {\n  color: red;\n}\n\n.task-div {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 6px;\n}\n\n.task-div:hover {\n  background-color: var(--grey-color);\n}\n\n.left-task-cont,\n.right-task-cont {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.descrip-div{\n  margin-top: -5px;\n  padding-left:40px;\n  font-size: 0.9rem;\n  color:rgb(82, 81, 81);\n\n}\n.hide{\n  display: none;\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary-color);\n  color: rgb(255, 255, 255);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayUi.js":
/*!**************************!*\
  !*** ./src/displayUi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeTaskInput: () => (/* binding */ closeTaskInput),\n/* harmony export */   createTopicCont: () => (/* binding */ createTopicCont),\n/* harmony export */   displayTask: () => (/* binding */ displayTask),\n/* harmony export */   displayTaskInput: () => (/* binding */ displayTaskInput),\n/* harmony export */   displayTopicsBtn: () => (/* binding */ displayTopicsBtn),\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   list: () => (/* binding */ list),\n/* harmony export */   removeTaskUI: () => (/* binding */ removeTaskUI),\n/* harmony export */   removeTopicUI: () => (/* binding */ removeTopicUI),\n/* harmony export */   showAddTaskBtn: () => (/* binding */ showAddTaskBtn)\n/* harmony export */ });\n/* harmony import */ var _topicList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topicList */ \"./src/topicList.js\");\n/* harmony import */ var _eventsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventsHandler */ \"./src/eventsHandler.js\");\n\n\n\nconst list = new _topicList__WEBPACK_IMPORTED_MODULE_0__.TopicList();\n\nfunction initialize() {\n  const inBoxBtn = document.querySelector(\"[data-name='Inbox']\");\n  inBoxBtn.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleTopicsBtn);\n\n  const listItems = list.getTopicList();\n  const topic = listItems.find((item) => item.title === \"Inbox\");\n  \n  createTopicCont(topic)\n\n  const addTopicBtn = document.getElementById(\"add-topic\");\n  addTopicBtn.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.addTop);\n}\n\nfunction createElementWithAttribute(elementType, attribute, attributeName) {\n  const element = document.createElement(elementType);\n  element.setAttribute(attribute, attributeName);\n  return element;\n}\n\nfunction displayTopicsBtn(title) {\n  const topicName = title;\n\n  const topicListNav = document.querySelector(\".nav-topics\");\n\n  const topicItem = createElementWithAttribute(\"div\", \"data-name\", topicName);\n  topicItem.setAttribute(\"class\", \"topic-item\");\n\n  const topicTitleIcon = document.createElement(\"Div\");\n  const topicIcon = createElementWithAttribute(\"i\", \"class\", \"fas fa-list\");\n  const topicTitle = createElementWithAttribute(\"div\", \"data-name\", topicName);\n\n  const trashDiv = document.createElement(\"div\");\n  const trashIcon = createElementWithAttribute(\"i\", \"data-name\", topicName);\n  trashIcon.classList.add(\"far\", \"fa-trash-alt\");\n\n  topicTitle.textContent = title;\n\n  topicTitleIcon.appendChild(topicIcon);\n  topicTitleIcon.appendChild(topicTitle);\n  trashDiv.appendChild(trashIcon);\n  topicItem.appendChild(topicTitleIcon);\n  topicItem.appendChild(trashDiv);\n  topicListNav.appendChild(topicItem);\n\n  topicTitle.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleTopicsBtn);\n  trashIcon.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.delTopic);\n}\n\nfunction createTopicCont(topic) {\n  const todoCont = document.querySelector(\".todo-list-cont\");\n\n  const topicHeaderContainer = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"topic-header-cont\",\n  );\n\n  const topicTitle = createElementWithAttribute(\"h1\", \"class\", \"topic-title\");\n  topicTitle.textContent = topic.title;\n\n  const topicBodyCont = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"topic-body-cont\",\n  );\n  const taskCont = createElementWithAttribute(\"div\", \"class\", \"task-cont\");\n\n  const displayTaskDiv = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"display-task-div\",\n  );\n  const displayTaskBtnCont = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"add-task\",\n  );\n  const displayTaskBtn = createElementWithAttribute(\"i\", \"class\", \"fa fa-plus\");\n  const displayTaskText = createElementWithAttribute(\n    \"span\",\n    \"class\",\n    \"add-task-text\",\n  );\n  displayTaskText.textContent = \"Add Task\";\n\n  todoCont.innerHTML = \"\";\n\n  \n  displayTaskBtnCont.appendChild(displayTaskBtn);\n  displayTaskBtnCont.appendChild(displayTaskText);\n  topicHeaderContainer.appendChild(topicTitle);\n  topicHeaderContainer.appendChild(displayTaskBtnCont)\n  topicBodyCont.appendChild(displayTaskDiv);\n  topicBodyCont.appendChild(taskCont);\n  todoCont.appendChild(topicHeaderContainer);\n  todoCont.appendChild(topicBodyCont);\n\n  displayTasks(topic);\n  \n  displayTaskBtnCont.addEventListener(\"click\", displayTaskInput);\n}\n\nfunction displayTasks(topic) {\n  const taskList = topic.getTaskList();\n  taskList.forEach((task) => {\n    displayTask(task.title, task.description, task.dueDate);\n  });\n}\n\nfunction removeTopicUI(dataName) {\n  const topicItem = document.querySelector(`[data-name='${dataName}']`);\n  topicItem.remove();\n}\n\nfunction removeTaskUI(dataName) {\n  const task = document.querySelector(`[data-name='${dataName}']`);\n  task.remove();\n}\n\nfunction hideAddTaskBtn() {\n  const displayTaskBtnCont = document.querySelector(\".add-task\");\n  displayTaskBtnCont.style.display = \"none\";\n}\n\nfunction displayTaskInput() {\n  hideAddTaskBtn();\n\n  const displayTaskDiv = document.querySelector(\".display-task-div\");\n  \n  const taskInputCont = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"task-input-cont\",\n  );\n\n  const taskTitleInput = createElementWithAttribute(\n    \"input\",\n    \"id\",\n    \"task-title-input\",\n  );\n  taskTitleInput.type = \"text\";\n  taskTitleInput.setAttribute(\"placeholder\", \"Enter a title\");\n  \n  const taskDescripInput = createElementWithAttribute(\n    \"textarea\",\n    \"id\",\n    \"task-descrip-input\"\n  )\n\n  taskDescripInput.setAttribute(\"placeholder\", \"Enter a description\");\n\n  const taskDueDate = createElementWithAttribute(\n    \"input\",\n    \"id\",\n    \"task-date-input\",\n  );\n  taskDueDate.type = \"date\";\n  \n  \n  const addTaskBtn = createElementWithAttribute(\n    \"i\",\n    \"class\",\n    \"fa fa-check-square\",\n  );\n  const closeTaskInputBtn = createElementWithAttribute(\n    \"i\",\n    \"class\",\n    \"fa fa-window-close\",\n  );\n  \n  displayTaskDiv.appendChild(taskInputCont);\n  taskInputCont.appendChild(closeTaskInputBtn);\n  taskInputCont.appendChild(taskTitleInput);\n  taskInputCont.appendChild(taskDescripInput);\n  taskInputCont.appendChild(taskDueDate);\n  taskInputCont.appendChild(addTaskBtn);\n  \n\n  addTaskBtn.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleAddTasks);\n  closeTaskInputBtn.addEventListener(\"click\", closeTaskInput);\n}\n\nfunction displayTask(title, description, dueDate) {\n  const taskCont = document.querySelector(\".task-cont\");\n\n  const taskDiv = createElementWithAttribute(\"div\", \"class\", \"task-div\");\n  taskDiv.setAttribute(\"data-name\", title);\n \n  const leftTaskCont = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"left-task-cont\",\n  );\n \n  const checkboxIcon = document.createElement(\"i\");\n  checkboxIcon.className = \"far fa-square\";\n  checkboxIcon.setAttribute(\"data-name\", title);\n\n  const taskTitle = createElementWithAttribute(\"div\", \"class\", \"task-title\");\n  taskTitle.textContent = title;\n  taskTitle.setAttribute(\"data-name\", title);\n\n  const rightTaskCont = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"right-task-cont\",\n  );\n\n  const taskDueDate = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"task-dueDate\",\n  );\n  taskDueDate.textContent = dueDate;\n\n  const delTask = createElementWithAttribute(\"i\", \"class\", \"fas fa-times\");\n  delTask.setAttribute(\"data-name\", title);\n\n  const descriptionDiv = createElementWithAttribute(\n    \"div\",\n    \"class\",\n    \"descrip-div\"\n  )\n  descriptionDiv.classList.add(\"hide\");\n  descriptionDiv.setAttribute(\"data-name\", title)\n  descriptionDiv.textContent = description;\n\n  taskCont.appendChild(taskDiv);\n  taskCont.appendChild(descriptionDiv)\n  leftTaskCont.appendChild(checkboxIcon);\n  leftTaskCont.appendChild(taskTitle);\n  \n  rightTaskCont.appendChild(taskDueDate);\n  rightTaskCont.appendChild(delTask);\n  taskDiv.appendChild(leftTaskCont);\n  taskDiv.appendChild(rightTaskCont);\n\n  delTask.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.deleteTask);\n\n  checkboxIcon.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.checkboxHandler);\n\n  taskCont.addEventListener(\"dblclick\",_eventsHandler__WEBPACK_IMPORTED_MODULE_1__.toggleDescription)\n};\n\nfunction showAddTaskBtn() {\n  const displayTaskBtnCont = document.querySelector(\".add-task\");\n  displayTaskBtnCont.style.display = \"flex\";\n};\n\nfunction closeTaskInput() {\n  const taskInputCont = document.querySelector(\".task-input-cont\");\n  taskInputCont.remove();\n  showAddTaskBtn()\n};\n\n\n//# sourceURL=webpack://todo-list/./src/displayUi.js?");

/***/ }),

/***/ "./src/eventsHandler.js":
/*!******************************!*\
  !*** ./src/eventsHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTop: () => (/* binding */ addTop),\n/* harmony export */   checkboxHandler: () => (/* binding */ checkboxHandler),\n/* harmony export */   delTopic: () => (/* binding */ delTopic),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   handleAddTasks: () => (/* binding */ handleAddTasks),\n/* harmony export */   handleTopicsBtn: () => (/* binding */ handleTopicsBtn),\n/* harmony export */   toggleDescription: () => (/* binding */ toggleDescription)\n/* harmony export */ });\n/* harmony import */ var _displayUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayUi */ \"./src/displayUi.js\");\n\n\nfunction handleTopicsBtn(e) {\n  const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n  const dataName = e.target.getAttribute(\"data-name\");\n  const topic = listItems.find((item) => item.title === dataName);\n  const todoCont = document.querySelector(\".todo-list-cont\");\n  const existingTopic = todoCont.querySelector(\"h1\");\n  \n  if (existingTopic === null || existingTopic.textContent !== topic.title) {\n    (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.createTopicCont)(topic);\n  };\n};\n\nfunction addTop() {\n  const titleInput = document.getElementById(\"topic-title\");\n  \n  const title = titleInput.value;\n  \n  const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n  const repeatedTitle = listItems.find((topic) => topic.title === title);\n\n  if (title === \"\") {\n    alert(\"The topic title can't be empty!\");\n    return;\n  };\n  if (repeatedTitle) {\n    alert(\"The topics must have different names!\");\n    return;\n  };\n  _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.addTopic(title);\n\n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.displayTopicsBtn)(title);\n\n  titleInput.value = \"\";\n};\nfunction clearTodoListContainer() {\n  const todoCont = document.querySelector(\".todo-list-cont\");\n  todoCont.innerHTML = \"\";\n}\n\nfunction delTopic(e) {\n  const dataName = e.target.getAttribute(\"data-name\");\n  const displayedTopicTitle = document.querySelector(\".topic-title\")?.textContent;\n\n  _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.removeTopic(dataName);\n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.removeTopicUI)(dataName);\n\n  if (dataName === displayedTopicTitle) {\n    clearTodoListContainer();\n  };\n  \n};\n\nfunction handleAddTasks() {\n  const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n\n  const dataName = document.querySelector(\".topic-title\").textContent;\n\n  const topic = listItems.find((topic) => topic.title === dataName);\n\n  const title = document.getElementById(\"task-title-input\").value;\n  const description = document.getElementById(\"task-descrip-input\").value;\n  const dueDate = document.getElementById(\"task-date-input\").value;\n\n  const taskList = topic.getTaskList();\n  const repeatedTitle = taskList.find((task) => task.title === title);\n\n  if (title === \"\") {\n    alert(\"The task title can't be empty!\");\n    return;\n  };\n  if (repeatedTitle) {\n    alert(\"The tasks must have different names!\");\n    return;\n  };\n  if (\n    new Date(dueDate) < new Date() &&\n    new Date(dueDate).toDateString() !== new Date().toDateString()\n  ) {\n    alert(\"The due date can't be earlier than the current date!\");\n    return;\n  };\n \n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.showAddTaskBtn)();\n  topic.addTask(title,description, dueDate);\n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.displayTask)(title, description,dueDate);\n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.closeTaskInput)();\n};\n\nfunction deleteTask(e) {\n  const dataName = e.target.getAttribute(\"data-name\");\n  const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n  const topicTitle = document.querySelector(\".topic-title\").textContent;\n  const topic = listItems.find((topicItem) => topicItem.title === topicTitle);\n  const taskList = topic.getTaskList();\n  const task = taskList.find((taskItem) => taskItem.title === dataName);\n  const descriptionDiv = document.querySelector(`.descrip-div[data-name=\"${dataName}\"]`);\n  descriptionDiv.remove();\n  topic.removeTask(task.title);\n  (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.removeTaskUI)(dataName);\n};\n\nfunction toggleDescription(e){\n  const dataName = e.target.getAttribute(\"data-name\");\n \n  const descriptionDiv = document.querySelector(`.descrip-div[data-name=\"${dataName}\"]`)\n\n  if( descriptionDiv.classList.contains(\"hide\")){\n    descriptionDiv.classList.remove(\"hide\")\n  }else{\n    descriptionDiv.classList.add(\"hide\")\n  };\n};\n\nfunction checkboxHandler(event) {\n  const { target } = event;\n  if (target.classList.contains(\"fa-square\")) {\n    target.classList.remove(\"fa-square\");\n    target.classList.add(\"fa-check-square\");\n  } else if (target.classList.contains(\"fa-check-square\")) {\n    target.classList.remove(\"fa-check-square\");\n    target.classList.add(\"fa-square\");\n  };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/eventsHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayUi */ \"./src/displayUi.js\");\n\n\n\n\n\n(0,_displayUi__WEBPACK_IMPORTED_MODULE_1__.initialize)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate) {\n    this.title = title,\n    this.description = description,\n    this.dueDate = dueDate\n  }\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/topic.js":
/*!**********************!*\
  !*** ./src/topic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Topic: () => (/* binding */ Topic)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\nclass Topic {\n  constructor(title) {\n    this.title = title;\n    this.taskList = [];\n  }\n\n  addTask(title, description, dueDate) {\n    const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate);\n    this.taskList.push(task);\n    return task;\n  }\n\n  removeTask(taskToRemove) {\n    this.taskList.forEach((task, i) => {\n      if (task.title === taskToRemove) {\n        this.taskList.splice(i, 1);\n      }\n    });\n  }\n\n  getTaskList() {\n    return this.taskList;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/topic.js?");

/***/ }),

/***/ "./src/topicList.js":
/*!**************************!*\
  !*** ./src/topicList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TopicList: () => (/* binding */ TopicList)\n/* harmony export */ });\n/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic */ \"./src/topic.js\");\n\n\nclass TopicList {\n  constructor() {\n    this.topicList = [new _topic__WEBPACK_IMPORTED_MODULE_0__.Topic(\"Inbox\")];\n  };\n\n  addTopic(title) {\n    if (title !== \"\") {\n      this.topicList.push(new _topic__WEBPACK_IMPORTED_MODULE_0__.Topic(title));\n    };\n  };\n\n  removeTopic(topicToRemove) {\n    this.topicList.forEach((topic, i) => {\n      if (topic.title === topicToRemove) {\n        this.topicList.splice(i, 1);\n      }\n    });\n  };\n\n  getTopicList() {\n    return this.topicList;\n  }\n};\n\n\n//# sourceURL=webpack://todo-list/./src/topicList.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;