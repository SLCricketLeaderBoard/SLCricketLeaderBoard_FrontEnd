import { Component, OnInit } from '@angular/core';
import { ClubModel } from '../../class-model/ClubModel';
import { ClubService } from '../../service/club/club.service';
import { UmpireService } from '../../service/umpire/umpire.service';
import { UmpireModel } from '../../class-model/UmpireModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchType } from '../../class-model/MatchType';
import { MatchService } from '../../service/match/match.service';
import { StadiumModel } from '../../class-model/StadiumModel';
import { StadiumService } from '../../service/stadium/stadium.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Asass'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  clubList:ClubModel[] = [];
  umpireList:UmpireModel[]=[];
  matchTypes:MatchType[]=[];
  stadiums:StadiumModel[]=[];

  createMatch:FormGroup;

  startDate :Date = new Date();
  endDate :Date = new Date();

  constructor(private clubService:ClubService,private umpireService:UmpireService,private matchService:MatchService,private stadiumServices:StadiumService) {

    this.createMatch = new FormGroup({
      club01: new FormControl(null,[Validators.required]),
      club02: new FormControl(null,[Validators.required]),
      tournementRound: new FormControl(null,[Validators.required]),
      startDate: new FormControl(null,[Validators.required]),
      endDate: new FormControl(null,[Validators.required]),
      time: new FormControl(null,[Validators.required]),
      stadium: new FormControl(null,[Validators.required]),
      refree: new FormControl(null,[Validators.required]),
      umpire01: new FormControl(null,[Validators.required]),
      umpire02: new FormControl(null,[Validators.required]),
      umpire03: new FormControl(null,[Validators.required]),
      sponser: new FormControl(null,[Validators.required])
    })



    this.clubService.getClubs(1).subscribe(
      response => {
        this.clubList = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this.umpireService.getAvailableUmpires().subscribe(response=>{
      this.umpireList=response
      console.log(response);
    },error=>{
      console.log(error); 
    });

    this.matchService.getMatchType().subscribe(response=>{
      this.matchTypes=response;
      console.log(response);
    },error=>{
      console.log(error);
    })


    this.stadiumServices.getAllStadiums().subscribe(response=>{

      this.stadiums=response;
      console.log(response);
    })


  
  }

  ngOnInit() {
    // this.startDate= new Date();
    // this.endDate = new Date()

  }

  reset(){
    this.createMatch.reset();
  }
  
  create(){
    // const club01:String = this.createMatch.value['club01'];
    // const club02:String = this.createMatch.value['club02'];
    // const tournementRound : number = this.createMatch.value['tournementRound'];
    // const time : String = this.createMatch.value['time'];
    // const stadium : String = this.createMatch.value['stadium'];
    // const refree : String = this.createMatch.value['refree'];
    // const umpire01 : String = this.createMatch.value['umpire01'];
    // const umpire02 : String = this.createMatch.value['umpire02'];
    // const umpire03 : String = this.createMatch.value['umpire03'];
    // const sponser : String = this.createMatch.value['sponser']
 
    console.log(this.createMatch.value['startDate']);
    

  }

}
