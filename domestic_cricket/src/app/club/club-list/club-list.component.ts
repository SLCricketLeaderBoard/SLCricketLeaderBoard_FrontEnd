import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    let userRole = +sessionStorage.getItem("userRole");
    if(userRole!=1){
      this.router.navigate(['']);
    }
  }

  clubRegister(){
    this.router.navigate(['club-register']);
  }

}
