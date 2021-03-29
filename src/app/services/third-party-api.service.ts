import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private http: HttpClient, private api_obj: ApiEndpointsService) { }

  // tslint:disable-next-line:max-line-length
  get_bank_details(ifsc: string): Observable<{CITY: string, BRANCH: string, CONTACT: string, ADDRESS: string, STATE: string, DISTRICT: string, BANK: string, BANKCODE: string, IFSC: string}>  {
    // tslint:disable-next-line:max-line-length
    return this.http.get<{CITY: string, BRANCH: string, CONTACT: string, ADDRESS: string, STATE: string, DISTRICT: string, BANK: string, BANKCODE: string, IFSC: string}>( this.api_obj.fetch_bank_details_endpoint + ifsc ).pipe(catchError(this.errorHandler));
      }
  get_pincode_details(pincode: number): Observable<{Array}>  {
        // tslint:disable-next-line:max-line-length
        return this.http.get<{Array}>( this.api_obj.fetch_pincode_details_endpoint + pincode ).pipe(catchError(this.errorHandler));
          }
      errorHandler(erro: HttpErrorResponse) {
        return throwError(erro.statusText || 'Error of server');
      }
}
