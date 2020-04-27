import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  constructor(private _user_auth:UserAuthService,private _router:Router) { }
  canActivate(_next:ActivatedRouteSnapshot,_state:RouterStateSnapshot):boolean{
    return this.checkLoggedIn(_state.url);
}
canLoad(_route:Route):boolean{
  return this.checkLoggedIn(_route.path);
}
checkLoggedIn(url:string):boolean{
  if(this._user_auth.isLoggedIn){
      return true;
  }
  this._user_auth.redirectURL=url;
  this._router.navigate(['/']);
  return false;
}
}
