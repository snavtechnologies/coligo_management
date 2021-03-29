import { Injectable } from '@angular/core';
import { DBOperation } from 'app/common_interfaces/db_operation.model';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { PostingService } from './posting.service';
import { ValidationService } from './validation.service';


@Injectable({
    providedIn: 'root'
})
export class CredentialsService {
    private visible: boolean = false;
    private icon_visibility: string = 'visibility_off';
    private timeout;
    private username_availability_status: string;
    private username_availability_status_color: string;
    private username_status: string;
    private readonly head_db: string;
    private loading: boolean = false;

    constructor (
        private validationService?: ValidationService, 
        private authService?: AuthService,
        private postingService?: PostingService,
        private errorService?: ErrorService
        ) {

        this.head_db = this.authService.getHeadDatabaseSession();
    }

    set_username_availability_status(message: string, color: string) {
        this.username_availability_status = message;
        this.username_availability_status_color = color;
    }

    set_username_status(username_status: string) { this.username_status = username_status; }

    get_username_availability_status(): string { return this.username_availability_status; }

    get_username_availability_status_color(): string { return this.username_availability_status_color; }

    get_username_status(): string { return this.username_status; }

    is_loading(): boolean { return this.loading; }

    is_visible(): boolean { return this.visible; }

    get_icon_visibility(): string { return this.icon_visibility; }


    toggle_visibility() {
        this.visible = !this.visible;
        this.icon_visibility = this.visible ? 'visibility' : 'visibility_off';
    }

    validate_username(username: String) {
        const result: object = this.validationService.check_username(username);
    
        if (result['hasLength']){
          if (result['endWithUnderscore']){
            this.set_username_availability_status('Username should not end with underscore', 'red');
            this.username_status = "endWithUnderscore";
          }
          else 
            this.timeout = setTimeout(() => {
              this.check_username_availability(username);
            }, 1000);
        }
        else { 
          this.set_username_availability_status('','');
          this.username_status = 'null';
        }
    }

    private check_username_availability(username: String) {
        if (username === '' || this.username_status === 'endWithUnderscore')
          return;

        this.loading = true;
    
        const data = {
          condition: {
            username: username
          }
        }
    
        const fetch_data: DBOperation = {
          table_name: 'employee_info',
          columns_to_retrieve: 'id',
          data: data,
          db: this.head_db
        }
    
        this.postingService.do_custom_read(fetch_data)
          .subscribe(response => {
            const rows = response.no_of_rows;
            console.log("rows = " + rows);
            if (rows > 0) {
              this.set_username_availability_status('Username already taken', 'red');
              this.username_status = 'taken';
            }
            else {
              this.set_username_availability_status('Username is available', 'green');
              this.username_status = 'available';
            } 
           this.loading = false;
          },
          error => {
            this.errorService.handle_error(error);
        });
        
    }

    halt_username_validation() {
        this.loading = false;
        this.username_status = 'checking'
        clearTimeout(this.timeout);
        this.set_username_availability_status('','');
    }

}