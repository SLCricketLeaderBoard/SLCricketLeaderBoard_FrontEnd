import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ManagerModel } from '../../class-model/ManagerModel';
import { ManagerService } from '../../service/manager/manager.service';

@Component({
  selector: "app-manager-list",
  templateUrl: "./manager-list.component.html",
  styleUrls: ["./manager-list.component.scss"],
})
export class ManagerListComponent implements OnInit {

  managers:ManagerModel[];
  constructor(private managerService:ManagerService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.managerService.getAllManagers().subscribe(res=>{
      // console.log(res);
      this.managers=res;
      console.log(this.managers);
      

      
    })
      
  }

  register() {
    this.router.navigate(["../manager-register"], { relativeTo: this.route });
  }

  
}
