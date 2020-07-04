import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserAuthenticationServiceService } from "../service/user/user-authentication-service.service";
import { UserServiceService } from "../service/user/user-service.service";
import { ClubService } from "../service/club/club.service";
import Swal from "sweetalert2";
import { SwalMessage } from "../shared/swal-message";
import { ClubModel } from "../class-model/ClubModel";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  swalMessage = new SwalMessage();

  //reactive form definition
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  //getters for reactive form module email
  get emailField() {
    return this.loginForm.get("email");
  }

  //getters for reactive form module password
  get passwordField() {
    return this.loginForm.get("password");
  }

  errorMessage;
  showSpinner = false;

  constructor(
    private router: Router,
    private userAuthenticationService: UserAuthenticationServiceService,
    private fb: FormBuilder,
    private userService: UserServiceService,
    private clubService: ClubService
  ) { }

  ngOnInit() { }

  handleJWTTokeLogin() {
    //this.showSpinner=true;
    this.userAuthenticationService
      .executeJWTAuthenticationService(
        this.emailField.value,
        this.passwordField.value
      )
      .subscribe(
        (response) => {
          this.userService.getUser(this.emailField.value).subscribe(
            (response) => {
              this.handleSuccessfulResponse(response);
            },
            (error) => {
              this.showSpinner = false;
              this.errorMessage = "System Error.Please try again..";
              console.log(error);
            }
          );
        },
        (error) => {
          this.errorMessage = "INVALID CREDENTIALS.";
        }
      );
  }

  //3)Valid User
  handleSuccessfulResponse(response) {
    if (
      response.userId != null &&
      response.userId > 0 &&
      response.status == 1
    ) {
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("userRole", response.role);
      sessionStorage.setItem("userName", response.userName);

      if (response.role === 1) {
        this.router.navigate(["dashboard"]);
      } else if (response.role == 2) {
        this.getClubData();
      } else if (response.role == 3) {
        this.router.navigate(["#"]);
      } else if (response.role == 4) {
        this.router.navigate(["#"]);
      }
    }
  }

  getClubData() {
    let userId: Number = +sessionStorage.getItem("userId");
    this.clubService.getClubDataOfManager(userId).subscribe(
      (response) => {//ClubModel

        let clubStatus: Number = +response.status;
        sessionStorage.setItem("isClubActivated", clubStatus + "");
        sessionStorage.setItem("isManagerHasClub", "1");
        sessionStorage.setItem("clubId", response.clubId + "");

        if (clubStatus == 1) {
          this.router.navigate(["manager-dashboard"]);
        } else {
          this.router.navigate([
            "club-payment",
            response.clubId,
            response.clubName,
            response.regDate,
          ]);
        }
      },
      (error) => {
        sessionStorage.setItem("isManagerHasClub", "0");
        this.router.navigate(["manager-dashboard"]);
        this.swalMessage.warnningMessage(
          "You haven't assing any club yet.Please inform to admin"
        );
      }
    );
  }

  closeError() {
    this.errorMessage = null;
  }

  playerSignup() {
    this.router.navigate(['player-signup']);
  }

  managerSignup() {
    this.router.navigate(['manager-signup']);
  }
}
