import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../service/match/match.service';
import { MatchModel } from '../../class-model/MatchModel';

@Component({
  selector: 'app-public-match-element',
  templateUrl: './public-match-element.component.html',
  styleUrls: ['./public-match-element.component.scss']
})
export class PublicMatchElementComponent implements OnInit {


  Matches: MatchModel[];
  constructor(private router:Router,private route:ActivatedRoute,private matchService:MatchService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params.tournamentId);
      console.log(this.route.snapshot.data);
      this.matchService.getMatchesForCalender(params.tournamentId).subscribe(res=>{
        this.Matches=res;
      })
    });
  }
    // console.log(tournamenetId);
}
