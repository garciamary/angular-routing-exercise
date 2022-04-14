import { AppAuthService } from './../app-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLogged = false;

  constructor(private _appAuthService:AppAuthService, private _router:Router) { }

  onLogOut(){
    this._appAuthService.setLogin('','');
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {
    this._appAuthService.isLogged.subscribe(
      (auth) => {
        console.log(auth)
        this.isLogged=auth;
      }
    )
  }

}
