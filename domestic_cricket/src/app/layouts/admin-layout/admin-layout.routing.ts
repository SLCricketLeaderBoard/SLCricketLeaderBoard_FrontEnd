import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { RouteGuardService } from "../../service/route-guard/route-guard.service";
import { ClubListComponent } from "../../club/club-list/club-list.component";
import { ClubRegisterComponent } from "../../club/club-register/club-register.component";
import { ManagerListComponent } from "../../manager/manager-list/manager-list.component";
import { MatchListComponent } from "../../match/match-list/match-list.component";
import { StadiumListComponent } from "../../stadium/stadium-list/stadium-list.component";
import { PlayerListComponent } from "../../player/player-list/player-list.component";
import { ManagerManagerRegisterComponent } from "../../manager/manager-list/manager-manager-register/manager-manager-register.component";
import { ManagerManagersComponent } from "../../manager/manager-list/manager-managers/manager-managers.component";
import { UserResetPasswordComponent } from "../../user-reset-password/user-reset-password.component";
import { ClubDetailsComponent } from "../../club/club-details/club-details.component";
import { UmpireListComponent } from "../../umpire/umpire-list/umpire-list.component";
import { UmpireUmpireRegisterComponent } from "../../umpire/umpire-list/umpire-umpire-register/umpire-umpire-register.component";
import { UmpireUmpiresComponent } from "../../umpire/umpire-list/umpire-umpires/umpire-umpires.component";

import { PlayerMoreDetailsComponent } from "../../player/player-more-details/player-more-details.component";
import { ClubPaymentComponent } from "../../club/club-payment/club-payment.component";
import { ClubPaymentNotCompleteListComponent } from "../../club/club-payment-not-complete-list/club-payment-not-complete-list.component";

import { PlayerAddComponent } from '../../player/player-add/player-add.component';
import { CreateMatchComponent } from '../../match/create-match/create-match.component';
import { RefereeRegisterComponent } from '../../referee/referee-register/referee-register.component';
import { StadiumRegisterComponent } from '../../stadium/stadium-register/stadium-register.component';
import { RefereeComponent } from '../../referee/referee.component';
import { RefereeListComponent } from '../../referee/referee-list/referee-list.component';


export const AdminLayoutRoutes: Routes = [
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },

  {
    path: "/",
    component: ManagerManagersComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "/",
    component: UmpireUmpiresComponent,
    canActivate: [RouteGuardService],
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "club-list",
    component: ClubListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "club-register/:option",
    component: ClubRegisterComponent,
    canActivate: [RouteGuardService],
  },

  {
    path: "manager-list",
    component: ManagerListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "match-list",
    component: MatchListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "stadium-list",
    component: StadiumListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "player-list",
    component: PlayerListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "manager-register",
    component: ManagerManagerRegisterComponent,
    canActivate: [RouteGuardService],
  },

  {
    path: "profile/:id",
    component: UserProfileComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "user-reset-password/:id",
    component: UserResetPasswordComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "club-details",
    component: ClubDetailsComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "umpire-list",
    component: UmpireListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "umpire-register",
    component: UmpireUmpireRegisterComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "player-more-details",
    component: PlayerMoreDetailsComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "club-payment/:clubId/:clubName/:regDate",
    component: ClubPaymentComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "club-payment-not-complete-list",
    component: ClubPaymentNotCompleteListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "player-add",
    component: PlayerAddComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "create-match",
    component: CreateMatchComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "referee-list",
    component: RefereeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-register",
    component: RefereeRegisterComponent,
    canActivate:[RouteGuardService]
  },
  {
    path: "stadium-register",
    component: StadiumRegisterComponent,
    canActivate:[RouteGuardService]
  },
  {
    path: "referee-list-list",
    component: RefereeListComponent,
    canActivate:[RouteGuardService]
  }


];
