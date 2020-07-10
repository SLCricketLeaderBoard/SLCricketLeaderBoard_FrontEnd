import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refree-player-record-data-input',
  templateUrl: './refree-player-record-data-input.component.html',
  styleUrls: ['./refree-player-record-data-input.component.scss']
})
export class RefreePlayerRecordDataInputComponent implements OnInit {

  selectedPlayerId:Number;

  constructor(private router:Router,private route:ActivatedRoute) { 
    this.route.params.subscribe(res => {
      this.selectedPlayerId = res['selectedPlayerId'];
    })
  }

  ngOnInit() {
  }

}
