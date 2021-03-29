import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ValidationService } from './validation.service'
import { NotificationserviceService } from './notificationservice.service';
import { Form, FormControl, FormGroup } from '@angular/forms';
declare const $: any;


@Injectable({
  providedIn: 'root'
})
export class BasicFunctionsService {

  constructor(public v: ValidationService,  public notify: NotificationserviceService) { }

// input should be mm/dd/yyyy
  get_age(date_string: string) {
   // date_string = this.v.swap_m_d_dob(date_string);
    const splitted = date_string.split('/');
    const date_string1 = splitted[2] + '-' + splitted[1] + '-' + splitted[0];
    const today = new Date();
    const birthday = new Date(date_string1);
    let thisYear = 0;
    if (today.getMonth() < birthday.getMonth()) {
        thisYear = 1;
    } else if ((today.getMonth() === birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        thisYear = 1;
    }
    const age = today.getFullYear() - birthday.getFullYear() - thisYear;
    return age;
  }

  get_datetime() {
    const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    const stillUtc = moment.utc(date).toDate();
    const datetime = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
    return datetime;
  }

  get_datetime_to_display() {
    const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    const stillUtc = moment.utc(date).toDate();
    const datetime = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
    const datetime_to_display = moment(stillUtc).local().format('DD/MM/YYYY');
    return datetime_to_display;
  }

  find_invalid( form) {
    const invalid = [];
    const controls = form.controls;
    console.log(controls);
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    let str = 'INVALID- Fields required: <br><span style="font-size: 70%;">'
    // tslint:disable-next-line:triple-equals
    if (invalid.length == 0) {
      str = '<span style="color: green;">SUCCESS</span>';
    }
    invalid.forEach(element => {
      element = element.split('_');
      element.shift();
      element.shift();
      element = element.join(' ');
      str = str + element + '<br>';
    });
    str = str + '</span>'
    this.notify.normal_alert(str);

  }

  is_valid(form: FormGroup, document: Document): boolean {
    const controls = form.controls;
    
    for (const control in controls) {
      if (controls[control].invalid) {
        const invalid_control = control;
        const invalid_control_name = invalid_control.split('_');
        this.notify.openSnackBar('Enter ' + invalid_control_name.join(' '), '', 'red-snackbar');
        document.getElementById(invalid_control).focus();
        return false;
      }
    }
    return true;
  }

  convert_to_datatable(classname) {
    $('.' + classname).dataTable({
      'scrollCollapse': true,
      'bPaginate': true,
      'bLengthChange': true,
      'lengthMenu': [ [10, 25, 50, 100, -1], [10, 25, 50, 100, 'All'] ],
      'bFilter': false,
      'bSort': false,
      'bInfo': true,
      'bAutoWidth': true,
      'processing': true,
      'scrollX': false,
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
}
