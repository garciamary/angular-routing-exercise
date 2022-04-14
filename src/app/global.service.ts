import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  title = "Routing exercise";

  constructor(public appAuthService:AppAuthService) { }

  setToUpperCase(text:string){
    return text.toUpperCase();
  }
}

