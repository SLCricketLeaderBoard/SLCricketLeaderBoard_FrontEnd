import { Component, OnInit } from '@angular/core';
import { UserModel } from '../class-model/UserModel';
import { UserServiceService } from '../service/user/user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserModel;
  userId: String;

  constructor(private userService:UserServiceService) { 
    this.userId=sessionStorage.getItem('userId');
  }

  ngOnInit() {
    console.log(this.userId);
    this.userService.getUserByUserId(this.userId).subscribe(res=>{
      // console.log(res);
      this.user=res;
        
    });    
  }


}
