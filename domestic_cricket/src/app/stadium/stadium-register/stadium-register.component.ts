import { Component, OnInit } from '@angular/core';
import { StadiumService } from '../../service/stadium/stadium.service';
import { StadiumModel } from '../../class-model/StadiumModel';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { error } from 'protractor';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SwalMessage } from '../../shared/swal-message';

@Component({
  selector: 'app-stadium-register',
  templateUrl: './stadium-register.component.html',
  styleUrls: ['./stadium-register.component.scss']
})
export class StadiumRegisterComponent implements OnInit {

  errorMessage;
  option:Number;//0-->Register , Any integer greater than zero(clubId)-->Update
  userRole:Number;
  selectedStadiumName:String;//use when update club data
  availableStadiums: StadiumModel[] = [];

  mainTitle:String="Stadium Register";
  formTitle:String="Registration Form";
  swalMessage:SwalMessage = new SwalMessage();

   //reactive form definition
  stadiumRegisterFrom=this.fb.group({
    name:['',[Validators.required]],
    address:['',[Validators.required]],
    contactnum:['',[Validators.required,Validators.email]],
    capacity: [null, [Validators.required]]
  });

  //getters for reactive form module fields
  get nameField(){
    return this.stadiumRegisterFrom.get('name');
  }
  get addressField(){
    return this.stadiumRegisterFrom.get('address');
  }
  get contactnumField(){
    return this.stadiumRegisterFrom.get('contactnum');
  }
  get capacityField(){
    return this.stadiumRegisterFrom.get('capacity');
  }

  constructor(
    private stadiumService : StadiumService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  stadiumFormSubmit(){
    let stadium = new StadiumModel(-1,this.nameField.value,this.addressField.value,this.contactnumField.value,this.capacityField.value);

  }

  stadiumRegister(stadium:StadiumModel){
    this.stadiumService.registerStadium(stadium).subscribe(
      response => {

          if(response==1){
            this.router.navigate(['stadium-list']);
            this.swalMessage.successMessage('Stadium registration successful');
          }
          if(response==0){
            this.errorMessage = 'There is another Stadium has same name or address or contactNmber';
            this.swalMessage.notSuccessMessage('Stadium registration not successful');
          }
          
      },
      error =>{
        this.errorMessage="Please try again."
        console.log(error);
        this.swalMessage.notSuccessMessage('Stadium registration not successful');
      }
    );
  }

}
