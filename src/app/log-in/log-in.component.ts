import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  username = '';
  password = '';

  constructor(private _globalService:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.username, this.password);
    this._globalService.appAuthService.setLogin(this.username, this.password);
    if(this.username != '' && this.password != ''){
      this._router.navigate(['/']);
    }
  }

}
