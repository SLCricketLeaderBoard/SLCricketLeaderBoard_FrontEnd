import { Component, OnInit } from "@angular/core";
import { ClubService } from "../../service/club/club.service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
  { path: "/icons", title: "Icons", icon: "education_atom", class: "" },
  { path: "/maps", title: "Maps", icon: "location_map-big", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "ui-1_bell-53",
    class: "",
  },

  {
    path: "/user-profile",
    title: "User Profile",
    icon: "users_single-02",
    class: "",
  },
  {
    path: "/table-list",
    title: "Table List",
    icon: "design_bullet-list-67",
    class: "",
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "text_caps-small",
    class: "",
  },

  { path: "/club-list", title: "Clubs", icon: "design_app", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  isManagerHasClub: Boolean = true;

  menuItems: any[];

  admin: any[]; //(role=1)
  manager: any[]; //(role=2)
  player: any[]; //(role=3)
  referee: any[]; //(role=4)

  constructor(private clubService: ClubService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);

    this.admin = [
      { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
      { path: "/club-list", title: "Clubs", icon: "design_app", class: "" },
      { path: "/manager-list", title: "Managers", icon: "design_app",class: "",},
      { path: "/umpire-list", title: "Umpires", icon: "design_app", class: "" },
      { path: '/referee-list', title: "Referees", icon: "design_app", class: ""},
      { path: "/stadium-register", title: "Stadiums", icon: "design_app", class: "" },
	   { path: "/tournament-list", title: "Tournament", icon: "design_app", class: "" },
    ];

    this.manager = [
      { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
      { path: "/club-details", title: "Club", icon: "design_app", class: "" },
      { path: "/player-list", title: "Players", icon: "design_app", class: "" },
      { path: "/match-list", title: "Matches", icon: "design_app", class: "" },
	   { path: "/tournament-list", title: "Tournament", icon: "design_app", class: "" },
    ];
    
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  isAdmin() {
    if (
      sessionStorage.getItem("userRole") != null &&
      sessionStorage.getItem("userRole") === "1"
    ) {
      return true;
    }
    return false;
  }

  isManager() {
    if (
      sessionStorage.getItem("userRole") != null &&
      sessionStorage.getItem("userRole") === "2"
    ) {
      let isManagerHasClub: Number = +sessionStorage.getItem(
        "isManagerHasClub"
      );
      let isClubActivated: Number = +sessionStorage.getItem("isClubActivated");
      if (isManagerHasClub == 0 || isClubActivated == 0) {
        this.isManagerHasClub = false;
      }
      return true;
    }
    return false;
  }
}
