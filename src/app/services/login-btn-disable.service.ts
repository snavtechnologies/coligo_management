import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginBtnDisableService {

  is_disabled = false;
  private disableUpdated = new Subject();


  constructor() { }

  get_disabled_status () {
    return this.is_disabled;
  }

  getDisableeListener() {
    return this.disableUpdated.asObservable();
  }

  disable_btn_changed(change: boolean) {
  this.disableUpdated.next(change);
  }
}
