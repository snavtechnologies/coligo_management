import { Injectable } from "@angular/core";
import { NotificationserviceService } from "./notificationservice.service";
import { SpinnerService } from "./spinner.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    constructor(private notification: NotificationserviceService, private spinnerService: SpinnerService) {}

    handle_error(error: string) {
        console.log(error);
        this.notification.openSnackBar(error, '', 'red-snackbar');
        this.spinnerService.trig_spin(false);
      }

}