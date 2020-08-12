import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClubModel } from '../../class-model/ClubModel';
import { ClubService } from '../../service/club/club.service';
import { MatchModel } from '../../class-model/MatchModel';
import { MatchService } from '../../service/match/match.service';


interface ballState {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-refree-live-matches',
  templateUrl: './refree-live-matches.component.html',
  styleUrls: ['./refree-live-matches.component.scss']
})
export class RefreeLiveMatchesComponent implements OnInit {






  userId:String
  liveMatchDataForm:FormGroup
  liveTodayMatches:MatchModel[];


  constructor(private matchService:MatchService,private clubService:ClubService) {
    this.userId=sessionStorage.getItem('userId');

    this.liveMatchDataForm = new FormGroup(
      {
        runs: new FormControl(null, [Validators.required]),
        legBy: new FormControl(null,[Validators.required]),
        wicket: new FormControl(null, [Validators.required]),
        ballState: new FormControl(null, [Validators.required]),

      });

      console.log(this.userId);
      this.matchService.getLivetodayMatchForReferee(this.userId).subscribe(res=>{
        console.log(res);
        this.liveTodayMatches=res;        
      })
   }
   
  ngOnInit() {
  }

}
