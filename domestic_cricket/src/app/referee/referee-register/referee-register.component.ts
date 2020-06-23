import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserModel } from '../../class-model/UserModel'
import { RefereeService } from '../../service/referee/referee.service'

@Component({
  selector: 'app-referee-register',
  templateUrl: './referee-register.component.html',
  styleUrls: ['./referee-register.component.scss']
})
export class RefereeRegisterComponent implements OnInit {
  refereeRegisterForm: FormGroup;
  done: boolean = false;
  valid: boolean = false;
  user: UserModel = null;

  constructor(private refereeService: RefereeService) {

    //let numericRegex = /^[0-9]+$/;

    //let nicRanger = /^[vV0-9]+$/;

    this.refereeRegisterForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      nameWithInitials: new FormControl(null, [Validators.required]),
      nic: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required])
    })

  }

  ngOnInit() {


    this.refereeRegisterForm.statusChanges.subscribe(state => {
      console.log(state);

      if (state == "VALID") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    })

  }

  register() {

    const userName: String = this.refereeRegisterForm.value['userName'];
    const fullName: String = this.refereeRegisterForm.value['fullName'];
    const nameWithInitials: String = this.refereeRegisterForm.value['nameWithInitials'];
    const nic: String = this.refereeRegisterForm.value['nic'];
    const contactNumber: String = this.refereeRegisterForm.value['contactNumber'];
    const email: String = this.refereeRegisterForm.value['email'];
    const address: String = this.refereeRegisterForm.value['address'];
    const password: String = this.refereeRegisterForm.value['nic'];
    const role: Number = 5;
    const id = 0;
    const regDate: Date = new Date();
    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcUe1moupzaLWXiANaYFIt4jys-rl2OeXwOydel1YWIO22vDW6&usqp=CAU";

    console.log(userName);


    const user: UserModel = new UserModel(id, userName, fullName, nameWithInitials, nic, contactNumber, role, email, password, address, regDate, 1, profileImage);

    this.refereeService.registerReferee(user).subscribe(res => {
      console.log(res);
      const date = new Date()
      this.done = !this.done;
    }, error => {
      console.log(error);
    })
  }

  reset() {
    this.refereeRegisterForm.reset();
  }

}

