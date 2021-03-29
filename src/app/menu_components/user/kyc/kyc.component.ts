import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TabLayout } from '../../../components/tab-layout/tab-layout.model';
import { HtmlComponentFinal } from '../../../common_interfaces/html-component.model';
import { SearchBox } from '../../../common_interfaces/searchbox.model';
import { DBOperation, DBOperationBinder } from '../../../common_interfaces/db_operation.model';
import { ValidationService } from '../../../services/validation.service';
import { NotificationserviceService } from '../../../services/notificationservice.service';
import { BasicFunctionsService } from '../../../services/basic-functions.service';
import { ThirdPartyApiService } from '../../../services/third-party-api.service';
import { SpinnerService } from '../../../services/spinner.service';
import { PostingService } from '../../../services/posting.service';
import { GettingService } from '../../../services/getting.service';
import { AuthService } from '../../../services/auth.service';
import { TableData } from '../../../common_interfaces/tabledata.model';
import { DatatableTriggerService } from '../../../services/datatable-trigger.service';
import Inputmask from 'inputmask';
declare const $: any;
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})

export class KycComponent implements OnInit, AfterViewInit, OnDestroy {
  /* public formGroup = this.fb.group({
     file: [null, Validators.required]
   });*/


  switch_tab = 1;
  kyc_no_of_shares;
  s_account_id;
  id_to_edit;
  filename;
  header_array;
  customerName;
  key_id: any;
  branch_code: any;
  branch_code_sd;
  kyc_reg_face_value;
  kyc_reg_share_amount;
  color = '#EEEEEE';
  kyc_reg_vip_code_val;
  pincode_det_length;
  pincode_details = [];
  fileToUpload: File = null;
  account_name;
  ac_id;
  cus_branch_code;
  cus_image;
  cus_sign;
  bank_data;
  // ui data
  tab_layout_ui_data_to_send: TabLayout = {
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

  registrationForm = this.fb.group(
    {
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
    }
  );


  kyc_mem_reg_html_elements: HtmlComponentFinal[] = [
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
  kyc_reg_custom_element_id_1_select_dropdown_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_id_1_select_value_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_id_1_select_value_data_extra: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_id_2_select_dropdown_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_id_2_select_value_data_extra: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_id_2_select_value_data: HtmlComponentFinal =
    {
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
    }


  kyc_reg_custom_element_4_select_dropdown_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_4_select_value_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_5_select_dropdown_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_5_select_value_data: HtmlComponentFinal =
    {
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
    }
  share_details_html_elements: HtmlComponentFinal[] = [
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
        // {
        //      label: 'Accounts',
        //      custom_element: true,
        //      custom_element_identification: 'account_list',
        //      need_block: false,
        //      line_break_value : '4',
        //      is_element_required: true,
        //   }
      ]
    }];

  kyc_reg_custom_element_6_select_dropdown_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_6_select_value_data: HtmlComponentFinal =
    {
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
    }

  kyc_reg_custom_element_7_present_address: HtmlComponentFinal =
    {
      single_element: true,
      textarea: true,
      placeholder: 'Please Enter Details',
      required: false,
      classes: ['kyc_reg_present_address'],
      readonly: false,
      name: 'kyc_reg_present_address'
    }

  // allignment data

  search_box: SearchBox = {
    placeholder: 'Search id, first, middle or last names',
    searchbox_id: 'kyc_search',
    search_tablename: 'customer_info',
    search_db: this.authservice.getHeadDatabaseSession(),
    search_columnname: 'id~cus_first_name~cus_last_name~aadhar~id1_value~email~contact1_value',
    view_columnname: 'id~cus_first_name~cus_middle_name~cus_last_name',

  };
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
  }
  send_sms = this.fb.group(
    {
      send_sms_name: [''],
      send_sms_confirm: [''],
      send_sms_content: [''],
      prevent_warning: ['']
    }
  );
  send_email = this.fb.group(
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
  //  this is for setting default  validation at first load
  kyc_reg_id_1_select_dropdown_val = '0';
  kyc_reg_id_2_select_dropdown_val = '-1';
  kyc_reg_tel_type1_select_dropdown_val = '01';
  kyc_reg_tel_type2_select_dropdown_val = '-1';
  kyc_reg_tel_type3_select_dropdown_val = '-1';

  // tslint:disable-next-line:max-line-length
  constructor(public validation_obj: ValidationService, public notify: NotificationserviceService, public basic_function_obj: BasicFunctionsService, public third_party_api_obj: ThirdPartyApiService, public spin: SpinnerService, public p: PostingService, private fb: FormBuilder, public g: GettingService, public dt_trig: DatatableTriggerService, private chRef: ChangeDetectorRef, public authservice: AuthService) { }

  get_accounts() {
  const get_account_data: DBOperationBinder = {
      table_name: 'accounts',
      data: ['4~645~'],
      db : this.authservice.getDatabaseSession()
    }
    this.p.do_get_all_banks_by_link(get_account_data)
      .subscribe(response_bank => {
        this.bank_data = response_bank.rows;
      });
    const resolver = '4~107';
    const insert_data_binder: DBOperationBinder = {
      table_name: 'key_map',
      link: resolver
    }
    this.p.do_get_binder_session(insert_data_binder)
      .subscribe(response => {
        const data = response.rows[0];

        // const account_name = data['account_name'];
        // const ac_id = data['ac_id'];
        const binder = data['binder'];
        const target_link = '4~107~';
        const insert_data: DBOperationBinder = {
          table_name: 'accounts',
          data: binder,
          link: target_link
        }
        this.p.do_get_target_link_session(insert_data)
          .subscribe(response_target_link => {
            const data_target_link = response_target_link.rows[0];

            this.account_name = data_target_link['account_name'];
            this.ac_id = data_target_link['id'];


          });
      });

  }
  get_html_events(event_obj) {
    if (event_obj.uniq_identity === 'kyc_reg_image') {
      if (event_obj.e_type === 'change') {
        this.fileToUpload = event_obj.value.item(0);
        this.filename = Date.now() + '_' + this.fileToUpload.name;
      }
    }
    if (event_obj.uniq_identity === 'kyc_reg_email') {

      const feed = this.validation_obj.check_email(event_obj.value);
      if (feed === false) {
        if (event_obj.e_type === 'blur') {
          if ($('.kyc_reg_email').val()) { this.notify.openSnackBar('Check the Email format', 'Close', 'red-snackbar'); }

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
      } else
        if (event_obj.value === '01') {
          this.kyc_reg_vip_code_val = '01';
          this.color = '#B4D8ED';
        }

    }
    if (event_obj.uniq_identity === 'kyc_reg_pan') {
      if (event_obj.e_type === 'keyup') {
        $('.kyc_reg_pan').val($('.kyc_reg_pan').val().toUpperCase());
      }
      const feed = this.validation_obj.check_pan_number(event_obj.value);
      if (feed === false) {
        if (event_obj.e_type === 'blur') {
          if ($('.kyc_reg_pan').val()) { this.notify.openSnackBar('Check the PAN format', 'Close', 'red-snackbar'); }

          this.registrationForm.patchValue({
            kyc_reg_pan: ''
          });
        }
      }

    } else
      if (event_obj.uniq_identity === 'kyc_reg_adhar') {
        const feed = this.validation_obj.check_aadhar(event_obj.value);
        if (feed === false) {
          if (event_obj.e_type === 'blur') {
            if ($('.kyc_reg_adhar').val()) { this.notify.openSnackBar('Check the AADHAR format', 'Close', 'red-snackbar'); }

            this.registrationForm.patchValue({
              kyc_reg_adhar: ''
            });
          }
        }

      } else
        if (event_obj.uniq_identity === 'kyc_reg_dob') {
          if (event_obj.e_type === 'datechange') {
            const feed1 = this.validation_obj.check_dob(event_obj.value);
            if (feed1 === true) {
              const feed = this.basic_function_obj.get_age(event_obj.value);
              if (typeof feed === 'number') {
                this.registrationForm.patchValue({
                  kyc_reg_age: feed
                });
              } else {
                this.registrationForm.patchValue({
                  kyc_reg_age: ''
                });
              }
            } else {
              this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
              this.registrationForm.patchValue({
                kyc_reg_dob: ''
              });
            }
          }
        } else

          if (event_obj.uniq_identity === 'kyc_reg_ifsc') {
            if (event_obj.e_type === 'blur') {
              const feed = this.validation_obj.check_ifsc(event_obj.value);
              if (feed === false) {
                if ($('.kyc_reg_ifsc').val()) { this.notify.openSnackBar('Check the IFSC format', 'Close', 'red-snackbar'); }
                $('.kyc_reg_ifsc').val('');
                $('.kyc_reg_bankers_name').val('');
                $('.kyc_reg_branch').val('');
                $('.kyc_reg_bank_contact').val('');
                $('.kyc_reg_bank_address').val('');
              } else {
                this.spin.trig_spin(true);
                this.third_party_api_obj.get_bank_details(event_obj.value)
                  .subscribe(response => {
                    this.registrationForm.patchValue({
                      kyc_reg_bankers_name: response.BANK,
                      kyc_reg_branch: response.BRANCH,
                      kyc_reg_bank_contact: response.CONTACT,
                      kyc_reg_bank_address: response.ADDRESS
                    });

                    this.spin.trig_spin(false);
                  }, error => {
                    this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                    this.spin.trig_spin(false);
                  });
              }
            } else if (event_obj.e_type === 'keyup') {
              $('.kyc_reg_ifsc').val($('.kyc_reg_ifsc').val().toUpperCase());
            }
          }
    if (event_obj.uniq_identity === 'kyc_reg_pincode') {
      if (event_obj.e_type === 'blur') {
        this.spin.trig_spin(true);
        this.third_party_api_obj.get_pincode_details(event_obj.value)
          .subscribe(response => {
            this.pincode_details = response[0]['PostOffice'];
            if (this.pincode_details) {
              this.pincode_det_length = this.pincode_details.length;
            } else if (response[0]['Status'] !== 200) {
              this.notify.openSnackBar('The requested resource is not found', 'Close', 'red-snackbar');
              this.spin.trig_spin(false);

            } else if (this.pincode_det_length === 1) {

              if (this.pincode_details === null) {
                this.notify.openSnackBar('Pincode Not found', 'Close', 'red-snackbar');
                this.spin.trig_spin(false);
              } else {
                this.registrationForm.patchValue({
                  kyc_reg_area: this.pincode_details[0]['Name'],
                  kyc_reg_district: this.pincode_details[0]['District'],
                  kyc_reg_city: this.pincode_details[0]['Block'],
                  kyc_reg_state: this.pincode_details[0]['State']
                });
              }
            } else {
              this.registrationForm.patchValue({
                kyc_reg_district: '',
                kyc_reg_city: '',
                kyc_reg_state: ''
              });
            }
            this.spin.trig_spin(false);
          }
            , error => {
              this.notify.openSnackBar(error, 'Close', 'red-snackbar');

            });

      }
    }
    if (event_obj.uniq_identity === 'kyc_reg_pincode_present') {
      if (event_obj.e_type === 'blur') {

        this.spin.trig_spin(true);
        this.third_party_api_obj.get_pincode_details(event_obj.value)
          .subscribe(response => {
            this.pincode_details = response[0]['PostOffice'];
            if (this.pincode_details) {
              this.pincode_det_length = this.pincode_details.length;
            } else if (response[0]['Status'] !== 200) {
              this.notify.openSnackBar('The requested resource is not found', 'Close', 'red-snackbar');
              this.spin.trig_spin(false);

            } else if (this.pincode_det_length === 1) {
              console.log("botom if");
              if (this.pincode_details === null) {
                
                this.notify.openSnackBar('Pincode Not found', 'Close', 'red-snackbar');
                this.spin.trig_spin(false);
              } else {
                this.registrationForm.patchValue({
                  kyc_reg_area_present: this.pincode_details[0]['Name'],
                  kyc_reg_district_present: this.pincode_details[0]['District'],
                  kyc_reg_city_present: this.pincode_details[0]['Block'],
                  kyc_reg_state_present: this.pincode_details[0]['State']
                });
              }
            } else {
              this.registrationForm.patchValue({
                kyc_reg_district_present: '',
                kyc_reg_city_present: '',
                kyc_reg_state_present: ''
              });
            }
            this.spin.trig_spin(false);
          }
            , error => {
              this.notify.openSnackBar(error, 'Close', 'red-snackbar');

            });
      }
    }
  }

  get_pincode_details() {

    const kyc_reg_area_value = this.registrationForm.get('kyc_reg_area').value;
    const kyc_reg_area_value_Arr = kyc_reg_area_value.split('~');
    this.registrationForm.patchValue({
      kyc_reg_district: this.pincode_details[kyc_reg_area_value_Arr[0]]['District'],
      kyc_reg_city: this.pincode_details[kyc_reg_area_value_Arr[0]]['Block'],
      kyc_reg_state: this.pincode_details[kyc_reg_area_value_Arr[0]]['State']
    });
  }
  get_pincode_details_present() {

    const kyc_reg_area_present_value = this.registrationForm.get('kyc_reg_area_present').value;
    const kyc_reg_area_present_value_Arr = kyc_reg_area_present_value.split('~');
    this.registrationForm.patchValue({
      kyc_reg_district_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['District'],
      kyc_reg_city_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['Block'],
      kyc_reg_state_present: this.pincode_details[kyc_reg_area_present_value_Arr[0]]['State']
    });
  }

  dobcheck() {
    const kyc_dob = this.registrationForm.get('kyc_reg_dob').value;
    const feed1 = this.validation_obj.check_dob(kyc_dob);

    if (feed1 === true) {
      const feed = this.basic_function_obj.get_age(kyc_dob);
      if (typeof feed === 'number') {
        this.registrationForm.patchValue({
          kyc_reg_age: feed
        });
      } else {
        this.registrationForm.patchValue({
          kyc_reg_age: ''
        });
      }
    } else {
      this.notify.openSnackBar('Check the DOB format', 'Close', 'red-snackbar');
      this.registrationForm.patchValue({
        kyc_reg_dob: ''
      });
    }
  }

  get_html_events_custom(event_obj) {
    if (event_obj.uniq_identity === 'kyc_reg_shares') {

      if (event_obj.e_type === 'blur') {

        const kyc_reg_share_amount_final = event_obj.value * $('.kyc_reg_face_value').val();

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
      } else
        if (event_obj.value === '1') {
          this.kyc_reg_id_1_select_dropdown_val = '1';
          $('.kyc_reg_id_1_select_value_extra').hide();
          this.registrationForm.patchValue({
            kyc_reg_id_1_select_value_extra: ''
          });
        } else
          if (event_obj.value === '2') {
            this.kyc_reg_id_1_select_dropdown_val = '2';
            $('.kyc_reg_id_1_select_value_extra').hide();
            this.registrationForm.patchValue({
              kyc_reg_id_1_select_value_extra: ''
            });
          } else
            if (event_obj.value === '3') {
              this.kyc_reg_id_1_select_dropdown_val = '-1';
              $('.kyc_reg_id_1_select_value_extra').show();

            }

    } else
      if (event_obj.uniq_identity === 'kyc_reg_id_1_select_value') {
        if (1) {
          if (this.kyc_reg_id_1_select_dropdown_val === '0') {
            const feed = this.validation_obj.check_indian_voter(event_obj.value);
            if (feed === false) {
              if (event_obj.e_type === 'blur') {
                if ($('.kyc_reg_id_1_select_value').val()) { this.notify.openSnackBar('Check the voter ID format', '', 'red-snackbar'); }
                this.registrationForm.patchValue({
                  kyc_reg_id_1_select_value: ''
                });
              }
            }
          } else
            if (this.kyc_reg_id_1_select_dropdown_val === '1') {
              const feed = this.validation_obj.check_passport(event_obj.value);
              if (feed === false) {
                if (event_obj.e_type === 'blur') {
                  if ($('.kyc_reg_id_1_select_value').val()) { this.notify.openSnackBar('Check the passport format', '', 'red-snackbar'); }
                  this.registrationForm.patchValue({
                    kyc_reg_id_1_select_value: ''
                  });
                }

              }
            } else
              if (this.kyc_reg_id_1_select_dropdown_val === '2') {
                const feed = this.validation_obj.check_indian_driving_license(event_obj.value);
                if (feed === false) {
                  if (event_obj.e_type === 'blur') {
                    if ($('.kyc_reg_id_1_select_value').val()) { this.notify.openSnackBar('Check the license format', '', 'red-snackbar'); }
                    this.registrationForm.patchValue({
                      kyc_reg_id_1_select_value: ''
                    });
                  }
                }
              }
        }
      } else
        if (event_obj.uniq_identity === 'kyc_reg_id_2_select_dropdown') {
          $('.kyc_reg_id_2_select_value').val('');

          if (event_obj.value === '0') {
            this.kyc_reg_id_2_select_dropdown_val = '0';
            $('.kyc_reg_id_2_select_value_extra').hide();
            $('.kyc_reg_id_2_select_value').show();


          } else
            if (event_obj.value === '1') {
              this.kyc_reg_id_2_select_dropdown_val = '1';
              $('.kyc_reg_id_2_select_value_extra').hide();
              $('.kyc_reg_id_2_select_value').show();


            } else
              if (event_obj.value === '2') {
                this.kyc_reg_id_2_select_dropdown_val = '2';
                $('.kyc_reg_id_2_select_value_extra').hide();
                $('.kyc_reg_id_2_select_value').show();


              } else
                if (event_obj.value === '3') {
                  this.kyc_reg_id_2_select_dropdown_val = '-1';
                  $('.kyc_reg_id_2_select_value_extra').show();
                  $('.kyc_reg_id_2_select_value').show();

                } else
                  if (event_obj.value === '') {
                    this.kyc_reg_id_2_select_dropdown_val = '-1';
                    $('.kyc_reg_id_2_select_value').hide();
                    $('.kyc_reg_id_2_select_value_extra').hide();


                  }

        } else
          if (event_obj.uniq_identity === 'kyc_reg_id_2_select_value') {
            if (1) {
              if (this.kyc_reg_id_2_select_dropdown_val === '0') {
                const feed = this.validation_obj.check_indian_voter(event_obj.value);
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
              } else
                if (this.kyc_reg_id_2_select_dropdown_val === '1') {
                  const feed = this.validation_obj.check_passport(event_obj.value);
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
                } else
                  if (this.kyc_reg_id_2_select_dropdown_val === '2') {
                    const feed = this.validation_obj.check_indian_driving_license(event_obj.value);
                    if (feed === false) {
                      if (event_obj.e_type === 'blur') {
                        // tslint:disable-next-line: max-line-length
                        if ($('.kyc_reg_id_2_select_value').val()) { this.notify.openSnackBar('Check the license format', '', 'red-snackbar'); }
                        this.registrationForm.patchValue({
                          kyc_reg_id_2_select_value: ''
                        });
                      }
                    }
                  }
            }
          } else

            if (event_obj.uniq_identity === 'kyc_reg_tel_type1_select_dropdown') {

              this.registrationForm.patchValue({
                kyc_reg_tel_type1_select_value: ''
              });

              if (event_obj.value === '00') {
                this.kyc_reg_tel_type1_select_dropdown_val = '00';
              } else
                if (event_obj.value === '01') {
                  this.kyc_reg_tel_type1_select_dropdown_val = '01';
                } else
                  if (event_obj.value === '02') {
                    this.kyc_reg_tel_type1_select_dropdown_val = '02';
                  } else
                    if (event_obj.value === '03') {
                      this.kyc_reg_tel_type1_select_dropdown_val = '03';
                    }

            } else
              if (event_obj.uniq_identity === 'kyc_reg_tel_type1_select_value') {
                if (event_obj.e_type === 'blur') {

                  if (this.kyc_reg_tel_type1_select_dropdown_val === '01') {
                    const feed = this.validation_obj.check_mobile(event_obj.value);
                    if (feed === false) {

                      if (event_obj.e_type === 'blur') {
                        // tslint:disable-next-line:max-line-length
                        if ($('.kyc_reg_tel_type1_select_value').val()) { this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar'); }
                        this.registrationForm.patchValue({
                          kyc_reg_tel_type1_select_value: ''
                        });
                      }

                    }
                  } else
                    if (this.kyc_reg_tel_type1_select_dropdown_val === '02') {
                      const feed = this.validation_obj.check_telephone(event_obj.value);
                      if (feed === false) {
                        if (event_obj.e_type === 'blur') {
                          // tslint:disable-next-line: max-line-length
                          if ($('.kyc_reg_tel_type1_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                          this.registrationForm.patchValue({
                            kyc_reg_tel_type1_select_value: ''
                          });
                        }

                      }
                    } else
                      if (this.kyc_reg_tel_type1_select_dropdown_val === '03') {
                        const feed = this.validation_obj.check_telephone(event_obj.value);
                        if (feed === false) {
                          if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line: max-line-length
                            if ($('.kyc_reg_tel_type1_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                            this.registrationForm.patchValue({
                              kyc_reg_tel_type1_select_value: ''
                            });
                          }

                        }
                      }
                }
              } else

                if (event_obj.uniq_identity === 'kyc_reg_tel_type2_select_dropdown') {

                  this.registrationForm.patchValue({
                    kyc_reg_tel_type2_select_value: ''
                  });

                  if (event_obj.value === '00') {
                    this.kyc_reg_tel_type2_select_dropdown_val = '00';
                    $('.kyc_reg_tel_type2_select_value').show();

                  } else
                    if (event_obj.value === '01') {
                      this.kyc_reg_tel_type2_select_dropdown_val = '01';
                      $('.kyc_reg_tel_type2_select_value').show();

                    } else
                      if (event_obj.value === '02') {
                        this.kyc_reg_tel_type2_select_dropdown_val = '02';
                        $('.kyc_reg_tel_type2_select_value').show();

                      } else
                        if (event_obj.value === '03') {
                          this.kyc_reg_tel_type2_select_dropdown_val = '03';
                          $('.kyc_reg_tel_type2_select_value').show();

                        } else
                          if (event_obj.value === '') {
                            this.kyc_reg_tel_type2_select_dropdown_val = '-1';
                            $('.kyc_reg_tel_type2_select_value').hide();

                          }

                } else
                  if (event_obj.uniq_identity === 'kyc_reg_tel_type2_select_value') {
                    if (1) {

                      if (this.kyc_reg_tel_type2_select_dropdown_val === '01') {
                        const feed = this.validation_obj.check_mobile(event_obj.value);
                        if (feed === false) {
                          if (event_obj.e_type === 'blur') {
                            // tslint:disable-next-line:max-line-length
                            if ($('.kyc_reg_tel_type2_select_value').val()) { this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar') }
                            this.registrationForm.patchValue({
                              kyc_reg_tel_type2_select_value: ''
                            });
                          }

                        }
                      } else
                        if (this.kyc_reg_tel_type2_select_dropdown_val === '02') {
                          const feed = this.validation_obj.check_telephone(event_obj.value);
                          if (feed === false) {
                            if (event_obj.e_type === 'blur') {
                              // tslint:disable-next-line: max-line-length
                              if ($('.kyc_reg_tel_type2_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                              this.registrationForm.patchValue({
                                kyc_reg_tel_type2_select_value: ''
                              });
                            }
                          }
                        } else
                          if (this.kyc_reg_tel_type2_select_dropdown_val === '03') {
                            const feed = this.validation_obj.check_telephone(event_obj.value);
                            if (feed === false) {
                              if (event_obj.e_type === 'blur') {
                                // tslint:disable-next-line: max-line-length
                                if ($('.kyc_reg_tel_type2_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                                this.registrationForm.patchValue({
                                  kyc_reg_tel_type2_select_value: ''
                                });
                              }
                            }
                          }
                    }
                  } else

                    if (event_obj.uniq_identity === 'kyc_reg_tel_type3_select_dropdown') {

                      this.registrationForm.patchValue({
                        kyc_reg_tel_type3_select_value: ''
                      });

                      if (event_obj.value === '00') {
                        this.kyc_reg_tel_type3_select_dropdown_val = '00';
                        $('.kyc_reg_tel_type3_select_value').show();
                      } else
                        if (event_obj.value === '01') {
                          this.kyc_reg_tel_type3_select_dropdown_val = '01';
                          $('.kyc_reg_tel_type3_select_value').show();

                        } else
                          if (event_obj.value === '02') {
                            this.kyc_reg_tel_type3_select_dropdown_val = '02';
                            $('.kyc_reg_tel_type3_select_value').show();

                          } else
                            if (event_obj.value === '03') {
                              this.kyc_reg_tel_type3_select_dropdown_val = '03';
                              $('.kyc_reg_tel_type3_select_value').show();

                            } else
                              if (event_obj.value === '') {
                                this.kyc_reg_tel_type3_select_dropdown_val = '-1';
                                $('.kyc_reg_tel_type3_select_value').hide();

                              }

                    } else
                      if (event_obj.uniq_identity === 'kyc_reg_tel_type3_select_value') {
                        if (1) {

                          if (this.kyc_reg_tel_type3_select_dropdown_val === '01') {
                            const feed = this.validation_obj.check_mobile(event_obj.value);
                            if (feed === false) {
                              if (event_obj.e_type === 'blur') {
                                // tslint:disable-next-line:max-line-length
                                if ($('.kyc_reg_tel_type3_select_value').val()) { this.notify.openSnackBar('Check the mobile number format', '', 'red-snackbar'); }
                                this.registrationForm.patchValue({
                                  kyc_reg_tel_type3_select_value: ''
                                });
                              }
                            }
                          } else
                            if (this.kyc_reg_tel_type3_select_dropdown_val === '02') {
                              const feed = this.validation_obj.check_telephone(event_obj.value);
                              if (feed === false) {
                                if (event_obj.e_type === 'blur') {
                                  // tslint:disable-next-line: max-line-length
                                  if ($('.kyc_reg_tel_type3_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                                  this.registrationForm.patchValue({
                                    kyc_reg_tel_type3_select_value: ''
                                  });
                                }
                              }
                            } else
                              if (this.kyc_reg_tel_type3_select_dropdown_val === '03') {
                                const feed = this.validation_obj.check_telephone(event_obj.value);
                                if (feed === false) {
                                  if (event_obj.e_type === 'blur') {
                                    // tslint:disable-next-line: max-line-length
                                    if ($('.kyc_reg_tel_type3_select_value').val()) { this.notify.openSnackBar('Check the landline format', '', 'red-snackbar'); }
                                    this.registrationForm.patchValue({
                                      kyc_reg_tel_type3_select_value: ''
                                    });
                                  }

                                }
                              }
                        }
                      }
  }

  form_submit(formDirective: FormGroupDirective) {
    this.notify.askForConfirmation().then((trig: boolean) => {

      if (trig === true) {


        this.p.addfile(this.fileToUpload, this.filename)
          .subscribe(response => {
            // this.spin.trig_spin(false);
          }, error => {
            this.notify.openSnackBar(error, 'Close', 'red-snackbar');
            this.spin.trig_spin(false);
          });
        if (this.registrationForm.valid) {
          this.spin.trig_spin(true);
          const form_data = this.registrationForm.value;

          const final_form_data = {
            'date': this.basic_function_obj.get_datetime(),
            'accounts': form_data.kyc_reg_accounts,
            'title': form_data.kyc_reg_title,
            'cus_first_name': form_data.kyc_reg_first_name,
            'cus_middle_name': form_data.kyc_reg_middle_name,
            'cus_last_name': form_data.kyc_reg_last_name,
            'gender': form_data.kyc_reg_gender,
            'occupation': form_data.kyc_reg_occupation,
            'id1': form_data.kyc_reg_id_1_select_dropdown,
            'id1_type': form_data.kyc_reg_id_1_select_value_extra,
            'id1_value': form_data.kyc_reg_id_1_select_value,
            'id2': form_data.kyc_reg_id_2_select_dropdown,
            'id2_type': form_data.kyc_reg_id_2_select_value_extra,
            'id2_value': form_data.kyc_reg_id_2_select_value,
            'address_1': form_data.kyc_reg_address,
            // 'address_cat' : form_data.kyc_reg_addr_cat_select_dropdown,
            'address_2': form_data.kyc_reg_present_address,
            'res_code': form_data.kyc_reg_res_code_select_dropdown,
            'h_coordinate': form_data.kyc_reg_h_coordinate,
            'v_coordinate': form_data.kyc_reg_v_coordinate,
            'pincode': form_data.kyc_reg_pincode,
            'state': form_data.kyc_reg_state,
            'district': form_data.kyc_reg_district,
            'city_town': form_data.kyc_reg_city,
            'area': form_data.kyc_reg_area,
            'present_pincode': form_data.kyc_reg_pincode_present,
            'present_state': form_data.kyc_reg_state_present,
            'present_district': form_data.kyc_reg_district_present,
            'present_city_town': form_data.kyc_reg_city_present,
            'present_area': form_data.kyc_reg_area_present,
            'email': form_data.kyc_reg_email,
            'contact1': form_data.kyc_reg_tel_type1_select_dropdown,
            'contact1_value': form_data.kyc_reg_tel_type1_select_value,
            'contact2': form_data.kyc_reg_tel_type2_select_dropdown,
            'contact2_value': form_data.kyc_reg_tel_type2_select_value,
            'contact3': form_data.kyc_reg_tel_type3_select_dropdown,
            'contact3_value': form_data.kyc_reg_tel_type3_select_value,
            'no_of_shares': form_data.kyc_reg_share_amount,
            // 'age': form_data.kyc_reg_age,
            // tslint:disable-next-line:max-line-length
            // 'dob' :  (new Date(form_data.kyc_reg_dob).getMonth() + 1) + '/' + new Date(form_data.kyc_reg_dob).getDate() +  '/' +  new Date(form_data.kyc_reg_dob).getFullYear() ,
            'dob': form_data.kyc_reg_dob,
            'pan_card': form_data.kyc_reg_pan,
            'aadhar': form_data.kyc_reg_adhar,
            'cus_status': form_data.kyc_reg_status,
            'vip_code': form_data.kyc_reg_vip_code,
            'account_no': form_data.kyc_reg_account_no,
            'bank_ifsc': form_data.kyc_reg_ifsc,
            'bank_name': form_data.kyc_reg_bankers_name,
            'bank_branch': form_data.kyc_reg_branch,
            'bank_contact': form_data.kyc_reg_bank_contact,
            'bank_address': form_data.kyc_reg_bank_address,
            'nominee_name': form_data.kyc_reg_nominee_name,
            'nominee_relation': form_data.kyc_reg_nominee_relation_dropdown,
            'nominee_age': form_data.kyc_reg_nominee_age,
            'nominee_gender': form_data.kyc_reg_nominee_gender,
            'nominee_address': form_data.kyc_reg_nominee_address,
            'cus_image': this.filename,
            'branch_code': this.authservice.getBranchCodeSession()
          };
          const final_form_data_edit = {
            'accounts': form_data.kyc_reg_accounts,
            'title': form_data.kyc_reg_title,
            'cus_first_name': form_data.kyc_reg_first_name,
            'cus_middle_name': form_data.kyc_reg_middle_name,
            'cus_last_name': form_data.kyc_reg_last_name,
            'gender': form_data.kyc_reg_gender,
            'occupation': form_data.kyc_reg_occupation,
            'id1': form_data.kyc_reg_id_1_select_dropdown,
            'id1_type': form_data.kyc_reg_id_1_select_value_extra,
            'id1_value': form_data.kyc_reg_id_1_select_value,
            'id2': form_data.kyc_reg_id_2_select_dropdown,
            'id2_type': form_data.kyc_reg_id_2_select_value_extra,
            'id2_value': form_data.kyc_reg_id_2_select_value,
            'address_1': form_data.kyc_reg_address,
            // 'address_cat' : form_data.kyc_reg_addr_cat_select_dropdown,
            'address_2': form_data.kyc_reg_present_address,
            'res_code': form_data.kyc_reg_res_code_select_dropdown,
            'h_coordinate': form_data.kyc_reg_h_coordinate,
            'v_coordinate': form_data.kyc_reg_v_coordinate,
            'pincode': form_data.kyc_reg_pincode,
            'state': form_data.kyc_reg_state,
            'district': form_data.kyc_reg_district,
            'city_town': form_data.kyc_reg_city,
            'area': form_data.kyc_reg_area,
            'present_pincode': form_data.kyc_reg_pincode_present,
            'present_state': form_data.kyc_reg_state_present,
            'present_district': form_data.kyc_reg_district_present,
            'present_city_town': form_data.kyc_reg_city_present,
            'present_area': form_data.kyc_reg_area_present,
            'email': form_data.kyc_reg_email,
            'contact1': form_data.kyc_reg_tel_type1_select_dropdown,
            'contact1_value': form_data.kyc_reg_tel_type1_select_value,
            'contact2': form_data.kyc_reg_tel_type2_select_dropdown,
            'contact2_value': form_data.kyc_reg_tel_type2_select_value,
            'contact3': form_data.kyc_reg_tel_type3_select_dropdown,
            'contact3_value': form_data.kyc_reg_tel_type3_select_value,
            'no_of_shares': form_data.kyc_reg_share_amount,
            // 'age': form_data.kyc_reg_age,
            // tslint:disable-next-line:max-line-length
            // 'dob' :  (new Date(form_data.kyc_reg_dob).getMonth() + 1) + '/' + new Date(form_data.kyc_reg_dob).getDate() +  '/' +  new Date(form_data.kyc_reg_dob).getFullYear() ,
            'dob': form_data.kyc_reg_dob,
            'pan_card': form_data.kyc_reg_pan,
            'aadhar': form_data.kyc_reg_adhar,
            'cus_status': form_data.kyc_reg_status,
            'vip_code': form_data.kyc_reg_vip_code,
            'account_no': form_data.kyc_reg_account_no,
            'bank_ifsc': form_data.kyc_reg_ifsc,
            'bank_name': form_data.kyc_reg_bankers_name,
            'bank_branch': form_data.kyc_reg_branch,
            'bank_contact': form_data.kyc_reg_bank_contact,
            'bank_address': form_data.kyc_reg_bank_address,
            'nominee_name': form_data.kyc_reg_nominee_name,
            'nominee_relation': form_data.kyc_reg_nominee_relation_dropdown,
            'nominee_age': form_data.kyc_reg_nominee_age,
            'nominee_gender': form_data.kyc_reg_nominee_gender,
            'nominee_address': form_data.kyc_reg_nominee_address,
            'cus_image': this.filename,
            'branch_code': this.authservice.getBranchCodeSession()
          };

          const insert_data: DBOperation = {
            table_name: 'customer_info',
            data: final_form_data,
            db: this.authservice.getHeadDatabaseSession()
          }
          // tslint:disable-next-line:triple-equals
          if (this.switch_tab == 0) {
            this.p.do_single_insertion_cus_info(insert_data)
              .subscribe(response => {
                if (response.flag === 1) {
                  this.notify.openSnackBarSuccess();
                  $('#remove').click();
                } else if (response.flag === 0) {
                  this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
                }
                this.spin.trig_spin(false);

                const final_form_data_accounts = {
                  // tslint:disable-next-line: max-line-length
                  'account_name': 'SD/' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_last_name,
                  'type': '2',
                  'cus_id': response.inserted_id,
                  'link': '0'

                }
                const insert_data_accounts: DBOperation = {
                  table_name: 'accounts',
                  data: final_form_data_accounts,
                  db: this.authservice.getDatabaseSession()
                }
                this.p.do_single_insertion(insert_data_accounts)
                  .subscribe(response_accounts => {
                    this.s_account_id = response_accounts.inserted_id;
                    const target_link = '3~5';
                    const insert_data_key_map: DBOperationBinder = {
                      table_name: 'key_map',
                      link: target_link
                    }
                    this.p.do_get_binder_session(insert_data_key_map)
                      .subscribe(response_binder => {
                        const data_binder = response_binder.rows[0];
                        const key_id = data_binder['key_id'];
                        const binder = data_binder['binder'];
                        const link = '3~5~' + binder + '~' + this.s_account_id;
                        this.g.do_get_max_sd_id()
                          .subscribe(response_sd_id => {
                            const data_sd_id = response_sd_id.rows[0];
                            const seq = data_sd_id['seq'];
                            const base = 100;
                            let seq_new;
                            if (seq === null) {
                              seq_new = base;
                            } else {
                              seq_new = base + parseFloat(seq);

                            }
                            const branch_code = this.authservice.getBranchCodeSession();
                            let branch_code_sd;

                            if ((this.branch_code) / 10 === 0) {
                              branch_code_sd = '0' + branch_code;
                            } else {
                              branch_code_sd = branch_code;
                            }
                            const final_form_data_sd_accounts = {
                              'sd_account_no': 'SD' + branch_code_sd + this.s_account_id + '000' + seq_new,
                              'cus_id': response.inserted_id,
                              'sd_avail_bal': '0'

                            }
                            const insert_data_sd_accounts: DBOperation = {
                              table_name: 'sd_account',
                              data: final_form_data_sd_accounts,
                              db: this.authservice.getDatabaseSession()
                            }
                            this.p.do_single_insertion(insert_data_sd_accounts)
                              .subscribe(response2 => {
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
                                const final_form_data_edit_accounts = {

                                  'link': link
                                }
                                const data_accounts = {
                                  data_to_update: final_form_data_edit_accounts,
                                  condition: {
                                    id: [this.s_account_id]
                                  }
                                }
                                const update_data_accounts: DBOperation = {
                                  table_name: 'accounts',
                                  data: data_accounts,
                                  db: this.authservice.getDatabaseSession()
                                }
                                this.p.do_simple_update(update_data_accounts)
                                  .subscribe(response_update_accounts => {
                                    // tslint:disable-next-line:triple-equals
                                  });
                              },
                                error => {
                                  console.log(error);
                                  this.spin.trig_spin(false);
                                });
                          },
                            error => {
                              console.log(error);
                              this.spin.trig_spin(false);
                            });
                      },
                        error => {
                          console.log(error);
                          this.spin.trig_spin(false);
                        });

                  },
                    error => {
                      console.log(error);
                      this.spin.trig_spin(false);
                    });
                const final_form_data_accounts_SH = {
                  // tslint:disable-next-line: max-line-length
                  'account_name': 'SH/' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_last_name,
                  'type': '2',
                  'cus_id': response.inserted_id,
                  'link': '0'

                }
                const insert_data_accounts_SH: DBOperation = {
                  table_name: 'accounts',
                  data: final_form_data_accounts_SH,
                  db: this.authservice.getHeadDatabaseSession()
                }
                this.p.do_single_insertion_cus_info(insert_data_accounts_SH)
                  .subscribe(response_data_SH => {
                    const s_account_id_SH = response_data_SH.inserted_id;
                    const target_link = '1~2';
                    const insert_data_key_map: DBOperationBinder = {
                      table_name: 'key_map',
                      link: target_link,
                    }
                    this.p.do_get_binder_session(insert_data_key_map)
                      .subscribe(response_binder => {
                        const data_binder = response_binder.rows[0];
                        const key_id = data_binder['key_id'];
                        const binder = data_binder['binder'];
                        const link = '1~2~' + binder + '~' + s_account_id_SH;

                        const final_form_data_SHaccounts = {

                          'link': link
                        }
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
                        const data_SHaccounts = {
                          data_to_update: final_form_data_SHaccounts,
                          condition: {
                            id: [s_account_id_SH]
                          }
                        }
                        const update_data_SHaccounts: DBOperation = {
                          table_name: 'accounts',
                          data: data_SHaccounts,
                          db: this.authservice.getHeadDatabaseSession()
                        }
                        this.p.do_simple_update_cus_info(update_data_SHaccounts)
                          .subscribe(response_update_data_SHaccounts => {
                            // tslint:disable-next-line:triple-equals
                          });

                      },
                        error => {
                          console.log(error);
                          this.spin.trig_spin(false);
                        });
                        const get_data1: DBOperation = {
                          table_name: 'users',
                          data: [this.authservice.getHeadDatabaseSession()],
                          condition_column: 'db',
                          db: 'nace_fin_users'
                        }
                        this.p.do_single_fetch_with_where_condition(get_data1)
                          .subscribe(branch_response => {
                            const data1 = branch_response.rows;
                            console.log(data1);
                            const head_branch_code = data1[0].branch_code;
                            const head_branch_session = this.authservice.getBranchCodeSession();
                            if (head_branch_code != head_branch_session) {
                        
                        const multibranch_details1: DBOperation = {
                          table_name: 'intra_branch_accounts',
                          data: head_branch_code
                        }
                        console.log(multibranch_details1);
                        this.p.get_multi_branch_details1(multibranch_details1)
                          .subscribe(response_multi_branch_details1 => {
                            const multi_branch_details_data1 = response_multi_branch_details1.rows;
                            console.log(multi_branch_details_data1);
                            const account_head1 = multi_branch_details_data1[0].account_id;
                            const final_form_data1 = {
                              // 'date': this.basic_function_obj.get_datetime(),
                              transactions: [
                                {
                                  'account_id': s_account_id_SH,
                                  'by_account': account_head1,
      // tslint:disable-next-line: max-line-length
                                  'narration': 'Customer Name.:' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_last_name + ' Customer ID.:' + response.inserted_id + '<br>'
                                    + 'share account amount',
                                  'amount': form_data.kyc_reg_share_amount,
                                  'flag': '1',
                                  'extra_prop': {
                                  }
                                }
                              ]
                            };
                            this.p.bulk_transaction_entry_head_branch(final_form_data1)
                              .subscribe(response_acFolio_insert_withdraw => {

                              });
                          });
                          this.p.get_multi_branch_details(multibranch_details1)
                          .subscribe(response_multi_branch_details => {
                            const multi_branch_details_data = response_multi_branch_details.rows;
                            console.log(multi_branch_details_data);
                            const account_head = multi_branch_details_data[0].account_id;
                            const final_form_data2 = {
                              // 'date': this.basic_function_obj.get_datetime(),
                              transactions: [
                                {
                                  'account_id': account_head,
                                  'by_account':  form_data.kyc_reg_accounts,
      // tslint:disable-next-line: max-line-length
                                  'narration': 'Customer Name.:' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_last_name + ' Customer ID.:' + response.inserted_id + '<br>'
                                                + 'share account amount',
                                               'amount': form_data.kyc_reg_share_amount,
                                  'flag': '1',
                                  'extra_prop': {
                                  }
                                }
                              ]
                            };
                            this.p.bulk_transaction_entry(final_form_data2)
                              .subscribe(response_acFolio_insert_deposit => {
                              });
                            }); 
                            } else {
                             const final_form_data_ac_folio = {
                              // 'date': this.basic_function_obj.get_datetime(),
                              transactions: [
                                {
                                  'account_id': s_account_id_SH,
                                  'by_account': form_data.kyc_reg_accounts,
                                  // tslint:disable-next-line: max-line-length
                                  'narration': 'share deposited to' + ':' +  'Customer Name.:' + form_data.kyc_reg_first_name + ' ' + form_data.kyc_reg_middle_name + ' ' + form_data.kyc_reg_middle_name + ' Customer ID.:' + response.inserted_id,
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
                                }); 
                            }
                          });
                  },
                    error => {
                      console.log(error);
                      this.spin.trig_spin(false);
                    });

              }, error => {
                console.log(error);
                this.spin.trig_spin(false);
              });
            formDirective.resetForm();
            this.registrationForm.reset({
              kyc_reg_date: this.basic_function_obj.get_datetime_to_display(),
              kyc_reg_vip_code: '02',
              kyc_reg_face_value: '10',
              kyc_reg_id_1_select_dropdown: '0',
              kyc_reg_tel_type1_select_dropdown: '01',
              kyc_reg_res_code_select_dropdown: '01',
              prevent_warning: '0'
            });


            // tslint:disable-next-line:triple-equals
          } else if (this.switch_tab == 1) {

            const data = {
              data_to_update: final_form_data_edit,
              condition: {
                id: [this.id_to_edit]
              }
            }
            const update_data: DBOperation = {
              table_name: 'customer_info',
              data: data,
              db: this.authservice.getHeadDatabaseSession()
            }
            this.p.do_simple_update_cus_info(update_data)
              .subscribe(response => {
                // tslint:disable-next-line:triple-equals
                if (response.no_of_rows_updated[0] == 1) {
                  this.notify.openSnackBar('Data Updated Successfully', '', 'green-snackbar');
                  this.onToggle('1', 0);
                  $('#remove').click();
                  this.ngOnInit();
                } else {
                  this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
                }
                this.spin.trig_spin(false);

              }, error => {
                console.log(error);
                this.spin.trig_spin(false);
              }
              );
          }

        } else {
          this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
        }
      }

    });

  }

  onToggle(value, suppress_warning) {
    // this.spin.trig_spin(true);

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
      this.registrationForm.reset(
        {
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
        }
      );
    } else if (value === '1') {
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
      const data = {
        'branch_code': this.authservice.getBranchCodeSession()
      }
      const insert_data: DBOperation = {
        table_name: 'customer_info',
        data: data,
        db: this.authservice.getHeadDatabaseSession()
      }
      this.p.get_max_id_cus_info(insert_data)
        .subscribe(response_max_id => {
          this.spin.trig_spin(false);
          const data_max_id = response_max_id.rows[0];
          const max_id = data_max_id['max_id'];
          if (max_id !== null) {

            this.g.kyc_get_existing_customer_by_last_timestamp()
              .subscribe(response => {
                // tslint:disable-next-line: no-shadowed-variable
                const data = response.rows[0];
                this.id_to_edit = data['id'];
                this.cus_image = data['cus_image'];
                this.cus_sign = data['cus_sign'];
                this.kyc_no_of_shares = data['no_of_shares'] / 10;

                this.registrationForm.patchValue({
                  kyc_reg_title: data['title'],
                  kyc_reg_accounts: data['accounts'],
                  kyc_reg_first_name: data['cus_first_name'],
                  kyc_reg_middle_name: data['cus_middle_name'],
                  kyc_reg_last_name: data['cus_last_name'],
                  kyc_reg_dob: data['dob'],
                  kyc_reg_age: this.basic_function_obj.get_age(data['dob']),
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
                  kyc_reg_shares: this.kyc_no_of_shares,
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

                this.kyc_reg_id_1_select_dropdown_val = data['id1'];
                this.kyc_reg_id_2_select_dropdown_val = data['id2'];
                this.kyc_reg_tel_type1_select_dropdown_val = data['contact1'];
                this.kyc_reg_tel_type2_select_dropdown_val = data['contact2'];
                this.kyc_reg_tel_type3_select_dropdown_val = data['contact3'];

                this.spin.trig_spin(false);
              },
                error => {
                  this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                  this.spin.trig_spin(false);
                });
          }
        });

    }
  }

  fn_on_search(search_term) {
    $('.kyc_reg_id_1_select_value_extra').show();
    $('.kyc_reg_id_2_select_value_extra').show();
    $('.kyc_reg_id_2_select_value').show();
    $('.kyc_reg_tel_type2_select_value').show();
    $('.kyc_reg_tel_type3_select_value').show();
    this.spin.trig_spin(true);
    const res = search_term.split('-');
    const res_id = res[1].split('');
    // tslint:disable-next-line:radix
    // const id_only_arr = [res[1]];
    const get_data: DBOperation = {
      table_name: 'customer_info',
      data: res_id[0],
      db: this.authservice.getHeadDatabaseSession()
    }
    this.p.do_simple_id_read(get_data)
      .subscribe(response => {
        const data = response.row;
        this.id_to_edit = data['id'];
        this.cus_image = data['cus_image'];
        this.cus_sign = data['cus_sign'];
        this.cus_branch_code = data['branch_code'];
        this.branch_code = this.authservice.getBranchCodeSession();
        if (this.branch_code === this.cus_branch_code) {
          // tslint:disable-next-line: comment-format
          this.registrationForm.patchValue({
            kyc_reg_title: data['title'],
            kyc_reg_accounts: data['accounts'],
            kyc_reg_first_name: data['cus_first_name'],
            kyc_reg_middle_name: data['cus_middle_name'],
            kyc_reg_last_name: data['cus_last_name'],
            kyc_reg_dob: data['dob'],
            kyc_reg_age: this.basic_function_obj.get_age(data['dob']),
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
            kyc_reg_shares: this.kyc_no_of_shares,
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
          this.spin.trig_spin(false);
        } else {
          this.notify.normal_alert('Customer Does not exist in this Branch  !!!');
        } this.spin.trig_spin(false);
      }, error => {
        this.notify.openSnackBar(error, 'Close', 'red-snackbar');
        this.spin.trig_spin(false);
      });
    //
  }
  fn_list_member() {
    this.g.kyc_get_all_customer()
      .subscribe(response => {
        const data = response.rows;
        data.forEach(element => {

 element['shares'] = element['no_of_shares'] / 10;
          const get_data1: DBOperation = {
            table_name: 'branch_details',
            data: element['branch_code'],
            condition_column: 'branch_code',
            db: 'nace_fin_head_office'
          }
          this.p.do_single_fetch_with_where_condition(get_data1)
            .subscribe(branch_response => {
              const data1 = branch_response.rows;
              element['branch_name'] = data1[0].name;
            });
          this.customerName = data;
        })
        this.chRef.detectChanges();
        this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
      });
  }
  send_tab(ctrl, view_id) {
    const get_data: DBOperation = {
      table_name: 'customer_info',
      data: view_id,
      db: this.authservice.getHeadDatabaseSession()
    }
    if (ctrl === 1) {
      $('#kyc_tab_1').click();
      this.p.do_simple_id_read(get_data)
        .subscribe(response => {
          const data = response.row;
          this.id_to_edit = data['id'];
          this.registrationForm.patchValue({
            kyc_reg_title: data['title'],
            kyc_reg_accounts: data['accounts'],
            kyc_reg_first_name: data['cus_first_name'],
            kyc_reg_middle_name: data['cus_middle_name'],
            kyc_reg_last_name: data['cus_last_name'],
            kyc_reg_dob: data['dob'],
            kyc_reg_age: this.basic_function_obj.get_age(data['dob']),
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
            kyc_reg_shares: this.kyc_no_of_shares,
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
          this.spin.trig_spin(false);
        }, error => {
          this.notify.openSnackBar(error, 'Close', 'red-snackbar');
          this.spin.trig_spin(false);
        });
    } else if (ctrl === 2) {
      $('#kyc_tab_3').click();
      this.p.do_simple_id_read(get_data)
        .subscribe(response => {
          const data = response.row;
          this.id_to_edit = data['id'];
          this.send_sms.patchValue({
            send_sms_name: data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'],
            prevent_warning: '0'
          });
          this.spin.trig_spin(false);
        }, error => {
          this.notify.openSnackBar(error, 'Close', 'red-snackbar');
          this.spin.trig_spin(false);
        });
    } else if (ctrl === 3) {
      $('#kyc_tab_3').click();
      this.p.do_simple_id_read(get_data)
        .subscribe(response => {
          const data = response.row;
          this.id_to_edit = data['id'];
          this.send_email.patchValue({
            // tslint:disable-next-line: max-line-length
            send_email_name: data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'] + '<' + data['email'] + '>',
            prevent_warning: '0'
          });
          this.spin.trig_spin(false);
        }, error => {
          this.notify.openSnackBar(error, 'Close', 'red-snackbar');
          this.spin.trig_spin(false);
        });
    }
  }
  give_same_address() {
    this.registrationForm.patchValue({
      kyc_reg_present_address: $('.kyc_reg_address').val(),
      kyc_reg_pincode_present: $('.kyc_reg_pincode').val(),
      kyc_reg_state_present: $('.kyc_reg_state').val(),
      kyc_reg_district_present: $('.kyc_reg_district').val(),
      kyc_reg_city_present: $('.kyc_reg_city').val(),
      kyc_reg_area_present: $('.kyc_reg_area').val()
    });
  }
print_share_certificate(shares, cus_name, cus_id) {
  const db_name = this.authservice.getDatabaseSession();
  const head_db = this.authservice.getHeadDatabaseSession();
  const formData: FormData = new FormData();
  formData.append('cus_id', cus_id);
  formData.append('cus_name', cus_name);
  formData.append('no_of_shares', shares);
  formData.append('db_name', db_name);
  formData.append('head_db', head_db);
  this.p.do_share_certificate_print(formData)
    .subscribe(print_response => {
      // const receipt_id = receipt_response[0];
      const print = print_response[0];
      let popupWin;
      // printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write(`
    <html>
  <body onload="window.print();window.close()">${print}</body>
    </html>`
      );
      popupWin.document.close();
    });
}
  public ngOnInit() {
    // this ensures form becomes valid soon after loading
    const self = this;
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
  }

  ngAfterViewInit() {
    const re = '^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))\/(19|20)\\d{2}$';
    // tslint:disable-next-line:max-line-length
    Inputmask({ regex: re, showMaskOnHover: false, showMaskOnFocus: false, 'clearIncomplete': true }).mask(document.getElementsByClassName('date_mask'));

  }

  ngOnDestroy() {
  }

  find_invalid() {
    this.basic_function_obj.find_invalid(this.registrationForm);
  }
}
