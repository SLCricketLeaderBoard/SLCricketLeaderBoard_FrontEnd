import { Component, OnInit, Input } from '@angular/core';
import { SponsorModel } from '../../class-model/SponsorModel';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nonregsponsors',
  templateUrl: './nonregsponsors.component.html',
  styleUrls: ['./nonregsponsors.component.scss']
})
export class NonregsponsorsComponent implements OnInit {

  @Input()
  sponsor:SponsorModel;
  constructor(private router:Router,private route:ActivatedRoute) { }

  
  ngOnInit() {
    console.log(this.sponsor);
  }
  more(){
    this.router.navigate(["../user-profile-view",this.sponsor.userId.userId], { relativeTo: this.route });
  }

}
