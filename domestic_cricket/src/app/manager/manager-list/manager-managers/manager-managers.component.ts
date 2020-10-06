import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from '../../../service/manager/manager.service';
import { ManagerModel } from '../../../class-model/ManagerModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ClubModel } from '../../../class-model/ClubModel';
import { ClubService } from '../../../service/club/club.service';






@Component({
  selector: 'app-manager-managers',
  templateUrl: './manager-managers.component.html',
  styleUrls: ['./manager-managers.component.scss']
})
export class ManagerManagersComponent implements OnInit {

  @Input() manager: ManagerModel;
  @Input() state: any
  active: boolean

  club: ClubModel

  constructor(private router: Router, private route: ActivatedRoute, private clubService: ClubService) {
  }

  ngOnInit() {
    if (this.state === 'true') {
      this.active = true
    } else {
      this.active = false
    }

    this.clubService.getClubDataOfManager(this.manager.managerId).subscribe(res => {
      this.club = res;
      console.log(res);
    })
  }

  more() {
    console.log(this.manager.userId.userId);
    this.router.navigate(["../user-profile-view", this.manager.userId.userId], { relativeTo: this.route });
  }

  accept() {

    this.router.navigate(["../manager-register", this.manager.userId.userId], { relativeTo: this.route });
  }


}
