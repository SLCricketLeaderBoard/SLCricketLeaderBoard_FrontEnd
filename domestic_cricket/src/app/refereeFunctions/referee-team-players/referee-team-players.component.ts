import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubModel } from '../../class-model/ClubModel';
import { SelectedPlayerModel } from '../../class-model/SelectedPlayerModel';
import { SelectedPlayersService } from '../../service/selected-players/selected-players.service';
import { ClubService } from '../../service/club/club.service';

@Component({
  selector: 'app-referee-team-players',
  templateUrl: './referee-team-players.component.html',
  styleUrls: ['./referee-team-players.component.scss']
})
export class RefereeTeamPlayersComponent implements OnInit {

  matchId:Number
  club01Id:Number
  club02Id:Number

  club1:ClubModel;
  club2:ClubModel;

  selectedPlayesClub1Updated : SelectedPlayerModel[];
  selectedPlayesClub1NotUpdated : SelectedPlayerModel[];
  selectedPlayesClub2Updated : SelectedPlayerModel[];
  selectedPlayesClub2NotUpdated : SelectedPlayerModel[];

  constructor(private router:Router,private route:ActivatedRoute,private clubService:ClubService,private selectedPlayerService:SelectedPlayersService) { 

    this.club01Id= +this.route.snapshot.queryParamMap.get('clubOneId');
    this.club02Id=  + this.route.snapshot.queryParamMap.get('clubTwoId');


    this.route.params.subscribe(res => {
      this.matchId = res['matchId'];
      
      this.selectedPlayerService.getSelectedPlayersUpdated(this.matchId,this.club01Id).subscribe(res=>{
        console.log(res);
        this.selectedPlayesClub1Updated=res;
      })



      this.selectedPlayerService.getSelectedPlayersNotUpdated(this.matchId,this.club01Id).subscribe(res=>{
        console.log(res);
        this.selectedPlayesClub1NotUpdated=res;
      })


      this.selectedPlayerService.getSelectedPlayersUpdated(this.matchId,this.club02Id).subscribe(res=>{
        console.log(res);
        this.selectedPlayesClub2Updated=res;
      })


      this.selectedPlayerService.getSelectedPlayersNotUpdated(this.matchId,this.club02Id).subscribe(res=>{
        console.log(res);
        this.selectedPlayesClub2NotUpdated=res;
      })

    },error=>{
      console.log(error);
      
    });


  }

  ngOnInit() {
    this.clubService.getClubData(this.club01Id).subscribe(res=>{
      console.log(res);
      this.club1=res;
    })

    this.clubService.getClubData(this.club02Id).subscribe(res=>{
      console.log(res);
      this.club2=res;
    })
  }

}
