import { Injectable } from '@angular/core';
import { UserAuthenticationServiceService } from '../user/user-authentication-service.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private userAuthenticationService : UserAuthenticationServiceService,
    private router : Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userAuthenticationService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
