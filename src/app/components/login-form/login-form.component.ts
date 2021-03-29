import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginBtnDisableService } from '../../services/login-btn-disable.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Input() login_form_ui_data;
  @Output() login_event = new EventEmitter();
  is_disabled: boolean;
  private dis_btn_sub: Subscription;
  constructor(public d_btn: LoginBtnDisableService) { }

  onLogin(form: NgForm) {
    if (!form.invalid) {
      this.is_disabled = true;
    }
    this.login_event.emit(form);
  }

  ngOnInit() {
    this.dis_btn_sub = this.d_btn.getDisableeListener()
      .subscribe((bt: boolean) => {
        this.is_disabled = bt;
      });
  }

  ngOnDestroy() {
    this.dis_btn_sub.unsubscribe();
  }

}
