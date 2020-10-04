import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./login/login.component";
import { HttpIntercepterBasicAuthServiceService } from "./service/user/http-intercepter-basic-auth-service.service";
import { ManagerService } from "./service/manager/manager.service";
import { MaterialModule } from "./material.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatchService } from "./service/match/match.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PlayerSignupComponent } from './player/player-signup/player-signup.component';
import { ManagerSignupComponent } from './manager/manager-signup/manager-signup.component';
import { ClubSignupComponent } from './club/club-signup/club-signup.component';
import { SponsorSignupComponent } from './sponsor-signup/sponsor-signup.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { MatchOversComponent } from './live-match/match-overs/match-overs.component';
import { MainSiteComponent } from './site/main-site/main-site.component';
import { WelcomePageComponent } from './site/main-site/welcome-page/welcome-page.component'
import { ClubRankingComponent } from './club-ranking/club-ranking.component';
import { PlayerRankingComponent } from './player-ranking/player-ranking.component';
import { PlayerRankingElementComponent } from './player-ranking/player-ranking-element/player-ranking-element.component';
import { OneDayPlayerRankingsComponent } from './player-ranking/one-day-player-rankings/one-day-player-rankings.component';
import { ThreeFourDaysPlayerRankingsComponent } from './player-ranking/three-four-days-player-rankings/three-four-days-player-rankings.component';
import { TTwentyPlayerRankingsComponent } from './player-ranking/t-twenty-player-rankings/t-twenty-player-rankings.component';
import { PlayerProfileSummeryComponent } from './player/player-profile-summery/player-profile-summery.component'








@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PlayerSignupComponent,
    ManagerSignupComponent,
    ClubSignupComponent,
   
    SponsorSignupComponent,
    LiveMatchComponent,
    MatchOversComponent,
    MainSiteComponent,
    WelcomePageComponent,
    ClubRankingComponent,
    PlayerRankingComponent,
    PlayerRankingElementComponent,
    OneDayPlayerRankingsComponent,
    ThreeFourDaysPlayerRankingsComponent,
    TTwentyPlayerRankingsComponent,
    PlayerProfileSummeryComponent




  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthServiceService,
      multi: true,
    },
    ManagerService,
    MatchService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
