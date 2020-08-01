import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerRecordModel } from '../../../class-model/PlayerRecordModel';
import { PlayerScoreService } from '../../../service/player-score/player-score.service';
import { PlayerMatchRecordModel } from '../../../class-model/PlayerMatchRecordModel';

@Component({
  selector: 'app-player-rate-chart',
  templateUrl: './player-rate-chart.component.html',
  styleUrls: ['./player-rate-chart.component.scss']
})
export class PlayerRateChartComponent implements OnInit {


  @Input() playerId;
  @Input() matchType;
  @Input() playerType;
  @Input() playerName;
  @Input() clubId;

  orderList: String[] = ['ODI', 'T20', 'Test'];
  playerTypeList: String[] = ['Batmen', 'Baller', 'All Rounder'];
  playerRecordList: PlayerMatchRecordModel[] = [];

  public canvas: any;
  public ctx;
  public gradientFill;
  public gradientStroke;
  public chartColor;

  public odiChartType;
  public odiMatchData: Array<any>;
  public odiChartOptions: any;
  // public odiMatchLabels: Array<any>;
  public odiChartColors: Array<any>;

  public rateData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public odiMatchLabels: String[] = ["", "", "", "", "", "", "", "", "", ""];

  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  constructor(
    public activeModal: NgbActiveModal,
    private playerScoreService: PlayerScoreService,

  ) { }

  ngOnInit() {

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("odiMatch");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));


    this.odiMatchData = [
      {
        label: "Points",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: this.rateData
      }
    ];
    this.odiChartColors = [
      {
        borderColor: "#18ce0f",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#18ce0f",
        backgroundColor: this.gradientFill
      }
    ];
    //this.odiMatchLabels = ["", "", "", "", "", "", "", "", "", ""];
    this.odiChartOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.odiChartType = 'line';


    this.getPlayerRateData();
    this.getPlayerRateLabels();
  }

  getPlayerRateLabels() {

    this.playerScoreService.getPlayerMatchRecord(this.playerId, this.playerType + 1, this.matchType + 1).subscribe(
      response => {
        // console.log(response)
        this.playerRecordList = response;

        var newLabels = [];

        this.playerRecordList.forEach(element => {
          newLabels.push(element.date);
        });

        this.odiMatchLabels = newLabels;

      },
      error => {
        console.log(error);
      }
    );


    // let label = "";
    // if (this.playerType == 0) {
    //   label = "Runs";
    // } else if (this.playerType == 1) {
    //   label = "Wickets";
    // }
    //this.changeLabels([]);
  }

  getPlayerRateData() {

    this.playerScoreService.getPlayerMatchRecord(this.playerId, this.playerType + 1, this.matchType + 1).subscribe(
      response => {

        this.playerRecordList = response;
        this.rateData = [];

        this.playerRecordList.forEach(element => {
          this.rateData.push(+element.points);
        });

        this.odiMatchData = [
          {
            label: "Points",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 2,
            data: this.rateData
          }
        ];

      },
      error => {
        console.log(error);
      }
    );
  }

}
