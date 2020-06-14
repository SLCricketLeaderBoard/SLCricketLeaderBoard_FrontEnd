import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: "app-player-add",
  templateUrl: "./player-add.component.html",
  styleUrls: ["./player-add.component.scss"],
})
export class PlayerAddComponent implements OnInit {

  playerTypeList: String[] = ['Batman', 'Baller', 'All Rounder'];

  playerRegisterFrom = this.fb.group({
    userName: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    nameWithInitial: ['', [Validators.required]],
    nic: ['', [Validators.required, Validators.pattern('^\\d{9,9}[v,V]$')]],
    contactNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    playerType: [null, [Validators.required]],
    batmanType: ['', [Validators.required]],
    ballerType: ['', [Validators.required]]
  });

  get userNameField() {
    return this.playerRegisterFrom.get('userName');
  }

  get nameWithInitialField() {
    return this.playerRegisterFrom.get('nameWithInitial');
  }

  get fullNameField() {
    return this.playerRegisterFrom.get('fullName');
  }

  get nicField() {
    return this.playerRegisterFrom.get('nic');
  }

  get contactNumberField() {
    return this.playerRegisterFrom.get('contactNumber');
  }

  get addressField() {
    return this.playerRegisterFrom.get('contactNumber');
  }

  get playerTypeField() {
    return this.playerRegisterFrom.get('playerType');
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() { }
}
