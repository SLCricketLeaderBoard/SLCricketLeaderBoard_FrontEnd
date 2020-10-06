import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { PlayerSignupComponent } from './player/player-signup/player-signup.component';
import { ManagerSignupComponent } from './manager/manager-signup/manager-signup.component';
import { ClubSignupComponent } from './club/club-signup/club-signup.component';
import { SponsorSignupComponent } from './sponsor-signup/sponsor-signup.component';
import { MainSiteComponent } from './site/main-site/main-site.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { WelcomePageComponent } from './site/main-site/welcome-page/welcome-page.component';
import { ClubRankingComponent } from './club-ranking/club-ranking.component';
import { PlayerRankingComponent } from './player-ranking/player-ranking.component';
import { OneDayPlayerRankingsComponent } from './player-ranking/one-day-player-rankings/one-day-player-rankings.component';
import { ThreeFourDaysPlayerRankingsComponent } from './player-ranking/three-four-days-player-rankings/three-four-days-player-rankings.component';
import { TTwentyPlayerRankingsComponent } from './player-ranking/t-twenty-player-rankings/t-twenty-player-rankings.component';
import { PlayerProfileSummeryComponent } from './player/player-profile-summery/player-profile-summery.component';
import { MatchCalenderComponent } from './match-calender/match-calender.component';
import { PublicMatchElementComponent } from './match-calender/public-match-element/public-match-element.component';


const routes: Routes = [
  {
    path: '',
    component: MainSiteComponent,
      children:[
        {path:'',component:WelcomePageComponent},
        {path:'live-now',component:LiveMatchComponent},
        {path: 'player-rankings',component: PlayerRankingComponent, children: [
          {path: 'oneDay',component: OneDayPlayerRankingsComponent},
          {path: 'threeFourDays',component: ThreeFourDaysPlayerRankingsComponent},
          {path: 'TTwenty' ,component:TTwentyPlayerRankingsComponent},
        ]},
        {path:'player/:userId',component:PlayerProfileSummeryComponent},
        {path: 'match-calender' , component: MatchCalenderComponent, children:[
          {path: ':tournamentId' , component: PublicMatchElementComponent}
        ]},
        
      ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'player-signup',
    component: PlayerSignupComponent
  },
  {
    path: 'manager-signup',
    component: ManagerSignupComponent
  },
  {
    path: 'club-signup/:userId',
    component: ClubSignupComponent
  },
  {
    path: 'sponsor-signup',
    component: SponsorSignupComponent
  },
  {
    path: 'club-ranking',
    component: ClubRankingComponent
  }
 
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }
  , {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
