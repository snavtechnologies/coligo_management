import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { SpinnerService } from '../services/spinner.service';

declare const $: any;
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

  constructor(public snackBar: MatSnackBar,  public spin: SpinnerService ) { }

  openSnackBar(message: string, action: string, className: string) {

    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]
    });
  }

  openSnackBarSuccess() {

    this.snackBar.open('Data Saved Successfully', 'Close', {
      duration: 6000,
      panelClass: ['green-snackbar']
    });
  }

  openSnackBarError() {

    this.snackBar.open('Error', 'Close', {
      duration: 6000,
      panelClass: ['red-snackbar']
    });
  }

   showNotification(from: any, align: any, message: string, colourcode: number) {
        const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        const colour = type[colourcode];

        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: colour,
            delay: 1000,
            placement: {
                from: from,
                align: align
            },
            allow_dismiss: true,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
            '<i class="material-icons">close</i></button>' +
            '<span data-notify="message"><b>{2}</b></span></div>'
        });
    }

    askForConfirmation() {
      return new Promise((resolve, reject) => {
      swal({
        title: 'Sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
    })
    }
    askForConfirmationMsg(confirm: string) {
      return new Promise((resolve, reject) => {
      swal({
        title: confirm,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
    })
    }

    popup(template, title, width_in_px) {
      swal({
        title: title,
        // tslint:disable-next-line:max-line-length
        html: '<div style="background-color: #F2F7FF;" class="card"><div class="card-body"><div class="col-md-12">' + template + '</div></div></div>',
        width: width_in_px,
        showCancelButton: false,
        showConfirmButton: false
    }).catch(swal.noop)
    }

    normal_alert(msg) {
      swal({
        title: '<span style="color: red">' + msg + '</span>',
        text: 'Closing in 2 seconds..',
        timer: 2000,
        showConfirmButton: false
    }).catch(swal.noop)
    }
    permission_alert(msg) {
      swal({
        title: '<span style="color: red">' + msg + '</span>',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey : false,
    }).catch(swal.noop)
    }

}
