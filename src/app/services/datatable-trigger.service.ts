import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatatableTriggerService {

  private dt = new Subject();

  getDatatableListener() {
    return this.dt.asObservable();
  }

  trig_datatable(trig: boolean, table_id: string, sum_cols: string, need_scroll: boolean) {
    const trig_detail = {
      trig : trig,
      table_id: table_id,
      sum_cols: sum_cols,
      need_scroll: need_scroll
    }
    this.dt.next(trig_detail);
    }

  constructor() { }
}
