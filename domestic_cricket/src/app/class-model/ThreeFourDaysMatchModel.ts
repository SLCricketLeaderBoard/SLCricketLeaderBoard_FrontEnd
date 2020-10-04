import { MatchModel } from './MatchModel';

export class ThreeFourDaysMatchModel {
  constructor(
    public firstInning : MatchModel,
    public secondInning : MatchModel,
  ) { }
}