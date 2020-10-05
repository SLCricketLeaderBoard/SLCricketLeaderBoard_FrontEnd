import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { LiveScoreModel } from '../class-model/LiveMatch.Model';
import { LiveScorePredictionService } from '../service/live-score-prediction/live-score-prediction.service';
import { MatchScorePredictionModel } from '../class-model/MatchScorePredictionModel';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})
export class LiveMatchComponent implements OnInit {

  matchType: Number = 1;//ODI
  safeUrl: any
  liveMatch: LiveScoreModel[]
  constructor(private _sanitizer: DomSanitizer, private db: AngularFirestore, private matchScorePredictionService: LiveScorePredictionService) { }

  ngOnInit() {
    this.db.collection('liveMatches').snapshotChanges()
      .pipe(
        map((action) =>
          action.map((a) => {
            const data = a.payload.doc.data() as LiveScoreModel;
            const id = a.payload.doc.id;
            return { ...data };
          })
        )
      ).subscribe(res => {
        this.liveMatch = res;
      });

    this.getMatchScorePrediction();
  }

  getMatchScorePrediction() {
    if (this.matchType == 1) {
      (async () => {
        // Do something before delay
        console.log('before delay')

        await delay(100);

        // Do something after
        this.matchScorePredictionService.getLiveScore(new MatchScorePredictionModel(12, 1, 5.3, 12, 3)).subscribe(
          response => {
            console.log(response);
          }
        );
        console.log('after delay')
      })();
    }
  }

}
