import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { BatmanTypeService } from '../../service/batman-type/batman-type.service';
import { BallerTypeService } from '../../service/baller-type/baller-type.service';
import { ClubService } from '../../service/club/club.service';
import { PlayerService } from '../../service/player/player.service';
import { Router } from '@angular/router';
import { UserModel } from '../../class-model/UserModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { BatmanTypeModel } from '../../class-model/BatmanTypeModel';
import { BallerTypeModel } from '../../class-model/BallerTypeModel';
import { SwalMessage } from '../../shared/swal-message';
import { UserAuthenticationServiceService } from '../../service/user/user-authentication-service.service';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../../app.constants';
import { ClubModel } from '../../class-model/ClubModel';
import { MustMatch } from '../../shared/custom_validators';

@Component({
  selector: 'app-player-signup',
  templateUrl: './player-signup.component.html',
  styleUrls: ['./player-signup.component.scss']
})
export class PlayerSignupComponent implements OnInit {

  playerTypeList: String[] = ['Batman', 'Baller', 'All Rounder'];
  batmanTypeList: BatmanTypeModel[] = [];
  ballerTypeList: BallerTypeModel[] = [];
  clubList: ClubModel[] = [];

  swalMessage: SwalMessage = new SwalMessage();
  errorMessage: string = "";
  isPasswordNotMatch: Boolean = false;

  playerRegisterForm = this.fb.group({
    userName: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    nameWithInitial: ['', [Validators.required]],
    nic: ['', [Validators.required, Validators.pattern('^\\d{9,9}[v,V]$')]],
    contactNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    playerType: ['', [Validators.required]],
    batmanType: ['', [Validators.required]],
    ballerType: ['', [Validators.required]],
    club: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });



  get userNameField() {
    return this.playerRegisterForm.get('userName');
  }

  get nameWithInitialField() {
    return this.playerRegisterForm.get('nameWithInitial');
  }

  get fullNameField() {
    return this.playerRegisterForm.get('fullName');
  }

  get nicField() {
    return this.playerRegisterForm.get('nic');
  }

  get contactNumberField() {
    return this.playerRegisterForm.get('contactNumber');
  }

  get addressField() {
    return this.playerRegisterForm.get('contactNumber');
  }

  get emailField() {
    return this.playerRegisterForm.get('email');
  }

  get playerTypeField() {
    return this.playerRegisterForm.get('playerType');
  }

  get batmanTypeField() {
    return this.playerRegisterForm.get('batmanType');
  }

  get ballerTypeField() {
    return this.playerRegisterForm.get('ballerType');
  }

  get clubField() {
    return this.playerRegisterForm.get('club');
  }

  get passwordField() {
    return this.playerRegisterForm.get('password');
  }

  get confirmPasswordField() {
    return this.playerRegisterForm.get('confirmPassword');
  }



  constructor(
    private fb: FormBuilder,
    private batamnTypeService: BatmanTypeService,
    private ballerTypeService: BallerTypeService,
    private clubService: ClubService,
    private playerService: PlayerService,
    private router: Router,
    private userAuthenticationService: UserAuthenticationServiceService
  ) { }

  ngOnInit() {
    this.guestUserAuthenticated();
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
          console.log("Success request for guest user")
          this.getBatmanTypeList();
          this.getBallerTypeList();
          this.getClubList();
        },
        (error) => {
          this.errorMessage = "INVALID CREDENTIALS.";
        }
      );
  }


  getBatmanTypeList() {
    this.batamnTypeService.getBatmanTypeList().subscribe(
      response => {
        this.batmanTypeList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getBallerTypeList() {
    this.ballerTypeService.getBallerTypeList().subscribe(
      response => {
        this.ballerTypeList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubList() {
    this.clubService.getClubs(1).subscribe(
      response => {
        this.clubList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  playerFormSubmit() {
    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcUe1moupzaLWXiANaYFIt4jys-rl2OeXwOydel1YWIO22vDW6&usqp=CAU";
    let user: UserModel = new UserModel(0, this.userNameField.value, this.fullNameField.value, this.nameWithInitialField.value, this.nicField.value, this.contactNumberField.value, 4, this.emailField.value, this.passwordField.value, this.addressField.value, new Date(), 0, profileImage);
    let player: PlayerModel = new PlayerModel(0, +this.playerTypeField.value + 1, this.batmanTypeField.value, this.ballerTypeField.value, this.clubField.value, user);

    this.playerService.playerSignup(player).subscribe(
      response => {
        if (response == 1) {
          this.swalMessage.successMessage('You Request Successful.');
          this.router.navigate(['']);
        } else {
          this.errorMessage = "Please change your  Email or Nic";
          this.swalMessage.warnningMessage("Your Request Not Successful");
        }

      },
      error => {
        console.log(error);
        this.swalMessage.notSuccessMessage('Player Registration Not Successful')
      }
    );
  }

  close() {
    this.errorMessage = "";
  }

}
