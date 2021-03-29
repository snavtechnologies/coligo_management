import { ChangeDetectionStrategy, Component, OnInit, ViewChild, OnDestroy, ElementRef, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { EmployeeRole } from 'app/common_interfaces/employee-role.model';
import { HtmlComponentFinal } from 'app/common_interfaces/html-component.model';
import { AuthService } from 'app/services/auth.service';
import { BasicFunctionsService } from 'app/services/basic-functions.service';
import { ErrorService } from 'app/services/error.service';
import { NotificationserviceService } from 'app/services/notificationservice.service';
import { PostingService } from 'app/services/posting.service';
import { SpinnerService } from 'app/services/spinner.service';
import { Subscription } from 'rxjs';
import { RolesService} from '../roles.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleCreateComponent implements OnInit, OnDestroy {
  color  = '#EEEEEE';
  colorCheckBox = 'primary';
  private subscriptions = new Subscription();
  closeDialog = false;
  namesLinkHead: string;
  title: string;
  buttonText: string;
  isNewRole: boolean;
  private role: EmployeeRole;

  form: FormGroup = this.formBuilder.group({
    name: [''],
    linkHead: ['']
  })

  roleAddElements: HtmlComponentFinal[] = [
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
  ]

  roleEditElements: HtmlComponentFinal[] = [
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
  ]

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private postingService: PostingService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationserviceService,
    private error: ErrorService,
    public rolesService: RolesService,
    private basicFunction: BasicFunctionsService,
    @Inject(MAT_DIALOG_DATA) public dialogData: { role: EmployeeRole, roles: EmployeeRole[], dialogRef: MatDialog }
    ) {
      this.initInstanceVariables();
    }


  ngOnInit() {
  }

  private initInstanceVariables() {
    this.role = {...this.dialogData.role};
    this.isNewRole = this.role.id === 0;
    if (this.isNewRole) {
      this.title = 'Add Role';
      this.buttonText = 'Add';
    } else {
      this.title = 'Edit Role';
      this.buttonText = 'Edit'
      this.form.get('name').patchValue(this.role.name);
    }
  }

  private setFormValuesToRole() {
    const formData = this.form.value;
    if (this.isNewRole) {
      this.role.name = formData.name;
      this.role.link = formData.linkHead;
      this.role.namesLinkHead = this.namesLinkHead;
    } else {
      this.role.name = formData.name;
    }
    this.rolesService.setRole(this.role);
  }

  private addRole() {
    this.spinnerService.trig_spin(true);
    this.subscriptions
      .add(this.rolesService.addRole()
      .subscribe(isAdded => {
        if (isAdded) { this.dialogData.dialogRef.closeAll(); }
        this.spinnerService.trig_spin(false);
    }));
  }

  private updateRole() {
    this.spinnerService.trig_spin(true);
    this.subscriptions
      .add(this.rolesService.updateRole()
      .subscribe(isUpdated => {
        if (isUpdated) { this.dialogData.dialogRef.closeAll(); }
        this.spinnerService.trig_spin(false);
      }));
  }

  onClickAdd() {
    if (!this.basicFunction.is_valid(this.form, document)) { return; }
    this.setFormValuesToRole();
    if (this.rolesService.isDuplicateRole()) { return; }

    this.notificationService.askForConfirmation().then(hasConfirmed => {
      if (hasConfirmed) {
        if (this.isNewRole) { this.addRole(); } else { this.updateRole(); }
       }
    });
  }



  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
