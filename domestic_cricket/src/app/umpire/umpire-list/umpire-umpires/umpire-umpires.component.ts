import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UmpireModel } from '../../../class-model/UmpireModel';
import { UmpireService } from '../../../service/umpire/umpire.service';

@Component({
  selector: 'app-umpire-umpires',
  templateUrl: './umpire-umpires.component.html',
  styleUrls: ['./umpire-umpires.component.scss']
})
export class UmpireUmpiresComponent implements OnInit {

  @Input()
  umpire:UmpireModel;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  more(){
    console.log(this.umpire.userId.userId);
    this.router.navigate(["../user-reset-password",this.umpire.userId.userId], { relativeTo: this.route });
  }

}
