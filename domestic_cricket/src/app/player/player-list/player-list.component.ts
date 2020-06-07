import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  playerRegister(){
    this.router.navigate(['player-add']);
  }

}
