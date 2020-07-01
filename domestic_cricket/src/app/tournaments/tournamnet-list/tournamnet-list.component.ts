import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { createECDH } from 'crypto';
import { CreateTournamnetComponent } from '../create-tournamnet/create-tournamnet.component';
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentService } from '../../service/tournament/tournament.service';

@Component({
  selector: 'app-tournamnet-list',
  templateUrl: './tournamnet-list.component.html',
  styleUrls: ['./tournamnet-list.component.scss']
})
export class TournamnetListComponent implements OnInit {

   registrationOpenTournaments:TournamentModel[]=[];
   registrationClosedTournaments:TournamentModel[]=[];

  constructor(private router: Router, private route: ActivatedRoute,private tournamentService:TournamentService) { 

    this.tournamentService.getRegistrationOpenTournaments().subscribe(res=>{
      console.log("tournemenst");
      console.log(res);
      this.registrationOpenTournaments= res;
    })

    this.tournamentService.getRegistrationClosedTournaments().subscribe(res=>{
      console.log("tournemenst");
      console.log(res);
      this.registrationClosedTournaments= res;
    })
  }

  ngOnInit() {
  }

  
}






  