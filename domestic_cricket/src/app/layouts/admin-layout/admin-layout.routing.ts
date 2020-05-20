import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RouteGuardService } from '../../service/route-guard/route-guard.service';
import { ClubListComponent } from '../../club/club-list/club-list.component';
import { ClubRegisterComponent } from '../../club/club-register/club-register.component';
import { ManagerListComponent } from '../../manager/manager-list/manager-list.component';
import { MatchListComponent } from '../../match/match-list/match-list.component';
import { StadiumListComponent } from '../../stadium/stadium-list/stadium-list.component';
import { PlayerListComponent } from '../../player/player-list/player-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'dashboard',  component: DashboardComponent, canActivate:[RouteGuardService]},
    { path: 'club-list',  component: ClubListComponent, canActivate:[RouteGuardService]},
    { path: 'club-register',  component: ClubRegisterComponent, canActivate:[RouteGuardService]},

    { path: 'manager-list',  component: ManagerListComponent, canActivate:[RouteGuardService]},
    { path: 'match-list',  component: MatchListComponent, canActivate:[RouteGuardService]},
    { path: 'stadium-list',  component: StadiumListComponent, canActivate:[RouteGuardService]},
    { path: 'player-list',  component: PlayerListComponent, canActivate:[RouteGuardService]}
];
