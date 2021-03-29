import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthData } from '../common_interfaces/auth-data.model';
// for http error handling
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private api_obj: ApiEndpointsService) { }
  login(username: string, password: string): Observable<{msg: string, flag: number, user_id: string,
     branch_code: string, current_db: string, sig: string, head_db: string, role: string}>  {
    const authData: AuthData = { username: username, password: password };
// tslint:disable-next-line: max-line-length
    return this.http.post<{msg: string, flag: number, user_id: string, branch_code: string, current_db: string, sig: string, head_db: string, role: string }>(
      this.api_obj.login_route_endpoint,
        authData
      ).pipe(catchError(this.errorHandler));
      }
      do_simple_update(data: object): Observable<{no_of_rows_updated: Array<number>}>  {
     return; /*this.http.post<{no_of_rows_updated: Array<number>}>(
       this.api_obj.do_simple_update,
         data
       ).pipe(catchError(this.errorHandler));*/
     }

  comparePassword(authData: AuthData): Observable<{is_authorized: boolean}> {
    return this.http.post<{is_authorized: boolean}>(
      this.api_obj.compare_password,
      authData
    ).pipe(catchError(this.errorHandler));
  }

  errorHandler(erro: HttpErrorResponse) {
    return throwError(erro.statusText || 'Error of server');
  }

  setLoginSession(token: string, branch_code: string, current_db: string, sig: string, head_db: string, role: string) {
    localStorage.setItem('LoggedInUser', token);
    localStorage.setItem('branch_code', branch_code);
    localStorage.setItem('current_db', current_db);
    localStorage.setItem('sig', sig);
    localStorage.setItem('head_db', head_db);
    localStorage.setItem('role', role);

  }
  setSessionUserLog (time: any, username: string) {
    localStorage.setItem('LoggedInTime', time);
    localStorage.setItem('username', username);

  }
  getUsernameSession() {
    return localStorage.getItem('username');

  }
  getLoginTime() {
    return localStorage.getItem('LoggedInTime');
  }

  getLoginSession() {
    return localStorage.getItem('LoggedInUser');

  }
  getBranchCodeSession() {
    return localStorage.getItem('branch_code');
  }
  getDatabaseSession() {
    return localStorage.getItem('current_db');
  }
  getRoleSession() {
    return localStorage.getItem('role');
  }
  getHeadDatabaseSession() {
    console.log('service');
    console.log(localStorage.getItem('head_db'));
    return localStorage.getItem('head_db');
  }
  getSigSession() {
    return localStorage.getItem('sig');
  }

  isLoggedIn() {
    return this.getLoginSession() !== null;
  }

  logout_from_browser() {
    localStorage.removeItem('LoggedInUser');
  }

  logout_from_server(): Observable<{msg: string}>  {
    return this.http.get<{msg: string}>(
      this.api_obj.logout_route_endpoint
      ).pipe(catchError(this.errorHandler));
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('LoggedInUser');
    if (!token) {
      console.log('Token does not exists');
      return false;
    } else {
      console.log('Token exists');
      return true;
    }
  }


}
