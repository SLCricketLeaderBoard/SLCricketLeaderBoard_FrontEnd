import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { ClubModel } from '../../class-model/ClubModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ClubService } from '../../service/club/club.service';
import { UmpireService } from '../../service/umpire/umpire.service';
import { PlayerService } from '../../service/player/player.service';
import { PlayerRankingService } from '../../service/player-ranking/player-ranking.service';

@Component({
  selector: 'app-public-match-element-detail',
  templateUrl: './public-match-element-detail.component.html',
  styleUrls: ['./public-match-element-detail.component.scss']
})
export class PublicMatchElementDetailComponent implements OnInit {

  @Input() match:MatchModel
  @Input() played:boolean
  club01:ClubModel;
  club02:ClubModel;
  captainClubOne : PlayerModel
  captainClubTwo : PlayerModel
  tossWinClub: ClubModel
  active:boolean
  userRole:any
  refreeActive:boolean
  constructor(private playerRankingService:PlayerRankingService,private router:Router,private clubServie:ClubService,private umpireService:UmpireService,private playerService:PlayerService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.userRole=sessionStorage.getItem('userRole')

    if(this.userRole==='5'){
      this.refreeActive=true
    }else{
      false
    }

    if(this.played===true){
      this.active=true
    }else{
      this.active=false
    }

    this.playerRankingService.getClubDataForPublic(this.match.clubOneId).subscribe(res=>{
      console.log(res);
      this.club01=res;
    })

    this.playerRankingService.getClubDataForPublic(this.match.clubTwoId).subscribe(res=>{
      console.log(res);
      this.club02=res;
    })
  }


  matchDetails(){
    this.router.navigate(["match-details",this.match.matchId], { relativeTo: this.route });
  }
}
