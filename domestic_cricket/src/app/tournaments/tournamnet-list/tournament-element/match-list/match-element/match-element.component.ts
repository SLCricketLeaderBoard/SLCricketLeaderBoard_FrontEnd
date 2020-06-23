import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../../../../../class-model/MatchModel';
import { ClubModel } from '../../../../../class-model/ClubModel';
import { PlayerModel } from '../../../../../class-model/PlayerModel';
import { UmpireModel } from '../../../../../class-model/UmpireModel';
import { ClubService } from '../../../../../service/club/club.service';
import { UmpireService } from '../../../../../service/umpire/umpire.service';
import { PlayerService } from '../../../../../service/player/player.service';

@Component({
  selector: 'app-match-element',
  templateUrl: './match-element.component.html',
  styleUrls: ['./match-element.component.scss']
})
export class MatchElementComponent implements OnInit {
  
  @Input() match:MatchModel
  club01:ClubModel;
  club02:ClubModel;
  captainClubOne : PlayerModel
  captainClubTwo : PlayerModel
  winClub:ClubModel
  umpireOne: UmpireModel
  umpireTwo: UmpireModel
  umpireThree: UmpireModel
  tossWinClub: ClubModel
  constructor(private clubServie:ClubService,private umpireService:UmpireService,private playerService:PlayerService) { }

  ngOnInit() {
    this.clubServie.getClubData(this.match.clubOneId).subscribe(res=>{
      console.log(res);
      this.club01=res;
    })

    this.clubServie.getClubData(this.match.clubTwoId).subscribe(res=>{
      console.log(res);
      this.club02=res;
    })

    this.clubServie.getClubData(this.match.winTeamId).subscribe(res=>{
      console.log(res);
      if(res){
        this.winClub=res;
      }
    })

    this.umpireService.getUmpire(this.match.umpireOneId).subscribe(res=>{
      console.log(res);
      this.umpireOne=res;
    })

    this.umpireService.getUmpire(this.match.umpireTwoId).subscribe(res=>{
      console.log(res);
      this.umpireTwo=res;
    })

    this.umpireService.getUmpire(this.match.umpireThreeId).subscribe(res=>{
      console.log(res);
      this.umpireThree=res;
    })

    // this.clubServie.getClubData(this.match.tossWinTeam).subscribe(res=>{
    //   console.log(res);
    //   this.tossWinClub=res;      
    // })


  }


}
