


import { Component, OnInit } from '@angular/core';
import { UserModel } from '../class-model/UserModel';
import { UserServiceService } from '../service/user/user-service.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserModel;
  userId: String;
  userProfileFrom: FormGroup
  response: String;

  constructor(private route: ActivatedRoute,private userService: UserServiceService, public formBuilder: FormBuilder) {
    
    this.route.params.subscribe(res => {
      this.userId = res['id'];
      console.log(this.userId);
    })


    this.userProfileFrom = this.formBuilder.group({
      userName: new FormControl("", Validators.required),
      fullName: new FormControl("", Validators.required),
      nameWithInitials: new FormControl("", Validators.required),
      nic: new FormControl("", [Validators.required,]),
      contactNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
    });

  }

  ngOnInit() {
    console.log(this.userId);
    this.userService.getUserByUserId(this.userId).subscribe(response => {
      this.user = response;
      console.log(response);

      this.userProfileFrom.setValue({
        userName: response.userName,
        fullName: response.fullName,
        nameWithInitials: response.nameWithInitial,
        nic: response.nic,
        contactNumber: response.contactNumber,
        email: response.email,
        address: response.address,
        password: "",
        confirmPassword: "",

      });
    });
  }

}
