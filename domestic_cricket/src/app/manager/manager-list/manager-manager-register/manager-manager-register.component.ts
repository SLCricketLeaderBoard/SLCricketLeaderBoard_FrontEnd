import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../../class-model/UserModel'

@Component({
  selector: 'app-manager-manager-register',
  templateUrl: './manager-manager-register.component.html',
  styleUrls: ['./manager-manager-register.component.scss']
})
export class ManagerManagerRegisterComponent implements OnInit {

  managerRegisterForm: FormGroup;
  // User : UserModel

  constructor(private formBuilder:FormBuilder) {
    this.managerRegisterForm = this.formBuilder.group({
      userName: new FormControl(null,Validators.compose([Validators.required])),
      fullName: new FormControl(null,Validators.compose([Validators.required])),
      nameWithInitials: new FormControl(null,Validators.compose([Validators.required])),
      nic: new FormControl(null,Validators.compose([Validators.required])),
      contactNumber: new FormControl(null,Validators.compose([Validators.required])),
      email: new FormControl(null,Validators.compose([Validators.required])),
      address: new FormControl(null,Validators.compose([Validators.required])),
      password: new FormControl(null,Validators.compose([Validators.required])),
      confirmPassword : new FormControl(null,Validators.compose([Validators.required]))

    })
   }

  ngOnInit() {
  }

  register(){

    const userName:String = this.managerRegisterForm.value['userName'];
    const fullName:String = this.managerRegisterForm.value['fullName'];
    const nameWithInitials: String = this.managerRegisterForm.value['nameWithInitials'];
    const nic: String = this.managerRegisterForm.value['nic'];
    const contactNumber: String = this.managerRegisterForm.value['contactNumber'];
    const email:String = this.managerRegisterForm.value['email'];
    const address:String = this.managerRegisterForm.value['address'];
    const password:String = this.managerRegisterForm.value['password'];
    const role:Number = 2;
    const status = 0;
    const id=0;
    const regDate:Date = new Date();
  
    console.log(userName);

   
    const user:UserModel = new UserModel(id,userName,fullName,nameWithInitials,nic,contactNumber,role,email,password,address,regDate);

    console.log(user);
    
  }

  reset(){
    this.managerRegisterForm.reset();
  }
}
