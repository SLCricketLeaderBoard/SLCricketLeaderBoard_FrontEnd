import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  showSpinner: Boolean = false;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
  }

  clubReport() {
    this.showSpinner = true;
    this.reportService.getClubReport().subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

  clubPaymentReport(year) {
    this.showSpinner = true;
    this.reportService.getClubPaymentReport(year).subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

}
