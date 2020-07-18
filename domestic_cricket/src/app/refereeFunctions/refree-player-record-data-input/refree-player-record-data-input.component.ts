import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatmanRecordModel } from '../../class-model/BatmanRecordModel';
import { BallerRecordModel } from '../../class-model/BallerRecordModel';
import { SelectedPlayerModel } from '../../class-model/SelectedPlayerModel';
import { SelectedPlayersService } from '../../service/selected-players/selected-players.service';
import { FieldingRecordModel } from '../../class-model/FieldingRecordModel';
import { PlayerRecordModel } from '../../class-model/PlayerRecordModel';
import { PlayerRecordService } from '../../service/player-record/player-record.service';

@Component({
  selector: 'app-refree-player-record-data-input',
  templateUrl: './refree-player-record-data-input.component.html',
  styleUrls: ['./refree-player-record-data-input.component.scss']
})
export class RefreePlayerRecordDataInputComponent implements OnInit {

  selectedPlayerId:Number;
  playerRecordForm: FormGroup;
  selectedPlayer:SelectedPlayerModel
  battingRuns:Number=0;
  facedBalls:Number=0;
  fours:Number=0;
  sixes:Number=0;
  notOut:Number=0;
  overs:Number=0;
  numberOfRunsAgainst:Number=0;
  wickets:Number=0;
  halfentury:Number=0;
  sentury:Number=0;
  doubleSentury:Number=0;
  tripleSentury:Number=0;
  foubleSentury:Number=0;
  fivebleSentury:Number=0;
  hatrick:Number=0;
  catches:Number=0;
  battingPoints:Number=0;
  bowllingPoints:Number=0;
  fieldingPoints:Number=0;
  response:Number;


  playerRecord:PlayerRecordModel

  constructor(private router:Router,private route:ActivatedRoute,private selectedPlayerService:SelectedPlayersService,private playerRecordService:PlayerRecordService) { 
    
    this.playerRecordForm =  new FormGroup({
      battingRuns: new FormControl(null,[Validators.required]),
      facedBalls: new FormControl(null,[Validators.required]),
      fours: new FormControl(null,[Validators.required]),
      sixes:new FormControl(null,[Validators.required]),
      notOut:new FormControl(null,[Validators.required]),
      overs:new FormControl(null,[Validators.required]),
      numberOfRunsAgainst:new FormControl(null,[Validators.required]),
      wickets:new FormControl(null,[Validators.required]),
      hatTriks:new FormControl(null,[Validators.required]),
      catches:new FormControl(null,[Validators.required]),
    })
    
    
    this.route.params.subscribe(res => {
      this.selectedPlayerId = res['selectedPlayerId'];
    })

    this.selectedPlayerService.getSelectedPlayerById(this.selectedPlayerId).subscribe(res=>{
      console.log(this.selectedPlayerId);
      
      console.log(res);
      
      this.selectedPlayer=res;
    })

    this.playerRecordService.getPlayerRecord(this.selectedPlayerId).subscribe(res=>{
      console.log(res);
      this.playerRecord=res;

      this.playerRecordForm.setValue({
      battingRuns: res.batmanRecord.battingRuns,
      facedBalls: res.batmanRecord.facedBalls,
      fours: res.batmanRecord.fours,
      sixes: res.batmanRecord.sixes,
      notOut: res.batmanRecord.notOut,
      overs: res.ballerRecord.overs,
      numberOfRunsAgainst: res.ballerRecord.numberOfRunsAgainst,
      wickets:res.ballerRecord.wickets,
      hatTriks:res.ballerRecord.hatTriks,
      catches:res.fieldingRecord.catches,
      })
    }) 
  }

  ngOnInit() {


  }

  submit(){

    this.playerRecord.ballerRecord.selectedPlayerId=this.selectedPlayer;
    this.playerRecord.batmanRecord.selectedPlayerId=this.selectedPlayer;
    this.playerRecord.fieldingRecord.selectedPlayerId=this.selectedPlayer;
    
    this.playerRecord.batmanRecord.battingRuns = +this.playerRecordForm.value["battingRuns"];
    this.playerRecord.batmanRecord.facedBalls = +this.playerRecordForm.value["facedBalls"];
    this.playerRecord.batmanRecord.fours = +this.playerRecordForm.value["fours"];
    this.playerRecord.batmanRecord.sixes = +this.playerRecordForm.value["sixes"];
    this.playerRecord.batmanRecord.notOut = +this.playerRecordForm.value["notOut"];
    this.playerRecord.ballerRecord.overs = +this.playerRecordForm.value["overs"];
    this.playerRecord.ballerRecord.numberOfRunsAgainst = +this.playerRecordForm.value["numberOfRunsAgainst"];
    this.playerRecord.ballerRecord.wickets = +this.playerRecordForm.value["wickets"];
    this.playerRecord.ballerRecord.hatTriks = this.playerRecordForm.value["hatTriks"];
    this.playerRecord.fieldingRecord.catches = this.playerRecordForm.value["catches"];
    
    this.selectedPlayer.state=1;
    
    if(this.battingRuns>=500){
      this.fivebleSentury=1;
    }else if(this.battingRuns>=400){
      this.foubleSentury=1;
    }else if(this.battingRuns>=300){
      this.tripleSentury=1;
    }else if(this.battingRuns>=200){
      this.doubleSentury=1;
    }else if(this.battingRuns>=100){
      this.sentury=1;
    }else if(this.battingRuns>=50){
      this.halfentury=1;
    }

    
    this.playerRecord.batmanRecord.battingPoints = (+this.playerRecord.batmanRecord.battingRuns/20)+(+this.playerRecord.batmanRecord.notOut)*(0.005);

    this.playerRecord.ballerRecord.ballingPoints= (+this.playerRecord.ballerRecord.wickets)-((+this.playerRecord.ballerRecord.numberOfRunsAgainst)/((+this.playerRecord.ballerRecord.overs)*6));

    this.playerRecord.fieldingRecord.fieldingPoints= (+this.playerRecord.batmanRecord.battingPoints)+(+this.playerRecord.ballerRecord.ballingPoints);



    
    this.playerRecordService.playerRecordRecord(this.playerRecord).subscribe(res=>{
      console.log(res);
      this.response=res;
    },error=>{
      console.log(error);
      this.response=0;
    })
    

  }

}
