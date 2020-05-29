import { Component, OnInit, Input } from '@angular/core';
import { ManagerService} from '../../../service/manager/manager.service';
import { ManagerModel } from '../../../class-model/ManagerModel';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-manager-managers',
  templateUrl: './manager-managers.component.html',
  styleUrls: ['./manager-managers.component.scss']
})
export class ManagerManagersComponent implements OnInit {

  @Input()
  manager:ManagerModel;

  constructor(private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit() {
    console.log(this.manager);
    
  }

  more(){
    console.log(this.manager.userId.userId);
    this.router.navigate(["../user-reset-password",this.manager.userId.userId], { relativeTo: this.route });
  }



}
