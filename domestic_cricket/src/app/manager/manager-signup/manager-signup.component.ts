import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserModel } from '../../class-model/UserModel';
import { ManagerService } from '../../service/manager/manager.service';
import { ClubService } from '../../service/club/club.service';
import { Router } from '@angular/router';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../../app.constants';
import { UserAuthenticationServiceService } from '../../service/user/user-authentication-service.service';
import { ConfirmedValidator } from '../../validators/matchClubValidators.validator';


@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.scss']
})
export class ManagerSignupComponent implements OnInit {

  managerRegisterForm: FormGroup;
  done: boolean = false;
  valid: boolean = false;
  user: UserModel = null;


  constructor(
    private managerService: ManagerService,
    private router: Router,
    private userAuthenticationService: UserAuthenticationServiceService
  ) {
    let numericRegex = /^[0-9]+$/;

    let nicRanger = /^[vV0-9]+$/;

    this.managerRegisterForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      nameWithInitials: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      nic: new FormControl(null, [
        Validators.required,
        Validators.pattern(nicRanger),
        Validators.minLength(9),
      ]),
      contactNumber: new FormControl(null, [
        Validators.required,
        this.forbiddenContactNumbersValidator.bind(this),
        Validators.pattern(numericRegex),
        Validators.minLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
      password:  new FormControl(null, [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl(null,[Validators.required,Validators.minLength(6)])
    },{
    validators: this.password.bind(this)});
  }


  ngOnInit() {
    this.guestUserAuthenticated();
    this.managerRegisterForm.statusChanges.subscribe((state) => {
      console.log(state);

      if (state == "VALID") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    });
  }

  guestUserAuthenticated() {
    let email: string = GUEST_USER_EMAIL;
    let password: string = GUEST_USER_PASSWORD;
    this.userAuthenticationService
      .executeJWTAuthenticationService(
        email,
        password
      )
      .subscribe(
        (response) => {
          console.log("Success request for guest user");
        },
        (error) => {
          //this.errorMessage = "INVALID CREDENTIALS.";
          console.log(error);
        }
      );
  }

  password(formGroup: FormGroup) {
    const { value: newPassword } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return newPassword === confirmPassword ? null : { passwordNotMatch: true };
  }


  register() {
    const userName: String = this.managerRegisterForm.value["userName"];
    const fullName: String = this.managerRegisterForm.value["fullName"];
    const nameWithInitials: String = this.managerRegisterForm.value[
      "nameWithInitials"
    ];
    const nic: String = this.managerRegisterForm.value["nic"];
    const contactNumber: String = this.managerRegisterForm.value[
      "contactNumber"
    ];
    const email: String = this.managerRegisterForm.value["email"];
    const address: String = this.managerRegisterForm.value["address"];
    const password: String = this.managerRegisterForm.value["password"];
    const role: Number = 2;
    const id = 0;
    const regDate: Date = new Date();
    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcUe1moupzaLWXiANaYFIt4jys-rl2OeXwOydel1YWIO22vDW6&usqp=CAU";


    const user: UserModel = new UserModel(
      id,
      userName,
      fullName,
      nameWithInitials,
      nic,
      contactNumber,
      role,
      email,
      password,
      address,
      regDate,
      0,
      profileImage
    );

    console.log(user);

    this.managerService.registerManager(user).subscribe(
      (res) => {
        console.log("Helllllllllllllllll")
        console.log(res.userId);
        this.router.navigate(['club-signup', res.userId]);
        console.log(res);
        //const date = new Date();
        //this.done = !this.done;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  // reset() {
  //   this.managerRegisterForm.reset();
  // }

  frobiddenContactNumbers: Array<string> = ["000000000", "0000000000"];

  forbiddenContactNumbersValidator(
    control: FormControl
  ): { [s: string]: boolean } {
    if (this.frobiddenContactNumbers.indexOf(control.value) != -1) {
      return { contactNumberForbidden: true };
    }
    return null;
  }

  customMinValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (
      control.value !== undefined &&
      (isNaN(control.value) || control.value >= 100000000)
    ) {
      return { customMin: true };
    }
    return null;
  }
}
