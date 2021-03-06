


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
      userName: new FormControl({ value: null, disabled: true }),
      fullName: new FormControl({ value: null, disabled: true }),
      nameWithInitials: new FormControl({ value: null, disabled: true }),
      nic: new FormControl({ value: null, disabled: true }),
      contactNumber: new FormControl({ value: null, disabled: true }),
      email: new FormControl({ value: null, disabled: true }),
      address: new FormControl({ value: null, disabled: true }),
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
