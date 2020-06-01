import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-umpire-list',
  templateUrl: './umpire-list.component.html',
  styleUrls: ['./umpire-list.component.scss']
})
export class UmpireListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  register() {
    this.router.navigate(["../umpire-register"], { relativeTo: this.route });
  }

}
