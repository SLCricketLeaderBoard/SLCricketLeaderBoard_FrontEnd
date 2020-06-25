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
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: "app-player-add",
  templateUrl: "./player-add.component.html",
  styleUrls: ["./player-add.component.scss"],
})
export class PlayerAddComponent implements OnInit {

  playerData: PlayerModel;
  playerTypeList: String[] = ['Batman', 'Baller', 'All Rounder'];
  batmanTypeList: BatmanTypeModel[] = [];
  ballerTypeList: BallerTypeModel[] = [];

  selectPlayerType: String = '';
  selectBallerType: String = '';
  selectBatmanType: String = '';

  swalMessage: SwalMessage = new SwalMessage();
  errorMessage: string = "";

  playerRegisterForm = this.fb.group({
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
    return this.playerRegisterForm.get('address');
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let playerId: Number = +this.route.snapshot.params['playerId'];
    this.getPlayerData(playerId);

    this.getBatmanTypeList();
    this.getBallerTypeList();
  }

  getPlayerData(playerId: Number) {
    this.playerService.getPlayer(playerId).subscribe(
      response => {
        this.playerData = response;
        this.nameWithInitialField.setValue(this.playerData.userId.nameWithInitial);
        this.fullNameField.setValue(this.playerData.userId.fullName);
        this.emailField.setValue(this.playerData.userId.email);
        this.nicField.setValue(this.playerData.userId.nic);
        this.addressField.setValue(this.playerData.userId.address);
        this.contactNumberField.setValue(this.playerData.userId.contactNumber);
        this.ballerTypeField.setValue(this.playerData.ballerTypeId);
        this.batmanTypeField.setValue(this.playerData.batmanTypeId);
        this.playerTypeField.setValue(this.playerData.specialType);

        this.selectBallerType = this.playerData.ballerTypeId.type;
        this.selectBatmanType = this.playerData.batmanTypeId.type;
        this.selectPlayerType = this.playerTypeList[+this.playerData.specialType - 1];
      },
      error => {
        console.log(error);
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

  playerFormSubmit() {
    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcUe1moupzaLWXiANaYFIt4jys-rl2OeXwOydel1YWIO22vDW6&usqp=CAU";
    let user: UserModel = new UserModel(this.playerData.userId.userId, this.playerData.userId.userName, this.fullNameField.value, this.nameWithInitialField.value, this.nicField.value, this.contactNumberField.value, 4, this.emailField.value, this.playerData.userId.password, this.addressField.value, new Date(), 1, profileImage);
    let player: PlayerModel = new PlayerModel(this.playerData.playerId, +this.playerTypeField.value + 1, this.batmanTypeField.value, this.ballerTypeField.value, this.playerData.clubId, user);


    this.playerService.playerUpdate(player).subscribe(
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
        this.swalMessage.notSuccessMessage('Player Registration Not Successful');
      }
    );
  }

  close() {
    this.errorMessage = "";
  }
}


