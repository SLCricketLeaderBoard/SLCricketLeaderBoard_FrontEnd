import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})
export class LiveMatchComponent implements OnInit {

  safeUrl: any
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
