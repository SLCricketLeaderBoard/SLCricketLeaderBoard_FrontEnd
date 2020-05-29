import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../class-model/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('init')
  user:any

  constructor() { }

  ngOnInit() {
  }

}
