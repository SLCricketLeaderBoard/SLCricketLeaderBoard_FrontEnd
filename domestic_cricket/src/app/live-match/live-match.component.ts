import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer} from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LiveScoreModel } from '../class-model/LiveMatch.Model';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})
export class LiveMatchComponent implements OnInit {

  safeUrl: any
  liveMatch:LiveScoreModel[]
  constructor(private _sanitizer: DomSanitizer,private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection('liveMatches').snapshotChanges()
    .pipe(
      map((action) =>
        action.map((a) => {
          const data = a.payload.doc.data() as LiveScoreModel;
          const id = a.payload.doc.id;
          return {...data };
        })
      )
    ).subscribe(res=>{
      this.liveMatch=res;
    });


  }

}
