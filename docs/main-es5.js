(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>todoList</h1>\n<app-todo></app-todo>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-list/todo-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>todo-list works!</p>*ngIf = \"childShowTodos.length>0\" -->\n<section >\n    <ul class=\"todo-list\" >\n       <!--  这个地方可以让let todo of todoservice.todos -->\n        <li *ngFor = \"let todo of childShowTodos\" >\n            <div class=\"todoItem\" [class.completed]=\"todo.complete\" *ngIf=\"!todo.isEdit\"> \n                <input id=\"{{todo.id}}\" class=\"toggle\" type=\"checkbox\" [checked]=\"todo.complete\" (click)=\"toggleComplete(todo)\">\n                <label for=\"{{todo.id}}\" class=\"newCheckbox\"></label>\n                <label class=\"todoTitle\" (dblclick)='toggleEdit(todo.id)'>{{todo.title}}</label>\n                <i class=\"remove\" (click)=\"removeTodo(todo)\">×</i>\n            </div>\n            <input type=\"text\" name=\"\" [(ngModel)]=\"todo.title\" *ngIf=\"todo.isEdit\" (keyup.enter)=\"changeTitle(todo)\" class=\"edit-box\">\n        </li>\n    </ul>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n<!-- 搜索框部分 -->\n<header>\n<!-- 输入内容，按下回车，触发keyup.enter事件，将输入的内容绑定到newTodo的title属性当中 -->\n    <i (click) = \"allChange()\" class=\"allCompleted\">></i>\n    <input placeholder=\"请输入您要做的事情\" [(ngModel)]=\"title\" (keyup.enter)=\"addTodo(title)\"  class=\"inputbox\"/>\n</header>\n<router-outlet></router-outlet>\n    \n<!-- 下面路由部分 -->\n<footer>\n    <span>目前还剩 {{leftCount}} 项未完成</span>\n    <button (click) = \"clearCompleted()\" style=\"margin-left: 20px\" *ngIf=\"clearFlag\">移除已完成</button>\n    <button [class.activeButton] = \"tab === 'uncomplete'\" routerLink='/todo-list/uncomplete'>未完成</button>\n    <button [class.activeButton] = \"tab === 'completed'\" routerLink='/todo-list/completed'>已完成</button>\n    <button  [class.activeButton] = \"tab === 'all'\" routerLink='/todo-list/all'>全部</button>\n</footer>\n</div>\n<!-- (click) = \"switchTab('uncomplete')\" \n     (click) = \"switchTab('completed')\"\n     (click) = \"switchTab('all')\" -->"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0 auto;\n  width: 20%;\n  color: rgba(249, 89, 89, 0.37);\n  font-size: 3em;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTovcHJhY3RpY2UvZ2l0aHViL3RvZG9MaXN0L3RvZG9MaXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjAlO1xuICAgIGNvbG9yOiByZ2JhKDI0OSwgODksIDg5LCAwLjM3KTtcbiAgICBmb250LXNpemU6M2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIiwiaDEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6IHJnYmEoMjQ5LCA4OSwgODksIDAuMzcpO1xuICBmb250LXNpemU6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_todo_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo-routing.module */ "./src/app/todo/todo-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _todo_todo_routing_module__WEBPACK_IMPORTED_MODULE_9__["TodoRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.less":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  margin: 0 auto;\n}\nsection ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nsection ul li {\n  height: 50px;\n  padding: 0;\n  border-bottom: 1px dashed rgba(175, 47, 47, 0.15);\n  text-align: left;\n  font-size: 20px;\n  line-height: 20px;\n}\nsection ul li .todoItem {\n  position: relative;\n  padding: 12px 8px;\n}\nsection ul li .todoItem .todoTitle {\n  padding: 0 8px;\n}\nsection ul li i {\n  width: 30px;\n  height: 35px;\n  font-size: 30px;\n  float: right;\n  color: #cc9a9a;\n  cursor: pointer;\n  font-style: normal;\n  display: none;\n}\nsection ul li .edit-box {\n  display: block;\n  width: 560px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n  padding: 6px;\n  line-height: 1.4em;\n  font-size: 24px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n}\nsection ul li .edit-box:focus {\n  outline: none;\n}\nsection ul li:hover i {\n  display: inline-block;\n}\n.completed {\n  text-decoration: line-through;\n  color: #afaaaa;\n}\ninput[type='checkbox'] {\n  display: inline-block;\n}\n.todoItem .newCheckbox {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid #eeeeee;\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.todoItem .newCheckbox:after {\n  content: \"√\";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  background-color: #fdfdfd;\n  color: #a8322ea4;\n  left: 1px;\n  top: 1px;\n  text-align: center;\n  -webkit-transform: translateY(-30px);\n          transform: translateY(-30px);\n  -webkit-transition: -webkit-transform 0.2s ease-out;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  border-radius: 4px;\n}\n.todoItem [type=\"checkbox\"]:checked + .newCheckbox:after {\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n  -webkit-transition: -webkit-transform o 0.1s ease-in;\n  transition: -webkit-transform o 0.1s ease-in;\n  transition: transform o 0.1s ease-in;\n  transition: transform o 0.1s ease-in, -webkit-transform o 0.1s ease-in;\n}\n.todoItem [type=\"checkbox\"] {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWxpc3QvRTovcHJhY3RpY2UvZ2l0aHViL3RvZG9MaXN0L3RvZG9MaXN0L3NyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0NKO0FESEE7RUFJUSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRVI7QURSQTtFQVFZLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FEaEJBO0VBZWdCLGtCQUFBO0VBQ0EsaUJBQUE7QUNJaEI7QURwQkE7RUFrQm9CLGNBQUE7QUNLcEI7QUR2QkE7RUFzQmUsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSWhCO0FEakNBO0VBaUNnQixjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FDR2hCO0FEN0NBO0VBNkNnQixhQUFBO0FDR2hCO0FEaERBO0VBaURZLHFCQUFBO0FDRVo7QURFQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FESUE7RUFDSSxxQkFBQTtBQ0ZKO0FETUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUNOSjtBRFNBO0VBQ0ksYUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAudG9kb0l0ZW17XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICAgICAgICAgIC50b2RvVGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjYzlhOWE7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g57yW6L6R5qGG5pe255qE5qC35byPXG4gICAgICAgICAgICAuZWRpdC1ib3h7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6NTYwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lZGl0LWJveDpmb2N1c3tcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpOmhvdmVyIGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY29tcGxldGVke1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2IoMTc1LCAxNzAsIDE3MCk7XG59XG4vLyDorr7nva7lpI3pgInmoYZcbi8vIOmakOiXj+WOn+adpeeahGNoZWNrYm945qC35byPXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbi8vIOmAmui/h+S4jmlucHV05YWz6IGU55qEbGFiZWzmnaXorr7nva7moLflvI9cblxuLnRvZG9JdGVtIC5uZXdDaGVja2JveHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG9JdGVtIC5uZXdDaGVja2JveDphZnRlciB7XG4gICAgY29udGVudDogXCLiiJpcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcbiAgICBjb2xvcjogI2E4MzIyZWE0O1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRvZG9JdGVtIFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArLm5ld0NoZWNrYm94OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gby4xcyBlYXNlLWluO1xufVxuXG4udG9kb0l0ZW0gW3R5cGU9XCJjaGVja2JveFwiXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uIHVsIGxpIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuc2VjdGlvbiB1bCBsaSAudG9kb0l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xufVxuc2VjdGlvbiB1bCBsaSAudG9kb0l0ZW0gLnRvZG9UaXRsZSB7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuc2VjdGlvbiB1bCBsaSBpIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjY2M5YTlhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnNlY3Rpb24gdWwgbGkgLmVkaXQtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1NjBweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBtYXJnaW46IDAgMCAwIDQzcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5zZWN0aW9uIHVsIGxpIC5lZGl0LWJveDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5zZWN0aW9uIHVsIGxpOmhvdmVyIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjYWZhYWFhO1xufVxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50b2RvSXRlbSAubmV3Q2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b2RvSXRlbSAubmV3Q2hlY2tib3g6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKImlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuICBjb2xvcjogI2E4MzIyZWE0O1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udG9kb0l0ZW0gW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLm5ld0NoZWNrYm94OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBvIDAuMXMgZWFzZS1pbjtcbn1cbi50b2RvSXRlbSBbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo/todo.service.ts");




var TodoListComponent = /** @class */ (function () {
    // tab = this.todoService.tab;
    // subscription: Subscription;
    // isEdit = false;
    function TodoListComponent(todoService, activated) {
        this.todoService = todoService;
        this.activated = activated;
        activated.params.subscribe(function (data) {
            // console.log(data);获取到data之后就可以取得data中包含的所需要的信息。
        });
    }
    Object.defineProperty(TodoListComponent.prototype, "childShowTodos", {
        get: function () {
            return this.todoService.showTodos;
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.toggleComplete = function (todo) {
        this.todoService.toggleComplete(todo);
    };
    TodoListComponent.prototype.removeTodo = function (todo) {
        this.todoService.removeTodo(todo.id);
    };
    // 双击可编辑，且保证每次只能有其中一个可编辑
    TodoListComponent.prototype.toggleEdit = function (id) {
        this.todoService.todos.forEach(function (todo) {
            todo.isEdit = todo.id === id ? true : false;
        });
    };
    TodoListComponent.prototype.changeTitle = function (item) {
        this.todoService.changeTitle(item.id, item.title);
    };
    TodoListComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.less */ "./src/app/todo/todo-list/todo-list.component.less")]
        })
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");




var routes = [
    { path: 'todo-list/:tab', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"] },
    { path: '', redirectTo: '/todo-list/all', pathMatch: 'full' }
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.less":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all {\n  width: 50%;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid rgba(129, 116, 116, 0.521);\n  color: #352d2d;\n  background: #fff;\n  margin: 30px auto;\n  position: relative;\n  box-shadow: 1px 1px 25px 11px rgba(0, 0, 0, 0.2), 1px 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\nbutton {\n  -webkit-transition-duration: 0.4s;\n  /* Safari */\n  transition-duration: 0.4s;\n  background-color: white;\n  border: none;\n  color: #402977;\n  padding: 8px 12px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nheader {\n  width: 100%;\n  margin: 0;\n  position: relative;\n}\nheader .allCompleted {\n  width: 28px;\n  height: 26px;\n  font-size: 26px;\n  position: absolute;\n  top: 25px;\n  left: 12px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  font-style: normal;\n  color: rgba(192, 135, 135, 0.822);\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\nheader input {\n  width: 100%;\n  height: 68px;\n  margin: 0;\n  display: inline-block;\n  padding: 16px 16px 16px 60px;\n  border: none !important;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  outline-color: none;\n}\nfooter {\n  width: 100%;\n  height: 30px;\n  margin: 18px auto;\n}\nfooter span {\n  float: left;\n  padding: 8px;\n}\nfooter button {\n  float: right;\n  padding: 0 2px;\n  margin: 0 2px;\n  padding: 8px;\n  outline: none;\n}\nfooter button:hover {\n  border: solid 1px #402977;\n}\nfooter .activeButton {\n  color: white;\n  background: #402977;\n}\n.inputbox {\n  box-sizing: border-box;\n  text-align: left;\n  font-size: 16px;\n  height: 10px;\n  border-radius: 4px;\n  border: 1px solid #c8cccf;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0 1em;\n  text-decoration: none;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9FOi9wcmFjdGljZS9naXRodWIvdG9kb0xpc3QvdG9kb0xpc3Qvc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzS0FBQTtBQ0FKO0FET0E7RUFDSSxpQ0FBQTtFQ0xGLFdBQVc7RURNVCx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ05KO0FER0E7RUFLUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNMUjtBRFpBO0VBb0JRLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7RUFFQSxtQkFBQTtBQ05SO0FEeURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3ZESjtBRG9EQTtFQUtRLFdBQUE7RUFDQSxZQUFBO0FDdERSO0FEZ0RBO0VBU1EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN0RFI7QUR5Q0E7RUFnQlEseUJBQUE7QUN0RFI7QURzQ0E7RUFvQlEsWUFBQTtFQUNBLG1CQUFBO0FDdkRSO0FENERBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDMURKIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWxse1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOSwgMTE2LCAxMTYsIDAuNTIxKTtcbiAgICBjb2xvcjogIzM1MmQyZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDI1cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMXB4IDhweCAwIC0zcHggI2Y2ZjZmNiwgXG4gICAgICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcbiAgICAgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsIFxuICAgICAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJ1dHRvbiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICAjNDAyOTc3O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyDlpLTpg6jmkJzntKLmoYZcbmhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5hbGxDb21wbGV0ZWR7XG4gICAgICAgIHdpZHRoOjI4cHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogcmdiYSgxOTIsIDEzNSwgMTM1LCAwLjgyMik7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDo2OHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XG4gICAgICAgIC8vIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG91dGxpbmUtY29sb3I6IG5vbmU7XG4gICAgfVxufVxuXG4vLyDkuK3pl7TmmL7npLrliJfooahcbi8vIHNlY3Rpb257XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWFyZ2luOjAgYXV0bztcbi8vICAgICB1bHtcbi8vICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgbGl7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAudG9kb0l0ZW17XG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuLy8gICAgICAgICAgICAgICAgIC50b2RvVGl0bGV7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGl7XG4vLyAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbi8vICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbi8vICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbi8vICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNjYzlhOWE7XG4vLyAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGxpOmhvdmVyIGl7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cblxuXG4vLyAuY29tcGxldGVke1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuLy8gICAgIGNvbG9yOiByZ2IoMTc1LCAxNzAsIDE3MCk7XG4vLyB9XG5cblxuLy8g5LiL6Z2i5LiJ5Liq57uE5Lu2XG5mb290ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMThweCBhdXRvO1xuICAgIHNwYW57XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICBidXR0b246aG92ZXJ7XG4gICAgICAgIGJvcmRlcjpzb2xpZCAxcHggIzQwMjk3NztcbiAgICB9XG4gICAgXG4gICAgLmFjdGl2ZUJ1dHRvbntcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICAjNDAyOTc3O1xuICAgIH1cbn1cblxuLy8g6K6+572u6L6T5YWl5qGG55qE5qC35byPXG4uaW5wdXRib3h7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzhjY2NmO1xuICAgIGNvbG9yOiM2YTZmNzc7XG4gICAgLXdlYi1raXQtYXBwZWFyYW5jZTpub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG91dGxpbmU6MDtcbiAgICBwYWRkaW5nOjAgMWVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbi8vICAgLmlucHV0Ym94OmZvY3Vze1xuLy8gICAgIGJvcmRlcjoxcHggc29saWQgIzgyOGFmNTtcbi8vICAgfVxuXG5cblxuXG5cbiIsIi5hbGwge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjksIDExNiwgMTE2LCAwLjUyMSk7XG4gIGNvbG9yOiAjMzUyZDJkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDI1cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDFweCA4cHggMCAtM3B4ICNmNmY2ZjYsIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNnB4IDAgLTZweCAjZjZmNmY2LCAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuYnV0dG9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAvKiBTYWZhcmkgKi9cbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM0MDI5Nzc7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5hbGxDb21wbGV0ZWQge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAxMnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiByZ2JhKDE5MiwgMTM1LCAxMzUsIDAuODIyKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG91dGxpbmUtY29sb3I6IG5vbmU7XG59XG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDE4cHggYXV0bztcbn1cbmZvb3RlciBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cbmZvb3RlciBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzQwMjk3Nztcbn1cbmZvb3RlciAuYWN0aXZlQnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNDAyOTc3O1xufVxuLmlucHV0Ym94IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2NjZjtcbiAgY29sb3I6ICM2YTZmNzc7XG4gIC13ZWIta2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TodoComponent = /** @class */ (function () {
    // leftCount: number;
    function TodoComponent(todoService, route) {
        var _this = this;
        this.todoService = todoService;
        this.route = route;
        this.title = '';
        this.showTodos = this.todoService.showTodos;
        this.tab = 'all';
        route.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]) {
                console.log(e);
                if (e.url.endsWith('/completed')) {
                    _this.switchTab('completed');
                }
                else if (e.url.endsWith('/uncomplete')) {
                    _this.switchTab('uncomplete');
                }
                else {
                    _this.switchTab('all');
                }
            }
        });
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.addTodo = function (title) {
        if (title) {
            this.todoService.addTodo(title);
            this.title = '';
            this.switchTab('all');
        }
    };
    // 移除已完成的事项
    TodoComponent.prototype.clearCompleted = function () {
        var todos = this.todoService.todos.filter(function (todo) { return todo.complete === false; });
        this.todoService.todos = todos;
        this.switchTab('all');
    };
    Object.defineProperty(TodoComponent.prototype, "clearFlag", {
        // 移除已完成按钮是否显示
        get: function () {
            return this.todoService.clearFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoComponent.prototype, "leftCount", {
        // 获取当前还有多少项未完成
        get: function () {
            return this.todoService.leftCount;
        },
        enumerable: true,
        configurable: true
    });
    // 全选或全不选
    TodoComponent.prototype.allChange = function () {
        this.todoService.allChange();
    };
    // 切换标签页
    TodoComponent.prototype.switchTab = function (tabchange) {
        // debugger
        this.tab = tabchange;
        this.todoService.tab = tabchange;
        this.todoService.generateShowTodos(this.tab);
    };
    TodoComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html"),
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]] // 这句话和下面的是依赖注入。
            ,
            styles: [__webpack_require__(/*! ./todo.component.less */ "./src/app/todo/todo.component.less")]
        })
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.service.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.service.ts ***!
  \**************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/app/todo/todo.ts");

// 主要是对todo数组进行一系列操作，可以添加，删除，修改todo的complete状态等等


var localStorage = window.localStorage;
var STORAGE_KEY = 'todo';
var TodoService = /** @class */ (function () {
    function TodoService() {
        // 初始化一个空数组，用来保存所有的待办事项，里面的每一项是一个Todo对象，代表一条待办事项
        // todos: Todo [] = [];
        this._todos = [];
        this.tab = '';
        this.clearFlag = false;
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; // 每次刷新时初始化数组
    }
    Object.defineProperty(TodoService.prototype, "todos", {
        // public switchEvent = new Subject();
        // public childSwitchEvent = new Subject();
        // 本地存储
        get: function () {
            return this._todos;
        },
        set: function (v) {
            this._todos = v;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.addTodo = function (desc) {
        var todo = new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"](desc);
        this.todos = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.todos, [todo]); // 解构赋值
    };
    TodoService.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.generateShowTodos(this.tab);
        return this.todos;
    };
    TodoService.prototype.getTodo = function (id) {
        return this.todos.filter(function (todo) { return todo.id = id; }).pop();
    };
    // 切换待办事项的完成状态
    TodoService.prototype.toggleComplete = function (todo) {
        todo.complete = !todo.complete;
        this.todos = this.todos; // 理解一下？
        this.generateShowTodos(this.tab);
        // this.getLeftCount();
    };
    // 通过完成状态来移除事项，例如移除所有已完成事项
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (item) { return item.complete === false; });
        return this.todos;
    };
    // 移除已完成按钮是否显示
    TodoService.prototype.showClearFlag = function () {
        var len = 0;
        len = this.todos.filter(function (todo) { return todo.complete === true; }).length;
        if (len > 0) {
            this.clearFlag = true;
        }
        else {
            this.clearFlag = false;
        }
    };
    // 获取当前还有多少项未完成
    TodoService.prototype.getLeftCount = function () {
        this.leftCount = this.todos.filter(function (todo) { return todo.complete === false; }).length;
    };
    // 全选或者全不选
    TodoService.prototype.allChange = function () {
        var hasUnfinished = !!this.todos.find(function (todo) { return todo.complete === false; });
        this.todos = this.todos.map(function (todo) {
            todo.complete = hasUnfinished;
            return todo;
        });
        this.generateShowTodos(this.tab);
        this.getLeftCount();
    };
    // 双击可编辑后更新todo数组及相关内存。
    TodoService.prototype.changeTitle = function (id, title) {
        var item;
        item = this.todos.find(function (todo) {
            return todo.id === id;
        });
        item.title = title;
        item.isEdit = false;
        this.todos = this.todos;
    };
    // 获取全部的数组
    TodoService.prototype.generateShowTodos = function (tab) {
        tab = tab || this.tab; // 是否传参都可以
        var showTodos;
        if (tab === 'all') { // 获取全部
            showTodos = this.todos.slice();
        }
        else if (tab === 'uncomplete') { // 获取未完成
            showTodos = this.todos.filter(function (item) { return item.complete === false; });
        }
        else if (tab === 'completed') { // 获取已完成
            showTodos = this.todos.filter(function (item) { return item.complete === true; });
        }
        this.showTodos = showTodos;
        this.showClearFlag();
        this.getLeftCount();
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo/todo.ts":
/*!******************************!*\
  !*** ./src/app/todo/todo.ts ***!
  \******************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
// 定义todo数组的数据格式，然后在todo.component.ts中引入后，就可以通过new来创建一个类型数组。
var Todo = /** @class */ (function () {
    function Todo(title) {
        this.complete = false;
        this.isEdit = false;
        this.title = title;
        this.id = (new Date()).getTime(); // 保证id的唯一性
    }
    Todo.ctorParameters = function () { return [
        null
    ]; };
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\practice\github\todoList\todoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map