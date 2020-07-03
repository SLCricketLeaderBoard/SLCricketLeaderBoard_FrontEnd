import { Component, OnInit } from "@angular/core";
import { ClubService } from "../../service/club/club.service";
import { ClubModel } from "../../class-model/ClubModel";
import { Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: "app-club-details",
  templateUrl: "./club-details.component.html",
  styleUrls: ["./club-details.component.scss"],
})
export class ClubDetailsComponent implements OnInit {
  club: ClubModel = null;
  errorMessage: String;

  selectedFiles;
  uploadPercent: Observable<number>;

  constructor(
    private clubService: ClubService,
    private router: Router,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    let userId = sessionStorage.getItem("userId");
    this.getClubData(userId);
  }

  getClubData(userId) {
    this.clubService.getClubDataOfManager(userId).subscribe(
      (response) => {
        this.club = response;
      },
      (error) => {
        this.errorMessage =
          "Any club not assign for you yet.Please contact admin";
        console.log(error);
      }
    );
  }

  clubUpdate() {
    this.router.navigate(["club-register", this.club.clubId]);
  }

  clubPayment() {
    this.router.navigate([
      "club-payment",
      this.club.clubId,
      this.club.clubName,
      this.club.regDate,
    ]);
  }

  //upload user image
  selectFile(event) {
    let clubUrl = "";
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    const filePath = `club/${this.club.clubId}`;
    //console.log(file);

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {

        fileRef.getDownloadURL().subscribe(res => {
          this.club.clubLogo = res;
          this.clubService.updateClub(this.club).subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
        });


      })
    )
      .subscribe()
  }
}
