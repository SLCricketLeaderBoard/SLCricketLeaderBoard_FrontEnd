import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament/tournament.service';
import { TournamentModel } from '../../class-model/TournamentModel';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { error } from 'protractor';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SwalMessage } from '../../shared/swal-message';


@Component({
  selector: 'app-tournament-create',
  templateUrl: './create-tournamnet.component.html',
  styleUrls: ['./create-tournamnet.component.scss']
})
export class TournamentRegisterComponent implements OnInit {

  errorMessage;
  option:Number;
  userRole:Number;
  selectedTournamentName:String;
 

  mainTitle:String="Tournament Register";
  formTitle:String="Tournament Registration Form";
  swalMessage:SwalMessage = new SwalMessage();


  
  tournamentRegisterFrom=this.fb.group({
    tournamentName:['',[Validators.required]],
    tournamentId:['',[Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]]
  });


  get tournamentNameField(){
    return this.tournamentRegisterFrom.get('tournamentName');
  }
  get tournamentIdField(){
    return this.tournamentRegisterFrom.get('tournamentId');
  }
  get startDateField(){
    return this.tournamentRegisterFrom.get('startDate');
  }
  get endDateField(){
    return this.tournamentRegisterFrom.get('endDate');
  }
 


  constructor(
    private tournamentService : TournamentService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.userRole = +sessionStorage.getItem("userRole");
    this.option = this.route.snapshot.params['option'];

    if(this.userRole!=1 && this.userRole!=2){
      this.router.navigate(['']);
    }
    if(this.userRole==2 && this.option==0){
      this.router.navigate(['']);
    }

 
      this.getTournamentData(this.option);
    
  }

  tournamentFormSubmit(){
    let club = new TournamentModel(-1,this.tournamentNameField.value,this.tournamentIdField.value,this.startDateField.value,this.endDateField.value);

    if(this.option>0){
      this.tournamentUpdate(tournament);
    }else{
      this.tournamenttRegister(tournament);
    }
  } 

  tournamentRegister(tournament:tournament Model){
    tournament.status=0;
    this.tournamentService.registerTournament(tournament).subscribe(
      response => {

          if(response==1){
            this.router.navigate(['tournamnent-list']);
            this.swalMessage.successMessage('Tournament registration successful');
          }
          if(response==0){
            this.errorMessage = 'There is another tournament has same name or email or address or contactNmber';
            this.swalMessage.notSuccessMessage('Tournament registration not successful');
          }
          
      },
         error =>{
        this.errorMessage="Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Club registration not successful');
      }
    );
  }


  tournamentUpdate(tournament:TournamentModel){
    tournament.tournamentId = this.option;
    this.tournamentService.Updatetournament(tournament).subscribe(
      response => {
        if(response==1){
          this.swalMessage.successMessage('Tournament data successfully updated');

          if(this.userRole==1){
            this.router.navigate(['tournamnent-list']);
          }else{
            this.router.navigate(['tournamnent-list']);
          }
         
        }
        if(response==0){
          this.errorMessage="There is another tournament has this kind of Data";
          this.swalMessage.notSuccessMessage('Tournament data not updated successful');
        }
      },
      error => {
        this.errorMessage="Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Tournament data not updated successful');
      }
    );
  }

  getTournamentData(tournamentId:Number){
    this.tournamentService.getTournamentData(tournamentId).subscribe(
      response => {
        this.tournamentNameField.setValue(response.tournamentName);
        this.tournamentIdField.setValue(response.tournamentId);
        this.startDateField.setValue(response.startDate);
        this.endDateField.setValue(response.endDate);
        

        this.selectedTournamentName = response.tournamentId +"";
        this.mainTitle = "Update "+this.tournamentNameField.value+" Details";
        this.formTitle = "Update Form";
      },
      error => {
        let status:Number = this.ErrorResponse(error);
        if(status==400){
          this.errorMessage="There is problem.Please try again";
        }else if(status==404){
          this.errorMessage="There is no any tournament for that id."
        }else{
          this.errorMessage="Server side error.Please try again"
        }
      }
    );
  }

  close(){
    this.errorMessage="";
  }

  public ErrorResponse(error: HttpErrorResponse) {
      return error.status;
  };

}
