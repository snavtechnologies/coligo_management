import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DBOperation } from '../../common_interfaces/db_operation.model';
import { TabLayout } from '../../components/tab-layout/tab-layout.model';
import { SearchBox } from '../../common_interfaces/searchbox.model';
import { HtmlComponentFinal } from '../../common_interfaces/html-component.model';
import { ValidationService } from '../../services/validation.service';
import { NotificationserviceService } from '../../services/notificationservice.service';
import { BasicFunctionsService } from '../../services/basic-functions.service';
import { SpinnerService } from '../../services/spinner.service';
import { PostingService } from '../../services/posting.service';
import { GettingService } from '../../services/getting.service';
import { AuthService } from '../../services/auth.service';
import { TableData } from '../../common_interfaces/tabledata.model';
import { DatatableTriggerService } from '../../services/datatable-trigger.service';
declare const $: any;
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-customer-documents',
  templateUrl: './customer-documents.component.html',
  styleUrls: ['./customer-documents.component.scss']
})
export class CustomerDocumentsComponent implements OnInit {

  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;
  public webcamSignature: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private trigger1: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();


  sl_no = 0;
  switch_tab = 0;
  table_name;
  DocumentDetails;
  document;
  id_to_edit;
  val;
  flagg;
  fileToUpload: File = null;
  cus_name;
  branch_code;
  cus_branch_code;
  filename;
  filename1;
  element;
  // ui data
  tab_layout_ui_data_to_send: TabLayout = {
    tab_heading: 'Add/Edit Customer Documents',
    tab_subheading: '',
    need_card: true,
    tab_id: 'invent_tab',
    tab_content_component_selector_data: [{
      tab_name: 'Edit Documents'
    },
    {
      tab_name: 'Add Documents',
      is_active: true
    }]
  };


  CustomerDocumentForm = this.fb.group({
    doc_cus_id: [''],
    doc_cus_name: [''],
    doc_cus_folder: [''],
    doc_cus_document: [''],
    kyc_reg_webcam: [''],
    prevent_warning: ['']
  }
  );

  CustomerDocumentEditForm = this.fb.group({
    doc_cus_edit_id: [''],
    doc_cus_edit_name: [''],
    doc_cus_edit_folder: [''],
    doc_cus_edit_document: [''],
    prevent_warning: ['']
  }
  );

  table_data_to_send: TableData = {
    minmax: {
      need_minmax: false,
    },
    table: {
      is_datatable: false,
      table_id: 'document_table',
      have_non_sort_col: true,
      non_sort_cols: '3',
      need_colour: true,
      color_cols: '',
      need_header: true,
      // tslint:disable-next-line: max-line-length
      header: 'sl_no.~folder~file_name~Actions'
    },
    excel: {
      need_export_to_excel: false,
    },
    column_search: {
      need_column_search: false
    }
  }

  search_box: SearchBox = {
    placeholder: 'Search id /names',
    searchbox_id: 'kyc_search',
    search_tablename: 'customer_info',
    search_db: this.authservice.getHeadDatabaseSession(),
    search_columnname: 'id~cus_first_name~aadhar~id1_value~email~contact1_value',
    view_columnname: 'id~cus_first_name~cus_last_name',

  };


  customer_document_html_elements: HtmlComponentFinal[] = [
    {
      no_of_elements_in_a_row: '1',
      color: '',
      need_card: true,
      table_view: false,
      card_label: 'Documents',
      elements: [
        {
          textbox: true,
          label: 'Customer ID',
          required: true,
          name: 'doc_cus_id',
          classes: ['cus_doc_id'],
          readonly: true,
          line_break_value: '6',
          placeholder: 'please enter details',
          float_placeholder: 'never'
        },
        {
          textbox: true,
          label: 'Customer Name',
          required: true,
          name: 'doc_cus_name',
          classes: ['doc_cus_name'],
          readonly: true,
          line_break_value: '6',
          placeholder: 'please enter details',
          float_placeholder: 'never'
        },
        {
          select: true,
          label: 'Folder',
          name: 'doc_cus_folder',
          classes: ['doc_cus_folder'],
          multiple: false,
          placeholder: 'Select Folder',
          line_break_value: '6',
          required: true,
          options: [
            {
              viewValue: 'KYC',
              value: '01'
            },
            {
              viewValue: 'Income Documents',
              value: '02'
            },
            {
              viewValue: 'Bank Statements',
              value: '03'
            },
            {
              viewValue: 'Land Documents',
              value: '04'
            },
            {
              viewValue: 'Asset Documents',
              value: '05'
            },
            {
              viewValue: 'Liability Documents',
              value: '06'
            },
            {
              viewValue: 'IT Returns',
              value: '07'
            },
            {
              viewValue: 'Balance Sheets',
              value: '09'
            },
            {
              viewValue: 'Licence & Registration documents',
              value: '08'
            }
          ],

        },
        {
          filechooser: true,
          required: false,
          line_break_value: '6',
          classes: ['doc_cus_document'],
          label: 'Choose image',
          name: 'doc_cus_document'
        },
        /*{
          button: true,
          value: 'Show/Hide Webcam',
          classes: ['kyc_reg_webcam'],
          name: 'kyc_reg_webcam',
         }*/
        {
          custom_element: true,
          custom_element_identification: 'kyc_reg_show_webcam',
          need_block: false,
          is_element_required: false
        },


      ]
    }]

  customer_document_Edit_html_elements: HtmlComponentFinal[] = [
    {
      no_of_elements_in_a_row: '1',
      color: '',
      need_card: true,
      table_view: false,
      card_label: 'Loan List',
      elements: [
        {
          textbox: true,
          label: 'Customer ID',
          required: true,
          name: 'doc_cus_edit_id',
          classes: ['cus_doc_edit_id'],
          readonly: true,
          line_break_value: '6',
          placeholder: 'please enter details',
          float_placeholder: 'never'
        },
        {
          textbox: true,
          label: 'Customer Name',
          required: true,
          name: 'doc_cus_edit_name',
          classes: ['doc_cus_edit_name'],
          readonly: true,
          line_break_value: '6',
          placeholder: 'please enter details',
          float_placeholder: 'never'
        },
        {
          select: true,
          label: 'Folder',
          name: 'doc_cus_edit_folder',
          classes: ['doc_cus_edit_folder'],
          multiple: false,
          placeholder: 'Select Folder',
          line_break_value: '6',
          required: true,
          options: [
            {
              viewValue: 'Kyc',
              value: '01'
            },
            {
              viewValue: 'Income Documents',
              value: '02'
            },
            {
              viewValue: 'Bank Statements',
              value: '03'
            },
            {
              viewValue: 'Land Documents',
              value: '04'
            },
            {
              viewValue: 'Asset Documents',
              value: '05'
            },
            {
              viewValue: 'Liability Documents',
              value: '06'
            },
            {
              viewValue: 'IT Returns',
              value: '07'
            },
            {
              viewValue: 'Balance Sheets',
              value: '09'
            },
            {
              viewValue: 'Licence & Registration documents',
              value: '08'
            }
          ],

        },
        {
          filechooser: true,
          required: false,
          line_break_value: '6',
          classes: ['doc_cus_edit_document'],
          label: 'Choose image',
          name: 'doc_cus_edit_document'
        }

      ]
    }]
  fn_on_search(search_term) {
    this.spin.trig_spin(true);
    const res = search_term.split('-');
    const get_data: DBOperation = {
      table_name: 'customer_info',
      data: res[1],
      db: this.authservice.getHeadDatabaseSession()
    }
    this.p.do_simple_id_read(get_data)
      .subscribe(response => {
        const data = response.row;
        // this.DocumentDetails = data
        // this.DocumentDetails = data['cus_first_name'];
        this.id_to_edit = data['id'];
        this.cus_name = data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'];
        this.cus_branch_code = data['branch_code'];
        this.branch_code = this.authservice.getBranchCodeSession();
        if (this.branch_code === this.cus_branch_code) {
          // tslint:disable-next-line: comment-format
          this.CustomerDocumentForm.patchValue({
            doc_cus_id: data['id'],
            doc_cus_name: data['cus_first_name'],
            prevent_warning: '0'
          });
        } else {
          this.notify.normal_alert('Customer Does not exist in this Branch  !!!');
        }
        this.spin.trig_spin(false);
      }, error => {
        this.notify.openSnackBar(error, 'Close', 'red-snackbar');
        this.spin.trig_spin(false);
      });
    this.dt_trig.trig_datatable(false, this.table_data_to_send.table.table_id, '', false);


    this.spin.trig_spin(true);
    const data_id = {
      'id': this.id_to_edit
    };
    const get_data1: DBOperation = {
      table_name: 'cus_documents',
      data: res[1],
      condition_column: 'cus_id',
      db: this.authservice.getDatabaseSession()
    }
    this.p.do_single_fetch_with_where_condition(get_data1)
      .subscribe(response => {
        this.spin.trig_spin(false);
        const data = response.rows;
        data.forEach(element => {
          this.element = element.document;
          this.element = this.element.split('_');
          this.element.shift();
          this.element = this.element.join(' ');
          element.document_name = this.element;
          // this.DocumentDetails['document'] = this.element;
        });
        this.DocumentDetails = data;
        // this.cus_name = data[0].cus_name;
        this.chRef.detectChanges();
        this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
      });
    //
  }
  // tslint:disable-next-line: max-line-length
  constructor(public validation_obj: ValidationService, public g: GettingService, public notify: NotificationserviceService, public basic_function_obj: BasicFunctionsService, public spin: SpinnerService, public p: PostingService, private fb: FormBuilder, public dt_trig: DatatableTriggerService, private chRef: ChangeDetectorRef, public authservice: AuthService) { }
  get_html_events(event_obj) {
    if (event_obj.uniq_identity === 'doc_cus_document') {
      if (event_obj.e_type === 'change') {
        this.fileToUpload = event_obj.value.item(0);
        this.filename = Date.now() + '_' + this.fileToUpload.name;
      }
    }
    if (event_obj.uniq_identity === 'doc_cus_edit_document') {
      if (event_obj.e_type === 'change') {
        this.fileToUpload = event_obj.value.item(0);
        this.filename = Date.now() + '_' + this.fileToUpload.name;
      }
    }
    if (event_obj.uniq_identity === 'kyc_reg_webcam') {
      if (event_obj.e_type === 'click') {
        this.toggleWebcam();
      }
    }
  }
  form_submit(formDirective: FormGroupDirective, switch_tab) {
    this.notify.askForConfirmation().then((trig: boolean) => {
      if (trig === true) {
        console.log(this.fileToUpload);
        console.log(this.filename);
        this.p.addfile(this.fileToUpload, this.filename)
          .subscribe(response => {
            // this.spin.trig_spin(false);
          }, error => {
            this.notify.openSnackBar(error, 'Close', 'red-snackbar');
            this.spin.trig_spin(false);
          });
        if (switch_tab === 0) {
          if (this.CustomerDocumentForm.valid) {
            this.spin.trig_spin(true);
            this.filename1 = this.fileToUpload.name;
            const form_data = this.CustomerDocumentForm.value;
            const final_form_data = {
              'cus_id': form_data.doc_cus_id,
              'cus_name': form_data.doc_cus_name,
              'folder': form_data.doc_cus_folder,
              'document': this.filename
            };
            const insert_data: DBOperation = {
              table_name: 'cus_documents',
              data: final_form_data,
              db: this.authservice.getDatabaseSession()
            }

            this.p.do_single_insertion(insert_data)
              .subscribe(response => {
                if (response.flag === 1) {
                  this.notify.openSnackBarSuccess();
                  $('#remove').click();
                } else if (response.flag === 0) {
                  this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
                }
                this.spin.trig_spin(false);

                const get_data1: DBOperation = {
                  table_name: 'cus_documents',
                  data: this.id_to_edit,
                  condition_column: 'cus_id',
                  db: this.authservice.getDatabaseSession()
                }
                this.p.do_single_fetch_with_where_condition(get_data1)
                  .subscribe(response_sec => {
                    this.spin.trig_spin(false);
                    const data = response_sec.rows;
                    data.forEach(element => {
                      this.element = element.document;
                      this.element = this.element.split('_');
                      this.element.shift();
                      this.element = this.element.join(' ');
                      element.document_name = this.element;
                      // this.DocumentDetails['document'] = this.element;
                    });
                    this.DocumentDetails = data;
                    // this.cus_name = data[0].cus_name;
                    this.chRef.detectChanges();
                    this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
                  });

              }, error => {
                console.log(error);
                this.spin.trig_spin(false);
              });

            formDirective.resetForm();
            this.CustomerDocumentForm.reset({
              doc_cus_id: this.id_to_edit,
              doc_cus_name: this.cus_name,
              prevent_warning: ['0']
            });

          } else {
            this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
          }
        } else if (switch_tab === 1) {
          if (this.CustomerDocumentEditForm.valid) {
            this.spin.trig_spin(true);
            this.p.addfile(this.fileToUpload, this.filename)
              .subscribe(response => {
                // this.spin.trig_spin(false);
              }, error => {
                this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                this.spin.trig_spin(false);
              });
            const form_data = this.CustomerDocumentEditForm.value;
            const final_form_edit_data = {
              'cus_id': form_data.doc_cus_edit_id,
              'cus_name': form_data.doc_cus_edit_name,
              'folder': form_data.doc_cus_edit_folder,
              'document': this.filename,
            };
            const data = {
              data_to_update: final_form_edit_data,
              condition: {
                id: [this.id_to_edit]
              }
            }
            const update_data: DBOperation = {
              table_name: 'cus_documents',
              data: data,
              db: this.authservice.getDatabaseSession()
            }
            this.p.do_simple_update(update_data)
              .subscribe(response => {

                if (response.no_of_rows_updated[0] === 1) {
                  this.notify.openSnackBar('Data Updated Successfully', '', 'green-snackbar');
                  $('#remove').click();
                  this.ngOnInit();
                } else {
                  this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
                }
                this.spin.trig_spin(false);

              }, error => {
                console.log(error);
                this.spin.trig_spin(false);
              });
          } else {
            this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
          }

        }
      }
    });


  }

  /*fn_tableData_display(value) {
    this.dt_trig.trig_datatable(false, this.table_data_to_send.table.table_id, '', false);

    this.val = value;
  this.spin.trig_spin(true);
  const data_id = {
    'id': this.id_to_edit
  };
  const get_data: DBOperation = {
    table_name: 'cus_documents',
    data: data_id,
    db: this.authservice.getDatabaseSession()
  }
  console.log(get_data);
  this.p.do_simple_read_cus_documents(get_data)
   .subscribe(response => {
    this.spin.trig_spin(false);
    const data = response.rows;
    this.DocumentDetails = data[0];
   // const cus_name = data[0].cus_name;
    this.chRef.detectChanges();
    this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
 });
  }*/
  fn_delete(id) {
    this.notify.askForConfirmation().then((trig: boolean) => {
      if (trig === true) {
        this.spin.trig_spin(true);
        const data = {
          'id': id
        };
        const get_data: DBOperation = {
          table_name: 'cus_documents',
          data: data,
          db: this.authservice.getDatabaseSession()
        }
        this.p.do_delete(get_data)
          .subscribe(response => {
            if (response.no_of_rows_deleted = 1) {
              this.notify.openSnackBar('Data Deleted Successfully', '', 'green-snackbar');
              // this.fn_tableData_display(this.val);
            } else {
              this.notify.openSnackBar('Error in Deleting', '', 'red-snackbar');
            }
            this.spin.trig_spin(false);
            const get_data1: DBOperation = {
              table_name: 'cus_documents',
              data: this.id_to_edit,
              condition_column: 'cus_id',
              db: this.authservice.getDatabaseSession()
            }
            this.p.do_single_fetch_with_where_condition(get_data1)
              .subscribe(response_sec => {
                this.spin.trig_spin(false);
                const sec_data = response_sec.rows;
                sec_data.forEach(element => {
                  this.element = element.document;
                  this.element = this.element.split('_');
                  this.element.shift();
                  this.element = this.element.join(' ');
                  element.document_name = this.element;
                  // this.DocumentDetails['document'] = this.element;
                });
                this.DocumentDetails = sec_data;
                // this.cus_name = data[0].cus_name;
                this.chRef.detectChanges();
                this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
              });
          }, error => {
            console.log(error);
            
  if (error.status === 401) {
    this.notify.normal_alert('Permission Denied');

  }
            this.spin.trig_spin(false);
          });
      }
    });
  }

  changeTab(id) {
    this.flagg = 1;
    const get_data: DBOperation = {
      table_name: 'cus_documents',
      data: id,
      db: this.authservice.getDatabaseSession()
    }
    this.id_to_edit = id;
    $('#invent_tab_1').click();
    this.p.do_simple_id_read(get_data)
      .subscribe(response => {
        const data = response.row;
        this.CustomerDocumentEditForm.patchValue({
          doc_cus_edit_id: data['cus_id'],
          doc_cus_edit_name: data['cus_name'],
          doc_cus_edit_folder: data['folder'],
          doc_cus_edit_document: data['document'],
          prevent_warning: '0'
        });
      }, error => {
        this.notify.openSnackBar(error, 'Close', 'red-snackbar');
      });
  }



  public ngOnInit(): void {
    this.spin.trig_spin(true);
    const data = {
      table_name: 'cus_documents',
      db: this.authservice.getDatabaseSession()
    }
    this.p.get_max_id(data)
      .subscribe(response_max_id => {
        this.spin.trig_spin(false);
        const data_max_id = response_max_id.rows[0];
        const max_id = data_max_id['max_id'];
        if (max_id !== null) {
          this.p.security_get_existing_customer_by_last_timestamp(data)
            .subscribe(response => {
              // tslint:disable-next-line: no-shadowed-variable
              const data = response.rows[0];
              this.DocumentDetails = data;
              // data['document'] = data['document'].split('_').join(' ');
              // this.cus_name = data[0].cus_name;
              this.chRef.detectChanges();
              this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
            });

        }
      });
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.flagg = 0;
    const self = this;
    setTimeout(function () {
      self.CustomerDocumentForm.patchValue({
        prevent_warning: '0'
      });
      self.CustomerDocumentEditForm.patchValue({
        prevent_warning: '0'
      });
    }, 10);
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public triggerSnapshot1(): void {
    this.trigger1.next();
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    $('.webcam_image').hide();
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    // this.webcamSignature = webcamSignature;
  }
  /*public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }*/
  public handleImage1(webcamSignature: WebcamImage): void {
    console.log('received webcam image', webcamSignature);
    this.webcamSignature = webcamSignature;
  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

}
