import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UmpireModel } from '../../class-model/UmpireModel';
import { UmpireService } from '../../service/umpire/umpire.service';


@Component({
  selector: 'app-umpire-list',
  templateUrl: './umpire-list.component.html',
  styleUrls: ['./umpire-list.component.scss']
})
export class UmpireListComponent implements OnInit {

  umpires:UmpireModel[];
  userAdmin = false;
  constructor(private umpireService:UmpireService,private router: Router, private route: ActivatedRoute) {
    if (sessionStorage.getItem("userRole")=="1") {
      this.userAdmin = true; 
    } 
   }

  ngOnInit() {
    this.umpireService.getAllUmpires().subscribe(res=>{
      this.umpires=res;
      console.log(this.umpires);
    });
  }


  register() {
    this.router.navigate(["../umpire-register"], { relativeTo: this.route });
  }

}
