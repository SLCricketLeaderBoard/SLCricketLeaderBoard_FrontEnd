
import { Component, OnInit, Input } from '@angular/core';
//import { ManagerService} from '../../../service/manager/manager.service';
import { RefereeModel } from '../../class-model/RefereeModel';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.scss']
})
export class RefereeListComponent implements OnInit {

  @Input()
  referee:RefereeModel;

  constructor(private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit() {
    console.log(this.referee);
  }

  more(){
    this.router.navigate(["../user-profile-view",this.referee.userId.userId], { relativeTo: this.route });
  }



}
