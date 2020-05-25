import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../service/club/club.service';
import { ClubModel } from '../../class-model/ClubModel';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-club-register',
  templateUrl: './club-register.component.html',
  styleUrls: ['./club-register.component.scss']
})
export class ClubRegisterComponent implements OnInit {

   //reactive form definition
   clubRegisterFrom=this.fb.group({
    clubName:['',[Validators.required]],
    address:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    contactNumber:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
  });

  //getters for reactive form module fields
  get clubNameField(){
    return this.clubRegisterFrom.get('clubName');
  }
  get addressField(){
    return this.clubRegisterFrom.get('address')
  }
  get emailField(){
    return this.clubRegisterFrom.get('email')
  }
  get contactNumberField(){
    return this.clubRegisterFrom.get('contactNumber')
  }


  constructor(
    private clubService : ClubService,
    private fb:FormBuilder,
  ) { }

  ngOnInit() {
    // this.clubService.registerClub(new ClubModel(1,'Nuwan','','','',0,0,0,new Date(),null)).subscribe(
    //   response => {
    //     console.log(response)
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // );
  }

  clubRegister(){
    //Club Object
    let clubObject = new ClubModel(-1,this.clubNameField.value,this.addressField.value,this.emailField.value,this.contactNumberField.value,0,0,0,new Date(),null);
    console.log(clubObject)
  }

}
