import { Injectable } from '@angular/core';
import { user } from './user_class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  currentUser:user;
  redirectURL:string;

  constructor(private _route:Router) { }
  get isLoggedIn():boolean{
    return !!this.currentUser;
  }
  logIn(username:string,password:string):void {
    if(username==='admin'){
      this.currentUser={
        id:'admin@gmail.com',
        uname:'admin',
        isAdmin:true
      }
      return;
    }
    this.currentUser={
      id:username+'@gmail.com',
      uname:username,
      isAdmin:false
    }
  }
  logout(){
    this.currentUser=null;
    this._route.navigate(['/']);
  }
}
