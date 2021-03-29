import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NotificationserviceService } from '../../services/notificationservice.service';
import { Router } from '@angular/router';
import {LoginForm} from '../../components/login-form/login-form.model';
import { LoginBtnDisableService } from '../../services/login-btn-disable.service';
import { PostingService } from '../../services/posting.service';
import { DBOperation} from '../../common_interfaces/db_operation.model';
import CryptoJS from 'crypto-js';
 // import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent implements OnInit {

    // to display date in login screen
    test: Date = new Date();
    salt;

    // ui data
    login_form_ui_data_to_send: LoginForm = {
        title: 'Login',
        button_text : 'Authenticate',
        field1_placeholder: 'Username',
        field2_placeholder : 'Password',
    }
    // ui data

    is_loading = false;

    // tslint:disable-next-line:max-line-length
    constructor(public bt: LoginBtnDisableService, public authService: AuthService, public p: PostingService, private notify: NotificationserviceService, private router: Router ) {}

    ngOnInit() {


        // for layout allignments
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
              // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        // for layout allignments
    }

    // login event function
    onLogin(form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.is_loading = true;
      this.authService.login(form.value.username, form.value.password)
      .subscribe(response => {
        //  this.notify.openSnackBar(response.msg, '');
        if (response.flag === 1) {
// tslint:disable-next-line: max-line-length
         this.authService.setLoginSession(response.user_id, response.branch_code, response.current_db, response.sig, response.head_db, response.role);
         this.router.navigate(['/dashboard']);
         this.notify.showNotification('top', 'right', response.msg, 2);
         this.salt = Math.floor((new Date()).getTime() / 1000);
         this.authService.setSessionUserLog(this.salt, form.value.username);
         const insert_data_username: DBOperation =  {
          table_name : 'users_log' ,
          db : 'nace_fin_users',
            data: {
                'username' : form.value.username,
                'login_time' : this.salt
            }
          }
        this.p.do_single_insertion(insert_data_username)
              .subscribe(response_insert => {
    // tslint:disable-next-line:triple-equals
          });
        } else if (response.flag === 0) {
        this.bt.disable_btn_changed(false);
        this.notify.showNotification('top', 'right', response.msg, 4);
        this.reset_form(form);

        }
        const salt = new Date();
        const signature = CryptoJS.SHA256(salt).toString(CryptoJS.enc.Hex);
      //  console.log(signature);
        const final_form_data_sha = {

            'signature' : signature
          }
          const data = {
            data_to_update : final_form_data_sha,
            condition : {
              id: response.user_id
            }
          }
          const update_data_sha: DBOperation = {
            table_name: 'users',
            data: data,
            db: 'nace_fin_users'
          }
          this.authService.do_simple_update(update_data_sha)
                .subscribe(response_update => {
            // tslint:disable-next-line:triple-equals
              });
     }, error => {
        this.bt.disable_btn_changed(false);
        // this.notify.openSnackBar(error , '')
        this.is_loading = false;
        this.notify.showNotification('top', 'right', error, 4);
        this.reset_form(form);

        });
    }


    reset_form(form: NgForm) {
        form.resetForm();
    }

}
