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

const routes: Routes = [
  {
    path: '',
    component: MainSiteComponent,
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'live-now', component: LiveMatchComponent },
      { path: 'club-ranking', component: ClubRankingComponent }
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
