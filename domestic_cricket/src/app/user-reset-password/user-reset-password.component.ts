import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../class-model/UserModel';
import { UserServiceService } from '../service/user/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.scss']
})
export class UserResetPasswordComponent implements OnInit {

  userId:String
  user:UserModel

  userRegisterFrom:FormGroup

  constructor(private route:ActivatedRoute,private userService:UserServiceService) { 

         this.userRegisterFrom = new FormGroup({
                  userName: new FormControl({value:null,disabled:true}),
                  fullName: new FormControl({value:null,disabled:true}),
                  nameWithInitials: new FormControl({value:null,disabled:true}),
                  nic: new FormControl({value:null,disabled:true}),
                  contactNumber: new FormControl({vlaue:null,disabled:true}),
                  email: new FormControl({value:null,disabled:true}),
                  address: new FormControl({value:null,disabled:true}),
                  password: new FormControl(null,[Validators.required]),
                  confirmPassword : new FormControl(null,[Validators.required])
        });

        this.route.params.subscribe(res=>{
          this.userId=res['id'];
          console.log(this.userId);
        })

    this.userService.getUserByUserId(this.userId).subscribe(response=>{
      this.user=response;
      console.log(response.userName);
      console.log(response.contactNumber);

      this.userRegisterFrom.setValue({
          userName : response.userName,
          fullName : response.fullName,
          nameWithInitials : response.nameWithInitial,
          nic : response.nic,
          contactNumber : response.contactNumber,
          email : response.email,
          address :response.address,
          password : null,
          confirmPassword: null         
        });

    })
  }

  ngOnInit() {
  
  }

  resetPassword(){
    console.log(this.userRegisterFrom);
    
  }

}
