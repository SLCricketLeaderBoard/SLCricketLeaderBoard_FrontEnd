import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { createECDH } from 'crypto';
import { CreateTournamnetComponent } from '../create-tournamnet/create-tournamnet.component';

@Component({
  selector: 'app-tournamnet-list',
  templateUrl: './tournamnet-list.component.html',
  styleUrls: ['./tournamnet-list.component.scss']
})
export class TournamnetListComponent implements OnInit {

 

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  newTournament()
  {
    this.router.navigate(["../create-tournament"], { relativeTo: this.route });
    
  }
}






  