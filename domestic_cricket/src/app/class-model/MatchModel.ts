import { Time } from '@angular/common';
import { StadiumModel } from './StadiumModel';
import { MatchType } from './MatchType';
import { TournamentModel } from './TournamentModel';
import { RefereeModel } from './RefereeModel';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class MatchModel {
  constructor(
    public matchId: Number,
    public clubOneId: Number,
    public clubTwoId: Number,
    public captainClubOne: Number,
    public captainClubTwo: Number,
    public clubOneMark: Number,
    public clubTwoMark: Number,
    public clubOneWicket: Number,
    public clubTwoWicket: Number,
    public tournementRound: Number,
    public startDate: Date,
    public finishDate: Date,
    public startTime: Timestamp<Time>,
    public winTeamId: Number,
    public sponsor: String,
    public matchTypeId: MatchType,
    public tournamentId: TournamentModel,
    public stadiumId: StadiumModel,
    public refereeId: RefereeModel,
    public umpireOneId: Number,
    public umpireTwoId: Number,
    public umpireThreeId: Number,
    public tossWinTeam: Number,
  ) { }
}