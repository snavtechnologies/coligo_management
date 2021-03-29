import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class GettingService {

  constructor(private http: HttpClient, private api_obj: ApiEndpointsService) { }

  kyc_get_existing_customer_by_last_timestamp(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.kyc_fetch_customer_by_ts_endpoint ).pipe(catchError(this.errorHandler));
  }
  get_existing_employee_by_last_timestamp(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.fetch_employee_by_ts_endpoint ).pipe(catchError(this.errorHandler));
  }
  kyc_get_all_customer(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.kyc_fetch_all_customer ).pipe(catchError(this.errorHandler));
  }
  get_all_employee(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.fetch_all_employee ).pipe(catchError(this.errorHandler));
  }
  errorHandler(erro: HttpErrorResponse) {
    return throwError(erro.statusText || 'Error of server');
  }
  get_default_db(): Observable<{db: string}>  {
    return this.http.get<{db: string}>( this.api_obj.get_default_db_endpoint ).pipe(catchError(this.errorHandler));
  }
  do_get_binder_session(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.do_get_binder_session ).pipe(catchError(this.errorHandler));
  }
  do_get_max_sd_id(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.do_get_max_sd_id ).pipe(catchError(this.errorHandler));
  }
  do_get_branch_code(): Observable<{rows: Array<object>}>  {
    return this.http.get<{rows: Array<object>}>( this.api_obj.do_get_branch_code ).pipe(catchError(this.errorHandler));
  }

}
