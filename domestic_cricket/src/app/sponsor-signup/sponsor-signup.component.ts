import { Component, OnInit } from '@angular/core';
import { SponsorSignupService } from '../service/sponsor-signup/sponsor-signup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sponsor-signup',
  templateUrl: './sponsor-signup.component.html',
  styleUrls: ['./sponsor-signup.component.scss']
})
export class SponsorSignupComponent implements OnInit {

  errorMessage: string = "";

  sponsorRegisterForm = this.fb.group({
    company_name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact_number: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    responsible_person: ['', [Validators.required]],
    nic: ['', [Validators.required]],
  }, {
  });

  get company_nameField() {
    return this.sponsorRegisterForm.get('company_name');
  }

  get addressField() {
    return this.sponsorRegisterForm.get('address');
  }

  get emailField() {
    return this.sponsorRegisterForm.get('email');
  }

  get contact_numberField() {
    return this.sponsorRegisterForm.get('contact_number');
  }

  get responsible_personField() {
    return this.sponsorRegisterForm.get('responsible_person');
  }

  get nicField() {
    return this.sponsorRegisterForm.get('nic');
  }

 

  constructor(
    private fb: FormBuilder  ) { }

  ngOnInit() {
  }

}
