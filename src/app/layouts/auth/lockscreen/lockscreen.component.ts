import { Component, OnInit, AfterViewInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { ElementRef, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {NotificationserviceService } from '../../../services/notificationservice.service';
import { Router } from '@angular/router';
import {LoginForm} from '../../../components/login-form/login-form.model';
import { LoginBtnDisableService } from '../../../services/login-btn-disable.service';

declare const $: any;

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit, AfterViewInit {
    // to display date in login screen
    test: Date = new Date();

    // ui data
    login_form_ui_data_to_send: LoginForm = {
        title: 'Session expired!',
        button_text : 'Authenticate',
        field1_placeholder: 'Username',
        field2_placeholder : 'Password',
    }
    // ui data

    is_loading = false;

  // tslint:disable-next-line:max-line-length
  constructor(public bt: LoginBtnDisableService, public authService: AuthService, private notify: NotificationserviceService, private router: Router) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.is_loading = true;
    this.authService.login(form.value.username, form.value.password)
    .subscribe(response => {
      if (response.flag === 1) {
// tslint:disable-next-line: max-line-length
       this.authService.setLoginSession(response.user_id, response.branch_code, response.current_db, response.sig, response.head_db, response.role);
       this.notify.showNotification('top', 'right', response.msg, 2);
       $('#lockscreen_popup').modal('hide');
      } else if (response.flag === 0) {
      this.bt.disable_btn_changed(false);
      this.notify.showNotification('top', 'right', response.msg, 4);
      this.reset_form(form);

      }
   }, error => {
      this.bt.disable_btn_changed(false);
      this.is_loading = false;
      this.notify.showNotification('top', 'right', error, 4);
      this.reset_form(form);

      });
  }


  reset_form(form: NgForm) {
      form.resetForm();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  // show() {
  //   $('#lockscreen_popup').modal('show');
  // }


}
