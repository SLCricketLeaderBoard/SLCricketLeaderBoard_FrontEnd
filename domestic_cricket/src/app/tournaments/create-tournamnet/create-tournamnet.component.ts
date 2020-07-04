 import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentService } from '../../service/tournament/tournament.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tournamnet',
  templateUrl: './create-tournamnet.component.html',
  styleUrls: ['./create-tournamnet.component.scss']
})


export class CreateTournamnetComponent implements OnInit {
  tournamentRegisterForm: FormGroup;
    done: boolean = false;
    valid: boolean = false;
    user:TournamentModel= null;

    startDate :Date = new Date();
    endDate :Date = new Date();
    

  constructor(private tournamentService:TournamentService) { 

    let numericRegex = /^[0-9]+$/;

    let nicRanger = /^[vV0-9]+$/;

    this.tournamentRegisterForm = new FormGroup({
    tournamentName: new FormControl(null,Validators.required),
    startDate: new FormControl(null,[Validators.required]),
    endDate: new FormControl(null,[Validators.required]),
    regEndDate: new FormControl(null,[Validators.required]),

  })
}
  ngOnInit() {
  }
  reset(){
    this.tournamentRegisterForm.reset();
  }
  create(){
    const tournamentId: Number  = null; 
    const tournamentName: String = this.tournamentRegisterForm.value['tournamentName'];
    const startDate: Date = this.tournamentRegisterForm.value['startDate'];
    const finishDate: Date = this.tournamentRegisterForm.value['endDate'];
    const registartionCloseDate: Date = this.tournamentRegisterForm.value['regEndDate'];

    const tournament: TournamentModel = new TournamentModel(
      tournamentId,
      tournamentName,
      startDate,
      finishDate,
      registartionCloseDate
    );
    console.log(tournament);

    this.tournamentService.registerTournament(tournament).subscribe(res=>{

      console.log(res);
      this.done=!this.done;
      
    },error=>{
      console.log(error);
    })
  }
  }
;
