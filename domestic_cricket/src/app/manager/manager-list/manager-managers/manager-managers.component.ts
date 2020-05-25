import { Component, OnInit, Input } from '@angular/core';
import { ManagerService, Manager, User } from '../../../service/manager/manager.service';





@Component({
  selector: 'app-manager-managers',
  templateUrl: './manager-managers.component.html',
  styleUrls: ['./manager-managers.component.scss']
})
export class ManagerManagersComponent implements OnInit {

  @Input()
  manager:any;

  constructor() {
   }

  ngOnInit() {
    console.log(this.manager);
    
  }

}
