import { Component, OnInit, Input } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-tournament-element',
  templateUrl: './public-tournament-element.component.html',
  styleUrls: ['./public-tournament-element.component.scss']
})
export class PublicTournamentElementComponent implements OnInit {

  @Input()tournement:TournamentModel
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  getMatches(){
    this.router.navigate([this.tournement.tournamentId], { relativeTo: this.route });
  }

}
