import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';
import { DBOperation } from 'app/common_interfaces/db_operation.model';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private http: HttpClient, private api_obj: ApiEndpointsService) { }

  errorHandler(erro: HttpErrorResponse) {
    return throwError(erro || 'Error of server');
  }

  do_list_all(table_name: string): Observable<{rows: Array<object>}>  {
    return this.http.post<{ rows: Array<object> }>(
      this.api_obj.do_list_all,
      { table_name: table_name }
    ).pipe(catchError(this.errorHandler))
  }

  do_fetch_by_last_timestamp(table_name: string): Observable<{rows: Array<object>}>  {
    return this.http.post<{ rows: Array<object> }>(
      this.api_obj.do_fetch_by_last_timestamp,
      { table_name: table_name }
    ).pipe(catchError(this.errorHandler))
  }

  do_single_insertion_cus_info(data: object): Observable<{ inserted_id: number, inserted_row, flag: number }> {

    return this.http.post<{ inserted_id: number, inserted_row, flag: number }>(
      this.api_obj.do_single_insertion_cus_info,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_single_insertion_emp_info(data: object): Observable<{ inserted_id: number, inserted_row, flag: number }> {

    return this.http.post<{ inserted_id: number, inserted_row, flag: number }>(
      this.api_obj.do_single_insertion_emp_info,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_single_insertion(data: object): Observable<{ inserted_id: number, inserted_row, flag: number }> {

    return this.http.post<{ inserted_id: number, inserted_row, flag: number }>(
      this.api_obj.do_single_insertion,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_simple_update(data: object): Observable<{ no_of_rows_updated: Array<number> }> {
    return this.http.post<{ no_of_rows_updated: Array<number> }>(
      this.api_obj.do_simple_update,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_custom_update(data: object): Observable<{ no_of_rows_updated: number }> {
    return this.http.post<{ no_of_rows_updated: number }>(
      this.api_obj.do_custom_update,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_simple_update_cus_info(data: object): Observable<{ no_of_rows_updated: Array<number> }> {
    return this.http.post<{ no_of_rows_updated: Array<number> }>(
      this.api_obj.do_simple_update_cus_info,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_simple_update_emp_info(data: object): Observable<{ no_of_rows_updated: Array<number> }> {
    return this.http.post<{ no_of_rows_updated: Array<number> }>(
      this.api_obj.do_simple_update_emp_info,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_simple_id_read(data1): Observable<{ row: object }> {
    const data2 = {
      table_name: data1.table_name,
      // tslint:disable-next-line:radix
      db: data1.db,
      // tslint:disable-next-line: radix
      data: [parseInt(data1.data)]
    }
    return this.http.post<{ row: object }>(
      this.api_obj.do_simple_id_read,
      data2
    ).pipe(catchError(this.errorHandler));
  }

  do_simple_id_read_with_where_condition(query_data): Observable<{ row: object, no_of_rows: number}> {
    const data_to_send = {
      table_name: query_data.table_name,
      columns_to_retrieve: query_data.columns_to_retrieve,
      db: query_data.db,
      data: [parseInt(query_data.data)],

    }
    return this.http.post<{ row: object, no_of_rows: number }>(
      this.api_obj.do_simple_id_read_with_where_condition,
      data_to_send
    ).pipe(catchError(this.errorHandler));
  }

  do_custom_read(query_data): Observable<{ row: object, no_of_rows: number}> {
    const data_to_send = {
      table_name: query_data.table_name,
      columns_to_retrieve: query_data.columns_to_retrieve,
      db: query_data.db,
      data: query_data.data,

    }
    return this.http.post<{ row: object, no_of_rows: number }>(
      this.api_obj.do_custom_read,
      data_to_send
    ).pipe(catchError(this.errorHandler));
  }

  do_custom_select_query(query_data): Observable<{row: object, no_of_rows: number}> {
    const data_to_send = {
      data: query_data.data,
      db: query_data.db
    }
    return this.http.post<{ row: object, no_of_rows: number }>(
      this.api_obj.do_custom_select_query,
      data_to_send
    ).pipe(catchError(this.errorHandler));
  }


  do_simple_read(data: object): Observable<{ rows: Array<object>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<object>, no_of_rows: number }>(
      this.api_obj.do_simple_read,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_delete(data: object): Observable<{ no_of_rows_deleted: number }> {
    return this.http.post<{ no_of_rows_deleted: number }>(
      this.api_obj.do_delete,
      data
    ).pipe(catchError(this.errorHandler));
  }

  do_bulk_insert(data: object): Observable<{ inserted_data: Array<object>, flag: number, not_found: Array<object> }> {
    return this.http.post<{ inserted_data: Array<object>, flag: number, not_found: Array<object> }>(
      this.api_obj.do_bulk_insert,
      data
    ).pipe(catchError(this.errorHandler));
  }

  get_searchbox_result(data: FormData): Observable<Array<string>> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Array<string>>(this.api_obj.do_searchbox, data).pipe(catchError(this.errorHandler));
  }

  get_table_data(): Observable<string> {
    const data: FormData = new FormData();
    data.append('data_table', '1');

    // tslint:disable-next-line:max-line-length
    return this.http.post<string>(this.api_obj.table_backend, data).pipe(catchError(this.errorHandler));
  }

  get_table_options(): Observable<any> {
    const data: FormData = new FormData();
    data.append('options', '1');

    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(this.api_obj.table_backend, data).pipe(catchError(this.errorHandler));
  }



  do_share_certificate_print(data: FormData): Observable<any> {

    return this.http.post<any>(this.api_obj.do_share_certificate_print, data).pipe(catchError(this.errorHandler));
  }


  // tslint:disable-next-line:max-line-length
  bulk_transaction_entry(data: object): Observable<{ feedback: Array<object>, columns_not_inserted: Array<object>, msg: string, ledger_transaction_id: number, warning: string, flag1: number, flag2: number, no_of_rows: number }> {

    // tslint:disable-next-line:max-line-length
    return this.http.post<{ feedback: Array<object>, columns_not_inserted: Array<object>, msg: string, ledger_transaction_id: number, warning: string, flag1: number, flag2: number, no_of_rows: number }>(this.api_obj.bulk_transaction_entry, data).pipe(catchError(this.errorHandler));
  }

  get_multi_branch_details(data1: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.get_multi_branch_details,
      data1
    ).pipe(catchError(this.errorHandler));
  }
  get_multi_branch_details1(data1: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.get_multi_branch_details1,
      data1
    ).pipe(catchError(this.errorHandler));
  }
  bulk_transaction_entry_head_branch(data: object): Observable<{
    feedback: Array<object>,
    columns_not_inserted: Array<object>, msg: string, ledger_transaction_id: number, warning: string,
    flag1: number, flag2: number, no_of_rows: number
  }> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<{ feedback: Array<object>, columns_not_inserted: Array<object>, msg: string, ledger_transaction_id: number, warning: string, flag1: number, flag2: number, no_of_rows: number }>(this.api_obj.bulk_transaction_entry_head_branch, data).pipe(catchError(this.errorHandler));
  }

  do_single_fetch_with_where_condition(data1: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.do_single_fetch_with_where_condition,
      data1
    ).pipe(catchError(this.errorHandler));
  }

  do_single_fetch_employee_with_where_condition(data1: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.do_single_fetch_employee_with_where_condition,
      data1
    ).pipe(catchError(this.errorHandler));
  }


  do_get_target_link_session(data: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.do_get_target_link_session,
      data
    ).pipe(catchError(this.errorHandler));
  }
  do_get_all_banks_by_link(data: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.do_get_all_banks_by_link,
      data
    ).pipe(catchError(this.errorHandler));
  }
  do_get_binder_session(data: object): Observable<{ rows: Array<any>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<any>, no_of_rows: number }>(
      this.api_obj.do_get_binder_session,
      data
    ).pipe(catchError(this.errorHandler));
  }


  get_max_id_cus_info(data: object): Observable<{ rows: Array<object>, no_of_rows: number }> {

    // tslint:disable-next-line:max-line-length
    return this.http.post<{ rows: Array<object>, no_of_rows: number }>(this.api_obj.get_max_id_cus_info, data).pipe(catchError(this.errorHandler));
  }

  get_max_id_emp_info(data: object): Observable<{ rows: Array<object>, no_of_rows: number }> {
    return this.http.post<{ rows: Array<object>, no_of_rows: number }>(this.api_obj.get_max_id_emp_info, data).pipe(catchError(this.errorHandler));
  }

  get_max_id(data: object): Observable<{ rows: Array<object>, no_of_rows: number }> {

    // tslint:disable-next-line:max-line-length
    return this.http.post<{ rows: Array<object>, no_of_rows: number }>(this.api_obj.get_max_id, data).pipe(catchError(this.errorHandler));
  }
  addfile(image: File, title: string): Observable<{ message: string }> {
    const postData = new FormData();
    postData.append('image', image, title);
    // postData.append('test', test);
    return this.http.post<{ message: string }>(this.api_obj.file_uploader, postData).pipe(catchError(this.errorHandler));

  }

  security_get_existing_customer_by_last_timestamp(data1: object): Observable<{rows: Array<object>}>  {
    return this.http.post<{rows: Array<object>}>( this.api_obj.security_get_existing_customer_by_last_timestamp, data1 ).
    pipe(catchError(this.errorHandler));
  }


}
