import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spin = new Subject();

  getSpinnerListener() {
    return this.spin.asObservable();
  }

  trig_spin(trig: boolean) {
    this.spin.next(trig);
    }
  constructor() { }
}
