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

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst audio = new Audio();\r\n\r\naudio.preload = 'auto';\r\naudio.src = '/sound/ticking-90432.mp3';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audio);\n\n//# sourceURL=webpack://focus-timer/./src/audio.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n\r\n\r\nconst display = document.getElementById('display');\r\nconst startAndStopButton = document.getElementById('startAndStop');\r\nconst resetButton = document.getElementById('reset'); // Element\r\nconst TextTimer = document.getElementById('StateTimer'); \r\nconst Count = document.getElementById('stepCount');\r\n\r\nconst minutesForFocus = 10 / 60; //Минуты от которых идет отсчет таймера \r\nconst minuteForShortBreak = 5 / 60; \r\nconst minutesForLongBreak = 10 / 60;\r\n\r\nlet time = minutesForFocus * 60; // Для отсчета сколько осталось времени!\r\nlet isTimerStarted = false; // Содержит состояние таймера\r\nlet step = 1;\r\n\r\n\r\n\r\nfunction tick() {\r\n   time = time - 1 ;\r\n\r\n   displayTime();\r\n\r\n   if (time === 0) {\r\n      time = (step % 2 ? (step === 4 ? minutesForLongBreak : minuteForShortBreak ) : minutesForFocus) * 60;\r\n      step += 1\r\n      _audio__WEBPACK_IMPORTED_MODULE_0__[\"default\"].play();\r\n   }\r\n\r\n}\r\n\r\n\r\nlet interval; // интервал для обновления дисплея каждую секунду\r\nfunction StartTimer() {\r\n   interval = setInterval(tick, 1000);\r\n   isTimerStarted = true;\r\n   if (time === 0){\r\n      time = minutesForFocus * 60;\r\n   }\r\n   ChangeToStop();\r\n   showResetButton();\r\n}\r\n\r\nstartAndStopButton.addEventListener('click', StartAndStop) // обратчик собитый \r\n\r\nfunction StartAndStop (){\r\n   if (!isTimerStarted){ // если таймер не запущен\r\n      StartTimer(); \r\n   }else if (isTimerStarted){ // если таймер запущен\r\n      StopTimer(); \r\n   }\r\n}\r\n\r\n\r\nconst StopTimer = () => {\r\n   clearInterval(interval);// отсановливает таймер \r\n   ChangeToStart();\r\n   isTimerStarted = false;\r\n}\r\n\r\n\r\nfunction hideResetButton() {\r\n   resetButton.classList.add(\"hidden\");\r\n}\r\n\r\nfunction showResetButton() {\r\n   resetButton.classList.remove(\"hidden\");\r\n}\r\n\r\n\r\nconst onResetClick = () => {\r\n   time = minutesForFocus * 60; //Сброс на исходное состояние\r\n   displayTime();\r\n   hideResetButton();\r\n   StopTimer();\r\n}\r\n\r\nresetButton.addEventListener('click', onResetClick);\r\n\r\n\r\nfunction displayTime() {\r\n   let min = Math.floor(time / 60); // Вычесляю сколько осталось минут \r\n   let sec = time % 60;// Вычесляю сколько осталось секунд\r\n   \r\n   display.style.color = time === 0  ? 'gray' : ( step % 2 ?  'silver' :  'green')\r\n\r\n   display.innerHTML =  ((min < 10) ?  \"0\" + min : min) + ':' + ((sec < 10) ? \"0\" + sec : sec);\r\n\r\n   TextTimer.innerHTML = step % 2 ?  'Focus' : ( step === 4 ? 'Long' : 'Short' ) + ' Break';\r\n\r\n   Count.innerHTML = Math.ceil(step / 2) + \"/4\"\r\n\r\n   const progress = document.getElementById('progress');\r\n   const classToDelete = Array.from(progress.classList).find( c => c.startsWith('progress-') );\r\n   progress.classList.remove(classToDelete);   \r\n   progress.classList.add('progress-' + Math.floor( time * 100 / (minutesForFocus * 60) ) )\r\n}\r\n\r\nfunction ChangeToStart (){\r\n   startAndStopButton.innerHTML = \"Start\"\r\n}\r\n\r\nfunction ChangeToStop(){\r\n   startAndStopButton.innerHTML = \"Stop\"\r\n}\r\n\r\ndisplayTime();\r\n\r\n\n\n//# sourceURL=webpack://focus-timer/./src/index.js?");

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