import { Component, OnInit, Input } from '@angular/core';
import { TournamentModel } from '../../../class-model/TournamentModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-element',
  templateUrl: './tournament-element.component.html',
  styleUrls: ['./tournament-element.component.scss']
})
export class TournamentElementComponent implements OnInit {

  @Input()tournement:TournamentModel
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   console.log(
    
    );
  }

  createMatch(){
    // this.router.navigate(["/create-match",this.tournement.tournamentId], { relativeTo: this.route });
    
    this.router.navigate(["create-match",this.tournement.tournamentId], { relativeTo: this.route });

  }

}