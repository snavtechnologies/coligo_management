import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ElementRef, ViewChild, OnDestroy, ChangeDetectionStrategy, Directive, HostListener } from "@angular/core";
import { DBOperation } from "../../../common_interfaces/db_operation.model";
import { TabLayout } from "../../../components/tab-layout/tab-layout.model";
import { SearchBox } from "../../../common_interfaces/searchbox.model";
import { HtmlComponentFinal } from "../../../common_interfaces/html-component.model";
import { ValidationService } from "../../../services/validation.service";
import { NotificationserviceService } from "../../../services/notificationservice.service";
import { BasicFunctionsService } from "../../../services/basic-functions.service";
import { SpinnerService } from "../../../services/spinner.service";
import { PostingService } from "../../../services/posting.service";
import { GettingService } from "../../../services/getting.service";
import { AuthService } from "../../../services/auth.service";
import { TableData } from "../../../common_interfaces/tabledata.model";
import { DatatableTriggerService } from "../../../services/datatable-trigger.service";
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {CommonModule} from "@angular/common";
import Inputmask from 'inputmask';
import {MatInputModule} from '@angular/material/input';
declare const $: any;
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
} from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import { never, Subscription } from "rxjs";
import { ThirdPartyApiService } from "app/services/third-party-api.service";
import { resolve } from "url";
import { element } from "protractor";
import { HtmlComponentsComponent } from "app/components/html-components/html-components.component";
import { validateConfig } from "@angular/router/src/config";
import { EncryptionService } from "app/services/encryption.service";
import { AuthData } from "app/common_interfaces/auth-data.model";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Conditional } from "@angular/compiler";
import { CredentialsService } from "app/services/credentials.service";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import { ErrorService } from "app/services/error.service";
import { invalid } from "moment";
import { EmployeeRole } from "app/common_interfaces/employee-role.model";
import { Kit } from "app/common_interfaces/kit.model";
import { RolesService } from "../employee-roles/roles.service";
import { IdsToPropertiesMap } from "app/common_interfaces/ids-to-properties-map.model";
import { MapService } from "app/services/map.service";

@Component({
  selector: "app-employee-operations",
  templateUrl: "./employee-operations.component.html",
  styleUrls: ["./employee-operations.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeOperationsComponent implements OnInit, AfterViewInit, OnDestroy {

  emp_new_date;
  dropdown_val: string = '0';

  pincode_details = [];
  pincode_details_permanent = [];
  pincode_details_present = [];
  pincode_det_length: number;

  employeeData: Object;
  currentEmployee: object;
  emp_image: string;
  filename: string;
  readonly session_branch_code: string;
  readonly head_db: string;
  emp_branch_code: string;
  emp_username: string;
  fileToUpload: File = null;
  switch_tab: number;
  id_to_edit: number;
  is_same_area = false;
  is_reading = false;
  area_permanent: string;
  timeout;
  is_credentials_readonly = false;
  credential_btn_name: string;
  view_id: object;
  btn_username_observable: Observable<string>;
  btn_username_subscription: Subscription;
  roles: EmployeeRole[];
  selectedRole: EmployeeRole = { name: '' };
  color = '#EEEEEE';
  private subscriptions = new Subscription();
  idsToPropertiesMap: IdsToPropertiesMap = {};

  tab_layout_ui_data_to_send: TabLayout = {
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


  NewEmployeesForm: FormGroup = this.fb.group({
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

  employees_New_html_elements: HtmlComponentFinal[] = [
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
  emp_new_custom_element_id_1_select_dropdown_data: HtmlComponentFinal = {
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

  emp_new_custom_element_id_1_select_value_data: HtmlComponentFinal = {
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

  emp_new_custom_element_id_1_select_value_data_extra: HtmlComponentFinal = {
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

  emp_new_custom_element_id_2_select_dropdown_data: HtmlComponentFinal = {
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

  emp_new_custom_element_id_2_select_value_data: HtmlComponentFinal = {
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

  emp_new_custom_element_id_2_select_value_data_extra: HtmlComponentFinal = {
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


  emp_new_custom_element_contact_1_select_dropdown_data: HtmlComponentFinal = {
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

  emp_new_custom_element_contact_1_select_value_data: HtmlComponentFinal = {
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

  emp_new_custom_element_contact_2_select_dropdown_data: HtmlComponentFinal = {
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

  emp_new_custom_element_contact_2_select_value_data: HtmlComponentFinal = {
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

  emp_new_custom_element_contact_3_select_dropdown_data: HtmlComponentFinal = {
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

  emp_new_custom_element_contact_3_select_value_data: HtmlComponentFinal = {
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

  emp_new_custom_element_present_address: HtmlComponentFinal = {
    single_element: true,
    textarea: true,
    placeholder: "Please Enter Address",
    required: false,
    classes: ["emp_new_adress_present"],
    readonly: false,
    name: "emp_new_address_present",
  };

  search_box: SearchBox = {
    placeholder: 'Search id, first, middle or last names',
    searchbox_id: 'emp_search',
    search_tablename: 'employee_info',
    search_db: this.authservice.getHeadDatabaseSession(),
    search_columnname: 'id~emp_first_name~emp_last_name~aadhar~id1_value~email~contact1_value',
    view_columnname: 'id~emp_first_name~emp_last_name',
  }

  table_data_to_send: TableData = {
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
  }
  
  send_sms: FormGroup = this.fb.group(
    {
      send_sms_name: [''],
      send_sms_confirm: [''],
      send_sms_content: [''],
      prevent_warning: ['']
    }
  );
  send_email: FormGroup = this.fb.group(
    {
      send_email_name: [''],
      send_email_confirm: [''],
      send_email_subject: [''],
      send_email_content: [''],
      send_email_attachment: [''],
      prevent_warning: ['']
    }
  );
  send_sms_html_elements: HtmlComponentFinal[] = [
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
        }]
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
  ]

  send_email_html_elements: HtmlComponentFinal[] = [
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
        }]
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
  ]


  employeeCredentialsForm: FormGroup = this.fb.group(
    {
      name: [''],
      username: [''],
      key: ['']
    }
  )

  employee_keys_html_elements: HtmlComponentFinal[] = [
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
  ]

  employee_keys_html_elements_readonly: HtmlComponentFinal[] = [
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
  ]

  constructor(
    public validation_obj: ValidationService,
    public g: GettingService,
    public notify: NotificationserviceService,
    public basic_function_obj: BasicFunctionsService,
    public spin: SpinnerService,
    public p: PostingService,
    private fb: FormBuilder,
    public dt_trig: DatatableTriggerService,
    private chRef: ChangeDetectorRef,
    public authservice: AuthService,
    public third_party_api_obj: ThirdPartyApiService,
    public encryptionService: EncryptionService,
    public credentialsService: CredentialsService,
    private errorService: ErrorService,
    private rolesService: RolesService,
    private mapService: MapService,
    public changeDetetctor: ChangeDetectorRef
  ) {
    this.head_db = this.authservice.getHeadDatabaseSession();
    console.log("constructor");
    console.log(this.head_db);
    this.session_branch_code = this.authservice.getBranchCodeSession();
  }

 
  ngOnInit() {
    console.log("ngoninit reached");
    console.log("it reached");
    this.onToggle('1', 1);
    this.fn_list_members();
    console.log(this.currentEmployee);

    this.subscriptions
      .add(this.rolesService.getRoles()
      .subscribe(roles => {
        this.roles = roles;
        this.idsToPropertiesMap = this.mapService.getIdsToProperiesMap(this.roles);
      },
      error => this.errorService.handle_error(error))
    );

  }

  ngAfterViewInit() {
    const re = '^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))\/(19|20)\\d{2}$';
    Inputmask({ regex: re, showMaskOnHover: false, showMaskOnFocus: false, 'clearIncomplete': true }).mask(document.getElementsByClassName('date_mask'));

    const regex_username = '^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$';
    //Inputmask({ regex: regex_username, showMaskOnHover: false, showMaskOnFocus: false}).mask(document.getElementById('username'));
    console.log('input mask reached');
    
  }



  dobcheck() {
    const emp_dob = this.NewEmployeesForm.get('emp_new_dob').value;
    const feed1 = this.validation_obj.check_dob(emp_dob);

    if (feed1 === true) {
      const feed = this.basic_function_obj.get_age(emp_dob);
      if (typeof feed === 'number') {
        this.NewEmployeesForm.patchValue({
          emp_new_age: feed
        });
      } else {
        this.NewEmployeesForm.patchValue({
          emp_new_age: ''
        });
      }
    } else {
      this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
      this.NewEmployeesForm.patchValue({
        emp_new_dob: ''
      });
    }
  }

  get_html_events(event_obj){
    if (event_obj.uniq_identity === 'emp_new_pan') {
      if (event_obj.e_type === 'keyup') {
        $('.emp_new_pan').val($('.emp_new_pan').val().toUpperCase());
      }
      const feed = this.validation_obj.check_pan_number(event_obj.value);
      if (feed === false) {
        if (event_obj.e_type === 'blur') {
          if ($('.emp_new_pan').val()) { this.notify.openSnackBar('Check the PAN format', 'Close', 'red-snackbar'); }

          this.NewEmployeesForm.patchValue({
            emp_new_pan: ''
          });
        }
      }
    }
    else if (event_obj.uniq_identity === 'emp_new_email') {

      const feed = this.validation_obj.check_email(event_obj.value);
      if (feed === false) {
        if (event_obj.e_type === 'blur') {
          if ($('.emp_new_email').val()) { this.notify.openSnackBar('Check the Email format', 'Close', 'red-snackbar'); }

          this.NewEmployeesForm.patchValue({
            kyc_reg_email: ''
          });
        }
      }
    }
    else if (event_obj.uniq_identity === 'emp_new_aadhar') {
      const feed = this.validation_obj.check_aadhar(event_obj.value);
      if (feed === false) {
        if (event_obj.e_type === 'blur') {
          if ($('.emp_new_aadhar').val()) { this.notify.openSnackBar('Check the AADHAR format', 'Close', 'red-snackbar'); }

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
  }

  get_html_events_id(event_obj, id_num: string){  
    const select_val = this.NewEmployeesForm.get('emp_new_id_'+id_num+'_select_value');

    if (event_obj.uniq_identity === 'emp_new_id_'+id_num+'_select_dropdown') {

      if (event_obj.value === '0' || event_obj.value === '1' || event_obj.value === '2') {
        this.dropdown_val = event_obj.value;
        $('.emp_new_id_'+id_num+'_select_value_extra').hide();
        //To ensure the field is not hidden in case id_num = 2
        $('.emp_new_id_'+id_num+'_select_value').show(); 
      }
      else if (event_obj.value === '3') {
        this.dropdown_val = '-1';
        $('.emp_new_id_'+id_num+'_select_value_extra').show();
        //To ensure the field is not hidden in case id_num = 2
        $('.emp_new_id_'+id_num+'_select_value').show();
      }
      else {
        this.dropdown_val = '-1';
        $('.emp_new_id_'+id_num+'_select_value_extra').hide();
        $('.emp_new_id_'+id_num+'_select_value').hide();
      }      
    }
    else if (event_obj.uniq_identity === 'emp_new_id_'+id_num+'_select_value') {
      if (this.dropdown_val === '0') {
        const feed = this.validation_obj.check_indian_voter(event_obj.value);
        if (feed === false) {
          if (event_obj.e_type === 'blur') {
            if ($('.emp_new_id_'+id_num+'_select_value').val()) { this.notify.openSnackBar('Check the voter ID format', '', 'red-snackbar'); }  
            select_val.patchValue('');
          }
        }
      } 
      else if (this.dropdown_val === '1') {
        const feed = this.validation_obj.check_passport(event_obj.value);
        if (feed === false) {
          if (event_obj.e_type === 'blur') {
            if ($('.emp_new_id_'+id_num+'_select_value').val()) { this.notify.openSnackBar('Check the passport format', '', 'red-snackbar'); } 
            select_val.patchValue('');
          }
        }
      }
      else if (this.dropdown_val === '2') {
        const feed = this.validation_obj.check_indian_driving_license(event_obj.value);
        if (feed === false) {
          if (event_obj.e_type === 'blur') {
            if ($('.emp_new_id_'+id_num+'_select_value').val()) { this.notify.openSnackBar('Check the license format', '', 'red-snackbar'); }       
            select_val.patchValue('');
         }
        }        
      }              
    }
  }

  get_html_events_contact(event_obj, contact_priority: string){
    const select_val = this.NewEmployeesForm.get('emp_new_contact_'+contact_priority+'_select_value');

     if (event_obj.uniq_identity === 'emp_new_contact_'+contact_priority+'_select_dropdown') {
      this.dropdown_val = event_obj.value;
      //To ensure the field is not hidden in case contact_priority = 2 or 3
      $('.emp_new_contact_'+contact_priority+'_select_value').show();
    }

    else if (event_obj.uniq_identity === 'emp_new_contact_'+contact_priority+'_select_value') {
      if (event_obj.e_type === 'blur') {
        if (this.dropdown_val === '01') {
          const feed = this.validation_obj.check_mobile(event_obj.value);
          if (feed === false) {
            if (event_obj.e_type === 'blur') {
              if ($('.emp_new_contact_'+contact_priority+'_select_value').val()) { this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar'); }
              select_val.patchValue('');
            }
          } 
        }
        else if (this.dropdown_val === '02') {
          const feed = this.validation_obj.check_telephone(event_obj.value);
          if (feed === false) {
            if (event_obj.e_type === 'blur') {
              if ($('.emp_new_contact_'+contact_priority+'_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
              select_val.patchValue('');
            }
          }
        }
        else if (this.dropdown_val === '03') {
          const feed = this.validation_obj.check_telephone(event_obj.value);
          if (feed === false) {
            if (event_obj.e_type === 'blur') {
              // tslint:disable-next-line: max-line-length
              if ($('.emp_new_contact_'+contact_priority+'_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
              select_val.patchValue('');
            }
          }
        }            
      }
    }             
  }

  get_address_from_pincode(pincode: number, type_of_pincode: string){
    this.spin.trig_spin(true);
    this.third_party_api_obj.get_pincode_details(pincode)
        .subscribe(response => {
          this.pincode_details = response[0]['PostOffice'];

          if (type_of_pincode == 'permanent')
            this.pincode_details_permanent = this.pincode_details;
          else if (type_of_pincode == 'present')
            this.pincode_details_present = this.pincode_details  
          
          if (this.pincode_details) {
            this.pincode_det_length = this.pincode_details.length;
          } 
          else if (response[0]['Status'] !== 200) {
          this.notify.openSnackBar('The requested resource is not found', 'Close', 'red-snackbar');
          this.spin.trig_spin(false);

          }
          else if (this.pincode_det_length === 1) {
            if (this.pincode_details === null) {
              this.notify.openSnackBar('Pincode Not found', 'Close', 'red-snackbar');
              this.spin.trig_spin(false);
            } 
            else {
              this.NewEmployeesForm.patchValue({
                emp_new_area_permanent: this.pincode_details[0]['Name'],
                emp_new_district_permanent: this.pincode_details[0]['District'],
                emp_new_city_permanent: this.pincode_details[0]['Block'],
                emp_new_state_permanent: this.pincode_details[0]['State']
              });
            }
          }
           else {
            this.NewEmployeesForm.patchValue({
              emp_new_district_permanent: '',
              emp_new_city_permanent: '',
              emp_new_state_permanent: ''
            });
          }
          this.spin.trig_spin(false);
        }
          , error => {
            this.errorService.handle_error(error);

          });  
  }
 
  get_pincode_details(type_of_pincode: string) {
    this.is_same_area = false;
    const emp_new_area_value = this.NewEmployeesForm.get('emp_new_area_'+type_of_pincode).value;
    const emp_new_area_value_Arr = emp_new_area_value.split('~');

    const district = this.NewEmployeesForm.get('emp_new_district_'+type_of_pincode);
    const city = this.NewEmployeesForm.get('emp_new_city_'+type_of_pincode);
    const state = this.NewEmployeesForm.get('emp_new_state_'+type_of_pincode);

    if (type_of_pincode == 'permanent'){
      this.pincode_details = this.pincode_details_permanent;
      //for using in give_same_address()
      this.area_permanent = this.pincode_details[emp_new_area_value_Arr[0]]['Name'];
    }
    else if (type_of_pincode == 'present')
      this.pincode_details == this.pincode_details_present;

    district.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['District']);
    city.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['Block']);
    state.patchValue(this.pincode_details[emp_new_area_value_Arr[0]]['State']);
  }

  give_same_address(event) {
    if (event.target.checked){
      const pincode: number = $('.emp_new_pincode_permanent').val()
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
    
  }

  form_submit(formDirective: FormGroupDirective) {

    if (!this.NewEmployeesForm.valid){
      if (this.emp_branch_code === this.session_branch_code)
        this.notify.openSnackBar('Please fill all the fields', '', 'red-snackbar' );   
      else
        this.notify.openSnackBar('Form is readonly as Employee is in a differnet Branch', '', 'red-snackbar');
      return;
    }

    this.notify.askForConfirmation().then((trig: boolean) => {
      let final_form_data: object;
      if (trig === true){
        this.spin.trig_spin(true);
        const form_data = this.NewEmployeesForm.value;

        if (this.switch_tab == 0)
           final_form_data = this.get_final_form_data(form_data, 'add');
        else if (this.switch_tab == 1)
           final_form_data = this.get_final_form_data(form_data, 'edit'); 

        const insert_data: DBOperation = {
          table_name: 'employee_info',
          data: final_form_data,
          db: this.head_db
        }

        if (this.switch_tab == 0) {
          this.upload_image();
          this.write_to_db(insert_data);
          formDirective.resetForm();
          this.reset();
        }
        else if (this.switch_tab == 1){
          if (this.fileToUpload != null)
            this.upload_image() ;
          this.update_employee_table(final_form_data, 'Data Updated Successfully');
          
        }  
      }
    })
  }

  get_final_form_data(form_data, mode: string): object {
    let final_form_data: object; 
    const data = {
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

    if (mode === 'add'){
       const extra_data = {
         'date': this.basic_function_obj.get_datetime(),
       };
       final_form_data = Object.assign(extra_data, data);
    }
    else if (mode === 'edit') 
      final_form_data = data;

    return final_form_data;
  }

  find_invalid() {
    this.basic_function_obj.find_invalid(this.NewEmployeesForm);
  }

  onToggle(value, suppress_warning: number) {
    this.switch_tab = value;

    if (value === '0') {
      this.hide_fields();
      this.dropdown_val = '0';
      this.reset();
      for (const field in this.NewEmployeesForm.controls){
        const control = this.NewEmployeesForm.get(field);
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
  }

  hide_fields(){
    $('.emp_new_id_1_select_value_extra').hide();
    $('.emp_new_id_2_select_value_extra').hide();
    $('.emp_new_id_2_select_value').hide();
    $('.emp_new_contact_2_select_value').hide();
    $('.emp_new_contact_3_select_value').hide();
  }

  show_fields(){
    $('.emp_new_id_1_select_value_extra').show();
    $('.emp_new_id_2_select_value_extra').show();
    $('.emp_new_id_2_select_value').show();
    $('.emp_new_contact_2_select_value').show();
    $('.emp_new_contact_3_select_value').show();
  }

  reset() {
    this.selectedRole = { name: '' };
    this.NewEmployeesForm.patchValue(
      {
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
  }

  patch_form(data) {
    this.selectedRole = this.idsToPropertiesMap[data['role_id']] as EmployeeRole;
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
  }

get_last_employee_details() {
    const data = {
      'branch_code': this.session_branch_code
    }
    const insert_data: DBOperation = {
      table_name: 'employee_info',
      data: data,
      db: this.head_db
    }
  
    this.p.get_max_id_emp_info(insert_data)
      .subscribe(response => {
        this.spin.trig_spin(false);
        const data_max_id = response.rows[0];
        const max_id = data_max_id['max_id'];
        
        if (max_id !== null) {
          this.g.get_existing_employee_by_last_timestamp()
            .subscribe(response => {
              const data = response.rows[0];
              this.currentEmployee = data;
              this.check_credentials_mode(data['id']);
              this.get_employee_keys(data['id']);
              this.employeeCredentialsForm.patchValue({name: this.currentEmployee['emp_first_name'] + " " + this.currentEmployee['emp_middle_name'] + " " + this.currentEmployee['emp_last_name']});
              this.set_form_variables(data);
              this.patch_form(data);
              this.spin.trig_spin(false);
            },
            error => {
              console.log(error);
              this.spin.trig_spin(false);
              this.notify.openSnackBar(error, '', 'red-snackbar');
            });
        }

      },
      error => {
        this.errorService.handle_error(error);
      });
  }

  fn_on_search(search_term) {
    this.show_fields();
    this.spin.trig_spin(true);
    const split_search_term = search_term.split('-');
    const res_id = split_search_term[1].split('');

    const get_data: DBOperation = {
      table_name: 'employee_info',
      data: res_id[0],
      db: this.head_db
    }

    this.p.do_simple_id_read(get_data)
      .subscribe(response => {
        const data = response.row;
        this.emp_branch_code = data['branch_code'];
        
        if (this.session_branch_code === this.emp_branch_code) {
          this.patch_form(data);
          this.emp_image = data['emp_image'];
          this.spin.trig_spin(false);
        }
        else {
          this.notify.normal_alert('Emloyee does not exist in this Branch !!!');
          this.spin.trig_spin(false);
        }

      },
      error => {
        this.errorService.handle_error(error);
      });
  }

  write_to_db(insert_data){
    this.p.do_single_insertion_emp_info(insert_data)
      .subscribe(response => {
        if (response.flag === 1) {
          this.notify.openSnackBarSuccess();
          $('#remove').click();
        }
        else if (response.flag === 0) {
          this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
        }
        this.spin.trig_spin(false);
      },
      error => {
        this.errorService.handle_error(error);
      });
  }

  update_employee_table(form_data: object, success_message: string){
    const data = {
      data_to_update: form_data,
      condition: {
        id: [this.id_to_edit]
      }
    }

    const update_data: DBOperation = {
      table_name: 'employee_info',
      data: data,
      db: this.head_db
    }

    this.p.do_simple_update_emp_info(update_data)
      .subscribe(response => {
        if (response.no_of_rows_updated[0] == 1) {
          this.notify.openSnackBar(success_message, '', 'green-snackbar');
          this.get_employee_keys([this.id_to_edit]);
          this.onToggle('1', 0);
          $('#remove').click();
          this.ngOnInit();
        }
        else {
          this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
        }
        this.spin.trig_spin(false);
      },
      error => {
        this.errorService.handle_error(error);
      });
  }

  upload_image(){
    this.p.addfile(this.fileToUpload, this.filename)
      .subscribe(response => {}, error => {
        this.errorService.handle_error(error);
      });                      
  }

  send_tab(ctrl: number, view_id: object){
    this.view_id = view_id;
    const get_data: DBOperation = {
      table_name: 'employee_info',
      columns_to_retrieve: 'id, emp_first_name, emp_middle_name, emp_last_name, branch_code, username',
      data: [view_id],
      db: this.head_db
    }

    if (ctrl === 1){
      $('#emp_tab_1').click();
      (<HTMLInputElement>document.getElementById("toggle_btn")).value = '1';
      this.get_employee_details(get_data);
    }
    else if (ctrl === 2){
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
        
  } 

  fn_list_members() {
    this.g.get_all_employee()
      .subscribe(response => {
        const data = response.rows;
        data.forEach(element => {
          const get_data: DBOperation = {
            table_name: 'branch_details',
            data: element['branch_code'],
            condition_column: 'branch_code',
            db: 'nace_fin_head_office'
          }
          this.p.do_single_fetch_employee_with_where_condition(get_data)
            .subscribe(response => {
              const data = response.rows;
              element['branch_name'] = data[0].name;
              this.chRef.detectChanges();
              this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
            });
            this.employeeData = data;
            
        });
        
        
      });
  }

  get_employee_details(get_data: DBOperation){
    this.p.do_simple_id_read(get_data)
      .subscribe(response => {
        const data = response.row;
        const branch_code = data['branch_code'];

        this.allow_employee_keys(data['branch_code'], false);
        this.currentEmployee = data;
        this.employeeCredentialsForm.patchValue({name: this.currentEmployee['emp_first_name'] + " " + this.currentEmployee['emp_middle_name'] + " " + this.currentEmployee['emp_last_name']});
        this.set_form_variables(data);
        this.check_read_or_write(branch_code);
        this.check_credentials_mode(data['id']);
        this.get_employee_keys(data['id']);
        this.patch_form(data);
        this.spin.trig_spin(false);
      },
      error => {
        this.errorService.handle_error(error);
      });
  }

  //Makes form readonly for users in other branches
  check_read_or_write(branch_code: string) {
    if (this.is_same_branch(branch_code)){
      for (const field in this.NewEmployeesForm.controls){
        const control = this.NewEmployeesForm.get(field);
        control.enable();
      } 
    }
    else {
      for (const field in this.NewEmployeesForm.controls){
        const control = this.NewEmployeesForm.get(field);
        control.disable();
      } 
    }
  }

  send_message(type: string, get_data: DBOperation){
    this.p.do_simple_id_read_with_where_condition(get_data)
        .subscribe(response => {
          const data = response.row;
          this.id_to_edit = data['id'];

          if (type == 'sms'){
            this.send_sms.patchValue({
              send_sms_name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
              prevent_warning: '0'
            });
            this.send_email.patchValue({
              send_email_name: '',
              prevent_warning: '0'
            });
          }
          else if (type == 'email'){
            this.send_email.patchValue({
              send_email_name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
              prevent_warning: '0'
            });
            this.send_sms.patchValue({
              send_sms_name: '',
              prevent_warning: '0'
            });
          }
          this.spin.trig_spin(false);
        },
        error => {
          this.errorService.handle_error(error);
        });
  }

  set_form_variables(data){
    this.emp_image = data['emp_image'];
    this.id_to_edit = data['id'];
    this.emp_branch_code = data['branch_code'];
    this.emp_username = data['username'];
    this.get_address_from_pincode(data['permanent_pincode'], 'permanent');
    this.get_address_from_pincode(data['present_pincode'], 'present');
  }


  credential_submit() {
    if (!this.basic_function_obj.is_valid(this.employeeCredentialsForm, document))
      return;
      
    const formData = this.employeeCredentialsForm.value;
    const encrypted_key = this.encryptionService.encrypt(formData.key);
    
    const emp_credentials = {
      username: formData.username,
      password: encrypted_key
    }
  
    if (this.credentialsService.get_username_status() === 'available'){
      this.update_employee_table(emp_credentials, "Kit Issued Successfully");
      this.credentialsService.set_username_availability_status('','');
      this.credentialsService.set_username_status('taken');
      this.is_credentials_readonly = true;
      this.employeeCredentialsForm.patchValue({
        username: '',
        key: ''
      })
      
    }
    else if (this.credentialsService.get_username_status() === 'taken') {
      this.notify.openSnackBar('Username already taken', '', 'red-snackbar');
      document.getElementById('username').focus();
    }
    else if (this.credentialsService.get_username_status() === 'endWithUnderscore') {
      this.notify.openSnackBar('Username should not end with underscore', '', 'red-snackbar');
      document.getElementById('username').focus();
    }
  }

  update_username() {
    const username = this.employeeCredentialsForm.get('username').value;
    this.update_employee_table({ username: username }, 'Updated Username');
    this.credentialsService.set_username_status('taken');
    this.credentialsService.set_username_availability_status('', '');
  }

  set_emp_name(get_data: DBOperation){
    this.credentialsService.set_username_availability_status('', '');
    this.spin.trig_spin(true);

    const subscription = this.p.do_simple_id_read_with_where_condition(get_data)
      .subscribe(response => {
        const data: object = response.row;
        if (this.allow_employee_keys(data['branch_code'], true)) {
          $('#emp_tab_4').click();
          this.scroll_to_top();
          this.id_to_edit = data['id'];
          this.emp_username = data['username'];
          this.spin.trig_spin(false);
          this.employeeCredentialsForm.patchValue({
            name: data['emp_first_name'] + ' ' + data['emp_middle_name'] + ' ' + data['emp_last_name'],
            prevent_warning: '0'
          });
        }
        subscription.unsubscribe();
      },
      error => {
        this.errorService.handle_error(error);
        subscription.unsubscribe();
    });
  }

  get_employee_keys(view_id: object) {
    const fetch_data: DBOperation = {
      table_name: 'employee_info',
      columns_to_retrieve: 'username',
      data: [view_id],
      db: this.head_db
    }

    const subscription = this.p.do_simple_id_read_with_where_condition(fetch_data)
      .subscribe(response => {
        const data = response.row;
        this.employeeCredentialsForm.get('username').patchValue(data['username']);
        subscription.unsubscribe();
      },
      error => {
        this.errorService.handle_error(error);
        subscription.unsubscribe();
      });
  }

  allow_employee_keys(branch_code: string, show_error: boolean): boolean {
    const is_same_branch: boolean = this.is_same_branch(branch_code);

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
  }

  //Checks if credentials should be readonly
  check_credentials_mode(view_id: object) {
    console.log("viewid")
    console.log(view_id);
    const fetch_data: DBOperation = {
      table_name: 'employee_info',
      columns_to_retrieve: 'username',
      data: view_id,
      db: this.head_db
    }

    const subscription = this.p.do_simple_id_read_with_where_condition(fetch_data)
      .subscribe(response => {
        const data = response.row;
        this.is_credentials_readonly = (data['username']) ? true : false;
        this.get_employee_keys(view_id);
        console.log(this.is_credentials_readonly)
        subscription.unsubscribe();
      },
      error => {
        this.errorService.handle_error(error);
        subscription.unsubscribe();
      });
  }

  is_same_branch(branch_code: string): boolean {
    return (this.session_branch_code === branch_code);   
  }

  scroll_to_top() {
    document.getElementById('top').scrollIntoView(true);
  }

  z

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}