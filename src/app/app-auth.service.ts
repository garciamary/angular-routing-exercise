import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  isLogin = false;
  isLogged = new Subject<boolean>();


  constructor() {}

  setLogin(username: string, password: string) {
    this.isLogin= false;
    if (username != '' && password != '') {
      this.isLogin = true;
    }
    this.isLogged.next(this.isLogin);
    console.log("is login: " + this.isLogin)
  }

  checkLogin(){
    return this.isLogin;
  }


}
