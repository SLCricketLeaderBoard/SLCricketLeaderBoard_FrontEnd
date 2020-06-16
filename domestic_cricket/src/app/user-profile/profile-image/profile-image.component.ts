import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user/user-service.service';
import { UserModel } from '../../class-model/UserModel';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  selectedFiles: FileList;
  userId:string;
  uploaded: boolean=false;
  userProfileImageFrom:FormGroup
  user: UserModel;
  constructor(private storage: AngularFireStorage,private formBuilder: FormBuilder,private userService:UserServiceService) {
   
    this.userProfileImageFrom = this.formBuilder.group({
      userProfile: new FormControl("",Validators.required)});
   }

  ngOnInit() {
    this.userId=sessionStorage.getItem('userId');
    this.userService.getUserByUserId(this.userId).subscribe(response=>{
      this.user=response;
     console.log(response); });

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
}


uploadImage() {
    const file = this.selectedFiles.item(0);
    const filePath = `user/${this.userId}`;
    console.log(file);
    
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.uploaded=true;
        } )
     )
    .subscribe()

    
  }

  }

