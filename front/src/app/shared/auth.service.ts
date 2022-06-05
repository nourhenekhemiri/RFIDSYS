import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

import { Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LocalStorageService } from "src/app/shared/local-storage.service";

import { User } from 'src/app/user.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  //public isLoggedIn:boolean = false;
  currentUser: any = null;
  username = new Subject<string>();
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorageService: LocalStorageService,
    private notification:NotificationService

  ) {
    // this.isLoggedIn = this.getAccessToken() ? true : false;
  }


  signup(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
      catchError(this.handleError)
    )
  }

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login`, user)
      .subscribe((res: any) => {
        console.log(res);

        //this.isLoggedIn = true;
        if (res.loggedIn) {
          this.localStorageService.set('access_token', res.token);
          this.notification.success(':: logged successfully !');

          this.getUserProfile(res.userId).subscribe((res) => {
            this.localStorageService.set('user', { email: res.email, id: res._id, name: res.name, type: res.type });
            this.currentUser = res;
            if (user.type == "admin"){
              this.router.navigate(['/nav']);
            }
            else{
              this.router.navigate(['/nav']);
            }
          })
        }
        if (res.error){
          this.notification.warn(res.error);
        }
      })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return (user !== null) ? true : false;
  }


  getUserProfile(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/auth/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Object) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getUserName() {
    const user_id = this.localStorageService.get('user').id;
    this.httpClient.get('http://localhost:3000/api/auth/profile/'+user_id).subscribe((data:any)=>{
      this.username.next(data.name);
    });
  }

  usernameObserver(){
    return this.username.asObservable();
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  getAccessToken() {
    return this.localStorageService.get('access_token');
  }

  logout() {
    this.localStorageService.set('access_token', null);
    this.localStorageService.set('user', null);
    //this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);

  }
  cartSubject = new Subject<any>();
}
