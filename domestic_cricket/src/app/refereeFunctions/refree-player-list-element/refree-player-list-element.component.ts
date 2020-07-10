import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedPlayerModel } from '../../class-model/SelectedPlayerModel';

@Component({
  selector: 'app-refree-player-list-element',
  templateUrl: './refree-player-list-element.component.html',
  styleUrls: ['./refree-player-list-element.component.scss']
})
export class RefreePlayerListElementComponent implements OnInit {

  @Input() player:SelectedPlayerModel
  constructor(private router:Router,private route:ActivatedRoute) {
    
   }

  ngOnInit() {
  }

  insertDetails(){
    this.router.navigate(["player-record",this.player.selectedPlayerId], { relativeTo: this.route});
  }

}
