(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu_components-user-kyc-kyc-module"],{

/***/ "./src/app/menu_components/user/kyc/kyc.component.html":
/*!*************************************************************!*\
  !*** ./src/app/menu_components/user/kyc/kyc.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-tab-layout [tab_layout_ui_data_to_receive]=\"tab_layout_ui_data_to_send\">\r\n    <ng-template>\r\n        \r\n          <div class=\"tab-pane active\" id=\"link1\" >\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                        <p>\r\n                        <mat-button-toggle-group value=\"1\" style = \"background-color: whitesmoke;margin-left:4%;\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                                <mat-button-toggle value=\"1\" (change)=\"onToggle($event.value, 0)\"><b>Viekkw/Edit Customer</b></mat-button-toggle>\r\n                                <mat-button-toggle value=\"0\" (change)=\"onToggle($event.value, 0)\"><b>Register Customer</b></mat-button-toggle>\r\n                                \r\n                            </mat-button-toggle-group>  \r\n                        </p>\r\n                </div>\r\n                <div *ngIf=\"switch_tab == 1\" class=\"col-md-4 ml-auto mr-auto\">\r\n                       \r\n                 <app-search-box [search_box]=\"search_box\" (fn_on_search)= \"fn_on_search($event)\"></app-search-box>\r\n\r\n                </div>\r\n                <div *ngIf=\"switch_tab == 1\" class=\"col-md-1 ml-auto mr-auto\" >\r\n                       \r\n                    <span class=\"kyc_image\">\r\n                            <img ngClass=\"kyc_reg_image\" alt= \"User image here\" src=\"http://localhost/coligo_management_suite/backend/images/{{cus_image}}\"  height=\"100px\" width=\"100px\">\r\n                        </span> <!--<span class=\"kyc_image\">                                  \r\n                            <img   ngClass=\"kyc_reg_image\" alt= \"User image here\" src=\"../../../../assets/kyc_images/{{cus_sign}}\"  height=\"50px\" width=\"100px\">              \r\n                        </span>-->\r\n                        </div>\r\n               </div>\r\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"form_submit(formDirective)\" #formDirective=\"ngForm\" [ngStyle] = \"{'background-color':this.color}\">        \r\n                <app-html-components [html_data_to_pass] = \"kyc_mem_reg_html_elements\" [form_data]=\"this.registrationForm\"  (html_events)= \"get_html_events($event)\" >\r\n                    <ng-template #standardTemplate let-item>\r\n                    <!-- custom templates here -->\r\n\r\n                        <div>\r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_1'\">\r\n                                            <div class=\"input-group kyc_reg_date_group\">\r\n                                                    <div class=\"input-group-prepend\">\r\n                                                                <span class=\"input-group-text\">\r\n                                                                            <i class=\"material-icons\">date_range</i>\r\n                                                                </span>                  \r\n                                                    </div>\r\n                                                    <input required=\"false\" readonly=\"true\" type=\"text\" class=\"form-control kyc_reg_date\" name=\"kyc_reg_date\" formControlName=\"kyc_reg_date\">\r\n                                            </div>\r\n                                </span>\r\n                                \r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_id_1'\">\r\n                                    <div class=\"input-group kyc_reg_id_1_select_group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                            <span class=\"kyc_reg_id_select\">\r\n                                            <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_id_1_select_dropdown_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                            </span>                  \r\n                                </div>\r\n                                <app-html-components *ngIf=\"this.registrationForm.get('kyc_reg_id_1_select_dropdown').value === '3'\" [html_data_to_pass] = \"kyc_reg_custom_element_id_1_select_value_data_extra\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_id_1_select_value_data\" [form_data]=\"this.registrationForm\"  (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                            </div>\r\n                        </span>\r\n                                \r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_id_2'\">\r\n                                    <div class=\"input-group kyc_reg_id_2_select_group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                            <span class=\"kyc_reg_id_select\">\r\n                                            <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_id_2_select_dropdown_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                            </span>                  \r\n                                </div>\r\n                                <app-html-components *ngIf=\"this.registrationForm.get('kyc_reg_id_2_select_dropdown').value === '3'\" [html_data_to_pass] = \"kyc_reg_custom_element_id_2_select_value_data_extra\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_id_2_select_value_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                            </div>\r\n                        </span>\r\n                                \r\n                                <span *ngIf=\"item=='kyc_reg_custom_dob'\">\r\n                                    <mat-form-field>\r\n                    <div style=\"margin-top: 10px\">\r\n                            <input placeholder=\"DD/MM/YYYY\" class=\"date_mask\"  formControlName=\"kyc_reg_dob\"  matInput required=\"true\" type=\"text\" (blur)=\"dobcheck()\" >\r\n                    </div>   </mat-form-field>\r\n                    </span>\r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_4'\">\r\n                                            <div class=\"input-group kyc_reg_tel_type__select_group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                                    <span class=\"kyc_reg_tel_type_select\">\r\n                                                    <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_4_select_dropdown_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                                    </span>                  \r\n                                        </div>\r\n                                        <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_4_select_value_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                    </div>\r\n                                 \r\n                                </span>\r\n                                \r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_5'\">\r\n                                            <div class=\"input-group kyc_reg_tel_type__select_group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                                    <span class=\"kyc_reg_tel_type_select\">\r\n                                                    <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_5_select_dropdown_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                                    </span>                  \r\n                                        </div>\r\n                                        <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_5_select_value_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                    </div>\r\n                                </span>\r\n                                \r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_6'\">\r\n                                    <div class=\"input-group kyc_reg_tel_type__select_group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                                    <span class=\"kyc_reg_tel_type_select\">\r\n                                                    <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_6_select_dropdown_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                                    </span>                  \r\n                                        </div>\r\n                                        <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_6_select_value_data\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                    </div>\r\n                                </span>\r\n                                <span *ngIf=\"item=='share_details' && switch_tab == 0\">\r\n                                   <mat-card>\r\n                                    <div>\r\n                                        \r\n                                                <span>\r\n                                                <app-html-components [html_data_to_pass] = \"share_details_html_elements\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"> </app-html-components>  \r\n                                                    </span>\r\n                                                    <div class=\"col-md-3\" style=\"margin-left:20px\"><b>Accounts</b>\r\n                                                            <mat-form-field class=\"margin\">\r\n                                                                    <mat-select formControlName=\"kyc_reg_accounts\" placeholder=\"Select Item\"  matInput required=\"true\">\r\n                                                                        <mat-option [value] =\"ac_id\"> {{account_name}}</mat-option>\r\n                                                                    <mat-option *ngFor = \"let data of bank_data index as i\" [value] =\"data.id\">{{data.account_name}}</mat-option>\r\n                                                               \r\n                                                                    </mat-select>\r\n                                                                </mat-form-field>\r\n                                                    </div>\r\n                                                             \r\n                                                              \r\n                                    </div> \r\n                                </mat-card>\r\n                            </span>\r\n                            <!-- <span *ngIf=\"item=='share_details' && switch_tab== '0'\">\r\n                                   \r\n                                <mat-card>\r\n                                    <app-html-components [html_data_to_pass] = \"share_details_html_elements\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"> \r\n                                                 <ng-template #standardTemplate let-item>\r\n                                                <span *ngIf=\"item=='account_list'\">\r\n                                                <div style=\"margin-left:20px; margin-top: 10px;\">\r\n                                                        <mat-form-field class=\"margin\">\r\n                                                                <mat-select formControlName=\"kyc_reg_accounts\" placeholder=\"Select Item\"  matInput required=\"true\">\r\n                                                                    <mat-option [value] =\"ac_id\"> {{account_name}}</mat-option>\r\n                                                                    <mat-option *ngFor = \"let data of bank_data index as i\" [value] =\"data.id\">{{data.account_name}}</mat-option>\r\n                                                                </mat-select>\r\n                                                            </mat-form-field>\r\n                                                </div>\r\n                                            </span>   \r\n                                        </ng-template>  \r\n                                        </app-html-components>      \r\n                                                          \r\n                                    </mat-card> \r\n                        </span> -->\r\n                        \r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_7'\">        \r\n                                    <app-html-components [html_data_to_pass] = \"kyc_reg_custom_element_7_present_address\" [form_data]=\"this.registrationForm\" (html_events)= \"get_html_events_custom($event)\"></app-html-components>\r\n                                    <label style=\"margin-left: 20px;\" class=\"form-check-label\">\r\n                                            <input (change)=\"give_same_address()\" class=\"form-check-input\" type=\"checkbox\" value=\"\"> <span style=\"color: lightcoral\">Present address same as permanent address</span>\r\n                                            <span class=\"form-check-sign\">\r\n                                            <span class=\"check\"></span>\r\n                                            </span>\r\n                                    </label> \r\n                                </span>\r\n                                <span *ngIf=\"item=='kyc_reg_custom_element_area'\"> \r\n                                        <div style=\"margin-top: 10px\">  \r\n                                        <mat-form-field class=\"margin\">\r\n                                                <mat-select formControlName=\"kyc_reg_area\" placeholder=\"Select Area\"  matInput required=\"false\" (selectionChange)= \"get_pincode_details()\">\r\n                                                    <mat-option *ngFor = \"let pinData of pincode_details index as i\" [value]=\"i+'~'+pinData.Name\">{{pinData.Name}} </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                    </div>\r\n                                    </span>\r\n                                    <span *ngIf=\"item=='kyc_reg_custom_element_area1'\"> \r\n                                            <div style=\"margin-top: 10px\">  \r\n                                            <mat-form-field class=\"margin\">\r\n                                                    <mat-select formControlName=\"kyc_reg_area_present\" placeholder=\"Select Area\"  matInput required=\"false\" (selectionChange)= \"get_pincode_details_present()\">\r\n                                                        <mat-option *ngFor = \"let pinData of pincode_details index as i\" [value]=\"i+'~'+pinData.Name\">{{pinData.Name}} </mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                        </div>\r\n                                        </span>\r\n                                      </div>\r\n                                      \r\n                                                      \r\n\r\n                    <!-- custom templates here     -->\r\n                    </ng-template>\r\n                </app-html-components>\r\n                <button style=\"float: right\" type=\"button\" (click)=\"find_invalid()\" class=\"btn\"><b>Validate Form</b></button>\r\n                <button style=\"width: 100%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-lg\" [disabled]=\"!registrationForm.valid\" mat-raised-button type=\"submit\" >Submit Information</button>   \r\n\r\n                <!-- This is just to prevent an angular warning bug. prevent_warning control should also be added in formbuilder class -->\r\n                <input [hidden]=\"true\" required=\"false\" formControlName=\"prevent_warning\">\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"tab-pane\" id=\"link2\">\r\n                <app-table [table_data] = \"table_data_to_send\">\r\n                     \r\n                        <ng-template>\r\n             \r\n              <tr *ngFor = \"let d of customerName index as i\"><td>{{i+1}}</td>\r\n                                    <td><button type=\"button\" (click)=\"send_tab(1,d.id)\" class=\"btn btn-sm\">View</button> <br>\r\n                                    <button type=\"button\" (click)=\"send_tab(2,d.id)\" class=\"btn btn-sm\">Send SMS</button><br>\r\n\r\n                                    <button type=\"button\" (click)=\"send_tab(3,d.id)\" class=\"btn btn-sm\">Send Email</button>\r\n\r\n                                    <button type=\"button\" (click)=\"print_share_certificate(d.shares,d.cu_name,d.id)\" class=\"btn btn-sm\">Share Certificate</button></td>\r\n                                            \r\n                                    <td>{{d.date}}</td> <td>{{d.branch_name}}</td> <td>{{d.id}}</td> <td>{{d.cus_first_name+' '}}{{d.cus_middle_name+' '}}{{ d.cus_last_name}}</td> \r\n                                    <td>{{d.address_2}}</td> <td>{{d.address_1}}</td> <td>{{d.email}}</td> <td>{{d.contact1_value}}</td> <td>{{d.contact2_value}}</td> \r\n                                    <td>{{d.dob}}</td> <td>{{d.nominee_name}}</td> <td>{{d.pan_card}}</td> <td>{{d.bank_name}}{{d.bank_ifsc}}{{d.bank_branch}}</td> <td>aadhar: {{d.aadhar}}</td>\r\n                                </tr>\r\n                                \r\n                                  \r\n                            </ng-template> \r\n                        </app-table>   \r\n        </div>\r\n        <div class=\"tab-pane\" id=\"link3\">\r\n                <div class=\"row\">\r\n                        <div class=\"form-group col-md-5\" >\r\n                       <mat-card> <form>        \r\n                             <app-html-components [html_data_to_pass] = \"send_sms_html_elements\" [form_data]=\"this.send_sms\"  (html_events)= \"get_html_events($event)\" >\r\n                    </app-html-components>\r\n                    <button class=\"btn btn-primary\">SEND SMS</button>\r\n                    </form>\r\n                 </mat-card> \r\n                        </div>\r\n                        <div class=\"form-group col-md-7\" >\r\n                         <mat-card><form >        \r\n                             <app-html-components [html_data_to_pass] = \"send_email_html_elements\" [form_data]=\"this.send_email\"  (html_events)= \"get_html_events($event)\" >\r\n                    </app-html-components>\r\n                    <button class=\"btn btn-primary\">SEND Email</button>\r\n                    </form>\r\n                 </mat-card> \r\n                        </div>\r\n                     </div>\r\n        </div>\r\n        \r\n    </ng-template>\r\n</app-tab-layout>\r\n\r\n              \r\n"

/***/ }),

/***/ "./src/app/menu_components/user/kyc/kyc.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/menu_components/user/kyc/kyc.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kyc_reg_date_group {\n  margin-top: 14.5px; }\n\n.kyc_reg_id_select {\n  margin-top: -24px;\n  width: 125px; }\n\n.kyc_reg_tel_type_select {\n  margin-top: -24px;\n  width: 125px; }\n\n.kyc_image {\n  width: 20px; }\n"

/***/ }),

/***/ "./src/app/menu_components/user/kyc/kyc.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/menu_components/user/kyc/kyc.component.ts ***!
  \***********************************************************/
/*! exports provided: KycComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycComponent", function() { return KycComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/basic-functions.service */ "./src/app/services/basic-functions.service.ts");
/* harmony import */ var _services_third_party_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/third-party-api.service */ "./src/app/services/third-party-api.service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _services_posting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var _services_getting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/getting.service */ "./src/app/services/getting.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/datatable-trigger.service */ "./src/app/services/datatable-trigger.service.ts");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var KycComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function KycComponent(validation_obj, notify, basic_function_obj, third_party_api_obj, spin, p, fb, g, dt_trig, chRef, authservice) {
        this.validation_obj = validation_obj;
        this.notify = notify;
        this.basic_function_obj = basic_function_obj;
        this.third_party_api_obj = third_party_api_obj;
        this.spin = spin;
        this.p = p;
        this.fb = fb;
        this.g = g;
        this.dt_trig = dt_trig;
        this.chRef = chRef;
        this.authservice = authservice;
        /* public formGroup = this.fb.group({
           file: [null, Validators.required]
         });*/
        this.switch_tab = 1;
        this.color = '#EEEEEE';
        this.pincode_details = [];
        this.fileToUpload = null;
        // ui data
        this.tab_layout_ui_data_to_send = {
            tab_heading: 'Register/Edit Customer-KYC',
            tab_subheading: '',
            tab_id: 'kyc_tab',
            need_card: true,
            tab_content_component_selector_data: [{
                    tab_name: 'Customer management',
                    is_active: true
                },
                {
                    tab_name: 'List Customers'
                },
                {
                    tab_name: 'Send Email/SMS'
                }
            ]
        };
        this.registrationForm = this.fb.group({
            kyc_reg_title: [''],
            kyc_reg_first_name: [''],
            kyc_reg_middle_name: [''],
            kyc_reg_last_name: [''],
            kyc_reg_dob: [''],
            kyc_reg_age: [''],
            kyc_reg_gender: [''],
            kyc_reg_occupation: [''],
            kyc_reg_pan: [''],
            kyc_reg_email: [''],
            kyc_reg_adhar: [''],
            kyc_reg_status: [''],
            kyc_reg_vip_code: [''],
            kyc_reg_face_value: [''],
            kyc_reg_shares: [''],
            kyc_reg_share_amount: [''],
            kyc_reg_accounts: [''],
            kyc_reg_address: [''],
            kyc_reg_present_address: [''],
            kyc_reg_h_coordinate: [''],
            kyc_reg_v_coordinate: [''],
            kyc_reg_pincode: [''],
            kyc_reg_state: [''],
            kyc_reg_district: [''],
            kyc_reg_city: [''],
            kyc_reg_area: [''],
            kyc_reg_pincode_present: [''],
            kyc_reg_state_present: [''],
            kyc_reg_district_present: [''],
            kyc_reg_city_present: [''],
            kyc_reg_area_present: [''],
            kyc_reg_image: [''],
            kyc_reg_account_no: [''],
            kyc_reg_ifsc: [''],
            kyc_reg_bankers_name: [''],
            kyc_reg_branch: [''],
            kyc_reg_bank_contact: [''],
            kyc_reg_bank_address: [''],
            kyc_reg_nominee_name: [''],
            kyc_reg_nominee_relation_dropdown: [''],
            kyc_reg_nominee_age: [''],
            kyc_reg_nominee_gender: [''],
            kyc_reg_nominee_address: [''],
            kyc_reg_date: [this.basic_function_obj.get_datetime_to_display()],
            kyc_reg_id_1_select_dropdown: ['0'],
            kyc_reg_id_1_select_value: [''],
            kyc_reg_id_1_select_value_extra: [''],
            kyc_reg_id_2_select_dropdown: [''],
            kyc_reg_id_2_select_value_extra: [''],
            kyc_reg_id_2_select_value: [''],
            kyc_reg_tel_type1_select_dropdown: ['01'],
            kyc_reg_tel_type1_select_value: [''],
            kyc_reg_tel_type2_select_dropdown: [''],
            kyc_reg_tel_type2_select_value: [''],
            kyc_reg_tel_type3_select_dropdown: [''],
            kyc_reg_tel_type3_select_value: [''],
            //  kyc_reg_addr_cat_select_dropdown: ['01'],
            kyc_reg_res_code_select_dropdown: ['01'],
            prevent_warning: ['']
        });
        this.kyc_mem_reg_html_elements = [
            {
                no_of_elements_in_a_row: '3',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Personal information',
                elements: [
                    {
                        label: 'Date and Time',
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_1',
                        need_block: true,
                        line_break_value: '3',
                        is_element_required: true
                    },
                    {
                        select: true,
                        label: 'Title',
                        name: 'kyc_reg_title',
                        classes: ['kyc_reg_title'],
                        multiple: false,
                        placeholder: 'Select Title',
                        line_break_value: '3',
                        required: true,
                        options: [
                            {
                                viewValue: 'Mr',
                                value: '01'
                            },
                            {
                                viewValue: 'Ms',
                                value: '02'
                            },
                            {
                                viewValue: 'Mrs',
                                value: '03'
                            },
                            {
                                viewValue: 'Dr',
                                value: '04'
                            }
                        ],
                    },
                    {
                        textbox: true,
                        label: 'First Name',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_first_name'],
                        readonly: false,
                        simplemask: 'S{26}',
                        float_placeholder: 'auto',
                        line_break_value: '3',
                        name: 'kyc_reg_first_name',
                    },
                    {
                        textbox: true,
                        label: 'Middle Name',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_middle_name'],
                        readonly: false,
                        simplemask: 'S{26}',
                        line_break_value: '3',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_middle_name'
                    },
                    {
                        textbox: true,
                        label: 'Last Name',
                        placeholder: 'Please Enter Details',
                        required: true,
                        simplemask: 'S{26}',
                        line_break_value: '3',
                        classes: ['kyc_reg_last_name'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_last_name'
                    },
                    {
                        label: 'Date of birth',
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_dob',
                        need_block: false,
                        line_break_value: '3',
                        is_element_required: true
                    },
                    {
                        numberbox: true,
                        label: 'Age',
                        placeholder: 'Please Enter Details',
                        required: true,
                        simplemask: '0{3}',
                        classes: ['kyc_reg_age'],
                        readonly: true,
                        line_break_value: '3',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_age'
                    },
                    {
                        radio: true,
                        label: 'Gender',
                        line_break_value: '3',
                        radio_details: [
                            {
                                required: true,
                                name: 'kyc_reg_gender',
                                value: '0',
                                text: 'Male',
                                readonly: false
                            },
                            {
                                required: false,
                                name: 'kyc_reg_gender',
                                value: '1',
                                text: 'Female',
                                readonly: false
                            },
                            {
                                required: false,
                                name: 'kyc_reg_gender',
                                value: '2',
                                text: 'Other',
                                readonly: false
                            }
                        ]
                    },
                    {
                        textbox: true,
                        label: 'Occupation',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_occupation'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_occupation',
                        line_break_value: '3'
                    },
                    {
                        textbox: true,
                        label: 'PAN No',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_pan'],
                        simplemask: 'AAAAAAAAAA',
                        line_break_value: '3',
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_pan'
                    }, {
                        email: true,
                        label: 'Email',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_email'],
                        line_break_value: '3',
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_email'
                    },
                    {
                        textbox: true,
                        label: 'Aadhaar No',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_adhar'],
                        simplemask: '000000000000',
                        readonly: false,
                        line_break_value: '3',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_adhar'
                    },
                    {
                        select: true,
                        label: 'Status',
                        name: 'kyc_reg_status',
                        classes: ['kyc_reg_status'],
                        multiple: false,
                        line_break_value: '3',
                        placeholder: 'Select status',
                        required: true,
                        options: [
                            {
                                viewValue: 'Active',
                                value: '01'
                            },
                            {
                                viewValue: 'Deceased',
                                value: '02'
                            },
                            {
                                viewValue: 'Inactive',
                                value: '03'
                            },
                            {
                                viewValue: 'Non Customer',
                                value: '04'
                            }
                        ],
                    },
                    {
                        select: true,
                        label: 'VIP Code',
                        name: 'kyc_reg_vip_code',
                        classes: ['kyc_reg_vip_code'],
                        multiple: false,
                        line_break_value: '3',
                        placeholder: 'Select VIP Code',
                        required: true,
                        options: [
                            {
                                viewValue: 'Yes',
                                value: '01'
                            },
                            {
                                viewValue: 'No',
                                value: '02'
                            },
                        ],
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_id_1',
                        label: 'ID Proof',
                        need_block: true,
                        line_break_value: '3',
                        is_element_required: false
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_id_2',
                        label: 'Address Proof',
                        need_block: true,
                        line_break_value: '3',
                        is_element_required: false
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_4',
                        label: 'Contact No 1',
                        need_block: true,
                        is_element_required: true
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_5',
                        label: 'Contact No 2',
                        need_block: true,
                        is_element_required: false
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_6',
                        label: 'Contact No 3',
                        need_block: true,
                        is_element_required: false
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'share_details',
                        label: '',
                        need_block: false,
                        line_break_value: '12',
                        is_element_required: true
                    },
                    {
                        textarea: true,
                        label: 'Permanent Address',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_address'],
                        readonly: false,
                        name: 'kyc_reg_address',
                        highlight_row: true
                    },
                    {
                        select: true,
                        label: 'Residence Code',
                        name: 'kyc_reg_res_code_select_dropdown',
                        classes: ['kyc_reg_res_code_select_dropdown'],
                        multiple: false,
                        line_break_value: '4',
                        placeholder: 'Select Residence Code',
                        required: true,
                        options: [
                            {
                                viewValue: 'Owned',
                                value: '01'
                            },
                            {
                                viewValue: 'Rented',
                                value: '02'
                            }
                        ],
                        highlight_row: true
                    },
                    {
                        textbox: true,
                        label: 'Pincode',
                        placeholder: 'Please Enter Pincode',
                        required: false,
                        clear: true,
                        classes: ['kyc_reg_pincode'],
                        simplemask: '000000',
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_pincode'
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_area',
                        label: 'Select Area',
                        is_element_required: false
                    },
                    {
                        textbox: true,
                        label: 'City/Town',
                        placeholder: 'Please Enter City/Town',
                        required: false,
                        simplemask: 'S{26}',
                        classes: ['kyc_reg_city'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_city'
                    },
                    {
                        textbox: true,
                        label: 'District',
                        placeholder: 'Please Enter District',
                        required: false,
                        simplemask: 'S{26}',
                        classes: ['kyc_reg_district'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_district'
                    },
                    {
                        textbox: true,
                        label: 'State',
                        placeholder: 'Please Enter State',
                        required: false,
                        classes: ['kyc_reg_state'],
                        readonly: false,
                        simplemask: 'S{26}',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_state'
                    },
                    {
                        textbox: true,
                        label: 'H-coordinate',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_h_coordinate'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_h_coordinate',
                        line_break_value: '4'
                    },
                    {
                        textbox: true,
                        label: 'V-coordinate',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_v_coordinate'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_v_coordinate',
                        line_break_value: '4'
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_7',
                        label: 'Present Address',
                        highlight_row: true,
                        is_element_required: false
                    }, {
                        textbox: true,
                        label: 'Pincode',
                        placeholder: 'Please Enter Pincode',
                        required: false,
                        clear: true,
                        classes: ['kyc_reg_pincode_present'],
                        simplemask: '000000',
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_pincode_present'
                    },
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_custom_element_area1',
                        label: 'Select Area',
                        is_element_required: false
                    },
                    {
                        textbox: true,
                        label: 'City/Town',
                        placeholder: 'Please Enter City/Town',
                        required: false,
                        simplemask: 'S{26}',
                        classes: ['kyc_reg_city_present'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_city_present'
                    },
                    {
                        textbox: true,
                        label: 'District',
                        placeholder: 'Please Enter District',
                        required: false,
                        simplemask: 'S{26}',
                        classes: ['kyc_reg_district_present'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_district_present'
                    },
                    {
                        textbox: true,
                        label: 'State',
                        placeholder: 'Please Enter State',
                        required: false,
                        classes: ['kyc_reg_state_present'],
                        readonly: false,
                        simplemask: 'S{26}',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_state_present'
                    },
                    {
                        filechooser: true,
                        required: false,
                        classes: ['kyc_reg_image'],
                        label: 'Choose image',
                        name: 'kyc_reg_image'
                    }
                ]
            },
            {
                no_of_elements_in_a_row: '4',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Bank information',
                elements: [
                    {
                        textbox: true,
                        label: 'Account No',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_account_no'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_account_no'
                    },
                    {
                        textbox: true,
                        label: 'IFSC Code',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_ifsc'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_ifsc'
                    },
                    {
                        textbox: true,
                        label: 'Banker Name',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_bankers_name'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_bankers_name'
                    },
                    {
                        textbox: true,
                        label: 'Branch',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_branch'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_branch'
                    }, {
                        textarea: true,
                        label: 'Bank Contact (Auto filled)',
                        required: false,
                        classes: ['kyc_reg_bank_contact'],
                        readonly: true,
                        name: 'kyc_reg_bank_contact'
                    }, {
                        textarea: true,
                        label: 'Bank address (Auto filled)',
                        required: false,
                        classes: ['kyc_reg_bank_address'],
                        readonly: true,
                        name: 'kyc_reg_bank_address'
                    }
                ]
            },
            {
                no_of_elements_in_a_row: '4',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Nominee information',
                elements: [
                    {
                        textbox: true,
                        label: 'Nominee Name',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_nominee_name'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_nominee_name'
                    },
                    {
                        select: true,
                        label: 'Nominee Relation',
                        name: 'kyc_reg_nominee_relation_dropdown',
                        classes: ['kyc_reg_nominee_relation_dropdown'],
                        multiple: false,
                        placeholder: 'Select Relation',
                        required: true,
                        options: [
                            {
                                viewValue: 'Son',
                                value: '01'
                            },
                            {
                                viewValue: 'Daughter',
                                value: '02'
                            },
                            {
                                viewValue: 'Spouse',
                                value: '03'
                            },
                            {
                                viewValue: 'Father',
                                value: '04'
                            },
                            {
                                viewValue: 'Mother',
                                value: '05'
                            },
                            {
                                viewValue: 'Husband',
                                value: '07'
                            },
                            {
                                viewValue: 'Wife',
                                value: '08'
                            },
                            {
                                viewValue: 'Other',
                                value: '06'
                            }
                        ],
                        highlight_row: false
                    },
                    {
                        textbox: true,
                        label: 'Nominee Age',
                        placeholder: 'Please Enter Details',
                        required: true,
                        simplemask: '0{3}',
                        classes: ['kyc_reg_nominee_age'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_nominee_age'
                    },
                    {
                        radio: true,
                        label: 'Nominee Gender',
                        radio_details: [
                            {
                                required: true,
                                name: 'kyc_reg_nominee_gender',
                                value: '0',
                                classes: ['kyc_reg_nominee_gender'],
                                text: 'Male',
                                readonly: false
                            },
                            {
                                required: false,
                                name: 'kyc_reg_nominee_gender',
                                value: '1',
                                classes: ['kyc_reg_nominee_gender'],
                                text: 'Female',
                                readonly: false
                            },
                            {
                                required: false,
                                name: 'kyc_reg_nominee_gender',
                                value: '2',
                                text: 'Other',
                                classes: ['kyc_reg_nominee_gender'],
                                readonly: false
                            }
                        ]
                    },
                    {
                        textarea: true,
                        label: 'Nominee Address',
                        placeholder: 'Please Enter Details',
                        required: true,
                        classes: ['kyc_reg_nominee_address'],
                        readonly: false,
                        name: 'kyc_reg_nominee_address'
                    }
                ]
            }
        ];
        // allignment data
        this.kyc_reg_custom_element_id_1_select_dropdown_data = {
            single_element: true,
            select: true,
            name: 'kyc_reg_id_1_select_dropdown',
            multiple: false,
            classes: ['kyc_reg_id_1_select_dropdown'],
            placeholder: 'Select Id',
            required: true,
            options: [
                {
                    viewValue: 'Voter ID',
                    value: '0'
                },
                {
                    viewValue: 'Passport',
                    value: '1'
                },
                {
                    viewValue: 'Driving license',
                    value: '2'
                },
                {
                    viewValue: 'Aadhaar',
                    value: '4'
                },
                {
                    viewValue: 'Others',
                    value: '3'
                }
            ]
        };
        this.kyc_reg_custom_element_id_1_select_value_data = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_id_1_select_value',
            required: true,
            readonly: false,
            placeholder: 'Enter ID number',
            classes: ['kyc_reg_id_1_select_value'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_id_1_select_value_data_extra = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_id_1_select_value_extra',
            required: false,
            readonly: false,
            placeholder: 'Enter ID type',
            classes: ['kyc_reg_id_1_select_value_extra'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_id_2_select_dropdown_data = {
            single_element: true,
            select: true,
            name: 'kyc_reg_id_2_select_dropdown',
            multiple: false,
            classes: ['kyc_reg_id_2_select_dropdown'],
            placeholder: 'Select Id',
            required: false,
            options: [
                {
                    viewValue: 'Voter ID',
                    value: '0'
                },
                {
                    viewValue: 'Passport',
                    value: '1'
                },
                {
                    viewValue: 'Driving license',
                    value: '2'
                },
                {
                    viewValue: 'Ration Card',
                    value: '4'
                },
                {
                    viewValue: 'Others',
                    value: '3'
                }
            ]
        };
        this.kyc_reg_custom_element_id_2_select_value_data_extra = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_id_2_select_value_extra',
            required: false,
            readonly: false,
            placeholder: 'Enter ID type',
            classes: ['kyc_reg_id_2_select_value_extra'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_id_2_select_value_data = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_id_2_select_value',
            required: false,
            readonly: false,
            placeholder: 'Enter ID number',
            classes: ['kyc_reg_id_2_select_value'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_4_select_dropdown_data = {
            single_element: true,
            select: true,
            name: 'kyc_reg_tel_type1_select_dropdown',
            multiple: false,
            classes: ['kyc_reg_tel_type1_select_dropdown'],
            placeholder: 'Select Type',
            required: true,
            options: [
                {
                    viewValue: 'Mobile',
                    value: '01'
                }
            ]
        };
        this.kyc_reg_custom_element_4_select_value_data = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_tel_type1_select_value',
            required: true,
            readonly: false,
            simplemask: '0{11}',
            placeholder: 'Enter Number',
            classes: ['kyc_reg_tel_type1_select_value'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_5_select_dropdown_data = {
            single_element: true,
            select: true,
            name: 'kyc_reg_tel_type2_select_dropdown',
            multiple: false,
            placeholder: 'Select Type',
            classes: ['kyc_reg_tel_type2_select_dropdown'],
            required: false,
            options: [
                {
                    viewValue: 'Not Classified',
                    value: '00'
                },
                {
                    viewValue: 'Mobile',
                    value: '01'
                },
                {
                    viewValue: 'Home Phone',
                    value: '02'
                },
                {
                    viewValue: 'Office Phone',
                    value: '03'
                },
            ]
        };
        this.kyc_reg_custom_element_5_select_value_data = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_tel_type2_select_value',
            required: false,
            readonly: false,
            simplemask: '0{11}',
            placeholder: 'Enter Number',
            classes: ['kyc_reg_tel_type2_select_value'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.share_details_html_elements = [
            {
                no_of_elements_in_a_row: '3',
                color: '',
                need_card: false,
                table_view: false,
                card_label: 'Share Details',
                elements: [
                    {
                        textbox: true,
                        label: 'Face Value',
                        placeholder: 'Please Enter Details',
                        required: false,
                        classes: ['kyc_reg_face_value'],
                        readonly: true,
                        line_break_value: '4',
                        float_placeholder: 'auto',
                        name: 'kyc_reg_face_value'
                    },
                    {
                        textbox: true,
                        label: 'No of Shares',
                        placeholder: 'Please Enter Details',
                        required: true,
                        line_break_value: '4',
                        classes: ['kyc_reg_shares'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_shares'
                    },
                    {
                        textbox: true,
                        label: 'Amount',
                        placeholder: 'Please Enter Details',
                        required: false,
                        line_break_value: '4',
                        classes: ['kyc_reg_share_amount'],
                        readonly: false,
                        float_placeholder: 'auto',
                        name: 'kyc_reg_share_amount'
                    },
                ]
            }
        ];
        this.kyc_reg_custom_element_6_select_dropdown_data = {
            single_element: true,
            select: true,
            name: 'kyc_reg_tel_type3_select_dropdown',
            multiple: false,
            placeholder: 'Select Type',
            classes: ['kyc_reg_tel_type3_select_dropdown'],
            required: false,
            options: [
                {
                    viewValue: 'Not Classified',
                    value: '00'
                },
                {
                    viewValue: 'Mobile',
                    value: '01'
                },
                {
                    viewValue: 'Home Phone',
                    value: '02'
                },
                {
                    viewValue: 'Office Phone',
                    value: '03'
                },
            ]
        };
        this.kyc_reg_custom_element_6_select_value_data = {
            single_element: true,
            textbox: true,
            name: 'kyc_reg_tel_type3_select_value',
            required: false,
            readonly: false,
            simplemask: '0{11}',
            placeholder: 'Enter Number',
            classes: ['kyc_reg_tel_type3_select_value'],
            float_placeholder: 'never',
            custom_styles: [
                {
                    property: 'width',
                    value: '205px'
                }
            ]
        };
        this.kyc_reg_custom_element_7_present_address = {
            single_element: true,
            textarea: true,
            placeholder: 'Please Enter Details',
            required: false,
            classes: ['kyc_reg_present_address'],
            readonly: false,
            name: 'kyc_reg_present_address'
        };
        // allignment data
        this.search_box = {
            placeholder: 'Search id, first, middle or last names',
            searchbox_id: 'kyc_search',
            search_tablename: 'customer_info',
            search_db: this.authservice.getHeadDatabaseSession(),
            search_columnname: 'id~cus_first_name~cus_last_name~aadhar~id1_value~email~contact1_value',
            view_columnname: 'id~cus_first_name~cus_middle_name~cus_last_name',
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
                // tslint:disable-next-line: max-line-length
                header: 'sl_no.~action~date_of_joining~Branch_name~customer_ID~customer_name~present_address~permanent_address~email~mobile_no~contact_no~DOB~nominee_name~PAN_card_ID~bank_details~ID_details'
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
        //  this is for setting default  validation at first load
        this.kyc_reg_id_1_select_dropdown_val = '0';
        this.kyc_reg_id_2_select_dropdown_val = '-1';
        this.kyc_reg_tel_type1_select_dropdown_val = '01';
        this.kyc_reg_tel_type2_select_dropdown_val = '-1';
        this.kyc_reg_tel_type3_select_dropdown_val = '-1';
    }
    KycComponent.prototype.get_accounts = function () {
        var _this = this;
        var get_account_data = {
            table_name: 'accounts',
            data: ['4~645~'],
            db: this.authservice.getDatabaseSession()
        };
        this.p.do_get_all_banks_by_link(get_account_data)
            .subscribe(function (response_bank) {
            _this.bank_data = response_bank.rows;
        });
        var resolver = '4~107';
        var insert_data_binder = {
            table_name: 'key_map',
            link: resolver
        };
        this.p.do_get_binder_session(insert_data_binder)
            .subscribe(function (response) {
            var data = response.rows[0];
            // const account_name = data['account_name'];
            // const ac_id = data['ac_id'];
            var binder = data['binder'];
            var target_link = '4~107~';
            var insert_data = {
                table_name: 'accounts',
                data: binder,
                link: target_link
            };
            _this.p.do_get_target_link_session(insert_data)
                .subscribe(function (response_target_link) {
                var data_target_link = response_target_link.rows[0];
                _this.account_name = data_target_link['account_name'];
                _this.ac_id = data_target_link['id'];
            });
        });
    };
    KycComponent.prototype.get_html_events = function (event_obj) {
        var _this = this;
        if (event_obj.uniq_identity === 'kyc_reg_image') {
            if (event_obj.e_type === 'change') {
                this.fileToUpload = event_obj.value.item(0);
                this.filename = Date.now() + '_' + this.fileToUpload.name;
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_email') {
            var feed = this.validation_obj.check_email(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.kyc_reg_email').val()) {
                        this.notify.openSnackBar('Check the Email format', 'Close', 'red-snackbar');
                    }
                    this.registrationForm.patchValue({
                        kyc_reg_email: ''
                    });
                }
            }
        }
        /* if (event_obj.uniq_identity === 'kyc_reg_first_name') {
           if (event_obj.e_type === 'keyup') {
             $('.kyc_reg_first_name').val( $('.kyc_reg_first_name').val().toUpperCase());
           }
         }
         if (event_obj.uniq_identity === 'kyc_reg_middle_name') {
           if (event_obj.e_type === 'keyup') {
             $('.kyc_reg_middle_name').val( $('.kyc_reg_middle_name').val().toUpperCase());
           }
         }
         if (event_obj.uniq_identity === 'kyc_reg_last_name') {
           if (event_obj.e_type === 'keyup') {
             $('.kyc_reg_last_name').val( $('.kyc_reg_last_name').val().toUpperCase());
           }
         }*/
        if (event_obj.uniq_identity === 'kyc_reg_vip_code') {
            if (event_obj.value === '02') {
                this.kyc_reg_vip_code_val = '02';
                this.color = '#EEEEEE';
            }
            else if (event_obj.value === '01') {
                this.kyc_reg_vip_code_val = '01';
                this.color = '#B4D8ED';
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_pan') {
            if (event_obj.e_type === 'keyup') {
                $('.kyc_reg_pan').val($('.kyc_reg_pan').val().toUpperCase());
            }
            var feed = this.validation_obj.check_pan_number(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.kyc_reg_pan').val()) {
                        this.notify.openSnackBar('Check the PAN format', 'Close', 'red-snackbar');
                    }
                    this.registrationForm.patchValue({
                        kyc_reg_pan: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_adhar') {
            var feed = this.validation_obj.check_aadhar(event_obj.value);
            if (feed === false) {
                if (event_obj.e_type === 'blur') {
                    if ($('.kyc_reg_adhar').val()) {
                        this.notify.openSnackBar('Check the AADHAR format', 'Close', 'red-snackbar');
                    }
                    this.registrationForm.patchValue({
                        kyc_reg_adhar: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_dob') {
            if (event_obj.e_type === 'datechange') {
                var feed1 = this.validation_obj.check_dob(event_obj.value);
                if (feed1 === true) {
                    var feed = this.basic_function_obj.get_age(event_obj.value);
                    if (typeof feed === 'number') {
                        this.registrationForm.patchValue({
                            kyc_reg_age: feed
                        });
                    }
                    else {
                        this.registrationForm.patchValue({
                            kyc_reg_age: ''
                        });
                    }
                }
                else {
                    this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
                    this.registrationForm.patchValue({
                        kyc_reg_dob: ''
                    });
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_ifsc') {
            if (event_obj.e_type === 'blur') {
                var feed = this.validation_obj.check_ifsc(event_obj.value);
                if (feed === false) {
                    if ($('.kyc_reg_ifsc').val()) {
                        this.notify.openSnackBar('Check the IFSC format', 'Close', 'red-snackbar');
                    }
                    $('.kyc_reg_ifsc').val('');
                    $('.kyc_reg_bankers_name').val('');
                    $('.kyc_reg_branch').val('');
                    $('.kyc_reg_bank_contact').val('');
                    $('.kyc_reg_bank_address').val('');
                }
                else {
                    this.spin.trig_spin(true);
                    this.third_party_api_obj.get_bank_details(event_obj.value)
                        .subscribe(function (response) {
                        _this.registrationForm.patchValue({
                            kyc_reg_bankers_name: response.BANK,
                            kyc_reg_branch: response.BRANCH,
                            kyc_reg_bank_contact: response.CONTACT,
                            kyc_reg_bank_address: response.ADDRESS
                        });
                        _this.spin.trig_spin(false);
                    }, function (error) {
                        _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                        _this.spin.trig_spin(false);
                    });
                }
            }
            else if (event_obj.e_type === 'keyup') {
                $('.kyc_reg_ifsc').val($('.kyc_reg_ifsc').val().toUpperCase());
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_pincode') {
            if (event_obj.e_type === 'blur') {
                this.spin.trig_spin(true);
                this.third_party_api_obj.get_pincode_details(event_obj.value)
                    .subscribe(function (response) {
                    _this.pincode_details = response[0]['PostOffice'];
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
                            _this.registrationForm.patchValue({
                                kyc_reg_area: _this.pincode_details[0]['Name'],
                                kyc_reg_district: _this.pincode_details[0]['District'],
                                kyc_reg_city: _this.pincode_details[0]['Block'],
                                kyc_reg_state: _this.pincode_details[0]['State']
                            });
                        }
                    }
                    else {
                        _this.registrationForm.patchValue({
                            kyc_reg_district: '',
                            kyc_reg_city: '',
                            kyc_reg_state: ''
                        });
                    }
                    _this.spin.trig_spin(false);
                }, function (error) {
                    _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                });
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_pincode_present') {
            if (event_obj.e_type === 'blur') {
                this.spin.trig_spin(true);
                this.third_party_api_obj.get_pincode_details(event_obj.value)
                    .subscribe(function (response) {
                    _this.pincode_details = response[0]['PostOffice'];
                    if (_this.pincode_details) {
                        _this.pincode_det_length = _this.pincode_details.length;
                    }
                    else if (response[0]['Status'] !== 200) {
                        _this.notify.openSnackBar('The requested resource is not found', 'Close', 'red-snackbar');
                        _this.spin.trig_spin(false);
                    }
                    else if (_this.pincode_det_length === 1) {
                        console.log("botom if");
                        if (_this.pincode_details === null) {
                            _this.notify.openSnackBar('Pincode Not found', 'Close', 'red-snackbar');
                            _this.spin.trig_spin(false);
                        }
                        else {
                            _this.registrationForm.patchValue({
                                kyc_reg_area_present: _this.pincode_details[0]['Name'],
                                kyc_reg_district_present: _this.pincode_details[0]['District'],
                                kyc_reg_city_present: _this.pincode_details[0]['Block'],
                                kyc_reg_state_present: _this.pincode_details[0]['State']
                            });
                        }
                    }
                    else {
                        _this.registrationForm.patchValue({
                            kyc_reg_district_present: '',
                            kyc_reg_city_present: '',
                            kyc_reg_state_present: ''
                        });
                    }
                    _this.spin.trig_spin(false);
                }, function (error) {
                    _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                });
            }
        }
    };
    KycComponent.prototype.get_pincode_details = function () {
        var kyc_reg_area_value = this.registrationForm.get('kyc_reg_area').value;
        var kyc_reg_area_value_Arr = kyc_reg_area_value.split('~');
        this.registrationForm.patchValue({
            kyc_reg_district: this.pincode_details[kyc_reg_area_value_Arr[0]]['District'],
            kyc_reg_city: this.pincode_details[kyc_reg_area_value_Arr[0]]['Block'],
            kyc_reg_state: this.pincode_details[kyc_reg_area_value_Arr[0]]['State']
        });
    };
    KycComponent.prototype.get_pincode_details_present = function () {
        var kyc_reg_area_present_value = this.registrationForm.get('kyc_reg_area_present').value;
        var kyc_reg_area_present_value_Arr = kyc_reg_area_present_value.split('~');
        this.registrationForm.patchValue({
            kyc_reg_district_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['District'],
            kyc_reg_city_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['Block'],
            kyc_reg_state_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['State']
        });
    };
    KycComponent.prototype.dobcheck = function () {
        var kyc_dob = this.registrationForm.get('kyc_reg_dob').value;
        var feed1 = this.validation_obj.check_dob(kyc_dob);
        if (feed1 === true) {
            var feed = this.basic_function_obj.get_age(kyc_dob);
            if (typeof feed === 'number') {
                this.registrationForm.patchValue({
                    kyc_reg_age: feed
                });
            }
            else {
                this.registrationForm.patchValue({
                    kyc_reg_age: ''
                });
            }
        }
        else {
            this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
            this.registrationForm.patchValue({
                kyc_reg_dob: ''
            });
        }
    };
    KycComponent.prototype.get_html_events_custom = function (event_obj) {
        if (event_obj.uniq_identity === 'kyc_reg_shares') {
            if (event_obj.e_type === 'blur') {
                var kyc_reg_share_amount_final = event_obj.value * $('.kyc_reg_face_value').val();
                this.registrationForm.patchValue({
                    kyc_reg_share_amount: kyc_reg_share_amount_final
                });
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_id_1_select_dropdown') {
            this.registrationForm.patchValue({
                kyc_reg_id_1_select_value: ''
            });
            if (event_obj.value === '0') {
                this.kyc_reg_id_1_select_dropdown_val = '0';
                $('.kyc_reg_id_1_select_value_extra').hide();
                this.registrationForm.patchValue({
                    kyc_reg_id_1_select_value_extra: ''
                });
            }
            else if (event_obj.value === '1') {
                this.kyc_reg_id_1_select_dropdown_val = '1';
                $('.kyc_reg_id_1_select_value_extra').hide();
                this.registrationForm.patchValue({
                    kyc_reg_id_1_select_value_extra: ''
                });
            }
            else if (event_obj.value === '2') {
                this.kyc_reg_id_1_select_dropdown_val = '2';
                $('.kyc_reg_id_1_select_value_extra').hide();
                this.registrationForm.patchValue({
                    kyc_reg_id_1_select_value_extra: ''
                });
            }
            else if (event_obj.value === '3') {
                this.kyc_reg_id_1_select_dropdown_val = '-1';
                $('.kyc_reg_id_1_select_value_extra').show();
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_id_1_select_value') {
            if (1) {
                if (this.kyc_reg_id_1_select_dropdown_val === '0') {
                    var feed = this.validation_obj.check_indian_voter(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.kyc_reg_id_1_select_value').val()) {
                                this.notify.openSnackBar('Check the voter ID format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_1_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_id_1_select_dropdown_val === '1') {
                    var feed = this.validation_obj.check_passport(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.kyc_reg_id_1_select_value').val()) {
                                this.notify.openSnackBar('Check the passport format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_1_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_id_1_select_dropdown_val === '2') {
                    var feed = this.validation_obj.check_indian_driving_license(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.kyc_reg_id_1_select_value').val()) {
                                this.notify.openSnackBar('Check the license format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_1_select_value: ''
                            });
                        }
                    }
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_id_2_select_dropdown') {
            $('.kyc_reg_id_2_select_value').val('');
            if (event_obj.value === '0') {
                this.kyc_reg_id_2_select_dropdown_val = '0';
                $('.kyc_reg_id_2_select_value_extra').hide();
                $('.kyc_reg_id_2_select_value').show();
            }
            else if (event_obj.value === '1') {
                this.kyc_reg_id_2_select_dropdown_val = '1';
                $('.kyc_reg_id_2_select_value_extra').hide();
                $('.kyc_reg_id_2_select_value').show();
            }
            else if (event_obj.value === '2') {
                this.kyc_reg_id_2_select_dropdown_val = '2';
                $('.kyc_reg_id_2_select_value_extra').hide();
                $('.kyc_reg_id_2_select_value').show();
            }
            else if (event_obj.value === '3') {
                this.kyc_reg_id_2_select_dropdown_val = '-1';
                $('.kyc_reg_id_2_select_value_extra').show();
                $('.kyc_reg_id_2_select_value').show();
            }
            else if (event_obj.value === '') {
                this.kyc_reg_id_2_select_dropdown_val = '-1';
                $('.kyc_reg_id_2_select_value').hide();
                $('.kyc_reg_id_2_select_value_extra').hide();
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_id_2_select_value') {
            if (1) {
                if (this.kyc_reg_id_2_select_dropdown_val === '0') {
                    var feed = this.validation_obj.check_indian_voter(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.kyc_reg_id_2_select_value').val()) {
                                this.notify.openSnackBar('Check the voter ID format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_2_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_id_2_select_dropdown_val === '1') {
                    var feed = this.validation_obj.check_passport(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            if ($('.kyc_reg_id_2_select_value').val()) {
                                this.notify.openSnackBar('Check the passport format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_2_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_id_2_select_dropdown_val === '2') {
                    var feed = this.validation_obj.check_indian_driving_license(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_id_2_select_value').val()) {
                                this.notify.openSnackBar('Check the license format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_id_2_select_value: ''
                            });
                        }
                    }
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type1_select_dropdown') {
            this.registrationForm.patchValue({
                kyc_reg_tel_type1_select_value: ''
            });
            if (event_obj.value === '00') {
                this.kyc_reg_tel_type1_select_dropdown_val = '00';
            }
            else if (event_obj.value === '01') {
                this.kyc_reg_tel_type1_select_dropdown_val = '01';
            }
            else if (event_obj.value === '02') {
                this.kyc_reg_tel_type1_select_dropdown_val = '02';
            }
            else if (event_obj.value === '03') {
                this.kyc_reg_tel_type1_select_dropdown_val = '03';
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type1_select_value') {
            if (event_obj.e_type === 'blur') {
                if (this.kyc_reg_tel_type1_select_dropdown_val === '01') {
                    var feed = this.validation_obj.check_mobile(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line:max-line-length
                            if ($('.kyc_reg_tel_type1_select_value').val()) {
                                this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type1_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type1_select_dropdown_val === '02') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type1_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type1_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type1_select_dropdown_val === '03') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type1_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type1_select_value: ''
                            });
                        }
                    }
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type2_select_dropdown') {
            this.registrationForm.patchValue({
                kyc_reg_tel_type2_select_value: ''
            });
            if (event_obj.value === '00') {
                this.kyc_reg_tel_type2_select_dropdown_val = '00';
                $('.kyc_reg_tel_type2_select_value').show();
            }
            else if (event_obj.value === '01') {
                this.kyc_reg_tel_type2_select_dropdown_val = '01';
                $('.kyc_reg_tel_type2_select_value').show();
            }
            else if (event_obj.value === '02') {
                this.kyc_reg_tel_type2_select_dropdown_val = '02';
                $('.kyc_reg_tel_type2_select_value').show();
            }
            else if (event_obj.value === '03') {
                this.kyc_reg_tel_type2_select_dropdown_val = '03';
                $('.kyc_reg_tel_type2_select_value').show();
            }
            else if (event_obj.value === '') {
                this.kyc_reg_tel_type2_select_dropdown_val = '-1';
                $('.kyc_reg_tel_type2_select_value').hide();
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type2_select_value') {
            if (1) {
                if (this.kyc_reg_tel_type2_select_dropdown_val === '01') {
                    var feed = this.validation_obj.check_mobile(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line:max-line-length
                            if ($('.kyc_reg_tel_type2_select_value').val()) {
                                this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type2_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type2_select_dropdown_val === '02') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type2_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type2_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type2_select_dropdown_val === '03') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type2_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type2_select_value: ''
                            });
                        }
                    }
                }
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type3_select_dropdown') {
            this.registrationForm.patchValue({
                kyc_reg_tel_type3_select_value: ''
            });
            if (event_obj.value === '00') {
                this.kyc_reg_tel_type3_select_dropdown_val = '00';
                $('.kyc_reg_tel_type3_select_value').show();
            }
            else if (event_obj.value === '01') {
                this.kyc_reg_tel_type3_select_dropdown_val = '01';
                $('.kyc_reg_tel_type3_select_value').show();
            }
            else if (event_obj.value === '02') {
                this.kyc_reg_tel_type3_select_dropdown_val = '02';
                $('.kyc_reg_tel_type3_select_value').show();
            }
            else if (event_obj.value === '03') {
                this.kyc_reg_tel_type3_select_dropdown_val = '03';
                $('.kyc_reg_tel_type3_select_value').show();
            }
            else if (event_obj.value === '') {
                this.kyc_reg_tel_type3_select_dropdown_val = '-1';
                $('.kyc_reg_tel_type3_select_value').hide();
            }
        }
        else if (event_obj.uniq_identity === 'kyc_reg_tel_type3_select_value') {
            if (1) {
                if (this.kyc_reg_tel_type3_select_dropdown_val === '01') {
                    var feed = this.validation_obj.check_mobile(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line:max-line-length
                            if ($('.kyc_reg_tel_type3_select_value').val()) {
                                this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type3_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type3_select_dropdown_val === '02') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type3_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type3_select_value: ''
                            });
                        }
                    }
                }
                else if (this.kyc_reg_tel_type3_select_dropdown_val === '03') {
                    var feed = this.validation_obj.check_telephone(event_obj.value);
                    if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type3_select_value').val()) {
                                this.notify.openSnackBar('Check the landline format', '', 'red-snackbar');
                            }
                            this.registrationForm.patchValue({
                                kyc_reg_tel_type3_select_value: ''
                            });
                        }
                    }
                }
            }
        }
    };
    KycComponent.prototype.form_submit = function (formDirective) {
        var _this = this;
        this.notify.askForConfirmation().then(function (trig) {
            if (trig === true) {
                _this.p.addfile(_this.fileToUpload, _this.filename)
                    .subscribe(function (response) {
                    // this.spin.trig_spin(false);
                }, function (error) {
                    _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                    _this.spin.trig_spin(false);
                });
                if (_this.registrationForm.valid) {
                    _this.spin.trig_spin(true);
                    var form_data_1 = _this.registrationForm.value;
                    var final_form_data = {
                        'date': _this.basic_function_obj.get_datetime(),
                        'accounts': form_data_1.kyc_reg_accounts,
                        'title': form_data_1.kyc_reg_title,
                        'cus_first_name': form_data_1.kyc_reg_first_name,
                        'cus_middle_name': form_data_1.kyc_reg_middle_name,
                        'cus_last_name': form_data_1.kyc_reg_last_name,
                        'gender': form_data_1.kyc_reg_gender,
                        'occupation': form_data_1.kyc_reg_occupation,
                        'id1': form_data_1.kyc_reg_id_1_select_dropdown,
                        'id1_type': form_data_1.kyc_reg_id_1_select_value_extra,
                        'id1_value': form_data_1.kyc_reg_id_1_select_value,
                        'id2': form_data_1.kyc_reg_id_2_select_dropdown,
                        'id2_type': form_data_1.kyc_reg_id_2_select_value_extra,
                        'id2_value': form_data_1.kyc_reg_id_2_select_value,
                        'address_1': form_data_1.kyc_reg_address,
                        // 'address_cat' : form_data.kyc_reg_addr_cat_select_dropdown,
                        'address_2': form_data_1.kyc_reg_present_address,
                        'res_code': form_data_1.kyc_reg_res_code_select_dropdown,
                        'h_coordinate': form_data_1.kyc_reg_h_coordinate,
                        'v_coordinate': form_data_1.kyc_reg_v_coordinate,
                        'pincode': form_data_1.kyc_reg_pincode,
                        'state': form_data_1.kyc_reg_state,
                        'district': form_data_1.kyc_reg_district,
                        'city_town': form_data_1.kyc_reg_city,
                        'area': form_data_1.kyc_reg_area,
                        'present_pincode': form_data_1.kyc_reg_pincode_present,
                        'present_state': form_data_1.kyc_reg_state_present,
                        'present_district': form_data_1.kyc_reg_district_present,
                        'present_city_town': form_data_1.kyc_reg_city_present,
                        'present_area': form_data_1.kyc_reg_area_present,
                        'email': form_data_1.kyc_reg_email,
                        'contact1': form_data_1.kyc_reg_tel_type1_select_dropdown,
                        'contact1_value': form_data_1.kyc_reg_tel_type1_select_value,
                        'contact2': form_data_1.kyc_reg_tel_type2_select_dropdown,
                        'contact2_value': form_data_1.kyc_reg_tel_type2_select_value,
                        'contact3': form_data_1.kyc_reg_tel_type3_select_dropdown,
                        'contact3_value': form_data_1.kyc_reg_tel_type3_select_value,
                        'no_of_shares': form_data_1.kyc_reg_share_amount,
                        // 'age': form_data.kyc_reg_age,
                        // tslint:disable-next-line:max-line-length
                        // 'dob' :  (new Date(form_data.kyc_reg_dob).getMonth() + 1) + '/' + new Date(form_data.kyc_reg_dob).getDate() +  '/' +  new Date(form_data.kyc_reg_dob).getFullYear() ,
                        'dob': form_data_1.kyc_reg_dob,
                        'pan_card': form_data_1.kyc_reg_pan,
                        'aadhar': form_data_1.kyc_reg_adhar,
                        'cus_status': form_data_1.kyc_reg_status,
                        'vip_code': form_data_1.kyc_reg_vip_code,
                        'account_no': form_data_1.kyc_reg_account_no,
                        'bank_ifsc': form_data_1.kyc_reg_ifsc,
                        'bank_name': form_data_1.kyc_reg_bankers_name,
                        'bank_branch': form_data_1.kyc_reg_branch,
                        'bank_contact': form_data_1.kyc_reg_bank_contact,
                        'bank_address': form_data_1.kyc_reg_bank_address,
                        'nominee_name': form_data_1.kyc_reg_nominee_name,
                        'nominee_relation': form_data_1.kyc_reg_nominee_relation_dropdown,
                        'nominee_age': form_data_1.kyc_reg_nominee_age,
                        'nominee_gender': form_data_1.kyc_reg_nominee_gender,
                        'nominee_address': form_data_1.kyc_reg_nominee_address,
                        'cus_image': _this.filename,
                        'branch_code': _this.authservice.getBranchCodeSession()
                    };
                    var final_form_data_edit = {
                        'accounts': form_data_1.kyc_reg_accounts,
                        'title': form_data_1.kyc_reg_title,
                        'cus_first_name': form_data_1.kyc_reg_first_name,
                        'cus_middle_name': form_data_1.kyc_reg_middle_name,
                        'cus_last_name': form_data_1.kyc_reg_last_name,
                        'gender': form_data_1.kyc_reg_gender,
                        'occupation': form_data_1.kyc_reg_occupation,
                        'id1': form_data_1.kyc_reg_id_1_select_dropdown,
                        'id1_type': form_data_1.kyc_reg_id_1_select_value_extra,
                        'id1_value': form_data_1.kyc_reg_id_1_select_value,
                        'id2': form_data_1.kyc_reg_id_2_select_dropdown,
                        'id2_type': form_data_1.kyc_reg_id_2_select_value_extra,
                        'id2_value': form_data_1.kyc_reg_id_2_select_value,
                        'address_1': form_data_1.kyc_reg_address,
                        // 'address_cat' : form_data.kyc_reg_addr_cat_select_dropdown,
                        'address_2': form_data_1.kyc_reg_present_address,
                        'res_code': form_data_1.kyc_reg_res_code_select_dropdown,
                        'h_coordinate': form_data_1.kyc_reg_h_coordinate,
                        'v_coordinate': form_data_1.kyc_reg_v_coordinate,
                        'pincode': form_data_1.kyc_reg_pincode,
                        'state': form_data_1.kyc_reg_state,
                        'district': form_data_1.kyc_reg_district,
                        'city_town': form_data_1.kyc_reg_city,
                        'area': form_data_1.kyc_reg_area,
                        'present_pincode': form_data_1.kyc_reg_pincode_present,
                        'present_state': form_data_1.kyc_reg_state_present,
                        'present_district': form_data_1.kyc_reg_district_present,
                        'present_city_town': form_data_1.kyc_reg_city_present,
                        'present_area': form_data_1.kyc_reg_area_present,
                        'email': form_data_1.kyc_reg_email,
                        'contact1': form_data_1.kyc_reg_tel_type1_select_dropdown,
                        'contact1_value': form_data_1.kyc_reg_tel_type1_select_value,
                        'contact2': form_data_1.kyc_reg_tel_type2_select_dropdown,
                        'contact2_value': form_data_1.kyc_reg_tel_type2_select_value,
                        'contact3': form_data_1.kyc_reg_tel_type3_select_dropdown,
                        'contact3_value': form_data_1.kyc_reg_tel_type3_select_value,
                        'no_of_shares': form_data_1.kyc_reg_share_amount,
                        // 'age': form_data.kyc_reg_age,
                        // tslint:disable-next-line:max-line-length
                        // 'dob' :  (new Date(form_data.kyc_reg_dob).getMonth() + 1) + '/' + new Date(form_data.kyc_reg_dob).getDate() +  '/' +  new Date(form_data.kyc_reg_dob).getFullYear() ,
                        'dob': form_data_1.kyc_reg_dob,
                        'pan_card': form_data_1.kyc_reg_pan,
                        'aadhar': form_data_1.kyc_reg_adhar,
                        'cus_status': form_data_1.kyc_reg_status,
                        'vip_code': form_data_1.kyc_reg_vip_code,
                        'account_no': form_data_1.kyc_reg_account_no,
                        'bank_ifsc': form_data_1.kyc_reg_ifsc,
                        'bank_name': form_data_1.kyc_reg_bankers_name,
                        'bank_branch': form_data_1.kyc_reg_branch,
                        'bank_contact': form_data_1.kyc_reg_bank_contact,
                        'bank_address': form_data_1.kyc_reg_bank_address,
                        'nominee_name': form_data_1.kyc_reg_nominee_name,
                        'nominee_relation': form_data_1.kyc_reg_nominee_relation_dropdown,
                        'nominee_age': form_data_1.kyc_reg_nominee_age,
                        'nominee_gender': form_data_1.kyc_reg_nominee_gender,
                        'nominee_address': form_data_1.kyc_reg_nominee_address,
                        'cus_image': _this.filename,
                        'branch_code': _this.authservice.getBranchCodeSession()
                    };
                    var insert_data = {
                        table_name: 'customer_info',
                        data: final_form_data,
                        db: _this.authservice.getHeadDatabaseSession()
                    };
                    // tslint:disable-next-line:triple-equals
                    if (_this.switch_tab == 0) {
                        _this.p.do_single_insertion_cus_info(insert_data)
                            .subscribe(function (response) {
                            if (response.flag === 1) {
                                _this.notify.openSnackBarSuccess();
                                $('#remove').click();
                            }
                            else if (response.flag === 0) {
                                _this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
                            }
                            _this.spin.trig_spin(false);
                            var final_form_data_accounts = {
                                // tslint:disable-next-line: max-line-length
                                'account_name': 'SD/' + form_data_1.kyc_reg_first_name + ' ' + form_data_1.kyc_reg_middle_name + ' ' + form_data_1.kyc_reg_last_name,
                                'type': '2',
                                'cus_id': response.inserted_id,
                                'link': '0'
                            };
                            var insert_data_accounts = {
                                table_name: 'accounts',
                                data: final_form_data_accounts,
                                db: _this.authservice.getDatabaseSession()
                            };
                            _this.p.do_single_insertion(insert_data_accounts)
                                .subscribe(function (response_accounts) {
                                _this.s_account_id = response_accounts.inserted_id;
                                var target_link = '3~5';
                                var insert_data_key_map = {
                                    table_name: 'key_map',
                                    link: target_link
                                };
                                _this.p.do_get_binder_session(insert_data_key_map)
                                    .subscribe(function (response_binder) {
                                    var data_binder = response_binder.rows[0];
                                    var key_id = data_binder['key_id'];
                                    var binder = data_binder['binder'];
                                    var link = '3~5~' + binder + '~' + _this.s_account_id;
                                    _this.g.do_get_max_sd_id()
                                        .subscribe(function (response_sd_id) {
                                        var data_sd_id = response_sd_id.rows[0];
                                        var seq = data_sd_id['seq'];
                                        var base = 100;
                                        var seq_new;
                                        if (seq === null) {
                                            seq_new = base;
                                        }
                                        else {
                                            seq_new = base + parseFloat(seq);
                                        }
                                        var branch_code = _this.authservice.getBranchCodeSession();
                                        var branch_code_sd;
                                        if ((_this.branch_code) / 10 === 0) {
                                            branch_code_sd = '0' + branch_code;
                                        }
                                        else {
                                            branch_code_sd = branch_code;
                                        }
                                        var final_form_data_sd_accounts = {
                                            'sd_account_no': 'SD' + branch_code_sd + _this.s_account_id + '000' + seq_new,
                                            'cus_id': response.inserted_id,
                                            'sd_avail_bal': '0'
                                        };
                                        var insert_data_sd_accounts = {
                                            table_name: 'sd_account',
                                            data: final_form_data_sd_accounts,
                                            db: _this.authservice.getDatabaseSession()
                                        };
                                        _this.p.do_single_insertion(insert_data_sd_accounts)
                                            .subscribe(function (response2) {
                                            /* const final_form_data_ac_folio = {
                                               // 'date': this.basic_function_obj.get_datetime(),
                                               transactions: [
                                                 {
                                               'account_id' : s_account_id,
                                               'by_account' : binder,
                                               'narration'  : 'Member Name.:' + form_data.kyc_reg_first_name + ' Membership ID.:'
                                                + response.inserted_id,
                                               'amount' : form_data.kyc_reg_share_amount ,
                                               'flag' : '1',
                                               'extra_prop' : {
                                              }
                                             }
                                           ]
                                         };
                                             this.p.bulk_transaction_entry(final_form_data_ac_folio)
                                             .subscribe(response_ac_folio => {
                                             },
                                             error => {
                                               console.log(error);
                                               this.spin.trig_spin(false);
                                             });*/
                                            var final_form_data_edit_accounts = {
                                                'link': link
                                            };
                                            var data_accounts = {
                                                data_to_update: final_form_data_edit_accounts,
                                                condition: {
                                                    id: [_this.s_account_id]
                                                }
                                            };
                                            var update_data_accounts = {
                                                table_name: 'accounts',
                                                data: data_accounts,
                                                db: _this.authservice.getDatabaseSession()
                                            };
                                            _this.p.do_simple_update(update_data_accounts)
                                                .subscribe(function (response_update_accounts) {
                                                // tslint:disable-next-line:triple-equals
                                            });
                                        }, function (error) {
                                            console.log(error);
                                            _this.spin.trig_spin(false);
                                        });
                                    }, function (error) {
                                        console.log(error);
                                        _this.spin.trig_spin(false);
                                    });
                                }, function (error) {
                                    console.log(error);
                                    _this.spin.trig_spin(false);
                                });
                            }, function (error) {
                                console.log(error);
                                _this.spin.trig_spin(false);
                            });
                            var final_form_data_accounts_SH = {
                                // tslint:disable-next-line: max-line-length
                                'account_name': 'SH/' + form_data_1.kyc_reg_first_name + ' ' + form_data_1.kyc_reg_middle_name + ' ' + form_data_1.kyc_reg_last_name,
                                'type': '2',
                                'cus_id': response.inserted_id,
                                'link': '0'
                            };
                            var insert_data_accounts_SH = {
                                table_name: 'accounts',
                                data: final_form_data_accounts_SH,
                                db: _this.authservice.getHeadDatabaseSession()
                            };
                            _this.p.do_single_insertion_cus_info(insert_data_accounts_SH)
                                .subscribe(function (response_data_SH) {
                                var s_account_id_SH = response_data_SH.inserted_id;
                                var target_link = '1~2';
                                var insert_data_key_map = {
                                    table_name: 'key_map',
                                    link: target_link,
                                };
                                _this.p.do_get_binder_session(insert_data_key_map)
                                    .subscribe(function (response_binder) {
                                    var data_binder = response_binder.rows[0];
                                    var key_id = data_binder['key_id'];
                                    var binder = data_binder['binder'];
                                    var link = '1~2~' + binder + '~' + s_account_id_SH;
                                    var final_form_data_SHaccounts = {
                                        'link': link
                                    };
                                    /*  const final_form_data_ac_folio = {
                                        // 'date': this.basic_function_obj.get_datetime(),
                                        transactions: [
                                          {
                                            'account_id': s_account_id_SH,
                                            'by_account': form_data.kyc_reg_accounts,
                                            // tslint:disable-next-line: max-line-length
                                            'narration': 'Customer Name.:' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_middle_name + ' Customer ID.:' + response.inserted_id,
                                            'amount': form_data.kyc_reg_share_amount,
                                            'flag': '1',
                                            'extra_prop': {
                                            }
                                          }
                                        ]
                                      };
                                      this.p.bulk_transaction_entry(final_form_data_ac_folio)
                                        .subscribe(response_ac_folio => {
                                        },
                                          error => {
                                            console.log(error);
                                            this.spin.trig_spin(false);
                                          });*/
                                    var data_SHaccounts = {
                                        data_to_update: final_form_data_SHaccounts,
                                        condition: {
                                            id: [s_account_id_SH]
                                        }
                                    };
                                    var update_data_SHaccounts = {
                                        table_name: 'accounts',
                                        data: data_SHaccounts,
                                        db: _this.authservice.getHeadDatabaseSession()
                                    };
                                    _this.p.do_simple_update_cus_info(update_data_SHaccounts)
                                        .subscribe(function (response_update_data_SHaccounts) {
                                        // tslint:disable-next-line:triple-equals
                                    });
                                }, function (error) {
                                    console.log(error);
                                    _this.spin.trig_spin(false);
                                });
                                var get_data1 = {
                                    table_name: 'users',
                                    data: [_this.authservice.getHeadDatabaseSession()],
                                    condition_column: 'db',
                                    db: 'nace_fin_users'
                                };
                                _this.p.do_single_fetch_with_where_condition(get_data1)
                                    .subscribe(function (branch_response) {
                                    var data1 = branch_response.rows;
                                    console.log(data1);
                                    var head_branch_code = data1[0].branch_code;
                                    var head_branch_session = _this.authservice.getBranchCodeSession();
                                    if (head_branch_code != head_branch_session) {
                                        var multibranch_details1 = {
                                            table_name: 'intra_branch_accounts',
                                            data: head_branch_code
                                        };
                                        console.log(multibranch_details1);
                                        _this.p.get_multi_branch_details1(multibranch_details1)
                                            .subscribe(function (response_multi_branch_details1) {
                                            var multi_branch_details_data1 = response_multi_branch_details1.rows;
                                            console.log(multi_branch_details_data1);
                                            var account_head1 = multi_branch_details_data1[0].account_id;
                                            var final_form_data1 = {
                                                // 'date': this.basic_function_obj.get_datetime(),
                                                transactions: [
                                                    {
                                                        'account_id': s_account_id_SH,
                                                        'by_account': account_head1,
                                                        // tslint:disable-next-line: max-line-length
                                                        'narration': 'Customer Name.:' + form_data_1.kyc_reg_first_name + ' ' + form_data_1.kyc_reg_middle_name + ' ' + form_data_1.kyc_reg_last_name + ' Customer ID.:' + response.inserted_id + '<br>'
                                                            + 'share account amount',
                                                        'amount': form_data_1.kyc_reg_share_amount,
                                                        'flag': '1',
                                                        'extra_prop': {}
                                                    }
                                                ]
                                            };
                                            _this.p.bulk_transaction_entry_head_branch(final_form_data1)
                                                .subscribe(function (response_acFolio_insert_withdraw) {
                                            });
                                        });
                                        _this.p.get_multi_branch_details(multibranch_details1)
                                            .subscribe(function (response_multi_branch_details) {
                                            var multi_branch_details_data = response_multi_branch_details.rows;
                                            console.log(multi_branch_details_data);
                                            var account_head = multi_branch_details_data[0].account_id;
                                            var final_form_data2 = {
                                                // 'date': this.basic_function_obj.get_datetime(),
                                                transactions: [
                                                    {
                                                        'account_id': account_head,
                                                        'by_account': form_data_1.kyc_reg_accounts,
                                                        // tslint:disable-next-line: max-line-length
                                                        'narration': 'Customer Name.:' + form_data_1.kyc_reg_first_name + ' ' + form_data_1.kyc_reg_middle_name + ' ' + form_data_1.kyc_reg_last_name + ' Customer ID.:' + response.inserted_id + '<br>'
                                                            + 'share account amount',
                                                        'amount': form_data_1.kyc_reg_share_amount,
                                                        'flag': '1',
                                                        'extra_prop': {}
                                                    }
                                                ]
                                            };
                                            _this.p.bulk_transaction_entry(final_form_data2)
                                                .subscribe(function (response_acFolio_insert_deposit) {
                                            });
                                        });
                                    }
                                    else {
                                        var final_form_data_ac_folio = {
                                            // 'date': this.basic_function_obj.get_datetime(),
                                            transactions: [
                                                {
                                                    'account_id': s_account_id_SH,
                                                    'by_account': form_data_1.kyc_reg_accounts,
                                                    // tslint:disable-next-line: max-line-length
                                                    'narration': 'share deposited to' + ':' + 'Customer Name.:' + form_data_1.kyc_reg_first_name + ' ' + form_data_1.kyc_reg_middle_name + ' ' + form_data_1.kyc_reg_middle_name + ' Customer ID.:' + response.inserted_id,
                                                    'amount': form_data_1.kyc_reg_share_amount,
                                                    'flag': '1',
                                                    'extra_prop': {}
                                                }
                                            ]
                                        };
                                        _this.p.bulk_transaction_entry(final_form_data_ac_folio)
                                            .subscribe(function (response_ac_folio) {
                                        }, function (error) {
                                            console.log(error);
                                            _this.spin.trig_spin(false);
                                        });
                                    }
                                });
                            }, function (error) {
                                console.log(error);
                                _this.spin.trig_spin(false);
                            });
                        }, function (error) {
                            console.log(error);
                            _this.spin.trig_spin(false);
                        });
                        formDirective.resetForm();
                        _this.registrationForm.reset({
                            kyc_reg_date: _this.basic_function_obj.get_datetime_to_display(),
                            kyc_reg_vip_code: '02',
                            kyc_reg_face_value: '10',
                            kyc_reg_id_1_select_dropdown: '0',
                            kyc_reg_tel_type1_select_dropdown: '01',
                            kyc_reg_res_code_select_dropdown: '01',
                            prevent_warning: '0'
                        });
                        // tslint:disable-next-line:triple-equals
                    }
                    else if (_this.switch_tab == 1) {
                        var data = {
                            data_to_update: final_form_data_edit,
                            condition: {
                                id: [_this.id_to_edit]
                            }
                        };
                        var update_data = {
                            table_name: 'customer_info',
                            data: data,
                            db: _this.authservice.getHeadDatabaseSession()
                        };
                        _this.p.do_simple_update_cus_info(update_data)
                            .subscribe(function (response) {
                            // tslint:disable-next-line:triple-equals
                            if (response.no_of_rows_updated[0] == 1) {
                                _this.notify.openSnackBar('Data Updated Successfully', '', 'green-snackbar');
                                _this.onToggle('1', 0);
                                $('#remove').click();
                                _this.ngOnInit();
                            }
                            else {
                                _this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
                            }
                            _this.spin.trig_spin(false);
                        }, function (error) {
                            console.log(error);
                            _this.spin.trig_spin(false);
                        });
                    }
                }
                else {
                    _this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
                }
            }
        });
    };
    KycComponent.prototype.onToggle = function (value, suppress_warning) {
        // this.spin.trig_spin(true);
        var _this = this;
        this.switch_tab = value;
        if (value === '0') {
            $('.kyc_reg_id_1_select_value_extra').hide();
            $('.kyc_reg_id_2_select_value_extra').hide();
            $('.kyc_reg_id_2_select_value_extra').hide();
            $('.kyc_reg_id_2_select_value').hide();
            $('.kyc_reg_tel_type2_select_value').hide();
            $('.kyc_reg_tel_type3_select_value').hide();
            this.kyc_reg_id_1_select_dropdown_val = '0';
            this.kyc_reg_id_2_select_dropdown_val = '-1';
            this.kyc_reg_tel_type1_select_dropdown_val = '01';
            this.kyc_reg_tel_type2_select_dropdown_val = '-1';
            this.kyc_reg_tel_type3_select_dropdown_val = '-1';
            // tslint:disable-next-line:max-line-length
            this.registrationForm.reset({
                kyc_reg_title: '',
                kyc_reg_first_name: '',
                kyc_reg_middle_name: '',
                kyc_reg_last_name: '',
                kyc_reg_dob: '',
                kyc_reg_age: '',
                kyc_reg_gender: '',
                kyc_reg_occupation: '',
                kyc_reg_pan: '',
                kyc_reg_email: '',
                kyc_reg_adhar: '',
                kyc_reg_status: '01',
                kyc_reg_vip_code: '02',
                kyc_reg_address: '',
                kyc_reg_present_address: '',
                kyc_reg_h_coordinate: '',
                kyc_reg_v_coordinate: '',
                kyc_reg_pincode: '',
                kyc_reg_state: '',
                kyc_reg_district: '',
                kyc_reg_city: '',
                kyc_reg_area: '',
                kyc_reg_pincode_present: '',
                kyc_reg_state_present: '',
                kyc_reg_district_present: '',
                kyc_reg_city_present: '',
                kyc_reg_area_present: '',
                kyc_reg_face_value: '10',
                kyc_reg_shares: '',
                kyc_reg_share_amount: '',
                kyc_reg_accounts: '',
                kyc_reg_image: '',
                kyc_reg_account_no: '',
                kyc_reg_ifsc: '',
                kyc_reg_bankers_name: '',
                kyc_reg_branch: '',
                kyc_reg_bank_contact: '',
                kyc_reg_bank_address: '',
                kyc_reg_nominee_name: '',
                kyc_reg_nominee_relation_dropdown: '',
                kyc_reg_nominee_age: '',
                kyc_reg_nominee_gender: '',
                kyc_reg_nominee_address: '',
                kyc_reg_date: this.basic_function_obj.get_datetime(),
                kyc_reg_id_1_select_dropdown: '0',
                kyc_reg_id_1_select_value: '',
                kyc_reg_id_1_select_value_extra: '',
                kyc_reg_id_2_select_dropdown: '',
                kyc_reg_id_2_select_value_extra: '',
                kyc_reg_id_2_select_value: '',
                kyc_reg_tel_type1_select_dropdown: '01',
                kyc_reg_tel_type1_select_value: '',
                kyc_reg_tel_type2_select_dropdown: '',
                kyc_reg_tel_type2_select_value: '',
                kyc_reg_tel_type3_select_dropdown: '',
                kyc_reg_tel_type3_select_value: '',
                // kyc_reg_addr_cat_select_dropdown: '01',
                kyc_reg_res_code_select_dropdown: '01',
                prevent_warning: '0'
            });
        }
        else if (value === '1') {
            $('.kyc_reg_id_1_select_value_extra').show();
            $('.kyc_reg_id_2_select_value_extra').show();
            $('.kyc_reg_id_2_select_value').show();
            $('.kyc_reg_tel_type2_select_value').show();
            $('.kyc_reg_tel_type3_select_value').show();
            $('.kyc_reg_tel_type3_select_value').show();
            // tslint:disable-next-line:triple-equals
            if (suppress_warning == 0) {
                this.spin.trig_spin(true);
            }
            var data = {
                'branch_code': this.authservice.getBranchCodeSession()
            };
            var insert_data = {
                table_name: 'customer_info',
                data: data,
                db: this.authservice.getHeadDatabaseSession()
            };
            this.p.get_max_id_cus_info(insert_data)
                .subscribe(function (response_max_id) {
                _this.spin.trig_spin(false);
                var data_max_id = response_max_id.rows[0];
                var max_id = data_max_id['max_id'];
                if (max_id !== null) {
                    _this.g.kyc_get_existing_customer_by_last_timestamp()
                        .subscribe(function (response) {
                        // tslint:disable-next-line: no-shadowed-variable
                        var data = response.rows[0];
                        _this.id_to_edit = data['id'];
                        _this.cus_image = data['cus_image'];
                        _this.cus_sign = data['cus_sign'];
                        _this.kyc_no_of_shares = data['no_of_shares'] / 10;
                        _this.registrationForm.patchValue({
                            kyc_reg_title: data['title'],
                            kyc_reg_accounts: data['accounts'],
                            kyc_reg_first_name: data['cus_first_name'],
                            kyc_reg_middle_name: data['cus_middle_name'],
                            kyc_reg_last_name: data['cus_last_name'],
                            kyc_reg_dob: data['dob'],
                            kyc_reg_age: _this.basic_function_obj.get_age(data['dob']),
                            kyc_reg_gender: data['gender'],
                            kyc_reg_occupation: data['occupation'],
                            kyc_reg_pan: data['pan_card'],
                            kyc_reg_email: data['email'],
                            kyc_reg_adhar: data['aadhar'],
                            kyc_reg_status: data['cus_status'],
                            kyc_reg_vip_code: data['vip_code'] + '',
                            kyc_reg_address: data['address_1'],
                            kyc_reg_present_address: data['address_2'],
                            kyc_reg_h_coordinate: data['h_coordinate'],
                            kyc_reg_v_coordinate: data['v_coordinate'],
                            kyc_reg_pincode: data['pincode'],
                            kyc_reg_state: data['state'],
                            kyc_reg_district: data['district'],
                            kyc_reg_city: data['city_town'],
                            kyc_reg_area: data['area'],
                            kyc_reg_pincode_present: data['present_pincode'],
                            kyc_reg_state_present: data['present_state'],
                            kyc_reg_district_present: data['present_district'],
                            kyc_reg_city_present: data['present_city_town'],
                            kyc_reg_area_present: data['present_area'],
                            kyc_reg_image: '',
                            kyc_reg_face_value: '10',
                            kyc_reg_shares: _this.kyc_no_of_shares,
                            kyc_reg_share_amount: data['no_of_shares'],
                            kyc_reg_account_no: data['account_no'],
                            kyc_reg_ifsc: data['bank_ifsc'],
                            kyc_reg_bankers_name: data['bank_name'],
                            kyc_reg_branch: data['bank_branch'],
                            kyc_reg_bank_contact: data['bank_contact'],
                            kyc_reg_bank_address: data['bank_address'],
                            kyc_reg_nominee_name: data['nominee_name'],
                            kyc_reg_nominee_relation_dropdown: data['nominee_relation'],
                            kyc_reg_nominee_age: data['nominee_age'],
                            kyc_reg_nominee_gender: data['nominee_gender'],
                            kyc_reg_nominee_address: data['nominee_address'],
                            kyc_reg_date: data['date'],
                            kyc_reg_id_1_select_dropdown: data['id1'],
                            kyc_reg_id_1_select_value: data['id1_value'],
                            kyc_reg_id_1_select_value_extra: data['id1_type'],
                            kyc_reg_id_2_select_dropdown: data['id2'],
                            kyc_reg_id_2_select_value_extra: data['id2_type'],
                            kyc_reg_id_2_select_value: data['id2_value'],
                            kyc_reg_tel_type1_select_dropdown: data['contact1'],
                            kyc_reg_tel_type1_select_value: data['contact1_value'],
                            kyc_reg_tel_type2_select_dropdown: data['contact2'],
                            kyc_reg_tel_type2_select_value: data['contact2_value'],
                            kyc_reg_tel_type3_select_dropdown: data['contact3'],
                            kyc_reg_tel_type3_select_value: data['contact3_value'],
                            // kyc_reg_addr_cat_select_dropdown:  data['address_cat'],
                            kyc_reg_res_code_select_dropdown: data['res_code'],
                            prevent_warning: '0'
                        });
                        _this.kyc_reg_id_1_select_dropdown_val = data['id1'];
                        _this.kyc_reg_id_2_select_dropdown_val = data['id2'];
                        _this.kyc_reg_tel_type1_select_dropdown_val = data['contact1'];
                        _this.kyc_reg_tel_type2_select_dropdown_val = data['contact2'];
                        _this.kyc_reg_tel_type3_select_dropdown_val = data['contact3'];
                        _this.spin.trig_spin(false);
                    }, function (error) {
                        _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                        _this.spin.trig_spin(false);
                    });
                }
            });
        }
    };
    KycComponent.prototype.fn_on_search = function (search_term) {
        var _this = this;
        $('.kyc_reg_id_1_select_value_extra').show();
        $('.kyc_reg_id_2_select_value_extra').show();
        $('.kyc_reg_id_2_select_value').show();
        $('.kyc_reg_tel_type2_select_value').show();
        $('.kyc_reg_tel_type3_select_value').show();
        this.spin.trig_spin(true);
        var res = search_term.split('-');
        var res_id = res[1].split('');
        // tslint:disable-next-line:radix
        // const id_only_arr = [res[1]];
        var get_data = {
            table_name: 'customer_info',
            data: res_id[0],
            db: this.authservice.getHeadDatabaseSession()
        };
        this.p.do_simple_id_read(get_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.id_to_edit = data['id'];
            _this.cus_image = data['cus_image'];
            _this.cus_sign = data['cus_sign'];
            _this.cus_branch_code = data['branch_code'];
            _this.branch_code = _this.authservice.getBranchCodeSession();
            if (_this.branch_code === _this.cus_branch_code) {
                // tslint:disable-next-line: comment-format
                _this.registrationForm.patchValue({
                    kyc_reg_title: data['title'],
                    kyc_reg_accounts: data['accounts'],
                    kyc_reg_first_name: data['cus_first_name'],
                    kyc_reg_middle_name: data['cus_middle_name'],
                    kyc_reg_last_name: data['cus_last_name'],
                    kyc_reg_dob: data['dob'],
                    kyc_reg_age: _this.basic_function_obj.get_age(data['dob']),
                    kyc_reg_gender: data['gender'],
                    kyc_reg_occupation: data['occupation'],
                    kyc_reg_pan: data['pan_card'],
                    kyc_reg_email: data['email'],
                    kyc_reg_adhar: data['aadhar'],
                    kyc_reg_status: data['cus_status'],
                    kyc_reg_vip_code: data['vip_code'] + '',
                    kyc_reg_address: data['address_1'],
                    kyc_reg_present_address: data['address_2'],
                    kyc_reg_h_coordinate: data['h_coordinate'],
                    kyc_reg_v_coordinate: data['v_coordinate'],
                    kyc_reg_pincode: data['pincode'],
                    kyc_reg_state: data['state'],
                    kyc_reg_district: data['district'],
                    kyc_reg_city: data['city_town'],
                    kyc_reg_area: data['area'],
                    kyc_reg_pincode_present: data['present_pincode'],
                    kyc_reg_state_present: data['present_state'],
                    kyc_reg_district_present: data['present_district'],
                    kyc_reg_city_present: data['present_city_town'],
                    kyc_reg_area_present: data['present_area'],
                    kyc_reg_image: '',
                    kyc_reg_face_value: '10',
                    kyc_reg_shares: _this.kyc_no_of_shares,
                    kyc_reg_share_amount: data['no_of_shares'],
                    kyc_reg_account_no: data['account_no'],
                    kyc_reg_ifsc: data['bank_ifsc'],
                    kyc_reg_bankers_name: data['bank_name'],
                    kyc_reg_branch: data['bank_branch'],
                    kyc_reg_bank_contact: data['bank_contact'],
                    kyc_reg_bank_address: data['bank_address'],
                    kyc_reg_nominee_name: data['nominee_name'],
                    kyc_reg_nominee_relation_dropdown: data['nominee_relation'],
                    kyc_reg_nominee_age: data['nominee_age'],
                    kyc_reg_nominee_gender: data['nominee_gender'],
                    kyc_reg_nominee_address: data['nominee_address'],
                    kyc_reg_date: data['date'],
                    kyc_reg_id_1_select_dropdown: data['id1'],
                    kyc_reg_id_1_select_value: data['id1_value'],
                    kyc_reg_id_1_select_value_extra: data['id1_type'],
                    kyc_reg_id_2_select_dropdown: data['id2'],
                    kyc_reg_id_2_select_value_extra: data['id2_type'],
                    kyc_reg_id_2_select_value: data['id2_value'],
                    kyc_reg_tel_type1_select_dropdown: data['contact1'],
                    kyc_reg_tel_type1_select_value: data['contact1_value'],
                    kyc_reg_tel_type2_select_dropdown: data['contact2'],
                    kyc_reg_tel_type2_select_value: data['contact2_value'],
                    kyc_reg_tel_type3_select_dropdown: data['contact3'],
                    kyc_reg_tel_type3_select_value: data['contact3_value'],
                    // kyc_reg_addr_cat_select_dropdown:  data['address_cat'],
                    kyc_reg_res_code_select_dropdown: data['res_code'],
                    prevent_warning: '0'
                });
                _this.spin.trig_spin(false);
            }
            else {
                _this.notify.normal_alert('Customer Does not exist in this Branch  !!!');
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
            _this.spin.trig_spin(false);
        });
        //
    };
    KycComponent.prototype.fn_list_member = function () {
        var _this = this;
        this.g.kyc_get_all_customer()
            .subscribe(function (response) {
            var data = response.rows;
            data.forEach(function (element) {
                element['shares'] = element['no_of_shares'] / 10;
                var get_data1 = {
                    table_name: 'branch_details',
                    data: element['branch_code'],
                    condition_column: 'branch_code',
                    db: 'nace_fin_head_office'
                };
                _this.p.do_single_fetch_with_where_condition(get_data1)
                    .subscribe(function (branch_response) {
                    var data1 = branch_response.rows;
                    element['branch_name'] = data1[0].name;
                });
                _this.customerName = data;
            });
            _this.chRef.detectChanges();
            _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
        });
    };
    KycComponent.prototype.send_tab = function (ctrl, view_id) {
        var _this = this;
        var get_data = {
            table_name: 'customer_info',
            data: view_id,
            db: this.authservice.getHeadDatabaseSession()
        };
        if (ctrl === 1) {
            $('#kyc_tab_1').click();
            this.p.do_simple_id_read(get_data)
                .subscribe(function (response) {
                var data = response.row;
                _this.id_to_edit = data['id'];
                _this.registrationForm.patchValue({
                    kyc_reg_title: data['title'],
                    kyc_reg_accounts: data['accounts'],
                    kyc_reg_first_name: data['cus_first_name'],
                    kyc_reg_middle_name: data['cus_middle_name'],
                    kyc_reg_last_name: data['cus_last_name'],
                    kyc_reg_dob: data['dob'],
                    kyc_reg_age: _this.basic_function_obj.get_age(data['dob']),
                    kyc_reg_gender: data['gender'],
                    kyc_reg_occupation: data['occupation'],
                    kyc_reg_pan: data['pan_card'],
                    kyc_reg_email: data['email'],
                    kyc_reg_adhar: data['aadhar'],
                    kyc_reg_status: data['cus_status'],
                    kyc_reg_vip_code: data['vip_code'] + '',
                    kyc_reg_address: data['address_1'],
                    kyc_reg_present_address: data['address_2'],
                    kyc_reg_h_coordinate: data['h_coordinate'],
                    kyc_reg_v_coordinate: data['v_coordinate'],
                    kyc_reg_pincode: data['pincode'],
                    kyc_reg_state: data['state'],
                    kyc_reg_district: data['district'],
                    kyc_reg_city: data['city_town'],
                    kyc_reg_area: data['area'],
                    kyc_reg_pincode_present: data['present_pincode'],
                    kyc_reg_state_present: data['present_state'],
                    kyc_reg_district_present: data['present_district'],
                    kyc_reg_city_present: data['present_city_town'],
                    kyc_reg_area_present: data['present_area'],
                    kyc_reg_image: '',
                    kyc_reg_face_value: '10',
                    kyc_reg_shares: _this.kyc_no_of_shares,
                    kyc_reg_share_amount: data['no_of_shares'],
                    kyc_reg_account_no: data['account_no'],
                    kyc_reg_ifsc: data['bank_ifsc'],
                    kyc_reg_bankers_name: data['bank_name'],
                    kyc_reg_branch: data['bank_branch'],
                    kyc_reg_bank_contact: data['bank_contact'],
                    kyc_reg_bank_address: data['bank_address'],
                    kyc_reg_nominee_name: data['nominee_name'],
                    kyc_reg_nominee_relation_dropdown: data['nominee_relation'],
                    kyc_reg_nominee_age: data['nominee_age'],
                    kyc_reg_nominee_gender: data['nominee_gender'],
                    kyc_reg_nominee_address: data['nominee_address'],
                    kyc_reg_date: data['date'],
                    kyc_reg_id_1_select_dropdown: data['id1'],
                    kyc_reg_id_1_select_value: data['id1_value'],
                    kyc_reg_id_1_select_value_extra: data['id1_type'],
                    kyc_reg_id_2_select_dropdown: data['id2'],
                    kyc_reg_id_2_select_value_extra: data['id2_type'],
                    kyc_reg_id_2_select_value: data['id2_value'],
                    kyc_reg_tel_type1_select_dropdown: data['contact1'],
                    kyc_reg_tel_type1_select_value: data['contact1_value'],
                    kyc_reg_tel_type2_select_dropdown: data['contact2'],
                    kyc_reg_tel_type2_select_value: data['contact2_value'],
                    kyc_reg_tel_type3_select_dropdown: data['contact3'],
                    kyc_reg_tel_type3_select_value: data['contact3_value'],
                    // kyc_reg_addr_cat_select_dropdown:  data['address_cat'],
                    kyc_reg_res_code_select_dropdown: data['res_code'],
                    prevent_warning: '0'
                });
                _this.spin.trig_spin(false);
            }, function (error) {
                _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                _this.spin.trig_spin(false);
            });
        }
        else if (ctrl === 2) {
            $('#kyc_tab_3').click();
            this.p.do_simple_id_read(get_data)
                .subscribe(function (response) {
                var data = response.row;
                _this.id_to_edit = data['id'];
                _this.send_sms.patchValue({
                    send_sms_name: data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'],
                    prevent_warning: '0'
                });
                _this.spin.trig_spin(false);
            }, function (error) {
                _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                _this.spin.trig_spin(false);
            });
        }
        else if (ctrl === 3) {
            $('#kyc_tab_3').click();
            this.p.do_simple_id_read(get_data)
                .subscribe(function (response) {
                var data = response.row;
                _this.id_to_edit = data['id'];
                _this.send_email.patchValue({
                    // tslint:disable-next-line: max-line-length
                    send_email_name: data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'] + '<' + data['email'] + '>',
                    prevent_warning: '0'
                });
                _this.spin.trig_spin(false);
            }, function (error) {
                _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                _this.spin.trig_spin(false);
            });
        }
    };
    KycComponent.prototype.give_same_address = function () {
        this.registrationForm.patchValue({
            kyc_reg_present_address: $('.kyc_reg_address').val(),
            kyc_reg_pincode_present: $('.kyc_reg_pincode').val(),
            kyc_reg_state_present: $('.kyc_reg_state').val(),
            kyc_reg_district_present: $('.kyc_reg_district').val(),
            kyc_reg_city_present: $('.kyc_reg_city').val(),
            kyc_reg_area_present: $('.kyc_reg_area').val()
        });
    };
    KycComponent.prototype.print_share_certificate = function (shares, cus_name, cus_id) {
        var db_name = this.authservice.getDatabaseSession();
        var head_db = this.authservice.getHeadDatabaseSession();
        var formData = new FormData();
        formData.append('cus_id', cus_id);
        formData.append('cus_name', cus_name);
        formData.append('no_of_shares', shares);
        formData.append('db_name', db_name);
        formData.append('head_db', head_db);
        this.p.do_share_certificate_print(formData)
            .subscribe(function (print_response) {
            // const receipt_id = receipt_response[0];
            var print = print_response[0];
            var popupWin;
            // printContents = document.getElementById('print-section').innerHTML;
            popupWin = window.open();
            popupWin.document.open();
            popupWin.document.write("\n    <html>\n  <body onload=\"window.print();window.close()\">" + print + "</body>\n    </html>");
            popupWin.document.close();
        });
    };
    KycComponent.prototype.ngOnInit = function () {
        // this ensures form becomes valid soon after loading
        var self = this;
        self.registrationForm.patchValue({
            kyc_reg_face_value: '10'
        });
        setTimeout(function () {
            self.registrationForm.patchValue({
                prevent_warning: ['0']
            });
        }, 10);
        this.get_accounts();
        // to load the edit form first
        this.onToggle('1', 1);
        this.fn_list_member();
        this.header_array = this.table_data_to_send.table.header.split('~');
    };
    KycComponent.prototype.ngAfterViewInit = function () {
        var re = '^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))\/(19|20)\\d{2}$';
        // tslint:disable-next-line:max-line-length
        inputmask__WEBPACK_IMPORTED_MODULE_10___default()({ regex: re, showMaskOnHover: false, showMaskOnFocus: false, 'clearIncomplete': true }).mask(document.getElementsByClassName('date_mask'));
    };
    KycComponent.prototype.ngOnDestroy = function () {
    };
    KycComponent.prototype.find_invalid = function () {
        this.basic_function_obj.find_invalid(this.registrationForm);
    };
    KycComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kyc',
            template: __webpack_require__(/*! ./kyc.component.html */ "./src/app/menu_components/user/kyc/kyc.component.html"),
            styles: [__webpack_require__(/*! ./kyc.component.scss */ "./src/app/menu_components/user/kyc/kyc.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"], _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__["NotificationserviceService"], _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__["BasicFunctionsService"], _services_third_party_api_service__WEBPACK_IMPORTED_MODULE_4__["ThirdPartyApiService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], _services_posting_service__WEBPACK_IMPORTED_MODULE_6__["PostingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _services_getting_service__WEBPACK_IMPORTED_MODULE_7__["GettingService"], _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_9__["DatatableTriggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], KycComponent);
    return KycComponent;
}());



/***/ }),

/***/ "./src/app/menu_components/user/kyc/kyc.module.ts":
/*!********************************************************!*\
  !*** ./src/app/menu_components/user/kyc/kyc.module.ts ***!
  \********************************************************/
/*! exports provided: KycModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycModule", function() { return KycModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/component/component.module */ "./src/app/modules/component/component.module.ts");
/* harmony import */ var _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _kyc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kyc.component */ "./src/app/menu_components/user/kyc/kyc.component.ts");
/* harmony import */ var _kyc_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kyc.routing */ "./src/app/menu_components/user/kyc/kyc.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var KycModule = /** @class */ (function () {
    function KycModule() {
    }
    KycModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_kyc_routing__WEBPACK_IMPORTED_MODULE_8__["KycRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot()
            ],
            declarations: [_kyc_component__WEBPACK_IMPORTED_MODULE_7__["KycComponent"]]
        })
    ], KycModule);
    return KycModule;
}());



/***/ }),

/***/ "./src/app/menu_components/user/kyc/kyc.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu_components/user/kyc/kyc.routing.ts ***!
  \*********************************************************/
/*! exports provided: KycRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycRoutes", function() { return KycRoutes; });
/* harmony import */ var _kyc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc.component */ "./src/app/menu_components/user/kyc/kyc.component.ts");

var KycRoutes = [
    {
        path: '',
        children: [{
                path: 'kyc',
                component: _kyc_component__WEBPACK_IMPORTED_MODULE_0__["KycComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=menu_components-user-kyc-kyc-module.js.map