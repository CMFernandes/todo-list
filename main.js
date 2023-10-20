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

/***/ "./src/displayUi.js":
/*!**************************!*\
  !*** ./src/displayUi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTask: () => (/* binding */ displayTask),\n/* harmony export */   displayTaskInput: () => (/* binding */ displayTaskInput),\n/* harmony export */   displayTopic: () => (/* binding */ displayTopic),\n/* harmony export */   displayTopicsBtn: () => (/* binding */ displayTopicsBtn),\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   list: () => (/* binding */ list),\n/* harmony export */   removeTopicUI: () => (/* binding */ removeTopicUI)\n/* harmony export */ });\n/* harmony import */ var _topicList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topicList */ \"./src/topicList.js\");\n/* harmony import */ var _eventsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventsHandler */ \"./src/eventsHandler.js\");\n\n\n\nconst list = new _topicList__WEBPACK_IMPORTED_MODULE_0__.TopicList();\n\n\nfunction initialize() {\n    const inBoxBtn = document.querySelector('[data-name=\"Inbox\"]');\n    inBoxBtn.addEventListener('click', _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleTopicsBtn);\n\n    const addTopicBtn = document.getElementById(\"add-topic\");\n    addTopicBtn.addEventListener(\"click\", _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.addTop);\n}\n\nfunction displayTopicsBtn(title){\n    let topicName = title;\n\n    const topicListNav = document.querySelector(\".nav-topics\");\n\n    const topicItem = createElementWithAttribute(\"div\",\"data-name\",topicName);\n\n    const topicTitle = createElementWithAttribute(\"div\",\"data-name\",topicName);\n\n    const trashIcon = createElementWithAttribute(\"i\",\"data-name\",topicName);\n    trashIcon.classList.add(\"far\", \"fa-trash-alt\");\n\n    topicTitle.textContent = title;\n    \n    topicItem.appendChild(topicTitle);\n    topicItem.appendChild(trashIcon);\n    topicListNav.appendChild(topicItem);\n\n    topicTitle.addEventListener('click', _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleTopicsBtn);\n    trashIcon.addEventListener('click',_eventsHandler__WEBPACK_IMPORTED_MODULE_1__.delTopic);\n}\n\nfunction displayTopic(topic){\n    const todoCont = document.querySelector(\".todo-list-cont\");\n    const existingTopic = todoCont.querySelector(\"h1\");\n\n    if (existingTopic === null || existingTopic.textContent !== topic.title) {\n        createTopicCont(topic);\n    }\n}\n\nfunction createTopicCont(topic){\n    const todoCont = document.querySelector(\".todo-list-cont\");\n\n    const topicHeaderContainer = createElementWithAttribute(\"div\",\"class\",\"topic-header-cont\");\n\n    const topicTitle = createElementWithAttribute(\"h1\",\"class\",\"topic-title\");\n    topicTitle.textContent = topic.title;\n\n    const topicBodyCont = createElementWithAttribute(\"div\",\"class\",\"topic-body-cont\")\n    const taskCont = createElementWithAttribute(\"div\",\"class\", \"task-cont\");\n\n    const displayTaskDiv = createElementWithAttribute(\"div\",\"class\",\"display-task-div\")\n    const displayTaskBtnCont = document.createElement(\"div\")\n    const displayTaskBtn = createElementWithAttribute(\"i\",\"class\",\"fa fa-plus\")\n    const displayTaskText = createElementWithAttribute(\"span\", \"class\", \"add-task-text\");\n    displayTaskText.textContent = \"Add Task\";\n    \n\n    todoCont.innerHTML = '';\n\n    todoCont.appendChild(topicHeaderContainer);\n    todoCont.appendChild(topicBodyCont);\n    displayTaskDiv.appendChild(displayTaskBtnCont)\n    displayTaskBtnCont.appendChild(displayTaskBtn);\n    displayTaskBtnCont.appendChild(displayTaskText);\n    topicHeaderContainer.appendChild(topicTitle);\n    topicHeaderContainer.appendChild(displayTaskDiv);\n    topicBodyCont.appendChild(taskCont)\n\n    displayTaskBtnCont.addEventListener('click', displayTaskInput)\n}\n\n\nfunction removeTopicUI(dataName){\n    const topicItem = document.querySelector(`[data-name=\"${dataName}\"]`);\n    topicItem.remove();\n}\n\nfunction createElementWithAttribute(elementType,attribute, attributeName){\n    const element = document.createElement(elementType);\n    element.setAttribute(attribute, attributeName);\n    return element;\n}\n\nfunction displayTaskInput(){\n    const displayTaskDiv = document.querySelector(\".display-task-div\")\n    const taskInputCont = createElementWithAttribute(\"div\",\"class\",\"task-input-cont\");\n    \n    const taskTitleInput = createElementWithAttribute(\"input\",\"id\",\"task-title-input\")\n    taskTitleInput.type = \"text\";\n    taskTitleInput.setAttribute(\"placeholder\",\"Enter a title\")\n\n    const taskDescripInput = createElementWithAttribute(\"input\",\"id\",\"task-descrip-input\")\n    taskDescripInput.type = \"text\";\n    taskDescripInput.setAttribute(\"placeholder\",\"Enter a description\")\n\n    const addTaskBtn = createElementWithAttribute(\"i\",\"class\",\"fa fa-plus\")\n\n    displayTaskDiv.appendChild(taskInputCont)\n    taskInputCont.appendChild(taskTitleInput)\n    taskInputCont.appendChild(taskDescripInput)\n    taskInputCont.appendChild(addTaskBtn)\n\n    addTaskBtn.addEventListener('click', _eventsHandler__WEBPACK_IMPORTED_MODULE_1__.handleAddTasks)\n}\n\nfunction displayTask(title, descrip){\n    const taskCont = document.querySelector(\".task-cont\")\n    const taskDiv = createElementWithAttribute(\"div\", \"class\", \"task-div\");\n\n    const checkbox = createElementWithAttribute(\"input\", \"class\", \"checkbox\")\n    checkbox.type = \"checkbox\";\n\n    taskCont.appendChild(taskDiv)\n    taskDiv.appendChild(checkbox)\n}\n\n//# sourceURL=webpack://todo-list/./src/displayUi.js?");

/***/ }),

/***/ "./src/eventsHandler.js":
/*!******************************!*\
  !*** ./src/eventsHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTop: () => (/* binding */ addTop),\n/* harmony export */   delTopic: () => (/* binding */ delTopic),\n/* harmony export */   handleAddTasks: () => (/* binding */ handleAddTasks),\n/* harmony export */   handleTopicsBtn: () => (/* binding */ handleTopicsBtn)\n/* harmony export */ });\n/* harmony import */ var _displayUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayUi */ \"./src/displayUi.js\");\n\n\n\nfunction handleTopicsBtn(e){\n    const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n    const dataName = e.target.getAttribute(\"data-name\");\n    const topic = listItems.find(topic => topic.title === dataName)\n    ;(0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.displayTopic)(topic)\n}\n\nfunction addTop(){\n    let titleInput = document.getElementById(\"topic-title\");\n    const title = titleInput.value;\n    \n    if(title === \"\"){\n        displayMessage(\"The topic title can't be empty!\");\n        return;\n    }\n    _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.addTopic(title);\n    \n    (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.displayTopicsBtn)(title);\n\n    titleInput.value = \"\";\n}\n\nfunction delTopic(e){\n    const dataName = e.target.getAttribute(\"data-name\");\n    \n    _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.removeTopic(dataName);\n    (0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.removeTopicUI)(dataName)\n}\n\nfunction handleAddTasks(){\n    const listItems = _displayUi__WEBPACK_IMPORTED_MODULE_0__.list.getTopicList();\n    const dataName = document.querySelector(\".topic-title\").textContent;\n    const topic = listItems.find(topic => topic.title === dataName);\n    const title = document.getElementById(\"task-title-input\").value\n    const descrip = document.getElementById(\"task-descrip-input\").value;\n    topic.addTask(title, descrip)\n    ;(0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.displayTask)(title, descrip)\n}\n\n\n//# sourceURL=webpack://todo-list/./src/eventsHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayUi */ \"./src/displayUi.js\");\n\n\n\n(0,_displayUi__WEBPACK_IMPORTED_MODULE_0__.initialize)()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(title,description){\n        this.title = title,\n        this.description = description\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/topic.js":
/*!**********************!*\
  !*** ./src/topic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Topic: () => (/* binding */ Topic)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\nclass Topic{\n    constructor(title){\n        this.title = title;\n        this.taskList = [];\n    }\n\n    addTask(title,description) {\n        const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title,description)\n        this.taskList.push(task)\n        return task\n    }\n\n    removeTask(){\n        \n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/topic.js?");

/***/ }),

/***/ "./src/topicList.js":
/*!**************************!*\
  !*** ./src/topicList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TopicList: () => (/* binding */ TopicList)\n/* harmony export */ });\n/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic */ \"./src/topic.js\");\n\n\nclass TopicList{\n    constructor() {\n        this.topicList = [new _topic__WEBPACK_IMPORTED_MODULE_0__.Topic(\"Inbox\")]\n    }\n\n    addTopic(title){\n        if(title !== \"\"){\n            this.topicList.push(new _topic__WEBPACK_IMPORTED_MODULE_0__.Topic(title));\n        }\n    }\n\n    removeTopic(topicToRemove){\n        this.topicList.forEach((topic,i)=> {\n            if(topic.title === topicToRemove){\n            this.topicList.splice(i,1)\n            }\n        });\n    }\n\n    getTopicList() {\n        return this.topicList;\n    }\n    \n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/topicList.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;