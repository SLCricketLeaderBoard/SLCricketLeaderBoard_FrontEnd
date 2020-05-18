import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserAuthenticationServiceService } from './user-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor{

  constructor(
    private userAuthentication : UserAuthenticationServiceService
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.userAuthentication.getAuthenticatedToken();
    let username = this.userAuthentication.getAuthenticatedUser()
  
    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }
    return next.handle(request);
  }
  
}
