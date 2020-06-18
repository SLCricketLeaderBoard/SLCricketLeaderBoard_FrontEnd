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
    tournamentCreateForm: FormGroup;
    done: boolean = false;
    valid: boolean = false;
    user:TournamentModel= null;


    startDate :Date = new Date();
    endDate :Date = new Date();
    

  constructor(private tournamentService:TournamentService) { 

    let numericRegex = /^[0-9]+$/;

    let nicRanger = /^[vV0-9]+$/;

    this.tournamentCreateForm = new FormGroup({
    tournamentName: new FormControl(null,Validators.required),
    tournamentId: new FormControl(null,[Validators.required]),
    startDate: new FormControl(null,[Validators.required]),
    endDate: new FormControl(null,[Validators.required])

  })
}
  ngOnInit() {

  

  }
  reset(){
    //this.createTournament.reset();
  }
  create(){

    //
  }
  

  }
;
