(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \n<div>\n    <div class=\"container\">\n        <flash-messages></flash-messages>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'innova';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_edit_upload_edit_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-upload/edit-upload.component */ "./src/app/components/edit-upload/edit-upload.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _services_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app-routing.module */ "./src/app/services/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/my-posts/my-posts.component */ "./src/app/components/my-posts/my-posts.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                _components_edit_upload_edit_upload_component__WEBPACK_IMPORTED_MODULE_12__["EditUploadComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
                _components_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_26__["MyPostsComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _services_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"]
            ],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_24__["postService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_22__["SettingsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\r\n\r\n        <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                        <app-posts></app-posts>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <app-sidebar></app-sidebar>\r\n            \r\n                </div>\r\n            </div>\r\n            \r\n            \r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-upload/edit-upload.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-upload/edit-upload.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rcorners2 {\r\n    border-radius: 15px 50px 30px;\r\n    background: #FFC107;\r\n    \r\n  }\r\n\r\n  .alert p{\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXVwbG9hZC9lZGl0LXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXVwbG9hZC9lZGl0LXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jjb3JuZXJzMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxMDc7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5hbGVydCBwe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgfVxyXG5cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/edit-upload/edit-upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-upload/edit-upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <a routerLink=\"/post/{{id}}\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back to Idea</a>\n      </div>\n      <div class=\"col-md-6\">\n      </div>\n    </div>\n       \n      <div class=\"card\">\n      \n          <div class=\"mx-auto mt-2 mb-2 w-50 \" > \n          <h2 class=\"card-header text-center text-white\" id=rcorners2><i class=\"fa fa-pencil\"></i> EDIT IDEA</h2> \n          </div>  \n          <div class=\"card-body\">\n            <form #postForm=\"ngForm\" (ngSubmit)=\"onSubmit(postForm)\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"text-dark\"><i class=\"fa fa-user\"></i> Author Name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"name\"\n                  #postName=\"ngModel\"\n                  [(ngModel)]=\"post.name\"\n                  minlength=\"2\"\n                  required\n                  [ngClass]=\"{'is-invalid':postName.errors && postName.touched}\"\n                >\n  \n              <div [hidden]=\"!postName.errors?.required\" class=\"invalid-feedback\">Name required & Atleast Two Characters</div>\n              <div [hidden]=\"!postName.errors?.minlength\" class=\"invalid-feedback\">Must be atleast two letters</div>\n                \n              </div>\n             \n      \n                        \n              <div class=\"form-group\">\n                <label for=\"rollno\" class=\"text-dark\"><i class=\"fa fa-vcard-o\"></i> Roll Number</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"rollno\"\n                  #postRoll=\"ngModel\"\n                  [(ngModel)]=\"post.rollno\"\n                  minlength=\"7\"\n                  required\n  \n                  [ngClass]=\"{'is-invalid': postRoll.errors && postRoll.touched}\"\n                >\n                <div [hidden]=\"!postRoll.errors?.required\" class=\"invalid-feedback\">Roll Number required</div>\n                <div [hidden]=\"!postRoll.errors?.minlength\" class=\"invalid-feedback\">Must be 7 digit</div>\n              \n              </div>\n      \n      \n      \n              <div class=\"form-group\">\n                <label for=\"dept\" class=\"text-dark\"><i class=\"fa fa-mortar-board\"></i> Department</label>\n                 \n                  <select class=\"form-control bg-primary text-white\" \n                          id=\"dept\"\n                          name=\"dept\"\n                          #postdept=\"ngModel\"\n                          [(ngModel)]=\"post.dept\"\n                          \n                          required\n                          [ngClass]=\"{'is-invalid': postdept.errors && postdept.touched}\"\n                  >\n                    <option [ngValue]=\"null\" selected >-Select Department-</option>\n                    <option value=\"BME\">BME</option>\n                    <option value=\"CIVIL\">CIVIL</option>\n                    <option value=\"CSE\">CSE</option>\n                    <option value=\"ECE\">ECE</option>\n                    <option value=\"EEE\">EEE</option>\n                    <option value=\"IT\">IT</option>\n                    <option value=\"MECH\">MECH</option>\n                  </select>\n  \n                <div [hidden]=\"!postRoll.errors?.required\" class=\"invalid-feedback\">Department required</div>\n              \n              </div>\n      \n              \n              <div class=\"form-group\">\n                <label for=\"email\" class=\"text-dark\"><i class=\"fa fa-envelope\"></i> Email</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"email\"\n                  #postEmail=\"ngModel\"\n                  [(ngModel)]=\"post.email\"\n                  required\n                  [ngClass]=\"{'is-invalid': postEmail.errors && postEmail.touched}\"\n                  pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                >\n                <div [hidden]=\"!postEmail.errors?.required\" class=\"invalid-feedback\">Email required</div>\n                <div [hidden]=\"!postEmail.errors?.pattern\" class=\"invalid-feedback\">Email must be in 'someone@domain.com' format</div>\n              \n              </div>\n      \n              <div class=\"form-group\">\n                <label for=\"title\" class=\"text-dark\"><i class=\"fa fa-align-center\"></i> Title</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"title\"\n                  #postTitle=\"ngModel\"\n                  [(ngModel)]=\"post.title\"\n                  minlength=\"2\"\n            \n                \n                  required\n                  [ngClass]=\"{'is-invalid': postTitle.errors && postTitle.touched}\"\n                >\n                <div [hidden]=\"!postTitle.errors?.required\" class=\"invalid-feedback\">Title required</div>\n                <div [hidden]=\"!postTitle.errors?.minlength\" class=\"invalid-feedback\">Must be 2 words atleast!</div>\n              \n              </div>\n      \n      \n      \n              <div class=\"form-group\">\n                  <label for=\"domains\" class=\"text-dark\"><i class=\"fa fa-cubes\"></i> Domains</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"domains\"\n                    #postDomains=\"ngModel\"\n                    [(ngModel)]=\"post.domains\"\n                    minlength=\"2\"\n              \n                    required\n                    [ngClass]=\"{'is-invalid': postDomains.errors && postDomains.touched}\"\n                  >\n                  <div [hidden]=\"!postDomains.errors?.required\" class=\"invalid-feedback\">Domains required</div>\n                  <div [hidden]=\"!postDomains.errors?.minlength\" class=\"invalid-feedback\">Must be 2 words atleast!</div>\n                </div>\n      \n      \n      \n                    <div class=\"form-group\">\n                      <label for=\"shortDesc\" class=\"text-dark\"><i class=\"fa fa-file-o\"></i> Short Description</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"shortDesc\"\n                        #postDesc=\"ngModel\"\n                        [(ngModel)]=\"post.shortDesc\"\n                        minlength=\"20\"\n                      \n                        required\n                        [ngClass]=\"{'is-invalid': postDesc.errors && postDesc.touched}\"\n                      >\n                      <div [hidden]=\"!postDesc.errors?.required\" class=\"invalid-feedback\">Description required</div>\n                      <div [hidden]=\"!postDesc.errors?.minlength\" class=\"invalid-feedback\">Must be 20 words atleast!</div>\n                    \n                    </div>\n  \n  \n\n  \n                    <div class=\"form-group\">\n                      <label for=\"abs\" class=\"text-dark\"><i class=\"fa fa-file-pdf-o\"></i> Abstract File</label>\n                      <input\n                        type=\"file\"\n                        class=\"form-control-file w-50\"\n                        name=\"abs\"\n                        #abs=\"ngModel\"\n                        [(ngModel)]=\"post.abs\"\n                        (change)=\"upload($event)\" \n                        accept=\".pdf\"\n  \n                        \n                        [ngClass]=\"{'is-invalid': abs.errors && abs.touched}\"\n                      > \n  \n                      <input \n                      type=\"url\" \n                      *ngIf=\"downloadURL\" \n                      class=\"form-control-sm mt-2\" \n                      name=\"fileURL\"\n                      #fileURL\n                      disabled\n                      \n                      [(value)]=downloadURL>\n                      \n                      <div class=\"text-secondary small \">*upload abstract as pdf </div>\n                      <div [hidden]=\"!abs.errors?.required\" class=\"invalid-feedback\">Abstarct required</div>\n                     \n                      \n                 \n                              \n                      <div *ngIf=\"!downloadURL\" class=\"progress mt-2\">\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-primary \" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" \n                        [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                        \n                      </div>            \n                    \n                     </div>\n  \n  \n  \n\n\n\n\n\n\n                    \n      \n                <input type=\"submit\" value=\"Edit\" class=\"btn btn-block btn-success\">\n              \n                    \n            \n            </form>\n          </div>\n      </div> \n      \n  \n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/components/edit-upload/edit-upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-upload/edit-upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUploadComponent", function() { return EditUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var EditUploadComponent = /** @class */ (function () {
    function EditUploadComponent(postService, router, route, flashMessage, authService, afStorage) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.afStorage = afStorage;
        this.post = {
            name: '',
            rollno: '',
            dept: '',
            email: '',
            title: '',
            domains: '',
            shortDesc: '',
            time: new Date(),
            fileId: '',
            abs: ''
        };
    }
    EditUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        //id frm URL
        this.id = this.route.snapshot.params['id'];
        //Getting the post
        this.postService.getPost(this.id).subscribe(function (post) {
            _this.post = post;
        });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.loggedInUser = auth.email;
            }
            else {
                _this.loggedInUser = 'false';
            }
        });
    };
    EditUploadComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show('Please fill out the form correctly!!', {
                cssClass: 'alert-danger mt-2', timeout: 5000
            });
        }
        else {
            value.id = this.id;
            //adding time
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth();
            var yyyy = today.getFullYear();
            var hr = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            var ms = today.getMilliseconds();
            //console.log(today,dd,mm,yyyy)
            value.time = new Date(yyyy, mm, dd, hr, min, sec, ms);
            //console.log(value);
            value.user = this.loggedInUser;
            delete value.abs;
            console.log(value);
            if (this.fileId) {
                value.fileId = this.fileId;
                console.log('file changed');
            }
            else {
                console.log('no file uploaded');
                value.fileId = this.post.fileId;
            }
            console.log(value);
            //posting!!!
            //this.postService.updatePost(value);
            //show message!
            this.flashMessage.show('Edited successfully!', {
                cssClass: 'alert-success mt-2', timeout: 5000
            });
            //redirect
            this.router.navigate(['/post/' + this.id]);
        }
    };
    EditUploadComponent.prototype.upload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        this.fileId = id;
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.downloadURL = url;
                //console.log(this.downloadURL);
            });
        })).subscribe();
    };
    EditUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-upload',
            template: __webpack_require__(/*! ./edit-upload.component.html */ "./src/app/components/edit-upload/edit-upload.component.html"),
            styles: [__webpack_require__(/*! ./edit-upload.component.css */ "./src/app/components/edit-upload/edit-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["postService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], EditUploadComponent);
    return EditUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/info/info.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  .bg{\r\n\r\n\r\n    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('lap.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    color: #fff;\r\n    height: 850px;\r\n    padding-top: 50px; \r\n  \r\n  }\r\n\r\n\r\n  .hovereffect {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    cursor: default;\r\n  }\r\n  \r\n  .hovereffect .overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .hovereffect img {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  \r\n  .hovereffect h2 {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .hovereffect:hover h2 {\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    -webkit-transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);\r\n    transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);\r\n  }\r\n  \r\n  .hovereffect a.info {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    padding: 7px 14px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n    margin: 50px 0 0 0;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .hovereffect a.info:hover {\r\n    box-shadow: 0 0 5px #fff;\r\n  }\r\n  \r\n  .hovereffect hr {\r\n    width: 40%;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    border: 1px solid #FFF;\r\n  }\r\n  \r\n  .hovereffect  hr:nth-child(3) {\r\n    -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);\r\n    transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);\r\n  }\r\n  \r\n  .hovereffect  hr:nth-child(4) {\r\n    -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,180deg) scale3d(0,0,1);\r\n    transform: translate3d(-50%,-50%,0) rotate3d(0,0,1, 180deg) scale3d(0,0,1);\r\n  }\r\n  \r\n  .hovereffect h2, .hovereffect hr {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(-50%,-50%,0);\r\n    transform: translate3d(-50%,-50%,0);\r\n    -webkit-transform-origin: 50%;\r\n    transform-origin: 50%;\r\n    background-color: transparent;\r\n    margin: 0px;\r\n  }\r\n  \r\n  .set1, .set2 {\r\n    left: 50%;\r\n    position: absolute;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(-50%,-50%,0);\r\n    transform: translate3d(-50%,-50%,0);\r\n    -webkit-transform-origin: 50%;\r\n    transform-origin: 50%;\r\n    background-color: transparent;\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n  .set1 {\r\n    top: 40%;\r\n  }\r\n  \r\n  .set2 {\r\n    top: 60%;\r\n  }\r\n  \r\n  .hovereffect p {\r\n    width: 30%;\r\n    text-transform: none;\r\n    font-size: 15px;\r\n    line-height: 2;\r\n  }\r\n  \r\n  .hovereffect p a {\r\n    color: #fff;\r\n  }\r\n  \r\n  .hovereffect p a:hover,\r\n  .hovereffect p a:focus {\r\n    opacity: 0.6;\r\n    filter: alpha(opacity=60);\r\n  }\r\n  \r\n  .hovereffect  a i {\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .set1 a:first-child i {\r\n    -webkit-transform: translate3d(-60px,-60px,0);\r\n    transform: translate3d(-60px,-60px,0);\r\n  }\r\n  \r\n  .set1 a:nth-child(2) i {\r\n    -webkit-transform: translate3d(60px,-60px,0);\r\n    transform: translate3d(60px,-60px,0);\r\n  }\r\n  \r\n  .set2 a:first-child i {\r\n    -webkit-transform: translate3d(-60px,60px,0);\r\n    transform: translate3d(-60px,60px,0);\r\n  }\r\n  \r\n  .set2 a:nth-child(2) i {\r\n    -webkit-transform: translate3d(60px,60px,0);\r\n    transform: translate3d(60px,60px,0);\r\n  }\r\n  \r\n  .hovereffect:hover hr:nth-child(3) {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);\r\n    transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);\r\n  }\r\n  \r\n  .hovereffect:hover hr:nth-child(4) {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);\r\n    transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);\r\n  }\r\n  \r\n  .hovereffect:hover .set1 i:empty, .hovereffect:hover .set2 i:empty {\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n\r\n\r\n\r\n\r\n}\r\n@media (max-width: 767px) {\r\n  \r\n.bg{\r\n\r\n\r\n  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('lap.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: #fff;\r\n  height: 950px;\r\n  \r\n  padding-top: 50px; \r\n\r\n}\r\n\r\n\r\n\r\n\r\n.hovereffect {\r\n  width: 100%;\r\n  height: 100%;\r\n  float: left;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  cursor: default;\r\n}\r\n\r\n.hovereffect .overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hovereffect img {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.hovereffect h2 {\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  padding: 10px;\r\n}\r\n\r\n.hovereffect:hover h2 {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  -webkit-transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);\r\n  transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);\r\n}\r\n\r\n.hovereffect a.info {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding: 7px 14px;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  margin: 50px 0 0 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.hovereffect a.info:hover {\r\n  box-shadow: 0 0 5px #fff;\r\n}\r\n\r\n.hovereffect hr {\r\n  width: 40%;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  border: 1px solid #FFF;\r\n}\r\n\r\n.hovereffect  hr:nth-child(3) {\r\n  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);\r\n  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);\r\n}\r\n\r\n.hovereffect  hr:nth-child(4) {\r\n  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,180deg) scale3d(0,0,1);\r\n  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1, 180deg) scale3d(0,0,1);\r\n}\r\n\r\n.hovereffect h2, .hovereffect hr {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transition: opacity 0.35s, -webkit-transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n  -webkit-transform: translate3d(-50%,-50%,0);\r\n  transform: translate3d(-50%,-50%,0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  background-color: transparent;\r\n  margin: 0px;\r\n}\r\n\r\n.set1, .set2 {\r\n  left: 50%;\r\n  position: absolute;\r\n  transition: opacity 0.35s, -webkit-transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n  -webkit-transform: translate3d(-50%,-50%,0);\r\n  transform: translate3d(-50%,-50%,0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  background-color: transparent;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.set1 {\r\n  top: 40%;\r\n}\r\n\r\n.set2 {\r\n  top: 60%;\r\n}\r\n\r\n.hovereffect p {\r\n  width: 30%;\r\n  text-transform: none;\r\n  font-size: 15px;\r\n  line-height: 2;\r\n}\r\n\r\n.hovereffect p a {\r\n  color: #fff;\r\n}\r\n\r\n.hovereffect p a:hover,\r\n.hovereffect p a:focus {\r\n  opacity: 0.6;\r\n  filter: alpha(opacity=60);\r\n}\r\n\r\n.hovereffect  a i {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  transition: opacity 0.35s, -webkit-transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s;\r\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.set1 a:first-child i {\r\n  -webkit-transform: translate3d(-60px,-60px,0);\r\n  transform: translate3d(-60px,-60px,0);\r\n}\r\n\r\n.set1 a:nth-child(2) i {\r\n  -webkit-transform: translate3d(60px,-60px,0);\r\n  transform: translate3d(60px,-60px,0);\r\n}\r\n\r\n.set2 a:first-child i {\r\n  -webkit-transform: translate3d(-60px,60px,0);\r\n  transform: translate3d(-60px,60px,0);\r\n}\r\n\r\n.set2 a:nth-child(2) i {\r\n  -webkit-transform: translate3d(60px,60px,0);\r\n  transform: translate3d(60px,60px,0);\r\n}\r\n\r\n.hovereffect:hover hr:nth-child(3) {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);\r\n  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);\r\n}\r\n\r\n.hovereffect:hover hr:nth-child(4) {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);\r\n  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);\r\n}\r\n\r\n.hovereffect:hover .set1 i:empty, .hovereffect:hover .set2 i:empty {\r\n  -webkit-transform: translate3d(0,0,0);\r\n  transform: translate3d(0,0,0);\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztFQUVFOzs7SUFHRSwyRUFBMkY7SUFDM0YsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7O0VBRW5COzs7RUFHQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLE9BQU87RUFDVDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qiw4REFBOEQ7SUFDOUQsc0RBQXNEO0VBQ3hEOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdGQUFnRjtJQUNoRix3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSxpRkFBaUY7SUFDakYsMEVBQTBFO0VBQzVFOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBRVQsa0RBQTBDO0lBQTFDLDBDQUEwQztJQUExQyxtRUFBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFFN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBRWxCLGtEQUEwQztJQUExQywwQ0FBMEM7SUFBMUMsbUVBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBRTdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7SUFFeEIsa0RBQTBDO0lBQTFDLDBDQUEwQztJQUExQyxtRUFBMEM7SUFDMUMsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsNENBQTRDO0lBQzVDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLDRDQUE0QztJQUM1QyxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixpRkFBaUY7SUFDakYseUVBQXlFO0VBQzNFOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixrRkFBa0Y7SUFDbEYsMEVBQTBFO0VBQzVFOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCOzs7OztBQUtGO0FBQ0E7O0FBRUE7OztFQUdFLDJFQUEyRjtFQUMzRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTs7RUFFYixpQkFBaUI7O0FBRW5COzs7OztBQUtBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLDhEQUE4RDtFQUM5RCxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0ZBQWdGO0VBQ2hGLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGlGQUFpRjtFQUNqRiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxrREFBMEM7RUFBMUMsMENBQTBDO0VBQTFDLG1FQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUU3QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFFbEIsa0RBQTBDO0VBQTFDLDBDQUEwQztFQUExQyxtRUFBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFFN0IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtFQUV4QixrREFBMEM7RUFBMUMsMENBQTBDO0VBQTFDLG1FQUEwQztFQUMxQyxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGlGQUFpRjtFQUNqRix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGtGQUFrRjtFQUNsRiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIFxyXG4gIC5iZ3tcclxuXHJcblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjcpLCByZ2JhKDAsMCwwLC43KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sYXAuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDg1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IFxyXG4gIFxyXG4gIH1cclxuXHJcblxyXG4gIC5ob3ZlcmVmZmVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCBoMiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgaDIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgc2NhbGUzZCgwLjgsMC44LDEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgc2NhbGUzZCgwLjgsMC44LDEpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgYS5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG1hcmdpbjogNTBweCAwIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgYS5pbmZvOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IGhyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0ICBocjpudGgtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSw5MGRlZykgc2NhbGUzZCgwLDAsMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSw5MGRlZykgc2NhbGUzZCgwLDAsMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCAgaHI6bnRoLWNoaWxkKDQpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgcm90YXRlM2QoMCwwLDEsMTgwZGVnKSBzY2FsZTNkKDAsMCwxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLCAxODBkZWcpIHNjYWxlM2QoMCwwLDEpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgaDIsIC5ob3ZlcmVmZmVjdCBociB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2V0MSwgLnNldDIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXQxIHtcclxuICAgIHRvcDogNDAlO1xyXG4gIH1cclxuICBcclxuICAuc2V0MiB7XHJcbiAgICB0b3A6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IHAge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCBwIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCBwIGE6aG92ZXIsXHJcbiAgLmhvdmVyZWZmZWN0IHAgYTpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgIGEgaSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXQxIGE6Zmlyc3QtY2hpbGQgaSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTYwcHgsLTYwcHgsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MHB4LC02MHB4LDApO1xyXG4gIH1cclxuICBcclxuICAuc2V0MSBhOm50aC1jaGlsZCgyKSBpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LC02MHB4LDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LC02MHB4LDApO1xyXG4gIH1cclxuICBcclxuICAuc2V0MiBhOmZpcnN0LWNoaWxkIGkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MHB4LDYwcHgsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MHB4LDYwcHgsMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXQyIGE6bnRoLWNoaWxkKDIpIGkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDYwcHgsNjBweCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNjBweCw2MHB4LDApO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgaHI6bnRoLWNoaWxkKDMpIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgcm90YXRlM2QoMCwwLDEsLTkwZGVnKSBzY2FsZTNkKDEsMSwxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLC05MGRlZykgc2NhbGUzZCgxLDEsMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdDpob3ZlciBocjpudGgtY2hpbGQoNCkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSwtMTgwZGVnKSBzY2FsZTNkKDEsMSwxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLC0xODBkZWcpIHNjYWxlM2QoMSwxLDEpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgLnNldDEgaTplbXB0eSwgLmhvdmVyZWZmZWN0OmhvdmVyIC5zZXQyIGk6ZW1wdHkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgXHJcbi5iZ3tcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC43KSwgcmdiYSgwLDAsMCwuNykpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbGFwLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDk1MHB4O1xyXG4gIFxyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ob3ZlcmVmZmVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCAub3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3QgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCBoMiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBoMiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSBzY2FsZTNkKDAuOCwwLjgsMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgc2NhbGUzZCgwLjgsMC44LDEpO1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3QgYS5pbmZvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBtYXJnaW46IDUwcHggMCAwIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCBhLmluZm86aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZjtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0IGhyIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCAgaHI6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLDkwZGVnKSBzY2FsZTNkKDAsMCwxKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSw5MGRlZykgc2NhbGUzZCgwLDAsMSk7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCAgaHI6bnRoLWNoaWxkKDQpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLDE4MGRlZykgc2NhbGUzZCgwLDAsMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCkgcm90YXRlM2QoMCwwLDEsIDE4MGRlZykgc2NhbGUzZCgwLDAsMSk7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCBoMiwgLmhvdmVyZWZmZWN0IGhyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zZXQxLCAuc2V0MiB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnNldDEge1xyXG4gIHRvcDogNDAlO1xyXG59XHJcblxyXG4uc2V0MiB7XHJcbiAgdG9wOiA2MCU7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCBwIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0IHAgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdCBwIGE6aG92ZXIsXHJcbi5ob3ZlcmVmZmVjdCBwIGE6Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3QgIGEgaSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXQxIGE6Zmlyc3QtY2hpbGQgaSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MHB4LC02MHB4LDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTYwcHgsLTYwcHgsMCk7XHJcbn1cclxuXHJcbi5zZXQxIGE6bnRoLWNoaWxkKDIpIGkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LC02MHB4LDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNjBweCwtNjBweCwwKTtcclxufVxyXG5cclxuLnNldDIgYTpmaXJzdC1jaGlsZCBpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTYwcHgsNjBweCwwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MHB4LDYwcHgsMCk7XHJcbn1cclxuXHJcbi5zZXQyIGE6bnRoLWNoaWxkKDIpIGkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LDYwcHgsMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LDYwcHgsMCk7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBocjpudGgtY2hpbGQoMykge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSwtOTBkZWcpIHNjYWxlM2QoMSwxLDEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApIHJvdGF0ZTNkKDAsMCwxLC05MGRlZykgc2NhbGUzZCgxLDEsMSk7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBocjpudGgtY2hpbGQoNCkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSwtMTgwZGVnKSBzY2FsZTNkKDEsMSwxKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUzZCgwLDAsMSwtMTgwZGVnKSBzY2FsZTNkKDEsMSwxKTtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0OmhvdmVyIC5zZXQxIGk6ZW1wdHksIC5ob3ZlcmVmZmVjdDpob3ZlciAuc2V0MiBpOmVtcHR5IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/info/info.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  \n <div class=\"row\">\n\n    <div class=\"container\">\n\n        <div  class=\"d-flex justify-content-center\">\n            <h2 class=\"text-uppercase text-justify\">Dr0p ur 1nn0v4t10ns H3r3!</h2>\n          \n      \n        </div>\n         \n \n        <div  class=\"d-flex justify-content-center\">\n          \n            <h2 class=\"text-uppercase text-justify\"> W3 w1ll r3c0gn1z3 y0ur w0rk!</h2>\n      \n        </div>\n         \n      \n      <div class=\"d-flex justify-content-center\">\n      \n          <img src=\"../../../assets/logo.png\"  style=\"height:150px\"  alt=\"logo\">\n          <img src=\"../../../assets/tra.png\"    style=\"height:150px \"   alt=\"logo\">\n           \n      \n      </div>\n      \n      </div>\n         \n      \n </div> \n\n<div class=\"row mt-2 ml-2\">\n\n    <div  class=\"d-flex justify-content-center\">\n        <h2 class=\"text-uppercase text-justify\" style=\"color:Lavender\">WEBSITE DEVELOPED BY</h2>\n      \n  \n    </div>\n\n\n\n <div class=\"container-fluid\">\n  \n    <div class=\"row\">\n      \n      <div class=\"col mt-1\" >\n\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"../../../assets/guhP.jpg\" alt=\"guhan\">\n                  <div class=\"overlay\">\n                      <span><h2>Guhan S</h2></span>\n                      \n                      <p class=\"set1\">\n                          <a target=\"_blank\" href=\"https://www.linkedin.com/in/guhan-s-569a86146\">\n                              <i class=\"fa fa-linkedin\"></i>\n                          </a>\n                          <a target=\"_blank\" href=\"https://www.facebook.com/sparker.guhan\">\n                              <i class=\"fa fa-facebook\"></i>\n                          </a>\n                      </p>\n                      <hr>\n                      <hr>\n                      <p  class=\"set2\">\n                          <a target=\"_blank\" href=\"https://www.instagram.com/__guhan22\">\n                              <i class=\"fa fa-instagram\"></i>\n                          </a>\n                          <a target=\"_blank\" href=\"mailto:mailmeguhan98@gmail.com\">\n                              <i class=\"fa fa-envelope\"></i>\n                          </a>\n                      </p>\n      \n        </div>\n  \n  \n      </div>\n     \n\n\n      </div>\n      \n\n\n      <div class=\"col mt-1\" >\n\n                         \n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"../../../assets/gowP.jpg\" alt=\"guhan\">\n                  <div class=\"overlay\">\n                      <span><h2>Gowrisankar S P</h2></span>\n                      \n                      <p class=\"set1\">\n                          <a  target=\"_blank\" href=\"https://www.linkedin.com/in/sp-gowri-sankar-8b29a8139\">\n                              <i class=\"fa fa-linkedin\"></i>\n                          </a>\n                          <a  target=\"_blank\"  href=\"https://www.facebook.com/mass.hero.311\">\n                              <i class=\"fa fa-facebook\"></i>\n                          </a>\n                      </p>\n                      <hr>\n                      <hr>\n                      <p class=\"set2\">\n                          <a target=\"_blank\"  href=\"https://www.instagram.com/symbol_of_lol\">\n                              <i class=\"fa fa-instagram\"></i>\n                          </a>\n                          <a  target=\"_blank\" href=\"mailto:spgowrisankar@gmail.com\">\n                              <i class=\"fa fa-envelope\"></i>\n                          </a>\n                      </p>\n                  </div>\n  \n  \n                </div>\n  \n  \n   \n\n\n\n\n\n      </div>\n      \n    </div>\n  </div>\n\n</div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/components/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.div.main{\r\n\r\n\r\n  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('lap.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: #fff;\r\n  height: 650px;\r\n  \r\n\r\n}\r\n\r\n[class*=\"fontawesome-\"]:before {\r\n  font-family: 'FontAwesome', sans-serif;\r\n}\r\n\r\n/* ---------- GENERAL ---------- */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n    margin:0px auto;\r\n\r\n  &:before,\r\n  &:after {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n}\r\n\r\nbody {\r\n   \r\n    color: #606468;\r\n  font: 87.5%/1.5em 'Open Sans', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n\tcolor: #eee;\r\n\ttext-decoration: none;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\ninput {\r\n\tborder: none;\r\n\tfont-family: 'Open Sans', Arial, sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.5em;\r\n\tpadding: 0;\r\n\t-webkit-appearance: none;\r\n}\r\n\r\np {\r\n\tline-height: 1.5em;\r\n}\r\n\r\n.clearfix {\r\n  *zoom: 1;\r\n\r\n  &:before,\r\n  &:after {\r\n    content: ' ';\r\n    display: table;\r\n  }\r\n\r\n  &:after {\r\n    clear: both;\r\n  }\r\n\r\n}\r\n\r\n.container {\r\n  left: 50%;\r\n  position: fixed;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/* ---------- LOGIN ---------- */\r\n\r\n#login form{\r\n\twidth: 250px;\r\n}\r\n\r\n#login, .logo{\r\n    display:inline-block;\r\n    width:40%;\r\n}\r\n\r\n#login{\r\n\r\n  padding: 0px 22px;\r\n  width: 59%;\r\n}\r\n\r\n.logo{\r\ncolor:#fff;\r\nfont-size:50px;\r\n  line-height: 125px;\r\n  border-right:1px solid #fff;\r\n}\r\n\r\n#login form span.fa {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 3px 0px 0px 3px;\r\n\tcolor: #000;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\theight: 50px;\r\n    font-size:24px;\r\n\tline-height: 50px;\r\n\ttext-align: center;\r\n\twidth: 50px;\r\n}\r\n\r\n#login form input {\r\n\theight: 50px;\r\n}\r\n\r\nfieldset{\r\n    padding:0;\r\n    border:0;\r\n    margin: 0;\r\n\r\n}\r\n\r\n#login form input[type=\"text\"], input[type=\"password\"] {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 0px 3px 3px 0px;\r\n\tcolor: #000;\r\n\tmargin-bottom: 1em;\r\n\tpadding: 0 16px;\r\n\twidth: 200px;\r\n}\r\n\r\n#login form input[type=\"submit\"] {\r\n  border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  background-color: #eee;\r\n  color: #0264d6;\r\n  font-weight: bold;\r\n  /* margin-bottom: 2em; */\r\n  text-transform: uppercase;\r\n  padding: 5px 10px;\r\n  height: 30px;\r\n}\r\n\r\n#login form input[type=\"submit\"]:hover {\r\n\tbackground-color: #1c2b5a;\r\n}\r\n\r\n#login > p {\r\n\ttext-align: center;\r\n}\r\n\r\n#login > p span {\r\n\tpadding-left: 5px;\r\n}\r\n\r\n.middle {\r\n  display: flex;\r\n  width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztFQUdFLDJFQUEyRjtFQUMzRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTs7O0FBR2Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLHNCQUFzQjtJQUNwQixlQUFlOztFQUVqQjs7SUFFRSxzQkFBc0I7RUFDeEI7O0FBRUY7O0FBRUE7O0lBRUksY0FBYztFQUNoQix5Q0FBeUM7RUFDekMsU0FBUztBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiwyQ0FBMkM7Q0FDM0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Ysd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0dBQ0UsT0FBUTs7RUFFUjs7SUFFRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsUUFBUTtFQUNSLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUEsZ0NBQWdDOztBQUVoQztDQUNDLFlBQVk7QUFDYjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFDQTtBQUNBLFVBQVU7QUFDVixjQUFjO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtJQUNULGNBQWM7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7O0FBRWI7O0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5kaXYubWFpbntcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC43KSwgcmdiYSgwLDAsMCwuNykpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbGFwLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIFxyXG5cclxufVxyXG5cclxuW2NsYXNzKj1cImZvbnRhd2Vzb21lLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tIEdFTkVSQUwgLS0tLS0tLS0tLSAqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICBcclxuICAgIGNvbG9yOiAjNjA2NDY4O1xyXG4gIGZvbnQ6IDg3LjUlLzEuNWVtICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICNlZWU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMS41ZW07XHJcblx0cGFkZGluZzogMDtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLSBMT0dJTiAtLS0tLS0tLS0tICovXHJcblxyXG4jbG9naW4gZm9ybXtcclxuXHR3aWR0aDogMjUwcHg7XHJcbn1cclxuI2xvZ2luLCAubG9nb3tcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6NDAlO1xyXG59XHJcbiNsb2dpbntcclxuXHJcbiAgcGFkZGluZzogMHB4IDIycHg7XHJcbiAgd2lkdGg6IDU5JTtcclxufVxyXG4ubG9nb3tcclxuY29sb3I6I2ZmZjtcclxuZm9udC1zaXplOjUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEyNXB4O1xyXG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuI2xvZ2luIGZvcm0gc3Bhbi5mYSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4jbG9naW4gZm9ybSBpbnB1dCB7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG59XHJcbmZpZWxkc2V0e1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG59XHJcbiNsb2dpbiBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHRwYWRkaW5nOiAwIDE2cHg7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jbG9naW4gZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzAyNjRkNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvKiBtYXJnaW4tYm90dG9tOiAyZW07ICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxYzJiNWE7XHJcbn1cclxuXHJcbiNsb2dpbiA+IHAge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2xvZ2luID4gcCBzcGFuIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ubWlkZGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<img class=\"img-fluid \" src=\"../../../assets/a.png\" alt=\"LOGO\">\n\t\t\t\t\t\t\n\t\t\t\t<div id=\"login\" class=\"w-60\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<form (submit)=\"onSubmit()\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<fieldset class=\"clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<p ><span class=\"fa fa-user\"></span><input type=\"text\"  Placeholder=\"Email\" required \n\t\t\t\t\t\t\t\t[(ngModel)]=\"email\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\tname=\"email\"></p> \n\t\t\t\t\t\t\t<p><span class=\"fa fa-lock\"></span><input type=\"password\"  Placeholder=\"Password\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\tname=\"password\"></p> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span style=\"width:48%; text-align:left;  display: inline-block;\"><a class=\"small-text\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Forgot\n\t\t\t\t\t\t\t\t\tpassword?</a></span>\n\t\t\t\t\t\t\t\t\t<span style=\"width:50%; text-align:right;  display: inline-block;\"><input class=\"btn btn-primary\" type=\"submit\" value=\"Sign in\"></span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"collapse mt-2\" id=\"collapseExample\">\n\n\t\t\t\t\t\t\t\t<form (submit)=\"verify()\">\n\t\t\t\t\t\t\t\t\t<p ><span class=\"fa fa-refresh\"></span><input type=\"text\"  Placeholder=\"Email\" required \n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vemail\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tname=\"vemail\"></p> \n\n\t\t\t\t\t\t\t\t\t\t<span style=\"width:50%; text-align:center;  display: inline-block;\"><input class=\"btn btn-primary\" type=\"submit\" value=\"Send verfication Email\"></span>\n\n\n\n\n\t\t\t\t\t\t\t\t</form>\t\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"showRegister\">\n\t\t\t\t\t\t\t\t<div class=\"border-top border-secondary w-75 mt-2 \">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/register\" class=\"text-white\">Not a Member?Register here!</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, ss, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.ss = ss;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
        this.showRegister = this.ss.getSettings().allowRegistration;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.flashMessage.show('Logged in successfully!', {
                cssClass: 'alert-success mt-2', timeout: 5000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-danger mt-2', timeout: 5000
            });
        });
    };
    LoginComponent.prototype.verify = function () {
        var _this = this;
        this.authService.verify(this.vemail).then(function (res) {
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            console.log('error');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-posts/my-posts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/my-posts/my-posts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th{\r\n    color:Tomato\r\n}\r\n\r\ntd{\r\n    color:GhostWhite;\r\n}\r\n\r\nh5{\r\n    color:Salmon\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1wb3N0cy9teS1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LXBvc3RzL215LXBvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcclxuICAgIGNvbG9yOlRvbWF0b1xyXG59XHJcblxyXG50ZHtcclxuICAgIGNvbG9yOkdob3N0V2hpdGU7XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgY29sb3I6U2FsbW9uXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-posts/my-posts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/my-posts/my-posts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\n\n  <div class=\"row\">\n          <div class=\"col-md-10\">\n                 \n            \n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2>  <i class=\"fa fa-bookmark\"></i> My_Posts</h2>\n        \n    </div>\n    <div class=\"col-md-6\">\n        <h5 class=\"text-right\">No. of Posts: {{posts?.length}}</h5>\n    </div>\n    \n  </div>\n  \n  <table *ngIf=\"posts?.length>0;else noPosts \" class=\"table table-striped table-responsive\">\n    <thead class=\"thead-inverse\">\n        <tr>\n            <th>Title</th>\n            <th>Domains</th>\n            <th>Holder Name</th>\n            <th>Department</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let post of posts\" >\n            <td>{{post.title}}</td>\n            <td>{{post.domains}}</td>\n            <td>{{post.name |uppercase}}</td>\n            <td>{{post.dept  |uppercase}}</td>\n            <td><a routerLink=\"/post/{{post.id}}\"  class=\"btn btn-info btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Details</a> </td>\n        </tr>\n    </tbody>\n  </table>\n  \n  \n  <ng-template #noPosts>\n    <hr>\n    <h5><i class=\"fa fa-exclamation-triangle\"></i> There are no posts till now!</h5>\n  </ng-template>\n  \n  \n  \n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n          <div class=\"col-md-2\">\n              <app-sidebar></app-sidebar>\n      \n          </div>\n      </div>\n      \n      \n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/my-posts/my-posts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/my-posts/my-posts.component.ts ***!
  \***********************************************************/
/*! exports provided: MyPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPostsComponent", function() { return MyPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var MyPostsComponent = /** @class */ (function () {
    function MyPostsComponent(postService, authService) {
        this.postService = postService;
        this.authService = authService;
    }
    MyPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.loggedInUser = auth.email;
            }
            else {
                _this.loggedInUser = 'false';
            }
        });
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            _this.uPost = _this.posts.filter(function (element) { return element.user == _this.loggedInUser; });
            _this.posts = _this.uPost;
            //console.log(this.uPost);
            // //console.log(this.posts.length);
            // for(this.i=0;this.i<=this.posts.length;this.i++){
            //   if (this.posts[this.i].user==this.loggedInUser){        
            //     console.log('yes');
            //     //this.uPost.push(this.posts[this.i]);
            //   }
            // }
            // console.log(this.uPost);    
        });
    };
    MyPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-posts',
            template: __webpack_require__(/*! ./my-posts.component.html */ "./src/app/components/my-posts/my-posts.component.html"),
            styles: [__webpack_require__(/*! ./my-posts.component.css */ "./src/app/components/my-posts/my-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["postService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MyPostsComponent);
    return MyPostsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n    background-color: rgba(139, 69, 19,0.3);\r\n    border-color: rgba(139, 69, 19,0.3);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksIDY5LCAxOSwwLjMpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzOSwgNjksIDE5LDAuMyk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  \">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">Innova Cell</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n      <ul class=\"navbar-nav mr-auto\">\n\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n\n        <li *ngIf=\"isLoggedIn\"   \n         class=\"nav-item\">\n          <a *ngIf=\"loggedInUser=='admin@gmail.com' \" routerLink=\"settings\"  class=\"nav-link\">Settings</a>\n        </li>\n\n        <li *ngIf=\"isLoggedIn\"   \n         class=\"nav-item\">\n          <a  routerLink=\"user/my_posts\"  class=\"nav-link\">{{loggedInUser}}</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\"  \n        class=\"nav-item\">\n\n          <a routerLink=\"/login\"\n          (click)=\"onLogoutClick()\"  class=\"nav-link\">Logout</a>\n        </li>\n        <li  *ngIf=\"!isLoggedIn && showRegister\" \n        class=\"nav-item\">\n            <a \n            routerLink=\"/register\"  class=\"nav-link\">Register</a>\n          </li>\n\n          <li\n        class=\"nav-item\">\n            <a \n            routerLink=\"/info\"  class=\"nav-link\"><i class=\"fa fa-info-circle\"> Info</i></a>\n          </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, ss, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.ss = ss;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.showRegister = this.ss.getSettings().allowRegistration;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You logged out!', {
            cssClass: 'alert-info mt-2', timeout: 5000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n  \r\n  #notfound .notfound-bg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('bg.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  #notfound .notfound-bg:after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.7);\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 910px;\r\n    width: 100%;\r\n    line-height: 1.4;\r\n    text-align: center;\r\n  }\r\n  \r\n  .notfound .notfound-404 {\r\n    position: relative;\r\n    height: 200px;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 220px;\r\n    font-weight: 900;\r\n    margin: 0px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    letter-spacing: 10px;\r\n  }\r\n  \r\n  .notfound h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    margin-top: 20px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .notfound .home-btn, .notfound .contact-btn {\r\n    font-family: 'Montserrat', sans-serif;\r\n    display: inline-block;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    border: 2px solid transparent;\r\n    text-transform: uppercase;\r\n    padding: 13px 25px;\r\n    font-size: 18px;\r\n    border-radius: 40px;\r\n    margin: 7px;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n  .notfound .home-btn:hover, .notfound .contact-btn:hover {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .notfound .home-btn {\r\n    color: rgba(0, 123, 255, 0.7);\r\n    background: #fff;\r\n  }\r\n  \r\n  .notfound .contact-btn {\r\n    border: 2px solid rgba(255, 255, 255, 0.9);\r\n    color: rgba(255, 255, 255, 0.9);\r\n  }\r\n  \r\n  .notfound-social {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .notfound-social>a {\r\n    display: inline-block;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    width: 40px;\r\n    font-size: 14px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    margin: 0px 6px;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n  .notfound-social>a:hover {\r\n    color: rgba(255, 0, 36, 0.7);\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 182px;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound .notfound-404 {\r\n      height: 146px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 146px;\r\n    }\r\n    .notfound h2 {\r\n      font-size: 16px;\r\n    }\r\n    .notfound .home-btn, .notfound .contact-btn {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSxzQkFBc0I7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLCtCQUErQztJQUMvQyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0NBQXdDO1lBRWhDLGdDQUFnQztFQUMxQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0NBQXdDO1lBRWhDLGdDQUFnQztJQUN4QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBRVgsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQywrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixlQUFlO0lBRWYsb0JBQW9CO0VBQ3RCOztFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZC1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZC1iZzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCB7XHJcbiAgICBtYXgtd2lkdGg6IDkxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLmhvbWUtYnRuLCAubm90Zm91bmQgLmNvbnRhY3QtYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAuaG9tZS1idG46aG92ZXIsIC5ub3Rmb3VuZCAuY29udGFjdC1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLmhvbWUtYnRuIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjcpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5jb250YWN0LWJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQtc29jaWFsIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZC1zb2NpYWw+YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICB9XHJcbiAgLm5vdGZvdW5kLXNvY2lhbD5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMzYsIDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTgycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgICAgaGVpZ2h0OiAxNDZweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxNDZweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCAuaG9tZS1idG4sIC5ub3Rmb3VuZCAuY29udGFjdC1idG4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t<div class=\"notfound-bg\"></div>\n\t<div class=\"notfound\">\n\t\t<div class=\"notfound-404\">\n\t\t\t<h1>404</h1>\n\t\t</div>\n\t\t<h2>we are sorry, but the page you requested was not found</h2>\n\t\t<a routerLink=\"/\" class=\"home-btn\">Go Home</a>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert p{\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n\r\n b,h4,li{\r\n   color:DarkSlateGray;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0NBRUQ7R0FDRSxtQkFBbUI7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcblxyXG4gYixoNCxsaXtcclxuICAgY29sb3I6RGFya1NsYXRlR3JheTtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\"  class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to posts\n      </a>\n    </div>\n    <div class=\"col-md-6\">\n      <div  *ngIf=\"loggedInUser==argxyz || loggedInUser=='admin@gmail.com' \" class=\"btn-group pull-right\">\n        <a  routerLink=\"/post/edit/{{ id }}\" class=\"btn btn-dark\">\n        Edit\n        </a>\n  \n        <button  (click)=\"onDeleteClick()\"  class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <!-- <h5 class=\"text-info pl-5\"> {{post.name}}</h5> \n  <span class=\"pull-right text-info\">{{post.name}}</span>-->\n  <div *ngIf=\"post\" class=\"card\">\n    <h3 class=\"card-header \" style=\"color:black\">{{post.title}}  <h6 class=\"text-info \"> {{post.name}}</h6></h3> \n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-6\">\n          <h4><b>DOMAINS: </b>{{post.domains}}</h4>\n        </div>\n        <div class=\"col-md-8 col-sm-6\">\n            <h3 class=\"pull-right text-secondary\">Posted On\n                <span >\n                    | {{ post.time | date }}</span>\n                    \n  \n            </h3>\n\n          </div>\n      </div>\n  \n  <hr>\n  <p> <b>AUTHOR DETAILS</b>\n    <a class=\"btn btn-primary btn-sm ml-2\" data-toggle=\"collapse\" \n    href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n       <i  [ngClass]=\"hide?'fa fa-angle-down':'fa fa-angle-up' \"\n       (click)=\" this.hide = !this.hide \"\n       aria-hidden=\"true\"\n       ></i>\n    </a>\n    \n  </p>\n  <div class=\"collapse\" id=\"collapseExample\">\n      <ul class=\"list-group\">\n          <li class=\"list-group-item\"><b>NAME: </b>{{post.name}}</li>\n          <li class=\"list-group-item\"><b>Email:</b> {{post.email}}</li>\n          <li class=\"list-group-item\"><b>DEPARTMENT: </b>{{post.dept}}</li>\n          <li class=\"list-group-item\"><b>Roll No. : </b>{{post.rollno}}</li>\n          \n        </ul>\n    \n  </div>\n    <hr>\n\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\"><b>SHORT DESCRIPTION: </b>{{post.shortDesc}}</li>\n        <li class=\"list-group-item\" *ngIf=\"loggedInUser==argxyz || loggedInUser=='admin@gmail.com' \"><b>ABSTRACT URL: </b>\n          <a [href]=\"downloadURL\" target=\"_blank\">{{downloadURL}}</a></li>\n      </ul>\n    </div>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ed.service */ "./src/app/services/ed.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);








var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router, route, flashMessage, authService, ed, afStorage) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.ed = ed;
        this.afStorage = afStorage;
        this.hide = true;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        //id frm URL
        this.id = this.route.snapshot.params['id'];
        //Getting the post
        this.postService.getPost(this.id).subscribe(function (post) {
            _this.argxyz = post.user;
            _this.authService.getAuth().subscribe(function (auth) {
                if (auth) {
                    _this.loggedInUser = auth.email;
                }
                else {
                    _this.loggedInUser = 'false';
                }
            });
            //console.log(this.loggedInUser);
            //this.allowEd=this.ed.getEd(this.argxyz);
            //console.log(this.allowEd,'E/D');
            //------------------file url
            var id = post.fileId;
            _this.ref = _this.afStorage.ref(id);
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.downloadURL = url;
                //console.log(this.downloadURL);
            });
            //------------------------
            _this.post = post;
            //console.log(post);
            var x = post.time['seconds'];
            //console.log(x);
            try {
                var dat = new Date((parseInt(x)) * 1000);
            }
            catch (error) {
                console.log(error);
            }
            //console.log(dat);
            post.time = dat;
            //console.log(post.email);
        });
    };
    PostComponent.prototype.onDeleteClick = function () {
        if (confirm('Are you sure?')) {
            this.postService.deletePost(this.post);
            this.flashMessage.show('Idea Removed!', {
                cssClass: 'alert-success mt-2', timeout: 5000
            });
            this.router.navigate(['/']);
        }
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["postService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_ed_service__WEBPACK_IMPORTED_MODULE_6__["EdService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th{\r\n    color:Tomato;\r\n}\r\n\r\ntd{\r\n    color:GhostWhite;\r\n}\r\n\r\nh5{\r\n    color:Salmon;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcclxuICAgIGNvbG9yOlRvbWF0bztcclxufVxyXG5cclxudGR7XHJcbiAgICBjb2xvcjpHaG9zdFdoaXRlO1xyXG59XHJcblxyXG5oNXtcclxuICAgIGNvbG9yOlNhbG1vbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>  <i class=\"fa fa-bookmark\"></i> Posts</h2>\r\n            \r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <h5 class=\"text-right\">No. of Posts: {{posts?.length}}</h5>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n    <table *ngIf=\"posts?.length>0;else noPosts \" class=\"table table-striped table-responsive\">\r\n        <thead class=\"thead-inverse\">\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Domains</th>\r\n                <th>Holder Name</th>\r\n                <th>Department</th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let post of posts\">\r\n                <td>{{post.title}}</td>\r\n                <td>{{post.domains}}</td>\r\n                <td>{{post.name |uppercase}}</td>\r\n                <td>{{post.dept  |uppercase}}</td>\r\n                <td><a routerLink=\"post/{{post.id}}\"  class=\"btn btn-info btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Details</a> </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n    \r\n    <ng-template #noPosts>\r\n        <hr>\r\n        <h5><i class=\"fa fa-exclamation-triangle\"></i> There are no posts till now!</h5>\r\n    </ng-template>\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["postService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div.main{\r\n    background: #0264d6; \r\nbackground: -moz-radial-gradient(center, ellipse cover,  #0264d6 1%, #1c2b5a 100%);\r\nbackground: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%,#0264d6), color-stop(100%,#1c2b5a));\r\nbackground: -webkit-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%); \r\nbackground: -o-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%); \r\nbackground: -ms-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%);\r\nbackground: radial-gradient(ellipse at center,  #0264d6 1%,#1c2b5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0264d6', endColorstr='#1c2b5a',GradientType=1 ); \r\nheight:calc(100vh);\r\nwidth:100%;\r\n} */\r\n\r\n\r\n\r\n.div.main{\r\n\r\n\r\n  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('lap.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: #fff;\r\n  height: 650px;\r\n  \r\n\r\n}\r\n\r\n\r\n\r\n[class*=\"fontawesome-\"]:before {\r\n  font-family: 'FontAwesome', sans-serif;\r\n}\r\n\r\n\r\n\r\n/* ---------- GENERAL ---------- */\r\n\r\n\r\n\r\n* {\r\n  box-sizing: border-box;\r\n    margin:0px auto;\r\n\r\n  &:before,\r\n  &:after {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\nbody {\r\n   \r\n    color: #606468;\r\n  font: 87.5%/1.5em 'Open Sans', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\na {\r\n\tcolor: #eee;\r\n\ttext-decoration: none;\r\n}\r\n\r\n\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n\r\n\r\ninput {\r\n\tborder: none;\r\n\tfont-family: 'Open Sans', Arial, sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.5em;\r\n\tpadding: 0;\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\np {\r\n\tline-height: 1.5em;\r\n}\r\n\r\n\r\n\r\n.clearfix {\r\n  *zoom: 1;\r\n\r\n  &:before,\r\n  &:after {\r\n    content: ' ';\r\n    display: table;\r\n  }\r\n\r\n  &:after {\r\n    clear: both;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n.container {\r\n  left: 50%;\r\n  position: fixed;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n/* ---------- LOGIN ---------- */\r\n\r\n\r\n\r\n#login form{\r\n\twidth: 250px;\r\n}\r\n\r\n\r\n\r\n#login, .logo{\r\n    display:inline-block;\r\n    width:40%;\r\n}\r\n\r\n\r\n\r\n#login{\r\n\r\n  padding: 0px 22px;\r\n  width: 59%;\r\n}\r\n\r\n\r\n\r\n.logo{\r\ncolor:#fff;\r\nfont-size:50px;\r\n  line-height: 125px;\r\n  border-right:1px solid #fff;\r\n}\r\n\r\n\r\n\r\n#login form span.fa {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 3px 0px 0px 3px;\r\n\tcolor: #000;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\theight: 50px;\r\n    font-size:24px;\r\n\tline-height: 50px;\r\n\ttext-align: center;\r\n\twidth: 50px;\r\n}\r\n\r\n\r\n\r\n#login form input {\r\n\theight: 50px;\r\n}\r\n\r\n\r\n\r\nfieldset{\r\n    padding:0;\r\n    border:0;\r\n    margin: 0;\r\n\r\n}\r\n\r\n\r\n\r\n#login form input[type=\"text\"], input[type=\"password\"] {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 0px 3px 3px 0px;\r\n\tcolor: #000;\r\n\tmargin-bottom: 1em;\r\n\tpadding: 0 16px;\r\n\twidth: 200px;\r\n}\r\n\r\n\r\n\r\n#login form input[type=\"submit\"] {\r\n  border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  background-color: #eee;\r\n  color: #0264d6;\r\n  font-weight: bold;\r\n  /* margin-bottom: 2em; */\r\n  text-transform: uppercase;\r\n  padding: 5px 10px;\r\n  height: 30px;\r\n}\r\n\r\n\r\n\r\n#login form input[type=\"submit\"]:hover {\r\n\tbackground-color: #1c2b5a;\r\n}\r\n\r\n\r\n\r\n#login > p {\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n#login > p span {\r\n\tpadding-left: 5px;\r\n}\r\n\r\n\r\n\r\n.middle {\r\n  display: flex;\r\n  width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOzs7O0FBSUg7OztFQUdFLDJFQUEyRjtFQUMzRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTs7O0FBR2Y7Ozs7QUFHQTtFQUNFLHNDQUFzQztBQUN4Qzs7OztBQUVBLGtDQUFrQzs7OztBQUVsQztFQUNFLHNCQUFzQjtJQUNwQixlQUFlOztFQUVqQjs7SUFFRSxzQkFBc0I7RUFDeEI7O0FBRUY7Ozs7QUFFQTs7SUFFSSxjQUFjO0VBQ2hCLHlDQUF5QztFQUN6QyxTQUFTO0FBQ1g7Ozs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7Ozs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7OztBQUVBO0NBQ0MsWUFBWTtDQUNaLDJDQUEyQztDQUMzQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVix3QkFBd0I7QUFDekI7Ozs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7OztBQUVBO0dBQ0UsT0FBUTs7RUFFUjs7SUFFRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjs7OztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixRQUFRO0VBQ1Isd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7OztBQUVBLGdDQUFnQzs7OztBQUVoQztDQUNDLFlBQVk7QUFDYjs7OztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjs7OztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7Ozs7QUFDQTtBQUNBLFVBQVU7QUFDVixjQUFjO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7OztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0lBQ1QsY0FBYztDQUNqQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7OztBQUVBO0NBQ0MsWUFBWTtBQUNiOzs7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7O0FBRWI7Ozs7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsWUFBWTtBQUNiOzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7Ozs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7OztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COzs7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXYubWFpbntcclxuICAgIGJhY2tncm91bmQ6ICMwMjY0ZDY7IFxyXG5iYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjMDI2NGQ2IDElLCAjMWMyYjVhIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDElLCMwMjY0ZDYpLCBjb2xvci1zdG9wKDEwMCUsIzFjMmI1YSkpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjMDI2NGQ2IDElLCMxYzJiNWEgMTAwJSk7IFxyXG5iYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgIzAyNjRkNiAxJSwjMWMyYjVhIDEwMCUpOyBcclxuYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjMDI2NGQ2IDElLCMxYzJiNWEgMTAwJSk7XHJcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgICMwMjY0ZDYgMSUsIzFjMmI1YSAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMjY0ZDYnLCBlbmRDb2xvcnN0cj0nIzFjMmI1YScsR3JhZGllbnRUeXBlPTEgKTsgXHJcbmhlaWdodDpjYWxjKDEwMHZoKTtcclxud2lkdGg6MTAwJTtcclxufSAqL1xyXG5cclxuXHJcblxyXG4uZGl2Lm1haW57XHJcblxyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNyksIHJnYmEoMCwwLDAsLjcpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xhcC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG5bY2xhc3MqPVwiZm9udGF3ZXNvbWUtXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0gR0VORVJBTCAtLS0tLS0tLS0tICovXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuYm9keSB7XHJcbiAgIFxyXG4gICAgY29sb3I6ICM2MDY0Njg7XHJcbiAgZm9udDogODcuNSUvMS41ZW0gJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogI2VlZTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxucCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gICp6b29tOiAxO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tIExPR0lOIC0tLS0tLS0tLS0gKi9cclxuXHJcbiNsb2dpbiBmb3Jte1xyXG5cdHdpZHRoOiAyNTBweDtcclxufVxyXG4jbG9naW4sIC5sb2dve1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0MCU7XHJcbn1cclxuI2xvZ2lue1xyXG5cclxuICBwYWRkaW5nOiAwcHggMjJweDtcclxuICB3aWR0aDogNTklO1xyXG59XHJcbi5sb2dve1xyXG5jb2xvcjojZmZmO1xyXG5mb250LXNpemU6NTBweDtcclxuICBsaW5lLWhlaWdodDogMTI1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4jbG9naW4gZm9ybSBzcGFuLmZhIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmbG9hdDogbGVmdDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiBmb3JtIGlucHV0IHtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbn1cclxuZmllbGRzZXR7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbn1cclxuI2xvZ2luIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAwcHggM3B4IDNweCAwcHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cdHBhZGRpbmc6IDAgMTZweDtcclxuXHR3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjMDI2NGQ2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDJlbTsgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuI2xvZ2luIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFjMmI1YTtcclxufVxyXG5cclxuI2xvZ2luID4gcCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9naW4gPiBwIHNwYW4ge1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5taWRkbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<img class=\"img-fluid \" src=\"../../../assets/a.png\" alt=\"LOGO\">\n\t\t\t\t\t\t\n\t\t\t\t<div id=\"login\" class=\"w-60\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t<form (submit)=\"onSubmit()\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<fieldset class=\"clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<p ><span class=\"fa fa-user\"></span><input type=\"text\"  Placeholder=\"Email\" required\n\t\t\t\t\t\t\t\t[(ngModel)]=\"email\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\tname=\"email\"></p> \n\t\t\t\t\t\t\t<p><span class=\"fa fa-lock\"></span><input type=\"password\"  Placeholder=\"Password\" required\n\t\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\tname=\"password\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"></p> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<span style=\" text-align:right;  display: inline-block;\"><input class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Register\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"border-top border-secondary w-75 mt-2 \">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\" class=\"text-white\">Already Member?</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password).then(function (res) {
            _this.flashMessage.show('Registered successfully!', {
                cssClass: 'alert-success mt-2', timeout: 5000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-danger mt-2', timeout: 5000
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Dashboard\n      </a>\n    </div>\n    <div class=\"col-md-6\"></div>\n  </div>\n  \n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      Edit Settings\n    </div>\n    <div class=\"card-body\">\n      <form (submit)=\"onSubmit()\">\n  \n        <div class=\"form-group\">\n            <label>Allow Registration</label>\n            <input  type=\"checkbox\" \n            class=\"ml-4\"\n            name=\"allowRegistration\" \n            #allowRegistration=\"ngModel\"\n            [(ngModel)]=\"settings.allowRegistration\"\n            [checked]=\"settings.allowRegistration\" >\n      \n  \n        </div>\n  \n        <div class=\"form-group\">\n            <label>Disable New Post  </label>\n            <input   type=\"checkbox\" \n            class=\"ml-4\"\n            name=\"disableNewPost\" \n            [checked]=\"settings.disableNewPost\" \n            #disableNewPost=\"ngModel\"\n            [(ngModel)]=\"settings.disableNewPost\"\n            >\n      \n  \n        </div>\n  \n  \n        <input type=\"submit\" value=\"Change Settings\" class=\"btn btn-warning btn-block\">\n       \n      </form>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, flashMessage, settingsService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
        ///console.log(this.settings);
    };
    SettingsComponent.prototype.onSubmit = function () {
        //console.log(this.settings.disableNewPost,this.settings.allowRegistration);
        this.settingsService.changeSettings(this.settings);
        this.flashMessage.show('Settings Changed!', {
            cssClass: 'alert-success mt-2', timeout: 4000
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <a *ngIf=\"!disableNewPost\" routerLink=\"/user/post/add\" class=\"btn btn-success btn-block\">\n      <i class=\"fa fa-plus\"></i> NEW\n      </a>\n\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(ss) {
        this.ss = ss;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.disableNewPost = this.ss.getSettings().disableNewPost;
        //this.disableNewPost=false;
        //console.log(this.disableNewPost);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/upload/upload.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rcorners2 {\r\n    border-radius: 15px 50px 30px;\r\n    background: #28A745;\r\n    \r\n  }\r\n\r\n  .alert p{\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1COztFQUVyQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyY29ybmVyczIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhBNzQ1O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYWxlcnQgcHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/upload/upload.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back to Posts</a>\n    </div>\n    <div class=\"col-md-6\">\n    </div>\n  </div>\n     \n    <div class=\"card\">\n    \n        <div class=\"mx-auto mt-2 mb-2 w-50 \" > \n        <h2 class=\"card-header text-center text-white\" id=rcorners2><i class=\"fa fa-plus-circle\"></i> NEW IDEA</h2> \n        </div>  \n        <div class=\"card-body\">\n          <form #postForm=\"ngForm\" (ngSubmit)=\"onSubmit(postForm)\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"text-dark\"><i class=\"fa fa-user\"></i> Author Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"name\"\n                #postName=\"ngModel\"\n                [(ngModel)]=\"post.name\"\n                minlength=\"2\"\n                required\n                [ngClass]=\"{'is-invalid':postName.errors && postName.touched}\"\n              >\n\n            <div [hidden]=\"!postName.errors?.required\" class=\"invalid-feedback\">Name required & Atleast Two Characters</div>\n            <div [hidden]=\"!postName.errors?.minlength\" class=\"invalid-feedback\">Must be atleast two letters</div>\n              \n            </div>\n           \n    \n                      \n            <div class=\"form-group\">\n              <label for=\"rollno\" class=\"text-dark\"><i class=\"fa fa-vcard-o\"></i> Roll Number</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"rollno\"\n                #postRoll=\"ngModel\"\n                [(ngModel)]=\"post.rollno\" \n                minlength=\"7\"\n                required\n\n                [ngClass]=\"{'is-invalid': postRoll.errors && postRoll.touched}\"\n              >\n              <div [hidden]=\"!postRoll.errors?.required\" class=\"invalid-feedback\">Roll Number required</div>\n              <div [hidden]=\"!postRoll.errors?.minlength\" class=\"invalid-feedback\">Must be 7 digit</div>\n            \n            </div>\n    \n    \n    \n            <div class=\"form-group\">\n              <label for=\"dept\" class=\"text-dark\"><i class=\"fa fa-mortar-board\"></i> Department</label>\n               \n                <select class=\"form-control bg-primary text-white\" \n                        id=\"dept\"\n                        name=\"dept\"\n                        #postdept=\"ngModel\"\n                        [(ngModel)]=\"post.dept\"\n                        \n                        required\n                        [ngClass]=\"{'is-invalid': postdept.errors && postdept.touched}\"\n                >\n                  <option [ngValue]=\"null\" selected>-Select Department-</option>\n                  <option value=\"BME\">BME</option>\n                  <option value=\"CIVIL\">CIVIL</option>\n                  <option value=\"CSE\">CSE</option>\n                  <option value=\"ECE\">ECE</option>\n                  <option value=\"EEE\">EEE</option>\n                  <option value=\"IT\">IT</option>\n                  <option value=\"MECH\">MECH</option>\n                </select>\n\n              <div [hidden]=\"!postRoll.errors?.required\" class=\"invalid-feedback\">Department required</div>\n            \n            </div>\n    \n            \n            <div class=\"form-group\">\n              <label for=\"email\" class=\"text-dark\"><i class=\"fa fa-envelope\"></i> Email</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"email\"\n                #postEmail=\"ngModel\"\n                [(ngModel)]=\"post.email\"\n                required\n                [ngClass]=\"{'is-invalid': postEmail.errors && postEmail.touched}\"\n                pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n              >\n              <div [hidden]=\"!postEmail.errors?.required\" class=\"invalid-feedback\">Email required</div>\n              <div [hidden]=\"!postEmail.errors?.pattern\" class=\"invalid-feedback\">Email must be in 'someone@domain.com' format</div>\n            \n            </div>\n    \n            <div class=\"form-group\">\n              <label for=\"title\" class=\"text-dark\"><i class=\"fa fa-align-center\"></i> Title</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"title\"\n                #postTitle=\"ngModel\"\n                [(ngModel)]=\"post.title\"\n                minlength=\"2\"\n          \n              \n                required\n                [ngClass]=\"{'is-invalid': postTitle.errors && postTitle.touched}\"\n              >\n              <div [hidden]=\"!postTitle.errors?.required\" class=\"invalid-feedback\">Title required</div>\n              <div [hidden]=\"!postTitle.errors?.minlength\" class=\"invalid-feedback\">Must be 2 words atleast!</div>\n            \n            </div>\n    \n    \n    \n            <div class=\"form-group\">\n                <label for=\"domains\" class=\"text-dark\"><i class=\"fa fa-cubes\"></i> Domains</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"domains\"\n                  #postDomains=\"ngModel\"\n                  [(ngModel)]=\"post.domains\"\n                  minlength=\"2\"\n            \n                  required\n                  [ngClass]=\"{'is-invalid': postDomains.errors && postDomains.touched}\"\n                >\n                <div [hidden]=\"!postDomains.errors?.required\" class=\"invalid-feedback\">Domains required</div>\n                <div [hidden]=\"!postDomains.errors?.minlength\" class=\"invalid-feedback\">Must be 2 words atleast!</div>\n              </div>\n    \n    \n    \n                  <div class=\"form-group\">\n                    <label for=\"shortDesc\" class=\"text-dark\"><i class=\"fa fa-file-o\"></i> Short Description</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"shortDesc\"\n                      #postDesc=\"ngModel\"\n                      [(ngModel)]=\"post.shortDesc\"\n                      minlength=\"20\"\n                    \n                      required\n                      [ngClass]=\"{'is-invalid': postDesc.errors && postDesc.touched}\"\n                    >\n                    <div [hidden]=\"!postDesc.errors?.required\" class=\"invalid-feedback\">Description required</div>\n                    <div [hidden]=\"!postDesc.errors?.minlength\" class=\"invalid-feedback\">Must be 20 words atleast!</div>\n                  \n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"abs\" class=\"text-dark\"><i class=\"fa fa-file-pdf-o\"></i> Abstract File</label>\n                    <input\n                      type=\"file\"\n                      class=\"form-control-file w-50\"\n                      name=\"abs\"\n                      #abs=\"ngModel\"\n                      [(ngModel)]=\"post.abs\"\n                      (change)=\"upload($event)\" \n                      accept=\".pdf\"\n\n                      required\n                      [ngClass]=\"{'is-invalid': abs.errors && abs.touched}\"\n                    > \n\n                    <input \n                    type=\"url\" \n                    *ngIf=\"downloadURL\" \n                    class=\"form-control-sm mt-2\" \n                    name=\"fileURL\"\n                    #fileURL\n                    disabled\n                    \n                    [(value)]=downloadURL>\n                    \n                    <div class=\"text-secondary small \">*upload abstract as pdf </div>\n                    <div [hidden]=\"!abs.errors?.required\" class=\"invalid-feedback\">Abstarct required</div>\n                   \n                    \n               \n                            \n                    <div *ngIf=\"!downloadURL\" class=\"progress mt-2\">\n                      <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-primary \" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" \n                      [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                      </div>\n                      \n                    </div>      \n \n            \n                  </div>\n\n\n\n\n                    <input type=\"submit\" value=\"Submit\" class=\"btn btn-block btn-success\">      \n          \n          </form>\n\n\n          <div>\n\n\n        </div>\n\n\n    </div>\n</div> \n\n\n    \n    \n    \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);








var UploadComponent = /** @class */ (function () {
    function UploadComponent(flashMessage, postService1, router, authService, afStorage) {
        this.flashMessage = flashMessage;
        this.postService1 = postService1;
        this.router = router;
        this.authService = authService;
        this.afStorage = afStorage;
        this.post = {
            name: '',
            rollno: '',
            dept: '',
            email: '',
            title: '',
            domains: '',
            shortDesc: '',
            time: new Date(),
            fileId: '',
            abs: ''
        };
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.loggedInUser = auth.email;
            }
            else {
                _this.loggedInUser = 'false';
            }
        });
    };
    UploadComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show('Please fill out the form correctly!!', {
                cssClass: 'alert-danger mt-2', timeout: 5000
            });
        }
        else {
            //adding time
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth();
            var yyyy = today.getFullYear();
            var hr = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            var ms = today.getMilliseconds();
            console.log(today, dd, mm, yyyy);
            delete value.abs;
            value.time = new Date(yyyy, mm, dd, hr, min, sec, ms);
            value.user = this.loggedInUser;
            value.fileId = this.fileId;
            //value.fileURL=this.downloadURL;
            //posting!!!
            this.postService1.newPost(value);
            //console.log(value);
            //show message!
            this.flashMessage.show('Posted successfully!', {
                cssClass: 'alert-success mt-2', timeout: 5000
            });
            //redirect
            this.router.navigate(['/']);
        }
    };
    UploadComponent.prototype.upload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        this.fileId = id;
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.downloadURL = url;
                //console.log(this.downloadURL);
            });
        })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "form", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/components/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_3__["postService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth.guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/ed.guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/guards/ed.guard.service.ts ***!
  \********************************************/
/*! exports provided: EdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdGuard", function() { return EdGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ed.service */ "./src/app/services/ed.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");






var EdGuard = /** @class */ (function () {
    function EdGuard(router, ed, route, postService, authService) {
        var _this = this;
        this.router = router;
        this.ed = ed;
        this.route = route;
        this.postService = postService;
        this.authService = authService;
        this.id = this.route.snapshot.params['id'];
        this.postService.getPost(this.id).subscribe(function (post) { _this.post = post; });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.cUser = auth.email;
            }
            else {
                _this.cUser = 'false';
            }
        });
    }
    EdGuard.prototype.canActivate = function () {
        if (this.post.user == this.cUser) {
            console.log(this.post.user);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    EdGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ed_service__WEBPACK_IMPORTED_MODULE_3__["EdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_5__["postService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], EdGuard);
    return EdGuard;
}());



/***/ }),

/***/ "./src/app/guards/register.guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/register.guard.service.ts ***!
  \**************************************************/
/*! exports provided: RegisterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuard", function() { return RegisterGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");




var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (this.settingsService.getSettings().allowRegistration) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    RegisterGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "./src/app/services/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/services/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_upload_edit_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/edit-upload/edit-upload.component */ "./src/app/components/edit-upload/edit-upload.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _guards_register_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guards/register.guard.service */ "./src/app/guards/register.guard.service.ts");
/* harmony import */ var _guards_ed_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/ed.guard.service */ "./src/app/guards/ed.guard.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../guards/auth.guard.service */ "./src/app/guards/auth.guard.service.ts");
/* harmony import */ var _components_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/my-posts/my-posts.component */ "./src/app/components/my-posts/my-posts.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/info/info.component */ "./src/app/components/info/info.component.ts");

















var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'info', component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], canActivate: [_guards_register_guard_service__WEBPACK_IMPORTED_MODULE_12__["RegisterGuard"]] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/posts', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/my_posts', component: _components_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_15__["MyPostsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'post/:id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/post/add', component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'post/edit/:id', component: _components_edit_upload_edit_upload_component__WEBPACK_IMPORTED_MODULE_6__["EditUploadComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _guards_register_guard_service__WEBPACK_IMPORTED_MODULE_12__["RegisterGuard"], _guards_ed_guard_service__WEBPACK_IMPORTED_MODULE_13__["EdGuard"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, fs) {
        this.afAuth = afAuth;
        this.fs = fs;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.verify = function (email) {
        var _this = this;
        return new Promise(function (reject) {
            _this.afAuth.auth.sendPasswordResetEmail(email).then(function () {
                _this.fs.show('Verification Email sent!', {
                    cssClass: 'alert-info mt-2', timeout: 5000
                });
            })
                .catch(function (error) {
                _this.fs.show(error.message, {
                    cssClass: 'alert-danger mt-2', timeout: 5000
                });
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/ed.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ed.service.ts ***!
  \****************************************/
/*! exports provided: EdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdService", function() { return EdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var EdService = /** @class */ (function () {
    function EdService(authService) {
        this.authService = authService;
        this.ed = {
            allowEd: true,
            author: '',
            loggedInuser: ''
        };
    }
    EdService.prototype.getEd = function (authorUser) {
        var _this = this;
        this.previousU = authorUser;
        var jso = this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                var tempxy = auth.email;
                _this.log = tempxy;
                //console.log(tempxy);
            }
            else {
                _this.log = 'false';
            }
        });
        //console.log(this.previousU);
        return this.approval;
    };
    EdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EdService);
    return EdService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: postService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return postService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var postService = /** @class */ (function () {
    function postService(afs) {
        this.afs = afs;
        this.postsCollection = this.afs.collection('posts', function (ref) { return ref.orderBy('time', 'desc'); });
    }
    postService.prototype.getPosts = function () {
        this.posts = this.postsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.posts;
    };
    postService.prototype.newPost = function (post) {
        this.postsCollection.add(post);
    };
    postService.prototype.getPost = function (id) {
        //console.log(id);
        this.postDoc = this.afs.doc("posts/" + id);
        this.post = this.postDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                //console.log("enter null")
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                //console.log(data.id)
                return data;
            }
        }));
        //console.log(this.post);
        return this.post;
    };
    postService.prototype.updatePost = function (post) {
        this.postDoc = this.afs.doc("posts/" + post.id);
        this.postDoc.update(post);
    };
    postService.prototype.deletePost = function (post) {
        this.postDoc = this.afs.doc("posts/" + post.id);
        this.postDoc.delete();
    };
    postService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], postService);
    return postService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableNewPost: false,
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        if (confirm('Are you Sure??')) {
            //console.log(settings,'onsubmit');
            localStorage.setItem('settings', JSON.stringify(settings));
        }
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyD-3UclCy7MTaVNz4dI6Werwu5ucVmDprY",
        authDomain: "innova-8cef1.firebaseapp.com",
        databaseURL: "https://innova-8cef1.firebaseio.com",
        projectId: "innova-8cef1",
        storageBucket: "innova-8cef1.appspot.com",
        messagingSenderId: "710094837915"
    }
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

module.exports = __webpack_require__(/*! D:\project\Consultancy\Try_log\Innova Cell\NEW\innova\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map