import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationServiceService } from '../service/user/user-authentication-service.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //reactive form definition
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });

  //getters for reactive form module email
  get emailField(){
    return this.loginForm.get('email')
  }

  //getters for reactive form module password
  get passwordField(){
    return this.loginForm.get('password')
  }

  errorMessage;
  showSpinner=false;

  constructor(
    private router:Router,
    private userAuthenticationService:UserAuthenticationServiceService,
    private fb:FormBuilder
  ) { }

  ngOnInit(
  
  ) {}

  

  handleJWTTokeLogin(){
    //this.showSpinner=true;   
    this.userAuthenticationService.executeJWTAuthenticationService(this.emailField.value,this.passwordField.value).subscribe(
          response => {
            // this.userService.getUser(this.emailField.value).subscribe(
            //   response => {
            //     this.handleSuccessfulResponse(response);
            //   },
            //   error =>{
            //     this.showSpinner=false;   
            //     this.errorMessage="INVALID CREDENTIALS.";
            //     console.log(error);
            //   }
            // );
          },
          error => {
            // this.showSpinner=false;
            // this.errorMessage="INVALID CREDENTIALS.";
            // this.handleErrorResponse(error);
          }
        );
   }

  //3)Valid User
  handleSuccessfulResponse(response){
    
    if(response.userId != null){
      if(response.userId > 0 && response.status==1){

        sessionStorage.setItem('userId',response.userId);
        sessionStorage.setItem('userRole',response.role);
        
        let userName = response.firstName+' '+response.lastName;
        sessionStorage.setItem('userName',userName);

        // should check status backendside
        if(response.role === 2){

          this.router.navigate(['admin-staff-student-dash-board'])
        }else if( response.role == 3 ){
          this.router.navigate(['time-table']);
        }else if(response.role==4){
          this.router.navigate(['instructor-time-table']);
        }else if( response.role == 5){
          this.router.navigate(['time-table']);
        }else{
          this.router.navigate(['dashboard']);
        }
      }
      // else if(response.status == 0){
      //   this.errorMessage="Account Deactivate.Please Inform to the administrator";
      // }else{
        
      // }
    
    }
    this.showSpinner=false;
  }

  //Invalid User
  

  //
  closeError(){
    this.errorMessage=null;
  }

}
