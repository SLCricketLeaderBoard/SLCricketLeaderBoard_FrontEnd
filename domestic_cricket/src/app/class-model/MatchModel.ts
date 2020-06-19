import { Time } from '@angular/common';
import { StadiumModel } from './StadiumModel';
import { MatchType } from './MatchType';
import { TournamentModel } from './TournamentModel';
import { RefereeModel } from './RefereeModel';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class MatchModel {
  constructor(
    public matchId: Number,
    public club1Id: Number,
    public club2Id: Number,
    public captainClub1: Number,
    public captainClub2: Number,
    public club1Mark:Number,
    public club2Mark:Number,
    public club1Wicket: Number,
    public club2Wicket: Number,
    public tournementRound: Number,
    public startdate: Date,
    public finishDate: Date,
    public startTime: Timestamp<Time>,
    public winTeamId: Number,
    public sponsor: String,
    public matchTypeId: MatchType,
    public tournamentId: TournamentModel,
    public stadiumId: StadiumModel,
    public refereeId: RefereeModel,
    public umpire1Id: Number,
    public umpire2Id: Number,
    public umpire3Id: Number,
  ) {}
}