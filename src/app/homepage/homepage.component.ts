import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  title = '';


  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.title;
    this.title = this._globalService.setToUpperCase(this.title);
  }

}
