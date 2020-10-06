import { Component, OnInit } from '@angular/core';
import { StadiumService } from '../../service/stadium/stadium.service';
import { StadiumModel } from '../../class-model/StadiumModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.scss']
})
export class StadiumListComponent implements OnInit {


  stadiums:StadiumModel[];
  constructor(private stadiumService:StadiumService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe(res=>{
      this.stadiums=res;
    })
  }

  register(){
    this.router.navigate(["../stadium-register"], { relativeTo: this.route });
  }

}
