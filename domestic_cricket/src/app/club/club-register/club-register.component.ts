import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../service/club/club.service';
import { ClubModel } from '../../class-model/ClubModel';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ManagerModel } from '../../class-model/ManagerModel';
import { ManagerService } from '../../service/manager/manager.service';
import { error } from 'protractor';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-club-register',
  templateUrl: './club-register.component.html',
  styleUrls: ['./club-register.component.scss']
})
export class ClubRegisterComponent implements OnInit {

  errorMessage;
  availableManagers: ManagerModel[] = [];
  selectManager: ManagerModel;

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
    private fb: FormBuilder
    
  ) { }

  ngOnInit() {
    this.getAvailableManagers();
  }

  clubRegister(){
    let club = new ClubModel(-1,this.clubNameField.value,this.addressField.value,this.emailField.value,this.contactNumberField.value,0,0,0,new Date(),this.managerField.value);

    this.clubService.registerClub(club).subscribe(
      response => {

          if(response==1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Club registration successful',
              showConfirmButton: false,
              timer: 2000
            });
          }
          if(response==0){
            this.errorMessage = 'There is another club has same name or email or address or contactNmber';
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Club registration not successful',
              showConfirmButton: false,
              timer: 2000
            })
          }
          
      },
      error =>{
        this.errorMessage="Please try again."
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Club registration not successful',
          showConfirmButton: false,
          timer: 2000
        });
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

  close(){
    this.errorMessage="";
  }

}
