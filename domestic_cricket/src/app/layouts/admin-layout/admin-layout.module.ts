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
import { MatchListComponent } from "../../match/match-list/match-list.component";
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

import { CreateMatchComponent } from '../../match/create-match/create-match.component';
import { MaterialModule } from '../../material.module';
import { RefereeRegisterComponent } from '../../referee-register/referee-register.component';
import { ProfileImageComponent } from '../../user-profile/profile-image/profile-image.component';
import { StadiumRegisterComponent } from '../../stadium/stadium-register/stadium-register.component';
import { LiveMatchComponent } from '../../live-match/live-match.component'



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

    ProfileImageComponent,
    StadiumRegisterComponent,
    LiveMatchComponent, 

  ],
})
export class AdminLayoutModule {}
