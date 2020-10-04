import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { ClubModel } from '../../class-model/ClubModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ClubService } from '../../service/club/club.service';
import { UmpireService } from '../../service/umpire/umpire.service';
import { PlayerService } from '../../service/player/player.service';

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
  winClub:ClubModel
  umpireOne: UmpireModel
  umpireTwo: UmpireModel
  umpireThree: UmpireModel
  tossWinClub: ClubModel
  active:boolean
  userRole:any
  refreeActive:boolean
  constructor(private router:Router,private clubServie:ClubService,private umpireService:UmpireService,private playerService:PlayerService,private route:ActivatedRoute) { }

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

  more(){
    // tournament-list/view-matches/:tournamentId/match/:matchId
    this.router.navigate(["match-details",this.match.matchId], { relativeTo: this.route });
  }

  setSummery(){
    // tournament-list/view-matches/:tournamentId/match/:matchId
    this.router.navigate(["match-summery-input",this.match.matchId], { relativeTo: this.route });
  }
  viewPlayers(){
    this.router.navigate(["match-players",this.match.matchId], { relativeTo: this.route ,queryParams
    :{clubOneId:this.club01.clubId,clubTwoId:this.club02.clubId} });
  }
}
