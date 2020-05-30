import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../service/club/club.service';
import { ClubModel } from '../../class-model/ClubModel';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ManagerModel } from '../../class-model/ManagerModel';
import { ManagerService } from '../../service/manager/manager.service';
import { error } from 'protractor';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SwalMessage } from '../../shared/swal-message';


@Component({
  selector: 'app-club-register',
  templateUrl: './club-register.component.html',
  styleUrls: ['./club-register.component.scss']
})
export class ClubRegisterComponent implements OnInit {

  errorMessage;
  option:Number;//0-->Register , Any integer greater than zero(clubId)-->Update
  userRole:Number;
  selectedManagerName:String;//use when update club data
  availableManagers: ManagerModel[] = [];

  mainTitle:String="Club Register";
  formTitle:String="Registration Form";
  swalMessage:SwalMessage = new SwalMessage();


   //reactive form definition
   clubRegisterFrom=this.fb.group({
    clubName:['',[Validators.required]],
    address:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    contactNumber:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    manager: [null, [Validators.required]]
  });

  //getters for reactive form module fields
  get clubNameField(){
    return this.clubRegisterFrom.get('clubName');
  }
  get addressField(){
    return this.clubRegisterFrom.get('address');
  }
  get emailField(){
    return this.clubRegisterFrom.get('email');
  }
  get contactNumberField(){
    return this.clubRegisterFrom.get('contactNumber');
  }
  get managerField(){
    return this.clubRegisterFrom.get('manager');
  }



  constructor(
    private clubService : ClubService,
    private managerService: ManagerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.userRole = +sessionStorage.getItem("userRole");
    this.option = this.route.snapshot.params['option'];

    if(this.userRole!=1 && this.userRole!=2){
      this.router.navigate(['']);
    }
    if(this.userRole==2 && this.option==0){
      this.router.navigate(['']);
    }

    if(this.option>0){//club Update
      this.getClubData(this.option);
    }

    this.getAvailableManagers();
  }

  clubFormSubmit(){
    let club = new ClubModel(-1,this.clubNameField.value,this.addressField.value,this.emailField.value,this.contactNumberField.value,0,0,0,new Date(),this.managerField.value);

    if(this.option>0){
      this.clubUpdate(club);
    }else{
      this.clubRegister(club);
    }
  }

  clubRegister(club:ClubModel){
    this.clubService.registerClub(club).subscribe(
      response => {

          if(response==1){
            this.router.navigate(['club-list']);
            this.swalMessage.successMessage('Club registration successful');
          }
          if(response==0){
            this.errorMessage = 'There is another club has same name or email or address or contactNmber';
            this.swalMessage.notSuccessMessage('Club registration not successful');
          }
          
      },
      error =>{
        this.errorMessage="Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Club registration not successful');
      }
    );
  }


  clubUpdate(club:ClubModel){
    club.clubId = this.option;
    this.clubService.updateClub(club).subscribe(
      response => {
        if(response==1){
          this.swalMessage.successMessage('Club data successfully updated');

          if(this.userRole==1){//admin account
            this.router.navigate(['club-list']);
          }else{//manager accout
            this.router.navigate(['club-details']);
          }
         
        }
        if(response==0){
          this.errorMessage="There is another club has same name or email or address or contactNmber";
          this.swalMessage.notSuccessMessage('Club data not updated successful');
        }
      },
      error => {
        this.errorMessage="Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Club data not updated successful');
      }
    );
  }

  getAvailableManagers(){
    this.managerService.getAvailableManagers().subscribe(
      response => {
        this.availableManagers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubData(clubId:Number){
    this.clubService.getClubData(clubId).subscribe(
      response => {
        this.clubNameField.setValue(response.clubName);
        this.emailField.setValue(response.email);
        this.addressField.setValue(response.address);
        this.contactNumberField.setValue(response.contactNumber);
        this.managerField.setValue(response.managerId);

        this.selectedManagerName = response.managerId.userId.nameWithInitial+"";
        this.mainTitle = "Update "+this.clubNameField.value+" Details";
        this.formTitle = "Update Form";
      },
      error => {
        let status:Number = this.ErrorResponse(error);
        if(status==400){
          this.errorMessage="There is problem(Bad Request).Please try again";
        }else if(status==404){
          this.errorMessage="There is no any club for that id."
        }else{
          this.errorMessage="Server side error.Please try again"
        }
      }
    );
  }

  close(){
    this.errorMessage="";
  }

  public ErrorResponse(error: HttpErrorResponse) {
      return error.status;
  };

}
