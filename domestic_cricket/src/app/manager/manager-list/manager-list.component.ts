import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-manager-list",
  templateUrl: "./manager-list.component.html",
  styleUrls: ["./manager-list.component.scss"],
})
export class ManagerListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  register() {
    this.router.navigate(["../manager-register"], { relativeTo: this.route });
  }
}
