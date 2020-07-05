import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { ClubListComponent } from "../../club/club-list/club-list.component";
import { ClubRegisterComponent } from "../../club/club-register/club-register.component";
import { StadiumListComponent } from "../../stadium/stadium-list/stadium-list.component";
import { ManagerListComponent } from "../../manager/manager-list/manager-list.component";
import { PlayerListComponent } from "../../player/player-list/player-list.component";
import { ManagerManagerRegisterComponent } from "../../manager/manager-list/manager-manager-register/manager-manager-register.component";
import { ManagerManagersComponent } from "../../manager/manager-list/manager-managers/manager-managers.component";
import { UserResetPasswordComponent } from '../../user-reset-password/user-reset-password.component';
import { ClubDetailsComponent } from '../../club/club-details/club-details.component';
import { UmpireListComponent } from '../../umpire/umpire-list/umpire-list.component';
import { UmpireUmpireRegisterComponent } from '../../umpire/umpire-list/umpire-umpire-register/umpire-umpire-register.component';
import { UmpireUmpiresComponent } from '../../umpire/umpire-list/umpire-umpires/umpire-umpires.component';
import { PlayerMoreDetailsComponent } from '../../player/player-more-details/player-more-details.component';
import { ClubPaymentComponent } from '../../club/club-payment/club-payment.component';
import { ClubPaymentNotCompleteListComponent } from '../../club/club-payment-not-complete-list/club-payment-not-complete-list.component';
import { PlayerAddComponent } from '../../player/player-add/player-add.component';
import { MaterialModule } from '../../material.module';
import { RefereeRegisterComponent } from '../../referee/referee-register/referee-register.component';
import { ProfileImageComponent } from '../../user-profile/profile-image/profile-image.component';
import { StadiumRegisterComponent } from '../../stadium/stadium-register/stadium-register.component';
import { LiveMatchComponent } from '../../live-match/live-match.component'
import { RefereeComponent } from '../../referee/referee.component';
import { TournamentElementComponent } from '../../tournaments/tournamnet-list/tournament-element/tournament-element.component';
import { CreateMatchComponent } from '../../tournaments/tournamnet-list/tournament-element/create-match/create-match.component';
import { MatchListComponent } from '../../tournaments/tournamnet-list/tournament-element/match-list/match-list.component';
import { TournamnetListComponent } from '../../tournaments/tournamnet-list/tournamnet-list.component';
import { MatchElementComponent } from '../../tournaments/tournamnet-list/tournament-element/match-list/match-element/match-element.component';
import { RefereeListComponent } from '../../referee/referee-list/referee-list.component';
import { PlayerSelectionComponent } from '../../player/player-selection/player-selection.component';
import { UserComponent } from '../../user/user.component';
import { MatchDetailsComponent } from '../../tournaments/tournamnet-list/tournament-element/match-list/match-details/match-details.component';
import { ManagerTournamentListComponent } from '../../tournaments/manager-tournament-list/manager-tournament-list.component';
import { NonregsponsorsComponent } from '../../Sponsor/nonregsponsors/nonregsponsors.component';
import { NonregsponsorListComponent } from '../../Sponsor/nonregsponsor-list/nonregsponsor-list.component';
import { ManagerDashboardComponent } from '../../dashboard/manager-dashboard/manager-dashboard.component';

import { ManagerMatchListComponent } from '../../tournaments/manager-match-list/manager-match-list.component';
import { MoreDetailsMatchComponent } from '../../tournaments/manager-match-list/more-details-match/more-details-match.component';

import { CreateTournamnetComponent } from '../../tournaments/create-tournamnet/create-tournamnet.component';
import { RefreeTournamentsComponent } from '../../refereeFunctions/refree-tournaments/refree-tournaments.component';
import { RefereeMatchListComponent } from '../../refereeFunctions/referee-match-list/referee-match-list.component';
import { MatchSummeryDataInputComponent } from '../../refereeFunctions/match-summery-data-input/match-summery-data-input.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,

    ClubListComponent,
    ClubRegisterComponent,
    ClubDetailsComponent,
    ClubPaymentComponent,
    ClubPaymentNotCompleteListComponent,

    MatchListComponent,
    StadiumListComponent,
    ManagerListComponent,
    PlayerListComponent,
    ManagerManagerRegisterComponent,
    ManagerManagersComponent,
    UserResetPasswordComponent,
    PlayerMoreDetailsComponent,
    CreateMatchComponent,
    UmpireListComponent,
    UmpireUmpireRegisterComponent,
    UmpireUmpiresComponent,


    PlayerMoreDetailsComponent,
    PlayerAddComponent,
    RefereeRegisterComponent,
    RefereeComponent,
    ProfileImageComponent,
    StadiumRegisterComponent,
    LiveMatchComponent,
    RefereeListComponent,
    TournamentElementComponent,
    TournamnetListComponent,
    MatchElementComponent,

    PlayerSelectionComponent,
    UserComponent,
    MatchDetailsComponent,
    ManagerTournamentListComponent,
    NonregsponsorsComponent,
    NonregsponsorListComponent,
    ManagerDashboardComponent,
    MatchSummeryDataInputComponent,
    ManagerMatchListComponent,
    MoreDetailsMatchComponent,

    CreateTournamnetComponent,
    RefreeTournamentsComponent,
    RefereeMatchListComponent


  ],
})
export class AdminLayoutModule { }
