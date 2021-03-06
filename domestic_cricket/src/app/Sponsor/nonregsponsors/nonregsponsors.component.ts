import { Component, OnInit, Input } from '@angular/core';
import { SponsorModel } from '../../class-model/SponsorModel';
import { Router, ActivatedRoute } from '@angular/router';
import {UserModel} from '../../class-model/UserModel';
//import { UserServiceService } from '../../service/user/user-service.service';
import { SponsorService } from '../../service/sponsor/sponsor.service';

@Component({
  selector: 'app-nonregsponsors',
  templateUrl: './nonregsponsors.component.html',
  styleUrls: ['./nonregsponsors.component.scss']
})
export class NonregsponsorsComponent implements OnInit {

  @Input()
  sponsor:SponsorModel;
  @Input()state:any
  active:boolean

  user:UserModel
  done: boolean = false;
  message:any

  constructor(private router:Router,private route:ActivatedRoute,private sponsorService:SponsorService) { }

  
  ngOnInit() {
    console.log(this.sponsor);
  }
  more(){
    this.router.navigate(["../user-profile-view",this.sponsor.userId.userId], { relativeTo: this.route });
  }

  accept(){
    this.sponsorService.sponsorAccept(this.sponsor.userId.userId).subscribe(res=>{
      console.log(res);
      this.message=res;
      this.done=!this.done;
  })
  }

  }