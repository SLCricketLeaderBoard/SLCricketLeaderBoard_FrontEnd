import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalMessage } from '../../shared/swal-message';
import { TournamentClubPlayerService } from '../../service/tournament-club-player/tournament-club-player.service';
import { PlayerWrapper } from '../../class-model/PlayerWrapper';
import { TournamentService } from '../../service/tournament/tournament.service';
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentClubCaptainService } from '../../service/tournament-club-captain.service';
import { TournamentClubCaptainModel } from '../../class-model/TournamentClubCaptainModel';
import { PlayerRateModel } from '../../class-model/PlayerRateModel';
import { PlayerScoreService } from '../../service/player-score/player-score.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerRateChartComponent } from './player-rate-chart/player-rate-chart.component';
import { element } from 'protractor';


@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {

  isDataLoad = false;



  option: Number = -1; //1-->Register , 2-->Update
  clubId: Number = 0;
  tournementId: Number = 0;
  tournamentData: TournamentModel;
  isTournamentDataLoad: Boolean = false;
  errorMessage: string = "";
  swalMessage: SwalMessage = new SwalMessage();

  batmanList: PlayerModel[] = [];
  ballerList: PlayerModel[] = [];
  allRounderList: PlayerModel[] = [];
  playerListForCaptain: PlayerModel[] = [];
  playerListForViceCaptain: PlayerModel[] = [];

  previousBatmanList: PlayerModel[] = [];
  previousBallerList: PlayerModel[] = [];
  previousAllRounderList: PlayerModel[] = [];
  previousCaptainViceCaptain: PlayerModel[] = [];

  playerRateList: PlayerRateModel[] = [];
  orderList: String[] = ['ODI', 'T20', 'Test'];
  selectOrder: Number = 0;
  playerTypeList: String[] = ['Batmen', 'Baller', 'All Rounder'];
  selectPlayerType: Number = 0;
  previousSelectOrder: Number = 0;
  currentOrder: Number = 0;

  captainFormDisable = false;
  viceCaptainFormDisable = false;
  isCaptainsLoad = false;


  playerSelectionForm = this.fb.group({
    batmans: new FormControl('', [Validators.required, Validators.minLength(1)]),
    ballers: new FormControl('', [Validators.required, Validators.minLength(1)]),
    allRounders: new FormControl('', [Validators.required]),
    captain: new FormControl('', [Validators.required]),
    viceCaptain: new FormControl('', [Validators.required])
  });

  get batmansField() {
    return this.playerSelectionForm.get('batmans');
  }

  get ballersField() {
    return this.playerSelectionForm.get('ballers');
  }

  get allRoundersField() {
    return this.playerSelectionForm.get('allRounders');
  }

  get captainField() {
    return this.playerSelectionForm.get('captain');
  }

  get viceCaptainField() {
    return this.playerSelectionForm.get('viceCaptain');
  }

  constructor(
    private fb: FormBuilder,
    private playerSerivce: PlayerService,
    private route: ActivatedRoute,
    private router: Router,
    private tournamentClubPlayerService: TournamentClubPlayerService,
    private tournamentSerive: TournamentService,
    private tournamentClubCaptainService: TournamentClubCaptainService,
    private playerScoreService: PlayerScoreService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.tournementId = +this.route.snapshot.params['tournementId'];
    this.option = this.route.snapshot.params['option'];

    this.getTournament();
    this.getClubPlayerList();
    if (this.option == 2) {
      this.getRegisteredClubPlayerList();
      this.getTournamentCaptain();
    }
    this.getPlayerRateList();
  }

  getTournament() {
    this.tournamentSerive.getTournamentById(this.tournementId).subscribe(
      response => {
        this.tournamentData = response;
        this.isTournamentDataLoad = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubPlayerList() {
    this.batmanList = [];
    this.ballerList = [];
    this.allRounderList = [];
    this.playerSerivce.getClubPlayerList(this.clubId, 1).subscribe(
      response => {
        response.forEach(player => {
          if (player.specialType == 1) {
            this.batmanList.push(player);
          } else if (player.specialType == 2) {
            this.ballerList.push(player);
          } else {
            this.allRounderList.push(player);
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getRegisteredClubPlayerList() {
    this.previousBatmanList = [];
    this.previousBallerList = [];
    this.previousAllRounderList = [];
    this.tournamentClubPlayerService.tournamentClubPlayerList(this.clubId, this.tournementId).subscribe(
      response => {
        response.forEach(player => {
          if (player.specialType == 1) {
            this.previousBatmanList.push(player);
          } else if (player.specialType == 2) {
            this.previousBallerList.push(player);
          } else {
            this.previousAllRounderList.push(player);
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getTournamentCaptain() {
    this.tournamentClubCaptainService.getTournamentCaptains(this.tournementId, this.clubId).subscribe(
      response => {
        this.previousCaptainViceCaptain = response;
        this.isCaptainsLoad = true;
      },
      error => {
        console.log(error);
      }
    );
  }



  submit() {
    let teamSize = this.batmansField.value.length + this.ballersField.value.length + this.allRoundersField.value.length;
    if (teamSize >= 6) {
      let selectPlayerList: PlayerModel[] = [];
      let playerWrapper: PlayerWrapper = new PlayerWrapper(selectPlayerList);

      this.batmansField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      this.ballersField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      this.allRoundersField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      //Register club for the tournament and register players for the tournament
      if (this.option == 1) {
        this.tournamentClubPlayerService.tournamentClubPlayerRegister(this.clubId, this.tournementId, playerWrapper).subscribe(
          response => {

            //captain, vicecaptain register
            let object: TournamentClubCaptainModel = new TournamentClubCaptainModel(-1, this.captainField.value.playerId, this.viceCaptainField.value.playerId, response);
            this.tournamentClubCaptainService.tournamentCaptainsSave(object).subscribe(
              reponse => {
                this.router.navigate(['manager-tournament-list']);
                this.swalMessage.successMessage("Tournament Team Players Registration Successful");
              },
              error => {
                console.log(error);
                this.swalMessage.notSuccessMessage("Tournament Team Players Registration Not Successful");
              }
            );
          },
          error => {
            console.log(error);
            this.swalMessage.notSuccessMessage("Tournament Team Players Registration Not Successful");
          }
        );
      }

      //Update data
      if (this.option == 2) {
        this.tournamentClubPlayerService.tournamentClubPlayerUpdate(this.clubId, this.tournementId, playerWrapper).subscribe(
          response => {
            let object: TournamentClubCaptainModel = new TournamentClubCaptainModel(-1, this.captainField.value.playerId, this.viceCaptainField.value.playerId, response);
            this.tournamentClubCaptainService.tournamentCaptainsUpdate(object).subscribe(
              response => {
                this.swalMessage.successMessage("Tournament Team Players Update Successful");
                this.getClubPlayerList();
                this.getTournamentCaptain();
                this.getRegisteredClubPlayerList();
              },
              error => {
                console.log(error);
                this.swalMessage.successMessage("Tournament Team Players Update Not Successful");
              }
            );
          },
          error => {
            this.swalMessage.successMessage("Tournament Team Players Update Not Successful");
            console.log(error);
          }
        );
      }


    } else {
      this.errorMessage = "Team Registration not successful.Please select at least 12 players for the team";
      this.isDataLoad = false;
    }
  }


  teamSelect() {
    this.playerListForCaptain = [];
    this.playerListForViceCaptain = [];
    this.captainFormDisable = false;
    this.viceCaptainFormDisable = false;
    this.captainField.setValue('');
    this.viceCaptainField.setValue('');


    if (this.batmansField.value.length > 0) {
      this.batmansField.value.forEach(element => {
        this.playerListForCaptain.push(element);
      });
    }

    if (this.ballersField.value.length > 0) {
      this.ballersField.value.forEach(element => {
        this.playerListForCaptain.push(element);
      });
    }

    if (this.allRoundersField.value.length > 0) {
      this.allRoundersField.value.forEach(element => {
        this.playerListForCaptain.push(element);
      });
    }
  }

  captainSelect() {
    this.playerListForViceCaptain = [];
    this.playerListForCaptain.forEach(element => {
      if (element.playerId != this.captainField.value.playerId) {
        this.playerListForViceCaptain.push(element);
      }
    });
    this.captainFormDisable = true;
  }

  viceCaptainSelect() {
    this.viceCaptainFormDisable = true;
  }

  getPlayerRateList() {
    this.selectOrder = 0;
    this.playerScoreService.getPlayerRateList(this.clubId, +this.selectPlayerType + 1, +this.selectOrder + 1).subscribe(
      response => {
        this.currentOrder = 0;
        this.previousSelectOrder = 0;
        this.playerRateList = response;
        if (this.selectPlayerType == 2) {//All rounder
          this.sortingPlayerRate();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  changePlayerRateOrder() {
    this.previousSelectOrder = this.currentOrder;
    this.currentOrder = this.selectOrder;

    //console.log('pre: ' + this.previousSelectOrder + '  curr: ' + this.currentOrder);

    if (this.previousSelectOrder == 0) {//ODI,T20,Test
      if (this.currentOrder == 1) {//T20,ODI,Test
        this.playerRateList.forEach(element => {
          let odi = element.rate1;
          element.rate1 = element.rate2;
          element.rate2 = odi;
        });
      } else {//current Order==2 Test,ODI,T20
        this.playerRateList.forEach(element => {
          let odi = element.rate1;
          let t20 = element.rate2;

          element.rate1 = element.rate3;
          element.rate2 = odi;
          element.rate3 = t20;
        })
      }
    } else if (this.previousSelectOrder == 1) {//T20,ODI,Test
      if (this.currentOrder == 0) {// ODI, T20, Test
        this.playerRateList.forEach(element => {
          let t20 = element.rate1;
          element.rate1 = element.rate2;
          element.rate2 = t20;
        });
      } else {//current order=2 Test,ODI,T20
        console.log('##########')
        this.playerRateList.forEach(element => {
          let t20 = element.rate1;
          element.rate1 = element.rate3;
          element.rate3 = t20;
        });
      }
    } else {//previousOrder==2 Test,ODI,T20
      if (this.currentOrder == 0) {//ODI, T20, Test
        this.playerRateList.forEach(element => {
          let test = element.rate1;
          let odi = element.rate2;
          element.rate1 = odi;
          element.rate2 = element.rate3;
          element.rate3 = test;
        });
      } else {//current order=1  T20, ODI, Test
        this.playerRateList.forEach(element => {
          let test = element.rate1;
          element.rate1 = element.rate3;
          element.rate3 = test;
        });
      }
    }

    this.sortingPlayerRate();
  }

  //Insertion Sort
  sortingPlayerRate() {
    let currInd;
    for (let pos = 0; pos < this.playerRateList.length; pos++) {
      currInd = pos;
      while (currInd > 0 && (this.playerRateList[currInd].rate1 > this.playerRateList[currInd - 1].rate1)) {
        let tem = this.playerRateList[currInd - 1];
        this.playerRateList[currInd - 1] = this.playerRateList[currInd];
        this.playerRateList[currInd] = tem;

        currInd = currInd - 1;
      }
    }
  }

  playerMatchData(playerId, playerName, index) {
    const modalRef = this.modalService.open(PlayerRateChartComponent, { centered: true });
    modalRef.componentInstance.playerId = playerId;
    modalRef.componentInstance.playerName = playerName;
    modalRef.componentInstance.playerType = this.selectPlayerType;
    modalRef.componentInstance.clubId = this.clubId;

    let matchType = 0;//[ODI,T20,Test]
    if (this.selectOrder == 0) {//[ODI,T20,Test]
      matchType = index;
    } else if (this.selectOrder == 1) {//[T20,ODI,Test]
      if (index == 0) {
        matchType = 1;
      } else if (index == 1) {
        matchType = 0;
      } else {
        matchType = 2;
      }
    } else if (this.selectOrder == 2) {//[Test,ODI,T20]
      if (index == 0) {
        matchType = 2;
      } else if (index == 1) {
        matchType = 0;
      } else {
        matchType = 1;
      }
    }

    modalRef.componentInstance.matchType = matchType;
  }

  close() {
    this.errorMessage = "";
  }

}
