import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor(private _appAuthService:AppAuthService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     let isLogin = this._appAuthService.checkLogin();
     if(isLogin == false){
       return false;
     }
    return false;
  }

}

