import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeModel } from '../class-model/RefereeModel';
import { RefereeService } from '../service/referee/referee.service';


@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  referees:RefereeModel[];
  userAdmin = false;

  constructor(private refereeService:RefereeService,private router: Router, private route: ActivatedRoute) {
    if (sessionStorage.getItem("userRole")=="1") {
      this.userAdmin = true; 
    }    
   }

  ngOnInit() {

    this.refereeService.getAllReferees().subscribe(res=>{
      // console.log(res);
      this.referees=res;
      // console.log(this.referees);     
    })
    
    
  }

  register() {
    this.router.navigate(["../referee-register"], { relativeTo: this.route });
  }

}
