import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { BatmanTypeModel } from '../../class-model/BatmanTypeModel';
import { BallerTypeModel } from '../../class-model/BallerTypeModel';
import { BatmanTypeService } from '../../service/batman-type/batman-type.service';
import { BallerTypeService } from '../../service/baller-type/baller-type.service';
import { UserModel } from '../../class-model/UserModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { ClubService } from '../../service/club/club.service';
import { SwalMessage } from '../../shared/swal-message';
import { PlayerService } from '../../service/player/player.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-player-add",
  templateUrl: "./player-add.component.html",
  styleUrls: ["./player-add.component.scss"],
})
export class PlayerAddComponent implements OnInit {

  playerTypeList: String[] = ['Batman', 'Baller', 'All Rounder'];
  batmanTypeList: BatmanTypeModel[] = [];
  ballerTypeList: BallerTypeModel[] = [];

  swalMessage: SwalMessage = new SwalMessage();
  errorMessage: string = "";

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
    ballerType: ['', [Validators.required]]
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

  constructor(
    private fb: FormBuilder,
    private batamnTypeService: BatmanTypeService,
    private ballerTypeService: BallerTypeService,
    private clubService: ClubService,
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBatmanTypeList();
    this.getBallerTypeList();
  }

  playerTypeSelection() {
    console.log(this.playerTypeField.value)
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

  playerFormSubmit() {
    let clubId: Number = +sessionStorage.getItem('clubId');
    let user: UserModel = new UserModel(0, this.userNameField.value, this.fullNameField.value, this.nameWithInitialField.value, this.nicField.value, this.contactNumberField.value, 4, this.emailField.value, this.nicField.value, this.addressField.value, new Date());
    let player: PlayerModel = new PlayerModel(0, +this.playerTypeField.value + 1, this.batmanTypeField.value, this.ballerTypeField.value, null, user);

    this.clubService.getClubData(clubId).subscribe(
      response => {//ClubModel
        player.clubId = response;
        this.playerService.playerRegister(player).subscribe(
          response => {
            if (response == 1) {
              this.router.navigate(['player-list']);
              this.swalMessage.successMessage('Player Registration Successful');
            } else {
              this.errorMessage = "There is another user has same  Email or Nic";
              this.swalMessage.warnningMessage("Player Registration Not Successful");
            }

          },
          error => {
            console.log(error);
            this.swalMessage.notSuccessMessage('Player Registration Not Successful')
          }
        );
      },
      error => {
        console.log(error);
        this.swalMessage.notSuccessMessage('Player Registration Not Successful')
      }
    );
  }
}
