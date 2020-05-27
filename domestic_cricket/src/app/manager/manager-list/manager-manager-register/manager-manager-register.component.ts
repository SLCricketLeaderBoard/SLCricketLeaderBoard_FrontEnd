import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../../class-model/UserModel';
import { ManagerService } from '../../../service/manager/manager.service';

@Component({
  selector: 'app-manager-manager-register',
  templateUrl: './manager-manager-register.component.html',
  styleUrls: ['./manager-manager-register.component.scss']
})
export class ManagerManagerRegisterComponent implements OnInit {

  managerRegisterForm: FormGroup;
  done: boolean = false;
  valid: boolean = false;
  user:UserModel = null;

  constructor(private managerService:ManagerService) {

    let numericRegex = /^[0-9]+$/;

    let nicRanger = /^[vV0-9]+$/;
   
    this.managerRegisterForm = new FormGroup({
      userName: new FormControl(null,Validators.required),
      fullName: new FormControl(null,[Validators.required]),
      nameWithInitials: new FormControl(null,[Validators.required]),
      nic: new FormControl(null,[Validators.required,Validators.pattern(nicRanger)]),
      contactNumber: new FormControl(null,[Validators.required,this.forbiddenContactNumbersValidator.bind(this),Validators.pattern(numericRegex)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      address: new FormControl(null,[Validators.required])
    })
    
   }

  ngOnInit() {
      

    this.managerRegisterForm.statusChanges.subscribe(state=>{
      console.log(state);
      
      if(state=="VALID"){
        this.valid=true;
      }else{
        this.valid=false;
      }
    })

     }

  register(){

    const userName:String = this.managerRegisterForm.value['userName'];
    const fullName:String = this.managerRegisterForm.value['fullName'];
    const nameWithInitials: String = this.managerRegisterForm.value['nameWithInitials'];
    const nic: String = this.managerRegisterForm.value['nic'];
    const contactNumber: String = this.managerRegisterForm.value['contactNumber'];
    const email:String = this.managerRegisterForm.value['email'];
    const address:String = this.managerRegisterForm.value['address'];
    const password:String = this.managerRegisterForm.value['nic'];
    const role:Number = 2;
    const id=0;
    const regDate:Date = new Date();
  
    console.log(userName);

   
    const user:UserModel = new UserModel(id,userName,fullName,nameWithInitials,nic,contactNumber,role,email,password,address,regDate);

    this.managerService.registerManager(user).subscribe(res=>{
      console.log(res);
      const date = new Date()
      this.done=!this.done;
      },error=>{
        console.log(error);
      })
  }

    reset(){
    this.managerRegisterForm.reset();
  }

  
  frobiddenContactNumbers: Array<string> = ['000000000','0000000000'];

  forbiddenContactNumbersValidator(control: FormControl):{[s:string]: boolean}{
    if(this.frobiddenContactNumbers.indexOf(control.value) != -1){
      return {'contactNumberForbidden': true};
    }
    return null;
  }
}
