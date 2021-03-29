(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu_components-employees-employees-module"],{

/***/ "./src/app/menu_components/employees/employee-operations/employee-operations.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-operations/employee-operations.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\"></div>\n<app-tab-layout [tab_layout_ui_data_to_receive]=\"tab_layout_ui_data_to_send\">\n  <ng-template >\n   \n    <div class=\"tab-pane active\" id=\"link1\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <p>\n            <mat-button-toggle-group id=\"toggle_btn\" value=\"1\" style=\"background-color: whitesmoke; margin-left: 4%\" name=\"fontStyle\"\n              aria-label=\"Font Style\">\n              <mat-button-toggle value=\"1\" (change)=\"onToggle($event.value, 0)\" ><b>View/Edit Employees</b></mat-button-toggle>\n              <mat-button-toggle value=\"0\" (change)=\"onToggle($event.value, 0)\"><b>New Employees</b></mat-button-toggle>\n            </mat-button-toggle-group>\n          </p>\n        </div>\n\n        <div *ngIf=\"switch_tab == 1\" class=\"col-md-4 ml-auto mr-auto\">\n          <app-search-box [search_box]=\"search_box\" (fn_on_search)=\"fn_on_search($event)\"></app-search-box>\n        </div>\n\n        <div *ngIf=\"switch_tab == 1\" class=\"col-md-1 ml-auto mr-auto\" >\n                       \n          <span class=\"emp_image\">\n                  <img ngClass=\"emp_new_image\" alt= \"User image here\" src=\"http://localhost/coligo_management_suite/backend/images/{{emp_image}}\"  height=\"100px\" width=\"100px\">\n          </span>\n        </div>\n        \n\n      </div>\n          \n            <form\n             [formGroup]=\"NewEmployeesForm\" \n             (ngSubmit)=\"form_submit(formDirective)\"\n             #formDirective=\"ngForm\" \n             [ngStyle]=\"{ 'background-color': this.color }\">\n              <app-html-components\n               [html_data_to_pass]=\"employees_New_html_elements\"\n               [form_data]=\"this.NewEmployeesForm\" \n               (html_events)=\"get_html_events($event)\">\n                <ng-template #standardTemplate let-item>\n\n                  <div>\n                    <span *ngIf=\"item == 'emp_new_custom_element_date'\">\n                      <div class=\"input-group emp_new_date_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">date_range</i>\n                          </span>\n                        </div>\n                        <input required=\"false\" readonly=\"true\" type=\"text\" class=\"form-control kyc_reg_date\"\n                          name=\"emp_new_date\" formControlName=\"emp_new_date\" />\n                      </div>\n                    </span>\n\n                    <div *ngIf=\"item=='role_hierarchy'\"> \n                      <div style=\"margin-top: 10px\">  \n                        <mat-form-field class=\"margin\">\n                          <mat-select\n                           id=\"role_hierarchy\"\n                           formControlName=\"role_hierarchy\" \n                           placeholder=\"Select Role Hierarchy\"  \n                           matInput\n                           (selectionChange)=\"selectedRole = idsToPropertiesMap[$event.value]\">\n                            <mat-option  class=\"options\" *ngFor = \"let role of roles index as i\" [value]=\"role.id\">{{role.namesLink}} </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n\n                    <span *ngIf=\"item == 'emp_new_custom_element_role'\">\n                      <mat-form-field>\n                        <textarea class=\"role-name\"\n                          id=\"role-name\"\n                          matInput\n                          name=\"emp_new_role\"\n                          required=\"false\" \n                          readonly=\"true\" \n                          type=\"text\"\n                          placeholder=\"Role Name\" \n                          [(ngModel)]=\"selectedRole.name\"\n                          formControlName=\"emp_new_role\">\n                        </textarea>\n                      </mat-form-field>\n                    </span>\n\n                    <span *ngIf=\"item == 'emp_new_custom_dob'\">\n                      <mat-form-field>\n                        <div style=\"margin-top: 10px\">\n                          <input\n                           placeholder=\"DD/MM/YYYY\" \n                           class=\"date_mask\" \n                           formControlName=\"emp_new_dob\" \n                           matInput required=\"true\" \n                           type=\"text\" \n                           (blur)=\"dobcheck()\"\n                           />\n                        </div>\n                      </mat-form-field>\n                    </span>\n\n                    <span *ngIf=\"item == 'emp_new_custom_element_id_1'\">\n                      <div class=\"input-group emp_new_id_1_select_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"emp_new_id_select\">\n                            <app-html-components\n                             [html_data_to_pass]=\"emp_new_custom_element_id_1_select_dropdown_data\" \n                             [form_data]=\"this.NewEmployeesForm\"\n                             (html_events)=\"get_html_events_id($event, '1')\">\n                            </app-html-components>\n                          </span>\n                        </div>\n                        <app-html-components\n                         *ngIf=\"this.NewEmployeesForm.get('emp_new_id_1_select_dropdown').value === '3'\" \n                         [html_data_to_pass] = \"emp_new_custom_element_id_1_select_value_data_extra\" \n                         [form_data]=\"this.NewEmployeesForm\" \n                         (html_events)=\"get_html_events_id($event, '1')\">\n                        </app-html-components>\n                        <app-html-components\n                         [html_data_to_pass]=\"emp_new_custom_element_id_1_select_value_data\" \n                         [form_data]=\"this.NewEmployeesForm\"\n                         (html_events)=\"get_html_events_id($event, '1')\">\n                        </app-html-components>\n                      </div>\n                    </span>\n\n                    <span *ngIf=\"item == 'emp_new_custom_element_id_2'\">\n                      <div class=\"input-group emp_new_id_2_select_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"emp_new_id_select\">\n                            <app-html-components\n                             [html_data_to_pass]=\"emp_new_custom_element_id_2_select_dropdown_data\" \n                             [form_data]=\"this.NewEmployeesForm\"\n                             (html_events)=\"get_html_events_id($event, '2')\">\n                            </app-html-components>\n                          </span>\n                        </div>\n                        <app-html-components\n                         *ngIf=\"this.NewEmployeesForm.get('emp_new_id_2_select_dropdown').value === '3'\" \n                         [html_data_to_pass] = \"emp_new_custom_element_id_2_select_value_data_extra\" \n                         [form_data]=\"this.NewEmployeesForm\" \n                         (html_events)=\"get_html_events_id($event, '2')\">\n                        </app-html-components>\n                        <app-html-components\n                         [html_data_to_pass]=\"emp_new_custom_element_id_2_select_value_data\" \n                         [form_data]=\"this.NewEmployeesForm\"\n                         (html_events)=\"get_html_events_id($event, '2')\">\n                        </app-html-components>\n                      </div>\n                    </span>\n\n                    <span *ngIf=\"item=='emp_new_custom_element_contact_1'\">\n                      <div class=\"input-group emp_new_custom_contact_select_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"emp_new_contact_type_select\">\n                            <app-html-components\n                             [html_data_to_pass] = \"emp_new_custom_element_contact_1_select_dropdown_data\" \n                             [form_data]=\"this.NewEmployeesForm\"\n                             (html_events)=\"get_html_events_contact($event, '1')\">\n                            </app-html-components>\n                          </span>                          \n                        </div>\n                        <app-html-components\n                         [html_data_to_pass] = \"emp_new_custom_element_contact_1_select_value_data\" \n                         [form_data]=\"this.NewEmployeesForm\"\n                         (html_events)=\"get_html_events_contact($event, '1')\"\n                         ></app-html-components>\n                      </div>\n                    </span>\n\n                    <span *ngIf=\"item=='emp_new_custom_element_contact_2'\">\n                      <div class=\"input-group emp_new_custom_contact_select_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"emp_new_contact_type_select\">\n                            <app-html-components\n                             [html_data_to_pass] = \"emp_new_custom_element_contact_2_select_dropdown_data\" \n                             [form_data]=\"this.NewEmployeesForm\"\n                             (html_events)=\"get_html_events_contact($event, '2')\">\n                            </app-html-components>\n                          </span>                          \n                        </div>\n                        <app-html-components\n                         [html_data_to_pass] = \"emp_new_custom_element_contact_2_select_value_data\" \n                         [form_data]=\"this.NewEmployeesForm\"\n                         (html_events)=\"get_html_events_contact($event, '2')\"></app-html-components>\n                      </div>\n                    </span>\n\n                    <span *ngIf=\"item=='emp_new_custom_element_contact_3'\">\n                      <div class=\"input-group kyc_reg_tel_type__select_group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"emp_new_contact_type_select\">\n                            <app-html-components\n                             [html_data_to_pass] = \"emp_new_custom_element_contact_3_select_dropdown_data\" \n                             [form_data]=\"this.NewEmployeesForm\"\n                             (html_events)=\"get_html_events_contact($event, '3')\">\n                            </app-html-components>\n                          </span>                          \n                        </div>\n                        <app-html-components\n                         [html_data_to_pass] = \"emp_new_custom_element_contact_3_select_value_data\" \n                         [form_data]=\"this.NewEmployeesForm\"\n                         (html_events)=\"get_html_events_contact($event, '3')\">\n                        </app-html-components>\n                      </div>\n                    </span>\n\n                    <div *ngIf=\"item=='emp_new_custom_element_area_permanent'\"> \n                      <div style=\"margin-top: 10px\">  \n                        <mat-form-field class=\"margin\">\n                          <mat-select\n                           id=\"area_permanent\"\n                           formControlName=\"emp_new_area_permanent\" \n                           placeholder=\"Select Area\"  \n                           matInput required=\"false\" \n                           (selectionChange)=\"get_pincode_details('permanent')\">\n                           \n                            <mat-option  *ngFor = \"let pinData of pincode_details_permanent index as i\" [value]=\"i+'~'+pinData.Name\">{{pinData.Name}} </mat-option>\n                          \n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n\n                    <span *ngIf=\"item=='emp_new_custom_element_address_present'\">        \n                      <app-html-components [html_data_to_pass] = \"emp_new_custom_element_present_address\" [form_data]=\"this.NewEmployeesForm\"></app-html-components>\n                      <label style=\"margin-left: 20px;\" class=\"form-check-label\">\n                        <input (change)=\"give_same_address($event)\" class=\"form-check-input\" type=\"checkbox\" value=\"\"> \n                          <span style=\"color: lightcoral\">Present address same as permanent address</span>\n                          <span class=\"form-check-sign\">\n                          <span class=\"check\"></span>\n                        </span>     \n                      </label> \n                    </span>\n\n                    <span *ngIf=\"item=='emp_new_custom_element_area_present'\"> \n                      <div style=\"margin-top: 10px\">  \n                        <mat-form-field class=\"margin\">\n                          <mat-select\n                           formControlName=\"emp_new_area_present\" \n                           placeholder=\"Select Area\"  \n                           matInput required=\"false\"\n                           (selectionChange)=\"get_pincode_details('present')\">\n                            <mat-option *ngFor = \"let pinData of pincode_details_present index as i\" [value]=\"i+'~'+pinData.Name\">{{pinData.Name}} </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                  </span>\n                  </div>\n                </ng-template>\n              </app-html-components>\n\n              <button style=\"float: right\" type=\"button\" (click)=\"find_invalid()\" class=\"btn\"><b>Validate Form</b></button>\n              <button name=\"submit_btn\" style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\"  mat-raised-button type=\"submit\">Submit Information</button> \n\n            </form>\n    </div>\n\n\n\n    <div class=\"tab-pane\" id=\"link2\">\n      <app-table [table_data] = \"table_data_to_send\">\n        <ng-template>\n          <tr *ngFor = \"let d of employeeData index as i\">\n            <td>{{i+1}}</td>\n            <td>\n              <button type=\"button\" (click)=\"send_tab(1, d.id)\" class=\"btn btn-sm\">View</button><br>\n              <button type=\"button\" (click)=\"send_tab(2, d.id)\" class=\"btn btn-sm\">Send SMS</button><br>\n              <button type=\"button\" (click)=\"send_tab(3, d.id)\" class=\"btn btn-sm\">Send Email</button><br>\n              <button type=\"button\" (click)=\"send_tab(4, d.id)\" class=\"btn btn-sm\">Issue kit</button><br>\n            </td>\n\n            <td>{{d.date}}</td> <td>{{d.branch_name}}</td> <td>{{d.id}}</td> \n            <td>{{d.emp_first_name+' '}}{{d.emp_middle_name+' '}}{{ d.emp_last_name}}</td> \n            <td>{{d.present_address}}</td> <td>{{d.permanent_address}}</td> <td>{{d.email}}</td> \n            <td>{{d.contact1_value}}</td> <td>{{d.contact2_value}}</td> \n            <td>{{d.dob}}</td> <td>{{d.pan_card}}</td> <td>aadhar: {{d.aadhar}}</td>\n            \n          </tr>\n        </ng-template>\n      </app-table>\n\n    </div>\n\n\n\n    <div class=\"tab-pane\" id=\"link3\">\n      <div class=\"row\">\n\n        <div class=\"form-group col-md-5\">\n          <mat-card>\n            <form>\n              <app-html-components\n               [html_data_to_pass] = \"send_sms_html_elements\" \n               [form_data]=\"this.send_sms\"\n               (html_events)=\"get_html_events($event)\">\n              </app-html-components>\n              <button class=\"btn btn-primary\">SEND SMS</button>\n            </form>\n          </mat-card>\n        </div>\n\n        <div class=\"form-group col-md-7\">\n          <mat-card>\n            <form>\n              <app-html-components \n               [html_data_to_pass] = \"send_email_html_elements\"\n               [form_data]=\"this.send_email\"\n               (html_events) = \"get_html_events($event)\">\n              </app-html-components>\n              <button class=\"btn btn-primary\">SEND EMAIL</button>\n            </form>\n          </mat-card>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"tab-pane\" id=\"link4\">\n      <mat-card class=\"card-credentials\">\n        <form\n         [formGroup]=\"employeeCredentialsForm\"\n         (ngSubmit)=\"credential_submit()\"\n         #formDirective = \"ngForm\"\n         [ngStyle]=\"{ 'background-color': this.color }\">\n\n          <app-html-components\n           [html_data_to_pass] = \"is_credentials_readonly ? employee_keys_html_elements_readonly : employee_keys_html_elements\"\n           [form_data]=\"this.employeeCredentialsForm\"\n           >\n           <ng-template #standardTemplate let-item>\n\n              <span *ngIf=\"item == 'custom_element_username'\">\n                <mat-form-field>\n                  <div style=\"margin-top: 10px\">\n                    <input\n                     validateUsername\n                     id=\"username\"  \n                     formControlName=\"username\"\n                     matInput\n                     ngModel\n                     [style.width.%]=\"94\" \n                     required type=\"text\" \n                     name=\"username\" \n                     placeholder=\"Give a Username\">\n                     <mat-spinner *ngIf=\"credentialsService.is_loading()\" class=\"input-spinner\" [diameter]=\"30\"></mat-spinner>\n                  </div>\n                </mat-form-field>\n\n                   <p\n                   *ngIf=\"credentialsService.get_username_availability_status()\"\n                   [ngStyle]=\"{'color': credentialsService.get_username_availability_status_color(), 'font-weight': 'bold'}\">\n                   {{credentialsService.get_username_availability_status()}}\n                  </p>\n                  \n                   \n              </span>\n              \n              <span *ngIf=\"item == 'custom_element_key'\">\n                <mat-form-field>\n                  <div style=\"margin-top: 10px\">\n                    <input\n                     formControlName=\"key\"\n                     id=\"key\"\n                     matInput \n                     [style.width.%]=\"94\" \n                     ngModel  \n                     required\n                     [type]=\"credentialsService.is_visible() ? 'text' : 'password'\" \n                     name=\"key\" \n                     placeholder=\"Give a key\">\n                    <i (click)=\"credentialsService.toggle_visibility()\" class=\"material-icons\">{{credentialsService.get_icon_visibility()}}</i>\n                  </div>\n                </mat-form-field>\n              </span>\n\n            </ng-template>\n          </app-html-components>\n          \n          <button *ngIf=\"!is_credentials_readonly\" type=\"submit\" name=\"credentials_submit_btn\" style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\"  mat-raised-button>Submit</button>\n\n          <div *ngIf=\"is_credentials_readonly\">\n            <button \n             [disabled]=\"credentialsService.get_username_status() === 'available' ? false : true\" \n             (click)=\"update_username()\" type=\"button\"   \n             style=\"width: 100%;margin-top: 2%\" \n             class=\"col-md-12 btn btn-primary btn-lg\">\n             Update Username\n            </button>\n            <a  [routerLink]=\"['/change-key', emp_username]\" type=\"button\" style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\" >Change Key</a>\n          </div>\n             \n        </form>\n      </mat-card>\n\n    </div>\n  </ng-template>\n</app-tab-layout>\n\n"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-operations/employee-operations.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-operations/employee-operations.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp_new_date_group {\n  margin-top: 14.5px; }\n\n.emp_new_id_select {\n  margin-top: -24px;\n  width: 125px; }\n\n.emp_new_contact_type_select {\n  margin-top: -24px;\n  width: 125px; }\n\n.emp_image {\n  width: 20px; }\n\n.card-credentials {\n  width: 60%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.material-icons {\n  cursor: pointer; }\n\n.input-spinner {\n  display: inline-block;\n  align-items: center;\n  justify-content: center; }\n\n.hidden {\n  display: none;\n  visibility: hidden;\n  height: 0;\n  width: 0; }\n\n.shown {\n  display: block; }\n\n.options.mat-option {\n  height: unset;\n  margin-bottom: 2%; }\n\n::ng-deep .options .mat-option-text.mat-option-text {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-operations/employee-operations.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-operations/employee-operations.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EmployeeOperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeOperationsComponent", function() { return EmployeeOperationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/basic-functions.service */ "./src/app/services/basic-functions.service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _services_posting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var _services_getting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/getting.service */ "./src/app/services/getting.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/datatable-trigger.service */ "./src/app/services/datatable-trigger.service.ts");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_services_third_party_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/third-party-api.service */ "./src/app/services/third-party-api.service.ts");
/* harmony import */ var app_services_encryption_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/encryption.service */ "./src/app/services/encryption.service.ts");
/* harmony import */ var app_services_credentials_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var app_services_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _employee_roles_roles_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../employee-roles/roles.service */ "./src/app/menu_components/employees/employee-roles/roles.service.ts");
/* harmony import */ var app_services_map_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/map.service */ "./src/app/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var EmployeeOperationsComponent = /** @class */ (function () {
    function EmployeeOperationsComponent(validation_obj, g, notify, basic_function_obj, spin, p, fb, dt_trig, chRef, authservice, third_party_api_obj, encryptionService, credentialsService, errorService, rolesService, mapService, changeDetetctor) {
        this.validation_obj = validation_obj;
        this.g = g;
        this.notify = notify;
        this.basic_function_obj = basic_function_obj;
        this.spin = spin;
        this.p = p;
        this.fb = fb;
        this.dt_trig = dt_trig;
        this.chRef = chRef;
        this.authservice = authservice;
        this.third_party_api_obj = third_party_api_obj;
        this.encryptionService = encryptionService;
        this.credentialsService = credentialsService;
        this.errorService = errorService;
        this.rolesService = rolesService;
        this.mapService = mapService;
        this.changeDetetctor = changeDetetctor;
        this.dropdown_val = '0';
        this.pincode_details = [];
        this.pincode_details_permanent = [];
        this.pincode_details_present = [];
        this.fileToUpload = null;
        this.is_same_area = false;
        this.is_reading = false;
        this.is_credentials_readonly = false;
        this.selectedRole = { name: '' };
        this.color = '#EEEEEE';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
        this.idsToPropertiesMap = {};
        this.tab_layout_ui_data_to_send = {
            tab_heading: "Employee Operations",
            tab_subheading: "",
            need_card: true,
            tab_id: "emp_tab",
            tab_content_component_selector_data: [
                {
                    tab_name: "Employee Management",
                    is_active: true,
                },
                {
                    tab_name: "List Employees",
                },
                {
                    tab_name: "Send Email/SMS",
                },
                {
                    tab_name: "Employee Keys",
                }
            ],
        };
        this.NewEmployeesForm = this.fb.group({
            emp_new_date: [this.basic_function_obj.get_datetime_to_display()],
            role_hierarchy: [''],
            emp_new_role: [''],
            emp_new_title: [""],
            emp_new_first_name: [""],
            emp_new_middle_name: [""],
            emp_new_last_name: [""],
            emp_new_dob: [""],
            emp_new_age: [""],
            emp_new_gender: [""],
            emp_new_pan: [""],
            emp_new_email: [""],
            emp_new_aadhar: [""],
            emp_new_status: ['01'],
            custom_element_username: [''],
            emp_new_id_1_select_dropdown: ['0'],
            emp_new_id_1_select_value: [""],
            emp_new_id_1_select_value_extra: [""],
            emp_new_id_2_select_dropdown: [""],
            emp_new_id_2_select_value: [""],
            emp_new_id_2_select_value_extra: [""],
            emp_new_contact_1_select_dropdown: ["01"],
            emp_new_contact_1_select_value: [""],
            emp_new_contact_2_select_dropdown: [""],
            emp_new_contact_2_select_value: [""],
            emp_new_contact_3_select_dropdown: [""],
            emp_new_contact_3_select_value: [""],
            emp_new_address_permanent: [""],
            emp_new_res_code_select_dropdown: ["01"],
            emp_new_area_permanent: [""],
            emp_new_pincode_permanent: [""],
            emp_new_custom_element_permanent_area: [""],
            emp_new_city_permanent: [""],
            emp_new_district_permanent: [""],
            emp_new_state_permanent: [""],
            emp_new_h_coordinate: [""],
            emp_new_v_coordinate: [""],
            emp_new_address_present: [""],
            emp_new_area_present: [''],
            emp_new_pincode_present: [""],
            emp_new_custom_element_area_present: [""],
            emp_new_city_present: [""],
            emp_new_district_present: [""],
            emp_new_state_present: [""],
            emp_new_image: [""],
        });
        this.employees_New_html_elements = [
            {
                no_of_elements_in_a_row: "1",
                color: "",
                need_card: true,
                table_view: false,
                card_label: "Personal Information",
                elements: [
                    {
                        label: "Date and Time",
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_date",
                        need_block: true,
                        line_break_value: "3",
                        is_element_required: true,
                    },
                    {
                        label: 'Role Hierarchy',
                        custom_element: true,
                        custom_element_identification: 'role_hierarchy',
                        need_block: true,
                        line_break_value: '3',
                        is_element_required: true,
                    },
                    {
                        label: 'Employee Role',
                        custom_element: true,
                        custom_element_identification: 'emp_new_custom_element_role',
                        need_block: true,
                        line_break_value: '3',
                        readonly: true,
                        is_element_required: true,
                    },
                    {
                        select: true,
                        label: "Title",
                        name: "emp_new_title",
                        classes: ["emp_new_title"],
                        multiple: false,
                        placeholder: "Select Title",
                        line_break_value: "3",
                        required: true,
                        options: [
                            {
                                viewValue: "Mr",
                                value: "01",
                            },
                            {
                                viewValue: "Ms",
                                value: "02",
                            },
                            {
                                viewValue: "Mrs",
                                value: "03",
                            },
                            {
                                viewValue: "Dr",
                                value: "04",
                            },
                        ],
                    },
                    {
                        textbox: true,
                        label: "First Name",
                        placeholder: "Please Enter First Name",
                        required: true,
                        classes: ["emp_new_first_name"],
                        readonly: false,
                        simplemask: "S{26}",
                        float_placeholder: "auto",
                        line_break_value: "3",
                        name: "emp_new_first_name",
                    },
                    {
                        textbox: true,
                        label: "Middle Name",
                        placeholder: "Please Enter Middle Name",
                        required: false,
                        classes: ["emp_new_middle_name"],
                        readonly: false,
                        simplemask: "S{26}",
                        line_break_value: "3",
                        float_placeholder: "auto",
                        name: "emp_new_middle_name",
                    },
                    {
                        textbox: true,
                        label: "Last Name",
                        placeholder: "Please Enter Last Name",
                        required: true,
                        simplemask: "S{26}",
                        line_break_value: "3",
                        classes: ["emp_new_last_name"],
                        readonly: false,
                        float_placeholder: "auto",
                        name: "emp_new_last_name",
                    },
                    {
                        label: "Date of birth",
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_dob",
                        need_block: false,
                        line_break_value: "3",
                        is_element_required: true,
                    },
                    {
                        numberbox: true,
                        label: "Age",
                        placeholder: "Please Enter Age",
                        required: true,
                        simplemask: "0{3}",
                        classes: ["emp_new_age"],
                        readonly: true,
                        line_break_value: "3",
                        float_placeholder: "auto",
                        name: "emp_new_age",
                    },
                    {
                        radio: true,
                        label: "Gender",
                        line_break_value: "3",
                        radio_details: [
                            {
                                required: true,
                                name: "emp_new_gender",
                                value: "0",
                                text: "Male",
                                readonly: false,
                            },
                            {
                                required: false,
                                name: "emp_new_gender",
                                value: "1",
                                text: "Female",
                                readonly: false,
                            },
                            {
                                required: false,
                                name: "emp_new_gender",
                                value: "2",
                                text: "Other",
                                readonly: false,
                            },
                        ],
                    },
                    {
                        textbox: true,
                        label: "PAN No",
                        placeholder: "Please Enter Details",
                        required: false,
                        classes: ["emp_new_pan"],
                        simplemask: "AAAAAAAAAA",
                        line_break_value: "3",
                        readonly: false,
                        float_placeholder: "auto",
                        name: "emp_new_pan",
                    },
                    {
                        email: true,
                        label: "Email",
                        placeholder: "Please Enter Details",
                        required: false,
                        classes: ["emp_new_email"],
                        line_break_value: "3",
                        readonly: false,
                        float_placeholder: "auto",
                        name: "emp_new_email",
                    },
                    {
                        textbox: true,
                        label: "Aadhaar No",
                        placeholder: "Please Enter Details",
                        required: true,
                        classes: ["emp_new_aadhar"],
                        simplemask: "000000000000",
                        readonly: false,
                        line_break_value: "3",
                        float_placeholder: "auto",
                        name: "emp_new_aadhar",
                    },
                    {
                        select: true,
                        label: "Status",
                        name: "emp_new_status",
                        classes: ["emp_new_status"],
                        multiple: false,
                        line_break_value: "3",
                        placeholder: "Select status",
                        required: true,
                        options: [
                            {
                                viewValue: "Active",
                                value: "01",
                            },
                            {
                                viewValue: "Deceased",
                                value: "02",
                            },
                            {
                                viewValue: "Inactive",
                                value: "03",
                            },
                        ],
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_id_1",
                        label: "ID Proof",
                        need_block: true,
                        line_break_value: "3",
                        is_element_required: false,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_id_2",
                        label: "Address Proof",
                        need_block: true,
                        line_break_value: "3",
                        is_element_required: false,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_contact_1",
                        label: "Contact No 1",
                        need_block: true,
                        line_break_value: "4",
                        is_element_required: true,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_contact_2",
                        label: "Contact No 2",
                        need_block: true,
                        line_break_value: "4",
                        is_element_required: false,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_contact_3",
                        label: "Contact No 3",
                        need_block: true,
                        line_break_value: "4",
                        is_element_required: false,
                    },
                    {
                        textarea: true,
                        label: "Permanent Address",
                        placeholder: "Please Enter Address",
                        required: true,
                        classes: ["emp_new_address_permanent"],
                        readonly: false,
                        name: "emp_new_address_permanent",
                        line_break_value: "4",
                        highlight_row: true,
                    },
                    {
                        select: true,
                        label: "Residence Code",
                        name: "emp_new_res_code_select_dropdown",
                        classes: ["emp_new_res_code_select_dropdown"],
                        multiple: false,
                        line_break_value: "4",
                        placeholder: "Select Residence Code",
                        required: true,
                        options: [
                            {
                                viewValue: "Owned",
                                value: "01",
                            },
                            {
                                viewValue: "Rented",
                                value: "02",
                            },
                        ],
                        highlight_row: true,
                    },
                    {
                        textbox: true,
                        label: "Pincode",
                        placeholder: "Please Enter Pincode",
                        required: false,
                        clear: true,
                        classes: ["emp_new_pincode_permanent"],
                        simplemask: "000000",
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_pincode_permanent",
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_area_permanent",
                        label: "Select Area",
                        line_break_value: "4",
                        is_element_required: false,
                    },
                    {
                        textbox: true,
                        label: "City/Town",
                        placeholder: "Please Enter City/Town",
                        required: false,
                        simplemask: "S{26}",
                        classes: ["emp_new_city_permanent"],
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_city_permanent",
                    },
                    {
                        textbox: true,
                        label: "District",
                        placeholder: "Please Enter District",
                        required: false,
                        simplemask: "S{26}",
                        classes: ["emp_new_district_permanent"],
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_district_permanent",
                    },
                    {
                        textbox: true,
                        label: "State",
                        placeholder: "Please Enter State",
                        required: false,
                        classes: ["emp_new_state_permanent"],
                        readonly: false,
                        simplemask: "S{26}",
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_state_permanent",
                    },
                    {
                        textbox: true,
                        label: "H-coordinate",
                        placeholder: "Please Enter Details",
                        required: false,
                        classes: ["emp_new_h_coordinate"],
                        readonly: false,
                        float_placeholder: "auto",
                        name: "emp_new_h_coordinate",
                        line_break_value: "4",
                    },
                    {
                        textbox: true,
                        label: "V-coordinate",
                        placeholder: "Please Enter Details",
                        required: false,
                        classes: ["emp_new_v_coordinate"],
                        readonly: false,
                        float_placeholder: "auto",
                        name: "emp_new_v_coordinate",
                        line_break_value: "4",
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_address_present",
                        label: "Present Address",
                        highlight_row: true,
                        line_break_value: "4",
                        is_element_required: false,
                    },
                    {
                        textbox: true,
                        label: "Pincode",
                        placeholder: "Please Enter Pincode",
                        required: false,
                        clear: true,
                        classes: ["emp_new_pincode_present"],
                        simplemask: "000000",
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_pincode_present",
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "emp_new_custom_element_area_present",
                        label: "Select Area",
                        line_break_value: "4",
                        is_element_required: false,
                    },
                    {
                        textbox: true,
                        label: "City/Town",
                        placeholder: "Please Enter City/Town",
                        required: false,
                        simplemask: "S{26}",
                        classes: ["emp_new_city_present"],
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_city_present",
                    },
                    {
                        textbox: true,
                        label: "District",
                        placeholder: "Please Enter District",
                        required: false,
                        simplemask: "S{26}",
                        classes: ["emp_new_district_present"],
                        readonly: false,
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_district_present",
                    },
                    {
                        textbox: true,
                        label: "State",
                        placeholder: "Please Enter State",
                        required: false,
                        classes: ["emp_new_state_present"],
                        readonly: false,
                        simplemask: "S{26}",
                        float_placeholder: "auto",
                        line_break_value: "4",
                        name: "emp_new_state_present",
                    },
                    {
                        filechooser: true,
                        required: false,
                        classes: ["emp_new_image"],
                        label: "Choose image",
                        name: "emp_new_image",
                        line_break_value: "4",
                    },
                ],
            },
        ];
        // alignment data
        this.emp_new_custom_element_id_1_select_dropdown_data = {
            single_element: true,
            select: true,
            name: "emp_new_id_1_select_dropdown",
            multiple: false,
            classes: ["emp_new_id_1_select_dropdown"],
            placeholder: "Select Id",
            required: true,
            options: [
                {
                    viewValue: "Voter ID",
                    value: "0",
                },
                {
                    viewValue: "Passport",
                    value: "1",
                },
                {
                    viewValue: "Driving license",
                    value: "2",
                },
                {
                    viewValue: "Aadhaar",
                    value: "4",
                },
                {
                    viewValue: "Others",
                    value: "3",
                },
            ],
        };
        this.emp_new_custom_element_id_1_select_value_data = {
            single_element: true,
            textbox: true,
            name: "emp_new_id_1_select_value",
            required: true,
            readonly: false,
            placeholder: "Enter ID number",
            classes: ["emp_new_id_1_select_value"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_id_1_select_value_data_extra = {
            single_element: true,
            textbox: true,
            name: "emp_new_id_1_select_value_extra",
            required: false,
            readonly: false,
            placeholder: "Enter ID type",
            classes: ["emp_new_id_1_select_value_extra"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_id_2_select_dropdown_data = {
            single_element: true,
            select: true,
            name: "emp_new_id_2_select_dropdown",
            multiple: false,
            classes: ["emp_new_id_2_select_dropdown"],
            placeholder: "Select Id",
            required: false,
            options: [
                {
                    viewValue: "Voter ID",
                    value: "0",
                },
                {
                    viewValue: "Passport",
                    value: "1",
                },
                {
                    viewValue: "Driving license",
                    value: "2",
                },
                {
                    viewValue: "Ration Card",
                    value: "4",
                },
                {
                    viewValue: "Others",
                    value: "3",
                },
            ],
        };
        this.emp_new_custom_element_id_2_select_value_data = {
            single_element: true,
            textbox: true,
            name: "emp_new_id_2_select_value",
            required: false,
            readonly: false,
            placeholder: "Enter ID number",
            classes: ["emp_new_id_2_select_value"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_id_2_select_value_data_extra = {
            single_element: true,
            textbox: true,
            name: "emp_new_id_2_select_value_extra",
            required: false,
            readonly: false,
            placeholder: "Enter ID type",
            classes: ["emp_new_id_2_select_value_extra"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_contact_1_select_dropdown_data = {
            single_element: true,
            select: true,
            name: "emp_new_contact_1_select_dropdown",
            multiple: false,
            classes: ["emp_new contact_1_select_dropdown"],
            placeholder: "Select Type",
            required: true,
            options: [
                {
                    viewValue: "Mobile",
                    value: "01",
                },
            ],
        };
        this.emp_new_custom_element_contact_1_select_value_data = {
            single_element: true,
            textbox: true,
            name: "emp_new_contact_1_select_value",
            required: true,
            readonly: false,
            simplemask: "0{11}",
            placeholder: "Enter Number",
            classes: ["emp_new_contact_1_select_value"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_contact_2_select_dropdown_data = {
            single_element: true,
            select: true,
            name: "emp_new_contact_2_select_dropdown",
            multiple: false,
            placeholder: "Select Type",
            classes: ["emp_new_contact_2_select_dropdown"],
            required: false,
            options: [
                {
                    viewValue: "Not Classified",
                    value: "00",
                },
                {
                    viewValue: "Mobile",
                    value: "01",
                },
                {
                    viewValue: "Home Phone",
                    value: "02",
                },
                {
                    viewValue: "Office Phone",
                    value: "03",
                },
            ],
        };
        this.emp_new_custom_element_contact_2_select_value_data = {
            single_element: true,
            textbox: true,
            name: "emp_new_contact_2_select_value",
            required: false,
            readonly: false,
            simplemask: "0{11}",
            placeholder: "Enter Number",
            classes: ["emp_new_contact_2_select_value"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_contact_3_select_dropdown_data = {
            single_element: true,
            select: true,
            name: "emp_new_contact_3_select_dropdown",
            multiple: false,
            placeholder: "Select Type",
            classes: ["emp_new_contact_3_select_dropdown"],
            required: false,
            options: [
                {
                    viewValue: "Not Classified",
                    value: "00",
                },
                {
                    viewValue: "Mobile",
                    value: "01",
                },
                {
                    viewValue: "Home Phone",
                    value: "02",
                },
                {
                    viewValue: "Office Phone",
                    value: "03",
                },
            ],
        };
        this.emp_new_custom_element_contact_3_select_value_data = {
            single_element: true,
            textbox: true,
            name: "emp_new_contact_3_select_value",
            required: false,
            readonly: false,
            simplemask: "0{11}",
            placeholder: "Enter Number",
            classes: ["emp_new_contact_3_select_value"],
            float_placeholder: "never",
            custom_styles: [
                {
                    property: "width",
                    value: "205px",
                },
            ],
        };
        this.emp_new_custom_element_present_address = {
            single_element: true,
            textarea: true,
            placeholder: "Please Enter Address",
            required: false,
            classes: ["emp_new_adress_present"],
            readonly: false,
            name: "emp_new_address_present",
        };
        this.search_box = {
            placeholder: 'Search id, first, middle or last names',
            searchbox_id: 'emp_search',
            search_tablename: 'employee_info',
            search_db: this.authservice.getHeadDatabaseSession(),
            search_columnname: 'id~emp_first_name~emp_last_name~aadhar~id1_value~email~contact1_value',
            view_columnname: 'id~emp_first_name~emp_last_name',
        };
        this.table_data_to_send = {
            minmax: {
                need_minmax: false
            },
            table: {
                is_datatable: false,
                table_id: 'list_member_table',
                have_non_sort_col: true,
                non_sort_cols: '3',
                need_colour: true,
                color_cols: '',
                need_header: true,
                header: 'sl_no.~action~date_of_joining~Branch_name~employee_ID~employee_name~present_address~permanent_address~email~mobile_no~contact_no~DOB~PAN_card_ID~ID_details'
            },
            excel: {
                need_export_to_excel: true,
                export_filename: 'trial_xlsx_report_new',
                type: 'xlsx'
            },
            column_search: {
                need_column_search: false
            }
        };
        this.send_sms = this.fb.group({
            send_sms_name: [''],
            send_sms_confirm: [''],
            send_sms_content: [''],
            prevent_warning: ['']
        });
        this.send_email = this.fb.group({
            send_email_name: [''],
            send_email_confirm: [''],
            send_email_subject: [''],
            send_email_content: [''],
            send_email_attachment: [''],
            prevent_warning: ['']
        });
        this.send_sms_html_elements = [
            {
                no_of_elements_in_a_row: '2',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Send SMS',
                elements: [
                    {
                        textbox: true,
                        label: 'Send To',
                        required: true,
                        name: 'send_sms_name',
                        classes: ['send_sms_name'],
                        readonly: true,
                        float_placeholder: 'never'
                    },
                    {
                        select: true,
                        label: 'Confirm',
                        name: 'send_sms_confirm',
                        multiple: false,
                        classes: ['send_sms_confirm'],
                        placeholder: 'Select',
                        required: true,
                        options: [
                            {
                                viewValue: 'select',
                                value: '0'
                            },
                            {
                                viewValue: 'Confirm All',
                                value: '1'
                            }
                        ]
                    }
                ]
            },
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: '',
                elements: [
                    {
                        textarea: true,
                        label: 'SMS Content (160 characters/SMS) Total characters : 0, 1 SMS',
                        required: true,
                        classes: ['send_sms_content'],
                        readonly: false,
                        placeholder: 'please enter your contents here',
                        name: 'send_sms_content'
                    }
                ]
            }
        ];
        this.send_email_html_elements = [
            {
                no_of_elements_in_a_row: '2',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Send Email',
                elements: [
                    {
                        textbox: true,
                        label: 'Send To',
                        required: true,
                        name: 'send_email_name',
                        classes: ['send_email_name'],
                        readonly: true,
                        float_placeholder: 'never'
                    },
                    {
                        select: true,
                        label: 'Confirm',
                        name: 'send_email_confirm',
                        multiple: false,
                        classes: ['send_email_confirm'],
                        placeholder: 'Select',
                        required: true,
                        options: [
                            {
                                viewValue: 'select',
                                value: '0'
                            },
                            {
                                viewValue: 'Confirm All',
                                value: '1'
                            }
                        ]
                    }
                ]
            },
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                card_label: '',
                table_view: false,
                elements: [
                    {
                        textbox: true,
                        label: 'Subject',
                        required: true,
                        name: 'send_email_subject',
                        classes: ['send_email_subject'],
                        readonly: false,
                        placeholder: 'subject',
                        float_placeholder: 'never'
                    },
                    {
                        textarea: true,
                        label: 'Mail Content',
                        required: true,
                        classes: ['send_email_content'],
                        readonly: false,
                        placeholder: 'please enter your contents here',
                        name: 'send_email_content'
                    },
                    {
                        filechooser: true,
                        required: false,
                        classes: ['send_email_attachment'],
                        label: 'Add attachment',
                        name: 'send_email_attachment'
                    }
                ]
            }
        ];
        this.employeeCredentialsForm = this.fb.group({
            name: [''],
            username: [''],
            key: ['']
        });
        this.employee_keys_html_elements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Issue kit',
                elements: [
                    {
                        textbox: true,
                        label: 'Employee Name',
                        required: true,
                        name: 'name',
                        classes: ['name'],
                        readonly: true,
                        float_placeholder: 'never'
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "custom_element_username",
                        label: "Username",
                        name: "username",
                        need_block: true,
                        is_element_required: true,
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "custom_element_key",
                        label: "Key",
                        name: "key",
                        need_block: true,
                        is_element_required: true,
                    },
                ]
            }
        ];
        this.employee_keys_html_elements_readonly = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Issue Kit',
                elements: [
                    {
                        textbox: true,
                        label: 'Employee Name',
                        required: true,
                        name: 'name',
                        classes: ['name'],
                        readonly: true,
                        float_placeholder: 'never'
                    },
                    {
                        custom_element: true,
                        custom_element_identification: "custom_element_username",
                        label: "Username",
                        name: "username",
                        need_block: true,
                        is_element_required: true,
                    }
                ]
            }
        ];
        this.head_db = this.authservice.getHeadDatabaseSession();
        console.log("constructor");
        console.log(this.head_db);
        this.session_branch_code = this.authservice.getBranchCodeSession();
    }
    EmployeeOperationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngoninit reached");
        console.log("it reached");
        this.onToggle('1', 1);
        this.fn_list_members();
        console.log(this.currentEmployee);
        this.subscriptions
            .add(this.rolesService.getRoles()
            .subscribe(function (roles) {
            _this.roles = roles;
            _this.idsToPropertiesMap = _this.mapService.getIdsToProperiesMap(_this.roles);
        }, function (error) { return _this.errorService.handle_error(error); }));
    };
    EmployeeOperationsComponent.prototype.ngAfterViewInit = function () {
        var re = '^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))\/(19|20)\\d{2}$';
        inputmask__WEBPACK_IMPORTED_MODULE_9___default()({ regex: re, showMaskOnHover: false, showMaskOnFocus: false, 'clearIncomplete': true }).mask(document.getElementsByClassName('date_mask'));
        var regex_username = '^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$';
        //Inputmask({ regex: regex_username, showMaskOnHover: false, showMaskOnFocus: false}).mask(document.getElementById('username'));
        console.log('input mask reached');
    };
    EmployeeOperationsComponent.prototype.dobcheck = function () {
        var emp_dob = this.NewEmployeesForm.get('emp_new_dob').value;
        var feed1 = this.validation_obj.check_dob(emp_dob);
        if (feed1 === true) {
            var feed = this.basic_function_obj.get_age(emp_dob);
            if (typeof feed === 'number') {
                this.NewEmployeesForm.patchValue({
                    emp_new_age: feed
                });
            }
            else {
                this.NewEmployeesForm.patchValue({
                    emp_new_age: ''
                });
            }
        }
        else {
            this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
            this.NewEmployeesForm.patchValue({
                emp_new_dob: ''
            });
        }
    };
    EmployeeOperationsComponent.prototype.get_html_events = function (event_obj) {
        if (event_obj.uniq_identity === 'emp_new_pan') {
            if (event_obj.e_type === 'keyup') {
                $('.emp_new_pan').val($('.emp_new_pan').val().toUpperCase());
            }
            var feed = this.validation_obj.check_pan_number(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.emp_new_pan').val()) {
                        this.notify.openSnackBar('Check the PAN format', 'Close', 'red-snackbar');
                    }
                    this.NewEmployeesForm.patchValue({
                        emp_new_pan: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'emp_new_email') {
            var feed = this.validation_obj.check_email(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.emp_new_email').val()) {
                        this.notify.openSnackBar('Check the Email format', 'Close', 'red-snackbar');
                    }
                    this.NewEmployeesForm.patchValue({
                        kyc_reg_email: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'emp_new_aadhar') {
            var feed = this.validation_obj.check_aadhar(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.emp_new_aadhar').val()) {
                        this.notify.openSnackBar('Check the AADHAR format', 'Close', 'red-snackbar');
                    }
                    this.NewEmployeesForm.patchValue({
                        emp_new_adhar: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'emp_new_pincode_permanent') {
            if (event_obj.e_type === 'blur')
                this.get_address_from_pincode(event_obj.value, 'permanent');
        }
        else if (event_obj.uniq_identity === 'emp_new_pincode_present') {
            if (event_obj.e_type === 'blur')
                this.get_address_from_pincode(event_obj.value, 'present');
        }
        else if (event_obj.uniq_identity === 'emp_new_image') {
            if (event_obj.e_type === 'change') {
                this.fileToUpload = event_obj.value.item(0);
                this.filename = Date.now() + '_' + this.fileToUpload.name;
            }
        }
    };
    EmployeeOperationsComponent.prototype.get_html_events_id = function (event_obj, id_num) {
        var select_val = this.NewEmployeesForm.get('emp_new_id_' + id_num + '_select_value');
        if (event_obj.uniq_identity === 'emp_new_id_' + id_num + '_select_dropdown') {
            if (event_obj.value === '0' || event_obj.value === '1' || event_obj.value === '2') {
                this.dropdown_val = event_obj.value;
                $('.emp_new_id_' + id_num + '_select_value_extra').hide();
                //To ensure the field is not hidden in case id_num = 2
                $('.emp_new_id_' + id_num + '_select_value').show();
            }
            else if (event_obj.value === '3') {
                this.dropdown_val = '-1';
                $('.emp_new_id_' + id_num + '_select_value_extra').show();
                //To ensure the field is not hidden in case id_num = 2
                $('.emp_new_id_' + id_num + '_select_value').show();
            }
            else {
                this.dropdown_val = '-1';
                $('.emp_new_id_' + id_num + '_select_value_extra').hide();
                $('.emp_new_id_' + id_num + '_select_value').hide();
            }
        }
        else if (event_obj.uniq_identity === 'emp_new_id_' + id_num + '_select_value') {
            if (this.dropdown_val === '0') {
                var feed = this.validation_obj.check_indian_voter(event_obj.value);
                if (feed === false) {
                    if (event_obj.e_type === 'blur') {
                        if ($('.emp_new_id_' + id_num + '_select_value').val()) {
                            this.notify.openSnackBar('Check the voter ID format', '', 'red-snackbar');
                        }
                        select_val.patchValue('');
                    }
                }
            }
            else if (this.dropdown_val === '1') {
                var feed = this.validation_obj.check_passport(event_obj.value);
                if (feed === false) {
                    if (event_obj.e_type === 'blur') {
                        if ($('.emp_new_id_' + id_num + '_select_value').val()) {
                            this.notify.openSnackBar('Check the passport format', '', 'red-snackbar');
                        }
                        select_val.patchValue('');
                    }
                }
            }
            else if (this.dropdown_val === '2') {
                var feed = this.validation_obj.check_indian_driving_license(event_obj.value);
                if (feed === false) {
                    if (event_obj.e_type === 'blur') {
                        if ($('.emp_new_id_' + id_num + '_select_value').val()) {
                            this.notify.openSnackBar('Check the license format', '', 'red-snackbar');
                        }
                        select_val.patchValue('');
                    }
                }
            }
        }
    };
    EmployeeOperationsComponent.prototype.get_html_events_contact = function (event_obj, contact_priority) {
        var select_val = this.NewEmployeesForm.get('emp_new_contact_' + contact_priority + '_select_value');
        if (event_obj.uniq_identity === 'emp_new_contact_' + contact_priority + '_select_dropdown') {
            this.dropdown_val = event_obj.value;
            //To ensure the field is not hidden in case contact_priority = 2 or 3
            $('.emp_new_contact_' + contact_priority + '_select_value').show();
        }
        else if (event_obj.uniq_identity === 'emp_new_contact_' + contact_priority + '_select_value') {
            if (event_obj.e_type === 'blur') {
                if (this.dropdown_val === '01') {
                    var feed = this.validation_obj.check_mobile(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.emp_new_contact_' + contact_priority + '_select_value').val()) {
                                this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar');
                            }
                            select_val.patchValue('');
                        }
                    }
                }
                else if (this.dropdown_val === '02') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.emp_new_contact_' + contact_priority + '_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            select_val.patchValue('');
                        }
                    }
                }
                else if (this.dropdown_val === '03') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.emp_new_contact_' + contact_priority + '_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            select_val.patchValue('');
                        }
                    }
                }
            }
        }
    };
    EmployeeOperationsComponent.prototype.get_address_from_pincode = function (pincode, type_of_pincode) {
        var _this = this;
        this.spin.trig_spin(true);
        this.third_party_api_obj.get_pincode_details(pincode)
            .subscribe(function (response) {
            _this.pincode_details = response[0]['PostOffice'];
            if (type_of_pincode == 'permanent')
                _this.pincode_details_permanent = _this.pincode_details;
            else if (type_of_pincode == 'present')
                _this.pincode_details_present = _this.pincode_details;
            if (_this.pincode_details) {
                _this.pincode_det_length = _this.pincode_details.length;
            }
            else if (response[0]['Status'] !== 200) {
                _this.notify.openSnackBar('The requested resource is not found', 'Close', 'red-snackbar');
                _this.spin.trig_spin(false);
            }
            else if (_this.pincode_det_length === 1) {
                if (_this.pincode_details === null) {
                    _this.notify.openSnackBar('Pincode Not found', 'Close', 'red-snackbar');
                    _this.spin.trig_spin(false);
                }
                else {
                    _this.NewEmployeesForm.patchValue({
                        emp_new_area_permanent: _this.pincode_details[0]['Name'],
                        emp_new_district_permanent: _this.pincode_details[0]['District'],
                        emp_new_city_permanent: _this.pincode_details[0]['Block'],
                        emp_new_state_permanent: _this.pincode_details[0]['State']
                    });
                }
            }
            else {
                _this.NewEmployeesForm.patchValue({
                    emp_new_district_permanent: '',
                    emp_new_city_permanent: '',
                    emp_new_state_permanent: ''
                });
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.get_pincode_details = function (type_of_pincode) {
        this.is_same_area = false;
        var emp_new_area_value = this.NewEmployeesForm.get('emp_new_area_' + type_of_pincode).value;
        var emp_new_area_value_Arr = emp_new_area_value.split('~');
        var district = this.NewEmployeesForm.get('emp_new_district_' + type_of_pincode);
        var city = this.NewEmployeesForm.get('emp_new_city_' + type_of_pincode);
        var state = this.NewEmployeesForm.get('emp_new_state_' + type_of_pincode);
        if (type_of_pincode == 'permanent') {
            this.pincode_details = this.pincode_details_permanent;
            //for using in give_same_address()
            this.area_permanent = this.pincode_details[emp_new_area_value_Arr[0]]['Name'];
        }
        else if (type_of_pincode == 'present')
            this.pincode_details == this.pincode_details_present;
        district.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['District']);
        city.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['Block']);
        state.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['State']);
    };
    EmployeeOperationsComponent.prototype.give_same_address = function (event) {
        if (event.target.checked) {
            var pincode = $('.emp_new_pincode_permanent').val();
            this.get_address_from_pincode(pincode, 'present');
            this.NewEmployeesForm.patchValue({
                emp_new_address_present: $('.emp_new_address_permanent').val(),
                emp_new_pincode_present: $('.emp_new_pincode_permanent').val(),
                emp_new_state_present: $('.emp_new_state_permanent').val(),
                emp_new_district_present: $('.emp_new_district_permanent').val(),
                emp_new_city_present: $('.emp_new_city_permanent').val(),
                emp_new_area_present: this.NewEmployeesForm.get('emp_new_area_permanent').value
            });
        }
    };
    EmployeeOperationsComponent.prototype.form_submit = function (formDirective) {
        var _this = this;
        if (!this.NewEmployeesForm.valid) {
            if (this.emp_branch_code === this.session_branch_code)
                this.notify.openSnackBar('Please fill all the fields', '', 'red-snackbar');
            else
                this.notify.openSnackBar('Form is readonly as Employee is in a differnet Branch', '', 'red-snackbar');
            return;
        }
        this.notify.askForConfirmation().then(function (trig) {
            var final_form_data;
            if (trig === true) {
                _this.spin.trig_spin(true);
                var form_data = _this.NewEmployeesForm.value;
                if (_this.switch_tab == 0)
                    final_form_data = _this.get_final_form_data(form_data, 'add');
                else if (_this.switch_tab == 1)
                    final_form_data = _this.get_final_form_data(form_data, 'edit');
                var insert_data = {
                    table_name: 'employee_info',
                    data: final_form_data,
                    db: _this.head_db
                };
                if (_this.switch_tab == 0) {
                    _this.upload_image();
                    _this.write_to_db(insert_data);
                    formDirective.resetForm();
                    _this.reset();
                }
                else if (_this.switch_tab == 1) {
                    if (_this.fileToUpload != null)
                        _this.upload_image();
                    _this.update_employee_table(final_form_data, 'Data Updated Successfully');
                }
            }
        });
    };
    EmployeeOperationsComponent.prototype.get_final_form_data = function (form_data, mode) {
        var final_form_data;
        var data = {
            'role': 'er',
            'role_id': form_data.role_hierarchy,
            'title': form_data.emp_new_title,
            'emp_first_name': form_data.emp_new_first_name,
            'emp_middle_name': form_data.emp_new_middle_name,
            'emp_last_name': form_data.emp_new_last_name,
            'gender': form_data.emp_new_gender,
            'id1': form_data.emp_new_id_1_select_dropdown,
            'id1_type': form_data.emp_new_id_1_select_value_extra,
            'id1_value': form_data.emp_new_id_1_select_value,
            'id2': form_data.emp_new_id_2_select_dropdown,
            'id2_type': form_data.emp_new_id_2_select_value_extra,
            'id2_value': form_data.emp_new_id_2_select_value,
            'permanent_address': form_data.emp_new_address_permanent,
            'res_code': form_data.emp_new_res_code_select_dropdown,
            'permanent_pincode': form_data.emp_new_pincode_permanent,
            'permanent_state': form_data.emp_new_state_permanent,
            'permanent_district': form_data.emp_new_district_permanent,
            'permanent_city_town': form_data.emp_new_city_permanent,
            'permanent_area': form_data.emp_new_area_permanent,
            'h_coordinate': form_data.emp_new_h_coordinate,
            'v_coordinate': form_data.emp_new_v_coordinate,
            'present_address': form_data.emp_new_address_present,
            'present_pincode': form_data.emp_new_pincode_present,
            'present_state': form_data.emp_new_state_present,
            'present_district': form_data.emp_new_district_present,
            'present_city_town': form_data.emp_new_city_present,
            'present_area': form_data.emp_new_area_present,
            'email': form_data.emp_new_email,
            'contact1': form_data.emp_new_contact_1_select_dropdown,
            'contact1_value': form_data.emp_new_contact_1_select_value,
            'contact2': form_data.emp_new_contact_2_select_dropdown,
            'contact2_value': form_data.emp_new_contact_2_select_value,
            'contact3': form_data.emp_new_contact_3_select_dropdown,
            'contact3_value': form_data.emp_new_contact_3_select_value,
            'dob': form_data.emp_new_dob,
            'age': form_data.emp_new_age,
            'pan_card': form_data.emp_new_pan,
            'aadhar': form_data.emp_new_aadhar,
            'emp_status': form_data.emp_new_status,
            'emp_image': this.filename,
            'status': 0,
            'branch_code': this.session_branch_code
        };
        if (mode === 'add') {
            var extra_data = {
                'date': this.basic_function_obj.get_datetime(),
            };
            final_form_data = Object.assign(extra_data, data);
        }
        else if (mode === 'edit')
            final_form_data = data;
        return final_form_data;
    };
    EmployeeOperationsComponent.prototype.find_invalid = function () {
        this.basic_function_obj.find_invalid(this.NewEmployeesForm);
    };
    EmployeeOperationsComponent.prototype.onToggle = function (value, suppress_warning) {
        this.switch_tab = value;
        if (value === '0') {
            this.hide_fields();
            this.dropdown_val = '0';
            this.reset();
            for (var field in this.NewEmployeesForm.controls) {
                var control = this.NewEmployeesForm.get(field);
                control.enable();
            }
        }
        else if (value === '1') {
            this.show_fields();
            if (suppress_warning == 0) {
                this.spin.trig_spin(true);
            }
            this.get_last_employee_details();
        }
    };
    EmployeeOperationsComponent.prototype.hide_fields = function () {
        $('.emp_new_id_1_select_value_extra').hide();
        $('.emp_new_id_2_select_value_extra').hide();
        $('.emp_new_id_2_select_value').hide();
        $('.emp_new_contact_2_select_value').hide();
        $('.emp_new_contact_3_select_value').hide();
    };
    EmployeeOperationsComponent.prototype.show_fields = function () {
        $('.emp_new_id_1_select_value_extra').show();
        $('.emp_new_id_2_select_value_extra').show();
        $('.emp_new_id_2_select_value').show();
        $('.emp_new_contact_2_select_value').show();
        $('.emp_new_contact_3_select_value').show();
    };
    EmployeeOperationsComponent.prototype.reset = function () {
        this.selectedRole = { name: '' };
        this.NewEmployeesForm.patchValue({
            emp_new_date: [this.basic_function_obj.get_datetime_to_display()],
            role_hierarchy: '0',
            emp_new_title: '',
            emp_new_first_name: '',
            emp_new_middle_name: '',
            emp_new_last_name: '',
            emp_new_dob: '',
            emp_new_age: '',
            emp_new_gender: '',
            emp_new_pan: '',
            emp_new_email: '',
            emp_new_aadhar: '',
            emp_new_status: '01',
            emp_new_id_1_select_dropdown: '0',
            emp_new_id_1_select_value: '',
            emp_new_id_1_select_value_extra: '',
            emp_new_id_2_select_dropdown: '',
            emp_new_id_2_select_value: '',
            emp_new_id_2_select_value_extra: '',
            emp_new_contact_1_select_dropdown: '01',
            emp_new_contact_1_select_value: '',
            emp_new_contact_2_select_dropdown: '',
            emp_new_contact_2_select_value: '',
            emp_new_contact_3_select_dropdown: '',
            emp_new_contact_3_select_value: '',
            emp_new_address_permanent: '',
            emp_new_res_code_select_dropdown: '01',
            emp_new_area_permanent: '',
            emp_new_pincode_permanent: '',
            emp_new_custom_element_permanent_area: '',
            emp_new_city_permanent: '',
            emp_new_district_permanent: '',
            emp_new_state_permanent: '',
            emp_new_h_coordinate: '',
            emp_new_v_coordinate: '',
            emp_new_address_present: '',
            emp_new_area_present: '',
            emp_new_pincode_present: '',
            emp_new_custom_element_area_present: '',
            emp_new_city_present: '',
            emp_new_district_present: '',
            emp_new_state_present: '',
            emp_new_image: '',
        });
    };
    EmployeeOperationsComponent.prototype.patch_form = function (data) {
        this.selectedRole = this.idsToPropertiesMap[data['role_id']];
        console.log(this.selectedRole.name.length);
        this.NewEmployeesForm.patchValue({
            emp_new_date: data['date'],
            role_hierarchy: data['role_id'],
            emp_new_title: data['title'],
            emp_new_first_name: data['emp_first_name'],
            emp_new_middle_name: data['emp_middle_name'],
            emp_new_last_name: data['emp_last_name'],
            emp_new_dob: data['dob'],
            emp_new_age: data['age'],
            emp_new_gender: data['gender'],
            emp_new_pan: data['pan_card'],
            emp_new_email: data['email'],
            emp_new_aadhar: data['aadhar'],
            emp_new_status: data['emp_status'],
            emp_new_id_1_select_dropdown: data['id1'],
            emp_new_id_1_select_value: data['id1_value'],
            emp_new_id_1_select_value_extra: data['id1_type'],
            emp_new_id_2_select_dropdown: data['id2'],
            emp_new_id_2_select_value: data['id2_value'],
            emp_new_id_2_select_value_extra: data['id2_type'],
            emp_new_contact_1_select_dropdown: data['contact1'],
            emp_new_contact_1_select_value: data['contact1_value'],
            emp_new_contact_2_select_dropdown: data['contact2'],
            emp_new_contact_2_select_value: data['contact2_value'],
            emp_new_contact_3_select_dropdown: data['contact3'],
            emp_new_contact_3_select_value: data['contact3_value'],
            emp_new_address_permanent: data['permanent_address'],
            emp_new_res_code_select_dropdown: data['res_code'],
            emp_new_area_permanent: data['permanent_area'],
            emp_new_pincode_permanent: data['permanent_pincode'],
            emp_new_city_permanent: data['permanent_city_town'],
            emp_new_district_permanent: data['permanent_district'],
            emp_new_state_permanent: data['permanent_state'],
            emp_new_h_coordinate: data['h_coordinate'],
            emp_new_v_coordinate: data['v_coordinate'],
            emp_new_address_present: data['present_address'],
            emp_new_area_present: data['present_area'],
            emp_new_pincode_present: data['present_pincode'],
            emp_new_city_present: data['present_city_town'],
            emp_new_district_present: data['present_district'],
            emp_new_state_present: data['present_state'],
            emp_new_image: '',
        });
    };
    EmployeeOperationsComponent.prototype.get_last_employee_details = function () {
        var _this = this;
        var data = {
            'branch_code': this.session_branch_code
        };
        var insert_data = {
            table_name: 'employee_info',
            data: data,
            db: this.head_db
        };
        this.p.get_max_id_emp_info(insert_data)
            .subscribe(function (response) {
            _this.spin.trig_spin(false);
            var data_max_id = response.rows[0];
            var max_id = data_max_id['max_id'];
            if (max_id !== null) {
                _this.g.get_existing_employee_by_last_timestamp()
                    .subscribe(function (response) {
                    var data = response.rows[0];
                    _this.currentEmployee = data;
                    _this.check_credentials_mode(data['id']);
                    _this.get_employee_keys(data['id']);
                    _this.employeeCredentialsForm.patchValue({ name: _this.currentEmployee['emp_first_name'] + " " + _this.currentEmployee['emp_middle_name'] + " " + _this.currentEmployee['emp_last_name'] });
                    _this.set_form_variables(data);
                    _this.patch_form(data);
                    _this.spin.trig_spin(false);
                }, function (error) {
                    console.log(error);
                    _this.spin.trig_spin(false);
                    _this.notify.openSnackBar(error, '', 'red-snackbar');
                });
            }
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.fn_on_search = function (search_term) {
        var _this = this;
        this.show_fields();
        this.spin.trig_spin(true);
        var split_search_term = search_term.split('-');
        var res_id = split_search_term[1].split('');
        var get_data = {
            table_name: 'employee_info',
            data: res_id[0],
            db: this.head_db
        };
        this.p.do_simple_id_read(get_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.emp_branch_code = data['branch_code'];
            if (_this.session_branch_code === _this.emp_branch_code) {
                _this.patch_form(data);
                _this.emp_image = data['emp_image'];
                _this.spin.trig_spin(false);
            }
            else {
                _this.notify.normal_alert('Emloyee does not exist in this Branch !!!');
                _this.spin.trig_spin(false);
            }
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.write_to_db = function (insert_data) {
        var _this = this;
        this.p.do_single_insertion_emp_info(insert_data)
            .subscribe(function (response) {
            if (response.flag === 1) {
                _this.notify.openSnackBarSuccess();
                $('#remove').click();
            }
            else if (response.flag === 0) {
                _this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.update_employee_table = function (form_data, success_message) {
        var _this = this;
        var data = {
            data_to_update: form_data,
            condition: {
                id: [this.id_to_edit]
            }
        };
        var update_data = {
            table_name: 'employee_info',
            data: data,
            db: this.head_db
        };
        this.p.do_simple_update_emp_info(update_data)
            .subscribe(function (response) {
            if (response.no_of_rows_updated[0] == 1) {
                _this.notify.openSnackBar(success_message, '', 'green-snackbar');
                _this.get_employee_keys([_this.id_to_edit]);
                _this.onToggle('1', 0);
                $('#remove').click();
                _this.ngOnInit();
            }
            else {
                _this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.upload_image = function () {
        var _this = this;
        this.p.addfile(this.fileToUpload, this.filename)
            .subscribe(function (response) { }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.send_tab = function (ctrl, view_id) {
        this.view_id = view_id;
        var get_data = {
            table_name: 'employee_info',
            columns_to_retrieve: 'id, emp_first_name, emp_middle_name, emp_last_name, branch_code, username',
            data: [view_id],
            db: this.head_db
        };
        if (ctrl === 1) {
            $('#emp_tab_1').click();
            document.getElementById("toggle_btn").value = '1';
            this.get_employee_details(get_data);
        }
        else if (ctrl === 2) {
            $('#emp_tab_3').click();
            this.send_message('sms', get_data);
        }
        else if (ctrl === 3) {
            $('#emp_tab_3').click();
            this.send_message('email', get_data);
        }
        else if (ctrl === 4) {
            this.check_credentials_mode(view_id);
            this.credentialsService.set_username_status('null');
            this.set_emp_name(get_data);
        }
    };
    EmployeeOperationsComponent.prototype.fn_list_members = function () {
        var _this = this;
        this.g.get_all_employee()
            .subscribe(function (response) {
            var data = response.rows;
            data.forEach(function (element) {
                var get_data = {
                    table_name: 'branch_details',
                    data: element['branch_code'],
                    condition_column: 'branch_code',
                    db: 'nace_fin_head_office'
                };
                _this.p.do_single_fetch_employee_with_where_condition(get_data)
                    .subscribe(function (response) {
                    var data = response.rows;
                    element['branch_name'] = data[0].name;
                    _this.chRef.detectChanges();
                    _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
                });
                _this.employeeData = data;
            });
        });
    };
    EmployeeOperationsComponent.prototype.get_employee_details = function (get_data) {
        var _this = this;
        this.p.do_simple_id_read(get_data)
            .subscribe(function (response) {
            var data = response.row;
            var branch_code = data['branch_code'];
            _this.allow_employee_keys(data['branch_code'], false);
            _this.currentEmployee = data;
            _this.employeeCredentialsForm.patchValue({ name: _this.currentEmployee['emp_first_name'] + " " + _this.currentEmployee['emp_middle_name'] + " " + _this.currentEmployee['emp_last_name'] });
            _this.set_form_variables(data);
            _this.check_read_or_write(branch_code);
            _this.check_credentials_mode(data['id']);
            _this.get_employee_keys(data['id']);
            _this.patch_form(data);
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    //Makes form readonly for users in other branches
    EmployeeOperationsComponent.prototype.check_read_or_write = function (branch_code) {
        if (this.is_same_branch(branch_code)) {
            for (var field in this.NewEmployeesForm.controls) {
                var control = this.NewEmployeesForm.get(field);
                control.enable();
            }
        }
        else {
            for (var field in this.NewEmployeesForm.controls) {
                var control = this.NewEmployeesForm.get(field);
                control.disable();
            }
        }
    };
    EmployeeOperationsComponent.prototype.send_message = function (type, get_data) {
        var _this = this;
        this.p.do_simple_id_read_with_where_condition(get_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.id_to_edit = data['id'];
            if (type == 'sms') {
                _this.send_sms.patchValue({
                    send_sms_name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
                    prevent_warning: '0'
                });
                _this.send_email.patchValue({
                    send_email_name: '',
                    prevent_warning: '0'
                });
            }
            else if (type == 'email') {
                _this.send_email.patchValue({
                    send_email_name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
                    prevent_warning: '0'
                });
                _this.send_sms.patchValue({
                    send_sms_name: '',
                    prevent_warning: '0'
                });
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.errorService.handle_error(error);
        });
    };
    EmployeeOperationsComponent.prototype.set_form_variables = function (data) {
        this.emp_image = data['emp_image'];
        this.id_to_edit = data['id'];
        this.emp_branch_code = data['branch_code'];
        this.emp_username = data['username'];
        this.get_address_from_pincode(data['permanent_pincode'], 'permanent');
        this.get_address_from_pincode(data['present_pincode'], 'present');
    };
    EmployeeOperationsComponent.prototype.credential_submit = function () {
        if (!this.basic_function_obj.is_valid(this.employeeCredentialsForm, document))
            return;
        var formData = this.employeeCredentialsForm.value;
        var encrypted_key = this.encryptionService.encrypt(formData.key);
        var emp_credentials = {
            username: formData.username,
            password: encrypted_key
        };
        if (this.credentialsService.get_username_status() === 'available') {
            this.update_employee_table(emp_credentials, "Kit Issued Successfully");
            this.credentialsService.set_username_availability_status('', '');
            this.credentialsService.set_username_status('taken');
            this.is_credentials_readonly = true;
            this.employeeCredentialsForm.patchValue({
                username: '',
                key: ''
            });
        }
        else if (this.credentialsService.get_username_status() === 'taken') {
            this.notify.openSnackBar('Username already taken', '', 'red-snackbar');
            document.getElementById('username').focus();
        }
        else if (this.credentialsService.get_username_status() === 'endWithUnderscore') {
            this.notify.openSnackBar('Username should not end with underscore', '', 'red-snackbar');
            document.getElementById('username').focus();
        }
    };
    EmployeeOperationsComponent.prototype.update_username = function () {
        var username = this.employeeCredentialsForm.get('username').value;
        this.update_employee_table({ username: username }, 'Updated Username');
        this.credentialsService.set_username_status('taken');
        this.credentialsService.set_username_availability_status('', '');
    };
    EmployeeOperationsComponent.prototype.set_emp_name = function (get_data) {
        var _this = this;
        this.credentialsService.set_username_availability_status('', '');
        this.spin.trig_spin(true);
        var subscription = this.p.do_simple_id_read_with_where_condition(get_data)
            .subscribe(function (response) {
            var data = response.row;
            if (_this.allow_employee_keys(data['branch_code'], true)) {
                $('#emp_tab_4').click();
                _this.scroll_to_top();
                _this.id_to_edit = data['id'];
                _this.emp_username = data['username'];
                _this.spin.trig_spin(false);
                _this.employeeCredentialsForm.patchValue({
                    name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
                    prevent_warning: '0'
                });
            }
            subscription.unsubscribe();
        }, function (error) {
            _this.errorService.handle_error(error);
            subscription.unsubscribe();
        });
    };
    EmployeeOperationsComponent.prototype.get_employee_keys = function (view_id) {
        var _this = this;
        var fetch_data = {
            table_name: 'employee_info',
            columns_to_retrieve: 'username',
            data: [view_id],
            db: this.head_db
        };
        var subscription = this.p.do_simple_id_read_with_where_condition(fetch_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.employeeCredentialsForm.get('username').patchValue(data['username']);
            subscription.unsubscribe();
        }, function (error) {
            _this.errorService.handle_error(error);
            subscription.unsubscribe();
        });
    };
    EmployeeOperationsComponent.prototype.allow_employee_keys = function (branch_code, show_error) {
        var is_same_branch = this.is_same_branch(branch_code);
        if (!is_same_branch) {
            if (show_error) {
                this.notify.normal_alert('Emloyee does not exist in this Branch !!!');
                this.spin.trig_spin(false);
            }
            else
                $('#emp_tab_4').hide();
        }
        else
            $('#emp_tab_4').show();
        return is_same_branch;
    };
    //Checks if credentials should be readonly
    EmployeeOperationsComponent.prototype.check_credentials_mode = function (view_id) {
        var _this = this;
        console.log("viewid");
        console.log(view_id);
        var fetch_data = {
            table_name: 'employee_info',
            columns_to_retrieve: 'username',
            data: view_id,
            db: this.head_db
        };
        var subscription = this.p.do_simple_id_read_with_where_condition(fetch_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.is_credentials_readonly = (data['username']) ? true : false;
            _this.get_employee_keys(view_id);
            console.log(_this.is_credentials_readonly);
            subscription.unsubscribe();
        }, function (error) {
            _this.errorService.handle_error(error);
            subscription.unsubscribe();
        });
    };
    EmployeeOperationsComponent.prototype.is_same_branch = function (branch_code) {
        return (this.session_branch_code === branch_code);
    };
    EmployeeOperationsComponent.prototype.scroll_to_top = function () {
        document.getElementById('top').scrollIntoView(true);
    };
    EmployeeOperationsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    EmployeeOperationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-employee-operations",
            template: __webpack_require__(/*! ./employee-operations.component.html */ "./src/app/menu_components/employees/employee-operations/employee-operations.component.html"),
            styles: [__webpack_require__(/*! ./employee-operations.component.scss */ "./src/app/menu_components/employees/employee-operations/employee-operations.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"],
            _services_getting_service__WEBPACK_IMPORTED_MODULE_6__["GettingService"],
            _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__["NotificationserviceService"],
            _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__["BasicFunctionsService"],
            _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _services_posting_service__WEBPACK_IMPORTED_MODULE_5__["PostingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_8__["DatatableTriggerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            app_services_third_party_api_service__WEBPACK_IMPORTED_MODULE_12__["ThirdPartyApiService"],
            app_services_encryption_service__WEBPACK_IMPORTED_MODULE_13__["EncryptionService"],
            app_services_credentials_service__WEBPACK_IMPORTED_MODULE_14__["CredentialsService"],
            app_services_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"],
            _employee_roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"],
            app_services_map_service__WEBPACK_IMPORTED_MODULE_17__["MapService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EmployeeOperationsComponent);
    return EmployeeOperationsComponent;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-create/role-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <p mat-dialog-title>{{title}}</p>\n  \n   <app-html-components\n    [html_data_to_pass]=\"isNewRole ? roleAddElements : roleEditElements \"\n    [form_data]=\"this.form\" \n    [formGroup]=\"this.form\">\n\n    <ng-template #standardTemplate let-item>\n      <div *ngIf=\"item=='linkHead'\"> \n        <div style=\"margin-top: 10px\">  \n          <mat-form-field class=\"margin\">\n            <mat-select \n             id=\"linkHead\" \n             placeholder=\"Select Role\"\n             formControlName=\"linkHead\"  \n             matInput required=\"true\"\n             (selectionChange)=\"namesLinkHead = $event.source.triggerValue\">\n             <mat-option  class=\"options\"  *ngFor = \"let role of dialogData.roles index as i\"  [value]=\"role.link\">{{role.namesLink}} </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </ng-template>\n\n   </app-html-components>\n   <mat-dialog-actions>\n    <button id=\"addBtn\" (click)=\"onClickAdd()\" type=\"button\" name=\"addBtn\" style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\"  mat-raised-button>{{buttonText}}</button>\n   </mat-dialog-actions>\n  \n  \n\n"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-create/role-create.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options.mat-option {\n  height: unset;\n  margin-bottom: 2%; }\n\n::ng-deep .options .mat-option-text.mat-option-text {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-create/role-create.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RoleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCreateComponent", function() { return RoleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/basic-functions.service */ "./src/app/services/basic-functions.service.ts");
/* harmony import */ var app_services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var app_services_posting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var app_services_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../roles.service */ "./src/app/menu_components/employees/employee-roles/roles.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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











var RoleCreateComponent = /** @class */ (function () {
    function RoleCreateComponent(formBuilder, authService, postingService, spinnerService, notificationService, error, rolesService, basicFunction, dialogData) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.postingService = postingService;
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.error = error;
        this.rolesService = rolesService;
        this.basicFunction = basicFunction;
        this.dialogData = dialogData;
        this.color = '#EEEEEE';
        this.colorCheckBox = 'primary';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.closeDialog = false;
        this.form = this.formBuilder.group({
            name: [''],
            linkHead: ['']
        });
        this.roleAddElements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: false,
                table_view: false,
                elements: [
                    {
                        textbox: true,
                        label: 'Role Name',
                        placeholder: 'Please Enter Role Name',
                        required: true,
                        classes: ['name'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'name',
                    },
                    {
                        label: 'Role Head',
                        custom_element: true,
                        custom_element_identification: 'linkHead',
                        is_element_required: true,
                    },
                ]
            },
        ];
        this.roleEditElements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: false,
                table_view: false,
                elements: [
                    {
                        textbox: true,
                        label: 'Role Name',
                        placeholder: 'Please Enter Role Name',
                        required: true,
                        classes: ['name'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'name',
                    },
                ]
            },
        ];
        this.initInstanceVariables();
    }
    RoleCreateComponent.prototype.ngOnInit = function () {
    };
    RoleCreateComponent.prototype.initInstanceVariables = function () {
        this.role = __assign({}, this.dialogData.role);
        this.isNewRole = this.role.id === 0;
        if (this.isNewRole) {
            this.title = 'Add Role';
            this.buttonText = 'Add';
        }
        else {
            this.title = 'Edit Role';
            this.buttonText = 'Edit';
            this.form.get('name').patchValue(this.role.name);
        }
    };
    RoleCreateComponent.prototype.setFormValuesToRole = function () {
        var formData = this.form.value;
        if (this.isNewRole) {
            this.role.name = formData.name;
            this.role.link = formData.linkHead;
            this.role.namesLinkHead = this.namesLinkHead;
        }
        else {
            this.role.name = formData.name;
        }
        this.rolesService.setRole(this.role);
    };
    RoleCreateComponent.prototype.addRole = function () {
        var _this = this;
        this.spinnerService.trig_spin(true);
        this.subscriptions
            .add(this.rolesService.addRole()
            .subscribe(function (isAdded) {
            if (isAdded) {
                _this.dialogData.dialogRef.closeAll();
            }
            _this.spinnerService.trig_spin(false);
        }));
    };
    RoleCreateComponent.prototype.updateRole = function () {
        var _this = this;
        this.spinnerService.trig_spin(true);
        this.subscriptions
            .add(this.rolesService.updateRole()
            .subscribe(function (isUpdated) {
            if (isUpdated) {
                _this.dialogData.dialogRef.closeAll();
            }
            _this.spinnerService.trig_spin(false);
        }));
    };
    RoleCreateComponent.prototype.onClickAdd = function () {
        var _this = this;
        if (!this.basicFunction.is_valid(this.form, document)) {
            return;
        }
        this.setFormValuesToRole();
        if (this.rolesService.isDuplicateRole()) {
            return;
        }
        this.notificationService.askForConfirmation().then(function (hasConfirmed) {
            if (hasConfirmed) {
                if (_this.isNewRole) {
                    _this.addRole();
                }
                else {
                    _this.updateRole();
                }
            }
        });
    };
    RoleCreateComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    RoleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-create',
            template: __webpack_require__(/*! ./role-create.component.html */ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.html"),
            styles: [__webpack_require__(/*! ./role-create.component.scss */ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            app_services_posting_service__WEBPACK_IMPORTED_MODULE_6__["PostingService"],
            app_services_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"],
            app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_5__["NotificationserviceService"],
            app_services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"],
            _roles_service__WEBPACK_IMPORTED_MODULE_9__["RolesService"],
            app_services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__["BasicFunctionsService"], Object])
    ], RoleCreateComponent);
    return RoleCreateComponent;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-list/role-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\"></div>\n<mat-card>\n  \n\n  <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" role=\"tablist\" [ngClass]=\"{'active': true}\" (click)=\"openDialog()\" type=\"button\" name=\"add_role_btn\"   mat-raised-button>Add Role</a>\n    </li>\n  </ul>\n<div class=\"row\">\n  <ng-template>\n    <mat-form-field><mat-label>\n      <input matInput placeholder=\"search for me\" />\n    </mat-label></mat-form-field>\n  </ng-template>\n</div>\n \n  \n  <app-table [table_data] = \"table_data_to_send\">\n    <ng-template>\n      <tr \n        class=\"table-row\" \n        (mouseover)=\"changeCursorStyle(role.name)\" \n        [ngStyle]=\"{'cursor': cursorStyle}\"\n        (click)=\"openDialog(role)\" \n        *ngFor = \"let role of roles index as i\">\n        <td>{{i+1}}</td><td>{{role.name}}</td><td>{{role.namesLink}}</td>   \n      </tr>\n    </ng-template>\n  </app-table>\n</mat-card>\n\n\n<button type=\"button\" (click)=\"scrollToTop()\" id=\"go-to-top-btn\"  class=\"mat-raised-button btn\">Go To Top</button>\n<div id=\"bottom\"></div>"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-list/role-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-top: 5%; }\n\n.nav-link {\n  cursor: pointer; }\n\n.mat-raised-button.btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2%;\n  border-radius: 20px 20px 20px 20px; }\n"

/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/role-list/role-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles.service */ "./src/app/menu_components/employees/employee-roles/roles.service.ts");
/* harmony import */ var _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role-create/role-create.component */ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.ts");
/* harmony import */ var app_services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/datatable-trigger.service */ "./src/app/services/datatable-trigger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(dialog, rolesService, changeDetector, errorService, trigService) {
        this.dialog = dialog;
        this.rolesService = rolesService;
        this.changeDetector = changeDetector;
        this.errorService = errorService;
        this.trigService = trigService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.defaultRole = { id: 0, name: '' };
        this.table_data_to_send = {
            minmax: {
                need_minmax: false
            },
            table: {
                is_datatable: true,
                table_id: 'list_role_table',
                have_non_sort_col: true,
                non_sort_cols: '3',
                need_colour: true,
                color_cols: '',
                need_header: true,
                header: 'sl_no.~role~hierarchy'
            },
            excel: {
                need_export_to_excel: true,
                export_filename: 'trial_xlsx_report_new',
                type: 'xlsx'
            },
            column_search: {
                need_column_search: false
            }
        };
    }
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.rolesService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
            _this.changeDetector.markForCheck();
            // this.trigService.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
        }, function (error) { return _this.errorService.handle_error(error); }));
    };
    RoleListComponent.prototype.isMD = function (name) { return name === 'Managing Director'; };
    RoleListComponent.prototype.scrollToBottom = function () { document.getElementById('bottom').scrollIntoView(true); };
    RoleListComponent.prototype.scrollToTop = function () { document.getElementById('top').scrollIntoView(true); };
    RoleListComponent.prototype.changeCursorStyle = function (name) {
        if (this.isMD(name)) {
            this.cursorStyle = 'auto';
        }
        else {
            this.cursorStyle = 'pointer';
        }
    };
    RoleListComponent.prototype.openDialog = function (role) {
        var _this = this;
        if (role === void 0) { role = this.defaultRole; }
        if (this.isMD(role.name)) {
            return;
        }
        var dialogRef = this.dialog;
        dialogRef.open(_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_5__["RoleCreateComponent"], { data: { role: role, roles: this.roles, dialogRef: dialogRef } });
        dialogRef.afterAllClosed.subscribe(function () { return _this.scrollToBottom(); });
    };
    RoleListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.scss */ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            app_services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"],
            app_services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_6__["DatatableTriggerService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/employee-roles/roles.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/menu_components/employees/employee-roles/roles.service.ts ***!
  \***************************************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var app_services_posting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var app_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_hierarchy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/hierarchy.service */ "./src/app/services/hierarchy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RolesService = /** @class */ (function () {
    function RolesService(postingService, errorService, hierarchyService, authService, spinnerService, notificationService) {
        this.postingService = postingService;
        this.errorService = errorService;
        this.hierarchyService = hierarchyService;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.rolesFetched = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.roleAdded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.roleUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.head_db = this.authService.getHeadDatabaseSession();
    }
    RolesService.prototype.setRole = function (role) {
        this.role = role;
        this.isNewRole = this.role.id === 0;
    };
    ;
    RolesService.prototype.getRoles = function () {
        var _this = this;
        this.subscriptions.add(this.postingService.do_list_all('employee_roles')
            .subscribe(function (response) {
            var roles = response.rows;
            var hierarchyData = _this.hierarchyService.getHierarchy(roles);
            _this.roles = hierarchyData.itemsWithNamesLink;
            _this.hierarchy = hierarchyData.hierarchy;
            _this.rolesFetched.next(_this.roles);
        }, function (error) { return _this.errorService.handle_error(error); }));
        return this.rolesFetched.asObservable();
    };
    RolesService.prototype.addRole = function () {
        var _this = this;
        this.subscriptions
            .add(this.writeRoleToDb()
            .subscribe(function (idOfInsertedRole) { return _this.appendIdOfRoleToLink(idOfInsertedRole); }, function (error) { return _this.errorService.handle_error(error); }));
        return this.roleAdded.asObservable();
    };
    RolesService.prototype.updateRole = function () {
        this.updateRoleInDb({ name: '\'' + this.role.name + '\'' }, 'Role Updated', this.role.id);
        return this.roleUpdated.asObservable();
    };
    RolesService.prototype.writeRoleToDb = function () {
        var _this = this;
        var idOfInsertedRole = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        var insertData = {
            table_name: 'employee_roles',
            data: { name: this.role.name, link: this.role.link },
            db: this.head_db
        };
        this.subscriptions.add(this.postingService.do_single_insertion(insertData)
            .subscribe(function (response) {
            if (response.flag === 1) {
                idOfInsertedRole.next(response.inserted_id);
            }
            else {
                _this.notificationService.openSnackBar('Error while insering', '', 'red-snackbar');
            }
        }, function (error) { return _this.errorService.handle_error(error); }));
        return idOfInsertedRole.asObservable();
    };
    RolesService.prototype.appendIdOfRoleToLink = function (id) {
        var isAppended = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (!id) {
            return;
        }
        var linkAfterAppendingId = this.role.link + '~' + id.toString();
        this.updateRoleInDb({ link: '\'' + linkAfterAppendingId + '\'' }, 'Role Added', id);
    };
    RolesService.prototype.updateRoleInDb = function (updateData, message, id) {
        var _this = this;
        var updateQueryData = {
            table_name: 'employee_roles',
            data: updateData,
            condition_string: 'id = ' + id,
            db: this.authService.getHeadDatabaseSession()
        };
        this.subscriptions
            .add(this.postingService.do_custom_update(updateQueryData)
            .subscribe(function (response) {
            if (response.no_of_rows_updated === 1) {
                _this.notificationService.openSnackBar(message, '', 'green-snackbar');
                _this.updateSubject(true);
                _this.getRoles();
            }
            else {
                _this.notificationService.openSnackBar('Error while Updating', '', 'red-snackbar');
                _this.updateSubject(false);
            }
        }, function (error) { return _this.errorService.handle_error(error); }));
    };
    RolesService.prototype.updateSubject = function (trueOrFalse) {
        if (this.isNewRole) {
            this.roleAdded.next(trueOrFalse);
        }
        else {
            this.roleUpdated.next(trueOrFalse);
        }
    };
    RolesService.prototype.appendNameToNamesLinkHead = function () {
        this.role.namesLink = this.role.namesLinkHead + '->' + this.role.name;
    };
    RolesService.prototype.replaceNameInNamesLink = function () {
        var splittedLinks = this.role.namesLink.split('->');
        splittedLinks[splittedLinks.length - 1] = this.role.name;
        var newLink = splittedLinks.join('->');
        this.role.namesLink = newLink;
    };
    RolesService.prototype.modifyNamesLink = function () {
        if (this.isNewRole) {
            this.appendNameToNamesLinkHead();
        }
        else {
            this.replaceNameInNamesLink();
        }
    };
    RolesService.prototype.isDuplicateRole = function () {
        this.modifyNamesLink();
        var isNamesLinkPresentInHierarchy = this.hierarchy.includes(this.role.namesLink);
        if (isNamesLinkPresentInHierarchy) {
            this.notificationService.openSnackBar('Role with same name and head already exists', '', 'red-snackbar');
        }
        return isNamesLinkPresentInHierarchy;
    };
    RolesService.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_services_posting_service__WEBPACK_IMPORTED_MODULE_4__["PostingService"],
            app_services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"],
            _services_hierarchy_service__WEBPACK_IMPORTED_MODULE_7__["HierarchyService"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            app_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            app_services_notificationservice_service__WEBPACK_IMPORTED_MODULE_3__["NotificationserviceService"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/employees.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/menu_components/employees/employees.module.ts ***!
  \***************************************************************/
/*! exports provided: options, EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.routing.module */ "./src/app/menu_components/employees/employees.routing.module.ts");
/* harmony import */ var _employee_roles_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-roles/role-create/role-create.component */ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var app_modules_component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/component/component.module */ "./src/app/modules/component/component.module.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _employee_roles_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-roles/roles.service */ "./src/app/menu_components/employees/employee-roles/roles.service.ts");
/* harmony import */ var _employee_operations_employee_operations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-operations/employee-operations.component */ "./src/app/menu_components/employees/employee-operations/employee-operations.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employee_roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-roles/role-list/role-list.component */ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.ts");
/* harmony import */ var _username_validation_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./username-validation.directive */ "./src/app/menu_components/employees/username-validation.directive.ts");
/* harmony import */ var _services_hierarchy_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/hierarchy.service */ "./src/app/services/hierarchy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var options = null;
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _employees_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                app_modules_component_component_module__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot()
            ],
            declarations: [
                _employee_operations_employee_operations_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeOperationsComponent"],
                _employee_roles_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_3__["RoleCreateComponent"],
                _employee_roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__["RoleListComponent"],
                _username_validation_directive__WEBPACK_IMPORTED_MODULE_13__["UsernameValidationDirective"]
            ],
            providers: [_employee_roles_roles_service__WEBPACK_IMPORTED_MODULE_9__["RolesService"], _services_hierarchy_service__WEBPACK_IMPORTED_MODULE_14__["HierarchyService"]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/employees.routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/menu_components/employees/employees.routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_operations_employee_operations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-operations/employee-operations.component */ "./src/app/menu_components/employees/employee-operations/employee-operations.component.ts");
/* harmony import */ var _employee_roles_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-roles/role-create/role-create.component */ "./src/app/menu_components/employees/employee-roles/role-create/role-create.component.ts");
/* harmony import */ var _employee_roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-roles/role-list/role-list.component */ "./src/app/menu_components/employees/employee-roles/role-list/role-list.component.ts");
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
                path: 'operations',
                component: _employee_operations_employee_operations_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeOperationsComponent"]
            },
            {
                path: 'roles',
                component: _employee_roles_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"]
            },
            {
                path: 'role-create',
                component: _employee_roles_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_3__["RoleCreateComponent"]
            }
        ]
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/menu_components/employees/username-validation.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/menu_components/employees/username-validation.directive.ts ***!
  \****************************************************************************/
/*! exports provided: UsernameValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidationDirective", function() { return UsernameValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_credentials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var app_services_mask_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/mask-input.service */ "./src/app/services/mask-input.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsernameValidationDirective = /** @class */ (function () {
    function UsernameValidationDirective(maskInputService, credentialsService, changeDetector) {
        this.maskInputService = maskInputService;
        this.credentialsService = credentialsService;
        this.changeDetector = changeDetector;
    }
    UsernameValidationDirective.prototype.onKeyUp = function (event) {
        var username = event.target.value;
        if (this.isKeyAllowedForUsernameTyping(event.key) || this.isUsernameEndingWithUnderscore(username)) {
            this.credentialsService.validate_username(username);
            this.changeDetector.markForCheck();
        }
    };
    UsernameValidationDirective.prototype.onKeyDown = function (event) {
        var regex = this.getRegex(event);
        this.maskInputService.mask(regex, event);
        if (this.isKeyAllowedForUsernameTyping(event.key)) {
            this.credentialsService.halt_username_validation();
            this.changeDetector.markForCheck();
        }
    };
    UsernameValidationDirective.prototype.getRegex = function (event) {
        var isFirstCharacter = event.target.value.length === 0;
        return (isFirstCharacter) ? /[A-Za-z0-9]/ : /[A-Za-z0-9_]/;
    };
    UsernameValidationDirective.prototype.isKeyAllowedForUsernameTyping = function (key) {
        var charCode = key.charCodeAt(0);
        var isNumber = charCode >= 49 && charCode <= 57;
        var isAlphabet = charCode >= 97 && charCode <= 122;
        var isAlphaNumeric = isAlphabet || isNumber;
        var isBackspace = charCode === 66;
        var isUnderScore = charCode === 95;
        return isAlphaNumeric || isBackspace || isUnderScore;
    };
    UsernameValidationDirective.prototype.isUsernameEndingWithUnderscore = function (username) {
        var underscorePosition = username.lastIndexOf('_');
        return underscorePosition === username.length - 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UsernameValidationDirective.prototype, "onKeyUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UsernameValidationDirective.prototype, "onKeyDown", null);
    UsernameValidationDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[validateUsername]' }),
        __metadata("design:paramtypes", [app_services_mask_input_service__WEBPACK_IMPORTED_MODULE_2__["MaskInputService"],
            app_services_credentials_service__WEBPACK_IMPORTED_MODULE_1__["CredentialsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UsernameValidationDirective);
    return UsernameValidationDirective;
}());



/***/ }),

/***/ "./src/app/services/hierarchy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/hierarchy.service.ts ***!
  \***********************************************/
/*! exports provided: HierarchyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyService", function() { return HierarchyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HierarchyService = /** @class */ (function () {
    function HierarchyService() {
        this.idsToNamesMap = {};
        this.list = [];
        this.namesLinks = [];
        this.itemsWithNamesLink = [];
    }
    HierarchyService.prototype.init = function () {
        this.list = [];
        this.namesLinks = [];
        this.itemsWithNamesLink = [];
        this.idsToNamesMap = {};
    };
    HierarchyService.prototype.mapIdsToNames = function () {
        var _this = this;
        this.list.forEach(function (item) {
            var id = item['id'];
            var name = item['name'];
            _this.idsToNamesMap[id.toString()] = name;
        });
    };
    HierarchyService.prototype.convertIdsToNamesInLink = function (link) {
        var _this = this;
        var ids = link.split('~');
        var names = ids.map(function (id) { return _this.idsToNamesMap[id]; });
        var namesLink = names.join('->');
        return namesLink;
    };
    HierarchyService.prototype.generateHierarchy = function () {
        var _this = this;
        this.list.forEach(function (item) {
            var namesLink = _this.convertIdsToNamesInLink(item['link']);
            var itemWithNamesLink = __assign({}, item, { namesLink: namesLink });
            _this.namesLinks.push(namesLink);
            _this.itemsWithNamesLink.push(itemWithNamesLink);
        });
    };
    HierarchyService.prototype.getHierarchy = function (list) {
        this.init();
        this.list = list;
        this.mapIdsToNames();
        this.generateHierarchy();
        return { itemsWithNamesLink: this.itemsWithNamesLink, hierarchy: this.namesLinks };
    };
    HierarchyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], HierarchyService);
    return HierarchyService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapService = /** @class */ (function () {
    function MapService() {
        this.idsToPropertiesMap = {};
    }
    MapService.prototype.getIdsToProperiesMap = function (list) {
        var _this = this;
        list.forEach(function (item) {
            var cloneItem = __assign({}, item);
            var id = cloneItem['id'];
            delete cloneItem['id'];
            _this.idsToPropertiesMap[id] = __assign({}, cloneItem);
        });
        return this.idsToPropertiesMap;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/mask-input.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/mask-input.service.ts ***!
  \************************************************/
/*! exports provided: MaskInputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskInputService", function() { return MaskInputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaskInputService = /** @class */ (function () {
    function MaskInputService() {
    }
    MaskInputService.prototype.mask = function (regex, event) {
        if (!regex.test(event.key))
            event.preventDefault();
    };
    MaskInputService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MaskInputService);
    return MaskInputService;
}());



/***/ })

}]);
//# sourceMappingURL=menu_components-employees-employees-module.js.map