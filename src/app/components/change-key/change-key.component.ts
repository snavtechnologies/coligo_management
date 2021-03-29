import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthData } from 'app/common_interfaces/auth-data.model';
import { DBOperation } from 'app/common_interfaces/db_operation.model';
import { HtmlComponentFinal } from 'app/common_interfaces/html-component.model';
import { AuthService } from 'app/services/auth.service';
import { BasicFunctionsService } from 'app/services/basic-functions.service';

import { CredentialsService } from 'app/services/credentials.service';
import { EncryptionService } from 'app/services/encryption.service';
import { ErrorService } from 'app/services/error.service';
import { NotificationserviceService } from 'app/services/notificationservice.service';
import { PostingService } from 'app/services/posting.service';
import { SpinnerService } from 'app/services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-key-credentials',
  templateUrl: './change-key.component.html',
  styleUrls: ['./change-key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: 'adminPasswdCredentialsService', useClass: CredentialsService},
    {provide: 'newPasswdCredentialsService', useClass: CredentialsService}
  ]
})

export class ChangeKeyComponent implements OnDestroy {
  color: string = "#EEEEEE";
  private subscriptions: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    @Inject('adminPasswdCredentialsService') public adminPasswdCredentialsService: CredentialsService, 
    @Inject('newPasswdCredentialsService') public newPasswdCredentialsService: CredentialsService,
    private basicFunctionsService: BasicFunctionsService,
    private authService: AuthService,
    private errorService: ErrorService,
    private encryptionService: EncryptionService,
    private postingService: PostingService,
    private spinner: SpinnerService,
    private notification: NotificationserviceService
    ) {}

  form: FormGroup = this.formBuilder.group(
    {
      admin_password: [''],
      new_password: ['']
    }
  )

  form_html_elements: HtmlComponentFinal[] = [
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
  ]  

  submit() {
    if (!this.basicFunctionsService.is_valid(this.form, document))
      return;
    
    const authData: AuthData = {
      username: this.authService.getUsernameSession(),
      password: this.form.get('admin_password').value
    }

    this.subscriptions.add(this.authService.comparePassword(authData)
      .subscribe(() => {
        this.spinner.trig_spin(true);
        const encrypted_password = this.encryptionService.encrypt(this.form.get('new_password').value);
        this.change_password(encrypted_password);
      }, 
      error => this.errorService.handle_error(error))
    );
  }

  change_password(password: string) {
    const data = {
      data_to_update: { password: password},
      condition: {
        username: this.route.snapshot.paramMap.get('username')
      }
    }

    const update_data: DBOperation = {
      table_name: 'employee_info',
      data: data,
      db: this.authService.getHeadDatabaseSession()
    }

    this.subscriptions.add(this.postingService.do_simple_update_emp_info(update_data)
      .subscribe(response => {
        if (response.no_of_rows_updated[0] == 1) {
          this.notification.openSnackBar('Password Changed', '', 'green-snackbar'); 
          this.form.reset();
        }
        else 
          this.notification.openSnackBar('Error in updating', '', 'red-snackbar');
        
        this.spinner.trig_spin(false);
      },
      error => {
        this.errorService.handle_error(error);
    }));

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
