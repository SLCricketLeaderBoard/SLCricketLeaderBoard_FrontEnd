import { Component, OnInit, Input } from '@angular/core';
import { ManagerService} from '../../../service/manager/manager.service';
import { ManagerModel } from '../../../class-model/ManagerModel';





@Component({
  selector: 'app-manager-managers',
  templateUrl: './manager-managers.component.html',
  styleUrls: ['./manager-managers.component.scss']
})
export class ManagerManagersComponent implements OnInit {

  @Input()
  manager:ManagerModel;

  constructor() {
   }

  ngOnInit() {
    console.log(this.manager);
    
  }

}
