import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = '';

  constructor(
    private _globalService:GlobalService
    ) { }


  ngOnInit(): void {
    this.title = this._globalService.title;
  }

}
