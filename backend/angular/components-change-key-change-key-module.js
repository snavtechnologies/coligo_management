(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-change-key-change-key-module"],{

/***/ "./src/app/components/change-key/change-key.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/change-key/change-key.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-credentials\">\n  <form\n   [formGroup]=\"form\"\n   (ngSubmit)=\"submit()\"\n   [ngStyle]=\"{ 'background-color': this.color }\">\n\n    <app-html-components\n      [html_data_to_pass]=\"form_html_elements\"\n      [form_data]=\"this.form\">\n\n      <ng-template #standardTemplate let-item>\n\n        <span *ngIf=\"item == 'custom_element_admin_password'\">\n          <mat-form-field>\n            <div style=\"margin-top: 10px\">\n              <input\n               (focus)=true\n               formControlName=\"admin_password\"\n               id=\"admin_password\"\n               matInput \n               [style.width.%]=\"94\" \n               [type]=\"adminPasswdCredentialsService.is_visible() ? 'text' : 'password'\"\n               ngModel  \n               required\n               placeholder=\"Enter Admin Password\">\n               <i (click)=\"adminPasswdCredentialsService.toggle_visibility()\" class=\"material-icons\">{{adminPasswdCredentialsService.get_icon_visibility()}}</i>\n            </div>\n          </mat-form-field>\n        </span>\n\n        <span *ngIf=\"item == 'custom_element_new_password'\">\n          <mat-form-field>\n            <div style=\"margin-top: 10px\">\n              <input\n               formControlName=\"new_password\"\n               id=\"new_password\"\n               matInput \n               [style.width.%]=\"94\" \n               [type]=\"newPasswdCredentialsService.is_visible()? 'text' : 'password'\" \n               ngModel  \n               required\n               placeholder=\"Give a New Password\">\n               <i (click)=\"newPasswdCredentialsService.toggle_visibility()\" class=\"material-icons\">{{newPasswdCredentialsService.get_icon_visibility()}}</i>\n            </div>\n          </mat-form-field>\n        </span>\n\n      </ng-template>\n\n    </app-html-components>\n    <button type=\"submit\" name=\"credentials_submit_btn\" style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\"  mat-raised-button>Submit</button>\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/change-key/change-key.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/change-key/change-key.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-credentials {\n  width: 60%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5%; }\n\n.material-icons {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/change-key/change-key.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/change-key/change-key.component.ts ***!
  \***************************************************************/
/*! exports provided: ChangeKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeKeyComponent", function() { return ChangeKeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_basic_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/basic-functions.service */ "./src/app/services/basic-functions.service.ts");
/* harmony import */ var app_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var app_services_encryption_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/encryption.service */ "./src/app/services/encryption.service.ts");
/* harmony import */ var app_services_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var app_services_posting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var app_services_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ChangeKeyComponent = /** @class */ (function () {
    function ChangeKeyComponent(formBuilder, route, adminPasswdCredentialsService, newPasswdCredentialsService, basicFunctionsService, authService, errorService, encryptionService, postingService, spinner, notification) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.adminPasswdCredentialsService = adminPasswdCredentialsService;
        this.newPasswdCredentialsService = newPasswdCredentialsService;
        this.basicFunctionsService = basicFunctionsService;
        this.authService = authService;
        this.errorService = errorService;
        this.encryptionService = encryptionService;
        this.postingService = postingService;
        this.spinner = spinner;
        this.notification = notification;
        this.color = "#EEEEEE";
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
        this.form = this.formBuilder.group({
            admin_password: [''],
            new_password: ['']
        });
        this.form_html_elements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Change Password',
                elements: [
                    {
                        custom_element: true,
                        custom_element_identification: "custom_element_admin_password",
                        label: "Admin Password",
                        name: "admin_password",
                        need_block: true,
                        is_element_required: true,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "custom_element_new_password",
                        label: "New Password",
                        name: "new_password",
                        need_block: true,
                        is_element_required: true,
                    },
                ]
            }
        ];
    }
    ChangeKeyComponent.prototype.submit = function () {
        var _this = this;
        if (!this.basicFunctionsService.is_valid(this.form, document))
            return;
        var authData = {
            username: this.authService.getUsernameSession(),
            password: this.form.get('admin_password').value
        };
        this.subscriptions.add(this.authService.comparePassword(authData)
            .subscribe(function () {
            _this.spinner.trig_spin(true);
            var encrypted_password = _this.encryptionService.encrypt(_this.form.get('new_password').value);
            _this.change_password(encrypted_password);
        }, function (error) { return _this.errorService.handle_error(error); }));
    };
    ChangeKeyComponent.prototype.change_password = function (password) {
        var _this = this;
        var data = {
            data_to_update: { password: password },
            condition: {
                username: this.route.snapshot.paramMap.get('username')
            }
        };
        var update_data = {
            table_name: 'employee_info',
            data: data,
            db: this.authService.getHeadDatabaseSession()
        };
        this.subscriptions.add(this.postingService.do_simple_update_emp_info(update_data)
            .subscribe(function (response) {
            if (response.no_of_rows_updated[0] == 1) {
                _this.notification.openSnackBar('Password Changed', '', 'green-snackbar');
                _this.form.reset();
            }
            else
                _this.notification.openSnackBar('Error in updating', '', 'red-snackbar');
            _this.spinner.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        }));
    };
    ChangeKeyComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ChangeKeyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-key-credentials',
            template: __webpack_require__(/*! ./change-key.component.html */ "./src/app/components/change-key/change-key.component.html"),
            styles: [__webpack_require__(/*! ./change-key.component.scss */ "./src/app/components/change-key/change-key.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [
                { provide: 'adminPasswdCredentialsService', useClass: app_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"] },
                { provide: 'newPasswdCredentialsService', useClass: app_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"] }
            ]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('adminPasswdCredentialsService')),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('newPasswdCredentialsService')),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"],
            app_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"],
            app_services_basic_functions_service__WEBPACK_IMPORTED_MODULE_4__["BasicFunctionsService"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            app_services_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"],
            app_services_encryption_service__WEBPACK_IMPORTED_MODULE_6__["EncryptionService"],
            app_services_posting_service__WEBPACK_IMPORTED_MODULE_9__["PostingService"],
            app_services_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"],
            app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_8__["NotificationserviceService"]])
    ], ChangeKeyComponent);
    return ChangeKeyComponent;
}());



/***/ }),

/***/ "./src/app/components/change-key/change-key.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/change-key/change-key.module.ts ***!
  \************************************************************/
/*! exports provided: ChangeKeyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeKeyModule", function() { return ChangeKeyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/component/component.module */ "./src/app/modules/component/component.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _change_key_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-key.routing.module */ "./src/app/components/change-key/change-key.routing.module.ts");
/* harmony import */ var _change_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-key.component */ "./src/app/components/change-key/change-key.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChangeKeyModule = /** @class */ (function () {
    function ChangeKeyModule() {
    }
    ChangeKeyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _change_key_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChangeKeyRoutingModule"]
            ],
            declarations: [_change_key_component__WEBPACK_IMPORTED_MODULE_7__["ChangeKeyComponent"]]
        })
    ], ChangeKeyModule);
    return ChangeKeyModule;
}());



/***/ }),

/***/ "./src/app/components/change-key/change-key.routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/change-key/change-key.routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ChangeKeyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeKeyRoutingModule", function() { return ChangeKeyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_key_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-key.component */ "./src/app/components/change-key/change-key.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _change_key_component__WEBPACK_IMPORTED_MODULE_2__["ChangeKeyComponent"]
            }]
    }
];
var ChangeKeyRoutingModule = /** @class */ (function () {
    function ChangeKeyRoutingModule() {
    }
    ChangeKeyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChangeKeyRoutingModule);
    return ChangeKeyRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-change-key-change-key-module.js.map