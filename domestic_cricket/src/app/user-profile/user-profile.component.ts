import { Component, OnInit } from '@angular/core';
import { UserModel } from '../class-model/UserModel';
import { UserServiceService } from '../service/user/user-service.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserModel;
  userId: String;
  userProfileFrom:FormGroup
  response:String;

  constructor(private userService:UserServiceService,public formBuilder: FormBuilder) { 
    this.userId=sessionStorage.getItem('userId');
    
    let nicRanger = /^[vV0-9]+$/;
    let numericRegex = /^[0-9]+$/;

    this.userProfileFrom = this.formBuilder.group({
      userName: new FormControl("",Validators.required),
      fullName: new FormControl("",Validators.required),
      nameWithInitials: new FormControl("",Validators.required),
      nic: new FormControl("",[Validators.required,Validators.pattern(nicRanger),Validators.minLength(9)]),
      contactNumber: new FormControl("",[Validators.required,this.forbiddenContactNumbersValidator.bind(this),Validators.pattern(numericRegex),Validators.minLength(9)]),
      email: new FormControl("",Validators.required),
      address: new FormControl("",Validators.required),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword : new FormControl("",[Validators.required,Validators.minLength(6)])
      },{
      validators: this.password.bind(this)
});
  
}

  ngOnInit() {
    console.log(this.userId);
    this.userService.getUserByUserId(this.userId).subscribe(response=>{
       this.user=response;
      console.log(response); 
      
      this.userProfileFrom.setValue({
        userName : response.userName,
        fullName : response.fullName,
        nameWithInitials : response.nameWithInitial,
        nic : response.nic,
        contactNumber : response.contactNumber,
        email : response.email,
        address :response.address,
        password : "",
        confirmPassword: ""         
      });


    });    
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  frobiddenContactNumbers: Array<string> = ['000000000','0000000000'];

  forbiddenContactNumbersValidator(control: FormControl):{[s:string]: boolean}{
    if(this.frobiddenContactNumbers.indexOf(control.value) != -1){
      return {'contactNumberForbidden': true};
    }
    return null;
  }

  resetProfile(){
    
    const userName = this.userProfileFrom.value['userName'];
    const fullName = this.userProfileFrom.value['fullName'];
    const nameWithInitial = this.userProfileFrom.value['nameWithInitials'];
    const nic = this.userProfileFrom.value['nic'];
    const contactNumber = this.userProfileFrom.value['contactNumber'];
    
    const email = this.userProfileFrom.value['email'];
    const address = this.userProfileFrom.value['address'];
    
    
    const password:String = this.userProfileFrom.value['password'];
    const id = this.user.userId;

    const updatedUser:UserModel = new UserModel(this.user.userId,userName,fullName,nameWithInitial,nic,contactNumber,this.user.role,email,password,address,this.user.regDate);
    console.log(updatedUser);
    this.userService.resetPassword(updatedUser).subscribe(res=>{
      console.log(res);
      this.response=res;

      
        setTimeout(() => {
            console.log('Test');
            this.ngOnInit();
        }, 2000/60);
    
      // this.ngOnInit();
    },error=>{
      console.log(error);
    })

  }


}
