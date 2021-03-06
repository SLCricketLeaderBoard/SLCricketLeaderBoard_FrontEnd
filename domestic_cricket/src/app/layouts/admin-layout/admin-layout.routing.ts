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
import { RefereeRegisterComponent } from '../../referee/referee-register/referee-register.component';
import { StadiumRegisterComponent } from '../../stadium/stadium-register/stadium-register.component';
import { RefereeComponent } from '../../referee/referee.component';
import { RefereeListComponent } from '../../referee/referee-list/referee-list.component';
import { TournamnetListComponent } from '../../tournaments/tournamnet-list/tournamnet-list.component';
import { CreateMatchComponent } from '../../tournaments/tournamnet-list/tournament-element/create-match/create-match.component';
import { MatchListComponent } from '../../tournaments/tournamnet-list/tournament-element/match-list/match-list.component';
import { PlayerSelectionComponent } from '../../player/player-selection/player-selection.component';
import { UserComponent } from '../../user/user.component';
import { MatchDetailsComponent } from '../../tournaments/tournamnet-list/tournament-element/match-list/match-details/match-details.component';
import { ManagerTournamentListComponent } from '../../tournaments/manager-tournament-list/manager-tournament-list.component';
import { NonregsponsorListComponent } from '../../Sponsor/nonregsponsor-list/nonregsponsor-list.component';

import { ManagerDashboardComponent } from '../../dashboard/manager-dashboard/manager-dashboard.component';


import { ManagerMatchListComponent } from '../../tournaments/manager-match-list/manager-match-list.component';
import { MoreDetailsMatchComponent } from '../../tournaments/manager-match-list/more-details-match/more-details-match.component';


import { CreateTournamnetComponent } from '../../tournaments/create-tournamnet/create-tournamnet.component';
import { RefreeTournamentsComponent } from '../../refereeFunctions/refree-tournaments/refree-tournaments.component';
import { RefereeMatchListComponent } from '../../refereeFunctions/referee-match-list/referee-match-list.component';
import { MatchSummeryDataInputComponent } from '../../refereeFunctions/match-summery-data-input/match-summery-data-input.component';
import { RefereeTeamPlayersComponent } from '../../refereeFunctions/referee-team-players/referee-team-players.component';
import { RefreePlayerRecordDataInputComponent } from '../../refereeFunctions/refree-player-record-data-input/refree-player-record-data-input.component';
import { CaptainChangeComponent } from '../../tournaments/manager-match-list/captain-change/captain-change.component';
import { SponsorDashboardComponent } from '../../Sponsor/Sponsor-DashBoard/sponsor-dashboard/sponsor-dashboard.component';
import { PlayerRateChartComponent } from '../../player/player-selection/player-rate-chart/player-rate-chart.component';
import { RefreeLiveMatchesComponent } from '../../refereeFunctions/refree-live-matches/refree-live-matches.component';
import { SponsorRequestComponent } from '../../club/sponsor-club/sponsor-request/sponsor-request.component';
import { ReportComponent } from '../../report/report/report.component';






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
    path: "tournament-list",
    component: TournamnetListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "create-tournament",
    component: CreateTournamnetComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "tournament-list/create-match/:tournamentId",
    component: CreateMatchComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "tournament-list/view-matches/:tournamentId",
    component: MatchListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "tournament-list/view-matches/:tournamentId/match-details/:matchId",
    component: MatchDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "tournament-list/view-matches/:tournamentId/match-summery-input/:matchId",
    component: MatchSummeryDataInputComponent,
    canActivate: [RouteGuardService]
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
    path: "manager-register/:managerId",
    component: ManagerManagerRegisterComponent,
    canActivate: [RouteGuardService],
  },

  {
    path: "profile/:id",
    component: UserProfileComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "user-profile-view/:id",
    component: UserComponent,
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
    path: "player-add/:playerId",
    component: PlayerAddComponent,
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
    canActivate: [RouteGuardService]
  },
  {
    path: "stadium-register",
    component: StadiumRegisterComponent,

    canActivate: [RouteGuardService]

  },
  {
    path: "referee-list-list",
    component: RefereeListComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "player-selection/:tournementId/:option",
    component: PlayerSelectionComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "manager-tournament-list",
    component: ManagerTournamentListComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "nonregsponsors",
    component: NonregsponsorListComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "manager-dashboard",
    component: ManagerDashboardComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "nonregsponsors-list",
    component: NonregsponsorListComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "manager-match-list",
    component: ManagerMatchListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "match-more-details/:matchId",
    component: MoreDetailsMatchComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-tournament-list",
    component: RefreeTournamentsComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: "referee-tournament-list/match-list/:tournamentId",
    component: RefereeMatchListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-live-matches",
    component: RefreeLiveMatchesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-tournament-list/match-list/:tournamentId/match-summery-input/:matchId",
    component: MatchSummeryDataInputComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-tournament-list/match-list/:tournamentId/match-players/:matchId",
    component: RefereeTeamPlayersComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-tournament-list/match-list/:tournamentId/match-players/:matchId/player-record/:selectedPlayerId",
    component: RefreePlayerRecordDataInputComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "referee-tournament-list/match-list/:tournamentId/match-details/:matchId",
    component: MatchDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "captain-change/:matchId/:clubId/:type",
    component: CaptainChangeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "sponsor-dashboard",
    component: SponsorDashboardComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "player-rate",
    component: PlayerRateChartComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "sponsor-request",
    component: SponsorRequestComponent,
    canActivate: [RouteGuardService]
  },
 {
    path: "report",
    component: ReportComponent,
    canActivate: [RouteGuardService]
  }


];
