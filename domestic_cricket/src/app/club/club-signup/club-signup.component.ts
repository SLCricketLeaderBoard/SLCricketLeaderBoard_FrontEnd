import { Component, OnInit } from '@angular/core';
import { ManagerModel } from '../../class-model/ManagerModel';
import { SwalMessage } from '../../shared/swal-message';
import { Validators, FormBuilder } from '@angular/forms';
import { ClubService } from '../../service/club/club.service';
import { ManagerService } from '../../service/manager/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ClubModel } from '../../class-model/ClubModel';

@Component({
  selector: 'app-club-signup',
  templateUrl: './club-signup.component.html',
  styleUrls: ['./club-signup.component.scss']
})
export class ClubSignupComponent implements OnInit {

  errorMessage;
  userId: Number;
  userRole: Number;
  selectedManagerName: String;//use when update club data
  availableManagers: ManagerModel[] = [];
  manager: ManagerModel

  club_default_log = "https://firebasestorage.googleapis.com/v0/b/crickdom-3accd.appspot.com/o/club%2Fflag-button-round-250.png?alt=media&token=d3e15c36-104a-44bb-ba84-fed70903fc5e";

  mainTitle: String = "Club Register";
  formTitle: String = "Registration Form";
  swalMessage: SwalMessage = new SwalMessage();


  //reactive form definition
  clubRegisterFrom = this.fb.group({
    clubName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contactNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
  });

  //getters for reactive form module fields
  get clubNameField() {
    return this.clubRegisterFrom.get('clubName');
  }
  get addressField() {
    return this.clubRegisterFrom.get('address');
  }
  get emailField() {
    return this.clubRegisterFrom.get('email');
  }
  get contactNumberField() {
    return this.clubRegisterFrom.get('contactNumber');
  }


  constructor(
    private clubService: ClubService,
    private managerService: ManagerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
    this.getManager();
  }

  getManager() {
    this.managerService.getManager(this.userId).subscribe(
      response => {
        this.manager = response;
        console.log(this.manager)
      }
    );
  }


  clubFormSubmit() {
    let club = new ClubModel(-1, this.clubNameField.value, this.addressField.value, this.emailField.value, this.contactNumberField.value, new Date(), 1, this.club_default_log, this.manager);
    this.clubRegister(club);
    this.firebaseClubRegister(club);
  }

  firebaseClubRegister(club: ClubModel) {
    let clubs = {};
    clubs["clubName"] = club.address.toString();
    clubs["clubLogo"] = club.clubLogo.toString();
    clubs["clubName"] = club.clubName.toString();
    clubs["contactNumber"] = club.contactNumber.toString();
    clubs["email"] = club.email.toString();
    //clubs["failMatch"] = club.failMatch.toString();
    //clubs["growMatch"] = club.growMatch.toString();
    clubs["regDate"] = club.regDate.toString();
    //clubs["winMatch"] = club.winMatch.toString();


  }

  clubRegister(club: ClubModel) {
    club.status = 0;
    this.clubService.registerClub(club).subscribe(
      response => {

        if (response == 1) {
          this.router.navigate(['']);
          this.swalMessage.successMessage('Club registration successful');
        }
        if (response == 0) {
          this.errorMessage = 'There is another club has same name or email or address or contactNmber';
          this.swalMessage.notSuccessMessage('Club registration not successful');
        }

      },
      error => {
        this.errorMessage = "Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Club registration not successful');
      }
    );
  }


  close() {
    this.errorMessage = "";
  }

  public ErrorResponse(error: HttpErrorResponse) {
    return error.status;
  }


}
