import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ManagerService, Manager } from '../../service/manager/manager.service';

@Component({
  selector: "app-manager-list",
  templateUrl: "./manager-list.component.html",
  styleUrls: ["./manager-list.component.scss"],
})
export class ManagerListComponent implements OnInit {

  managers : Manager[];
  constructor(private managerService:ManagerService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.managerService.getAllManagers().subscribe(
      res=>{
        console.log(res);
        
        this.managers=res;
      },error=>{
        console.log(error);
        
      }
    )
      
  }

  register() {
    this.router.navigate(["../manager-register"], { relativeTo: this.route });
  }

  
}
