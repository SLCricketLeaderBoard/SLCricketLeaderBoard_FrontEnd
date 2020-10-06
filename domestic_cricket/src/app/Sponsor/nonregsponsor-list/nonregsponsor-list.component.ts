import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SponsorModel } from '../../class-model/SponsorModel';
import { SponsorService } from '../../service/sponsor/sponsor.service';

@Component({
  selector: 'app-nonregsponsor-list',
  templateUrl: './nonregsponsor-list.component.html',
  styleUrls: ['./nonregsponsor-list.component.scss']
})
export class NonregsponsorListComponent implements OnInit {

  sponsors:SponsorModel[];
  regsponsors:SponsorModel[];
  constructor(private sponsorService:SponsorService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sponsorService.getNonregsponsors().subscribe(res=>{
     
      this.sponsors=res;
      console.log(res);
      

    })

    this.sponsorService.getregsponsors().subscribe(res=>{
     
      this.regsponsors=res;
      console.log(res);
      

    })
  }

}
